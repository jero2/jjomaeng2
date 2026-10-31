#!/usr/bin/env python3
"""클로드 디자인 캔버스 아트보드(.dc.html)를 1080x1350 PNG로 렌더링.

사용 순서 (Claude 세션에서):
  1) Artifact read 로 캔버스 파일을 받는다 (한 폴더 = ROOT 에 저장됨)
     paths: project/<보드>.dc.html ..., project/ds/jjomaeng/fonts.css, project/ds/jjomaeng/fonts/*
  2) python3 tools/render_feed.py --root ROOT --boards A01,A02 --list-blobs
     -> 필요한 /_blob/ 자산 id 목록 출력. 각 id 를 Artifact read path=<id> 로 받으면 ROOT/<id>.<확장자> 로 저장됨
  3) python3 tools/render_feed.py --root ROOT --boards A01,A02,... --out OUT --prefix noble_hook
     -> OUT/noble_hook_01.png ... 생성 (보드 순서대로 번호)
아트보드의 {{hole}} 은 data-props 의 default 값으로 채운다 (Tweaks 에서 바꾼 값이 default 로 저장됨).
"""
import argparse, asyncio, html, json, re, sys
from pathlib import Path

def parse(root: Path, board: str):
    t = (root / 'project' / f'{board}.dc.html').read_text(encoding='utf-8')
    body = t[t.index('<x-dc>') + 6: t.rindex('</x-dc>')]
    m = re.search(r'data-props=(\'([^\']*)\'|"([^"]*)")', t)
    props = json.loads(html.unescape(m.group(2) if m.group(2) is not None else m.group(3))) if m else {}
    vals = {k: v.get('default') for k, v in props.items() if not k.startswith('$') and isinstance(v, dict)}
    return body, vals

def blob_ids(body):
    return sorted(set(re.findall(r'/_blob/([0-9a-f]{32})', body)))

def find_blob(root: Path, bid: str):
    hits = [p for p in root.glob(f'{bid}.*')] + [p for p in root.rglob(f'{bid}.*')]
    return hits[0] if hits else None

def build(root: Path, board: str):
    body, vals = parse(root, board)
    body = re.sub(r'<link[^>]*fonts\.googleapis[^>]*>', '', body)
    body = body.replace('<helmet>', '').replace('</helmet>', '')
    def hole(mm):
        k = mm.group(1).strip()
        if k not in vals:
            sys.exit(f'{board}: data-props 에 없는 값 {{{{{k}}}}}')
        return str(vals[k])
    body = re.sub(r'\{\{\s*([\w.]+)\s*\}\}', hole, body)
    missing = []
    def blob(mm):
        p = find_blob(root, mm.group(1))
        if not p:
            missing.append(mm.group(1)); return mm.group(0)
        return p.as_uri()
    body = re.sub(r'/_blob/([0-9a-f]{32})', blob, body)
    if missing:
        sys.exit(f'{board}: 자산 없음 {sorted(set(missing))} -> Artifact read path=<id> 로 받아주세요')
    fonts = root / 'project' / 'ds' / 'jjomaeng' / 'fonts.css'
    link = f'<link rel="stylesheet" href="{fonts.as_uri()}">' if fonts.exists() else ''
    return f'<!doctype html><html lang="ko"><head><meta charset="utf-8">{link}</head><body style="margin:0;background:#FFFFFF">{body}</body></html>'

async def render(root, boards, out, prefix, w, h):
    from playwright.async_api import async_playwright
    out.mkdir(parents=True, exist_ok=True)
    tmp = out / '_html'; tmp.mkdir(exist_ok=True)
    async with async_playwright() as p:
        b = await p.chromium.launch(args=['--allow-file-access-from-files'])
        pg = await b.new_page(viewport={'width': w, 'height': h}, device_scale_factor=1)
        for i, n in enumerate(boards, 1):
            f = tmp / f'{n}.html'; f.write_text(build(root, n), encoding='utf-8')
            await pg.goto(f.as_uri()); await pg.evaluate('document.fonts.ready'); await pg.wait_for_timeout(400)
            bad = await pg.evaluate("() => [...document.images].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src)")
            dst = out / f'{prefix}_{i:02d}.png'
            await pg.screenshot(path=str(dst), clip={'x': 0, 'y': 0, 'width': w, 'height': h})
            print(n, '->', dst.name, '| 깨진 이미지:', bad)
        await b.close()

def main():
    a = argparse.ArgumentParser()
    a.add_argument('--root', required=True); a.add_argument('--boards', required=True)
    a.add_argument('--out'); a.add_argument('--prefix', default='slide')
    a.add_argument('--width', type=int, default=1080); a.add_argument('--height', type=int, default=1350)
    a.add_argument('--list-blobs', action='store_true')
    o = a.parse_args(); root = Path(o.root); boards = [x.strip() for x in o.boards.split(',') if x.strip()]
    if o.list_blobs:
        for n in boards:
            body, _ = parse(root, n)
            print(n, ' '.join(f'{i}{"" if find_blob(root, i) else " (없음)"}' for i in blob_ids(body)))
        return
    if not o.out: sys.exit('--out 필요')
    asyncio.run(render(root, boards, Path(o.out), o.prefix, o.width, o.height))

if __name__ == '__main__':
    main()
