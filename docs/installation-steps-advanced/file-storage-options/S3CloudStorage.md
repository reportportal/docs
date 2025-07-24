---
sidebar_position: 1
sidebar_label: S3 Cloud Storage
---

# S3 Cloud Storage

## Access and Secret Keys authentication

### Docker-based

ReportPortal supports cloud storage options through the Java library [JCLOUDS](https://jclouds.apache.org/).

To configure storage using Amazon S3, ReportPortal uses the following environment variables for the services **API**, **Jobs**, and **Authorization**:

```bash
RP_FEATURE_FLAGS: singleBucket          # Enable single-bucket storage (recommended)
DATASTORE_TYPE: aws-s3
DATASTORE_REGION: us-standard           # Region of the bucket (JCloud ref. to `us-east-1`)
DATASTORE_ACCESSKEY: <access_key>
DATASTORE_SECRETKEY: <secret_key>
DATASTORE_DEFAULTBUCKETNAME: my-bucket  # Name of the bucket
```

## IAM Role-based authentication

### Amazon EKS-based

- [S3 Bucket](#1-s3-bucket)
- [AWS IAM Role](#2-aws-iam-role)
    - [Step 1: Define the Trust Policy](#step-1-define-the-trust-policy)
    - [Step 2: Create the IAM Role](#step-2-create-the-iam-role)
    - [Step 3: Define the Permissions Policy](#step-3-define-the-permissions-policy)
    - [Step 4: Attach the Permissions Policy](#step-4-attach-the-permissions-policy)
- [EKS-based Installation](#3-eks-based-installation)

#### 1. S3 Bucket

Create an Amazon S3 bucket to store your data. Replace `my-rp-bucket` with a unique bucket name and specify the desired AWS region.

```bash
aws s3api create-bucket --bucket my-rp-bucket --region us-east-1
```

> To create a bucket outside of the `us-east-1` region, add the following flag: `--create-bucket-configuration LocationConstraint=<region>`, replacing `<region>` with your desired AWS region.

Ensure that the bucket name adheres to [Amazon S3 bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html).

#### 2. AWS IAM Role

To enable secure access to your S3 bucket, you need to create an AWS IAM role with the appropriate trust and permissions policies.

##### Step 1: Define the Trust Policy

The trust policy specifies which AWS service or entity is allowed to assume the role. Save the following JSON content to a file named `trust-policy.json`:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Federated": "arn:aws:iam::ACCOUNT_ID:oidc-provider/oidc.eks.REGION.amazonaws.com/id/OIDC_ID"
            },
            "Action": "sts:AssumeRoleWithWebIdentity",
            "Condition": {
                "StringEquals": {
                    "oidc.eks.REGION.amazonaws.com/id/OIDC_ID:aud": "sts.amazonaws.com",
                    "oidc.eks.REGION.amazonaws.com/id/OIDC_ID:sub": "system:serviceaccount:NAMESPACE:reportportal"
                }
            }
        }
    ]
}
```

Replace the placeholders with the appropriate values:
- `ACCOUNT_ID`: Your AWS account ID.
- `REGION`: The AWS region where your EKS cluster is deployed.
- `OIDC_ID`: The unique identifier of your OIDC provider. [How to create an IAM OIDC provider for your cluster](https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html)
- `NAMESPACE`: The Kubernetes namespace of the service account.
- `reportportal`: The name of the Kubernetes service account.

This trust policy ensures that only the specified Kubernetes service account can assume the IAM role via the OIDC provider.

##### Step 2: Create the IAM Role

Use the AWS CLI to create the IAM role with  the trust policy:

```bash
aws iam create-role --role-name my-rp-s3-role \
    --assume-role-policy-document file://trust-policy.json
```

##### Step 3: Define the Permissions Policy

The permissions policy specifies the actions the IAM role can perform on the S3 bucket. Save the following JSON content to a file named `s3-rw-policy.json`:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AllowListAndLocation",
            "Effect": "Allow",
            "Action": [
                "s3:ListBucket",
                "s3:GetBucketLocation"
            ],
            "Resource": "arn:aws:s3:::my-rp-bucket"
        },
        {
            "Sid": "AllowObjectOpsAnywhere",
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:GetObject",
                "s3:DeleteObject",
                "s3:GetObjectAcl",
                "s3:GetObjectVersion"
            ],
            "Resource": "arn:aws:s3:::my-rp-bucket/*"
        }
    ]
}
```

##### Step 4: Attach the Permissions Policy

Attach the permissions policy to the IAM role using the AWS CLI:

```bash
aws iam put-role-policy --role-name my-rp-s3-role \
    --policy-name S3AccessPolicy \
    --policy-document file://s3-rw-policy.json
```

By completing these steps, the IAM role will have the necessary permissions to interact with the specified S3 bucket securely.

#### 3. EKS-based Installation

To grant a Kubernetes pod on EKS read/write access to S3, use IAM Roles for Service Accounts (IRSA). This approach issues temporary credentials by having the pod assume an IAM role via OIDC

Update the `values.yaml` file with the appropriate storage configuration:

```yaml
# Activate Service Account for the ReportPortal application
global:
  serviceAccount:
    create: true
    name: reportportal
    annotations:
      eks.amazonaws.com/role-arn: "arn:aws:iam::ACCOUNT_ID:role/my-rp-s3-role"


storage:
  # Ref.: https://reportportal.io/docs/installation-steps-advanced/file-storage-options/
  type: s3
  # Leave `accesskey` and `secretkey` empty for IAM role-based access
  accesskey:
  secretkey:
  # Specify the AWS region. Ref.: https://jclouds.apache.org/reference/javadoc/2.6.x/org/jclouds/aws/domain/Region.html
  region: "us-standard" # JCloud ref. to `us-east-1`
  bucket:
    type: single
    bucketDefaultName: "my-rp-bucket" # Bucket created from step 1

# Disable the MinIO dependency
minio:
  enable: false
```

Install ReportPortal using Helm:

```bash
helm install my-release \
  --set uat.superadminInitPasswd.password="MyPassword" \
  -f values.yaml \
  reportportal/reportportal
```

This configuration ensures that ReportPortal uses Amazon S3 for storage with IAM role-based access, while disabling the default MinIO dependency.

### EC2 Docker-based

- [S3 Bucket](#1-s3-bucket)
- [AWS IAM Role](#2-aws-iam-role)
  - [Step 1: Define the Trust Policy](#step-1-define-the-trust-policy)
  - [Step 2: Create the IAM Role](#step-2-create-the-iam-role)
  - [Step 3: Define the Permissions Policy](#step-3-define-the-permissions-policy)
  - [Step 4: Attach the Permissions Policy](#step-4-attach-the-permissions-policy)
- [IAM Instance Profile](#3-iam-instance-profile)
  - [Step 1: Create an Instance Profile](#step-1-create-an-instance-profile)
  - [Step 2: Attach the Role to the Instance Profile](#step-2-attach-the-role-to-the-instance-profile)
  - [Step 3: Associate the Profile with the EC2 Instance](#step-3-associate-the-profile-with-the-ec2-instance)
  - [Step 4: Enable Instance Metadata Access](#step-4-enable-instance-metadata-access)
- [ReportPortal Configuration](#4-reportportal-configuration)
- [Docker-Based Installation](#5-docker-based-installation)

#### 1. S3 Bucket

Create an Amazon S3 bucket to store ReportPortal data:

```bash
aws s3api create-bucket --bucket my-rp-docker-bucket --region us-east-1
```

> 💡 To create a bucket outside `us-east-1`, add the following option:
>
> ```bash
> --create-bucket-configuration LocationConstraint=<region>
> ```

Ensure your bucket name complies with [S3 bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html).

#### 2. AWS IAM Role

The IAM role enables the EC2 instance to assume identity and access S3 using instance metadata.

##### Step 1: Define the Trust Policy

Save the following to a file named `trust-policy.json`:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "sts:AssumeRole"
            ],
            "Principal": {
                "Service": [
                    "ec2.amazonaws.com"
                ]
            }
        }
    ]
}
```

##### Step 2: Create the IAM Role

Create the role using the trust policy:

```bash
aws iam create-role --role-name my-ec2-rp-s3-role \
    --assume-role-policy-document file://trust-policy.json
```

##### Step 3: Define the Permissions Policy

Save the following to `s3-rw-policy.json`, replacing `my-rp-docker-bucket` with your bucket name:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AllowListAndLocation",
            "Effect": "Allow",
            "Action": [
                "s3:ListBucket",
                "s3:GetBucketLocation"
            ],
            "Resource": "arn:aws:s3:::my-rp-docker-bucket"
        },
        {
            "Sid": "AllowObjectOpsAnywhere",
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:GetObject",
                "s3:DeleteObject",
                "s3:GetObjectAcl",
                "s3:GetObjectVersion"
            ],
            "Resource": "arn:aws:s3:::my-rp-docker-bucket/*"
        }
    ]
}
```

##### Step 4: Attach the Permissions Policy

Attach the inline policy to the role:

```bash
aws iam put-role-policy --role-name my-ec2-rp-s3-role \
    --policy-name S3AccessPolicy \
    --policy-document file://s3-rw-policy.json
```

#### 3. IAM Instance Profile

##### Step 1: Create an Instance Profile

```bash
aws iam create-instance-profile --instance-profile-name my-ec2-rp-s3-profile
```

##### Step 2: Attach the Role to the Instance Profile

```bash
aws iam add-role-to-instance-profile \
    --instance-profile-name my-ec2-rp-s3-profile \
    --role-name my-ec2-rp-s3-role
```

##### Step 3: Associate the Profile with the EC2 Instance

Replace `INSTANCE_ID` with your EC2 instance ID:

```bash
aws ec2 associate-iam-instance-profile \
    --region us-east-1 \
    --instance-id <INSTANCE_ID> \
    --iam-instance-profile Name=my-ec2-rp-s3-profile
```

##### Step 4: Enable Instance Metadata Access

To allow a Docker container to access IMDSv2 metadata, you must increase the instance metadata service (IMDS) hop limit in the EC2 instance configuration:

```bash
aws ec2 modify-instance-metadata-options \
    --instance-id <INSTANCE_ID> \
    --http-put-response-hop-limit 2 \
    --http-endpoint enabled \
    --region us-east-1
```
Ref.: [Access instance metadata for an EC2 instance (AWS Docs)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-data-retrieval.html)

#### 4. ReportPortal Configuration

In your `docker-compose.yml`, configure ReportPortal to use IAM-based S3 access:

```yaml
x-environment: &common-environment
  # IAM Role-Based S3 Access - Leave credentials empty
  DATASTORE_ACCESSKEY: ""
  DATASTORE_SECRETKEY: ""
  DATASTORE_TYPE: aws-s3
  DATASTORE_REGION: us-standard      # JClouds alias for us-east-1
  DATASTORE_DEFAULTBUCKETNAME: my-rp-docker-bucket
```

:::note
For full configuration options, see the [ReportPortal S3 integration guide](/installation-steps-advanced/file-storage-options/).
:::

#### 5. Docker-Based Installation

Launch ReportPortal with Docker Compose:

```bash
docker-compose -p reportportal up -d --force-recreate
```

This step brings up all ReportPortal services configured to use S3 as the storage backend with IAM role-based credentials via EC2 instance metadata.
