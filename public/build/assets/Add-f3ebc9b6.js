import{u as l,a as r,b as a,F as m,h as d,j as _,r as b,s as x}from"./main-7587a7bd.js";import{a as u,A as c}from"./react-select-async.esm-4f8c9a58.js";import{G as p,b as v,c as y,f as C,a as N,k as S,s as f,h as w,S as O,l as F,m as k,n as A}from"./CommonFunctions-21e80599.js";import{S as h}from"./react-select.esm-d562fb5f.js";import{F as g}from"./index-59d3072a.js";import{A as T}from"./ActionButtonsComponent-f183376c.js";/* empty css                  */import"./Select-aecb2a80.esm-0cf48af5.js";import"./sweetalert2.all-85428551.js";const D=()=>{const i=l();new u,r(t=>t.salesOrderForm);const n=(t,o)=>{i(d({[t]:o}))};return a(m,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(p,{fields:{Header:{"Account Name":a(c,{isMulti:!1,required:!0,id:"account_id",placeholder:"Type at least 2 characters to search...",name:"account_id",loadOptions:v,onChange:({value:t})=>{n("account_id",t)},className:"flex-1"}),"Contact Name":a(c,{isMulti:!1,id:"contact_id",placeholder:"Type at least 2 characters to search...",name:"contact_id",loadOptions:y,onChange:({value:t})=>{n("contact_id",t)},className:"flex-1"}),"Quote Name":a(c,{isMulti:!1,id:"quote_id",placeholder:"Type at least 2 characters to search...",name:"quote_id",loadOptions:C,onChange:({value:t})=>{n("quote_id",t)},className:"flex-1"}),Currency:a(h,{options:N,name:"currency",id:"currency",onChange:({value:t})=>{n("currency",t)},className:"flex-1"})},"":{"Deals Name":a(c,{isMulti:!1,id:"deal_id",placeholder:"Type at least 2 characters to search...",name:"deal_id",loadOptions:S,onChange:({value:t})=>{n("deal_id",t)},className:"flex-1"}),"Deal Stage":a(h,{options:[{value:"none",label:"-None-"},{value:"draft",label:"Draft"},{value:"no_feedback",label:"No Feedback"},{value:"open",label:"open"},{value:"lost",label:"lost"}],name:"deal_stage",id:"deal_stage",onChange:({value:t})=>{n("deal_stage",t)},className:"flex-1"}),"SalesOrders Owner":a(c,{isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:f,onChange:({value:t})=>{n("owner_id",t)},className:"flex-1"}),"Sales Person":a(c,{isMulti:!1,id:"sales_person_id",placeholder:"Type at least 2 characters to search...",name:"sales_person_id",loadOptions:f,onChange:({value:t})=>{n("sales_person_id",t)},className:"flex-1"}),"Approved By":a(c,{isMulti:!1,id:"approved_by_id",placeholder:"Type at least 2 characters to search...",name:"approved_by_id",loadOptions:f,onChange:({value:t})=>{n("approved_by_id",t)},className:"flex-1"}),"Exchange Rate":a("input",{id:"exchange_rate",name:"exchange_rate",type:"text",value:"1",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0})}}})})})},q=()=>{const i=l();new u,r(t=>t.salesOrderForm);const n=(t,o)=>{i(d({[t]:o}))};return a(m,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(p,{fields:{"Sales Orders Information":{"Purchase Order":a("input",{id:"purchase_order",name:"purchase_order",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value)}),"Customer PO Date":a(g,{options:{dateFormat:"Y-m-d ",position:"auto left"},name:"customer_po_date",value:"",className:"form-input flex-1",onChange:(t,o)=>n("customer_po_date",o)}),"PO Upload":a("input",{id:"po_upload",type:"file",className:"form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1",accept:"*",onChange:t=>w(t,o=>{i(d({field:"po_upload",value:`${o==null?void 0:o.data.data.file_url}`}))}),name:"po_uploadFile"},"po_upload"),"SO Type":a(h,{options:[{value:"none",label:"-None-"},{value:"single_order",label:"Single Order"},{value:"frame_contract",label:"Frame Contract"},{value:"call_off",label:"Call Off"},{value:"forecast",label:"Forecast"}],name:"po_type",id:"po_type",onChange:({value:t})=>{n("po_type",t)},className:"flex-1"}),"Parent SO Nr.":a("input",{id:"parent_so_nr",name:"parent_so_nr",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value)})},"":{Subject:a("input",{id:"subject",required:!0,name:"subject",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value)}),Pending:a("input",{id:"pending",name:"pending",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value)}),Status:a(h,{options:O,name:"status",id:"status",onChange:({value:t})=>{n("status",t)},className:"flex-1"}),ZohoBooksID:a("input",{id:"zoho_books_id",name:"zoho_books_id",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value)})}}})})})},I=()=>(l(),new u,r(n=>n.salesOrderForm),a(m,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(p,{fields:{"Sales Items":{},"":{}}})})})),j=()=>{const i=l();new u,r(e=>e.salesOrderForm);const n=(e,t)=>{i(d({[e]:t}))};return a(m,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(p,{fields:{"SO line":{"Requested Delivery Date":a(g,{options:{dateFormat:"Y-m-d ",position:"auto left"},name:"requested_delivery_date",value:"",className:"form-input flex-1",onChange:(e,t)=>n("requested_delivery_date",t)}),"Product Name":a(c,{isMulti:!1,id:"product_id",placeholder:"Type at least 2 characters to search...",name:"product_id",loadOptions:F,onChange:({value:e})=>{n("product_id",e)},className:"flex-1"}),"Customer part Id":a("input",{id:"customer_part_id",name:"customer_part_id",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),Quantity:a("input",{id:"quantity",name:"quantity",className:"form-input flex-1 ",type:"number",onChange:e=>n(e.target.name,e.target.value)}),"List Price":a("input",{type:"number",id:"list_price",name:"list_price",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)})},"":{"Estimated Delivery Date":a(g,{options:{dateFormat:"Y-m-d ",position:"auto left"},name:"estimated_delivery_date",value:"",onChange:(e,t)=>n("estimated_delivery_date",t)}),"Date Code":a("input",{id:"date_code",name:"date_code",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),SPQ:a("input",{id:"spq",name:"spq",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),comment:a("input",{id:"comment",name:"comment",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)})}}})})})},P=()=>{const i=l();new u,r(e=>e.salesOrderForm);const n=(e,t)=>{i(d({[e]:t}))};return a(m,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(p,{fields:{"Linked Availability":{"Availability Name":a(c,{isMulti:!1,id:"availability_id",placeholder:"Type at least 2 characters to search...",name:"availability_id",loadOptions:k,onChange:({value:e})=>{n("availability_id",e)},className:"flex-1"}),"Availability No":a("input",{id:"availability_no",name:"availability_no",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),"Availability Cost":a("input",{type:"number",id:"availability_cost",name:"availability_cost",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)})},"":{"Availability Quantity":a("input",{type:"number",id:"availability_quantity",name:"availability_quantity",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),"Availability LT":a("input",{id:"availability_lt",name:"availability_lt",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),"Availability DC":a("input",{id:"availability_dc",name:"availability_dc",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)})}}})})})},M=()=>{const i=l();new u,r(e=>e.salesOrderForm);const n=(e,t)=>{i(d({[e]:t}))};return a(m,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(p,{fields:{"Address Information":{"Billing Street":a("input",{required:!0,id:"billing_street",name:"billing_street",className:"form-input flex-1",onChange:e=>n(e.target.name,e.target.value)}),"Billing City":a("input",{required:!0,id:"billing_city",name:"billing_city",className:"form-input flex-1",onChange:e=>n(e.target.name,e.target.value)}),"Billing State":a("input",{id:"billing_state",name:"billing_state",className:"form-input flex-1",onChange:e=>n(e.target.name,e.target.value)}),"Billing Code":a("input",{required:!0,id:"billing_code",name:"billing_code",className:"form-input flex-1",onChange:e=>n(e.target.name,e.target.value)}),"Billing Country":a("input",{required:!0,id:"billing_country",name:"billing_country",className:"form-input flex-1",onChange:e=>n(e.target.name,e.target.value)})},"":{"Shipping Street":a("input",{id:"shipping_street",name:"shipping_street",className:"form-input flex-1",onChange:e=>n(e.target.name,e.target.value)}),"Shipping City":a("input",{id:"shipping_city",name:"shipping_city",className:"form-input flex-1",onChange:e=>n(e.target.name,e.target.value)}),"Shipping State":a("input",{id:"shipping_state",name:"shipping_state",className:"form-input flex-1",onChange:e=>n(e.target.name,e.target.value)}),"Shipping Code":a("input",{id:"shipping_code",name:"shipping_code",className:"form-input flex-1",onChange:e=>n(e.target.name,e.target.value)}),"Shipping Country":a("input",{id:"shipping_country",name:"shipping_country",className:"form-input flex-1",onChange:e=>n(e.target.name,e.target.value)})}}})})})},B=()=>{r(e=>e.salesOrderForm);const i=l();new u;const n=(e,t)=>{i(d({[e]:t}))};return a(m,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(p,{fields:{"Terms and Conditions":{"Terms and Conditions":a("textarea",{id:"terms_conditions",rows:3,name:"terms_conditions",className:"form-textarea flex-1",placeholder:"",onChange:e=>n(e.target.name,e.target.value)})},"":{}}})})})},L=()=>{r(e=>e.salesOrderForm);const i=l();new u;const n=(e,t)=>{i(d({[e]:t}))};return a(m,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(p,{fields:{"Description Information":{Description:a("textarea",{id:"description",rows:3,name:"description",className:"form-textarea flex-1",placeholder:"",onChange:e=>n(e.target.name,e.target.value)})},"":{}}})})})},Q=()=>{const i=l();r(e=>e.salesOrderForm);const n=(e,t)=>{i(d({[e]:t}))};return a(m,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(p,{fields:{"Technical information":{"Waiting for approval":a("input",{id:"waiting_approval",type:"checkbox",name:"waiting_approval",className:"form-checkbox",onChange:e=>n(e.target.name,e.target.checked)}),Approval:a("input",{id:"approval",type:"checkbox",name:"approval",className:"form-checkbox",onChange:e=>n(e.target.name,e.target.checked)}),"Approve Changes":a(h,{options:A,name:"approval_changes",id:"approval_changes",onChange:({value:e})=>{n("approval_changes",e)},className:"flex-1"}),Tech:a("input",{id:"tech",type:"checkbox",name:"tech",className:"form-checkbox",onChange:e=>n(e.target.name,e.target.checked)})},"":{"Technical info":a("textarea",{id:"tech_info",rows:2,name:"tech_info",className:"form-textarea flex-1",placeholder:"",onChange:e=>n(e.target.name,e.target.value)}),Subform:a("textarea",{id:"subform",rows:2,name:"subform",className:"form-textarea flex-1",placeholder:"",onChange:e=>n(e.target.name,e.target.value)})}}})})})},E=()=>_("div",{className:"mt-8 px-4",children:[a(D,{},"HeaderSection"),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(q,{},"SalesOrderInformationSection"),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(I,{},"SalesItemsSection"),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(j,{},"SOLineSection"),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(P,{},"LinkedAvailabilitySection"),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(M,{},"AddressInformationSection"),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(B,{},"TermsConditionsSection"),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(L,{},"DescriptionInformationSection"),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(Q,{},"TechnicalInformationSection")]}),J=()=>{const i=r(s=>s.salesOrderForm),n=l();return b.useEffect(()=>{n(x("Sales Order Add"))}),_("div",{className:"px-4",children:[a(T,{formState:i}),a("div",{className:"flex xl:flex-row flex-col gap-2.5",children:a("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:a(E,{})})})]})};export{J as default};
