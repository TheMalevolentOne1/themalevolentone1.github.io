---
tags:
  - CO1409
  - Programming
---
[[CO1409 Programming]]

---
# TAC Code
```cpp
#include <iostream>
using namespace std;

int main()
{
	cout << "Choose one of these options to calculate the area of a triangle: " << endl;
	cout << "1. Base and height" << endl;
	cout << "2. Length of two sides and the included angle" << endl;
	cout << "3. Length of three sides" << endl;

	int choice;
	cin >> choice;

	double area = 0
	int a, b, c = 0;

	switch (1)
	{
	case 1:

		cout << "Input base and then height: ";
		cin >> a >> b;
		area = (0.5 * (a * b));
		cout << "Area = " << area << endl;

	case 2:
		cout << "Input the length of the two sides and then the included angle:";
		cin >> a,  b, c;
		area = ((0.5 * (a * b)) * sin(c));
		cout << "Area = " << area << endl;


	case 3:
		cout << "Input the three side lengths: ";
		cin >> a >> b >> c;
		double s = a + b + c / 2;
		area = sqrt(s * s-a * s-b * s-c);
		cout << "Area = " << area << endl;
	}

}
```

---
[[CO1409 Programming]]