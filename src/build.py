import os, subprocess
os.chdir(os.path.dirname(os.path.abspath(__file__)))
head  = open('_head.html', encoding='utf-8').read()
icons = open('_icons.js', encoding='utf-8').read()   # ขึ้นต้นด้วย <script>
data  = open('_data.js',  encoding='utf-8').read()
logic = open('_logic.js', encoding='utf-8').read()
fonts = open('fonts.css', encoding='utf-8').read()

assert '/*@FONTS@*/' in head, 'font marker missing'
head = head.replace('/*@FONTS@*/', fonts)
out = head + '\n' + icons + '\n' + data + '\n' + logic + '\n</script>\n'

body = icons.replace('<script>', '') + '\n' + data + '\n' + logic
r = subprocess.run(['node', '--check', '/dev/stdin'], input=body, text=True, capture_output=True)
if r.returncode: raise SystemExit('JS SYNTAX ERROR:\n' + r.stderr[:900])

assert out.count('<script') == 1, 'script tag count = %d' % out.count('<script')
open('hub.html', 'w', encoding='utf-8').write(out)
print('built hub.html', round(len(out)/1024), 'KB · icons:', icons.count(' s(') , '· js ok')
