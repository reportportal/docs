---
sidebar_position: 4
sidebar_label: ML Suggestions
---

# ML Suggestions

ML suggestions functionality is based on previously analyzed results (either manually or via Auto-analysis feature) using Machine Learning. The functionality is provided by the Analyzer service in combination with ElasticSearch.

This analysis hints what are the most similar analyzed items to the current test item. You can interact with this functionality in several ways:
* Choose one of the suggested items if you see that the reason for the current test item is similar to the suggested one. When you choose the item and apply changes to the current item, the following test item characteristics will be copied from the chosen test item:
    * a defect type;
    * a link to BTS _(in case if it exists)_;
    * comment _(in case if it exists)_;

* If you see no suitable suggested test item for the current test item, just do not select any of them.

## How the ML suggestions functionality is working

ML Suggestions searches for similar previously analyzed items to the current test item, so it requires an analytical base saved in Elasticsearch. ML suggestions takes into account all user-investigated, auto-analyzed items or items chosen from ML suggestions. While the analytical base is growing ML suggestions functionality will have more examples to search by and suggest you the best options.

ML suggestions analysis is run everytime you enter "Make decision" editor. ML suggestions are run for all test items no matter what defect type they have now. This functionality is processing only test items with logs (log level >= 40000).

The request for the suggestions part looks like this:
* testItemId;
* uniqueId;
* testCaseHash;
* launchId;
* launchName;
* project;
* analyzerConfig;
* logs = List of log objects (logId, logLevel, message)

The Analyzer preprocesses log messages from the request for analysis: extracts error message, stacktrace, numbers, exceptions, urls, paths, parameters and other parts from text to search for the most similar items by these parts in the analytical base. We make several requests to the Elasticsearch to find similar test items by all the error logs.

:::note
When a test item has several error logs, we will use the log with the highest score as a representative of this test item.
:::

The ElasticSearch returns to the service Analyzer 10 logs with the highest score for each query and all these candidates will be processed further by the ML model. The ML model is an XGBoost model which features (about 40 features) represent different statistics about the test item, log message texts, launch info and etc, for example:
* the percent of selected test items with the following defect type
* max/min/mean scores for the following defect type
* cosine similarity between vectors, representing error message/stacktrace/the whole message/urls/paths and other text fields
* whether it has the same unique id, from the same launch
* the probability for being of a specific defect type given by the Random Forest Classifier trained on Tf-Idf vectors

The model gives a probability for each candidate, we filter out test items with the probability less or equal 40%. We sort the test items by this probability, after that we deduplicate test items inside this ranked list. If two test items are similar with >= 98% by their messages, then we will leave the test item with the highest probability. After deduplication we take maximimum 5 items with the highest score to show in the ML Suggestions section.

ML suggestions section contains at maximum 5 suggested items, they are shown together with the scores given by the model and we divide them into 3 groups:
* the group "SAME", test items with the score = 100%
* the group "HIGH", test items with the score in the range [70% - 99.9%]
* the group "LOW", test items with the score in the range [40% - 69.9%]

<media-view thumbnail={require('./img/MLSuggestions.png')} src="https://youtu.be/Ooggk-k5fTQ" alt="ML Suggestions" type="video" />
