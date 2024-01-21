import{u as b,a as F,d as x,j as e,i as p,o as q,C as L,p as D,A as V,m as U,b as m,f as S,v as A,F as h,q as T,r as y,h as P,c as M,s as R,t as j,e as O}from"./main-957414d0.js";import{A as $}from"./ActionButtonsComponent-a2c8b82e.js";/* empty css                  */import{G as C}from"./GenerateFields-20135bfa.js";import{A as B,a as Q,b as E}from"./SelectOptions-01c92cf3.js";import{S as k}from"./react-select.esm-395777ca.js";import{I as z}from"./ImageUploadComponent-19edc128.js";import{F as G}from"./FileUploadComponent-c5ad1149.js";import{F as W}from"./index-fefa5ad9.js";import{A as Y}from"./AttachmentSection-c971bb21.js";import"./index-2b2f54a5.js";import"./ClearButtonComponent-b7e6a1e7.js";const H=()=>{var a,o,g,r,c,u,f,v,l,N,w,I;const s=b();new F;const t=x(i=>i.accountForm),n=(i,_)=>{s(p({[i]:_}))},d={Account:{"Account Image":e(z,{formState:t,modelName:"account",id:"account_image",formAttribute:"image",updateFormData:p}),"Account Name":e("input",{id:"account_name",required:!0,name:"account_name",className:"form-input flex-1 ",onChange:i=>n(i.target.name,i.target.value),defaultValue:t.account_name}),"Account Type":e(k,{name:"account_type",id:"account_type",placeholder:"Select Account Type...",options:q,onChange:({value:i})=>{n("account_type",i)},defaultValue:q.find(i=>i.value==t.account_type)}),Contracts:e(k,{isMulti:!0,name:"contract",id:"contract",placeholder:"Select Contract Type...",options:L,onChange:i=>{n("contract",i.map(_=>_.value))},defaultValue:t.contract?t.contract.map(i=>({value:i,label:i})):[]}),"Contract Attachment":e(G,{id:"contract_attachment",updateFormData:p,formState:t,modelName:"account",formAttribute:"contract_attachment"}),"Business Account":e("input",{id:"is_business",type:"checkbox",name:"business_account",className:"form-checkbox",onChange:i=>n(i.target.name,i.target.checked),checked:t.business_account}),"Approved by":e("input",{id:"approved_by",name:"approved_by_id",type:"text",placeholder:"readOnly input here…",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",defaultValue:t.approved_by?((a=t.approved_by)==null?void 0:a.first_name)+" "+((o=t.approved_by)==null?void 0:o.last_name):"",disabled:!0}),Currency:e(k,{id:"currency",name:"currency",options:D,onChange:({value:i})=>{n("currency",i)},defaultValue:D.find(i=>i.value==t.currency),className:"flex-1"})},"":{"Account Owner":e(V,{defaultOptions:!0,isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:U,onChange:({value:i})=>{n("owner_id",i)},defaultValue:{value:(g=t.owner)==null?void 0:g.id,label:m("div",{className:"flex items-center",children:[t.owner?e("img",{src:S(t.owner.avatar_data),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,m("div",{children:[e("div",{className:"text-sm font-bold",children:((r=t.owner)==null?void 0:r.first_name)+" "+((c=t.owner)==null?void 0:c.last_name)}),e("div",{className:"text-xs text-gray-500",children:(u=t.owner)==null?void 0:u.email})]}),e("button",{className:"btn text-xs btn-sm ml-auto",onClick:()=>{var i,_;return A(`${((i=t.owner)==null?void 0:i.first_name)+" "+((_=t.owner)==null?void 0:_.last_name)}`)},children:"Copy & Select"})]},(f=t.owner)==null?void 0:f.id)},className:"flex-1"}),"PM User":e(V,{defaultOptions:!0,isMulti:!1,id:"pm_user_id",placeholder:"Type at least 2 characters to search...",name:"pm_user_id",loadOptions:U,onChange:({value:i})=>{n("pm_user_id",i)},defaultValue:{value:(v=t.pmUser)==null?void 0:v.id,label:e("div",{className:"flex items-center",children:t.pmUser?m(h,{children:[e("img",{src:S(t.pmUser.avatar_data),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),m("div",{children:[e("div",{className:"text-sm font-bold",children:((l=t.pmUser)==null?void 0:l.first_name)+" "+((N=t.pmUser)==null?void 0:N.last_name)}),e("div",{className:"text-xs text-gray-500",children:(w=t.pmUser)==null?void 0:w.email})]}),e("button",{className:"btn text-xs btn-sm ml-auto",onClick:()=>{var i,_;return A(`${((i=t.pmUser)==null?void 0:i.first_name)+" "+((_=t.pmUser)==null?void 0:_.last_name)}`)},children:"Copy & Select"})]}):null},(I=t.pmUser)==null?void 0:I.id)},className:"flex-1"}),"Account Activity":e(k,{id:"account_activity",name:"account_activity",options:B,onChange:({value:i})=>{n("account_activity",i)},defaultValue:B.find(i=>i.value==t.account_activity),className:"flex-1"}),TAM:e("input",{id:"tam",name:"tam",className:"form-input flex-1 ",onChange:i=>n(i.target.name,i.target.value),defaultValue:t.tam}),"Exchange Rate":e("input",{id:"exchange_rate",name:"exchange_rate",type:"text",value:"1",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0}),"Lead Reference":e("input",{id:"lead_reference",name:"lead_reference",className:"form-input flex-1 ",onChange:i=>n(i.target.name,i.target.value),defaultValue:t.lead_reference}),"Account Rating":e(k,{id:"rating",name:"rating",options:Q,onChange:({value:i})=>{n("rating",i)},defaultValue:{value:"no_action",label:"No Action"},className:"flex-1"})}};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(C,{fields:d})})})},Z=()=>{var a,o,g,r,c,u,f,v;const s=b();new F;const t=x(l=>l.accountForm),n=(l,N)=>{s(p({[l]:N}))},d={"Account Information":{"Primary First Name":e("input",{id:"primary_first_name",name:"primary_first_name",className:"form-input flex-1 ",onChange:l=>n(l.target.name,l.target.value),defaultValue:t.primary_first_name}),Phone:e("input",{id:"phone",required:!0,name:"phone",className:"form-input flex-1 ",onChange:l=>n(l.target.name,l.target.value),defaultValue:t.phone}),Fax:e("input",{id:"fax",name:"fax",className:"form-input flex-1 ",onChange:l=>n(l.target.name,l.target.value),defaultValue:t.fax}),Email:e("input",{id:"email",required:!0,name:"email",className:"form-input flex-1 ",onChange:l=>n(l.target.name,l.target.value),defaultValue:t.email}),Website:e("input",{id:"website",name:"website",className:"form-input flex-1 ",onChange:l=>n(l.target.name,l.target.value),defaultValue:t.website})},"":{"Primary Last Name":e("input",{id:"primary_last_name",name:"primary_last_name",className:"form-input flex-1 ",onChange:l=>n(l.target.name,l.target.value),defaultValue:t.primary_last_name}),"Parent Account":e(V,{defaultOptions:!0,isMulti:!1,id:"parent_account_id",placeholder:"Type at least 2 characters to search...",name:"parent_account_id",loadOptions:T,onChange:({value:l})=>{n("parent_account_id",l)},defaultValue:{value:(a=t.parent)==null?void 0:a.id,label:e("div",{className:"flex items-center",children:t.parent?m(h,{children:[e("img",{src:S(t.parent.image),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),m("div",{children:[e("div",{className:"text-sm font-bold",children:(o=t.parent)==null?void 0:o.account_name}),e("div",{className:"text-xs text-gray-500",children:(g=t.parent)==null?void 0:g.email})]}),e("button",{className:"btn text-xs btn-sm ml-auto",onClick:()=>{var l;return A(`${(l=t.parent)==null?void 0:l.account_name}`)},children:"Copy & Select"})]}):null},(r=t.parent)==null?void 0:r.id)},className:"flex-1"}),"Company Linkedin":e("input",{id:"linkedin_company",name:"linkedin",className:"form-input flex-1 ",onChange:l=>n(l.target.name,l.target.value),defaultValue:t.linkedin}),"Account Number":e("input",{id:"account_number",name:"account_number",className:"form-input flex-1 ",onChange:l=>n(l.target.name,l.target.value),defaultValue:t.account_number}),"Double Check Status":e(k,{id:"double_check_status",name:"double_check_status",onChange:({value:l})=>{n("double_check_status",l)},className:"flex-1",defaultValue:E.find(l=>l.value==t.double_check_status),options:E}),"Child Account":e(V,{defaultOptions:!0,isMulti:!1,id:"child_account_id",placeholder:"Type at least 2 characters to search...",name:"child_account_id",loadOptions:T,onChange:({value:l})=>{n("child_account_id",l)},defaultValue:{value:(c=t.child)==null?void 0:c.id,label:e("div",{className:"flex items-center",children:t.child?m(h,{children:[e("img",{src:S(t.child.image),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),m("div",{children:[e("div",{className:"text-sm font-bold",children:(u=t.child)==null?void 0:u.account_name}),e("div",{className:"text-xs text-gray-500",children:(f=t.child)==null?void 0:f.email})]}),e("button",{className:"btn text-xs btn-sm ml-auto",onClick:()=>{var l;return A(`${(l=t.child)==null?void 0:l.account_name}`)},children:"Copy & Select"})]}):null},(v=t.child)==null?void 0:v.id)},className:"flex-1"}),"Has No Contacts":e("input",{id:"has_no_contacts",type:"checkbox",name:"has_no_contacts",className:"form-checkbox",onChange:l=>n(l.target.name,l.target.checked),checked:t.has_no_contacts}),DCheck:e("input",{id:"d_check",type:"checkbox",name:"d_check",className:"form-checkbox",onChange:l=>n(l.target.name,l.target.checked),checked:t.d_check})}};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(C,{fields:d})})})},J=()=>{const s=b(),t=x(a=>a.accountForm),n=(a,o)=>{s(p({[a]:o}))},d={"Terms and Shipping":{Incoterms:e("input",{id:"incoterm",name:"incoterm",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:t.incoterm}),"Payment Terms":e("input",{id:"payment_term",name:"payment_term",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:t.payment_term}),"Credit Line":e("input",{id:"credit_line",name:"credit_line",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:t.credit_line})},"":{"VAT No":e("input",{id:"vat_no",name:"vat_no",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:t.vat_no}),Forwarder:e("input",{id:"forwarder",name:"forwarder",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:t.forwarder}),forwarder_account_no:e("input",{id:"forwarder_account_no",name:"forwarder_account_no",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:t.forwarder_account_no})}};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(C,{fields:d})})})},K=()=>{const s=b(),t=x(r=>r.accountForm),[n,d]=y.useState([]),a=(r,c,u)=>{const f=n.find(w=>w.id===u),v=n.findIndex(w=>w.id===u),l={...f,[r]:c},N={...n,[v]:l};d(Object.values(N)),s(p({forecasts:N}))};y.useEffect(()=>{d(Object.values(t.forecasts))},[]);const o=()=>{let r;r=n!=null&&n.length?n.reduce((u,f)=>f.id>u?f.id:u,n[0].id):0;const c=[...n,{id:r+1,q1:"",q2:"",q3:"",q4:""}];d(c),s(p({forecasts:c}))},g=(r=null)=>{const c=n.filter(u=>u.id!=r.id);d(c),s(p({forecasts:c}))};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12",children:m("div",{className:"",children:[m("div",{className:"text-lg",children:["Forecast ",new Date().getFullYear()," :"]}),m("div",{className:"mt-8",children:[e("div",{className:"overflow-x",children:m("table",{className:"table-auto overflow-scroll ",children:[e("thead",{children:m("tr",{children:[e("th",{className:"w-1",children:"S.NO"}),e("th",{className:"w-1",children:"Forecast Q1 (€)"}),e("th",{className:"w-1",children:"Forecast Q2 (€)"}),e("th",{className:"w-1",children:"Forecast Q3 (€)"}),e("th",{className:"w-1",children:"Forecast Q4 (€)"})]})}),e("tbody",{children:n.map(r=>m("tr",{className:"align-top",children:[e("td",{children:r.id}),e("td",{children:e("input",{name:"q1",type:"text",className:"form-input w-32",defaultValue:r.q1,onChange:c=>a(c.target.name,c.target.value,r.id)})}),e("td",{children:e("input",{name:"q2",type:"text",className:"form-input w-32",defaultValue:r.q2,onChange:c=>a(c.target.name,c.target.value,r.id)})}),e("td",{children:e("input",{name:"q3",type:"text",className:"form-input w-32",defaultValue:r.q3,onChange:c=>a(c.target.name,c.target.value,r.id)})}),e("td",{children:e("input",{name:"q4",type:"text",className:"form-input w-32",defaultValue:r.q4,onChange:c=>a(c.target.name,c.target.value,r.id)})}),e("td",{children:e("button",{type:"button",onClick:()=>g(r),children:m("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},r.id))})]})}),e("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:e("div",{className:"sm:mb-0 mb-6",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>o(),children:"Add Item"})})})]})]},"Quote Items")})})})},X=()=>{const s=b(),t=x(a=>a.accountForm),n=(a,o)=>{s(p({[a]:o}))},d={"Description Information":{"Description Information":e("textarea",{id:"description",rows:3,name:"description",className:"form-textarea flex-1",placeholder:"",onChange:a=>n(a.target.name,a.target.value),defaultValue:t.description}),"Last Activity Date":e(W,{options:{dateFormat:"Y-m-d ",position:"auto left",defaultDate:t.last_activity_date?new Date(t.last_activity_date):null},name:"last_activity_date",value:t.last_activity_date?new Date(t.last_activity_date):"",className:"form-input flex-1",onChange:(a,o)=>n("last_activity_date",o)})}};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(C,{fields:d})})})},ee=()=>{const s=b(),t=x(a=>a.accountForm),n=(a,o)=>{s(p({[a]:o}))},d={"Technical information":{ZohoBooksID:e("input",{id:"zoho_books_id",name:"zoho_books_id",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:t.zoho_books_id}),"BooksID EUR":e("input",{id:"books_id_eur",name:"books_id_eur",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:t.books_id_eur})},"":{"Account Margin":e("input",{id:"account_margin",name:"account_margin",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:t.account_margin}),"BooksID USD":e("input",{id:"books_id_usd",name:"books_id_usd",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:t.books_id_usd})}};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(C,{fields:d})})})},ae=()=>{const s=b(),t=x(a=>a.accountForm),n=(a,o)=>{s(p({[a]:o}))},d={Unused:{"Purchasing Volume Current":e("input",{id:"purchasing_volume_current",name:"purchasing_volume_current",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:t.purchasing_volume_current})},"":{"Annual Revenue":e("input",{id:"annual_revenue",name:"annual_revenue",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:t.annual_revenue})}};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(C,{fields:d})})})},te=()=>{const s=b(),t=x(a=>a.accountForm),n=(a,o)=>{s(p({[a]:o}))},d={"Address Information":{"Billing Street":e("input",{required:!0,id:"billing_street",name:"billing_street",className:"form-input flex-1",defaultValue:t.billing_street,onChange:a=>n(a.target.name,a.target.value)}),"Billing City":e("input",{required:!0,id:"billing_city",name:"billing_city",className:"form-input flex-1",defaultValue:t.billing_city,onChange:a=>n(a.target.name,a.target.value)}),"Billing State":e("input",{id:"billing_state",name:"billing_state",className:"form-input flex-1",defaultValue:t.billing_state,onChange:a=>n(a.target.name,a.target.value)}),"Billing Code":e("input",{required:!0,id:"billing_code",name:"billing_code",className:"form-input flex-1",defaultValue:t.billing_code,onChange:a=>n(a.target.name,a.target.value)}),"Billing Country":e("input",{required:!0,id:"billing_country",name:"billing_country",defaultValue:t.billing_country,className:"form-input flex-1",onChange:a=>n(a.target.name,a.target.value)})},"":{"Shipping Street":e("input",{id:"shipping_street",name:"shipping_street",className:"form-input flex-1",defaultValue:t.shipping_street,onChange:a=>n(a.target.name,a.target.value)}),"Shipping City":e("input",{id:"shipping_city",name:"shipping_city",className:"form-input flex-1",defaultValue:t.shipping_city,onChange:a=>n(a.target.name,a.target.value)}),"Shipping State":e("input",{id:"shipping_state",name:"shipping_state",className:"form-input flex-1",defaultValue:t.shipping_state,onChange:a=>n(a.target.name,a.target.value)}),"Shipping Code":e("input",{id:"shipping_code",name:"shipping_code",className:"form-input flex-1",defaultValue:t.shipping_code,onChange:a=>n(a.target.name,a.target.value)}),"Shipping Country":e("input",{id:"shipping_country",name:"shipping_country",className:"form-input flex-1",defaultValue:t.shipping_country,onChange:a=>n(a.target.name,a.target.value)})}};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(C,{fields:d})})})},ne=()=>{const t=P().id;return m("div",{className:"mt-8 px-4",children:[e(H,{},"invoiceInformation"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Z,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(J,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(te,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(K,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(X,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ee,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ae,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Y,{modelId:t,modelName:"account"})]})},ge=()=>{const{hasPermission:s}=M(),t=x(u=>u.accountForm),[n,d]=y.useState(!0),o=P().id,g=new F,r=b();y.useEffect(()=>{r(R("Account Edit"))}),y.useEffect(()=>{r(j())},[]),y.useEffect(()=>{r(p({api:"updateSingleAccount",redirectTo:"/account/edit/:id",action:"edit"}))},[]),y.useEffect(()=>{c().then(()=>{d(!1)})},[o]);const c=async()=>{const u=await g.fetchSingleAccount(o);if(u.status!=200)return;const f=u.data.data.account;r(p(f))};return n?e(O,{}):!s("update-account")||n?e(O,{}):m("div",{className:"px-4",children:[e($,{formState:t,resetForm:j}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(ne,{})})})]})};export{ge as default};
