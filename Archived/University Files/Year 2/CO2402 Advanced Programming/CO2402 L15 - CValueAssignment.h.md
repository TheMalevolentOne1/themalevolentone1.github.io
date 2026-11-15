---
tags:
  - CO2402
  - Advanced Programming
---

# CValueAssignment.h

```cpp
#pragma once
class CValueAssignment
{
private:
	int* mpData;

public:
	CValueAssignment(); //constructor
	CValueAssignment(const CValueAssignment& theOriginal); //copy constructor
	CValueAssignment& operator=(const CValueAssignment& other); //copy assignment operator
	void Set(int data);
	void Display();

	~CValueAssignment(); //destructor
};


```
