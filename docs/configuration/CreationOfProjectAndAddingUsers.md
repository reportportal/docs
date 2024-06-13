---
sidebar_position: 2
sidebar_label: Creation of project and adding users
---

# Creation of project and adding users

The main question of how you can organize your working space in ReportPortal. 
Let's see two use cases which can help you to make a decision.

**Use Case 1**: 
>
> **Situation:** We have a small team. Everybody can see everything. We need one dashboard which shows information about the whole project.
>
> **Solution:** Create one project. Assign all users on the created project. View all types of test cases (UI, API, Unit and so on) on this project. Divide executions by custom filters. Create a dashboard with a widget based on filters.
>
> **Pros:** You have a dashboard that can combine all results needed for your team. You need to configure only one project.
>
> **Cons:** All team members can see all results, you can not configure permissions rules.



**Use Case 2**: 
>
> **Situation:** We have a big team with a difficult permission structure and nested streams. Only persons with granted permissions can see results of a certain stream. 
>
> **Solution:** Create separate projects for different streams. Assign users to appropriate projects. Create a dashboard with a widget based on filters for each project.
>
> **Pros:** Security, only users with granted permission will have access to the data.
>
> **Cons:** You can not see a single dashboard for several dashboards. 

If you choose a strategy, it is time to create your first project.

**Permission:**
Via "Administrate" section `ADMINISTRATOR` can create, configure, delete projects and add/invite/assign/unassign users on/to the projects. 

## Create a project

To create a project for a team:
* Login to the ReportPortal as an ADMIN user
* Open menu at the bottom.
* Click the 'Administrate' link 
* Select 'Projects' from the left-hand sidebar
* Click the 'Add New Project' button in the right top corner
* Then enter a name of the project
* Click the 'Add' button.

A confirmation message in the status bar should appear.

:::note
The name of the project should contain between 3-256 symbols. 
It can include Latin and numeric characters, as well as underscores and dashes. 
The name should be unique and cannot be changed after saving.
:::
An Admin can configure the project settings or leave them as the default. 
Project members with PROJECT_MANAGER roles are able to set up the project settings.
To know how project settings could be updated, go to the [ProjectConfiguration](/configuration/ProjectConfiguration) section.

To know more about the project's management, go to "Administrate" section > "All Projects" page.

You have a project, now add your team members to it.  You can create a new user and send credentials for them - **Add user** or you can send them an invite link - **Invite user**.

## Add users to project

**Permission:**
Via "Administrate" section, only `ADMINISTRATOR` can add users.

To add a user, perform the following steps:

1. Login into ReportPortal instance as Administrator.
2. Navigate to the "Administrate" section -\> "All users" page.
3. Click "Add User" button.
4. Fill all fields with valid data in the "Add user" form and click on the "Add" button.

```javascript
'login': <unique_login_name>
'Full Name': <user_full_name>
'Email': <unique_email_address>
'Account role': USER (by default)
'Project Role': MEMBER (by default)
'Password': could be entered manually (at least 6 symbols required) or generated via the link under the field.
```

Example of user creation:

```javascript
Enter the user's login: Demo
Enter the user's full name: Demo user
Enter the user's email: demo_user@example.com
'Account role': USER (by default)
'Project Role': MEMBER (by default)
Add password: 1q2w3e 
```

:::note
This is the only place in the system where an Administrator can be created
from. "Project role" is disabled, if "Administrator" value has been selected in the "Account role" field. The "ProjectRole" parameter is not specified for
Administrator, the Administrator has full privileges on the project.
:::
Submit the form.

A confirmation message in the status bar should appear.

The notification email letter is sent to the email address of the new user.

:::note
Please, do not forget to review project roles on regular basis. We recommend to do it at least quarterly.
:::
By default, the system creates a personal project for new users. All new users which have been added to the ReportPortal will have a personal project along with the project where they have been assigned on. The user will be assigned to  "Personal Project" with the `PROJECT MANAGER` project role.

:::note
If you do not need a personal project, `ADMINISTRATOR` can delete it. This project will be removed from the instance. But if the user is unassigned from all projects in the system, and he/she will log in to the ReportPortal after that - the deleted personal project will be created once more time.
:::
If you wish to know more about adding user options, go to "Administrate" section > "All Users" page.

## Invite a user to a project
**Permission:**
Via Administrate section, only `ADMINISTRATOR` can invite users.
Via Project Space, `ADMINISTRATOR` and `PROJECT MANAGER` can invite users.

To invite a user on the "All Users" page, perform the following steps:

1. Login into ReportPortal instance as Administrator.
2. Navigate to the "Administrate" section -\> "All users" page.
3. Click on the "Invite User" button.
4. Fill all fields with valid data in the "Invite user" form and click on the "Invite" button. - The invitation
   has been sent. You can copy the link to the invitation from the "Link to
   invitation" field.
5. The user will receive an email with the link to the invitation. Registration
   link will be active until the user registers in the system by this reference,
   but not more than 24 hours. When the user clicks the link, he/she will see a registration form.
6. The user needs to fill in the registration form and click the "Register" button to complete the registration.
   The user will be assigned to the project that was specified by you during the invitation,
   and to "Personal Project" with the `PROJECT MANAGER` project role.

## Assign user to the project

**Permission:**
Via "Administrate" section, only `ADMINISTRATOR` can assign users.
Via Project Space `ADMINISTRATOR` and `PROJECT MANAGER` can assign users.

Perform the following steps:

1. Login into ReportPortal instance as Administrator.
2. Navigate to the "Administrate" section -\> "All Users" page.
3. Find a user and click "+ Assign to project" button.
4. Fill the name of project.
5. Select a project role.
6. Click on the "Tick" button. - The user will be assigned to the project.

## Edit project role

**Permission:**
Via "Administrate" section, only `ADMINISTRATOR` can edit the project role.
Via Project Space `ADMINISTRATOR` and `PROJECT MANAGER` can edit the project role.

To edit the project role, perform the following steps:

1. Login into ReportPortal instance as Administrator.
2. Navigate to the "Administrate" section -\> "All Users" page.
3. Find a user and their project in the "Projects and roles" column.
4. Click on the name of project.
5. Select a new value from the "Project Role" drop-down.
6. Click on the "Tick" icon.

## Unassign user from the project

**Permission:**
Via "Administrate" section, only `ADMINISTRATOR` can unassign users.
Via Project Space `ADMINISTRATOR` and `PROJECT MANAGER` can unassign users.

:::note
Please, do not forget to review project roles on regular basis. We recommend to do it at least quarterly.
:::
Depending on the project needs the assignment could be removed. 
To unassign the assignment for the user on the project, perform the following steps:

1. Navigate to the "Administrate" section -\> "All Users" page.
2. Find a user and their project in the "Projects and roles" column.
3. Click on the name of project.
4. Click on "Cross" icon near the needed project.
5. Confirm the action. - The user will be unassigned from the current project but will stay in the system.

:::note
Users can not be unassign from their own personal projects.
:::
