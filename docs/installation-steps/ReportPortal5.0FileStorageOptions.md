# ReportPortal 5.0 File storage options

In ReportPortal 5.0 we use two ways to store log attachments, user pictures and plugins  

- MinIO distributed object storage (by default)
- Container's File system

### MinIO

[MinIO](https://min.io) is a high performance distributed object storage server and a preferable way of using our file storage. It stays on top of S3 or any other cloud storage, and allows to have a shared FS for several API and UAT pods in Kubernetes.  

To set it up please use the following environment variables  

- RP_BINARYSTORE_MINIO_ENDPOINT for MinIO endpoint (address)
- RP_BINARYSTORE_MINIO_ACCESSKEY for MinIO accesskey 
- RP_BINARYSTORE_MINIO_SECRETKEY for MinIO secretkey

These variables should be configured in API and UAT services
It can be done in both, Docker and Kubernetes ReportPortal versions  

### Container's File system

The container's file system option is used when you want to store these data in a mounted folder in the service-api or/and service-uat containers  

In order to use this option, please set environment variable RP_BINARYSTORE_TYPE to 'filesystem' in API and UAT services
It can be done in both, Docker and Kubernetes ReportPortal versions 
