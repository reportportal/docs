## Integrations

Users can reinforce ReportPortal with adding additional integrtions with:

[ ![Integrations](Images/userGuide/gettingStarted/Integrations.png) ](Images/userGuide/gettingStarted/Integrations.png)

* [Jira](https://reportportal.io/docs/Jira-Integration)
* [Rally](https://reportportal.io/docs/Rally-Integration)
* [Sauce Labs](https://reportportal.io/docs/Sauce-Labs-integration)
* [E-mail server](https://reportportal.io/docs/E-mail-server-integration)
* [LDAP](https://reportportal.io/docs/LDAP-Auth-integration)
* [Active Directory](https://reportportal.io/docs/Active-Directory-Auth-integration)

If you want to integrate ReportPortal with these external systems, and you can not find a needed tab on the Project Settings, please check the section in documentation [Plugins](https://reportportal.io/docs/Plugins).

Integration configurations can be added on the global level (for all projects on the instance) on the Management Board or the project level (only for one project) on Project Settings.

If you have another configuration than others project have or you want to integrate only your project with an external system, you should perform the next actions:

1. Login ReportPortal as PROJECT MANAGER or ADMIN

2. Go to project settings > Integrations

3. Click on one of the integration panels

4. And click the button "Unlink and setup manually"

By this action, you unlink the current project from the global settings and configure your integration.

[ ![Unlink Global Jira Integration](Images/userGuide/gettingStarted/Unlink Global Integration.png) ](mages/userGuide/gettingStarted/Unlink Global Integration.png)


>**Note:**
> If you unlink project setting and ADMIN changes global settings for the whole instance, your project will use your project settings.

To return global settings, you need to click a button "Reset to global settings".
In this case, your settings will be deleted, and integration will use global settings.

You always can reset to the global settings.

## Jira Integration  

Integration with a JIRA can be required for projects that collect defects in a separate tracking tool. The integration provides an exchange of information between ReportPortal and the JIRA, such as posting issues and linking issues, getting updates on their statuses. 

**Permission:** 

The *Administrator* can upload a plugin and make global integrations on the Plugin tab on the Management board. Also, the Administrator can unlink project configurations from global. 
The *Project Manager* can work only on the project level. He can unlink and re-write global configuration with project ones on Project Settings > Integrations.


### Global JIRA integration

#### Add new global Jira integration

If all projects on your instance are using the same Jira projects, you will be able to configure **global integrations** which will be applied on all projects. 

1. Login as ADMIN

2. Go to Administrative > Plugins

3. Click on JIRA plugin pannel

4. Click on "Add integration"

5. Fill and confirm authorization form

```java
'Integration Name ': <The name which you want to give to your integration> - should be unique
'Link to BTS': <valid URL of bug tracking system>
'Project name in BTS': <project key in bug tracking system>            
'Authorization Type': Basic (predefined)                  
'BTS Username': <JIRA user name>                  
'BTS Password': <JIRA user password>
```

After you have created a connection with the JIRA project, you can choose predefined JIRA ticket fields. These fields will be shown to you all the time when you post the issue in Jira.

This feature gives you the ability to choose which type you will post a ticket.

For choosing needed issue type and predefined field for the chosen issue, you should perform the following actions:

1. Click button "Configure"

2. Choose issue type from a drop-down

3. Check needed fields and fill them if you need

4. Click on "Submit"


Now team members on all your projects will be able to submit issues in Jira. Options for Post Issue / Link issue are activated.

[ ![Global Jira Integration Creation](Images/userGuide/gettingStarted/JiraGlobal.png) ](https://youtu.be/tCRh30KDpKc)

If you need you can add more integrations, by clicking on "Add integration".

User can add several integrations, but with a different name to the **one JIRA project**.


>**Use case:**
>
> **Situation:** User wants to post to JIRA issues with type **Defect** and **Task** to the project NNN-MMM in Jira. Is it possible?
> Yes!
>
> **Solution:** Add two integrations to the project NNN-MMM in Jira with names f.e. "Project -1" and "Project -2". 
> Add to the "Project -1" issue type **Defect** and for "Project -2" - issue type **Task**.
> While posing issue procedure, choose integration with needed type.
>
> [ ![UseCaseWithTwoIntegrations](Images/userGuide/gettingStarted/JiraProject.png) ](https://youtu.be/med4tuL4plU)


#### Update global Jira integration

If you need to edit Jira integration authorization parameters, please perform actions:

1. Login as ADMIN

2. Go to Administrative > Plugins

3. Click on JIRA plugin pannel

4. Click on a tab with existing integration

5. Click on "Edit authorization"

6. Change "Integration name"

7. Type your Jira credentials

8. Submit form

>**Note:** 
>
> You can edit the "Integration name" only. If you need other changes, please submit new integration.


If you need to edit fields which should be posted in Jira, please perform actions:

1. Login as ADMIN

2. Go to Administrative > Plugins

3. Click on JIRA plugin pannel

4. Click on a tab with existing integration

5. Click on the button "Configure"

6. Choose issue type from a drop-down

7. Check needed fields and fill them if you need

8. Click on "Submit"

9. Submit form


[ ![Edit Global Jira Integration](Images/userGuide/gettingStarted/JiraGlobal.png) ](https://youtu.be/yvYwxs4zTYA)


#### Remove global Jira integration

If you need to remove Jira integration, please perform actions:

1. Login as ADMIN

2. Go to Administrative > Plugins

3. Click on JIRA plugin pannel

4. Click on a tab with existing integration

5. Click on "Remove integration"

6. Submit an action

[ ![Remove Global Jira Integration](Images/userGuide/gettingStarted/JiraGlobal.png) ](https://youtu.be/mEWP4txdJFA)


### Project JIRA integration

#### Add new project Jira integration

If each project needs different Jira configurations, you need to unlink a project from Global configurations and add a project configuration. It means that now when new global integration will be added to the ReportPortal, it would not apply to the unlinked project. 

For that,

1. Login as an ADMIN or Project Manager

2. Go to Project Settings > Integrations

3. Click on the JIRA integration pannel

4. Click on "Unlink and setup manually"

5. Fill and confirm authorization form

```java
'Integration Name ': <The name which you want to give to your integration> - should be unique
'Link to BTS': <valid URL of bug tracking system>
'Project name in BTS': <project key in bug tracking system>            
'Authorization Type': Basic (predefined)                  
'BTS Username': <JIRA user name>                  
'BTS Password': <JIRA user password>
```

After you have created a connection with the JIRA project, you can choose predefined JIRA ticket fields. These fields will be shown to you all the time when you post the issue in Jira.

This feature gives you the ability to choose which type you will post a ticket.

For choosing needed issue type and predefined field for the chosen issue, you should perform the following actions:

1. Click button "Configure"

2. Choose issue type from a drop-down

3. Check needed fields and fill them if you need

4. Click on "Submit"


Now team members on **this project** will be able to submit issues in Jira. Options for Post Issue / Link issue are activated.

If you needed you can add more integrations, by clicking on "Add integration".

[ ![ProjectJiraIntegration](Images/userGuide/gettingStarted/JiraProject.png) ](https://youtu.be/tCRh30KDpKc)

#### Reset to project Jira Integrations

If you want to delete project integrations with Jira and link your project with global configurations, please perform actions described below:

1. Login as an ADMIN or Project Manager

2. Go to Project Settings > Integrations

3. Click on the JIRA integration pannel

4. Click on "Reset to global settings"

5. Confirm actions

[ ![Reset to Global Jira Integration](Images/userGuide/gettingStarted/JiraGlobal.png) ](https://youtu.be/KIrEVY-DKiA)


### Some tricks when you create a new connection:

1. Verify that the link to the JIRA system is correct. There are some variants are possible, for instance: https://jira.company.com/jira https://jiraeu.company.com

2. Verify the project name in JIRA is correct. Please fill in the Project name field with project key-value, e.g. project ABC-DEF has key ABCDEF.

3. Verify the username and password data. Make sure, that the login name and not the email are in the username field. In case all the data above is correct, but the error appears again, check whether the user's credentials to JIRA are not expired. As far as JIRA sends the request in HTML format, we are not able to display the real reason for the error. To check and/or resolve the issue, please do the next steps:

   *    Open JIRA page
   *    Login JIRA with domain credentials using basic authorization (i.e., fill in user's login name and password into the fields)
   *    Submit the login form Screen with CAPTCHA should appear
   *    Enter the symbols
   *    Submit the credentials again
   *    Now try to establish the connection to JIRA on the ReportPortal project.

4. SSL instance of JIRA (even cloud version) can be accessed by JIRA API token, used instead of a password.
After you have connected Jira and ReportPortal, you can choose an issue type that you will be able to add to Jira during the “Post Issue” operation.  Also, the user can add predefined fields that the user can fill.

### Post issue to Jira

By posting the issue in Jira, we mean a possibility to create a new issue in Jira from ReportPortal and upload logs and attachments from an execution.

If you want to post a new issue to Jira, you need to have a project or global integration with Jira. 

[ ![Post issue](Images/userGuide/gettingStarted/Post issue.png) ](Images/userGuide/gettingStarted/Post issue.png)

Post issue via Step view

1. Login ReportPortal as Admin, PM, Member, Customer or Operator

2. Come to a step view

3. Choose needed item

4. Click on a button "Actions"

5. Choose an action "Post issue"

6. Fill a posting form with valid data

```javascript
`BTS`: if you have configured Jira and Rally integrations, you will be able to choose needed
`Integration name`: from the drop-down, you can choose any of integrations for chosen earlier BTS
`Predefined fields`: fields which you choose on Project Settings/ or Plugins
`Included data`: which data should be posted to BTS (attachments, logs, comments)
`BTS username`: reporter login in Jira
`BTS password`: reporter password in Jira
```

7. Submit a form

8. A new issue will be posted in BTS with information from ReportPortal

9. A label with issue ID will be added to the test item




### Link an issue with an issue in Jira

By linking issue with an issue in Jira, we mean a possibility to a clickable link to an existing issue in Jira from ReportPortal that will show a status of this issue. 

[ ![Link issue](Images/userGuide/gettingStarted/Link issue.png) ](Images/userGuide/gettingStarted/Link issue.png)

Post issue via Step view

1. Login ReportPortal as Admin, PM, Member, Customer or Operator

2. Come to a step view

3. Choose needed item

4. Click on a button "Actions"

5. Choose an action "Link issue"

6. Fill a posting form with valid data

```javascript
`BTS`: if you have configured Jira and Rally integrations, you will be able to choose needed
`Integration name`: from the drop-down, you can choose any of integrations for chosen earlier BTS
`Link to issue`: a full link to the item in BTS
`Issue ID`: information which will be displayed on the label in ReportPortal
```

7. Submit a form

8. A label with issue ID will be added to the test item


## Rally Integration 
### Global RALLY integration

#### Add new global RALLY integration

If all projects on your instance are using the same RALLY  projects, you will be able to configure **global integrations** which will be applied on all projects. 

1. Login as ADMIN

2. Go to Administrative > Plugins

3. Click on RALLY plugin pannel

4. Click on "Add integration"

5. Fill and confirm authorization form

```java
'Integration Name ': <The name which you want to give to your integration> - should be unique
`Link to BTS`: <valid URL of bug tracking system>
`Project name in BTS`: <project key in bug tracking system>
`Authorization Type`: ApiKey (predefined)
`ApiKey`: <RALLY user apikey>
```

After you have created a connection with the RALLY project, you can choose predefined RALLY ticket fields. These fields will be shown to you all the time when you post the issue in the RALLY.

This feature gives you the ability to choose which type you will post a ticket.

For choosing needed issue type and predefined field for the chosen issue, you should perform the following actions:

1. Click button "Configure"

2. Choose issue type from a drop-down

3. Check needed fields and fill them if you need

4. Click on "Submit"


Now team members on all your projects will be able to submit issues in RALLY. Options for Post Issue / Link issue are activated.

If you needed you can add more integrations, by clicking on "Add integration"

>**Note:**

User can add several integrations, but with a different name to the **one RALLY project**.

>**Use case:**
>
> **Situation:** User wants to post to RALLY issues with type **Defect** and **Task** to the project NNN-MMM in RALLY. Is it possible?
> Yes!
>
> **Solution:** Add two integrations to the project NNN-MMM in RALLY with names f.e. "Project -1" and "Project -2". 
> Add to the "Project -1" issue type **Defect** and for "Project -2" - issue type **Task**.
> While posing issue procedure, choose integration with needed type.


#### Update global RALLY integration

If you need to edit RALLY integration authorization parameters, please perform actions:

1. Login as ADMIN

2. Go to Administrative > Plugins

3. Click on RALLY plugin pannel

4. Click on a tab with existing integration

5. Click on "Edit authorization"

6. Change "Integration name"

7. Type your RALLY credentials

8. Submit form

>**Note:** 
>
>you can edit only "Integration name". If you need other changes, please submit new integration.


If you need to edit fields which should be posted in RALLY, please perform actions:

1. Login as ADMIN

2. Go to Administrative > Plugins

3. Click on RALLY plugin pannel

4. Click on a tab with existing integration

5. Click on the button "Configure"

6. Choose issue type from a drop-down

7. Check needed fields and fill them if you need

8. Click on "Submit"

9. Submit form



#### Remove global RALLY integration

If you need to remove RALLY integration, please perform actions:

1. Login as ADMIN

2. Go to Administrative > Plugins

3. Click on RALLY plugin pannel

4. Click on a tab with existing integration

5. Click on "Remove integration"

6. Submit an action

### Project RALLY integration

#### Add new project RALLY integration

If each project needs different RALLY configurations, you need to unlink a project from Global configurations and add a project configuration. It means that now when new global integration will be added to the ReportPortal, it would not apply to the unlinked project. 

For that,

1. Login as an ADMIN or Project Manager

2. Go to Project Settings > Integrations

3. Click on the RALLY integration pannel

4. Click on "Unlink and setup manually"

5. Fill and confirm authorization form

```java
'Integration Name ': <The name which you want to give to your integration> - should be unique
'Link to BTS': <valid URL of bug tracking system>
'Project name in BTS': <project key in bug tracking system>            
'Authorization Type': Basic (predefined)                  
'BTS Username': <RALLY user name>                  
'BTS Password': <RALLY user password>
```

After you have created a connection with the RALLY project, you can choose predefined RALLY ticket fields. These fields will be shown to you all the time when you post the issue in the RALLY.

This feature gives you the ability to choose which type you will post a ticket with.

For choosing needed issue type and predefined field for the chosen issue, you should perform the following actions:

1. Click button "Configure"

2. Choose issue type from a drop-down

3. Check needed fields and fill them if you need

4. Click on "Submit"


Now team members on **this project** will be able to submit issues in RALLY. Options for Post Issue / Link issue are activated.

If you needed you can add more integrations, by clicking on "Add integration".

#### Reset to project RALLY Integrations

If you want to delete project integrations with RALLY and link your project with global configurations, please perform actions described below:

1. Login as an ADMIN or Project Manager

2. Go to Project Settings > Integrations

3. Click on the RALLY integration pannel

4. Click on "Reset to global settings"

5. Confirm actions

### Post issue to Rally

By posting the issue in Rally, we mean a possibility to create a new issue in Rally from ReportPortal and upload logs and attachments from an execution.

If you want to post a new issue to Rally, you need to have a project or global integration with Rally. 

Post issue via Step view

1. Login ReportPortal as Admin, PM, Member, Customer or Operator

2. Come to a step view

3. Choose needed item

4. Click on a button "Actions"

5. Choose an action "Post issue"

6. Fill a posting form with valid data

```javascript
BTS: if you have configured Jira and Rally integrations, you will be able to choose needed
Integration name: from the drop-down, you can choose any of integrations for chosen earlier BTS
Predefined fields: fields which you choose on Project Settings/ or Plugins
Included data: which data should be posted to BTS (attachments, logs, comments)
BTS username: reporter login in Jira
BTS password: reporter password in Jira
```

7. Submit a form

8. A new issue will be posted in BTS

9. A label with issue ID will be added to the test item


[ ![Post issue](Images/userGuide/gettingStarted/Post Issue.png) ](Images/userGuide/gettingStarted/Post Issue.png)

### Link an issue with an issue in Rally

By linking issue with an issue in Rally, we mean a possibility to a clickable link to an existing issue in Rally from ReportPortal that will show a status of this issue. 

[ ![Link issue](Images/userGuide/gettingStarted/Link issue.png) ](Images/userGuide/gettingStarted/Link issue.png)

Post issue via Step view

1. Login ReportPortal as Admin, PM, Member, Customer or Operator

2. Come to a step view

3. Choose needed item

4. Click on a button "Actions"

5. Choose an action "Link issue"

6. Fill a posting form with valid data

```javascript
`BTS`: if you have configured Jira and Rally integrations, you will be able to choose needed
`Integration name`: from the drop-down, you can choose any of integrations for chosen earlier BTS
`Link to issue`: a full link to the item in BTS
`Issue ID`: information which will be displayed on the label in ReportPortal
```

7. Submit a form

8. A label with issue ID will be added to the test item

## E-mail server integration
### Add E-mail server integrations

You can integrate the Report portal with an E-mail server. With this integration, you will be able to perform such functions as:

- invite a new user to the project
- configure notification rules on launch finish


**Permissions:** 

user with account role *ADMINISTRATOR* can configure E-mail integration for the whole instance or per project.
User with account role *PROJECT MANAGER* can configure E-mail integration only on a project where he is assigned on as Project Manager.

### Global E-mail server integration

To configure the Email server for the whole instance:

1. Login to the ReportPortal as an ADMIN user

2. Then open the list on the right of the user's image.

3. Click the 'Administrative' link 

4. Click the 'Plugins' from the left-hand sidebar

5. Click on the 'Email Server' tab.

6. Click on Add new integration

7. The next fields should be present:

```javascript 
`Host`: <host_name_of_email_server>
`Protocol`: SMTP (predefined)
`Default sender name`: (optional)
`Port`: <port_number>
`Authorization`: OFF/ON 
`Username`: <user_email_address>
`Password`: <user_email_password>
'TLS' or 'SSL': should be checked depends on the selected port.
```

Example of email server configuration for Gmail email server (detailed info could be found [here](https://support.google.com/a/answer/176600?hl=en))

```javascript
`Host`: smtp.gmail.com
`Protocol`: SMTP
`Default sender name`: Report Portal
`Port`: 465
`Authorization`: ON
`Username`: <user_email_address>
`Password`: <user_email_password>
`SSL`: checkbox should be checked.
```

Example of an email server configuration for a Yandex email server (detailed info can be found [here](https://yandex.com/support/mail-new/mail-clients.html))
 
```javascript
`Host`: smtp.yandex.com
`Protocol`: SMTP
`Default sender name`: Report Portal
`Port`: 465
`Authorization`: ON
`Username`: <user_email_address>
`Password`: <user_email_password>
`SSL`: checkbox should be checked.
```

8. Confirm data in the form

[ ![E-mail server configuration](Images/userGuide/gettingStarted/E-mail Server.png) ](https://youtu.be/FekmJRNedfU)

After E-mail server integration adding, the configuration will be applied to all projects on the instance.

**Project E-mail integration**

If E-mail integration has not to be added on the project, or if Project Manager or Admin want to specified special configurations for a special project, they can configure E-mail server in the project settings.

To configure Email server for one single project instance:

1. Login to the ReportPortal as an ADMIN or PM user
2. Then click on the Project settings icon.
3. Click on the Integrations tab.
4. Click on the 'E-mail Server' tab.
5. Click on the button "Unlink & Setup Manually"
6. The next fields should be present:
```javascript 
`Host`: <host_name_of_email_server>
`Protocol`: SMTP (predefined)
`Default sender name`: (optional)
`Port`: <port_number>
`Authorization`: OFF/ON 
`Username`: <user_email_address>
`Password`: <user_email_password>
'TLS' or 'SSL': should be checked depends on the selected port.
```

Example of email server configuration for Gmail email server (detailed info could be found [here](https://support.google.com/a/answer/176600?hl=en))

```javascript
`Host`: smtp.gmail.com
`Protocol`: SMTP
`Default sender name`: Report Portal
`Port`: 465
`Authorization: ON
`Username`: <user_email_address>
`Password`: <user_email_password>
`SSL`: checkbox should be checked.
```

Example of an email server configuration for a Yandex email server (detailed info can be found [here](https://yandex.com/support/mail-new/mail-clients.html))
 
```javascript
Host: smtp.yandex.com
`Protocol`: SMTP
`Default sender name`: Report Portal
`Port`: 465
`Authorization`: ON
`Username`: <user_email_address>
`Password`: <user_email_password>
`SSL`: checkbox should be checked.
```

8. Confirm data in the form

After E-mail server integration adding, the configuration will be applied to all projects on the instance.

>**Note:** In case you unlink your project settings from Global settings, for the chosen project


## Sauce Labs integration

### Add Sauce Labs integrations

Configure integration with Sauce Labs and watch a video of test executions right in the ReportPortal application. 


**Permissions:** 

user with account role *ADMINISTRATOR* can configure integration for the whole instance or per project.
User with account role *PROJECT MANAGER* can configure integration only on a project where he is assigned on as Project Manager.

### Global Sauce Labs integration

To configure Sauce Labs for the whole instance:

1. Login to the ReportPortal as an ADMIN user

2. Then open the list on the right of the user's image.

3. Click the 'Administrative' link 

4. Click the 'Plugins' from the left-hand sidebar

5. Click on the'Sauce Labs' tab.

6. Click on Add new integration

7. The next fields should be present:

```javascript 
`User name`: <host_name_of_email_server>
`Access token`: <youe access token>
`Data center`: <Europe, USA>
```

8. Confirm data in the form

After Sauce Labs integration adding, you can use Sauce Labs integration.


### How to use Sauce Labs Integration

Before using this feature a user should report test results to ReportPortal with the attribute:`SLID: XXXXXXXX`.

Where SLID - `Sauce Labs ID`

XXXXXXXX - `# of job in Sauce Labs`

By the attribute `SLID: XXXXXXXX` you link the execution in ReportPortal and a job in Sauce Labs.

So that if a test item has an attribute `SLID: XXXXXXXX`, and there is a global or project integration with Sauce Labs, a user will be able to view a video from Sauce Labs from the appropriate job in ReportPortal on a log view. 

[ ![Sauce Labs configuration](Images/userGuide/gettingStarted/Sauce Labs.png) ](https://youtu.be/RQAxGz6koh0)



 
## Active Directory Auth integration
 
To set up access with Active Directory:

1. Login to the ReportPortal as an ADMIN user

2. Then open the list on the right of the user's image.

3. Click the 'Administrative' link 

4. Click the 'Plugins' from the left-hand sidebar

5. Click on the'Activate Directory' tab.

6. Click on Add new integration

7. The next fields should be present:

```javascript 
'Domain*': text
'URL*': text
'Base DN*': text
'Email attribute*': text
'Full name attribute' : text
'Photo attribute' : text
  ```

Mandatory fields are marked with red. 
Click the 'Submit' button.
All users of Active Directory will have access to the ReportPortal instance.  
For entrance to ReportPortal, the user should use their domain credentials (Login and password).


## LDAP Auth integration 
To set up access with LDAP:

1. Login to the ReportPortal as an ADMIN user

2. Then open the list on the right of the user's image.

3. Click the 'Administrative' link 

4. Click the 'Plugins' from the left-hand sidebar

5. Click on the'LDAP' tab.

6. Click on Add new integration

7. The next fields should be present:

```javascript 
'URL*': text
'Base DN*': text
'Manager DN': text
'Manager password': text
'User DN pattern': text
'User search filter': text
'Group search base': text
'Group search filter': text
'Password encoder type': text
'Email attribute*': text
'Full name attribute' : text
'Photo attribute' : text
```

Mandatory fields are marked with red. 
Click the 'Submit' button.
All users of LDAP will have access to the ReportPortal instance. For access to the ReportPortal, the user should use their domain credentials (Login and password).
