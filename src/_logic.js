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
  var arw = t.ext ? '↗' : (t.id ? '→' : '');
  var inner =
    '<span class="ico">' + ic(t.icon) + '</span>' +
    '<span class="t">' + esc(t.t) + '</span>' +
    '<span class="d">' + esc(t.d) + '</span>' +
    (t.up ? '<span class="up">' + esc(t.up) + '</span>' : '') +
    (arw ? '<span class="arw">' + arw + '</span>' : '') +
    (t.wait ? '<span class="badge2">' + esc(t.wait) + '</span>' : '');
  var cls = 'tc ' + (t.color || '');
  if (t.ext) return '<a class="' + cls + '" href="' + t.ext + '" target="_blank" rel="noopener">' + inner + '</a>';
  if (t.id) return '<button class="' + cls + '" data-go="' + secId + '/' + t.id + '">' + inner + '</button>';
  return '<div class="' + cls + ' off">' + inner + '</div>';
}


/* ---------- การ์ดเครื่องมือ (ย่อ) — กดเข้าหน้าเต็ม ---------- */
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
      ? '✎ = โหมดที่เขียนของจริง · กดดูรายละเอียดก่อนใช้' : 'ไม่มีโหมดไหนเขียนของจริง') + '</div>' +
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
      up: ready + ' / ' + s.topics.length + ' พร้อมใช้'
    }, '');
  }).join('');

  return '<div class="inner">' +
    head({ icon: 'home', title: 'DesignOps', tag: 'playbook · ของอ้างอิง · ทางเข้าต้นฉบับ', color: '',
           lede: 'ที่รวมทุกอย่างที่ DesignOps ต้องส่งต่อให้ทีม — วิธีทำงานแต่ละเรื่อง และของอ้างอิงว่าตัวจริงอยู่ที่ไหน' }) +
    '<div class="stats">' +
      '<div class="stat hero"><div class="lbl">รายการพร้อมใช้</div><div class="big">' + open + ' / ' + total + '</div><div class="sub">ที่เหลือกำลังเตรียม</div></div>' +
      '<div class="stat"><div class="lbl">หมวดใน Playbook</div><div class="big">' + secs.length + '</div><div class="sub">คู่กับ skill ที่ทีมใช้อยู่</div></div>' +
      '<div class="stat"><div class="lbl">สำเนาที่เว็บนี้เก็บเอง</div><div class="big">0</div><div class="sub">ลิงก์ออกทั้งหมด ไม่มีของเก่าค้าง</div></div>' +
      '<div class="stat"><div class="lbl">ปลายทาง</div><div class="big">4</div><div class="sub">Confluence · Figma · design-brain · Jira</div></div>' +
    '</div>' +
    '<div class="block"><h2 class="sec">Playbook</h2>' +
    '<p class="sec-lede">เลือกเรื่องที่กำลังจะทำ · ชื่อหมวดตรงกับชื่อ skill ที่พิมพ์ในเทอร์มินัล</p>' +
    '<div class="cardgrid">' + cards + '</div></div>' +
    '<div class="note"><b>เว็บนี้ไม่เก็บเนื้อหา</b> — ทุกการ์ดพาไปหาต้นฉบับที่ของอยู่จริง เพื่อไม่ให้เกิดสำเนาที่เก่าโดยไม่มีใครรู้ · การ์ด ↗ = ออกไปข้างนอก · → = หน้าในเว็บนี้</div>' +
    foot() + '</div>';
}

