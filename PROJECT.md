# PROJECT.md — AzuLong Site

## 0. 项目速览
- **目标**：打造国际化 B2B 官网（面向全球市场），突出 **质量 / 价格 / 服务** 三重优势；移动端 Lighthouse ≥ 90；首屏速度优秀；SEO 合规；内容可持续迭代。
- **技术栈**：Next.js (App Router) + TypeScript + Tailwind（+ 可选 shadcn/ui）
- **部署**：Vercel
- **关键词**：国际化、可信赖、工业质感、产品参数清晰、B2B制造、全球服务

---

## 1. 角色与职责（3 Agent 协作）

### 👑 小吴（Planner / Architect）
- **定位**：产品经理 + 架构师（由 ChatGPT 扮演）
- **职责**：
  - 收集业务诉求，产出规范（SPEC/本文件）
  - 定义信息架构、组件、接口、文案基调、SEO/a11y/性能标准
  - 评审/验收标准；合并前的"是否达标"判定
- **交付**：`SPEC.md` / `PROJECT.md` / 任务拆解 / Code Review 清单
### 🛠️ 小柯（Coder / Builder）
- **定位**：实现工程师（由 Claude Code 扮演）
- **职责**：
  - 严格按规范实现页面/组件/接口
  - 提交小而清晰的 PR（≤300 行 diff）
  - 编写/修复单测与 E2E，使 CI 通过
- **交付**：代码 + 运行步骤 + 变更说明

### 🔍 小帅（Reviewer / Refiner）
- **定位**：高级 Code Reviewer（由 Claude Code 扮演）
- **职责**：
  - 对照规范进行代码审查
  - 给出"必须修改清单（阻断合并）/ 建议优化清单（可后续）"
  - 组织最小必要改动（Minimal Patch）并回传 diff
- **交付**：评审意见 + 最小修正补丁 + 自测结果

---

## 2. 协作工作流（Planner → Builder → Reviewer）

1) **Plan（小吴）**
   - 依据业务目标更新 `SPEC.md`
   - 发出任务卡（Task 格式）
2) **Build（小柯）**
   - 严格按任务与规范提交 PR
3) **Review（小帅）**
   - 产出 Must Fix / Nice to Have
   - 必要时附 Minimal Patch
4) **Merge** 并进入下一任务
## 3. 信息架构（IA）
- `/` → Home（Hero、三大卖点、精选产品、客户认证、CTA）
- `/about` → 公司介绍/愿景/发展历程/工厂与团队图
- `/products` → 产品分类列表
- `/products/[slug]` → 产品详情（图 + 参数表）
- `/services` → 服务内容
- `/contact` → 联系表单

---

## 4. 视觉与文案基调
- **主色**：国际蓝 #0F67FE；深灰 #111827；中性灰 #6B7280；渐变青蓝 cyan-400
- **品牌设计**：AzuLong 采用渐变色彩组合，体现创意和现代感
- **语气**：国际化、专业、可信赖、面向全球B2B市场
- **示例 Slogan**：
  - Reliable Industrial Fasteners, Global Quality Assurance
  - Quality · Cost Advantage · On-time Service
  - Ready for Global B2B Partnership?

---

## 5. 图片与参数数据
- 图片放 `/public/products/`，统一背景美化（AI 去背 + 工业质感）
- 参数：Excel → JSON → 自动渲染表格
- 示例 JSON 结构见 `products.json`

---

## 6. 验收标准
- a11y：语义化、可达性、对比度 ≥ 4.5:1
- SEO：每页 title/desc/OG/Twitter，sitemap.xml/robots.txt
- 性能：移动 Lighthouse ≥ 90
- 测试：Vitest（单测）、Playwright（E2E）
- 品牌设计：AzuLong 使用渐变色彩，现代创意风格
- 文案规范：突出全球B2B市场定位，避免具体国家名称
- Footer：Built with Claude（简化署名，使用 Claude logo）