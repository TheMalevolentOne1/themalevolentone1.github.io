---
tags:
  - CO3408
  - Advanced-Software-Modelling
---
[[CO3408 Advanced Software Modelling]]
[[CO3408 Lecture 5 - From Structure to Behaviour with UML & OCL]]

---
# Lecture Documents
[[CO3408 Lecture 6.pdf]]
[[CO3408 L6 - Lab 6 - Concurrency.pdf]]

---
# Written Notes
![[CO3408 Lecture 6 - Note 1.png]]
![[CO3408 Lecture 6 - Note 2.png]]
![[CO3408 Lecture 6 - Note 3.png]]
![[CO3408 Lecture 6 - Note 4.png]]

---
# Aims & Objectives
- What are the concepts of concurrency and why do they matter?
- Show how concurrency can be represented and reasoned about in models
- Provide concrete Java examples of concurrent programming

---
# What is Concurrency
- Concurrency is when multiple tasks appear to execute at the same time.
- Making process independently and potentially overlapping in time.
- It enables a system to:
  - Handle multiple events or requests simultaneously
  - Perform background work while staying responsive
  - Interleave tasks even on a single processor (via scheduling) Exploit multi-core hardware when available.
## Why Concurrency?
- Concurrency is needed because software must now:
  - Remain responsive under load.
  - Serve multiple actors at once.
  - Scale performance beyond a single CPU.
  - Exploit parallel hardware.
## Real-World Examples of Concurrency in Java

|            Scenario            | Concurrency Concept                   | Example / API                    |
| :----------------------------: | ------------------------------------- | -------------------------------- |
| Web server handling many users | Thread pool for parallel requests.    | ExecutorService                  |
|     Chat or messaging app      | Multi-threaded communication          | Runnable, Callable               |
|      Banking transactions      | Synchronisation for shared data       | synchronized, ReentrantLock      |
|        Download manager        | Parallel chunk processing             | CompletableFuture, ForkJoinPool  |
|        GUI applications        | Background threads for responsiveness | SwingWorker, Platform.runLater() |
|        Sensor/IoT data         | Producer-consumer coordination        | BlockingQueue                    |
|          Game engine           | Thread-safe resource sharing          | ConcurrentHashMap                |
|      E-commerce checkout       | Consistent updates under load         | Thread-safe collections          |
## Handling Concurrency
- Threads
  - Simultaneously executing components
  - Use one thread to manage an external actor

- Event Handlers
  - Blocks of code triggered by an event
  - Event Queue - Handles events sequentially
## Concurrent Components
- Application
  - Complete program
  - OS may run several

- Process
  - Code + Data + State of Execution
  - Heavyweight
  - Has own memory space

- Thread
  - Code + Data + State of Execution
  - Lightweight
  - Shares memory space with other threads
## Does Parallel = Concurrency?
- Parallel Systems
  - Multiple processors working simultaneously

- Concurrent Systems
  - Executing multiple programs at the same time

> All programs should be treated as parallel regardless of if concurrency is involved.
## Java Concurrency 
- Threads built into the language
  - Portability
- 
- Synchronisation primitives built in to objects
  - Each object has a “lock” 
  - Well-behaved threads seize lock before manipulating the object
  - Ensures mutual exclusion 
  - Low-level – can be misused 
  - No protection against deadlock
### Basics of Java Concurrency Examples
```java
class Task extends Thread
{
	private String name;
	
	Task(String name)
	{
		this.name = name;
	}
	
	@Override
	public void run()
	{
		for(int i = 1; i < 5; i++)
		{
			System.out.println(name + " - Step " + i);
			try
			{
				Thread.sleep(500);
			}
			catch(InterruptedException e)
			{
				e.printStackTrace();
			}	
			}
		}
	}
}
```

```java
public class ConcurrencyExample
{
	public static void main(String[] args)
	{
		Task t1 = new Task("Task1");
		Task t2 = new Task("Task2");
		
		t1.start(); // Runs Concurrently
		t2.start();
	}
}
```
## Java Threads
- A class with a run() method that
  - `extends` Thread

- Activated by the start() method
  - Creates a new thread
  - executes run() in parallel

- Alternatively a class that
  - `implements` Runnable (an *interface* i.e. IRunnable)
    - Provides a run() method.

- Used to create a thread

```java
Thread myThread = new Thread(myRunnable);
myThread.start();
```
## Using Runnable
```java
class RunnableTask implements Runnable
{
	private String name;
	
	RunnableTask(String name) { this.name = name; }
	
	public void run()
	{
		for (int i = 1; i <= 5; i ++)
		{
			System.out.println(name + " running step " + i);
			try { Thread.sleep(400); } catch (InterruptedException e)
			{}	
		}
	}
}
```

