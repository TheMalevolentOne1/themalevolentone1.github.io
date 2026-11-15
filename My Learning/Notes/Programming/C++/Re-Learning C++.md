---
tags:
  - CO1409
  - CO2404
---
[[Notes]]

---
# Workbook 1
## Hello World

```cpp
#include <iostream> // I/O Stream Lib

int main()  // Entrypoint.
{
	// Displays Hello World in Console.
	std::cout << "Hello World!";
	return 0;
}
```
### Output
```txt
Hello World
```
## Name Entry
```cpp
#include <iostream>
#include <string>

int main()
{
	// Stores user's username
	std::string username;
	
	std::cout << "Please Enter Your Name: " << std::endl;
	std::cin >> username; // Reads UserInput from Console.
	std::cout << "Hello " << username;
	return 0;
}
```
### Output
```
Please Enter Your Name:
World
Hello World
```

>[!error]
>The current problem with this problem is that it can only take the first part of the user input i.e. `John Doe` Only John would be processed, and the rest is discarded. Therefore, `std::getline(std::cin, username);` and `std::cin.ignore(200, '\n')`
### First & Surname
```cpp
#include <iostream>
#include <string>

int main()
{
	// Stores user's username
	std::string firstName;
	std::string secondName;
	
	std::cout << "Please Enter Your Name: " << std::endl;
	std::cin >> username; // Reads UserInput from Console.
	std::cout << "Hello " << firstName << " " << secondName;
	return 0;
}
```

## Working with Numbers
### SimpleOperators
```cpp
#include <iostream>

int main()
{
	int userHeight;
	std::cout << "Please enter your height in CM: ";
	std::cin >> userHeight;

	int neighbourOne;
	std::cout << "Please enter your height in CM: ";
	std::cin >> neighbourOne;

	int neighbourTwo;
	std::cout << "Please enter your height in CM: ";
	std::cin >> neighbourTwo;
}
```

