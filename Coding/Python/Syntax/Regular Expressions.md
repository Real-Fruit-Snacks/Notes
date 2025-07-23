---
tags:
  - python
---

## Useful Examples

### Valid IP Addresses

```python
(?:2(?:5[0-5]|[0-4][0-9])|[0-1]?[0-9] {1,2})(?:\.(?:2(?:5[0-5]|[0-4][0-9])|[0-1]?[0-9] {1,2})){3}
```

### Email Addresses

```python
[\w\+\-\.]+@[0-9a-zA-Z][\.\-0-9a-zA-Z]*\.[a-zA-Z]+
```

## Regular Expression Rules

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

## Character Sets

- `[\<characters\>]` = Define your own character sets
- `[A–Z]` = Uppercase letters
- `[a–z]` = Lowercase letters
- `[0–9]` = Digits
- `[a–f]` = You can include subsets of chars
- `[!-~]` = Range is ASCII values. !=33,~=126

## re functions()

- `.match(re,data)`: Start at the beginning of data searching for pattern
- `.search(re,data)`: Match pattern anywhere in data
- `.match() and .search()`: Return an object that stores the results
- `.findall(re,data)`: Find all occurrences of the pattern in the data
- re must be bytes if the data you are searching is bytes
- re must be a string if the data you are searching is a string

### Example

```python
re.findall('regular expression','data to search')
# Example
re.finadll(r"\w","abc")
```
