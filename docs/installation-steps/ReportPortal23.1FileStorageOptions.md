# ReportPortal 23.1 File storage options

In ReportPortal 23.1 we can use multiple ways to store log attachments, user pictures and plugins.

- AWS S3
- MinIO distributed object storage
- File system

Currently we have 2 file storage systems: **multi-bucket** and **single-bucket**.

In the multi-bucket system structure of buckets looks like this:

- *bucketPrefix* + ‘keystore’ (bucket for storing integration secrets)
- *bucketPrefix* + ‘users’ (bucket for storing user data)
- *defaultBucketName* (bucket for storing plugins)
- *bucketPrefix + projectId* (bucket for storing project attachments)

In the single-bucket system structure of single-bucket is the following:

- *singleBucketName/*integration-secrets/ (prefix for integration secrets)
- *singleBucketName/*user-data/ (prefix for user data)
- *singleBucketName/*plugins/ (prefix for plugins)
- *singleBucketName/*project-data/projectId (prefix for project attachments)

## AWS S3

Amazon Simple Storage Service (Amazon S3) is an object storage service offering industry-leading scalability, data availability, security, and performance. Bucket names must be unique across all AWS accounts in all the AWS Regions within a partition. A partition is a grouping of [Regions](https://docs.aws.amazon.com/general/latest/gr/s3.html).

To set up AWS S3 in API, UAT & Jobs services use the following variables:

- DATASTORE_TYPE: s3
- DATASTORE_ACCESSKEY for AWS S3 AccessKey
- DATASTORE_SECRETKEY for AWS S3 SecretKey
- DATASTORE_REGION for AWS region

To set up the **multi-bucket** system, use the following environment variables:

- DATASTORE_BUCKETPREFIX for prefix of bucket name (‘prj-‘ by default)
- DATASTORE_DEFAULTBUCKETNAME for name of plugins bucket (‘rp-bucket’ by default)

To set up the **single-bucket** system, use the following environment variables:

- DATASTORE_DEFAULTBUCKETNAME for single-bucket name
- RP_FEATURE_FLAGS: singleBucket

## MinIO

[MinIO](https://min.io/) is a high-performance distributed object storage server. It stays on top of S3 or any other cloud storage and allows to have a shared FS for several API, UAT & Jobs pods in Kubernetes.

To set up MinIO in services, use the following variables:

- DATASTORE_TYPE: minio
- DATASTORE_ENDPOINT for endpoint (address)
- DATASTORE_ACCESSKEY for accesskey
- DATASTORE_SECRETKEY for secretkey

To set the **multi-bucket** system, use the following environment variables:

- DATASTORE_BUCKETPREFIX for prefix of bucket name (‘prj-‘ by default)
- DATASTORE_DEFAULTBUCKETNAME for name of plugins bucket (‘rp-bucket’ by default)

To set the **single-bucket** system, use the following environment variables:

- DATASTORE_DEFAULTBUCKETNAME for single-bucket name
- RP_FEATURE_FLAGS : singleBucket

## File system

The file system option is used when you want to store this data in a mounted folder in the service-api or/and service-uat.

To use this option, set up environment variables like this:

- DATASTORE_TYPE: filesystem
- DATASTORE_PATH for path in filesystem to store files.

It can be done in both Docker and Kubernetes ReportPortal versions.
