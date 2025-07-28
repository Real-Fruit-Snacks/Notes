---
tags:
  - Python
  - Functions
---
A function is a named block of reusable code that can accept inputs (arguments), perform operations, and return results. Functions help organize code, avoid repetition, and improve readability.

---
## Defining a Function

```python
def greet(name):
    """Return a greeting for the given name."""
    return f"Hello, {name}!"

# Calling the function
print(greet("Alice"))   # Output: Hello, Alice!
```

- Begins with `def` keyword
- Name follows, then parentheses enclosing parameters
- A colon `:` ends the signature line
- The function body is indented
- Use `return` to send a value back to the caller

---
## Parameters and Arguments
### Positional Arguments
Matched by position.

```python
def power(base, exponent):
    return base ** exponent

print(power(2, 3))   # 8
```
### Default Arguments
Provide a default value if none is passed.

```python
def repeat(text, times=2):
    return text * times

print(repeat("ha"))       # 'haha'
print(repeat("ha", 3))    # 'hahaha'
```

> **Caution:** avoid mutable defaults (e.g., lists) to prevent shared-state bugs.
### Keyword Arguments
Specify by name, order independent.

```python
def describe(name, age):
    return f"{name} is {age} years old."

print(describe(age=30, name="Bob"))  # 'Bob is 30 years old.'
```

### Variable‑Length Arguments
- `*args` collects extra positional args as a tuple
- `**kwargs` collects extra keyword args as a dict

```python
def summary(*args, **kwargs):
    print("Positional:", args)
    print("Keyword:", kwargs)

summary(1, 2, 3, a=4, b=5)
# Positional: (1, 2, 3)
# Keyword: {'a': 4, 'b': 5}
```

---
## Return Values
- Use `return` to send back a single value
- To return multiple values, separate them by commas (returns a tuple)

```python
def stats(numbers):
    total = sum(numbers)
    count = len(numbers)
    return total, count, total/count

t, c, avg = stats([10, 20, 30])
print(t, c, avg)   # 60 3 20.0
```

- If no `return` is given, the function returns `None`.

---
## Docstrings
Document your function’s purpose, parameters, and return values using a triple-quoted string immediately under the `def` line.

```python
def add(a, b):
    """
    Add two numbers.

    Parameters:
      a (int): first addend
      b (int): second addend

    Returns:
      int: the sum of a and b
    """
    return a + b

help(add)
```

---

## Type Hints

Add optional annotations for parameters and return types to improve readability and tooling support.

```python
def multiply(x: float, y: float) -> float:
    return x * y

result: float = multiply(2.5, 4.0)
print(result)   # 10.0
```

> Type hints are not enforced at runtime but are used by linters and IDEs.

---

## Anonymous Functions (`lambda`)

Create small, unnamed functions in one line.

```python
square = lambda x: x * x
print(square(5))   # 25

# Often used with higher‑order functions:
nums = [1, 2, 3, 4]
squares = list(map(lambda n: n*n, nums))
print(squares)     # [1, 4, 9, 16]
```

---

## Higher‑Order Functions

Functions that accept other functions as arguments or return them.

```python
def apply(func, value):
    return func(value)

def increment(n):
    return n + 1

print(apply(increment, 7))    # 8

# Built‑ins: map, filter, sorted, etc.
print(list(filter(lambda n: n%2==0, nums)))  # [2, 4]
```

---

## Decorators

Wrap or modify the behavior of another function.

```python
def debug(fn):
    def wrapper(*args, **kwargs):
        print(f"Calling {fn.__name__} with {args}, {kwargs}")
        result = fn(*args, **kwargs)
        print(f"{fn.__name__} returned {result}")
        return result
    return wrapper

@debug
def add(a, b):
    return a + b

add(3, 4)
# Calling add with (3, 4), {}
# add returned 7
```

---

## Built‑In Functions

| Function         | Description                                               | Example                              |
| ---------------- | --------------------------------------------------------- | ------------------------------------ |
| `print()`        | Write one or more values to standard output               | `print("Hi", 123)` → Hi 123          |
| `len()`          | Return the number of items in an iterable or container    | `len([1,2,3])` → 3                   |
| `type()`         | Return the type of an object                              | `type(3.14)` → `<class 'float'>`     |
| `sorted()`       | Return a new sorted list from an iterable                 | `sorted([3,1,2])` → [1,2,3]          |
| `sum()`          | Return the sum of a numeric iterable                      | `sum([1,2,3])` → 6                   |
| `max()`, `min()` | Return the maximum or minimum of arguments or an iterable | `max(1,4,2)` → 4, `min([5,2,8])` → 2 |

---

## Best Practices

- Keep functions **small** and focused on a single task.
- Use **descriptive names** for clarity.
- Avoid **side effects** when possible (prefer pure functions).
- Document with **docstrings** and add **type hints**.
- Beware of **mutable default arguments**—use `None` and assign inside.
