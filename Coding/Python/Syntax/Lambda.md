---
tags:
  - python
---

There is more than one way to declare a function

- **Method #1:** Use the "def" statement:
- **Method #2:** Assign a variable to a lambda function
- **Method #3:** Drop the name with lambda in parentheses

```python
# Method 1
def inc(number):
   return number + 1
# Method 2
>>> inc = lambda number : number + 1
>>> inc(5)
6
# Method 3
>>> (lambda number : number + 1)(5)
6
```
