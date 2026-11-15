---
tags:
  - HackTheBox
  - Information-Gathering-Web-Edition
---
[[Information Gathering - Web Edition]]
[Previous Section](DNS%20Zone%20Transfers.md)

Once DNS has directed traffic to the correct server, the configuration of the web server becomes imperative in determining how the incoming requests should be handled. Typical Web Servers (e.g. Apache, Nginx, or IIS) are designed to host multiple websites or applications on a single server. This is performed through *virtual hosting* which allows for differentiation between domains, subdomains or separate websites with distinct content from each other.

---
# Virtual Hosting Theory - VHosts & Subdomains
VHosting or Virtual Hosting is the ability for a web server to distinguish websites or applications which are utilising the same IP Address. Each of these are differentiated by the [HTTP Host](HTTP%20Headers.md) request header, a key piece of information which is included in *every HTTP/HTTPS* request.
## Difference between VHosts & Subdomains in DNS
- **Subdomains** (i.e. extensions of the main domain (e.g. example.com & blog.example.com) they typically include their own DNS records, which direct either back to the same IP address as the main domain or a different one. (Usually utilised to organise different sections or services of a website))
- **Virtual Hosts (VHosts)** (Virtual Hosts i.e. configurations made within a web server to allow multiple websites or applications to be hosted through a single server). Each VHost can have its own configuration, enabling precise control over request handling.

> Virtual hosts can exist **even without DNS entries**—as long as the client knows to set the `Host` header (e.g., via `/etc/hosts`). This is why VHost enumeration tools like `ffuf`, `gobuster vhost`, or `wfuzz` are useful even when DNS doesn't reveal subdomains.