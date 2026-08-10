<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

type SegmentType = 'active' | 'rollout' | 'semi' | 'phase1' | 'phase4' | 'planning'

type Segment = {
  start: string
  end?: string
  untilToday?: boolean
  type: SegmentType
  label: string
}

type Milestone = {
  date: string
  label: string
  kind?: 'eol' | 'info' | 'planned'
}

type Product = {
  name: string
  note?: string
  segments: Segment[]
  milestones?: Milestone[]
}

type Group = {
  name: string
  products: Product[]
}

const timelineStart = new Date('2022-01-01T00:00:00')
const timelineEnd = new Date('2031-01-01T00:00:00')
const years = Array.from({ length: 9 }, (_, index) => 2022 + index)
const now = ref<Date | null>(null)

onMounted(() => {
  now.value = new Date()
})

const groups: Group[] = [
  {
    name: 'HongXing Online',
    products: [
      {
        name: 'HongXing Online 1',
        segments: [
          { start: '2022-01-01', end: '2022-12-31', type: 'active', label: '运行' },
          { start: '2023-01-01', end: '2026-12-31', type: 'semi', label: '半关闭状态' }
        ],
        milestones: [
          { date: '2026-12-31', label: 'EOL 2026', kind: 'eol' }
        ]
      },
      {
        name: 'HongXing Online 2',
        segments: [
          { start: '2026-01-01', end: '2027-12-31', type: 'rollout', label: '正在发布' }
        ],
        milestones: [
          { date: '2027-12-31', label: '预计完成 2027', kind: 'planned' },
          { date: '2030-12-31', label: '预计 EOL 2030', kind: 'planned' }
        ]
      }
    ]
  },
  {
    name: 'HongXingOS',
    products: [
      {
        name: 'HongXingOS 1',
        segments: [
          { start: '2022-01-01', end: '2023-12-31', type: 'active', label: '2022–2023' }
        ],
        milestones: [{ date: '2023-12-31', label: 'EOL 2023', kind: 'eol' }]
      },
      {
        name: 'HongXingOS 2',
        segments: [
          { start: '2023-01-01', end: '2024-12-31', type: 'active', label: '2023–2024' }
        ],
        milestones: [{ date: '2024-12-31', label: 'EOL 2024', kind: 'eol' }]
      },
      {
        name: 'HongXingOS 3',
        segments: [
          { start: '2024-01-01', end: '2025-12-31', type: 'active', label: '2024–2025' }
        ],
        milestones: [{ date: '2025-12-31', label: 'EOL 2025', kind: 'eol' }]
      },
      {
        name: 'HongXingOS 4',
        segments: [
          { start: '2024-01-01', end: '2025-12-31', type: 'active', label: '已发布' },
          { start: '2026-01-01', end: '2027-12-31', type: 'phase4', label: '第四生命周期' }
        ],
        milestones: [{ date: '2027-12-31', label: '预计 EOL 2027', kind: 'planned' }]
      },
      {
        name: 'HongXingOS 5',
        segments: [
          { start: '2024-01-01', end: '2024-12-31', type: 'active', label: '已发布' },
          { start: '2025-01-01', end: '2026-12-31', type: 'phase4', label: '第四生命周期' }
        ],
        milestones: [{ date: '2026-12-31', label: '预计 EOL 2026', kind: 'planned' }]
      },
      {
        name: 'HongXingOS 6',
        segments: [
          { start: '2025-01-01', end: '2025-12-31', type: 'active', label: '已发布' },
          { start: '2026-01-01', untilToday: true, type: 'phase1', label: '第一生命周期' }
        ],
        milestones: [{ date: '2029-12-31', label: '预计 EOL 2029', kind: 'planned' }]
      }
    ]
  },
  {
    name: 'HongXing Firmware',
    products: [
      {
        name: 'HongXing o1 Firmware',
        segments: [
          { start: '2022-01-01', end: '2026-12-31', type: 'active', label: '2022–2026' }
        ],
        milestones: [{ date: '2026-12-31', label: 'EOL 2026', kind: 'eol' }]
      },
      {
        name: 'HongXing o2 Firmware',
        segments: [
          { start: '2026-01-01', end: '2027-12-31', type: 'active', label: '维护中' }
        ],
        milestones: [{ date: '2027-12-31', label: 'EOL 2027', kind: 'planned' }]
      },
      {
        name: 'HongXing o3 Firmware',
        segments: [
          { start: '2026-01-01', end: '2026-08-12', type: 'rollout', label: '正在推送' }
        ],
        milestones: [
          { date: '2026-08-12', label: '全版本推送 08-12', kind: 'info' },
          { date: '2030-12-31', label: '预计维护至 2030', kind: 'planned' }
        ]
      }
    ]
  },
  {
    name: 'HongXing AuthLit',
    products: [
      {
        name: 'HongXing AuthLit 3',
        segments: [
          { start: '2025-01-01', end: '2025-12-31', type: 'active', label: '2025' }
        ],
        milestones: [{ date: '2025-12-31', label: 'EOL 2025', kind: 'eol' }]
      },
      {
        name: 'HongXing AuthLit 4',
        segments: [
          { start: '2026-01-01', end: '2027-12-31', type: 'active', label: '已发布' }
        ],
        milestones: [{ date: '2027-12-31', label: '预计 EOL 2027', kind: 'planned' }]
      },
      {
        name: 'HongXing AuthLit 5',
        segments: [
          { start: '2026-01-01', untilToday: true, type: 'planning', label: '规划中' }
        ]
      }
    ]
  },
  {
    name: 'Other Services',
    products: [
      {
        name: 'Nano Lab',
        note: 'AuthLit Series 轻量版',
        segments: [
          { start: '2022-01-01', untilToday: true, type: 'active', label: '已发布' }
        ]
      },
      {
        name: 'Ospalin',
        segments: [
          { start: '2026-01-01', end: '2026-12-31', type: 'active', label: '运营中' }
        ],
        milestones: [
          { date: '2026-12-31', label: '预计 2026 年底结束运营', kind: 'planned' }
        ]
      }
    ]
  }
]

