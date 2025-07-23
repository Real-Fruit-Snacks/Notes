---
tags:
  - python
---

## What is Python??

- Python is an interpreted language.
    - Top-down, just-in-time interpretation of source code.
- A `.py` file is Python source code in its uncompressed format.
- A `.pyc` file is Python byte code. These files are no longer human readable.
    - Python automatically creates a byte-compiled `.pyc` file when a `.py` is imported. If you want to manually byte-compile a `.py` into a `.pyc` with the `py_compile` module with:

```python
>>> import py_compile
>>> py_compile.compile("script")
```

- Py2Exe and PyInstaller can create `.exe` files so that you can distribute programs on Windows Computers.

### Versions of Python

- On Linux, multiple versions can coexist on the same computer, but 'python' only points to one in your path.
- `/usr/bin/env python3` launches Python3 based on the PATH environment variable

Check Version:
```bash
python -V
```

### PEPs: Python Enhancement Proposals

- PEP 8 is "Style Guide for Python Code" - Naming conventions for Variables, Functions, Number of Spaces, etc...

### Running Python

1. **Command Line**: Provide scripts to interpreter on the command line `$ python3 -c "print('hello world')"`
2. **Execute Scripts**: Pass `.py` or `.pyc` script to the Python interpreter.
3. **Python Shell**: Running the Python interpreter interactively is a quick and easy way to write and test code snippets.
4. **Shebang:** At the beginning of the script tell the interpreter you are using python with `#!/usr/bin/python` or tell the terminal to use python with `python3 Script.py`

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

## Variables

When a variable is referenced, Python searches for its value in the following namespaces:

- **Locally**: In current function
- **Enclosing**: In enclosing functions
- **Globally**: A global variable
- **Builtin**: In `Builtin` module where functions like print, input, and others are stored
  If you want or need your function to be able to write to the global namespace, you can declare a variable to be global using the keyword `global`.

---

## Math

> Consider when x = 5

| Operation             | Example       | Result in x  | Assignment Shortcuts  |                                         |     |
| --------------------- | ------------- | ------------ | --------------------- | --------------------------------------- | --- |
| Addition              | `x = x + 5`   | 10           | `x += 5`              |     Subtraction           `             |     |
| Subtraction           | `x = x -10`   | -5           | `x -= 5`              |                                         |     |
| Multiplication        | `x = x * 5`   | 25           | `x *= 5`              |                                         |     |
| Division              | `x = x / 2`   | 2.5          | `x /= 5`              |                                         |     |
| Floor (Drop Decimal)  | `x = x // 2`  | 2            | `x //= 5`             |                                         |     |
| Modulo (Remainder)    | `x = x % 2`   | 1            | `x %= 5`              |                                         |     |
| Exponent              | `x = x ** 2`  | 25           |                       |                                         |     |

> Always use "Parentheses" to enforce order of operations

### Bit Math Operators

- `&` Bitwise AND
- `|` Bitwise OR
- `^` Bitwise XOR
- `<<` Shift Bits Left
- `>>` Shift Bits Right
- `~` Bitwise Complement

---

## Functions

### Print

> `print()` sends information to standard output.

```python
print("Hello, World!")
```

### Len

> The `len()` function returns the length of an "iterable" item

```python
len("A String")
# 8
len(["One,2,3,"Four",5])
# 5
```

---

## Modules

### codecs

#### Encode and Decode

```python
>>> import codecs
>>> codecs.encode("Hello World","rot13")
'Uryyb Jbeyq'
>>> codecs.encode(b"Hello World","HEX")
'48656c6c6f20576f726c64'
>>> codecs.encode("Hello World","utf-16le")
'H\x00e\x00l\x00l\x00o\x00 \x00W\x00o\x00r\x00l\x00d\x00'
>>> codecs.encode(b"Hello World","zip")
'x\x9c\xf3H\xcd\xc9\xc9W\x08\xcf/\xcaI\x01\x00\x18\x0b\x04\x1d'
>>> codecs.encode(b"Hello World","base64")
'SGVsbG8gV29ybGQ=\n'
>>> codecs.encode(codecs.encode("Hello World","rot13"),"rot13")
'Hello World'
```

---

