---
title: 落雪咖啡屋账号绑定
description: 如何把落雪咖啡屋账号和 Mizuki Bot 绑定，绑定后就可以用舞萌 DX 查分等功能了。
---

# 落雪 (LXNS) 账号绑定教程

> 把落雪账号和 Bot 绑起来，后续查分就能用了。

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

<div class="mzk-card mzk-card--blue">
  <h3>绑定流程</h3>
  <p>请输入您的 QQ 号，点击按钮跳转至落雪 (LXNS) 授权页面。</p>

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

  <h3 style="color: #d4b106;">获取授权码后：</h3>
  <p>请回到群聊窗口（注意：该功能不支持私聊），根据您使用的 Bot 类型发送对应的指令：</p>
  
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


