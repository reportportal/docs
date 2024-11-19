---
sidebar_position: 12
sidebar_label: File storage options
---

# File storage options

ReportPortal supports two types of storage structures:
* Multi-bucket
* Single-bucket

Additionally, ReportPortal can store data in various locations:

1. Filesystem (default for Docker)
2. MinIO (default for Kubernetes)
3. Cloud Storage

## Storage Types

### 1. Multi-bucket (default)

Each project has its own bucket. This is the default option; however, it is not recommended for environments using Cloud Object Storage such as Amazon S3. It has a list structure.

```bash
integration-secrets # Authorization bucket
prj-1               # Project buckets
prj-2     
rp-bucket           # Plugins bucket
user-data           # Users bucket
```

### 2. Single-bucket

All projects share the same bucket. This is the recommended option for environments using Cloud Object Storage such as Amazon S3. It has a tree-like structure.

```bash
rp-bucket                   # Main bucket
    ├── integration-secrets # Authorization sub-directory
    ├── plugins             # Plugins sub-directory
    ├── project-data        # Projects sub-directory
    │   ├── 1
    │   └── 2
    └── user-data           # Users sub-directory        
```

:::important
Migration from Multi-bucket to Single-bucket is required. Please refer to the [Complex Migration Guide](https://github.com/reportportal/migrations-complex/tree/develop/charts) for more information. A fresh start from Single-bucket is recommended.
:::

To configure the storage to Single-bucket, ReportPortal uses the following environment variables for the services **API**, **Jobs**, and **Authorization**:

```bash
RP_FEATURE_FLAGS: singleBucket          # Enable single-bucket storage
DATASTORE_DEFAULTBUCKETNAME: my-bucket  # Name of the bucket
```

## Filesystem

The local filesystem is the default storage option for the Docker-based ReportPortal solution. It is simple to configure and use but is not recommended for production environments because it is not scalable and does not provide shareability between multiple instances or nodes.

To configure filesystem storage, ReportPortal uses the following environment variables for the services **API**, **Jobs**, and **Authorization**:

```bash
DATASTORE_TYPE: filesystem
```

Additionally, you can specify the path to the storage directory:

```bash
DATASTORE_PATH: /data/storage
```

## MinIO

MinIO is an open-source object storage server that is compatible with Amazon S3. It is designed for cloud-native workloads and optimized for high performance and scalability.

To configure storage using MinIO, ReportPortal uses the following environment variables for the services **API**, **Jobs**, and **Authorization**:

```bash
DATASTORE_TYPE: minio
DATASTORE_ACCESSKEY: <access_key>
DATASTORE_SECRETKEY: <secret_key>
DATASTORE_ENDPOINT: http://minio:9000
```

## Cloud Storage

ReportPortal supports cloud storage options through the Java library [JCLOUDS](https://jclouds.apache.org/).

The supported cloud storage options are:

### 1. Amazon S3

To configure storage using Amazon S3, ReportPortal uses the following environment variables for the services **API**, **Jobs**, and **Authorization**:

```bash
RP_FEATURE_FLAGS: singleBucket          # Enable single-bucket storage (recommended)
DATASTORE_TYPE: s3
DATASTORE_REGION: us-standard           # Region of the bucket (JCloud ref. to `us-east-1`)
DATASTORE_ACCESSKEY: <access_key>
DATASTORE_SECRETKEY: <secret_key>
DATASTORE_DEFAULTBUCKETNAME: my-bucket  # Name of the bucket
```

### 2. Amazon Elastic File System (EFS)

A guide for configuring storage with Amazon EFS will be available soon.
