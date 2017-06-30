Project configuration
---------------------

Projects in Report Portal have separate spaces. 
To see the list of available projects and open a project, click the drop-down list 
in the top left corner of the page.

Report Portal allows to customize default settings if necessary.

Permission: 
User with Administrator role can edit project settings 
on the project "Settings" page in Management Board and on Project space.
User with PROJECT_MANAGER or LEAD role can edit the settings on the project space only

### Project settings

To go to the project settings page, click the "Settings" icon in the header of the page.

The project configuration page will opened.

The project settings divided into five tabs: "General", "Notifications", "Bug Tracking
System", "Defect Types" and "Demo Data".

**GENERAL SETTINGS** 

The "General" tab has the following project parameters displayed:

- Name – a disabled field. Project name cannot be changed.

- Launch inactivity timeout - this parameter specifies the scheduled time
    for a job to interrupt inactive launches. There are six options: 1 hour, 3
    hours, 6 hours, 12 hours, 1 day, 1 week.

- Keep logs - this parameter specifies how long the system will keep old
    logs in launches. Related launches structure will be saved, in order to keep
    statistics. There are four options: 2 weeks, 1 month, 3 months, 6 months.

- Keep screenshots - this parameter specifies how long to keep screenshots
    in the system. There are five options: 1 week, 2 weeks, 3 weeks, 1 month, 3
    months.

- Auto-Analysis - this parameter allows activating auto-analysis on the
    project. ON - analysis will start as soon as any launch is finished, OFF - analysis will not start automatically, but can be invoked manually.

