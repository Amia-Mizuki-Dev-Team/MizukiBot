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
          src="/Picture/avatar.webp?v=20260909a"
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

defineProps<{
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
  shape: number
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
let scrollBoost = 0
let lastScrollY = 0

const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 }

const lightPalette = ['#E97EB3', '#8A66C2', '#6F8EEB', '#66B7C9']
const darkPalette = ['#F19BC6', '#A98ADE', '#8DA8F7', '#7FD1D8']

function particleCount() {
  if (width < 420) return 118
  if (width < 560) return 162
  return 248
}

function makeParticle(initial = true): Particle {
  const depth = 0.1 + Math.random() * 0.9
  const laneSign = Math.random() < 0.5 ? -1 : 1

  return {
    x: initial ? Math.random() * (width + 160) - 80 : width + 50 + Math.random() * 150,
    lane: laneSign * Math.pow(Math.random(), 0.74),
    depth,
    size: 1.8 + Math.random() * 5.4,
    speed: 46 + Math.random() * 92,
    alpha: 0.18 + Math.random() * 0.62,
    phase: Math.random() * Math.PI * 2,
    wave: 2 + Math.random() * 9,
    accent: Math.floor(Math.random() * 4),
    trail: Math.random(),
    shape: Math.random()
  }
}

function rebuildParticles() {
  particles = Array.from({ length: particleCount() }, () => makeParticle(true))
}

function syncTheme() {
  dark = document.documentElement.classList.contains('dark')
}

function focusX() {
  return width < 960 ? width * 0.5 : width * 0.61
}

function focusY() {
  return height * 0.48
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
  draw(performance.now(), true)
}

function streamY(p: Particle, time: number) {
  const fx = focusX()
  const fy = focusY()
  const distance = Math.abs(p.x - fx) / Math.max(1, width * 0.55)
  const pinch = 0.34 + Math.min(1, distance) * 0.72
  const lane = p.lane * height * 0.43 * pinch
  const wave = Math.sin(time * 0.00125 + p.phase + p.x * 0.008) * p.wave * (0.35 + p.depth * 0.65)

  return fy + lane + wave
}

function edgeFade(x: number) {
  const edge = Math.max(28, width * 0.08)
  return Math.max(0, Math.min(1, x / edge, (width - x) / edge))
}

function drawAmbient() {
  if (!ctx) return

  const fx = focusX()
  const fy = focusY()
  const radius = Math.max(width, height) * 0.44
  const glow = ctx.createRadialGradient(fx, fy, 0, fx, fy, radius)

  glow.addColorStop(0, dark ? 'rgba(233,126,179,0.11)' : 'rgba(233,126,179,0.085)')
  glow.addColorStop(0.44, dark ? 'rgba(138,102,194,0.055)' : 'rgba(138,102,194,0.04)')
  glow.addColorStop(1, 'rgba(0,0,0,0)')

  ctx.fillStyle = glow
  ctx.fillRect(0, 0, width, height)
}

function drawParticle(p: Particle, time: number) {
  if (!ctx) return

  const palette = dark ? darkPalette : lightPalette
  const base = dark ? '229,225,235' : '67,59,77'
  const y = streamY(p, time)
  const px = p.x + pointer.x * (1.5 + p.depth * 6)
  const py = y + pointer.y * (1 + p.depth * 4.5)
  const size = p.size * (0.5 + p.depth * 1.05)
  const fade = edgeFade(px)
  const alpha = Math.min(0.94, p.alpha * (0.42 + p.depth * 0.78) * fade)

  if (alpha <= 0.01) return

  const accent = p.shape > 0.69
  const color = accent ? palette[p.accent] : `rgba(${base},0.9)`

  if (p.trail > 0.42 && size > 2) {
    const trailLength = 12 + p.trail * 48 * (0.42 + p.depth)
    const gradient = ctx.createLinearGradient(px + size * 0.4, py, px + size + trailLength, py)
    gradient.addColorStop(0, accent ? `${color}42` : `rgba(${base},${alpha * 0.2})`)
    gradient.addColorStop(1, 'rgba(0,0,0,0)')
    ctx.globalAlpha = 1
    ctx.fillStyle = gradient
    ctx.fillRect(px + size * 0.35, py - 0.55, trailLength, 1.1)
  }

  ctx.globalAlpha = alpha
  ctx.fillStyle = color

  if (p.shape > 0.91) {
    ctx.fillRect(px - size, py - size * 0.28, size * 2, Math.max(1, size * 0.56))
  } else {
    ctx.fillRect(px - size / 2, py - size / 2, size, size)
  }

  if (p.depth > 0.78 && accent) {
    ctx.globalAlpha = alpha * 0.15
    ctx.fillStyle = palette[p.accent]
    ctx.fillRect(px - size * 1.3, py - size * 1.3, size * 2.6, size * 2.6)
  }

  ctx.globalAlpha = 1
}

function draw(time: number, forceStatic = false) {
  if (!ctx || !width || !height) return

  const delta = lastTime ? Math.min(0.034, Math.max(0.001, (time - lastTime) / 1000)) : 0.016
  lastTime = time

  pointer.x += (pointer.targetX - pointer.x) * 0.055
  pointer.y += (pointer.targetY - pointer.y) * 0.055

  ctx.clearRect(0, 0, width, height)
  drawAmbient()

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i]

    if (!forceStatic && !reducedMotion) {
      const velocity = p.speed * (0.48 + p.depth * 1.22) + scrollBoost * (0.22 + p.depth * 0.5)
      p.x -= velocity * delta
      if (p.x < -100) particles[i] = makeParticle(false)
    }

    drawParticle(particles[i], time)
  }

  scrollBoost *= Math.exp(-delta * 4.8)

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
  const current = window.scrollY
  scrollBoost = Math.min(260, scrollBoost + Math.abs(current - lastScrollY) * 5.5)
  lastScrollY = current
}

onMounted(() => {
  reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  syncTheme()
  lastScrollY = window.scrollY

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
  z-index: 0;
  display: block;
  width: 100%;
  height: 100%;
  filter: saturate(1.04);
}

.mzk-particle-focus {
  position: absolute;
  left: 61%;
  top: 48%;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.mzk-particle-mark {
  position: relative;
  width: 86px;
  height: 86px;
  z-index: 4;
  display: grid;
  place-items: center;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--vp-c-brand-1) 38%, transparent);
  border-radius: 18px;
  background: color-mix(in srgb, var(--vp-c-bg) 82%, transparent);
  box-shadow:
    0 18px 50px rgba(88, 56, 96, 0.14),
    0 0 44px rgba(233, 126, 179, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.mzk-particle-mark img {
  position: relative;
  z-index: 5;
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
  background: linear-gradient(to bottom, rgba(233, 126,179,0.52), transparent);
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
  z-index: 3;
  width: min(290px, 70%);
  transform: translateX(-50%);
  text-align: center;
  color: var(--vp-c-text-3);
  font-size: 12px;
  font-style: italic;
  font-weight: 500;
  line-height: 1.55;
  opacity: 0.8;
  pointer-events: none;
}

:global(.dark) .mzk-particle-mark {
  background: color-mix(in srgb, var(--vp-c-bg) 76%, transparent);
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
    left: 50%;
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
    left: 50%;
  }

  .mzk-particle-mark {
    width: 72px;
    height: 72px;
    border-radius: 15px;
  }

  .mzk-particle-mark img {
    width: 60px;
    height: 60px;
    border-radius: 12px;
  }

  .mzk-particle-quote {
    bottom: 10px;
    width: 82%;
    font-size: 10px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .mzk-particle-canvas {
    filter: none;
  }
}
</style>
