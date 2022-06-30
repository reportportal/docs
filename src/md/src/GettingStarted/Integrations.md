## Integrations

Users can reinforce ReportPortal with adding additional integrtions with:

[ ![Integrations](Images/userGuide/gettingStarted/Integrations.png) ](Images/userGuide/gettingStarted/Integrations.png)

* [Jira Server](https://reportportal.io/docs/Jira-Server-Integration)
* [Jira Cloud](https://reportportal.io/docs/Jira-Cloud-Integration)
* [Rally](https://reportportal.io/docs/Rally-Integration)
* [Azure DevOps](https://reportportal.io/docs/Azure-DevOps-BTS)
* [Sauce Labs](https://reportportal.io/docs/Sauce-Labs-integration)
* [E-mail server](https://reportportal.io/docs/E-mail-server-integration)
* [LDAP](https://reportportal.io/docs/LDAP-Auth-integration)
* [Active Directory](https://reportportal.io/docs/Active-Directory-Auth)
* [Okta SAML](https://reportportal.io/docs/Okta-SAML-integration)
* [Azure SAML](https://reportportal.io/docs/Azure-SAML-Integration)

If you want to integrate ReportPortal with these external systems, and you can not find a needed tab on the Project Settings, please check the section in documentation [Plugins](https://reportportal.io/docs/Plugins).

Integration configurations can be added on the global level (for all projects on the instance) in the Administrate section or the project level (only for one project) on Project Settings.

If you have another configuration than other projects have or you want to integrate only your project with an external system, you should perform the next actions:

1. Log in to ReportPortal as PROJECT MANAGER or ADMIN

2. Go to Project settings > Integrations

3. Click on one of the integration panels

4. And click the button "Unlink and setup manually"

By this action, you unlink the current project from the global settings and configure your integration.

[ ![Unlink Global Jira Integration](Images/userGuide/gettingStarted/Unlink Global Integration.png) ](mages/userGuide/gettingStarted/Unlink Global Integration.png)


>**Note:**
> If you unlink project setting and ADMIN changes global settings for the whole instance, your project will use your project settings.

To return global settings, you need to click a button "Reset to global settings".
In this case, your settings will be deleted, and integration will use global settings.

You can always reset to the global settings.

## Jira Server Integration 

For Jira Server plugin installation please check [documentation](https://reportportal.io/docs/Plugins%3Eupload-plugin)

Integration with the JIRA Server can be required for projects that collect defects in a separate tracking tool. The integration provides an exchange of information between ReportPortal and the JIRA Server, such as posting issues and linking issues, getting updates on their statuses. 

**Permission:** 

The *Administrator* can upload a plugin and create global integrations on the Plugin tab in the Administrate section. Also, the Administrator can unlink project configurations from global. 
The *Project Manager* can work only on the project level. He can unlink and re-write global configuration with project ones on Project Settings > Integrations.


### Global JIRA Server integration

#### Add new global Jira Server integration

If all projects on your instance are using the same Jira projects, you will be able to configure **global integrations** which will be applied on all projects. 

1. Log in as ADMIN

2. Go to Administrative > Plugins

3. Click on JIRA Server plugin panel

4. Click on "Add integration" button

5. Fill and confirm the authorization form

```javascript
'Integration Name': <The name which you want to give to your integration> - should be unique
'Link to BTS': <valid URL of bug tracking system>
'Project key in BTS': <project key in bug tracking system>            
'Authorization Type': Basic (predefined)                  
'BTS Username': <JIRA user name>                  
'BTS Password': <JIRA user password>
```

After you have created a connection with the JIRA project, you can choose predefined JIRA ticket fields. These fields will be shown to you all the time when you post the issue in Jira.

This feature gives you the ability to choose which type you will post a ticket.

To choose a needed issue type and predefined field for the chosen issue, you should perform the following actions:

1. Click on "Configure" button

2. Choose issue type from the drop-down

3. Check the needed fields and fill them in if necessary

4. Click on "Submit" button


Now team members on all your projects will be able to submit issues in Jira. Options for Post Issue / Link issue are activated.

[ ![Global Jira Integration Creation](Images/userGuide/gettingStarted/JiraGlobal.png) ](https://youtu.be/tCRh30KDpKc)

You can add more integrations by clicking on "Add integration" button.

User can add several integrations, but with a different name to the **one JIRA project**.


>**Use case:**
>
> **Situation:** User wants to post to JIRA Server issues with type **Defect** and **Task** to the project NNN-MMM in Jira. Is it possible?
> Yes!
>
> **Solution:** Add two integrations to the project NNN-MMM in Jira with names f.e. "Project -1" and "Project -2". 
> Add to the "Project -1" issue type **Defect** and for "Project -2" - issue type **Task**.
> While posing issue procedure, choose integration with needed type.
>
> [ ![UseCaseWithTwoIntegrations](Images/userGuide/gettingStarted/JiraProject.png) ](https://youtu.be/med4tuL4plU)


#### Update global Jira Server integration

If you need to edit Jira Server integration authorization parameters, please perform actions:

1. Log in as ADMIN

2. Go to Administrative > Plugins

3. Click on JIRA Server plugin panel

4. Click on a tab with existing integration

5. Click on "Edit authorization" link

6. Change "Integration name"

7. Type your Jira Server credentials

8. Submit the form

>**Note:** 
>
> You can edit the "Integration name" only. If you need other changes, please submit new integration.


If you need to edit fields which should be posted in Jira Server, please perform actions:

1. Log in as ADMIN

2. Go to Administrative > Plugins

3. Click on JIRA Server plugin panel

4. Click on a tab with existing integration

5. Click on "Configure" button

6. Choose issue type from the drop-down

7. Check the needed fields and fill them in if necessary

8. Click on "Submit" button


[ ![Edit Global Jira Integration](Images/userGuide/gettingStarted/JiraGlobal.png) ](https://youtu.be/yvYwxs4zTYA)


#### Remove global Jira Server integration

If you need to remove Jira Server integration, please perform actions:

1. Log in as ADMIN

2. Go to Administrative > Plugins

3. Click on JIRA Server plugin panel

4. Click on a tab with existing integration

5. Click on "Remove integration"

6. Submit the action

[ ![Remove Global Jira Integration](Images/userGuide/gettingStarted/JiraGlobal.png) ](https://youtu.be/mEWP4txdJFA)


### Project JIRA Server integration

#### Add new project Jira Server integration

If any project needs different Jira Server configurations, you should unlink a project from Global configurations and add a project configuration. It means that now when a new global integration is added to the ReportPortal, it won't be applied to the unlinked project. 

For that,

1. Log in as an ADMIN or Project Manager

2. Go to Project Settings > Integrations

3. Click on the JIRA Server integration panel

4. Click on "Unlink and setup manually" button

5. Fill and confirm the authorization form

```javascript
'Integration Name': <The name which you want to give to your integration> - should be unique
'Link to BTS': <valid URL of bug tracking system>
'Project key in BTS': <project key in bug tracking system>            
'Authorization Type': Basic (predefined)                  
'BTS Username': <JIRA user name>                  
'BTS Password': <JIRA user password>
```

After you have created a connection with the JIRA project, you can choose predefined JIRA ticket fields. These fields will be shown to you all the time when you post the issue in Jira.

This feature gives you the ability to choose which type you will post a ticket.

To choose a needed issue type and predefined field for the chosen issue, you should perform the following actions:

1. Click on "Configure" button

2. Choose issue type from the drop-down

3. Check the needed fields and fill them in if necessary

4. Click on "Submit" button


Now team members on **this project** will be able to submit issues in Jira. Options for Post Issue / Link issue are activated.

You can add more integrations by clicking on "Add integration" button.

[ ![ProjectJiraIntegration](Images/userGuide/gettingStarted/JiraProject.png) ](https://youtu.be/tCRh30KDpKc)

#### Reset to project Jira Server Integrations

If you want to delete project integrations with Jira Server and link your project with global configurations, please perform actions described below:

1. Log in as an ADMIN or Project Manager

2. Go to Project Settings > Integrations

3. Click on the JIRA Server integration panel

4. Click on "Reset to global settings" button

5. Confirm the action

[ ![Reset to Global Jira Integration](Images/userGuide/gettingStarted/JiraGlobal.png) ](https://youtu.be/KIrEVY-DKiA)


### Some tricks when you create a new connection:

1. Verify that the link to the JIRA Server system is correct. There are several possible variants are possible, for instance: https://jira.company.com/jira https://jiraeu.company.com

2. Verify the project key in JIRA Server is correct. Please fill in the Project key field with project key-value, e.g. project ABC-DEF has key ABCDEF.

3. Verify the username and password data. Make sure, that the login name and not the email are in the username field. In case all the data above is correct, but the error appears again, check whether the user's credentials to JIRA Server are not expired. As far as JIRA Server sends the request in HTML format, we are not able to display the real reason for the error. To check and/or resolve the issue, please do the next steps:

   *    Open JIRA Server page
   *    Log in to JIRA Server with domain credentials using basic authorization (i.e., fill in user's login name and password into the fields)
   *    Submit the login form Screen with CAPTCHA should appear
   *    Enter the symbols
   *    Submit the credentials again
   *    Now try to establish the connection to JIRA Server on the ReportPortal project.

4. SSL instance of JIRA (even cloud version) can be accessed by JIRA API token, used instead of a password.
After you have connected Jira and ReportPortal, you can choose an issue type that you will be able to add to Jira during the “Post Issue” operation.  Also, the user can add predefined fields that the user can fill.

### Post issue to Jira Server

Posting an issue to Jira Server means to create a new issue in Jira from ReportPortal and upload logs and attachments from an execution.

If you want to post a new issue to Jira, you need to have a project or global integration with Jira Server. 

[ ![Post issue](Images/userGuide/gettingStarted/Post issue.png) ](Images/userGuide/gettingStarted/Post issue.png)

Post issue via Step view

1. Log in to ReportPortal as Admin, PM, Member, Customer or Operator

2. Go to a Step view

3. Choose a needed item

4. Click on "Actions" button

5. Choose "Post issue" option

6. Fill in the "Post issue" form with valid data

```javascript
`BTS`: if you have configured BTS integrations, you will be able to choose between them
`Integration name`: from the drop-down, you can choose any of integrations for chosen earlier BTS
`Predefined fields`: fields which you choose on Project Settings/ or Plugins
`Included data`: which data should be posted to BTS (attachments, logs, comments)
`BTS username`: reporter login in Jira Server
`BTS password`: reporter password in Jira Server
```

7. Submit the form

8. A new issue will be posted in BTS with information from ReportPortal

9. A label with issue ID will be added to the test item


### Link an issue with an issue in Jira Server

Linking an issue with an issue in Jira Server means adding a clickable link to an existing issue in Jira from ReportPortal that will show a status of this issue. 

[ ![Link issue](Images/userGuide/gettingStarted/Link issue.png) ](Images/userGuide/gettingStarted/Link issue.png)

Link issue via Step view

1. Log in to ReportPortal as Admin, PM, Member, Customer or Operator

2. Go to a Step view

3. Choose a needed item

4. Click on "Actions" button

5. Choose "Link issue" option

6. Fill in the "Link issue" form with valid data

```javascript
`BTS`: if you have configured BTS integrations, you will be able to choose between them
`Integration name`: from the drop-down, you can choose any of integrations for chosen earlier BTS
`Link to issue`: a full link to the item in BTS
`Issue ID`: information which will be displayed on the label in ReportPortal
```

7. Submit the form

8. A label with issue ID will be added to the test item

## Jira Cloud Integration

For Jira Cloud plugin installation please check [documentation](https://reportportal.io/docs/Plugins%3Eupload-plugin)

Integration with the JIRA Cloud can be required for projects that collect defects in a separate tracking tool. The integration provides an exchange of information between ReportPortal and the JIRA Cloud, such as posting issues and linking issues, getting updates on their statuses.


### Global JIRA Cloud integration

#### Add new global Jira Cloud integration

If all projects on your instance are using the same Jira projects, you will be able to configure **global integrations** which will be applied on all projects.

1. Log in as ADMIN

2. Go to Administrative > Plugins

3. Click on JIRA Cloud plugin panel

4. Click on "Add integration" button

5. Fill and confirm the authorization form

```javascript
'Integration Name': <The name which you want to give to your integration> - should be unique
'Link to BTS': <valid URL of bug tracking system>
'Project key in BTS': <project key in bug tracking system>                     
'Email': <user email>
'API Token': <user API Token>
```

After you have created a connection with the JIRA project, you can choose predefined JIRA ticket fields. These fields will be shown to you all the time when you post the issue in Jira Cloud.

This feature gives you the ability to choose which type you will post a ticket.

To choose a needed issue type and predefined field for the chosen issue, you should perform the following actions:

1. Click on "Configure" button

2. Choose issue type from the drop-down

3. Check the needed fields and fill them in if necessary

4. Click on "Submit" button


Now team members on all your projects will be able to submit issues in Jira Cloud. Options for Post Issue / Link issue are activated.

[ ![Global Jira Integration Creation](Images/userGuide/gettingStarted/JiraCloudIntegrationCreation.png) ](Images/userGuide/gettingStarted/JiraCloudIntegrationCreation.png)

You can add more integrations by clicking on "Add integration" button.

User can add several integrations, but with a different name to the **one JIRA project**.


>**Use case:**
>
> **Situation:** User wants to post to JIRA Cloud issues with type **Defect** and **Task** to the project NNN-MMM in Jira. Is it possible?
> Yes!
>
> **Solution:** Add two integrations to the project NNN-MMM in Jira with names f.e. "Project -1" and "Project -2".
> Add to the "Project -1" issue type **Defect** and for "Project -2" - issue type **Task**.
> While posing issue procedure, choose integration with needed type.


#### Update global Jira Cloud integration

If you need to edit Jira Cloud integration authorization parameters, please perform actions:

1. Log in as ADMIN

2. Go to Administrative > Plugins

3. Click on JIRA Cloud plugin panel

4. Click on a tab with existing integration

5. Click on "Edit authorization" link

6. Change "Integration name"

7. Submit the form

>**Note:**
>
> You can edit the "Integration name" only. If you need other changes, please submit new integration.


If you need to edit fields which should be posted in Jira Cloud, please perform actions:

1. Log in as ADMIN

2. Go to Administrative > Plugins

3. Click on JIRA Cloud plugin panel

4. Click on a tab with existing integration

5. Click on "Configure" button

6. Choose issue type from the drop-down

7. Check the needed fields and fill them in if necessary

8. Click on "Submit" button


#### Remove global Jira Cloud integration

If you need to remove Jira Cloud integration, please perform actions:

1. Log in as ADMIN

2. Go to Administrative > Plugins

3. Click on JIRA Cloud plugin panel

4. Click on a tab with existing integration

5. Click on "Remove integration"

6. Submit the action


### Project JIRA Cloud integration

#### Add new project Jira Cloud integration

If any project needs different Jira Cloud configurations, you should unlink a project from Global configurations and add a project configuration. It means that now when a new global integration is added to the ReportPortal, it won't be applied to the unlinked project.

For that,

1. Log in as an ADMIN or Project Manager

2. Go to Project Settings > Integrations

3. Click on the JIRA Cloud integration panel

4. Click on "Unlink and setup manually" button

5. Fill and confirm the authorization form

```javascript
'Integration Name': <The name which you want to give to your integration> - should be unique
'Link to BTS': <valid URL of bug tracking system>
'Project key in BTS': <project key in bug tracking system>
'Email': <user email>
'API Token': <user API Token>
```

After you have created a connection with the JIRA project, you can choose predefined JIRA ticket fields. These fields will be shown to you all the time when you post the issue in Jira Cloud.

This feature gives you the ability to choose which type you will post a ticket.

To choose a needed issue type and predefined field for the chosen issue, you should perform the following actions:

1. Click on "Configure" button

2. Choose issue type from the drop-down

3. Check the needed fields and fill them in if necessary

4. Click on "Submit" button


Now team members on **this project** will be able to submit issues in Jira Cloud. Options for Post Issue / Link issue are activated.

You can add more integrations by clicking on "Add integration" button.

#### Reset to project Jira Cloud Integrations

If you want to delete project integrations with Jira Cloud and link your project with global configurations, please perform actions described below:

1. Log in as an ADMIN or Project Manager

2. Go to Project Settings > Integrations

3. Click on the JIRA Cloud integration panel

4. Click on "Reset to global settings" button

5. Confirm the action

### Post issue to Jira Cloud

Posting an issue to Jira Cloud means to create a new issue in Jira from ReportPortal and upload logs and attachments from an execution.

If you want to post a new issue to Jira, you need to have a project or global integration with Jira Cloud.

[ ![Post issue](Images/userGuide/gettingStarted/PostIssueJiraCloud.png) ](Images/userGuide/gettingStarted/PostIssueJiraCloud.png)

Post issue via Step view

1. Log in to ReportPortal as Admin, PM, Member, Customer or Operator

2. Go to a Step view

3. Choose a needed item

4. Click on "Actions" button

5. Choose "Post issue" option

6. Fill in the "Post issue" form with valid data

```javascript
`BTS`: if you have configured BTS integrations, you will be able to choose between them
`Integration name`: from the drop-down, you can choose any of integrations for chosen earlier BTS
`Predefined fields`: fields which you choose on Project Settings/ or Plugins
`Included data`: which data should be posted to BTS (attachments, logs, comments)
```

7. Submit the form

8. A new issue will be posted in BTS with information from ReportPortal

9. A label with issue ID will be added to the test item


### Link an issue with an issue in Jira Cloud

Linking an issue with an issue in Jira Cloud means adding a clickable link to an existing issue in Jira from ReportPortal that will show a status of this issue.

[ ![Link issue](Images/userGuide/gettingStarted/LinkIssueJiraCloud.png) ](Images/userGuide/gettingStarted/LinkIssueJiraCloud.png)

Link issue via Step view

1. Log in to ReportPortal as Admin, PM, Member, Customer or Operator

2. Go to a Step view

3. Choose a needed item

4. Click on "Actions" button

5. Choose "Link issue" option

6. Fill in the "Link issue" form with valid data

```javascript
`BTS`: if you have configured BTS integrations, you will be able to choose between them
`Integration name`: from the drop-down, you can choose any of integrations for chosen earlier BTS
`Link to issue`: a full link to the item in BTS
`Issue ID`: information which will be displayed on the label in ReportPortal
```

7. Submit the form

8. A label with issue ID will be added to the test item

## Rally Integration 

For Rally plugin installation please check [documentation](https://reportportal.io/docs/Plugins%3Eupload-plugin)

### Global RALLY integration

#### Add new global RALLY integration

If all projects on your instance are using the same RALLY  projects, you will be able to configure **global integrations** which will be applied on all projects. 

1. Log in as ADMIN

2. Go to Administrative > Plugins

3. Click on RALLY plugin panel

4. Click on "Add integration" button

5. Fill and confirm the authorization form

```javascript
'Integration Name': <The name which you want to give to your integration> - should be unique
'Link to BTS': <valid URL of bug tracking system>
'Project ID in BTS': <project ID in bug tracking system>
'Authorization Type': ApiKey (predefined)
'ApiKey': <RALLY user apikey>
```

After you have created a connection with the RALLY project, you can choose predefined RALLY ticket fields. These fields will be shown to you all the time when you post the issue in the RALLY.

This feature gives you the ability to choose which type you will post a ticket.

To choose a needed issue type and predefined field for the chosen issue, you should perform the following actions:

1. Click on "Configure" button

2. Choose issue type from the drop-down

3. Check the needed fields and fill them in if necessary

4. Click on "Submit" button


Now team members on all your projects will be able to submit issues in RALLY. Options for Post Issue / Link issue are activated.

You can add more integrations by clicking on "Add integration"

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

1. Log in as ADMIN

2. Go to Administrative > Plugins

3. Click on RALLY plugin panel

4. Click on a tab with existing integration

5. Click on "Edit authorization" link

6. Change "Integration name"

7. Type your RALLY credentials

8. Submit the form

>**Note:** 
>
>you can edit only "Integration name". If you need other changes, please submit new integration.


If you need to edit fields which should be posted in RALLY, please perform actions:

1. Log in as ADMIN

2. Go to Administrative > Plugins

3. Click on RALLY plugin panel

4. Click on a tab with existing integration

5. Click on "Configure" button

6. Choose issue type from the drop-down

7. Check the needed fields and fill them in if necessary

8. Click on "Submit" button


#### Remove global RALLY integration

If you need to remove RALLY integration, please perform actions:

1. Log in as ADMIN

2. Go to Administrative > Plugins

3. Click on RALLY plugin panel

4. Click on a tab with existing integration

5. Click on "Remove integration"

6. Submit the action

### Project RALLY integration

#### Add new project RALLY integration

If any project needs different RALLY configurations, you should unlink a project from Global configurations and add a project configuration. It means that now when a new global integration is added to the ReportPortal, it won't be applied to the unlinked project. 

For that,

1. Log in as an ADMIN or Project Manager

2. Go to Project Settings > Integrations

3. Click on the RALLY integration panel

4. Click on "Unlink and setup manually" button

5. Fill and confirm the authorization form

```javascript
'Integration Name ': <The name which you want to give to your integration> - should be unique
'Link to BTS': <valid URL of bug tracking system>
'Project ID in BTS': <project ID in bug tracking system>            
'Authorization Type': Basic (predefined)                  
'BTS Username': <RALLY user name>                  
'BTS Password': <RALLY user password>
```

After you have created a connection with the RALLY project, you can choose predefined RALLY ticket fields. These fields will be shown to you all the time when you post the issue in the RALLY.

This feature gives you the ability to choose which type you will post a ticket with.

To choose a needed issue type and predefined field for the chosen issue, you should perform the following actions:

1. Click on "Configure" button

2. Choose issue type from the drop-down

3. Check the needed fields and fill them in if necessary

4. Click on "Submit" button


Now team members on **this project** will be able to submit issues in RALLY. Options for Post Issue / Link issue are activated.

You can add more integrations by clicking on "Add integration" button.

#### Reset to project RALLY Integrations

If you want to delete project integrations with RALLY and link your project with global configurations, please perform actions described below:

1. Log in as an ADMIN or Project Manager

2. Go to Project Settings > Integrations

3. Click on the RALLY integration panel

4. Click on "Reset to global settings" button

5. Confirm the action

### Post issue to Rally

Posting an issue to Rally means to create a new issue in Rally from ReportPortal and upload logs and attachments from an execution.

If you want to post a new issue to Rally, you need to have a project or global integration with Rally. 

[ ![Post issue](Images/userGuide/gettingStarted/PostIssueRally.png) ](Images/userGuide/gettingStarted/PostIssueRally.png)

Post issue via Step view

1. Log in to ReportPortal as Admin, PM, Member, Customer or Operator

2. Go to a Step view

3. Choose a needed item

4. Click on "Actions" button

5. Choose "Post issue" option

6. Fill in the "Post issue" form with valid data

```javascript
`BTS`: if you have configured BTS integrations, you will be able to choose between them
`Integration name`: from the drop-down, you can choose any of integrations for chosen earlier BTS
`Predefined fields`: fields which you choose on Project Settings/ or Plugins
`Included data`: which data should be posted to BTS (attachments, logs, comments)
`ApiKey`: user apikey
```

7. Submit the form

8. A new issue will be posted in BTS with information from ReportPortal

9. A label with issue ID will be added to the test item

### Link an issue with an issue in Rally

Linking an issue with an issue in Rally means adding a clickable link to an existing issue in Rally from ReportPortal that will show a status of this issue. 

[ ![Link issue](Images/userGuide/gettingStarted/LinkIssueRally.png) ](Images/userGuide/gettingStarted/LinkIssueRally.png)

Link issue via Step view

1. Log in to ReportPortal as Admin, PM, Member, Customer or Operator

2. Go to a Step view

3. Choose a needed item

4. Click on "Actions" button

5. Choose "Link issue" option

6. Fill in the "Link issue" form with valid data

```javascript
`BTS`: if you have configured BTS integrations, you will be able to choose between them
`Integration name`: from the drop-down, you can choose any of integrations for chosen earlier BTS
`Link to issue`: a full link to the item in BTS
`Issue ID`: information which will be displayed on the label in ReportPortal
```

7. Submit the form

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

1. Log in to the ReportPortal as an ADMIN user

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

1. Log in to the ReportPortal as an ADMIN or PM user
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

**A possibility to provide custom host in links** (started from 5.4 version)

You can make this operation via API. 
For that just choose an API call Integration controller - Update project integration instance, and provide a link to your host in the field  ' "rpHost": "custom_link.com" '' 

```javascript
PUT/v1/integration/{projectName}/{integrationId}

{
 "enabled": true,
 "integrationParameters": {
 "protocol": "smtp",
 "rpHost": "custom_link.com",
 "authEnabled": true,
 "port": "",
 "sslEnabled": false,
 "starTlsEnabled": true,
 "host": "smtp.com",
 "username": ""
 }
}
```

## Sauce Labs integration

For SauceLAbs plugin installation please check [documentation](https://reportportal.io/docs/Plugins%3Eupload-plugin)

### Add Sauce Labs integrations

Configure integration with Sauce Labs and watch a video of test executions right in the ReportPortal application. 


**Permissions:** 

user with account role *ADMINISTRATOR* can configure integration for the whole instance or per project.
User with account role *PROJECT MANAGER* can configure integration only on a project where he is assigned on as Project Manager.

### Global Sauce Labs integration

To configure Sauce Labs for the whole instance:

1. Log in to the ReportPortal as an ADMIN user

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

1. Log in to the ReportPortal as an ADMIN user

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
'UserSearchFilter' (the same as for LDAP): text 
  ```

Mandatory fields are marked with red. 
Click the 'Submit' button.
All users of Active Directory will have access to the ReportPortal instance.  
For entrance to ReportPortal, the user should use their domain credentials (Login and password).



Please find the example with configurations for Microsoft Active Directory that worked successfully provided by our user:

**Table with properties and values for LDAP Microsoft Active Directory**

|          Property         |                                                          Value                                                          |
|:---------------------:|:----------------------------------------------------------------------------------------------------------------------:|
| Url                   | auth-servers.domain.org.int:3358                                                                                       |
| Base DN               | OU=MAIN,DC=DOMAIN,DC=ORG,DC=INT                                                                                        |
| Manager DN            | cn=Service UserBind,ou=Service Accounts,ou=Colombia,ou=America,ou=ServiceAccounts,dc=DOMAIN,dc=ORG,dc=INT              |
| User search filter    | (&(objectClass=user)(sAMAccountName={0})) |
| Password encoder type | NO                                                                                                                     |
| Email attribute       | mail                                                                                                                   |
| Full name attribute   | displayName                                                                                                            |
| Photo attribute       | thumbnailPhoto                                                                                                         |


## LDAP Auth integration 
To set up access with LDAP:

1. Log in to the ReportPortal as an ADMIN user

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


## Okta SAML integration

[ ![SAML configuration](Images/userGuide/SAML.png) ](https://youtu.be/ljXvCVWG4mQ) 

To set up access with SAML:

1. Log in to the ReportPortal as an ADMIN user

2. Then open the list on the right of the user's image.

3. Click the 'Administrative' link 

4. Click the 'Plugins' from the left-hand sidebar

5. Click on the'SAML' tab.

6. Click on Add new integration

7. The next fields should be present:

```javascript 
'Identity provider name ID*': text
'Provider name*': text
'Metadata URL*': URL
'RP callback URL': URL - RP host/uat
'Email attribute*': text
'Name attributes mode' : 
'Last name attribute' text
'First name attribute' text
or
'Full name attribute' : text
  ```

Mandatory fields are marked with red. 
Click the 'Submit' button.
All users of SAML will have access to the ReportPortal instance.  
Just click on the button 'Login with SAML' and choose a needed integration from the drop-down


On Octa side you should to specify SSO url. The format for url is the next:
```java
https://your domain adress/uat/saml/sp/SSO/alias/report-portal-sp
```

“RP callback URL” field is an optional field to provide a redirect base path right in SAML integration settings. Fill in the field in format “RP host/uat” (e.g. "https://reportportal.com/uat"). Once you have submitted an integration with “RP callback URL”, the URL will be applied to all SAML integrations. 

## Azure SAML Integration

Login to ReportPortal via Azure SAML is available starting from version 5.7 (SAML Okta was implemented in versions before 5.7).

Azure SAML is a useful authorization method for big companies with 100+ employees, especially if this organization is already presented in Azure service. The main benefit here is no need for manual account creation. Users can log in to the ReportPortal using Azure SAML in an uncomplicated way: select login with SAML, then choose Azure, and upon login users’ data is synchronized with ReportPortal automatically.

If your organization is using Azure SAML and some employees left, there is no need to remove their accounts from ReportPortal and from other Azure applications – just clearing their accounts in Azure will be enough.

To configure authorization via Azure SAML we need to synchronize Azure and ReportPortal.

Firstly, configure SAML on Azure side.

1) Log in to [Azure portal](https://portal.azure.com) using your organization creds.

2) Click ```App Services```.

[ ![ImageName](Images/Plugins/AzureSAML/2022-05-30_19h14_42.png) ](Images/Plugins/AzureSAML/2022-05-30_19h14_42.png)

3) Click ```View``` in the ```Manage Azure Active Directory``` section.

[ ![ImageName](Images/Plugins/AzureSAML/2022-05-30_19h15_26.png) ](Images/Plugins/AzureSAML/2022-05-30_19h15_26.png)

4) Click ```Manage Tenants```.

[ ![ImageName](Images/Plugins/AzureSAML/2022-05-31_19h46_20.png) ](Images/Plugins/AzureSAML/2022-05-31_19h46_20.png)

5) If you haven’t configured organization in Azure yet, click ```Create```.

>**NOTE:** if you have configured organization in Azure, please, go to step 9.

[ ![ImageName](Images/Plugins/AzureSAML/2022-05-30_19h22_45.png) ](Images/Plugins/AzureSAML/2022-05-30_19h22_45.png)

6) Select a tenant type (```Azure Active Directory```) and click ```Next: Configuration >``` button.

[ ![ImageName](Images/Plugins/AzureSAML/2022-05-30_19h24_56.png) ](Images/Plugins/AzureSAML/2022-05-30_19h24_56.png)

7) Fill in the necessary fields and click ```Next: Review + create >``` button.

[ ![ImageName](Images/Plugins/AzureSAML/2022-05-30_19h32_38.png) ](Images/Plugins/AzureSAML/2022-05-30_19h32_38.png)

8) Pass the Captcha verification and click the ```Create``` button.

[ ![ImageName](Images/Plugins/AzureSAML/2022-05-30_19h33_55.png) ](Images/Plugins/AzureSAML/2022-05-30_19h33_55.png)

9) After the creation of an organization go to the ```Enterprise Applications``` section.

[ ![ImageName](Images/Plugins/AzureSAML/2022-05-30_19h54_48.png) ](Images/Plugins/AzureSAML/2022-05-30_19h54_48.png)

10) Click ```New application```.

[ ![ImageName](Images/Plugins/AzureSAML/2022-05-30_19h55_05.png) ](Images/Plugins/AzureSAML/2022-05-30_19h55_05.png)

11) Click ```Create your own application```.

[ ![ImageName](Images/Plugins/AzureSAML/2022-05-30_19h56_44.png) ](Images/Plugins/AzureSAML/2022-05-30_19h56_44.png)

12) Enter the name of your application, choose ```Integrate any other application you don't find in the gallery (Non-gallery)``` bullet and click ```Create``` button.

[ ![ImageName](Images/Plugins/AzureSAML/2022-05-30_19h59_42.png) ](Images/Plugins/AzureSAML/2022-05-30_19h59_42.png)

13) Assign users (e.g., yourself) to this application. Please, follow the next screenshots:

[ ![ImageName](Images/Plugins/AzureSAML/2022-05-30_20h00_36.png) ](Images/Plugins/AzureSAML/2022-05-30_20h00_36.png)

[ ![ImageName](Images/Plugins/AzureSAML/2022-05-30_20h00_47.png) ](Images/Plugins/AzureSAML/2022-05-30_20h00_47.png)

[ ![ImageName](Images/Plugins/AzureSAML/2022-05-30_20h01_01renamed.png) ](Images/Plugins/AzureSAML/2022-05-30_20h01_01renamed.png)

14) Go to the ```Single sign-on``` section.

[ ![ImageName](Images/Plugins/AzureSAML/2022-05-30_20h01_28renamed.png) ](Images/Plugins/AzureSAML/2022-05-30_20h01_28renamed.png)

15) Choose SAML.

[ ![ImageName](Images/Plugins/AzureSAML/2022-05-31_11h10_19.png) ](Images/Plugins/AzureSAML/2022-05-31_11h10_19.png)

16) Configure ```Basic SAML Configuration``` settings as follows:

[ ![ImageName](Images/Plugins/AzureSAML/2022-05-31_11h00_41.png) ](Images/Plugins/AzureSAML/2022-05-31_11h00_41.png)

17) Edit ```Attributes & Claims``` settings and add ***email***, ***firstName*** and ***lastName*** attributes (default Azure attributes have ugly format). Please follow the next screenshots:

[ ![ImageName](Images/Plugins/AzureSAML/2022-05-31_11h27_22.png) ](Images/Plugins/AzureSAML/2022-05-31_11h27_22.png)

[ ![ImageName](Images/Plugins/AzureSAML/2022-05-31_11h27_30.png) ](Images/Plugins/AzureSAML/2022-05-31_11h27_30.png)

[ ![ImageName](Images/Plugins/AzureSAML/2022-05-31_11h30_30.png) ](Images/Plugins/AzureSAML/2022-05-31_11h30_30.png)

SAML configuration is completed on Azure side after adding these attributes.

Lastly, configure SAML on ReportPortal side.

1) Log in to **ReportPortal** as Admin.

2) Open Menu at the bottom and choose ```Administrate``` section.

[ ![ImageName](Images/Plugins/AzureSAML/2022-05-31_13h28_02.png) ](Images/Plugins/AzureSAML/2022-05-31_13h28_02.png)

3) Select ```Plugins```.

[ ![ImageName](Images/Plugins/AzureSAML/2022-05-31_13h28_21.png) ](Images/Plugins/AzureSAML/2022-05-31_13h28_21.png)

4) Open ```SAML```.

[ ![ImageName](Images/Plugins/AzureSAML/2022-05-31_13h28_26.png) ](Images/Plugins/AzureSAML/2022-05-31_13h28_26.png)

5) Click the ```Add integration``` button.

[ ![ImageName](Images/Plugins/AzureSAML/2022-05-31_14h37_51.png) ](Images/Plugins/AzureSAML/2022-05-31_14h37_51.png)

6) Synchronize Azure SAML and ReportPortal as follows:

[ ![ImageName](Images/Plugins/AzureSAML/SAML-integration.png) ](Images/Plugins/AzureSAML/SAML-integration.png)

Finally, you can log in to ReportPortal using Azure SAML.

## GitHub Authorization

To setup access with GitHub auth:
1. Log in to the ReportPortal as an ADMIN user
2. Open the list on the right of the user's image.
3. Click the 'Administrative' link 
4. Click the 'Server Settings' from the left-hand sidebar
5. Go to the 'Authorization Configuration' tab
6. Then change the switcher position of 'Activate GitHub Authorization' to ON
7. The Next fields should appear:

```javascript 
  'Client ID': <value_of_clientId>
  'Client Secret': <value_of_clientSecret>
  'Add GitHub Organization' button-link: (optional)
 ```

Note, in case the 'Organization Name' is not added, all GitHub users will have access to the ReportPortal instance.
If the 'Organization Name' is specified, only users of this organization will have an access to ReportPortal instance.

If the Name of GitHub organization is not validated, verify that the name is correct.

Example of GitHub auth configuration:
 Fill in the form:
 
 ```javascript 
               'Client Id': 8767988c424a0e7a2640
           'Client Secret': ef22c9f804257afaf399a2dada7c8f22dee5fd1b
       'Organization Name': reportportal
  ```
 Click on 'Submit' button.
 A confirmation message in status bar should be shown.
 A 'Login with GitHub' button will appear on login form.

## Azure DevOps BTS

Integration with ReportPortal can be helpful for projects which are already using Azure DevOps BTS (Bug Tracking System) as a tracking tool. This feature allows posting issues and linking/unlinking issues, getting updates on their statuses. For example, just a few clicks – and bug with detailed logs is created! 
    
Azure DevOps BTS integration can be configured on the global level (for all projects on the instance) or on the project level (only for one project). 

### Global Azure DevOps BTS integration 
 
#### Add new global Azure DevOps BTS integration 
 
 You might want to configure **global integrations** which will be applied on all projects if all projects on your instance are using the same Azure DevOps BTS projects. 
 
1) Log in as ADMIN. 
 
2) Go to Administrate > Plugins. 
 
3) Click on Azure DevOps plugin. 
 
4) Click on the “Add integration” button. 

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops1.png) ](Images/Plugins/AzureDevOps/azure-devops1.png)

5) Fill and Save the authorization form. 

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops2.png) ](Images/Plugins/AzureDevOps/azure-devops2.png)

Please, follow the steps below to get a token for Azure DevOps integration: 

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops3.png) ](Images/Plugins/AzureDevOps/azure-devops3.png)

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops4.png) ](Images/Plugins/AzureDevOps/azure-devops4.png)

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops5.png) ](Images/Plugins/AzureDevOps/azure-devops5.png)

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops6.png) ](Images/Plugins/AzureDevOps/azure-devops6.png)

