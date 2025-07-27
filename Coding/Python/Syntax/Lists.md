---
tags:
  - python
---

> Lists are an indexed group of objects.

- Define with square brackets `[]`
- Empty List = `[]`, `list()`
- List of Names = `['Alice', 'Bob', 'Eve']`
    - Elements in the list are addressed based on their index in the list
- First item in the list of names, `list_of_names[0]`
    - Items in lists can contain a number, string, or any Python object, including other lists
- Items in the list can be overwritten (it is mutable)

## List Elements

List items must be assigned when the list is created or with the `append()`method

```python
# Create list
newlist = ['A','B','C']

# Add to list
newlist[3]="D"
# or 
newlist.append("D")
```

## List Methods

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
['Secret Policemans ball', 'Life of Brian', 'Holy Grail', 'Meaning of Life']
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

## Add Item to List

```bash
kali@kali:~$ cat listTest3.py
#!/usr/bin/python

fruitList = ["apple", "banana", "orange"]
fruitList.append("mango")

print(fruitList)

kali@kali:~$ python listTest3.py
["apple", "banana", "orange", "mango"]
```

## Remove Item from List

```bash
kali@kali:~$ cat listTest4.py
#!/usr/bin/python

fruitList = ["apple", "banana", "orange", "mango"]
fruitList.remove("mango")

print(fruitList)

kali@kali:~$ python listTest4.py
["apple", "banana", "orange"]
```

## Adding and Removing Items from a List

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
>>> alist = ['elements', 'in a list', 500, 4.2999999998]
del alist[0]
alist
['in a list', 500, 4.2999999998]
```

## Converting Strings to Lists with .split()

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

## Convert Lists to Strings with .join()

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

## Sorting Lists with list.sort() and sorted()

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

## List Examples

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
