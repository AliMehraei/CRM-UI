import{u as m,a as v,b as e,F as u,i as s,A,C as S,k as F,l as y,e as k,m as C,r as x,j as d,c as I,s as q,n as w,d as T}from"./main-0a556f10.js";import{G as h,A as j}from"./GenerateFields-4e27003b.js";/* empty css                  */import{A as b}from"./react-select-async.esm-cf6509b4.js";import{S as g}from"./react-select.esm-03d9b7c7.js";import{I as D}from"./ImageUploadComponent-2f31f3d9.js";import{F as O}from"./FileUploadComponent-125c2597.js";import{F as B}from"./index-aeabfab4.js";import"./index-7d74c683.js";import"./Select-aecb2a80.esm-8205e217.js";import"./ClearButtonComponent-21fa295a.js";const M=()=>{const o=m(),n=v(i=>i.accountForm),r=(i,l)=>{o(s({[i]:l}))};return e(u,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(h,{fields:{Account:{"Account Image":e(D,{formState:n,modelName:"account",id:"account_image",formAttribute:"image",updateFormData:s}),"Account Name":e("input",{id:"account_name",required:!0,name:"account_name",className:"form-input flex-1 ",onChange:i=>r(i.target.name,i.target.value)}),"Account Type":e(g,{name:"account_type",id:"account_type",placeholder:"Select Product Type...",options:A,onChange:({value:i})=>{r("account_type",i)}}),Contracts:e(g,{isMulti:!0,name:"contract",id:"contract",placeholder:"Select Contract Type...",options:S,onChange:i=>{r("contract",i.map(l=>l.value))}}),"Contract Attachment":e(O,{id:"contract_attachment",updateFormData:s,formState:n,modelName:"account",formAttribute:"contract_attachment"}),"Business Account":e("input",{id:"is_business",type:"checkbox",name:"business_account",className:"form-checkbox",onChange:i=>r(i.target.name,i.target.checked)}),"Approved by":e("input",{id:"approved_by",name:"approved_by_id",type:"text",value:"None",placeholder:"Readonly input here…",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0}),Currency:e(g,{id:"currency",name:"currency",options:F,onChange:({value:i})=>{r("currency",i)},className:"flex-1"})},"":{"Account Owner":e(b,{defaultOptions:!0,isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:y,onChange:({value:i})=>{r("owner_id",i)},className:"flex-1"}),"PM User":e(b,{defaultOptions:!0,isMulti:!1,id:"pm_user_id",placeholder:"Type at least 2 characters to search...",name:"pm_user_id",loadOptions:y,onChange:({value:i})=>{r("pm_user_id",i)},required:!0,className:"flex-1"}),"Account Activity":e(g,{id:"account_activity",name:"account_activity",options:[{value:"none",label:"-None-"},{value:"no_activity",label:"No Activity"},{value:"more_1_year",label:"> 1 year Activity"},{value:"more_1_month",label:"> 1 month Activity"},{value:"regular_activity",label:"Regular Activity"}],onChange:({value:i})=>{r("account_activity",i)},className:"flex-1"}),TAM:e("input",{id:"tam",name:"tam",className:"form-input flex-1 ",onChange:i=>r(i.target.name,i.target.value)}),"Exchange Rate":e("input",{id:"exchange_rate",name:"exchange_rate",type:"text",value:"1",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0}),"Lead Reference":e("input",{id:"lead_reference",name:"lead_reference",className:"form-input flex-1 ",onChange:i=>r(i.target.name,i.target.value)}),"Account Rating":e(g,{id:"rating",name:"rating",options:[{value:"none",label:"-None-"},{value:"rfq",label:"RFQ"},{value:"quote",label:"Quote"},{value:"so",label:"SO"},{value:"no_action",label:"No Action"},{value:"inactive",label:"Inactive"}],onChange:({value:i})=>{r("rating",i)},defaultValue:{value:"no_action",label:"No Action"},className:"flex-1"})}}})})})},P=()=>{const o=m();new k,v(t=>t.accountForm);const n=(t,f)=>{o(s({[t]:f}))};return e(u,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(h,{fields:{"Account Information":{"Primary First Name":e("input",{id:"primary_first_name",name:"primary_first_name",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value)}),Phone:e("input",{id:"phone",required:!0,name:"phone",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value)}),Fax:e("input",{id:"fax",name:"fax",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value)}),Email:e("input",{id:"email",required:!0,name:"email",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value)}),website:e("input",{id:"website",name:"website",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value)})},"":{"Primary Last Name":e("input",{id:"primary_last_name",name:"primary_last_name",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value)}),"Parent Account":e(b,{defaultOptions:!0,isMulti:!1,id:"parent_account_id",placeholder:"Type at least 2 characters to search...",name:"parent_account_id",loadOptions:C,onChange:({value:t})=>{n("parent_account_id",t)},className:"flex-1"}),"LinkedIn Company":e("input",{id:"linkedin",name:"linkedin",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value)}),"Account Number":e("input",{id:"account_number",name:"account_number",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value)}),"Double Check Status":e(g,{id:"double_check_status",name:"double_check_status",onChange:({value:t})=>{n("double_check_status",t)},className:"flex-1",options:[{value:"none",label:"-None-"},{value:"back_to_lead",label:"Back to lead"},{value:"converted_to_lead",label:"Converted to lead"},{value:"must_be_deleted",label:"Must be deleted"}]}),"Child Account":e(b,{defaultOptions:!0,isMulti:!1,id:"child_account_id",placeholder:"Type at least 2 characters to search...",name:"child_account_id",loadOptions:C,onChange:({value:t})=>{n("child_account_id",t)},className:"flex-1"}),"Has No Contacts":e("input",{id:"has_no_contacts",type:"checkbox",name:"has_no_contacts",className:"form-checkbox",onChange:t=>n(t.target.name,t.target.checked)}),DCheck:e("input",{id:"d_check",type:"checkbox",name:"d_check",className:"form-checkbox",onChange:t=>n(t.target.name,t.target.checked)})}}})})})},L=()=>{const o=m(),n=(a,t)=>{o(s({[a]:t}))};return e(u,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(h,{fields:{"Terms and Shipping":{Incoterms:e("input",{id:"incoterm",name:"incoterm",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"Payment Terms":e("input",{id:"payment_term",name:"payment_term",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"Credit Line":e("input",{id:"credit_line",name:"credit_line",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)})},"":{"VAT No":e("input",{id:"vat_no",name:"vat_no",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),Forwarder:e("input",{id:"forwarder",name:"forwarder",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),forwarder_account_no:e("input",{id:"forwarder_account_no",name:"forwarder_account_no",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)})}}})})})},R=()=>{const o=m(),n=v(l=>l.accountForm),[r,a]=x.useState([{id:0}]),t=(l,c,p)=>{const _={...n.forecasts[p],[l]:c},N={...n.forecasts,[p]:_};a(Object.values(N)),o(s({forecasts:N}))},f=()=>{let l;l=r!=null&&r.length?r.reduce((p,_)=>_.id>p?_.id:p,r[0].id):0;const c=[...r,{id:l+1,q1:"",q2:"",q3:"",q4:""}];a(c),o(s({forecasts:c}))},i=(l=null)=>{const c=r.filter(p=>p.id!=l.id);a(c),o(s({forecasts:c}))};return e(u,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12",children:d("div",{className:"",children:[d("div",{className:"text-lg",children:["Forecast ",new Date().getFullYear()," :"]}),d("div",{className:"mt-8",children:[e("div",{className:"overflow-x",children:d("table",{className:"table-auto overflow-scroll ",children:[e("thead",{children:d("tr",{children:[e("th",{className:"w-1",children:"S.NO"}),e("th",{className:"w-1",children:"Forecast Q1 (€)"}),e("th",{className:"w-1",children:"Forecast Q2 (€)"}),e("th",{className:"w-1",children:"Forecast Q3 (€)"}),e("th",{className:"w-1",children:"Forecast Q4 (€)"})]})}),e("tbody",{children:r.map(l=>d("tr",{className:"align-top",children:[e("td",{children:l.id}),e("td",{children:e("input",{name:"q1",type:"text",className:"form-input w-32",defaultValue:l.q1,onChange:c=>t(c.target.name,c.target.value,l.id)})}),e("td",{children:e("input",{name:"q2",type:"text",className:"form-input w-32",defaultValue:l.q2,onChange:c=>t(c.target.name,c.target.value,l.id)})}),e("td",{children:e("input",{name:"q3",type:"text",className:"form-input w-32",defaultValue:l.q3,onChange:c=>t(c.target.name,c.target.value,l.id)})}),e("td",{children:e("input",{name:"q4",type:"text",className:"form-input w-32",defaultValue:l.q4,onChange:c=>t(c.target.name,c.target.value,l.id)})}),e("td",{children:e("button",{type:"button",onClick:()=>i(l),children:d("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},l.id))})]})}),e("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:e("div",{className:"sm:mb-0 mb-6",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>f(),children:"Add Item"})})})]})]},"Quote Items")})})})},U=()=>{const o=m(),n=(a,t)=>{o(s({[a]:t}))};return e(u,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(h,{fields:{"Description Information":{"Description Information":e("textarea",{id:"description",rows:3,name:"description",className:"form-textarea flex-1",placeholder:"",onChange:a=>n(a.target.name,a.target.value)}),"Last Activity Date":e(B,{options:{dateFormat:"Y-m-d ",position:"auto left"},name:"last_activity_date",value:"",className:"form-input flex-1",onChange:(a,t)=>n("last_activity_date",t)})}}})})})},Q=()=>{const o=m();new k;const n=(a,t)=>{o(s({[a]:t}))};return e(u,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(h,{fields:{"Technical information":{ZohoBooksID:e("input",{id:"zoho_books_id",name:"zoho_books_id",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"BooksID EUR":e("input",{id:"books_id_eur",name:"books_id_eur",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)})},"":{"Account Margin":e("input",{id:"account_margin",name:"account_margin",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"BooksID USD":e("input",{id:"books_id_usd",name:"books_id_usd",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)})}}})})})},V=()=>{const o=m(),n=(a,t)=>{o(s({[a]:t}))};return e(u,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(h,{fields:{Unused:{"Purchasing Volume Current":e("input",{id:"purchasing_volume_current",name:"purchasing_volume_current",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)})},"":{"Annual Revenue":e("input",{id:"annual_revenue",name:"annual_revenue",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)})}}})})})},E=()=>{const o=m(),n=(a,t)=>{o(s({[a]:t}))};return e(u,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(h,{fields:{"Address Information":{"Billing Street":e("input",{required:!0,id:"billing_street",name:"billing_street",className:"form-input flex-1",onChange:a=>n(a.target.name,a.target.value)}),"Billing City":e("input",{required:!0,id:"billing_city",name:"billing_city",className:"form-input flex-1",onChange:a=>n(a.target.name,a.target.value)}),"Billing State":e("input",{id:"billing_state",name:"billing_state",className:"form-input flex-1",onChange:a=>n(a.target.name,a.target.value)}),"Billing Code":e("input",{required:!0,id:"billing_code",name:"billing_code",className:"form-input flex-1",onChange:a=>n(a.target.name,a.target.value)}),"Billing Country":e("input",{required:!0,id:"billing_country",name:"billing_country",className:"form-input flex-1",onChange:a=>n(a.target.name,a.target.value)})},"":{"Shipping Street":e("input",{id:"shipping_street",name:"shipping_street",className:"form-input flex-1",onChange:a=>n(a.target.name,a.target.value)}),"Shipping City":e("input",{id:"shipping_city",name:"shipping_city",className:"form-input flex-1",onChange:a=>n(a.target.name,a.target.value)}),"Shipping State":e("input",{id:"shipping_state",name:"shipping_state",className:"form-input flex-1",onChange:a=>n(a.target.name,a.target.value)}),"Shipping Code":e("input",{id:"shipping_code",name:"shipping_code",className:"form-input flex-1",onChange:a=>n(a.target.name,a.target.value)}),"Shipping Country":e("input",{id:"shipping_country",name:"shipping_country",className:"form-input flex-1",onChange:a=>n(a.target.name,a.target.value)})}}})})})},z=()=>d("div",{className:"mt-8 px-4",children:[e(M,{},"invoiceInformation"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(P,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(L,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(E,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(R,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(U,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Q,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(V,{})]}),te=()=>{const{hasPermission:o}=I(),n=v(a=>a.accountForm),r=m();return x.useEffect(()=>{r(q("Account Add"))}),x.useEffect(()=>{r(w())},[]),o("create-product")?d("div",{className:"px-4",children:[e(j,{formState:n,resetForm:w}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(z,{})})})]}):e(T,{})};export{te as default};
