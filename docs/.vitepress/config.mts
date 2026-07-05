import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Mizuki Bot 帮助文档",
  description: "Mizuki Bot 的使用文档。支持 PJSK、舞萌 DX、中二节奏查分查榜，还有表情包、经济系统等功能。",
  lang: 'zh-CN',
  
  sitemap: {
    hostname: 'https://help.mizuki.top'
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', href: '/Picture/avatar.jpg' }],
    ['meta', { name: 'keywords', content: 'Mizuki Bot, PJSK, Project Sekai, 舞萌DX, maimai, 中二节奏, 音游Bot, 帮助文档' }],
    ['meta', { name: 'author', content: 'HX-Wrdzgzs' }],
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
          { text: 'QQ 官方 Bot', link: '/usage' },
          { text: '问题反馈', link: '/feedback' }
        ]
      },
      {
        text: '功能文档',
        items: [
          { text: 'PJSK 相关功能', link: '/features/pjsk' },
          { text: '舞萌 DX 专项', link: '/features/maimai' },
          { text: '中二节奏 (Chuni)', link: '/features/chunithm' },
          { text: '经济系统', link: '/features/economy' },
          { text: '通用工具与娱乐', link: '/features/tools' },
          { text: 'Minecraft 服务器', link: '/features/minecraft' }
        ]
      },
      {
        text: '关于与规范',
        items: [
          { text: '开发团队', link: '/contribution' },
          { text: '开发者招募', link: '/recruiting' },
          { text: '免责声明', link: '/disclaimer' },
          { text: '用户使用协议', link: '/agreement' },
          { text: '群规与公告', link: '/rules' },
          { text: '提问的智慧', link: '/asking' },
          { text: '赞助我们', link: '/sponsor' }
        ]
      },
      {
        text: '更新与公告',
        items: [
          { text: 'MC 服务器更新', link: '/features/mc_update' },
          { text: 'Bot 更新日志', link: '/features/bot_update' }
        ]
      },
      {
        text: '关联项目',
        items: [
          { text: '项目总览', link: '/projects/' },
          { text: 'Mizuki Sync Android', link: '/projects/mizuki-sync' },
          { text: 'HX-Pjsk-Gateway', link: '/projects/hx-pjsk-gateway' },
          { text: 'Mizuki Economy', link: '/features/economy' },
          { text: 'QBind 绑定插件', link: '/projects/mizuki-plugin-qbind' },
          { text: 'Gensokyo NewQQ', link: '/projects/gensokyo-newqq' },
          { text: 'LXNS B50', link: '/projects/lxns-b50' },
          { text: 'Meme 表情插件', link: '/projects/mizuki-plugin-meme' },
          { text: 'PJSK 车队广播', link: '/projects/mizuki-plugin-pjskcarteam' },
          { text: 'HAM 无线电日志', link: '/projects/mizuki-plugin-homo-qso' }
        ]
      }
    ],

    sidebar: {
      '/': [
        {
          text: '入门指南',
          items: [
            { text: 'QQ 官方 Bot', link: '/usage' },
            { text: '问题反馈', link: '/feedback' }
          ]
        },
        {
          text: '功能文档',
          items: [
            { text: 'PJSK 相关功能', link: '/features/pjsk' },
            { text: '舞萌 DX 专项', link: '/features/maimai' },
            { text: '中二节奏 (Chuni)', link: '/features/chunithm' },
            { text: '经济系统', link: '/features/economy' },
            { text: '通用工具与娱乐', link: '/features/tools' },
            { text: 'Minecraft 服务器', link: '/features/minecraft' }
          ]
        },
        {
          text: '关于与规范',
          items: [
            { text: '开发团队', link: '/contribution' },
            { text: '开发者招募', link: '/recruiting' },
            { text: '免责声明', link: '/disclaimer' },
            { text: '用户使用协议', link: '/agreement' },
            { text: '群规与公告', link: '/rules' },
            { text: '提问的智慧', link: '/asking' },
            { text: '赞助我们', link: '/sponsor' }
          ]
        },
        {
          text: '更新与公告',
          items: [
            { text: 'MC 服务器更新', link: '/features/mc_update' },
            { text: 'Bot 更新日志', link: '/features/bot_update' }
          ]
        },
        {
          text: '关联项目',
          items: [
            { text: '项目总览', link: '/projects/' },
            { text: 'Mizuki Sync Android', link: '/projects/mizuki-sync' },
            { text: 'HX-Pjsk-Gateway', link: '/projects/hx-pjsk-gateway' },
            { text: 'Mizuki Economy', link: '/features/economy' },
            { text: 'QBind 绑定插件', link: '/projects/mizuki-plugin-qbind' },
            { text: 'Gensokyo NewQQ', link: '/projects/gensokyo-newqq' },
            { text: 'LXNS B50', link: '/projects/lxns-b50' },
            { text: 'Meme 表情插件', link: '/projects/mizuki-plugin-meme' },
            { text: 'PJSK 车队广播', link: '/projects/mizuki-plugin-pjskcarteam' },
            { text: 'HAM 无线电日志', link: '/projects/mizuki-plugin-homo-qso' }
          ]
        }
      ]
    },

    search: {
      provider: 'local'
    }
  }
})