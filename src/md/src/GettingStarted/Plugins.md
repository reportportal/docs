## Plugins

ReportPortal can be reinforced by uploading plugins. For now you can install next plugins from the box:
* Bug Tracking Systems plugins: Jira and Rally
*	E-mail server
*	Sauce Labs


| **Plugin**  | **Features**  |   
|---|---|
| Jira/Rally  |  This plugin can be required for projects that collect defects in a separate tracking tool. Integration provides an exchange of information between ReportPortal and Jira or Rally, such <br>* Posting new issues to BTS  <br>* linking test failures with existing issue in BTS   <br>*  Track issue statuses| 
|E-mail server| With this plugin you will be able to configure notifications about test result finish in real time.|
|SauceLabs| Configure an integration with Sauce Labs and watch video of test executions right in the ReportPortal application on the log view.|
 
### Upload plugin

You can find latest version of plugins by the [link](bintray.com/beta/#/epam/reportportal/).
Type “plugin” in the field Search and you will see all available plugins.  Then you should download the latest version of a needed plugin.

For a plugin uploading please perform the following actions:
*	login ReportPortal with Admin account
*	come on Administrative> Plugins
*	click on a button Upload
*	choose .jar file which should be uploaded
*	and click Upload


**Technical requirements for plugin:**

* a plugin should has format: .jar 
* a plugin file size is up to 128Mb
* a plugin should have a version
* a plugin should have a Manifest
* a plugin should have a plugin Extensions
* Admin cannot upload a plugin with exciting ID and exciting version to the system

[Video]

### Update a plugin
It is the same procedure as for Uploading. You can upload a plugin with the latest version to the ReportPortal, and a exsisting version will be updated to the latest one. 

[Video]

### Enable / Disable a plugin

If you do not want remove plugin from project settings, but want to save plugin configurations, you can use an enable/disable function. 
For that:
* login ReportPortal with Admin account
*	come to Administrative page > Plugins tab > Plugin > Plugin details
*	click a switcher Disable

Plugin will be removed from Project Settings on the project spaces. But all plugin configurations will be saved in the DataBase and you can returned them back if you need by clicking on the switcher enable plugin.

### Uninstall a plugin 
User can remove a plugin from the system. For that  you should:
* login ReportPortal with Admin account
*	come to Administrative page > Plugins tab > Plugin > Plugin details
*	click a button Uninstal
*	
Plugin will be successfully deleted. All plugin configurations will be deleted from the DataBase.
E-mail plugin can not be uninstalled.

### Configure a plugin
User can configure a plugin on the **instance level** (global configuration) and also on the **project level** (project configuration). Configuration are the same for both of levels.

If user configure plugin on the **global level**, then these configurations will be applied to the all project on the instance, which do not have their own configurations.

If user configure a plugin on the **project level**, then these configurations will be applied to only this project and replace global configurations, in case they are. 

Details on how to configure a specific plugin please find in the [Integration section](https://reportportal.io/docs/Project-configuration):

*	integration with Jira
*	integration with Rally
*	integration with SauceLabs
*	integration with E-mail server
 
> Use case: 
> 
> * One instance, *all project have the same plugin config* – configure global integration on > Administrative.
> * One instance, *different projects have different plugin config* – do not configure global integration, just add integrations per project.
> * One instance, *different projects have different projects, but some project have the same configuration* – configure global integration, and add project integrations only for needed projects.

[Video]
