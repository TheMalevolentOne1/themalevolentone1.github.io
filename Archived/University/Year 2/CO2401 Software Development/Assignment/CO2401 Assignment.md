---
tags:
  - CO2401
  - Software-Development
  - Assignment-Report
---
[[CO2401 Software Development]]

---
# Assignment Feedback
```
FEEDBACK/COMMENTS

(Key: Y = yes, N = no, P = partial)

HIDDEN TESTS

L1R1: Y

L1R2: Y

L1R3: Y

L1R4: Y

L1R5: N

L1R6: N

L1R7: N

L2R1: N

L2R2: Y

L2R3: N

L2R4: Y

L2R5: Y

L3R1: Y

L3R2: N

L3R3: N

L3R4: N

MUST HAVE

Student tested all L1 requirements? Y

NUnit used; OfficeController made? Y

At least 8 student tests? Y

OfficeController passes 4 student tests? Y

OfficeController passes 4 hidden tests? Y

Student test code uses AAA pattern? N

SHOULD HAVE

Student tested all L2 requirements? Y

Student used [TestCase] appropriately? Y

Code is appropriately commented? Y

Test methods follow naming convention? Y

Interfaces created for other classes? P

NSubstitute used to create stubs? Y

Student test cases all pass (or fails documented)? Y

Student tests mapped to requirements? Y

OfficeController passes 75%+ of hidden tests (89) N

Student test cases are of good quality? Y

COULD HAVE

NSubstitute used to create mock objects? Y

Student tested all L3 requirements? Y

High-quality, concise comments? Y

OfficeController passes 90%+ of hidden tests (107) N

Student test cases are of excellent quality? N

Number of student tests 7

Number of student test cases 29

Quality of OfficeController code (%) 58

OVERALL GRADE (%): 58

FEEDBACK FROM ASSESSOR

Overall, a good effort but there are a number of holes in the testing that mean the code fails a sizeable number of hidden tests.

Tests appear to follow an AAA (Arrange-Act-Assert) sequence, but this is not labelled using comments. Tests follow the naming convention outlined in lectures.

For L1R6 test cases, there's no need to specify an expectedState parameter because it must match either the initial state (for valid transitions) or the current state (for invalid transitions).

In addition, you should avoid using 'if' instructions in a test. Firstly, tests need to be minimal and simple to ensure that they don't themselves contain bugs; secondly, if there are two possible actions then these actions will represent different equivalence partitions and should therefore have separate tests.

The Manager interface should start with 'I', to distinguish it from the actual Manager class (which will exist during integration tests).

The dependency object properties should be private, not public. This is only a very minor issue because they have not been accessed directly from outside the class; however, in future work you should ensure that public members are restricted to those specified in the class diagram and requirements.

NSubstitute has been used effectively for creating stubs and mocks.

Some parameterised test cases are included but these only cover a few of the possible inputs. The L1R6 test cases fail to cover all of the possible valid (and invalid) fire transitions. For future work, try to be exhaustive where a limited set of test cases exist.

Hidden tests for L1R5, L1R6 and L1R7 fail because the production code does not transition to "closed" correctly. Hidden test for L2R2 fails completely because the constructor does not set an initial currentState. Hidden test for L2R3 fails because the statuss report string is in the wrong format.

The L3R4 hidden test will fail because EmailService.SendMail() is mis-named as SendEmail(). This will cause a compilation error at a future point when it is integrated with the actual EmailService class. For future work, be careful to check that code matches specifications accurately.

The submitted video runs over 3 minutes past the specified 10-minute time. For this assignment we have decided against penalising students for failure to follow submission instructions, but we must warn that when a limit is stated then it should be adhered-to -- and that future penalties for exceeeding limits could be more serious.

----------

HIDDEN TEST ERRORS

Test Duration Traits Error Message

Traits: L1R5 Failed (5) < 1 ms

Test Group: HiddenTests.SetCurrentState_ValidInput_ReturnsTrue Failed (2) < 1 ms

SetCurrentState_ValidInput_ReturnsTrue("closed") Failed < 1 ms L1R5 System.InvalidOperationException : DoorManager and LightManager are required to set the state to 'closed'.

SetCurrentState_ValidInput_ReturnsTrue("open") Failed < 1 ms L1R5 System.InvalidOperationException : DoorManager is required to set the state to 'open'.

Test Group: HiddenTests.SetCurrentState_ValidInput_SetsState Failed (3) < 1 ms

SetCurrentState_ValidInput_SetsState("closed") Failed < 1 ms L1R5 System.InvalidOperationException : DoorManager and LightManager are required to set the state to 'closed'.

SetCurrentState_ValidInput_SetsState("open") Failed < 1 ms L1R5 System.InvalidOperationException : DoorManager is required to set the state to 'open'.

SetCurrentState_ValidInput_SetsState("OPEN") Failed < 1 ms L1R5 System.InvalidOperationException : DoorManager is required to set the state to 'open'.

Traits: L1R6 Failed (20) < 1 ms

Test Group: HiddenTests.SetCurrentState_InvalidChangeFromFA_ReturnsFalse Failed (4) < 1 ms

SetCurrentState_InvalidChangeFromFA_ReturnsFalse("closed","open") Failed < 1 ms L1R6 System.InvalidOperationException : DoorManager and LightManager are required to set the state to 'closed'.

SetCurrentState_InvalidChangeFromFA_ReturnsFalse("closed","out of hours") Failed < 1 ms L1R6 System.InvalidOperationException : DoorManager and LightManager are required to set the state to 'closed'.

SetCurrentState_InvalidChangeFromFA_ReturnsFalse("open","closed") Failed < 1 ms L1R6 System.InvalidOperationException : DoorManager is required to set the state to 'open'.

SetCurrentState_InvalidChangeFromFA_ReturnsFalse("open","out of hours") Failed < 1 ms L1R6 System.InvalidOperationException : DoorManager is required to set the state to 'open'.

Test Group: HiddenTests.SetCurrentState_InvalidChangeFromFD_ReturnsFalse Failed (4) < 1 ms

SetCurrentState_InvalidChangeFromFD_ReturnsFalse("closed","open") Failed < 1 ms L1R6 System.InvalidOperationException : DoorManager and LightManager are required to set the state to 'closed'.

SetCurrentState_InvalidChangeFromFD_ReturnsFalse("closed","out of hours") Failed < 1 ms L1R6 System.InvalidOperationException : DoorManager and LightManager are required to set the state to 'closed'.

SetCurrentState_InvalidChangeFromFD_ReturnsFalse("open","closed") Failed < 1 ms L1R6 System.InvalidOperationException : DoorManager is required to set the state to 'open'.

SetCurrentState_InvalidChangeFromFD_ReturnsFalse("open","out of hours") Failed < 1 ms L1R6 System.InvalidOperationException : DoorManager is required to set the state to 'open'.

Test Group: HiddenTests.SetCurrentState_ValidChangeFromClosed_ReturnsTrue Failed (3) < 1 ms

SetCurrentState_ValidChangeFromClosed_ReturnsTrue("fire alarm") Failed < 1 ms L1R6 System.InvalidOperationException : DoorManager and LightManager are required to set the state to 'closed'.

SetCurrentState_ValidChangeFromClosed_ReturnsTrue("fire drill") Failed < 1 ms L1R6 System.InvalidOperationException : DoorManager and LightManager are required to set the state to 'closed'.

SetCurrentState_ValidChangeFromClosed_ReturnsTrue("out of hours") Failed < 1 ms L1R6 System.InvalidOperationException : DoorManager and LightManager are required to set the state to 'closed'.

Test Group: HiddenTests.SetCurrentState_ValidChangeFromFA_ReturnsTrue Failed (2) < 1 ms

SetCurrentState_ValidChangeFromFA_ReturnsTrue("closed") Failed < 1 ms L1R6 System.InvalidOperationException : DoorManager and LightManager are required to set the state to 'closed'.

SetCurrentState_ValidChangeFromFA_ReturnsTrue("open") Failed < 1 ms L1R6 System.InvalidOperationException : DoorManager is required to set the state to 'open'.

Test Group: HiddenTests.SetCurrentState_ValidChangeFromFD_ReturnsTrue Failed (2) < 1 ms

SetCurrentState_ValidChangeFromFD_ReturnsTrue("closed") Failed < 1 ms L1R6 System.InvalidOperationException : DoorManager and LightManager are required to set the state to 'closed'.

SetCurrentState_ValidChangeFromFD_ReturnsTrue("open") Failed < 1 ms L1R6 System.InvalidOperationException : DoorManager is required to set the state to 'open'.

Test Group: HiddenTests.SetCurrentState_ValidChangeFromOpen_ReturnsTrue Failed (3) < 1 ms

SetCurrentState_ValidChangeFromOpen_ReturnsTrue("fire alarm") Failed < 1 ms L1R6 System.InvalidOperationException : DoorManager is required to set the state to 'open'.

SetCurrentState_ValidChangeFromOpen_ReturnsTrue("fire drill") Failed < 1 ms L1R6 System.InvalidOperationException : DoorManager is required to set the state to 'open'.

SetCurrentState_ValidChangeFromOpen_ReturnsTrue("out of hours") Failed < 1 ms L1R6 System.InvalidOperationException : DoorManager is required to set the state to 'open'.

Test Group: HiddenTests.SetCurrentState_ValidChangeFromOutOfHours_ReturnsTrue Failed (2) < 1 ms

SetCurrentState_ValidChangeFromOutOfHours_ReturnsTrue("closed") Failed < 1 ms L1R6 System.InvalidOperationException : DoorManager and LightManager are required to set the state to 'closed'.

SetCurrentState_ValidChangeFromOutOfHours_ReturnsTrue("open") Failed < 1 ms L1R6 System.InvalidOperationException : DoorManager is required to set the state to 'open'.

Traits: L1R7 Failed (2) < 1 ms

Test Group: HiddenTests.SetCurrentState_ToSameState_ReturnsTrue Failed (2) < 1 ms

SetCurrentState_ToSameState_ReturnsTrue("closed") Failed < 1 ms L1R7 System.InvalidOperationException : DoorManager and LightManager are required to set the state to 'closed'.

SetCurrentState_ToSameState_ReturnsTrue("open") Failed < 1 ms L1R7 System.InvalidOperationException : DoorManager is required to set the state to 'open'.

Traits: L2R1 Failed (11) 145 ms

Test Group: HiddenTests.Constructor_InvalidState_ThrowsException Failed (5) 142 ms

Constructor_InvalidState_ThrowsException("") Failed 3 ms L2R1 Assert.That(caughtException, expression) Expected: instance of <System.ArgumentException> But was: null

Constructor_InvalidState_ThrowsException("open sesame a longer than average string") Failed < 1 ms L2R1 Assert.That(caughtException, expression) Expected: instance of <System.ArgumentException> But was: null

Constructor_InvalidState_ThrowsException("openn") Failed < 1 ms L2R1 Assert.That(caughtException, expression) Expected: instance of <System.ArgumentException> But was: null

Constructor_InvalidState_ThrowsException("opokdsd") Failed 139 ms L2R1 Assert.That(caughtException, expression) Expected: instance of <System.ArgumentException> But was: null

Constructor_InvalidState_ThrowsException("out of hours/") Failed < 1 ms L2R1 Assert.That(caughtException, expression) Expected: instance of <System.ArgumentException> But was: null

Test Group: HiddenTests.Constructor_ValidState_SetsState Failed (6) 3 ms

Constructor_ValidState_SetsState("closed") Failed < 1 ms L2R1 System.NullReferenceException : Object reference not set to an instance of an object.

Constructor_ValidState_SetsState("CLOSED") Failed < 1 ms L2R1 System.NullReferenceException : Object reference not set to an instance of an object.

Constructor_ValidState_SetsState("open") Failed 3 ms L2R1 System.NullReferenceException : Object reference not set to an instance of an object.

Constructor_ValidState_SetsState("oPeN") Failed < 1 ms L2R1 System.NullReferenceException : Object reference not set to an instance of an object.

Constructor_ValidState_SetsState("out of hours") Failed < 1 ms L2R1 System.NullReferenceException : Object reference not set to an instance of an object.

Constructor_ValidState_SetsState("OuT oF hOuRs") Failed < 1 ms L2R1 System.NullReferenceException : Object reference not set to an instance of an object.

Traits: L2R3 Failed (6) 3 ms

Test Group: HiddenTests.GetStatusReport_WhenCalled_ReturnsValidAppendedString Failed (6) 3 ms

GetStatusReport_WhenCalled_ReturnsValidAppendedString("","","") Failed 3 ms L2R3 Assert.That(statusReport, Is.EqualTo(lightStatus + doorStatus + alarmStatus)) Expected string length 0 but was 66. Strings differ at index 0. Expected: <string.Empty> But was: "Office: c&t1, State: out of hours, Lights: , Doors: , Fire Al..." -----------^

GetStatusReport_WhenCalled_ReturnsValidAppendedString("Lights,FAULT,FAULT,FAULT,FAULT,FAULT,","Doors,FAULT,FAULT,FAULT,FAULT,FAULT,FAULT,","FireAlarm,FAULT,") Failed < 1 ms

GetStatusReport_WhenCalled_ReturnsValidAppendedString("Lights,OK,","Doors,OK,OK,,","FireAlarm,OK,") Failed < 1 ms L2R3 Assert.That(statusReport, Is.EqualTo(lightStatus + doorStatus + alarmStatus)) Expected string length 36 but was 102. Strings differ at index 0. Expected: "Lights,OK,Doors,OK,OK,,FireAlarm,OK," But was: "Office: c&t1, State: out of hours, Lights: Lights,OK,, Doors:..." -----------^

GetStatusReport_WhenCalled_ReturnsValidAppendedString("Lights,OK,FAULT,FAULT,OK","Doors,OK,OK,FAULT,OK,","FireAlarm,FAULT,") Failed < 1 ms L2R3 Assert.That(statusReport, Is.EqualTo(lightStatus + doorStatus + alarmStatus)) Expected string length 61 but was 127. Strings differ at index 0. Expected: "Lights,OK,FAULT,FAULT,OKDoors,OK,OK,FAULT,OK,FireAlarm,FAULT," But was: "Office: c&t1, State: out of hours, Lights: Lights,OK,FAULT,FA..." -----------^

GetStatusReport_WhenCalled_ReturnsValidAppendedString("Lights,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,","Doors,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,","FireAlarm,OK,") Failed < 1 ms L2R3 Assert.That(statusReport, Is.EqualTo(lightStatus + doorStatus + alarmStatus)) Expected string length 86 but was 152. Strings differ at index 0. Expected: "Lights,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,Doors,OK,OK,OK,OK,OK,OK,..." But was: "Office: c&t1, State: out of hours, Lights: Lights,OK,OK,OK,OK..." -----------^

GetStatusReport_WhenCalled_ReturnsValidAppendedString("test","test","test") Failed < 1 ms L2R3 Assert.That(statusReport, Is.EqualTo(lightStatus + doorStatus + alarmStatus)) Expected string length 12 but was 78. Strings differ at index 0. Expected: "testtesttest" But was: "Office: c&t1, State: out of hours, Lights: test, Doors: test,..." -----------^

Traits: L3R2 Failed (4) 1 ms

SetCurrentState_ToFireAlarm_LogFireAlarmCalled Failed 1 ms L3R2 NSubstitute.Exceptions.ReceivedCallsException : Expected to receive a call matching: LogFireAlarm("fire alarm") Actually received no matching calls.

SetCurrentState_ToFireAlarm_OpenAllDoorsCalled Failed < 1 ms L3R2 NSubstitute.Exceptions.ReceivedCallsException : Expected to receive a call matching: OpenAllDoors() Actually received no matching calls.

SetCurrentState_ToFireAlarm_SetAlarmCalled Failed < 1 ms L3R2 NSubstitute.Exceptions.ReceivedCallsException : Expected to receive a call matching: SetAlarm(True) Actually received no matching calls.

SetCurrentState_ToFireAlarm_SetAllLightsCalled Failed < 1 ms L3R2 NSubstitute.Exceptions.ReceivedCallsException : Expected to receive a call matching: SetAllLights(True) Actually received no matching calls.

Traits: L3R3 Failed (19) 23 ms

Test Group: HiddenTests.GetStatusReport_FaultDetected_CallsEngineer Failed (4) 20 ms

GetStatusReport_FaultDetected_CallsEngineer("Lights,FAULT,","Doors,FAULT,","FireAlarm,FAULT,") Failed < 1 ms L3R3 NSubstitute.Exceptions.ReceivedCallsException : Expected to receive a call matching: LogEngineerRequired(any String) Actually received no matching calls.

GetStatusReport_FaultDetected_CallsEngineer("Lights,FAULT,","Doors,OK,","FireAlarm,OK,") Failed 11 ms L3R3 NSubstitute.Exceptions.ReceivedCallsException : Expected to receive a call matching: LogEngineerRequired(any String) Actually received no matching calls.

GetStatusReport_FaultDetected_CallsEngineer("Lights,OK,","Doors,FAULT,","FireAlarm,OK,") Failed 9 ms L3R3 NSubstitute.Exceptions.ReceivedCallsException : Expected to receive a call matching: LogEngineerRequired(any String) Actually received no matching calls.

GetStatusReport_FaultDetected_CallsEngineer("Lights,OK,","Doors,OK,","FireAlarm,FAULT,") Failed < 1 ms L3R3 NSubstitute.Exceptions.ReceivedCallsException : Expected to receive a call matching: LogEngineerRequired(any String) Actually received no matching calls.

Test Group: HiddenTests.GetStatusReport_FaultyAlarm_CallsAlarmEngineer Failed (5) 1 ms

GetStatusReport_FaultyAlarm_CallsAlarmEngineer("Lights,FAULT,","Doors,FAULT,","FireAlarm,FAULT,") Failed < 1 ms L3R3 NSubstitute.Exceptions.ReceivedCallsException : Expected to receive a call matching: LogEngineerRequired(x => x.Contains("FireAlarm")) Actually received no matching calls.

GetStatusReport_FaultyAlarm_CallsAlarmEngineer("Lights,FAULT,OK,OK,OK","Doors,OK,OK,OK,","FireAlarm,FAULT,") Failed < 1 ms L3R3 NSubstitute.Exceptions.ReceivedCallsException : Expected to receive a call matching: LogEngineerRequired(x => x.Contains("FireAlarm")) Actually received no matching calls.

GetStatusReport_FaultyAlarm_CallsAlarmEngineer("Lights,OK,","Doors,OK,","FireAlarm,FAULT,") Failed 1 ms L3R3 NSubstitute.Exceptions.ReceivedCallsException : Expected to receive a call matching: LogEngineerRequired(x => x.Contains("FireAlarm")) Actually received no matching calls.

GetStatusReport_FaultyAlarm_CallsAlarmEngineer("Lights,OK,OK,","Doors,FAULT,OK,FAULT,","FireAlarm,FAULT,") Failed < 1 ms L3R3 NSubstitute.Exceptions.ReceivedCallsException : Expected to receive a call matching: LogEngineerRequired(x => x.Contains("FireAlarm")) Actually received no matching calls.

GetStatusReport_FaultyAlarm_CallsAlarmEngineer("Lights,OK,OK,OK,FAULT,","Doors,OK,OK,OK,","FireAlarm,FAULT,") Failed < 1 ms L3R3 NSubstitute.Exceptions.ReceivedCallsException : Expected to receive a call matching: LogEngineerRequired(x => x.Contains("FireAlarm")) Actually received no matching calls.

Test Group: HiddenTests.GetStatusReport_FaultyDoors_CallsDoorsEngineer Failed (5) 1 ms

GetStatusReport_FaultyDoors_CallsDoorsEngineer("Lights,FAULT,","Doors,FAULT,","FireAlarm,FAULT,") Failed < 1 ms L3R3 NSubstitute.Exceptions.ReceivedCallsException : Expected to receive a call matching: LogEngineerRequired(x => x.Contains("Doors")) Actually received no matching calls.

GetStatusReport_FaultyDoors_CallsDoorsEngineer("Lights,FAULT,","Doors,OK,OK,FAULT,","FireAlarm,FAULT,") Failed < 1 ms L3R3 NSubstitute.Exceptions.ReceivedCallsException : Expected to receive a call matching: LogEngineerRequired(x => x.Contains("Doors")) Actually received no matching calls.

GetStatusReport_FaultyDoors_CallsDoorsEngineer("Lights,FAULT,","Doors,OK,OK,FAULT,","FireAlarm,OK,") Failed < 1 ms L3R3 NSubstitute.Exceptions.ReceivedCallsException : Expected to receive a call matching: LogEngineerRequired(x => x.Contains("Doors")) Actually received no matching calls.

GetStatusReport_FaultyDoors_CallsDoorsEngineer("Lights,OK,","Doors,FAULT,","FireAlarm,OK,") Failed 1 ms L3R3 NSubstitute.Exceptions.ReceivedCallsException : Expected to receive a call matching: LogEngineerRequired(x => x.Contains("Doors")) Actually received no matching calls.

GetStatusReport_FaultyDoors_CallsDoorsEngineer("Lights,OK,","Doors,FAULT,OK,FAULT,","FireAlarm,OK,") Failed < 1 ms L3R3 NSubstitute.Exceptions.ReceivedCallsException : Expected to receive a call matching: LogEngineerRequired(x => x.Contains("Doors")) Actually received no matching calls.

Test Group: HiddenTests.GetStatusReport_FaultyLights_CallsLightEngineer Failed (5) 1 ms

GetStatusReport_FaultyLights_CallsLightEngineer("Lights,FAULT,","Doors,FAULT,","FireAlarm,FAULT,") Failed 1 ms L3R3 NSubstitute.Exceptions.ReceivedCallsException : Expected to receive a call matching: LogEngineerRequired(x => x.Contains("Lights")) Actually received no matching calls.

GetStatusReport_FaultyLights_CallsLightEngineer("Lights,FAULT,","Doors,OK,","FireAlarm,OK,") Failed < 1 ms L3R3 NSubstitute.Exceptions.ReceivedCallsException : Expected to receive a call matching: LogEngineerRequired(x => x.Contains("Lights")) Actually received no matching calls.

GetStatusReport_FaultyLights_CallsLightEngineer("Lights,FAULT,OK,OK,OK","Doors,OK,OK,OK,","FireAlarm,FAULT,") Failed < 1 ms L3R3 NSubstitute.Exceptions.ReceivedCallsException : Expected to receive a call matching: LogEngineerRequired(x => x.Contains("Lights")) Actually received no matching calls.

GetStatusReport_FaultyLights_CallsLightEngineer("Lights,OK,FAULT,","Doors,FAULT,OK,FAULT,","FireAlarm,OK,") Failed < 1 ms L3R3 NSubstitute.Exceptions.ReceivedCallsException : Expected to receive a call matching: LogEngineerRequired(x => x.Contains("Lights")) Actually received no matching calls.

GetStatusReport_FaultyLights_CallsLightEngineer("Lights,OK,OK,OK,FAULT,","Doors,OK,OK,FAULT,","FireAlarm,OK,") Failed < 1 ms L3R3 NSubstitute.Exceptions.ReceivedCallsException : Expected to receive a call matching: LogEngineerRequired(x => x.Contains("Lights")) Actually received no matching calls.

Traits: L3R4 Failed (1) 3 ms

SetCurrentState_ToFireAndExceptionThrown_EmailSent Failed 3 ms L3R4 NSubstitute.Exceptions.ReceivedCallsException : Expected to receive a call matching: SendMail("citycouncil@preston.gov.uk", "failed to log alarm", x => x.Contains("fake exception thrown")) Actually received no matching calls.
```

