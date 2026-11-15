---
tags:
  - Cheats
  - Guides
---
[[Notes]]

---
# Overview Instructions

>[!quote]
>Welcome to the Cheat Engine Tutorial (v3.6)
>
>This tutorial will teach you the basics of cheating in video games. It will also show you foundational aspects of using Cheat Engine (or CE for short). Follow the steps below to get started.
>
>1: Open Cheat Engine if it currently isn't running.
>2: Click on the "Open Process" icon (it's the top-left icon with the computer on it, below "File".).
>3: With the Process List window now open, look for this tutorial's process in the list. It will look something like "00001F98-Tutorial-x86_64.exe" or "0000047C-Tutorial-i386.exe". (The first 8 numbers/letters will probably be different.)
>4: Once you've found the process, click on it to select it, then click the "Open" button. (Don't worry about all the other buttons right now. You can learn about them later if you're interested.)
>
>Congratulations! If you did everything correctly, the process window should be gone with Cheat Engine now attached to the tutorial (you will see the process name towards the top-center of CE).
>
>Click the "Next" button below to continue, or fill in the password and click the "OK" button to proceed to that step.)
>
>If you're having problems, simply head over to forum.cheatengine.org, then click on "Tutorials" to view beginner-friendly guides!

---
# Step 1 - Exact Value Scanning

>[!important] PW =  090453

```
1) Scan 100 (Exact Value - 4 Bytes (Typical 32-bit Integer)) for Health

Loop [1]
2) Click hit me to take damage e.g. -4 damage taken
3) Scan decreased by damage_amount e.g. 4
Until Found

4) Change Value to 1000 and click Next. 
   
[1]
[HIT ME] taken 1 damage -> 99
NEXT scan 'decrease'
[HIT ME] taken 3 damage -> 96
NEXT scan 'decrease'
CONTINUE UNTIL SINGLE ADDRESS LEFT 
OR
ADDRESS FOUND (through manual eye balling)
```

---
# Step 2 - Unknown Initial Value 

>[!important] PW = 419482

```
1) Scan Unknown Initial Value
   
LOOP [1]
1) Click "Hit Me" button
2) Scan 'Decreased by' dmg taken
Until Found

3) Change Value to 5000 and click Next.

[1]
[HIT ME] taken -9 damage
NEXT scan 'decrease'
[HIT ME] taken -5 damage
NEXT scan 'decrease'
[HIT ME] taken -3 damage
NEXT scan 'decrease'
CONTINUE UNTIL SINGLE ADDRESS LEFT 
OR
ADDRESS FOUND (through manual eye balling)
```

---
# Step 3 - Floating Points

>[!important] PW = 890124

```
Finding the Health/Ammo Value 
1) Set Value Type to Float/Double
2) Scan for 100 as an Exact Value

LOOP
3) Click "Hit me" to decrease value
4) Scan for 'decreased value'
UNTIL Found

5) Set Health & Ammo to 5000 and click Next.
```

---
# Step 4 - Code Finder

>[!important] PW = 888899

```
1) Scan 100 Exact Value
2) 'Change Value' Button
3) Find the Address for Tutorial Value same as before
4) Right click and Select "Find out what writes to this address"

5) 'Change Value' Button
6) See Assembly `mov [rax],edx`
7) Right Click on instruction and Select "Replace with code that does nothing (NOP)" aka No Operation and then click Next.
```

---
# Step 5 - Single-Layer Pointers

>[!important] PW = 098712

```

```