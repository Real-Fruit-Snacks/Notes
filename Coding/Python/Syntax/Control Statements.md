---
tags:
  - Python
  - ControlStatements
---
## What Are Control Statements?
Control statements let your program choose which code blocks to run based on Boolean conditions. The primary conditional statements in Python are:

- `if`
- `if` / `else`
- `if` / `elif` / `else`

Each example below shows the syntax followed by a concrete use case.

---
## Basic `if` Statement
Execute a block only when its condition is true.

```python
# Syntax
if condition:
    # code to run when condition is True

# Example
username = "alice"
if username != "":
    print("Hello,", username)
    # Output: Hello, alice
```

---

## `if` / `else` Statement

Provide a fallback block when the `if` condition is false.

```python
# Syntax
if condition:
    # code if True
else:
    # code if False

# Example
def even_or_odd(n):
    if n % 2 == 0:
        return "even"
    else:
        return "odd"

print(even_or_odd(7))   # Output: odd
print(even_or_odd(10))  # Output: even
```

---

## `if` / `elif` / `else` Statement

Handle multiple, mutually exclusive conditions. Python evaluates each in order and runs only the first true block.

```python
# Syntax
if condition1:
    # code1
elif condition2:
    # code2
elif condition3:
    # code3
else:
    # fallback code

# Example
def access_level(role):
    if role == "admin":
        return "Full access"
    elif role == "editor":
        return "Edit access"
    elif role == "viewer":
        return "Read-only access"
    else:
        return "No access"

print(access_level("editor"))  # Output: Edit access
print(access_level("guest"))   # Output: No access
```

---

## Ternary (Conditional) Expression

A one‑liner if/else that returns a value.

```python
# Syntax
<true_value> if condition else <false_value>

# Example
n = 5
parity = "even" if n % 2 == 0 else "odd"
print(parity)   # Output: odd
```

---

## Boolean Operators in Conditions

Combine or negate tests with `and`, `or`, `not`.

```python
# and: all sub-conditions must be True
x = 10
if x > 0 and x < 20:
    print("x is between 1 and 19")

# or: at least one sub-condition True
user = "alice"
if user == "root" or user == "admin":
    print("Privileged user")

# not: invert a Boolean
flag = False
if not flag:
    print("Flag is False")
```

---

## Truthy and Falsy Values

In an `if` test, Python treats the following as False; everything else is True:

- **Falsy**: `False`, `None`, `0`, `0.0`, `''` (empty string), `[]`, `{}`, `set()`, `()`, `range(0)`
    
- **Truthy**: virtually any other value or non-empty container
    

```python
items = []
if items:
    print("List has items")
else:
    print("List is empty")
    # Output: List is empty
```

