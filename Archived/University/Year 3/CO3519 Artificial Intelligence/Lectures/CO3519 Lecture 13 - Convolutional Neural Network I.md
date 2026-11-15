---
tags:
  - MODULE-ID
  - MODULE-NAME
---
[[CO3519 Artificial Intelligence]]
[[CO3519 Lecture 12  - Basics of Deep Learning]]

---
# Lecture Documents
[[CO3519 Lecture 13.pdf]]

---
# Learning Objectives
- Introduce ConvNet
- Learning how CNN works considering strides
- How to construct a complete CNN as a end-to-end model

---
# Contents
- Convolutional Neural Network
- Building blocks of CNN
- Convolutional Operation
- Constructing CNN

---
# Brief about CNN
- Convolutional neural networks are a special kind of multi-layer neural network. 
- CNN is a `feed-forward` network that an extract the topological properties from an image.
- Like *almost* every other neural network, they are trained with a version of `back-propagation` algorithm.
- Convolutional neural networks are designed to recognise visual patterns directly from pixel images with minimal pre-processing.
- Can recognise patterns with extreme variability i.e. handwritten characters

---
# CNN Building Blocks
![[CO3519 L13 - CNN Building Blocks.png|671]]

## Convolutional Layer
![[CO3519 L13 - Convolution Layer 1.png]]
![[CO3519 L13 - Convolution Layer 2.png]]
![[CO3519 L13 - Convolution Layer 3.png]]
![[CO3519 L13 - Convolution Layer 4.png]]
![[CO3519 L13 - Convolution Layer 5.png]]
![[CO3519 L13 - Convolution Layer 6.png]]
![[CO3519 L13 - Convolution Layer 7.png]]
![[CO3519 L13 - Convolution Layer 8.png]]
![[CO3519 L13 - Image Process.png]]
## Strides Example
![[CO3519 L13 - Strides 1.png]]
![[CO3519 L13 - Strides 2.png]]
![[CO3519 L13 - Strides 3.png]]
![[CO3519 L13 - Strides 4.png]]
![[CO3519 L13 - Strides 5.png]]
![[CO3519 L13 - Strides 5.5 (Mistake Ordering).png]]
![[CO3519 L13 - Strides 6.png]]
![[CO3519 L13 - Strides 7.png]]
![[CO3519 L13 - Strides 8.png]]
![[CO3519 L13 - Strides 9.png]]
# Convolution Calculation Example
![[CO3519 L13 - Convolution Calc 1.png]]
![[CO3519 L13 - Convolution Calc 2.png]]
![[CO3519 L13 - Convolution Calc 3.png]]
![[CO3519 L13 - Convolution Calc 4.png]]
![[CO3519 L13 - Convolution Calc 5.png]]
![[CO3519 L13 - Convolution Calc 6.png]]
![[CO3519 L13 - Convolution Calc 7.png]]

>[!ERROR] 
>Skips 2 steps. Only moving in steps of 1. Slide error.

![[CO3519 L13 - Convolution Calc 8.png]]
![[CO3519 L13 - Convolution Calc 9.png]]
![[CO3519 L13 - Convolution Calc 10.png]]
![[CO3519 L13 - Convolution Calc 11.png]]
![[CO3519 L13 - Convolution Calc 12.png]]
![[CO3519 L13 - Convolution Calc 13.png]]
![[CO3519 L13 - Convolution Calc 14.png]]
![[CO3519 L13 - Convolution Calc 15.png]]
![[CO3519 L13 - Convolution Calc 16.png]]

---
# Reasons for Feature Map Creation
![[CO3519 L13 - Feature Map Reasons.png]]

---
# Pooling Layer
A subsampling layer commonly referred to as the pooling layer which reduces the spatial size of feature maps helping achieve translation invariance and reduces computational complexity.

Ensures that the same result will be obtained even when the image features have small translations. 

>[!IMPORTANT]
>Important operation for object classification and detection.
## Types of Pooling
Max Pooling - Takes the maximum value from a given window. Helps preserve the most important features.
Average Pooling - Computes the average value in the window, resulting in a smoother representation.
Global Pooling - Reduces an entire feature map to a single value, often used before fully connected layers.
## Pooling Layer Example (Feature Map to Pooling Layer)
![[CO3519 L13 - Pool Layer 1.png]]
![[CO3519 L13 - Pool Layer 2.png]]
![[CO3519 L13 - Pool Layer 3.png]]
![[CO3519 L13 - Pool Layer 4.png]]
![[CO3519 L13 - Pool Layer 5.png]]

---
# Constructing CNNs
- Construct a CNN by placing a number of convolution and pooling layers in cascade:
  - Specify input size.
  - Specify filter size at each layer, etc.
- Add a number of fully connected layers after convolution and pooling layers
- Add a classifier at the end of the network.

![[CO3519 L13 - Constructing Full CNN.png]]

---
# Next Week
- Extension of CNN.

---
[[CO3519 Lecture 14 - ConvNets II]]