import{u as v,d as x,r,j as e,b as m,F as _,f as L,l as S,y as I,x as $,n as j,$ as k,B as G,z as Q,aN as U,Y as B,X as H,aH as Y,W as z,E as W,a0 as X,G as J,b3 as K,b5 as f,c as Z,h as ee,s as ae,b6 as V,e as O,a as le}from"./main-d68524cb.js";import{G as N}from"./GenerateFields-9a512569.js";import{S as b}from"./react-select.esm-2ed32846.js";import{F as te}from"./index-a893b67a.js";import{$ as w,a0 as P,a1 as T}from"./SelectOptions-35d56804.js";import{A as se}from"./ActionButtonsComponent-bc200581.js";/* empty css                  */import"./index-e65b1456.js";const R=[{value:"App\\Models\\Lead",label:"Lead"},{value:"App\\Models\\Contact",label:"Contact"}],g=[{value:"App\\Models\\Account",label:"Account",api:j,labelField:"account_name"},{value:"App\\Models\\Vendor",label:"Vendor",api:k,labelField:"vendor_name"},{value:"App\\Models\\Quote",label:"Quote",api:G,labelField:"subject"},{value:"App\\Models\\Rfq",label:"Rfq",api:Q,labelField:"rfq_name"},{value:"App\\Models\\Excess",label:"Excess",api:U,labelField:"excess_name"},{value:"App\\Models\\Availability",label:"Availability",api:B,labelField:"availability_name"},{value:"App\\Models\\Product",label:"Product",api:H,labelField:"product_name"},{value:"App\\Models\\Manufacturer",label:"Manufacturer",api:Y,labelField:"name"},{value:"App\\Models\\Deal",label:"Deals",api:z,labelField:"deal_name"},{value:"App\\Models\\SalesOrder",label:"Sales Order",api:W,labelField:"subject"},{value:"App\\Models\\PurchaseOrder",label:"Purchase Order",api:X,labelField:"subject"},{value:"App\\Models\\Invoice",label:"Invoice",api:J,labelField:"subject"},{value:"App\\Models\\VendorRfq",label:"Vendor Rfq",api:K,labelField:"vendor_rfq_name"}],ne=()=>{var F,A,M;const o=v(),l=x(a=>a.callForm),[n,d]=r.useState(l.callable_type),[t,i]=r.useState(l.relatable_type),[C,u]=r.useState({value:l.callable?l.callable.id:null,label:e("div",{className:"flex items-center",children:l.callable?m(_,{children:[e("img",{src:L((F=l==null?void 0:l.callable)==null?void 0:F.image_data),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),m("div",{children:[e("div",{className:"text-sm font-bold",children:`${l.callable.first_name} ${l.callable.last_name}`}),e("div",{className:"text-xs text-gray-500",children:l.callable.email})]})]}):e("div",{className:"text-sm font-bold"})},l.callable?l.callable.id:"default-key")}),y=(A=g.find(a=>a.value===l.relatable_type))==null?void 0:A.labelField,[p,h]=r.useState({value:l.relatable?l.relatable.id:null,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:l.relatable?l.relatable[y]:null})})},(M=l.relatable)==null?void 0:M.id)}),s=(a,c)=>{o(f({[a]:c}))},q=a=>(g.find(E=>E.value===t)??{value:null,label:null,api:j}).api.call(null,a),D={"Call Information":{"Call To":m("div",{className:"flex",children:[e(b,{id:"callable_type",name:"callable_type",onChange:({value:a})=>{d(a),u(null),s("callable_type",a),s("callable_id",null)},defaultValue:R.find(a=>a.value==l.callable_type),className:"flex-none w-64 mr-2",options:R}),e(S,{isMulti:!1,id:"callable_id",placeholder:"Type at least 2 characters to search...",name:"callable_id",value:C,menuPortalTarget:document.body,loadOptions:n==="App\\Models\\Lead"?I:$,onChange:({value:a,label:c})=>{u({value:a,label:c}),s("callable_id",a)},className:"flex-1",required:!0})]}),"Related To":m("div",{className:"flex",children:[e(b,{id:"relatable_type",name:"relatable_type",onChange:({value:a})=>{i(a),h(null),s("relatable_type",a),s("relatable_id",null)},className:"flex-none w-64 mr-2",options:g,defaultValue:g.find(a=>a.value==l.relatable_type)}),e(S,{isMulti:!1,id:"relatable_id",menuPortalTarget:document.body,placeholder:"Type at least 2 characters to search...",name:"relatable_id",loadOptions:a=>q(a),onChange:({value:a,label:c})=>{h({value:a,label:c}),s("relatable_id",a)},value:p,className:"flex-1",required:!0})]}),"Call Type":e(b,{id:"type",name:"type",required:!0,options:w,defaultValue:w.find(a=>a.value==l.type),onChange:({value:a})=>{s("type",a)},className:"flex-1"}),"Outgoing Call Status":e("input",{id:"outgoing_call_status",name:"outgoing_call_status",type:"text",placeholder:"Readonly input here…",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",defaultValue:"Abgeschlossen",disabled:!0}),"Call Start Time":e(te,{required:!0,name:"call_start_time","data-enable-time":!0,options:{enableTime:!0,dateFormat:"Y-m-d H:i",position:"auto left",defaultDate:l.call_start_time?new Date(l.call_start_time):null},onChange:(a,c)=>s("call_start_time",c),className:"form-input flex-1"}),"Call Duration":m("div",{className:"flex",children:[e("input",{id:"call_duration_minutes",required:!0,name:"call_duration_minutes",className:"form-input mr-2 flex-1 ",onChange:a=>s(a.target.name,a.target.value),placeholder:"Minutes",defaultValue:l.call_duration_minutes}),e("input",{id:"call_duration_seconds",required:!0,name:"call_duration_seconds",className:"form-input ml-2 flex-1 ",onChange:a=>s(a.target.name,a.target.value),placeholder:"Seconds",defaultValue:l.call_duration_seconds})]}),Subject:e("input",{required:!0,id:"subject",name:"subject",className:"form-input flex-1 ",defaultValue:l.subject,onChange:a=>s(a.target.name,a.target.value)}),"Voice Recording":e("input",{id:"voice_recording",name:"voice_recording",className:"form-input flex-1 ",defaultValue:l.voice_recording,onChange:a=>s(a.target.name,a.target.value)})}};return e(_,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(N,{fields:D})})})},re=()=>{const o=v(),l=x(t=>t.callForm),n=(t,i)=>{o(f({[t]:i}))},d={"Purpose Of Outgoing Call":{"Call Purpose":e(b,{id:"call_purpose",name:"call_purpose",options:P,menuPortalTarget:document.body,defaultValue:P.find(t=>t.value==l.call_purpose),onChange:({value:t})=>{n("call_purpose",t)},className:"flex-1"}),"Call Agenda":e("input",{id:"call_agenda",name:"call_agenda",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value),defaultValue:l.call_agenda})}};return e(_,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(N,{fields:d})})})},ie=()=>{const o=v(),l=x(t=>t.callForm),n=(t,i)=>{o(f({[t]:i}))},d={"Outcome Of Outgoing Call":{"Call Result":e(b,{id:"call_result",name:"call_result",options:T,defaultValue:T.find(t=>t.value==l.call_result),onChange:({value:t})=>{n("call_result",t)},className:"flex-1"}),Description:e("input",{id:"description",name:"description",className:"form-input flex-1 ",defaultValue:l.description,onChange:t=>n(t.target.name,t.target.value)})}};return e(_,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(N,{fields:d})})})},ce=()=>m("div",{className:"mt-8 px-4",children:[e(ne,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(re,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ie,{})]}),ge=()=>{const{hasPermission:o}=Z(),l=x(p=>p.callForm),[n,d]=r.useState(!0),i=ee().id,C=new le,u=v();r.useEffect(()=>{u(ae("Call Edit"))}),r.useEffect(()=>{u(V())},[]);const y=async()=>{const p=await C.fetchSingleCall(i);if(p.status!=200)return;const h=p.data.data.call;u(f(h))};return r.useEffect(()=>{y().then(()=>{d(!1)})},[i]),r.useEffect(()=>{u(f({api:"updateSingleCall",redirectTo:"/call/edit/:id",action:"edit"}))},[]),n?e(O,{}):!o("update-call")||n?e(O,{}):m("div",{className:"px-4",children:[e(se,{formState:l,resetForm:V}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6",children:e(ce,{})})})]})};export{ge as default};
