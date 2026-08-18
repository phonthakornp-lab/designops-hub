var CF = 'https://skilllane.atlassian.net/wiki/spaces/';
var DB = 'https://github.com/uxui-skl/design-brain';
var W  = DB + '/blob/main/wiki/shared/';
var WD = W + 'design-system/';

var DATA = {
  updated: '18 ส.ค. 2026',
  roadmap: 'https://claude.ai/code/artifact/8cf346ea-80fb-4ade-a91d-2a459c66e097',

  nav: [
    { id: '',   icon: 'home',    label: 'Overview' },
    { sep: 'Playbook' },
    { id: 'ds', icon: 'palette', label: 'Design System' },
    { id: 'qa', icon: 'check',   label: 'Design QA' },
    { id: 'dv', icon: 'send',    label: 'ส่งงานให้ Dev', dot: true },
    { sep: 'เครื่องมือ' },
    { id: 'tools', icon: 'wrench', label: 'เครื่องมือ (Claude)' },
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
        { icon: 'clip', color: 'orange', t: 'Governance', d: 'ใครแก้ DS ได้ · เกณฑ์ว่าอะไรเชื่อถือได้ · ขั้นตอน publish', ext: W + 'ds-governance.md', up: 'ทวนล่าสุด 15 ก.ค. 2026' },
        { icon: 'target', color: 'purple', t: 'กติกา AI', d: 'AI generate UI และ audit ได้แค่ไหน ห้ามทำอะไร', ext: WD + 'ai-rules.md', up: 'ทวนล่าสุด 20 ก.ค. 2026' }
      ],
      tools: ['ds-audit']
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
      docsHd: 'เอกสารอ้างอิง',
      docsLede: 'ของที่ต้องหยิบไปใช้ตอนส่งงาน',
      topics: [
        { icon: 'folder', color: 'blue', t: 'Deliver Kit (Figma)', d: 'หน้า Deliver — Checklist 7 ข้อ + ฟอร์ม + สถานะ Ready for Dev', ext: 'https://www.figma.com/design/JB7nZD4KBOXX8q5QW3mucJ/-Master--Design-QA-Template?node-id=2027-2', up: 'publish แล้ว' },
        { icon: 'doc', color: 'green', t: 'โครง handoff doc', d: 'หัวข้อที่เอกสารส่งมอบต้องมี — spec ต่อ component · states · a11y · edge case', ext: 'https://github.com/uxui-skl/design-brain/blob/main/templates/handoff-doc.md', up: 'design-brain' },
        { icon: 'target', color: 'purple', t: 'Design Rationale', d: 'อธิบายเหตุผลการออกแบบให้ dev ไม่ต้องเดา', wait: 'ยังไม่มีชิ้นตัวอย่าง' }
      ],
      tools: ['ds-audit', 'handoff']
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
  },

  toolChain: [
    { cmd: 'ds-audit', mode: 'หา hardcode', n: 'รู้ว่าไฟล์มีอะไรผิด' },
    { cmd: 'ds-audit', mode: 'แก้ให้', n: 'แก้ตามที่เลือก' },
    { cmd: 'handoff', mode: 'เช็คว่าพร้อมส่งไหม', n: 'Ready / Not Ready' },
    { cmd: 'handoff', mode: 'ร่าง handoff doc', n: 'ส่งให้ dev' },
    { cmd: 'qa-check', mode: 'เทียบ design ↔ build', n: 'หลัง dev ทำเสร็จ' }
  ],

  tool: {
    'ds-audit': {
      icon: 'palette', color: 'blue', title: 'ตรวจ · แก้ · ปล่อย DS', cmd: 'ds-audit',
      tag: 'สุขภาพไฟล์ Figma', sec: 'ds',
      lede: 'สแกนไฟล์ Figma หา hardcode สี/typography, token ผิดที่, detach และ layer naming — แล้วแก้ให้ตามที่คุณเลือก หรือช่วยตอนจะปล่อย library',
      when: 'ก่อนส่ง review · ก่อนส่ง dev · หรือตอนจะ publish library',
      type: 'พิมพ์ /ds-audit แล้วบอกว่าไฟล์ไหน + ตรวจมิติอะไร (สี / typography / effects / radius / spacing / ทั้งหมด)',
      modes: [
        { m: 'หา hardcode', dflt: true, d: 'scan → วินิจฉัย → รายงานว่าค่าที่เจอคืออะไร ควรเป็น token ตัวไหน', w: 'อ่านอย่างเดียว', wk: 'read' },
        { m: 'แก้ให้', d: 'ผูก token / swap เป็น DS / rename layer ตามที่คุณเลือกทีละข้อ', w: 'เขียนไฟล์ Figma จริง', wk: 'write' },
        { m: 'เตรียม publish', d: 'pre-publish check → changelog → ร่างประกาศแจ้งทีม', w: 'ไม่กด publish แทน — ร่างให้แล้วคุณกดเอง', wk: 'safe' }
      ],
      prep: [
        { t: 'ลิงก์ไฟล์ Figma + ขอบเขต', w: 'ทั้งไฟล์ใหญ่มากอาจ timeout — ซอยเป็น page ก่อนถ้าไม่แน่ใจ' },
        { t: 'บอกว่าเป็นไฟล์ DS หรือไฟล์งาน', w: 'ไฟล์งานต้องตรวจ detach + layer naming เพิ่ม' },
        { t: 'ผลตรวจรอบก่อน (เฉพาะโหมดแก้ให้)', w: 'ไม่มี = ทำไม่ได้ ต้องหาให้จบก่อน' },
        { t: 'exempt list ใน golden-set ของ BU นั้น', w: 'ไม่มี = ตัวเลข % ที่ออกมาจะหลอกทีม' }
      ],
      rules: [
        'ไม่มีผลตรวจ ห้ามแก้ — จะไม่รู้ว่าแก้ครบไหมและตรวจซ้ำยังไง',
        'เซฟ version ก่อนแก้ทุกครั้ง + เช็คชื่อไฟล์ก่อนเขียน (เขียนผิดไฟล์ย้อนยาก)',
        'แก้ที่ main component ไม่ใช่ที่ instance — แก้ผิดชั้นจะกลายเป็น override เพิ่มปัญหา',
        'ห้ามแตะของใน exempt list เช่นสีแบรนด์ภายนอกหรือ artwork',
        'swap แล้วหน้าตาเพี้ยน หยุดทันที ไม่ทำต่อให้ครบแล้วค่อยดู'
      ],
      notdo: 'ไม่สร้าง component ใหม่ใน DS · ไม่รวม/ลบ component ที่ซ้ำ · ไม่ตัดสินว่าอะไรควร exempt — สามอย่างนี้เป็นการตัดสินใจ ไม่ใช่งานกล',
      proof: { ok: true, t: 'ใช้จริงแล้ว', d: 'OLS หน้า AllContent-Guest (6 ส.ค.) — hardcode 56 → 9 จุด · layer ชื่อ default 19 → 0 · เทียบภาพก่อน/หลังแล้วไม่เปลี่ยนเลย' }
    },

    'qa-check': {
      icon: 'check', color: 'green', title: 'Design QA', cmd: 'qa-check',
      tag: 'เทียบของจริงกับที่ออกแบบ', sec: 'qa',
      lede: 'ตรวจว่าของที่ dev ทำออกมาตรงกับที่ออกแบบไว้ไหม — หรือถ้าคุณตรวจเองมาแล้ว ให้มันย้ายหมุดจากบอร์ด Figma ลง Sheet ให้',
      when: 'หลัง dev ขึ้น staging หรือ preprod แล้ว ก่อนปล่อยจริง',
      type: 'พิมพ์ /qa-check — มันจะเดาโหมดจากสิ่งที่คุณให้มา ไม่ต้องจำชื่อโหมด',
      modes: [
        { m: 'เทียบ design ↔ build', d: 'AI เก็บหลักฐาน 2 ฝั่ง → ไล่ diff 7 หมวด + a11y → ออกรายงาน', w: 'ค่าเริ่มต้นบอกในแชท · ลงผลให้เมื่อคุณสั่ง', wk: 'safe' },
        { m: 'ย้ายหมุดลง Sheet', d: 'คุณตรวจเองแล้ววางหมุดในบอร์ด → AI อ่านทั้งบอร์ดลง Sheet + สรุปให้', w: 'เขียน Google Sheet เมื่อคุณยืนยัน', wk: 'write' },
        { m: 'จัด bug list ที่มีอยู่', d: 'เติม severity + หมวด + รวมรายการซ้ำ + เรียงลำดับ', w: 'บอกในแชท', wk: 'read' }
      ],
      prep: [
        { t: 'บอร์ด QA ใน Figma', w: 'duplicate จากแม่แบบ · 1 เฟรม = 1 หน้า = 1 platform' },
        { t: 'Sheet + แท็บของ platform นั้น', w: '1 แท็บ = 1 platform ไม่รวมกัน · ระบบจะบอกว่าเครื่องคุณใช้บัญชีไหน' },
        { t: 'URL ของหน้าจริง หรือหมุดที่วางไว้แล้ว', w: 'มีหมุดอยู่แล้ว = โหมดย้ายหมุด ไม่แคปใหม่ทับ' },
        { t: 'build / environment ที่เทส', w: 'ไม่ระบุแล้ว re-test เทียบไม่ได้ว่าแก้แล้วจริง' }
      ],
      rules: [
        'ค่าเริ่มต้นคือบอกในแชทเฉย ๆ — จะไปเขียนบอร์ด/Sheet/Jira ต้องประกาศก่อนแล้วรอยืนยัน',
        'บอร์ด Figma คือต้นฉบับ ไม่ใช่ Sheet — แก้ที่บอร์ดแล้วสั่งเขียนใหม่ อย่าพิมพ์แก้ใน Sheet เอง',
        'ไม่มีการ์ดไหนถูกข้ามเงียบ ๆ — อ่านไม่ออกต้องรายงานว่ามีกี่ใบและอยู่ตรงไหน',
        'AI ห้ามตัดสินเรื่อง content/data เอง เพราะ mockup ใช้ข้อมูลสมมติเสมอ'
      ],
      proof: { ok: true, t: 'ใช้จริงแล้ว (บางโหมด)', d: 'โหมดย้ายหมุดลง Sheet — B2C App 120 รายการ แล้วปิด cycle ทั้งหมด 139 รายการที่ 95.7% (11 ส.ค.) · ⚠️ โหมดเทียบ design ↔ build ยังไม่เคยวิ่งจบทั้งรอบ' }
    },

    'handoff': {
      icon: 'send', color: 'orange', title: 'ส่งงานให้ Dev', cmd: 'handoff',
      tag: 'เช็คความพร้อม + ร่างเอกสาร', sec: 'dv',
      lede: 'ไล่ checklist ว่าไฟล์พร้อมส่งจริงไหม แล้วค่อยร่างเอกสารส่งมอบมาตรฐานทีม',
      when: 'หลังทำไฟล์สะอาดแล้ว ก่อนส่งให้ dev',
      type: 'พิมพ์ /handoff แล้วแนบลิงก์ Figma frame + Jira ticket ถ้ามี',
      modes: [
        { m: 'เช็คว่าพร้อมส่งไหม', d: 'ไล่ 3 หมวด — คุณภาพไฟล์ · ความครบถ้วน · ความพร้อมส่ง → ตัดสิน Ready / Not Ready', w: 'บอกในแชท', wk: 'read' },
        { m: 'ร่าง handoff doc', dflt: true, d: 'เช็คก่อนเสมอ แล้วร่างเอกสารจาก spec + AC ที่มี', w: 'เขียนหน้า Deliver ใน Figma (รอ merge PR #41) · วันนี้ยังออกเป็น .md', wk: 'write' }
      ],
      prep: [
        { t: 'ลิงก์ Figma frame + ขอบเขต', w: 'หน้าไหนบ้างที่จะส่ง' },
        { t: 'platform ที่ต้องส่ง', w: 'ใช้เช็คว่าออกแบบครบตาม scope ไหม' },
        { t: 'จอเล็กสุดที่ support', w: 'ใช้ตรวจ edge case' },
        { t: 'Jira ticket / PRD ถ้ามี', w: 'ดึง spec กับ AC มาใส่ในเอกสาร' },
        { t: 'design decision ที่ dev น่าจะสงสัย', w: 'ใส่เหตุผลไว้ล่วงหน้า ดีกว่าให้ถามกลับทีหลัง' }
      ],
      rules: [
        'ร่างเอกสารจากไฟล์ที่ยังไม่พร้อม = ส่งปัญหาต่อให้ dev แบบมีเอกสารห่อไว้ — จึงต้องเช็คก่อนทุกครั้ง',
        'ผลออกมา Not Ready ให้บอกว่าต้องแก้อะไรก่อน แล้วหยุด ยังไม่ร่างเอกสาร',
        'ไม่แก้งานออกแบบ — เขียนได้เฉพาะหน้า Deliver · จะให้แก้ไฟล์ใช้ ds-audit โหมดแก้',
        'ห้ามพลิก Status เป็น Ready for Dev แทนคน — ฟอร์มนี้คือการประกาศของ designer ถ้าเครื่องมือพลิกให้ ความรับผิดชอบก็หายไปด้วย',
        'a11y requirement ต้องอยู่ในทุก handoff ไม่ใช่ optional',
        'ระบุ location ทุก issue — "มี hardcode 12 จุด" โดยไม่บอกที่ ใช้ไม่ได้'
      ],
      proof: { ok: false, t: 'ยังไม่เคยรัน', d: 'เขียนไว้ครบแล้วแต่ยังไม่เคยวิ่งจบกับงานจริงสักรอบ · ปลายทางเพิ่งเปลี่ยนเป็นหน้า Deliver ใน Figma (PR #41 รอ merge) — คนแรกที่ลองจะเจอสะดุด ทักได้เลยจะได้แก้' }
    }
  }
};
