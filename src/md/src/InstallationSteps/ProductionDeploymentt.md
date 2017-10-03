## Production deployment
For the production environment, it's recommended to [install MongoDB](https://docs.mongodb.com/manual/installation/) on a separate host.
In this case, remove the MongoDB container descriptor from docker-compose file and configure API,UAT,JIRA,RALLY services for just created
external MongoDB as described in [additional configuration parameters section](#documentation/Additional-configuration-parameters).
