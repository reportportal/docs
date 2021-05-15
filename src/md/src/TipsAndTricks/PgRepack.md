## How to clean up the ReportPortal database using PG_REPACK

### Description

[pg_repack](https://reorg.github.io/pg_repack/) is a PostgreSQL extension that lets you remove bloat from tables and indexes, and optionally restore the physical order of clustered indexes. Unlike CLUSTER and VACUUM FULL it works online, without holding an exclusive lock on the processed tables during processing. pg_repack is efficient to boot, with performance comparable to using CLUSTER directly.

### Performance 

|Initial Database Size|Final Database Size|Repack duration|Duration|
|---------------------|-------------------|---------------|--------|
|1500 Gb              |251 Gb             |1200 Gb        |7 hours | 

Overall pg_repack performance has been tested during load tests running and without. The database load during pg_repack is pretty good by capacity and instance  
High DB RAM Utilization faced at the pr_repack starting, but then the overall RAM Usage becomes normal. During reporting(load tests running) faced small response times and throughput degradation around 10 minutes, but then they became a regular performance. Also, no KO requests during reporting and pg_repack run in parallel, so that all Staging pg_repack configuration can be safely porting to Production.

#### Detailed DB Resource Utilization Stats

|Resources         |Used           |
|------------------|---------------|
|CPU utilization   |13 %           |
|CPU IOwait        |7%             |
|Disk IO Read/Write|1800/30000 IOPS|

### PG_REPACK installation

To install PG_REPACK use the guide from the official [GitHub page](https://reorg.github.io/pg_repack/). If you use Amazon RDS follow the [link](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.PostgreSQL.CommonDBATasks.html#Appendix.PostgreSQL.CommonDBATasks.pg_repack)

### PG_REPACK usage

* Attach to Screen session:

```bash
screen
```

For more information about the Screen read this [guide](https://linux.die.net/man/1/screen).

* You need to add the path to the PG_REPACK executable file. The PATH variable is an environment variable that contains an ordered list of paths that Unix will search for executables when running a command. Run the following command:

```bash
export PATH=$PATH:/usr/pgsql-12/bin/
```

* Create **.pgpass** file and fill your data. The file **.pgpass** the file referenced by PGPASSFILE contain passwords to be used if the connection requires a password. [Documentation](https://www.postgresql.org/docs/9.3/libpq-pgpass.html). 

```bash
cat << EOF | tee -a /.pgpass
<database_host>:<database_port>:<database_name>:<database_user>:<database_password>
EOF
```

For example, **.pgpass** file should look like this:

```bash
reportportal-cdufjldqrau0.eu-west-3.rds.amazonaws.com:5432:reportportal:rpuser:strongpassword
```

* Change permissions to .pgpasss file:

```bash
chmod 600 /.pgpass
```

* Set PGPASSFILE environment variable:

```bash
export PGPASSFILE='/.pgpass'
```

* Fill your data and run PG_REPACK:

```bash
pg_repack -h <database_address> -U <database_user> -k <database_name> &>> /pg_repack-rpdb.log
```

No password is needed for the database because you are using **.pgpass**.

When you run the command, you will get artifact pg_repack-rpdb.log, where PG_REPACK will storage the logs. The pg_repack-rpdb.log file is stored in your root directory `/`.

*	To detach from the Screen session type **Control+a+d** (on OSX and Linux). The result will be similar to:

```bash
[detached from 22556.pts-0.ip-10-68-38-165]
```

22556 is ID of you screen session. You will get a different ID. Save it.

*	Attach to the Screen session:

```bash 
screen -r
```

If you have one Screen session, you will join it. If you have two or more of them, you will get the following result:

```bash
There are several suitable screens on:
	22556.pts-0.ip-10-68-38-165	(Detached)
	8175.pts-0.ip-10-68-38-165	(Detached)
Type "screen [-d] -r [pid.]tty.host" to resume one of them.
```

To join the PG_REPACK Screen session fill your Screen ID that you saved in step 4 and run the following command:

```bash
screen -r <your_screen_id>
```

*	To view the process of running the command you can read pg_repack-rpdb.log with command:

```bash
cat /pg_repack-rpdb.log
```

In addition, you can stream log with the command:

```bash
tail -F /pg_repack-rpdb.log
```

Type Control+c (on OSX and Linux) to exit from Tail
