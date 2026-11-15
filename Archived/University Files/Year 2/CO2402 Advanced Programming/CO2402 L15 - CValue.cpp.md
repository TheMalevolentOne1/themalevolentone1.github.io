---
tags:
  - CO2402
  - Advanced-Programming
---

# CValue.cpp

```cpp
#include "CValue.h"
#include <iostream>
using namespace std;

CValue::CValue()
{
	//cout << "CValueConstructor called" << endl;
	mpData = new int(0);
}

void CValue::Set(int data)
{
	*mpData = data;
}

void CValue::Display()
{
	cout << *mpData << endl;
}
/*
CValue::~CValue()
{
	delete mpData;
}
*/

```
