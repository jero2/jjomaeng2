"""images/ 안의 .heic 를 .jpg 로 바꾼다 (방향 보정, 긴 변 2400px 이하). 원본 heic는 지운다.
fetch-images 워크플로가 내려받은 뒤 부른다: python3 tools/heic2jpg.py images
"""
import sys, pathlib
from PIL import Image, ImageOps
import pillow_heif
pillow_heif.register_heif_opener()
root = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else "images")
for p in sorted(list(root.glob("*.heic")) + list(root.glob("*.HEIC"))):
    im = ImageOps.exif_transpose(Image.open(p)).convert("RGB")
    im.thumbnail((2400, 2400))
    out = p.with_suffix(".jpg")
    im.save(out, "JPEG", quality=88)
    p.unlink()
    print("jpg", out, im.size)
