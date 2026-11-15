---
tags:
  - HackTheBox
  - Network-Foundations
---
[[Network Foundations Contents]]
[Previous Section](Network%20Communication.md)
# Introduction To DHCP
In a computer network, every device needs a unique IP (Internet Protocol) to communicate with other devices.

Manually assigning IP addresses to each device can be time-consuming and cause errors, especially in larger networks. To resolve this issue, networks can rely on Dynamic Host Configuration Protocol (DHCP).

**DHCP** is a network management protocol used to automate the process of configuring devices on IP networks. It allows devices to automatically receive an IP address and other network configuration parameters, such as subnet mask, default gateway, and DNS servers, without manual intervention.

DHCP simplifies network management by automatically assigning IP addresses which significantly reduces the administrative workload. This automation ensures that each device connected to the network receives a unique IP address, preventing conflicts and duplication of addresses. Furthermore, DHCP recycles IP addresses that are no longer in use when devices disconnect from the network, optimising the available address pool.

---
# How DHCP Works
The DHCP process involves a series of interactions between the client (The device requesting an IP address) and the DHCP server (the service running on a network device that assigns IP addresses).

|**Role**|**Description**|
|---|---|
|`DHCP Server`|A network device (like a router or dedicated server) that manages IP address allocation. It maintains a pool of available IP addresses and configuration parameters.|
|`DHCP Client`|Any device that connects to the network and requests network configuration parameters from the DHCP server.|

This process is often referred to as DORA, an acronym for:
- D - Discover
- O - Offer
- R - Request
- A - Acknowledge

|**Step**|**Description**|
|---|---|
|`1. Discover`|When a device connects to the network, it broadcasts a **DHCP Discover** message to find available DHCP servers.|
|`2. Offer`|DHCP servers on the network receive the discover message and respond with a **DHCP Offer** message, proposing an IP address lease to the client.|
|`3. Request`|The client receives the offer and replies with a **DHCP Request** message, indicating that it accepts the offered IP address.|
|`4. Acknowledge`|The DHCP server sends a **DHCP Acknowledge** message, confirming that the client has been assigned the IP address. The client can now use the IP address to communicate on the network.|

Note: A Linux host, connected to a wireless network, initialises the DORA process.

The IP address assignment via DHCP is not permanent but is instead issued with a specific lease time. For instance a DHCP server might assign an IP address to a phone with a lease time of 24 hours. After this period, the phone must request a renewal of the least to continue using the IP address.

In regards to the renewal process, before the lease expires, the client must proactively attempt to renew its IP address lease. This involves sending a renewal request to the DHCP server. As the lease nears its expiration, the client communicates with the DHCP server, asking if it can continue using the assigned IP address to which the server can respond accordingly, extending the lease.
##### Example:
Based on the previous steps discussed of how DHCP assigns an IP address to a device, follow the scenario below:
- Alice brings her new laptop to the office and connects it to the network
- Since the laptop doesn't have an IP address yet, it sends out a DHCP Discover message to find a DHCP server.
- The office's DHCP receives this message and responses with an offer, proposing the IP address 192.168.1.10.
- Alice's laptop receives this offer and sends back a DHCP Request message to accept the IP address.
- Finally, the DHCP server acknowledges this request and confirms the assignment.
- The laptop is now configured with the IP address 192.168.1.10 allowing it to communicate on the network.

The IP address 192.168.1.10 assigned to Alice's laptop is not permanent but is instead provided for a specific duration, known as lease time. As this lease nears expiration, Alice's laptop must renew it to continue the IP address. To do this, it sends another DHCP Request to the DHCP server asking to extend the lease. If the server can renew the lease, it will respond with a DHCP Acknowledge message, confirming continued usage of the IP address.
![[DHCP-2.png]]
<sub>Example showing PC connecting to DHCP Server.</sub>

---
# Exercises

Q: What protocol automates IP address configuration for devices on a network?#

A: DHCP

Q: What acronym describes the sequence of messages exchanged during the DHCP process?

A: DORA

Q: What type of message does a client send to accept an IP address from a DHCP server?

A: Request

[Next Section](Network%20Address%20Translation%20(NAT).md)