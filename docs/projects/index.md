---
title: 项目生态
description: Amia_晓山瑞希及 Amia-Mizuki Dev Team 当前公开插件、客户端、网关和基础组件总览。
pageClass: amia-projects-page
---

# 项目生态

本页面向用户和外部开发者说明各项目的公开职责与关系。仓库认领、测试进度和内部执行状态统一放在[开发者招募与协作](/recruiting)页面，不在用户项目总览中展开。

<DocCallout title="状态口径" type="history">
公开项目不等同于所有能力均已在正式 Bot 中开放。未明确标记为“已上线”的功能，不应视为正式服务承诺。
</DocCallout>

<div class="amia-project-section">

## 用户功能与客户端

<div class="amia-project-grid">
  <ProjectCard title="Amia-plugin-maimaidx" status="info" status-text="用户功能" link="/projects/amia-plugin-maimaidx">
    舞萌 DX 查分、分析与互动插件。项目原名为 <code>lxns_b50</code>，现统一使用 <code>Amia-plugin-maimaidx</code>。主要覆盖 B50、AP50、单曲详情、战力分析、名片生成、曲目检索、进度统计和群内互动功能。
  </ProjectCard>

  <ProjectCard title="Mizuki-plugin-Maimai-sync" status="info" status-text="同步组件">
    独立的舞萌 DX 成绩同步组件，负责水鱼与落雪账号绑定、成绩上传、队列处理和同步状态查询。它与 <code>Amia-plugin-maimaidx</code> 分工独立：前者负责同步，后者负责查询与分析。
  </ProjectCard>

  <ProjectCard title="Amia-plugin-pjskhelp" status="info" status-text="用户功能" link="/projects/amia-plugin-pjskhelp">
    PJSK 综合帮助与后端指令网关，提供 QQ 官方 Bot 的 Markdown/按钮菜单、普通 Bot 图片帮助、区域前缀指令和后端路由能力。
  </ProjectCard>

  <ProjectCard title="Amia Sync Android" status="beta" status-text="客户端" link="/projects/mizuki-sync">
    用于舞萌 DX 成绩同步相关操作的 Android 客户端。客户端状态、下载方式和支持范围以独立项目页面为准。
  </ProjectCard>
</div>

</div>

<div class="amia-project-section">

## 协议桥接与网关

<div class="amia-project-grid">
  <ProjectCard title="Gensokyo NewQQ" status="info" status-text="协议桥接" link="/projects/gensokyo-newqq">
    QQ 官方机器人客户端与协议桥接组件，承担 BotGo、HTTP API、WebSocket、WebUI、消息转换和 ID 映射等能力。
  </ProjectCard>

  <ProjectCard title="HX-Pjsk-Gateway" status="info" status-text="服务网关" link="/projects/hx-pjsk-gateway">
    PJSK 指令和后端服务之间的网关组件，用于路由、连接管理与兼容处理。
  </ProjectCard>
</div>

</div>

<div class="amia-project-section">

## Bot 业务插件

以下项目直接提供用户功能，其具体使用方式以功能文档和 Bot 内帮助菜单为准：

| 项目 | 公开职责 |
| :--- | :--- |
| `Amia-plugin-economy` | 群聊经济、资产、任务、商城与收集系统。 |
| `Amia-plugin-meme` | 表情包与图库管理。 |
| `Amia-plugin-help` | 帮助入口与能力索引。 |
| `Amia-plugin-group` | 群公告管理与自动分发。 |
| `Amia-plugin-welcome` | 成员加入与离开提示。 |
| `Amia-plugin-send` | 消息活动统计、群活排行与统计 Provider。 |
| `Amia-plugin-pjskcarteam` | PJSK 协力车队与跨群广播。 |

</div>

<div class="amia-project-section">

## 核心与治理组件

这些组件主要为插件协作、身份、权限、审计和数据聚合提供基础能力，通常不直接暴露用户指令。

<div class="amia-project-grid">
  <ProjectCard title="amia-core" status="stable" status-text="核心契约">
    Amia 插件生态的轻量级契约层，统一身份模型、Provider 协议、注册表、安全调用、超时、异常隔离和耗时记录。业务插件通过公开 Provider 协作，避免直接读取其他插件数据库。
  </ProjectCard>

  <ProjectCard title="Amia-plugin-permission" status="stable" status-text="权限治理">
    统一权限节点判断服务，支持 canonical 身份、平台身份、群聊上下文节点和通配符。当前采用默认拒绝策略：权限服务缺失、规则无效或检查异常时不会自动放行。
  </ProjectCard>

  <ProjectCard title="Amia-plugin-audit" status="stable" status-text="审计组件">
    结构化审计组件，将权限、配置、绑定和管理操作写入独立审计账本。敏感字段会进行脱敏，审计失败不会反向中断原业务操作。
  </ProjectCard>

  <ProjectCard title="Amia-plugin-profile" status="stable" status-text="信息聚合">
    统一个人信息聚合组件，通过 <code>IdentityResolver</code>、<code>StatsProvider</code> 和各业务插件注册的 <code>ProfileProvider</code> 组合个人卡片。单个 Provider 超时或异常时，其他信息仍可继续生成。
  </ProjectCard>

  <ProjectCard title="Amia-plugin-group-insight" status="beta" status-text="按需分析">
    群聊活跃分析组件。管理员在目标群主动开启分析后，组件才会按 <code>self_id + group_id</code> 记录之后产生的匿名活动元数据；默认不会采集所有群聊。当前主要提供消息量、发言用户数和基础活跃摘要。
  </ProjectCard>
</div>

</div>

## 项目状态说明

公开页面只区分以下状态：

- **已上线**：已经在正式 Bot 或公开服务中使用；
- **测试中**：已有实现，但仍需兼容性或生产验证；
- **规划中**：尚未作为稳定功能发布。

详细仓库职责、协作边界和待办事项见[开发者招募与协作](/recruiting)。
