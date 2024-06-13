"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[23398],{83732:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=i(85893),o=i(11151);const r={sidebar_label:"GitHub"},s="GitHub",a={id:"plugins/authorization/GitHub",title:"GitHub",description:"Our open source test reporting tool  allows logging in via GitHub OAuth Web Application Flow.",source:"@site/docs/plugins/authorization/GitHub.md",sourceDirName:"plugins/authorization",slug:"/plugins/authorization/GitHub",permalink:"/docs/plugins/authorization/GitHub",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/plugins/authorization/GitHub.md",tags:[],version:"current",frontMatter:{sidebar_label:"GitHub"},sidebar:"docs",previous:{title:"Active Directory",permalink:"/docs/plugins/authorization/ActiveDirectory"},next:{title:"LDAP",permalink:"/docs/plugins/authorization/LDAP"}},l={},c=[{value:"Presequences",id:"presequences",level:3},{value:"ReportPortal configuration",id:"reportportal-configuration",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"github",children:"GitHub"}),"\n",(0,n.jsx)(t.p,{children:"Our open source test reporting tool  allows logging in via GitHub OAuth Web Application Flow."}),"\n",(0,n.jsx)(t.h3,{id:"presequences",children:"Presequences"}),"\n",(0,n.jsxs)(t.p,{children:["To enable this feature you need to ",(0,n.jsx)(t.a,{href:"https://github.com/settings/applications/new",children:"register new application in Github"})]}),"\n",(0,n.jsx)(t.p,{children:"Fill the following fields:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Application name"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Report Portal"})}),(0,n.jsx)(t.td,{children:"Just something which allow you recognize what's this."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Homepage URL"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"https://{HOST}:{PORT}/uat/sso/user"})}),(0,n.jsxs)(t.td,{children:["Replace with ",(0,n.jsx)(t.code,{children:"{HOST}"})," and ",(0,n.jsx)(t.code,{children:"{PORT}"})," with appropriate values of your instance. Naturally you can omit ",(0,n.jsx)(t.code,{children:":{PORT}"})," if it's default port for HTTPS protocol."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Authorization callback URL"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"https://{HOST}:{PORT}/uat/sso/login/github"})}),(0,n.jsxs)(t.td,{children:["As in the previous field replace with ",(0,n.jsx)(t.code,{children:"{HOST}"})," and ",(0,n.jsx)(t.code,{children:"{PORT}"})," with your appropriate values."]})]})]})]}),"\n",(0,n.jsx)(t.p,{children:'Once new application is created, you will have Client ID. Click on "Generate a new client secret" to get Client Secret, but do not close the window until you configure the Authorization on RP, since it will never show you the Secret again.'}),"\n",(0,n.jsx)(t.h3,{id:"reportportal-configuration",children:"ReportPortal configuration"}),"\n",(0,n.jsx)(t.p,{children:"To setup access with GitHub auth on ReportPortal:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Log in to the ReportPortal as an ADMIN user"}),"\n",(0,n.jsx)(t.li,{children:"Open the list on the right of the user's image."}),"\n",(0,n.jsx)(t.li,{children:"Click the 'Administrative' link"}),"\n",(0,n.jsx)(t.li,{children:"Click the 'Server Settings' from the left-hand sidebar"}),"\n",(0,n.jsx)(t.li,{children:"Go to the 'Authorization Configuration' tab"}),"\n",(0,n.jsx)(t.li,{children:"Then change the switcher position of 'Activate GitHub Authorization' to ON"}),"\n",(0,n.jsx)(t.li,{children:"The Next fields should appear:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"'Client ID': <value_of_clientId>\n'Client Secret': <value_of_clientSecret>\n'Add GitHub Organization' button-link: (optional)\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["In case the 'Organization Name' is not added, all GitHub users will have access to the ReportPortal instance.",(0,n.jsx)("br",{}),"\nIf the 'Organization Name' is specified, only users of this organization will have an access to ReportPortal instance.",(0,n.jsx)("br",{}),"\nIf the Name of GitHub organization is not validated, verify that the name is correct."]})}),"\n",(0,n.jsx)(t.p,{children:"Example of GitHub auth configuration:\nFill in the form:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"'Client Id': 8767988c424a0e7a2640\n'Client Secret': ef22c9f804257afaf399a2dada7c8f22dee5fd1b\n'Organization Name': reportportal\n"})}),"\n",(0,n.jsx)(t.p,{children:"Click on 'Submit' button.\nA confirmation message in status bar should be shown.\nA 'Login with GitHub' button will appear on login form."})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);