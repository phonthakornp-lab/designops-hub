/* ---------- เนื้อหาหมวดส่งงานให้ Dev (อยู่ในเว็บ ไม่ลิงก์ออก) ---------- */
DATA.sec.dv.docsHd = 'สิ่งที่ควรทราบ';
DATA.sec.dv.docsLede = 'แนะนำให้อ่านเรียงจากซ้ายไปขวา';
DATA.sec.dv.topics = [
  { id: 'dvhow', icon: 'book',   color: 'orange', t: 'วิธีการใช้งาน', d: '7 ขั้นตอน พร้อมภาพผลลัพธ์', up: 'playbook เต็ม' },
  { id: 'dvcl',  icon: 'check',  color: 'green',  t: 'Checklist 7 ข้อ', d: 'ความหมายและที่มาของแต่ละข้อ', up: '7 ข้อ' },
  { id: 'dvkit', icon: 'frame',  color: 'blue',   t: 'Deliver Kit (Figma)', d: 'องค์ประกอบหน้า Deliver และผู้รับผิดชอบ', up: 'publish 28 ก.ย. 2026' },
  { id: 'dvrat', icon: 'target', color: 'purple', t: 'Design Rationale', d: 'เหตุผลการออกแบบพร้อมหลักฐาน', up: '/rationale · 3 ตัวอย่างจริง' }
];
DATA.sec.dv.tools = ['deliver-kit', 'ds-audit', 'handoff'];

var DVCHAT1 = '<div class="cm"><div class="ct">ขั้น 1/7 · ตรวจไฟล์ My Course</div>' +
  '<div class="cmeta">ตรวจที่ master 5 ตัวในหน้า Design Space - My Course</div>' +
  '<div class="cg r">ต้องแก้ไข 3 รายการ</div>' +
  '<table><thead><tr><th>ตำแหน่ง</th><th>ที่พบ</th><th>ค่าที่ควรเป็น</th></tr></thead><tbody>' +
  '<tr><td>Empty › "ยังไม่พบคอร์สเรียน"</td><td><span class="sw"></span>#000000</td><td><code class="tok">Text/Primary</code></td></tr>' +
  '<tr><td>Tablet › Navbar</td><td>detach</td><td>swap เป็น instance <code class="tok">Navbar</code></td></tr>' +
  '<tr><td>Frame 1597884708 +7</td><td>ชื่อ default</td><td>ตั้งชื่อตามหน้าที่</td></tr>' +
  '</tbody></table>' +
  '<div class="cg y">ต้องยืนยัน 2 รายการ → ตอบในขั้น 4</div>' +
  '<div class="cg g">ไม่นับรวม: Navbar ขาว 80% (ค่าเดียวกับ Design System) · ลาย card · status bar</div>' +
  '<div class="tip">แนะนำให้แก้ก่อน: สีข้อความ (1 จุด)</div></div>';

var DVCHAT2 = '<div class="cm"><div class="ct">ขั้น 2/7 · เลือกรายการที่ต้องการแก้ไข<span class="ex">ตัวอย่าง</span></div>' +
  '<div class="cmeta">เลือกได้หลายรายการ</div><div class="opts">' +
  '<div class="opt on"><span class="bx"></span><span><b>สีข้อความ</b> #000000 → <code class="tok">Text/Primary</code><small>1 จุด</small></span></div>' +
  '<div class="opt"><span class="bx"></span><span><b>Navbar Tablet</b> swap กลับเป็น instance<small>ต้องตั้งค่า property ใหม่ เช่น tab ที่ active</small></span></div>' +
  '<div class="opt on"><span class="bx"></span><span><b>ชื่อ layer</b> 8 ชื่อ<small>ระบบเสนอชื่อให้ตรวจสอบก่อนเปลี่ยน</small></span></div>' +
  '<div class="opt"><span class="bx"></span><span><b>ข้าม</b> แก้ไขภายหลัง</span></div></div></div>';

var WA = ['a', 'ระบบทำ'], WH = ['h', 'Designer ทำ'];

