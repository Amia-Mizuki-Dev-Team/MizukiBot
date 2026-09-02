---
title: 项目生态
description: Amia_晓山瑞希及 Amia-Mizuki Dev Team 当前 Bot、公开插件、客户端、协议组件、开发文档与关联项目总览。
---

# 项目生态

Amia_晓山瑞希并不是单一仓库项目。当前体系由帮助站与公开入口、音游业务插件、协议与身份组件、治理组件、客户端以及开发研究文档共同组成。项目是否已经对外稳定提供，以对应页面和[功能状态](/status)为准；仓库存在不等于功能已经正式上线。

## 入口与文档

### MizukiBot

`Amia-Mizuki-Dev-Team/MizukiBot` 是当前帮助站与公开项目生态文档源码仓库。仓库名称沿用历史项目名，对外产品名称统一为 **Amia_晓山瑞希**。

- GitHub: [Amia-Mizuki-Dev-Team/MizukiBot](https://github.com/Amia-Mizuki-Dev-Team/MizukiBot)

## 音游功能

### Amia-plugin-maimaidx

舞萌 DX 综合插件，整合 LXNS 与 DivingFish 数据源，覆盖 B50、AP50、完整成绩、曲库检索、进度统计、图片渲染、DX Pass、群聊互动，并通过 `MaimaiDataProvider` 向其他组件提供公共能力。详情见 [Amia-plugin-maimaidx](/projects/amia-plugin-maimaidx)。

### Mizuki-plugin-Maimai-sync

独立的舞萌 DX 成绩同步与绑定组件，承担账号绑定、成绩上传、队列处理和同步状态查询。它与 `Amia-plugin-maimaidx` 分工独立：同步组件负责数据同步，maimaidx 负责查询、分析与交互。

### Amia-plugin-pjskhelp

PJSK 综合帮助与后端路由组件。它负责本地帮助菜单、官方 Bot Markdown / Keyboard 展示，以及 Haruki / Sakura 命令分流和消息兼容，不复制后端完整业务实现。详情见 [PJSK Help](/projects/amia-plugin-pjskhelp)。

### Amia Sync Android

用于舞萌 DX 成绩同步相关操作的 Android 客户端。客户端状态、下载方式和支持范围见 [Amia Sync Android](/projects/mizuki-sync)。

## 协议、身份与网关

### Gensokyo NewQQ

QQ 官方机器人客户端与协议桥接组件，承担 BotGo、HTTP API、WebSocket、WebUI、消息转换和 ID 映射等能力。项目详情见 [Gensokyo NewQQ](/projects/gensokyo-newqq)。

### HX-Pjsk-Gateway

PJSK 指令与后端服务之间的网关组件，用于路由、连接管理与兼容处理。项目详情见 [HX-Pjsk-Gateway](/projects/hx-pjsk-gateway)。

### Amia-plugin-qbind

QQ 官方机器人身份绑定基础设施，将 Gensokyo 输出的虚拟身份解析为 canonical QQ 身份，并向需要真实 QQ 归属的业务插件提供统一 `IdentityResolver`、绑定检查与解绑能力。详情见 [Amia Plugin QBind](/projects/amia-plugin-qbind)。

## Bot 业务插件

以下项目直接提供或承载用户功能，具体使用方式以功能文档和 Bot 内帮助菜单为准：

- `Amia-plugin-economy`：群聊经济、资产、任务、商城与收集系统；
- [`Amia-plugin-meme`](/projects/amia-plugin-meme)：表情包与图库管理；
- [`Amia-plugin-help`](https://github.com/Amia-Mizuki-Dev-Team/Amia-plugin-help)：帮助入口与能力索引；
- [`Amia-plugin-group`](/projects/amia-plugin-group)：群公告管理与自动分发；
- [`Amia-plugin-welcome`](https://github.com/Amia-Mizuki-Dev-Team/Amia-plugin-welcome)：成员加入与离开提示；
- [`Amia-plugin-send`](https://github.com/Amia-Mizuki-Dev-Team/Amia-plugin-send)：消息活动统计、群活排行与统计 Provider；
- `Amia-plugin-pjskcarteam`：PJSK 协力车队与跨群广播。

## 核心与治理组件

这些组件主要为插件协作、身份、权限、审计和数据聚合提供基础能力，通常不直接暴露用户指令。

### amia-core

Amia 插件生态的契约层，统一身份模型、Provider 协议、注册表、安全调用、超时、异常隔离和耗时记录。业务插件通过公开 Provider 协作，避免直接读取其他插件私有数据库。

### Amia-plugin-permission

默认拒绝的权限 Provider，使用带命名空间的身份、精确作用域、显式拒绝和通配规则进行判断。权限服务缺失、规则无效或检查异常时不会自动放行。

### Amia-plugin-audit

结构化审计组件，将权限、配置、绑定和管理操作写入独立审计账本；敏感字段脱敏，审计失败不会反向破坏普通业务路径。

### Amia-plugin-profile

统一个人信息聚合组件，通过身份解析、统计 Provider 与业务插件注册的 Profile Provider 组合个人卡片；单个 Provider 超时或异常时其余信息仍可继续生成。

### Amia-plugin-group-insight

群聊活跃分析组件。管理员在目标群主动开启分析后才记录之后产生的匿名活动元数据，默认不对所有群聊进行采集。

## 开发与研究

### Amia-Develop-Mai

面向公共开发者的舞萌 DX 协议分析与开发文档仓库，公开体系结构、流程与研究方法，同时对真实服务器地址、密钥、凭据、接口名称和可复现构造细节进行脱敏处理。它用于技术研究与开发文档，不是生产 Bot 的运行时组件。

- GitHub: [Amia-Mizuki-Dev-Team/Amia-Develop-Mai](https://github.com/Amia-Mizuki-Dev-Team/Amia-Develop-Mai)

## 关联项目

### HongXingOS7

HongXingOS7 是当前生态中的关联项目之一，主要承接部分运行环境、基础设施配套与相关技术体系说明。现阶段先纳入项目生态统一展示，详细定位、版本边界和公开文档将在后续补充。

- 详情见 [HongXingOS7](/projects/hongxingos7)

## 项目状态说明

公开页面只区分以下状态：

- **已上线**：已经在正式 Bot 或公开服务中使用；
- **测试中**：已有实现，但仍需兼容性或生产验证；
- **规划中**：尚未作为稳定功能发布。

未明确标记为“已上线”的能力，不应视为正式服务承诺。项目职责、支持范围和已知限制以对应项目页面与[功能状态](/status)为准。
