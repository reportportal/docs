## Optimal Performance Hardware setup

### 1.  Disk I/O 
   To speed up PostgreSQL database performance, on instance strongly recommended use **SSD disk** hardware.

### 2. CPU utilization 
   Consider choosing the **CPU optimized** instances to reduce high CPU utilization of the ReportPortal service-API and speed up ReportPortal overall. 
   
   For example:

  * **Azure**: Fsv2-series instances,
  * **AWS**: c5 instances.  

  The instance capacity(4 CPUs/8Gb RAM or 8 CPUs/16Gb RAM etc.) should be selected regarding average reporting test-cases/day and average CPU/RAM utilization. If the CPU/RAM utilization of the ReportPortal instance up to 100% a long time daily, consider scale up the VM x2.  
  
  In general, 4 CPUs/8Gb RAM or 8 CPUs/16Gb RAM instance capacity is enough configuration setup for the small/middle-size server.

### 3. The database separately from other services
   Consider deploying the database separately from other RP services. It allows increasing throughput of the server and performance of the ReportPortal overall. This can be, for example, AWS RDS or a separate VM only for the PostgreSQL database.

### 4. PostgreSQL Performance Tuning
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
    max_parallel_workers=2
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
