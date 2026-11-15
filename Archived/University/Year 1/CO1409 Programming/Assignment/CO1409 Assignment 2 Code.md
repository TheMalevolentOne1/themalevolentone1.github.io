---
tags:
  - CO1409
  - Programming
---
[[CO1409 Programming]]

---
# Assignment Feedback
>[!success] 62 / 100 marks

```
Summary exercise - progran breaks  
when inputted number out of range; 
update does not wok either.
```

---
# Assignment Code
```cpp
#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <filesystem>
#include <map>

using namespace std;
namespace fs = std::filesystem;

// Define functions before initalising
vector<string> GetFilePathsInFolder(string directoryPath);
string ToLower(string sentence);

const string filesDirectory = ".\\tweets\\";
const string fileWord = "tweets";
const string bannedFileName = "banned(1)";
const string positiveFileName = "positive";
const string negativeFileName = "negative";
const int filesDirectoryIndex = 1;
const int censorSentenceSeparator = -1;

/*
Brief:
Removes the punctuation from a string

Parameters:
[in] filePath (file path to remove punctuation from)
[in] isPath (if the string is a path)

[out] noPunctSentence (file path with removed punctuation (and txt extension if the string is for a path))
*/
string RemovePunctuation(string filePath, bool isPath = false)
{
    int txtExtensionLength = 0;
    if (isPath)
    {
        txtExtensionLength = 3;
    }

    string noPunctSentence = "";

    for (char x : filePath)
        if (!ispunct(x))
            noPunctSentence += x;

    return noPunctSentence.substr(0, noPunctSentence.length() - txtExtensionLength);
}

class File
{
// Only accessible from within the class
private:
    fstream file;

    string fileName;
    string filePath;

    vector<string> fileContents;

    map<int, vector<int>> indexPositions;

    vector<string> censoredFileContents;

    /*
    Brief:
    (Setter) Stores file contents in instance of class
    */
    void SetFileContents()
    {
        string line = "";
        vector<string> words;

        while (getline(this->file, line))
        {
            this->fileContents.push_back(RemovePunctuation(line));
        }

        if (this->fileContents.empty())
            cout << "The file is empty" << endl;

        return;
    }

// Accessible from within and outside the class
public:
    /*
    Brief:
    File Constructor

    Parameters:
    [in] filePath (File Path)
    */
    File(string filePath = "")
    {
        this->file.open(filePath, ios::in); // Opens file for reading
        if (this->file.is_open())
        {
            this->filePath = filePath;
            this->fileName = RemovePunctuation(filePath.substr(filesDirectory.length() - filesDirectoryIndex, filePath.length()), true);
            SetFileContents();
        }
        /*
        Obtained from source:
        https://stackoverflow.com/questions/2715386/c-runtime-display-exception-message

        Prevents the creation of an instance of the class by the user for a file that doesn't exist or was failed to open.
        */
        else
            throw runtime_error("File was unable to be opened or found");
    }

    /*
    Brief:
    (Setter) Stores word indexs in instance of class
    */
    void SetWordIndex(map<int, vector<int>> indexPositions, int sentenceIndex)
    {
        for (const auto& pairs : indexPositions)
            for (int index : pairs.second)
                this->indexPositions[pairs.first].push_back(index);


        return;
    }

    /*
    Brief:
    Displays the censored file content for the user
    */
    void ShowStoredCensorContent()
    {
        for (string sentence : this->censoredFileContents)
            cout << sentence << endl;
        return;
    }

    /*
    Brief:
    Displays the file content for the user
    */
    void ShowStoredContent()
    {
        for (string sentence : this->fileContents)
            cout << sentence << endl;
        return;
    }

    /*
    Brief:
    (Getter) for the path of the file.

    Parameters:
    [out] returns the file path
    */
    string GetFilePath()
    {
        return this->filePath;
    }

    /*
    Brief:
    (Getter) Get file contents from the instance of the class

    Parameters:
    [out] fileContents (the contents of the file)
    */
    vector<string> GetFileContents()
    {
        return this->fileContents;
    }

    /*
    Brief:
    (Getter) for the file name

    Parameters:
    [out] returns the file name
    */
    string GetFileName()
    {
        return this->fileName;
    }

    /*
    Brief:
    Censor the file contents to change the word being censored to asterisks
    */
    void CensorFileContents()
    {
        this->censoredFileContents = this->fileContents;

        for (const auto& pairs : this->indexPositions)
        {
            for (int index : pairs.second)
            {
                this->censoredFileContents[pairs.first][index] = '*';
            }
        }
    }

    /*
    Brief:
    Output the censored tweets to an external file
    */
    void OutputCensoredTweets()
    {
        fstream filteredTweets(this->fileName + "Filtered.txt", ios::out);
        for (string sentence : this->censoredFileContents)
            filteredTweets << sentence << endl;
        
    }
};


/*
Brief: checks whether a sentence contains a word. (Linear Search)

Parameters
[in] sentence (string to check for word)
[in] wordToCheck (string to find in sentence)
[in] hasFoundAmount (Whether to display the located amount of words)
[in] file (Optional Parameter) (File object to store indexs for words)

[out] true or false (returns true or false dependent if the word was located)
*/
bool HasWord(vector<string> sentences, string wordToCheck, map<string, int>& banCount, File* file = nullptr) 
{
    wordToCheck = ToLower(wordToCheck);
    int sizeOfWord = wordToCheck.length();
    int wordFound = 0;
    int lettersFound = 0;
    int currentIndex = 0;
    int sentenceIndex = 0;
    string word;

    for (string sentence : sentences) 
    {
        currentIndex = 0;
        map<int, vector<int>> tempIndexPositions;
        sentence = ToLower(RemovePunctuation(sentence));
        for (char sentenceLetter : sentence) 
        {
            if (sentenceLetter == ' ')
            {
                word = "";
                lettersFound = 0;
            }
            else
                // Letter in sentence matches word to find
                if (sentenceLetter == wordToCheck[lettersFound])
                {
                    lettersFound++;
                    word += sentenceLetter;
                    
                    //Checks the word located is accurate to the one to be found
                    if (lettersFound == sizeOfWord && wordToCheck == word)
                    {
                        banCount[wordToCheck]++;
                        if (file != nullptr)
                        {
                            const int firstIndex = 1;
                            int startingIndex = currentIndex - sizeOfWord + firstIndex;
                            int lastIndex = currentIndex;

                            for (int i = startingIndex; i <= lastIndex; i++)
                            {
                                tempIndexPositions[sentenceIndex].push_back(i);
                            }
                               

                            file->SetWordIndex(tempIndexPositions, sentenceIndex);
                        }
                        lettersFound = 0;
                    }
                }
                else
                {
                    lettersFound = 0;
                    word = "";
                }

            currentIndex++;
        }

        sentenceIndex++;
    }

    return (wordFound > 0) ? true : false;
}




// Starting point for the program
int main()
{
    vector<File> files;
    try
    {
        // Create a new instance of File for every file path
        for (string filePath : GetFilePathsInFolder(filesDirectory))
            files.push_back(File(filePath));
    }
    // Catches filesystem errors
    catch (const fs::filesystem_error e)
    {
        cout << e.what();
    }

    int banIndex = 0;
    int positiveIndex = 0;
    int negativeIndex = 0;
    int firstTweetIndex = 0;

    for (int i = 0; i < files.size(); i++)
        // banned file will be ignored
        if (files[i].GetFileName() == bannedFileName)
            banIndex = i;
        // positive file will be ignored
        else if (files[i].GetFileName() == positiveFileName)
            positiveIndex = i;
        // negative file will be ignored
        else if (files[i].GetFileName() == negativeFileName)
            negativeIndex = i;
        else
            firstTweetIndex = i;

    /*
    bannedWordCounts 
    string (stores bannedWord)
    int (stores count of banned word)
    */
    map<string, int> bannedWordCounts;

    for (string banWord : files[banIndex].GetFileContents())
        bannedWordCounts[banWord] = 0;

    for (File& file : files)
    {
        // ensures banned, positive and negative files are ignored
        if (file.GetFileName() != files[banIndex].GetFileName() && file.GetFileName() != files[positiveIndex].GetFileName() && file.GetFileName() != files[negativeIndex].GetFileName())
        {
            for (string banWord : files[banIndex].GetFileContents())
            {
                HasWord(file.GetFileContents(), banWord, bannedWordCounts, &file);
            }

            file.CensorFileContents();
            file.ShowStoredCensorContent();
            file.OutputCensoredTweets();
        }
    }

    // Output the counts of banned words
    cout << "Counts of Banned Words:" << endl;
    for (const auto& pair : bannedWordCounts)
    {
        cout << pair.first << ": " << pair.second << endl;
    }

}

/*
Brief: Get all file paths from a folder within a directory

Parameters:
[in] directoryPath (string that contains the path to the folder)

[out] files (vector containing all the paths to the files of a folder)
*/
vector<string> GetFilePathsInFolder(string directoryPath)
{
    /*
    fs::path and fs:directory_iterator();

    source link: https://en.cppreference.com/w/cpp/filesystem/directory_iterator/begin
    */
    fs::path filesPath = directoryPath;

    vector<string> files;

    for (fs::path file : fs::directory_iterator(filesPath))
        files.push_back(file.generic_string());

    return files;
}

/*
Brief:
Converts a string to lowercase

Parameters:
[in] sentence (the string to convert to lowercase)

[out] lowercaseSentence (the string converted to lowercase)
*/
string ToLower(string sentence)
{
    string lowercaseSentence;
    for (char letter : sentence)
    {
        lowercaseSentence += tolower(letter);
    }

    return lowercaseSentence;
}
```

