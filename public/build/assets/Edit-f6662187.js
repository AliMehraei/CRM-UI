import{u as _,a as v,j as c,b as e,$ as u,F as b,c as O,r as g,h as P,s as T,f as q,a0 as D,d as A}from"./main-1d204f78.js";import{A as h}from"./react-select-async.esm-19b258b2.js";import{S as y}from"./react-select.esm-c3107f47.js";import{G as N,A as B}from"./GenerateFields-5a1cc3af.js";import{h as j,g as M,b as $,c as L,a as I,s as R,m as U}from"./CommonFunctions-ef1be312.js";import{C as Q}from"./ClearButtonComponent-9f2ddcb9.js";import"./Select-aecb2a80.esm-27c7288e.js";import"./sweetalert2.all-da6653af.js";const G=()=>{var n,o,s,p,m,x,C,w,E,S,V,F,k;const i=_(),a=v(t=>t.excessForm),l=(t,d)=>{i(u({[t]:d}))},r=[{value:"none",label:"-None-"},{value:"email",label:"Email"},{value:"portal",label:"Portal"}],f={Header:{"Excess Image":c("div",{className:"",children:[c("div",{className:"flex",children:[e("input",{id:"excess_image",type:"file",className:"form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1",accept:"image/*",onChange:t=>j(t,d=>{i(u({excess_image:`${d==null?void 0:d.data.data.file_url}`}))}),name:"excess_image"},"excess_image"),e(Q,{callBack:()=>{const t=document.getElementById("excess_image");t&&(t.value="",t.dispatchEvent(new Event("change",{bubbles:!0}))),i(u({excess_image:null}))}})]}),e("img",{id:"excess_image_preview",src:M(a.excess_image||a.oldImage),alt:"img",className:"mt-4 w-20 h-20 rounded"})]}),"Account Name":e(h,{isMulti:!1,id:"account_id",name:"account_id",required:!0,placeholder:"Type at least 2 characters to search...",loadOptions:$,onChange:({value:t})=>{l("account_id",t)},defaultValue:{value:(n=a.account)==null?void 0:n.id,label:c("div",{className:"flex items-center",children:[a.account?e("img",{src:a.account.image??"/assets/images/user-profile.jpeg",alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,c("div",{children:[e("div",{className:"text-sm font-bold",children:(o=a.account)==null?void 0:o.account_name}),e("div",{className:"text-xs text-gray-500",children:(s=a.account)==null?void 0:s.email})]})]},(p=a.account)==null?void 0:p.id)},className:"flex-1"}),Contact:e(h,{isMulti:!1,id:"contact_id",name:"contact_id",placeholder:"Type at least 2 characters to search...",loadOptions:L,onChange:({value:t})=>{l("contact_id",t)},defaultValue:{value:(m=a.contact)==null?void 0:m.id,label:c("div",{className:"flex items-center",children:[a.contact?e("img",{src:a.contact.image??"/assets/images/user-profile.jpeg",alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,c("div",{children:[e("div",{className:"text-sm font-bold",children:(x=a.contact)==null?void 0:x.name}),e("div",{className:"text-xs text-gray-500",children:(C=a.contact)==null?void 0:C.email})]})]},(w=a.contact)==null?void 0:w.id)},className:"flex-1"}),Email:e("input",{id:"email",type:"text",name:"email",className:"form-input flex-1 ",defaultValue:a.email,onChange:t=>l(t.target.name,t.target.value)}),Currency:e(y,{options:I,onChange:({value:t})=>{l("currency",t)},defaultValue:I.find(t=>t.value==a.currency),className:"flex-1"}),"Portal Excess Id":e("input",{id:"portal_excess_id",type:"text",name:"portal_excess_id",className:"form-input flex-1 ",defaultValue:a.portal_excess_id,onChange:t=>l(t.target.name,t.target.value)})},"":{"Excess Owner":e(h,{isMulti:!1,id:"owner_id",name:"owner_id",placeholder:"Type at least 2 characters to search...",loadOptions:R,onChange:({value:t})=>{l("owner_id",t)},defaultValue:{value:(E=a.owner)==null?void 0:E.id,label:c("div",{className:"flex items-center",children:[a.owner?e("img",{src:a.owner.image??"/assets/images/user-profile.jpeg",alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,c("div",{children:[e("div",{className:"text-sm font-bold",children:((S=a.owner)==null?void 0:S.first_name)+" "+((V=a.owner)==null?void 0:V.last_name)}),e("div",{className:"text-xs text-gray-500",children:(F=a.owner)==null?void 0:F.email})]})]},(k=a.owner)==null?void 0:k.id)},className:"flex-1"}),"Excess File":c("div",{className:"flex",children:[e("input",{id:"excess_file",type:"file",className:"form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1",onChange:t=>j(t,d=>{i(u({excess_file:`${d==null?void 0:d.data.data.file_url}`}))}),name:"excess_file"},"excess_file"),e("a",{className:"ml-1 btn btn-outline-primary cursor-pointer",href:a.excess_file,target:"_blank",children:"Download"})]}),"Excess Source":e(y,{name:"excess_source",id:"excess_source",options:r,onChange:({value:t})=>{l("excess_source",t)},defaultValue:r.find(t=>t.value==a.excess_source),className:"flex-1"}),"Secondary Email":e("input",{id:"secondary_email",type:"text",name:"secondary_email",defaultValue:a.secondary_email,className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value)}),"Email Opt Out":e("input",{id:"email_opt_out",type:"checkbox",name:"email_opt_out",className:"form-checkbox",checked:a.email_opt_out,onChange:t=>l(t.target.name,t.target.checked)}),"Exchange Rate":e("input",{id:"exchangeRate",type:"text",value:"1",placeholder:"Readonly input here…",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0})}};return e(b,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(N,{fields:f})})})},H=()=>{const i=_(),a=v(n=>n.excessForm),l=(n,o)=>{i(u({[n]:o}))},r=[{value:"none",label:"-None-"},{value:"line_bid",label:"Line Bid"},{value:"package_bid",label:"Package Bid"},{value:"consignment",label:"Consignment"},{value:"closed",label:"Closed"}],f={Status:{"Excess Type":e(y,{options:r,name:"excess_type",id:"excess_type",onChange:({value:n})=>{l("excess_type",n)},defaultValue:r.find(n=>n.value==a.excess_type),className:"flex-1"})},"":{"Excess Name":e("input",{id:"excess_name",type:"text",name:"excess_name",className:"form-input flex-1 ",defaultValue:a.excess_name,onChange:n=>l(n.target.name,n.target.value)})}};return e(b,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(N,{fields:f})})})},z=()=>{var f,n,o;const i=_(),a=v(s=>s.excessForm),l=(s,p)=>{i(u({[s]:p}))},r={"Excess Line":{"Product name":e(h,{isMulti:!1,id:"product_name",name:"product_name",required:!0,placeholder:"Type at least 2 characters to search...",loadOptions:U,onChange:({value:s})=>{l("product_id",s)},defaultValue:{value:(f=a.product)==null?void 0:f.id,label:e("div",{className:"flex items-center",children:e("div",{className:"text-sm font-bold",children:(n=a.product)==null?void 0:n.product_name})},(o=a.product)==null?void 0:o.id)},className:"flex-1"}),"Customer Internal No.":e("input",{id:"customer_internal_no",type:"text",name:"customer_internal_no",className:"form-input flex-1 ",defaultValue:a.customer_internal_no,onChange:s=>l(s.target.name,s.target.value)}),Quantity:e("input",{id:"quantity",type:"text",name:"quantity",className:"form-input flex-1 ",defaultValue:a.quantity,onChange:s=>l(s.target.name,s.target.value)}),Cost:e("input",{id:"cost",type:"text",name:"cost",className:"form-input flex-1 ",defaultValue:a.cost,onChange:s=>l(s.target.name,s.target.value)})},"":{"Date Code":e("input",{id:"date_code",type:"text",name:"date_code",className:"form-input flex-1 ",defaultValue:a.date_code,onChange:s=>l(s.target.name,s.target.value)}),SPQ:e("input",{id:"spq",type:"text",name:"spq",className:"form-input flex-1 ",defaultValue:a.spq,onChange:s=>l(s.target.name,s.target.value)}),MOQ:e("input",{id:"moq",type:"text",name:"moq",defaultValue:a.moq,className:"form-input flex-1 ",onChange:s=>l(s.target.name,s.target.value)}),Comment:e("input",{id:"comment",type:"text",name:"comment",defaultValue:a.comment,className:"form-input flex-1 ",onChange:s=>l(s.target.name,s.target.value)})}};return e(b,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(N,{fields:r})})})},J=()=>c("div",{className:"mt-8 px-4",children:[e(G,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(H,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(z,{})]}),se=()=>{const{hasPermission:i}=O(),a=v(m=>m.excessForm),[l,r]=g.useState(!0),n=P().id,o=new A,s=_();g.useEffect(()=>{s(T("Excess Edit"))});const p=async()=>{const m=await o.fetchSingleExcess(n);if(m.status!=200)return;const x=m.data.data.excess;x.oldImage=x.excess_image,s(u(x))};return g.useEffect(()=>{p().then(()=>{r(!1)})},[n]),g.useEffect(()=>{s(u({api:"updateSingleExcess",redirectTo:"/excess/edit/:id",action:"edit"}))},[]),l?e(q,{}):!i("update-excess")||l?e(q,{}):c("div",{className:"px-4",children:[e(B,{formState:a,resetForm:D}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(J,{})})})]})};export{se as default};
