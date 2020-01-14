## Integrations

Users can reinforce ReportPortal with adding additional integrtions with:

* Jira
* Rally
* Sauce Labs
* E-mail server

Integration confiurations can be added on the global level (for all project on the instance) or on the project level (only for one project). To add integration with external systems, please look information in the section Plugins.

If you have another configuration than others project have or you want to integrate only your project with external system, you should perform the next actions:

1. Login ReportPortal as PROJECT MANGER or ADMIN

2. Go to ProjectSettings > Integrations

3. Click on the one of the integration panel

4. And click button "Unlink and setup manually"

By this action you unlink the current project from the global settings and configure your own integration.

>**Note:**
If you unlink project setting and ADMIN changes global settings for whole instance, your project will use your project settings.

To return global settings, you need to click a button "Resert to global settings".
In this case your settings will be deleted, and integration will use global settings.

You always can reset to the global settings.

### Integration with JIRA

Integration with a JIRA can be required for projects that collect defects in a separate tracking tool. Integration provides an exchange of information between ReportPortal and the JIRA, such as posting issues and linking issues, getting updates on their statuses. At this time, ReportPortal only allows users to set up and connect to JIRA systems.

**Permission:** 
The *Administrator* can upload plugin and make global integrations on the Plugin Tab on Administrative page. Also, the Administrator can unlink project configurations from global. 
The *Project Manager* is able to work only on the project level. He can unlink and re-write global configuration with project ones on Project Settings > Integrations.

#### Add JIRA integrations
**Global JIRA integration**

If  all projects on your instance are using the same Jira  projects, you will be able configure *global integrations* which will be applied on all projects. 

1. Login as ADMIN

2. Go to Administrative > Plugins

3. Click on JIRA plugin pannel

4. Click on "Add integration"

5. Fill and confirm authorization form

6. Choose needed issue type and predefined field for chosen issue

If you needed you can add more integrations, by clicking on "Add integration"

**Project JIRA integration**

If  all projects on your instance are using the same Jira  projects, you will be able configure *global integrations* which will be applied on all projects. 

1. Login as ADMIN or Project Manager

2. Go to Project Settings > Integrations

3. Click on the JIRA integration pannel

4. Click on "Unlink and setup mannually"

5. Fill and confirm authorization form

6. Choose needed issue type and predefined field for chosen issue

If you needed you can add more integrations, by clicking on "Add integration"

>**Note:**

User can add a severall integration, but with different name to the **one JIRA project**.

>**Use case:**
User wants to post to JIRA issues with type **Defect** and **Task** to the project NNN-MMM in Jira. Is it possible?
Yes!
Add two integrations to the project NNN-MMM in Jira with names f.e. "Project -1" and "Project -2". 
Add to the "Project -1" issue type **Defect** and for "Project -2" - issue type **Task**.
While posing issue procedure, choose integration with needed type.

### Authorization configurations

```java
'Integration Name ': <The name which you want to give to your integration> - should be unique
'Link to BTS': <valid URL of bug tracking system>
'Project name in BTS': <project key in bug tracking system>            
'Authorization Type': Basic (predefined)                  
'BTS Username': <JIRA user name>                  
'BTS Password': <JIRA user password>
```

**Some tricks when you create a new connections:**

1.) Verify that the link to JIRA system is correct. There are some variants are possible, for instance: https://jira.company.com/jira https://jiraeu.company.com

2.) Verify the project name in JIRA is correct. Please fill in Project name field with project key value, e.g. project ABC-DEF has key ABCDEF.

3.) Verify username and password data. Make sure, that login name and not email is in the username field. In case all the data above is correct, but the error appears again, check whether user's credentials to JIRA are not expired. As far as JIRA sends the request in html format, we are not able to display the real reason of error. To check and/or resolve the issue, please do the next steps:

