---
tags:
  - python
---

Python provides multiple ways to read, write, and manage files using built-in functions and the `pathlib` and `os` modules.

---

## File Open Modes

| Mode   | Description                                                                 |
| ------ | --------------------------------------------------------------------------- |
| `'r'`  | Read-only mode (file must exist)                                            |
| `'w'`  | Write mode (creates or overwrites the file)                                 |
| `'a'`  | Append mode (adds content to the end of file)                               |
| `'rb'` | Read binary mode (reads file as bytes, no decoding or line ending handling) |
| `'rt'` | Read text mode (default; interprets Unicode and line endings like `\n`)     |

---

## Opening a File

### Option 1: Manual open and close

```python
filehandle = open("complete_file_path", "<mode>")
# Don't forget to call filehandle.close() when done
```

### Option 2: With context manager (recommended)

```python
with open("complete_file_path", "<mode>") as file_handle:
    # work with file_handle inside this block
# File is automatically closed
```

---

## Reading from Files

### Read line by line

```python
filehandle = open('filename', 'r')
for oneline in filehandle:
    print(oneline, end="")
filehandle.close()
```

### Read entire file into a list

```python
filehandle = open('filename', 'r')
list_of_lines = filehandle.readlines()
filehandle.close()
```

### Read entire file into a string

```python
filehandle = open('filename', 'r')
content = filehandle.read()
filehandle.close()
```

> To read binary data, open the file with mode `'rb'` and store the result in `bytes()` or `bytearray()`.

### Using `pathlib` to read a file

```python
from pathlib import Path
content = Path("/etc/passwd").read_text()
```

---

## Writing to Files

### Overwrite content with `'w'`

```python
filehandle = open('filename', 'w')
filehandle.write("Write this one line.\n")
filehandle.write("Write these\nTwo lines\n")
filehandle.close()
```

### Append content with `'a'`

```python
filehandle = open('filename', 'a')
filehandle.write("Add this to the file")
filehandle.close()
```

---

## Checking if a File Exists

You can use either `pathlib` or `os` to check for file existence.

```python
from pathlib import Path
Path("/root/test.txt").is_file()   # False
Path("/root/test.txt").exists()    # False

import os
os.path.exists("/root/test.txt")   # False
```

---

## Listing Files in a Directory

Use `pathlib.Path.glob()` to list matching files or directories.

```python
from pathlib import Path

xpath = Path("/home/student/Documents/pythonclass/")

# List all Python files
list(xpath.glob("*.py"))

# List only files (not directories) using list comprehension
[ str(p) for p in xpath.glob("*") if p.is_file() ]
```
