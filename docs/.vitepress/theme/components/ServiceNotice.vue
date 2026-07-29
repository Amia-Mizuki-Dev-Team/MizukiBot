<template>
  <section class="amia-service-notice">
    <div class="amia-service-notice-header">
      <strong>{{ title }}</strong>
      <StatusBadge :status="status">{{ statusText }}</StatusBadge>
    </div>
    <div class="amia-service-notice-body">
      <p v-if="effectiveAt"><strong>生效时间：</strong>{{ effectiveAt }}</p>
      <p v-if="scope"><strong>影响范围：</strong>{{ scope }}</p>
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import StatusBadge from './StatusBadge.vue'

withDefaults(defineProps<{
  title: string
  status?: 'stable' | 'online' | 'beta' | 'info' | 'experimental' | 'maintenance' | 'deprecated' | 'offline'
  statusText?: string
  effectiveAt?: string
  scope?: string
}>(), {
  status: 'info',
  statusText: '公告'
})
</script>
