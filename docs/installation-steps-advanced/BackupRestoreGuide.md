---
sidebar_position: 7
sidebar_label: Backup & Restore Guide
---

# Backup & Restore Guide

## Introduction

In this article, we delve into the essential elements of ReportPortal that require meticulous backup procedures. **The two critical components under scrutiny are the database, which relies on PostgreSQL, and the binary storage, represented as Docker volume or Persistent Volume Claims (PVC) for Kubernetes**. Understanding the significance of safeguarding these components is paramount for maintaining the integrity and reliability of your ReportPortal.

:::note
 It is important to understand that there are various options available for both backing up and restoring ReportPortal database and binary storage. This article provides an illustrative example of one such option.
:::

## Docker-based Backup and Restore Processes
### PostgreSQL Backup Process

Create a backup of the PostgreSQL database using the `pg_dump` command:

```bash
DB_USER=rpuser
DB_NAME=reportportal
DB_CONTAINER=postgres


docker exec -t $DB_CONTAINER pg_dump -U $DB_USER -d $DB_NAME > reportportal_docker_db_backup.sql
```

Explanation:
- `docker exec -t $DB_CONTAINER`: Executes a command inside the specified Docker container (Pod).
- `pg_dump -U $DB_USER -d $DB_NAME`: Initiates the PostgreSQL dump, specifying the username and database name.
- `> reportportal_db_backup.sql`: Redirects the dump output to a file named `backup.sql`.

Make sure to replace placeholders like `DB_CONTAINER`, `DB_USER`, and `DB_NAME` with your actual container pod name, PostgreSQL username, and database name.

### PostgreSQL Backup Process

To restore PostgreSQL database using following command:

```bash
DB_USER=rpuser
DB_NAME=reportportal
DB_CONTAINER=postgres


docker exec -i $DB_CONTAINER psql -U $DB_USER -d $DB_NAME < reportportal_docker_db_backup.sql
```

### Binary Storage Backup Process

The simple way to backup binary storage is back up the volume’s directory (by default path is /var/lib/docker/volumes/volume_hash).

:::important
The following method available from ReportPortal version 24.1.
:::

```bash
VOLUME_NAME=reportportal_storage

docker run --rm -v "$VOLUME_NAME":/data -v "$(pwd)":/backup busybox tar -zcvf /backup/reportportal_storage_backup.tar.gz /data
```

Explanation:
* `docker run`: This command runs a Docker container.
* `--rm`: This flag removes the container once it has completed its execution. This is useful for temporary containers, such as when performing a one-off task like creating a backup.
* `-v "$VOLUME_NAME":/storage_backup`: This option creates a volume mount between the host machine and the container. It mounts the Docker volume named by the `reportportal_storage` variable to the path `/storage_backup` inside the container.
* `-v "$(pwd)":/backup`: This option mounts the current working directory (`$(pwd)`) on the host machine to the path `/backup` inside the container. This is where the backup file will be stored.
* `busybox`: This specifies the Docker image to be used for the container. In this case, it uses the BusyBox image, which is a lightweight and minimalistic Linux distribution often used for simple tasks.
* `tar -zcvf /backup/reportportal_storage_backup.tar.gz /storage_backup`: This part of the command runs the `tar` command inside the container to create a compressed tar archive (`reportportal_storage_backup.tar.gz`).

### Binary Storage Restore Process

Restore the backup using the following command:

```bash
VOLUME_NAME=reportportal_storage

docker run --rm -v $VOLUME_NAME:/data -v $(pwd):/backup busybox tar -xzvf /backup/reportportal_storage_backup.tar.gz -C /
```

## Kubernetes-based Backup and Restore Processes

### Backup Processes

:::note
Kubernetes Private Volume Claim backups is made easier with your managed system (e.g. VMWare or Cloud-based tools). You can create snapshots from volumes and attach them to the new environment. This approach is more simpler than the commands described below.
:::

If you don't have any high-level managed systems for your Kubernetes cluster, you can use `VolumeSnapshot`. This API resource is designed to create volume snapshots for both users and administrators within the Kubernetes cluster.

