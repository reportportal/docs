## A test item UniqueID

### UniqueID

A UniqueID is used for identifying  a test item's originality. ReportPortal generates an ID automatically for all test items by default. 
The UID is generated based on:

*	A project name; 
* A launch name;
* Names of all parents;
* All parameters of the item;

All this information is encoded into MD5. After that a UID becomes a part of the item. It gives an opportunity to define the item uniqueness with no possibility of doubt. 
ReportPortal plans to use this functionality in a process of building widgets ( f.e.:`Most failed test cases`, `Flack test`), `Rety` and `Rerun`, `Merge` and etc.

You can provide a custom ID for a test item using the annotation as well. 
>**Note:**
If you use a custom ID, you need to remember that a custom ID can affect a functionality based on test item uniqueness. 
