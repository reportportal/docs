## Optimal Performance Hardware setup

### 1.  Disk I/O 

   To speed up PostgreSQL database performance, on instance strongly recommended use **SSD disk** hardware.

### 2. CPU utilization 

   Consider choosing the **CPU optimized** instances to reduce high CPU utilization of the ReportPortal service-API and speed up ReportPortal overall. 
   
   For example:

  * **Azure**: Fsv2-series instances,
  * **AWS**: c5 instances.  

  The instance capacity(4 CPUs/8Gb RAM or 8 CPUs/16Gb RAM etc.) should be selected regarding average reporting test-cases/day and average CPU/RAM utilization. If the CPU/RAM utilization of the ReportPortal instance up to 100% a long time daily, consider scale up the VM x2.

**System hardware requirements**

   Simple Docker installation from the box:

| Server type | CPU's | RAM size, Gb | Disk space, Gb | Disk type | AWS Shape |
| ----------- | ----- | ------------ | -------------- | ------------- | --------- |
| Small | 4 | 8 | 300 | gp2 | c5.xlarge |
| Middle | 8 | 16 | 500 | gp2 | c5.2xlarge |
| Middle+ | 16 | 32 | 1000 | gp2 | c5.4xlarge |
| Large | 32 | 64 | 2000 | gp2 | c5a.8xlarge |
<br/>

   Kubernetes:

   [ ![Image](Images/Kubernetes_server_types.png) ](Images/Kubernetes_server_types.png)

---
**NOTE**

In Report Portal version 5.7.3, the log double-entry saving approach to DB and Elasticsearch (to data streams) has been implemented. This saving approach reduces the DB footprint almost x10 times, improves the speed of reporting logs, minimizes computation power to clean up data, and brings full-text search capabilities. Our general recommendation is to roll out Elasticsearch on the separate cluster nodes if you have a Kubernetes deployment (consider creating the node group for Elasticsearch). But if you have or expect a large amount of the logs reporting, separate cluster nodes for Elasticsearch are required. The proposed shapes for Elasticsearch nodes have been verified during performance testing and perform stable without degradation on all server configurations (from Small server type to Large). However, if you report many logs, you can tune the node's Disk size or scale up the shapes according to your needs. In addition, please pay attention to the number of Elasticsearch active shards (primary and total). In case you have a large count of projects, additional tuning for Elasticsearch might be needed(due to limitations that Elasticsearch has on the number of active shards). Please see Part 7 below for the tips.

Additional nodes for Elasticsearch:

<table cellspacing="0" border="0">
	<colgroup width="64"></colgroup>
	<colgroup width="102"></colgroup>
	<colgroup span="5" width="64"></colgroup>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=5 height="20" align="center" valign=middle><b><font color="#000000">Elastic Nodes</font></b></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle><b><font color="#000000">Monthly</font></b></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle><b><font color="#000000">Yearly</font></b></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="40" align="center" valign=middle bgcolor="#FFFFFF"><font color="#000000">Count</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFFF"><font color="#000000">Instance type</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFFF"><font color="#000000">IOPS</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFFF"><font color="#000000">Disk size (GB)</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFFF"><font color="#000000">Disk type</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" rowspan=2 align="right" valign=middle bgcolor="#FFFFFF"><b><font color="#000000">$183.75</font></b></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" rowspan=2 align="right" valign=middle bgcolor="#FFFFFF"><font color="#000000">$2,205</font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" height="40" align="center" valign=middle bgcolor="#FFFFFF" sdval="3" sdnum="1033;"><font color="#000000">3</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFFF"><font color="#000000">t3.medium</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFFF" sdnum="1033;0;@"><font color="#000000">-</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFFF" sdval="200" sdnum="1033;"><font color="#000000">200</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFFF"><font color="#000000">gp2</font></td>
		</tr>
</table>

   [ ![Image](Images/Elastic_nodes.png) ](Images/Elastic_nodes.png)

---
   
<br/>**io2 = 1 GB per month x 0.149 USD x 1 instances = 0.149 USD (EBS Storage Cost) / iops = 1 Provisioned IOPS x 0.119 USD x 1 instances = 0.119 USD (EBS IOPS Cost)*<br/>
   ***Replica*

