---
tags:
  - CO2402
  - Advanced-Programming
---
[[CO2402 Lecture 19 & 20 - Revision]]

---
# When should Exceptions be used?

```
A - If you discovered unexpected violation of your component e.g.: memory corruption.

B - To indicate coding errors in usage of a function.

C - To indicate invalid user input.

D - Errors which are beyond your programs control (external problems).
```

# Should Exceptions be used in the constructor or destructor? Or both?

```
A - In the constructor.

B - In the destructor.
```

# What is the output of this cod snippet?

```cpp
int main()
{
    Derived d;
    try 
    {
        throw d;
    }
    catch(Base b) 
    {
         cout<<"Caught Base Exception";
    }
    catch(Derived d) 
    {
        cout<<"Caught Derived Exception";
    }
    return 0;
}
```

# What is the difference between recursion and iteration? Type the word **recursion** or **iteration** or **both**.

```
[ 1 ]: Function calls itself.
[ 2 ]: A set of instructions repeatedly executed.
[ 3 ]: Is usually applied to loops.
[ 4 ]: Is usually applied to functions.
[ 5 ]: Is terminated when then the condition for iterator ceases to be satisifed.
[ 6 ]: Is terminated through a base case.
[ 7 ]: Takes longer to run because of the overhead of creating new stack frames.
[ 8 ]: Takes less space on the stack.
```

# Here are some general statements about smart pointers. Select ALL statements which are true:

```
A - Smart pointers are a whole new concept of memory management in modern C++, and they've got nothing to do with raw pointers

B - Smart pointers have new features like ownership, but you still need to free the memory after destroying the pointer

C - A smart pointer is just a wrapper class over a raw pointer, and it overloads operators like * and ->

D - The destructor is automatically called when the object goes out of scope

E - Once a unique pointer "owns" a block of memory, this ownership cannot be transferred to another pointer.

F - A memory block which is "owned" by a unique pointer can be observed using raw-pointers
```

# Write the code for creating a **unique pointer** called **ptr1** which points to a newly created object of a class called **Planet**.

The constructor of this class takes **two arguments**. The first one is a string, which will be **Saturn**, and the second is an integer and will be **6**. (assume using namespace std; has already been typed)

```
[ 1 ]
```

Create a second **unique pointer** called **ptr2**, which is **not** assigned to a memory block.

```
[ 2 ]
```

**Transfer the ownership** of our Planet object from ptr1 to ptr2.

```
[ 3 ]
```

# What is the output of this code snippet?

```cpp
int main()
{
    vector<int> v1(3);
    v1.push_back(1);
    v1.push_back(2);
    v1.push_back(3);
    v1\[1\] = 4;
 
    for (int i = 0; i < v1.size(); i++)
        cout << v1\[i\] << ", ";
}
```

# Have a look at this code snippet. It might or might not cause an error. If you think it causes an error, write the correct line of code in the answer box, else put a - in it.

```cpp
struct SPlanet
{
    string name;
    int number;
 
    SPlanet(string newName, int newNumber)
    {
        name = newName;
        number = newNumber;
    }
};
 
int main()
{
    unique_ptr<SPlanet> ptr1(new SPlanet("Jupiter", 5));
    
    deque<unique_ptr<SPlanet>> d;
    
    d.push_back(ptr1);
}
```

# Which statement(s) is/are true about iterators?

```
A - 
Given this deque: 

deque<unique_ptr<SPlanet>> d;

Accessing the property of the deque's objects' properties using an iterator is done this way:

for (auto i = d.begin(); i != d.end(); i++)
{
    cout << (*(*i)).name << " is planet no. " << (*(*i)).number << endl;
}

B - 
Given this deque: 

deque<unique_ptr<SPlanet>> d;

Accessing the property of the deque's objects' properties using an iterator is done this way:

for(auto i = d.begin(); i != d.end(); i++)
{
    cout << (*i)->name << " is planet no. " << (*i)->number << endl;
}

C - 
You can simply replace

deque<unique_ptr<SPlanet>>::iterator

with

auto*

D - 
Given this deque: 

deque<unique_ptr<SPlanet>> d;

These two loops are working exactly in the same way:

for(auto i = d.begin(); i != d.end(); i++)
{
    cout << (*i)->name << " is planet no. " << (*i)->number << endl;
}
for(auto i : d)
{
    cout << (*i)->name << " is planet no. " << (*i)->number << endl;
}
```

# Imagine you are using a ranged-based for loop on this deque:

```cpp
**deque<unique_ptr<SPlanet>> d;**
```

How can write the loop to ensure that the stored variables are not going to be changed? (i.e. make them read-only)

Write the single line of code to declare the loop (beginning with the keyword **for**)

Assume that the _range_ (variable which holds the current value) is called **val**.

_Please use spaces between the variable names and the colons (x : y), but no space between the keywords and the brackets._

---
[[CO2402 Lecture 19 & 20 - Revision]]