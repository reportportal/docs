"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[65622],{72390:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=t(85893),s=t(11151);const r={sidebar_position:2,sidebar_label:"Creation of project and adding users"},o="Creation of project and adding users",a={id:"configuration/CreationOfProjectAndAddingUsers",title:"Creation of project and adding users",description:"The main question of how you can organize your working space in ReportPortal.",source:"@site/docs/configuration/CreationOfProjectAndAddingUsers.md",sourceDirName:"configuration",slug:"/configuration/CreationOfProjectAndAddingUsers",permalink:"/docs/configuration/CreationOfProjectAndAddingUsers",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/configuration/CreationOfProjectAndAddingUsers.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Creation of project and adding users"},sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/configuration/"},next:{title:"Project configuration",permalink:"/docs/configuration/ProjectConfiguration"}},l={},c=[{value:"Create a project",id:"create-a-project",level:2},{value:"Add users to project",id:"add-users-to-project",level:2},{value:"Invite a user to a project",id:"invite-a-user-to-a-project",level:2},{value:"Assign user to the project",id:"assign-user-to-the-project",level:2},{value:"Edit project role",id:"edit-project-role",level:2},{value:"Unassign user from the project",id:"unassign-user-from-the-project",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"creation-of-project-and-adding-users",children:"Creation of project and adding users"}),"\n",(0,i.jsx)(n.p,{children:"The main question of how you can organize your working space in ReportPortal.\nLet's see two use cases which can help you to make a decision."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Use Case 1"}),":"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Situation:"})," We have a small team. Everybody can see everything. We need one dashboard which shows information about the whole project."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Solution:"})," Create one project. Assign all users on the created project. View all types of test cases (UI, API, Unit and so on) on this project. Divide executions by custom filters. Create a dashboard with a widget based on filters."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Pros:"})," You have a dashboard that can combine all results needed for your team. You need to configure only one project."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Cons:"})," All team members can see all results, you can not configure permissions rules."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Use Case 2"}),":"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Situation:"})," We have a big team with a difficult permission structure and nested streams. Only persons with granted permissions can see results of a certain stream."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Solution:"})," Create separate projects for different streams. Assign users to appropriate projects. Create a dashboard with a widget based on filters for each project."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Pros:"})," Security, only users with granted permission will have access to the data."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Cons:"})," You can not see a single dashboard for several dashboards."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If you choose a strategy, it is time to create your first project."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Permission:"}),'\nVia "Administrate" section ',(0,i.jsx)(n.code,{children:"ADMINISTRATOR"})," can create, configure, delete projects and add/invite/assign/unassign users on/to the projects."]}),"\n",(0,i.jsx)(n.h2,{id:"create-a-project",children:"Create a project"}),"\n",(0,i.jsx)(n.p,{children:"To create a project for a team:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Login to the ReportPortal as an ADMIN user"}),"\n",(0,i.jsx)(n.li,{children:"Open menu at the bottom."}),"\n",(0,i.jsx)(n.li,{children:"Click the 'Administrate' link"}),"\n",(0,i.jsx)(n.li,{children:"Select 'Projects' from the left-hand sidebar"}),"\n",(0,i.jsx)(n.li,{children:"Click the 'Add New Project' button in the right top corner"}),"\n",(0,i.jsx)(n.li,{children:"Then enter a name of the project"}),"\n",(0,i.jsx)(n.li,{children:"Click the 'Add' button."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"A confirmation message in the status bar should appear."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The name of the project should contain between 3-256 symbols.\nIt can include Latin and numeric characters, as well as underscores and dashes.\nThe name should be unique and cannot be changed after saving."})}),"\n",(0,i.jsxs)(n.p,{children:["An Admin can configure the project settings or leave them as the default.\nProject members with PROJECT_MANAGER roles are able to set up the project settings.\nTo know how project settings could be updated, go to the ",(0,i.jsx)(n.a,{href:"/configuration/ProjectConfiguration",children:"ProjectConfiguration"})," section."]}),"\n",(0,i.jsx)(n.p,{children:'To know more about the project\'s management, go to "Administrate" section > "All Projects" page.'}),"\n",(0,i.jsxs)(n.p,{children:["You have a project, now add your team members to it.  You can create a new user and send credentials for them - ",(0,i.jsx)(n.strong,{children:"Add user"})," or you can send them an invite link - ",(0,i.jsx)(n.strong,{children:"Invite user"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"add-users-to-project",children:"Add users to project"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Permission:"}),'\nVia "Administrate" section, only ',(0,i.jsx)(n.code,{children:"ADMINISTRATOR"})," can add users."]}),"\n",(0,i.jsx)(n.p,{children:"To add a user, perform the following steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Login into ReportPortal instance as Administrator."}),"\n",(0,i.jsx)(n.li,{children:'Navigate to the "Administrate" section -> "All users" page.'}),"\n",(0,i.jsx)(n.li,{children:'Click "Add User" button.'}),"\n",(0,i.jsx)(n.li,{children:'Fill all fields with valid data in the "Add user" form and click on the "Add" button.'}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"'login': <unique_login_name>\n'Full Name': <user_full_name>\n'Email': <unique_email_address>\n'Account role': USER (by default)\n'Project Role': MEMBER (by default)\n'Password': could be entered manually (at least 6 symbols required) or generated via the link under the field.\n"})}),"\n",(0,i.jsx)(n.p,{children:"Example of user creation:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"Enter the user's login: Demo\nEnter the user's full name: Demo user\nEnter the user's email: demo_user@example.com\n'Account role': USER (by default)\n'Project Role': MEMBER (by default)\nAdd password: 1q2w3e \n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:'This is the only place in the system where an Administrator can be created\nfrom. "Project role" is disabled, if "Administrator" value has been selected in the "Account role" field. The "ProjectRole" parameter is not specified for\nAdministrator, the Administrator has full privileges on the project.'})}),"\n",(0,i.jsx)(n.p,{children:"Submit the form."}),"\n",(0,i.jsx)(n.p,{children:"A confirmation message in the status bar should appear."}),"\n",(0,i.jsx)(n.p,{children:"The notification email letter is sent to the email address of the new user."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Please, do not forget to review project roles on regular basis. We recommend to do it at least quarterly."})}),"\n",(0,i.jsxs)(n.p,{children:['By default, the system creates a personal project for new users. All new users which have been added to the ReportPortal will have a personal project along with the project where they have been assigned on. The user will be assigned to  "Personal Project" with the ',(0,i.jsx)(n.code,{children:"PROJECT MANAGER"})," project role."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["If you do not need a personal project, ",(0,i.jsx)(n.code,{children:"ADMINISTRATOR"})," can delete it. This project will be removed from the instance. But if the user is unassigned from all projects in the system, and he/she will log in to the ReportPortal after that - the deleted personal project will be created once more time."]})}),"\n",(0,i.jsx)(n.p,{children:'If you wish to know more about adding user options, go to "Administrate" section > "All Users" page.'}),"\n",(0,i.jsx)(n.h2,{id:"invite-a-user-to-a-project",children:"Invite a user to a project"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Permission:"}),"\nVia Administrate section, only ",(0,i.jsx)(n.code,{children:"ADMINISTRATOR"})," can invite users.\nVia Project Space, ",(0,i.jsx)(n.code,{children:"ADMINISTRATOR"})," and ",(0,i.jsx)(n.code,{children:"PROJECT MANAGER"})," can invite users."]}),"\n",(0,i.jsx)(n.p,{children:'To invite a user on the "All Users" page, perform the following steps:'}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Login into ReportPortal instance as Administrator."}),"\n",(0,i.jsx)(n.li,{children:'Navigate to the "Administrate" section -> "All users" page.'}),"\n",(0,i.jsx)(n.li,{children:'Click on the "Invite User" button.'}),"\n",(0,i.jsx)(n.li,{children:'Fill all fields with valid data in the "Invite user" form and click on the "Invite" button. - The invitation\nhas been sent. You can copy the link to the invitation from the "Link to\ninvitation" field.'}),"\n",(0,i.jsx)(n.li,{children:"The user will receive an email with the link to the invitation. Registration\nlink will be active until the user registers in the system by this reference,\nbut not more than 24 hours. When the user clicks the link, he/she will see a registration form."}),"\n",(0,i.jsxs)(n.li,{children:['The user needs to fill in the registration form and click the "Register" button to complete the registration.\nThe user will be assigned to the project that was specified by you during the invitation,\nand to "Personal Project" with the ',(0,i.jsx)(n.code,{children:"PROJECT MANAGER"})," project role."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"assign-user-to-the-project",children:"Assign user to the project"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Permission:"}),'\nVia "Administrate" section, only ',(0,i.jsx)(n.code,{children:"ADMINISTRATOR"})," can assign users.\nVia Project Space ",(0,i.jsx)(n.code,{children:"ADMINISTRATOR"})," and ",(0,i.jsx)(n.code,{children:"PROJECT MANAGER"})," can assign users."]}),"\n",(0,i.jsx)(n.p,{children:"Perform the following steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Login into ReportPortal instance as Administrator."}),"\n",(0,i.jsx)(n.li,{children:'Navigate to the "Administrate" section -> "All Users" page.'}),"\n",(0,i.jsx)(n.li,{children:'Find a user and click "+ Assign to project" button.'}),"\n",(0,i.jsx)(n.li,{children:"Fill the name of project."}),"\n",(0,i.jsx)(n.li,{children:"Select a project role."}),"\n",(0,i.jsx)(n.li,{children:'Click on the "Tick" button. - The user will be assigned to the project.'}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"edit-project-role",children:"Edit project role"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Permission:"}),'\nVia "Administrate" section, only ',(0,i.jsx)(n.code,{children:"ADMINISTRATOR"})," can edit the project role.\nVia Project Space ",(0,i.jsx)(n.code,{children:"ADMINISTRATOR"})," and ",(0,i.jsx)(n.code,{children:"PROJECT MANAGER"})," can edit the project role."]}),"\n",(0,i.jsx)(n.p,{children:"To edit the project role, perform the following steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Login into ReportPortal instance as Administrator."}),"\n",(0,i.jsx)(n.li,{children:'Navigate to the "Administrate" section -> "All Users" page.'}),"\n",(0,i.jsx)(n.li,{children:'Find a user and their project in the "Projects and roles" column.'}),"\n",(0,i.jsx)(n.li,{children:"Click on the name of project."}),"\n",(0,i.jsx)(n.li,{children:'Select a new value from the "Project Role" drop-down.'}),"\n",(0,i.jsx)(n.li,{children:'Click on the "Tick" icon.'}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"unassign-user-from-the-project",children:"Unassign user from the project"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Permission:"}),'\nVia "Administrate" section, only ',(0,i.jsx)(n.code,{children:"ADMINISTRATOR"})," can unassign users.\nVia Project Space ",(0,i.jsx)(n.code,{children:"ADMINISTRATOR"})," and ",(0,i.jsx)(n.code,{children:"PROJECT MANAGER"})," can unassign users."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Please, do not forget to review project roles on regular basis. We recommend to do it at least quarterly."})}),"\n",(0,i.jsx)(n.p,{children:"Depending on the project needs the assignment could be removed.\nTo unassign the assignment for the user on the project, perform the following steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:'Navigate to the "Administrate" section -> "All Users" page.'}),"\n",(0,i.jsx)(n.li,{children:'Find a user and their project in the "Projects and roles" column.'}),"\n",(0,i.jsx)(n.li,{children:"Click on the name of project."}),"\n",(0,i.jsx)(n.li,{children:'Click on "Cross" icon near the needed project.'}),"\n",(0,i.jsx)(n.li,{children:"Confirm the action. - The user will be unassigned from the current project but will stay in the system."}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Users can not be unassign from their own personal projects."})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);