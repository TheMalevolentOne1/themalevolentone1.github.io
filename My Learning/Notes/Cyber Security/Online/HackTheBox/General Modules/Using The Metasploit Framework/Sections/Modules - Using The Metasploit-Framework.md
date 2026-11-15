---
tags:
  - HackTheBox
  - Using-The-Metasploit-Framework
---
[[Using The Metasploit Framework Contents]]
[Previous Section](Introduction%20To%20MSFconsole.md)
# What is a Metasploit Module
A Metasploit module is a prepared script to meet a specific purpose (i.e. targeting a certain vulnerability) that have been developed and tested in the *wild*. 
## The Exploit Category
The exploit category of the modules consists of *proof-of-concept* (POCs) which can be utilised to exploit existing vulnerabilities in an automated manner. 

> It is important to acknowledge that failure of an exploit does not *disprove the existence of the suspected vulnerability* however it is only proof that the Metasploit Exploit does not work, not that the vulnerability does not exist.

The problem with false failures of exploit modules *can* be due to many exploits requiring **customisation** according to the target hosts to make the exploit work effectively. Therefore automation through the **Metasploit Framework** should only be considered a *support tool* and not a **substitute for manual skills**.
### MSFConsole Syntax
#### Example

```shell
794 exploit/windows/ftp/scriptftp_list
```

#### Syntax Explanation

```shell
<No.> <type>/<os>/<service>/<name>
```
<sub>Syntax of the MSFConsole commands</sub>

##### Index No.
The `No.` tag will be displayed to select the exploit wanted after searches.
##### Type
In Metasploit, the `Type` tag specifies the *purpose of a module's code*. Unlike exploit modules, which are directly executable, types are designed to define the structure and behaviour of modules, enhancing modularity and organization. They work alongside interactive modules to create a cohesive framework.

|     Type      |                                             Description                                             |
| :-----------: | :-------------------------------------------------------------------------------------------------: |
| **Auxiliary** |      Scanning, Fuzzing, Sniffing, Admin Capabilities. Offer extra assistance & functionality.       |
| **Encoders**  |                       Ensure that payloads are intact to their *destination*.                       |
| **Exploits**  |     Defined as modules that exploit a vulnerability that will allow for the *payload delivery*.     |
|   **NOPs**    |          (*No Operation Code*) Keep the payload sizes consistent across exploit attempts.           |
| **Payloads**  | Code runs *remotely* and calls back to the attacker machine to establish a connection (*or shell*). |
|  **Plugins**  |    Additional scripts can be integrated within an assessment with the `msfconsole` and coexist.     |
|   **Post**    |                   Wide array of modules to gather information, pivot deeper, etc.                   |

> When selecting a module to use for *payload delivery* the use of `use <no.>` command can **only** be used with modules that can be used as **initiators** (i.e. *Auxiliary*, *Exploits*, and *Post*).

##### OS
The `OS` tag specifies the *operating system* and *architecture* the module was created for as different operating systems require different codebases to interact and deliver the **desired results**.
##### Service
The `Service` tag in Metasploit identifies the *vulnerable service* (e.g., *FTP, SMB, HTTP*) running on a target machine that a module targets, or, in the case of auxiliary or post-exploitation modules, it may describe a broader activity like `gather` for collecting credentials or other data, enabling users to select the appropriate module for precise and efficient operations across various exploit scenarios.
##### Name
The `Name` tag explains the *actual action* that can be performed using the module.

---
# Searching For Modules
Metasploit also offers a *search function* for existing modules with the help of this function, modules can be very quickly be searched through using specific `tags` to find a suitable one for the target.

## MSFConsole Search Function

![[Search-Metasploit-Help.png]]

### MSF - Searching for [EternalRomance](https://threats.kaspersky.com/en/threat/Intrusion.Win.EternalRomance/) Exploit
`EternalRomance` is an old windows exploit which targets **SMBv1** server in Windows, and allows the intruder to execute arbitrary code remotely. This vulnerability is known as **RCE** (*Remote Code Execution*).

```shell
msf6 > search eternalromance
```

![[EternalRomance-Search-Metasploit.png]]

### MSF - Specific Search

```shell
msf6 > search type:exploit platform:windows cve:2021 rank:excellent microsoft
```

