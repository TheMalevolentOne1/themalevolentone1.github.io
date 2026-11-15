---
tags:
  - CO2402
  - Advanced-Programming
---
[[CO2402 Advanced Programming]]
[[CO2402 Lecture 6 - Working with Multiple Files]]

---
# CLeaderboard
## Header File
```cpp
#pragma once
#include <iostream>

using namespace std;

struct STeam
{
    string teamCode;
    string teamName;
    int points;
};

class CLeaderBoard
{
protected:
    STeam* mpTeamDetails;
public:
    CLeaderBoard();
    CLeaderBoard(string teamCode, string teamName, int points);
    virtual ~CLeaderBoard();
    void SetDetails(string teamCode, string teamName, int points);
    void GetDetails(string& teamCode, string& teamName, int& points);
    void AddPoints(int points);
};
```
## Source File
```cpp
#include"CLeaderBoard.h"

CLeaderBoard::CLeaderBoard() : mpTeamDetails(new STeam{ "XX", "Team Name", 0 })
{
    // Default constructor
}

CLeaderBoard::CLeaderBoard(string teamCode, string teamName, int points) : mpTeamDetails(new STeam)
{
    mpTeamDetails->teamCode = teamCode;
    mpTeamDetails->teamName = teamName;
    mpTeamDetails->points = points;
}

CLeaderBoard::~CLeaderBoard()
{
    delete mpTeamDetails;
}

void CLeaderBoard::SetDetails(string teamCode, string teamName, int points)
{
    mpTeamDetails->teamCode = teamCode;
    mpTeamDetails->teamName = teamName;
    mpTeamDetails->points = points;
}

void CLeaderBoard::GetDetails(string& teamCode, string& teamName, int& points)
{
    teamCode = mpTeamDetails->teamCode;
    teamName = mpTeamDetails->teamName;
    points = mpTeamDetails->points;
}

void CLeaderBoard::AddPoints(int points)
{
    mpTeamDetails->points += points;
}
```
# Main
```cpp
#include <iostream>
#include "CLeaderBoard.h"
using namespace std;

class CLeaderBoard;

int main()
{
    CLeaderBoard* myLeaderBoard = new CLeaderBoard("A1", "The losers", 33);

    string myTeamCode;
    string myTeamName;
    int myPoints;

    myLeaderBoard->GetDetails(myTeamCode, myTeamName, myPoints);
    cout << myTeamCode << ": " << myTeamName << " have " << myPoints << " points\n";
    myLeaderBoard->AddPoints(10);
    myLeaderBoard->GetDetails(myTeamCode, myTeamName, myPoints);
    cout << myTeamCode << ": " << myTeamName << " have " << myPoints << " points\n";

    delete myLeaderBoard;
}
```

---
[[CO2402 Lecture 6 - Working with Multiple Files]]