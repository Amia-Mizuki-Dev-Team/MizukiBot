import { defineConfig } from 'vitepress'

const siteUrl = 'https://help.mizuki.top'
const siteName = 'Amia_晓山瑞希帮助文档'
const siteDescription = 'Amia_晓山瑞希官方帮助文档，提供 PJSK、舞萌 DX、中二节奏、经济系统、群聊工具、服务公告和项目生态说明。'
const siteImage = `${siteUrl}/Picture/banner.jpg`
const siteLogo = `${siteUrl}/Picture/logo.gif`

const mainSections = [
  { name: '开始使用', url: `${siteUrl}/usage` },
  { name: 'PJSK 专项功能', url: `${siteUrl}/features/pjsk` },
  { name: '舞萌 DX 专项', url: `${siteUrl}/features/maimai` },
  { name: '中二节奏专项', url: `${siteUrl}/features/chunithm` },
  { name: 'Amia 25时经济系统', url: `${siteUrl}/features/economy` },
  { name: '服务状态与公告', url: `${siteUrl}/service-announcements` },
  { name: '项目生态', url: `${siteUrl}/projects/` }
]

const relatedProjects = [
  { text: '项目总览', link: '/projects/' },
  { text: 'Amia-plugin-maimaidx', link: '/projects/amia-plugin-maimaidx' },
  { text: 'Amia Sync Android', link: '/projects/mizuki-sync' },
  { text: 'HX-Pjsk-Gateway', link: '/projects/hx-pjsk-gateway' },
  { text: 'Gensokyo NewQQ', link: '/projects/gensokyo-newqq' }
]

const guideSidebar = [
  {
    text: '开始使用',
    items: [
      { text: '如何使用', link: '/usage' },
      { text: '问题反馈', link: '/feedback' },
      { text: '提问的智慧', link: '/asking' }
    ]
  },
  {
    text: '下一步',
    items: [
      { text: 'PJSK 专项功能', link: '/features/pjsk' },
      { text: '舞萌 DX 专项', link: '/features/maimai' },
      { text: '经济系统', link: '/features/economy' }
    ]
  }
]

const featureSidebar = [
  {
    text: '音游功能',
    items: [
      { text: 'PJSK 相关功能', link: '/features/pjsk' },
      { text: '舞萌 DX 专项', link: '/features/maimai' },
      { text: '中二节奏', link: '/features/chunithm' }
    ]
  },
  {
    text: '群聊与其他功能',
    items: [
      { text: '经济系统', link: '/features/economy' },
      { text: '通用工具与娱乐', link: '/features/tools' },
      { text: 'Minecraft 服务器', link: '/features/minecraft' }
    ]
  },
  {
    text: '更新记录',
    items: [
      { text: 'Bot 更新日志', link: '/features/bot_update' },
      { text: 'Minecraft 更新', link: '/features/mc_update' },
      { text: '服务状态与公告', link: '/service-announcements' }
    ]
  }
]

const updateSidebar = [
  {
    text: '更新与公告',
    items: [
      { text: '服务状态与公告', link: '/service-announcements' },
      { text: 'Bot 更新日志', link: '/features/bot_update' },
      { text: 'Minecraft 更新', link: '/features/mc_update' }
    ]
  },
  {
    text: '相关入口',
    items: [
      { text: '问题反馈', link: '/feedback' },
      { text: '项目生态', link: '/projects/' }
    ]
  }
]

const projectSidebar = [
  {
    text: '项目生态',
    items: relatedProjects
  },
  {
    text: '参与项目',
    items: [
      { text: '开发者参与', link: '/recruiting' },
      { text: '开发团队', link: '/contribution' }
    ]
  }
]

const aboutSidebar = [
  {
    text: '团队与参与',
    items: [
      { text: '开发团队', link: '/contribution' },
      { text: '开发者参与', link: '/recruiting' },
      { text: '赞助支持', link: '/sponsor' }
    ]
  },
  {
    text: '规范',
    items: [
      { text: '用户使用协议', link: '/agreement' },
      { text: '免责声明', link: '/disclaimer' },
      { text: '群规', link: '/rules' },
      { text: '提问的智慧', link: '/asking' }
    ]
  }
]

const nav = [
  { text: '首页', link: '/' },
  { text: '开始使用', link: '/usage' },
  {
    text: '功能文档',
    items: [
      { text: 'PJSK', link: '/features/pjsk' },
      { text: '舞萌 DX', link: '/features/maimai' },
      { text: '中二节奏', link: '/features/chunithm' },
      { text: '经济系统', link: '/features/economy' },
      { text: '群聊工具', link: '/features/tools' },
      { text: 'Minecraft', link: '/features/minecraft' }
    ]
  },
  {
    text: '更新与公告',
    items: [
      { text: '服务状态与公告', link: '/service-announcements' },
      { text: 'Bot 更新日志', link: '/features/bot_update' },
      { text: 'Minecraft 更新', link: '/features/mc_update' }
    ]
  },
  { text: '项目生态', link: '/projects/' },
  {
    text: '关于',
    items: [
      { text: '开发团队', link: '/contribution' },
      { text: '开发者参与', link: '/recruiting' },
      { text: '用户协议', link: '/agreement' },
      { text: '免责声明', link: '/disclaimer' },
      { text: '赞助支持', link: '/sponsor' }
    ]
  }
]

const websiteStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: siteName,
  alternateName: ['Amia Bot', 'Mizuki Bot', 'Mizuki Bot Docs', 'Mizuki 帮助文档'],
  url: `${siteUrl}/`,
  inLanguage: 'zh-CN',
  description: siteDescription,
  image: { '@id': `${siteUrl}/#primaryimage` },
  publisher: { '@id': `${siteUrl}/#organization` }
}

const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: 'Amia-Mizuki Dev Team',
  alternateName: ['Mizuki Bot 开发组', 'HongXing Dev Team'],
  url: `${siteUrl}/`,
  logo: siteLogo,
  image: siteImage,
  sameAs: ['https://github.com/Amia-Mizuki-Dev-Team/MizukiBot']
}

const imageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ImageObject',
  '@id': `${siteUrl}/#primaryimage`,
  url: siteImage,
  contentUrl: siteImage,
  width: 1200,
  height: 630,
  caption: siteName,
  representativeOfPage: true
}

const homeItemListStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${siteUrl}/#main-sections`,
  name: `${siteName}主要入口`,
  itemListElement: mainSections.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    url: item.url
  }))
}

function normalizeUrl(relativePath: string) {
  const normalizedPath = relativePath
    .replace(/(^|\/)index\.md$/, '$1')
    .replace(/\.md$/, '')
  const path = normalizedPath === '' ? '/' : `/${normalizedPath}`
  return new URL(path, siteUrl).href
}

export default defineConfig({
  title: siteName,
  titleTemplate: ':title | Amia_晓山瑞希帮助文档',
  description: siteDescription,
  lang: 'zh-CN',
  cleanUrls: true,
  sitemap: { hostname: siteUrl },

  transformHead({ pageData }) {
    const canonicalUrl = normalizeUrl(pageData.relativePath)
    const pageTitle = pageData.title || siteName
    const pageDescription = pageData.description || siteDescription
    const webPageStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: pageTitle,
      description: pageDescription,
      inLanguage: 'zh-CN',
      isPartOf: { '@id': `${siteUrl}/#website` },
      primaryImageOfPage: { '@id': `${siteUrl}/#primaryimage` }
    }

    const head = [
      ['link', { rel: 'canonical', href: canonicalUrl }],
      ['link', { rel: 'image_src', href: siteImage }],
      ['meta', { property: 'og:title', content: pageTitle }],
      ['meta', { property: 'og:description', content: pageDescription }],
      ['meta', { property: 'og:url', content: canonicalUrl }],
      ['meta', { property: 'og:image', content: siteImage }],
      ['meta', { property: 'og:image:width', content: '1200' }],
      ['meta', { property: 'og:image:height', content: '630' }],
      ['meta', { property: 'og:image:alt', content: `${siteName}预览图` }],
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:title', content: pageTitle }],
      ['meta', { name: 'twitter:description', content: pageDescription }],
      ['meta', { name: 'twitter:image', content: siteImage }],
      ['script', { type: 'application/ld+json' }, JSON.stringify(webPageStructuredData)]
    ]

    if (canonicalUrl !== `${siteUrl}/`) {
      head.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: siteName, item: `${siteUrl}/` },
            { '@type': 'ListItem', position: 2, name: pageTitle, item: canonicalUrl }
          ]
        })
      ])
    }

    return head
  },

  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/Picture/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', href: '/Picture/logo.gif' }],
    ['meta', { name: 'robots', content: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1' }],
    ['meta', { name: 'theme-color', content: '#E97EB3' }],
    ['meta', { name: 'application-name', content: siteName }],
    ['meta', { name: 'keywords', content: 'Amia_晓山瑞希, Amia Bot, Mizuki Bot, PJSK, Project Sekai, 舞萌DX, maimai, 中二节奏, 音游Bot, QQ Bot, 经济系统, 群聊工具, 服务公告, Minecraft, 帮助文档' }],
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
      '/features/': featureSidebar,
      '/projects/': projectSidebar,
      '/service-announcements': updateSidebar,
      '/usage': guideSidebar,
      '/feedback': guideSidebar,
      '/asking': aboutSidebar,
      '/contribution': aboutSidebar,
      '/recruiting': aboutSidebar,
      '/agreement': aboutSidebar,
      '/disclaimer': aboutSidebar,
      '/rules': aboutSidebar,
      '/sponsor': aboutSidebar,
      '/': guideSidebar
    },
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Amia-Mizuki-Dev-Team/MizukiBot' }
    ],
    outline: {
      level: [2, 3],
      label: '本页内容'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '文档目录',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})
