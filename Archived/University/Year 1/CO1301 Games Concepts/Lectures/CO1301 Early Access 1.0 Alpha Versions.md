---
tags:
  - CO1301
  - Games-Concepts
---
[[CO1301 Games Concepts]]
# TL-Engine Early Access 1.0 Alpha Versions
The new version features much higher quality graphics and some extra features. More will be added this year. Works with all existing TL-Engine code.

Create a project in the same way as described in the lab materials except you should look for "Create New **TL11** Project..."

The detailed documentation below won't make too much sense until you are familiar with TL-Engine, but gradually you will understand all the features mentioned.
## Additions
To enable new features, use this line (instead of kTLX):
`TLEngine* myEngine = New3DEngine(TL11);`

Most important addition is higher quality graphics. There are .fbx versions of some .x files that are much better quality, e.g. use `Cube.fbx` instead of `Cube.x`
## Other things
You can get the frame time directly:
`float frameTime = myEngine->FrameTime();`

Support for VSync (locking the FPS to your monitor):
`myEngine->EnableVSync(true);  or  myEngine->EnableVSync(false);`

Support for mouse smoothing:
`myEngine->SetMouseSmoothing(0.3f);`

Use a value from 0 (off) to 1.0 (very strong smoothing). Affects FPS cameras and return values from `GetMouseMovementX` and `GetMouseMovementY`.
## **Loading 3D Files**
The main new feature is support for most 3D file formats, rather than relying on .x files. The most common formats are .fbx and .obj, but many others will work too.

There are expectations for the textures used on the models:
- Textures for 3D models must be in the same folder as the model. This also applies to any textures you use in SetSkin
- If a surface has only a single texture it is assumed to be a diffuse texture and the Blinn-Phong lighting model is used (old-school lighting)
- However you can add further textures for higher quality lighting. All textures should have the same base name, then add text at the end of the filename like so:
## Blinn-Phong Lighting
ground.jpg (or ground_diffuse.jpg)  [required]
ground_specular.jpg         [optional, enables glossiness]
ground_normal.jpg          [optional, enables normal mapping (bump mapping)]
ground_displacement.jpg       [optional, enables parallax mapping - requires normal map too]
## PBR (Physically-Based-Rendering)
ground.jpg (or ground_albedo.jpg)  [required]
ground_roughness.jpg        [required for PBR]
ground_metalness.jpg        [optional, if absent will assume material is non-metal]
ground_normal.jpg          [optional, enables normal mapping (bump mapping)]
ground_displacement.jpg       [optional, enables parallax mapping - requires normal map too]
- If you download models, rename the textures to exactly the formats above (obviously the word "ground" would change for each texture)
- Advanced users: If you export your own models, use .fbx format. The textures should be have "stripped paths":
i.e. "brick.jpg" is good, but "C:\bob\my_textures\level1\bricks.jpg" is not good (only works on Bob's machine)
## Limitations / Changes
FPS cameras use WASD instead of arrow keys and enable StartMouseCapture automatically. Sprites are currently not supported (but will be soon)

There are only two fonts "Tahoma", size 16 and "Tahoma", size 12. DefaultFont also works. Full font support will be added shortly

Contrast and brightness will look different because TL11 uses sRGB colourspace (allows for more correct colours)

`GetMouseMovementX` and `GetMouseMovementY` return **float** instead of **int**

Alpha channels don't work fully yet (e.g. leaves on trees)

There is extra code to check for the Escape key in new projects.
## Renames
Going forward some names in TL-Engine will change. You can still use the old names, but the new variants are ready:
`I3DEngine --> TLEngine`
`IMesh   --> Mesh`
`IModel   --> Model`
`ICamera  --> Camera`
`IFont   --> Font`
`ISceneNode --> SceneNode (occasionally used when animating parts of models)`
`kTLX    --> TLXStandard (used to enable legacy mode: myEngine->New3DEngine(TLXStandard);)`
### Cameras
`kManual  --> ManualCamera`
`kFPS    --> FPSCamera`
### Font Alignment
`kLeft   --> LeftAlign`
`kCentre  --> CentreAlign`
`kRight   --> RightAlign`
`kTop    --> TopAlign`
`kVCentre  --> MiddleAlign`
`kBottom  --> BottomAlign`
### Font Colours
`kWhite   --> White`
`kBlack   --> Black`
`kRed    --> Red`