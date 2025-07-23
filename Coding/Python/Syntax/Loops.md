---
tags:
  - python
---


Loops are used to step through each element in lists, dictionaries, and other iterable data structures

```python
# Examples
for x in list (or other iterable variable):
for x in range(100):
for x in range(start,stop,step):
for index,value in enumerate(list):
while x:
# More Examples
>>> list(range(10))
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
>>> list(range(5,10))
[5, 6, 7, 8, 9]
>>> list(range(0,100,25))
[0, 25, 50, 75]
>>> list(range(100,0,-25))
[100, 75, 50, 25]
>>> for x in range(1,20,2):
... print(x,end=" ")
...
1 3 5 7 9 11 13 15 17 19
```

---

## While Loops

- While loops are useful when you must continue a loop until a task is finished
- For loops have a definitive end; while loops do not
- A while loop is repeated for as long as `<logic expression>` is True or until a break statement is reached

```python
while not PasswordFound:
  guess=bruteforce.next()
  PasswordFound = encrypt(salt,guess) == hashcopy
else:
  happydance()
```

```python
# Example
>>> import random
>>> guess = ""
>>> answer = random.randrange(1,10)
>>> while guess != answer:
...     guess = int(input("What is your guess? "))
...     if guess > answer:
...         print("The answer is lower")
...     elif guess < answer:
...         print("The answer is higher")
...     else:
...         print("Correct!")
...
What is your guess? 5
The answer is lower
What is your guess? 4
Correct!
```

---

## Break and Continue

- **Continue** - Often used at the top of the loop to skip values you do not want to process
- **Break** - Used to leave the loop when you do not want to process any more items

```python
>>> for each_num in [0,1,2,3,4,5,6,7,8]:
...     if each_num < 4:
...         continue
...     if each_num == 7:
...         break
...     print(each_num)
...
4
5
6
```