You can choose predefined Azure DevOps ticket fields after you have created a connection with the Azure DevOps BTS project. These fields will be shown to you all the time when you post an issue to the Azure DevOps BTS. 

This feature also gives you the ability to choose proper issue type for newly created issues in Azure DevOps BTS. 

To choose a needed issue type and predefined field for the chosen issue, you should perform the following actions on the opened **Configuration** form: 

1) Choose issue type from the drop-down. 

2) Check the fields needed and fill them in if necessary. 

3) Click on “Submit” button. 

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops7.png) ](Images/Plugins/AzureDevOps/azure-devops7.png)

Now team members on all your projects will be able to submit issues in Azure DevOps BTS. Options for Post Issue/Link issue are activated. 

You can add more integrations by clicking on “Add integration”.

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops8.png) ](Images/Plugins/AzureDevOps/azure-devops8.png)

 User can add several integrations, but with a different name to the **one Azure DevOps BTS project**. 

**Use case:**


**Situation:** User wants to post to Azure DevOps BTS issues with type **Issue** and **Task** to the project NNN-MMM in Azure DevOps BTS. Is it possible? Yes! 

**Solution:** Add two integrations to the project NNN-MMM in Azure DevOps BTS with names e.g., “Project -1” and “Project -2”. Add to the “Project -1” issue type **Issue** and for “Project -2” - issue type **Task**. While posing issue procedure, choose integration with needed type. 

