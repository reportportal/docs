Tips and tricks
==============


### How to avoid local execution reported into project space:
**Option 1:** 

Use specific tag for launches, which should represent state.

Create filters using those tags. Build widgets and dashboards, based on those tags. 

You can put those additional tags via CI command line. 

So, only Jenkins will generate launches with those tags


**Option 2:**

Put `rp.mode=debug` in all `reportportal.properties` files.

For Jenkins executions, overload this param via command line as `rp.mode=default`

So all local launches will be in debug, all Jenkins – in launches.

**Option 3:**

Combine _option #2_ and _opition #3_, via launch name.

`rp.launch=xxx` saved in all `reportportal.properties` files.

For Jenkins executions, overload this param via command line as `rp.launch=yyy`

Auto-analysis will use only `yyy` launches for review.

Use filter, based on `yyy` name for widgets.

**Option 4:**

The same like _option 2_, but with `rp.enable=false|true`

This will turn off reporting for local launches

**Option 5:**

Set all users at project with Role `Operator`. This role can’t report data into RP.

Create internal user for Jenkins executions, set him a lead role. 

Will make possible to create launches only for Jenkins user

And you can combine all those options at the same time.
