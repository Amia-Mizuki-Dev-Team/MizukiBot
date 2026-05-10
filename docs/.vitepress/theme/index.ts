import DefaultTheme from 'vitepress/theme'
import { h, onMounted, ref, nextTick } from 'vue'
import './custom.css'

// 将 Layout 包装为标准的 Vue Setup 组件模式，解决响应式失效问题
const CustomLayout = {
  setup() {
    const currentAvatar = ref('/Picture/avatar.jpg') 
    const currentQuote = ref('')
    const showAnnouncement = ref(true) 
    const bannerHeight = ref(0) // 用于动态存储公告栏的高度

    onMounted(() => {
      // 🎲 随机头像
      const images = ['/Picture/avatar.jpg', '/Picture/logo.gif'];
      currentAvatar.value = images[Math.floor(Math.random() * images.length)];

      // 💬 随机语录
      const quotes = [
        "「 ボクは……ボクでいたいだけ 」<br>我只是……想做我自己罢了",
        "「 秘密って、なんだかワクワクしない？ 」<br>所谓秘密，不觉得令人有些兴奋吗？",
        "「 25時、ナイトコードで。 」<br>25时，在 Nightcord 见。",
        "「 かわいいは正義！だよね？ 」<br>可爱即正义！对吧？"
      ];
      currentQuote.value = quotes[Math.floor(Math.random() * quotes.length)];

      // 🛑 公告显示与高度自适应逻辑
      if (sessionStorage.getItem('hide_announcement')) {
        showAnnouncement.value = false;
      } else {
        const updateHeight = () => {
          const el = document.getElementById('global-announcement')
          if (el) bannerHeight.value = el.offsetHeight
        }
        nextTick(updateHeight)
        window.addEventListener('resize', updateHeight) // 监听窗口变化，适配手机横竖屏
        setTimeout(updateHeight, 200) // 兜底计算
      }
    })

    // 必须返回一个渲染函数
    return () => h(DefaultTheme.Layout, null, {
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

      'layout-top': () => {
        return h('div', null, [
          // 1. 动态注入 CSS，将 VitePress 的核心组件整体向下偏移公告栏的高度
          h('style', `
            .VPNav { top: ${bannerHeight.value}px !important; transition: top 0.3s ease; }
            .VPSidebar { top: calc(var(--vp-nav-height) + ${bannerHeight.value}px) !important; transition: top 0.3s ease; }
            .VPLocalNav { top: calc(var(--vp-nav-height) + ${bannerHeight.value}px) !important; transition: top 0.3s ease; }
            .VPContent { margin-top: ${bannerHeight.value}px !important; transition: margin-top 0.3s ease; }
          `),
          
          // 2. 渲染固定的顶部公告栏
          showAnnouncement.value ? h('div', {
            id: 'global-announcement',
            style: {
              position: 'fixed',
              top: '0',
              left: '0',
              width: '100%',
              backgroundColor: 'var(--vp-c-bg)', // ⚠️ 使用纯色背景(黑/白)解决透明透底问题
              color: 'var(--vp-c-brand-1)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap', // 支持手机端文字多行换行
              padding: '12px 40px 12px 15px',
              fontSize: '14px',
              fontWeight: '500',
              borderBottom: '2px solid var(--vp-c-brand-1)', // 底部加实线边框
              zIndex: '100000', // ⚠️ 极致高层级，绝对置于最顶层
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)' // 增加底层阴影
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
                whiteSpace: 'nowrap'
              }
            }, '公告'),
            h('span', null, 'Mizuki Bot 4月大更新已上线，欢迎查阅更新日志！ '),
            h('a', { 
              href: '/features/bot_update',
              style: {
                textDecoration: 'underline',
                fontWeight: 'bold',
                color: 'var(--vp-c-brand-1)',
                marginLeft: '4px',
                whiteSpace: 'nowrap'
              }
            }, '点击查看 →'),
            h('button', {
              onClick: () => {
                showAnnouncement.value = false;
                bannerHeight.value = 0; // 高度归零，页面会自动带动画弹回原位
                sessionStorage.setItem('hide_announcement', 'true');
              },
              style: {
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
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
        ])
      },

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
        }, '© 2020-2026 MizukiBot Team | HongXing (Jiangsu) Dev Team. 保留所有权利。')
      }
    })
  }
}

export default {
  extends: DefaultTheme,
  Layout: CustomLayout
}
