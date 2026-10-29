---
title: Projects
description: Things I've built, at work and for fun.
---

Things I've built, at work and for fun.

<!--
Each project is a ## heading, a one-line description, then one bullet per technology.
Copy this block to add another project:

## [project-name](https://github.com/violetguos/project-name)
One sentence on what it does.

- Language
- Framework
-->

## [Street numbers in the wild](https://github.com/violetguos/humanware)
Helping people with vision loss find addresses with a phone camera. Earlier work assumed someone had already drawn a box around the house number. We added a Faster R-CNN detector to find the number on a realistic house render first, then read the digits with a ResNet. The detector reached 89.6% mAP, and the full pipeline lost only 0.3% accuracy compared with hand-drawn boxes.

- Python
- PyTorch
- Faster R-CNN
- ResNet

## [Speaker accent classification](https://github.com/violetguos/project-ift6390)
Telling North American from British English speakers by sound alone, using audiobook recordings. We compared RNNs and CNNs on three kinds of audio features. An RNN on MFCC features scored 95.3% test accuracy, well ahead of the SVM baseline, and it picked up on vowels that are typical of British speech.

- Python
- Keras
- librosa
- scikit-learn

## [ECG signals from unlabelled data](https://github.com/violetguos/OMsignal)
Predicting heart-rhythm measures and identifying the wearer from raw ECG signals, for OMsignal, with about 600k unlabelled samples alongside a small labelled set. We tried autoencoders, mean teacher and ladder networks for semi-supervised learning. The lesson stuck: the only team near 98% accuracy used a simple model on hand-made features from cardiology research.

- Python
- PyTorch
- TensorBoard
- comet.ml

## [Fact or fake news](https://github.com/violetguos/COMP550-Project)
Classifying news claims as false, partly true or true, using data from the 2019 Leaders Prize competition. We compared linear, ensemble and neural models on 15,555 claims, of which only 11% were true. Random forest and a bidirectional LSTM tied on weighted F1, but every model struggled to find the true claims, which made the class imbalance the real problem to solve.

- Python
- scikit-learn
- XGBoost
- pandas

## [violetguos.github.io](https://github.com/violetguos/violetguos.github.io)
This site. Plain Markdown in, static HTML out, no JavaScript by default.

- Astro
- CSS
- GitHub Actions
