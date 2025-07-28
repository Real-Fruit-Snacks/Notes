---
tags:
  - Python
  - Debugging
---
## Python Debugger (`pdb`) Overview

Python’s built‑in debugger lets you pause execution, inspect variables, and step through code interactively. It ships with the standard library—no installation required.

---

## 1. In‑Code Breakpoints (Python 3.7+)

Insert a breakpoint directly in your code.

```python
def calculate(x):
    breakpoint()         # Execution stops here, enters pdb
    return x * 2

# When you run this, you get a (Pdb) prompt at the breakpoint
calculate(5)
```

> Under the hood, `breakpoint()` calls `import pdb; pdb.set_trace()`. You can override its behavior by setting the `PYTHONBREAKPOINT` environment variable.

---

## 2. Explicit `set_trace()` (Pre‑3.7)

Manually import `pdb` and invoke `set_trace()`.

```python
import pdb

def calculate(x):
    pdb.set_trace()     # Starts pdb here
    return x * 2

calculate(5)
```

At the `(Pdb)` prompt you can enter commands (see “Common Commands” below).

---

## 3. Command‑Line Debug Mode

Launch your entire script under the debugger.

```bash
python -m pdb script.py
```

- The program begins in pdb immediately.
- You can set breakpoints before running lines:
    ```pdb
    (Pdb) b 10      # Break at line 10
    (Pdb) c         # Continue until the next breakpoint
    ```

---

## 4. Post‑Mortem Debugging

Inspect state after an unhandled exception.

1. Run interactively so the session remains open after a crash:
    ```bash
    python -i script.py
    ```
2. Once it errors out, at the interactive prompt:
    ```python
    import pdb
    pdb.pm()         # Enter post‑mortem pdb session
    ```
    
3. You’ll drop into the frame where the exception occurred, letting you inspect locals, stack, etc.
    

---

## Common `pdb` Commands

| Command     | Purpose                                  | Example                 |
| ----------- | ---------------------------------------- | ----------------------- |
| `l`         | List source around current line          | `(Pdb) l`               |
| `n`         | Execute next line (step over)            | `(Pdb) n`               |
| `s`         | Step into function calls                 | `(Pdb) s`               |
| `c`         | Continue until next breakpoint or finish | `(Pdb) c`               |
| `p`         | Print the value of an expression         | `(Pdb) p variable_name` |
| `b`         | Set breakpoint (e.g. `b 25` or `b func`) | `(Pdb) b my_function`   |
| `tbreak`    | Temporary breakpoint                     | `(Pdb) tbreak 30`       |
| `disable`   | Disable a breakpoint by number           | `(Pdb) disable 1`       |
| `where`/`w` | Show the current stack trace             | `(Pdb) where`           |
| `q`         | Quit the debugger and abort execution    | `(Pdb) q`               |

---

## Tips & Best Practices

- **Customize `breakpoint()`**: set `PYTHONBREAKPOINT=0` to disable; or to `mypkg.debugger.set_trace` for a custom hook.
- **Use a `.pdbrc` file**: configure default commands, aliases, and layouts when pdb starts.
- **Combine with logging**: use `pdb.set_trace()` in exception handlers to inspect unexpected states.
- **Graphical front‑ends**: many IDEs and editors (VS Code, PyCharm) provide GUI wrappers around pdb.
