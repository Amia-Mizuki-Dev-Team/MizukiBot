<template>
  <div
    ref="root"
    class="mzk-particle-hero"
    aria-hidden="true"
    @pointermove="onPointerMove"
    @pointerleave="onPointerLeave"
  >
    <canvas ref="canvas" class="mzk-particle-canvas" />

    <div class="mzk-particle-focus">
      <div class="mzk-particle-mark">
        <img
          src="/Picture/avatar.webp?v=20260902a"
          alt=""
          width="72"
          height="72"
          decoding="async"
        >
      </div>
      <div class="mzk-particle-focus-line" />
      <div class="mzk-particle-focus-label">AMIA / MIZUKI</div>
    </div>

    <div v-if="quote" class="mzk-particle-quote" v-html="quote" />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps<{
  quote?: string
}>()

interface Particle {
  x: number
  lane: number
  depth: number
  size: number
  speed: number
  alpha: number
  phase: number
  wave: number
  accent: number
  trail: number
  mark: number
}

const root = ref<HTMLElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)

let ctx: CanvasRenderingContext2D | null = null
let width = 0
let height = 0
let dpr = 1
let frame = 0
let lastTime = 0
let resizeObserver: ResizeObserver | null = null
let visibilityObserver: IntersectionObserver | null = null
let themeObserver: MutationObserver | null = null
let particles: Particle[] = []
let running = true
let reducedMotion = false
let dark = false
let scrollOffset = 0

const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 }

const lightPalette = ['#E97EB3', '#8A66C2', '#6F8EEB', '#66B7C9']
const darkPalette = ['#F19BC6', '#A98ADE', '#8DA8F7', '#7FD1D8']

function particleCount() {
  if (width < 420) return 82
  if (width < 560) return 116
  return 176
}

function makeParticle(initial = true): Particle {
  const depth = 0.12 + Math.random() * 0.88
  const laneSign = Math.random() < 0.5 ? -1 : 1
  const laneMagnitude = Math.pow(Math.random(), 0.72)

  return {
    x: initial ? Math.random() * (width + 120) - 40 : width + 40 + Math.random() * 120,
    lane: laneSign * laneMagnitude,
    depth,
    size: 2.2 + Math.random() * 5.8,
    speed: 24 + Math.random() * 54,
    alpha: 0.18 + Math.random() * 0.62,
    phase: Math.random() * Math.PI * 2,
    wave: 4 + Math.random() * 11,
    accent: Math.floor(Math.random() * 4),
    trail: Math.random(),
    mark: Math.random()
  }
}

function rebuildParticles() {
  particles = Array.from({ length: particleCount() }, () => makeParticle(true))
}

function syncTheme() {
  dark = document.documentElement.classList.contains('dark')
}

function resize() {
  if (!root.value || !canvas.value) return

  const rect = root.value.getBoundingClientRect()
  width = Math.max(1, Math.round(rect.width))
  height = Math.max(1, Math.round(rect.height))
  dpr = Math.min(window.devicePixelRatio || 1, 2)

  canvas.value.width = Math.round(width * dpr)
  canvas.value.height = Math.round(height * dpr)
  canvas.value.style.width = `${width}px`
  canvas.value.style.height = `${height}px`

  ctx = canvas.value.getContext('2d')
  ctx?.setTransform(dpr, 0, 0, dpr, 0, 0)
  rebuildParticles()
  draw(0, true)
}

function streamY(p: Particle) {
  const center = height * 0.48
  const progress = Math.max(0, Math.min(1, p.x / Math.max(1, width)))

  // The stream narrows around the focal mark and opens again at both edges.
  // This produces the same kind of directional corridor found in the reference
  // without relying on a random floating-particle field.
  const pinch = 0.48 + Math.abs(progress - 0.54) * 0.72
  const lane = p.lane * height * 0.43 * pinch
  const wave = Math.sin(progress * 8.2 + p.phase) * p.wave * (0.28 + p.depth * 0.62)
  const perspectiveLift = (1 - p.depth) * p.lane * 8

  return center + lane + wave + perspectiveLift + scrollOffset * (0.012 + p.depth * 0.022)
}

