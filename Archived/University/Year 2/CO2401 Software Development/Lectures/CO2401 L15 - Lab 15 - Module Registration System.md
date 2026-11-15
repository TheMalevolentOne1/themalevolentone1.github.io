---
tags:
  - CO2401
  - Software-Development
---
[[CO2401 Lecture 15 - Architecture Patterns]]

---
# Program
```cs
using BusinessLogicLayer;

using DataAccessLayer;

using System;

  

namespace PresentationLayer

{

  class Program

  {

    static void Main(string[] args)

    {

      // Instantiate repository and service

      IModuleRepository moduleRepository = new CModuleRepository();

      CModuleService moduleService = new CModuleService(moduleRepository);

  

      bool running = true;

  

      while (running)

      {

        Console.WriteLine("\n--- Module Registration System ---");

        Console.WriteLine("1. Register a Module");

        Console.WriteLine("2. View Registered Modules");

        Console.WriteLine("3. Exit");

        Console.Write("Enter choice: ");

        var choice = Console.ReadLine();

  

        switch (choice)

        {

          case "1":

            RegisterModule(moduleService);

            break;

  

          case "2":

            ViewModules(moduleService);

            break;

  

          case "3":

            running = false;

            break;

  

          default:

            Console.WriteLine("Invalid choice, please try again.");

            break;

        }

      }

    }

  

    private static void RegisterModule(CModuleService moduleService)

    {

      Console.Write("\nEnter Module Code: ");

      string moduleCode = Console.ReadLine();

      Console.Write("Enter Module Name: ");

      string moduleName = Console.ReadLine();

      bool isRegistered = moduleService.RegisterModule(moduleCode, moduleName);

      if (isRegistered)

      {
        Console.WriteLine("Module registered successfully.");
      }

      else

      {

        Console.WriteLine("Module code already exists. Registration failed.");

      }

    }

    private static void ViewModules(CModuleService moduleService)

    {
      var modules = moduleService.GetRegisteredModules();
      w
      if (modules.Count == 0)
      {
        Console.WriteLine("No modules registered.");
      }
      else
      {
        Console.WriteLine("\nRegistered Modules:");
        foreach (var module in modules)
        {
          Console.WriteLine($"Code: {module.ModuleCode}, Name: {module.ModuleName}");
        }
      }
    }
  }
}
```

# Module Class
```cs
using DataAccessLayer;

namespace DataAccessLayer
{
  public class CModule
  {
    public string ModuleCode { get; set; }
    public string ModuleName { get; set; }
  }
}
```

# Module Repository Class
```cs
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace DataAccessLayer
{
  public class CModuleRepository : IModuleRepository
  {
    private List<CModule> modules = new List<CModule>();

    // Add module to the repository
    public void AddModule(CModule module)
    {
      modules.Add(module);
    }

    // Get all modules
    public List<CModule> GetModules()
    {
      return modules;
    }
  }
}
```

# Module Repository Interface
```cs
using System.Collections.Generic;
using System.Reflection;

namespace DataAccessLayer
{
  public interface IModuleRepository
  {
    void AddModule(CModule module);
    List<CModule> GetModules();
  }
}
```

# Module Services Class
```cs
using DataAccessLayer;
using System.Collections.Generic;
using System.Reflection;

namespace BusinessLogicLayer
{
  public class CModuleService
  {
    private readonly IModuleRepository moduleRepository;

    public CModuleService(IModuleRepository repository)
    {
      moduleRepository = repository;
    }
    
    // Add a module if not already registered
    public bool RegisterModule(string moduleCode, string moduleName)
    {
      var existingModules = moduleRepository.GetModules();

      if (existingModules.Exists(m => m.ModuleCode == moduleCode))
      {
        return false; // Duplicate module code
      }

      var newModule = new CModule
      {
        ModuleCode = moduleCode,
        ModuleName = moduleName
      };
      
      moduleRepository.AddModule(newModule);
      
      return true;
    }

    // Retrieve all registered modules
    public List<CModule> GetRegisteredModules()
    {
      return moduleRepository.GetModules();
    }
  }
}
```

---
[[CO2401 Lecture 15 - Architecture Patterns]]