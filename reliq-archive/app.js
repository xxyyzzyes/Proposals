/**
 * RELIQ ARCHIVE — 2026 Haute Editorial Interactive Architecture
 * Strictly Bilingual (zh / en), 3D Specular Light, Magnetic Springs, Sensory Drawer
 */

const PRODUCTS = [
  {
    id: 'solid-perfume',
    category: 'collector',
    price: 42,
    reserved: 142,
    total: 200,
    image: 'assets/palette_solid_perfume.jpg',
    gallery: [
      { labelZh: '01 · 典藏黑金滑蓋', labelEn: '01 · Obsidian Gold Case', image: 'assets/palette_solid_perfume.jpg' },
      { labelZh: '02 · 膏體微距特寫', labelEn: '02 · Organic Balm Texture', image: 'assets/angles/solid_perfume_macro.jpg' },
      { labelZh: '03 · 黑金外盒雷雕工藝', labelEn: '03 · Brushed Gold & Engraved Case', image: 'assets/angles/solid_perfume_case.jpg' },
      { labelZh: '04 · 專屬絲絨滑蓋禮盒', labelEn: '04 · Bespoke Presentation Box', image: 'assets/angles/solid_perfume_box.jpg' }
    ],
    visualSpecs: [
      {
        craftZh: 'CRAFT 01 · 外盒工藝',
        craftEn: 'CRAFT 01 · CASE CRAFT',
        titleZh: '高精密金屬滑蓋黑金盒',
        titleEn: 'Brushed Gold & Matte Black Sliding Case',
        descZh: '航太級鋁合金鍛造，表面啞光微砂防指紋處理，激光深雕 RELIQ 經典標識。',
        descEn: 'Aerospace-grade aluminum with matte anti-smudge treatment and laser-engraved RELIQ typography.',
        image: 'assets/angles/solid_perfume_case.jpg'
      },
      {
        craftZh: 'CRAFT 02 · 基底成份',
        craftEn: 'CRAFT 02 · FORMULA',
        titleZh: '天然蜂蠟與冷壓荷荷巴油',
        titleEn: 'Organic Beeswax & Cold-Pressed Jojoba',
        descZh: '零酒精溫和配方，慢速溫熱散香，與體溫自然融合散發私密體香。',
        descEn: 'Zero alcohol skin-safe formula melting gently with body heat for intimate thermal diffusion.',
        image: 'assets/angles/solid_perfume_macro.jpg'
      },
      {
        craftZh: 'CRAFT 03 · 留香時效',
        craftEn: 'CRAFT 03 · DIFFUSION',
        titleZh: '慢速溫熱散香 6 至 8 小時',
        titleEn: '6 to 8 Hours Skin Longevity',
        descZh: '固態慢釋科技，隨身放口袋便攜補香，出汗後依然散發純欲體香。',
        descEn: 'Slow thermal skin diffusion that deepens as body temperature shifts.',
        image: 'assets/palette_solid_perfume.jpg'
      },
      {
        craftZh: 'CRAFT 04 · 專屬包裝',
        craftEn: 'CRAFT 04 · VAULT PRESENTATION',
        titleZh: '純黑絲絨磁吸硬盒 · 避光防護',
        titleEn: 'Discreet Velvet Rigid Presentation Box',
        descZh: '專屬黑色抽屜禮盒，內襯天鵝絨定型槽，純黑無痕航空直達。',
        descEn: 'Bespoke slide-out rigid vault lined with protective velvet for seamless discreet delivery.',
        image: 'assets/angles/solid_perfume_box.jpg'
      }
    ],
    zh: {
      categoryName: 'Collector 典藏系列',
      badge: '首發限定 200 件',
      status: '即刻排單',
      name: '《肌膚微溫》純欲體香固體香膏',
      sensoryPreview: '前調：晨間暖蒸氣、橙花 ｜ 中調：肌膚餘溫、開司米木 ｜ 後調：煙燻香草、黃葵子',
      story: '還原剛洗完澡後頸部與私密處的微熱體香。以天然蜂蠟與冷壓荷荷巴油為基底，裝入霧面黑金滑蓋金屬盒。完全避開液體空運危險品限制，全球合規直達，隨身放口袋輕抹偷聞。',
      specs: {
        '外盒工藝': '高精密金屬滑蓋黑金盒，雷射微雕 RELIQ 徽標',
        '基底成份': '天然蜂蠟、冷壓荷荷巴油、維他命E（零酒精配方）',
        '留香時效': '固態慢速溫熱散香，留香約 6 至 8 小時',
        '國際運送': '100% 避開航空液體禁運，保證全球合規通關',
        '淨含量': '15 克濃縮固態香膏（約可使用 300 次）'
      }
    },
    en: {
      categoryName: 'Collector Archive',
      badge: 'Batch of 200',
      status: 'Active Drop',
      name: 'Baume de Peau No. 01 · Body Scent Balm',
      sensoryPreview: 'Top: Damp Steam & Neroli · Heart: Skin Warmth & Cashmere · Base: Smoked Vanilla & Ambrette',
      story: 'Engineered to capture the warm, intimate fragrance of freshly bathed skin. Formulated on an organic beeswax and cold-pressed jojoba base in a brushed obsidian-gold sliding tin. Completely bypasses aviation liquid bans for seamless global discreet delivery.',
      specs: {
        'Case Craft': 'Brushed gold & matte black sliding case with laser-engraved RELIQ typography',
        'Formula Base': 'Organic beeswax, cold-pressed jojoba oil, vitamin E (Zero Alcohol)',
        'Longevity': 'Slow thermal skin diffusion, lasting 6 to 8 hours',
        'Compliance': '100% compliant with global air cargo regulations',
        'Net Weight': '15g concentrated solid balm (approx. 300 applications)'
      }
    }
  },
  {
    id: 'silhouette-soap',
    category: 'collector',
    price: 38,
    reserved: 88,
    total: 100,
    image: 'assets/palette_silhouette_soap.jpg',
    gallery: [
      { labelZh: '01 · 1:1 局部人體曲線', labelEn: '01 · 1:1 Bodyscape Mold', image: 'assets/palette_silhouette_soap.jpg' },
      { labelZh: '02 · 內封防水膠囊', labelEn: '02 · Sealed Secret Capsule', image: 'assets/angles/silhouette_soap_macro.jpg' },
      { labelZh: '03 · 3D 人體掃描數據', labelEn: '03 · 3D Scan Topology', image: 'assets/crafts/craft_scan_mold.jpg' },
      { labelZh: '04 · 純黑極簡瀝水陶盤', labelEn: '04 · Matte Black Ceramic Dish', image: 'assets/angles/silhouette_soap_dish.jpg' }
    ],
    visualSpecs: [
      {
        craftZh: 'CRAFT 01 · 模具工藝',
        craftEn: 'CRAFT 01 · 3D TOOLING',
        titleZh: '真人 3D 掃描數據 1:1 開模',
        titleEn: '1:1 Anatomical 3D Scan Mold',
        descZh: '捕捉創作者真實生理性感弧度，以食品級加成型模具矽膠高精度翻模。',
        descEn: 'Cast directly from high-resolution 3D scan data to capture authentic feminine curves.',
        image: 'assets/crafts/craft_scan_mold.jpg'
      },
      {
        craftZh: 'CRAFT 02 · 內封機制',
        craftEn: 'CRAFT 02 · SECRET CAPSULE',
        titleZh: '超音波防水密封私密盲盒膠囊',
        titleEn: 'Ultrasonic Waterproof Secret Capsule',
        descZh: '皂體中央真空封入防水膠囊，洗至最後方能解鎖私密影片或衣物信物。',
        descEn: 'Ultrasonic sealed inner capsule revealed only as the botanical soap dissolves.',
        image: 'assets/angles/silhouette_soap_macro.jpg'
      },
      {
        craftZh: 'CRAFT 03 · 案頭陳列',
        craftEn: 'CRAFT 03 · CERAMIC DISH',
        titleZh: '專屬純黑消光瀝水陶盤',
        titleEn: 'Minimalist Matte Ceramic Drainage Dish',
        descZh: '粗陶高溫燒製啞光黑盤，透氣瀝水，擺放浴室如同微縮人體雕塑展陳。',
        descEn: 'Artisanal matte black ceramic dish designed to elevate the soap into a bathroom sculpture.',
        image: 'assets/angles/silhouette_soap_dish.jpg'
      },
      {
        craftZh: 'CRAFT 04 · 數位互聯',
        craftEn: 'CRAFT 04 · NFC HAPTICS',
        titleZh: '手機輕碰解鎖專屬影片',
        titleEn: 'Encrypted Private Access NFC',
        descZh: '內建防偽加密晶片，輕觸即可開啟創作者未公開私密寫真與獨家感謝聲線。',
        descEn: 'Encrypted NFC access key unlocking private collector videos.',
        image: 'assets/crafts/craft_nfc_chip.jpg'
      }
    ],
    zh: {
      categoryName: 'Collector 典藏系列',
      badge: '1:1 人體曲線模具',
      status: '即刻排單',
      name: '《凝形》1:1 局部造型盲盒皂',
      sensoryPreview: '半透琥珀草本植物皂體 · 中央封入防水晶片膠囊 · 解鎖私密影片或布料切片',
      story: '共用創作者 3D 身體掃描數據開模，將胸部、臀部線條凝固為溫潤手工皂。正中央封入防水盲盒膠囊，內藏創作者未公開私密影片 NFC 晶片或衣物切片。洗完方能解鎖，驅動極高回購渴望。',
      specs: {
        '模具工藝': '真人 3D 掃描數據 1:1 開模矽膠皂模',
        '皂體配方': '英國冷壓甜杏仁油、乳木果脂、透明植物甘油基底',
        '內封機制': '超音波防水密封膠囊（含專屬解鎖序號或 1x1cm 織物信物）',
        '衛生安全': '採用專屬複方調香精油，完全符合國際衛妝標準',
        '規格重量': '約 110 克手工冷制皂，附純黑瀝水陶盤'
      }
    },
    en: {
      categoryName: 'Collector Archive',
      badge: '1:1 Bodyscape Mold',
      status: 'Active Drop',
      name: 'Silhouette 1:1 Érotique · Secret Capsule Soap',
      sensoryPreview: 'Translucent honey-amber botanical bar · Sealed waterproof NFC capsule inside',
      story: 'Cast directly from the creator’s authentic 3D scan data into cold-process botanical soap. In the heart rests an ultrasonic sealed capsule containing an encrypted NFC chip unlocking unseen private video footage or a fabric keepsake.',
      specs: {
        'Mold Tech': '1:1 high-resolution anatomical 3D scan mold',
        'Soap Formula': 'Cold-pressed sweet almond oil, shea butter, vegetable glycerin',
        'Sealed Surprise': 'Ultrasonic sealed capsule with private cryptographic access code',
        'Safety': 'Cosmetic-grade bespoke fragrance oils, fully skin-safe',
        'Weight': 'Approx. 110g artisanal soap with matte black dish'
      }
    }
  },
  {
    id: 'massage-candle',
    category: 'collector',
    price: 56,
    reserved: 72,
    total: 100,
    image: 'assets/palette_massage_candle.jpg',
    gallery: [
      { labelZh: '01 · 典藏藥劑燭杯', labelEn: '01 · Apothecary Glass Vessel', image: 'assets/palette_massage_candle.jpg' },
      { labelZh: '02 · 42°C 親膚熔油池', labelEn: '02 · 42°C Warm Oil Pool', image: 'assets/angles/massage_candle_macro.jpg' },
      { labelZh: '03 · 溫熱傾倒按摩情境', labelEn: '03 · 42°C Pour Ambiance', image: 'assets/angles/massage_candle_context.jpg' },
      { labelZh: '04 · 原木防塵滅燭蓋', labelEn: '04 · Solid Walnut Snuffer Lid', image: 'assets/angles/massage_candle_detail.jpg' }
    ],
    visualSpecs: [
      {
        craftZh: 'CRAFT 01 · 熔點控制',
        craftEn: 'CRAFT 01 · THERMAL POINT',
        titleZh: '精密定溫 42°C–45°C 低溫安全熔點',
        titleEn: 'Precision 42°C–45°C Skin-Safe Melt',
        descZh: '點燃後蠟油維持在人體最舒適的溫熱狀態，直接倒在皮膚上溫熱不燙，可作情調按摩油。',
        descEn: 'Engineered melting point produces warm soothing liquid body oil that never burns the skin.',
        image: 'assets/crafts/craft_low_temp_melt.jpg'
      },
      {
        craftZh: 'CRAFT 02 · 蠟質配方',
        craftEn: 'CRAFT 02 · WAX FORMULA',
        titleZh: '100% 天然大豆蠟與乳木果油',
        titleEn: '100% Natural Soy Wax & Shea Butter',
        descZh: '純天然植物油脂，富含維生素E與滋養脂肪酸，按摩後深層潤澤肌膚。',
        descEn: 'Pure cosmetic-grade soy and shea butter transforming into nutrient-dense massage oil.',
        image: 'assets/angles/massage_candle_macro.jpg'
      },
      {
        craftZh: 'CRAFT 03 · 燭杯工藝',
        craftEn: 'CRAFT 03 · GLASS VESSEL',
        titleZh: '重磅琥珀藥劑玻璃杯 + 木質防塵蓋',
        titleEn: 'Heavyweight Amber Apothecary Glass',
        descZh: '手工吹製耐熱厚底玻璃，附胡桃木防塵滅燭蓋，燃燒時長約 45 小時。',
        descEn: 'Hand-blown thermal amber glass with solid walnut timber snuffer lid.',
        image: 'assets/angles/massage_candle_detail.jpg'
      },
      {
        craftZh: 'CRAFT 04 · 情境陪伴',
        craftEn: 'CRAFT 04 · INTIMATE AMBIANCE',
        titleZh: '傾倒溫熱芳療與私密香氣陪伴',
        titleEn: 'Sensual Warm Pouring Body Therapy',
        descZh: '融化後的金色油池散發臥室私密體香，兼具視覺張力與親膚芳療。',
        descEn: 'Warm melting pool transforms into rich sensory body oil for intimate night rituals.',
        image: 'assets/angles/massage_candle_context.jpg'
      }
    ],
    zh: {
      categoryName: 'Collector 典藏系列',
      badge: '42°C 低溫親膚熔點',
      status: '即刻排單',
      name: '《溫焰》42°C 低溫滴蠟按摩香氛燭',
      sensoryPreview: '大豆蠟與乳木果油基底 · 熔化蠟油即為溫熱芳療按摩油 · 雙重私密陪伴',
      story: '特別調校熔點於 42°C～45°C。平時點燃還原創作者臥室的私密體香；融化後的蠟油倒在皮膚上溫熱不燙，可直接作為情調按摩油或微 SM 滴蠟體驗，視覺與觸感張力十足。',
      specs: {
        '蠟質配方': '100% 天然大豆蠟、初榨椰子油、乳木果脂',
        '熔點控制': '精密定溫 42°C–45°C，安全溫熱親膚不灼傷',
        '燭杯材質': '重磅琥珀色藥劑玻璃杯，耐熱手工吹製',
        '燃燒時長': '約 45 小時芳香陪伴，附木質防塵蓋',
        '調香風格': '晚香玉、喀什米爾羊絨、白檀木'
      }
    },
    en: {
      categoryName: 'Collector Archive',
      badge: '42°C Body-Safe Melt',
      status: 'Active Drop',
      name: 'Flamme Tiède 42°C · Low-Temp Massage Candle',
      sensoryPreview: 'Pure soy & shea butter base · Melted pool transforms into warm aromatic body oil',
      story: 'Engineered with a precise 42°C–45°C melting point. Burning it releases the signature fragrance of the creator’s private chamber. The melted golden pool pours warm and soothing on skin for sensual massage.',
      specs: {
        'Wax Formula': '100% natural soy wax, virgin coconut oil, cosmetic shea butter',
        'Thermal Point': 'Controlled 42°C–45°C skin-safe melting temperature',
        'Vessel': 'Heavyweight amber apothecary glass with timber snuffer lid',
        'Burn Time': 'Approx. 45 hours of sensory ambiance',
        'Scent Family': 'Tuberose, Cashmere Warmth, Creamy Sandalwood'
      }
    }
  },
  {
    id: 'sensual-lube',
    category: 'collector',
    price: 24,
    reserved: 185,
    total: 200,
    image: 'assets/palette_sensual_lube.jpg',
    gallery: [
      { labelZh: '01 · 典藏避光瓶身', labelEn: '01 · Obsidian UV Dropper Bottle', image: 'assets/palette_sensual_lube.jpg' },
      { labelZh: '02 · 絲滑水滴微距', labelEn: '02 · Silky Droplet Macro', image: 'assets/angles/sensual_lube_macro.jpg' },
      { labelZh: '03 · 醫療無菌車間生產', labelEn: '03 · ISO Cleanroom Compliance', image: 'assets/crafts/craft_medical_lube.jpg' },
      { labelZh: '04 · 調香原料萃取工藝', labelEn: '04 · Bespoke Scent Extraction', image: 'assets/crafts/craft_fragrance_lab.jpg' }
    ],
    visualSpecs: [
      {
        craftZh: 'CRAFT 01 · 凝露質地',
        craftEn: 'CRAFT 01 · SILKY TEXTURE',
        titleZh: '長效水溶性凝露 · 溫水即淨無殘留',
        titleEn: 'Long-Lasting Water-Soluble Gel',
        descZh: '超絲滑配方，持久濕潤不黏膩，完全親膚溫和，清水即可沖洗乾淨。',
        descEn: 'Ultra-slick water-based formula delivering enduring moisture with zero sticky residue.',
        image: 'assets/angles/sensual_lube_macro.jpg'
      },
      {
        craftZh: 'CRAFT 02 · 衛生認證',
        craftEn: 'CRAFT 02 · MEDICAL GRADE',
        titleZh: 'ISO 醫療器械與計生用品品質認證',
        titleEn: 'ISO Certified Medical Cleanroom',
        descZh: '由國際醫療器械代工大廠生產，通過皮膚刺激性與致敏性嚴格檢測。',
        descEn: 'Manufactured in an ISO-certified cleanroom facility with comprehensive biocompatibility testing.',
        image: 'assets/crafts/craft_medical_lube.jpg'
      },
      {
        craftZh: 'CRAFT 03 · 食用調香',
        craftEn: 'CRAFT 03 · EDIBLE AROMA',
        titleZh: '微量食用級白桃與奶香香草調香',
        titleEn: 'Micro-Dosed Food-Grade Flavoring',
        descZh: '專為親密親吻與親密接觸調製，甜美微醺香氣，安全無虞。',
        descEn: 'Safe for oral intimacy, subtly flavored with natural white peach and velvety vanilla.',
        image: 'assets/crafts/craft_fragrance_lab.jpg'
      },
      {
        craftZh: 'CRAFT 04 · 避光瓶身',
        craftEn: 'CRAFT 04 · UV BOTTLE',
        titleZh: '按壓式純黑消光避光瓶 · 100ml',
        titleEn: 'Matte Obsidian UV-Blocking Bottle',
        descZh: '防漏真空泵頭，阻隔紫外線保持配方活性，外觀如高級保養品般低調奢華。',
        descEn: 'UV-blocking matte container with leakproof pump, blending seamlessly into luxury vanity.',
        image: 'assets/palette_sensual_lube.jpg'
      }
    ],
    zh: {
      categoryName: 'Collector 典藏系列',
      badge: '可食用級調香',
      status: '即刻排單',
      name: '《靈露》創作者專屬調香私密潤滑液',
      sensoryPreview: '絲滑水溶性配方 · 創作者指定專屬香氛 · 高回購私密消耗品',
      story: '找國際醫療器械計生大廠代工水溶性潤滑液，微量加入創作者指定的食用級香調（如蜜桃白茶、奶香香草）。貼上創作者專屬視覺黑金標籤，是倒模與私密器具不可或缺的高毛利搭售品。',
      specs: {
        '配方類型': '超絲滑長效水溶性凝露，溫水即淨無殘留',
        '食用香精': '微量食用級蜜桃與香草萃取，通過敏弱肌膚測試',
        '瓶身工藝': '按壓式純黑消光避光瓶，防漏真空泵頭',
        '容量規格': '100ml 便攜裝',
        '合規認證': '通過 ISO 醫療器械與計生用品品質認證'
      }
    },
    en: {
      categoryName: 'Collector Archive',
      badge: 'Edible Grade Aroma',
      status: 'Active Drop',
      name: 'Nectar de Soie · Custom Scented Intimate Lubricant',
      sensoryPreview: 'Silky water-based formula · Infused with creator bespoke food-grade notes',
      story: 'Formulated by certified medical-grade personal care manufacturers. Water-soluble, zero sticky residue, subtly scented with creator-specified notes of white peach and velvety vanilla.',
      specs: {
        'Base': 'Ultra-slick long-lasting water-soluble formula, washes clean',
        'Flavouring': 'Micro-dosed food-grade peach & vanilla, hypoallergenic',
        'Packaging': 'Matte obsidian UV-blocking bottle with leakproof pump',
        'Volume': '100ml discreet travel size',
        'Certification': 'ISO certified medical-grade facility production'
      }
    }
  },
  {
    id: 'desk-rest',
    category: 'everyday',
    price: 65,
    reserved: 94,
    total: 100,
    image: 'assets/palette_desk_rest.jpg',
    gallery: [
      { labelZh: '01 · 典藏果凍手托', labelEn: '01 · Platinum Palm Rest', image: 'assets/palette_desk_rest.jpg' },
      { labelZh: '02 · 膚感回彈特寫', labelEn: '02 · Soft Gel Rebound', image: 'assets/angles/desk_rest_macro.jpg' },
      { labelZh: '03 · 案頭機械鍵盤實景', labelEn: '03 · Desktop Setup Context', image: 'assets/angles/desk_rest_context.jpg' },
      { labelZh: '04 · 人體工學拓撲開模', labelEn: '04 · Ergonomic 3D Tooling', image: 'assets/crafts/craft_scan_mold.jpg' }
    ],
    visualSpecs: [
      {
        craftZh: 'CRAFT 01 · 開模工藝',
        craftEn: 'CRAFT 01 · TOOLING',
        titleZh: '女星真實局部人體工學弧線開模',
        titleEn: 'Authentic Anatomical Contour Mold',
        descZh: '以高精度 3D 拓撲掃描數據開模，還原溫柔支撐手腕的人體生理曲度。',
        descEn: 'Cast from precision anatomical scans to cradle wrist tendons during typing.',
        image: 'assets/crafts/craft_scan_mold.jpg'
      },
      {
        craftZh: 'CRAFT 02 · 膠體材質',
        craftEn: 'CRAFT 02 · SILICONE GEL',
        titleZh: '醫療級超軟加成型鉑金果凍矽膠',
        titleEn: 'Medical Platinum Silicone (Shore 00-15)',
        descZh: '微透煙粉色果凍膠體，具備如真皮般的柔軟回彈與溫潤觸感，久用不塌陷。',
        descEn: 'Translucent smoky-rose platinum gel providing skin-like cushion and zero deform over time.',
        image: 'assets/angles/desk_rest_macro.jpg'
      },
      {
        craftZh: 'CRAFT 03 · 銘牌工藝',
        craftEn: 'CRAFT 03 · BRASS INLAY',
        titleZh: 'CNC 鍛造拉絲香檳金黃銅金屬銘牌',
        titleEn: 'CNC Brushed Champagne Brass Plaque',
        descZh: '中央手工鑲嵌「RELIQ ARCHIVE · ÉLISE LAURENT」金屬銘牌，激光深雕工藝。',
        descEn: 'Flush-mounted solid brushed brass plaque with precision laser-engraved typography.',
        image: 'assets/palette_desk_rest.jpg'
      },
      {
        craftZh: 'CRAFT 04 · 案頭防滑',
        craftEn: 'CRAFT 04 · MIRROR PU BASE',
        titleZh: '鏡面高附著力吸附防滑底座',
        titleEn: 'High-Grip Mirror PU Non-Slip Base',
        descZh: '緊密吸附木質、皮革與玻璃桌面，適配標準 87/104 鍵盤，辦公案頭光明正大陪伴。',
        descEn: 'Mirror PU base grips tightly to executive desks; fits standard mechanical keyboards.',
        image: 'assets/angles/desk_rest_context.jpg'
      }
    ],
    zh: {
      categoryName: 'Everyday 案頭系列',
      badge: '人體工學 · 香檳金拉絲銘牌',
      status: '即刻排單',
      name: '《暗湧》Élise 鉑金矽膠鍵盤手托',
      sensoryPreview: '超軟醫療級果凍膠灌注 · 內嵌拉絲黃銅金屬銘牌 · 案頭上光明正大的私密觸感',
      story: '打破市面粗糙公版手托。由女星真實局部人體曲線開模，以微透煙粉色超軟鉑金果凍矽膠慢工灌注，中央手工鑲嵌「RELIQ ARCHIVE · ÉLISE LAURENT」香檳金拉絲黃銅金屬銘牌。讓粉絲在打字工作時光明正大擺在案頭，享受真實人體數據的柔軟回彈。',
      specs: {
        '開模工藝': '女星真實局部人體工學弧線工模',
        '膠體材質': '醫療級超軟加成型鉑金矽膠（Shore 00-15 超柔硬度）',
        '銘牌工藝': 'CNC 鍛造拉絲香檳金黃銅銘牌，激光深雕',
        '底座防滑': 'PU 鏡面高附著力吸附防滑底座',
        '尺寸規格': '440 x 85 x 26 mm（適配標準 87/104 鍵盤）'
      }
    },
    en: {
      categoryName: 'Everyday Desktop',
      badge: 'Ergonomic Contour · Brass Inlay',
      status: 'Active Drop',
      name: 'Waveform 02 · Platinum Jelly Palm Rest',
      sensoryPreview: 'Medical-grade platinum jelly silicone · Inlaid brushed brass plaque · Elegant executive presence',
      story: 'Molded from authentic ergonomic body contours. Poured in translucent smoky-rose platinum memory gel with a flush-mounted brushed champagne gold plaque engraved with RELIQ ARCHIVE · ÉLISE LAURENT.',
      specs: {
        'Tooling': 'Custom ergonomic human contour master mold',
        'Silicone Gel': 'Medical-grade platinum addition silicone (Shore 00-15 soft)',
        'Inlay Plaque': 'CNC brushed champagne bronze with laser-etched typography',
        'Base': 'Non-slip high-grip mirror PU base',
        'Dimensions': '440 x 85 x 26 mm (Fits standard mechanical keyboards)'
      }
    }
  },
  {
    id: 'silk-pillow',
    category: 'everyday',
    price: 98,
    reserved: 63,
    total: 80,
    image: 'assets/palette_silk_pillow.jpg',
    gallery: [
      { labelZh: '01 · 粉彩輪廓真絲枕面', labelEn: '01 · Silk Art Pillowcase', image: 'assets/palette_silk_pillow.jpg' },
      { labelZh: '02 · 6A 桑蠶真絲微距', labelEn: '02 · 6A Silk Weave Macro', image: 'assets/angles/silk_pillow_macro.jpg' },
      { labelZh: '03 · 寢居情境 · NFC 碰觸', labelEn: '03 · Bedside Tap NFC', image: 'assets/angles/silk_pillow_context.jpg' },
      { labelZh: '04 · 純黑抽屜禮盒展陳', labelEn: '04 · Drawer Gift Box', image: 'assets/angles/silk_pillow_unboxing.jpg' },
      { labelZh: '05 · 法式粉彩輪廓線條', labelEn: '05 · Contour Brushwork', image: 'assets/crafts/craft_art_print.jpg' }
    ],
    visualSpecs: [
      {
        craftZh: 'CRAFT 01 · 枕套面料',
        craftEn: 'CRAFT 01 · 6A SILK FABRIC',
        titleZh: '100% 6A 級 22mm 重磅天然桑蠶真絲',
        titleEn: '100% 6A 22mm Heavyweight Mulberry Silk',
        descZh: '天然桑蠶絲柔滑防皺、呵護肌膚與髮絲，自帶天然真絲珠光與微涼親膚體感。',
        descEn: 'Heavyweight pure silk with fluid drape and natural moisture retention for skin & hair.',
        image: 'assets/crafts/craft_silk_weave.jpg'
      },
      {
        craftZh: 'CRAFT 02 · 藝術印繪',
        craftEn: 'CRAFT 02 · BLUSH-PINK ART',
        titleZh: '法式極簡粉彩人體剪影輪廓畫 + 親筆簽名',
        titleEn: 'French Minimalist Blush-Pink Paint Contour',
        descZh: '枕面以粉紅塗料手繪感線條勾勒女星性感背影，落款玫瑰金花體簽名「Élise Laurent」。',
        descEn: 'Artistic blush-pink paint silhouette contour drawing paired with cursive typography.',
        image: 'assets/crafts/craft_art_print.jpg'
      },
      {
        craftZh: 'CRAFT 03 · 數位晶片',
        craftEn: 'CRAFT 03 · NFC HAPTICS',
        titleZh: '柔性耐水洗 NFC 晶片 · 解鎖 10 段 ASMR',
        titleEn: 'Flexible Waterproof NFC · 10 Bedtime Tracks',
        descZh: '可耐水洗 50 次以上。睡前手機輕碰枕角刺繡標籤，即刻解鎖 10 段女星專屬枕畔私語。',
        descEn: 'Washable NFC chip unlocking an encrypted audio stream of 10 intimate bedroom whispers.',
        image: 'assets/crafts/craft_nfc_chip.jpg'
      },
      {
        craftZh: 'CRAFT 04 · 禮盒包裝',
        craftEn: 'CRAFT 04 · UNBOXING VAULT',
        titleZh: '純黑抽屜磁吸防護硬盒 · 專屬編號憑證',
        titleEn: 'Matte Obsidian Drawer Box & Certificate',
        descZh: '加厚純黑天地蓋硬盒，附女星燙金專屬收藏信物卡，全程隱密空運直達。',
        descEn: 'Housed in a rigid slide-out presentation vault with an individually numbered registry card.',
        image: 'assets/angles/silk_pillow_unboxing.jpg'
      }
    ],
    zh: {
      categoryName: 'Everyday 案頭系列',
      badge: '法式粉彩輪廓畫 · 內嵌 NFC 晶片',
      status: '即刻排單',
      name: '《枕畔耳語》Élise 粉彩輪廓畫真絲語音枕',
      sensoryPreview: '法式極簡粉彩微感官輪廓畫 · 100% 6A 級 22mm 桑蠶真絲 · 手機輕碰解鎖 10 段 ASMR 晚安聲線',
      story: '徹底告別普通白色飯店枕頭。選用頂級 100% 6A 級 22 毫米天然桑蠶絲，枕面以法式極簡粉彩筆觸精繪女星性感背影曲線輪廓畫，並落款女星親筆花體簽名「Élise Laurent」。內嵌柔性耐水洗 NFC 晶片，夜晚入眠前手機輕碰即解鎖 10 段專屬 ASMR 枕邊低語。',
      specs: {
        '枕套面料': '100% 6A 級 22mm 天然重磅桑蠶絲（柔滑防皺、呵護肌膚）',
        '藝術印刷': '法式極簡粉彩女星線條輪廓畫 + 玫瑰金手寫簽名',
        '晶片配置': '柔性耐水洗 NFC 音頻晶片（可水洗 50 次以上）',
        '數位內容': '感應即解鎖 10 段女星專屬未公開 ASMR 晚安耳語',
        '尺寸規格': '48 x 74 cm（標準雙人單側枕套規格）'
      }
    },
    en: {
      categoryName: 'Everyday Desktop',
      badge: 'Pink Paint Contour Art · NFC ASMR',
      status: 'Active Drop',
      name: "L'Heure Blanche · Whispers Silk Art Pillow",
      sensoryPreview: 'French minimalist blush pink contour art · 100% 6A 22mm Mulberry silk · Tap NFC for 10 bedtime notes',
      story: 'Far beyond a plain white pillow. Crafted from premier 100% 6A 22mm Mulberry silk, showcasing an artistic blush-pink paint silhouette contour of the female muse paired with Élise Laurent’s calligraphy signature. Includes a washable NFC chip unlocking 10 private bedtime ASMR whispers.',
      specs: {
        'Fabric': '100% 6A 22mm heavyweight pure Mulberry silk (skin-conditioning)',
        'Artwork': 'Minimalist blush pink paint contour illustration with cursive signature',
        'Haptics': 'Flexible waterproof NFC chip (washable up to 50 cycles)',
        'Audio Track': 'Unlocks encrypted stream of 10 private intimate whisper tracks',
        'Dimensions': '48 x 74 cm (Standard luxury pillowcase dimensions)'
      }
    }
  },
  {
    id: 'blindfold-01',
    category: 'everyday',
    price: 52,
    reserved: 75,
    total: 100,
    image: 'assets/palette_blindfold_mask.jpg',
    gallery: [
      { labelZh: '01 · 夜幕桑蠶真絲眼罩', labelEn: '01 · Silk Sensory Blindfold', image: 'assets/palette_blindfold_mask.jpg' },
      { labelZh: '02 · 玫瑰金法文刺繡微距', labelEn: '02 · Embroidered Script Macro', image: 'assets/angles/blindfold_macro.jpg' },
      { labelZh: '03 · 22mm 親膚桑蠶真絲', labelEn: '03 · Dual 22mm Silk Weave', image: 'assets/crafts/craft_silk_weave.jpg' }
    ],
    visualSpecs: [
      {
        craftZh: 'CRAFT 01 · 面料工藝',
        craftEn: 'CRAFT 01 · SILK FABRIC',
        titleZh: '雙面 100% 6A 級 22mm 重磅桑蠶真絲',
        titleEn: 'Dual-Faced 100% 6A 22mm Mulberry Silk',
        descZh: '純黑微光外層搭配深酒紅親膚內裡，自帶微涼膚感與極致包覆柔滑。',
        descEn: 'Pure midnight black silk exterior with a skin-soothing deep burgundy interior.',
        image: 'assets/crafts/craft_silk_weave.jpg'
      },
      {
        craftZh: 'CRAFT 02 · 刺繡工藝',
        craftEn: 'CRAFT 02 · EMBROIDERY',
        titleZh: '香檳玫瑰金絲線法文私語微刺繡',
        titleEn: 'Metallic Rose Gold Calligraphy Script',
        descZh: '表面精緻刺繡女星親筆法文書寫體「Ferme les yeux, je suis là」，平整無刮感。',
        descEn: 'Intricately embroidered with creator whisper: "Ferme les yeux, je suis là".',
        image: 'assets/angles/blindfold_macro.jpg'
      },
      {
        craftZh: 'CRAFT 03 · 內填遮光',
        craftEn: 'CRAFT 03 · BLACKOUT FLOSS',
        titleZh: '天然蠶絲棉輕柔填充 · 100% 物理遮光',
        titleEn: 'Natural Silk Floss · 100% Blackout',
        descZh: '天然蠶絲棉層疊填充，自帶微配重安撫感，寬版真絲彈力帶完全不勒髮根。',
        descEn: 'Layered silk floss delivers gentle therapeutic contour pressure and complete darkness.',
        image: 'assets/crafts/craft_silk_weave.jpg'
      },
      {
        craftZh: 'CRAFT 04 · 極致包覆',
        craftEn: 'CRAFT 04 · SENSORY CONTOUR',
        titleZh: '寬版真絲彈力帶 · 零壓睡眠感',
        titleEn: 'Silk-Wrapped Zero Tension Headband',
        descZh: '全包覆真絲包裹彈力帶，長戴完全不壓迫眼球與髮根，帶來極致安全感。',
        descEn: 'Pure silk contouring band providing tension-free deep darkness for skin and sleep.',
        image: 'assets/palette_blindfold_mask.jpg'
      }
    ],
    zh: {
      categoryName: 'Everyday 案頭系列',
      badge: '6A 級 22mm 桑蠶絲 · 玫瑰金刺繡',
      status: '即刻排單',
      name: '《夜幕》L\'Ombre de Soie 6A 重磅真絲微醺眼罩',
      sensoryPreview: '純黑與深酒紅雙面重磅真絲 · 玫瑰金法文私語刺繡「Ferme les yeux」 · 閨房感官微醺遮光',
      story: '精選頂級 6A 級 22 毫米天然桑蠶絲，純黑微光外層搭配親膚酒紅內裡。表面以香檳玫瑰金絲線精緻刺繡女星親筆法文書寫體「Ferme les yeux, je suis là（閉上雙眼，我在這裡）」。自帶輕微配重與柔滑觸感，睡前佩戴兼具極致遮光護膚與感官剝奪的私密包覆感。',
      specs: {
        '面料材質': '雙面 100% 6A 級 22mm 重磅天然桑蠶真絲',
        '刺繡工藝': '香檳玫瑰金絲線微刺繡，立體精緻無刮感',
        '頭帶配置': '寬版全真絲彈力包裹頭帶，完全不勒髮根',
        '內填工藝': '純天然天然蠶絲棉填充，100% 物理遮光',
        '附贈配件': '同色系純黑消光便攜真絲束口袋'
      }
    },
    en: {
      categoryName: 'Everyday Desktop',
      badge: '6A 22mm Mulberry Silk · Embroidered',
      status: 'Active Drop',
      name: "L'Ombre de Soie · Mulberry Silk Sensory Blindfold",
      sensoryPreview: 'Pure midnight & burgundy 22mm silk · Rose gold script embroidery · Sensory deprivation intimacy',
      story: 'Tailored from heavyweight 6A 22mm pure Mulberry silk. Embroidered in shimmering rose-gold thread with the creator’s cursive whisper: "Ferme les yeux, je suis là". Designed for sensory deprivation meditation and skin-protecting deep sleep.',
      specs: {
        'Fabric': 'Dual-faced 100% 6A grade 22mm pure Mulberry silk',
        'Embroidery': 'High-density metallic rose-gold thread script',
        'Headband': 'Wide silk-covered elastic band (zero hair pulling)',
        'Filling': 'Natural mulberry silk floss for complete blackout cushion',
        'Pouch': 'Includes matching matte black drawstring silk travel pouch'
      }
    }
  },
  {
    id: 'tee-01',
    category: 'everyday',
    price: 58,
    reserved: 112,
    total: 150,
    image: 'assets/palette_sateen_tee.jpg',
    gallery: [
      { labelZh: '01 · 典藏水洗黑', labelEn: '01 · Washed Charcoal Tee', image: 'assets/palette_sateen_tee.jpg' },
      { labelZh: '02 · 300g 雙股精梳棉', labelEn: '02 · Mercerized Cotton Macro', image: 'assets/angles/tee_macro.jpg' },
      { labelZh: '03 · 背部粉彩剪影輪廓', labelEn: '03 · Back Silhouette Art', image: 'assets/angles/tee_context.jpg' },
      { labelZh: '04 · 下擺耐水洗 NFC 織嘜', labelEn: '04 · Woven NFC Key Label', image: 'assets/crafts/craft_nfc_chip.jpg' }
    ],
    visualSpecs: [
      {
        craftZh: 'CRAFT 01 · 面料工藝',
        craftEn: 'CRAFT 01 · COTTON KNIT',
        titleZh: '300g 雙股雙紗絲光精梳純棉',
        titleEn: '300g Mercerized Double-Gauge Cotton',
        descZh: '重磅挺括不透膚，水洗緊密防縮防起球，親膚微涼透氣。',
        descEn: 'Heavyweight opaque drape with silky sateen finish and anti-pilling wash treatment.',
        image: 'assets/angles/tee_macro.jpg'
      },
      {
        craftZh: 'CRAFT 02 · 剪裁設計',
        craftEn: 'CRAFT 02 · BOYFRIEND FIT',
        titleZh: '法式微性感寬版落肩剪裁',
        titleEn: 'French Relaxed Drop-Shoulder Silhouette',
        descZh: '慵懶寬鬆版型，隨性露出頸部與鎖骨線條，男女粉絲皆宜，兼具居家與出街高定感。',
        descEn: 'Effortless relaxed silhouette with flattering neckline highlighting delicate collarbones.',
        image: 'assets/angles/tee_context.jpg'
      },
      {
        craftZh: 'CRAFT 03 · 藝術印繪',
        craftEn: 'CRAFT 03 · CONTOUR ART',
        titleZh: '耐水洗絲網微浮雕粉彩剪影印花',
        titleEn: 'Wash-Resistant Screenprint Contour Art',
        descZh: '背部精準印製女星粉彩背影線條畫與法文花體手寫簽名「Élise Laurent」。',
        descEn: 'Features subtle blush-pink paint contour illustration with cursive signature Élise Laurent.',
        image: 'assets/crafts/craft_art_print.jpg'
      },
      {
        craftZh: 'CRAFT 04 · 數位互聯',
        craftEn: 'CRAFT 04 · NFC SELFIE KEY',
        titleZh: '下擺真絲織標內嵌 NFC 晶片',
        titleEn: 'Woven Silk Label with Encrypted NFC',
        descZh: '手機輕碰下擺織標，即可解鎖女星試衣間專屬未公開自拍寫真與感謝聲線。',
        descEn: 'Tap smartphone to woven label to unlock exclusive fitting room Polaroids and voice note.',
        image: 'assets/crafts/craft_nfc_chip.jpg'
      }
    ],
    zh: {
      categoryName: 'Everyday 案頭生活系列',
      badge: '300g 重磅絲光棉 · NFC 晶片',
      status: '即刻排單',
      name: '《私語微光》300g 重磅絲光棉微性感剪裁 T-shirt',
      sensoryPreview: '雙股雙紗絲光精梳純棉 · 背部粉彩剪影輪廓畫 · 內縫 NFC 解鎖專屬自拍寫真',
      story: '徹底告別市面粗糙公版印花 T 恤。精選 300g 重磅雙股絲光精梳純棉，寬版落肩微性感法式剪裁。背部低調印製女星粉彩人體剪影與親筆花體簽名「Élise Laurent」，下擺內縫防偽真絲標與耐水洗 NFC 晶片，手機輕碰解鎖專屬更衣室私密照。',
      specs: {
        '面料克重': '300g/m² 雙股雙紗頂級絲光精梳純棉（厚實不透、高抗皺抗起球）',
        '領口工藝': '加厚 3.5cm 高彈羅紋加固領口，保證久穿機洗不變形',
        '印花工藝': '環保透氣微浮雕絲網印花（耐水洗 50 次以上無裂紋）',
        '數位信物': '下擺內縫超薄柔性防水 NFC 晶片（解鎖未公開自拍）',
        '版型尺碼': '法式慵懶微廓形落肩（適配 S / M / L / XL 男女通穿）'
      }
    },
    en: {
      categoryName: 'Everyday Lifestyle',
      badge: '300g Sateen Cotton · NFC Chip',
      status: 'Active Drop',
      name: "L'Heure Blanche · 300g Mercerized Contour Tee",
      sensoryPreview: '300g double-gauge combed cotton · Back blush silhouette contour art · NFC unlocks fitting room photos',
      story: 'A luxury fashion staple far beyond standard merch tees. Crafted from 300g heavyweight mercerized combed cotton in a French relaxed drop-shoulder cut. The back showcases the muse’s blush-pink paint silhouette contour drawing and cursive calligraphy, while a hidden hem NFC tag unlocks private fitting room Polaroids.',
      specs: {
        'Fabric Weight': '300g/m² double-gauge mercerized combed pure cotton',
        'Collar Craft': 'Thick 3.5cm high-density anti-deform ribbed collar',
        'Print Method': 'Breathable wash-resistant micro-relief silkscreen print',
        'Haptic Key': 'Ultrasonic sealed flexible NFC chip in silk hem label',
        'Silhouette': 'French relaxed boyfriend fit (Available in S / M / L / XL)'
      }
    }
  },
  {
    id: 'tote-01',
    category: 'everyday',
    price: 78,
    reserved: 78,
    total: 100,
    image: 'assets/palette_canvas_tote.jpg',
    gallery: [
      { labelZh: '01 · 典藏水洗黑托特', labelEn: '01 · Washed Charcoal Tote', image: 'assets/palette_canvas_tote.jpg' },
      { labelZh: '02 · 24oz 加密帆布與皮革提把', labelEn: '02 · 24oz Canvas & Leather Straps', image: 'assets/angles/tote_macro.jpg' },
      { labelZh: '03 · 深酒紅真絲緞面內襯', labelEn: '03 · Burgundy Silk Lining', image: 'assets/angles/tote_context.jpg' }
    ],
    visualSpecs: [
      {
        craftZh: 'CRAFT 01 · 帆布工藝',
        craftEn: 'CRAFT 01 · 24oz CANVAS',
        titleZh: '24oz 頂級加密加厚水洗帆布',
        titleEn: '24oz Heavyweight Waxed Canvas',
        descZh: '重磅密織硬挺厚實，耐磨抗撕裂，表面微蠟工藝防水防潑。',
        descEn: 'Heavyweight structured cotton canvas with water-resistant micro-waxed finish.',
        image: 'assets/angles/tote_macro.jpg'
      },
      {
        craftZh: 'CRAFT 02 · 皮革五金',
        craftEn: 'CRAFT 02 · LEATHER & BRASS',
        titleZh: '義大利植鞣黑皮革提把與黃銅卯釘',
        titleEn: 'Italian Veg-Tanned Leather & Brass Hardware',
        descZh: '經年使用泛出溫潤光澤，手感舒適不勒手，加厚黃銅卯釘雙重鉚合。',
        descEn: 'Supple full-grain vegetable-tanned leather straps secured with solid brass rivets.',
        image: 'assets/angles/tote_macro.jpg'
      },
      {
        craftZh: 'CRAFT 03 · 內襯奢華',
        craftEn: 'CRAFT 03 · SILK LINING',
        titleZh: '深酒紅真絲緞面內襯 · 防震筆電夾層',
        titleEn: 'Burgundy Pure Silk Lining & 16" Sleeve',
        descZh: '內裡鋪設酒紅真絲緞面，內置 16 吋加厚防震筆電隔層與黃銅拉鍊暗袋。',
        descEn: 'Lined in opulent deep burgundy silk satin with a padded 16-inch laptop compartment.',
        image: 'assets/angles/tote_context.jpg'
      },
      {
        craftZh: 'CRAFT 04 · 立體剪裁',
        craftEn: 'CRAFT 04 · TAILORED DRAPE',
        titleZh: '出街微廓形立體硬挺包型',
        titleEn: 'Structured Silhouette with 20L Volume',
        descZh: '42x34x14cm 奢華容量，日常通勤與周末短旅皆能從容優雅兼備。',
        descEn: 'Architectural silhouette holding shape whether empty or loaded with executive essentials.',
        image: 'assets/palette_canvas_tote.jpg'
      }
    ],
    zh: {
      categoryName: 'Everyday 案頭生活系列',
      badge: '24oz 重磅帆布 · 義大利植鞣皮',
      status: '即刻排單',
      name: '《微醺出走》24oz 植鞣皮革高定重磅帆布托特袋',
      sensoryPreview: '24oz 加密水洗帆布 · 義大利植鞣皮革提把 · 深酒紅真絲緞面內襯與筆電夾層',
      story: '兼具巴黎靜奢美學（Quiet Luxury）與極高實用性。選用 24oz 頂級重磅硬挺水洗帆布，配置義大利黑色植鞣皮革提把與實心黃銅卯釘。內裡鋪滿深酒紅重磅真絲緞面，特設 16 吋加厚筆電防震隔層。正面手工鑲嵌獨立編號黃銅銘牌，出街背在肩上低調奢華、耐磨一生。',
      specs: {
        '帆布規格': '24oz 加密加厚高密水洗帆布（立體硬挺不塌軟、微防潑水）' ,
        '提把皮革': '義大利進口頂級植鞣頭層牛皮（舒適寬度，耐重 25kg 以上）',
        '內裡襯布': '深酒紅高密純真絲緞面（滑順防刮、奢華質感）',
        '內部隔層': '16 吋筆電加厚防撞隔層 + 雙口插袋 + 黃銅拉鍊暗袋',
        '尺寸容量': '42 x 34 x 14 cm（容量約 20L，適配日常通勤與周末短旅）'
      }
    },
    en: {
      categoryName: 'Everyday Lifestyle',
      badge: '24oz Heavy Canvas · Veg Leather',
      status: 'Active Drop',
      name: "L'Atelier 24oz Waxed Canvas Weekend Tote",
      sensoryPreview: '24oz dense washed canvas · Italian veg-tanned leather handles · Burgundy silk lining & 16" laptop sleeve',
      story: 'A masterclass in quiet luxury utility. Built from 24oz dense structured cotton canvas accented with Italian black vegetable-tanned leather straps and solid brass rivets. Lined in opulent deep burgundy silk satin with a dedicated 16-inch padded laptop sleeve and an inlaid brass edition plaque.',
      specs: {
        'Canvas Fabric': '24oz heavyweight dense-weave washed canvas (structured & water-repellent)',
        'Handle Leather': 'Full-grain Italian vegetable-tanned leather straps (rated 25kg+)',
        'Interior Lining': 'Deep burgundy heavyweight silk satin (scratch-protective luxury)',
        'Compartments': 'Padded 16" laptop compartment, dual drop pockets, brass zip pocket',
        'Dimensions': '42 x 34 x 14 cm (Approx. 20L capacity for commute and weekend getaways)'
      }
    }
  },
  {
    id: 'poker-01',
    category: 'rare',
    price: 68,
    reserved: 84,
    total: 100,
    image: 'assets/palette_poker_deck.jpg',
    gallery: [
      { labelZh: '01 · 黑箔撲克與黃銅牌匣', labelEn: '01 · Foil Deck & Brass Vault', image: 'assets/palette_poker_deck.jpg' },
      { labelZh: '02 · 24K 香檳金燙印微距', labelEn: '02 · 24K Gold Foil Macro', image: 'assets/angles/poker_macro.jpg' },
      { labelZh: '03 · 絲絨桌面與滑蓋牌匣', labelEn: '03 · Casino Ambiance & Vault', image: 'assets/angles/poker_context.jpg' },
      { labelZh: '04 · 金屬黑箔燙金工藝', labelEn: '04 · Metallic Foil Craft', image: 'assets/crafts/craft_foil_emboss.jpg' }
    ],
    visualSpecs: [
      {
        craftZh: 'CRAFT 01 · 卡牌工藝',
        craftEn: 'CRAFT 01 · METALLIC FOIL',
        titleZh: '高抗撕裂防水純黑啞光金屬箔',
        titleEn: 'Tear-Proof Waterproof Midnight Foil',
        descZh: '54 張特製防水金屬箔卡牌，燙印 24K 香檳金線條，手感滑順俐落。',
        descEn: '54 waterproof black metallic cards hot-stamped with genuine champagne gold accents.',
        image: 'assets/crafts/craft_foil_emboss.jpg'
      },
      {
        craftZh: 'CRAFT 02 · 牌匣工藝',
        craftEn: 'CRAFT 02 · 320g BRASS VAULT',
        titleZh: '實心黃銅 CNC 切削鑄造牌匣 (淨重 320g)',
        titleEn: 'Solid CNC-Milled Brushed Brass Vault',
        descZh: '拉絲拋光黃銅滑蓋匣，磁吸閉合清脆金屬聲，案頭上沉甸大器的黃金擺件。',
        descEn: 'Hefty 320g solid brass box with smooth magnetic slide and laser-engraved edition serial.',
        image: 'assets/palette_poker_deck.jpg'
      },
      {
        craftZh: 'CRAFT 03 · 視覺藝術',
        craftEn: 'CRAFT 03 · 54 PORTRAITS',
        titleZh: '54 幅女星微醺時裝與光影肖像大片',
        titleEn: '54 Exclusive Fashion Boudoir Photographs',
        descZh: '全套牌面收錄女星專屬微醺時裝藝術大片，高定審美、拒絕廉價直白。',
        descEn: 'Every face card showcases a bespoke editorial high-fashion portrait of the muse.',
        image: 'assets/angles/poker_macro.jpg'
      },
      {
        craftZh: 'CRAFT 04 · 洗牌手感',
        craftEn: 'CRAFT 04 · CASINO GLIDE',
        titleZh: '專業賭場級滑順切牌與抗磨損塗層',
        titleEn: 'Professional Casino Glide Finish',
        descZh: '高滑順度專業切牌回彈手感，防水防油，隨附純黑天鵝絨防塵袋。',
        descEn: 'Flawless casino shuffle glide with durable scratch-resistant protective lacquer.',
        image: 'assets/angles/poker_context.jpg'
      }
    ],
    zh: {
      categoryName: 'Rare 稀缺系列',
      badge: '限量 100 套 · 重磅黃銅匣',
      status: '即將截止',
      name: '《博弈》Jeu Privé 純黑金屬箔私密撲克與黃銅匣',
      sensoryPreview: '54 張防水純黑金屬箔 · 女星專屬高定時裝藝術大片 · 320g 重磅拉絲黃銅滑蓋牌匣',
      story: '54 張特製防水純黑啞光金屬箔卡牌。全套牌面收錄女星專屬微醺時裝與光影藝術大片，燙印香檳金邊框與 RELIQ Monogram；搭配實心拉絲黃銅磁吸滑蓋牌匣（重達 320g），底座激光刻印獨立編號。兼具德州撲克對弈樂趣與案頭黃金擺件收藏價值。',
      specs: {
        '卡牌工藝': '高抗撕裂防水純黑啞光金屬箔，燙印 24K 香檳金',
        '視覺內容': '54 幅女星專屬微醺時裝與光影肖像大片（非廉價直白）',
        '牌匣工藝': '實心黃銅 CNC 切削鑄造，淨重 320g，磁吸滑蓋',
        '限量編號': '牌匣底座激光深雕 EDITION 001/100 獨立藏品編號',
        '手感特性': '高滑順度專業洗牌切牌手感，防水防折抗磨損'
      }
    },
    en: {
      categoryName: 'Rare Vault',
      badge: 'Edition of 100 · Solid Brass Vault',
      status: 'Almost Sold Out',
      name: 'Jeu Privé · Midnight Foil Playing Cards in Brass Vault',
      sensoryPreview: '54 waterproof matte black foil cards · 54 bespoke editorial fashion photographs · 320g solid brass case',
      story: '54 custom waterproof matte-black metallic foil cards. Every face card displays an intimate high-fashion editorial portrait of the creator with hot-stamped champagne gold foil accents. Housed inside a 320g solid CNC-milled brushed brass sliding vault engraved with individual serial numbers.',
      specs: {
        'Deck Finish': 'Tear-proof waterproof midnight black foil with gold accents',
        'Portraits': '54 exclusive high-fashion boudoir photographs',
        'Vault Case': 'Solid CNC-milled brushed brass box (320g) with magnetic lid',
        'Serial': 'Laser-engraved EDITION 001/100 registry serial on base',
        'Handling': 'Professional casino glide, snap-back memory, smudge-resistant'
      }
    }
  },
  {
    id: 'obsidian-01',
    category: 'rare',
    price: 85,
    reserved: 42,
    total: 100,
    image: 'assets/palette_obsidian_stone.jpg',
    gallery: [
      { labelZh: '01 · 天然黑曜石美體石', labelEn: '01 · Obsidian Contour Stone', image: 'assets/palette_obsidian_stone.jpg' },
      { labelZh: '02 · 水磨鏡面微距反光', labelEn: '02 · Water Polish Mirror Macro', image: 'assets/angles/obsidian_macro.jpg' },
      { labelZh: '03 · 天然火山礦物打磨', labelEn: '03 · Natural Volcanic Mineral Polish', image: 'assets/crafts/craft_obsidian_polish.jpg' }
    ],
    visualSpecs: [
      {
        craftZh: 'CRAFT 01 · 石材原料',
        craftEn: 'CRAFT 01 · VOLCANIC MINERAL',
        titleZh: '100% 天然黑色火山岩黑曜石',
        titleEn: '100% Natural Volcanic Black Obsidian',
        descZh: '精選天然火山深層結晶，純淨無雜質，長久維持微涼親膚膚感。',
        descEn: 'Selected from dense natural volcanic obsidian, naturally cool to the touch.',
        image: 'assets/crafts/craft_obsidian_polish.jpg'
      },
      {
        craftZh: 'CRAFT 02 · 水磨工藝',
        craftEn: 'CRAFT 02 · WATER POLISH',
        titleZh: '手工多道精密水磨鏡面拋光',
        titleEn: 'Hand Water-Polished Liquid Mirror Sheen',
        descZh: '觸感溫潤如液態黑玉，邊緣極致圓滑不刮膚，光線照射下泛出深邃暗芒。',
        descEn: 'Hand water-polished across multiple diamond stages into a liquid smooth tactile edge.',
        image: 'assets/angles/obsidian_macro.jpg'
      },
      {
        craftZh: 'CRAFT 03 · 人體工學',
        craftEn: 'CRAFT 03 · BODY ERGONOMICS',
        titleZh: '三道漸進式人體工學撫觸曲線',
        titleEn: 'Triple-Radii Anatomical Contouring',
        descZh: '完美貼合下顎線、鎖骨與私密身體曲線，搭配體香精油使用帶來極致撫觸。',
        descEn: 'Flowing curves designed to glide over jawline, collarbones, and delicate contours.',
        image: 'assets/palette_obsidian_stone.jpg'
      },
      {
        craftZh: 'CRAFT 04 · 觸感體溫',
        craftEn: 'CRAFT 04 · COOLING TOUCH',
        titleZh: '280g 沉甸手感 · 長效沁涼舒緩',
        titleEn: '280g Heavy Tactile Heft',
        descZh: '天然火山礦物具備極佳冷熱傳導特性，冰鎮或微溫撫觸均能喚醒深層感官。',
        descEn: 'Dense volcanic mineral maintains soothing natural chill to relieve skin and muscle tension.',
        image: 'assets/angles/obsidian_macro.jpg'
      }
    ],
    zh: {
      categoryName: 'Rare 稀缺系列',
      badge: '天然火山黑曜石 · 限量 100 尊',
      status: '即將截止',
      name: '《冷冽》Obsidienne 天然黑曜石曲線美體石',
      sensoryPreview: '天然黑曜石手工水磨 · 人體工學鎖骨與私密貼合曲線 · 香檳金拉絲黃銅標牌',
      story: '精選 100% 天然黑色火山岩黑曜石，手工水磨出極致圓潤的人體工學波浪曲線。觸感冰涼重甸，緊密貼合鎖骨、下顎線與身體肌膚，搭配體香精油使用帶來深層撫觸與微醺快感。中央鑲嵌「RELIQ · OBSIDIENNE」香檳金拉絲黃銅標牌，附純黑磁吸植絨禮盒。',
      specs: {
        '石材原料': '100% 天然黑色火山岩黑曜石（手工多道水磨拋光）',
        '五金標牌': '拉絲香檳金黃銅徽標，微弧貼合鑲嵌',
        '人體曲線': '三道漸進式人體工學弧線（下顎、鎖骨、身體大面積撫觸）',
        '重量規格': '280g 沉甸手感，長久維持微涼膚感',
        '隨附包裝': '純黑硬殼消光磁吸禮盒 + 黑色天鵝絨收納袋'
      }
    },
    en: {
      categoryName: 'Rare Vault',
      badge: 'Natural Obsidian Stone · Edition of 100',
      status: 'Almost Sold Out',
      name: 'Obsidienne · Sculptural Body Contour Stone',
      sensoryPreview: 'Hand-polished natural black volcanic obsidian · Ergonomic body contouring curves · Brushed brass plaque',
      story: 'Carved from 100% natural black volcanic obsidian and water-polished to a mirror-smooth liquid finish. Its sweeping anatomical curves cradle the jawline, collarbones, and intimate skin contours, diffusing tension when paired with body scent oil.',
      specs: {
        'Mineral': '100% natural black volcanic obsidian (hand water-polished)',
        'Hardware': 'Brushed champagne brass logo plaque inlaid flush',
        'Ergonomics': 'Triple-radii anatomical curve for sculpting & sensory touch',
        'Weight': '280g heavy tactile heft for cooling skin therapy',
        'Presentation': 'Matte obsidian magnetic rigid box with velvet pouch'
      }
    }
  }
];

