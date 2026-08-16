import os
os.chdir(os.path.dirname(os.path.abspath(__file__)))
head  = open('_head.html', encoding='utf-8').read()
data  = open('_data.js',  encoding='utf-8').read()
logic = open('_logic.js', encoding='utf-8').read()
fonts = open('fonts.css', encoding='utf-8').read()

assert '/*@FONTS@*/' in head, 'font marker missing'
head = head.replace('/*@FONTS@*/', fonts)
out = head + '\n' + data + '\n' + logic + '\n</script>\n'

# syntax check the script body before writing
body = data.replace('<script>', '') + '\n' + logic
compile_ok = True
try:
    import subprocess
    r = subprocess.run(['node', '--check', '/dev/stdin'], input=body, text=True, capture_output=True)
    compile_ok = (r.returncode == 0)
    if not compile_ok:
        print('JS SYNTAX ERROR:\n', r.stderr[:800])
except Exception as e:
    print('skip node check:', e)

open('hub.html', 'w', encoding='utf-8').write(out)
print('built hub.html', round(len(out)/1024), 'KB · script tags:', out.count('<script'), '· js ok:', compile_ok)
