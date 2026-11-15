---
tags:
  - CO1301
  - Games-Concepts
  - Assignment-Report
---
[[CO1301 Games Concepts]]
[[CO1301 Assignment 1]]

---
# Assignment Feedback
No feedback was provided.

>[!success] 53 / 100 marks

---
# Assignment Tips
## Tip 1
To implement reading from file, you can use STL Vectors to store models of isles, checkpoints, etc. You can use `push_back` and clear methods (to add new object and clear the vector of objects respectively), see [https://en.cppreference.com/w/cpp/container/vector](https://en.cppreference.com/w/cpp/container/vector).
## Tip 2
Leaning of objects is rotation in one of axes.
## Tip 3
You can store rotation for all checkpoints in an array or STL vector (e.g. 0 - no rotation, 1 - rotation by 90 degrees). After that you can make detection of checkpoints crossing in one for loop.
## Tip 4
You can attach particle systems to cars (`attachToParent` method).

---
# Race Car Report
## The grade you expect to get
For the assignment I am expecting to achieve a pass grade, as it is the only grade I have met all of the necessary requirements of.
## The length of your hover-car in TL-Engine units
2.5 TL engine units is the length of the hover car in my game.
## The length of the hover-car in metres
1.25 metres is the length of the hover car.
## The scale of objects your game (units / metre)
I did not alter the scale for the objects in my game and therefore the scale goes to default which is 1. Which makes them 0.5 metres in length for all the game objects that I added. Including walls, isles and checkpoints.
## The coefficient of drag
-0.2 is the coefficient of drag I set for the hover car in my game.
## The maximum thrust force you apply (length of thrust vector) in TL-Engine units and scaled to represent acceleration in metres/second/second
12.5 m/s^2 is the maximum thrust of force.
## How collision works occurs, between scene objects and the hover car
The collision for the checkpoints and the hover car uses Sphere To Sphere Collision, a function created to detect, collision between the sphere radius of the hover car, and the sphere radius of the checkpoint, when collided the program ends the momentum to the car preventing it to move any further from that point until it reverses, which adjusts the momentum of the hover car.

The isles and walls, use a Sphere To Box collision function, which was created to detect the collision between the sphere radius of the hover car, and the sphere radius of the checkpoint which when collided ends the momentum of the hover car, preventing it to proceed forward until it reverses.
## Explaining the logic behind the functions
### Sphere To Box Collision
The purpose of this function is to detect collision between a sphere, and a box. The sphere in the game is the hover car, and the box is the obstacle that the sphere is being detected to have hit. To determine whether collision has occurred, the function takes the minimum corner coordinates and the maximum corner coordinates forming a box, it then takes the radius of the sphere and the current position of the sphere (the hover car) it checks if the sphere has entered the inside of the boundary for the box, and if it has produces a true result to indicate collision has occurred.
### Sphere To Sphere Collision
This function is to detect collision between a sphere and a sphere. For my game the sphere is the car, and the other sphere is the stands for the checkpoint object. It takes two radii for the spheres, and calculates using the function distanceSquared a comparison with the sum of the two separate radii squared. In the event that the distance squared of the sphere radii, is less than or equal to the sum of then radii squared, then a collision has occurred, and the momentum of the hover car is stopped.
### Distanced Squared
The distanced squared function takes two factors and times them with themselves, so to the power of 2 and then adds them together and returns that value with indicates the distance between two objects using the coordinates from the vectors.
### Add Three
Add three adds the coordinates of three different vectors together based on their x and z values, from the vector2D struct, and then returns in a new Vector2D the result of the three vectors added together based on the total combined for their x and z values separately.
### Scalar
Takes a number and a Vector2D and times the number against the x and z values of the vector and returns the result in a Vector2D
## Game Map
![[CO1301 A2 - Game Map.png]]

---
# Assignment Code
```cpp
// Assignent 2 Race Car
// Games Concepts (CO1301)
 
#include "TL-Engine11.h" // TL-Engine11 include file and namespace
#include <vector>
#include <iostream>
using namespace std;
using namespace tle;

struct Vector3D
{
	float x;
	float y;
	float z;
};

struct Vector2D
{
	float x;
	float z;
};

/*
Functions defined before initalising
*/
Vector2D scalar(float s, Vector2D v);
Vector2D addThree(Vector2D v1, Vector2D v2, Vector2D v3);
bool sphereToBoxCollision(Vector2D Vmin, Vector2D Vmax, float radius, Vector2D currPos);
float distanceSquared(Vector2D v1, Vector2D v2);
bool sphereToSphereCollision(Vector2D sphereCentre1, Vector2D sphereCentre2, float sphereRadius1, float sphereRadius2);

/*
Brief: Create scene objects using the given coordinates, object mesh, and model amount.

Parameters:
[in] coords (Array of Vector3D coordinates)
[in] objectMesh (Mesh of the model to creaate)
[in] modelAmount (Number of models to be created)
[out] returns models in array
*/
IModel** CreateSceneObjects(const Vector3D coords[], IMesh* objectMesh, int modelAmount)
{
	IModel** modelsArray = new IModel * [modelAmount];

	for (int i = 0; i < modelAmount; i++)
		modelsArray[i] = objectMesh->CreateModel(coords[i].x, coords[i].y, coords[i].z);

	return modelsArray;
}

int main()
{
	// Create a 3D engine (using TL11 engine here) and open a window for it
	TLEngine* myEngine = New3DEngine(kTLX);
	myEngine->StartWindowed();

	// Add default folder for meshes and other media
	myEngine->AddMediaFolder(".\\Media");
	myEngine->AddMediaFolder("C:\\Users\\Public\\Documents\\TL-Engine11");

	// Coordinates to place skybox
	const Vector3D skyboxCoord = { 0.0f, -960.0f, 0.0f };
	// Skybox Mesh
	IMesh* skyboxMesh = myEngine->LoadMesh("Skybox 07.x");
	// Create skybox at skyboxCoords
	IModel* skyboxModel = skyboxMesh->CreateModel(skyboxCoord.x, skyboxCoord.y, skyboxCoord.z);

	// Isles Mesh
	IMesh* isleMesh = myEngine->LoadMesh("IsleStraight.x");
	// Number of isles to create
	const int islesSize = 6;
	// Coordinates to place isles
	const Vector3D isleCoords[islesSize] =
	{
		{-10.0f, 0.0f, 40.0f},
		{10.0f, 0.0f, 40.0f},
		{-10.0f, 0.0f, 56.0f},
		{10.0f, 0.0f, 56.0f},
		{-10.0f, 0.0f, 72.0f},
		{10.0f, 0.0f, 72.0f}
	};

	const float isleLength = 2.67529f;
	const float isleWidth = 3.41748f;

	// Array of all created isles
	IModel** isleModels = CreateSceneObjects(isleCoords, isleMesh, islesSize);

	// Checkpoint Mesh
	IMesh* checkpointMesh = myEngine->LoadMesh("Checkpoint.x");
	// Number of checkpoints to create
	const int checkpointSize = 3;
	// Coordinates to place checkpoints
	const Vector3D checkpointCoords[checkpointSize] =
	{
		{0.0f, 0.0f, 0.0f},
		{10.0f, 0.0f, 120.0f},
		{25.0f, 0.0f, 56.0f}
	};

	// Array of all created checkpoints
	IModel** checkpointModels = CreateSceneObjects(checkpointCoords, checkpointMesh, checkpointSize);

	const float checkpointsHalfLine = 7.29881f;
	const float checkpointsStructRadius = 1.28539f;

	// Wall Mesh
	IMesh* wallMesh = myEngine->LoadMesh("Wall.x");
	// Nummber of walls to create
	const int wallsSize = 4;
	// Coordinaates to place walls
	const Vector3D wallCoords[wallsSize] =
	{
		{-10.0f, 0.0f, 48.0f},
		{10.0f, 0.0f, 48.0f},
		{-10.0f, 0.0f, 64.0f},
		{10.0f, 0.0f, 64.0f},
	};
	// Array of all created walls
	IModel** wallModels = CreateSceneObjects(wallCoords, wallMesh, wallsSize);


	// Coordinates to place car
	const Vector3D carCoord = { 0.0f, 0.0f, -20.0f };
	// Car Mesh
	IMesh* carMesh = myEngine->LoadMesh("Race2.x");
	// Car Model
	IModel* carModel = carMesh->CreateModel(carCoord.x, carCoord.y, carCoord.z);

	const float carScale = 0.5f;
	const float carRadius = 5.0 * carScale;

	carModel->Scale(carScale);

	float matrix[4][4];

	// Ground Mesh
	IMesh* groundMesh = myEngine->LoadMesh("ground.x");
	// Ground Model
	IModel* groundModel = groundMesh->CreateModel();

	/*
	const Vector3D gridCoords = { 0.0f, 1.0f, 1.0f };
	IMesh* gridMesh = myEngine->LoadMesh("grid.x");
	IModel* gridModel = gridMesh->CreateModel(gridCoords.x, gridCoords.y, gridCoords.z);
	*/


	// Coordinates to place camera
	const Vector3D cameraCoord = { 0.0f, 30.0f, -100.0f };
	// Create Camera
	ICamera* camera = myEngine->CreateCamera(kManual, cameraCoord.x, cameraCoord.y, cameraCoord.z);
	camera->AttachToParent(carModel);

	float frameTime = 0.0f;
	const float kGameSpeed = 10.0f;



	const float checkpointTwoRotation = 90.0f;
	const int secondCheckpoint = 1;

	// Rotate the second checkpoint
	checkpointModels[secondCheckpoint]->RotateLocalY(checkpointTwoRotation);

	// Checkpoint Centres
	Vector2D checkpointStructCentres[checkpointSize * 2] =
	{
	{checkpointCoords[0].x - checkpointsHalfLine - checkpointsStructRadius, checkpointCoords[0].z},
	{checkpointCoords[0].x + checkpointsHalfLine + checkpointsStructRadius, checkpointCoords[0].z},
	{checkpointCoords[1].x, checkpointCoords[1].z - checkpointsHalfLine - checkpointsStructRadius},
	{checkpointCoords[1].x, checkpointCoords[1].z + checkpointsHalfLine + checkpointsStructRadius},
	{checkpointCoords[2].x - checkpointsHalfLine - checkpointsStructRadius,checkpointCoords[2].z},
	{checkpointCoords[2].x + checkpointsHalfLine + checkpointsStructRadius,checkpointCoords[2].z}
	};

	float elapsedTime = 0.0f;
	float countdownTime = 3.0f;

	// Game States

	/*
	Brief:
	Enum for states of game

	States:
	Start - Game beginning
	Countdown - Countdown for player movement
	Ready - Allow player to control hover car
	*/
	const enum GameStates { Start, Countdown, Ready, GameOver };


	// Race States

	/*
	Brief:
	Race States(When the player crosses specific points)

	States:
	Start - Race starts
	CP1Cross - Player crosses first checkpoint
	CP2Cross - Player crosses second checkpoint
	CP3Cross - Player crosses third checkpoint
	*/
	const enum RaceStates { Begin, CP1Cross, CP2Cross, CP3Cross };

	GameStates gameState = Start;
	RaceStates raceState = Begin;

	// Screen Text
	IFont* font = myEngine->LoadFont("Comic Sans", 80);
	IFont* font2 = myEngine->LoadFont("Ariel", 30);

	// Font Screen Coords
	const Vector2D fontCoords = { 800, 300 };
	const Vector2D font2Coords = { 10, 830 };
	const Vector2D raceCoords = { 300, myEngine->GetHeight() - 70.0f };

	// Backdrop Coords
	const Vector2D backdropCoords = { 0.0f, 800.0f };

	// Backdrop Sprite
	Sprite* backdropSprite = myEngine->CreateSprite("ui-backdrop.jpg", backdropCoords.x, backdropCoords.z);

	// Trigger Countdown Key
	const EKeyCode startKey = Key_Space;

	// Control Hover Car Keys
	const EKeyCode thrustForwardKey = Key_W;
	const EKeyCode reverseKey = Key_S;
	const EKeyCode leftKey = Key_A;
	const EKeyCode rightKey = Key_D;

	// Camera Control Constants
	const float cameraMoveSpeed = 0.001f;
	const float mouseWheelMoveSpeed = 0.01f;
	const float mouseRotationSpeed = 0.003f;
	const float cameraMove = kGameSpeed * cameraMoveSpeed;
	const float mouseWheelMove = kGameSpeed * mouseWheelMoveSpeed;
	const float mouseRotation = kGameSpeed * mouseRotationSpeed;

	// Camera Controls
	const EKeyCode cameraUp = Key_Up;
	const EKeyCode cameraDown = Key_Down;
	const EKeyCode cameraLeft = Key_Left;
	const EKeyCode cameraRight = Key_Right;

	bool mouseCaptureActive = false;

	// Mouse Controls
	const EKeyCode toggleMouseCapture = Key_T;
	const EKeyCode toggleChaseCamera = Key_1;

	myEngine->StartMouseCapture();

	bool chaseCameraActive = true;

	struct Box
	{
		Vector2D Vmin;
		Vector2D Vmax;
	};

	// Isle Boxes
	const int numBoxes = 2;
	Box boxes[numBoxes];
	boxes[0] = { {isleModels[0]->GetX() - isleLength, isleModels[0]->GetZ() - isleWidth} , {isleModels[4]->GetX() + isleLength, isleModels[4]->GetZ() + isleWidth } };
	boxes[1] = { {isleModels[1]->GetX() - isleLength, isleModels[1]->GetZ() - isleWidth} , {isleModels[5]->GetX() + isleLength, isleModels[5]->GetZ() + isleWidth } };


	// Stores mouse positions
	int mouseMoveX = 0;
	int mouseMoveY = 0;

	// Vectors for momentum
	Vector2D carMomentum = { 0.0f, 0.0f };
	Vector2D carThrust = { 0.0f, 0.0f };
	Vector2D carDrag = { 0.0f, 0.0f };
	Vector2D carFacingVector = { 0.0f, 0.0f };

	// Quit Game Key
	const EKeyCode quitGameKey = Key_Escape;

	// Hover Car Speed
	float carSpeed = frameTime * kGameSpeed;
	float carRotationAngle = 20.0f;
	const int timeMultiplier = 100;
	const float thrustFactor = 5.0f;
	const float coeffDrag = -0.2;

	Vector2D oldPos{ carModel->GetX(), carModel->GetY() };

	// The main game loop, repeat until engine is stopped
	while (myEngine->IsRunning())
	{
		// Draw the scene
		myEngine->DrawScene();

		// Stores time of frame
		frameTime = myEngine->Timer();

		// Camera Controls For Movement
		if (myEngine->KeyHeld(cameraUp)) camera->MoveLocalZ(cameraMove);
		if (myEngine->KeyHeld(cameraDown)) camera->MoveLocalZ(-cameraMove);
		if (myEngine->KeyHeld(cameraRight)) camera->MoveLocalX(cameraMove);
		if (myEngine->KeyHeld(cameraLeft)) camera->MoveLocalX(-cameraMove);

		// Checks whether mouseCapture is active and ensures chaseCamera is not
		if (mouseCaptureActive && !chaseCameraActive)
		{
			mouseMoveX += myEngine->GetMouseMovementX();
			mouseMoveY += myEngine->GetMouseMovementY();

			camera->ResetOrientation();
			camera->RotateLocalY(mouseMoveX * mouseRotation);
			camera->RotateLocalX(mouseMoveY * mouseRotation);

			float mouseMoveWheel = myEngine->GetMouseWheelMovement();
			camera->MoveLocalZ(mouseMoveWheel * mouseWheelMove);
		}

		// Allows the mouse to become visible.
		if (myEngine->KeyHit(toggleMouseCapture))
		{
			mouseCaptureActive = !mouseCaptureActive;
			if (mouseCaptureActive)
				myEngine->StartMouseCapture();
			else
				myEngine->StopMouseCapture();
		}

		// Assigns the controls for the camera to follow the hover car.
		if (myEngine->KeyHit(toggleChaseCamera))
		{
			chaseCameraActive = !chaseCameraActive;

			if (chaseCameraActive)
			{
				camera->AttachToParent(carModel);
				camera->ResetOrientation();
			}
			else
				carModel->DetachFromParent();
		}

		if (gameState == Start)
		{
			font->Draw("Press Space to Start!", fontCoords.x, fontCoords.z, kRed, CentreAlign);

			if (myEngine->KeyHit(startKey))
				gameState = Countdown;
		}

		if (gameState == Countdown)
		{
			// Countdown for game
			countdownTime -= frameTime;

			if (countdownTime > 2)
				font->Draw("3", fontCoords.x, fontCoords.z, kRed, CentreAlign);
			else if (countdownTime > 1)
				font->Draw("2", fontCoords.x, fontCoords.z, kRed, CentreAlign);
			else if (countdownTime > 0)
				font->Draw("1", fontCoords.x, fontCoords.z, kRed, CentreAlign);
			else if (countdownTime > -0.5f)
				font->Draw("Go!", fontCoords.x, fontCoords.z, kRed, CentreAlign);
			else
			{
				gameState = Ready;
				raceState = Begin;
			}
		}

		if (gameState == Ready)
		{
			// Adjusts the game speed based on the FPS
			if (myEngine->AverageFPS() == 0)
				frameTime = kGameSpeed * frameTime;
			else
				frameTime = kGameSpeed / myEngine->AverageFPS();

			carSpeed = frameTime * kGameSpeed;

			elapsedTime += frameTime;

			font2->Draw("Time: " + to_string(round(elapsedTime * timeMultiplier) / timeMultiplier) + "     " + to_string(raceState), font2Coords.x, font2Coords.z, kWhite);

			// Race State Messages to Player
			if (raceState == Begin)
				font->Draw("Game has started", raceCoords.x, raceCoords.z, kWhite);
			else if (raceState == CP1Cross)
				font->Draw("Stage 1 Completed", raceCoords.x, raceCoords.z, kWhite);
			else if (raceState == CP2Cross)
				font->Draw("Stage 2 Completed", raceCoords.x, raceCoords.z, kWhite);
			else if (raceState == CP3Cross)
				font->Draw("Stage 3 Completed", raceCoords.x, raceCoords.z, kWhite);

			// Get the current position of the car
			Vector2D curPos = { carModel->GetX(), carModel->GetZ() };

			// Movement
			carModel->GetMatrix(&matrix[0][0]);
			carFacingVector = { matrix[2][0],matrix[2][2] };
			oldPos = { carModel->GetX(), carModel->GetZ() };
			carDrag = scalar(coeffDrag, carMomentum);
			carMomentum = addThree(carMomentum, carThrust, carDrag);
			carModel->Move(carMomentum.x, 0, carMomentum.z);

			// Rotation
			if (myEngine->KeyHeld(leftKey))
				carModel->RotateY(-carRotationAngle * frameTime);

			if (myEngine->KeyHeld(rightKey))
				carModel->RotateY(carRotationAngle * frameTime);

			// Calculate Thrust
			if (myEngine->KeyHeld(thrustForwardKey))
				carThrust = scalar(frameTime, scalar(thrustFactor, carFacingVector));
			else if (myEngine->KeyHeld(reverseKey))
				carThrust = scalar(frameTime, scalar(-thrustFactor, carFacingVector));
			else
				carThrust = { 0.0f, 0.0f };

			curPos = { carModel->GetX(), carModel->GetZ() };

			//Player crosses first checkpoint 
			if (raceState == Begin && gameState != CP3Cross)
			{
				Vector2D Vmin = { checkpointCoords[0].x - checkpointsHalfLine, checkpointCoords[0].z - checkpointsStructRadius };
				Vector2D Vmax = { checkpointCoords[0].x + checkpointsHalfLine, checkpointCoords[0].z + checkpointsStructRadius };

				if (sphereToBoxCollision(Vmin, Vmax, carRadius, curPos))
				{
					raceState = CP1Cross;
				}
			}
			
			// Player crosses second checkpoint
			if (raceState == CP1Cross)
			{
				Vector2D Vmin = { checkpointCoords[1].x - checkpointsStructRadius, checkpointCoords[1].z - checkpointsStructRadius };
				Vector2D Vmax = { checkpointCoords[1].x + checkpointsStructRadius, checkpointCoords[1].z + checkpointsStructRadius };
				if (sphereToBoxCollision(Vmin, Vmax, carRadius, curPos))
				{
					raceState = CP2Cross;
				}
			}

			// Player crosses third checkpoint
			if (raceState == CP2Cross)
			{
				Vector2D Vmin = { checkpointCoords[2].x - checkpointsHalfLine, checkpointCoords[2].z - checkpointsStructRadius };
				Vector2D Vmax = { checkpointCoords[2].x + checkpointsHalfLine, checkpointCoords[2].z + checkpointsStructRadius };
				if (sphereToBoxCollision(Vmin, Vmax, carRadius, curPos))
				{
					raceState = CP3Cross;
				}
			}

			// Game Over if player crosses third checkpoint
			if (raceState == CP3Cross)
			{
				gameState = GameOver;
			}

			// Isle collision. 
			for (int i = 0; i < numBoxes; i++)
				if (sphereToBoxCollision(boxes[i].Vmin, boxes[i].Vmax, carRadius, curPos))
				{
					carModel->SetX(oldPos.x);
					carModel->SetZ(oldPos.z);
					carMomentum = scalar(-1, carMomentum);
				}

			// Detects Checkpoint Collision. Prevent players going through checkpoints.
			for (int i = 0; i < checkpointSize; i++)
				if (sphereToSphereCollision(checkpointStructCentres[i], curPos, checkpointsStructRadius, carRadius))
				{
					carModel->SetX(oldPos.x);
					carModel->SetZ(oldPos.z);
					carMomentum = scalar(-1, carMomentum);
				}
		}

		if (raceState == GameOver)
		{
			font->Draw("Race Complete!", font2Coords.x, font2Coords.z, kRed);
		}

		// Stop Engine when quit key pressed
		if (myEngine->KeyHit(quitGameKey))
			myEngine->Stop();
	}
}

/*
Brief: Times a number by the Vector2D

[in] s (The number to be times to the Vector2D)
[in] v (Vector2D)

[out] Vector2D (The number times by the x and z values of the Vector2D)
*/
Vector2D scalar(float s, Vector2D v)
{
	return { s * v.x, s * v.z };
}

/*
Brief: Adds three Vector2Ds together

Parameters:
[in] v1 (First Vector2D)
[in] v2 (Second Vector2D)
[in] v3 (Third Vector2D)

[out] Vector2D (Containing thhe added values of the three vectors x and z values)
*/
Vector2D addThree(Vector2D v1, Vector2D v2, Vector2D v3)
{
	return { v1.x + v2.x + v3.x, v1.z + v2.z + v3.z };
}

/*
Brief: Detects Sphere to Box collision

Parameters:
[in] vMin (The minimum corner of a game object)
[in] vMax (The maximum corner of a game object)
[in] radius (Number containing the radius of the sphere)
[in] currPos (Current position of the sphere)

[out] true or false (depending on whether collision has occurred)
*/
bool sphereToBoxCollision(Vector2D vMin, Vector2D vMax, float radius, Vector2D currPos)
{
	return (currPos.x + radius > vMin.x && currPos.x - radius < vMax.x && currPos.z + radius > vMin.z && currPos.z - radius < vMax.z);
}

/*
Brief: Squares two Vector2Ds together

Parameters:
[in] v1 (First Vector2D)
[in] v2 (Second Vector2D)

[out] float number (result of the first and second Vector2D x and z coordinates squared and added together)
*/
float distanceSquared(Vector2D v1, Vector2D v2)
{
	return ((v1.x - v2.x) * (v1.x - v2.x) + (v1.z - v2.z) * (v1.z - v2.z));
}

/*
Brief: Checks whether sphere to sphere collision has occurred.

Parameters:
[in] sphereCentre1 (The centre of the first sphere)
[in] sphereCentre2 (The centre of the second sphere)
[in] sphereRadius1 (The radius of the first sphere)
[in] sphereRadius2 (The radius of the second sphere)

[out] Boolean
(true or false depending on whether collision as occurred, 
by seeing if the centre sphere is less than or equal to the spheres radii squared)
*/
bool sphereToSphereCollision(Vector2D sphereCentre1, Vector2D sphereCentre2, float sphereRadius1, float sphereRadius2)
{
	return (distanceSquared(sphereCentre1, sphereCentre2) <= (sphereRadius1 + sphereRadius2) * (sphereRadius1 + sphereRadius2));
}
```

---
[[CO1301 Games Concepts]]
