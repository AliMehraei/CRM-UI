import{u as l,d as x,j as e,F as m,aC as r,l as c,n as g,x as y,k as _,m as C,X as N,b as f,c as b,r as u,s as v,aD as p,e as E}from"./main-52c7c346.js";import{A as S}from"./ActionButtonsComponent-285b78cc.js";/* empty css                  */import{S as i}from"./react-select.esm-7d4aafc4.js";import{G as d}from"./GenerateFields-b98fd03f.js";import{I as w}from"./ImageUploadComponent-ad65325d.js";import{F}from"./FileUploadComponent-25ab6a47.js";import{E as O,x as q}from"./SelectOptions-11a13050.js";import"./index-cd3f232e.js";import"./ClearButtonComponent-5de9866e.js";const A=()=>{const o=l(),s=x(t=>t.excessForm),n=(t,h)=>{o(r({[t]:h}))};return e(m,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(d,{fields:{Header:{"Excess Image":e(w,{id:"image",modelName:"excess",formState:s,formAttribute:"image",updateFormData:r}),"Account Name":e(c,{defaultOptions:!0,isMulti:!1,id:"account_id",name:"account_id",required:!0,placeholder:"Type at least 2 characters to search...",loadOptions:g,onChange:({value:t})=>{n("account_id",t)},className:"flex-1"}),Contact:e(c,{defaultOptions:!0,isMulti:!1,id:"contact_id",name:"contact_id",placeholder:"Type at least 2 characters to search...",loadOptions:y,onChange:({value:t})=>{n("contact_id",t)},className:"flex-1"}),Email:e("input",{id:"email",type:"text",name:"email",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value)}),Currency:e(i,{options:_,onChange:({value:t})=>{n("currency",t)},className:"flex-1"}),"Portal Excess Id":e("input",{id:"portal_excess_id",type:"text",name:"portal_excess_id",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value)})},"":{"Excess Owner":e(c,{defaultOptions:!0,isMulti:!1,id:"owner_id",name:"owner_id",placeholder:"Type at least 2 characters to search...",loadOptions:C,onChange:({value:t})=>{n("owner_id",t)},className:"flex-1"}),"Excess File":e(F,{id:"excess_file",modelName:"excess",formState:s,formAttribute:"excess_file",updateFormData:r}),"Excess Source":e(i,{name:"excess_source",id:"excess_source",options:O,onChange:({value:t})=>{n("excess_source",t)},className:"flex-1"}),"Secondary Email":e("input",{id:"secondary_email",type:"text",name:"secondary_email",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value)}),"Email Opt Out":e("input",{id:"email_opt_out",type:"checkbox",name:"email_opt_out",className:"form-checkbox",onChange:t=>n(t.target.name,t.target.checked)}),"Exchange Rate":e("input",{id:"exchangeRate",type:"text",value:"1",placeholder:"Readonly input here…",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0})}}})})})},k=()=>{const o=l(),s=(a,t)=>{o(r({[a]:t}))};return e(m,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(d,{fields:{Status:{"Excess Type":e(i,{options:q,name:"excess_type",id:"excess_type",onChange:({value:a})=>{s("excess_type",a)},className:"flex-1"})},"":{"Excess Name":e("input",{id:"excess_name",type:"text",name:"excess_name",className:"form-input flex-1 ",onChange:a=>s(a.target.name,a.target.value)})}}})})})},T=()=>{const o=l(),s=(a,t)=>{o(r({[a]:t}))};return e(m,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(d,{fields:{"Excess Line":{"Product name":e(c,{defaultOptions:!1,isMulti:!1,id:"product_name",name:"product_name",required:!0,placeholder:"Type at least 2 characters to search...",loadOptions:N,onChange:({value:a})=>{s("product_id",a)},className:"flex-1"}),"Customer Internal No.":e("input",{id:"customer_internal_no",type:"text",name:"customer_internal_no",className:"form-input flex-1 ",onChange:a=>s(a.target.name,a.target.value)}),Quantity:e("input",{id:"quantity",type:"text",name:"quantity",className:"form-input flex-1 ",required:!0,onChange:a=>s(a.target.name,a.target.value)}),Cost:e("input",{id:"cost",type:"text",name:"cost",className:"form-input flex-1 ",required:!0,onChange:a=>s(a.target.name,a.target.value)})},"":{"Date Code":e("input",{id:"date_code",type:"text",name:"date_code",className:"form-input flex-1 ",onChange:a=>s(a.target.name,a.target.value)}),SPQ:e("input",{id:"spq",type:"text",name:"spq",className:"form-input flex-1 ",onChange:a=>s(a.target.name,a.target.value)}),MOQ:e("input",{id:"moq",type:"text",name:"moq",className:"form-input flex-1 ",onChange:a=>s(a.target.name,a.target.value)}),Comment:e("input",{id:"comment",type:"text",name:"comment",className:"form-input flex-1 ",onChange:a=>s(a.target.name,a.target.value)})}}})})})},j=()=>f("div",{className:"mt-8 px-4",children:[e(A,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(k,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(T,{})]}),$=()=>{const{hasPermission:o}=b(),s=x(a=>a.excessForm),n=l();return u.useEffect(()=>{n(v("Excess Add"))}),u.useEffect(()=>{n(p())},[]),o("create-excess")?f("div",{className:"px-4",children:[e(S,{formState:s,resetForm:p}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(j,{})})})]}):e(E,{})};export{$ as default};
