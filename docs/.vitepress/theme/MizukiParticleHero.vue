<template>
  <div
    ref="root"
    class="mzk-particle-hero"
    aria-hidden="true"
    @pointermove="onPointerMove"
    @pointerleave="onPointerLeave"
  >
    <canvas ref="canvas" class="mzk-particle-canvas" />
    <div class="mzk-particle-caption">AMIA / MIZUKI</div>
    <div v-if="quote" class="mzk-particle-quote" v-html="quote" />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

defineProps<{
  quote?: string
}>()

type RGB = [number, number, number]

interface StreamParticle {
  progress: number
  lane: number
  depth: number
  size: number
  speed: number
  alpha: number
  phase: number
  wobble: number
  tint: number
  trail: number
  shape: number
  logoIndex: number
}

interface LogoPoint {
  x: number
  y: number
  color: RGB
  alpha: number
  phase: number
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
let particles: StreamParticle[] = []
let logoPoints: LogoPoint[] = []
let running = true
let reducedMotion = false
let dark = false
let scrollBoost = 0
let lastScrollY = 0
let logoImage: HTMLImageElement | null = null

const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 }

const lightPalette: RGB[] = [
  [233, 126, 179],
  [138, 102, 194],
  [111, 142, 235],
  [102, 183, 201]
]

const darkPalette: RGB[] = [
  [241, 155, 198],
  [169, 138, 222],
  [141, 168, 247],
  [127, 209, 216]
]

function particleCount() {
  if (width < 420) return 150
  if (width < 560) return 210
  return 320
}

