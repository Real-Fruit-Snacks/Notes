---
tags:
  - python
---
## Overview

Python lets you create callable objects (functions) in several ways—each with its own style, readability, and common use cases. All approaches yield callables you can invoke with arguments.

---
## 1. Traditional Definition with `def`
The most readable and feature‑rich way to declare a function.

```python
def inc(number):
    """Return number plus one."""
    return number + 1

print(inc(5))    # Output: 6
```

- Supports a full function body with multiple statements.
- Can include a docstring, annotations, default parameters, and more.
- Ideal for complex logic and public APIs.

---

## 2. Lambda Assigned to a Variable
Create a small, anonymous function in a single expression and bind it to a name.

```python
inc = lambda number: number + 1
print(inc(5))    # Output: 6
```

- Syntax: `lambda <params>: <expression>`
- Limited to a single expression—no statements or docstrings.
- Commonly used for short callbacks, e.g. as arguments to `map()`, `filter()`, or `sorted()`:

```python
numbers = [3, 1, 4, 2]
sorted_nums = sorted(numbers, key=lambda x: -x)
print(sorted_nums)   # Output: [4, 3, 2, 1]
```

---

## 3. Inline Anonymous Lambda (Immediate Invocation)

Define and call a one‑off lambda in place—useful when you need a quick, disposable function.

```python
result = (lambda number: number + 1)(5)
print(result)    # Output: 6
```

- No name is assigned; the lambda exists only for that single call.
- Handy for throwaway transformations without polluting the namespace.

---

## Choosing Between `def` and `lambda`

| Aspect              | `def`                                | `lambda`                                |
| ------------------- | ------------------------------------ | --------------------------------------- |
| Readability         | High (named, can document)           | Lower (anonymous, no docstrings)        |
| Complexity          | Can contain multiple statements      | Single expression only                  |
| Common Use Cases    | Public APIs, complex logic, reuse    | Callbacks, short inline transformations |
| Namespace Pollution | Defines a name in local/global scope | Can avoid naming if used inline         |
