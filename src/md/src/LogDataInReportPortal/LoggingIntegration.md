## Logging Integration

### JVM-based loggers
Logging is allowed only during test (step, test, suite, etc) execution.
Consider the following scheme. Before the start and end of the test, logging context is available (marked in green):

![Image](Images/logging/logging_diagram.png) 

#### Log message format
Loggers can be used the same way as it's described in some particular logger (logback, log4j) documentation.
ReportPortal allows the attachment of binary data to the log entry. In this case consider the following message format:

```
RP_MESSAGE#FILE#FILENAME#MESSAGE_TEST
```

```
RP_MESSAGE#BASE64#BASE_64_REPRESENTATION#MESSAGE_TEST
```

>   RP\_MESSAGE - message header

>   FILE, BASE64 - attaching data representation type

>   FILENAME, BASE\_64\_REPRESENTATION - path to sending file/ base64
>   representation of sending data

>   MESSAGE\_TEST - string log message

There is a client parameter in reportportal.properties with boolean type values
for screenshots sending in "black-white" or "color" view. By default it is set
as "true" and all pictures for ReportPortal will be in a "black-while" format.

#### Multipart Logging Request Example

```
---------------84cfa4e5-b644-45d2-8b3e-b925eb20512e
Content-Disposition: form-data; name="json_request_part"
Content-Type: application/json; charset=utf-8
Content-Transfer-Encoding: 8bit

[{"item_id":"59cb6b13b9d82100013b89e5","time":"2017-09-27T12:09:14.113+0300","message":"I'm logging HTML","level":"INFO","file":{"name":"b7a417f2-bf63-4b78-a600-66c901f44800"}}]
---------------84cfa4e5-b644-45d2-8b3e-b925eb20512e
Content-Disposition: form-data; name="binary_part"; filename="b7a417f2-bf63-4b78-a600-66c901f44800"
Content-Type: text/html
Content-Transfer-Encoding: binary

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <title>
        Office
    </title>
    <script src="https://yastatic.net/jquery/3.1.0/jquery.min.js">
    </script>
    <script src="https://yastatic.net/underscore/1.8.3/underscore-min.js">
    </script>
    <script src="https://yastatic.net/backbone/1.2.3/backbone-min.js">
    </script>
    <script src="models/ModelEmployee.js">
    </script>
    <script src="views/ViewOffice.js">
    </script>
    <script src="views/ViewEmployee.js">
    </script>
</head>
<body>
<div id="office">
</script>
</body>
</html>

---------------84cfa4e5-b644-45d2-8b3e-b925eb20512e--

```
#### Additional logging configuration
**reportportal.properties**

```properties
rp.convertimage=true
```

Possible values:

-   **true** - all images will be converted into 'black-white'

-   **false** - all images will be in 'color'


#### Explicit logging
You can call the ReportPortal logger explicitly. To do this consider the following example:
```java
File file = new File("my path to file");
ReportPortal.emitLog("My message", "INFO", Calendar.getInstance().getTime(), file);
```

#### Log4j

##### Configuration

Log4j provides a configuration opportunity via XML or properties files.

Just add ReportPortal appender into log4j.xml configuration file.

```xml
<appender name="ReportPortalAppender" class="com.epam.ta.reportportal.log4j.appender.ReportPortalAppender">
   <layout class="org.apache.log4j.PatternLayout">
      <param name="ConversionPattern" value="[%d{HH:mm:ss}] %-5p (%F:%L) - %m%n"/>
   </layout>
</appender>
<root>
    <level value="info" />
    <appender-ref ref="ReportPortalAppender" />
</root>
```

For log4j.properties file it could be look like:

```properties
log4j.appender.reportportal=com.epam.ta.reportportal.log4j.appender.ReportPortalAppender
log4j.appender.reportportal.layout=org.apache.log4j.PatternLayout
log4j.appender.reportportal.layout.ConversionPattern=[%d{HH:mm:ss}] %-5p (%F:%L) - %m%n
```

ReportPortal' agent logs can be hidded by increasing logging level for the following package:

```xml
<logger name="rp">
    <level value="WARN"/>
</logger>
<logger name="com.epam.reportportal">
    <level value="WARN"/>
</logger>
```

#### Screenshots

For *log4j* case it is possible to send binary data in next ways.

-   by using specific message wrapper.

```java
private static Logger logger;
/*
 * Path to screenshot file
 */
public String screenshot_file_path = "demoScreenshoot.png";
/*
 * Message for attached screenshot
 */
public String rp_message = "test message for ReportPortal";
ReportPortalMessage message = new ReportPortalMessage(new File(screenshot_file_path), rp_message);
logger.info(message);
```

- sending File object as log4j log message. In this case log4j ReportPortal
    appender sends log message which will contain sending file and string message "*Binary data reported*".

