Creation of project and adding users
------------------------------------

Now it is necessary to create a separate space, named as Project, and add user(s) to it, who will create and manage the data.
Permission: Only user with account role ADMINISTRATOR has access to this context.

### Creat project

To create a project for a team:
1. Login Report Portal as ADMIN user
2. Open list on the right of user's image.
3. Click 'Administrative' link 
4. Click 'Projects' from left-hand sidebar
5. Click 'Add Project' button in the right top corner
6. Enter a name of project
7. Click 'Submit' button.

Confirmation message in status bar should appear.

> **Note**

> Name of project should contain 3-256 symbols. 
> It can include Latin and numeric characters, as well as underscores and dashes. 
> The name should be unique and cannot be changed after saving.

Admin can configure project settings or leave them as the default. 
Project members with LEAD or PROJECT_MANAGER role are able to setup project settings.
To know how project settings could be updated, go to 'ProjectConfiguration' section

To know more about project's management, go to Management Board>All Projects page

### Add users to project

Only Admin user is able to create a user in Report Portal. This functionality is named as 'Add User'.

A new user could be added on just created project with next steps:
1. Login Report Portal as ADMIN user
2. Open list on the right of user's image.
3. Click 'Administrative' link 
4. Click 'Projects' from left-hand sidebar
5. Find the project on which user/s will be added
6. Click 'Members' icon on the tail of the project
7. Click 'Add User' button
8. Next form opens in pop up:

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

Confirmation message in status bar should appear.

The notification email letter is sent to email address of new user.

 > **Note** 
  when user is created s/he gets own space, named as "personal project". 

To know more options of adding users, go to Project Configuration>Management of users
