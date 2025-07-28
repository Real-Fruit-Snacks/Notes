---
tags:
  - python
---

Loops allow you to iterate through elements in lists, dictionaries, ranges, and other iterable data types.

---
## `for` Loops
Use `for` loops when you know in advance how many times to iterate, or when working with iterables like lists, tuples, ranges, or dictionaries.
### Basic Syntax
```python
for x in iterable:
    # loop body

for x in range(100):
    # 0 to 99

for x in range(start, stop, step):
    # customizable range

for index, value in enumerate(my_list):
    # get index and value in loop
```

---
### `range()` Examples
```python
list(range(10))          # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
list(range(5, 10))       # [5, 6, 7, 8, 9]
list(range(0, 100, 25))  # [0, 25, 50, 75]
list(range(100, 0, -25)) # [100, 75, 50, 25]
```
### Looping with `range()`
```python
for x in range(1, 20, 2):
    print(x, end=" ")
# Output: 1 3 5 7 9 11 13 15 17 19
```

---
## `while` Loops
Use `while` loops when you want to repeat a block of code **until a condition is no longer true**. These loops are more flexible than `for` loops and do not require a predefined end.
### Syntax
```python
while <condition>:
    # code block
else:
    # optional: runs if loop condition becomes False (not via break)
```
### Example 1: Password Cracker
```python
while not PasswordFound:
    guess = bruteforce.next()
    PasswordFound = encrypt(salt, guess) == hashcopy
else:
    happydance()
```
### Example 2: Number Guessing Game
```python
import random

guess = ""
answer = random.randrange(1, 10)

while guess != answer:
    guess = int(input("What is your guess? "))
    if guess > answer:
        print("The answer is lower")
    elif guess < answer:
        print("The answer is higher")
    else:
        print("Correct!")
```

---
## `break` and `continue`
Use these control statements inside loops to modify flow:
- `continue`: Skip the rest of the current iteration and go to the next
- `break`: Exit the loop entirely
### Example
```python
for num in [0, 1, 2, 3, 4, 5, 6, 7, 8]:
    if num < 4:
        continue  # skip this iteration
    if num == 7:
        break     # exit the loop
    print(num)
```

**Output:**

```
4
5
6
```