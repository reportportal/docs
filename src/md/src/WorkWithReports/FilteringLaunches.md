## Filtering launches

The data tables for the "Launches" and the "Debug" modes can be filtered with
a filtering block. Filters may be applied at all test item levels:
Launch/Suite/Test/Step. The "Launches" mode allows saving a filter
(a particular combination of filtering criteria) to the "Filters" tab. The
"Debug" mode does not allow saving filters.


### Filtering parameters

#### Launch level filters

You can filter launches by the following criteria:

-   **Name** - This filter is always displayed. At least 3 symbols are required for this search. 
The system searches for the launches that contain the specified characters in the launch name. For example, a user sets Name = "abc", the system will output launches with names "abcd", "zabc", "zabcd", "abc".
This filter has next conditions: contains, not contains, equals, not equals.

-   **Number** - At least symbol is required for this search. 
The system searches for launches with the mentioned number. This filter has next conditions: equals, greater than or equal; less than or equal. 

-   **Description** - At least 3 symbols are required for this search.
The system searches for the launches that contain the specified characters in
the launch description.
This filter has next conditions: contains, not contains, equals, not equals.

-   **Start Time** - The system searches for the launches with a specified start time. The following
values are available:

-   **Tags** - 1 symbol is enough for this search.
The system searches for launches with the specified tag(s) or without specified tag(s). Several tags may be specified. This filter has next conditions: ALL/ANY and WITHOUT ALL/WITHOUT ANY. 

You can find items by a tag in just one click. If you click on a required tag under the launch name, the system will display all test items of the current level that have this tag.

-   **Owner** - At least 3 symbols are required for this search. The system searches for the launches owned by specified 
project members. This filter can filter launches by several owners.

-   **Total**, **Passed**, **Failed**, **Skipped**, **To Investigate** - These criterias are equipped with conditions: ≥ 
and ≤ and =.

-   **Product Bug**, **Automation Bug**, **System Issue** - These criterias are equipped with conditions: ≥ and ≤ and =.
The list of filtering criteria depends on the use of the project defect types. If you use a standard set of defects: Product Bug, Automation Bug, System Issue, you will see them on the list of filtered criteria. On projects with custom defects the system can filter launches by each predefined defect type, each custom defect type and by total number of defects that belong to the same group.
For example, if you create 2 custom Product Bugs, the total number of product bugs will be calculated as summ of predefined *Product Bug* + your custom *Product Bug-1* and *Product Bug-2*.

[ ![Image](Images/userGuide/filteringLaunches/launchLevelFilters.png) ](https://youtu.be/Rk5khFVwowI)

#### Suite/Test level filters

The Suite/Test level allows the same filters set as on the Launches level, but excludes "Owner" criterion.

>**Note:** System searches for current level test items with specified criteria.

#### Step level filters

ReportPortal allows the following filters on Step level:

-   **Name** - This filter is always displayed. At least 3 symbols are required for this search.
The system searches for the items containing specified characters in test item name. For example, user sets Name = "abc", the system will output test items with names "abcd", "zabc", "zabcd", "abc".
This filter has next conditions: contains, not contains, equals, not equals.

-   **Method Type** - System searches for test items on current level with Method Type(s) specified.

-   **Description** - At least 3 symbols are required for this search.
The system searches items on the current level containing the specified value in the test item Description. For example, a user sets Description = "abc", the system will output test items with
Descriptions "abcd", "zabc", "zabcd", "abc".
This filter has next conditions: contains, not contains, equals, not equals.

-   **Status** - The system searches for test items on current level with Status(es) specified.

-   **Start Time** - The system searches for test items on the current level with specified Start Time values.

-   **Defect Type** - The system searches for test items on the current level with Defect Type(s) specified.
The list of filtering values depends on the use of the project defect types.
On projects with defaults set to a specified defect type, "Defect Type" the criteria should contain the following values: To Investigate, Product Bug, Automation Bug, System Issue, No Defect.
On projects with customizable defects the system will filter items by each predefined defect type and each custom defect type.

-   **Defect Comment** - At least 3 symbols are required for this search.
The system searches items on the current level containing specified values in the test item Defect Comment.
For example, a user sets Defect Comment = "abc", the system will output test items with
Defect Comments "abcd", "zabc", "zabcd", "abc".

-   **Tags** - 1 symbol is enough for this search.
The system searches for the items with or without specified tag(s). Multiple tags may be
specified at once. This filter has next conditions:  ALL/ANY and WITHOUT ALL/WITHOUT ANY.

-   **Analysed by RP (AA)** - there are two options: With AA mark, Without AA mark.

-   **Ignored in AA** -  there are two options: With Ignore mark, Without Ignore mark.

-   **Issue in BTS** - there are two options: Linked bug, No linked bug.

[ ![Image](Images/userGuide/filteringLaunches/stepLevelFilters.png) ](https://youtu.be/S4aViEIurn4)
