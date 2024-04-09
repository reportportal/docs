"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[43360],{98115:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=r(85893),n=r(11151);const s={sidebar_label:"Active Directory"},c="Active Directory",o={id:"reportportal-configuration/authorization/ActiveDirectory",title:"Active Directory",description:"The Active Directory plugin is available in ReportPortal on the Plugins page, enhancing the efficiency of our test report dashboard.",source:"@site/docs/reportportal-configuration/authorization/ActiveDirectory.md",sourceDirName:"reportportal-configuration/authorization",slug:"/reportportal-configuration/authorization/ActiveDirectory",permalink:"/docs/reportportal-configuration/authorization/ActiveDirectory",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/reportportal-configuration/authorization/ActiveDirectory.md",tags:[],version:"current",frontMatter:{sidebar_label:"Active Directory"},sidebar:"docs",previous:{title:"Authorization",permalink:"/docs/reportportal-configuration/authorization/"},next:{title:"GitHub",permalink:"/docs/reportportal-configuration/authorization/GitHub"}},l={},d=[];function a(e){const t={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"active-directory",children:"Active Directory"}),"\n",(0,i.jsx)(t.p,{children:"The Active Directory plugin is available in ReportPortal on the Plugins page, enhancing the efficiency of our test report dashboard."}),"\n",(0,i.jsx)(t.p,{children:"To set up access with Active Directory, follow these steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Log in to ReportPortal as an ADMIN user."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Click on the dropdown menu located to the right of the user's image."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Select the 'Administrative' link."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"From the left-hand sidebar, click on 'Plugins'."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Navigate to the 'Active Directory' tab."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Click on 'Add new integration'."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"At this point, several fields should be displayed."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"'Domain*': text\n'URL*': text\n'Base DN*': text\n'Email attribute*': text\n'Full name attribute' : text\n'Photo attribute' : text\n'UserSearchFilter' (the same as for LDAP): text \n"})}),"\n",(0,i.jsx)(t.p,{children:"Fields marked in red are mandatory. Once filled, click the 'Submit' button. Completing this process grants all Active Directory users access to the ReportPortal instance."}),"\n",(0,i.jsx)(t.p,{children:"To access ReportPortal, users should utilize their domain credentials (Login and password)."}),"\n",(0,i.jsx)(t.p,{children:"Refer to the example provided below featuring configurations for Microsoft Active Directory that have been successfully utilized by our users:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Table with properties and values for LDAP Microsoft Active Directory"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Property"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Url"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"auth-servers.domain.org.int:3358"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Base DN"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"OU=MAIN,DC=DOMAIN,DC=ORG,DC=INT"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Manager DN"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"cn=Service UserBind,ou=Service Accounts,ou=Colombia,ou=America,ou=ServiceAccounts,dc=DOMAIN,dc=ORG,dc=INT"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"User search filter"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"(&(objectClass=user)(sAMAccountName={0}))"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Password encoder type"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"NO"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Email attribute"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"mail"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Full name attribute"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"displayName"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Photo attribute"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"thumbnailPhoto"})})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}}}]);