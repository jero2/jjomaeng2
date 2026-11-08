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
  blog: "https://blog.naver.com/guri2bottali",
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
    // 메인 추천 자리용 (줄바꿈, 핵심 강조)
    excerptHtml: "지역도 넓고 예쁜 홀도 너무 많을 때.<br />홀보다 먼저 지역부터 줄였더니 <mark>하루 4곳 투어</mark>로 고민 없이 원픽이 나왔어요.",
    date: "2026.10.10",
    readTime: "4 min",
    image: "images/forehead.jpg",
    imageAlt: "이마를 맞댄 따뜻한 웨딩 스냅",
    file: {
      name: "웨딩홀 너무 많아서 못 고르겠다면",
      desc: "지역 고르기 · 사진에서 3개 고르기 · 안 맞는 홀 빼기",
      url: "https://app.notion.com/p/jero2/01-3f9ca52271a880789543d09ae16df1b6",
    },
    vaultLabel: "자료",
    vault: `
      <p class="vault-lead">웨딩홀을 찾기 시작하면 예쁜 곳은 계속 나오고, 저장한 곳만 늘어나더라고요. 저도 처음엔 더 많이 보면 답이 나올 줄 알았는데 오히려 후보를 먼저 줄여두는 게 훨씬 편했어요. 복잡하게 생각하지 말고 아래 순서대로만 해보세요.</p>
      <div class="vault-sum">
        <p class="vault-sum__label">웨딩홀 투어 선정 순서</p>
        <ol>
          <li><span>01</span><b>지역부터 1~2개 고르기</b></li>
          <li><span>02</span><b>웨딩홀 사진에서 딱 3개만 고르기</b></li>
          <li><span>03</span><b>안 맞는 홀부터 빼기</b></li>
        </ol>
      </div>
      <p class="vault-small"><a href="https://link.coupang.com/a/hQwyeSXElM" target="_blank" rel="noopener">이 다이어리</a>에 투어 당일 기준을 적어서 들고 가시면 홀끼리 비교하기가 한결 쉬워집니다.<br />이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.</p>

      <h3><span>01</span>지역부터 1~2개 고르기</h3>
      <p>먼저 “어떤 홀이 예쁜지”보다 <u>실제로 보러 다닐 지역</u>부터 줄여보세요.</p>
      <h4>지도 앱에 저장한 홀이 스무 곳을 넘어갈 때</h4>
      <p>홀 스타일로 찾기 시작하면 후보가 계속 늘어납니다. 지역을 먼저 정하면 그 안에서만 찾으면 돼서 훨씬 편해요.</p>
      <p>예랑이 '난 아무 데나 괜찮아'라고 해도 지역은 하객 동선 이야기라 둘이 같이 정하기 좋은 주제입니다. <u>(서로 부모님과 웨딩홀 위치를 꼭 파악해 보세요.)</u></p>
      <p class="vault-note"><b>이렇게 해보세요</b>“우리 하객은 주로 어디에서 올까?”<br />“역에서 걸어서 몇 분까지 괜찮을까?”<br />— 답이 나오면 구 하나, 또는 역 두세 개로 범위를 적고 그 밖의 홀 저장은 지우기</p>
      <div class="vault-tip">
        <p class="vault-tip__label">✕ 이건 잠시 미뤄두세요</p>
        <p>예쁜 홀부터 잔뜩 저장해두고 지역은 나중에 정하기</p>
      </div>
      <p>지역이 정해졌다면 그 밖의 홀은 일단 보류합니다. 웨딩홀을 서울 전체에서 찾는 것과 한두 지역 안에서 찾는 건 후보 수부터 달라져요.</p>

      <h3><span>02</span>웨딩홀 사진에서 딱 3개만 고르기</h3>
      <p>지역을 좁혀도 예쁜 홀은 여전히 많습니다.</p>
      <h4>지역 안에서도 예쁜 홀이 여전히 많을 때</h4>
      <p>이럴 때 ‘내 취향이 뭘까?’ 오래 생각하지 말고, 저장한 사진을 보면서 아래에서 더 끌리는 쪽만 골라보세요.</p>
      <p>저는 밝은 분위기, 심플한 연출, 장식을 꽉 채우지 않은 쪽이었고, 이 분위기와 너무 먼 곳은 후보에서 뺐습니다.</p>
      <p class="vault-note"><b>이렇게 해보세요</b>저장한 홀 사진을 한 화면에 모아놓고 공통점을 세 단어로 적기.<br />예) 밝다 / 심플하다 / 너무 화려하지 않다<br />— 세 단어 중 하나라도 정반대인 홀은 투어 리스트에서 빼기</p>
      <div class="vault-tip">
        <p class="vault-tip__label">✕ 이건 잠시 미뤄두세요</p>
        <p>SNS 저장 수나 후기 많은 순으로 투어 리스트 짜기</p>
      </div>
      <p>작성하기 어렵다면, 저장한 사진을 보면서 2가지 중 체크를 해보세요.</p>
      <div class="vault-picks">
        <div class="vault-pick"><p>① 홀 분위기</p><label><input type="checkbox" data-pick="mood-bright" /><span>밝은 홀</span></label><label><input type="checkbox" data-pick="mood-dark" /><span>어두운 홀</span></label></div>
        <div class="vault-pick"><p>② 연출</p><label><input type="checkbox" data-pick="deco-simple" /><span>심플한 연출</span></label><label><input type="checkbox" data-pick="deco-rich" /><span>화려한 연출</span></label></div>
        <div class="vault-pick"><p>③ 공간감</p><label><input type="checkbox" data-pick="space-open" /><span>여백 있는 느낌</span></label><label><input type="checkbox" data-pick="space-full" /><span>꽉 찬 느낌</span></label></div>
      </div>
      <p>정답은 없어요. 지금 내가 계속 끌리는 방향을 파악한다고 알아둬도 충분해요.</p>

      <h3><span>03</span>이제 안 맞는 홀부터 빼기</h3>
      <p>앞에서 정한 지역, 추구미 3가지와 너무 멀다면 후보에서 잠깐 빼봅니다.</p>
      <p>그리고 실제 투어해보고 싶은 곳만 남겨주세요. (플래너가 있다면 플래너에게 ~~한 취향으로 홀 후보 리스트업해달라고 요청해 보세요.)</p>
      <div class="vault-sum is-cands">
        <p class="vault-sum__label">웨딩홀 후보</p>
        <ol>
          <li><span>1</span>(마리아쥬 스퀘어)</li>
          <li><span>2</span>(더채플앳 청담)</li>
          <li><span>3</span>(더채플앳 논현)</li>
          <li><span>4</span>(노블발렌티 대치)</li>
        </ol>
      </div>
      <p>여기까지 왔다면 새로운 홀을 더 찾기보다 일단 이 후보부터 확인해보세요.</p>

      <h3 class="is-plain">오늘은 여기까지만</h3>
      <p>웨딩홀을 <u>한 번에 완벽하게 고를 필요</u>는 없어요. 일단 이것만 해보세요.</p>
      <p>내 추구미를 완벽하게 설명하지 못해도 <b>“나는 이 쪽을 더 자주 고르는구나”</b> 정도는 보이기 시작합니다.</p>
      <p class="vault-small">본 콘텐츠의 저작권은 @jjomaeng.2에게 있습니다. 무단 전재, 재배포 및 상업적 이용 시 저작권법에 따라 법적 책임을 물을 수 있습니다.</p>
    `,
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
    // 글 아래에 흐리게 깔리는 실제 견적. 쿠팡 방문 후 [페이지로 돌아가 견적 보기]를 누르면 열린다.
    // vault가 있으면 자료 미리보기·다운로드 박스 대신 이 칸을 보여준다. vaultLabel: 버튼·창 문구 (견적/자료)
    vaultLabel: "견적",
    vault: `
      <div class="vault-sum">
        <p class="vault-sum__label">한눈에 정리</p>
        <ol>
          <li><span>01</span>공개된 견적은 대략 <b>3,500만 원</b>이에요.</li>
          <li><span>02</span>프로모션 적용하면 <b>약 20% 정도</b> 할인돼요.</li>
          <li><span>03</span>본식스냅은 <b>필수</b>라 추가금이 붙어요.</li>
        </ol>
      </div>

      <h3><span>01</span>견적 받은 조건</h3>
      <div class="vault-table"><table>
        <tr><th>예식 후보</th><td>2027년 10월 10일 (일) 17:00<br />2027년 11월 28일 (일) 17:00<br />2027년 12월 26일 (일) 15:30</td></tr>
        <tr><th>최소 지불 보증인원</th><td>200명</td></tr>
        <tr><th>계약금</th><td>300만 원</td></tr>
      </table></div>
      <p>제가 안내받은 날짜와 시간은 모두 <u>비선호 날짜&amp;시간대</u>예요. (26일 제외하고는 17시 타임밖에 안 남아있었어요..!)</p>

      <h3><span>02</span>날짜별 견적 비교</h3>
      <div class="vault-table is-wide"><table>
        <thead><tr><th>항목</th><th>공개 견적</th><th>10/10 (일) 17:00</th><th>11/28 (일) 17:00</th><th>12/26 (일) 15:30</th></tr></thead>
        <tbody>
          <tr><th>식대 (1인)</th><td>100,000원</td><td>87,000원</td><td>87,000원</td><td>89,000원</td></tr>
          <tr><th>식대 합계 (200명)</th><td>2,000만 원</td><td>1,740만 원</td><td>1,740만 원</td><td>1,780만 원</td></tr>
          <tr><th>음료 (Free Drink)</th><td>200만 원</td><td>0원 (식대 포함)</td><td>0원 (식대 포함)</td><td>0원 (식대 포함)</td></tr>
          <tr><th>대관료 + 예식 연출</th><td>1,300만 원</td><td>780만 원</td><td>780만 원</td><td>920만 원</td></tr>
          <tr class="is-total"><th>총액 (VAT 포함)</th><td>3,500만 원</td><td>2,520만 원</td><td>2,520만 원</td><td>2,700만 원</td></tr>
        </tbody>
      </table></div>
      <p class="vault-note"><b>이렇게 보세요</b>공개 견적은 세 날짜 모두 같고, 프로모션에서 차이가 났어요. 10월·11월은 기본 대비 약 28%, 12월은 약 23% 낮은 금액이에요.</p>
      <div class="vault-tip">
        <p class="vault-tip__label">💘 팁!</p>
        <p>저희는 애초에 비선호 날짜를 염두에 두고 있어서, 최소 보증인원을 200명으로 가장 작게 요청했어요. 대부분 홀에서 계약 후 보증인원을 올릴 수 있어 <b>처음에는 최소 보증인원으로 견적</b>을 잡는 것이 좋답니다.</p>
        <p>+ 견적이 중요하다면, 방문했을 때 설문지에 <b>견적을 1순위 혹은 2순위로 꼭 체크</b>해주세요:)!! 거기에 비수기, 비선호 시간까지 들어간다면 예상보다 약 1000만원 가량 줄어들 수 있습니다. (실제 경험이에요.. 저희도 굉장히 놀랐답니다.)</p>
      </div>

      <h3><span>03</span>대관료에 포함된 것</h3>
      <ul class="vault-list">
        <li>대관료 (단독홀)</li>
        <li>조명, 영상 ENG</li>
        <li>전문 스타일리스트의 웨딩 플라워</li>
        <li>웰컴드링크 바, 혼구용품</li>
        <li>재즈 4중주 + 남녀 듀엣 &amp; 전문 사회자</li>
        <li>플라워샤워, 웨딩 컨시어지 서비스</li>
      </ul>

      <h3><span>04</span>견적 외에 따로 드는 비용</h3>
      <div class="vault-table is-wide"><table>
        <thead><tr><th>구분</th><th>항목</th><th>금액</th><th>비고</th></tr></thead>
        <tbody>
          <tr><td><b>필수</b></td><td>본식스냅 1인 촬영</td><td>990,000원</td><td>담다 / 퍼스트모션 (업체마다 구성 상이)</td></tr>
          <tr><td><b>필수</b></td><td>본식스냅 2인 촬영</td><td>1,430,000원</td><td>담다 / 퍼스트모션 (업체마다 구성 상이)</td></tr>
          <tr><td>선택</td><td>본식 DVD</td><td>770,000원~</td><td>스테이웍스</td></tr>
          <tr><td>선택</td><td>혼주 헤어&amp;메이크업</td><td>90,000원~</td><td>제니하우스</td></tr>
        </tbody>
      </table></div>
      <p>본식스냅이 필수라 <u>실제로 내는 금액은 견적 총액 + 본식스냅</u>이에요.</p>

      <h3><span>05</span>그래서 저는 계약 안 했어요</h3>
      <p>홀 분위기는 지금도 제 취향 원탑이에요. 그런데 비선호 날짜와 시간대를 양보했는데도 가격이나 혜택이 충분히 매력적으로 느껴지지 않았어요.</p>
      <blockquote class="vault-quote">좋아하는 공간과 선택할 수 있는 공간은 다르다<small>이번 투어에서 제일 크게 느낀 점이에요.</small></blockquote>

      <h3 class="is-plain">상담 때 꼭 물어보세요</h3>
      <p>저는 여러 홀을 다녀보고 나서야 알게 된 질문들이에요. 투어 가기 전에 다른 건 몰라도 이 항목은 체크해서 들고 가세요.</p>
      <ul class="vault-check">
        <li><b>비선호 날짜·시간</b>이라면 <b>어떤 혜택</b>이 있는지</li>
        <li>계약 후 <b>보증인원은 언제까지, 얼마나 조정</b>할 수 있는지</li>
        <li><b>최소 보증인원 변경</b> 가능한지</li>
        <li><b>계약 변경이나 취소 시 조건</b>은 어떤지</li>
        <li><b>견적 외 추가 비용</b>은 어떤 게 있는지 (주류, 아동, 꽃장식, 연출, 필수 선택 항목 등)</li>
        <li>본식 스냅 혹은 DVD 필수인지 (뺄 수 있는지)</li>
        <li>다음 홀투어도 있어 오늘 저녁 8시까지 연락드려도 괜찮을지 (회신 시간을 조율해주실 거예요)</li>
      </ul>

      <h3 class="is-plain">오늘은 여기까지만</h3>
      <p>홀 분위기는 사진으로 다시 볼 수 있지만, <u>계약 조건은 놓치면 나중에 꽤 곤란할 수 있어요.</u></p>
      <p><b>“이 날짜에, 이 조건이면 계약할 만한가?”</b> 이 질문 하나만 들고 가도 훨씬 덜 헤매요.</p>
      <p class="vault-small">※ 2026년 10월 9일 상담 기준 견적이에요. 날짜·시간·시기에 따라 조건은 달라질 수 있어요.<br />본 콘텐츠의 저작권은 @jjomaeng.2에게 있습니다. 무단 전재, 재배포 및 상업적 이용 시 저작권법에 따라 법적 책임을 물을 수 있습니다.</p>
    `,
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
          <p>높은 아치형 천장과 웅장한 채플홀 분위기가 <br class="m-br" />제일 큰 매력이라고 생각해요.</p>
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

      <p>문제는.. <b>웨딩홀이 <u>분위기만 보고 계약하는 곳은 아니라는 것.</u></b></p>

      <section class="step">
        <span class="step__no">02</span>
        <div class="step__body">
          <p class="step__label">Price</p>
          <h3>비선호 날짜인데도..?</h3>
          <p>제가 안내받은 날짜와 시간은 제가 원하던 선호 조건이 아니었어요. 그래서 사실 쪼끔 기대했거든요. 비선호 날짜와 시간대라면 그만큼 금액적인 메리트나 혜택이 있지 않을까..?</p>
          <p>그런데 상담받은 견적은 <b>제 기준에서 크게 저렴하게 느껴지지 않았고</b>, 특별한 혜택도 안내받지 못했어요. 물론 인기 있는 웨딩홀이고 날짜나 시간에 따라 조건은 다를 수 있겠지만!</p>
          <p class="highlight">메인타임도 아닌데 생각보다 가격 메리트가 없네..?</p>
          <p>취향은 강력하게 찬성 <br class="m-br" />but 현실은 계산기 두드리는 중..ㅎ</p>
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
          <p>그런데 여러 홀을 비교해 보니까 <br class="m-br" /><b>아.. 이런 것도 물어봐야 했구나?</b> 싶은 것들이 생기더라고요.</p>
          <ul class="mood">
            <li><span>✦</span>계약 후 <b>보증인원</b>은 언제까지 조정 가능한지</li>
            <li><span>✦</span><b>최소 보증인원 변경</b>은 가능한지</li>
            <li><span>✦</span><b>계약 변경</b>이나 <b>취소</b> 시 조건은 어떤지</li>
            <li><span>✦</span>견적 외 <b>추가로 발생할 수 있는 비용</b>은 없는지</li>
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
    slug: "prep-planner",
    category: "prep",
    categoryLabel: "결혼준비",
    series: "결혼준비 (1)",
    title: "직접 비교파인 제가\n플래너부터 계약한 이유",
    subtitle: "플래너 할까 말까 · 동행 vs 비동행 · 박람회 가? 말아?",
    excerpt: "뭐든 직접 비교해야 직성이 풀리는데도 웨딩홀보다 플래너를 먼저 계약했어요. 미감, 동행, 박람회까지 직접 비교하고 정한 이야기예요.",
    excerptHtml: "뭐든 직접 비교해야 직성이 풀리는데도<br /><mark>웨딩홀보다 플래너</mark>를 먼저 계약했어요.",
    date: "2026.11.08",
    readTime: "4 min",
    image: "images/planner-1.jpg",
    imageAlt: "웨딩홀 상담실 책상 위 달력과 모니터",
    file: {
      name: "플래너 계약 전 체크리스트",
      desc: "미감 확인법 · 동행 vs 비동행 · 박람회 가기 전 준비",
      url: "#",
    },
    vaultLabel: "자료",
    vault: `
      <p class="vault-lead">플래너는 꼭 필요한지, 동행이 좋을지, 박람회는 가야 하는지. 저도 처음엔 하나도 몰랐어요. 직접 비교하고 경험한 것만 정리했어요.</p>
      <div class="vault-sum">
        <p class="vault-sum__label">플래너 계약 전 이 4가지</p>
        <ol>
          <li><span>01</span><b>플래너님 미감이 나와 맞는지</b></li>
          <li><span>02</span><b>동행·비동행 중 내 성향에 맞는 건 뭔지</b></li>
          <li><span>03</span><b>플래너 비용과 제휴 혜택을 합쳐도 합리적인지</b></li>
          <li><span>04</span><b>어디까지 함께 준비해 주시는지</b></li>
        </ol>
      </div>

      <h3><span>01</span>미감이 나와 맞는지 확인하기</h3>
      <p>아무리 유명한 업체를 많이 알고 계셔도 제가 원하는 스타일을 이해하지 못하면 추천받는 의미가 없잖아요.</p>
      <p class="vault-note"><b>이렇게 해보세요</b>플래너님 인스타그램을 먼저 봐보세요. 어떤 스타일을 좋아하시는지, 주로 어떤 분위기의 업체를 추천하시는지 피드에서 힌트를 얻을 수 있어요.<br />— 미감을 잘 모르겠다면 사진들이 전체적으로 잘 정돈된 느낌인지부터 보기</p>
      <div class="vault-tip">
        <p class="vault-tip__label">💘 팁!</p>
        <p>피드가 예쁘다고 무조건 나와 맞는 건 아니에요. <b>내가 좋아하는 사진을 보여드렸을 때 어떤 업체를 추천해 주시는지</b> 꼭 확인해 보세요.</p>
      </div>

      <h3><span>02</span>동행 vs 비동행, 내 성향 체크</h3>
      <p>제가 비교했던 동행 상품은 보통 4번 정도 주요 일정에 함께해 주는 구성이었어요.</p>
      <ul class="vault-list">
        <li>드레스 투어</li>
        <li>스튜디오 촬영</li>
        <li>촬영 드레스 가봉</li>
        <li>본식 드레스 가봉</li>
      </ul>
      <p class="vault-small">동행 횟수와 일정은 업체마다 달라요.</p>
      <p>나는 어느 쪽에 더 가까운지 체크해 보세요.</p>
      <div class="vault-picks">
        <div class="vault-pick"><p>① 비용 vs 시간</p><label><input type="checkbox" data-pick="cost-time" /><span>돈을 조금 더 쓰더라도 시간과 마음의 부담을 덜고 싶다</span></label><label><input type="checkbox" data-pick="cost-save" /><span>직접 챙기는 수고를 감수하고 비용을 줄이고 싶다</span></label></div>
        <div class="vault-pick"><p>② 일정 관리</p><label><input type="checkbox" data-pick="plan-help" /><span>중요한 일정마다 경험자가 옆에 있으면 든든하다</span></label><label><input type="checkbox" data-pick="plan-self" /><span>일정 관리할 때 오히려 짜릿함을 느낀다</span></label></div>
      </div>
      <p>왼쪽이 많으면 동행, 오른쪽이 많으면 비동행도 충분히 좋은 선택이에요. 저는 플래너비를 더 내더라도 동행을 골랐어요. 본식 부케 서비스(부케도 20~30만원 정도 들어요)가 포함된 것까지 생각하니 덜 부담스럽더라고요.</p>

      <h3><span>03</span>박람회 가기 전, 딱 하나만 준비한다면</h3>
      <p>한 번쯤 가보는 거 추천해요. 단, 마음가짐이 중요해요.</p>
      <p class="vault-note"><b>이 마음으로 가보세요</b>당일 혜택은 포기한다.<br />오늘은 무조건 계약하지 않는다!</p>
      <p><b>원하는 홀 분위기 정도만 알고 가면</b>, 미감 좋은 플래너님이 홀과 어울리는 스드메 업체까지 함께 리스트업해 주셨어요. “아, 이 플래너님이 내 취향을 이해하시는구나!” 싶은 느낌이 바로 이때 와요.</p>
      <p>상담할 때는 이렇게 물어봤어요. <b>“이 사진이 정말 제 스타일인데, 이 정도 퀄리티는 얼마 정도 드나요?”</b></p>

      <h3 class="is-plain">계약 전 마지막 체크</h3>
      <ul class="vault-check">
        <li>플래너님 <b>인스타그램</b>에서 추천하시는 분위기를 봤다</li>
        <li><b>내가 좋아하는 사진</b>을 보여드리고 추천 업체를 들어봤다</li>
        <li><b>동행·비동행</b> 중 내 성향을 정했다</li>
        <li>플래너 비용과 <b>제휴 혜택</b>을 합쳐서 비교했다</li>
        <li>웨딩홀 · 웨딩밴드 · 예복 등 <b>어디까지 도와주시는지</b> 확인했다</li>
        <li>최소 두세 분은 <b>비교</b>해 봤다</li>
      </ul>

      <h3 class="is-plain">오늘은 여기까지만</h3>
      <p>저도 박람회에서 처음 만난 플래너님을 두고 세 분을 더 알아봤어요. 그런데 돌고 돌아 결국 처음 그분이었어요.</p>
      <p><b>“이 플래너님이 내 취향을 이해하시나?”</b> 이 질문 하나만 들고 가도 훨씬 덜 헤매요.</p>
      <p class="vault-small">본 콘텐츠의 저작권은 @jjomaeng.2에게 있습니다. 무단 전재, 재배포 및 상업적 이용 시 저작권법에 따라 법적 책임을 물을 수 있습니다.</p>
    `,
    body: `
      <p class="lead">결혼 준비 시작하기도 전에 고민되는 게 참 많잖아요. 플래너는 꼭 필요한가? 동행이 좋을까, 비동행이 좋을까? 박람회는 가야 하나..?</p>
      <p>결론부터 말하면, <u>저는 웨딩홀보다 플래너를 먼저 계약했답니다..ㅎ</u> 이것저것 직접 찾아보고 비교해야 직성이 풀리는 사람인데도요!</p>

      <section class="step">
        <span class="step__no">01</span>
        <div class="step__body">
          <p class="step__label">Planner</p>
          <h3>플래너, 할까 말까?</h3>
          <p>제가 알아본 조건에서는 아직 플래너를 통해 진행하는 게 금액적으로 더 유리하더라고요. 비유하자면 워크인은 소매, 플래너는 도매 같은 느낌이랄까요?</p>
          <p>물론 무조건 플래너가 저렴하다는 건 아니에요. 업체별 제휴 조건과 플래너 비용까지 함께 비교해 보는 게 중요해요.</p>
          <p>그리고 저는 금액 외에도 이유가 있었어요. 혼자 알아보는 건 좋은데 <b>물어볼 경험자는 필요했거든요.</b> (어쩌다 보니 주변에서 제가 가장 먼저 결혼하는 사람이라..ㅎ)</p>
          <p class="highlight">플래너 고를 때 필수! 미감이 나와 맞아야 해요.</p>
        </div>
      </section>

      <figure class="inline-figure figure-pair" data-reveal>
        <div class="inline-figure__img"><img src="images/planner-2.jpg" alt="상담 때 나온 차와 디저트" loading="lazy" /></div>
        <div class="inline-figure__img"><img src="images/planner-3.jpg" alt="상담 테이블 위 꽃 한 송이와 웨딩 매거진" loading="lazy" /></div>
      </figure>

      <section class="step">
        <span class="step__no">02</span>
        <div class="step__body">
          <p class="step__label">Together</p>
          <h3>동행 vs 비동행, 저는 동행이요!</h3>
          <p>스드메에도 큰돈이 들어가는데, 중요한 일정마다 친구들에게 연차까지 써달라고 하기엔 너무 미안할 것 같았어요.</p>
          <p>그리고 <u>경험자가 내 편에 있다는 든든함.</u> 업체에 요청하기 어려운 부분이 생겨도 플래너님과 함께 조율할 수 있다는 게 좋았어요.</p>
          <p>물론 비용을 무조건 아끼고 싶거나, 일정 관리에서 오히려 짜릿함을 느끼는 분이라면 비동행도 충분히 좋은 선택이에요.</p>
        </div>
      </section>

      <section class="step">
        <span class="step__no">03</span>
        <div class="step__body">
          <p class="step__label">Fair</p>
          <h3>웨딩박람회, 가? 말아?</h3>
          <p>저는 한 번쯤 가보는 거 추천해요. 단, <b>당일 혜택은 포기하고, 오늘은 무조건 계약하지 않는다!</b> 이 마음으로요.</p>
          <ul class="mood">
            <li><span>✦</span>내가 원하는 결혼식은 이런 스타일이구나</li>
            <li><span>✦</span>이런 느낌을 내려면 이 정도 금액이 필요하구나</li>
            <li><span>✦</span>예산을 어디에 더 쓰고, 어디에서 줄일까</li>
          </ul>
          <p>막연했던 결혼 준비가 조금씩 현실적으로 보이기 시작했어요.</p>
        </div>
      </section>

      <section class="result">
        <p class="result__label">Result</p>
        <p>박람회에서 처음 만난 플래너님과 그날 계약하진 않았어요.</p>
        <p>비동행 두 분, 동행 한 분께 더 연락드려 비교해 봤는데도</p>
        <blockquote>“돌고 돌아<br />결국 처음 그분이었어요”</blockquote>
        <p>그래서 <u>웨딩홀보다 먼저 플래너를 계약했답니다..ㅎ</u></p>
      </section>

      <h2>다시 준비해도 이 4가지는 확인할 거예요</h2>
      <ol class="summary">
        <li><span>01</span>플래너님 미감이 나와 맞는지</li>
        <li><span>02</span>동행·비동행 중 내 성향에 맞는 건 뭔지</li>
        <li><span>03</span>플래너 비용과 제휴 혜택을 합쳐도 합리적인지</li>
        <li><span>04</span>어디까지 함께 준비해 주시는지</li>
      </ol>
      <p>제가 실제로 고민하고 비교했던 것들을 <b>자료</b>로 정리해뒀어요. 아래에서 받아가세요.</p>
    `,
  },
  {
    slug: "prep-order",
    category: "prep",
    categoryLabel: "결혼준비",
    series: "결혼준비 (2)",
    title: "결혼 준비 순서,\n알아본 거랑 다르던데요?",
    subtitle: "웨딩홀을 가장 늦게 계약한 사람의 실제 준비 순서",
    excerpt: "웨딩홀 → 스튜디오 → 드레스 → 메이크업이라던데, 요즘 제일 치열한 건 스튜디오랑 헤어변형이었어요. 홀을 늦게 잡아야 했던 제 실제 순서예요.",
    excerptHtml: "요즘 제일 치열한 건 웨딩홀보다<br /><mark>스튜디오랑 헤어변형</mark>이었어요.",
    date: "2026.11.08",
    readTime: "4 min",
    image: "images/order-1.jpg",
    imageAlt: "흰 꽃으로 가득 채운 웨딩 포토존",
    related: "wedding-hall-1",
    body: `
      <p class="lead">결혼 준비 순서를 찾아보면 보통 <b>웨딩홀 → 스튜디오 → 드레스 → 메이크업</b>이라고 알려주잖아요.</p>
      <p>근데 요즘 예약할 때 생각보다 치열한 곳은 <u>스튜디오랑 헤어변형</u>이었어요. 웨딩홀보다도요..?</p>

      <section class="step">
        <span class="step__no">01</span>
        <div class="step__body">
          <p class="step__label">Studio</p>
          <h3>스튜디오 예약, 생각보다 빨리 마감돼요</h3>
          <p>보통은 본식 약 6개월 전에 스튜디오 촬영을 하는데, 미감 좋고 금액도 괜찮은 곳들은 원하는 날짜에 이미 예약이 차 있는 경우가 많았어요.</p>
          <p>그래서 정말 원하는 스튜디오가 있다면 촬영 날짜에 맞춰 본식 일정을 정하는 경우도 있대요. (이 사실을 박람회에서 알았답니다..ㅎ)</p>
        </div>
      </section>

      <section class="step">
        <span class="step__no">02</span>
        <div class="step__body">
          <p class="step__label">My order</p>
          <h3>저는 웨딩홀을 가장 늦게 계약했어요</h3>
          <p>부모님이 날짜를 받아주셔야 해서, 상황상 웨딩홀 계약을 가장 늦게 진행해야 했어요. 그래서 준비할 수 있는 것부터 하나씩 예약했어요.</p>
          <ul class="mood">
            <li><span>①</span>웨딩박람회 방문</li>
            <li><span>②</span>플래너 계약</li>
            <li><span>③</span>스튜디오 예약</li>
            <li><span>④</span>드레스 후보 미리 결정</li>
            <li><span>⑤</span>헤어, 메이크업 미리 결정</li>
            <li><span>⑥</span>웨딩홀 계약</li>
          </ul>
          <p>중요한 시점마다 “이 업체는 원하는 일정이 마감될 수 있으니 이때까지 결정하시면 좋을 것 같아요!”라고 알려주신 플래너님 덕분에 마음이 정말 편했어요.</p>
          <p class="highlight">언제까지 결정해야 하는지 알려주는 사람이 있다는 게 든든했어요.</p>
        </div>
      </section>

      <section class="step">
        <span class="step__no">03</span>
        <div class="step__body">
          <p class="step__label">Hair</p>
          <h3>헤어변형도 중요해요..?</h3>
          <p>처음엔 헤어변형을 그렇게 중요하게 생각하지 않았어요. 그런데 촬영 스타일을 찾아보다 보니 이제는 거의 필수더라고요.</p>
          <p>마음에 드는 분들께 하나씩 연락드렸는데.. <b>10명 중 10명 모두 마감..?!</b> 네..? 전부요..? 8-8</p>
          <p>스튜디오만 예약한다고 촬영 준비가 끝나는 게 아니었어요. <u>헤어변형을 원한다면 스튜디오 예약과 동시에 알아보는 게 좋겠더라고요.</u></p>
        </div>
      </section>

      <section class="result">
        <p class="result__label">Result</p>
        <p>제가 다시 준비한다면</p>
        <blockquote>“예약이 빨리 마감되는 업체부터<br />일정을 알아볼 것 같아요”</blockquote>
        <p>무조건 빨리 하는 것보다 <u>내가 놓치면 아쉬울 업체가 어디인지</u> 먼저 알아두는 게 중요하더라고요.</p>
      </section>

      <h2>홀 계약이 늦어진다면 이 순서로</h2>
      <ol class="summary">
        <li><span>01</span>박람회</li>
        <li><span>02</span>플래너 계약</li>
        <li><span>03</span>헤어변형 &amp; 스튜디오 함께 계약</li>
        <li><span>04</span>드레스 후보 미리 소통</li>
        <li><span>05</span>메이크업 후보 미리 소통</li>
        <li><span>06</span>웨딩홀 예약 가능 일정도 계속 확인하고 계약</li>
      </ol>
      <p>물론 박람회나 플래너 계약은 필수 과정이 아니고, 웨딩홀을 늦게 예약하라는 뜻도 아니에요. 홀 계약이 늦어지는 상황이라면 다른 인기 업체 예약까지 함께 놓치지 말자는 의미예요.</p>
      <p>아직 웨딩홀 후보도 못 줄였다면, 제가 실제로 쓴 <b>웨딩홀 후보 줄이기 자료</b>도 아래에서 받아가세요.</p>
    `,
  },
  {
    slug: "wedding-hall-apelgamo",
    category: "hall",
    categoryLabel: "웨딩홀",
    series: "웨딩홀 (3)",
    title: "홀도 동선도 좋았는데\n계약은 안 했어요",
    subtitle: "아펠가모 선릉 홀투어 · 실제 견적과 계약 전 체크 포인트",
    excerpt: "노블발렌티보다 조금 더 따뜻하고 아늑한 채플홀. 홀도, 하객 동선도, 상담도 좋았는데 계약까지 가지 않았던 이유예요.",
    excerptHtml: "노블발렌티보다 조금 더 따뜻한 채플홀, <mark>아펠가모 선릉</mark>.<br />홀도 동선도 좋았는데 계약까지 가지 않았던 이유예요.",
    date: "2026.11.08",
    readTime: "5 min",
    image: "images/apelgamo-1.jpg",
    imageAlt: "샹들리에 아래 흰 소파가 놓인 아펠가모 선릉 공간",
    file: {
      name: "아펠가모 선릉 실제 견적",
      desc: "날짜별 견적 3장 비교 · 대관료 포함 항목 · 상담 체크리스트",
      url: "#",
    },
    vaultLabel: "견적",
    vault: `
      <p class="vault-lead">아펠가모 선릉은 노블발렌티보다 조금 더 따뜻하고 아늑한 채플홀이었어요. 홀 바로 옆이 연회장이라 하객 동선도 편했고요. 제가 실제로 받은 날짜별 견적을 그대로 정리했어요.</p>
      <div class="vault-sum">
        <p class="vault-sum__label">한눈에 정리</p>
        <ol>
          <li><span>01</span>공개된 견적은 대략 <b>3,500만 원</b>이에요.</li>
          <li><span>02</span>프로모션 적용하면 <b>약 26~39% 정도</b> 할인돼요.</li>
          <li><span>03</span>상담 당일 계약하면 <b>서비스 1가지</b>가 더해져요.</li>
        </ol>
      </div>

      <h3><span>01</span>견적 받은 조건</h3>
      <div class="vault-table"><table>
        <tr><th>예식 후보</th><td>2027년 10월 10일 (일) 11:00<br />2027년 10월 30일 (토) 15:30<br />2027년 12월 26일 (일) 15:30</td></tr>
        <tr><th>최소 지불 보증인원</th><td>200명 (10/30 토요일은 250명)</td></tr>
        <tr><th>계약금</th><td>400만 원</td></tr>
      </table></div>
      <p>제가 안내받은 날짜와 시간은 모두 <u>비선호 날짜&amp;시간대</u>예요. (토요일 오후는 보증인원 250명 기준으로 안내받았어요!)</p>

      <h3><span>02</span>날짜별 견적 비교</h3>
      <div class="vault-table is-wide"><table>
        <thead><tr><th>항목</th><th>공개 견적</th><th>10/10 (일) 11:00</th><th>10/30 (토) 15:30</th><th>12/26 (일) 15:30</th></tr></thead>
        <tbody>
          <tr><th>보증인원</th><td>200명</td><td>200명</td><td>250명</td><td>200명</td></tr>
          <tr><th>식대 (1인)</th><td>110,000원</td><td>83,600원</td><td>86,900원</td><td>72,600원</td></tr>
          <tr><th>식대 합계</th><td>2,200만 원</td><td>1,672만 원</td><td>2,172만 5천 원</td><td>1,452만 원</td></tr>
          <tr><th>음주류</th><td>176만 원</td><td>0원 (서비스)</td><td>0원 (서비스)</td><td>0원 (서비스)</td></tr>
          <tr><th>대관료 (웨딩홀 사용료)</th><td>1,100만 원</td><td>792만 원</td><td>847만 원</td><td>671만 원</td></tr>
          <tr class="is-total"><th>총액 (VAT 포함)</th><td>3,476만 원</td><td>2,464만 원</td><td>3,019만 5천 원</td><td>2,123만 원</td></tr>
        </tbody>
      </table></div>
      <p class="vault-small">공개 견적은 웨딩 정보 사이트 기준(식대 110,000원, 대관료 1,100만 원·연출 포함, 최소 보증인원 200명)으로 계산한 참고용이에요. 음주류는 견적서 기본가(1인 8,800원) 기준이에요.</p>
      <p class="vault-note"><b>이렇게 보세요</b>공개 견적보다 세 날짜 모두 프로모션에서 낮아졌어요.<br />— 12월 일요일 오후는 약 39%, 10월 일요일 오전은 약 29%, 10월 토요일 오후는 약 26% 낮은 금액<br />(10/30은 250명 기준이라 공개 견적 4,070만 원과 비교했어요.)</p>
      <div class="vault-tip">
        <p class="vault-tip__label">💘 팁!</p>
        <p>아펠가모 선릉은 <b>상담 당일 계약 혜택</b>이 따로 있어요. 플라워샤워 / 웨딩카 / 혼주 헤어·메이크업 2인 중 <b>1가지 서비스</b> (특정 프로모션 시 10% 추가 할인이 있는 경우도 있어요)</p>
        <p>단, 신규 계약자 최초 1회만 적용되고 날짜 변경이나 지점 이동 시에는 적용이 안 돼요.</p>
      </div>

      <h3><span>03</span>대관료에 포함된 것</h3>
      <ul class="vault-list">
        <li>대관료 (4층 웨딩홀)</li>
        <li>빔프로젝터, 웨딩 어시스턴트 서비스</li>
        <li>혼구용품 (혼인 서약서, 성혼 선언문, 방명록, 장갑, 봉투)</li>
        <li>웨딩홀 &amp; 신부대기실 플라워 장식</li>
        <li>포토테이블 (5x7인치 사진 8매는 직접 인화해서 지참)</li>
        <li>전문 사회자, 혼성 3중창 (바이올린+피아노, 축가 1곡)</li>
        <li>DVD 1인 3CAM 4K 베이직 촬영 (60분 영상)</li>
        <li>신랑·신부 스테이크</li>
        <li>브라이덜 스파 웨딩 케어 60분 2회 (예식 30일 전까지)</li>
      </ul>
      <p>본식 DVD 촬영이 <u>대관료에 들어 있는 구성</u>이에요.</p>

      <h3><span>04</span>보증인원, 이렇게 운영돼요</h3>
      <ul class="vault-list">
        <li>보증인원은 <b>대인 기준</b>이에요.</li>
        <li>확정 인원의 <b>10%는 식사 여분</b>으로 준비되고, 넘치면 답례품으로 대체돼요.</li>
        <li>식사와 답례품은 <b>함께 선택할 수 없어요.</b></li>
        <li>보증인원보다 적게 와도 <b>보증인원만큼 청구</b>돼요.</li>
      </ul>
      <p>그래서 처음에는 <u>보증인원을 작게 잡고, 나중에 올리는 것</u>이 좋아요.</p>

      <h3><span>05</span>그래서 저는 계약 안 했어요</h3>
      <p>홀 분위기, 동선, 상담까지 모두 만족스러웠어요. 그런데 지방에서 오시는 하객분들이 선릉까지 오시기 애매하다는 점이 마음에 걸렸고, 가격까지 함께 보니 제 조건과는 맞지 않았어요.</p>
      <blockquote class="vault-quote">좋은 점의 개수보다 나에게 중요한 장점이 있는지<small>여러 홀을 다녀보고 알게 된 점이에요.</small></blockquote>

      <h3 class="is-plain">상담 때 꼭 물어보세요</h3>
      <p>저는 여러 홀을 다녀보고 나서야 알게 된 질문들이에요. 투어 가기 전에 다른 건 몰라도 이 항목은 체크해서 들고 가세요.</p>
      <ul class="vault-check">
        <li><b>비선호 날짜·시간</b>이라면 <b>어떤 혜택</b>이 있는지</li>
        <li>계약 후 <b>보증인원은 언제까지, 얼마나 조정</b>할 수 있는지</li>
        <li><b>최소 보증인원 변경</b> 가능한지</li>
        <li><b>계약 변경이나 취소 시 조건</b>은 어떤지</li>
        <li><b>견적 외 추가 비용</b>은 어떤 게 있는지 (주류, 아동, 꽃장식, 연출, 필수 선택 항목 등)</li>
        <li>본식 스냅 혹은 DVD 필수인지 (뺄 수 있는지)</li>
        <li>다음 홀투어도 있어 오늘 저녁 8시까지 연락드려도 괜찮을지 (회신 시간을 조율해주실 거예요)</li>
      </ul>

      <h3 class="is-plain">오늘은 여기까지만</h3>
      <p>홀 분위기는 사진으로 다시 볼 수 있지만, <u>계약 조건은 놓치면 나중에 꽤 곤란할 수 있어요.</u></p>
      <p><b>“이 금액을 내고 선택하고 싶은 장점이 있는가?”</b> 이 질문 하나만 들고 가도 훨씬 덜 헤매요.</p>
      <p class="vault-small">※ 2026년 10월 9일 상담 기준 견적이에요. 날짜·시간·시기에 따라 조건은 달라질 수 있어요.<br />본 콘텐츠의 저작권은 @jjomaeng.2에게 있습니다. 무단 전재, 재배포 및 상업적 이용 시 저작권법에 따라 법적 책임을 물을 수 있습니다.</p>
    `,
    body: `
      <p class="lead">채플홀 좋아하시는 예신분들.. 아펠가모 선릉도 한 번 눈여겨보세요. 노블발렌티와는 또 다른 느낌으로 <u>제 취향에 꽤 잘 맞았어요.</u></p>
      <p>홀도 마음에 들고, 하객 동선도 편하고, 상담도 만족스러웠던 곳. 그런데 결론부터 말하면 <b>계약은 하지 않았어요.</b></p>

      <section class="step">
        <span class="step__no">01</span>
        <div class="step__body">
          <p class="step__label">Hall</p>
          <h3>노블발렌티보다 조금 더 따뜻한 채플홀</h3>
          <p>채플홀 특유의 단정함에 조금 더 아늑한 분위기가 느껴졌어요. 색감으로 표현하자면 노블발렌티 대치가 아이보리 + 옐로우 15%라면, 아펠가모 선릉은 아이보리 + 옐로우 30% 느낌? (제 눈에 느껴지는 차이예요..ㅎ)</p>
          <p>호불호가 있다는 천장 디자인도 저는 오히려 홀 분위기와 잘 어울린다고 느꼈어요. 다만 “와.. 여기다!” 싶을 만큼 강렬하게 꽂히진 않았답니다.</p>
          <p class="highlight">따뜻하고 아늑한 채플홀을 좋아한다면 직접 보시는 걸 추천해요.</p>
        </div>
      </section>

      <figure class="inline-figure figure-pair" data-reveal>
        <div class="inline-figure__img"><img src="images/apelgamo-2.jpg" alt="리본으로 묶은 분홍 장미 한 송이" loading="lazy" /></div>
        <div class="inline-figure__img"><img src="images/apelgamo-3.jpg" alt="상담 때 나온 차와 다과" loading="lazy" /></div>
      </figure>

      <section class="step">
        <span class="step__no">02</span>
        <div class="step__body">
          <p class="step__label">Guest</p>
          <h3>하객 동선은 꽤 마음에 들었어요</h3>
          <p>예식홀 바로 옆에 연회장이 있어서 식사를 위해 다른 층으로 이동할 필요가 없더라고요.</p>
          <ul class="mood">
            <li><span>✦</span>예식홀과 연회장이 같은 층</li>
            <li><span>✦</span>식사를 위한 이동 동선이 짧음</li>
            <li><span>✦</span>선릉역과 가까운 위치</li>
          </ul>
          <p>상담도 만족스러웠어요. 안내와 설명 모두 좋았고, 궁금했던 부분을 이해하는 데도 도움이 됐어요.</p>
        </div>
      </section>

      <section class="step">
        <span class="step__no">03</span>
        <div class="step__body">
          <p class="step__label">Price</p>
          <h3>가격 메리트는 있었을까?</h3>
          <p>아펠가모 선릉도 예식 날짜와 시간, 보증인원에 따라 견적 조건이 달라지는 곳이었어요. 여러 조건을 비교해 봤는데, 제 기준에서는 생각보다 가격 메리트가 크게 느껴지지 않았어요.</p>
          <p class="highlight">이 금액이라면 다른 웨딩홀도 선택할 수 있지 않을까..?</p>
        </div>
      </section>

      <section class="result">
        <p class="result__label">Result</p>
        <p>홀도 괜찮고, 상담도 만족스러웠는데</p>
        <p>계약까지 이어질 결정적인 메리트는 부족했던 것..ㅎ</p>
        <blockquote>“좋은 점의 개수보다<br />나에게 중요한 장점이 있는지”</blockquote>
        <p>여러 홀을 다녀보니 <u>이게 더 중요하더라고요.</u></p>
      </section>

      <h2>웨딩홀 투어 전 이건 꼭 비교해 보세요</h2>
      <ol class="summary">
        <li><span>01</span>기본 견적과 실제 적용 견적은 얼마나 다른지</li>
        <li><span>02</span>보증인원까지 반영한 총비용은 얼마인지</li>
        <li><span>03</span>이 금액을 내고 선택하고 싶은 장점이 있는지</li>
      </ol>
      <p>견적 비교도 결국 숫자만 비교하는 게 아니었던 것..ㅎ 제가 실제로 받은 날짜별 견적 3장과 상담 체크리스트를 <b>견적</b>으로 정리해뒀어요. 아래에서 확인하세요.</p>
    `,
  },
  {
    slug: "wedding-hall-date",
    category: "hall",
    categoryLabel: "웨딩홀",
    series: "웨딩홀 (4)",
    title: "1년 뒤 결혼식인데\n벌써 날짜가 없다고요?",
    subtitle: "부모님이 받아주신 날짜로 웨딩홀을 고른 이야기",
    excerpt: "1년이면 여유로울 줄 알았는데, 부모님이 받아주신 날짜와 시간에만 결혼해야 했어요. 그런데 반전은, 오히려 예상보다 좋은 견적으로 계약했다는 것.",
    excerptHtml: "1년이면 여유로울 줄 알았는데 날짜와 시간이 정해져 있었어요.<br />그런데 반전은, <mark>오히려 좋은 견적으로 계약</mark>했다는 것.",
    date: "2026.11.08",
    readTime: "4 min",
    image: "images/date-1.jpg",
    imageAlt: "꽃으로 꾸민 웨딩홀 단상",
    related: "wedding-hall-1",
    body: `
      <p class="lead">저는 결혼식 1년 전이면 꽤 여유롭게 준비하는 줄 알았거든요? 그런데 웨딩홀 예약 가능 날짜를 확인하고 <u>생각이 싹 바뀌었어요.</u></p>
      <p>심지어 저는 부모님이 받아주신 날짜에만 결혼해야 하는 상황이었답니다. 그런데 반전은요.. <b>날짜 때문에 걱정했는데, 오히려 예상보다 좋은 견적으로 계약했어요!</b></p>

      <section class="step">
        <span class="step__no">01</span>
        <div class="step__body">
          <p class="step__label">Date</p>
          <h3>결혼식 날짜, 제가 고르는 게 아니라고요?</h3>
          <p>2026년 10월부터 2027년 결혼식을 알아보기 시작했어요. 약 1년이나 남았으니까 충분하다고 생각했거든요.</p>
          <p>그런데 부모님 의견은 생각보다 확고했어요. <b>날짜뿐만 아니라 시간까지 꼭 맞춰야 한다는 것!</b> (엄마 아빠.. 이렇게 단호하기 있기 없기..)</p>
          <p>그래도 날짜가 4개나 있으니까 괜찮겠지 싶었는데, 진짜 문제는 웨딩홀 예약 현황을 확인하면서 시작됐어요.</p>
        </div>
      </section>

      <section class="step">
        <span class="step__no">02</span>
        <div class="step__body">
          <p class="step__label">Booking</p>
          <h3>1년 전인데도 원하는 시간은 없을 수 있어요</h3>
          <p>추려둔 웨딩홀 후보 4곳의 가능한 날짜를 알아봤는데, 생각보다 예약이 많이 차 있더라고요.</p>
          <ul class="mood">
            <li><span>✦</span>노블발렌티 대치</li>
            <li><span>✦</span>아펠가모 선릉</li>
            <li><span>✦</span>마리아쥬스퀘어</li>
            <li><span>✦</span>더채플앳청담</li>
          </ul>
          <p>특히 노블발렌티는 남아 있던 시간이 대부분 받은 시간 범위 밖이었어요. 일요일이거나 공휴일이 포함된 날짜라 다행히 요일이 남아 있었지, 자칫하면 후보부터 다시 알아볼 뻔했답니다.</p>
        </div>
      </section>

      <section class="step">
        <span class="step__no">03</span>
        <div class="step__body">
          <p class="step__label">Result</p>
          <h3>날짜가 정해져 있던 게 오히려 좋았다고요?</h3>
          <p>제 1순위는 홀 분위기, 예랑이 1순위는 견적. 그런데 이 두 가지가 생각보다 잘 맞아떨어지는 날짜가 있었어요. 바로 <b>점심시간 이후 예식!</b></p>
          <p>부모님이 받아주신 날짜와 시간에도 맞고, 마음에 드는 분위기의 홀에서, 예랑이가 중요하게 생각한 견적까지 만족스러웠거든요.</p>
          <p class="highlight">그렇게 최종 선택한 곳은 더채플앳청담 커티지홀이에요.</p>
          <p>물론 모든 오후 예식이 저렴한 건 아니고, 홀과 날짜, 시간에 따라 견적은 다를 수 있어요.</p>
        </div>
      </section>

      <section class="result">
        <p class="result__label">Result</p>
        <p>1년이면 충분히 여유로울 줄 알았는데</p>
        <p>막상 알아보니 그렇지만도 않았어요.</p>
        <blockquote>“남은 시간보다<br />원하는 날짜에 얼마나 선택권이 있는지”</blockquote>
        <p>이게 <u>더 중요할 수도 있다는 걸</u> 배웠어요.</p>
      </section>

      <h2>다시 준비한다면, 이건 꼭 먼저 할 거예요</h2>
      <ol class="summary">
        <li><span>01</span>부모님이 날짜를 받아주신다면 미리 확인하기</li>
        <li><span>02</span>원하는 웨딩홀이 있다면 오픈런 준비하기</li>
        <li><span>03</span>우리 둘의 1순위부터 정하기</li>
      </ol>
      <p>부모님이 날짜를 받아주셔야 한다면 결혼식 1년 반 전쯤부터 미리 이야기를 나눠보세요. 날짜를 얼마나 조율할 수 있는지 알아두면 예약이 열리는 시점에 맞춰 준비하기 수월해요. (집안마다 다르니 부모님과 먼저 상의해보세요!)</p>
      <p>아직 웨딩홀 후보도 못 줄였다면, 제가 실제로 쓴 <b>웨딩홀 후보 줄이기 자료</b>도 아래에서 받아가세요.</p>
    `,
  },
  {
    slug: "wedding-hall-mariage",
    category: "hall",
    categoryLabel: "웨딩홀",
    series: "웨딩홀 (5)",
    title: "야외 웨딩은 생각도 안 했는데\n흔들릴 줄이야",
    subtitle: "마리아쥬스퀘어 홀투어 · 실제 견적과 계약 전 체크 포인트",
    excerpt: "강남에서 야외 정원 같은 분위기, 견적까지 합리적인 편. 야외 웨딩이 취향이었다면 진짜 여기로 했을 것 같은 마리아쥬스퀘어 이야기예요.",
    excerptHtml: "강남에서 야외 정원 같은 분위기, <mark>마리아쥬스퀘어</mark>.<br />야외 웨딩이 취향이었다면 진짜 여기로 했을 것 같아요.",
    date: "2026.11.08",
    readTime: "5 min",
    image: "images/mariage-1.jpg",
    imageAlt: "샹들리에와 흰 꽃으로 꾸민 마리아쥬스퀘어 홀",
    file: {
      name: "마리아쥬스퀘어 실제 견적",
      desc: "날짜별 견적 비교 · 대관료 포함 항목 · 견적 외 비용 · 상담 체크리스트",
      url: "#",
    },
    vaultLabel: "견적",
    vault: `
      <p class="vault-lead">마리아쥬스퀘어는 화이트톤에 정원 분위기가 더해진 밝은 홀이었어요. 단독홀에 120분 간격이라 여유롭고, 식사도 앉아서 받는 한상차림이에요. 제가 실제로 받은 날짜별 견적을 그대로 정리했어요.</p>
      <div class="vault-sum">
        <p class="vault-sum__label">한눈에 정리</p>
        <ol>
          <li><span>01</span>공개된 견적은 대략 <b>3,000만 원</b>이에요.</li>
          <li><span>02</span>프로모션 적용하면 <b>약 14~24% 정도</b> 할인돼요.</li>
          <li><span>03</span>홀 비용이 <b>웨딩 프로그램과 꽃장식</b>으로 나뉘어 있어요.</li>
        </ol>
      </div>

      <h3><span>01</span>견적 받은 조건</h3>
      <div class="vault-table"><table>
        <tr><th>예식 후보</th><td>2027년 10월 10일 (일) 11:00<br />2027년 10월 30일 (토) 15:00<br />2027년 11월 28일 (일) 13:00<br />2027년 12월 26일 (일) 15:00</td></tr>
        <tr><th>홀</th><td>G층 단독홀 (120분 간격 분리 예식)</td></tr>
        <tr><th>최소 지불 보증인원</th><td>200명 (토 11:00·13:00, 일 13:00은 250명)</td></tr>
        <tr><th>계약금</th><td>300만 원</td></tr>
      </table></div>
      <p>일요일 13:00은 원래 250명 기준인데 <u>200명으로 낮춰서</u> 안내받았어요. (가격표에 상담 내용을 적어주셨어요!)</p>

      <h3><span>02</span>날짜별 견적 비교</h3>
      <div class="vault-table is-wide"><table>
        <thead><tr><th>항목</th><th>공개 견적</th><th>10/10 (일) 11:00<br />12/26 (일) 15:00</th><th>10/30 (토) 15:00</th><th>11/28 (일) 13:00</th></tr></thead>
        <tbody>
          <tr><th>보증인원</th><td>200명</td><td>150명<br />(공휴일 특별 &amp; 1순위를 견적으로 체크)</td><td>200명</td><td>200명</td></tr>
          <tr><th>식대 (1인)</th><td>89,000원</td><td>74,000원</td><td>79,000원</td><td>75,000원</td></tr>
          <tr><th>식대 합계</th><td>1,780만 원</td><td>1,110만 원</td><td>1,580만 원</td><td>1,500만 원</td></tr>
          <tr><th>음주류</th><td>120만 원</td><td>0원 (서비스)</td><td>0원 (서비스)</td><td>0원 (서비스)</td></tr>
          <tr><th>대관료 (웨딩 프로그램)</th><td>700만 원</td><td>400만 원</td><td>600만 원</td><td>450만 원</td></tr>
          <tr><th>꽃장식 (기본)</th><td>400만 원</td><td>400만 원</td><td>400만 원</td><td>400만 원</td></tr>
          <tr class="is-total"><th>총액 (VAT 포함)</th><td>3,000만 원</td><td>1,910만 원</td><td>2,580만 원</td><td>2,350만 원</td></tr>
        </tbody>
      </table></div>
      <p class="vault-small">공개 견적은 홀 가격표 기준(기본 메뉴 89,000원, 웨딩 프로그램 700만 원, 꽃장식 400만 원, 음료·주류 1인 6,000원, 최소 보증인원 200명)으로 계산한 참고용이에요. 상위 메뉴(매화)는 1인 109,000원이에요.</p>
      <p class="vault-note"><b>이렇게 보세요</b>공개 견적보다 세 조건 모두 프로모션에서 낮아졌어요.<br />— 10월·12월 일요일은 약 24%, 11월 일요일 점심은 약 22%, 10월 토요일 오후는 약 14% 낮은 금액</p>
      <div class="vault-tip">
        <p class="vault-tip__label">💘 팁!</p>
        <p>마리아쥬스퀘어는 <b>상담 당일 계약 혜택</b>이 따로 있어요. 식전·후 커피(마리아쥬 카페) + 가로등 배너 <b>서비스</b> (전 메뉴 리필도 가능하다고 안내받았어요)</p>
        <p>단, 옵션 항목은 외부 업체를 쓸 수 없고 사진·DVD·사회·주례만 외부 업체가 가능해요.</p>
      </div>

      <h3><span>03</span>대관료(웨딩 프로그램)에 포함된 것</h3>
      <ul class="vault-list">
        <li>웨딩홀 &amp; 가든 2시간 이용 (13시 예식이면 12시~14시)</li>
        <li>웨딩 컨시어지, 혼구용품 (혼인 서약서, 성혼 선언문, 방명록 등)</li>
        <li>웨딩 조명, 음향, 영상 중계 연출</li>
        <li>포토테이블 (액자 10개 대여, 이젤 2개)</li>
        <li>피아노 라이브 연주 1인 (5곡)</li>
        <li>셔틀버스 (예식 60분 전부터 강남구청역 3번 출구)</li>
        <li>꽃장식(별도 400만 원) : 웨딩홀 &amp; 신부대기실 &amp; 가든 생화·조화 믹스 기본 세팅</li>
      </ul>
      <p>본식 사진·DVD는 <u>포함되지 않은 구성</u>이에요. (개별 문의)</p>

      <h3><span>04</span>견적 외 비용, 이렇게 나뉘어요</h3>
      <ul class="vault-list">
        <li>꽃 커스텀은 <b>별도 상담 후 결정</b>돼요. (로드 입구, 센터피스, 신부대기실, 중앙 가든)</li>
        <li>옵션은 <b>외부 업체 불가</b> : 카페 1인 3,000원 / 가로등 배너 33만 원 / 가든 재즈 3중주 88만 원 / 가든 와인바 110만 원 / 헬륨 풍선 15만 원 / 플라워 샤워 30만 원</li>
        <li>부대 품목은 <b>외부 업체 가능</b> : 주례 38만 원 / 전문 사회자 38만 원~ / 본식 사진·DVD 개별 문의</li>
        <li>추가 메뉴 : 육회 1인 5,000원 / 모둠떡 100명 기준 35만 원</li>
        <li>시식은 <b>6명 1회</b>, 사전 예약 필수예요.</li>
        <li>주차는 전 차량 2시간 무료, 웨딩카 1대 + 혼주 차량 6대는 5시간 무료예요.</li>
      </ul>
      <p>그래서 <u>옵션은 외부 업체로 바꿀 수 없다는 점</u>을 미리 알고 가세요.</p>

      <h3><span>05</span>그래서 저는 계약 안 했어요</h3>
      <p>홀 분위기, 동선, 상담, 견적까지 모두 만족스러웠어요. 그런데 마지막 투어를 다녀오고 나니 제 추구미가 채플홀 분위기라는 게 선명해져서 다음 후보까지 우선 봐보자였어요.</p>
      <blockquote class="vault-quote">마음에 드는 홀과 내가 가장 원하는 분위기의 홀은 다르다<small>여러 홀을 다녀보고 알게 된 점이에요.</small></blockquote>

      <h3 class="is-plain">상담 때 꼭 물어보세요</h3>
      <p>저는 여러 홀을 다녀보고 나서야 알게 된 질문들이에요. 투어 가기 전에 다른 건 몰라도 이 항목은 체크해서 들고 가세요.</p>
      <ul class="vault-check">
        <li><b>비선호 날짜·시간</b>이라면 <b>어떤 혜택</b>이 있는지</li>
        <li>계약 후 <b>보증인원은 언제까지, 얼마나 조정</b>할 수 있는지</li>
        <li><b>최소 보증인원 변경</b> 가능한지</li>
        <li><b>계약 변경이나 취소 시 조건</b>은 어떤지</li>
        <li><b>견적 외 추가 비용</b>은 어떤 게 있는지 (주류, 아동, 꽃장식, 연출, 필수 선택 항목 등)</li>
        <li>본식 스냅 혹은 DVD 필수인지 (뺄 수 있는지)</li>
        <li>다음 홀투어도 있어 오늘 저녁 8시까지 연락드려도 괜찮을지 (회신 시간을 조율해주실 거예요)</li>
      </ul>

      <h3 class="is-plain">오늘은 여기까지만</h3>
      <p>홀 분위기는 사진으로 다시 볼 수 있지만, <u>계약 조건은 놓치면 나중에 꽤 곤란할 수 있어요.</u></p>
      <p><b>“야외 정원 분위기가 나에게 1순위인가?”</b> 이 질문 하나만 들고 가도 훨씬 덜 헤매요.</p>
      <p class="vault-small">※ 2026년 10월 9일 상담 기준 견적이에요. 날짜·시간·시기에 따라 조건은 달라질 수 있어요.<br />본 콘텐츠의 저작권은 @jjomaeng.2에게 있습니다. 무단 전재, 재배포 및 상업적 이용 시 저작권법에 따라 법적 책임을 물을 수 있습니다.</p>
    `,
    body: `
      <p class="lead">저는 기본적으로 채플홀을 제일 좋아해요. 그렇다고 밝은 홀을 싫어하는 건 아니고, 화사하고 밝은 분위기도 제 추구미에 포함되거든요.</p>
      <p>그러던 중 발견한 마리아쥬스퀘어! 강남에서 야외 정원 같은 분위기를 느낄 수 있는데 견적까지 합리적인 편이라는 이야기를 들었어요. 그리고 와.. <u>야외 웨딩이 제 취향이었다면 진짜 여기로 했을 것 같아요.</u></p>

      <figure class="inline-figure figure-pair" data-reveal>
        <div class="inline-figure__img"><img src="images/mariage-2.jpg" alt="꽃 아치가 놓인 잔디 가든" loading="lazy" /></div>
        <div class="inline-figure__img"><img src="images/mariage-3.jpg" alt="웰컴 배너가 걸린 가든 산책로" loading="lazy" /></div>
      </figure>

      <section class="step">
        <span class="step__no">01</span>
        <div class="step__body">
          <p class="step__label">Hall</p>
          <h3>실내홀인데 야외 정원 느낌이 난다고요..?</h3>
          <p>전체적으로 밝은 화이트톤에 정원 같은 분위기가 더해진 홀이에요. 생화와 조화가 함께 사용된다고 하는데 제가 봤을 때는 크게 티가 나지 않았어요.</p>
          <p>사실 제가 야외 웨딩을 생각하지 않았던 건 날씨 때문이 가장 컸어요. 비가 올지, 바람이 불지.. 이건 뭐 기도밖에 답이 없으니까..ㅎ</p>
          <p class="highlight">야외 분위기는 좋은데 야외 예식은 망설여지는 사람에게 꽤 매력적인 선택지였어요.</p>
        </div>
      </section>

      <section class="step">
        <span class="step__no">02</span>
        <div class="step__body">
          <p class="step__label">Guest</p>
          <h3>예쁜데 하객 동선까지 마음에 들었어요</h3>
          <ul class="mood">
            <li><span>✦</span>단독홀, 120분 예식 간격</li>
            <li><span>✦</span>식사 동선이 편리한 구성</li>
            <li><span>✦</span>앉아서 식사할 수 있는 한식 한상차림</li>
          </ul>
          <p>뷔페처럼 음식을 가지러 여러 번 이동할 필요가 없어서, 어르신 하객분들이 많다면 오히려 더 편할 수도 있겠다 싶었어요. 혼주 대기실이 상담실 옆에 있어서 혼주분들까지 함께 신경 써주실 수 있다는 점도 좋았어요.</p>
        </div>
      </section>

      <figure class="inline-figure figure-pair" data-reveal>
        <div class="inline-figure__img"><img src="images/mariage-4.jpg" alt="꽃으로 꾸민 웰컴 보드" loading="lazy" /></div>
        <div class="inline-figure__img"><img src="images/mariage-5.jpg" alt="연회장의 원형 테이블" loading="lazy" /></div>
      </figure>

      <section class="step">
        <span class="step__no">03</span>
        <div class="step__body">
          <p class="step__label">Price</p>
          <h3>견적, 상담까지 만족스러웠던 이유</h3>
          <p>특히 좋았던 건 <b>어디서 추가금이 발생하는지 하나씩 설명해 주셨다는 점!</b> 어떤 항목이 기본으로 포함되고 어디서 추가 비용이 생기는지 알고 비교하는 게 중요하잖아요.</p>
          <p>견적도 제 기준에서는 꽤 만족스러웠던 곳이에요. 다만 홀 층고가 조금 낮게 느껴졌고, 신부대기실에 전용 화장실이 없다는 점은 현장에서 확인해 보세요.</p>
        </div>
      </section>

      <section class="result">
        <p class="result__label">Result</p>
        <p>그런데 계약을 안 한 이유가 이런 아쉬움 때문은 아니었어요.</p>
        <p>마지막 웨딩홀 투어를 다녀오면서 마음이 더 선명해졌거든요.</p>
        <blockquote>“마음에 드는 홀과<br />가장 원하는 분위기의 홀은 다르구나”</blockquote>
        <p>결국 제가 가장 좋아하는 건 <u>채플홀 분위기였던 것.</u></p>
      </section>

      <h2>마리아쥬스퀘어 투어 전 이것만 확인해 보세요</h2>
      <ol class="summary">
        <li><span>01</span>야외 정원 분위기가 실제로 내 취향인지</li>
        <li><span>02</span>한상차림 식사가 하객분들에게 잘 맞을지</li>
        <li><span>03</span>층고와 신부대기실 시설이 괜찮은지</li>
      </ol>
      <p>예쁜 홀은 참 많은데.. 하나만 고르는 게 제일 어렵다..8-8 제가 실제로 받은 날짜별 견적과 상담 체크리스트를 <b>견적</b>으로 정리해뒀어요. 아래에서 확인하세요.</p>
    `,
  },
  {
    slug: "wedding-hall-chapel",
    category: "hall",
    categoryLabel: "웨딩홀",
    series: "웨딩홀 (6)",
    title: "비쌀 줄 알고 뺐는데\n결국 계약했어요",
    subtitle: "더채플앳청담 커티지홀 · 실제 견적과 계약 전 체크 포인트",
    excerpt: "견적 때문에 처음부터 후보에서 뺐던 더채플앳청담. 투어 3일 전에 추가했는데, 홀도 취향이고 견적까지 예산 안으로 들어와 계약했어요.",
    excerptHtml: "비쌀 것 같아서 후보에서 뺐던 <mark>더채플앳청담</mark>.<br />홀도 취향인데 견적까지 예산 안으로 들어와 계약했어요.",
    date: "2026.11.08",
    readTime: "6 min",
    image: "images/chapel-1.jpg",
    imageAlt: "꽃과 소파로 꾸민 더채플앳청담 신부대기실",
    file: {
      name: "더채플앳청담 실제 견적",
      desc: "날짜별 견적 3장 비교 · 대관료 포함 항목 · 보증인원 운영 · 상담 체크리스트",
      url: "#",
    },
    vaultLabel: "견적",
    vault: `
      <p class="vault-lead">더채플앳청담 커티지홀은 단아하고 차분한 채플홀이었어요. 홀마다 층과 식사 공간이 나뉘어 있어 하객 동선도 깔끔했고요. 제가 실제로 받은 날짜별 견적을 그대로 정리했어요.</p>
      <div class="vault-sum">
        <p class="vault-sum__label">한눈에 정리</p>
        <ol>
          <li><span>01</span>공개된 견적은 대략 <b>3,800만 원</b>이에요.</li>
          <li><span>02</span>프로모션 적용하면 <b>약 26~36% 정도</b> 할인돼요.</li>
          <li><span>03</span>특정일 프로모션 날짜는 <b>추가 할인</b>이 붙기도 해요. (플래너 계약을 미리 했다면, 지난 년도 할인 시즌을 알아봐달라고 해보세요..!)</li>
        </ol>
      </div>

      <h3><span>01</span>견적 받은 조건</h3>
      <div class="vault-table"><table>
        <tr><th>예식 후보</th><td>2027년 10월 10일 (일) 11:00<br />2027년 12월 26일 (일) 오후 14:00<br />2027년 12월 26일 (일) 오후 15:30</td></tr>
        <tr><th>홀</th><td>3층 커티지홀</td></tr>
        <tr><th>지불 보증인원</th><td>250명 (12월 26일 오후 15:30는 200명)</td></tr>
        <tr><th>계약금</th><td>500만 원</td></tr>
      </table></div>
      <p>제가 안내받은 날짜는 모두 <u>일요일</u>이에요. (부모님께 받아온 날짜가 일요일 위주였거든요!)</p>

      <h3><span>02</span>날짜별 견적 비교</h3>
      <div class="vault-table is-wide"><table>
        <thead><tr><th>항목</th><th>공개 견적</th><th>10/10 (일) 11:00</th><th>12월 말 (일) 오후 ①</th><th>12월 말 (일) 오후 ②</th></tr></thead>
        <tbody>
          <tr><th>보증인원</th><td>200명</td><td>250명</td><td>250명</td><td>200명</td></tr>
          <tr><th>식대 (1인)</th><td>120,000원</td><td>94,600원</td><td>94,600원</td><td>81,400원</td></tr>
          <tr><th>식대 합계</th><td>2,400만 원</td><td>2,365만 원</td><td>2,365만 원</td><td>1,628만 원</td></tr>
          <tr><th>음주류</th><td>220만 원</td><td>0원 (서비스)</td><td>0원 (서비스)</td><td>0원 (서비스)</td></tr>
          <tr><th>대관료 (웨딩홀 사용료)</th><td>1,200만 원</td><td>957만 원</td><td>957만 원</td><td>825만 원</td></tr>
          <tr><th>플라워샤워</th><td>22만 원</td><td>0원 (서비스)</td><td>0원 (서비스)</td><td>0원 (서비스)</td></tr>
          <tr class="is-total"><th>총액 (VAT 포함)</th><td>3,842만 원</td><td>3,322만 원</td><td>3,322만 원</td><td>2,453만 원</td></tr>
        </tbody>
      </table></div>
      <p class="vault-small">공개 견적은 견적서 기본견적(식대 120,000원, 웨딩홀 사용료 1,200만 원, 음주류 1인 11,000원, 플라워샤워 22만 원) 200명 기준으로 계산한 참고용이에요. 소인 식대는 47,300원이에요.</p>
      <p class="vault-note"><b>이렇게 보세요</b>공개 견적보다 세 날짜 모두 프로모션으로 낮아졌어요.<br />— 같은 일요일이라도 보증인원과 시간대에 따라 금액이 달라졌어요.</p>
      <div class="vault-tip">
        <p class="vault-tip__label">💘 팁!</p>
        <p>더채플앳청담은 <b>상담 당일 계약 혜택</b>이 따로 있어요. 플라워샤워 + 웨딩카 / 혼주 헤어·메이크업 2인 / 현악 2중주 중 <b>1가지 서비스</b> (특정일 프로모션 날짜면 10~20% 추가 할인이 붙는 경우도 있어요)</p>
        <p>단, 지점 이동이나 날짜 변경 시에는 혜택이 사라져요.</p>
      </div>

      <h3><span>03</span>대관료에 포함된 것</h3>
      <ul class="vault-list">
        <li>웨딩홀 사용료 (3층 커티지홀)</li>
        <li>빔프로젝터, 웨딩 어시스턴트 서비스</li>
        <li>혼구용품 (혼인 서약서, 성혼 선언문, 방명록, 장갑, 봉투)</li>
        <li>웨딩홀 &amp; 신부대기실 플라워 장식</li>
        <li>포토테이블 (5x7인치 사진 8매는 직접 인화해서 지참)</li>
        <li>전문 사회자, 남성 4중창 (피아노·화촉점화, 신랑·신부 입장, 축가, 퇴장)</li>
        <li>2인 3CAM 4K 본식 영상 (다큐 20분 내외, 하이라이트 2곡, 링크 제공)</li>
        <li>신랑·신부 &amp; 양가 혼주 4인 중식 (혼주 4인은 보증인원에 포함)</li>
        <li>브라이덜 스파 프레스티지 케어 60분 2회 (예식 30일 전까지)</li>
      </ul>
      <p>본식 영상이 <u>대관료에 들어 있는 구성</u>이에요. <b>(찾아봤는데 본식 영상 퀄리티도 괜찮더라고요! 저는 영상에는 욕심이 많지 않아 패키지로 바로 하기로 했습니다 → 대신 이 금액을 다른 곳으로 분배하려고요)</b></p>

      <h3><span>04</span>보증인원·혜택, 이렇게 운영돼요</h3>
      <ul class="vault-list">
        <li>보증인원은 <b>대인 기준</b>이에요. (소인은 평균 10명 정도 방문한다고 하더라고요.)</li>
        <li>보증인원보다 적게 와도 <b>보증인원만큼 청구</b>돼요.</li>
        <li>보증인원을 넘으면 <b>계약한 식대로 정산</b>돼요.</li>
        <li>특정일 할인은 <b>최초 계약 보증인원 × 식대 + 부대상품</b> 기준이에요.</li>
        <li>브라이덜 스파는 <b>예식 30일 전까지</b> 써야 하고, 안 쓰면 환불이 안 돼요.</li>
      </ul>
      <p>혜택이 <u>처음 계약한 조건 그대로일 때만</u> 유지되니 날짜와 인원은 신중하게 정하세요.</p>

      <h3><span>05</span>그래서 저는 계약했어요</h3>
      <p>홀 분위기가 제 추구미에 가장 가까웠어요. 일요일 날짜 위주로 보니 견적도 예산 안으로 들어왔고요.</p>
      <p>주차와 착석 인원은 아쉬웠지만, 저희에게 가장 중요한 홀 분위기와 예산이 맞았어요.</p>
      <blockquote class="vault-quote">저희에게 중요한 조건이 더 많이 맞았던 곳<small>여러 홀을 다녀보고 알게 된 점이에요.</small></blockquote>

      <h3 class="is-plain">상담 때 꼭 물어보세요</h3>
      <p>저는 여러 홀을 다녀보고 나서야 알게 된 질문들이에요. 투어 가기 전에 다른 건 몰라도 이 항목은 체크해서 들고 가세요.</p>
      <ul class="vault-check">
        <li><b>비선호 날짜·시간</b>이라면 <b>어떤 혜택</b>이 있는지</li>
        <li>계약 후 <b>보증인원은 언제까지, 얼마나 조정</b>할 수 있는지</li>
        <li><b>최소 보증인원 변경</b> 가능한지</li>
        <li><b>계약 변경이나 취소 시 조건</b>은 어떤지</li>
        <li><b>견적 외 추가 비용</b>은 어떤 게 있는지 (주류, 아동, 꽃장식, 연출, 필수 선택 항목 등)</li>
        <li>본식 스냅 혹은 DVD 필수인지 (뺄 수 있는지)</li>
        <li>다음 홀투어도 있어 오늘 저녁 8시까지 연락드려도 괜찮을지 (회신 시간을 조율해주실 거예요)</li>
      </ul>

      <h3 class="is-plain">오늘은 여기까지만</h3>
      <p>홀 분위기는 사진으로 다시 볼 수 있지만, <u>계약 조건은 놓치면 나중에 꽤 곤란할 수 있어요.</u></p>
      <p><b>“우리가 양보할 수 있는 날짜·시간대는 어디까지인가?”</b> 이 질문 하나만 들고 가도 훨씬 덜 헤매요.</p>
      <p class="vault-small">※ 2026년 10월 9일 상담 기준 견적이에요. 날짜·시간·시기에 따라 조건은 달라질 수 있어요.<br />본 콘텐츠의 저작권은 @jjomaeng.2에게 있습니다. 무단 전재, 재배포 및 상업적 이용 시 저작권법에 따라 법적 책임을 물을 수 있습니다.</p>
    `,
    body: `
      <p class="lead">저희가 최종 계약한 웨딩홀은 사실 처음 투어 리스트에 없던 곳이에요. 바로 <b>더채플앳청담!</b></p>
      <p>저는 홀 분위기가 1순위, 남자친구는 견적이 1순위였거든요. 괜히 봤다가 눈만 높아지는 거 아닌가 싶어서 처음부터 후보에서 제외했어요. 그런데 이게 웬걸..? <u>홀도 제 취향인데 견적까지 예산 안으로 들어와 계약했어요!</u></p>

      <section class="step">
        <span class="step__no">01</span>
        <div class="step__body">
          <p class="step__label">Tour</p>
          <h3>투어 3일 전에 갑자기 추가한 웨딩홀</h3>
          <p>원래 투어 리스트는 노블발렌티 대치, 아펠가모 선릉, 마리아쥬스퀘어 세 곳이었어요. 그런데 마리아쥬스퀘어에서 걸어서 5분 거리에 더채플앳청담이 있다는 게 생각난 거예요.</p>
          <p class="highlight">어차피 근처까지 가는데 보기나 해볼까..?</p>
          <p>게다가 더채플앳청담은 홈페이지에서 금액과 예약 관련 정보를 바로 확인할 수 있어서 투어를 결정하기가 훨씬 편했어요.</p>
        </div>
      </section>

      <section class="step">
        <span class="step__no">02</span>
        <div class="step__body">
          <p class="step__label">Hall</p>
          <h3>와.. 실물이 이렇게 예쁘다고요?</h3>
          <p>최근 리뉴얼했다고 안내받았는데, 제가 투어하면서 봤던 홀 중에서도 <b>제 추구미에 가장 가까운 분위기</b>였어요.</p>
          <ul class="mood">
            <li><span>✦</span>커티지홀 : 단아 &amp; 차분</li>
            <li><span>✦</span>채플홀 : 웅장 &amp; 차분</li>
            <li><span>✦</span>두 홀 모두 층고가 높아 답답하지 않음</li>
          </ul>
          <p>꽃도 과하게 화려하지 않은데 공간이 허전하지도 않은, 딱 제가 좋아하는 만큼 있었어요. (은근 까다로운 추구미..ㅎ)</p>
        </div>
      </section>

      <figure class="inline-figure figure-pair" data-reveal>
        <div class="inline-figure__img"><img src="images/chapel-2.jpg" alt="상담 테이블 위 꽃 한 송이와 웨딩 매거진" loading="lazy" /></div>
        <div class="inline-figure__img"><img src="images/chapel-3.jpg" alt="상담 때 나온 마카롱과 음료" loading="lazy" /></div>
      </figure>

      <section class="step">
        <span class="step__no">03</span>
        <div class="step__body">
          <p class="step__label">Price</p>
          <h3>견적, 생각보다 예산 안이라고요..?</h3>
          <p>홀은 커티지홀과 채플홀이 층으로 나뉘어 있고 식사 공간도 홀에 맞춰 구분되어 있어서, 하객 동선도 만족스러웠어요. 그런데 제일 걱정은 역시 견적이었죠.</p>
          <p>막상 상담을 받아보니 생각보다 조건이 괜찮더라고요. 저희가 꼭 토요일 점심 예식만 고집하지 않았고, 부모님께 받아온 날짜도 일요일 위주였던 게 <u>홀 선택의 폭을 넓혀줬어요.</u></p>
          <p class="highlight">비쌀 것 같아서 제외했던 홀인데, 정작 예산 안에서 선택할 수 있었던 것!</p>
        </div>
      </section>

      <section class="step">
        <span class="step__no">04</span>
        <div class="step__body">
          <p class="step__label">Check</p>
          <h3>물론 아쉬운 점도 있었어요</h3>
          <p>생각보다 <b>홀 안에 앉을 수 있는 하객 인원</b>이 적은 편이었고, <b>주차</b>는 조금 많이 아쉬웠어요. 하객이 많거나 주차가 중요하다면 꼭 따로 확인하세요.</p>
          <p>저희에게는 홀 분위기와 예산이 최우선이라 이 부분은 감수하기로 했어요. 모든 조건이 완벽해서 계약한 게 아니라, <u>저희에게 중요한 조건이 더 많이 맞았기 때문</u>이에요.</p>
        </div>
      </section>

      <section class="result">
        <p class="result__label">Result</p>
        <p>마리아쥬스퀘어 VS 더채플앳청담. 두 곳 모두 장점이 많았는데</p>
        <blockquote>“제 추구미를 포기하지 않으면서<br />예산 기준도 지킬 수 있는 곳”</blockquote>
        <p>결국 저희는 <u>더채플앳청담 커티지홀로 계약했답니다!</u></p>
      </section>

      <h2>웨딩홀 투어 전 이 세 가지는 정해두세요</h2>
      <ol class="summary">
        <li><span>01</span>각자 절대 포기하고 싶지 않은 조건 1가지</li>
        <li><span>02</span>양보할 수 있는 조건 (날짜·시간대 등)</li>
        <li><span>03</span>아쉬워도 감수할 수 있는 부분</li>
      </ol>
      <p>마음에 드는 홀을 찾는 것보다 둘 다 납득할 수 있는 홀을 고르는 게 더 중요하더라고요. 제가 실제로 받은 날짜별 견적 3장과 상담 체크리스트를 <b>견적</b>으로 정리해뒀어요. 아래에서 확인하세요.</p>
    `,
  },
  {
    slug: "wedding-hall-3",
    locked: true, // 준비 중: 목록에 잠금으로만 표시
    category: "hall",
    categoryLabel: "웨딩홀",
    series: "웨딩홀 (7)",
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
