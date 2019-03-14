## Integration with bug tracking systems

Integration with a bug tracking system, can be required for projects that collect defects in a separate tracking tool.
Integration provides an exchange of information between ReportPortal and the bug tracking system, such as posting issues and linking issues, getting updates on their statuses. At this time, ReportPortal only allows users to set up and connect to JIRA or RALLY systems.

Permission: The Administrator can configure the Bug Tracking System on the project settings page in the Management Board.

A user with PROJECT MANAGER or LEAD project roles can configure the Bug Tracking System on the project settings page.


### Integration with JIRA

**Set up connection to JIRA**

The ReportPortal allows users to connect one or multiple JIRA projects to one project in the ReportPortal.

To integrate JIRA to the ReportPortal, perform the following steps:

1. Login into ReportPortal instance as a user with LEAD or PROJECT MANAGER roles on the project.
2. Open the Settings page of the project, select the 'Bug Tracking System' tab. The JIRA system is selected by default.
3. The form to set up connection to JIRA is then displayed. The Form contains the following:
```javascript
                      'Link to BTS': <valid URL of bug tracking system>
              'Project name in BTS': <project key in bug tracking system>
               'Authorization Type': Basic (predefined)
                     'BTS Username': <JIRA user name>
                     'BTS Password': <JIRA user password>
```
4. Fill in the required fields and click the 'Submit' button.

A confirmation message will be shown in the status bar.

Keep in mind, the set of fields depends on a bug tracking system.

Another JIRA project could be connected to the ReportPortal project. To do that, click the "Add New Instance" link and fill in
the new JIRA project properties. 

Steps above are enough to link issue functionality and to getting updates on issue's statuses.

To add the functionality of submitting issues to bug tracking system, it is necessary to select and /or submit default properties for the issue form.


**Configuration of fields of post issue form**

The "Default properties for issue form" (list of fields provided for issue form in JIRA) will appear on the submit form above.
The Required fields in JIRA are marked with an asterisk. They are checked by default and disabled by unchecking.

To configure fields for posting issues in JIRA, follow these instructions: 

1. Check desired fields. The checked fields will be shown on the post issue form.

2. Fill in the required fields and the other checked fields as needed, and
click "Submit" button. The system will save the entered information and hide the fields that are not checked. 
All the saved information on the checked fields will be predefined, when you post a issue to JIRA.

Now the project team members with JIRA accounts will be able to submit issues. Options for Post Issue is activated.

