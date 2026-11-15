---
tags:
  - CO3722
  - Data-Science
---
[[CO3722 Data Science]]
[[CO3722 Lecture 5 - Data Analysis using Visualisations]]

---
# Lecture Documents
[[CO3722 Lecture 6.pdf]]

---
# Written Notes
![[CO3722 Lecture 6 - Note 1.png]]
![[CO3722 Lecture 6 - Note 2.png]]
![[CO3722 Lecture 6 - Note 3.png]]

---
# Learning Objectives
- Evaluate basic statistics for data analysis.

---
# Some Statistics to Assist with Data Analysis
- Mean
- Median
- Percentiles
- Standard Deviation

---
# Calculating Standard Deviation
## SD Formula
$$ SD = \sqrt{\sum | x - \mu | ^2\div N} $$
## Task
```
Calculate the following:

Variable (x): 6, 2, 3, 1
Find the mean
Square (x-mean)
Sum results
Divide by number of data points
Square root to find SD
```
## Task Working
### Calculating Mean from Data

$$ (6 + 2 + 3 + 1) \div 4 = 3 $$

### Calculating Deviations

$$ 6 -3 = 3 $$

$$ 2 - 3 = -1 $$

$$  3 - 3 = 0$$

$$ 1 - 3 = -2$$

### Squaring Deviations

$$ 3^2 = 9 $$

$$ -1^2 = 1 $$

$$ 0^2 = 0 $$

$$ -2^2 = 4$$

### Add Results

$$ 9 + 1 + 0 + 4 = 14$$

### Divide Number of Data Points

$$ 14 \div 4 = 3.5$$

### Square Root to Find SD#

$$ \sqrt{3.5} = 1.8708286934 $$

## Calculating Again with Additional Value
### Dataset

$$ x = {6, 2, 3, 1, 30} $$

### Mean

$$ (6+ 2 + 3 + 1 + 30) / 5 = 8.4 $$

### Deviations

$$ 6 - 8.4 = -2.4 $$

$$ 2 - 8.4 = -6.4 $$

$$ 3 - 8.4 = -5.4 $$

$$ 1 - 8.4 = -7.4 $$

$$ 30 - 8.4 =  21.6$$

### Squaring Deviations

$$ -2.4^2 = -5.76 $$

$$ -6.4^2 = -40.96 $$

$$ -5.4^2 = -29.16 $$

$$ 7.4^2 = 54.76 $$

$$ 21.6^2 =  466.56 $$

### Adding Results

$$ (-5.76 + -40.96 + -29.16 + 54.76 + 466.56) \div 5 = 89.088$$

### Square Root to Find SD

$$ \sqrt{ 89.088} = 9.4386439704 $$

---
# Normal Distribution
If a data distribution is approximately normal then:
- 68% of the data values lie within one standard deviation
- 95% are within two standard deviations.
- 99.7% lie within three standard deviations.


---
# Standard Deviation - Z-Score (Variance)
The Z-Score simply means how many standard deviations a given value is away from the distribution mean.

Z-Score can either be a positive or negative value.

SM = Score Mean.

$$ (SM) \div SD $$

---
# Data Normalisation
Normalisation refers to the re-scaling numeric data from its real-value into a 0 to 1 range.

This form of normalisation is used in machine learning and data analytics make model training less sensitive to the scale of `features`, which allows the model to converge to better weights and overall leads to a more accurate model.

Normalization is useful when different attributes are measured on different scales. Without it, attributes with larger numerical ranges can overwhelm those with smaller ranges, even when both are equally important.

---
# Normalisation VS Standardisation
Normalisation is good to use when the distribution of data does **not** follow a Normal Distribution. This is useful in algorithms which do not assume any distribution of data.

Standardisation, can be helpful in cases where data follows Normal Distribution, unlike normalisation, standardisation does not have a *bounding range* so even if outliers are present in the data it will not be affected by standardisation.

The choice of using normalisation or standardisation depends on the problem, and the machine learning algorithm being utilised. Therefore, there is no hard-fast rule of when to normalise or standardise data.

> One potential method is by fitting the model to raw normalised and standardised data and comparing the performance for the best results.

---
# Pandas
## Summarising, Aggregating and Grouping Data
The pandas library makes the calculation of different statistics very simple by including pre-built functions of `mean`, `max`, `min`, and standard deviation (`std`).

```python
import pandas as pd

s = pd.Series([10, 12, 15, 20])
std_value = s.std()
print(std_value)
```
## Summarisation
### GroupBy
Many cases require *query-based* summarisation. E.g. What's the total call duration in January for a call centre dataset.

To group these categories together the `groupby()` pandas function can be utilised. Essentially splitting data into differing groups depending on the variable of choice. E.g. the expression `data.groupby('month')` will split the current *DataFrame* by month.

The `groupby()` function returns a **groupBy** object but essentially descirbes how the rows of the original dataset has been split.

>[!NOTE]
>Functions like `max()`, `min()`, `mean()`, `first()`, `last()`, etc can be applied to the GroupBy object to obtain summary statistics for each group.

Groups can also be applied to more than one available to allow for more complex queries.

[Aggregating Statistics](https://pandas.pydata.org/docs/getting_started/intro_tutorials/06_calculate_statistics.html)

---
[[CO3722 Lecture 7 - Further Statistics]]