## Functions

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

## Strings

> A collection of characters such as words and sentences in text.

### List of ALL String Methods

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

### Single & Double Quotes

```python
# Valid Strings
Single_Quotes = 'hello'
Double_Quotes = "hello"
Triple_Single_Quotes = '''hello'''
Triple_Double_Quotes = """hello"""
Quotes_Inside_Quote = "This is a 'quote' in a quote"
Quote_With_Backslash = "This is a \"quote\" in a quote"
```

### "F-String" (Python 3.6+)

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

### Raw String

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

### Format() Strings

- .format() has its own "[formatting language](https://docs.python.org/library/string.html#formatspec)"

```python
astr = "First {} Second {} Third {}".format('X',2,num)
# First X Second 2 Third 3
"First {item1} Second {item2}".format(item1='X',item2=2)
# First X Second 2
```

### bytes() and str()

- Use `b""` or `bytes([])` to crate a byte string
      - `bytes()` has a `.decode()` method that converts to a `str()`
- `str()` has an `.encode()` method that converts to `bytes()`

### Encoding Characters in a String

- `\x` Followed by 2 hex digits encodes a single byte character
- `\u` Followed by 4 hex digits encodes a 2-byte character
- `\U` Followed by 8 hex digits encodes a 4-byte character

### Encoding and Decoding Integers

- `chr()` converts and `int()` to a character

### Slicing Strings

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

---

## Logical Operators

| Operator | Name                     | Example   |
| :------: | ------------------------ | --------- |
|   `<`    | Less Than                | i < 100   |
|   `<=`   | Less Than or Equal to    | 1 <= 100  |
|   `>`    | Greater Than             | i > 100   |
|   `>=`   | Greater Than or Equal to | i >= 100  |
|  `==`    | Equal                    | i == 100  |
|   `!=`   | Inequality               | i != 100  |

### Logic Truth Tables: AND

- Result is True only if BOTH tests are True

### Logic Truth Tables: OR

- Result is True if either operand is True

---

## Control Statements

- Python control statements are used to add decision-making logic to your program
- Your program will execute a code block only as certain conditions are met
- Examples of control statements include For loops, While loops, and if/elif/else conditions

### If

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

### if/else

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

### if/elif/else

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

---

## Debugger

Python’s PDB debugger is a full featured debugger that is already installed on every system that has Python! Four ways to start the Python Debugger:

- Call "breakpoint()" function in your code where you want to begin debugging
- Add "import pdb; pdb.set_trace()" does the same thing in python < 3.7
- Start the program in debug mode with "python –m pdb <[script.py](http://script.py)>"
- Debug after a crash by typing these commands:
    - Launching an interactive shell after it crashes " python -i <[script.py](http://script.py)> "
    - Once it crashes and you're in interactive mode, type " import pdb; [pdb.pm](http://pdb.pm)()

---

## Installing Additional Modules

The package manager, pip is installed by default on Python 3.4 and later. If you are on a Python system that doesn't have pip, you should first try to install it with the ensurepip module. This module will adapt the pip installation process to the OS and environment that Python is running on.

```bash
python -m ensurepip --default-pip
```

You can install packages from a local folder containing `setup.py`

```bash
pip install .
```

### What can I do with these modules?

```bash
dir()  # lists all attributes and methods inside the object.
help() # displays help for a given module, attribute, or method.
type() # will tell you what kind of data you are dealing with
```

### Using Modules

- How you refer to an object or function in a module depends on how you import the module.
- If you use `import module`, you use module.function() when calling your function
- If you use `from module import <function>`, you can use it as though it were defined in your program

```python
# Use module.function()
import math
math.add(1,2)
# Use
from math import add
add(1,2)
```

---

## Virtual Environment

### venv Module

The venv module makes managing these folders easy. Included in Python 3.6 and later, but not on Debian/Ubuntu Systems.

```bash
# Required on Debian/Ubuntu Systems
apt install python3-venv
```

### Create new site folder with

`python -m venv <new directory>`

- Creates a new site modules folder structures with pip and other installer packages
- No existing Packages from the default site-package are included (clean Python install!)
- Puts a copy of Python in a "/bin" folder that will use the new site-package directory
- Creates a bash script called "/bin/activate" to set environment up to use the new Python