This article uses the official Kubernetes documentation [Volume Snapshots](https://kubernetes.io/docs/concepts/storage/volume-snapshots/) and [Restore Volume from Snapshot Support](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#volume-snapshot-and-restore-volume-from-snapshot-suppot)

:::info
The following example tested on **Kubernetes version 1.28**

Choosing the correct version of CSI is crucial. Make sure to consult the documentation to ensure you select the appropriate version:  [Volume Snapshots](https://kubernetes.io/docs/concepts/storage/volume-snapshots/), [CSI Driver](https://kubernetes-csi.github.io/docs/drivers.html), [CSI Introduction](https://kubernetes-csi.github.io/docs/introduction.html), [CSI Driver Host Path (On-Premise)](https://github.com/kubernetes-csi/csi-driver-host-path#deployment)
:::

1. Install the CRD first. Be sure to pay attention to the version `snapshotter/v6.3.3/client` and adjust it based on your Kubernetes version:

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes-csi/external-snapshotter/v6.3.3/client/config/crd/snapshot.storage.k8s.io_volumesnapshotclasses.yaml
```

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes-csi/external-snapshotter/v6.3.3/client/config/crd/snapshot.storage.k8s.io_volumesnapshotcontents.yaml
```

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes-csi/external-snapshotter/v6.3.3/client/config/crd/snapshot.storage.k8s.io_volumesnapshots.yaml
```

2. Install the Snapshot Controller `v6.3.3` for Kubernetes `1.28`

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes-csi/external-snapshotter/v6.3.3/deploy/kubernetes/snapshot-controller/setup-snapshot-controller.yaml
```

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes-csi/external-snapshotter/v6.3.3/deploy/kubernetes/snapshot-controller/rbac-snapshot-controller.yaml
```

3. Create VolumeSnapshotClass resource:

```bash
kubectl apply -f - <<EOF
kind: VolumeSnapshotClass
apiVersion: snapshot.storage.k8s.io/v1
metadata:
  name: volume-snapshot-class
  annotations:
    snapshot.storage.kubernetes.io/is-default-class: "true"
driver: kubernetes.io/aws-ebs
deletionPolicy: Delete
parameters:
  type: snap
EOF
```

Explanation:
- `kind: VolumeSnapshotClass`: Specifies the type of Kubernetes resource being defined, which is a VolumeSnapshotClass.
- `driver: kubernetes.io/aws-ebs`: Specifies the storage driver associated with this VolumeSnapshotClass. In this case, it indicates that the class is intended for use with AWS Elastic Block Store (EBS) volumes. **Different cloud and providers or storage systems may have different snapshot drivers.**

4. Create a snapshot:

```bash
kubectl apply -f - <<EOF
apiVersion: snapshot.storage.k8s.io/v1  
kind: VolumeSnapshot  
metadata:  
  name: rp-database-snap  
  namespace: default   
spec:  
  volumeSnapshotClassName: volume-snapshot-class
  source:  
    persistentVolumeClaimName: data-my-release-postgresql-0
EOF
```

Explanation:
* `volumeSnapshotClassName: volume-snapshot-class`: Specifies the name of the Kubernetes resource VolumeSnapshotClass that was created in the previous step.
* `persistentVolumeClaimName: data-my-release-postgresql-0 `: Specifies the name of the target Persistent Volume Claim.

### Restore Process

You are now prepared to restore the `VolumeSnapshot` to a new Persistent Volume Claim. To proceed, apply the following resource:

```bash
kubectl apply -f - <<EOF
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: restored-my-release-postgresql-0
  namespace: default
spec:
  storageClassName: gp2
  dataSource:
    name: rp-database-snap
    kind: VolumeSnapshot
    apiGroup: snapshot.storage.k8s.io
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 8Gi
EOF
```

Explanation:
* `storageClassName: gp2` : Specifies the class of storage that the claim should use.
* `storage: 8Gi`: Specifies that the PVC storage capacity. **Must be the same size of `VolumeSnapshot`**

## Cloud-based Backup and Restore Processes

For backups in Cloud-based solutions, we recommend using standard cloud tools.

1. AWS: [EC2 Volume Backup](https://docs.aws.amazon.com/prescriptive-guidance/latest/backup-recovery/new-ebs-volume-backups.html) and [Restore](https://docs.aws.amazon.com/prescriptive-guidance/latest/backup-recovery/restore.html)
2. GCP: [Back up and restore a cloud volume](https://cloud.google.com/architecture/partners/netapp-cloud-volumes/back-up)