function makeParticle(initial = true): StreamParticle {
  const depth = 0.08 + Math.random() * 0.92
  const laneSign = Math.random() < 0.5 ? -1 : 1
  const logoIndex = Math.random() < 0.62 && logoPoints.length
    ? Math.floor(Math.random() * logoPoints.length)
    : -1

  return {
    progress: initial ? Math.random() : -(Math.random() * 0.08),
    lane: laneSign * Math.pow(Math.random(), 0.72),
    depth,
    size: 1.5 + Math.random() * 4.8,
    speed: 58 + Math.random() * 96,
    alpha: 0.22 + Math.random() * 0.62,
    phase: Math.random() * Math.PI * 2,
    wobble: 1.5 + Math.random() * 8.5,
    tint: Math.floor(Math.random() * 4),
    trail: Math.random(),
    shape: Math.random(),
    logoIndex
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
  return height * 0.47
}

function logoScale() {
  return Math.max(68, Math.min(110, height * 0.28, width * 0.2))
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

  if (logoImage?.complete) buildLogoPoints(logoImage)
  rebuildParticles()
  draw(performance.now(), true)
}

function buildLogoPoints(image: HTMLImageElement) {
  const side = 96
  const sampleStep = 6
  const offscreen = document.createElement('canvas')
  offscreen.width = side
  offscreen.height = side
  const offctx = offscreen.getContext('2d', { willReadFrequently: true })
  if (!offctx) return

  offctx.clearRect(0, 0, side, side)
  offctx.drawImage(image, 0, 0, side, side)
  const pixels = offctx.getImageData(0, 0, side, side).data
  const next: LogoPoint[] = []

  for (let y = sampleStep / 2; y < side; y += sampleStep) {
    for (let x = sampleStep / 2; x < side; x += sampleStep) {
      const nx = x / side - 0.5
      const ny = y / side - 0.5

      // Keep the sampled avatar as a rounded mark rather than a rectangular bitmap.
      const cornerX = Math.max(0, Math.abs(nx) - 0.33)
      const cornerY = Math.max(0, Math.abs(ny) - 0.33)
      if (Math.hypot(cornerX, cornerY) > 0.16) continue

      const px = Math.min(side - 1, Math.floor(x))
      const py = Math.min(side - 1, Math.floor(y))
      const offset = (py * side + px) * 4
      const sourceAlpha = pixels[offset + 3] / 255
      if (sourceAlpha < 0.08) continue

      next.push({
        x: nx,
        y: ny,
        color: [pixels[offset], pixels[offset + 1], pixels[offset + 2]],
        alpha: 0.46 + sourceAlpha * 0.5,
        phase: Math.random() * Math.PI * 2
      })
    }
  }

  logoPoints = next

  // Existing particles may have been created before the image was ready.
  for (const p of particles) {
    if (p.logoIndex < 0 && Math.random() < 0.62 && logoPoints.length) {
      p.logoIndex = Math.floor(Math.random() * logoPoints.length)
    }
  }
}

function rgb(color: RGB, alpha = 1) {
  return `rgba(${color[0]},${color[1]},${color[2]},${alpha})`
}

function edgeFade(x: number) {
  const edge = Math.max(24, width * 0.075)
  return Math.max(0, Math.min(1, x / edge, (width - x) / edge))
}

function streamPosition(p: StreamParticle, time: number) {
  const margin = Math.max(80, width * 0.12)
  const span = width + margin * 2
  const rawX = width + margin - p.progress * span
  const fx = focusX()
  const fy = focusY()
  const relative = (rawX - fx) / Math.max(1, width * 0.19)
  const focusPull = Math.exp(-(relative * relative))
  const spread = height * (0.39 + 0.09 * (1 - p.depth))
  const laneY = fy + p.lane * spread * (1 - focusPull * 0.7)
  const wobble = Math.sin(time * 0.0013 + p.phase + p.progress * 10) * p.wobble * (0.3 + p.depth * 0.7)

  let x = rawX
  let y = laneY + wobble
  let capture = 0

  if (p.logoIndex >= 0 && logoPoints.length) {
    const point = logoPoints[p.logoIndex % logoPoints.length]
    const scale = logoScale()
    const targetX = fx + point.x * scale
    const targetY = fy + point.y * scale
    capture = focusPull * (0.58 + p.depth * 0.26)

    // Particles are temporarily caught by the mark, then released and continue left.
    // This creates a visible right-to-left stream that actually participates in the logo.
    x += (targetX - rawX) * capture
    y += (targetY - y) * Math.min(0.9, capture * 1.14)
  }

  return { x, y, capture }
}

function drawAmbient() {
  if (!ctx) return

  const fx = focusX()
  const fy = focusY()
  const radius = Math.max(width, height) * 0.42
  const glow = ctx.createRadialGradient(fx, fy, 0, fx, fy, radius)
  glow.addColorStop(0, dark ? 'rgba(233,126,179,0.105)' : 'rgba(233,126,179,0.085)')
  glow.addColorStop(0.38, dark ? 'rgba(138,102,194,0.06)' : 'rgba(138,102,194,0.045)')
  glow.addColorStop(1, 'rgba(0,0,0,0)')
  ctx.fillStyle = glow
  ctx.fillRect(0, 0, width, height)
}

function drawLogoCloud(time: number) {
  if (!ctx || !logoPoints.length) return

  const fx = focusX() + pointer.x * 2.5
  const fy = focusY() + pointer.y * 2
  const scale = logoScale()
  const cycle = (time * 0.00011) % 1
  const sweep = 1 - cycle

  for (const point of logoPoints) {
    const pxNorm = point.x + 0.5
    const dist = Math.abs(pxNorm - sweep)
    const wrappedDist = Math.min(dist, 1 - dist)
    const sweepHit = Math.max(0, 1 - wrappedDist / 0.12)
    const shimmer = 0.86 + Math.sin(time * 0.002 + point.phase) * 0.14
    const displacedX = point.x * scale - sweepHit * (4 + 12 * Math.abs(point.y))
    const displacedY = point.y * scale + Math.sin(time * 0.0017 + point.phase) * 0.8
    const size = 1.7 + sweepHit * 1.2
    const alpha = point.alpha * shimmer * (1 - sweepHit * 0.28)

    ctx.globalAlpha = alpha
    ctx.fillStyle = rgb(point.color)
    ctx.fillRect(fx + displacedX - size / 2, fy + displacedY - size / 2, size, size)

    if (sweepHit > 0.34) {
      const trail = 4 + sweepHit * 14
      const gradient = ctx.createLinearGradient(fx + displacedX, 0, fx + displacedX + trail, 0)
      gradient.addColorStop(0, rgb(point.color, alpha * 0.24))
      gradient.addColorStop(1, rgb(point.color, 0))
      ctx.globalAlpha = 1
      ctx.fillStyle = gradient
      ctx.fillRect(fx + displacedX + 1, fy + displacedY - 0.45, trail, 0.9)
    }
  }

  ctx.globalAlpha = 1
}

function drawParticle(p: StreamParticle, time: number) {
  if (!ctx) return

  const palette = dark ? darkPalette : lightPalette
  const neutral: RGB = dark ? [225, 221, 233] : [67, 59, 77]
  const { x, y, capture } = streamPosition(p, time)
  const parallaxX = pointer.x * (1.5 + p.depth * 5.5)
  const parallaxY = pointer.y * (1 + p.depth * 4.2)
  const px = x + parallaxX
  const py = y + parallaxY
  const size = p.size * (0.52 + p.depth * 1.08)
  const fade = edgeFade(px)
  const focusBoost = 1 + capture * 0.25
  const alpha = Math.min(0.94, p.alpha * (0.45 + p.depth * 0.72) * fade * focusBoost)
  const color = p.shape > 0.68 ? palette[p.tint] : neutral

  if (alpha <= 0.01) return

  if (p.trail > 0.48 && size > 2.2) {
    const trailLength = 10 + p.trail * 38 * (0.38 + p.depth)
    const gradient = ctx.createLinearGradient(px + size, py, px + size + trailLength, py)
    gradient.addColorStop(0, rgb(color, alpha * 0.2))
    gradient.addColorStop(1, rgb(color, 0))
    ctx.globalAlpha = 1
    ctx.fillStyle = gradient
    ctx.fillRect(px + size * 0.45, py - 0.55, trailLength, 1.1)
  }

  ctx.globalAlpha = alpha
  ctx.fillStyle = rgb(color)

  if (p.shape > 0.9) {
    ctx.fillRect(px - size * 0.85, py - size * 0.28, size * 1.7, Math.max(1, size * 0.56))
  } else {
    ctx.fillRect(px - size / 2, py - size / 2, size, size)
  }

  if (p.depth > 0.78 && p.shape > 0.76) {
    ctx.globalAlpha = alpha * 0.16
    ctx.fillStyle = rgb(palette[p.tint])
    ctx.fillRect(px - size * 1.35, py - size * 1.35, size * 2.7, size * 2.7)
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

  const margin = Math.max(80, width * 0.12)
  const span = width + margin * 2

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i]

    if (!forceStatic && !reducedMotion) {
      const velocity = p.speed * (0.5 + p.depth * 1.18) + scrollBoost * (0.28 + p.depth * 0.72)
      p.progress += velocity * delta / span
      if (p.progress > 1.02) particles[i] = makeParticle(false)
    }

    drawParticle(particles[i], time)
  }

  // Draw the sampled avatar last so the stream converges into a readable particle mark.
  drawLogoCloud(time)

  scrollBoost *= Math.exp(-delta * 4.4)

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
  const nextY = window.scrollY
  const delta = Math.abs(nextY - lastScrollY)
  lastScrollY = nextY
  scrollBoost = Math.min(260, scrollBoost + delta * 1.45)
}

