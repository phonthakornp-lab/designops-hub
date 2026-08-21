import os, subprocess
os.chdir(os.path.dirname(os.path.abspath(__file__)))
head  = open('_head.html', encoding='utf-8').read()
icons = open('_icons.js', encoding='utf-8').read()
img   = open('_img.js',   encoding='utf-8').read()
data  = open('_data.js',  encoding='utf-8').read()
qa    = open('_qa.js',    encoding='utf-8').read()
setup = open('_setup.js', encoding='utf-8').read()
blk   = open('_blocks.js',encoding='utf-8').read()
logic = open('_logic.js', encoding='utf-8').read()
fonts = open('fonts.css', encoding='utf-8').read()

assert '/*@FONTS@*/' in head
head = head.replace('/*@FONTS@*/', fonts)

for m in ['BOARD', 'DONE', 'ZONE', 'CARD', 'SKIP']:
    qa = qa.replace("'IMG_%s_SRC'" % m, 'IMG_%s' % m)
import re as _re
left = _re.findall(r"'IMG_\w+_SRC'", qa)
if left: raise SystemExit('ยังมี marker ภาพเหลือ: %s' % left)

body = icons.replace('<script>', '') + '\n' + img + '\n' + data + '\n' + qa + '\n' + setup + '\n' + blk + '\n' + logic
r = subprocess.run(['node', '--check', '/dev/stdin'], input=body, text=True, capture_output=True)
if r.returncode: raise SystemExit('JS SYNTAX ERROR:\n' + r.stderr[:900])

out = head + '\n' + icons + '\n' + img + '\n' + data + '\n' + qa + '\n' + setup + '\n' + blk + '\n' + logic + '\n</script>\n'
assert out.count('<script') == 1, 'script tags = %d' % out.count('<script')
open('hub.html','w',encoding='utf-8').write(out)
print('built hub.html', round(len(out)/1024), 'KB · js ok')
