## Creation of project and adding users

Now it is necessary to create a separate space, named as Project, and add user(s) to it, who will create and manage the data.
Permission: Only user with account role ADMINISTRATOR has access to this context.

### Create project

To create a project for a team:
1. Login to the ReportPortal as an ADMIN user
2. Open the list on the right of the user's image.
3. Click the 'Administrative' link 
4. Select 'Projects' from the left-hand sidebar
5. Click the 'Add Project' button in the right top corner
6. Then enter a name of the project
7. Click the 'Submit' button.

A confirmation message in status bar should appear.

> **Note**

> The name of project should contain between 3-256 symbols. 
> It can include Latin and numeric characters, as well as underscores and dashes. 
> The name should be unique and cannot be changed after saving.

An Admin can configure the project settings or leave them as the default. 
Project members with LEAD or PROJECT_MANAGER roles are able to setup the project settings.
To know how project settings could be updated, go to the 'ProjectConfiguration' section

To know more about project's management, go to Management Board>All Projects page

### Add users to project

Only the Admin user is able to create a user in ReportPortal. This functionality is named 'Add User'.

A new user can be added for newly created projects with the next steps:
1. Login to the ReportPortal as an ADMIN user
2. Then open the list on the right of the user's image.
3. Click the 'Administrative' link 
4. Select 'Projects' from the left-hand sidebar
5. Find the project on which user/s will be added
6. Click the 'Members' icon on the tail of the project
7. Click the 'Add User' button
8. Next a form opens in the pop-up:

```javascript
								    'login': <unique_login_name>
							    'Full Name': <user_full_name>
								    'Email': <unique_email_address>
							 'Project Role': MEMBER (by default)
								 'Password': could be entered manually (at least 6 symbols required) or generated via link under the field.
```

Example of user creation:

```javascript
						   Enter user's login: Demo
					   Enter user's full name: Demo user
						   Enter user's email: demo_user@example.com
Leave default or select a user's project role: LEAD
								 Add password: 1q2w3e 
```
Submit the form.

A confirmation message in the status bar should appear.

The notification email letter is sent to the email address of new user.

 > **Note** 
  When a user is created, s/he gets their own space, named as "personal project". 

If you wish to know more about adding user options, go to Project Configuration > Management of users
