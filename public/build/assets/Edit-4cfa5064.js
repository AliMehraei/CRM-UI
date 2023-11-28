import{u as O,a as S,d as V,j as e,l as C,a0 as X,b as v,w as Z,Y as J,k as M,m as Y,f as K,F as I,$ as x,a1 as ee,U as R,r as q,X as G,B as ae,h as W,c as te,s as ne,a2 as Q,e as U}from"./main-3000a6dc.js";import{G as k,R as $,A as ie}from"./GenerateFields-7282bc65.js";import{S as B}from"./react-select.esm-2a6a39a3.js";import{F as T}from"./index-0aeaf758.js";import{P as z,n as H}from"./SelectOptions-b7204016.js";import{F as se}from"./FileUploadComponent-37e5f074.js";import{A as re}from"./AttachmentSection-628d53a2.js";/* empty css                  */import"./index-29603cbb.js";import"./ClearButtonComponent-21bbcf28.js";const le=()=>{var r,o,g,t,p,i,c,u,f,l,_,h,y,N,w,P,D,F,j,A,s,E;const m=O();new S;const a=V(b=>b.purchaseOrderForm),n=(b,L)=>{m(x({[b]:L}))},d={Header:{"Vendor Name":e(C,{defaultOptions:!0,isMulti:!1,required:!0,id:"vendor_id",placeholder:"Type at least 2 characters to search...",name:"vendor_id",loadOptions:X,onChange:({value:b})=>{n("vendor_id",b)},className:"flex-1",defaultValue:{value:(r=a.vendor)==null?void 0:r.id,label:e("div",{className:"flex items-center",children:v("div",{children:[e("div",{className:"text-sm font-bold",children:(o=a.vendor)==null?void 0:o.vendor_name}),e("div",{className:"text-xs text-gray-500",children:(g=a.vendor)==null?void 0:g.email})]})},(t=a.vendor)==null?void 0:t.id)}}),"Contact Name":e(C,{defaultOptions:!0,isMulti:!1,id:"contact_id",placeholder:"Type at least 2 characters to search...",name:"contact_id",loadOptions:Z,onChange:({value:b})=>{n("contact_id",b)},className:"flex-1",defaultValue:{value:(p=a.contact)==null?void 0:p.id,label:v("div",{className:"flex items-center",children:[a.contact?e("img",{src:a.contact.image??"/assets/images/user-profile.jpeg",alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,v("div",{children:[e("div",{className:"text-sm font-bold",children:((i=a.contact)==null?void 0:i.first_name)+" "+((c=a.account)==null?void 0:c.last_name)}),e("div",{className:"text-xs text-gray-500",children:(u=a.contact)==null?void 0:u.email})]})]},(f=a.contact)==null?void 0:f.id)}}),"Availability No":e(C,{defaultOptions:!1,isMulti:!1,id:"availability_id",placeholder:"Type at least 2 characters to search...",name:"availability_id",loadOptions:J,onChange:({value:b})=>{n("availability_id",b)},className:"flex-1",defaultValue:{value:(l=a.availability)==null?void 0:l.id,label:e("div",{className:"flex items-center",children:e("div",{className:"text-sm font-bold",children:(_=a.availability)==null?void 0:_.availability_name})},(h=a.availability)==null?void 0:h.id)}}),Currency:e(B,{options:M,name:"currency",id:"currency",onChange:({value:b})=>{n("currency",b)},className:"flex-1",defaultValue:M.find(b=>b.value==a.currency)}),"Exchange Rate":e("input",{id:"exchange_rate",name:"exchange_rate",type:"text",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0,defaultValue:a.exchange_rate??1})},"":{"PO Date":e(T,{options:{dateFormat:"Y-m-d ",position:"auto left",defaultDate:a.po_date?new Date(a.po_date):null},name:"po_date",value:a.po_date?new Date(a.po_date):"",className:"form-input flex-1",onChange:(b,L)=>n("po_date",L)}),"PurchaseOrders Owner":e(C,{defaultOptions:!0,isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:Y,onChange:({value:b})=>{n("owner_id",b)},className:"flex-1",defaultValue:{value:(y=a.owner)==null?void 0:y.id,label:v("div",{className:"flex items-center",children:[a.owner?e("img",{src:K(a.owner.avatar_data),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,v("div",{children:[e("div",{className:"text-sm font-bold",children:((N=a.owner)==null?void 0:N.first_name)+" "+((w=a.owner)==null?void 0:w.last_name)}),e("div",{className:"text-xs text-gray-500",children:(P=a.owner)==null?void 0:P.email})]})]},(D=a.owner)==null?void 0:D.id)}}),"Approved By":e(C,{defaultOptions:!0,isMulti:!1,id:"approved_by_id",placeholder:"Type at least 2 characters to search...",name:"approved_by_id",loadOptions:Y,onChange:({value:b})=>{n("approved_by_id",b)},className:"flex-1",defaultValue:{value:(F=a.approved_by)==null?void 0:F.id,label:v("div",{className:"flex items-center",children:[a.approved_by?e("img",{src:a.approved_by.image??"/assets/images/user-profile.jpeg",alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,v("div",{children:[e("div",{className:"text-sm font-bold",children:((j=a.approved_by)==null?void 0:j.first_name)+" "+((A=a.approved_by)==null?void 0:A.last_name)}),e("div",{className:"text-xs text-gray-500",children:(s=a.approved_by)==null?void 0:s.email})]})]},(E=a.approved_by)==null?void 0:E.id)}})}};return e(I,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(k,{fields:d})})})},de=()=>{var r,o,g;const m=O();new S;const a=V(t=>t.purchaseOrderForm),n=(t,p)=>{m(x({[t]:p}))},d={"PurchaseOrders Information":{"PO Type":e(B,{options:z,name:"po_type",id:"po_type",onChange:({value:t})=>{n("po_type",t)},className:"flex-1",defaultValue:z.find(t=>t.value==a.po_type)}),"Parent PO No.":e(C,{defaultOptions:!0,isMulti:!1,id:"parent_po_id",placeholder:"Type at least 2 characters to search...",name:"parent_po_id",loadOptions:ee,onChange:({value:t})=>{n("parent_po_id",t)},className:"flex-1",defaultValue:{value:(r=a.parent_po)==null?void 0:r.id,label:e("div",{className:"flex items-center",children:e("div",{className:"text-sm font-bold",children:(o=a.parent_po)==null?void 0:o.subject})},(g=a.parent_po)==null?void 0:g.id)}}),ZohoBooksID:e("input",{id:"zoho_books_id",name:"zoho_books_id",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value),defaultValue:a.zoho_books_id})},"":{Subject:e("input",{id:"subject",required:!0,name:"subject",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value),defaultValue:a.subject}),Status:e(B,{options:R,name:"status",id:"status",onChange:({value:t})=>{n("status",t)},className:"flex-1",defaultValue:R.find(t=>t.value==a.status)}),Carrier:e(B,{options:H,name:"carrier",id:"carrier",onChange:({value:t})=>{n("carrier",t)},className:"flex-1",defaultValue:H.find(t=>t.value==a.carrier)}),AWB:e("input",{id:"awb",name:"awb",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value),defaultValue:a.awb}),"Confirmation Vendor":e(se,{id:"confirmation_vendor",modelName:"purchaseOrder",formState:a,formAttribute:"confirmation_vendor",updateFormData:x})}};return e(I,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(k,{fields:d})})})},oe=()=>{const m=V(i=>i.purchaseOrderForm),a=O(),n=new S,[d,r]=q.useState([]),o=(i,c,u)=>{const f=d.find(N=>N.id===u),l=d.findIndex(N=>N.id===u),_={...f,[i]:c},h={..._,amount:parseInt(_.quantity??0)*parseFloat(_.list_price??0)},y={...d,[l]:h};r(Object.values(y)),a(x({items:y}))},g=async(i,c)=>{const u=await n.fetchSingleProduct(i);if(u.status!==200)return;const f=u.data.data.product,l=d.find(w=>w.id===c),_=d.findIndex(w=>w.id===c),h={...l,product_id:i,list_price:f.unit_price??0,description:f.description},y={...h,amount:parseInt(h.quantity??0)*parseFloat(h.list_price??0)},N={...d,[_]:y};r(Object.values(N)),a(x({items:N}))},t=()=>{let i;i=d!=null&&d.length?d.reduce((u,f)=>f.id>u?f.id:u,d[0].id):0;let c=[...d,{id:i+1,amount:0,list_price:0}];r(c),a(x({items:c}))},p=(i=null)=>{const c=d.filter(u=>u.id!=i.id);r(c),a(x({items:c}))};return q.useEffect(()=>{r(Object.values(m.items))},[]),e(I,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12 ",children:v("div",{className:"",children:[v("div",{className:"text-lg",children:["Purchase Items ",e($,{})," :"]}),v("div",{className:"mt-8",children:[e("div",{className:"overflow-x-auto	w-11/12",children:v("table",{className:"table-auto w-5",children:[e("thead",{children:v("tr",{children:[v("th",{className:"w-1",children:["Product Name ",e($,{})]}),e("th",{className:"w-1",children:"Quantity"}),e("th",{className:"w-1",children:"List Price"}),e("th",{className:"w-1",children:"Amount"}),e("th",{className:"w-1",children:"Comment"}),e("th",{className:"w-1",children:"Date Code"}),e("th",{className:"w-1",children:"Delivery Date"}),e("th",{className:"w-1",children:"Estimated Delivery Date"})]})}),e("tbody",{children:d.map(i=>{var c,u,f;return v("tr",{className:"align-top",children:[v("td",{children:[e(C,{defaultOptions:!0,isMulti:!1,id:"product_id",name:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:G,onChange:({value:l})=>{g(l,i.id)},className:"flex-1  min-w-[200px]",defaultValue:i.product?{value:(c=i.product)==null?void 0:c.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(u=i.product)==null?void 0:u.product_name})})},(f=i.product)==null?void 0:f.id)}:null}),",",e("textarea",{name:"description",className:"form-textarea mt-4",placeholder:"Enter Description",onChange:l=>o(l.target.name,l.target.value,i.id),defaultValue:i.description})]}),e("td",{children:e("input",{type:"number",className:"form-input w-32",placeholder:"Quantity",name:"quantity",min:0,onChange:l=>o(l.target.name,l.target.value,i.id),defaultValue:i.quantity})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",placeholder:"Price",name:"list_price",min:0,value:i.list_price,onChange:l=>o(l.target.name,l.target.value,i.id)})}),e("td",{children:e("input",{type:"number",className:"w-32 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",name:"amount",min:0,value:i.amount,disabled:!0,onChange:l=>o(l.target.name,l.target.value,i.id)})}),e("td",{children:e("textarea",{name:"comment",className:"form-textarea  min-w-[200px]",placeholder:"Enter comment",onChange:l=>o(l.target.name,l.target.value,i.id),defaultValue:i.comment})}),e("td",{children:e("input",{name:"date_code",type:"text",className:"form-input min-w-[200px]",defaultValue:i.date_code,onChange:l=>o(l.target.name,l.target.value,i.id)})}),e("td",{children:e(T,{name:"requested_delivery_date",options:{dateFormat:"Y-m-d",position:"auto left"},placeholder:"Y-m-d",className:"form-input flex-1 min-w-[200px]",onChange:(l,_)=>o("requested_delivery_date",_,i.id),defaultValue:i.requested_delivery_date})}),e("td",{children:e(T,{name:"estimated_delivery_date",options:{dateFormat:"Y-m-d",position:"auto left"},placeholder:"Y-m-d",className:"form-input flex-1 min-w-[200px]",onChange:(l,_)=>o("estimated_delivery_date",_,i.id),defaultValue:i.estimated_delivery_date})}),e("td",{children:e("button",{type:"button",onClick:()=>p(i),children:v("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},i.id)})})]})}),e("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:e("div",{className:"sm:mb-0 mb-6",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>t(),children:"Add Item"})})})]})]},"Purchase Items")})})})},ce=()=>{var r,o,g;const m=O();new S;const a=V(t=>t.purchaseOrderForm),n=(t,p)=>{m(x({[t]:p}))},d={"PO line":{"Requested Delivery Date":e(T,{options:{dateFormat:"Y-m-d ",position:"auto left",defaultDate:a.requested_delivery_date?new Date(a.requested_delivery_date):null},name:"requested_delivery_date",value:a.requested_delivery_date?new Date(a.requested_delivery_date):"",className:"form-input flex-1",onChange:(t,p)=>n("requested_delivery_date",p)}),"Product Name":e(C,{defaultOptions:!1,isMulti:!1,id:"product_id",placeholder:"Type at least 2 characters to search...",name:"product_id",loadOptions:G,onChange:({value:t})=>{n("product_id",t)},className:"flex-1",defaultValue:{value:(r=a.product)==null?void 0:r.id,label:e("div",{className:"flex items-center",children:e("div",{className:"text-sm font-bold",children:(o=a.product)==null?void 0:o.product_name})},(g=a.product)==null?void 0:g.id)}}),Quantity:e("input",{id:"quantity",name:"quantity",className:"form-input flex-1 ",type:"number",onChange:t=>n(t.target.name,t.target.value),defaultValue:a.quantity}),Cost:e("input",{type:"number",id:"cost",name:"cost",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value),defaultValue:a.cost})},"":{"Confirmed Delivery Date":e(T,{options:{dateFormat:"Y-m-d ",position:"auto left",defaultDate:a.confirmed_delivery_date?new Date(a.confirmed_delivery_date):null},name:"confirmed_delivery_date",value:a.confirmed_delivery_date?new Date(a.confirmed_delivery_date):"",className:"form-input flex-1",onChange:(t,p)=>n("confirmed_delivery_date",p)}),"Date Code":e("input",{id:"date_code",name:"date_code",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value),defaultValue:a.date_code}),SPQ:e("input",{id:"spq",name:"spq",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value),defaultValue:a.spq}),comment:e("input",{id:"comment",name:"comment",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value),defaultValue:a.comment})}};return e(I,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(k,{fields:d})})})},ue=()=>{var g,t,p,i,c,u,f,l,_;const m=O(),a=new S,n=V(h=>h.purchaseOrderForm),d=(h,y)=>{m(x({[h]:y}))},r=async h=>{const y=await a.fetchSingleSalesOrder(h);if(y.status!=200)return;const N=y.data.data.salesOrder;m(x({sales_order:N}));const w=N.account;if(w==null)return;const P=["billing_street","billing_city","billing_state","billing_code","billing_country","shipping_street","shipping_city","shipping_state","shipping_code","shipping_country"],D={};P.forEach(F=>{D[F]=w[F]??null}),m(x(D))},o={"Linked SO":{"SO Number":e(C,{defaultOptions:!0,isMulti:!1,id:"sales_order_id",placeholder:"Type at least 2 characters to search...",name:"sales_order_id",loadOptions:ae,onChange:({value:h})=>{d("sales_order_id",h),r(h)},className:"flex-1",defaultValue:{value:n.sales_order_id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(g=n.sales_order)==null?void 0:g.subject})})},n.sales_order_id)}}),"Account Name":e("input",{id:"account_id",name:"account_id",value:(p=(t=n.sales_order)==null?void 0:t.account)==null?void 0:p.account_name,className:"form-input disabled:pointer-events-none bg-[#eee] flex-1 ",disabled:!0}),"Quantity SO":e("input",{id:"quantity_so",name:"quantity_so",className:"form-input disabled:pointer-events-none bg-[#eee] flex-1 ",disabled:!0,value:(i=n.sales_order)==null?void 0:i.quantity}),Resale:e("input",{id:"resale",name:"resale",className:"form-input disabled:pointer-events-none bg-[#eee] flex-1 ",disabled:!0,value:(c=n.sales_order)==null?void 0:c.resale_price}),"SO Status":e("input",{id:"so_status",name:"so_status",className:"form-input disabled:pointer-events-none bg-[#eee] flex-1 ",disabled:!0,value:(u=n.sales_order)==null?void 0:u.status})},"":{"Requested D.D.":e("input",{id:"so_requested_d_d",name:"so_requested_d_d",className:"form-input disabled:pointer-events-none bg-[#eee] flex-1 ",disabled:!0,value:(f=n.sales_order)==null?void 0:f.requested_delivery_date}),"Confirmed D.D.":e("input",{id:"so_confirmed_d_d",name:"so_confirmed_d_d",className:"form-input disabled:pointer-events-none bg-[#eee] flex-1 ",disabled:!0}),"D/C":e("input",{id:"dc_so",name:"dc_so",className:"form-input disabled:pointer-events-none bg-[#eee] flex-1 ",disabled:!0,value:(l=n.sales_order)==null?void 0:l.dc}),"SPQ SO":e("input",{id:"spq_so",name:"spq_so",className:"form-input disabled:pointer-events-none bg-[#eee] flex-1 ",disabled:!0,value:(_=n.sales_order)==null?void 0:_.spq})}};return e(I,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(k,{fields:o})})})},me=()=>{var r,o,g,t,p,i,c,u,f,l,_,h,y,N,w,P,D,F,j,A;const m=O();new S;const a=V(s=>s.purchaseOrderForm),n=(s,E)=>{m(x({[s]:E}))},d={"Address Information":{"Billing Street":e("input",{id:"billing_street",name:"billing_street",onChange:s=>n(s.target.name,s.target.value),value:a.billing_street||((o=(r=a.sales_order)==null?void 0:r.account)==null?void 0:o.billing_street)||"",defaultValue:a.billing_street,className:"form-input flex-1"}),"Billing City":e("input",{id:"billing_city",name:"billing_city",value:a.billing_city||((t=(g=a.sales_order)==null?void 0:g.account)==null?void 0:t.billing_city)||"",defaultValue:a.billing_city,onChange:s=>n(s.target.name,s.target.value),className:"form-input flex-1"}),"Billing State":e("input",{id:"billing_state",name:"billing_state",value:a.billing_state||((i=(p=a.sales_order)==null?void 0:p.account)==null?void 0:i.billing_state)||"",defaultValue:a.billing_state,onChange:s=>n(s.target.name,s.target.value),className:"form-input flex-1"}),"Billing Code":e("input",{id:"billing_code",name:"billing_code",value:a.billing_code||((u=(c=a.sales_order)==null?void 0:c.account)==null?void 0:u.billing_code)||"",defaultValue:a.billing_code,onChange:s=>n(s.target.name,s.target.value),className:"form-input flex-1"}),"Billing Country":e("input",{id:"billing_country",name:"billing_country",value:a.billing_country||((l=(f=a.sales_order)==null?void 0:f.account)==null?void 0:l.billing_country)||"",defaultValue:a.billing_country,onChange:s=>n(s.target.name,s.target.value),className:"form-input flex-1"})},"":{"Shipping Street":e("input",{id:"shipping_street",name:"shipping_street",defaultValue:a.shipping_street,value:a.shipping_street||((h=(_=a.sales_order)==null?void 0:_.account)==null?void 0:h.shipping_street)||"",onChange:s=>n(s.target.name,s.target.value),className:"form-input flex-1"}),"Shipping City":e("input",{id:"shipping_city",name:"shipping_city",defaultValue:a.shipping_city,value:a.shipping_city||((N=(y=a.sales_order)==null?void 0:y.account)==null?void 0:N.shipping_city)||"",onChange:s=>n(s.target.name,s.target.value),className:"form-input flex-1"}),"Shipping State":e("input",{id:"shipping_state",name:"shipping_state",value:a.shipping_state||((P=(w=a.sales_order)==null?void 0:w.account)==null?void 0:P.shipping_state)||"",defaultValue:a.shipping_state,onChange:s=>n(s.target.name,s.target.value),className:"form-input flex-1"}),"Shipping Code":e("input",{id:"shipping_code",name:"shipping_code",value:a.shipping_code||((F=(D=a.sales_order)==null?void 0:D.account)==null?void 0:F.shipping_code)||"",defaultValue:a.shipping_code,onChange:s=>n(s.target.name,s.target.value),className:"form-input flex-1"}),"Shipping Country":e("input",{id:"shipping_country",name:"shipping_country",value:a.shipping_country||((A=(j=a.sales_order)==null?void 0:j.account)==null?void 0:A.shipping_country)||"",defaultValue:a.shipping_country,onChange:s=>n(s.target.name,s.target.value),className:"form-input flex-1"})}};return e(I,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(k,{fields:d})})})},pe=()=>{const m=V(r=>r.purchaseOrderForm),a=O();new S;const n=(r,o)=>{a(x({[r]:o}))},d={"Terms and Conditions":{"Terms and Conditions":e("textarea",{id:"terms_conditions",rows:3,name:"terms_conditions",className:"form-textarea flex-1",placeholder:"",onChange:r=>n(r.target.name,r.target.value),defaultValue:m.terms_conditions})},"":{}};return e(I,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(k,{fields:d})})})},he=()=>{const m=V(r=>r.purchaseOrderForm),a=O();new S;const n=(r,o)=>{a(x({[r]:o}))},d={"Description Information":{Description:e("textarea",{id:"description",rows:3,name:"description",className:"form-textarea flex-1",placeholder:"",onChange:r=>n(r.target.name,r.target.value),defaultValue:m.description})},"":{}};return e(I,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(k,{fields:d})})})},fe=()=>{const a=W().id;return v("div",{className:"mt-8 px-4",children:[e(le,{},"HeaderSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(de,{},"PurchaseOrderInformationSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(oe,{},"PurchaseItemsSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ce,{},"POLineSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ue,{},"LinkedSOSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(me,{},"AddressInformationSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(pe,{},"TermsConditionsSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(he,{},"DescriptionInformationSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(re,{modelId:a,modelName:"purchaseOrder"})]})},Se=()=>{const{hasPermission:m}=te(),a=V(i=>i.purchaseOrderForm),[n,d]=q.useState(!0),o=W().id,g=new S,t=O();q.useEffect(()=>{t(ne("PurchaseOrder Edit"))}),q.useEffect(()=>{t(Q())},[]);const p=async()=>{const i=await g.fetchSinglePurchaseOrder(o);if(i.status!=200)return;const c=i.data.data.purchaseOrder;t(x(c))};return q.useEffect(()=>{p().then(()=>{d(!1)})},[o]),q.useEffect(()=>{t(x({api:"updateSinglePurchaseOrder",redirectTo:"/purchase/edit/:id",action:"edit"}))},[]),n?e(U,{}):!m("update-purchase-order")||n?e(U,{}):v("div",{className:"px-4",children:[e(ie,{formState:a,resetForm:Q}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(fe,{})})})]})};export{Se as default};
