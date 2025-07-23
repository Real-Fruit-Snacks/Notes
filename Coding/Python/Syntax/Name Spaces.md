---
tags:
  - python
---

## Namespaces

> A namespace is nothing more than a collection of variables.
> A separate namespace is automatically created to store variables:

- All Global Variables are in the "Global" namespace
- Every Function has a separate "Local" namespace
- Every Class has a separate namespace
- Modules imported with the syntax "import `<modulename>`" get their own namespace
- Modules import with the syntax "from `<modulename>` import \*" are added to the "Global" namespace
- Remember LEGB (Local, Enclosing, Global, Built-in) for name resolution.
  Functions `globals()` and `locals()` can be used to see variables in the namespace as a dictionary

---
