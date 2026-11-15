---
tags:
  - HackTheBox
  - Network-Foundations
---
[[Network Foundations Contents]]
[Previous Section](Network%20Security.md)
# 1) Accessing the Internet
Imagining a user using their laptop to connect to the internet through their home Wireless LAN (WLAN) network.

As the laptop is connecting to this network, the following steps occur:

|**Steps**|
|---|
|The laptop first identifies the correct wireless network/SSID|
|If the network uses WPA2/WPA3, the user must provide the correct password or credentials to authenticate.|
|Finally, the connection is established, and the DHCP protocol takes over the IP configuration.|

---
# 2) Checking Local Network Configuration (DHCP)
When a user opens a web browser (such as Chrome, Firefox, or Safari) and types in a website like `www.example.com` to access a website, the browser prepares to send out a request to a webpage.

Before a packet leaves the laptop, the operating system checks for a valid IP address for the local area network through the following steps:

|**Steps**|**Description**|
|---|---|
|`IP Address Assignment`|If the laptop does not already have an IP, it requests one from the home router's `DHCP` server. This IP address is only valid within the local network.|
|`DHCP Acknowledgement`|The DHCP server assigns a private IP address (for example, _192.168.1.10_) to the laptop, along with other configuration details such as subnet mask, default gateway, and DNS server.|

---
# 3) DNS Resolution
Next, the laptop needs to find the IP address of `www.example.com`. Which for this to occur, the following steps must be taken:

|**Steps**|**Description**|
|---|---|
|`DNS Query`|The laptop sends a DNS query to the DNS server, which is typically an external DNS server provided by the ISP or a third-party service like Google DNS.|
|`DNS Response`|The DNS server looks up the domain `www.example.com` and returns its IP address (e.g., 93.184.216.34).|

---
# 4) Data Encapsulation and Local Network Transmission
Now, the laptop has the destination IP address, it begins preparing the data for transmission. 

The following steps occur within the OSI model:

|**Steps**|**Description**|
|---|---|
|`Application Layer`|The browser creates an HTTP (or HTTPS) request for the webpage.|
|`Transport Layer`|The request is wrapped in a TCP segment (or UDP, but for web traffic it’s typically TCP). This segment includes source and destination ports (HTTP default port 80, HTTPS default port 443).|
|`Internet Layer`|The TCP segment is placed into an IP packet. The source IP is the laptop’s private IP (e.g., 192.168.1.10), and the destination IP is the remote server’s IP (93.184.216.34).|
|`Link Layer`|The IP packet is finally placed into an Ethernet frame (if we’re on Ethernet) or Wi-Fi frame. Here, the MAC (Media Access Control) addresses are included (source MAC is the laptop’s network interface, and destination MAC is the router’s interface).|
When the encapsulation frame is ready, the laptop checks its ARP table and sends an ARP request to find the MAC address of the default gateway (router), which then the frame is sent to the router using it's MAC address as the destination at the link layer (Layer 2).

---
# 5) Network Address Translation (NAT)
Once the router receives the frame, it processes the IP packet. At this point, the router replaces the private IP (e.g. **192.168.1.10**) with the router's public IP address (e.g. **203.0.113.45**) in the packet header.

This process is known as **Network Address Translation (NAT)**.

After this the router forwards the packet to the ISP's network, and from there it travels across the internet to its destination IP (e.g. **93.184.216.43**).

During this process, the packet goes through many intermediate routers that look at the destination IP and determine the best path to reach that network.

---
# 6) Server Receives the Request and Responds
Upon reaching the destination network, the server's firewall, if there is one, checks if the incoming traffic on port 80 (HTTP) or 443 (HTTPS) is allowed.

If this passes the firewall rules, it goes to the server hosting (e.g. `www.example.com`), which the web server software (e.g. **Apache**, **Nginx**, **IIS**) receives and processes the request, preparing the webpage (**HTML**, **CSS**, **JS**, Images, etc) and sends it back as a response.

The server's response process follows a similar path in reverse. It's IP now the source, and the original request home router is it's destination. When the packet reaches the home router, NAT ensures it is mapped (using IP Tables) back to the laptop's original IP address.

---
# 7) Decapsulation and Display
Finally, the laptop receives the response and strips away the Ethernet/Wi-Fi frame, the IP header, and the TCP header, until the application layer data is extracted.

The laptop's browser reads the HTML, CSS, and/or JavaScript and renders the webpage.
#### Data Flow Diagram:
![[Data_Flow-1.png]]
<sub>Flowchart showing the complete journey of a user accessing a website on the internet</sub>

---
# **No Exercises** for this section.

[Next Section](Skills%20Assessment%20-%20Network%20Foundations.md)
