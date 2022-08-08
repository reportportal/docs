## Integrations

Users can reinforce ReportPortal with adding additional integrtions with:

[ ![Integrations](Images/userGuide/gettingStarted/Integrations.png) ](Images/userGuide/gettingStarted/Integrations.png)

* [Jira Server](https://reportportal.io/docs/Jira-Server)
* [Jira Cloud](https://reportportal.io/docs/Jira-Cloud)
* [Rally](https://reportportal.io/docs/Rally)
* [Azure DevOps](https://reportportal.io/docs/Azure-DevOps-BTS)
* [Sauce Labs](https://reportportal.io/docs/Sauce-Labs)
* [E-mail server](https://reportportal.io/docs/E-mail-server)
* [LDAP](https://reportportal.io/docs/LDAP-Auth)
* [Active Directory](https://reportportal.io/docs/Active-Directory-Auth)
* [Okta SAML](https://reportportal.io/docs/Okta-SAML)
* [Azure SAML](https://reportportal.io/docs/Azure-SAML)

If you want to integrate ReportPortal with these external systems, and you can not find a needed tab on the Project Settings, please check the section in documentation [Plugins](https://reportportal.io/docs/Plugins).

Integration configurations can be added on the global level (for all projects on the instance) in the Administrate section or the project level (only for one project) on Project Settings.

If you have another configuration than other projects have or you want to integrate only your project with an external system, you should perform the next actions:

1. Log in to ReportPortal as PROJECT MANAGER or ADMIN

2. Go to Project settings > Integrations

3. Click on one of the integration panels

4. And click the button "Unlink and setup manually"

By this action, you unlink the current project from the global settings and configure your integration.

[ ![Unlink Global Jira Integration](Images/userGuide/gettingStarted/Unlink Global Integration.png) ](mages/userGuide/gettingStarted/Unlink Global Integration.png)

>**Note:**
> If you unlink project setting and ADMIN changes global settings for the whole instance, your project will use your project settings.

To return global settings, you need to click a button "Reset to global settings".
In this case, your settings will be deleted, and integration will use global settings.

You can always reset to the global settings.