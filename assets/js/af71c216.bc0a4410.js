"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[12],{17182:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"plugins/bug-tracking/AzureDevOps","title":"Azure DevOps","description":"To install the Azure DevOps (ADO) plugin, see Upload plugin section.","source":"@site/docs/plugins/bug-tracking/AzureDevOps.mdx","sourceDirName":"plugins/bug-tracking","slug":"/plugins/bug-tracking/AzureDevOps","permalink":"/docs/plugins/bug-tracking/AzureDevOps","draft":false,"unlisted":false,"editUrl":"https://github.com/reportportal/docs/blob/develop/docs/plugins/bug-tracking/AzureDevOps.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5,"sidebar_label":"Azure DevOps"},"sidebar":"docs","previous":{"title":"Jira Cloud","permalink":"/docs/plugins/bug-tracking/AtlassianJiraCloud"},"next":{"title":"GitLab","permalink":"/docs/plugins/bug-tracking/GitLab"}}');var t=n(74848),r=n(28453);const o={sidebar_position:5,sidebar_label:"Azure DevOps"},l="Azure DevOps",a={},d=[{value:"Global Azure DevOps BTS integration",id:"global-azure-devops-bts-integration",level:2},{value:"Add new global Azure DevOps BTS integration",id:"add-new-global-azure-devops-bts-integration",level:3},{value:"Update global Azure DevOps BTS integration",id:"update-global-azure-devops-bts-integration",level:3},{value:"Remove global Azure DevOps BTS integration",id:"remove-global-azure-devops-bts-integration",level:3},{value:"Project Azure DevOps BTS integration",id:"project-azure-devops-bts-integration",level:2},{value:"Add new project Azure DevOps BTS integration",id:"add-new-project-azure-devops-bts-integration",level:3},{value:"Reset to project Azure DevOps BTS Integrations",id:"reset-to-project-azure-devops-bts-integrations",level:3},{value:"Post issue to Azure DevOps BTS",id:"post-issue-to-azure-devops-bts",level:2},{value:"Link an issue with an issue in Azure DevOps BTS",id:"link-an-issue-with-an-issue-in-azure-devops-bts",level:2},{value:"Unlink an issue in Azure DevOps BTS",id:"unlink-an-issue-in-azure-devops-bts",level:2},{value:"Custom issue type in Azure DevOps BTS",id:"custom-issue-type-in-azure-devops-bts",level:2}];function c(e){const s={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components},{MediaViewer:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("MediaViewer",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"azure-devops",children:"Azure DevOps"})}),"\n",(0,t.jsxs)(s.p,{children:["To install the Azure DevOps (ADO) plugin, see ",(0,t.jsx)(s.a,{href:"/plugins/ManagePlugins#upload-plugin",children:"Upload plugin"})," section."]}),"\n",(0,t.jsx)(s.p,{children:"Integration with our centralized test automation tool can be helpful for projects which are already using Azure DevOps BTS (Bug Tracking System) as a tracking tool. This feature allows posting issues and linking/unlinking issues, getting updates on their statuses. For example, just a few clicks \u2013 and bug with detailed logs is created!"}),"\n",(0,t.jsx)(s.p,{children:"Azure DevOps BTS integration can be configured on the global level (for all projects on the instance) or on the project level (only for one project)."}),"\n",(0,t.jsx)(s.h2,{id:"global-azure-devops-bts-integration",children:"Global Azure DevOps BTS integration"}),"\n",(0,t.jsx)(s.h3,{id:"add-new-global-azure-devops-bts-integration",children:"Add new global Azure DevOps BTS integration"}),"\n",(0,t.jsxs)(s.p,{children:["You might want to configure ",(0,t.jsx)(s.strong,{children:"global integrations"})," which will be applied on all projects if all projects on your instance are using the same Azure DevOps BTS projects."]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Log in as ADMIN."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Go to Administrate > Plugins."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Click on Azure DevOps plugin."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Click on the \u201cAdd integration\u201d button."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i,{src:n(58703),alt:"Add global Azure DevOps BTS integration"}),"\n",(0,t.jsxs)(s.ol,{start:"5",children:["\n",(0,t.jsx)(s.li,{children:"Fill and Save the authorization form."}),"\n"]}),"\n",(0,t.jsx)(i,{src:n(39796),alt:"Global Azure DevOps BTS integration"}),"\n",(0,t.jsx)(s.p,{children:"Please, follow the steps below to get a token for Azure DevOps integration:"}),"\n",(0,t.jsx)(i,{src:n(60925),alt:"Personal access tokens"}),"\n",(0,t.jsx)(i,{src:n(64578),alt:"New token"}),"\n",(0,t.jsx)(i,{src:n(85707),alt:"Create new personal access token"}),"\n",(0,t.jsx)(i,{src:n(15856),alt:"Copy token"}),"\n",(0,t.jsx)(s.p,{children:"You can choose predefined Azure DevOps ticket fields after you have created a connection with the Azure DevOps BTS project. These fields will be shown to you all the time when you post an issue to the Azure DevOps BTS."}),"\n",(0,t.jsx)(s.p,{children:"This feature also gives you the ability to choose proper issue type for newly created issues in Azure DevOps BTS."}),"\n",(0,t.jsxs)(s.p,{children:["To choose a needed issue type and predefined field for the chosen issue, you should perform the following actions on the opened ",(0,t.jsx)(s.strong,{children:"Configuration"})," form:"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Choose issue type from the drop-down."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"2.Check the fields needed and fill them in if necessary."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Click on \u201cSubmit\u201d button."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i,{src:n(12761),alt:"Select issue type"}),"\n",(0,t.jsx)(s.p,{children:"Now team members on all your projects will be able to submit issues in Azure DevOps BTS. Options for Post Issue/Link issue are activated."}),"\n",(0,t.jsx)(s.p,{children:"You can add more integrations by clicking on \u201cAdd integration\u201d."}),"\n",(0,t.jsx)(i,{src:n(39726),alt:"Add more integrations"}),"\n",(0,t.jsxs)(s.p,{children:["User can add several integrations, but with a different name to the ",(0,t.jsx)(s.strong,{children:"one Azure DevOps BTS project"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Use case:"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Situation:"})," User wants to post to Azure DevOps BTS issues with type ",(0,t.jsx)(s.strong,{children:"Issue"})," and ",(0,t.jsx)(s.strong,{children:"Task"})," to the project NNN-MMM in Azure DevOps BTS. Is it possible? Yes!"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Solution:"})," Add two integrations to the project NNN-MMM in Azure DevOps BTS with names e.g., \u201cProject -1\u201d and \u201cProject -2\u201d. Add to the \u201cProject -1\u201d issue type ",(0,t.jsx)(s.strong,{children:"Issue"})," and for \u201cProject -2\u201d - issue type ",(0,t.jsx)(s.strong,{children:"Task"}),". While posing issue procedure, choose integration with needed type."]}),"\n",(0,t.jsx)(s.h3,{id:"update-global-azure-devops-bts-integration",children:"Update global Azure DevOps BTS integration"}),"\n",(0,t.jsx)(s.p,{children:"If you need to edit Azure DevOps BTS integration authorization parameters, please perform actions:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Log in as ADMIN."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Go to Administrate > Plugins."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Click on Azure DevOps plugin."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Click on a tab with existing integration."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Click on \u201cEdit authorization\u201d link."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i,{src:n(82743),alt:"Update global Azure DevOps BTS integration"}),"\n",(0,t.jsxs)(s.ol,{start:"6",children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Change \u201cIntegration name\u201d."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Type your Azure DevOps credentials."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Submit the form."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsx)(s.p,{children:"You can edit only \u201cIntegration name\u201d. If you need other changes, please submit new integration."})}),"\n",(0,t.jsx)(s.p,{children:"If you need to edit fields which should be posted in Azure DevOps BTS, please perform actions:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Log in as ADMIN."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Go to Administrate > Plugins."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Click on Azure DevOps plugin."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Click on the tab with existing integration."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Click on \u201cConfigure\u201d button."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i,{src:n(35583),alt:"Change issue type"}),"\n",(0,t.jsxs)(s.ol,{start:"6",children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Choose issue type from the drop-down."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Check the fields needed and fill them in if necessary."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Click on \u201cSubmit\u201d button."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"remove-global-azure-devops-bts-integration",children:"Remove global Azure DevOps BTS integration"}),"\n",(0,t.jsx)(s.p,{children:"If you need to remove Azure DevOps BTS integration, please perform actions:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Log in as ADMIN."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Go to Administrate > Plugins."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Click on Azure DevOps plugin."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Click on the tab with existing integration."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Click on \u201cRemove integration\u201d."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i,{src:n(22294),alt:"Remove global Azure DevOps BTS integration"}),"\n",(0,t.jsxs)(s.ol,{start:"6",children:["\n",(0,t.jsx)(s.li,{children:"Submit the action."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"project-azure-devops-bts-integration",children:"Project Azure DevOps BTS integration"}),"\n",(0,t.jsx)(s.h3,{id:"add-new-project-azure-devops-bts-integration",children:"Add new project Azure DevOps BTS integration"}),"\n",(0,t.jsx)(s.p,{children:"If any project needs different Azure DevOps BTS configurations, you should unlink a project from Global configurations and add a Project configuration. It means that now when a new global integration is added to the ReportPortal, it won't be applied to the unlinked project."}),"\n",(0,t.jsx)(s.p,{children:"For that,"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Log in as an ADMIN or Project Manager."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Go to Project Settings > Integrations."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Click on the Azure DevOps integration panel."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Click on \u201cUnlink and setup manually\u201d button."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i,{src:n(52621),alt:"Add project Azure DevOps BTS integration"}),"\n",(0,t.jsxs)(s.ol,{start:"5",children:["\n",(0,t.jsx)(s.li,{children:"Fill and confirm the authorization form."}),"\n"]}),"\n",(0,t.jsx)(i,{src:n(98724),alt:"Project Azure DevOps BTS integration"}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["Please, have a look at ",(0,t.jsx)(s.strong,{children:"Global Azure DevOps BTS"})," integration for detailed configuration steps."]})}),"\n",(0,t.jsx)(s.p,{children:"You can choose predefined Azure DevOps ticket fields after you have created a connection with the Azure DevOps BTS project. These fields will be shown to you all the time when you post an issue to the Azure DevOps BTS."}),"\n",(0,t.jsx)(s.p,{children:"This feature also gives you the ability to choose proper issue type for newly created issues in Azure DevOps BTS."}),"\n",(0,t.jsxs)(s.p,{children:["To choose a needed issue type and predefined field for the chosen issue, you should perform the following actions on the opened ",(0,t.jsx)(s.strong,{children:"Configuration"})," form:"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Choose issue type from the drop-down."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Check the needed fields and fill them in if necessary."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Click on \u201cSubmit\u201d button."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Now team members on this project will be able to submit issues in Azure DevOps BTS. Options for Post Issue/Link issue are activated."}),"\n",(0,t.jsx)(s.p,{children:"You can add more integrations by clicking on \u201cAdd integration\u201d button."}),"\n",(0,t.jsx)(s.h3,{id:"reset-to-project-azure-devops-bts-integrations",children:"Reset to project Azure DevOps BTS Integrations"}),"\n",(0,t.jsx)(s.p,{children:"If you want to delete project integrations with Azure DevOps BTS and link your project with global configurations, please perform actions described below:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Log in as an ADMIN or Project Manager."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Go to Project Settings > Integrations."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Click on the Azure DevOps integration panel."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Click on \u201cReset to global settings\u201d button."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Confirm the action."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i,{src:n(62587),alt:"Reset to project Azure DevOps BTS Integrations"}),"\n",(0,t.jsx)(s.h2,{id:"post-issue-to-azure-devops-bts",children:"Post issue to Azure DevOps BTS"}),"\n",(0,t.jsx)(s.p,{children:"Posting an issue to Azure DevOps BTS means creating a new issue in Azure DevOps BTS from ReportPortal and uploading logs and attachments from an execution."}),"\n",(0,t.jsx)(s.p,{children:"If you want to post a new issue to Azure DevOps BTS, you need to have a project or global integration with Azure DevOps BTS."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Log in to ReportPortal as Admin, PM, Member, Customer or Operator."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Go to Launches."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Choose a needed item."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i,{src:n(47762),alt:"Select item to post issue"}),"\n",(0,t.jsxs)(s.ol,{start:"4",children:["\n",(0,t.jsx)(s.li,{children:"Click on the pencil icon to open \u201cMake decision\u201d modal."}),"\n"]}),"\n",(0,t.jsx)(i,{src:n(62377),alt:"Open Make decision modal to post issue"}),"\n",(0,t.jsxs)(s.ol,{start:"5",children:["\n",(0,t.jsx)(s.li,{children:"Choose \u201cPost issue\u201d option and then \u201cApply & Continue\u201d."}),"\n"]}),"\n",(0,t.jsx)(i,{src:n(84256),alt:"Post issue and Apply and Continue buttons"}),"\n",(0,t.jsxs)(s.ol,{start:"6",children:["\n",(0,t.jsx)(s.li,{children:"Fill in the \u201cPost Issue\u201d form with valid data and submit the form."}),"\n"]}),"\n",(0,t.jsx)(i,{src:n(85351),alt:"Post issue to Azure DevOps BTS from our real-time dashboard open source"}),"\n",(0,t.jsxs)(s.ol,{start:"7",children:["\n",(0,t.jsx)(s.li,{children:"A new issue will be posted in Azure DevOps BTS with information from ReportPortal."}),"\n"]}),"\n",(0,t.jsx)(i,{src:n(32862),alt:"Issue posted in Azure DevOps BTS"}),"\n",(0,t.jsxs)(s.ol,{start:"8",children:["\n",(0,t.jsx)(s.li,{children:"A label with issue ID will be added to the test item."}),"\n"]}),"\n",(0,t.jsx)(i,{src:n(13582),alt:"A label with posted issue ID"}),"\n",(0,t.jsx)(s.h2,{id:"link-an-issue-with-an-issue-in-azure-devops-bts",children:"Link an issue with an issue in Azure DevOps BTS"}),"\n",(0,t.jsx)(s.p,{children:"Linking an issue with an issue in Azure DevOps BTS means adding a clickable link to an existing issue in Azure DevOps BTS from ReportPortal that will show a status of this issue."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Log in to ReportPortal as Admin, PM, Member, Customer or Operator."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Go to Launches."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Choose a needed item."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i,{src:n(56599),alt:"Select item to link an issue"}),"\n",(0,t.jsxs)(s.ol,{start:"4",children:["\n",(0,t.jsx)(s.li,{children:"Click on the pencil icon to open \u201cMake decision\u201d modal."}),"\n"]}),"\n",(0,t.jsx)(i,{src:n(55964),alt:"Open Make decision modal to link an issue"}),"\n",(0,t.jsxs)(s.ol,{start:"5",children:["\n",(0,t.jsx)(s.li,{children:"Choose \u201cLink issue\u201d option and then \u201cApply & Continue\u201d."}),"\n"]}),"\n",(0,t.jsx)(i,{src:n(85381),alt:"Link issue and Apply and Continue buttons"}),"\n",(0,t.jsxs)(s.ol,{start:"6",children:["\n",(0,t.jsx)(s.li,{children:"Fill in the \u201cLink issue\u201d form with valid data and submit the form."}),"\n"]}),"\n",(0,t.jsx)(i,{src:n(714),alt:"Link an issue with an issue in Azure DevOps BTS"}),"\n",(0,t.jsxs)(s.ol,{start:"7",children:["\n",(0,t.jsx)(s.li,{children:"A label with issue ID will be added to the test item."}),"\n"]}),"\n",(0,t.jsx)(i,{src:n(55923),alt:"A label with linked issue ID"}),"\n",(0,t.jsxs)(s.ol,{start:"8",children:["\n",(0,t.jsx)(s.li,{children:"Link is redirected to this issue in Azure DevOps BTS."}),"\n"]}),"\n",(0,t.jsx)(i,{src:n(81432),alt:"Redirect to this issue in Azure DevOps BTS"}),"\n",(0,t.jsx)(s.h2,{id:"unlink-an-issue-in-azure-devops-bts",children:"Unlink an issue in Azure DevOps BTS"}),"\n",(0,t.jsx)(s.p,{children:"You can also unlink an issue."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Click on the \u201cremove\u201d icon."}),"\n"]}),"\n",(0,t.jsx)(i,{src:n(49697),alt:"Select issue to remove"}),"\n",(0,t.jsxs)(s.ol,{start:"2",children:["\n",(0,t.jsx)(s.li,{children:"Click \u201cUnlink Issue\u201d."}),"\n"]}),"\n",(0,t.jsx)(i,{src:n(9894),alt:"Unlink an issue in Azure DevOps BTS"}),"\n",(0,t.jsxs)(s.ol,{start:"3",children:["\n",(0,t.jsx)(s.li,{children:"Link to the issue in Azure DevOps BTS is removed."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"custom-issue-type-in-azure-devops-bts",children:"Custom issue type in Azure DevOps BTS"}),"\n",(0,t.jsx)(s.p,{children:"You can configure any custom issue type (e.g., Bug for Adam) in Azure DevOps BTS and then choose it as predefined Azure DevOps ticket field. So, developer Adam will see on the Azure DevOps BTS all issues from ReporPortal which assigned to him."}),"\n",(0,t.jsx)(s.p,{children:"Follow the steps below to configure custom issue type:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Log in to ",(0,t.jsx)(s.a,{href:"https://dev.azure.com",children:"Azure portal"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Go to Organization settings."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i,{src:n(48911),alt:"Organization settings in Azure DevOps BTS"}),"\n",(0,t.jsxs)(s.ol,{start:"3",children:["\n",(0,t.jsx)(s.li,{children:"Click on the \u201cProcess\u201d menu item."}),"\n"]}),"\n",(0,t.jsx)(i,{src:n(32169),alt:"Process menu item in Azure DevOps BTS"}),"\n",(0,t.jsxs)(s.ol,{start:"4",children:["\n",(0,t.jsx)(s.li,{children:"Select three dots near the current process and create a new one."}),"\n"]}),"\n",(0,t.jsx)(i,{src:n(60992),alt:"Create new process"}),"\n",(0,t.jsx)(i,{src:n(39323),alt:"Custom process"}),"\n",(0,t.jsxs)(s.ol,{start:"5",children:["\n",(0,t.jsx)(s.li,{children:"Click on the name of the just created process."}),"\n"]}),"\n",(0,t.jsx)(i,{src:n(41458),alt:"Name of the just created process"}),"\n",(0,t.jsxs)(s.ol,{start:"6",children:["\n",(0,t.jsx)(s.li,{children:"Create custom issue type."}),"\n"]}),"\n",(0,t.jsx)(i,{src:n(13965),alt:"Create custom issue type in Azure DevOps BTS"}),"\n",(0,t.jsx)(i,{src:n(57668),alt:"Name of custom issue type in Azure DevOps BTS"}),"\n",(0,t.jsxs)(s.ol,{start:"7",children:["\n",(0,t.jsx)(s.li,{children:"Click on the project quantity and change the process for your project."}),"\n"]}),"\n",(0,t.jsx)(i,{src:n(12319),alt:"Project quantity"}),"\n",(0,t.jsx)(i,{src:n(32342),alt:"Change the process for your project"}),"\n",(0,t.jsx)(i,{src:n(44273),alt:"Select a target process"}),"\n",(0,t.jsxs)(s.ol,{start:"8",children:["\n",(0,t.jsx)(s.li,{children:"Change Issue Type for Azure DevOps BTS integration on ReportPortal."}),"\n"]}),"\n",(0,t.jsx)(i,{src:n(30056),alt:"Change Issue Type for Azure DevOps BTS integration on ReportPortal"}),"\n",(0,t.jsxs)(s.ol,{start:"9",children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Post issues to Azure DevOps BTS."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Now you can see issues with custom issue type on Azure DevOps BTS."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i,{src:n(9528),alt:"Issues with custom issue type on Azure DevOps BTS"})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},58703:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps1-5225fcff0b852dbca8b660a5711fc788.png"},35583:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps10-106c43126b0dc7d1f05cb107b7d59011.png"},22294:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps11-e3d921df7d2a61184f759e5138150446.png"},52621:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps12-3c057674f37c1eba25ae5e7306dd7d6a.png"},98724:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps13-e8be61acf93a1c65bdbc9448ea43765d.png"},62587:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps14-66db6f3915bf140003e7c447814cded9.png"},47762:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps15-49192a57e0c7d8bdc54ac44193ed5041.png"},62377:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps16-3d26b940fff21068dada4a77f2a4e140.png"},84256:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps17-d18d936b1dca567c81a622e1fc4466ec.png"},85351:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps18-d94859f1104fe1b1b9dce8cafc8a4463.png"},32862:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps19-267364a0286363e839094e7e0990fa52.png"},39796:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps2-c1a873d4f08f1d9e2d7ca6992a8fc719.png"},13582:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps20-0c4728da50217e7c67e5d66896e6ad28.png"},56599:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps21-07cdbad103782326975a1d510cb6b3d9.png"},55964:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps22-c6a4d611b5560ad2c9a5f0f577d5b9a5.png"},85381:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps23-62b14d994507796a0bb20d6cc2bff327.png"},714:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps24-d4c9b8a100cdb39be04fa4bc8f715ade.png"},55923:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps25-108d6cdbd505fe5d0fdb1ca60cfaf032.png"},81432:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps26-5ce503f614a8efe4fc24f183fc995f72.png"},49697:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps27-65ccaf022c7cba9c35fb1bd0c2b54ee2.png"},9894:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps28-09f8c69033eb5158f4f16ac7f7e6b1b0.png"},48911:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps29-f15f74e6430625388107d0136041cab4.png"},60925:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps3-cd83aebd387d938ff0c13767ed56aa17.png"},32169:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps30-cfe16e2c520fabe7646c7340511463fe.png"},60992:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps31-67822c75b92b9f8b997c91c67dfd3b94.png"},39323:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps32-2ee7e7fbdc13fe5dc27c72da1a3982e1.png"},41458:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps33-f2f6b5d8007461b8fb8b1fe5b2a6253e.png"},13965:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps34-ab54e22bfb935e26cd23ab3f519a8694.png"},57668:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps35-641b1946fd1d0179685a16a29a06b703.png"},12319:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps36-1f43eb62741fbcb56e460fc59a7b2ce5.png"},32342:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps37-2ff5541c34af029300b8ea127516aa9d.png"},44273:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps38-79275042f9181f5559c9005387d751a5.png"},30056:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps39-64e18fc0ebe781b4c131307be8bb7874.png"},64578:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps4-fcff7462fbeda37d5186dcbbdee02883.png"},9528:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps40-87095733a08d8d93110b72bc05d52c51.png"},85707:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps5-f8309759cc189185be4037000309e3c1.png"},15856:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps6-8266a9623f1609559443f7584f7900d7.png"},12761:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps7-b806a0e9b17356e800de3883ace83e1e.png"},39726:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps8-95b90b8adf9800435c8ed2e0eab274d4.png"},82743:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const i=n.p+"assets/images/AzureDevOps9-234bd41164d51cc0cb47455b16a5894a.png"},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>l});var i=n(96540);const t={},r=i.createContext(t);function o(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);