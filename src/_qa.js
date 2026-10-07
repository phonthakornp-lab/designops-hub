/* ---------- เนื้อหาหมวด Design QA (อยู่ในเว็บ ไม่ลิงก์ออก) ---------- */
DATA.sec.qa.docsHd = 'สิ่งที่ควรทราบ';
DATA.sec.qa.docsLede = 'สำหรับผู้เริ่มต้น ควรอ่านเรียงจากซ้ายไปขวา';
DATA.sec.qa.topics = [
  { id: 'how',  icon: 'book',  color: 'green',  t: 'วิธีการใช้งาน', d: 'มี 2 แบบ เลือกได้จากคำถามเดียว', up: 'playbook เต็ม' },
  { id: 'b2c',  icon: 'chart', color: 'orange', t: 'ตัวอย่างจริง: B2C App', d: 'ผลการตรวจและแนวทางแก้ไข', up: '139 รายการ · ปิด 95.7%' },
  { id: 'tpl',  icon: 'frame', color: 'blue',   t: 'Template', d: 'Board Figma + Sheet', up: '2 แม่แบบ' },
  { id: 'iss',  icon: 'tag',   color: 'purple', t: 'ประเภท issue', d: '', up: '9 หมวด · severity 3 · status 4' },
];
DATA.sec.qa.tools = ['qa-check'];