*	Open JIRA page
*	Login JIRA with domain credentials using basic authorization (i.e., fill in user's login name and password into the fields)
*	Submit the login form Screen with CAPTCHA should appears
*	Enter the symbols
*	Submit the credentials again
*	Now try to establish the connection to JIRA on ReportPortal project.

4.) SSL instance of JIRA (even cloud version) can be accessed by JIRA API token, used instead of password.
After you have connected Jira and ReportPortal, you can choose an issue type which you will be able to add to Jira during “Post Issue” operation.  Also, user can add a predefined fields that user can fill.

### Configuration of fields of post issue form

The "Configuration" (list of fields provided for issue form in JIRA) will appear on the Integration details. The Required fields in JIRA are marked with an asterisk. They are checked by default and disabled by unchecking.
To configure fields for posting issues in JIRA, follow these instructions:
•	Check desired fields. The checked fields will be shown on the post issue form.
•	Fill in the required fields and the other checked fields as needed, and click "Submit" button. The system will save the entered information and hide the fields that are not checked. All the saved information on the checked fields will be predefined, when you post a issue to JIRA.
Now the project team members with JIRA accounts will be able to submit issues. Options for Post Issue / Link issue  are activated.


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

### Integration with JIRA

Integration with a JIRA can be required for projects that collect defects in a separate tracking tool. Integration provides an exchange of information between ReportPortal and the JIRA, such as posting issues and linking issues, getting updates on their statuses. At this time, ReportPortal only allows users to set up and connect to JIRA systems.

**Permission:** 
The *Administrator* can upload plugin and make global integrations on the Plugin Tab on Administrative page. Also, the Administrator can unlink project configurations from global. 
The *Project Manager* is able to work only on the project level. He can unlink and re-write global configuration with project ones on Project Settings > Integrations.

#### Add E-mail server integrations

You can integrate Report portal with E-mail server. With this integration you will be able to perform such functions as:

- invite new user to the project
- configure notification rules on launch finish


>**Permissions:** user with account role *ADMINISTRATOR* can configure E-mail integration for whole instance or per project.
User with account role *PROJECT MANAGER* can configure E-mail integration only on project where he is assigned on as Project Manager.

**Global E-mail server integration**

To configure Email server for whole instance:

1. Login to the ReportPortal as an ADMIN user
2. Then open the list on the right of the user's image.
3. Click the 'Administrative' link 
4. Click the 'Plugins' from left-hand sidebar
5. Click on the'Email Server' tab.
6. Click on Add new integration
6. The next fields should be present:
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

Example of email server configuration for Gmail email server (detailed info could be found [here](https://support.google.com/a/answer/176600?hl=en))
 
1. Fill the form with next data:
```javascript
                   Host: smtp.gmail.com
               Protocol: SMTP
    Default sender name: Report Portal
                   Port: 465
          Authorization: ON
               Username: <user_email_address>
               Password: <user_email_password>
                    SSL: checkbox should be checked.
```
2. Click the 'Submit' button
3. A confirmation message in the status bar should be shown.

[ ![Image](Images/userGuide/gettingStarted/gmail.png) ](https://youtu.be/0919itAaixk)

Example of an email server configuration for a Yandex email server (detailed info can be found [here](https://yandex.com/support/mail-new/mail-clients.html))
 
1. Fill in the form with the next data set:
```javascript
                   Host: smtp.yandex.com
               Protocol: SMTP
    Default sender name: Report Portal
                   Port: 465
          Authorization: ON
               Username: <user_email_address>
               Password: <user_email_password>
                    SSL: checkbox should be checked.
```
2. Click the 'Submit' button
3. A confirmation message in the status bar should be shown.

After E-mail server integration adding, the configration will be applyed to all projects on the instance.

**Project E-mail integration**

If E-mail integration has not be added on project, or if Project Manager or Admin want to specified a special configurations for special project, they can confugure E-mail server in the project settings.

To configure Email server for one single project instance:

1. Login to the ReportPortal as an ADMIN or PM user
2. Then click on Project settings icon.
3. Click on Integrations tab.
4. Click on the'Email Server' tab.
5. Click on the button "Unlink & Setup Manually"
6. The next fields should be present:
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

>**Note:** In case you unlink your project settings from Global settings, for the chosen project
