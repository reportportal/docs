## Additional configuration parameters

| Configuration parameter | Default Value | Service | Description |
|-------------------------| ------------- | --------|-------------|
| RP_PROFILES | - | API,UAT,JIRA,RALLY | Specifies application settings profiles. Should be set to 'docker' |
| RP_SESSION_LIVE | 1800 | UAT | Session token live time in seconds|
| RP_ISSUE_ANALYZER_DEPTH | 5 | API | Autoanalysis depth - count of previous launches to be analyzed |
| RP_MONGO_HOST | 'localhost' for default profile, 'mongodb' for docker profile | API,UAT,JIRA,RALLY | MongoDB host|
| RP_MONGO_PORT | 27017 | API,UAT,JIRA,RALLY | MongoDB port|
| RP_MONGO_DB_NAME | reportportal | API,UAT,JIRA,RALLY | MongoDB database name|
| RP_MONGO_DB_USER | - | API,UAT,JIRA,RALLY | MongoDB user name|
| RP_MONGO_DB_PASSWORD | - | API,UAT,JIRA,RALLY | MongoDB user password|

Example of docker compose with filled out configuration parameters [can be found here](https://github.com/reportportal/reportportal/blob/master/docker-compose.yml).
