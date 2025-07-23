---
tags:
  - python
---

## Installing Additional Modules

The package manager, pip is installed by default on Python 3.4 and later. If you are on a Python system that doesn't have pip, you should first try to install it with the ensurepip module. This module will adapt the pip installation process to the OS and environment that Python is running on.

```bash
python -m ensurepip --default-pip
```

You can install packages from a local folder containing `setup.py`

```bash
pip install .
```

### What can I do with these modules?

```bash
dir()  # lists all attributes and methods inside the object.
help() # displays help for a given module, attribute, or method.
type() # will tell you what kind of data you are dealing with
```

### Using Modules

- How you refer to an object or function in a module depends on how you import the module.
- If you use `import module`, you use module.function() when calling your function
- If you use `from module import <function>`, you can use it as though it were defined in your program

```python
# Use module.function()
import math
math.add(1,2)
# Use
from math import add
add(1,2)
```

## codecs

### Encode and Decode

```python
>>> import codecs
>>> codecs.encode("Hello World","rot13")
'Uryyb Jbeyq'
>>> codecs.encode(b"Hello World","HEX")
'48656c6c6f20576f726c64'
>>> codecs.encode("Hello World","utf-16le")
'H\x00e\x00l\x00l\x00o\x00 \x00W\x00o\x00r\x00l\x00d\x00'
>>> codecs.encode(b"Hello World","zip")
'x\x9c\xf3H\xcd\xc9\xc9W\x08\xcf/\xcaI\x01\x00\x18\x0b\x04\x1d'
>>> codecs.encode(b"Hello World","base64")
'SGVsbG8gV29ybGQ=\n'
>>> codecs.encode(codecs.encode("Hello World","rot13"),"rot13")
'Hello World'
```
