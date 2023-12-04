import{d as y,u as q,a as I,j as e,l as w,$ as L,b as i,p as k,k as S,z as D,m as A,f as $,F as V,aR as N,r as _,X as M,aH as j,h as Q,c as Y,s as U,aS as F,e as P}from"./main-cf3c5856.js";import{S as C}from"./react-select.esm-37c19862.js";import{G as E,R as b}from"./GenerateFields-c0baefe4.js";import{F as B}from"./index-0e3f8098.js";import{V as T}from"./SelectOptions-522b4ff8.js";import{A as G}from"./AttachmentSection-a80ad856.js";import{A as W}from"./ActionButtonsComponent-f33a2eb9.js";/* empty css                  */import"./index-37c8eb8b.js";const z=()=>{var n,p,g,v,a,r,o,u;const l=y(t=>t.vendorRfqForm),c=q();new I;const d=(t,f)=>{c(N({[t]:f}))},h={"Vendor RFQ Information":{"Vendor RFQ Name":e("input",{id:"vendor_rfq_name",name:"vendor_rfq_name",required:!0,className:"form-input flex-1 ",onChange:t=>d(t.target.name,t.target.value),defaultValue:l.vendor_rfq_name}),"Vendor Name":e(w,{defaultOptions:!0,isMulti:!1,id:"vendor_id",placeholder:"Type at least 2 characters to search...",name:"vendor_id",required:!0,loadOptions:L,onChange:({value:t})=>{d("vendor_id",t)},className:"flex-1",defaultValue:{value:(n=l.vendor)==null?void 0:n.id,label:i("div",{className:"flex items-center",children:[e("div",{className:"text-sm font-bold",children:(p=l.vendor)==null?void 0:p.vendor_name}),e("button",{className:"btn text-xs btn-sm ml-auto",onClick:()=>{var t;return k(`${(t=l.vendor)==null?void 0:t.vendor_name}`)},children:"Copy & Select"})]},(g=l.vendor)==null?void 0:g.id)}}),Status:e(C,{options:T,name:"status",id:"status",required:!0,onChange:({value:t})=>{d("status",t)},className:"flex-1",defaultValue:T.find(t=>t.value==l.status)}),Email:e("input",{id:"email",name:"email",className:"form-input flex-1 ",onChange:t=>d(t.target.name,t.target.value),defaultValue:l.email}),Currency:e(C,{options:S,name:"currency",id:"currency",onChange:({value:t})=>{d("currency",t)},className:"flex-1",defaultValue:S.find(t=>t.value==l.currency)}),"Related RFQs":e(w,{defaultOptions:!0,isMulti:!0,id:"related_rfqs_id",placeholder:"Type at least 2 characters to search...",name:"related_rfqs_id",loadOptions:D,onChange:t=>{d("related_rfqs_id",t.map(f=>f.value))},className:"flex-1",defaultValue:l.related_rfqs?l.related_rfqs.map(t=>({value:t.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:t.rfq_name})})},t.id)})):[]})},"":{Date:e(B,{name:"date",options:{dateFormat:"Y-m-d ",defaultDate:l.date?new Date(l.date):""},defaultValue:l.date,className:"form-input flex-1",placeholder:"YYYY-MM-DD",onChange:(t,f)=>d("date",f)}),"Vendor RFQ Owner":e(w,{defaultOptions:!0,isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:A,onChange:({value:t})=>{d("owner_id",t)},className:"flex-1",defaultValue:{value:(v=l.owner)==null?void 0:v.id,label:i("div",{className:"flex items-center",children:[l.owner?e("img",{src:$(l.owner.avatar_data),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,i("div",{children:[e("div",{className:"text-sm font-bold",children:((a=l.owner)==null?void 0:a.first_name)+" "+((r=l.owner)==null?void 0:r.last_name)}),e("div",{className:"text-xs text-gray-500",children:(o=l.owner)==null?void 0:o.email})]}),e("button",{className:"btn text-xs btn-sm ml-auto",onClick:()=>{var t,f;return k(`${((t=l.owner)==null?void 0:t.first_name)+" "+((f=l.owner)==null?void 0:f.last_name)}`)},children:"Copy & Select"})]},(u=l.owner)==null?void 0:u.id)}}),"Email Opt Out":e("input",{id:"email_opt_out",type:"checkbox",name:"email_opt_out",className:"form-checkbox",onChange:t=>d(t.target.name,t.target.checked),defaultChecked:l.email_opt_out}),"Exchange Rate":e("input",{id:"exchange_rate",name:"exchange_rate",className:"form-input flex-1 ",disabled:!0,onChange:t=>d(t.target.name,t.target.value),defaultValue:1})}};return e(V,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(E,{fields:h})})})},H=()=>{const l=y(a=>a.vendorRfqForm),[c,d]=_.useState([]),h=q(),n=(a,r,o)=>{const u=c.find(s=>s.id===o),t=c.findIndex(s=>s.id===o),f={...u,[a]:r},x=[...c];x[t]=f,d(x),h(N({requested_products:x}))};_.useEffect(()=>{d(Object.values(l.requested_products))},[]);const p=()=>{let a;a=c!=null&&c.length?c.reduce((o,u)=>u.id>o?u.id:o,c[0].id):0;let r=[...c,{id:a+1}];d(r),h(N({requested_products:r}))},g=[{label:"-None-",value:"none"},{label:"Stock",value:"stock"},{label:"Lead Time",value:"lead_time"}],v=(a=null)=>{const r=c.filter(o=>o.id!=a.id);d(r),h(N({requested_products:r}))};return e(V,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12 ",children:i("div",{className:"",children:[e("div",{className:"text-lg",children:"Requested Products :"}),i("div",{className:"mt-8",children:[e("div",{className:"overflow-x-auto	w-11/12",children:i("table",{className:"table-auto w-5",children:[e("thead",{children:i("tr",{children:[i("th",{className:"w-1",children:["Source RFQ ",e(b,{})]}),e("th",{className:"w-1",children:"RFQ Owner Name"}),i("th",{className:"w-1",children:["Product ",e(b,{})]}),e("th",{className:"w-1",children:"Is Alt For This Product"}),i("th",{className:"w-1",children:["Manufacturer ",e(b,{})]}),i("th",{className:"w-1",children:["Quantity ",e(b,{})]}),i("th",{className:"w-1",children:["Lead Time Demand ",e(b,{})]}),e("th",{className:"w-1",children:"Comments"})]})}),e("tbody",{children:c.map(a=>{var r,o,u,t,f,x,s,O,R;return i("tr",{className:"align-top",children:[e("td",{children:e(w,{defaultOptions:!0,isMulti:!1,id:"rfq_id",name:"rfq_id",placeholder:"Type at least 2 characters to search...",loadOptions:D,onChange:({value:m})=>{n("rfq_id",m,a.id)},menuPortalTarget:document.body,defaultValue:{value:(r=a.rfq)==null?void 0:r.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(o=a.rfq)==null?void 0:o.rfq_name})})},(u=a.rfq)==null?void 0:u.id)},className:"flex-1  min-w-[200px]"})}),e("td",{children:e("input",{name:"rfq_owner_name",type:"text",className:"form-input min-w-[200px]",onChange:m=>n(m.target.name,m.target.value,a.id),defaultValue:a.rfq_owner_name})}),e("td",{children:e(w,{defaultOptions:!0,isMulti:!1,id:"product_id",name:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:M,onChange:({value:m})=>{n("product_id",m,a.id)},menuPortalTarget:document.body,defaultValue:{value:(t=a.product)==null?void 0:t.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(f=a.product)==null?void 0:f.product_name})})},(x=a.product)==null?void 0:x.id)},className:"flex-1  min-w-[200px]"})}),e("td",{children:e("input",{name:"alt_product",type:"text",className:"form-input min-w-[200px]",onChange:m=>n(m.target.name,m.target.value,a.id),defaultValue:a.alt_product})}),e("td",{children:e(w,{defaultOptions:!0,isMulti:!1,id:"manufacturer_id",name:"manufacturer_id",placeholder:"Type at least 2 characters to search...",loadOptions:j,onChange:({value:m})=>{n("manufacturer_id",m,a.id)},menuPortalTarget:document.body,defaultValue:{value:(s=a.manufacturer)==null?void 0:s.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(O=a.manufacturer)==null?void 0:O.name})})},(R=a.manufacturer)==null?void 0:R.id)},className:"flex-1  min-w-[200px]"})}),e("td",{children:e("input",{name:"quantity",type:"text",className:"form-input min-w-[200px]",onChange:m=>n(m.target.name,m.target.value,a.id),defaultValue:a.quantity})}),e("td",{children:e(C,{options:g,name:"lead_time_demand",id:"lead_time_demand",onChange:({value:m})=>{n("lead_time_demand",m,a.id)},menuPlacement:"top",menuPortalTarget:document.body,defaultValue:g.find(m=>m.value==a.lead_time_demand),className:"flex-1 min-w-[200px]"})}),e("td",{children:e("textarea",{name:"comment",className:"form-input min-w-[200px]",defaultValue:a.comment,onChange:m=>n(m.target.name,m.target.value,a.id)})}),e("td",{children:e("button",{type:"button",onClick:()=>v(a),children:i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},a.id)})})]})}),e("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:e("div",{className:"sm:mb-0 mb-6",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>p(),children:"Add Item"})})})]})]},"Quote Items")})})})},J=()=>{const l=y(a=>a.vendorRfqForm),c=q(),[d,h]=_.useState([]),n=(a,r,o)=>{const u=d.find(s=>s.id===o),t=d.findIndex(s=>s.id===o),f={...u,[a]:r},x={...d,[t]:f};h(Object.values(x)),c(N({offered_products:x}))},p=()=>{let a;a=d!=null&&d.length?d.reduce((o,u)=>u.id>o?u.id:o,d[0].id):0;let r=[...d,{id:a+1}];h(r),c(N({offered_products:r}))};_.useEffect(()=>{h(Object.values(l.offered_products))},[]);const g=[{label:"-None-",value:"none"},{label:"Stock",value:"stock"},{label:"Lead Time",value:"lead_time"}],v=(a=null)=>{const r=d.filter(o=>o.id!=a.id);h(r),c(N({offered_products:r}))};return e(V,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12 ",children:i("div",{className:"",children:[e("div",{className:"text-lg",children:"Offered Products :"}),i("div",{className:"mt-8",children:[e("div",{className:"overflow-x-auto	w-11/12",children:i("table",{className:"table-auto w-5",children:[e("thead",{children:i("tr",{children:[e("th",{className:"w-1",children:"Offered MPN"}),e("th",{className:"w-1",children:"Offered Manufacturer"}),e("th",{className:"w-1",children:"Offered Quantity"}),e("th",{className:"w-1",children:"Offered Price (USD)"}),e("th",{className:"w-1",children:"D/C"}),e("th",{className:"w-1",children:"Offered Lead Time"}),e("th",{className:"w-1",children:"Comments"})]})}),e("tbody",{children:d.map(a=>{var r,o,u,t,f,x;return i("tr",{className:"align-top",children:[e("td",{children:e(w,{defaultOptions:!1,isMulti:!1,id:"product_id",name:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:M,onChange:({value:s})=>{n("product_id",s,a.id)},menuPortalTarget:document.body,defaultValue:{value:(r=a.product)==null?void 0:r.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(o=a.product)==null?void 0:o.product_name})})},(u=a.product)==null?void 0:u.id)},className:"flex-1  min-w-[200px]"})}),e("td",{children:e(w,{defaultOptions:!0,isMulti:!1,id:"manufacturer_id",name:"manufacturer_id",placeholder:"Type at least 2 characters to search...",loadOptions:j,onChange:({value:s})=>{n("manufacturer_id",s,a.id)},menuPortalTarget:document.body,defaultValue:{value:(t=a.manufacturer)==null?void 0:t.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(f=a.manufacturer)==null?void 0:f.name})})},(x=a.manufacturer)==null?void 0:x.id)},className:"flex-1  min-w-[200px]"})}),e("td",{children:e("input",{name:"quantity",type:"text",className:"form-input min-w-[200px]",onChange:s=>n(s.target.name,s.target.value,a.id),defaultValue:a.quantity})}),e("td",{children:e("input",{name:"price",type:"text",className:"form-input min-w-[200px]",onChange:s=>n(s.target.name,s.target.value,a.id),defaultValue:a.price})}),e("td",{children:e("input",{name:"dc",type:"text",className:"form-input min-w-[200px]",onChange:s=>n(s.target.name,s.target.value,a.id),defaultValue:a.dc})}),e("td",{children:e(C,{options:g,name:"offer_lead_time",id:"offer_lead_time",onChange:({value:s})=>{n("offer_lead_time",s,a.id)},menuPlacement:"top",menuPortalTarget:document.body,defaultValue:g.find(s=>s.value==a.offer_lead_time),className:"flex-1 min-w-[200px]"})}),e("td",{children:e("textarea",{name:"comment",className:"form-input min-w-[200px]",defaultValue:a.comment,onChange:s=>n(s.target.name,s.target.value,a.id)})}),e("td",{children:e("button",{type:"button",onClick:()=>v(a),children:i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},a.id)})})]})}),e("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:e("div",{className:"sm:mb-0 mb-6",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>p(),children:"Add Item"})})})]})]},"Quote Items")})})})},X=()=>{const l=y(n=>n.vendorRfqForm),c=q();new I;const d=(n,p)=>{c(N({[n]:p}))},h={Development:{"Requested Products JSON":e("textarea",{id:"requested_products",rows:2,name:"requested_products",className:"form-textarea flex-1",placeholder:"",defaultValue:l.requested_products.map(n=>{var p;return(p=n==null?void 0:n.product)==null?void 0:p.product_name}),onChange:n=>d(n.target.name,n.target.value)})},"":{"Is full":e("input",{id:"is_full",type:"checkbox",name:"is_full",className:"form-checkbox",onChange:n=>d(n.target.name,n.target.checked),defaultChecked:l.is_full})}};return e(V,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(E,{fields:h})})})},K=()=>{const c=Q().id;return i("div",{className:"mt-8 px-4",children:[e(z,{},"VendorRFQInformation"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(H,{},"RequestedProducts"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(J,{},"OfferedProducts"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(X,{},"Development"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(G,{modelId:c,modelName:"vendorRfq"})]})},oe=()=>{const{hasPermission:l}=Y(),c=y(r=>r.vendorRfqForm),[d,h]=_.useState(!0),p=Q().id,g=new I,v=q();_.useEffect(()=>{v(U("VendorRfq Edit"))}),_.useEffect(()=>{v(F())},[]);const a=async()=>{const r=await g.fetchSingleVendorRfq(p);if(r.status!=200)return;const o=r.data.data.vendorRfq;v(N(o))};return _.useEffect(()=>{a().then(()=>{h(!1)})},[p]),_.useEffect(()=>{v(N({api:"updateSingleVendorRfq",redirectTo:"/vendor_rfq/edit/:id",action:"edit"}))},[]),d?e(P,{}):!l("update-vendor-rfq")||d?e(P,{}):i("div",{className:"px-4",children:[e(W,{formState:c,resetForm:F}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(K,{})})})]})};export{oe as default};
