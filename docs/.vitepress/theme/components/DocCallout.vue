<template>
  <aside class="amia-doc-callout" :data-type="type">
    <strong>{{ title }}</strong>
    <p><slot /></p>
  </aside>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  type?: 'info' | 'warning' | 'danger' | 'history'
}>(), {
  type: 'info'
})
</script>
