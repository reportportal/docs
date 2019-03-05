## Project configuration

Projects in ReportPortal have separate spaces. 
To see the list of available projects and open a project, click the drop-down list 
in the top left corner of the page.

ReportPortal supports customization of the default settings.

Permission: 
Users with the Administrator role can edit project settings on the project "Settings" page in Management Board 
and in the Project space. Users with the PROJECT_MANAGER or LEAD roles can edit the settings on the project space only.

### Project settings

To go to the project settings page, click the "Settings" icon in the header of the page.

The project configuration page will be opened.

The project settings are divided into five tabs: "General", "Notifications", "Bug Tracking
System", "Defect Types" and "Demo Data".

**GENERAL SETTINGS** 

The "General" tab has the following project parameters displayed:

- Name – is a disabled field as the project name cannot be changed.

- Launch inactivity timeout - this parameter specifies the scheduled time
    for a job to interrupt inactive launches. There are six options: 1 hour, 3
    hours, 6 hours, 12 hours, 1 day, 1 week.

- Keep logs - this parameter specifies how long the system will keep old
    logs in launches. Related launche structures will be saved, in order to keep
    statistics. There are four options: 2 weeks, 1 month, 3 months, 6 months.

- Keep screenshots - this parameter specifies how long to keep screenshots
    in the system. There are five options: 1 week, 2 weeks, 3 weeks, 1 month, 3
    months.

- Auto-Analysis - this parameter allows activating auto-analysis on the
    project. ON - analysis will start as soon as any launch is finished, OFF - analysis will not start automatically, but can be invoked manually.

[ ![Image](Images/userGuide/managingProjects/generalConf.png) ](https://youtu.be/GsBGyhj-V6s)

> **Note:**
Users with MEMBER or CUSTOMER project roles do not have permissions to edit project settings, They can only to view them.


**CONFIGURE EMAIL NOTIFICATION**

The "Notifications" tab provides the administrator the ability to activate e-mail notifications on the project.

ReportPortal provides a way to add multiple rules with specific conditions. The Notification rule should be unique per project, have a unique parameter set, and specify recipients. For Example: In case, Launch names, tags).

Permissions: 
Users with Administrator an role can configure "Notifications" in Management Board.
Users with PROJECT_MANAGER or LEAD roles can edit the settings on the project space only.

To do that, perform the following steps:

1. Login to the ReportPortal.

2. Navigate to the Project -\> Project "Settings" page.

3. Open the "Notifications" tab and select "ON" from the "E-mail notifications" drop-down list.

4. An e-mail notification settings form will appear.

5. Enter your email into the "From" field. This email will be used as notification sender.

6. Select recipients. To do that, start typing any symbols into "Recipients" field.
You can select an item from the auto-complete tool-tip using the
keyboard (use the "Up" and "Down" arrows and "Enter" button). You can also enter a custom email into the "Recipients" field. To add a custom
email, just enter the email address and press "Enter".

7. The "Launch owner" is selected by default. Uncheck "Launch owner" to exclude
him/her from the notification.

8. Select "In Case" setting. To do that, select one of the following options from the "In Case" drop-down.

9. Select launches (optional). To do that, start typing any symbols into the "Launch names" field.
You can select an item from the auto-complete tool-tip using the "Up" and "Down" arrows and clicking "Enter" on the keyboard. This is an alternate way you can add a new launch name that does not exist on the project. Several launches names can be selected; the recipients will receive notifications, when each of them finishes.

10. Then Select tags (optional). To do that, start typing any symbols into the "Tags" field. The system
will suggest the results in the drop-down, after at least 1 symbol is provided. It is also possible to add a new tag (that does not exist on the project). Several tags can be selected at once; the corresponding recipients will receive notifications about the
launches that have all the specified tags.

11. Add more rules, if needed. Each Notification rule should be unique.

12. After you configure all the options, click the "Submit" button.

13. The system will activate the "Email notification" option. After the launch
is finished, the recipients will receive a notification via email.

