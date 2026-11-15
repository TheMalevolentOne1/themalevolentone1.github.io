---
tags:
  - CO2402
  - Advanced-Programming
  - Incomplete
---
[[CO2402 Lecture 19 & 20 - Revision]]

---
# What are the differences between pointers and references? (Select ALL correct answers)

```
A - A pointer is a memory address.

B - A Reference is a memory address.

C - A pointer dereferences to the value that it points to.

D - A Pointer stores a memory address.

E - A reference stores a memory address.
```

>[!fail] B, C, D

>[!success] C, D
>B is incorrect.
>
>References are *alias* for other variables but unlike pointers cannot be reassigned, and changes to the reference effect the original variable.
>
>"References are commonly used in function parameters to improve performance." [Source](https://www.geeksforgeeks.org/cpp/references-in-cpp/#:~:text=References%20are%20commonly%20used%20in%20function%20parameters%20to%20improve%20performance.)
>
>```cpp
>#include <iostream>
>
>using namespace std;
>
>int main() 
>{
 >	// Write C++ code here
 >	int x = 10;
>	int& ref = x; // ref is reference to x
 >	cout << ref << endl; // print value using ref
 >	ref = 22;
 >	cout << ref << endl;
 >	cout << x << endl; // both changed.
>}
>```

# What can you retrieve with & and *? (Select ALL correct answers)

```
A - With & the memory address of a variable can be retrieved.

B - With * the value of the variable a pointer points to can be accessed.

C - The dereferencing operator can be be read as "value pointed to by".

D - * accesses the memory address of a variable.
    
E - With & the value of the variable a pointer points to can be retrieved.
```

# Fill in the blanks with either **dynamic** or **static**. Watch out for typos!

```
Question: [ NUMBER ] = Answer Box.

Answer for Question: [1] - ANSWER
```

```
[ 1 ] - memory allocation is done before the program execution.

[ 2 ] - is done during the program execution.

It uses the stack for [ 3 ] memory allocation.

It uses the heap for [ 4 ] memory allocation.

Linked Lists use generally [ 5 ] memory allocation.

Arrays usually use [ 6 ] memory allocation.

The memory size can be changed in [ 7 ] memory allocation.

In [ 8 ] memory allocation the memory is allocated at runtime.
```

```
[1] - static
[2] - dynamic
[3] - static
[4] - dynamic
[5] - dynamic
[6] - static
[7] - dynamic
[8] - dynamic
```

# What is a memory leak? What is a dangling pointer? How do they happen? (Select ALL correct answers)

```
A - A dangling pointer is a nullptr.

B - A dangling pointer points to memory which is not allocated to anything

C - A dangling pointer points to memory that has already been returned to the system

D - A memory leak is memory which hasn't been returned to the system but nothing points to it anymore

E - A memory leak is memory which cannot be accessed anymore

F - A memory leak happens when a static variable goes out of scope.
```

>[!success] B, D, E

# Write two lines of code:
`1) Create an object dynamically: [ 1 ]`
- Assume the class is called **CBook** and the object is called **book**.
- The parameter list of the constructor is empty.
- _Please make a space before and after the equal sign._
`2) Avoid memory leak: [ 2 ]`

```cpp
[1] - CBook* book = new CBook();
[2] - delete book;
```

# Write a line of code to create an **int** array dynamically. The size of the array is stored in the already existing variable called **size**. The name of the array is called **array**. Don't forget to free the memory!

```
Create the array: [ 1 ]
Free the memory: [ 2 ]
```

```cpp
[1] - int* array = new int[size];
[2] - delete array;
```

# Imagine you’re writing a getter function but the return type is void. How else could you return the value?

```
[1] - 
Display the variable in the console?
Assign it to a private variable using a different setter?
```

>[!fail] Incorrect.

>[!success] Correction
>```cpp
>class Example 
>{
>private:
>	int value = 30;
>public:
>	void getValue(int& result) // Pass by Reference so no variable copy.
>	{
>		result = value // change result to value using Reference (memory address)
>	}
>};
>
>int main()
>{
>	Example obj;
>	int number;
>	obj.getValue(number); // changes the value using the private variable value in the Example class.
>	cout << number; // 30
>}
>```

# What is the output of the following code? Watch out for the blanks!

```cpp
char stringArr[] = "I love C++";

char* ptr = stringArr;
++ptr;
cout << ptr << endl;
ptr += 2;
cout << ptr << endl;
cout << --ptr << endl;
```

>[!fail]
>```
>[1] - 'I' 
>[2] - 'o'
>[3] - 'space'
>```
>
>
> > [!info] Null-Terminated (**/0**) Strings
> > I was not previously aware that C++ also store the null character in strings at the end to mark the end. 
> > 
> > `cout << ptr` prints the *c-string* starting at the ptr address until it reaches **/0**.
> > 
> > I was not aware/had forgotten about this behaviour in *cout*, and had mistaken it as a *pointer* behaviour, which it is not.
> > 
> 
> My mistake was assuming the pointer was a single index. I forgot that cout prints the rest of the null-terminated string starting from that character. To only print the single character the pointer would have to be dereferenced to the single character. (i.e. `*ptr`)

>[!success]
>```
>[1] - ' love C++'
>[2] - 'ove C++'
>[3] - 'love C++'
>```

# What is a sparse array? How do you delete it (when the size is static)? (Select ALL correct answers)

```
A - Every element of the array is a pointer.

B - To delete it, you need to iterate through the array and delete every pointer on its own.

C - You delete it by delete[] array.

D - It is an array which does not get used very often.

E - It is a special kind of Linked List.

F - It is the only way to implement a stack.

G - You do not need to delete it. It just goes out of scope.
```

# Which of the following lines of code are problematic?
`Suppose ptr is of type int* and i is of type int.`

```
A - ptr = &i;

B - i = &ptr;

C - *i = ptr;

D - ptr = ptr + &i;

E - i = ptr;

F - ptr = ptr + ptr;

G - &i = *ptr;

H - ptr = ptr + i;
```

# What is the scope of a dynamic object? (Select ALL correct answers)

```
A - It is from its creation to its destruction.

B - From its creation to when it goes out of scope.

C - It lives as long as you don't explicitly deallocate it with delete or delete[].

D - When the pointer to the object goes out of scope.
```

# How does a linked list work? (Select ALL correct answers)

```
A - Elements which contain both data and a pointer to the next node.

B - The last element's pointer is nullptr.

C - The last element points to null.

D - The last pointer's value is 0.

E - A Linked List's elements are stored in contiguous memory.

F - A Linked List is a static data structure.

G - A Linked List has a fixed size.

H - Every element can be accessed randomly.

I - The variable which points to the first element is called head.

J - The variable which points to the first element is called next.

K - Elements contain a node and a pointer.
```

# Write the code for pushing an element to the front of a linked list.
- The element class is called **CElement** and the object name is **pTemp**.
- The parameter for the **CElement** constructor is called **data**.
- The function is called **setNext**.
- The head element is called **mpHead**.
- _Please put spaces before and after the equal sign._

```
Line 1: [ 1 ]
Line 2: [ 2 ]
Line 3: [ 3 ]
```

# Which statement(s) are/is true about deleting an element of a Linked List? (Select ALL correct answers)

```
A - A pointer to the previous element is needed.

B - Only a pointer to iterate through the Linked List and the data of the target element is needed.

C - The head element cannot be deleted.

D - A bool which shows if the element is found and deleted should be used.
```

# Which of the following statement(s) about static variables is/are true? (Select ALL correct answers)

```
A - The space for the variable gets allocated once for the lifetime of the program.

B - Multiple instances of a class create multiple copies of the same static variable.

C - Static variables must be initialised using constructors.
```

# What is an interface and what is it’s relation to the word abstract? (Select ALL correct answers)

```
A - Every function needs to be pure virtual to make a class abstract.

B - A class with at least one pure virtual function is called an abstract class.

C - A pure virtual function is also called an abstract function.

D - Interfaces are implemented using abstract functions.

E - interfaces are implemented using abstract classes.

F - There can only be one derived class which implements an interface

G - An abstract class provides an appropriate base from which other classes can inherit.

H - An interface is a class which is committed to a particular implementation.
```

# What is the difference between Inheritance and Polymorphism?
Fill in each blank with either **inheritance** or **polymorphism**.

```
1. [ 1 ] is basically applied to functions or methods.

2. [ 2 ] is applied to the whole class.
   
3. [ 3 ] means having multiple forms.
   
4. [ 4 ] defines the creation of a base class from which many classes can inherit the features.
   
5. [ 5 ] supports reusability and reduces code length.
```

# What does the keyword virtual do? What is it used for? (Select ALL correct answers)

```
A - In terms of classes it prevents multiple instances of a given class appearing in an inheritance hierarchy when using multiple inheritance.

B - In terms of functions it ensures the correct function is called for an object.

C - Functions must be declared with the keyword virtual in the derived classes.

D - It prevents the problems which come with the "diamond hierarchy".
```

# What is the output of the following program:

```cpp
#include <iostream>
using namespace std;
 
class Animal
﻿{
public:
    virtual void print()
    {
        cout << "print Animal class" << endl;
    }
 
    void show()
    {
        cout << "show Animal class" << endl;
    }
};
 
class Hamster : public Animal
{
public:
    void print()
    {
        cout << "print Hamster class" << endl;
    }
 
    void show()
    {
        cout << "show Hamster class" << endl;
    }
};
 
int main()
{
    Animal* pAnimal;
    Hamster hamster;
    pAnimal = &hamster;
 
    pAnimal->print();
 
    pAnimal->show();
}
```

```
Output Line 1: [ 1 ]
Output Line 2: [ 2 ]
```

# What is the difference between function overloading and overwriting? Fill in **overloading** or **overriding**.

```
1. Function [ 1 ] occurs within inheritance.
   
2. Function [ 2 ] implies that the function signature differs.
   
3. Function [ 3 ] happens in the same scope.
   
4. Function [ 4 ] implies the function figurature stays the same.
```

# What are the properties of a stack? (Select ALL correct answers)

```
A - It is a LIFO (Last In, First Out) structure.

B - It is a FILO (First In, Last Out) structure.

C - A metaphor for a stack is the Tower of Hanoi.

D - A metaphor for a stack is a conga line.

E - A stack has a fixed size.

F - A variable to keep record of the top of the stack is needed.

G - A variable to keep record of the bottom of the stack is needed.
```

# What are the characteristics of a constructor/destructor? (Select ALL correct answers)

```
A - A class can have more than one destructor.

B - A class can only have one constructor.

C - A constructor/destructor must have a return type.

D - The return type a constructor/destructor must be void.

E - A destructor takes parameters.

F - A constructor signature is written with - in the beginning

G - Writing a destructor is always mandatory

H - Adding a constructor to a class is always needed

I - Having dynamic class variables makes it mandatory to add a destructor.
```

# What are header files and what are source files for? (Select ALL correct answers)

```
A - Header files typically contain defintions.

B - Header files should contain declarations.

C - Libraries need to be included in both the header and source file.

D - Source files contain the class declaration.

E - A class should have a header file, a source file, and a declaration.

F - Every class should have a header file for the method definitions.

G - All class declarations should be in one header file.

H - You must not write definitions in the header file.

I - To use a class, both the source file and the header file must be included.

J - Included libraries and other header files can be inherited.

K - Global variables are always available to every other class.

L - Global variables are accessible by including header files.
```

---
[[CO2402 Lecture 19 & 20 - Revision]]