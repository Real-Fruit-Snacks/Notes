---
tags:
  - Python
  - Strings
---
## String Basics
A string is a sequence of characters (letters, digits, symbols, whitespace). In Python, strings are immutable and Unicode by default.

```python
s = "Hello, World!"
print(type(s))  # <class 'str'>
```

---
## Inspecting Strings
- `type(obj)` → the object’s type.
- `dir(obj)` → list of all attributes and methods.
- `help(str)` → full documentation for string methods.

```python
>>> a = "example"
>>> type(a)
<class 'str'>
>>> dir(a)[:10]
['__add__', '__class__', '__contains__', '__delattr__', '__doc__', …]
```

---
## Quotes and Raw Strings
```python
# Single, double, or triple quotes all work:
s1 = 'single-quoted'
s2 = "double-quoted"
s3 = '''triple
single-quoted'''
s4 = """triple
double-quoted"""

# Embedding quotes:
s5 = "She said, 'Hello!'"
s6 = 'He replied, "Hi!"'
s7 = "Backslash: \" or \\"

# Raw strings—backslashes are literal:
raw = r"C:\new_folder\test.txt"
```

---
## F‑Strings (Python 3.6+)
Embed expressions directly inside string literals with `f"…"`.

```python
name = "Alice"
score = 95
print(f"{name} scored {score}%")  
# → Alice scored 95%

# Format specifiers inside braces:
value = 255
print(f"Hex: {value:#04x}")        # → Hex: 0xff
print(f"Centered: {name:*^10}")    # → **Alice***
```

---
## The `format()` Method
Flexible placeholder replacement with positional or keyword fields.

```python
s = "X={0}, Y={1}".format(10, 20)         
# → "X=10, Y=20"

s = "First={first}, Second={second}".format(first='A', second='B')
# → "First=A, Second=B"
```

---

## Bytes vs. Str

- Use `b"…"`, `bytes(...)` to create a bytes object.
- `bytes_obj.decode(enc)` → `str`
- `str_obj.encode(enc)` → `bytes`

```python
b = b"hello"
print(b.decode("utf-8"))   # "hello"
print("world".encode())    # b'world'
```

---
## Unicode Escapes
Embed characters by code point:
- `\xhh` → byte (2 hex digits)
- `\uhhhh` → Unicode 16‑bit (4 hex digits)
- `\Uhhhhhhhh` → Unicode 32‑bit (8 hex digits)

```python
print("\u03A9")   # Ω
print("\U0001F600")  # 😀
```

---
## chr() and ord()
Convert between integers and their Unicode characters:

```python
print(chr(65))   # 'A'
print(ord('A'))  # 65
```

---

## Slicing Strings
Syntax: `s[start:end:step]`
- `start` defaults to 0
- `end` is exclusive, defaults to len(s)
- `step` defaults to 1
- Negative indices count from end; negative step reverses.

```python
s = "Python rocks"
print(s[:6])      # 'Python'
print(s[-5:])     # 'rocks'
print(s[::-1])    # 'skcor nohtyP'
print(s[2:10:2])  # 'to oc'
```

---
## Case Conversion

| Method         | Description                                | Example                                   |
| -------------- | ------------------------------------------ | ----------------------------------------- |
| `upper()`      | All characters → uppercase                 | `"aBc".upper()` → `"ABC"`                 |
| `lower()`      | All characters → lowercase                 | `"A B".lower()` → `"a b"`                 |
| `title()`      | Words start with uppercase, rest lowercase | `"hello world".title()` → `"Hello World"` |
| `capitalize()` | First char uppercase, rest lowercase       | `"hI".capitalize()` → `"Hi"`              |
| `swapcase()`   | Swap case of each character                | `"PyThOn".swapcase()` → `"pYtHoN"`        |

---
## Searching & Replacing

| Method                     | What it does                                      | Example                              |
| -------------------------- | ------------------------------------------------- | ------------------------------------ |
| `count(sub[, start,end])`  | Count non‑overlapping occurrences of `sub`        | `"banana".count("an")` → `2`         |
| `find(sub[, start,end])`   | Lowest index of `sub`, or -1 if not found         | `"hello".find("l")` → `2`            |
| `rfind(sub)`               | Highest index of `sub`, or -1                     | `"hello".rfind("l")` → `3`           |
| `index(sub)`               | Like `find()`, but raises `ValueError` if missing | `"hello".index("x")` → `ValueError`  |
| `replace(old,new[,count])` | Return new string with replacements               | `"aaa".replace("a","b",2)` → `"bba"` |

---
## Testing Methods

| Method      | Checks whether all characters satisfy… | Example                            |
| ----------- | -------------------------------------- | ---------------------------------- |
| `isalnum()` | alphanumeric (letters & digits)        | `"abc123".isalnum()` → `True`      |
| `isalpha()` | alphabetic letters only                | `"abc".isalpha()` → `True`         |
| `isdigit()` | digits only                            | `"123".isdigit()` → `True`         |
| `islower()` | lowercase letters only                 | `"a".islower()` → `True`           |
| `isupper()` | uppercase letters only                 | `"A".isupper()` → `True`           |
| `istitle()` | title case (each word capitalized)     | `"Hello World".istitle()` → `True` |
| `isspace()` | whitespace characters only             | `" \t\n".isspace()` → `True`       |

---
## Trimming & Padding

| Method                     | Description                                            | Example                           |
| -------------------------- | ------------------------------------------------------ | --------------------------------- |
| `strip([chars])`           | Remove leading & trailing whitespace/chars             | `" hi ".strip()` → `"hi"`         |
| `lstrip([chars])`          | Remove leading whitespace/chars                        | `"...".lstrip(".")`               |
| `rstrip([chars])`          | Remove trailing whitespace/chars                       | `"...".rstrip(".")`               |
| `center(width[,fillchar])` | Center in field of given width, padded with `fillchar` | `"hi".center(6,"-")` → `"--hi--"` |
| `ljust(width[,fillchar])`  | Left‑justify in field                                  | `"hi".ljust(5,".")` → `"hi..."`   |
| `rjust(width[,fillchar])`  | Right‑justify in field                                 | `"hi".rjust(5,".")` → `"...hi"`   |
| `zfill(width)`             | Pad with leading zeros                                 | `"42".zfill(5)` → `"00042"`       |

---
## Splitting & Joining

| Method                        | Description                               | Example                                      |
| ----------------------------- | ----------------------------------------- | -------------------------------------------- |
| `split(sep=None,maxsplit=-1)` | Split on `sep` (whitespace if `None`)     | `"a b c".split()` → `['a','b','c']`          |
| `rsplit(sep,maxsplit)`        | Split from right, up to `maxsplit` times  | `"a,b,c".rsplit(",",1)` → `['a,b','c']`      |
| `splitlines([keepends])`      | Split at line boundaries                  | `"a\nb".splitlines()` → `['a','b']`          |
| `partition(sep)`              | Split into `(before, sep, after)` once    | `"a-b-c".partition("-")` → `('a','-','b-c')` |
| `rpartition(sep)`             | Like `partition()`, but from the right    |                                              |
| `join(iterable)`              | Concatenate with this string as separator | `" ".join(['a','b','c'])` → `"a b c"`        |

---
## Translation & Encoding Helpers

- `translate(table)` with `str.maketrans()` for character‑by‑character mapping.
- `encode(encoding, errors)` → `bytes`
- `bytes_obj.decode(encoding, errors)` → `str`

```python
# Rotate vowels to uppercase:
tbl = str.maketrans("aeiou", "AEIOU")
print("hello world".translate(tbl))  # "hEllO wOrld"
```

