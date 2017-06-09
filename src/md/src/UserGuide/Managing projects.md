Managing projects
-----------------

Users with the Administrator role have access to the Report Portal
administration, called Management Board.

In Management Board you can:

- Manage projects: create a project, delete a project, update project settings.

- Manage users: create a user, invite a user to Report Portal, delete a user,
update a user project role, assign a user to projects/Unassign a user from
projects.

To go to the Management Board page, click the username drop-down in the
right header of the page and select the "Administrate" option.

[ ![Image](Images/pic-Admin.jpg) ](Images/pic-Admin.jpg)

All existing projects are displayed on the "Projects" page. Projects are
divided into 2 sections: "Internal Projects" and "Personal Projects".
 
[ ![Image](Images/pic_11.jpg) ](Images/pic_11.jpg)

For each project, the following information is displayed:

- Project name - the link to the detailed project information
- "Delete" button, appears on hovering (applicable for Internal projects only)
- Number of assigned team members
- Number of launches
- Last run date
- "Settings" icon – link to the project settings page
- "Members" icon - link to the project members list
- "Open" icon – link to the project in Report Portal (if you are assigned
    to this project), or "Assign to project" (if you are not assigned to this
    project).

**Projects Navigation – Sorting and Search**

By default, projects are sorted by the name.

You can sort projects using the buttons from the "Sort by" section at the top.
The sorting can be performed by: Creation date, Name.

To find a project quickly, type 3 or more symbols of the project name into the
"Search" field.

[ ![Image](Images/pic_12.jpg) ](Images/pic_12.jpg)

### Create projects

To create a new project, perform the following steps:

1. Login into Report Portal instance as Administrator.

2. Navigate to Management Board -\> "All Projects" page.

3. Click "Add Project" button.

   [ ![Image](Images/pic_13.jpg) ](Images/pic_13.jpg)

4. Enter a project name and click "Save" button.

   [ ![Image](Images/pic_14.jpg) ](Images/pic_14.jpg)

5. The new project is saved with the default settings: Launch inactivity timeout - 1 day, Keep logs - 3 months, Keep screenshots - 2 weeks, Auto Analysis - OFF.

   [ ![Image](Images/pic_15.jpg) ](Images/pic_15.jpg)

**Note:**  
The project name should be 3-256 symbols long. It can include Latin and numeric
characters, as well as underscores and dashes. The name should be unique and
cannot be changed after saving.

### Delete projects

To delete a project, perform the following steps:

1. Login into Report Portal instance as Administrator.

2. Navigate to the Management Board -\> "All Projects" page.

3. Hover the cursor to the project preview. "Delete" icon will appear.

   [ ![Image](Images/pic_16.jpg) ](Images/pic_16.jpg)

4. Click "Delete" icon. A warning pop-up message will appear:

   [ ![Image](Images/pic_17.jpg) ](Images/pic_17.jpg)

5. Click "Delete". The project will be deleted from Report Portal.

**Note:**  
PERSONAL PROJECTS cannot be deleted from the system.

### Project settings

User with Administrator role can edit project settings 
on the project "Settings" page in Management Board.

To go to the project settings page, click the "Settings" icon in the
project preview on "All Projects" tab.

[ ![Image](Images/pic_235.jpg) ](Images/pic_235.jpg)

The project configuration page will opened.

[ ![Image](Images/pic_69.jpg) ](Images/pic_69.jpg)

The project settings divided into five tabs: "General", "Notifications", "Bug Tracking
System", "Defect Types" and "Demo Data".
 
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

**Note:**
Not Administrator - user with PROJECT MANAGER or LEAD project role has the
possibility to edit project settings on the project "Settings"
page in Report Portal.

[ ![Image](Images/pic_28.jpg) ](Images/pic_28.jpg)

### Configure Email Notification

The "Notifications" tab provides the possiblity to activate e-mail notifications on the project.

[ ![Image](Images/pic_239.jpg) ](Images/pic_239.jpg)

User with Administrator role can configure "Notifications" in Management Board.

Report Portal allows to add multiple rules with specific conditions. Notification rule should be unique per project (has unique parameter set: Recipients, In case, Launch names, tags).

To do that, perform the following steps:

1. Login into Report Portal instance as Administrator.

2. Navigate to Management Board -\> "All Projects" page -\> Project "Settings" page.

   [ ![Image](Images/pic_235.jpg) ](Images/pic_235.jpg)

3. Open "Notifications" tab and select "ON" from the "E-mail notifications" drop-down list.

   [ ![Image](Images/pic_19.jpg) ](Images/pic_19.jpg)

4. Email notification settings form will appear.

   [ ![Image](Images/pic_20.jpg) ](Images/pic_20.jpg)

5. Enter your email into "From" field. This email will be used as notification sender.

6. Select recipients. To do that, start typing any symbols into "Recipients" field.
You can select an item from the auto-complete tool-tip using the
keyboard (use the "Up" and "Down" arrows and "Enter" button). You can also enter a custom email into the "Recipients" field. To add a custom
email, just enter the email address and press "Enter".

   [ ![Image](Images/pic_21.jpg) ](Images/pic_21.jpg)

