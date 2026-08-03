import DefaultTheme from 'vitepress/theme'
import { h, onMounted, ref, nextTick } from 'vue'
import HomeSponsorBanner from './HomeSponsorBanner.vue'
import './custom.css'
import './friends.css'
import './performance.css'

export default {
  extends: DefaultTheme,
  Layout() {
    const currentQuote = ref('')
    const showAnnouncement = ref(false)

    onMounted(() => {
      const quotes = [
        'ボクは……ボクでいたいだけ。<br>我只是想做我自己。',
        '秘密って、なんだかワクワクしない？<br>秘密，总会让人有点期待。',
        '25時、ナイトコードで。<br>25 时，在 Nightcord 见。',
        'かわいいは正義。<br>可爱即正义。'
      ]
      currentQuote.value = quotes[Math.floor(Math.random() * quotes.length)]

      if (!sessionStorage.getItem('hide_announcement')) {
        showAnnouncement.value = true
        nextTick(() => {
          const banner = document.getElementById('mzk-banner')
          if (banner) {
            const observer = new ResizeObserver(entries => {
              for (const entry of entries) {
                const height = entry.borderBoxSize?.[0]?.blockSize || entry.contentRect.height
                document.documentElement.style.setProperty('--vp-layout-top-height', `${height}px`)
              }
            })
            observer.observe(banner)
          }
        })
      } else {
        document.documentElement.style.setProperty('--vp-layout-top-height', '0px')
      }
    })

    const closeBanner = () => {
      showAnnouncement.value = false
      sessionStorage.setItem('hide_announcement', 'true')
      document.documentElement.style.setProperty('--vp-layout-top-height', '0px')
    }

    return h(DefaultTheme.Layout, null, {
      'home-hero-before': () => h(HomeSponsorBanner),
      'home-hero-image': () => h('div', { class: 'hero-wrapper' }, [
        h('img', {
          src: '/Picture/avatar.jpg',
          class: 'random-hero-avatar',
          alt: 'Amia_晓山瑞希',
          width: 350,
          height: 350,
          loading: 'eager',
          decoding: 'async',
          fetchpriority: 'high'
        }),
        h('div', { class: 'my-custom-quote', innerHTML: currentQuote.value })
      ]),
      'layout-top': () => {
        if (!showAnnouncement.value) return null
        return h('div', {
          id: 'mzk-banner',
          class: 'mzk-banner',
          role: 'region',
          'aria-label': '站点公告'
        }, [
          h('div', { class: 'mzk-banner-content' }, [
            h('span', { class: 'mzk-banner-tag' }, '公告'),
            h('span', null, '请查看最新功能更新与服务公告。'),
            h('a', { href: '/service-announcements', class: 'mzk-banner-link' }, '查看公告')
          ]),
          h('button', {
            type: 'button',
            onClick: closeBanner,
            class: 'mzk-banner-close',
            'aria-label': '关闭公告'
          }, '×')
        ])
      },
      'layout-bottom': () => h('div', { class: 'mzk-footer' }, '© 2021-2026 Amia-Mizuki Dev Team. 保留所有权利。')
    })
  }
}
