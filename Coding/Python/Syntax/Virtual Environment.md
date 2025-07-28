---
tags:
  - Python
  - VirtualEnvironment
---
## The `venv` Module
The `venv` module (Python 3.6+) helps you create isolated Python environments. On Debian/Ubuntu you may need to install it first:

```bash
sudo apt install python3-venv
```

---
## Creating a Virtual Environment
Use the `-m venv` flag to create a new env directory:

```bash
python3 -m venv <env-path>
```

| Aspect             | Details                                                                                         |
| ------------------ | ----------------------------------------------------------------------------------------------- |
| What it does       | Creates a clean site‑packages folder, copies Python binaries, and adds a `bin/activate` script. |
| Isolation          | No system‑wide packages are visible—only what you install.                                      |
| Environment layout | `<env-path>/bin/` (or `Scripts\` on Windows) and `<env-path>/lib/pythonX.Y/site-packages/`.     |

```bash
python3 -m venv ~/python-envs/NewApp
```

---
## Activating & Deactivating

| Platform    | Activate Command                  | Deactivate   |
| ----------- | --------------------------------- | ------------ |
| macOS/Linux | `source <env-path>/bin/activate`  | `deactivate` |
| Windows PS  | `~\<env>\Scripts\Activate.ps1`    | `deactivate` |
| Windows CMD | `<env-path>\Scripts\activate.bat` | `deactivate` |

```bash
# macOS/Linux example
source ~/python-envs/NewApp/bin/activate
(NewApp) $ deactivate
```

---
## Installing Packages
Always install into the active environment:

```bash
python -m pip install <package>
```

This ensures `pip` refers to the venv’s site‑packages, not the system’s.

---
## Using the Env’s Interpreter in Scripts
Point your script’s shebang to the venv’s Python so imports work seamlessly:

```bash
#!/home/student/python-envs/NewApp/bin/python
import requests
# …
```

Make the script executable:

```bash
chmod +x myscript.py
./myscript.py
```

---
## Windows‑Specific Notes
- Use the **Python Launcher** `py.exe` rather than `python.exe`.
- Environment folder uses `Scripts\` instead of `bin/`.
- PowerShell supports `~` for your home directory.
- `py.exe` honors shebang lines, so `#!C:\path\to\venv\Scripts\python.exe` works.

```powershell
PS C:\Users\me> py -m venv $env:USERPROFILE\venv\newapp
PS C:\Users\me> ~\venv\newapp\Scripts\Activate.ps1
(newapp) PS C:\Users\me> (Get-Command python).Source
C:\Users\me\venv\newapp\Scripts\python.exe
(newapp) PS C:\Users\me> py -c "import sys; print(sys.path)"
```

---

## Best Practices
- **One env per project**: Keep dependencies isolated.
- **Commit requirements file**: `pip freeze > requirements.txt`.
- **Use `.gitignore`**: Exclude your `venv/` folder.
- **Recreate env**: `python -m venv venv` + `pip install -r requirements.txt`.