DATA.topic.dvhow = {
  parent: 'dv', color: 'orange', icon: 'book',
  title: 'วิธีการใช้งาน', tag: 'Deliver Kit · 7 ขั้น',
  lede: 'ตรวจงานก่อนส่ง dev และบันทึกผลในไฟล์ Figma ด้วยคำสั่ง /deliver-kit โดยระบบจะดำเนินการทีละขั้น',
  blocks: [
    { k: 'kv', items: [
      { l: 'ใช้เมื่อ', v: 'ออกแบบเสร็จแล้ว <b>ก่อนส่งงานให้ dev</b>' },
      { l: 'ผลลัพธ์', v: 'หน้า <b>📄 Deliver</b> ที่แสดง<b>ความพร้อมและรายการค้าง</b>' }
    ]},

    { k: 'h', t: 'เหตุผลที่ต้องใช้', d: 'ปัญหาส่วนใหญ่มาจาก<b>กรณีที่ไม่ได้ออกแบบ</b> เช่น หน้า error หรือข้อความยาวเกิน ซึ่ง dev ต้องตีความเอง' },
    { k: 'ba',
      no:  { t: 'แบบเดิม', items: ['ส่งลิงก์ Figma ให้ dev', 'ไม่มีการตรวจความครบถ้วน', '<b>dev ตีความเอง</b>ในกรณีที่ไม่ได้ออกแบบ', 'พบเป็น bug ในขั้น QA'] },
      yes: { t: 'ใช้ Deliver Kit', items: ['ระบบตรวจไฟล์ก่อนส่ง', 'ตรวจตาม <b>Checklist 7 ข้อ</b>', 'พบสิ่งที่ขาด<b>ก่อน dev เริ่มงาน</b>', 'dev เห็นสถานะงานในไฟล์'] } },
    { k: 'warn', t: '<b>กรณี B2C App</b> · QA พบ 10 ปัญหาจาก design ไม่ครบ เช่น ปุ่มถูกแถบล่าง Android บัง และจุดที่ dev ตอบว่า <b>"ตามดีไซน์ ไม่มีการแสดง"</b> · Checklist 7 ข้อพัฒนาจากกรณีเหล่านี้' },

    { k: 'h', t: 'ผลลัพธ์: หน้า Deliver', d: 'ระบบสร้างหน้า <code>📄 Deliver - ชื่อ feature</code> ในไฟล์งาน ประกอบด้วย 4 ส่วน' },
    { k: 'ovw', img: { src: 'IMG_DVPAGE_SRC', alt: 'หน้า Deliver ใน Figma มีลำดับขั้นตอน ป้าย Status card Audit Result, Deliver Form และ Handoff Checklist', cap: 'หน้า Deliver ก่อนกรอกข้อมูล' },
      parts: [
        { t: 'Audit Result', who: [['a', 'ระบบเขียน']], d: 'ผลตรวจ ความพร้อมส่ง และรายการที่ต้องแก้ไข' },
        { t: 'Handoff Checklist', who: [['h', 'Designer ติ๊ก']], d: '7 ข้อที่ต้องตรวจก่อนส่ง' },
        { t: 'Deliver Form', who: [['a', 'ระบบ'], ['h', 'Designer']], d: 'ผู้ออกแบบ วันที่ส่ง และ dev ผู้รับงาน' },
        { t: 'Status', who: [['h', 'Designer กด']], d: 'สถานะงาน เช่น Ready for Dev = dev เริ่มงานได้' }
      ] },

    { k: 'h', t: 'เริ่มใช้งาน', d: 'พิมพ์คำสั่งใน Claude Code (design-brain) พร้อมลิงก์ page หรือ frame ของงานรอบนี้ · จบแต่ละขั้นให้พิมพ์ "ต่อ"' },
    { k: 'code', t: '/deliver-kit <ลิงก์ Figma ของงาน>' },
    { k: 'kv', items: [
      { l: 'ต้องมี', v: '<b>Figma MCP</b> (ติดตั้งด้วย <code>/mcp-setup</code>) · <b>Platform</b> ที่ส่งรอบนี้' },
      { l: 'เพิ่มเติม', v: '<b>Jira ticket</b> เพื่อเทียบกับ AC' }
    ]},

    { k: 'h', t: '7 ขั้นตอน', d: 'ระบบทำ 3 ขั้นแรก Designer ทำ 4 ขั้นหลัง · <b>ปิด chat แล้วทำต่อได้ด้วยคำสั่งเดิม</b>' },
    { k: 'flow', svg: FLOW_DV, cap: 'ภาพรวม 7 ขั้นตอน' },
    { k: 'video', src: 'assets/deliver-kit.mp4', poster: 'assets/deliver-kit-poster.jpg', cap: 'วิดีโอตัวอย่าง B2C App หน้า Home · 1:27 นาที · ไม่มีเสียง · บันทึกจาก VS Code ใช้ใน Claude app ได้เช่นเดียวกัน · ขั้น 5–7 แสดงเป็นคำอธิบาย' },

    { k: 'srow', n: 1, t: 'ตรวจไฟล์', who: [WA], dl: [
        ['สิ่งที่ตรวจ', '<ul><li><b>Hardcode</b> สีหรือฟอนต์ที่ไม่ใช้ token / style</li><li><b>Detach</b> component ที่แยกจาก Design System</li><li><b>ชื่อ layer ค่า default</b> เช่น Frame 1597884708</li></ul>'],
        ['ผลลัพธ์', 'ตารางระบุ <b>ตำแหน่ง · สิ่งที่พบ · ค่าที่ควรเป็น</b>'],
        ['ค่าที่ควรเป็น', 'อ้างอิง token ที่ใช้กับค่าเดียวกันในไฟล์ หากไม่มี ระบบแจ้งว่า "ยังไม่มี token"']
      ], html: DVCHAT1, cap: 'ผลจริงของหน้า My Course' },

    { k: 'srow', n: 2, t: 'แก้ไข', who: [WA, ['h', 'Designer เลือก']], dl: [
        ['ระบบถาม', 'รายการให้เลือก (หลายข้อได้) พร้อม<b>ค่าเดิมและค่าใหม่</b>'],
        ['ก่อนแก้ไข', 'บันทึก version ใน Figma (File → Save to version history)'],
        ['หลังแก้ไข', 'ระบบตรวจซ้ำ หากหน้าตาเปลี่ยน ระบบจะหยุดและแจ้ง'],
        ['ข้ามได้', 'หากต้องการแก้ไขเองภายหลัง']
      ], html: DVCHAT2, cap: 'ตัวอย่างรายการให้เลือก' },

    { k: 'srow', n: 3, t: 'สร้างหน้า Deliver', who: [WA], dl: [
        ['ระบบถาม', 'ตำแหน่งวางหน้า Deliver'],
        ['ระบบทำ', 'สร้างหน้าและบันทึกผลลง <b>Audit Result</b>'],
        ['การอ่านผล', '<ul><li><b>Overall</b> Ready หรือ Not Ready</li><li><b>ต้องแก้</b> รายการที่ผิดจริง</li><li><b>ต้องถาม</b> ประเด็นที่ Designer ต้องตอบในขั้น 4</li></ul>']
      ], img: { src: 'IMG_DVAUDIT_SRC', alt: 'Card Audit Result แสดง Overall Not Ready รายการที่ผ่าน ต้องแก้ 3 ข้อ และต้องถาม 2 ข้อ', cap: 'ผลตรวจจริงของหน้า My Course' } },

    { k: 'srow', n: 4, t: 'ตอบคำถาม', who: [WH], mine: true, dl: [
        ['ดำเนินการที่', 'Chat'],
        ['ตัวอย่าง', '"ไม่มีหน้า error ตั้งใจหรือไม่" → "ใช้หน้า error กลางของแอป" · ระบบอัปเดต Audit Result']
      ] },

    { k: 'srow', n: 5, t: 'ติ๊ก Handoff Checklist', who: [WH], mine: true, dl: [
        ['ดำเนินการที่', 'หน้า Deliver ติ๊กเฉพาะข้อที่ครบแล้ว'],
        ['หมายเหตุ', 'ข้อ 1-2 ติ๊กไว้ล่วงหน้า หากไม่ตรงกับงาน ระบบจะเตือน']
      ], extra: '<div class="bub"><div class="bh">ตัวอย่างข้อความจากระบบ</div><p>ติ๊กแล้ว 5/7 เหลือข้อ 4 และ 7</p><p>พิมพ์ "ต่อ" เพื่อไปขั้นถัดไป</p></div>',
      img: { src: 'IMG_DVCHECK_SRC', alt: 'Handoff Checklist 7 ข้อ ติ๊กแล้ว 5 ข้อ', cap: 'ติ๊กแล้ว 5/7' } },

    { k: 'srow', n: 6, t: 'กรอก Deliver Form', who: [WH], mine: true, dl: [
        ['ดำเนินการที่', 'หน้า Deliver'],
        ['ระบบกรอกให้', 'Feature และ Figma link'],
        ['ข้อสังเกต', 'ช่องที่มี <code>[ ]</code> = <b>ยังไม่กรอก</b> ลบข้อความในวงเล็บก่อนพิมพ์ · ช่อง "เว้นได้" ไม่บังคับ']
      ], img: { src: 'IMG_DVFORM_SRC', alt: 'Deliver Form กรอกแล้วเกือบครบ เหลือช่อง Dev ที่รับงานที่ยังมีวงเล็บ', cap: 'ช่องที่มีวงเล็บ = ยังไม่กรอก' } },

    { k: 'srow', n: 7, t: 'เปลี่ยน Status', who: [['h', 'Designer กด']], mine: true, dl: [
        ['ดำเนินการที่', 'ป้าย Status → แผงขวา → ค่า state'],
        ['การเลือก', '<b>Ready for Dev</b> dev เริ่มงานได้<br><b>Changes Requested</b> มีรายการต้องแก้<br><b>In Review</b> รอตรวจทาน<br><b>Draft</b> ระหว่างดำเนินการ']
      ], extra: '<div class="snote">หากจำเป็นต้องส่งทั้งที่มีรายการค้าง ให้ระบุในช่อง "หมายเหตุ"</div>',
      img: { src: 'IMG_DVSTATUS_SRC', alt: 'ป้าย Status 4 แบบ Draft, In Review, Ready for Dev และ Changes Requested', cap: 'Status 4 แบบ' } },

    { k: 'h', t: 'สิ่งที่ระบบไม่ทำแทน', d: 'หน้า Deliver คือการยืนยันของ Designer ระบบจึงไม่ดำเนินการแทน' },
    { k: 'nolist', items: [
      '<b>ไม่ติ๊ก Checklist</b>',
      '<b>ไม่เปลี่ยน Status</b>',
      '<b>ไม่กรอกช่องที่ Designer ต้องกรอก</b> เช่น ชื่อ dev',
      '<b>ไม่แก้ไขงานออกแบบ</b> นอกจากรายการที่เลือกในขั้น 2'
    ]},

    { k: 'h', t: 'ข้อผิดพลาดที่พบบ่อย', d: 'จากการทดสอบ 28 ก.ย. 2026' },
    { k: 'table', head: ['ปัญหา', 'วิธีแก้'], rows: [
      ['ตั้ง Ready for Dev ทั้งที่ยังไม่พร้อม<small>ระบบไม่ป้องกัน เพราะเป็นการยืนยันของ Designer</small>', 'ใช้ <b>Changes Requested</b> หรือระบุในหมายเหตุ'],
      ['พิมพ์ต่อท้ายข้อความในวงเล็บ<small>เช่น "ชื่อ test"</small>', 'ลบข้อความใน <code>[ ]</code> ก่อนพิมพ์'],
      ['ติ๊กข้อ 1-2 โดยไม่ตรวจสอบ<small>งานทดสอบไม่มี annotation</small>', 'อ่านคำเตือนของระบบก่อนไปต่อ'],
      ['หน้า Deliver เก่าแสดงข้อความเดิม', 'Figma → Assets → Libraries → <b>Update</b>']
    ]},

    { k: 'h', t: 'คำถามที่พบบ่อย' },
    { k: 'faq', items: [
      { q: 'ต้องใช้กับทุก feature หรือไม่', a: 'ยังไม่บังคับในช่วงทดลองใช้ แนะนำให้ทดลองกับงาน 1 ชิ้นในรอบนี้และแจ้งปัญหาที่พบ' },
      { q: 'กลับมาทำต่อหลังปิด chat ได้หรือไม่', a: 'ได้ พิมพ์ <code>/deliver-kit</code> พร้อมลิงก์เดิม ระบบจะทำต่อจากขั้นที่ค้างตามหน้า Deliver' },
      { q: 'ควรแนบลิงก์ทั้งไฟล์หรือไม่', a: 'ไม่ควร ให้แนบเฉพาะ page หรือ frame ของงานรอบนี้ การแนบทั้งไฟล์ทำให้ระบบตรวจหน้าเก่าและหน้าทดลองด้วย ผลจึงคลาดเคลื่อนและใช้เวลานาน' },
      { q: 'หน้างานเป็น instance ของ component จากหน้าอื่น', a: 'ระบบตรวจที่ master component และระบุหน้าที่ตรวจ · แก้ไขที่ master' },
      { q: 'ต้องแก้ไขทุกข้อก่อนส่งหรือไม่', a: 'ไม่จำเป็น ให้ตั้ง Status เป็น Changes Requested หรือระบุในหมายเหตุ · ส่งรอบใหม่ให้เพิ่มเลขในช่อง "รอบที่"' },
      { q: 'หลัง dev พัฒนาเสร็จต้องทำอะไรต่อ', a: 'ใช้ <code>/qa-check</code> เทียบงาน dev กับ design (หมวด Design QA)' }
    ]}
  ]
};

