import DefaultTheme from 'vitepress/theme'
import { h, onMounted, ref, nextTick } from 'vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    const currentQuote = ref('')
    const showAnnouncement = ref(false)

    onMounted(() => {
      const quotes = [
        "ボクは……ボクでいたいだけ。<br>我只是想做我自己。",
        "秘密って、なんだかワクワクしない？<br>秘密，总会让人有点期待。",
        "25時、ナイトコードで。<br>25 时，在 Nightcord 见。",
        "かわいいは正義。<br>可爱即正义。"
      ]
      currentQuote.value = quotes[Math.floor(Math.random() * quotes.length)]

      nextTick(() => {
        const links = ['/features/pjsk', '/features/tools', '/features/tools', '/features/minecraft', '/usage', '/recruiting']
        document.querySelectorAll('.VPFeature').forEach((el, i) => {
          if (i < links.length) {
            el.setAttribute('role', 'link')
            el.setAttribute('tabindex', '0')
            el.addEventListener('click', () => { window.location.href = links[i] })
            el.addEventListener('keydown', event => {
              const keyboardEvent = event as KeyboardEvent
              if (keyboardEvent.key === 'Enter' || keyboardEvent.key === ' ') {
                keyboardEvent.preventDefault()
                window.location.href = links[i]
              }
            })
          }
        })
      })

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
        document.documentElement.style.setProperty('--vp-layout-top-height', `0px`)
      }
    })

    const closeBanner = () => {
      showAnnouncement.value = false
      sessionStorage.setItem('hide_announcement', 'true')
      document.documentElement.style.setProperty('--vp-layout-top-height', `0px`)
    }

    return h(DefaultTheme.Layout, null, {
      'home-hero-image': () => h('div', { class: 'hero-wrapper' }, [
        h('img', { src: '/Picture/avatar.jpg', class: 'random-hero-avatar', alt: 'Mizuki Bot' }),
        h('div', { class: 'my-custom-quote', innerHTML: currentQuote.value })
      ]),
      'layout-top': () => {
        if (!showAnnouncement.value) return null
        return h('div', { id: 'mzk-banner', class: 'mzk-banner' }, [
          h('div', { class: 'mzk-banner-content' }, [
            h('span', { class: 'mzk-banner-tag' }, '公告'),
            h('span', null, 'Mizuki Bot 4 月更新已上线。'),
            h('a', { href: '/features/bot_update', class: 'mzk-banner-link' }, '查看更新')
          ]),
          h('button', { onClick: closeBanner, class: 'mzk-banner-close', ariaLabel: '关闭公告' }, '×')
        ])
      },
      'layout-bottom': () => h('div', { class: 'mzk-footer' }, '© 2021-2026 MizukiBot Team | HongXing (Jiangsu) Dev Team. 保留所有权利。')
    })
  }
}
