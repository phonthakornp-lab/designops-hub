<script>
var CF = 'https://skilllane.atlassian.net/wiki/spaces/';

var DATA = {
  updated: '16 ส.ค. 2026',
  roadmap: 'https://claude.ai/code/artifact/8cf346ea-80fb-4ade-a91d-2a459c66e097',
  dests: ['Confluence', 'DesignOps Brain'],

  cats: [
    {
      id: 'fl', key: 'fl', color: 'purple', name: 'Font License', skill: null,
      steps: [
        { t: 'เช็คก่อนใช้', n: 'ฟอนต์นี้ license ครอบคลุมงานคุณไหม' },
        { t: 'รายงานการใช้', n: 'กรอก Used In ใน record ของฟอนต์นั้น' },
        { t: 'ขึ้นทะเบียนใหม่', n: 'ก๊อปแม่แบบไปกรอกถ้ามีฟอนต์ตัวใหม่' }
      ],
      desc: 'ทะเบียนลิขสิทธิ์ฟอนต์ที่บริษัทซื้อไว้ + วิธีรายงานว่าโปรเจกต์คุณใช้ฟอนต์อะไร',
      status: 'ok', statusText: 'พร้อมใช้', count: 8, open: true
    },
    {
      id: 'qa', key: 'qa', color: 'green', name: 'Design QA', skill: 'qa-check',
      steps: [
        { t: 'Playbook', n: 'เขียนเสร็จแล้ว เปิดอ่านได้', ok: true },
        { t: 'master บอร์ด + Sheet', n: 'ยังไม่ได้ประกอบการ์ด' },
        { t: '9 หมวด issue', n: 'ยังไม่ได้ประกอบการ์ด' }
      ],
      desc: 'ตรวจว่าของที่ Dev ทำออกมา ตรงกับที่ออกแบบไว้ไหม แล้วบันทึกจุดที่ไม่ตรง',
      status: 'wip', statusText: 'กำลังประกอบ', count: 6, open: false,
      why: 'Playbook เขียนเสร็จแล้วและเปิดอ่านได้ · เหลือประกอบการ์ดที่ชี้ไป master board กับ Sheet ให้ครบ',
      todo: ['ประกอบการ์ด master บอร์ด Figma + master Sheet + 9 หมวด issue']
    },
    {
      id: 'ds', key: 'ds', color: 'blue', name: 'Design System', skill: 'ds-audit',
      steps: [
        { t: 'ย้ายเอกสาร 6 ใบ', n: 'จาก space ส่วนตัว → UXUI Team' },
        { t: 'ประกอบการ์ด', n: 'Structure · token · golden set · Mica' },
        { t: 'เปิดหมวด', n: 'รอ 2 ขั้นบนเสร็จก่อน' }
      ],
      desc: 'โครงสร้าง token · naming · golden set ต่อ product · การ audit และ publish',
      status: 'wait', statusText: 'รอย้ายเอกสาร', count: 7, open: false,
      why: 'เอกสาร 6 ใบยังอยู่ใน Confluence space ส่วนตัว — ถ้าลิงก์ไปตอนนี้เพื่อนกดแล้วอาจเจอ 404',
      todo: ['ย้าย 6 ใบเข้า space UXUI Team (Poom ทำเอง)', 'แล้วค่อยประกอบการ์ด']
    },
    {
      id: 'dv', key: 'dv', color: 'orange', name: 'ส่งงานให้ Dev', skill: 'handoff',
      steps: [
        { t: 'ทำไฟล์ให้สะอาด', n: 'พิสูจน์แล้วกับ OLS · hardcode 56→9', ok: true },
        { t: 'เช็คว่าพร้อมส่งไหม', n: 'ยังไม่เคยรัน' },
        { t: 'ร่างเอกสาร + Ready for Dev', n: 'ยังไม่เคยรันจบ' }
      ],
      desc: 'ทำไฟล์ให้สะอาด → เช็คว่าพร้อมส่งไหม → ร่างเอกสารและพลิกเป็น Ready for Dev',
      status: 'wait', statusText: 'พักไว้ก่อน', count: 6, open: false,
      why: 'เคยทำจริงแค่ท่อนแรก (ตรวจและแก้ไฟล์) · อีก 2 ท่อนยังไม่เคยวิ่งจบ — เขียนตอนนี้จะได้ playbook ที่ 2 ใน 3 ท่อนยังไม่ยืนยัน',
      todo: ['รัน handoff ให้จบ 1 รอบกับงานจริง', 'กรอก Deliver Kit ให้ครบจนพลิกเป็น Ready for Dev', 'แล้วค่อยถอดออกมาเป็น playbook']
    }
  ],

  fl: {
    lede: 'บริษัทซื้อ font license มาแบบจำกัด — แต่ละใบระบุชัดว่าใช้กับ domain หรือ project ไหนได้บ้าง ใช้ผิดใบคือความเสี่ยงทางกฎหมายของบริษัท',
    start: [
      { q: 'จะใช้ฟอนต์ในโปรเจกต์ใหม่', a: 'เปิดทะเบียนดูก่อนว่าฟอนต์นั้นมี license ครอบคลุมงานของคุณไหม', to: CF + 'UT/database/3536453653', label: 'เปิดทะเบียน' },
      { q: 'ใช้อยู่แล้วแต่ยังไม่ได้รายงาน', a: 'กรอกช่อง Used In ใน record ของฟอนต์นั้น — ทีม ชื่อโปรเจกต์ ประเภทงาน เจ้าของ', to: CF + 'UT/pages/3539763224/Font+Usage', label: 'อ่านคู่มือ 4 ขั้น' },
      { q: 'จะเพิ่มฟอนต์ใหม่เข้าทะเบียน', a: 'ก๊อปแม่แบบไปกรอก อย่าสร้างหน้าเปล่าเอง โครงจะไม่ตรงกับใบอื่น', to: CF + 'UT/pages/3538059266/Master+Template+License+Record', label: 'เปิดแม่แบบ' }
    ],
    legend: [
      { s: '🟢 Active', x: 'License มีผลอยู่ ครอบคลุม domain ที่ใช้งานครบ' },
      { s: '🟡 Pending Review', x: 'รอตรวจรายละเอียด license ให้ครบ' },
      { s: '🔴 Non-Compliant', x: 'ใช้เกินขอบเขต license — ต้องแก้ทันที' },
      { s: '⚫ Expired', x: 'หมดอายุ — ต้องต่อหรือเปลี่ยนฟอนต์' }
    ],
    groups: [
      {
        hd: 'เริ่มที่นี่',
        items: [
          { t: 'Font License Inventory', w: 'ทะเบียนกลาง — ดูว่าบริษัทมีฟอนต์อะไร สถานะไหน และใครใช้อยู่บ้าง', src: 'Confluence · UXUI Team', up: '13 ก.ค. 2026', to: CF + 'UT/database/3536453653' },
          { t: 'คู่มือ: วิธีรายงาน Font Usage', w: 'สำหรับทุกคนในทีม — ทำไมต้องรายงาน และกรอกยังไง 4 ขั้น', src: 'Confluence · UXUI Team', up: '30 เม.ย. 2026', to: CF + 'UT/pages/3539763224/Font+Usage' },
          { t: '[Master Template] License Record', w: 'แม่แบบสำหรับขึ้นทะเบียนฟอนต์ใหม่ — 1 ใบ = 1 license', src: 'Confluence · UXUI Team', up: '30 เม.ย. 2026', to: CF + 'UT/pages/3538059266/Master+Template+License+Record' }
        ]
      },
      {
        hd: 'ทะเบียนรายฟอนต์',
        items: [
          { t: 'DB Heavent', w: '14 styles · Desktop Font · DB Designs', st: '🟡 Pending Review', src: 'Confluence · UXUI Team', up: '29 พ.ค. 2026', to: CF + 'UT/pages/3538288641/DB+Heavent+-+License+Record' },
          { t: 'Font Awesome', w: 'Pro (Legacy) · 60,902 icons · Fonticons', st: '🟢 Active', src: 'Confluence · UXUI Team', up: '5 พ.ค. 2026', to: CF + 'UT/pages/3538059282/Font+Awesome+-+License+Record' },
          { t: 'ThaiSans Neue', w: '18 styles · Commercial License · Letsego', st: '🟡 Pending Review', src: 'Confluence · UXUI Team', up: '30 เม.ย. 2026', to: CF + 'UT/pages/3541565441/ThaiSans+Neue+-+License+Record' },
          { t: 'TF Lanna', w: '4 styles · FTPI (สหพันธ์อุตสาหกรรมการพิมพ์ไทย)', st: '🟡 Pending Review', src: 'Confluence · UXUI Team', up: '30 เม.ย. 2026', to: CF + 'UT/pages/3538288653/TF+Lanna+-+License+Record' }
        ]
      },
      {
        hd: 'เบื้องหลัง — อ่านตอนอยากรู้ที่มา',
        items: [
          { t: 'Solutions Plan — Font License', w: 'ที่มาของงานทั้งหมด: ตรวจสถานะ DB Heavent กันความเสี่ยงฟ้องร้อง + วางมาตรฐานฟอนต์ LMS + ประเมินความคุ้มค่า', src: 'Confluence · UXUI Team', up: '7 พ.ค. 2026', to: CF + 'UT/pages/3536486409/Solutions+Plan+-+Font+License' },
          { t: 'Typography (LMS)', w: 'Heading H1–H5 · Body · text variants ที่ผูกกับ DB Heavent', src: 'DesignOps Brain', up: '7 พ.ค. 2026', to: null }
        ]
      }
    ],
    note: 'คู่มือรายงาน (30 เม.ย.) ยังลิสต์ฟอนต์ไว้ 3 ตัว แต่ทะเบียนมี 4 แล้ว — <b>ThaiSans Neue ยังไม่ถูกเพิ่มในคู่มือ</b> ใครอ่านคู่มืออย่างเดียวจะไม่รู้ว่ามีตัวนี้'
  }
};
