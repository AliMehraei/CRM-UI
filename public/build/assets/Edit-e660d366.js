import{a as y,u as q,e as O,b as e,l as b,_ as E,k,y as P,m as Q,j as m,f as L,F as V,aQ as N,r as _,V as T,aG as D,h as j,c as A,s as Y,aR as F,d as S}from"./main-a3f9880b.js";import{S as C}from"./react-select.esm-90327a01.js";import{G as M,R as w,A as G}from"./GenerateFields-48686241.js";import{F as U}from"./index-515e3b5a.js";import{A as B}from"./AttachmentSection-d44c5f12.js";/* empty css                  */import"./index-ade49a0a.js";const $=()=>{var p,g,x,a,d,o,u,v;const n=y(t=>t.vendorRfqForm),h=q();new O;const l=(t,f)=>{h(N({[t]:f}))},c=[{value:"none",label:"-None-"},{value:"draft",label:"Draft"},{value:"excel-generate",label:"Excel Generated"},{value:"email-sent",label:"Email Sent"},{value:"closed",label:"Closed"}],s={"Vendor RFQ Information":{"Vendor RFQ Name":e("input",{id:"vendor_rfq_name",name:"vendor_rfq_name",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:n.vendor_rfq_name}),"Vendor Name":e(b,{defaultOptions:!0,isMulti:!1,id:"vendor_id",placeholder:"Type at least 2 characters to search...",name:"vendor_id",loadOptions:E,onChange:({value:t})=>{l("vendor_id",t)},className:"flex-1",defaultValue:{value:(p=n.vendor)==null?void 0:p.id,label:e("div",{className:"flex items-center",children:e("div",{className:"text-sm font-bold",children:(g=n.vendor)==null?void 0:g.vendor_name})},(x=n.vendor)==null?void 0:x.id)}}),Status:e(C,{options:c,name:"status",id:"status",onChange:({value:t})=>{l("status",t)},className:"flex-1",defaultValue:c.find(t=>t.value==n.status)}),Email:e("input",{id:"email",name:"email",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:n.email}),Currency:e(C,{options:k,name:"currency",id:"currency",onChange:({value:t})=>{l("currency",t)},className:"flex-1",defaultValue:k.find(t=>t.value==n.currency)}),"Related RFQs":e(b,{defaultOptions:!0,isMulti:!0,id:"related_rfqs_id",placeholder:"Type at least 2 characters to search...",name:"related_rfqs_id",loadOptions:P,onChange:t=>{l("related_rfqs_id",t.map(f=>f.value))},className:"flex-1",defaultValue:n.related_rfqs?n.related_rfqs.map(t=>({value:t.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:t.rfq_name})})},t.id)})):[]})},"":{Date:e(U,{name:"date",options:{dateFormat:"Y-m-d ",defaultDate:n.date?new Date(n.date):null},defaultValue:n.date,className:"form-input flex-1",placeholder:"YYYY-MM-DD",onChange:(t,f)=>l("date",f)}),"Vendor RFQ Owner":e(b,{defaultOptions:!0,isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:Q,onChange:({value:t})=>{l("owner_id",t)},className:"flex-1",defaultValue:{value:(a=n.owner)==null?void 0:a.id,label:m("div",{className:"flex items-center",children:[n.owner?e("img",{src:L(n.owner.avatar_data),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,m("div",{children:[e("div",{className:"text-sm font-bold",children:((d=n.owner)==null?void 0:d.first_name)+" "+((o=n.owner)==null?void 0:o.last_name)}),e("div",{className:"text-xs text-gray-500",children:(u=n.owner)==null?void 0:u.email})]})]},(v=n.owner)==null?void 0:v.id)}}),"Email Opt Out":e("input",{id:"email_opt_out",type:"checkbox",name:"email_opt_out",className:"form-checkbox",onChange:t=>l(t.target.name,t.target.checked),defaultChecked:n.email_opt_out}),"Exchange Rate":e("input",{id:"exchange_rate",name:"exchange_rate",className:"form-input flex-1 ",disabled:!0,onChange:t=>l(t.target.name,t.target.value),defaultValue:1})}};return e(V,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(M,{fields:s})})})},W=()=>{const n=y(a=>a.vendorRfqForm),h=q(),l=(a,d,o)=>{const u=c.find(r=>r.id===o),v=c.findIndex(r=>r.id===o),t={...u,[a]:d},f={...c,[v]:t};s(Object.values(f)),h(N({requested_products:f}))},[c,s]=_.useState([]);_.useEffect(()=>{s(Object.values(n.requested_products))},[]);const p=()=>{let a;a=c!=null&&c.length?c.reduce((o,u)=>u.id>o?u.id:o,c[0].id):0;let d=[...c,{id:a+1}];s(d),h(N({requested_products:d}))},g=[{label:"-None-",value:"none"},{label:"Stock",value:"stock"},{label:"Lead Time",value:"lead_time"}],x=(a=null)=>{const d=c.filter(o=>o.id!=a.id);s(d),h(N({requested_products:d}))};return e(V,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12 ",children:m("div",{className:"",children:[e("div",{className:"text-lg",children:"Requested Products :"}),m("div",{className:"mt-8",children:[e("div",{className:"overflow-x-auto	w-11/12",children:m("table",{className:"table-auto w-5",children:[e("thead",{children:m("tr",{children:[m("th",{className:"w-1",children:["Source RFQ ",e(w,{})]}),e("th",{className:"w-1",children:"RFQ Owner Name"}),m("th",{className:"w-1",children:["Product ",e(w,{})]}),e("th",{className:"w-1",children:"Is Alt For This Product"}),m("th",{className:"w-1",children:["Manufacturer ",e(w,{})]}),m("th",{className:"w-1",children:["Quantity ",e(w,{})]}),m("th",{className:"w-1",children:["Lead Time Demand ",e(w,{})]}),e("th",{className:"w-1",children:"Comments"})]})}),e("tbody",{children:c.map(a=>{var d,o,u,v,t,f,r,I,R;return m("tr",{className:"align-top",children:[e("td",{children:e(b,{defaultOptions:!0,isMulti:!1,id:"rfq_id",name:"rfq_id",placeholder:"Type at least 2 characters to search...",loadOptions:P,onChange:({value:i})=>{l("rfq_id",i,a.id)},menuPortalTarget:document.body,defaultValue:{value:(d=a.rfq)==null?void 0:d.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(o=a.rfq)==null?void 0:o.rfq_name})})},(u=a.rfq)==null?void 0:u.id)},className:"flex-1  min-w-[200px]"})}),e("td",{children:e("input",{name:"rfq_owner_name",type:"text",className:"form-input min-w-[200px]",onChange:i=>l(i.target.name,i.target.value,a.id),defaultValue:a.rfq_owner_name})}),e("td",{children:e(b,{defaultOptions:!0,isMulti:!1,id:"product_id",name:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:T,onChange:({value:i})=>{l("product_id",i,a.id)},menuPortalTarget:document.body,defaultValue:{value:(v=a.product)==null?void 0:v.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(t=a.product)==null?void 0:t.product_name})})},(f=a.product)==null?void 0:f.id)},className:"flex-1  min-w-[200px]"})}),e("td",{children:e("input",{name:"alt_product",type:"text",className:"form-input min-w-[200px]",onChange:i=>l(i.target.name,i.target.value,a.id),defaultValue:a.alt_product})}),e("td",{children:e(b,{defaultOptions:!0,isMulti:!1,id:"manufacturer_id",name:"manufacturer_id",placeholder:"Type at least 2 characters to search...",loadOptions:D,onChange:({value:i})=>{l("manufacturer_id",i,a.id)},menuPortalTarget:document.body,defaultValue:{value:(r=a.manufacturer)==null?void 0:r.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(I=a.manufacturer)==null?void 0:I.name})})},(R=a.manufacturer)==null?void 0:R.id)},className:"flex-1  min-w-[200px]"})}),e("td",{children:e("input",{name:"quantity",type:"text",className:"form-input min-w-[200px]",onChange:i=>l(i.target.name,i.target.value,a.id),defaultValue:a.quantity})}),e("td",{children:e(C,{options:g,name:"lead_time_demand",id:"lead_time_demand",onChange:({value:i})=>{l("lead_time_demand",i,a.id)},menuPlacement:"top",menuPortalTarget:document.body,defaultValue:g.find(i=>i.value==a.lead_time_demand),className:"flex-1 min-w-[200px]"})}),e("td",{children:e("textarea",{name:"comment",className:"form-input min-w-[200px]",defaultValue:a.comment,onChange:i=>l(i.target.name,i.target.value,a.id)})}),e("td",{children:e("button",{type:"button",onClick:()=>x(a),children:m("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},a.id)})})]})}),e("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:e("div",{className:"sm:mb-0 mb-6",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>p(),children:"Add Item"})})})]})]},"Quote Items")})})})},J=()=>{const n=y(a=>a.vendorRfqForm),h=q(),[l,c]=_.useState([]),s=(a,d,o)=>{const u=l.find(r=>r.id===o),v=l.findIndex(r=>r.id===o),t={...u,[a]:d},f={...l,[v]:t};c(Object.values(f)),h(N({offered_products:f}))},p=()=>{let a;a=l!=null&&l.length?l.reduce((o,u)=>u.id>o?u.id:o,l[0].id):0;let d=[...l,{id:a+1}];c(d),h(N({offered_products:d}))};_.useEffect(()=>{c(Object.values(n.offered_products))},[]);const g=[{label:"-None-",value:"none"},{label:"Stock",value:"stock"},{label:"Lead Time",value:"lead_time"}],x=(a=null)=>{const d=l.filter(o=>o.id!=a.id);c(d),h(N({offered_products:d}))};return e(V,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12 ",children:m("div",{className:"",children:[e("div",{className:"text-lg",children:"Offered Products :"}),m("div",{className:"mt-8",children:[e("div",{className:"overflow-x-auto	w-11/12",children:m("table",{className:"table-auto w-5",children:[e("thead",{children:m("tr",{children:[e("th",{className:"w-1",children:"Offered MPN"}),e("th",{className:"w-1",children:"Offered Manufacturer"}),e("th",{className:"w-1",children:"Offered Quantity"}),e("th",{className:"w-1",children:"Offered Price (USD)"}),e("th",{className:"w-1",children:"D/C"}),e("th",{className:"w-1",children:"Offered Lead Time"}),e("th",{className:"w-1",children:"Comments"})]})}),e("tbody",{children:l.map(a=>{var d,o,u,v,t,f;return m("tr",{className:"align-top",children:[e("td",{children:e(b,{defaultOptions:!0,isMulti:!1,id:"product_id",name:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:T,onChange:({value:r})=>{s("product_id",r,a.id)},menuPortalTarget:document.body,defaultValue:{value:(d=a.product)==null?void 0:d.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(o=a.product)==null?void 0:o.product_name})})},(u=a.product)==null?void 0:u.id)},className:"flex-1  min-w-[200px]"})}),e("td",{children:e(b,{defaultOptions:!0,isMulti:!1,id:"manufacturer_id",name:"manufacturer_id",placeholder:"Type at least 2 characters to search...",loadOptions:D,onChange:({value:r})=>{s("manufacturer_id",r,a.id)},menuPortalTarget:document.body,defaultValue:{value:(v=a.manufacturer)==null?void 0:v.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(t=a.manufacturer)==null?void 0:t.name})})},(f=a.manufacturer)==null?void 0:f.id)},className:"flex-1  min-w-[200px]"})}),e("td",{children:e("input",{name:"quantity",type:"text",className:"form-input min-w-[200px]",onChange:r=>s(r.target.name,r.target.value,a.id),defaultValue:a.quantity})}),e("td",{children:e("input",{name:"price",type:"text",className:"form-input min-w-[200px]",onChange:r=>s(r.target.name,r.target.value,a.id),defaultValue:a.price})}),e("td",{children:e("input",{name:"dc",type:"text",className:"form-input min-w-[200px]",onChange:r=>s(r.target.name,r.target.value,a.id),defaultValue:a.dc})}),e("td",{children:e(C,{options:g,name:"offer_lead_time",id:"offer_lead_time",onChange:({value:r})=>{s("offer_lead_time",r,a.id)},menuPlacement:"top",menuPortalTarget:document.body,defaultValue:g.find(r=>r.value==a.offer_lead_time),className:"flex-1 min-w-[200px]"})}),e("td",{children:e("textarea",{name:"comment",className:"form-input min-w-[200px]",defaultValue:a.comment,onChange:r=>s(r.target.name,r.target.value,a.id)})}),e("td",{children:e("button",{type:"button",onClick:()=>x(a),children:m("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},a.id)})})]})}),e("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:e("div",{className:"sm:mb-0 mb-6",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>p(),children:"Add Item"})})})]})]},"Quote Items")})})})},z=()=>{const n=y(s=>s.vendorRfqForm),h=q();new O;const l=(s,p)=>{h(N({[s]:p}))},c={Development:{"Requested Products JSON":e("textarea",{id:"requested_products",rows:2,name:"requested_products",className:"form-textarea flex-1",placeholder:"",defaultValue:n.requested_products.map(s=>{var p;return(p=s==null?void 0:s.product)==null?void 0:p.product_name}),onChange:s=>l(s.target.name,s.target.value)})},"":{"Is full":e("input",{id:"is_full",type:"checkbox",name:"is_full",className:"form-checkbox",onChange:s=>l(s.target.name,s.target.checked),defaultChecked:n.is_full})}};return e(V,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(M,{fields:c})})})},H=()=>{const h=j().id;return m("div",{className:"mt-8 px-4",children:[e($,{},"VendorRFQInformation"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(W,{},"RequestedProducts"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(J,{},"OfferedProducts"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(z,{},"Development"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(B,{modelId:h,modelName:"vendorRfq"})]})},ne=()=>{const{hasPermission:n}=A(),h=y(d=>d.vendorRfqForm),[l,c]=_.useState(!0),p=j().id,g=new O,x=q();_.useEffect(()=>{x(Y("VendorRfq Edit"))}),_.useEffect(()=>{x(F())},[]);const a=async()=>{const d=await g.fetchSingleVendorRfq(p);if(d.status!=200)return;const o=d.data.data.vendorRfq;x(N(o))};return _.useEffect(()=>{a().then(()=>{c(!1)})},[p]),_.useEffect(()=>{x(N({api:"updateSingleVendorRfq",redirectTo:"/vendor_rfq/edit/:id",action:"edit"}))},[]),l?e(S,{}):!n("update-vendor-rfq")||l?e(S,{}):m("div",{className:"px-4",children:[e(G,{formState:h,resetForm:F}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(H,{})})})]})};export{ne as default};
