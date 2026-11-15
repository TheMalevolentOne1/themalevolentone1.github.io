---
tags:
  - CO2402
  - Advanced-Programming
---
[[CO2402 Lecture 19 & 20 - Revision]]

---
# What is the difference between an object and a class?

```
A - Nothing, both words can be used interchangeably

B - A class is an instance of an object

C - Objects are children of classes in inheritance

D - An object is an instance of a class

E - An object is a pointer to a class

F - Classes are created on the stack, but objects are created on the heap

G - An object is an iteration of a class

H - A class is a collection of objects
```

>[!success] D - An object is an instance of a class.

# What is the result of the following operation?
`cout << sizeof (char);`

```
A - 1 Byte

B - 4 Bytes

C - 64 Bytes

D - 2 Bytes
```

>[!success] A - 1 Byte

# Look at the following 2 lines of code. Choose ALL the statements which are correct.
`CMyClass* myclass = new CMyClass;`
`myclass = new CMyClass;`

```
A - myclass is an object created dynamically

B - myclass is a pointer to an object created dynamically

C - There will be a memory leak when the code is run

D - mcylass is the name of a class

E - myclass stores an address in memory

F - If I add the following line of code, there will not be a memory leak: delete myclass;
```

>[!success] B, C, E

# Choose the answer which _best_ describes an integer?

```
A - A Number

B - A Non-Negative Number

C - A Whole Number

D - A Decimal Number
```

>[!success] C

# Choose the answer which best explains the meaning of the word "public" in the phrase "public data member"

```
A - users of the class have direct access to a member variable

B - there will be public getter and setter member functions for a member variable

C - if there is a derived class, it will use public inheritance on the member

D - the will be data stored about a member of the public
```

>[!fail] B - there will be public getter and setter member functions for a member variable

>[!success] A - users of the class have direct access to a member variable
>I got mixed up by thinking of the handling encapsulation which is where I was thinking of `public setters and getters` rather than thinking of it as a single individual public variable in a class which make them unnecessary but is not good for type integrity.

# Choose ALL the correct statements about the action of the keyword delete

```
A - It frees dynamic memory

B - It calls the destructor on an object

C - It sets the value of a pointer to 0 (or NULL)

D - It removes a dangling pointer
```

>[!success] A, B, C, D

# Look at the following code. What will the console output of the program be?

```cpp
class CTest
{
 public:
 CTest() : CTest(0)
 {
     // empty body
 }
 CTest(int x)
 {
	 cout << "integer" << endl;
 }
 
 CTest(double x)
 {
	  cout << "double" << endl;
 }     
};

int main()
{
	 CTest* obj1 = new CTest();
	 CTest* obj2 = new CTest(5.0);
}
```

```
A -
empty body

empty body

B - 
empty body

5.0

C - double

D - 
empty body
double

E - integer double

F -
integer
double
```

>[!success] C

# Look at the following code, and choose ALL the answers which correctly describe syntax errors which exist in the declarations of the constructors for the class.

```cpp
class CTestConstructors
{
 public:
 CTestConstructors(double x, double y)
 {
	  cout << "(double x, double y)" << endl;
 }
 
 CTestConstructors(double y, double x)
 {
	  cout<<"(double y, double x)"<< endl;
 }
};
```

```
A - Constructors are functions - so they need a return type

B - Constructors should not be declared as public

C - In the second constructor body, there needs to be a space before and after the << operator

D - There is a name clash, because the number and type of the parameters is identical
```

>[!success] D

# Choose ALL the answers which actually happen when the following line of code is run:
`Assume a class called CMyClass exists, with a constructor that takes an integer parameter.`

```cpp
CMyClass* myclass = new CMyClass( 4 );
```

```
A - A pointer variable is declared

B - Memory for an object of type CMyClass is reserved in dynamic memory

C - The constructor is called with the parameter value 4

D - A memory leak will occur

E - The address of a newly constructed object is stored in myclass

F - 4 new CMyClass objects are created.
```

>[!success] A, B, C, D, E

# What is the output of the following lines of code?

```cpp
int* ptr;
int arr[6] = { 2, 8, 5, 1, 0, 7 };
ptr = arr;
cout << *(ptr + 3);
```

```
A - 2

B - 8

C - 5

D - 1

E - 0

F - 7
```

>[!success] D - 1

---
[[CO2402 Lecture 19 & 20 - Revision]]