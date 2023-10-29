import{a as y,u as q,e as O,b as e,Z as E,l as k,y as P,m as Q,j as m,f as L,F as V,aM as N,r as b,V as T,aC as D,h as M,c as A,s as Y,aN as F,d as S}from"./main-14f615f5.js";import{A as w}from"./react-select-async.esm-fa6aa9d3.js";import{S as C}from"./react-select.esm-f82d134e.js";import{G as j,R as _,A as U}from"./GenerateFields-622759ee.js";import{F as B}from"./index-82fb8980.js";import{A as G}from"./AttachmentSection-b44113f0.js";/* empty css                  */import"./Select-aecb2a80.esm-a628f797.js";const $=()=>{var v,g,x,a,d,s,u,p;const n=y(t=>t.vendorRfqForm),h=q();new O;const l=(t,f)=>{h(N({[t]:f}))},c=[{value:"none",label:"-None-"},{value:"draft",label:"Draft"},{value:"excel-generate",label:"Excel Generated"},{value:"email-sent",label:"Email Sent"},{value:"closed",label:"Closed"}],o={"Vendor RFQ Information":{"Vendor RFQ Name":e("input",{id:"vendor_rfq_name",name:"vendor_rfq_name",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:n.vendor_rfq_name}),"Vendor Name":e(w,{defaultOptions:!0,isMulti:!1,id:"vendor_id",placeholder:"Type at least 2 characters to search...",name:"vendor_id",loadOptions:E,onChange:({value:t})=>{l("vendor_id",t)},className:"flex-1",defaultValue:{value:(v=n.vendor)==null?void 0:v.id,label:e("div",{className:"flex items-center",children:e("div",{className:"text-sm font-bold",children:(g=n.vendor)==null?void 0:g.vendor_name})},(x=n.vendor)==null?void 0:x.id)}}),Status:e(C,{options:c,name:"status",id:"status",onChange:({value:t})=>{l("status",t)},className:"flex-1",defaultValue:c.find(t=>t.value==n.status)}),Email:e("input",{id:"email",name:"email",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:n.email}),Currency:e(C,{options:k,name:"currency",id:"currency",onChange:({value:t})=>{l("currency",t)},className:"flex-1",defaultValue:k.find(t=>t.value==n.currency)}),"Related RFQs":e(w,{defaultOptions:!0,isMulti:!0,id:"related_rfqs_id",placeholder:"Type at least 2 characters to search...",name:"related_rfqs_id",loadOptions:P,onChange:t=>{l("related_rfqs_id",t.map(f=>f.value))},className:"flex-1",defaultValue:n.related_rfqs?n.related_rfqs.map(t=>({value:t.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:t.rfq_name})})},t.id)})):[]})},"":{Date:e(B,{name:"date",options:{dateFormat:"Y-m-d ",defaultDate:n.date?new Date(n.date):null},defaultValue:n.date,className:"form-input flex-1",placeholder:"YYYY-MM-DD",onChange:(t,f)=>l("date",f)}),"Vendor RFQ Owner":e(w,{defaultOptions:!0,isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:Q,onChange:({value:t})=>{l("owner_id",t)},className:"flex-1",defaultValue:{value:(a=n.owner)==null?void 0:a.id,label:m("div",{className:"flex items-center",children:[n.owner?e("img",{src:L(n.owner.avatar),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,m("div",{children:[e("div",{className:"text-sm font-bold",children:((d=n.owner)==null?void 0:d.first_name)+" "+((s=n.owner)==null?void 0:s.last_name)}),e("div",{className:"text-xs text-gray-500",children:(u=n.owner)==null?void 0:u.email})]})]},(p=n.owner)==null?void 0:p.id)}}),"Email Opt Out":e("input",{id:"email_opt_out",type:"checkbox",name:"email_opt_out",className:"form-checkbox",onChange:t=>l(t.target.name,t.target.checked),defaultChecked:n.email_opt_out}),"Exchange Rate":e("input",{id:"exchange_rate",name:"exchange_rate",className:"form-input flex-1 ",disabled:!0,onChange:t=>l(t.target.name,t.target.value),defaultValue:1})}};return e(V,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(j,{fields:o})})})},W=()=>{const n=y(a=>a.vendorRfqForm),h=q(),l=(a,d,s)=>{const u=c.find(r=>r.id===s),p=c.findIndex(r=>r.id===s),t={...u,[a]:d},f={...c,[p]:t};o(Object.values(f)),h(N({requested_products:f}))},[c,o]=b.useState([]);b.useEffect(()=>{o(Object.values(n.requested_products))},[]);const v=()=>{let a;a=c!=null&&c.length?c.reduce((s,u)=>u.id>s?u.id:s,c[0].id):0;let d=[...c,{id:a+1}];o(d),h(N({requested_products:d}))},g=[{label:"-None-",value:"none"},{label:"Stock",value:"stock"},{label:"Lead Time",value:"lead_time"}],x=(a=null)=>{const d=c.filter(s=>s.id!=a.id);o(d),h(N({requested_products:d}))};return e(V,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12 ",children:m("div",{className:"",children:[e("div",{className:"text-lg",children:"Requested Products :"}),m("div",{className:"mt-8",children:[e("div",{className:"overflow-x-auto	w-11/12",children:m("table",{className:"table-auto w-5",children:[e("thead",{children:m("tr",{children:[m("th",{className:"w-1",children:["Source RFQ ",e(_,{})]}),e("th",{className:"w-1",children:"RFQ Owner Name"}),m("th",{className:"w-1",children:["Product ",e(_,{})]}),e("th",{className:"w-1",children:"Is Alt For This Product"}),m("th",{className:"w-1",children:["Manufacturer ",e(_,{})]}),m("th",{className:"w-1",children:["Quantity ",e(_,{})]}),m("th",{className:"w-1",children:["Lead Time Demand ",e(_,{})]}),e("th",{className:"w-1",children:"Comments"})]})}),e("tbody",{children:c.map(a=>{var d,s,u,p,t,f,r,I,R;return m("tr",{className:"align-top",children:[e("td",{children:e(w,{defaultOptions:!0,isMulti:!1,id:"rfq_id",name:"rfq_id",placeholder:"Type at least 2 characters to search...",loadOptions:P,onChange:({value:i})=>{l("rfq_id",i,a.id)},menuPortalTarget:document.body,defaultValue:{value:(d=a.rfq)==null?void 0:d.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(s=a.rfq)==null?void 0:s.rfq_name})})},(u=a.rfq)==null?void 0:u.id)},className:"flex-1  min-w-[200px]"})}),e("td",{children:e("input",{name:"rfq_owner_name",type:"text",className:"form-input min-w-[200px]",onChange:i=>l(i.target.name,i.target.value,a.id),defaultValue:a.rfq_owner_name})}),e("td",{children:e(w,{defaultOptions:!0,isMulti:!1,id:"product_id",name:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:T,onChange:({value:i})=>{l("product_id",i,a.id)},menuPortalTarget:document.body,defaultValue:{value:(p=a.product)==null?void 0:p.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(t=a.product)==null?void 0:t.product_name})})},(f=a.product)==null?void 0:f.id)},className:"flex-1  min-w-[200px]"})}),e("td",{children:e("input",{name:"alt_product",type:"text",className:"form-input min-w-[200px]",onChange:i=>l(i.target.name,i.target.value,a.id),defaultValue:a.alt_product})}),e("td",{children:e(w,{defaultOptions:!0,isMulti:!1,id:"manufacturer_id",name:"manufacturer_id",placeholder:"Type at least 2 characters to search...",loadOptions:D,onChange:({value:i})=>{l("manufacturer_id",i,a.id)},menuPortalTarget:document.body,defaultValue:{value:(r=a.manufacturer)==null?void 0:r.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(I=a.manufacturer)==null?void 0:I.name})})},(R=a.manufacturer)==null?void 0:R.id)},className:"flex-1  min-w-[200px]"})}),e("td",{children:e("input",{name:"quantity",type:"text",className:"form-input min-w-[200px]",onChange:i=>l(i.target.name,i.target.value,a.id),defaultValue:a.quantity})}),e("td",{children:e(C,{options:g,name:"lead_time_demand",id:"lead_time_demand",onChange:({value:i})=>{l("lead_time_demand",i,a.id)},menuPlacement:"top",menuPortalTarget:document.body,defaultValue:g.find(i=>i.value==a.lead_time_demand),className:"flex-1 min-w-[200px]"})}),e("td",{children:e("textarea",{name:"comment",className:"form-input min-w-[200px]",defaultValue:a.comment,onChange:i=>l(i.target.name,i.target.value,a.id)})}),e("td",{children:e("button",{type:"button",onClick:()=>x(a),children:m("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},a.id)})})]})}),e("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:e("div",{className:"sm:mb-0 mb-6",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>v(),children:"Add Item"})})})]})]},"Quote Items")})})})},J=()=>{const n=y(a=>a.vendorRfqForm),h=q(),[l,c]=b.useState([]),o=(a,d,s)=>{const u=l.find(r=>r.id===s),p=l.findIndex(r=>r.id===s),t={...u,[a]:d},f={...l,[p]:t};c(Object.values(f)),h(N({offered_products:f}))},v=()=>{let a;a=l!=null&&l.length?l.reduce((s,u)=>u.id>s?u.id:s,l[0].id):0;let d=[...l,{id:a+1}];c(d),h(N({offered_products:d}))};b.useEffect(()=>{c(Object.values(n.offered_products))},[]);const g=[{label:"-None-",value:"none"},{label:"Stock",value:"stock"},{label:"Lead Time",value:"lead_time"}],x=(a=null)=>{const d=l.filter(s=>s.id!=a.id);c(d),h(N({offered_products:d}))};return e(V,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12 ",children:m("div",{className:"",children:[e("div",{className:"text-lg",children:"Offered Products :"}),m("div",{className:"mt-8",children:[e("div",{className:"overflow-x-auto	w-11/12",children:m("table",{className:"table-auto w-5",children:[e("thead",{children:m("tr",{children:[e("th",{className:"w-1",children:"Offered MPN"}),e("th",{className:"w-1",children:"Offered Manufacturer"}),e("th",{className:"w-1",children:"Offered Quantity"}),e("th",{className:"w-1",children:"Offered Price (USD)"}),e("th",{className:"w-1",children:"D/C"}),e("th",{className:"w-1",children:"Offered Lead Time"}),e("th",{className:"w-1",children:"Comments"})]})}),e("tbody",{children:l.map(a=>{var d,s,u,p,t,f;return m("tr",{className:"align-top",children:[e("td",{children:e(w,{defaultOptions:!0,isMulti:!1,id:"product_id",name:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:T,onChange:({value:r})=>{o("product_id",r,a.id)},menuPortalTarget:document.body,defaultValue:{value:(d=a.product)==null?void 0:d.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(s=a.product)==null?void 0:s.product_name})})},(u=a.product)==null?void 0:u.id)},className:"flex-1  min-w-[200px]"})}),e("td",{children:e(w,{defaultOptions:!0,isMulti:!1,id:"manufacturer_id",name:"manufacturer_id",placeholder:"Type at least 2 characters to search...",loadOptions:D,onChange:({value:r})=>{o("manufacturer_id",r,a.id)},menuPortalTarget:document.body,defaultValue:{value:(p=a.manufacturer)==null?void 0:p.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(t=a.manufacturer)==null?void 0:t.name})})},(f=a.manufacturer)==null?void 0:f.id)},className:"flex-1  min-w-[200px]"})}),e("td",{children:e("input",{name:"quantity",type:"text",className:"form-input min-w-[200px]",onChange:r=>o(r.target.name,r.target.value,a.id),defaultValue:a.quantity})}),e("td",{children:e("input",{name:"price",type:"text",className:"form-input min-w-[200px]",onChange:r=>o(r.target.name,r.target.value,a.id),defaultValue:a.price})}),e("td",{children:e("input",{name:"dc",type:"text",className:"form-input min-w-[200px]",onChange:r=>o(r.target.name,r.target.value,a.id),defaultValue:a.dc})}),e("td",{children:e(C,{options:g,name:"offer_lead_time",id:"offer_lead_time",onChange:({value:r})=>{o("offer_lead_time",r,a.id)},menuPlacement:"top",menuPortalTarget:document.body,defaultValue:g.find(r=>r.value==a.offer_lead_time),className:"flex-1 min-w-[200px]"})}),e("td",{children:e("textarea",{name:"comment",className:"form-input min-w-[200px]",defaultValue:a.comment,onChange:r=>o(r.target.name,r.target.value,a.id)})}),e("td",{children:e("button",{type:"button",onClick:()=>x(a),children:m("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},a.id)})})]})}),e("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:e("div",{className:"sm:mb-0 mb-6",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>v(),children:"Add Item"})})})]})]},"Quote Items")})})})},Z=()=>{const n=y(o=>o.vendorRfqForm),h=q();new O;const l=(o,v)=>{h(N({[o]:v}))},c={Development:{"Requested Products JSON":e("textarea",{id:"requested_products",rows:2,name:"requested_products",className:"form-textarea flex-1",placeholder:"",defaultValue:n.requested_products,onChange:o=>l(o.target.name,o.target.value)})},"":{"Is full":e("input",{id:"is_full",type:"checkbox",name:"is_full",className:"form-checkbox",onChange:o=>l(o.target.name,o.target.checked),defaultChecked:n.is_full})}};return e(V,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(j,{fields:c})})})},z=()=>{const h=M().id;return m("div",{className:"mt-8 px-4",children:[e($,{},"VendorRFQInformation"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(W,{},"RequestedProducts"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(J,{},"OfferedProducts"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Z,{},"Development"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(G,{modelId:h,modelName:"vendorRfq"})]})},de=()=>{const{hasPermission:n}=A(),h=y(d=>d.vendorRfqForm),[l,c]=b.useState(!0),v=M().id,g=new O,x=q();b.useEffect(()=>{x(Y("VendorRfq Edit"))}),b.useEffect(()=>{x(F())},[]);const a=async()=>{const d=await g.fetchSingleVendorRfq(v);if(d.status!=200)return;const s=d.data.data.vendorRfq;x(N(s))};return b.useEffect(()=>{a().then(()=>{c(!1)})},[v]),b.useEffect(()=>{x(N({api:"updateSingleVendorRfq",redirectTo:"/vendor_rfq/edit/:id",action:"edit"}))},[]),l?e(S,{}):!n("update-vendor-rfq")||l?e(S,{}):m("div",{className:"px-4",children:[e(U,{formState:h,resetForm:F}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(z,{})})})]})};export{de as default};
