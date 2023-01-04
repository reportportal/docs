---
sidebar_label: GitHub
---

# GitHub

ReportPortal allows logging in via GitHub OAuth Web Application Flow.

### Presequences

To enable this feature you need to [register new application in Github](https://github.com/settings/applications/new)

Fill the following fields:

| Name                       | Value                                      | Description                                           |
|----------------------------|--------------------------------------------|-------------------------------------------------------|
| Application name           | Report Portal                              | Just something which allow you recognize what's this. |
| Homepage URL               | https://{HOST}:{PORT}/uat/sso/user         | Replace with `{HOST}` and `{PORT}` with appropriate values of your instance. Naturally you can omit `:{PORT}` if it's default port for HTTPS protocol. | 
| Authorization callback URL | https://{HOST}:{PORT}/uat/sso/login/github | As in the previous field replace with `{HOST}` and `{PORT}` with your appropriate values. | 

Once new application is created, you will have Client ID. Click on "Generate a new client secret" to get Client Secret, but do not close the window until you configure the Authorization on RP, since it will never show you the Secret again.

### Report Portal configuration

To setup access with GitHub auth on Report Portal:
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