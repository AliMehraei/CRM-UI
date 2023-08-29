import{u as p,a as h,b as e,F as f,i as c,r as w,j as m,s as S}from"./main-77e2ced5.js";import{a as v,A as u}from"./react-select-async.esm-3c543bf6.js";import{G as b,o as F,c as P,m as D,a as q,s as C,p as k,S as I,h as A,R as T,l as O,b as j,i as V}from"./CommonFunctions-ad427eed.js";import{S as x}from"./react-select.esm-73678beb.js";import{F as _}from"./index-c5095f60.js";import{A as B}from"./ActionButtonsComponent-a955f533.js";/* empty css                  */import"./Select-aecb2a80.esm-420bfc07.js";import"./sweetalert2.all-fc958ea3.js";const M=()=>{const i=p();new v,h(a=>a.purchaseOrderForm);const t=(a,n)=>{i(c({[a]:n}))};return e(f,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(b,{fields:{Header:{"Vendor Name":e(u,{isMulti:!1,required:!0,id:"vendor_id",placeholder:"Type at least 2 characters to search...",name:"vendor_id",loadOptions:F,onChange:({value:a})=>{t("vendor_id",a)},className:"flex-1"}),"Contact Name":e(u,{isMulti:!1,id:"contact_id",placeholder:"Type at least 2 characters to search...",name:"contact_id",loadOptions:P,onChange:({value:a})=>{t("contact_id",a)},className:"flex-1"}),"Availability No":e(u,{isMulti:!1,id:"availability_id",placeholder:"Type at least 2 characters to search...",name:"availability_id",loadOptions:D,onChange:({value:a})=>{t("availability_id",a)},className:"flex-1"}),Currency:e(x,{options:q,name:"currency",id:"currency",onChange:({value:a})=>{t("currency",a)},className:"flex-1"}),"Exchange Rate":e("input",{id:"exchange_rate",name:"exchange_rate",type:"text",value:"1",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0})},"":{"PO Date":e(_,{options:{dateFormat:"Y-m-d ",position:"auto left"},name:"po_date",value:"",className:"form-input flex-1",onChange:(a,n)=>t("po_date",n)}),"PurchaseOrders Owner":e(u,{isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:C,onChange:({value:a})=>{t("owner_id",a)},className:"flex-1"}),"Approved By":e(u,{isMulti:!1,id:"approved_by_id",placeholder:"Type at least 2 characters to search...",name:"approved_by_id",loadOptions:C,onChange:({value:a})=>{t("approved_by_id",a)},className:"flex-1"})}}})})})},L=()=>{const i=p();new v,h(r=>r.purchaseOrderForm);const t=(r,g)=>{i(c({[r]:g}))};return e(f,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(b,{fields:{"PurchaseOrders Information":{"PO Type":e(x,{options:[{value:"none",label:"-None-"},{value:"single",label:"Single PO"},{value:"frame",label:"Frame PO"},{value:"call_off",label:"Call Off"},{value:"forecast",label:"Forecast PO"}],name:"po_type",id:"po_type",onChange:({value:r})=>{t("purchapo_typeseOrder_type",r)},className:"flex-1"}),"Parent PO No.":e(u,{isMulti:!1,id:"parent_po_id",placeholder:"Type at least 2 characters to search...",name:"parent_po_id",loadOptions:k,onChange:({value:r})=>{t("parent_po_id",r)},className:"flex-1"}),ZohoBooksID:e("input",{id:"zoho_books_id",name:"zoho_books_id",className:"form-input flex-1 ",onChange:r=>t(r.target.name,r.target.value)})},"":{Subject:e("input",{id:"subject",required:!0,name:"subject",className:"form-input flex-1 ",onChange:r=>t(r.target.name,r.target.value)}),Status:e(x,{options:I,name:"status",id:"status",onChange:({value:r})=>{t("status",r)},className:"flex-1"}),Carrier:e(x,{options:[{value:"vendor_forwarder",label:"Vendor Forwarder"},{value:"ups",label:"UPS"},{value:"usps",label:"USPS"},{value:"dhl",label:"DHL"},{value:"blue_dart",label:"BlueDart"}],name:"carrier",id:"carrier",onChange:({value:r})=>{t("carrier",r)},className:"flex-1"}),AWB:e("input",{id:"awb",name:"awb",className:"form-input flex-1 ",onChange:r=>t(r.target.name,r.target.value)}),"Confirmation Vendor":e("input",{id:"confirmation_vendor",type:"file",className:"form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1",accept:"*",onChange:r=>A(r,g=>{i(c({field:"confirmation_vendor",value:`${g==null?void 0:g.data.data.file_url}`}))}),name:"confirmation_vendorFile"},"confirmation_vendor")}}})})})},R=()=>{const i=h(s=>s.purchaseOrderForm),t=p(),o=(s,l,d)=>{const y={...i.items[d],[s]:l},N={...i.items,[d]:y};n(Object.values(N)),t(c({items:N}))},[a,n]=w.useState([{id:0}]),r=()=>{let s;s=a!=null&&a.length?a.reduce((d,y)=>y.id>d?y.id:d,a[0].id):0;let l=[...a,{id:s+1}];n(l),t(c({items:l}))},g=(s=null)=>{const l=a.filter(d=>d.id!=s.id);n(l),t(c({items:l}))};return e(f,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12 ",children:m("div",{className:"",children:[m("div",{className:"text-lg",children:["Purchase Items ",e(T,{})," :"]}),m("div",{className:"mt-8",children:[e("div",{className:"overflow-x-auto	w-11/12",children:m("table",{className:"table-auto w-5",children:[e("thead",{children:m("tr",{children:[e("th",{className:"w-1",children:"Product Name"}),e("th",{className:"w-1",children:"Quantity"}),e("th",{className:"w-1",children:"List Price"}),e("th",{className:"w-1",children:"Amount"}),e("th",{className:"w-1",children:"Comment"}),e("th",{className:"w-1",children:"Date Code"}),e("th",{className:"w-1",children:"Delivery Date"}),e("th",{className:"w-1",children:"Estimated Delivery Date"})]})}),e("tbody",{children:a.map(s=>m("tr",{className:"align-top",children:[m("td",{children:[e(u,{isMulti:!1,id:"product_id",name:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:O,onChange:({value:l})=>{o("product_id",l,s.id)},className:"flex-1  min-w-[200px]"}),",",e("textarea",{name:"description",className:"form-textarea mt-4",placeholder:"Enter Description",onChange:l=>o(l.target.name,l.target.value,s.id),defaultValue:s.description})]}),e("td",{children:e("input",{type:"number",className:"form-input w-32",placeholder:"Quantity",name:"quantity",min:0,onChange:l=>o(l.target.name,l.target.value,s.id),defaultValue:s.quantity})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",placeholder:"Price",name:"list_price",min:0,defaultValue:s.list_price,onChange:l=>o(l.target.name,l.target.value,s.id)})}),e("td",{children:e("input",{type:"number",className:"w-32 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",name:"amount",min:0,disabled:!0,onChange:l=>o(l.target.name,l.target.value,s.id),defaultValue:s.amount})}),e("td",{children:e("textarea",{name:"comment",className:"form-textarea  min-w-[200px]",placeholder:"Enter comment",onChange:l=>o(l.target.name,l.target.value,s.id),defaultValue:s.comment})}),e("td",{children:e("input",{name:"date_code",type:"text",className:"form-input min-w-[200px]",defaultValue:s.date_code,onChange:l=>o(l.target.name,l.target.value,s.id)})}),e("td",{children:e(_,{name:"requested_delivery_date",options:{dateFormat:"Y-m-d",position:"auto left",defaultDate:`${i.requested_delivery_date?new Date(i.requested_delivery_date):""}`},className:"form-input min-w-[200px]",value:i.requested_delivery_date?new Date(i.requested_delivery_date):"",onChange:(l,d)=>o("last_modified",d,s.id),defaultValue:i.requested_delivery_date})}),e("td",{children:e(_,{name:"estimated_delivery_date",options:{dateFormat:"Y-m-d",position:"auto left",defaultDate:`${i.estimated_delivery_date?new Date(i.estimated_delivery_date):""}`},className:"form-input flex-1 min-w-[200px]",value:i.estimated_delivery_date?new Date(i.estimated_delivery_date):"",onChange:(l,d)=>o("last_modified",d,s.id),defaultValue:i.estimated_delivery_date})}),e("td",{children:e("button",{type:"button",onClick:()=>g(s),children:m("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},s.id))})]})}),e("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:e("div",{className:"sm:mb-0 mb-6",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>r(),children:"Add Item"})})})]})]},"Purchase Items")})})})},Y=()=>{const i=p();new v,h(a=>a.purchaseOrderForm);const t=(a,n)=>{i(c({[a]:n}))};return e(f,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(b,{fields:{"PO line":{"Requested Delivery Date":e(_,{options:{dateFormat:"Y-m-d ",position:"auto left"},name:"requested_delivery_date",value:"",className:"form-input flex-1",onChange:(a,n)=>t("requested_delivery_date",n)}),"Product Name":e(u,{isMulti:!1,id:"product_id",placeholder:"Type at least 2 characters to search...",name:"product_id",loadOptions:O,onChange:({value:a})=>{t("product_id",a)},className:"flex-1"}),Quantity:e("input",{id:"quantity",name:"quantity",className:"form-input flex-1 ",type:"number",onChange:a=>t(a.target.name,a.target.value)}),Cost:e("input",{type:"number",id:"cost",name:"cost",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value)})},"":{"Confirmed Delivery Date":e(_,{options:{dateFormat:"Y-m-d ",position:"auto left"},name:"confirmed_delivery_date",value:"",className:"form-input flex-1",onChange:(a,n)=>t("confirmed_delivery_date",n)}),"Date Code":e("input",{id:"date_code",name:"date_code",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value)}),SPQ:e("input",{id:"spq",name:"spq",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value)}),comment:e("input",{id:"comment",name:"comment",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value)})}}})})})},E=()=>{const i=p();new v,h(n=>n.purchaseOrderForm);const t=(n,r)=>{i(c({[n]:r}))};return e(f,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(b,{fields:{"Linked SO":{"Account Name":e(u,{isMulti:!1,id:"account_id",placeholder:"Type at least 2 characters to search...",name:"account_id",loadOptions:j,onChange:({value:n})=>{t("account_id",n)},className:"flex-1"}),"SO Number":e(u,{isMulti:!1,id:"sales_order_id",placeholder:"Type at least 2 characters to search...",name:"sales_order_id",loadOptions:V,onChange:({value:n})=>{t("sales_order_id",n)},className:"flex-1"}),"Quantity SO":e("input",{id:"quantity_so",type:"number",name:"quantity_so",className:"form-input flex-1 ",onChange:n=>t(n.target.name,n.target.value)}),Resale:e("input",{id:"resale",type:"number",name:"resale",className:"form-input flex-1 ",onChange:n=>t(n.target.name,n.target.value)}),"SO Status":e(x,{options:[{value:"none",label:"-None-"},{value:"draft",label:"Draft"},{value:"request_for_approval",label:"Request For Approval"},{value:"approved",label:"Approved"},{value:"confirmed",label:"Confirmed"},{value:"packed",label:"Packed"},{value:"shipped",label:"Shipped"}],name:"so_status",id:"so_status",onChange:({value:n})=>{t("so_status",n)},className:"flex-1"})},"":{"Requested D.D.":e(_,{options:{dateFormat:"Y-m-d ",position:"auto left"},name:"so_requested_d_d",value:"",className:"form-input flex-1",onChange:(n,r)=>t("so_requested_d_d",r)}),"Confirmed D.D.":e(_,{options:{dateFormat:"Y-m-d ",position:"auto left"},name:"so_confirmed_d_d",value:"",className:"form-input flex-1",onChange:(n,r)=>t("so_confirmed_d_d",r)}),"D/C":e("input",{id:"dc",name:"dc",className:"form-input flex-1 ",onChange:n=>t(n.target.name,n.target.value)}),"SPQ SO":e("input",{id:"spq_so",name:"spq_so",className:"form-input flex-1 ",onChange:n=>t(n.target.name,n.target.value)})}}})})})},Q=()=>{const i=p();new v,h(a=>a.purchaseOrderForm);const t=(a,n)=>{i(c({[a]:n}))};return e(f,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(b,{fields:{"Address Information":{"Billing Street":e("input",{required:!0,id:"billing_street",name:"billing_street",className:"form-input flex-1",onChange:a=>t(a.target.name,a.target.value)}),"Billing City":e("input",{required:!0,id:"billing_city",name:"billing_city",className:"form-input flex-1",onChange:a=>t(a.target.name,a.target.value)}),"Billing State":e("input",{id:"billing_state",name:"billing_state",className:"form-input flex-1",onChange:a=>t(a.target.name,a.target.value)}),"Billing Code":e("input",{required:!0,id:"billing_code",name:"billing_code",className:"form-input flex-1",onChange:a=>t(a.target.name,a.target.value)}),"Billing Country":e("input",{required:!0,id:"billing_country",name:"billing_country",className:"form-input flex-1",onChange:a=>t(a.target.name,a.target.value)})},"":{"Shipping Street":e("input",{id:"shipping_street",name:"shipping_street",className:"form-input flex-1",onChange:a=>t(a.target.name,a.target.value)}),"Shipping City":e("input",{id:"shipping_city",name:"shipping_city",className:"form-input flex-1",onChange:a=>t(a.target.name,a.target.value)}),"Shipping State":e("input",{id:"shipping_state",name:"shipping_state",className:"form-input flex-1",onChange:a=>t(a.target.name,a.target.value)}),"Shipping Code":e("input",{id:"shipping_code",name:"shipping_code",className:"form-input flex-1",onChange:a=>t(a.target.name,a.target.value)}),"Shipping Country":e("input",{id:"shipping_country",name:"shipping_country",className:"form-input flex-1",onChange:a=>t(a.target.name,a.target.value)})}}})})})},$=()=>{h(a=>a.purchaseOrderForm);const i=p();new v;const t=(a,n)=>{i(c({[a]:n}))};return e(f,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(b,{fields:{"Terms and Conditions":{"Terms and Conditions":e("textarea",{id:"terms_conditions",rows:3,name:"terms_conditions",className:"form-textarea flex-1",placeholder:"",onChange:a=>t(a.target.name,a.target.value)})},"":{}}})})})},H=()=>{h(a=>a.purchaseOrderForm);const i=p();new v;const t=(a,n)=>{i(c({[a]:n}))};return e(f,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(b,{fields:{"Description Information":{Description:e("textarea",{id:"description",rows:3,name:"description",className:"form-textarea flex-1",placeholder:"",onChange:a=>t(a.target.name,a.target.value)})},"":{}}})})})},U=()=>m("div",{className:"mt-8 px-4",children:[e(M,{},"HeaderSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(L,{},"PurchaseOrderInformationSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(R,{},"PurchaseItemsSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Y,{},"POLineSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(E,{},"LinkedSOSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Q,{},"AddressInformationSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e($,{},"TermsConditionsSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(H,{},"DescriptionInformationSection")]}),te=()=>{const i=h(o=>o.purchaseOrderForm),t=p();return w.useEffect(()=>{t(S("Purchase Order Add"))}),m("div",{className:"px-4",children:[e(B,{formState:i}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(U,{})})})]})};export{te as default};