import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Mizuki Bot 帮助文档",
  description: "Mizuki Bot 的使用文档。支持 PJSK、舞萌 DX、中二节奏查分查榜，还有表情包、经济系统等功能。",
  lang: 'zh-CN',
  
  // 关键：开启 VitePress 自动生成 sitemap.xml 功能
  sitemap: {
    hostname: 'https://help.mizuki.top'
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', href: '/Picture/avatar.jpg' }],
    ['meta', { name: 'keywords', content: 'Mizuki Bot, PJSK, Project Sekai, 舞萌DX, maimai, 中二节奏, 音游Bot, 帮助文档' }],
    ['meta', { name: 'author', content: 'HX-Wrdzgzs' }],
    // 移除了写死的 title 和 description，交由 VitePress 动态接管
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://help.mizuki.top/' }],
    ['meta', { property: 'og:image', content: 'https://help.mizuki.top/Picture/banner.jpg' }], 
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: 'https://help.mizuki.top/Picture/banner.jpg' }]
  ],

  themeConfig: {
    logo: '/Picture/logo.gif',
    siteTitle: 'Mizuki Bot 帮助文档',

    nav: [
      { text: '首页', link: '/' },
      {
        text: '入门指南',
        items: [
          { text: '如何使用', link: '/usage' },
          { text: '落雪绑定', link: '/bind' },
          { text: '问题反馈', link: '/feedback' }
        ]
      },
      {
        text: '功能文档',
        items: [
          { text: 'PJSK 相关功能', link: '/features/pjsk' },
          { text: '舞萌 DX 专项', link: '/features/maimai' },
          { text: '中二节奏 (Chuni)', link: '/features/chunithm' },
          { text: '通用工具与娱乐', link: '/features/tools' }
          { text: 'Minecraft 服务器', link: '/features/minecraft' }
        ]
      },
      {
        text: '关于与规范',
        items: [
          { text: '开发团队', link: '/contribution' },
          { text: '免责声明', link: '/disclaimer' },
          { text: '用户使用协议', link: '/agreement' },
          { text: '群规与公告', link: '/rules' },
          { text: '提问的智慧', link: '/asking' },
          { text: '赞助我们', link: '/sponsor' },
          { text: '赞助榜名单', link: '/sponsor_list' }
        ]
      },
      {
        text: '更新与公告',
        items: [
          { text: 'MC 服务器更新', link: '/features/mc_update' },
          { text: 'Bot 更新日志', link: '/features/bot_update' }
        ]
      }
    ],

    sidebar: {
      '/': [
        {
          text: '入门指南',
          items: [
            { text: '如何使用', link: '/usage' },
            { text: '落雪绑定', link: '/bind' },
            { text: '问题反馈', link: '/feedback' }
          ]
        },
        {
          text: '功能文档',
          items: [
            { text: 'PJSK 相关功能', link: '/features/pjsk' },
            { text: '舞萌 DX 专项', link: '/features/maimai' },
            { text: '中二节奏 (Chuni)', link: '/features/chunithm' },
            { text: '通用工具与娱乐', link: '/features/tools' }
            { text: 'Minecraft 服务器', link: '/features/minecraft' }
          ]
        },
        {
          text: '关于与规范',
          items: [
            { text: '开发团队', link: '/contribution' },
            { text: '免责声明', link: '/disclaimer' },
            { text: '用户使用协议', link: '/agreement' },
            { text: '群规与公告', link: '/rules' },
            { text: '提问的智慧', link: '/asking' },
            { text: '赞助我们', link: '/sponsor' },
            { text: '赞助榜名单', link: '/sponsor_list' }
          ]
        },
        {
          text: '更新与公告',
          items: [
            { text: 'MC 服务器更新', link: '/features/mc_update' },
            { text: 'Bot 更新日志', link: '/features/bot_update' }
          ]
        }
      ]
    },

    search: {
      provider: 'local'
    }
  }
})