- adding to log message additional text information which specify attaching
    file location or base64 representation of sending file. Described in [Log message format](#log-message-format) section.

**reportportal.properties**

```properties
rp.convertimage=true
```

Possible values:

-   **true** - all images will be converted into 'black-white'

-   **false** - all images will be as 'color'

### Log4j2

#### Configuration

Log4j2 provides configuration opportunity via XML or JSON files.

**XML**

log4j2.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
   <properties>
      <property name="pattern">[%d{HH:mm:ss}] %-5p (%F:%L) - %m%n</property>
   </properties>
   <appenders>
      <ReportPortalLog4j2Appender name="ReportPortalAppender">
         <PatternLayout pattern="${pattern}" />
      </ReportPortalLog4j2Appender>
   </appenders>
   <loggers>
      <root level="all">
         <appender-ref ref="ReportPortalAppender"/>
      </root>
   </loggers>
</configuration>
```

**JSON**

log4j2.json

```json
{
  "configuration": {
    "properties": {
      "property": {
        "name": "pattern",
        "value": "%d{HH:mm:ss.SSS} [%t] %-5level - %msg%n"
      }
    },
    "appenders": {
      "ReportPortalLog4j2Appender": {
        "name": "ReportPortalAppender",
        "PatternLayout": {
          "pattern": "${pattern}"
        }
      }
    },
    "loggers": {
      "root": {
        "level": "all",
        "AppenderRef": {
          "ref": "ReportPortalAppender"
        }
      }
    }
  }
}
```

ReportPortal's agent logs can be hided by increasing logging level for the following package:

```xml
<Logger name="rp" level="WARN"/>
<Logger name="com.epam.reportportal" level="WARN"/>
```

#### Screenshots

For *log4j2* case it is possible to send binary data in next ways.

-   by using specific message wrapper.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ java
private static Logger logger;
/*
 * Path to screenshot file
 */
public String screenshot_file_path = "demoScreenshoot.png";
/*
 * Message for attached screenshot
 */
public String rp_message = "test message for ReportPortal";
ReportPortalMessage message = new ReportPortalMessage(new File(screenshot_file_path), rp_message);
logger.info(message);
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

- sending File object as log4j2 log message. In this case log4j2 Report Portal
    appender sends log message which will contain sending file and string message *"Binary data reported"*.

- adding to log message additional text information which specify attaching
    file location or base64 representation of sending file. Described in [Log message format](#log-message-format) section.

### Logback

#### Configuration

Add Report Portal appender into logback.xml configuration file.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ xml
<appender name="ReportPortalAppender" class="com.epam.reportportal.logback.appender.ReportPortalAppender">
   <encoder>
      <pattern>%d{HH:mm:ss.SSS} [%t] %-5level - %msg%n</pattern>
   </encoder>
</appender>
<root>
    <appender-ref ref="ReportPortalAppender" />
</root>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**reportportal.properties**

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ properties
rp.convertimage=true
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Possible values:

- **true** - all images will be converted into 'black-white'

- **false** - all images will be as 'color'

### JDK Logging / java.util.logger (JUL)
Due to low popularity of JUL logger, Report Portal does not have adapter for it. Bridge to SLF4J or Log4j may be used in this case: [Log4j2 JDK Logging Adapter](https://logging.apache.org/log4j/2.0/log4j-jul/index.html)

### Log4Net

#### Installation

Install ReportPortal.Log4Net NuGet package. Missed dependencies will be
installed automatically.

>   Read [here](<http://docs.nuget.org/consume/package-manager-dialog>) how to
>   manage NuGet packages.

#### Configuration

Add custom appender into log4net configuration file.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ xml
<log4net>
  ...
  <appender name="RP" type="EPAM.ReportPortal.Logging.ReportPortalAppender, EPAM.ReportPortal.Logging.Log4Net">
    <layout type="log4net.Layout.SimpleLayout" />
    <layout type="log4net.Layout.PatternLayout">
      <conversionpattern value="%message%newline" />
    </layout>
  </appender>
  ...
</log4net>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Specify reference to appender in root section.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ xml
<log4net>
  ...
  <root>
      ...
      <appender-ref ref="RP" />
      ...
  </root>
  ...
</log4net>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### System.Diagnostics.Tracer

#### Installation

Install **ReportPortal.Tracer** NuGet package. Missed dependencies will be
installed automatically.

Read [here](<http://docs.nuget.org/consume/package-manager-dialog>) how to
manage NuGet packages.

#### Configuration

Add custom listener in your *App.config* file.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ xml
<configuration>
  ...
  <system.diagnostics>
    <trace>
      <listeners>
        <add name="ReportPortalListener" type="EPAM.ReportPortal.Logging.ReportPortalTracer,EPAM.ReportPortal.Logging.Tracer" />
      </listeners>
    </trace>
  </system.diagnostics>
  ...
</configuration>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
