
---
[[Hacker - Hack The System - The Ethical Python Hacking Guide - Chapter 1]]
[Back To Chapter 1](Hacker%20-%20Hack%20The%20System%20-%20The%20Ethical%20Python%20Hacking%20Guide%20-%20Chapter%201.md###%20Simple%20Packet%20Sniffer)
# Process
The process detailed in the book missed out an important step, which was explaining why the TCP packets returned Raw data. The solution being to convert the Raw data into its byte form and then convert that into a string. Due to the Windows Operating System I had to set the interface to the `\Device\NPF_Loopback`, being NPCAP loopback adapter. 

The book as an overall flaw, doesn't seem to specify a lot that can be considered as Windows specific.
## Code
![[packet_sniffering.png]]
## Result
![[packet_sniffer_tcp_logs.png]]
**Note**: A way to improve this would be to have a list of IP addresses, and/or using an ARP request against the external IP to resolve a MAC Address, and only adding [+] to new connections.