DATA.topic.how = {
  parent: 'qa', color: 'green', icon: 'book',
  title: 'วิธีการใช้งาน', tag: 'Design QA · 2 แบบ',
  lede: 'ตรวจว่างานที่ Dev พัฒนาตรงกับ design หรือไม่ ก่อนขึ้น production',
  blocks: [
    { k: 'kv', items: [
      { l: 'ใช้เมื่อใด', v: 'หลังขึ้น staging หรือ preprod <b>ก่อนขึ้น production</b>' },
      { l: 'วัตถุประสงค์', v: 'ให้ Dev แก้ได้ตรงจุด และพบ<b>ปัญหาซ้ำที่ต้องแก้ที่ Design System</b>' }
    ]},

    { k: 'h', t: 'การเลือกแบบ', d: 'พิมพ์ <code>/qa-check</code> ระบบจะเลือกแบบจากข้อมูลที่ส่งมาและขอยืนยันก่อนเสมอ' },
    { k: 'flow', svg: FLOW_QA, cap: 'เส้นฟ้า = แบบ 1 · เส้นส้ม = แบบ 2 (Designer ตรวจทานก่อนบันทึกทั้งสองแบบ)' },
    { k: 'table',
      head: ['', 'แบบ 1 — เทียบ design ↔ build', 'แบบ 2 — ย้ายหมุดลง Sheet'],
      hcls: ['', 'h-a', 'h-b'],
      rows: [
        ['ใช้เมื่อ', 'หน้าที่เปิดด้วย URL ได้ เช่น LMS, OLS, NCBS, NDLP และเว็บทั้งหมด', 'หน้าที่ต้องใช้งานจริงจึงพบ เช่น แอป B2C, flow ที่มี login หลายชั้น'],
        ['ผู้ค้นหา issue', 'AI<small>Designer ตรวจทานผล</small>', 'Designer<small>AI ไม่ตัดสินแทน</small>'],
        ['สิ่งที่ต้องส่ง', 'URL ของหน้า + board ที่วาง Design Spec แล้ว', 'Board ที่วางหมุดครบแล้ว'],
        ['เวลาที่ Designer ใช้', 'ตรวจทานผลเท่านั้น<small>ไม่ต้องตรวจเอง</small>', 'ตรวจเองทั้งรอบ<small>AI กรอก Sheet ให้</small>'],
        ['ตรวจ Functionality ได้หรือไม่', 'ไม่ได้ และห้ามบันทึกลง Sheet<small>ภาพนิ่งไม่แสดงผลการทำงาน</small>', 'ได้ และต้องบันทึกให้ครบ<small>27% ของ issue จริง</small>'],
        ['ความแม่นยำของค่า', 'วัดค่าจริงจากหน้าเว็บ<small>spacing/size แทบไม่คลาดเคลื่อน</small>', 'สายตา + เทียบ token ใน Figma'],
        ['ตรวจ a11y', 'ได้ (contrast, touch target, heading, alt text)', 'เฉพาะที่ผู้ตรวจสังเกตพบ'],
        ['ผลลัพธ์', 'Board Figma + Sheet', 'Sheet + สรุปใน chat'],
        ['สถานะปัจจุบัน', '✅ <b>ใช้งานครบรอบแล้ว</b> กับ OLS Preprod (18 ส.ค.)', '✅ ใช้งานจริงครบรอบแล้ว กับ B2C 120 issue']
      ]},

    { k: 'stat', items: [
      { l: 'issue ที่ AI ตรวจไม่พบ', b: '27%', s: '32 จาก 120 ข้อ อยู่ในหมวด Functionality' },
      { l: 'สาเหตุ', b: 'ภาพนิ่ง', s: 'ไม่แสดงผลการกด จังหวะการแสดงผล หรือการตอบสนองของปุ่ม' },
      { l: 'ข้อสรุป', b: '¼', s: 'AI เพียงอย่างเดียวจะไม่ครอบคลุมส่วนนี้' }
    ]},
    { k: 'warn', t: '<b>แต่ละแบบยังไม่ครอบคลุมทั้งหมด</b> แบบ 1 ละเอียดด้าน visual แต่ไม่ตรวจ functionality แบบ 2 ครอบคลุมกว่าแต่ขึ้นกับผู้ตรวจ <b>หน้าสำคัญควรใช้แบบ 1 แล้วทดสอบใช้งานจริงซ้ำ</b>' },

    { k: 'h', t: 'วิดีโอตัวอย่าง', d: 'การใช้งานจริงของแบบ 1 กับหน้าสร้างวีดีโอ (OLS) ตั้งแต่เตรียม board จนได้ผลใน board และ Sheet' },
    { k: 'video', src: 'assets/qa-check-mode1.mp4', poster: 'assets/qa-check-mode1-poster.jpg', cap: 'ความยาว 1:32 นาที · ไม่มีเสียง · ช่วงที่ AI ทำงานย่อเวลาให้สั้นลง (เวลาจริงรวมประมาณ 17 นาที)' },
    { k: 'h', t: 'แบบ 1 · เทียบ design ↔ build', d: 'ระบบหยุดให้ Designer ตรวจทานก่อนบันทึกทุกครั้ง' },
    { k: 'steps', items: [
      { t: 'เตรียม board + Sheet และส่ง URL', d: '<b>เตรียมปลายทางก่อน</b> duplicate board และ copy Sheet จาก master <b>วาง frame design จริงใน column Design Spec</b> แล้วส่ง URL ของหน้าจริง', who: 'Designer' },
      { t: 'AI capture และเปรียบเทียบ', d: 'Capture เต็มหน้า ดึง spec และชื่อ token จาก Figma แล้วเทียบทีละจุด', who: 'AI' },
      { t: 'Designer ตรวจทานก่อนบันทึก', d: 'AI แสดงตารางใน chat ก่อน ข้อที่เป็น design decision แจ้งตัดออกได้', who: 'Designer' },
      { t: 'AI บันทึกผล 2 ที่', d: 'วางกรอบและ card ใน board และเขียนลง Sheet โดยเลขตรงกัน', who: 'AI' }
    ]},

    { k: 'h', t: 'แบบ 2 · ย้ายหมุดลง Sheet', d: 'ตรวจตามวิธีเดิม โดยให้ AI กรอก Sheet แทน' },
    { k: 'steps', items: [
      { t: 'ตรวจและวางหมุด', d: 'ใช้งานจริง วางกรอบและเขียน card ในจุดที่พบปัญหา <b>เตรียม Sheet สำหรับขั้นที่ 4</b>', who: 'Designer' },
      { t: 'AI อ่าน board ทีละหน้า', d: 'เก็บเลขหมุด ข้อความ severity และระบุหมวดให้', who: 'AI' },
      { t: 'Designer ตรวจทานทีละ 1–2 หน้า', d: 'ตรวจว่าอ่านครบและหมวดถูกต้องก่อนบันทึก', who: 'Designer' },
      { t: 'AI เขียน Sheet + สรุป', d: 'ได้ตารางสำหรับ Dev และสรุปหน้าที่มีปัญหามากที่สุดกับ pattern ที่ซ้ำ', who: 'AI' }
    ]},

    { k: 'h', t: 'ตัวอย่าง board', d: 'จาก board B2C App ที่ตรวจเสร็จแล้ว' },

    { k: 'p', t: '<b>1 · duplicate จาก master แล้ววาง Design Spec</b> Designer วาง frame design จริงใน column Design Spec เอง ระบบไม่วางให้ ส่วน column Production ระบบวางภาพ build ให้ในขั้นลงผล' },
    { k: 'img', src: 'IMG_BOARD_SRC', alt: 'Board Design QA เปล่า: แถบซ้าย Design Review, column Design Spec, Production และ card ตัวอย่าง 3 ระดับ',
      cap: 'แถบซ้าย = ข้อมูลรอบตรวจ, <b>Design Spec</b> = งานออกแบบ, <b>Production</b> = ภาพจริง, ขวาสุด = รายการ issue' },
    { k: 'warn', t: '<b>ห้ามเปลี่ยนชื่อ column</b> ใช้ <code>Production</code> เสมอแม้ตรวจบน preprod หรือ staging และระบุ environment ที่แถบซ้าย มิฉะนั้น AI จะหา column ไม่พบ' },

    { k: 'p', t: '<b>2 · วางกรอบในจุดที่มีปัญหา</b> ใช้ <code>zone</code> ครอบพื้นที่และเลือก variant ตาม severity <b>สีกรอบและหมุดเปลี่ยนตาม variant</b>' },
    { k: 'pair', a: { src: 'IMG_ZONE_SRC', alt: 'Column Production มีกรอบเส้นประ 2 จุด พร้อมหมุดเลข 1 และ 2', cap: 'กรอบเส้นประและหมุดเลข วางซ้อนกันได้' },
              b: { src: 'IMG_CARD_SRC', alt: 'Card Comment 3 ใบในรายการ issue', cap: 'หัวข้อ 1 บรรทัด ตามด้วย bullet สิ่งที่พบและค่าที่ควรเป็น' } },

    { k: 'p', t: '<b>3 · เขียน card ให้ Dev แก้ได้ทันที</b> ระบุ <b>ตำแหน่ง ค่าที่พบ และค่าที่ควรเป็น</b> พร้อมชื่อ token ถ้ามี ไม่ใช้คำที่ไม่ระบุค่า เช่น “น่าจะปรับ”' },
    { k: 'img', src: 'IMG_SKIP_SRC', narrow: true, alt: 'Card issue เลข 9 ตามด้วยเลข 35 และ 36 แสดงว่าเลขข้ามได้',
      cap: '<b>เลข 9 → 35 → 36</b> ข้ามได้จากการลบหรือเพิ่ม issue <b>ห้ามเรียงใหม่</b> เพราะต้องตรงกับ Sheet' },

    { k: 'p', t: '<b>4 · ผลลัพธ์</b> board แสดง design ภาพจริง จุดที่ผิด และรายการ issue ในภาพเดียว และ Sheet มีเลขตรงกันทุกแถว' },
    { k: 'img', src: 'IMG_DONE_SRC', alt: 'Board QA ที่เสร็จแล้วของ B2C App หน้า Home เทียบ Design Spec กับภาพจริง',
      cap: 'B2C App หน้า Home (iOS) <b>Column ขวายังชื่อ <code>Preprod</code></b> เพราะเป็นไฟล์เก่า ไฟล์ใหม่ใช้ <code>Production</code>' },

    { k: 'h', t: '3 กติกาสำหรับให้ AI อ่าน board ได้', d: 'ใช้กับแบบ 2 หากผิดกติกา issue นั้นจะตกหล่นโดยไม่มีการแจ้งเตือน' },
    { k: 'table', head: ['กติกา', 'เหตุผล'], rows: [
      ['ใช้ component จาก master', 'ใช้ <code>zone</code> และ <code>Comment</code> เพื่อให้ AI อ่านได้ทันที <b>หาก detach</b> ระบบจะอ่านเท่าที่ทำได้และสอบถามกลับ'],
      ['เลือก severity จาก variant', 'เลือก Critical / Major / Minor <b>ระบบอ่านจาก variant ไม่ใช่สีที่ทาเอง</b>'],
      ['เลขต้องตรงกัน 3 ที่', 'กรอบ card และช่อง Issue No. ใช้เลขเดียวกัน <b>เลขข้ามได้</b>']
    ]},
    { k: 'warn', t: '<b>Board Figma เป็นต้นฉบับ ไม่ใช่ Sheet</b> รอบ B2C เคยแก้ Sheet ด้วยมือจน Sheet มี 41 ข้อแต่ board มี 36 <b>ให้แก้ที่ board แล้วสั่งบันทึกใหม่</b>' },

    { k: 'h', t: 'คำถามที่พบบ่อย' },
    { k: 'faq', items: [
      { q: 'ต้องระบุ mode หรือไม่', a: 'ไม่ต้อง พิมพ์ <code>/qa-check</code> ระบบจะเลือกแบบและ<b>ขอยืนยันก่อน</b>บันทึกลง board หรือ Sheet' },
      { q: 'วางหมุดแล้วแต่สั่งแบบ 1 จะถูกเขียนทับหรือไม่', a: 'ไม่ board ที่มีหมุดแล้วจะถือเป็นแบบ 2 เสมอ แม้ส่ง URL มาด้วย' },
      { q: 'การแนบรูปหรือวิดีโอใน card ต้อง detach หรือไม่', a: 'ไม่ต้อง เปิด toggle <b>“แนบหลักฐาน”</b> ใน panel ขวา แล้ววางไฟล์ในช่องเส้นประ ระบบยังอ่าน card ได้ตามปกติ <b>หลายรูปให้แยก card</b> เพราะ 1 card = 1 issue = 1 แถวใน Sheet' },
      { q: 'AI บันทึกลง Sheet ทันทีหรือไม่', a: 'ไม่ ระบบแสดงตารางใน chat และรอยืนยันทุกครั้ง และไม่แก้ column Dev. Note หรือแถวที่ Dev รับไปแล้ว' },
      { q: 'issue ด้าน content หรือตัวเลขผิด บันทึกได้หรือไม่', a: 'ได้ หาก Designer เป็นผู้พบ AI ไม่ตัดสินเรื่องนี้เพราะ mockup ใช้ข้อมูลสมมติ' },
      { q: 'หากพบว่าเป็น bug ของ Design System', a: 'บันทึกใน Sheet และแจ้ง DesignOps <b>การแก้ที่ DS ได้ผลกว่าแก้รายหน้า</b> เพราะ Critical เกือบครึ่งของ B2C มาจาก component ต้นทาง' }
    ]}
  ]
};