>[!success] 58 / 100 marks

---
# Assignment Documents
[[CO2401 A1 SmartOffice.zip]]
[[CO2401 Help For SmartOffice.zip]]

---
# Assignment Code
## Door Manager Interface
```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartOffice
{
    public interface IDoorManager : Manager
    {
        bool OpenAllDoors(); // L2R4
        bool LockAllDoors();
        bool OpenDoor(int doorID);
        bool LockDoor(int doorID);

    }
}
```

## Email Service Interface
```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartOffice
{
    public interface IEmailService
    {
        void SendEmail(string emailAddress, string subject, string message);
    }
}
```

## Fire Alarm Manager Interface
```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartOffice
{
    public interface IFireAlarmManager : Manager
    {
        string SetAlarm(bool isActive);
    }
}
```

## Light Manager Interface
```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartOffice
{
    public interface ILightManager : Manager
    {
        void SetLight(bool isON, int lightID);
        bool SetAllLights(bool isON); // L3R1
    }
}
```

## Web Service Interface
```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security;
using System.Text;
using System.Threading.Tasks;

namespace SmartOffice
{
    public interface IWebService
    {
        void LogStateChange(string logDetails);
        void LogEngineerRequired(string logDetails);
        void LogFireAlarm(string logDetails);
    }
}
```