#### Update global Azure DevOps BTS integration 

If you need to edit Azure DevOps BTS integration authorization parameters, please perform actions: 
 
1) Log in as ADMIN. 
 
2) Go to Administrate > Plugins. 
 
3) Click on Azure DevOps plugin. 
 
4) Click on a tab with existing integration. 
 
5) Click on “Edit authorization” link. 

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops9.png) ](Images/Plugins/AzureDevOps/azure-devops9.png)

6) Change “Integration name”. 
 
7) Type your Azure DevOps credentials. 
 
8) Submit the form. 

>**Note:**
You can edit only “Integration name”. If you need other changes, please submit new integration. 

If you need to edit fields which should be posted in Azure DevOps BTS, please perform actions: 
 
1) Log in as ADMIN. 
 
2) Go to Administrate > Plugins. 
 
3) Click on Azure DevOps plugin. 
 
4) Click on the tab with existing integration. 
 
5) Click on “Configure” button. 

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops10.png) ](Images/Plugins/AzureDevOps/azure-devops10.png)

6) Choose issue type from the drop-down. 
 
7) Check the fields needed and fill them in if necessary. 
 
8) Click on “Submit” button. 
 
#### Remove global Azure DevOps BTS integration 
 
If you need to remove Azure DevOps BTS integration, please perform actions: 
 