```java
public class RunnableExample 
{
	public static void main(String[] args)
	{
		Thread t1 = new Thread(new RunnableTask("Thread-A"));
		Thread t2 = new Thread(new RunnableTask("Thread-B"));
		
		t1.start();
		t2.start();
	}
}
```
### Example
```java
public class NumberThread extends Thread
{
	int num;
	public NumberThread(int num)
	{
		this.num = num;
	}
	
	public static void main(String[] args)
	{
		NumberThread [] numberThreads = new NumberThread[5];
		for (int i = 0; i < 5; i++)
		{
			numberThreads[i] = new NumberThread(i);
			numberThreads[i].start();
		}
	}
	
	static void display(int val)
	{
		for (int rows = 0; rows < 4; rows++)
		{
			for (int i = 0; i < 35; i++)
				System.ouut.print(val);
				
			System.ouut.println();
		}
	}
	
	public void run()
	{
		display(num);
	}
}
```
## Unsynchronised Output
![[CO3408 L6 - Unsync Output Slide.png]]
## Thread Safety with `synchronized`
```java
class Counter
{
	public int count = 0;
	
	public synchronized void increment()
	{
		count++;
		System.out.println(Thread.currentThread().getName() + "count: " + count);
	}
	
	public int getCount() { return count; }
} 
```

```java
public class SafeCounterExample
{
	public static void main(String[] args)
	{
		Counter counter = new Counter();
		
		Runnable task = () -> {
			for (int i = 0; i < 5; i++) { counter.increment(); }
		};
		
		Thread t1 = new Thread(task, "Thread-1");
		Thread t2 = new Thread(task, "Thread-2");
	}
}
```

- Ensures mutual exclusion in critical regions.
- Prevents race conditions.
### Example of Synchronised Function
```java
public class NumberThread extends Thread
{
	int num;
	public NumberThread(int num)
	{
		this.num = num;
	}
	
	public static void main(String[] args)
	{
		NumberThread [] numberThreads = new NumberThread[5];
		for (int i = 0; i < 5; i++)
		{
			numberThreads[i] = new NumberThread(i);
			numberThreads[i].start();
		}
	}
	
	synchronized static void display(int val) // Only one thread can execute the method
	{
		for (int rows = 0; rows < 4; rows++)
		{
			for (int i = 0; i < 35; i++)
				System.ouut.print(val);
				
			System.ouut.println();
		}
	}
	
	public void run()
	{
		display(num);
	}
}
```
## Sychronized Output
![[CO3408 L6 - Synced Output.png]]

---
# Higher-Level Concurrency: Executors
```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public ExecutorExample
{
	public static void main(String[] args)
	{
		ExecutorService executor = Executors.newFixedThreadPool(2);
		
		Runnable task1 = () -> System.out.println("Task 1 executed by " + Thread.currentThread().getName());
		Runnable task2 = () -> System.out.println("Task 2 executed by " + Thread.currentThread().getName());
		
		executor.submit(task1);
		executor.submit(task2);
	}
}
```

---
# Locks
- The first task to seize a lock can proceed.
- Later tasks seeking the lock are suspended
  - Until the lock is released.

---
I have no interest in the mars pathfinding situation or issues that occurred with it therefore I have changed this to focus on the priority invasion idea.
# Priority Invasion 
## Core Idea
Priority inversion occurs when a *high-priority* thread is forced to wait because a *low-priority* thread holds a **lock**, and a *medium-priority* thread prevents the low-priority thread from running.

In effect the system behaves as if priorities are reversed.

The typical sequence is:
- A low-priority thread acquires a lock.
- A high-priority thread later attempts to acquire the same lock and becomes blocked.
- A medium priority thread runs and pre-empts the low-priority thread.
- The low-priority thread cannot run to release the lock
- The high-priority thread remains blocked longer than expected.

This is dangerous in real-time and concurrent systems because high-priority tasks can miss deadlines even though the CPU is available.

**Key idea:**  
Locks can unintentionally distort scheduling unless priority inversion is explicitly handled.

---
# Vocabulary 
- Critical Region 
  - Sections of code which could cause problems if multiple threads simultaneously execute them

- Synchronisation
  - Co-ordinating threads & processes 

- Examples of synchronisation
  - Mutual Exclusion
    - Ensuring at most one thread is in a critical region
  - Communication
    - Passing data between threads

---
# Summary
- Concurrency is essential
- Treat concurrency activities as if parallel
- Java provides threads
- Threads / Processes
  - Concurrent program parts
  - Threads share memory space
    - Spare global variables
- Consistency problems unless care taken

---
[[CO3408 Lecture 7 - Managing Threads, Priorities, and Coordination]]