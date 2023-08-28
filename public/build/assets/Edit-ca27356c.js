import{u as g,a as _,j as i,b as e,M as f,F as y,r as p,d as A,s as D}from"./main-aee2b09f.js";import{A as h,a as M}from"./react-select-async.esm-688ec673.js";import{S as v}from"./react-select.esm-a7801317.js";import{h as O,g as j,b as B,s as P,a as T,G as b,l as L}from"./CommonFunctions-fe83c770.js";import{C as $}from"./ClearButtonComponent-580ce19f.js";import{A as R}from"./ActionButtonsComponent-a6d20438.js";import{L as Q}from"./LoadingAlpyn-28a7cf2b.js";import"./floating-ui.dom-776dbd07.js";import"./Select-aecb2a80.esm-ed0f9406.js";import"./sweetalert2.all-912ed4f0.js";const U=()=>{var n,c,l,o,x,N,C,w,E,S,V,F,q,k,I;const r=g(),a=_(t=>t.excessForm),s=(t,m)=>{r(f({[t]:m}))},u=[{value:"none",label:"-None-"},{value:"email",label:"Email"},{value:"portal",label:"Portal"}],d={Header:{"Excess Image":i("div",{className:"",children:[i("div",{className:"flex",children:[e("input",{id:"excess_image",type:"file",className:"form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1",accept:"image/*",onChange:t=>O(t,m=>{r(f({excess_image:`${m==null?void 0:m.data.data.file_url}`}))}),name:"excess_image"},"excess_image"),e($,{callBack:()=>{const t=document.getElementById("excess_image");t&&(t.value="",t.dispatchEvent(new Event("change",{bubbles:!0}))),r(f({excess_image:null}))}})]}),e("img",{id:"excess_image_preview",src:j(a.excess_image||a.oldImage),alt:"img",className:"mt-4 w-20 h-20 rounded"})]}),"Account Name":e(h,{isMulti:!1,id:"account_id",name:"account_id",required:!0,placeholder:"Type at least 2 characters to search...",loadOptions:B,onChange:({value:t})=>{s("account_id",t)},defaultValue:{value:(n=a.account)==null?void 0:n.id,label:i("div",{className:"flex items-center",children:[e("img",{src:(c=a.account)==null?void 0:c.image,alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),i("div",{children:[e("div",{className:"text-sm font-bold",children:(l=a.account)==null?void 0:l.name}),e("div",{className:"text-xs text-gray-500",children:(o=a.account)==null?void 0:o.email})]})]},(x=a.account)==null?void 0:x.id)},className:"flex-1"}),Contact:e(h,{isMulti:!1,id:"contact_id",name:"contact_id",placeholder:"Type at least 2 characters to search...",loadOptions:P,onChange:({value:t})=>{s("contact_id",t)},defaultValue:{value:(N=a.contact)==null?void 0:N.id,label:i("div",{className:"flex items-center",children:[e("img",{src:(C=a.contact)==null?void 0:C.image,alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),i("div",{children:[e("div",{className:"text-sm font-bold",children:(w=a.contact)==null?void 0:w.name}),e("div",{className:"text-xs text-gray-500",children:(E=a.contact)==null?void 0:E.email})]})]},(S=a.contact)==null?void 0:S.id)},className:"flex-1"}),Email:e("input",{id:"email",type:"text",name:"email",className:"form-input flex-1 ",defaultValue:a.email,onChange:t=>s(t.target.name,t.target.value)}),Currency:e(v,{options:T,onChange:({value:t})=>{s("currency",t)},defaultValue:T.find(t=>t.value==a.currency),className:"flex-1"}),"Portal Excess Id":e("input",{id:"portal_excess_id",type:"text",name:"portal_excess_id",className:"form-input flex-1 ",defaultValue:a.portal_excess_id,onChange:t=>s(t.target.name,t.target.value)})},"":{"Excess Owner":e(h,{isMulti:!1,id:"owner_id",name:"owner_id",placeholder:"Type at least 2 characters to search...",loadOptions:P,onChange:({value:t})=>{s("owner_id",t)},defaultValue:{value:(V=a.owner)==null?void 0:V.id,label:i("div",{className:"flex items-center",children:[e("img",{src:(F=a.owner)==null?void 0:F.image,alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),i("div",{children:[e("div",{className:"text-sm font-bold",children:(q=a.owner)==null?void 0:q.name}),e("div",{className:"text-xs text-gray-500",children:(k=a.owner)==null?void 0:k.email})]})]},(I=a.owner)==null?void 0:I.id)},className:"flex-1"}),"Excess File":i("div",{children:[e("input",{id:"excess_file",type:"file",className:"form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1",onChange:t=>O(t,m=>{r(f({field:"excess_file",value:`${m==null?void 0:m.data.data.file_url}`}))}),name:"excess_file"},"excess_file"),e("a",{className:"btn btn-outline-primary",href:a.excess_file,children:"Download"})]}),"Excess Source":e(v,{name:"excess_source",id:"excess_source",options:u,onChange:({value:t})=>{s("excess_source",t)},defaultValue:u.find(t=>t.value==a.excess_source),className:"flex-1"}),"Secondary Email":e("input",{id:"secondary_email",type:"text",name:"secondary_email",defaultValue:a.secondary_email,className:"form-input flex-1 ",onChange:t=>s(t.target.name,t.target.value)}),"Email Opt Out":e("input",{id:"email_opt_out",type:"checkbox",name:"email_opt_out",className:"form-checkbox",checked:a.email_opt_out,onChange:t=>s(t.target.name,t.target.checked)}),"Exchange Rate":e("input",{id:"exchangeRate",type:"text",value:"1",placeholder:"Readonly input here…",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0})}};return e(y,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(b,{fields:d})})})},G=()=>{const r=g(),a=_(n=>n.excessForm),s=(n,c)=>{r(f({[n]:c}))},u=[{value:"none",label:"-None-"},{value:"line_bid",label:"Line Bid"},{value:"package_bid",label:"Package Bid"},{value:"consignment",label:"Consignment"},{value:"closed",label:"Closed"}],d={Status:{"Excess Type":e(v,{options:u,name:"excess_type",id:"excess_type",onChange:({value:n})=>{s("excess_type",n)},defaultValue:u.find(n=>n.value==a.excess_type),className:"flex-1"})},"":{"Excess Name":e("input",{id:"excess_name",type:"text",name:"excess_name",className:"form-input flex-1 ",defaultValue:a.excess_name,onChange:n=>s(n.target.name,n.target.value)})}};return e(y,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(b,{fields:d})})})},H=()=>{var d,n,c;const r=g(),a=_(l=>l.excessForm),s=(l,o)=>{r(f({[l]:o}))},u={"Excess Line":{"Product name":e(h,{isMulti:!1,id:"product_name",name:"product_name",required:!0,placeholder:"Type at least 2 characters to search...",loadOptions:L,onChange:({value:l})=>{s("product_id",l)},defaultValue:{value:(d=a.product)==null?void 0:d.id,label:e("div",{className:"flex items-center",children:e("div",{className:"text-sm font-bold",children:(n=a.product)==null?void 0:n.name})},(c=a.product)==null?void 0:c.id)},className:"flex-1"}),"Customer Internal No.":e("input",{id:"customer_internal_no",type:"text",name:"customer_internal_no",className:"form-input flex-1 ",defaultValue:a.customer_internal_no,onChange:l=>s(l.target.name,l.target.value)}),Quantity:e("input",{id:"quantity",type:"text",name:"quantity",className:"form-input flex-1 ",defaultValue:a.quantity,onChange:l=>s(l.target.name,l.target.value)}),Cost:e("input",{id:"cost",type:"text",name:"cost",className:"form-input flex-1 ",defaultValue:a.cost,onChange:l=>s(l.target.name,l.target.value)})},"":{"Date Code":e("input",{id:"date_code",type:"text",name:"date_code",className:"form-input flex-1 ",defaultValue:a.date_code,onChange:l=>s(l.target.name,l.target.value)}),SPQ:e("input",{id:"spq",type:"text",name:"spq",className:"form-input flex-1 ",defaultValue:a.spq,onChange:l=>s(l.target.name,l.target.value)}),MOQ:e("input",{id:"moq",type:"text",name:"moq",defaultValue:a.moq,className:"form-input flex-1 ",onChange:l=>s(l.target.name,l.target.value)}),Comment:e("input",{id:"comment",type:"text",name:"comment",defaultValue:a.comment,className:"form-input flex-1 ",onChange:l=>s(l.target.name,l.target.value)})}};return e(y,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(b,{fields:u})})})},z=()=>i("div",{className:"mt-8 px-4",children:[e(U,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(G,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(H,{})]}),se=()=>{const r=_(o=>o.excessForm),[a,s]=p.useState(!0),d=A().id,n=new M,c=g();p.useEffect(()=>{c(D("Excess Edit"))});const l=async()=>{const o=await n.fetchSingleExcess(d);if(o.status!=200)return;const x=o.data.data.excess;x.oldImage=x.excess_image,c(f(x))};return p.useEffect(()=>{l().then(()=>{s(!1)})},[d]),p.useEffect(()=>{c(f({api:"updateSingleExcess",redirectTo:"/excess/edit/:id",action:"edit"}))},[]),a?e(Q,{}):i("div",{className:"px-4",children:[e(R,{formState:r}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(z,{})})})]})};export{se as default};
