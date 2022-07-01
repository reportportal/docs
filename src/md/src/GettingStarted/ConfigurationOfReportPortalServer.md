## Authorization configuration

ReportPortal Admin can configure an easy authorization on the instance. From the box we provide OAuth with:

* GitHub
* [LDAP](https://reportportal.io/docs/LDAP-Auth-integration)
* [Active Directory](https://reportportal.io/docs/Active-Directory-Auth-integration)
* SAML (in progress)

### GitHub Authorization

To set up access with GitHub auth:

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
If the 'Organization Name' is specified, only users of this organization will have access to ReportPortal instance.

If the Name of GitHub organization is not validated, verify that the name is correct.

Example of GitHub auth configuration:
 Fill in the form:
 ```javascript 
               'Client Id': 8767988c424a0e7a2640
           'Client Secret': ef22c9f804257afaf399a2dada7c8f22dee5fd1b
       'Organization Name': reportportal (optional)
  ```
 Click the 'Submit' button.
 A confirmation message in the status bar should be shown.
 A 'Login with GitHub' button will appear on the login form.
 
 >**Note:** Be sure that the user's membership to the Github organization needs to be public.
 

### Statistics

It should be mentioned, that the ReportPortal server has an enabled option of collecting statistics of user's actions for Google analytics.

We collect information on:
* which buttons are the most clickable
* which place are the most popular

It helps us to improve the usability of the application and to collect information about the most popular behavior patterns.
The list of actions could be found on the Statistics page.

To change the option:
1. Login to the ReportPortal as an ADMIN user
2. Then open the list on the right of the user's image.
3. Click the 'Administrative' link 
4. Click the 'Server Settings' from the left-hand sidebar
5. Go to the 'Statistics' tab
6. Leave the default settings or deselect the checkboxes
7. Click the Submit button if settings have been changed.

Now the settings of ReportPortal service are fully configured.
The next steps will describe the organization of working space (project) in ReportPortal.