DATA.topic.b2c = {
  parent: 'qa', color: 'orange', icon: 'chart',
  title: 'ตัวอย่างจริง: B2C App', tag: 'รอบที่เสร็จสมบูรณ์',
  lede: 'รอบ Design QA ที่ปิด cycle ครบ ใช้อ้างอิงขั้นตอน ผลที่พบ และสิ่งที่ควรแก้ที่ต้นทาง',
  blocks: [
    { k: 'stat', items: [
      { l: 'ปิด cycle', b: '95.7%', s: '133 จาก 139 รายการ' },
      { l: 'รอบแรกที่ตรวจ', b: '120', s: 'iOS 36 · Android 36 · Tablet 48' },
      { l: 'ระดับ Critical', b: '47%', s: '56 รายการ' },
      { l: 'platform', b: '3', s: 'iOS · Android · Tablet' }
    ]},
    { k: 'p', t: 'ตรวจบน <b>Preprod</b> (ไม่ใช่ Staging) ตั้งแต่ build <code>5.0.0_50016</code> รวม 4 รอบ (ตรวจ → retest → retest → ปิด) ระหว่าง พ.ค. ถึง ส.ค. 2026' },

    { k: 'h', t: 'ผลการตรวจ', d: 'จาก CSV รอบแรก 120 รายการ' },
    { k: 'table', head: ['หมวด', 'จำนวน', '%', 'AI ตรวจพบได้หรือไม่'], rows: [
      ['Sizing', '33', '27.5%', '✅'],
      ['<b>Functionality</b>', '<b>32</b>', '<b>26.7%</b>', '❌ <b>ต้องให้คนทดสอบ</b>'],
      ['Spacing &amp; Layout', '26', '21.7%', '✅'],
      ['Component &amp; DS', '14', '11.7%', '✅'],
      ['Color', '9', '7.5%', '✅'],
      ['Typography', '6', '5.0%', '✅']
    ]},
    { k: 'warn', t: '<b>Functionality ใกล้เคียงอันดับ 1</b> และ AI ตรวจไม่ได้ จึงต้องมี Design QA 2 แบบ' },

    { k: 'h', t: 'บทเรียน' },
    { k: 'list', items: [
      '<b>เริ่มจาก Sizing</b> หมวดที่พบบ่อยที่สุด',
      '<b>Home Page มีปัญหามากที่สุด</b> 37 จาก 120 รายการ (31%) จาก component หลักจำนวนมากและ layout ซับซ้อน',
      '<b>Tablet ควรแยก session</b> 48 รายการ มากกว่า iOS/Android เพราะไม่ได้ออกแบบ responsive ไว้',
      '<b>Critical เกือบครึ่งมาจากต้นทาง</b> คือ component ใน DS ควรแก้ที่ DS ก่อน Dev นำไปใช้',
      '<b>ต้องมี annotation ครบ</b> หากขั้น handoff ไม่มีจะตรวจไม่ได้'
    ]},

    { k: 'h', t: 'ปัญหาที่พบระหว่างดำเนินการ', d: 'เพื่อป้องกันการเกิดซ้ำในรอบถัดไป' },
    { k: 'table', head: ['อาการ', 'ทางแก้'], rows: [
      ['Sheet มี 41 ข้อ แต่ board มี 36 เพราะแก้ Sheet ด้วยมือ', '<b>Board เป็นต้นฉบับ</b> เขียนใหม่ทั้ง tab จาก board'],
      ['เลขหมุดข้าม เช่น 9 → 35 → 36', '<b>ปกติ</b> เกิดจากการลบหรือเพิ่ม issue ห้ามเรียงใหม่'],
      ['มีกรอบแต่ไม่มี card', 'Dev ไม่ทราบว่าต้องแก้อะไร ทุกกรอบต้องมี card'],
      ['ตัวนับ severity ในแถบซ้ายเป็น 00 ทุกหน้า', 'กรอกให้ครบเมื่อปิดรอบ'],
      ['ทุก frame ชื่อ <code>QA - Template</code>', 'อ่านชื่อหน้าจากแถบซ้ายแทนชื่อ frame']
    ]},
    { k: 'link', items: [
      { icon: 'chart', color: 'orange', t: 'Jira — UXUI-1521', d: 'รอบปิด cycle พร้อมผล retest ครั้งสุดท้าย', to: 'https://skilllane.atlassian.net/browse/UXUI-1521', up: 'ปิดแล้ว' }
    ]}
  ]
};

