---
tags:
  - CO2402
  - Advanced-Programming
  - Assignment-Report
---
[[CO2402 Advanced Programming]]

---
# Assignment Feedback
```
Report is incomplete. Many sections left blank. Screenshots don't include key menus.

You achieved more than you stated here, with a few of the highest level features done. However, the report pulled the mark down - make sure to give the same attention to written reports as you do to code.
```

> [!success] 65 / 100 marks

I could not locate a video submission for this assignment.

---
# Deliverable 2 - Advanced Programming with C++
## Contents
1	Achieving a Mark of 42-48% (Mandatory)
1.1	Brief Description of the Solution	
1.2	Grade Band and Evidence
1.3	Encapsulation
2	Achieving a Mark of 52-58%
2.1	Reflection on Solution Criteria
2.2	Readability and Maintainability
2.3	Abstraction and Inheritance
3	Achieving a Mark of 62-68%
3.1	Polymorphism
3.2	Memory Management
4	Achieving a Mark of 74-100%	
4.1	Justification of Design Decisions
4.2	Testing of the Solution
4.3	Alternate Design Approaches
4.4	Overall Reflection on the Solution
References
## Achieving a Mark of 42-48% (Mandatory)
### Brief Description of the Solution
The program I have developed manages smart devices through a command-line interface, enabling users to efficiently create, and a remove home, as well as view a collection of homes. Each home contains rooms, which in turn store individual devices. Users can interact with the system to manage devices, rooms, and homes. For example, allowing them to set the brightness and colour of a Smart Light during its creation.

The development process began with designing the base class of CDevice, which is the foundation of the program, as it is the class that all devices are deprived from, such as CSmartLight, CThermostat. CSmartSpeaker, and CSecurityCamera. After implementing the base device class, I implemented the CRoom class, having it hold a vector of unique pointer variables, that contain the room’s devices. This was to group devices based on the room they were created in. After the rooms were created I created the CHome class, which holds a vector of unique pointers for all the rooms available. CHomeManager was created after CHome which has the purpose of managing the homes and holds the homes as well as enabling the user to create, remove and view homes. When the program ends a function clears all the homes to prevent memory leaks and ensure the unique pointers fall out of scope before the program finishes to ensure reduced memory leaks.
### Grade Band & Evidence
![[CO2402AHomeManagementSystem.png]]
<sub>Program Command Line Interface</sub>

Figure 1 demonstrates that the console that appears when the program runs showing the home management system and the options available to the user.

I am aiming for the 62% grade boundary, as I feel my solution meets the core requirements of the assignment in regard to that boundary. I believe my solution meets the “must have” requirements presented in the assignment brief but also incorporates elements of the “should have” criteria..

To assess that my program has met the criteria necessary for the grade I am aiming for, I have completed the “must have” requirements provided by the brief; all devices, rooms, and homes have unique ID numbers. Device, room, and home names do not have to be unique, as is the same with the manufacturer. Every class has a polymorphic implementation of the virtual void function of InteractionEvent method, which simulates a user interaction with the device.

Every device, includes a Boolean attribute for the status of the device, users can active and deactivate the status and the InteractionEvent as specified in the brief, is only interactable when the device is active and otherwise, the user is prompted with a message to activate the device before it can be used. Which depending on the device type as per the polymorphic solution I developed to allow the user to interact individually with the device type depending on the type of device they chose to create, depends on the type of interaction the device part takes in, such as the smart speakers interaction event allows for an adjustment of the volume, while the smart bulb allows adjustment of the brightness and assuming the light colour is RGB allows the user to assign a colour specified in a menu, based on the list of acceptable available colours in the brief. The CThermostat interactionEvent allows the user to interact with the current temperature allowing a setting between 0 and 100 same with the brightness levels.

![[CO2402ARoomManagementSystem.png]]
<sub>Room Management Option</sub>

As presented above the room management system covers the creation, deletion, viewing all the available rooms in the selected home, viewing a room individually, finding a device, which prompts the user for the name of the device and shows the user the device’ information and prompts the user on the device that it was found in. The user is able to duplicate a room, however an issue with my solution that prevented me from obtaining higher grades in the assignment is that the devices are not copied with the room, which I could of solved with a for loop copying the devices, which all already have unique IDs, to be able to completely duplicate the room into the home.
### Encapsulation
Encapsulation is the idea of having private and public attributes and methods within a class, which prevents access to the private members or attributes of that class. (Deitel, 2017). Which protects data and hides aspects of the implementation such as methods that are private, therefore allowing more control of within the object.

I used encapsulation with classes to ensure that attributes like the device ID were transferred through polymorphism to the other devices, to ensure that they shared the same attributes and methods. I declared private attributes like the id, manufacturer, and name, that can only be set and get through public the setters and getters for the function.
## Achieving a Mark of 52-58%
Did not complete.
## Achieving a Mark of 62-68%
Did not complete.
## Achieving a Mark of 74-100%
Did not complete.
## References
_Introduction to polymorphism in C++_ (no date) _cppreference.com_. Available at: https://en.cppreference.com/book/intro/polymorphism (Accessed: 24th November 2024).

