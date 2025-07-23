---
tags:
  - python
---


- Lists are automatically indexed with an integer
    - list1=['a','b','c'] so list1[0]='a'
- With dictionaries, you specify a "key" as the index
    - dict1={'first':'a','second':'b','third':'c'} so dict1['first']='a'
- Key can be an integer, string, or most any other Python object
- Data can be integers, strings, or any other Python object, including lists or other dictionaries
- Dictionaries are very fast at storing and retrieving data

## Dictionary Methods

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

## Reference a Value Dictionary by its Key

```bash
kali@kali:~$ cat dictTest.py
#!/usr/bin/python

theOne = { 
    "firstName":"Thomas", 
    "lastName":"Anderson", 
    "occupation":"Programmer"
    }
    
theOne["company"] = "MetaCortex"

print(theOne["firstName"])

kali@kali:~$ python dictTest.py
Thomas
```

## Adding to the Dictionary

```bash
kali@kali:~$ cat dictTest.py
#!/usr/bin/python

theOne = { 
    "firstName":"Thomas", 
    "lastName":"Anderson", 
    "occupation":"Programmer"
    }
    
theOne["company"] = "MetaCortex"

print(theOne)

kali@kali:~$ python dictTest.py
{'firstName': 'Thomas', 'lastName': 'Anderson',  'occupation': 'Programmer', 'company': 'MetaCortex'}
```

## Change Value of a Key

```bash
kali@kali:~$ cat dictTest.py 
#!/usr/bin/python

theOne = {
        "firstName":"Thomas",
        "lastName":"Anderson",
        "occupation":"Programmer"
        }

theOne["company"] = "MetaCortex"

print(theOne)

theOne["occupation"] = "Superhero"

print(theOne)

kali@kali:~$ ./dictTest.py 
{'firstName': 'Thomas', 'lastName': 'Anderson', 'occupation': 'Programmer', 'company': 'MetaCortex'}
{'firstName': 'Thomas', 'lastName': 'Anderson', 'occupation': 'Superhero', 'company': 'MetaCortex'}
```

## Looping Through Dictionary Keys

```python
>>> thedict={'a':'alpha','b':'bravo','c':'charlie'}
>>> for eachkey in thedict:
...     print(eachkey,thedict[eachkey])
...
a alpha
b bravo
c charlie
```

## Specialty Dictionaries

- The 'collections' module has several special-purpose dictionaries with modified behavior
- **defaultdict**: A dictionary that enables you to specify a default value for undefined keys
- **Counter**: A dictionary that automatically counts the number of times a key is set

### defaultdict

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

### counter

- Counter is a customized defaultdict that counts the instances of keys. Similar to `defaultdict(lambda :0)` with a few extra methods
- Has additional methods `.most_common(x)`, `.update()`, `.elements()`, `.subtract()`

#### Counter Example

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
