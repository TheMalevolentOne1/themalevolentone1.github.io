---
tags:
  - HackTheBox
  - Web-Requests
---
[[Bug Bounty Hunting Path]]
[Previous Section](HTTP%20Methods%20and%20Codes.md)

When a website is visited using a *URL* the browser default will perform a **GET** request to obtain from the web server the remote resources being hosted at the URL.

Once the browser receives the HTML for the page it is requesting in terms of a web page, it renders in the client.

It may send additional requests using various HTTP methods which can be observed in the **Network** tab as seen in the Browser DevTools from a [previous section](HTTP%20Headers.md#%20Browser%20DevTools).
## Mini Exercise
Pick any website of your choosing, and monitor the Network tab in the `browser devtools` as you visit it to understand what the page is performing. This technique can be used to thoroughly understand how a web application interacts with its backend, which can be an essential exercise for any web application assessment or bug bounty exercise.

![[Network Mini Exercise Web Requests.png]]

---
# HTTP Basic Auth
The exercise at the [end of the section](GET.md#%20Exercises) the website prompts the user to enter a username and password. Unlike typical login forms, which utilise **HTTP parameters** to validate the user credentials (e.g. POST request, this type of auth uses a **Basic HTTP Authentication** which is handled directly by the web server to protect the page/directory *without directly interacting* with the web application.

To access the page for the Exercise, the default credentials are **admin:admin**. Which once entered allows access to the page.
![[http_auth_index.jpg]]
To access the page with cURL the `-i` flag can be utilised to view the response header.

```shell
TheMalevolent1@htb[/htb]$ curl -i http://<SERVER_IP>:<PORT>/
HTTP/1.1 401 Authorization Required
Date: Mon, 21 Feb 2022 13:11:46 GMT
Server: Apache/2.4.41 (Ubuntu)
Cache-Control: no-cache, must-revalidate, max-age=0
WWW-Authenticate: Basic realm="Access denied"
Content-Length: 13
Content-Type: text/html; charset=UTF-8

Access denied
```
## Observations from Response
- **Response Body** Access was denied.
-  **Basic realm="Access denied"** in the **WWW-Authenticate** header which confirms that the site uses *basic HTTP Authentication*

To provide the credentials through **cURL** the `-u` flag can be utilised.

```shell-session
TheMalevolent1@htb[/htb]$ curl -u admin:admin http://<SERVER_IP>:<PORT>/

<!DOCTYPE html>
<html lang="en">

<head>
...SNIP...
```

This time the page is returned in the **response body**.  

Another way to utilise **Basic HTTP Auth** credentials is to use them directly in the *URL* using either cURL or a browser.

```shell
TheMalevolent1@htb[/htb]$ curl http://admin:admin@<SERVER_IP>:<PORT>/

<!DOCTYPE html>
<html lang="en">

<head>
...SNIP...
```
As shown in the example the URL method uses [**username:password@URL**](HyperText%20Transfer%20Protocol%20(HTTP).md#%20Uniform%20Resource%20Locator%20(URL)).
## Mini Exercise
Try to view the response headers by adding `-i` to the above request, and see how an authenticated response differs from an unauthenticated one.
### Unauthenticated
```shell
┌─[eu-academy-3]─[10.10.14.164]─[htb-ac-1579985@htb-ue0ylrk2gc]─[~]
└──╼ [★]$ curl -i 94.237.58.82:43664
HTTP/1.1 401 Authorization Required
Date: Sat, 24 May 2025 10:28:33 GMT
Server: Apache/2.4.41 (Ubuntu)
Cache-Control: no-cache, must-revalidate, max-age=0
WWW-Authenticate: Basic realm="Access denied"
Content-Length: 13
Content-Type: text/html; charset=UTF-8
```
### Authenticated
```shell
Access denied┌─[eu-academy-3]─[10.10.14.164]─[htb-ac-1579985@htb-ue0ylrk2gc]─[~]
└──╼ [★]$ curl -i -u admin:admin 94.237.58.82:43664
HTTP/1.1 200 OK
Date: Sat, 24 May 2025 10:28:42 GMT
Server: Apache/2.4.41 (Ubuntu)
Cache-Control: no-cache, must-revalidate, max-age=0
Vary: Accept-Encoding
Content-Length: 1156
Content-Type: text/html; charset=UTF-8


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>City Search</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:400,500,700'>
    <link rel="stylesheet" href="./style.css">

</head>

<body>
    <!-- partial:index.partial.html -->
    <div>
        <div class="search">
            <div class="bar">
                <div class="icon">
                    <i></i>
                </div>
            </div>
            <form>
                <input type="text">
            </form>
            <div class="close"></div>
            <ul>
                <li>
                    <p>Leeds (UK)</p>
                </li>
                <li>
                    <p>Leicester (UK)</p>
                </li>
            </ul>
        </div>

        <em>Type a city name and hit <strong>Enter</strong></em>

    </div>

    <!-- partial -->
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
    <script src="./script.js"></script>

</body>

</html>
```

---
# HTTP Authorisation Header
If the `-v` flag is added to the previous cURL command.

```shell
TheMalevolent1@htb[/htb]$ curl -v http://admin:admin@<SERVER_IP>:<PORT>/

*   Trying <SERVER_IP>:<PORT>...
* Connected to <SERVER_IP> (<SERVER_IP>) port PORT (#0)
* Server auth using Basic with user 'admin'
> GET / HTTP/1.1
> Host: <SERVER_IP>
> Authorization: Basic YWRtaW46YWRtaW4=
> User-Agent: curl/7.77.0
> Accept: */*
> 
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< Date: Mon, 21 Feb 2022 13:19:57 GMT
< Server: Apache/2.4.41 (Ubuntu)
< Cache-Control: no-store, no-cache, must-revalidate
< Expires: Thu, 19 Nov 1981 08:52:00 GMT
< Pragma: no-cache
< Vary: Accept-Encoding
< Content-Length: 1453
< Content-Type: text/html; charset=UTF-8
< 

<!DOCTYPE html>
<html lang="en">

<head>
...SNIP...
```

As shown in the example above utilising **basic HTTP auth** it can be shown that the HTTP request sets the *Authorisation Header* to `Basic YWRtaW46YWRtaW4=` which is the **Base64** encoded value of the user credentials `admin:admin`.

When utilising a modern methods of authentication (e.g. **JWT**) the *Authorisation* would be the type of **Bearer** and would contain a longer *encryption token*.

The **Authentication** header can be supplied without supplying the credentials as an example that the page can still be accessed, this can be done by utilising the `-H` flag which can be added multiple times to specify [*different headers*](HTTP%20Headers.md).

```shell
TheMalevolent1@htb[/htb]$ curl -H 'Authorization: Basic YWRtaW46YWRtaW4=' http://<SERVER_IP>:<PORT>/

<!DOCTYPE html
<html lang="en">

<head>
...SNIP...
```

Most modern web applications use login forms built with backend scripting languages like **PHP** which utilise **HTTP POST requests** to authenticate the user and return a *cookie* to maintain authentication.

---
# GET Parameters
Once authenticated the **City Search** function is visibe. When a value is entered into the search field a list of matching cities are returned.

As the page returns the result it may contact a remote source to obtain information, and then display the items. 

To verify whether this is the case the **Network Tab** in DevTools (*Control+Shift+E*) before being able to view the requests, the *trash icon* to clear previous requests may need to be clicked, effectively allowing new requests to be seen.

![[network_clear_requests.jpg]]
<sub>Network Tab Trash Icon</sub>

After that any requests made, such as entering a city into the search field and sending it, a new request will be visible in the network tab showing the request made.

![[web_requests_get_search.jpg]]
<sub>Network Tab New GET Request</sub>

The request can be clicked on which reveals what is sent to `search.php` with the *GET Parameter* being `search=le` used in the URL. Which helps to understand the search function requests another page for results.

Utilising this knowledge, another request can be made to the same `search.php` to get the full search results, though it will probably return them within a specific format e.g. JSON or XML without having the HTML layout typically encountered when obtaining a page.

To send a **GET Request** with *cURL*, the exact same URL, can be used as shown in the examples above, since the GET requests place their *parameters* in the URL.

Obtaining the cURL command can more effectively be done in the browser devtools which have an option when right-clicking a request to `Copy -> Copy as cURL` which can be utilised in the terminal as normal.

```shell
TheMalevolent1@htb[/htb]$ curl 'http://<SERVER_IP>:<PORT>/search.php?search=le' -H 'Authorization: Basic YWRtaW46YWRtaW4='

Leeds (UK)
Leicester (UK)
```

Note: The copied command will contain **all headers** used in the **HTTP Request**. However, most can be removed, only keeping the necessary *authentication headers* like the **Authorisation Header**.

The exact same HTTP request can be sent from within the browser devtools itself. By selecting `Copy -> Copy as Fetch` will copy the exact **HTTP Request** using the JavaScript *Fetch* library, which in the console (accessible through `Control+Shift+K`) can be pasted and the button enter clicked as to trigger the request.

![[web_requests_fetch_search.jpg]]

---
# Exercises
Q: The exercise above seems to be broken, as it returns incorrect results. Use the browser devtools to see what is the request it is sending when we search, and use cURL to search for 'flag' and obtain the flag.
A: `HTB{curl_g3773r}`

[Next Section](POST.md)