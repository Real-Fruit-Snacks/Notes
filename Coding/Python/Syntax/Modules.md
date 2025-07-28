---
tags:
  - python
---
## Installing & Managing Packages
Python 3.4+ includes `pip` by default. If you ever need to bootstrap it:

```bash
python3 -m ensurepip --default-pip
```

> **Tip:** It’s a good idea to keep `pip` itself up to date:
>
> ```bash
> python3 -m pip install --upgrade pip
> ```
### Installing Packages

| Source                   | Command                           | Notes                                         |
| ------------------------ | --------------------------------- | --------------------------------------------- |
| PyPI (online)            | `pip install <package>`           | e.g. `pip install requests`                   |
| Upgrade an existing      | `pip install --upgrade <package>` |                                               |
| From local folder        | `pip install .`                   | Runs the `setup.py` in your project directory |
| From a requirements file | `pip install -r requirements.txt` | Pin your dependencies for reproducibility     |
| List installed           | `pip list`                        |                                               |
| Show package info        | `pip show <package>`              | Version, location, dependencies, etc.         |
| Freeze versions          | `pip freeze > requirements.txt`   | Lock exact versions for deployment            |

> **Best practice:**
>
> - Use virtual environments (venv/virtualenv) to isolate project dependencies.
>     
> - Check `python -m venv .venv` then `source .venv/bin/activate` (or Windows: `.venv\Scripts\activate`).
>     

---
## Inspecting & Exploring Modules
Once a module is imported, these built‑ins help you explore what it offers:

| Function    | Description                          | Example                |
| ----------- | ------------------------------------ | ---------------------- |
| `dir(obj)`  | List all attributes/methods on `obj` | `dir(math)`            |
| `help(obj)` | Show documentation for `obj`         | `help(json.loads)`     |
| `type(obj)` | Return the type/class of `obj`       | `type(datetime.now())` |

```python
import math

print(dir(math))         # shows ['acos', 'asin', ... , 'pi', 'tau']
help(math.sqrt)          # displays signature and docstring
print(type(math))        # <class 'module'>
```

> **Tip:** Use `obj.__dict__` for a raw dict of an object’s namespace.

---
## Import Styles & Namespace
How you import determines how you refer to names:

```python
# 1) Full module import — keeps namespace clear
import math
print(math.sqrt(16))

# 2) Selective import — bring names into your scope
from math import sqrt, pi
print(sqrt(25), pi)

# 3) Aliasing — shorten long names
import numpy as np
print(np.array([1,2,3]))
```

> **Avoid** `from module import *` — it pollutes your namespace and makes it hard to see where names come from.

---
## The `codecs` Module: Encode & Decode
`codecs` provides a uniform interface for many text and binary encodings.

```python
import codecs

# Text → Rot13
rot = codecs.encode("Hello World", "rot_13")
print(rot)  
# → 'Uryyb Jbeyq'

# Bytes → Hex string
hexed = codecs.encode(b"Hello World", "hex")
print(hexed)  
# → b'48656c6c6f20576f726c64'

# Text → UTF‑16LE bytes
utf16 = codecs.encode("Hello", "utf-16le")
print(utf16)  
# → b'H\x00e\x00l\x00l\x00o\x00'

# Bytes → zlib‑compressed bytes
z = codecs.encode(b"Hello World", "zip")
print(z)  

# Bytes → Base64 string
b64 = codecs.encode(b"Hello World", "base64")
print(b64)  
# → b'SGVsbG8gV29ybGQ=\n'

# Double‑decode Rot13
original = codecs.encode(rot, "rot_13")
print(original)  
# → 'Hello World'
```

| Codec Name                | Purpose                             |
| ------------------------- | ----------------------------------- |
| `rot_13`                  | Simple letter‑rotation cipher       |
| `hex`                     | Hexadecimal representation of bytes |
| `base64`                  | Base64 text ↔ binary                |
| `zip`                     | zlib compression                    |
| `utf‑8`, `utf‑16le`, etc. | Standard Unicode encodings          |

> **Decoding** is just as easy:
>
> ```python
> back = codecs.decode(b64, "base64")
> print(back)      # b'Hello World\n'
> ```

> **Tip:** For most text encodings, you can also use built‑ins:
>
> ```python
> s = "café"
> b = s.encode("utf-8")        # str → bytes
> s2 = b.decode("utf-8")       # bytes → str
> ```
