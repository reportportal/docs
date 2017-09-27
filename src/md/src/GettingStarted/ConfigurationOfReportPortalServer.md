Configuration of Report Portal server
-------------------------------------

### Email server configuration

Permissions: Only user with account role ADMINISTRATOR has access to server settings.

To configure Email server:

1. Login to the ReportPortal as an ADMIN user
2. Then open the list on the right of the user's image.
3. Click the 'Administrative' link 
4. Click the 'Server Settings' from left-hand sidebar
5. On the'Email Server' tab change switcher position of 'Enable Email Server' to "ON"
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
           Autorization: ON
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
           Autorization: ON
               Username: <user_email_address>
               Password: <user_email_password>
                    SSL: checkbox should be checked.
```
2. Click the 'Submit' button
3. A confirmation message in the status bar should be shown.

### Authorization configuration
The Admin of the ReportPortal instance can provide access to an external user. 
As for now, ReportPortal allows GitHub users to login via GitHub auth, Active Directory Authorization or LDAP Authorization.

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
       'Organization Name': reportportal
  ```
 Click the 'Submit' button.
 A confirmation message in status bar should be shown.
 A 'Login with GitHub' button will appear on login form.
 
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
6. Leave the default settings or deselect the checkboxs
7. Click the Submit button if settings have been changed.

Now the settings of ReportPortal service is fully configured.
Next steps will discribe the organization of working space (project) in ReportPortal.