(No date) _C++ how to program-deitel (2017).PDF at master_. Available at: https://github.com/SepidehAbadpour/AdvancedProgramming_DrKhosravi/blob/master/Paul Deitel, Harvey Deitel - C++ How to Program-Deitel (2017).pdf (Accessed: 25th November 2024).

---
# Deliverable 1 - Code & Video Submitted
## Video Submitted


## Code Submitted
>[!note] **File Extensions**
>Header File: `.h`.
>Source File: `.cpp`.

## CDevice
### Header File
```cpp
#pragma once
#include <iostream>

using std::string;

class CDevice
{
private:
	int ID = 0;
	string Manufacturer = "";
	string Name = "";
	bool Status = false;

public:
	CDevice(int id, string manufacture, string name);
	void Activate();
	void Deactivate();
	bool CheckConnection();
	virtual void InteractionEvent();
	void ViewInfo();

	// setters and getters

	void SetID(int id);
	int GetID();

	void SetManufacturer(string manufacturer);
	string GetManufacturer();

	void SetName(string name);
	string GetName();

	bool GetStatus();
};

```
### Source File
```cpp
#include "CDevice.h"

/*
Brief: Device constructor

Parameters:
(in) int id (id of the device)
(in) string manufacturer (manufacturer of the device)
(in) string name (name of the device)
*/
CDevice::CDevice(int id, string manufacturer, string name)
{
	this->ID = id;
	this->Manufacturer = manufacturer;
	this->Name = name;
}

/*
Brief: Set the Device ID

Parameters:
(in) int id (id of the device)
*/
void CDevice::SetID(int id)
{
	this->ID = id;
	return;
}

/*
Brief: Get the Device ID

Parameters:
(out) int id (id of the device)
*/
int CDevice::GetID()
{
	return this->ID;
}

/*
Brief: Set the Device Manufacturer

Parameters:
(in) string manufacturer (manufacturer of the device)
*/
void CDevice::SetManufacturer(string manufacturer)
{
	this->Manufacturer = manufacturer;
	return;
}

/*
Brief: Get the Device Manufacturer

Parameters:
(out) string manufacturer (manufacturer of the device)
*/
string CDevice::GetManufacturer()
{
	return this->Manufacturer;
}

/*
Brief: Set the Device Name

Parameters:
(out) string name (name of the device)
*/
void CDevice::SetName(string name)
{
	this->Name = name;
	return;
}

/*
Brief: Get the Device name

Parameters:
(out) string name (name of the device)
*/
string CDevice::GetName()
{
	return this->Name;
}

/*
Brief: Change device status to true
*/
void CDevice::Activate()
{
	if (this->Status == true)
		std::cout << this->Name << " is already activate" << '\n';
	else
	{
		std::cout << this->Name << " has been activated" << '\n';
		this->Status = true;
	}
	return;
}

/*
Brief: Change device status to false
*/
void CDevice::Deactivate()
{
	if (this->Status == false)
		std::cout << this->Name << " is already deactivated" << '\n';
	else
	{
		std::cout << this->Name << "has been deactivated" << '\n';
		this->Status = false;
	}
	return;
}

/*
Brief: Check device connection

Parameters:
(out) true
*/
bool CDevice::CheckConnection()
{
	return true;
}

/*
Brief: View Device ID, Name, and Manufacturer
*/
void CDevice::ViewInfo()
{
	std::cout << "Device ID: " << this->ID << "\n" << "Device Manufacturer: " << this->Manufacturer << '\n' << "Device Name: " << this->Name;
	return;
}

/*
Brief: Device user interaction event
*/
void CDevice::InteractionEvent()
{
	if (this->Status)
		std::cout << Name << " has been interacted with" << '\n';
	else
		std::cout << Name << " must be active to be interacted with." << '\n';
	return;
}

/*
Brief: Get Device status
*/
bool CDevice::GetStatus()
{
	return this->Status;
}
```

