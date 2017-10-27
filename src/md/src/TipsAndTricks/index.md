# Tips and tricks

### How to avoid local execution reported into project space:
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

Combine _option #2_ and _opition #3_, in the launch name.

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

Note: It is also possible to combine all those options at the same time.

### How to add a test stack trace to a description automatically
You can make your process of a test analysis more convenient and quick by adding a description for failed tests that will include a last error message from the test log.
You will not need to open an every single test to see the failure reason. With this new functionality you will see test failures reasons right in a table on All launches (step level), so that you can perform group actions to items.

[ ![TipAndTricksStackTrace.png](Images/userGuide/TipAndTricksStackTrace.png) ](Images/userGuide/TipAndTricksStackTrace.png)

We have prepared an example how to extend a TestNG agent, and you can find it below:

**An extend agent service:**
```java
    public static class ParamTaggingTestNgService extends TestNGService {

        public ParamTaggingTestNgService(ListenerParameters parameters, ReportPortalClient reportPortalClient) {
            super(parameters, reportPortalClient);
        }

        @Override
        protected StartTestItemRQ buildStartStepRq(ITestResult testResult) {
            final StartTestItemRQ rq = super.buildStartStepRq(testResult);
            if (testResult.getParameters() != null && testResult.getParameters().length != 0) {
                final Set<String> tags = Optional.fromNullable(rq.getTags()).or(new HashSet<>());
                for (Object param : testResult.getParameters()) {
                    tags.add(param.toString());
                }
                rq.setTags(tags);

            }
            return rq;
        }

        @Override
        protected FinishTestItemRQ buildFinishTestMethodRq(String status, ITestResult testResult) {
            FinishTestItemRQ finishTestItemRQ = super.buildFinishTestMethodRq(status, testResult);
            if (testResult.getThrowable() != null) {
                String description =
                        "```error\n"
                                + Throwables.getStackTraceAsString(testResult.getThrowable())
                                + "\n```";
                description = description + Throwables.getStackTraceAsString(testResult.getThrowable());
                finishTestItemRQ.setDescription(description);
            }
            return finishTestItemRQ;
        }
    }
```

**An extend listener with your extended service:**
```java
	public static class ExtendedListener extends BaseTestNGListener {
		public ExtendedListener() {
			super(override(new TestNGAgentModule()).with((Module) binder -> binder.bind(ITestNGService.class)
					.toProvider(new TestNGProvider() {
						@Override
						protected TestNGService createTestNgService(ListenerParameters listenerParameters,
								ReportPortalClient reportPortalClient) {
							return new ParamTaggingTestNgService(listenerParameters, reportPortalClient);
						}
					})));
		}
	}
```
