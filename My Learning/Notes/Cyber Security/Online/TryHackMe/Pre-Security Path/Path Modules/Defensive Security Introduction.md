---
tags:
  - TryHackMe
  - Pre-Security-Path
---
[[Pre-Security Path]]
[[Offensive Security Introduction]]

---
# Task 1 - Think like a Defender
Defensive security involves defending and securing devices and systems. Before defending a system, it must be understood what defenders are responsible for. Defensive security focuses on detecting and investigating attacks, and responding before damage occurs.

>[!question] What is the main goal of defensive security?
> >[!success] Detect and respond to attacks

---
# Task 2 - Detect Suspicious Activity 
[SOC]() is a team of IT security professions tasked with monitoring, preventing, detecting, investigating, and responding to threats within a company's network and systems.

>[!abstract] Lab
>## You'll need to:
>1. Open the monitoring dashboard
>2. Review recent alerts
>3. Identify the suspicious source IP.
>   
> I had to click the View Site button which opened a Security Analyst Dashboard page demonstrating an attack example with clickable elements. I found the source IP address on the first page.


>[!question] What source IP address is generating the suspicious traffic?
> >[!success] 32.122.195.63

---
# Task 3 - Identify the Attack
>[!abstract] Continuing the Last Lab
>## You'll need to:
>1. Investigate the attack that has occured.
>2. View the "URL Discovery Attempts" list.
>3. Look at the latest "URL Discovery Attempts" entry to answer the question.
>
>I clicked the "Investigate" button which opened the same necessary page for identify the attacker. 

>[!question] Copy the latest URL that the attacker has tried to find and paste it below.
> >[!success] https://fakebank.com/admin

---
# Task 4 - Stop the Attack
In defensive security, the immediate priority is containment i.e. stopping the attack while it is occurring to protect the organisation.

> [!abstract] Continuing the Last Lab
> ## You'll need to:
>1. Review the security actions. Joe has done two of these for you.
>2. Block the attacker's IP address below by adding it into the "Add Firewall Rule" textbox on the practical. 
> `32.122.195.63`
>3. Make sure to select "**BLOCK**" from the dropdown and press "Apply".
>
>I clicked button to implement an anti attack.

>[!note] 
>So far extremely demonstrational lacks a lot of the theory I encountered previously.

>[!question] When the success message appears, copy the flag and paste it below.
> >[!success] THM{FAKEBANK-SECURED}

---
# Completed
![[Defensive Security Introduction Completed.png]]

---
[[Careers in Cyber]]