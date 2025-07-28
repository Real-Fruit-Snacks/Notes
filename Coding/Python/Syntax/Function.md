---
tags:
  - python
---
Functions allow you to encapsulate reusable blocks of code. They can accept inputs (arguments), perform operations, and return results.

---

## Defining a Function
- Functions start with the `def` keyword
- Arguments go inside parentheses after the function name
- A colon `:` follows the declaration
- The function body is **indented** (usually 4 spaces)
- Use `return` to send a result back to the caller

```python
def function_name(arg1, arg2, ...):
    """Optional docstring for documentation and help()"""
    # Function logic goes here
    return result

# Code outside the function is not indented
print("This is outside the function")
```

---
## Function Example with Type Hints
- Python supports optional type hints for arguments and return values
- These hints improve code readability and editor support, but are not enforced at runtime

```python
def add(num1: int, num2: int) -> int:
    return num1 + num2

print(add(10, 7))  # Output: 17
```

> Type annotations are for developers and tools — the Python interpreter does not enforce them.

---
## Built-in Functions

The `print()` function sends output to the console (standard output).

```python
print("Hello, World!")
# Output: Hello, World!
```

The `len()` function returns the number of items in an **iterable** (e.g. string, list, tuple, dictionary, etc.)

```python
len("A String")
# Output: 8

len(["One", 2, 3, "Four", 5])
# Output: 5
```
