##Tuning CI tool

How to provide parameters via system variables in the CI tool (for example - Jenkins)

In order to provide specific parameters (Such as tags) for different
executions that are based on the parameters loading order, you can provide them as system
variables.

To do so, follow the steps below:

1. Open the Job configuration in Jenkins.  
[ ![Image](Images/1.png) ](Images/1.png)

2. Select the "This build is parameterized" check-box.

3. Click the "Add Parameter" and select "Text Parameter".  
[ ![Image](Images/2.png) ](Images/2.png)

4. Define any name for the parameter and set the default value (note that tags should have semicolon-separated values, with no spaces).
[ ![Image](Images/3.png) ](Images/3.png)

5. Update the execution command at the "Build" section: add ReportPortal parameters using –D for a system variable parameters. For tags it is "rp.tags":
[ ![Image](Images/4.png) ](Images/4.png)

6. Click the "Build with Parameters" button.
[ ![Image](Images/5.png) ](Images/5.png)

7. In the opened dialog, specify the needed parameters, using semicolons to separate values.  
[ ![Image](Images/6.png) ](Images/6.png)

8. Then Click the "Build" button.
