import{u,a as x,j as d,b as e,c as s,F as h,r as k,s as A,d as S}from"./main-fcf5e4ad.js";import{h as y,g as F,A as I,C as q,a as T,s as C,G as p,b as w,c as B}from"./CommonFunctions-c9f08edc.js";/* empty css                  */import{a as v,A as b}from"./react-select-async.esm-8b244106.js";import{S as f}from"./react-select.esm-cf3be803.js";import{C as j}from"./ClearButtonComponent-536b7edc.js";import{F as D}from"./index-7af546ea.js";import"./sweetalert2.all-b010eac4.js";import"./Select-aecb2a80.esm-5ec404e0.js";const P=()=>{const r=u();new v;const n=x(i=>i.accountForm),l=(i,m)=>{r(s({[i]:m}))},a=[{value:"none",label:"-None-"},{value:"no_activity",label:"No Activity"},{value:"more_1_year",label:"> 1 year Activity"},{value:"more_1_month",label:"> 1 month Activity"},{value:"regular_activity",label:"Regular Activity"}],t={Account:{"Account Image":d("div",{className:"",children:[d("div",{className:"flex",children:[e("input",{id:"account_image",type:"file",className:"form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1",accept:"image/*",onChange:i=>y(i,m=>{r(s({image:`${m==null?void 0:m.data.data.file_url}`}))}),name:"account_image"},"account_image"),e(j,{callBack:()=>{const i=document.getElementById("account_image");i&&(i.value="",i.dispatchEvent(new Event("change",{bubbles:!0}))),r(s({image:null}))}})]}),e("img",{id:"manufacturer_image_preview",src:F(n.image||n.oldImage),alt:"img",className:"mt-4 w-20 h-20 rounded"})]}),"Account Name":e("input",{id:"account_name",required:!0,name:"account_name",className:"form-input flex-1 ",onChange:i=>l(i.target.name,i.target.value)}),"Account Type":e(f,{name:"account_type",id:"account_type",placeholder:"Select Product Type...",options:I,onChange:({value:i})=>{l("account_type",i)}}),Contracts:e(f,{name:"contract",id:"contract",placeholder:"Select Product Type...",options:q,onChange:({value:i})=>{l("contract_id",i)}}),"Contract Attachment":e("input",{id:"contract_attachment",type:"file",className:"form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1",accept:"image/*",onChange:i=>y(i,m=>{r(s({field:"contract_attachment",value:`${m==null?void 0:m.data.data.file_url}`}))}),name:"contract_attachment"},"contract_attachment"),"Business Account":e("input",{id:"is_business",type:"checkbox",name:"business_account",className:"form-checkbox",onChange:i=>l(i.target.name,i.target.checked),checked:n.business_account}),"Approved by":e("input",{id:"approved_by",name:"approved_by_id",type:"text",value:"None",placeholder:"Readonly input here…",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0}),Currency:e(f,{id:"currency",name:"currency",options:T,onChange:({value:i})=>{l("currency",i)},className:"flex-1"})},"":{"Account Owner":e(b,{isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:C,onChange:({value:i})=>{l("owner_id",i)},className:"flex-1"}),"PM User":e(b,{isMulti:!1,id:"pm_user_id",placeholder:"Type at least 2 characters to search...",name:"pm_user_id",loadOptions:C,onChange:({value:i})=>{l("pm_user_id",i)},required:!0,className:"flex-1"}),"Account Activity":e(f,{id:"account_activity",name:"account_activity",options:a,onChange:({value:i})=>{l("account_activity",i)},className:"flex-1"}),TAM:e("input",{id:"tam",name:"tam",className:"form-input flex-1 ",onChange:i=>l(i.target.name,i.target.value)}),"Exchange Rate":e("input",{id:"exchange_rate",name:"exchange_rate",type:"text",value:"1",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0}),"Lead Reference":e("input",{id:"lead_reference",name:"lead_reference",className:"form-input flex-1 ",onChange:i=>l(i.target.name,i.target.value)})}};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(p,{fields:t})})})},M=()=>{const r=u();new v,x(t=>t.accountForm);const n=(t,i)=>{r(s({[t]:i}))};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(p,{fields:{"Account Information":{"Primary First Name":e("input",{id:"primary_first_name",name:"primary_first_name",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value)}),Phone:e("input",{id:"phone",required:!0,name:"phone",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value)}),Fax:e("input",{id:"fax",name:"fax",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value)}),Email:e("input",{id:"email",required:!0,name:"email",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value)}),website:e("input",{required:!0,id:"website",name:"website",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value)})},"":{"Primary Last Name":e("input",{id:"primary_last_name",name:"primary_last_name",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value)}),"Parent Account":e(b,{isMulti:!1,id:"parent_account_id",placeholder:"Type at least 2 characters to search...",name:"parent_account_id",loadOptions:w,onChange:({value:t})=>{n("parent_account_id",t)},className:"flex-1"}),"LinkedIn Company":e("input",{id:"linkedin",name:"linkedin",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value)}),"Account Number":e("input",{id:"account_number",name:"account_number",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value)}),"Double Check Status":e(f,{id:"double_check_status",name:"double_check_status",onChange:({value:t})=>{n("double_check_status",t)},className:"flex-1",options:[{value:"none",label:"-None-"},{value:"back_to_lead",label:"Back to lead"},{value:"converted_to_lead",label:"Converted to lead"},{value:"must_be_deleted",label:"Must be deleted"}]}),"Child Account":e(b,{isMulti:!1,id:"child_account_id",placeholder:"Type at least 2 characters to search...",name:"child_account_id",loadOptions:w,onChange:({value:t})=>{n("child_account_id",t)},className:"flex-1"}),"Has No Contacts":e("input",{id:"has_no_contacts",type:"checkbox",name:"has_no_contacts",className:"form-checkbox",onChange:t=>n(t.target.name,t.target.checked)}),DCheck:e("input",{id:"d_check",type:"checkbox",name:"d_check",className:"form-checkbox",onChange:t=>n(t.target.name,t.target.checked)})}}})})})},E=()=>{const r=u(),n=(a,t)=>{r(s({[a]:t}))};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(p,{fields:{"Terms and Shipping":{Incoterms:e("input",{id:"incoterm",name:"incoterm",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"Payment Terms":e("input",{id:"payment_term",name:"payment_term",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"Credit Line":e("input",{id:"credit_line",name:"credit_line",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)})},"":{"VAT No":e("input",{id:"vat_no",name:"vat_no",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),Forwarder:e("input",{id:"forwarder",name:"forwarder",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),forwarder_account_no:e("input",{id:"forwarder_account_no",name:"forwarder_account_no",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)})}}})})})},O=()=>{const r=u(),n=x(c=>c.accountForm),[l,a]=k.useState([{id:1}]),t=(c,o,g)=>{const _={...n.forecasts[g],[c]:o},N={...n.forecasts,[g]:_};a(Object.values(N)),r(s({forecasts:N}))},i=()=>{let c;c=l!=null&&l.length?l.reduce((g,_)=>_.id>g?_.id:g,l[0].id):0;const o=[...l,{id:c+1,q1:"",q2:"",q3:"",q4:""}];a(o),r(s({forecasts:o}))},m=(c=null)=>{const o=l.filter(g=>g.id!=c.id);a(o),r(s({forecasts:o}))};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12",children:d("div",{className:"",children:[d("div",{className:"text-lg",children:["Forecast ",new Date().getFullYear()," :"]}),d("div",{className:"mt-8",children:[e("div",{className:"overflow-x",children:d("table",{className:"table-auto overflow-scroll ",children:[e("thead",{children:d("tr",{children:[e("th",{className:"w-1",children:"S.NO"}),e("th",{className:"w-1",children:"Forecast Q1 (€)"}),e("th",{className:"w-1",children:"Forecast Q2 (€)"}),e("th",{className:"w-1",children:"Forecast Q3 (€)"}),e("th",{className:"w-1",children:"Forecast Q4 (€)"})]})}),e("tbody",{children:l.map(c=>d("tr",{className:"align-top",children:[e("td",{children:c.id}),e("td",{children:e("input",{name:"q1",type:"text",className:"form-input w-32",defaultValue:c.q1,onChange:o=>t(o.target.name,o.target.value,c.id)})}),e("td",{children:e("input",{name:"q2",type:"text",className:"form-input w-32",defaultValue:c.q2,onChange:o=>t(o.target.name,o.target.value,c.id)})}),e("td",{children:e("input",{name:"q3",type:"text",className:"form-input w-32",defaultValue:c.q3,onChange:o=>t(o.target.name,o.target.value,c.id)})}),e("td",{children:e("input",{name:"q4",type:"text",className:"form-input w-32",defaultValue:c.q4,onChange:o=>t(o.target.name,o.target.value,c.id)})}),e("td",{children:e("button",{type:"button",onClick:()=>m(c),children:d("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},c.id))})]})}),e("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:e("div",{className:"sm:mb-0 mb-6",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>i(),children:"Add Item"})})})]})]},"Quote Items")})})})},L=()=>{const r=u(),n=(a,t)=>{r(s({[a]:t}))};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(p,{fields:{"Description Information":{"Description Information":e("textarea",{id:"description",rows:3,name:"description",className:"form-textarea flex-1",placeholder:"",onChange:a=>n(a.target.name,a.target.value)}),"Last Activity Date":e(D,{options:{dateFormat:"Y-m-d ",position:"auto left"},name:"last_activity_date",value:"",className:"form-input flex-1",onChange:(a,t)=>n("last_activity_date",t)})}}})})})},R=()=>{const r=u();new v;const n=(a,t)=>{r(s({[a]:t}))};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(p,{fields:{"Technical information":{ZohoBooksID:e("input",{id:"zoho_books_id",name:"zoho_books_id",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"BooksID EUR":e("input",{id:"books_id_eur",name:"books_id_eur",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)})},"":{"Account Margin":e("input",{id:"account_margin",name:"account_margin",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"BooksID USD":e("input",{id:"books_id_usd",name:"books_id_usd",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)})}}})})})},U=()=>{const r=u(),n=(a,t)=>{r(s({[a]:t}))};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(p,{fields:{Unused:{"Purchasing Volume Current":e("input",{id:"purchasing_volume_current",name:"purchasing_volume_current",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)})},"":{"Annual Revenue":e("input",{id:"annual_revenue",name:"annual_revenue",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)})}}})})})},V=()=>{const r=u(),n=(a,t)=>{r(s({[a]:t}))};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(p,{fields:{"Address Information":{"Billing Street":e("input",{required:!0,id:"billing_street",name:"billing_street",className:"form-input flex-1",onChange:a=>n(a.target.name,a.target.value)}),"Billing City":e("input",{required:!0,id:"billing_city",name:"billing_city",className:"form-input flex-1",onChange:a=>n(a.target.name,a.target.value)}),"Billing State":e("input",{id:"billing_state",name:"billing_state",className:"form-input flex-1",onChange:a=>n(a.target.name,a.target.value)}),"Billing Code":e("input",{required:!0,id:"billing_code",name:"billing_code",className:"form-input flex-1",onChange:a=>n(a.target.name,a.target.value)}),"Billing Country":e("input",{required:!0,id:"billing_country",name:"billing_country",className:"form-input flex-1",onChange:a=>n(a.target.name,a.target.value)})},"":{"Shipping Street":e("input",{id:"shipping_street",name:"shipping_street",className:"form-input flex-1",onChange:a=>n(a.target.name,a.target.value)}),"Shipping City":e("input",{id:"shipping_city",name:"shipping_city",className:"form-input flex-1",onChange:a=>n(a.target.name,a.target.value)}),"Shipping State":e("input",{id:"shipping_state",name:"shipping_state",className:"form-input flex-1",onChange:a=>n(a.target.name,a.target.value)}),"Shipping Code":e("input",{id:"shipping_code",name:"shipping_code",className:"form-input flex-1",onChange:a=>n(a.target.name,a.target.value)}),"Shipping Country":e("input",{id:"shipping_country",name:"shipping_country",className:"form-input flex-1",onChange:a=>n(a.target.name,a.target.value)})}}})})})},Q=()=>d("div",{className:"mt-8 px-4",children:[e(P,{},"invoiceInformation"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(M,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(E,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(V,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(O,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(L,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(R,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(U,{})]}),X=()=>{const r=x(l=>l.accountForm),n=u();return k.useEffect(()=>{n(A("Account Add"))}),d("div",{className:"px-4",children:[e(B,{formState:r,resetForm:S}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(Q,{})})})]})};export{X as default};
