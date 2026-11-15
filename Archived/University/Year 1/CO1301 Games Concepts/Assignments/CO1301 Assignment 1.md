---
tags:
  - CO1301
  - Games-Concepts
  - Assignment-Report
---
[[CO1301 Games Concepts]]

---
# Assignment Feedback
No Feedback was provided.

>[!success] 43 / 100 marks

---
# Game Code
```cpp
#include <iostream>
#include "TL-Engine11.h" // TL-Engine11 include file and namespace

using namespace tle;

// Camera Positions
const float cameraY = 30.0f;
const float cameraZ = -60.0f;

// Default positions for models
const float defaultX = 0.0f;
const float defaultY = 0.0f;
const float defaultZ = 0.0f;

// Position Offsets
const float skyboxY = -1000.0f;
const float groundLevelY = 10.0f;
const float arrowZ = -10.0f;

// Block Position Constants
const float blockZ = 120.0f;
const float blockXPosition = 55.0f;
const float blockGap = 12.0f;

// Constants Key Controls
const KeyCode rotateLeft = Key_Z;
const KeyCode rotateRight = Key_X;
const KeyCode resetKey = Key_R;
const KeyCode quitKey = Key_Escape;
const KeyCode fireKey = Key_Space;

const int blockAmount = 10;

const float rotationSpeed = 0.05f;
const float movementSpeed = 0.05f;

// Game Speed
const float kGameSpeed = 3.0f;

// block sphere radius
const float blockRadius = 6.0f;

// marble sphere radius
const float marbleRadius = 10.0f;

// Function initalisation before usage
float distance(IModel* model1, IModel* model2);
bool sphere2sphere(IModel* sphere1, IModel* sphere2, float radius1, float radius2);
void resetMarble(IModel* marbleModel, IModel* dummyModel, bool& ready, bool& fire, bool& contact);

// Number of blocks to hit before user wins
const int blockHitWin = 3;

/*
Brief: starting point of the program
*/
int main()
{
	// Create a 3D engine (using TL11 engine here) and open a window for it
	TLEngine* myEngine = New3DEngine(kTLX);
	myEngine->StartWindowed();

	// Add default folder for meshes and other media
	myEngine->AddMediaFolder(".\\Media");

	// Camera
	ICamera* myCamera = myEngine->CreateCamera(kManual, defaultX, cameraY, cameraZ);
	myCamera->RotateX(10);

	// Skybox
	IMesh* skyboxMesh = myEngine->LoadMesh("Skybox_Hell.x");
	IModel* skyboxModel = skyboxMesh->CreateModel(defaultX, skyboxY, defaultZ);

	// Floor
	IMesh* floorMesh = myEngine->LoadMesh("Floor.x");
	IModel* floorModel = floorMesh->CreateModel(defaultX, defaultY, defaultZ);

	// Dummy
	IMesh* dummyMesh = myEngine->LoadMesh("Dummy.x");
	IModel* dummyModel = dummyMesh->CreateModel(defaultX, groundLevelY, defaultZ);

	// Marble
	IMesh* marbleMesh = myEngine->LoadMesh("Marble.x");
	IModel* marbleModel = marbleMesh->CreateModel(defaultX, defaultY, defaultZ);
	marbleModel->AttachToParent(dummyModel);

	// Arrow
	IMesh* arrowMesh = myEngine->LoadMesh("Arrow.x");
	IModel* arrowModel = arrowMesh->CreateModel(defaultX, defaultY, arrowZ);
	arrowModel->AttachToParent(dummyModel);

	IMesh* blockMesh = myEngine->LoadMesh("Block.x");

	// All the blocks created
	IModel* blockArray[blockAmount] = {};

	// Creates 10 blocks and makes them in a line
	for (int i = 0; i < blockAmount; i++)
		blockArray[i] = blockMesh->CreateModel((i * blockGap) - blockXPosition, groundLevelY, blockZ);


	// Game States
	bool ready = true;
	bool fire = false;
	bool contact = false;
	bool over = false;

	// Block hit states
	bool hitBlocks[blockAmount] = {};
	bool blockCollided = false;

	// The main game loop, repeat until engine is stopped
	while (myEngine->IsRunning())
	{
		// Draw the scene
		myEngine->DrawScene();

		// ensures the game has not ended.
		if (!over)
		{
			// User triggered Ready state
			if (ready)
			{
				// Reset marble positioning when reset key hit
				if (myEngine->KeyHeld(resetKey))
					resetMarble(marbleModel, dummyModel, ready, fire, contact);

				// Arrow in radius
				if (abs(arrowModel->GetZ() <= -7))
				{
					if (myEngine->KeyHeld(rotateLeft))
						dummyModel->RotateY(rotationSpeed * kGameSpeed);

					if (myEngine->KeyHeld(rotateRight))
						dummyModel->RotateY(-rotationSpeed * kGameSpeed);

					// Change game state if fire key is pressed
					if (myEngine->KeyHit(fireKey))
					{
						ready = !ready;
						fire = !fire;
					}
				}
				else
				{
					dummyModel->RotateY(0.05);
				}
			}

			// User triggered fire state
			if (fire)
			{

				bool collision = false;

				if (abs(marbleModel->GetZ()) <= 200)
				{
					marbleModel->MoveLocalZ(movementSpeed);
				}
				else if (!collision)
				{
					if (myEngine->KeyHeld(resetKey))
						resetMarble(marbleModel, dummyModel, ready, fire, contact);
				}

				// Check all blocks for collision
				for (int i = 0; i < blockAmount; i++)
				{
					// Collision occurs
					if (sphere2sphere(marbleModel, blockArray[i], marbleRadius, blockRadius))
					{
						collision = true;
						hitBlocks[i] = true;
						blockCollided = true;
					}
				}

				// Change game states if collision occurs.
				if (collision)
				{
					fire = !fire;
					contact = !contact;
				}
			}

			int amountHit = 0;

			// Collision contact state (triggered when user hits block with marble)
			if (contact)
			{
				// if a block has been collided with
				if (blockCollided)
				{
					// Goes through every block to check which has been hit
					for (int i = 0; i < blockAmount; i++)
						if (hitBlocks[i])
						{
							blockArray[i]->SetSkin("tiles_bright.jpg");
							amountHit++;
						}
					blockCollided = false;
				}

				if (amountHit != blockHitWin)
				{
					if (myEngine->KeyHeld(resetKey))
						resetMarble(marbleModel, dummyModel, ready, fire, contact);
				}
				else
					// End game
					over = !over;
			}
		}
		else
		{
			marbleModel->SetSkin("glass_green.jpg");
		}

		// Stop if the Escape key is pressed
		if (myEngine->KeyHit(quitKey))
			myEngine->Stop();
		
	}

	// Delete the 3D engine now we are finished with it
	myEngine->Delete();
}

/*
Brief: Calculates the distance between two models

[in] model1 (the first model)
[in] model2 (the second model)
[out] returns the square root of both distances cubed and added together
*/
float distance(IModel* model1, IModel* model2)
{
	float distX = model1->GetX() - model2->GetX();
	float distZ = model1->GetZ() - model2->GetZ();
	return sqrt((distX * distX) + (distZ * distZ));
}

/*
Brief: Calculates whether collision has occurred

[in] sphere1 (First model)
[in] sphere2 (Second model)
[in] radius1 (First model's radius)
[in] radius2 (Second model's radius)
[out] collision boolean (True or False based on whether collision has occurred)
*/
bool sphere2sphere(IModel* sphere1, IModel* sphere2, float radius1, float radius2)
{
	float dist = distance(sphere1, sphere2);
	return dist < (radius1 + radius2);
}

/*
Brief: Reset marble position and game states

Parameters:
[in] marbleModel (The model for the marble)
[in] dummyModel (The model for the dummy)
[in] fire (Referenced fire game state)
[in] contact (Referenced contact game state)
[out] nothing returned void function
*/
void resetMarble(IModel* marbleModel, IModel* dummyModel, bool& ready, bool& fire, bool& contact)
{
	marbleModel->SetPosition(dummyModel->GetX(), dummyModel->GetY(), dummyModel->GetZ());
	marbleModel->AttachToParent(dummyModel);
	dummyModel->ResetOrientation();
	ready = true;
	fire = false;
	contact = false;
	return;
}
```

---
[[CO1301 Assignment 2]]
