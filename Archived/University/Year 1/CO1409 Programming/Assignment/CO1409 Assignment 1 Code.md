---
tags:
  - CO1409
  - Programming
---
[[CO1409 Programming]]

---
# Assignment Feedback

>[!success] 80 / 100 marks

```
The summary exercise was done a bit sloppy. Your code contained magic numbers. When 7 is inputted for toppings,  the program crashes. You didn't use call by reference. I loved the commenting style. You did a good job with it. Keep up the great work.
```

---
# Assignment Code
```cpp
#include <iostream>
#include <iomanip>
#include <fstream>
#include <string>
using namespace std;

/*
Brief:
Changes the format to add more decimal places

Parameters:
[in] decimalPlaces (the amount of decimal places to format)
[out] none, void function.
*/
void changeFormat(int decimalPlaces)
{
	cout << setprecision(decimalPlaces) << fixed;
	return;
}

/*
Brief:
Changes a string to all lowercase

Parameters:
[in] sentence (sentence to change)
[out] lowercase (sentence in lowercase)
*/
string ToLower(string sentence)
{
	string lowercase;

	for (auto x : sentence)
		lowercase += tolower(x);

	return lowercase;
}

/*
Brief:
Handles a user's y or n choices
Parameters:
[out] choice (the choice the user made)
*/
string yOrNOption()
{
	string choice;
	
	while (choice != "y" && choice != "n")
	{
		cin >> choice;

		choice = ToLower(choice);

		if (!(choice == "y" || choice == "n"))
			cout << "Only Y and N are valid options: ";
	}

	return choice;
}

/*
Brief:
Allows the user to add credits

Parameters:
[in] originalCredits (Amount of credits user has)
[out] newCredits (Credits user has added to their original)
*/
float addCredits(float originalCredits)
{
	system("cls");
	cout << "-------------------------------" << endl << "Add Credits" << endl << "-------------------------------" << endl;
	cout << "You currently have: " << originalCredits << endl << endl;
	cout << "Please type 0 to return to the Main Menu" << endl << endl;
	float newCredits = -1;
	// Checks credits are not in acceptable range
	while (newCredits < 0 || newCredits > 10000)
	{
		cout << "Please enter how many credits you would like to add: ";
		cin >> newCredits;

		// User adds too little or too many credits
		if (newCredits < 0)
			cout << "You cannot add less than 1 credit." << endl;
		else if (newCredits > 1000)
			cout << "You cannot add more than 1,000 credits at a time" << endl;

		if (cin.fail())
		{
			cout << "You must enter a number to add credits" << endl;
			cin.clear();
			cin.ignore(80, '\n');
			
			// prevent newCredit being changed back to 0
			newCredits = -1;
		}
	}
	system("cls");
	return originalCredits + newCredits;
}

/*
Brief:
Startpoint of the program.

Parameters:
[out] return 0 to end program.
*/
int main()
{
	system("cls");


	/*
	Credits variable, only initalised once.
	*/
	static float credits = 0.00;

	changeFormat(2);

	// Main Menu
	cout << "-------------------------------" << endl << "UCLan PIZZA" << endl << "-------------------------------" << endl;
	cout << "Main Menu:" << endl;
	cout << "  1. Add Credits [current credits = " << credits << "]" << endl;
	cout << "  2. Order PIZZA" << endl;
	cout << "  3. Recent Orders" << endl;
	cout << "  0. Exit" << endl;

	int userChoice = 4;

	while (userChoice < 0 || userChoice > 3)
	{
		cout << "Please enter a number: ";
		cin >> userChoice;

		if (userChoice < 0 || userChoice > 3)
			cout << "Selection must be a number between 0 and 3" << endl;

		if (cin.fail())
		{
			cout << "selection value must be a number" << endl;
			cin.clear();
			cin.ignore(80, '\n');
			userChoice = -1;
		}
	}

	// User wants to add credits
	if (userChoice == 1)
	{
		credits = addCredits(credits);
		main();
	}

	// User wants to order pizza
	else if (userChoice == 2)
	{
		system("cls");
		cout << "-------------------------------" << endl << "Order Pizza" << endl << "-------------------------------" << endl;
		bool anotherPizza = false;
		// checks whether user wants to order another pizza
		do
		{
			string pizzaOrder = "";

			float totalPizzaCost = 0.00; 

			string pizzaSizes[3] = { "Small", "Medium", "Large" };
			float pizzaSizePrices[3] = { 5.0, 8.5, 10.25 };
			int userSizeChoice = 0;

			cout << "Select Size [Current Balance = " << credits << " credits" << endl << endl;
			cout << "Please choose one of the following options:" << endl;

			// Lists all pizza sizes and their prices
			for (int i = 0; i < sizeof(pizzaSizes) / sizeof(string); i++)
				cout << i + 1 << ". " << pizzaSizes[i] << " - [" << pizzaSizePrices[i] << "]" << endl;

			//user selects size of pizza
			while (userSizeChoice < 1 || userSizeChoice > 3)
			{
				cout << "Please enter the number of the size you want: " << endl;
				cin >> userSizeChoice;

				if (cin.fail())
				{
					cout << "Pizza size must be a number." << endl;
					cin.clear();
					cin.ignore(80, '\n');
				}
				else if (userSizeChoice < 1 || userSizeChoice > 3)
					cout << "Pizza size selection must be between 1 and 3" << endl;
			}

			// Add user's order to a string
			pizzaOrder += pizzaSizes[userSizeChoice - 1];

			pizzaOrder += "\n";

			totalPizzaCost += pizzaSizePrices[userSizeChoice - 1];


			cout << endl << "You have selected a " << pizzaSizes[userSizeChoice - 1] << " pizza" << endl;

			// user selects what toppings they want on the pizza
			string allToppings[6] = { "Ham", "Mushrooms", "Pepperoni", "Peppers", "Onions", "Extra Cheese" };
			float allToppingsPrice[6] = { 0.8, 0.5, 1.0, 0.8, 0.4, 1.5 };

			// Lists the pizza toppings
			for (int i = 0; i <= (sizeof(allToppingsPrice) / sizeof(float)) - 1; i++)
				cout << i + 1 << " " << allToppings[i] << " - " << "[" << allToppingsPrice[i] << " Credits]" << endl;

			bool addMoreToppings = false;

			// Checks what toppings the user wants
			while (!addMoreToppings)
			{
				int toppingToAdd = 0;

				bool toppingRangeCheck = false;

				do
				{
					cout << "What topping would you like to add?: ";
					cin >> toppingToAdd;

					/* 
					Ensures the user doesn't enter a value that isn't a topping.
					Sets the toppingRangeCheck to true or false depending on the condition
					*/
					toppingRangeCheck = (toppingToAdd - 1 > sizeof(allToppings) / sizeof(string) || toppingToAdd < 0) ? true : false;

					if (toppingRangeCheck)
						cout << "That choice is not a topping" << endl;

					if (cin.fail())
					{
						cin.clear();
						cin.ignore(80, '\n');

						cout << "Please enter the relevant number to choose a topping" << endl;
					}

				} while (toppingRangeCheck);

				pizzaOrder += allToppings[toppingToAdd - 1];

				pizzaOrder += '\n';

				totalPizzaCost += allToppingsPrice[toppingToAdd - 1];

				cout << "Do you want to add additional toppings?" << endl << endl;
				cout << "Please enter Y or N: ";

				string choice = yOrNOption();

				addMoreToppings = (choice == "y") ? false : true;
			}

			system("cls");


			// user purchases the pizza
			cout << "-------------------------------" << endl << "Purchasing" << endl << "-------------------------------" << endl;

			cout << "Your Order:" << endl;

			for (int i = 0; i << sizeof(pizzaOrder) / sizeof(string); i++)
				cout << pizzaOrder[i] << ", ";

			bool purchaseComplete = false;
			while (!purchaseComplete)
			{
				cout << "Credit Balance: " << credits << endl;
				cout << "Total Pizza Cost: " << totalPizzaCost << endl;

				// the user has insufficient credits to complete order
				if (credits < totalPizzaCost)
				{
					cout << "You have insufficient credits. You need " << totalPizzaCost - credits << " to process this order" << endl;
					cout << "Would you like to purchase more credits: ";

					string purchaseCredit = yOrNOption();

					if (purchaseCredit == "y")
						credits = addCredits(credits);
				}

				// the user has sufficient credits to complete order
				else
				{
					cout << "Would you like to finish processing this order?" << endl;
					cout << "Please enter Y or N: " << endl;

					string finishOrder = yOrNOption();

					if (finishOrder == "y")
					{
						/*
						Code obtained from Stack OverFlow
						https://stackoverflow.com/questions/8220196/avoid-contents-of-an-existing-file-to-be-overwritten-when-writing-to-a-file
						"std::ios::app" for the append mode.
						*/
						fstream myFile;
						myFile.open("orders.txt", std::ios::app); // open/create orders.txt in append mode
						if (myFile.is_open())
						{
							myFile << pizzaOrder << endl; // Writes user's pizza order to file

							credits -= totalPizzaCost;
						}
						else
						{
							cout << "Error: Orders file unable to be found" << endl;
							system("pause");
						}

						myFile.close();
					}
					else
					{
						cout << "Purchase Successfully Cancelled" << endl;
						purchaseComplete = true;
						system("pause");
					}

					main();
				}
			}
		} while (anotherPizza);
	}
	else if (userChoice == 3)
	{
		system("cls");
		cout << "-------------------------------" << endl << "Recent Orders" << endl << "-------------------------------" << endl;
		//Opens the file to reading
		ifstream recentOrders{ "orders.txt" };

		string textLine;
		//Displays the contents of the file
		while (getline(recentOrders, textLine))
			cout << textLine << endl;
		recentOrders.close();

		system("pause");

		// return to main menu
		main();
	}
}
```