onMounted(() => {
  reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  syncTheme()
  lastScrollY = window.scrollY

  logoImage = new Image()
  logoImage.decoding = 'async'
  logoImage.src = '/Picture/avatar.webp?v=20260902a'
  logoImage.onload = () => {
    if (!logoImage) return
    buildLogoPoints(logoImage)
    rebuildParticles()
    draw(performance.now(), reducedMotion)
  }

  resizeObserver = new ResizeObserver(resize)
  if (root.value) resizeObserver.observe(root.value)

  visibilityObserver = new IntersectionObserver(entries => {
    running = entries.some(entry => entry.isIntersecting)
    if (running) start()
    else stop()
  }, { rootMargin: '120px' })
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
  if (logoImage) logoImage.onload = null
})
</script>

<style scoped>
.mzk-particle-hero {
  position: relative;
  width: min(680px, 52vw);
  height: 430px;
  margin: 0 auto;
  overflow: visible;
  isolation: isolate;
  user-select: none;
  pointer-events: auto;
}

/* Disable the old dotted fallback field. The new canvas is intentionally directional. */
.mzk-particle-hero::before {
  content: none !important;
  background: none !important;
}

.mzk-particle-canvas {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  filter: saturate(1.08) contrast(1.04);
}

.mzk-particle-caption {
  position: absolute;
  left: 61%;
  top: calc(47% + 72px);
  transform: translateX(-50%);
  color: var(--vp-c-text-3);
  font-size: 9px;
  line-height: 1;
  font-weight: 650;
  letter-spacing: 0.2em;
  white-space: nowrap;
  opacity: 0.72;
  pointer-events: none;
}

.mzk-particle-quote {
  position: absolute;
  left: 61%;
  bottom: 18px;
  width: min(300px, 72%);
  transform: translateX(-50%);
  text-align: center;
  color: var(--vp-c-text-3);
  font-size: 11px;
  font-style: italic;
  font-weight: 500;
  line-height: 1.55;
  opacity: 0.68;
  pointer-events: none;
}

@media (max-width: 959px) {
  .mzk-particle-hero {
    width: min(620px, 94vw);
    height: 330px;
  }

  .mzk-particle-caption,
  .mzk-particle-quote {
    left: 50%;
  }

  .mzk-particle-caption {
    top: calc(47% + 62px);
  }
}

@media (max-width: 640px) {
  .mzk-particle-hero {
    width: min(420px, calc(100vw - 24px));
    height: 270px;
    overflow: hidden;
  }

  .mzk-particle-canvas {
    filter: saturate(1.14) contrast(1.06);
  }

  .mzk-particle-caption {
    top: calc(47% + 54px);
    font-size: 8px;
  }

  .mzk-particle-quote {
    bottom: 6px;
    width: 84%;
    font-size: 10px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .mzk-particle-canvas {
    filter: none;
  }
}
</style>