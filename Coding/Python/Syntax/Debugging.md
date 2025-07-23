---
tags:
  - python
---

Python’s PDB debugger is a full featured debugger that is already installed on every system that has Python! Four ways to start the Python Debugger:

- Call "breakpoint()" function in your code where you want to begin debugging
- Add "import pdb; pdb.set_trace()" does the same thing in python < 3.7
- Start the program in debug mode with "python –m pdb <[script.py](http://script.py)>"
- Debug after a crash by typing these commands:
    - Launching an interactive shell after it crashes " python -i <[script.py](http://script.py)> "
    - Once it crashes and you're in interactive mode, type " import pdb; [pdb.pm](http://pdb.pm)()
