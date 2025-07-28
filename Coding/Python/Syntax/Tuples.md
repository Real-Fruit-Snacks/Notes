---
tags:
  - Python
  - Tuples
---
An **immutable**, ordered sequence of elements. Tuples are like lightweight lists—ideal when you want a fixed collection of items.

---
## Creating Tuples
```python
# With parentheses
movie = ("Meaning of Life", "R")

# Without parentheses (comma-separated)
new_tuple = 100, 50, "Hello world"

# Single‑element tuple needs a trailing comma
single = ("only",)  
not_a_tuple = ("only")  # this is just a string
```

---
## Accessing Elements
- **Indexing**: zero‑based
- **Slicing**: just like lists

```python
t = ("a", "b", "c", "d")
print(t[1])      # 'b'
print(t[-1])     # 'd'
print(t[1:3])    # ('b', 'c')
```

---
## Immutability
- You **cannot** assign to individual elements
- Trying `t[0] = "x"` → `TypeError: 'tuple' object does not support item assignment`

Immutability makes tuples hashable (so they can be keys in dicts or elements of sets).

---
## Packing & Unpacking
```python
# Packing
coords = (10, 20)

# Unpacking
x, y = coords
print(x, y)   # 10 20

# Swapping values
a, b = 1, 2
a, b = b, a
```

---
## Common Tuple Operations

| Operation         | Syntax            | Example                        |
| ----------------- | ----------------- | ------------------------------ |
| Length            | `len(t)`          | `len((1,2,3))` → `3`           |
| Concatenation     | `t1 + t2`         | `(1,2) + (3,4)` → `(1,2,3,4)`  |
| Repetition        | `t * n`           | `("a",) * 3` → `("a","a","a")` |
| Membership test   | `x in t`          | `2 in (1,2,3)` → `True`        |
| Count occurrences | `t.count(x)`      | `(1,2,2,3).count(2)` → `2`     |
| Find first index  | `t.index(x)`      | `(1,2,3).index(2)` → `1`       |
| Convert to tuple  | `tuple(iterable)` | `tuple([1,2,3])` → `(1,2,3)`   |

---
## Using Tuples for Sorting
Often functions return a tuple key to sort by multiple criteria:

```python
def last_first_nocase(name):
    last, first = name.split()
    return last.lower(), first.lower()

names = ["Mike Passel", "alice Passel", "danielle Clayton"]
sorted_names = sorted(names, key=last_first_nocase)
print(sorted_names)
# ['danielle Clayton', 'alice Passel', 'Mike Passel']
```

Here, each key is a tuple `('lastname', 'firstname')`, so sorting respects last-name order and breaks ties on first name.

