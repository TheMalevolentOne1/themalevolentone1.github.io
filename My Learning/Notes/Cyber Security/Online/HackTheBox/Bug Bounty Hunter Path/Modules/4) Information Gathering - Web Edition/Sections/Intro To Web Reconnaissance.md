---
tags:
  - HackTheBox
  - Information-Gathering-Web-Edition
---
[[Information Gathering - Web Edition]]

**Web Reconnaissance**, the foundation of a security assessment. It is the process of meticulously collecting information about a target website or web application. 

As shown in the diagram below, is the *preparatory phase* before deeper analysis and potential exploitation techniques are performed.

![[PT-process.webp]]
<sub>The Penetration Testing Process Diagram</sub>

---
# Primary Goals of Web Reconnaissance
## Identifying Assets
Uncovering all *publicly accessible components of the target*:
- Web Pages
- Subdomains
- IP Addresses
- Any Other Technologies Used
## Discovering Hidden Information
Locating *sensitive inadvertently exposed*:
- Backup Files
- Configuration Files
- Internal Documentation

This information may reveal valuable insights and potential entry points for attacks.
## Analysing Attack Surface
Examining the target's attack surface to *identify potential vulnerabilities and weaknesses*:
- Assesses Technologies Utilised
- Configuration Information
- Deducing Possible Entry Points For exploitation
## Gathering Intelligence
Collecting information which can be leveraged for *further exploitation or social engineering attacks*:
- Identifying Key Personnel
- Email Addresses
- Patterns of Behaviour That Could be Exploited

---
# Types of Reconnaissance
Web Reconnaissance has two types of fundamental methodologies: **Active** and **Passive** reconnaissance.
## Active Reconnaissance
**Active Reconnaissance** involves the attacker *directly interacts with the target system* to gather information, providing direct and often comprehensive overview of the target's infrastructure however, it carries a *high risk* of detection as interactions with the target can **trigger alerts or raise suspicion**.

|         Technique          |                                              Description                                              |                                                                     Example                                                                     |                            Tools                            |                                                    Risk of Detection                                                     |
| :------------------------: | :---------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------: |
|     **Port Scanning**      |                  Identifying **open ports** and **services** running on the target.                   |                           Using **NMap** to scan a web server for *open ports* e.g. `HTTP Port 80`, `HTTPS Port 443`.                           |                 NMap, Masscan, Unicornscan                  |     *High*: Direct interaction with the target can trigger **IDS** (Intrusion Detection Systems) and **Firewalls**.      |
| **Vulnerability Scanning** | Probing the target for **Known Vulnerabilities**, such as *outdated software* or *misconfigurations*. |       Running **Nessus** against a *web application* to check for *SQL Injection flaws* or *Cross-Site Scripting (XSS)* vulnerabilities.        |                   Nessus, OpenVAS, Nikto                    |              *High*: Vulnerability Scanners send exploit payloads that **security solutions** can *detect*.              |
|    **Network Mapping**     | Mapping the target's *Network Topology* i.e. **Connected Devices** & **Relationships Between Them**.  |  Using **traceroute** to *determine the path, packets take to reach the target*, which may reveal *potential network hops and infrastructure*.  |                      Traceroute, NMap                       |                      *Medium To High*: Excessive or unusual network traffic can *raise suspicion*.                       |
|    **Banner Grabbing**     |        Retrieving information from *banners* displayed by **services** running on the target.         | Connecting to a **web server** on `port 80` and examining the **HTTP Banner** to identify the web server *software and version* being utilised. |                        Netcat, cURL                         |                  Low: Banner grabbing typically involves minimal interaction but *can still be logged*.                  |
|   **OS Fingerprinting**    |                       Identifying the *operating system* running on the target.                       |   Using **NMap**'s OS Detection capabilities `-O` to determine the target's chosen OS. *i.e. Windows, or Linux, or another Operating System*.   |                        NMap, Xprobe2                        |               Low: OS Fingerprinting is usually *passive* but some advanced techniques can be *detected*.                |
|  **Service Enumeration**   |               Determining the *specific versions of services* running on *open ports*.                |                 Using **NMap**'s service version detection `-sV` to determine if a **web server** is running *Apache*, *Nginx*.                 |                            NMap                             |   *Low*: Similar to banner grabbing, service enumeration *can be logged*, however is *less likely to trigger alerts*.    |
|     **Web Spidering**      |           Crawling the target website to identify *Web Pages*, *Directories*, and *Files*.            |    Running a web crawler like **Burp Suite**, or **OWASP ZAP Spider** to map out the *structure of a website to discover hidden resources*.     | Burp Suite, Spider, OWASP ZAP Spider, Scrapy (Customisable) | *Low To Medium*: *Can be detected* if the crawler's behaviour is not carefully configured to *mimic legitimate traffic*. |
## Passive Reconnaissance
**Passive Reconnaissance** involves gathering information about the target **without directly interacting** with it, which relies on analysing *publicly available* information and resources.

