---
tags:
  - CO3519
  - Artificial-Intelligence
  - "#Incomplete"
---
[[CO3519 Artificial Intelligence]]
[[CO3519 Lecture 4 - Machine Learning II]]

---
# Lecture Documents
[[CO3519 Lecture 5.pdf]]

---
# Written Notes
>[!NOTICE] Book Forgotten
>Primary notebook has been forgotten at home and therefore no **physical** notes were able to be made during this lecture.

![[CO3408 Lecture 5 - Note 1.png]]

---
# Lecture Contents
- Supervised Learning Algorithms - Classification
- Support Vector Machines (SVM)
- Approaches which SVM works/use
- Underlined concepts

---
# Support Vector Machines
## What are SVMs
- Developed in the 1990s by [Vladmir N. Vapnik & Colleagues]
- Powerful machine learning algorithm widely used for both **linear** & **non-linear** classification, as well as regression and outlier detection tasks.
- SVMs are highly adaptable, making them suitable for various applications such as:
  - Text classification
  - Image classification
  - Spam detection
  - Handwriting detection
  - Gene expression analysis
  - Face detection
  - Anomaly detection

The idea behind SVM is to find a **boundary** (or decision boundary) that best separates data points of one class from data points of another class.
## Example Scenario - Email Spam Detection
- Imagine building a system to classify (**spam** & **not spam**)
- Algorithms to classify incoming emails as either **spam** or **not spam**.

![[CO3519 Lecture 5 - Email - Spam or Not Spam.png]]
<sub>Emails incoming spam and not spam contents are the data points.</sub>

**Goal** - Model can learn to distinguish between these two classes using patterns in *past emails*.

Here are some **features** for each email that may be suspicious:
- **X1** - Frequency of the word *free*.
- **X2** - Frequency of the word *urgent*.

![[CO3519 Lecture 5 - Classification XY Diagram - P1.png]]
![[CO3519 Lecture 5 - Classification XY Diagram - P2.png]]
![[CO3519 Lecture 5 - Classification XY Diagram - P3.png]]

> SVM selects the line (hyperplane) that *maximises* the **margin** between two classes (spam and not spam). 
> This maximises the confidence in the classification.
## Why Maximise the Margin
- A wider margin reduces the risk of misclassifying emails
- Helps to better generalise new emails.
## Equation of Hyperplane
$$
\mathbf{w} \cdot \mathbf{x} + b = 0
$$
where $\mathbf{w}$ is the weight vector and $b$ is the bias.
## Non-Linearly Separable
Problem with  **Linear Boundaries**:
- FER (Facial Expression Recognition) - i.e. Imagine building a model to classify facial expressions into six categories. (Angry, Happy, Sad, Neutral, Fear, and Surprise)
- Each face image can be represented by features such as:
  - Edge Patterns
  - Texture
  - Texture Brightness
  - Key Points on Face (e.g. Position of eyebrows, mouth, etc)

>[!warning] Challenge with FER
> These six expressions may not be linearly separable due to overlapping or similar features.
### Solution with Kernels
SVM can use a *kernel function* to map the data into a higher-dimensional space wwhere it becomes easier to separate.
#### Radial Basis Function (RBF) Kernel
- Useful for non-linear data - helps separate classes by creating a more flexible decision boundary.
#### One-Vs-One Strategy
- SVM can classify pairs of expressions at a time. (e.g. one SVM model might classify "happy" vs "sad", another "angry" vs "neutral", etc for all combinations of emotions)
#### One-Vs-All Strategy
- Score for each class is computed based on the output of the respective binary classifier that was trained to distinguish that class from all others.

---
[[CO3519 Lecture 6 - Supervised Learning - Classifications]]