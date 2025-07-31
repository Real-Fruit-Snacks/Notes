---
tags:
  - Netcat
  - FileTransfer
---
Here’s a fleshed‑out set of notes for “Example 1,” showing how to transfer a file over TCP using `netcat`:

---
## Example 1: File Transfer with Netcat
### 📋 Overview
You can use `nc` (netcat) to quickly transfer files between two machines over a TCP connection. One side listens for an incoming connection and sends the file; the other connects and writes the incoming data to disk.

---
### 🛠 Prerequisites
- Both machines have `nc` (netcat) installed.
- The listening side’s firewall allows inbound connections on the chosen port.
- You know the sender’s IP address (`$ServerIP`) and an open port (`$Port`).
- You have read/write permissions for the file paths you choose.

---
### 🖥️ Server (Sender) — Listen & Send

```bash
# Start listening on $Port and send the contents of $File when a client connects.
nc -l -v -n -p "$Port" < "$File"
```

- `-l` → listen mode (wait for an incoming connection)
- `-v` → verbose (prints status messages)
- `-n` → numeric-only IP addresses (no DNS lookups)
- `-p $Port` → specify the port to listen on
- `< "$File"` → redirect the contents of the local file into the TCP stream

**What happens:**

1. `nc` binds to the specified port and waits.
2. When the client connects, `nc` reads from `< "$File"` and sends the bytes over the socket.
3. After EOF, `nc` closes the connection and exits.

---
### 🖥️ Host (Receiver) — Connect & Receive

```bash
# Connect to the server at $ServerIP:$Port and write the incoming data into $File
nc "$ServerIP" "$Port" > "$File"
```

- `"$ServerIP"` → IP or hostname of the sending machine
- `"$Port"` → port that the sender is listening on
- `> "$File"` → redirect the incoming TCP data into a new (or overwritten) file

**What happens:**

1. `nc` initiates a TCP connection to the server.
2. As data arrives, the shell redirects it into the local `$File`.
3. When the sender closes the socket (EOF), `nc` exits and you have an exact copy of the original.

---
### 🔀 Step‑by‑Step Workflow

1. **On the server machine**, pick a port (e.g. `4444`) and a file to send (`secret.zip`):
```bash
Port=4444
File=secret.zip
nc -l -v -n -p "$Port" < "$File"
```
    
2. **On your local/receiving machine**, point to the server’s IP and port, and choose where to save it:
```bash
 ServerIP=203.0.113.5
 Port=4444
 File=received.zip
 nc "$ServerIP" "$Port" > "$File"
```
3. **Watch the transfer**: both sides will print bytes transferred (thanks to `-v`).
4. **Verify integrity** (optional):
 ```bash
sha256sum secret.zip  # on server
sha256sum received.zip  # on receiver; should match
```

---
### 💡 Tips & Caveats
- **Firewall/Router**: Ensure port `$Port` is open and forwarded if NAT’d.
- **Permissions**: Check you have read access on the server’s file and write access where you’re saving.
- **Security**: Data is sent unencrypted. For sensitive files, tunnel over SSH or use `openssl s_client`/`s_server`.
- **TCP vs UDP**: The above uses TCP. For UDP you’d add `-u`, but UDP transfers are unreliable (no built‑in retransmits).
- **One‑shot**: By default, `nc` quits after one transfer. To serve multiple clients, wrap in a `while true; do …; done` loop.