[ ![Image](Images/userGuide/bugSystem/addBugSystem.png) ](https://youtu.be/svX2hBdRNmA)


**Edit JIRA properties**

To edit JIRA settings, properties the JIRA connection can be updated, by following these instructions: 

1. Click the 'Edit' icon. The JIRA properties will become editable.

2. Make changes in JIRA Properties form.

 If "Link to BTS" and "Project name in BTS" fields weren’t changed – content of "Default properties for issue form" will be 
kept and shown after the new data validation is completed.

 If "Link to BTS" and "Project name in BTS" fields were changed - the system will reset the content 
 of "Default properties for the issues form" and show the default set of fields.


**Update fields of post bug form**

To add additional fields to the post bug form:
1. Click the 'Update' button under the "Default properties for issue form". 

   You will see the list of all available fields for post bug form. 
   
2. Select the desired fields

3. Click the 'Submit' button. 
   A confirmation message will be shown in the status bar. "Default properties for issue form" will be updated.
   Previously selected fields are checked as well.

To remove the fields from the post issue form:
1. Uncheck the desired fields 

2. Click the "Submit" button. 
"Default properties for issue form" will be updated.

Also, fields can be filled in with some data. 

For instance, add general data to the 'Summary' field ("UI:")

Or select a value from a list provided, e.g., select all appropriate version names for 'Fix Version/s' or 'Affects Version/s' fields.

The "Post issue form" will contain the selected data. So, it will be not necessary in the future to type or select general information again and again.

[ ![Image](Images/userGuide/bugSystem/updateFields.png) ](https://youtu.be/6Urp7kHsO4U)


**Remove JIRA project from ReportPortal settings**

To remove JIRA from project settings:
1. Click the "Remove project" button.

2. Confirm the action in the modal window.

The connection to JIRA will be deleted from ReportPortal. But all created and linked issues will be kept and available on the
ReportPortal pages. Note: At the same time, post and link issue functionalities will become disabled; the status of already submitted issues will no longer be available. 


### Integration with RALLY

**Set up connection to RALLY**

To integrate RALLY to the project, perform following steps:

1. Login into the ReportPortal instance as a user with LEAD or PROJECT MANAGER role on the project.
2. Open the Settings page of project, select 'Bug Tracking System' tab.
3. Select 'RALLY' from 'Bug Tracking System' list.
4. The form to set up the connection to RALLY appears. The form contains:
```javascript
                     Link to BTS : <valid URL of bug tracking system>
               Project name in BTS: <project key in bug tracking system>
               Authorization Type: ApiKey (predefined)
                           ApiKey: <RALLY user apikey>
```
5. Fill in required fields and click 'Submit' button.

A confirmation message will be shown in the status bar.

Steps above are enough to link issue functionality and to getting updates on issue's statuses.

To have a possibility to post issues to bug tracking system, it is necessary to select and /or submit default properties for the
issues form.


**Configuration of fields of post issue form**

The "Default properties for issue form" (list of fields provided for issue form in RALLY) will appear on the submit the form above.
The Required RALLY fields are marked with asterisk. They are checked by default and disabled for unchecking.

To configure fields for the post issue form in RALLY:

1. Select the wanted fields. The checked fields will be shown on the post issue form.

2. Fill in the required fields and the other checked fields (if necessary), and click the "Submit" button. 

The system will save the entered information and hide the fields that are not checked. 
All the saved information on the checked fields will be predefined, when you will post a issue to RALLY.

Now the project team members with JIRA accounts be able to submit issues. Options for Post Issue is activated.

[ ![Image](Images/userGuide/bugSystem/addRally.png) ](https://youtu.be/thkH1Qn4DhQ)


**Edit RALLY properties**

To edit RALLY properties, click the "Edit" button. The RALLY properties will become
editable.

Make changes in the RALLY properties form.

 If "Link to BTS" and "Project name in BTS" fields weren’t changed – the content of "Default properties for issue form" will be kept and 
shown after the new data validation is completed.

 If "Link to BTS" and "Project name in BTS" fields were changed - the system will reset the content of "Default properties for issue 
form" and show the blank form.


**Update fields of post issue form**

To add additional fields to the post issue form:
1. Click the 'Update' button under the "Default properties for issue form". 

   You will see the list of all available fields for post issue form. 
   
2. Select the desired fields

3. Click the 'Submit' button. 
   A confirmation message will be shown in the status bar. "Default properties for issue form" will be updated.
   Previously selected fields are checked as well.

To remove the fields from the post issue form:
1. Uncheck desired fields 

2. Click the "Submit" button. 
The "Default properties for issue form" will be updated.

Fields can also be filled in with some data. 

For instance, add general data to the 'Summary' field ("UI:")

Or select a value from the list provided, e.g., select appropriate version name for 'Fix Version/s' or 'Affects Version/s' fields.

The "Post issue form" will contain the selected data. So, it will be not necessary in future to type or select general information again and again.

[ ![Image](Images/userGuide/bugSystem/updateRallyFields.png) ](https://youtu.be/ugoQvo_Acgo)


**Remove RALLY project from Report Portal settings**

To remove RALLY from project settings:
1. Click the "Remove project" button.

2. Confirm the action in the modal window.

The connection to RALLY will be deleted from ReportPortal. But all created and linked issues will be kept and available on 
ReportPortal pages. Note: At the same time, post and link issue functionalities will become disabled; and status of already submitted issues will not be available as well.
