const fs = require('fs');

const projects = [
  {
    slug: 'zid', num: '01',
    title: 'حدث زد', titleEn: 'Zid Event', category: 'Event Branding',
    img: 'Images/zid.jpg', year: '2024',
    summaryAr: 'هوية بصرية متكاملة لحدث منصة زد السنوي — تجمع بين روح الاحتفال وهوية العلامة التجارية في منظومة بصرية واحدة، من الشعار وصولاً إلى اللافتات المسرحية والمواد الرقمية.',
    deliverables: ['Event Logo', 'Stage Graphics', 'Social Media Kit', 'Print Collateral', 'Digital Invitations'],
    brief: `Zid — one of Saudi Arabia's leading e-commerce platforms — needed a full visual identity for their flagship annual event. The ask was clear: create something that feels celebratory and high-energy while still fitting within Zid's established brand world. The event had to stand out, but not look like a stranger to the brand.`,
    approach: `We started by studying what makes Zid's visual world tick — their geometry, their palette, their rhythm — then pushed it into event territory. The result was a system that amplified what already existed without abandoning it. Bold headline treatments, an energetic color push, and motion-friendly compositions that would work across screens and physical spaces equally.`,
    outcome: `A complete event identity delivered in full: event logo, stage backdrops, speaker presentation templates, digital invitations, social media countdown kit, and all print collateral. Every touchpoint was production-ready and consistent — from the first Instagram post to the last banner on stage.`
  },
  {
    slug: 'lacorvet', num: '02',
    title: 'LA-CORVET', titleEn: 'LA-CORVET', category: 'Brand Identity · Fashion',
    img: 'Images/LACORVET.png', year: '2024',
    summaryAr: 'هوية علامة أزياء فاخرة تُبنى من الصفر — حروف محكمة، لوحة ألوان مكبوحة، وثقة تُقرأ في كل حجم وعلى كل سطح.',
    deliverables: ['Logo Design', 'Brand Guidelines', 'Typography System', 'Color Palette', 'Brand Collateral'],
    brief: `LA-CORVET was entering a competitive fashion market with no visual identity and a need to establish themselves as a premium player from day one. The challenge: create a brand that reads as luxury without looking like a copy of European labels — something with its own character and confidence.`,
    approach: `The direction was refined minimalism. We built around a lettermark that carries weight in any size, a typographic system that feels editorial, and a palette that walks the line between classic and contemporary. Every decision was made to feel intentional — nothing decorative for its own sake, everything earned.`,
    outcome: `A complete brand system: primary and secondary logo lockups, full color and typography guidelines, business card and stationery design, and a packaging concept. The brand launched with a clear visual voice that positioned LA-CORVET as a name worth noticing.`
  },
  {
    slug: 'spert', num: '03',
    title: 'Spert Cosmetics', titleEn: 'Spert Cosmetics', category: 'Brand Identity · Cosmetics',
    img: 'Images/Spert.png', year: '2024',
    summaryAr: 'هوية علامة تجميل محلية صُممت لتنافس الأسماء العالمية بثقة — من تصميم العبوة إلى قوالب وسائل التواصل الاجتماعي، منظومة بصرية متكاملة ومتسقة.',
    deliverables: ['Logo Design', 'Packaging Design', 'Social Media Templates', 'Brand Guidelines', 'Label Design'],
    brief: `Spert was launching as a new local cosmetics brand in a market crowded with international names. They needed a brand that could hold its own on shelf against established competitors — one that communicated quality, care, and femininity without looking generic.`,
    approach: `The identity was built around softness and precision. A wordmark that's clean but not cold, a palette drawn from skin tones and botanicals, and packaging that feels tactile even on a screen. The goal was something that a customer would pick up not because she had to, but because it felt right.`,
    outcome: `Full brand identity including logo, color and typography system, product label design, packaging templates, and a complete social media design kit. Spert launched with a cohesive brand presence that made it look like it had been around for years.`
  },
  {
    slug: 'rotora', num: '04',
    title: 'Rotora', titleEn: 'Rotora', category: 'Brand Identity',
    img: 'Images/rotora.png', year: '2024',
    summaryAr: 'منظومة هوية بصرية مرنة وقوية تعمل بنفس الاتساق على بطاقة العمل وكسوة المركبة والمنصة الرقمية — صُممت للنمو مع الشركة.',
    deliverables: ['Logo Design', 'Brand System', 'Vehicle Branding', 'Business Stationery', 'Brand Guidelines'],
    brief: `Rotora needed an identity built to grow with them — one that could move from a business card to a vehicle wrap to a digital platform without losing its integrity. The brand needed to convey precision, momentum, and professionalism in equal measure.`,
    approach: `The logomark was designed with geometry that implies motion without being literal about it. A structured, bold form with careful proportions that holds at any scale. The visual system was built for versatility first — every element tested across the real environments where the brand would actually live.`,
    outcome: `A complete brand identity: primary logomark, mono and reversed versions, vehicle branding templates, full stationery suite, and a brand guidelines document that made the system hand-off-ready for any application.`
  },
  {
    slug: 'art', num: '05',
    title: 'روائع الفن', titleEn: "Rawae'i Al-Fan", category: 'Exhibition Design',
    img: 'Images/Art.png', year: '2024',
    summaryAr: 'هوية فضاء فني تدمج الموروث البصري العربي مع الرصانة المعاصرة — إطار للعمل الفني لا يزاحمه، بل يُعلي من شأنه.',
    deliverables: ['Exhibition Identity', 'Signage System', 'Print Collateral', 'Social Media Kit', 'Catalog Design'],
    brief: `An art space showcasing masterworks needed an identity that felt worthy of what it housed — one that communicated cultural value and curatorial seriousness without intimidating its audience. The design had to honor heritage while feeling alive and contemporary.`,
    approach: `The approach was restraint. An art space identity shouldn't compete with the art — it should create a frame for it. We drew from classical Arabic visual tradition, using geometric structure and careful proportion as the foundation, then stripped everything back to its essentials.`,
    outcome: `A full exhibition identity: wordmark, signage system, printed catalog layout, wall text templates, social media graphics, and event posters. The system works as elegantly in a printed catalog as it does on a digital screen.`
  },
  {
    slug: 'saudeels', num: '06',
    title: 'Saudeels', titleEn: 'Saudeels · سعوديلز', category: 'Food Truck Branding',
    img: 'Images/Saudeels.png', year: '2024',
    summaryAr: 'هوية كاملة لعربة نودلز سعودية — شعار يجمع الثقافتين، ولوح ألوان جريء، ومنظومة بصرية تمتد من الشاحنة والتغليف حتى السوشال ميديا.',
    deliverables: ['Logo Design', 'Brand Guidelines', 'Food Truck Wrap', 'Packaging & Stickers', 'Uniforms', 'Poster Design', 'Social Media Kit', 'Menu Design', 'Brochure'],
    brief: `Saudeels (سعوديلز) is a Saudi noodles food truck concept that needed a brand as bold as its food. The challenge: merge local Saudi identity with the energy of Asian street food — in a visual language customers would recognize and remember from across a parking lot.`,
    approach: `The mark pairs a stylized noodle bowl and chopsticks into a single icon that reads instantly at any size — from an app icon to a full food truck wrap. A vivid palette of deep green, indigo blue, and vermillion orange signals warmth and appetite. Typography spans Arabic and English with equal confidence, and brand patterns built from the logo elements give every touchpoint its own personality.`,
    outcome: `A fully deployed identity across every surface: the food truck exterior, noodle boxes, paper bags, chopstick sleeves, stickers, staff uniforms, posters, social media templates, menu, and a printed brochure. Every piece reinforces the same bold, appetite-forward character.`,
    galleryOverride: `<div class="proj-img proj-full">
            <img src="Images/saudeels-2.jpg" alt="Saudeels — Food Truck Wrap" loading="lazy" decoding="async">
        </div>
        <div class="proj-img-pair">
            <div class="proj-img">
                <img src="Images/saudeels-5.jpg" alt="Saudeels — Poster Design" loading="lazy" decoding="async">
            </div>
            <div class="proj-img">
                <img src="Images/saudeels-6.jpg" alt="Saudeels — Social Media Posts" loading="lazy" decoding="async">
            </div>
        </div>`
  },
  {
    slug: 'perk', num: '07',
    title: 'Perk Cafe', titleEn: 'Perk Cafe', category: 'Cafe Branding',
    img: 'Images/perk.png', year: '2024',
    summaryAr: 'هوية مقهى متكاملة تُجسّد الدفء والتخصصية في كل نقطة تواصل مع الزبون — تُحسّ بها قبل أن تتذوق أول رشفة.',
    deliverables: ['Logo Design', 'Brand Guidelines', 'Packaging Design', 'Social Media Kit', 'Signage'],
    brief: `Perk is a specialty coffee shop with a focus on quality and experience. They came in with a strong vision but no visual identity — just a name and a location. The challenge was translating that vision into a brand that could carry the weight of the experience they were building.`,
    approach: `We started with the feeling — warm, quiet, specialty-focused. Not loud, not trendy. The kind of place people return to. From there, every decision was made through that lens: a mark that's confident without being bold, a palette that feels like the hour before noon, and typography that doesn't rush you.`,
    outcome: `A complete brand system: logo, packaging, cups, signage, and a full social media template kit. Every touchpoint was designed to feel consistent and intentional. The result is an identity customers feel before they take their first sip.`
  },
  {
    slug: 'dayin', num: '08',
    title: 'DayIn Mini Market', titleEn: 'DayIn Mini Market', category: 'Retail Branding',
    img: 'Images/DayIn.png', year: '2024',
    summaryAr: 'هوية محل تجزئة بشرية ومُقاربة تُقرأ من على بُعد بوضوح — على الكيس أو على الواجهة، دفء يُشعر أنه كان هنا دائماً.',
    deliverables: ['Logo Design', 'Signage System', 'Packaging Templates', 'Brand Guidelines', 'Point-of-Sale Design'],
    brief: `DayIn wanted to feel like the neighborhood market everyone loves — the one that's been there forever, that you trust without thinking about it. They needed a brand that communicated friendliness and freshness while being immediately recognizable at street level.`,
    approach: `The identity was designed to feel human and approachable, with a mark that reads clearly at any size — from a shopping bag to a shopfront. A cheerful, high-legibility palette, and typography that never takes itself too seriously. The goal was warmth you can spot from a moving car.`,
    outcome: `Complete retail identity: logo, shopfront signage system, packaging templates for in-house products, price tag and label design, staff uniform guidelines, and a social media starter kit. DayIn opened with a brand that felt instantly familiar.`
  },
  {
    slug: 'baker', num: '09',
    title: 'Baker Bakery', titleEn: 'Baker Bakery', category: 'Bakery Branding',
    img: 'Images/baker.png', year: '2024',
    summaryAr: 'هوية مخبز تُعبّر عن الحرفية والجودة الحقيقية — ملمس وحرارة في كل تفصيل، من الكيس إلى بطاقة المقهى.',
    deliverables: ['Logo Design', 'Packaging Design', 'Brand Guidelines', 'Stationery', 'Social Media Templates'],
    brief: `Baker Bakery wanted an identity that communicated one thing above all else: craft. They bake with intention, they use quality ingredients, and they wanted their branding to say that before a customer takes a single bite. The challenge was finding the visual language for warmth and artisanship without cliché.`,
    approach: `We built around texture and warmth. A wordmark with just enough character to feel handmade without actually being hand-drawn. A palette pulled from bread, butter, and burnt sugar. Packaging that feels worth keeping. Every element designed to make the product feel more valuable — because it is.`,
    outcome: `Full bakery identity: logo in multiple lockups, paper bag and box packaging design, label and sticker system, cafe card and stationery, and social media templates for ongoing content. The brand communicates quality before the first word is read.`
  },
  {
    slug: 'amad', num: '10',
    title: 'AMAD Group', titleEn: 'AMAD Group', category: 'Corporate Identity',
    img: 'Images/amad.png', year: '2024',
    summaryAr: 'هوية مؤسسية لمجموعة متعددة القطاعات تُوحّد أعمالها المتنوعة تحت علامة واحدة — قوة تقودها، ومرونة تستوعب النمو.',
    deliverables: ['Corporate Logo', 'Brand System', 'Stationery Suite', 'Brand Guidelines', 'Document Templates'],
    brief: `AMAD Group operates across multiple business sectors and needed a single corporate identity that could give them a unified voice — one strong enough to lead the group while flexible enough to accommodate sub-brands. The design had to communicate scale, reliability, and ambition.`,
    approach: `Corporate identities for multi-sector groups need structure above all else. We built a parent brand with a strong, neutral character that doesn't belong to any one industry — it belongs to the group. The visual system was designed as a hierarchy: everything flows from one source, and everything stays consistent without being rigid.`,
    outcome: `Full corporate identity: group logo with sub-brand adaptation rules, complete stationery suite, PowerPoint and document templates, brand guidelines, and vehicle branding templates. The system is handed off and production-ready for any division.`
  },
  {
    slug: 'alshifa', num: '11',
    title: 'الشفاء', titleEn: 'Alshifa', category: 'Healthcare Branding',
    img: 'Images/alshifa.png', year: '2024',
    summaryAr: 'هوية رعاية صحية تبعث على الاطمئنان والثقة من أول نظرة — هندسة ناعمة وألوان مُهدِّئة تُشعر المريض بالأمان قبل أن يتكلم أحد.',
    deliverables: ['Logo Design', 'Brand Guidelines', 'Stationery', 'Signage System', 'Digital Templates'],
    brief: `Alshifa needed a healthcare brand built on trust. In the medical sector, design decisions carry weight — patients make inferences about the quality of care from the quality of what they see. The challenge was creating something that felt genuinely caring, clear, and credible without being clinical or cold.`,
    approach: `Every choice was filtered through one question: does this feel safe? A mark with soft geometry and natural proportion. A palette of calm, reassuring tones. Typography that's highly legible and never shouts. The brand was designed to put people at ease before they speak to anyone.`,
    outcome: `Complete healthcare identity: logo, wayfinding and signage system, clinical stationery, patient-facing print materials, staff uniform design, and digital communication templates. The result is a brand that communicates care through every detail.`
  },
  {
    slug: 'mazadak', num: '12',
    title: 'مزادك', titleEn: 'Mazadak Event', category: 'Event Design',
    img: 'Images/mazadak.png', year: '2024',
    summaryAr: 'هوية حدث مزادات مصممة لبناء التشويق وتحريك الجمهور — نظام بصري عالي التباين يعمل عبر وسائل التواصل الاجتماعي ويصل إلى المسرح.',
    deliverables: ['Event Identity', 'Campaign Graphics', 'Social Media Kit', 'Stage Design', 'Print Materials'],
    brief: `Mazadak's auction event needed to generate genuine excitement before a single bid was placed. The visual identity had to do the promotional work — building anticipation across social media, attracting registrations, and making the event feel like something worth showing up for.`,
    approach: `The design language was built for impact. High-contrast, kinetic, built to move through social feeds and stop scrollers in their tracks. Campaign assets were designed in a modular system — one set of rules that could power weeks of content at volume without feeling repetitive or exhausted.`,
    outcome: `Full event campaign identity: event logo and visual system, countdown content series, registration and invitation graphics, social media template library, stage and backdrop design, and day-of print materials. Everything produced and handed off before the campaign launched.`
  },
  {
    slug: 'madain', num: '13',
    title: 'مدائن', titleEn: 'Madain', category: 'Heritage Branding',
    img: 'Images/madain.png', year: '2024',
    summaryAr: 'هوية وجهة تراثية تحمل عمق التاريخ النبطي في الأحجار، وتُطل برؤية معاصرة على ما يمكن أن تكون عليه مدائن صالح غداً.',
    deliverables: ['Brand Identity', 'Logo Design', 'Brand Guidelines', 'Print Collateral', 'Digital Assets'],
    brief: `Madain is a region defined by extraordinary historical depth — one of the most significant archaeological destinations in Saudi Arabia. The brand needed to carry that weight: to feel rooted in something real and ancient while communicating a contemporary vision for what the destination could become.`,
    approach: `The design process started with research — architectural motifs, Nabataean forms, the geometry of the landscape. From there, the identity was distilled down to its essentials: a mark that feels both ancient and immediate, a palette drawn from the sandstone and sky, and a typographic system that respects the territory it represents.`,
    outcome: `Complete destination identity: primary logo with alternate configurations, color system, Arabic and Latin typography guidelines, print and digital collateral templates, and a brand story document. The identity is ready to carry the destination into its next chapter.`
  },
  {
    slug: 'qemmah', num: '14',
    title: 'قمة', titleEn: 'Qemmah', category: 'Brand Identity',
    img: 'Images/Qemmah.png', year: '2024',
    summaryAr: 'هوية علامة تجارية طموحة تعكس التميز والتطلع للقمة — تصاعد بصري محسوب، لا ثقل ولا غلو، فقط ثقة تُقرأ في كل تفصيل.',
    deliverables: ['Logo Design', 'Brand System', 'Brand Guidelines', 'Stationery', 'Digital Templates'],
    brief: `Qemmah — meaning "peak" in Arabic — needed an identity that matched its name. The brand aspires to represent excellence and the drive to reach the highest possible standard in everything it does. The challenge: communicate that aspiration without falling into the visual clichés of "premium" branding.`,
    approach: `We designed upward. The visual language uses proportion and negative space to create a sense of elevation — nothing heavy, nothing grounded. The mark was refined through many iterations until it had the confidence that the name demands. The palette is restrained, the typography exacting.`,
    outcome: `Full brand identity system: primary mark and logo lockups, color and typography guidelines, stationery and business card design, digital asset templates, and a brand guidelines document. Qemmah launched with a visual identity that lives up to the ambition of its name.`
  },
  {
    slug: 'emdad', num: '15',
    title: 'إمداد · رمضان 2025', titleEn: 'Emdad Ramadan 2025', category: 'Event Branding · Seasonal Campaign',
    img: 'Images/Emdad.png', year: '2025',
    summaryAr: 'هوية رمضان 2025 لإمداد الخبرات — منظومة بصرية احتفالية تمتد من الكيوبات التفاعلية إلى خلفيات المسرح واللوحات الإعلانية، بلوحة ألوان تجمع التراث والحداثة.',
    deliverables: ['Seasonal Brand System', 'Event Stage Design', 'Display Cube Branding', 'Outdoor Advertising', 'Environmental Design'],
    brief: `Emdad Al Khebrat needed a complete Ramadan 2025 campaign identity — a visual system that could carry the warmth of the holy month while staying true to the brand's bold, energetic character. The campaign had to work across physical environments: exhibition cubes, event stages, and outdoor street advertising.`,
    approach: `The palette pushed the brand into Ramadan territory — deep navy and vibrant magenta layered with Islamic geometric patterns drawn in fine white linework. The gradient treatment gave the campaign a sense of depth and celebration without departing from Emdad's core identity. Each application was designed to work at its own scale: intimate on a cube, grand on a stage, impactful on a street poster.`,
    outcome: `A complete seasonal identity system deployed across: branded 3D display cubes with welcome and Ramadan greetings, a full event stage backdrop with gradient and pattern treatment, and an outdoor advertising suite including illuminated panels and street furniture posters — all production-ready for the 2025 Ramadan season.`,
    driveLink: 'https://drive.google.com/drive/folders/1HyNF41xXaVFjm7q61ITVOI6c4au0j75b?usp=sharing',
    galleryOverride: `<div class="proj-img proj-full">
            <img src="Images/Emdad.png" alt="إمداد رمضان 2025 — هوية الحملة" loading="lazy" decoding="async">
        </div>`
  },
  {
    slug: 'alatha', num: '16',
    title: 'العذا · Aladda', titleEn: 'Aladda Perfumes', category: 'Fragrance · Social Media Design',
    img: 'Images/alatha.png', year: '2023',
    summaryAr: 'تصاميم متجر عطور "العذا" — هوية بصرية متكاملة وبوسترات تسويقية إبداعية تُقدّم خطوط العطور المختلفة بأسلوب راقٍ يعكس شخصية العلامة.',
    deliverables: ['Brand Posters', 'Product Catalog Design', 'Social Media Templates', 'Hair Mist Line Design', 'Campaign Visuals'],
    brief: `Aladda Perfume is a Saudi fragrance brand offering a range of distinctive scents — from light and fresh to deep oud blends, including a hair mist collection. They needed marketing visuals that could present their full product catalog in a sophisticated, retail-ready format that would work across social media and in-store.`,
    approach: `The design system balanced the brand's refined logo with editorial catalog layouts — clean white space paired with bold dark backgrounds, Arabic typography that carries warmth, and product photography integrated into storytelling compositions. Each poster was designed to highlight a different product line while maintaining a coherent visual language across the full set.`,
    outcome: `A full set of social media marketing posters covering the perfume collection (Nooq, Ghaim, Asseer, Jissar), the hero campaign visual, and the hair mist product line — each delivered as standalone pieces that also read as a unified campaign family.`,
    driveLink: 'https://drive.google.com/drive/folders/1eN9ZYbkzOzNWMtIXteWkbTZUeyaBGVdd?usp=sharing',
    galleryOverride: `<div class="proj-img proj-full">
            <img src="Images/alatha.png" alt="العذا — Campaign Posters" loading="lazy" decoding="async">
        </div>`
  },
  {
    slug: 'jood', num: '17',
    title: 'جود الأصيل', titleEn: 'Jood Al-Aseel', category: 'Food & Product Catalog Design',
    img: 'Images/jood.png', year: '2024',
    summaryAr: 'تصميم مجلة منتجات غذائية لجود الأصيل — كتالوج احترافي يعرض المنتجات الطازجة والمشتريات الغذائية بأسلوب بصري شهي يقنع المشتري قبل أن يتذوق.',
    deliverables: ['Magazine Design', 'Product Catalog', 'Food Photography Layout', 'Print Production Files'],
    brief: `Jood Al-Aseel is a food supplier specializing in fresh produce, pickles, and ingredients for sandwiches and shawarma. They needed a product catalog magazine that could present their full range to restaurant and retail buyers — something that looked appetizing and professional, and made the product quality speak for itself on the page.`,
    approach: `The catalog was designed around the food itself — full-bleed photography, generous white space, and a clean layout that let each product shine. Product categories were given clear visual hierarchy with numbered spreads and bilingual Arabic/English copy. The brand's leaf logo and natural green palette tied the editorial design back to freshness and quality without overpowering the food visuals.`,
    outcome: `A professionally designed product catalog magazine for Jood Al-Aseel, covering their full product range across multiple categories — ready for print distribution to wholesale buyers, restaurants, and retail partners.`,
    driveLink: 'https://drive.google.com/file/d/1xdWbaNTo4qvc4Aiww_-i05A2c-10Dw6H/view?usp=sharing',
    galleryOverride: `<div class="proj-img proj-full">
            <img src="Images/jood.png" alt="جود الأصيل — Product Catalog" loading="lazy" decoding="async">
        </div>`
  },
  {
    slug: 'riyadh', num: '18',
    title: 'بنك الرياض', titleEn: 'Riyadh Bank', category: 'Environmental Design · Mural',
    img: 'Images/riyadh.png', year: '2024',
    summaryAr: 'تصميم جدارية احتفالية لبنك الرياض — مزيج بصري يجمع بين أيقونات أفق الرياض ورسالة العيد بلوحة ألوان تعكس هوية البنك على مساحة معمارية واسعة.',
    deliverables: ['Mural Design', 'Environmental Branding', 'Large Format Print', 'Campaign Artwork'],
    brief: `Riyadh Bank needed a large-scale wall mural for an Eid campaign — a statement piece that would greet customers walking into a branch with celebration and civic pride. The design had to feel monumental but warm, institutional but welcoming, and unmistakably tied to Riyadh's identity.`,
    approach: `The composition was built around Riyadh's most recognizable skyline — Kingdom Tower and Al-Faisaliah — rendered in a teal duotone that anchors the bank's brand color into an architectural narrative. The Eid greeting was set in Arabic calligraphy at scale, floating above the cityscape. The result feels like a window into the city's spirit, not a poster on a wall.`,
    outcome: `A fully executed large-format mural design — production files prepared for direct print at architectural scale, installed in a Riyadh Bank branch as a permanent seasonal feature. The piece delivers brand presence and emotional warmth simultaneously.`,
    driveLink: 'https://drive.google.com/drive/folders/1PAusLdGpn6fWt4YVOQrj0iPSd4bsoGlK?usp=sharing',
    galleryOverride: `<div class="proj-img proj-full">
            <img src="Images/riyadh.png" alt="بنك الرياض — Mural" loading="lazy" decoding="async">
        </div>`
  },
  {
    slug: 'gate', num: '19',
    title: 'البوابة العقارية', titleEn: 'Real Estate Gate', category: 'Real Estate Branding',
    img: 'Images/gate.png', year: '2024',
    summaryAr: 'هوية منصة عقارية متكاملة تمتد من ورق الرسائل إلى اللافتات الخارجية والتطبيق — علامة موحّدة تُشعر بالمصداقية على كل سطح.',
    deliverables: ['Logo Design', 'Brand Identity', 'Stationery & Print', 'Outdoor Signage', 'Digital & App Assets'],
    brief: `A real estate platform targeting both individual buyers and institutional investors needed an identity that inspired trust from first contact. In a market where credibility is everything, the brand had to signal professionalism, transparency, and authority — while remaining approachable enough to welcome first-time buyers.`,
    approach: `The mark is a diamond-rotated grid of four interlocking blocks — each unit representing a property, together forming a gateway. The geometry is precise and modular, with subtle notches that give the mark character without decoration. The palette was kept near-neutral: deep earth tones for print, pure black-on-white for environmental applications.`,
    outcome: `A fully deployed identity across every brand surface — from the letterhead and envelopes in the tan/kraft stationery suite, to a dimensional outdoor monument sign with an illuminated logo, to the app splash screen and mobile digital experience. Every touchpoint carries the same measured confidence.`,
    driveLink: 'https://drive.google.com/drive/folders/1mvrlO4ZuhwY0ighoYp7vnQDqeD1ERBtD?usp=drive_link',
    galleryOverride: `<div class="proj-img proj-full">
            <img src="Images/gate-1.jpg" alt="البوابة العقارية — Stationery" loading="lazy" decoding="async">
        </div>
        <div class="proj-img-pair">
            <div class="proj-img">
                <img src="Images/gate-2.jpg" alt="البوابة العقارية — Outdoor Signage" loading="lazy" decoding="async">
            </div>
            <div class="proj-img">
                <img src="Images/gate-3.jpg" alt="البوابة العقارية — Mobile App" loading="lazy" decoding="async">
            </div>
        </div>`
  },
  {
    slug: 'perfume-ai', num: '20',
    title: 'تصاميم العطور', titleEn: 'AI Perfume Campaigns', category: 'AI Visual Design',
    img: 'Images/perfume-ai-1.jpg', year: '2025',
    summaryAr: 'تجارب بصرية توليدية لعلامات عطور عالمية — إنتاج إعلاني احترافي بأدوات الذكاء الاصطناعي، يدمج الجماليات السينمائية بالهوية التجارية للمنتج.',
    deliverables: ['AI Campaign Visuals', 'Art Direction', 'Mood Compositions', 'Social Media Formats'],
    brief: `A series of AI-generated advertising compositions for luxury fragrance brands — exploring what high-end campaign photography looks like when it's built entirely through generative tools. The challenge was to match the cinematic quality of international perfume advertising while maintaining a distinct artistic perspective.`,
    approach: `Each visual was art-directed from prompt to final frame — selecting environments, lighting moods, and product placement that would feel native to luxury editorial. Three distinct atmospheres were developed: a dramatic amber scene with a black panther, an aquatic composition with water and moss, and a lush green forest setting. Each one builds a different sensory narrative around the same bottle.`,
    outcome: `A portfolio of high-fidelity campaign images that demonstrate AI as a serious creative tool for advertising design — production-quality visuals built with precision direction, not luck. The series shows the full range of mood-making possible through generative workflows.`,
    driveLink: 'https://drive.google.com/drive/folders/1xteDF8nK09QDLNv4uQIlJRGl7OsEWvoV?usp=sharing',
    galleryOverride: `<div class="proj-img proj-full">
            <img src="Images/perfume-ai-1.jpg" alt="تصاميم العطور — Amber Scene" loading="lazy" decoding="async">
        </div>
        <div class="proj-img-pair">
            <div class="proj-img">
                <img src="Images/perfume-ai-2.jpg" alt="تصاميم العطور — Aquatic" loading="lazy" decoding="async">
            </div>
            <div class="proj-img">
                <img src="Images/perfume-ai-3.jpg" alt="تصاميم العطور — Forest" loading="lazy" decoding="async">
            </div>
        </div>`
  },
  {
    slug: 'housing', num: '21',
    title: 'برنامج الإسكان', titleEn: 'Housing Program', category: 'Print Design · Government',
    img: 'Images/housing-1.jpg', year: '2024',
    summaryAr: 'تصميم مطوية ونموذج تقرير رسمي لبرنامج الإسكان ضمن رؤية 2030 — مواد مطبوعة تُحول بيانات السياسة السكنية إلى تجربة بصرية مقنعة ومهنية.',
    deliverables: ['Tri-fold Brochure Design', 'Report Template', 'Print Production Files', 'Government Collateral'],
    brief: `The Housing Program — a key initiative under Saudi Vision 2030 — needed print communications that could explain a complex national housing policy in a clear, credible, and visually compelling way. The materials had to carry the weight of a government program while remaining accessible to ordinary citizens.`,
    approach: `The design system draws from the program's established identity: Vision 2030 co-branding, a structured blue palette that signals authority and trust, and layout grids built for information density without sacrificing readability. The tri-fold brochure was designed as a citizen-facing narrative — walking through the program's journey from 2016 to 2030 with a timeline that makes the vision tangible. The report template gave internal teams a professional, on-brand format for regular progress documentation.`,
    outcome: `Two production-ready print pieces: a tri-fold brochure presenting the Housing Program's vision and milestones, and a reusable report template for ongoing documentation — both fully aligned with government identity standards and Vision 2030 branding requirements.`,
    driveLink: 'https://drive.google.com/file/d/1zhdJVqVq9G2g_W5eQFrL_IlflMsZPjtw/view?usp=sharing',
    galleryOverride: `<div class="proj-img proj-full">
            <img src="Images/housing-1.jpg" alt="برنامج الإسكان — Brochure" loading="lazy" decoding="async">
        </div>
        <div class="proj-img-pair">
            <div class="proj-img">
                <img src="Images/housing-2.jpg" alt="برنامج الإسكان — Report Template" loading="lazy" decoding="async">
            </div>
        </div>`
  },
  {
    slug: 'hindawiya', num: '22',
    title: 'الهنداوية', titleEn: 'AlHindawiya', category: 'Brand Identity · Lifestyle',
    img: 'Images/hindawiya-1.jpg', year: '2024',
    summaryAr: 'دليل هوية بصرية متكامل لعلامة الهنداوية — هوية نابعة من الطبيعة، تجمع بين اللوغو النباتي المرسوم يدوياً ولوحة ألوان هادئة لتعكس روح المنزل الجميل.',
    deliverables: ['Brand Identity', 'Logo Design', 'Brand Guidelines', 'Color & Typography System', 'Visual Identity Manual'],
    brief: `AlHindawiya needed a brand identity that felt rooted in nature and the art of the home — something that would appeal to customers who care about beauty in everyday spaces. The brand needed to feel handcrafted without being rustic, botanical without being too earthy, and modern without being cold.`,
    approach: `The logomark was built around a classic ceramic jar with botanical elements growing from within it — a symbol of cultivation, home, and care. The identity system was kept deliberately minimal: soft neutrals, refined typography, and generous white space. The branding guideline was designed as a visual language reference that could be applied to packaging, labels, social media, and interior touchpoints consistently.`,
    outcome: `A full visual identity manual for AlHindawiya covering: primary and secondary logo usage, color palette with swatches and values, typography hierarchy, photography style direction, and application examples across packaging and digital — a complete reference for every visual decision the brand makes going forward.`,
    driveLink: 'https://drive.google.com/file/d/1HJm_4y0ciinzVs4HkjgzQz2dxovPu0bE/view?usp=sharing',
    galleryOverride: `<div class="proj-img proj-full">
            <img src="Images/hindawiya-1.jpg" alt="الهنداوية — Brand Guideline Cover" loading="lazy" decoding="async">
        </div>`
  },
  {
    slug: 'foreiva', num: '23',
    title: 'Foreiva Beauty Culture', titleEn: 'Foreiva Beauty Culture', category: 'Packaging Design · Beauty',
    img: 'Images/foreiva-1.jpg', year: '2024',
    summaryAr: 'تصميم تعبئة وتغليف لمنتجات Foreiva للعناية بالشعر — أربع نسخ تجمع بين الأخضر الطبيعي والوردي النسائي بأنماط متموجة ورسوم نباتية تعكس شخصية العلامة الجمالية.',
    deliverables: ['Packaging Design', 'Bottle Label Design', 'Box Design', 'Multiple Variants', 'Print Production Files'],
    brief: `Foreiva Beauty Culture needed packaging for their natural hair care oil range — a product positioned between accessible and aspirational. The packaging had to feel premium on shelf, appeal to a female audience, and communicate natural ingredients without looking clinical or too mass-market.`,
    approach: `Four distinct packaging variants were developed, each with its own color story: an earthy sage green with fluid swirl patterns, a botanical pink with hand-drawn leaf illustration, a deeper magenta with a bold botanical design, and a clean cream-on-green minimal variant. The same circular logo mark and brand typography run across all variants — creating a coherent family that still allows each product to have its own personality on shelf.`,
    outcome: `A complete packaging suite across four color variants covering both flip-cap and pump-dispenser bottle formats, each with matching outer box design — production-ready for print, giving Foreiva a professional, photogenic range that stands out in the beauty aisle.`,
    galleryOverride: `<div class="proj-img proj-full">
            <img src="Images/foreiva-1.jpg" alt="Foreiva — Green Packaging" loading="lazy" decoding="async">
        </div>
        <div class="proj-img-pair">
            <div class="proj-img">
                <img src="Images/foreiva-2.jpg" alt="Foreiva — Pink Variant" loading="lazy" decoding="async">
            </div>
            <div class="proj-img">
                <img src="Images/foreiva-3.jpg" alt="Foreiva — Magenta Variant" loading="lazy" decoding="async">
            </div>
        </div>`
  },
  {
    slug: 'imaa', num: '24',
    title: 'حملة شتاء IMAA', titleEn: 'IMAA Winter Campaign',
    category: 'Social Media Design · Advertising',
    img: 'Images/imaa-1.jpg', year: '2024',
    driveLink: 'https://drive.google.com/drive/folders/1c1lfO6n1bNOc7F567xuigOu2BWZioa2y?usp=sharing',
    summaryAr: 'بوستات سوشيال ميديا لحملة شتاء IMAA الترويجية — تصاميم بصرية تبرز منتجات العطور والبودي ميست بعروض موسمية وألوان دافئة وتايبوغرافيا عربية جريئة.',
    deliverables: ['Social Media Posts', 'Promotional Campaign Design', 'Multiple Product Variants', 'Price Display Graphics', 'Winter Campaign Assets'],
    brief: `IMAA Perfumes launched a winter promotional campaign featuring discounted prices on their fragrance and body mist range. The campaign needed bold, eye-catching social media posts that communicated the offer clearly — product, discounted price, and available payment methods (Madfu, Tamara, Tabby) all in one frame.`,
    approach: `Each post pairs a hero product shot with the "شتاء IMAA" (IMAA Winter) campaign header in mixed Arabic-Latin typography. The discount structure — original price struck through in red, new price in prominent orange — creates immediate visual impact. Four products were covered: the orange-capped Shita fragrance shot in and around a car, the Fancy body mist set in a lush forest scene, and the Super Me eau de parfum placed within a dramatic rock canyon. Each background was chosen to fit the product's personality — urban energy, natural freshness, and bold confidence respectively. Payment method logos were placed consistently at the base of each post.`,
    outcome: `A cohesive set of four promotional posts covering the full winter campaign product range — consistent enough to read as a unified campaign, distinct enough that each product gets its own visual moment. The bold price treatment and familiar payment logos reduce friction and drive conversion directly from social media.`,
    galleryOverride: `<div class="proj-img proj-full">
            <img src="Images/imaa-1.jpg" alt="حملة شتاء IMAA — عطر الشتاء" loading="lazy" decoding="async">
        </div>
        <div class="proj-img-pair">
            <div class="proj-img">
                <img src="Images/imaa-2.jpg" alt="IMAA Fancy Body Mist" loading="lazy" decoding="async">
            </div>
            <div class="proj-img">
                <img src="Images/imaa-3.jpg" alt="IMAA — نسخة السيارة" loading="lazy" decoding="async">
            </div>
        </div>
        <div class="proj-img proj-full">
            <img src="Images/imaa-4.jpg" alt="IMAA Super Me — العطر الأحمر" loading="lazy" decoding="async">
        </div>`
  }
];

