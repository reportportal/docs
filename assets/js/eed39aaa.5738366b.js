"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[80110],{33712:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"installation-steps-advanced/FileStorageOptions","title":"File storage options","description":"In ReportPortal 23.1 we can use multiple ways to store log attachments, user pictures and plugins.","source":"@site/docs/installation-steps-advanced/FileStorageOptions.md","sourceDirName":"installation-steps-advanced","slug":"/installation-steps-advanced/FileStorageOptions","permalink":"/docs/installation-steps-advanced/FileStorageOptions","draft":false,"unlisted":false,"editUrl":"https://github.com/reportportal/docs/blob/develop/docs/installation-steps-advanced/FileStorageOptions.md","tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"sidebar_position":12,"sidebar_label":"File storage options"},"sidebar":"docs","previous":{"title":"Migrate one instance to another","permalink":"/docs/installation-steps-advanced/MigrateOneInstanceToAnother"},"next":{"title":"Scaling ReportPortal services","permalink":"/docs/installation-steps-advanced/ScalingReportPortalServices"}}');var t=n(74848),r=n(28453);const l={sidebar_position:12,sidebar_label:"File storage options"},o="File storage options",a={},c=[{value:"AWS S3",id:"aws-s3",level:2},{value:"MinIO",id:"minio",level:2},{value:"File system",id:"file-system",level:2}];function d(e){const s={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"file-storage-options",children:"File storage options"})}),"\n",(0,t.jsx)(s.p,{children:"In ReportPortal 23.1 we can use multiple ways to store log attachments, user pictures and plugins."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"AWS S3"}),"\n",(0,t.jsx)(s.li,{children:"MinIO distributed object storage"}),"\n",(0,t.jsx)(s.li,{children:"File system"}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Currently, we have 2 file storage systems: ",(0,t.jsx)(s.strong,{children:"multi-bucket"})," and ",(0,t.jsx)(s.strong,{children:"single-bucket"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"In the multi-bucket system structure of buckets looks like this:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:"bucketPrefix"})," + \u2018keystore\u2019 (bucket for storing integration secrets)"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:"bucketPrefix"})," + \u2018users\u2019 (bucket for storing user data)"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:"defaultBucketName"})," (bucket for storing plugins)"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:"bucketPrefix + projectId"})," (bucket for storing project attachments)"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"In the single-bucket system structure of single-bucket is the following:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"*singleBucketName/*integration-secrets/ (prefix for integration secrets)"}),"\n",(0,t.jsx)(s.li,{children:"*singleBucketName/*user-data/ (prefix for user data)"}),"\n",(0,t.jsx)(s.li,{children:"*singleBucketName/*plugins/ (prefix for plugins)"}),"\n",(0,t.jsx)(s.li,{children:"*singleBucketName/*project-data/projectId (prefix for project attachments)"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"aws-s3",children:"AWS S3"}),"\n",(0,t.jsxs)(s.p,{children:["Amazon Simple Storage Service (Amazon S3) is an object storage service offering industry-leading scalability, data availability, security, and performance. Bucket names must be unique across all AWS accounts in all the AWS Regions within a partition. A partition is a grouping of ",(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/general/latest/gr/s3.html",children:"Regions"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"To set up AWS S3 in API, UAT & Jobs services use the following variables:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"DATASTORE_TYPE: s3"}),"\n",(0,t.jsx)(s.li,{children:"DATASTORE_ACCESSKEY for AWS S3 AccessKey"}),"\n",(0,t.jsx)(s.li,{children:"DATASTORE_SECRETKEY for AWS S3 SecretKey"}),"\n",(0,t.jsx)(s.li,{children:"DATASTORE_REGION for AWS region"}),"\n"]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["For us-east-1 value should be ",(0,t.jsx)(s.strong,{children:"us-standard"}),". More information ",(0,t.jsx)(s.a,{href:"https://jclouds.apache.org/reference/javadoc/2.3.x/org/jclouds/aws/domain/Region.html",children:"here"})]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["To set up the ",(0,t.jsx)(s.strong,{children:"multi-bucket"})," system, use the following environment variables:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"DATASTORE_BUCKETPREFIX for prefix of bucket name (\u2018prj-\u2018 by default)"}),"\n",(0,t.jsx)(s.li,{children:"DATASTORE_DEFAULTBUCKETNAME for name of plugins bucket (\u2018rp-bucket\u2019 by default)"}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["To set up the ",(0,t.jsx)(s.strong,{children:"single-bucket"})," system, use the following environment variables:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"DATASTORE_DEFAULTBUCKETNAME for single-bucket name"}),"\n",(0,t.jsx)(s.li,{children:"RP_FEATURE_FLAGS: singleBucket"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"minio",children:"MinIO"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://min.io/",children:"MinIO"})," is a high-performance distributed object storage server. It stays on top of S3 or any other cloud storage and allows to have a shared FS for several API, UAT & Jobs pods in Kubernetes."]}),"\n",(0,t.jsx)(s.p,{children:"To set up MinIO in services, use the following variables:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"DATASTORE_TYPE: minio"}),"\n",(0,t.jsx)(s.li,{children:"DATASTORE_ENDPOINT for endpoint (address)"}),"\n",(0,t.jsx)(s.li,{children:"DATASTORE_ACCESSKEY for accesskey"}),"\n",(0,t.jsx)(s.li,{children:"DATASTORE_SECRETKEY for secretkey"}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["To set the ",(0,t.jsx)(s.strong,{children:"multi-bucket"})," system, use the following environment variables:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"DATASTORE_BUCKETPREFIX for prefix of bucket name (\u2018prj-\u2018 by default)"}),"\n",(0,t.jsx)(s.li,{children:"DATASTORE_DEFAULTBUCKETNAME for name of plugins bucket (\u2018rp-bucket\u2019 by default)"}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["To set the ",(0,t.jsx)(s.strong,{children:"single-bucket"})," system, use the following environment variables:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"DATASTORE_DEFAULTBUCKETNAME for single-bucket name"}),"\n",(0,t.jsx)(s.li,{children:"RP_FEATURE_FLAGS : singleBucket"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"file-system",children:"File system"}),"\n",(0,t.jsx)(s.p,{children:"The file system option is used when storing this data in a mounted folder in the service-api or/and service-uat."}),"\n",(0,t.jsx)(s.p,{children:"To use this option, set up environment variables like this:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"DATASTORE_TYPE: filesystem"}),"\n",(0,t.jsx)(s.li,{children:"DATASTORE_PATH for path in filesystem to store files."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"It can be done in both Docker and Kubernetes ReportPortal versions."})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);