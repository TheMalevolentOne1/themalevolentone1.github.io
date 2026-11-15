---
tags:
  - Guides
  - Self-Made
---
This is my research for locating how Tapo handle their API and requests to be able to change my bedroom light without relying on my phone or Tapo's app.

---
# Researching Tapo Architecture
I located an article detailing [Reverse engineering TP-Link Tapo's REST API](https://dev.to/ad1s0n/reverse-engineering-tp-link-tapos-rest-api-part-1-4g6) from 9th October 2024.

![[Tapo Cloud Infrastructure.png]]
<sub>Tapi Communication HTTP</sub>

The purpose of their article was to discover how tapo communications between the app and cloud works. More specifically what endpoints are called:
- Authentication
- Decide
- Endpoints

>[!info]
>As a result of no public API documentation, and said API still not existing.

Burp Suite was utilised in the interception of web traffic.
## SSL Pinning
[SSL pinning](https://www.ssl2buy.com/wiki/ssl-pinning-its-important) is a technique which involves embedding an SSL/TLS certificate or public key directly within its code. 

>[!quote]
>The application or device will contact the server for data whenever a user requests. The app then compares the hardcoded public key with the server's certificate and if the key matches, secure connections will be made, and the users can access data.
### Types of SSL Pinning
- **Static** - Hardcoded certificate or public key into the application.
- **Dynamic** - Not hardcoded. Dynamically cached and captured from the server during first time SSL handshake.

>[!info] Key Note
>Certificate or public key must match server's to be seen as secure and authentic.