DATA.topic.dvcl = {
  parent: 'dv', color: 'green', icon: 'check',
  title: 'Checklist 7 ข้อ', tag: 'ความหมายของแต่ละข้อ',
  lede: 'ทุกข้อมาจากปัญหาที่เคยหลุดถึง dev หรือ QA · จำกัด 7 ข้อเพื่อให้ใช้งานได้จริง',
  blocks: [
    { k: 'table', head: ['#', 'ข้อ', 'เกณฑ์'], rows: [
      ['1', '<b>Annotation ครบ</b>', 'ทุกจุดที่กดได้มีคำอธิบายผลการกด'],
      ['2', '<b>Edge case ครบ</b>', 'ออกแบบกรณีผิดปกติ เช่น ไม่มีข้อมูล โหลดไม่สำเร็จ ออฟไลน์<small>รวมถึงปุ่มที่ต้องซ่อน</small>'],
      ['3', '<b>States ครบ</b>', 'ปุ่มและช่องกรอกมีครบทุก state<small>default / hover / active / disabled</small>'],
      ['4', '<b>ไม่ detach / ไม่ hardcode</b>', 'ผลตรวจขั้น 1 ไม่มีรายการต้องแก้'],
      ['5', '<b>Breakpoint ครบ</b>', 'ครบทุกขนาดจอที่ส่งรอบนี้'],
      ['6', '<b>Safe area</b>', 'เนื้อหาและปุ่มไม่ถูกแถบระบบบัง เช่น แถบล่าง Android ขอบล่าง iOS'],
      ['7', '<b>ค่าที่ dev ต้องเดา</b>', 'ระบุให้ครบ เช่น จำนวนตัวอักษรสูงสุด วิธีตัดข้อความ<small>หากไม่แสดง ให้ระบุว่า "ไม่แสดง" ห้ามเว้นว่าง</small>']
    ]},
    { k: 'note', t: '<b>ข้อ 1-2 ติ๊กไว้ล่วงหน้า</b> แต่เป็นข้อที่ถูกข้ามง่ายที่สุด <code>/deliver-kit</code> จึงเทียบกับผลตรวจและเตือนหากไม่ตรง' },
    { k: 'h', t: 'ที่มาของข้อ 6-7', d: 'เพิ่มเมื่อ 17 ส.ค. 2026' },
    { k: 'p', t: 'การเทียบ Design QA กับ bug ใน build เดียวกันของ B2C App พบปัญหาด้าน design 10 เรื่อง ซึ่ง<b>checklist 5 ข้อเดิมไม่ครอบคลุมเลย</b>' },
    { k: 'table', head: ['ข้อ', 'ตรวจพบ', 'กรณีจริง'], rows: [
      ['6 Safe area', '2', 'หน้าหลักสูตรและปุ่มรีวิวถูกแถบล่าง Android บัง'],
      ['7 ค่าที่ dev ต้องเดา', '4', 'max length · ปุ่มกลับ · modal ซ้อน · ส่วนที่ dev ตอบว่า "ตามดีไซน์ ไม่มีการแสดง"'],
      ['2 (ขยายขอบเขต)', '2', 'ไม่มีภาพ default เมื่อคอร์สไม่มีรูป · ปุ่มรีวิวยังแสดงขณะออฟไลน์']
    ]},
    { k: 'h', t: 'คำศัพท์' },
    { k: 'table', head: ['คำ', 'หมายถึง'], rows: [
      ['<code>hardcode</code>', 'ใส่ค่าสีหรือฟอนต์โดยตรงแทน token / style'],
      ['<code>detach</code>', 'แยก component จาก Design System ทำให้ไม่อัปเดตตาม DS'],
      ['<code>instance</code> / <code>master</code>', 'instance คือสำเนาที่นำไปใช้ master คือต้นฉบับ แก้ที่ master มีผลทุก instance'],
      ['<code>placeholder</code>', 'ข้อความตัวอย่างในช่องที่ยังไม่กรอก อยู่ในวงเล็บ <code>[ ]</code>']
    ]}
  ]
};