---
**NOTE**

The approximate server's cost is relevant for the current cost of infrastructure on AWS. The estimated server cost is the current cost of the AWS infrastructure. When changing any cost of resources, costs need to be recalculated.

---
<br/>

### 3. Which scale I need? Configuration testing results and saturation points<br/>

**What does Saturation and vUser means? How to transform it into test cases?**

**RPS** means _Requests Per Second_. Any request to server to upload, create, read the data. In ReportPortal terms it can be request to create Launch (execution), Test Suite, Test case, log line. Read data or update data.

**Saturation** (in RPS) can be assumed as maximum capacity of your configuration (app deployed on specifics instance type) which can procced requests without significant response time degradation. Let's say `upper limit`

**vUser** means _Virtual user_ which describes regular model of behaviour of user (API client) which interacts with your system. Under vUser we assume test framework integration which will generate:

◾️ 3 Launches with

◾️◾️ 3 suites inside, with

◾️◾️◾️ 3 test classes inside, with

◾️◾️◾️◾️ 3 test cases inside, with

◾️◾️◾️◾️◾️ 5 steps inside, with

◾️◾️◾️◾️◾️◾️ 10 logs inside for each step.

Which practically will generate:
- `10 * 5 * 3 * 3 * 3 * 3 = (4050)` `createLog` requests.
- `5 * 3 * 3 * 3 * 3 = (405)` `startStep` requests and equal amount of `finishStep` requests. Total 910
- `3 * 3 * 3 * 3 = (81)` `startTest` requests and equal amount of `finishTest` requests (inclluding all precondition methods, as `@After` and `@Before` in Java). Total 162
- `3 * 3 * 3 = (27)` `startTestClass` requests and equal amount of `finishTestClass` requests. Total 54
- `3 * 3 = (9)` `startSuite` requests and equal amount of `finishSuite` requests. Total 18
- `3 = (3)` `startLaunch` requests and equal amount of `finishLaunch` requests. Total 6

Default configuration of integration sends logs in batches (`rp.batch.size.logs = 20`) which combines 20 requests at once into 1 batch request for `createLog`. And minimize count of `createLog` requests from 4050 to 203.
In grand total such a structure creates 3 Launches with 243 test case inside and produces 1253 requests.

Now we can divide their number by the duration in seconds, and get the RPS result. if it runs for 6 minutes (2 minutes each lunch), then: 60s * 6 = 360 and 1253 / 360 ~=4.5 requests per second.

If launches will be executed in parallel, 3 at the time, then RPS will be equal to 4.5*3 = 13.5 rps.

<br/>

**Summary**

Having information regarding number of test cases in your framework, average number of logs, number of parallel threads and durations, you can calculate system capacity according to the tables below.

<br/>

**Configuration testing results**

The purpose of the configuration performance testing is to determine saturation points and overall system capacity for different instance sizes and specifications. Testing was conducted on the С5 instances which are optimized for compute-intensive workloads and deliver cost-effective high performance at a low price per compute ratio(Compute Optimized Instances) with Up to 3.4GHz, and single core turbo frequency of up to 3.5 GHz 2nd generation Intel Xeon Scalable Processors (Cascade Lake) or 1st generation Intel Xeon Platinum 8000 series (Skylake-SP) processor with a sustained all core Turbo frequency.

**Application and Database are deployed on separate VMs**

| **Instance Type** | **Saturation point, rps** | **vUsers count** | **Disk IOPS** | **Java Options** |
| ----------------- | ------------------------- | ---------------- | ------------- | ---------------- |
| с5.xlarge         | 640                       | 60               | up to 3000    | \-Xmx1g          |
| c5.2xlarge        | 1374                      | 115              | up to 4000    | \-Xmx2g          |
| c5.4xlarge        | 3104                      | 356              | up to 8000    | \-Xmx3g          |
| с5.9xlarge        | 5700                      | 489              | up to 10000   | \-Xmx4g          |

**Application and Database are deployed on single VM**

