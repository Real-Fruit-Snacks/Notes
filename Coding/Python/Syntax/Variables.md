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
