# สร้าง workflow diagram (SVG) ทุกภาพของ Hub → _flows.js
# แก้ข้อความหรือตำแหน่งที่นี่ แล้วรัน: python3 gen_flows.py && python3 build.py
import json, os, re
os.chdir(os.path.dirname(os.path.abspath(__file__)))
icons = open('_icons.js', encoding='utf-8').read()
def ico(name):
    return re.search(r"^\s+%s:\s+s\('(.*)'\),?\s*$" % name, icons, re.M).group(1)
ICON = {k: ico(k) for k in ['user', 'send', 'check', 'target', 'palette', 'table', 'frame', 'tag', 'doc', 'wrench', 'book', 'clip']}
ICON['code'] = '<path d="m8 7-5 5 5 5"/><path d="m16 7 5 5-5 5"/><path d="m13.5 5-3 14"/>'
ICON['flag'] = '<path d="M5 21V4"/><path d="M5 4h11l-2 4 2 4H5"/>'
C = {
    'ink': ('#F1EFEC', '#4B4744'), 'purple': ('#F0EBFA', '#7C5CBF'), 'orange': ('#FCEEE7', '#DF6B3C'),
    'green': ('#EAF5EC', '#4F9E5C'), 'blue': ('#EAF2FB', '#3D7BC2'), 'gray': ('#F1EFEC', '#8C8884'),
    'cta': ('#DFF8FE', '#0A7C93')}
GRAY = '#B9B4AF'

def esc(t):
    return t.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')

def node(x, y, icon, color, title, sub='', cmd=None, href=None, w=196, h=104, num=None, tag=None, dashed=False):
    t, ink = C[color]
    o = 0 if cmd else (h - 72) // 2
    g = f'<g class="nd" transform="translate({x},{y})">'
    g += (f'<rect class="bx" width="{w}" height="{h}" rx="16" fill="#fff" stroke="{ink if dashed else "#EBE8E5"}"'
          f'{" stroke-dasharray=\"5 5\"" if dashed else ""} filter="url(#sh)"/>')
    g += f'<rect x="16" y="{16 + o}" width="36" height="36" rx="10" fill="{t}"/>'
    if num is not None:
        g += f'<text x="34" y="{40 + o}" class="tn" fill="{ink}" text-anchor="middle">{num}</text>'
    else:
        g += (f'<g transform="translate(24,{24 + o}) scale(.8333)" fill="none" stroke="{ink}" stroke-width="1.8" '
              f'stroke-linecap="round" stroke-linejoin="round">{ICON[icon]}</g>')
    g += f'<text x="64" y="{31 + o}" class="tt">{esc(title)}</text>'
    if sub:
        g += f'<text x="64" y="{49 + o}" class="ts">{esc(sub)}</text>'
    if tag:
        tw = 12 + len(tag) * 7
        g += f'<rect x="{w - 12 - tw}" y="-11" width="{tw}" height="22" rx="11" fill="{ink}"/><text x="{w - 12 - tw / 2:.0f}" y="4" class="tg" text-anchor="middle">{esc(tag)}</text>'
    if cmd:
        cw = 16 + len(cmd) * 7.3
        g += (f'<rect x="16" y="{h - 38}" width="{cw:.0f}" height="24" rx="12" fill="{t}"/>'
              f'<text x="{16 + cw / 2:.0f}" y="{h - 22}" class="tc" fill="{ink}" text-anchor="middle">{cmd}</text>')
    g += '</g>'
    return f'<a href="{href}">{g}</a>' if href else g

def marker(p, i, col):
    return (f'<marker id="{p}{i}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">'
            f'<path d="M1 1 9 5 1 9" fill="none" stroke="{col}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></marker>')

