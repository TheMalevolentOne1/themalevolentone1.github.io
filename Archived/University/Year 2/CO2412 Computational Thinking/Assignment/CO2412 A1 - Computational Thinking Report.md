
---

#UCLan
#Computational-Thinking 
#Assignment-Report

---
[Contents](CO2412%20Computational%20Thinking.md)
##### Introduction (100)

In the modern age of society, data is a priority for many organisations and companies, which heavily rely on efficient data processing algorithms (such as Quick Sort and Merge Sort in terms of sorting large amounts of data) which are used to either efficiency solve a purpose such as sorting, or pattern recognition, to analyse data for patterns, used commonly in customer databases to organise search engine results or optimise the scaling of large datasets during scientific studies and research.

##### Methodology (150)

The program uses two datasets, a random dataset and a reversed dataset. The random dataset represents a real-world scenario, which could be for any for anything, where the data lacks any order. On the other hand, the reversed dataset presents the worst-case scenario for the algorithm for sorting, as it requires reversing the entire dataset, as its in the opposing order.

Merge Sort is a divide and conquer algorithm, which recursively divides the dataset into smaller lists, sorts them and merges the result. As it is O (n log n) time complexity, it is known for stability and predictability.

QuickSort is another divide and conquer algorithm, which chooses a pivot element, segmenting the list around that pivot and then recursively sorts the split lists. Typically QuickSort has an average for O (n log n) time complexity however, the efficiency of the algorithm goes to O(n^2) in the worst case.

##### Analysis and Disdcussion (500)

Analysing the performances of Merge Sort and Quick Sort by sorting the various different datasets, both random and reversed, and their varying data sizes, demonstrated that merge sort, had the expected stable performance of (as stated in the Introduction to algorithms Cormen, T.H. et al. (2022)) O.(n log n) time complexity. Proceeding with both the random and reversed datasets with comparable efficiency, however, my graph seem to demonstrate a very minor increase in memory usage and execution time, for the Merge Sort reversed list. 

Trends emerged in the graphs of the algorithm's applied to the reversed and random small and large datasets. As a result memory usage for Quick Sort suffered a slight increase during the reversed dataset, probably as a result of it using larger lists than merge sort. Demonstrating that deviations in dataset size affects the memory usage, therefore as the dataset grows larger, or more complex then the Quick Sort algorithm's requirements for memory usage increase as well. 

The main trends noticed in the graphs were as follows:
- The execution time graph, presented data that suggested Quick Sort was notably faster compared to Merge Sort, which did not sort the data to the same speed that Quick Sort did however, in turn QuickSort resulted in higher memory usage.
![[execution_time_computational_thinking_graph.png]]
- The Quick Sort algorithm in regards to memory usage, uses more in worse case scenarios like in the reversed dataset. Whereas Merge Sort, is less efficient for memory-constrained environments.
![[computational thinking memory usage graph.png]]
- Quick Sort also had fewer comparisons on the random datasets but significantly more on the reversed datasets.
![[computational thinking comparsions graph.png]]
As the dataset sizes increased both algorithms required more memory and computation time. This is proven by the correlation between the size, memory usage, and time increases and scales with the size. Whereas Quick Sort's performance was shown to be more dependent on the position of the pivot and the order of the dataset. For reversed datasets Quick Sort's execution time and memory usage were shown to increase due to size, same with Merge Sort, however for the QuickSort large reversed dataset, it seemed to take a little while longer, than the others.
##### Real-World Implications (100)

The performance of algorithms like Merge Sort and Quick Sort has direct real-world implications involving large-scale data processing. Quick Sort has speed and efficiency and therefore on an average-scenario scenario is able to be used in projects like SEO. A downside to Quick Sort as stated in EducationalWave (2024) Pros and Cons of Quick Sort, it can be sensitive to input order and the pivot point selection can sometimes be less reliable than other algorithms, as the pivot if placed in a poor place, will result in a worser time complexity and therefore overall slower speeds.

On the other hand, Merge Sort's consistent performance and stability, has proved it to be predictable. Its higher memory usage, however makes it less practical in spaces with fewer resources. The importance of understanding the positives and negatives of the two algorithms is essential for the real world, as companies such as social media rely on the correct algorithms to be used, so that they can main functionality.

##### Conclusion (100)

In conclusion, both Merge Sort and Quick Sort are effective sorting algorithms, each with distinct advantages and limitations. Merge Sort has consistent performance, due to its time complexity of O(n log n), making it reliable across various data scenarios. However, its higher memory consumption can be a drawback in environments with limited resources. Quick Sort, on the other hand, is generally faster for random datasets due to its efficient average-case performance. Nevertheless, its sensitivity to input order and pivot selection can lead to performance worse than expected in highly structured or reversed datasets.

##### References
Cormen, T.H. _et al._ (2022) _Introduction to algorithms_. Cambridge, Massachusett: The Mit Press.

Lad, H. _et al._ (2018) ‘Design and Implementation of Search Engine using Quick Sort Algorithm’, _International Journal of Computer Science Trends and Technology (IJCST)_, 6. Available at: https://www.ijcstjournal.org/volume-6/issue-2/IJCST-V6I2P5.pdf (Accessed: 19 January 2025).

EducationalWave - Pros and Cons Explained. (2024). _Pros and Cons of Quick Sort - EducationalWave_. [online] Available at: https://www.educationalwave.com/pros-and-cons-of-quick-sort/#Unstable_Sorting [Accessed 20 Jan. 2025].

---
[[CO2412 Computational Thinking]]