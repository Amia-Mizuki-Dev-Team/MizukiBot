<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const statement = ref<HTMLElement | null>(null)
const active = ref(false)
const phrases = ['想查成绩，', '想看谱面，', '想让群聊更有条理。', '从一条指令开始。']
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    active.value = true
    return
  }
  observer = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) {
      active.value = true
      observer?.disconnect()
    }
  }, { threshold: 0.25 })
  if (statement.value) observer.observe(statement.value)
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <section ref="statement" class="mzk-statement" aria-labelledby="mzk-statement-heading">
    <span class="mzk-kicker">不仅是指令列表</span>
    <h2 id="mzk-statement-heading" class="mzk-heading-3">
      <span v-for="(phrase, index) in phrases" :key="phrase"
        class="mzk-statement-word" :class="{ 'is-active': active }"
        :style="{ transitionDelay: String(index * 90) + 'ms' }">{{ phrase }}</span>
    </h2>
    <p class="mzk-body-3">把常用的音游信息和 QQ 群内工具放在同一个入口，遇到问题也能直接找到对应说明。</p>
  </section>
</template>
