---
tags:
  - python
---

When a variable is referenced, Python searches for its value in the following namespaces:

- **Locally**: In current function
- **Enclosing**: In enclosing functions
- **Globally**: A global variable
- **Builtin**: In `Builtin` module where functions like print, input, and others are stored
  If you want or need your function to be able to write to the global namespace, you can declare a variable to be global using the keyword `global`.

## Big Numbers

When you’re writing long numbers, you can group digits using underscores
to make large numbers more readable:

```python
universe_age = 14_000_000_000
```

## Multiple Assignment

You can assign values to more than one variable using just a single line of
code. This can help shorten your programs and make them easier to read;
you’ll use this technique most often when initializing a set of numbers.
For example, here’s how you can initialize the variables x, y, and z to zero:

```python
x, y, z = 0, 0, 0
```

## Constants

Python doesn’t have built-in constant types, but Python program-
mers use all capital letters to indicate a variable should be treated as a con-
stant and never be changed:

```python
MAX_CONNECTIONS = 5000
```
