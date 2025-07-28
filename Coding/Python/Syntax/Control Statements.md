---
tags:
  - python
---
Control statements allow your program to make decisions and execute different blocks of code based on conditions. These include:

- `if`, `elif`, and `else` statements
- Loop structures like `for` and `while` (covered separately)

The core idea: **code blocks run only when their conditions are met.**

---

## Basic `if` Statement

Use `if` to execute a block of code only when a condition is true.

```python
if username != '':
    # Block 1: Runs only if username is not an empty string

    if username == 'root':
        # Block 2: Runs only if username equals 'root'

    if username != 'root':
        # Block 3: Runs only if username is not 'root'
```

Each `if` statement is evaluated independently. Indentation defines the block of code associated with each condition.

---

## `if` / `else` Statement

Use `else` to define a fallback when the `if` condition is not met.

```python
def even_or_not(number):
    if number % 2 == 0:
        return "Yep. Even"
    else:
        return "Nope. Odd"

# Example calls
even_or_not(5)        # Output: 'Nope. Odd'
even_or_not(10)       # Output: 'Yep. Even'
even_or_not(0xfff3)   # Output: 'Nope. Odd'
even_or_not(0b101100) # Output: 'Yep. Even'
```

- `%` is the modulus operator; it checks for a remainder after division.
- `0xfff3` and `0b101100` are hexadecimal and binary literals.

---

## `if` / `elif` / `else` Statement

Use `elif` (else if) to handle multiple conditions. The first true condition is executed; others are skipped.

```python
if username == "root":
    # Do something for root
elif username == "hacker":
    # Do something for hacker
elif username == "admin":
    # Do something for admin
else:
    # Do something for all other usernames
```

### Notes:

- You can include as many `elif` branches as needed.
- The `else` block is optional, but useful as a catch-all.
- Only one branch of an `if`/`elif`/`else` chain will be executed.
