import { defineConfig } from 'vitepress'

const siteUrl = 'https://help.mizuki.top'
const siteName = 'Mizuki Bot 帮助文档'
const siteDescription = 'Mizuki Bot 官方帮助文档，提供 PJSK、舞萌 DX、中二节奏、经济系统、表情包、群聊公告、欢迎提示、活动统计、Minecraft 服务器和关联项目说明。'
const siteImage = `${siteUrl}/Picture/banner.jpg`
const siteLogo = `${siteUrl}/Picture/logo.gif`

const mainSections = [
  { name: '如何使用', url: `${siteUrl}/usage` },
  { name: 'PJSK 专项功能', url: `${siteUrl}/features/pjsk` },
  { name: '舞萌 DX 专项', url: `${siteUrl}/features/maimai` },
  { name: '中二节奏专项', url: `${siteUrl}/features/chunithm` },
  { name: 'Mizuki 25时经济系统', url: `${siteUrl}/features/economy` },
  { name: '通用工具与群聊能力', url: `${siteUrl}/features/tools` },
  { name: '关联项目', url: `${siteUrl}/projects/` }
]

const websiteStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: siteName,
  alternateName: ['Mizuki Bot', 'Mizuki Bot Docs', 'Mizuki 帮助文档'],
  url: `${siteUrl}/`,
  inLanguage: 'zh-CN',
  description: siteDescription,
  image: {
    '@id': `${siteUrl}/#primaryimage`
  },
  publisher: {
    '@id': `${siteUrl}/#organization`
  }
}

const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: 'Amia-Mizuki Dev Team',
  alternateName: ['Mizuki Bot', 'HongXing Dev Team'],
  url: `${siteUrl}/`,
  logo: siteLogo,
  image: siteImage,
  sameAs: [
    'https://github.com/Amia-Mizuki-Dev-Team/MizukiBot'
  ]
}

const imageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ImageObject',
  '@id': `${siteUrl}/#primaryimage`,
  url: siteImage,
  contentUrl: siteImage,
  width: 1200,
  height: 630,
  caption: 'Mizuki Bot 帮助文档',
  representativeOfPage: true
}

const homeItemListStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${siteUrl}/#main-sections`,
  name: 'Mizuki Bot 帮助文档主要入口',
  itemListElement: mainSections.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    url: item.url
  }))
}

const nav = [
  { text: '首页', link: '/' },
  {
    text: '入门指南',
    items: [
      { text: '如何使用', link: '/usage' },
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
      { text: 'Amia Sync Android', link: '/projects/mizuki-sync' },
      { text: 'HX-Pjsk-Gateway', link: '/projects/hx-pjsk-gateway' },
      { text: 'Amia Economy', link: '/features/economy' },
      { text: 'Gensokyo NewQQ', link: '/projects/gensokyo-newqq' },
      { text: 'LXNS B50', link: '/projects/lxns-b50' }
    ]
  }
]

const sidebar = [
  {
    text: '入门指南',
    items: [
      { text: '如何使用', link: '/usage' },
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
      { text: 'Amia Sync Android', link: '/projects/mizuki-sync' },
      { text: 'HX-Pjsk-Gateway', link: '/projects/hx-pjsk-gateway' },
      { text: 'Amia Economy', link: '/features/economy' },
      { text: 'Gensokyo NewQQ', link: '/projects/gensokyo-newqq' },
      { text: 'LXNS B50', link: '/projects/lxns-b50' }
    ]
  }
]

function normalizeUrl(relativePath: string) {
  const normalizedPath = relativePath
    .replace(/(^|\/)index\.md$/, '$1')
    .replace(/\.md$/, '')

  const path = normalizedPath === '' ? '/' : `/${normalizedPath}`
  return new URL(path, siteUrl).href
}

