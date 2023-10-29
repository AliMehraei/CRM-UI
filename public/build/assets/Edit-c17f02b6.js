import{u as A,e as M,a as T,b as e,m as Q,j as r,f as U,F,a$ as _,r as o,x as Y,w as W,n as P,Z as $,z as H,y as G,aI as z,W as J,V as Z,aC as K,U as X,B as ee,$ as ae,E as le,b0 as te,h as I,c as se,s as de,b1 as V,d as j}from"./main-14f615f5.js";import{A as q}from"./react-select-async.esm-fa6aa9d3.js";import{G as re,A as ne}from"./GenerateFields-622759ee.js";import{S as k}from"./react-select.esm-f82d134e.js";import{F as E}from"./index-82fb8980.js";import{A as oe}from"./AttachmentSection-b44113f0.js";/* empty css                  */import"./Select-aecb2a80.esm-a628f797.js";const ce=()=>{var y,i,v,c,m;const u=A();new M;const a=T(s=>s.taskForm),n=(s,g)=>{u(_({[s]:g}))},h=[{value:"-None-",label:"-None-"},{value:"Account or Contact exist already",label:"Account or Contact exist already"},{value:"Wrong Branch",label:"Wrong Branch"},{value:"Wrong Department",label:"Wrong Department"},{value:"Does Not Exist Anymore",label:"Does Not Exist Anymore"},{value:"Bankruptcy",label:"Bankruptcy"},{value:"Hoch",label:"Hoch"},{value:"Other",label:"Other"}],p=[{value:"-None-",label:"-None-"},{value:"Abgeschlossen",label:"Abgeschlossen"},{value:"0.0 Cold task / unqualified (CLU)",label:"0.0 Cold task / unqualified (CLU)"},{value:"1.0 Cold task qualified (CLQ)",label:"1.0 Cold task qualified (CLQ)"},{value:"2.0 First contact made (FCM)",label:"2.0 First contact made (FCM)"},{value:"3.0 warm task qualified (WLQ)",label:"3.0 warm task qualified (WLQ)"},{value:"4.0 Hot task (HLQ)",label:"4.0 Hot task (HLQ)"},{value:"Close Task / Lost Task",label:"Close Task / Lost Task"}],f={"Task Information":{"Task Owner":e(q,{defaultOptions:!0,isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:Q,onChange:({value:s})=>{n("owner_id",s)},className:"flex-1",required:!0,defaultValue:{value:(y=a.owner)==null?void 0:y.id,label:r("div",{className:"flex items-center",children:[a.owner?e("img",{src:U(a.owner.avatar),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,r("div",{children:[e("div",{className:"text-sm font-bold",children:((i=a.owner)==null?void 0:i.first_name)+" "+((v=a.owner)==null?void 0:v.last_name)}),e("div",{className:"text-xs text-gray-500",children:(c=a.owner)==null?void 0:c.email})]})]},(m=a.owner)==null?void 0:m.id)}}),Subject:e("input",{id:"subject",name:"subject",className:"form-input flex-1 ",onChange:s=>n(s.target.name,s.target.value),required:!0,defaultValue:a.subject}),"Due Date":e(E,{name:"due_date",className:"form-input flex-1",defaultValue:a.due_date,placeholder:"YYYY-MM-DD",options:{dateFormat:"Y-m-d",defaultDate:a.due_date?new Date(a.due_date):null},onChange:(s,g)=>n("due_date",g)}),Status:e(k,{options:p,name:"status",id:"status",onChange:({value:s})=>{n("status",s)},className:"flex-1",defaultValue:p.find(s=>s.value==a.status)}),Priority:e(k,{options:h,name:"priority",id:"priority",onChange:({value:s})=>{n("priority",s)},defaultValue:h.find(s=>s.value==a.priority),className:"flex-1"})},"Description Information":{Description:e("textarea",{id:"description",rows:6,name:"description",className:"form-textarea flex-1",placeholder:"",defaultValue:a.description,onChange:s=>n(s.target.name,s.target.value)})}};return e(F,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(re,{fields:f})})})},ie=()=>{const u=A();new M;const a=T(l=>l.taskForm),[n,h]=o.useState(a.reminder),[p,f]=o.useState(a.reminder_on_date),[y,i]=o.useState(a.reminder_on_time),[v,c]=o.useState(a.days_before_due),[m,s]=o.useState(a.repeat_options),g={Monday:!1,Tuesday:!1,Wednesday:!1,Thursday:!1,Friday:!1,Saturday:!1,Sunday:!1},[S,N]=o.useState(g);o.useEffect(()=>{if(a.selected_days)try{const l=JSON.parse(a.selected_days),d=Object.keys(l).filter(b=>l[b]);N(b=>({...b,...d.reduce((L,B)=>(L[B]=!0,L),{})}))}catch(l){console.error("Error parsing selected_days:",l)}},[a.selected_days]);const C=[{value:"email",label:"Email"},{value:"popup",label:"PopUp"},{value:"both",label:"Both"}],w=[{value:"none",label:"None"},{value:"daily",label:"Daily"},{value:"weekly",label:"Weekly"},a.due_date?{value:"specific",label:"Specific days before due date"}:null].filter(Boolean),t=(l,d)=>{l==="reminder"&&h(d),u(_({[l]:d}))},x=l=>{N(d=>{const b={...d,[l]:!d[l]};return u(_({selected_days:b})),b})},O=()=>{N(l=>{const d={};for(const b in l)d[b]=!0;return u(_({selected_days:d})),d})},R=()=>{N(l=>{const d={};for(const b in l)d[b]=!1;return u(_({selected_days:d})),d})},D=a.due_date?Math.floor((new Date(a.due_date)-new Date)/(1e3*60*60*24)):0;return r("div",{className:"p-6 border rounded-md shadow-sm bg-white",children:[e("h2",{className:"text-xl font-semibold mb-4",children:"Reminder Settings"}),r("div",{className:"flex items-center space-x-4 mb-6",children:[e("label",{className:"text-lg",children:"Enable Reminder:"}),e("input",{id:"reminder",type:"checkbox",name:"reminder",className:"form-checkbox h-5 w-5 text-blue-600",onChange:l=>t(l.target.name,l.target.checked),defaultChecked:a.reminder})]}),n&&r("div",{children:[r("div",{className:"flex items-center space-x-4 my-4",children:[e("label",{children:"On:"}),e(E,{className:"p-2 border rounded-md form-input flex-1","data-enable-time":!1,placeholder:"YYYY-MM-DD",value:p,onChange:(l,d)=>t("reminder_on_date",d),options:{dateFormat:"Y-m-d "}}),e("label",{children:"At:"}),e(E,{className:"p-2 border rounded-md form-input flex-1","data-enable-time":!0,"data-no-calendar":!0,value:y,onChange:l=>{i(l[0]),t("reminder_on_time",l[0])}}),e("label",{children:"Notify Type:"}),e(k,{id:"reminder_type",name:"reminder_type",onChange:({value:l})=>{t("reminder_type",l)},className:"flex-1",options:C,defaultValue:C.find(l=>l.value===a.reminder_type)})]}),r("div",{className:"flex items-center space-x-4 mb-4",children:[e("label",{className:"w-24",children:"Repeat:"}),e(k,{value:w.find(l=>l.value===m),options:w,className:"flex-1",name:"repeat_options",onChange:({value:l})=>{t("repeat_options",l),s(l)}})]}),m==="specific"&&a.due_date&&e(F,{children:r("div",{className:"flex items-center space-x-4 mb-4",children:[e("label",{className:"w-24",children:"Days before due:"}),e("input",{type:"number",min:"1",max:D,className:"p-2 border rounded-md form-input flex-1",value:v,onChange:l=>{const d=l.target.value;d>=1&&d<=D&&(c(d),t("days_before_due",d))}}),a.due_date&&r("button",{type:"button",className:"text-blue-500",onClick:()=>{c(D.toString()),t("days_before_due",D.toString())},children:["Max: ",D]})]})}),m==="weekly"&&r("div",{className:"mb-4",children:[e("label",{className:"block mb-2 w-24",children:"Select Days:"}),r("div",{className:"flex space-x-4",children:[r("div",{children:[e("button",{type:"button",onClick:O,className:"bg-blue-500 text-white px-3 py-1 rounded-md mr-2",children:"Check All"}),e("button",{type:"button",onClick:R,className:"bg-red-500 text-white px-3 py-1 rounded-md",children:"Uncheck All"})]}),Object.keys(S).map(l=>r("div",{className:"flex items-center space-x-2",children:[e("input",{type:"checkbox",id:l,checked:S[l],onChange:()=>x(l),className:"form-checkbox h-5 w-5 text-blue-600"}),e("label",{htmlFor:l,children:l})]},l))]})]})]})]})},ue=()=>{var C,w;const u=A();new M;const a=T(t=>t.taskForm),n=(t,x)=>{u(_({[t]:x}))},h=[{value:"App\\Models\\Lead",label:"Lead"},{value:"App\\Models\\Contact",label:"Contact"}],p=[{value:"App\\Models\\Account",label:"Account",api:P,labelFelid:"account_name"},{value:"App\\Models\\Vendor",label:"Vendor",api:$,labelFelid:"vendor_name"},{value:"App\\Models\\Quote",label:"Quote",api:H,labelFelid:"subject"},{value:"App\\Models\\Rfq",label:"Rfq",api:G,labelFelid:"rfq_name"},{value:"App\\Models\\Excess",label:"Excess",api:z,labelFelid:"excess_name"},{value:"App\\Models\\Availability",label:"Availability",api:J,labelFelid:"availability_name"},{value:"App\\Models\\Product",label:"Product",api:Z,labelFelid:"product_name"},{value:"App\\Models\\Manufacturer",label:"Manufacturer",api:K,labelFelid:"name"},{value:"App\\Models\\Deal",label:"Deals",api:X,labelFelid:"deal_name"},{value:"App\\Models\\SalesOrder",label:"Sales Order",api:ee,labelFelid:"subject"},{value:"App\\Models\\PurchaseOrder",label:"Purchase Order",api:ae,labelFelid:"subject"},{value:"App\\Models\\Invoice",label:"Invoice",api:le,labelFelid:"subject"},{value:"App\\Models\\VendorRfq",label:"Vendor Rfq",api:te,labelFelid:"vendor_rfq_name"}],[f,y]=o.useState(a.userable_type),[i,v]=o.useState(a.moduleable_type),[c,m]=o.useState({value:a.userable?a.userable.id:null,label:e("div",{className:"flex items-center",children:a.userable?r(F,{children:[e("img",{src:a.userable.image??"/assets/images/user-profile.jpeg",alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),r("div",{children:[e("div",{className:"text-sm font-bold",children:`${a.userable.first_name} ${a.userable.last_name}`}),e("div",{className:"text-xs text-gray-500",children:a.userable.email})]})]}):e("div",{className:"text-sm font-bold"})},a.userable?a.userable.id:"default-key")}),s=((C=p.find(t=>t.value===a.moduleable_type))==null?void 0:C.labelFelid)||null,[g,S]=o.useState({value:a.moduleable?a.moduleable.id:null,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:a.moduleable?a.moduleable[s]:null})})},(w=a.moduleable)==null?void 0:w.id)}),N=t=>(p.find(O=>O.value===i)??{value:null,label:null,api:P}).api.call(null,t);return e(F,{children:r("div",{className:"p-6 border rounded-md",children:[r("div",{className:"flex items-center space-x-4 mb-5",children:[e("label",{className:"font-semibold",children:"Lead | Contact:"}),e(k,{id:"userable_type",name:"userable_type",defaultValue:h.find(t=>t.value==a.userable_type),onChange:({value:t})=>{y(t),n("userable_type",t),m(null)},className:"flex-1",options:h}),e(q,{defaultOptions:!0,isMulti:!1,id:"userable_id",placeholder:"Type at least 2 characters to search...",name:"userable_id",value:c,menuPortalTarget:document.body,menuPlacement:"top",loadOptions:f==="App\\Models\\Lead"?Y:W,onChange:({value:t,label:x})=>{m({value:t,label:x}),n("userable_id",t)},className:"flex-1",required:!0},f)]}),r("div",{className:"flex items-center space-x-4",children:[e("label",{className:"font-semibold",children:"Select Module :"}),e(k,{id:"moduleable_type",name:"moduleable_type",menuPortalTarget:document.body,menuPlacement:"top",defaultValue:p.find(t=>t.value==a.moduleable_type),onChange:({value:t})=>{v(t),n("moduleable_type",t),S(null)},className:"flex-1",options:p}),e(q,{defaultOptions:!0,isMulti:!1,id:"moduleable_id",menuPortalTarget:document.body,menuPlacement:"top",placeholder:"Type at least 2 characters to search...",name:"moduleable_id",value:g,loadOptions:t=>N(t),onChange:({value:t,label:x})=>{S({value:t,label:x}),n("moduleable_id",t)},className:"flex-1",required:!0},i)]})]})})},me=()=>{const a=I().id;return r("div",{className:"mt-8 px-4",children:[e(ce,{},"leadInfo"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ie,{},"Reminder"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ue,{},"type"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(oe,{modelId:a,modelName:"task"})]})},ge=()=>{const{hasPermission:u}=se(),a=T(c=>c.taskForm),[n,h]=o.useState(!0),f=I().id,y=new M,i=A();o.useEffect(()=>{i(de("Task Edit"))}),o.useEffect(()=>{i(V())},[]);const v=async()=>{const c=await y.fetchSingleTask(f);if(c.status!=200)return;const m=c.data.data.task;i(_(m))};return o.useEffect(()=>{v().then(()=>{h(!1)})},[f]),o.useEffect(()=>{i(_({api:"updateSingleTask",redirectTo:"/task/edit/:id",action:"edit"}))},[]),n?e(j,{}):!u("update-task")||n?e(j,{}):r("div",{className:"px-4",children:[e(ne,{formState:a,resetForm:V}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(me,{})})})]})};export{ge as default};
