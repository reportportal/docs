## Plugins

ReportPortal can be reinforced by uploading plugins. For now, you can install the next plugins from the box:
* Bug Tracking Systems plugins: Jira and Rally
*    E-mail server
*    Sauce Labs


| **Plugin**  | **Features**  |   
|---|---|
| Jira/Rally  |  This plugin can be required for projects that collect defects in a separate tracking tool. The integration provides an exchange of information between ReportPortal and Jira or Rally, for example: posting new issues to BTS, linking test failures with the existing issue in BTS, track issue statuses| 
|E-mail server| With this plugin, you will be able to configure notifications about test result finish in real time.|
|SauceLabs| This plugin helps you to integrate ReportPortal with Sauce Labs and watch a video of test executions right in the ReportPortal application on the log view.|
 
### Upload plugin

**Permissions:**
Only ADMINISTRATOR can upload plugin.

You can find the latest version of all ReportPortal plugins by the [link](https://bintray.com/beta/#/epam/reportportal/). Type “plugin” in the field Search and you will see all available plugins.  Then you should download the latest version of a needed plugin.  Or you can use a direct link to the needed plugin from the table below.

|Plugin  | Link to download |
| ------------- | ------------- |
| JIRA  | https://bintray.com/beta/#/epam/reportportal/plugin-bts-jira?tab=files|
| Rally | https://bintray.com/beta/#/epam/reportportal/plugin-bts-rally?tab=files |
| SauceLabs | https://bintray.com/beta/#/epam/reportportal/plugin-saucelabs?tab=files |


[ ![UploadPluginVideo](Images/userGuide/gettingStarted/UploadPlugin.png) ](https://youtu.be/xR75Bdq3uaM)

For a plugin uploading please perform the following actions:
*    login ReportPortal with Admin account
*    come on Administrative> Plugins
*    click on a button Upload
*    choose .jar file which should be uploaded
*    and click Upload


> **Technical requirements for the plugin:**
>
>* a plugin should have the format: .jar 
>* a plugin file size is up to 128Mb
>* a plugin should have a version
>* a plugin should have a Manifest
>* a plugin should have a plugin Extensions
>* Admin cannot upload a plugin with existing ID and existing version to the system


### Update a plugin
**Permissions:**
Only ADMINISTRATOR can update the plugin.
It is the same procedure as for Uploading. You can upload a plugin with the latest version to the ReportPortal, and an existing version will be updated to the latest one. 


### Enable / Disable a plugin
**Permissions:**
Only ADMINISTRATOR can enable / disable plugin.

[ ![Enable/DisablePluginVideo](Images/userGuide/gettingStarted/DisablePlugin.png) ](https://youtu.be/Sj9BpnTIxW8)

If you do not want to remove a plugin from project settings, but want to save plugin configurations, you can use an enable/disable function. 
For that:
* login ReportPortal with Admin account
*    come to Administrative page > Plugins tab > Plugin > Plugin details
*    click a switcher Disable

The plugin will be removed from Project Settings on the project spaces. But all plugin configurations will be saved in the DataBase and you can return them back if you need by clicking on the switcher enable the plugin.

### Uninstall a plugin 
**Permissions:**
Only ADMINISTRATOR can uninstall the plugin.

Users can remove a plugin from the system. For that  you should:
* login ReportPortal with Admin account
*    come to Administrative page > Plugins tab > Plugin > Plugin details
*    click a button Uninstall
*    
The plugin will be successfully deleted. All plugin configurations will be deleted from the DataBase.
E-mail plugin can not be uninstalled.

### Configure a plugin

**Permissions:**
Only ADMINISTRATOR can make global configurations of a plugin.
ADMINISTRATOR and PROJECT MANAGER can make project configurations of a plugin.

Users can configure a plugin on the **instance-level** (global configuration) and also on the **project level** (project configuration). The configuration is the same for both levels.

If a user configures plugin on the **global level**, then these configurations will be applied to all projects on the instance, which do not have their own configurations.

If the user configures a plugin on the **project level**, then these configurations will be applied to only this project and replace global configurations, in case they are. 

Details on how to configure a specific plugin please find in the [Integration section](https://reportportal.io/docs/Integrations):

*    [integration with Jira](https://reportportal.io/docs/Integrations%3Eintegration-with-jira) 
*    [integration with Rally](https://reportportal.io/docs/Integrations%3Eintegration-with-rally)
*    [integration with SauceLabs](https://reportportal.io/docs/Integrations%3Esauce-labs-integration)
*    [integration with E-mail server](https://reportportal.io/docs/Integrations%3Eglobal-e-mail-server-integration)

 
> **Use case 1:** 
> 
> **Situation:** A small team, on ReportPortal instance there are several projects. Separate projects are added for different test types (UI, API, Unit and other). The team works with one project in Jira (or Rally). Different projects post new bugs in the same Jira (or Rally) project.
> **Solution:** configure global integration for Jira (or Rally) plugin on the Management board.
>**Pros:** Administrator configures integration once, and should not perform the same action several times. If the integration requires some changes, the Administrator can easily edit an integration, and the changes will apply to all projects on the instance.


> **Use case 2:** 
> 
> **Situation:**  On ReportPortal instance there are several projects. Separate projects are added for different teams. Each team works with its project in Jira (or Rally) and posts new bugs in different Jira (or Rally) projects. Each team should not have access to the Jira (or Rally) project of other teams.
> **Solution:** configure project integrations for Jira (or Rally) plugin on the Project settings.
>**Pros:** Project Manager or Administrator configures integrations per project, team members from different projects can not see configurations of each other.


> **Use case 3:** 
> 
> **Situation:**  On ReportPortal instance there are several projects. Separate projects are added for different teams. But for one team has been added several projects. So several projects on ReportPortal have connections with one Jira (or Rally) project and several projects have a connection with different Jira (or Rally) projects.
> **Solution:** configure global integrations on the Management board, and configure project integrations for Jira (or Rally) plugin on the Project settings.
>**Pros:** Administrator configures integration once for those who need the same settings, and Project Manager or Administrator configures integrations per project, for those projects who need to limit access.
