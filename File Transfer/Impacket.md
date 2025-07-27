---
tags:
  - Impacket
  - FileTransfer
---

## Impacket SMB Server Commands

### Start SMB Server

- This command starts an SMB server in the current directory.
- The `./` specifies the current directory as the share path.

```bash 
sudo impacket-smbserver ./
```

### Start SMB Server with SMB2 Support

- This command starts an SMB server in the current directory with SMB2 protocol support.
- The `-smb2support` flag enables SMB2 protocol, which is newer and more secure than SMB1.

```bash
sudo impacket-smbserver . -smb2support
```

### Copy Files to SMB Share

- This command copies all files (`*`) to a specified SMB share.
- Replace `$Share` with the actual name of the SMB share you want to copy files to.
- Note: The backslash `\` needs to be escaped in bash, so it should be written as `\\`.

```bash
copy * \\$Share
```
