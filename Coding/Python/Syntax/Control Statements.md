---
tags:
  - python
---

- Python control statements are used to add decision-making logic to your program
- Your program will execute a code block only as certain conditions are met
- Examples of control statements include For loops, While loops, and if/elif/else conditions

## If

```python
if username != '':
    # Code block #1
    # Execute this code as part of if #1
    if username == 'root':
        # This is code block #2
        # This code block is part of if #2
    if username != 'root':
        # This is code block #3
        # Executes as part of if #3
```

## if/else

```python
>>> def even_or_not(number):
...   if number%2==0:
...     return "Yep. Even"
...   else:
...     return "Nope. Odd"
...
>>> even_or_not(5)
Nope. Odd
>>> even_or_not(10)
Yep. Even
>>> even_or_not(0xfff3)
Nope. Odd
>>> even_or_not(0b101100)
Yep. Even
```

## if/elif/else

```python
if username == "root":
  #do something for root
elif username == "hacker":
  # do something for hacker
elif username == "admin":
  # do something for admin
else:
  # do something for everyone not listed above
```
