---
tags:
  - ActiveDirectory
  - Enumeration
  - External
creation_date: 2025-08-06
---
## Configure DNS
> [!IMPORTANT]
> Windows Networks use the Domain Name Service (DNS) to resolve hostnames to IPs.

```bash
# Add to /etc/hosts
sed -i '1s|^|$DomainControllerIP\t$DomainControllerName\n|' /etc/hosts

# Change IP on "Nameserver:" line
vim /etc/resolv.conf

# --- Backup Method --- # 
# Add to /etc/resolv-dnsmasq
sed -i '1s|^|nameserver $DomainControllerIP\n|' /etc/resolv-dnsmasq
```