function makeGallery(p) {
  if (p.galleryOverride) return p.galleryOverride;
  return `<div class="proj-img proj-full">
        <img src="${p.img}" alt="${p.title}" loading="lazy" decoding="async">
    </div>`;
}

function makeProjectPage(p, projects) {
  const nextIdx = (projects.indexOf(p) + 1) % projects.length;
  const next = projects[nextIdx];
  const driveBtn = p.driveLink ? `
                    <a href="${p.driveLink}" class="proj-drive-inline" target="_blank" rel="noopener noreferrer">
                        عرض المشروع كاملاً &rarr;
                    </a>` : '';

  return `<!DOCTYPE html>
<html lang="ar" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${p.titleEn} — Lujain Alshamrani</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <header class="nav">
        <a href="index.html" class="nav-brand">Lujain Alshamrani</a>
        <nav>
            <button class="nav-btn" id="navBtn" aria-label="Toggle menu">
                <span></span><span></span><span></span>
            </button>
            <ul class="nav-menu" id="navMenu">
                <li><a href="mydesignes.html" class="active">Work</a></li>
                <li><a href="aboutme.html">About</a></li>
                <li><a href="index.html#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main class="page">
        <div class="container">

            <a href="mydesignes.html" class="back-link">كل الأعمال</a>

            <div class="proj-hero-split fade-in">
                <div class="proj-hero-info">
                    <div class="proj-big-num">${p.num}</div>
                    <h1 class="proj-title-ar">${p.title}</h1>
                    <p class="proj-title-en">${p.titleEn}</p>
                    <p class="proj-summary-ar ar">${p.summaryAr}</p>
                    <div class="proj-meta-grid">
                        <div class="meta-item">
                            <div class="meta-label">التصنيف</div>
                            <div class="meta-value">${p.category}</div>
                        </div>
                        <div class="meta-item">
                            <div class="meta-label">المخرجات</div>
                            <div class="meta-value">${p.deliverables.join(' · ')}</div>
                        </div>
                        <div class="meta-item">
                            <div class="meta-label">السنة</div>
                            <div class="meta-value">${p.year}</div>
                        </div>
                    </div>${driveBtn}
                </div>
                <div class="proj-hero-img">
                    <img src="${p.img}" alt="${p.title}">
                </div>
            </div>

            <div class="proj-story-section fade-in-2">
                <p>${p.brief}</p>
                <p>${p.approach}</p>
                <p>${p.outcome}</p>
            </div>

            <div class="proj-images fade-in-3">
                ${makeGallery(p)}
            </div>

            <a href="project-${next.slug}.html" class="next-project">
                <div>
                    <div class="next-label">المشروع التالي</div>
                    <div class="next-name">${next.title}</div>
                </div>
                <div class="next-arrow">&rarr;</div>
            </a>

        </div>
    </main>

    <footer class="site-footer">
        <span class="footer-brand">Lujain Alshamrani</span>
        <ul class="footer-links">
            <li><a href="mydesignes.html">Work</a></li>
            <li><a href="aboutme.html">About</a></li>
        </ul>
        <span class="footer-copy">&copy; 2025 All rights reserved</span>
    </footer>

    <script>
        const btn = document.getElementById('navBtn');
        const menu = document.getElementById('navMenu');
        btn.addEventListener('click', () => {
            btn.classList.toggle('open');
            menu.classList.toggle('open');
        });
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                btn.classList.remove('open');
                menu.classList.remove('open');
            });
        });
    </script>
</body>
</html>`;
}

projects.forEach(p => {
  const html = makeProjectPage(p, projects);
  fs.writeFileSync(`project-${p.slug}.html`, html);
  console.log(`✓ project-${p.slug}.html`);
});

console.log(`\nDone — ${projects.length} pages generated.`);
