"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[41385],{26238:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var s=a(85893),t=a(11151);const i={sidebar_position:8,sidebar_label:"Maintain commands Cheat sheet"},r="Maintain commands Cheat sheet",d={id:"installation-steps-advanced/MaintainCommandsCheatSheet",title:"Maintain commands Cheat sheet",description:"Export as env var:",source:"@site/docs/installation-steps-advanced/MaintainCommandsCheatSheet.md",sourceDirName:"installation-steps-advanced",slug:"/installation-steps-advanced/MaintainCommandsCheatSheet",permalink:"/docs/installation-steps-advanced/MaintainCommandsCheatSheet",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/installation-steps-advanced/MaintainCommandsCheatSheet.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"Maintain commands Cheat sheet"},sidebar:"docs",previous:{title:"Backup & Restore Guide",permalink:"/docs/installation-steps-advanced/BackupRestoreGuide"},next:{title:"Additional configuration parameters",permalink:"/docs/installation-steps-advanced/AdditionalConfigurationParameters"}},c={},o=[];function l(e){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"maintain-commands-cheat-sheet",children:"Maintain commands Cheat sheet"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Export as env var:"}),"\xa0"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'export RP_PRJ=$(docker ps --filter="name=api" --format="\\{{.Names}}" | sed \'s/\\(.*\\)_api_[0-9]*/\\1/\')\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Install/restart ReportPortal:"}),"\xa0"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"docker-compose -p $RP_PRJ up -d --force-recreate\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Show all logs:"}),"\xa0"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"docker-compose -p $RP_PRJ logs\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Show specific logs:"}),"\xa0"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"docker-compose -p $RP_PRJ logs <name, e.g. api>\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Delete everything except data:"}),"\xa0"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"docker-compose -p $RP_PRJ down --rmi -v --remove-orphans\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Backup / Dump the data:"}),"\xa0"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"docker exec <postgres_container_name> pg_dump -U <POSTGRES_USER> <database_name> > backup.sql\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Clean up the data:"}),"\xa0"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"docker exec -it <postgres_container_name> psql -U <POSTGRES_USER> -d <database_name>\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    DROP TABLE schema_migrations;\n    DROP SCHEMA quartz CASCADE;\n    DROP SCHEMA public CASCADE; CREATE SCHEMA public;\n    \\q\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Restore the data:"}),"\xa0"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"docker exec -i <postgres_container_name> psql -U <POSTGRES_USER> -d <database_name> < backup.sql\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can download ",(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:a(49901).Z+"",children:"PDF file"})," with commands."]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},49901:(e,n,a)=>{a.d(n,{Z:()=>s});const s=a.p+"assets/files/CheatSheet-31def9e901c6ab7b0376518d67649f23.pdf"}}]);