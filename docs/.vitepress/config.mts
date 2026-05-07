import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Mizuki Bot 帮助文档",
  description: "专为 PJSK 与 舞萌 DX 玩家打造的 Bot 助手",
  lang: 'zh-CN',
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', href: '/Picture/avatar.jpg' }],
    ['meta', { name: 'keywords', content: 'Mizuki Bot, PJSK, Project Sekai, 舞萌DX, maimai, 中二节奏, 音游Bot, 帮助文档' }],
    ['meta', { name: 'author', content: 'HX-Wrdzgzs' }],
    ['meta', { property: 'og:title', content: 'Mizuki Bot 帮助文档' }],
    ['meta', { property: 'og:description', content: '专为 PJSK 与 舞萌 DX 玩家打造的一站式 Bot 助手' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://help.mizuki.top/' }],
    ['meta', { property: 'og:image', content: 'https://help.mizuki.top/Picture/banner.jpg' }], 
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Mizuki Bot 帮助文档' }],
    ['meta', { name: 'twitter:description', content: '专为 PJSK 与 舞萌 DX 玩家打造的一站式 Bot 助手' }],
    ['meta', { name: 'twitter:image', content: 'https://help.mizuki.top/Picture/banner.jpg' }]
  ],

  sitemap: {
    hostname: 'https://help.mizuki.top'
  },

  themeConfig: {
    logo: '/Picture/logo.gif',
    siteTitle: 'Mizuki Bot 帮助文档',

    // 顶部导航栏 (完全与侧边栏对齐)
    nav: [
      { text: '首页', link: '/' },
      {
        text: '入门指南',
        items: [
          { text: '📖 如何使用', link: '/usage' },
          { text: '🔗 落雪绑定', link: '/bind' },
          { text: '📝 问题反馈', link: '/feedback' }
        ]
      },
      {
        text: '📢 更新与公告',
        items: [
          { text: '🟩 MC 服务器更新', link: '/features/mc_update' },
          { text: '🤖 Bot 更新日志', link: '/features/bot_update' }
        ]
      },
      {
        text: '功能文档',
        items: [
          { text: 'PJSK 相关功能', link: '/features/pjsk' },
          { text: '舞萌 DX 专项', link: '/features/maimai' },
          { text: '中二节奏 (Chuni)', link: '/features/chunithm' },
          { text: '表情制作系统', link: '/features/meme' },
          { text: '通用工具与娱乐', link: '/features/tools' }
        ]
      },
      {
        text: '关于与规范',
        items: [
          { text: '👥 贡献榜名单', link: '/contribution' },
          { text: '📋 群规与公告', link: '/rules' },
          { text: '💡 提问的智慧', link: '/asking' },
          { text: '⚖️ 免责声明', link: '/disclaimer' },
          { text: '📜 用户使用协议', link: '/agreement' },
          { text: '❤️ 赞助我们', link: '/sponsor' },
          { text: '💎 赞助榜名单', link: '/sponsor_list' }
        ]
      }
    ],

    // 左侧边栏
    sidebar: {
      '/': [
        {
          text: '入门指南',
          items: [
            { text: '📖 如何使用', link: '/usage' },
            { text: '🔗 落雪绑定', link: '/bind' },
            { text: '📝 问题反馈', link: '/feedback' }
          ]
        },
        {
          text: '📢 更新与公告',
          items: [
            { text: '🟩 MC 服务器更新', link: '/features/mc_update' },
            { text: '🤖 Bot 更新日志', link: '/features/bot_update' }
          ]
        },
        {
          text: '功能文档',
          items: [
            { text: 'PJSK 相关功能', link: '/features/pjsk' },
            { text: '舞萌 DX 专项', link: '/features/maimai' },
            { text: '中二节奏 (Chuni)', link: '/features/chunithm' },
            { text: '表情制作系统', link: '/features/meme' },
            { text: '通用工具与娱乐', link: '/features/tools' }
          ]
        },
        {
          text: '关于与规范',
          items: [
            { text: '👥 贡献榜名单', link: '/contribution' },
            { text: '📋 群规与公告', link: '/rules' },
            { text: '💡 提问的智慧', link: '/asking' },
            { text: '⚖️ 免责声明', link: '/disclaimer' },
            { text: '📜 用户使用协议', link: '/agreement' },
            { text: '❤️ 赞助我们', link: '/sponsor' },
            { text: '💎 赞助榜名单', link: '/sponsor_list' }
          ]
        }
      ]
    },

    footer: {
      message: 'Created with ♿ by HX-Wrdzgzs',
      copyright: 'Powered by Akaboshi Lab'
    },
    
    search: {
      provider: 'local'
    }
  }
})
