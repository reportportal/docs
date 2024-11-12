"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5909],{33250:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>C,frontMatter:()=>v,metadata:()=>i,toc:()=>y});const i=JSON.parse('{"id":"api/service-api/versions/5.10/compare-launches-using-get","title":"Compare launches","description":"Compare launches","source":"@site/docs/api/service-api/versions/5.10/compare-launches-using-get.api.mdx","sourceDirName":"api/service-api/versions/5.10","slug":"/api/service-api/versions/5.10/compare-launches-using-get","permalink":"/docs/api/service-api/versions/5.10/compare-launches-using-get","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"compare-launches-using-get","title":"Compare launches","description":"Compare launches","sidebar_label":"Compare launches","hide_title":true,"hide_table_of_contents":true,"api":"eJydVsFu2zgQ/RVhTm3BWkl2uwedNgiCbrBFGzTtyfBhLI0tthLJkqOkrqB/X4woq3KUboT6Yoh6M3x8nHmjFhj3AbI1VNiYvHydW8PeVhV52CiwjjyytuamgAxyWzv09K5HUvgctNm/vf4EChx6rInJS6oWDNYEGegigAJtIINvDfkDKCgo5F47STkCPH1rtKcCMvYNKQh8qCR8Z30NCui7q2xB49u8pBoha4EPTmDoPUpqzVSHybo2THvyoPpEyHHprz+h6zo1cnTefqGc38vTwNUhlzOqp7gZ5cekAntt9tB1GwEHZ02gntzF2Zn8nSb/8C8oEOXJsLx9lb6Sv1lWuxUOoACLQkssVrde7og1hf+VRHMv6VWJnu8YWQfWebgatlSzDdxJWl0s0lUNos5UUGCaekv+2Sx/XAg4MHr+pIdUA3V5Doy1e5ZtgUwLdyrwsBBZ2sY/X10RW2vTMC1GW8PlQqxBY5fmDZRbUyxFs66fFy1eskB/WEMfdrtAvDD/gXDZ9XedgnusmhP9lhb+2HbHn7Sx85QjS7PusAr0uLOvoqsl1WBroKAmLq043p768hJDyCC9P0/biQ90aQxJB18E0dzfH02w8RVkIAFsc1t1WZq22HBpveZDl6LTM5P5SM56vrWesUpiLhA1vMZtFQ96TBdNZIdNJdqVzC7M0t0esQrINLW4vABBDfhNp2BkNHelf2zgRDo6QVMkwix5oXeJISqoeJnYXRL5Jo8J/+RVUG1Xvke5HrTSVm5n05dnE/ddt7Al9OQvG9F5vZm+vhMPjEefgsYbHw7UW6U8RxDIzWuzs1MHmar7C+mPR7m8vUkKmzc1Ge7n3+DPmPf1PsyOu8ZJkMhbo5bbDnHl79mRFVQ6JxNoEn7pMC8puVidgRqqRU6TpenDw8MK+7cr6/fpEBrSdzdX1+/vrl9LiLQJ+RDZv1mdn63OZc3ZwDWayTZP1PfJ0Ucpmb5z6irURhL1hNqh9tdwfw4KstMpGDP20sQG2IhPBhZ8224x0GdfdZ0sx/kvV13oIMX8i25sf45BePFxmLIvk/ih8CTPr3QYvyR634AMQCro2Da/v+vpaZ/c/ThwzWG6/ZHVNEEn3VYSFjIG1+2AuMxzcjyJldEv7EcLkg+srvsPwVRJmg==","sidebar_class_name":"get api-method","info_path":"api/service-api/versions/5.10/reportportal","custom_edit_url":null},"sidebar":"service-api-5.10","previous":{"title":"Get all index clusters of the launch","permalink":"/docs/api/service-api/versions/5.10/get-clusters-using-get"},"next":{"title":"Import junit xml report","permalink":"/docs/api/service-api/versions/5.10/import-launch-using-post"}}');var r=s(74848),n=s(28453),a=s(57742),o=s.n(a),p=s(78178),c=s.n(p),d=s(19624),m=s.n(d),l=s(96226),h=s.n(l),u=(s(77675),s(19365),s(51107));const v={id:"compare-launches-using-get",title:"Compare launches",description:"Compare launches",sidebar_label:"Compare launches",hide_title:!0,hide_table_of_contents:!0,api:"eJydVsFu2zgQ/RVhTm3BWkl2uwedNgiCbrBFGzTtyfBhLI0tthLJkqOkrqB/X4woq3KUboT6Yoh6M3x8nHmjFhj3AbI1VNiYvHydW8PeVhV52CiwjjyytuamgAxyWzv09K5HUvgctNm/vf4EChx6rInJS6oWDNYEGegigAJtIINvDfkDKCgo5F47STkCPH1rtKcCMvYNKQh8qCR8Z30NCui7q2xB49u8pBoha4EPTmDoPUpqzVSHybo2THvyoPpEyHHprz+h6zo1cnTefqGc38vTwNUhlzOqp7gZ5cekAntt9tB1GwEHZ02gntzF2Zn8nSb/8C8oEOXJsLx9lb6Sv1lWuxUOoACLQkssVrde7og1hf+VRHMv6VWJnu8YWQfWebgatlSzDdxJWl0s0lUNos5UUGCaekv+2Sx/XAg4MHr+pIdUA3V5Doy1e5ZtgUwLdyrwsBBZ2sY/X10RW2vTMC1GW8PlQqxBY5fmDZRbUyxFs66fFy1eskB/WEMfdrtAvDD/gXDZ9XedgnusmhP9lhb+2HbHn7Sx85QjS7PusAr0uLOvoqsl1WBroKAmLq043p768hJDyCC9P0/biQ90aQxJB18E0dzfH02w8RVkIAFsc1t1WZq22HBpveZDl6LTM5P5SM56vrWesUpiLhA1vMZtFQ96TBdNZIdNJdqVzC7M0t0esQrINLW4vABBDfhNp2BkNHelf2zgRDo6QVMkwix5oXeJISqoeJnYXRL5Jo8J/+RVUG1Xvke5HrTSVm5n05dnE/ddt7Al9OQvG9F5vZm+vhMPjEefgsYbHw7UW6U8RxDIzWuzs1MHmar7C+mPR7m8vUkKmzc1Ge7n3+DPmPf1PsyOu8ZJkMhbo5bbDnHl79mRFVQ6JxNoEn7pMC8puVidgRqqRU6TpenDw8MK+7cr6/fpEBrSdzdX1+/vrl9LiLQJ+RDZv1mdn63OZc3ZwDWayTZP1PfJ0Ucpmb5z6irURhL1hNqh9tdwfw4KstMpGDP20sQG2IhPBhZ8224x0GdfdZ0sx/kvV13oIMX8i25sf45BePFxmLIvk/ih8CTPr3QYvyR634AMQCro2Da/v+vpaZ/c/ThwzWG6/ZHVNEEn3VYSFjIG1+2AuMxzcjyJldEv7EcLkg+srvsPwVRJmg==",sidebar_class_name:"get api-method",info_path:"api/service-api/versions/5.10/reportportal",custom_edit_url:null},g=void 0,f={},y=[];function x(e){const t={p:"p",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.default,{as:"h1",className:"openapi__heading",children:"Compare launches"}),"\n",(0,r.jsx)(o(),{method:"get",path:"/v1/{projectName}/launch/compare",context:"endpoint"}),"\n",(0,r.jsx)(t.p,{children:"Compare launches"}),"\n",(0,r.jsx)(u.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,r.jsx)(c(),{parameters:[{name:"ids",in:"query",description:"ids",required:!0,style:"form",explode:!0,schema:{type:"array",items:{type:"integer",format:"int64"}}},{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}]}),"\n",(0,r.jsx)(m(),{title:"Body",body:void 0}),"\n",(0,r.jsx)(h(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"*/*":{schema:{type:"object",additionalProperties:{type:"array",items:{title:"ChartStatisticsContent",type:"object",properties:{id:{type:"integer",format:"int64"},name:{type:"string"},number:{type:"integer",format:"int32"},startTime:{title:"Timestamp",type:"object",properties:{date:{type:"integer",format:"int32"},day:{type:"integer",format:"int32"},hours:{type:"integer",format:"int32"},minutes:{type:"integer",format:"int32"},month:{type:"integer",format:"int32"},nanos:{type:"integer",format:"int32"},seconds:{type:"integer",format:"int32"},time:{type:"integer",format:"int64"},timezoneOffset:{type:"integer",format:"int32"},year:{type:"integer",format:"int32"}}},values:{type:"object",additionalProperties:{type:"string"}}}}}}}}}}})]})}function C(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}}}]);