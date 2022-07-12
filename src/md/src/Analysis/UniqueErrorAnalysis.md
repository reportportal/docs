## Unique Error Analysis

### Unique Error Analysis

“Unique Error analysis” functionality was implemented in version 5.7. This solution is used to detect unique errors in multiple logs. 
 
**“Unique error auto-analysis”** is set ON by default.

[ ![ImageName](Images/userGuide/analyzeLaunches/UniqueErrorAnalysis/unique_error1.png) ](Images/userGuide/analyzeLaunches/UniqueErrorAnalysis/unique_error1.png)

There are 2 settings: “include/exclude numbers” – it depends if you decide that numbers in error logs have significant value for analysis or not.

[ ![ImageName](Images/userGuide/analyzeLaunches/UniqueErrorAnalysis/unique_error2.png) ](Images/userGuide/analyzeLaunches/UniqueErrorAnalysis/unique_error2.png)

Now, Unique error auto-analysis will be started after a launch has been finished. 
 
To see the list of “Unique errors” for the launch, open any item level in the launch and click **“Unique errors”** tab. 

[ ![ImageName](Images/userGuide/analyzeLaunches/UniqueErrorAnalysis/unique_error3.png) ](Images/userGuide/analyzeLaunches/UniqueErrorAnalysis/unique_error3.png)

[ ![ImageName](Images/userGuide/analyzeLaunches/UniqueErrorAnalysis/unique_error4.png) ](Images/userGuide/analyzeLaunches/UniqueErrorAnalysis/unique_error4.png)

[ ![ImageName](Images/userGuide/analyzeLaunches/UniqueErrorAnalysis/unique_error5.png) ](Images/userGuide/analyzeLaunches/UniqueErrorAnalysis/unique_error5.png)

Finally, you can see the list of “Unique errors”.

[ ![ImageName](Images/userGuide/analyzeLaunches/UniqueErrorAnalysis/unique_error6.png) ](Images/userGuide/analyzeLaunches/UniqueErrorAnalysis/unique_error6.png)

There you can see a list of clusters with error logs, you can expand a cluster to check what tests belong to the same one and it could give you a hint during error analysis and defects assigning. The clusters are formed based on unique error logs, some small error logs can be merged and displayed as one cluster. 
 
>**NOTE: **
You can also run “Unique error analysis” manually from any item level in case auto analysis is set OFF. Please, follow the steps below: 

[ ![ImageName](Images/userGuide/analyzeLaunches/UniqueErrorAnalysis/unique_error7.png) ](Images/userGuide/analyzeLaunches/UniqueErrorAnalysis/unique_error7.png)

You can also run “Unique Error analysis” from the menu next to a particular launch.

[ ![ImageName](Images/userGuide/analyzeLaunches/UniqueErrorAnalysis/unique_error8.png) ](Images/userGuide/analyzeLaunches/UniqueErrorAnalysis/unique_error8.png)

Let’s consider some examples with the same Unique Errors but with different include/exclude numbers settings. 
 
We have 2 errors with identical text, but the difference is numeric value in the first error. 
 
1) An example with **“Include numbers to analyzed logs”** setting. Error with numeric value is displayed:

[ ![ImageName](Images/userGuide/analyzeLaunches/UniqueErrorAnalysis/unique_error9.png) ](Images/userGuide/analyzeLaunches/UniqueErrorAnalysis/unique_error9.png)

2) An example with **“Exclude numbers from analyzed logs”** setting. As you can see, error with numeric value is not displayed:

[ ![ImageName](Images/userGuide/analyzeLaunches/UniqueErrorAnalysis/unique_error10.png) ](Images/userGuide/analyzeLaunches/UniqueErrorAnalysis/unique_error10.png)

Thanks to “Unique Error analysis” functionality, it is no longer needed to spend time on analyzing: Is this failure a unique error or not? You can easily sort out the failures based on the found unique errors.