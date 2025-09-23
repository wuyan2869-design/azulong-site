# 首页规范 (Homepage SPEC)

## 概述
本文档定义 AzuLong 官网首页的设计规范、文案内容和验收标准。首页旨在突出"质量/价格/服务"三重优势，面向美国/新加坡 B2B 客户，体现国际化专业形象。

---

## 1. Hero 区域

### 1.1 布局结构
- **大图**：1920x1080px，展示工业紧固件产品或工厂场景
- **文案层**：居中对齐，深色半透明背景确保文字可读性
- **CTA 按钮**：主要操作 + 次要操作

### 1.2 文案内容

#### 主标题 (H1)
**英文**：`Reliable Industrial Fasteners, Global Quality Assurance`
**中文**：`可靠工业紧固件，全球品质保证`

#### 副标题 (H2)
**英文**：`Quality · Cost Advantage · On-time Service`
**中文**：`品质保证 · 成本优势 · 准时服务`

#### 描述文字
**英文**：`Professional manufacturer of industrial fasteners with 15+ years experience. Serving clients across USA, Singapore and global markets with ISO certified quality standards.`
**中文**：`专业工业紧固件制造商，15年+ 行业经验。为美国、新加坡及全球客户提供 ISO 认证品质标准的产品与服务。`

#### CTA 按钮
**主按钮**：
- 英文：`View Products` → `/products`
- 中文：`查看产品`

**次按钮**：
- 英文：`Contact Us` → `/contact`
- 中文：`联系我们`

### 1.3 技术要求
- 响应式设计：桌面端图片，移动端优化裁切
- 图片懒加载，WebP 格式优先
- 深色文字遮罩确保对比度 ≥ 4.5:1

---

## 2. 三大卖点区域

### 2.1 布局结构
- 3列网格布局（移动端堆叠）
- 每个卖点：图标 + 标题 + 描述 + 数据支撑

### 2.2 Quality (品质保证)

#### 图标
- 使用盾牌或认证图标
- SVG 格式，主色 #0F67FE

#### 标题
**英文**：`Premium Quality`
**中文**：`卓越品质`

#### 描述
**英文**：`ISO 9001:2015 certified manufacturing processes ensure every fastener meets international standards. Rigorous quality control at every production stage.`
**中文**：`ISO 9001:2015 认证生产流程，确保每颗紧固件符合国际标准。生产各环节严格质量控制。`

#### 数据支撑
**英文**：`99.8% Quality Pass Rate`
**中文**：`99.8% 质量合格率`

### 2.3 Price (价格优势)

#### 图标
- 使用成本或价格标签图标
- SVG 格式，主色 #0F67FE

#### 标题
**英文**：`Cost Advantage`
**中文**：`成本优势`

#### 描述
**英文**：`Direct manufacturer pricing with no middleman markup. Competitive rates while maintaining premium quality standards for bulk orders.`
**中文**：`工厂直销价格，无中间商加价。批量订单在保持优质标准的同时提供具有竞争力的价格。`

#### 数据支撑
**英文**：`Up to 30% Cost Savings`
**中文**：`节省成本高达 30%`

### 2.4 Service (服务保障)

#### 图标
- 使用时钟或服务图标
- SVG 格式，主色 #0F67FE

#### 标题
**英文**：`On-time Service`
**中文**：`准时服务`

#### 描述
**英文**：`Reliable delivery schedules with real-time tracking. Dedicated customer support team available for technical consultation and after-sales service.`
**中文**：`可靠的交付时间表与实时跟踪。专业客服团队提供技术咨询和售后服务支持。`

#### 数据支撑
**英文**：`95% On-time Delivery Rate`
**中文**：`95% 准时交付率`

---

## 3. Footer 区域

### 3.1 署名信息
**英文**：`Built with OpenAI & Claude`
**中文**：`由 OpenAI 与 Claude 驱动构建`

### 3.2 布局位置
- 页面底部中心对齐
- 字体大小：14px
- 颜色：#6B7280（中性灰）
- 与主要 Footer 内容分离，单独一行

### 3.3 完整 Footer 结构
```
[公司信息区] | [快速链接] | [联系方式] | [社交媒体]
                    [Built with OpenAI & Claude]
                         [版权信息]
```

---

## 4. 验收标准

### 4.1 视觉设计
- [ ] 主色调符合品牌规范：#0F67FE (国际蓝)
- [ ] 文字对比度 ≥ 4.5:1，符合 WCAG AA 标准
- [ ] 响应式布局在所有设备上正常显示
- [ ] 图片优化：WebP 格式，适当压缩，懒加载

### 4.2 内容质量
- [ ] 中英文文案语法正确，符合目标市场表达习惯
- [ ] Hero 区域信息层次清晰，CTA 按钮突出
- [ ] 三大卖点内容具体、有数据支撑、可信度高
- [ ] Footer 署名信息位置合适，不干扰主要内容

### 4.3 技术实现
- [ ] 语义化 HTML 结构，正确使用 H1-H6 标签
- [ ] Meta 标签完整：title, description, OG tags
- [ ] 图片 alt 属性完整，支持屏幕阅读器
- [ ] 键盘导航友好，焦点状态清晰

### 4.4 性能要求
- [ ] 移动端 Lighthouse 性能得分 ≥ 90
- [ ] 首屏加载时间 < 2.5s (Fast 3G)
- [ ] 图片懒加载正常工作
- [ ] 无 JS 错误，无控制台警告

### 4.5 SEO 优化
- [ ] 页面 title 包含关键词 "Industrial Fasteners"
- [ ] Meta description 描述准确，长度 150-160 字符
- [ ] 结构化数据标记（JSON-LD）
- [ ] 内部链接结构合理

---

## 5. 开发说明

### 5.1 组件拆分建议
```
HomePage/
├── HeroSection/
│   ├── HeroImage
│   ├── HeroContent
│   └── CTAButtons
├── ValueProposition/
│   ├── QualityCard
│   ├── PriceCard
│   └── ServiceCard
└── Footer/
    └── Attribution
```

### 5.2 国际化处理
- 使用 Next.js i18n 配置
- 文案存储在 `locales/en.json` 和 `locales/zh.json`
- 支持 `/en` 和 `/zh` 路由

### 5.3 图片资源
- Hero 背景图：`/public/images/hero-bg.jpg`
- 卖点图标：`/public/icons/quality.svg` 等
- 尺寸规范：遵循设计稿比例，提供 2x 高分辨率版本

---

## 6. 测试用例

### 6.1 功能测试
- [ ] CTA 按钮跳转正确
- [ ] 响应式断点正常切换
- [ ] 图片懒加载触发
- [ ] 多语言切换功能

### 6.2 可用性测试
- [ ] 键盘 Tab 导航顺序合理
- [ ] 屏幕阅读器可正确读取内容
- [ ] 色盲用户也能正常浏览

### 6.3 性能测试
- [ ] Lighthouse 各项指标达标
- [ ] 不同网络环境下加载测试
- [ ] 内存使用无异常

---

**更新时间**：2025-09-23
**版本**：v1.0
**负责人**：小吴 (Planner/Architect)