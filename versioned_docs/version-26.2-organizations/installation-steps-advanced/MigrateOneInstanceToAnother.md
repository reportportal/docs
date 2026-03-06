---
sidebar_position: 11
sidebar_label: Migrate one instance to another
description: Efficiently migrate your ReportPortal instance to AWS by backing up and restoring PostgreSQL, MinIO, and OpenSearch data, ensuring seamless continuity.
---

# Migrate one instance to another

When migrating the ReportPortal to AWS, you'll need to consider the types of storage required to save the data. Here are some storage components that need to be migrated:

1.	PostgreSQL Database Storage (main test data storage).
2.	MinIO Storage (test attachments/binaries storage, integrations/plugins storage).
3.	OpenSearch (AI indices storage for Auto-Analysis feature).

Here's a general outline of the steps you should follow for the migration:

1.	**PostgreSQL database backup.**<br />
      Perform a database backup using the [pg_dump tool](https://www.postgresql.org/docs/current/backup-dump.html#BACKUP-DUMP) or other commands to export the data to a file.
2.	**MinIO or binary storage volume backup.**<br />
      If you have the attachments in the tests and it’s crucial to transfer them to the new instance - you need to migrate MinIO storage to AWS (for example, we recommend using Amazon S3 (Simple Storage Service) for scalable object storage.<br />
      Perform a backup of the MinIO data directory to ensure that all objects stored in MinIO are included in the backup. Identify the MinIO data directory within your local Docker environment where MinIO stores its objects. In general, it should be the “/data” directory. Transfer the MinIO data directory backup to any appropriate storage solution in the AWS environment. This may involve using Amazon S3 or Amazon EBS.
3.	**OpenSearch backup.**<br />
      It’s needed to save the indices used for AI purposes and the Auto-Analysis feature. However, this step can be omitted in case of successful PostgreSQL backup restoration into the new ReportPortal instance.<br />
      All you need to do to save your base for the Auto-Analysis feature to keep it working is regenerate index for the project in the Project Settings Tab:
      *Project Settings -> Analyzer -> Index Settings -> Actions with index -> Generate index.*<br />
      Otherwise, backing up OpenSearch may involve using its built-in snapshot and restore functionality to create a backup of the OpenSearch data.
4.	**Backup Configuration Files:**<br />
      a.	Identify where the docker-compose and other configuration files are located within the existing ReportPortal environment.<br />
      b.	Make copies of these configuration files for use in the new AWS environment.
5.	**Restore PostgreSQL Database.**<br />
      Once the database is in place, restore the backup into the RDS instance.
6.	**Deploy ReportPortal.**<br />
      It can be a new AWS EC2 instance for Docker installation or AWS Elastic Kubernetes Service. Ensure the configuration files are updated for the new environment as it’s crucial if you have the SAML or other SSO providers. After the deployment, all integrations/plugins may need to be reconfigured to update the links, check the connectivity to the third-party services from the new ReportPortal, etc.
7.	**Test the Migration.**<br />
      Verify that ReportPortal is functioning as expected in the AWS environment. Test all functionalities, including user access and reporting data.
8.	**Point DNS.**<br />
      Once testing is successful, update the DNS records to point to the new location of ReportPortal.

Please consider referring to the official documentation for PostgreSQL, MinIO, and OpenSearch to make sure that the backup and migration processes are carried out appropriately.

It's important to note that migrating local ReportPortal to the cloud also involves [infrastructure considerations](/installation-steps/HardwareRequirements), security configurations, and networking setup that need to be in place for a smooth migration.
