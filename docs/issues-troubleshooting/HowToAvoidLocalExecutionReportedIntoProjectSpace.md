---
sidebar_position: 3
sidebar_label: How to avoid local execution reported into project space
---

# How to avoid local execution reported into project space

**Option 1:** 

Use a specific tag for launches, which should represent the state.

Create filters using those tags. Build widgets and dashboards, based on those tags. 

You can add those additional tags via the CI command line. 

So, only Jenkins will generate launches with those tags

**Option 2:**

Put `rp.mode=debug` in all `reportportal.properties` files.

For Jenkins executions, overload this param via the command line as `rp.mode=default`,

so that all local launches will be in debug, all Jenkins – in launches.

**Option 3:**

Combine _option #2_ and _option #3_, in the launch name.

`rp.launch=xxx` saved in all `reportportal.properties` files.

For Jenkins executions, overload this param via the command line as `rp.launch=yyy`

The auto-analysis will use only `yyy` launches for review.

Use filter, based on your `yyy` name for widgets.

**Option 4:**

The same like _option 2_, but with `rp.enable=false|true`

This will turn off reporting for local launches

**Option 5:**

Set all users on the project with the Role `Operator`. This role can’t report data into RP.

Create an internal user for Jenkins executions, set him/her as a lead role. 

This will make it possible to create launches only for Jenkins users

>**Note:** It is also possible to combine all those options at the same time.


