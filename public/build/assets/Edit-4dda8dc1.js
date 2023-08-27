import{u as p,a as f,b as e,j as m,F as g,h as u,r as y,d as ee,s as ae}from"./main-512693c9.js";import{a as _,A as h}from"./react-select-async.esm-07977678.js";import{b as te,c as le,f as ie,a as Z,k as ne,s as N,G as v,h as re,S as J,l as se,m as oe,n as K}from"./CommonFunctions-add4950a.js";import{S as b}from"./react-select.esm-c0a059bd.js";import{F as C}from"./index-335ee0fa.js";import{A as de}from"./ActionButtonsComponent-1ebfefb5.js";/* empty css                  */import{L as ce}from"./LoadingAlpyn-90dfe7c7.js";import"./floating-ui.dom-776dbd07.js";import"./Select-aecb2a80.esm-ef4313d4.js";import"./sweetalert2.all-72c12211.js";const me=()=>{var n,s,i,c,x,S,w,O,V,F,k,D,q,A,T,j,I,P,L,M,B,E,$,Q,U,z,H,R,Y,G,W;const o=p();new _;const a=f(r=>r.salesOrderForm),l=(r,X)=>{o(u({[r]:X}))},d=[{value:"none",label:"-None-"},{value:"draft",label:"Draft"},{value:"no_feedback",label:"No Feedback"},{value:"open",label:"open"},{value:"lost",label:"lost"}],t={Header:{"Account Name":e(h,{isMulti:!1,required:!0,id:"account_id",placeholder:"Type at least 2 characters to search...",name:"account_id",loadOptions:te,onChange:({value:r})=>{l("account_id",r)},className:"flex-1",defaultValue:{value:(n=a.account)==null?void 0:n.id,label:e("div",{className:"flex items-center",children:m("div",{children:[e("div",{className:"text-sm font-bold",children:(s=a.account)==null?void 0:s.account_name}),e("div",{className:"text-xs text-gray-500",children:(i=a.account)==null?void 0:i.email})]})},(c=a.account)==null?void 0:c.id)}}),"Contact Name":e(h,{isMulti:!1,id:"contact_id",placeholder:"Type at least 2 characters to search...",name:"contact_id",loadOptions:le,onChange:({value:r})=>{l("contact_id",r)},className:"flex-1",defaultValue:{value:(x=a.contact)==null?void 0:x.id,label:m("div",{className:"flex items-center",children:[e("img",{src:(S=a.contact)==null?void 0:S.image,alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),m("div",{children:[e("div",{className:"text-sm font-bold",children:((w=a.contact)==null?void 0:w.first_name)+" "+((O=a.contact)==null?void 0:O.last_name)}),e("div",{className:"text-xs text-gray-500",children:(V=a.contact)==null?void 0:V.email})]})]},(F=a.contact)==null?void 0:F.id)}}),"Quote Name":e(h,{isMulti:!1,id:"quote_id",placeholder:"Type at least 2 characters to search...",name:"quote_id",loadOptions:ie,onChange:({value:r})=>{l("quote_id",r)},className:"flex-1",defaultValue:{value:(k=a.quote)==null?void 0:k.id,label:e("div",{className:"flex items-center",children:e("div",{className:"text-sm font-bold",children:(D=a.quote)==null?void 0:D.subject})},(q=a.quote)==null?void 0:q.id)}}),Currency:e(b,{options:Z,name:"currency",id:"currency",onChange:({value:r})=>{l("currency",r)},className:"flex-1",defaultValue:Z.find(r=>r.value==a.currency)})},"":{"Deals Name":e(h,{isMulti:!1,id:"deal_id",placeholder:"Type at least 2 characters to search...",name:"deal_id",loadOptions:ne,onChange:({value:r})=>{l("deal_id",r)},className:"flex-1",defaultValue:{value:(A=a.deal)==null?void 0:A.id,label:e("div",{className:"flex items-center",children:e("div",{className:"text-sm font-bold",children:(T=a.deal)==null?void 0:T.deal_name})},(j=a.deal)==null?void 0:j.id)}}),"Deal Stage":e(b,{options:d,name:"deal_stage",id:"deal_stage",onChange:({value:r})=>{l("deal_stage",r)},className:"flex-1",defaultValue:d.find(r=>r.value==a.deal_stage)}),"SalesOrders Owner":e(h,{isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:N,onChange:({value:r})=>{l("owner_id",r)},className:"flex-1",defaultValue:{value:(I=a.owner)==null?void 0:I.id,label:m("div",{className:"flex items-center",children:[e("img",{src:(P=a.owner)==null?void 0:P.avatar,alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),m("div",{children:[e("div",{className:"text-sm font-bold",children:(L=a.owner)==null?void 0:L.name}),e("div",{className:"text-xs text-gray-500",children:(M=a.owner)==null?void 0:M.email})]})]},(B=a.owner)==null?void 0:B.id)}}),"Sales Person":e(h,{isMulti:!1,id:"sales_person_id",placeholder:"Type at least 2 characters to search...",name:"sales_person_id",loadOptions:N,onChange:({value:r})=>{l("sales_person_id",r)},className:"flex-1",defaultValue:{value:(E=a.sales_person)==null?void 0:E.id,label:m("div",{className:"flex items-center",children:[e("img",{src:($=a.sales_person)==null?void 0:$.avatar,alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),m("div",{children:[e("div",{className:"text-sm font-bold",children:(Q=a.sales_person)==null?void 0:Q.name}),e("div",{className:"text-xs text-gray-500",children:(U=a.sales_person)==null?void 0:U.email})]})]},(z=a.sales_person)==null?void 0:z.id)}}),"Approved By":e(h,{isMulti:!1,id:"approved_by_id",placeholder:"Type at least 2 characters to search...",name:"approved_by_id",loadOptions:N,onChange:({value:r})=>{l("approved_by_id",r)},className:"flex-1",defaultValue:{value:(H=a.approved_by)==null?void 0:H.id,label:m("div",{className:"flex items-center",children:[e("img",{src:(R=a.approved_by)==null?void 0:R.avatar,alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),m("div",{children:[e("div",{className:"text-sm font-bold",children:(Y=a.approved_by)==null?void 0:Y.name}),e("div",{className:"text-xs text-gray-500",children:(G=a.approved_by)==null?void 0:G.email})]})]},(W=a.approved_by)==null?void 0:W.id)}}),"Exchange Rate":e("input",{id:"exchange_rate",name:"exchange_rate",type:"text",value:"1",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0,defaultValue:a.exchange_rate})}};return e(g,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(v,{fields:t})})})},ue=()=>{const o=p();new _;const a=f(n=>n.salesOrderForm),l=(n,s)=>{o(u({[n]:s}))},d=[{value:"none",label:"-None-"},{value:"single_order",label:"Single Order"},{value:"frame_contract",label:"Frame Contract"},{value:"call_off",label:"Call Off"},{value:"forecast",label:"Forecast"}],t={"Sales Orders Information":{"Purchase Order":e("input",{id:"purchase_order",name:"purchase_order",className:"form-input flex-1 ",onChange:n=>l(n.target.name,n.target.value),defaultValue:a.purchase_order}),"Customer PO Date":e(C,{options:{dateFormat:"Y-m-d ",position:"auto left",defaultDate:`${a.customer_po_date?new Date(a.customer_po_date):""}`},name:"customer_po_date",value:a.customer_po_date?new Date(a.customer_po_date):"",className:"form-input flex-1",onChange:(n,s)=>l("customer_po_date",s)}),"PO Upload":e("input",{id:"po_upload",type:"file",className:"form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1",accept:"*",onChange:n=>re(n,s=>{o(u({field:"po_upload",value:`${s==null?void 0:s.data.data.file_url}`}))}),name:"po_uploadFile"},"po_upload"),"SO Type":e(b,{options:d,name:"po_type",id:"po_type",onChange:({value:n})=>{l("po_type",n)},className:"flex-1",defaultValue:d.find(n=>n.value==a.po_type)}),"Parent SO Nr.":e("input",{id:"parent_so_nr",name:"parent_so_nr",className:"form-input flex-1 ",onChange:n=>l(n.target.name,n.target.value),defaultValue:a.parent_so_nr})},"":{Subject:e("input",{id:"subject",required:!0,name:"subject",className:"form-input flex-1 ",onChange:n=>l(n.target.name,n.target.value),defaultValue:a.subject}),Pending:e("input",{id:"pending",name:"pending",className:"form-input flex-1 ",onChange:n=>l(n.target.name,n.target.value),defaultValue:a.pending}),Status:e(b,{options:J,name:"status",id:"status",onChange:({value:n})=>{l("status",n)},className:"flex-1",defaultValue:J.find(n=>n.value==a.status)}),ZohoBooksID:e("input",{id:"zoho_books_id",name:"zoho_books_id",className:"form-input flex-1 ",onChange:n=>l(n.target.name,n.target.value),defaultValue:a.zoho_books_id})}};return e(g,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(v,{fields:t})})})},pe=()=>(p(),new _,f(a=>a.salesOrderForm),e(g,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(v,{fields:{"Sales Items":{},"":{}}})})})),fe=()=>{var t,n,s;const o=p();new _;const a=f(i=>i.salesOrderForm),l=(i,c)=>{o(u({[i]:c}))},d={"SO line":{"Requested Delivery Date":e(C,{options:{dateFormat:"Y-m-d ",position:"auto left",defaultDate:`${a.requested_delivery_date?new Date(a.requested_delivery_date):""}`},name:"requested_delivery_date",value:a.requested_delivery_date?new Date(a.requested_delivery_date):"",className:"form-input flex-1",onChange:(i,c)=>l("requested_delivery_date",c)}),"Product Name":e(h,{isMulti:!1,id:"product_id",placeholder:"Type at least 2 characters to search...",name:"product_id",loadOptions:se,onChange:({value:i})=>{l("product_id",i)},className:"flex-1",defaultValue:{value:(t=a.product)==null?void 0:t.id,label:e("div",{className:"flex items-center",children:e("div",{className:"text-sm font-bold",children:(n=a.product)==null?void 0:n.product_name})},(s=a.product)==null?void 0:s.id)}}),"Customer part Id":e("input",{id:"customer_part_id",name:"customer_part_id",className:"form-input flex-1 ",onChange:i=>l(i.target.name,i.target.value),defaultValue:a.customer_part_id}),Quantity:e("input",{id:"quantity",name:"quantity",className:"form-input flex-1 ",type:"number",onChange:i=>l(i.target.name,i.target.value),defaultValue:a.quantity}),"List Price":e("input",{type:"number",id:"list_price",name:"list_price",className:"form-input flex-1 ",onChange:i=>l(i.target.name,i.target.value),defaultValue:a.list_price})},"":{"Estimated Delivery Date":e(C,{options:{dateFormat:"Y-m-d ",position:"auto left",defaultDate:`${a.estimated_delivery_date?new Date(a.estimated_delivery_date):""}`},name:"estimated_delivery_date",value:a.estimated_delivery_date?new Date(a.estimated_delivery_date):"",className:"form-input flex-1",onChange:(i,c)=>l("estimated_delivery_date",c)}),"Date Code":e("input",{id:"date_code",name:"date_code",className:"form-input flex-1 ",onChange:i=>l(i.target.name,i.target.value),defaultValue:a.date_code}),SPQ:e("input",{id:"spq",name:"spq",className:"form-input flex-1 ",onChange:i=>l(i.target.name,i.target.value),defaultValue:a.spq}),comment:e("input",{id:"comment",name:"comment",className:"form-input flex-1 ",onChange:i=>l(i.target.name,i.target.value),defaultValue:a.comment})}};return e(g,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(v,{fields:d})})})},he=()=>{var t,n,s;const o=p();new _;const a=f(i=>i.salesOrderForm),l=(i,c)=>{o(u({[i]:c}))},d={"Linked Availability":{"Availability Name":e(h,{isMulti:!1,id:"availability_id",placeholder:"Type at least 2 characters to search...",name:"availability_id",loadOptions:oe,onChange:({value:i})=>{l("availability_id",i)},className:"flex-1",defaultValue:{value:(t=a.availability)==null?void 0:t.id,label:e("div",{className:"flex items-center",children:e("div",{className:"text-sm font-bold",children:(n=a.availability)==null?void 0:n.availability_name})},(s=a.availability)==null?void 0:s.id)}}),"Availability No":e("input",{id:"availability_no",name:"availability_no",className:"form-input flex-1 ",onChange:i=>l(i.target.name,i.target.value),defaultValue:a.availability_no}),"Availability Cost":e("input",{type:"number",id:"availability_cost",name:"availability_cost",className:"form-input flex-1 ",onChange:i=>l(i.target.name,i.target.value),defaultValue:a.availability_cost})},"":{"Availability Quantity":e("input",{type:"number",id:"availability_quantity",name:"availability_quantity",className:"form-input flex-1 ",onChange:i=>l(i.target.name,i.target.value),defaultValue:a.availability_quantity}),"Availability LT":e("input",{id:"availability_lt",name:"availability_lt",className:"form-input flex-1 ",onChange:i=>l(i.target.name,i.target.value),defaultValue:a.availability_lt}),"Availability DC":e("input",{id:"availability_dc",name:"availability_dc",className:"form-input flex-1 ",onChange:i=>l(i.target.name,i.target.value),defaultValue:a.availability_dc})}};return e(g,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(v,{fields:d})})})},ge=()=>{const o=p();new _;const a=f(t=>t.salesOrderForm),l=(t,n)=>{o(u({[t]:n}))},d={"Address Information":{"Billing Street":e("input",{required:!0,id:"billing_street",name:"billing_street",className:"form-input flex-1",defaultValue:a.billing_street,onChange:t=>l(t.target.name,t.target.value)}),"Billing City":e("input",{required:!0,id:"billing_city",name:"billing_city",className:"form-input flex-1",defaultValue:a.billing_city,onChange:t=>l(t.target.name,t.target.value)}),"Billing State":e("input",{id:"billing_state",name:"billing_state",className:"form-input flex-1",defaultValue:a.billing_state,onChange:t=>l(t.target.name,t.target.value)}),"Billing Code":e("input",{required:!0,id:"billing_code",name:"billing_code",className:"form-input flex-1",defaultValue:a.billing_code,onChange:t=>l(t.target.name,t.target.value)}),"Billing Country":e("input",{required:!0,id:"billing_country",name:"billing_country",defaultValue:a.billing_country,className:"form-input flex-1",onChange:t=>l(t.target.name,t.target.value)})},"":{"Shipping Street":e("input",{id:"shipping_street",name:"shipping_street",className:"form-input flex-1",defaultValue:a.shipping_street,onChange:t=>l(t.target.name,t.target.value)}),"Shipping City":e("input",{id:"shipping_city",name:"shipping_city",className:"form-input flex-1",defaultValue:a.shipping_city,onChange:t=>l(t.target.name,t.target.value)}),"Shipping State":e("input",{id:"shipping_state",name:"shipping_state",className:"form-input flex-1",defaultValue:a.shipping_state,onChange:t=>l(t.target.name,t.target.value)}),"Shipping Code":e("input",{id:"shipping_code",name:"shipping_code",className:"form-input flex-1",defaultValue:a.shipping_code,onChange:t=>l(t.target.name,t.target.value)}),"Shipping Country":e("input",{id:"shipping_country",name:"shipping_country",className:"form-input flex-1",defaultValue:a.shipping_country,onChange:t=>l(t.target.name,t.target.value)})}};return e(g,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(v,{fields:d})})})},_e=()=>{const o=f(t=>t.salesOrderForm),a=p();new _;const l=(t,n)=>{a(u({[t]:n}))},d={"Terms and Conditions":{"Terms and Conditions":e("textarea",{id:"terms_conditions",rows:3,name:"terms_conditions",className:"form-textarea flex-1",placeholder:"",onChange:t=>l(t.target.name,t.target.value),defaultValue:o.terms_conditions})},"":{}};return e(g,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(v,{fields:d})})})},ve=()=>{const o=f(t=>t.salesOrderForm),a=p();new _;const l=(t,n)=>{a(u({[t]:n}))},d={"Description Information":{Description:e("textarea",{id:"description",rows:3,name:"description",className:"form-textarea flex-1",placeholder:"",onChange:t=>l(t.target.name,t.target.value),defaultValue:o.description})},"":{}};return e(g,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(v,{fields:d})})})},be=()=>{const o=p(),a=f(t=>t.salesOrderForm),l=(t,n)=>{o(u({[t]:n}))},d={"Technical information":{"Waiting for approval":e("input",{id:"waiting_approval",type:"checkbox",name:"waiting_approval",className:"form-checkbox",onChange:t=>l(t.target.name,t.target.checked),defaultChecked:a.waiting_approval}),Approval:e("input",{id:"approval",type:"checkbox",name:"approval",className:"form-checkbox",onChange:t=>l(t.target.name,t.target.checked),defaultChecked:a.approval}),"Approve Changes":e(b,{options:K,name:"approval_changes",id:"approval_changes",onChange:({value:t})=>{l("approval_changes",t)},className:"flex-1",defaultValue:K.find(t=>t.value==a.approval_changes)}),Tech:e("input",{id:"tech",type:"checkbox",name:"tech",className:"form-checkbox",onChange:t=>l(t.target.name,t.target.checked),defaultChecked:a.tech})},"":{"Technical info":e("textarea",{id:"tech_info",rows:2,name:"tech_info",className:"form-textarea flex-1",placeholder:"",defaultValue:a.tech_info,onChange:t=>l(t.target.name,t.target.value)}),Subform:e("textarea",{id:"subform",rows:2,name:"subform",className:"form-textarea flex-1",placeholder:"",defaultValue:a.subform,onChange:t=>l(t.target.name,t.target.value)})}};return e(g,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(v,{fields:d})})})},xe=()=>m("div",{className:"mt-8 px-4",children:[e(me,{},"HeaderSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ue,{},"SalesOrderInformationSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(pe,{},"SalesItemsSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(fe,{},"SOLineSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(he,{},"LinkedAvailabilitySection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ge,{},"AddressInformationSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(_e,{},"TermsConditionsSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ve,{},"DescriptionInformationSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(be,{},"TechnicalInformationSection")]}),Ae=()=>{const o=f(c=>c.salesOrderForm),[a,l]=y.useState(!0),t=ee().id,n=new _,s=p();y.useEffect(()=>{s(ae("SalesOrder Edit"))});const i=async()=>{const c=await n.fetchSingleSalesOrder(t);if(c.status!=200)return;const x=c.data.data.salesOrder;s(u(x))};return y.useEffect(()=>{i().then(()=>{l(!1)})},[t]),y.useEffect(()=>{s(u({api:"updateSingleSalesOrder",redirectTo:"/sales/edit/:id",action:"edit"}))},[]),a?e(ce,{}):m("div",{className:"px-4",children:[e(de,{formState:o}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(xe,{})})})]})};export{Ae as default};
