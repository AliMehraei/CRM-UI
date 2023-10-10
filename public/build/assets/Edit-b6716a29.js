import{u as x,d as S,a as N,b as e,j as g,F as O,t as v,r as q,c as ae,h as te,q as le,s as ie,v as G,g as W}from"./main-59cbf5a2.js";import{A as y}from"./react-select-async.esm-96f15c35.js";import{G as V,R as ne,A as se}from"./GenerateFields-f061e9aa.js";import{S as I}from"./react-select.esm-c741d15b.js";import{b as re,c as de,f as oe,a as Z,l as ce,s as F,h as ue,S as J,m as X,o as me,p as K,n as pe}from"./CommonFunctions-28e44b71.js";import{F as k}from"./index-e0117331.js";/* empty css                  */import{S as fe}from"./sweetalert2.all-dc82e6bd.js";import"./Select-aecb2a80.esm-c01a41cb.js";const he=()=>{var i,m,r,_,s,p,o,f,d,t,b,C,w,D,A,T,j,P,E,B,L,M,R,Q,$,Y,U,z,H;const h=x();new S;const a=N(u=>u.salesOrderForm),l=(u,ee)=>{h(v({[u]:ee}))},c=[{value:"none",label:"-None-"},{value:"draft",label:"Draft"},{value:"no_feedback",label:"No Feedback"},{value:"open",label:"open"},{value:"lost",label:"lost"}],n={Header:{"Account Name":e(y,{isMulti:!1,required:!0,id:"account_id",placeholder:"Type at least 2 characters to search...",name:"account_id",loadOptions:re,onChange:({value:u})=>{l("account_id",u)},className:"flex-1",defaultValue:{value:(i=a.account)==null?void 0:i.id,label:e("div",{className:"flex items-center",children:g("div",{children:[e("div",{className:"text-sm font-bold",children:(m=a.account)==null?void 0:m.account_name}),e("div",{className:"text-xs text-gray-500",children:(r=a.account)==null?void 0:r.email})]})},(_=a.account)==null?void 0:_.id)}}),"Contact Name":e(y,{isMulti:!1,required:!0,id:"contact_id",placeholder:"Type at least 2 characters to search...",name:"contact_id",loadOptions:de,onChange:({value:u})=>{l("contact_id",u)},className:"flex-1",defaultValue:{value:(s=a.contact)==null?void 0:s.id,label:g("div",{className:"flex items-center",children:[a.contact?e("img",{src:a.contact.image??"/assets/images/user-profile.jpeg",alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,g("div",{children:[e("div",{className:"text-sm font-bold",children:((p=a.contact)==null?void 0:p.first_name)+" "+((o=a.contact)==null?void 0:o.last_name)}),e("div",{className:"text-xs text-gray-500",children:(f=a.contact)==null?void 0:f.email})]})]},(d=a.contact)==null?void 0:d.id)}}),"Quote Name":e(y,{isMulti:!1,id:"quote_id",placeholder:"Type at least 2 characters to search...",name:"quote_id",loadOptions:oe,onChange:({value:u})=>{l("quote_id",u)},className:"flex-1",defaultValue:{value:(t=a.quote)==null?void 0:t.id,label:e("div",{className:"flex items-center",children:e("div",{className:"text-sm font-bold",children:(b=a.quote)==null?void 0:b.subject})},(C=a.quote)==null?void 0:C.id)}}),Currency:e(I,{options:Z,name:"currency",id:"currency",onChange:({value:u})=>{l("currency",u)},className:"flex-1",defaultValue:Z.find(u=>u.value==a.currency)})},"":{"Deals Name":e(y,{isMulti:!1,required:!0,id:"deal_id",placeholder:"Type at least 2 characters to search...",name:"deal_id",loadOptions:ce,onChange:({value:u})=>{l("deal_id",u)},className:"flex-1",defaultValue:{value:(w=a.deal)==null?void 0:w.id,label:e("div",{className:"flex items-center",children:e("div",{className:"text-sm font-bold",children:(D=a.deal)==null?void 0:D.deal_name})},(A=a.deal)==null?void 0:A.id)}}),"Deal Stage":e(I,{options:c,name:"deal_stage",id:"deal_stage",onChange:({value:u})=>{l("deal_stage",u)},className:"flex-1",defaultValue:c.find(u=>u.value==a.deal_stage)}),"SalesOrders Owner":e(y,{isMulti:!1,required:!0,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:F,onChange:({value:u})=>{l("owner_id",u)},className:"flex-1",defaultValue:{value:(T=a.owner)==null?void 0:T.id,label:g("div",{className:"flex items-center",children:[a.owner?e("img",{src:a.owner.image??"/assets/images/user-profile.jpeg",alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,g("div",{children:[e("div",{className:"text-sm font-bold",children:((j=a.owner)==null?void 0:j.first_name)+" "+((P=a.owner)==null?void 0:P.last_name)}),e("div",{className:"text-xs text-gray-500",children:(E=a.owner)==null?void 0:E.email})]})]},(B=a.owner)==null?void 0:B.id)}}),"Sales Person":e(y,{isMulti:!1,required:!0,id:"sales_person_id",placeholder:"Type at least 2 characters to search...",name:"sales_person_id",loadOptions:F,onChange:({value:u})=>{l("sales_person_id",u)},className:"flex-1",defaultValue:{value:(L=a.sales_person)==null?void 0:L.id,label:g("div",{className:"flex items-center",children:[a.sales_person?e("img",{src:a.sales_person.image??"/assets/images/user-profile.jpeg",alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,g("div",{children:[e("div",{className:"text-sm font-bold",children:(M=a.sales_person)==null?void 0:M.name}),e("div",{className:"text-xs text-gray-500",children:(R=a.sales_person)==null?void 0:R.email})]})]},(Q=a.sales_person)==null?void 0:Q.id)}}),"Approved By":e(y,{isMulti:!1,id:"approved_by_id",required:!0,placeholder:"Type at least 2 characters to search...",name:"approved_by_id",loadOptions:F,onChange:({value:u})=>{l("approved_by_id",u)},className:"flex-1",defaultValue:{value:($=a.approved_by)==null?void 0:$.id,label:g("div",{className:"flex items-center",children:[a.approved_by?e("img",{src:a.approved_by.image??"/assets/images/user-profile.jpeg",alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,g("div",{children:[e("div",{className:"text-sm font-bold",children:((Y=a.approved_by)==null?void 0:Y.first_name)+" "+((U=a.approved_by)==null?void 0:U.last_name)}),e("div",{className:"text-xs text-gray-500",children:(z=a.approved_by)==null?void 0:z.email})]})]},(H=a.approved_by)==null?void 0:H.id)}}),"Exchange Rate":e("input",{id:"exchange_rate",name:"exchange_rate",type:"text",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0,defaultValue:a.exchange_rate??1})}};return e(O,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(V,{fields:n})})})},ge=()=>{const h=x();new S;const a=N(i=>i.salesOrderForm),l=(i,m)=>{h(v({[i]:m}))},c=[{value:"none",label:"-None-"},{value:"single_order",label:"Single Order"},{value:"frame_contract",label:"Frame Contract"},{value:"call_off",label:"Call Off"},{value:"forecast",label:"Forecast"}],n={"Sales Orders Information":{"Purchase Order":e("input",{id:"purchase_order",name:"purchase_order",className:"form-input flex-1 ",onChange:i=>l(i.target.name,i.target.value),defaultValue:a.purchase_order}),"Customer PO Date":e(k,{options:{dateFormat:"Y-m-d ",position:"auto left",defaultDate:a.customer_po_date?new Date(a.customer_po_date):null},name:"customer_po_date",value:a.customer_po_date?new Date(a.customer_po_date):"",className:"form-input flex-1",onChange:(i,m)=>l("customer_po_date",m)}),"PO Upload":g("div",{className:"flex",children:[e("input",{id:"po_upload",type:"file",className:"form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1",accept:"*",onChange:i=>ue(i,m=>{h(v({po_upload:`${m==null?void 0:m.data.data.file_url}`}))}),name:"po_upload"},"po_upload"),e("a",{className:"ml-1 btn btn-outline-primary",href:a.po_upload,target:"_blank",children:"Download"})]}),"SO Type":e(I,{options:c,name:"so_type",id:"so_type",onChange:({value:i})=>{l("so_type",i)},className:"flex-1",defaultValue:c.find(i=>i.value==a.so_type)}),"Parent SO Nr.":e("input",{id:"parent_so_nr",name:"parent_so_nr",className:"form-input flex-1 ",onChange:i=>l(i.target.name,i.target.value),defaultValue:a.parent_so_nr})},"":{Subject:e("input",{id:"subject",required:!0,name:"subject",className:"form-input flex-1 ",onChange:i=>l(i.target.name,i.target.value),defaultValue:a.subject}),Pending:e("input",{id:"pending",name:"pending",className:"form-input flex-1 ",onChange:i=>l(i.target.name,i.target.value),defaultValue:a.pending}),Status:e(I,{options:J,name:"status",id:"status",onChange:({value:i})=>{l("status",i)},className:"flex-1",defaultValue:J.find(i=>i.value==a.status)}),ZohoBooksID:e("input",{id:"zoho_books_id",name:"zoho_books_id",className:"form-input flex-1 ",onChange:i=>l(i.target.name,i.target.value),defaultValue:a.zoho_books_id})}};return e(O,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(V,{fields:n})})})},_e=()=>{const h=N(s=>s.salesOrderForm),[a,l]=q.useState([]),c=x(),n=new S,i=(s,p,o)=>{const f=a.find(w=>w.id===o),d=a.findIndex(w=>w.id===o),t={...f,[s]:p},b={...t,amount:parseInt(t.quantity??0)*parseFloat(t.list_price??0)},C={...a,[d]:b};l(Object.values(C)),c(v({items:C}))},m=async(s,p)=>{const o=await n.fetchSingleProduct(s);if(o.status!==200)return;const f=o.data.data.product,d=a.find(D=>D.id===p),t=a.findIndex(D=>D.id===p),b={...d,product_id:s,list_price:f.unit_price??0,description:f.description},C={...b,amount:parseInt(b.quantity??0)*parseFloat(b.list_price??0)},w={...a,[t]:C};l(Object.values(w)),c(v({items:w}))},r=()=>{let s;s=a!=null&&a.length?a.reduce((o,f)=>f.id>o?f.id:o,a[0].id):0;let p=[...a,{id:s+1,amount:0,list_price:0}];l(p),c(v({items:p}))},_=(s=null)=>{const p=a.filter(o=>o.id!=s.id);l(p),c(v({items:p}))};return q.useEffect(()=>{l(Object.values(h.items))},[]),e(O,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12 ",children:g("div",{className:"",children:[g("div",{className:"text-lg",children:["Ordered Items",e(ne,{})," :"]}),g("div",{className:"mt-8",children:[e("div",{className:"overflow-x-auto	w-11/12",children:g("table",{className:"table-auto w-5",children:[e("thead",{children:g("tr",{children:[e("th",{className:"w-1",children:"Product Name"}),e("th",{className:"w-1",children:"Quantity"}),e("th",{className:"w-1",children:"Customer Part ID"}),e("th",{className:"w-1",children:"List Price"}),e("th",{className:"w-1",children:"Date Code"}),e("th",{className:"w-1",children:"Amount"}),e("th",{className:"w-1",children:"Requested Delivery Date"}),e("th",{className:"w-1",children:"Estimated Delivery Date"})]})}),e("tbody",{children:a.map(s=>{var p,o,f;return g("tr",{className:"align-top",children:[g("td",{children:[e(y,{isMulti:!1,id:"product_id",name:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:X,onChange:({value:d})=>{m(d,s.id)},defaultValue:s.product?{value:(p=s.product)==null?void 0:p.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(o=s.product)==null?void 0:o.product_name})})},(f=s.product)==null?void 0:f.id)}:null,className:"flex-1  min-w-[200px]"}),e("textarea",{name:"description",className:"form-textarea mt-4",placeholder:"Enter Description",onChange:d=>i(d.target.name,d.target.value,s.id),defaultValue:s.description})]}),e("td",{children:e("input",{type:"number",className:"form-input w-32",placeholder:"Quantity",name:"quantity",min:0,onChange:d=>i(d.target.name,d.target.value,s.id),defaultValue:s.quantity})}),e("td",{children:e("input",{name:"customer_part_id",type:"text",className:"form-input min-w-[200px]",onChange:d=>i(d.target.name,d.target.value,s.id),defaultValue:s.customer_part_id})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",placeholder:"Price",name:"list_price",min:0,defaultValue:s.list_price,onChange:d=>i(d.target.name,d.target.value,s.id)})}),e("td",{children:e("input",{name:"date_code",type:"text",className:"form-input min-w-[200px]",defaultValue:s.date_code,onChange:d=>i(d.target.name,d.target.value,s.id)})}),e("td",{children:e("input",{name:"amount",type:"text",value:s.amount,className:"flex-1 form-input min-w-[200px] disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0,onChange:d=>i(d.target.name,d.target.value,s.id)})}),e("td",{children:e(k,{name:"requested_delivery_date",options:{dateFormat:"Y-m-d",position:"auto left",defaultDate:`${s.requested_delivery_date?new Date(s.requested_delivery_date):""}`},placeholder:"Y-m-d",className:"form-input flex-1 min-w-[200px]",onChange:(d,t)=>i("requested_delivery_date",t,s.id),defaultValue:s.requested_delivery_date})}),e("td",{children:e(k,{name:"estimated_delivery_date",options:{dateFormat:"Y-m-d",position:"auto left",defaultDate:`${s.estimated_delivery_date?new Date(s.estimated_delivery_date):""}`},placeholder:"Y-m-d",className:"form-input flex-1 min-w-[200px]",onChange:(d,t)=>i("estimated_delivery_date",t,s.id),defaultValue:s.estimated_delivery_date})}),e("td",{children:e("button",{type:"button",onClick:()=>_(s),children:g("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},s.id)})})]})}),e("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:e("div",{className:"sm:mb-0 mb-6",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>r(),children:"Add Item"})})})]})]},"Quote Items")})})})},ve=()=>{var n,i,m;const h=x();new S;const a=N(r=>r.salesOrderForm),l=(r,_)=>{h(v({[r]:_}))},c={"SO line":{"Requested Delivery Date":e(k,{options:{dateFormat:"Y-m-d ",position:"auto left",defaultDate:a.requested_delivery_date?new Date(a.requested_delivery_date):null},name:"requested_delivery_date",value:a.requested_delivery_date?new Date(a.requested_delivery_date):"",className:"form-input flex-1",onChange:(r,_)=>l("requested_delivery_date",_)}),"Product Name":e(y,{isMulti:!1,required:!0,id:"product_id",placeholder:"Type at least 2 characters to search...",name:"product_id",loadOptions:X,onChange:({value:r})=>{l("product_id",r)},className:"flex-1",defaultValue:{value:(n=a.product)==null?void 0:n.id,label:e("div",{className:"flex items-center",children:e("div",{className:"text-sm font-bold",children:(i=a.product)==null?void 0:i.product_name})},(m=a.product)==null?void 0:m.id)}}),"Customer part Id":e("input",{id:"customer_part_id",name:"customer_part_id",className:"form-input flex-1 ",onChange:r=>l(r.target.name,r.target.value),defaultValue:a.customer_part_id}),Quantity:e("input",{id:"quantity",name:"quantity",className:"form-input flex-1 ",type:"number",onChange:r=>l(r.target.name,r.target.value),defaultValue:a.quantity}),"List Price":e("input",{type:"number",id:"list_price",name:"list_price",className:"form-input flex-1 ",onChange:r=>l(r.target.name,r.target.value),defaultValue:a.list_price})},"":{"Estimated Delivery Date":e(k,{options:{dateFormat:"Y-m-d ",position:"auto left",defaultDate:a.estimated_delivery_date?new Date(a.estimated_delivery_date):null},name:"estimated_delivery_date",value:a.estimated_delivery_date?new Date(a.estimated_delivery_date):"",className:"form-input flex-1",onChange:(r,_)=>l("estimated_delivery_date",_)}),"Date Code":e("input",{id:"date_code",name:"date_code",className:"form-input flex-1 ",onChange:r=>l(r.target.name,r.target.value),defaultValue:a.date_code}),SPQ:e("input",{id:"spq",name:"spq",className:"form-input flex-1 ",onChange:r=>l(r.target.name,r.target.value),defaultValue:a.spq}),comment:e("input",{id:"comment",name:"comment",className:"form-input flex-1 ",onChange:r=>l(r.target.name,r.target.value),defaultValue:a.comment})}};return e(O,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(V,{fields:c})})})},be=()=>{var m,r,_,s,p,o,f,d;const h=x(),a=new S,l=N(t=>t.salesOrderForm),c=(t,b)=>{h(v({[t]:b}))},n=async t=>{const b=await a.fetchSingleAvailability(t);if(b.status!=200)return;const C=b.data.data.availability;h(v({availability:C}))},i={"Linked Availability":{"Availability Name":e(y,{isMulti:!1,id:"availability_id",placeholder:"Type at least 2 characters to search...",name:"availability_id",loadOptions:me,onChange:({value:t})=>{c("availability_id",t),n(t)},className:"flex-1",defaultValue:{value:(m=l.availability)==null?void 0:m.id,label:e("div",{className:"flex items-center",children:e("div",{className:"text-sm font-bold",children:(r=l.availability)==null?void 0:r.availability_name})},(_=l.availability)==null?void 0:_.id)}}),"Availability No":e("input",{id:"availability_no",name:"availability_no",className:"form-input flex-1 disabled:pointer-events-none bg-[#eee] ",disabled:!0,onChange:t=>c(t.target.name,t.target.value),defaultValue:(s=l.availability)==null?void 0:s.availability_no}),"Availability Cost":e("input",{type:"number",id:"availability_cost",name:"availability_cost",className:"form-input flex-1  disabled:pointer-events-none bg-[#eee]",disabled:!0,onChange:t=>c(t.target.name,t.target.value),defaultValue:(p=l.availability)==null?void 0:p.cost})},"":{"Availability Quantity":e("input",{type:"number",disabled:!0,id:"availability_quantity",name:"availability_quantity",className:"form-input flex-1 disabled:pointer-events-none bg-[#eee]",onChange:t=>c(t.target.name,t.target.value),defaultValue:(o=l.availability)==null?void 0:o.quantity}),"Availability LT":e("input",{id:"availability_lt",name:"availability_lt",disabled:!0,className:"form-input flex-1 disabled:pointer-events-none bg-[#eee] ",onChange:t=>c(t.target.name,t.target.value),defaultValue:(f=l.availability)==null?void 0:f.lead_time}),"Availability DC":e("input",{disabled:!0,id:"availability_dc",name:"availability_dc",className:"form-input flex-1 disabled:pointer-events-none bg-[#eee]",onChange:t=>c(t.target.name,t.target.value),defaultValue:(d=l.availability)==null?void 0:d.date_code})}};return e(O,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(V,{fields:i})})})},ye=()=>{var n,i,m,r,_,s,p,o,f,d;const h=x();new S;const a=N(t=>t.salesOrderForm),l=(t,b)=>{h(v({[t]:b}))},c={"Address Information":{"Billing Street":e("input",{id:"billing_street",name:"billing_street",required:!0,onChange:t=>l(t.target.name,t.target.value),value:a.billing_street??((n=a.account)==null?void 0:n.billing_street),defaultValue:a.billing_street,className:"form-input flex-1"}),"Billing City":e("input",{id:"billing_city",name:"billing_city",required:!0,value:a.billing_city??((i=a.account)==null?void 0:i.billing_city),defaultValue:a.billing_city,onChange:t=>l(t.target.name,t.target.value),className:"form-input flex-1"}),"Billing State":e("input",{id:"billing_state",name:"billing_state",value:a.billing_state??((m=a.account)==null?void 0:m.billing_state),defaultValue:a.billing_state,onChange:t=>l(t.target.name,t.target.value),className:"form-input flex-1"}),"Billing Code":e("input",{id:"billing_code",name:"billing_code",required:!0,value:a.billing_code??((r=a.account)==null?void 0:r.billing_code),defaultValue:a.billing_code,onChange:t=>l(t.target.name,t.target.value),className:"form-input flex-1"}),"Billing Country":e("input",{id:"billing_country",name:"billing_country",required:!0,value:a.billing_country??((_=a.account)==null?void 0:_.billing_country),defaultValue:a.billing_country,onChange:t=>l(t.target.name,t.target.value),className:"form-input flex-1"})},"":{"Shipping Street":e("input",{id:"shipping_street",name:"shipping_street",defaultValue:a.shipping_street,value:a.shipping_street??((s=a.account)==null?void 0:s.shipping_street),onChange:t=>l(t.target.name,t.target.value),className:"form-input flex-1"}),"Shipping City":e("input",{id:"shipping_city",name:"shipping_city",defaultValue:a.shipping_city,value:a.shipping_city??((p=a.account)==null?void 0:p.shipping_city),onChange:t=>l(t.target.name,t.target.value),className:"form-input flex-1"}),"Shipping State":e("input",{id:"shipping_state",name:"shipping_state",value:a.shipping_state??((o=a.account)==null?void 0:o.shipping_state),defaultValue:a.shipping_state,onChange:t=>l(t.target.name,t.target.value),className:"form-input flex-1"}),"Shipping Code":e("input",{id:"shipping_code",name:"shipping_code",value:a.shipping_code??((f=a.account)==null?void 0:f.shipping_code),defaultValue:a.shipping_code,onChange:t=>l(t.target.name,t.target.value),className:"form-input flex-1"}),"Shipping Country":e("input",{id:"shipping_country",name:"shipping_country",value:a.shipping_country??((d=a.account)==null?void 0:d.shipping_country),defaultValue:a.shipping_country,onChange:t=>l(t.target.name,t.target.value),className:"form-input flex-1"})}};return e(O,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(V,{fields:c})})})},xe=()=>{const h=N(n=>n.salesOrderForm),a=x();new S;const l=(n,i)=>{a(v({[n]:i}))},c={"Terms and Conditions":{"Terms and Conditions":e("textarea",{id:"terms_conditions",rows:3,name:"terms_conditions",className:"form-textarea flex-1",placeholder:"",onChange:n=>l(n.target.name,n.target.value),defaultValue:h.terms_conditions})},"":{}};return e(O,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(V,{fields:c})})})},Ne=()=>{const h=N(n=>n.salesOrderForm),a=x();new S;const l=(n,i)=>{a(v({[n]:i}))},c={"Description Information":{Description:e("textarea",{id:"description",rows:3,name:"description",className:"form-textarea flex-1",placeholder:"",onChange:n=>l(n.target.name,n.target.value),defaultValue:h.description})},"":{}};return e(O,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(V,{fields:c})})})},Ce=()=>{const h=x(),a=N(n=>n.salesOrderForm),l=(n,i)=>{h(v({[n]:i}))},c={"Technical information":{"Waiting for approval":e("input",{id:"waiting_approval",type:"checkbox",name:"waiting_approval",className:"form-checkbox",onChange:n=>l(n.target.name,n.target.checked),defaultChecked:a.waiting_approval}),Approval:e("input",{id:"approval",type:"checkbox",name:"approval",className:"form-checkbox",onChange:n=>l(n.target.name,n.target.checked),defaultChecked:a.approval}),"Approve Changes":e(I,{options:K,name:"approval_changes",id:"approval_changes",onChange:({value:n})=>{l("approval_changes",n)},className:"flex-1",defaultValue:K.find(n=>n.value==a.approval_changes)}),Tech:e("input",{id:"tech",type:"checkbox",name:"tech",className:"form-checkbox",onChange:n=>l(n.target.name,n.target.checked),defaultChecked:a.tech})},"":{"Technical info":e("textarea",{id:"tech_info",rows:2,name:"tech_info",className:"form-textarea flex-1",placeholder:"",defaultValue:a.tech_info,onChange:n=>l(n.target.name,n.target.value)}),Subform:e("textarea",{id:"subform",rows:2,name:"subform",className:"form-textarea flex-1",placeholder:"",defaultValue:a.subform,onChange:n=>l(n.target.name,n.target.value)})}};return e(O,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(V,{fields:c})})})},we=()=>g("div",{className:"mt-8 px-4",children:[e(he,{},"HeaderSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ge,{},"SalesOrderInformationSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(_e,{},"SalesItemsSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ve,{},"SOLineSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(be,{},"LinkedAvailabilitySection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ye,{},"AddressInformationSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(xe,{},"TermsConditionsSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Ne,{},"DescriptionInformationSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Ce,{},"TechnicalInformationSection")]}),Te=()=>{const{hasPermission:h}=ae(),a=N(o=>o.salesOrderForm),[l,c]=q.useState(!0),i=te().id,m=new S,r=x(),_=le();q.useEffect(()=>{r(ie("SalesOrder Edit"))}),q.useEffect(()=>{r(G())},[]);const s=async()=>{const o=await m.fetchSingleSalesOrder(i);if(o.status!=200)return;const f=o.data.data.salesOrder;r(v(f))};q.useEffect(()=>{s().then(()=>{c(!1)})},[i]),q.useEffect(()=>{r(v({api:"updateSingleSalesOrder",redirectTo:"/sales/edit/:id",action:"edit"}))},[]);const p=async()=>{try{const o=await m.convertSalesOrderToInvoice({id:a.id});fe.fire({title:"salesOrder Converted Successfully.",html:`
                <span class="text-blue-500">Do you want to redirect to created Invoice ? </span>
                `,showCancelButton:!0,icon:"success",confirmButtonText:"Redirect",denyButtonText:"Close",customClass:{title:"text-blue-500"}}).then(f=>{f.isConfirmed&&_(`/invoice/edit/${o.data.invoice.id}`,{replace:!0})})}catch(o){pe("Failed to convert Rfq"),console.error(o);return}};return l?e(W,{}):!h("update-sales-order")||l?e(W,{}):g("div",{className:"px-4",children:[e(se,{formState:a,resetForm:G}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:g("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:[e("div",{className:"flex items-center gap-2",children:e("button",{onClick:p,className:"mx-2 btn btn-secondary",children:"Convert SO to Invoice"})}),e(we,{})]})})]})};export{Te as default};