def svg(p, vw, vh, label, body, minw=760):
    defs = (f'<defs><filter id="{p}sh" x="-10%" y="-10%" width="120%" height="140%"><feDropShadow dx="0" dy="6" stdDeviation="8" '
            f'flood-color="#1B1A18" flood-opacity=".07"/></filter>'
            f'{marker(p, "g", GRAY)}{marker(p, "p", "#7C5CBF")}{marker(p, "b", "#3D7BC2")}{marker(p, "o", "#DF6B3C")}{marker(p, "c", "#0A7C93")}</defs>')
    body = body.replace('url(#sh)', f'url(#{p}sh)').replace('url(#a', f'url(#{p}')
    return (f'<svg class="flow" viewBox="0 0 {vw} {vh}" style="min-width:{minw}px" role="img" aria-label="{esc(label)}">'
            f'{defs}{body}</svg>')

def line(d, col='g', dash=False):
    stroke = {'g': GRAY, 'p': '#7C5CBF', 'b': '#3D7BC2', 'o': '#DF6B3C', 'c': '#0A7C93'}[col]
    return (f'<path d="{d}" fill="none" stroke="{stroke}" stroke-width="1.6"'
            f'{" stroke-dasharray=\"5 5\"" if dash else ""} marker-end="url(#a{col})"/>')

def label(x, y, t, cls='', anchor='middle'):
    return f'<text class="lb {cls}" x="{x}" y="{y}" text-anchor="{anchor}">{esc(t)}</text>'

def pill(x, y, t, cls='lbB', w=None):
    w = w or (24 + len(t) * 6.6)
    return (f'<rect x="{x - w / 2:.0f}" y="{y - 16}" width="{w:.0f}" height="32" rx="16" fill="#fff" stroke="#EBE8E5"/>'
            + label(x, y + 5, t, cls))

W, H = 196, 104
F = {}

