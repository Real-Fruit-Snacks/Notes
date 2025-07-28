---
tags:
  - python
---

## Python Debugger (PDB)

Python’s built-in debugger, `pdb`, is a powerful tool for inspecting and controlling the flow of a program during execution. It comes preinstalled with Python.
There are four common ways to use `pdb`:

---

### 1. Using `breakpoint()` (Python 3.7+)

Insert the `breakpoint()` function in your code to pause execution and enter debugging mode.

```python
def calculate(x):
    breakpoint()  # Debugger starts here
    return x * 2

calculate(5)
```

> `breakpoint()` is equivalent to `import pdb; pdb.set_trace()` in older versions of Python.

---

### 2. Using `import pdb; pdb.set_trace()` (Python < 3.7)

If you're using Python versions earlier than 3.7, use the following:

```python
import pdb

def calculate(x):
    pdb.set_trace()
    return x * 2

calculate(5)
```

This starts the debugger at the point where `pdb.set_trace()` is called.

---

### 3. Running a Script in Debug Mode from the Command Line

You can launch a script under `pdb` directly from the terminal:

```bash
python -m pdb script.py
```

This starts your program in interactive debug mode from the very beginning.

---

### 4. Debugging After a Crash (Post-Mortem Debugging)

If your script crashes, you can inspect the state after the exception using an interactive shell:

```bash
python -i script.py
```

Once the crash occurs, enter the following in the interactive shell:

```python
import pdb
pdb.pm()
```

This invokes the debugger in **post-mortem mode**, allowing you to explore the state of the program at the time of the error.
