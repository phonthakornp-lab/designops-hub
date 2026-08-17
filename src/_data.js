var CF = 'https://skilllane.atlassian.net/wiki/spaces/';
var DB = 'https://github.com/uxui-skl/design-brain';
var W  = DB + '/blob/main/wiki/shared/';
var WD = W + 'design-system/';

var DATA = {
  updated: '17 ส.ค. 2026',
  roadmap: 'https://claude.ai/code/artifact/8cf346ea-80fb-4ade-a91d-2a459c66e097',

  nav: [
    { id: '',   icon: 'home',    label: 'Overview' },
    { sep: 'Playbook' },
    { id: 'ds', icon: 'palette', label: 'Design System' },
    { id: 'qa', icon: 'check',   label: 'Design QA' },
    { id: 'dv', icon: 'send',    label: 'ส่งงานให้ Dev', dot: true },
    { sep: 'ทีม' },
    { id: 'role', icon: 'user',  label: 'Role', off: true }
  ],

  sec: {
    ds: {
      color: 'blue', icon: 'palette', title: 'Design System', tag: 'token · naming · ลิขสิทธิ์',
      lede: 'รากฐานที่ทุก product ใช้ร่วมกัน · เอกสารตัวจริงทั้งหมดอยู่ใน design-brain (repo ทีม) — ที่อื่นเป็นชั้นเก่า อย่าใช้อ้างอิง',
      docsHd: 'เอกสารอ้างอิง',
      docsLede: 'ทั้งหมดอยู่ใน design-brain · ต้องเป็นสมาชิก org ถึงจะเปิดได้',
      topics: [
        { icon: 'frame', color: 'blue', t: 'ไฟล์ DS อยู่ที่ไหน', d: 'product ไหนใช้ DS ตัวไหน ไฟล์ Figma อันไหน — 5 ไฟล์พร้อม key', ext: W + 'design-system.md', up: 'ทวนล่าสุด 3 ส.ค. 2026' },
        { icon: 'palette', color: 'green', t: 'Foundation ต่อ product', d: 'สี · typography · spacing ค่าจริงที่ดึงจากไฟล์ ไม่ใช่ค่าที่ควรจะเป็น', ext: WD + 'foundation.md', up: 'ทวนล่าสุด 3 ส.ค. 2026' },
        { id: 'golden', icon: 'badge', color: 'green', t: 'Golden Set', d: 'ค่าไหนเชื่อได้ แยกตาม product', up: '4 product' },
        { id: 'token', icon: 'ruler', color: 'blue', t: 'Token & Naming', d: 'ตั้งชื่อ token ยังไง และ 3 ค่ายต่างกันตรงไหน', up: '3 เอกสาร' },
        { id: 'font', icon: 'type', color: 'purple', t: 'Font License', d: 'ทะเบียนลิขสิทธิ์ฟอนต์ + วิธีรายงานการใช้', up: '8 รายการ' },
        { icon: 'layers', color: 'amber', t: 'Mica DS', d: 'มาตรฐานกลางตัวใหม่ที่กำลังสร้าง — base MUI หน้าตา OLS', ext: 'https://skilllane.atlassian.net/browse/UXUI-1527', up: 'Jira · UXUI-1527' },
        { icon: 'clip', color: 'orange', t: 'Governance', d: 'ใครแก้ DS ได้ · เกณฑ์ว่าอะไรเชื่อถือได้ · ขั้นตอน publish', ext: W + 'ds-governance.md', up: 'ทวนล่าสุด 15 ก.ค. 2026' },
        { icon: 'target', color: 'purple', t: 'กติกา AI', d: 'AI generate UI และ audit ได้แค่ไหน ห้ามทำอะไร', ext: WD + 'ai-rules.md', up: 'ทวนล่าสุด 20 ก.ค. 2026' }
      ],
      tools: [
        { cmd: 'ds-audit', t: 'ตรวจ · แก้ · ปล่อย DS',
          d: 'สแกนหา hardcode และของที่ไม่ผูก token → แก้ให้ → เตรียม publish และร่างประกาศแจ้งทีม',
          modes: ['หา hardcode', 'แก้ให้', 'เตรียม publish'],
          scope: '2 ขอบเขต — ไฟล์ DS เอง หรือไฟล์งานที่ใช้ DS' }
      ]
    },
    qa: {
      color: 'green', icon: 'check', title: 'Design QA', tag: 'ตรวจของจริง · บันทึกจุดที่ไม่ตรง',
      skill: 'qa-check',
      lede: 'ตรวจว่าของที่ Dev ทำออกมาตรงกับที่ออกแบบไว้ไหม แล้วบันทึกทุกจุดที่ไม่ตรงไว้ในที่เดียว ให้ Dev แก้ได้ตรงจุดโดยไม่ต้องเดา',
      topics: [
        { icon: 'book', color: 'green', t: 'Playbook', d: 'อ่านก่อนเริ่ม — 2 แบบ เลือกจากคำถามเดียว', ext: 'https://claude.ai/code/artifact/099d7d0d-4141-4f20-a59b-5df40f7b6c28', up: 'พร้อมใช้' },
        { icon: 'frame', color: 'blue', t: 'บอร์ด QA (Figma)', d: 'แม่แบบบอร์ด — duplicate ไปใช้ 1 เฟรม = 1 หน้า', ext: 'https://www.figma.com/design/JB7nZD4KBOXX8q5QW3mucJ/-Master--Design-QA-Template?node-id=2-40', up: 'Figma master' },
        { icon: 'table', color: 'amber', t: 'Sheet รายงาน', d: 'แม่แบบตาราง issue 9 คอลัมน์ + แท็บ Onboarding ให้ Dev', ext: 'https://docs.google.com/spreadsheets/d/1Mj9MWa0rAjgmgeUjfh7E78C5T_h8MYWNzWVFw-H7zsk/edit', up: 'Google Sheet' },
        { icon: 'tag', color: 'purple', t: 'ประเภท issue 9 หมวด', d: 'enum มาตรฐาน + ระดับความรุนแรง 3 ระดับ', ext: DB + '/blob/main/templates/qa-issue-types.md', up: 'design-brain' },
        { icon: 'chart', color: 'orange', t: 'บทเรียนจาก B2C App', d: 'ผลจริง 139 รายการ — pattern ที่ควรกลับไปแก้ที่ต้นทาง', ext: 'https://skilllane.atlassian.net/browse/UXUI-1521', up: 'ปิด cycle 95.7%' }
      ]
    },
    dv: {
      color: 'orange', icon: 'send', title: 'ส่งงานให้ Dev', tag: 'ทำไฟล์ให้สะอาด → เช็ค → ส่ง',
      skill: 'handoff',
      lede: 'ร่างเอกสารส่งมอบจากไฟล์ที่ยังไม่พร้อม = ส่งปัญหาต่อให้ dev แบบมีเอกสารห่อไว้ — จึงต้องผ่านการตรวจก่อนทุกครั้ง',
      lock: {
        t: 'ยังไม่เปิด — พักไว้ก่อน',
        d: 'เคยทำจริงแค่ท่อนแรก (ตรวจและแก้ไฟล์) · อีก 2 ท่อนยังไม่เคยวิ่งจบ ถ้าเขียนตอนนี้จะได้คู่มือที่ 2 ใน 3 ท่อนยังไม่ยืนยัน',
        todo: ['รัน handoff ให้จบ 1 รอบกับงานจริง', 'กรอก Deliver Kit ให้ครบจนพลิกเป็น Ready for Dev', 'แล้วค่อยถอดออกมาเป็น playbook']
      },
      topics: [
        { icon: 'wrench', color: 'green', t: 'ทำไฟล์ให้สะอาด', d: 'หา hardcode / detach แล้วแก้ให้ — พิสูจน์แล้วกับ OLS', up: 'hardcode 56 → 9' },
        { icon: 'clip', color: 'orange', t: 'เช็คว่าพร้อมส่งไหม', d: 'คุณภาพไฟล์ · ความครบถ้วน · ความพร้อมส่ง', wait: 'ยังไม่เคยรัน' },
        { icon: 'doc', color: 'orange', t: 'ร่างเอกสารส่งมอบ', d: 'handoff doc มาตรฐานทีม', wait: 'ยังไม่เคยรัน' },
        { icon: 'folder', color: 'blue', t: 'Deliver Kit (Figma)', d: 'Checklist + ฟอร์ม + สถานะ Ready for Dev', ext: 'https://www.figma.com/design/JB7nZD4KBOXX8q5QW3mucJ/-Master--Design-QA-Template?node-id=2027-2', up: 'publish แล้ว' },
        { icon: 'target', color: 'purple', t: 'Design Rationale', d: 'อธิบายเหตุผลการออกแบบให้ dev ไม่ต้องเดา', wait: 'ยังไม่มีชิ้นตัวอย่าง' }
      ]
    },
    role: {
      color: '', icon: 'user', title: 'Role', tag: 'DesignOps ช่วยอะไรได้ · ขอยังไง',
      lede: 'DesignOps เป็น pool กลาง support ทุกทีม ไม่ผูกกับ product ใดเป็นพิเศษ',
      lock: {
        t: 'ยังไม่เปิด — กำลังตกลง',
        d: 'ท่อน "ขอความช่วยเหลือยังไง" ยังไม่ได้ตัดสิน ถ้าเปิดตอนนี้คนอ่านจบแล้วก็ยังไม่รู้จะเริ่มยังไง',
        todo: ['ตัดสินว่าทีมขอผ่านช่องทางไหน — เปิดการ์ด Jira, ทักตรง, หรือมีคิว', 'แล้วค่อยเขียนขอบเขตงาน 5 stage ประกอบ']
      },
      topics: []
    }
  },

  topic: {
    golden: {
      parent: 'ds', color: 'green', icon: 'badge',
      title: 'Golden Set', tag: 'ค่าที่เชื่อได้ · แยกตาม product',
      lede: 'ชุดค่าที่ตรวจจากไฟล์จริงแล้วยืนยันว่าใช้อ้างอิงได้ — ถ้าค่าในงานไม่ตรงกับที่นี่ ให้เชื่อที่นี่',
      cards: [
        { icon: 'doc', color: 'green', t: 'LMS', d: 'ANT Design 5 · Seed → Map → Alias', ext: WD + 'golden-set-lms.md', up: '14 ก.ค. 2026' },
        { icon: 'doc', color: 'blue', t: 'B2C Web', d: 'MUI', ext: WD + 'golden-set-b2c.md', up: '13 ก.ค. 2026' },
        { icon: 'doc', color: 'amber', t: 'Mica · NDLP + CBMS', d: 'MUI v5 — 2 product ใช้ไฟล์เดียวกัน', ext: WD + 'golden-set-mica.md', up: '13 ก.ค. 2026' },
        { icon: 'doc', color: 'purple', t: 'NCBS + OLS', d: 'shadcn / Tailwind — OLS duplicate โครงจาก NCBS', ext: WD + 'golden-set-ncbs-ols.md', up: '14 ก.ค. 2026' }
      ]
    },
    token: {
      parent: 'ds', color: 'blue', icon: 'ruler',
      title: 'Token & Naming', tag: 'โครงสร้าง · การตั้งชื่อ · 3 ค่าย',
      lede: 'อ่านก่อนเพิ่ม token ใหม่ — ตั้งชื่อผิด convention แล้วแก้ทีหลังกระทบทุกไฟล์ที่ผูกไว้',
      cards: [
        { icon: 'ruler', color: 'blue', t: 'Naming Convention', d: 'ตั้งชื่อ token ยังไง แยกตาม 2 ค่าย (styles vs variables)', ext: WD + 'naming.md', up: 'ทวนล่าสุด 3 ส.ค. 2026' },
        { icon: 'layers', color: 'green', t: 'Token Baseline Standard', d: 'มาตรฐานกลางสำหรับ DS ที่ไม่ได้ base บน third-party — 3 ชั้น Foundation → Semantic → Component', ext: WD + 'token-baseline-standard.md', up: 'ทวนล่าสุด 3 ส.ค. 2026' },
        { icon: 'tag', color: 'amber', t: 'Third-party Token Reference', d: 'ANT / MUI / shadcn ตั้งชื่อกันยังไง — เปิดตอนจะเพิ่ม token ใหม่', ext: WD + 'third-party-token-reference.md', up: 'ทวนล่าสุด 3 ส.ค. 2026' }
      ]
    },
    font: {
      parent: 'ds', color: 'purple', icon: 'type',
      title: 'Font License', tag: 'ทะเบียน · การรายงาน · ใบอนุญาต',
      lede: 'บริษัทซื้อ font license มาแบบจำกัด — แต่ละใบระบุชัดว่าใช้กับ domain หรือ project ไหนได้บ้าง ใช้ผิดใบคือความเสี่ยงทางกฎหมายของบริษัท',
      start: [
        { q: 'จะใช้ฟอนต์ในโปรเจกต์ใหม่', a: 'เปิดทะเบียนดูก่อนว่าฟอนต์นั้น license ครอบคลุมงานของคุณไหม', to: CF + 'UT/database/3536453653', label: 'เปิดทะเบียน' },
        { q: 'ใช้อยู่แล้วแต่ยังไม่ได้รายงาน', a: 'กรอกช่อง Used In ใน record ของฟอนต์นั้น — ทีม ชื่อโปรเจกต์ ประเภทงาน เจ้าของ', to: CF + 'UT/pages/3539763224/Font+Usage', label: 'อ่านคู่มือ 4 ขั้น' },
        { q: 'จะเพิ่มฟอนต์ใหม่เข้าทะเบียน', a: 'ก๊อปแม่แบบไปกรอก อย่าสร้างหน้าเปล่าเอง โครงจะไม่ตรงกับใบอื่น', to: CF + 'UT/pages/3538059266/Master+Template+License+Record', label: 'เปิดแม่แบบ' }
      ],
      cards: [
        { icon: 'table', color: 'purple', t: 'Inventory', d: 'ทะเบียนกลาง — มีฟอนต์อะไร สถานะไหน ใครใช้อยู่', ext: CF + 'UT/database/3536453653', up: '13 ก.ค. 2026' },
        { icon: 'book', color: 'green', t: 'Font Usage', d: 'คู่มือรายงานการใช้ฟอนต์ 4 ขั้น สำหรับทุกคนในทีม', ext: CF + 'UT/pages/3539763224/Font+Usage', up: '30 เม.ย. 2026' },
        { icon: 'clip', color: 'blue', t: 'Master Template', d: 'แม่แบบขึ้นทะเบียนฟอนต์ใหม่ — 1 ใบ = 1 license', ext: CF + 'UT/pages/3538059266/Master+Template+License+Record', up: '30 เม.ย. 2026' },
        { icon: 'target', color: 'amber', t: 'Solutions Plan', d: 'ที่มาของงาน — กันความเสี่ยง + วางมาตรฐาน + ประเมินความคุ้มค่า', ext: CF + 'UT/pages/3536486409/Solutions+Plan+-+Font+License', up: '7 พ.ค. 2026' }
      ],
      records: [
        { t: 'DB Heavent', w: '14 styles · Desktop Font · DB Designs', st: '🟡 Pending Review', up: '29 พ.ค. 2026', to: CF + 'UT/pages/3538288641/DB+Heavent+-+License+Record' },
        { t: 'Font Awesome', w: 'Pro (Legacy) · 60,902 icons · Fonticons', st: '🟢 Active', up: '5 พ.ค. 2026', to: CF + 'UT/pages/3538059282/Font+Awesome+-+License+Record' },
        { t: 'ThaiSans Neue', w: '18 styles · Commercial License · Letsego', st: '🟡 Pending Review', up: '30 เม.ย. 2026', to: CF + 'UT/pages/3541565441/ThaiSans+Neue+-+License+Record' },
        { t: 'TF Lanna', w: '4 styles · FTPI (สหพันธ์อุตสาหกรรมการพิมพ์ไทย)', st: '🟡 Pending Review', up: '30 เม.ย. 2026', to: CF + 'UT/pages/3538288653/TF+Lanna+-+License+Record' }
      ],
      legend: [
        { s: '🟢 Active', x: 'License มีผลอยู่ ครอบคลุม domain ที่ใช้งานครบ' },
        { s: '🟡 Pending Review', x: 'รอตรวจรายละเอียด license ให้ครบ' },
        { s: '🔴 Non-Compliant', x: 'ใช้เกินขอบเขต license — ต้องแก้ทันที' },
        { s: '⚫ Expired', x: 'หมดอายุ — ต้องต่อหรือเปลี่ยนฟอนต์' }
      ],
      note: 'คู่มือรายงาน (30 เม.ย.) ยังลิสต์ฟอนต์ไว้ 3 ตัว แต่ทะเบียนมี 4 แล้ว — <b>ThaiSans Neue ยังไม่ถูกเพิ่มในคู่มือ</b> ใครอ่านคู่มืออย่างเดียวจะไม่รู้ว่ามีตัวนี้'
    }
  }
};
