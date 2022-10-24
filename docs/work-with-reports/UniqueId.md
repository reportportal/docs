---
sidebar_position: 7
sidebar_label: Unique ID
---

# Unique ID

ReportPortal generates an ID automatically for all test items by default.
The UniqueID generation is based on:

* A test item name;
* A project name;
* A launch name;
* Names of all parents;
* All parameters of the item;

>**NOTE:**
> Unique ID deprecated/will be replaced by Test Case ID gradually.

All this information becomes part of a test item in the form of the MD5 hash. After that, a UID becomes a part of the item. It allows defining the item's uniqueness with no possibility of doubt.
ReportPortal uses this functionality in a process of building widgets ( f.e.:'Most failed test cases', 'Flacky tests'), 'Retry' and 'Rerun'and, etc.
