---
tags:
  - python
---

## venv Module

The venv module makes managing these folders easy. Included in Python 3.6 and later, but not on Debian/Ubuntu Systems.

```bash
# Required on Debian/Ubuntu Systems
apt install python3-venv
```

## Create new site folder with

`python -m venv <new directory>`

- Creates a new site modules folder structures with pip and other installer packages
- No existing Packages from the default site-package are included (clean Python install!)
- Puts a copy of Python in a "/bin" folder that will use the new site-package directory
- Creates a bash script called "/bin/activate" to set environment up to use the new Python

```bash
python -m venv ~/python-envs/NewApp
```

## Activating and Using Your Virtual Environment

```bash
# Activate new venv
source ~/python-envs/NewApp/bin/activate
# Deactivate the venv
deactivate
```

## Installing Packages in the Virtual Environment

Ensure that you always install to the site-packages folder of your virtual environment is to run pip as a module.

```bash
python3 -m pip install requests
```

## Executing and Deactivating

Set the `#!` line of your Python script to point to the Python interpreter in your virtual environments, and they will be able to find the modules that are part of that environment.

```bash
#!/home/student/python-env/573/bin/python
import requests
from freq.py import Freq
```

## Virtual Environment on Windows

- Always use the Python launcher "py.exe" instead of the "python.exe"
- Use $env:userprofile when creating the venvs in the home folder
- PowerShell lets you use ~ to access the home folder when activating the venv
- The "bin" folder containing activate and other commands is named "Scripts"
- py.exe does process #! lines on Windows such as `#!c:\venv\scripts\python.exe`

```bash
# Example
PS C:\Users\mark_> py -m venv $env:userprofile\venv\newapp
PS C:\Users\mark_> ~\venv\newapp\scripts\activate.ps1
(newapp) PS C:\Users\mark_> (get-command python).source
C:\Users\mark_\venv\newapp\scripts\python.exe
(newapp) PS C:\Users\mark_> py -c "import sys;print(sys.path)"
['', 'C:\\Program Files\\Python38\\python38.zip', 'C:\\Program Files\\Python38\\DLLs', 'C:\\Program
Files\\Python38\\lib', 'C:\\Program Files\\Python38', 'C:\\Users\\mark_\\venv\\newapp',
'C:\\Users\\mark_\\venv\\newapp\\lib\\site-packages'
```