![[MSF-Specific-Search-CVE2021-Microsoft.png]]

|    Search Parameter     | Description                                                                                                                                                                                                                                                                                        |
| :---------------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|      `cve:<year>`       | Searches for modules associated with a specific CVE (Common Vulnerabilities and Exposures) identifier, filtered by the year the vulnerability was disclosed. For example, search cve:2023 will return modules linked to CVEs from 2023.                                                            |
|     `platform:<os>`     | Filters modules based on the target operating system or platform they affect, such as `windows`, `linux`, `osx`, `android`, or `multi`. For example, search `platform:windows `returns modules targeting Windows systems.                                                                          |
|      `rank:<rank>`      | Filters modules by their reliability or success rate, as defined by Metasploit's ranking system. Ranks include low, normal, good, great, excellent, or numeric values (e.g., gte400 for ranks greater than or equal to 400). For example, search rank:excellent returns high-reliability exploits. |
| `Search Name <pattern>` | Searches for modules whose descriptive name or path matches the specified pattern. For example, search name:smb finds modules related to SMB (Server Message Block) protocols. Patterns can be partial matches or keywords.                                                                        |

---
# Hypothetical Target Running SMB
## Module Selection
To begin assume a target exists running a version of `SMB` vulnerability to EternalRomance (*MS17_010*) exploits.
### Step 1) Scan for Services
```shell
TheMalevolent1@htb[/htb]$ nmap -sV 10.10.10.40

Starting Nmap 7.80 ( https://nmap.org ) at 2020-08-13 21:38 UTC
Stats: 0:00:50 elapsed; 0 hosts completed (1 up), 1 undergoing Service Scan
Nmap scan report for 10.10.10.40
Host is up (0.051s latency).
Not shown: 991 closed ports
PORT      STATE SERVICE      VERSION
135/tcp   open  msrpc        Microsoft Windows RPC
139/tcp   open  netbios-ssn  Microsoft Windows netbios-ssn
445/tcp   open  microsoft-ds Microsoft Windows 7 - 10 microsoft-ds (workgroup: WORKGROUP)
49152/tcp open  msrpc        Microsoft Windows RPC
49153/tcp open  msrpc        Microsoft Windows RPC
49154/tcp open  msrpc        Microsoft Windows RPC
49155/tcp open  msrpc        Microsoft Windows RPC
49156/tcp open  msrpc        Microsoft Windows RPC
49157/tcp open  msrpc        Microsoft Windows RPC
Service Info: Host: HARIS-PC; OS: Windows; CPE: cpe:/o:microsoft:windows

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 60.87 seconds
```
<sub>NMap of hypothetical target</sub>

> Vulnerability for `M17_010` --> 445/tcp open microsoft-ds Microsoft Windows 7 - 10 microsoft-ds (workgroup: WORKGROUP)
### Step 2) MSF - Search for MS17_010

![[Metaspolit-EternalRomance-MS17_010-Search.png]]

The **NMap** scan shows that the port `445/TCP` is open which is the SMB ([Server Message Block](https://en.m.wikipedia.org/wiki/Server_Message_Block)) protocol, this version `Microsft Windows 7 - 10` is *vulnerable* to **EternalRomance**. Next is selecting the appropriate module `index no. 16` to test if the target is vulnerable. `use` and index number allows module selection.

### Step 3) Using Modules
In most cases multiple IP addresses need to be scanned or attacked, therefore it is required that this functionality allows us in Metasploit to adapt the tool to the situation effectively, setting targets and fine-tuning them. To view which options are needed to be set before the exploit can be utilised, the `show options` command; which includes **everything required** to set before the exploitation occur, which should have a *Yes* under its *Required* column.

`use 19` from the search image.
![[Metasploit Show Options.png]]

Using the `info` command displays the module's information.
![[Metasploit Exploit Info.png]]

### Step 4) MSF - Target Specification
set `RHOSTS` or `RHOST` (*Remote Hosts*) to the target's IP address `set RHOSTS 10.10.10.40`
use the `setg` command to change (*global variables*) for *Permanent Target Specification* `setg RHOSTS 10.10.10.40`
### Step 4.5) MSF - Permanent Target Specification
