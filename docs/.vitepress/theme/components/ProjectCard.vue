<template>
  <article class="amia-project-card">
    <div class="amia-project-card-header">
      <strong>{{ title }}</strong>
      <StatusBadge :status="status">{{ statusText }}</StatusBadge>
    </div>
    <div class="amia-project-card-body">
      <slot />
      <p v-if="link"><a :href="link">查看项目 →</a></p>
    </div>
  </article>
</template>

<script setup lang="ts">
import StatusBadge from './StatusBadge.vue'

withDefaults(defineProps<{
  title: string
  status?: 'stable' | 'online' | 'beta' | 'info' | 'experimental' | 'maintenance' | 'deprecated' | 'offline'
  statusText?: string
  link?: string
}>(), {
  status: 'info',
  statusText: '维护中'
})
</script>
