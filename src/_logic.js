function esc(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function go(h) { location.hash = h; }

function topbar(crumbs) {
  var c = crumbs.map(function (x, i) {
    var last = i === crumbs.length - 1;
    return (i ? '<span class="sep">/</span>' : '') +
      (last ? '<span class="cur">' + esc(x.t) + '</span>'
            : '<button data-go="' + esc(x.h) + '">' + esc(x.t) + '</button>');
  }).join('');
  return '<div class="topbar"><div class="topbar-in">' +
    '<button class="brand" data-go="/"><span class="sq">◆</span>DesignOps</button>' +
    '<div class="crumbs">' + c + '</div>' +
    '<a class="up" href="' + DATA.roadmap + '" target="_blank" rel="noopener">Roadmap 2026 ↗</a>' +
    '</div></div>';
}

function stat(lbl, big, sub, hero) {
  return '<div class="stat' + (hero ? ' hero' : '') + '"><div class="lbl">' + esc(lbl) + '</div>' +
    '<div class="big">' + esc(big) + '</div><div class="sub">' + esc(sub) + '</div></div>';
}

/* ---------- หน้าแรก ---------- */
function viewHome() {
  var open = DATA.cats.filter(function (c) { return c.open; });
  var items = open.reduce(function (n, c) { return n + c.count; }, 0);
  return topbar([{ t: 'หน้าแรก' }]) +
    '<div class="band">' +
    '<div class="kicker">DesignOps · SkillLane</div>' +
    '<h1>DesignOps <span class="yr">Hub</span></h1>' +
    '<p class="lede">ที่รวมทุกอย่างที่ DesignOps ต้องส่งต่อให้ทีม — วิธีทำงานแต่ละเรื่อง และของอ้างอิงว่าตัวจริงอยู่ที่ไหน</p>' +
    '<div class="stats">' +
      stat('หมวดที่เปิดแล้ว', open.length + ' / ' + DATA.cats.length, 'อีก ' + (DATA.cats.length - open.length) + ' หมวดกำลังเตรียม', true) +
      stat('รายการพร้อมใช้', String(items), 'กดแล้วไปต้นฉบับได้เลย') +
      stat('สำเนาที่เว็บนี้เก็บเอง', '0', 'ลิงก์ออกทั้งหมด ไม่มีของเก่าค้าง') +
      stat('ปลายทางที่ลิงก์ไป', String(DATA.dests.length), DATA.dests.join(' · ')) +
    '</div>' +
    '</div>' +

    '<div class="band">' +
    '<h2 class="sec">เข้าทางไหน</h2>' +
    '<p class="sec-lede">Playbook คือวิธีทำงาน · Role คือขอบเขตงานและวิธีขอความช่วยเหลือ</p>' +
    '<div class="lanes">' +
      '<div class="lane purple"><div class="lane-head">' +
        '<div><div class="nm">Playbook</div><div class="goal">วิธีทำงานแต่ละเรื่อง แยกเป็นหมวด พร้อมลิงก์ไปของต้นฉบับ</div>' +
        '<div class="krs">' + DATA.cats.map(function (c) { return '<span class="krchip">' + esc(c.name) + '</span>'; }).join('') + '</div></div>' +
        '<div class="lane-pct"><div class="b on">' + open.length + '/' + DATA.cats.length + '</div><div class="l">หมวดที่เปิดแล้ว</div></div>' +
        '<button class="btn" data-go="/playbook">เข้าดู →</button>' +
      '</div></div>' +
      '<div class="lane off"><div class="lane-head">' +
        '<div><div class="nm">Role</div><div class="goal">DesignOps ช่วยอะไรได้บ้าง และทีมขอความช่วยเหลือยังไง</div></div>' +
        '<div class="lane-pct"><div class="b">—</div><div class="l">ยังไม่เปิด</div></div>' +
        '<button class="btn ghost" disabled>กำลังตกลง</button>' +
      '</div><div class="leg"><span>ยังไม่ได้ตัดสินว่าทีมขอผ่านช่องทางไหน — Jira, ทักตรง หรือมีคิว</span></div></div>' +
    '</div>' +
    '<div class="note"><b>เว็บนี้ไม่เก็บเนื้อหา</b> — ทุกการ์ดพาไปหาต้นฉบับที่ของอยู่จริง เพื่อไม่ให้เกิดสำเนาที่เก่าโดยไม่มีใครรู้ · ทุกใบบอกวันที่อัปเดตล่าสุดไว้ ให้ตัดสินเองว่ายังเชื่อได้ไหม</div>' +
    '</div>' + foot();
}

/* ---------- swimlane ของ Playbook ---------- */
function viewPlaybook() {
  var lanes = DATA.cats.map(function (c) {
    var steps = (c.steps || []).map(function (s, i) {
      return (i ? '<div class="arrow">→</div>' : '') +
        '<div class="fstep' + (c.open || s.ok ? '' : ' empty') + '"><div class="c">ขั้น ' + (i + 1) + (s.ok ? ' · เสร็จแล้ว' : '') + '</div>' +
        '<div class="t">' + esc(s.t) + '</div><div class="n">' + esc(s.n) + '</div></div>';
    }).join('');
    return '<div class="lane ' + c.color + (c.open ? '' : ' off') + '">' +
      '<div class="lane-head">' +
        '<div><div class="nm">' + esc(c.name) + (c.skill ? '<span class="skill">/' + esc(c.skill) + '</span>' : '') + '</div>' +
        '<div class="goal">' + esc(c.desc) + '</div></div>' +
        '<div class="lane-pct"><div class="b' + (c.open ? ' on' : '') + '">' + (c.open ? c.count : '—') + '</div>' +
        '<div class="l">' + (c.open ? 'รายการพร้อมใช้' : esc(c.statusText)) + '</div></div>' +
        (c.open ? '<button class="btn" data-go="/c/' + c.id + '">เข้าดู →</button>'
                : '<button class="btn ghost" data-go="/c/' + c.id + '">ดูว่าติดอะไร</button>') +
      '</div>' +
      (steps ? '<div class="flow">' + steps + '</div>' : '') +
      (c.open ? '' : '<div class="leg"><span><i class="e"></i> กล่องพื้นส้ม = ยังไม่เปิด</span><span>' + esc(c.why) + '</span></div>') +
      '</div>';
  }).join('');
  return topbar([{ t: 'หน้าแรก', h: '/' }, { t: 'Playbook' }]) +
    '<div class="band">' +
    '<div class="kicker">Playbook</div>' +
    '<h1>ทำ<span class="yr">เรื่องไหน</span></h1>' +
    '<p class="lede">3 หมวดคู่กับ skill ที่ทีมใช้อยู่ใน design-brain — ชื่อในเว็บนี้กับชื่อที่พิมพ์ในเทอร์มินัลเป็นตัวเดียวกัน</p>' +
    '<div class="lanes" style="margin-top:28px">' + lanes + '</div>' +
    '</div>' + foot();
}

/* ---------- หน้าในหมวด ---------- */
function viewCat(id) {
  var c = DATA.cats.filter(function (x) { return x.id === id; })[0];
  if (!c) return viewPlaybook();
  var crumbs = [{ t: 'หน้าแรก', h: '/' }, { t: 'Playbook', h: '/playbook' }, { t: c.name }];

  if (!c.open) {
    return topbar(crumbs) + '<div class="band">' +
      '<div class="kicker">Playbook · ' + esc(c.name) + '</div>' +
      '<h1>' + esc(c.name) + '</h1>' +
      '<p class="lede">' + esc(c.desc) + '</p>' +
      '<div style="margin-top:26px" class="locknote"><div class="t">ยังไม่เปิด — ' + esc(c.statusText) + '</div>' +
      '<div class="d">' + esc(c.why) + '</div>' +
      '<ol>' + (c.todo || []).map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ol></div>' +
      '</div>' + foot();
  }

  var d = DATA[c.id];
  var entries = d.start.map(function (s, i) {
    return (i ? '<div class="arrow">·</div>' : '') +
      '<a class="entry" href="' + s.to + '" target="_blank" rel="noopener">' +
      '<div class="c">ถ้าคุณ</div><div class="q">' + esc(s.q) + '</div>' +
      '<div class="a">' + esc(s.a) + '</div><div class="go">' + esc(s.label) + ' ↗</div></a>';
  }).join('');

  var groups = d.groups.map(function (g) {
    var items = g.items.map(function (i) {
      var inner = '<div class="t">' + esc(i.t) + (i.st ? ' <span style="font-weight:400;font-size:.85rem">' + esc(i.st) + '</span>' : '') + '</div>' +
        '<div class="w">' + esc(i.w) + '</div>' +
        '<div class="m"><span class="src">' + esc(i.src) + '</span><span>·</span><span>อัปเดต ' + esc(i.up) + '</span>' +
        '<span style="margin-left:auto">' + (i.to ? '↗' : '—') + '</span></div>';
      return i.to
        ? '<a class="card" href="' + i.to + '" target="_blank" rel="noopener">' + inner + '</a>'
        : '<div class="card" style="opacity:.68">' + inner + '</div>';
    }).join('');
    return '<div class="group"><div class="ghd">' + esc(g.hd) + '</div><div class="cards">' + items + '</div></div>';
  }).join('');

  var legend = d.legend.map(function (l) {
    return '<div class="lg"><div class="s">' + esc(l.s) + '</div><div class="x">' + esc(l.x) + '</div></div>';
  }).join('');

  return topbar(crumbs) +
    '<div class="band">' +
      '<div class="thead"><div><h2>' + esc(c.name) + (c.skill ? '<span class="skill">/' + esc(c.skill) + '</span>' : '') + '</h2>' +
      '<p class="goal">' + esc(d.lede) + '</p></div>' +
      '<div class="bigprog"><div class="n">' + c.count + '</div><div class="cap">รายการ · ทุกใบอยู่บน Confluence ของทีม</div></div></div>' +
    '</div>' +
    '<div class="band"><h2 class="sec">คุณกำลังจะทำอะไร</h2>' +
      '<p class="sec-lede">เลือกข้อที่ตรงกับสถานการณ์ แล้วกดไปที่ต้นฉบับได้เลย</p>' +
      '<div class="entries">' + entries + '</div></div>' +
    '<div class="band"><h2 class="sec">ของทั้งหมดในหมวดนี้</h2>' +
      '<p class="sec-lede">กดแล้วเปิดต้นฉบับ ไม่ใช่สำเนา — ถ้าวันที่เก่าไปแล้วให้ทักเจ้าของ อย่าเชื่อเงียบ ๆ</p>' + groups +
      (d.note ? '<div class="note">⚠️ ' + d.note + '</div>' : '') + '</div>' +
    '<div class="band"><h2 class="sec">สถานะใน Inventory หมายความว่าอะไร</h2>' +
      '<p class="sec-lede">คำชุดเดียวกันนี้ใช้ทั้งในทะเบียนกลางและใน record รายฟอนต์</p>' +
      '<div class="legend">' + legend + '</div></div>' +
    foot();
}

function foot() {
  return '<footer>DesignOps · SkillLane UX/UI — ปรับปรุง ' + esc(DATA.updated) +
    ' · เจอลิงก์เสียหรือของที่เก่าไปแล้ว ทักได้เลย จะได้แก้ที่ต้นทาง</footer>';
}

function render() {
  var h = (location.hash || '#/').replace(/^#/, '');
  var html;
  if (h.indexOf('/c/') === 0) html = viewCat(h.slice(3));
  else if (h === '/playbook') html = viewPlaybook();
  else html = viewHome();
  document.body.innerHTML = html;
  window.scrollTo(0, 0);
}

document.addEventListener('click', function (e) {
  var b = e.target.closest('[data-go]');
  if (b) { e.preventDefault(); go(b.getAttribute('data-go')); }
});
window.addEventListener('hashchange', render);
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
else render();
