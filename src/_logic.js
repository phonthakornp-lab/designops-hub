function esc(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function ic(n) { return I[n] || I.doc; }
function route() { return (location.hash || '#/').replace(/^#\/?/, ''); }

/* ---------- sidebar ---------- */
function sidebar(active) {
  var items = DATA.nav.map(function (n) {
    if (n.sep) return '<div class="navsep">' + esc(n.sep) + '</div>';
    var on = (n.id === active);
    return '<button class="ni' + (on ? ' on' : '') + (n.off ? ' off' : '') + '"' +
      ' data-go="' + esc(n.id) + '"' + (n.off ? ' aria-disabled="true"' : '') + '>' +
      '<span class="ic">' + ic(n.icon) + '</span>' + esc(n.label) +
      (n.dot ? '<span class="dot" title="พักไว้ก่อน"></span>' : '') + '</button>';
  }).join('');
  return '<nav class="nav">' +
    '<button class="brand" data-go=""><span class="sq">◆</span>DesignOps</button>' +
    '<div class="navlist">' + items + '</div>' +
    '</nav>';
}

/* ---------- ชิ้นส่วน ---------- */
function head(s, crumb) {
  return (crumb || '') +
    '<div class="shead ' + (s.color || '') + '">' +
    '<div class="badge">' + ic(s.icon) + '</div>' +
    '<div><h1>' + esc(s.title) + '</h1><p class="tagline">' + esc(s.tag) + '</p></div></div>' +
    (s.lede ? '<p class="lede">' + esc(s.lede) + '</p>' : '');
}

function topicCard(t, secId) {
  var arw = t.goTool ? '→' : (t.ext ? '↗' : (t.id ? '→' : ''));
  var inner =
    '<span class="ico">' + ic(t.icon) + '</span>' +
    '<span class="t">' + esc(t.t) + '</span>' +
    '<span class="d">' + (t.html ? t.d : esc(t.d)) + '</span>' +
    (t.up ? '<span class="up">' + esc(t.up) + '</span>' : '') +
    (arw ? '<span class="arw">' + arw + '</span>' : '') +
    (t.wait ? '<span class="badge2">' + esc(t.wait) + '</span>' : '');
  var cls = 'tc ' + (t.color || '');
  if (t.goTool) return '<button class="' + cls + '" data-go="tools/' + t.goTool + '">' + inner.replace('<span class="arw">↗</span>', '<span class="arw">→</span>') + '</button>';
  if (t.ext) return '<a class="' + cls + '" href="' + t.ext + '" target="_blank" rel="noopener">' + inner + '</a>';
  if (t.id) return '<button class="' + cls + '" data-go="' + secId + '/' + t.id + '">' + inner + '</button>';
  return '<div class="' + cls + ' off">' + inner + '</div>';
}


/* ---------- card เครื่องมือ (ย่อ) — กดเข้าหน้าเต็ม ---------- */
function toolCard(key) {
  var t = DATA.tool[key];
  if (!t) return '';
  return '<button class="tool" data-go="tools/' + key + '">' +
    '<div class="th"><span class="ti">' + ic('wrench') + '</span>' +
    '<div><div class="tt">' + esc(t.title) + '</div>' +
    '<code class="tcmd">/' + esc(t.cmd) + '</code></div>' +
    '<span class="tarw">→</span></div>' +
    '<div class="td">' + esc(t.lede) + '</div>' +
    '<div class="tm">' + t.modes.map(function (m) {
      return '<span class="tmode' + (m.wk === 'write' ? ' w' : '') + '">' + esc(m.m) + (m.wk === 'write' ? ' ✎' : '') + '</span>';
    }).join('') + '</div>' +
    '<div class="tsc">' + (t.modes.filter(function (m) { return m.wk === 'write'; }).length
      ? '✎ = mode ที่แก้ไขไฟล์จริง' : 'ไม่มี mode ที่แก้ไขไฟล์จริง') + '</div>' +
    '</button>';
}

function lockBox(l) {
  return '<div class="locknote"><div class="t">' + esc(l.t) + '</div><div class="d">' + esc(l.d) + '</div>' +
    '<ol>' + l.todo.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ol></div>';
}

/* ---------- Overview ---------- */
function viewHome() {
  var secs = ['ds', 'qa', 'dv'];
  var open = 0, total = 0;
  secs.forEach(function (k) {
    DATA.sec[k].topics.forEach(function (t) { total++; if (!t.wait) open++; });
  });
  var cards = secs.map(function (k) {
    var s = DATA.sec[k];
    var ready = s.topics.filter(function (t) { return !t.wait; }).length;
    return topicCard({
      id: k, icon: s.icon, color: s.color, t: s.title, d: s.tag,
    }, '');
  }).join('');

  return '<div class="inner">' +
    head({ icon: 'home', title: 'DesignOps', tag: 'playbook · เอกสารอ้างอิง · ลิงก์ต้นฉบับ', color: '',
           lede: 'ศูนย์รวมแนวทางและเอกสารของ DesignOps สำหรับทีม' }) +
    '<div class="block"><h2 class="sec">ทำไมต้องมี</h2>' +
      blocks([{ k: 'why', p: 'เอกสารอยู่หลายที่ (Confluence · design-brain · Figma) แต่ละคนทำงานคนละวิธี และปัญหาด้าน design มักไปพบในขั้น QA', g: 'ทุกคนทำงานตาม<b>process เดียวกัน</b> และหาเอกสารได้จากจุดเดียว เพื่อพบปัญหาด้าน design ให้เร็วที่สุด', r: 'Process ใน Hub ทดสอบกับงานจริงของ <b>B2C App</b> แล้วทั้งหมด' }]) + '</div>' +
    '<div class="block"><h2 class="sec">ขั้นตอนของงาน</h2>' +
      '<p class="sec-lede">เส้นประม่วง = ทำเมื่อจำเป็น · เส้นประฟ้า = ย้อนกลับไปแก้ต้นทาง</p>' +
      '<div class="flowbox">' + FLOW_HOME + '</div></div>' +
    '<div class="block"><h2 class="sec">Playbook</h2>' +
    '<p class="sec-lede">เลือกหัวข้อที่ต้องการ</p>' +
    '<div class="cardgrid">' + cards + '</div></div>' +
    '<div class="block"><h2 class="sec">ก่อนใช้ครั้งแรก</h2>' +
      '<p class="sec-lede">ทำครั้งเดียวต่อเครื่อง</p>' +
      '<div class="cardgrid">' + topicCard({ id: 'setup', icon: 'wrench', color: 'amber',
        t: 'ตั้งค่าครั้งแรก', d: 'สิ่งที่ต้องติดตั้ง · คำสั่ง · ทางเลือก', up: '5–30 นาที ตามบทบาท' }, 'tools') + '</div></div>' +
    '<div class="note"><b>→</b> หน้าภายในเว็บไซต์ · <b>↗</b> ลิงก์ไปยังต้นฉบับภายนอก</div>' +
    foot() + '</div>';
}

/* ---------- section ---------- */
function viewSec(id) {
  var s = DATA.sec[id];
  if (!s) return viewHome();
  var crumb = '<div class="crumb"><button data-go="">DesignOps</button><span class="sep">/</span><span>' + esc(s.title) + '</span></div>';
  var body = head(s, crumb) +
    (s.skill ? '<p class="sec-lede" style="margin-top:10px">ใช้คำสั่ง <code>/' + esc(s.skill) + '</code> ใน Claude</p>' : '');
  if (s.lock) body += lockBox(s.lock);
  if (s.summary) {
    body += '<div class="stats" style="margin-top:26px">' + s.summary.map(function (x, i) {
      return '<div class="stat' + (i === 0 ? ' hero' : '') + '"><div class="lbl">' + esc(x.l) + '</div>' +
        '<div class="big">' + esc(x.b) + '</div><div class="sub">' + esc(x.s) + '</div></div>';
    }).join('') + '</div>';
  }

  if (s.topics.length) {
    body += '<div class="block"><h2 class="sec">' + esc(s.docsHd || 'หัวข้อในหมวดนี้') + '</h2>' +
      '<p class="sec-lede">' + esc(s.docsLede || '') + '</p>' +
      '<div class="cardgrid">' + s.topics.map(function (t) { return topicCard(t, id); }).join('') + '</div></div>';
  }
  if (s.tools && s.tools.length) {
    body += '<div class="block"><h2 class="sec">เครื่องมือ</h2>' +
      '<p class="sec-lede">คำสั่งที่พิมพ์ใน Claude</p>' +
      '<div class="tools">' + s.tools.map(toolCard).join('') + '</div></div>';
  }
  return '<div class="inner">' + body + foot() + '</div>';
}

/* ---------- topic ---------- */
function viewTopic(secId, topId) {
  var t = DATA.topic[topId];
  if (!t) return viewSec(secId);
  var parent = DATA.sec[t.parent];
  var crumb = '<div class="crumb"><button data-go="">DesignOps</button><span class="sep">/</span>' +
    '<button data-go="' + t.parent + '">' + esc((parent && parent.title) || (t.parent === 'tools' ? 'เครื่องมือ' : t.parent)) + '</button><span class="sep">/</span>' +
    '<span>' + esc(t.title) + '</span></div>';
  var body = head(t, crumb);

  if (t.start && t.start.length) {
    body += '<div class="block first"><h2 class="sec">เริ่มต้นใช้งาน</h2>' +
      '<p class="sec-lede">เลือกกรณีที่ตรงกับงาน</p>' +
      '<div class="entries">' + t.start.map(function (e) {
        return '<a class="entry" href="' + e.to + '" target="_blank" rel="noopener">' +
          '<div class="c">กรณี</div><div class="q">' + esc(e.q) + '</div>' +
          '<div class="a">' + esc(e.a) + '</div><div class="go">' + esc(e.label) + ' ↗</div></a>';
      }).join('') + '</div></div>';
  }

  if (t.cards && t.cards.length) {
    body += '<div class="block' + (t.start ? '' : ' first') + '"><h2 class="sec">' + esc(t.cardsHd || 'เอกสาร') + '</h2>' +
      '<p class="sec-lede">' + esc(t.cardsLede || '') + '</p>' +
      '<div class="cardgrid">' + t.cards.map(function (c) { return topicCard(c, secId); }).join('') + '</div>' +
      (t.note && !t.records ? '<div class="note">⚠️ ' + t.note + '</div>' : '') + '</div>';
  }

  if (t.records && t.records.length) {
    body += '<div class="block"><h2 class="sec">License Record รายฟอนต์</h2>' +
      '<p class="sec-lede">1 ใบ = 1 license · สถานะต้องตรงกับทะเบียนกลาง</p>' +
      '<div class="items">' + t.records.map(function (r) {
        return '<a class="item" href="' + r.to + '" target="_blank" rel="noopener"><span class="arw">↗</span>' +
          '<div class="t">' + esc(r.t) + ' <span style="font-weight:400;font-size:.85rem">' + esc(r.st) + '</span></div>' +
          '<div class="w">' + esc(r.w) + '</div>' +
          '<div class="m"><span class="src">Confluence · UXUI Team</span><span>·</span><span>อัปเดต ' + esc(r.up) + '</span></div></a>';
      }).join('') + '</div>' +
      (t.note ? '<div class="note">⚠️ ' + t.note + '</div>' : '') + '</div>';
  }

  if (t.blocks) body += '<div class="prose">' + blocks(t.blocks) + '</div>';

  if (t.legend && t.legend.length) {
    body += '<div class="block"><h2 class="sec">ความหมายของสถานะ</h2>' +
      '<p class="sec-lede">ใช้ทั้งในทะเบียนกลางและ License Record</p>' +
      '<div class="legend">' + t.legend.map(function (l) {
        return '<div class="lg"><div class="s">' + esc(l.s) + '</div><div class="x">' + esc(l.x) + '</div></div>';
      }).join('') + '</div></div>';
  }

  return '<div class="inner">' + body + foot() + '</div>';
}


/* ---------- หน้ารวมเครื่องมือ ---------- */
function viewTools() {
  var keys = Object.keys(DATA.tool);
  var chain = DATA.toolChain.map(function (c, i) {
    return (i ? '<div class="arrow">→</div>' : '') +
      '<div class="cstep"><code>/' + esc(c.cmd) + '</code><div class="cm">' + esc(c.mode) + '</div>' +
      '<div class="cn">' + esc(c.n) + '</div></div>';
  }).join('');
  var cards = keys.map(function (k) {
    var t = DATA.tool[k];
    var writes = t.modes.filter(function (m) { return m.wk === 'write'; }).length;
    return topicCard({
      id: k, icon: t.icon, color: t.color, t: '/' + t.cmd, d: t.title + ' — ' + t.tag,
      up: t.modes.length + ' mode' + (writes ? ' · ' + writes + ' mode แก้ไขไฟล์จริง' : ''),
      wait: t.proof.ok ? null : 'ยังไม่เคยใช้งาน'
    }, 'tools');
  }).join('');

  return '<div class="inner">' +
    head({ icon: 'wrench', title: 'เครื่องมือ', tag: 'คำสั่งที่พิมพ์ใน Claude', color: '',
           lede: 'คำสั่งที่ทำงานกับไฟล์จริง แต่ละคำสั่งระบุ mode ที่แก้ไขไฟล์' }) +
    '<div class="block first"><h2 class="sec">ลำดับการใช้งาน</h2>' +
      '<p class="sec-lede">ลำดับปกติของงาน 1 ชิ้น</p>' +
      '<div class="flowbox">' + FLOW_TOOLS + '</div></div>' +
    '<div class="block"><h2 class="sec">เครื่องมือทั้งหมด</h2>' +
      '<p class="sec-lede">สิ่งที่ต้องเตรียมและขอบเขตการแก้ไขของแต่ละคำสั่ง</p>' +
      '<div class="cardgrid">' + cards + '</div></div>' +
    '<div class="block"><h2 class="sec">ก่อนใช้ครั้งแรก</h2>' +
      '<p class="sec-lede">ทำครั้งเดียวต่อเครื่อง</p>' +
      '<div class="cardgrid">' + topicCard({ id: 'setup', icon: 'wrench', color: 'amber',
        t: 'ตั้งค่าครั้งแรก', d: 'สิ่งที่ต้องติดตั้ง · คำสั่ง · ทางเลือก', up: '5–30 นาที ตามบทบาท' }, 'tools') + '</div></div>' +
    foot() + '</div>';
}

/* ---------- หน้าเครื่องมือรายตัว ---------- */
function viewTool(key) {
  var t = DATA.tool[key];
  if (!t) return viewTools();
  var crumb = '<div class="crumb"><button data-go="">DesignOps</button><span class="sep">/</span>' +
    '<button data-go="tools">เครื่องมือ</button><span class="sep">/</span><span>/' + esc(t.cmd) + '</span></div>';

  var WK = { read: ['อ่านอย่างเดียว', 'read'], write: ['แก้ไขไฟล์จริง', 'write'], safe: ['ไม่แก้ไขไฟล์จริง', 'safe'] };
  var modes = t.modes.map(function (m) {
    var w = WK[m.wk] || WK.safe;
    return '<div class="mrow ' + w[1] + '">' +
      '<div class="mn">' + esc(m.m) + (m.dflt ? '<span class="dflt">ค่าเริ่มต้น</span>' : '') + '</div>' +
      '<div class="md">' + esc(m.d) + '</div>' +
      '<div class="mw"><span class="wtag ' + w[1] + '">' + esc(w[0]) + '</span><span class="wx">' + esc(m.w) + '</span></div>' +
      '</div>';
  }).join('');

  var prep = t.prep.map(function (p, i) {
    return '<div class="prow"><div class="pn">' + (i + 1) + '</div>' +
      '<div><div class="pt">' + esc(p.t) + '</div><div class="pw">' + esc(p.w) + '</div></div></div>';
  }).join('');

  var rules = t.rules.map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('');

  return '<div class="inner">' +
    crumb +
    '<div class="shead ' + (t.color || '') + '"><div class="badge">' + ic(t.icon) + '</div>' +
    '<div><h1>/' + esc(t.cmd) + '</h1><p class="tagline">' + esc(t.title) + ' · ' + esc(t.tag) + '</p></div></div>' +
    '<p class="lede">' + esc(t.lede) + '</p>' +

    '<div class="kv2">' +
      '<div class="kv"><div class="kvl">ช่วงเวลาที่ใช้</div><div class="kvv">' + esc(t.when) + '</div></div>' +
      '<div class="kv"><div class="kvl">วิธีเริ่มใช้งาน</div><div class="kvv">' + esc(t.type) + '</div></div>' +
    '</div>' +

    '<div class="proof ' + (t.proof.ok ? 'ok' : 'no') + '">' +
      '<div class="pl">' + (t.proof.ok ? '✅ ' : '⬜ ') + esc(t.proof.t) + '</div>' +
      '<div class="pd">' + esc(t.proof.d) + '</div></div>' +

    '<div class="block"><h2 class="sec">mode และขอบเขตการแก้ไข</h2>' +
      '<p class="sec-lede">ตรวจสอบ column ขวาก่อนใช้งาน</p>' +
      '<div class="modes">' + modes + '</div></div>' +

    '<div class="block"><h2 class="sec">สิ่งที่ต้องเตรียม</h2>' +
      '<p class="sec-lede">ระบบตรวจสอบก่อน และขอเฉพาะข้อมูลที่ขาด</p>' +
      '<div class="preps">' + prep + '</div></div>' +

    '<div class="block"><h2 class="sec">ข้อกำหนด</h2>' +
      '<p class="sec-lede">ระบบปฏิบัติตามข้อกำหนดนี้</p>' +
      '<ul class="rules">' + rules + '</ul>' +
      (t.notdo ? '<div class="note" style="margin-top:16px"><b>สิ่งที่ระบบไม่ทำ</b> — ' + esc(t.notdo) + '</div>' : '') +
    '</div>' +
    foot() + '</div>';
}

function foot() {
  return '<footer>DesignOps · SkillLane UX/UI — ปรับปรุง ' + esc(DATA.updated) +
    ' · <a href="' + DATA.roadmap + '" target="_blank" rel="noopener">Roadmap 2026 ↗</a>' +
    ' · หากพบลิงก์เสียหรือข้อมูลไม่เป็นปัจจุบัน กรุณาแจ้ง DesignOps</footer>';
}

function render() {
  var r = route(), parts = r.split('/').filter(Boolean);
  var active = parts[0] || '', main;
  if (parts[0] === 'tools') main = parts[1] ? (parts[1] === 'setup' ? viewTopic('tools', 'setup') : viewTool(parts[1])) : viewTools();
  else if (parts.length >= 2) main = viewTopic(parts[0], parts[1]);
  else if (parts.length === 1) main = viewSec(parts[0]);
  else main = viewHome();
  document.body.innerHTML = '<div class="shell">' + sidebar(active) + '<div class="main">' + main + '</div></div>';
  window.scrollTo(0, 0);
}

document.addEventListener('click', function (e) {
  var b = e.target.closest('[data-go]');
  if (!b || b.getAttribute('aria-disabled') === 'true') return;
  e.preventDefault();
  location.hash = '/' + b.getAttribute('data-go');
});
window.addEventListener('hashchange', render);
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
else render();
