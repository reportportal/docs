## Deploy with AWS ECS Fargate

***(provided by contributor, not verified by RP team, please use with caution)***

ReportPortal can be deployed using AWS ECS Fargate by interpreting the [docker-compose.yml](https://raw.githubusercontent.com/reportportal/reportportal/master/docker-compose.yml)

### Pre-requisites
Ensure following services are available in the chosen AWS region & you have permissions to create/modify the resources.

1. Elastic File System
2. Aurora PostgreSQL Serverless RDS instance
3. AWS EC2
4. AWS Secrets Manager
5. AWS Lambda
6. AWS ECS
7. AWS Cloudwatch
8. AWS IAM
9. AWS KMS
10. Route53

### Deployment

#### Elastic File System
Create Elastic FileSystem with 2 access points i.e., for minio & elasticsearch.
#### PostreSQL database
Create Aurora Serverless RDS PostgreSQL instance (Engine Version: 13.6) with minimum 2 ACUs and maximum 16 ACUs
#### Load Balancer
Create Elastic Application LoadBalancer - internal OR internet facing (based on your requirement) with following target groups
1. Traefik with target as IP, port 8080 and health-check path `/ping`.
2. Index with target as Lambda & health checks disabled.

Also, create following rules on the listener of load-balancer
1. Default rule should forward requests to Traefik target group.
2. Paths matching pattern `/composite/info`, `/composite/health`, `/ui` & `/` should be forwarded to Index target group.

#### KMS Key
Create a symmetric encryption KMS key with relevant permissions to manage & access key.

#### Secrets
Create Secrets to store the credentials & config of the components & refer the values in ECS task definition environment variables section. For the encryption key choose the custom KMS key created above.

Secret Structure:
```json
{   
    "app_username": "foo",
    "app_password: "bar"
}
```

During the ECS Task Definition creation choose valueFrom by referring the SecretsManager ARN in the environment variables section as follows
Eg:

```json
    {
        "name": "RABBITMQ_DEFAULT_PASS",
        "valueFrom": "arn:aws:secretsmanager:us-east-1:XXXXXXXXX:secret:report-portal-rmq-zBcd:app_password::"
    }
```

#### IAM Role
Create an IAM role with following permissions
1. KMS encryption & decryption
2. SecretsManager Read access
3. ECS Task creation
4. EFS access
5. Write access to CloudWatch log groups

#### Security Groups
Create Security Groups for
1. Access to application - attach to Load Balancer
2. Access to RP components (with the default ports of apps) & EFS mount (inbound rule to port 2049) - attach to all ECS task definitions.

#### RP Applications
Most of the configuration remains same for the applications as per the docker-compose.yml file except few overrides as per cloud provider. Ensure the components are deployed within VPC scope & disable public IP assignment where ever applicable.

**Migrations:**
Create Task Def for migrations & just run the task to apply the database schema. Since it's a one time task there's no need to create service.

**Minio & Elasticsearch:**
Create Task Def for these components by adding Elastic File System mountpoints & launch the services.

**RabbitMQ**
Create Task Def for RabbitMQ by mapping the credentials from SecretsManager in the environment variables.

**API, jobs, metrics-gatherer, analyzer, analyzer-train & ui:**

Create Task Def for each of these components & add dockerlabel with `@ecs` suffix as per the provider.
Eg: "traefik.http.routers.api.middlewares": "api-strip-prefix@ecs"

**Traefik:**

a. Create Task Def with following configuration (Launch Type as Fargate) 
    - image: "traefik:v2.4",
    - entryPoint: "traefik"
    - command: "--providers.ecs=true", "--ping=true", "--ping.entrypoint=web", "--providers.ecs.region=AWS_REGION","--providers.ecs.clusters=report-portal","--providers.ecs.exposedByDefault=false","--providers.ecs.refreshSeconds=60","--entrypoints.web.address=:8080","--entrypoints.traefik.address=:8081","--api.dashboard=true","--api.insecure=true","--log.level=DEBUG","--accesslog=true","--accesslog.format=json"
   
b. Create ECS Service mapping to the Traefik Target Group
c. Now inspect the logs of traefik service to see if all RP components are being picked up in the configuration from ECS provider.

**Index:**
For some obvious reasons the index (with Ruby runtime) service couldn't run on ECS - hence ported to Lambda with Python runtime.
Create a lambda function with 128M memory & 120s timeout with following code.

Add environment variable `TRAEFIK_SERVICES_URL` with the IP address of Traefik endpoint (it can be fetched from the task details. Eg: http://192.168.2.120:8081)

mureq can be obtained from [mureq.py](https://github.com/slingamn/mureq/blob/master/mureq.py) - place it beside the `lamda_function.py` file.

```python
import os
import json
import mureq


def lambda_handler(event, context):
    print("-------------------EVENT BEGIN-------------------------------")
    print(event)
    print("-------------------EVENT END-------------------------------")
    traefik_services= mureq.get(os.environ['TRAEFIK_SERVICES_URL'])
    
    if event['path'] == '/composite/info':
        rp_status = {}
        for service in traefik_services.json():
            if "loadBalancer" in service:
                app_name = service['name'].replace('@ecs','')
                app_info = mureq.get(service['loadBalancer']['servers'][0]['url'] + '/info')
                rp_status.update({app_name: app_info.json()})
        return{
            "statusCode": 200,
            "statusDescription": "200 OK",
            "isBase64Encoded": False,
            "headers": {
                "Content-Type": "application/json"
            },
            "body": json.dumps(rp_status)
        }
    if event['path'] == '/composite/health':
        rp_health = {}
        for service in traefik_services.json():
            if "loadBalancer" in service:
                app_name = service['name'].replace('@ecs','')
                app_health = list(service['serverStatus'].values())[0]
                rp_health.update({app_name: app_health})
        return{
            "statusCode": 200,
            "statusDescription": "200 OK",
            "isBase64Encoded": False,
            "headers": {
                "Content-Type": "application/json"
            },
            "body": json.dumps(rp_health)
        }
    if event['path'] == '/':
        redirect_url= event['headers']['x-forwarded-proto'] + "://" + event['headers']['host'] + '/ui'
        print(redirect_url)
        return{
            "statusCode": 301,
            "statusDescription": "301 Found",
            "isBase64Encoded": False,
            "headers": {
                "Location": redirect_url
            },
            "body": ""
        }
        
    if event['path'] == '/ui':
        redirect_url= event['headers']['x-forwarded-proto'] + "://" + event['headers']['host'] + '/ui/'
        print(redirect_url)
        return{
            "statusCode": 301,
            "statusDescription": "301 Found",
            "isBase64Encoded": False,
            "headers": {
                "Location": redirect_url
            },
            "body": ""
        }
```

Now add this lambda to the Index TargetGroup created earlier.

#### DNS
Add relevent DNS records in the Route53 hostedzone.

### Validation
Access the application with default credentials once the DNS record addition is propogated & validate if all sections are loading without errors.
