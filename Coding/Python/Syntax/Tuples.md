---
tags:
  - python
---

- Tuples are lightweight, less functional lists
- They’re a group of values or objects that have been stuck together
- Defined with parentheses (element, element, element) or just comma-separated values
- Individual elements of a tuple can still be read with their index; for example, Tuple[index]
- Assignments to individual elements of a tuple result in an error (they are immutable)

```python
# Example
movie = ("Meaning of Life","R")
>>> new_tuple = 100,50,"Hello world"
>>> print(new_tuple)
(100, 50, 'Hello world')
# Sorting Example
>>> last_first_nocase("JOSH Barone")
('barone', 'josh')
>>> names =["Mike Passel","alice Passel", "danielle Clayton"]
>>> sorted(names, key=last_first_nocase)
['danielle Clayton', 'alice Passel', 'Mike Passel']
```