function parseDate(value: string) {
  return new Date(`${value}T00:00:00`)
}

function clamp(value: number, min = 0, max = 100) {
  return Math.min(max, Math.max(min, value))
}

function percentForDate(date: Date) {
  const total = timelineEnd.getTime() - timelineStart.getTime()
  const offset = date.getTime() - timelineStart.getTime()
  return clamp((offset / total) * 100)
}

const todayPercent = computed(() => now.value ? percentForDate(now.value) : null)
const todayText = computed(() => {
  if (!now.value) return ''
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(now.value)
})

function segmentStyle(segment: Segment) {
  const left = percentForDate(parseDate(segment.start))
  const endDate = segment.untilToday && now.value
    ? now.value
    : parseDate(segment.end ?? segment.start)
  const right = percentForDate(endDate)

  return {
    left: `${left}%`,
    width: `${Math.max(0.9, right - left)}%`
  }
}

function milestoneStyle(milestone: Milestone) {
  return { left: `${percentForDate(parseDate(milestone.date))}%` }
}

function yearStyle(year: number) {
  const left = ((year - 2022) / 9) * 100
  return { left: `${left}%` }
}
</script>

<template>
  <div class="hx-life-card">
    <div class="hx-life-header">
      <div>
        <p class="hx-life-kicker">HongXing Lifecycle</p>
        <h3>HongXing 产品与服务生命周期</h3>
        <p class="hx-life-summary">
          时间范围覆盖 2022–2030。未规划的 HongXing Online 3 不显示；未知的未来生命周期阶段不补画。
        </p>
      </div>
      <div class="hx-life-legend" aria-label="生命周期图例">
        <span><i class="legend active"></i>已发布 / 运行</span>
        <span><i class="legend rollout"></i>正在发布</span>
        <span><i class="legend semi"></i>半关闭</span>
        <span><i class="legend phase1"></i>第一生命周期</span>
        <span><i class="legend phase4"></i>第四生命周期</span>
        <span><i class="legend planning"></i>规划中</span>
        <span><i class="legend eol"></i>EOL / 停止运营</span>
      </div>
    </div>

    <div class="hx-life-scroll" role="region" aria-label="HongXing 生命周期时间轴" tabindex="0">
      <div class="hx-life-chart">
        <div class="hx-axis-row">
          <div class="hx-name-axis">产品</div>
          <div class="hx-axis-track">
            <span
              v-for="year in years"
              :key="year"
              class="hx-year"
              :style="yearStyle(year)"
            >{{ year }}</span>
            <template v-if="todayPercent !== null">
              <span class="hx-today-label" :style="{ left: `${todayPercent}%` }">
                Today · {{ todayText }}
              </span>
              <span class="hx-today-line" :style="{ left: `${todayPercent}%` }"></span>
            </template>
          </div>
        </div>

        <template v-for="group in groups" :key="group.name">
          <div class="hx-group-row">{{ group.name }}</div>

          <div v-for="product in group.products" :key="product.name" class="hx-product-row">
            <div class="hx-product-name">
              <strong>{{ product.name }}</strong>
              <small v-if="product.note">{{ product.note }}</small>
            </div>

            <div class="hx-track">
              <span
                v-if="todayPercent !== null"
                class="hx-today-line hx-today-line--row"
                :style="{ left: `${todayPercent}%` }"
              ></span>

              <span
                v-for="(segment, index) in product.segments"
                :key="`${product.name}-${index}`"
                class="hx-segment"
                :class="`hx-segment--${segment.type}`"
                :style="segmentStyle(segment)"
                :title="segment.label"
              >
                <span>{{ segment.label }}</span>
              </span>

              <span
                v-for="(milestone, index) in product.milestones ?? []"
                :key="`${product.name}-milestone-${index}`"
                class="hx-milestone"
                :class="`hx-milestone--${milestone.kind ?? 'info'}`"
                :style="milestoneStyle(milestone)"
                :title="milestone.label"
              >
                <i></i>
                <em>{{ milestone.label }}</em>
              </span>
            </div>
          </div>
        </template>
      </div>
    </div>

    <div class="hx-life-footnote">
      <strong>显示规则：</strong>
      仅提供年份的节点按整年宽度定位，用于表达“发生于该年”，不代表 1 月 1 日或 12 月 31 日是正式生效日。
      已明确的预计完成、预计 EOL 与停止运营节点会保留，但不会为未知阶段推测日期。
    </div>
  </div>
