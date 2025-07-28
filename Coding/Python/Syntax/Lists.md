---
tags:
  - python
---
A **list** in Python is an **ordered**, **mutable** collection of items. Lists can hold any type of object, including other lists.

---

## List Basics
- **Defined using** square brackets: `[]`
- **Create empty list**: `[]` or `list()`
- **Lists are zero-indexed** (first element is at index 0)
- **Mutable**: items can be changed after creation
- **Flexible**: can contain mixed data types
### Example
```python
names = ['Alice', 'Bob', 'Eve']
names[0]  # Output: 'Alice'
```

---

## Creating and Modifying Lists

```python
newlist = ['A', 'B', 'C']

# Overwrite an index
newlist[2] = "Z"

# Append to the end
newlist.append("D")
```

---

## Common List Methods

| Method                 | Description                       |
| ---------------------- | --------------------------------- |
| `append(value)`        | Add value to the end              |
| `insert(index, value)` | Insert value at specific position |
| `remove(value)`        | Remove first occurrence of value  |
| `del list[index]`      | Delete element by index           |
| `list[index] = value`  | Overwrite element at index        |
| `index(value)`         | Get index of first occurrence     |
| `count(value)`         | Count number of occurrences       |
| `sort()`               | Sort list in place                |
| `reverse()`            | Reverse the order of the list     |

### Example

```python
movies = ["Life of Brian", "Meaning of Life"]

movies.index("Meaning of Life")      # Output: 1
movies.insert(1, "Holy Grail")
movies.append("Free Willie")
movies.remove("Free Willie")
movies.reverse()
del movies[0]
```

---

## Adding Items to a List

```python
fruitList = ["apple", "banana", "orange"]
fruitList.append("mango")

print(fruitList)
# Output: ['apple', 'banana', 'orange', 'mango']
```

---

## Removing Items from a List

```python
fruitList = ["apple", "banana", "orange", "mango"]
fruitList.remove("mango")

print(fruitList)
# Output: ['apple', 'banana', 'orange']
```

---

## List References vs. Copies

```python
alist = ['elements', 'in a list', 500, 4.29]

# blist refers to the same list as alist
blist = alist
blist.append("New Item")

# Create a shallow copy
clist = list(alist)
clist.remove(500)

# Modify alist separately
del alist[0]
```

---

## String and List Conversion
### Splitting Strings into Lists with `.split()`

```python
"ONE TWO THREE".split()             # ['ONE', 'TWO', 'THREE']
"'a','b','c'".split(",")            # ["'a'", "'b'", "'c'"]
"HELLO_WORLD".split("_")           # ['HELLO', 'WORLD']
```
### Joining Lists into Strings with `.join()`
```python
" ".join(["Python", "is", "fun"])  # 'Python is fun'
",".join(["a", "b", "c"])          # 'a,b,c'
"".join(["abc", "123"])            # 'abc123'
```

---

## Sorting Lists
You can sort lists either in place or by generating a new sorted copy.

| Method         | Description                      |
| -------------- | -------------------------------- |
| `list.sort()`  | Sorts the list in place          |
| `sorted(list)` | Returns a new sorted list        |
| `reverse=True` | Sort in reverse order (optional) |
| `key=function` | Use custom logic for sorting     |
### Example
```python
customers = ["Mike Passel", "alice Passel", "danielle Clayton"]

# Case-insensitive sort
sorted(customers, key=lambda name: name.lower())

# Sort by last name first
def lastfirst(name):
    first, last = name.split()
    return (last + first).lower()

sorted(customers, key=lastfirst)
```

---

## List Comprehensions
List comprehensions offer a concise syntax for creating or transforming lists.
### Examples
```python
[a for a in [1, 2, 3, 4]]                        # [1, 2, 3, 4]
[a for a in [1, 2, 3, 4] if a > 2]               # [3, 4]
[a * 2 for a in [1, 2, 3, 4] if a > 2]           # [6, 8]
[int(a) for a in "1 2 3 4".split()]              # [1, 2, 3, 4]
[x for x, y in [("a", 4), ("b", 2), ("c", 7)]]   # ['a', 'b', 'c']
[(lambda x: x.upper())(x) for x in "make upper"]# ['M', 'A', 'K', 'E', ' ', 'U', 'P', 'P', 'E', 'R']
```