DATA.topic.tpl = {
  parent: 'qa', color: 'blue', icon: 'frame',
  title: 'Template', tag: 'Board Figma + Sheet รายงาน',
  lede: 'ใช้ 2 แม่แบบนี้ทุกครั้ง เพราะโครงและชื่อ layer ต้องตรงกัน AI จึงอ่านและบันทึกกลับได้',
  blocks: [
    { k: 'link', items: [
      { icon: 'frame', color: 'blue', t: 'Master · board Figma', d: 'duplicate frame Master - QA Template ไปใช้ มี component ครบ 4 ตัว', to: 'https://www.figma.com/design/JB7nZD4KBOXX8q5QW3mucJ/-Master--Design-QA-Template?node-id=2-40', up: 'Figma' },
      { icon: 'table', color: 'amber', t: 'Master · Sheet รายงาน', d: '<b>Make a copy</b> แล้วแชร์ Editor ให้บัญชีที่ระบบแจ้ง มี tab Onboarding สำหรับ Dev แล้ว', to: 'https://docs.google.com/spreadsheets/d/1Mj9MWa0rAjgmgeUjfh7E78C5T_h8MYWNzWVFw-H7zsk/edit', up: 'Google Sheet' }
    ]},

    { k: 'h', t: 'Board Figma: โครง 4 ส่วน', d: '1 frame = 1 หน้า = 1 platform ความสูงตามความยาวหน้าจริง' },
    { k: 'img', src: 'IMG_BOARD_SRC', alt: 'Board Design QA เปล่าจาก master ประกอบด้วยแถบซ้าย, Design Spec, Production และรายการ issue',
      cap: 'Board ที่ duplicate มาใหม่' },
    { k: 'table', head: ['ส่วน', 'เนื้อหา'], rows: [
      ['แถบซ้าย', 'product · ชื่อหน้า · environment · platform · ขนาดจอ · ตัวนับ severity'],
      ['<code>Design Spec</code>', 'Frame งานออกแบบจาก Figma · <b>Designer วางเองก่อนเริ่ม</b>'],
      ['<code>Production</code>', 'ภาพจริงที่ capture มา + กรอบ <code>zone</code> ในจุดที่ผิด'],
      ['<code>Issue List</code>', 'Card <code>Comment</code> เรียงต่อกัน 1 ใบ = 1 issue']
    ]},
    { k: 'table', head: ['Component', 'variant', 'การใช้งาน'], rows: [
      ['<code>zone</code>', 'Critical / Major / Minor', 'กรอบครอบพื้นที่ที่มีปัญหา <b>สีเปลี่ยนตาม variant</b>'],
      ['<code>Comment</code>', 'Critical / Major / Minor', 'Card อธิบาย issue'],
      ['<code>indicator</code>', 'Critical / Major / Minor', 'หมุดเลข'],
      ['<code>titleNotes</code>', '—', 'แถบซ้าย + ตัวนับ severity']
    ]},
    { k: 'warn', t: '<b>Column ขวาใช้ชื่อ <code>Production</code> เสมอ</b> และระบุ environment ที่แถบซ้าย หากเปลี่ยนชื่อ AI จะหา column ไม่พบ' },

    { k: 'h', t: 'Sheet รายงาน: ตัวอย่างจริง', d: 'จากแม่แบบจริง 1 tab = 1 platform' },
    { k: 'sheet',
      cols: [{ c: 'A', f: 1.1 }, { c: 'B', f: .9 }, { c: 'C', f: .9 }, { c: 'D', f: 2.4 }, { c: 'E', f: 1.1 }, { c: 'F', f: 1 }, { c: 'G', f: .9 }, { c: 'H', f: .8 }, { c: 'I', f: .9 }],
      rows: [
        { n: 1,  z: 'title', cells: [{ t: 'Design QA' }, {}, {}, {}, {}, {}, {}, {}, {}] },
        { n: 2,  z: 'meta',  cells: [{ t: 'Product/Project :' }, { t: 'B2C Application' }, {}, {}, {}, {}, {}, {}, {}] },
        { n: 3,  z: 'meta',  cells: [{ t: 'Owner :' }, { t: 'ชื่อผู้ตรวจ' }, {}, {}, {}, {}, {}, {}, {}] },
        { n: 4,  z: 'meta',  cells: [{ t: 'Date :' }, { t: '22 Jul 2026' }, {}, {}, {}, {}, {}, {}, {}] },
        { n: 5,  z: 'meta',  cells: [{ t: 'Environment :' }, { t: 'preprod' }, {}, {}, {}, {}, {}, {}, {}] },
        { n: 6,  z: 'meta hot', cells: [{ t: 'Version:' }, { t: '5.0.0_50016' }, {}, {}, {}, {}, {}, {}, {}] },
        { n: 7,  z: 'meta',  cells: [{ t: 'Platform :' }, { t: 'iOS' }, {}, {}, {}, {}, {}, {}, {}] },
        { n: 8,  z: 'meta',  cells: [{ t: 'Device Size :' }, { t: '1179 × 2556 px' }, {}, {}, {}, {}, {}, {}, {}] },
        { n: 10, z: 'sev',   cells: [{ t: 'Severity Status' }, {}, {}, {}, {}, {}, {}, {}, {}] },
        { n: 11, z: 'sev',   cells: [{ t: '🔴 Critical' }, { t: 'กระทบฟังก์ชันหลัก' }, {}, {}, {}, {}, {}, {}, {}] },
        { n: 12, z: 'sev',   cells: [{ t: '🟠 Major' }, { t: 'กระทบ UX' }, {}, {}, {}, {}, {}, {}, {}] },
        { n: 13, z: 'sev',   cells: [{ t: '🟡 Minor' }, { t: 'cosmetic' }, {}, {}, {}, {}, {}, {}, {}] },
        { n: 16, z: 'hdr',   cells: [{ t: 'Issue No.' }, { t: 'Severity' }, { t: 'Page' }, { t: 'Description' }, { t: 'Issue Types' }, { t: 'Figma Link' }, { t: 'Status' }, { t: 'Note' }, { t: 'Dev. Note' }] },
        { n: 17, cells: [{ t: '1' }, { t: 'Critical' }, { t: 'Home' }, { t: 'Thumbnail radius ไม่ตรง spec…' }, { t: 'Sizing' }, { t: 'figma.com/…' }, { t: 'Open' }, {}, { t: '← dev' }] },
        { n: 18, cells: [{ t: '2' }, { t: 'Major' }, { t: 'Home' }, { t: 'ระยะห่างระหว่าง card มากเกินไป…' }, { t: 'Spacing & Layout' }, { t: 'figma.com/…' }, { t: 'Open' }, {}, {}] }
      ],
      cap: '<b>แถว 2–8 คือหัวรายงาน</b> ต้องกรอกครบ <b>หัวตารางอยู่แถว 16 เสมอ</b> เว้นแถว 9 และ 14–15' },
    { k: 'h', t: '9 column และข้อมูลที่ต้องกรอก' },
    { k: 'table', head: ['Column', 'ข้อมูล', 'AI กรอกได้หรือไม่'], rows: [
      ['A · Issue No.', 'เลขลำดับ <b>ต้องตรงกับหมุดใน board</b>', '✅'],
      ['B · Severity', 'Critical / Major / Minor', '✅'],
      ['C · Page', 'ชื่อหน้า', '✅'],
      ['D · Description', 'สรุป 1 บรรทัด ตามด้วย bullet <b>ตำแหน่ง · ค่าที่พบ · ค่าที่ควรเป็น</b>', '✅'],
      ['E · Issue Types', '9 หมวดมาตรฐาน', '✅'],
      ['F · Figma Link', 'ลิงก์ node ของหมุดนั้น', '✅'],
      ['G · Status', 'issue ใหม่เป็น <code>Open</code> เสมอ', '✅'],
      ['H · Note', 'บันทึกฝั่ง Design', '🟡'],
      ['I · Dev. Note', 'คำตอบจาก Dev', '❌ <b>AI ห้ามแก้ไข</b>']
    ]},
    { k: 'p', t: '<b>หัวรายงานต้องกรอกครบ</b> โดยเฉพาะ<b>เลข build</b> หากไม่ระบุจะ re-test เทียบไม่ได้ว่าแก้แล้วจริง' },
    { k: 'note', t: '<b>ไม่มี gcloud ก็ใช้ได้</b> โดย copy ตารางจาก chat ไปวางเอง หากให้ AI บันทึกเองต้องแชร์ Editor ให้บัญชีที่ระบบแจ้ง' }
  ]
};

