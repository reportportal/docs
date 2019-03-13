## A test item UniqueID

### UniqueID

A UniqueID is used for identifying a test item's originality. ReportPortal generates an ID automatically for all test items by default. 
The UniqueID generation is based on:

* A test item name;
* A project name; 
* A launch name;
* Names of all parents;
* All parameters of the item;

All this information become part of a test item in form of MD5 hash. After that a UID becomes a part of the item. It gives an opportunity to define the item uniqueness with no possibility of doubt. 
ReportPortal uses this functionality in a process of building widgets ( f.e.:`Most failed test cases`, `Flacky tests`), `Retry` and `Rerun`and etc.

Also if you use a Java based test frameworks you can provide a custom ID for a test item using the annotation `UniqueID` as well. Other clients are not supported yet.

[ ![Image](Images/userGuide/manageLaunches/Chocolate.png) ](Images/userGuide/manageLaunches/Chocolate.png)

[ ![Image](Images/userGuide/manageLaunches/UID.png) ](Images/userGuide/manageLaunches/UID.png)

>**Note:**
If you use a custom ID, you need to remember that a custom ID can affect a functionality based on test item uniqueness. 