## CHome
### Header File
```cpp
#pragma once
#include <iostream>
#include <vector>

using std::string;

class CRoom;

class CHome
{
private:
	int homeID = 0;
	std::string homeName = "";
	std::vector<std::unique_ptr<CRoom>> homeRooms;
public:
	CHome(int id, std::string homeName);
	~CHome();
	void ClearRooms();
	void CreateRoom(string roomName);
	int GetID();
	int GetNewID();
	void SetID(int& id);
	void ViewAllRooms();
	void FindDevice(string& roomName, string& deviceName);
	void DuplicateRoom(CRoom* room);
	void SetName(string homeName);
	std::string GetName();
	void RemoveRoom(int& id);
	CRoom* GetRoomByID(int& id);
};
```
### Source File
```cpp
#include "CHome.h"
#include "CRoom.h"
#include <vector>

const int addNoDups = 1;

/*
Brief: Constructor for CHome class, initializes a home with an ID and name

Parameters:
(in) int id (unique identifier for the home)
(in) string homeName (name of the home)
*/
CHome::CHome(int id, string homeName)
{
    this->homeID = id;
    this->homeName = homeName;
};

/*
Brief: Destructor for CHome class, clears the homeRooms vector to free memory
*/
CHome::~CHome()
{
    this->homeRooms.clear();
}

/*
Brief: Creates a new room and adds it to the homeRooms vector

Parameters:
(in) string roomName (name of the new room)
*/
void CHome::CreateRoom(string roomName)
{
    std::unique_ptr<CRoom> newRoom = std::make_unique<CRoom>(this->homeRooms.size() + addNoDups, roomName);
    this->homeRooms.push_back(std::move(newRoom));
    return;
};

/*
Brief: Generates a new unique ID for a room based on current room count

Parameters:
(out) int (new unique ID for a room)
*/
int CHome::GetNewID()
{
    return this->homeRooms.size() + addNoDups;
}

/*
Brief: Removes a room from the homeRooms vector by its ID

Parameters:
(in) int& id (ID of the room to remove)
*/
void CHome::RemoveRoom(int& id)
{
    for (int i = 0; i < this->homeRooms.size(); i++)
    {
        if (this->homeRooms[i]->GetID() == id)
            homeRooms.erase(homeRooms.begin() + i);
    }
}

/*
Brief: Displays all rooms in the home with their IDs and names
*/
void CHome::ViewAllRooms()
{
    if (this->homeRooms.empty())
    {
        std::cout << "No Rooms Available." << '\n';
        return;
    }

    for (std::unique_ptr<CRoom>& room : homeRooms)
        std::cout << "\nRoom ID: " << room->GetID() << "\nRoom Name: " << room->GetName() << '\n';
    return;
};

/*
Brief: Searches for a device by name within a specified room

Parameters:
(in) std::string& roomName (name of the room to search in)
(in) std::string& deviceName (name of the device to find)
*/
void CHome::FindDevice(std::string& roomName, std::string& deviceName)
{
    bool roomFound = false;
    for (const std::unique_ptr<CRoom>& room : homeRooms)
    {
        if (room->GetName() == roomName)
        {
            roomFound = true;
            const std::vector<std::unique_ptr<CDevice>>& devices = room->GetDevices();
            for (const std::unique_ptr<CDevice>& device : devices)
            {
                if (device->GetName() == deviceName)
                {
                    std::cout << "Device: " << device->GetID() << "\nFound in Room: " << room->GetName() << "\nIn Home: " << this->GetName() << '\n';
                    return;
                }
            }
        }
    }
    if (roomFound)
    {
        std::cout << "Device not found in the specified room.\n";
    }
    else
    {
        std::cout << "Room not found.\n";
    }
}

/*
Brief: Duplicates an existing room by creating a new room with the same name

Parameters:
(in) CRoom* room (pointer to the room to duplicate)
*/
void CHome::DuplicateRoom(CRoom* room)
{
    this->CreateRoom(room->GetName());
    std::cout << "Room " << room->GetID() << " has been duplicated";
    return;
};

/*
Brief: Sets the name of the home

Parameters:
(in) string homeName (new name for the home)
*/
void CHome::SetName(string homeName)
{
    this->homeName = homeName;
    return;
}

/*
Brief: Retrieves the name of the home

Parameters:
(out) string (current name of the home)
*/
string CHome::GetName()
{
    return this->homeName;
}

/*
Brief: Sets the ID of the home

Parameters:
(in) int& id (new ID for the home)
*/
void CHome::SetID(int& id)
{
    this->homeID = id;
}

/*
Brief: Get the Home ID

Parameters:
(out) int (id of the home)
*/
int CHome::GetID()
{
    return this->homeID;
}

/*
Brief: Find a room by its ID

Parameters:
(in) int& id (id of room)
(out) CRoom* (pointer to the found room or nullptr if not found)
*/
CRoom* CHome::GetRoomByID(int& id)
{
    bool roomFound = false;
    for (std::unique_ptr<CRoom>& room : homeRooms)
    {
        if (id == room->GetID())
        {
            roomFound = true;
            return room.get();
        }
    }
    if (!roomFound)
        std::cout << "No Room was found." << '\n';

    return nullptr;
}
```

