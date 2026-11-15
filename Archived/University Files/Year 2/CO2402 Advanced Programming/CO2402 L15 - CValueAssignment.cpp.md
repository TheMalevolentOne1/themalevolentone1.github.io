---
tags:
  - CO2402
  - Advanced Programming
---

# CValueAssignment.cpp

```cpp
#include "CValueAssignment.h"
#include <iostream>
using namespace std;

CValueAssignment::CValueAssignment()
{
	cout << "CValueAssignment constructor called" << endl;
	mpData = new int(0);
}
//copy constructor
CValueAssignment::CValueAssignment(const CValueAssignment& theOriginal)
{
	cout << "CValueAssignment copy constructor called" << endl;
	mpData = new int;
	*mpData = *theOriginal.mpData;
}

// Copy Assignment Operator: Handle deep copy and self-assignment
CValueAssignment& CValueAssignment::operator=(const CValueAssignment& other) {
	cout << "CValueAssignment copy assignment operator called" << endl;

	// Check for self-assignment
	if (this != &other) {
		delete mpData;          // Free existing memory		(why do this? - good practice for some data types)
		mpData = new int;       // Allocate new memory		(if size of object changes we need to reallocate e.g. when managing Arrays)
		*mpData = *other.mpData; // Copy the value (can just use this in this case and avoid freeing and allocating memory)
	}

	return *this; // Return reference to the current object
}

void CValueAssignment::Set(int data)
{
	*mpData = data;
}

void CValueAssignment::Display()
{
	cout << *mpData << endl;
}

//destructor
CValueAssignment::~CValueAssignment()
{
	cout << "CValueAssignment destructor called" << endl;
	delete mpData;
}

```
