"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[187],{87237:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var d=s(85893),r=s(11151);const t={},i="Interactions between API and Analyzer",l={id:"developers-guides/InteractionsBetweenAPIAndAnalyzer",title:"Interactions between API and Analyzer",description:"Overview",source:"@site/docs/developers-guides/InteractionsBetweenAPIAndAnalyzer.mdx",sourceDirName:"developers-guides",slug:"/developers-guides/InteractionsBetweenAPIAndAnalyzer",permalink:"/docs/developers-guides/InteractionsBetweenAPIAndAnalyzer",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/developers-guides/InteractionsBetweenAPIAndAnalyzer.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Back-end Java contribution guide",permalink:"/docs/developers-guides/BackEndJavaContributionGuide"},next:{title:"Plugin developers guide",permalink:"/docs/developers-guides/PluginDevelopersGuide"}},c={},a=[{value:"Overview",id:"overview",level:2},{value:"Declaring exchange",id:"declaring-exchange",level:2},{value:"Declaring queues",id:"declaring-queues",level:2},{value:"Indexing",id:"indexing",level:2},{value:"Analyze",id:"analyze",level:2},{value:"Search logs",id:"search-logs",level:2},{value:"Clean",id:"clean",level:2},{value:"Delete",id:"delete",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{MediaViewer:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("MediaViewer",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"interactions-between-api-and-analyzer",children:"Interactions between API and Analyzer"}),"\n",(0,d.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,d.jsxs)(n.p,{children:["Communication between ",(0,d.jsx)(n.code,{children:"API service"})," and ",(0,d.jsx)(n.code,{children:"analyzer service"})," is carried out using ",(0,d.jsx)(n.a,{href:"http://www.amqp.org/specification/0-9-1/amqp-org-download",children:"AMQP 0-9-1"})," and ",(0,d.jsx)(n.a,{href:"https://www.rabbitmq.com",children:"RabbitMQ"})," as message broker. ",(0,d.jsx)(n.code,{children:"API service"})," creates ",(0,d.jsx)(n.a,{href:"https://www.rabbitmq.com/vhosts.html",children:"virtual host"})," inside RabbitMQ with name ",(0,d.jsx)(n.code,{children:"analyzer"})," on start. Analyzers in theirs turn connect to the virtual host and declare exchange with name and arguments. Any type of request from ",(0,d.jsx)(n.code,{children:"API"})," and response from ",(0,d.jsx)(n.code,{children:"analyzer"})," stores in the same queue. Request and response messages is presented as JSON."]}),"\n",(0,d.jsx)(t,{src:s(54071),alt:"API Analyzer"}),"\n",(0,d.jsx)(n.h2,{id:"declaring-exchange",children:"Declaring exchange"}),"\n",(0,d.jsx)(n.p,{children:"Each analyzer has to declare direct exchange with the following arguments:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"analyzer"})," - Name of analyzer (string)"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"version"})," - Analyzer version (string)"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"analyzer_index"})," - Is indexing supported (boolean, false by default)"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"analyzer_log_search"})," - Is log searching supported (boolean, false by default)"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"analyzer_priority"})," - Priority of analyzer (number). The lower the number, the higher the priority."]}),"\n"]}),"\n",(0,d.jsx)(t,{src:s(83913),alt:"Exchange"}),"\n",(0,d.jsx)(n.h2,{id:"declaring-queues",children:"Declaring queues"}),"\n",(0,d.jsxs)(n.p,{children:["Each analyzer has to declare 5 queues with names: ",(0,d.jsx)(n.code,{children:"analyze"}),", ",(0,d.jsx)(n.code,{children:"search"}),", ",(0,d.jsx)(n.code,{children:"index"}),", ",(0,d.jsx)(n.code,{children:"clean"}),", ",(0,d.jsx)(n.code,{children:"delete"}),"."]}),"\n",(0,d.jsx)(t,{src:s(27891),alt:"Queues"}),"\n",(0,d.jsx)(n.h2,{id:"indexing",children:"Indexing"}),"\n",(0,d.jsxs)(n.p,{children:["Index request can be used to store info about logs and then analysis will be proceed based on the info. Requests and responses use ",(0,d.jsx)(n.code,{children:"index"})," queue."]}),"\n",(0,d.jsxs)(n.p,{children:["Index request structure from ",(0,d.jsx)(n.code,{children:"API"}),":"]}),"\n",(0,d.jsx)(n.p,{children:"IndexLaunch:"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Attribute"}),(0,d.jsx)(n.th,{children:"Description"}),(0,d.jsx)(n.th,{children:"Example"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"launchId"}),(0,d.jsx)(n.td,{children:"Id of launch"}),(0,d.jsx)(n.td,{children:"101"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"launchName"}),(0,d.jsx)(n.td,{children:"Name of launch"}),(0,d.jsx)(n.td,{children:"Smoke Test"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"project"}),(0,d.jsx)(n.td,{children:"Id of project"}),(0,d.jsx)(n.td,{children:"12"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"analyzerConfig"}),(0,d.jsx)(n.td,{children:"Analyzer configuration"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"testItems"}),(0,d.jsx)(n.td,{children:"Array of test items"}),(0,d.jsx)(n.td,{})]})]})]}),"\n",(0,d.jsx)(n.p,{children:"AnalyzerConfig:"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Attribute"}),(0,d.jsx)(n.th,{children:"Description"}),(0,d.jsx)(n.th,{children:"Example"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"minDocFreq"}),(0,d.jsx)(n.td,{children:"The minimum frequency of the saved logs"}),(0,d.jsx)(n.td,{children:"1"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"minTermFreq"}),(0,d.jsx)(n.td,{children:"The minimum frequency of the word in the analyzed log"}),(0,d.jsx)(n.td,{children:"1"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"minShouldMatch"}),(0,d.jsx)(n.td,{children:"Percent of words equality between analyzed log and particular log from index"}),(0,d.jsx)(n.td,{children:"95"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"numberOfLogLines"}),(0,d.jsx)(n.td,{children:"The number of first lines of log message that should be considered in indeT"}),(0,d.jsx)(n.td,{children:"-1"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"isAutoAnalyzerEnabled"}),(0,d.jsx)(n.td,{children:"Is auto analysis enabled"}),(0,d.jsx)(n.td,{children:"true"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"analyzerMode"}),(0,d.jsx)(n.td,{children:'Analysis mode. Allowable values: "all", "launch_name", "current_launch"'}),(0,d.jsx)(n.td,{children:"all"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"indexingRunning"}),(0,d.jsx)(n.td,{children:"Is indexing running"}),(0,d.jsx)(n.td,{children:"false"})]})]})]}),"\n",(0,d.jsx)(n.p,{children:"IndexTestItem:"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Attribute"}),(0,d.jsx)(n.th,{children:"Description"}),(0,d.jsx)(n.th,{children:"Example"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"testItemId"}),(0,d.jsx)(n.td,{children:"Id of test item"}),(0,d.jsx)(n.td,{children:"123"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"issueType"}),(0,d.jsx)(n.td,{children:"Issue type locator"}),(0,d.jsx)(n.td,{children:"pb001"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"uniqueId"}),(0,d.jsx)(n.td,{children:"Unique id of test item"}),(0,d.jsxs)(n.td,{children:["auto",":c6edafc24a03c6f69b6ec070d1fd0089"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"isAutoAnalyzed"}),(0,d.jsx)(n.td,{children:"Is test item auto analyzed"}),(0,d.jsx)(n.td,{children:"false"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"logs"}),(0,d.jsx)(n.td,{children:"Array of test item logs"}),(0,d.jsx)(n.td,{})]})]})]}),"\n",(0,d.jsx)(n.p,{children:"IndexLog:"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Attribute"}),(0,d.jsx)(n.th,{children:"Descrioption"}),(0,d.jsx)(n.th,{children:"Example"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"logId"}),(0,d.jsx)(n.td,{children:"Id of log"}),(0,d.jsx)(n.td,{children:"125"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"logLevel"}),(0,d.jsx)(n.td,{children:"Log level"}),(0,d.jsx)(n.td,{children:"40000"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"message"}),(0,d.jsx)(n.td,{children:"Log message"}),(0,d.jsx)(n.td,{children:"java.lang.AssertionError: 1 expectation failed. Expected status code <200> but was <400>.  \tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method) \tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62) \tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45) \tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"API"})," send array of IndexLaunch entities that have to be indexed."]}),"\n",(0,d.jsx)(n.p,{children:"Example in json :"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'[\n   {\n      "launchId":110,\n      "launchName":"Smoke Test",\n      "project":11,\n      "analyzerConfig":{\n         "minDocFreq":1,\n         "minTermFreq":1,\n         "minShouldMatch":95,\n         "numberOfLogLines":-1,\n         "isAutoAnalyzerEnabled":true,\n         "analyzerMode":"all",\n         "indexingRunning":false\n      },\n      "testItems":[\n         {\n            "testItemId":101,\n            "issueType":"pb001",\n            "uniqueId":"auto:c6edafc24a03c6f69b6ec070d1fd0089",\n            "isAutoAnalyzed":false,\n            "logs":[\n               {\n                  "logId":111,\n                  "logLevel":40000,\n                  "message":"java.lang.AssertionError: 1 expectation failed. Expected status code <200> but was <400>."\n               },\n               {\n                  "logId":112,\n                  "logLevel":40000,\n                  "message":"java.lang.AssertionError: 1 expectation failed. Expected status code <200> but was <500>."\n               }\n            ]\n         }\n      ]\n   }\n]\n'})}),"\n",(0,d.jsx)(n.p,{children:"Analyzer should return response with number of indexed logs."}),"\n",(0,d.jsx)(n.h2,{id:"analyze",children:"Analyze"}),"\n",(0,d.jsxs)(n.p,{children:["Analyze request can be used to find matches from request in indexed data. Requests and responses use ",(0,d.jsx)(n.code,{children:"analyze"})," queue."]}),"\n",(0,d.jsx)(n.p,{children:"Analyze request is the same as IndexLaunch entity used for indexing. It contains info about test items and logs thad have to be analyzed."}),"\n",(0,d.jsx)(n.p,{children:"Response from analyzer should contain array of the following entities (info about analyzed test items):"}),"\n",(0,d.jsx)(n.p,{children:"AnalyzedItemRs:"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Attribute"}),(0,d.jsx)(n.th,{children:"Description"}),(0,d.jsx)(n.th,{children:"Example"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"itemId"}),(0,d.jsx)(n.td,{children:"Id of analyzed test item"}),(0,d.jsx)(n.td,{children:"111"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"relevantItemId"}),(0,d.jsx)(n.td,{children:"Id of relevant test item"}),(0,d.jsx)(n.td,{children:"123"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"issueType"}),(0,d.jsx)(n.td,{children:"Issue type locator"}),(0,d.jsx)(n.td,{children:"pb001"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"search-logs",children:"Search logs"}),"\n",(0,d.jsxs)(n.p,{children:["Search request can be used to find similar logs from test items with ",(0,d.jsx)(n.code,{children:"to_investigate"})," type. Requests and responses use ",(0,d.jsx)(n.code,{children:"search"})," queue."]}),"\n",(0,d.jsxs)(n.p,{children:["Search logs request from ",(0,d.jsx)(n.code,{children:"API"}),":"]}),"\n",(0,d.jsx)(n.p,{children:"SearchRq:"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Attribute"}),(0,d.jsx)(n.th,{children:"Description"}),(0,d.jsx)(n.th,{children:"Example"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"launchId"}),(0,d.jsx)(n.td,{children:"Id of launch"}),(0,d.jsx)(n.td,{children:"111"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"launchName"}),(0,d.jsx)(n.td,{children:"Name of launch"}),(0,d.jsx)(n.td,{children:"Smoke Test"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"itemId"}),(0,d.jsx)(n.td,{children:"Id of test item"}),(0,d.jsx)(n.td,{children:"112"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"projectId"}),(0,d.jsx)(n.td,{children:"Id of project"}),(0,d.jsx)(n.td,{children:"10"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"filteredLaunchIds"}),(0,d.jsx)(n.td,{children:"Array of launch ids, among with search would be applied"}),(0,d.jsx)(n.td,{children:"[1,2,3]"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"logMessages"}),(0,d.jsx)(n.td,{children:"Array of log messages looking for"}),(0,d.jsx)(n.td,{children:'["first message", "second message"]'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"logLines"}),(0,d.jsx)(n.td,{children:"Number of logs lines that will be used in comparison"}),(0,d.jsx)(n.td,{children:"5"})]})]})]}),"\n",(0,d.jsx)(n.p,{children:"Analyzer should return array of log ids that matches as a response."}),"\n",(0,d.jsx)(n.h2,{id:"clean",children:"Clean"}),"\n",(0,d.jsxs)(n.p,{children:["Clean request can be used to remove stored log from index. Requests use ",(0,d.jsx)(n.code,{children:"clean"})," queue."]}),"\n",(0,d.jsxs)(n.p,{children:["Clean logs request from ",(0,d.jsx)(n.code,{children:"API"}),":"]}),"\n",(0,d.jsx)(n.p,{children:"CleanIndexRq:"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Attribute"}),(0,d.jsx)(n.th,{children:"Description"}),(0,d.jsx)(n.th,{children:"Example"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"project"}),(0,d.jsx)(n.td,{children:"Id of project"}),(0,d.jsx)(n.td,{children:"10"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ids"}),(0,d.jsx)(n.td,{children:"Array of log ids to be removed"}),(0,d.jsx)(n.td,{children:"[111, 122, 123]"})]})]})]}),"\n",(0,d.jsx)(n.p,{children:"Analyzer do not send response on the request."}),"\n",(0,d.jsx)(n.h2,{id:"delete",children:"Delete"}),"\n",(0,d.jsxs)(n.p,{children:["Delete request can be used to delete entire index. Requests use ",(0,d.jsx)(n.code,{children:"delete"})," queue."]}),"\n",(0,d.jsxs)(n.p,{children:["Request message from ",(0,d.jsx)(n.code,{children:"API"})," contains only id of index."]}),"\n",(0,d.jsx)(n.p,{children:"Analyzer do not send response on the request."}),"\n",(0,d.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,d.jsxs)(n.p,{children:["Custom ",(0,d.jsx)(n.a,{href:"https://github.com/ihar-kahadouski/custom-analyzer",children:"analyzer"})," written in java using ",(0,d.jsx)(n.a,{href:"https://spring.io/projects/spring-amqp",children:"Spring AMQP"}),"."]})]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},54071:(e,n,s)=>{s.r(n),s.d(n,{default:()=>d});const d=s.p+"assets/images/ApiAnalyzer-e2192387c0dc46d0b897abcd0373ed9d.png"},83913:(e,n,s)=>{s.r(n),s.d(n,{default:()=>d});const d=s.p+"assets/images/Exchange-fec24893246539ddedff9bbb247121f1.png"},27891:(e,n,s)=>{s.r(n),s.d(n,{default:()=>d});const d=s.p+"assets/images/Queues-03e5a35ae6e91848215392430be9aeba.png"}}]);