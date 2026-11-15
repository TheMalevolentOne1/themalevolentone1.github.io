---
tags:
  - CO2402
  - Advanced Programming
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