1) Log in as ADMIN. 
 
2) Go to Administrate > Plugins. 
 
3) Click on Azure DevOps plugin. 
 
4) Click on the tab with existing integration. 
 
5) Click on “Remove integration”. 
 
[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops11.png) ](Images/Plugins/AzureDevOps/azure-devops11.png)

6) Submit the action. 

 
### Project Azure DevOps BTS integration 
 
#### Add new project Azure DevOps BTS integration 
 
If any project needs different Azure DevOps BTS configurations, you should unlink a project from Global configurations and add a Project configuration. It means that now when a new global integration is added to the ReportPortal, it won't be applied to the unlinked project. 

For that, 

1) Log in as an ADMIN or Project Manager. 
 
2) Go to Project Settings > Integrations. 
 
3) Click on the Azure DevOps integration panel. 
 
4) Click on “Unlink and setup manually” button. 

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops12.png) ](Images/Plugins/AzureDevOps/azure-devops12.png)

5) Fill and confirm the authorization form. 

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops13.png) ](Images/Plugins/AzureDevOps/azure-devops13.png)

>**Note:**
Please, have a look at **Global Azure DevOps BTS** integration for detailed configuration steps.  

You can choose predefined Azure DevOps ticket fields after you have created a connection with the Azure DevOps BTS project. These fields will be shown to you all the time when you post an issue to the Azure DevOps BTS. 

