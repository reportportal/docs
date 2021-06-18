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

This filter has the next conditions: 
* *contains* - shown all test items that contain a specified combination in the name;
* *not contains* - shown all test items that don't contain a specified  combination in the name; 
* *equals* -  shown all test items with a name that is absolutely equal to the specified combination;
* *not equals* - shown all test items without items which name is absolutely equal to the specified combination;

-   **Number** - At least a symbol is required for this search. 
The system searches for launches with the mentioned number. This filter has the next conditions: equals, greater than or equal; less than or equal. 

* *greater than or equal* - shown all test items with launch number equal or greater than specified;
* *less than or equal* - shown all test items with launch number equal or less than specified;
* *equals* - shown only test items with specified number;

-   **Description** - At least 3 symbols are required for this search.
The system searches for the launches that contain the specified characters in
the launch description.
This filter has the next conditions: contains, not contains, equals, not equals.

* *contains* - shown all test items that contain specified combination in the description;
* *not contains* - shown all test items that don't contain specified  combination in the description; 
* *equals* -  shown all test items which description is absolutely equal to the specified combination;
* *not equals* - shown all test items without items which description is absolutely equal to the specified combination;

-   **Start Time** - The system searches for the launches with a specified start time. 

The following values are available:
* *Today* - shown all test items with start time Today;  filter contains a dynamic value and search launches with start time equals Today, i.e. current date; 
* *Last 2 days* - shown all test items with start time Last 2 days; filter contains a dynamic value, which will be updated every day, and search launches with start time equal Last 2 days;
* *Last 7 days* - shown all test items with start time Last 7 days;  filter contains a dynamic value, which will be updated every day, and search launches with start time equal Last 7 days;
* *Last 30 days* - shown all test items with start time Last 30 days; filter contains a dynamic value, which will be updated every day, and search launches with start time equal Last 30 days;
* *Custom range* - shown all test items with a start time in the custom period; the user can set strict period or dynamic value (filter will be a move to one day every day, where Today (current day) is the last day in period);

-   **Attributes** - It is allowed to search for the attributes with at least 1 symbol in it. The system searches for launches with the specified Attribute(s). Several attributes may be specified. 
You can find launches by a Attribute in just one click. To do this, click on a required Attribute under the launch name and the system will display all launches that have this Attribute.
This filter has the next conditions: 
* *all ( in API: 'filter.has.Attributes')* - shown all test items which contain all specified attributes; 
* *without all( in API:'filter.!in.Attributes')* -  shown all test items without specified attributes in any combinations;
* *any ( in API:filter.in.Attributes)*  - shown all test items which contain any combinations of specified attributes; 
* *without any ( in API:'filter.!has.Attributes')* - shown all test items without all specified attributes in case, when both of attributes present in the test item;

-   **Owner** - At least 3 symbols are required for this search. The system searches for the launches owned by specified project members. This filter can filter launches by several owners. You can find launches by an owner in just one click. 
To do this, click on a required owner under the launch name and the system will display all launches of the selected user.

-   **Total**, **Passed**, **Failed**, **Skipped**, **To Investigate** - These criteria are equipped with conditions: ≥ and ≤ and =.
* *greater than or equal* - shown all launches with test cases equal or greater than specified;
* *less than or equal* - shown all launches with test cases equal or less than specified;
* *equals* - shown only launches with a specified number of test cases;

-   **Product Bug**, **Automation Bug**, **System Issue** - These criteria are equipped with conditions: ≥ and ≤ and =.
The list of filtering criteria depends on the use of project defect types. If you use a standard set of defects: Product Bug, Automation Bug, System Issue, you will see them on the list of filtered criteria. On projects with custom defects, the system can filter launches by each predefined defect type, each custom defect type and by a total number of defects that belong to the same group.
For example, if you create 2 custom Product Bugs, the total number of product bugs will be calculated as the sum of predefined *Product Bug* + your custom *Product Bug-1* and *Product Bug-2*.
* *greater than or equal* - shown all launches with test cases equal or greater than specified;
* *less than or equal* - shown all launches with test cases equal or less than specified;
* *equals* - shown only launches with a specified number of test cases;

