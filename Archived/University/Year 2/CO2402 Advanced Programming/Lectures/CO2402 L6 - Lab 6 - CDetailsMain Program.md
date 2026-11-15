---
tags:
  - CO2402
  - Advanced-Programming
---
[[CO2402 Lecture 6 - Working with Multiple Files]]

---
# Code
```cpp
#include <iostream>
using namespace std;

class CDetails
{
private:
	string mName;
	int mAge;
public:
	CDetails(string name, int age);
	void SetDetails(string name, int age);
	void GetDetails(string& name, int& age);
};

CDetails::CDetails(string name, int age)
{
	mName = name;
	mAge = age;
}

void CDetails::SetDetails(string name, int age)
{
	mName = name;
	mAge = age;
}

void CDetails::GetDetails(string& name, int& age)
{
	name = mName;
	age = mAge;
}

int main()
{
	CDetails* person = new CDetails("Jonathan", 39);

	string name;
	int age;
	person->GetDetails(name, age);
	cout << name << " " << age << endl;
	system("pause");
}
```

---
[[CO2402 Lecture 6 - Working with Multiple Files]]