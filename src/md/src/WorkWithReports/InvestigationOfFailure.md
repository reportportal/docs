## Investigation of failure

### Defect types and comments

Report Portal provides the possibility to investigate the results of your runs. The investigation includes set the 
appropriate defect type of failed items, post defect for them or link the id of defect that is already available
in the bug tracking system. 

Using defect editor you can choose the real reason for your failure and provide the comment for this fail.

When a defect is found in a test, it should be investigated and proper defect type should be assigned to it, 
in order to have accurate statistics on test runs. You will be able to change a defect type for a test and mark it as Product Bug/Automation Bug/System Issue/No Defect at any time.

Permission: All users on the project despite their role.

To change a defect type, perform the following steps:

1. Login into the Report Portal instance.

2. Navigate to the Step level of the launch.

3. Click on the defect label in the "Defect Type" column or small pencil icon.

4. 'EDIT DEFECT TYPE' modal window will appear.

5. A proper defect type can be selected from the Defect type drop-down. Also, you
can add a comment here, which should be no more than 255 symbols long. Mark up can be used to make the comment more beautiful, to add clickable links and images.

The available defect types are described below:

>   *To investigate* - means that no investigation was performed on this defect
>   yet.

>   *Product bug* (default and custom) - defect was investigated and production bug found as a
>   cause for this test failure.

>   *Automation bug* (default and custom) - defect was investigated and automation test is not
>   correct.

>   *System issue* (default and custom) - defect was investigated and it turns out that system-level
>   issue, like app crash, caused the test to fail.

>   *No defect* (default and custom) - defect was investigated and defined, that it's not a defect.



After clicking on the tick button, the comment and the defect type will be saved for a selected item.

Report Portal allows editing defects in bulk.

To edit the defect type and comment for some item simultaneously, perform the next steps:

1. Login into Report Portal instance

2. Navigate to the Step level of the launch.

3. Select the required test items by click on their checkboxes

4. Open 'Actions' list

5. Click "Edit Defects" option

6. Select an appropriate defect type and a comment (if necessary) and save it.

>**Note:**
The 'Replace comments' option is selected by default. So, the same comment will be added to all items.
Initial comments are removed in case you change defect type only ('Comments' is not filled in) via bulk operation.


Also, you can change a defect type at the logs level.

[ ![Image](Images/userGuide/analyzeLaunches/analyze_launches.png) ](https://youtu.be/Nf60EPDX3Co)


### Post bug to Bug Tracking System

Report Portal allows us to connect JIRA or RALLY systems and post a bug to them.

Before post, a bug, make sure that the bug tracking systems are connected to the
project on the project settings page. To check it, please go to [Integration with Bug Tracking
System](/docs/Getting started/Integration with Bug Tracking Systems).

In case the bug tracking system is not connected, the "Post bug" button will be disabled.

Permissions: The functionality is available for all users and does not depend on their project role.

**POST BUG TO JIRA**

In order to post a bug to JIRA, perform the following steps:

1. Navigate to the "Launches" page.

2. Drill down to the Step or Log level of any failed item.

3. Click the "Post Bug" button.

4. Post bug pop-up form appears with a selected set of fields: required (with asterisk mark) and optional; 
include data and credentials

5. Fill in the fields with correct information

6. Select include data options or leave the default.

7. Fill in credentials of your JIRA account and click 'Post' button

8. The bug will be posted to the JIRA and link to the bug will be displayed on the
Step and Log levels of the failed item.

9. Hover the mouse over the bug and you will see issue status and summary on
tool-tip.
 
10. To view data of just submitted bug in JIRA, click the ticket. All selected data is present in the bug tracking system.
Including logs, attachments, and comments.

11. To get to the item in Report Portal for which the bug was posted, click backlink 'Link to defect'. 

Sometimes it is necessary to add one bug to some items via bulk operation. To do this:

1. Go to Step level of the launch

2. Select some failed items by click on their checkboxes

3. Expand the 'Actions' list on the top of the page

4. Click 'Post Bug' option

5. Fill in the fields with correct information

6. Fill in credentials of your JIRA account and click 'Post' button

7. One ticket with the bug is added to JIRA as for single bug posting. The identifier of the JIRA ticket is added to all selected items. 
Keep in mind that data of Report Portal items are excluded in a bulk posting.

8. Hover the mouse over the bug and you will see issue status and summary on tool-tip.

[ ![Image](Images/userGuide/postBugToBTS/postBugJira.png) ](https://youtu.be/fuk0kVRN7oI)

>**Note:**
>in case of bulk operation Include data option with be missed in Post Bug pop up. So, logs, comments, and attachments will not
>be present in the JIRA ticket.


**POST BUG TO RALLY**

In order to post a bug to RALLY, perform the following steps:

1. Navigate to the "Launches" page.

2. Drill down to the Step or Log level of any failed issue.

3. Click the "Defect editor" link or pencil icon in the "Defect Type" column. 

4. You will see the defect editor block. Click the "Post Bug" icon from the editor header.

5. Post bug pop-up form should appear.

6. Fill in the form and click the "Submit" button.

7. The bug will be posted to the RALLY and the link to the bug will be displayed on the Step and log levels of the failed item.

Hover the mouse over the bug and you will see issue status and summary on
tool-tip.

Also, you can post a bug on the Log level.


### Add the link of the existed defect.

This functionality allows attaching the ticket ID of the already posted defect to test item in Report Portal

Depends on the used bug tracking system the procedure of adding a link could be different.

**ADD LINK TO JIRA ISSUE**

To add a link to existing JIRA issue to Report Portal, perform the following steps:

1. Navigate to the "Launches" page.

2. Drill down to the Step or Log level of any failed item.

3. Click the "Defect editor" link or pencil icon in the "Defect Type" column. You will see the defect editor block. Click on arrow on the "Save" button" and choose the "Save and Link issue".

4. Link issue popup form should appear.

5. Select the JIRA project, input link to issue and issue ID, add more issues (if need).

6. Click the "Add" button. The link to the bug will be shown on the
    Step and Log levels of the failed item.
    
There are several ways to link an issue to Jira defect
* via defect editor on Step and Log view;
* via Action menu on Step level (Actions > Link issue);
* via "Link issue" on Log level;

>**Note:**  
Project name in JIRA will be missing if only one JIRA is configured
on the current project.

[ ![Image](Images/userGuide/addLinkToExistingBug/addLinkToExistingBugJira.png) ](https://youtu.be/sKp632zgYNk)


**ADD LINK TO RALLY ISSUE**

To add a link to existing RALLY issue to Report Portal, perform the following steps:

1. Navigate to the "Launches" page.

2. Drill down to the Step or Log level to any failed item.

3. Click the "Defect editor" link or pencil. Click on arrow on the "Save" button" and choose the "Save and Link issue".

4. Link issue popup form should appear.

5. Go to the RALLY and copy link to issue.

9. Input link to issue and issue ID, add more issues (if need).

7. Click the "Add" button. The link to the bug will be shown on the
    Step and Log levels of the failed item.

There are several ways to link an issue to Rally defect:
* via defect editor on Step and Log view;
* via Action menu on Step level (Actions > Link issue);
* via "Link issue" on Log level;

To get an update on the defect's status, bring the cursor to the ticket. The tooltip will appear with actual information.

If you want to remove a link to BTS, you can click the cross on a link label or unlink an issue from Defect Editor. For bulk, unlink operation use Actions Menu on Step Level.
