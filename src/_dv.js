/* ---------- เนื้อหาหมวดส่งงานให้ Dev (อยู่ในเว็บ ไม่ลิงก์ออก) ---------- */
DATA.sec.dv.docsHd = 'เข้ามาแล้วต้องรู้อะไรบ้าง';
DATA.sec.dv.docsLede = 'เพิ่งเริ่ม เปิดเรียงจากซ้ายไปขวา';
DATA.sec.dv.topics = [
  { id: 'dvhow', icon: 'book',   color: 'orange', t: 'วิธีการใช้งาน', d: '7 ขั้น พร้อมภาพผลลัพธ์แต่ละขั้น', up: 'playbook เต็ม' },
  { id: 'dvcl',  icon: 'check',  color: 'green',  t: 'Checklist 7 ข้อ', d: 'แต่ละข้อหมายถึงอะไร มาจากเคสไหน', up: '7 ข้อ' },
  { id: 'dvkit', icon: 'frame',  color: 'blue',   t: 'Deliver Kit (Figma)', d: 'หน้า Deliver มีอะไร ใครเขียนส่วนไหน', up: 'publish 28 ก.ย. 2026' },
  { id: 'dvrat', icon: 'target', color: 'purple', t: 'Design Rationale', d: 'เหตุผลการออกแบบพร้อมหลักฐาน ใช้ตอน review และส่ง dev', up: '/rationale · 3 ตัวอย่างจริง' }
];
DATA.sec.dv.tools = ['deliver-kit', 'ds-audit', 'handoff'];

var DVCHAT1 = '<div class="cm"><div class="ct">ขั้น 1/7 · ตรวจไฟล์ My Course</div>' +
  '<div class="cmeta">ตรวจที่ master 5 ตัวในหน้า Design Space - My Course</div>' +
  '<div class="cg r">ต้องแก้ 3 เรื่อง</div>' +
  '<table><thead><tr><th>ตรงไหน</th><th>เจอ</th><th>ควรเป็น</th></tr></thead><tbody>' +
  '<tr><td>Empty › "ยังไม่พบคอร์สเรียน"</td><td><span class="sw"></span>#000000</td><td><code class="tok">Text/Primary</code></td></tr>' +
  '<tr><td>Tablet › Navbar</td><td>detach</td><td>swap เป็น instance <code class="tok">Navbar</code></td></tr>' +
  '<tr><td>Frame 1597884708 +7</td><td>ชื่อ default</td><td>ตั้งชื่อตามหน้าที่</td></tr>' +
  '</tbody></table>' +
  '<div class="cg y">ต้องถาม 2 เรื่อง → ตอบในขั้น 4</div>' +
  '<div class="cg g">ไม่นับ: Navbar ขาว 80% (ค่าเดียวกับ Design System) · ลายการ์ด · status bar</div>' +
  '<div class="tip">แนะนำให้ทำก่อน: สีข้อความ (1 จุด เสร็จทันที)</div></div>';

var DVCHAT2 = '<div class="cm"><div class="ct">ขั้น 2/7 · จะให้แก้ข้อไหนบ้าง<span class="ex">ตัวอย่าง</span></div>' +
  '<div class="cmeta">เลือกได้หลายข้อ</div><div class="opts">' +
  '<div class="opt on"><span class="bx"></span><span><b>สีข้อความ</b> #000000 → <code class="tok">Text/Primary</code><small>1 จุด</small></span></div>' +
  '<div class="opt"><span class="bx"></span><span><b>Navbar Tablet</b> swap กลับเป็น instance<small>ต้องใส่ property กลับเอง เช่น tab ที่ active</small></span></div>' +
  '<div class="opt on"><span class="bx"></span><span><b>ชื่อ layer</b> 8 ชื่อ<small>ระบบเสนอชื่อให้ดูก่อนเปลี่ยน</small></span></div>' +
  '<div class="opt"><span class="bx"></span><span><b>ข้าม</b> แก้เองทีหลัง</span></div></div></div>';

var WA = ['a', 'ระบบทำ'], WH = ['h', 'คุณทำ'];

