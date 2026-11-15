---
tags:
  - TryHackMe
  - Pre-Security-Path
---
[[Pre-Security Path]]

---
# What is Offensive Security
> [!quote]
> To outsmart a hacker, you need to think like one.

Offensive Security is the process of breaking into computer systems, exploiting bugs, and finding loopholes in applications to gain unauthorised access. 

Offensive Security is the process of breaking into computer systems, exploiting bugs, and finding loopholes in applications to gain unauthorised access.
## Questions
Q: Which of the following options better represents the process where you simulate a hacker's actions to find vulnerabilities in a system?
A: `Offensive Security`

---
# Hacking Your First Machine
## Starting Machine
![[screenshot of bank tryhackme.png]]
<sub>TryHackMe Machine Started</sub>
## First Hack
![[open terminal tryhackme.png]]

> [!quote]
> We will use a command-line application called "GoBusterforce FakeBank's website to find hidden directories and pages. Gobuster will take a list of potential page or directory names and try accessing a website with each of them; if the page exists, it tells you.

> [Gobuster](https://github.com/OJ/gobuster)

To begin the first hack the tutorial prompts the user into using the command. 

```shell
gobuster -u http://fakebank.thm -w wordlist.txt dir
```

To attempt to find relevant website pages through brute force.

![[gobuster_fakebank_tryhackme.png]]
<sub>GoBuster Command Output</sub>
### **No Questions** for this section
![[gobuster_fakebank_tryhackme.png]]
<sub>GoBuster Command Output</sub>
## Hack The Bank
![[tryhackme_admin_panel.png]]
![[bank done tryhackme.png]]
## Questions
Q: Above your account balance, you should now see a message indicating the answer to this question. Can you find the answer you need?
A: `BANK-HACKED`

---
# Cyber Security Careers
A short description of a few offensive security roles:
- **Penetration Tester** - Responsible for testing technology products for finding exploitable security vulnerabilities.
- **Red Teamer** - Plays the role of an adversary attacking an organisation and providing feedback from an enemy's perspective.
- **Security Engineer** - Design, monitor and maintain security controls, network systems to help prevent cyberattacks.
## **No Questions** for this section

---
# Completed
![[Offensive Security Introduction Completed.png]]

---
[[Defensive Security Introduction]]