This feature also gives you the ability to choose proper issue type for newly created issues in Azure DevOps BTS. 

To choose a needed issue type and predefined field for the chosen issue, you should perform the following actions on the opened **Configuration** form: 

1) Choose issue type from the drop-down. 

2) Check the needed fields and fill them in if necessary. 

3) Click on “Submit” button. 

Now team members on this project will be able to submit issues in Azure DevOps BTS. Options for Post Issue/Link issue are activated. 

You can add more integrations by clicking on “Add integration” button.

#### Reset to project Azure DevOps BTS Integrations 

If you want to delete project integrations with Azure DevOps BTS and link your project with global configurations, please perform actions described below: 

1) Log in as an ADMIN or Project Manager. 
 
2) Go to Project Settings > Integrations. 
 
3) Click on the Azure DevOps integration panel. 
 
4) Click on “Reset to global settings” button. 
 
5) Confirm the action. 

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops14.png) ](Images/Plugins/AzureDevOps/azure-devops14.png)

### Post issue to Azure DevOps BTS 

Posting an issue to Azure DevOps BTS means creating a new issue in Azure DevOps BTS from ReportPortal and uploading logs and attachments from an execution. 

If you want to post a new issue to Azure DevOps BTS, you need to have a project or global integration with Azure DevOps BTS. 

