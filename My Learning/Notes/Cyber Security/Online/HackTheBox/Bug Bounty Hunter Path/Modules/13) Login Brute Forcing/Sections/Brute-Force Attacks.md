---
tags:
  - HackTheBox
  - Login-Brute-Forcing
---
[[Login Brute-Forcing]]
[Previous Section](Password%20Security%20Fundamentals.md)

---
# Brute-Forcing Mathematics
```mathml
Possible Combinations = Character Set Size ^ Password Length
```
<sub>The mathematical formula for determining the total number of possible combinations for a password.</sub>
## Brute-Force Maths Example
Imagine a password that uses the lower-case alphabet and is 6-characters long. The amount of possible combinations for the password described would be.
- In this instance, the character set is `26-characters long (a-z)`
- `26 ^ 6` (26 char-set to the power of 6 character password-length resulting in approx 200 million combinations)

> When uppercase, lowercase letters and all numbers (0-9) the total character-set becomes 62 ([A-Z, a-z, 0,9]). 
>
> `62 ^ 6 = 56,800,235,584` 
> 
> As you can see adding uppercase, lowercase and numbers exponentially increases the amount of combinations from a small 200 million combinations to approx 56 billion combinations.

| Password Length           | Character Set | Possible Combinations                                 | Mathematics                         |
| ------------------------- | ------------- | ----------------------------------------------------- | ----------------------------------- |
| `Short and Simple`        | 6             | Lowercase letters (a-z)                               | 26^6 = 308,915,776                  |
| `Longer but Still Simple` | 8             | Lowercase letters (a-z)                               | 26^8 = 208,827,064,576              |
| `Adding Complexity`       | 8             | Lowercase and uppercase letters (a-z, A-Z)            | 52^8 = 53,459,728,531,456           |
| `Maximum Complexity`      | 12            | Lowercase and uppercase letters, numbers, and symbols | 94^12 = 475,920,493,781,698,549,504 |

<q>As you can see, even a slight increase in password length or the inclusion of additional character types dramatically expands the search space. This significantly increases the number of possible combinations that an attacker must try, making brute-forcing increasingly challenging and time-consuming. However, the time it takes to crack a password isn't just dependent on the size of the search space—it also hinges on the attacker's available computational power.</q>

The better the hardware for the attacker (i.e. number of *GPUs*, *CPUs*, or *cloud-based computing resources* utilised) the more password guesses can be made by made per second. Whereas a complex password can take years to brute-force with a single machine, although a sophisticated attacker can drastically reduce this time by using a distributed network of high-performance computers.

![[Chart-Cracking-Computer-Password.png]]
<sub>Bar Chart which shows the relationship between password complexity and cracking time.</sub>#

As the password length increases and the character set expands the total number of combinations grows exponentially which significantly increases the time required to crack the password, even with powerful computing resources.

<q>Comparing the basic computer and the supercomputer:

- Basic Computer (1 million passwords/second): Adequate for cracking simple passwords quickly but becomes impractically slow for complex passwords. For instance, cracking an 8-character password using letters and digits would take approximately 6.92 years.
- Supercomputer (1 trillion passwords/second): Drastically reduces cracking times for simpler passwords. However, even with this immense power, cracking highly complex passwords can take an impractical amount of time. For example, a 12-character password with all ASCII characters would still take about 15000 years to crack.</q>

---
# Exercises
Q: After successfully brute-forcing the PIN, what is the full flag the script returns?
A: `HTB{Brut3_F0rc3_1s_P0w3rfu1}`

---
[Next Section](Dictionary%20Attacks.md)