function drawBrandGlyph(x: number, y: number, size: number, color: string, alpha: number) {
  if (!ctx || size < 6) return

  const cell = Math.max(1.25, size * 0.19)
  const pattern = [
    [0, 0], [4, 0],
    [0, 1], [1, 1], [3, 1], [4, 1],
    [0, 2], [2, 2], [4, 2],
    [0, 3], [4, 3],
    [0, 4], [4, 4]
  ]

  ctx.save()
  ctx.globalAlpha = alpha
  ctx.fillStyle = color
  for (const [cx, cy] of pattern) {
    ctx.fillRect(
      x + (cx - 2) * cell,
      y + (cy - 2) * cell,
      Math.max(1, cell - 0.45),
      Math.max(1, cell - 0.45)
    )
  }
  ctx.restore()
}

function draw(time: number, forceStatic = false) {
  if (!ctx || !width || !height) return

  const delta = lastTime ? Math.min(0.034, (time - lastTime) / 1000) : 0.016
  lastTime = time

  pointer.x += (pointer.targetX - pointer.x) * 0.055
  pointer.y += (pointer.targetY - pointer.y) * 0.055

  ctx.clearRect(0, 0, width, height)

  const palette = dark ? darkPalette : lightPalette
  const base = dark ? '235, 232, 242' : '64, 55, 75'

  const centerGlow = ctx.createRadialGradient(
    width * 0.61,
    height * 0.48,
    0,
    width * 0.61,
    height * 0.48,
    Math.max(width, height) * 0.44
  )
  centerGlow.addColorStop(0, dark ? 'rgba(233,126,179,0.12)' : 'rgba(233,126,179,0.10)')
  centerGlow.addColorStop(0.48, dark ? 'rgba(138,102,194,0.065)' : 'rgba(138,102,194,0.05)')
  centerGlow.addColorStop(1, 'rgba(0,0,0,0)')
  ctx.fillStyle = centerGlow
  ctx.fillRect(0, 0, width, height)

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i]

    if (!forceStatic && !reducedMotion) {
      p.x -= p.speed * (0.48 + p.depth * 1.24) * delta
      if (p.x < -70) particles[i] = makeParticle(false)
    }

    const y = streamY(p)
    const size = p.size * (0.55 + p.depth * 0.92)
    const focusDistance = Math.abs(p.x / Math.max(1, width) - 0.61)
    const focusBoost = Math.max(0, 1 - focusDistance * 3.1)
    const alpha = Math.min(0.92, p.alpha * (0.4 + p.depth * 0.78) + focusBoost * 0.12)
    const px = p.x + pointer.x * (2 + p.depth * 7)
    const py = y + pointer.y * (1.5 + p.depth * 5)

    if (p.trail > 0.76 && size > 3.2) {
      const trailLength = 8 + p.trail * 20 * (0.45 + p.depth)
      const gradient = ctx.createLinearGradient(px + size, py, px + size + trailLength, py)
      gradient.addColorStop(0, `rgba(${base},${alpha * 0.17})`)
      gradient.addColorStop(1, `rgba(${base},0)`)
      ctx.fillStyle = gradient
      ctx.fillRect(px + size * 0.55, py - 0.55, trailLength, 1.1)
    }

    if (p.mark > 0.974 && p.depth > 0.62) {
      drawBrandGlyph(px, py, size * 2.25, palette[p.accent], Math.min(0.88, alpha + 0.2))
      continue
    }

    ctx.globalAlpha = alpha
    ctx.fillStyle = p.mark > 0.78 ? palette[p.accent] : `rgba(${base},0.88)`
    ctx.fillRect(px - size / 2, py - size / 2, size, size)

    if (p.depth > 0.73 && p.mark > 0.84) {
      ctx.globalAlpha = alpha * 0.22
      ctx.fillStyle = palette[p.accent]
      ctx.fillRect(px - size * 1.15, py - size * 1.15, size * 2.3, size * 2.3)
    }
  }

  ctx.globalAlpha = 1

  if (!forceStatic && running && !reducedMotion) {
    frame = requestAnimationFrame(draw)
  }
}

function start() {
  if (reducedMotion || frame || !running) return
  lastTime = performance.now()
  frame = requestAnimationFrame(draw)
}

function stop() {
  if (frame) cancelAnimationFrame(frame)
  frame = 0
}

function onPointerMove(event: PointerEvent) {
  if (!root.value) return
  const rect = root.value.getBoundingClientRect()
  pointer.targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 2
  pointer.targetY = ((event.clientY - rect.top) / rect.height - 0.5) * 2
}

function onPointerLeave() {
  pointer.targetX = 0
  pointer.targetY = 0
}

function onScroll() {
  scrollOffset = window.scrollY
}

