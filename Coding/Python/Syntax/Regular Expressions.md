---
tags:
  - Python
  - RegularExpressions
---
## Common Regex Patterns
### Valid IPv4 Address

```python
import re

ipv4_pattern = re.compile(
    r'^(?:25[0-5]|2[0-4]\d|1?\d{1,2})'           # first octet: 0–255
    r'(?:\.(?:25[0-5]|2[0-4]\d|1?\d{1,2})){3}$'   # three more octets
)
```

- **Anchors** `^…$` ensure the entire string matches
- Octet breakdown:
    - `25[0-5]` → 250–255
    - `2[0-4]\d` → 200–249
    - `1?\d{1,2}` → 0–199

### Email Address

```python
email_pattern = re.compile(
    r'^[\w.+-]+@'              # local part: letters, digits, underscore, dot, plus, hyphen  
    r'[A-Za-z0-9-]+'           # domain label  
    r'(?:\.[A-Za-z0-9-]+)*'    # subdomains  
    r'\.[A-Za-z]+$'            # top‑level domain  
)
```

- `[\w.+-]+` matches one or more word chars plus `.`, `+`, `-`
- Domain: labels separated by `.`
- TLD: letters only

---
## Metacharacters & Anchors

| Symbol   | Meaning                                         | Example            |
| -------- | ----------------------------------------------- | ------------------ |
| `.`      | Any character except newline                    | `a.c` → “abc”      |
| `^`      | Start of string (or line with `MULTILINE` flag) | `^Hello` matches   |
| `$`      | End of string (or line with `MULTILINE` flag)   | `world$` matches   |
| `\d`     | Digit `[0-9]`                                   | `\d{3}` → “123”    |
| `\D`     | Non‑digit                                       | `\D+` → “abc”      |
| `\w`     | Word character `[A-Za-z0-9_]`                   | `\w+` → “var1”     |
| `\W`     | Non‑word character                              | `\W+` → “!!”       |
| `\s`     | Whitespace `[ \t\n\r\f\v]`                      | `\s+` → “ \t\n”    |
| `\S`     | Non‑whitespace                                  | `\S+` → “text”     |
| `\b`     | Word boundary (between `\w` and `\W`)           | `\bword\b`         |
| `\B`     | Non‑word boundary                               | `\Bend\B` → “bend” |
| `[...]`  | Character set                                   | `[A-Za-z]`         |
| `[^...]` | Negated set                                     | `[^0-9]`           |
| `        | `                                               | Alternation (OR)   |
| `()`     | Capturing group                                 | `(abc)+`           |
| `(?: )`  | Non‑capturing group                             | `(?:abc)+`         |

---

## Quantifiers

| Quantifier | Meaning          | Greedy vs. Lazy |
| ---------- | ---------------- | --------------- |
| `*`        | 0 or more        | Greedy: `.*`    |
| `+`        | 1 or more        | Greedy: `.+`    |
| `?`        | 0 or 1           | Greedy: `.?`    |
| `{m}`      | Exactly m        |                 |
| `{m,n}`    | Between m and n  |                 |
| `*?`       | 0 or more (lazy) | Lazy            |
| `+?`       | 1 or more (lazy) | Lazy            |
| `??`       | 0 or 1 (lazy)    | Lazy            |
| `{m,n}?`   | Between m and n  | Lazy            |

---
## Flags & Inline Modifiers

| Flag                  | Effect                                   | Inline |
| --------------------- | ---------------------------------------- | ------ |
| `re.IGNORECASE` (`i`) | Case‑insensitive matching                | `(?i)` |
| `re.MULTILINE` (`m`)  | `^`/`$` match at each line boundary      | `(?m)` |
| `re.DOTALL` (`s`)     | `.` matches newline too                  | `(?s)` |
| `re.VERBOSE` (`x`)    | Whitespace & comments in pattern allowed | `(?x)` |
| `re.ASCII` (`a`)      | `\w`, `\d`, `\s` match only ASCII chars  | `(?a)` |

---
## `re` Module Functions

| Function               | Description                                | Returns           |
| ---------------------- | ------------------------------------------ | ----------------- |
| `re.compile(pattern)`  | Compile pattern into a regex object        | `Pattern`         |
| `pattern.match(s)`     | Match only at the **start** of `s`         | `Match` or `None` |
| `pattern.search(s)`    | Search **anywhere** in `s`                 | `Match` or `None` |
| `pattern.findall(s)`   | Return a **list** of all matches (strings) | `List[str]`       |
| `pattern.finditer(s)`  | Return an **iterator** of `Match` objects  | `Iterator[Match]` |
| `pattern.sub(repl, s)` | Replace matches with `repl`                | New string        |
| `pattern.split(s)`     | Split `s` by occurrences of the pattern    | `List[str]`       |

> **Note:** If you pass bytes to `pattern`, use a **bytes** pattern (e.g. `b'\d+'`).

---
## Practical Examples

### Extract Words

```python
import re
text = "Hello, world! 123"
words = re.findall(r'\b\w+\b', text)
# → ['Hello', 'world', '123']
```

### Validate US Phone Numbers

```python
pattern = re.compile(r'^\+?1?\s*\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{4}$')
for num in ["+1 (555) 123-4567", "5551234567"]:
    print(bool(pattern.match(num)))
# → True, True
```

### Split on Commas (Ignore Spaces)

```python
re.split(r'\s*,\s*', "a, b ,c , d")
# → ['a', 'b', 'c', 'd']
```

### Mask Email Addresses

```python
import re
s = "Contact: user@example.com"
masked = re.sub(r'[\w.+-]+@[\w.-]+\.\w+', '[email]', s)
# → "Contact: [email]"
```

