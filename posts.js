/*
 * 사이트 설정과 게시물 데이터.
 * 쿠팡 파트너스 링크, 자료 파일 주소는 여기만 바꾸면 전체에 반영된다.
 */
window.SITE = {
  // 쿠팡 파트너스에서 발급받은 링크로 교체
  coupangUrl: "https://link.coupang.com/a/h3BXfmue0y",
  // 구글 애널리틱스 측정 ID (G-로 시작). 비워두면 통계를 보내지 않는다
  gaId: "G-RLK2H1XH2H",
  // 메인 상단 추천 글: "latest"면 가장 최근 글. 특정 글로 고정하려면 slug를 넣는다 (예: "wedding-hall-1")
  featured: "latest",
  instagram: "https://www.instagram.com/jjomaeng.2/",
  youtube: "https://www.youtube.com/@jjomaeng2",
  kakao: "https://open.kakao.com/o/gkbqCBUi", // 새 자료 소식 오픈채팅
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
    // 자료 미리보기: 목차, 예시 하나, 흐리게 보여줄 체크칸
    preview: {
      toc: [
        ["지역부터 1~2개 고르기", "하객 동선으로 범위 정하고 나머지 저장 지우기"],
        ["웨딩홀 사진에서 딱 3개만 고르기", "저장한 사진 공통점을 세 단어로 적기"],
        ["안 맞는 홀부터 빼기", "투어해볼 후보만 남기는 기준"],
      ],
      sample: {
        label: "이렇게 해보세요",
        text: "“우리 하객은 주로 어디에서 올까?”<br />“역에서 걸어서 몇 분까지 괜찮을까?”",
        note: "답이 나오면 구 하나, 또는 역 두세 개로 범위를 적고 그 밖의 홀 저장은 지우기",
      },
      checks: [
        ["① 홀 분위기", "밝은 홀", "어두운 홀"],
        ["② 연출", "심플한 연출", "화려한 연출"],
        ["③ 공간감", "여백 있는 느낌", "꽉 찬 느낌"],
      ],
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
    slug: "wedding-hall-noble",
    category: "hall",
    categoryLabel: "웨딩홀",
    series: "웨딩홀 (2)",
    title: "제일 예뻤던 웨딩홀인데\n계약은 안 했어요",
    subtitle: "노블발렌티 대치 홀투어 · 실제 견적과 계약 전 체크 포인트",
    excerpt: "하객일 때부터 채플홀 원탑이던 노블발렌티 대치. 홀은 여전히 원탑인데, 견적과 조건에서 멈칫했던 이야기예요.",
    // 메인 추천 자리용 (줄바꿈, 웨딩홀 이름 강조)
    excerptHtml: "하객일 때부터 채플홀 원탑이던 <mark>노블발렌티 대치</mark>.<br />홀은 여전히 원탑인데, 견적과 조건에서 멈칫했던 이야기예요.",
    date: "2026.10.27",
    readTime: "5 min",
    image: "images/noble-3.png",
    imageAlt: "생화로 꾸민 노블발렌티 대치 채플홀 버진로드",
    file: {
      name: "노블발렌티 대치 실제 견적",
      desc: "날짜별 견적 3장 비교 · 견적 외 비용 · 상담 체크리스트",
      url: "https://app.notion.com/p/406ca52271a88173a5dbdc9a19d002dc",
    },
    preview: {
      toc: [
        ["견적 받은 조건", "예식 후보 3개 · 최소 보증인원 · 계약금"],
        ["날짜별 견적 비교", "기본 견적 vs 프로모션, 날짜마다 달라진 금액"],
        ["견적 외에 따로 드는 비용", "필수 본식스냅 · 선택 항목까지"],
        ["상담 때 꼭 물어볼 것", "투어 전에 체크해서 들고 갈 질문 6개"],
      ],
      sample: {
        label: "💘 팁!",
        text: "“처음에는 최소 보증인원으로<br />견적을 잡아보세요”",
        note: "대부분 홀에서 계약 후 보증인원을 올릴 수 있어서, 저희는 200명으로 가장 작게 요청했어요",
      },
      checks: [
        ["① 비선호 날짜 혜택", "물어봤다", "아직이다"],
        ["② 보증인원 조정 시점", "물어봤다", "아직이다"],
        ["③ 필수 추가 항목", "물어봤다", "아직이다"],
      ],
    },
    body: `
      <p class="lead">노블발렌티 대치는 제가 하객으로 결혼식 다닐 때부터 “와.. 여기 진짜 예쁘다” 했던 곳이에요. 제 기준 <u>채플홀 원탑 중 원탑.</u></p>
      <p>결혼식 로망 없다는 사람이 홀 분위기에는 꽤나 진심이었던 것..ㅎ 그래서 웨딩홀 투어 리스트에도 당연히 넣었어요.</p>

      <figure class="inline-figure figure-pair" data-reveal>
        <div class="inline-figure__img"><img src="images/noble-1.png" alt="아치형 천장 아래 연회장" loading="lazy" /></div>
        <div class="inline-figure__img"><img src="images/noble-2.png" alt="상담 때 나온 디저트와 음료" loading="lazy" /></div>
      </figure>

      <p>근데 결론부터 말하면 <b>홀은 여전히 원탑인데, 계약은 안 했습니다.</b></p>
      <p>네..? 추구미와 현실의 협의가 결렬된 건에 대하여.. 8-8</p>

      <section class="step">
        <span class="step__no">01</span>
        <div class="step__body">
          <p class="step__label">Hall</p>
          <h3>왜 이렇게 예쁜 건데요</h3>
          <p>높은 아치형 천장과 웅장한 채플홀 분위기가 제일 큰 매력이라고 생각해요.</p>
          <ul class="mood">
            <li><span>✦</span>단독 채플홀</li>
            <li><span>✦</span>약 10m 높이의 아치형 천장</li>
            <li><span>✦</span>분리예식 / 90분 간격</li>
            <li><span>✦</span>생화 장식이 어우러지는 채플 분위기</li>
          </ul>
          <p>이미 하객으로 경험해 본 홀이라 분위기는 어느 정도 알고 갔는데도 <u>역시 제 취향이더라고요.</u></p>
        </div>
      </section>

      <figure class="inline-figure figure-pair" data-reveal>
        <div class="inline-figure__img"><img src="images/noble-3.png" alt="생화로 꾸민 채플홀 버진로드" loading="lazy" /></div>
        <div class="inline-figure__img"><img src="images/noble-4.png" alt="흰 꽃으로 채운 아치 공간" loading="lazy" /></div>
      </figure>

      <figure class="inline-figure figure-pair" data-reveal>
        <div class="inline-figure__img"><img src="images/noble-5.png" alt="꽃 장식이 놓인 웰컴 공간" loading="lazy" /></div>
        <div class="inline-figure__img"><img src="images/noble-6.png" alt="신부대기실 입구" loading="lazy" /></div>
        <figcaption>홀 분위기만 점수 매기면 저한테는 거의 만점.</figcaption>
      </figure>

      <p>문제는.. <b>웨딩홀이 분위기만 보고 계약하는 곳은 아니라는 것.</b></p>

      <section class="step">
        <span class="step__no">02</span>
        <div class="step__body">
          <p class="step__label">Price</p>
          <h3>비선호 날짜인데도..?</h3>
          <p>제가 안내받은 날짜와 시간은 제가 원하던 선호 조건이 아니었어요. 그래서 사실 쪼끔 기대했거든요. 비선호 날짜와 시간대라면 그만큼 금액적인 메리트나 혜택이 있지 않을까..?</p>
          <p>그런데 상담받은 견적은 제 기준에서 크게 저렴하게 느껴지지 않았고, 특별한 혜택도 안내받지 못했어요. 물론 인기 있는 웨딩홀이고 날짜나 시간에 따라 조건은 다를 수 있겠지만!</p>
          <p class="highlight">메인타임도 아닌데 생각보다 가격 메리트가 없네..?</p>
          <p>취향은 강력하게 찬성 but 현실은 계산기 두드리는 중..ㅎ</p>
        </div>
      </section>

      <figure class="inline-figure figure-pair" data-reveal>
        <div class="inline-figure__img"><img src="images/noble-7.png" alt="웰컴드링크 바" loading="lazy" /></div>
        <div class="inline-figure__img"><img src="images/noble-8.png" alt="홀 안 생화 장식" loading="lazy" /></div>
      </figure>

      <section class="step">
        <span class="step__no">03</span>
        <div class="step__body">
          <p class="step__label">Consult</p>
          <h3>여러 홀을 다녀보고 알게 된 상담의 차이</h3>
          <p>이건 노블발렌티 대치만의 문제라기보다는 웨딩홀 투어를 다녀보면서 느낀 부분인데요. 상담 당시에는 홀 분위기와 뷔페 동선 위주로 안내받았고, 그때는 저도 별생각이 없었어요.</p>
          <p>그런데 여러 홀을 비교해 보니까 <b>아.. 이런 것도 물어봐야 했구나?</b> 싶은 것들이 생기더라고요.</p>
          <ul class="mood">
            <li><span>✦</span>계약 후 보증인원은 언제까지 조정 가능한지</li>
            <li><span>✦</span>최소 보증인원 변경은 가능한지</li>
            <li><span>✦</span>계약 변경이나 취소 시 조건은 어떤지</li>
            <li><span>✦</span>견적 외 추가로 발생할 수 있는 비용은 없는지</li>
          </ul>
          <p>질문하면 설명받을 수 있는 내용이었을 거예요. 첫 투어 때는 뭘 모르는지도 몰랐던 사람.. 그게 바로 접니다..ㅎ</p>
        </div>
      </section>

      <section class="result">
        <p class="result__label">Result</p>
        <p>노블발렌티 대치는 지금도 제 취향 원탑이에요.</p>
        <p>그런데 제게 안내된 계약 조건까지 원탑은 아니었던 것..ㅎ</p>
        <blockquote>“좋아하는 공간과<br />선택할 수 있는 공간은 다르구나”</blockquote>
        <p>이번 투어에서 <u>제일 크게 느낀 점이에요.</u></p>
      </section>

      <h2>웨딩홀 투어 전 이건 꼭 확인해 보세요</h2>
      <ol class="summary">
        <li><span>01</span>비선호 날짜·시간이라면 어떤 혜택이 있는지</li>
        <li><span>02</span>보증인원은 계약 후 언제까지 조정할 수 있는지</li>
        <li><span>03</span>견적 외 추가 비용은 어떤 게 있는지</li>
      </ol>
      <p>기본 견적만 듣지 말고 다른 날짜와 조건도 같이 물어보고, 꽃장식 · 연출 · 필수 선택 항목까지 실제 결제할 금액 기준으로 비교하세요.</p>
      <p>제가 실제로 받은 날짜별 견적 3장과 상담 체크리스트를 <b>자료</b>로 정리해뒀어요. 아래에서 받아가세요.</p>
    `,
  },
  {
    slug: "wedding-hall-3",
    locked: true, // 준비 중: 목록에 잠금으로만 표시
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
    locked: true, // 준비 중: 목록에 잠금으로만 표시
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
    locked: true, // 준비 중: 목록에 잠금으로만 표시
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
