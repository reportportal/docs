"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[22438],{10170:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>r});const s=JSON.parse('{"id":"plugins/Monday","title":"Monday","description":"To install the Monday plugin, see Upload plugin section.","source":"@site/docs/plugins/Monday.mdx","sourceDirName":"plugins","slug":"/plugins/Monday","permalink":"/docs/plugins/Monday","draft":false,"unlisted":false,"editUrl":"https://github.com/reportportal/docs/blob/develop/docs/plugins/Monday.mdx","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7,"sidebar_label":"Monday"},"sidebar":"docs","previous":{"title":"GitLab","permalink":"/docs/plugins/GitLab"},"next":{"title":"Rally","permalink":"/docs/plugins/Rally"}}');var t=i(74848),o=i(28453);const a={sidebar_position:7,sidebar_label:"Monday"},l="Monday",d={},r=[{value:"Global Monday BTS integration",id:"global-monday-bts-integration",level:2},{value:"Add new global Monday BTS integration",id:"add-new-global-monday-bts-integration",level:3},{value:"Update global Monday BTS integration",id:"update-global-monday-bts-integration",level:3},{value:"Remove global Monday BTS integration",id:"remove-global-monday-bts-integration",level:3},{value:"Project Monday BTS integration",id:"project-monday-bts-integration",level:2},{value:"Add new project Monday BTS integration",id:"add-new-project-monday-bts-integration",level:3},{value:"Reset to global Monday BTS Integration",id:"reset-to-global-monday-bts-integration",level:3},{value:"Post issue to Monday BTS",id:"post-issue-to-monday-bts",level:3},{value:"Link an issue with an issue in Monday BTS",id:"link-an-issue-with-an-issue-in-monday-bts",level:3},{value:"Unlink an issue in Monday BTS",id:"unlink-an-issue-in-monday-bts",level:3}];function c(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...n.components},{MediaViewer:s}=e;return s||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("MediaViewer",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"monday",children:"Monday"})}),"\n",(0,t.jsxs)(e.p,{children:["To install the Monday plugin, see ",(0,t.jsx)(e.a,{href:"/plugins/ManagePlugins#upload-plugin",children:"Upload plugin"})," section."]}),"\n",(0,t.jsx)(e.p,{children:"Integration with the Monday Bug Tracking System (BTS) can be helpful for projects which are already using Monday BTS as a tracking tool. The integration provides an exchange of information between our test results reporting service and the Monday Server, such as posting issues and linking issues, getting updates on their statuses."}),"\n",(0,t.jsx)(e.admonition,{type:"important",children:(0,t.jsxs)(e.p,{children:["The Administrator can upload a plugin and create global integrations on the Plugin tab in the Administrate section.",(0,t.jsx)("br",{}),"\nThe Project Manager can work only on the project level. He can unlink and re-write global configuration with project ones on Project Settings > Integrations."]})}),"\n",(0,t.jsx)(e.p,{children:"Monday BTS integration can be configured on the global level (for all projects on the instance) or on the project level (only for one project)."}),"\n",(0,t.jsx)(e.h2,{id:"global-monday-bts-integration",children:"Global Monday BTS integration"}),"\n",(0,t.jsx)(e.h3,{id:"add-new-global-monday-bts-integration",children:"Add new global Monday BTS integration"}),"\n",(0,t.jsx)(e.p,{children:"You might want to configure global integrations which will be applied on all projects if all projects in your instance are using the same Monday BTS projects."}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Log in as ADMIN."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Go to Administrate > Plugins."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Click on Monday plugin panel."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Click on \u2018Add integration\u2019 button."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s,{src:i(40130),alt:"Add new global Monday BTS integration in our automation testing reporting tool"}),"\n",(0,t.jsxs)(e.ol,{start:"5",children:["\n",(0,t.jsx)(e.li,{children:"Fill and confirm the authorization form."}),"\n"]}),"\n",(0,t.jsx)(s,{src:i(6713),alt:"Create Global Monday BTS integration"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"'Integration Name': <The name which you want to give to your integration> - should be unique\n'Link to BTS': <valid URL of bug tracking system>\n'Board ID in BTS': <board ID in bug tracking system>\n'API Token': <your personal Access Token from Monday>\n"})}),"\n",(0,t.jsx)(e.p,{children:"How to find API Token in Monday:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Click on the user icon at the top right corner."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Open \u2018Developers\u2019 section."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Open \u2018My access tokens\u2019 tab."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s,{src:i(16816),alt:"How to find API Token in Monday"}),"\n",(0,t.jsx)(e.p,{children:"After you have created a connection with the Monday project, you can choose predefined Monday ticket fields. These fields will be shown to you all the time when you post the issue in Monday."}),"\n",(0,t.jsx)(s,{src:i(85839),alt:"Select predefined Monday ticket fields for Global integration"}),"\n",(0,t.jsx)(e.p,{children:"Now team members on all your projects will be able to submit issues in Monday. Options for Post Issue/Link issue are activated."}),"\n",(0,t.jsx)(e.p,{children:"You can add more integrations by clicking on \u2018Add integration\u2019 button."}),"\n",(0,t.jsx)(e.h3,{id:"update-global-monday-bts-integration",children:"Update global Monday BTS integration"}),"\n",(0,t.jsx)(e.p,{children:"If you need to edit Monday BTS integration parameters, perform actions described below:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Log in as ADMIN."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Go to Administrative > Plugins."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Click on Monday plugin panel."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Click on the tab with existing integration."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Click on \u2018Edit\u2019 icon."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Change \u2018Integration name\u2019."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Type your API Token."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Click \u2018Save\u2019 button."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s,{src:i(4294),alt:"Edit Monday BTS integration parameters"}),"\n",(0,t.jsx)(e.p,{children:"If you need to edit fields which should be posted in Monday BTS, perform actions described below:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Log in as ADMIN."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Go to Administrative > Plugins."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Click on Monday plugin panel."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Click on the tab with existing integration."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Click on \u2018Edit\u2019 button in Configuration section."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Check the needed fields and fill them in if necessary."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Click on \u2018Submit\u2019 button."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s,{src:i(1853),alt:"Edit fields which should be posted in Monday BTS"}),"\n",(0,t.jsx)(e.h3,{id:"remove-global-monday-bts-integration",children:"Remove global Monday BTS integration"}),"\n",(0,t.jsx)(e.p,{children:"If you need to remove Monday BTS integration, perform actions described below:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Log in as ADMIN."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Go to Administrative > Plugins."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Click on Monday plugin panel."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Click on the tab with existing integration."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Click on \u2018Remove\u2019 icon."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Click \u2018Delete\u2019 button."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s,{src:i(80724),alt:"Remove global Monday BTS integration in our test results dashboard"}),"\n",(0,t.jsx)(s,{src:"https://youtu.be/EzLUiyKS6Xw",alt:"Monday plugin. Global integration",type:"video"}),"\n",(0,t.jsx)(e.h2,{id:"project-monday-bts-integration",children:"Project Monday BTS integration"}),"\n",(0,t.jsx)(e.h3,{id:"add-new-project-monday-bts-integration",children:"Add new project Monday BTS integration"}),"\n",(0,t.jsx)(e.p,{children:"If any project needs different Monday BTS configurations, you should unlink a project from Global configurations and add a project configuration. It means that now when a new global integration is added, it won't be applied to the unlinked project."}),"\n",(0,t.jsx)(e.p,{children:"For that,"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Log in as an ADMIN or Project Manager."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Go to Project Settings > Integrations."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Click on the Monday integration panel."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Click on \u2018Add Project Integration\u2019 button."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Fill in the necessary fields and click \u2018Create\u2019 button."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s,{src:i(6643),alt:"Add project Monday BTS integration"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"'Integration Name': <The name which you want to give to your integration> - should be unique\n'Link to BTS': <valid URL of bug tracking system>\n'Board ID in BTS': <board ID in bug tracking system>\n'API Token': <your personal Access Token from Monday>\n"})}),"\n",(0,t.jsx)(e.p,{children:"After you have created a connection with the Monday project, you can choose predefined Monday ticket fields. These fields will be shown to you all the time when you post the issue in Monday."}),"\n",(0,t.jsx)(s,{src:i(74730),alt:"Select predefined Monday ticket field for project integration"}),"\n",(0,t.jsx)(e.p,{children:"Now team members on this project will be able to submit issues in Monday. Options for Post Issue/Link issue are activated."}),"\n",(0,t.jsx)(e.p,{children:"You can add more integrations by clicking on \u2018Add Project Integration\u2019 button."}),"\n",(0,t.jsx)(e.h3,{id:"reset-to-global-monday-bts-integration",children:"Reset to global Monday BTS Integration"}),"\n",(0,t.jsx)(e.p,{children:"If you want to delete project integrations with Monday BTS and link your project with global configurations, perform actions described below:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Log in as an ADMIN or Project Manager."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Go to Project Settings > Integrations."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Click on the Monday integration panel."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Click on \u2018Reset to Global Integrations\u2019 button."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Click \u2018Reset\u2019 button."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s,{src:i(37880),alt:"Reset to global Monday BTS Integration"}),"\n",(0,t.jsx)(s,{src:"https://youtu.be/LLGLjIKLvlo",alt:"Monday plugin. Project integration",type:"video"}),"\n",(0,t.jsx)(e.h3,{id:"post-issue-to-monday-bts",children:"Post issue to Monday BTS"}),"\n",(0,t.jsx)(e.p,{children:"Posting an issue to Monday BTS means creating a new issue in Monday BTS from ReportPortal."}),"\n",(0,t.jsx)(e.p,{children:"If you want to post a new issue to Monday BTS, you need to have a project or global integration with Monday."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Post issue via Step view"})}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Log in to ReportPortal as Admin, Project Manager, Member, Customer or Operator."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Go to a Step view."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Click on the pencil icon near a needed item to open \u2018Make decision\u2019 modal."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s,{src:i(22497),alt:"Post issue to Monday BTS"}),"\n",(0,t.jsxs)(e.ol,{start:"4",children:["\n",(0,t.jsx)(e.li,{children:"Set defect type, add comment, select \u2018Post issue\u2019 option and then \u2018Apply & Continue\u2019."}),"\n"]}),"\n",(0,t.jsx)(s,{src:i(73514),alt:"Select \u2018Post issue\u2019 option"}),"\n",(0,t.jsxs)(e.ol,{start:"5",children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Fill in the \u2018Post issue\u2019 form with valid data."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Click \u2018Post issue\u2019 button."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s,{src:i(12371),alt:"Fill in the \u2018Post issue\u2019 form"}),"\n",(0,t.jsx)(e.p,{children:"A new issue will be posted in Monday BTS with information from ReportPortal."}),"\n",(0,t.jsx)(s,{src:i(28764),alt:"New issue from ReportPortal posted in Monday BTS"}),"\n",(0,t.jsx)(e.p,{children:"A label with issue ID will be added to the test item."}),"\n",(0,t.jsx)(s,{src:i(58181),alt:"A label with issue ID in ReportPortal"}),"\n",(0,t.jsx)(s,{src:"https://youtu.be/ybVdhKAaKZc",alt:"Monday plugin. Post issue",type:"video"}),"\n",(0,t.jsx)(e.h3,{id:"link-an-issue-with-an-issue-in-monday-bts",children:"Link an issue with an issue in Monday BTS"}),"\n",(0,t.jsx)(e.p,{children:"Linking an issue with an issue in Monday BTS means adding a clickable link to an existing issue in Monday BTS from ReportPortal that will show a status of this issue."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Link issue via Step view"})}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Log in to ReportPortal as Admin, Project Manager, Member, Customer or Operator."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Go to a Step view."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Click on the pencil icon near a needed item to open \u2018Make decision\u2019 modal."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Select \u2018Link issue\u2019 option and then \u2018Apply & Continue\u2019."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s,{src:i(86382),alt:"Select \u2018Link issue\u2019 option"}),"\n",(0,t.jsxs)(e.ol,{start:"5",children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Fill in the \u2018Link issue\u2019 form with valid data."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Click \u2018Link issue\u2019 button."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s,{src:i(29399),alt:"Fill in the \u2018Link issue\u2019 form"}),"\n",(0,t.jsx)(e.p,{children:"A label with issue ID will be added to the test item."}),"\n",(0,t.jsx)(s,{src:i(62512),alt:"A label with the linked issue ID"}),"\n",(0,t.jsx)(s,{src:"https://youtu.be/298Q-6EZ3pM",alt:"Monday plugin. Link issue",type:"video"}),"\n",(0,t.jsx)(e.h3,{id:"unlink-an-issue-in-monday-bts",children:"Unlink an issue in Monday BTS"}),"\n",(0,t.jsx)(e.p,{children:"You can also unlink an issue."}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Click on the \u2018remove\u2019 icon."}),"\n"]}),"\n",(0,t.jsx)(s,{src:i(59417),alt:"Remove icon"}),"\n",(0,t.jsxs)(e.ol,{start:"2",children:["\n",(0,t.jsx)(e.li,{children:"Click \u2018Unlink Issue\u2019."}),"\n"]}),"\n",(0,t.jsx)(s,{src:i(1885),alt:"Unlink Issue button"}),"\n",(0,t.jsx)(e.p,{children:"The link to the issue in Monday BTS is removed."}),"\n",(0,t.jsx)(s,{src:"https://youtu.be/YFjYb5kFNT8",alt:"Monday plugin. Unlink issue",type:"video"})]})}function h(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},40130:(n,e,i)=>{i.r(e),i.d(e,{default:()=>s});const s=i.p+"assets/images/Monday1-b7ae784bc205b1c539f51fb07c60adcd.png"},37880:(n,e,i)=>{i.r(e),i.d(e,{default:()=>s});const s=i.p+"assets/images/Monday10-9ee8d40977e3f339017269ab39c99a04.png"},22497:(n,e,i)=>{i.r(e),i.d(e,{default:()=>s});const s=i.p+"assets/images/Monday11-922bc3f6dd2ea680ae002da7a8835b76.png"},73514:(n,e,i)=>{i.r(e),i.d(e,{default:()=>s});const s=i.p+"assets/images/Monday12-d4702da3957eb434e2c8003117008067.png"},12371:(n,e,i)=>{i.r(e),i.d(e,{default:()=>s});const s=i.p+"assets/images/Monday13-3eba36b851f197f921db0a61e0a17437.png"},28764:(n,e,i)=>{i.r(e),i.d(e,{default:()=>s});const s=i.p+"assets/images/Monday14-c0d87499187896ce3167ee3d4c67f400.png"},58181:(n,e,i)=>{i.r(e),i.d(e,{default:()=>s});const s=i.p+"assets/images/Monday15-2923d533d5c7f68773bcd5e031960772.png"},86382:(n,e,i)=>{i.r(e),i.d(e,{default:()=>s});const s=i.p+"assets/images/Monday16-a1ae40cd52beb465e933e9fd8db0b096.png"},29399:(n,e,i)=>{i.r(e),i.d(e,{default:()=>s});const s=i.p+"assets/images/Monday17-a536b9f91db94717f07a1b135601e8c5.png"},62512:(n,e,i)=>{i.r(e),i.d(e,{default:()=>s});const s=i.p+"assets/images/Monday18-4be3b3eb653d7bfc3f94263500b31906.png"},59417:(n,e,i)=>{i.r(e),i.d(e,{default:()=>s});const s=i.p+"assets/images/Monday19-b500c95f84431d471a163369a389dbee.png"},6713:(n,e,i)=>{i.r(e),i.d(e,{default:()=>s});const s=i.p+"assets/images/Monday2-a5f18b460cf32adb91b31e11ebf2ba0e.png"},1885:(n,e,i)=>{i.r(e),i.d(e,{default:()=>s});const s=i.p+"assets/images/Monday20-bb75e0fbbe371da520fc301317ea92d0.png"},16816:(n,e,i)=>{i.r(e),i.d(e,{default:()=>s});const s=i.p+"assets/images/Monday3-52713f39a5f1ea0aa5fa45a0d181c751.png"},85839:(n,e,i)=>{i.r(e),i.d(e,{default:()=>s});const s=i.p+"assets/images/Monday4-42ca2e2682c561f50c66c7f8a82e34c8.png"},4294:(n,e,i)=>{i.r(e),i.d(e,{default:()=>s});const s=i.p+"assets/images/Monday5-532dc0e1d25cd16e3dde8643a92b8ef7.png"},1853:(n,e,i)=>{i.r(e),i.d(e,{default:()=>s});const s=i.p+"assets/images/Monday6-6c9900ddea57c52677f6dcfbc4386c0c.png"},80724:(n,e,i)=>{i.r(e),i.d(e,{default:()=>s});const s=i.p+"assets/images/Monday7-8fd6fcc9ca9208420750d48adb6be1e6.png"},6643:(n,e,i)=>{i.r(e),i.d(e,{default:()=>s});const s=i.p+"assets/images/Monday8-d4836d46764d8870e73db2c75a4d0963.png"},74730:(n,e,i)=>{i.r(e),i.d(e,{default:()=>s});const s=i.p+"assets/images/Monday9-23a9fc71dfafe31304daf46fe4a8a144.png"}}]);