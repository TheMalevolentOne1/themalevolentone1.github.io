---
tags:
  - HackTheBox
  - Information-Gathering-Web-Edition
---
[[Information Gathering - Web Edition]]
[Previous Section](Utilising%20WHOIS.md)

The [[Domain Name System (DNS) (Network Foundations)]] acts as the *Internet's GPS* transforming memorable *Domain Names* (i.e. destination name) to *IP Addresses* (i.e. longitude and latitude coordinates) which *computers use to communicate*.

**Domain Names** for the same reason that destination names, in applications like Google Maps exist, trying to navigate a city utilising the exact longitude and latitude coordinates for a location would be tedious and cumbersome, and therefore DNS was created as an *easily-to-remember human-readable* format.

---
# The DNS Process

| Stage |                  Action Performed                   |                                                                                                                                      Description                                                                                                                                       |
| :---: | :-------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|   1   |    **Computer Asks For Directions (DNS Query)**     | **Domain Name** (e.g. google.com) is entered and the computer checks the *memory (cache)* to see if it recalls the **IP Address** from a previous visit. In the event, it *does not* it reaches out to a **DNS Resolver** usually provided by the **ISP (Internet Service Provider)**. |
|   2   | **DNS Resolver Checks Its Map (Recursive Lookup)**  |                The **DNS Resolver**, which also has it's own *cache*, in the event it doesn't have the **IP Address** from there it begins the process of searching the **DNS Hierarchy**. It queries its **Root Name Server**. (e.g. the *librarian* of the internet.)                |
|   3   |         **Root Name Server Points The Way**         |                          **Root Server** doesn't know the *exact address* but knows the *TLD Name Server* responsible for the end of the domain (e.g. *.com*, *.org*, *.gov*, etc) does, and points the **DNS Resolver** to the correct **TLD Name Server**.                           |
|   4   | **TLD (Top-Level Domain) Name Server Narrows Down** |                The **TLD Name Server** (which can be compared to a *regional map*) knows which **Authoritative Name Server** is responsible for the specific domain trying to be found, and continues to send the **DNS Resolver** there.<br>![[TLD Regional Map.png]]                 |
|   5   | **Authoritative Name Server Deliver's IP Address**  |                                                          The **Authoritative Name Server** is the *final destination* (i.e. the exact street address) locates the correct **IP Address** and sends back to **DNS Resolver**.                                                           |
|   6   |      **DNS Resolver Returns The Information**       |                                                                 The **DNS Resolver** receives the **IP Address** and provides it back to the computer, which also caches it in the event it needs to revisit it again.                                                                 |
|   7   |       **Computer Connects Using IP Address**        |                                                                            Now that the **Computer** knows the *IP Address* from the **DNS Resolver** it connects to the *web server hosting* the website.                                                                             |

## The Hosts File
The **Hosts** file is simply a `text file` which is used to map *hostnames to IP Addresses* providing a manual local method of **Domain Name Resolution** which completely bypasses the **DNS process**.

The **DNS Process** automates the process of translation from **Domain Names** to **IP Addresses**, the `hosts` file allows for direct local overrides.
### OS Host File Locations
- **Windows**: *C:\Windows\System32\drivers\etc\hosts
- **MacOS**: */private/etc/hosts*
- **Linux**: */etc/hosts*

```txt
Host File Format:
<IP Address> <Hostname> [<Aliases> ...]

Example:
127.0.0.1 localhost
192.168.1.10 devserver.local
```

>-  **Administrator/Root Privileges** are *required* to edit host files. 
>- **Any Changes** are *immediate* without requiring a system restart.
### Common Use Cases for Editing Host File
- Development & Troubleshooting
- Blocking Specific Websites (e.g. *Unwanted Websites by redirecting their domains to non-existent IPs* (e.g. *0.0.0.0*))
- Redirecting a **Domain** to *local server* for development purposes
- *Verifying Connectivity* by specifying an **IP Address**.

