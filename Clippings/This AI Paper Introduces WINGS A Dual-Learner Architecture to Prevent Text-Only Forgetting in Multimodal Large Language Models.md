---
title: "This AI Paper Introduces WINGS: A Dual-Learner Architecture to Prevent Text-Only Forgetting in Multimodal Large Language Models"
source: "https://www.marktechpost.com/2025/06/21/this-ai-paper-introduces-wings-a-dual-learner-architecture-to-prevent-text-only-forgetting-in-multimodal-large-language-models/?amp"
author:
  - "[[Nikhil]]"
published: 2025-06-21
created: 2025-06-24
description: "WINGS prevents text-only forgetting in multimodal LLMs by integrating visual and textual learners with low-rank residual attention"
tags:
  - "clippings"
---
[![](https://www.marktechpost.com/wp-content/uploads/2025/06/Key-speakers-from-scaled.png)](https://minicon.marktechpost.com/)

[Home](https://www.marktechpost.com/?amp) This AI Paper Introduces WINGS: A Dual-Learner Architecture to Prevent Text-Only Forgetting...

### Multimodal LLMs: Expanding Capabilities Across Text and Vision

Expanding large language models (LLMs) to handle multiple modalities, particularly images and text, has enabled the development of more interactive and intuitive AI systems. Multimodal LLMs (MLLMs) can interpret visuals, answer questions about images, and engage in dialogues that include both text and pictures. Their ability to reason across visual and linguistic domains makes them increasingly valuable for applications such as education, content generation, and interactive assistants.

### The Challenge of Text-Only Forgetting in MLLMs

However, integrating vision into LLMs creates a problem. When trained on datasets that mix images with text, MLLMs often lose their ability to handle purely textual tasks. This phenomenon, known as text-only forgetting, occurs because visual tokens inserted into the language sequence divert the model’s attention away from the text. As a result, the MLLM starts prioritizing image-related content and performs poorly on tasks that require only language understanding, such as basic reasoning, comprehension, or textual question-and-answer (Q&A) tasks.

### Limitations of Existing Mitigation Strategies

[![](https://www.marktechpost.com/wp-content/uploads/2025/06/520X400-1.png)](https://pxl.to/15p40hn)

Several methods attempt to address this degradation. Some approaches reintroduce large amounts of text-only data during training, while others alternate between text-only and multimodal fine-tuning. These strategies aim to remind the model of its original language capabilities. Other designs include adapter layers or prompt-based tuning. However, these techniques often increase training costs, require complex switching logic during inference, or fail to restore text comprehension entirely. The problem largely stems from how the model’s attention shifts when image tokens are introduced into the sequence.

### Introducing WINGS: A Dual-Learner Approach by Alibaba and Nanjing University

Researchers from Alibaba Group’s AI Business team and Nanjing University have introduced a new approach called WINGS. The design adds two new modules—visual and textual learners—into each layer of the MLLM. These learners work in parallel with the model’s core attention mechanism. The structure resembles “wings” attached to either side of the attention layers. A routing component controls how much attention each learner receives based on the current token mix, allowing the model to balance its focus between visual and textual information dynamically.

The WINGS architecture uses a mechanism called Low-Rank Residual Attention (LoRRA), which keeps computations lightweight while enabling the learners to capture essential modality-specific information. In the first stage of training, only visual learners are activated to align image features. In the second stage, both visual and textual learners are co-trained with a router module that uses attention weights to allocate responsibility. Each learner uses efficient attention blocks to interact with either the image or the surrounding text, and their outputs are combined with those of the main model. This ensures that visual attention doesn’t overwhelm textual understanding.

### WINGS Performance Benchmarks Across Text and Multimodal Tasks

In terms of performance, WINGS showed strong results. On the MMLU dataset, it achieved a text-only score of 60.53, representing an improvement of 9.70 points compared to a similar baseline model. For CMMLU, it scored 69.82, which is 9.36 points higher than the baseline. In reasoning tasks like Race-High, it gained 11.9 points, and in WSC, an improvement of 11.12 points was recorded. In multimodal benchmarks like MMMU-VAL, WINGS achieved an improvement of 4.78 points. It also demonstrated robust results on the IIT benchmark, handling mixed text-and-image multi-turn dialogues more effectively than other open-source MLLMs at the same scale.

In summary, the researchers tackled the issue of catastrophic text-only forgetting in MLLMs by introducing WINGS, an architecture that pairs dedicated visual and textual learners alongside attention routing. By analyzing attention shifts and designing targeted interventions, they maintained text performance while enhancing visual understanding, offering a more balanced and efficient multimodal model.

---

Check out the **[Paper](https://arxiv.org/abs/2406.03496v1)*.*** All credit for this research goes to the researchers of this project. Also, feel free to follow us on **[==Twitter==](https://x.com/intent/follow?screen_name=marktechpost)**  and don’t forget to join our  **[100k+ ML SubReddit](https://www.reddit.com/r/machinelearningnews/)**  and Subscribe to  **[our Newsletter](https://www.airesearchinsights.com/subscribe)**.

[Exit mobile version](https://www.marktechpost.com/2025/06/21/this-ai-paper-introduces-wings-a-dual-learner-architecture-to-prevent-text-only-forgetting-in-multimodal-large-language-models/?noamp=mobile&amp)