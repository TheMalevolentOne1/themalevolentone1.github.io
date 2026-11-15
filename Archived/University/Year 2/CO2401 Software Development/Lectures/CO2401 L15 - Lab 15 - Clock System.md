---
tags:
  - CO2401
  - Software-Development
---
[[CO2401 Lecture 15 - Architecture Patterns]]

---
# Program
```cs
using ClockSystem.Controller;
using ClockSystem.Model;
using MVC_ClockSystem._02_View;

namespace ClockSystem
{
  class Program
  {
    static void Main(string[] args)
    {
      // Initialise the MVC components
      ClockModel model = new ClockModel();

      ClockView view = new ClockView();
      
      ClockController controller = new ClockController(model, view);

      // Start the clock
      controller.StartClock();
    }
  }
}
```

# Clock Model
```cs
using System;

namespace ClockSystem.Model
{
  public class ClockModel
  {
    public int Hours { get; set; }
    public int Minutes { get; set; }
    public int Seconds { get; set; }

    // Method to update time from system clock
    public void UpdateTime()
    {
      DateTime currentTime = DateTime.Now;

      Hours = currentTime.Hour;
      Minutes = currentTime.Minute;
      Seconds = currentTime.Second;
    }
  }
}
```

# Clock View
```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MVC_ClockSystem._02_View
{
  public class ClockView
  {
    public void DisplayTime(int hours, int minutes, int seconds)
    {
      Console.Clear(); // Clear the console screen before printing the updated time
      Console.WriteLine($"Current Time: {hours:D2}:{minutes:D2}:{seconds:D2}");
    }
  }
}
```

# Clock Controller
```cs
using System;
using System.Threading;
using ClockSystem.Model;
using MVC_ClockSystem._02_View;

namespace ClockSystem.Controller
{
  public class ClockController
  {
    private ClockModel _model;

    private ClockView _view;

    public ClockController(ClockModel model, ClockView view)
    {
      _model = model;
      _view = view;
    }

    public void StartClock()
    {
      while (true)
      {
        _model.UpdateTime(); // Update the model's time
        _view.DisplayTime(_model.Hours, _model.Minutes, _model.Seconds); // Display the updated time in the view
        Thread.Sleep(1000); // Wait for 1 second
      }
    }
  }
}
```

---
[[CO2401 Lecture 15 - Architecture Patterns]]