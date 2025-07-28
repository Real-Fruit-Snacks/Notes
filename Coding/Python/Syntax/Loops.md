---
tags:
  - Python
  - Loops
---
## What Are Loops?

Loops execute a block of code repeatedly, iterating over elements of an iterable or repeating until a condition changes.

---

## `for` Loops

Use when you have a finite iterable or know how many iterations are needed.

### Basic Syntax

```python
for element in iterable:
    # loop body using element
```

### Examples

```python
# Iterate over a list
fruits = ['apple', 'banana', 'cherry']
for fruit in fruits:
    print(fruit)
# Output:
# apple
# banana
# cherry

# Iterate over a tuple
coords = [(0,0), (1,1), (2,2)]
for x, y in coords:
    print(x + y)
# Output:
# 0
# 2
# 4

# Iterate over a dictionary’s keys
d = {'a': 1, 'b': 2}
for key in d:
    print(key, d[key])
# Output:
# a 1
# b 2

# Iterate over items (key/value pairs)
for key, value in d.items():
    print(key, value)
```

### Using `enumerate()`

Get both index and value in one go:

```python
names = ['Alice', 'Bob', 'Charlie']
for index, name in enumerate(names):
    print(index, name)
# Output:
# 0 Alice
# 1 Bob
# 2 Charlie
```

---

## The `range()` Function

Generates a sequence of integers; commonly used with `for`.

| Call                    | Result            |
| ----------------------- | ----------------- |
| `list(range(5))`        | `[0, 1, 2, 3, 4]` |
| `list(range(2, 6))`     | `[2, 3, 4, 5]`    |
| `list(range(0, 10, 3))` | `[0, 3, 6, 9]`    |
| `list(range(5, 0, -1))` | `[5, 4, 3, 2, 1]` |

### Looping with `range()`

```python
for i in range(1, 10, 2):
    print(i, end=' ')
# Output: 1 3 5 7 9
```

---

## `while` Loops

Repeat as long as a condition remains true.

### Basic Syntax

```python
while condition:
    # loop body
else:
    # optional: runs if loop ends without a break
```

### Examples

```python
# Simple counter
count = 0
while count < 3:
    print(count)
    count += 1
else:
    print("Done")
# Output:
# 0
# 1
# 2
# Done
```

```python
# Number guessing game
import random

answer = random.randint(1, 10)
guess = None
while guess != answer:
    guess = int(input("Guess a number (1–10): "))
    if guess < answer:
        print("Too low")
    elif guess > answer:
        print("Too high")
    else:
        print("Correct!")
```

---

## Loop `else` Clause

The `else` block runs only if the loop completes normally (no `break`).

```python
# for-else example: search for a value
nums = [1, 2, 3]
for n in nums:
    if n == 5:
        print("Found")
        break
else:
    print("Not found")
# Output: Not found

# while-else example
count = 0
while count < 2:
    print(count)
    count += 1
else:
    print("Loop finished without break")
```

---

## `break` and `continue`

Control loop flow from inside the loop body.

- `continue`: skip remaining code in this iteration and move to next.
- `break`: exit the loop immediately.
### Example

```python
for num in range(10):
    if num < 4:
        continue   # skip numbers 0–3
    if num == 7:
        break      # stop the loop when num is 7
    print(num)
# Output:
# 4
# 5
# 6
```

---

## Nested Loops

Loops inside loops; inner loops complete fully each time outer loop iterates.

```python
for i in range(1, 4):
    for j in range(1, 3):
        print(f"i={i}, j={j}")
# Output:
# i=1, j=1
# i=1, j=2
# i=2, j=1
# i=2, j=2
# i=3, j=1
# i=3, j=2
```

---

## Loop Best Practices

- Prefer `for` over `while` when iterating a known collection.
- Avoid modifying the iterable you’re looping over.
- Use `enumerate()` instead of manual counters.
- Keep loop bodies concise; extract complex logic into functions.
- Use comprehensions for simple transformations (e.g., `[x*2 for x in nums]`).
- Remember the `else` clause only runs if no `break` occurs.