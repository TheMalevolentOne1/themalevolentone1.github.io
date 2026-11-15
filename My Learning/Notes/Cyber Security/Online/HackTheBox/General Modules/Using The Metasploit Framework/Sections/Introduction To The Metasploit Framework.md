---
tags:
  - HackTheBox
  - Using-The-Metasploit-Framework
---
[[Using The Metasploit Framework Contents]]
[Previous Section](Preface%20To%20Using%20The%20Metasploit%20Framework.md)

# [The Metasploit Framework](https://www.metasploit.com)
**Metasploit-Project** is a *Ruby-based* modular penetration testing platform. Enabling the tester to write, test and execute exploit code, which can be custom-made or taken from a *database* containing the latest discovered and modularised exploits.
## Benefits of Metasploit Framework
The framework includes many tools which can test the following:
- Security Vulnerabilities
- Enumerate Networks
- Execute Attacks
- Evade Detection

At it's core the **Metasploit Framework** is a collection of commonly used tools, which provide an environment readily available and accessible for *penetration testing* and *exploit development*.

![[Metasploit-Framework-Network.png]]
<sub>Explanation Diagram of the Metasploit Project</sub>

The **modules** mentioned continuing forward, are actual *exploit proof-of-concepts* which have already been developed and tested in the wild, and integrated into the framework's database to provide other pen testers with *ease of access*.

**Metasploit Framework** is a *Swiss army knife* and is not a jack of all trades, it provides enough tools to get through common *unpatched vulnerabilities* and *different attack vectors* however, it should serve as a tool, and not limit the pen testers ability to think proactively outside of the limitations of the framework. 

The Framework provides a plethora of available targets and versions, these combined with an *exploit tailor-made* to those vulnerable versions with a payload that is sent after the exploit, and will provide access to the system, providing an easy automated way to *switch between target connections*.

---
# Metasploit Pro
**Metasploit Project** is split into **Metasploit Framework** which is open-source and **Metasploit Pro** difference is the *pro* version has some additional features:
- Task Chains
- Social Engineering
- Vulnerability Validations
- GUI
- Quick Start Wizards
- Nexpose Integration

The **Pro** version also has its own console which provides extra features, much like the `msfconsole`.
## Metasploit Pro's Features

| **Infiltrate**           | **Collect Data**         | **Remediate**             |
| ------------------------ | ------------------------ | ------------------------- |
| Manual Exploitation      | Import and Scan Data     | Bruteforce                |
| Anti-virus Evasion       | Discovery Scans          | Task Chains               |
| IPS/IDS Evasion          | Meta-Modules             | Exploitation Workflow     |
| Proxy Pivot              | Nexpose Scan Integration | Session Rerun             |
| Post-Exploitation        |                          | Task Replay               |
| Session Clean-up         |                          | Project Sonar Integration |
| Credentials Reuse        |                          | Session Management        |
| Social Engineering       |                          | Credential Management     |
| Payload Generator        |                          | Team Collaboration        |
| Quick Pen-testing        |                          | Web Interface             |
| VPN Pivoting             |                          | Backup and Restore        |
| Vulnerability Validation |                          | Data Export               |
| Phishing Wizard          |                          | Evidence Collection       |
| Web App Testing          |                          | Reporting                 |
| Persistent Sessions      |                          | Tagging Data              |

---
# Metasploit Framework Console
The `msfconsole` is the *most popular interface* to the **Metasploit Framework (MSF)**, providing an *"all-in-one"* centralised console, allowing the pen tester to efficiently access nearly all options available.
## Metasploit MSFConsole Features
- It is the **only supported** way to access most of the features within **Metasploit**.
- Provides a *console-based* interface to the **Framework**.
- Contains the *most features* and is the most stable **MSF console**.
- Full *readline support*, *tabbing*, and *command completion*.
- Execution of *external commands* in **MSF console**.

