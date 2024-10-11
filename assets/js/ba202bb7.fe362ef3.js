"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19798],{69194:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=s(85893),r=s(11151);const o={sidebar_position:13,sidebar_label:"Scaling ReportPortal services"},t="Scaling ReportPortal services",a={id:"installation-steps-advanced/ScalingReportPortalServices",title:"Scaling ReportPortal services",description:"ReportPortal supports dynamic scaling of its API service during runtime to efficiently manage varying loads. This guide provides instructions on how to scale the API service up or down and discusses the implications of asynchronous reporting and queue management in RabbitMQ while scaling.",source:"@site/docs/installation-steps-advanced/ScalingReportPortalServices.md",sourceDirName:"installation-steps-advanced",slug:"/installation-steps-advanced/ScalingReportPortalServices",permalink:"/docs/installation-steps-advanced/ScalingReportPortalServices",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/installation-steps-advanced/ScalingReportPortalServices.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,sidebar_label:"Scaling ReportPortal services"},sidebar:"docs",previous:{title:"File storage options",permalink:"/docs/installation-steps-advanced/FileStorageOptions"},next:{title:"Deploy with AWS ECS Fargate",permalink:"/docs/installation-steps-advanced/DeployWithAWSECSFargate"}},c={},l=[{value:"Kubernetes Configuration",id:"kubernetes-configuration",level:2},{value:"Docker Configuration",id:"docker-configuration",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"scaling-reportportal-services",children:"Scaling ReportPortal services"}),"\n",(0,i.jsx)(n.p,{children:"ReportPortal supports dynamic scaling of its API service during runtime to efficiently manage varying loads. This guide provides instructions on how to scale the API service up or down and discusses the implications of asynchronous reporting and queue management in RabbitMQ while scaling."}),"\n",(0,i.jsx)(n.p,{children:"ReportPortal also supports the scaling of UAT and UI services. However, it's not recommended to scale the Jobs service due to potential conflicts with cleaning cron jobs, which may lead to database locking issues."}),"\n",(0,i.jsx)(n.p,{children:"To effectively scale ReportPortal, you need to follow these steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Additional resources"}),": Increase capacity by deploying more instances or by enhancing the resources (CPU and memory) of existing ones."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Load Balancing"}),": The Traefik (for Docker) and Ingress Controller (for Kubernetes) are already set up to automatically distribute incoming requests among all active services."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"AMQP settings:"})," Performance improvements can be achieved by increasing the queue count and adjusting the prefetch count per consumer. These adjustments allow for more efficient processing and resolution of messages within the queues. For more detailed information, refer to the article ",(0,i.jsx)(n.a,{href:"/developers-guides/AsynchronousReporting/#exchanges-and-queues-for-reporting",children:"Asynchronous Reporting"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"kubernetes-configuration",children:"Kubernetes Configuration"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Scaling Services"}),": To scale your ",(0,i.jsx)(n.a,{href:"https://github.com/reportportal/kubernetes",children:"ReportPortal services in Kubernetes"}),", you need to increase the replica count parameter in the ",(0,i.jsx)(n.code,{children:"values.yaml"})," file for the required services. For example, to scale the API service, adjust the ",(0,i.jsx)(n.code,{children:"replicaCount"})," as shown below:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"serviceapi:\n  replicaCount: 2\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Load Balancing"}),": The Ingress Controller is already set up to automatically distribute incoming requests among all active services. However, to enhance control over idle TCP connections adjust the IDLE Timeout value to\xa0",(0,i.jsx)(n.code,{children:"300"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"docker-configuration",children:"Docker Configuration"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Scaling Services"}),": To scale your ",(0,i.jsx)(n.a,{href:"https://github.com/reportportal/reportportal/blob/master/docker-compose.yml",children:"ReportPortal services in Docker"}),", you need to add a replica parameter in the ",(0,i.jsx)(n.code,{children:"docker-compose.yml"})," file for the required services. For example, to scale the API service, adjust the ",(0,i.jsx)(n.code,{children:"replicas"})," as shown below:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"services:\n\n  api:\n    deploy:\n      replicas: 2\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Load Balancing"}),": The Teafik is already set up to automatically distribute incoming requests among all active services."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);