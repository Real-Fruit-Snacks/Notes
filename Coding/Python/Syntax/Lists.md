---
tags:
  - Python
  - Lists
---
## What Is a List?
- **Ordered** collection: items stay in the order you put them.
- **Mutable**: you can change, add, or remove elements after creation.
- **Heterogeneous**: mix ints, strings, objects—even other lists.

```python
mixed = [1, "two", 3.0, [4, 5]]
```

---
## Creating Lists

```python
# Literal syntax (most common)
empty     = []
letters   = ['a', 'b', 'c']

# Built‑in constructor
nums_list = list((1, 2, 3))
chars     = list("hello")   # ['h','e','l','l','o']
```

---
## Accessing & Slicing

```python
L = ['zero','one','two','three','four']

# Indexing (zero-based)
print(L[0])    # 'zero'
print(L[-1])   # 'four'

# Slicing: [start:stop:step]
print(L[1:4])   # ['one','two','three']
print(L[:3])    # ['zero','one','two']
print(L[::2])   # ['zero','two','four']
print(L[::-1])  # ['four','three','two','one','zero']
```

---

## Modifying Lists

- **Overwrite element**

    ```python
    L = [10, 20, 30]
    L[1] = 99
    print(L)     # [10, 99, 30]
    ```
    
- **Append**

    ```python
    L = [1, 2, 3]
    L.append(4)
    print(L)     # [1, 2, 3, 4]
    ```
    
- **Insert at position**

    ```python
    L = ['a', 'c', 'd']
    L.insert(1, 'b')
    print(L)     # ['a', 'b', 'c', 'd']
    ```
    
- **Extend by another iterable**

    ```python
    L = [1, 2]
    L.extend([3, 4, 5])
    print(L)     # [1, 2, 3, 4, 5]
    ```
    
- **Remove by value**

    ```python
    L = ['apple', 'banana', 'cherry']
    L.remove('banana')
    print(L)     # ['apple', 'cherry']
    ```
    
- **Pop by index (or last element)**

    ```python
    L = [100, 200, 300]
    x = L.pop(1)
    print(x)     # 200
    print(L)     # [100, 300]
    y = L.pop()
    print(y)     # 300
    print(L)     # [100]
    ```
    
- **Delete slice or element**

    ```python
    L = [0, 1, 2, 3, 4]
    del L[2]
    print(L)     # [0, 1, 3, 4]
    del L[1:3]
    print(L)     # [0, 4]
    ```
    
- **Clear all elements**

    ```python
    L = [9, 8, 7]
    L.clear()
    print(L)     # []
    ```
    
- **Reverse in place**

    ```python
    L = ['a', 'b', 'c']
    L.reverse()
    print(L)     # ['c', 'b', 'a']
    ```
    
- **Sort in place**

    ```python
    L = [5, 1, 4, 2, 3]
    L.sort()
    print(L)     # [1, 2, 3, 4, 5]
    L.sort(reverse=True)
    print(L)     # [5, 4, 3, 2, 1]
    ```
    
- **Copy (shallow)**

    ```python
    L = [1, 2, [3, 4]]
    C = L.copy()
    C.append(5)
    print(L)     # [1, 2, [3, 4]]
    print(C)     # [1, 2, [3, 4], 5]
    C[2].append(99)
    print(L)     # [1, 2, [3, 4, 99]]  (inner list is shared)
    ```
    

---

## Shallow vs. Deep Copies

```python
import copy
orig    = [[1, 2], [3, 4]]
shallow = orig.copy()
deep    = copy.deepcopy(orig)

shallow[0].append(9)
print(orig)   # [[1, 2, 9], [3, 4]]
```

---

## List References

```python
a = [1, 2, 3]
b = a
b.append(4)
print(a)  # [1, 2, 3, 4]
```

---

## Converting to & from Strings

```python
# Split string → list
words = "one two three".split()
print(words)  # ['one', 'two', 'three']

# Join list → string
s = "-".join(['2025','07','28'])
print(s)      # '2025-07-28'
```

---

## Sorting & Ordering

```python
nums = [5, 2, 9, 1]
print(sorted(nums))              # [1, 2, 5, 9]

names = ["Bob", "alice", "Charlie"]
print(sorted(names, key=str.lower))
# ['alice', 'Bob', 'Charlie']

# Custom key: sort by length
words = ["hi", "hello", "hey"]
print(sorted(words, key=len))    # ['hi', 'hey', 'hello']
```

---

## List Comprehensions

```python
# Squares of even numbers
print([i*i for i in range(10) if i % 2 == 0])
# [0, 4, 16, 36, 64]

# Flatten a 2D list
matrix = [[1, 2], [3, 4]]
print([n for row in matrix for n in row])
# [1, 2, 3, 4]
```

---

## Advanced Tips & Gotchas

- Avoid using `+` to concatenate in loops—prefer `.append()` or comprehensions.
    
- To pre‑allocate:

    ```python
    L = [None] * 5
    ```
    
- Beware of `*` with mutable elements:

    ```python
    L = [[]] * 3
    L[0].append(1)
    print(L)  # [[1], [1], [1]]
    ```
    
- For large or infinite sequences, consider `itertools` instead of giant lists.