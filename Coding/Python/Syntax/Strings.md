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

## Upper, Lower, Title Case

```python
name = "title this variable"
print(name.title())

Title This Variable
```

---

## Methods

`capitalize()`
- Converts the first character to uppercase and makes all other characters lowercase
- Example: `"hello world".capitalize()` returns `"Hello world"`

`center(width[, fillchar])`
- Centers the string in a field of given width
- Optional fillchar parameter specifies padding character (default is space)
- Example: `"hello".center(10)` returns `"  hello   "`

`count(sub[, start[, end]])`
- Returns the number of non-overlapping occurrences of substring sub
- Optional start and end parameters specify range to search
- Example: `"hello world".count("o")` returns `2`

`decode(encoding='utf-8', errors='strict')`
- Decodes bytes to string using specified encoding
- Not commonly used in Python 3 as strings are Unicode by default
- Example: `b"hello".decode('utf-8')` returns `"hello"`

`encode(encoding='utf-8', errors='strict')`
- Encodes string to bytes using specified encoding
- Not commonly used in Python 3 as strings are Unicode by default
- Example: `"hello".encode('utf-8')` returns `b"hello"`

`endswith(suffix[, start[, end]])`
- Checks if string ends with specified suffix
- Optional start and end parameters specify range to check
- Example: `"hello.txt".endswith(".txt")` returns `True`

`expandtabs(tabsize=8)`
- Replaces tab characters with spaces, using specified tab size
- Example: `"hello\tworld".expandtabs(4)` returns `"hello world"`

`find(sub[, start[, end]])`
- Returns lowest index of substring sub in string
- Returns -1 if not found
- Optional start and end parameters specify range to search
- Example: `"hello world".find("o")` returns `4`

`format(*args, **kwargs)`
- Formats string using replacement fields
- Supports positional and keyword arguments
- Example: `"{} is {} years old".format("John", 30)` returns `"John is 30 years old"`

`index(sub[, start[, end]])`
- Similar to find(), but raises ValueError if substring not found
- Example: `"hello world".index("o")` returns `4`

`isalnum()`
- Checks if all characters are alphanumeric (letters and digits)
- Example: `"hello123".isalnum()` returns `True`

`isalpha()`
- Checks if all characters are alphabetic letters
- Example: `"hello".isalpha()` returns `True`

`isdigit()`
- Checks if all characters are digits
- Example: `"123".isdigit()` returns `True`

`islower()`
- Checks if all cased characters are lowercase
- Example: `"hello".islower()` returns `True`

`isspace()`
- Checks if all characters are whitespace
- Example: `"   ".isspace()` returns `True`

`istitle()`
- Checks if string follows title case rules
- Example: `"Hello World".istitle()` returns `True`

`isupper()`
- Checks if all cased characters are uppercase
- Example: `"HELLO".isupper()` returns `True`

`join(iterable)`
- Joins elements of iterable into a single string separated by string
- Example: `",".join(["a", "b", "c"])` returns `"a,b,c"`

`ljust(width[, fillchar])`
- Left-justifies string in field of given width
- Optional fillchar parameter specifies padding character
- Example: `"hello".ljust(10)` returns `"hello     "`

`lower()`
- Converts all characters to lowercase
- Example: `"HELLO".lower()` returns `"hello"`

`lstrip([chars])`
- Removes leading whitespace or specified characters
- Example: `"   hello".lstrip()` returns `"hello"`

`partition(separator)`
- Splits string into tuple containing part before separator, separator itself, and part after
- Example: `"hello world".partition(" ")` returns `("hello", " ", "world")`

`replace(old, new[, count])`
- Replaces occurrences of old substring with new substring
- Optional count parameter limits number of replacements
- Example: `"hello world".replace("o", "a")` returns `"hella warld"`

`rfind(sub[, start[, end]])`
- Returns highest index of substring sub in string
- Returns -1 if not found
- Optional start and end parameters specify range to search
- Example: `"hello world".rfind("o")` returns `7`

`rindex(sub[, start[, end]])`
- Similar to rfind(), but raises ValueError if substring not found
- Example: `"hello world".rindex("o")` returns `7`

`rjust(width[, fillchar])`
- Right-justifies string in field of given width
- Optional fillchar parameter specifies padding character
- Example: `"hello".rjust(10)` returns `"     hello"`

`rpartition(separator)`
- Similar to partition(), but splits from right side
- Example: `"hello world".rpartition(" ")` returns `("hello", " ", "world")`

`rsplit(sep=None, maxsplit=-1)`
- Splits string from right side using sep as delimiter
- Optional maxsplit parameter limits number of splits
- Example: `"hello world".rsplit(" ")` returns `["hello", "world"]`

`rstrip([chars])`
- Removes trailing whitespace or specified characters
- Example: `"hello   ".rstrip()` returns `"hello"`

`split(sep=None, maxsplit=-1)`
- Splits string into list using sep as delimiter
- Optional maxsplit parameter limits number of splits
- Example: `"hello world".split(" ")` returns `["hello", "world"]`

`splitlines(keepends=False)`
- Splits string at line boundaries
- Optional keepends parameter preserves line breaks
- Example: `"line1\nline2".splitlines()` returns `["line1", "line2"]`

`startswith(prefix[, start[, end]])`
- Checks if string starts with specified prefix
- Optional start and end parameters specify range to check
- Example: `"hello.txt".startswith("hello")` returns `True`

`strip([chars])`
- Removes leading and trailing whitespace or specified characters
- Example: `"   hello   ".strip()` returns `"hello"`

`swapcase()`
- Swaps case of all characters
- Example: `"Hello World".swapcase()` returns `"hELLO wORLD"`

`title()`
- Converts string to title case
- Example: `"hello world".title()` returns `"Hello World"`

`translate(table)`
- Translates string using translation table
- Example: `"hello".translate(str.maketrans("aeiou", "AEIOU"))` returns `"hEllO"`

`upper()`
- Converts all characters to uppercase
- Example: `"hello".upper()` returns `"HELLO"`

`zfill(width)`
- Pads string with zeros on left to reach specified width
- Example: `"42".zfill(5)` returns `"00042"`