DATA.topic.dvhow = {
  parent: 'dv', color: 'orange', icon: 'book',
  title: 'วิธีการใช้งาน', tag: 'Deliver Kit · 7 ขั้น',
  lede: 'เช็คงานก่อนส่งให้ dev แล้วบันทึกผลไว้ในไฟล์ Figma เดียวกับงาน ใช้คำสั่งเดียว /deliver-kit ระบบพาทำทีละขั้นจนจบ',
  blocks: [
    { k: 'kv', items: [
      { l: 'ใช้เมื่อไหร่', v: 'ออกแบบเสร็จแล้ว <b>ก่อนส่งงานให้ dev</b>' },
      { l: 'ได้อะไร', v: 'หน้า <b>📄 Deliver</b> ในไฟล์งาน dev เปิดแล้วรู้ทันทีว่า<b>งานพร้อมแค่ไหน อะไรยังค้าง</b> ไม่ต้องทักถาม' }
    ]},

    { k: 'h', t: 'ทำไมต้องใช้', d: 'อะไรที่ไม่ได้ออกแบบไว้ dev จะเดาเอง · ส่วนใหญ่ไม่ได้พลาดเพราะออกแบบผิด แต่<b>ลืมออกแบบบางกรณี</b> เช่น หน้า error หรือข้อความที่ยาวเกิน' },
    { k: 'ba',
      no:  { t: 'แบบเดิม', items: ['ส่งลิงก์ Figma ให้ dev', 'ไม่มีใครเช็คว่าออกแบบครบทุกกรณีไหม', 'กรณีที่ไม่ได้ทำไว้ <b>dev ทำตามที่เดาเอง</b>', 'ไปเจอเป็น bug ตอน QA แล้วต้องกลับมาแก้'] },
      yes: { t: 'ใช้ Deliver Kit', items: ['ระบบตรวจไฟล์ให้ก่อน', 'เช็คตาม <b>Checklist 7 ข้อ</b> ว่ายังขาดอะไร', 'เห็นของที่ขาด<b>ตั้งแต่ก่อน dev เริ่ม</b>', 'dev เห็นในไฟล์ว่าอะไรพร้อม อะไรยังค้าง'] } },
    { k: 'warn', t: '<b>เคสจริง B2C App</b> · QA เจอ 10 ปัญหาที่มาจาก design ไม่ครบ เช่น ปุ่มถูกแถบล่างของ Android บัง และมีจุดที่ dev ตอบว่า <b>"ตามดีไซน์ ไม่มีการแสดง"</b> ทั้งที่ designer แค่ลืมใส่ · Checklist 7 ข้อสร้างมาจากเคสเหล่านี้' },

    { k: 'h', t: 'สิ่งที่ได้ตอนจบ: หน้านี้ในไฟล์งานของคุณ', d: 'ระบบสร้างหน้าชื่อ <code>📄 Deliver - ชื่อ feature</code> ให้ในไฟล์ Figma ของงาน มี 4 ส่วน' },
    { k: 'ovw', img: { src: 'IMG_DVPAGE_SRC', alt: 'หน้า Deliver ใน Figma มีลำดับขั้นตอน ป้าย Status การ์ด Audit Result, Deliver Form และ Handoff Checklist', cap: 'หน้า Deliver ตอนเพิ่งสร้าง ยังไม่ได้กรอกอะไร' },
      parts: [
        { t: 'Audit Result', who: [['a', 'ระบบเขียน']], d: 'ผลตรวจไฟล์ บอกว่าพร้อมส่งไหม ต้องแก้อะไร' },
        { t: 'Handoff Checklist', who: [['h', 'คุณติ๊ก']], d: '7 ข้อที่ต้องเช็คก่อนส่ง' },
        { t: 'Deliver Form', who: [['a', 'ระบบ'], ['h', 'คุณ']], d: 'ข้อมูลการส่ง เช่น ใครออกแบบ ส่งวันไหน dev คนไหนรับ' },
        { t: 'Status', who: [['h', 'คุณกด']], d: 'ป้ายบอกสถานะ เช่น Ready for Dev = dev เริ่มได้' }
      ] },

    { k: 'h', t: 'เริ่มใช้', d: 'พิมพ์ใน Claude Code (เปิดในโฟลเดอร์ design-brain) · ลิงก์ page หรือ frame ของงานที่ส่งรอบนี้ ไม่ต้องลิงก์ทั้งไฟล์ · ทำเสร็จแต่ละขั้นพิมพ์ "ต่อ"' },
    { k: 'code', t: '/deliver-kit <ลิงก์ Figma ของงาน>' },
    { k: 'kv', items: [
      { l: 'ต้องมี', v: '<b>Figma MCP</b> ต่ออยู่ (ยังไม่ได้ต่อ พิมพ์ <code>/mcp-setup</code>) · <b>Platform</b> ที่ส่งรอบนี้' },
      { l: 'ถ้ามี', v: '<b>Jira ticket</b> ระบบจะเทียบกับ AC ให้' }
    ]},

    { k: 'h', t: '7 ขั้น แต่ละขั้นได้อะไร', d: '3 ขั้นแรกระบบทำ 4 ขั้นหลังคุณทำ · <b>ปิดแชทกลางทางแล้วกลับมาพิมพ์คำสั่งเดิม ระบบทำต่อจากที่ค้างได้</b>' },

    { k: 'srow', n: 1, t: 'ตรวจไฟล์', who: [WA], dl: [
        ['ระบบหา', '<ul><li><b>Hardcode</b> สีหรือฟอนต์ที่ไม่ได้ใช้ token / style ของ Design System</li><li><b>Detach</b> component ที่ถูกแยกออกจาก Design System</li><li><b>ชื่อ layer ค่า default</b> เช่น Frame 1597884708</li></ul>'],
        ['ได้ผลเป็น', 'ตารางในแชท ทุกข้อบอก <b>ตรงไหน · เจออะไร · ควรเป็นอะไร</b> ไม่ใช่แค่จำนวน'],
        ['ค่าที่ควรเป็น', 'ระบบดูจากไฟล์ของคุณเอง ว่าค่านี้ที่อื่นผูก token ตัวไหนอยู่ ถ้าไม่มี token ที่ตรง จะบอกว่า "ยังไม่มี token" ไม่เดาชื่อเอง']
      ], html: DVCHAT1, cap: 'ผลจริงของหน้า My Course' },

    { k: 'srow', n: 2, t: 'แก้ให้', who: [WA, ['h', 'คุณเลือก']], dl: [
        ['ระบบถาม', 'ตัวเลือกให้ติ๊กในแชท เลือกได้หลายข้อ แต่ละข้อบอกว่า<b>จะเปลี่ยนจากอะไรเป็นอะไร</b>'],
        ['ก่อนแก้', 'save version ใน Figma ก่อน (File → Save to version history) ย้อนกลับได้'],
        ['หลังแก้', 'ระบบตรวจซ้ำทันที บอกว่าข้อไหนหายแล้ว ถ้าแก้แล้วหน้าตาเพี้ยน ระบบหยุดและบอกก่อน'],
        ['ข้ามได้', 'ถ้าอยากแก้เอง หรือยังแก้ไม่ได้ตอนนี้']
      ], html: DVCHAT2, cap: 'ตัวอย่างหน้าตาตัวเลือก (ขั้นนี้ยังไม่ได้รันในการทดสอบ)' },

    { k: 'srow', n: 3, t: 'สร้างหน้า Deliver', who: [WA], dl: [
        ['ระบบถาม', 'จะวางหน้า Deliver ไว้ตรงไหนในไฟล์'],
        ['ระบบทำ', 'สร้างหน้า แล้วเขียนผลตรวจลงการ์ด <b>Audit Result</b>'],
        ['อ่านยังไง', '<ul><li><b>Overall</b> พร้อมส่ง (Ready) หรือยัง (Not Ready)</li><li><b>ต้องแก้</b> ของที่ผิดจริง</li><li><b>ต้องถาม</b> เรื่องที่ระบบตัดสินเองไม่ได้ ไปตอบในขั้น 4</li></ul>']
      ], img: { src: 'IMG_DVAUDIT_SRC', alt: 'การ์ด Audit Result แสดง Overall Not Ready รายการที่ผ่าน ต้องแก้ 3 ข้อ และต้องถาม 2 ข้อ', cap: 'ตัวอย่างผลตรวจจริงของหน้า My Course' } },

    { k: 'srow', n: 4, t: 'ตอบคำถาม', who: [WH], mine: true, dl: [
        ['ทำที่', 'ในแชท ตอบสั้น ๆ ได้'],
        ['ตัวอย่าง', '"ไม่มีหน้า error ตั้งใจไหม" → "ใช้หน้า error กลางของแอป" · ระบบจะอัปเดต Audit Result ให้']
      ] },

    { k: 'srow', n: 5, t: 'ติ๊ก Handoff Checklist', who: [WH], mine: true, dl: [
        ['ทำที่', 'หน้า Deliver ใน Figma → ติ๊กเฉพาะข้อที่ทำครบจริง'],
        ['รู้ไว้', 'ข้อ 1-2 ติ๊กมาให้ตั้งแต่แรก เพราะทีมทำกันอยู่แล้ว ถ้างานนี้ไม่จริง ระบบจะเตือน']
      ], extra: '<div class="bub"><div class="bh">ตัวอย่างข้อความจากระบบ</div><p>ติ๊กแล้ว 5/7 ยังเหลือข้อ 4 กับ 7</p><p>ครบแล้วพิมพ์ "ต่อ" · ยังไม่ครบจริงก็พิมพ์ "ต่อ" ได้</p></div>',
      img: { src: 'IMG_DVCHECK_SRC', alt: 'Handoff Checklist 7 ข้อ ติ๊กแล้ว 5 ข้อ', cap: 'ติ๊กแล้ว 5 ใน 7 ข้อ' } },

    { k: 'srow', n: 6, t: 'กรอก Deliver Form', who: [WH], mine: true, dl: [
        ['ทำที่', 'หน้า Deliver ใน Figma'],
        ['ระบบกรอกให้', 'Feature กับ Figma link'],
        ['สังเกต', 'ช่องที่ยังมีวงเล็บ <code>[ ]</code> = <b>ยังไม่ได้กรอก</b> · ลบข้อความในวงเล็บออกก่อนพิมพ์ · ช่องที่เขียนว่า "เว้นได้" ไม่ต้องกรอก']
      ], img: { src: 'IMG_DVFORM_SRC', alt: 'Deliver Form กรอกแล้วเกือบครบ เหลือช่อง Dev ที่รับงานที่ยังมีวงเล็บ', cap: 'ช่อง Dev ที่รับงาน ยังมีวงเล็บ = ยังไม่ได้กรอก' } },

    { k: 'srow', n: 7, t: 'เปลี่ยน Status', who: [['h', 'คุณกดเอง']], mine: true, dl: [
        ['ทำที่', 'คลิกป้าย Status → แผงขวา → เปลี่ยนค่า state'],
        ['เลือกยังไง', '<b>Ready for Dev</b> ครบแล้ว dev เริ่มได้<br><b>Changes Requested</b> ยังมีของต้องแก้<br><b>In Review</b> รอคนช่วยดู<br><b>Draft</b> ยังทำอยู่']
      ], extra: '<div class="snote">ยังมีของค้างแต่ต้องส่งก่อน ให้เขียนลงช่อง "หมายเหตุ" ในฟอร์ม dev จะได้รู้ก่อนเริ่ม</div>',
      img: { src: 'IMG_DVSTATUS_SRC', alt: 'ป้าย Status 4 แบบ Draft, In Review, Ready for Dev และ Changes Requested', cap: 'Status มี 4 แบบ' } },

    { k: 'h', t: 'สิ่งที่ระบบจะไม่ทำแทนคุณ', d: 'หน้า Deliver คือการที่ designer ยืนยันว่า "ฉันเช็คแล้ว" ถ้าระบบทำแทน การยืนยันนั้นก็ไม่มีความหมาย' },
    { k: 'nolist', items: [
      '<b>ไม่ติ๊ก Checklist</b> แทน',
      '<b>ไม่เปลี่ยน Status</b> แทน',
      '<b>ไม่กรอกช่องที่คุณต้องกรอก</b> เช่น ชื่อ dev',
      '<b>ไม่แก้งานออกแบบ</b> นอกจากข้อที่คุณเลือกในขั้น 2'
    ]},

    { k: 'h', t: 'จุดที่มักพลาด', d: 'เจอจริงตอนทดสอบ 28 ก.ย. 2026' },
    { k: 'table', head: ['อาการ', 'ทางแก้'], rows: [
      ['ตั้ง Ready for Dev ทั้งที่ยังไม่พร้อม<small>ไม่มีอะไรกันไว้ เพราะ Status เป็นการประกาศของคุณเอง</small>', 'ยังมีของค้าง ใช้ <b>Changes Requested</b> หรือเขียนลงช่องหมายเหตุ'],
      ['พิมพ์ต่อท้ายข้อความในวงเล็บ<small>ตอนทดสอบได้ช่องที่เขียนว่า "ชื่อ test"</small>', 'ลบข้อความในวงเล็บ <code>[ ]</code> ออกให้หมดก่อนพิมพ์'],
      ['ติ๊กข้อ 1-2 โดยไม่ได้ดู<small>งานที่ทดสอบไม่มี annotation เลย</small>', 'ระบบจะเตือนถ้าไม่ตรงกับผลตรวจ อ่านก่อนไปต่อ'],
      ['หน้า Deliver เก่ายังเป็นข้อความเดิม', 'Figma → Assets → Libraries → <b>Update</b>']
    ]},

    { k: 'h', t: 'คำถามที่มักโดนถาม' },
    { k: 'faq', items: [
      { q: 'ต้องทำทุก feature ไหม', a: 'ตอนนี้อยู่ในช่วงทดลองใช้ ยังไม่บังคับ ลองกับงานที่จะส่ง dev รอบนี้ 1 ชิ้นก่อน แล้วเล่ากลับมาว่าติดตรงไหน' },
      { q: 'ทำค้างไว้ ปิดแชทแล้วกลับมาทำต่อได้ไหม', a: 'ได้ พิมพ์ <code>/deliver-kit</code> กับลิงก์เดิม ระบบดูจากหน้า Deliver ว่าทำถึงไหนแล้ว แล้วพาไปขั้นที่ค้างอยู่' },
      { q: 'ควรส่งลิงก์ทั้งไฟล์หรือเฉพาะบางหน้า', a: 'เฉพาะ page หรือ frame ของงานที่ส่งรอบนี้ · ถ้าส่งทั้งไฟล์ ระบบจะตรวจหน้าเก่าและหน้าที่ยังทดลองอยู่ด้วย ผลจะดูแย่เกินจริงและอาจช้ามาก' },
      { q: 'หน้างานเป็น instance ของ component ที่อยู่อีกหน้า', a: 'ระบบไล่ไปตรวจที่ master component ให้เอง และบอกว่าตรวจที่หน้าไหน · ส่วนการแก้ต้องแก้ที่ master' },
      { q: 'ต้องแก้ทุกข้อก่อนส่งไหม', a: 'ไม่ต้อง ข้ามขั้น 2 ได้ · ถ้ายังแก้ไม่ได้ ตั้ง Status เป็น Changes Requested หรือเขียนลงช่องหมายเหตุ · ส่งรอบใหม่ให้เพิ่มเลขในช่อง "รอบที่"' },
      { q: 'dev ทำเสร็จแล้วทำอะไรต่อ', a: 'ใช้ <code>/qa-check</code> เทียบของที่ dev ทำกับ design · ดูหมวด Design QA' }
    ]}
  ]
};

