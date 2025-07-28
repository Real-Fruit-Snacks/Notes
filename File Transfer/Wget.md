---
tags:
  - Wget
  - FileTransfer
---

## File Transfer using Wget

Wget is a command-line utility available by default on Linux and can be installed on Windows. It’s especially useful for downloading files over HTTP, HTTPS, or FTP.

### Linux to Linux or Linux to Windows:

Start a Python HTTP server on the Linux machine.

```bash
python3 -m http.server $Port
```

On the destination machine, download the file using wget:

```
wget http://$ServerIP:$Port/$File
```

### Windows with Wget:

Run the following command:

```
wget http://$ServerIP:$Port/$File -OutFile $File
```
