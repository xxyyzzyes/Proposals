/**
 * RELIQ ARCHIVE — Commercial Proposal Bilingual System
 * Seamless zh / en switching synchronized with localStorage ('reliq_lang')
 */

const PROPOSAL_I18N = {
  zh: {
    pageTitle: "RELIQ ARCHIVE ｜ 商業企劃書：實體化親密經濟與周邊產品策略",
    backLink: "← 返回品牌官網",
    printBtn: "🖨️ 列印 / 另存為 PDF",
    docMeta: "<span>CONFIDENTIAL 內部策略企劃</span><span>·</span><span>RELIQ ARCHIVE 策劃團隊</span><span>·</span><span>2026 年 10 月 23 日</span>",
    docTitle: "創作者周邊一站式高定服務企劃書：<br><em>實體化親密經濟與周邊產品策略</em>",
    docSummary: "為經紀公司（Agency）與頂級數位創作者（OnlyFans Creators）打造之無庫存、高客單價限量實體信物製造體系。由 RELIQ ARCHIVE 全程承接供應鏈對接、小量開模、柔性打樣、合規金流與隱蔽跨境物流，釋放粉絲對實體靈光（Aura）的極致消費力。",
    tocTitle: "目錄索引 (Table of Contents)",
    toc: [
      { num: "01.", label: "一句話核心說明", href: "#sec1" },
      { num: "02.", label: "為什麼現在做實體周邊", href: "#sec2" },
      { num: "03.", label: "權責劃分矩陣（我們 vs 經紀方）", href: "#sec3" },
      { num: "04.", label: "三層產品矩陣與製造成本", href: "#sec4" },
      { num: "05.", label: "八步驟敏捷合作流程", href: "#sec5" },
      { num: "06.", label: "利潤測算模型（典型 Drop 實測）", href: "#sec6" },
      { num: "07.", label: "合規金流、物流與隱私保護", href: "#sec7" }
    ],
    sec1Title: "一句話核心說明 (Executive Summary)",
    sec1Lead: "經紀公司與創作者只要選款、核准視覺設計與調香；工廠對接、小量開模、實體打樣、品質檢驗、高奢預購網站建置、合規收款與出貨售後，全部由 RELIQ ARCHIVE 負責。",
    sec1Sub: "✦ <strong>小量起訂（50–100 件）、嚴格預購制</strong>：經紀公司與創作者不需要壓任何庫存，零前期資金風險，全額按比例分潤。",
    sec2Title: "為什麼現在做實體周邊 (Market Timing)",
    sec2P1: "<strong>1. 創作者收入多元化迫在眉睫</strong>：OnlyFans 對創作者收入抽取 20%，且平台政策與審查具不確定性。頂級創作者紛紛將「實體限量信物、專屬調香、聯名高奢」視為平台以外第二、第三高毛利護城河。",
    sec2P2: "<strong>2. 周邊賣法的典範轉移</strong>：2026 年的私密周邊早已脫離廉價印製 Logo 的馬克杯或 T-shirt 模式。業界一致數據指出：<strong>限量 Drop、限時金庫倒數、獨立編號（Numbered Edition）、簽名收藏卡、結合嗅覺與觸覺主題故事的信物（Relics）</strong>，其轉化率與客單價是傳統周邊的 4 至 8 倍。",
    sec2P3: "<strong>3. 補足經紀公司的關鍵缺口</strong>：經紀團隊精於流量獲取、人設打造與粉絲運營，但極度缺乏能夠支援「超低起訂量（MOQ 50）、私密情調雕塑、7–15 天極速打樣、合規避開航空禁運」的柔性高奢製造供應鏈。這正是 RELIQ ARCHIVE 成立並專注的核心價值。",
    sec3Title: "權責劃分矩陣 (Responsibility Matrix)",
    sec3TableHead: ["服務項目", "RELIQ ARCHIVE (芮克檔案所) 負責", "經紀公司／創作者 負責"],
    sec3Rows: [
      ["<strong>選品與設計提案</strong>", "提供三層系列選品清單、香氛調性金字塔、3D 渲染圖與材質樣品", "選定主題款式、核准形象照與宣傳調性"],
      ["<strong>工廠對接與打樣</strong>", "柔性供應鏈開模、打樣製作、寄送實體樣品至經紀公司", "親身確認樣品手感、氣味與細節體驗"],
      ["<strong>品質把關 (QC)</strong>", "出廠前 100% 逐件品檢，提供高清照片/影片確認，無瑕疵保證", "—"],
      ["<strong>預購網站與收款</strong>", "建置獨立高奢品牌預購頁面，串接成人合規金流（Stripe / CCBill）", "提供官方宣傳素材、於 OnlyFans 與社群曝光導流"],
      ["<strong>包裝、物流與客服</strong>", "純黑無印消光防護盒裝、DDP 跨境全球空運、處理退換貨與售後", "在專屬編號收藏卡或拍立得上親筆簽名（如包含）"],
      ["<strong>法務與授權</strong>", "提供標準版權授權協議範本、隱私與無痕開票協議", "取得創作者書面肖像與商品化授權"]
    ],
    sec4Title: "三層產品矩陣與製造成本 (Product Architecture)",
    sec4Intro: "RELIQ ARCHIVE 精心規劃三層產品線，覆蓋「低門檻試水」、「高回購嗅覺消耗」與「頂級高客單價信物」：",
    sec4TableHead: ["層級分類", "產品名稱與工藝規格", "起訂量 (MOQ)", "工廠 FOB 成本 (USD)", "建議零售價", "生產交期"],
    sec4Rows: [
      { tag: "案頭寢居 · 觸感", isCrimson: false, name: "【枕畔耳語】Élise 粉彩輪廓畫真絲語音枕", desc: "100% 6A 級 22mm 桑蠶絲、法式粉彩線條藝術、NFC 晶片解鎖 10 段私密 ASMR", moq: "30–100 件", fob: "$12.0 – $22.0", msrp: "$88 – $120", lead: "15–25 天" },
      { tag: "案頭寢居 · 觸感", isCrimson: false, name: "【夜幕】L'Ombre de Soie 6A 重磅真絲微醺眼罩", desc: "雙面 22mm 桑蠶絲、玫瑰金法文書寫刺繡「Ferme les yeux」、親膚微醺遮光", moq: "50–200 件", fob: "$4.5 – $8.0", msrp: "$48 – $65", lead: "10–20 天" },
      { tag: "高定穿搭 · 生活", isCrimson: false, name: "【私語微光】300g 重磅絲光棉微性感剪裁 T-shirt", desc: "雙股精梳絲光棉、落肩微闊型剪裁、背部粉彩輪廓線條藝術、NFC 防偽織嘜解鎖專屬自拍", moq: "50–200 件", fob: "$7.0 – $12.0", msrp: "$58 – $75", lead: "15–20 天" },
      { tag: "高定穿搭 · 生活", isCrimson: false, name: "【微醺出走】24oz 植鞣皮革高定重磅帆布托特袋", desc: "24oz 極密水洗純棉帆布、意大利黑植鞣牛皮提把、純銅手工撞釘、勃艮第紅真絲內襯與筆電夾層", moq: "30–100 件", fob: "$14.0 – $24.0", msrp: "$78 – $110", lead: "18–25 天" },
      { tag: "典藏消耗 · 嗅覺", isCrimson: true, name: "【肌膚微溫】純欲體香固體香膏", desc: "金屬滑蓋黑金盒，激光雕刻 RELIQ，零液體航空禁運", moq: "100–300 件", fob: "$4.5 – $7.5", msrp: "$42 – $55", lead: "15–25 天" },
      { tag: "典藏消耗 · 嗅覺", isCrimson: true, name: "【凝形】1:1 局部造型盲盒冷製皂", desc: "真人 3D 掃描人體弧線雕刻冷製皂，封入防水盲盒膠囊解鎖私密影片", moq: "72–500 件", fob: "$1.5 – $3.5", msrp: "$28 – $38", lead: "15–30 天" },
      { tag: "典藏消耗 · 嗅覺", isCrimson: true, name: "【溫焰】42°C 低溫滴蠟情調按摩香氛燭", desc: "42°C 低熔點可接觸肌膚，天然大豆乳木果油，重磅琥珀避光杯", moq: "50–200 件", fob: "$3.8 – $6.0", msrp: "$38 – $56", lead: "15–20 天" },
      { tag: "典藏消耗 · 嗅覺", isCrimson: true, name: "【靈露】創作者專屬調香私密潤滑液", desc: "微量食用級香草蜜桃調香，醫療級長效水溶性凝露，純黑消光避光瓶", moq: "100–500 件", fob: "$1.2 – $2.8", msrp: "$24 – $32", lead: "12–20 天" },
      { tag: "案頭工藝 · 稀缺", isGold: true, name: "【暗湧】Élise 鉑金矽膠人體工學鍵盤手托", desc: "真人數據超軟鉑金果凍矽膠、內嵌 CNC 拉絲香檳金黃銅銘牌", moq: "50–200 件", fob: "$7.5 – $13.0", msrp: "$65 – $85", lead: "15–25 天" },
      { tag: "限量金庫 · 稀缺", isGold: true, name: "【博弈】Jeu Privé 金屬黑箔高定撲克與黃銅匣", desc: "54 張防水黑箔金邊卡牌、54 幅微醺時裝藝術大片、320g 實心黃銅磁吸滑蓋牌匣", moq: "50–200 件", fob: "$8.5 – $16.0", msrp: "$68 – $95", lead: "15–25 天" },
      { tag: "限量金庫 · 稀缺", isGold: true, name: "【冷冽】Obsidienne 天然黑曜石曲線美體導入石", desc: "100% 天然火山黑曜石手工水磨、人體工學三道貼身曲線、香檳金黃銅徽標", moq: "30–100 件", fob: "$9.0 – $18.0", msrp: "$75 – $110", lead: "20–30 天" }
    ],
    sec4Note: "* 註：上述工廠單價以 2026 年柔性製造供應鏈公開或實際協議報價為基準，正式專案依選材與訂購量以最終報價單為準。",
    sec5Title: "八步驟敏捷合作流程 (Operational Workflow)",
    sec5TableHead: ["步驟", "階段內容", "負責方", "預估時程"],
    sec5Rows: [
      ["<strong>Step 1</strong>", "選定主題風格與預計發行款式", "雙方討論", "3 – 5 天"],
      ["<strong>Step 2</strong>", "視覺設計稿確認、授權合約簽署", "經紀公司 / 創作者", "5 – 7 天"],
      ["<strong>Step 3</strong>", "工廠快速打樣、寄送實體樣品審查", "RELIQ ARCHIVE", "7 – 15 天"],
      ["<strong>Step 4</strong>", "樣品核准與反饋微調", "經紀公司", "3 天"],
      ["<strong>Step 5</strong>", "開放 14 天限時預購金庫（線上合規預售）", "RELIQ (頁面) + 經紀方 (導流)", "14 天"],
      ["<strong>Step 6</strong>", "預購結單，工廠依實際銷量批量下單生產", "RELIQ ARCHIVE", "10 – 25 天"],
      ["<strong>Step 7</strong>", "出貨前 100% 照片/影片品檢確認", "RELIQ ARCHIVE", "2 – 3 天"],
      ["<strong>Step 8</strong>", "純黑無印 DDP 物流直發全球粉絲與售後服務", "RELIQ ARCHIVE", "7 – 12 天交付"]
    ],
    sec6Title: "利潤測算模型：典型 Drop 實測 (Financial Model)",
    sec6Intro: "以一位中頭部 OnlyFans 創作者（擁約 3,000–5,000 名活躍訂閱者）進行一檔 <strong>300 件限量「Collector 典藏套裝」</strong> 為例試算：",
    sec6Kpis: [
      {
        tag: "✦ 經紀公司與創作者分潤 (70% 淨額)",
        val: "$13,513.50",
        unit: "USD",
        desc: "<strong>純淨收入 · 零庫存風險（約 NT$ 432,000）</strong><br>零前期資金墊付 · 14 天預購款直接結算落袋",
        isHero: true
      },
      {
        tag: "單場 300 件限量預購總額",
        val: "$26,400.00",
        unit: "USD",
        desc: "預購客單價 $88.00 USD<br>14 天限時金庫，高轉化專屬典藏套裝",
        isHero: false
      },
      {
        tag: "全案淨利潤空間 (Gross Margin)",
        val: "73.1%",
        unit: "($19,305 USD)",
        desc: "扣除全部柔性開模、全球 DDP 完稅空運與合規金流後的超高利潤空間",
        isHero: false
      }
    ],
    sec6TableHead: ["財務項目", "單件金額 (USD)", "300 件總額 (USD)", "佔營收比重"],
    sec6Rows: [
      ["<strong>預購零售定價</strong>", "<strong>$88.00</strong>", "<strong>$26,400.00</strong>", "<strong>100.0%</strong>"],
      ["綜合製造成本 (香膏+皂+純黑禮盒包裝)", "$12.50", "$3,750.00", "14.2%"],
      ["全球航空 DDP 物流與保險預估", "$7.19", "$2,157.00", "8.2%"],
      ["合規金流與平台處理費 (~4.5%)", "$3.96", "$1,188.00", "4.5%"],
      ["<strong>淨利潤空間 (Gross Profit)</strong>", "<strong>$64.35</strong>", "<strong>$19,305.00</strong>", "<strong>73.1%</strong>"],
      ["<strong>經紀公司與創作者分潤 (70%)</strong> <span class=\"share-badge\">70% 創作者分潤</span>", "<strong>$45.04</strong>", "<strong>$13,513.50</strong>", "<strong>純淨收入，零庫存風險</strong>"],
      ["RELIQ ARCHIVE 運營分潤 (30%) <span class=\"share-badge purple\">30% 運營全包</span>", "$19.31", "$5,791.50", "涵蓋打樣、網頁維護、QC 與客服"]
    ],
    sec6Highlight: "✦ <strong>零資金墊付</strong>：所有製造成本由預購款中直接結算，經紀公司與創作者在預購結束後即可穩獲 <strong>$13,500+ USD（約 43 萬台幣）</strong> 純利潤，並深化了死忠粉絲的情感忠誠度。",
    sec7Title: "合規金流、跨境物流與隱私安全保障 (Compliance & Security)",
    sec7P1: "<strong>1. 雙軌合規支付通道</strong>：串接 Stripe 與 CCBill 獨立合規商戶通道。針對成人周邊與高客單實體商品，建立獨立白名單架構，徹底規避一般電商常見的帳號凍結與退款風控。",
    sec7P2: "<strong>2. DDP（完稅後交貨）全球免卡關空運</strong>：所有包裹採 DDP（Delivered Duty Paid）模式，預先清關並涵蓋當地關稅。粉絲收件時無須二次繳稅或面臨海關開箱申報風險。",
    sec7P3: "<strong>3. 純黑無印消光防護外裝（Discreet Packaging）</strong>：所有商品外盒皆為無任何創作者標記、無敏感字樣的純黑消光硬盒。信用卡帳單顯示為中性的 <code>RLQ Archive Atelier</code>，保護粉絲最高個人隱私。",
    sec7P4: "<strong>4. 人體工學與生物數據加密冷存儲與銷毀機制</strong>：針對人體曲線開模、掌托等客製人體數據，RELIQ ARCHIVE 採最高規格機密加密存儲。生產核可後 30 天內依經紀公司要求進行實體模具封存或數位檔案徹底銷毀，確保創作者生物數據安全無虞。",
    ctaTitle: "準備好為您的創作者打造第一個專屬實體 Drop 了嗎？",
    ctaDesc: "與 RELIQ ARCHIVE 樣品顧問聯絡，我們將在 24 小時內為您提供客製打樣提案。",
    ctaBtn: "立即預約打樣企劃洽詢"
  },
  en: {
    pageTitle: "RELIQ ARCHIVE ｜ Commercial Proposal: Bespoke Physical Merchandise Infrastructure",
    backLink: "← Back to Atelier",
    printBtn: "🖨️ Print / Save as PDF",
    docMeta: "<span>CONFIDENTIAL B2B PROPOSAL</span><span>·</span><span>RELIQ ARCHIVE STRATEGY ATELIER</span><span>·</span><span>OCTOBER 23, 2026</span>",
    docTitle: "Bespoke Creator Merchandise Infrastructure Proposal:<br><em>Tangible Intimacy & High-Margin Drop Strategy</em>",
    docSummary: "A turnkey, zero-inventory manufacturing infrastructure tailored for Creator Talent Agencies and Elite OnlyFans Creators. RELIQ ARCHIVE oversees rapid tooling, olfactory formulating, compliant credit card billing, photo QC, and discreet global DDP air shipping—unlocking fans' desire for authentic physical relics.",
    tocTitle: "TABLE OF CONTENTS",
    toc: [
      { num: "01.", label: "Executive Summary", href: "#sec1" },
      { num: "02.", label: "Market Timing & Agency Opportunity", href: "#sec2" },
      { num: "03.", label: "Responsibility Matrix (Agency vs. RELIQ)", href: "#sec3" },
      { num: "04.", label: "Three-Tier Product Architecture & FOB Costs", href: "#sec4" },
      { num: "05.", label: "8-Step Agile Operational Workflow", href: "#sec5" },
      { num: "06.", label: "Financial Model (300-Unit Benchmark Drop)", href: "#sec6" },
      { num: "07.", label: "Merchant Compliance, DDP Freight & Data Privacy", href: "#sec7" }
    ],
    sec1Title: "01. Executive Summary",
    sec1Lead: "The talent agency and creator choose the collection, approve sensory notes and visual style; factory tooling, rapid sampling, 100% video inspection, compliant storefront setup, discreet billing, and insured global delivery are fully executed by RELIQ ARCHIVE.",
    sec1Sub: "✦ <strong>Ultra-Low MOQ (50–100 units), Strict Pre-Order Vault</strong>: Zero inventory liability and zero upfront capital required from your agency. 70/30 transparent net profit split.",
    sec2Title: "02. Market Timing & Agency Opportunity",
    sec2P1: "<strong>1. Urgent Need for Creator Revenue Diversification</strong>: Platforms extract up to 20% commission with unpredictable policy enforcement. Leading creator management agencies are positioning physical numbered relics and bespoke signature scents as their primary high-margin moat off-platform.",
    sec2P2: "<strong>2. Paradigm Shift in Creator Merchandise</strong>: In 2026, audience demand has shifted entirely away from cheap printed logo t-shirts and novelty mugs. Industry data demonstrates that <strong>limited-run drops, 14-day vault count-downs, numbered editions, signed cards, and sensory tactile relics</strong> achieve 4x to 8x higher conversion and average order value.",
    sec2P3: "<strong>3. Bridging the Agency Infrastructure Gap</strong>: Agencies excel at talent curation, brand building, and social traffic, but lack flexible luxury manufacturing capable of sub-100 MOQs, anatomical sculpting, 10-day physical sampling, and liquid-free air shipping compliance. RELIQ ARCHIVE exists specifically to solve this gap.",
    sec3Title: "03. Responsibility Matrix",
    sec3TableHead: ["Service Domain", "RELIQ ARCHIVE Scope", "Agency / Creator Scope"],
    sec3Rows: [
      ["<strong>Curation & Design</strong>", "Delivers 3-tier product concepts, olfactory notes pyramid, 3D renders, and physical material swatches", "Approves collection theme, scent profiles, and visual styling"],
      ["<strong>Tooling & Sampling</strong>", "Direct factory coordination, small-batch tooling, and physical sample courier to agency offices", "Hands-on verification of tactile finish, fragrance, and fit"],
      ["<strong>Quality Assurance</strong>", "100% individual piece photo/video inspection prior to atelier dispatch", "—"],
      ["<strong>Storefront & Merchant</strong>", "Builds standalone bespoke pre-order portal with adult-compliant Stripe & CCBill merchant white-labeling", "Provides official campaign media; schedules drop announcements on OnlyFans and social feeds"],
      ["<strong>Packaging & Freight</strong>", "Unmarked matte black rigid packaging, DDP global door-to-door air freight, concierge customer support", "Hand-signs numbered collector registry certificates or Polaroids (if applicable)"],
      ["<strong>Legal & Compliance</strong>", "Provides standard merchandise licensing templates, privacy NDAs, and billing confidentiality agreements", "Secures creator written image rights and authorization"]
    ],
    sec4Title: "04. Three-Tier Product Architecture & FOB Costs",
    sec4Intro: "RELIQ ARCHIVE features an engineered product matrix spanning low-friction testing, recurring olfactory consumables, and high-ticket heirloom relics:",
    sec4TableHead: ["Category", "Product & Craft Specifications", "MOQ", "Factory FOB (USD)", "Suggested Retail", "Lead Time"],
    sec4Rows: [
      { tag: "Bedside & Touch", isCrimson: false, name: "L'Heure Blanche · Whispers Silk Art Pillow", desc: "100% 6A 22mm Mulberry silk, French minimalist blush paint contour, washable NFC unlocks 10 bedtime tracks", moq: "30–100 units", fob: "$12.0 – $22.0", msrp: "$88 – $120", lead: "15–25 Days" },
      { tag: "Bedside & Touch", isCrimson: false, name: "L'Ombre de Soie · 6A Silk Sensory Blindfold", desc: "Dual-faced 22mm pure silk, rose-gold cursive script 'Ferme les yeux', skin-soothing blackout cushion", moq: "50–200 units", fob: "$4.5 – $8.0", msrp: "$48 – $65", lead: "10–20 Days" },
      { tag: "Haute Wear · Daily", isCrimson: false, name: "L'Heure Blanche · 300g Mercerized Contour Tee", desc: "Double-gauge combed sateen cotton, French relaxed drop shoulder, back contour art, NFC selfie key", moq: "50–200 units", fob: "$7.0 – $12.0", msrp: "$58 – $75", lead: "15–20 Days" },
      { tag: "Haute Wear · Daily", isCrimson: false, name: "L'Atelier 24oz Waxed Canvas Weekend Tote", desc: "24oz dense washed canvas, Italian veg-tanned leather handles, solid brass rivets, burgundy silk lining with 16' sleeve", moq: "30–100 units", fob: "$14.0 – $24.0", msrp: "$78 – $110", lead: "18–25 Days" },
      { tag: "Consumable · Scent", isCrimson: true, name: "Baume de Peau No. 01 · Body Scent Balm", desc: "Obsidian gold sliding tin with laser-engraved RELIQ, 100% compliant with global air cargo (zero liquid ban)", moq: "100–300 units", fob: "$4.5 – $7.5", msrp: "$42 – $55", lead: "15–25 Days" },
      { tag: "Consumable · Scent", isCrimson: true, name: "Silhouette 1:1 Érotique · Secret Capsule Soap", desc: "1:1 anatomical 3D scan botanical cold-process soap, ultrasonic sealed waterproof capsule unlocking private video", moq: "72–500 units", fob: "$1.5 – $3.5", msrp: "$28 – $38", lead: "15–30 Days" },
      { tag: "Consumable · Scent", isCrimson: true, name: "Flamme Tiède 42°C · Low-Temp Massage Candle", desc: "Precision 42°C skin-safe melt, pure soy wax & cosmetic shea butter, heavyweight amber glass vessel", moq: "50–200 units", fob: "$3.8 – $6.0", msrp: "$38 – $56", lead: "15–20 Days" },
      { tag: "Consumable · Scent", isCrimson: true, name: "Nectar de Soie · Custom Intimate Lubricant", desc: "Micro-dosed food-grade peach & vanilla notes, medical cleanroom certified water-soluble gel, obsidian UV pump bottle", moq: "100–500 units", fob: "$1.2 – $2.8", msrp: "$24 – $32", lead: "12–20 Days" },
      { tag: "Haptic Craft · Rare", isGold: true, name: "Waveform 02 · Platinum Jelly Palm Rest", desc: "Real anatomical body curve, Shore 00-15 medical platinum silicone, flush CNC brushed champagne brass plaque", moq: "50–200 units", fob: "$7.5 – $13.0", msrp: "$65 – $85", lead: "15–25 Days" },
      { tag: "Numbered Vault · Rare", isGold: true, name: "Jeu Privé · Midnight Foil Cards in Brass Vault", desc: "54 tear-proof black foil cards, 54 couture boudoir photographs, 320g solid CNC brushed brass magnetic vault", moq: "50–200 units", fob: "$8.5 – $16.0", msrp: "$68 – $95", lead: "15–25 Days" },
      { tag: "Numbered Vault · Rare", isGold: true, name: "Obsidienne · Sculptural Body Contour Stone", desc: "100% natural black volcanic obsidian, multi-stage diamond water polish, triple-radii curve with brass logo", moq: "30–100 units", fob: "$9.0 – $18.0", msrp: "$75 – $110", lead: "20–30 Days" }
    ],
    sec4Note: "* Note: Factory FOB estimates are based on 2026 agile flexible supply chain benchmarks; official drop quotes are finalized upon bespoke material confirmation.",
    sec5Title: "05. 8-Step Agile Operational Workflow",
    sec5TableHead: ["Step", "Phase Description", "Lead Party", "Estimated Timeline"],
    sec5Rows: [
      ["<strong>Step 1</strong>", "Theme selection & product matrix curation", "Joint Collaboration", "3 – 5 Days"],
      ["<strong>Step 2</strong>", "Visual design approval & licensing agreement", "Agency / Creator", "5 – 7 Days"],
      ["<strong>Step 3</strong>", "Rapid tooling & physical sample dispatch", "RELIQ ARCHIVE", "7 – 15 Days"],
      ["<strong>Step 4</strong>", "Sample sign-off & tactile feedback", "Agency", "3 Days"],
      ["<strong>Step 5</strong>", "14-Day Limited Pre-order Vault Opens", "RELIQ (Store) + Agency (Traffic)", "14 Days"],
      ["<strong>Step 6</strong>", "Vault close & on-demand batch production", "RELIQ ARCHIVE", "10 – 25 Days"],
      ["<strong>Step 7</strong>", "100% individual photo/video quality audit", "RELIQ ARCHIVE", "2 – 3 Days"],
      ["<strong>Step 8</strong>", "Unmarked DDP courier delivery to fans worldwide", "RELIQ ARCHIVE", "7 – 12 Days"]
    ],
    sec6Title: "06. Financial Model: 300-Unit Benchmark Drop",
    sec6Intro: "Financial projection based on a mid-to-top tier OnlyFans creator (3,000–5,000 active subscribers) launching a <strong>300-unit limited 'Collector Vault Set'</strong>:",
    sec6Kpis: [
      {
        tag: "✦ Agency & Creator Share (70% Net)",
        val: "$13,513.50",
        unit: "USD",
        desc: "<strong>Pure Profit · Zero Inventory Risk (~NT$432,000)</strong><br>Zero upfront capital · Direct payout upon vault closing",
        isHero: true
      },
      {
        tag: "300-Unit Benchmark Gross Revenue",
        val: "$26,400.00",
        unit: "USD",
        desc: "Pre-order AOV $88.00 USD<br>14-Day Limited Drop · High-conversion signature set",
        isHero: false
      },
      {
        tag: "Overall Gross Margin",
        val: "73.1%",
        unit: "($19,305 USD)",
        desc: "Net profit after tooling, DDP air cargo customs & compliant gateway fees",
        isHero: false
      }
    ],
    sec6TableHead: ["Financial Metric", "Per Unit (USD)", "300-Unit Total (USD)", "% of Gross Revenue"],
    sec6Rows: [
      ["<strong>Pre-order Retail Price</strong>", "<strong>$88.00</strong>", "<strong>$26,400.00</strong>", "<strong>100.0%</strong>"],
      ["Blended Manufacturing (Solid Balm + Soap + Rigid Box)", "$12.50", "$3,750.00", "14.2%"],
      ["Global Insured Air Cargo & DDP Customs", "$7.19", "$2,157.00", "8.2%"],
      ["Compliant Merchant & Processing Fee (~4.5%)", "$3.96", "$1,188.00", "4.5%"],
      ["<strong>Net Gross Margin (Gross Profit)</strong>", "<strong>$64.35</strong>", "<strong>$19,305.00</strong>", "<strong>73.1%</strong>"],
      ["<strong>Agency & Creator Net Share (70%)</strong> <span class=\"share-badge\">70% Creator Net</span>", "<strong>$45.04</strong>", "<strong>$13,513.50</strong>", "<strong>Pure profit, 0 inventory liability</strong>"],
      ["RELIQ ARCHIVE Operating Share (30%) <span class=\"share-badge purple\">30% Turnkey Ops</span>", "$19.31", "$5,791.50", "Covers tooling, web ops, QC & support"]
    ],
    sec6Highlight: "✦ <strong>Zero Capital Advance</strong>: All manufacturing and logistics costs are deducted directly from customer pre-order proceeds. The agency and creator bank <strong>$13,500+ USD (~NT$430,000 / €12,500)</strong> in pure margin upon vault closure with zero stock left behind.",
    sec7Title: "07. Compliance, DDP Freight & Data Privacy",
    sec7P1: "<strong>1. Dual-Track Adult-Compliant Merchant Channels</strong>: Integrated with pre-approved Stripe and CCBill high-risk merchant accounts. Built-in chargeback protection and whitelisting prevent fund freezes and account shutdowns.",
    sec7P2: "<strong>2. DDP (Delivered Duty Paid) Global Air Express</strong>: Every parcel clears customs pre-paid with zero surprise tariffs or import hold-ups for international fans.",
    sec7P3: "<strong>3. Unmarked Matte Black Presentation Packaging</strong>: Shipped in plain, unbranded black protective boxes. Bank and credit card statements appear as 'RLQ Archive Atelier' with zero adult descriptors to ensure 100% fan privacy.",
    sec7P4: "<strong>4. Cryptographic Anatomical Scan Storage & Destruction</strong>: All anatomical 3D scans and body contour files are stored in cold air-gapped cryptographic vaults. Physical molds and digital files are certified destroyed or returned 30 days after production verification.",
    ctaTitle: "Ready to launch your roster's premier physical drop?",
    ctaDesc: "Connect with our atelier concierge to receive a customized sampling plan within 24 hours.",
    ctaBtn: "Book an Agency Consultation"
  }
};