## CHomeManager
### Header File
```cpp
#pragma once
#include <vector>
#include <memory>
#include "CHome.h"

class CHomeManager
{
private:
	std::vector<std::unique_ptr<CHome>> homes;
public:
	void CreateHome(int id, std::string& name);
	void ShowAllHomes();
	int GetNewID();
	void RemoveHome(int& id);
	CHome* GetHomeByID(int& id);
	void ClearHomes();
};
```
### Source File
```cpp
#include "CHomeManager.h"
#include "CHome.h"
#include "CRoom.h"
#include <memory>
#include <iostream>

const int addNoDups = 1;

/*
Brief: Creates a new home and adds it to the homes vector

Parameters:
(in) int id (unique identifier for the new home)
(in) std::string& name (name of the new home)
*/
void CHomeManager::CreateHome(int id, std::string& name)
{
    std::unique_ptr<CHome> newHome = std::make_unique<CHome>(id, name);
    homes.push_back(std::move(newHome));
    return;
}

/*
Brief: Generates a new unique ID for a home based on current home count

Parameters:
(out) int (new unique ID for a home)
*/
int CHomeManager::GetNewID()
{
    return this->homes.size() + addNoDups;
}

/*
Brief: Displays all homes with their IDs and names
*/
void CHomeManager::ShowAllHomes()
{
    if (this->homes.empty())
    {
        std::cout << "No Homes Available." << '\n';
        return;
    }

    for (std::unique_ptr<CHome>& home : this->homes)
    {
        std::cout << "Home ID: " << home->GetID() << " Home Name: " << home->GetName() << "\n";
    }
    return;
}

/*
Brief: Finds a home by its ID

Parameters:
(in) int& id (ID of the home to find)
(out) CHome* (pointer to the found home or nullptr if not found)
*/
CHome* CHomeManager::GetHomeByID(int& id)
{
    for (std::unique_ptr<CHome>& home : homes)
    {
        if (id == home->GetID())
            return home.get();
    }
    std::cout << "No Home was found." << '\n';
    return nullptr;
}

/*
Brief: Clears all homes from the homes vector, freeing associated memory
*/
void CHomeManager::ClearHomes()
{
    for (auto& home : homes)
        home.reset();
    homes.clear();
    std::cout << "Homes Cleared." << '\n';
    return;
}

/*
Brief: Removes a home from the homes vector by its ID

Parameters:
(in) int& id (ID of the home to remove)
*/
void CHomeManager::RemoveHome(int& id)
{
    bool removedHome = false;
    for (int i = 0; i < homes.size(); i++) {
        if (homes[i]->GetID() == id) {
            homes.erase(homes.begin() + i);
            removedHome = true;
            break;
        }
    }

    if (removedHome)
    {
        std::cout << "Home was removed." << '\n';
        return;
    }
    else
    {
        std::cout << "Home was not removed." << '\n';
        return;
    }
}
```

## CRoom
### Header File
```cpp
#pragma once
#include "CDevice.h"
#include <vector>
#include <string>

class CHome;

class CRoom
{
private:
	int roomID = 0;
	string roomName = "";
	std::vector<std::unique_ptr<CDevice>> roomDevices;
public:
	CRoom(int id, string name);
	void SetID(int id);
	int GetID();

	void SetName(string name);
	string GetName();
	int GetNewID();

	void AddDevice(std::unique_ptr<CDevice>&& device);
	void RemoveDevice(int& id);
	void ViewAllDevices();
	void ActivateAll();
	std::vector<std::unique_ptr<CDevice>>& GetDevices();
};
```
### Source File
```cpp
#include "CDevice.h"
#include "CRoom.h"
#include "CHome.h"
#include <vector>
#include <iostream>
#include <memory>

using namespace std;

const int addNoDups = 1;

/*
Brief: Constructor for CRoom class, initializes a room with an ID and name

Parameters:
(in) int id (id for the room)
(in) string name (name of the room)
*/
CRoom::CRoom(int id, string name)
{
    this->roomID = id;
    this->roomName = name;
}

/*
Brief: Adds a device to the roomDevices vector using move semantics

Parameters:
(in) std::unique_ptr<CDevice>&& device (unique pointer to the device to add)
*/
void CRoom::AddDevice(std::unique_ptr<CDevice>&& device)
{
    this->roomDevices.push_back(std::move(device));
    return;
}

/*
Brief: Removes a device from the roomDevices vector by its ID

Parameters:
(in) int& id (ID of the device to remove)
*/
void CRoom::RemoveDevice(int& id)
{
    bool removedRoom = false;
    for (int i = 0; i < this->roomDevices.size(); i++)
    {
        if (this->roomDevices[i]->GetID() == id)
        {
            roomDevices.erase(roomDevices.begin() + i);
            removedRoom = true;
            break;
        }
    }

    if (removedRoom)
        cout << "Device was removed." << '\n';  // Corrected "Room" to "Device"
    else
        cout << "Device was not removed." << '\n';  // Corrected "Room" to "Device"
    return;
}

/*
Brief: Activates all devices in the room
*/
void CRoom::ActivateAll()
{
    if (roomDevices.empty())
    {
        std::cout << "No Devices to Activate.\n";
        return;
    }

    for (std::unique_ptr<CDevice>& device : roomDevices)
    {
        device->Activate();
    }
}

/*
Brief: Gets the ID of the room

Parameters:
(out) int (current ID of the room)
*/
int CRoom::GetID()
{
    return this->roomID;
}

/*
Brief: Sets the ID of the room

Parameters:
(in) int id (new ID for the room)
*/
void CRoom::SetID(int id)
{
    this->roomID = id;
    return;
}

/*
Brief: Gets the name of the room

Parameters:
(out) string (current name of the room)
*/
string CRoom::GetName()
{
    return this->roomName;
}

/*
Brief: Generates a new unique ID for a device based on current device count

Parameters:
(out) int (new unique ID for a device)
*/
int CRoom::GetNewID()
{
    return this->roomDevices.size() + addNoDups;
}

/*
Brief: Sets the name of the room

Parameters:
(in) string name (new name for the room)
*/
void CRoom::SetName(string name)
{
    this->roomName = name;
}

/*
Brief: Returns a reference to the vector of devices in the room

Parameters:
(out) std::vector<unique_ptr<CDevice>>& (reference to the room's device vector)
*/
std::vector<unique_ptr<CDevice>>& CRoom::GetDevices()
{
    return roomDevices;
}

/*
Brief: Displays all devices in the room with their ID, manufacturer, and name
*/
void CRoom::ViewAllDevices()
{
    if (this->roomDevices.empty())
    {
        cout << "No Devices Available." << '\n';  // Corrected "Rooms" to "Devices"
        return;
    }
    for (unique_ptr<CDevice>& device : roomDevices)
        std::cout << "Device ID: " << device->GetID() << '\n' << "Device Manufacturer: " << device->GetManufacturer() << '\n' << "Device Name: " << device->GetName() << '\n';
}
```