// Bilingual Dictionaries (Strict Zero-Mixing)
const I18N = {
  zh: {
    brandTagline: "ARCHIVE · 2026",
    navCollections: "三大系列",
    navArchive: "典藏展陳",
    navProcess: "合作流程",
    navAgencies: "經紀方案",
    navProposal: "完整企劃書",
    navSampleBtn: "索取樣品",
    headerBagText: "預購夾",
    tickerNotice: "首發限定：【微白時刻 · L'Heure Blanche】14 天限時預購金庫開放中",
    tickerClosesLabel: "金庫倒數截止：",
    heroTitle: "值得永久典藏的<em>私密實體。</em>",
    heroDesc: "為經紀公司與頂級創作者打造的限量實體工藝。共同選款、小量開模、全隱蔽直達死忠粉絲。",
    heroSampleBtn: "索取打樣企劃",
    heroExploreBtn: "探索三大系列",
    collectionsTitle: "三大感官系列，同一工藝標竿。",
    collectionsSubtitle: "專為創作者市場量身訂製：嗅覺消耗品、共用 3D 模具與觸覺互動信物。",
    viewAllArchiveBtn: "瀏覽全部 11 件單品",
    bentoTag1: "SIGNATURE CONSUMABLE 嗅覺消耗品",
    bentoTitle1: "Collector 典藏系列",
    bentoDesc1: "調香肥皂內封防水盲盒膠囊（含私密兌換碼或貼身布料切片），搭配純欲體香固體香膏。以嗅覺記憶拉高回購率，售完即刻封模。",
    bentoBtn1: "深入品鑑規格",
    bentoTag2: "TACTILE & LIFESTYLE 案頭與生活",
    bentoTitle2: "Everyday 案頭生活系列",
    bentoDesc2: "人體工學鉑金果凍矽膠手托、粉彩輪廓語音枕、微醺眼罩、300g 絲光棉微性感 T 恤與 24oz 植鞣皮革帆布托特袋。高奢融入日常。",
    bentoBtn2: "品鑑",
    bentoTag3: "HIGH-MARGIN ARTIFACTS 稀缺信物",
    bentoTitle3: "Rare 稀缺系列",
    bentoDesc3: "54 張純黑金屬箔微醺藝術撲克與重磅黃銅牌匣；天然黑曜石手工水磨美體石。極致稀缺，嚴格編號限量配額。",
    bentoBtn3: "品鑑",
    archiveTitle: "典藏作品展陳",
    archiveSubtitle: "首發 11 款私密感官單品 · 工廠小量打樣 · 預購制零庫存",
    tabAll: "全部單品 (11)",
    tabCollector: "Collector 典藏 (4)",
    tabEveryday: "Everyday 案頭生活 (5)",
    tabRare: "Rare 稀缺 (2)",
    inspectBtnText: "品鑑規格",
    reserveBtnText: "加入預購夾",
    processSectionTitle: "四步成真：從靈感企劃到粉絲家門。",
    step1Title: "選定主題與故事",
    step1Desc: "從三大系列中挑選適合創作者的產品矩陣，共同制定氣味、模具或信物主題故事。",
    step2Title: "工廠打樣核准",
    step2Desc: "我們對接工廠進行快速打樣，寄送實物樣品供經紀公司與創作者親自確認質感與細節。",
    step3Title: "開放限時預購",
    step3Desc: "在專屬合規金庫開放 14 天限時限量預購，由創作者於 OnlyFans 及社群同步預熱發售。",
    step4Title: "量產質檢出貨",
    step4Desc: "預購達標後統一下單生產，出貨前影音品檢，純黑無印隱蔽包裝與 DDP 全球快遞直達。",
    agencyHeadline: "經紀公司專注內容與粉絲。供應鏈全部交給我們。",
    agencySubhead: "專為 OnlyFans 經紀團隊量身打造的實體化後盾，零庫存壓迫、利潤透明。",
    agencyColYouTitle: "You 經紀公司",
    agencyYou1: "選定主題與款式，核准形象視覺與調香文案",
    agencyYou2: "取得創作者書面授權與身體 3D 掃描檔",
    agencyYou3: "於 OnlyFans 與社群平台發佈限量預售消息",
    agencyYou4: "在專屬私密拍立得或編號收藏卡上親筆簽名",
    agencyColWeTitle: "我們 (RELIQ ARCHIVE)",
    agencyColWePill: "RELIQ ARCHIVE",
    agencyWe1: "優質製造供應鏈對接、小量開模與實體樣品寄送",
    agencyWe2: "建置獨立高奢預購網站與合規金流通道",
    agencyWe3: "出貨前逐一照片/影片品檢，無瑕疵保證",
    agencyWe4: "純黑無印防護盒裝、DDP 跨境物流與全程售後客服",
    agencyGuaranteeText: "全預購制生產，經紀公司與創作者零庫存、零資金壓迫。 成本結構完全透明，我們與您共同開拓 OnlyFans 之外的高利潤第二收入。",
    agencyCtaBtn: "洽詢合作方案",
    contactTitle: "從一位創作者、一次限量 Drop 開始。",
    contactDesc: "告訴我們您旗下的創作者風格與受眾規模，我們將在 24 小時內為您量身定制一份打樣與選品企劃書。",
    contactBtn: "立即預約打樣企劃",
    footerCopy: "© 2026 RELIQ ARCHIVE. 為成人創作者與經紀公司量身定制之實體工藝。購買者須年滿 18 歲。",
    footerDiscreet: "全程 DDP 隱蔽全球航空物流",
    footerBackTop: "↑ 置頂",
    footerProposalLink: "📄 瀏覽商業企劃書",
    drawerSpecsHeading: "工藝與材質參數",
    drawerPrivacyHeading: "✦ 純黑無印消光包裝與隱蔽帳單承諾",
    drawerPrivacyDesc: "所有包裹均由純黑無標籤箱體封裝出貨。對帳單一律顯示「RLQ Archive Atelier」，全程嚴格守護您的隱私。",
    sampleModalBadge: "經紀專屬禮遇",
    sampleModalTitle: "索取打樣企劃書",
    lblAgencyName: "經紀公司或創作者名稱",
    lblEmail: "專屬聯絡信箱",
    lblKitChoice: "感興趣的打樣系列",
    lblNote: "備註或創作者風格說明（選填）",
    sampleSubmitBtn: "送出打樣企劃預約",
    cartModalBadge: "機密預購清單",
    cartModalTitle: "私密預購典藏夾",
    cartTotalLabel: "預購總額 (USD)",
    cartTermsNote: "* 採限量預購排單制。預購結束後 10–25 天由 DDP 專線空運送達。外盒無敏感字樣，帳單顯示 RLQ Archive Atelier。",
    cartCheckoutBtn: "確認提交預購訂單",
    pwaNav1: "三大系列",
    pwaNav2: "典藏展陳",
    pwaNavBespoke: "客製工坊",
    pwaNav3: "經紀方案",
    pwaNav4: "預購夾",
    navBespoke: "客製工坊",
    heroBadgeEdition: "EDITION 01 · L'HEURE BLANCHE",
    heroBadgeSub: "100% 客製打樣 · MOQ 50 · 零庫存",
    heroBadgePill: "HAUTE ATELIER",
    bespokeEyebrow: "INTERACTIVE BESPOKE ATELIER · 互動客製工坊",
    bespokeTitle: "為旗下創作者量身定制。細膩至每一毫米。",
    bespokeSubtitle: "全品項支援小量開模、自選專屬調香金字塔、客製黃銅雷雕與刺繡、以及 NFC 數位私密特權綁定。",
    bespokeMoqBadge: "起訂量 50 件 · 零庫存風險",
    lblCustomCreator: "創作者名稱 / 專屬識別 (Creator Handle)",
    hintCustomCreator: "即時預覽雷射深雕銘牌或真絲刺繡效果",
    lblCustomCarrier: "選擇客製工藝載體 (Bespoke Carrier)",
    carrierBrass: "香檳金黃銅銘牌",
    carrierSilk: "6A 桑蠶真絲法式刺繡",
    carrierTin: "霧面黑金金屬滑蓋",
    lblCustomScent: "專屬簽名調香金字塔 (Olfactory Signature)",
    scent1Name: "Peau Sucrée · 純欲白桃",
    scent1Tag: "晨間微溫",
    scent1Desc: "前調：晨間暖蒸氣、橙花 ｜ 中調：白桃果肉、開司米木 ｜ 後調：煙燻香草、黃葵子",
    scent2Name: "Nuit Fumée · 煙燻波本",
    scent2Tag: "微醺情調",
    scent2Desc: "前調：苦橙葉、黑胡椒 ｜ 中調：浸泡波本香草、羊絨 ｜ 後調：乳木果油、白檀",
    scent3Name: "Thé Noir · 午夜黑茶",
    scent3Tag: "靜謐冷冽",
    scent3Desc: "前調：佛手柑、小荳蔻 ｜ 中調：大吉嶺重焙黑茶、無花果 ｜ 後調：泥煤雪松、黑曜石冷香",
    lblCustomNfc: "內嵌 NFC 解鎖私密特權 (Encrypted NFC Perk)",
    perkAsmrTitle: "🎙️ 10 段專屬枕邊 ASMR 私語音頻",
    perkAsmrDesc: "手機輕碰真絲枕套或織標，專屬加密串流播放創作者未公開晚安聲線",
    perkPolaroidTitle: "📸 試衣間未公開拍立得私密寫真庫",
    perkPolaroidDesc: "感應晶片直達創作者高解析私密自拍雲端相簿（具一次性防盜錄浮水印）",
    perkVipTitle: "🔑 限量金庫私密社群專屬通行證",
    perkVipDesc: "購買典藏套組之死忠粉絲專屬，直通創作者專屬私密 Telegram / Discord 頻道",
    btnApplyBespoke: "✦ 將此客製規格帶入打樣企劃預約",
    previewLblScent: "專屬調香",
    previewLblPerk: "NFC 數位特權",
    previewLblMoq: "起訂門檻",
    bespokeSecurityNote: "創作者 3D 生物數據採最高機密離線加密存儲，出貨核可 30 天內依約銷毀模具或冷備份歸還經紀公司。",
    roiPillBadge: "LIVE PROFIT SIMULATOR · 收益試算",
    roiTitle: "經紀公司收益試算儀：以真實數據看見無庫存利潤",
    roiSubhead: "拖動滑桿輸入創作者數據，即時獲知單次 14 天限時預購 Drop 之純淨收益（經紀方與創作者享 70% 淨利潤，成本由預購款結算，0 墊資）。",
    lblRoiSubs: "創作者活躍訂閱粉絲數 (Active Subscribers)",
    lblRoiConv: "預購轉化率 (Pre-order Conversion Rate)",
    lblRoiTier: "預售產品組合定價 (Product Drop Tier)",
    tierSingleTitle: "輕奢單品",
    tierSingleDesc: "固體香膏 / 盲盒皂",
    tierCollectorTitle: "典藏套裝",
    tierCollectorDesc: "香膏+冷製皂+拍立得",
    tierGrandTitle: "高定金庫",
    tierGrandDesc: "T恤+語音枕+黃銅匣",
    badgeRecommended: "推薦",
    roiProfitEyebrow: "經紀公司與創作者預計純淨收益 (70% NET PROFIT)",
    roiLblOrders: "預計鎖定預購訂單量",
    roiLblRevenue: "預計總營收 (Total Revenue)",
    roiLblCost: "製造+DDP空運+合規手續費",
    roiLblUpfront: "經紀方前期資金墊付",
    roiValUpfront: "$0.00 USD (零庫存風險)",
    btnLockRoi: "✦ 鎖定此收益模型 · 索取打樣企劃",
    cartDemoBadge: "✦ AGENCY B2B LIVE DEMO",
    cartDemoNoticeText: "此為為您旗下創作者建置之<strong>粉絲端限時金庫結帳系統實機演示</strong>。串接 Stripe / CCBill 白名單合規通道與 DDP 全球跨境免稅空運，外盒純黑無痕，帳單顯示中性。",
    toastAdded: "✦ 已將作品加入您的私密預購夾",
    toastSubmitted: "✓ 預購訂單已提交！專屬加密憑證已發送至您的信箱。",
    toastSampleReq: "✓ 打樣企劃預約已送出！我們的樣品顧問將在 24 小時內與您聯繫。"
  },
  en: {
    brandTagline: "HAUTE ATELIER · 2026",
    navCollections: "Collections",
    navArchive: "The Archive",
    navBespoke: "Bespoke Atelier",
    navProcess: "Process",
    navAgencies: "For Agencies",
    navProposal: "Full Proposal",
    navSampleBtn: "Request a Sample",
    headerBagText: "Vault Bag",
    tickerNotice: "DROP 01: [L'HEURE BLANCHE] · 14-DAY LIMITED PRE-ORDER VAULT ACTIVE",
    tickerClosesLabel: "VAULT CLOSES IN:",
    heroTitle: "Merch worth <em>keeping.</em>",
    heroDesc: "Limited-run physical artifacts for the creators your agency represents. Designed with them, made in small batches, shipped discreetly to their fans.",
    heroSampleBtn: "Request a Sample Plan",
    heroExploreBtn: "Explore Collections",
    heroBadgeEdition: "EDITION 01 · L'HEURE BLANCHE",
    heroBadgeSub: "100% Bespoke · MOQ 50 · Zero Inventory",
    heroBadgePill: "HAUTE ATELIER",
    collectionsTitle: "Three collections, one standard of finish.",
    collectionsSubtitle: "Curated specifically for the creator economy: sensory consumables, shared 3D molds, and haptic keepsakes.",
    viewAllArchiveBtn: "View All 11 Objects",
    bentoTag1: "SIGNATURE CONSUMABLE",
    bentoTitle1: "Collector",
    bentoDesc1: "Scented botanical soap with a sealed waterproof secret capsule inside, paired with body scent balm. Fixed-run production closing upon sellout.",
    bentoBtn1: "Inspect Specifications",
    bentoTag2: "TACTILE & LIFESTYLE",
    bentoTitle2: "Everyday",
    bentoDesc2: "Platinum memory jelly wrist rest, pink contour silk voice pillow, 22mm silk sensory blindfold, 300g sateen tee, and 24oz canvas tote. Subtle companions for daily life.",
    bentoBtn2: "Inspect",
    bentoTag3: "HIGH-MARGIN ARTIFACTS",
    bentoTitle3: "Rare",
    bentoDesc3: "54 midnight metallic foil couture playing cards in a solid brass vault; hand-carved natural black obsidian body sculpting stone. Strictly numbered allocations.",
    bentoBtn3: "Inspect",
    archiveTitle: "The Curated Archive",
    archiveSubtitle: "11 Bespoke Intimate Artifacts · Small-Batch Factory Sampling · Zero Inventory Risk",
    tabAll: "All Objects (11)",
    tabCollector: "Collector (4)",
    tabEveryday: "Everyday Lifestyle (5)",
    tabRare: "Rare (2)",
    inspectBtnText: "Specifications",
    reserveBtnText: "Add to Vault Bag",
    bespokeEyebrow: "INTERACTIVE BESPOKE ATELIER",
    bespokeTitle: "Tailored to your creators. Down to the millimeter.",
    bespokeSubtitle: "Every single object supports micro-tooling, custom olfactory pyramids, laser-engraved brass, cursive silk embroidery, and encrypted NFC digital access keys.",
    bespokeMoqBadge: "MOQ 50 UNITS · ZERO INVENTORY",
    lblCustomCreator: "Creator Name / Unique Identifier (Creator Handle)",
    hintCustomCreator: "Real-time visual rendering of laser brass engraving or silk embroidery",
    lblCustomCarrier: "Select Bespoke Product Carrier",
    carrierBrass: "Brushed Champagne Brass",
    carrierSilk: "6A Silk Cursive Embroidery",
    carrierTin: "Matte Obsidian Sliding Tin",
    lblCustomScent: "Signature Olfactory Pyramid",
    scent1Name: "Peau Sucrée · White Peach Warmth",
    scent1Tag: "Morning Steam",
    scent1Desc: "Top: Morning Steam, Neroli · Heart: White Peach, Cashmere · Base: Smoked Vanilla, Ambrette",
    scent2Name: "Nuit Fumée · Smoked Bourbon",
    scent2Tag: "Intimate Ambiance",
    scent2Desc: "Top: Petitgrain, Black Pepper · Heart: Bourbon Vanilla, Cashmere · Base: Shea Butter, Sandalwood",
    scent3Name: "Thé Noir · Midnight Black Tea",
    scent3Tag: "Cool Mineral",
    scent3Desc: "Top: Bergamot, Cardamom · Heart: Dark Darjeeling Tea, Fig · Base: Peaty Cedarwood, Obsidian Scent",
    lblCustomNfc: "Embedded NFC Encrypted Fan Perk",
    perkAsmrTitle: "🎙️ 10 Private Bedtime ASMR Whisper Tracks",
    perkAsmrDesc: "Tap smartphone to silk pillow or woven tag to stream encrypted unpublished bedtime whispers",
    perkPolaroidTitle: "📸 Backstage Fitting Room Uncensored Polaroids",
    perkPolaroidDesc: "Sensor chip directly accesses creator private high-res cloud gallery with dynamic anti-leak watermark",
    perkVipTitle: "🔑 Collector Vault Private VIP Community Access",
    perkVipDesc: "Exclusive gateway for top collectors directly connecting to creator private Telegram / Discord channel",
    btnApplyBespoke: "✦ Apply Custom Specs to Sample Kit Request",
    previewLblScent: "Bespoke Scent",
    previewLblPerk: "NFC Access Perk",
    previewLblMoq: "Batch Minimum",
    bespokeSecurityNote: "All creator 3D anatomical data is stored on cold, encrypted offline servers. Molds are destroyed or returned after 30 days.",
    processSectionTitle: "From idea to doorstep in four moves.",
    step1Title: "Choose a theme",
    step1Desc: "Pick a collection and the olfactory, anatomical, or relic story behind it.",
    step2Title: "Approve the sample",
    step2Desc: "We coordinate rapid factory sampling and deliver a physical sample to your agency before anything is made.",
    step3Title: "Open pre-orders",
    step3Desc: "Fans pre-order through a bespoke compliance storefront during a 14-day window. Production follows.",
    step4Title: "We make and ship",
    step4Desc: "Quality-checked via photos before dispatch. Arrives in unmarked black packaging with insured global DDP courier.",
    agencyHeadline: "You keep the relationship. We handle the factory.",
    agencySubhead: "The premier physical manufacturing infrastructure tailored for OnlyFans creator agencies.",
    agencyColYouTitle: "You (Agency)",
    agencyYou1: "Choose the theme and approve visual styling and fragrance notes",
    agencyYou2: "Share creator image rights and anatomical 3D scan mesh",
    agencyYou3: "Announce the limited drop window on OnlyFans and social feeds",
    agencyYou4: "Hand-sign numbered collector cards and authentic Polaroids",
    agencyColWeTitle: "We (RELIQ ARCHIVE)",
    agencyColWePill: "RELIQ ARCHIVE",
    agencyWe1: "Direct factory sourcing, small-batch tooling, and physical sampling",
    agencyWe2: "Compliant high-conversion storefront setup and merchant processing",
    agencyWe3: "Photo and video quality inspection before leaving the atelier",
    agencyWe4: "Matte black unmarked packaging, DDP shipping, and concierge support",
    agencyGuaranteeText: "Everything is strictly pre-order: zero inventory risk and zero upfront capital for your agency. Transparent profit sharing on high-margin drops.",
    agencyCtaBtn: "Explore Agency Partnership",
    roiPillBadge: "LIVE PROFIT SIMULATOR",
    roiTitle: "Agency Profit Simulator: Quantifying Zero-Inventory Returns",
    roiSubhead: "Drag the sliders to project net earnings from a single 14-day pre-order drop. Agencies receive 70% of gross margin; 0 capital advanced.",
    lblRoiSubs: "Creator Active Subscribers",
    lblRoiConv: "Pre-order Conversion Rate",
    lblRoiTier: "Product Drop Tier",
    tierSingleTitle: "Single Item",
    tierSingleDesc: "Balm / Soap ($42)",
    tierCollectorTitle: "Collector Set",
    tierCollectorDesc: "Balm + Soap + Box ($88)",
    tierGrandTitle: "Haute Vault",
    tierGrandDesc: "Tee + Pillow + Vault ($198)",
    badgeRecommended: "RECOMMENDED",
    roiProfitEyebrow: "PROJECTED AGENCY & CREATOR NET MARGIN (70%)",
    roiLblOrders: "Projected Pre-Order Units",
    roiLblRevenue: "Total Gross Revenue",
    roiLblCost: "Production + DDP Air Freight + Merchant Fees",
    roiLblUpfront: "Agency Upfront Capital Required",
    roiValUpfront: "$0.00 USD (Zero Inventory Risk)",
    btnLockRoi: "✦ Lock in This ROI Model · Request Sample Kit",
    cartDemoBadge: "✦ AGENCY B2B LIVE DEMO",
    cartDemoNoticeText: "This is a <strong>live functional demonstration of the fans' vault checkout storefront</strong> built for your agency. Integrates Stripe & CCBill high-risk whitelisting, insured DDP global courier, and discreet unbranded billing.",
    contactTitle: "Start with one creator and one drop.",
    contactDesc: "Tell us who you represent and their audience aesthetic. We will return a tailored sampling and product proposal within 24 hours.",
    contactBtn: "Request a Sample Plan",
    footerCopy: "© 2026 RELIQ ARCHIVE. Merchandise for adult creators and their agencies. Buyers must be 18 or older.",
    footerDiscreet: "DISCREET DDP GLOBAL LOGISTICS",
    footerBackTop: "↑ TOP",
    footerProposalLink: "📄 View Business Proposal",
    drawerSpecsHeading: "CRAFT & MATERIAL SPECIFICATIONS",
    drawerPrivacyHeading: "✦ UNMARKED MATTE BLACK PACKAGING & DISCREET BILLING",
    drawerPrivacyDesc: "All parcels arrive in unbranded matte black presentation boxes. Credit card billing appears as 'RLQ Archive Atelier' with zero adult terms on records.",
    sampleModalBadge: "AGENCY CONCIERGE",
    sampleModalTitle: "Request a Sample Plan",
    lblAgencyName: "Agency or Creator Name",
    lblEmail: "Confidential Contact Email",
    lblKitChoice: "Sample Kit Preference",
    lblNote: "Aesthetic Notes or Audience Profile (Optional)",
    sampleSubmitBtn: "Submit Sample Plan Request",
    cartModalBadge: "CONFIDENTIAL PRE-ORDER",
    cartModalTitle: "Private Vault Bag",
    cartTotalLabel: "PRE-ORDER TOTAL (USD)",
    cartTermsNote: "* Produced on-demand following vault closure. Delivered in 10–25 days via DDP courier. Discreet packaging and billing.",
    cartCheckoutBtn: "Confirm Confidential Pre-Order",
    pwaNav1: "Collections",
    pwaNav2: "The Archive",
    pwaNavBespoke: "Bespoke",
    pwaNav3: "Agencies",
    pwaNav4: "Vault Bag",
    toastAdded: "✦ Added to your Private Vault Bag",
    toastSubmitted: "✓ Pre-order submitted. Encrypted voucher sent to your email.",
    toastSampleReq: "✓ Sample plan request received! Our concierge will connect within 24 hours."
  }
};

