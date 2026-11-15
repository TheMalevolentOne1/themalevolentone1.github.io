---
tags:
  - CO2402
  - Advanced-Programming
---
[[CO2402 Advanced Programming]]

---
# Counter Code
```cpp
// CO2402: Advanced C++
// Week 2: Introduction to classes, the counter class

#include <iostream>
using namespace std;

// Definition for a simple counter
class CCounter
{
private:
	int mAmount; // stores the current count value

public:
	void Set( int number ); // set count to the value of number
	int  Get(); 		// get the current value of amount
	void Increment();  	// increment count by 1 (trivial)
};

// Set counter to the value of number
void CCounter::Set( int number )
{
    mAmount = number;
}

 // Get the current value of the counter
int CCounter::Get()
{
    return mAmount;
}

// Increment the counter by 1 (trivial)
void CCounter::Increment()
{
    mAmount++;
}

int main()
{
	CCounter* myCount = new CCounter; // declare object of type CCounter

	myCount->Set( 3 );
	myCount->Increment();
	int tmp = myCount->Get();
	cout << tmp << endl;

	delete ( myCount );
	system("pause");
}
```

---
[[CO2402 Lecture 2 - Debugging]]
