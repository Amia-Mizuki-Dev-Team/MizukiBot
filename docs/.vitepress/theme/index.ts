import DefaultTheme from 'vitepress/theme'
import { h, onMounted, ref, nextTick } from 'vue'
import './custom.css'
import SearchResult from './components/SearchResult.vue'

export default {
  extends: DefaultTheme,
  
  enhanceApp({ app }) {
    app.component('SearchResult', SearchResult)
  },
  
  Layout() {
    const currentQuote = ref('')
    // 初始设为 false 防止服务端渲染时闪烁，在 onMounted 中恢复
    const showAnnouncement = ref(false) 

    onMounted(() => {
      // 随机语录逻辑
      const quotes = [
        "「 ボクは……ボクでいたいだけ 」<br>我只是……想做我自己罢了",
        "「 秘密って、なんだかワクワクしない？ 」<br>所谓秘密，不觉得令人有些兴奋吗？",
        "「 25時、ナイトコードで。 」<br>25时，在 Nightcord 见。",
        "「 かわいいは正義！だよね？ 」<br>可爱即正义！对吧？"
      ];
      currentQuote.value = quotes[Math.floor(Math.random() * quotes.length)];

      // 首页功能卡片点击跳转
      nextTick(() => {
        const links = ['/features/pjsk', '/features/tools', '/features/tools', '/features/minecraft', '/usage', '/projects/hx-pjsk-gateway'];
        document.querySelectorAll('.VPFeature').forEach((el, i) => {
          if (i < links.length) {
            el.style.cursor = 'pointer';
            el.addEventListener('click', () => { window.location.href = links[i]; });
          }
        });
      });

      // 检查是否已关闭公告
      if (!sessionStorage.getItem('hide_announcement')) {
        showAnnouncement.value = true;
        
        // 关键修复：动态监听公告栏的实际高度（完美适配手机端多行文字）
        nextTick(() => {
          const banner = document.getElementById('mzk-banner');
          if (banner) {
            const observer = new ResizeObserver(entries => {
              for (let entry of entries) {
                const height = entry.borderBoxSize?.[0]?.blockSize || entry.contentRect.height;
                // 利用 VitePress 原生变量完美向下推移导航栏和正文
                document.documentElement.style.setProperty('--vp-layout-top-height', `${height}px`);
              }
            });
            observer.observe(banner);
          }
        });
      } else {
        document.documentElement.style.setProperty('--vp-layout-top-height', `0px`);
      }
    })

    // 关闭公告的触发函数
    const closeBanner = () => {
      showAnnouncement.value = false;
      sessionStorage.setItem('hide_announcement', 'true');
      document.documentElement.style.setProperty('--vp-layout-top-height', `0px`);
    };

    return h(DefaultTheme.Layout, null, {
      'home-hero-image': () => {
        return h('div', { class: 'hero-wrapper' }, [
          h('img', { 
            src: '/Picture/avatar.jpg', 
            class: 'random-hero-avatar', 
            alt: 'Hero Logo'
          }),
          h('div', {
            class: 'my-custom-quote',
            innerHTML: currentQuote.value
          })
        ])
      },

      'layout-top': () => {
        if (!showAnnouncement.value) return null;

        return h('div', {
          id: 'mzk-banner',
          class: 'mzk-banner'
        }, [
          h('div', { 
            class: 'mzk-banner-content'
          }, [
            h('span', {
              class: 'mzk-banner-tag'
            }, '📢 公告'),
            h('span', null, 'Mizuki Bot 4月大更新已上线，欢迎查阅更新日志！'),
            h('a', { 
              href: '/features/bot_update',
              class: 'mzk-banner-link'
            }, '点击查看 →')
          ]),
          h('button', {
            onClick: closeBanner,
            class: 'mzk-banner-close',
            ariaLabel: '关闭公告'
          }, '×')
        ])
      },

      'layout-bottom': () => {
        return h('div', {
          class: 'mzk-footer'
        }, '© 2020-2026 MizukiBot Team | HongXing (Jiangsu) Dev Team. 保留所有权利。')
      }
    })
  }
}
