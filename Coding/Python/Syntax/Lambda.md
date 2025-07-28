---
tags:
  - python
---
Python supports several ways to define functions, depending on the use case. All approaches create **callable objects**, but differ in readability, flexibility, and common usage.

---
## Method 1: Traditional Function Definition with `def`
This is the most readable and widely used way to define a function.

```python
def inc(number):
    return number + 1

inc(5)  # Output: 6
```

---
## Method 2: Lambda Function Assigned to a Variable
Use `lambda` to create small, anonymous functions. Useful for simple one-line operations.

```python
inc = lambda number: number + 1
inc(5)  # Output: 6
```

- `lambda` is often used in functional programming or with tools like `map()`, `filter()`, and `sorted()`.

---
## Method 3: Anonymous Lambda Function (Inline Call)
You can define and immediately invoke a lambda function without assigning it to a variable.

```python
(lambda number: number + 1)(5)  # Output: 6
```

- This is useful when the function is needed only once and doesn't require reuse or a name.
