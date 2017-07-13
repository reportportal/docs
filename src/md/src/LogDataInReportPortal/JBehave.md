### Cucumber-JVM (Java)


#### Installation

Add to POM.xml

**dependency**

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ xml
<repositories>
     <repository>
        <snapshots>
          <enabled>false</enabled>
        </snapshots>
        <id>bintray-epam-reportportal</id>
        <name>bintray</name>
        <url>http://dl.bintray.com/epam/reportportal</url>
     </repository>
</repositories>



<dependency>
  <groupId>com.epam.reportportal</groupId>
  <artifactId>agent-java-jbehave</artifactId>
  <version>3.0.0</version>  
</dependency>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


Located in the main [RP repository](<https://github.com/reportportal/agent-java-jbehave>).

Configuration details [can be found here](http://reportportal.io/#documentation/JVM-based-clients-configuration).

To integrate ReportPortal with your JBehave project proceed with following steps:
1. Add ReportPortal's story reporter
2. Add ReportPortal's view generator

```java
 return new MostUsefulConfiguration()             
            .useStoryReporterBuilder(new StoryReporterBuilder()               
                .withFormats(ReportPortalFormat.INSTANCE))
            .useViewGenerator(new ReportPortalViewGenerator());
```