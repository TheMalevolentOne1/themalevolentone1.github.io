---
tags:
  - HackTheBox
  - Login-Brute-Forcing
---
[[Login Brute-Forcing]]
[Previous Section](Basic%20HTTP%20Authentication.md)

Web applications typically use custom login forms for user authentication, while usually diverse visually often share underlying mechanisms.

---
# Understanding Login Forms
Login forms usually appear as simple boxes requesting a username and password but it begins the process of a complex client-side and server-side technologies, which at their core login cores are essentially HTML forms embedded within a webpage. Typically including input fields like `<input>` for capturing username and password, along with a `<button>` for submitting usually `type="submit"` to initiate the authentication process.
## Basic Login Form Example

```html
<form action="/login" method="post">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username"><br><br>
  <label for="password">Password:</label>
  <input type="password" id="password" name="password"><br><br>
  <input type="submit" value="Submit">
</form>
```
<sub>Most login form structures</sub>

> This form, when submitted, sends a POST request to the `/login` endpoint on the server, including the entered username and password as form data.

```http
POST /login HTTP/1.1
Host: www.example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 29

username=john&password=secret123
```
<sub>HTTP POST Request Example</sub>

The **POST** method indicates the [[HTTP Methods and Codes]] which indicates to the web server when received that data has been sent to create or update a resource on the URL endpoint `/login`. 

> The header also includes a `Content-Type` header which specifies how the data is encoded in the request body.
> The `Content-Length` header which indicates the size of the data.
> Finally, the `Request Body` which contains the username and password encoded as **key-value** pairs.

> [!quote]
> When a user interacts with a login form, their browser handles the initial processing. The browser captures the entered credentials, often employing JavaScript for client-side validation or input sanitization. Upon submission, the browser constructs an HTTP POST request. This request encapsulates the form data—including the username and password—within its body, often encoded as `application/x-www-form-urlencoded` or `multipart/form-data`

---
# http-post-form
Hydra's `http-post-form` service is specifically designed to target login forms, enabling automation of `POST` requests dynamically inserting the payloads for each username and password combination into the request body.

> Leveraging Hydra's capabilities allow attackers to efficiently test numerous credential combinations against a login form.

The general structure of a Hydra command using `http-post-form` is as follows:
```shell
TheMalevolent1@htb[/htb]$ hydra [options] target http-post-form "path:params:condition_string"
```
## Understanding the Condition String
Hydra's `http-post-form` module relies on success and failure condition strings. 

---
# Exercises
Q: After successfully brute-forcing, and then logging into the target, what is the full flag you find?
A: 

[Next Section](Medusa.md)