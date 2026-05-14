---
title: 落雪咖啡屋账号绑定
description: 详细说明如何通过 OAuth 2.0 链接授权等方式进行落雪咖啡屋账号与 Mizuki Bot 的绑定，实现舞萌 DX 等音游数据的无缝同步。
---

# 落雪 (LXNS) 账号绑定教程

> 通过 OAuth 2.0 授权机制，将您的落雪账号与 Mizuki Bot 安全绑定。

<br>

<script setup>
import { ref } from 'vue'

// 绑定输入框的变量
const qqNumber = ref('')

// 点击跳转的逻辑
const jumpToAuth = () => {
  if (!qqNumber.value) {
    alert('请先输入您的 QQ 号！')
    return
  }
  // 拼接带有 QQ 号的授权链接
  const baseUrl = 'https://maimai.lxns.net/oauth/authorize?client_id=6b98af53-7b95-4a84-9198-6d2a8db0ac47&redirect_uri=urn%3Aietf%3Awg%3Aoauth%3A2.0%3Aoob&response_type=code&scope=read_player+write_player+read_user_token&state='
  const fullUrl = baseUrl + qqNumber.value
  
  // 在新标签页打开
  window.open(fullUrl, '_blank')
}
</script>

<div class="interactive-card">
  <h3 style="margin-top: 0; color: #1890ff; display: flex; align-items: center;">
    绑定流程
  </h3>
  <p style="font-size: 14px; opacity: 0.8; margin-bottom: 20px; line-height: 1.6;">
    请输入您的 QQ 号，点击按钮跳转至落雪 (LXNS) 授权页面。
  </p>

  <div class="input-group">
    <label style="display: block; font-weight: bold; font-size: 15px; margin-bottom: 8px;">您的 QQ 号：</label>
    <input 
      type="number" 
      v-model="qqNumber" 
      placeholder="例如: 3675727244" 
      class="qq-input" 
    />
  </div>

  <button @click="jumpToAuth" class="jump-btn">
    跳转并获取授权代码
  </button>

  <hr class="dashed-hr" />

  <h3 style="color: #d4b106; margin-top: 0; display: flex; align-items: center; font-size: 18px;">
    获取授权码后：
  </h3>
  <p style="font-size: 14px; opacity: 0.8; margin-bottom: 15px; line-height: 1.6;">
    请回到群聊窗口（注意：该功能不支持私聊），根据您使用的 Bot 类型发送对应的指令：
  </p>
  
  <div style="margin-bottom: 15px;">
    <strong style="font-size: 14px; color: var(--vp-c-text-1);">官方 Bot（带有蓝标认证）：</strong>
    <div class="code-box" style="margin-top: 8px;">
      <code>@Mizuki Bot 落雪确认 [授权码]</code>
    </div>
  </div>

  <div>
    <strong style="font-size: 14px; color: var(--vp-c-text-1);">第三方 Bot（无蓝标认证）：</strong>
    <div class="code-box" style="margin-top: 8px;">
      <code>落雪确认 [授权码]</code>
    </div>
  </div>
</div>

<style>
/* 交互卡片整体样式 */
.interactive-card {
  background: var(--vp-c-bg-soft);
  border-left: 5px solid #1890ff;
  padding: 30px 25px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  margin-top: 20px;
}

/* 输入框样式 */
.qq-input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  font-size: 16px;
  color: var(--vp-c-text-1);
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.qq-input:focus {
  outline: none;
  border-color: #1890ff;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
}

/* 隐藏数字输入框自带的上下箭头 */
.qq-input::-webkit-outer-spin-button,
.qq-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* 跳转按钮样式 */
.jump-btn {
  width: 100%;
  margin-top: 20px;
  padding: 14px;
  background-color: #1890ff;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.1s ease;
}

.jump-btn:hover {
  background-color: #096dd9;
}

.jump-btn:active {
  transform: scale(0.98);
}

/* 虚线分割线 */
.dashed-hr {
  border: none;
  border-top: 1px dashed var(--vp-c-divider);
  margin: 30px 0;
}

/* 指令代码框样式 */
.code-box {
  background: var(--vp-c-bg);
  padding: 15px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
}

.code-box code {
  color: #ff4d4f !important;
  font-family: monospace;
  font-size: 15px;
  font-weight: bold;
}
</style>
