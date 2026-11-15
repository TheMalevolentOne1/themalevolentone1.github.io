---
tags:
  - CO1409
  - Programming
---
[[CO1409 Programming]]

---
# Code Example
```cpp
#include <iostream>
#include <string>
#include <fstream>
using namespace std;


int main()
{
	ifstream infile;
	infile.open("filename.txt");
	if (!infile)
	{
		cout << "ERROR: ";
		cout << "Can't open input file\n";
	}

	// read a single character
	char ch;
	ch = infile.get();
	cout << ch;
	cout << endl;
	infile.close();

	cout << "---------------" << endl;

	//read a single word
	infile.open("filename.txt");
	string str;
	infile >> str;
	cout << str;
	cout << endl;
	infile.close();

	cout << "---------------" << endl;

	//three words per line, so do need to do 3 reads
	infile.open("filename.txt");
	string word1;
	string word2;
	string word3;
	infile >> word1;
	infile >> word2;
	infile >> word3;
	cout << word1 << " ";
	cout << word2 << " ";
	cout << word3 << " ";
	cout << endl;
	infile.close();

	cout << "---------------" << endl;

	// reading 3 words per line, continue reading until end of file
	infile.open("filename.txt");
	infile >> word1;
	infile >> word2;
	infile >> word3;
	while (!infile.eof())
	{
		cout << word1 << " ";
		cout << word2 << " ";
		cout << word3 << " ";
		cout << endl;

		infile >> word1;
		infile >> word2;
		infile >> word3;
	}
	infile.close();

	cout << "---------------" << endl;

	// read a whole line, including the white space
	infile.open("filename.txt");
	getline(infile, str);
	cout << str;
	cout << endl;
	infile.close();

	cout << "---------------" << endl;

	// read a whole line, including the white space, until the end of the file
	infile.open("filename.txt");
	while (!infile.eof())
	{
		getline(infile, str);
		cout << str;
		cout << endl;
	}
	infile.close();

	cout << "---------------" << endl;

	system("pause");
	return 0;
}
```

---
[[CO1409 Programming]]
