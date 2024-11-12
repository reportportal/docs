"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19659],{66611:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>D,contentTitle:()=>v,default:()=>C,frontMatter:()=>g,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"api/service-api/delete-log","title":"Delete log","description":"Delete log","source":"@site/docs/api/service-api/delete-log.api.mdx","sourceDirName":"api/service-api","slug":"/api/service-api/delete-log","permalink":"/docs/api/service-api/delete-log","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"delete-log","title":"Delete log","description":"Delete log","sidebar_label":"Delete log","hide_title":true,"hide_table_of_contents":true,"api":"eJy9VE1PGzEQ/SurOYFksoDaHvbUCFI1LQIEVD1EOTi7k42p1zb2bGi08n+vxrsJgSBVvTSXeMfz+d7zdECyDlDMQNv6pLSGvNUaPcwFWIdekrJmWkEBFWokvLI1CHDSywYJPUd2YGSDUHCGaQUClIECnKQVCPD41CqPFRTkWxQQyhU2EooOaOM4SBnCGj0IWFrfSOpNnz5AjGKX2Xn7iCVd89c/5g/klakhxjk7B2dNwMD356en/FdhKL1yPCYUcPMdBDAKaIhvpXNalQmE/DGwS3dYwi64OYbFM2Sk+gINhiBrfK8XAaRIs+lmi/GFbZxGPt3dQ+SfeNPbZSIg04mBBmllX2hJnNAKCsjXZ3m3h1fMta3zLnETQUBAv97y1noNBXRpIIxFnncrGyjm0il4W/0OnfV0az1JnY1vp1mfCASspVdyofuh+1x8QtM2rKsVkQOR/gKrqsKlbDXznG6iAC56SMVXGyhj/jNpqoyLZ0dqmRnECqvjzC6zvqVs6GnXz0uBChs78snLJaeRsoztnGEoW69ok3BYoPToxy0DOJvvX9+ncdJk+047RofhtlMPTiCGw5etpL/9fEi0K7O0KXygfx/Vv0Ne2bJt0FASzCBUWSbshody3zqOAQHYSMXsht7y+QAGAVqVaALuhY+dLFeYnY9OQQzq4AmLPH9+fh7JdDuyvs6H0JBfTS8m1/eTEw6JAlhaffMfR2eDzdlAjTR7ZV4p+dXMO2AJf1PutFSGU6RWukHiM1ifgYDi9VLokxX9DppvRTWDrlvIgD+8jpHNTy16Jn3+otskgUoFPldQLKUOeNDWbifA0d2wco4zEO+3Oxil2aTnoVv+AgG/cLNbk7zd/mPRfbDinB8dygp9mr33GJclOtqLPdh9/DB2e+dycjV5mECMfwBtHiFn","sidebar_class_name":"delete api-method","info_path":"api/service-api/reportportal","custom_edit_url":null},"sidebar":"serviceApi","previous":{"title":"Get log by ID","permalink":"/docs/api/service-api/get-log"},"next":{"title":"Get logs by filter","permalink":"/docs/api/service-api/get-page-number"}}');var o=i(74848),l=i(28453),a=i(57742),s=i.n(a),d=i(78178),p=i.n(d),r=i(19624),c=i.n(r),h=i(96226),f=i.n(h),m=(i(77675),i(19365),i(51107));const g={id:"delete-log",title:"Delete log",description:"Delete log",sidebar_label:"Delete log",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VE1PGzEQ/SurOYFksoDaHvbUCFI1LQIEVD1EOTi7k42p1zb2bGi08n+vxrsJgSBVvTSXeMfz+d7zdECyDlDMQNv6pLSGvNUaPcwFWIdekrJmWkEBFWokvLI1CHDSywYJPUd2YGSDUHCGaQUClIECnKQVCPD41CqPFRTkWxQQyhU2EooOaOM4SBnCGj0IWFrfSOpNnz5AjGKX2Xn7iCVd89c/5g/klakhxjk7B2dNwMD356en/FdhKL1yPCYUcPMdBDAKaIhvpXNalQmE/DGwS3dYwi64OYbFM2Sk+gINhiBrfK8XAaRIs+lmi/GFbZxGPt3dQ+SfeNPbZSIg04mBBmllX2hJnNAKCsjXZ3m3h1fMta3zLnETQUBAv97y1noNBXRpIIxFnncrGyjm0il4W/0OnfV0az1JnY1vp1mfCASspVdyofuh+1x8QtM2rKsVkQOR/gKrqsKlbDXznG6iAC56SMVXGyhj/jNpqoyLZ0dqmRnECqvjzC6zvqVs6GnXz0uBChs78snLJaeRsoztnGEoW69ok3BYoPToxy0DOJvvX9+ncdJk+047RofhtlMPTiCGw5etpL/9fEi0K7O0KXygfx/Vv0Ne2bJt0FASzCBUWSbshody3zqOAQHYSMXsht7y+QAGAVqVaALuhY+dLFeYnY9OQQzq4AmLPH9+fh7JdDuyvs6H0JBfTS8m1/eTEw6JAlhaffMfR2eDzdlAjTR7ZV4p+dXMO2AJf1PutFSGU6RWukHiM1ifgYDi9VLokxX9DppvRTWDrlvIgD+8jpHNTy16Jn3+otskgUoFPldQLKUOeNDWbifA0d2wco4zEO+3Oxil2aTnoVv+AgG/cLNbk7zd/mPRfbDinB8dygp9mr33GJclOtqLPdh9/DB2e+dycjV5mECMfwBtHiFn",sidebar_class_name:"delete api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},v=void 0,D={},u=[];function y(e){const t={p:"p",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(m.default,{as:"h1",className:"openapi__heading",children:"Delete log"}),"\n",(0,o.jsx)(s(),{method:"delete",path:"/v1/{projectName}/log/{logId}",context:"endpoint"}),"\n",(0,o.jsx)(t.p,{children:"Delete log"}),"\n",(0,o.jsx)(m.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,o.jsx)(p(),{parameters:[{name:"logId",in:"path",required:!0,schema:{type:"integer",format:"int64"}},{name:"projectName",in:"path",required:!0,schema:{type:"string"}}]}),"\n",(0,o.jsx)(c(),{title:"Body",body:void 0}),"\n",(0,o.jsx)(f(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"}},title:"OperationCompletionRS"}}}}}})]})}function C(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(y,{...e})}):y(e)}}}]);