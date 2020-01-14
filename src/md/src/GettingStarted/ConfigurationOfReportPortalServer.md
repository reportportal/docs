## Authorization configuration

ReportPortal Admin can configure an easy authorization on the instanse. From the box we provide OAuth with:

* GitHub
* LDAP
* Active Directory
* SAML (in progress)

### GitHub Authorization

To setup access with GitHub auth:

1. Login to the ReportPortal as an ADMIN user
2. Open the list on the right of the user's image.
3. Click the 'Administrative' link 
4. Click the 'Server Settings' from the left-hand sidebar
5. Go to the 'Authorization Configuration' tab
6. Then change the switcher position of 'Activate GitHub Authorization' to ON
7. The Next fields should appear:

  'Client ID': <value_of_clientId>
  'Client Secret': <value_of_clientSecret>
  'Add GitHub Organization' button-link: (optional)

Note, in case the 'Organization Name' is not added, all GitHub users will have access to the ReportPortal instance.
If the 'Organization Name' is specified, only users of this organization will have an access to ReportPortal instance.

If the Name of GitHub organization is not validated, verify that the name is correct.

Example of GitHub auth configuration:
 Fill in the form:
 ```javascript 
               'Client Id': 8767988c424a0e7a2640
           'Client Secret': ef22c9f804257afaf399a2dada7c8f22dee5fd1b
       'Organization Name': reportportal (optional)
  ```
 Click the 'Submit' button.
 A confirmation message in status bar should be shown.
 A 'Login with GitHub' button will appear on login form.
 
 >**Note:** Be sure that user's membership to the Github organization needs to be public.
 
 ### Active Directory Authorization
 
To setup access with Active Directory:
1. Login ReportPortal as an ADMIN user
2. Then open the list on the right of the user's image.
3. Click the 'Administrative' link
4. Click the 'Server Settings' from left-hand sidebar
5. Go to the 'Authorization Configuration' tab
6. Change the switcher position of 'Activate Directory Authorization' to ON
7. The following fields should appear on a screen as is shown in the picture:

[ ![active_directory.png](Images/userGuide/gettingStarted/active_directory.png) ](Images/userGuide/gettingStarted/active_directory.png)

Mandatory fields are marked with red. 
Click the 'Submit' button.
All users of Active Directory will have access to the ReportPortal instance.  
For entrance to ReportPortal the user should use their domain credentials (Login and password).

### LDAP Authorization (beta)
To setup access with LDAP:
1. Login to the ReportPortal as an ADMIN user
2. Open the list on the right of the user's image.
3. Click the 'Administrative' link
4. Click the 'Server Settings' from left-hand sidebar
5. Go to the 'Authorization Configuration' tab
6. Then change the switcher position of “LDAP Authorization' to ON
7. The following fields should appear on a screen as shown in the picture:

[ ![LDAP.png](Images/userGuide/gettingStarted/LDAP.png) ](Images/userGuide/gettingStarted/LDAP.png)

Mandatory fields are marked with red. 
Click the 'Submit' button.
All users of LDAP will have access to the ReportPortal instance. For access to the ReportPortal the user should use their domain credentials (Login and password).


### Statistics
It should be mentioned, that the ReportPortal server has an enabled option of collecting statistics of user's actions.
The list of actions could be found on the Statistics page.
To change the option:
1. Login to the ReportPortal as an ADMIN user
2. Then open the list on the right of the user's image.
3. Click the 'Administrative' link 
4. Click the 'Server Settings' from the left-hand sidebar
5. Go to the 'Statistics' tab
6. Leave the default settings or deselect the checkboxes
7. Click the Submit button if settings have been changed.

Now the settings of ReportPortal service is fully configured.
Next steps will describe the organization of working space (project) in ReportPortal.


