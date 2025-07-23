---
tags:
  - python
---

## What is Python??

- Python is an interpreted language.
    - Top-down, just-in-time interpretation of source code.
- A `.py` file is Python source code in its uncompressed format.
- A `.pyc` file is Python byte code. These files are no longer human readable.
    - Python automatically creates a byte-compiled `.pyc` file when a `.py` is imported. If you want to manually byte-compile a `.py` into a `.pyc` with the `py_compile` module with:

```python
>>> import py_compile
>>> py_compile.compile("script")
```

- Py2Exe and PyInstaller can create `.exe` files so that you can distribute programs on Windows Computers.

### Versions of Python

- On Linux, multiple versions can coexist on the same computer, but 'python' only points to one in your path.
- `/usr/bin/env python3` launches Python3 based on the PATH environment variable

Check Version:
```bash
python -V
```

### PEPs: Python Enhancement Proposals

- PEP 8 is "Style Guide for Python Code" - Naming conventions for Variables, Functions, Number of Spaces, etc...

### Running Python

1. **Command Line**: Provide scripts to interpreter on the command line `$ python3 -c "print('hello world')"`
2. **Execute Scripts**: Pass `.py` or `.pyc` script to the Python interpreter.
3. **Python Shell**: Running the Python interpreter interactively is a quick and easy way to write and test code snippets.
4. **Shebang:** At the beginning of the script tell the interpreter you are using python with `#!/usr/bin/python` or tell the terminal to use python with `python3 Script.py`