[ ![Image](Images/userGuide/managingProjects/notificationConf.png) ](https://youtu.be/i2aOBhd3NKU)

>**Note:**  
Users with a MEMBER or CUSTOMER project role will not have the capability to edit the project settings, however they do have the permissions to view them.

**BUG TRACKING SYSTEM**

The "Bug Tracking System" tab can allow the project to connect to a bug tracking system such as JIRA or RALLY. 

For more information on this topic, please refer to [Integration with bug tracking systems](/docs/Integration-with-bug).

**CREATE CUSTOM DEFECT TYPES**

The "Defect Types" tab allows users with permissions to create custom defect types as subtypes of default defects on the project.

After Instalation the ReportPortal by default sets-up the following defect types groups:

>   *To investigate* - means that no investigation was performed on this defect
>   yet.

>   *Product Bug* - defect was investigated and a production bug was found as a
>   cause for this test failure.

>   *Automation Bug* - defect was investigated and an the automation test is not
>   correct.

>   *System Issue* - defect was investigated and it turns out that it is a system-level
>   issue, like thr app crashed and caused the test to fail.

>   *No Defect* - defect was investigated and defined as not a defect.

ReportPortal allows the use of existing defect types (Product Bug, Automation Bug, System Issue, No Defect) and or to create custom ones on project settings page.

To create custom defect types, perform the following steps:

1. Login into ReportPortal.

2. Navigate to Projects -\> Project "Settings" page.

3. Open "Defect Types" tab 

4. Click "Add Defect Type" button under any default defect type

5. Add new defect type form will appear 

6. Enter "Defect name" and "Abbreviation", select color for defect presentation on the launches grid and widgets.  

7. Submit form. You will see an added defect type on the chart preview.

Add more custom defects, if you need. The system allows to add up to ten subtypes of each default defect type.

Now you can investigate found defects as default Product Bug/Automation Bug/System Issue/No Defect or custom defects. All of them will be available to select on Defect Type editor.
For more information refer to the [Investigation of failure](/docs/Work-with-reports>Investigation-of-failure) topic.

Note: Default defects cannot be modified and or deleted from the system. Custom defect types can be deleted at any time.

In this case, the system will set parent defect types to all defects previously investigated as just deleted custom defects and update statistics in all launches where deleted a defect was present.
For example, if you create custom "Product Bug-1" as a sub type of "Product Bugs" group and investigate a few
defects as "Product Bug-1", then remove "Product Bug-1" from your project, all investigated "Product Bug-1" defects
will be shown as "Product Bug".

[ ![Image](Images/userGuide/managingProjects/defectTypesConf.png) ](https://youtu.be/z8iWXXk6A6Q)


**DEMO DATA**

The "Demo Data" tab provides a way to generate demo data on the project.

The generated data could demonstrate how the launches, filter and dashboard will look. On the other hand, demo data could be 
modified or removed without any affect of your real objects.

[ ![Image](Images/userGuide/managingProjects/demoData.png) ](https://youtu.be/YGBZfCvfdVw)


### Management of users on the project

On the Members page of a particular project, users with the appropriate roles are able to invite new members.

Permissions: 

User with Administrator role and users with project role PROJECT_MANAGER or LEAD.


**INVITE USER ON PROJECT**

To invite a user on the project "Members" page, perform the following steps:

1. Login into ReportPortal instance as with PROJECT_MANAGER or LEAD project role.

2. Click the "Members" icon on the project page.

3. Click "Invite" tab. 

4. "Invite new member to the project" form will appear.

5. Enter the email address of the user in case he/she is not present in the ReportPortal database
 or enter his/her login name.
 
6. In case the user is already available in the ReportPortal, his/her name will appear in the suggestion list.
If not, the Admin should enter correct email address.

7. Select an appropriate role.

8. Then Click 'Invite'.

9. In case the user user is already available in ReportPortal s/he will be assigned to the project
If not, the letter with invitation link will be sent to user email address.

10. The user will receive an email with the link to the registration. 
When the user clicks the link, he/she will see a registration form.

11. The user needs to fill in the registration form and click the "Register"
button to complete the registration. 

12. The user will be assigned to the project that the invitation was sent from, and to "Personal Project" with the PROJECT
 MANAGER project role. 

[ ![Image](Images/userGuide/manageUsers/inviteUserFromProjectMembersPage.png) ](https://youtu.be/BLI-IlTkSgI)


**PROJECT ROLE**

Every user is given a specific Project role within a specific project.

Depends on the role, the user is able or not able perfom some actions. For more details, please see the Permissions map below

There are 4 possible Project roles in ReportPortal:

- PROJECT MANAGER
- LEAD
- MEMBER
- CUSTOMER

>**Note:**
Administrator has all privileges on the project.


**EDIT PROJECT ROLE** 

To edit project role, perform the following steps:

1. Login into the ReportPortal as a user with PROJECT_MANAGER or LEAD project role.

2. Then click the "Members" icon on the project page.

3. Select a new value from the "Project Role" drop-down for the user

4. The new project role will be automatically saved.

[ ![Image](Images/userGuide/manageUsers/editProjectRoleFromProjectMembersPage.png) ](https://youtu.be/aH1viL0FFlw)


**UNASSIGN USER FROM PROJECT**


Depending on project needs the assignment could be removed. 
To unassign he assignment for user on the project, perform the following steps:

1. Login into the ReportPortal as a user with PROJECT_MANAGER or LEAD project role.

2. Click the "Members" icon on the project page.

3. Find the required member

4. Click 'Unassign' button for the user.

5. Confirm the action in the popup.

6. The user will be unassigned from the current project but will stay in the system.


### Permissions Map

| **Action**\\**Account Role**                                                |**ADMIN**      |**USER**       |**USER**| **USER**       | **USER**           | **USER**         | **USER**             |
|-----------------------------------------------------------------------------|---------------|-----------------|------|----------------|--------------------|------------------|----------------------|
| **Action**\\**Project Role**                                                |               |**PROJECT MANAGER**|**MEMBER** (owner)|**MEMBER** (not owner)|**OPERATOR**|**CUSTOMER** (owner)|**CUSTOMER** (not owner)|
| Have access to Management Board                                             | \+            |                 |                |                   |       |                  |                      |
| Create Project                                                              | \+            |                 |                |                   |       |                  |                      |
| Delete project                                                              | \+            |                 |                |                   |       |                  |                      |
| Update Project Settings                                                     | \+            | \+              |                |                   |       |                  |                      |
| See Project Settings                                                        | \+            | \+              | \+             | \+                | \+    | \+               | \+                   |
| Create User                                                                 | \+            |                 |                |                   |       |                  |                      |
| Invite User                                                                 | \+            | \+              |                |                   |       |                  |                      |
| Delete User                                                                 | \+            |                 |                |                   |       |                  |                      |
| Assign/Unassign internal user to/from the project                           | \+            | \+              |                |                   |       |                  |                      |
| Change user's role on a project                                             | \+            | \+              |                |                   |       |                  |                      |
| See list of project members                                                 | \+            | \+              | \+             | \+                | \+    |                  |                      |
| Edit own account                                                            | \+            | \+              | \+             | \+                | \+    | \+               | \+                   |
| Edit, delete launch, test item                                              | \+            | \+              | \+             |                   |       | \+               |                      |
| Manage launches (force finish, merge)                                       | \+            | \+              | \+             |                   |       | \+               |                      |
| Move launch to debug/default mode                                           | \+            | \+              | \+             |                   |       |                  |                      |
| Analyse launches (start "Analysis" and "Match issues" manually)             | \+            | \+              | \+             | \+                | \+    | \+               | \+                   |
| Manage filters, widgets, dashboards (create, edit, delete, share)           | \+            | \+              | \+             | \+                | \+    | \+               | \+                   |
| Read data                                                                   | \+            | \+              | \+             | \+                | \+    | \+               | \+                   |

 
>**Note:**
Invite user, Assign/Unassign internal user to/from the project, change user's role on a project actions can be done for a user 
with similar and lower role only.
