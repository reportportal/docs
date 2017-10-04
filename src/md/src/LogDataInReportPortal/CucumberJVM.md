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
  <artifactId>agent-java-cucumber</artifactId>
  <version>2.6.1</version>  
</dependency>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


Located in the main [RP repository](<https://github.com/reportportal/agent-java-cucumber>).

Configuration is identical to JUnit RP client.

It is implemented as a custom Cucumber reporter and is enabled in the same way
as other custom reporters
([http://cukes.info](<https://cucumber.io>)).

There are two versions: **ScenarioReporter** and **StepReporter**;

the difference is in the granularity level, ScenarioReporter is the most
recommended option. 


TestItem – A ReportPortal specified object for representing: suite, test, method
objects in different test systems. Used as a tree structure that can be recursively
placed inside itself.
