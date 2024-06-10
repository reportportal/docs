"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[48010],{85615:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=i(85893),t=i(11151);const s={sidebar_position:10,sidebar_label:"Setup TLS(SSL) in Traefik 2.0.x"},a="Setup TLS(SSL) in Traefik 2.0.x",o={id:"installation-steps/SetupTSLSSLInTraefik2.0.x",title:"Setup TLS(SSL) in Traefik 2.0.x",description:"This is a short guideline that provides information on how to configure ReportPortal to use Let TLS/SSL certificate setup for your existing ReportPortal environment.",source:"@site/docs/installation-steps/SetupTSLSSLInTraefik2.0.x.md",sourceDirName:"installation-steps",slug:"/installation-steps/SetupTSLSSLInTraefik2.0.x",permalink:"/docs/installation-steps/SetupTSLSSLInTraefik2.0.x",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/installation-steps/SetupTSLSSLInTraefik2.0.x.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,sidebar_label:"Setup TLS(SSL) in Traefik 2.0.x"},sidebar:"docs",previous:{title:"Additional configuration parameters",permalink:"/docs/installation-steps/AdditionalConfigurationParameters"},next:{title:"Migrate one instance to another",permalink:"/docs/installation-steps/MigrateOneInstanceToAnother"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Helpful links",id:"helpful-links",level:2},{value:"Issues",id:"issues",level:2}];function d(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"setup-tlsssl-in-traefik-20x",children:"Setup TLS(SSL) in Traefik 2.0.x"}),"\n",(0,n.jsx)(r.p,{children:"This is a short guideline that provides information on how to configure ReportPortal to use Let TLS/SSL certificate setup for your existing ReportPortal environment."}),"\n",(0,n.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(r.p,{children:"We use Traefik as a layer-7 load balancer with TLS/SSL termination for the set of micro-services used to run ReportPortal web application."}),"\n",(0,n.jsx)(r.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Server with a public IP address, with Docker and docker-compose installed on it"}),"\n",(0,n.jsx)(r.li,{children:"Installed ReportPortal on this servers"}),"\n",(0,n.jsx)(r.li,{children:"Your own domain and the DNS configured accordingly so the hostname records"}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsx)(r.p,{children:"Provided below is an example of using Traefik (gateway service) in docker-compose.yaml. If you don't have any custom configurations, you are free to use the example below."}),"\n",(0,n.jsx)(r.p,{children:"*** Create a directory on the server for Traefik data and storing certificates ***"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"mkdir data/traefik/ && mkdir -p data/certs/traefik\n"})}),"\n",(0,n.jsx)(r.p,{children:"Check:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"data\n|-- certs\n|-- opensearch\n|-- postgres\n|-- traefik\n"})}),"\n",(0,n.jsx)(r.p,{children:"*** Create config file for Traefik with certificate and key path.***"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"cat << EOF | tee -a data/traefik/certs-traefik.yaml\ntls:\n  certificates:\n    - certFile: /etc/certs/examplecert.crt\n      keyFile: /etc/certs/examplecert.key\nEOF\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Place certificate ",(0,n.jsx)(r.code,{children:"examplecert.crt"})," and key ",(0,n.jsx)(r.code,{children:"examplecert.key"})," to directory ",(0,n.jsx)(r.code,{children:"data/certs/traefik/"})," you created earlier."]}),"\n",(0,n.jsxs)(r.p,{children:["*** Edit Traefik service in the ",(0,n.jsx)(r.code,{children:"docker-compose.yaml"}),"***"]}),"\n",(0,n.jsx)(r.p,{children:"Add the following volumes to Traefik:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:'services:\n  gateway:\n    volumes:\n      - "./data/traefik/dynamic/certs-traefik.yaml:/etc/traefik/dynamic/certs-traefik.yaml"\n      - "./data/certs/traefik:/etc/certs/"\n'})}),"\n",(0,n.jsx)(r.p,{children:"commands:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:'services:\n  gateway:\n    commands:\n      - "--providers.file.directory=/etc/traefik/dynamic"\n      - "--entrypoints.websecure.address=:443"\n'})}),"\n",(0,n.jsx)(r.p,{children:"and ports:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:'services:\n  gateway:\n    ports:\n      - "443:443"\n'})}),"\n",(0,n.jsx)(r.p,{children:"Check the Traefik part:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:'version: \'2.4\'\nservices:\n\n  gateway:\n    image: traefik:v2.0.5\n    ports:\n      - "8080:8080" # HTTP exposed\n      - "8081:8081" # HTTP Administration exposed\n      - "443:443"   # TLS/SSL\n    volumes:\n      - "/var/run/docker.sock:/var/run/docker.sock"\n      - "./data/traefik/dynamic/certs-traefik.yaml:/etc/traefik/dynamic/certs-traefik.yaml"\n      - "./data/certs/traefik:/etc/certs/"     \n    command:\n      - "--providers.docker=true"\n      - "--providers.docker.constraints=Label(`traefik.expose`, `true`)"\n      - "--entrypoints.web.address=:8080"\n      - "--entrypoints.traefik.address=:8081"\n      - "--api.dashboard=true"\n      - "--api.insecure=true"\n      # TLS/SSL\n      - "--providers.file.directory=/etc/traefik/dynamic"\n      - "--entrypoints.websecure.address=:443"\n    restart: always\n'})}),"\n",(0,n.jsxs)(r.p,{children:["*** Add the following labels to existing services ",(0,n.jsx)(r.code,{children:"api"}),", ",(0,n.jsx)(r.code,{children:"uat"}),", ",(0,n.jsx)(r.code,{children:"index"}),", ",(0,n.jsx)(r.code,{children:"ui"}),", replacing ",(0,n.jsx)(r.code,{children:"<service>"})," with the corresponding service name ***"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:'labels:\n  - "traefik.http.routers.<service>.tls=true"\n'})}),"\n",(0,n.jsx)(r.p,{children:"Check the UI and API services as an example:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:'version: \'2.4\'\nservices:\n\n  ui:\n    image: reportportal/service-ui:5.3.4\n    environment:\n      - RP_SERVER_PORT=8080\n    labels:\n      - "traefik.http.middlewares.ui-strip-prefix.stripprefix.prefixes=/ui"\n      - "traefik.http.routers.ui.middlewares=ui-strip-prefix@docker"\n      - "traefik.http.routers.ui.rule=PathPrefix(`/ui`)"\n      - "traefik.http.routers.ui.service=ui"\n      - "traefik.http.services.ui.loadbalancer.server.port=8080"\n      - "traefik.http.services.ui.loadbalancer.server.scheme=http"\n      - "traefik.expose=true"\n      - "traefik.http.routers.ui.tls=true" # label is here\n    restart: always\n'})}),"\n",(0,n.jsx)(r.admonition,{type:"note",children:(0,n.jsx)(r.p,{children:"Make sure that the required ports are opened. Please check your firewall settings."})}),"\n",(0,n.jsx)(r.h2,{id:"helpful-links",children:"Helpful links"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://doc.traefik.io/traefik/https/tls/",children:"Traefik HTTPS&TLS Offical documentation"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://traefik.io/blog/traefik-2-tls-101-23b4fbee81f1/",children:"Traefik 2 & TLS 101"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://doc.traefik.io/traefik/routing/routers/#tls",children:"Traefik Routing TLS"})}),"\n"]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"issues",children:"Issues"}),"\n",(0,n.jsx)(r.p,{children:"*** Unable to find valid certification path to requested target ***"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:"Feb-2 00:00:00.000 [rp-io-1] ERROR Launch - [18] ReportPortal execution error\njavax.net.ssl.SSLHandshakeException: sun.security.validator.ValidatorException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target\n"})}),"\n",(0,n.jsx)(r.p,{children:"Solutions:"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Recomended"}),". Add certificate to Java-machine"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Not recommended"}),". ",(0,n.jsx)(r.a,{href:"https://stackoverflow.com/questions/19517538/ignoring-ssl-certificate-in-apache-httpclient-4-3/34991729",children:"Ignoring SSL certificate"})]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);