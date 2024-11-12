"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[53519],{69738:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>U,frontMatter:()=>b,metadata:()=>n,toc:()=>W});const n=JSON.parse('{"id":"api/service-api/get-log-by-uuid","title":"Get log by UUID (Will be removed in version 6.0)","description":"Get log by UUID (Will be removed in version 6.0)","source":"@site/docs/api/service-api/get-log-by-uuid.api.mdx","sourceDirName":"api/service-api","slug":"/api/service-api/get-log-by-uuid","permalink":"/docs/api/service-api/get-log-by-uuid","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-log-by-uuid","title":"Get log by UUID (Will be removed in version 6.0)","description":"Get log by UUID (Will be removed in version 6.0)","sidebar_label":"Get log by UUID (Will be removed in version 6.0)","hide_title":true,"hide_table_of_contents":true,"api":"eJy9VU1v2zgQ/SvEnBKAsZJi24NOm7bZrrdBWyQNejB8oKWxxJYiWXJk1xD03xdDybaSGNhuD/XFEufzPb0ZdkCqipAvwLjqonCWgjMGAywlOI9BkXZ2XkIOFdKtq17vHlpdggSvgmqQMHBwB1Y1CDknmbNVW8jBK6pBQsDvrQ5YQk6hRQmxqLFRkHdAO89BkYK2FfS9POTxwX3Fgj7w269mW7Jz9M5GjGx/cXnJfyXGImjPuCCHj+9BAsNGS2xV3htdJNTZ18gu3aTEsfgCEgstk7GU+9puxV0zO4HJIz1U1uWkP20JKwwgYe1Co2g4evUH9GO651AkkGZanhomKUpFeJG8egkNxqiqEwG9hJW2KuzeHBFPMY1EfOYgOSCkum1WVmkz/79AJ91PcpyyT8uekgWQJsNHrx81P818Mq/BDZ6wSEDbNowXQ3BBiq0KVgpt106KEldtJQUFVaAUa0XKSNHab9ZtLSx7CZqwmf/sBzWqtUX9k+4ToLeuusPo2lAg9PyTUKIPWCg6Sv+xkt8hCeMqsdqJh4f5W3H2RRsjVigCNm6DpdBWbDBE7ax4Nbs8B9YJ1W6c7TTSVEMO2eYq6yYD2GfGVRlLM+vSfPcgIWLY7Ge/DQZy6NKYYJ9nWVe7SH2mvIanXd6hd4E+uUDKiOtPczEkAgkbFbRamUFIQy5+2n+qmsiDTH+RhVjiWrWG2UuWXgIXfT7gf7tIgreKULYUXFyc6bWwiCWW58KtxdCSGHs69HMsUGLjZiF5+eQ0046/ypJpKNqgaZd4WKEKGK5bZnGxnJrvE5yEbOp00MQIbo96dAI5Pvy1F8o/Xz4nmbBUU/golymr/0156Yq2QUtpy43rTxWJu3H93reeY3hSmjRcEIeTP5/RIMHoAm3ESfi1V0WN4sXskldkUgcjzLNsu93OVLLOXKiyMTRmt/M3Nx/uby44pJcw6hRyeDm7Gs+8i9QoOynzC4p/xMyBfsIflHmjtE1LOKSdMUzDAjZXICF/fCEZV+2Xv4R8uPSWewUuoOtWKuJDMH3Px99bDKyQ5VHkSS+ljvxcQr5WJj4d6O54LcHZ3bikzwXI012Ph8ru0iyZlt9AwjfcHe5lvmB/Y9EpZz2vzhpViSFhHzyuiwI9TWKfXb88RYc19e6G5f8vWXbzWQ==","sidebar_class_name":"get api-method","info_path":"api/service-api/reportportal","custom_edit_url":null},"sidebar":"serviceApi","previous":{"title":"Get logs by filter","permalink":"/docs/api/service-api/get-page-number"},"next":{"title":"Get nested steps with logs for the parent Test Item","permalink":"/docs/api/service-api/get-nested-items"}}');var r=i(74848),s=i(28453),o=i(57742),a=i.n(o),d=i(78178),l=i.n(d),p=i(19624),g=i.n(p),u=i(96226),m=i.n(u),c=(i(77675),i(19365),i(51107));const b={id:"get-log-by-uuid",title:"Get log by UUID (Will be removed in version 6.0)",description:"Get log by UUID (Will be removed in version 6.0)",sidebar_label:"Get log by UUID (Will be removed in version 6.0)",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VU1v2zgQ/SvEnBKAsZJi24NOm7bZrrdBWyQNejB8oKWxxJYiWXJk1xD03xdDybaSGNhuD/XFEufzPb0ZdkCqipAvwLjqonCWgjMGAywlOI9BkXZ2XkIOFdKtq17vHlpdggSvgmqQMHBwB1Y1CDknmbNVW8jBK6pBQsDvrQ5YQk6hRQmxqLFRkHdAO89BkYK2FfS9POTxwX3Fgj7w269mW7Jz9M5GjGx/cXnJfyXGImjPuCCHj+9BAsNGS2xV3htdJNTZ18gu3aTEsfgCEgstk7GU+9puxV0zO4HJIz1U1uWkP20JKwwgYe1Co2g4evUH9GO651AkkGZanhomKUpFeJG8egkNxqiqEwG9hJW2KuzeHBFPMY1EfOYgOSCkum1WVmkz/79AJ91PcpyyT8uekgWQJsNHrx81P818Mq/BDZ6wSEDbNowXQ3BBiq0KVgpt106KEldtJQUFVaAUa0XKSNHab9ZtLSx7CZqwmf/sBzWqtUX9k+4ToLeuusPo2lAg9PyTUKIPWCg6Sv+xkt8hCeMqsdqJh4f5W3H2RRsjVigCNm6DpdBWbDBE7ax4Nbs8B9YJ1W6c7TTSVEMO2eYq6yYD2GfGVRlLM+vSfPcgIWLY7Ge/DQZy6NKYYJ9nWVe7SH2mvIanXd6hd4E+uUDKiOtPczEkAgkbFbRamUFIQy5+2n+qmsiDTH+RhVjiWrWG2UuWXgIXfT7gf7tIgreKULYUXFyc6bWwiCWW58KtxdCSGHs69HMsUGLjZiF5+eQ0046/ypJpKNqgaZd4WKEKGK5bZnGxnJrvE5yEbOp00MQIbo96dAI5Pvy1F8o/Xz4nmbBUU/golymr/0156Yq2QUtpy43rTxWJu3H93reeY3hSmjRcEIeTP5/RIMHoAm3ESfi1V0WN4sXskldkUgcjzLNsu93OVLLOXKiyMTRmt/M3Nx/uby44pJcw6hRyeDm7Gs+8i9QoOynzC4p/xMyBfsIflHmjtE1LOKSdMUzDAjZXICF/fCEZV+2Xv4R8uPSWewUuoOtWKuJDMH3Px99bDKyQ5VHkSS+ljvxcQr5WJj4d6O54LcHZ3bikzwXI012Ph8ru0iyZlt9AwjfcHe5lvmB/Y9EpZz2vzhpViSFhHzyuiwI9TWKfXb88RYc19e6G5f8vWXbzWQ==",sidebar_class_name:"get api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},y=void 0,v={},W=[];function h(e){const t={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.default,{as:"h1",className:"openapi__heading",children:"Get log by UUID (Will be removed in version 6.0)"}),"\n",(0,r.jsx)(a(),{method:"get",path:"/v1/{projectName}/log/uuid/{logId}",context:"endpoint"}),"\n",(0,r.jsx)(t.admonition,{title:"deprecated",type:"caution",children:(0,r.jsx)(t.p,{children:"This endpoint has been deprecated and may be replaced or removed in future versions of the API."})}),"\n",(0,r.jsx)(t.p,{children:"Get log by UUID (Will be removed in version 6.0)"}),"\n",(0,r.jsx)(c.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,r.jsx)(l(),{parameters:[{name:"logId",in:"path",required:!0,schema:{type:"string"}},{name:"projectName",in:"path",required:!0,schema:{type:"string"}}]}),"\n",(0,r.jsx)(g(),{title:"Body",body:void 0}),"\n",(0,r.jsx)(m(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"application/json":{schema:{required:["id","uuid"],type:"object",properties:{id:{type:"integer",format:"int64"},uuid:{type:"string"},time:{type:"string",format:"date-time"},message:{type:"string"},binaryContent:{required:["contentType","id","thumbnailId"],type:"object",properties:{id:{type:"string"},thumbnailId:{type:"string"},contentType:{type:"string"}},title:"BinaryContent"},thumbnail:{type:"string"},level:{type:"string",enum:["error, warn, info, debug, trace, fatal, unknown"]},itemId:{type:"integer",format:"int64"},launchId:{type:"integer",format:"int64"}},title:"LogResource"}}}}}})]})}function U(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);