"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[225],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4636:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const i={sidebar_position:3,sidebar_label:"Project configuration"},r="Project configuration",l={unversionedId:"reportportal-configuration/ProjectConfiguration",id:"reportportal-configuration/ProjectConfiguration",title:"Project configuration",description:"To see the list of available projects and open a project, click the drop-down list in the top of the left menu.",source:"@site/docs/reportportal-configuration/ProjectConfiguration.mdx",sourceDirName:"reportportal-configuration",slug:"/reportportal-configuration/ProjectConfiguration",permalink:"/docs/reportportal-configuration/ProjectConfiguration",draft:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/reportportal-configuration/ProjectConfiguration.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Project configuration"},sidebar:"defaultSidebar",previous:{title:"Creation of project and adding users",permalink:"/docs/reportportal-configuration/CreationOfProjectAndAddingUsers"},next:{title:"ReportPortal jobs configuration",permalink:"/docs/reportportal-configuration/ReportPortalJobsConfiguration"}},s={},p=[{value:"Project settings",id:"project-settings",level:2},{value:"General settings",id:"general-settings",level:3},{value:"Integrations",id:"integrations",level:3},{value:"E-mail notifications",id:"e-mail-notifications",level:3},{value:"Custom defect types",id:"custom-defect-types",level:3},{value:"Auto-analysis and Pattern analysis",id:"auto-analysis-and-pattern-analysis",level:3},{value:"Demo data",id:"demo-data",level:3},{value:"Management of users on the project",id:"management-of-users-on-the-project",level:2},{value:"Invite user on a project",id:"invite-user-on-a-project",level:3},{value:"Project role",id:"project-role",level:3},{value:"Edit project role",id:"edit-project-role",level:3},{value:"Unassign user from the project",id:"unassign-user-from-the-project",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"project-configuration"},"Project configuration"),(0,o.kt)("p",null,"To see the list of available projects and open a project, click the drop-down list in the top of the left menu."),(0,o.kt)("p",null,"ReportPortal supports customization of the default settings."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Permission:"),'\nUsers with the Administrator role can edit project settings on the project "Settings" page in Administrate section and on the Project space.\nUsers with the PROJECT_MANAGER role can edit the settings on the project space only.\nMEMBER/ OPERATOR/ CUSTOMER can only view applied project settings.'),(0,o.kt)("h2",{id:"project-settings"},"Project settings"),(0,o.kt)("p",null,'To go to the project settings page, click the "Project Settings" icon in the left menu.'),(0,o.kt)("p",null,"The project configuration page will be opened."),(0,o.kt)("p",null,'The project settings are divided into following tabs: "General", "Integrations", "Notifications", "Defect Types", "Analyzer", "Pattern Analysis", "Demo Data" and "Quality Gates" (if you have our ',(0,o.kt)("a",{parentName:"p",href:"/category/quality-gates"},"premium feature"),")."),(0,o.kt)("h3",{id:"general-settings"},"General settings"),(0,o.kt)("p",null,"Our test automation results dashboard allows you to control the amount of the stored data (launches, test items, logs and attachments) by removing outdated elements using Quartz jobs.\nFunctionality of data removing depends on two configurations. "),(0,o.kt)("p",null,"The first one is API service back-end environment variables that are described in ",(0,o.kt)("a",{parentName:"p",href:"./ReportPortalJobsConfiguration"},"ReportPortal jobs configuration")),(0,o.kt)("p",null,'The second one is the "General" tab you can configure parameter of data storage in ReportPortal for this project:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Name \u2013 is a disabled field as the project name cannot be changed.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Launch inactivity timeout")," - this parameter specifies the scheduled time for a job to interrupt inactive launches (launches which have the status 'in progress', but there is no any items during the chosen period). There are six options: "))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1 hour, "),(0,o.kt)("li",{parentName:"ul"},"3 hours, "),(0,o.kt)("li",{parentName:"ul"},"6 hours, "),(0,o.kt)("li",{parentName:"ul"},"12 hours, "),(0,o.kt)("li",{parentName:"ul"},"1 day, "),(0,o.kt)("li",{parentName:"ul"},"7 days.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Keep launches")," - this parameter specifies how long the system will keep old launches in the data base. There are five options:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"7 days,"),(0,o.kt)("li",{parentName:"ul"},"14 days,"),(0,o.kt)("li",{parentName:"ul"},"21 days,"),(0,o.kt)("li",{parentName:"ul"},"30 days,"),(0,o.kt)("li",{parentName:"ul"},"90 days.")),(0,o.kt)("p",null,"After this period a launch will be deleted, and you can not see it in ReportPortal."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Keep logs")," - this parameter specifies how long the system will keep old logs in launches. Related launch structures will be saved, to keep statistics. There are five options:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"7 days,"),(0,o.kt)("li",{parentName:"ul"},"14 days,"),(0,o.kt)("li",{parentName:"ul"},"21 days,"),(0,o.kt)("li",{parentName:"ul"},"30 days,"),(0,o.kt)("li",{parentName:"ul"},"90 days.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Keep attachments")," - this parameter specifies how long to keep binary data (screenshots, files, video, and others attachments)\nin the system. There are five options:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"7 days,"),(0,o.kt)("li",{parentName:"ul"},"14 days,"),(0,o.kt)("li",{parentName:"ul"},"21 days,"),(0,o.kt)("li",{parentName:"ul"},"30 days,"),(0,o.kt)("li",{parentName:"ul"},"90 days.")),(0,o.kt)("media-view",{thumbnail:a(87194),src:"https://youtu.be/ih-ECyC29f0",alt:"Project settings in our real time dashboard open source",type:"video"}),(0,o.kt)("h3",{id:"integrations"},"Integrations"),(0,o.kt)("p",null,'The "Integration" tab can allow the project to connect ReportPortal with external systems or rewrite global configurations for third party systems.'),(0,o.kt)("p",null,"For more information on this topic, please refer to ",(0,o.kt)("a",{parentName:"p",href:"./IntegrationViaPlugin"},"Integration with external systems"),"."),(0,o.kt)("h3",{id:"e-mail-notifications"},"E-mail notifications"),(0,o.kt)("p",null,'The "Notifications" tab provides the administrator with the ability to activate e-mail notifications on the project.'),(0,o.kt)("p",null,"ReportPortal provides a way to add multiple rules with specific conditions. The Notification rule should be unique per project, have a unique parameter set, and specify recipients. For Example: In case, Launch names, attributes)."),(0,o.kt)("p",null,'Permissions:\nUsers with Administrator a role can configure "Notifications" in the Administrate section.\nUsers with PROJECT_MANAGER roles can edit the settings on the project space only.'),(0,o.kt)("p",null,"To do that, perform the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Login to the ReportPortal.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the Project -",">",' Project "Settings" page.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Open the "Notifications" tab and click on a button "Create new notification rule" ')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Enter your email into the "From" field. This email will be used as a notification sender.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Select recipients. To do that, start typing any symbols into the "Recipients" field.\nYou can select an item from the auto-complete tool-tip using the\nkeyboard (use the "Up" and "Down" arrows and "Enter" button). You can also enter a custom email into the "Recipients" field. To add a custom\nemail, just enter the email address and press "Enter".')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'The "Launch owner" is selected by default. Uncheck "Launch owner" to exclude\nhim/her from the notification.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Select the "In Case" setting. To do that, select one of the following options from the "In Case" drop-down.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Select launches (optional). To do that, start typing any symbols into the "Launch names" field.\nYou can select an item from the auto-complete tool-tip using the "Up" and "Down" arrows and clicking "Enter" on the keyboard. This is an alternate way you can add a new launch name that does not exist on the project. Several launches names can be selected; the recipients will receive notifications when each of them finishes.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Then Select attributes (optional). To do that, start typing any symbols into the "Attribute key" and "Attribute value" fields. The system will suggest the results in the drop-down, after at least 1 symbol is provided. It is also possible to add a new attribute (that does not exist on the project). Several attributes can be selected at once; the corresponding recipients will receive notifications about the launches that have all the specified attributes.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Switch ON Notifications")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'The system will activate the "Email notification" option. After the launch is finished, the recipients will receive a notification via email.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add more rules, if needed. Each Notification rule should be unique.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can edit/ copy/enable/disable notification rule by clicking on the appropriate controls on the notification rule.  "))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Users with a MEMBER/ OPERATOR/ CUSTOMER project role will not have the capability to edit the project settings, however, they do have the permissions to view them.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For using this functionality be sure that the E-mail server is configured.")),(0,o.kt)("h3",{id:"custom-defect-types"},"Custom defect types"),(0,o.kt)("p",null,'The "Defect Types" tab allows users with permissions to create custom defect types as subtypes of default defects on the project.'),(0,o.kt)("p",null,"After Installation the ReportPortal by default sets-up the following defect types groups:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"  ",(0,o.kt)("em",{parentName:"p"},"To investigate")," - means that no investigation was performed on this defect\nyet.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"  ",(0,o.kt)("em",{parentName:"p"},"Product Bug")," - defect was investigated and a production bug was found as a\ncause for this test failure.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"  ",(0,o.kt)("em",{parentName:"p"},"Automation Bug")," - defect was investigated and an automation test is not\ncorrect.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"  ",(0,o.kt)("em",{parentName:"p"},"System Issue")," - defect was investigated and it turns out that it is a system-level\nissue, like the app, crashed and caused the test to fail.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"  ",(0,o.kt)("em",{parentName:"p"},"No Defect")," - defect was investigated and defined as not a defect.")),(0,o.kt)("p",null,"ReportPortal allows the use of existing defect types (Product Bug, Automation Bug, System Issue, No Defect, To investigate) and or to create custom ones on the project settings page."),(0,o.kt)("p",null,"To create custom defect types, perform the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Login into the ReportPortal.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to Projects -",">",' Project "Settings" page.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Open "Defect Types" tab ')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click "Add Defect Type" button under any default defect type')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add new defect type form will appear ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Enter "Defect name" and "Abbreviation", select color for defect presentation on the launches grid and widgets.  ')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Submit form. You will see an added defect type on the chart preview."))),(0,o.kt)("p",null,"Add more custom defects, if you need it. The system allows us to add up to ten subtypes of each default defect type."),(0,o.kt)("p",null,"Now you can do bug triage and set defect types as default Product Bug/Automation Bug/System Issue/No Defect/TO investigate or custom defects. All of them will be available to select on the Defect Type editor.\nFor more information refer to the ",(0,o.kt)("a",{parentName:"p",href:"/work-with-reports/InvestigationOfFailure"},"Investigation of failure")," topic."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Default defects cannot be modified and or deleted from the system. Custom defect types can be deleted at any time."),(0,o.kt)("p",{parentName:"admonition"},"You can create up to 15 custom defect types for each group.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you have deleted a custom type from the system, all test executions with this deleted defect type get the parent type of the group in which deleted defect has belonged. Statistics updates in all launches where a deleted defect was present.",(0,o.kt)("br",{parentName:"p"}),"\n",'For example, if you create a custom "Product Bug-1" as a subtype of "Product Bugs" group and investigate a few\ndefects as "Product Bug-1", then remove "Product Bug-1" from your project, all investigated "Product Bug-1" defects\nwill be shown as "Product Bug".')),(0,o.kt)("media-view",{thumbnail:a(94410),src:"https://youtu.be/CcU2_dEu59k",alt:"Defect Type Configuration for clear test execution report",type:"video"}),(0,o.kt)("h3",{id:"auto-analysis-and-pattern-analysis"},"Auto-analysis and Pattern analysis"),(0,o.kt)("p",null,'The "Auto-Analysis" and "Pattern analysis" tabs can allow reducing test failure analysis routine on the project.'),(0,o.kt)("p",null,"For more information on this topic, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/category/analysis"},"Analysis"),"."),(0,o.kt)("h3",{id:"demo-data"},"Demo data"),(0,o.kt)("p",null,'The "Demo Data" tab provides a way to generate demo data on the project.'),(0,o.kt)("p",null,"The generated data could demonstrate how the launches, filter, and dashboard will look. On the other hand, demo data could be\nmodified or removed without any effect of your real objects."),(0,o.kt)("media-view",{thumbnail:a(2422),src:"https://youtu.be/bXHY0_sXAF8",alt:"Generate Demo Data with test report&analytics dashboard",type:"video"}),(0,o.kt)("h2",{id:"management-of-users-on-the-project"},"Management of users on the project"),(0,o.kt)("p",null,'On the "Project Members" page users with the appropriate roles can invite new members.'),(0,o.kt)("p",null,"Permissions: "),(0,o.kt)("p",null,"User with Administrator role and users with project role PROJECT_MANAGER."),(0,o.kt)("h3",{id:"invite-user-on-a-project"},"Invite user on a project"),(0,o.kt)("p",null,'To invite a user on the "Project Members" page, perform the following steps:'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Login into ReportPortal instance as with the PROJECT_MANAGER project role.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Navigate to the "Project Members" page on the left menu.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click the "Invite User" tab.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the email address of the user in case he/she is not present in the ReportPortal database or enter his/her login name.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In case the user is already available in the ReportPortal, his/her name will appear in the suggestion list.\nIf not, the Admin should enter the correct email address.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select an appropriate role.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Then click 'Invite'.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In case the user is already available in ReportPortal s/he will be assigned to the project\nIf not, the letter with an invitation link will be sent to the user email address.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The user will receive an email with the link to the registration.\nWhen the user clicks the link, he/she will see a registration form.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'The user needs to fill in the registration form and click the "Register"\nbutton to complete the registration. ')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'The user will be assigned to the project that the invitation was sent from, and to "Personal Project" with the PROJECT\nMANAGER project role. '))),(0,o.kt)("media-view",{thumbnail:a(37802),src:"https://youtu.be/VOk80XZHpWc",alt:"Invite User From Project Members Page",type:"video"}),(0,o.kt)("h3",{id:"project-role"},"Project role"),(0,o.kt)("p",null,"Every user is given a specific Project role within a specific project."),(0,o.kt)("p",null,'Depends on the role, the user is able or not able to perform some actions. For more details, please see the "Permissions map".'),(0,o.kt)("p",null,"There are 4 possible Project roles in ReportPortal:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PROJECT MANAGER"),(0,o.kt)("li",{parentName:"ul"},"MEMBER"),(0,o.kt)("li",{parentName:"ul"},"OPERATOR"),(0,o.kt)("li",{parentName:"ul"},"CUSTOMER")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The administrator has all privileges on the project.")),(0,o.kt)("h3",{id:"edit-project-role"},"Edit project role"),(0,o.kt)("p",null,"To edit the project role, perform the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Login into the ReportPortal as a user with PROJECT_MANAGER project role.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Navigate to the "Project Members" page on the left menu.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Select a new value from the "Project Role" drop-down for the user. - The new project role will be automatically saved.'))),(0,o.kt)("media-view",{thumbnail:a(73787),src:"https://youtu.be/DF38BbE5vws",alt:"Edit Project Role From Project Members Page",type:"video"}),(0,o.kt)("h3",{id:"unassign-user-from-the-project"},"Unassign user from the project"),(0,o.kt)("p",null,"Depending on the project needs the assignment could be removed.\nTo unassign the assignment for the user on the project, perform the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Login into the ReportPortal as a user with PROJECT_MANAGER project role.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Navigate to the "Project Members" page on the left menu.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Find the required member.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the 'Unassign' button for the user.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Confirm the action in the popup.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The user will be unassigned from the current project but will stay in the system."))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Invite user, Assign/Unassign internal user to/from the project, change user's role on a project action can be done for a user\nwith a similar and lower role only.")))}d.isMDXComponent=!0},94410:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/CustomDefectTypes-bf0065f64620b1ddd1c8d7f9ebb96978.png"},2422:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/DemoData-f9ebc1074ae52bb91fb962299c5f6ba2.png"},73787:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/EditProjectRole-511e7a213727f82d0387d78ac1dfd3c8.png"},37802:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/InviteUserProjectMembers-8e699a1dac0cbdb4c4b60bb32f4644ae.png"},87194:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/ProjectSettingsGeneral-20664c531eb7e0ad7aa63ff3d8126419.png"}}]);