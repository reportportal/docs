## Filtering launches

The data in a table in the "Launches" and "Debug" modes can be filtered with
a filtering block. Filters may be applied at all test item levels:
Launch/Suite/Test/Step. The "Launches" mode allows saving a filter
(a particular combination of filtering criteria) to the "Filters" tab. The
"Debug" mode does not allow saving filters.


### Filtering parameters

#### Launch level filters

You can filter launches by the following criteria:

-   **Name** - This filter is always displayed. At least 3 symbols required for search.
The system searches for the launches that contain the specified characters in
the launch name. For example, user sets Name = "abc", system will output launches with names "abcd",
"zabc", "zabcd", "abc".
This filter has next conditions: contains, not contains, equals, not equals.

-   **Description** - At least 3 symbols required for search.
The system searches for the launches that contain the specified characters in
the launch description.
This filter has next conditions: contains, not contains, equals, not equals.

-   **Start Time** - The system searches for the launches with a specified start time. The following
values are available:

-   **Tags** - 1 symbol is enough for search.
The system searches for the launches with specified tag(s). Several tags may be
specified. This filter has next conditions: AND/OR. You can find items by a tag in just one click. Click on a 
required tag under the
launch name, the system will display all test items of the current level that
have this tag.

-   **Owner** - At least 3 symbols required for search. The system searches for the launches owned by specified 
project members. This filter allows to filter launches by several owners.

-   **Total**, **Passed**, **Failed**, **Skipped**, **To Investigate** -This criteria are equipped with conditions: ≥ 
and ≤ and =.

-   **Product Bug**, **Automation Bug**, **System Issue** - This criteria are equipped with conditions: ≥ and ≤ and =.
The list of filtering criteria depends on the used on the project defect types.
If you use a standard set of defects: Product Bug, Automation Bug, System Issue, you will see them on the list of filtering criteria.
On projects with custom defects the system allows to filter launches by each predefined defect type, each custom defect type and by total number of defects that belong to the same group.
For example, if you create 2 custom Product Bugs, total number of product bugs will be calculated as summ of predefined *Product Bug* + your custom *Product Bug-1* and *Product Bug-2*.

[ ![Image](Images/userGuide/filteringLaunches/launchLevelFilters.png) ](https://youtu.be/Rk5khFVwowI)

#### Suite/Test level filters

The Suite/Test level allows the same filters set as on Launches level, except "Owner" criterion.

>**Note:** System searches for current level test items with specified criteria.

#### Step level filters

Report Portal allows following filters on Step level:

-   **Name** - This filter is always displayed. At least 3 symbols required for search.
System searches for the items containing specified characters in test item name. For example, user sets Name = "abc", system will output test items with names
"abcd", "zabc", "zabcd", "abc".
This filter has next conditions: contains, not contains, equals, not equals.

-   **Method Type** - System searches for test items on current level with Method Type(s) specified.

-   **Description** - At least 3 symbols required for search.
System searches items on current level containing specified value in test item
Description .
For example, user sets Description = "abc", system will output test items with
Descriptions "abcd", "zabc", "zabcd", "abc".
This filter has next conditions: contains, not contains, equals, not equals.

-   **Status** - System searches for test items on current level with Status(es) specified.

-   **Start Time** - System searches for test items on current level with specified Start Time value.

-   **Defect Type** - System searches for test items on current level with Defect Type(s) specified.
The list of filtering values depends on the used on the project defect types.
On project with default set of defect types, "Defect Type" criteria have following values: To Investigate, Product Bug, Automation Bug, System Issue, No Defect.
On projects with custom defects the system allows to filter items by each predefined defect type and each custom defect type.

-   **Defect Comment** - At least 3 symbols required for search.
System searches items on current level containing specified value in test item
Defect Comment.
For ex., user sets Defect Comment= "abc", system will output test items with
Defect Comments "abcd", "zabc", "zabcd", "abc".

-   **Tags** - 1 symbol is enough for search.
The system searches for the items with specified tag(s). Several tags may be
specified. This filter has next conditions: AND/OR.

[ ![Image](Images/userGuide/filteringLaunches/stepLevelFilters.png) ](https://youtu.be/S4aViEIurn4)