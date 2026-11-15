---
tags:
  - CO3519
  - Artificial-Intelligence
---
[[CO3519 Artificial Intelligence]]
[[CO3519 Lecture 11 - Introduction to Advanced Artificial Intelligence]]

---
# Lecture Documents
[[CO3519 Lecture 12.pdf]]

---
# Learning Objectives
- Introduce and familiarise with the basics of deep learning
- Introduce and explain how multi-perceptrons work
- Understanding about the problems in each NN (Neural Network) followed by CNN
---
# Lecture Contents
- Abstract Neuron Model
- Multilayer Perceptrons (MLPs)
- Feedforward Neural Networks
- Backpropagation Algorithm
- Importance of Weight Initialisation and Learning Rate
- Convolutional Neural Networks

---
# Abstract Neuron Model
Neuron in a model processes the information by taking `inputs` and `applying weights` to them, adding a `bias` then finding whether it should `activate` based on the result.

$$y=\theta^Tx$$
x is the `vector of inputs` to the neuron
theta is the `vector of weights` (also called a pattern or filter)
theta^T\*x is the `dot product` between the `weights` and `inputs`. 

![[CO3519 L12 - Neuron xn.png]]
![[CO3519 L12 - Neuron.png]]
<sub>Neuron Model Diagram</sub>

Bias is added to the `weighted sum` which helps the neuron adjust its `threshold for activation`.

---
# Artificial Neural Network
## Problems with a Single Perceptron
Single-layer perceptron's can only solve linearly separable problems (Step Function, Linear Function).

An MLP can be defined as a combination of many neurons.

Multi-layer Perceptrons (MLPs) with hidden layers can approximate complex functions using `non-linear activation` functions.

---
# Feedforward Propagation
Data flows in one direction, from the input layer through one or more hidden layers to the output layer.

![[CO3519 L12 - Feedforward Diagram with hn layers.png]]
<sub>Feedforward Diagram with h^n layers</sub>

---
# Feedforward Deep Network Components

![[CO3519 L12 - Components Diagram for Feedforward.png]]
<sub>Feedforward Propagation Components</sub>
## Input Layer
The model receives `raw features` from the image, which is represented as a vector.
## Hidden Layer
Early hidden layers might detect `low-level features` i.e. edges, textures or gradients and are represented as a vector.

![[CO3519 L12 - MLP Diagram.png]]
<sub>Hidden Layer Process</sub>

Hierarchy if representations with increasing level of abstraction each stage is a kind of trainable nonlinear feature transform.

```
Image Recogniton
pixel -> edge -> texton -> motif -> part -> object

Text
Character -> word -> word group -> clause -> sentence -> story
```
## Output Layer
The output layer produces the final prediction. 

The number of neuron depends on the task.
## Regression
**Regression** - 1 neuron with linear activation function.

$$ y = w^th +b$$
Linear units - no nonlinearity.

![[CO3519 L12 - FeedForward Regression.png]]
<sub>Regression Output Layer</sub>
## Multi-Layer Regression
n neuron with a linear activation function.
$$ y = w^Th+b $$
Linear units - no nonlinearity.
## Binary Classification
1 neuron with a sigmoid activation function
$$ y = \sigma(w^Th+b) $$
Linear units - no nonlinearity.
## Multi-Class Classification
n neurons (one per class) with a softmax activation function.

`y = softmax(z) where z =`
$$ z = W^Th+b $$
Example: Classify handwritten digits.
## Activation Functions
Considering a neuron.

$$ Y = \sum(weight * input) + bias $$

The value `y` can be anything ranging from `-inf` to `+inf`.
The neuron doesn't really know the bounds of the value.
How to know whether the neuron should fire or not?
### Linear Function
A straight line function where activation is proportional to input:
$$ f(x) = cx $$
Not appropriate for modelling complex nonlinear functions.
![[CO3519 L12 - Linear Act Func.png]]
### Sigmoid Function
If the value of `Y` is above a certain value declare it `activated`.