/* ---------- section ---------- */
function viewSec(id) {
  var s = DATA.sec[id];
  if (!s) return viewHome();
  var crumb = '<div class="crumb"><button data-go="">DesignOps</button><span class="sep">/</span><span>' + esc(s.title) + '</span></div>';
  var body = head(s, crumb) +
    (s.skill ? '<p class="sec-lede" style="margin-top:10px">เรียกด้วย <code>/' + esc(s.skill) + '</code> ใน Claude</p>' : '');
  if (s.lock) body += lockBox(s.lock);
  if (s.topics.length) {
    body += '<div class="block"><h2 class="sec">' + esc(s.docsHd || 'เรื่องในหมวดนี้') + '</h2>' +
      '<p class="sec-lede">' + esc(s.docsLede || 'การ์ดที่มี ↗ จะเปิดต้นฉบับข้างนอก · การ์ดที่มี → เป็นหน้าย่อยในเว็บนี้') + '</p>' +
      '<div class="cardgrid">' + s.topics.map(function (t) { return topicCard(t, id); }).join('') + '</div></div>';
  }
  if (s.tools && s.tools.length) {
    body += '<div class="block"><h2 class="sec">เครื่องมือ</h2>' +
      '<p class="sec-lede">ไม่ใช่เอกสาร — เป็นคำสั่งที่พิมพ์ใน Claude แล้วมันทำงานกับไฟล์จริงให้</p>' +
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
    '<button data-go="' + t.parent + '">' + esc(parent.title) + '</button><span class="sep">/</span>' +
    '<span>' + esc(t.title) + '</span></div>';
  var body = head(t, crumb);

  if (t.start && t.start.length) {
    body += '<div class="block first"><h2 class="sec">คุณกำลังจะทำอะไร</h2>' +
      '<p class="sec-lede">เลือกข้อที่ตรงกับสถานการณ์ แล้วกดไปที่ต้นฉบับได้เลย</p>' +
      '<div class="entries">' + t.start.map(function (e) {
        return '<a class="entry" href="' + e.to + '" target="_blank" rel="noopener">' +
          '<div class="c">ถ้าคุณ</div><div class="q">' + esc(e.q) + '</div>' +
          '<div class="a">' + esc(e.a) + '</div><div class="go">' + esc(e.label) + ' ↗</div></a>';
      }).join('') + '</div></div>';
  }

  if (t.cards && t.cards.length) {
    body += '<div class="block' + (t.start ? '' : ' first') + '"><h2 class="sec">' + esc(t.cardsHd || 'เอกสาร') + '</h2>' +
      '<p class="sec-lede">' + esc(t.cardsLede || 'กดแล้วเปิดต้นฉบับ ไม่ใช่สำเนา') + '</p>' +
      '<div class="cardgrid">' + t.cards.map(function (c) { return topicCard(c, secId); }).join('') + '</div>' +
      (t.note && !t.records ? '<div class="note">⚠️ ' + t.note + '</div>' : '') + '</div>';
  }

  if (t.records && t.records.length) {
    body += '<div class="block"><h2 class="sec">License Record รายฟอนต์</h2>' +
      '<p class="sec-lede">1 ใบ = 1 license · สถานะในนี้ต้องตรงกับในทะเบียนกลาง</p>' +
      '<div class="items">' + t.records.map(function (r) {
        return '<a class="item" href="' + r.to + '" target="_blank" rel="noopener"><span class="arw">↗</span>' +
          '<div class="t">' + esc(r.t) + ' <span style="font-weight:400;font-size:.85rem">' + esc(r.st) + '</span></div>' +
          '<div class="w">' + esc(r.w) + '</div>' +
          '<div class="m"><span class="src">Confluence · UXUI Team</span><span>·</span><span>อัปเดต ' + esc(r.up) + '</span></div></a>';
      }).join('') + '</div>' +
      (t.note ? '<div class="note">⚠️ ' + t.note + '</div>' : '') + '</div>';
  }

  if (t.legend && t.legend.length) {
    body += '<div class="block"><h2 class="sec">สถานะหมายความว่าอะไร</h2>' +
      '<p class="sec-lede">คำชุดเดียวกันนี้ใช้ทั้งในทะเบียนกลางและในใบรายฟอนต์</p>' +
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
      up: t.modes.length + ' โหมด' + (writes ? ' · ' + writes + ' โหมดเขียนของจริง' : ''),
      wait: t.proof.ok ? null : 'ยังไม่เคยรัน'
    }, 'tools');
  }).join('');

  return '<div class="inner">' +
    head({ icon: 'wrench', title: 'เครื่องมือ', tag: 'คำสั่งที่พิมพ์ใน Claude', color: '',
           lede: 'ไม่ใช่เอกสาร — เป็นคำสั่งที่พิมพ์แล้วมันทำงานกับไฟล์จริงให้ · ทุกตัวบอกไว้ว่าโหมดไหนเขียนของจริง โหมดไหนแค่บอกในแชท' }) +
    '<div class="block first"><h2 class="sec">ใช้ตัวไหนตอนไหน</h2>' +
      '<p class="sec-lede">ลำดับปกติของงาน 1 ชิ้น — จากทำไฟล์เสร็จ ถึงตรวจหลัง dev ทำ</p>' +
      '<div class="chain">' + chain + '</div></div>' +
    '<div class="block"><h2 class="sec">เครื่องมือทั้งหมด</h2>' +
      '<p class="sec-lede">กดเข้าไปดูว่าต้องเตรียมอะไร มันแตะอะไร และมีกฎกันพลาดอะไรบ้าง</p>' +
      '<div class="cardgrid">' + cards + '</div></div>' +
    foot() + '</div>';
}

