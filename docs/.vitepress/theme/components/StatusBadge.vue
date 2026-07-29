<template>
  <span class="amia-status-badge" :data-status="status">
    <slot />
  </span>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  status?: 'stable' | 'online' | 'beta' | 'info' | 'experimental' | 'maintenance' | 'deprecated' | 'offline'
}>(), {
  status: 'info'
})
</script>