## Manager
```cs
using NSubstitute.Exceptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartOffice
{
    public interface Manager
    {
        string GetStatus();
    }
}
```

## Office Controller
```cs
using SmartOffice;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TDDAssignment
{
    public class OfficeController
    {
        private string officeID; // L1R1
        private string currentState; // L1R2
        private string previousState;


        public ILightManager? lightManager = null; // L2R2
        public IFireAlarmManager? fireAlarmManager = null; // L2R2
        public IDoorManager? doorManager; // L2R2
        public IWebService? webService = null; // L2R2
        public IEmailService? emailService = null; // L2R2

        // L1R1
        public OfficeController(string id)
        {
            officeID = id.ToLower();
            currentState = "out of hours";
            lightManager = null;
            fireAlarmManager = null;
            doorManager = null;
            webService = null;
            emailService = null;
        }

        // L1R2
        public string GetOfficeID()
        {
            return officeID.ToLower();
        }

        // L1R3
        public void SetOfficeID(string id)
        {
            officeID = id.ToLower();
        }

        public string GetCurrentState()
        {
            return currentState.ToLower();
        }

        // L1R4
        public bool SetCurrentState(string newState)
        {
            // Convert to lowercase for case-insensitive comparison
            string lowerNewState = newState.ToLower();

            // Define all valid states
            string[] validStates = { "closed", "out of hours", "open", "fire drill", "fire alarm" };
            string[] normalStates = { "open", "out of hours", "closed" };
            string[] emergencyStates = { "fire drill", "fire alarm" };

            // Check if the new state is valid
            if (!Array.Exists(validStates, state => state == lowerNewState))
            {
                return false;
            }

            if (lowerNewState == currentState)
            {
                return true;
            }

            // Case 1: Transition from a normal state to an emergency state
            if (Array.Exists(normalStates, state => state == currentState) && Array.Exists(emergencyStates, state => state == lowerNewState))
            {
                previousState = currentState;
                currentState = lowerNewState;
                return true;
            }

            // Case 2: Transition from an emergency state back to the previous state
            if (Array.Exists(emergencyStates, state => state == currentState) &&
                lowerNewState == previousState)
            {
                if (lowerNewState == "open")
                {
                    if (doorManager == null)
                    {
                        throw new InvalidOperationException("DoorManager is required to set the state to 'open'.");
                    }
                    bool doorsOpened = doorManager.OpenAllDoors();
                    if (!doorsOpened)
                    {
                        return false; // Transition fails if doors can't be opened
                    }
                }
                else if (lowerNewState == "closed")
                {
                    if (doorManager == null || lightManager == null)
                    {
                        throw new InvalidOperationException("DoorManager and LightManager are required to set the state to 'closed'.");
                    }
                    bool doorsLocked = doorManager.LockAllDoors();
                    if (!doorsLocked)
                    {
                        return false; // Transition fails if doors can't be locked
                    }
                    bool lightsOff = lightManager.SetAllLights(false);
                    if (!lightsOff)
                    {
                        return false; // Transition fails if lights can't be turned off
                    }
                }
                currentState = lowerNewState; // Set the state back to the previous state
                return true;
            }

            // Case 3: Transition within normal states (based on a state transition diagram)
            if (Array.Exists(normalStates, state => state == currentState) && Array.Exists(normalStates, state => state == lowerNewState))
            {
                bool transitionAllowed = false;
                switch (currentState)
                {
                    case "open":
                        if (lowerNewState == "out of hours")
                            transitionAllowed = true;
                        break;
                    case "out of hours":
                        if (new[] { "open", "closed" }.Contains(lowerNewState))
                            transitionAllowed = true;
                        break;
                    case "closed":
                        if (lowerNewState == "out of hours")
                            transitionAllowed = true;
                        break;
                }
                if (!transitionAllowed)
                {
                    return false;
                }

                if (lowerNewState == "open")
                {
                    if (doorManager == null)
                    {
                        throw new InvalidOperationException("DoorManager is required to set the state to 'open'.");
                    }
                    bool doorsOpened = doorManager.OpenAllDoors();
                    if (!doorsOpened)
                    {
                        return false;
                    }
                }
                else if (lowerNewState == "closed")
                {
                    if (doorManager == null || lightManager == null)
                    {
                        throw new InvalidOperationException("DoorManager and LightManager are required to set the state to 'closed'.");
                    }
                    bool doorsLocked = doorManager.LockAllDoors();
                    if (!doorsLocked)
                    {
                        return false;
                    }
                    bool lightsOff = lightManager.SetAllLights(false);
                    if (!lightsOff)
                    {
                        return false;
                    }
                }
                currentState = lowerNewState;
                return true;
            }

            return false;
        }

        // L2R1
        public OfficeController(string id, string startState)
        {
            string lowerId = id.ToLower();
            string lowerStartState = startState.ToLower();

            SetOfficeID(id);
            SetCurrentState(startState);

            lightManager = null; // L2R2
            fireAlarmManager = null; // L2R2
            doorManager = null; // L2R2
            webService = null; // L2R2
            emailService = null; // L2R2
        }

        // L2R2
        public OfficeController(string id, ILightManager iLightManager, IFireAlarmManager iFireAlarmManager, IDoorManager iDoorManager, IWebService iWebService, IEmailService iEmailService)
        {
            officeID = id.ToLower();
            currentState = "out of hours"; // initial state
            lightManager = iLightManager;
            fireAlarmManager = iFireAlarmManager;
            doorManager = iDoorManager;
            webService = iWebService;
            emailService = iEmailService;
        }

        // L2R3
        public string GetStatusReport()
        {
            string lightStatus = lightManager.GetStatus();
            string fireAlarmStatus = fireAlarmManager.GetStatus();
            string doorStatus = doorManager.GetStatus();
            return $"Office: {officeID}, State: {currentState}, Lights: {lightStatus}, Doors: {doorStatus}, Fire Alarm: {fireAlarmStatus}";
        }
    }
}
```

