import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import HomePage from './components/HomePage.vue'
import HomeStatusBar from './components/HomeStatusBar.vue'
import SiteFooter from './components/SiteFooter.vue'
import StatusBadge from './components/StatusBadge.vue'
import CommandExample from './components/CommandExample.vue'
import DocCallout from './components/DocCallout.vue'
import UpdateEntry from './components/UpdateEntry.vue'
import ServiceNotice from './components/ServiceNotice.vue'
import ProjectCard from './components/ProjectCard.vue'
import './custom.css'
import './styles/tokens.css'
import './styles/base.css'
import './styles/home.css'
import './styles/components.css'
import './styles/docs.css'
import './styles/pages.css'
import './styles/responsive.css'

const theme = {
  extends: DefaultTheme,

  enhanceApp({ app }) {
    app.component('HomePage', HomePage)
    app.component('StatusBadge', StatusBadge)
    app.component('CommandExample', CommandExample)
    app.component('DocCallout', DocCallout)
    app.component('UpdateEntry', UpdateEntry)
    app.component('ServiceNotice', ServiceNotice)
    app.component('ProjectCard', ProjectCard)
  },

  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-before': () => h(HomeStatusBar),
      'home-hero-image': () => h('div', { class: 'amia-hero-visual' }, [
        h('img', {
          src: '/Picture/avatar.jpg',
          alt: 'Amia_晓山瑞希角色视觉图',
          width: '350',
          height: '390'
        })
      ]),
      'layout-bottom': () => h(SiteFooter)
    })
  }
} satisfies Theme

export default theme
