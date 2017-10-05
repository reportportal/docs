### TestNG

TestNG provides support for attaching custom listeners, reporters, annotation transformers and method interceptors to your tests.
Handling events

TestNG agent can handle next events:

-   Start launch

-   Finish launch

-   Start suite

-   Finish suite

-   Start test

-   Finish test

-   Start test step

-   Successful finish of test step

-   Fail of test step

-   Skip of test step

-   Start configuration (All «before» and «after» methods)

-   Fail of configuration

-   Successful finish of configuration

-   Skip configuration

#### Objects interrelation

| **TestNG object**    | **ReportPortal object**       |
|----------------------|-------------------------------|
| LAUNCH               |LAUNCH                         |
| BEFORE_SUITE         |TestItem (type = BEFORE_SUITE) |
| BEFORE_GROUPS        |TestItem (type = BEFORE_GROUPS)|
| SUITE                |TestItem (type = SUITE)        |
| BEFORE_TEST          |TestItem (type = BEFORE_TEST)  |
| TEST                 |TestItem (type = TEST)         |
| BEFORE_CLASS         |TestItem (type = BEFORE_CLASS) |
| CLASS                |Not in structure. Avoid it     |
| BEFORE_METHOD        |TestItem (type = BEFORE_METHOD)|
| METHOD               |TestItem (type = STEP)         |
| AFTER_METHOD         |TestItem (type = AFTER_METHOD) |
| AFTER_CLASS          |TestItem (type = AFTER_CLASS)  |
| AFTER_TEST           |TestItem (type = AFTER_TEST)   |
| AFTER_SUITE          |TestItem (type = AFTER_SUITE)  |
| AFTER_GROUPS         |TestItem (type = AFTER_GROUPS) |

TestItem – report portal specified object for representing:  suite, test, method objects in different test systems. Used as tree structure and can be recursively placed inside himself.

#### Dependencies

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
  <artifactId>agent-java-testng</artifactId>
  <version>3.0.0</version>
</dependency>
<!-- TODO Leave only one dependency, depends on what logger you use: -->
<dependency>
  <groupId>com.epam.reportportal</groupId>
  <artifactId>logger-java-logback</artifactId>
  <version>3.0.0</version>
</dependency>
<dependency>
  <groupId>com.epam.reportportal</groupId>
  <artifactId>logger-java-log4j</artifactId>
  <version>3.0.0</version>
</dependency>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

#### Install listener

Download package [here](<https://bintray.com/epam/reportportal/agent-java-testng>).
Choose latest version.

By default, TestNG attaches a few basic listeners to generate HTML and XML
reports. For reporting TestNG test events (ie start of test, successful finish
of test, test fail) to Report Portal user should add Report Portal TestNg
listener to run and configure input parameters. Description of listeners input
parameters and how to configure it see “Parameters” in [Configuration section](/docs/TestNG>configuration).

**Listener class:** *com.epam.reportportal.testng.ReportPortalTestNGListener*

There are several ways how to install listener:

- Maven Surefire plugin

- In TestNG configuration file

- Register listener in code

- Via command line

- Via \@Listeners annotation

- Via ServiceLoader class

> Please note, that listener must be configured in a single place only.
> Configuring multiple listeners will lead to incorrect application behavior.

**Maven Surefire plugin**

Maven surefire plugin allows configuring multiple custom listeners. For logging
to Report Portal user should add Report Portal listener to “Listener” property.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ xml
<plugins>
    [...]
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-surefire-plugin</artifactId>
        <version>2.15</version>
        <configuration>
          <properties>
            <property>
              <name>usedefaultlisteners</name>
              <value>false</value> <!-- disabling default listeners is optional -->
            </property>
            <property>
              <name>listener</name>
              <value>com.epam.reportportal.testng.ReportPortalTestNGListener</value>
            </property>
          </properties>
        </configuration>
      </plugin>
    [...]
</plugins>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

>   If you use maven surefire plugin set report portal listener only in
>   "listener" property in pom.xml.

**Specify listener in testng.xml**

Here is how you can define report portal listener in your testng.xml file.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ xml
<suite>
   
  <listeners>
    <listener class-name="com.example.MyListener" />
    <listener class-name="com.epam.reportportal.testng.ReportPortalTestNGListener" />
  </listeners>
.....
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Custom runner**

TestNG allows users to create own runners. In this case user can instantiate
listener by himself and add it to TestNG object.

```java
ReportPortalTestNGListener listener = new ReportPortalTestNGListener();
TestNG testNg = new TestNG();
List<String> lSuites = Lists.newArrayList();
Collections.addAll(lSuites, “testng_suite.xml”);
testNg.setTestSuites(lSuites);
testNg.addListener((Object) listener);
testNg.run();
```

**Using command line**

Assuming that you have TestNG and Report Portal client jars in your class path,
you can run TestNG tests with Report Portal listener as follows:

*java org.testng.TestNG testng1.xml –listener
com.epam.reportportal.testng.ReportPortalTestNGListener*

**Using \@Listeners annotation**

Report Portal listener can be set using \@Listener annotation.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ java
@Listeners({ReportPortalTestNGListener.class})
public class FailedParameterizedTest {
…..
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

\@Listeners annotation will apply to your entire suite file, just as if you had
specified it in a testng.xml file. Please do not restrict its scope.

**Using ServiceLoader**

JDK offers a very elegant mechanism to specify implementations of interfaces on
the class path via the
[ServiceLoader](<http://docs.oracle.com/javase/8/docs/api/java/util/ServiceLoader.html>)
class. With ServiceLoader, all you need to do is create a jar file that contains
your listener(s) and a few configuration files, put that jar file on the
classpath when you run TestNG and TestNG will automatically find them. You can
use service loaded mechanism for adding Report Portal listener to test
execution. Please see detailed information here:

<http://testng.org/doc/documentation-main.html#testng-listeners> 5.17.2 -
Specifying listeners with ServiceLoader.