---
# Summary Exercise 1
```cpp
#include <iostream>
using namespace std;

int main()
{
    for (int i = 0; i <= 200; i++)
        if (i % 2 != 0)
            cout << i << endl;
}
```

---
# Summary Exercise 2
```cpp
#include <iostream>
using namespace std;

/*
get number from user 

parameters:
[in] numPurpose (the purpose of getting the number)
[out] number (return the number)
*/
int getNumber(string numPurpose)
{
    int number = -1;

    while (number < 0)
    {
        cout << "Please enter a " << numPurpose << " number" << endl;
        cin >> number;

        if (cin.fail())
        {
            cin.clear();
            cin.ignore(80, '\n');
            number = -1;
        }
    }

    return number;
}

int main()
{
    int startNum = 1;
    int endNum = 0;

    while (startNum > endNum)
    {
        startNum = getNumber("start");
        endNum = getNumber("end");

        if (startNum > endNum)
            cout << "starting number cannot be greater than ending number" << endl;
    }

    for (startNum; startNum <= endNum; startNum++)
        if (startNum % 2 != 0)
            cout << startNum << endl;
}
```

---
# Summary Exercise 3
```cpp
// Summary Exercise Chatbot

#include <iostream>
using namespace std;

const int maxFilms = 3;

int getRating(string film)
{
    int rating = 0;

    while (rating <= 0 || rating > 4)
    {
        cout << "Please enter a rating for " << film << ": " << endl;
        cin >> rating;

        if (rating > 4 || rating <= 0)
            cout << "Ratings can only be between 1 and 4" << endl;

        if (cin.fail())
        {
            cin.clear();
            cin.ignore(80, '\n');
            rating = -1;
        }
    }

    return rating;
}

int main()
{
    string movies[maxFilms] = { "Top Gun: Maverick", "Star Wars: The Last Jedi", "Minions: The Rise of Gru" };

    int userRating;

    for (int i = 0; i < maxFilms; i++)
    {
        userRating = getRating(movies[i]);

        if (userRating == 1 || userRating == 2)
            cout << "that sounds rubbish!" << endl;
        else if (userRating == 3)
            cout << "Sounds ike it was okay then!" << endl;
        else if (userRating == 4)
            cout << "Sounds great!" << endl;
    }

    return 0;
}
```

---
# Summary Exercise 4
```cpp
#include <iostream>
#include <cmath>
using namespace std;

int main() {
    cout << "Choose one of these options to calculate the area of a triangle: " << endl;
    cout << "1. Base and height" << endl;
    cout << "2. Length of two sides and the included angle" << endl;
    cout << "3. Length of three sides" << endl;

    int choice;
    cin >> choice;

    double area = 0;
    int a,b,c = 0;

    switch (choice) {
        case 1:
            cout << "Input base and then height: ";
            cin >> a >> b;
            area = 0.5 * (a * b);
            cout << "Area = " << area << endl;
            break;

        case 2:
            cout << "Input the length of the two sides and then the included angle:";
            cin >> a >> b >> c;
            area = 0.5 * a * b * sin(c);
            cout << "Area = " << area << endl;
            break;

        case 3:
            cout << "Input the three side lengths: ";
            cin >> a >> b >> c;
            double s = (a + b + c) / 2.0;
            area = sqrt(s * (s - a) * (s - b) * (s - c));
            cout << "Area = " << area << endl;
            break;

	default:
	    cout << "Invalid Choice" << endl;
    }
    return 0;
}
```

---
[[CO1409 Programming]]