</template>

<style scoped>
.hx-life-card {
  margin: 18px 0 28px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  background: var(--vp-c-bg);
  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.06);
}

.hx-life-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  border-bottom: 1px solid var(--vp-c-divider);
  background: linear-gradient(135deg, rgba(233, 126, 179, 0.08), rgba(138, 102, 194, 0.05));
}

.hx-life-kicker {
  margin: 0 0 4px;
  color: var(--vp-c-brand-1);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.hx-life-header h3 {
  margin: 0 !important;
  border: 0 !important;
  font-size: 18px !important;
}

.hx-life-summary {
  max-width: 620px;
  margin: 7px 0 0;
  color: var(--vp-c-text-2);
  font-size: 12px;
  line-height: 1.65;
}

.hx-life-legend {
  display: flex;
  max-width: 430px;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 7px 12px;
  color: var(--vp-c-text-2);
  font-size: 11px;
}

.hx-life-legend span {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  white-space: nowrap;
}

.legend {
  display: inline-block;
  width: 17px;
  height: 7px;
  border-radius: 999px;
}

.legend.active { background: #22a06b; }
.legend.rollout { background: #2563eb; }
.legend.semi { background: #64748b; }
.legend.phase1 { background: #10b981; }
.legend.phase4 { background: #f59e0b; }
.legend.planning { height: 9px; border: 1.5px solid #8b5cf6; background: transparent; }
.legend.eol { width: 8px; height: 8px; background: #ef4444; }

.hx-life-scroll {
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--vp-c-divider) transparent;
}

.hx-life-chart {
  min-width: 1180px;
}

.hx-axis-row,
.hx-product-row {
  display: grid;
  grid-template-columns: 230px minmax(950px, 1fr);
}

.hx-axis-row {
  min-height: 58px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.hx-name-axis,
.hx-product-name {
  position: sticky;
  left: 0;
  z-index: 5;
  border-right: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
}

.hx-name-axis {
  display: flex;
  align-items: center;
  padding: 0 16px;
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 800;
}

.hx-axis-track,
.hx-track {
  position: relative;
  background-image: repeating-linear-gradient(
    to right,
    transparent 0,
    transparent calc(11.111111% - 1px),
    var(--vp-c-divider) calc(11.111111% - 1px),
    var(--vp-c-divider) 11.111111%
  );
}

.hx-axis-track {
  min-height: 58px;
}

.hx-year {
  position: absolute;
  top: 31px;
  transform: translateX(7px);
  color: var(--vp-c-text-2);
  font-size: 11px;
  font-weight: 700;
}

.hx-today-label {
  position: absolute;
  top: 4px;
  z-index: 9;
  transform: translateX(-50%);
  padding: 3px 7px;
  border-radius: 999px;
  background: var(--vp-c-brand-1);
  color: #fff;
  font-size: 10px;
  font-weight: 800;
  white-space: nowrap;
}

.hx-today-line {
  position: absolute;
  z-index: 8;
  top: 24px;
  bottom: 0;
  width: 2px;
  transform: translateX(-1px);
  background: var(--vp-c-brand-1);
  opacity: 0.85;
  pointer-events: none;
}

.hx-today-line--row {
  top: 0;
  bottom: 0;
  z-index: 2;
  opacity: 0.55;
}

.hx-group-row {
  padding: 8px 16px;
  border-bottom: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.04em;
}

.hx-product-row {
  min-height: 54px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.hx-product-name {
  display: flex;
  min-width: 0;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 9px 14px 9px 16px;
}

.hx-product-name strong {
  overflow: hidden;
  color: var(--vp-c-text-1);
  font-size: 12px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.hx-product-name small {
  overflow: hidden;
  color: var(--vp-c-text-3);
  font-size: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.hx-track {
  min-height: 54px;
}

.hx-segment {
  position: absolute;
  z-index: 3;
  top: 50%;
  display: flex;
  min-width: 10px;
  height: 18px;
  align-items: center;
  transform: translateY(-50%);
  overflow: hidden;
  border-radius: 999px;
  box-shadow: 0 2px 5px rgba(15, 23, 42, 0.08);
}

.hx-segment > span {
  overflow: hidden;
  padding: 0 7px;
  color: #fff;
  font-size: 9px;
  font-weight: 800;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.hx-segment--active { background: #22a06b; }
.hx-segment--rollout { background: #2563eb; }
.hx-segment--semi { background: #64748b; }
.hx-segment--phase1 { background: #10b981; }
.hx-segment--phase4 { background: #f59e0b; }
.hx-segment--phase4 > span { color: #3b2b00; }
.hx-segment--planning {
  border: 1.5px solid #8b5cf6;
  background: var(--vp-c-bg);
  box-shadow: none;
}
.hx-segment--planning > span { color: #8b5cf6; }

.hx-milestone {
  position: absolute;
  z-index: 6;
  top: 50%;
  display: flex;
  align-items: center;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.hx-milestone i {
  width: 8px;
  height: 8px;
  flex: 0 0 auto;
  border: 2px solid var(--vp-c-bg);
  border-radius: 50%;
  box-shadow: 0 0 0 1px currentColor;
  background: currentColor;
}

.hx-milestone em {
  position: absolute;
  left: 10px;
  top: 7px;
  max-width: 132px;
  overflow: hidden;
  color: currentColor;
  font-size: 8px;
  font-style: normal;
  font-weight: 750;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.hx-milestone--eol { color: #ef4444; }
.hx-milestone--planned { color: #d97706; }
.hx-milestone--info { color: #7c3aed; }

.hx-life-footnote {
  padding: 12px 16px 14px;
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  font-size: 10px;
  line-height: 1.65;
}

.hx-life-footnote strong {
  color: var(--vp-c-text-1);
}

:global(.dark) .hx-life-card {
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.22);
}

:global(.dark) .hx-life-header {
  background: linear-gradient(135deg, rgba(233, 126, 179, 0.09), rgba(138, 102, 194, 0.08));
}

@media (max-width: 760px) {
  .hx-life-header {
    flex-direction: column;
    padding: 16px;
  }

  .hx-life-legend {
    justify-content: flex-start;
  }

  .hx-life-chart {
    min-width: 1080px;
  }

  .hx-axis-row,
  .hx-product-row {
    grid-template-columns: 190px minmax(890px, 1fr);
  }
}
</style>