// Global App State
const urlParams = new URLSearchParams(window.location.search);
let currentLang = urlParams.get('lang') || localStorage.getItem('reliq_lang') || 'zh';
let currentCategory = 'all';
let cart = [];
let activeDrawerProduct = null;

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  applyLanguage(currentLang);
  initCountdownTimer();
  initDrapeMousePhysics();
  initMagneticButtons();
  initCardTilt();
  initDossierKeyboard();
  initScrollReveals();
  updateBespokePreview();
  calculateAgencyRoi();
  setTimeout(() => {
    const activeTab = document.querySelector('.filter-tab.active');
    if (activeTab) updateFilterPill(activeTab);
  }, 100);
  window.addEventListener('resize', () => {
    const tab = document.querySelector('.filter-tab.active');
    if (tab) updateFilterPill(tab);
  });
});

// --------------------------------------------------------------------------
// Language Switcher Logic
// --------------------------------------------------------------------------
function initLanguageSwitcher() {
  const btnZh = document.getElementById('langBtnZh');
  const btnEn = document.getElementById('langBtnEn');

  if (btnZh && btnEn) {
    btnZh.addEventListener('click', () => switchLanguage('zh'));
    btnEn.addEventListener('click', () => switchLanguage('en'));
  }
}

function switchLanguage(lang) {
  if (currentLang === lang) return;
  currentLang = lang;
  localStorage.setItem('reliq_lang', lang);
  applyLanguage(lang);
}