## Office Controller Tests
```cs
using NUnit.Framework;
using NSubstitute;
using SmartOffice;
using System.Reflection.Metadata;
using TDDAssignment;
using System.Linq.Expressions;

[TestFixture]
public class OfficeControllerTests
{
    // L1R1: Constructor sets officeID
    [Test]
    public void L1R1_Constructor_ValidID_SetsOfficeID()
    {
        string id = "TestOffice";
        OfficeController controller = new OfficeController(id);

        string result = controller.GetOfficeID();

        Assert.That(result, Is.EqualTo("testoffice")); // Lowercase test due to L1R2
    }

    // L1R2: Constructor sets officeID to lowercase
    [TestCase("TESTOFFICE")]
    [TestCase("TestOffice")]
    [TestCase("TesTOFfIce")]
    public void L1R2_Constructor_ValidID_SetsOfficeIDToLowercase(string id)
    {
        OfficeController controller = new OfficeController(id);

        string result = controller.GetOfficeID();

        Assert.That(result, Is.EqualTo("testoffice"));
    }

    // L1R3: SetOfficeID to set an office id in lowercase
    [TestCase("newofficeid")]
    [TestCase("NeWoFfIcEiD")]
    [TestCase("NEWOFFICEID")]
    public void L1R3_SetOfficeID_SetOfficeIDLowerCase_SetsTheOfficeID(string id)
    {
        OfficeController controller = new OfficeController(id);

        controller.SetOfficeID(id);

        string officeID = controller.GetOfficeID();
        Assert.That(officeID, Is.EqualTo(id.ToLower()));
    }

    // L1R4: Check Constructor initalises state as 'out of hours'
    [Test]
    public void L1R4_Constructor_ValidCurrentState_SetsOutOfHours()
    {
        
        OfficeController controller = new OfficeController("testOffice");
        string currentState = controller.GetCurrentState();
        Assert.That(currentState, Is.EqualTo("out of hours"));
    }

    // L1R5: Sets the current state and sets it to lowercase
    [TestCase("Fire Drill", "fire drill")]
    [TestCase("Fire Alarm", "fire alarm")]
    public void L1R5_SetCurrentState_ValidCurrentState_SetsStateOrUnchanged(string inputState, string expectedState)
    {
        Manager classManager = Substitute.For<Manager>();
        classManager.GetStatus().Returns("OK");
        var lightManager = NSubstitute.Substitute.For<ILightManager>();
        var fireAlarmManager = NSubstitute.Substitute.For<IFireAlarmManager>();
        var doorManager = NSubstitute.Substitute.For<IDoorManager>();
        var webService = NSubstitute.Substitute.For<IWebService>();
        var emailService = NSubstitute.Substitute.For<IEmailService>();
        lightManager.SetAllLights(false).Returns(false);
        OfficeController controller = new OfficeController("testOffice", lightManager, fireAlarmManager, doorManager, webService, emailService);
        bool result = controller.SetCurrentState(inputState);

        Assert.That(result, Is.True);
        Assert.That(controller.GetCurrentState(), Is.EqualTo(expectedState));
    }

    // L1R6: Validating that the current state matches the new set state and follows the transition diagram
    [TestCase("out of hours", "out of hours", "out of hours")]
    [TestCase("out of hours", "open", "open")]
    [TestCase("out of hours", "closed", "closed")]
    [TestCase("out of hours", "fire drill", "fire drill")]
    [TestCase("out of hours", "fire alarm", "fire alarm")]
    [TestCase("open", "open", "open")]
    [TestCase("open", "out of hours", "out of hours")]
    [TestCase("closed", "closed", "closed")]
    [TestCase("closed", "out of hours", "out of hours")]
    [TestCase("fire drill", "out of hours", "out of hours")]
    [TestCase("fire alarm", "out of hours", "out of hours")]
    [TestCase("fire drill", "open", "open")]
    [TestCase("fire alarm", "open", "open")]
    [TestCase("fire drill", "closed", "closed")]
    [TestCase("fire alarm", "closed", "closed")]
    public void L1R6_SetCurrentState_StateTransitionRules_ValidatesCurrentState(string initialState, string newState, string expectedState)
    {
        var lightManager = Substitute.For<ILightManager>();
        var fireAlarmManager = Substitute.For<IFireAlarmManager>();
        var doorManager = Substitute.For<IDoorManager>();
        var webService = Substitute.For<IWebService>();
        var emailService = Substitute.For<IEmailService>();

        doorManager.OpenAllDoors().Returns(true);
        doorManager.LockAllDoors().Returns(true); 
        lightManager.SetAllLights(false).Returns(true); 

        OfficeController controller = new OfficeController("testOffice", lightManager, fireAlarmManager, doorManager, webService, emailService);

        // Set up previousState for emergency state transitions
        if (initialState == "fire drill" || initialState == "fire alarm")
        {
            string prevState = newState; 
            controller.SetCurrentState(prevState);
        }
        else
        {
            controller.SetCurrentState(initialState);
        }

        bool result = controller.SetCurrentState(newState);

        Assert.That(result, Is.True);
        Assert.That(controller.GetCurrentState(), Is.EqualTo(expectedState));
    }

    // L1R7: Verifies the state initalised is unchanged
    [Test]
    public void L1R7_SetCurrentState_SameState_StateUnchanged()
    {
        Manager classManager = Substitute.For<Manager>();
        classManager.GetStatus().Returns("OK");
        var lightManager = NSubstitute.Substitute.For<ILightManager>();
        var fireAlarmManager = NSubstitute.Substitute.For<IFireAlarmManager>();
        var doorManager = NSubstitute.Substitute.For<IDoorManager>();
        var webService = NSubstitute.Substitute.For<IWebService>();
        var emailService = NSubstitute.Substitute.For<IEmailService>();

        OfficeController controller = new OfficeController("testOffice", lightManager, fireAlarmManager, doorManager, webService, emailService); // Initial state is "out of hours" per L1R4
        string initialState = controller.GetCurrentState(); // "out of hours"
        bool result = controller.SetCurrentState("out of hours");
        Assert.That(controller.GetCurrentState(), Is.EqualTo(initialState));
    }

    // L2R1: Two-parameter constructor sets id and state correctly
    [TestCase("MixedOffice3", "out of hours")]
    public void L2R1_Constructor_TwoParameters_ValidState_SetsIDAndState(string id, string startState)
    {
        Manager classManager = Substitute.For<Manager>();
        classManager.GetStatus().Returns("OK");
        var lightManager = NSubstitute.Substitute.For<ILightManager>();
        var fireAlarmManager = NSubstitute.Substitute.For<IFireAlarmManager>();
        var doorManager = NSubstitute.Substitute.For<IDoorManager>();
        var webService = NSubstitute.Substitute.For<IWebService>();
        var emailService = NSubstitute.Substitute.For<IEmailService>();
        lightManager.SetAllLights(false).Returns(false);
        OfficeController controller = new OfficeController(id, lightManager, fireAlarmManager, doorManager, webService, emailService); // Initial state is "out of hours" per L1R4
        controller.SetCurrentState(startState);

        Assert.That(controller.GetOfficeID(), Is.EqualTo(id.ToLower()));
        Assert.That(controller.GetCurrentState(), Is.EqualTo(startState.ToLower()));
    }

    // L2R2: Dependency Injection with interfaces and validates correct ID and state
    [TestCase("Office1", "office1")]
    [TestCase("OFFICE2", "office2")]
    [TestCase("mixedOffice3", "mixedoffice3")]
    [TestCase("Room-4", "room-4")]
    [TestCase("BuildingA", "buildinga")]
    public void L2R2_Constructor_InterfacesAndValidID_SetsIDAndStateCorrectly(string id, string expectedID)
    {

        Manager classManager = Substitute.For<Manager>();
        classManager.GetStatus().Returns("OK");
        var lightManager = NSubstitute.Substitute.For<ILightManager>();
        var fireAlarmManager = NSubstitute.Substitute.For<IFireAlarmManager>();
        var doorManager = NSubstitute.Substitute.For<IDoorManager>();
        var webService = NSubstitute.Substitute.For<IWebService>();
        var emailService = NSubstitute.Substitute.For<IEmailService>();
        OfficeController controller = new OfficeController(id, lightManager, fireAlarmManager, doorManager, webService, emailService); // Initial state is "out of hours" per L1R4

        Assert.That(controller.GetOfficeID(), Is.EqualTo(expectedID));
        Assert.That(controller.GetCurrentState(), Is.EqualTo("out of hours"));
    }

    // L2R3: Verify Controller Status Report and Interfaces GetStatus method returns correctly
    [Test]
    public void L2R3_GetStatusReport_ValidateInterfaceState_ReturnsOk()
    {
        var classManager = Substitute.For<Manager>();
        classManager.GetStatus().Returns("OK");

        var lightManager = Substitute.For<ILightManager>();
        var fireAlarmManager = Substitute.For<IFireAlarmManager>();
        var doorManager = Substitute.For<IDoorManager>();
        var webService = NSubstitute.Substitute.For<IWebService>();
        var emailService = NSubstitute.Substitute.For<IEmailService>();

        OfficeController controller = new OfficeController("office1", lightManager, fireAlarmManager, doorManager, webService, emailService);

        string report = controller.GetStatusReport();

        Assert.That(report, Is.EqualTo($"Office: {controller.GetOfficeID()}, State: {controller.GetCurrentState()}, Lights: {lightManager.GetStatus()}, Doors: {doorManager.GetStatus()}, Fire Alarm: {fireAlarmManager.GetStatus()}"));
    }

    // L2R4: Changing state to 'open' triggers OpenAllDoors in DoorManager interface (Expects Door Failure)
    [Test]
    public void L2R4_SetCurrentState_OpenState_DoorsNotOpen()
    {
        var lightManager = NSubstitute.Substitute.For<ILightManager>();
        var fireAlarmManager = NSubstitute.Substitute.For<IFireAlarmManager>();
        var doorManager = NSubstitute.Substitute.For<IDoorManager>();
        doorManager.OpenAllDoors().Returns(false);
        var webService = NSubstitute.Substitute.For<IWebService>();
        var emailService = NSubstitute.Substitute.For<IEmailService>();

        OfficeController controller = new OfficeController("Test Office", lightManager, fireAlarmManager, doorManager, webService, emailService);

        Assert.That(doorManager.OpenAllDoors(), Is.False);
        Assert.That(controller.SetCurrentState("open"), Is.False);
    }

    [Test]
    public void L2R5_SetCurrentState_OpenState_DoorsOpen()
    {
        var lightManager = Substitute.For<ILightManager>();
        var fireAlarmManager = Substitute.For<IFireAlarmManager>();
        var doorManager = Substitute.For<IDoorManager>();
        doorManager.OpenAllDoors().Returns(true); // Simulate successful door opening
        var webService = Substitute.For<IWebService>();
        var emailService = Substitute.For<IEmailService>();

        var controller = new OfficeController("Test Office", lightManager, fireAlarmManager, doorManager, webService, emailService);

        string initialState = controller.GetCurrentState(); // Should be "out of hours"

        bool result = controller.SetCurrentState("open");

        Assert.That(result, Is.True);
        Assert.That(controller.GetCurrentState(), Is.EqualTo("open"));
    }

    [Test]

    // L3R1: State set 'closed' Lock all doors and Turn off Lights
    public void L3R1_SetCurrentState_ClosedState_DoorsLockedLightsOff()
    {
        var lightManager = NSubstitute.Substitute.For<ILightManager>();
        var fireAlarmManager = NSubstitute.Substitute.For<IFireAlarmManager>();
        var doorManager = NSubstitute.Substitute.For<IDoorManager>();
        doorManager.LockAllDoors().Returns(true);
        lightManager.SetAllLights(false).Returns(false);
        var webService = NSubstitute.Substitute.For<IWebService>();
        var emailService = NSubstitute.Substitute.For<IEmailService>();

        OfficeController controller = new OfficeController("Test Office", lightManager, fireAlarmManager, doorManager, webService, emailService);
        var result = controller.SetCurrentState("closed");

        Assert.That(result, Is.False);
        doorManager.Received(1).LockAllDoors();
        lightManager.Received(1).SetAllLights(false);
    }
}
```

---
[[CO2401 Software Development]]