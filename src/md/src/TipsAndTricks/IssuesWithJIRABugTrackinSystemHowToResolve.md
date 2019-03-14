## Issues with JIRA bug tracking system: how to resolve 

In case user is connecting to JIRA system and gets the error like 
"Impossible interact with external system.<name of current user's project>", there 
are some reasons could cause the issue.

**First**, verify that the link to JIRA system is correct. There are some variants 
are possible, for instance:
https://jira.company.com/jira
https://jiraeu.company.com

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

**Fourth**, maybe the connection to the jira instance requires a certificate, in this
case you need to import the certificate inside the jira container:

1. docker exec -it reportportal_jira_1 ash # go inside shell
2. cd /usr/lib/jvm/java-1.8-openjdk/jre/lib/security/
3. wget url://to/your/foo.cert
4. keytool -importcert -noprompt -file foo.crt -alias "JIRA CERT" -keystore cacerts -storepass abc123
5. exit and restart the docker jira
6. Now try to establish the connection to JIRA on ReportPortal project.

or

1. docker cp cert.der reportportal_jira_1:/cert.der
2. docker exec -t -i reportportal_jira_1 
3. ./usr/lib/jvm/java-1.8-openjdk/jre/bin/keytool -import -alias 
4. rootcert -keystore /usr/lib/jvm/java-1.8-openjdk/jre/lib/security/cacerts -file /cert.der
4. exit and restart the docker jira
5. Now try to establish the connection to JIRA on ReportPortal project.


**Note:**
SSL instance of JIRA (even cloud version) can be accessed by JIRA API token, used instead of password.


If these didn't resolve your issues, please contact us.
