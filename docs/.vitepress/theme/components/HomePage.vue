<template>
  <main class="amia-home" aria-label="Amia_晓山瑞希帮助文档首页内容">
    <section class="amia-home-section amia-home-section--compact" aria-labelledby="primary-entry-title">
      <div class="amia-section-heading">
        <div>
          <p class="amia-section-kicker">快速入口</p>
          <h2 id="primary-entry-title">先从需要解决的问题开始</h2>
          <p>首页只保留四个一级入口，具体功能和历史记录放在对应页面中。</p>
        </div>
      </div>

      <div class="amia-entry-grid">
        <a v-for="entry in primaryEntries" :key="entry.title" :href="entry.link" class="amia-entry-card">
          <span class="amia-entry-icon" aria-hidden="true">{{ entry.icon }}</span>
          <h3>{{ entry.title }}</h3>
          <p>{{ entry.description }}</p>
          <span class="amia-entry-arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </section>

    <section class="amia-home-section" aria-labelledby="popular-docs-title">
      <div class="amia-section-heading">
        <div>
          <p class="amia-section-kicker">常用文档</p>
          <h2 id="popular-docs-title">直接前往常用功能</h2>
          <p>减少层层展开菜单的步骤，常用页面可以从这里直接进入。</p>
        </div>
      </div>

      <div class="amia-popular-grid">
        <a v-for="doc in popularDocs" :key="doc.title" :href="doc.link" class="amia-popular-link">
          <span>
            <strong>{{ doc.title }}</strong>
            <span>{{ doc.description }}</span>
          </span>
          <b aria-hidden="true">→</b>
        </a>
      </div>
    </section>

    <section class="amia-home-section" aria-labelledby="recent-updates-title">
      <div class="amia-section-heading">
        <div>
          <p class="amia-section-kicker">最近更新</p>
          <h2 id="recent-updates-title">近期文档与服务变更</h2>
          <p>首页仅保留摘要，完整事实、指令和历史记录以更新日志及服务公告为准。</p>
        </div>
        <a class="amia-section-more" href="/features/bot_update">查看全部更新 →</a>
      </div>

      <div class="amia-update-list">
        <a v-for="update in recentUpdates" :key="`${update.date}-${update.title}`" :href="update.link" class="amia-update-item">
          <time class="amia-update-date" :datetime="update.date">{{ update.date }}</time>
          <StatusBadge class="amia-update-tag" :status="update.status">{{ update.category }}</StatusBadge>
          <span class="amia-update-copy">
            <strong>{{ update.title }}</strong>
            <span>{{ update.description }}</span>
          </span>
          <span class="amia-update-arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </section>

    <section class="amia-home-section" aria-labelledby="ecosystem-title">
      <div class="amia-section-heading">
        <div>
          <p class="amia-section-kicker">项目生态</p>
          <h2 id="ecosystem-title">按职责理解 Amia 项目</h2>
          <p>不在首页平铺全部仓库，只展示核心分类和代表性能力。</p>
        </div>
        <a class="amia-section-more" href="/projects/">查看项目总览 →</a>
      </div>

      <div class="amia-ecosystem-grid">
        <article v-for="project in ecosystem" :key="project.title" class="amia-ecosystem-card">
          <StatusBadge :status="project.status">{{ project.label }}</StatusBadge>
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <a :href="project.link">查看相关项目 →</a>
        </article>
      </div>
    </section>

    <section class="amia-home-section" aria-label="赞助支持">
      <SponsorCompact />
    </section>
  </main>
</template>

<script setup lang="ts">
import StatusBadge from './StatusBadge.vue'
import SponsorCompact from './SponsorCompact.vue'

const primaryEntries = [
  {
    icon: '01',
    title: '开始使用',
    description: '了解邀请、权限、身份绑定和常用指令的基本流程。',
    link: '/usage'
  },
  {
    icon: '02',
    title: '音游功能',
    description: '查找 PJSK、舞萌 DX 与中二节奏相关功能。',
    link: '/features/pjsk'
  },
  {
    icon: '03',
    title: '群聊与经济',
    description: '查看经济系统、表情包、欢迎提示和群聊工具。',
    link: '/features/economy'
  },
  {
    icon: '04',
    title: '更新与服务',
    description: '核对 Bot 更新、服务状态、维护计划与历史公告。',
    link: '/service-announcements'
  }
]

const popularDocs = [
  { title: 'PJSK 专项功能', description: '查分、查榜、歌曲、卡牌与活动功能', link: '/features/pjsk' },
  { title: '舞萌 DX B50', description: '成绩查询、分析与同步说明', link: '/features/maimai' },
  { title: '经济系统入门', description: '签到、任务、转账、商城与互动玩法', link: '/features/economy' },
  { title: '群聊工具', description: '表情包、公告、欢迎与其他通用能力', link: '/features/tools' },
  { title: '问题反馈', description: '提交可复现故障、日志与功能建议', link: '/feedback' },
  { title: '项目生态', description: '插件、核心组件、网关与客户端', link: '/projects/' }
]

const recentUpdates: Array<{
  date: string
  category: string
  title: string
  description: string
  link: string
  status: 'stable' | 'online' | 'beta' | 'info' | 'experimental' | 'maintenance' | 'deprecated' | 'offline'
}> = [
  {
    date: '2026-07-29',
    category: '文档整理',
    title: '补全 Bot 更新日志与服务公告历史',
    description: '恢复具体指令、接口、历史规则和 HongXing 服务公告，并重新划分页面边界。',
    link: '/features/bot_update',
    status: 'stable'
  },
  {
    date: '2026-07-29',
    category: '服务公告',
    title: 'HongXing 服务、产品与机房记录归档',
    description: '产品生命周期、系统更新、机房调整和团队维护信息统一迁移至服务公告。',
    link: '/service-announcements',
    status: 'info'
  },
  {
    date: '2026-07-23',
    category: '项目生态',
    title: '项目状态与文档职责统一',
    description: '整理插件、客户端、网关和基础组件的维护状态及文档入口。',
    link: '/projects/',
    status: 'beta'
  }
]

const ecosystem: Array<{
  title: string
  description: string
  link: string
  label: string
  status: 'stable' | 'online' | 'beta' | 'info' | 'experimental' | 'maintenance' | 'deprecated' | 'offline'
}> = [
  {
    title: '核心与治理',
    description: '统一身份、插件加载、审计和权限治理等基础能力。',
    link: '/projects/',
    label: '持续维护',
    status: 'stable'
  },
  {
    title: '音游能力',
    description: 'PJSK、舞萌 DX 和成绩同步相关插件与客户端。',
    link: '/features/maimai',
    label: '持续开发',
    status: 'beta'
  },
  {
    title: '群聊能力',
    description: '经济系统、群管理、欢迎提示、表情包和活跃分析。',
    link: '/features/tools',
    label: '持续维护',
    status: 'stable'
  },
  {
    title: '网关与客户端',
    description: 'QQ 协议适配、消息网关、同步工具和移动端应用。',
    link: '/projects/gensokyo-newqq',
    label: '兼容性维护',
    status: 'info'
  }
]
</script>
