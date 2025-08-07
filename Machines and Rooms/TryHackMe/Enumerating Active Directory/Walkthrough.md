---
tags:
  - ActiveDirectory
  - TryHackMe
creation_date: 2025-08-06
---
## Setup
### Configure DNS
```bash
# Add to /etc/hosts
sed -i '1s|^|10.200.8.101\tthmdc.za.tryhackme.com\n|' /etc/hosts

# Change IP on "Nameserver:" line
vim /etc/resolv.conf
	# Nameserver: 10.200.8.101 
```

### Given Credentials
> [!IMPORTANT]
> Given from: http://distributor.za.tryhackme.com/creds

```bash
# Username 
kenneth.davies

# Password 
Password1
```

---
## THMJMP1
### RDP
```bash
# With the credentials provided
xfreerdp /u:kenneth.davies /p:Password1 /v:10.200.8.248 /dynamic-resolution +clipboard
```
#### Using the GUI to Enumerate the Active Directory
![[IMG-202508062139.png]]
