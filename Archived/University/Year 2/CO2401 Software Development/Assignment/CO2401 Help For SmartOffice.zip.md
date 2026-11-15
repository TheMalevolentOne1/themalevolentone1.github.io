---
tags:
  - CO2401
  - Software-Development
  - Assignment-Report
  - Algorithms
---
[[CO2401 Assignment]]

---
If you have a build error stating that "The current .NET SDK does not support targeting .NET 8.0" then you will need to downgrade the project:

- Edit the OfficeController.cs file; use main menu Project > SmartOffice Properties; set "Target framework" to the newest version listed (e.g., ".NET 7.0").
- Similarly, edit the OfficeControllerTests.cs file; use main menu Project > SmartOfficeTests Properties; set "Target framework" to the same version as above.

If you have further errors or issues, use NuGet package manager to remove "NUnit.Analysers" and "coverlet.collector" packages, and update the remaining packages.

---
[[CO2401 Assignment]]