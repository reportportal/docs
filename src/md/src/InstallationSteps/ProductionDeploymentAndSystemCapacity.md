## Production Deployment And System Capacity
For the production environment, it's recommended to [install PostgreSQL](http://www.postgresqltutorial.com/install-postgresql/) on a separate host.
In this case, remove the PostgreSQL container descriptor from docker-compose file and configure API,UAT,MIGRATIONS services for just created
external PostgreSQL as described in [additional configuration parameters section](/docs/Additional-configuration-parameters).

### System Capacity
In this section you can find saturation points and overall system capacity for different instance sizes and specifications.
Information is presented for the M5 instances which are the latest generation of General PurposeInstances with Up to 3.1 GHz Intel Xeon® Platinum 8175 processors with new Intel Advanced Vctor Extension (AVX-512) instruction set.

#### M5 instances
##### Application and Database are deployed on different VMs

| **Instance Type**  | **Saturation points, rps** | **vUsers count** | **DiskIOPS** | **Java Options**|
| ------------- | ------------- |------------- | ------------- | ------------- |
| m5.large | 301  | 23| up to 3 000 |-Xmx1g |
| m5.xlarge  | 631  | 56 | up to 3 000 |-Xmx1g |
| m5.2xlarge  | 1531   | 137 |up to 6 000 |-Xmx2g |
| m5.4xlarge  | 3125  | 258 |up to 8 000 |-Xmx3g |
| m5.8xlarge  | 5200  | 440 |up to 10 000 | -Xmx3g|

##### Application and Database are deployed on the same VM

| **Instance Type**  | **Saturation points, rps** | **vUsers count** | **DiskIOPS** | **Java Options**|
| ------------- | ------------- |------------- | ------------- | ------------- |
| m5.large | 220 | 20| up to 3 000 |-Xmx1g |
| m5.xlarge  | 475 | 40 | up to 3 000 |-Xmx1g |
| m5.2xlarge  | 989   | 75 |up to 6 000 |-Xmx2g |
| m5.4xlarge  | 2400  | 200 |up to 8 000 |-Xmx3g |
| m5.8xlarge  | 4367  | 369 |up to 10 000 | -Xmx3g|


#### C5 instances

Information is presented for the С5 instances which are optimized for compute-intensive workloads and deliver cost-effective high performance at a low price per compute ratio(Compute Optimized Instances) with Up to 3.4GHz, and single core turbo frequency of up to 3.5 GHz 2nd generation Intel Xeon Scalable Processors (Cascade Lake) or 1st generation Intel Xeon Platinum 8000 series (Skylake-SP) processor with a sustained all core Turbo frequency

##### Application and Database are deployed on different VMs

| **Instance Type**  | **Saturation points, rps** | **vUsers count** | **DiskIOPS** | **Java Options**|
| ------------- | ------------- |------------- | ------------- | ------------- |
| m5.large | 640  | 60| up to 3 000 |-Xmx1g |
| m5.2xlarge  | 1374  | 115 | up to 4 000 |-Xmx2g |
| m5.4xlarge  | 3104   | 356 |up to 8 000 |-Xmx3g |
| m5.9xlarge  | 5700  | 489 |up to 10 000 |-Xmx4g |


##### Application and Database are deployed on the same VM

| **Instance Type**  | **Saturation points, rps** | **vUsers count** | **DiskIOPS** | **Java Options**|
| ------------- | ------------- |------------- | ------------- | ------------- |
| m5.large | 521  | 50| up to 3 000 |-Xmx1g |
| m5.2xlarge  | 1078 | 83 | up to 4 000 |-Xmx2g |
| m5.4xlarge  | 2940   | 305 |up to 8 000 |-Xmx3g |
| m5.9xlarge  | 5227  | 440 |up to 10 000 |-Xmx4g |