---
# Summary Exercise
```cpp
#include <iostream>
#include <vector>

using namespace std;

/*
Brief:
Stores player information

Variables:
playerName (Player's name)
playerTeam (Player's Team)
numberOfGoals (Player's number of goals scored)
yellowCards (Player's number of yellow cards)
redCards (Player's number of red cards)
*/
struct SPlayer
{
	string playerName;
	string playerTeam;
	int numberOfGoals;
	int yellowCards;
	int redCards;
};

const int cinIgnoreAmount = 80;

/*
Brief:
gets a number from the user

Parameters:
[in] lowerBound (Optional Parameter) (The lowest value the user can enter)
[in] upperBound (Optional Parameter) (The highest value the user can enter)

[out] userChoice (the number the user entered)
*/
int GetNumber(int lowerBound = -1, int upperBound = -1)
{
	int userChoice;
	cin >> userChoice;

	while (cin.fail() || userChoice < lowerBound || userChoice > upperBound)
	{
		if (cin.fail())
		{
			cin.clear();
			cin.ignore(cinIgnoreAmount, '\n');

			cout << "Can only be a number" << endl;
		}

		cout << "Please select a different option: ";
	}

	return userChoice;
}

/*
Brief:
updates player records

[in] player (SPlayer struct containing player information)
*/
void updatePlayerRecord(SPlayer& player)
{
	const int lowerBound = 1, upperBound = 5;
	cout << "You can update the following fields:\n1) Player Name (Currently " << player.playerName << ")\n2) Player Team (Currently " << player.playerTeam << ")\n3) Number of goals (Currently " << player.numberOfGoals << ")\n4) Number of yellow cards (Currently " << player.yellowCards << ")\n5) Number of red cards (Currently " << player.redCards << ")" << endl;
	
	const int playerName = 1;
	const int playerTeam = 2;
	const int playerGoals = 3;
	const int playerYellowCards = 4;
	const int playerRedCards = 5;

	int userChoice = GetNumber(lowerBound, upperBound);

	if (userChoice == playerName || userChoice == playerTeam)
	{
		string userChange;
		cout << "What would you like to change this field to: " << endl;
		cin >> userChange;

		if (userChoice == playerName)
			player.playerName = userChange;
		else if (userChoice == playerTeam)
			player.playerTeam = userChange;

	}
	else
	{
		cout << "What would you like to change this field to: " << endl;
		userChoice = GetNumber();
		if (playerGoals)
			player.numberOfGoals = userChoice;
		else if (playerYellowCards)
			player.yellowCards = userChoice;
		else if (playerRedCards)
			player.redCards = userChoice;
	}

	return;
}

int main()
{
	vector<SPlayer> playerRecords =
	{
		{ "Mitchell", "UCLAN", 4, 1 , 0 },
		{ "Jobs", "Apple", 8, 0, 0 },
		{ "Edwards", "Jaguar", 0, 2, 4 },
		{ "Dan", "UCLAN", 2, 1, 0 }
	};

	const int viewAllPlayersOption = 1;
	const int editPlayerOption = 2;
	const int quitProgramOption = 3;

	cout << "Please select a menu option:\n1) View all players\n2) Update Player\nMenu Selection: " << endl;
	
	cout << endl;

	int userChoice = GetNumber(viewAllPlayersOption, quitProgramOption);

	if (userChoice == viewAllPlayersOption)
		for (SPlayer player : playerRecords)
			cout << "Player Name: " << player.playerName << endl << "Player's Team: " << player.playerTeam << endl << "Player's number of goals: " << player.numberOfGoals << endl << "Player number of yellow cards: " << player.yellowCards << endl << "Player number of red cards: " << player.redCards << endl << endl;
	else if (userChoice == editPlayerOption)
	{
		int lowerBound = 0, upperBound = playerRecords.size();
		cout << "Which player would you like to edit?" << endl;

		const int userNumAesthetic = 1;

		for (int i = 0; i < playerRecords.size(); i++)
		{
			lowerBound = i + userNumAesthetic;
			cout << i + userNumAesthetic << ") " << playerRecords[i].playerName << endl;
		}

		int userChoice = GetNumber(lowerBound, upperBound);
		updatePlayerRecord(playerRecords[userChoice - userNumAesthetic]);
	}
	else if (userChoice == quitProgramOption)
		return 0;
	else
		cout << "Invalid option" << endl;
}
```