DATA.topic.dvcl = {
  parent: 'dv', color: 'green', icon: 'check',
  title: 'Checklist 7 ข้อ', tag: 'แต่ละข้อหมายถึงอะไร',
  lede: 'ทุกข้อมาจากปัญหาที่เคยหลุดไปถึง dev หรือ QA จริง · เพดานอยู่ที่ 7 ข้อ ถ้ายาวกว่านี้จะไม่มีใครใช้',
  blocks: [
    { k: 'table', head: ['#', 'ข้อ', 'เช็คว่า'], rows: [
      ['1', '<b>Annotation ครบ</b>', 'ทุกปุ่มและทุกจุดที่กดได้ มีคำอธิบายว่ากดแล้วเกิดอะไร'],
      ['2', '<b>Edge case ครบ</b>', 'ออกแบบกรณีไม่ปกติไว้แล้ว เช่น ไม่มีข้อมูล โหลดไม่ขึ้น ออฟไลน์<small>รวมถึงปุ่มที่ต้องซ่อนในกรณีนั้น</small>'],
      ['3', '<b>States ครบ</b>', 'ปุ่มและช่องต่าง ๆ มีหน้าตาตอนปกติ กด และใช้ไม่ได้<small>default / hover / active / disabled</small>'],
      ['4', '<b>ไม่ detach / ไม่ hardcode</b>', 'ผลตรวจจากขั้น 1 ไม่เหลือข้อต้องแก้'],
      ['5', '<b>Breakpoint ครบ</b>', 'ออกแบบครบทุกขนาดจอที่ต้องส่งรอบนี้'],
      ['6', '<b>Safe area</b>', 'เนื้อหาและปุ่มไม่ถูกแถบของระบบบัง เช่น แถบล่าง Android ขอบล่าง iOS'],
      ['7', '<b>ค่าที่ dev ต้องเดา</b>', 'ระบุให้ครบ เช่น ข้อความยาวสุดกี่ตัว ยาวเกินแล้วตัดยังไง<small>ถ้าตั้งใจไม่ให้แสดงอะไร ต้องเขียนว่า "ไม่แสดง" ห้ามเว้นว่าง</small>']
    ]},
    { k: 'note', t: '<b>ข้อ 1-2 ติ๊กมาให้ตั้งแต่แรก</b> เพราะทีมทำกันอยู่แล้ว เปิดมาจะเห็นว่าผ่านไปบางส่วน · แต่ข้อที่ติ๊กมาให้ถูกข้ามง่ายที่สุด <code>/deliver-kit</code> จึงเทียบกับผลตรวจและเตือนถ้าไม่ตรง' },
    { k: 'h', t: 'ข้อ 6-7 มาจากไหน', d: 'เพิ่มเมื่อ 17 ส.ค. 2026' },
    { k: 'p', t: 'เทียบ Design QA กับ bug ที่ QA เจอบน build ชุดเดียวกันของ B2C App พบปัญหาด้าน design หลุดไปถึง QA 10 เรื่อง และ<b>ไม่มีข้อไหนใน checklist 5 ข้อเดิมดักได้เลย</b>' },
    { k: 'table', head: ['ข้อ', 'ดักได้', 'เคสจริง'], rows: [
      ['6 Safe area', '2', 'หน้าหลักสูตรกับปุ่มรีวิว ถูกแถบล่าง Android บัง'],
      ['7 ค่าที่ dev ต้องเดา', '4', 'max length · ปุ่มกลับ · modal ซ้อน · ส่วนที่ dev ตอบว่า "ตามดีไซน์ ไม่มีการแสดง"'],
      ['2 (ขยายถ้อยคำ)', '2', 'คอร์สไม่มีรูปแต่ไม่มีภาพ default · ออฟไลน์แต่ปุ่มรีวิวยังโชว์']
    ]},
    { k: 'h', t: 'ศัพท์ที่เจอบ่อย' },
    { k: 'table', head: ['คำ', 'หมายถึง'], rows: [
      ['<code>hardcode</code>', 'ใส่ค่าสีหรือฟอนต์ตรง ๆ แทนที่จะเลือกจาก token / style ของ Design System'],
      ['<code>detach</code>', 'แยก component ออกจาก Design System พอ DS อัปเดต ตัวที่ detach จะไม่อัปเดตตาม'],
      ['<code>instance</code> / <code>master</code>', 'instance คือตัวที่ลากมาใช้ master คือต้นฉบับ แก้ที่ master แล้ว instance ทุกตัวเปลี่ยนตาม'],
      ['<code>placeholder</code>', 'ข้อความตัวอย่างในช่องที่ยังไม่ได้กรอก ใน Deliver Form อยู่ในวงเล็บ <code>[ ]</code>']
    ]}
  ]
};