**Both** have **extensive databases** of [*available modules*](https://www.rapid7.com/db/modules/), which when combined with external commands i.e.:
- Scanners
- Social Engineering Toolkits
 - Payload Generators
Which allow for **seamless** control and manipulate *different vulnerabilities* in the wild with the use of *sessions* and *jobs* in the same way, tabs in the browser would be seen.

The key piece of information to conclude from this, is that usability is the benefit of having an easy to use *user experience*.
## Understanding The Architecture
<p><span style="color: red; font-weight: bold; text-decoration:underline;">Important Warning:</span></p> 
>It is <strong>essential</strong> not to have any [wildcards](https://www.cobaltstrike.com/blog/cobalt-strike-rce-active-exploitation-reported) that might leave you or your *client exposed to data breaches*.

By **default** all base files related to the **Metasploit Framework**:
### Linux
- Parrot OS and Kali Linux: `/usr/share/metasploit-framework`
- Manual Installations (e.g., via [Installation Instructions](https://docs.metasploit.com/docs/using-metasploit/getting-started/nightly-installers.html) & GitHub): `/opt/metasploit-framework`
- User-Specific Custom Modules: `~/.msf4/modules`
### Windows
- Default Installation ([Installer](https://docs.metasploit.com/docs/using-metasploit/getting-started/nightly-installers.html): `C:\metasploit-framework`
- User-Specific Custom Modules: `%USERPROFILE%\.msf4\modules`
### MacOS
- Manual Installations (e.g., via [Installation Instructions](https://docs.metasploit.com/docs/using-metasploit/getting-started/nightly-installers.html), GitHub or Homebrew): `/opt/metasploit-framework`
- User-Specific Custom Modules: `~/.msf4/modules`
## Data, Documentation & Lib
By **default**, the base files for the **Metasploit Framework** are located as follows across different operating systems, with key directories including:
### Auxiliary Files
**Data Folder**: Contains **auxiliary files**, which are *supportive resources* used by **Metasploit modules** to perform tasks. These include:
- **Wordlists**: Text files with lists of common passwords, usernames, or other data for brute-force attacks or testing (e.g., `rockyou.txt` for password cracking).
- **Templates**: Predefined files for generating payloads or exploits, like shellcode templates.
- **Meterpreter Scripts**: Scripts to enhance Meterpreter (a Metasploit payload for remote control), such as scripts to escalate privileges or dump system data.
### Core of Metasploit
These files are not the core exploits or payloads but help modules function effectively.
- **Lib Folder**: Contains the *core Ruby libraries* that power the **Metasploit Framework**, including its *modular architecture* and *protocol implementations*.
- **Documentation Folder**: Contains all *technical details* about the **project**, including *READMEs*, *developer guides*, and *module documentation*.
## [Modules](Modules%20-%20Using%20The%20Metasploit-Framework.md)
  
```shell
TheMalevolent1@htb[/htb]$ ls /usr/share/metasploit-framework/modules

auxiliary  encoders  evasion  exploits  nops  payloads  post
```
<sub>Metasploit Module Files</sub>

## Plugins
Plugins offer more flexibility when using the `msfconsole` since it can easily be **manually**, or **automatically** loaded as needed to provide *extra functionality* and *automation* during an assessment.

```shell
TheMalevolent1@htb[/htb]$ ls /usr/share/metasploit-framework/plugins/

aggregator.rb      ips_filter.rb  openvas.rb           sounds.rb
alias.rb           komand.rb      pcap_log.rb          sqlmap.rb
auto_add_route.rb  lab.rb         request.rb           thread.rb
beholder.rb        libnotify.rb   rssfeed.rb           token_adduser.rb
db_credcollect.rb  msfd.rb        sample.rb            token_hunter.rb
db_tracker.rb      msgrpc.rb      session_notifier.rb  wiki.rb
event_tester.rb    nessus.rb      session_tagger.rb    wmap.rb
ffautoregen.rb     nexpose.rb     socket_logger.rb
```
<sub>Metasploit Plugin Files</sub>

## Scripts
**Meterpreter** functionality (*Metasploit Payload, which allows for remote control*) and **other useful scripts**.

```shell
TheMalevolent1@htb[/htb]$ ls /usr/share/metasploit-framework/scripts/

meterpreter  ps  resource  shell
```
<sub>Metasploit Meterpreter Scripts</sub>

## Tools
*Command-Line* utilities that can be called directly from the `msfconsole` menu.

```shell
TheMalevolent1@htb[/htb]$ ls /usr/share/metasploit-framework/tools/

context  docs     hardware  modules   payloads
dev      exploit  memdump   password  recon
```

---
# Exercises
Q: Which version of Metasploit comes equipped with a GUI interface?
A: `Metasploit Pro`

Q: What command do you use to interact with the free version of Metasploit?
A: `msfconsole`

[Next Section](Introduction%20To%20MSFconsole.md)