DATA.topic.dvkit = {
  parent: 'dv', color: 'blue', icon: 'frame',
  title: 'Deliver Kit (Figma)', tag: 'หน้า Deliver · 4 ส่วน',
  lede: 'library ใน Figma ที่ /deliver-kit ใช้สร้างหน้า Deliver โดยไม่ต้องคัดลอกเอง',
  blocks: [
    { k: 'link', items: [
      { icon: 'frame', color: 'blue', t: 'Deliver Kit · Figma', d: 'ต้นฉบับ Checklist, ฟอร์ม และ Status · ไฟล์ Design QA master', to: 'https://www.figma.com/design/JB7nZD4KBOXX8q5QW3mucJ/-Master--Design-QA-Template?node-id=2027-2', up: 'publish 28 ก.ย. 2026' }
    ]},
    { k: 'img', src: 'IMG_DVPAGE_SRC', alt: 'หน้า Deliver ใน Figma มีลำดับขั้นตอน ป้าย Status card Audit Result, Deliver Form และ Handoff Checklist', cap: 'หน้า Deliver ก่อนกรอกข้อมูล' },
    { k: 'table', head: ['ส่วน', 'รายละเอียด', 'ผู้รับผิดชอบ'], rows: [
      ['Audit Result', 'ผลตรวจ ความพร้อมส่ง และรายการที่ต้องแก้ไข<small>เป็น frame ไม่ใช่ component เพื่อให้ระบบเขียนได้</small>', 'ระบบ'],
      ['Handoff Checklist', '7 ข้อที่ต้องตรวจก่อนส่ง', 'Designer'],
      ['Deliver Form', 'ผู้ออกแบบ วันที่ส่ง dev ผู้รับงาน<small>ระบบกรอก Feature และ Figma link</small>', 'ระบบ + Designer'],
      ['Status', 'Draft · In Review · Ready for Dev · Changes Requested', 'Designer']
    ]},
    { k: 'warn', t: '<b>ไฟล์ที่เคยใช้ Deliver Kit ไม่อัปเดตอัตโนมัติ</b> · ไปที่ Figma → Assets → Libraries → Update' },
    { k: 'note', t: '<b>Status เป็น component ไม่ใช่ text</b> · จึงนับงาน Ready for Dev ได้อัตโนมัติโดยไม่ต้องทำรายงาน' }
  ]
};

