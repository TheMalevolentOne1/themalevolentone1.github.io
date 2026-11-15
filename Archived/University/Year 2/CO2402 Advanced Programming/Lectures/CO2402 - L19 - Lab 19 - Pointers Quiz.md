---
tags:
  - CO2402
  - Advanced-Programming
---
[[CO2402 Lecture 19 & 20 - Revision]]

---
# (Multiple Choice) Pointers are...

```
A - just a kind of variable

B - really scary

C - difficult to understand

D - none of these things
```

# (Multiple Choice) Deferencing is...

```
A - finding the address of a pointer variable

B - using the & symbol when declaring a function parameter

C - accessing the thing a pointer points at

D - storing the addressof a variable in a pointer
```

# (Multiple Choice) Which of the following is the _preferred_ way of declaring a pointer variable?

```
A - int *ptr;

B - int * ptr;

C - int* ptr;

D - int ptr*;
```

# (Fill In The Blank) Write two lines of code:

```
int i = 5;

The first line should declare a pointer variable to i, called p.

The second line should use dereferencing via the pointer to assign the value 6 to i.
```

# (True/False) A pointer is an address whereas a references stores an address.

>[!success] False.
>
 A pointer **stores** an address, whereas a reference **is** an address.
 
# (Fill In The Blank) Consider this array declaration:

```
int arry = {2, 4, 6, 8, 10};

Type the console output from each of these lines of code:

A - cout << *arry;

B - cout << *arry+2;

C - cout << (*arry)+1;

D - cout << *(arry + 2);
```

# (Multiple Choice) What is stored in a pointer to a variable?

```
A - The value of the pointed-to variable

B -  The memory address of the pointed-to variable

C - Nothing is stored in a pointer variable - it points at another variable

D - An alias (another name) for another variable
```

# (Multiple Choice) What is stored in a pointer to a variable?

```
A - The value of the pointed-to variable

B - The memory address of the pointed-to variable

C - Nothing is stored in a pointer variable - it points at another variable

D - An alias (another name) for another variable
```

# (True/False) When you have a function parameter which is a pointer, you are doing "pass by value".

```
[1] True
[2] False
```

>[!success] False - it is *reference by value*.
>A new copy of this address value is made in the body of the function - just like any other value parameter.

# (Fill In The Blank) Consider this array declaration:

```cpp
int arry = {2, 4, 6, 8, 10};
```

Type the console output when the following lines of code are executed:

```cpp
cout << “{”;

for (int i = 4; i >= 0; i -= 2)
{
   cout << *(arry + i) << “, “;
}

cout << “}”;
```

# (Multiple Choice) Which line of code is equivalent to the following:

```cpp
ptr -> foo;
```

```
A - ptr*.foo;

B - *ptr.foo;
    
C - *(ptr.foo);
    
D - (*ptr).foo;
```

# (Fill In The Blank) Write a single line of code which creates (but does not initialise) an integer dynamically on the heap, and assigns it’s memory address to a pointer variable called p.

```cpp
p = new int();
```

---
[[CO2402 Lecture 19 & 20 - Revision]]