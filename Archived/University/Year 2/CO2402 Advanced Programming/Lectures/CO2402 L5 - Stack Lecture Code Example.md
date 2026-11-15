---
tags:
  - CO2402
  - Advanced-Programming
---
[[CO2402 Lecture 5 - Stacks]]

---
# Code
```cpp
#include <iostream>
using namespace std;

const int SIZE = 3;

class Stack
{
private:
    int  mTop;
    string mData[SIZE];
    bool isFull();
    bool isEmpty();
public:
    void InitialiseStack();
    void Push(string newData);
    void Pop(string& oldData);
    void DisplayStack();
};

int main()
{
    Stack* myStack = new Stack;
    myStack->InitialiseStack();

    myStack->Push("red");
    myStack->Push("green");
    myStack->Push("blue");
    myStack->DisplayStack();
    cout << endl;

    string storedData;
    myStack->Pop(storedData);
    cout << "popped: " << storedData << endl; // blue
    myStack->Pop(storedData);
    cout << "popped: " << storedData << endl; // green
    myStack->Pop(storedData);
    cout << "popped: " << storedData << endl; // red

    delete myStack;
    myStack = nullptr;
}

bool Stack::isFull()
{
    bool result = false;

    if (mTop >= SIZE)
    {
        result = true;
    }
    return result;
}

bool Stack::isEmpty()
{
    bool result = false;

    if (mTop <= 0)
    {
        result = true;
    }

    return result;
}

void Stack::InitialiseStack()
{
    mTop = 0;
}

void Stack::Push(string newData)
{
    //check if not empty
    if (!isFull())
    {
        //push onto stack
        mData[mTop] = newData;
        ++mTop;
    }
    //let the user know stack is full
    else
    {
        cout << "Stack is full" << endl;
    }
}

void Stack::Pop(string& oldData)
{
    // check if Stack is not Empty
    if (!isEmpty())
    {
        //decrease mTop and then return value
        --mTop;
        oldData = mData[mTop];
    }
    // else if Stack is Empty
    else
    {
        cout << "stack is empty" << endl;
        oldData = "";
    }
}

void Stack::DisplayStack()
{
    for (int i = 0; i < mTop; i++)
    {
        cout << mData[i] << endl;
    }
}
```

---
[[CO2402 Lecture 5 - Stacks]]