---
tags:
  - Code-Sample
---

[[Hacker - Hack The System - The Ethical Python Hacking Guide - Chapter 1]]
[Back To Chapter 1](Hacker%20-%20Hack%20The%20System%20-%20The%20Ethical%20Python%20Hacking%20Guide%20-%20Chapter%201.md###%20Simple%20Brute-Force%20Password%20Cracking)
# Process
The books solution was flawed, it did not inform me that the `rockyou.txt` does not use standard UTF-8 encoding and instead uses Latin-1, the book also didn't demonstrate how to change the encoding method so I had to fix that accordingly. Apart from that it all went smoothly
## Code
![[simple_hashlib_bruteforce_passwordcrack.png]]
## Result
![[passcrack_hashlib_result.png]]