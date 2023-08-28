import{u as s,a as o,b as a,F as m,i as c,j as b,r as x,s as v}from"./main-7587a7bd.js";import{a as p,A as l}from"./react-select-async.esm-4f8c9a58.js";import{G as u,o as y,c as C,m as N,a as O,s as _,p as S,S as w,h as F,l as P,b as q,i as D}from"./CommonFunctions-21e80599.js";import{S as h}from"./react-select.esm-d562fb5f.js";import{F as g}from"./index-59d3072a.js";import{A as k}from"./ActionButtonsComponent-f183376c.js";/* empty css                  */import"./Select-aecb2a80.esm-0cf48af5.js";import"./sweetalert2.all-85428551.js";const A=()=>{const i=s();new p,o(e=>e.purchaseOrderForm);const t=(e,n)=>{i(c({[e]:n}))};return a(m,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(u,{fields:{Header:{"Vendor Name":a(l,{isMulti:!1,required:!0,id:"vendor_id",placeholder:"Type at least 2 characters to search...",name:"vendor_id",loadOptions:y,onChange:({value:e})=>{t("vendor_id",e)},className:"flex-1"}),"Contact Name":a(l,{isMulti:!1,id:"contact_id",placeholder:"Type at least 2 characters to search...",name:"contact_id",loadOptions:C,onChange:({value:e})=>{t("contact_id",e)},className:"flex-1"}),"Availability No":a(l,{isMulti:!1,id:"availability_id",placeholder:"Type at least 2 characters to search...",name:"availability_id",loadOptions:N,onChange:({value:e})=>{t("availability_id",e)},className:"flex-1"}),Currency:a(h,{options:O,name:"currency",id:"currency",onChange:({value:e})=>{t("currency",e)},className:"flex-1"}),"Exchange Rate":a("input",{id:"exchange_rate",name:"exchange_rate",type:"text",value:"1",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0})},"":{"PO Date":a(g,{options:{dateFormat:"Y-m-d ",position:"auto left"},name:"po_date",value:"",className:"form-input flex-1",onChange:(e,n)=>t("po_date",n)}),"PurchaseOrders Owner":a(l,{isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:_,onChange:({value:e})=>{t("owner_id",e)},className:"flex-1"}),"Approved By":a(l,{isMulti:!1,id:"approved_by_id",placeholder:"Type at least 2 characters to search...",name:"approved_by_id",loadOptions:_,onChange:({value:e})=>{t("approved_by_id",e)},className:"flex-1"})}}})})})},T=()=>{const i=s();new p,o(r=>r.purchaseOrderForm);const t=(r,f)=>{i(c({[r]:f}))};return a(m,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(u,{fields:{"PurchaseOrders Information":{"PO Type":a(h,{options:[{value:"none",label:"-None-"},{value:"single",label:"Single PO"},{value:"frame",label:"Frame PO"},{value:"call_off",label:"Call Off"},{value:"forecast",label:"Forecast PO"}],name:"po_type",id:"po_type",onChange:({value:r})=>{t("purchapo_typeseOrder_type",r)},className:"flex-1"}),"Parent PO No.":a(l,{isMulti:!1,id:"parent_po_id",placeholder:"Type at least 2 characters to search...",name:"parent_po_id",loadOptions:S,onChange:({value:r})=>{t("parent_po_id",r)},className:"flex-1"}),ZohoBooksID:a("input",{id:"zoho_books_id",name:"zoho_books_id",className:"form-input flex-1 ",onChange:r=>t(r.target.name,r.target.value)})},"":{Subject:a("input",{id:"subject",required:!0,name:"subject",className:"form-input flex-1 ",onChange:r=>t(r.target.name,r.target.value)}),Status:a(h,{options:w,name:"status",id:"status",onChange:({value:r})=>{t("status",r)},className:"flex-1"}),Carrier:a(h,{options:[{value:"vendor_forwarder",label:"Vendor Forwarder"},{value:"ups",label:"UPS"},{value:"usps",label:"USPS"},{value:"dhl",label:"DHL"},{value:"blue_dart",label:"BlueDart"}],name:"carrier",id:"carrier",onChange:({value:r})=>{t("carrier",r)},className:"flex-1"}),AWB:a("input",{id:"awb",name:"awb",className:"form-input flex-1 ",onChange:r=>t(r.target.name,r.target.value)}),"Confirmation Vendor":a("input",{id:"confirmation_vendor",type:"file",className:"form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1",accept:"*",onChange:r=>F(r,f=>{i(c({field:"confirmation_vendor",value:`${f==null?void 0:f.data.data.file_url}`}))}),name:"confirmation_vendorFile"},"confirmation_vendor")}}})})})},j=()=>(s(),new p,o(t=>t.purchaseOrderForm),a(m,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(u,{fields:{"Purchase Items":{},"":{}}})})})),I=()=>{const i=s();new p,o(e=>e.purchaseOrderForm);const t=(e,n)=>{i(c({[e]:n}))};return a(m,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(u,{fields:{"PO line":{"Requested Delivery Date":a(g,{options:{dateFormat:"Y-m-d ",position:"auto left"},name:"requested_delivery_date",value:"",className:"form-input flex-1",onChange:(e,n)=>t("requested_delivery_date",n)}),"Product Name":a(l,{isMulti:!1,id:"product_id",placeholder:"Type at least 2 characters to search...",name:"product_id",loadOptions:P,onChange:({value:e})=>{t("product_id",e)},className:"flex-1"}),Quantity:a("input",{id:"quantity",name:"quantity",className:"form-input flex-1 ",type:"number",onChange:e=>t(e.target.name,e.target.value)}),Cost:a("input",{type:"number",id:"cost",name:"cost",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)})},"":{"Confirmed Delivery Date":a(g,{options:{dateFormat:"Y-m-d ",position:"auto left"},name:"confirmed_delivery_date",value:"",className:"form-input flex-1",onChange:(e,n)=>t("confirmed_delivery_date",n)}),"Date Code":a("input",{id:"date_code",name:"date_code",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)}),SPQ:a("input",{id:"spq",name:"spq",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)}),comment:a("input",{id:"comment",name:"comment",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)})}}})})})},B=()=>{const i=s();new p,o(n=>n.purchaseOrderForm);const t=(n,r)=>{i(c({[n]:r}))};return a(m,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(u,{fields:{"Linked SO":{"Account Name":a(l,{isMulti:!1,id:"account_id",placeholder:"Type at least 2 characters to search...",name:"account_id",loadOptions:q,onChange:({value:n})=>{t("account_id",n)},className:"flex-1"}),"SO Number":a(l,{isMulti:!1,id:"sales_order_id",placeholder:"Type at least 2 characters to search...",name:"sales_order_id",loadOptions:D,onChange:({value:n})=>{t("sales_order_id",n)},className:"flex-1"}),"Quantity SO":a("input",{id:"quantity_so",type:"number",name:"quantity_so",className:"form-input flex-1 ",onChange:n=>t(n.target.name,n.target.value)}),Resale:a("input",{id:"resale",type:"number",name:"resale",className:"form-input flex-1 ",onChange:n=>t(n.target.name,n.target.value)}),"SO Status":a(h,{options:[{value:"none",label:"-None-"},{value:"draft",label:"Draft"},{value:"request_for_approval",label:"Request For Approval"},{value:"approved",label:"Approved"},{value:"confirmed",label:"Confirmed"},{value:"packed",label:"Packed"},{value:"shipped",label:"Shipped"}],name:"so_status",id:"so_status",onChange:({value:n})=>{t("so_status",n)},className:"flex-1"})},"":{"Requested D.D.":a(g,{options:{dateFormat:"Y-m-d ",position:"auto left"},name:"so_requested_d_d",value:"",className:"form-input flex-1",onChange:(n,r)=>t("so_requested_d_d",r)}),"Confirmed D.D.":a(g,{options:{dateFormat:"Y-m-d ",position:"auto left"},name:"so_confirmed_d_d",value:"",className:"form-input flex-1",onChange:(n,r)=>t("so_confirmed_d_d",r)}),"D/C":a("input",{id:"dc",name:"dc",className:"form-input flex-1 ",onChange:n=>t(n.target.name,n.target.value)}),"SPQ SO":a("input",{id:"spq_so",name:"spq_so",className:"form-input flex-1 ",onChange:n=>t(n.target.name,n.target.value)})}}})})})},M=()=>{const i=s();new p,o(e=>e.purchaseOrderForm);const t=(e,n)=>{i(c({[e]:n}))};return a(m,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(u,{fields:{"Address Information":{"Billing Street":a("input",{required:!0,id:"billing_street",name:"billing_street",className:"form-input flex-1",onChange:e=>t(e.target.name,e.target.value)}),"Billing City":a("input",{required:!0,id:"billing_city",name:"billing_city",className:"form-input flex-1",onChange:e=>t(e.target.name,e.target.value)}),"Billing State":a("input",{id:"billing_state",name:"billing_state",className:"form-input flex-1",onChange:e=>t(e.target.name,e.target.value)}),"Billing Code":a("input",{required:!0,id:"billing_code",name:"billing_code",className:"form-input flex-1",onChange:e=>t(e.target.name,e.target.value)}),"Billing Country":a("input",{required:!0,id:"billing_country",name:"billing_country",className:"form-input flex-1",onChange:e=>t(e.target.name,e.target.value)})},"":{"Shipping Street":a("input",{id:"shipping_street",name:"shipping_street",className:"form-input flex-1",onChange:e=>t(e.target.name,e.target.value)}),"Shipping City":a("input",{id:"shipping_city",name:"shipping_city",className:"form-input flex-1",onChange:e=>t(e.target.name,e.target.value)}),"Shipping State":a("input",{id:"shipping_state",name:"shipping_state",className:"form-input flex-1",onChange:e=>t(e.target.name,e.target.value)}),"Shipping Code":a("input",{id:"shipping_code",name:"shipping_code",className:"form-input flex-1",onChange:e=>t(e.target.name,e.target.value)}),"Shipping Country":a("input",{id:"shipping_country",name:"shipping_country",className:"form-input flex-1",onChange:e=>t(e.target.name,e.target.value)})}}})})})},L=()=>{o(e=>e.purchaseOrderForm);const i=s();new p;const t=(e,n)=>{i(c({[e]:n}))};return a(m,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(u,{fields:{"Terms and Conditions":{"Terms and Conditions":a("textarea",{id:"terms_conditions",rows:3,name:"terms_conditions",className:"form-textarea flex-1",placeholder:"",onChange:e=>t(e.target.name,e.target.value)})},"":{}}})})})},R=()=>{o(e=>e.purchaseOrderForm);const i=s();new p;const t=(e,n)=>{i(c({[e]:n}))};return a(m,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(u,{fields:{"Description Information":{Description:a("textarea",{id:"description",rows:3,name:"description",className:"form-textarea flex-1",placeholder:"",onChange:e=>t(e.target.name,e.target.value)})},"":{}}})})})},Y=()=>b("div",{className:"mt-8 px-4",children:[a(A,{},"HeaderSection"),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(T,{},"PurchaseOrderInformationSection"),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(j,{},"PurchaseItemsSection"),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(I,{},"POLineSection"),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(B,{},"LinkedSOSection"),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(M,{},"AddressInformationSection"),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(L,{},"TermsConditionsSection"),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(R,{},"DescriptionInformationSection")]}),Z=()=>{const i=o(d=>d.purchaseOrderForm),t=s();return x.useEffect(()=>{t(v("Purchase Order Add"))}),b("div",{className:"px-4",children:[a(k,{formState:i}),a("div",{className:"flex xl:flex-row flex-col gap-2.5",children:a("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:a(Y,{})})})]})};export{Z as default};
