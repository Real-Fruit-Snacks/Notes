---
tags:
  - Impacket
  - FileTransfer
---
## Impacket SMB Server Commands
### 📋 Overview
`impacket-smbserver` lets you quickly spin up an SMB (Server Message Block) share on your machine without a full Samba install. This is handy for exposing files to Windows or other SMB‑capable clients for testing, pivoting, or simple file exchange.

---
### 🛠 Prerequisites
- **Python 3** on your host machine.
- **Impacket** installed (e.g., `pip install impacket`).
- **Root/Administrator** privileges to bind to SMB ports (default 445).
- **Firewall** rules allowing inbound TCP port 445 (or your chosen port) if across networks.
- The **current directory** (or specified path) contains the files you wish to share.

---
### 🖥️ Start SMB Server (SMB1)
```bash
sudo impacket-smbserver ./ <ShareName>
```

- `./` → serve files from the current working directory.
- `<ShareName>` → (optional) the name clients see for the share; defaults to the directory name.
- **By default**, this advertises an SMB1 share.

**What happens:**

1. The tool listens on TCP port 445.
2. Windows/Linux clients can connect to `\\<YourIP>\<ShareName>` and browse/download files.

---

### 🖥️ Start SMB Server with SMB2 Support

```bash
sudo impacket-smbserver ./ <ShareName> -smb2support
```

- `-smb2support` → enables the SMB2 protocol (more secure, supports larger files and better performance).
- You can serve multiple shares by listing additional `<path> <name>` pairs.

**Example:**

```bash
sudo impacket-smbserver /home/user/public public_share ~/secrets secret_share -smb2support
```

---
### 📂 Copy Files to the SMB Share
#### From Windows CLI
```bat
REM Copy all files in current directory to the remote SMB share
copy * \\%ServerIP%\%ShareName%\
```

- `*` → wildcard for all files.
- `\\%ServerIP%\%ShareName%\` → UNC path to your Impacket share.
- Backslashes in Bash contexts must be escaped (`\\`), but in native Windows `%`‑variables and single `\` suffice.
#### From PowerShell

```powershell
# Download all files matching *.txt from the share into the local folder
Copy-Item -Path "\\$ServerIP\$ShareName\*.txt" -Destination . -Recurse
```
#### From Linux (mount + copy)

```bash
# Install cifs-utils if needed:
sudo apt install cifs-utils

# Create mount point and mount the share:
mkdir ~/mnt_smb
sudo mount -t cifs "//${ServerIP}/${ShareName}" ~/mnt_smb -o guest

# Copy files into the share:
cp /path/to/local/file ~/mnt_smb/

# When done, unmount:
sudo umount ~/mnt_smb
```

---
### 🔀 Step‑by‑Step Workflow

1. **On the Impacket host**:
    ```bash
cd /path/to/serve
sudo impacket-smbserver ./ fileshare -smb2support
    ```
    
2. **On the Windows client**:

```bat
set ServerIP=192.168.1.100
set ShareName=fileshare
copy secret.pdf \\%ServerIP%\%ShareName%\
```
3. **On a Linux client** (optional):
    ```bash
ServerIP=192.168.1.100
ShareName=fileshare
sudo mount -t cifs "//${ServerIP}/${ShareName}" /mnt/smb -o guest
cp /tmp/important.docx /mnt/smb/
sudo umount /mnt/smb
    ```
4. **Verify transfer** by listing the share or checking file hashes.

---
### 💡 Tips & Caveats

- **SMB1 vs SMB2**: SMB1 is outdated and insecure; prefer `-smb2support` whenever possible.
- **Authentication**: Impacket’s server runs as “guest” by default—no credentials—so restrict to trusted networks or VPNs.
- **Port Conflicts**: If another service uses port 445, you can’t bind. Stop the conflicting service or use Docker with port mapping.
- **Permissions**: Share respects local filesystem permissions. A file unreadable by your user won’t be served.
- **Logging**: Add `-debug` to see connection details and file requests in the console.
- **Persistence**: Impacket’s server runs one‑shot. To serve continuously, wrap in a loop or use a process manager (e.g., `systemd`, `supervisor`).
- **Cleanup**: Stop the server with `Ctrl+C`. Ensure no lingering mounts on clients before reuse.