1) Log in to ReportPortal as Admin, PM, Member, Customer or Operator. 
 
2) Go to Launches. 
 
3) Choose a needed item. 

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops15.png) ](Images/Plugins/AzureDevOps/azure-devops15.png)

4) Click on the pencil icon to open “Make decision” modal. 

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops16.png) ](Images/Plugins/AzureDevOps/azure-devops16.png)

5) Choose “Post issue” option and then “Apply & Continue”. 

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops17.png) ](Images/Plugins/AzureDevOps/azure-devops17.png)

6) Fill in the “Post Issue” form with valid data and submit the form. 

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops18.png) ](Images/Plugins/AzureDevOps/azure-devops18.png)

7) A new issue will be posted in Azure DevOps BTS with information from ReportPortal. 

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops19.png) ](Images/Plugins/AzureDevOps/azure-devops19.png)

8) A label with issue ID will be added to the test item. 

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops20.png) ](Images/Plugins/AzureDevOps/azure-devops20.png)

### Link an issue with an issue in Azure DevOps BTS 

Linking an issue with an issue in Azure DevOps BTS means adding a clickable link to an existing issue in Azure DevOps BTS from ReportPortal that will show a status of this issue. 

1) Log in to ReportPortal as Admin, PM, Member, Customer or Operator. 
 
