---
sidebar_position: 14
sidebar_label: 13. How to make automated test results part of my pipeline
---

# 13. How to make automated test results part of my pipeline

ReportPortal supports Continuous Testing with built-in functionality – [Quality Gates](/category/quality-gates) (premium feature). Quality Gate is a set of predefined criteria that should be met in order launch run to be considered as successful.

Firstly, navigate to Project settings and create a Quality Gate with the rules which will be applied to a specific launch that matches the conditions.

<media-view src={require('./img/QualityGate1.png')} alt="Create Quality Gate" />

<media-view src={require('./img/QualityGate2.png')} alt="Quality Gate parameters" />

<media-view src={require('./img/QualityGate3.png')} alt="Run Quality Gate for specific launch" />

<media-view src={require('./img/QualityGate4.png')} alt="Quality Gate in progress" />

<media-view src={require('./img/QualityGate5.png')} alt="Quality Gate failed" />

Finally, configure [integration with CI/CD](/quality-gates/IntegrationWithCICD) to send results to the pipeline.