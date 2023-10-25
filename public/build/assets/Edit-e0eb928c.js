import{u as x,e as S,a as N,b as e,l as te,j as g,v as le,y as ne,i as W,O as ie,k,f as se,F as O,Q as _,R as G,r as I,T as X,U as re,V as J,n as ee,c as de,J as oe,s as ce,W as K,d as Z,S as ue,K as me}from"./main-147692d0.js";import{A as y}from"./react-select-async.esm-b9121d10.js";import{G as q,R as pe}from"./GenerateFields-c60abd43.js";import{S as D}from"./react-select.esm-70d620c0.js";import{F}from"./index-3577889e.js";import{F as fe}from"./FileUploadComponent-02a1a9f3.js";import{A as he}from"./AttachmentSection-7ebd3a6e.js";import{A as ge}from"./ActionButtonsComponent-4e967826.js";/* empty css                  */import"./Select-aecb2a80.esm-623bc0fb.js";import"./ClearButtonComponent-8ad37a31.js";const ve=()=>{var n,h,r,v,s,m,o,p,d,t,b,C,w,V,A,T,j,P,E,B,L,M,R,Q,Y,$,U,z,H;const f=x();new S;const a=N(u=>u.salesOrderForm),l=(u,ae)=>{f(_({[u]:ae}))},c=[{value:"none",label:"-None-"},{value:"draft",label:"Draft"},{value:"no_feedback",label:"No Feedback"},{value:"open",label:"open"},{value:"lost",label:"lost"}],i={Header:{"Account Name":e(y,{defaultOptions:!0,isMulti:!1,required:!0,id:"account_id",placeholder:"Type at least 2 characters to search...",name:"account_id",loadOptions:te,onChange:({value:u})=>{l("account_id",u)},className:"flex-1",defaultValue:{value:(n=a.account)==null?void 0:n.id,label:e("div",{className:"flex items-center",children:g("div",{children:[e("div",{className:"text-sm font-bold",children:(h=a.account)==null?void 0:h.account_name}),e("div",{className:"text-xs text-gray-500",children:(r=a.account)==null?void 0:r.email})]})},(v=a.account)==null?void 0:v.id)}}),"Contact Name":e(y,{defaultOptions:!0,isMulti:!1,required:!0,id:"contact_id",placeholder:"Type at least 2 characters to search...",name:"contact_id",loadOptions:le,onChange:({value:u})=>{l("contact_id",u)},className:"flex-1",defaultValue:{value:(s=a.contact)==null?void 0:s.id,label:g("div",{className:"flex items-center",children:[a.contact?e("img",{src:a.contact.image??"/assets/images/user-profile.jpeg",alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,g("div",{children:[e("div",{className:"text-sm font-bold",children:((m=a.contact)==null?void 0:m.first_name)+" "+((o=a.contact)==null?void 0:o.last_name)}),e("div",{className:"text-xs text-gray-500",children:(p=a.contact)==null?void 0:p.email})]})]},(d=a.contact)==null?void 0:d.id)}}),"Quote Name":e(y,{defaultOptions:!0,isMulti:!1,id:"quote_id",placeholder:"Type at least 2 characters to search...",name:"quote_id",loadOptions:ne,onChange:({value:u})=>{l("quote_id",u)},className:"flex-1",defaultValue:{value:(t=a.quote)==null?void 0:t.id,label:e("div",{className:"flex items-center",children:e("div",{className:"text-sm font-bold",children:(b=a.quote)==null?void 0:b.subject})},(C=a.quote)==null?void 0:C.id)}}),Currency:e(D,{options:W,name:"currency",id:"currency",onChange:({value:u})=>{l("currency",u)},className:"flex-1",defaultValue:W.find(u=>u.value==a.currency)})},"":{"Deals Name":e(y,{defaultOptions:!0,isMulti:!1,required:!0,id:"deal_id",placeholder:"Type at least 2 characters to search...",name:"deal_id",loadOptions:ie,onChange:({value:u})=>{l("deal_id",u)},className:"flex-1",defaultValue:{value:(w=a.deal)==null?void 0:w.id,label:e("div",{className:"flex items-center",children:e("div",{className:"text-sm font-bold",children:(V=a.deal)==null?void 0:V.deal_name})},(A=a.deal)==null?void 0:A.id)}}),"Deal Stage":e(D,{options:c,name:"deal_stage",id:"deal_stage",onChange:({value:u})=>{l("deal_stage",u)},className:"flex-1",defaultValue:c.find(u=>u.value==a.deal_stage)}),"SalesOrders Owner":e(y,{defaultOptions:!0,isMulti:!1,required:!0,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:k,onChange:({value:u})=>{l("owner_id",u)},className:"flex-1",defaultValue:{value:(T=a.owner)==null?void 0:T.id,label:g("div",{className:"flex items-center",children:[a.owner?e("img",{src:se(a.owner.avatar),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,g("div",{children:[e("div",{className:"text-sm font-bold",children:((j=a.owner)==null?void 0:j.first_name)+" "+((P=a.owner)==null?void 0:P.last_name)}),e("div",{className:"text-xs text-gray-500",children:(E=a.owner)==null?void 0:E.email})]})]},(B=a.owner)==null?void 0:B.id)}}),"Sales Person":e(y,{defaultOptions:!0,isMulti:!1,required:!0,id:"sales_person_id",placeholder:"Type at least 2 characters to search...",name:"sales_person_id",loadOptions:k,onChange:({value:u})=>{l("sales_person_id",u)},className:"flex-1",defaultValue:{value:(L=a.sales_person)==null?void 0:L.id,label:g("div",{className:"flex items-center",children:[a.sales_person?e("img",{src:a.sales_person.image??"/assets/images/user-profile.jpeg",alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,g("div",{children:[e("div",{className:"text-sm font-bold",children:(M=a.sales_person)==null?void 0:M.name}),e("div",{className:"text-xs text-gray-500",children:(R=a.sales_person)==null?void 0:R.email})]})]},(Q=a.sales_person)==null?void 0:Q.id)}}),"Approved By":e(y,{defaultOptions:!0,isMulti:!1,id:"approved_by_id",required:!0,placeholder:"Type at least 2 characters to search...",name:"approved_by_id",loadOptions:k,onChange:({value:u})=>{l("approved_by_id",u)},className:"flex-1",defaultValue:{value:(Y=a.approved_by)==null?void 0:Y.id,label:g("div",{className:"flex items-center",children:[a.approved_by?e("img",{src:a.approved_by.image??"/assets/images/user-profile.jpeg",alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,g("div",{children:[e("div",{className:"text-sm font-bold",children:(($=a.approved_by)==null?void 0:$.first_name)+" "+((U=a.approved_by)==null?void 0:U.last_name)}),e("div",{className:"text-xs text-gray-500",children:(z=a.approved_by)==null?void 0:z.email})]})]},(H=a.approved_by)==null?void 0:H.id)}}),"Exchange Rate":e("input",{id:"exchange_rate",name:"exchange_rate",type:"text",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0,defaultValue:a.exchange_rate??1})}};return e(O,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(q,{fields:i})})})},_e=()=>{const f=x();new S;const a=N(n=>n.salesOrderForm),l=(n,h)=>{f(_({[n]:h}))},c=[{value:"none",label:"-None-"},{value:"single_order",label:"Single Order"},{value:"frame_contract",label:"Frame Contract"},{value:"call_off",label:"Call Off"},{value:"forecast",label:"Forecast"}],i={"Sales Orders Information":{"Purchase Order":e("input",{id:"purchase_order",name:"purchase_order",className:"form-input flex-1 ",onChange:n=>l(n.target.name,n.target.value),defaultValue:a.purchase_order}),"Customer PO Date":e(F,{options:{dateFormat:"Y-m-d ",position:"auto left",defaultDate:a.customer_po_date?new Date(a.customer_po_date):null},name:"customer_po_date",value:a.customer_po_date?new Date(a.customer_po_date):"",className:"form-input flex-1",onChange:(n,h)=>l("customer_po_date",h)}),"PO Upload":e(fe,{id:"po_upload",modelName:"salesOrder",formState:a,formAttribute:"po_upload",updateFormdata:_}),"SO Type":e(D,{options:c,name:"so_type",id:"so_type",onChange:({value:n})=>{l("so_type",n)},className:"flex-1",defaultValue:c.find(n=>n.value==a.so_type)}),"Parent SO Nr.":e("input",{id:"parent_so_nr",name:"parent_so_nr",className:"form-input flex-1 ",onChange:n=>l(n.target.name,n.target.value),defaultValue:a.parent_so_nr})},"":{Subject:e("input",{id:"subject",required:!0,name:"subject",className:"form-input flex-1 ",onChange:n=>l(n.target.name,n.target.value),defaultValue:a.subject}),Pending:e("input",{id:"pending",name:"pending",className:"form-input flex-1 ",onChange:n=>l(n.target.name,n.target.value),defaultValue:a.pending}),Status:e(D,{options:G,name:"status",id:"status",onChange:({value:n})=>{l("status",n)},className:"flex-1",defaultValue:G.find(n=>n.value==a.status)}),ZohoBooksID:e("input",{id:"zoho_books_id",name:"zoho_books_id",className:"form-input flex-1 ",onChange:n=>l(n.target.name,n.target.value),defaultValue:a.zoho_books_id})}};return e(O,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(q,{fields:i})})})},be=()=>{const f=N(s=>s.salesOrderForm),[a,l]=I.useState([]),c=x(),i=new S,n=(s,m,o)=>{const p=a.find(w=>w.id===o),d=a.findIndex(w=>w.id===o),t={...p,[s]:m},b={...t,amount:parseInt(t.quantity??0)*parseFloat(t.list_price??0)},C={...a,[d]:b};l(Object.values(C)),c(_({items:C}))},h=async(s,m)=>{const o=await i.fetchSingleProduct(s);if(o.status!==200)return;const p=o.data.data.product,d=a.find(V=>V.id===m),t=a.findIndex(V=>V.id===m),b={...d,product_id:s,list_price:p.unit_price??0,description:p.description},C={...b,amount:parseInt(b.quantity??0)*parseFloat(b.list_price??0)},w={...a,[t]:C};l(Object.values(w)),c(_({items:w}))},r=()=>{let s;s=a!=null&&a.length?a.reduce((o,p)=>p.id>o?p.id:o,a[0].id):0;let m=[...a,{id:s+1,amount:0,list_price:0}];l(m),c(_({items:m}))},v=(s=null)=>{const m=a.filter(o=>o.id!=s.id);l(m),c(_({items:m}))};return I.useEffect(()=>{l(Object.values(f.items))},[]),e(O,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12 ",children:g("div",{className:"",children:[g("div",{className:"text-lg",children:["Ordered Items",e(pe,{})," :"]}),g("div",{className:"mt-8",children:[e("div",{className:"overflow-x-auto	w-11/12",children:g("table",{className:"table-auto w-5",children:[e("thead",{children:g("tr",{children:[e("th",{className:"w-1",children:"Product Name"}),e("th",{className:"w-1",children:"Quantity"}),e("th",{className:"w-1",children:"Customer Part ID"}),e("th",{className:"w-1",children:"List Price"}),e("th",{className:"w-1",children:"Date Code"}),e("th",{className:"w-1",children:"Amount"}),e("th",{className:"w-1",children:"Requested Delivery Date"}),e("th",{className:"w-1",children:"Estimated Delivery Date"})]})}),e("tbody",{children:a.map(s=>{var m,o,p;return g("tr",{className:"align-top",children:[g("td",{children:[e(y,{defaultOptions:!0,isMulti:!1,id:"product_id",name:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:X,onChange:({value:d})=>{h(d,s.id)},defaultValue:s.product?{value:(m=s.product)==null?void 0:m.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(o=s.product)==null?void 0:o.product_name})})},(p=s.product)==null?void 0:p.id)}:null,className:"flex-1  min-w-[200px]"}),e("textarea",{name:"description",className:"form-textarea mt-4",placeholder:"Enter Description",onChange:d=>n(d.target.name,d.target.value,s.id),defaultValue:s.description})]}),e("td",{children:e("input",{type:"number",className:"form-input w-32",placeholder:"Quantity",name:"quantity",min:0,onChange:d=>n(d.target.name,d.target.value,s.id),defaultValue:s.quantity})}),e("td",{children:e("input",{name:"customer_part_id",type:"text",className:"form-input min-w-[200px]",onChange:d=>n(d.target.name,d.target.value,s.id),defaultValue:s.customer_part_id})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",placeholder:"Price",name:"list_price",min:0,defaultValue:s.list_price,onChange:d=>n(d.target.name,d.target.value,s.id)})}),e("td",{children:e("input",{name:"date_code",type:"text",className:"form-input min-w-[200px]",defaultValue:s.date_code,onChange:d=>n(d.target.name,d.target.value,s.id)})}),e("td",{children:e("input",{name:"amount",type:"text",value:s.amount,className:"flex-1 form-input min-w-[200px] disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0,onChange:d=>n(d.target.name,d.target.value,s.id)})}),e("td",{children:e(F,{name:"requested_delivery_date",options:{dateFormat:"Y-m-d",position:"auto left",defaultDate:`${s.requested_delivery_date?new Date(s.requested_delivery_date):""}`},placeholder:"Y-m-d",className:"form-input flex-1 min-w-[200px]",onChange:(d,t)=>n("requested_delivery_date",t,s.id),defaultValue:s.requested_delivery_date})}),e("td",{children:e(F,{name:"estimated_delivery_date",options:{dateFormat:"Y-m-d",position:"auto left",defaultDate:`${s.estimated_delivery_date?new Date(s.estimated_delivery_date):""}`},placeholder:"Y-m-d",className:"form-input flex-1 min-w-[200px]",onChange:(d,t)=>n("estimated_delivery_date",t,s.id),defaultValue:s.estimated_delivery_date})}),e("td",{children:e("button",{type:"button",onClick:()=>v(s),children:g("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},s.id)})})]})}),e("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:e("div",{className:"sm:mb-0 mb-6",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>r(),children:"Add Item"})})})]})]},"Quote Items")})})})},ye=()=>{var i,n,h;const f=x();new S;const a=N(r=>r.salesOrderForm),l=(r,v)=>{f(_({[r]:v}))},c={"SO line":{"Requested Delivery Date":e(F,{options:{dateFormat:"Y-m-d ",position:"auto left",defaultDate:a.requested_delivery_date?new Date(a.requested_delivery_date):null},name:"requested_delivery_date",value:a.requested_delivery_date?new Date(a.requested_delivery_date):"",className:"form-input flex-1",onChange:(r,v)=>l("requested_delivery_date",v)}),"Product Name":e(y,{defaultOptions:!0,isMulti:!1,required:!0,id:"product_id",placeholder:"Type at least 2 characters to search...",name:"product_id",loadOptions:X,onChange:({value:r})=>{l("product_id",r)},className:"flex-1",defaultValue:{value:(i=a.product)==null?void 0:i.id,label:e("div",{className:"flex items-center",children:e("div",{className:"text-sm font-bold",children:(n=a.product)==null?void 0:n.product_name})},(h=a.product)==null?void 0:h.id)}}),"Customer part Id":e("input",{id:"customer_part_id",name:"customer_part_id",className:"form-input flex-1 ",onChange:r=>l(r.target.name,r.target.value),defaultValue:a.customer_part_id}),Quantity:e("input",{id:"quantity",name:"quantity",className:"form-input flex-1 ",type:"number",onChange:r=>l(r.target.name,r.target.value),defaultValue:a.quantity}),"List Price":e("input",{type:"number",id:"list_price",name:"list_price",className:"form-input flex-1 ",onChange:r=>l(r.target.name,r.target.value),defaultValue:a.list_price})},"":{"Estimated Delivery Date":e(F,{options:{dateFormat:"Y-m-d ",position:"auto left",defaultDate:a.estimated_delivery_date?new Date(a.estimated_delivery_date):null},name:"estimated_delivery_date",value:a.estimated_delivery_date?new Date(a.estimated_delivery_date):"",className:"form-input flex-1",onChange:(r,v)=>l("estimated_delivery_date",v)}),"Date Code":e("input",{id:"date_code",name:"date_code",className:"form-input flex-1 ",onChange:r=>l(r.target.name,r.target.value),defaultValue:a.date_code}),SPQ:e("input",{id:"spq",name:"spq",className:"form-input flex-1 ",onChange:r=>l(r.target.name,r.target.value),defaultValue:a.spq}),comment:e("input",{id:"comment",name:"comment",className:"form-input flex-1 ",onChange:r=>l(r.target.name,r.target.value),defaultValue:a.comment})}};return e(O,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(q,{fields:c})})})},xe=()=>{var h,r,v,s,m,o,p,d;const f=x(),a=new S,l=N(t=>t.salesOrderForm),c=(t,b)=>{f(_({[t]:b}))},i=async t=>{const b=await a.fetchSingleAvailability(t);if(b.status!=200)return;const C=b.data.data.availability;f(_({availability:C}))},n={"Linked Availability":{"Availability Name":e(y,{defaultOptions:!0,isMulti:!1,id:"availability_id",placeholder:"Type at least 2 characters to search...",name:"availability_id",loadOptions:re,onChange:({value:t})=>{c("availability_id",t),i(t)},className:"flex-1",defaultValue:{value:(h=l.availability)==null?void 0:h.id,label:e("div",{className:"flex items-center",children:e("div",{className:"text-sm font-bold",children:(r=l.availability)==null?void 0:r.availability_name})},(v=l.availability)==null?void 0:v.id)}}),"Availability No":e("input",{id:"availability_no",name:"availability_no",className:"form-input flex-1 disabled:pointer-events-none bg-[#eee] ",disabled:!0,onChange:t=>c(t.target.name,t.target.value),defaultValue:(s=l.availability)==null?void 0:s.availability_no}),"Availability Cost":e("input",{type:"number",id:"availability_cost",name:"availability_cost",className:"form-input flex-1  disabled:pointer-events-none bg-[#eee]",disabled:!0,onChange:t=>c(t.target.name,t.target.value),defaultValue:(m=l.availability)==null?void 0:m.cost})},"":{"Availability Quantity":e("input",{type:"number",disabled:!0,id:"availability_quantity",name:"availability_quantity",className:"form-input flex-1 disabled:pointer-events-none bg-[#eee]",onChange:t=>c(t.target.name,t.target.value),defaultValue:(o=l.availability)==null?void 0:o.quantity}),"Availability LT":e("input",{id:"availability_lt",name:"availability_lt",disabled:!0,className:"form-input flex-1 disabled:pointer-events-none bg-[#eee] ",onChange:t=>c(t.target.name,t.target.value),defaultValue:(p=l.availability)==null?void 0:p.lead_time}),"Availability DC":e("input",{disabled:!0,id:"availability_dc",name:"availability_dc",className:"form-input flex-1 disabled:pointer-events-none bg-[#eee]",onChange:t=>c(t.target.name,t.target.value),defaultValue:(d=l.availability)==null?void 0:d.date_code})}};return e(O,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(q,{fields:n})})})},Ne=()=>{var i,n,h,r,v,s,m,o,p,d;const f=x();new S;const a=N(t=>t.salesOrderForm),l=(t,b)=>{f(_({[t]:b}))},c={"Address Information":{"Billing Street":e("input",{id:"billing_street",name:"billing_street",required:!0,onChange:t=>l(t.target.name,t.target.value),value:a.billing_street||((i=a.account)==null?void 0:i.billing_street)||"",className:"form-input flex-1"}),"Billing City":e("input",{id:"billing_city",name:"billing_city",required:!0,value:a.billing_city||((n=a.account)==null?void 0:n.billing_city)||"",onChange:t=>l(t.target.name,t.target.value),className:"form-input flex-1"}),"Billing State":e("input",{id:"billing_state",name:"billing_state",value:a.billing_state||((h=a.account)==null?void 0:h.billing_state)||"",onChange:t=>l(t.target.name,t.target.value),className:"form-input flex-1"}),"Billing Code":e("input",{id:"billing_code",name:"billing_code",required:!0,value:a.billing_code||((r=a.account)==null?void 0:r.billing_code)||"",onChange:t=>l(t.target.name,t.target.value),className:"form-input flex-1"}),"Billing Country":e("input",{id:"billing_country",name:"billing_country",required:!0,value:a.billing_country||((v=a.account)==null?void 0:v.billing_country)||"",onChange:t=>l(t.target.name,t.target.value),className:"form-input flex-1"})},"":{"Shipping Street":e("input",{id:"shipping_street",name:"shipping_street",value:a.shipping_street||((s=a.account)==null?void 0:s.shipping_street)||"",onChange:t=>l(t.target.name,t.target.value),className:"form-input flex-1"}),"Shipping City":e("input",{id:"shipping_city",name:"shipping_city",value:a.shipping_city||((m=a.account)==null?void 0:m.shipping_city)||"",onChange:t=>l(t.target.name,t.target.value),className:"form-input flex-1"}),"Shipping State":e("input",{id:"shipping_state",name:"shipping_state",value:a.shipping_state||((o=a.account)==null?void 0:o.shipping_state)||"",onChange:t=>l(t.target.name,t.target.value),className:"form-input flex-1"}),"Shipping Code":e("input",{id:"shipping_code",name:"shipping_code",value:a.shipping_code||((p=a.account)==null?void 0:p.shipping_code)||"",onChange:t=>l(t.target.name,t.target.value),className:"form-input flex-1"}),"Shipping Country":e("input",{id:"shipping_country",name:"shipping_country",value:a.shipping_country||((d=a.account)==null?void 0:d.shipping_country)||"",onChange:t=>l(t.target.name,t.target.value),className:"form-input flex-1"})}};return e(O,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(q,{fields:c})})})},Ce=()=>{const f=N(i=>i.salesOrderForm),a=x();new S;const l=(i,n)=>{a(_({[i]:n}))},c={"Terms and Conditions":{"Terms and Conditions":e("textarea",{id:"terms_conditions",rows:3,name:"terms_conditions",className:"form-textarea flex-1",placeholder:"",onChange:i=>l(i.target.name,i.target.value),defaultValue:f.terms_conditions})},"":{}};return e(O,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(q,{fields:c})})})},we=()=>{const f=N(i=>i.salesOrderForm),a=x();new S;const l=(i,n)=>{a(_({[i]:n}))},c={"Description Information":{Description:e("textarea",{id:"description",rows:3,name:"description",className:"form-textarea flex-1",placeholder:"",onChange:i=>l(i.target.name,i.target.value),defaultValue:f.description})},"":{}};return e(O,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(q,{fields:c})})})},Se=()=>{const f=x(),a=N(i=>i.salesOrderForm),l=(i,n)=>{f(_({[i]:n}))},c={"Technical information":{"Waiting for approval":e("input",{id:"waiting_approval",type:"checkbox",name:"waiting_approval",className:"form-checkbox",onChange:i=>l(i.target.name,i.target.checked),defaultChecked:a.waiting_approval}),Approval:e("input",{id:"approval",type:"checkbox",name:"approval",className:"form-checkbox",onChange:i=>l(i.target.name,i.target.checked),defaultChecked:a.approval}),"Approve Changes":e(D,{options:J,name:"approval_changes",id:"approval_changes",onChange:({value:i})=>{l("approval_changes",i)},className:"flex-1",defaultValue:J.find(i=>i.value==a.approval_changes)}),Tech:e("input",{id:"tech",type:"checkbox",name:"tech",className:"form-checkbox",onChange:i=>l(i.target.name,i.target.checked),defaultChecked:a.tech})},"":{"Technical info":e("textarea",{id:"tech_info",rows:2,name:"tech_info",className:"form-textarea flex-1",placeholder:"",defaultValue:a.tech_info,onChange:i=>l(i.target.name,i.target.value)}),Subform:e("textarea",{id:"subform",rows:2,name:"subform",className:"form-textarea flex-1",placeholder:"",defaultValue:a.subform,onChange:i=>l(i.target.name,i.target.value)})}};return e(O,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(q,{fields:c})})})},Oe=()=>{const a=ee().id;return g("div",{className:"mt-8 px-4",children:[e(ve,{},"HeaderSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(_e,{},"SalesOrderInformationSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(be,{},"SalesItemsSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ye,{},"SOLineSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(xe,{},"LinkedAvailabilitySection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Ne,{},"AddressInformationSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Ce,{},"TermsConditionsSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(we,{},"DescriptionInformationSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Se,{},"TechnicalInformationSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(he,{modelId:a,modelName:"salesOrder"})]})},Be=()=>{const{hasPermission:f}=de(),a=N(o=>o.salesOrderForm),[l,c]=I.useState(!0),n=ee().id,h=new S,r=x(),v=oe();I.useEffect(()=>{r(ce("SalesOrder Edit"))}),I.useEffect(()=>{r(K())},[]);const s=async()=>{const o=await h.fetchSingleSalesOrder(n);if(o.status!=200)return;const p=o.data.data.salesOrder;r(_(p))};I.useEffect(()=>{s().then(()=>{c(!1)})},[n]),I.useEffect(()=>{r(_({api:"updateSingleSalesOrder",redirectTo:"/sales/edit/:id",action:"edit"}))},[]);const m=async()=>{try{const o=await h.convertSalesOrderToInvoice({id:a.id});ue.fire({title:"salesOrder Converted Successfully.",html:`
                <span class="text-blue-500">Do you want to redirect to created Invoice ? </span>
                `,showCancelButton:!0,icon:"success",confirmButtonText:"Redirect",denyButtonText:"Close",customClass:{title:"text-blue-500"}}).then(p=>{p.isConfirmed&&v(`/invoice/edit/${o.data.invoice.id}`,{replace:!0})})}catch(o){me("Failed to convert Rfq"),console.error(o);return}};return l?e(Z,{}):!f("update-sales-order")||l?e(Z,{}):g("div",{className:"px-4",children:[e(ge,{formState:a,resetForm:K}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:g("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:[e("div",{className:"flex items-center gap-2",children:e("button",{onClick:m,className:"mx-2 btn btn-secondary",children:"Convert SO to Invoice"})}),e(Oe,{})]})})]})};export{Be as default};
