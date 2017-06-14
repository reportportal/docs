Integration with Bug Tracking Systems
-------------------------------------

The integration with bug tracking system can be required in case the project collects defects in the separate tracking tool.
Integration provides exchange of information between Report Portal and the bug tracking system, such as posting bugs and loading bugs,
getting updates on their statuses.
As for now, Report Portal allows to set up a connection to JIRA or RALLY system.

Administrator can configure Bug Tracking System on the project settings page in Management Board.

User with PROJECT MANAGER or LEAD project role can configure Bug Tracking System on the project settings page.


### Integration with JIRA

**Set up connection to JIRA**

Report Portal allows to connect one or multiple JIRA projects to one project in Report Portal.

To integrate JIRA to the Report Portal, perform the following steps:

1. Login into Report Portal instance as user with LEAD or PROJECT MANAGER role on the project.

2. Open Settings page of project, select 'Bug Tracking System' tab

3. Form to set up connection to JIRA appears. Form contains

```
                      'Link to BTS': <valid URL of bug tracking system>
              'Project name in BTS': <project key in bug tracking system>
               'Authorization Type': Basic (predefined)
                     'BTS Username': <JIRA user name>
                     'BTS Password': <JIRA user password>
```
4. Fill in required fields and click 'Submit' button.
Confirmation message will be shown in status bar.

Keep in mind, the set of fields depends on bug tracking system.

Another JIRA project could be connected to Report Portal project. To do that, click "Add New Instance" link and fill in
new JIRA project properties. 

Steps above are enough to load bug functionality and to getting updates on bug's statuses.

To have a possibility to post bugs to bug tracking system, it is necessary to select and /or submit default properties for
issue form.


**Configuration of fields of post bug form**

"Default properties for issue form" (list of fields provided for bug form in JIRA) will appear on submit the form above.
Required in JIRA fields are marked with asterisk. They are checked by default and disabled for unchecking.

To configure fields for post bug form in JIRA:

1. Check wanted fields. The checked fields will be shown on the post bug form.

2. Fill in the required fields and the other checked fields (if necessary), and
click "Submit" button. The system will save the entered information and hide the fields that are not checked. 
All the saved information on the checked fields will be predefined, when you will post a bug to JIRA.

**Edit JIRA properties**

The settings of JIRA connection can be updated. To do that, 

1. Click 'Edit' icon. The JIRA properties will become editable.

2. Make changes in JIRA Properties form.

 If "Link to BTS" and "Project name in BTS" fields weren’t changed – content of "Default properties for issue form" will be 
kept and shown after the new data validation is completed.

 If "Link to BTS" and "Project name in BTS" fields were changed - the system will reset the content 
 of "Default properties for issue form" and show the default set of fields.

**Update fields of post bug form**

To add additional fields to the post bug form:
1. Click 'Update' button under the "Default properties for issue form". 

   You will see the list with all available fields for post bug form. 
   
2. Select desired fields

3. Click 'Submit' button. 
   Confirmation message will be shown in status bar. "Default properties for issue form" will be updated.
   Previously selected fields are checked as well.

To remove the fields from the post bug form:
1. Uncheck desired fields 

2. Click "Submit" button. 
"Default properties for issue form" will be updated.

Also, fields can be filled in with some data. 

For instance, add general data to 'Summary' field ("UI:")

Or select a value from list provided, e.g., select appropriate version name for 'Fix Version/s' or 'Affects Version/s' fields.

Post bug form will contan selected data. So, it will be not necessary in future to type or select general information again and again.


### Integration with RALLY

To integrate RALLY to the project, perform following steps:

1. Login into Report Portal instance as Administrator.

2. Navigate to the Management Board -\> "Projects" page.

3. Open the projects "Settings" page -\> "Bug Tracking System" tab.

4. [ ![Image](Images/pic_235.jpg) ](Images/pic_235.jpg)

5. Select RALLY in the "Bug Tracking System" drop-down and fill in RALLY
    properties form, which contains the following required fields.

6. [ ![Image](Images/pic_35.jpg) ](Images/pic_35.jpg)

7. Click "Submit" button. "Default properties for issue form" (list of fields provided on bug form in RALLY) will appear. Required in RALLY fields
    are marked with asterisk. They are checked by default and disabled for
    unchecking.

8. [ ![Image](Images/pic_36.jpg) ](Images/pic_36.jpg)

9. Check wanted fields. The checked fields will be shown on the post bug form.

10. Fill in the required fields and the other checked fields (if necessary), and
    click the "Submit" button. The system will save the entered information
    and hide the fields that are not checked. All the saved information on the
    checked fields will be predefined, when you post a bug to RALLY.

11. [ ![Image](Images/pic_37.jpg) ](Images/pic_37.jpg)


**Update list of issue fields**

To add additional fields to the post bug form, click "Update" button under the "Default properties for issue form". You will see the
complete bug fields list. Select desired fields and save changes. "Default
properties for issue form" will be updated.

To remove any default fields, uncheck desired fields and click "Submit"
button under the "Default properties for issue form". "Default properties for issue form" will be updated.


**Remove RALLY**

To remove RALLY from project settings, use "Remove project" button.

[ ![Image](Images/pic_38.jpg) ](Images/pic_38.jpg)


**Edit RALLY properties**

To edit RALLY properties, click "Edit" button. The RALLY properties will become
editable.

[ ![Image](Images/pic_39.jpg) ](Images/pic_39.jpg)

Make changes in RALLY properties form.

>   If "Link to BTS" and "Project name in BTS" fields weren’t changed – content of "Default properties for issue form" will be kept and shown
after the new data validation is completed.

>   If "Link to BTS" and "Project name in BTS" fields were changed - the system will reset the content of "Default properties for issue form" and show
the blank form.

