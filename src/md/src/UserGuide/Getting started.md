Getting started
---------------

To log in, open the application and click LOGIN.


Report Portal provides 2 authorisation types:

- Basic authorisation - for INTERNAL users

- GitHub authorisation - for GITHUB users only

[ ![Image](Images/userGuide/gettingStarted/login.png) ](Images/userGuide/gettingStarted/login.webm)


### Email server configuration

Important: Only user with ADMINISTRATOR account role has permission to configure email server settings.
To do that, login RP as ADMINISTRATOR and navigate to MANAGEMENT BOARD context, Server Settings page.

Switch Enable Email Server to ON position.
Now fill in the form loaded.

[ ![Image](Images/E-mail form.jpg) ](Images/E-mail form.jpg)

SMTP protocol for outgoing emails is predefined and could not be changed.
'Host' and 'Port' are mandatory editable fields. By default, "25" port is in the field.
You can add the name of a sender to customize your notifications. To do that, specify it in 'Default Sender' field.

There are some examples of email server configuration below.

To set up gmail smtp server, please use the settings provided on https://support.google.com/a/answer/176600?hl=en

>**Note:**
Authorization is required for gmail email server.

Example of configuration of gmail email server using port 465:

[ ![Image](Images/Email settings-465.jpg) ](Images/Email settings-465.jpg)

Example of configuration of gmail email server using port 587:

[ ![Image](Images/Email settings-587.jpg) ](Images/Email settings-587.jpg)

Settings are validated on form submitting. In case any data is not correct, test connection error message will be shown.

[ ![Image](Images/Email settings-587-error.jpg) ](Images/Email settings-587-error.jpg)

To set up yandex email server, please use the settings provided on https://yandex.com/support/mail-new/mail-clients.html

>**Note:**
Authorization is required for yandex email server.

Example of configuration of yandex email server using port 465:

[ ![Image](Images/Email settings-yandex-465.jpg) ](Images/Email settings-yandex-465.jpg)

Example of configuration of yandex email server using port 587:

[ ![Image](Images/Email settings-yandex-587.jpg) ](Images/Email settings-yandex-587.jpg)

>**Note:**
Settings of smtp server could be differ and depend on providers.


### Access to projects

Projects in Report Portal have separate spaces. To see the list of available
projects and open a project, click the drop-down list in the top left corner of
the page.

Level of your permissions to the project is based on your project role. For more
information about user roles and their permissions refer to the [User roles in Report Portal](#documentation/Getting-started>user-s-roles-in-report-portal) topic.

>**Note:**
By default, every user is assigned to a Personal project as PROJECT_MANAGER. User cannot be unassigned from Personal project.

You will see no data at the selected project if nobody has reported any data in
it yet.

Also you can see the list of projects on the user profile page.

[ ![Image](Images/userGuide/gettingStarted/access_to_project.png) ](Images/userGuide/gettingStarted/access_to_project.webm)

### User's types 

There are two generic user types on Report Portal: INTERNAL and GITHUB user type. These types are mutually exclusive.

INTERNAL users are created within the Report Portal. 

New user cannot be created with GITHUB type within the System.

When GITHUB user is authenticated in Report Portal, next user's data is imported from the GITHUB: login, full name, email, profile photo.

It is impossible to change password and personal information (login, email, full name, profile photo) for GITHUB users.

At the same time, GITHUB user is able to synchronize his/her data with Report Portal. To do that, 
login Report Portal via 'Login with GitHub' button and click 'Force Update' button on Profile page. 


### User's roles in Report Portal

All users in Report Portal have an Account role and a Project role.

#### Account role

There are 2 possible account roles in Report Portal:

- Administrator
- User

Users with the Administrator role have access to all operations in Report
Portal. 

#### Project Role

Every user is given a specific Project role within a specific project.

There are 4 possible Project roles in Report Portal:

- PROJECT MANAGER
- LEAD
- MEMBER
- CUSTOMER

>**Note:**
Administrator has no project role and has all privileges on the project.

#### Proposed Role

If Report Portal is integrated with any external project management system, the
users will have Proposed Role.

The Proposed Role field is automatically filled in with the user role imported
from an external project management system. All roles are matched with four roles in
Report Portal: PROJECT MANAGER, LEAD, MEMBER and CUSTOMER. The Proposed role
is set to one of these four values.


### Permissions Map

| **Action**\\**Account Role**                                                |**ADMIN**      |**USER**       |**USER**| **USER**       | **USER**           | **USER**         | **USER**             |
|-----------------------------------------------------------------------------|---------------|-----------------|------|----------------|--------------------|------------------|----------------------|
| **Action**\\**Project Role**                                                |               |**PROJECT MANAGER**|**LEAD**|**MEMBER** (owner)|**MEMBER** (not owner)|**CUSTOMER** (owner)|**CUSTOMER** (not owner)|
| Have access to Management Board                                             | \+            |                 |      |                |                    |                  |                      |
| Create Project                                                              | \+            |                 |      |                |                    |                  |                      |
| Delete project                                                              | \+            |                 |      |                |                    |                  |                      |
| Update Project Settings                                                     | \+            | \+              | \+   |                |                    |                  |                      |
| See Project Settings                                                        | \+            | \+              | \+   | \+             | \+                 | \+               | \+                   |
| Create User                                                                 | \+            |                 |      |                |                    |                  |                      |
| Invite User                                                                 | \+            | \+              | \+   |                |                    |                  |                      |
| Delete User                                                                 | \+            |                 |      |                |                    |                  |                      |
| Assign/Unassign internal user to/from the project                           | \+            | \+              | \+   |                |                    |                  |                      |
| Change user's role on a project                                             | \+            | \+              | \+   |                |                    |                  |                      |
| See list of project members                                                 | \+            | \+              | \+   | \+             | \+                 |                  |                      |
| Edit own account                                                            | \+            | \+              | \+   | \+             | \+                 | \+               | \+                   |
| Edit, delete launch, test item                                              | \+            | \+              | \+   | \+             |                    | \+               |                      |
| Manage launches (force finish, merge)                                       | \+            | \+              | \+   | \+             |                    | \+               |                      |
| Move launch to debug/default mode                                           | \+            | \+              | \+   | \+             |                    |                  |                      |
| Analyse launches (start "Analysis" and "Match issues" manually)             | \+            | \+              | \+   | \+             | \+                 | \+               | \+                     |
| Manage filters, widgets, dashboards (create, edit, delete, share)           | \+            | \+              | \+   | \+             | \+                 | \+               | \+                   |
| Read data                                                                   | \+            | \+              | \+   | \+             | \+                 | \+               | \+                   |
 
>**Note:**
Invite user, Assign/Unassign internal user to/from the project, change user's role on a project actions can be done for a user with similar and lower role only.
