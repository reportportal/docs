## Basic monitoring configuration

The common ReportPortal instance consists of two main parts – the application server and the database server – both of which must be covered by basic system-level and application-level metrics. Basic system-level monitoring should include metrics tracking the main application and database servers' VM and cluster resources, such as:

- CPU,
- RAM,
- Network,
- Disk Operations,
- Storage Usage.

Extended system-level monitoring for the application instance should include:

- CPU and RAM utilization per each service,
- MinIO storage usage trend,
- Restarts count per each service,
- Disk Bytes,
- CPU usage in cores per each service,
- Network IO per each service,
- RabbitMQ runtime metrics.

In the case of rollouts of the ReportPortal PostgreSQL database as an **Amazon RDS**, the **AWS RDS Performance Insights** is used for monitoring purposes and CloudWatch metrics are used to measure basic system-level database workload.

### Tools

For regular monitoring, we've chosen one of the most popular, lightweight, and easy-to-maintain tools stack - **Telegraf+InfluxDB+Grafana**.
Telegraf is an open-source server agent which enables us to use a lot of different monitoring protocols out of the box. InfluxDB is used to collect these metrics from Telegraf agents. Grafana is used for metrics visualization, building charts, and custom dashboards to reach a "single pane of glass" monitoring principle.
The PostgreSQL database in all cases is monitored by AWS RDS Performance Insights, which gives high visibility into the Database workload in runtime, meets all monitoring requirements, and covers OS system-level and database-specific metrics.
In addition to that, for the basic database monitoring is used PGHero tool - useful monitoring dashboard for PostgreSQL.

### Monitoring installation

Not recommended mixing the ReportPortal services and monitoring services on the same machine, especially in docker installation. 
To avoid competition for resources with the services of the ReportPortal, deploy a separate virtual machine for monitoring (for our instances we using m5.large shape for the monitoring node) and install the following services: 
1) InfluxDB database: https://docs.influxdata.com/influxdb/v2.0/install/?t=Docker;
2) Grafana: https://grafana.com/docs/grafana/latest/installation/docker/;
Dashboard examples(Grafana IDs): 5955, 3056.
3) Telegraf:
   - Kubernetes deployment: telegraf agent needs to be installed at each cluster node.
   - Docker deployment: telegraf agent should be installed at the ReportPortal VM. In case of rollouting the Database server on the separate VM, telegraf agent should be installed also at that VM.

**Telegraf installation guide:**

Update your system.

    ```yaml
    sudo yum -y update
    ```
Add Influxdata RPM repository.

    ```yaml
    cat <<EOF | sudo tee /etc/yum.repos.d/influxdb.repo
    [influxdb]
    name = InfluxDB Repository - RHEL 
    baseurl = https://repos.influxdata.com/rhel/7/x86_64/stable/
    enabled = 1
    gpgcheck = 1
    gpgkey = https://repos.influxdata.com/influxdb.key
    EOF
    ```

Install Telegraf on RHEL 8 / CentOS 8. Once the repository has been added, install Telegraf on RHEL 8 using the command below.

    ```yaml
    sudo dnf -y install telegraf
    ```
Open "telegraf.conf" file for the monitoring configuration. In the case of Kubernetes deployment need to configure telegraf on each cluster node separately.

    ```yaml
    sudo nano /etc/telegraf/telegraf.conf
    ```
Change following configs(press **Ctrl+W** to search for the particular configs):

    ```yaml
    hostname = "api_node_1"
    ```

Search for the "outputs.influxdb" and update URL and database name for the InfluxDB:

    ```yaml
    [[outputs.influxdb]]
    urls = ["http://<influxdb_host>:8086"]
    database = "telegraf"
    ```

Search for the "inputs.docker" and update next configs(should be uncommented each value which you need to add to the monitoring):

    ```yaml
    [[inputs.docker]]
    endpoint = "unix://var/run/docker.sock"
    perdevice_include = ["cpu"]
    total_include = ["cpu", "blkio", "network"]
    ```

Search for the "inputs.net" for adding the network metrics to the monitoring. Uncomment only the plugin name:

    ```yaml
    [[inputs.net]]
    ```

Save changes, close "telegraf.conf" and start telegraf service:

    ```yaml
    sudo systemctl enable --now telegraf
    ```

Check the status(should be green and in active running status):

    ```yaml
    sudo systemctl status telegraf
    ```

In case of errors _"E! [inputs.docker] Error in plugin: Got permission denied while trying to connect to the Docker daemon socket at unix://var/run/docker.sock Permission denied"_

Need to add permissions to the _/var/run/docker.sock_:

    ```yaml
    sudo chmod 666 /var/run/docker.sock
    ```

### PGHero - simple monitoring dashboard for PostgreSQL

### Functionality

- requests statistic: number of calls, average and total execution time (with the ability to store history);
- currently active queries;
- information about tables: disk space occupied, dates of the last **VACUUM** and **ANALYSE** launches;
- information about indexes: disk space occupied, presence of duplicated / unused indexes;
- recommendations regarding adding an index on complex queries with **Seq Scan**;
- statistics on open connections to the database;
- displaying basic database settings that affect performance (**shared_buffers**, **work_mem**, **maintenance_work_mem**, etc.).

### Installation

**How to enable query stats**

In the database settings(for RDS database - in parameter group) add/change the following parameters:

    ```yaml
    shared_preload_libraries = 'pg_stat_statements'
    pg_stat_statements.track = all
    pg_stat_statements.max = 10000
    track_activity_query_size = 2048
    ```

Restart the database or reboot the RDS instance.
As a superuser from the psql console, run:

    ```yaml
    CREATE extension pg_stat_statements;
    ```

**How to configure historical query stats**

To track query stats over time, create a table to store them.

Execute the following query for table creation:

    ```yaml
    CREATE TABLE "pghero_query_stats" (
    "id" bigserial primary key,
    "database" text,
    "user" text,
    "query" text,
    "query_hash" bigint,
    "total_time" float,
    "calls" bigint,
    "captured_at" timestamp
    );
    ```

Build index on the created table:

    ```yaml
    CREATE INDEX ON "pghero_query_stats" ("database", "captured_at");
    ```

Include the following to the installation string to schedule the task to run every 5 minutes:

    ```yaml
    bin/rake pghero:capture_query_stats
    ```

The query stats table can grow large over time. Remove old stats with:

    ```yaml
    bin/rake pghero:clean_query_stats
    ```





