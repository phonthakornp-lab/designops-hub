/* ---------- ตั้งค่าครั้งแรก ---------- */
DATA.topic.setup = {
  parent: 'tools', color: 'amber', icon: 'wrench',
  title: 'ตั้งค่าครั้งแรก', tag: 'ทำครั้งเดียวต่อเครื่อง',
  lede: 'ใช้อ้างอิงเท่านั้น หากเครื่องยังไม่ครบ /qa-check จะแจ้งเอง ควรตั้งค่าล่วงหน้า',
  blocks: [
    { k: 'h', t: 'สิ่งที่ต้องติดตั้งตามบทบาท', d: 'ไม่จำเป็นต้องติดตั้งครบทุกรายการ' },
    { k: 'table', head: ['บทบาท', 'ต้องมี', 'เวลาที่ใช้'], rows: [
      ['<b>ผู้รับผิดชอบ Design QA ประจำ</b>', 'Figma MCP + <b>Playwright</b> + <b>gcloud</b>', '~30 นาที ครั้งเดียว'],
      ['ทำ QA เป็นครั้งคราว', 'Figma MCP อย่างเดียว', '~5 นาที'],
      ['อ่าน playbook / ดูผลเท่านั้น', 'ไม่ต้องติดตั้ง', '—']
    ]},
    { k: 'note', t: 'พิมพ์ <code>/qa-check</code> ได้ทันที หากเครื่องยังไม่ครบ ระบบแจ้งรายการที่ขาด · <b>เมื่อยืนยันแล้วระบบติดตั้งให้</b> (ยกเว้นขั้น login ในเบราว์เซอร์) และทำ QA ต่อทันที' },

    { k: 'h', t: '1 · Figma MCP', d: 'จำเป็นสำหรับทุกคน' },
    { k: 'list', items: [
      'เชื่อมต่อแบบ remote ตามขั้นตอนใน <b>tooling-setup</b> ของ design-brain',
      '<b>ไม่ต้องใช้ Desktop Bridge</b> เนื่องจาก <code>use_figma</code> รองรับทั้งการอ่านและเขียน',
      'ทดสอบการเชื่อมต่อโดยให้ Claude อ่าน frame ใดก็ได้ 1 frame'
    ]},

    { k: 'h', t: '2 · Playwright', d: 'แคปหน้าเว็บเต็มหน้าหลาย breakpoint อัตโนมัติ' },
    { k: 'code', t: 'npm i -g playwright\nnpx playwright install chromium' },
    { k: 'note', t: 'คำสั่งที่สองดาวน์โหลด Chromium ~150MB ใช้เวลานานที่สุด <b>สามารถรันทิ้งไว้ได้</b>' },

    { k: 'h', t: '3 · gcloud', d: 'ให้ระบบบันทึกผลลง Google Sheet' },
    { k: 'code', t: 'brew install --cask google-cloud-sdk\ngcloud auth login' },
    { k: 'ok', t: '<b>ใช้ <code>gcloud auth login</code> เท่านั้น ไม่ต้องใช้ <code>application-default login</code></b> ยืนยันจากการทำ QA ครบรอบจริง (18 ส.ค.) · service account key และ ADC ใช้ไม่ได้' },
    { k: 'p', t: 'ตรวจสอบบัญชีที่เครื่องใช้:' },
    { k: 'code', t: 'gcloud auth list --format="value(account)"' },
    { k: 'warn', t: '<b>แชร์ Sheet สิทธิ์ Editor ให้บัญชีที่แสดงจากคำสั่งนี้</b> ไม่ใช่บัญชีผู้อื่นหรือบัญชีกลาง · หากผิดบัญชีจะเขียนไม่ได้โดย error ไม่ระบุสาเหตุ' },
    { k: 'warn', t: '<b>token มีอายุประมาณ 1 ชั่วโมง</b> หากหมดอายุ ให้รัน <code>gcloud auth login</code> ใหม่แล้วทำต่อ' },

    { k: 'h', t: 'ทางเลือกเมื่อไม่ได้ติดตั้ง', d: 'ได้ผลเหมือนกัน แต่ต้องทำด้วยมือ' },
    { k: 'table', head: ['ไม่มี', 'ทางเลือก', 'ข้อจำกัด'], rows: [
      ['Playwright', 'ใช้ Chrome DevTools คำสั่ง <b>Capture full size screenshot</b> เพื่อแคปเต็มหน้า', 'ทำทีละ breakpoint · ผลแต่ละรอบอาจไม่ตรงกัน'],
      ['gcloud', 'ระบบสร้างตารางในแชท แล้วคัดลอกไปวางใน Sheet', 'ใช้เวลากรอก · เสี่ยงวางผิดคอลัมน์'],
      ['Pillow', 'ใช้เฉพาะ native app ที่ต้องต่อภาพ scroll ไม่จำเป็นสำหรับเว็บ', '—']
    ]},
    { k: 'warn', t: '<b>ต้องแคปเต็มหน้าเสมอ</b> เนื่องจาก Design Spec เป็นหน้าเต็ม ภาพหน้าจอเดียวเทียบตำแหน่งข้ามคอลัมน์ไม่ได้' },

    { k: 'h', t: 'ตรวจสอบก่อนเริ่มงาน' },
    { k: 'code', t: 'playwright --version\ngcloud auth list --format="value(account)"' },
    { k: 'p', t: 'แสดงผลครบสองบรรทัด = พร้อมทำครบรอบ · หากไม่ครบยังเริ่มได้ ระบบจะแนะนำทางเลือก' }
  ]
};

DATA.sec.tools = { setupCard: true };
