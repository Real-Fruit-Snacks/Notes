---
tags:
  - python
---

## Create New Object

- `r` - Read-Only Mode
- `w` - Write-Only Mode
- `a` - Append Mode
- `rb` - Read Binary and Do Not Interpret and Unicode or End of Lines
- `rt` - (Default Mode) Read Text and Interpret Unicode Strings and \n or \r\n as End of Line

### Option 1

```python
filehandle = open("complete file path", "<mode>")
```

### Option 2

```python
with open("complete file path", "<mode>") as file_handle:
```

#### Reading Files (Examples)

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

#### Writing Files (Examples)

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

#### Check for Existence of a file

```python
>>> pathlib.Path("/root/test.txt").is_file()
False
>>> pathlib.Path("/root/test.txt").exists()
False
>>> os.path.exists("/root/test.txt")
False
```

#### Obtain a Listing of a Directory

- The glob() method will expand wildcards and show all matching files and directories

```python
>>> xpath = pathlib.Path("/home/student/Documents/pythonclass/")
>>> list(xpath.glob("*.py"))
# or use list comprehension to only see files
>>> [str(eachpath) for eachpath in xpath.glob("*") if eachpath.is_file()]
```
