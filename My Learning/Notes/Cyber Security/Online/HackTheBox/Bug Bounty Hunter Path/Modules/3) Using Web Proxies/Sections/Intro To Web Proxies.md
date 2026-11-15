---
tags:
  - HackTheBox
  - Using-Web-Proxies
---
[[Using Web Proxies]]
# What are Web Proxies
Web proxies act as **MiTM (Man-In-The-Middle)** tools which capture the network traffic through but not limited to ports **HTTP/80** and **HTTPS/443**. 

Other *Network Sniffing* applications like Wireshark operate by analysing all local traffic.

Web proxies simplify the process of capturing and replaying web requests. Specific requests can be captured by the **back-end server** which can be modified and sent back to the server to view how the web-server handles them.
## Uses of Web Proxies
A list of tasks web proxies may be utilised for:
- Capture & Replay HTTP requests (Primary Usage)
- Web Application Vulnerability Scanning
- Web Fuzzing
- Web Crawling
- Web Application Mapping
- Web Request Analysis
- Web Configuration Testing
- Code Reviews
### Commonly Utilised Web Proxies
- [**Burp Suite**](https://portswigger.net/burp/communitydownload)
- [**OWASP ZAP**](https://www.zaproxy.org)

---
# Burp Suite
[Burp Suite](https://portswigger.net/burp) is the most common web proxy used for **web penetration testing**, it provides a built-in Chromium browser which intercepts web requests.
## Only Burp Pro/Enterprise Features
- Active Web App Scanner
- Fast Burp Intruder
- The ability To Load Certain Burp Extensions

> **Tip:** If the user has an educational or business email address, then they can apply for a free trial of Burp Pro at this [link](https://portswigger.net/burp/pro/trial) to be able to follow along with some of the Burp Pro only features showcased later in this module.

