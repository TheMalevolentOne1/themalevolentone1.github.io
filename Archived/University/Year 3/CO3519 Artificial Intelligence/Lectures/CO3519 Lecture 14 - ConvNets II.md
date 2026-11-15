---
tags:
  - CO3404
  - Distributed-Systems
---
[[CO3519 Artificial Intelligence]]
[[CO3519 Lecture 13 - Convolutional Neural Network I]]

---
# Lecture Documents
[[CO3519 Lecture 14.pdf]]

---
# Learning Objectives
- Introduce and familiarise with additional knowledge about ConvNet
- Learning how complete CNN blocks works and tackling the main issues
- Be able to build an understanding of the deep learning frameworks
- Familiarise with the metrics related to the recognition task

---
# Deep Learning Frameworks
Deep learning frameworks are essential tools that simplify the process of designing, training, and deploying neural networks. Instead of implementing complex mathematical operations from scratch these frameworks provide pre-built functions optimised computation and GPU acceleration to speed up development.

1. TensorFlow - A highly scalable framework from Google.
2. Keras - A user-friendly API for deep learning
3. PyTorch - A flexible and research-oriented framework from Facebook
4. Caffe - A lightweight, fast framework for image processing.

> Other frameworks (MXNet, Theano, CNTK) - Specialised frameowkrs with unique advantages
## TensorFlow
TensorFlow is an open-source deep learning framework developed by `Google Brain`. It is widely used for:
- Image and speech recognition
- Natural Language Processing
- Reinforcement Learning
## Keras
Keras is a high-level deep learning API that runs on top of TensorFlow making it easier to build and train deep learning models. It is widely used for:
- Rapid prototyping
- Building neural networks
- Accessing built-in pre-trained models.
### Benefits
- Simple, intuitive synrax for building neural networks.
- Support for multiple backends like TensorFlow, Theano, and CNTK.
- Built-in pre-trained models like ResNet, VGG, and Inception.
- Rapid prototyping for beginners and professionals alike.
### Installing & Importing
```python
!pip install keras

import keras
keras.__version__

import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers

import numpy as np
import matplotlib.pyplot as plt
```

## PyTorch
PyTorch is an open-source deep learning framework developed by Facebook AI Research (FAIR). It is used widely in research and production due to its dynamic computation graphs and intuitive debugging.

```python
import torch
torch.__version__
```
### Benefits
- Dynamic computation graphs for flexible model building.
- Strong GPU acceleration with simple commands.
- Better debugging compared to static graph-based frameworks.
- TorchScript for converting models to production-ready versions.
## More Deep Learning Frameworks
| Year | Framework                          | Description                                                                                                             |
| :--: | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| 2002 | Torch                              | Open-source deep learning library based on Lua, precursor to PyTorch                                                    |
| 2007 | Theano                             | One of the earliest deep learning libraries, developed by the Montreal Institute for Learning Algorithms (MILA).        |
| 2013 | Caffe                              | Deep learning framework developed by the Berkeley Vision and Learning Center (BVLC).                                    |
| 2014 | DL4J (DeepLearning4j)              | Deep learning framework for Java, used in production environments.                                                      |
| 2015 | Chainer                            | Deep learning framework developed by Preferred Networks, focusing on flexibility and performance.                       |
| 2015 | Keras                              | High-level neural networks API, originally developed as a wrapper for TensorFlow.                                       |
| 2015 | TensorFlow                         | Open-source library developed by Google for deep learning and machine learning.                                         |
| 2016 | PyTorch                            | Open-source machine learning library developed by Facebook's AI Research lab.                                           |
| 2016 | CNTK (Microsoft Cognitive Toolkit) | Deep learning framework developed by Microsoft, optimized for performance.                                              |
| 2017 | ONNX                               | Open Neural Network Exchange; a cross-platform framework for model interchange.                                         |
| 2018 | Fastai                             | High-level deep learning library built on top of PyTorch, designed to make training deep neural networks easy and fast. |

---
# Spatial Dimensions
Stride in Convolution.

The stride is the step size

---
[[CO3519 Lecture 5 - Supervised Learning I]]