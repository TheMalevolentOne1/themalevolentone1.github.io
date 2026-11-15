---
tags:
  - HackTheBox
  - Information-Gathering-Web-Edition
---
[[Information Gathering - Web Edition]]
[Previous Section](Digging%20DNS%20(DNS%20Tools%20&%20Techniques).md)

**Subdomains** are extensions of the *main domain* (e.g. `example.com`) may utilise `mail.example.com` for its **email service**.
# Why Subdomains are Important for Web Reconnaissance

| Subdomain Information                  |                                                                                                                    Description                                                                                                                    |
| :-: | :-: |
| **Development & Staging Environments** |    Companies often use subdomains to *test new features*, or *updates* before deploying into the **main site**, due to *relaxed security measures* these environments *may contain* **vulernabilities**, or expose **sensitive information**.     |
| **Hidden Login Portals**               | Subdomains might host **administrative panels** or **other login pages** that are not meant to be *publicly accessible*, which can be utilised by *attackers* seeking *unauthorised access* can find these as valuable targets as an entry point. |
| **Legacy Applications**                |                                             *Older*, or *Forgotten Web Applications* might reside on *subdomains*, which may potentially contain **outdated software** with *known vulnerabilities*.                                              |
| **Sensitive Information**              |                                              Subdomains can *inadvertently* expose **confidential documents**, **internal data**, or **configuration files** that could be *valuable to attackers*.                                               |

---
# Subdomain Enumeration
**Subdomain Enumeration**, is the process of identifying and listing *subdomains*. From **DNS**, subdomains are typically represented through the **A** (*IPv4 Address Record*) and the **AAAA** (*IPv6 Address Record*) which *maps* the *Subdomain Name* to it's corresponding *IP Address*. Additionally **CNAME** records might also be used to create *aliases for Subdomains* which point to *other domains or subdomains*. 

The two primary approaches to **Subdomain Enumeration** are **Active Subdomain Enumeration** and **Passive Subdomain Enumeration**.
## Active Subdomain Enumeration
**Active Subdomain Enumeration** involves *directly interacting* with the target domain's DNS servers to *uncover subdomains*. Two common methods of active subdomain enumeration, are **DNS Zone Transfer**, and **Brute-Force Enumeration**.
### DNS Zone Transfer
This method to *uncover subdomains* is in the event of a *misconfigured* server might inadvertently leak a *complete list of subdomains* however, this is often *unsuccessful* due to **tightened security**.
### Brute-Force Enumeration
This method involves testing a list of *potential subdomain names* against the target domain, which can be easily performed with sophisticated tools like `dnsenum`, `ffuf`, and `gobuster` which automate the process; by using wordlists of *common subdomain names*, or *custom-generated lists* based on **specific patterns**.
## Passive Subdomain Enumeration
Passive Subdomain enumeration relies on *external sources of information* to discover *subdomains* without **directly querying** the target's DNS servers.
### Certificate Transparency Logs
**Certificate Transparency (CT) Logs**, and public repositories of **SSL/TLS Certificates**, which are certificates that often include a list of *associated subdomains* in their **Subjective Alternative Name (SAN) field** providing more potential targets.
### Utilising Search Engines
Another method of passive subdomain enumeration is using **search engines** like *Google* or *DuckDuckGo*, by employing search operators (i.e. *site:*) which filter results to show only subdomains related to the target domain.
### Online Databases and Tools
Online databases and tools, *aggregate* **DNS data** from multiple sources, allowing searches to be performed on subdomains without *directly interacting* with the target. 

|                 Tool                 |                                                                       Description                                                                        | Features                                                                                       |
| :----------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------: | ---------------------------------------------------------------------------------------------- |
| [Certificate Search](https://crt.sh) | A **web-based** tool which queries *Certificate Transparency (CT) logs* to log **SSL/TLS certificates** in the **Subject Alternative Name (SAN)** field. | Free, No Account Required, Public Repository, Supports WildCard searches e.g. `%.example.com`. |
## Active VS Passive Enumeration
Active Subdomain Enumeration provides more *control and a potentially comprehensive discovery* but has a more *substantial risk* of discovery.

Passive Subdomain Enumeration is *stealthier* but *may not* discover all existing subdomains.

In conclusion combining both *active* and *passive* subdomain enumeration is more thorough and effective strategy.

---
# **No Exercises** for this section.

[Next Section](Subdomain%20Brute-Forcing.md)