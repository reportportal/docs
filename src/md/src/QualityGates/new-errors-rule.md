## Quality Gates: “New Errors” rule

“Unique errors” functionality with a new Quality Gates rule – New Errors – was implemented in version 5.7. This feature saves your time for searching and analyzing repeated errors in launches. **“New Errors” rule** will help to group errors into new and known ones and, for example, fail build if there are new error not seen previously. 
 
To begin using this functionality, you need to create a Quality Gate and add the “New Errors” rule. Please follow the steps below: 
 
1) Log in to ReportPortal as Admin/PM. 
 
2) Go to ```Project Settings```. 
 
3) Select ```Quality Gates``` section. 

[ ![ImageName](Images/userGuide/QualityGates/NewErrors/new-errors1.png) ](Images/userGuide/QualityGates/NewErrors/new-errors1.png)

4) Click ```Create Quality Gate``` button.

[ ![ImageName](Images/userGuide/QualityGates/NewErrors/new-errors2.png) ](Images/userGuide/QualityGates/NewErrors/new-errors2.png)

5) Enter ```Quality Gate Name``` and ```Analyzed Launch```, then click ```Save``` button. 

[ ![ImageName](Images/userGuide/QualityGates/NewErrors/new-errors3.png) ](Images/userGuide/QualityGates/NewErrors/new-errors3.png)

>**Note:** if you want the Quality Gate not to run for all launches, you can adjust it only for the launches with specific attributes. Click ```Add attribute``` and specify value and key, e.g., browser.

[ ![ImageName](Images/userGuide/QualityGates/NewErrors/new-errors4.png) ](Images/userGuide/QualityGates/NewErrors/new-errors4.png)

On the example in the screenshot above Quality Gate will run for launches with name **“Test”** with attributes _Browser Chrome_, _Feature Reporting_, _Device MacBook_. 
 
6) Click on the ```Add a new rule``` dropdown and select ```New Errors```. 
 
Click the **“confirm”** icon.  
 
>Please, note that “New Errors” rule can be created with **“All tests”** condition only. 

[ ![ImageName](Images/userGuide/QualityGates/NewErrors/new-errors5.png) ](Images/userGuide/QualityGates/NewErrors/new-errors5.png)

[ ![ImageName](Images/userGuide/QualityGates/NewErrors/new-errors6.png) ](Images/userGuide/QualityGates/NewErrors/new-errors6.png)

Before running automation tests, make sure that **“Quality Gates”** feature is ON.

[ ![ImageName](Images/userGuide/QualityGates/NewErrors/new-errors7.png) ](Images/userGuide/QualityGates/NewErrors/new-errors7.png)

Now everything is ready to use. 
 
7) Go to automation testing tool. 
 
8) Run autotests. 
 
9) Go to ReportPortal. 
 
10) Open the ```Launches``` section and click the ```Refresh``` button at the top. 

[ ![ImageName](Images/userGuide/QualityGates/NewErrors/new-errors8.png) ](Images/userGuide/QualityGates/NewErrors/new-errors8.png)

11) Verify the Quality Gates' status. 
 
**_Passed_** - there are no failures. 

**_Failed_** - there are new errors.

**_N/A_** - appears if the quality gate was created after a launch was finished, or there is no quality gate for this launch. If the status is Not Available, click on the “N/A” and then click “Run Quality Gate” button (+ “Refresh”). 

[ ![ImageName](Images/userGuide/QualityGates/NewErrors/new-errors9.png) ](Images/userGuide/QualityGates/NewErrors/new-errors9.png)

12) To look at the failed test results, click on the ```Failed``` status and then click on the number under ```Current``` column. 

[ ![ImageName](Images/userGuide/QualityGates/NewErrors/new-errors10.png) ](Images/userGuide/QualityGates/NewErrors/new-errors10.png)

You will be redirected to the ```Unique errors``` tab with a list of all new error logs of the launch. If you want to see known issues as well, open the ```All Unique Errors``` dropdown at the top and click the ```Known Errors``` checkbox. 

[ ![ImageName](Images/userGuide/QualityGates/NewErrors/new-errors11.png) ](Images/userGuide/QualityGates/NewErrors/new-errors11.png)

By default, ***a previous launch execution*** is used as a Baseline Launch for the Quality Gate. Besides, you can as well define any other launch by specifying its name and sequence number or select ```Latest``` for the prior run of the specified launch to be used as a baseline. 
 
To make these changes, click ```Edit Details``` on the Quality Gate page and uncheck the ```Choose a previous launch as a baseline``` checkbox. 

[ ![ImageName](Images/userGuide/QualityGates/NewErrors/new-errors12.png) ](Images/userGuide/QualityGates/NewErrors/new-errors12.png)

[ ![ImageName](Images/userGuide/QualityGates/NewErrors/new-errors13.png) ](Images/userGuide/QualityGates/NewErrors/new-errors13.png)

Follow the steps below depending on the preferable settings for the Baseline Launch.  

[ ![ImageName](Images/userGuide/QualityGates/NewErrors/new-errors14.png) ](Images/userGuide/QualityGates/NewErrors/new-errors14.png)

[ ![ImageName](Images/userGuide/QualityGates/NewErrors/new-errors15.png) ](Images/userGuide/QualityGates/NewErrors/new-errors15.png)

In this way you can compare analyzed launch not only with its previous execution but also with another launch. 
