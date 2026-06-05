import subprocess
try:
    res = subprocess.run(['node', '-c', 'app.js'], capture_output=True, text=True)
    open('check_result.txt', 'w', encoding='utf-8').write(f"STDOUT: {res.stdout}\nSTDERR: {res.stderr}\nCODE: {res.returncode}")
except Exception as e:
    open('check_result.txt', 'w', encoding='utf-8').write(f"ERROR: {str(e)}")
