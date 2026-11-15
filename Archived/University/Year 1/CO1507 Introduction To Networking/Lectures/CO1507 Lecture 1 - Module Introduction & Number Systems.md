---
tags:
  - Introduction-To-Networking
  - CO1507
---
[[CO1507 Introduction To Networking]]

---
# Lecture Documents
[[CO1507 Lecture 1.pdf]]
[[CO1507 L1 - Labsheet 1 - Numbering Systems and Networking Basics.pdf]]

---
# What is a Computer Network?
"A collection of computers and other hardware components interconnected by communication channels that allow sharing of resources and information." - Cisco

---
# Number Systems
- It is vitally important for networking, that numbering systems such as Binary (Base 2), Decimal (Base 10) and Hexadecimal (Base 16).
- Base 10 uses ten characters to represent numbers. (0,1,2,3,4,5,6,7,8,9) 
- Each of these represents a number in its own right
- There is no character for "ten" so '10' is written.
## Base 10 (Decimal)
Base 10 numbers can be calculated, although this may be unknown, given the common usage of the base 10 decimal number system.

```
Example Number: `5156`

| 1000s (10³) | 100s (10²) | 10s (10¹) | 1s (10⁰) |
|-------------|------------|-----------|----------|
| 5           | 1          | 5         | 6        |

(5 x 1000) + (1 x 100) + (5 x 10) + (6 x 1) = 5156
```

## Base 2 (Binary)
Modern computers use the binary (base 2) system to represent numbers, older experimental computers may have used other number systems.

Whichever number base, you need a discrete voltage to present a value, older electronics were very variable, which made it hard to hold the 'correct' voltage for a value.

Binary makes circuity easier because there are only 2 discrete values (0 & 1) e.g high and low voltage.

| Decimal Value | Written Term | Binary Representation                |
| ------------- | ------------ | ------------------------------------ |
| 0             | 'Zero'       | 0                                    |
| 1             | 'One'        | 1                                    |
| 2             | 'Two'        | Ran out of characters, therefore: 10 |
| 3             | 'Three'      | 11                                   |
| 4             | 'Four'       | Ran out of characters therefore: 100 |

Due to the fact that Binary uses two discrete characters each position from right to left will be worth 2x (double) that of the previous position, and not ten times the amount as seen with Decimal (Base 10) earlier.

| 8s (2³) | 4s (2²) | 2s (2¹) | 1s (2⁰) |
| ------- | ------- | ------- | ------- |
| 1       | 0       | 1       | 0       |

Calculating Binary To Denary (Decimal):
- (1 x 8) + (0 x 4) + (1 x 2) + (0 x 1)  
- = 8 + 0 + 2 + 0  
- = **10** 
- Decimal Written: 'Ten' 

As a result of their appearance binary numbers can easily be confused with decimal numbers. For example 1011 might be `One Thousand and Eleven` or just `Eleven (if converted from binary)`.

To make it clear whether a number is binary `0b` can be added to the beginning of the binary number.
## Another Way to Convert
Unlike the previous way, this method does not require a number line. 

| Equation (Decimal / 2) | Answer (Division Result) | Remainder |
| ---------------------- | ------------------------ | --------- |
| 133 / 2                | 66                       | 1         |
| 66 / 2                 | 33                       | 0         |
| 33  / 2                | 16                       | 1         |
| 8 / 2                  | 8                        | 0         |
| 4 / 2                  | 4                        | 0         |
| 2 / 2                  | 2                        | 0         |
| 1 / 2                  | 1                        | 1         |
## Binary and Hexadecimal
We often represent binary in chunks of 8 digits called a **byte**.
1 **byte**

---
[[CO1507 Lecture 2 - Devices, Topology & Local Area Networks]]
