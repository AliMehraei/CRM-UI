import{u as g,a as S,d as _,j as e,i as f,A as I,C as U,k as D,l as k,m as q,b as m,f as V,F as x,n as T,r as N,h as P,c as L,s as M,o as j,e as O}from"./main-3000a6dc.js";import{G as y,A as R}from"./GenerateFields-7282bc65.js";/* empty css                  */import{A as B,a as Q,b as E}from"./SelectOptions-b7204016.js";import{S as w}from"./react-select.esm-2a6a39a3.js";import{I as z}from"./ImageUploadComponent-b803085d.js";import{F as $}from"./FileUploadComponent-37e5f074.js";import{F as G}from"./index-0aeaf758.js";import{A as W}from"./AttachmentSection-628d53a2.js";import"./index-29603cbb.js";import"./ClearButtonComponent-21bbcf28.js";const Y=()=>{var a,o,h,r,c,u,p,b,l,v,C,F;const s=g();new S;const t=_(i=>i.accountForm),n=(i,A)=>{s(f({[i]:A}))},d={Account:{"Account Image":e(z,{formState:t,modelName:"account",id:"account_image",formAttribute:"image",updateFormData:f}),"Account Name":e("input",{id:"account_name",required:!0,name:"account_name",className:"form-input flex-1 ",onChange:i=>n(i.target.name,i.target.value),defaultValue:t.account_name}),"Account Type":e(w,{name:"account_type",id:"account_type",placeholder:"Select Account Type...",options:I,onChange:({value:i})=>{n("account_type",i)},defaultValue:I.find(i=>i.value==t.account_type)}),Contracts:e(w,{isMulti:!0,name:"contract",id:"contract",placeholder:"Select Contract Type...",options:U,onChange:i=>{n("contract",i.map(A=>A.value))},defaultValue:t.contract?t.contract.map(i=>({value:i,label:i})):[]}),"Contract Attachment":e($,{id:"contract_attachment",updateFormData:f,formState:t,modelName:"account",formAttribute:"contract_attachment"}),"Business Account":e("input",{id:"is_business",type:"checkbox",name:"business_account",className:"form-checkbox",onChange:i=>n(i.target.name,i.target.checked),checked:t.business_account}),"Approved by":e("input",{id:"approved_by",name:"approved_by_id",type:"text",placeholder:"Readonly input here…",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",defaultValue:((a=t.approved_by)==null?void 0:a.first_name)+" "+((o=t.approved_by)==null?void 0:o.last_name),disabled:!0}),Currency:e(w,{id:"currency",name:"currency",options:D,onChange:({value:i})=>{n("currency",i)},defaultValue:D.find(i=>i.value==t.currency),className:"flex-1"})},"":{"Account Owner":e(k,{defaultOptions:!0,isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:q,onChange:({value:i})=>{n("owner_id",i)},defaultValue:{value:(h=t.owner)==null?void 0:h.id,label:m("div",{className:"flex items-center",children:[t.owner?e("img",{src:V(t.owner.avatar_data),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,m("div",{children:[e("div",{className:"text-sm font-bold",children:((r=t.owner)==null?void 0:r.first_name)+" "+((c=t.owner)==null?void 0:c.last_name)}),e("div",{className:"text-xs text-gray-500",children:(u=t.owner)==null?void 0:u.email})]})]},(p=t.owner)==null?void 0:p.id)},className:"flex-1"}),"PM User":e(k,{defaultOptions:!0,isMulti:!1,id:"pm_user_id",placeholder:"Type at least 2 characters to search...",name:"pm_user_id",loadOptions:q,onChange:({value:i})=>{n("pm_user_id",i)},defaultValue:{value:(b=t.pm_user)==null?void 0:b.id,label:m("div",{className:"flex items-center",children:[t.pm_user?e("img",{src:V(t.pm_user.avatar_data),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,m("div",{children:[e("div",{className:"text-sm font-bold",children:((l=t.pm_user)==null?void 0:l.first_name)+" "+((v=t.pm_user)==null?void 0:v.last_name)}),e("div",{className:"text-xs text-gray-500",children:(C=t.pm_user)==null?void 0:C.email})]})]},(F=t.pm_user)==null?void 0:F.id)},className:"flex-1"}),"Account Activity":e(w,{id:"account_activity",name:"account_activity",options:B,onChange:({value:i})=>{n("account_activity",i)},defaultValue:B.find(i=>i.value==t.account_activity),className:"flex-1"}),TAM:e("input",{id:"tam",name:"tam",className:"form-input flex-1 ",onChange:i=>n(i.target.name,i.target.value),defaultValue:t.tam}),"Exchange Rate":e("input",{id:"exchange_rate",name:"exchange_rate",type:"text",value:"1",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0}),"Lead Reference":e("input",{id:"lead_reference",name:"lead_reference",className:"form-input flex-1 ",onChange:i=>n(i.target.name,i.target.value),defaultValue:t.lead_reference}),"Account Rating":e(w,{id:"rating",name:"rating",options:Q,onChange:({value:i})=>{n("rating",i)},defaultValue:{value:"no_action",label:"No Action"},className:"flex-1"})}};return e(x,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(y,{fields:d})})})},H=()=>{var a,o,h,r,c,u,p,b;const s=g();new S;const t=_(l=>l.accountForm),n=(l,v)=>{s(f({[l]:v}))},d={"Account Information":{"Primary First Name":e("input",{id:"primary_first_name",name:"primary_first_name",className:"form-input flex-1 ",onChange:l=>n(l.target.name,l.target.value),defaultValue:t.primary_first_name}),Phone:e("input",{id:"phone",required:!0,name:"phone",className:"form-input flex-1 ",onChange:l=>n(l.target.name,l.target.value),defaultValue:t.phone}),Fax:e("input",{id:"fax",name:"fax",className:"form-input flex-1 ",onChange:l=>n(l.target.name,l.target.value),defaultValue:t.fax}),Email:e("input",{id:"email",required:!0,name:"email",className:"form-input flex-1 ",onChange:l=>n(l.target.name,l.target.value),defaultValue:t.email}),Website:e("input",{id:"website",name:"website",className:"form-input flex-1 ",onChange:l=>n(l.target.name,l.target.value),defaultValue:t.website})},"":{"Primary Last Name":e("input",{id:"primary_last_name",name:"primary_last_name",className:"form-input flex-1 ",onChange:l=>n(l.target.name,l.target.value),defaultValue:t.primary_last_name}),"Parent Account":e(k,{defaultOptions:!0,isMulti:!1,id:"parent_account_id",placeholder:"Type at least 2 characters to search...",name:"parent_account_id",loadOptions:T,onChange:({value:l})=>{n("parent_account_id",l)},defaultValue:{value:(a=t.parent)==null?void 0:a.id,label:m("div",{className:"flex items-center",children:[t.parent?e("img",{src:V(t.parent.image),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,m("div",{children:[e("div",{className:"text-sm font-bold",children:(o=t.parent)==null?void 0:o.account_name}),e("div",{className:"text-xs text-gray-500",children:(h=t.parent)==null?void 0:h.email})]})]},(r=t.parent)==null?void 0:r.id)},className:"flex-1"}),"LinkedIn Company":e("input",{id:"linkedin_company",name:"linkedin",className:"form-input flex-1 ",onChange:l=>n(l.target.name,l.target.value),defaultValue:t.linkedin}),"Account Number":e("input",{id:"account_number",name:"account_number",className:"form-input flex-1 ",onChange:l=>n(l.target.name,l.target.value),defaultValue:t.account_number}),"Double Check Status":e(w,{id:"double_check_status",name:"double_check_status",onChange:({value:l})=>{n("double_check_status",l)},className:"flex-1",defaultValue:E.find(l=>l.value==t.double_check_status),options:E}),"Child Account":e(k,{defaultOptions:!0,isMulti:!1,id:"child_account_id",placeholder:"Type at least 2 characters to search...",name:"child_account_id",loadOptions:T,onChange:({value:l})=>{n("child_account_id",l)},defaultValue:{value:(c=t.child)==null?void 0:c.id,label:m("div",{className:"flex items-center",children:[t.child?e("img",{src:V(t.child.image),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,m("div",{children:[e("div",{className:"text-sm font-bold",children:(u=t.child)==null?void 0:u.account_name}),e("div",{className:"text-xs text-gray-500",children:(p=t.child)==null?void 0:p.email})]})]},(b=t.child)==null?void 0:b.id)},className:"flex-1"}),"Has No Contacts":e("input",{id:"has_no_contacts",type:"checkbox",name:"has_no_contacts",className:"form-checkbox",onChange:l=>n(l.target.name,l.target.checked),checked:t.has_no_contacts}),DCheck:e("input",{id:"d_check",type:"checkbox",name:"d_check",className:"form-checkbox",onChange:l=>n(l.target.name,l.target.checked),checked:t.has_no_contacts})}};return e(x,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(y,{fields:d})})})},Z=()=>{const s=g(),t=_(a=>a.accountForm),n=(a,o)=>{s(f({[a]:o}))},d={"Terms and Shipping":{Incoterms:e("input",{id:"incoterm",name:"incoterm",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:t.incoterm}),"Payment Terms":e("input",{id:"payment_term",name:"payment_term",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:t.payment_term}),"Credit Line":e("input",{id:"credit_line",name:"credit_line",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:t.credit_line})},"":{"VAT No":e("input",{id:"vat_no",name:"vat_no",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:t.vat_no}),Forwarder:e("input",{id:"forwarder",name:"forwarder",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:t.forwarder}),forwarder_account_no:e("input",{id:"forwarder_account_no",name:"forwarder_account_no",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:t.forwarder_account_no})}};return e(x,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(y,{fields:d})})})},J=()=>{const s=g(),t=_(r=>r.accountForm),[n,d]=N.useState([]),a=(r,c,u)=>{const p=n.find(C=>C.id===u),b=n.findIndex(C=>C.id===u),l={...p,[r]:c},v={...n,[b]:l};d(Object.values(v)),s(f({forecasts:v}))};N.useEffect(()=>{d(Object.values(t.forecasts))},[]);const o=()=>{let r;r=n!=null&&n.length?n.reduce((u,p)=>p.id>u?p.id:u,n[0].id):0;const c=[...n,{id:r+1,q1:"",q2:"",q3:"",q4:""}];d(c),s(f({forecasts:c}))},h=(r=null)=>{const c=n.filter(u=>u.id!=r.id);d(c),s(f({forecasts:c}))};return e(x,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12",children:m("div",{className:"",children:[m("div",{className:"text-lg",children:["Forecast ",new Date().getFullYear()," :"]}),m("div",{className:"mt-8",children:[e("div",{className:"overflow-x",children:m("table",{className:"table-auto overflow-scroll ",children:[e("thead",{children:m("tr",{children:[e("th",{className:"w-1",children:"S.NO"}),e("th",{className:"w-1",children:"Forecast Q1 (€)"}),e("th",{className:"w-1",children:"Forecast Q2 (€)"}),e("th",{className:"w-1",children:"Forecast Q3 (€)"}),e("th",{className:"w-1",children:"Forecast Q4 (€)"})]})}),e("tbody",{children:n.map(r=>m("tr",{className:"align-top",children:[e("td",{children:r.id}),e("td",{children:e("input",{name:"q1",type:"text",className:"form-input w-32",defaultValue:r.q1,onChange:c=>a(c.target.name,c.target.value,r.id)})}),e("td",{children:e("input",{name:"q2",type:"text",className:"form-input w-32",defaultValue:r.q2,onChange:c=>a(c.target.name,c.target.value,r.id)})}),e("td",{children:e("input",{name:"q3",type:"text",className:"form-input w-32",defaultValue:r.q3,onChange:c=>a(c.target.name,c.target.value,r.id)})}),e("td",{children:e("input",{name:"q4",type:"text",className:"form-input w-32",defaultValue:r.q4,onChange:c=>a(c.target.name,c.target.value,r.id)})}),e("td",{children:e("button",{type:"button",onClick:()=>h(r),children:m("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},r.id))})]})}),e("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:e("div",{className:"sm:mb-0 mb-6",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>o(),children:"Add Item"})})})]})]},"Quote Items")})})})},K=()=>{const s=g(),t=_(a=>a.accountForm),n=(a,o)=>{s(f({[a]:o}))},d={"Description Information":{"Description Information":e("textarea",{id:"description",rows:3,name:"description",className:"form-textarea flex-1",placeholder:"",onChange:a=>n(a.target.name,a.target.value),defaultValue:t.description}),"Last Activity Date":e(G,{options:{dateFormat:"Y-m-d ",position:"auto left",defaultDate:t.last_activity_date?new Date(t.last_activity_date):null},name:"last_activity_date",value:t.last_activity_date?new Date(t.last_activity_date):"",className:"form-input flex-1",onChange:(a,o)=>n("last_activity_date",o)})}};return e(x,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(y,{fields:d})})})},X=()=>{const s=g(),t=_(a=>a.accountForm),n=(a,o)=>{s(f({[a]:o}))},d={"Technical information":{ZohoBooksID:e("input",{id:"zoho_books_id",name:"zoho_books_id",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:t.zoho_books_id}),"BooksID EUR":e("input",{id:"books_id_eur",name:"books_id_eur",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:t.books_id_eur})},"":{"Account Margin":e("input",{id:"account_margin",name:"account_margin",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:t.account_margin}),"BooksID USD":e("input",{id:"books_id_usd",name:"books_id_usd",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:t.books_id_usd})}};return e(x,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(y,{fields:d})})})},ee=()=>{const s=g(),t=_(a=>a.accountForm),n=(a,o)=>{s(f({[a]:o}))},d={Unused:{"Purchasing Volume Current":e("input",{id:"purchasing_volume_current",name:"purchasing_volume_current",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:t.purchasing_volume_current})},"":{"Annual Revenue":e("input",{id:"annual_revenue",name:"annual_revenue",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:t.annual_revenue})}};return e(x,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(y,{fields:d})})})},ae=()=>{const s=g(),t=_(a=>a.accountForm),n=(a,o)=>{s(f({[a]:o}))},d={"Address Information":{"Billing Street":e("input",{required:!0,id:"billing_street",name:"billing_street",className:"form-input flex-1",defaultValue:t.billing_street,onChange:a=>n(a.target.name,a.target.value)}),"Billing City":e("input",{required:!0,id:"billing_city",name:"billing_city",className:"form-input flex-1",defaultValue:t.billing_city,onChange:a=>n(a.target.name,a.target.value)}),"Billing State":e("input",{id:"billing_state",name:"billing_state",className:"form-input flex-1",defaultValue:t.billing_state,onChange:a=>n(a.target.name,a.target.value)}),"Billing Code":e("input",{required:!0,id:"billing_code",name:"billing_code",className:"form-input flex-1",defaultValue:t.billing_code,onChange:a=>n(a.target.name,a.target.value)}),"Billing Country":e("input",{required:!0,id:"billing_country",name:"billing_country",defaultValue:t.billing_country,className:"form-input flex-1",onChange:a=>n(a.target.name,a.target.value)})},"":{"Shipping Street":e("input",{id:"shipping_street",name:"shipping_street",className:"form-input flex-1",defaultValue:t.shipping_street,onChange:a=>n(a.target.name,a.target.value)}),"Shipping City":e("input",{id:"shipping_city",name:"shipping_city",className:"form-input flex-1",defaultValue:t.shipping_city,onChange:a=>n(a.target.name,a.target.value)}),"Shipping State":e("input",{id:"shipping_state",name:"shipping_state",className:"form-input flex-1",defaultValue:t.shipping_state,onChange:a=>n(a.target.name,a.target.value)}),"Shipping Code":e("input",{id:"shipping_code",name:"shipping_code",className:"form-input flex-1",defaultValue:t.shipping_code,onChange:a=>n(a.target.name,a.target.value)}),"Shipping Country":e("input",{id:"shipping_country",name:"shipping_country",className:"form-input flex-1",defaultValue:t.shipping_country,onChange:a=>n(a.target.name,a.target.value)})}};return e(x,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(y,{fields:d})})})},te=()=>{const t=P().id;return m("div",{className:"mt-8 px-4",children:[e(Y,{},"invoiceInformation"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(H,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Z,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ae,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(J,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(K,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(X,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ee,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(W,{modelId:t,modelName:"account"})]})},pe=()=>{const{hasPermission:s}=L(),t=_(u=>u.accountForm),[n,d]=N.useState(!0),o=P().id,h=new S,r=g();N.useEffect(()=>{r(M("Account Edit"))}),N.useEffect(()=>{r(j())},[]),N.useEffect(()=>{r(f({api:"updateSingleAccount",redirectTo:"/account/edit/:id",action:"edit"}))},[]),N.useEffect(()=>{c().then(()=>{d(!1)})},[o]);const c=async()=>{const u=await h.fetchSingleAccount(o);if(u.status!=200)return;const p=u.data.data.account;r(f(p))};return n?e(O,{}):!s("update-account")||n?e(O,{}):m("div",{className:"px-4",children:[e(R,{formState:t,resetForm:j}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(te,{})})})]})};export{pe as default};
