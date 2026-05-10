import DefaultTheme from 'vitepress/theme'
import { h, onMounted, ref } from 'vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  
  Layout() {
    // Randomized quotes state (retained)
    const currentQuote = ref('')
    
    // **Requirement: Banner Reliable Visibility (Turn 1 style robust approach, Turn 3 visuals)**
    // Reverting to the functional approach which avoids Vue component setup timing issues.
    // Ensure solid bg and border are present.
    const showAnnouncement = ref(true) 
    
    // The CSS overrides to inject when the banner is shown to force other elements down by 44px
    const styleOverride = `
      .VPNav { top: 44px !important; transition: top 0.1s ease; }
      .VPLocalNav { top: calc(var(--vp-nav-height) + 44px) !important; transition: top 0.1s ease; }
      .VPSidebar { top: calc(var(--vp-nav-height) + 44px) !important; transition: top 0.1s ease; }
      .VPContent { margin-top: 44px !important; transition: margin-top 0.1s ease; }
    `;

    onMounted(() => {
      // Check session storage FIRST to determine initial visibility
      if (sessionStorage.getItem('hide_announcement')) {
        showAnnouncement.value = false;
      } else {
        // Assert true initially. We will remove the randomization.
        showAnnouncement.value = true;
      }

      // Randomized quotes logic (retained)
      const quotes = [
        "「 ボクは……ボクでいたいだけ 」<br>我只是……想做我自己罢了",
        "「 秘密って、なんだかワクワクしない？ 」<br>所谓秘密，不觉得令人有些兴奋吗？",
        "「 25時、ナイトコードで。 」<br>25时，在 Nightcord 见。",
        "「 かわいいは正義！だよね？ 」<br>可爱即正义！对吧？"
      ];
      currentQuote.value = quotes[Math.floor(Math.random() * quotes.length)];
    })

    return h(DefaultTheme.Layout, null, {
      // **Requirement: Fix the hero logo to P2, image_08 CEF7.png**
      // (User positioned image_08 CEF7.png as P2 path verbatim).
      'home-hero-image': () => {
        return h('div', { class: 'hero-wrapper' }, [
          h('img', { 
            // Fixed path to P2 (image_08 CEF7.png verbatim), randomized avatar logic removed.
            src: '/Picture/image_08 CEF7.png', 
            class: 'random-hero-avatar', 
            alt: 'Hero Logo'
          }),
          h('div', {
            class: 'my-custom-quote',
            innerHTML: currentQuote.value
          })
        ])
      },

      // **Requirement: Reliably show the branded, solid announcement bar**
      'layout-top': () => {
        // Only return if visible
        if (!showAnnouncement.value) return null;

        return h('div', null, [
          // 1. Inject Style Override (VitePress default Nav has higher priority usually)
          h('style', styleOverride),
          // 2. Render reliably placed fixed-height bar (44px)
          h('div', {
            style: {
              position: 'fixed',
              top: '0',
              left: '0',
              width: '100%',
              height: '44px', // Reliable fixed height approach
              backgroundColor: 'var(--vp-c-bg)', // Turn 3: Prevent transparency by using solid background (black/white)
              color: 'var(--vp-c-brand-1)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              fontSize: '14px',
              fontWeight: '500',
              borderBottom: '2px solid var(--vp-c-brand-1)', // Turn 3: Branded solid bottom border
              zIndex: '10000', // Highly positioned
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)' // Small shadow for visual logic
            }
          }, [
            h('span', {
              style: {
                backgroundColor: 'var(--vp-c-brand-1)',
                color: 'white',
                padding: '2px 8px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: 'bold'
              }
            }, '📢 公告'),
            h('span', null, 'Mizuki Bot 4月大更新已上线，欢迎查阅更新日志！'),
            h('a', { 
              href: '/features/bot_update',
              style: {
                textDecoration: 'underline',
                fontWeight: 'bold',
                color: 'var(--vp-c-brand-1)'
              }
            }, '点击查看 →'),
            h('button', {
              onClick: () => {
                showAnnouncement.value = false;
                sessionStorage.setItem('hide_announcement', 'true');
              },
              style: {
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'transparent',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer',
                color: 'var(--vp-c-brand-1)',
                lineHeight: '1',
                padding: '0'
              },
              ariaLabel: '关闭公告'
            }, '×')
          ])
        ])
      },

      // Forced footer logic Turn 3: solid requirements
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