DATA.topic.dvkit = {
  parent: 'dv', color: 'blue', icon: 'frame',
  title: 'Deliver Kit (Figma)', tag: 'หน้า Deliver · 4 ส่วน',
  lede: 'library ใน Figma ที่ /deliver-kit ใช้สร้างหน้า Deliver ในไฟล์งาน · ไม่ต้อง copy เอง ระบบสร้างให้',
  blocks: [
    { k: 'link', items: [
      { icon: 'frame', color: 'blue', t: 'Deliver Kit · Figma', d: 'ต้นฉบับ Checklist, ฟอร์ม และ Status · ไฟล์ Design QA master', to: 'https://www.figma.com/design/JB7nZD4KBOXX8q5QW3mucJ/-Master--Design-QA-Template?node-id=2027-2', up: 'publish 28 ก.ย. 2026' }
    ]},
    { k: 'img', src: 'IMG_DVPAGE_SRC', alt: 'หน้า Deliver ใน Figma มีลำดับขั้นตอน ป้าย Status การ์ด Audit Result, Deliver Form และ Handoff Checklist', cap: 'หน้า Deliver ตอนเพิ่งสร้าง ยังไม่ได้กรอกอะไร' },
    { k: 'table', head: ['ส่วน', 'มีอะไร', 'ใครเขียน'], rows: [
      ['Audit Result', 'ผลตรวจไฟล์ บอกว่าพร้อมส่งไหม ต้องแก้อะไร<small>เป็นเฟรมธรรมดา ไม่ใช่ component เพื่อให้ระบบเขียนลงได้</small>', 'ระบบ'],
      ['Handoff Checklist', '7 ข้อที่ต้องเช็คก่อนส่ง', 'คุณ'],
      ['Deliver Form', 'ใครออกแบบ ส่งวันไหน dev คนไหนรับ<small>Feature กับ Figma link ระบบกรอกให้</small>', 'ระบบ + คุณ'],
      ['Status', 'Draft · In Review · Ready for Dev · Changes Requested', 'คุณ']
    ]},
    { k: 'warn', t: '<b>ไฟล์ที่เคยใช้ Deliver Kit มาก่อนจะไม่อัปเดตเอง</b> · Figma → Assets → Libraries → Update ถึงจะเห็นข้อความรุ่นล่าสุด' },
    { k: 'note', t: '<b>Status เป็น component ไม่ใช่ text</b> · สแกนไฟล์แล้วนับได้อัตโนมัติว่ามีงาน Ready for Dev กี่ชิ้น ไม่ต้องให้ใครกรอกรายงานเพิ่ม' }
  ]
};