# ---------- หน้าแรก: วงจรงาน ----------
X = [24, 304, 584, 864]; Y = 160; my = Y + H // 2
R = (176, 14); S = (24, 340); O = (864, 340); mid = (S[0] + W + O[0]) // 2
b = ''.join([
    line(f'M{X[0]+W} {my} H{X[1]-4}'), line(f'M{X[1]+W} {my} H{X[2]-4}'), line(f'M{X[2]+W} {my} H{X[3]-4}'),
    line(f'M{O[0]+W//2} {Y+H} V{O[1]-4}'),
    label((X[0]+W+X[1])//2, my-10, 'ออกแบบเสร็จ'), label((X[1]+W+X[2])//2, my-10, 'Ready for Dev'), label((X[2]+W+X[3])//2, my-10, 'ขึ้น preprod'),
    line(f'M{X[0]+W//2} {Y} C{X[0]+W//2} {R[1]+80} {R[0]-50} {R[1]+H//2} {R[0]-4} {R[1]+H//2}', 'p', True),
    line(f'M{R[0]+W} {R[1]+H//2} C{X[1]+W//2+50} {R[1]+H//2} {X[1]+W//2} {R[1]+80} {X[1]+W//2} {Y-4}', 'p', True),
    label(R[0]+W+20, R[1]+26, 'ทำเมื่อมี design decision ที่ต้องอธิบาย', 'lbP', 'start'),
    line(f'M{S[0]+W//2} {S[1]} V{Y+H+4}', 'b'),
    label(S[0]+W//2+12, (S[1]+Y+H)//2+4, 'ใช้ component + token', 'lbB', 'start'),
    line(f'M{O[0]} {O[1]+H//2} H{S[0]+W+4}', 'b', True),
    pill(mid, O[1]+H//2, 'issue ที่มาจาก component → แก้ที่ Design System', w=340),
    node(X[0], Y, 'user', 'ink', 'ออกแบบ', 'งานในไฟล์ Figma'),
    node(R[0], R[1], 'target', 'purple', 'Design Rationale', 'เหตุผล + หลักฐาน', '/rationale', '#/dv/dvrat'),
    node(X[1], Y, 'send', 'orange', 'Deliver to Dev', 'เช็ค 7 ข้อก่อนส่ง', '/deliver-kit', '#/dv'),
    node(X[2], Y, 'code', 'gray', 'Dev พัฒนา', 'staging / preprod'),
    node(X[3], Y, 'check', 'green', 'Design QA', 'เทียบ build กับ design', '/qa-check', '#/qa'),
    node(O[0], O[1], 'table', 'green', 'บอร์ด + Sheet', 'รายการ issue สำหรับ dev'),
    node(S[0], S[1], 'palette', 'blue', 'Design System', 'component · token', '/ds-audit', '#/ds'),
])
F['HOME'] = svg('fh', 1084, 470, 'วงจรงาน: ออกแบบ ไป Deliver to Dev ไป dev ทำ ไป Design QA แล้วย้อนกลับไปแก้ที่ Design System', b)

# ---------- Design QA: 2 แบบ ----------
A = (24, 30); B = (24, 250); Q = (304, 140); M1 = (584, 30); M2 = (584, 250); RV = (864, 140); OUT = (864, 330)
def mr(p): return (p[0] + W, p[1] + H // 2)
def ml(p): return (p[0], p[1] + H // 2)
def curve(a, b, col='g', dash=False):
    mx = (a[0] + b[0]) // 2
    return line(f'M{a[0]} {a[1]} C{mx} {a[1]} {mx} {b[1]} {b[0]-4} {b[1]}', col, dash)
b = ''.join([
    curve(mr(A), ml(Q), 'b'), curve(mr(B), ml(Q), 'o'),
    curve(mr(Q), ml(M1), 'b'), curve(mr(Q), ml(M2), 'o'),
    curve(mr(M1), ml(RV), 'b'), curve(mr(M2), ml(RV), 'o'),
    line(f'M{RV[0]+W//2} {RV[1]+H} V{OUT[1]-4}'),
    label(RV[0]+W//2+12, (RV[1]+H+OUT[1])//2+4, 'เขียนหลังได้รับการยืนยัน', '', 'start'),
    node(A[0], A[1], 'frame', 'blue', 'URL + บอร์ดเปล่า', 'หน้าที่เปิดด้วย URL ได้'),
    node(B[0], B[1], 'tag', 'orange', 'บอร์ดที่วางหมุดแล้ว', 'ต้องทดสอบการใช้งานจริง'),
    node(Q[0], Q[1], 'check', 'green', 'ระบบเลือกแบบ', 'ยืนยันก่อนเริ่มทุกครั้ง', '/qa-check'),
    node(M1[0], M1[1], 'frame', 'blue', 'แบบ 1 · AI เทียบ', 'แคปเต็มหน้า + ดึง spec', tag='AI หา issue'),
    node(M2[0], M2[1], 'tag', 'orange', 'แบบ 2 · ย้ายหมุด', 'อ่านหมุดจาก board', tag='Designer หา issue'),
    node(RV[0], RV[1], 'user', 'purple', 'Designer ตรวจทาน', 'ตัดข้อที่เป็น design decision'),
    node(OUT[0], OUT[1], 'table', 'green', 'บอร์ด + Sheet', 'เลขตรงกันทุกแถว'),
])
F['QA'] = svg('fq', 1084, 450, 'Design QA: ส่ง URL หรือบอร์ดที่มีหมุด แล้ว /qa-check เลือกแบบ 1 หรือแบบ 2 Designer ตรวจทาน แล้วลงบอร์ดและ Sheet', b)

# ---------- Deliver to Dev: 7 ขั้น ----------
SW, SH, G = 140, 100, 22
xs = [24 + i * (SW + G) for i in range(7)]; Y = 96
steps = [('ตรวจไฟล์', 'ผลเป็นตารางในแชท'), ('แก้ไข', 'เฉพาะข้อที่เลือก'), ('สร้างหน้า Deliver', 'Audit Result'),
         ('ตอบคำถาม', 'ตอบในแชท'), ('ติ๊ก Checklist', '7 ข้อ'), ('กรอก Form', 'ผู้ออกแบบ · ผู้รับงาน'), ('เปลี่ยน Status', 'Ready for Dev')]
def snode(i, x, y, who):
    col = 'cta' if who == 'ระบบ' else 'orange'
    t, ink = C[col]
    title, sub = steps[i]
    dashed = i == 1
    g = f'<g class="nd" transform="translate({x},{y})">'
    g += (f'<rect class="bx" width="{SW}" height="{SH}" rx="14" fill="#fff" stroke="{ink if dashed else "#EBE8E5"}"'
          f'{" stroke-dasharray=\"5 5\"" if dashed else ""} filter="url(#sh)"/>')
    g += f'<rect x="14" y="14" width="28" height="28" rx="8" fill="{t}"/><text x="28" y="33" class="tn" fill="{ink}" text-anchor="middle">{i+1}</text>'
    g += f'<text x="14" y="66" class="tt ts14">{esc(title)}</text><text x="14" y="84" class="ts">{esc(sub)}</text>'
    return g + '</g>'
b = ''
sys_w = xs[2] + SW - xs[0] + 24; usr_x = xs[3] - 12; usr_w = xs[6] + SW - xs[3] + 24
b += f'<rect x="{xs[0]-12}" y="40" width="{sys_w}" height="{SH+80}" rx="20" fill="#F2FBFD" />'
b += f'<rect x="{usr_x}" y="40" width="{usr_w}" height="{SH+80}" rx="20" fill="#FDF4EF" />'
b += label(xs[0]+4, 70, 'ระบบทำ', 'lbC', 'start') + label(usr_x+16, 70, 'Designer ทำ', 'lbO', 'start')
for i in range(6):
    b += line(f'M{xs[i]+SW} {Y+SH//2} H{xs[i+1]-4}')
b += line(f'M{xs[0]+SW//2} {Y+SH} C{xs[0]+SW//2} {Y+SH+60} {xs[2]+SW//2} {Y+SH+60} {xs[2]+SW//2} {Y+SH+4}', 'c', True)
b += pill(xs[1]+SW//2, Y+SH+46, 'ข้ามขั้น 2 ได้', 'lbC', 120)
for i in range(7):
    b += snode(i, xs[i], Y, 'ระบบ' if i < 3 else 'Designer')
b += pill(xs[5]+SW+G//2, Y+SH+50, 'หยุดกลางทางและกลับมาทำต่อได้', 'lbO', 250)
F['DV'] = svg('fd', 24 + 7 * SW + 6 * G + 24, 300, 'Deliver Kit 7 ขั้น: ระบบทำขั้น 1 ถึง 3 Designer ทำขั้น 4 ถึง 7 ข้ามขั้น 2 ได้', b, 900)

# ---------- Design Rationale: 4 ขั้น ----------
X = [24, 304, 584, 864]; Y = 40
b = ''.join([line(f'M{X[i]+W} {Y+H//2} H{X[i+1]-4}') for i in range(3)])
b += line(f'M{X[3]+W//2} {Y+H} V{Y+H+62}')
b += line(f'M{X[2]+W//2} {Y+H} C{X[2]+W//2} {Y+H+52} {X[1]+W+70} {Y+H+66+H//2} {X[1]+W+4} {Y+H+66+H//2}', 'p', True)
b += label(X[2]+W//2-14, Y+H+40, 'มีหลักฐานโต้แย้ง', 'lbP', 'end')
b += ''.join([
    node(X[0], Y, 'book', 'cta', 'อ่านบริบท', 'Figma · Jira · persona', tag='ระบบ'),
    node(X[1], Y, 'target', 'orange', 'เลือก decision', '3–6 ข้อต่อหน้าจอ', tag='Designer'),
    node(X[2], Y, 'user', 'orange', 'ยืนยันเหตุผล', 'ลงบอร์ดเฉพาะข้อที่ยืนยัน', tag='Designer'),
    node(X[3], Y, 'tag', 'cta', 'หลักฐาน + วางบอร์ด', 'ป้าย Source 7 แบบ', tag='ระบบ'),
    node(X[3], Y+H+66, 'frame', 'purple', 'บอร์ดในไฟล์ Figma', 'หน้าจอ + หมุด + การ์ด'),
    node(X[1], Y+H+66, 'palette', 'purple', 'ปรับ design', 'หรือนำไปหารือใน review', dashed=True),
])
b = b.replace('tag="', 'tag="')
F['RAT'] = svg('fr', 1084, 340, 'Design Rationale 4 ขั้น: ระบบอ่านบริบท Designer เลือก decision และยืนยันเหตุผล ระบบใส่หลักฐานและวางบอร์ด', b)

# ---------- เครื่องมือ: ลำดับคำสั่ง ----------
GX, GY, GW, GH = 24, 50, 456, 170
N1 = (48, 90); N2 = (260, 90); D = (584, 90); QA2 = (864, 90)
b = f'<rect x="{GX}" y="{GY}" width="{GW}" height="{GH}" rx="20" fill="#FDF4EF" stroke="#DF6B3C" stroke-dasharray="6 6"/>'
b += f'<rect x="{GX+20}" y="{GY-14}" width="300" height="28" rx="14" fill="#DF6B3C"/>'
b += f'<text x="{GX+170}" y="{GY+5}" class="tg" text-anchor="middle">/deliver-kit เรียกใช้ทั้งสองคำสั่ง</text>'
b += line(f'M{N1[0]+W-24} {N1[1]+H//2} H{N2[0]-4}')
b += line(f'M{GX+GW} {N2[1]+H//2} H{D[0]-4}')
b += line(f'M{D[0]+W} {D[1]+H//2} H{QA2[0]-4}')
b += label((GX+GW+D[0])//2, N2[1]+H//2-10, 'Ready for Dev')
b += ''.join([
    node(N1[0], N1[1], 'wrench', 'blue', '/ds-audit', 'ตรวจ + แก้ไฟล์', w=172, href='#/tools/ds-audit'),
    node(N2[0], N2[1], 'check', 'orange', '/handoff', 'ตรวจความพร้อมส่ง', w=196, href='#/tools/handoff'),
    node(D[0], D[1], 'code', 'gray', 'Dev พัฒนา', 'staging / preprod'),
    node(QA2[0], QA2[1], 'check', 'green', '/qa-check', 'เทียบ build กับ design', href='#/tools/qa-check'),
])
F['TOOLS'] = svg('ft', 1084, 250, 'ลำดับคำสั่ง: /deliver-kit เรียก /ds-audit และ /handoff ให้เอง จากนั้น dev ทำ แล้วใช้ /qa-check', b)

css = ('.flowbox{background:var(--bg-soft);border:1px solid var(--line);border-radius:20px;padding:28px 24px;overflow-x:auto;margin:20px 0 8px}'
       '.flow{display:block;width:100%;height:auto;font-family:var(--ff)}'
       '.flow .tt{font-size:15px;font-weight:600;fill:#1B1A18}.flow .ts14{font-size:14px}.flow .ts{font-size:12.5px;fill:#8C8884}'
       '.flow .tn{font-size:14px;font-weight:700}.flow .tg{font-size:11.5px;font-weight:600;fill:#fff}'
       '.flow .tc{font-family:ui-monospace,Menlo,monospace;font-size:12px;font-weight:600}'
       '.flow .lb{font-size:12.5px;fill:#8C8884}.flow .lbP{fill:#7C5CBF}.flow .lbB{fill:#3D7BC2}.flow .lbO{fill:#DF6B3C}.flow .lbC{fill:#0A7C93}'
       '.flow a .bx{transition:stroke .15s}.flow a:hover .bx,.flow a:focus-visible .bx{stroke:#0A7C93}'
       '.flowcap{font-size:.86rem;color:var(--ink-mute);margin:0 0 8px}')
js = '/* สร้างจาก gen_flows.py — อย่าแก้มือ */\n' + ''.join(f'var FLOW_{k} = {json.dumps(v, ensure_ascii=False)};\n' for k, v in F.items())
js += f'var FLOW_CSS = {json.dumps(css)};\n'
open('_flows.js', 'w', encoding='utf-8').write(js)
print('flows', list(F), round(len(js) / 1024), 'KB')
