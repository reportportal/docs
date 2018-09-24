## Issues with Analyzer: how to resolve 

In case you can not start an analysis on a project please perform following actions:

**Firstly,**
check if you have service Analyzer and service ElastiSearch in your docker-compose file.
If no, please add this services to your docker-compose file manually.



**Secondly**
be sure that you have made all Analyzer configuration before ReportPortal deployment such as:

* set **{vm.max_map_count} kernel setting** before ReportPortal deploying with [Commands>](https://www.elastic.co/guide/en/elasticsearch/reference/6.1/docker.html#docker-cli-run-prod-mode)

* give right permissions to ElasticSearch data folder using the following command:

```bash
mkdir data/elasticsearch
```

```bash
chmod g+rwx data/elasticsearch
```

```bash
chgrp 1000 data/elasticsearch
```

For more details about ElasticSearch visit [ElasticSearch guide >](https://www.elastic.co/guide/en/elasticsearch/reference/6.1/docker.html#_notes_for_production_use_and_defaults)

In case you haven`t done it yet, please do and then re-start docker-compose.

**Thirdly** 
check the health of all services on localhost:8500. 
When service Analyzer will have had status passed, try to start analyze results in ReportPortal.

On this stage your Analyzer should work well, if not, please follow the steps further.

**Forthly,**
check if you have any analyzed items. If not, start to analyze manualy.

**Fiveth**
if Analyzer still doesn`t work or you aren`t satisfied with results. 
Don`t worry, now it is time to choose appropriate configuration for Analyzer. 
[Here](http://reportportal.io/docs/Auto-Analysis-of-launches%3Econfigure-elasticsearch-settings) you can find all information how to configure Analyzer.
But you can use a short instruction:

* check your exsiting configuration via Settings > Auto-Analysis
[ ![Image](Images/userGuide/tipsAndTricks/AnalysisConfigurations.png) ](Images/userGuide/tipsAndTricks/AnalysisConfigurations.png)
If you can`t find this tab in settings, please update your version to the latest one. 

* Then choose one of pre-sets: "Classic", "Moderate", "Light"
If you can`t find these pre-sets in settings, please update your version to the latest one.
If you don`t want to update your version, please use following configaration:

*MinShouldMatch 95%
MinDocFreq 1
MinTermFreq 1
Number of log lines All*

* Save new configuration;

* Re-generate index;

After the new Index will have been generated, start analysis.

>**Note:** If you have walked throught all these steps, but your issue still presents. Please contact with us, via Slack, e-mail or GitHub.
We will connect with you as soon as it possible.