function applyLanguage(lang) {
  const dict = I18N[lang];
  document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';

  // Toggle button styling
  const btnZh = document.getElementById('langBtnZh');
  const btnEn = document.getElementById('langBtnEn');
  if (btnZh && btnEn) {
    if (lang === 'zh') {
      btnZh.classList.add('active');
      btnEn.classList.remove('active');
    } else {
      btnEn.classList.add('active');
      btnZh.classList.remove('active');
    }
  }

  // Update Top Navigation
  setElemText('brandTagline', dict.brandTagline);
  setElemText('navCollections', dict.navCollections);
  setElemText('navArchive', dict.navArchive);
  setElemText('navBespoke', dict.navBespoke);
  setElemText('navProcess', dict.navProcess);
  setElemText('navAgencies', dict.navAgencies);
  setElemText('navProposal', dict.navProposal);
  setElemText('navSampleBtn', dict.navSampleBtn);
  setElemText('headerBagText', dict.headerBagText);

  // Update Ticker
  setElemText('tickerNotice', dict.tickerNotice);
  setElemText('tickerClosesLabel', dict.tickerClosesLabel);

  // Update Hero & Hero Badge
  const heroTitleEl = document.getElementById('heroTitle');
  if (heroTitleEl) heroTitleEl.innerHTML = dict.heroTitle;
  setElemText('heroDesc', dict.heroDesc);
  setElemText('heroSampleBtn', dict.heroSampleBtn);
  setElemText('heroExploreBtn', dict.heroExploreBtn);
  setElemText('heroBadgeEdition', dict.heroBadgeEdition);
  setElemText('heroBadgeSub', dict.heroBadgeSub);
  setElemText('heroBadgePill', dict.heroBadgePill);

  // Update Collections Bento
  setElemText('collectionsTitle', dict.collectionsTitle);
  setElemText('collectionsSubtitle', dict.collectionsSubtitle);
  setElemText('viewAllArchiveBtn', dict.viewAllArchiveBtn);
  setElemText('bentoTag1', dict.bentoTag1);
  setElemText('bentoTitle1', dict.bentoTitle1);
  setElemText('bentoDesc1', dict.bentoDesc1);
  setElemText('bentoBtn1', dict.bentoBtn1);
  setElemText('bentoTag2', dict.bentoTag2);
  setElemText('bentoTitle2', dict.bentoTitle2);
  setElemText('bentoDesc2', dict.bentoDesc2);
  setElemText('bentoBtn2', dict.bentoBtn2);
  setElemText('bentoTag3', dict.bentoTag3);
  setElemText('bentoTitle3', dict.bentoTitle3);
  setElemText('bentoDesc3', dict.bentoDesc3);
  setElemText('bentoBtn3', dict.bentoBtn3);

  // Update Archive Section
  setElemText('archiveTitle', dict.archiveTitle);
  setElemText('archiveSubtitle', dict.archiveSubtitle);
  setElemText('tabAll', dict.tabAll);
  setElemText('tabCollector', dict.tabCollector);
  setElemText('tabEveryday', dict.tabEveryday);
  setElemText('tabRare', dict.tabRare);

  // Update Bespoke Atelier
  setElemText('bespokeEyebrow', dict.bespokeEyebrow);
  setElemText('bespokeTitle', dict.bespokeTitle);
  setElemText('bespokeSubtitle', dict.bespokeSubtitle);
  setElemText('bespokeMoqBadge', dict.bespokeMoqBadge);
  setElemText('lblCustomCreator', dict.lblCustomCreator);
  setElemText('hintCustomCreator', dict.hintCustomCreator);
  setElemText('lblCustomCarrier', dict.lblCustomCarrier);
  setElemText('carrierBrass', dict.carrierBrass);
  setElemText('carrierSilk', dict.carrierSilk);
  setElemText('carrierTin', dict.carrierTin);
  setElemText('lblCustomScent', dict.lblCustomScent);
  setElemText('scent1Name', dict.scent1Name);
  setElemText('scent1Tag', dict.scent1Tag);
  setElemText('scent1Desc', dict.scent1Desc);
  setElemText('scent2Name', dict.scent2Name);
  setElemText('scent2Tag', dict.scent2Tag);
  setElemText('scent2Desc', dict.scent2Desc);
  setElemText('scent3Name', dict.scent3Name);
  setElemText('scent3Tag', dict.scent3Tag);
  setElemText('scent3Desc', dict.scent3Desc);
  setElemText('lblCustomNfc', dict.lblCustomNfc);
  setElemText('perkAsmrTitle', dict.perkAsmrTitle);
  setElemText('perkAsmrDesc', dict.perkAsmrDesc);
  setElemText('perkPolaroidTitle', dict.perkPolaroidTitle);
  setElemText('perkPolaroidDesc', dict.perkPolaroidDesc);
  setElemText('perkVipTitle', dict.perkVipTitle);
  setElemText('perkVipDesc', dict.perkVipDesc);
  setElemText('btnApplyBespoke', dict.btnApplyBespoke);
  setElemText('previewLblScent', dict.previewLblScent);
  setElemText('previewLblPerk', dict.previewLblPerk);
  setElemText('previewLblMoq', dict.previewLblMoq);
  setElemText('bespokeSecurityNote', dict.bespokeSecurityNote);

  // Update Process
  setElemText('processSectionTitle', dict.processSectionTitle);
  setElemText('step1Title', dict.step1Title);
  setElemText('step1Desc', dict.step1Desc);
  setElemText('step2Title', dict.step2Title);
  setElemText('step2Desc', dict.step2Desc);
  setElemText('step3Title', dict.step3Title);
  setElemText('step3Desc', dict.step3Desc);
  setElemText('step4Title', dict.step4Title);
  setElemText('step4Desc', dict.step4Desc);

  // Update Agencies
  setElemText('agencyHeadline', dict.agencyHeadline);
  setElemText('agencySubhead', dict.agencySubhead);
  setElemText('agencyColYouTitle', dict.agencyColYouTitle);
  setElemText('agencyYou1', dict.agencyYou1);
  setElemText('agencyYou2', dict.agencyYou2);
  setElemText('agencyYou3', dict.agencyYou3);
  setElemText('agencyYou4', dict.agencyYou4);
  setElemText('agencyColWeTitle', dict.agencyColWeTitle);
  setElemText('agencyColWePill', dict.agencyColWePill);
  setElemText('agencyWe1', dict.agencyWe1);
  setElemText('agencyWe2', dict.agencyWe2);
  setElemText('agencyWe3', dict.agencyWe3);
  setElemText('agencyWe4', dict.agencyWe4);
  setElemText('agencyGuaranteeText', dict.agencyGuaranteeText);
  setElemText('agencyCtaBtn', dict.agencyCtaBtn);

  // Update ROI Simulator
  setElemText('roiPillBadge', dict.roiPillBadge);
  setElemText('roiTitle', dict.roiTitle);
  setElemText('roiSubhead', dict.roiSubhead);
  setElemText('lblRoiSubs', dict.lblRoiSubs);
  setElemText('lblRoiConv', dict.lblRoiConv);
  setElemText('lblRoiTier', dict.lblRoiTier);
  setElemText('tierSingleTitle', dict.tierSingleTitle);
  setElemText('tierSingleDesc', dict.tierSingleDesc);
  setElemText('tierCollectorTitle', dict.tierCollectorTitle);
  setElemText('tierCollectorDesc', dict.tierCollectorDesc);
  setElemText('tierGrandTitle', dict.tierGrandTitle);
  setElemText('tierGrandDesc', dict.tierGrandDesc);
  setElemText('badgeRecommended', dict.badgeRecommended);
  setElemText('roiProfitEyebrow', dict.roiProfitEyebrow);
  setElemText('roiLblOrders', dict.roiLblOrders);
  setElemText('roiLblRevenue', dict.roiLblRevenue);
  setElemText('roiLblCost', dict.roiLblCost);
  setElemText('roiLblUpfront', dict.roiLblUpfront);
  setElemText('roiValUpfront', dict.roiValUpfront);
  setElemText('btnLockRoi', dict.btnLockRoi);

  // Update Contact
  setElemText('contactTitle', dict.contactTitle);
  setElemText('contactDesc', dict.contactDesc);
  setElemText('contactBtn', dict.contactBtn);

  // Update Footer
  setElemText('footerCopy', dict.footerCopy);
  setElemText('footerProposalLink', dict.footerProposalLink);
  setElemText('footerDiscreet', dict.footerDiscreet);
  setElemText('footerBackTop', dict.footerBackTop);

  // Update Modals
  setElemText('sampleModalBadge', dict.sampleModalBadge);
  setElemText('sampleModalTitle', dict.sampleModalTitle);
  setElemText('lblAgencyName', dict.lblAgencyName);
  setElemText('lblEmail', dict.lblEmail);
  setElemText('lblKitChoice', dict.lblKitChoice);
  setElemText('lblNote', dict.lblNote);
  setElemText('sampleSubmitBtn', dict.sampleSubmitBtn);

  setElemText('cartModalBadge', dict.cartModalBadge);
  setElemText('cartModalTitle', dict.cartModalTitle);
  setElemText('cartDemoBadge', dict.cartDemoBadge);
  const cartNoticeEl = document.getElementById('cartDemoNoticeText');
  if (cartNoticeEl) cartNoticeEl.innerHTML = dict.cartDemoNoticeText;

  setElemText('cartTotalLabel', dict.cartTotalLabel);
  setElemText('cartTermsNote', dict.cartTermsNote);
  setElemText('cartCheckoutBtn', dict.cartCheckoutBtn);

  // Update Mobile Bottom Bar
  setElemText('pwaNav1', dict.pwaNav1);
  setElemText('pwaNav2', dict.pwaNav2);
  setElemText('pwaNavBespoke', dict.pwaNavBespoke);
  setElemText('pwaNav3', dict.pwaNav3);
  setElemText('pwaNav4', dict.pwaNav4);

  // Refresh live preview & ROI calculations
  updateBespokePreview();
  calculateAgencyRoi();

  // Re-render Products
  renderProducts();

  // If drawer is open, refresh drawer contents
  if (activeDrawerProduct) {
    inspectProduct(activeDrawerProduct.id);
  }
}