7. The "Launch owner" is selected by default. Uncheck "Launch owner" to exclude
him/her from the notification.

   [ ![Image](Images/pic_22.jpg) ](Images/pic_22.jpg)

8. Select "In Case" setting. To do that, select one of the following options from the "In Case" drop-down.

   [ ![Image](Images/pic_23.jpg) ](Images/pic_23.jpg)

9. Select launches (optional). To do that, start typing any symbols into the "Launch names" field.
You can select an item from the auto-complete tool-tip using the
keyboard (use the "Up" and "Down" arrows and "Enter"). Also you can add a new launch name (that does not exist on the project). Several launches names can be selected; the recipients will receive
notifications, when each of them finishes.

   [ ![Image](Images/pic_25.jpg) ](Images/pic_25.jpg)

10. Select tags (optional). To do that, start typing any symbols into the "Tags" field. The system
suggests the results in the drop-down, after at least 1 symbol is provided. Also you can add a new tag (that does not exist on the project). Several tags can be selected; the recipients will receive notifications about
launches, that have all specified tags.

   [ ![Image](Images/pic_26.jpg) ](Images/pic_26.jpg)

11. Add more rules, if you need. Notification rules should be unique.

   [ ![Image](Images/pic_240.jpg) ](Images/pic_240.jpg)

12. After you configure all options, click "Submit" button.

13. The system will activate the "Email notification" option. After the launch
is finished, the recipients will receive a notification via emails.

   [ ![Image](Images/pic_27.jpg) ](Images/pic_27.jpg)

**Note:**  
Not Administrator - user with PROJECT MANAGER or LEAD project role has the
possibility to configure "Notifications" on the project "Settings" page in Report Portal

[ ![Image](Images/pic_28.jpg) ](Images/pic_28.jpg)

### Bug Tracking System

The "Bug Tracking System" tab allows connecting a bug tracking system (JIRA, RALLY) to the project.

[ ![Image](Images/pic_18.jpg) ](Images/pic_18.jpg)

For more information refer to the [Integration with Bug Tracking Systems](#documentation/Integration-with-Bug)
topic.

### Create custom defect types

The "Defect Types" tab allows to create custom defect types as subtypes of default defects on the project.

[ ![Image](Images/pic_255.jpg) ](Images/pic_255.jpg)

By default after Report Portal installation each project contains the following defect types groups:

>   *To investigate* - means that no investigation was performed on this defect
>   yet.

>   *Product Bug* - defect was investigated and production bug found as a
>   cause for this test failure.

>   *Automation Bug* - defect was investigated and automation test is not
>   correct.

>   *System Issue* - defect was investigated and it turns out that system-level
>   issue, like app crash, caused test to fail.

>   *No Defect* - defect was investigated and defined, that its not a defect.

Report Portal allows to use existing defect types (Product Bug, Automation Bug, System Issue, No Defect) or create custom ones on project settings page.

To create custom defect types, perform the following steps:

1. Login into Report Portal instance as Administrator.

2. Navigate to Management Board -\> "Projects" page -\> Project "Settings" page.

   [ ![Image](Images/pic_235.jpg) ](Images/pic_235.jpg)

3. Open "Defect Types" tab 

   [ ![Image](Images/pic_244.jpg) ](Images/pic_244.jpg)

4. Click "Add Defect Type" button under any default defect type

   [ ![Image](Images/pic_247.jpg) ](Images/pic_247.jpg)

5. Add new defect type form will appear 

6. Enter "Defect name" and "Abbreviation", select color for defect presentation on the launches grid and widgets.  

   [ ![Image](Images/pic_245.jpg) ](Images/pic_245.jpg)

7. Submit form. You will see added defect type on chart preview.

   [ ![Image](Images/pic_246.jpg) ](Images/pic_246.jpg)

Add more custom defects, if you need. The system allows to add up to ten subtypes of each default defect type.

Now you can investigate found defect as default Product Bug/Automation Bug/System Issue/No Defect or custom defects. All of them will be available to select on Defect Type editor.
For more information refer to the [Defect types and comments](#documentation/Analyze-launches>defect-types-and-comments) topic. 

Default defects cannot be modified and deleted from the system.

Custom defect types can be deleted at any time.

[ ![Image](Images/pic_248.jpg) ](Images/pic_248.jpg)

In this case, the system will set parent defect type to all defects previously investigated as just deleted custom defect and update statistics in all launches where deleted defect was present.
For example, if you create custom "Product Bug-1" as a sub type of "Product Bugs" group and investigate a few
defects as "Product Bug-1", remove "Product Bug-1" from your project, all investigated "Product Bug-1" defects
will be shown as "Product Bug".

### Demo Data

The "Demo Data" tab allows to generate demo data on the project.

[ ![Image](Images/pic_254.jpg) ](Images/pic_254.jpg)

The generated data could demonstrate how the launches, filter and dashboard will look. On the other hand, demo data could be 
modified or removed without any affect of your real objects.

