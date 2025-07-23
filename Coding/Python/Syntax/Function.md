---
tags:
  - python
---

Functions begin with the keyword “def” and a colon

- Accepts "input_arguments" to be processed
- Followed by a "code block" that is typically indented with 4 spaces
- Code block will end when it is no longer indented
- Values are returned to the calling program by "return"

```python
def function_name(input_argument,input_arguments...):
  """An optional DocString for help()"""
  # - Code beneath it is executed when function is called
  # - Use input_argument to calculate the output
  # - The code can return 1 or more values
  return "Returns output here"
print("First un-indented line is not part of the function")
```

You can declare what type of arguments are accepted by a function and what it returns. As far as the interpreter is concerned, these are little more than comments that are added for the developer's benefit

```python
def add(num1:int, num2:int)->str:
  return num1+num2
print(add(10,7))
student@573:~/$ python3 add.py
17
```
---

## Print

> `print()` sends information to standard output.

```python
print("Hello, World!")
```

## Len

> The `len()` function returns the length of an "iterable" item

```python
len("A String")
# 8
len(["One,2,3,"Four",5])
# 5
```
