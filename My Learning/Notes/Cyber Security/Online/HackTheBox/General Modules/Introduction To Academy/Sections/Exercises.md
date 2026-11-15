---
tags: 
  - HackTheBox 
  - Introduction-To-Academy
  - Make-Pretty
---
[[Introduction to Academy Contents]]
[Previous Section](Sections.md)

---
# What is an Exercise?
In addition to the examples and demos demonstrated within interactive sections, most also end with exercises to test that knowledge.

An exercise will usually have an accompanying **Docker Target** or **VM Target(s)**. A target can be started by clicking on **Click here to spawn the target machine!** which will be populated with its access details in the format **http://<ip\>:<port\>**.

It may also provide authentication details in the form of a **username** and password.

Note: Only a single target per user can be active at any one time. Each target has a timer that shows how much time is left before it is terminated it can manually be extended or re-spawned by clicking on the appropriate buttons.

 ---
# Docker Targets
Most exercises, especially in web modules, utilise Docker targets, which are faster to spawn and can be accessed without any additional setup.

Once a docker target is active, the IP/PORT can be clicked on to be copied, and then access the target e.g. web browser (for web modules), although some may take up a minute to load after the IP and PORT are shown.

`Image of an HTB exercise question`
`Image of website in parrot OS webbox`

---
# VM Targets
Certain modules have advanced requirements for their requirements like a Windows Target, an Active Directory (AD) target, or a network environment target. Such modules utilise a Virtual Machine (VM) as their target, which can be spawned like docker targets, but may take a little longer to start.

If a workstation is used then accessing the VM once its IP address is shown. Otherwise, if preferred the user's own machine can be used by connecting using the provided VPN key which can be downloaded by the **Download VPN Connection File** button.

`Image of exercise target information and Download VPN conenection file button.`

Note: To find out more about connecting to the HTB Academy VPN, check out [this article](https://help.hackthebox.com/en/articles/9297532-connecting-to-academy-vpn).

---
# Completing an Exercise
Some questions have a **Hint** button, which may point you in the right direction if you are struggling with them. Once the answer or flag is obtained you can type it in the field and hit **Submit** to complete the exercise/question.

Solving a question correction rewards in a certain amount of HTB Cube currency, which may be collected to unlock other modules in the HTB Academy, as we will discuss in the next section.

Most questions are required to complete the section, but any questions marked as **Optional Exercises** may be solved by clicking the **Reveal Answer** button, and the section may be completed without solving them.

Note: The exercise targets to practice what was shown int the section however, solving the exercise will not always match the exact commands shown in the section, as they will have some variance to test your understanding and gradually build your skills. Exercises in easier modules will have a minor variance from the shown demo, while harder modules will be more challenging.

---
# Exercise's
Q: Start the above target, copy the shown IP:PORT by clicking on them, and then paste them in your browser. What's the proof shown in the page?
A: `t4rg3ts`

[Next Section](Paths%20and%20Certifications.md)