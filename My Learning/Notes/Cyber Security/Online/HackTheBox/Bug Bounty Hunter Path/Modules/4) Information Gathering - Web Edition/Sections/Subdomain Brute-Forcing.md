---
tags:
  - HackTheBox
  - Information-Gathering-Web-Edition
---
[[Information Gathering - Web Edition]]
[Previous Section](Subdomains.md)

**Subdomain Brute-Forcing** is the process of testing common subdomain names against the target, by leveraging pre-defined lists of carefully crafted wordlists of *potential subdomain names*, increasing the efficiency and effectiveness of *subdomain discovery*.

---
# The Subdomain Brute-Forcing Process
## 1) Wordlist Selection
Selecting an effective wordlist is essential and can be categorised into *three categories*:

|      Category       |                                                                           Description                                                                           |
| :-----------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **General-Purpose** |                                Board range of *common subdomain names*. (e.g. `dev`, `staging`, `blog`, `mail`, `admin`, `test`)                                |
|    **Targeted**     | Focused on specific *industries*, *technologies*, or *naming patterns* relevant to the target. Efficient process which reduces the chance of *false positives*. |
|     **Custom**      |                      Creating *custom wordlists* based on specific *keywords*, *patterns*, or *intelligence gathered* from other sources.                       |

## 2) Iteration & Querying
**Script** or **Tool** which *iterates* through the wordlist by appending each word to test as a subdomain. (e.g. domain: *example.com* to test for subdomain: *dev.example.com*, *staging.example.com*, and *mail.example.com*)
## 3) DNS Lookup
A **DNS Query** is performed on each *potential subdomain* to check if it **resolves to an IP Address** (*typically by querying for A or AAAA records*).
## 4) Filtering & Validation
In the event a *subdomain* successfully resolves it is added to a **list of valid subdomains**, further validation steps can be taken to confirm the subdomain's existence and functionality. (e.g. *attempting access through cURL or a web browser to interact with the subdomain*.)

---
# Subdomain Brute-Forcing Tools
## [DNSEnum](https://github.com/fwaeytens/dnsenum)
DNSEnum (Domain Name System Enumeration) a tool used to comprehensively enumerate DNS records, and supports dictionary and brute-force based attacks for *discovering subdomains*.
## [Fierce](https://github.com/mschwager/fierce)
Fierce is a user-friendly tool used for *recursive subdomain discovery* with addition to featuring *wildcard detection* and an easy-to-use interface.
## [DNSRecon](https://github.com/darkoperator/dnsrecon)
DNSRecon is a versatile tool which combines *multiple DNS reconnaissance* techniques, and offers a customisable output formats.
## [Amass](https://github.com/owasp-amass/amass)
Amass actively maintained tool focused on *subdomain discovery*, known for its integration with other tools, and *extensive data sources*.
## [AssertFinder](https://github.com/tomnomnom/assetfinder)
AssertFinder is a simple yet effective tool for locating subdomains utilising various techniques and is ideal for quick, and lightweight scans. 
## [PureDNS](https://github.com/d3mondev/puredns)
PureDNS is aa powerful, and flexible *DNS brute-forcing* tool, capable of resolving and filtering record results effectively.

---
# DNSEnum More In-Depth
DNS Enum (DNS Enumeration) as aforementioned briefly above, is a versatile and widely utilised command-line tool which is written in [Perl](https://en.wikipedia.org/wiki/Perl).

It is not just merely a tool, but a comprehensive toolkit for *DNS Reconnaissance*, providing numerous utilities in the process of gathering information about a target related to it's *DNS infrastructure*, and *subdomain discovery*.
## DNSEnum Key Functions
|      Key Function       |                                                                                                       Description                                                                                                        |
| :---------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| DNS Record Enumeration  |                                                                       Retrieves various *DNS Records* including A, AAAA, NS, MX, and TXT records.                                                                        |
| Zone Transfer Attempts  | Automatically attempts Zone Transfers from discovered name servers, while most servers are configured to prevent unauthorised zone transfers, although a successful attempt can reveal a vast amount of DNS information. |
| Subdomain Brute-Forcing |                 Supports brute-force enumeration of subdomains based on a provided wordlist, which involves systematically testing potential subdomain names against the target to identify valid ones.                  |
|     Google Scraping     |                                              The tool can scrape Google search results to find additional subdomains that might not be listed in the DNS records directly.                                               |
|     Reverse Lookup      |                          Can perform Reverse DNS Lookups to identify domains associated with a provided IP address which may potentially reveal other websites being hosted on the same server.                          |
|      WHOIS Lookups      |                                                             Can perform WHOIS queries to gather information about domain ownership and registration details.                                                             |

---
# Exercises
Q: Using the known subdomains for inlanefreight.com (www, ns1, ns2, ns3, blog, support, customer), find any missing subdomains by brute-forcing possible domain names. Provide your answer with the complete subdomain, e.g., www.inlanefreight.com.
A: `my.inlanefreight.com`

[Next Section](DNS%20Zone%20Transfers.md)