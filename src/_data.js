var CF = 'https://skilllane.atlassian.net/wiki/spaces/';
var DB = 'https://github.com/uxui-skl/design-brain';
var W  = DB + '/blob/main/wiki/shared/';
var WD = W + 'design-system/';

var DATA = {
  updated: '7 ต.ค. 2026',
  roadmap: 'https://claude.ai/code/artifact/8cf346ea-80fb-4ade-a91d-2a459c66e097',

  nav: [
    { id: '',   icon: 'home',    label: 'Overview' },
    { sep: 'Playbook' },
    { id: 'ds', icon: 'palette', label: 'Design System' },
    { id: 'qa', icon: 'check',   label: 'Design QA' },
    { id: 'dv', icon: 'send',    label: 'Deliver to Dev' },
    { sep: 'เครื่องมือ' },
    { id: 'tools', icon: 'wrench', label: 'เครื่องมือ (Claude)' },
    { sep: 'ทีม' },
    { id: 'role', icon: 'user',  label: 'Role', off: true }
  ],

  sec: {
    ds: {
      color: 'blue', icon: 'palette', title: 'Design System', tag: 'token · naming · license',
      lede: 'เอกสารฉบับปัจจุบันอยู่ใน design-brain แหล่งอื่นเป็นฉบับเก่า',
      docsHd: 'เอกสารอ้างอิง',
      docsLede: 'ลิงก์ design-brain เปิดได้เฉพาะสมาชิก GitHub org',
      topics: [
        { icon: 'frame', color: 'blue', t: 'ตำแหน่งไฟล์ Design System', d: 'Design System ที่แต่ละ product ใช้ · 5 ไฟล์', ext: W + 'design-system.md', up: '3 ส.ค. 2026' },
        { icon: 'palette', color: 'green', t: 'Foundation ราย product', d: 'ค่าจริงที่ดึงจากไฟล์', ext: WD + 'foundation.md', up: '3 ส.ค. 2026' },
        { id: 'golden', icon: 'badge', color: 'green', t: 'Golden Set', d: 'ค่าอ้างอิงที่ยืนยันแล้ว แยกตาม product', up: '4 product' },
        { id: 'token', icon: 'ruler', color: 'blue', t: 'Token & Naming', d: 'หลักการตั้งชื่อ token', up: '3 เอกสาร' },
        { id: 'font', icon: 'type', color: 'purple', t: 'Font License', d: 'ทะเบียน license ฟอนต์', up: '8 รายการ' },
        { icon: 'clip', color: 'orange', t: 'Governance', d: 'สิทธิ์การแก้ไข Design System · ขั้นตอน publish', ext: W + 'ds-governance.md', up: '15 ก.ค. 2026' },
        { icon: 'target', color: 'purple', t: 'แนวทางการใช้ AI', d: 'ขอบเขตงานที่ AI ทำได้', ext: WD + 'ai-rules.md', up: '20 ก.ค. 2026' }
      ],
      tools: ['ds-audit']
    },
    qa: {
      color: 'green', icon: 'check', title: 'Design QA', tag: 'ตรวจงานจริง · บันทึกจุดที่ไม่ตรง',
      skill: 'qa-check',
      lede: 'ตรวจงานที่ Dev พัฒนาเทียบกับ design และบันทึกจุดที่ไม่ตรงไว้ในที่เดียว',
      topics: [
        { icon: 'book', color: 'green', t: 'Playbook', d: 'อ่านก่อนเริ่ม · มี 2 แนวทาง', ext: 'https://claude.ai/code/artifact/099d7d0d-4141-4f20-a59b-5df40f7b6c28', up: 'พร้อมใช้' },
        { icon: 'frame', color: 'blue', t: 'Board QA (Figma)', d: 'แม่แบบ board · 1 frame = 1 หน้า', ext: 'https://www.figma.com/design/JB7nZD4KBOXX8q5QW3mucJ/-Master--Design-QA-Template?node-id=2-40', up: 'Figma master' },
        { icon: 'table', color: 'amber', t: 'Sheet รายงาน', d: 'ตาราง issue 9 column + tab Onboarding', ext: 'https://docs.google.com/spreadsheets/d/1Mj9MWa0rAjgmgeUjfh7E78C5T_h8MYWNzWVFw-H7zsk/edit', up: 'Google Sheet' },
        { icon: 'tag', color: 'purple', t: 'ประเภท issue 9 หมวด', d: 'หมวดมาตรฐาน + ความรุนแรง 3 ระดับ', ext: DB + '/blob/main/templates/qa-issue-types.md', up: 'design-brain' },
        { icon: 'chart', color: 'orange', t: 'บทเรียนจาก B2C App', d: 'ผลจริง 139 รายการ · pattern ที่ควรแก้ที่ต้นทาง', ext: 'https://skilllane.atlassian.net/browse/UXUI-1521', up: 'ปิด cycle 95.7%' }
      ]
    },
    dv: {
      color: 'orange', icon: 'send', title: 'Deliver to Dev', tag: 'ตรวจ → แก้ไข → ยืนยันความพร้อม',
      skill: 'deliver-kit',
      lede: 'ระบบตรวจ แก้ไข และสร้างหน้า Deliver ใน Figma ส่วน Checklist ฟอร์ม และสถานะ Designer เป็นผู้ทำ',
      docsHd: 'เอกสารอ้างอิง',
      docsLede: '',
      topics: [
        { icon: 'folder', color: 'blue', t: 'Deliver Kit (Figma)', d: 'Checklist 7 ข้อ + ฟอร์ม + สถานะ', ext: 'https://www.figma.com/design/JB7nZD4KBOXX8q5QW3mucJ/-Master--Design-QA-Template?node-id=2027-2', up: 'publish 28 ก.ย. 2026' },
        { icon: 'doc', color: 'green', t: 'โครงสร้าง handoff doc', d: 'หัวข้อที่เอกสารต้องมี', ext: 'https://github.com/uxui-skl/design-brain/blob/main/templates/handoff-doc.md', up: 'design-brain' },
        { icon: 'target', color: 'purple', t: 'Design Rationale', d: 'เหตุผลการออกแบบสำหรับ Dev', wait: 'ยังไม่มีตัวอย่าง' }
      ],
      tools: ['deliver-kit', 'ds-audit', 'handoff']
    },
    role: {
      color: '', icon: 'user', title: 'Role', tag: 'ขอบเขตงาน DesignOps · ช่องทางการขอ',
      lede: 'DesignOps เป็น pool กลางที่ support ทุกทีม ไม่ผูกกับ product ใดเป็นพิเศษ',
      lock: {
        t: 'ยังไม่เปิดใช้ อยู่ระหว่างตกลง',
        d: 'ยังไม่ได้กำหนดช่องทางการขอความช่วยเหลือ',
        todo: ['กำหนดช่องทางการขอ: card Jira, ติดต่อโดยตรง หรือระบบคิว', 'เขียนขอบเขตงาน 5 stage ประกอบ']
      },
      topics: []
    }
  },

  topic: {
    golden: {
      parent: 'ds', color: 'green', icon: 'badge',
      title: 'Golden Set', tag: 'ค่าอ้างอิง · แยกตาม product',
      lede: 'ค่าที่ตรวจจากไฟล์จริงแล้ว หากค่าในงานไม่ตรง ให้ยึดค่านี้',
      cards: [
        { icon: 'doc', color: 'green', t: 'LMS', d: 'ANT Design 5 · Seed → Map → Alias', ext: WD + 'golden-set-lms.md', up: '14 ก.ค. 2026' },
        { icon: 'doc', color: 'blue', t: 'B2C Web', d: 'MUI', ext: WD + 'golden-set-b2c.md', up: '13 ก.ค. 2026' },
        { icon: 'doc', color: 'amber', t: 'Mica · NDLP + CBMS', d: 'MUI v5 · 2 product ใช้ไฟล์เดียวกัน', ext: WD + 'golden-set-mica.md', up: '13 ก.ค. 2026' },
        { icon: 'doc', color: 'purple', t: 'NCBS + OLS', d: 'shadcn / Tailwind · OLS duplicate โครงสร้างจาก NCBS', ext: WD + 'golden-set-ncbs-ols.md', up: '14 ก.ค. 2026' }
      ]
    },
    token: {
      parent: 'ds', color: 'blue', icon: 'ruler',
      title: 'Token & Naming', tag: 'โครงสร้าง · naming · 3 แนวทาง',
      lede: 'อ่านก่อนเพิ่ม token ใหม่ การแก้ naming ภายหลังกระทบทุกไฟล์ที่ผูกไว้',
      cards: [
        { icon: 'ruler', color: 'blue', t: 'Naming Convention', d: 'หลักการตั้งชื่อ token: styles และ variables', ext: WD + 'naming.md', up: 'ทวนล่าสุด 3 ส.ค. 2026' },
        { icon: 'layers', color: 'green', t: 'Token Baseline Standard', d: 'มาตรฐาน 3 ชั้น สำหรับ Design System ที่ไม่ใช้ third-party', ext: WD + 'token-baseline-standard.md', up: 'ทวนล่าสุด 3 ส.ค. 2026' },
        { icon: 'tag', color: 'amber', t: 'Third-party Token Reference', d: 'naming ของ ANT / MUI / shadcn', ext: WD + 'third-party-token-reference.md', up: 'ทวนล่าสุด 3 ส.ค. 2026' }
      ]
    },
    font: {
      parent: 'ds', color: 'purple', icon: 'type',
      title: 'Font License', tag: 'ทะเบียน · การรายงาน · license',
      lede: 'license แต่ละใบระบุ domain หรือ project ที่ใช้ได้ การใช้ผิดขอบเขตเป็นความเสี่ยงทางกฎหมาย',
      start: [
        { q: 'ใช้ฟอนต์ในโปรเจกต์ใหม่', a: 'ตรวจในทะเบียนว่า license ครอบคลุมงานหรือไม่', to: CF + 'UT/database/3536453653', label: 'เปิดทะเบียน' },
        { q: 'ใช้ฟอนต์อยู่แล้วแต่ยังไม่ได้รายงาน', a: 'กรอกช่อง Used In: ทีม ชื่อโปรเจกต์ ประเภทงาน เจ้าของ', to: CF + 'UT/pages/3539763224/Font+Usage', label: 'อ่านคู่มือ 4 ขั้น' },
        { q: 'เพิ่มฟอนต์ใหม่เข้าทะเบียน', a: 'คัดลอกแม่แบบเพื่อให้โครงสร้างตรงกับรายการอื่น', to: CF + 'UT/pages/3538059266/Master+Template+License+Record', label: 'เปิดแม่แบบ' }
      ],
      cards: [
        { icon: 'table', color: 'purple', t: 'Inventory', d: 'ทะเบียนกลาง: ฟอนต์ สถานะ และผู้ใช้งาน', ext: CF + 'UT/database/3536453653', up: '13 ก.ค. 2026' },
        { icon: 'book', color: 'green', t: 'Font Usage', d: 'คู่มือรายงานการใช้ฟอนต์ 4 ขั้น', ext: CF + 'UT/pages/3539763224/Font+Usage', up: '30 เม.ย. 2026' },
        { icon: 'clip', color: 'blue', t: 'Master Template', d: 'แม่แบบขึ้นทะเบียน · 1 ใบ = 1 license', ext: CF + 'UT/pages/3538059266/Master+Template+License+Record', up: '30 เม.ย. 2026' },
        { icon: 'target', color: 'amber', t: 'Solutions Plan', d: 'ที่มา: ลดความเสี่ยง วางมาตรฐาน ประเมินความคุ้มค่า', ext: CF + 'UT/pages/3536486409/Solutions+Plan+-+Font+License', up: '7 พ.ค. 2026' }
      ],
      records: [
        { t: 'DB Heavent', w: '14 styles · Desktop Font · DB Designs', st: '🟡 Pending Review', up: '29 พ.ค. 2026', to: CF + 'UT/pages/3538288641/DB+Heavent+-+License+Record' },
        { t: 'Font Awesome', w: 'Pro (Legacy) · 60,902 icons · Fonticons', st: '🟢 Active', up: '5 พ.ค. 2026', to: CF + 'UT/pages/3538059282/Font+Awesome+-+License+Record' },
        { t: 'ThaiSans Neue', w: '18 styles · Commercial License · Letsego', st: '🟡 Pending Review', up: '30 เม.ย. 2026', to: CF + 'UT/pages/3541565441/ThaiSans+Neue+-+License+Record' },
        { t: 'TF Lanna', w: '4 styles · FTPI (สหพันธ์อุตสาหกรรมการพิมพ์ไทย)', st: '🟡 Pending Review', up: '30 เม.ย. 2026', to: CF + 'UT/pages/3538288653/TF+Lanna+-+License+Record' }
      ],
      legend: [
        { s: '🟢 Active', x: 'License มีผล ครอบคลุม domain ที่ใช้งาน' },
        { s: '🟡 Pending Review', x: 'รอตรวจสอบรายละเอียด license' },
        { s: '🔴 Non-Compliant', x: 'ใช้เกินขอบเขต license ต้องแก้ไขทันที' },
        { s: '⚫ Expired', x: 'หมดอายุ ต้องต่ออายุหรือเปลี่ยนฟอนต์' }
      ],
      note: 'คู่มือรายงาน (30 เม.ย.) ระบุฟอนต์ 3 รายการ ขณะที่ทะเบียนมี 4 รายการ <b>ThaiSans Neue ยังไม่อยู่ในคู่มือ</b>'
    }
  },

  toolChain: [
    { cmd: 'deliver-kit', mode: 'พาเดินทั้ง flow', n: 'ครอบคลุม 2 คำสั่งถัดไป' },
    { cmd: 'ds-audit', mode: 'หา hardcode', n: 'ระบุจุดที่ผิดในไฟล์' },
    { cmd: 'ds-audit', mode: 'แก้ไข', n: 'แก้ตามรายการที่เลือก' },
    { cmd: 'handoff', mode: 'ตรวจความพร้อมส่ง', n: 'Ready / Not Ready' },
    { cmd: 'handoff', mode: 'ร่าง handoff doc', n: 'ส่งให้ Dev' },
    { cmd: 'qa-check', mode: 'เทียบ design ↔ build', n: 'หลัง Dev พัฒนาเสร็จ' }
  ],

  tool: {
    'deliver-kit': {
      icon: 'send', color: 'orange', title: 'ส่งงานให้ Dev ทีละขั้น', cmd: 'deliver-kit',
      tag: 'คำสั่งเดียวครบ flow', sec: 'dv',
      lede: '7 ขั้น ตั้งแต่ตรวจไฟล์ แก้ไข สร้างหน้า Deliver จนถึง Ready for Dev โดยเรียก ds-audit และ handoff อัตโนมัติ',
      when: 'หลังออกแบบเสร็จ ก่อนส่งให้ Dev',
      type: 'พิมพ์ /deliver-kit พร้อมลิงก์ page หรือ frame · พิมพ์ "ต่อ" เมื่อทำขั้นของตนเสร็จ',
      modes: [
        { m: 'พาเดินทั้ง flow', dflt: true, d: 'ขั้น 1-3 ระบบทำ (ตรวจ · แก้ไข · สร้างหน้า Deliver) · ขั้น 4-7 Designer ทำ (ตอบคำถาม · ติ๊ก · กรอก · เปลี่ยนสถานะ) · สถานะเก็บใน Figma จึงทำต่อภายหลังได้', w: 'เขียนไฟล์ Figma เฉพาะรายการที่เลือกแก้ + หน้า Deliver', wk: 'write' }
      ],
      prep: [
        { t: 'ลิงก์ page หรือ frame ของงานรอบนี้', w: 'ไม่ต้องทั้งไฟล์ · หากเป็น instance ระบบตรวจที่ master ให้' },
        { t: 'platform ที่ส่ง', w: 'ใช้ตรวจข้อ breakpoint' },
        { t: 'Jira ticket (ถ้ามี)', w: 'ใช้เทียบกับ AC' }
      ],
      rules: [
        'ไม่ติ๊ก Checklist ไม่กรอกฟอร์ม ไม่เปลี่ยน Status แทน Designer แม้ได้รับคำสั่ง',
        'ต้องขอยืนยันก่อนสร้างหน้า Deliver และตำแหน่งที่วาง',
        'หากขัดกับผลตรวจ แจ้งเตือนครั้งเดียวและเคารพการตัดสินใจ',
        'ขั้น 2 ข้ามได้ · ขั้น 4-7 ข้ามไม่ได้ แต่หยุดและกลับมาทำต่อได้'
      ],
      proof: { ok: true, t: 'ทดสอบครบ 7 ขั้นแล้ว', d: 'B2C App หน้า My Course (28 ก.ย.) · ขั้น 2 ข้ามในรอบทดสอบ (ใช้ /ds-audit mode แก้ ซึ่งใช้งานจริงแล้ว) · แก้ 5 ปัญหาก่อนเปิดใช้ เช่น ผลตรวจ instance ผิด และ flow หยุดเมื่อติ๊กไม่ครบ' }
    },

    'ds-audit': {
      icon: 'palette', color: 'blue', title: 'ตรวจ · แก้ · ปล่อย Design System', cmd: 'ds-audit',
      tag: 'ความถูกต้องของไฟล์ Figma', sec: 'ds',
      lede: 'ตรวจ hardcode สี/typography, token ผิดตำแหน่ง, detach และ layer naming แก้ตามที่เลือก และเตรียม publish library',
      when: 'ก่อนส่ง review · ก่อนส่ง Dev · ก่อน publish library',
      type: 'พิมพ์ /ds-audit พร้อมระบุไฟล์และมิติที่ตรวจ (สี / typography / effects / radius / spacing / ทั้งหมด)',
      modes: [
        { m: 'หา hardcode', dflt: true, d: 'scan → วินิจฉัย → รายงานค่าที่พบและ token ที่ควรใช้', w: 'อ่านอย่างเดียว', wk: 'read' },
        { m: 'แก้ไข', d: 'ผูก token / swap เป็น DS component / rename layer ทีละข้อ', w: 'เขียนไฟล์ Figma จริง', wk: 'write' },
        { m: 'เตรียม publish', d: 'pre-publish check → changelog → ร่างประกาศแจ้งทีม', w: 'ไม่ publish แทน Designer', wk: 'safe' }
      ],
      prep: [
        { t: 'ลิงก์ไฟล์ Figma + ขอบเขต', w: 'ไฟล์ขนาดใหญ่อาจ timeout ควรแบ่งตาม page' },
        { t: 'ระบุว่าเป็นไฟล์ Design System หรือไฟล์งาน', w: 'ไฟล์งานต้องตรวจ detach และ layer naming เพิ่ม' },
        { t: 'ผลตรวจรอบก่อน (เฉพาะ mode แก้ไข)', w: 'จำเป็นต้องมีก่อนแก้ไข' },
        { t: 'exempt list ใน golden-set ของ BU', w: 'หากไม่มี ค่า % จะคลาดเคลื่อน' }
      ],
      rules: [
        'ต้องมีผลตรวจก่อนแก้ไข',
        'save version และตรวจชื่อไฟล์ก่อนแก้ไขทุกครั้ง',
        'แก้ที่ main component ไม่แก้ที่ instance',
        'ไม่แก้รายการใน exempt list เช่น สีแบรนด์ภายนอกหรือ artwork',
        'หาก swap แล้วหน้าตาเปลี่ยน ให้หยุดทันที'
      ],
      notdo: 'ไม่สร้าง component ใหม่ · ไม่รวมหรือลบ component ซ้ำ · ไม่ตัดสินรายการ exempt',
      proof: { ok: true, t: 'ใช้งานจริงแล้ว', d: 'OLS หน้า AllContent-Guest (6 ส.ค.): hardcode 56 → 9 จุด · layer ชื่อ default 19 → 0 · ภาพก่อน/หลังไม่เปลี่ยน · B2C App My Course (28 ก.ย.) ตรวจผ่าน master 5 ตัว' }
    },

    'qa-check': {
      icon: 'check', color: 'green', title: 'Design QA', cmd: 'qa-check',
      tag: 'เทียบงานจริงกับ design', sec: 'qa',
      lede: 'เทียบงานที่ Dev พัฒนากับ design หรือย้ายหมุดจาก board Figma ลง Sheet',
      when: 'หลังขึ้น staging หรือ preprod ก่อนปล่อยจริง',
      type: 'พิมพ์ /qa-check ระบบเลือก mode จากข้อมูลที่ได้รับ',
      modes: [
        { m: 'เทียบ design ↔ build', d: 'เก็บหลักฐาน 2 ฝั่ง → ตรวจ diff 7 หมวด + a11y → ออกรายงาน', w: 'แสดงผลใน chat · บันทึกเมื่อได้รับคำสั่ง', wk: 'safe' },
        { m: 'ย้ายหมุดลง Sheet', d: 'อ่านหมุดที่ Designer วางใน board → ลง Sheet + สรุป', w: 'เขียน Google Sheet เมื่อยืนยัน', wk: 'write' },
        { m: 'จัด bug list ที่มีอยู่', d: 'เติม severity + หมวด + รวมรายการซ้ำ + เรียงลำดับ', w: 'แสดงผลใน chat', wk: 'read' }
      ],
      prep: [
        { t: 'Board QA ใน Figma', w: 'duplicate จากแม่แบบและวาง Design Spec · 1 frame = 1 หน้า = 1 platform' },
        { t: 'Sheet + tab ของ platform', w: '1 tab = 1 platform · ระบบแจ้งบัญชีที่ใช้' },
        { t: 'URL หน้าจริง หรือหมุดที่วางไว้', w: 'หากมีหมุดแล้ว ใช้ mode ย้ายหมุด' },
        { t: 'build / environment ที่ทดสอบ', w: 'จำเป็นสำหรับ re-test' }
      ],
      rules: [
        'ค่าเริ่มต้นแสดงผลใน chat การเขียน board/Sheet/Jira ต้องรอยืนยัน',
        'Board Figma เป็นต้นฉบับ แก้ที่ board แล้วสั่งเขียนใหม่ ไม่แก้ใน Sheet',
        'รายงานจำนวนและตำแหน่งของ card ที่อ่านไม่ได้',
        'ไม่ตัดสินเรื่อง content/data เนื่องจาก mockup ใช้ข้อมูลสมมติ'
      ],
      proof: { ok: true, t: 'ใช้งานจริงแล้วทั้ง 2 mode', d: 'ย้ายหมุดลง Sheet: B2C App 120 รายการ ปิด cycle 139 รายการที่ 95.7% (11 ส.ค.) · เทียบ design ↔ build: OLS Preprod ครบรอบ บันทึกผลทั้ง board Figma และ Sheet (18 ส.ค.)' }
    },

    'handoff': {
      icon: 'send', color: 'orange', title: 'ส่งงานให้ Dev', cmd: 'handoff',
      tag: 'ตรวจความพร้อม + ร่างเอกสาร', sec: 'dv',
      lede: 'ตรวจ checklist ความพร้อมของไฟล์ แล้วร่างเอกสารส่งมอบตามมาตรฐานทีม',
      when: 'หลังไฟล์ผ่านการตรวจ ก่อนส่งให้ Dev',
      type: 'พิมพ์ /handoff พร้อมลิงก์ Figma frame + Jira ticket (ถ้ามี)',
      modes: [
        { m: 'ตรวจความพร้อมส่ง', d: 'ตรวจ 3 หมวด: คุณภาพไฟล์ · ความครบถ้วน · ความพร้อมส่ง → Ready / Not Ready', w: 'แสดงผลใน chat', wk: 'read' },
        { m: 'ร่าง handoff doc', dflt: true, d: 'ตรวจความพร้อมก่อน แล้วร่างเอกสารจาก spec + AC · ยังไม่เคยใช้งานจริง', w: 'เขียนลงหน้า Deliver ใน Figma + สำเนา .md', wk: 'write' }
      ],
      prep: [
        { t: 'ลิงก์ Figma frame + ขอบเขต', w: 'หน้าที่จะส่ง' },
        { t: 'platform ที่ต้องส่ง', w: 'ตรวจความครบตาม scope' },
        { t: 'ขนาดจอเล็กสุดที่ support', w: 'ตรวจ edge case' },
        { t: 'Jira ticket / PRD (ถ้ามี)', w: 'ดึง spec และ AC ใส่ในเอกสาร' },
        { t: 'design decision ที่ควรอธิบาย', w: 'ระบุเหตุผลไว้ล่วงหน้า' }
      ],
      rules: [
        'ต้องตรวจความพร้อมก่อนร่างเอกสารทุกครั้ง',
        'ผล Not Ready: แจ้งรายการที่ต้องแก้และหยุด',
        'เขียนได้เฉพาะหน้า Deliver · การแก้ไฟล์ใช้ ds-audit mode แก้',
        'ไม่เปลี่ยน Status เป็น Ready for Dev แทน Designer',
        'ทุก handoff ต้องมี a11y requirement',
        'ทุก issue ต้องระบุ location'
      ],
      proof: { ok: true, t: 'Mode เช็คใช้งานจริงแล้ว', d: 'ตรวจความพร้อม + บันทึกผลที่หน้า Deliver กับ B2C App My Course (28 ก.ย.) ผ่าน /deliver-kit · mode ร่าง handoff doc ยังไม่เคยใช้งาน' }
    }
  }
};
