---
sidebar_position: 3
sidebar_label: Jira Cloud
---

# Jira Cloud

For Jira Cloud plugin installation please check [documentation](./ManagePlugins#upload-plugin)

Integration with the JIRA Cloud can be required for projects that collect defects in a separate tracking tool. The integration provides an exchange of information between ReportPortal and the JIRA Cloud, such as posting issues and linking issues, getting updates on their statuses.


## Global JIRA Cloud integration

### Add new global Jira Cloud integration

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

![Global Jira Integration Creation](img/jira/JiraCloudIntegrationCreation.png)

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


### Update global Jira Cloud integration

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

### Remove global Jira Cloud integration

If you need to remove Jira Cloud integration, please perform actions:

1. Log in as ADMIN

2. Go to Administrative > Plugins

3. Click on JIRA Cloud plugin panel

4. Click on a tab with existing integration

5. Click on "Remove integration"

6. Submit the action

## Project JIRA Cloud integration

### Add new project Jira Cloud integration

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

### Reset to project Jira Cloud Integrations

If you want to delete project integrations with Jira Cloud and link your project with global configurations, please perform actions described below:

1. Log in as an ADMIN or Project Manager

2. Go to Project Settings > Integrations

3. Click on the JIRA Cloud integration panel

4. Click on "Reset to global settings" button

5. Confirm the action

## Post issue to Jira Cloud

Posting an issue to Jira Cloud means to create a new issue in Jira from ReportPortal and upload logs and attachments from an execution.

If you want to post a new issue to Jira, you need to have a project or global integration with Jira Cloud.

![Post issue](img/jira/PostIssueJiraCloud.png)

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


## Link an issue with an issue in Jira Cloud

Linking an issue with an issue in Jira Cloud means adding a clickable link to an existing issue in Jira from ReportPortal that will show a status of this issue.

![Link issue](img/jira/LinkIssueJiraCloud.png)

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