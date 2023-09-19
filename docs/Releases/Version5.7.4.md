---
sidebar_position: 2
sidebar_label: Version 5.7.4
---

# Version 5.7.4

## What's Changed:
1. ReportPortal previously used MinIO Client for file storage, which offered such benefits as:

- Easy Docker-based installation
- Kubernetes Support
- S3-compatible bridge which allows to delegate file storage to S3, but keep using MinIO API

But since there have been some changes in MinIO, we have explored alternative clients for working with cloud storage.

Changes in MinIO:
- a licensing shift to AGPL which does not allow to have MinIO dependencies in the code anymore
- deprecation of S3 Proxy Gateway highly utilized in client installations

Thus, we have replaced MinIO Client with JCloud in the latest ReportPortal version.
Starting from ReportPortal 5.7.4 you can either use AWS S3 directly or continue with your existing MinIO as object storage.

<media-view src={require('./img/5.7.4.png')} alt="Versions 5.7.3 vs 5.7.4" />


2. **IMPORTANT:**

**Please, don’t forget to update ElasticSearch config.**
We've enabled logs double entry by default. Thus, it is important to review your ElasticSearch setup.
Please, read carefully through this [migration guide](https://github.com/reportportal/reportportal/wiki/Migration-to-ReportPortal-v.5.7.4) in order to avoid performance pitfalls.
