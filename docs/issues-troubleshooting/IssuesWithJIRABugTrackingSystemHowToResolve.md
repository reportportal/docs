---
sidebar_position: 2
sidebar_label: 'Issues with JIRA bug tracking system: how to resolve'
---

# Issues with JIRA bug tracking system: how to resolve 

In case user is connecting to JIRA system and gets the error like 
"Impossible interact with external system.&lt;name of current user's project>", there 
are some reasons could cause the issue.

**First**, verify that the link to JIRA system is correct. There are some variants 
are possible, for instance:

```
https://jira.company.com/jira
https://jiraeu.company.com
```

**Second**, verify the project name is correct. Please fill in Project name field with 
project key value, e.g. project ABC-DEF has key ABCDEF.

**Third**, verify username and password data. Make sure, that login name and not email 
is in the username field. In case all the data above is correct, but the error 
appears again, check whether user's credentials to JIRA are not expired. 
As far as JIRA sends the request in html format, we are not able to display the real
reason of error.
To check and/or resolve the issue, please do the next steps:
1. Open JIRA page
2. Login JIRA with domain credentials using basic authorization (i.e., fill in user's 
login name and password into the fields)
3. Submit the login form
Screen with CAPTCHA should appears
4. Enter the symbols
5. Submit the credentials again
6. Now try to establish the connection to JIRA on ReportPortal project.

**Fourth**, the connection to the JIRA instance might require a certificate. If that's the case, the certificate needs to be imported inside the API container. Follow these steps:

```sh
# 1. Access the shell of the API Docker container
docker exec -it reportportal_api_1 /bin/sh

# 2. Change the directory to point to the 'security' directory
cd /usr/lib/jvm/jre/lib/security/
# Or use this command if the 'security' directory is in another folder:
# cd /usr/lib/jvm/java-11-amazon-corretto/jre/lib/security/

Note: Replace 'java-11-amazon-corretto' with the version in the latest API Docker image.

# 3. Get the certificate file
curl -O url://to/your/foo.cert

# 4. Import the certificate
keytool -importcert -noprompt -file foo.cert -alias "JIRA CERT" -keystore cacerts -storepass abc123 # note: the default password for the keystore is 'changeit'

# 5. Exit the shell and restart the docker API.
exit

# 6. Try to establish the connection to JIRA on the ReportPortal project again.
```
Or use this alternative method:

```sh
# 1. Copy the certificate into the Docker container
docker cp cert.der reportportal_api_1:/cert.der

# 2. Import the certificate
docker exec -t -i reportportal_api_1 ./usr/lib/jvm/jre/bin/keytool -import -alias rootcert -keystore /usr/lib/jvm/jre/lib/security/cacerts -file /cert.der
# If the 'jre' folder is inside another folder, use the following command instead:
# docker exec -t -i reportportal_api_1 ./usr/lib/jvm/java-11-amazon-corretto/jre/bin/keytool -import -alias rootcert -keystore /usr/lib/jvm/java-11-amazon-corretto/jre/lib/security/cacerts -file /cert.der

Note: Replace 'java-11-amazon-corretto' with the version in the latest API Docker image.

# 3. Exit and restart the Docker API.
exit

# 4. Attempt the connection to JIRA on ReportPortal project again.
```
Both methods should allow you to import the necessary certificate for your JIRA connection inside the ReportPortal API container.

:::note
SSL instance of JIRA (even cloud version) can be accessed by JIRA API token, used instead of password.
:::

If these didn't resolve your issues, please contact us.
