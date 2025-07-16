---
title: Scapy
tags:
  - scapy
  - python
created: 2025-07-15
description: Scapy is an extensive packet crafting module created by Philippe Biondi.
author: M West
---

```bash
pip install scapy
```

> [!NOTE]
> forging packets and sniffing packets requires root access, reading packets does not

### rdpcap() and wrpcap() Methods

- **wrpcap(filename,packetlist)** will write a PacketList to a pcap file
      - `wrpcap("newpacketcapture.pcap", PacketList2write)`
- **rdpcap(filename [, #])** will read a file containing pcaps into a scapy.PacketList Data structure
      - `packetlist=rdpcap("apacketcapture.pcap")`
- **sniff()** can also be used to capture live packets or read from a pcap
- Use **sniff()** to capture all packets filtered by a filterer() until some event determined by stopper() and pass them to the function analyze()
      • `sniff(iface="eth0", store=0, lfilter=filterer, prn=analyze, stop_filter=stopper)`
- Use **sniff()** to capture 100 packets that are selected by the selectpackets() function
      • `sniff(iface="eth0", lfilter=selectpackets, count=100)`
- Use **sniff()** to read a pcap and apply a BPF (Berkeley Packet Filter)
      • `sniff(offline="sansimages.pcap", filter="TCP PORT 80")`
      • **Note:** Filter can be unreliable due to OS dependencies. Use lfilter when portability is required (discussed in a few pages)

### Sniff()’s Callback Functions

> Sniff's "callback" functions define how it will behave and are called for every packet

- **prn** callback is called to process every packet that gets past the lfilter function
- **lfilter** returns False for every packet that should be ignored by the sniffer
- **stop_filter** returns True when the sniffer should stop sniffing packets

```python
# Example
>>> def stopper(packetin):
...     return (time.time() - start_time) > 60
...
>>> def filterer(packetin):
...     return packetin.haslayer(Raw)
...
>>> def processor(packetin):
...     print("I got a packet from", packetin[IP].src)
...
>>> start_time = time.time()
>>> sniff(iface="lo", store=0, prn=processor, lfilter=filterer, stop_filter=stopper)
I got a packet from 127.0.0.1
I got a packet from 127.0.0.1
```

### PcapReader

> If you would like to avoid loading a large pcap file into memory, you can use a for loop to step through it with a PcapReader

```python
>>> for pkt in PcapReader("/home/student/Public/packets/ncat.pcap"):
... print(pkt.dport)
...
9898
52253
9898
9898
52253
```

### .sessions() Method

> The .sessions() method enables you to follow TCP streams.

```python
>>> packetlist.sessions()
{'TCP 10.10.10.114:52261 > 74.125.159.104:80': <PacketList:
TCP:41 UDP:0 ICMP:0 Other:0>, 'TCP 10.10.10.114:35850 >
74.125.159.106:80': <PacketList: TCP:14 UDP:0 ICMP:0 Other:0>
```
