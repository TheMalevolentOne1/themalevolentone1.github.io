---
tags:
  - CO1301
  - Games-Concepts
---
[[CO1301 Lecture 10 - Timing, Numbers, Functions & Structs]]

---
# Enhanced Matchbook Code

```cpp
// matchbox.cpp: A program using the TL-Engine
// Features: Linear acceleration of matchbox when W/S held - coasts to a stop when released
//           Realistic steering which naturally returns to straight as car moves
//           Simple chase cam option
//			 FPS-style camera manually implemented, using trick to prevent turning upside-down
//
// NPM December 2015

#include <TL-Engine.h>	// TL-Engine include file and namespace
using namespace tle;
const float kGameSpeed = 1.0f; // ALL movement is multiplied by this. Adjust to taste.

// Keyboard controls
const EKeyCode accelerate = Key_W;
const EKeyCode turnLeft   = Key_A;
const EKeyCode decelerate = Key_S;
const EKeyCode turnRight  = Key_D;

const EKeyCode toggleChaseCam = Key_C;
const EKeyCode toggleMouseCapture = Key_Tab;

const EKeyCode quit = Key_Escape;

const EKeyCode camUp    = Key_Up;
const EKeyCode camDown  = Key_Down;
const EKeyCode camLeft  = Key_Left;
const EKeyCode camRight = Key_Right;

// Camera control constants
const float kCameraMove     = kGameSpeed * 0.1f; // distance for the direction keys x and z axis
const float kMouseWheelMove = kGameSpeed * 10.0f; // distance for wheel movement z axis
const float kMouseRotation  = kGameSpeed * 0.3f; // distance (in degrees) for rotation of the camera

// Gameplay constants
const float kSteerLimit = 15.0f; // Limit on the angle of steering
const float kSteeringFactor = 0.04f; // multiplier to control how fast the matchbox should rotate when steering

const float kPi = 3.1415f;                 // Mathematical constant PI
const float kTwopenceCircum = 26.0f * kPi; // Circumference of the 2p coin

const float kCarMaxSpeed = kGameSpeed * 0.03f;	// speed limit
const float kSteerSpeed = kGameSpeed * 0.01f;	// Steering speed of the matchbox
const float kSteerReturnSpeed = kSteerSpeed * 20.0f; // rate at which steering returns to straight when moving - multiply by carSpeed

const float kAccelerationStep = kGameSpeed * 0.000001f;
const float kDecelerationStep = kAccelerationStep * 3.0f;

void main()
{
	I3DEngine* myEngine = New3DEngine(kTLX);
	myEngine->StartWindowed();

	myEngine->AddMediaFolder("C:\\ProgramData\\TL-Engine\\Media");

	// Scene set-up
	///////////////
	IMesh* floorMesh = myEngine->LoadMesh("Floor.x");
	IMesh* matchBoxMesh = myEngine->LoadMesh("MatchBox.x");
	IMesh* matchMesh = myEngine->LoadMesh("Match.x");
	IMesh* twoPenceMesh = myEngine->LoadMesh("TwoPence.x");

	IModel* floor = floorMesh->CreateModel();
	IModel* matchBox = matchBoxMesh->CreateModel();
	IModel* frontAxle = matchMesh->CreateModel();
	IModel* backAxle = matchMesh->CreateModel();
	IModel* frontRightWheel = twoPenceMesh->CreateModel();
	IModel* frontLeftWheel = twoPenceMesh->CreateModel();
	IModel* backRightWheel = twoPenceMesh->CreateModel();
	IModel* backLeftWheel = twoPenceMesh->CreateModel();

	// Lift up matchbox to make room for wheels
	matchBox->MoveY(14.0f);

	// Attach match 'axles' to the matchbox
	frontAxle->AttachToParent(matchBox);
	backAxle->AttachToParent(matchBox);
	frontAxle->MoveLocalZ(20.0f);
	backAxle->MoveLocalZ(-20.0f);

	// Attach 2p 'wheels' to axles - front
	frontRightWheel->AttachToParent(frontAxle);
	frontLeftWheel->AttachToParent(frontAxle);
	frontRightWheel->MoveLocalX(22.0f);
	frontLeftWheel->MoveLocalX(-22.0f);

	// Attach 2p 'wheels' to axles - rear
	backRightWheel->AttachToParent(backAxle);
	backLeftWheel->AttachToParent(backAxle);
	backRightWheel->MoveLocalX(20.0f);
	backLeftWheel->MoveLocalX(-20.0f);

	// Create a camera - position it back and up a little
	ICamera* camera = myEngine->CreateCamera(kManual, 0.0f, 50.0f, -80.0f);

	// Game States and control variables
	////////////////////////////////////
	
	bool mouseCaptureActive = true; // state of mouse capture
	myEngine->StartMouseCapture();
	
	bool chaseCamActive = false;	// state of camera

	float steering = 0.0f; // Variable holding the current steering angle
	float carSpeed = 0.0f; // Current driving speed of the matchbox
	
	int mouseMoveX = 0; // for storing cumulative total of mouse movement on x axis
	int mouseMoveY = 0; // for storing cumulative total of mouse movement on y axis

	// The main game loop, repeat until engine is stopped
	/////////////////////////////////////////////////////
	while (myEngine->IsRunning())
	{
		myEngine->DrawScene();

		// Adjust car speed according to controls
		/////////////////////////////////////////
		if (myEngine->KeyHeld(accelerate))
		{
			if (carSpeed < kCarMaxSpeed) carSpeed += kAccelerationStep; // accelerating forwards
		}
		else
		{
			if (carSpeed > 0.0f) carSpeed -= kDecelerationStep; // drifting
		}

		if (myEngine->KeyHeld(decelerate))
		{
			if (carSpeed > -kCarMaxSpeed) carSpeed -= kAccelerationStep; // accelerating backwards
		}
		else
		{
			if (carSpeed < 0.0f) carSpeed += kDecelerationStep; // drifting
		}

		// Adjust car steering according to controls
		////////////////////////////////////////////

		// calculate how much to move wheels back towards centre when we are not actively steering
		float returnSpeed = carSpeed > 0.0f ? kSteerReturnSpeed * carSpeed : -kSteerReturnSpeed * carSpeed;

		if (myEngine->KeyHeld(turnRight) && steering <= kSteerLimit) // steering right
		{
			frontAxle->RotateY(kSteerSpeed);
			steering += kSteerSpeed;
		}
		else if (steering >= 0.0f) // let go of steering control
		{
			frontAxle->RotateY(-returnSpeed);
			steering -= returnSpeed;
		}

		if (myEngine->KeyHeld(turnLeft) && steering >= -kSteerLimit) // steering left
		{
			frontAxle->RotateY(-kSteerSpeed);
			steering -= kSteerSpeed;
		}
		else if (steering <= 0.0f) // let go of steering control
		{
			frontAxle->RotateY(returnSpeed);
			steering += returnSpeed;
		}

		// Movement of car based on forward speed and steering wheel position
		/////////////////////////////////////////////////////////////////////
		matchBox->MoveLocalZ(carSpeed);
		matchBox->RotateLocalY(carSpeed * steering * kSteeringFactor);

		// Accurate calculation of the rotation speed
		// Rotate wheels - calculated correctly based on speed and wheel size
		frontAxle->RotateLocalX(360.0f * carSpeed / kTwopenceCircum);
		backAxle->RotateLocalX(360.0f * carSpeed / kTwopenceCircum);

		// Camera control
		/////////////////
		
		// keyboard controlled camera movement
		if (myEngine->KeyHeld(camUp   )) camera->MoveLocalZ( kCameraMove);
		if (myEngine->KeyHeld(camDown )) camera->MoveLocalZ(-kCameraMove);
		if (myEngine->KeyHeld(camRight)) camera->MoveLocalX( kCameraMove);
		if (myEngine->KeyHeld(camLeft )) camera->MoveLocalX(-kCameraMove);

		// mouse-controlled camera movement when captured
		if (mouseCaptureActive && !chaseCamActive)
		{
			mouseMoveX += myEngine->GetMouseMovementX(); // maintain cumulative total of movement
			mouseMoveY += myEngine->GetMouseMovementY();

			camera->ResetOrientation(); // reset the camera before moving... avoids nasty turning upside-down-ness
			camera->RotateLocalY(mouseMoveX * kMouseRotation); // the MouseRotation reduces the rotation speed
			camera->RotateLocalX(mouseMoveY * kMouseRotation);

			float mouseMoveWheel = myEngine->GetMouseWheelMovement();
			camera->MoveLocalZ(mouseMoveWheel * kMouseWheelMove);
		}

		// toggle mouse capture mode
		if (myEngine->KeyHit(toggleMouseCapture))
		{
			mouseCaptureActive = !mouseCaptureActive;
			if (mouseCaptureActive)
			{
				myEngine->StartMouseCapture();
			}
			else
			{
				myEngine->StopMouseCapture();
			}
		}

		// toggle chase cam mode
		if (myEngine->KeyHit(toggleChaseCam))
		{
			chaseCamActive = !chaseCamActive;
			if (chaseCamActive)
			{
				camera->AttachToParent(matchBox);
				camera->ResetOrientation();
			}
			else
			{
				camera->DetachFromParent();
			}
		}

		// quit the game
		if (myEngine->KeyHit(quit))
		{
			myEngine->Stop();
		}

	} // end of game loop

	// Delete the 3D engine now we are finished with it
	myEngine->Delete();
}
```

---
[[CO1301 Lecture 10 - Timing, Numbers, Functions & Structs]]