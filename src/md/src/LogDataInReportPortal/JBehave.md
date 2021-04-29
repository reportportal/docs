### Cucumber-JVM (Java)


#### Installation

Add to POM.xml

**dependency**

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ xml
<dependency>
  <groupId>com.epam.reportportal</groupId>
  <artifactId>agent-java-jbehave</artifactId>
  <version>5.0.0-RC-2</version>  
</dependency>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


Located in the main [RP repository](<https://github.com/reportportal/agent-java-jbehave>).

Configuration details [can be found here](http://reportportal.io/docs/JVM-based-clients-configuration).

To integrate ReportPortal with your JBehave project proceed with following steps:
1. Add ReportPortal's story reporter
2. Add ReportPortal's view generator

```java
 return new MostUsefulConfiguration()             
            .useStoryReporterBuilder(new StoryReporterBuilder()               
                .withFormats(ReportPortalFormat.INSTANCE))
            .useViewGenerator(new ReportPortalViewGenerator());
```
