import{u as d,a as h,j as m,b as e,V as o,F as p,r as _,s as y,W as b}from"./main-36d29c26.js";import{h as x,g as N,b as v,s as g,a as C,G as f,m as E,c as w}from"./CommonFunctions-dfef060c.js";/* empty css                  */import{A as r}from"./react-select-async.esm-553a648f.js";import{S as u}from"./react-select.esm-6fdaacd5.js";import{C as S}from"./ClearButtonComponent-feef7af3.js";import"./sweetalert2.all-8f337f8d.js";import"./Select-aecb2a80.esm-2944e309.js";const F=()=>{const n=d(),s=h(a=>a.excessForm),l=(a,c)=>{n(o({[a]:c}))},t=[{value:"none",label:"-None-"},{value:"email",label:"Email"},{value:"portal",label:"Portal"}],i={Header:{"Excess Image":m("div",{className:"",children:[m("div",{className:"flex",children:[e("input",{id:"excess_image",type:"file",className:"form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1",accept:"image/*",onChange:a=>x(a,c=>{n(o({excess_image:`${c==null?void 0:c.data.data.file_url}`}))}),name:"excess_image"},"excess_image"),e(S,{callBack:()=>{const a=document.getElementById("excess_image");a&&(a.value="",a.dispatchEvent(new Event("change",{bubbles:!0}))),n(o({excess_image:null}))}})]}),e("img",{id:"excess_image_preview",src:N(s.excess_image||s.oldImage),alt:"img",className:"mt-4 w-20 h-20 rounded"})]}),"Account Name":e(r,{isMulti:!1,id:"account_id",name:"account_id",required:!0,placeholder:"Type at least 2 characters to search...",loadOptions:v,onChange:({value:a})=>{l("account_id",a)},className:"flex-1"}),Contact:e(r,{isMulti:!1,id:"contact_id",name:"contact_id",placeholder:"Type at least 2 characters to search...",loadOptions:g,onChange:({value:a})=>{l("contact_id",a)},className:"flex-1"}),Email:e("input",{id:"email",type:"text",name:"email",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value)}),Currency:e(u,{options:C,onChange:({value:a})=>{l("currency",a)},className:"flex-1"}),"Portal Excess Id":e("input",{id:"portal_excess_id",type:"text",name:"portal_excess_id",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value)})},"":{"Excess Owner":e(r,{isMulti:!1,id:"owner_id",name:"owner_id",placeholder:"Type at least 2 characters to search...",loadOptions:g,onChange:({value:a})=>{l("owner_id",a)},className:"flex-1"}),"Excess File":e("input",{id:"excess_file",type:"file",className:"form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1",onChange:a=>x(a,c=>{n(o({excess_file:`${c==null?void 0:c.data.data.file_url}`}))}),name:"excess_file"},"excess_file"),"Excess Source":e(u,{name:"excess_source",id:"excess_source",options:t,onChange:({value:a})=>{l("excess_source",a)},className:"flex-1"}),"Secondary Email":e("input",{id:"secondary_email",type:"text",name:"secondary_email",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value)}),"Email Opt Out":e("input",{id:"email_opt_out",type:"checkbox",name:"email_opt_out",className:"form-checkbox",onChange:a=>l(a.target.name,a.target.checked)}),"Exchange Rate":e("input",{id:"exchangeRate",type:"text",value:"1",placeholder:"Readonly input here…",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0})}};return e(p,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(f,{fields:i})})})},k=()=>{const n=d(),s=(i,a)=>{n(o({[i]:a}))};return e(p,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(f,{fields:{Status:{"Excess Type":e(u,{options:[{value:"none",label:"-None-"},{value:"line_bid",label:"Line Bid"},{value:"package_bid",label:"Package Bid"},{value:"consignment",label:"Consignment"},{value:"closed",label:"Closed"}],name:"excess_type",id:"excess_type",onChange:({value:i})=>{s("excess_type",i)},className:"flex-1"})},"":{"Excess Name":e("input",{id:"excess_name",type:"text",name:"excess_name",className:"form-input flex-1 ",onChange:i=>s(i.target.name,i.target.value)})}}})})})},O=()=>{const n=d(),s=(t,i)=>{n(o({[t]:i}))};return e(p,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(f,{fields:{"Excess Line":{"Product name":e(r,{isMulti:!1,id:"product_name",name:"product_name",required:!0,placeholder:"Type at least 2 characters to search...",loadOptions:E,onChange:({value:t})=>{s("product_id",t)},className:"flex-1"}),"Customer Internal No.":e("input",{id:"customer_internal_no",type:"text",name:"customer_internal_no",className:"form-input flex-1 ",onChange:t=>s(t.target.name,t.target.value)}),Quantity:e("input",{id:"quantity",type:"text",name:"quantity",className:"form-input flex-1 ",onChange:t=>s(t.target.name,t.target.value)}),Cost:e("input",{id:"cost",type:"text",name:"cost",className:"form-input flex-1 ",onChange:t=>s(t.target.name,t.target.value)})},"":{"Date Code":e("input",{id:"date_code",type:"text",name:"date_code",className:"form-input flex-1 ",onChange:t=>s(t.target.name,t.target.value)}),SPQ:e("input",{id:"spq",type:"text",name:"spq",className:"form-input flex-1 ",onChange:t=>s(t.target.name,t.target.value)}),MOQ:e("input",{id:"moq",type:"text",name:"moq",className:"form-input flex-1 ",onChange:t=>s(t.target.name,t.target.value)}),Comment:e("input",{id:"comment",type:"text",name:"comment",className:"form-input flex-1 ",onChange:t=>s(t.target.name,t.target.value)})}}})})})},q=()=>m("div",{className:"mt-8 px-4",children:[e(F,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(k,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(O,{})]}),D=()=>{const n=h(l=>l.excessForm),s=d();return _.useEffect(()=>{s(y("Excess Add"))}),m("div",{className:"px-4",children:[e(w,{formState:n,resetForm:b}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(q,{})})})]})};export{D as default};
