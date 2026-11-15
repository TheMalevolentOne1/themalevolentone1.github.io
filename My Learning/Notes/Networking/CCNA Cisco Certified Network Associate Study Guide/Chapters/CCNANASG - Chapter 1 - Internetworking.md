---
tags:
  - CCNA-Cisco-Certified-Network-Study-Guide
  - Study-Notes
  - Make-Pretty
---
[[CCNA Network Associate Study Guide (Todd Lammle) - Study Contents]]
[[CCNA Cisco Certified Network Study Guide Glossary]]
# What content is covered in this chapter?:
The CCNA Topics covered in this chapter include:
- Describe how a network works
	- Describe the purpose and functions of various network devices
	- Select the components required to meet a network specification
	- Use the OSI and TCP/IP models and their associated protocols to explain how data flows in a network
	- Describe common networked applications including web applications
	- Describe the purpose and basic operation of the protocols in Voice over IP and Video over IP (VoIP) on a network
	- Interpret network diagrams
	- Describe components required for network and internet communications
- Configure, verify and troubleshoot a switch with VLANs and interswitch communications
	- Explain network segmentation and basic traffic management concepts.
- Implement an IP addressing scheme and IP Services to meet network requirements in a medium-size Enterprise branch office network.
	- Explain the operations and benefits of using DHCP and DNS.
- Configure, verify and troubleshoot basic router operation and routing on Cisco devices.

The end of this chapter contains 20 **review questions** and **three written labs**.

# Internetworking Basics
![[CCNA Cisco NA Study Guide Figure 1.1 The Basic Network 2]]
<sub>The figure presented shows a basic LAN network thats connected together using a hub.</sub>

This network is actually one collision domain and one broadcast domain.

Both Sally and Bob are connected to the same LAN with the same multiport repeater (router/hub).

The question is how does Bob communicate to Sally? Is a message sent out such as "Hello Sally! Are you there?" or does Bob use the IP address "Hello 192.168.0.3! Are you there?" both these answer's are wrong. Bob will use Sally's MAC address (Also known as hardware address) to communicate with her. 

Bob is going to get Sally's hardware address, despite the fact he doesn't have the IP address, only name (Hostname) so first he will obtain Sally's IP address through Name Resolution (Hostname to IP address resolution) typically something that is accomplished using DNS (Domain Name Service).

(if Bob is on the same LAN as Sally he doesn't even need DNS he can just broadcast to Sally asking for her information therefore no DNS needed.) (Limited to windows? Needs checking.)

| Source      | Destination   | Protocol | Info                    |
| ----------- | ------------- | -------- | ----------------------- |
| 192.168.0.2 | 192.168.0.255 | NBNS     | Name query NB SALLY<00> |
Since both hosts are on a local LAN Windows (Bob) will just broadcast to resolve the name Sally (the destination 192.168.0.255 is a broadcast address) as a result Sally will inform Bob that her address is 192.168.0.3 (Analyser information not given).

`EthernetII.Src:192.168.0.2(00:14:22:be:18:3b),Dst:Broadcast(ff:ff:-ff:ff:ff:ff)`

What the output shows is that Bob knows his own MAC address and source IP address but not Sally's IP address or MAC address therefore Bob sends a broadcast address of all 'f's for a MAC address (a Data Link Layer broadcast) an IP LAN broadcast 192.168.0.255. 

Broadcasts are covered more extensively in chapter 3.

Now Bob has to broadcast on the LAN to get Sally's MAC address so he can finally communicate to her PC and send data.

| Source      | Destination | Protocol | Info                                  |
| ----------- | ----------- | -------- | ------------------------------------- |
| 192.168.0.2 | Broadcast   | ARP      | Who has 192.168.0.3? Tell 192.168.0.2 |

Sally's Response

| Source      | Destination | Protocol | Info                                    |
| ----------- | ----------- | -------- | --------------------------------------- |
| 192.168.0.3 | 192.168.0.2 | ARP      | 192.168.0.3 is aat 00:0b:db:99:d3:5e    |
| 192.168.0.3 | 192.168.0.2 | NBNS     | NBNS Name query response NB 192.168.0.3 |
Now Bob has both Sally's IP and Mac addresses. This is both listed as source address at this point because this information was sent from Sally back to Bob, so now Bob has all the information he needs to communicate to Sally.

Address Resolution Parsing (ARP) and IP Routing is covered in Chapter 8

Another complication is it is also likely that at some point, a network will have to be broken down into a bunch of smaller ones because user response will be dwindled to a slow crawl as the network grows. The growth of the network will result in LAN traffic congestion. To resolve this issue the solution as presented in Figure 1.2 is _network segmentation_, which is done by using devices like routers, switches and bridges.

![[CCNA Cisco NA Study Guide Figure 1.2 A switch can replace the sub, breaking up collision domains 2]]

The figure displays a network that's been segmented with a switch so that each network segment connected to the switch is now a separate collision domain, although this network is still only one broadcast domain.

The router/hub used in figure 1.2 just ended the one collision domain from the port switch. 

There are various things that can cause LAN traffic congestion such as:
- Too many hosts in a broadcast or collision domain
- Broadcast storms
- Too much multicast traffic
- Low bandwidth
- Adding hubs for connectivity to the network

A difference between the first figure and second figure is that the second replaces the hub on first figure with a switch, the reason this was done is because hubs do not segment a network, they just connect network segments together, which is an inexpensive way to connect a few PCs, great for home use but not for troubleshooting.

Routers are used to connect networks together and route packets of data from one network to another. 

Routers by default, break up a broadcast domain - being the set of devices on that network segment, that hear all the broadcasts sent on that segment, rather than globally across the entire network.

![[CCNA Cisco NA Study Guide Figure 1.3 Routers create an Internetwork 2]]

The figure demonstrates a network that has each of its host with their own collision domain, also the router includes WAN connections in the diagram as well, by using the serial interface for WAN connections specifically a V.35 physical interface on a Cisco router.

Breaking up a broadcast domain is important because when a host or server sends a broadcast every device on that network must read and process that broadcast unless a router is involved in which the router’s interface handles the broadcast and can respond in a way similar to “no thank you” disregarding the broadcast, this as a result does not forward the broadcast to other networks.

While routers are known for breaking up broadcast domains, it’s also important to recall that they also break up collision domains as well. 

There are two advantages to using routers in a network:
- they don’t forward broadcasts by default
- They can filter the network based on layer 3 (Network Layer) information e.g IP addres

Four typical router functions in a network:
- Packet Switching
- Packet Filtering
- Internetwork Communication
- Path Selection 

Routers are really layer 3 switches. Which unlike layer 2 switches, which forward forward or filter frames, routers (or layer 3 switches) use logical addressing and provide what is called packet switching.

Routers can provide packet filtering by using access lists and when routers connect two or more networks together and use logical addressing (IPv4 or IPv6) which is called an internetwork.

Routers use a routing table (map of internetwork) to make path selections and to forward packets to remote networks.

In addition switches aren’t used to create internetworks (they do not break up broadcast domains by default) switches are used to add functionality to a network LAN.

The main function of a switch is to make a LAN work better, to optimise its performance providing more bandwidth for its users. 