onMounted(() => {
  reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  syncTheme()

  resizeObserver = new ResizeObserver(resize)
  if (root.value) resizeObserver.observe(root.value)

  visibilityObserver = new IntersectionObserver(entries => {
    running = entries.some(entry => entry.isIntersecting)
    if (running) start()
    else stop()
  }, { rootMargin: '100px' })
  if (root.value) visibilityObserver.observe(root.value)

  themeObserver = new MutationObserver(() => {
    syncTheme()
    if (reducedMotion) draw(performance.now(), true)
  })
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
  resize()

  if (!reducedMotion) start()
})

onBeforeUnmount(() => {
  stop()
  resizeObserver?.disconnect()
  visibilityObserver?.disconnect()
  themeObserver?.disconnect()
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.mzk-particle-hero {
  position: relative;
  width: min(620px, 48vw);
  height: 430px;
  margin: 0 auto;
  overflow: visible;
  user-select: none;
  pointer-events: auto;
  isolation: isolate;
}

.mzk-particle-canvas {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  filter: saturate(0.96);
}

.mzk-particle-focus {
  position: absolute;
  left: 61%;
  top: 48%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.mzk-particle-mark {
  position: relative;
  width: 86px;
  height: 86px;
  display: grid;
  place-items: center;
  border: 1px solid color-mix(in srgb, var(--vp-c-brand-1) 38%, transparent);
  border-radius: 18px;
  background: color-mix(in srgb, var(--vp-c-bg) 76%, transparent);
  box-shadow:
    0 18px 50px rgba(88, 56, 96, 0.12),
    0 0 42px rgba(233, 126, 179, 0.14),
    inset 0 1px 0 rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.mzk-particle-mark::before,
.mzk-particle-mark::after {
  content: '';
  position: absolute;
  width: 5px;
  height: 5px;
  background: var(--vp-c-brand-1);
  opacity: 0.66;
}

.mzk-particle-mark::before {
  left: -13px;
  top: 19px;
  box-shadow: -12px 17px 0 rgba(138, 102, 194, 0.72), 9px 48px 0 rgba(111, 142, 235, 0.58);
}

.mzk-particle-mark::after {
  right: -16px;
  bottom: 16px;
  box-shadow: 11px -24px 0 rgba(102, 183, 201, 0.7), -3px -50px 0 rgba(233, 126,179, 0.55);
}

.mzk-particle-mark img {
  width: 72px;
  height: 72px;
  display: block;
  object-fit: cover;
  border-radius: 14px;
}

.mzk-particle-focus-line {
  width: 1px;
  height: 28px;
  margin-top: 9px;
  background: linear-gradient(to bottom, rgba(233, 126, 179, 0.52), transparent);
}

.mzk-particle-focus-label {
  margin-top: -1px;
  color: var(--vp-c-text-3);
  font-size: 9px;
  line-height: 1;
  font-weight: 650;
  letter-spacing: 0.18em;
  white-space: nowrap;
}

.mzk-particle-quote {
  position: absolute;
  left: 61%;
  bottom: 25px;
  width: min(290px, 70%);
  transform: translateX(-50%);
  text-align: center;
  color: var(--vp-c-text-3);
  font-size: 12px;
  font-style: italic;
  font-weight: 500;
  line-height: 1.55;
  opacity: 0.8;
}

:global(.dark) .mzk-particle-mark {
  background: color-mix(in srgb, var(--vp-c-bg) 68%, transparent);
  box-shadow:
    0 18px 55px rgba(0, 0, 0, 0.34),
    0 0 46px rgba(233, 126, 179, 0.14),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

@media (max-width: 960px) {
  .mzk-particle-hero {
    width: min(560px, 94vw);
    height: 360px;
  }

  .mzk-particle-focus,
  .mzk-particle-quote {
    left: 58%;
  }
}

@media (max-width: 640px) {
  .mzk-particle-hero {
    width: min(420px, 100vw);
    height: 300px;
    margin-top: 8px;
  }

  .mzk-particle-focus,
  .mzk-particle-quote {
    left: 52%;
  }

  .mzk-particle-mark {
    width: 70px;
    height: 70px;
    border-radius: 15px;
  }

  .mzk-particle-mark img {
    width: 58px;
    height: 58px;
    border-radius: 11px;
  }

  .mzk-particle-quote {
    bottom: 12px;
    font-size: 11px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .mzk-particle-canvas {
    filter: none;
  }
}
</style>