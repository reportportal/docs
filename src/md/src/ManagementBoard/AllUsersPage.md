## All Users page

All Users page in Management Board provide the access to see all available users in the system.

The page provides next information
 * user's information: login, full name, email address
 * last login date: in 'time ago' format
 * projects on which users are assigned and roles on them
 * Delete button: only Admin is able to delete user from the system

All Users page allows: 
 - to add and invite new ReportPortal users.
 - to assign users to the projects with any project role.
 - to unnassign users from projects.
 - to update project role
 - to delete users from ReportPortal.

ReportPortal provides 2 ways to create a new user account in the Management Board:

- on the "All Users" page
- on All Projects' "Members" page. This point is described on
[Creation of Project and Adding Users](/docs/Getting Started/Creation of Project and Adding Users)


### Add user on "All Users" page

To add a user on the "All Users" page, perform the following steps:

1. Login into ReportPortal instance as Administrator.

2. Navigate to the Management Board -\> "All users" page.

3. Click "Add User" button.

4. "Add new user form" will appear.

5. Fill in the form and click "Add" button. A new user will be added to
  the system and assigned to the selected project, and to "Personal Project" with the 
  PROJECT MANAGER project role. Message with authorization data will be sent to the user's email.

[ ![Image](Images/userGuide/manageUsers/addUserFromAllUsersPage.png) ](https://youtu.be/3DmBPpRKRwk)

>**Note:**  
This is the only place in the system where an Administrator can be created
from. "Project role" is disabled, if Administrator has been selected in the
"Account role" field. The "ProjectRole" parameter is not specified for
Administrator, the Administrator has full privileges on the project.

### Invite user on "All Users" page

To invite a user on the "All Users" page, perform the following steps:

1. Login into ReportPortal instance as Administrator.

2. Navigate to the Management Board -\> "All users" page.

3. Click the "Invite User" button.

4. The "Invite new user" form will appear.

5. Fill in the form and click the "Send invite" button. The invitation
    has been sent. You can copy the link to the invitation from the "Link to
    invitation" field.

6.  The user will receive an email with the link to the invitation. Registration
link will be active until the user registers in the system by this reference,
but not more than 24 hours. When the user clicks the link, he/she will see a registration form.

7. The user needs to fill in the registration form and click the "Register" button to complete the registration. 
The user will be assigned to the project that was specified by you during the invitation, 
and to "Personal Project" with the PROJECT MANAGER project role. 

[ ![Image](Images/userGuide/manageUsers/inviteUserFromAllUsers.png) ](https://youtu.be/MM0eNrDK5yo)


### Assign user on "All Users" page in Management Board

To assign/unassign user on the "All Users" page, perform the following
steps:

1. Login into Report Portal instance as Administrator.

2. Navigate to the Management Board -\> "All Users" page.

3. Click "View Projects" button.

4. Click green "plus" button – Assign user to the project.

5. Select a project from the drop-down list.

6. Select a project role.

7. Click the "Assign" button. The user will be assigned to the project.


### Unassign user on "All Users" page in Management Board

To unassign a user from the project, perform the following steps:

1. Navigate to the Management Board -\> "All Users" page.

2. Select a user and click "View Projects" button.

3. Click "Unassign" button near the selected project.

4. Confirm the warning message: "Are you sure you want to unassign
    user from the project?". The user will be unassigned from the project.
    
[ ![Image](Images/userGuide/manageUsers/assignUnassignUserFromAllUsers.png) ](https://youtu.be/DGssKgYmbds)


### Edit user project role on "All Users" page in Management Board

To edit a user project role on the "All Users" page, perform the following
steps:

1. Login into Report Portal instance as Administrator.

2. Navigate to the Management Board -\> "All Users" page.

3. Click "View Projects" button.

4. Select a new value from the "Project Role" drop-down.

5. The new project role will be automatically saved.

[ ![Image](Images/userGuide/manageUsers/editProjectRoleFromAllUsers.png) ](https://youtu.be/Kb19uMYm0wM)


### Delete user

To delete a user from ReportPortal, perform the following steps:

1. Login into ReportPortal instance as Administrator.

2. Navigate to the Management Board -\> "All Users" page.

3. Select a user and click the "Delete" button.

4. The warning message will be displayed.

5. Click the "Delete" button. The user will be deleted from the ReportPortal. All launches and shared data (filters, 
dashboards and widgets), that the user owns on the projects will be kept in ReportPortal.

[ ![Image](Images/userGuide/manageUsers/deleteUser.png) ](https://youtu.be/8kaqZPyW5KQ)


### Edit user account role

The only space in ReportPortal where user can get the Administrator rights is All Users page

**GRANT ADMINISTRATOR**

To grant Administrator role for any user, perform the following steps:

1. Login into the ReportPortal instance as Administrator.

2. Navigate to the Management Board -\> "All Users" page.

3. Hover the cursor to the selected user's profile. "Make admin" label will
    appear.

4. Click "Make admin" label. A confirmation message will be shown.

5. Click "Change" button on pop-up window. Account role User will be changed to
    Administrator. The user account will be marked with "admin" label.

[ ![Image](Images/userGuide/manageUsers/changeAccountRole.png) ](https://youtu.be/U6xmYzDwwbI)


**TAKE AWAY ADMINISTRATOR ROLE**

To take away Administrator account role, perform the following steps:

1. Login into ReportPortal instance as Administrator.

2. Navigate to the Management Board -\> "All Users" page.

3. Click "Admin" label on the selected user's profile.

4. A confirm message will be shown.

5. Click "Change" button. Account role "Administrator" will be changed to
    "User".

[ ![Image](Images/userGuide/manageUsers/changeAccountRole.png) ](https://youtu.be/7pLNEDY7Uis)

