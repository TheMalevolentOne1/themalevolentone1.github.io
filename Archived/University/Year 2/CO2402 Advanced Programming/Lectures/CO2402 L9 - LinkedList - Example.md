---
tags:
  - CO2402
  - Advanced-Programming
---
[[CO2402 Lecture 9 - Linked Lists P1]]

---
# CElement
## Header File
```cpp
#pragma once
class CElement
{
public:
	CElement(int data);
	void setNext(CElement* next);
	CElement* getNext();
	int getData();
	~CElement();

private:
	int mData;
	CElement* mpNext;
};
```
## Source File
```cpp
#include "CElement.h"

CElement::CElement(int data)
{
	mData = data;
	mpNext = nullptr;
}

void CElement::setNext(CElement* next)
{
	mpNext = next;
}

CElement* CElement::getNext()
{
	return mpNext;
}

int CElement::getData()
{
	return mData;
}

CElement::~CElement()
{
}
```

# CLinkedList
## Header File
```cpp
#pragma once
//class CElement; //forward declaration

class CLinkedList
{
public:
	CLinkedList();
	~CLinkedList();
	void pushFront(int data);
	void popFront();
	int getFront();
	void printList();


private:
	CElement* mpHead;
};
```
## Source File
```cpp
#include "CLinkedList.h"
//#include "CElement.h"
//#include <iostream>
//using namespace std;


CLinkedList::CLinkedList()
{
	mpHead = nullptr;
}

void CLinkedList::pushFront(int data){
	// allocate memory for new element
	CElement* pTemp = new CElement(data);
	pTemp->setNext(mpHead); // put temp in front of the old head of the list
	mpHead = pTemp; // head updated
}

void CLinkedList::popFront(){
	CElement* pTemp = mpHead; // store old head
	if (mpHead != nullptr){    // if list has at least one element
		mpHead = mpHead->getNext();
		delete pTemp;
	}
}

int CLinkedList::getFront(){
	if (mpHead != nullptr) // check list has at least one link
	{
		return mpHead->getData();
	}
	// only reached if the linked list is empty
	cout << "ERROR: list is empty" << endl;
	system("pause");
	exit(0);

}

void CLinkedList::printList(){
	CElement* pCurrent = mpHead; // can't use ‘mpHead' else 
	// we'd loose track of the
	// list start
	while (pCurrent != nullptr)  // 0 atend of the list.
	{
		cout << pCurrent->getData() << endl;
		pCurrent = pCurrent->getNext();
	}
	cout << endl;

}

CLinkedList::~CLinkedList(){
	CElement* pTemp = mpHead; // store old head
	while (mpHead != nullptr){    // if list has at least one element
		pTemp = mpHead;
		mpHead = mpHead->getNext();
		delete pTemp;
	}
}
```

# Main
```cpp
// LinkedListPart1.cpp : This file contains the 'main' function. Program execution begins and ends there.

#include <iostream>
#include "CLinkedList.h"

int main()
{
    std::cout << "Hello World!\n";
    CLinkedList* myList = new CLinkedList() ;
    myList->pushFront(2);
    myList->pushFront(4);
    myList->pushFront(6);
    myList->pushFront(8);

    myList->printList();
    delete myList;
}
```

---
[[CO2402 Lecture 9 - Linked Lists P1]]