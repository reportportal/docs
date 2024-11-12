"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[23071],{24765:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"configuration/UserManagement","title":"User management","description":"After you have created a project, you can invite new members to it.","source":"@site/docs/configuration/UserManagement.mdx","sourceDirName":"configuration","slug":"/configuration/UserManagement","permalink":"/docs/configuration/UserManagement","draft":false,"unlisted":false,"editUrl":"https://github.com/reportportal/docs/blob/develop/docs/configuration/UserManagement.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"sidebar_label":"User management"},"sidebar":"docs","previous":{"title":"Project settings","permalink":"/docs/configuration/ProjectSettings"},"next":{"title":"Integration via plugin","permalink":"/docs/configuration/IntegrationViaPlugin"}}');var i=t(74848),o=t(28453);const s={sidebar_position:3,sidebar_label:"User management"},l="User management",a={},c=[{value:"Invite user on a project",id:"invite-user-on-a-project",level:3},{value:"Project role",id:"project-role",level:3},{value:"Edit project role",id:"edit-project-role",level:3},{value:"Unassign user from the project",id:"unassign-user-from-the-project",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{MediaViewer:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("MediaViewer",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"user-management",children:"User management"})}),"\n",(0,i.jsxs)(n.p,{children:["After ",(0,i.jsx)(n.a,{href:"/admin-panel/AllProjectsPage#create-projects",children:"you have created a project"}),", you can invite new members to it."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Permissions:"}),(0,i.jsx)("br",{}),"\nUser with ",(0,i.jsx)(n.code,{children:"ADMINISTRATOR"})," role and users with project role ",(0,i.jsx)(n.code,{children:"PROJECT_MANAGER"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"invite-user-on-a-project",children:"Invite user on a project"}),"\n",(0,i.jsx)(n.p,{children:'To invite a user on the "Project Members" page, perform the following steps:'}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Login into ReportPortal instance as with the ",(0,i.jsx)(n.code,{children:"PROJECT_MANAGER"})," project role."]}),"\n",(0,i.jsx)(n.li,{children:'Navigate to the "Project Members" page on the left menu.'}),"\n",(0,i.jsx)(n.li,{children:'Click the "Invite User" tab.'}),"\n",(0,i.jsx)(n.li,{children:"Enter the email address of the user in case he/she is not present in the ReportPortal database or enter his/her login name."}),"\n",(0,i.jsx)(n.li,{children:"In case the user is already available in the ReportPortal, his/her name will appear in the suggestion list.\nIf not, the Admin should enter the correct email address."}),"\n",(0,i.jsx)(n.li,{children:"Select an appropriate role."}),"\n",(0,i.jsx)(n.li,{children:"Then click 'Invite'."}),"\n",(0,i.jsx)(n.li,{children:"In case the user is already available in ReportPortal s/he will be assigned to the project\nIf not, the letter with an invitation link will be sent to the user email address."}),"\n",(0,i.jsx)(n.li,{children:"The user will receive an email with the link to the registration.\nWhen the user clicks the link, he/she will see a registration form."}),"\n",(0,i.jsx)(n.li,{children:'The user needs to fill in the registration form and click the "Register"\nbutton to complete the registration.'}),"\n",(0,i.jsx)(n.li,{children:'The user will be assigned to the project that the invitation was sent from, and to "Personal Project" with the PROJECT\nMANAGER project role.'}),"\n"]}),"\n",(0,i.jsx)(t,{src:"https://youtu.be/VOk80XZHpWc",alt:"Invite User From Project Members Page",type:"video"}),"\n",(0,i.jsx)(n.h3,{id:"project-role",children:"Project role"}),"\n",(0,i.jsx)(n.p,{children:"Every user is given a specific Project role within a specific project."}),"\n",(0,i.jsx)(n.p,{children:'Depends on the role, the user is able or not able to perform some actions. For more details, please see the "Permissions map".'}),"\n",(0,i.jsx)(n.p,{children:"There are 4 possible Project roles in ReportPortal:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"PROJECT MANAGER"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"MEMBER"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"OPERATOR"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"CUSTOMER"})}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ADMINISTRATOR"})," has all privileges on the project."]})}),"\n",(0,i.jsx)(n.h3,{id:"edit-project-role",children:"Edit project role"}),"\n",(0,i.jsx)(n.p,{children:"To edit the project role, perform the following steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Login into the ReportPortal as a user with ",(0,i.jsx)(n.code,{children:"PROJECT_MANAGER"})," project role."]}),"\n",(0,i.jsx)(n.li,{children:'Navigate to the "Project Members" page on the left menu.'}),"\n",(0,i.jsx)(n.li,{children:'Select a new value from the "Project Role" drop-down for the user. - The new project role will be automatically saved.'}),"\n"]}),"\n",(0,i.jsx)(t,{src:"https://youtu.be/DF38BbE5vws",alt:"Edit Project Role From Project Members Page",type:"video"}),"\n",(0,i.jsx)(n.h3,{id:"unassign-user-from-the-project",children:"Unassign user from the project"}),"\n",(0,i.jsx)(n.p,{children:"Depending on the project needs the assignment could be removed.\nTo unassign the assignment for the user on the project, perform the following steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Login into the ReportPortal as a user with ",(0,i.jsx)(n.code,{children:"PROJECT_MANAGER"})," project role."]}),"\n",(0,i.jsx)(n.li,{children:'Navigate to the "Project Members" page on the left menu.'}),"\n",(0,i.jsx)(n.li,{children:"Find the required member."}),"\n",(0,i.jsx)(n.li,{children:"Click the 'Unassign' button for the user."}),"\n",(0,i.jsx)(n.li,{children:"Confirm the action in the popup."}),"\n",(0,i.jsx)(n.li,{children:"The user will be unassigned from the current project but will stay in the system."}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Invite user, Assign/Unassign internal user to/from the project, change user's role on a project action can be done for a user\nwith a similar and lower role only."})}),"\n",(0,i.jsx)(n.admonition,{type:"important",children:(0,i.jsxs)(n.p,{children:["Administrator can also ",(0,i.jsx)(n.a,{href:"/admin-panel/AllUsersPage",children:"add users to the project"}),"."]})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);