[ ![Image](Images/userGuide/filteringLaunches/launchLevelFilters.png) ](https://youtu.be/Rk5khFVwowI)

#### Suite/Test level filters

The Suite/Test level allows the same filters set as on the Launches level, but excludes the "Owner" criterion.

>**Note:** System searches for current level test items with specified criteria.

#### Step level filters

ReportPortal allows the following filters on Step level:

-   **Name** - This filter is always displayed. At least 3 symbols are required for this search.
The system searches for the items containing specified characters in the test item name. For example, user sets Name = "abc", the system will output test items with names "abcd", "zabc", "zabcd", "abc".
This filter has the next conditions: contains, not contains, equals, not equals.
* *contains* - shown all test items that contain specified combination in the name;
* *not contains* - shown all test items that don't contain specified  combination in the name; 
* *equals* -  shown all test items which name is absolutely equal to the specified combination;
* *not equals* - shown all test items without items which name is absolutely equal to the specified combination;

-   **Method Type** - System searches for test items on a current level with Method Type(s) specified.

-   **Description** - At least 3 symbols are required for this search.
The system searches items on the current level containing the specified value in the test item Description. For example, a user sets Description = "abc", the system will output test items with
Descriptions "abcd", "zabc", "zabcd", "abc".
This filter has the next conditions: contains, not contains, equals, not equals.
* *contains* - shown all test items that contain specified combination in the description;
* *not contains* - shown all test items that don't contain specified  combination in the description; 
* *equals* -  shown all test items which description is absolutely equal to the specified combination;
* *not equals* - shown all test items without items which description is absolutely equal to the specified combination;

-   **Status** - The system searches for test items on a current level with Status(es) specified.

-   **Start Time** - The system searches for test items on the current level with specified Start Time values.
* *Today* - shown all test items with start time Today;  filter contains a dynamic value and search launches with start time equals Today, i.e. current date; 
* *Last 2 days* - shown all test items with start time Last 2 days; filter contains a dynamic value, which will be updated every day, and search launches with start time equal Last 2 days;
* *Last 7 days* - shown all test items with start time Last 7 days;  filter contains a dynamic value, which will be updated every day, and search launches with start time equal Last 7 days;
* *Last 30 days* - shown all test items with start time Last 30 days; filter contains a dynamic value, which will be updated every day, and search launches with start time equal Last 30 days;
* *Custom range* - shown all test items with a start time in the custom period; the user can set strict period or dynamic value (filter will be a move to one day every day, where Today (current day) is the last day in period);

-   **Defect Type** - The system searches for test items on the current level with Defect Type(s) specified.
The list of filtering values depends on the use of project defect types.
On projects with defaults set to a specified defect type, "Defect Type" the criteria should contain the following values: To Investigate, Product Bug, Automation Bug, System Issue, No Defect.
On projects with customizable defects, the system will filter items by each predefined defect type and each custom defect type.

-   **Defect Comment** - At least 3 symbols are required for this search.
The system searches items on the current level containing specified values in the test item Defect Comment.
For example, a user sets Defect Comment = "abc", the system will output test items with
Defect Comments "abcd", "zabc", "zabcd", "abc".
* *contains* - shown all test items that contain specified combination in the defect comment;
* *not contains* - shown all test items that don't contain specified  combination in the defect comment; 
* *equals* -  shown all test items which defect comment is absolutely equal to the specified combination;
* *not equals* - shown all test items without items which defect comment is absolutely equal to the specified combination;

-   **Attributes** - 1 symbol is enough for this search.
The system searches for the items with or without a specified Attribute(s). Multiple Attributes may be specified at once. The following filtering conditions are available:  ALL/ANY and WITHOUT ALL/WITHOUT ANY.
* *all ( in API: 'filter.has.attributes')* - shown all test items which contain all specified Attributess; 
* *without all( in API:'filter.!in.attributes')* -  shown all test items without specified Attributess in any combinations;
* *any ( in API:filter.in.attributes)*  - shown all test items which contain any combinations of specified attributes; 
* *without any ( in API:'filter.!has.attributes')* - shown all test items without all specified attributes in case, when both of attributes present in the test item;

-   **Analysed by RP (AA)** - there are two options: With AA mark, Without AA mark.

-   **Ignored in AA** -  there are two options: With Ignore mark, Without ignoring mark.

-   **Issue in BTS** - there are two options: 1 symbol is enough for autocomplete.
The system searches for the items with or without a specified Issue in BTS. Multiple Issues may be specified at once. The following filtering conditions are available:  ALL/ANY and WITHOUT ALL/WITHOUT ANY.
* *all (has)* - shown all test items which contain all specified Issues; 
* *without all(!has)* -  shown test items without all specified Issies in any combinations;
* *any (in)* - shown all test items which contain any combinations of specified Issues; 
* *without any (!in)* - shown all test items without any specified Issues

- **Pattern name** - all patterns names, which a PM creates on Project Settings 

- **Has retries/Hasn't retries** - there are two options: Has retries/ No retries.


[ ![Image](Images/userGuide/filteringLaunches/stepLevelFilters.png) ](https://youtu.be/S4aViEIurn4)
