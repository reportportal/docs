### SpecFlow

#### Installation

Install **ReportPortal.SpecFlow** NuGet package into your project with features
files. Missed dependencies will be installed automatically.

>   Read [here](<http://docs.nuget.org/consume/package-manager-dialog>) how to
>   manage NuGet packages.

After installing the NuGet package your App.config file will be modified. The ReportPortal
plugin and step assembly will be registered in the specFlow section.

```xml
<specFlow>
  ...
  <plugins>
    <add name="EPAM.ReportPortal.Addins" type="Runtime" />
  </plugins>
  ...
  <stepAssemblies>
    <stepAssembly assembly="EPAM.ReportPortal.Addins.SpecFlowPlugin" />
  </stepAssemblies>
  ...
</specFlow>
```

#### Configuration

You can configure the ReportPortal plugin. All settings are stored in
*EPAM.ReportPortal.Addins.SpecFlowPlugin.dll.config* file. This file is added
into VS project with NuGet package installation.

| **Property**              | **Description**                                                                                                        |
|---------------------------|------------------------------------------------------------------------------------------------------------------------|
| enabled                   |Enable/Disable reporting to ReportPortal server                                                                        |
| server - url              |The base URI to ReportPortal REST web service                                                                          |
| server - project          |Name of project                                                                                                         |
| authentication - username |Name of user                                                                                                            |
| authentication - password |Password of user. UID can be used instead of opened password. You can find it on user's profile page                    |
| launch - debugMode        |Turn on/off debugging of your tests. Only you have access for test results if test execution is proceeded in debug mode |
| launch - name             |Name of test execution                                                                                                  |
| launch - tags             |Comma separated tags for test execution                                                                                 |



Example of valid configuration file is below.

```xml
<configuration>
  <configSections>
    <section name="reportPortal" type="EPAM.ReportPortal.Addins.SpecFlowPlugin.ReportPortalSection, EPAM.ReportPortal.Addins.SpecFlowPlugin, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null" />
  </configSections>
  <reportPortal enabled="true">
    <server url="https://{SERVER}:{PORT}/api/v1/" project="default_project">
      <authentication username="default" password="1q2w3e" />
    </server>
    <launch name="SpecFlow Demo Launch" debugMode="true" tags="t1,t2" />
  </reportPortal>
</configuration>
```
