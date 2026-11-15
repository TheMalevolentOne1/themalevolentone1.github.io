---
tags:
  - CO2402
  - Advanced-Programming
---

[[CO2402 Advanced Programming]]

---
# CValueCopy.cpp

```cpp
#include "CValueCopy.h"
#include <iostream>
using namespace std;

CValueCopy::CValueCopy()
{
	cout << "CValueCopy constructor called" << endl;
	mpData = new int(0);
}

CValueCopy::CValueCopy(const CValueCopy& theOriginal)
{
	cout << "VCalueCopy copy constructor called" << endl;
	mpData = new int;
	*mpData = *theOriginal.mpData;
}

void CValueCopy::Set(int data)
{
	*mpData = data;
}

void CValueCopy::Display()
{
	cout << *mpData << endl;
}

//CValueCopy::~CValueCopy()
//{
//	cout << "VCalueCopy copy destructor called" << endl;
//	delete mpData;
//}

```
