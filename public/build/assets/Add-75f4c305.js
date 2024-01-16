import{d as p,u as g,a as O,j as e,l as m,$ as P,k as y,z as F,m as S,F as w,aR as u,r as _,b as l,X as R,aH as k,c as T,s as V,aS as q,e as M}from"./main-38fe5343.js";import{S as N}from"./react-select.esm-c9ae4ddb.js";import{G as I,R as f}from"./GenerateFields-93e4149c.js";import{F as D}from"./index-09ca2f26.js";import{V as C}from"./SelectOptions-c7baecc3.js";import{A as j}from"./ActionButtonsComponent-85ee23fd.js";/* empty css                  */import"./index-ee82f402.js";const Q=()=>{p(t=>t.vendorRfqForm);const i=g();new O;const r=(t,d)=>{i(u({[t]:d}))},s={"Vendor RFQ Information":{"Vendor RFQ Name":e("input",{id:"vendor_rfq_name",name:"vendor_rfq_name",className:"form-input flex-1 ",required:!0,onChange:t=>r(t.target.name,t.target.value)}),"Vendor Name":e(m,{defaultOptions:!0,isMulti:!1,id:"vendor_id",placeholder:"Type at least 2 characters to search...",name:"vendor_id",required:!0,loadOptions:P,onChange:({value:t})=>{r("vendor_id",t)},className:"flex-1"}),Status:e(N,{options:C,name:"status",id:"status",required:!0,onChange:({value:t})=>{r("status",t)},className:"flex-1",defaultValue:C.find(t=>t.value=="Draft")}),Email:e("input",{id:"email",name:"email",className:"form-input flex-1 ",onChange:t=>r(t.target.name,t.target.value)}),Currency:e(N,{options:y,name:"currency",id:"currency",onChange:({value:t})=>{r("currency",t)},className:"flex-1",defaultValue:y.find(t=>t.value=="EUR")}),"Related RFQs":e(m,{defaultOptions:!0,isMulti:!0,id:"related_rfqs_id",placeholder:"Type at least 2 characters to search...",name:"related_rfqs_id",loadOptions:F,onChange:t=>{r("related_rfqs_id",t.map(d=>d.value))},className:"flex-1"})},"":{Date:e(D,{name:"date",options:{dateFormat:"Y-m-d "},className:"form-input flex-1",placeholder:"YYYY-MM-DD",onChange:(t,d)=>r("date",d)}),"Vendor RFQ Owner":e(m,{defaultOptions:!0,isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:S,onChange:({value:t})=>{r("owner_id",t)},className:"flex-1"}),"Email Opt Out":e("input",{id:"email_opt_out",type:"checkbox",name:"email_opt_out",className:"form-checkbox",onChange:t=>r(t.target.name,t.target.checked)}),"Exchange Rate":e("input",{id:"exchange_rate",name:"exchange_rate",className:"form-input flex-1 ",disabled:!0,onChange:t=>r(t.target.name,t.target.value),defaultValue:1})}};return e(w,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(I,{fields:s})})})},L=()=>{const i=p(n=>n.vendorRfqForm),[r,s]=_.useState([{id:0,rfq_id:"",alt_product:"",comment:"",lead_time_demand:"",manufacturer_id:"",product_id:"",quantity:"",rfq_owner_name:""}]),t=g(),d=(n,a,o)=>{const c={...i.requested_products[o],[n]:a},h={...i.requested_products,[o]:c};s(Object.values(h)),t(u({requested_products:h}))},v=()=>{let n;n=r!=null&&r.length?r.reduce((o,c)=>c.id>o?c.id:o,r[0].id):0;let a=[...r,{id:n+1}];s(a),t(u({requested_products:a}))},x=[{label:"-None-",value:"none"},{label:"Stock",value:"stock"},{label:"Lead Time",value:"lead_time"}],b=(n=null)=>{const a=r.filter(o=>o.id!=n.id);s(a),t(u({requested_products:a}))};return e(w,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12 ",children:l("div",{className:"",children:[e("div",{className:"text-lg",children:"Requested Products :"}),l("div",{className:"mt-8",children:[e("div",{className:"overflow-x-auto	w-11/12",children:l("table",{className:"table-auto w-5",children:[e("thead",{children:l("tr",{children:[l("th",{className:"w-1",children:["Source RFQ ",e(f,{})]}),e("th",{className:"w-1",children:"RFQ Owner Name"}),l("th",{className:"w-1",children:["Product ",e(f,{})]}),e("th",{className:"w-1",children:"Is Alt For This Product"}),l("th",{className:"w-1",children:["Manufacturer ",e(f,{})]}),l("th",{className:"w-1",children:["Quantity ",e(f,{})]}),l("th",{className:"w-1",children:["Lead Time Demand ",e(f,{})]}),e("th",{className:"w-1",children:"Comments"})]})}),e("tbody",{children:r.map(n=>l("tr",{className:"align-top",children:[e("td",{children:e(m,{defaultOptions:!0,isMulti:!1,id:"rfq_id",name:"rfq_id",placeholder:"Type at least 2 characters to search...",loadOptions:F,onChange:({value:a})=>{d("rfq_id",a,n.id)},menuPortalTarget:document.body,className:"flex-1  min-w-[200px]"})}),e("td",{children:e("input",{name:"rfq_owner_name",type:"text",className:"form-input min-w-[200px]",onChange:a=>d(a.target.name,a.target.value,n.id),defaultValue:n.rfq_owner_name})}),e("td",{children:e(m,{defaultOptions:!0,isMulti:!1,id:"product_id",name:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:R,menuPortalTarget:document.body,onChange:({value:a})=>{d("product_id",a,n.id)},className:"flex-1  min-w-[200px]"})}),e("td",{children:e("input",{name:"alt_product",type:"text",className:"form-input min-w-[200px]",onChange:a=>d(a.target.name,a.target.value,n.id),defaultValue:n.alt_product})}),e("td",{children:e(m,{defaultOptions:!0,isMulti:!1,id:"manufacturer_id",name:"manufacturer_id",placeholder:"Type at least 2 characters to search...",loadOptions:k,onChange:({value:a})=>{d("manufacturer_id",a,n.id)},menuPortalTarget:document.body,className:"flex-1  min-w-[200px]"})}),e("td",{children:e("input",{name:"quantity",id:"quantity",type:"number",className:"form-input min-w-[200px]",min:0,onChange:a=>d(a.target.name,a.target.value,n.id),defaultValue:n.quantity})}),e("td",{children:e(N,{options:x,name:"lead_time_demand",id:"lead_time_demand",onChange:({value:a})=>{d("lead_time_demand",a,n.id)},menuPlacement:"top",defaultValue:x.find(a=>a.value==i.lead_time_demand),menuPortalTarget:document.body,className:"flex-1 min-w-[200px]"})}),e("td",{children:e("textarea",{name:"comment",className:"form-input min-w-[200px]",defaultValue:n.date_code,onChange:a=>d(a.target.name,a.target.value,n.id)})}),e("td",{children:e("button",{type:"button",onClick:()=>b(n),children:l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},n.id))})]})}),e("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:e("div",{className:"sm:mb-0 mb-6",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>v(),children:"Add Item"})})})]})]},"Requested Products Items")})})})},A=()=>{const i=p(n=>n.vendorRfqForm),r=g(),s=(n,a,o)=>{const c={...i.offered_products[o],[n]:a},h={...i.offered_products,[o]:c};d(Object.values(h)),r(u({offered_products:h}))},[t,d]=_.useState([{id:1}]),v=()=>{let n;n=t!=null&&t.length?t.reduce((o,c)=>c.id>o?c.id:o,t[0].id):0;let a=[...t,{id:n+1,name:"",part_id:"",quantity:1,SPQ:"",list_price:"",lead_time:"",date_code:"",comment:"",amount:0}];d(a),r(u({offered_products:a}))},x=[{label:"-None-",value:"none"},{label:"Stock",value:"stock"},{label:"Lead Time",value:"lead_time"}],b=(n=null)=>{const a=t.filter(o=>o.id!=n.id);d(a),r(u({offered_products:a}))};return e(w,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12 ",children:l("div",{className:"",children:[e("div",{className:"text-lg",children:"Offered Products :"}),l("div",{className:"mt-8",children:[e("div",{className:"overflow-x-auto	w-11/12",children:l("table",{className:"table-auto w-5",children:[e("thead",{children:l("tr",{children:[e("th",{className:"w-1",children:"Offered MPN"}),e("th",{className:"w-1",children:"Offered Manufacturer"}),e("th",{className:"w-1",children:"Offered Quantity"}),e("th",{className:"w-1",children:"Offered Price (USD)"}),e("th",{className:"w-1",children:"D/C"}),e("th",{className:"w-1",children:"Offered Lead Time"}),e("th",{className:"w-1",children:"Comments"})]})}),e("tbody",{children:t.map(n=>l("tr",{className:"align-top",children:[e("td",{children:e(m,{defaultOptions:!1,isMulti:!1,id:"product_id",name:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:R,onChange:({value:a})=>{s("product_id",a,n.id)},menuPortalTarget:document.body,className:"flex-1  min-w-[200px]"})}),e("td",{children:e(m,{defaultOptions:!0,isMulti:!1,id:"manufacturer_id",name:"manufacturer_id",placeholder:"Type at least 2 characters to search...",loadOptions:k,onChange:({value:a})=>{s("manufacturer_id",a,n.id)},menuPortalTarget:document.body,className:"flex-1  min-w-[200px]"})}),e("td",{children:e("input",{name:"quantity",type:"text",className:"form-input min-w-[200px]",onChange:a=>s(a.target.name,a.target.value,n.id),defaultValue:n.quantity})}),e("td",{children:e("input",{name:"price",type:"text",className:"form-input min-w-[200px]",onChange:a=>s(a.target.name,a.target.value,n.id),defaultValue:n.price})}),e("td",{children:e("input",{name:"dc",type:"text",className:"form-input min-w-[200px]",onChange:a=>s(a.target.name,a.target.value,n.id),defaultValue:n.dc})}),e("td",{children:e(N,{options:x,name:"offer_lead_time",id:"offer_lead_time",onChange:({value:a})=>{s("offer_lead_time",a,n.id)},menuPlacement:"top",menuPortalTarget:document.body,className:"flex-1 min-w-[200px]"})}),e("td",{children:e("textarea",{name:"comment",className:"form-input min-w-[200px]",defaultValue:n.date_code,onChange:a=>s(a.target.name,a.target.value,n.id)})}),e("td",{children:e("button",{type:"button",onClick:()=>b(n),children:l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},n.id))})]})}),e("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:e("div",{className:"sm:mb-0 mb-6",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>v(),children:"Add Item"})})})]})]},"Quote Items")})})})},E=()=>{p(t=>t.vendorRfqForm);const i=g();new O;const r=(t,d)=>{i(u({[t]:d}))};return e(w,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(I,{fields:{Development:{"Requested Products JSON":e("textarea",{id:"requested_products",rows:2,name:"requested_products",className:"form-textarea flex-1",placeholder:""})},"":{"Is full":e("input",{id:"is_full",type:"checkbox",name:"is_full",className:"form-checkbox",onChange:t=>r(t.target.name,t.target.checked)})}}})})})},Y=()=>l("div",{className:"mt-8 px-4",children:[e(Q,{},"VendorRFQInformation"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(L,{},"RequestedProducts"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(A,{},"OfferedProducts"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(E,{},"Development")]}),X=()=>{const{hasPermission:i}=T(),r=p(t=>t.vendorRfqForm),s=g();return _.useEffect(()=>{s(V("Vendor Rfq Add"))}),_.useEffect(()=>{s(q())},[]),i("create-vendor-rfq")?l("div",{className:"px-4",children:[e(j,{formState:r,resetForm:q}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(Y,{})})})]}):e(M,{})};export{X as default};
