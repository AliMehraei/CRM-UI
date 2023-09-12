import{u as g,c as N,a as k,b as e,j as o,F as C,ah as x,r as c,f as R,s as E,g as Y,ai as Q}from"./main-23791f1d.js";import{A as F}from"./react-select-async.esm-ffb837fe.js";import{s as U,G as $,e as B,d as W,b as I,p as G,i as H,f as z,u as J,n as K,m as X,r as Z,l as ee,j as ae,q as le,k as te,w as se,c as re}from"./CommonFunctions-41741e79.js";import{S as y}from"./react-select.esm-6c13d46a.js";import{F as M}from"./index-e4de3f7b.js";/* empty css                  */import"./Select-aecb2a80.esm-73517497.js";import"./sweetalert2.all-685335b3.js";const de=()=>{var u,p,d,i,s,m;const f=g();new N;const a=k(l=>l.taskForm),r=(l,v)=>{f(x({[l]:v}))},b=[{value:"none",label:"-None-"},{value:"account_contact",label:"Account or Contact exist already"},{value:"wrong_branch",label:"Wrong Branch"},{value:"wrong_department",label:"Wrong Department"},{value:"does_not_exist",label:"Does Not Exist Anymore"},{value:"bankruptcy",label:"Bankruptcy"},{value:"other",label:"Other"}],n=[{value:"none",label:"-None-"},{value:"0_cold_task",label:"0.0 Cold task / unqualified (CLU)"},{value:"1_cold_task",label:"1.0 Cold task qualified (CLQ)"},{value:"2_first_contract",label:"2.0 First contact made (FCM)"},{value:"3_warm_task",label:"3.0 warm task qualified (WLQ)"},{value:"4_hot_task",label:"4.0 Hot task (HLQ)"},{value:"close_task",label:"Close Task / Lost Task"}],h={"Task Information":{"Task Owner":e(F,{isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:U,onChange:({value:l})=>{r("owner_id",l)},className:"flex-1",required:!0,defaultValue:{value:(u=a.owner)==null?void 0:u.id,label:o("div",{className:"flex items-center",children:[e("img",{src:(p=a.owner)==null?void 0:p.image,alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),o("div",{children:[e("div",{className:"text-sm font-bold",children:((d=a.owner)==null?void 0:d.first_name)+" "+((i=a.owner)==null?void 0:i.last_name)}),e("div",{className:"text-xs text-gray-500",children:(s=a.owner)==null?void 0:s.email})]})]},(m=a.owner)==null?void 0:m.id)}}),Subject:e("input",{id:"subject",name:"subject",className:"form-input flex-1 ",onChange:l=>r(l.target.name,l.target.value),required:!0,defaultValue:a.subject}),"Dua Date":e(M,{name:"due_date",className:"form-input flex-1",defaultValue:a.due_date,placeholder:"MM DD YYYY",options:{dateFormat:"d-m-Y",defaultDate:`${a.due_date?new Date(a.due_date):""}`},onChange:(l,v)=>r("due_date",v)}),Status:e(y,{options:n,name:"status",id:"status",onChange:({value:l})=>{r("status",l)},className:"flex-1",defaultValue:n.find(l=>l.value==a.status)}),Priority:e(y,{options:b,name:"priority",id:"priority",onChange:({value:l})=>{r("priority",l)},defaultValue:b.find(l=>l.value==a.priority),className:"flex-1"}),Repeat:e("input",{id:"repeat",type:"checkbox",name:"repeat",disabled:!0,className:"form-checkbox",onChange:l=>r(l.target.name,l.target.checked),defaultChecked:a.repeat})},"Description Information":{Description:e("textarea",{id:"description",rows:6,name:"description",className:"form-textarea flex-1",placeholder:"",defaultValue:a.description,onChange:l=>r(l.target.name,l.target.value)})}};return e(C,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e($,{fields:h})})})},ne=()=>{const f=g();new N;const a=k(s=>s.taskForm),[r,b]=c.useState(a.reminder),[n,h]=c.useState(a.reminder_on_date),[u,p]=c.useState(a.reminder_on_time),d=[{value:"email",label:"Email"},{value:"popup",label:"PopUp"},{value:"both",label:"Both"}],i=(s,m)=>{s==="reminder"&&b(m),f(x({[s]:m}))};return e(C,{children:o("div",{className:"p-6 border rounded-md",children:[o("div",{className:"flex items-center space-x-4",children:[e("label",{className:"text-lg font-semibold",children:"Reminder:"}),e("input",{id:"reminder",type:"checkbox",name:"reminder",className:"form-checkbox h-5 w-5 text-blue-600",onChange:s=>i(s.target.name,s.target.checked),defaultChecked:a.reminder})]}),r&&o("div",{className:"my-4 flex items-center space-x-4",children:[e("label",{children:"On:"}),e(M,{className:"p-2 border rounded-md form-input flex-1","data-enable-time":!1,placeholder:"MM DD YYYY",value:n,onChange:(s,m)=>{h(m),i("reminder_on_date",m)},options:{dateFormat:"d-m-Y"}}),e("label",{children:"At:"}),e(M,{className:"p-2 border rounded-md form-input flex-1","data-enable-time":!0,"data-no-calendar":!0,value:u,onChange:s=>{p(s[0]),i("reminder_on_time",s[0])}}),e("label",{children:"Notify Type:"}),e(y,{id:"reminder_type",name:"reminder_type",onChange:({value:s})=>{i("reminder_type",s)},className:"flex-1",options:d,defaultValue:d.find(s=>s.value==a.reminder_type)})]})]})})},oe=()=>{var S,w,A,T,D,P,V,q,j;const f=g();new N;const a=k(t=>t.taskForm),r=(t,_)=>{f(x({[t]:_}))},b=[{value:"App\\Models\\Lead",label:"Lead"},{value:"App\\Models\\Contact",label:"Contact"}],n=[{value:"App\\Models\\Account",label:"Account",api:I,labelFelid:"account_name"},{value:"App\\Models\\Vendor",label:"Vendor",api:G,labelFelid:"vendor_name"},{value:"App\\Models\\Quote",label:"Quote",api:H,labelFelid:"subject"},{value:"App\\Models\\Rfq",label:"Rfq",api:z,labelFelid:"rfq_name"},{value:"App\\Models\\Excess",label:"Excess",api:J,labelFelid:"excess_name"},{value:"App\\Models\\Availability",label:"Availability",api:K,labelFelid:"availability_name"},{value:"App\\Models\\Product",label:"Product",api:X,labelFelid:"product_name"},{value:"App\\Models\\Manufacturer",label:"Manufacturer",api:Z,labelFelid:"name"},{value:"App\\Models\\Deal",label:"Deals",api:ee,labelFelid:"deal_name"},{value:"App\\Models\\SalesOrder",label:"Sales Order",api:ae,labelFelid:"subject"},{value:"App\\Models\\PurchaseOrder",label:"Purchase Order",api:le,labelFelid:"subject"},{value:"App\\Models\\Invoice",label:"Invoice",api:te,labelFelid:"subject"},{value:"App\\Models\\VendorRfq",label:"Vendor Rfq",api:se,labelFelid:"vendor_rfq_name"}],[h,u]=c.useState(a.userable_type),[p,d]=c.useState(a.moduleable_type),[i,s]=c.useState({value:(S=a.userable)==null?void 0:S.id,label:o("div",{className:"flex items-center",children:[e("img",{src:(w=a.userable)==null?void 0:w.avatar,alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),o("div",{children:[e("div",{className:"text-sm font-bold",children:`${(A=a.userable)==null?void 0:A.first_name} ${(T=a.userable)==null?void 0:T.last_name}`}),e("div",{className:"text-xs text-gray-500",children:(D=a.userable)==null?void 0:D.email})]})]},(P=a.userable)==null?void 0:P.id)}),m=(V=n.find(t=>t.value===a.moduleable_type))==null?void 0:V.labelFelid,[l,v]=c.useState({value:(q=a.moduleable)==null?void 0:q.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:a.moduleable[m]})})},(j=a.moduleable)==null?void 0:j.id)}),L=t=>(n.find(O=>O.value===p)??{value:"App\\Models\\Account",label:"Account",api:I}).api.call(null,t);return e(C,{children:o("div",{className:"p-6 border rounded-md",children:[o("div",{className:"flex items-center space-x-4 mb-5",children:[e("label",{className:"font-semibold",children:"Lead | Contact:"}),e(y,{id:"userable_type",name:"userable_type",defaultValue:b.find(t=>t.value==a.userable_type),onChange:({value:t})=>{u(t),r("userable_type",t),s(null)},className:"flex-1",options:b}),e(F,{isMulti:!1,id:"userable_id",placeholder:"Type at least 2 characters to search...",name:"userable_id",value:i,menuPortalTarget:document.body,menuPlacement:"top",loadOptions:h==="App\\Models\\Lead"?B:W,onChange:({value:t,label:_})=>{s({value:t,label:_}),r("userable_id",t)},className:"flex-1",required:!0},h)]}),o("div",{className:"flex items-center space-x-4",children:[e("label",{className:"font-semibold",children:"Select Module :"}),e(y,{id:"moduleable_type",name:"moduleable_type",menuPortalTarget:document.body,menuPlacement:"top",defaultValue:n.find(t=>t.value==a.moduleable_type),onChange:({value:t})=>{d(t),r("moduleable_type",t),v(null)},className:"flex-1",options:n}),e(F,{isMulti:!1,id:"moduleable_id",menuPortalTarget:document.body,menuPlacement:"top",placeholder:"Type at least 2 characters to search...",name:"moduleable_id",value:l,loadOptions:t=>L(t),onChange:({value:t,label:_})=>{v({value:t,label:_}),r("moduleable_id",t)},className:"flex-1",required:!0},p)]})]})})},ie=()=>o("div",{className:"mt-8 px-4",children:[e(de,{},"leadInfo"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ne,{},"Reminder"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(oe,{},"type"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"})]}),_e=()=>{const f=k(d=>d.taskForm),[a,r]=c.useState(!0),n=R().id,h=new N,u=g();c.useEffect(()=>{u(E("Task Edit"))});const p=async()=>{const d=await h.fetchSingleTask(n);if(d.status!=200)return;const i=d.data.data.task;u(x(i))};return c.useEffect(()=>{p().then(()=>{r(!1)})},[n]),c.useEffect(()=>{u(x({api:"updateSingleTask",redirectTo:"/task/edit/:id",action:"edit"}))},[]),a?e(Y,{}):o("div",{className:"px-4",children:[e(re,{formState:f,resetForm:Q}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(ie,{})})})]})};export{_e as default};
