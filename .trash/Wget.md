---
tags:
  - Wget
  - FileTransfer
---
## File Transfer with Wget
### 📋 Overview
Use `wget` to fetch files over HTTP, HTTPS, or FTP from a simple web server. This method is great when you already have a web‑accessible machine (e.g., running a Python HTTP server) and need a one‑way pull of files.

---
### 🛠 Prerequisites
- **Server machine**
    - Python 3 installed (for the `http.server` module).
    - Firewall/NAT allows inbound on your chosen port.
- **Client machine**
    - `wget` installed:
        - **Linux:** usually pre‑installed or via `apt install wget` / `yum install wget`.
        - **Windows:** install via [Chocolatey](https://chocolatey.org/) (`choco install wget`), [Scoop](https://scoop.sh/), or WSL.
- You know the server’s IP (`$ServerIP`), port (`$Port`), and the filename (`$File`).

---
### 🖥️ Server (Linux) — Start a Simple HTTP Server

By default, `python3 -m http.server` serves files from the current working directory.

```bash
# Move into the directory containing the file you want to share:
cd /path/to/files

# Start an HTTP server on $Port (e.g. 8000)
python3 -m http.server "$Port" --bind 0.0.0.0
```

- `--bind 0.0.0.0` → listen on all interfaces (instead of localhost only).
- Press `Ctrl+C` to stop the server when done.

---
### 📥 Client (Linux or Windows with GNU Wget)

Use `wget` to pull the file from the HTTP server:

```bash
# Download $File from the server and save it locally as $File
wget "http://$ServerIP:$Port/$File" -O "$File"
```

- `-O "$File"` → write output to the specified filename (overwrites if existing).
- Omit `-O` to save with the remote name (same as `$File`).

---
### 💻 Windows Native with PowerShell’s Invoke-WebRequest

If you don’t have GNU wget but are on modern Windows, you can use PowerShell’s built‑in `Invoke-WebRequest` (aliased as `wget` in some environments):

```powershell
# In PowerShell prompt:
Invoke-WebRequest -Uri "http://$ServerIP:$Port/$File" -OutFile "$File"
```

- `-Uri` → the URL to fetch.
- `-OutFile` → the destination filename.

---
### 🔀 Step‑by‑Step Workflow
1. **On the server**
```bash
Port=8000
cd ~/share
python3 -m http.server "$Port" --bind 0.0.0.0
```
    
2. **On the client**
    - **Linux/WSL with wget**

```bash
ServerIP=203.0.113.5
File=archive.tar.gz
wget "http://$ServerIP:$Port/$File" -O "$File"
```

    - **Windows PowerShell**

```powershell
$ServerIP = '203.0.113.5'
$Port     = 8000
$File     = 'archive.tar.gz'
Invoke-WebRequest -Uri "http://$ServerIP`:$Port`/$File" -OutFile $File
```

3. **Verify integrity** (optional)
    - **Linux:** `sha256sum archive.tar.gz`
    - **Windows:** `Get-FileHash .\archive.tar.gz -Algorithm SHA256`

---

### 💡 Tips & Caveats

- **Directory scope:** The Python server shares the entire working directory. Double‑check you’re in the right folder.
- **Security:** Traffic is unencrypted HTTP. For sensitive data, consider HTTPS (`python3 -m http.server` with SSL or use `openssl s_server`), or transfer over SSH/SCP.
- **Firewall/NAT:** Make sure port forwarding is configured if either machine is behind a router.
- **Port conflicts:** If `$Port` is in use, pick another (e.g., above 1024).
- **Overwriting:** By default, `-O` overwrites without prompting—rename or move existing files if you need to keep them.
- **Alternatives:**
    - **FTP:** Replace `python3 -m http.server` with an FTP server and use `wget ftp://…`.
    - **curl:** On both Linux and Windows, you can often use `curl -O http://…/$File` for a similar pull.