function setElemText(id, text) {
  const el = document.getElementById(id);
  if (el && text !== undefined) {
    el.textContent = text;
  }
}

// --------------------------------------------------------------------------
// Products Rendering & Filtering
// --------------------------------------------------------------------------
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const dict = I18N[currentLang];
  const filtered = currentCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === currentCategory);

  grid.innerHTML = filtered.map((item, idx) => {
    const data = item[currentLang];
    return `
      <article class="product-card animate-enter" data-id="${item.id}" style="animation-delay: ${idx * 0.05}s;">
        <div class="product-media-wrap" onclick="inspectProduct('${item.id}')" style="cursor: pointer;">
          <img src="${item.image}" alt="${data.name}" class="product-img" loading="lazy">
          <div class="product-badge-bar">
            <span class="badge-rarity">${data.badge}</span>
            <span class="badge-status">${data.status}</span>
          </div>
        </div>
        <div class="product-content">
          <div>
            <div class="product-category-label">${data.categoryName}</div>
            <h3 class="product-name" onclick="inspectProduct('${item.id}')" style="cursor: pointer;">${data.name}</h3>
            <p class="product-sensory-preview">${data.sensoryPreview}</p>
          </div>
          <div>
            <div class="product-meta-row">
              <span class="muted" style="font-size: 0.78rem;">${currentLang === 'zh' ? '預購定價' : 'Pre-order Price'}</span>
              <div class="product-price">$${item.price}.00<span class="product-price-currency">USD</span></div>
            </div>
            <div class="product-card-actions">
              <button class="btn-inspect-mini" onclick="inspectProduct('${item.id}')">${dict.inspectBtnText}</button>
              <button class="btn-reserve-mini" onclick="addToCart('${item.id}')">${dict.reserveBtnText}</button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  initCardTilt();
}

function filterCategory(category, button) {
  currentCategory = category;
  document.querySelectorAll('.filter-tab').forEach(btn => btn.classList.remove('active'));
  if (button) {
    button.classList.add('active');
    updateFilterPill(button);
  }
  renderProducts();
}

function updateFilterPill(activeBtn) {
  const pill = document.getElementById('filterTabPill');
  if (!pill || !activeBtn) return;
  pill.style.transform = `translateX(${activeBtn.offsetLeft}px)`;
  pill.style.width = `${activeBtn.offsetWidth}px`;
}

// --------------------------------------------------------------------------
// Interactive Bespoke Atelier Studio
// --------------------------------------------------------------------------
let currentBespokeCarrier = 'brass';
let currentBespokeScent = 'peach';
let currentBespokePerk = 'asmr';

function updateBespokePreview() {
  const input = document.getElementById('customCreatorInput');
  const preview = document.getElementById('previewCreatorName');
  const sub = document.getElementById('previewCarrierSub');
  const texture = document.getElementById('plateTexture');
  if (!preview) return;

  const val = (input && input.value.trim()) ? input.value.trim().toUpperCase() : 'YOUR CREATOR';
  preview.textContent = val;

  if (texture && sub) {
    texture.className = 'plate-metal-texture';
    if (currentBespokeCarrier === 'silk') {
      texture.classList.add('carrier-silk');
      sub.textContent = currentLang === 'zh' ? '6A 桑蠶真絲法式花體刺繡 · 高定工藝' : '6A PURE MULBERRY SILK EMBROIDERY · HAUTE BESPOKE';
    } else if (currentBespokeCarrier === 'tin') {
      texture.classList.add('carrier-tin');
      sub.textContent = currentLang === 'zh' ? '航太級鋁合金滑蓋雷射深雕 · 避水防痕' : 'OBSIDIAN MATTE LASER DEEP ENGRAVED TIN';
    } else {
      sub.textContent = currentLang === 'zh' ? 'CNC 鍛造拉絲香檳金黃銅銘牌 · 匠心鑲嵌' : 'CNC BRUSHED CHAMPAGNE BRONZE · BESPOKE CRAFT';
    }
  }

  // Update preview spec footer labels
  const scentValEl = document.getElementById('previewScentVal');
  if (scentValEl) {
    if (currentBespokeScent === 'vanilla') {
      scentValEl.textContent = currentLang === 'zh' ? 'Nuit Fumée · 煙燻波本' : 'Nuit Fumée · Smoked Bourbon';
    } else if (currentBespokeScent === 'tea') {
      scentValEl.textContent = currentLang === 'zh' ? 'Thé Noir · 午夜黑茶' : 'Thé Noir · Midnight Black Tea';
    } else {
      scentValEl.textContent = currentLang === 'zh' ? 'Peau Sucrée · 純欲白桃' : 'Peau Sucrée · White Peach';
    }
  }

  const perkValEl = document.getElementById('previewPerkVal');
  if (perkValEl) {
    if (currentBespokePerk === 'polaroids') {
      perkValEl.textContent = currentLang === 'zh' ? '試衣間私密拍立得' : 'Fitting Room Polaroids';
    } else if (currentBespokePerk === 'vip') {
      perkValEl.textContent = currentLang === 'zh' ? 'VIP 金庫社群通行證' : 'VIP Community Pass';
    } else {
      perkValEl.textContent = currentLang === 'zh' ? '10 段 ASMR 私密語音' : '10 ASMR Whisper Tracks';
    }
  }
}

function setBespokeCarrier(carrier, btn) {
  currentBespokeCarrier = carrier;
  document.querySelectorAll('.bespoke-pill-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  updateBespokePreview();
}

function setBespokeScent(scent, card) {
  currentBespokeScent = scent;
  document.querySelectorAll('.scent-choice').forEach(c => c.classList.remove('active'));
  if (card) card.classList.add('active');
  updateBespokePreview();
}

function setBespokePerk(perk) {
  currentBespokePerk = perk;
  document.querySelectorAll('.perk-radio').forEach(r => {
    const input = r.querySelector('input');
    r.classList.toggle('active', input && input.value === perk);
  });
  updateBespokePreview();
}

function applyBespokeToSampleRequest() {
  const creatorInput = document.getElementById('customCreatorInput');
  const creatorName = (creatorInput && creatorInput.value.trim()) ? creatorInput.value.trim() : 'ÉLISE LAURENT';

  const modal = document.getElementById('sampleModal');
  const noteArea = modal ? modal.querySelector('textarea') : null;
  const agencyInput = modal ? modal.querySelector('input[type="text"]') : null;

  if (agencyInput && !agencyInput.value) {
    agencyInput.value = creatorName;
  }

  if (noteArea) {
    const carrierName = currentBespokeCarrier === 'silk' ? '6A 真絲刺繡' : (currentBespokeCarrier === 'tin' ? '霧黑滑蓋雷雕' : '香檳金黃銅銘牌');
    const scentName = currentBespokeScent === 'vanilla' ? '煙燻波本香草' : (currentBespokeScent === 'tea' ? '午夜黑茶' : '純欲白桃');
    const perkName = currentBespokePerk === 'polaroids' ? '試衣間未公開拍立得' : (currentBespokePerk === 'vip' ? 'VIP金庫通行證' : '10段ASMR晚安語音');
    noteArea.value = `【客製工坊指定企劃】創作者識別：${creatorName} ｜ 工藝載體：${carrierName} ｜ 專屬調香：${scentName} ｜ NFC 解鎖特權：${perkName}。請顧問以此規格寄送打樣企劃與材質樣品。`;
  }

  openSampleModal();
}

// --------------------------------------------------------------------------
// Interactive Agency ROI Profit Calculator
// --------------------------------------------------------------------------
let currentRoiTier = 'collector';

function setRoiTier(tier, btn) {
  currentRoiTier = tier;
  document.querySelectorAll('.roi-tier-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  calculateAgencyRoi();
}

function calculateAgencyRoi() {
  const subsEl = document.getElementById('sliderRoiSubs');
  const convEl = document.getElementById('sliderRoiConv');
  if (!subsEl || !convEl) return;

  const subs = parseInt(subsEl.value, 10);
  const conv = parseFloat(convEl.value);

  const valSubs = document.getElementById('valRoiSubs');
  const valConv = document.getElementById('valRoiConv');
  if (valSubs) valSubs.textContent = `${subs.toLocaleString()} ${currentLang === 'zh' ? '人' : 'Subs'}`;
  if (valConv) valConv.textContent = `${conv.toFixed(1)}%`;

  let price = 88;
  let unitCost = 23.65; // $12.50 manufacturing + $7.19 freight + ~$3.96 merchant
  if (currentRoiTier === 'single') {
    price = 42;
    unitCost = 11.50; // $6.00 manufacturing + $4.00 freight + $1.50 merchant
  } else if (currentRoiTier === 'grand') {
    price = 198;
    unitCost = 53.40; // $32.00 manufacturing + $12.50 freight + $8.90 merchant
  }

  const orders = Math.max(30, Math.round(subs * (conv / 100)));
  const grossRevenue = orders * price;
  const totalCost = Math.round(orders * unitCost);
  const netMargin = grossRevenue - totalCost;
  const agencyProfit = Math.round(netMargin * 0.70);

  const profitEl = document.getElementById('roiProfitBig');
  const currencyEl = document.getElementById('roiProfitCurrency');
  const ordersEl = document.getElementById('roiValOrders');
  const revEl = document.getElementById('roiValRevenue');
  const costEl = document.getElementById('roiValCost');

  if (profitEl) profitEl.textContent = `$${agencyProfit.toLocaleString()}.00`;
  if (currencyEl) {
    const twd = Math.round(agencyProfit * 32).toLocaleString();
    const eur = Math.round(agencyProfit * 0.92).toLocaleString();
    currencyEl.textContent = currentLang === 'zh'
      ? `USD 經紀方純淨分潤 (70% 純利) ≈ NT$ ${twd} / € ${eur}`
      : `USD Agency & Creator Net Margin (70%) ≈ € ${eur} / NT$ ${twd}`;
  }
  if (ordersEl) ordersEl.textContent = `${orders.toLocaleString()} ${currentLang === 'zh' ? '件 (Units)' : 'Units'}`;
  if (revEl) revEl.textContent = `$${grossRevenue.toLocaleString()}.00 USD`;
  if (costEl) costEl.textContent = `$${totalCost.toLocaleString()}.00 USD (${currentLang === 'zh' ? '全額由預購款結算，0墊資' : '100% funded from pre-orders'})`;
}

// --------------------------------------------------------------------------
// Haute Atelier Dossier — 2026 Immersive Product Detail Experience (PDP)
// Center Aperture Spring Animation · Multi-Angle Gallery · Visual Craft Cards
// --------------------------------------------------------------------------
let currentAngleIndex = 0;

function inspectProduct(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  activeDrawerProduct = product;
  currentAngleIndex = 0;
  const data = product[currentLang];
  const dict = I18N[currentLang];

  // Set Top Header Meta
  setElemText('dossierCategory', data.categoryName);
  setElemText('dossierBatchCode', `${data.badge} · HAUTE BESPOKE`);

  // Set Editorial Meta
  setElemText('dossierTitle', data.name);
  setElemText('dossierSensoryPreview', data.sensoryPreview);
  setElemText('dossierPrice', `$${product.price}.00 USD`);
  setElemText('dossierStatusPill', data.status);

  // Vault Reservation Ratio
  setElemText('dossierVaultLabel', dict.dossierVaultLabel || (currentLang === 'zh' ? '金庫配額鎖定進度' : 'Vault Allocation Progress'));
  setElemText('dossierVaultRatio', `${product.reserved} / ${product.total} ${currentLang === 'zh' ? '件' : 'Units'} (${Math.round((product.reserved / product.total) * 100)}%)`);
  const vaultBar = document.getElementById('dossierVaultBar');
  if (vaultBar) {
    vaultBar.style.width = `${Math.round((product.reserved / product.total) * 100)}%`;
  }

  // Intimate Narrative Story
  setElemText('dossierStory', data.story);
  setElemText('dossierReserveBtnText', currentLang === 'zh' ? '加入私密預購夾' : 'Add to Vault Bag');

  // Multi-Angle Interactive Gallery
  const mainImg = document.getElementById('dossierMainImg');
  const angleTag = document.getElementById('dossierAngleTag');
  if (product.gallery && product.gallery.length > 0) {
    const firstAngle = product.gallery[0];
    if (mainImg) mainImg.src = firstAngle.image;
    if (angleTag) angleTag.textContent = currentLang === 'zh' ? firstAngle.labelZh : firstAngle.labelEn;

    const angleStrip = document.getElementById('dossierAngleStrip');
    if (angleStrip) {
      angleStrip.innerHTML = product.gallery.map((g, idx) => `
        <button class="angle-thumb-btn ${idx === 0 ? 'active' : ''}" onclick="switchDossierAngle(${idx})" aria-label="${currentLang === 'zh' ? g.labelZh : g.labelEn}">
          <img src="${g.image}" alt="${currentLang === 'zh' ? g.labelZh : g.labelEn}">
        </button>
      `).join('');
    }
  }

  // Middle Section: Visual Craftsmanship Dossier (每項說明配一張圖)
  setElemText('dossierCraftsHeading', dict.dossierCraftsHeading || (currentLang === 'zh' ? '深度工藝與材質品鑑圖冊' : 'Illustrated Craftsmanship Dossier'));
  setElemText('dossierCraftsSubhead', dict.dossierCraftsSubhead || (currentLang === 'zh' ? '每項工藝細節均經工廠打樣確認與創作者親身審核，圖文並茂落實奢華質感' : 'Every craft parameter verified via physical sampling and creator approval.'));

  const visualGrid = document.getElementById('dossierVisualSpecsGrid');
  if (visualGrid && product.visualSpecs) {
    visualGrid.innerHTML = product.visualSpecs.map((spec, sIdx) => `
      <div class="visual-spec-card">
        <div class="visual-spec-thumb">
          <img src="${spec.image}" alt="${currentLang === 'zh' ? spec.titleZh : spec.titleEn}" loading="lazy">
          <span class="visual-spec-pill">${currentLang === 'zh' ? spec.craftZh : spec.craftEn}</span>
        </div>
        <div class="visual-spec-body">
          <h4 class="visual-spec-title">${currentLang === 'zh' ? spec.titleZh : spec.titleEn}</h4>
          <p class="visual-spec-desc">${currentLang === 'zh' ? spec.descZh : spec.descEn}</p>
        </div>
      </div>
    `).join('');
  }

  // Privacy Guarantee
  setElemText('dossierPrivacyHeading', dict.drawerPrivacyHeading);
  setElemText('dossierPrivacyDesc', dict.drawerPrivacyDesc);

  // Trigger Center Aperture Spring Opening Animation
  const overlay = document.getElementById('atelierOverlay');
  if (overlay) {
    overlay.classList.add('active');
  }
  document.body.style.overflow = 'hidden';
}

function switchDossierAngle(index) {
  if (!activeDrawerProduct || !activeDrawerProduct.gallery) return;
  const angle = activeDrawerProduct.gallery[index];
  if (!angle) return;

  currentAngleIndex = index;
  const mainImg = document.getElementById('dossierMainImg');
  const angleTag = document.getElementById('dossierAngleTag');

  if (mainImg) {
    mainImg.style.opacity = '0.35';
    mainImg.style.transform = 'scale(0.98)';
    setTimeout(() => {
      mainImg.src = angle.image;
      if (angleTag) {
        angleTag.textContent = currentLang === 'zh' ? angle.labelZh : angle.labelEn;
      }
      mainImg.style.opacity = '1';
      mainImg.style.transform = 'scale(1)';
    }, 140);
  }

  document.querySelectorAll('.angle-thumb-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
  });
}

function closeDossier(e) {
  if (e && e.target && e.target.id !== 'atelierOverlay' && !e.target.closest('.dossier-close-btn')) return;
  const overlay = document.getElementById('atelierOverlay');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
  activeDrawerProduct = null;
}

function reserveFromDossier() {
  if (activeDrawerProduct) {
    addToCart(activeDrawerProduct.id);
    closeDossier();
  }
}

// Backwards compatibility aliases
function closeDrawer(e) { closeDossier(e); }
function reserveFromDrawer() { reserveFromDossier(); }

// --------------------------------------------------------------------------
// Cart & Confidential Bag Management
// --------------------------------------------------------------------------
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, qty: 1, product });
  }

  updateBagPills();
  showToast(I18N[currentLang].toastAdded);
}

function updateBagPills() {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const pill1 = document.getElementById('bagCountPill');
  const pill2 = document.getElementById('pwaBagPill');
  if (pill1) pill1.textContent = totalCount;
  if (pill2) pill2.textContent = totalCount;
}

function openCartModal() {
  const modal = document.getElementById('cartModal');
  const list = document.getElementById('cartItemsList');
  const totalSum = document.getElementById('cartTotalSum');
  if (!modal || !list || !totalSum) return;

  if (cart.length === 0) {
    list.innerHTML = `<p class="muted" style="text-align: center; padding: 30px 0;">${currentLang === 'zh' ? '您的預購夾目前為空，請探索最新作品。' : 'Your vault bag is empty. Explore the archive.'}</p>`;
    totalSum.textContent = '$0.00';
  } else {
    let sum = 0;
    list.innerHTML = cart.map(item => {
      const data = item.product[currentLang];
      const itemTotal = item.product.price * item.qty;
      sum += itemTotal;
      return `
        <div style="display: flex; gap: 14px; align-items: center; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid var(--border-plum);">
          <img src="${item.product.image}" style="width: 50px; height: 50px; border-radius: 8px; object-fit: cover;">
          <div style="flex: 1; padding: 0 10px;">
            <div style="font-weight: 500; font-size: 0.95rem;">${data.name}</div>
            <div class="muted" style="font-size: 0.78rem;">Qty: ${item.qty} × $${item.product.price}</div>
          </div>
          <div style="font-family: var(--font-serif); font-size: 1.15rem; color: var(--accent-gold);">$${itemTotal}.00</div>
        </div>
      `;
    }).join('');
    totalSum.textContent = `$${sum}.00`;
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCartModal(e) {
  if (e && e.target && e.target.id !== 'cartModal' && !e.target.classList.contains('modal-close-btn')) return;
  const modal = document.getElementById('cartModal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
}

function submitPreorder() {
  if (cart.length === 0) return;
  cart = [];
  updateBagPills();
  closeCartModal();
  showToast(I18N[currentLang].toastSubmitted);
}

// --------------------------------------------------------------------------
// Sample Concierge Modal
// --------------------------------------------------------------------------
function openSampleModal() {
  const modal = document.getElementById('sampleModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeSampleModal(e) {
  if (e && e.target && e.target.id !== 'sampleModal' && !e.target.classList.contains('modal-close-btn')) return;
  const modal = document.getElementById('sampleModal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
}

function handleSampleSubmit(e) {
  e.preventDefault();
  closeSampleModal();
  showToast(I18N[currentLang].toastSampleReq);
}

// --------------------------------------------------------------------------
// Toast Notification
// --------------------------------------------------------------------------
function showToast(message) {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.style.cssText = `
      position: fixed;
      bottom: 84px;
      left: 50%;
      transform: translateX(-50%) translateY(20px);
      background: rgba(42, 16, 27, 0.96);
      border: 1px solid var(--border-rose);
      color: var(--text-main);
      padding: 12px 24px;
      border-radius: var(--radius-pill);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
      font-size: 0.88rem;
      z-index: 99999;
      opacity: 0;
      pointer-events: none;
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      backdrop-filter: blur(14px);
    `;
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
  }, 3200);
}

// --------------------------------------------------------------------------
// 2026 Cutting-Edge Interactive Animations
// --------------------------------------------------------------------------

// 1. Magnetic Pill Buttons
function initMagneticButtons() {
  if (window.matchMedia('(pointer: coarse)').matches) return; // Skip on touch

  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0px, 0px)';
    });
  });
}

// 2. 3D Card Gyroscope & Specular Spotlight
function initCardTilt() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  document.querySelectorAll('.bento-card, .product-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--pointer-x', `${x}px`);
      card.style.setProperty('--pointer-y', `${y}px`);
    });
  });
}

// 3. Interactive Silky Satin Drape Parallax
function initDrapeMousePhysics() {
  const drape = document.querySelector('.drape');
  if (!drape || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;

  window.addEventListener('mousemove', e => {
    targetX = (e.clientX / window.innerWidth - 0.5) * 18;
    targetY = (e.clientY / window.innerHeight - 0.5) * 14;
  });

  function tick() {
    currentX += (targetX - currentX) * 0.05;
    currentY += (targetY - currentY) * 0.05;
    drape.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;
    requestAnimationFrame(tick);
  }
  tick();
}

// 4. Live Countdown Timer
function initCountdownTimer() {
  let target = new Date();
  target.setDate(target.getDate() + 9);
  target.setHours(target.getHours() + 13);
  target.setMinutes(target.getMinutes() + 44);

  function update() {
    const now = new Date();
    const diff = target - now;

    if (diff <= 0) {
      const el = document.getElementById('countdownVal');
      if (el) el.textContent = 'VAULT CLOSED';
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / 1000 / 60) % 60);
    const s = Math.floor((diff / 1000) % 60);

    const pad = n => String(n).padStart(2, '0');
    const el = document.getElementById('countdownVal');
    if (el) {
      if (currentLang === 'zh') {
        el.textContent = `${pad(d)}天 ${pad(h)}時 ${pad(m)}分 ${pad(s)}秒`;
      } else {
        el.textContent = `${pad(d)}D ${pad(h)}H ${pad(m)}M ${pad(s)}S`;
      }
    }
  }

  update();
  setInterval(update, 1000);
}

// 5. Keyboard Access for Atelier Dossier
function initDossierKeyboard() {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDossier();
      closeCartModal();
      closeSampleModal();
    }
  });
}

// 6. 2026 Smooth Parallax Scroll Reveals
function initScrollReveals() {
  const elements = document.querySelectorAll('.bento-card, .process-item, .agency-col, .product-card, .section-head');
  elements.forEach(el => el.classList.add('reveal-on-scroll'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    elements.forEach(el => observer.observe(el));
  } else {
    elements.forEach(el => el.classList.add('is-revealed'));
  }
}
