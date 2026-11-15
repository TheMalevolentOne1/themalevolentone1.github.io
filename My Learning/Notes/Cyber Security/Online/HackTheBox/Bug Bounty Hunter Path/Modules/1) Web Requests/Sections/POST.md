---
tags:
  - HackTheBox
  - Web-Requests
---
[[Web Requests]]
[Previous Section](GET.md)

When a web application needs to **transfer files or move the user parameters from the URL** they utilise **POST** requests, which unlike **HTTP GET** requests which place the user parameters within the URL, *HTTP POST* places the parameters within the [**HTTP Request Body**](). 

This has **three** primary benefits:
- *Lack of Logging*: as **POST Requests** may transfer large larges (e.g. File Uploads) which would not be efficient for the server to log all uploaded files as a part of the requested URL as would be the case with a file uploaded through a **[[GET]] Request**.
- *Less Encoding Requirements*: URLs are designed to be shared, which means they must conform to characters that can be **converted to letters**. The **POST Request** places data in the *Request Body*, which can accept binary data. The only characters that need to be encoded are those that are utilised for separate parameters.
- *More data can be transferred*: The maximum URL Length varies between browsers (i.e. Chrome/Firefox/IE), Web Servers (i.e. [IIS](https://learn.microsoft.com/en-us/iis/get-started/introduction-to-iis/iis-web-server-overview), [Apache](https://www.apache.org), [Nginx](https://nginx.org)), Content Delivery Networks (CDNs i.e. [Fastly](https://www.fastly.com), [CloudFront](https://aws.amazon.com/cloudfront/), [Cloudflare](https://www.cloudflare.com/en-gb/)) and even URL Shorteners (i.e. [bit.ly](https://bitly.com), amzn.to), generally a *URL's length* should be kept below **2,000 characters** and so they cannot handle large quantities of data.

---
# Exercises
> Authenticate to Practice_HTB_Target with user "admin" and password "admin"

Q: Obtain a session cookie through a valid login, and then use the cookie with cURL to search for the flag through a JSON POST request to '/search.php'
A: `HTB{p0$t_r3p34t3r}`

[Next Section](CRUD%20API.md)