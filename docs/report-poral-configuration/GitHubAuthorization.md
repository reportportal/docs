---
sidebar_position: 5
sidebar_label: GitHub Authorization
---

# GitHub Authorization

To setup access with GitHub auth:
1. Log in to the ReportPortal as an ADMIN user
2. Open the list on the right of the user's image.
3. Click the 'Administrative' link
4. Click the 'Server Settings' from the left-hand sidebar
5. Go to the 'Authorization Configuration' tab
6. Then change the switcher position of 'Activate GitHub Authorization' to ON
7. The Next fields should appear:

```javascript 
  'Client ID': <value_of_clientId>
  'Client Secret': <value_of_clientSecret>
  'Add GitHub Organization' button-link: (optional)
 ```

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
Click on 'Submit' button.
A confirmation message in status bar should be shown.
A 'Login with GitHub' button will appear on login form.