```bash
python -m venv ~/python-envs/NewApp
```

### Activating and Using Your Virtual Environment

```bash
# Activate new venv
source ~/python-envs/NewApp/bin/activate
# Deactivate the venv
deactivate
```

### Installing Packages in the Virtual Environment

Ensure that you always install to the site-packages folder of your virtual environment is to run pip as a module.

```bash
python3 -m pip install requests
```

### Executing and Deactivating

Set the `#!` line of your Python script to point to the Python interpreter in your virtual environments, and they will be able to find the modules that are part of that environment.

```bash
#!/home/student/python-env/573/bin/python
import requests
from freq.py import Freq
```

### Virtual Environment on Windows

- Always use the Python launcher "py.exe" instead of the "python.exe"
- Use $env:userprofile when creating the venvs in the home folder
- PowerShell lets you use ~ to access the home folder when activating the venv
- The "bin" folder containing activate and other commands is named "Scripts"
- py.exe does process #! lines on Windows such as `#!c:\venv\scripts\python.exe`

```bash
# Example
PS C:\Users\mark_> py -m venv $env:userprofile\venv\newapp
PS C:\Users\mark_> ~\venv\newapp\scripts\activate.ps1
(newapp) PS C:\Users\mark_> (get-command python).source
C:\Users\mark_\venv\newapp\scripts\python.exe
(newapp) PS C:\Users\mark_> py -c "import sys;print(sys.path)"
['', 'C:\\Program Files\\Python38\\python38.zip', 'C:\\Program Files\\Python38\\DLLs', 'C:\\Program
Files\\Python38\\lib', 'C:\\Program Files\\Python38', 'C:\\Users\\mark_\\venv\\newapp',
'C:\\Users\\mark_\\venv\\newapp\\lib\\site-packages'
```

---

## Basic pip Commands

- help Display help with pip and its commands
- install Install packages
- uninstall Uninstall packages
- list List installed packages
- show Show information about installed packages

```bash
pip <command> <command options>
```

**Examples of common usage:**

```bash
pip help install    # Get help with install command
pip list            # List installed packages
pip list --outdated # List of packages that need to be updated
pip show <installed package>    # Get info on installed package
pip install <package>           # Install a given package
pip install --upgrade <package> # Upgrade existing package
```

---

## Lists

Lists are an indexed group of objects.

- Define with square brackets `[]`
- Empty List = `[]`, `list()`
- List of Names = `['Alice', 'Bob', 'Eve']`
    - Elements in the list are addressed based on their index in the list
- First item in the list of names, `list_of_names[0]`
    - Items in lists can contain a number, string, or any Python object, including other lists
- Items in the list can be overwritten (it is mutable)

### List Elements

List items must be assigned when the list is created or with the `append()`method

```python
# Create list
newlist = ['A','B','C']
# Add to list
newlist[3]="D"
```

### List Methods

- `list[index] = value`: Change an existing value
- `append(value)`: Add an object to the end of the list
- `insert(position, value)`: Insert the value at the given position in the list.
    - Position is a positive or negative number
- `remove(value)`: Remove the first matching item by its value
- `sort(key,direction)`: Sort the elements of the list
- `count(value)`: Count occurrences of an item in the list
- `index(value)`: Look up where a value is in the list
- `del list[index]`: Delete an item by its index

```python
# Examples
>>> movies=["Life of Brian","Meaning of Life"]
>>> movies.index("Meaning of Life")
1
>>> movies.insert(1,"Holy Grail")
>>> movies
['Life of Brian', 'Holy Grail', 'Meaning of Life']
>>> movies.index("Meaning of Life")
2
>>> movies[2]
'Meaning of Life'
>>> movies.append("Free Willie")
>>> movies
['Life of Brian', 'Holy Grail', 'Meaning of Life', 'Free Willie']
>>> movies.remove("Free Willie")
>>> movies
['Life of Brian', 'Holy Grail', 'Meaning of Life']
>>> movies.insert(0,"Secret Policemans ball")
>>> movies
['Secret Policemans ball', 'Life of Brian', 'Holy
Grail', 'Meaning of Life']
>>> movies.remove("Secret Policemans ball")
>>> movies
['Life of Brian', 'Holy Grail', 'Meaning of Life']
>>> movies.reverse()
>>> movies
['Meaning of Life', 'Holy Grail', 'Life of Brian']
>>> del movies[0]
>>> movies
['Holy Grail', 'Life of Brian']
```

