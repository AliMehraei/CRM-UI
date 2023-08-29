import{u as g,a as _,j as d,b as e,c as m,F as b,r as w,d as j,s as B}from"./main-8dcc6ef7.js";import{A as E}from"./ActionButtonsComponent-231c005e.js";/* empty css                  */import{a as A,A as V}from"./react-select-async.esm-36b0e078.js";import{L}from"./LoadingAlpyn-5b7aebbf.js";import{h as S,g as M,A as F,C as I,a as q,s as D,G as C,b as T}from"./CommonFunctions-94d8ff2f.js";import{S as k}from"./react-select.esm-22c93d6f.js";import{C as O}from"./ClearButtonComponent-7185aabb.js";import{F as P}from"./index-03834abc.js";import"./sweetalert2.all-31dac5d6.js";import"./Select-aecb2a80.esm-55e31ab5.js";const U=()=>{var s,f,r,i,u,x,y,N,v,p;const c=g();new A;const n=_(t=>t.accountForm),l=(t,h)=>{c(m({[t]:h}))},o=[{value:"none",label:"-None-"},{value:"no_activity",label:"No Activity"},{value:"more_1_year",label:"> 1 year Activity"},{value:"more_1_month",label:"> 1 month Activity"},{value:"regular_activity",label:"Regular Activity"}],a={Account:{"Account Image":d("div",{className:"",children:[d("div",{className:"flex",children:[e("input",{id:"account_image",type:"file",className:"form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1",accept:"image/*",onChange:t=>S(t,h=>{c(m({image:`${h==null?void 0:h.data.data.file_url}`}))}),name:"account_image"},"account_image"),e(O,{callBack:()=>{const t=document.getElementById("account_image");t&&(t.value="",t.dispatchEvent(new Event("change",{bubbles:!0}))),c(m({image:null}))}})]}),e("img",{id:"manufacture_image_preview",src:M(n.image||n.oldImage),alt:"img",className:"mt-4 w-20 h-20 rounded"})]}),"Account Name":e("input",{id:"account_name",required:!0,name:"account_name",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:n.account_name}),"Account Type":e(k,{name:"account_type",id:"account_type",placeholder:"Select Account Type...",options:F,onChange:({value:t})=>{l("account_type",t)},defaultValue:F.find(t=>t.value==n.account_type)}),Contracts:e(k,{name:"contract",id:"contract",placeholder:"Select Contract...",options:I,onChange:({value:t})=>{l("contract",t)},defaultValue:I.find(t=>t.value==n.contract)}),"Contract Attachment":d("div",{className:"flex",children:[e("input",{id:"contract_attachment",type:"file",className:"form-input mr-1 file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1",accept:"image/*",onChange:t=>S(t,h=>{c(m({field:"contract_attachment",value:`${h==null?void 0:h.data.data.file_url}`}))}),name:"contract_attachment"},"contract_attachment"),e("a",{className:"btn btn-outline-primary",href:n.contract_attachment,children:"Download"})]}),"Business Account":e("input",{id:"is_business",type:"checkbox",name:"business_account",className:"form-checkbox",onChange:t=>l(t.target.name,t.target.checked),checked:n.business_account}),"Approved by":e("input",{id:"approved_by",name:"approved_by_id",type:"text",value:"None",placeholder:"Readonly input here…",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",defaultValue:n.approved_by.name,disabled:!0}),Currency:e(k,{id:"currency",name:"currency",options:q,onChange:({value:t})=>{l("currency",t)},defaultValue:q.find(t=>t.value==n.currency),className:"flex-1"})},"":{"Account Owner":e(V,{isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:D,onChange:({value:t})=>{l("owner_id",t)},defaultValue:{value:(s=n.owner)==null?void 0:s.id,label:d("div",{className:"flex items-center",children:[e("img",{src:(f=n.owner)==null?void 0:f.image,alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),d("div",{children:[e("div",{className:"text-sm font-bold",children:(r=n.owner)==null?void 0:r.name}),e("div",{className:"text-xs text-gray-500",children:(i=n.owner)==null?void 0:i.email})]})]},(u=n.owner)==null?void 0:u.id)},className:"flex-1"}),"PM User":e(V,{isMulti:!1,id:"pm_user_id",placeholder:"Type at least 2 characters to search...",name:"pm_user_id",loadOptions:D,onChange:({value:t})=>{l("pm_user_id",t)},required:!0,defaultValue:{value:(x=n.pm_user)==null?void 0:x.id,label:d("div",{className:"flex items-center",children:[e("img",{src:(y=n.pm_user)==null?void 0:y.avatar,alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),d("div",{children:[e("div",{className:"text-sm font-bold",children:(N=n.pm_user)==null?void 0:N.name}),e("div",{className:"text-xs text-gray-500",children:(v=n.pm_user)==null?void 0:v.email})]})]},(p=n.pm_user)==null?void 0:p.id)},className:"flex-1"}),"Account Activity":e(k,{id:"account_activity",name:"account_activity",options:o,onChange:({value:t})=>{l("account_activity",t)},defaultValue:o.find(t=>t.value==n.account_activity),className:"flex-1"}),TAM:e("input",{id:"tam",name:"tam",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:n.tam}),"Exchange Rate":e("input",{id:"exchange_rate",name:"exchange_rate",type:"text",value:"1",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0}),"Lead Reference":e("input",{id:"lead_reference",name:"lead_reference",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:n.lead_reference})}};return e(b,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(C,{fields:a})})})},R=()=>{var s,f,r,i,u,x,y,N,v,p;const c=g();new A;const n=_(t=>t.accountForm),l=(t,h)=>{c(m({[t]:h}))},o=[{value:"none",label:"-None-"},{value:"back_to_lead",label:"Back to lead"},{value:"converted_to_lead",label:"Converted to lead"},{value:"must_be_deleted",label:"Must be deleted"}],a={"Account Information":{"Primary First Name":e("input",{id:"primary_first_name",name:"primary_first_name",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:n.primary_first_name}),Phone:e("input",{id:"phone",required:!0,name:"phone",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:n.phone}),Fax:e("input",{id:"fax",name:"fax",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:n.fax}),Email:e("input",{id:"email",required:!0,name:"email",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:n.email}),Website:e("input",{required:!0,id:"website",name:"website",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:n.website})},"":{"Primary Last Name":e("input",{id:"primary_last_name",name:"primary_last_name",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:n.primary_last_name}),"Parent Account":e(V,{isMulti:!1,id:"parent_account_id",placeholder:"Type at least 2 characters to search...",name:"parent_account_id",loadOptions:T,onChange:({value:t})=>{l("parent_account_id",t)},defaultValue:{value:(s=n.parent)==null?void 0:s.id,label:d("div",{className:"flex items-center",children:[e("img",{src:(f=n.parent)==null?void 0:f.image,alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),d("div",{children:[e("div",{className:"text-sm font-bold",children:(r=n.parent)==null?void 0:r.name}),e("div",{className:"text-xs text-gray-500",children:(i=n.parent)==null?void 0:i.email})]})]},(u=n.parent)==null?void 0:u.id)},className:"flex-1"}),"LinkedIn Company":e("input",{id:"linkedin_company",name:"linkedin",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:n.linkedin}),"Account Number":e("input",{id:"account_number",name:"account_number",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:n.account_number}),"Double Check Status":e(k,{id:"double_check_status",name:"double_check_status",onChange:({value:t})=>{l("double_check_status",t)},className:"flex-1",defaultValue:o.find(t=>t.value==n.double_check_status),options:o}),"Child Account":e(V,{isMulti:!1,id:"child_account_id",placeholder:"Type at least 2 characters to search...",name:"child_account_id",loadOptions:T,onChange:({value:t})=>{l("child_account_id",t)},defaultValue:{value:(x=n.child)==null?void 0:x.id,label:d("div",{className:"flex items-center",children:[e("img",{src:(y=n.parent)==null?void 0:y.image,alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),d("div",{children:[e("div",{className:"text-sm font-bold",children:(N=n.parent)==null?void 0:N.name}),e("div",{className:"text-xs text-gray-500",children:(v=n.parent)==null?void 0:v.email})]})]},(p=n.parent)==null?void 0:p.id)},className:"flex-1"}),"Has No Contacts":e("input",{id:"has_no_contacts",type:"checkbox",name:"has_no_contacts",className:"form-checkbox",onChange:t=>l(t.target.name,t.target.checked),checked:n.has_no_contacts}),DCheck:e("input",{id:"d_check",type:"checkbox",name:"d_check",className:"form-checkbox",onChange:t=>l(t.target.name,t.target.checked),checked:n.has_no_contacts})}};return e(b,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(C,{fields:a})})})},$=()=>{const c=g(),n=_(a=>a.accountForm),l=(a,s)=>{c(m({[a]:s}))},o={"Terms and Shipping":{Incoterms:e("input",{id:"incoterm",name:"incoterm",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value),defaultValue:n.incoterm}),"Payment Terms":e("input",{id:"payment_term",name:"payment_term",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value),defaultValue:n.payment_term}),"Credit Line":e("input",{id:"credit_line",name:"credit_line",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value),defaultValue:n.credit_line})},"":{"VAT No":e("input",{id:"vat_no",name:"vat_no",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value),defaultValue:n.vat_no}),Forwarder:e("input",{id:"forwarder",name:"forwarder",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value),defaultValue:n.forwarder}),forwarder_account_no:e("input",{id:"forwarder_account_no",name:"forwarder_account_no",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value),defaultValue:n.forwarder_account_no})}};return e(b,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(C,{fields:o})})})},Q=()=>{const c=g(),n=_(r=>r.accountForm),[l,o]=w.useState([]),a=(r,i,u)=>{const x=l.find(p=>p.id===u),y=l.findIndex(p=>p.id===u),N={...x,[r]:i},v={...l,[y]:N};o(Object.values(v)),c(m({forcasts:v}))};w.useEffect(()=>{o(Object.values(n.forcasts))},[]);const s=()=>{let r;r=l!=null&&l.length?l.reduce((i,u)=>u.id>i?u.id:i,l[0].id):0,o([...l,{id:r+1,q1:"",q2:"",q3:"",q4:""}])},f=(r=null)=>{const i=l.filter(u=>u.id!=r.id);o(i),c(m({forcasts:i}))};return e(b,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12",children:d("div",{className:"",children:[d("div",{className:"text-lg",children:["Forecast ",new Date().getFullYear()," :"]}),d("div",{className:"mt-8",children:[e("div",{className:"overflow-x",children:d("table",{className:"table-auto overflow-scroll ",children:[e("thead",{children:d("tr",{children:[e("th",{className:"w-1",children:"S.NO"}),e("th",{className:"w-1",children:"Forecast Q1 (€)"}),e("th",{className:"w-1",children:"Forecast Q2 (€)"}),e("th",{className:"w-1",children:"Forecast Q3 (€)"}),e("th",{className:"w-1",children:"Forecast Q4 (€)"})]})}),e("tbody",{children:l.map(r=>d("tr",{className:"align-top",children:[e("td",{children:r.id}),e("td",{children:e("input",{name:"q1",type:"text",className:"form-input w-32",defaultValue:r.q1,onChange:i=>a(i.target.name,i.target.value,r.id)})}),e("td",{children:e("input",{name:"q2",type:"text",className:"form-input w-32",defaultValue:r.q2,onChange:i=>a(i.target.name,i.target.value,r.id)})}),e("td",{children:e("input",{name:"q3",type:"text",className:"form-input w-32",defaultValue:r.q3,onChange:i=>a(i.target.name,i.target.value,r.id)})}),e("td",{children:e("input",{name:"q4",type:"text",className:"form-input w-32",defaultValue:r.q4,onChange:i=>a(i.target.name,i.target.value,r.id)})}),e("td",{children:e("button",{type:"button",onClick:()=>f(r),children:d("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},r.id))})]})}),e("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:e("div",{className:"sm:mb-0 mb-6",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>s(),children:"Add Item"})})})]})]},"Quote Items")})})})},z=()=>{const c=g(),n=_(a=>a.accountForm),l=(a,s)=>{c(m({[a]:s}))},o={"Description Information":{"Description Information":e("textarea",{id:"description",rows:3,name:"description",className:"form-textarea flex-1",placeholder:"",onChange:a=>l(a.target.name,a.target.value),defaultValue:n.description}),"Last Activity Date":e(P,{options:{dateFormat:"Y-m-d ",position:"auto left",defaultDate:`${n.last_activity_date?new Date(n.last_activity_date):""}`},name:"last_activity_date",value:n.last_activity_date?new Date(n.last_activity_date):"",className:"form-input flex-1",onChange:(a,s)=>l("last_activity_date",s)})}};return e(b,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(C,{fields:o})})})},G=()=>{const c=g(),n=_(a=>a.accountForm),l=(a,s)=>{c(m({[a]:s}))},o={"Technical information":{ZohoBooksID:e("input",{id:"zoho_books_id",name:"zoho_books_id",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value),defaultValue:n.zoho_books_id}),"BooksID EUR":e("input",{id:"books_id_eur",name:"books_id_eur",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value),defaultValue:n.books_id_eur})},"":{"Account Margin":e("input",{id:"account_margin",name:"account_margin",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value),defaultValue:n.account_margin}),"BooksID USD":e("input",{id:"books_id_usd",name:"books_id_usd",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value),defaultValue:n.books_id_usd})}};return e(b,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(C,{fields:o})})})},W=()=>{const c=g(),n=_(a=>a.accountForm),l=(a,s)=>{c(m({[a]:s}))},o={Unused:{"Purchasing Volume Current":e("input",{id:"purchasing_volume_current",name:"purchasing_volume_current",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value),defaultValue:n.purchasing_volume_current})},"":{"Annual Revenue":e("input",{id:"annual_revenue",name:"annual_revenue",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value),defaultValue:n.annual_revenue})}};return e(b,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(C,{fields:o})})})},Y=()=>{const c=g(),n=_(a=>a.accountForm),l=(a,s)=>{c(m({[a]:s}))},o={"Address Information":{"Billing Street":e("input",{required:!0,id:"billing_street",name:"billing_street",className:"form-input flex-1",defaultValue:n.billing_street,onChange:a=>l(a.target.name,a.target.value)}),"Billing City":e("input",{required:!0,id:"billing_city",name:"billing_city",className:"form-input flex-1",defaultValue:n.billing_city,onChange:a=>l(a.target.name,a.target.value)}),"Billing State":e("input",{id:"billing_state",name:"billing_state",className:"form-input flex-1",defaultValue:n.billing_state,onChange:a=>l(a.target.name,a.target.value)}),"Billing Code":e("input",{required:!0,id:"billing_code",name:"billing_code",className:"form-input flex-1",defaultValue:n.billing_code,onChange:a=>l(a.target.name,a.target.value)}),"Billing Country":e("input",{required:!0,id:"billing_country",name:"billing_country",defaultValue:n.billing_country,className:"form-input flex-1",onChange:a=>l(a.target.name,a.target.value)})},"":{"Shipping Street":e("input",{id:"shipping_street",name:"shipping_street",className:"form-input flex-1",defaultValue:n.shipping_street,onChange:a=>l(a.target.name,a.target.value)}),"Shipping City":e("input",{id:"shipping_city",name:"shipping_city",className:"form-input flex-1",defaultValue:n.shipping_city,onChange:a=>l(a.target.name,a.target.value)}),"Shipping State":e("input",{id:"shipping_state",name:"shipping_state",className:"form-input flex-1",defaultValue:n.shipping_state,onChange:a=>l(a.target.name,a.target.value)}),"Shipping Code":e("input",{id:"shipping_code",name:"shipping_code",className:"form-input flex-1",defaultValue:n.shipping_code,onChange:a=>l(a.target.name,a.target.value)}),"Shipping Country":e("input",{id:"shipping_country",name:"shipping_country",className:"form-input flex-1",defaultValue:n.shipping_country,onChange:a=>l(a.target.name,a.target.value)})}};return e(b,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(C,{fields:o})})})},H=()=>d("div",{className:"mt-8 px-4",children:[e(U,{},"invoiceInformation"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(R,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e($,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Y,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Q,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(z,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(G,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(W,{})]}),ce=()=>{const c=_(i=>i.accountForm),[n,l]=w.useState(!0),a=j().id,s=new A,f=g();w.useEffect(()=>{f(B("Account Edit"))}),w.useEffect(()=>{f(m({api:"updateSingleAccount",redirectTo:"/account/edit/:id",action:"edit"}))},[]),w.useEffect(()=>{r().then(()=>{l(!1)})},[a]);const r=async()=>{const i=await s.fetchSingleAccount(a);if(i.status!=200)return;const u=i.data.data.account;f(m(u))};return n?e(L,{}):d("div",{className:"px-4",children:[e(E,{formState:c}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(H,{})})})]})};export{ce as default};
