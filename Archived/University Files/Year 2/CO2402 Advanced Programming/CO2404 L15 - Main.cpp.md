---
tags:
  - CO2402
  - Advanced-Programming
---
[[CO2402 Lecture 15 - Deep & Shallow Copy]]

---
# main.cpp

```cpp
#include <iostream>
#include "CValue.h"
#include "CValueNoPoint.h"
#include "CValueCopy.h"
#include "CValueAssignment.h"
using namespace std;

void foo(CValue copy) {
    cout << "copy in foo: ";
    copy.Display();
    copy.Set(3);
    cout << "copy in foo after set: ";
    copy.Display();
}

int main(){
    CValue original;
    //CValueNoPoint original;
    //CValueCopy original;
 
    original.Set(2);
    cout << "original: ";
    original.Display(); //should output 2
    foo(original);
    cout << "original after foo: ";
    original.Display(); //is the output what we want???

    ////******************shallow copy with assignment operator example***************
    //CValueCopy originalValue;
    //originalValue.Set(8);
    //cout << "originalValue: ";
    //originalValue.Display(); //should output 8

    //CValueCopy newValue; 
    //newValue = originalValue; 
    //newValue.Set(99); 

    //cout << "originalValue after newValueSet: ";
    //originalValue.Display(); //not what we want!

    //////******************Deep copy with assignment operator example***************
    //CValueAssignment originalValue;
    //originalValue.Set(22);
    //cout << "originalValue: ";
    //originalValue.Display(); //should output 22

    //CValueAssignment newValue;
    //newValue = originalValue;
    //newValue.Set(420);

    //cout << "originalValue after newValueSet: ";
    //originalValue.Display(); //should still output 22



}
```