var DVRATCHAT = '<div class="cm"><div class="ct">ขั้น 3 · ร่างเหตุผล → ยืนยันทีละข้อ</div>' +
  '<div class="cmeta">01 · Chip กรองสถานะ</div>' +
  '<p style="margin:0 0 8px">ผู้เรียนที่มีคอร์สจำนวนมากหาคอร์สที่ต้องการไม่เจอ การกรองตามสถานะช่วยให้เห็นเฉพาะกลุ่มที่สนใจในแตะเดียว <b>(เดา)</b> เลือก Chip แทน Section เพราะหน้าไม่ยาวเกินเมื่อมีคอร์สเยอะ</p>' +
  '<div class="cg y">❓ decision log เดิมเขียนว่าแบ่ง Section แต่แบบจริงเป็น Chip เปลี่ยนเพราะอะไร</div>' +
  '<div class="tip">ตอบ "01 ok" หรือพิมพ์แก้</div></div>';

DATA.topic.dvrat = {
  parent: 'dv', color: 'purple', icon: 'target',
  title: 'Design Rationale', tag: 'เหตุผลการออกแบบ · บอร์ดใน Figma',
  lede: 'อธิบายว่าทำไมถึงออกแบบแบบนี้ พร้อมหลักฐาน วางเป็นบอร์ดข้างหน้าจอจริงในไฟล์ Figma ใช้ประกอบการ review และส่ง dev ต่อได้เลย',
  blocks: [
    { k: 'kv', items: [
      { l: 'เรียกด้วย', v: '<code>/rationale &lt;ลิงก์ Figma ของหน้าจอ&gt;</code> ใน Claude Code (design-brain) · ถามก่อนออกแบบได้โดยไม่ต้องมีลิงก์' },
      { l: 'ได้อะไร', v: 'บอร์ดในไฟล์: หน้าจอ + <b>หมุดเลข</b> + <b>การ์ดเหตุผล</b> แต่ละใบบอกเหตุผล หลักฐาน และสิ่งที่ยอมแลก' }
    ]},

    { k: 'h', t: 'ใช้เมื่อไหร่', d: 'ไม่ต้องทำทุกหน้า เลือกเฉพาะหน้าที่มี decision ที่คนน่าจะถามว่า "ทำไม" (ปกติ 1-3 หน้าต่อ feature · หน้าละ 3-6 ข้อ)' },
    { k: 'table', head: ['ใช้เมื่อ', 'โหมด', 'ได้อะไร'], rows: [
      ['<b>ก่อน UI review / ขอ approve</b><small>กรณีหลัก</small>', 'เขียนลงบอร์ด', 'หลักฐานของ decision ที่น่าจะถูกถาม ใช้ประกอบการนำเสนอ แล้วบอร์ดเดิมส่ง dev ต่อได้'],
      ['<b>decision ที่ยังไม่มั่นใจ</b>', 'ปรึกษา → ค่อยลงบอร์ด', 'หลักฐาน<b>ทั้งที่สนับสนุนและที่ค้าน</b> รู้ก่อน review ว่าข้อไหนแข็ง ข้อไหนอ่อน'],
      ['<b>ก่อนส่ง dev</b>', 'เขียนลงบอร์ด', '<code>/deliver-kit</code> ชวนให้ทำถ้ายังไม่มี'],
      ['<b>ยังไม่ได้ออกแบบ</b>', 'ปรึกษา', 'ทางเลือกพร้อมหลักฐาน ก่อนลงมือ']
    ]},
    { k: 'warn', t: '<b>ไม่มั่นใจ ห้ามใช้หาเหตุผลมารองรับ</b> · ระบบหาเหตุผลที่ฟังดูดีได้ทุกครั้ง บอร์ดจะดูหนักแน่นทั้งที่ decision อาจผิด · ใช้โหมดปรึกษาก่อน ถ้าหลักฐานค้าน ให้กลับไปปรับแบบ หรือยกไปคุยตอน review ว่า "ข้อนี้ยังไม่แน่ใจ"' },
    { k: 'p', t: '<b>ไม่ต้องใช้:</b> แก้เล็กน้อย (ข้อความ ระยะ bug) · ใช้ pattern มาตรฐานของ Design System ทั้งหน้า · ยังลองหลายแบบอยู่' },

    { k: 'h', t: 'สิ่งที่ได้ตอนจบ', d: 'ตัวอย่างจริง: B2C App หน้า My Course · หมุดเลขบนหน้าจอตรงกับเลขการ์ด' },
    { k: 'img', src: 'IMG_DVRATBOARD_SRC', alt: 'บอร์ด Design Rationale หน้า My Course: แถบซ้าย หน้าจอพร้อมหมุด 01-03 และการ์ดเหตุผล 3 ใบ', cap: 'บอร์ด <code>Design Review - My Course</code> ในไฟล์ B2C Application หน้า Design Rationale' },

    { k: 'h', t: 'ขั้นตอน', d: 'ระบบทำ 4 ขั้น คุณทำ 2 ขั้น · ทำเสร็จแต่ละขั้นตอบในแชท' },
    { k: 'srow', n: 1, t: 'อ่านบริบท', who: [['a', 'ระบบทำ']], dl: [
        ['ระบบอ่าน', 'หน้าจอจาก Figma · PRD / AC จาก Jira · persona และ decision เดิมของ BU ใน design-brain'],
        ['เก็บไว้', 'แต่ละข้อมูลมาจากไหน เพื่อใช้เป็นหลักฐานป้าย Project']
      ] },
    { k: 'srow', n: 2, t: 'เลือก decision', who: [['a', 'ระบบเสนอ'], ['h', 'คุณเลือก']], mine: true, dl: [
        ['ระบบเสนอ', 'decision ที่คนน่าจะถาม 3-6 ข้อ พร้อมบอกว่าข้อไหนมีหลักฐานจริงรองรับ'],
        ['คุณทำ', 'ตอบเป็นเลข เช่น "1, 3, 4" · เพิ่มข้อที่ระบบไม่เห็นได้']
      ] },
    { k: 'srow', n: 3, t: 'ยืนยันเหตุผล', who: [['h', 'คุณทำ']], mine: true, dl: [
        ['ระบบร่าง', 'เหตุผลให้ก่อน ส่วนที่ไม่มีที่มาติดป้าย <b>(เดา)</b>'],
        ['คุณทำ', '<b>ยืนยันหรือแก้ทีละข้อ</b> ข้อที่ไม่ยืนยันจะไม่ลงบอร์ด · ถ้าระบบถามข้อเท็จจริง เช่น ตัวเลขบนการ์ดคืออะไร ต้องตอบก่อน']
      ], html: DVRATCHAT, cap: 'ตัวอย่างจากการทดสอบหน้า My Course' },
    { k: 'srow', n: 4, t: 'หลักฐาน + วางบอร์ด', who: [['a', 'ระบบทำ']], dl: [
        ['Sources', '2-4 ข้อต่อการ์ด ติดป้าย 7 แบบ · <b>Project / Data ต้องมีที่มาจริง ห้ามแต่ง</b>'],
        ['วางลงไฟล์', 'ถามที่วางก่อน แล้ววางหน้าจอ + หมุดเลข + การ์ด'],
        ['หลักฐานค้าน', 'บอกคุณก่อนเขียนบอร์ด ไม่เลือกเฉพาะหลักฐานที่สนับสนุน']
      ], img: { src: 'IMG_DVRATCARD_SRC', alt: 'การ์ด Design Rationale 03 ความยาวคอร์สและ Progress bar พร้อม Sources 4 ข้อ และ Trade-offs', cap: 'การ์ด 1 ใบ = 1 decision · Rationale · Sources · Trade-offs ที่ยอมรับ' } },

    { k: 'h', t: 'ป้าย Source 7 แบบ', d: 'บอกว่าเหตุผลนี้อ้างอิงจากอะไร' },
    { k: 'table', head: ['ป้าย', 'ใช้เมื่ออ้างอิง', 'ตัวอย่าง'], rows: [
      ['Heuristic', 'Nielsen 10 ข้อ', 'Nielsen #1 Visibility of System Status'],
      ['Principle', 'หลักการออกแบบพื้นฐาน', 'Visual Hierarchy · Progressive Disclosure'],
      ['Research', 'ทฤษฎีหรืองานวิจัยที่มีชื่อผู้คิด', 'BJ Fogg · Fitts\'s Law · Goal-Gradient'],
      ['Expert', 'guideline ทางการ', 'Apple HIG · Material Design · WCAG'],
      ['Benchmark', 'แอปอื่นทำแบบนี้', 'Duolingo · Coursera · Spotify'],
      ['Project', 'เอกสารของโปรเจกต์<small>ต้องมีที่มาจริง</small>', 'PRD · AC ใน Jira · persona'],
      ['Data', 'ตัวเลขจริงของเรา<small>ต้องมีที่มาจริง</small>', 'Analytics · Dashboard · ผล QA']
    ]},

    { k: 'h', t: 'สิ่งที่ระบบจะไม่ทำ' },
    { k: 'nolist', items: [
      '<b>ไม่แต่งเหตุผลแทนคุณ</b> ทุกข้อต้องผ่านการยืนยัน',
      '<b>ไม่แต่งตัวเลขหรือชื่อเอกสาร</b> ในป้าย Project / Data',
      '<b>ไม่แนะนำว่าควรปรับอะไร</b> ใช้ <code>/critique</code> แทน',
      '<b>ไม่แตะเฟรมงานออกแบบ</b> เขียนได้เฉพาะบอร์ด rationale'
    ]},

    { k: 'link', items: [
      { icon: 'frame', color: 'purple', t: 'Design Rationale Template · Figma', d: 'library การ์ด · ป้าย Source · หมุดเลข', to: 'https://www.figma.com/design/G7q7EuE251iSoap0YzNsm8/-Master--Design-Rationale-Template?node-id=2001-873', up: 'publish 28 ก.ย. 2026' },
      { icon: 'target', color: 'orange', t: 'ตัวอย่างจริง · B2C App', d: 'Homepage · Curriculum · My Course', to: 'https://www.figma.com/design/e9cWDHGiXcZoCYzgTfPfQY/-B2C--B2C-Application?node-id=2859-4308', up: '3 บอร์ด' }
    ]}
  ]
};
