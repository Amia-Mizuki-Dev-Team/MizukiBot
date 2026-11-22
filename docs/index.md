---
layout: home
title: Amia_晓山瑞希｜QQ 音游 Bot 与使用指南
description: Amia_晓山瑞希 QQ Bot 官方入口。了解 PJSK、舞萌 DX、中二节奏与群聊互动功能，查看接入流程、使用指令和服务公告。

hero:
  name: "Amia_晓山瑞希"
  text: "QQ 群里的音游助手"
  tagline: "PJSK、舞萌 DX、中二节奏与群聊工具。查询、管理和互动，都可以从这里开始。"
  actions:
    - theme: brand
      text: 查看接入指南
      link: /usage

features:
  - title: PJSK
    details: 查找歌曲、卡牌、榜单与账号相关信息，按功能文档了解指令和后端支持范围。
    link: /features/pjsk
  - title: 舞萌 DX
    details: 查看 B50、AP50、成绩与曲库信息，了解成绩同步和分析功能。
    link: /features/maimai
  - title: 中二节奏
    details: 获取 B30、歌曲与谱面查询入口，查看对应指令说明。
    link: /features/chunithm
  - title: 群聊与互动
    details: 从欢迎、群管理到互动工具，了解群聊日常使用的功能与权限。
    link: /features/tools
---

<section class="mzk-proof" aria-label="官方项目基本信息">
  <ul class="mzk-proof-list">
    <li><span class="mzk-proof-dot" aria-hidden="true"></span><strong>官方 QQ Bot</strong><span>3889004352</span></li>
    <li><span class="mzk-proof-dot" aria-hidden="true"></span><strong>维护团队</strong><span>Amia-Mizuki Dev Team</span></li>
    <li><span class="mzk-proof-dot" aria-hidden="true"></span><span>功能开放情况以文档与服务公告为准</span></li>
  </ul>
</section>

<HomeTagline />

<section class="mzk-landing" aria-labelledby="mzk-how-heading">
  <span class="mzk-kicker">快速开始</span>
  <h2 id="mzk-how-heading" class="mzk-heading-2">三步了解如何使用</h2>
  <p class="mzk-body-3">从添加机器人到发送第一条指令，接入流程及群聊权限都有明确说明。</p>
  <div class="mzk-steps">
    <article class="mzk-step">
      <span class="mzk-step-num" aria-hidden="true">01</span>
      <h3 class="mzk-title-2">添加 Bot</h3>
      <p class="mzk-body-3">由群主或有相应权限的管理员将官方 Bot <strong>3889004352</strong> 加入 QQ 群，具体步骤见 <a href="/usage">接入指南</a>。</p>
    </article>
    <article class="mzk-step">
      <span class="mzk-step-num" aria-hidden="true">02</span>
      <h3 class="mzk-title-2">检查群消息权限</h3>
      <p class="mzk-body-3">群主开启获取群内全部消息的权限。如需定时播报，再查看 <a href="/active-messaging">主动消息权限</a>。</p>
    </article>
    <article class="mzk-step">
      <span class="mzk-step-num" aria-hidden="true">03</span>
      <h3 class="mzk-title-2">尝试常用指令</h3>
      <p class="mzk-body-3">在群内发送 <code>帮助</code>、<code>个人信息</code> 或 <code>PJSK</code>，再从 <a href="/features/pjsk">功能文档</a> 继续探索。</p>
    </article>
  </div>
</section>

<section class="mzk-landing" aria-labelledby="mzk-faq-heading">
  <span class="mzk-kicker">常见问题</span>
  <h2 id="mzk-faq-heading" class="mzk-heading-2">使用前，你可能想知道</h2>
  <p class="mzk-body-3">这些问题覆盖接入、权限和功能边界。更详细的排查步骤见 <a href="/faq">完整 FAQ</a>。</p>
  <div class="mzk-faq-list">
    <details>
      <summary>如何把机器人加入 QQ 群？</summary>
      <p>查看 <a href="/usage">如何使用</a>。由群主或有相应权限的群管理员添加官方 QQ Bot，号码为 3889004352。</p>
    </details>
    <details>
      <summary>发送指令需要 @ 机器人吗？</summary>
      <p>多数指令可以直接发送文本，无需 @机器人。个别功能的触发方式不同，请以对应功能页为准。</p>
    </details>
    <details>
      <summary>为什么机器人没有回复？</summary>
      <p>先检查群消息权限、指令格式和服务公告，再根据 <a href="/faq">故障排查指南</a> 进一步定位。</p>
    </details>
    <details>
      <summary>成绩查询与同步都能直接使用吗？</summary>
      <p>并非所有相关组件都已在生产环境开放，部分能力需要绑定账号或依赖外部服务。请查看 <a href="/features/maimai">舞萌 DX 专项</a> 和 <a href="/features/pjsk">PJSK 专项</a>。</p>
    </details>
    <details>
      <summary>在哪里查看维护和更新？</summary>
      <p>到 <a href="/service-announcements">服务公告</a> 查看维护与迁移信息，或到 <a href="/features/bot_update">Bot 更新日志</a> 查看已记录的功能变更。</p>
    </details>
    <details>
      <summary>如何反馈故障或功能建议？</summary>
      <p>通过 <a href="/feedback">问题反馈</a> 提交复现步骤、触发指令和必要的错误信息。使用前可以阅读 <a href="/agreement">用户使用协议</a>。</p>
    </details>
  </div>
</section>

<HomeSponsorBanner />

<section class="mzk-landing" aria-labelledby="mzk-final-heading">
  <div class="mzk-final">
    <span class="mzk-kicker">从这里开始</span>
    <h2 id="mzk-final-heading" class="mzk-heading-3">找到你需要的功能，然后开始使用</h2>
    <p class="mzk-body-3">先了解 QQ 群接入与消息权限，再按游戏或功能分类查找指令。项目维护情况可以从服务公告和项目生态页面查询。</p>
    <a class="mzk-final-cta" href="/usage">查看接入指南</a>
    <nav class="mzk-legal" aria-label="相关文档">
      <a href="/projects/">项目生态</a>
      <a href="/service-announcements">服务公告</a>
      <a href="/agreement">用户使用协议</a>
      <a href="/disclaimer">免责声明</a>
    </nav>
  </div>
</section>
