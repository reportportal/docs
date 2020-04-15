## Creation of project and adding users

You have already configured server settings and add plugins to the system.
Now you need to create a space where users will be working with test results.

The main question of how you can organize your working space in ReportPortal. 
Let's see two use cases which can help you to make a decision.

> **Use Case 1**: 
>
> **Situation:** We have a small team. Everybody can see everything. We need one dashboard which shows information about the whole project.
>
> **Solution:** Create one project. Assign all users on the created project. View all types of test cases (UI, API, Unit and so on) on this project. Divide executions by custom filters. Create a dashboard with a widget based on filters.
>
> **Pros:** You have a dashboard that can combine all results needed for your team. You need to configure only one project.
>
> **Cons:** All team members can see all results, you can not configure permissions rules.



> **Use Case 2**: 
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
Via Administrative page  ADMINISTRATOR can create, configure, delete projects and add/invite/assign/unassign users on/to the projects. 

### Create a project

To create a project for a team:
* login to the ReportPortal as an ADMIN user
* Open the list on the right of the user's image.
* Click the 'Administrative' link 
* Select 'Projects' from the left-hand sidebar
* Click the 'Add Project' button in the right top corner
* Then enter a name of the project
* Click the 'Submit' button.

A confirmation message in the status bar should appear.

> **Note**
The name of the project should contain between 3-256 symbols. 
It can include Latin and numeric characters, as well as underscores and dashes. 
The name should be unique and cannot be changed after saving.

An Admin can configure the project settings or leave them as the default. 
Project members with PROJECT_MANAGER roles are able to set up the project settings.
To know how project settings could be updated, go to the [ProjectConfiguration](https://reportportal.io/docs/Project-configuration) section

To know more about the project's management, go to Management Board > All Projects page.

You have a project, now add your team members to it.  You can create a new user and send credentials for them - **Add user** or you can send them an invite link - **Invite user**.

### Add users to project

**Permission:**
Via Administrative page, only ADMINISTRATOR can add users.

A new user can be added on projects with the next steps:
* login to the ReportPortal as an ADMIN user
* Then open the list on the right of the user's image.
* Click the 'Administrative' link 
* Select 'Projects' from the left-hand sidebar
* Find the project on which user/s will be added
* Click the 'Members' icon on the tail of the project
* Click the 'Add User' button
* Next to a form opens in the pop-up:

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
Submit the form.

A confirmation message in the status bar should appear.

The notification email letter is sent to the email address of the new user.

By default, the system creates a personal project for new users. All new users which have been added to the ReportPortal will have a personal project along with the project where they have been assigned on. The user will be assigned to  "Personal Project" with the PROJECT MANAGER project role.

>**Note:**
If you do not need a personal project, ADMINISTRATOR can delete it. This project will be removed from the instance. But if the user is unassigned from all projects in the system, and he/she will log in to the ReportPortal after that - the deleted personal project will be created once more time.

If you wish to know more about adding user options, go to Management Board > All Users page.

### Invite a user to a project
**Permission:**
Via Administrative page, only ADMINISTRATOR can invite users.
Via Project Space ADMINISTRATOR and PROJECT MANAGER can invite users.

To invite a user should perform the following steps:

* Login into ReportPortal instance as ADMINISTRATOR.

* Navigate to the All Users page.

* Click the "Invite User" button.

* The "Invite new user" form will appear.

* Fill in the form and click the "Send invite" button. The invitation has been sent. You can copy the link to the invitation from the "Link to
    invitation" field.

* A user will receive an email with the link to the invitation. The registration
link will be active until the user registers in the system by this reference,
but not more than 24 hours. When the user clicks the link, he/she will see a registration form.

* A user needs to fill in the registration form and click the "Register" button to complete the registration. 

### Assign user to the project

**Permission:**
Via Administrative page, only ADMINISTRATOR can assign users.
Via Project Space ADMINISTRATOR and PROJECT MANAGER can assign users.

Perform the following steps:

* Login into the ReportPortal as a user with an ADMINISTRATOR project role.

* Then click the 'All users page' icon on the project page.

* Click on Project name near a user name

* Click on 'Add project'

* Type first 3 symbols of the needed project and choose a project from the proposed list

* Choose a project role (Member by default)

* Click on the stick

* The new assignment will be automatically saved.

### Edit project role

**Permission:**
Via Administrative page, only ADMINISTRATOR can edit the project role.
Via Project Space ADMINISTRATOR and PROJECT MANAGER can edit the project role.

To edit the project role, perform the following steps:

* Login into the ReportPortal as a user with an ADMINISTRATOR project role.

* Then click the 'All users page' icon on the project page.

* Click on Project name near a user name

* Select a new value from the "Project Role" drop-down for the user

* The new project role will be automatically saved.


### Unassign user from the project

**Permission:**
Via Administrative page, only ADMINISTRATOR can unassign users.
Via Project Space ADMINISTRATOR and PROJECT MANAGER can unassign users.

Depending on the project needs the assignment could be removed. 
To unassign the assignment for the user on the project, perform the following steps:

* Login into the ReportPortal as a user with an ADMINISTRATOR project role.

* Then click the 'All users page' icon on the project page.

* Find the required member

* Click on Project name near a user name

* Click on the cross near the project name

* Confirm the action in the popup.

* The user will be unassigned from the current project but will stay in the system.

>**Note:**
Users can not be unassign from their own personal projects.