### Making Copies of Lists

```python
>>> alist = ['elements', 'in a list', 500, 4.2999999998]
>>> blist = alist
>>> blist.append("Add this to list")
>>> blist
['elements', 'in a list', 500, 4.2999999998, 'Add this to list']
>>> alist
['elements', 'in a list', 500, 4.2999999998, 'Add this to list']
>>> clist=list(alist)
>>> clist.remove(500)
>>> clist
['elements', 'in a list', 4.2999999998, 'Add this to the list']
>>> alist
['elements', 'in a list', 500, 4.2999999998, 'Add this to list']
```

### Converting Strings to Lists with .split()

- The string split() method converts a string to a list
- Provided with no arguments, it splits on white space
- Given an argument, it splits on that string

```python
>>> "THIS IS A STRING CONVERTED TO A LIST".split()
['THIS', 'IS', 'A', 'STRING', 'CONVERTED', 'TO', 'A', 'LIST']
>>> "'comma','delimited','1.2'".split(",")
["'comma'", "'delimited'", "'1.2'"]
>>> "THIS IS A LIST WITH IS IN IT".split("IS")
['TH', ' ', ' A L', 'T WITH ', ' IN IT']
```

### Convert Lists to Strings with .join()

- The string `.join()` method can convert a list of strings to a string.
    - **Note**: The list must contain only strings
- The string whose method is being called is used as a separator between each element in the list
- A "" (null) or " " (space) string is often used to seamlessly join list elements together into a new string

```python
>>> " ".join(["SEC573","is","awesome!"])
'SEC573 is awesome!'
>>> ",".join(["Make","a","csv"])
'Make,a,csv'
>>> "".join(["SEC573","is","awesome!"])
'SEC573isawesome!'
```

### Sorting Lists with list.sort() and sorted()

**Python provides two ways to sort lists:**

- `list.sort()` method: Sorts the list in place, modifying the list
- built-in `sorted()` function: Creates a sorted copy of the list
- Passing (reverse=True) to either function sorts in reverse order
- Both methods can optionally accept a “key” function, which produces an element to sort on

```python
>>> customers=["Mike Passel","alice Passel", "danielle Clayton"]
>>> sorted(customers)
['Mike Passel', 'alice Passel', 'danielle Clayton']
>>> def lowercase(fullname):
...   return fullname.lower()
...
>>> sorted(customers, key=lowercase)
['alice Passel', 'danielle Clayton', 'Mike Passel']
>>> def lastfirst(fullname):
...   return (fullname.split()[1]+fullname.split()[0]).lower()
...
>>> lastfirst("FNAME LNAME")
'lnamefname'
>>> sorted(customers, key=lastfirst)
['danielle Clayton', 'alice Passel', 'Mike Passel']
```

### List Examples

```python
>>> [a for a in [1,2,3,4]]
[1, 2, 3, 4]
>>> [a for a in [1,2,3,4] if a > 2 ]
[3, 4]
>>> [a*2 for a in [1,2,3,4] if a > 2 ]
[6, 8]
>>> [int(a) for a in "1 2 3 4".split()]
[1, 2, 3, 4]
>>> [x for x,y in [("a",4),("b",2),("c",7)]]
['a', 'b', 'c']
>>> [(lambda x:x.upper())(x) for x in "make upper"]
['M', 'A', 'K', 'E', ' ', 'U', 'P', 'P', 'E', 'R']
```

---

## For Loops

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

---

## Tuples

- Tuples are lightweight, less functional lists
- They’re a group of values or objects that have been stuck together
- Defined with parentheses (element, element, element) or just comma-separated values
- Individual elements of a tuple can still be read with their index; for example, Tuple[index]
- Assignments to individual elements of a tuple result in an error (they are immutable)

