---
tags:
  - HackTheBox
  - Network-Foundations
---
[[Network Foundations Contents]]
[Previous Section](Network%20Address%20Translation%20(NAT).md)

The Domain Name Service (DNS) is like the phonebook of the internet. It helps us find the right number (an IP address) for a given name (a domain  such as www.google.com). Without DNS we would need to memorise long, often complex IP addresses for every website we visit. DNS makes our lives easier by allowing us to use human-friendly names to access online resources.

---
# Domain Names vs. IP Addresses

|**Address**|**Description**|
|---|---|
|`Domain Name`|A readable address like `www.example.com` that people can easily remember.|
|`IP Address`|A numerical label (e.g., `93.184.216.34`|

DNS bridges the gap between these two, so we can just type `www.google.com` without needing to remember the underlying IP address.

---
# DNS Hierarchy
DNS is organised like a tree, starting from the root and branching out into different layers.

| **Layer**                  | **Description**                                                                   |
| -------------------------- | --------------------------------------------------------------------------------- |
| `Root Servers`             | The top of the DNS hierarchy.                                                     |
| `Top-Level Domains (TLDs)` | Such as `.com`, `.org`, `.net`, or country codes like `.uk`, `.de`.               |
| `Second-Level Domains`     | For example, `example` in `example.com`.                                          |
| `Subdomains or Hostname`   | For instance, `www` in `www.example.com`, or `accounts` in `accounts.google.com`. |
![[DNS-2.png]]
<sub>DNS Hierarchy presented through URL</sub>

---
# DNS Resolution Process (Domain Translation)
When entering a domain name in the browser, the computer needs to find the corresponding IP address. This process is known as **DNS Resolution** or **Domain Translation**.

Below is the step by step process for how this works:

| **Step** | **Description**                                                                                                                                                  |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Step 1` | We type `www.example.com` into our browser.                                                                                                                      |
| `Step 2` | Our computer checks its local DNS cache (a small storage area) to see if it already knows the IP address.                                                        |
| `Step 3` | If not found locally, it queries a `recursive DNS server`. This is often provided by our Internet Service Provider or a third-party DNS service like Google DNS. |
| `Step 4` | The recursive DNS server contacts a `root server`, which points it to the appropriate `TLD name server` (such as the `.com` domains, for instance).              |
| `Step 5` | The TLD name server directs the query to the `authoritative name server` for `example.com`.                                                                      |
| `Step 6` | The authoritative name server responds with the IP address for `www.example.com`.                                                                                |
| `Step 7` | The recursive server returns this IP address to your computer, which can then connect to the website’s server directly.                                          |
Below is the simple example of **Domain Translation** process. Suppose the website `www.example.com` is wanting to be visited. Without the Domain Name System (DNS), we would need to know and type the IP address such as **93.184.216.34** every time you want to access the site. However, with the DNS in place it is possible to simply type in the domain name to access the site.

Behind the scenes, the DNS automatically finds and translates this domain name into the correct IP address, enabling seamless connection to the website. 
![[DNS_Query_Process-2.png]]
<sub>Example showing the DNS Query Process</sub>

---
# Exercises:
Q: What type of domain is `.com` considered as? (Format: Three words, example: One-Two Three)
A: `Top-Level Domain`

Q: In the domain `www.example.com`, what is `example` called?
A: `Second-Level Domain`

Q: What is checked first in the DNS resolution process when you enter a domain name into a browser? (Format: Two words)
A: `DNS Cache`

Q: What type of DNS server is typically provided by an Internet Service Provider?
A: `Recursive DNS Server`

Q: Which server directs the recursive DNS server to the appropriate TLD name server?
A: `Root Server`

Q: What numerical label uniquely identifies a device on a network?
A: `IP Address`

Q: In the URL "accounts.google.com", what is `accounts` considered as?
A: `Subdomain`

Note: An additional note is that people typically refer to "DNS" incompletely relating to a single function of the whole system; the translation of domain names to ip addresses, which does not cover the entirety of the domain name system.

[Next Section](Internet%20Architecture.md)