---
# DNS Zones
In **DNS** a **zone** is a specific part of the *domain namespace* that a specific entity or individual (i.e. administrator) manages. The *zone* acts as a virtual container for a set of domain names in relation to the domain itself (e.g. *mail.example.com* in relation to the domain *example.com*).
## Example of DNS Zone
The **zone file** (similar to the `hosts file` on a user's computer) resides on a **DNS Server** and defines the *resource records* of the domain, providing information for **translating Domain Names into IP Addresses**.
### Example of DNS Zone File

```text
$TTL 3600 ; Default Time-To-Live (1 hour)
@       IN SOA   ns1.example.com. admin.example.com. (
                2024060401 ; Serial number (YYYYMMDDNN)
                3600       ; Refresh interval
                900        ; Retry interval
                604800     ; Expire time
                86400 )    ; Minimum TTL

@       IN NS    ns1.example.com.
@       IN NS    ns2.example.com.
@       IN MX 10 mail.example.com.
www     IN A     192.0.2.1
mail    IN A     198.51.100.1
ftp     IN CNAME www.example.com.
```

#### Explanation of DNS Zone File Key Elements
The *zone file* defines the **Authoritative Name Servers** (*NS Records*), *Mail Server* (*MX Record*), and **IP Addresses** (*A Records*) for various hosts within the *example.com* domain.

|          DNS Concept          |                                      Description                                       |                                                                                                                                      Example                                                                                                                                      |
| :---------------------------: | :------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|        **Domain Name**        |      A *human-readable* label for a **website**, or **other internet resource**.       |                                                                                                                                 `www.example.com`                                                                                                                                 |
|        **IP Address**         | A *unique numerical identifier* assigned to **each device connected to the internet**. |                                                                                                                                    `192.0.2.1`                                                                                                                                    |
|       **DNS Resolver**        |             A **server** that translates *Domain Names into IP Addresses*.             |                                                                                                 **ISP's DNS Server** or **Public DNS Resolver** like `Google DNS (e.g. 8.8.8.8)`                                                                                                  |
|     **Root Name Server**      |                   The *top-level servers* in the **DNS Hierarchy**.                    |                                                                                                   There are **13 Root Servers Worldwide** named A-M `(e.g. a.root-servers.net)`                                                                                                   |
|      **TLD Name Server**      |           Server responsible for *Top-Level Domains* (e.g. `.com`, `.org`).            | [*Verisign*](https://en.wikipedia.org/wiki/Verisign) (An American company which manages **two** of the internet's 13 root nameservers) for `.com`, `.net`, `.name`, etc & [*PIR*](https://en.wikipedia.org/wiki/Public_Interest_Registry) (*Public Internet Registry*) for `.org` |
| **Authoritative Name Server** |            The server that holds the *actual IP Addresses* for the domain.             |                                                                                                           Often managed by *hosting providers* or *domain registrars*.                                                                                                            |
|     **DNS Record Types**      |                    Different *types of information* stored in DNS.                     |                                                                                    **A**, **AAAA**, **CNAME**, **MX**, **TXT**, [etc](https://en.wikipedia.org/wiki/List_of_DNS_record_types)                                                                                     |

#### DNS Record Types
##### DNS Zone File Classifications
- `IN` stands for **Internet**. (Indicates record applies to the **Internet Protocol Suite (IP)**)
###### [Other Classifications](https://miek.nl/2009/july/31/dns-classes/) Rarely used in Modern DNS Configurations
- `CH` stands for **ChaosNet**.
- `HS` stands for **Hesiod**.

| Record Type |       Name of Record        |                                                                     Description                                                                      |                                              Zone File Example                                              |
| :---------: | :-------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------: |
|    **A**    |    *IPv4 Address Record*    |                                                      Maps **Hostname** to its **IPv4 Address**.                                                      |                                    *`www.example.com` IN A `192.0.2.1`*                                     |
|  **AAAA**   |    *IPv6 Address Record*    |                                                      Maps **Hostname** to its **IPv6 Address**.                                                      |                         *`www.example.com` IN AAAA `2001:db8:85a3::8a2e:370:7334`*                          |
|  **CNAME**  |   *Canonical Name Record*   |                                      Creates an **alias** for a **hostname** pointing to **another hostname**.                                       |                            *`blog.example.com` IN CNAME `webserver.example.net`*                            |
|   **MX**    |   *Mail Exchange Record*    |                                  Specifies the *mail server(s)* responsible for handling **email** for the domain.                                   |                                 *`example.com` IN MX 10 `mail.example.com`*                                 |
|   **NS**    |    *Name Server Record*     |                                         Delegates a *DNS Zone* to a **specific authoritative name server**.                                          |                                   *`example.com` IN NS `NS1.example.com`*                                   |
|   **TXT**   |        *Text Record*        |                        Stores *arbitrary text information* often used for **domain verification**, or **security policies**.                         |                            *`example.com` IN TXT `v=spf1 mx -all`* (SPF Record)                             |
|   **SOA**   | *Start of Authority Record* | **Administration Information** regarding a *DNS Zone* including **Primary Name Server**, **Responsible Person's Email**, and [*other parameters*](). | *`example.com` IN SOA `ns1 example.com.` `admin.example.com.` `2024060301` `10800` `3600` `604800` `86400`* |
|   **SRV**   |      *Service Record*       |                                          Defines **Hostname** and **Port Number** for *specific services*.                                           |                      *`_sip.udp.example.com` IN SRV 10 5 5060 `sipserver.example.com`*                      |
|   **PTR**   |      *Pointer Record*       |                                                                                                                                                      |                            *`1.2.0.192.in-addr.arpa.` IN PTR `www.example.com.`*                            |

---
# Why DNS Matters For Web Reconnaissance
The **DNS** is a *critical* component of the **target's infrastructure** which can be leveraged for vulnerabilities.
## Uncoverable Vulnerabilities in DNS

|           Vulnerability            |                                                                                                                                                                                                                                           Description                                                                                                                                                                                                                                            |
| :--------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|   **Uncovering Vulnerabilities**   |                                                                                                          **DNS records** can reveal **valuable information** (i.e. *subdomains*, *mail servers*, and *name server records*. (e.g. a **CNAME Record** pointing to an *outdated server*. (e.g. `dev.example.com` CNAME `oldserver.example.net`) could lead to a **vulnerable system**.))                                                                                                           |
| **Mapping Network Infrastructure** | **Creating a comprehensive map of the target's infrastructure** by *analysing DNS data*. (e.g. identifying the **Name Server** (NS Records) for a domain can reveal *the hosting provider* being utilised, while the **Address** (A Records) i.e. `loadbalancer.example.com` can locate a *load balancer* which helps understand the following: <br>Identify how *different systems are connected*,<br>Identify *traffic flow*,<br>Pinpoint *choke points or weaknesses* that can be exploited.) |
|       **Monitoring Changes**       |                      **Continuous Monitoring** *DNS Records* can reveal changes in the target's infrastructure over time. (e.,g. Sudden appearance of a new *subdomain* (e.g. `vpn.example.com`) might indicate a *new entry point into the network* while a **TXT Record** containing a value (e.g. `_1password=`) which strongly suggest the organisation is utilising **1Password** which could be leveraged for *social engineering* or *targeted phishing campaigns*).                      |

---
# **No Exercises** for this section.

[Next Section](Digging%20DNS%20(DNS%20Tools%20&%20Techniques).md)