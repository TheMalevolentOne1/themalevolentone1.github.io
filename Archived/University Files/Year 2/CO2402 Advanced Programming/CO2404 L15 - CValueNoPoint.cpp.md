---
tags:
  - CO2402
  - Advanced-Programming
---
[[CO2402 Lecture 15 - Deep & Shallow Copy]]

---
# CValueNoPoint.cpp

```cpp
#include "CValueNoPoint.h"
#include <iostream>
using namespace std;

CValueNoPoint::CValueNoPoint()
{
	mpData = 0;
}

void CValueNoPoint::Set(int data)
{
	mpData = data;
}

void CValueNoPoint::Display()
{
	cout << mpData << endl;
}

```
