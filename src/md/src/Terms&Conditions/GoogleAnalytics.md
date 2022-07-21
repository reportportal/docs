## Google Analytics usage by ReportPortal

We use Google Analytics as the web analytics tool on ReportPortal. This platform helps us to make ReportPortal more convenient and useful for our users. But several clients raised concerns about collecting some personal or confidential data. To be clear, we do not gather personal information. In this article, we are going to explain how Google Analytics works on ReportPortal, its benefits, and how it can be turned off. 

### Google Analytics usage on ReportPortal agents 
 
We collect only the following data by using Google Analytics on ReportPortal agents:  
 
1) Event date. 

2) Client name and version, e.g., reportportal 5.0.6. 

3) Agent name, e.g., pytest-reportportal, version 5.0.11. 

4) Interpreter name, e.g., Python 3.6.9. 
 
We need this data to know what libraries and development platforms our users prefer. So, we do not spend a lot of time on support of rarely used components. 

[ ![ImageName](Images/userGuide/GA-Guide/ga1.png) ](Images/userGuide/GA-Guide/ga1.png)

### Google Analytics usage on ReportPortal UI 
 
We collect only the following data by using Google Analytics on ReportPortal UI:  
 
1) Device information: hardware model, operating system version, screen resolution, browser version. 

2) Behavior information: how user interacts with ReportPortal, where user clicks, what actions he or she does, app usage time. 
 
These analytics helps us to improve performance and user-friendliness. Based on analytics, for example, we can decide to write a new documentation or optimize our features and app navigation. 
 
>**NOTE**: We do not collect information that personally identifies you. We follow [privacy policy](https://privacy.epam.com/core/interaction/showpolicy?type=CommonPrivacyPolicy) in all cases.

[ ![ImageName](Images/userGuide/GA-Guide/ga2.png) ](Images/userGuide/GA-Guide/ga2.png)

### How to disable Google Analytics gathering on Report Portal agents

#### Basics

At the nutshell you need to set `AGENT_NO_ANALYTICS` environment variable with any non-empty value. In Unix or Linux you
can use `export` command for that:
```shell
export AGENT_NO_ANALYTICS=1
```
For Windows systems there is analogue command `set`:
```shell
set AGENT_NO_ANALYTICS=1
```
Then you can run your tests in the same shell and analytics gathering will be disabled.

To test that you actually have set the variable you can use `echo` command.

Linux:
```shell
echo "${AGENT_NO_ANALYTICS}"
```
Windows:
```shell
echo %AGENT_NO_ANALYTICS%
```

If you don't want to set that variable each time you start a shell, there are several technics you can use.

#### Constantly disabling analytics

#### Unix/Linux

Everything what you export in `.bash_profile` file in your test user's home directory will be automatically set each
time you log in into console. To edit the file you can use `nano` - a simple text editor:
```shell
nano ~/.bash_profile
```
Put export line somewhere in the file and hit `Ctrl+O` to save it and `Ctrl+X` to close.

#### Windows
To set environment variable on Windows 10 family systems right-click on it icon in taskbar and choose `System`. In
opened window hit `Advanced system settings` in the right menu and then `Environment variables` button in opened
`System Properties` window. Click `New` button in `System variables` section, enter variable name and value and close 
everything with `OK` button. The changes will be applied after the system restart.

#### Build systems

Some build systems can set environment variables on their own we can use this feature to set the variable.

#### Gradle

Gradle has `environment` keyword which sets variables for child processes, so all you need to do is to set it in `test`
task:
```groovy
test {
    environment "AGENT_NO_ANALYTICS", "1"
}
```

#### Maven

`maven-surefire-plugin` has option to set environment variables for forked processes, so you can configure the plugin
accordingly:
```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.epam.reportportal.example</groupId>
    <artifactId>example-mute</artifactId>
    <version>1.0-SNAPSHOT</version>
    
    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-plugin</artifactId>
                <version>2.22.2</version>
                <configuration>
                    <forkMode>once</forkMode>
                    <environmentVariables>
                        <AGENT_NO_ANALYTICS>1</AGENT_NO_ANALYTICS>
                    </environmentVariables>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>
```

#### tox
Python's tox automation tool also provides a way to set necessary variables with `setenv` parameter in `tox.ini` file:
```text
[testenv]
setenv   =
    AGENT_NO_ANALYTICS = 1
```

#### Docker
If your tests are wrapped in a docker container you need to bypass this variable through command-line with `-e` flag:
```shell
docker run --rm -it \
  -e "AGENT_NO_ANALYTICS=1"
  selenium/standalone-chrome:103.0
```
Or you can use `ENV` keyword in your `Dockerfile` when building the image:
```dockerfile
ENV AGENT_NO_ANALYTICS=1
```
### How to disable Google Analytics on ReportPortal UI 

You can turn off Google Analytics on ReportPortal UI as well. 
 
1) Log in to ReportPortal as Admin. 
 
2) Open Menu at the bottom and select “Administrate” section. 

[ ![ImageName](Images/userGuide/GA-Guide/ga3.png) ](Images/userGuide/GA-Guide/ga3.png)

3) Select “Server Settings”.

[ ![ImageName](Images/userGuide/GA-Guide/ga4.png) ](Images/userGuide/GA-Guide/ga4.png)

4) Open “Analytics” tab. 
 
5) Uncheck “Help make ReportPortal better by automatically sending analytics to us” checkbox. 

[ ![ImageName](Images/userGuide/GA-Guide/ga5.png) ](Images/userGuide/GA-Guide/ga5.png)

>**NOTE:** You can enable Google Analytics if you check “Help make ReportPortal better by automatically sending analytics to us” checkbox. 
 
Thanks to Google Analytics, we can deliver interesting and helpful features to ReportPortal. As a result, you will have effective working instruments and better customer support.
