import DefaultTheme from 'vitepress/theme'
import { h, onMounted, ref } from 'vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  
  Layout() {
    const currentAvatar = ref('/Picture/avatar.jpg') 
    const currentQuote = ref('')
    const showAnnouncement = ref(true) 

    onMounted(() => {
      // 🎲 首页随机头像逻辑
      const images = ['/Picture/avatar.jpg', '/Picture/logo.gif'];
      currentAvatar.value = images[Math.floor(Math.random() * images.length)];

      // 💬 首页随机语录逻辑
      const quotes = [
        "「 ボクは……ボクでいたいだけ 」<br>我只是……想做我自己罢了",
        "「 秘密って、なんだかワクワクしない？ 」<br>所谓秘密，不觉得令人有些兴奋吗？",
        "「 25時、ナイトコードで。 」<br>25时，在 Nightcord 见。",
        "「 かわいいは正義！だよね？ 」<br>可爱即正义！对吧？"
      ];
      currentQuote.value = quotes[Math.floor(Math.random() * quotes.length)];

      // 检查当前会话是否已关闭公告
      if (sessionStorage.getItem('hide_announcement')) {
        showAnnouncement.value = false;
      }
    })

    return h(DefaultTheme.Layout, null, {
      // 1. 首页随机英雄区插槽
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

      // 2. 全局公告栏插槽 (固定右上角关闭按钮)
      'layout-top': () => {
        return showAnnouncement.value ? h('div', {
          style: {
            backgroundColor: 'var(--vp-c-brand-soft)',
            color: 'var(--vp-c-brand-1)',
            padding: '12px 40px 12px 15px', 
            textAlign: 'center',
            fontSize: '14px',
            fontWeight: '500',
            borderBottom: '1px solid var(--vp-c-brand-soft)',
            position: 'relative',
            lineHeight: '1.6'
          }
        }, [
          h('span', {
            style: {
              backgroundColor: 'var(--vp-c-brand-1)',
              color: 'white',
              padding: '2px 8px',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: 'bold',
              marginRight: '8px',
              display: 'inline-block',
              verticalAlign: 'middle'
            }
          }, '公告'),
          h('span', { style: { verticalAlign: 'middle' } }, 'Mizuki Bot 4月大更新已上线，欢迎查阅更新日志！ '),
          h('a', { 
            href: '/features/bot_update',
            style: {
              textDecoration: 'underline',
              fontWeight: 'bold',
              color: 'var(--vp-c-brand-1)',
              verticalAlign: 'middle',
              marginLeft: '4px'
            }
          }, '点击查看 →'),
          // ✖ 关闭按钮：固定在右上角
          h('button', {
            onClick: () => {
              showAnnouncement.value = false;
              sessionStorage.setItem('hide_announcement', 'true');
            },
            style: {
              position: 'absolute',
              right: '12px',
              top: '12px',
              background: 'transparent',
              border: 'none',
              fontSize: '22px',
              cursor: 'pointer',
              color: 'var(--vp-c-brand-1)',
              lineHeight: '1',
              padding: '0'
            },
            ariaLabel: '关闭公告'
          }, '×')
        ]) : null
      },

      // 3. 全局页脚插槽 (强制在所有页面底部显示)
      'layout-bottom': () => {
        return h('div', {
          style: {
            textAlign: 'center',
            padding: '30px 20px',
            fontSize: '14px',
            color: 'var(--vp-c-text-2)',
            borderTop: '1px solid var(--vp-c-divider)',
            backgroundColor: 'var(--vp-c-bg)',
            width: '100%',
            marginTop: 'auto'
          }
        }, '© 2018-2026 MizukiBot Team | HongXing (Jiangsu) Dev Team. 保留所有权利。')
      }
    })
  }
}
