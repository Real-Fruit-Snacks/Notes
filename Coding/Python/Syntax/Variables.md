---
tags:
  - python
---
## Name Lookup (LEGB)
When you reference a variable, Python searches these namespaces **in order**:

| Scope         | Description                                                     |
| ------------- | --------------------------------------------------------------- |
| **Local**     | Names defined in the current function                           |
| **Enclosing** | Names in any outer (enclosing) function scopes                  |
| **Global**    | Names defined at the top level of the module (file)             |
| **Built‑in**  | Predefined names in the `builtins` module (e.g. `print`, `len`) |

```python
x = "global"

def outer():
    x = "enclosing"
    def inner():
        x = "local"
        print(x)           # → "local" (found in Local)
    inner()
    print(x)               # → "enclosing" (found in Enclosing)

outer()
print(x)                   # → "global" (found in Global)
print(len("abc"))          # → 3 (len from Built‑in)
```

> **Writing to Globals:**
> If you need to assign to a global name inside a function, declare it with `global`:
>
> ```python
> count = 0
> def inc():
>     global count
>     count += 1
> ```

---
## Readable Big‑Number Literals
You can place underscores between digits in integer and float literals to improve readability:

```python
universe_age = 14_000_000_000     # 14 billion
price = 1_234.56                  # same as 1234.56
```

> Underscores are ignored by the parser—this is purely for human readability.

---
## Multiple Assignment
Assign multiple variables in one statement, using a comma‑separated tuple on the right:

```python
# Initialize three counters to zero
x, y, z = 0, 0, 0

# Swap two variables without a temp
a, b = 1, 2
a, b = b, a       # now a==2, b==1

# Unpack any iterable:
coords = (10, 20, 30)
x, y, z = coords
```

> This packs the right‑hand values into a tuple, then unpacks them into the left‑hand names.

---
## Constants by Convention
Python has no built‑in “constant” type. By convention, names written in **ALL_CAPS** signal that they should not be reassigned:

```python
MAX_CONNECTIONS = 5000
DEFAULT_TIMEOUT = 30  # seconds

def connect():
    # …use MAX_CONNECTIONS and DEFAULT_TIMEOUT…
    pass
```

> Following this convention makes your code clearer to readers and tools (linters) that might warn on reassignment.

