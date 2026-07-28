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
  padding: 24px 24px 0;
}

.home-sponsor-banner {
  box-sizing: border-box;
  max-width: 1152px;
  margin: 0 auto;
  padding: 26px 28px 22px;
  border: 1px solid rgba(233, 126, 179, 0.3);
  border-radius: 18px;
  background:
    radial-gradient(circle at 95% 0%, rgba(138, 102, 194, 0.12), transparent 38%),
    linear-gradient(135deg, rgba(233, 126, 179, 0.13), rgba(233, 126, 179, 0.06));
  box-shadow: 0 10px 30px rgba(88, 53, 76, 0.06);
}

.home-sponsor-copy h2 {
  margin: 0 0 10px;
  border: 0;
  color: var(--vp-c-brand-1);
  font-size: 22px;
  font-weight: 700;
  line-height: 1.35;
}

.home-sponsor-copy p {
  max-width: 820px;
  margin: 0 0 20px;
  color: var(--vp-c-text-2);
  font-size: 15px;
  line-height: 1.8;
}

.home-sponsor-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  min-height: 50px;
  border-radius: 12px;
  background: var(--vp-c-brand-1);
  box-shadow: 0 6px 18px rgba(233, 126, 179, 0.25);
  color: #fff !important;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none !important;
  transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
}

.home-sponsor-button:hover {
  background: var(--vp-c-brand-2);
  box-shadow: 0 9px 24px rgba(233, 126, 179, 0.32);
  transform: translateY(-1px);
}

.home-sponsor-button:focus-visible {
  outline: 3px solid var(--vp-c-brand-soft);
  outline-offset: 3px;
}

.home-sponsor-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 14px;
  color: var(--vp-c-text-3);
  font-size: 13px;
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
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

@media (max-width: 640px) {
  .home-sponsor-wrap {
    padding: 16px 16px 0;
  }

  .home-sponsor-banner {
    padding: 22px 18px 18px;
    border-radius: 14px;
  }

  .home-sponsor-copy h2 {
    font-size: 20px;
  }

  .home-sponsor-copy p {
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 1.75;
  }

  .home-sponsor-button {
    min-height: 48px;
    font-size: 15px;
  }

  .home-sponsor-links {
    flex-wrap: wrap;
    row-gap: 4px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .home-sponsor-button {
    transition: none;
  }
}
</style>
