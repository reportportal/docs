Configuration of Report Portal server
-------------------------------------

### Email server configuration

Permissions: Only user with account role ADMINISTRATOR has access to server settings.

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
2. Click 'Submit' button
3. Confirmation message in status bar should be shown.

[ ![Image](Images/userGuide/gettingStarted/gmail.png) ](https://youtu.be/0919itAaixk)

Example of email server configuration for Yandex email server (detailed info could be found [here](https://yandex.com/support/mail-new/mail-clients.html))
 
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

### Authorization configuration
Admin of Report Portal instance can provide an access to external user. 
As for now, Report Portal allows GitHub users to login via GitHub auth, Active Directory Authorization or LDAP Authorization.

# GitHub Authorization
To setup access with GitHub auth:
1. Login Report Portal as ADMIN user
2. Open list on the right of user's image.
3. Click 'Administrative' link 
4. Click 'Server Settings' from left-hand sidebar
5. Go to 'Authorization Configuration' tab
6. Change switcher position of 'Activate GitHub Authorization' to ON
7. Next fields appear:

  'Client ID': <value_of_clientId>
  'Client Secret': <value_of_clientSecret>
  'Add GitHub Organization' button-link: (optional)

Note, in case 'Organization Name' is not added, all GitHub users will have an access to Report Portal instance.
If 'Organization Name' is specified, only users of this organization will have an access to Report Portal instance.

Name of GitHub organization is not validated, so make sure the name is correct.

Example of GitHub auth configuration:
 Fill the form:
 ```javascript 
               'Client Id': 8767988c424a0e7a2640
           'Client Secret': ef22c9f804257afaf399a2dada7c8f22dee5fd1b
       'Organization Name': reportportal
  ```
 Click 'Submit' button.
 Confirmation message in status bar should be shown.
 'Login with GitHub' button will appear on login form.
 
 # Active Directory Authorization
To setup access with Active Directory:
1. Login Report Portal as ADMIN user
2. Open list on the right of user's image.
3. Click 'Administrative' link
4. Click 'Server Settings' from left-hand sidebar
5. Go to 'Authorization Configuration' tab
6. Change switcher position of 'Activate Directory Authorization' to ON
7. The following fields appear on a screen as is shown on a picture:

[ ![Active Directory.png](documentation/src/Images/userGuide/gettingStarted/Active Directory.png) ](documentation/src/Images/userGuide/gettingStarted/Active Directory.png)

Mandatory fields are marked with red. 
Click 'Submit' button.
All users of Active Directory will have an access to Report Portal instance.  
For entrance to Report Portal user should use their domain credentials (Login and password).

# LDAP Authorization (beta)
To setup access with LDAP:
1. Login Report Portal as ADMIN user
2. Open list on the right of user's image.
3. Click 'Administrative' link
4. Click 'Server Settings' from left-hand sidebar
5. Go to 'Authorization Configuration' tab
6. Change switcher position of “LDAP Authorization' to ON
7. The following fields appear on a screen as is shown on a picture:

[ ![LDAP.png](documentation/src/Images/userGuide/gettingStarted/LDAP.png) ](documentation/src/Images/userGuide/gettingStarted/LDAP.png)

Mandatory fields are marked with red. 
Click 'Submit' button.
All users of LDAP will have an access to Report Portal instance. For entrance to Report Portal user should use their domain credentials (Login and password).


### Statistics
It should be mentioned, that Report Portal server has enabled option of collecting statistics of user's actions.
The list of actions could be found on the Statistics page.
To change the option:
1. Login Report Portal as ADMIN user
2. Open list on the right of user's image.
3. Click 'Administrative' link 
4. Click 'Server Settings' from left-hand sidebar
5. Go to 'Statistics' tab
6. Leave the default setting or deselect the checkbox
7. Submit if setting has been changed.

Now the settings of Report Portal service is fully configured.
Next steps will discribe the organization of working space (project) in Report Portal.