2) Go to Launches. 
 
3) Choose a needed item. 

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops21.png) ](Images/Plugins/AzureDevOps/azure-devops21.png)

4) Click on the pencil icon to open “Make decision” modal.

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops22.png) ](Images/Plugins/AzureDevOps/azure-devops22.png)

5) Choose “Link issue” option and then “Apply & Continue”.

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops23.png) ](Images/Plugins/AzureDevOps/azure-devops23.png)

6) Fill in the “Link issue” form with valid data and submit the form.

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops24.png) ](Images/Plugins/AzureDevOps/azure-devops24.png)

7) A label with issue ID will be added to the test item. 

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops25.png) ](Images/Plugins/AzureDevOps/azure-devops25.png)

8) Link is redirected to this issue in Azure DevOps BTS.

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops26.png) ](Images/Plugins/AzureDevOps/azure-devops26.png)

### Unlink an issue in Azure DevOps BTS 

You can also unlink an issue. 
 
1) Click on the “remove” icon. 

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops27.png) ](Images/Plugins/AzureDevOps/azure-devops27.png)

2) Click “Unlink Issue”.

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops28.png) ](Images/Plugins/AzureDevOps/azure-devops28.png)

3) Link to the issue in Azure DevOps BTS is removed. 
 
