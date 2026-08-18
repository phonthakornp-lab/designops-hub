/* ---------- ตัวเรนเดอร์เนื้อหาในเว็บ (บล็อก) ---------- */
function blocks(list) {
  return (list || []).map(function (b) {
    switch (b.k) {
      case 'h':
        return '<h2 class="sec" style="margin-top:34px">' + b.t + '</h2>' +
               (b.d ? '<p class="sec-lede">' + b.d + '</p>' : '');
      case 'p':
        return '<p class="body">' + b.t + '</p>';
      case 'note':
      case 'warn':
      case 'ok':
        return '<div class="cal ' + b.k + '">' + b.t + '</div>';
      case 'table':
        return '<div class="tw"><table class="tb">' +
          (b.head ? '<thead><tr>' + b.head.map(function (h, i) {
            return '<th' + (b.hcls && b.hcls[i] ? ' class="' + b.hcls[i] + '"' : '') + '>' + h + '</th>';
          }).join('') + '</tr></thead>' : '') +
          '<tbody>' + b.rows.map(function (r) {
            return '<tr>' + r.map(function (c, i) {
              return '<td' + (i === 0 ? ' class="k"' : '') + '>' + c + '</td>';
            }).join('') + '</tr>';
          }).join('') + '</tbody></table></div>';
      case 'steps':
        return '<div class="stepgrid">' + b.items.map(function (s, i) {
          return '<div class="stepc"><div class="sn">ขั้น ' + (i + 1) + '</div>' +
            '<div class="st">' + s.t + '</div><div class="sd">' + s.d + '</div>' +
            (s.who ? '<span class="who ' + (s.who === 'AI' ? 'a' : 'h') + '">' + s.who + '</span>' : '') + '</div>';
        }).join('') + '</div>';
      case 'list':
        return '<ul class="blist">' + b.items.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>';
      case 'kv':
        return '<div class="kv2">' + b.items.map(function (x) {
          return '<div class="kv"><div class="kvl">' + x.l + '</div><div class="kvv">' + x.v + '</div></div>';
        }).join('') + '</div>';
      case 'stat':
        return '<div class="stats" style="margin-top:8px">' + b.items.map(function (x, i) {
          return '<div class="stat' + (i === 0 ? ' hero' : '') + '"><div class="lbl">' + x.l + '</div>' +
            '<div class="big">' + x.b + '</div><div class="sub">' + x.s + '</div></div>';
        }).join('') + '</div>';
      case 'img':
        return '<figure class="fig' + (b.narrow ? ' narrow' : '') + '"><img src="' + b.src + '" alt="' + (b.alt || '') + '">' +
          (b.cap ? '<figcaption>' + b.cap + '</figcaption>' : '') + '</figure>';
      case 'pair':
        return '<div class="figpair">' + [b.a, b.b].map(function (x) {
          return '<figure class="fig"><img src="' + x.src + '" alt="' + (x.alt || '') + '">' +
            (x.cap ? '<figcaption>' + x.cap + '</figcaption>' : '') + '</figure>';
        }).join('') + '</div>';
      case 'faq':
        return '<div class="faq">' + b.items.map(function (x) {
          return '<div class="qa"><div class="q">' + x.q + '</div><div class="a">' + x.a + '</div></div>';
        }).join('') + '</div>';
      case 'link':
        return '<div class="cardgrid">' + b.items.map(function (x) {
          return topicCard({ icon: x.icon || 'doc', color: x.color, t: x.t, d: x.d, ext: x.to, up: x.up }, '');
        }).join('') + '</div>';
      default:
        return '';
    }
  }).join('');
}
