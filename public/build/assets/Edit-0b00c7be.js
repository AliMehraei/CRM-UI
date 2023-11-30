import{d as y,u as q,a as I,j as e,l as w,_ as E,k,y as P,m as Q,b as m,f as L,F as V,aQ as N,r as _,W as T,aG as D,h as M,c as A,s as Y,aR as F,e as S}from"./main-fb19eb09.js";import{S as C}from"./react-select.esm-8668e882.js";import{G as j,R as b,A as G}from"./GenerateFields-c40cef71.js";import{F as U}from"./index-5a1fde46.js";import{A as B}from"./AttachmentSection-c4324de7.js";/* empty css                  */import"./index-f5f709e9.js";const W=()=>{var p,g,v,a,r,o,u,x;const d=y(t=>t.vendorRfqForm),c=q();new I;const l=(t,f)=>{c(N({[t]:f}))},h=[{value:"none",label:"-None-"},{value:"draft",label:"Draft"},{value:"excel-generate",label:"Excel Generated"},{value:"email-sent",label:"Email Sent"},{value:"closed",label:"Closed"}],n={"Vendor RFQ Information":{"Vendor RFQ Name":e("input",{id:"vendor_rfq_name",name:"vendor_rfq_name",required:!0,className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:d.vendor_rfq_name}),"Vendor Name":e(w,{defaultOptions:!0,isMulti:!1,id:"vendor_id",placeholder:"Type at least 2 characters to search...",name:"vendor_id",required:!0,loadOptions:E,onChange:({value:t})=>{l("vendor_id",t)},className:"flex-1",defaultValue:{value:(p=d.vendor)==null?void 0:p.id,label:e("div",{className:"flex items-center",children:e("div",{className:"text-sm font-bold",children:(g=d.vendor)==null?void 0:g.vendor_name})},(v=d.vendor)==null?void 0:v.id)}}),Status:e(C,{options:h,name:"status",id:"status",required:!0,onChange:({value:t})=>{l("status",t)},className:"flex-1",defaultValue:h.find(t=>t.value==d.status)}),Email:e("input",{id:"email",name:"email",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:d.email}),Currency:e(C,{options:k,name:"currency",id:"currency",onChange:({value:t})=>{l("currency",t)},className:"flex-1",defaultValue:k.find(t=>t.value==d.currency)}),"Related RFQs":e(w,{defaultOptions:!0,isMulti:!0,id:"related_rfqs_id",placeholder:"Type at least 2 characters to search...",name:"related_rfqs_id",loadOptions:P,onChange:t=>{l("related_rfqs_id",t.map(f=>f.value))},className:"flex-1",defaultValue:d.related_rfqs?d.related_rfqs.map(t=>({value:t.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:t.rfq_name})})},t.id)})):[]})},"":{Date:e(U,{name:"date",options:{dateFormat:"Y-m-d ",defaultDate:d.date?new Date(d.date):""},defaultValue:d.date,className:"form-input flex-1",placeholder:"YYYY-MM-DD",onChange:(t,f)=>l("date",f)}),"Vendor RFQ Owner":e(w,{defaultOptions:!0,isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:Q,onChange:({value:t})=>{l("owner_id",t)},className:"flex-1",defaultValue:{value:(a=d.owner)==null?void 0:a.id,label:m("div",{className:"flex items-center",children:[d.owner?e("img",{src:L(d.owner.avatar_data),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,m("div",{children:[e("div",{className:"text-sm font-bold",children:((r=d.owner)==null?void 0:r.first_name)+" "+((o=d.owner)==null?void 0:o.last_name)}),e("div",{className:"text-xs text-gray-500",children:(u=d.owner)==null?void 0:u.email})]})]},(x=d.owner)==null?void 0:x.id)}}),"Email Opt Out":e("input",{id:"email_opt_out",type:"checkbox",name:"email_opt_out",className:"form-checkbox",onChange:t=>l(t.target.name,t.target.checked),defaultChecked:d.email_opt_out}),"Exchange Rate":e("input",{id:"exchange_rate",name:"exchange_rate",className:"form-input flex-1 ",disabled:!0,onChange:t=>l(t.target.name,t.target.value),defaultValue:1})}};return e(V,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(j,{fields:n})})})},$=()=>{const d=y(a=>a.vendorRfqForm),[c,l]=_.useState([]),h=q(),n=(a,r,o)=>{const u=c.find(s=>s.id===o),x=c.findIndex(s=>s.id===o),t={...u,[a]:r},f=[...c];f[x]=t,l(f),h(N({requested_products:f}))};_.useEffect(()=>{l(Object.values(d.requested_products))},[]);const p=()=>{let a;a=c!=null&&c.length?c.reduce((o,u)=>u.id>o?u.id:o,c[0].id):0;let r=[...c,{id:a+1}];l(r),h(N({requested_products:r}))},g=[{label:"-None-",value:"none"},{label:"Stock",value:"stock"},{label:"Lead Time",value:"lead_time"}],v=(a=null)=>{const r=c.filter(o=>o.id!=a.id);l(r),h(N({requested_products:r}))};return e(V,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12 ",children:m("div",{className:"",children:[e("div",{className:"text-lg",children:"Requested Products :"}),m("div",{className:"mt-8",children:[e("div",{className:"overflow-x-auto	w-11/12",children:m("table",{className:"table-auto w-5",children:[e("thead",{children:m("tr",{children:[m("th",{className:"w-1",children:["Source RFQ ",e(b,{})]}),e("th",{className:"w-1",children:"RFQ Owner Name"}),m("th",{className:"w-1",children:["Product ",e(b,{})]}),e("th",{className:"w-1",children:"Is Alt For This Product"}),m("th",{className:"w-1",children:["Manufacturer ",e(b,{})]}),m("th",{className:"w-1",children:["Quantity ",e(b,{})]}),m("th",{className:"w-1",children:["Lead Time Demand ",e(b,{})]}),e("th",{className:"w-1",children:"Comments"})]})}),e("tbody",{children:c.map(a=>{var r,o,u,x,t,f,s,O,R;return m("tr",{className:"align-top",children:[e("td",{children:e(w,{defaultOptions:!0,isMulti:!1,id:"rfq_id",name:"rfq_id",placeholder:"Type at least 2 characters to search...",loadOptions:P,onChange:({value:i})=>{n("rfq_id",i,a.id)},menuPortalTarget:document.body,defaultValue:{value:(r=a.rfq)==null?void 0:r.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(o=a.rfq)==null?void 0:o.rfq_name})})},(u=a.rfq)==null?void 0:u.id)},className:"flex-1  min-w-[200px]"})}),e("td",{children:e("input",{name:"rfq_owner_name",type:"text",className:"form-input min-w-[200px]",onChange:i=>n(i.target.name,i.target.value,a.id),defaultValue:a.rfq_owner_name})}),e("td",{children:e(w,{defaultOptions:!0,isMulti:!1,id:"product_id",name:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:T,onChange:({value:i})=>{n("product_id",i,a.id)},menuPortalTarget:document.body,defaultValue:{value:(x=a.product)==null?void 0:x.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(t=a.product)==null?void 0:t.product_name})})},(f=a.product)==null?void 0:f.id)},className:"flex-1  min-w-[200px]"})}),e("td",{children:e("input",{name:"alt_product",type:"text",className:"form-input min-w-[200px]",onChange:i=>n(i.target.name,i.target.value,a.id),defaultValue:a.alt_product})}),e("td",{children:e(w,{defaultOptions:!0,isMulti:!1,id:"manufacturer_id",name:"manufacturer_id",placeholder:"Type at least 2 characters to search...",loadOptions:D,onChange:({value:i})=>{n("manufacturer_id",i,a.id)},menuPortalTarget:document.body,defaultValue:{value:(s=a.manufacturer)==null?void 0:s.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(O=a.manufacturer)==null?void 0:O.name})})},(R=a.manufacturer)==null?void 0:R.id)},className:"flex-1  min-w-[200px]"})}),e("td",{children:e("input",{name:"quantity",type:"text",className:"form-input min-w-[200px]",onChange:i=>n(i.target.name,i.target.value,a.id),defaultValue:a.quantity})}),e("td",{children:e(C,{options:g,name:"lead_time_demand",id:"lead_time_demand",onChange:({value:i})=>{n("lead_time_demand",i,a.id)},menuPlacement:"top",menuPortalTarget:document.body,defaultValue:g.find(i=>i.value==a.lead_time_demand),className:"flex-1 min-w-[200px]"})}),e("td",{children:e("textarea",{name:"comment",className:"form-input min-w-[200px]",defaultValue:a.comment,onChange:i=>n(i.target.name,i.target.value,a.id)})}),e("td",{children:e("button",{type:"button",onClick:()=>v(a),children:m("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},a.id)})})]})}),e("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:e("div",{className:"sm:mb-0 mb-6",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>p(),children:"Add Item"})})})]})]},"Quote Items")})})})},J=()=>{const d=y(a=>a.vendorRfqForm),c=q(),[l,h]=_.useState([]),n=(a,r,o)=>{const u=l.find(s=>s.id===o),x=l.findIndex(s=>s.id===o),t={...u,[a]:r},f={...l,[x]:t};h(Object.values(f)),c(N({offered_products:f}))},p=()=>{let a;a=l!=null&&l.length?l.reduce((o,u)=>u.id>o?u.id:o,l[0].id):0;let r=[...l,{id:a+1}];h(r),c(N({offered_products:r}))};_.useEffect(()=>{h(Object.values(d.offered_products))},[]);const g=[{label:"-None-",value:"none"},{label:"Stock",value:"stock"},{label:"Lead Time",value:"lead_time"}],v=(a=null)=>{const r=l.filter(o=>o.id!=a.id);h(r),c(N({offered_products:r}))};return e(V,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12 ",children:m("div",{className:"",children:[e("div",{className:"text-lg",children:"Offered Products :"}),m("div",{className:"mt-8",children:[e("div",{className:"overflow-x-auto	w-11/12",children:m("table",{className:"table-auto w-5",children:[e("thead",{children:m("tr",{children:[e("th",{className:"w-1",children:"Offered MPN"}),e("th",{className:"w-1",children:"Offered Manufacturer"}),e("th",{className:"w-1",children:"Offered Quantity"}),e("th",{className:"w-1",children:"Offered Price (USD)"}),e("th",{className:"w-1",children:"D/C"}),e("th",{className:"w-1",children:"Offered Lead Time"}),e("th",{className:"w-1",children:"Comments"})]})}),e("tbody",{children:l.map(a=>{var r,o,u,x,t,f;return m("tr",{className:"align-top",children:[e("td",{children:e(w,{defaultOptions:!1,isMulti:!1,id:"product_id",name:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:T,onChange:({value:s})=>{n("product_id",s,a.id)},menuPortalTarget:document.body,defaultValue:{value:(r=a.product)==null?void 0:r.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(o=a.product)==null?void 0:o.product_name})})},(u=a.product)==null?void 0:u.id)},className:"flex-1  min-w-[200px]"})}),e("td",{children:e(w,{defaultOptions:!0,isMulti:!1,id:"manufacturer_id",name:"manufacturer_id",placeholder:"Type at least 2 characters to search...",loadOptions:D,onChange:({value:s})=>{n("manufacturer_id",s,a.id)},menuPortalTarget:document.body,defaultValue:{value:(x=a.manufacturer)==null?void 0:x.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(t=a.manufacturer)==null?void 0:t.name})})},(f=a.manufacturer)==null?void 0:f.id)},className:"flex-1  min-w-[200px]"})}),e("td",{children:e("input",{name:"quantity",type:"text",className:"form-input min-w-[200px]",onChange:s=>n(s.target.name,s.target.value,a.id),defaultValue:a.quantity})}),e("td",{children:e("input",{name:"price",type:"text",className:"form-input min-w-[200px]",onChange:s=>n(s.target.name,s.target.value,a.id),defaultValue:a.price})}),e("td",{children:e("input",{name:"dc",type:"text",className:"form-input min-w-[200px]",onChange:s=>n(s.target.name,s.target.value,a.id),defaultValue:a.dc})}),e("td",{children:e(C,{options:g,name:"offer_lead_time",id:"offer_lead_time",onChange:({value:s})=>{n("offer_lead_time",s,a.id)},menuPlacement:"top",menuPortalTarget:document.body,defaultValue:g.find(s=>s.value==a.offer_lead_time),className:"flex-1 min-w-[200px]"})}),e("td",{children:e("textarea",{name:"comment",className:"form-input min-w-[200px]",defaultValue:a.comment,onChange:s=>n(s.target.name,s.target.value,a.id)})}),e("td",{children:e("button",{type:"button",onClick:()=>v(a),children:m("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},a.id)})})]})}),e("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:e("div",{className:"sm:mb-0 mb-6",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>p(),children:"Add Item"})})})]})]},"Quote Items")})})})},z=()=>{const d=y(n=>n.vendorRfqForm),c=q();new I;const l=(n,p)=>{c(N({[n]:p}))},h={Development:{"Requested Products JSON":e("textarea",{id:"requested_products",rows:2,name:"requested_products",className:"form-textarea flex-1",placeholder:"",defaultValue:d.requested_products.map(n=>{var p;return(p=n==null?void 0:n.product)==null?void 0:p.product_name}),onChange:n=>l(n.target.name,n.target.value)})},"":{"Is full":e("input",{id:"is_full",type:"checkbox",name:"is_full",className:"form-checkbox",onChange:n=>l(n.target.name,n.target.checked),defaultChecked:d.is_full})}};return e(V,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(j,{fields:h})})})},H=()=>{const c=M().id;return m("div",{className:"mt-8 px-4",children:[e(W,{},"VendorRFQInformation"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e($,{},"RequestedProducts"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(J,{},"OfferedProducts"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(z,{},"Development"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(B,{modelId:c,modelName:"vendorRfq"})]})},ne=()=>{const{hasPermission:d}=A(),c=y(r=>r.vendorRfqForm),[l,h]=_.useState(!0),p=M().id,g=new I,v=q();_.useEffect(()=>{v(Y("VendorRfq Edit"))}),_.useEffect(()=>{v(F())},[]);const a=async()=>{const r=await g.fetchSingleVendorRfq(p);if(r.status!=200)return;const o=r.data.data.vendorRfq;v(N(o))};return _.useEffect(()=>{a().then(()=>{h(!1)})},[p]),_.useEffect(()=>{v(N({api:"updateSingleVendorRfq",redirectTo:"/vendor_rfq/edit/:id",action:"edit"}))},[]),l?e(S,{}):!d("update-vendor-rfq")||l?e(S,{}):m("div",{className:"px-4",children:[e(G,{formState:c,resetForm:F}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(H,{})})})]})};export{ne as default};