[ ![Image](Images/userGuide/managingProjects/generalConf.png) ](https://youtu.be/GsBGyhj-V6s)

> **Note:**
User with MEMBER or CUSTOMER project role has no the possibility to edit project settings, but see them.


**CONFIGURE EMAIL NOTIFICATION**

The "Notifications" tab provides the possiblity to activate e-mail notifications on the project.

Report Portal allows to add multiple rules with specific conditions. Notification rule should be unique per project (has unique parameter set: Recipients, In case, Launch names, tags).

Permissions: 
User with Administrator role can configure "Notifications" in Management Board.
User with PROJECT_MANAGER or LEAD role can edit the settings on the project space only.

To do that, perform the following steps:

1. Login into Report Portal.

2. Navigate to the Project -\> Project "Settings" page.

3. Open "Notifications" tab and select "ON" from the "E-mail notifications" drop-down list.

4. Email notification settings form will appear.

5. Enter your email into "From" field. This email will be used as notification sender.

6. Select recipients. To do that, start typing any symbols into "Recipients" field.
You can select an item from the auto-complete tool-tip using the
keyboard (use the "Up" and "Down" arrows and "Enter" button). You can also enter a custom email into the "Recipients" field. To add a custom
email, just enter the email address and press "Enter".

7. The "Launch owner" is selected by default. Uncheck "Launch owner" to exclude
him/her from the notification.

8. Select "In Case" setting. To do that, select one of the following options from the "In Case" drop-down.

9. Select launches (optional). To do that, start typing any symbols into the "Launch names" field.
You can select an item from the auto-complete tool-tip using the
keyboard (use the "Up" and "Down" arrows and "Enter"). Also you can add a new launch name (that does not exist on the project). Several launches names can be selected; the recipients will receive
notifications, when each of them finishes.

10. Select tags (optional). To do that, start typing any symbols into the "Tags" field. The system
suggests the results in the drop-down, after at least 1 symbol is provided. Also you can add a new tag (that does not exist on the project). Several tags can be selected; the recipients will receive notifications about
launches, that have all specified tags.

11. Add more rules, if you need. Notification rules should be unique.

12. After you configure all options, click "Submit" button.

13. The system will activate the "Email notification" option. After the launch
is finished, the recipients will receive a notification via emails.

[ ![Image](Images/userGuide/managingProjects/notificationConf.png) ](https://youtu.be/i2aOBhd3NKU)

>**Note:**  
User with MEMBER or CUSTOMER project role has no the possibility to edit project settings, but see them.

**BUG TRACKING SYSTEM**

The "Bug Tracking System" tab allows connecting a bug tracking system (JIRA, RALLY) to the project.

For more information refer to the [Integration with bug tracking systems](#documentation/Integration-with-Bug)
topic.

**CREATE CUSTOM DEFECT TYPES**

The "Defect Types" tab allows to create custom defect types as subtypes of default defects on the project.

By default after Report Portal installation each project contains the following defect types groups:

>   *To investigate* - means that no investigation was performed on this defect
>   yet.

>   *Product Bug* - defect was investigated and production bug found as a
>   cause for this test failure.

>   *Automation Bug* - defect was investigated and automation test is not
>   correct.

>   *System Issue* - defect was investigated and it turns out that system-level
>   issue, like app crash, caused test to fail.

>   *No Defect* - defect was investigated and defined, that it is not a defect.

Report Portal allows to use existing defect types (Product Bug, Automation Bug, System Issue, No Defect) or create custom ones on project settings page.

To create custom defect types, perform the following steps:

1. Login into Report Portal.

2. Navigate to Projects -\> Project "Settings" page.

3. Open "Defect Types" tab 

4. Click "Add Defect Type" button under any default defect type

5. Add new defect type form will appear 

6. Enter "Defect name" and "Abbreviation", select color for defect presentation on the launches grid and widgets.  

7. Submit form. You will see added defect type on chart preview.

Add more custom defects, if you need. The system allows to add up to ten subtypes of each default defect type.

Now you can investigate found defect as default Product Bug/Automation Bug/System Issue/No Defect or custom defects. All of them will be available to select on Defect Type editor.
For more information refer to the [Investigation of failure](#documentation/Work-with-reports>Investigation-of-failure) topic. 

Default defects cannot be modified and deleted from the system.

Custom defect types can be deleted at any time.

In this case, the system will set parent defect type to all defects previously investigated as just deleted custom defect and update statistics in all launches where deleted defect was present.
For example, if you create custom "Product Bug-1" as a sub type of "Product Bugs" group and investigate a few
defects as "Product Bug-1", remove "Product Bug-1" from your project, all investigated "Product Bug-1" defects
will be shown as "Product Bug".

[ ![Image](Images/userGuide/managingProjects/defectTypesConf.png) ](https://youtu.be/z8iWXXk6A6Q)


**DEMO DATA**

The "Demo Data" tab allows to generate demo data on the project.

The generated data could demonstrate how the launches, filter and dashboard will look. On the other hand, demo data could be 
modified or removed without any affect of your real objects.

[ ![Image](Images/userGuide/managingProjects/demoData.png) ](https://youtu.be/YGBZfCvfdVw)


### Management of users on the project

On Members page of a particular project users with appropriate role are able to invite another persons.

Permissions: 

User with Administrator role and users with project role PROJECT_MANAGER or LEAD.


**INVITE USER ON PROJECT**

To invite a user on the project "Members" page, perform the following steps:

1. Login into Report Portal instance as with PROJECT_MANAGER or LEAD project role.

2. Click the "Members" icon on the project page.

3. Click "Invite" tab. 

4. "Invite new member to the project" form will appear.

5. Enter email address of user in case he/she is not present in Report Portal data base
 or enter his/her login name.
 
6. In case user is already available in Report Portal, his/her name will appear in the suggestion list.
If not, Admin should enter correct email address.

7. Select an appropriate role.

8. Click 'Invite'.

9. In case user user is already available in Report Portal s/he will be assigned to the project
If not, the letter with invitation link will be sent to user email address.

10. The user will receive an email with the link to the registration. 
When the user clicks the link, he/she will see a registration form.

11. The user needs to fill in the registration form and click the "Register"
button to complete the registration. 

12. The user will be assigned to the project that invitation was sent from, and to "Personal Project" with the PROJECT
 MANAGER project role. 

[ ![Image](Images/userGuide/manageUsers/inviteUserFromProjectMembersPage.png) ](https://youtu.be/BLI-IlTkSgI)


**PROJECT ROLE**

Every user is given a specific Project role within a specific project.

Depends on the role, user able or not able perfom some actions. For more details, please see the Permissions map below

There are 4 possible Project roles in Report Portal:

- PROJECT MANAGER
- LEAD
- MEMBER
- CUSTOMER

>**Note:**
Administrator has all privileges on the project.


**EDIT PROJECT ROLE** 

To edit project role, perform the following steps:

1. Login into Report Portal as a user with PROJECT_MANAGER or LEAD project role.

2. Click the "Members" icon on the project page.

3. Select a new value from the "Project Role" drop-down for the user

4. The new project role will be automatically saved.

[ ![Image](Images/userGuide/manageUsers/editProjectRoleFromProjectMembersPage.png) ](https://youtu.be/aH1viL0FFlw)


**UNASSIGN USER FROM PROJECT**

Depends on project needs the assignment could be removed. 
To unassign he assignment for user on the project, perform the following steps:

1. Login into Report Portal as a user with PROJECT_MANAGER or LEAD project role.

2. Click the "Members" icon on the project page.

3. Find the required member

4. Click 'Unassign' button for the user.

5. Confirm the action in the popup.

6. User will be unassigned from the current project but stays in the system.


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
Invite user, Assign/Unassign internal user to/from the project, change user's role on a project actions can be done for a user 
with similar and lower role only.