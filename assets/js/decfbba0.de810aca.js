"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[41370],{99108:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"developers-guides/RetriesReporting","title":"Retries reporting","description":"Some frameworks allow to retry Test execution according to provided conditions (TestNG) or just retry it predefined number of times.","source":"@site/docs/developers-guides/RetriesReporting.mdx","sourceDirName":"developers-guides","slug":"/developers-guides/RetriesReporting","permalink":"/docs/developers-guides/RetriesReporting","draft":false,"unlisted":false,"editUrl":"https://github.com/reportportal/docs/blob/develop/docs/developers-guides/RetriesReporting.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"Rerun developers guide","permalink":"/docs/developers-guides/RerunDevelopersGuide"},"next":{"title":"Work with reports","permalink":"/docs/work-with-reports/"}}');var n=s(74848),i=s(28453);const d={},o="Retries reporting",c={},a=[{value:"Retries reporting",id:"retries-reporting-1",level:2}];function l(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components},{MediaViewer:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("MediaViewer",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"retries-reporting",children:"Retries reporting"})}),"\n",(0,n.jsxs)(r.p,{children:["Some frameworks allow to retry ",(0,n.jsx)(r.code,{children:"Test"})," execution according to provided conditions (TestNG) or just retry it predefined number of times.\nFirst execution is a simple ",(0,n.jsx)(r.code,{children:"TestItem"})," and next ones are called ",(0,n.jsx)(r.code,{children:"Retries"}),".\nIn ReportPortal these items are grouped and displayed as a sequence of executions for the same ",(0,n.jsx)(r.code,{children:"Test"}),":"]}),"\n",(0,n.jsx)(t,{src:s(71328),alt:"Retry"}),"\n",(0,n.jsxs)(r.p,{children:["When you click on the ",(0,n.jsx)(r.code,{children:"retries"})," link you can switch between ",(0,n.jsx)(r.code,{children:"Retries"})," and see their logs:"]}),"\n",(0,n.jsx)(t,{src:s(29164),alt:"RetrySwitch"}),"\n",(0,n.jsxs)(r.p,{children:["On the ",(0,n.jsx)(r.code,{children:"Log view"})," you can also switch between ",(0,n.jsx)(r.code,{children:"Retries"}),":"]}),"\n",(0,n.jsx)(t,{src:s(26119),alt:"Retry View"}),"\n",(0,n.jsx)(r.h2,{id:"retries-reporting-1",children:"Retries reporting"}),"\n",(0,n.jsxs)(r.p,{children:["Common child ",(0,n.jsx)(r.code,{children:"Test item"})," request (",(0,n.jsx)(r.a,{href:"/developers-guides/ReportingDevelopersGuide",children:"check reporting dev guide"}),") looks like:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:'curl --header "Content-Type: application/json" \\\n     --header "Authorization: Bearer 039eda00-b397-4a6b-bab1-b1a9a90376d1" \\\n     --request POST \\\n     --data \'{"name":"example step","startTime":"1574423237000","type":"step","launchUuid":"<launch uuid>","description":"Item that should be retried"}\' \\\n     http://rp.com/api/v1/rp_project/item/<parent uuid>\n'})}),"\n",(0,n.jsx)(r.p,{children:"With body:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:'{\n  "name": "example step",\n  "startTime": "1574423237000",\n  "type": "step",\n  "launchUuid": "<launch uuid>",\n  "description": "Item that should be retried"\n}\n'})}),"\n",(0,n.jsx)(r.p,{children:"And response:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:'{\n  "id": "uuid-of-the-first-step"\n}\n'})}),"\n",(0,n.jsxs)(r.p,{children:["Request for a ",(0,n.jsx)(r.code,{children:"retry"})," looks the same, but has field ",(0,n.jsx)(r.code,{children:"retry=true"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:'{\n  "name": "example step",\n  "startTime": "1574423237100",\n  "type": "step",\n  "launchUuid": "<launch uuid>",\n  "description": "Item that should be retried",\n  "retry": true\n}\n'})}),"\n",(0,n.jsxs)(r.p,{children:["To be displayed as a ",(0,n.jsx)(r.code,{children:"retry"})," reported ",(0,n.jsx)(r.code,{children:"Test item"})," should have the same ",(0,n.jsx)(r.code,{children:"name"}),", ",(0,n.jsx)(r.code,{children:"parentUuid"}),", ",(0,n.jsx)(r.code,{children:"launchUuid"})," and ",(0,n.jsx)(r.code,{children:"uniqueId"})," (if you provided it explicitly).\nIf one of mentioned fields is not matched (for example ",(0,n.jsx)(r.code,{children:"Test item"})," with the same ",(0,n.jsx)(r.code,{children:"name"})," but different ",(0,n.jsx)(r.code,{children:"uniqueId"})," and vise versa) ",(0,n.jsx)(r.code,{children:"Test item"}),"s won't be grouped as retries.\nAlso ",(0,n.jsx)(r.code,{children:"Test item"})," with type ",(0,n.jsx)(r.code,{children:"Suite"})," cannot be reported as a ",(0,n.jsx)(r.code,{children:"retry"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["Retries handling triggered only if ",(0,n.jsx)(r.code,{children:"Test item"})," has ",(0,n.jsx)(r.code,{children:"retry=true"})," flag in the request. For example:"]}),"\n",(0,n.jsxs)(r.p,{children:["First request will trigger retries handling, but if it's the first reported ",(0,n.jsx)(r.code,{children:"Test item"})," it won't be a ",(0,n.jsx)(r.code,{children:"retry"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:'{\n  "name": "example step",\n  "startTime": "1574423237100",\n  "type": "step",\n  "launchUuid": "<launch uuid>",\n  "description": "Item that should be retried",\n  "retry": true\n}\n'})}),"\n",(0,n.jsxs)(r.p,{children:["Second request won't trigger retries handling, because ",(0,n.jsx)(r.code,{children:"retry=false"})," is specified (or this field isn't provided) in the request:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:'{\n  "name": "example step",\n  "startTime": "1574423237100",\n  "type": "step",\n  "launchUuid": "<launch uuid>",\n  "description": "Item that should be retried",\n  "retry": false\n}\n'})}),"\n",(0,n.jsxs)(r.p,{children:["As a result 2 separate ",(0,n.jsx)(r.code,{children:"Test items"})," will be displayed, so ORDER of sent requests matters (if send this items in reversed order they will be grouped as ",(0,n.jsx)(r.code,{children:"retries"}),")."]}),"\n",(0,n.jsxs)(r.p,{children:["In ReportPortal the only ",(0,n.jsx)(r.code,{children:"Test item"})," from the ",(0,n.jsx)(r.code,{children:"Retries"})," group that has statistics and can have an ",(0,n.jsx)(r.code,{children:"issue"})," attached is the one with max ",(0,n.jsx)(r.code,{children:"startTime"}),".\nIn previous requests ",(0,n.jsx)(r.code,{children:"startTime"})," was ",(0,n.jsx)(r.code,{children:"1574423237000"})," for the first one and ",(0,n.jsx)(r.code,{children:"1574423237100"})," for the second one, so the second one is a 'main' ",(0,n.jsx)(r.code,{children:"Test Item"}),"\nwith statistics and ",(0,n.jsx)(r.code,{children:"issue"})," (if attached)."]})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},71328:(e,r,s)=>{s.r(r),s.d(r,{default:()=>t});const t=s.p+"assets/images/Retry-036ea7e05f17de6d64470618243094c3.png"},29164:(e,r,s)=>{s.r(r),s.d(r,{default:()=>t});const t=s.p+"assets/images/RetrySwitch-396ec4bcd92e9a59e0c3430b48b47c21.png"},26119:(e,r,s)=>{s.r(r),s.d(r,{default:()=>t});const t=s.p+"assets/images/RetryView-2afe84b464175f73581526daa4f6749d.png"}}]);