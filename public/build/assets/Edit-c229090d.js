import{u as D,a as A,d as M,j as e,l as L,m as j,b as d,f as B,F,b4 as x,r as o,x as Q,w as Y,n as q,a0 as U,z as W,y as H,aO as $,Y as G,X as z,aI as X,V as J,B as K,a1 as Z,E as ee,b5 as ae,h as I,c as le,s as te,b6 as E,e as V}from"./main-360609a7.js";import{G as se,A as de}from"./GenerateFields-89af4685.js";import{S as k}from"./react-select.esm-26c512a6.js";import{F as P}from"./index-85cd636f.js";import{A as ne}from"./AttachmentSection-cb3f2c1d.js";/* empty css                  */import"./index-79920e12.js";const re=()=>{var f,c,y,i,m;const u=D();new A;const a=M(s=>s.taskForm),r=(s,_)=>{u(x({[s]:_}))},b=[{value:"-None-",label:"-None-"},{value:"Account or Contact exist already",label:"Account or Contact exist already"},{value:"Wrong Branch",label:"Wrong Branch"},{value:"Wrong Department",label:"Wrong Department"},{value:"Does Not Exist Anymore",label:"Does Not Exist Anymore"},{value:"Bankruptcy",label:"Bankruptcy"},{value:"Hoch",label:"Hoch"},{value:"Other",label:"Other"}],p=[{value:"-None-",label:"-None-"},{value:"Abgeschlossen",label:"Abgeschlossen"},{value:"0.0 Cold task / unqualified (CLU)",label:"0.0 Cold task / unqualified (CLU)"},{value:"1.0 Cold task qualified (CLQ)",label:"1.0 Cold task qualified (CLQ)"},{value:"2.0 First contact made (FCM)",label:"2.0 First contact made (FCM)"},{value:"3.0 warm task qualified (WLQ)",label:"3.0 warm task qualified (WLQ)"},{value:"4.0 Hot task (HLQ)",label:"4.0 Hot task (HLQ)"},{value:"Close Task / Lost Task",label:"Close Task / Lost Task"}],h={"Task Information":{"Task Owner":e(L,{defaultOptions:!0,isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:j,onChange:({value:s})=>{r("owner_id",s)},className:"flex-1",defaultValue:{value:(f=a.owner)==null?void 0:f.id,label:d("div",{className:"flex items-center",children:[a.owner?e("img",{src:B(a.owner.avatar_data),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,d("div",{children:[e("div",{className:"text-sm font-bold",children:((c=a.owner)==null?void 0:c.first_name)+" "+((y=a.owner)==null?void 0:y.last_name)}),e("div",{className:"text-xs text-gray-500",children:(i=a.owner)==null?void 0:i.email})]})]},(m=a.owner)==null?void 0:m.id)}}),Subject:e("input",{id:"subject",name:"subject",className:"form-input flex-1 ",onChange:s=>r(s.target.name,s.target.value),required:!0,defaultValue:a.subject}),"Due Date":e(P,{name:"due_date",className:"form-input flex-1",defaultValue:a.due_date,placeholder:"YYYY-MM-DD",options:{dateFormat:"Y-m-d",defaultDate:a.due_date?new Date(a.due_date):null},onChange:(s,_)=>r("due_date",_)}),Status:e(k,{options:p,name:"status",id:"status",onChange:({value:s})=>{r("status",s)},className:"flex-1",defaultValue:p.find(s=>s.value==a.status)}),Priority:e(k,{options:b,name:"priority",id:"priority",onChange:({value:s})=>{r("priority",s)},defaultValue:b.find(s=>s.value==a.priority),className:"flex-1"})},"Description Information":{Description:e("textarea",{id:"description",rows:6,name:"description",className:"form-textarea flex-1",placeholder:"",defaultValue:a.description,onChange:s=>r(s.target.name,s.target.value)})}};return e(F,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(se,{fields:h})})})},oe=()=>{const u=D();new A;const a=M(l=>l.taskForm),[r,b]=o.useState(a.reminder),[p,h]=o.useState(a.reminder_on_date),[f,c]=o.useState(a.reminder_on_time),[y,i]=o.useState(a.days_before_due),[m,s]=o.useState(a.repeat_options),_={Monday:!1,Tuesday:!1,Wednesday:!1,Thursday:!1,Friday:!1,Saturday:!1,Sunday:!1},[N,g]=o.useState(_);o.useEffect(()=>{typeof a.selected_days=="object"&&g(l=>({...l,...a.selected_days}))},[a.selected_days]);const S=[{value:"email",label:"Email"},{value:"popup",label:"PopUp"},{value:"both",label:"Both"}],C=[{value:"none",label:"None"},{value:"daily",label:"Daily"},{value:"weekly",label:"Weekly"},a.due_date?{value:"specific",label:"Specific days before due date"}:null].filter(Boolean),t=(l,n)=>{l==="reminder"&&b(n),u(x({[l]:n}))},v=l=>{const n={...N,[l]:!N[l]};g(n),u(x({selected_days:n}))},T=()=>{g(l=>{const n={};for(const O in l)n[O]=!0;return u(x({selected_days:n})),n})},R=()=>{g(l=>{const n={};for(const O in l)n[O]=!1;return u(x({selected_days:n})),n})},w=a.due_date?Math.floor((new Date(a.due_date)-new Date)/(1e3*60*60*24)):0;return d("div",{className:"p-6 border rounded-md shadow-sm bg-white",children:[e("h2",{className:"text-xl font-semibold mb-4",children:"Reminder Settings"}),d("div",{className:"flex items-center space-x-4 mb-6",children:[e("label",{className:"text-lg",children:"Enable Reminder:"}),e("input",{id:"reminder",type:"checkbox",name:"reminder",className:"form-checkbox h-5 w-5 text-blue-600",onChange:l=>t(l.target.name,l.target.checked),defaultChecked:a.reminder})]}),r&&d("div",{children:[d("div",{className:"flex items-center space-x-4 my-2",children:[e("label",{children:"Next Reminder At:"})," ",e("span",{children:a.next_reminder_at})]}),d("div",{className:"flex items-center space-x-4 my-4",children:[e("label",{children:"On:"}),e(P,{className:"p-2 border rounded-md form-input flex-1","data-enable-time":!1,placeholder:"YYYY-MM-DD",value:p,onChange:(l,n)=>t("reminder_on_date",n),options:{dateFormat:"Y-m-d "}}),e("label",{children:"At:"}),e(P,{className:"p-2 border rounded-md form-input flex-1","data-enable-time":!0,"data-no-calendar":!0,value:f,onChange:l=>{c(l[0]),t("reminder_on_time",l[0])}}),e("label",{children:"Notify Type:"}),e(k,{id:"reminder_type",name:"reminder_type",onChange:({value:l})=>{t("reminder_type",l)},className:"flex-1",options:S,defaultValue:S.find(l=>l.value===a.reminder_type)})]}),d("div",{className:"flex items-center space-x-4 mb-4",children:[e("label",{className:"w-24",children:"Repeat:"}),e(k,{value:C.find(l=>l.value===m),options:C,className:"flex-1",name:"repeat_options",onChange:({value:l})=>{t("repeat_options",l),s(l)}})]}),m==="specific"&&a.due_date&&e(F,{children:d("div",{className:"flex items-center space-x-4 mb-4",children:[e("label",{className:"w-24",children:"Days before due:"}),e("input",{type:"number",min:"1",max:w,className:"p-2 border rounded-md form-input flex-1",value:y,onChange:l=>{const n=l.target.value;n>=1&&n<=w&&(i(n),t("days_before_due",n))}}),a.due_date&&d("button",{type:"button",className:"text-blue-500",onClick:()=>{i(w.toString()),t("days_before_due",w.toString())},children:["Max: ",w]})]})}),m==="weekly"&&d("div",{className:"mb-4",children:[e("label",{className:"block mb-2 w-24",children:"Select Days:"}),d("div",{className:"flex space-x-4",children:[d("div",{children:[e("button",{type:"button",onClick:T,className:"bg-blue-500 text-white px-3 py-1 rounded-md mr-2",children:"Check All"}),e("button",{type:"button",onClick:R,className:"bg-red-500 text-white px-3 py-1 rounded-md",children:"Uncheck All"})]}),Object.keys(N).map(l=>d("div",{className:"flex items-center space-x-2",children:[e("input",{type:"checkbox",id:l,checked:N[l],onChange:()=>v(l),className:"form-checkbox h-5 w-5 text-blue-600"}),e("label",{htmlFor:l,children:l})]},l))]})]})]})]})},ie=()=>{var S,C;const u=D();new A;const a=M(t=>t.taskForm),r=(t,v)=>{u(x({[t]:v}))},b=[{value:"App\\Models\\Lead",label:"Lead"},{value:"App\\Models\\Contact",label:"Contact"}],p=[{value:"App\\Models\\Account",label:"Account",api:q,labelFelid:"account_name"},{value:"App\\Models\\Vendor",label:"Vendor",api:U,labelFelid:"vendor_name"},{value:"App\\Models\\Quote",label:"Quote",api:W,labelFelid:"subject"},{value:"App\\Models\\Rfq",label:"Rfq",api:H,labelFelid:"rfq_name"},{value:"App\\Models\\Excess",label:"Excess",api:$,labelFelid:"excess_name"},{value:"App\\Models\\Availability",label:"Availability",api:G,labelFelid:"availability_name"},{value:"App\\Models\\Product",label:"Product",api:z,labelFelid:"product_name"},{value:"App\\Models\\Manufacturer",label:"Manufacturer",api:X,labelFelid:"name"},{value:"App\\Models\\Deal",label:"Deals",api:J,labelFelid:"deal_name"},{value:"App\\Models\\SalesOrder",label:"Sales Order",api:K,labelFelid:"subject"},{value:"App\\Models\\PurchaseOrder",label:"Purchase Order",api:Z,labelFelid:"subject"},{value:"App\\Models\\Invoice",label:"Invoice",api:ee,labelFelid:"subject"},{value:"App\\Models\\VendorRfq",label:"Vendor Rfq",api:ae,labelFelid:"vendor_rfq_name"}],[h,f]=o.useState(a.userable_type),[c,y]=o.useState(a.moduleable_type),[i,m]=o.useState({value:a.userable?a.userable.id:null,label:e("div",{className:"flex items-center",children:a.userable?d(F,{children:[e("img",{src:a.userable.image??"/assets/images/user-profile.jpeg",alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),d("div",{children:[e("div",{className:"text-sm font-bold",children:`${a.userable.first_name} ${a.userable.last_name}`}),e("div",{className:"text-xs text-gray-500",children:a.userable.email})]})]}):e("div",{className:"text-sm font-bold"})},a.userable?a.userable.id:"default-key")}),s=((S=p.find(t=>t.value===a.moduleable_type))==null?void 0:S.labelFelid)||null,[_,N]=o.useState({value:a.moduleable?a.moduleable.id:null,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:a.moduleable?a.moduleable[s]:null})})},(C=a.moduleable)==null?void 0:C.id)}),g=t=>(p.find(T=>T.value===c)??{value:null,label:null,api:q}).api.call(null,t);return e(F,{children:d("div",{className:"p-6 border rounded-md",children:[d("div",{className:"flex items-center space-x-4 mb-5",children:[e("label",{className:"font-semibold",children:"Lead | Contact:"}),e(k,{id:"userable_type",name:"userable_type",defaultValue:b.find(t=>t.value==a.userable_type),onChange:({value:t})=>{f(t),r("userable_type",t),m(null)},className:"flex-1",options:b}),e(L,{defaultOptions:!0,isMulti:!1,id:"userable_id",placeholder:"Type at least 2 characters to search...",name:"userable_id",value:i,menuPortalTarget:document.body,menuPlacement:"top",loadOptions:h==="App\\Models\\Lead"?Q:Y,onChange:({value:t,label:v})=>{m({value:t,label:v}),r("userable_id",t)},className:"flex-1",required:!0},h)]}),d("div",{className:"flex items-center space-x-4",children:[e("label",{className:"font-semibold",children:"Select Module :"}),e(k,{id:"moduleable_type",name:"moduleable_type",menuPortalTarget:document.body,menuPlacement:"top",defaultValue:p.find(t=>t.value==a.moduleable_type),onChange:({value:t})=>{y(t),r("moduleable_type",t),N(null)},className:"flex-1",options:p}),e(L,{defaultOptions:!0,isMulti:!1,id:"moduleable_id",menuPortalTarget:document.body,menuPlacement:"top",placeholder:"Type at least 2 characters to search...",name:"moduleable_id",value:_,loadOptions:t=>g(t),onChange:({value:t,label:v})=>{N({value:t,label:v}),r("moduleable_id",t)},className:"flex-1",required:!0},c)]})]})})},ce=()=>{const a=I().id;return d("div",{className:"mt-8 px-4",children:[e(re,{},"leadInfo"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(oe,{},"Reminder"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ie,{},"type"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ne,{modelId:a,modelName:"task"})]})},ve=()=>{const{hasPermission:u}=le(),a=M(i=>i.taskForm),[r,b]=o.useState(!0),h=I().id,f=new A,c=D();o.useEffect(()=>{c(te("Task Edit"))}),o.useEffect(()=>{c(E())},[]);const y=async()=>{const i=await f.fetchSingleTask(h);if(i.status!=200)return;const m=i.data.data.task;c(x(m))};return o.useEffect(()=>{y().then(()=>{b(!1)})},[h]),o.useEffect(()=>{c(x({api:"updateSingleTask",redirectTo:"/task/edit/:id",action:"edit"}))},[]),r?e(V,{}):!u("update-task")||r?e(V,{}):d("div",{className:"px-4",children:[e(de,{formState:a,resetForm:E}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(ce,{})})})]})};export{ve as default};
