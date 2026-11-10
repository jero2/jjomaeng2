"""노션 블로그 원고 -> 업리카 네이버 블로그 마크업 (11/8 스타일). 문장은 그대로, 모양만 바꾼다.

사용: python3 tools/notion_to_naver.py <노션 md> '<이미지 json>' <공통 꼬리 md>
이미지 json: {"노션 파일명(확장자 뺀)": "med_xxx", ...}  — 없는 사진은 빠진다.
꼬리(자료 무료 공유 + ABOUT WEDDING)는 노션 첫 '---' 뒤를 버리고 공통 꼬리 파일로 붙인다.
"""
import re, sys, json

ZW = "\u200b"
H2 = "{.size=19 .font=마루부리 .color=#2e8b74}"
GRAY = "{.size=13 .color=#777777}"
MINT_BLACK = "{.color=#b4f9e7 .bg=#333333}"
MINT_BG = "{.bg=#b4f9e7}"
TITLE_MAX = 16  # 모바일 한 줄 글자 수 (11/10 Rachel: 번호 소제목은 두 줄로)


def mobile_split(h, limit=TITLE_MAX):
    """긴 제목(소제목·번호 팁 제목)을 모바일용 두 줄로. 규칙: 번호 + 앞 구절 / 나머지.
    쉼표가 있으면 쉼표 뒤에서 자동으로 끊는다 ('04. 다시 준비한다면,' / '이건 꼭 먼저 할 거예요!').
    쉼표가 없으면 뜻 단위로 끊어야 해서 자동으로 안 끊고 경고만 낸다 -> 변환 결과에서 직접 줄을 나눈다
    (예: '03. 날짜가 정해져 있던 게' / '오히려 좋았다고요?')."""
    h = h.strip()
    if '\n' in h:  # 노션에서 직접 나눈 줄(<br />)은 그대로
        return [x.strip() for x in h.split('\n') if x.strip()]
    if len(h) <= limit:
        return [h]
    m = re.match(r'^(.{4,}?,)\s+(.+)$', h)
    if m and len(m.group(1)) <= limit + 2:
        return [m.group(1)] + mobile_split(m.group(2), limit)
    print(f'[줄바꿈 확인 · 노션 제목에 줄바꿈(Shift+Enter) 넣기] {len(h)}자: {h}', file=sys.stderr)
    return [h]


def unescape(s):
    return re.sub(r'\\([\[\]~*_|#\\])', r'\1', s)


def inline(s):
    s = unescape(s)
    s = re.sub(r'<b><u>(.*?)</u></b>', r'**++\1++**', s)
    s = re.sub(r'<u>(.*?)</u>', r'++\1++', s)
    s = re.sub(r'<b>(.*?)</b>', r'**\1**', s)
    s = re.sub(r'<span color="[a-z_]+">(.*?)</span>', r'\1', s)
    s = s.replace('<br />', '\n')
    return s.strip()


def line(t):
    """한 줄 -> (텍스트, 줄 전체 속성)"""
    m = re.fullmatch(r'<i><span color="gray">(.*)</span></i>', t)
    if m:
        return f'*{inline(m.group(1))}* {GRAY}'
    m = re.fullmatch(r'<span color="gray">(.*)</span>', t)
    if m:
        return f'{inline(m.group(1))} {GRAY}'
    m = re.fullmatch(r'<b><span color="green">(.*)</span></b>', t)
    if m:
        return '\n'.join(f'**{x}** {MINT_BLACK}' for x in mobile_split(inline(m.group(1))))
    m = re.fullmatch(r'<b><span color="green_bg">(.*)</span></b>', t)
    if m:
        return f'**{inline(m.group(1))}** {MINT_BG}'
    return inline(t)


def convert(md, images, tail):
    md = md.split('\n---\n')[0]
    md = re.sub(r'<columns>.*?</columns>', lambda m: '@@IMG:' + ','.join(re.findall(r'name=([^"&]+)', m.group(0))) + '@@', md, flags=re.S)
    md = re.sub(r'<image source="[^"]*name=([^"&]+)" />', r'@@IMG:\1@@', md)
    out, bundle = [], []

    def flush():
        nonlocal bundle
        if bundle:
            out.append('\n'.join(bundle))
        bundle = []

    for raw in md.split('\n'):
        t = raw.strip()
        if not t:
            continue
        if t in ('<p />', '<p></p>'):
            flush(); continue
        if t == '.':
            flush(); out.append('.'); continue
        if t.startswith('@@IMG:'):
            flush()
            ids = [images[n.rsplit('.', 1)[0]] for n in t[6:-2].split(',') if n.rsplit('.', 1)[0] in images]
            if len(ids) >= 2:
                out.append('@group(' + ', '.join(f'media:{i}' for i in ids) + ')')
            elif ids:
                out.append(f'![](media:{ids[0]})')
            continue
        m = re.match(r'^##\s+(.*)$', t)
        if m and not t.startswith('###'):
            flush()
            h = re.sub(r'<[^>]+>', '', unescape(m.group(1)).replace('<br />', '\n')).strip()
            out.append(ZW + '\n' + '\n'.join(f'**{x}** {H2}' for x in mobile_split(h)))
            continue
        m = re.match(r'^###\s+(.*)$', t)
        if m:
            flush()
            h = re.sub(r'<[^>]+>', '', unescape(m.group(1)).replace('<br />', '\n')).strip()
            out.append('\n'.join(f'**{x}** {MINT_BLACK}' for x in mobile_split(h)))
            continue
        bundle.append(line(t))
    flush()
    return '\n\n'.join(out).rstrip() + '\n\n' + tail.strip() + '\n'


if __name__ == '__main__':
    md = open(sys.argv[1]).read()
    images = json.loads(sys.argv[2]) if len(sys.argv) > 2 else {}
    tail = open(sys.argv[3]).read() if len(sys.argv) > 3 else ''
    print(convert(md, images, tail))
