---
tags:
  - CO2412
  - Cross-Platform-Development
  - Assignment-Report
---
[[CO2412 Computational Thinking]]

---
# Code
```python
import time, sys, random
import numpy as np
import matplotlib.pyplot as plt

totalMemoryUsage = 0
sortSwapAmount = 0

# Dataset Class
class Dataset:
    '''
    Brief: Initalises the class

    (in) amountOfData (The range of data to create)
    '''
    def __init__(self, data_amount):
        self.__mDataIndex = 1
        self.is_random = False
        self.mkMinDataSize = 100000
        self.mkMaxDataSize = 999999

        self.data = []

        # Ensure data size is data_amount
        while len(self.data) != data_amount:
            for _ in range(data_amount):
                self.data.append(random.randint(self.mkMinDataSize, self.mkMaxDataSize))
        return
    
    '''
    Brief: Reverses the order of the dataset
    
    (out) reverses the data unless there is none
    '''
    def Reverse(self):
        self.data.sort()
        (self.data.reverse()) if (len(self.data) != 0) else print("This dataset has no data")
        return self.Randomise()

    '''
    Brief: Displays the data from the dataset
    '''
    def Display(self):
        for i in range(len(self.data) - self.__mDataIndex): print(self.data[i])
        return

    '''
    Brief: Randomly shuffles the order of the dataset

    Params:
    (out) self.data (returns dataset data after randomisation)
    '''
    def Randomise(self):
        random.shuffle(self.data)
        self.is_random = True
        return self.data

    '''
    Brief: Gets the data from the dataset
    
    Params:
    (out) self.data (returns dataset data)
    '''
    def GetData(self):
        return self.data

    '''
    Brief: Gets the size of the data from the dataset
    
    Params:
    (out) len(self.data) (returns the length of the dataset's data list)
    '''
    def GetSize(self):
        return len(self.data)

# Sets Maximum Recursion to avoid Max Recursion Depth Reached Error.
sys.setrecursionlimit(10000)

'''
Brief: Finds the midpoint of an array

Params:
(in) arr (Array to find the midpoint of)
(out) len(arr) // 2 (returns the midpoint for the array)
'''
def GetMidpoint(arr):
    return len(arr) // 2

'''
Brief: Implements the Merge Sort algorithm recursively

Params:
(in) arr (The array to be sorted)
(out) merged (The sorted array)
'''
def MergeSort(arr):
    global totalMemoryUsage, sortSwapAmount
    sortSwapAmount = 0
    if len(arr) <= 1:  # Base case for recursion
        return arr

    totalMemoryUsage += sys.getsizeof(arr) / 1024  # Convert bytes to KB

    # Split the array into two halves
    mid = GetMidpoint(arr)
    left_arr = MergeSort(arr[:mid])  # Sort First Half
    right_arr = (MergeSort(arr[mid:]))  # Sort Second Half
    merged = Merge(left_arr, right_arr)
    totalMemoryUsage += sys.getsizeof(merged) / 1024
    return merged

'''
Brief: Merges two sorted arrays into a single sorted array

Params:
(in) left_arr (First sorted array)
(in) right_arr (Second sorted array)
(out) merged (Single sorted array combining both inputs)
'''
def Merge(left_arr, right_arr):
    global totalMemoryUsage, sortSwapAmount
    merged = []
    i = 0  # Pointer for left_arr
    j = 0  # Pointer for right_arr

    # Merge elements in sorted order
    while i < len(left_arr) and j < len(right_arr):
        sortSwapAmount += 1
        if left_arr[i] <= right_arr[j]:
            merged.append(left_arr[i])
            i += 1
        else:
            merged.append(right_arr[j])
            j += 1

    # Add any remaining elements from both halves
    merged.extend(left_arr[i:])
    merged.extend(right_arr[j:])

    return merged

'''
Brief: Implements the Quick Sort algorithm recursively

Params:
(in) arr (The array to be sorted)
(out) QuickSort(left) + middle + QuickSort(right) + [totalMemoryUsage + sortSwapAmount] (Recursively calls algorithm, returns memory_usage and swaps amount)
'''
def QuickSort(arr: list):
    global totalMemoryUsage, sortSwapAmount
    if (len(arr) <= 1):
        return arr
    else:
        piv = arr[len(arr) - 1] # Sets the last element as the pivot
        left = [x for x in arr if x < piv]
        middle = [x for x in arr if x == piv]
        right = [x for x in arr if x > piv]
        totalMemoryUsage += sys.getsizeof(left) / 1024
        totalMemoryUsage += sys.getsizeof(middle) / 1024
        totalMemoryUsage += sys.getsizeof(right) / 1024
        sortSwapAmount += len(arr) - 1
        return QuickSort(left) + middle + QuickSort(right) + [totalMemoryUsage + sortSwapAmount]

'''
Brief: Output dataset to file
'''
def OutputToFile(label: str, sorting_function, dataset: Dataset):
    try: # make file if it doesn't exist
        algor = open(f"./{label}.txt", "x")
    except FileExistsError:
        algor = open(f"./{label}.txt", "w")
        
    with algor as f:
        data = sorting_function(dataset.GetData())
        for i in data: f.write(str(i) + "\n") # Call the sorting function

    return data

'''
Brief: measures executedTime, totalMemoryUsage, and sortSwapAmount

Params:
(in) label (Dataset Label)
(in) sorting_function (sort function (Merge Sort, or Quick Sort))
(in) dataset (Dataset)

(out) (exec_time_ms, totalMemoryUsage, sortSwapAmount) (tuple containing measured performance numbers)
'''
def measure_sort(label, sorting_function, dataset):
    OutputToFile(label, sorting_function, dataset)
    global totalMemoryUsage, sortSwapAmount
    # Reset counters
    totalMemoryUsage = 0
    sortSwapAmount = 0

    start_time = time.time()
    sorting_function(dataset.GetData())
    end_time = time.time()

    exec_time_ms = (end_time - start_time) * 1000
    return exec_time_ms, totalMemoryUsage, sortSwapAmount

kSmallDataset = 10000
kLargeDataset = 100000

labels = [] # Dataset Labels
execution_times = [] # Execution Times
memory_usages = [] # Memory Usages
comparisons = [] # Comparisons/Swaps

'''
Brief: Displays the algorithm measurement information

(in) label (Dataset Label)
(in) sorting_function (sort function (Merge Sort, or Quick Sort))
(in) data (Dataset)
'''
def get_measurement(label, sorting_function, data):
    exec_time, mem, comp = measure_sort(label, sorting_function, data)
    labels.append(label)
    execution_times.append(exec_time)
    memory_usages.append(mem)
    comparisons.append(comp)
    print(f"{label}: Time={exec_time:.2f} MS, Memory={mem:.2f} KB, Comparisons={comp} swaps")
    return

# QUICK SORT
# 1. Small Random
small_ran_data = Dataset(kSmallDataset)
small_ran_data.Randomise()
get_measurement("Small-QuickSort-Random", QuickSort, small_ran_data)

# 2. Small Reversed
small_rev_data = Dataset(kSmallDataset)
small_rev_data.Reverse()
get_measurement("Small-QuickSort-Reversed", QuickSort, small_rev_data)

# 3. Large Random
large_ran_data = Dataset(kLargeDataset)
(large_ran_data.Randomise())
get_measurement("Large-QuickSort-Random", QuickSort, large_ran_data)

# 4. Large Reversed
large_rev_data = Dataset(kLargeDataset)
large_rev_data.Reverse()
get_measurement("Large-QuickSort-Reversed", QuickSort, large_rev_data)

# MERGE SORT
# 5. Small Random
small_ran_data = Dataset(kSmallDataset)
small_ran_data.Randomise()
get_measurement("Small-MergeSort-Random", MergeSort, small_ran_data)

# 6. Small Reversed
small_rev_data = Dataset(kSmallDataset)
small_rev_data.Reverse()
get_measurement("Small-MergeSort-Reversed", MergeSort, small_rev_data)

# 7. Large Random
large_ran_data = Dataset(kLargeDataset)
large_ran_data.Randomise()
get_measurement("Large-MergeSort-Random", MergeSort, large_ran_data)

# 8. Large Reversed
large_rev_data = Dataset(kLargeDataset)
large_rev_data.Reverse()
get_measurement("Large-MergeSort-Reversed", MergeSort, large_rev_data)

kDefaultWidth = 12
kDefaultHeight = 6
kDefaultRotation = 45

'''
Brief: Setup and Display the dataset's executionTimes, memoryUsage, and comparisons in bar chart form
'''
def Graph_Setup():
    xPositions = np.arange(len(labels))  # For 8 scenarios, x_positions = [0,1,2,3,4,5,6,7]
    barWidth = 0.25  # Width of each bar

    # Execution Time Comparison
    plt.figure(figsize=(kDefaultWidth, kDefaultHeight))
    plt.bar(xPositions, execution_times, width=barWidth, color='blue', label='Execution Time (ms)')
    plt.title("Execution Time Comparison Across Scenarios")
    plt.xlabel("Test Scenarios")
    plt.ylabel("Execution Time (ms)")
    plt.xticks(xPositions, labels, rotation=kDefaultRotation, ha='right')
    plt.tight_layout()
    plt.legend()
    plt.show()

    # Memory Usage Comparison
    plt.figure(figsize=(kDefaultWidth, kDefaultHeight))
    plt.bar(xPositions, memory_usages, width=barWidth, color='orange', label='Memory Usage (KB)')
    plt.title("Memory Usage Comparison Across Scenarios")
    plt.xlabel("Test Scenarios")
    plt.ylabel("Memory Usage (KB)")
    plt.xticks(xPositions, labels, rotation=kDefaultRotation, ha='right')
    plt.tight_layout()
    plt.legend()
    plt.show()

    # Number of Comparisons
    plt.figure(figsize=(kDefaultWidth, kDefaultHeight))
    plt.bar(xPositions, comparisons, width=barWidth, color='green', label='Number of Comparisons')
    plt.title("Number of Comparisons Across Scenarios")
    plt.xlabel("Test Scenarios")
    plt.ylabel("Number of Comparisons")
    plt.xticks(xPositions, labels, rotation=kDefaultRotation, ha='right')
    plt.tight_layout()
    plt.legend()
    plt.show()

Graph_Setup()
```

---
[[CO2412 Computational Thinking]]