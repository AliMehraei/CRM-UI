import{c as $,u as R,r as t,h as T,d as B,s as k,Y as q,j as a,e as M,b as c,f as V,i as j,ba as W,a as G}from"./main-df5dc7ed.js";import{A as H}from"./ActionButtonsPreview-b8a965fd.js";import{I as w}from"./InformationSectionPreview-f66ace2c.js";import{M as Q}from"./MultipleLineSectionPreview-31bef909.js";import{G as U}from"./GenerateEmailLogList-056f10ce.js";import"./CommonIcons-4af903f4.js";import"./sortBy-4d9efad5.js";import"./_baseIsEqual-9290e441.js";const te=()=>{var m,p,f,v,h,g,y,A,_;const{hasPermission:d}=$(),b=R(),[o,x]=t.useState(!0),[C,D]=t.useState(""),[i,F]=t.useState({}),[n,S]=t.useState({}),r=T().id,N=new G,e=B(l=>l.callForm);t.useEffect(()=>{b(k("Call Preview"))});const O=()=>{window.print()},L=async()=>{const l=await N.fetchSingleCall(r);if(l.status!=200)return;const s=l.data.data.call;b(W(s))},P=[{value:"App\\Models\\Lead",label:"Lead"},{value:"App\\Models\\Contact",label:"Contact"}],E=[{value:"App\\Models\\Account",label:"Account",labelField:"account_name"},{value:"App\\Models\\Vendor",label:"Vendor",labelField:"vendor_name"},{value:"App\\Models\\Quote",label:"Quote",labelField:"subject"},{value:"App\\Models\\Rfq",label:"Rfq",labelField:"rfq_name"},{value:"App\\Models\\Excess",label:"Excess",labelField:"excess_name"},{value:"App\\Models\\Availability",label:"Availability",labelField:"availability_name"},{value:"App\\Models\\Product",label:"Product",labelField:"product_name"},{value:"App\\Models\\Manufacturer",label:"Manufacturer",labelField:"name"},{value:"App\\Models\\Deal",label:"Deals",labelField:"deal_name"},{value:"App\\Models\\SalesOrder",label:"Sales Order",labelField:"subject"},{value:"App\\Models\\PurchaseOrder",label:"Purchase Order",labelField:"subject"},{value:"App\\Models\\Invoice",label:"Invoice",labelField:"subject"},{value:"App\\Models\\VendorRfq",label:"Vendor Rfq",labelField:"vendor_rfq_name"}];t.useEffect(()=>{L().then(()=>{x(!1)})},[r]),t.useEffect(()=>{const l=E.find(s=>s.value===e.relatable_type);F(l),e.relatable&&D(e.relatable[l==null?void 0:l.labelField]),S(P.find(s=>s.value===e.callable_type))},[e.relatable_type]);const I=[{value:"-None-",label:"-None-"},{value:"Account or Contact exist already",label:"Account or Contact exist already"},{value:"Wrong Branch",label:"Wrong Branch"},{value:"Wrong Department",label:"Wrong Department"},{value:"Does Not Exist Anymore",label:"Does Not Exist Anymore"},{value:"Bankruptcy",label:"Bankruptcy"},{value:"Hoch",label:"Hoch"},{value:"Other",label:"Other"}],u={leftObjects:[{label:"Call Owner",value:`${(m=e.owner)==null?void 0:m.first_name} ${(p=e.owner)==null?void 0:p.last_name}`},{label:"Subject",value:`${e.subject}`},{label:"Due Date",value:e.due_date},{label:"Call To",value:(n==null?void 0:n.label)+`: ${((f=e.callable)==null?void 0:f.name)??((v=e.callable)==null?void 0:v.first_name)+" "+((h=e.callable)==null?void 0:h.last_name)} `},{label:"Related To",value:(i==null?void 0:i.label)+": "+C},{label:"Call Type",value:`${e.type}`}],rightObjects:[{label:"Priority",value:q(e.priority,I)},{label:"Repeat",value:e.repeat},{label:"Created By",value:`${(g=e.creator)==null?void 0:g.first_name} ${(y=e.creator)==null?void 0:y.last_name}`},{label:"Modified By",value:`${(A=e.modifier)==null?void 0:A.first_name} ${(_=e.modifier)==null?void 0:_.last_name}`},{label:"Closed Time",value:`${e.closed_date}`}]};return o?a(M,{}):!d("read-call")||o?a(M,{}):c("div",{children:[a("div",{className:"flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6",children:a(H,{loading:o,hasPermission:d,modelId:r,exportTable:O,routeModel:"call",permissionModel:"call"})}),c("div",{className:"panel",children:[c("div",{className:"flex justify-between flex-wrap gap-4 px-4",children:[a("div",{className:"text-2xl font-semibold uppercase",children:"Call"}),a("div",{className:"shrink-0",children:a("img",{src:V(e.image_data),alt:"Call image",className:"w-20 ltr:ml-auto rtl:mr-auto"})})]}),a(w,{title:"Call Information",leftObjects:u.leftObjects,rightObjects:u.rightObjects}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(w,{title:"Date information",leftObjects:[{label:"Created Date",value:j(e.created_at)}],rightObjects:[{label:"Modified Date",value:j(e.updated_at)}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(Q,{sectionTitle:"Description Information",data:[{label:"Description",value:e.description}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(U,{permissionName:"read-call",type:"email-log",routeName:"fetchCallEmailLogs",modelId:r,title:"Email Logs"})]})]})};export{te as default};