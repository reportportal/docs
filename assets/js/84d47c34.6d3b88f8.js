"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[62892],{61946:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"issues-troubleshooting/HowToAddATestStackTraceToADescriptionAutomatically","title":"How to add a test stack trace to a description automatically","description":"You can make your process of a test analysis more convenient and quick by adding a description for failed tests that will include a last error message from the test log.","source":"@site/docs/issues-troubleshooting/HowToAddATestStackTraceToADescriptionAutomatically.mdx","sourceDirName":"issues-troubleshooting","slug":"/issues-troubleshooting/HowToAddATestStackTraceToADescriptionAutomatically","permalink":"/docs/issues-troubleshooting/HowToAddATestStackTraceToADescriptionAutomatically","draft":false,"unlisted":false,"editUrl":"https://github.com/reportportal/docs/blob/develop/docs/issues-troubleshooting/HowToAddATestStackTraceToADescriptionAutomatically.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"sidebar_label":"How to add a test stack trace to a description automatically"},"sidebar":"docs","previous":{"title":"How to avoid local execution reported into project space","permalink":"/docs/issues-troubleshooting/HowToAvoidLocalExecutionReportedIntoProjectSpace"},"next":{"title":"Issues with LDAPS: how to resolve","permalink":"/docs/issues-troubleshooting/IssuesWithLDAPSHowToResolve"}}');var a=s(74848),o=s(28453);const n={sidebar_position:4,sidebar_label:"How to add a test stack trace to a description automatically"},i="How to add a test stack trace to a description automatically",l={},c=[];function d(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components},{MediaViewer:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("MediaViewer",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"how-to-add-a-test-stack-trace-to-a-description-automatically",children:"How to add a test stack trace to a description automatically"})}),"\n",(0,a.jsx)(t.p,{children:"You can make your process of a test analysis more convenient and quick by adding a description for failed tests that will include a last error message from the test log."}),"\n",(0,a.jsx)(t.p,{children:"You will not need to open an every single test to see the failure reason. With this new functionality you will see test failures reasons right in a table on All launches (step level), so that you can perform group actions to items."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"How to activate this option:"})}),"\n",(0,a.jsx)(t.p,{children:"Change your listener to wrap log messages on error level with special text:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-error",children:"    <place your error message here>\n"})}),"\n",(0,a.jsx)(r,{src:s(85396),alt:"Add a description for failed tests automatically in our test report dashboard"}),"\n",(0,a.jsx)(t.p,{children:"We have prepared an example how to extend a TestNG agent, and you can find it below:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"An extend agent service:"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'    public static class ParamTaggingTestNgService extends TestNGService {\n\n        public ParamTaggingTestNgService(ListenerParameters parameters, ReportPortalClient reportPortalClient) {\n            super(parameters, reportPortalClient);\n        }\n\n        @Override\n        protected StartTestItemRQ buildStartStepRq(ITestResult testResult) {\n            final StartTestItemRQ rq = super.buildStartStepRq(testResult);\n            if (testResult.getParameters() != null && testResult.getParameters().length != 0) {\n                final Set<String> tags = Optional.fromNullable(rq.getTags()).or(new HashSet<>());\n                for (Object param : testResult.getParameters()) {\n                    tags.add(param.toString());\n                }\n                rq.setTags(tags);\n\n            }\n            return rq;\n        }\n\n        @Override\n        protected FinishTestItemRQ buildFinishTestMethodRq(String status, ITestResult testResult) {\n            FinishTestItemRQ finishTestItemRQ = super.buildFinishTestMethodRq(status, testResult);\n            if (testResult.getThrowable() != null) {\n                String description =\n                        "```error\\n"\n                                + Throwables.getStackTraceAsString(testResult.getThrowable())\n                                + "\\n```";\n                description = description + Throwables.getStackTraceAsString(testResult.getThrowable());\n                finishTestItemRQ.setDescription(description);\n            }\n            return finishTestItemRQ;\n        }\n    }\n'})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"An extend listener with your extended service:"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"    public static class ExtendedListener extends BaseTestNGListener {\n        public ExtendedListener() {\n            super(override(new TestNGAgentModule()).with((Module) binder -> binder.bind(ITestNGService.class)\n                    .toProvider(new TestNGProvider() {\n                        @Override\n                        protected TestNGService createTestNgService(ListenerParameters listenerParameters,\n                                ReportPortalClient reportPortalClient) {\n                            return new ParamTaggingTestNgService(listenerParameters, reportPortalClient);\n                        }\n                    })));\n        }\n    }\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},85396:(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});const r=s.p+"assets/images/TipAndTricksStackTrace-894edf8a0ae594e25597cd6305131c43.png"}}]);