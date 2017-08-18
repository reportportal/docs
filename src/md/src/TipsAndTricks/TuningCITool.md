Tuning CI tool
--------------

Provide parameter via system variables in CI tool (as example - Jenkins)

In order to provide specific parameters (for example, tags) for different
executions based on parameters loading order, you can provide them as system
variables.

To do so, follow the steps below:

1. Open the Job configuration in Jenkins.  
[ ![Image](Images/1.png) ](Images/1.png)

2. Select the "This build is parameterized" check-box.

3. Click "Add Parameter" and select "Text Parameter".  
[ ![Image](Images/2.png) ](Images/2.png)

4. Define any name for the parameter and put the default value (note that tags should be semicolon-separated values, with no spaces).
[ ![Image](Images/3.png) ](Images/3.png)

5. Update the execution command at the "Build" section: add Report Portal parameters using –D for a system variable parameters. For tags it is "rp.tags":
[ ![Image](Images/4.png) ](Images/4.png)

6. Click "Build with Parameters".
[ ![Image](Images/5.png) ](Images/5.png)

7. In the opened dialog, specify the needed parameters, use semicolon to separate values.  
[ ![Image](Images/6.png) ](Images/6.png)

8. Click "Build".
