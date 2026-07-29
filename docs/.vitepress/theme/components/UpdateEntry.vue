<template>
  <article class="amia-service-notice">
    <div class="amia-service-notice-header">
      <strong>{{ title }}</strong>
      <StatusBadge :status="status">{{ category }}</StatusBadge>
    </div>
    <div class="amia-service-notice-body">
      <p><time :datetime="date">{{ date }}</time></p>
      <slot />
    </div>
  </article>
</template>

<script setup lang="ts">
import StatusBadge from './StatusBadge.vue'

withDefaults(defineProps<{
  title: string
  date: string
  category?: string
  status?: 'stable' | 'online' | 'beta' | 'info' | 'experimental' | 'maintenance' | 'deprecated' | 'offline'
}>(), {
  category: '更新',
  status: 'info'
})
</script>
