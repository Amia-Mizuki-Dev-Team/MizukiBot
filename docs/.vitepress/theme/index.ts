import DefaultTheme from 'vitepress/theme'
import { h, onMounted, ref } from 'vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  
  Layout() {
    const currentAvatar = ref('/Picture/avatar.jpg') 
    const currentQuote = ref('')

    onMounted(() => {
      // 🎲 随机头像逻辑
      const images = [
        '/Picture/avatar.jpg',
        '/Picture/logo.gif'
      ];
      currentAvatar.value = images[Math.floor(Math.random() * images.length)];

      // 💬 随机语录逻辑
      const quotes = [
        "「 ボクは……ボクでいたいだけ 」<br>我只是……想做我自己罢了",
        "「 秘密って、なんだかワクワクしない？ 」<br>所谓秘密，不觉得令人有些兴奋吗？",
        "「 25時、ナイトコードで。 」<br>25时，在 Nightcord 见。",
        "「 かわいいは正義！だよね？ 」<br>可爱即正义！对吧？"
      ];
      currentQuote.value = quotes[Math.floor(Math.random() * quotes.length)];
    })

    return h(DefaultTheme.Layout, null, {
      // 1. 原有的首页随机头像插槽
      'home-hero-image': () => {
        return h('div', { class: 'hero-wrapper' }, [
          h('img', { 
            src: currentAvatar.value, 
            class: 'random-hero-avatar', 
            alt: 'Hero'
          }),
          h('div', {
            class: 'my-custom-quote',
            innerHTML: currentQuote.value
          })
        ])
      },

      // 2. 新增：全局公告插槽 (显示在所有文档内容上方)
      'doc-before': () => {
        return h('div', { class: 'global-announcement' }, [
          h('span', { class: 'announcement-tag' }, '公告'),
          h('span', { class: 'announcement-content' }, 'Mizuki Bot 4月大更新已上线，欢迎查阅更新日志！'),
          h('a', { href: '/features/bot_update', class: 'announcement-link' }, '点击查看 →')
        ])
      }
    })
  }
}
