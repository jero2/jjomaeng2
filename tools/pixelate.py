#!/usr/bin/env python3
"""사진 속 얼굴 모자이크. 박스는 원본 픽셀 좌표 x0,y0,x1,y1[:블록크기].
예) python3 tools/pixelate.py in.webp out.webp 140,812,194,880:11 302,804,370,874:12
얼굴 위치는 사진을 격자 이미지로 확대해서 눈으로 확인한 뒤 넣는다 (액자·화면 속 얼굴, 뒤쪽 작은 사람 포함)."""
import sys
from PIL import Image
src, dst, *boxes = sys.argv[1:]
im = Image.open(src).convert('RGB')
for spec in boxes:
    coords, _, b = spec.partition(':'); b = int(b or 10)
    x0, y0, x1, y1 = map(int, coords.split(','))
    r = im.crop((x0, y0, x1, y1)); w, h = r.size
    im.paste(r.resize((max(1, w // b), max(1, h // b)), Image.BOX).resize((w, h), Image.NEAREST), (x0, y0))
im.save(dst, quality=90)
print('saved', dst)
