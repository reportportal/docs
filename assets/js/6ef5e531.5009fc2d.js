"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[91097],{25023:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>f,contentTitle:()=>k,default:()=>y,frontMatter:()=>g,metadata:()=>a,toc:()=>x});const a=JSON.parse('{"id":"api/service-api/versions/5.11/get-ticket-ids-using-get","title":"Get tickets that contains a term as a part inside for specified launch","description":"Get tickets that contains a term as a part inside for specified launch","source":"@site/docs/api/service-api/versions/5.11/get-ticket-ids-using-get.api.mdx","sourceDirName":"api/service-api/versions/5.11","slug":"/api/service-api/versions/5.11/get-ticket-ids-using-get","permalink":"/docs/api/service-api/versions/5.11/get-ticket-ids-using-get","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-ticket-ids-using-get","title":"Get tickets that contains a term as a part inside for specified launch","description":"Get tickets that contains a term as a part inside for specified launch","sidebar_label":"Get tickets that contains a term as a part inside for specified launch","hide_title":true,"hide_table_of_contents":true,"api":"eJytVU1v2zAM/SsCT2uhxk2x7eDTiqHogg1d0Y9TkQNrM7FWW1IlOl1g+L8PtJ2vpu2GYrk4lh75nkjquQHGeYT0DpgiHxmm6ihzloMrSwow1eA8BWTj7CSHFObENyZ7IJ7k8TYaOz8/uwENHgNWxBQkVQMWK4IUSqxtVoAGYyGFx5rCEjTkFLNgvKTcxgR6rE2gHFIONWmIWUEVQtoAL71kM5ZpTgE0zFyokPulzx+hbfWa0gf3izK+kLeB1yMXe7S7uL9yRw7GzneYmEL19tEGxL8nnwo4emcjRdk/OT6Wx27Wn99Bg7SILMvuYXIoj72sGAKKJmlpfIlNfiLZB8qQRd8My0jPT3FOrLhreVRcICvhRmOjQiUnVCj/PAZWxkaTk5q5oKKnzMwM5Wrd4Iq4cMMMdSPDBaSQLMZJs9WNNhHBSc+YmDyChkhhsRqtOpSQgkSwy1zZpknSYM2FC4aXbYLe7PXhirwLfOkCY6n6XKBhgcHgfdlXepWuL/cM61LGq2D2cS/d5QqrgWxdyd0RIOgBP201rBXt9++bi6xkhhTaXIky9cHMlCXKKT9QbqZ6veq54I2unCo3Ch3Kd6CRcdLQqZQqq3veuwbuCQOF01oKfTeVbWNnrpsFwyU9K80rdVvpOL2cqNxldUWWOz8YxhCzbgyHW3FdewmS2lRopFWxX/myp1dDaTKykbbCTz1mBamT0THoodVS1DRJnp6eRtjtjlyYJ0NoTH5Mvp5dXJ8dSUirQeakV/9pNB73a95FrtBu0fy3md4p2PqKMf3mxJdorNB3x2iGeb+DxRg0pM98ikmcopck73kU6y1cZAlpmnuMdBvKtpXl3m2kwbmJMsKvXN1mYxPw4WpwoYON+BfVPtBy25UXWNYCAnG+d9ENLvgG2YDYUE03t/P9x9yt8Iv0K6e0y236laztBK1c6oIwp9Ap6hGnWUaet2LFi0X92urk69i2fwBuS4ib","sidebar_class_name":"get api-method","info_path":"api/service-api/versions/5.11/reportportal","custom_edit_url":null},"sidebar":"service-api-5.11","previous":{"title":"Search suggested items in analyzer for provided one","permalink":"/docs/api/service-api/versions/5.11/get-suggested-items-using-get"},"next":{"title":"Get tickets that contains a term as a part inside for specified launch","permalink":"/docs/api/service-api/versions/5.11/get-ticket-ids-for-project-using-get"}}');var s=i(74848),n=i(28453),r=i(57742),c=i.n(r),o=i(78178),p=i.n(o),d=i(19624),l=i.n(d),u=i(96226),m=i.n(u),h=(i(77675),i(19365),i(51107));const g={id:"get-ticket-ids-using-get",title:"Get tickets that contains a term as a part inside for specified launch",description:"Get tickets that contains a term as a part inside for specified launch",sidebar_label:"Get tickets that contains a term as a part inside for specified launch",hide_title:!0,hide_table_of_contents:!0,api:"eJytVU1v2zAM/SsCT2uhxk2x7eDTiqHogg1d0Y9TkQNrM7FWW1IlOl1g+L8PtJ2vpu2GYrk4lh75nkjquQHGeYT0DpgiHxmm6ihzloMrSwow1eA8BWTj7CSHFObENyZ7IJ7k8TYaOz8/uwENHgNWxBQkVQMWK4IUSqxtVoAGYyGFx5rCEjTkFLNgvKTcxgR6rE2gHFIONWmIWUEVQtoAL71kM5ZpTgE0zFyokPulzx+hbfWa0gf3izK+kLeB1yMXe7S7uL9yRw7GzneYmEL19tEGxL8nnwo4emcjRdk/OT6Wx27Wn99Bg7SILMvuYXIoj72sGAKKJmlpfIlNfiLZB8qQRd8My0jPT3FOrLhreVRcICvhRmOjQiUnVCj/PAZWxkaTk5q5oKKnzMwM5Wrd4Iq4cMMMdSPDBaSQLMZJs9WNNhHBSc+YmDyChkhhsRqtOpSQgkSwy1zZpknSYM2FC4aXbYLe7PXhirwLfOkCY6n6XKBhgcHgfdlXepWuL/cM61LGq2D2cS/d5QqrgWxdyd0RIOgBP201rBXt9++bi6xkhhTaXIky9cHMlCXKKT9QbqZ6veq54I2unCo3Ch3Kd6CRcdLQqZQqq3veuwbuCQOF01oKfTeVbWNnrpsFwyU9K80rdVvpOL2cqNxldUWWOz8YxhCzbgyHW3FdewmS2lRopFWxX/myp1dDaTKykbbCTz1mBamT0THoodVS1DRJnp6eRtjtjlyYJ0NoTH5Mvp5dXJ8dSUirQeakV/9pNB73a95FrtBu0fy3md4p2PqKMf3mxJdorNB3x2iGeb+DxRg0pM98ikmcopck73kU6y1cZAlpmnuMdBvKtpXl3m2kwbmJMsKvXN1mYxPw4WpwoYON+BfVPtBy25UXWNYCAnG+d9ENLvgG2YDYUE03t/P9x9yt8Iv0K6e0y236laztBK1c6oIwp9Ap6hGnWUaet2LFi0X92urk69i2fwBuS4ib",sidebar_class_name:"get api-method",info_path:"api/service-api/versions/5.11/reportportal",custom_edit_url:null},k=void 0,f={},x=[];function v(e){const t={p:"p",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"Get tickets that contains a term as a part inside for specified launch"}),"\n",(0,s.jsx)(c(),{method:"get",path:"/v1/{projectName}/item/ticket/ids",context:"endpoint"}),"\n",(0,s.jsx)(t.p,{children:"Get tickets that contains a term as a part inside for specified launch"}),"\n",(0,s.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,s.jsx)(p(),{parameters:[{name:"launch",in:"query",description:"launch",required:!0,schema:{type:"integer",format:"int64"}},{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}},{name:"term",in:"query",description:"term",required:!0,schema:{type:"string"}}]}),"\n",(0,s.jsx)(l(),{title:"Body",body:void 0}),"\n",(0,s.jsx)(m(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"*/*":{schema:{type:"array",items:{type:"string"}}}}}}})]})}function y(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(v,{...e})}):v(e)}}}]);