<template>
  <section class="home-sponsor-wrap" aria-labelledby="home-sponsor-title">
    <div class="home-sponsor-banner">
      <div class="home-sponsor-copy">
        <h2 id="home-sponsor-title">我们需要您的帮助</h2>
        <p>
          运营 Amia_晓山瑞希及相关公益服务，需要持续投入服务器、接口与维护成本。
          所有赞助将优先用于服务运行与项目维护。
        </p>
      </div>

      <a
        class="home-sponsor-button"
        href="https://ifdian.net/a/wrdzgzs"
        target="_blank"
        rel="noopener noreferrer"
      >
        赞助我们
        <span aria-hidden="true">↗</span>
      </a>

      <div class="home-sponsor-links">
        <a href="/sponsor">了解赞助说明</a>
        <span aria-hidden="true">·</span>
        <a href="/sponsor_list">查看赞助者名单</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-sponsor-wrap {
  box-sizing: border-box;
  width: 100%;
  padding: 18px 24px 0;
}

.home-sponsor-banner {
  box-sizing: border-box;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 176px;
  grid-template-areas:
    "copy button"
    "links button";
  column-gap: 24px;
  row-gap: 8px;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
  padding: 18px 22px;
  border: 1px solid rgba(233, 126, 179, 0.3);
  border-radius: 14px;
  background:
    radial-gradient(circle at 95% 0%, rgba(138, 102, 194, 0.12), transparent 38%),
    linear-gradient(135deg, rgba(233, 126, 179, 0.13), rgba(233, 126, 179, 0.06));
  box-shadow: 0 8px 24px rgba(88, 53, 76, 0.05);
}

.home-sponsor-copy {
  grid-area: copy;
  min-width: 0;
}

.home-sponsor-copy h2 {
  margin: 0 0 6px;
  border: 0;
  color: var(--vp-c-brand-1);
  font-size: 19px;
  font-weight: 700;
  line-height: 1.35;
}

.home-sponsor-copy p {
  max-width: 700px;
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.65;
}

.home-sponsor-button {
  grid-area: button;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 176px;
  min-height: 42px;
  border-radius: 10px;
  background: var(--vp-c-brand-1);
  box-shadow: 0 5px 14px rgba(233, 126, 179, 0.22);
  color: #fff !important;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none !important;
  transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
}

.home-sponsor-button:hover {
  background: var(--vp-c-brand-2);
  box-shadow: 0 7px 18px rgba(233, 126, 179, 0.3);
  transform: translateY(-1px);
}

.home-sponsor-button:focus-visible {
  outline: 3px solid var(--vp-c-brand-soft);
  outline-offset: 3px;
}

.home-sponsor-links {
  grid-area: links;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  margin-top: 0;
  color: var(--vp-c-text-3);
  font-size: 12px;
}

.home-sponsor-links a {
  color: var(--vp-c-text-2);
  text-decoration: none;
}

.home-sponsor-links a:hover {
  color: var(--vp-c-brand-1);
}

:global(.dark) .home-sponsor-banner {
  border-color: rgba(233, 126, 179, 0.24);
  background:
    radial-gradient(circle at 95% 0%, rgba(138, 102, 194, 0.18), transparent 38%),
    linear-gradient(135deg, rgba(233, 126, 179, 0.12), rgba(255, 255, 255, 0.025));
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
}

@media (max-width: 640px) {
  .home-sponsor-wrap {
    padding: 16px 16px 0;
  }

  .home-sponsor-banner {
    display: block;
    max-width: none;
    padding: 22px 18px 18px;
    border-radius: 14px;
  }

  .home-sponsor-copy h2 {
    margin-bottom: 10px;
    font-size: 20px;
  }

  .home-sponsor-copy p {
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 1.75;
  }

  .home-sponsor-button {
    width: 100%;
    min-height: 48px;
    font-size: 15px;
  }

  .home-sponsor-links {
    justify-content: center;
    flex-wrap: wrap;
    row-gap: 4px;
    margin-top: 14px;
    font-size: 13px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .home-sponsor-button {
    transition: none;
  }
}
</style>