/* ---------- หน้าเครื่องมือรายตัว ---------- */
function viewTool(key) {
  var t = DATA.tool[key];
  if (!t) return viewTools();
  var crumb = '<div class="crumb"><button data-go="">DesignOps</button><span class="sep">/</span>' +
    '<button data-go="tools">เครื่องมือ</button><span class="sep">/</span><span>/' + esc(t.cmd) + '</span></div>';

  var WK = { read: ['อ่านอย่างเดียว', 'read'], write: ['เขียนของจริง', 'write'], safe: ['ไม่แตะของจริง', 'safe'] };
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
      '<div class="kv"><div class="kvl">ใช้เมื่อไหร่</div><div class="kvv">' + esc(t.when) + '</div></div>' +
      '<div class="kv"><div class="kvl">เริ่มยังไง</div><div class="kvv">' + esc(t.type) + '</div></div>' +
    '</div>' +

    '<div class="proof ' + (t.proof.ok ? 'ok' : 'no') + '">' +
      '<div class="pl">' + (t.proof.ok ? '✅ ' : '⬜ ') + esc(t.proof.t) + '</div>' +
      '<div class="pd">' + esc(t.proof.d) + '</div></div>' +

    '<div class="block"><h2 class="sec">โหมด และมันแตะอะไร</h2>' +
      '<p class="sec-lede">ดูคอลัมน์ขวาก่อนใช้ — โหมดที่เขียนของจริงย้อนคืนยากกว่าโหมดที่แค่รายงาน</p>' +
      '<div class="modes">' + modes + '</div></div>' +

    '<div class="block"><h2 class="sec">ต้องเตรียมอะไร</h2>' +
      '<p class="sec-lede">ระบบจะเช็คเองก่อนว่าอะไรพร้อมแล้ว แล้วขอเฉพาะที่ขาด — ไม่พ่นรายการยาวให้ไล่หาเอง</p>' +
      '<div class="preps">' + prep + '</div></div>' +

    '<div class="block"><h2 class="sec">กฎกันพลาด</h2>' +
      '<p class="sec-lede">ระบบบังคับตัวเองตามนี้ ไม่ใช่ขอความร่วมมือ</p>' +
      '<ul class="rules">' + rules + '</ul>' +
      (t.notdo ? '<div class="note" style="margin-top:16px"><b>สิ่งที่มันจะไม่ทำ</b> — ' + esc(t.notdo) + '</div>' : '') +
    '</div>' +
    foot() + '</div>';
}

function foot() {
  return '<footer>DesignOps · SkillLane UX/UI — ปรับปรุง ' + esc(DATA.updated) +
    ' · <a href="' + DATA.roadmap + '" target="_blank" rel="noopener">Roadmap 2026 ↗</a>' +
    ' · เจอลิงก์เสียหรือของที่เก่าไปแล้ว ทักได้เลย จะได้แก้ที่ต้นทาง</footer>';
}

function render() {
  var r = route(), parts = r.split('/').filter(Boolean);
  var active = parts[0] || '', main;
  if (parts[0] === 'tools') main = parts[1] ? viewTool(parts[1]) : viewTools();
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
