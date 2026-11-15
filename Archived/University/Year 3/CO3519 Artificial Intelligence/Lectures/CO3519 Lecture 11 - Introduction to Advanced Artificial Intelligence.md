---
tags:
  - CO3519
  - Artificial-Intelligence
---
[[CO3519 Artificial Intelligence]]
[[CO3519 Lecture 10 - Reinforcement Learning]]

---
# Lecture Documents
[[CO3519 Lecture 11.pdf]]

---
# Written Notes
- No written notes made all content from the lecture.

---
# Course Overview (Recap)
- Module: Artificial Intelligence
- Course ID: CO3519
- Number of Assessments: 2
  - 1st Assignment - Weightage => 50%, Contents => Facial Expression Recognition using ML. ✔️
  - 2nd Assignment - Weightage => 50%, Contents => Implementation of Deep Learning Algorithm and its visual demonstration.
- Pre-Requisites: Python, Advanced Programming, Basic Machine Learning
- Study/Support Material: It will be provided along each lecture on blackboard.

---
# Learning Objectives
- Brief recap of traditional AI and ML concepts
- History of advanced AI (Deep Learning)
- What is DL
- What is perceptron

---
# This Semester Covers
How LLM work and CNN (conventional neural networks).

---
# Traditional AI and ML Recap
Key Points Recap:
- AI - Simulating Human Intelligence (rule-based systems, expert systems)
- Machine Learning - Learning patterns from data (Linear Regression, Decision Trees)

Limitations of Traditional ML:
- Feature Engineering - Handcrafting Features is tedious.
- Performance - Struggles with high-dimensional data like images or text.

---
# Why Deep Learning?
## Basic Steps in ML
1) Collect data and extract features
2) Build Modal
3) Optimisation - Mimise Error

DL: Requires large amounts of data
ML: Can be effective with smaller, structured datasets

DL: can outperform machine learning for complex tasks like image recognition and natural language understanding
ML: can be more efficient and easier to implement for simplier tasks.

---
# What is Deep Learning
Sub-field of ML which attempts to learn high-level abstractions in data by utilising hierarchical architectures.

Using a neural network with several layers of nodes between input and output.

The series of layers between input and output do *feature identification* and processing in a series of stages just as a human brain does.

```mermaid
graph LR
    A[Input: Dog/Cat Image] --> B[Layer 1: Edges & Lines]
    B --> C[Layer 2: Shapes & Textures]
    C --> D[Layer 3: Eyes, Ears & Snouts]
    D --> E[Output: Prediction 'Dog']

    style A fill:#f9f,stroke:#333,stroke-width:2px
    style E fill:#9f9,stroke:#333,stroke-width:2px
```

---
# History of DL and Neural Network
```mermaid
timeline
    title History of Deep Learning & Neural Networks
    section Early Foundations
        1958 : Perceptron <br> (Rosenblatt)
        1960 : Adaline <br> (Widrow & Hoff)
        1969 : Perceptrons Book <br> (Minsky & Papert)
        1970 : Backpropagation <br> (Linnainmaa)
    section The AI Winter & Thaw
        1974 : Backprop Applied <br> (Werbos)
        1986 : Backprop Popularized <br> (Rumelhart, Hinton, Williams)
        1997 : LSTM <br> (Hochreiter & Schmidhuber)
        1998 : LeNet / OCR <br> (LeCun et al.)
    section Modern Renaissance
        2006 : Deep Learning Term Coined <br> (Hinton et al.)
        2009 : ImageNet Dataset <br> (Deng et al.)
        2012 : AlexNet <br> (Krizhevsky, Sutskever, Hinton)
        2015 : ResNet <br> (He et al.)
    section Advanced DL
        2016 : AlphaGo <br> (DeepMind)
        2017 : Transformers <br> (Vaswani et al.)
        2018 : BERT <br> (Google)
    section Recent Developments
        2021 : DALL-E & Codex <br> (OpenAI)
        2022 : AlphaTensor <br> (DeepMind)
        2023 : GPT-4, SAM, CLIP <br> (Generative AI Boom)
```
---
# Perceptron
Perceptrons, Rosenblatt 1957/58

- Developed first implementation of perceptron
- Machine consist of 400 photocells, classify images
- Perceptron is a one-layer netowkr that an classify things into two parts.
## A simple Neural Network
```mermaid diagram
graph LR
    subgraph Inputs
    x1((x1))
    x2((x2))
    x3((x3))
    end
    
    subgraph Weights
    w1(w1)
    w2(w2)
    w3(w3)
    end

    subgraph Neuron
    S["Weighted Sum <br/> Σ (x*w) + b"]
    A["Activation Function <br/> (Step/Sign)"]
    end
    
    y((Output y))

    %% FIX: Use standard arrows or add spaces like -- "text" -->
    x1 --> S
    x2 --> S
    x3 --> S
    
    S --> A
    A --> y

    style S fill:#f9f,stroke:#333
    style A fill:#ff9,stroke:#333
```

### Biological Inspiration
- **Neurons:** Inspired by biological neurons in the brain.
- **Synapses:** The "Weights" ($w$) mimic the synaptic strength between neurons. A higher weight means a stronger connection.
- **All-or-None Law:** Just like a biological neuron either fires an action potential or doesn't, the Perceptron uses an activation function to output a crisp **1 (Fire)** or **0 (Don't Fire)** based on whether the signal crosses a **threshold**.

- These neurons receive signals from other neurons
- Depending on the strength, the neuron can either active or off/stay.
## A Perceptron Example
$$z = (x_1 \cdot w_1) + (x_2 \cdot w_2) + (x_3 \cdot w_3) + b$$
x (inputs) - data e.g. water temp.
w (weights) - importance of that data
b (bias) - shifting threshold
z (net input) - total strength of the signal before decision made

---
# Next Week
- Convolutional Neural Networks (CNNs) - Basics
- Introduction To CNNs - Why CNNs are effective for image data
- Key Components:
  - Convolution Layers
  - Pooling Layers
  - Filters
  - Stride
  - Padding 
- Activation Functions
- Loss functions
- Gradient descent

---
[[CO3519 Lecture 12  - Basics of Deep Learning]]