<template>
  <div class="amia-home-status-wrap">
    <section class="amia-home-status" aria-label="服务状态摘要">
      <div class="amia-home-status-main">
        <span class="amia-home-status-title">服务状态</span>
        <StatusBadge status="online">文档与主要入口正常</StatusBadge>
        <span class="amia-home-status-copy">具体 Bot 与关联服务状态以公告页为准</span>
      </div>
      <div class="amia-home-status-meta">
        <span>最近整理：2026-07-29</span>
        <a href="/service-announcements">查看服务公告 →</a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import StatusBadge from './StatusBadge.vue'
</script>
