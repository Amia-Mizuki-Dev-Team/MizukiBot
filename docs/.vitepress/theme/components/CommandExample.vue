<template>
  <section class="amia-command" :aria-label="title">
    <div class="amia-command-header">
      <strong>{{ title }}</strong>
      <button type="button" class="amia-command-copy" @click="copyCommand">{{ copied ? '已复制' : '复制指令' }}</button>
    </div>
    <code class="amia-command-code">{{ command }}</code>
    <div v-if="$slots.default" class="amia-command-description"><slot /></div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  title: string
  command: string
}>()

const copied = ref(false)

async function copyCommand() {
  if (typeof navigator === 'undefined' || !navigator.clipboard) return
  await navigator.clipboard.writeText(props.command)
  copied.value = true
  window.setTimeout(() => {
    copied.value = false
  }, 1600)
}
</script>