## CSecurityCamera
### Header File
```cpp
#pragma once
#include "CDevice.h"

class CSecurityCamera : public CDevice
{
private:
	string cameraQuality = "";
	string powerSupply = "";
public:
	CSecurityCamera(int id, string manufacturer, string name, string CameraQuality, string powerSupply);
	virtual void InteractionEvent();
};
```
### Source File
```cpp
#include "CSecurityCamera.h"
#include "CDevice.h"

CSecurityCamera::CSecurityCamera(int id, string manufacturer, string name, string cameraQuality, string powerSupply) : CDevice(id, manufacturer, name)
{
	this->cameraQuality = cameraQuality;
	this->powerSupply = powerSupply;
}

void CSecurityCamera::InteractionEvent()
{
	if (this->GetStatus() == false)
		std::cout << this->GetName() << " is not active. Therefore cannot be interacted with." << '\n';
	else
		std::cout << "now viewing camera: " << this->GetName() << '\n';
}
```

## CSmartLight
### Header File
```cpp
#pragma once
#include "CDevice.h"
class CSmartLight : public CDevice
{
private:
	int brightnessLevel = 0;
	string lightColour = "";
public:
	CSmartLight(int id, string manufacturer, string name, int brightness, string colour);
	virtual void InteractionEvent(int brightness);
	int GetBrightness();
	string GetColour();
};
```
### Source File
```cpp
#include "CSmartLight.h"
#include <iostream>

using namespace std;

CSmartLight::CSmartLight(int id, std::string manufacturer, std::string name, int brightnessLevel, string colour) : CDevice(id, manufacturer, name)
{
	this->brightnessLevel = brightnessLevel;
	this->lightColour = colour;
}

void CSmartLight::InteractionEvent(int brightness)
{
	if (brightness > 100)
	{
		std::cout << "Temperature cannot be above 100." << '\n';
		return;
	}
	else if (brightness < 0)
	{
		std::cout << "Temperature cannot be below 0." << '\n';
		return;
	}

	if (this->lightColour == "RGB")
	{
		int colourType = 0;
		do
		{
			cout << "1) Warm White\n2) Cool White\n3) RGB" << '\n';
			cout << "What Colour would you like to set?: " << '\n';
			cin >> colourType;

			if (colourType == 1)
			{
				this->lightColour = "Warm White";
			}
			else if (colourType == 2)
			{
				this->lightColour = "Cool White";
			}
			else if (colourType == 3)
			{
				this->lightColour = "RGB";
			}
		} while (colourType != 1 && colourType != 2 && colourType != 3);
		
	}

	this->brightnessLevel = brightness;
}

string CSmartLight::GetColour()
{
	return this->lightColour;
}
```

## CSmartSpeaker
### Header File
```cpp
#pragma once
#include "CDevice.h"
class CSmartSpeaker : public CDevice
{
private:
	int volume = 0;
public:
	CSmartSpeaker(int id, string manufacturer, string name, int volume);
	int GetVolume();
	virtual void InteractionEvent(int volume);
};
```
### Source File
```cpp
#include "CSmartSpeaker.h"

/*
Brief: Constructor for CSmartSpeaker class, initializes a smart speaker with an ID, manufacturer, name, and initial volume

Parameters:
(in) int id (unique identifier for the smart speaker)
(in) string manufacturer (manufacturer name of the smart speaker)
(in) string name (name assigned to the smart speaker)
(in) int volume (initial volume setting for the smart speaker)
*/
CSmartSpeaker::CSmartSpeaker(int id, string manufacturer, string name, int volume) : CDevice(id, manufacturer, name)
{
    this->volume = volume;
}

/*
Brief: Overrides InteractionEvent to adjust the smart speaker's volume

Parameters:
(in) int volume (new volume value to set)
*/
void CSmartSpeaker::InteractionEvent(int volume)
{
    if (volume <= 100 && volume >= 0)
    {
        this->volume = volume;
    }
}

/*
Brief: Gets the current volume of the smart speaker

Parameters:
(out) int (current volume value)
*/
int CSmartSpeaker::GetVolume()
{
    return this->volume;
}
```

