# 쪼맹의 자료공유집

결혼 준비 자료를 나누는 매거진형 정적 블로그. 빌드 없이 `index.html`을 열거나 GitHub Pages에 올리면 된다.

## 파일

- `index.html` 뼈대, 로딩 인트로, 다운로드 모달
- `styles.css` 디자인 (Pretendard, 자간 -0.02em)
- `app.js` 해시 라우팅, 페이지 전환, 스크롤 등장, 쿠팡 방문 후 다운로드 열림
- `posts.js` 사이트 설정과 게시물 5개
- `images/` 사진

## 바꿔야 할 것

1. `posts.js`의 `SITE.coupangUrl`을 쿠팡 파트너스 링크로 교체
2. 각 게시물 `file.url`에 실제 자료 주소(PDF, 노션 공유 링크 등) 입력
3. `images/`에 사진 넣기 (파일명 그대로)
   - `forehead.jpg` 이마를 맞댄 따뜻한 웨딩 스냅
   - `altar-hug.jpg` 제단 앞 따뜻한 웨딩 포옹
   - `ring-hands.jpg` 신랑 손 위, 반지 낀 신부의 손

사진이 없으면 선 패턴 커버로 자동 대체된다.

## 로컬 실행

```
npx http-server -p 8080
```
