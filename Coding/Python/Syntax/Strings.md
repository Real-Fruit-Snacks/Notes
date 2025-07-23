---
tags:
  - python
---

> A collection of characters such as words and sentences in text.

## List of ALL String Methods

- The `type()` command will tell what kind of variable is stored in a particular variable.
- The `dir()` command will show all the methods and attributes that are associated with a particular object.
- `type()` answers the question, "What is it?“ and `dir()` answers the question, "What can I do with it?"
- show the help for strings with `help(str)`

```python
type(a)
# <class 'str'>
dir(a)
['__add__', '__class__', '__contains__', '__delattr__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__getnewargs__', '__getslice__', '__gt__', '__hash__', '__init__', '__le__', '__len__', '__lt__', '__mod__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__rmod__', '__rmul__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '_formatter_field_name_split', '_formatter_parser', 'capitalize', 'center', 'count', 'decode', 'encode', 'endswith', 'expandtabs', 'find', 'format', 'index', 'isalnum', 'isalpha', 'isdigit', 'islower', 'isspace', 'istitle', 'isupper', 'join', 'ljust', 'lower', 'lstrip', 'partition', 'replace', 'rfind', 'rindex', 'rjust', 'rpartition', 'rsplit', 'rstrip', 'split', 'splitlines', 'startswith', 'strip', 'swapcase', 'title', 'translate', 'upper', 'zfill']
```

## Single & Double Quotes

```python
# Valid Strings
Single_Quotes = 'hello'
Double_Quotes = "hello"
Triple_Single_Quotes = '''hello'''
Triple_Double_Quotes = """hello"""
Quotes_Inside_Quote = "This is a 'quote' in a quote"
Quote_With_Backslash = "This is a \"quote\" in a quote"
```

## "F-String" (Python 3.6+)

- As of Python 3.6, you can use a string with a lowercase "f" outside the quotes and use variable names instead of positions. Additionally, you don't call .format()

```python
sport = "Basketball"
rating = "Awesome Sauce!!"
print(f"{course} is {rating})
# Output: Basketball is Awesome Sauce!!


# f"This is my data {data(x):<Format Specifier>}
	# Center with X's, 30 Characters Wide
>>> f"This is my data {data(x):X^30}"

	# Left Justified
>>> f"This is my data {data(x):X<30}"

	# Right Justified
>>> f"This is my data {data(x):X>30}"

	# Turn into hex (Uppercase 'X', Lowerscase 'x')
>>> f"This is my data {data(x):X^30x}"
```

## Raw String

- The backslash character has various meanings in a string.
      - "r" outside of the quotes tells Python that "\" is not special

```python
>>> print("This has tabs and \t\t multiple\nlines")
This has tabs and               multiple
lines
>>> print(r"This has tabs and \t\t multiple\nlines")
This has tabs and \t\t multiple\nlines
>>> print("python \"stinks\"\b\b\b\b\b\b\b\b \"rock")
python "rocks"
>>> print(r"python \"stinks\"\b\b\b\b\b\b\b\b \"rock")
python \"stinks\"\b\b\b\b\b\b\b\b \"rock
```

## Format() Strings

- .format() has its own "[formatting language](https://docs.python.org/library/string.html#formatspec)"

```python
astr = "First {} Second {} Third {}".format('X',2,num)
# First X Second 2 Third 3
"First {item1} Second {item2}".format(item1='X',item2=2)
# First X Second 2
```

## bytes() and str()

- Use `b""` or `bytes([])` to crate a byte string
      - `bytes()` has a `.decode()` method that converts to a `str()`
- `str()` has an `.encode()` method that converts to `bytes()`

## Encoding Characters in a String

- `\x` Followed by 2 hex digits encodes a single byte character
- `\u` Followed by 4 hex digits encodes a 2-byte character
- `\U` Followed by 8 hex digits encodes a 4-byte character

## Encoding and Decoding Integers

- `chr()` converts and `int()` to a character

## Slicing Strings

- **Syntax** `String[start:end:step]`
    - Start, end, and step are all optional
    - Offset begins at zero
    - The "end" character is not included in the result
    - Negative numbers start from the end of the string and work back
- Number before first colon: Is always the start
- Number after the first: Is always the (up to but not including) end
- Number after the second: Is always the step
- If nothing is before first: Beginning is implied
- If nothing is after first: The end of string is implied

| **P** | **y** | **t** | **h**  | **o**  | **n**  |      | **r**  | **o**  | **c**  | **k**  | **s**  |
| ----- | ----- | ----- | ------ | ------ | ------ | ---- | ------ | ------ | ------ | ------ | ------ |
| 0     | 1     | 2     | 3      | 4      | 5      | 6    | 7      | 8      | 9      | 10     | 11     |
| -12   | -11   | -10   | -9     | -8     | -7     | -6   | -5     | -4     | -3     | -2     | -1     |

```python
print("Python rocks"[:6][::-1])
# nohtyP
```
