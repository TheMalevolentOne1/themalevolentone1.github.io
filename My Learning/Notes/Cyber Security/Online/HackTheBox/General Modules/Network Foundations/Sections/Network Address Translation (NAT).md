---
tags:
  - HackTheBox
  - Network-Foundations
---
[[Network Foundations Contents]]
[Previous Section](Dynamic%20Host%20Configuration%20Protocol%20(DHCP).md)

The internet relies on a system of numerical addresses, known as IP addresses to route data from one device to another. 

The original addressing scheme, IPv4 offers a finite number of IP addresses (approx 4.3 billion). Although this might sound like a highly significant number, the explosive growth of the internet has diminished the amount of these addresses are in short supply.

One solution to this insufficiency issue is **Network Address Translation (NAT)**. The idea is that **NAT** allows multiple devices on a private network to share a single public IP address. This not only helps conserve the limited pool of public IP addresses but also adds a layer of security to the internal network.

---
# Private VS Public IP Addresses
**Public IP** addresses are globally unique identifiers assigned by the Internet Service Providers (ISPs). Devices equipped with these IP addresses can be accessed from anywhere on the Internet, allowing them to communicate across the global network.
##### Example:
The IP address 8.8.8.8 is used for Google's DNS server, and 142.251.46.174 identifies one of Google's web servers. These addresses ensure that devices can uniquely identify and reach each other over the internet.

**Private IP** addresses are designated for use within local networks such as homes, schools, and offices. These addresses are not routable on the global internet, meaning packets sent to these addresses are not forward by internet backbone routers.

Defined by RFC 1918, common IPv4 private address ranges include:
- 10.0.0.0 to 10.255.255.255
- 172.16.0.0 to 172.31.255.255 
- 192.168.0.0 to 192.168.255.255

This setup ensures that these private networks operate independently of the internet while facilitating internal communication and device connectivity.

Private IP addresses contribute to conserving public IP addresses. Using **Network Address Translation (NAT)**, a local network can utilise private IP addresses while sharing a single public IP address, reducing the number of public IPs needed. 

Therefore this setup provides devices with accessibility to the internet without using multiple public addresses. Additionally, private IPs help secure the network by isolating internal devices from direct exposure to the internet, protecting them from potential external threats.

---
# What is NAT?
**Network Address Translation (NAT)** is a process carried out by a router or similar device that modifies the source or destination IP address in the headers of IP packets as they pass through. This modification is used to translate the private IP addresses of devices within the local network to the single public IP address of the assigned router.

---
# How NAT Works
Consider a home network with the following three devices:
- laptop - 192.168.1.10
- phone - 192.168.1.11
- gaming console - 192.168.1.1

The home router managing this network has two critical interfaces:
- The LAN (Local Area Network) interface connects to the private network with an IP address of 192.168.1.1
- The WAN (Wide Area Network) interface, connected to the ISP's network carries a public IP address - 203.0.113.50

The process of NAT translation begins when a device, say the laptop, sends a request to visit a website such as `https://google.com`. This request packet, originating with the private IP of 192.168.1.10 is sent to the router.

Here, the NAT function of the router modifies the source IP in the packet header from the private IP to the public IP of the router 203.0.113.50. This packet then travels across the internet to reach its intended web server.

Which upon being received, the web server sends a response back to the router's public IP. As the response arrives the router's NAT table, keeps track of IP mappings and identifies that 203.0.113.50:4444 corresponds to the laptop at 192.168.1.10:5555 (Ports 4444 and 5555 are dynamic). The router then translate the public IP back to the laptop's private IP and forwards the internal response to the laptop, completing the communication cycle.
![[NAT-2.png]]
<sub>Example of the Network Address Translation process.</sub>

---
# Types of NAT
To be able to better understand Network Address Translation (NAT), it's helpful to know that there are several types of Network Address Translation (NAT), each one is designed for specific networking needs.

Below are some types of NAT:

| **Type**                         | **Description**                                                                                                                                                                                                                                                                                                                                         |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Static NAT`                     | Involves a one-to-one mapping, where each private IP address corresponds directly to a public IP address.                                                                                                                                                                                                                                               |
| `Dynamic NAT`                    | Assigns a public IP from a pool of available addresses to a private IP as needed, based on network demand.                                                                                                                                                                                                                                              |
| `Port Address Translation (PAT)` | Also known as NAT Overload, is the most common form of NAT in home networks. Multiple private IP addresses share a single public IP address, differentiating connections by using unique port numbers. This method is widely used in home and small office networks, allowing multiple devices to share a single public IP address for internet access. |

---
# Benefits and Trade-Offs
Network Address Translation (NAT) offers a number of benefits and presents some trade-offs as well.

|**Benefits**|
|---|
|Conserves the limited IPv4 address space.|
|Provides a basic layer of security by not exposing internal network structure directly.|
|Flexible for internal IP addressing schemes.|

| **Trade-Offs**                                                                                                         |
| ---------------------------------------------------------------------------------------------------------------------- |
| Complex services like hosting a public server behind NAT can require additional configuration (e.g., port forwarding). |
| NAT can break certain protocols that rely on end-to-end connectivity without special handling.                         |
| Adds complexity to troubleshooting connectivity issues.                                                                |

---
# Exercises

Q: What type of NAT allows multiple private IP addresses to share one public IP address using unique port numbers?
A: `PAT`

Q: What RFC specifies private IP ranges?
A:  `RFC 1918`

Q: Which NAT type involves a one-to-one mapping of private IP addresses to public IP addresses?
A: `Static NAT`

Q: What type of NAT assigns a public IP from a pool as needed?
A: `Dynamic NAT`

Q: What device typically performs NAT in a home network?
A: `Router`

[Next Section](Domain%20Name%20System%20(DNS)%20(Network%20Foundations).md)
