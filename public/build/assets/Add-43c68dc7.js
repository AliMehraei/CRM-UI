import{u as k,a as T,d as A,j as e,l as D,m as V,F,b2 as y,r as o,b as n,y as q,x as E,n as O,$ as j,B,z as L,aN as U,Y as Q,X as G,aH as W,W as $,E as z,a0 as H,G as X,b3 as Z,c as J,s as K,b4 as P,e as ee}from"./main-38fe5343.js";import{G as ae}from"./GenerateFields-93e4149c.js";import{S as x}from"./react-select.esm-c9ae4ddb.js";import{F as w}from"./index-09ca2f26.js";import{Z as le,_ as te}from"./SelectOptions-c7baecc3.js";import{A as se}from"./ActionButtonsComponent-85ee23fd.js";/* empty css                  */import"./index-ee82f402.js";const ne=()=>{const c=k();new T;const d=A(t=>t.taskForm),r=(t,h)=>{c(y({[t]:h}))},m={"Task Information":{"Task Owner":e(D,{defaultOptions:!0,isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:V,onChange:({value:t})=>{r("owner_id",t)},className:"flex-1"}),Subject:e("input",{id:"subject",name:"subject",className:"form-input flex-1 ",onChange:t=>r(t.target.name,t.target.value),required:!0}),"Due Date":e(w,{name:"due_date",options:{dateFormat:"Y-m-d "},className:"form-input flex-1",placeholder:"YYYY-MM-DD",onChange:(t,h)=>r("due_date",h)}),Status:e(x,{options:le,name:"status",id:"status",onChange:({value:t})=>{r("status",t)},className:"flex-1"}),Priority:e(x,{options:te,name:"priority",id:"priority",onChange:({value:t})=>{r("priority",t)},className:"flex-1"})},"Description Information":{Description:e("textarea",{id:"description",rows:6,name:"description",className:"form-textarea flex-1",placeholder:"",defaultValue:d.description,onChange:t=>r(t.target.name,t.target.value)})}};return e(F,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(ae,{fields:m})})})},re=()=>{const c=k();new T;const d=A(a=>a.taskForm),[r,m]=o.useState(!1),[t,h]=o.useState(new Date),[S,C]=o.useState(new Date),[_,v]=o.useState(""),[p,M]=o.useState(""),[b,N]=o.useState({Monday:!1,Tuesday:!1,Wednesday:!1,Thursday:!1,Friday:!1,Saturday:!1,Sunday:!1}),l=[{value:"email",label:"Email"},{value:"popup",label:"PopUp"},{value:"both",label:"Both"}],i=[{value:"none",label:"None"},{value:"daily",label:"Daily"},{value:"weekly",label:"Weekly"},d.due_date?{value:"specific",label:"Specific days before due date"}:null].filter(Boolean),u=(a,s)=>{a==="reminder"&&m(s),c(y({[a]:s}))},R=a=>{N(s=>{const f={...s,[a]:!s[a]};return c(y({selected_days:f})),f})},I=()=>{N(a=>{const s={};for(const f in a)s[f]=!0;return c(y({selected_days:s})),s})},Y=()=>{N(a=>{const s={};for(const f in a)s[f]=!1;return c(y({selected_days:s})),s})},g=d.due_date?Math.floor((new Date(d.due_date)-new Date)/(1e3*60*60*24)):0;return n("div",{className:"p-6 border rounded-md shadow-sm bg-white",children:[e("h2",{className:"text-xl font-semibold mb-4",children:"Reminder Settings"}),n("div",{className:"flex items-center space-x-4 mb-6",children:[e("label",{className:"text-lg",children:"Enable Reminder:"}),e("input",{id:"reminder",type:"checkbox",name:"reminder",className:"form-checkbox h-5 w-5 text-blue-600",onChange:a=>u(a.target.name,a.target.checked)})]}),r&&n("div",{children:[n("div",{className:"flex items-center space-x-4 my-4",children:[e("label",{children:"On:"}),e(w,{className:"p-2 border rounded-md form-input flex-1","data-enable-time":!1,placeholder:"YYYY-MM-DD",value:t,onChange:(a,s)=>u("reminder_on_date",s),options:{dateFormat:"Y-m-d "}}),e("label",{children:"At:"}),e(w,{className:"p-2 border rounded-md form-input flex-1","data-enable-time":!0,"data-no-calendar":!0,value:S,onChange:a=>{C(a[0]),u("reminder_on_time",a[0])}}),e("label",{children:"Notify Type:"}),e(x,{id:"reminder_type",name:"reminder_type",onChange:({value:a})=>{u("reminder_type",a)},className:"flex-1",options:l})]}),n("div",{className:"flex items-center space-x-4 mb-4",children:[e("label",{className:"w-24",children:"Repeat:"}),e(x,{value:i.find(a=>a.value===p),options:i,className:"flex-1",name:"repeat_options",onChange:({value:a})=>{u("repeat_options",a),M(a)}})]}),p==="specific"&&d.due_date&&e(F,{children:n("div",{className:"flex items-center space-x-4 mb-4",children:[e("label",{className:"w-24",children:"Days before due:"}),e("input",{type:"number",min:"1",max:g,className:"p-2 border rounded-md form-input flex-1",value:_,onChange:a=>{const s=a.target.value;s>=1&&s<=g&&(v(s),u("days_before_due",s))}}),d.due_date&&n("button",{type:"button",className:"text-blue-500",onClick:()=>{v(g.toString()),u("days_before_due",g.toString())},children:["Max: ",g]})]})}),p==="weekly"&&n("div",{className:"mb-4",children:[e("label",{className:"block mb-2 w-24",children:"Select Days:"}),n("div",{className:"flex space-x-4",children:[n("div",{children:[e("button",{type:"button",onClick:I,className:"bg-blue-500 text-white px-3 py-1 rounded-md mr-2",children:"Check All"}),e("button",{type:"button",onClick:Y,className:"bg-red-500 text-white px-3 py-1 rounded-md",children:"Uncheck All"})]}),Object.keys(b).map(a=>n("div",{className:"flex items-center space-x-2",children:[e("input",{type:"checkbox",id:a,checked:b[a],onChange:()=>R(a),className:"form-checkbox h-5 w-5 text-blue-600"}),e("label",{htmlFor:a,children:a})]},a))]})]})]})]})},de=()=>{const c=k();new T;const[d,r]=o.useState("App\\Models\\Contact"),[m,t]=o.useState("App\\Models\\Account"),[h,S]=o.useState(null),[C,_]=o.useState(null),v=A(l=>l.taskForm),p=(l,i)=>{c(y({[l]:i}))},M=[{value:null,label:"-None-"},{value:"App\\Models\\Lead",label:"Lead"},{value:"App\\Models\\Contact",label:"Contact"}],b=[{value:null,label:"-None-"},{value:"App\\Models\\Account",label:"Account",api:O},{value:"App\\Models\\Vendor",label:"Vendor",api:j},{value:"App\\Models\\Quote",label:"Quote",api:B},{value:"App\\Models\\Rfq",label:"Rfq",api:L},{value:"App\\Models\\Excess",label:"Excess",api:U},{value:"App\\Models\\Availability",label:"Availability",api:Q},{value:"App\\Models\\Product",label:"Product",api:G},{value:"App\\Models\\Manufacturer",label:"Manufacturer",api:W},{value:"App\\Models\\Deal",label:"Deals",api:$},{value:"App\\Models\\SalesOrder",label:"Sales Order",api:z},{value:"App\\Models\\PurchaseOrder",label:"Purchase Order",api:H},{value:"App\\Models\\Invoice",label:"Invoice",api:X},{value:"App\\Models\\VendorRfq",label:"Vendor Rfq",api:Z}],N=l=>(b.find(u=>u.value===m)??{value:null,label:null,api:O}).api.call(null,l);return e(F,{children:n("div",{className:"p-6 border rounded-md",children:[n("div",{className:"flex items-center space-x-4 mb-5",children:[e("label",{className:"font-semibold",children:"Lead | Contact:"}),e(x,{id:"userable_type",name:"userable_type",defaultValue:M.find(l=>l.value==v.userable_type),onChange:({value:l})=>{r(l),p("userable_type",l),S(null)},className:"flex-1",options:M}),e(D,{defaultOptions:!0,isMulti:!1,id:"userable_id",placeholder:"Type at least 2 characters to search...",name:"userable_id",value:h,menuPortalTarget:document.body,menuPlacement:"top",loadOptions:d==="App\\Models\\Lead"?q:E,onChange:({value:l,label:i})=>{S({value:l,label:i}),p("userable_id",l)},className:"flex-1",required:!0},d)]}),n("div",{className:"flex items-center space-x-4",children:[e("label",{className:"font-semibold",children:"Select Module :"}),e(x,{id:"moduleable_type",name:"moduleable_type",menuPortalTarget:document.body,menuPlacement:"top",defaultValue:b.find(l=>l.value==v.moduleable_type),onChange:({value:l})=>{t(l),p("moduleable_type",l),_(null)},className:"flex-1",options:b}),e(D,{defaultOptions:!0,isMulti:!1,id:"moduleable_id",menuPortalTarget:document.body,menuPlacement:"top",placeholder:"Type at least 2 characters to search...",name:"moduleable_id",value:C,loadOptions:l=>N(l),onChange:({value:l,label:i})=>{_({value:l,label:i}),p("moduleable_id",l)},className:"flex-1",required:!0},m)]})]})})},oe=()=>n("div",{className:"mt-8 px-4",children:[e(ne,{},"leadInfo"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(re,{},"Reminder"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(de,{},"type"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"})]}),ye=()=>{const{hasPermission:c}=J(),d=A(m=>m.taskForm),r=k();return o.useEffect(()=>{r(K("Task Add"))}),o.useEffect(()=>{r(P())},[]),c("create-task")?n("div",{className:"px-4",children:[e(se,{formState:d,resetForm:P}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(oe,{})})})]}):e(ee,{})};export{ye as default};