## CThermostat
### Header File
```cpp
#pragma once
#include "CDevice.h"
class CThermostat : public CDevice
{
private:
	int temperature = 0;
public:
	CThermostat(int id, string manufacturer, string name, int temperature);
	virtual void InteractionEvent(int temperature);
	int GetTemperature();
};
```
### Source File
```cpp
#include "CThermostat.h"
#include "CDevice.h"

/*
Brief: Constructor for CThermostat class, initializes a thermostat with an ID, manufacturer, name, and initial temperature

Parameters:
(in) int id (unique identifier for the thermostat)
(in) string manufacturer (manufacturer name of the thermostat)
(in) string name (name assigned to the thermostat)
(in) int temperature (initial temperature setting for the thermostat)
*/
CThermostat::CThermostat(int id, string manufacturer, string name, int temperature) : CDevice(id, manufacturer, name)
{
    this->temperature = temperature;
}

/*
Brief: Overrides InteractionEvent to adjust the thermostat's temperature, with validation

Parameters:
(in) int temperature (new temperature value to set)
*/
void CThermostat::InteractionEvent(int temperature)
{
    if (temperature > 100)
    {
        std::cout << "Temperature cannot be above 100." << '\n';
        return;
    }
    else if (temperature < 0)
    {
        std::cout << "Temperature cannot be below 0." << '\n';
        return;  // Added for consistency
    }

    this->temperature = temperature;
}

/*
Brief: Gets the current temperature of the thermostat

Parameters:
(out) int (current temperature value)
*/
int CThermostat::GetTemperature()
{
    return this->temperature;
}
```