DATA.topic.iss = {
  parent: 'qa', color: 'purple', icon: 'tag',
  title: 'ประเภท issue', tag: 'enum มาตรฐาน · ต้องสะกดตรงกัน',
  lede: 'ใช้ค่าชุดนี้ใน Sheet board และรายงาน หากสะกดต่างกันจะนับ pattern ข้ามรายงานไม่ได้ เช่น สถิติ “Sizing 27%”',
  blocks: [
    { k: 'h', t: 'Severity: 3 ค่า ห้ามเพิ่ม', d: 'ผูกกับสี variant ใน Figma และ workflow ของ Dev' },
    { k: 'table', head: ['ค่า', 'นิยาม', 'ตัวอย่าง'], rows: [
      ['🔴 <code>Critical</code>', 'กระทบฟังก์ชันการทำงานหลัก', 'หน้าจอขาว · component สำคัญหายไป'],
      ['🟠 <code>Major</code>', 'กระทบประสบการณ์ใช้งาน ใช้งานได้แต่ไม่เป็นมืออาชีพ', 'สีปุ่มผิด · ตำแหน่งไม่ตรง spec'],
      ['🟡 <code>Minor</code>', 'cosmetic ไม่กระทบการใช้งาน', 'ระยะห่างเล็กน้อย · wording ที่ไม่มีนัยสำคัญ']
    ]},

    { k: 'h', t: 'หมวด issue: 9 ค่าตั้งต้น เพิ่มได้', d: 'พิจารณาหมวดเดิมก่อน เพราะหมวดมากทำให้สถิติกระจาย หากเพิ่มต้องเติมใน enum ทันที' },
    { k: 'table', head: ['หมวด', 'นิยาม', 'AI ตรวจได้หรือไม่'], rows: [
      ['<code>Sizing</code>', 'ขนาดไม่ตรง spec เช่น font size, icon size, ความสูง/กว้าง, radius', '✅'],
      ['<code>Spacing &amp; Layout</code>', 'ระยะห่าง การจัดวาง alignment', '✅'],
      ['<code>Component &amp; DS</code>', 'ใช้ component ผิดตัวหรือผิด variant · ค่า hardcode ที่ควรผูก token', '✅'],
      ['<code>Color</code>', 'สีไม่ตรง token', '✅'],
      ['<code>Typography</code>', 'font family/weight/line-height/letter-spacing/การตัดคำ', '✅'],
      ['<code>States</code>', 'state ที่ควรมีแต่ไม่มีหรือแสดงผิด เช่น hover / error / empty / loading / disabled', '✅ หากมีหลักฐานของ state นั้น'],
      ['<code>Copy</code>', 'ข้อความบน UI ไม่ตรง spec (ไม่รวมข้อมูลที่ดึงจาก API)', '✅'],
      ['<code>A11y</code>', 'contrast / touch target / heading structure / alt text', '🟡 บางข้อต้องให้คนตรวจ'],
      ['<code>Functionality</code>', 'กดแล้วไม่ทำงาน / ไปผิดหน้า / ข้อมูลไม่ถูกดึงมา', '❌ <b>ต้องให้คนทดสอบ</b>']
    ]},

    { k: 'h', t: 'Status: 4 ค่า ห้ามเพิ่ม' },
    { k: 'p', t: '<code>Open</code> → <code>In-Progress</code> → <code>Ready for Review</code> → <code>Approved</code><br>(ค่าเริ่มต้น) · (Dev รับไปแก้) · (Dev แก้แล้ว รอ Designer ตรวจ) · (Designer ตรวจผ่าน)' },
    { k: 'p', t: 'issue ใหม่เป็น <code>Open</code> เสมอ <b><code>Approved</code> เปลี่ยนได้โดย Designer เจ้าของงานเท่านั้น</b>' },

    { k: 'h', t: '🔴 ขอบเขตของ AI: ห้าม flag Content/Data' },
    { k: 'p', t: 'Design spec ใช้ mockup data เสมอ (ชื่อสมมติ ตัวเลขตัวอย่าง รูป placeholder) ความต่างจากของจริงจึงเป็นเรื่องปกติ' },
    { k: 'table', head: ['', 'AI สร้าง issue ได้หรือไม่'], rows: [
      ['Sizing · Spacing &amp; Layout · Color · Typography · Component &amp; DS', '✅ ครอบคลุม ~74% ของ issue ที่พบจริง'],
      ['<code>Functionality</code>', '❌ ต้องให้คนทดสอบ'],
      ['ชื่อ / ตัวเลข / รูป / wording ที่ต่างจาก mockup', '❌ <b>ห้าม flag</b>']
    ]},
    { k: 'link', items: [
      { icon: 'tag', color: 'purple', t: 'enum ฉบับเต็ม', d: 'ไฟล์ต้นฉบับใน design-brain แก้ไขที่ไฟล์นี้เท่านั้น', to: 'https://github.com/uxui-skl/design-brain/blob/main/templates/qa-issue-types.md', up: 'design-brain' }
    ]}
  ]
};
