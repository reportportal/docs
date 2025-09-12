---
sidebar_position: 5
sidebar_label: How models are retrained
description: Learn when Auto-Analysis and ML models retrain, how data is used, and what thresholds apply to keep ReportPortal test failure analysis accurate and project-specific.
---

# How models are retrained

In the Auto-analysis and Machine Learning (ML) suggestions processes, several models contribute:

* Auto-analysis XGBoost model, which provides the likelihood of a test item being of a specific type based on the most similar test item in the history of that defect type.
* ML suggestions XGBoost model, which offers the probability for a test item to resemble the test item from the history.
* Error message language model on Tf-Idf vectors (Random Forest Classifier), which delivers a probability for the error message to be of a specific defect type or its subtype based on the words in the message. The probability from this model serves as a feature in the main boosting algorithm.

In the beginning, you have global models at your disposal. These models, trained on six projects, have demonstrated average good accuracy. To develop a more powerful and personalized test failure analysis, you should retrain the models on the data from your project. At the start of the project, you have global models available. They were trained on six projects and validated to provide good average accuracy. To have a more powerful and personalized test failure analysis, the models should be retrained on the data from the project.

:::note
If a global model performs better on your project data, the retrained model will not be saved, because we only keep custom models that outperform the global model on your data.
:::

Triggering information and retrained models are stored in Minio (or a filesystem), as set up in the Analyzer service settings.

Conditions for triggering retraining for **Error Message Random Forest Classifier**:
* Each time the test item defect type is changed to another issue type (except "To Investigate"), we update the triggering info. This stores the quantity of test items with defect types and the quantity of test items with defect types since the last training. This information is stored in the file "defect_type_trigger_info" in Minio.
* Retraining is triggered when over 100 labelled items are detected and 100 labelled test items have been identified since the last training. If validation data metrics are better than metrics for the global model on the same data points, a custom "defect_type" model is saved in Minio. This will then be utilized in the auto-analysis and suggestions functionality for enhancing test automation results dashboard.


Conditions for triggering retraining of **Auto-analysis** and **Suggestion XGBoost models**:
* We collect training data from several sources:
    * When a suggestion is selected (the chosen test item will be a positive example, others will be negative).
    * When you don't select any suggestion and manually edit the test item (all suggestions become negative examples).
    * Auto-analysis identifies a similar test item; this is considered a positive example unless the defect type is manually changed by the user.

When either a suggestion analysis runs or a defect type change occurs, we update the trigger info for both models. This information is stored in "auto_analysis_trigger_info" and "suggestion_trigger_info" files in Minio.

Retraining is triggered when:
* For the auto-analysis model: when over 300 labelled items and 100 labelled test items have been identified since the last training. If validation data metrics are improved, a custom "auto_analysis" model is saved in Minio and utilized in the auto-analysis function.
* For the suggestion model: when more than 100 labelled items and 50 labelled items have been identified since the last training. If validation data metrics are improved, a custom "suggestion" model is saved in Minio and used in the suggestions function.
