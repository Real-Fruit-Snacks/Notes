---
tags:
  - Python
  - Dictionary
---
## What Is a Dictionary?

- A **mapping** of **keys** to **values**.
- **Unordered** (insertion order preserved since Python 3.7).
- **Mutable**: you can add, change, or remove entries.
- **Keys** must be hashable (e.g. strings, numbers, tuples).
- **Values** can be any object.

```python
# Example: mixed key and value types
info = {
    "name": "Neo",
    42: [1, 2, 3],
    ("x","y"): {"nested": True}
}
```

---

## Creating Dictionaries

```python
# Literal syntax (most common)
d1 = {'a': 1, 'b': 2}

# Built-in constructor from sequence of pairs
d2 = dict([('x', 10), ('y', 20)])

# Keyword args
d3 = dict(name="Alice", age=30)

# From two parallel lists
keys   = ['red','green','blue']
values = [1, 2, 3]
d4     = dict(zip(keys, values))

# Comprehension
d5 = {n: n*n for n in range(5)}  # {0:0, 1:1, 2:4, 3:9, 4:16}
```

---

## Accessing Values

```python
d = {'first': 'a', 'second': 'b'}

# Direct indexing (KeyError if missing)
print(d['first'])         # a

# Safe lookup with default
print(d.get('third'))     # None
print(d.get('third', 0))  # 0

# Ensure a key exists with default
x = d.setdefault('third', 'c')
print(x)                  # c
print(d)                  # {'first':'a','second':'b','third':'c'}
```

---

## Adding & Updating Entries

```python
d = {}

# Simple assignment (adds or overwrites)
d['a'] = 1
d['a'] = 2              # overwrite
print(d)                # {'a': 2}

# Update multiple entries at once
d.update({'b': 3, 'c': 4})
print(d)                # {'a':2, 'b':3, 'c':4}

# Merging into a new dict (Python 3.9+)
d2 = {'c': 5, 'd': 6}
merged = d | d2
print(merged)           # {'a':2, 'b':3, 'c':5, 'd':6}
```

---

## Removing Entries

```python
d = {'a':1, 'b':2, 'c':3}

# Remove by key, return its value
val = d.pop('b')
print(val, d)           # 2, {'a':1, 'c':3}

# Remove and return an arbitrary item
item = d.popitem()
print(item, d)          # e.g. ('c',3), {'a':1}

# Delete by key
del d['a']
print(d)                # {}

# Clear all entries
d = {'x':1}
d.clear()
print(d)                # {}
```

---

## Common Dictionary Methods

| Method                  | Description                             | Example                                 |
| ----------------------- | --------------------------------------- | --------------------------------------- |
| `d.keys()`              | View of keys                            | `dict_keys(['a','b'])`                  |
| `d.values()`            | View of values                          | `dict_values([1,2])`                    |
| `d.items()`             | View of (key, value) pairs              | `dict_items([('a',1),('b',2)])`         |
| `d.get(key[, default])` | Return `d[key]` or `default`            | `d.get('z', 0)` → `0`                   |
| `d.setdefault(k, v)`    | `d[k]` if exists, else sets to `v`      | `d.setdefault('x', [])`                 |
| `d.update(other)`       | Merge another mapping into `d`          | `d.update({'c':3})`                     |
| `d.pop(key[, default])` | Remove `key`, return value or `default` | `d.pop('a')`                            |
| `d.popitem()`           | Remove and return an arbitrary `(k,v)`  | `('c',3)`                               |
| `d.clear()`             | Remove all items                        | `d.clear()` → `{}`                      |
| `d.copy()`              | Shallow copy of the dict                | New dict object, same nested references |

---

## Iterating Over a Dictionary

```python
d = {'a':1, 'b':2, 'c':3}

# Keys
for k in d:
    print(k)
# a
# b
# c

# Values
for v in d.values():
    print(v)
# 1 2 3

# Key-Value pairs
for k, v in d.items():
    print(k, v)
# a 1
# b 2
# c 3
```

---

## Dictionary Comprehensions

```python
# Invert a dict
orig = {'a':1, 'b':2}
inv = {v: k for k, v in orig.items()}
print(inv)            # {1:'a', 2:'b'}

# Filter items
d = {'a':1, 'b':2, 'c':3}
d2 = {k: v for k, v in d.items() if v % 2}
print(d2)             # {'a':1, 'c':3}
```

---

## Membership & Length

```python
d = {'x':10, 'y':20}

print('x' in d)           # True
print(10 in d.values())   # True
print(len(d))             # 2
```

---

## Specialized Dictionaries

### `defaultdict`

Automatically creates default values for missing keys.

```python
from collections import defaultdict

dd = defaultdict(int)
dd['count'] += 1
print(dd)    # defaultdict(<class 'int'>, {'count':1})
```

### `Counter`

Counts occurrences of hashable items.

```python
from collections import Counter

words = ["spam","eggs","spam","ham"]
c = Counter(words)
print(c)                # Counter({'spam':2,'eggs':1,'ham':1})

# Most common
print(c.most_common(2)) # [('spam',2),('eggs',1)]
```
