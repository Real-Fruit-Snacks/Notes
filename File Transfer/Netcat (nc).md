---
tags:
  - Netcat
  - FileTransfer
---

## Example 1

**Server**
```bash
nc -lvnp $Port < $File
```

**Host (Receive the File)**
```bash
nc $ServerIP $Port > $File
```
