/*
 * 사이트 설정과 게시물 데이터.
 * 쿠팡 파트너스 링크, 자료 파일 주소는 여기만 바꾸면 전체에 반영된다.
 */
window.SITE = {
  // 쿠팡 파트너스에서 발급받은 링크로 교체
  coupangUrl: "https://link.coupang.com/a/h3BXfmue0y",
};

window.POSTS = [
  {
    slug: "wedding-hall-1",
    category: "hall",
    categoryLabel: "웨딩홀",
    series: "웨딩홀 (1)",
    title: "홀 4곳 하루에 보고\n원픽 정한 순서",
    subtitle: "웨딩홀 못 고르겠다면, 투어 후보부터 줄여볼까요?",
    excerpt: "지역도 넓고 예쁜 홀도 너무 많을 때. 홀보다 먼저 지역부터 줄였더니 하루 4곳 투어로 고민 없이 원픽이 나왔어요.",
    date: "2026.10.10",
    readTime: "4 min",
    image: "images/forehead.jpg",
    imageAlt: "이마를 맞댄 따뜻한 웨딩 스냅",
    file: {
      name: "웨딩홀 너무 많아서 못 고르겠다면",
      desc: "지역 고르기 · 사진에서 3개 고르기 · 안 맞는 홀 빼기",
      url: "https://app.notion.com/p/jero2/01-3f9ca52271a880789543d09ae16df1b6",
    },
    body: `
      <p class="lead">지역도 넓고, 예쁜 홀도 너무 많고.. 그냥 찾기 시작하면 후보만 계속 늘어나요. 그래서 저는 <u>홀보다 먼저 지역부터 줄였어요.</u></p>

      <section class="step">
        <span class="step__no">01</span>
        <div class="step__body">
          <p class="step__label">Step 1</p>
          <h3>지역 먼저 정하기</h3>
          <p>저는 지역을 먼저 좁혔어요.</p>
          <p>지역이 정해지니까 볼 필요 없는 홀이 한 번에 빠지고, 그 안에서만 찾으면 돼서 훨씬 편하더라고요.</p>
        </div>
      </section>

      <section class="step">
        <span class="step__no">02</span>
        <div class="step__body">
          <p class="step__label">Step 2</p>
          <h3>내 웨딩홀 추구미 찾기</h3>
          <p>지역 안에서도 예쁜 홀은 여전히 많았는데요. 제가 계속 저장한 웨딩홀은 이랬어요.</p>
          <ul class="mood">
            <li><span>✦</span>밝고 따뜻한 분위기</li>
            <li><span>✦</span>심플한 연출</li>
            <li><span>✦</span>여백 있는 느낌</li>
          </ul>
          <p>이 3가지에 맞는 홀만 후보에 넣었어요.</p>
          <p class="highlight">취향을 설명할 필요 없이, 자료에서 3번만 고르면 돼요.</p>
        </div>
      </section>

      <figure class="inline-figure" data-reveal>
        <div class="inline-figure__img"><img src="images/altar-hug.jpg" alt="제단 앞 따뜻한 웨딩 포옹" loading="lazy" /></div>
        <figcaption>밝고 따뜻한 분위기, 심플한 연출, 여백 있는 느낌.</figcaption>
      </figure>

      <section class="step">
        <span class="step__no">03</span>
        <div class="step__body">
          <p class="step__label">Step 3</p>
          <h3>가능하면 암행투어 가보기</h3>
          <p>후보 홀들을 하객 입장으로도 미리 보고 왔어요. (물론 예쁘게 차려입고,,! 조심스럽게요)</p>
          <p>하객의 동선, 오는 길을 확인했고요. 사진으로는 좋았는데 실제로 보니 아닌 곳도 있었고, 반대로 생각보다 더 마음에 든 곳도 있었어요.</p>
        </div>
      </section>

      <section class="result">
        <p class="result__label">Result</p>
        <p>그래서 실제 홀 투어 날에는</p>
        <p class="result__strike"><s>“여기가 예쁜가?”</s></p>
        <p>부터 보는 게 아니라</p>
        <blockquote>“내가 원했던 느낌과<br />조건이 실제로 맞나?”</blockquote>
        <p>확인하는 느낌이었어요. 결과적으로 <u>하루 4곳 투어하고 고민 없이 원픽 결정!</u></p>
      </section>

      <h2>제가 다시 홀을 고른다면</h2>
      <ol class="summary">
        <li><span>01</span>지역 좁히기</li>
        <li><span>02</span>내 웨딩홀 추구미 찾기</li>
        <li><span>03</span>가능하면 미리 보기</li>
        <li><span>04</span>실제 홀 투어</li>
      </ol>
      <p>이 순서로 또 할 것 같아요.</p>
      <p>지역을 좁혀두니 하루 동선이 짧아졌고, 추구미를 알고 가니까 웨딩홀 원픽이 빨리 보였어요. 그다음엔 예산 · 주차 · 날짜로 최종 순위만 정하면 됐고요.</p>
      <p>실제로 쓴 방식 그대로 <b>자료</b>로 만들어뒀어요. 아래에서 받아가세요.</p>
    `,
  },
  {
    slug: "wedding-hall-2",
    category: "hall",
    categoryLabel: "웨딩홀",
    series: "웨딩홀 (2)",
    title: "투어 당일,\n이것만 보고 왔어요",
    subtitle: "상담 실장님 말에 휩쓸리지 않는 체크 포인트",
    excerpt: "투어 당일엔 설명을 듣다 보면 정작 봐야 할 걸 놓쳐요. 현장에서 꼭 확인한 것들만 한 장으로 정리했어요.",
    date: "2026.10.14",
    readTime: "3 min",
    image: "images/altar-hug.jpg",
    imageAlt: "제단 앞 따뜻한 웨딩 포옹",
    file: {
      name: "웨딩홀 투어 당일 체크리스트",
      desc: "홀 · 동선 · 식사 · 계약 조건 한 장 정리",
      url: "#",
    },
    body: `
      <p class="lead">투어 당일엔 생각보다 정신이 없어요. 설명 듣고, 사진 찍고, 견적 받다 보면 <u>정작 보려던 걸 놓치고 나와요.</u></p>

      <section class="step">
        <span class="step__no">01</span>
        <div class="step__body">
          <p class="step__label">Check 1</p>
          <h3>홀 안에서 볼 것</h3>
          <p>버진로드 길이, 천장 높이, 조명 색. 사진보다 실제가 어두운 곳이 꽤 많았어요.</p>
        </div>
      </section>

      <section class="step">
        <span class="step__no">02</span>
        <div class="step__body">
          <p class="step__label">Check 2</p>
          <h3>하객 입장에서 볼 것</h3>
          <p>엘리베이터 대기, 로비 혼잡도, 식당까지 가는 길. 하객이 불편하면 그날 기억이 그렇게 남더라고요.</p>
        </div>
      </section>

      <section class="step">
        <span class="step__no">03</span>
        <div class="step__body">
          <p class="step__label">Check 3</p>
          <h3>견적서에서 볼 것</h3>
          <p>보증 인원, 식대 포함 항목, 추가금 붙는 연출. 계약 전에 꼭 서면으로 받아두세요.</p>
        </div>
      </section>

      <p>현장에서 체크만 하면 되도록 한 장짜리 자료로 만들어뒀어요.</p>
    `,
  },
  {
    slug: "wedding-hall-3",
    category: "hall",
    categoryLabel: "웨딩홀",
    series: "웨딩홀 (3)",
    title: "최종 2곳에서\n고민될 때 정한 기준",
    subtitle: "예산 · 주차 · 날짜로 순위 매기기",
    excerpt: "마음에 드는 홀이 두 곳 남았을 때, 감이 아니라 기준으로 순위를 정한 방법이에요.",
    date: "2026.10.18",
    readTime: "3 min",
    image: "images/ring-hands.jpg",
    imageAlt: "신랑 손 위, 반지 낀 신부의 손",
    file: {
      name: "웨딩홀 최종 비교표",
      desc: "예산 · 주차 · 날짜 가중치 비교 시트",
      url: "#",
    },
    body: `
      <p class="lead">둘 다 예쁘고 둘 다 괜찮을 때가 제일 어려워요. 저는 <u>마음은 잠깐 내려두고 조건부터 비교했어요.</u></p>

      <section class="step">
        <span class="step__no">01</span>
        <div class="step__body">
          <p class="step__label">Criteria 1</p>
          <h3>예산</h3>
          <p>식대 × 보증 인원에 대관료, 연출 추가금까지 더한 총액으로 비교했어요.</p>
        </div>
      </section>

      <section class="step">
        <span class="step__no">02</span>
        <div class="step__body">
          <p class="step__label">Criteria 2</p>
          <h3>주차</h3>
          <p>주차 가능 대수, 무료 시간, 대중교통 접근성. 어른들이 제일 많이 물어보시는 부분이에요.</p>
        </div>
      </section>

      <section class="step">
        <span class="step__no">03</span>
        <div class="step__body">
          <p class="step__label">Criteria 3</p>
          <h3>날짜</h3>
          <p>원하는 달, 원하는 시간대가 남아 있는지. 여기서 자연스럽게 정리되는 경우도 많아요.</p>
        </div>
      </section>

      <p>항목별로 점수만 넣으면 순위가 나오는 비교표로 만들어뒀어요.</p>
    `,
  },
  {
    slug: "studio-1",
    category: "studio",
    categoryLabel: "스튜디오",
    series: "스튜디오 (1)",
    title: "스튜디오 고르기 전에\n추구미부터 정리하기",
    subtitle: "인물 중심 vs 배경 중심, 내 취향은 어느 쪽?",
    excerpt: "포트폴리오를 수백 장 넘겨도 못 고르겠다면, 내가 저장한 사진의 공통점부터 찾아보세요.",
    date: "2026.10.20",
    readTime: "3 min",
    image: "",
    imageAlt: "",
    file: {
      name: "스튜디오 추구미 셀프 체크",
      desc: "인물 · 배경 · 톤 3가지 질문",
      url: "#",
    },
    body: `
      <p class="lead">스튜디오도 홀이랑 똑같았어요. 예쁜 곳은 많은데 <u>내가 뭘 원하는지 모르면 계속 헤매요.</u></p>

      <section class="step">
        <span class="step__no">01</span>
        <div class="step__body">
          <p class="step__label">Step 1</p>
          <h3>저장한 사진 다시 보기</h3>
          <p>인스타에 저장해둔 사진을 쭉 넘겨보면 공통점이 보여요. 인물이 크게 나온 사진인지, 공간이 넓게 나온 사진인지.</p>
        </div>
      </section>

      <section class="step">
        <span class="step__no">02</span>
        <div class="step__body">
          <p class="step__label">Step 2</p>
          <h3>톤 정하기</h3>
          <p>밝고 화사한 톤, 차분한 필름 톤, 흑백 위주. 한 가지만 정해도 후보가 절반으로 줄어요.</p>
        </div>
      </section>

      <p>질문 3개에 답하면 내 스튜디오 추구미가 나오는 자료예요.</p>
    `,
  },
  {
    slug: "studio-2",
    category: "studio",
    categoryLabel: "스튜디오",
    series: "스튜디오 (2)",
    title: "촬영 당일\n후회 없게 챙긴 것들",
    subtitle: "준비물부터 포즈 레퍼런스까지",
    excerpt: "촬영 끝나고 '이거 찍을 걸' 하지 않도록, 미리 준비한 것들을 정리했어요.",
    date: "2026.10.21",
    readTime: "3 min",
    image: "",
    imageAlt: "",
    file: {
      name: "스튜디오 촬영 준비 리스트",
      desc: "준비물 · 소품 · 포즈 레퍼런스 정리",
      url: "#",
    },
    body: `
      <p class="lead">촬영은 생각보다 빨리 끝나요. 그래서 <u>찍고 싶은 컷은 미리 정해 가야 해요.</u></p>

      <section class="step">
        <span class="step__no">01</span>
        <div class="step__body">
          <p class="step__label">Ready 1</p>
          <h3>준비물</h3>
          <p>누드톤 속옷, 편한 슬리퍼, 간단한 간식, 보조 배터리. 하루가 길어요.</p>
        </div>
      </section>

      <section class="step">
        <span class="step__no">02</span>
        <div class="step__body">
          <p class="step__label">Ready 2</p>
          <h3>포즈 레퍼런스</h3>
          <p>꼭 찍고 싶은 컷 5장만 골라서 작가님께 미리 보내두면 현장이 훨씬 편해져요.</p>
        </div>
      </section>

      <p>촬영 전날 체크만 하면 되는 리스트로 만들어뒀어요.</p>
    `,
  },
];
