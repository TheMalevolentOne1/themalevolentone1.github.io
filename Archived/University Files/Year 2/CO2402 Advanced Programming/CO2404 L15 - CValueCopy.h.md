---
tags:
  - CO2402
  - Advanced-Programming
---
[[CO2402 Lecture 15 - Deep & Shallow Copy]]

---
# CValueCopy.h

```cpp
#pragma once
class CValueCopy
{
private:
	int* mpData;

public:
	CValueCopy(); //constructor
	CValueCopy(const CValueCopy& theOriginal); //copy constructor
	void Set(int data);
	void Display();

	//~CValueCopy(); //destructor
};



```
