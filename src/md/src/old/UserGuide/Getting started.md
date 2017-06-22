Getting started
---------------

To log in, open the application and click LOGIN.


Report Portal provides 2 authorisation types:

- Basic authorisation - for INTERNAL users
- GitHub authorisation - for GITHUB users only

[ ![Image](Images/userGuide/gettingStarted/login.png) ](https://youtu.be/DHSgjk3Dtoo)


### Email server configuration
To configure Email server:

1. Login Report Portal as ADMIN user
2. Open list on the right of user's image.
3. Click 'Administrative' link 
4. Click 'Server Settings' from left-hand sidebar
5. On 'Email Server' tab change switcher position of 'Enable Email Server' to "ON"
6. Next fields are present:
```javascript
                   Host: <host_name_of_email_server>
               Protocol: SMTP (predefined)
    Default sender name: (optional)
                   Port: <port_number>
          Authorization: OFF/ON 
               Username: <user_email_address>
               Password: <user_email_password>
         'TLS' or 'SSL': should be checked depends on selected port.
```

Example of email server configuration for Gmail email server (detailed info could be found here [https://support.google.com/a/answer/176600?hl=en](https://support.google.com/a/answer/176600?hl=en))
 
1. Fill the form with next data:
```javascript
                   Host: smtp.gmail.com
               Protocol: SMTP
    Default sender name: Report Portal
                   Port: 465
           Autorization: ON
               Username: <user_email_address>
               Password: <user_email_password>
                    SSL: checkbox should be checked.
```
2. Click 'Submit' button
3. Confirmation message in status bar should be shown.

[ ![Image](Images/userGuide/gettingStarted/gmail.png) ](https://youtu.be/0919itAaixk)

Example of email server configuration for Yandex email server (detailed info could be found here [https://yandex.com/support/mail-new/mail-clients.html](https://yandex.com/support/mail-new/mail-clients.html))
 
1. Fill the form with next data:
```javascript
                   Host: smtp.yandex.com
               Protocol: SMTP
    Default sender name: Report Portal
                   Port: 465
           Autorization: ON
               Username: <user_email_address>
               Password: <user_email_password>
                    SSL: checkbox should be checked.
```
2. Click 'Submit' button
3. Confirmation message in status bar should be shown.


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

[ ![Image](Images/userGuide/gettingStarted/access_to_project.png) ](https://youtu.be/OWXdC9cpkzI)

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
