---
title: Amia Plugin PJSK Help
description: PJSK 综合帮助与 Haruki/Sakura 后端指令网关。
---

# Amia Plugin PJSK Help

`Amia-plugin-pjskhelp` 是 PJSK 综合帮助与后端指令网关。

## 仓库

- GitHub: [Amia-Mizuki-Dev-Team/Amia-plugin-pjskhelp](https://github.com/Amia-Mizuki-Dev-Team/Amia-plugin-pjskhelp)

## 当前状态

主体已完成，后续主要完善 README、配置说明和测试说明。

## 当前功能

- 官方 Bot 使用 Markdown、按钮和分页菜单；
- 普通 Bot 使用图片帮助；
- 区域前缀和本地帮助命令拦截；
- Haruki/Sakura 命令路由和共享命令双路转发；
- 本地 WebSocket 网关、后端启动/关闭和断线退避重连；
- Sakura 转发前的 QBind 身份改写。

官方 Bot ID、后端地址和端口来自当前代码及环境变量；官方 Bot ID 目前仍硬编码，不能在文档中写成已配置化。

## 维护边界

后端未连接时只提示暂未连接，不阻止本地帮助菜单加载。被本地规则拦截的帮助、表情制作等命令不会转发到后端。后续新增路由必须先补离线测试，不直接读取 maimaidx、Economy 或其他业务数据库。
