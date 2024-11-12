"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[66751],{61806:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>f,contentTitle:()=>j,default:()=>y,frontMatter:()=>b,metadata:()=>i,toc:()=>g});const i=JSON.parse('{"id":"api/service-api/versions/5.10/delete-project-issue-sub-type-using-delete","title":"Delete custom project specific issue sub-type","description":"Delete custom project specific issue sub-type","source":"@site/docs/api/service-api/versions/5.10/delete-project-issue-sub-type-using-delete.api.mdx","sourceDirName":"api/service-api/versions/5.10","slug":"/api/service-api/versions/5.10/delete-project-issue-sub-type-using-delete","permalink":"/docs/api/service-api/versions/5.10/delete-project-issue-sub-type-using-delete","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"delete-project-issue-sub-type-using-delete","title":"Delete custom project specific issue sub-type","description":"Delete custom project specific issue sub-type","sidebar_label":"Delete custom project specific issue sub-type","hide_title":true,"hide_table_of_contents":true,"api":"eJydVU1v2zAM/SsCT2uhxk2x7eDTijbAghVt0LSnIAfFZmJttqRKdLrA8H8f6I/E6ceGNRfbEslHPj4yFZDaBIgX4Lz9iQmdBSTSZhPOEmvI2zxHD0sJ1qFXpK2ZphBDijkSzlqXaQglzsvVw87hY9Bmcz25mTxMQIJTXhVI6BmhAqMKhBh0ChK0gRicogwkpBgSrx1H7689PpXaYwox+RIlhCTDQkFcAe1cE8QQbtCDhLX1haL26OtnqGu5R+pquuWvv0Ee2/0TO5DXZgN1vWTj4KwJGPj+4vycH8fB736ABCYTDfHtaXTKj0FUTTmHvespvrKFy5Hf7ucge1S74hyZVc/NIN1iFhiC2uBb6TU/rtV5TBRxRWuVB3xZ/nXTTZGUgWwhOjJEcJjotU6E5v6KUK7OGgAJBVJmDzJoGk0ZxBBtx1E1ILOOejVFvXtU6bQGCQH9ttdF6XOIgR3JJjav4yiqVEmZ9Zp2daScftWxe3TW08x6UrloY4GErfJarfKWmD5c25G1KnMWSUbkwqtws95WApqy4HlgQ5Cd/bKWsM/odYu/20CCNSeUSQVnJj7ptTCIKaYnwq5Fm694mfAhrxQLO/KNlWuMRtpyC5dMVVK2uIsKVqg8+suS+V4sh9dzFlRb+tBoL4uuoEZ3/N0a8byANms7VOKQ3Xeo70u5nE1FapOyQEONeDuxq6QRezeI89KxE9NbKM3dDu3Jt1clS8h1gibgwP3SqSRDcTE6B9mphauJo+j5+XmkmtuR9Zuocw3RzfRqcjufnLFLLYGl1mb/ZTQ+H435zNlAhTIDmP+dgyNe9jwT/qbI5UobRmmyrboBWcB2DBLi433Tzwi/HoLHOuW9m9lA7FhVKxXw0ed1zcdPJXoWxPIg+kYeqQ78/s6kV4c9BJ/uuzV3IpqN+2b23aEyu2a68pK/QMIv3LWbmpfthzCPKfgA+DBAzfOZoUrRNyy0FpdJgo4Gvrx5eWL2+6v7o6rrP74ta2M=","sidebar_class_name":"delete api-method","info_path":"api/service-api/versions/5.10/reportportal","custom_edit_url":null},"sidebar":"service-api-5.10","previous":{"title":"Creation of custom project specific issue sub-type","permalink":"/docs/api/service-api/versions/5.10/create-project-issue-sub-type-using-post"},"next":{"title":"settings-controller","permalink":"/docs/api/service-api/versions/5.10/settings-controller"}}');var p=s(74848),c=s(28453),o=s(57742),r=s.n(o),u=s(78178),a=s.n(u),n=s(19624),l=s.n(n),d=s(96226),m=s.n(d),h=(s(77675),s(19365),s(51107));const b={id:"delete-project-issue-sub-type-using-delete",title:"Delete custom project specific issue sub-type",description:"Delete custom project specific issue sub-type",sidebar_label:"Delete custom project specific issue sub-type",hide_title:!0,hide_table_of_contents:!0,api:"eJydVU1v2zAM/SsCT2uhxk2x7eDTijbAghVt0LSnIAfFZmJttqRKdLrA8H8f6I/E6ceGNRfbEslHPj4yFZDaBIgX4Lz9iQmdBSTSZhPOEmvI2zxHD0sJ1qFXpK2ZphBDijkSzlqXaQglzsvVw87hY9Bmcz25mTxMQIJTXhVI6BmhAqMKhBh0ChK0gRicogwkpBgSrx1H7689PpXaYwox+RIlhCTDQkFcAe1cE8QQbtCDhLX1haL26OtnqGu5R+pquuWvv0Ee2/0TO5DXZgN1vWTj4KwJGPj+4vycH8fB736ABCYTDfHtaXTKj0FUTTmHvespvrKFy5Hf7ucge1S74hyZVc/NIN1iFhiC2uBb6TU/rtV5TBRxRWuVB3xZ/nXTTZGUgWwhOjJEcJjotU6E5v6KUK7OGgAJBVJmDzJoGk0ZxBBtx1E1ILOOejVFvXtU6bQGCQH9ttdF6XOIgR3JJjav4yiqVEmZ9Zp2daScftWxe3TW08x6UrloY4GErfJarfKWmD5c25G1KnMWSUbkwqtws95WApqy4HlgQ5Cd/bKWsM/odYu/20CCNSeUSQVnJj7ptTCIKaYnwq5Fm694mfAhrxQLO/KNlWuMRtpyC5dMVVK2uIsKVqg8+suS+V4sh9dzFlRb+tBoL4uuoEZ3/N0a8byANms7VOKQ3Xeo70u5nE1FapOyQEONeDuxq6QRezeI89KxE9NbKM3dDu3Jt1clS8h1gibgwP3SqSRDcTE6B9mphauJo+j5+XmkmtuR9Zuocw3RzfRqcjufnLFLLYGl1mb/ZTQ+H435zNlAhTIDmP+dgyNe9jwT/qbI5UobRmmyrboBWcB2DBLi433Tzwi/HoLHOuW9m9lA7FhVKxXw0ed1zcdPJXoWxPIg+kYeqQ78/s6kV4c9BJ/uuzV3IpqN+2b23aEyu2a68pK/QMIv3LWbmpfthzCPKfgA+DBAzfOZoUrRNyy0FpdJgo4Gvrx5eWL2+6v7o6rrP74ta2M=",sidebar_class_name:"delete api-method",info_path:"api/service-api/versions/5.10/reportportal",custom_edit_url:null},j=void 0,f={},g=[];function v(e){const t={p:"p",...(0,c.R)(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"Delete custom project specific issue sub-type"}),"\n",(0,p.jsx)(r(),{method:"delete",path:"/v1/{projectName}/settings/sub-type/{id}",context:"endpoint"}),"\n",(0,p.jsx)(t.p,{children:"Delete custom project specific issue sub-type"}),"\n",(0,p.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,p.jsx)(a(),{parameters:[{name:"id",in:"path",description:"id",required:!0,schema:{type:"integer",format:"int64"}},{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}]}),"\n",(0,p.jsx)(l(),{title:"Body",body:void 0}),"\n",(0,p.jsx)(m(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"*/*":{schema:{title:"OperationCompletionRS",type:"object",properties:{message:{type:"string"}}}}}}}})]})}function y(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(v,{...e})}):v(e)}}}]);