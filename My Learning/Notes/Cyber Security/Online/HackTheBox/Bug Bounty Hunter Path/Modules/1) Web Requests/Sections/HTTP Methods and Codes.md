---
tags:
  - HackTheBox
  - Web-Requests
---
[[Web Requests]]
[Previous Section](HTTP%20Headers.md)

HTTP supports multiple methods for accessing resources. In the HTTP protocol several request methods allow the browser to send information, forms, or files to the server.

These methods are used among other things to inform the web server, how to process the request sent and how to reply.

cURL can view these protocols with the `-v` verbose flag, to view the full request. The first lines (e.g. `GET / HTTP/1.1`) show the request type, and the HTTP method in the `Method` column. 

Furthermore, the response headers also contain the HTTP response code.

---
# Request Methods
| **Method** | **Description**                                                                                                                                                                                                                                                                                                                      |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `GET`      | Requests a specific resource. Additional data can be passed to the server via query strings in the URL (e.g. `?param=value`).                                                                                                                                                                                                        |
| `POST`     | Sends data to the server. It can handle multiple types of input, such as text, PDFs, and other forms of binary data. This data is appended in the request body present after the headers. The POST method is commonly used when sending information (e.g. forms/logins) or uploading data to a website, such as images or documents. |
| `HEAD`     | Requests the headers that would be returned if a GET request was made to the server. It doesn't return the request body and is usually made to check the response length before downloading resources.                                                                                                                               |
| `PUT`      | Creates new resources on the server. Allowing this method without proper controls can lead to uploading malicious resources.                                                                                                                                                                                                         |
| `DELETE`   | Deletes an existing resource on the webserver. If not properly secured, can lead to Denial of Service (DoS) by deleting critical files on the web server.                                                                                                                                                                            |
| `OPTIONS`  | Returns information about the server, such as the methods accepted by it.                                                                                                                                                                                                                                                            |
| `PATCH`    | Applies partial modifications to the resource at the specified location.                                                                                                                                                                                                                                                             |
This is not an exhaustive list of *all* [available HTTP methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods). Availability of a particular method depends on the server as well as its application configuration.

Note: 
- Most modern web applications mainly rely on **GET** and **POST** methods. 
- Any application that utilises `Rest APIs` rely on **PUT** and **DELETE** which are used to update and delete data on the API endpoint.

---
# Response Codes
HTTP status codes are returned from a web server and inform the client of the status of its request
## Five Common Status Codes
| Type  | Description                                                                   |
| ----- | ----------------------------------------------------------------------------- |
| `1xx` | Provides **information** and does not affect the processing of the request.   |
| `2xx` | Return when a request **succeeds**.                                           |
| `3xx` | Returrned when the server **redirects** the client.                           |
| `4xx` | Improper request from the **client**. e.g. Resource Not Found or Unauthorised |
| `5xx` | Returned which indicates a problem with the **HTTP server**.                  |
## Examples of Common HTTP Method Types
| **Code**                    | **Description**                                                                                                                                           |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `200 OK`                    | Returned on a successful request, and the response body usually contains the requested resource.                                                          |
| `302 Found`                 | Redirects the client to another URL. For example, redirecting the user to their dashboard after a successful login.                                       |
| `400 Bad Request`           | Returned on encountering malformed requests such as requests with missing line terminators.                                                               |
| `403 Forbidden`             | Signifies that the client doesn't have appropriate access to the resource. It can also be returned when the server detects malicious input from the user. |
| `404 Not Found`             | Returned when the client requests a resource that doesn't exist on the server.                                                                            |
| `500 Internal Server Error` | Returned when the server cannot process the request.                                                                                                      |
[Full list of standard HTTP Response Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
Note:
- Servers and Providers such as [Cloudflare](https://developers.cloudflare.com/support/troubleshooting/http-status-codes/) and [AWS](https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/APIError.html) implement their own response codes.

---
# **No Exercises** for this section.

[Next Section](GET.md)