| **Instance Type** | **Saturation point, rps** | **vUsers count** | **Disk IOPS** | **Java Options** |
| ----------------- | ------------------------- | ---------------- | ------------- | ---------------- |
| с5.xlarge         | 521                       | 50               | up to 3000    | \-Xmx1g          |
| c5.2xlarge        | 1078                      | 83               | up to 4000    | \-Xmx2g          |
| c5.4xlarge        | 2940                      | 305              | up to 8000    | \-Xmx3g          |
| с5.9xlarge        | 5227                      | 440              | up to 10000   | \-Xmx4g          |

<br/>

<br/>

### 4. The database separately from other services<br/>

   Consider deploying the database separately from other RP services. It allows increasing throughput of the server and performance of the ReportPortal overall. This can be, for example, AWS RDS PostgreSQL Database or a separate VM only for the PostgreSQL database.

   The separate database instance should be the same by CPU's and RAM, but started from middle+ server type, the database instance may need to have doubled CPU's and RAM size in comparison with the application instance.
   This is explained by the fact that with an increase in the size of the database and the number of concurrent users, the load is distributed more on the database server: increased volume of resources(CPU, memory, IOPS number, etc.) required to performing each DB query since it handles / can handle more data volume and/or can handle of a greater number of concurrent users.

Example for the middle+ server:

| Instance type | CPU's | RAM size, Gb | Disk space, Gb | AWS Shape |
| ------------- | ----- | ------------ | -------------- | --------- |
| Application instance | 16 | 32 | 200 | c5.4xlarge |
| Database instance | 16 | 32 | 1000 | c5.4xlarge |
<br/>

### 5. PostgreSQL Performance Tuning

   Since PostgreSQL Database is used, it needs some set of special configs for the best performance. These set contains two categories:

  * general and universal for any capacity of the instance hardware:

    ```yaml
    effective_io_concurrency=200
    random_page_cost=0.1
    seq_page_cost=1
    min_wal_size=1GB
    max_wal_size=4GB
    wal_buffers=16MB
    default_statistics_target=100
    synchronous_commit=off
    wal_writer_delay=10ms
    checkpoint_completion_target=0.9
    ```

  * based on CPU/RAM size at the instance(example for 4 CPUs/8GB RAM; the database is deployed on the separate VM):

    ```yaml
    shared_buffers=2GB
    effective_cache_size=6GB
    maintenance_work_mem=512MB
    work_mem=96MB
    max_worker_processes=4
    max_parallel_workers_per_gather=2
    max_parallel_workers=4
    max_parallel_maintenance_workers=2
    ```  

   Recommendations regarding **PostgreSQL server tuning** for the instance with 8 CPUs/16GB RAM(where all RP services are deployed):

   ```yaml
   shared_buffers=4GB
   effective_cache_size=8GB
   wal_buffers=16MB
   default_statistics_target=100
   effective_io_concurrency=200
   work_mem=96MB
   min_wal_size=1GB
   synchronous_commit=off
   wal_writer_delay=10ms
   maintenance_work_mem=1GB
   seq_page_cost=1
   checkpoint_completion_target=0.9
   random_page_cost=0.1
   max_wal_size=4GB
   max_worker_processes=8
   max_parallel_workers_per_gather=4
   max_parallel_workers=8
   max_parallel_maintenance_workers=4
   ```

   If the PostgreSQL database and services are deployed on the separate VM’s, the "effective_cache_size" parameter should be changed to "12GB"(total RAM size - shared_buffers size).
   
   <br/>
   **Simple ways to set these parameters:**
   
   CPU’s count related:

   ```yaml
   max_worker_processes = <DB instance CPU’s count>
   max_parallel_workers_per_gather = <DB instance CPU’s count / 2>
   max_parallel_workers = <DB instance CPU’s count>
   max_parallel_maintenance_workers = <DB instance CPU’s count / 2>
   ```

   RAM size related:
   ```yaml
   shared_buffers = <DB instance RAM size in GB / 4>
   effective_cache_size = <DB instance RAM size in GB - shared_buffers>
   maintenance_work_mem = < if total RAM size > 16 Gb – 2Gb; under 16Gb – 1Gb and less>
   ```

   For the **docker-compose:** add the following lines to the *command* section by the “-c” option to *“postgres”* service.

   **Example:**  

   ```yaml
   postgres:
     image: postgres:12-alpine
     shm_size: '512m'
     ...
     command:
       -c effective_io_concurrency=200
       -c random_page_cost=0.1
       -c seq_page_cost=1
       ...
       # Some another configs
   ```

   For the **AWS RDS:** create new parameter group(*Services -> RDS -> Parameter groups -> Create parameter group*), search config by the name and set up the following values, then apply created parameter group to the RDS DB.

   The following parameters can be scaled and depends on CPU’s number and RAM size of the instance. For example, for the instance 16 CPUs/32GB RAM(the database is deployed on the separate VM) this parameters should be:
  
   ```yaml
   shared_buffers = '8GB'
   effective_cache_size = '24GB'
   max_worker_processes = '16'
   max_parallel_workers = '16'
   ```

