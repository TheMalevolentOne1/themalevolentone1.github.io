---
tags:
  - CO1301
  - Games-Concepts
---
[[CO1301 Games Concepts]]
[[CO1301 Lecture 8 - Trigonometry]]

---
# Collision Code
```cpp
// Collisions.cpp: A program using the TL-Engine

#include <math.h>

#include <TL-Engine.h>	// TL-Engine include file and namespace
using namespace tle;

void main()
{
	TLEngine* myEngine = New3DEngine( kTLX );
	myEngine->StartWindowed();

	// Add default folder for meshes and other media
	myEngine->AddMediaFolder( "C:\\Users\\Public\\Documents\\TL-Engine11\\Media" );

	/**** Set up your scene here ****/

	// Load meshes
	IMesh* floorMesh = myEngine->LoadMesh( "Floor.x" );
	IMesh* sphereMesh = myEngine->LoadMesh( "Sphere.x" );

	// Create models
	IModel* floor = floorMesh->CreateModel();
	IModel*	sphere = sphereMesh->CreateModel( 0, 10, 0 );

	// Create FPS camera
	ICamera* camera = myEngine->CreateCamera( kFPS );

	// Constants and variables here
	const float moveSpeed = 0.1f;

	// The main game loop, repeat until engine is stopped
	while (myEngine->IsRunning())
	{
		// Draw the scene
		myEngine->DrawScene();

		/**** Update your scene each frame here ****/

		// Move sphere on keypresses
		if (myEngine->KeyHeld( Key_D ))
		{
			sphere->MoveLocalX( moveSpeed );
		}
		if (myEngine->KeyHeld( Key_A ))
		{
			sphere->MoveLocalX( -moveSpeed );
		}
		if (myEngine->KeyHeld( Key_W ))
		{
			sphere->MoveLocalZ( moveSpeed );
		}
		if (myEngine->KeyHeld( Key_S ))
		{
			sphere->MoveLocalZ( -moveSpeed );
		}

		// Test for quit
		if (myEngine->KeyHit( Key_Escape ))
		{
			myEngine->Stop();
		}
	}

	// Delete the 3D engine now we are finished with it
	myEngine->Delete();
}
```

---
[[CO1301 Lecture 8 - Trigonometry]]