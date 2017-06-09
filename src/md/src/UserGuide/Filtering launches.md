Filtering launches
------------------

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

### Create filter

To create a filter, perform the following steps:

1. Navigate to the "Launches" page.

2. Click on the "Add Filter" button.

3. Enter a new filter name (3-55 symbols long) on the Add filter popup, share
    it (if need) on the project and click "Add" button. Shared filter will be available for all team members on the current project.

4. The new filter tab will open. Now you can configure your filter. The unsaved filter is marked with an asterisk (\*).

5. To save the filter, select "Save" option from the filter context menu.

Your new filter will be saved and shown on the "Filters" page.

[ ![Image](Images/userGuide/filteringLaunches/createFilter.png) ](https://youtu.be/bZLtPv0t3bo)

>**Note:** Report Portal allows saving a filter on the "Launches" mode only. It's
impossible to save filters on the "Debug" tab.


### Manage filters

After the filter is saved, the following options are available in the context
menu:

- **Edit filter** -
This option allows edit filter name and share/unshare filter.
After changes filter tab will be marked as unsaved with the asterisk. Click
"Save" option to save changes. Filter will be saved on the project and available on the "Filters" page.

- **Save filter** - 
This option is available if the filter has unsaved changes.

- **Save all** -
This option is available, when more then 1 tab have unsaved changes.

- **Clone** -
This option allows to create a new tab with the same criteria.

- **Discard** -
This option helps to reset unsaved filter changes.

- **Close** -
This option allows to close filter tab with all selected criteria.

[ ![Image](Images/userGuide/filteringLaunches/manageFilters.png) ](https://youtu.be/FKWL3-jTVWs)

### Share filter

Not shared filters are available only for filter's owner. It means, that only owner can use it and build widgets based on it.
But you can share a filter for the project and allow other team members to use it or build widgets, based on your filter.

To share a filter, perform the following steps:

1. Open your filter on tab on the "Launches" page.

2. Click "Edit" option on the tab menu.

3. Edit filter popup window will appear.

4. Switch ON shared option and click "Update" button. The filter will be marked as shared.

5. To save the updates, select "Save" option from the filter context menu.

Your filter will be shared for the all team members.

[ ![Image](Images/userGuide/filteringLaunches/shareFilter.png) ](https://youtu.be/8vw-nr6FSwI)


The shared filters have the icons on tabs in "Launches" mode.

- filter, shared by you

[ ![Image](Images/pic_228.jpg) ](Images/pic_228.jpg)

- filter, shared by other team member

[ ![Image](Images/pic_227.jpg) ](Images/pic_227.jpg)


Also you can share filter on the "Filters" page on one click.

[ ![Image](Images/pic_233.jpg) ](Images/pic_233.jpg)

>**Note:** Filter related to the widget, becomes shared once the related widget is shared.


### "Filters" page

You can see the list of your filters and shared by other team members filters on "Filters" page. 

The following information is present on the "Filters" page:

- Name (organized as the search form)
- Filter Options
- Owner (user)
- Share info
- Actions (icons) - shown only for own filters. The following options are available: Add to launch tab
    (Remove from launch tab)/Edit/Share filter (Unshare filter)/Delete.

[ ![Image](Images/pic_175.jpg) ](Images/pic_175.jpg)

To open launches based on saved filter, click on the desired filter name or
the "Add to launch tab" option in the "Options" column. The filter will be
opened as a tab on the "Launches" page.

>**Note:** User with PROJECT MANAGER role can delete filter shared by other member by clicking on ‘Delete’ icon.
The filter will be deleted from the system.