var DVRATCHAT = '<div class="cm"><div class="ct">ขั้น 3 · ร่างเหตุผลและยืนยันทีละข้อ</div>' +
  '<div class="cmeta">01 · Chip กรองสถานะ</div>' +
  '<p style="margin:0 0 8px">ผู้เรียนที่มีคอร์สจำนวนมากหาคอร์สได้ยาก การกรองตามสถานะช่วยให้เห็นเฉพาะกลุ่มที่ต้องการในแตะเดียว <b>(เดา)</b> เลือก Chip แทน Section เพื่อไม่ให้หน้ายาวเกินไป</p>' +
  '<div class="cg y">❓ decision log ระบุว่าแบ่ง Section แต่แบบจริงเป็น Chip เปลี่ยนด้วยเหตุผลใด</div>' +
  '<div class="tip">ตอบ "01 ok" หรือพิมพ์แก้ไข</div></div>';

DATA.topic.dvrat = {
  parent: 'dv', color: 'purple', icon: 'target',
  title: 'Design Rationale', tag: 'เหตุผลการออกแบบ · board ใน Figma',
  lede: 'เหตุผลการออกแบบพร้อมหลักฐาน วางเป็น board ข้างหน้าจอในไฟล์ Figma ใช้ประกอบ review และส่ง dev',
  blocks: [
    { k: 'kv', items: [
      { l: 'คำสั่ง', v: '<code>/rationale &lt;ลิงก์ Figma ของหน้าจอ&gt;</code> ใน Claude Code (design-brain) · ปรึกษาก่อนออกแบบได้โดยไม่ต้องแนบลิงก์' },
      { l: 'ผลลัพธ์', v: 'Board ประกอบด้วยหน้าจอ <b>หมุดเลข</b> และ<b>Card เหตุผล</b> พร้อมหลักฐานและ Trade-offs' }
    ]},

    { k: 'h', t: 'ใช้เมื่อ', d: 'เฉพาะหน้าที่มี decision ที่อาจถูกถามว่า "ทำไม" (ปกติ 1-3 หน้าต่อ feature · หน้าละ 3-6 ข้อ)' },
    { k: 'table', head: ['ใช้เมื่อ', 'Mode', 'ผลลัพธ์'], rows: [
      ['<b>ก่อน UI review / ขอ approve</b><small>กรณีหลัก</small>', 'เขียนลง board', 'หลักฐานประกอบการนำเสนอ และส่ง dev ต่อได้'],
      ['<b>decision ที่ยังไม่มั่นใจ</b>', 'ปรึกษา → ค่อยลง board', 'หลักฐาน<b>ทั้งสนับสนุนและคัดค้าน</b> เพื่อประเมินก่อน review'],
      ['<b>ก่อนส่ง dev</b>', 'เขียนลง board', '<code>/deliver-kit</code> จะแนะนำหากยังไม่มี'],
      ['<b>ยังไม่ได้ออกแบบ</b>', 'ปรึกษา', 'ทางเลือกพร้อมหลักฐาน']
    ]},
    { k: 'warn', t: '<b>ห้ามใช้หาเหตุผลรองรับ decision ที่ไม่มั่นใจ</b> · ระบบสร้างเหตุผลที่น่าเชื่อถือได้เสมอแม้ decision ผิด ให้ใช้ mode ปรึกษา หากหลักฐานคัดค้านให้ปรับแบบหรือหารือใน review' },
    { k: 'p', t: '<b>ไม่จำเป็นต้องใช้:</b> แก้ไขเล็กน้อย (ข้อความ ระยะ bug) · ใช้ pattern มาตรฐานของ Design System ทั้งหน้า · ยังทดลองหลายแบบ' },

    { k: 'h', t: 'ผลลัพธ์', d: 'ตัวอย่าง B2C App หน้า My Course · หมุดเลขตรงกับเลข card' },
    { k: 'img', src: 'IMG_DVRATBOARD_SRC', alt: 'Board Design Rationale หน้า My Course: แถบซ้าย หน้าจอพร้อมหมุด 01-03 และ card เหตุผล 3 ใบ', cap: 'Board <code>Design Review - My Course</code> ในไฟล์ B2C Application หน้า Design Rationale' },

    { k: 'h', t: 'ขั้นตอน', d: '4 ขั้น · Designer เลือก decision (ขั้น 2) และยืนยันเหตุผล (ขั้น 3) ที่เหลือระบบทำ' },
    { k: 'flow', svg: FLOW_RAT, cap: 'ระบบร่าง Designer ตัดสิน · ข้อที่ไม่ยืนยันจะไม่ลง board' },
    { k: 'srow', n: 1, t: 'อ่านบริบท', who: [['a', 'ระบบทำ']], dl: [
        ['ระบบอ่าน', 'หน้าจอจาก Figma · PRD / AC จาก Jira · persona และ decision เดิมของ BU ใน design-brain'],
        ['บันทึก', 'ที่มาของข้อมูล ใช้เป็นหลักฐานป้าย Project']
      ] },
    { k: 'srow', n: 2, t: 'เลือก decision', who: [['a', 'ระบบเสนอ'], ['h', 'Designer เลือก']], mine: true, dl: [
        ['ระบบเสนอ', 'decision 3-6 ข้อ พร้อมระบุข้อที่มีหลักฐานรองรับ'],
        ['Designer ทำ', 'ตอบเป็นหมายเลข เช่น "1, 3, 4" หรือเพิ่มข้อใหม่']
      ] },
    { k: 'srow', n: 3, t: 'ยืนยันเหตุผล', who: [['h', 'Designer ทำ']], mine: true, dl: [
        ['ระบบร่าง', 'เหตุผลเบื้องต้น ส่วนที่ไม่มีที่มาติดป้าย <b>(เดา)</b>'],
        ['Designer ทำ', '<b>ยืนยันหรือแก้ไขทีละข้อ</b> ข้อที่ไม่ยืนยันจะไม่ลง board · คำถามข้อเท็จจริงจากระบบต้องตอบก่อน']
      ], html: DVRATCHAT, cap: 'ตัวอย่างจากการทดสอบหน้า My Course' },
    { k: 'srow', n: 4, t: 'หลักฐาน + วาง board', who: [['a', 'ระบบทำ']], dl: [
        ['Sources', '2-4 ข้อต่อ card ป้าย 7 แบบ · <b>Project / Data ต้องมีที่มาจริง</b>'],
        ['วางลงไฟล์', 'ถามตำแหน่ง แล้ววางหน้าจอ หมุดเลข และ card'],
        ['หลักฐานคัดค้าน', 'แจ้ง Designer ก่อนเขียน board ไม่คัดเฉพาะหลักฐานสนับสนุน']
      ], img: { src: 'IMG_DVRATCARD_SRC', alt: 'Card Design Rationale 03 ความยาวคอร์สและ Progress bar พร้อม Sources 4 ข้อ และ Trade-offs', cap: 'Card 1 ใบ = 1 decision · Rationale · Sources · Trade-offs' } },

    { k: 'h', t: 'ป้าย Source 7 แบบ', d: 'ระบุแหล่งอ้างอิงของเหตุผล' },
    { k: 'table', head: ['ป้าย', 'ใช้เมื่ออ้างอิง', 'ตัวอย่าง'], rows: [
      ['Heuristic', 'Nielsen 10 ข้อ', 'Nielsen #1 Visibility of System Status'],
      ['Principle', 'หลักการออกแบบพื้นฐาน', 'Visual Hierarchy · Progressive Disclosure'],
      ['Research', 'ทฤษฎีหรืองานวิจัยที่มีผู้คิดค้น', 'BJ Fogg · Fitts\'s Law · Goal-Gradient'],
      ['Expert', 'guideline ทางการ', 'Apple HIG · Material Design · WCAG'],
      ['Benchmark', 'แนวทางของแอปอื่น', 'Duolingo · Coursera · Spotify'],
      ['Project', 'เอกสารของโปรเจกต์<small>ต้องมีที่มาจริง</small>', 'PRD · AC ใน Jira · persona'],
      ['Data', 'ตัวเลขจริงขององค์กร<small>ต้องมีที่มาจริง</small>', 'Analytics · Dashboard · ผล QA']
    ]},

    { k: 'h', t: 'สิ่งที่ระบบไม่ดำเนินการ' },
    { k: 'nolist', items: [
      '<b>ไม่แต่งเหตุผลแทน Designer</b> ทุกข้อต้องยืนยัน',
      '<b>ไม่แต่งตัวเลขหรือชื่อเอกสาร</b> ในป้าย Project / Data',
      '<b>ไม่แนะนำการปรับแบบ</b> ใช้ <code>/critique</code>',
      '<b>ไม่แก้ไข frame งานออกแบบ</b> เขียนเฉพาะ board rationale'
    ]},

    { k: 'link', items: [
      { icon: 'frame', color: 'purple', t: 'Design Rationale Template · Figma', d: 'library card · ป้าย Source · หมุดเลข', to: 'https://www.figma.com/design/G7q7EuE251iSoap0YzNsm8/-Master--Design-Rationale-Template?node-id=2001-873', up: 'publish 28 ก.ย. 2026' },
      { icon: 'target', color: 'orange', t: 'ตัวอย่างจริง · B2C App', d: 'Homepage · Curriculum · My Course', to: 'https://www.figma.com/design/e9cWDHGiXcZoCYzgTfPfQY/-B2C--B2C-Application?node-id=2859-4308', up: '3 board' }
    ]}
  ]
};
