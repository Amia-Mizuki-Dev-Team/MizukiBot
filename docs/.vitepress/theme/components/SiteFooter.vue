<template>
  <footer class="amia-site-footer">
    <div class="amia-site-footer-inner">
      <div class="amia-site-footer-brand">
        <strong>Amia_晓山瑞希帮助文档</strong>
        <p>音游查询、群聊工具、服务公告与项目生态的统一文档入口。项目原名为 Mizuki Bot。</p>
      </div>
      <nav v-for="column in columns" :key="column.title" class="amia-site-footer-column" :aria-label="column.title">
        <strong>{{ column.title }}</strong>
        <a v-for="item in column.items" :key="item.link" :href="item.link">{{ item.text }}</a>
      </nav>
    </div>
    <div class="amia-site-footer-bottom">© 2021–2026 Amia-Mizuki Dev Team · Amia_晓山瑞希（原 Mizuki Bot）</div>
  </footer>
</template>

<script setup lang="ts">
const columns = [
  { title: '文档', items: [
    { text: '开始使用', link: '/usage' },
    { text: '功能文档', link: '/features/pjsk' },
    { text: '问题反馈', link: '/feedback' }
  ] },
  { title: '项目', items: [
    { text: '项目生态', link: '/projects/' },
    { text: '开发者参与', link: '/recruiting' },
    { text: '项目仓库', link: '/projects/' }
  ] },
  { title: '支持', items: [
    { text: '服务状态', link: '/service-announcements' },
    { text: 'Bot 更新日志', link: '/features/bot_update' },
    { text: '赞助支持', link: '/sponsor' }
  ] },
  { title: '规范', items: [
    { text: '用户协议', link: '/agreement' },
    { text: '免责声明', link: '/disclaimer' },
    { text: '群规', link: '/rules' }
  ] }
]
</script>
