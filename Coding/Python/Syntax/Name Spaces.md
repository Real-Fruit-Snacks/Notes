---
tags:
  - Python
  - NameSpaces
---
## What Is a Namespace?

A **namespace** is simply a mapping from names (identifiers) to objects. Think of it as a dictionary where each key is a name and each value is the thing that name refers to.

```python
x = 10
# In the global namespace, 'x' → 10
```

---
## The Four Levels of Name Resolution (LEGB)
When Python encounters a name, it searches these namespaces **in order**:

| Letter | Namespace | What’s in It                                      |
| ------ | --------- | ------------------------------------------------- |
| **L**  | Local     | Names defined inside the current function/method  |
| **E**  | Enclosing | Names in any enclosing (outer) function scopes    |
| **G**  | Global    | Names at the module level (top‑level script/file) |
| **B**  | Built‑in  | Names pre‑defined in Python (e.g. `len`, `int`)   |

> **Example:**
>
> ```python
> def outer():
>     x = "enclosing"
>     def inner():
>         x = "local"
>         print(x)      # → "local" (found in L)
>     inner()
>     print(x)          # → "enclosing" (found in E)
> 
> x = "global"
> outer()
> print(x)              # → "global" (found in G)
> ```
>
> If no match is found in any of L, E, or G, Python falls back to B (built‑ins).

---
## Common Namespaces in Practice

| Namespace     | How It’s Created                          | How to Inspect                     |
| ------------- | ----------------------------------------- | ---------------------------------- |
| **Global**    | At top level of a module/script           | `globals()`                        |
| **Local**     | On entry to a function or method          | `locals()` (inside that function)  |
| **Enclosing** | When you nest one function inside another | Seen automatically in closures     |
| **Built‑in**  | Automatically loaded at startup           | `import builtins; dir(builtins)`   |
| **Class**     | When defining class attributes/methods    | `MyClass.__dict__`                 |
| **Module**    | Whenever you `import module`              | `module.__dict__` or `dir(module)` |

---
## Examples & Introspection
### Global vs. Local

```python
x = "global"

def func():
    x = "local"
    print("Inside func:", locals())   # shows {'x': 'local'}
    print("globals contains x?:", 'x' in globals())

func()
print("At module level:", globals()['x'])  # → "global"
```

### Enclosing (Closure)

```python
def outer():
    y = "enclosing"
    def inner():
        print("Inner sees y =", y)     # captures from enclosing scope
    return inner

f = outer()
f()                                     # → Inner sees y = enclosing
```

### Built‑ins

```python
print(len("hello"))       # 'len' found in built‑ins
print("len" in globals()) # False
```

---

## Best Practices & Tips

- **Avoid `from module import *`**
    This dumps everything into your global namespace and can cause name collisions.
- **Use clear, distinct names**
    Minimizes shadowing of globals with locals.
- **Leverage namespaces for organization**
    Group related functions/constants in modules or classes.
- **Inspect only when debugging**
    Calling `globals()`/`locals()` is handy for debugging but can be noisy; trust Python’s lookup rules.