|         Technique         |                                                              Description                                                               |                                                                            Example                                                                            |                                 Tools                                 |                                               Risk of Detection                                                |
| :-----------------------: | :------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------: |
| **Search Engine Queries** | Utilising **Search Engines** to *uncover information* about the target. *i.e. websites*, *social media profiles*, and *news articles*. |                       Searching **Google** for "`[Target Name] employees`" to *find employee information*, or *social media profiles*.                        | Google, DuckDuckGo, Bing, and specialised search engines e.g. Shodan. |        *Very Low*: Search engine queries are normal internet activity and *unlikely to trigger alerts*.        |
|     **WHOIS Lookups**     |                                Querying **WHOIS** databases to *retrieve domain registration details*.                                 |                   Performing a **WHOIS lookup** on a target domain to *find the registrant's name, contact information, and name servers*.                    |              whois CL tool, online WHOIS lookup services              |                   *Very Low*: **WHOIS** queries are legitimate and *do not raise suspicion*.                   |
|          **DNS**          |                    Analysing **DNS Records** to *identify subdomains*, *mail servers*, and *other infrastructure*.                     |                                                     Using **Dig** to *enumerate subdomains* of a target.                                                      |            dig, nslookup, host, dnsenum, fierce, dnsrecon             | *Very Low*: **DNS Queries** are essential for internet browsing and are *not typically flagged as suspicious*. |
| **Web Archive Analysis**  |     Examining **historical snapshots** of the target's website to *identify changes*, *vulnerabilities*, or *hidden information*.      |                         Using the **Wayback Machine** to view *past versions* of a target website to see *how it changed over time*.                          |                            Wayback Machine                            |             *Very Low*: Accessing archived information versions of websites is *normal activity*.              |
| **Social Media Analysis** |                       **Gathering Information** from *social media platforms*. e.g. *LinkedIn*, *X*, *Facebook*.                       | Searching **LinkedIn** for *employees* of a target organisation to *learn about their roles*, *responsibilities*, and *potential social engineering targets*. |   LinkedIn, X (formally Twitter), Facebook, Specialised OSINT Tools   |             *Very Low*: Accessing **Public Social Media Profiles** is not *considered intrusive*.              |
|   **Code Repositories**   |           Analysing **publicly accessible code repositories**. e.g. *GitHub for exposed credentials*, or *vulnerabilities*.            |   Searching **GitHub** for *code snippets*, or *repositories* related to the target that might *contain sensitive information*, or *code vulnerabilities*.    |                            GitHub, GitLab                             |     *Very Low*: **Code Repositories** are meant for public access, and searching them is *not suspicious*.     |
## Passive VS Active Reconnaissance
**Passive Reconnaissance** is generally considered *stealthier* and *less likely to trigger alarms* than **Active Reconnaissance** which is forceful as it *directly interacts* with the target, whereas passive relies on what is already *publicly available*.

---
# **No Exercises** for this section.

[Next Section](WHOIS.md)