$$ f(x) = 1 \div 1 + e^{-x} $$

if sigmoid (x) >= 0.5 predict class 1.
if sigmoid (x) < 0.5 predict class 0.

Often used in binary classification tasks where a threshold of 0.5 is used to make decisions.
![[CO3519 L12 - Sigmoid Act Func.png]]
### ReLu (Rectified Linear Unit) Function
It is a non-linear function and is capable of modelling complex functions.

$$ f(x) = max(0,x) $$
For any `input` x > 0 the output is x (no change).
For any `input` x <= 0 the output is 0 (the neuron is 'turned off').

The range of ReLu is [0, inf].
It ensures sparsity of activations.
![[CO3519 L12 - ReLu Act Func.png]]
### Softmax Function
In softmax the output is a vector of probabilities and there isn't a single threshold used in the same way as sigmoid.

Thresholding can be applied during classification:
$$ \mathrm{softmax}(x_i) = \frac{e^{x_i}}{\sum_{j=1}^{n} e^{x_j}} $$

For multi-class classification after applying softmax typically the class with the highest probability is selected as prediction.
![[CO3519 L12 - Softmax Act Func.png|622]]

---
# Problem with Forward Propagation
MLPs have many weights and biases so how can they be updated to reduce error?

![[CO3519 L12- ForwardFeed Problem.png]]<sub>Forward Propagation Problem</sub>

---
# Backpropagation
Solution - Backpropagation calculates the gradients of the loss with respect to each weight and bias.

Backpropagation is a common method for training a neural network.

By `optimising weights` so that the neural network can learn how to correctly map arbitrary inputs to outputs.
## Steps
1) Do forwards propagation
2) Compute the Loss/Error (for instance, MSE)
3) Backward Pass
   - Use the *chain rule* to compute gradients
   - Adjust weights and biases
4) Repeat forward and backward passes to reduce the loss over time.

![[CO3519 L12 - Backpropagation.png]]
## What is the problem with Deep ANN (Deep Artificial Neural Network)
- Consider an image classification problem of an indoor/outdoor scene)
- Image size is `64 x 64 x 3 = 12288 (input layer)`
- Two hidden layers h1 = 1000 neurons, h2 = 500 neurons
- Outputs = 2 neurons (one for each class)

How many parameters would need to be trained?
input layer -> h1 -> h2 -> output layer -> 
`12288 x (1000) + (1000 x 500) + (500 x 2) = 12789000`
(12.7 million) very small image and very small network.

>[!TASK]
>What if the image size is 256 x 256 x 3 and network has 4 layers with 1000 neurons and 1000 outputs?
>
>256 x 256 x 3 = 196608 (input layer)
>4 layers 1000 neurons each
>1000 outputs
>
> parameters = (neurons_prev × neurons_next) + neurons_next
> 
>196608 × 1000 ← input → L1  
 >+1000 × 1000 ← L1 → L2  
>+1000 × 1000 ← L2 → L3  
>+1000 × 1000 ← L3 → L4  
>+1000 × 1000 ← L4 → output
>= 200,608,000
## The Solution? CNN (Convolutional Neural Networks)
![[CO3519 L12 - CNN.png]]
## Brief Information about CNN
![[CO3519 L12 - Brief info cnn.png]]
[Yann LeCun](https://scholar.google.com/citations?user=WLN3QrAAAAAJ&hl=en)
[Yoshua Bengio](https://scholar.google.com/citations?user=kukA0LcAAAAJ&hl=en&oi=sra)

---
# Next Week
Convolutional Neural Networks (CNNs) Basics
Introduction to CNNs. Why are CNNs effect for image data?
Key Components:
- Convolution Layers
- Pooling Layers
- Filters
- Stride
- Padding

---
[[CO3519 Lecture 13 - Convolutional Neural Network I]]