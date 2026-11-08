"""사용: python3 tools/notion_to_site.py <노션 원고 md 파일> (노션 fetch의 <content> 본문을 저장한 파일)
노션 블로그 원고(공개 본문) -> 자료공유집 글 body HTML. 문장은 그대로, 모양만 바꾼다."""
import re, sys, json

def unescape(s):
    return re.sub(r'\\([\[\]~*_|#\\])', r'\1', s)

def inline(s):
    s = unescape(s)
    s = s.replace('&', '&amp;').replace('&amp;amp;', '&amp;')
    # links [text](url)
    s = re.sub(r'\[(.+?)\]\((https?://[^)\s]+)\)', lambda m: f'<a href="{m.group(2)}" target="_blank" rel="noopener">{m.group(1)}</a>' if not m.group(2).startswith('https://jero2.github.io/jjomaeng2/') else f'<a href="{m.group(2).split("jjomaeng2/")[1]}" data-link>{m.group(1)}</a>', s)
    s = re.sub(r'<span color="green_bg">(.*?)</span>', r'<mark class="hl">\1</mark>', s)
    s = re.sub(r'<span color="green">(.*?)</span>', r'<span class="t-green">\1</span>', s)
    s = re.sub(r'<span color="blue">(.*?)</span>', r'\1', s)
    s = re.sub(r'<i><span color="gray">(.*?)</span></i>', r'<span class="t-note">\1</span>', s)
    s = re.sub(r'<span color="gray">(.*?)</span>', r'<span class="t-gray">\1</span>', s)
    s = re.sub(r'<u>(.*?)</u>', r'<span class="ul">\1</span>', s)
    s = s.replace('<i>', '<em>').replace('</i>', '</em>')
    return s.strip()

def convert(md, images):
    md = md.split('\n---\n')[0]            # 블로그 전용 꼬리(자료 무료 공유, ABOUT WEDDING, 🔒) 앞까지만
    md = re.sub(r'<p>\n(.*?)\n</p>', lambda m: m.group(1).strip(), md, flags=re.S)
    md = re.sub(r'<columns>.*?</columns>', lambda m: '@@IMG:' + ','.join(re.findall(r'name=([^"&]+)', m.group(0))) + '@@', md, flags=re.S)
    md = re.sub(r'<image source="[^"]*name=([^"&]+)" />', r'@@IMG:\1@@', md)
    lines = [l.rstrip() for l in md.split('\n')]
    out, bundle, in_step = [], [], False
    used = set(images.pop('_skip', []))

    def flush():
        nonlocal bundle
        if bundle:
            out.append('<p>' + '<br />'.join(bundle) + '</p>')
        bundle = []

    for l in lines:
        t = l.strip()
        if not t:
            continue
        if t in ('<p />', '<p></p>'):
            flush(); continue
        if t == '.':
            flush(); continue
        if re.match(r'<b><span color="pink">', t):   # 핑크 자리(사진 추가 등)
            flush(); continue
        if t.startswith('@@IMG:'):
            flush()
            names = [n.rsplit('.', 1)[0] for n in t[6:-2].split(',')]
            hit = [images[n] for n in names if n in images and n not in used]
            used.update(n for n in names if n in images)
            if hit:
                if len(hit) >= 2:
                    out.append('<figure class="inline-figure figure-pair" data-reveal>' + ''.join(
                        f'<div class="inline-figure__img"><img src="{s}" alt="{a}" loading="lazy" /></div>' for s, a in hit[:2]) + '</figure>')
                else:
                    s, a = hit[0]
                    out.append(f'<figure class="inline-figure" data-reveal><div class="inline-figure__img"><img src="{s}" alt="{a}" loading="lazy" /></div></figure>')
            continue
        m = re.match(r'^##\s+(.*)$', t)
        if m and not t.startswith('###'):
            flush()
            if in_step:
                out.append('</div></section>'); in_step = False
            h = re.sub(r'<[^>]+>', '', unescape(m.group(1))).strip()
            n = re.match(r'^(\d\d)\.\s*(.*)$', h)
            if n:
                out.append(f'<section class="step"><span class="step__no">{n.group(1)}</span><div class="step__body"><h3>{n.group(2)}</h3>')
                in_step = True
            else:
                out.append(f'<h2>{h}</h2>')
            continue
        m = re.match(r'^###\s+(.*)$', t)
        if m:
            flush()
            h = re.sub(r'<[^>]+>', '', unescape(m.group(1))).strip()
            out.append(f'<h4>{h}</h4>')
            continue
        bundle.append(inline(t))
    flush()
    if in_step:
        out.append('</div></section>')
    # 맨 앞 묶음들(시리즈 인사·후킹 줄)은 lead 앞 인트로
    return '\n      '.join(out)

if __name__ == '__main__':
    # images: {"IMG_0404": ["images/chapel-2.jpg", "설명"], "_skip": ["IMG_0425"]} — 노션 사진 이름이 같은 자리에만 넣는다
    images = {k: tuple(v) if k != '_skip' else v for k, v in (json.loads(sys.argv[2]) if len(sys.argv) > 2 else {}).items()}
    md = open(sys.argv[1]).read()
    print(convert(md, images))
