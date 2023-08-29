import{u as f,a as v,b as e,F as A,$ as M,r as d,j as c,s as w}from"./main-8dcc6ef7.js";import{a as k,A as g}from"./react-select-async.esm-36b0e078.js";import{s as F,G as D,d as P,c as O,b as C,o as q,f as I,e as R,t as L,m as Y,l as V,q as j,k as Q,i as E,p as B,j as U,v as W}from"./CommonFunctions-94d8ff2f.js";import{S as b}from"./react-select.esm-22c93d6f.js";import{F as _}from"./index-03834abc.js";import{A as $}from"./ActionButtonsComponent-231c005e.js";/* empty css                  */import"./Select-aecb2a80.esm-55e31ab5.js";import"./sweetalert2.all-31dac5d6.js";const G=()=>{const i=f();new k;const r=v(a=>a.taskForm),s=(a,u)=>{i(M({[a]:u}))},h={"Task Information":{"Task Owner":e(g,{isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:F,onChange:({value:a})=>{s("owner_id",a)},className:"flex-1",required:!0}),Subject:e("input",{id:"subject",name:"subject",className:"form-input flex-1 ",onChange:a=>s(a.target.name,a.target.value),required:!0}),"Due Date":e(_,{name:"due_date",options:{dateFormat:"d-m-Y"},className:"form-input flex-1",placeholder:"MM DD YYYY",onChange:(a,u)=>s("due_date",u)}),Status:e(b,{options:[{value:"none",label:"-None-"},{value:"0_cold_task",label:"0.0 Cold task / unqualified (CLU)"},{value:"1_cold_task",label:"1.0 Cold task qualified (CLQ)"},{value:"2_first_contract",label:"2.0 First contact made (FCM)"},{value:"3_warm_task",label:"3.0 warm task qualified (WLQ)"},{value:"4_hot_task",label:"4.0 Hot task (HLQ)"},{value:"close_task",label:"Close Task / Lost Task"}],name:"status",id:"status",onChange:({value:a})=>{s("status",a)},className:"flex-1"}),Priority:e(b,{options:[{value:"none",label:"-None-"},{value:"account_contact",label:"Account or Contact exist already"},{value:"wrong_branch",label:"Wrong Branch"},{value:"wrong_department",label:"Wrong Department"},{value:"does_not_exist",label:"Does Not Exist Anymore"},{value:"bankruptcy",label:"Bankruptcy"},{value:"other",label:"Other"}],name:"priority",id:"priority",onChange:({value:a})=>{s("priority",a)},className:"flex-1"}),Repeat:e("input",{id:"repeat",type:"checkbox",name:"repeat",disabled:!0,className:"form-checkbox",onChange:a=>s(a.target.name,a.target.checked)})},"Description Information":{Description:e("textarea",{id:"description",rows:6,name:"description",className:"form-textarea flex-1",placeholder:"",defaultValue:r.description,onChange:a=>s(a.target.name,a.target.value)})}};return e(A,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(D,{fields:h})})})},H=()=>{const i=f();new k,v(t=>t.taskForm);const[r,s]=d.useState(!1),[m,x]=d.useState(new Date),[h,a]=d.useState(new Date),u=[{value:"email",label:"Email"},{value:"popup",label:"PopUp"},{value:"both",label:"Both"}],p=(t,o)=>{t==="reminder"&&s(o),i(M({[t]:o}))};return e(A,{children:c("div",{className:"p-6 border rounded-md",children:[c("div",{className:"flex items-center space-x-4",children:[e("label",{className:"text-lg font-semibold",children:"Reminder:"}),e("input",{id:"reminder",type:"checkbox",name:"reminder",className:"form-checkbox h-5 w-5 text-blue-600",onChange:t=>p(t.target.name,t.target.checked)})]}),r&&c("div",{className:"my-4 flex items-center space-x-4",children:[e("label",{children:"On:"}),e(_,{className:"p-2 border rounded-md form-input flex-1","data-enable-time":!1,placeholder:"MM DD YYYY",value:m,onChange:(t,o)=>p("reminder_on_date",o),options:{dateFormat:"d-m-Y"}}),e("label",{children:"At:"}),e(_,{className:"p-2 border rounded-md form-input flex-1","data-enable-time":!0,"data-no-calendar":!0,value:h,onChange:t=>{a(t[0]),p("reminder_on_time",t[0])}}),e("label",{children:"Notify Type:"}),e(b,{id:"reminder_type",name:"reminder_type",onChange:({value:t})=>{p("reminder_type",t)},className:"flex-1",options:u})]})]})})},z=()=>{const i=f();new k;const[r,s]=d.useState("App\\Models\\Contact"),[m,x]=d.useState("App\\Models\\Account"),[h,a]=d.useState(null),[u,p]=d.useState(null),t=v(l=>l.taskForm),o=(l,n)=>{i(M({[l]:n}))},N=[{value:"App\\Models\\Lead",label:"Lead"},{value:"App\\Models\\Contact",label:"Contact"}],y=[{value:"App\\Models\\Account",label:"Account",api:C},{value:"App\\Models\\Vendor",label:"Vendor",api:q},{value:"App\\Models\\Quote",label:"Quote",api:I},{value:"App\\Models\\Rfq",label:"Rfq",api:R},{value:"App\\Models\\Excess",label:"Excess",api:L},{value:"App\\Models\\Availability",label:"Availability",api:Y},{value:"App\\Models\\Product",label:"Product",api:V},{value:"App\\Models\\Manufacture",label:"Manufacture",api:j},{value:"App\\Models\\Deal",label:"Deals",api:Q},{value:"App\\Models\\SalesOrder",label:"Sales Order",api:E},{value:"App\\Models\\PurchaseOrder",label:"Purchase Order",api:B},{value:"App\\Models\\Invoice",label:"Invoice",api:U},{value:"App\\Models\\VendorRfq",label:"Vendor Rfq",api:W}],S=l=>{const n=y.find(T=>T.value===m)??{value:"App\\Models\\Account",label:"Account",api:C};return console.log("===================================="),console.log(n.api),console.log("===================================="),n.api.call(null,l)};return e(A,{children:c("div",{className:"p-6 border rounded-md",children:[c("div",{className:"flex items-center space-x-4 mb-5",children:[e("label",{className:"font-semibold",children:"Lead | Contact:"}),e(b,{id:"userable_type",name:"userable_type",defaultValue:N.find(l=>l.value==t.userable_type),onChange:({value:l})=>{s(l),o("userable_type",l),a(null)},className:"flex-1",options:N}),e(g,{isMulti:!1,id:"userable_id",placeholder:"Type at least 2 characters to search...",name:"userable_id",value:h,menuPortalTarget:document.body,menuPlacement:"top",loadOptions:r==="App\\Models\\Lead"?P:O,onChange:({value:l,label:n})=>{a({value:l,label:n}),o("userable_id",l)},className:"flex-1",required:!0},r)]}),c("div",{className:"flex items-center space-x-4",children:[e("label",{className:"font-semibold",children:"Select Module :"}),e(b,{id:"moduleable_type",name:"moduleable_type",menuPortalTarget:document.body,menuPlacement:"top",defaultValue:y.find(l=>l.value==t.moduleable_type),onChange:({value:l})=>{x(l),o("moduleable_type",l),p(null)},className:"flex-1",options:y}),e(g,{isMulti:!1,id:"moduleable_id",menuPortalTarget:document.body,menuPlacement:"top",placeholder:"Type at least 2 characters to search...",name:"moduleable_id",value:u,loadOptions:l=>S(l),onChange:({value:l,label:n})=>{p({value:l,label:n}),o("moduleable_id",l)},className:"flex-1",required:!0},m)]})]})})},J=()=>c("div",{className:"mt-8 px-4",children:[e(G,{},"leadInfo"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(H,{},"Reminder"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(z,{},"type"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"})]}),re=()=>{const i=v(s=>s.taskForm),r=f();return d.useEffect(()=>{r(w("Task Add"))}),c("div",{className:"px-4",children:[e($,{formState:i}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(J,{})})})]})};export{re as default};