let currentProposalLang = localStorage.getItem('reliq_lang') || 'zh';

document.addEventListener('DOMContentLoaded', () => {
  const urlLang = new URLSearchParams(window.location.search).get('lang');
  if (urlLang && (urlLang === 'zh' || urlLang === 'en')) {
    currentProposalLang = urlLang;
  }
  applyProposalLang(currentProposalLang);
  initProposalLangButtons();
});

function initProposalLangButtons() {
  const btnZh = document.getElementById('propLangZh');
  const btnEn = document.getElementById('propLangEn');
  if (btnZh && btnEn) {
    btnZh.addEventListener('click', () => setProposalLanguage('zh'));
    btnEn.addEventListener('click', () => setProposalLanguage('en'));
  }
}

function setProposalLanguage(lang) {
  if (currentProposalLang === lang) return;
  currentProposalLang = lang;
  localStorage.setItem('reliq_lang', lang);
  applyProposalLang(lang);
}

function applyProposalLang(lang) {
  const t = PROPOSAL_I18N[lang];
  document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
  document.title = t.pageTitle;

  const btnZh = document.getElementById('propLangZh');
  const btnEn = document.getElementById('propLangEn');
  if (btnZh && btnEn) {
    btnZh.classList.toggle('active', lang === 'zh');
    btnEn.classList.toggle('active', lang === 'en');
  }

  const setText = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  const setHtml = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = val;
  };

  setText('propBackLink', t.backLink);
  setText('propPrintBtn', t.printBtn);
  setHtml('propDocMeta', t.docMeta);
  setHtml('propDocTitle', t.docTitle);
  setHtml('propDocSummary', t.docSummary);
  setText('propTocTitle', t.tocTitle);

  // TOC links
  t.toc.forEach((item, idx) => {
    const el = document.getElementById(`propToc${idx + 1}`);
    if (el) {
      el.innerHTML = `<span class="toc-num">${item.num}</span> ${item.label}`;
    }
  });

  // Sec 1
  setText('propSec1Title', t.sec1Title);
  setHtml('propSec1Lead', t.sec1Lead);
  setHtml('propSec1Sub', t.sec1Sub);

  // Sec 2
  setText('propSec2Title', t.sec2Title);
  setHtml('propSec2P1', t.sec2P1);
  setHtml('propSec2P2', t.sec2P2);
  setHtml('propSec2P3', t.sec2P3);

  // Sec 3
  setText('propSec3Title', t.sec3Title);
  const sec3Head = document.getElementById('propSec3Head');
  if (sec3Head) {
    sec3Head.innerHTML = `<tr><th style="width: 25%;">${t.sec3TableHead[0]}</th><th style="width: 40%;">${t.sec3TableHead[1]}</th><th style="width: 35%;">${t.sec3TableHead[2]}</th></tr>`;
  }
  const sec3Body = document.getElementById('propSec3Body');
  if (sec3Body) {
    sec3Body.innerHTML = t.sec3Rows.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('');
  }

  // Sec 4
  setText('propSec4Title', t.sec4Title);
  setText('propSec4Intro', t.sec4Intro);
  const sec4Head = document.getElementById('propSec4Head');
  if (sec4Head) {
    sec4Head.innerHTML = `<tr>${t.sec4TableHead.map(h => `<th>${h}</th>`).join('')}</tr>`;
  }
  const sec4Body = document.getElementById('propSec4Body');
  if (sec4Body && t.sec4Rows) {
    sec4Body.innerHTML = t.sec4Rows.map(item => {
      let badgeClass = 'badge-tag';
      if (item.isCrimson) badgeClass += ' crimson';
      let tagStyle = item.isGold ? 'style="background: rgba(196,154,108,0.3); color: #FFF;"' : '';
      return `
        <tr>
          <td><span class="${badgeClass}" ${tagStyle}>${item.tag}</span></td>
          <td><strong>${item.name}</strong><br><small style="color:var(--text-muted)">${item.desc}</small></td>
          <td>${item.moq}</td>
          <td>${item.fob}</td>
          <td>${item.msrp}</td>
          <td>${item.lead}</td>
        </tr>
      `;
    }).join('');
  }
  setText('propSec4Note', t.sec4Note);

  // Sec 5
  setText('propSec5Title', t.sec5Title);
  const sec5Head = document.getElementById('propSec5Head');
  if (sec5Head) {
    sec5Head.innerHTML = `<tr>${t.sec5TableHead.map(h => `<th>${h}</th>`).join('')}</tr>`;
  }
  const sec5Body = document.getElementById('propSec5Body');
  if (sec5Body) {
    sec5Body.innerHTML = t.sec5Rows.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td></tr>`).join('');
  }

  // Sec 6
  setText('propSec6Title', t.sec6Title);
  setHtml('propSec6Intro', t.sec6Intro);
  const kpiGrid = document.getElementById('propSec6KpiGrid');
  if (kpiGrid && t.sec6Kpis) {
    kpiGrid.innerHTML = t.sec6Kpis.map(k => `
      <div class="kpi-card ${k.isHero ? 'hero-kpi' : ''}">
        <div class="kpi-tag">${k.tag}</div>
        <div class="kpi-value">${k.val} <span>${k.unit}</span></div>
        <div class="kpi-desc">${k.desc}</div>
      </div>
    `).join('');
  }
  const sec6Head = document.getElementById('propSec6Head');
  if (sec6Head) {
    sec6Head.innerHTML = `<tr>${t.sec6TableHead.map(h => `<th>${h}</th>`).join('')}</tr>`;
  }
  const sec6Body = document.getElementById('propSec6Body');
  if (sec6Body) {
    sec6Body.innerHTML = t.sec6Rows.map((r, i) => {
      let trClass = '';
      if (i === 0) trClass = 'class="tr-retail-header"';
      if (i === 4) trClass = 'class="tr-gross-profit"';
      if (i === 5) trClass = 'class="tr-agency-share"';
      if (i === 6) trClass = 'class="tr-reliq-share"';
      return `<tr ${trClass}><td>${r[0]}</td><td class="num-cell">${r[1]}</td><td class="num-cell">${r[2]}</td><td>${r[3]}</td></tr>`;
    }).join('');
  }
  setHtml('propSec6Highlight', t.sec6Highlight);

  // Sec 7
  setText('propSec7Title', t.sec7Title);
  setHtml('propSec7P1', t.sec7P1);
  setHtml('propSec7P2', t.sec7P2);
  setHtml('propSec7P3', t.sec7P3);
  setHtml('propSec7P4', t.sec7P4);

  // CTA
  setText('propCtaTitle', t.ctaTitle);
  setText('propCtaDesc', t.ctaDesc);
  setText('propCtaBtn', t.ctaBtn);
}