### Custom issue type in Azure DevOps BTS 
 
You can configure any custom issue type (e.g., Bug for Adam) in Azure DevOps BTS and then choose it as predefined Azure DevOps ticket field. So, developer Adam will see on the Azure DevOps BTS all issues from ReporPortal which assigned to him. 
 
Follow the steps below to configure custom issue type: 
 
1) Log in to [Azure portal](https://dev.azure.com).
 
2) Go to Organization settings. 

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops29.png) ](Images/Plugins/AzureDevOps/azure-devops29.png)

3) Click on the “Process” menu item.

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops30.png) ](Images/Plugins/AzureDevOps/azure-devops30.png)

4) Select three dots near the current process and create a new one.

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops31.png) ](Images/Plugins/AzureDevOps/azure-devops31.png)

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops32.png) ](Images/Plugins/AzureDevOps/azure-devops32.png)

5) Click on the name of the just created process.

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops33.png) ](Images/Plugins/AzureDevOps/azure-devops33.png)

6) Create custom issue type.

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops34.png) ](Images/Plugins/AzureDevOps/azure-devops34.png)

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops35.png) ](Images/Plugins/AzureDevOps/azure-devops35.png)

7) Click on the project quantity and change the process for your project.

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops36.png) ](Images/Plugins/AzureDevOps/azure-devops36.png)

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops37.png) ](Images/Plugins/AzureDevOps/azure-devops37.png)

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops38.png) ](Images/Plugins/AzureDevOps/azure-devops38.png)

8) Change Issue Type for Azure DevOps BTS integration on ReportPortal.

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops39.png) ](Images/Plugins/AzureDevOps/azure-devops39.png)

9) Post issues to Azure DevOps BTS. 
 
10) Now you can see issues with custom issue type on Azure DevOps BTS. 

[ ![ImageName](Images/Plugins/AzureDevOps/azure-devops40.png) ](Images/Plugins/AzureDevOps/azure-devops40.png)