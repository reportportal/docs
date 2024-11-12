"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[14418],{29820:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"configuration/ProjectSettings","title":"Project settings","description":"To see the list of available projects and open a project, click the drop-down list in the top of the left menu.","source":"@site/docs/configuration/ProjectSettings.mdx","sourceDirName":"configuration","slug":"/configuration/ProjectSettings","permalink":"/docs/configuration/ProjectSettings","draft":false,"unlisted":false,"editUrl":"https://github.com/reportportal/docs/blob/develop/docs/configuration/ProjectSettings.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"sidebar_label":"Project settings"},"sidebar":"docs","previous":{"title":"Configuration","permalink":"/docs/configuration/"},"next":{"title":"User management","permalink":"/docs/configuration/UserManagement"}}');var s=n(74848),o=n(28453);const a={sidebar_position:3,sidebar_label:"Project settings"},r="Project settings",l={},c=[{value:"Project settings",id:"project-settings-1",level:2},{value:"General settings",id:"general-settings",level:3},{value:"Integrations",id:"integrations",level:3},{value:"Notifications",id:"notifications",level:3},{value:"Custom defect types",id:"custom-defect-types",level:3},{value:"Auto-analysis and Pattern analysis",id:"auto-analysis-and-pattern-analysis",level:3},{value:"Demo data",id:"demo-data",level:3}];function d(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{MediaViewer:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("MediaViewer",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"project-settings",children:"Project settings"})}),"\n",(0,s.jsx)(t.p,{children:"To see the list of available projects and open a project, click the drop-down list in the top of the left menu."}),"\n",(0,s.jsx)(t.p,{children:"ReportPortal supports customization of the default settings."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Permission:"}),"\nUsers with the ",(0,s.jsx)(t.code,{children:"Administrator"}),' role can edit project settings on the project "Settings" page in Administrate section and on the Project space.\nUsers with the ',(0,s.jsx)(t.code,{children:"PROJECT_MANAGER"})," role can edit the settings on the project space only.\n",(0,s.jsx)(t.code,{children:"MEMBER"}),"/ ",(0,s.jsx)(t.code,{children:"OPERATOR"}),"/ ",(0,s.jsx)(t.code,{children:"CUSTOMER"})," can only view applied project settings."]}),"\n",(0,s.jsx)(t.h2,{id:"project-settings-1",children:"Project settings"}),"\n",(0,s.jsx)(t.p,{children:'To go to the project settings page, click the "Project Settings" icon in the left menu.'}),"\n",(0,s.jsx)(t.p,{children:"The project configuration page will be opened."}),"\n",(0,s.jsxs)(t.p,{children:['The project settings are divided into following tabs: "General", "Integrations", "Notifications", "Defect Types", "Analyzer", "Pattern Analysis", "Demo Data" and "Quality Gates" (if you have our ',(0,s.jsx)(t.a,{href:"/quality-gates",children:"premium feature"}),")."]}),"\n",(0,s.jsx)(t.h3,{id:"general-settings",children:"General settings"}),"\n",(0,s.jsx)(t.p,{children:"Our test automation results dashboard allows you to control the amount of the stored data (launches, test items, logs and attachments) by removing outdated elements using Quartz jobs.\nFunctionality of data removing depends on two configurations."}),"\n",(0,s.jsxs)(t.p,{children:["The first one is API service back-end environment variables that are described in ",(0,s.jsx)(t.a,{href:"/installation-steps-advanced/JobsConfiguration",children:"ReportPortal jobs configuration"})]}),"\n",(0,s.jsx)(t.p,{children:'The second one is the "General" tab you can configure parameter of data storage in ReportPortal for this project:'}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Name \u2013 is a disabled field as the project name cannot be changed."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Launch inactivity timeout"})," - this parameter specifies the scheduled time for a job to interrupt inactive launches (launches which have the status 'in progress', but there is no any items during the chosen period). There are six options:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"1 hour,"}),"\n",(0,s.jsx)(t.li,{children:"3 hours,"}),"\n",(0,s.jsx)(t.li,{children:"6 hours,"}),"\n",(0,s.jsx)(t.li,{children:"12 hours,"}),"\n",(0,s.jsx)(t.li,{children:"1 day,"}),"\n",(0,s.jsx)(t.li,{children:"7 days."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Keep launches"})," - this parameter specifies how long the system will keep old launches in the data base. There are five options:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"7 days,"}),"\n",(0,s.jsx)(t.li,{children:"14 days,"}),"\n",(0,s.jsx)(t.li,{children:"21 days,"}),"\n",(0,s.jsx)(t.li,{children:"30 days,"}),"\n",(0,s.jsx)(t.li,{children:"90 days."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"After this period a launch will be deleted, and you can not see it in ReportPortal."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Keep logs"})," - this parameter specifies how long the system will keep old logs in launches. Related launch structures will be saved, to keep statistics. There are five options:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"7 days,"}),"\n",(0,s.jsx)(t.li,{children:"14 days,"}),"\n",(0,s.jsx)(t.li,{children:"21 days,"}),"\n",(0,s.jsx)(t.li,{children:"30 days,"}),"\n",(0,s.jsx)(t.li,{children:"90 days."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Keep attachments"})," - this parameter specifies how long to keep binary data (screenshots, files, video, and others attachments)\nin the system. There are five options:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"7 days,"}),"\n",(0,s.jsx)(t.li,{children:"14 days,"}),"\n",(0,s.jsx)(t.li,{children:"21 days,"}),"\n",(0,s.jsx)(t.li,{children:"30 days,"}),"\n",(0,s.jsx)(t.li,{children:"90 days."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i,{src:"https://youtu.be/ih-ECyC29f0",alt:"Project settings in our real time dashboard open source",type:"video"}),"\n",(0,s.jsx)(t.h3,{id:"integrations",children:"Integrations"}),"\n",(0,s.jsx)(t.p,{children:'The "Integration" tab can allow the project to connect ReportPortal with external systems or rewrite global configurations for third party systems.'}),"\n",(0,s.jsxs)(t.p,{children:["For more information on this topic, please refer to ",(0,s.jsx)(t.a,{href:"/configuration/IntegrationViaPlugin",children:"Integration with external systems"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"notifications",children:"Notifications"}),"\n",(0,s.jsx)(t.p,{children:"The \u2018Notifications\u2019 tab provides the administrator with the ability to activate notifications on the project \u2013 through either Email or Slack."}),"\n",(0,s.jsx)(t.p,{children:"ReportPortal provides a way to add multiple rules with specific conditions. The notification rule should be unique per Notification group \u2013 Email or Slack, have a unique parameter set. For example: In case, Launch names, Attributes."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Users with ADMINISTRATOR role can configure \u2018Notifications\u2019 in the Administrate section.",(0,s.jsx)("br",{}),"\nUsers with PROJECT_MANAGER role can edit the settings on the project space only.",(0,s.jsx)("br",{}),"\nUsers with MEMBER/ OPERATOR/ CUSTOMER project role will not have the capability to edit the project settings, however, they do have the permission to view them."]})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Email notifications"})}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"For using this functionality be sure that the Email server is configured. For that, go to the Project Settings -> Integrations -> Email Server."})}),"\n",(0,s.jsx)(t.p,{children:"To create Email notification rule, perform the following steps:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Go to the Project settings -> Notifications."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Choose Email Notification Group."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Click \u2018Create Rule\u2019 button."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Fill the form:"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Rule name"})," \u2013 from 1 to 55 characters, mandatory field"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Recipients"})," \u2013 optional field"]}),"\n",(0,s.jsx)(t.p,{children:"Start typing any symbols into the \u2018Recipients\u2019 field. You can select an item from the auto-complete tooltip using the keyboard (use the \u2018Up\u2019 and \u2018Down\u2019 arrows and \u2018Enter\u2019 button). You can also enter a custom email into the \u2018Recipients\u2019 field. To add a custom email, just enter the email address and press \u2018Enter\u2019."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Launch owner"})," \u2013 optional checkbox"]}),"\n",(0,s.jsx)(t.p,{children:"The \u2018Launch owner\u2019 checkbox is selected by default. Uncheck \u2018Launch owner\u2019 to exclude him/her from the notification."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"In case"})," \u2013 optional field, dropdown with the options:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Always \u2013 notification will be sent upon the launch finish."}),"\n",(0,s.jsx)(t.li,{children:"10% of items have issues \u2013 notification will be sent, if more than 10% of items have issues."}),"\n",(0,s.jsx)(t.li,{children:"20% of items have issues \u2013 notification will be sent, if more than 20% of items have issues."}),"\n",(0,s.jsx)(t.li,{children:"50% of items have issues \u2013 notification will be sent, if more than 50% of items have issues."}),"\n",(0,s.jsx)(t.li,{children:"Launch has issues \u2013 notification will be sent, if at least 1 item has issues"}),"\n",(0,s.jsx)(t.li,{children:"Launch has \u2018To Investigate\u2019 items \u2013 notification will be sent, if at least 1 item has \u2018To Investigate\u2019"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Launch names"})," \u2013 optional field"]}),"\n",(0,s.jsx)(t.p,{children:"Start typing any symbols into the \u2018Launch names\u2019 field. You can select an item from the auto-complete tooltip using the \u2018Up\u2019 and \u2018Down\u2019 arrows and clicking \u2018Enter\u2019 on the keyboard. This is an alternate way you can add a new launch name that does not exist on the project. Several launches names can be selected; the recipients will receive notifications when each of them finishes."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Attributes"})," \u2013 optional checkbox"]}),"\n",(0,s.jsx)(t.p,{children:"When the \u2018Attributes\u2019 checkbox is checked, user can provide key/value for attributes and select the necessary radio button:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"All attributes should match"}),"\n",(0,s.jsx)(t.li,{children:"Any attribute should match"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Start typing any symbols into the \u2018Attribute key\u2019 and \u2018Attribute value\u2019 fields. The system will suggest the results in the dropdown, after at least 1 symbol is provided. It is also possible to add a new attribute (that does not exist on the project). Several attributes can be selected at once; the corresponding recipients will receive notifications about the launches that have all the specified attributes."}),"\n",(0,s.jsx)(t.p,{children:"You can edit/ copy/enable/disable notification rule by clicking on the appropriate controls on the notification rule."}),"\n",(0,s.jsxs)(t.ol,{start:"5",children:["\n",(0,s.jsx)(t.li,{children:"Click on \u2018Create\u2019 button."}),"\n"]}),"\n",(0,s.jsx)(i,{src:n(14815),alt:"Create Email Notification rule"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Slack notifications"})}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"To use this functionality, ensure that the Slack plugin is uploaded and enabled. For that, go to Administrate -> Plugins or contact your instance Administrator."})}),"\n",(0,s.jsx)(t.p,{children:"To create Slack notification rule, perform the following steps:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Go to the Project settings -> Notifications."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Choose Slack Notification Group."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Click \u2018Create Rule\u2019 button."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Fill the form:"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Rule name"})," \u2013 from 1 to 55 characters, mandatory field"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Webhook URL"})," \u2013 mandatory field (it is configured on the ",(0,s.jsx)(t.a,{href:"/plugins/Slack#create-an-application-in-slack",children:"Slack side"}),")"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"In case"})," \u2013 optional field, dropdown with the options:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Always \u2013 notification will be sent upon the launch finish."}),"\n",(0,s.jsx)(t.li,{children:"10% of items have issues \u2013 notification will be sent, if more than 10% of items have issues."}),"\n",(0,s.jsx)(t.li,{children:"20% of items have issues \u2013 notification will be sent, if more than 20% of items have issues."}),"\n",(0,s.jsx)(t.li,{children:"50% of items have issues \u2013 notification will be sent, if more than 50% of items have issues."}),"\n",(0,s.jsx)(t.li,{children:"Launch has issues \u2013 notification will be sent, if at least 1 item has issues"}),"\n",(0,s.jsx)(t.li,{children:"Launch has \u2018To Investigate\u2019 items \u2013 notification will be sent, if at least 1 item has \u2018To Investigate\u2019"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Launch names"})," \u2013 optional field"]}),"\n",(0,s.jsx)(t.p,{children:"Start typing any symbols into the \u2018Launch names\u2019 field. You can select an item from the auto-complete tooltip using the \u2018Up\u2019 and \u2018Down\u2019 arrows and clicking \u2018Enter\u2019 on the keyboard. This is an alternate way you can add a new launch name that does not exist on the project. Several launches names can be selected; the recipients will receive notifications when each of them finishes."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Attributes"})," \u2013 optional checkbox"]}),"\n",(0,s.jsx)(t.p,{children:"When the \u2018Attributes\u2019 checkbox is checked, user can provide key/value for attributes and select the necessary radio button:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"All attributes should match"}),"\n",(0,s.jsx)(t.li,{children:"Any attribute should match"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Start typing any symbols into the \u2018Attribute key\u2019 and \u2018Attribute value\u2019 fields. The system will suggest the results in the dropdown, after at least 1 symbol is provided. It is also possible to add a new attribute (that does not exist on the project). Several attributes can be selected at once; the corresponding recipients will receive notifications about the launches that have all the specified attributes."}),"\n",(0,s.jsx)(t.p,{children:"You can edit/ copy/enable/disable notification rule by clicking on the appropriate controls on the notification rule."}),"\n",(0,s.jsxs)(t.ol,{start:"5",children:["\n",(0,s.jsx)(t.li,{children:"Click on \u2018Create\u2019 button."}),"\n"]}),"\n",(0,s.jsx)(i,{src:n(30895),alt:"Create Email Notification rule"}),"\n",(0,s.jsx)(t.h3,{id:"custom-defect-types",children:"Custom defect types"}),"\n",(0,s.jsx)(t.p,{children:'The "Defect Types" tab allows users with permissions to create custom defect types as subtypes of default defects on the project.'}),"\n",(0,s.jsx)(t.p,{children:"After Installation the ReportPortal by default sets-up the following defect types groups:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"To investigate"})," - means that no investigation was performed on this defect yet."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Product Bug"})," - defect was investigated and a production bug was found as a cause for this test failure."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Automation Bug"})," - defect was investigated and an automation test is not correct."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"System Issue"})," - defect was investigated and it turns out that it is a system-level issue, like the app, crashed and caused the test to fail."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"No Defect"})," - defect was investigated and defined as not a defect."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"ReportPortal allows the use of existing defect types (Product Bug, Automation Bug, System Issue, No Defect, To investigate) and or to create custom ones on the project settings page."}),"\n",(0,s.jsx)(t.p,{children:"To create custom defect types, perform the following steps:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Login into the ReportPortal."}),"\n",(0,s.jsx)(t.li,{children:'Navigate to Projects -> Project "Settings" page.'}),"\n",(0,s.jsx)(t.li,{children:'Open "Defect Types" tab'}),"\n",(0,s.jsx)(t.li,{children:'Click "Add Defect Type" button under any default defect type'}),"\n",(0,s.jsx)(t.li,{children:"Add new defect type form will appear"}),"\n",(0,s.jsx)(t.li,{children:'Enter "Defect name" and "Abbreviation", select color for defect presentation on the launches grid and widgets.'}),"\n",(0,s.jsx)(t.li,{children:"Submit form. You will see an added defect type on the chart preview."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Add more custom defects, if you need it. The system allows us to add up to ten subtypes of each default defect type."}),"\n",(0,s.jsxs)(t.p,{children:["Now you can do bug triage and set defect types as default Product Bug/Automation Bug/System Issue/No Defect/TO investigate or custom defects. All of them will be available to select on the Defect Type editor.\nFor more information refer to the ",(0,s.jsx)(t.a,{href:"/work-with-reports/InvestigationOfFailure",children:"Investigation of failure"})," topic."]}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"Default defects cannot be modified and or deleted from the system. Custom defect types can be deleted at any time."}),(0,s.jsx)(t.p,{children:"You can create up to 15 custom defect types for each group."})]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["If you have deleted a custom type from the system, all test executions with this deleted defect type get the parent type of the group in which deleted defect has belonged. Statistics updates in all launches where a deleted defect was present.",(0,s.jsx)(t.br,{}),"\n",'For example, if you create a custom "Product Bug-1" as a subtype of "Product Bugs" group and investigate a few\ndefects as "Product Bug-1", then remove "Product Bug-1" from your project, all investigated "Product Bug-1" defects\nwill be shown as "Product Bug".']})}),"\n",(0,s.jsx)(i,{src:"https://youtu.be/CcU2_dEu59k",alt:"Defect Type Configuration for clear test execution report",type:"video"}),"\n",(0,s.jsx)(t.h3,{id:"auto-analysis-and-pattern-analysis",children:"Auto-analysis and Pattern analysis"}),"\n",(0,s.jsx)(t.p,{children:'The "Auto-Analysis" and "Pattern analysis" tabs can allow reducing test failure analysis routine on the project.'}),"\n",(0,s.jsxs)(t.p,{children:["For more information on this topic, please refer to ",(0,s.jsx)(t.a,{href:"/analysis",children:"Analysis"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"demo-data",children:"Demo data"}),"\n",(0,s.jsx)(t.p,{children:'The "Demo Data" tab provides a way to generate demo data on the project.'}),"\n",(0,s.jsx)(t.p,{children:"The generated data could demonstrate how the launches, filter, and dashboard will look. On the other hand, demo data could be\nmodified or removed without any effect of your real objects."}),"\n",(0,s.jsx)(i,{src:"https://youtu.be/bXHY0_sXAF8",alt:"Generate Demo Data with test report&analytics dashboard",type:"video"})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},14815:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"assets/images/EmailNotification-39380a7b116187ae7f7bbbe01a292223.png"},30895:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"assets/images/SlackNotification-5854f5b98fb59a2f161e7e1299a1a472.png"}}]);