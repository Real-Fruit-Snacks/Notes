---
tags:
  - Python
  - Math
---
## Basic Arithmetic Operators
_Assume_ `x = 5`

| Operation      | Syntax   | Example  | Result | Augmented Assignment |
| -------------- | -------- | -------- | ------ | -------------------- |
| Addition       | `x + y`  | `5 + 3`  | 8      | `x += 3`             |
| Subtraction    | `x - y`  | `5 - 10` | -5     | `x -= 10`            |
| Multiplication | `x * y`  | `5 * 5`  | 25     | `x *= 5`             |
| Division       | `x / y`  | `5 / 2`  | 2.5    | `x /= 2`             |
| Floor Division | `x // y` | `5 // 2` | 2      | `x //= 2`            |
| Modulo         | `x % y`  | `5 % 2`  | 1      | `x %= 2`             |
| Exponentiation | `x ** y` | `5 ** 2` | 25     | `x **= 2`            |

> **Tip:** Use parentheses to control grouping:
>
> ```python
> (2 + 3) * 4    # 20, not 14
> ```

---
## Operator Precedence

From **highest** to **lowest** precedence:
1. **Parentheses**: `( … )`
2. **Exponentiation**: `**`
3. **Unary + / −**: `+x`, `-x`
4. **Multiplicative**: `*`, `/`, `//`, `%`
5. **Additive**: `+`, `-`
6. **Shifts**: `<<`, `>>`
7. **Bitwise AND**: `&`
8. **Bitwise XOR**: `^`
9. **Bitwise OR**: `|`

---

## Bitwise Operators

| Operator | Name             | Example  | Binary Operation                      | Result   |
| -------- | ---------------- | -------- | ------------------------------------- | -------- |
| `&`      | AND              | `5 & 3`  | `0b0101 & 0b0011 → 0b0001`            | 1        |
| `\|`     | OR               | `5 \| 3` | `0b0101 \| 0b0011`                    | `0b0111` |
| `^`      | XOR              | `5 ^ 3`  | `0b0101 ^ 0b0011 → 0b0110`            | 6        |
| `~`      | NOT (complement) | `~5`     | `~0b0101 = ...11111010` (two’s comp.) | -6       |
| `<<`     | Left shift       | `5 << 1` | `0b0101 << 1 → 0b1010`                | 10       |
| `>>`     | Right shift      | `5 >> 1` | `0b0101 >> 1 → 0b0010`                | 2        |

> **Note on `~`:** Python uses unlimited‑precision two’s‑complement, so `~x` is effectively `-x - 1`.

---

## Built‑in Math Functions

```python
abs(x)          # Absolute value
pow(x, y)       # Same as x**y, but can take 3 args: pow(x, y, mod)
round(x, n=0)   # Round to n decimal places (n defaults to 0)
```

---

## Standard Library: `math` Module

```python
import math

math.pi          # 3.141592653589793
math.e           # 2.718281828459045
math.sqrt(x)     # Square root
math.sin(x), math.cos(x), math.tan(x)
math.log(x)      # Natural log
math.log(x, b)   # Log base b
math.ceil(x)     # Smallest integer ≥ x
math.floor(x)    # Largest integer ≤ x
math.factorial(n)
```
