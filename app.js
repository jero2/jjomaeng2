(function () {
  const POSTS = window.POSTS;
  const SITE = window.SITE;
  const app = document.getElementById("app");
  const curtain = document.getElementById("curtain");
  const curtainLabel = document.getElementById("curtainLabel");
  const progress = document.getElementById("progress");
  const masthead = document.querySelector(".masthead");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const pad = (n) => String(n).padStart(2, "0");
  const sleep = (ms) => new Promise((r) => setTimeout(r, reduceMotion ? 0 : ms));

  document.getElementById("today").textContent = new Date()
    .toLocaleDateString("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" })
    .replace(/\s/g, "");

  /* ---------- 통계 (구글 애널리틱스) ---------- */
  if (SITE.gaId) {
    const tag = document.createElement("script");
    tag.async = true;
    tag.src = `https://www.googletagmanager.com/gtag/js?id=${SITE.gaId}`;
    document.head.appendChild(tag);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      dataLayer.push(arguments);
    };
    gtag("js", new Date());
    // 해시 주소라 페이지 조회는 화면이 바뀔 때마다 직접 보낸다
    gtag("config", SITE.gaId, { send_page_view: false });
  }
  function track(name, params) {
    if (window.gtag) gtag("event", name, params);
  }
  const postParams = (p) => ({ post_title: `${p.series} · ${p.title.replace("\n", " ")}`, post_slug: p.slug });

  /* ---------- 복사 방지 ---------- */
  ["copy", "cut", "contextmenu", "dragstart", "selectstart"].forEach((type) =>
    document.addEventListener(type, (e) => e.preventDefault())
  );
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && ["a", "c", "x", "s", "u", "p"].includes(e.key.toLowerCase())) e.preventDefault();
  });

  document.addEventListener("click", (e) => {
    const sns = e.target.closest("[data-sns]");
    if (sns) track("sns_click", { sns: sns.dataset.sns });
  });

  /* ---------- 라우팅 ---------- */
  function parseRoute() {
    const hash = location.hash.replace(/^#/, "") || "/";
    const [path, query = ""] = hash.split("?");
    const params = new URLSearchParams(query);
    const m = path.match(/^\/post\/([\w-]+)/);
    if (m) return { type: "post", slug: m[1] };
    return { type: "home", cat: params.get("c") || "all" };
  }

  /* ---------- 공통 조각 ---------- */
  // 사진 파일이 아직 없으면 선 패턴 커버로 대체한다
  function media(post, size) {
    const word = post.category === "hall" ? "Wedding Hall" : "Studio";
    const fallback = `<div class="lined"><span class="lined__big">${post.series.replace(/^.*\((\d)\)$/, "No.$1")}</span><span class="lined__word">${word}</span></div>`;
    if (!post.image) return fallback;
    return `<img src="${post.image}" alt="${post.imageAlt}" ${size === "thumb" ? 'loading="lazy"' : ""} data-fallback="${encodeURIComponent(fallback)}" />`;
  }
  document.addEventListener(
    "error",
    (e) => {
      const img = e.target;
      if (img.tagName !== "IMG") return;
      const holder = img.parentElement;
      if (img.dataset.fallback) img.outerHTML = decodeURIComponent(img.dataset.fallback);
      else holder.innerHTML = '<div class="lined"></div>';
    },
    true
  );

  const splitLines = (text) =>
    text
      .split("\n")
      .map((line) => `<span class="split"><span>${line}</span></span>`)
      .join("");

  /* ---------- 메인 ---------- */
  function renderHome(cat) {
    // 공개 글은 최신순, 잠긴 글은 그 아래에 번호순
    const sorted = [...POSTS].sort((a, b) =>
      a.locked || b.locked
        ? !!a.locked - !!b.locked || POSTS.indexOf(a) - POSTS.indexOf(b)
        : b.date.localeCompare(a.date)
    );
    const total = POSTS.filter((p) => !p.locked).length;

    const rows = sorted
      .map((p) => {
        const no = POSTS.indexOf(p) + 1;
        if (p.locked) return lockedRow(p, no);
        return `
        <li class="post-row" data-cat="${p.category}" data-reveal>
          <a href="#/post/${p.slug}" data-link>
            <span class="post-row__no">${pad(no)}</span>
            <span class="post-row__cat"><span>${p.categoryLabel}</span></span>
            <div class="post-row__main">
              <h3>${p.series} · ${p.title.replace("\n", " ")}</h3>
              <p>${p.excerpt}</p>
            </div>
            <div class="post-row__side">
              <span class="post-row__date">${p.date}</span>
              <div class="post-row__thumb">${media(p, "thumb")}</div>
            </div>
          </a>
        </li>`;
      })
      .join("");

    app.innerHTML = `
      <section class="wrap hero">
        <div class="social" data-reveal>
          <a href="${SITE.instagram}" target="_blank" rel="noopener" data-sns="instagram" aria-label="인스타그램">${ICON_INSTAGRAM}<span>Instagram</span></a>
          <a href="${SITE.youtube}" target="_blank" rel="noopener" data-sns="youtube" aria-label="유튜브">${ICON_YOUTUBE}<span>YouTube</span></a>
          <a href="${SITE.kakao}" target="_blank" rel="noopener" data-sns="kakao" aria-label="카카오톡 오픈채팅">${ICON_CHAT}<span>새로운 자료 소식을 안내드려요</span></a>
        </div>
        <p class="hero__compact">직접 해보고, 미리 알면 좋을 것만 나눠요.</p>
        <p class="hero__eyebrow" data-reveal>Wedding Archive · Vol. 01</p>
        <h1 class="hero__title" data-reveal-split>
          <span class="split"><span>직접 해보고,</span></span>
          <span class="split"><span class="thin">미리 알면 좋을 것만 나눠요.</span></span>
        </h1>
        <div class="hero__foot">
          <p class="hero__desc" data-reveal><mark>결혼 준비하면서 내 추구미를 알아가는 중.</mark><br />다 챙기진 못해도, 선택 전에 이것만은 보고 가요.</p>
          <div class="hero__stat" data-reveal>
            <div><b>${pad(total)}</b><small>Articles</small></div>
            <div><b>${pad(total)}</b><small>Free files</small></div>
          </div>
        </div>
      </section>

      <div class="wrap"><div class="rule" data-line></div></div>

      <section class="wrap featured-slot">${featuredHTML(cat)}</section>

      <section class="wrap">
        <div class="list-head">
          <h2>All Articles<small>${pad(total)} posts</small></h2>
          <div class="filter" role="tablist">
            <button data-filter="all">전체</button>
            <button data-filter="hall">웨딩홀</button>
            <button data-filter="studio">스튜디오</button>
          </div>
        </div>
        <ul class="post-list">${rows}</ul>
      </section>
    `;

    app.querySelectorAll("[data-filter]").forEach((btn) =>
      btn.addEventListener("click", () => {
        const c = btn.dataset.filter;
        history.replaceState(null, "", c === "all" ? "#/" : `#/?c=${c}`);
        applyFilter(c);
      })
    );
    applyFilter(cat, true);
  }

  const openPosts = () =>
    POSTS.filter((p) => !p.locked).sort((a, b) => b.date.localeCompare(a.date));

  // 추천 글: 전체 화면은 SITE.featured(기본 최신 글), 카테고리 화면은 그 카테고리 최신 글을 작게
  function featuredHTML(cat) {
    const open = openPosts();
    const newest = open[0];
    const small = cat !== "all";
    const f = small
      ? open.find((p) => p.category === cat)
      : open.find((p) => p.slug === SITE.featured) || newest;
    const cls = `featured${small ? " is-small" : ""}`;
    if (!f) {
      const label = cat === "studio" ? "스튜디오" : "웨딩홀";
      return `
        <a href="${SITE.kakao}" target="_blank" rel="noopener" class="${cls} is-empty" data-sns="kakao" data-reveal-block>
          <div class="featured__media"><div class="lined"><span class="lined__big">Soon</span><span class="lined__word">${cat === "studio" ? "Studio" : "Wedding Hall"}</span></div></div>
          <div class="featured__info">
            <div>
              <div class="featured__tag"><span>Coming soon — ${label}</span><span></span></div>
              <h2 class="featured__title">${label} 글은 준비 중이에요</h2>
              <p class="featured__sub">곧 자료와 함께 올라와요.<br />새 자료 소식은 오픈채팅에서 먼저 안내해요.</p>
            </div>
            <span class="featured__more">새 자료 소식 받기 <i class="arrow"></i></span>
          </div>
        </a>`;
    }
    return `
        <a href="#/post/${f.slug}" class="${cls}" data-link data-reveal-block>
          <div class="featured__media">${media(f)}</div>
          <div class="featured__info">
            <div>
              <div class="featured__tag"><span>Featured — ${f.categoryLabel}</span><span>${f.date}</span></div>
              ${f === newest ? '<p class="featured__new">New</p>' : ""}
              <h2 class="featured__title">${f.title}</h2>
              <p class="featured__sub">${f.excerptHtml || f.excerpt}</p>
            </div>
            <span class="featured__more">읽고 자료 받기 <i class="arrow"></i></span>
          </div>
        </a>`;
  }

  function applyFilter(cat, instant) {
    app.querySelectorAll("[data-filter]").forEach((b) => b.classList.toggle("is-active", b.dataset.filter === cat));
    setNavActive(cat);
    // 카테고리 화면에서는 큰 소개 문구 대신 한 줄 문구만 보여준다
    const hero = app.querySelector(".hero");
    if (hero) hero.classList.toggle("is-cat", cat !== "all");
    const slot = app.querySelector(".featured-slot");
    if (slot && !instant) {
      slot.innerHTML = featuredHTML(cat);
      const card = slot.firstElementChild;
      requestAnimationFrame(() => requestAnimationFrame(() => card.classList.add("is-visible")));
    } else if (slot && slot.dataset.cat !== cat) {
      slot.innerHTML = featuredHTML(cat);
    }
    if (slot) slot.dataset.cat = cat;
    const rows = [...app.querySelectorAll(".post-row")];
    rows.forEach((row) => {
      const show = cat === "all" || row.dataset.cat === cat;
      if (instant) {
        row.classList.toggle("is-hidden", !show);
        return;
      }
      row.classList.remove("is-visible");
      row.classList.toggle("is-hidden", !show);
    });
    if (!instant) {
      rows
        .filter((r) => !r.classList.contains("is-hidden"))
        .forEach((r, i) => setTimeout(() => r.classList.add("is-visible"), 60 + i * 70));
    }
  }

  function setNavActive(cat) {
    document.querySelectorAll(".nav a").forEach((a) => a.classList.toggle("is-active", cat != null && a.dataset.cat === cat));
  }

  const ICON_INSTAGRAM =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="0.6" class="dot"/></svg>';
  const ICON_YOUTUBE =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="5.5" width="19" height="13" rx="3.5"/><path d="M10.2 9.4v5.2l4.4-2.6z" class="dot"/></svg>';
  const ICON_CHAT =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4.5c-4.9 0-8.5 3-8.5 6.7 0 2.3 1.4 4.3 3.6 5.5l-.8 3 3.3-2c.8.2 1.6.3 2.4.3 4.9 0 8.5-3 8.5-6.8S16.9 4.5 12 4.5z"/></svg>';
  const LOCK_ICON =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="10.5" width="14" height="10" rx="1"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/></svg>';

  function lockedRow(p, no) {
    return `
        <li class="post-row is-locked" data-cat="${p.category}" data-reveal aria-disabled="true">
          <div class="post-row__inner">
            <span class="post-row__no">${pad(no)}</span>
            <span class="post-row__cat"><span>${p.categoryLabel}</span></span>
            <div class="post-row__main">
              <h3>${p.series} · 준비 중이에요</h3>
              <p>곧 자료와 함께 공개될 글이에요.</p>
            </div>
            <div class="post-row__side">
              <span class="post-row__date">Coming soon</span>
              <div class="post-row__thumb post-row__lock">${LOCK_ICON}</div>
            </div>
          </div>
        </li>`;
  }

  /* ---------- 글 페이지 ---------- */
  function renderPost(slug) {
    const idx = POSTS.findIndex((p) => p.slug === slug);
    if (idx < 0 || POSTS[idx].locked) {
      location.replace("#/");
      return;
    }
    const p = POSTS[idx];
    const open = POSTS.filter((x) => !x.locked);
    const prev = open[open.indexOf(p) - 1];
    const next = open[open.indexOf(p) + 1];
    setNavActive(p.category);

    app.innerHTML = `
      <article>
        <header class="wrap post-hero">
          <div class="crumb" data-reveal><a href="#/" data-link><i class="arrow"></i>Archive</a><span>/</span><span>${p.categoryLabel}</span></div>
          <div class="post-hero__head">
            <div>
              <p class="post-hero__series" data-reveal>${pad(idx + 1)} — ${p.series}</p>
              <h1 class="post-hero__title" data-reveal-split>${splitLines(p.title)}</h1>
              <p class="post-hero__sub" data-reveal>${p.subtitle}</p>
            </div>
            <dl class="post-hero__meta" data-reveal>
              <dt>Date</dt><dd>${p.date}</dd>
              <dt>Read</dt><dd>${p.readTime}</dd>
              <dt>Category</dt><dd>${p.categoryLabel}</dd>
            </dl>
          </div>
          <div class="rule" data-line></div>
          <div class="cover" data-reveal-block>${media(p)}</div>
        </header>

        <div class="wrap article">
          <aside class="article__aside">
            <button type="button" data-jump="top"><b>${p.series}</b>✦쪼맹의 자료공유집<i class="arrow"></i></button>
            <button type="button" data-jump="file"><b>Free file</b>${p.file.name}<i class="arrow"></i></button>
          </aside>
          <div class="article__body">${p.body}</div>
        </div>

${renderPreview(p)}
        <section class="download" data-reveal>
          <div>
            <p class="download__eyebrow">Free Download</p>
            <h2 class="download__title">${p.file.name}</h2>
            <p class="download__desc">${p.file.desc}</p>
            <div class="download__meta"><span>무료 공유</span><span>한정 기간 배포</span><span>${p.series}</span></div>
          </div>
          <button class="btn btn--solid" data-download="${p.slug}"><span>자료 다운로드</span><i class="btn__arrow btn__arrow--down"></i></button>
        </section>

        <nav class="wrap">
          <div class="pager">
            ${prev ? `<a href="#/post/${prev.slug}" data-link><small>Previous</small><b>${prev.series} · ${prev.title.replace("\n", " ")}</b></a>` : `<a class="is-empty"></a>`}
            ${next ? `<a href="#/post/${next.slug}" data-link><small>Next</small><b>${next.series} · ${next.title.replace("\n", " ")}</b></a>` : `<a href="#/" data-link><small>Back to</small><b>전체 글 보기</b></a>`}
          </div>
        </nav>
      </article>
    `;

    app.querySelector("[data-download]").addEventListener("click", () => openModal(p));
    // 왼쪽 사이드: 글 맨 위 / 자료 미리보기(없으면 다운로드 박스)로 이동
    app.querySelectorAll("[data-jump]").forEach((btn) =>
      btn.addEventListener("click", () => {
        const behavior = reduceMotion ? "auto" : "smooth";
        if (btn.dataset.jump === "top") return window.scrollTo({ top: 0, behavior });
        const target = app.querySelector(".preview") || app.querySelector(".download");
        const top = target.getBoundingClientRect().top + scrollY - masthead.offsetHeight - 40;
        window.scrollTo({ top, behavior });
      })
    );
    // 문장이 끝날 때마다 줄바꿈 (PC·폰 모두). 말줄임표 ..는 이어 쓰고, ..ㅎ 뒤에서는 바꾼다
    app.querySelectorAll(".article__body p:not(.step__label):not(.result__label):not(.highlight)").forEach((el) => {
      el.innerHTML = el.innerHTML.replace(/([가-힣][.?!]|\.\.ㅎ)\s+(?=[^\s<])/g, "$1<br />");
    });
    app.querySelectorAll(".article__body > *").forEach((el) => {
      if (!el.hasAttribute("data-reveal")) el.setAttribute("data-reveal", "");
    });
  }

  function renderPreview(p) {
    const pv = p.preview;
    if (!pv) return "";
    const toc = pv.toc
      .map(([t, d], i) => `<li><span>${pad(i + 1)}</span><div><b>${t}</b><small>${d}</small></div></li>`)
      .join("");
    const checks = pv.checks
      .map(([t, a, b]) => `<div><b>${t}</b><p><i></i>${a}</p><p><i></i>${b}</p></div>`)
      .join("");
    return `
      <section class="preview" data-reveal>
        <div class="preview__head">
          <p class="preview__eyebrow">Inside the file</p>
          <h2 class="preview__title">자료 미리보기</h2>
          <p class="preview__desc">글에서 말한 순서를 직접 해볼 수 있게 정리했어요.</p>
        </div>
        <ol class="preview__toc">${toc}</ol>
        <div class="preview__sample">
          <p class="preview__label">${pv.sample.label}</p>
          <p class="preview__quote">${pv.sample.text}</p>
          <p class="preview__note">— ${pv.sample.note}</p>
        </div>
        <div class="preview__locked">
          <div class="preview__checks" aria-hidden="true">${checks}</div>
          <p class="preview__more">체크칸과 후보 적는 칸은 자료에서 이어져요</p>
        </div>
      </section>`;
  }

  /* ---------- 자료 다운로드 모달 (쿠팡 방문 후 열림) ---------- */
  const modal = document.getElementById("modal");
  const coupangBtn = document.getElementById("coupangBtn");
  const downloadBtn = document.getElementById("downloadBtn");
  const step1 = document.getElementById("step1");
  const step2 = document.getElementById("step2");
  let lastFocus = null;

  function setUnlocked(on) {
    downloadBtn.classList.toggle("is-locked", !on);
    downloadBtn.classList.toggle("is-unlocked", on);
    downloadBtn.setAttribute("aria-disabled", String(!on));
    step1.classList.toggle("is-active", !on);
    step1.classList.toggle("is-done", on);
    step2.classList.toggle("is-active", on);
    coupangBtn.querySelector("span").textContent = on ? "쿠팡 다시 보러 가기" : "쿠팡 방문하고 자료 받기";
  }

  let modalPost = null;
  function openModal(post) {
    modalPost = post;
    track("file_modal_open", postParams(post));
    lastFocus = document.activeElement;
    document.getElementById("modalFile").textContent = `${post.file.name} · ${post.file.desc}`;
    coupangBtn.href = SITE.coupangUrl;
    downloadBtn.href = post.file.url;
    // 노션 같은 외부 링크는 새 탭으로 연다
    downloadBtn.target = "_blank";
    downloadBtn.rel = "noopener";
    setUnlocked(false);
    modal.hidden = false;
    document.body.classList.add("is-locked");
    requestAnimationFrame(() => requestAnimationFrame(() => modal.classList.add("is-open")));
    setTimeout(() => coupangBtn.focus(), 300);
  }

  function closeModal() {
    modal.classList.remove("is-open");
    document.body.classList.remove("is-locked");
    setTimeout(() => (modal.hidden = true), reduceMotion ? 0 : 600);
    if (lastFocus) lastFocus.focus();
  }

  coupangBtn.addEventListener("click", () => {
    track("coupang_click", { ...postParams(modalPost), button_location: "download_modal" });
    setTimeout(() => setUnlocked(true), 400);
  });
  downloadBtn.addEventListener("click", (e) => {
    if (downloadBtn.classList.contains("is-locked")) e.preventDefault();
    else if (downloadBtn.getAttribute("href") === "#") {
      e.preventDefault();
      alert("자료 파일 링크가 아직 연결되지 않았어요. posts.js의 file.url을 채워주세요.");
    } else track("file_download", postParams(modalPost));
  });
  modal.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });

  /* ---------- 스크롤 등장 ---------- */
  let io;
  function observe() {
    if (io) io.disconnect();
    io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("is-visible");
            io.unobserve(en.target);
          }
        }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    let delay = 0;
    app.querySelectorAll("[data-reveal], [data-reveal-split], [data-reveal-block], [data-line]").forEach((el) => {
      const r = el.getBoundingClientRect();
      // 첫 화면 요소는 순서대로 살짝씩 늦게 등장
      if (r.top < innerHeight) {
        el.style.transitionDelay = `${delay}ms`;
        el.querySelectorAll(".split > span").forEach((s, i) => (s.style.transitionDelay = `${delay + i * 90}ms`));
        delay += 90;
      }
      io.observe(el);
    });
  }

  /* ---------- 스크롤 효과 ---------- */
  function onScroll() {
    const y = scrollY;
    masthead.classList.toggle("is-compact", y > 80);
    const max = document.documentElement.scrollHeight - innerHeight;
    const isPost = parseRoute().type === "post";
    progress.style.transform = `scaleX(${isPost && max > 0 ? Math.min(y / max, 1) : 0})`;
    const cover = app.querySelector(".cover.is-visible img");
    if (cover && !reduceMotion) cover.style.transform = `translateY(${Math.min(y * 0.12, 120)}px) scale(1.06)`;
  }
  addEventListener("scroll", () => requestAnimationFrame(onScroll), { passive: true });

  /* ---------- 렌더 + 전환 ---------- */
  let current = null;
  // 첫 로딩 때는 인트로가 걷히는 타이밍에 맞춰 등장시킨다
  let revealDelay = reduceMotion ? 0 : 450;
  function render(route) {
    if (route.type === "post") renderPost(route.slug);
    else renderHome(route.cat);
    current = route;
    const post = route.type === "post" && POSTS.find((p) => p.slug === route.slug);
    track("page_view", {
      page_title: post ? postParams(post).post_title : "메인",
      page_location: location.href,
      page_path: post ? `/post/${post.slug}` : "/",
      ...(post ? { post_slug: post.slug } : {}),
    });
    window.scrollTo(0, 0);
    onScroll();
    setTimeout(observe, revealDelay);
    revealDelay = 0;
  }

  async function navigate() {
    const route = parseRoute();
    if (current && current.type === "home" && route.type === "home") {
      applyFilter(route.cat);
      return;
    }
    if (!current || reduceMotion) return render(route);

    const label = route.type === "post" ? (POSTS.find((p) => p.slug === route.slug) || {}).series || "" : "Archive";
    curtainLabel.textContent = label;
    curtain.className = "curtain";
    void curtain.offsetWidth;
    curtain.classList.add("is-in");
    await sleep(850);
    render(route);
    curtain.classList.replace("is-in", "is-out");
    await sleep(850);
    curtain.className = "curtain";
  }

  addEventListener("hashchange", navigate);

  /* ---------- 첫 로딩 ---------- */
  async function boot() {
    const loader = document.getElementById("loader");
    const count = document.getElementById("loaderCount");
    const start = performance.now();
    const duration = reduceMotion ? 0 : 1500;
    await new Promise((resolve) => {
      const tick = (t) => {
        const k = duration ? Math.min((t - start) / duration, 1) : 1;
        count.textContent = pad(Math.round(k * 100));
        k < 1 ? requestAnimationFrame(tick) : resolve();
      };
      requestAnimationFrame(tick);
    });
    await sleep(250);
    navigate();
    loader.classList.add("is-done");
    await sleep(1200);
    loader.remove();
  }
  boot();
})();
