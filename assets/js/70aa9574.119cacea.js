"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[44051],{20781:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"installation-steps-advanced/AmazonALBNGINXIngressController","title":"Amazon Application Load Balancer Configuration Guide","description":"This article describe how to deploy Amazon Application Load Balancer & NGINX Ingress Controller in Amazon EKS.","source":"@site/docs/installation-steps-advanced/AmazonALBNGINXIngressController.md","sourceDirName":"installation-steps-advanced","slug":"/installation-steps-advanced/AmazonALBNGINXIngressController","permalink":"/docs/installation-steps-advanced/AmazonALBNGINXIngressController","draft":false,"unlisted":false,"editUrl":"https://github.com/reportportal/docs/blob/develop/docs/installation-steps-advanced/AmazonALBNGINXIngressController.md","tags":[],"version":"current","frontMatter":{"sidebar_label":"Amazon Application Load Balancer Configuration Guide"},"sidebar":"docs","previous":{"title":"Deploy with AWS ECS Fargate","permalink":"/docs/installation-steps-advanced/DeployWithAWSECSFargate"},"next":{"title":"Quick Start Guide for Google Cloud Platform GKE","permalink":"/docs/installation-steps-advanced/QuickStartWithGCPGKE"}}');var o=r(74848),i=r(28453);const s={sidebar_label:"Amazon Application Load Balancer Configuration Guide"},a="Amazon Application Load Balancer Configuration Guide",l={},c=[{value:"Deploy NGINX Ingress Helm Chart with specific configuration",id:"deploy-nginx-ingress-helm-chart-with-specific-configuration",level:2},{value:"Request/Import SSL certificate in AWS Certificate Manager",id:"requestimport-ssl-certificate-in-aws-certificate-manager",level:2},{value:"Create Target Group for NGINX Ingress",id:"create-target-group-for-nginx-ingress",level:2},{value:"Create Application Load Balancer form Amazon Console",id:"create-application-load-balancer-form-amazon-console",level:2},{value:"Deploy ReportPortal Helm Chart to Amazon EKS",id:"deploy-reportportal-helm-chart-to-amazon-eks",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"amazon-application-load-balancer-configuration-guide",children:"Amazon Application Load Balancer Configuration Guide"})}),"\n",(0,o.jsx)(n.p,{children:"This article describe how to deploy Amazon Application Load Balancer & NGINX Ingress Controller in Amazon EKS."}),"\n",(0,o.jsx)(n.h2,{id:"deploy-nginx-ingress-helm-chart-with-specific-configuration",children:"Deploy NGINX Ingress Helm Chart with specific configuration"}),"\n",(0,o.jsx)(n.p,{children:"Before get started, ensure NGINX Ingress is not yet deployed on your Amazon EKS cluster."}),"\n",(0,o.jsxs)(n.p,{children:["First, add and update the ",(0,o.jsx)(n.a,{href:"https://github.com/bitnami/charts/tree/main/bitnami/nginx-ingress-controller/",children:"Bitnami Helm chart"})," repository:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"helm repo add bitnami https://charts.bitnami.com/bitnami\nhelm repo update bitnami\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now, deploy the NGINX Ingress controller with the following configuration:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'helm install gateway \\\n  --set service.type=NodePort \\\n  --set defaultBackend.enabled=false \\\n  --set service.nodePorts.http="30080" \\\n  --set service.nodePorts.https="30443" \\\n  -n nginx-ingress \\\n  --create-namespace \\\n  bitnami/nginx-ingress-controller \\\n  --wait\n'})}),"\n",(0,o.jsx)(n.p,{children:'This will set up the NGINX Ingress controller with NodePort service type, using ports 30080 for HTTP and 30443 for HTTPS. The deployment will be named "gateway" in the "nginx-ingress" namespace.'}),"\n",(0,o.jsx)(n.h2,{id:"requestimport-ssl-certificate-in-aws-certificate-manager",children:"Request/Import SSL certificate in AWS Certificate Manager"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Before requesting the certificate, you probably need to create a domain name in AWS. If you haven't done this before, follow this guide to create a Hosted Zone in Route 53: ",(0,o.jsx)(n.a,{href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/CreatingHostedZone.html",children:"Creating a public hosted zone"})]})}),"\n",(0,o.jsx)(n.p,{children:"To request a certificate provided by ACM for a domain name:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Sign in to the ",(0,o.jsx)(n.a,{href:"https://console.aws.amazon.com/acm",children:"AWS Certificate Manager console"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Select ",(0,o.jsx)(n.strong,{children:"Request a certificate"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Enter your API's custom domain name, for example, ",(0,o.jsx)(n.code,{children:"reportporta.k8s.com"}),", in the ",(0,o.jsx)(n.strong,{children:"Domain name"})," field."]}),"\n",(0,o.jsx)(n.li,{children:"Optionally, you can add another name to this certificate."}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Review and request"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Confirm and request"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"To ensure a valid request, a registered owner of the internet domain must consent to the request before ACM issues the certificate."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["To import a certificate into ACM for a domain name, follow the official guide: ",(0,o.jsx)(n.a,{href:"https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains-prerequisites.html",children:"Getting certificates ready in AWS Certificate Manager"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"create-target-group-for-nginx-ingress",children:"Create Target Group for NGINX Ingress"}),"\n",(0,o.jsx)(n.p,{children:"After requesting certificate in AWS Certificate Manager, the next step is to create a Target Group to route traffic to your NGINX Ingress controller."}),"\n",(0,o.jsx)(n.p,{children:"Follow these steps to create a target group:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Sign in to the ",(0,o.jsx)(n.a,{href:"https://eu-central-1.console.aws.amazon.com/ec2/home?region",children:"EC2 console"})," and choose Target Groups at the bottom of the left panel."]}),"\n",(0,o.jsxs)(n.li,{children:["Click on ",(0,o.jsx)(n.strong,{children:"Create Target Groups"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Fill in required data:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Target type: ",(0,o.jsx)(n.strong,{children:"Instances"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Target group name: ",(0,o.jsx)(n.strong,{children:"rp-k8s-tg"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Protocol: ",(0,o.jsx)(n.strong,{children:"HTTPS: 30443"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["IP address type: ",(0,o.jsx)(n.strong,{children:"IPv4"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Choose your VPC."}),"\n",(0,o.jsxs)(n.li,{children:["Protocol version: ",(0,o.jsx)(n.strong,{children:"HTTP1"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Health check protocol: ",(0,o.jsx)(n.strong,{children:"HTTPS"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Health check path: ",(0,o.jsx)(n.strong,{children:"/healthz"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Click on ",(0,o.jsx)(n.strong,{children:"Next"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Add your Amazon EKS Nodes as pending."}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Create"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"This target group will allow you to route traffic to your NGINX Ingress controller efficiently"}),"\n",(0,o.jsx)(n.h2,{id:"create-application-load-balancer-form-amazon-console",children:"Create Application Load Balancer form Amazon Console"}),"\n",(0,o.jsx)(n.p,{children:"Now, let's create an Application Load Balancer (ALB) to route traffic to our NGINX Ingress controller:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Open ",(0,o.jsx)(n.a,{href:"https://eu-central-1.console.aws.amazon.com/ec2/home?region",children:"EC2 console"})," and choose Load Balancer at the bottom of the left pane"]}),"\n",(0,o.jsxs)(n.li,{children:["Click on ",(0,o.jsx)(n.strong,{children:"Create Load Balancer"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Choose Application Load Balancer and click ",(0,o.jsx)(n.strong,{children:"Create"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Fill in required data:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Load balancer name: ",(0,o.jsx)(n.strong,{children:"rp-k8s-alb"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Scheme: depends on your requirements it may be ",(0,o.jsx)(n.strong,{children:"internet-facing"})," or ",(0,o.jsx)(n.strong,{children:"internal"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["IP address type: ",(0,o.jsx)(n.strong,{children:"IPv4"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Network mapping: Choose your VPC and ",(0,o.jsx)(n.strong,{children:"public"})," subnets if you choose internet-facing or ",(0,o.jsx)(n.strong,{children:"private"})," if you choose internal scheme."]}),"\n",(0,o.jsxs)(n.li,{children:["Security groups: Choose the ",(0,o.jsx)(n.strong,{children:"Cluster security group"})," that allows traffic from/to the EKS cluster and the security group that allows traffic from the internet or your VPC."]}),"\n",(0,o.jsxs)(n.li,{children:["Listeners and routing: ",(0,o.jsx)(n.strong,{children:"HTTPS: 443"}),", Forward to the aready created Target group ",(0,o.jsx)(n.strong,{children:"rp-k8s-tg"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Secure listener settings: Choose Security policy depends on your requirements."}),"\n",(0,o.jsx)(n.li,{children:"Choose the certificate you requested/imported in ACM."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Click on ",(0,o.jsx)(n.strong,{children:"Create load balancer"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"This will create an ALB that routes traffic to the NGINX Ingress controller."}),"\n",(0,o.jsx)(n.h2,{id:"deploy-reportportal-helm-chart-to-amazon-eks",children:"Deploy ReportPortal Helm Chart to Amazon EKS"}),"\n",(0,o.jsxs)(n.p,{children:["Before deploying ReportPortal to your Amazon EKS cluster, make sure to update the Ingress Nginx configuration in your ",(0,o.jsx)(n.code,{children:"values.yaml"})," file as follows:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"<...>\ningress:\n  enable: true\n  hosts:\n    - reportporta.k8s.com\n  class: nginx\n<...>\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Follow the official guide ",(0,o.jsx)(n.a,{href:"/installation-steps/DeployWithKubernetes",children:"Deploy ReportPortal with Kubernetes"})," to complete the deployment."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);