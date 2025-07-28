---
tags:
  - python
---


A **dictionary** is a collection of key-value pairs in Python. Unlike lists, which use numeric indices, dictionaries use keys to access their associated values.

---

## Dictionary Basics

- Lists are indexed automatically using integers:

    ```python
    list1 = ['a', 'b', 'c']
    list1[0]  # returns 'a'
    ```
    
- Dictionaries use explicitly defined **keys** as indices:

    ```python
    dict1 = {'first': 'a', 'second': 'b', 'third': 'c'}
    dict1['first']  # returns 'a'
    ```
    
- Keys can be strings, integers, or other hashable Python objects
- Values can be any Python object, including numbers, strings, lists, or even other dictionaries
- Dictionary lookups are very fast and efficient

---

## Dictionary Methods

| Method          | Description                        |
| --------------- | ---------------------------------- |
| `dict.keys()`   | Returns a view of all keys         |
| `dict.values()` | Returns a view of all values       |
| `dict.items()`  | Returns a view of key-value tuples |

### Example:

```python
d = {'a': 'alpha', 'b': 'bravo', 'c': 'charlie'}

d.keys()     # dict_keys(['a', 'b', 'c'])
d.values()   # dict_values(['alpha', 'bravo', 'charlie'])
d.items()    # dict_items([('a', 'alpha'), ('b', 'bravo'), ('c', 'charlie')])
```

---

## Accessing and Modifying Dictionary Values

### Reading a Value by Key

```python
theOne = {
    "firstName": "Thomas",
    "lastName": "Anderson",
    "occupation": "Programmer"
}

theOne["company"] = "MetaCortex"

print(theOne["firstName"])  # Output: Thomas
```

### Adding a New Key-Value Pair

```python
theOne["company"] = "MetaCortex"
print(theOne)
# Output:
# {'firstName': 'Thomas', 'lastName': 'Anderson', 'occupation': 'Programmer', 'company': 'MetaCortex'}
```

### Changing the Value of an Existing Key

```python
theOne["occupation"] = "Superhero"
print(theOne)
# Output:
# {'firstName': 'Thomas', 'lastName': 'Anderson', 'occupation': 'Superhero', 'company': 'MetaCortex'}
```

---

## Looping Through a Dictionary

```python
thedict = {'a': 'alpha', 'b': 'bravo', 'c': 'charlie'}

for key in thedict:
    print(key, thedict[key])
```

**Output:**

```
a alpha
b bravo
c charlie
```

---

## Specialized Dictionaries: `defaultdict` and `Counter`

The `collections` module includes enhanced dictionary types.

---

### `defaultdict`

- Automatically creates a default value for any key that doesn't yet exist
- Requires a default function as its argument

```python
from collections import defaultdict

def default_list():
    return []

list_of_ips = defaultdict(default_list)

list_of_ips['src#1'].append('dst')
print(list_of_ips['src#2'])  # Outputs: []

print(list_of_ips)
# defaultdict(<function default_list>, {'src#1': ['dst'], 'src#2': []})
```

---

### `Counter`

- A subclass of `dict` that counts occurrences of each key
- Useful methods: `.most_common(n)`, `.update()`, `.elements()`, `.subtract()`

```python
import requests
from collections import Counter

c = Counter()
webcontent = requests.get('http://metasploit.com').text
c.update(webcontent.lower().split())

print(c.most_common(6))
# [('<a', 117), ('<div', 107), ('</div>', 103), ...]
```

### Cleaning the Counter

```python
for key in list(c.keys()):
    if "<" in key or ">" in key or "=" in key:
        del c[key]

print(c.most_common(8))
# [('security', 14), ('collapse', 13), ('the', 12), ...]
```

---

## Comparing Standard vs. `defaultdict` for Grouping Data

Build a dictionary that groups destination IPs by source IPs.

### Using Standard Dictionary

```python
hostdict = {}
for src, dst in host_ip_tuples:
    if src in hostdict:
        hostdict[src].append(dst)
    else:
        hostdict[src] = [dst]
```

### Using `defaultdict`

```python
from collections import defaultdict

hostdict = defaultdict(list)
for src, dst in host_ip_tuples:
    hostdict[src].append(dst)
```

The `defaultdict` version is shorter, cleaner, and avoids manual key checks.
