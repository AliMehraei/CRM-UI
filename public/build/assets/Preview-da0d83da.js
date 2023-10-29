import{c as I,u as L,r as t,h as R,a as T,s as E,O as B,b as l,d as g,j as c,f as q,b2 as k,e as V}from"./main-8d5d8e48.js";import{A as W,I as H}from"./InformationSectionPreview-6cb73669.js";import{M as Q}from"./MultipleLineSectionPreview-6c8b0e0f.js";import"./CommonIcons-710cb86d.js";const X=()=>{var p,m,v,f,h,y,A,_,M;const{hasPermission:d}=I(),u=L(),[o,x]=t.useState(!0),[j,w]=t.useState(""),[r,C]=t.useState({}),[i,F]=t.useState({}),n=R().id,S=new V,e=T(a=>a.callForm);t.useEffect(()=>{u(E("Call Preview"))});const D=()=>{window.print()},O=async()=>{const a=await S.fetchSingleCall(n);if(a.status!=200)return;const s=a.data.data.call;u(k(s))},P=[{value:"App\\Models\\Lead",label:"Lead"},{value:"App\\Models\\Contact",label:"Contact"}],N=[{value:"App\\Models\\Account",label:"Account",labelField:"account_name"},{value:"App\\Models\\Vendor",label:"Vendor",labelField:"vendor_name"},{value:"App\\Models\\Quote",label:"Quote",labelField:"subject"},{value:"App\\Models\\Rfq",label:"Rfq",labelField:"rfq_name"},{value:"App\\Models\\Excess",label:"Excess",labelField:"excess_name"},{value:"App\\Models\\Availability",label:"Availability",labelField:"availability_name"},{value:"App\\Models\\Product",label:"Product",labelField:"product_name"},{value:"App\\Models\\Manufacturer",label:"Manufacturer",labelField:"name"},{value:"App\\Models\\Deal",label:"Deals",labelField:"deal_name"},{value:"App\\Models\\SalesOrder",label:"Sales Order",labelField:"subject"},{value:"App\\Models\\PurchaseOrder",label:"Purchase Order",labelField:"subject"},{value:"App\\Models\\Invoice",label:"Invoice",labelField:"subject"},{value:"App\\Models\\VendorRfq",label:"Vendor Rfq",labelField:"vendor_rfq_name"}];t.useEffect(()=>{O().then(()=>{x(!1)})},[n]),t.useEffect(()=>{const a=N.find(s=>s.value===e.relatable_type);C(a),e.relatable&&w(e.relatable[a==null?void 0:a.labelField]),F(P.find(s=>s.value===e.callable_type))},[e.relatable_type]);const $=[{value:"-None-",label:"-None-"},{value:"Account or Contact exist already",label:"Account or Contact exist already"},{value:"Wrong Branch",label:"Wrong Branch"},{value:"Wrong Department",label:"Wrong Department"},{value:"Does Not Exist Anymore",label:"Does Not Exist Anymore"},{value:"Bankruptcy",label:"Bankruptcy"},{value:"Hoch",label:"Hoch"},{value:"Other",label:"Other"}],b={leftObjects:[{label:"Call Owner",value:`${(p=e.owner)==null?void 0:p.first_name} ${(m=e.owner)==null?void 0:m.last_name}`},{label:"Subject",value:`${e.subject}`},{label:"Due Date",value:e.due_date},{label:"Call To",value:(i==null?void 0:i.label)+`: ${((v=e.callable)==null?void 0:v.name)??((f=e.callable)==null?void 0:f.first_name)+" "+((h=e.callable)==null?void 0:h.last_name)} `},{label:"Related To",value:(r==null?void 0:r.label)+": "+j},{label:"Call Type",value:`${e.type}`}],rightObjects:[{label:"Priority",value:B(e.priority,$)},{label:"Repeat",value:e.repeat},{label:"Created By",value:`${(y=e.creator)==null?void 0:y.first_name} ${(A=e.creator)==null?void 0:A.last_name}`},{label:"Modified By",value:`${(_=e.modifier)==null?void 0:_.first_name} ${(M=e.modifier)==null?void 0:M.last_name}`},{label:"Closed Time",value:`${e.closed_date}`}]};return o?l(g,{}):!d("read-call")||o?l(g,{}):c("div",{children:[l("div",{className:"flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6",children:l(W,{loading:o,hasPermission:d,modelId:n,exportTable:D,routeModel:"call",permissionModel:"call"})}),c("div",{className:"panel",children:[c("div",{className:"flex justify-between flex-wrap gap-4 px-4",children:[l("div",{className:"text-2xl font-semibold uppercase",children:"Call"}),l("div",{className:"shrink-0",children:l("img",{src:q(e.image_data),alt:"Call image",className:"w-20 ltr:ml-auto rtl:mr-auto"})})]}),l(H,{title:"Call Information",leftObjects:b.leftObjects,rightObjects:b.rightObjects}),l("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),l(Q,{sectionTitle:"Description Information",data:[{label:"Description",value:e.description}]})]})]})};export{X as default};