export default defineConfig({
  title: siteName,
  titleTemplate: ':title | Mizuki Bot 帮助文档',
  description: siteDescription,
  lang: 'zh-CN',
  cleanUrls: true,
  sitemap: {
    hostname: siteUrl
  },

  transformHead({ pageData }) {
    const canonicalUrl = normalizeUrl(pageData.relativePath)
    const pageTitle = pageData.title || siteName
    const pageDescription = pageData.description || siteDescription
    const breadcrumbs = canonicalUrl === `${siteUrl}/`
      ? []
      : [
          {
            '@type': 'ListItem',
            position: 1,
            name: siteName,
            item: `${siteUrl}/`
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: pageTitle,
            item: canonicalUrl
          }
        ]

    const webPageStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: pageTitle,
      description: pageDescription,
      inLanguage: 'zh-CN',
      isPartOf: {
        '@id': `${siteUrl}/#website`
      },
      primaryImageOfPage: {
        '@id': `${siteUrl}/#primaryimage`
      }
    }

    return [
      ['link', { rel: 'canonical', href: canonicalUrl }],
      ['link', { rel: 'image_src', href: siteImage }],
      ['meta', { property: 'og:title', content: pageTitle }],
      ['meta', { property: 'og:description', content: pageDescription }],
      ['meta', { property: 'og:url', content: canonicalUrl }],
      ['meta', { property: 'og:image', content: siteImage }],
      ['meta', { property: 'og:image:secure_url', content: siteImage }],
      ['meta', { property: 'og:image:type', content: 'image/jpeg' }],
      ['meta', { property: 'og:image:width', content: '1200' }],
      ['meta', { property: 'og:image:height', content: '630' }],
      ['meta', { property: 'og:image:alt', content: 'Mizuki Bot 帮助文档预览图' }],
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:title', content: pageTitle }],
      ['meta', { name: 'twitter:description', content: pageDescription }],
      ['meta', { name: 'twitter:image', content: siteImage }],
      ['meta', { name: 'twitter:image:alt', content: 'Mizuki Bot 帮助文档预览图' }],
      ['meta', { itemprop: 'image', content: siteImage }],
      ['meta', { name: 'thumbnail', content: siteImage }],
      ['script', { type: 'application/ld+json' }, JSON.stringify(webPageStructuredData)],
      ...(breadcrumbs.length
        ? [[
            'script',
            { type: 'application/ld+json' },
            JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: breadcrumbs
            })
          ] as const]
        : [])
    ]
  },

  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/Picture/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', href: '/Picture/logo.gif' }],
    ['meta', { name: 'robots', content: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1' }],
    ['meta', { name: 'googlebot', content: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1' }],
    ['meta', { name: 'baiduspider', content: 'index,follow,max-snippet:-1,max-image-preview:large' }],
    ['meta', { name: 'theme-color', content: '#E97EB3' }],
    ['meta', { name: 'application-name', content: siteName }],
    ['meta', { name: 'apple-mobile-web-app-title', content: siteName }],
    ['meta', { name: 'keywords', content: 'Mizuki Bot, PJSK, Project Sekai, 舞萌DX, maimai, 中二节奏, 音游Bot, QQ Bot, 经济系统, 表情包, 群聊公告, 群活统计, Minecraft, 帮助文档' }],
    ['meta', { name: 'author', content: 'Amia-Mizuki Dev Team' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: siteName }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['script', { type: 'application/ld+json' }, JSON.stringify(websiteStructuredData)],
    ['script', { type: 'application/ld+json' }, JSON.stringify(organizationStructuredData)],
    ['script', { type: 'application/ld+json' }, JSON.stringify(imageStructuredData)],
    ['script', { type: 'application/ld+json' }, JSON.stringify(homeItemListStructuredData)]
  ],

  themeConfig: {
    logo: '/Picture/logo.gif',
    siteTitle: siteName,
    nav,
    sidebar: {
      '/': sidebar
    },
    search: {
      provider: 'local'
    }
  }
})
