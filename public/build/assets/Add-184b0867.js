import{u as p,d as f,a as h,b as e,F as g,w as c,r as I,j as m,c as k,s as A,f as j,x as T}from"./main-8a69f85c.js";import{A as u}from"./react-select-async.esm-a4ef796e.js";import{G as v,R as B,A as M}from"./GenerateFields-2d27b3d4.js";import{S as w}from"./react-select.esm-bac11f38.js";import{q as L,c as V,o as R,a as Y,s as P,r as E,S as Q,h as H,m as q,b as U,i as $}from"./CommonFunctions-3dfebde0.js";import{F as x}from"./index-f68b55f7.js";/* empty css                  */import"./Select-aecb2a80.esm-5c135cbc.js";import"./sweetalert2.all-d4d85d58.js";const z=()=>{const o=p();new f,h(a=>a.purchaseOrderForm);const t=(a,n)=>{o(c({[a]:n}))};return e(g,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(v,{fields:{Header:{"Vendor Name":e(u,{isMulti:!1,required:!0,id:"vendor_id",placeholder:"Type at least 2 characters to search...",name:"vendor_id",loadOptions:L,onChange:({value:a})=>{t("vendor_id",a)},className:"flex-1"}),"Contact Name":e(u,{isMulti:!1,id:"contact_id",placeholder:"Type at least 2 characters to search...",name:"contact_id",loadOptions:V,onChange:({value:a})=>{t("contact_id",a)},className:"flex-1"}),"Availability No":e(u,{isMulti:!1,id:"availability_id",placeholder:"Type at least 2 characters to search...",name:"availability_id",loadOptions:R,onChange:({value:a})=>{t("availability_id",a)},className:"flex-1"}),Currency:e(w,{options:Y,name:"currency",id:"currency",onChange:({value:a})=>{t("currency",a)},className:"flex-1"}),"Exchange Rate":e("input",{id:"exchange_rate",name:"exchange_rate",type:"text",value:"1",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0})},"":{"PO Date":e(x,{options:{dateFormat:"Y-m-d ",position:"auto left"},name:"po_date",value:"",className:"form-input flex-1",onChange:(a,n)=>t("po_date",n)}),"PurchaseOrders Owner":e(u,{isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:P,onChange:({value:a})=>{t("owner_id",a)},className:"flex-1"}),"Approved By":e(u,{isMulti:!1,id:"approved_by_id",placeholder:"Type at least 2 characters to search...",name:"approved_by_id",loadOptions:P,onChange:({value:a})=>{t("approved_by_id",a)},className:"flex-1"})}}})})})},G=()=>{const o=p();new f,h(i=>i.purchaseOrderForm);const t=(i,_)=>{o(c({[i]:_}))};return e(g,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(v,{fields:{"PurchaseOrders Information":{"PO Type":e(w,{options:[{value:"none",label:"-None-"},{value:"single",label:"Single PO"},{value:"frame",label:"Frame PO"},{value:"call_off",label:"Call Off"},{value:"forecast",label:"Forecast PO"}],name:"po_type",id:"po_type",onChange:({value:i})=>{t("po_type",i)},className:"flex-1"}),"Parent PO No.":e(u,{isMulti:!1,id:"parent_po_id",placeholder:"Type at least 2 characters to search...",name:"parent_po_id",loadOptions:E,onChange:({value:i})=>{t("parent_po_id",i)},className:"flex-1"}),ZohoBooksID:e("input",{id:"zoho_books_id",name:"zoho_books_id",className:"form-input flex-1 ",onChange:i=>t(i.target.name,i.target.value)})},"":{Subject:e("input",{id:"subject",required:!0,name:"subject",className:"form-input flex-1 ",onChange:i=>t(i.target.name,i.target.value)}),Status:e(w,{options:Q,name:"status",id:"status",onChange:({value:i})=>{t("status",i)},className:"flex-1"}),Carrier:e(w,{options:[{value:"vendor_forwarder",label:"Vendor Forwarder"},{value:"ups",label:"UPS"},{value:"usps",label:"USPS"},{value:"dhl",label:"DHL"},{value:"blue_dart",label:"BlueDart"}],name:"carrier",id:"carrier",onChange:({value:i})=>{t("carrier",i)},className:"flex-1"}),AWB:e("input",{id:"awb",name:"awb",className:"form-input flex-1 ",onChange:i=>t(i.target.name,i.target.value)}),"Confirmation Vendor":e("input",{id:"confirmation_vendor",type:"file",className:"form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1",accept:"*",onChange:i=>H(i,_=>{o(c({field:"confirmation_vendor",value:`${_==null?void 0:_.data.data.file_url}`}))}),name:"confirmation_vendorFile"},"confirmation_vendor")}}})})})},W=()=>{h(l=>l.purchaseOrderForm);const o=p(),t=new f,[s,a]=I.useState([{id:1,amount:0,list_price:0}]),n=(l,r,d)=>{const b=s.find(y=>y.id===d),S=s.findIndex(y=>y.id===d),N={...b,[l]:r},C={...N,amount:parseInt(N.quantity??0)*parseFloat(N.list_price??0)},O={...s,[S]:C};a(Object.values(O)),o(c({items:O}))},i=async(l,r)=>{const d=await t.fetchSingleProduct(l);if(d.status!==200)return;const b=d.data.data.product,S=s.find(F=>F.id===r),N=s.findIndex(F=>F.id===r),C={...S,product_id:l,list_price:b.unit_price??0,description:b.description},O={...C,amount:parseInt(C.quantity??0)*parseFloat(C.list_price??0)},y={...s,[N]:O};a(Object.values(y)),o(c({items:y}))},_=()=>{let l;l=s!=null&&s.length?s.reduce((d,b)=>b.id>d?b.id:d,s[0].id):0;let r=[...s,{id:l+1,amount:0,list_price:0}];a(r),o(c({items:r}))},D=(l=null)=>{const r=s.filter(d=>d.id!=l.id);a(r),o(c({items:r}))};return e(g,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12 ",children:m("div",{className:"",children:[m("div",{className:"text-lg",children:["Purchase Items ",e(B,{})," :"]}),m("div",{className:"mt-8",children:[e("div",{className:"overflow-x-auto	w-11/12",children:m("table",{className:"table-auto w-5",children:[e("thead",{children:m("tr",{children:[e("th",{className:"w-1",children:"Product Name"}),e("th",{className:"w-1",children:"Quantity"}),e("th",{className:"w-1",children:"List Price"}),e("th",{className:"w-1",children:"Amount"}),e("th",{className:"w-1",children:"Comment"}),e("th",{className:"w-1",children:"Date Code"}),e("th",{className:"w-1",children:"Delivery Date"}),e("th",{className:"w-1",children:"Estimated Delivery Date"})]})}),e("tbody",{children:s.map(l=>m("tr",{className:"align-top",children:[m("td",{children:[e(u,{isMulti:!1,id:"product_id",name:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:q,onChange:({value:r})=>{i(r,l.id)},className:"flex-1  min-w-[200px]"}),",",e("textarea",{name:"description",className:"form-textarea mt-4",placeholder:"Enter Description",onChange:r=>n(r.target.name,r.target.value,l.id),defaultValue:l.description})]}),e("td",{children:e("input",{type:"number",className:"form-input w-32",placeholder:"Quantity",name:"quantity",min:0,onChange:r=>n(r.target.name,r.target.value,l.id),defaultValue:l.quantity})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",placeholder:"Price",name:"list_price",min:0,value:l.list_price,onChange:r=>n(r.target.name,r.target.value,l.id)})}),e("td",{children:e("input",{type:"number",className:"w-32 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",name:"amount",min:0,value:l.amount,disabled:!0,onChange:r=>n(r.target.name,r.target.value,l.id)})}),e("td",{children:e("textarea",{name:"comment",className:"form-textarea  min-w-[200px]",placeholder:"Enter comment",onChange:r=>n(r.target.name,r.target.value,l.id),defaultValue:l.comment})}),e("td",{children:e("input",{name:"date_code",type:"text",className:"form-input min-w-[200px]",defaultValue:l.date_code,onChange:r=>n(r.target.name,r.target.value,l.id)})}),e("td",{children:e(x,{name:"requested_delivery_date",options:{dateFormat:"Y-m-d",position:"auto left"},className:"form-input min-w-[200px]",onChange:(r,d)=>n("requested_delivery_date",d,l.id)})}),e("td",{children:e(x,{name:"estimated_delivery_date",options:{dateFormat:"Y-m-d",position:"auto left"},className:"form-input flex-1 min-w-[200px]",onChange:(r,d)=>n("estimated_delivery_date",d,l.id)})}),e("td",{children:e("button",{type:"button",onClick:()=>D(l),children:m("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},l.id))})]})}),e("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:e("div",{className:"sm:mb-0 mb-6",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>_(),children:"Add Item"})})})]})]},"Purchase Items")})})})},Z=()=>{const o=p();new f,h(a=>a.purchaseOrderForm);const t=(a,n)=>{o(c({[a]:n}))};return e(g,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(v,{fields:{"PO line":{"Requested Delivery Date":e(x,{options:{dateFormat:"Y-m-d ",position:"auto left"},name:"requested_delivery_date",value:"",className:"form-input flex-1",onChange:(a,n)=>t("requested_delivery_date",n)}),"Product Name":e(u,{isMulti:!1,id:"product_id",placeholder:"Type at least 2 characters to search...",name:"product_id",loadOptions:q,onChange:({value:a})=>{t("product_id",a)},className:"flex-1"}),Quantity:e("input",{id:"quantity",name:"quantity",className:"form-input flex-1 ",type:"number",onChange:a=>t(a.target.name,a.target.value)}),Cost:e("input",{type:"number",id:"cost",name:"cost",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value)})},"":{"Confirmed Delivery Date":e(x,{options:{dateFormat:"Y-m-d ",position:"auto left"},name:"confirmed_delivery_date",value:"",className:"form-input flex-1",onChange:(a,n)=>t("confirmed_delivery_date",n)}),"Date Code":e("input",{id:"date_code",name:"date_code",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value)}),SPQ:e("input",{id:"spq",name:"spq",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value)}),comment:e("input",{id:"comment",name:"comment",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value)})}}})})})},J=()=>{const o=p();new f,h(n=>n.purchaseOrderForm);const t=(n,i)=>{o(c({[n]:i}))};return e(g,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(v,{fields:{"Linked SO":{"Account Name":e(u,{isMulti:!1,id:"account_id",placeholder:"Type at least 2 characters to search...",name:"account_id",loadOptions:U,onChange:({value:n})=>{t("account_id",n)},className:"flex-1"}),"SO Number":e(u,{isMulti:!1,id:"sales_order_id",placeholder:"Type at least 2 characters to search...",name:"sales_order_id",loadOptions:$,onChange:({value:n})=>{t("sales_order_id",n)},className:"flex-1"}),"Quantity SO":e("input",{id:"quantity_so",type:"number",name:"quantity_so",className:"form-input flex-1 ",onChange:n=>t(n.target.name,n.target.value)}),Resale:e("input",{id:"resale",type:"number",name:"resale",className:"form-input flex-1 ",onChange:n=>t(n.target.name,n.target.value)}),"SO Status":e(w,{options:[{value:"none",label:"-None-"},{value:"draft",label:"Draft"},{value:"request_for_approval",label:"Request For Approval"},{value:"approved",label:"Approved"},{value:"confirmed",label:"Confirmed"},{value:"packed",label:"Packed"},{value:"shipped",label:"Shipped"}],name:"so_status",id:"so_status",onChange:({value:n})=>{t("so_status",n)},className:"flex-1"})},"":{"Requested D.D.":e(x,{options:{dateFormat:"Y-m-d ",position:"auto left"},name:"so_requested_d_d",value:"",className:"form-input flex-1",onChange:(n,i)=>t("so_requested_d_d",i)}),"Confirmed D.D.":e(x,{options:{dateFormat:"Y-m-d ",position:"auto left"},name:"so_confirmed_d_d",value:"",className:"form-input flex-1",onChange:(n,i)=>t("so_confirmed_d_d",i)}),"D/C":e("input",{id:"dc_so",name:"dc_so",className:"form-input flex-1 ",onChange:n=>t(n.target.name,n.target.value)}),"SPQ SO":e("input",{id:"spq_so",name:"spq_so",className:"form-input flex-1 ",onChange:n=>t(n.target.name,n.target.value)})}}})})})},K=()=>{const o=p();new f,h(a=>a.purchaseOrderForm);const t=(a,n)=>{o(c({[a]:n}))};return e(g,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(v,{fields:{"Address Information":{"Billing Street":e("input",{required:!0,id:"billing_street",name:"billing_street",className:"form-input flex-1",onChange:a=>t(a.target.name,a.target.value)}),"Billing City":e("input",{required:!0,id:"billing_city",name:"billing_city",className:"form-input flex-1",onChange:a=>t(a.target.name,a.target.value)}),"Billing State":e("input",{id:"billing_state",name:"billing_state",className:"form-input flex-1",onChange:a=>t(a.target.name,a.target.value)}),"Billing Code":e("input",{required:!0,id:"billing_code",name:"billing_code",className:"form-input flex-1",onChange:a=>t(a.target.name,a.target.value)}),"Billing Country":e("input",{required:!0,id:"billing_country",name:"billing_country",className:"form-input flex-1",onChange:a=>t(a.target.name,a.target.value)})},"":{"Shipping Street":e("input",{id:"shipping_street",name:"shipping_street",className:"form-input flex-1",onChange:a=>t(a.target.name,a.target.value)}),"Shipping City":e("input",{id:"shipping_city",name:"shipping_city",className:"form-input flex-1",onChange:a=>t(a.target.name,a.target.value)}),"Shipping State":e("input",{id:"shipping_state",name:"shipping_state",className:"form-input flex-1",onChange:a=>t(a.target.name,a.target.value)}),"Shipping Code":e("input",{id:"shipping_code",name:"shipping_code",className:"form-input flex-1",onChange:a=>t(a.target.name,a.target.value)}),"Shipping Country":e("input",{id:"shipping_country",name:"shipping_country",className:"form-input flex-1",onChange:a=>t(a.target.name,a.target.value)})}}})})})},X=()=>{h(a=>a.purchaseOrderForm);const o=p();new f;const t=(a,n)=>{o(c({[a]:n}))};return e(g,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(v,{fields:{"Terms and Conditions":{"Terms and Conditions":e("textarea",{id:"terms_conditions",rows:3,name:"terms_conditions",className:"form-textarea flex-1",placeholder:"",onChange:a=>t(a.target.name,a.target.value)})},"":{}}})})})},ee=()=>{h(a=>a.purchaseOrderForm);const o=p();new f;const t=(a,n)=>{o(c({[a]:n}))};return e(g,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(v,{fields:{"Description Information":{Description:e("textarea",{id:"description",rows:3,name:"description",className:"form-textarea flex-1",placeholder:"",onChange:a=>t(a.target.name,a.target.value)})},"":{}}})})})},ae=()=>m("div",{className:"mt-8 px-4",children:[e(z,{},"HeaderSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(G,{},"PurchaseOrderInformationSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(W,{},"PurchaseItemsSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Z,{},"POLineSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(J,{},"LinkedSOSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(K,{},"AddressInformationSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(X,{},"TermsConditionsSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ee,{},"DescriptionInformationSection")]}),me=()=>{const{hasPermission:o}=k(),t=h(a=>a.purchaseOrderForm),s=p();return I.useEffect(()=>{s(A("Purchase Order Add"))}),o("create-purchase-order")?m("div",{className:"px-4",children:[e(M,{formState:t,resetForm:T}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(ae,{})})})]}):e(j,{})};export{me as default};