### 6. Application connections pool tuning

By default, ReportPortal has 27 connections on service-api and 27 connections in pool on service-authorization.
In general these values are valid for the small and middle servers. But from the middle+ server type, the connection pool may be increased if it's not enough for your server load.

It can be detected as periodic freezes and the "Loading" message when opening any page, and/or slowing down the work with RP after a certain period of time during active reporting and use with UI. Restarts of API and UAT services can also be observed.

To increasing the connection pool on both services, need to add next environment variables to the service-api and to the service-authorization:

```yaml
RP_DATASOURCE_MAXIMUMPOOLSIZE=100
```

After increasing the connection pool from the application side, do not forget increase the max_connections from the Database side, using following DB configuration paramether:

```yaml
max_connections=500
```

*The values of these parameters are given for example only, but in general, can be valid for all types of loads for servers middle+ and large.*

Please note, that the max_connections paramether must be more than the sum of the RP_DATASOURCE_MAXIMUMPOOLSIZE for the API and the UAT services + several connections for connecting to the database from outside.

### 7. Elasticsearch Performance Tuning

As mentioned above, in some cases may be necessary to increase the limits of shards. The general rule is 2 active shards per 1 data stream(1 data stream equals 1 project in the ReportPortal on the default configuration). If the data stream reaches the default 50 GB storage limit, it will be rollovered and a new generation will be created (please see the diagram below). Please consider that the number of Elasticsearch shards on the default configuration is insufficient for ReportPortal installations with a large number of projects. As a result, after storing close to 3000 indices without any tuning the logs-saving behavior may be incorrect.

[ ![Image](Images/data_streams.png) ](Images/data_streams.png)

To retrieve statistics from a cluster (_to check the value of shard_):

```
GET /_cluster/stats

{
    "_nodes": {
        "total": 3,
        "successful": 3,
        "failed": 0
    },
    "cluster_name": "elasticsearch",
    "cluster_uuid": "Oq5UUZUg3RGE0Pa_Trfds",
    "timestamp": 172365897412,
    "status": "green",
    "indices": {
        "count": 470,
        "shards": {
            "total": 940,
            "primaries": 470,
            "replication": 1.0,
            "index": {
                "shards": {
                    "min": 2,
                    "max": 2,
                    "avg": 2.0
                },
...
}
```


The API returns basic index metrics (shard numbers, store size, memory usage) and information about the current nodes that form the cluster (number, roles, os, jvm versions, memory usage, cpu and installed plugins).

To increase the limits of the total number of primary and replica shards for the cluster:

```
PUT /_cluster/settings

{
  "persistent" : {
    "cluster.max_shards_per_node": 3000
  }
}
```
Keep in mind, that the more shards you allow per node the more resources each node will need and the worse the performance can get.

We also recommend to check the next guides in the official Elasticsearch documentation:

[Data streams](https://www.elastic.co/guide/en/elasticsearch/reference/master/data-streams.html)

[Size your shards](https://www.elastic.co/guide/en/elasticsearch/reference/current/size-your-shards.html)


