### JUnit

#### Installation

Download package [here](<https://bintray.com/epam/reportportal/agent-java-junit>)

ReportPortal (hereinafter: RP) provides two client modules for valid tracking
of [JUnit](<http://junit.org/>) script events:

-   ReportPortal listener

-   ReportPortal custom runner

The Listener provides information for RP in an appropriate form and updates the launch
structure in accordance with developed template.

The Runner was created for *\@BeforeClass*, *\@Before*, *\@After* and
*\@AfterClass* methods notifications rising. These notifications are not
top-level events for native [JUnit](<http://junit.org/>) runners\\listeners.


#### ReportPortal Listener

The Listener could be included in the project via following scripts running
method.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ java
import org.junit.runner.JUnitCore;
import com.epam.reportportal.junit.ReportPortalListener;

public class JUnitScriptsRunner {
    public static void main(String[] args) {
        JUnitCore core= new JUnitCore();
        core.addListener(new ReportPortalListener());
        core.run(UserTestClass1.class, UserTestClass2.class, UserTestClass3.class);
    }
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If [Maven](<http://maven.apache.org/index.html>) has been used by test project
so listener could be included in
[maven-surefire-plugin](<http://maven.apache.org/surefire/maven-surefire-plugin/index.html>)
configuration in pom.xml.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ xml
<plugin>
   <groupId>org.apache.maven.plugins</groupId>
   <artifactId>maven-surefire-plugin</artifactId>
   <version>2.15</version>
   <configuration>
      <properties>
         <property>
            <name>listener</name>
            <value>com.epam.reportportal.junit.ReportPortalListener</value>
         </property>
      </properties>
   </configuration>
</plugin>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


#### ReportPortal Runner

The RP runner could be used via following ways:

-   Via \@RunWith annotation

Usage

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ java
@RunWith(com.epam.reportportal.junit.CustomJUnitRunner.class)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-   Via Suite class extension

If test project has using Suite extended class so you could include RP runner
like in example below.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ java
import java.util.List;
import org.junit.internal.runners.InitializationError;
import org.junit.runner.Runner;
import org.junit.runners.Suite;
import org.junit.runners.model.RunnerBuilder;
import com.epam.reportportal.junit.CustomJUnitRunner;

public class MySuite extends Suite {
   private static Class<?>[] getAnnotatedClasses(Class<?> klass) throws InitializationError {
      Suite.SuiteClasses annotation = klass.getAnnotation(Suite.SuiteClasses.class);
      if (annotation == null) {
         throw new InitializationError(String.format("class '%s' must have a SuiteClasses annotation", klass.getName()));
      }
      return annotation.value();
   }

   public MySuite(Class<?> klass, RunnerBuilder builder) throws InitializationError {
      super(klass, getRunners(getAnnotatedClasses(klass)));
   }

   public static List<Runner> getRunners(Class<?>[] classes) throws InitializationError {
      List<Runner> runners = new LinkedList<Runner>();
      for (Class<?> klazz : classes) {
         runners.add(new CustomJUnitRunner(klazz)); //Initialization of RP custom runner
      }
      return runners;
   }
 }
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

>   If you use a custom runner, please extend CustomJUnitRunner class instead of
>   native BlockJUnit4ClassRunner JUnit4 class!

>   Also make sure that the running order keep in safe after yours extensions.