```python
# Example
movie = ("Meaning of Life","R")
>>> new_tuple = 100,50,"Hello world"
>>> print(new_tuple)
(100, 50, 'Hello world')
# Sorting Example
>>> last_first_nocase("JOSH Barone")
('barone', 'josh')
>>> names =["Mike Passel","alice Passel", "danielle Clayton"]
>>> sorted(names, key=last_first_nocase)
['danielle Clayton', 'alice Passel', 'Mike Passel']
```

---

## Dictionary

- Lists are automatically indexed with an integer
    - list1=['a','b','c'] so list1[0]='a'
- With dictionaries, you specify a "key" as the index
    - dict1={'first':'a','second':'b','third':'c'} so dict1['first']='a'
- Key can be an integer, string, or most any other Python object
- Data can be integers, strings, or any other Python object, including lists or other dictionaries
- Dictionaries are very fast at storing and retrieving data

### Dictionary Methods

- `dict.keys()` returns a view of the keys
- `dict.values()` returns a view of the values
- `dict.items()` returns a view of tuples containing (key, value)

```python
>>> d.keys()
dict_keys(['a', 'b', 'c'])
>>> d.values()
dict_values(['alpha', 'bravo', 'charlie'])
>>> d.items()
dict_items([('a', 'alpha'), ('b', 'bravo'), ('c', 'charlie')])
```

### Looping Through Dictionary Keys

```python
>>> thedict={'a':'alpha','b':'bravo','c':'charlie'}
>>> for eachkey in thedict:
...     print(eachkey,thedict[eachkey])
...
a alpha
b bravo
c charlie
```

### Specialty Dictionaries

- The 'collections' module has several special-purpose dictionaries with modified behavior
- **defaultdict**: A dictionary that enables you to specify a default value for undefined keys
- **Counter**: A dictionary that automatically counts the number of times a key is set

#### defaultdict

- When creating a defaultdict, you pass it a function to initialize entries
- Any query to a key that doesn't exist creates an item in the dictionary with that key, and the value is assigned the result of the specified function

```python
>>> def new_val():
...     return []
...
>>> from collections import defaultdict
>>> list_of_ips = defaultdict(new_val)
>>> list_of_ips['src#1'].append('dst')
>>> list_of_ips['src#2']
[]
>>> list_of_ips
defaultdict(<function new_val at 0x024A1C3>, {'src#1': ['dst'], 'src#2': []})
```

#### counter

- Counter is a customized defaultdict that counts the instances of keys. Similar to `defaultdict(lambda :0)` with a few extra methods
- Has additional methods `.most_common(x)`, `.update()`, `.elements()`, `.subtract()`

##### Counter Example

We can build a custom password dictionary based on a target’s website in just a few lines of Python code:

```python
>>> import requests
>>> from collections import Counter
>>> c = Counter()
>>> webcontent = requests.get('http://metasploit.com').text
>>> c.update(webcontent.lower().split())
>>> c.most_common(6)
[('<a', 117), ('<div', 107), ('</div>', 103), ('/></a>', 65),
('data-bio=""><img', 41), ('<td><a', 24)]
>>> for k in list(c.keys()):
...     if "<" in k: del c[k];continue
...     if ">" in k: del c[k];continue
...     if "=" in k: del c[k];continue
...
>>> c.most_common(8)
[('security', 14), ('collapse', 13), ('the', 12), ('for', 11),
('and', 10), ('testing', 9), ('to', 9), ('of', 8)]
```

```python
# Build a list of all destinations' IP addresses connected to by source IP addresses
## Standard
hostdict = {}
for src,dst in host_ip_tuples:
    if src in hostdict:
        hostdict[src].append(dst)
    else:
        hostdict[src] = [ dst ]
## defaultdict
hostdict = defaultdict(lambda :[])
for src,dst in host_ip_tuples:
    hostdict[src].append(dst)
```

---

## Lambda Function

There is more than one way to declare a function

- **Method #1:** Use the "def" statement:
- **Method #2:** Assign a variable to a lambda function
- **Method #3:** Drop the name with lambda in parentheses

```python
# Method 1
def inc(number):
   return number + 1
# Method 2
>>> inc = lambda number : number + 1
>>> inc(5)
6
# Method 3
>>> (lambda number : number + 1)(5)
6
```

---