## Main Source Program
```cpp
#include <iostream>
#include <string>
#include <memory>
#include "CHomeManager.h"
#include "CHome.h"
#include "CRoom.h"
#include "CDevice.h"
#include "CThermostat.h"
#include "CSecurityCamera.h"
#include "CSmartLight.h"
#include "CSmartSpeaker.h"
#define _CRTDBG_MAP_ALLOC
#include <stdlib.h>
#include <crtdbg.h>
#ifdef _DEBUG
#define DBG_NEW new ( _NORMAL_BLOCK , __FILE__ , __LINE__ )
#else
#define DBG_NEW new
#endif

/*
Brief: Returns string in lowercase

Parameters:
(in) stringToLower (String in any case)/
(out) stringToLower (String returned edited into lowercase)
*/
std::string& ToLower(std::string& stringToLower)
{
    for (int i = 0; i < stringToLower.length(); i++)
        stringToLower[i] = tolower(stringToLower[i]); // Pass by reference change to lowercase.
    return stringToLower;
}

/*
Brief: Contains the enum variables for the Home menu options
*/
enum HomeManageMenuOptions {
    CreateHome = 1,
    RemoveHome = 2,
    ShowAllHomes = 3,
    EnterHome = 4,
    Exit = 5
};

/*
Brief: Contains the enum variables for the Room menu options
*/
enum HomeMenuOptions {
    CreateRoom = 1,
    RemoveRoom = 2,
    ShowAllRooms = 3,
    EnterRoom = 4,
    FindADevice = 5,
    ActivateAllDevices = 6,
    DuplicateARoom = 7,
    RoomExit = 8
};

/*
Brief: Contains the enum variables for the Device menu options
*/
enum DeviceMenuOptions {
    CreateDevice = 1,
    RemoveDevice = 2,
    ActivateDevice = 3,
    DeactivateDevice = 4,
    ShowAllDevices = 5,
    InteractionEvent = 6,
    DeviceExit = 7
};

/*
Brief: The room the user has chosen to enter to edit the devices of.

Parameters:
(in) room
*/
void EnterTheRoom(CRoom& room)
{
    int RoomMenuSelect = 0;
    do {
        system("cls");
        std::cout << "Device Management System:\n";
        std::cout << "1) Create Device\n2) Remove Device\n3) Activate Device\n4) Deactivate Device\n5) Show All Devices\n6) Interact with Device\n7) Exit\n";
        std::cout << "\nEnter Menu Option: ";
        std::cin >> RoomMenuSelect;
        if (std::cin.fail()) {
            std::cin.clear();
            std::cin.ignore(10000, '\n');
            std::cout << "Invalid input. Please enter a number.\n";
            system("pause");
        }
        else {
            std::cin.ignore(10000, '\n');
            int deviceID = 0;
            switch (RoomMenuSelect)
            {
            case CreateDevice:
            {
                std::string deviceType;
                std::cout << "Security Camera\nThermostat\nSmart Light\nSmart Speaker\n";
                std::cout << "Enter device type: ";
                std::getline(std::cin, deviceType);
                std::string deviceManufacturer;
                std::cout << "Enter Device Manufacturer: ";
                std::getline(std::cin, deviceManufacturer);
                std::string deviceName;
                std::cout << "Enter Device Name: ";
                std::getline(std::cin, deviceName);
                std::unique_ptr<CDevice> newDevice = nullptr;
                if (deviceType == "security camera") {
                    std::string cameraQualityStr;
                    int cameraQuality = 0;
                    do {
                        std::cout << "1) 720p\n2) 1080p\n3) 4K\n";
                        std::cout << "What resolution would you like to set?: ";
                        std::cin >> cameraQuality;
                        if (cameraQuality == 1)
                            cameraQualityStr = "720p";
                        else if (cameraQuality == 2)
                            cameraQualityStr = "1080p";
                        else if (cameraQuality == 3)
                            cameraQualityStr = "4K";
                    } while (cameraQuality < 1 || cameraQuality > 3);
                    std::cin.ignore(10000, '\n');
                    std::string powerSupplyStr;
                    int powerSupply = 0;
                    do {
                        std::cout << "1) Mains Powered\n2) Battery\n3) Mains + Solar\n";
                        std::cout << "What power supply would you like to set?: ";
                        std::cin >> powerSupply;
                        if (powerSupply == 1)
                            powerSupplyStr = "Mains Powered";
                        else if (powerSupply == 2)
                            powerSupplyStr = "Battery";
                        else if (powerSupply == 3)
                            powerSupplyStr = "Mains + Solar";
                    } while (powerSupply < 1 || powerSupply > 3);
                    std::cin.ignore(10000, '\n');
                    newDevice = std::make_unique<CSecurityCamera>(room.GetNewID(), deviceManufacturer, deviceName, cameraQualityStr, powerSupplyStr);
                }
                else if (deviceType == "thermostat") {
                    newDevice = std::make_unique<CThermostat>(room.GetNewID(), deviceManufacturer, deviceName, 20);
                }
                else if (deviceType == "smart light") {
                    std::string colourTypeStr;
                    int colourType = 0;
                    do {
                        std::cout << "1) Warm White\n2) Cool White\n3) RGB\n";
                        std::cout << "What Colour would you like to set?: ";
                        std::cin >> colourType;
                        std::cin.ignore(10000, '\n');
                        if (colourType == 1)
                            colourTypeStr = "Warm White";
                        else if (colourType == 2)
                            colourTypeStr = "Cool White";
                        else if (colourType == 3)
                            colourTypeStr = "RGB";
                    } while (colourType < 1 || colourType > 3);
                    newDevice = std::make_unique<CSmartLight>(room.GetNewID(), deviceManufacturer, deviceName, 50, colourTypeStr);
                }
                else if (deviceType == "smart speaker")
                {
                    int volumeLevel = 0;
                    do {
                        std::cout << "What volume would you like to set? 0 - 100: ";
                        std::cin >> volumeLevel;
                        std::cin.ignore(10000, '\n');
                    } while (volumeLevel > 100 || volumeLevel > 0);
                    newDevice = std::make_unique<CSmartSpeaker>(room.GetNewID(), deviceManufacturer, deviceName, volumeLevel);
                }
                if (newDevice) {
                    room.AddDevice(std::move(newDevice));
                    std::cout << "Device created successfully.\n";
                    system("pause");
                }
                else {
                    std::cout << "Invalid device type. Supported types: security camera, thermostat, smart light.\n";
                    system("pause");
                }
                break;
            }
            case RemoveDevice:
            {
                std::cout << "Enter Device ID: ";
                std::cin >> deviceID;
                std::cin.ignore(10000, '\n');
                room.RemoveDevice(deviceID);
                system("pause");
                break;
            }
            case ShowAllDevices:
                room.ViewAllDevices();
                system("pause");
                break;
            case InteractionEvent:
                std::cout << "Enter Device ID: ";
                std::cin >> deviceID;
                std::cin.ignore(10000, '\n');
                if (room.GetDevices().empty()) {
                    std::cout << "Room has no devices.\n";
                    system("pause");
                }
                else {
                    bool found = false;
                    for (const auto& device : room.GetDevices()) {
                        if (deviceID == device->GetID()) {
                            device->InteractionEvent();
                            found = true;
                            system("pause");
                            break;
                        }
                    }
                    if (!found) {
                        std::cout << "Device not found.\n";
                        system("pause");
                    }
                }
                break;
            case ActivateDevice:
                std::cout << "Enter Device ID: ";
                std::cin >> deviceID;
                std::cin.ignore(10000, '\n');
                {
                    bool found = false;
                    for (const auto& device : room.GetDevices()) {
                        if (deviceID == device->GetID()) {
                            device->Activate();
                            std::cout << "Device activated.\n";
                            found = true;
                            break;
                        }
                    }
                    if (!found) {
                        std::cout << "Device not found.\n";
                    }
                    system("pause");
                }
                break;
            case DeactivateDevice:
                std::cout << "Enter Device ID: ";
                std::cin >> deviceID;
                std::cin.ignore(10000, '\n');
                {
                    bool found = false;
                    for (const auto& device : room.GetDevices()) {
                        if (deviceID == device->GetID()) {
                            device->Deactivate();
                            std::cout << "Device deactivated.\n";
                            found = true;
                            break;
                        }
                    }
                    if (!found) {
                        std::cout << "Device not found.\n";
                    }
                    system("pause");
                }
                break;
            case DeviceExit:
                std::cout << "Exiting Device Management.\n";
                system("pause");
                break;
            default:
                std::cout << "Invalid option. Try again.\n";
                system("pause");
            }
        }
    } while (RoomMenuSelect != DeviceExit);
}

/*
Brief: The home the user has chosen to enter to edit the rooms of.

Parameters:
(in) home
*/
void EnterTheHome(CHome& home)
{
    int HomeMenuSelect = 0;
    do {
        system("cls");
        std::cout << "Room Management System:\n";
        std::cout << "1) Create Room\n2) Remove Room\n3) Show All Rooms\n4) View A Room\n5) Find Device\n6) Activate All Devices\n7) Duplicate A Room\n8) Exit\n";
        std::cout << "Enter Menu Option: ";
        std::cin >> HomeMenuSelect;
        if (std::cin.fail()) {
            std::cin.clear();
            std::cin.ignore(10000, '\n');
            std::cout << "Invalid input. Please enter a number.\n";
            system("pause");
        }
        else {
            std::cin.ignore(10000, '\n');
            int roomID = 0;
            string roomName = "";
            string deviceName = "";
            switch (HomeMenuSelect) {
            case CreateRoom:
            {
                std::string roomName;
                std::cout << "Enter Room Name: ";
                std::getline(std::cin, roomName);
                home.CreateRoom(roomName);
                std::cout << "Room created successfully.\n";
                system("pause");
                break;
            }
            case RemoveRoom:
            {
                std::cout << "Enter Room ID: ";
                std::cin >> roomID;
                std::cin.ignore(10000, '\n');
                home.RemoveRoom(roomID);
                system("pause");
                break;
            }
            case ShowAllRooms:
                home.ViewAllRooms();
                system("pause");
                break;
            case EnterRoom:
            {
                std::cout << "Enter Room ID: ";
                std::cin >> roomID;
                std::cin.ignore(10000, '\n');
                CRoom* room = home.GetRoomByID(roomID);
                if (room != nullptr) {
                    EnterTheRoom(*room);
                }
                else 
                {
                    std::cout << "Room not found.\n";
                    delete room;
                    system("pause");
                }
                break;
            }
            case FindADevice:
            {
                std::cout << "Enter Room Name: ";
                std::getline(std::cin, roomName);
                std::cin.ignore(10000, '\n');

                std::cout << "Enter Device Name: ";
                std::getline(std::cin, deviceName);
                std::cin.ignore(10000, '\n');
                home.FindDevice(roomName, deviceName);
                system("pause");
                break; 
            }
            case ActivateAllDevices:
            {
                std::cout << "Enter Room ID: ";
                std::cin >> roomID;
                std::cin.ignore(10000, '\n');
                CRoom* room = home.GetRoomByID(roomID);
                if (room) {
                    room->ActivateAll();
                    std::cout << "All devices activated in room.\n";
                    system("pause");
                }
                else {
                    std::cout << "Room not found.\n";
                    delete room;
                    system("pause");
                }
                break;
            }
            case DuplicateARoom:
            {
                std::cout << "Enter Room ID: ";
                std::cin >> roomID;
                std::cin.ignore(10000, '\n');
                CRoom* room = home.GetRoomByID(roomID);
                if (room != nullptr) {
                    home.DuplicateRoom(room);
                    system("pause");
                }
                else {
                    std::cout << "Room not found.\n";
                    delete room; // delete raw pointer to avoid memory leaks.
                    system("pause");
                }
                break;
            }
            case RoomExit:
                std::cout << "Exiting Room Management.\n";
                system("pause");
                break;
            default:
                std::cout << "Invalid option. Try again.\n";
                system("pause");
            }
        }
    } while (HomeMenuSelect != RoomExit);
}

/*
Brief: Home Manager main starting point.
*/
int main()
{
    int HomeManageMenuSelect = 0;
    std::unique_ptr<CHomeManager> manager = std::make_unique<CHomeManager>();

    do {
        system("cls");
        std::cout << "Home Management System:\n";
        std::cout << "1) Create Home\n2) Remove Home\n3) Show All Homes\n4) View A Home\n5) Exit\n";
        std::cout << "Enter Menu Option: ";
        std::cin >> HomeManageMenuSelect;
        if (std::cin.fail()) {
            std::cin.clear();
            std::cin.ignore(10000, '\n');
            std::cout << "Invalid input. Please enter a number.\n";
            system("pause");
        }
        else {
            std::cin.ignore(10000, '\n');
            switch (HomeManageMenuSelect) {
            case CreateHome:
            {
                std::string homeName;
                std::cout << "Enter Home Name: ";
                std::getline(std::cin, homeName);
                manager->CreateHome(manager->GetNewID(), homeName);
                std::cout << "Home created successfully.\n";
                system("pause");
                break;
            }
            case RemoveHome:
            {
                int homeID = 0;
                std::cout << "Enter Home ID: ";
                std::cin >> homeID;
                std::cin.ignore(10000, '\n');
                manager->RemoveHome(homeID);
                break;
            }
            case ShowAllHomes:
                manager->ShowAllHomes();
                system("pause");
                break;
            case EnterHome:
            {
                int homeID = 0;
                std::cout << "Enter Home ID: ";
                std::cin >> homeID;
                std::cin.ignore(10000, '\n');
                CHome* home = manager->GetHomeByID(homeID);
                if (home != nullptr) {
                    EnterTheHome(*home);
                }
                else {
                    std::cout << "Home not found.\n";
                    delete home;
                    system("pause");
                }
                break;
            }
            case Exit:
                std::cout << "Exiting Home Management System.\n";
                system("pause");
                break;
            default:
                std::cout << "Invalid option. Try again.\n";
                system("pause");
            }
        }
    } while (HomeManageMenuSelect != Exit);
    manager->ClearHomes();
    _CrtDumpMemoryLeaks();
    return 0;
}
```

---
[[CO2402 Advanced Programming]]