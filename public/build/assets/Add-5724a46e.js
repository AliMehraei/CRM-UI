import{u as A,e as T,a as M,b as e,l as D,m as I,F,b3 as y,r as d,j as n,x as B,w as E,n as O,_ as Q,z as V,y as Y,aM as U,W,V as j,aG as H,U as G,B as $,$ as z,E as J,b4 as K,c as X,s as Z,b5 as P,d as ee}from"./main-a3f9880b.js";import{G as ae,A as le}from"./GenerateFields-48686241.js";import{S as x}from"./react-select.esm-90327a01.js";import{F as w}from"./index-515e3b5a.js";/* empty css                  */import"./index-ade49a0a.js";const te=()=>{const c=A();new T;const r=M(t=>t.taskForm),o=(t,b)=>{c(y({[t]:b}))},C={"Task Information":{"Task Owner":e(D,{defaultOptions:!0,isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:I,onChange:({value:t})=>{o("owner_id",t)},className:"flex-1",required:!0}),Subject:e("input",{id:"subject",name:"subject",className:"form-input flex-1 ",onChange:t=>o(t.target.name,t.target.value),required:!0}),"Due Date":e(w,{name:"due_date",options:{dateFormat:"Y-m-d "},className:"form-input flex-1",placeholder:"YYYY-MM-DD",onChange:(t,b)=>o("due_date",b)}),Status:e(x,{options:[{value:"-None-",label:"-None-"},{value:"Abgeschlossen",label:"Abgeschlossen"},{value:"0.0 Cold task / unqualified (CLU)",label:"0.0 Cold task / unqualified (CLU)"},{value:"1.0 Cold task qualified (CLQ)",label:"1.0 Cold task qualified (CLQ)"},{value:"2.0 First contact made (FCM)",label:"2.0 First contact made (FCM)"},{value:"3.0 warm task qualified (WLQ)",label:"3.0 warm task qualified (WLQ)"},{value:"4.0 Hot task (HLQ)",label:"4.0 Hot task (HLQ)"},{value:"Close Task / Lost Task",label:"Close Task / Lost Task"}],name:"status",id:"status",onChange:({value:t})=>{o("status",t)},className:"flex-1"}),Priority:e(x,{options:[{value:"-None-",label:"-None-"},{value:"Account or Contact exist already",label:"Account or Contact exist already"},{value:"Wrong Branch",label:"Wrong Branch"},{value:"Wrong Department",label:"Wrong Department"},{value:"Does Not Exist Anymore",label:"Does Not Exist Anymore"},{value:"Bankruptcy",label:"Bankruptcy"},{value:"Hoch",label:"Hoch"},{value:"Other",label:"Other"}],name:"priority",id:"priority",onChange:({value:t})=>{o("priority",t)},className:"flex-1"})},"Description Information":{Description:e("textarea",{id:"description",rows:6,name:"description",className:"form-textarea flex-1",placeholder:"",defaultValue:r.description,onChange:t=>o(t.target.name,t.target.value)})}};return e(F,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(ae,{fields:C})})})},se=()=>{const c=A();new T;const r=M(a=>a.taskForm),[o,p]=d.useState(!1),[k,C]=d.useState(new Date),[t,b]=d.useState(new Date),[S,v]=d.useState(""),[m,_]=d.useState(""),[h,N]=d.useState({Monday:!1,Tuesday:!1,Wednesday:!1,Thursday:!1,Friday:!1,Saturday:!1,Sunday:!1}),l=[{value:"email",label:"Email"},{value:"popup",label:"PopUp"},{value:"both",label:"Both"}],i=[{value:"none",label:"None"},{value:"daily",label:"Daily"},{value:"weekly",label:"Weekly"},r.due_date?{value:"specific",label:"Specific days before due date"}:null].filter(Boolean),u=(a,s)=>{a==="reminder"&&p(s),c(y({[a]:s}))},L=a=>{N(s=>{const f={...s,[a]:!s[a]};return c(y({selected_days:f})),f})},q=()=>{N(a=>{const s={};for(const f in a)s[f]=!0;return c(y({selected_days:s})),s})},R=()=>{N(a=>{const s={};for(const f in a)s[f]=!1;return c(y({selected_days:s})),s})},g=r.due_date?Math.floor((new Date(r.due_date)-new Date)/(1e3*60*60*24)):0;return n("div",{className:"p-6 border rounded-md shadow-sm bg-white",children:[e("h2",{className:"text-xl font-semibold mb-4",children:"Reminder Settings"}),n("div",{className:"flex items-center space-x-4 mb-6",children:[e("label",{className:"text-lg",children:"Enable Reminder:"}),e("input",{id:"reminder",type:"checkbox",name:"reminder",className:"form-checkbox h-5 w-5 text-blue-600",onChange:a=>u(a.target.name,a.target.checked)})]}),o&&n("div",{children:[n("div",{className:"flex items-center space-x-4 my-4",children:[e("label",{children:"On:"}),e(w,{className:"p-2 border rounded-md form-input flex-1","data-enable-time":!1,placeholder:"YYYY-MM-DD",value:k,onChange:(a,s)=>u("reminder_on_date",s),options:{dateFormat:"Y-m-d "}}),e("label",{children:"At:"}),e(w,{className:"p-2 border rounded-md form-input flex-1","data-enable-time":!0,"data-no-calendar":!0,value:t,onChange:a=>{b(a[0]),u("reminder_on_time",a[0])}}),e("label",{children:"Notify Type:"}),e(x,{id:"reminder_type",name:"reminder_type",onChange:({value:a})=>{u("reminder_type",a)},className:"flex-1",options:l})]}),n("div",{className:"flex items-center space-x-4 mb-4",children:[e("label",{className:"w-24",children:"Repeat:"}),e(x,{value:i.find(a=>a.value===m),options:i,className:"flex-1",name:"repeat_options",onChange:({value:a})=>{u("repeat_options",a),_(a)}})]}),m==="specific"&&r.due_date&&e(F,{children:n("div",{className:"flex items-center space-x-4 mb-4",children:[e("label",{className:"w-24",children:"Days before due:"}),e("input",{type:"number",min:"1",max:g,className:"p-2 border rounded-md form-input flex-1",value:S,onChange:a=>{const s=a.target.value;s>=1&&s<=g&&(v(s),u("days_before_due",s))}}),r.due_date&&n("button",{type:"button",className:"text-blue-500",onClick:()=>{v(g.toString()),u("days_before_due",g.toString())},children:["Max: ",g]})]})}),m==="weekly"&&n("div",{className:"mb-4",children:[e("label",{className:"block mb-2 w-24",children:"Select Days:"}),n("div",{className:"flex space-x-4",children:[n("div",{children:[e("button",{type:"button",onClick:q,className:"bg-blue-500 text-white px-3 py-1 rounded-md mr-2",children:"Check All"}),e("button",{type:"button",onClick:R,className:"bg-red-500 text-white px-3 py-1 rounded-md",children:"Uncheck All"})]}),Object.keys(h).map(a=>n("div",{className:"flex items-center space-x-2",children:[e("input",{type:"checkbox",id:a,checked:h[a],onChange:()=>L(a),className:"form-checkbox h-5 w-5 text-blue-600"}),e("label",{htmlFor:a,children:a})]},a))]})]})]})]})},ne=()=>{const c=A();new T;const[r,o]=d.useState("App\\Models\\Contact"),[p,k]=d.useState("App\\Models\\Account"),[C,t]=d.useState(null),[b,S]=d.useState(null),v=M(l=>l.taskForm),m=(l,i)=>{c(y({[l]:i}))},_=[{value:null,label:"-None-"},{value:"App\\Models\\Lead",label:"Lead"},{value:"App\\Models\\Contact",label:"Contact"}],h=[{value:null,label:"-None-"},{value:"App\\Models\\Account",label:"Account",api:O},{value:"App\\Models\\Vendor",label:"Vendor",api:Q},{value:"App\\Models\\Quote",label:"Quote",api:V},{value:"App\\Models\\Rfq",label:"Rfq",api:Y},{value:"App\\Models\\Excess",label:"Excess",api:U},{value:"App\\Models\\Availability",label:"Availability",api:W},{value:"App\\Models\\Product",label:"Product",api:j},{value:"App\\Models\\Manufacturer",label:"Manufacturer",api:H},{value:"App\\Models\\Deal",label:"Deals",api:G},{value:"App\\Models\\SalesOrder",label:"Sales Order",api:$},{value:"App\\Models\\PurchaseOrder",label:"Purchase Order",api:z},{value:"App\\Models\\Invoice",label:"Invoice",api:J},{value:"App\\Models\\VendorRfq",label:"Vendor Rfq",api:K}],N=l=>(h.find(u=>u.value===p)??{value:null,label:null,api:O}).api.call(null,l);return e(F,{children:n("div",{className:"p-6 border rounded-md",children:[n("div",{className:"flex items-center space-x-4 mb-5",children:[e("label",{className:"font-semibold",children:"Lead | Contact:"}),e(x,{id:"userable_type",name:"userable_type",defaultValue:_.find(l=>l.value==v.userable_type),onChange:({value:l})=>{o(l),m("userable_type",l),t(null)},className:"flex-1",options:_}),e(D,{defaultOptions:!0,isMulti:!1,id:"userable_id",placeholder:"Type at least 2 characters to search...",name:"userable_id",value:C,menuPortalTarget:document.body,menuPlacement:"top",loadOptions:r==="App\\Models\\Lead"?B:E,onChange:({value:l,label:i})=>{t({value:l,label:i}),m("userable_id",l)},className:"flex-1",required:!0},r)]}),n("div",{className:"flex items-center space-x-4",children:[e("label",{className:"font-semibold",children:"Select Module :"}),e(x,{id:"moduleable_type",name:"moduleable_type",menuPortalTarget:document.body,menuPlacement:"top",defaultValue:h.find(l=>l.value==v.moduleable_type),onChange:({value:l})=>{k(l),m("moduleable_type",l),S(null)},className:"flex-1",options:h}),e(D,{defaultOptions:!0,isMulti:!1,id:"moduleable_id",menuPortalTarget:document.body,menuPlacement:"top",placeholder:"Type at least 2 characters to search...",name:"moduleable_id",value:b,loadOptions:l=>N(l),onChange:({value:l,label:i})=>{S({value:l,label:i}),m("moduleable_id",l)},className:"flex-1",required:!0},p)]})]})})},oe=()=>n("div",{className:"mt-8 px-4",children:[e(te,{},"leadInfo"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(se,{},"Reminder"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ne,{},"type"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"})]}),pe=()=>{const{hasPermission:c}=X(),r=M(p=>p.taskForm),o=A();return d.useEffect(()=>{o(Z("Task Add"))}),d.useEffect(()=>{o(P())},[]),c("create-task")?n("div",{className:"px-4",children:[e(le,{formState:r,resetForm:P}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(oe,{})})})]}):e(ee,{})};export{pe as default};
