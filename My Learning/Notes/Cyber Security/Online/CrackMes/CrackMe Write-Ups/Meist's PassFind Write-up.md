---
tags:
  - CrackMes
---
[[CrackMes One]]
[Download Meist's PassFind](https://crackmes.one/static/crackme/68be3593224c0ec5dcedbe2d.zip)

---
# Brief
![[Meist's PassFind Brief.png]]
<sub>Meist's PassFind Brief</sub>

---
# Extracting the Files
![[crackme1_file_encrypted.png]]
The zip file appears to have a password.

> The [FAQ](https://crackmes.one/faq#:~:text=The-,password,-for%20the%20files) mentions the password for the files should either be `crackmes.one` or `crackmes.de` if it was import.

---
# Folder Contents
![[crackme1_file_contents#.png]]

---
# Running the crackme1.exe
When run through the command prompt, the following pops up in the terminal.
![[Crackme1 terminal output.png]]
## Testing Password
I attempted the password `helloworld` to see what a rejected response would look like.
![[Password Attempt CrackM1.png]]

---
# Cracking the Code
To begun understanding the internals of the crackme1.exe I have downloaded x64dbg.