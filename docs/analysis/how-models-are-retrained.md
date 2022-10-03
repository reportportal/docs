---
sidebar_position: 5
sidebar_label: How models are retrained
---

# How models are retrained

In the Auto-analysis and ML suggestions processes several models take part:
* Auto-analysis XGBoost model, which gives the probability for a test item to be of a specific type based on the most similar test item in the history with this defect type
* ML suggestions XGBoost model, which gives the probability for a test item to be similar to the test item from the history
* Error message language model on Tf-Idf vectors(Random Forest Classifier), which gives a probability for the error message to be of a specific defect type or its subtype based on the words in the message. The probability from this model is taken as a feature in the main boosting algorithm.

At the start of the project, you have global models. They were trained on 6 projects and were validated to give a good accuracy on average. To have a more powerful and personalized analysis, the models should be retrained on the data from the project. **Note:** If a global model performs better on your data, the retrained model won't be saved. As far as we save a custom model only if it performs better for your data than the global one.

Triggering information and retrained models are saved in Minio(or a filesystem) as you set up in the Analyzer service settings.

Retraining triggering conditions for **Error message Random Forest Classifier**:
* Each time the test item defect type is changed to another issue type(except "To Investigate"), we update the triggering info, which saves the quantity of test items with defect types and the quantity of test items with defect types since the last training. This information is saved in the file "defect_type_trigger_info" in Minio.
* When we have more than 100 labelled items, and since last training we have 100 labelled test items, retraining is triggered and if validation data metrics are better than metrics for a global model for the same data points, then we save a custom "defect_type" model in Minio and use it further in the auto-analysis and suggestions functionality.

Retraining triggering conditions for **Auto-analysis** and **Suggestion XGBoost models**:
* We gather training data for training from several sources:
    * when you choose one of the suggestions(the chosen test item will be a positive example, others will be negative ones)
    * when you don't choose any suggestion and edit the test item somehow(set up a defect type manually, add a comment, etc.), all suggestions become negative examples;
    * when auto-analysis runs and for a test item it finds a similar test item, we consider it a positive example, until the user changes the defect type for it manually. In this case, the result will be marked as a negative one.
* Each time a suggestion analysis runs or changing a defect type happens, we update the triggering info for both models. This information is saved in the files  "auto_analysis_trigger_info" and "suggestion_tgrigger_info" in Minio.
* When we have more than 300 labelled items, and since last training we have 100 labelled test items, retraining is triggered and if validation data metrics are better than metrics for a global model for the same data points, then we save a custom "auto_anlysis" model in Minio and use it further in the auto-analysis functionality.
* When we have more than 100 labelled items, and since last training we have 50 labelled test items, retraining is triggered and if validation data metrics are better than metrics for a global model for the same data points, then we save a custom "suggestion" model in Minio and use it further in the suggestions functionality.
