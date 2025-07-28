---
tags:
  - Python
  - FileOperations
---
## File Open Modes

| Mode | Description                                              |
| ---- | -------------------------------------------------------- |
| `r`  | Read-only (file must exist)                              |
| `w`  | Write (creates file or truncates existing)               |
| `a`  | Append (creates file if needed; writes at end)           |
| `rb` | Read binary (returns `bytes`, no decoding)               |
| `wb` | Write binary (writes `bytes`, truncates or creates file) |
| `rt` | Read text (default; decodes to `str`, handles `\n`)      |
| `x`  | Exclusive creation (fails if file exists)                |

```python
# Examples of modes
open('data.txt', 'r')   # open for reading text
open('data.txt', 'wb')  # open for writing bytes
open('log.txt', 'a')    # open for appending text
open('new.txt', 'x')    # create new file only if it doesn't exist
```

---

## Opening and Closing Files
### 1. Manual Open/Close

```python
f = open('example.txt', 'r')      # must call close()
data = f.read()
f.close()
```
### 2. Context Manager (Recommended)
Automatically closes the file when the block ends.

```python
with open('example.txt', 'r') as f:
    data = f.read()
# f is closed here
```

---
## Reading from Files
Assume a file `sample.txt` contains:

```
Line 1
Line 2
Line 3
```
### Read Entire File as String

```python
with open('sample.txt', 'r') as f:
    content = f.read()
print(content)
# Output:
# Line 1
# Line 2
# Line 3
```
### Read All Lines into a List

```python
with open('sample.txt', 'r') as f:
    lines = f.readlines()
print(lines)
# Output: ['Line 1\n', 'Line 2\n', 'Line 3\n']
```

### Read Line by Line

```python
with open('sample.txt', 'r') as f:
    for line in f:
        print(line.strip())
# Output:
# Line 1
# Line 2
# Line 3
```

### Read Fixed-Size Chunks

```python
with open('sample.txt', 'r') as f:
    chunk = f.read(5)    # read first 5 characters
    print(chunk)
# Output: 'Line '
```

### Reading Binary Data

```python
with open('image.png', 'rb') as f:
    data = f.read()
print(type(data))       # <class 'bytes'>
```

---

## Writing to Files
### Overwrite (Mode `w`)

```python
with open('output.txt', 'w') as f:
    f.write("First line.\n")
    f.write("Second line.\n")
# 'output.txt' now contains those two lines
```
### Append (Mode `a`)

```python
with open('output.txt', 'a') as f:
    f.write("Third line.\n")
# Adds to end without erasing existing content
```

### Write a List of Strings

```python
lines = ['One\n', 'Two\n', 'Three\n']
with open('output.txt', 'w') as f:
    f.writelines(lines)
# Equivalent to multiple f.write() calls
```

### Writing Binary Data

```python
binary_data = b'\x00\x01\x02'
with open('data.bin', 'wb') as f:
    f.write(binary_data)
```

---

## File Existence and Metadata

### Using `pathlib`

```python
from pathlib import Path

p = Path('example.txt')
print(p.exists())    # True if path exists (file or directory)
print(p.is_file())   # True if it's a regular file
print(p.is_dir())    # True if it's a directory
```

### Using `os.path`

```python
import os

print(os.path.exists('example.txt'))      # Same as Path.exists()
print(os.path.isfile('example.txt'))      # True if file
print(os.path.isdir('example.txt'))       # True if directory
```

---

## Listing Directory Contents

### `pathlib.Path.glob()`

```python
from pathlib import Path
folder = Path('/home/user')

# All Python files
for py in folder.glob('*.py'):
    print(py.name)

# All entries
for entry in folder.glob('*'):
    print(entry)
```

### Filtering Only Files

```python
from pathlib import Path
folder = Path('/home/user')

files = [p for p in folder.iterdir() if p.is_file()]
print(files)
```

### Using `os.listdir()`

```python
import os

entries = os.listdir('/home/user')
print(entries)  # names only, not full paths
```

---

## Reading and Writing with `pathlib`

```python
from pathlib import Path

# Read text
text = Path('notes.txt').read_text()

# Read bytes
data = Path('image.png').read_bytes()

# Write text
Path('notes.txt').write_text("Hello, world!\n")

# Write bytes
Path('output.bin').write_bytes(b'\xde\xad\xbe\xef')
```

---

## Best Practices

- Always use a **context manager** (`with`), to ensure files close properly.
- Specify encoding for text files when needed:
    ```python
    open('utf8.txt', 'r', encoding='utf-8')
    ```
- Handle exceptions around I/O to catch permission errors, missing files, etc.:

    ```python
    try:
        with open('config.json') as f:
            config = f.read()
    except FileNotFoundError:
        print("Config file not found")
    ```
    
- For high-performance or large files, consider reading/writing in **chunks** or using **memory‑mapped** files via `mmap`.
    