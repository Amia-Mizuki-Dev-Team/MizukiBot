<template>
  <div class="mzk-search-result">
    <!-- 头部区域：图标 + 名称 + 面包屑链接 -->
    <div class="sr-header">
      <img v-if="icon" :src="icon" class="sr-icon" alt="icon" />
      <div class="sr-brand">
        <span class="sr-sitename">{{ siteName }}</span>
        <span class="sr-url">{{ url }}</span>
      </div>
    </div>
    
    <!-- 主标题（模仿搜索引擎蓝色大号链接） -->
    <a :href="titleLink" class="sr-title">{{ title }}</a>
    
    <!-- 主介绍文字 -->
    <p v-if="description" class="sr-desc">{{ description }}</p>
    
    <!-- 子链接区域（两列布局） -->
    <div v-if="subLinks && subLinks.length" class="sr-sublinks">
      <div v-for="(link, index) in subLinks" :key="index" class="sr-sublink-item">
        <a :href="link.link" class="sr-sublink-title">{{ link.title }}</a>
        <p class="sr-sublink-desc">{{ link.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: { type: String, default: '' },
  siteName: { type: String, required: true },
  url: { type: String, required: true },
  title: { type: String, required: true },
  titleLink: { type: String, default: '#' },
  description: { type: String, default: '' },
  subLinks: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.mzk-search-result {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 24px;
  margin: 20px 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  transition: box-shadow 0.3s ease;
}

.mzk-search-result:hover {
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);
}

.sr-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.sr-icon {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--vp-c-divider);
}

.sr-brand {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.sr-sitename {
  font-size: 14px;
  color: var(--vp-c-text-1);
  font-weight: 500;
}

.sr-url {
  font-size: 12px;
  color: var(--vp-c-text-2);
}

.sr-title {
  display: inline-block;
  font-size: 22px;
  color: #1a0dab; /* Google/Bing Link Blue */
  text-decoration: none;
  font-weight: 400;
  margin-bottom: 8px;
  line-height: 1.3;
}

.dark .sr-title {
  color: #8ab4f8; /* Dark mode friendly blue */
}

.sr-title:hover {
  text-decoration: underline;
}

.sr-desc {
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0 0 16px 0;
}

.sr-sublinks {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px 24px;
  margin-top: 16px;
}

.sr-sublink-item {
  display: flex;
  flex-direction: column;
}

.sr-sublink-title {
  font-size: 16px;
  color: #1a0dab;
  text-decoration: none;
  margin-bottom: 4px;
}

.dark .sr-sublink-title {
  color: #8ab4f8;
}

.sr-sublink-title:hover {
  text-decoration: underline;
}

.sr-sublink-desc {
  font-size: 13px;
  color: var(--vp-c-text-2);
  line-height: 1.5;
  margin: 0;
}

/* 移动端适配 */
@media (max-width: 640px) {
  .sr-sublinks {
    grid-template-columns: 1fr;
  }
  .mzk-search-result {
    padding: 16px;
  }
  .sr-title {
    font-size: 20px;
  }
}
</style>
