## JVM-based clients configuration

Copy your configuration from UI of Report Portal at [User Profile](<#user-profile>) section

or

In order to start using an agent, user should configure property file
"reportportal.properties" in such format:

**reportportal.properties**

```properties
rp.endpoint = https://rp.epam.com/
rp.username = default
rp.uuid = 8967de3b-fec7-47bb-9dbc-2aa4ceab8b1e
rp.launch = default_TEST_EXAMPLE
rp.project = default_project

## OPTIONAL PARAMETERS
rp.tags = TAG1;TAG2
rp.keystore.resource = reportportal-client-v2.jks
rp.keystore.password = reportportal

rp.batch.size.logs = 5
```


**Parameters**

User should provide next parameters to agent.

| **Parameter**                                 | **Description**      | **Required**|
|-----------------------------------------------|----------------------|-------------|
|rp.enable                                      |Enable/Disable logging to Report Portal: rp.enable=true - enable log to RP server.  Any other value means 'false': rp.enable=false - disable log to RP server.  If parameter is absent in  properties file then automation project results will be posted on RP. |No |
|rp.username                                    |User name |Yes |
|rp.password                                    |User password. **We strongly recommend to use UUID** or separate ReportPortal internal users password here to avoid domain password publishing. |Yes |
|rp.uuid                                        |UUID of user. |Yes |
|rp.endpoint                                    |URL of web service, where requests should be send |Yes |
|rp.launch                                      |The unique name of Launch (Run). Based on that name a history of runs will be created for particular name |Yes |
|rp.project                                     |Project name to identify scope |Yes |
|rp.tags                                        |Set of tags for specifying additional meta information for current launch. Format: tag1;tag2;build:12345-6. Tags should be separated by “;”. There are one special tag- build – it should be used for specification number of build for launch. |No |
|rp.batch.size.logs                             |In order to rise up performance and reduce number of requests to server |Yes |
|rp.keystore.resource                           |Put your JKS file into resources and specify path to it | |
|rp.keystore.password                           |Access password for JKS (certificate storage) package, mentioned above | |
|rp.convertimage                                |Colored log images can be converted to grayscale for reducing image size. Values: ‘true’ – will be converted. Any other value means ‘false’. |No |
|rp.mode                                        |Report Portal provides possibility to specify visibility of executing launch. Currently two modes are supported: DEFAULT  - all users from project can see this launch; DEBUG - only owner can see this launch (in debug sub tab). Note: for all java based clients (TestNG, Junit) mode will be set automatically to "DEFAULT" if it is not specified. |No |
|rp.skipped.issue                               |Report Portal provides feature to mark skipped tests as not 'To Investigate' items on WS side. Parameter could be equal boolean values: *TRUE* - skipped tests considered as issues and will be marked as 'To Investigate' on Report Portal. *FALSE* - skipped tests will not be marked as 'To Investigate' on application. |No |


Launch name can be edited once, and should be edited once, before first
execution. As usual, parts of launches are fixed for a long time. Keeping the
same name for launch, here we will understand a fixed list of suites under
launch, will help to have a history trend, and on UI instances of the same
launch will be saved with postfix "\#number", like "Test Launch \#1", "Test
Launch \#2" etc.

>   If mandatory properties are missed client throw exception
>   IllegalArgumentException.

**Proxy configuration**

The client uses standard java proxy mechanism. If you are new try [Java networking and proxies](<http://docs.oracle.com/javase/8/docs/technotes/guides/net/proxies.html>) page.

Ways to set up properties:

a. reportportal.properties file

b. command line properties (-Dhttps.proxyHost=localhost)

**How to provide parameters**

There are several ways to load parameters. Be aware that higher order overrides previous. 
For example, properties from file can be overridden by JVM variables

| Order | Source
|-------| ----------------------|
| 1     | Environment variables |
| 2     | JVM variables         |
| 3     | Properties file       |


Properties file should have name 

> reportportal.properties
>

It can be situated on the class path (in the project directory). 
If listener can’t find properties file it throws FileNotFoundException. 
By default “reportportal.properties” exists in the reportportall-client.jar, 
but user can create his own “reportportal.properties” file and put in class path.