## File Operations

### Create New Object

- `r` - Read-Only Mode
- `w` - Write-Only Mode
- `a` - Append Mode
- `rb` - Read Binary and Do Not Interpret and Unicode or End of Lines
- `rt` - (Default Mode) Read Text and Interpret Unicode Strings and \n or \r\n as End of Line

#### Option 1

```python
filehandle = open("complete file path", "<mode>")
```

#### Option 2

```python
with open("complete file path", "<mode>") as file_handle:
```

##### Reading Files (Examples)

```python
# --- open --- #
#Read one line at a time.
filehandle = open('filename', 'r')
for oneline in filehandle:
    print(oneline, end = "")
filehandle.close()
#Read the entire file into a list.
filehandle = open('filename', 'r')
listoflines=filehandle.readlines()
filehandle.close()
#Read the entire file into a single string.
filehandle = open('filename', 'r')
content = filehandle.read()
filehandle.close()
# When reading binary data, always store it in bytes() or bytearray() by opening it with mode "b"
# --- pathlib --- #
>>> content = pathlib.Path("/etc/passwd").read_text()
```

##### Writing Files (Examples)

```python
#Writing to the file (overwrite the contents)
filehandle = open('filename', 'w')
filehandle.write("Write this one line.\n")
filehandle.write(“Write these\nTwo lines\n”)
filehandle.close()
#Append to a file
filehandle = open('filename', 'a')
filehandle.write("add this to the file")
filehandle.close()
```

##### Check for Existence of a file

```python
>>> pathlib.Path("/root/test.txt").is_file()
False
>>> pathlib.Path("/root/test.txt").exists()
False
>>> os.path.exists("/root/test.txt")
False
```

##### Obtain a Listing of a Directory

- The glob() method will expand wildcards and show all matching files and directories

```python
>>> xpath = pathlib.Path("/home/student/Documents/pythonclass/")
>>> list(xpath.glob("*.py"))
# or use list comprehension to only see files
>>> [str(eachpath) for eachpath in xpath.glob("*") if eachpath.is_file()]
```

---

## Regular Expressions

### Useful Examples

#### Valid IP Addresses

```python
(?:2(?:5[0-5]|[0-4][0-9])|[0-1]?[0-9] {1,2})(?:\.(?:2(?:5[0-5]|[0-4][0-9])|[0-1]?[0-9] {1,2})){3}
```

#### Email Addresses

```python
[\w\+\-\.]+@[0-9a-zA-Z][\.\-0-9a-zA-Z]*\.[a-zA-Z]+
```

### Regular Expression Rules

- `text:` Given any text, regular expressions will match that text
- `.(period):` Wildcard for any one character
- `\w:` Any text character (a–z, A–Z, 0–9, and \_) no special characters
- `\W:` Opposite of \w
- `\d` Matches digits (0–9)
- `\D` Opposite of \d
- `\s` Matches any white-space character (space, tab, newlines)
- `\S` Non-white space; that is, the opposite of \s
- `[set of characters]` - define your own sets of characters
- `\b` Border of a word character (transition \w <-> \W)
- `^` Matches from the start of the search string
- `$` Matches to the end of the search string
- `\` Escapes special characters; that is, "\." means it should really find a period
- Adding (?i) or re.IGNORECASE will make your search case insensitive
- Adding (?m) or re.MULTILINE will turn on multiline matching so that ^ and $ apply to match per line instead of for all the entire data.

### Character Sets

- `[\<characters\>]` = Define your own character sets
- `[A–Z]` = Uppercase letters
- `[a–z]` = Lowercase letters
- `[0–9]` = Digits
- `[a–f]` = You can include subsets of chars
- `[!-~]` = Range is ASCII values. !=33,~=126

### re functions()

- `.match(re,data)`: Start at the beginning of data searching for pattern
- `.search(re,data)`: Match pattern anywhere in data
- `.match() and .search()`: Return an object that stores the results
- `.findall(re,data)`: Find all occurrences of the pattern in the data
- re must be bytes if the data you are searching is bytes
- re must be a string if the data you are searching is a string

#### Example

```python
re.findall('regular expression','data to search')
# Example
re.finadll(r"\w","abc")
```
