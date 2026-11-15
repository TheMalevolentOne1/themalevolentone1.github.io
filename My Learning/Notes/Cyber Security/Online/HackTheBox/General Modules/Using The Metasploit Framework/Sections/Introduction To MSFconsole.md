---
tags:
  - HackTheBox
  - Using-The-Metasploit-Framework
  - Correct-Mermaid-Diagram
---
[[Using The Metasploit Framework Contents]]
[Previous Section](Introduction%20To%20The%20Metasploit%20Framework.md)

Terminal Command: `msfconsole`.
**Parrot**, & **Kali** Linux come preinstalled with the **Metasploit Framework**.

---
# Preparation
## Launching MSFConsole
### With Banner

```shell
$ msfconsole
```

![[Metasploit-Console-Banner.png]]
### Without Banner

```shell
TheMalevolent1@htb[/htb]$ msfconsole -q
```


![[Run Msfconsole.png]]
## Installing MSF

```Shell
$ sudo apt update && sudo apt install metasploit-framework
```

![[Updating Linux.png]]
<sub>Updating and Upgrading packages for Kali Linux</sub>

```shell
$ sudo apt install metasploit-framework
```

![[Installing-Metasploit-Framework.png]]
<sub>Installing Metasploit on Linux</sub>

---
# Five Categories of Metasploit Framework

```mermaid
graph TD
A[(Metasploit Framework)]:::main 
B1(Enumeration):::enum
B2(Preparation):::prep
B3(Exploitation):::exploit
B4(Privilege Escalation):::priv
B5(Post Exploitation):::post

A --> B1
A --> B2
A --> B3
A --> B4
A --> B5

classDef main fill:#172a45,stroke:#f0f0f0,stroke-width:2,color:#fff;
classDef enum fill:#14532d,stroke:#2dd4bf,stroke-width:2,color:#fff;
classDef prep fill:#1e3a8a,stroke:#60a5fa,stroke-width:2,color:#fff;
classDef exploit fill:#7f1d1d,stroke:#f87171,stroke-width:2,color:#fff;
classDef priv fill:#78350f,stroke:#facc15,stroke-width:2,color:#fff;
classDef post fill:#4c1d95,stroke:#a78bfa,stroke-width:2,color:#fff;
```
<sub>The five categories of Metasploit Framework Exploitation</sub>

![[S04_SS03.png]]
<sub>The five categories pinned to specific elements of the pen testing process using the Metasploit Framework.</sub>

---
# **No Exercises** for this section.

[Next Section](Modules%20-%20Using%20The%20Metasploit-Framework.md)