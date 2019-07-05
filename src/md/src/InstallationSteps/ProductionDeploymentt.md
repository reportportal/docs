## Production deployment
For the production environment, it's recommended to [install PostgreSQL](http://www.postgresqltutorial.com/install-postgresql/) on a separate host.
In this case, remove the PostgreSQL container descriptor from docker-compose file and configure API,UAT,MIGRATIONS services for just created
external PostgreSQL as described in [additional configuration parameters section](/docs/Additional-configuration-parameters).
