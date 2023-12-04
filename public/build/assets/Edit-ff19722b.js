import{u as _,d as x,j as e,q as f,b as d,t as S,l as N,n as T,f as V,p as y,m as E,F as g,c as $,r as b,h as L,s as q,v as F,e as D,a as U}from"./main-cf3c5856.js";import{A as B}from"./ActionButtonsComponent-f33a2eb9.js";/* empty css                  */import{G as v}from"./GenerateFields-c0baefe4.js";import{S as u}from"./react-select.esm-37c19862.js";import{I as G}from"./ImageUploadComponent-9382e191.js";import{C as A,c as j,d as I,e as O,f as P,g as M}from"./SelectOptions-522b4ff8.js";import{F as H}from"./index-0e3f8098.js";import"./index-37c8eb8b.js";import"./ClearButtonComponent-543bde52.js";const J=()=>{var a,i,m,p,h,n,r,k,w;const c=_(),t=x(o=>o.contactForm),l=(o,C)=>{c(f({[o]:C}))},s={"Contact Details":{"Contact Image":e(G,{formState:t,modelName:"contact",id:"image",formAttribute:"image",updateFormData:f}),"First Name":d("div",{className:"flex",children:[e(u,{id:"prefix_first_name",name:"prefix_first_name",onChange:({value:o})=>{l("prefix_first_name",o)},className:"flex-none w-32 mr-2",options:S,defaultValue:S.find(o=>o.value==t.prefix_first_name)}),e("input",{id:"first_name",required:!0,name:"first_name",className:"form-input flex-1 ",onChange:o=>l(o.target.name,o.target.value),defaultValue:t.first_name})]}),"Last Name":e("input",{id:"last_name",required:!0,name:"last_name",className:"form-input flex-1 ",onChange:o=>l(o.target.name,o.target.value),defaultValue:t.last_name}),"Job Description":e(u,{id:"job_description",name:"job_description",onChange:({value:o})=>{l("job_description",o)},className:"flex-1",options:A,defaultValue:A.find(o=>o.value==t.job_description)}),"Contact Type":e(u,{id:"contact_type",name:"contact_type",onChange:({value:o})=>{l("contact_type",o)},className:"flex-1 disabled",isDisabled:!0,defaultValue:{value:"none",label:"-None-"}})},"":{"Account Name":e(N,{defaultOptions:!0,isMulti:!1,id:"account_id",required:!0,placeholder:"Type at least 2 characters to search...",name:"account_id",loadOptions:T,onChange:({value:o})=>{l("account_id",o)},className:"flex-1",defaultValue:{value:(a=t.account)==null?void 0:a.id,label:d("div",{className:"flex items-center",children:[t.account?e("img",{src:V(t.account.image),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,d("div",{children:[e("div",{className:"text-sm font-bold",children:(i=t.account)==null?void 0:i.account_name}),e("div",{className:"text-xs text-gray-500",children:(m=t.account)==null?void 0:m.email})]}),e("button",{className:"btn text-xs btn-sm ml-auto",onClick:()=>{var o;return y(`${(o=t.account)==null?void 0:o.account_name}`)},children:"Copy & Select"})]},(p=t.account)==null?void 0:p.id)}}),"Contact Source":e(u,{id:"contact_source",name:"contact_source",onChange:({value:o})=>{l("contact_source",o)},className:"flex-1 ",options:j,defaultValue:j.find(o=>o.value==t.contact_source)}),"Contact Owner":e(N,{defaultOptions:!0,isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:E,onChange:({value:o})=>{l("owner_id",o)},className:"",defaultValue:{value:(h=t.owner)==null?void 0:h.id,label:e("div",{className:"flex items-center",children:t.owner?d(g,{children:[e("img",{src:V(t.owner.avatar_data),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),d("div",{children:[e("div",{className:"text-sm font-bold",children:((n=t.owner)==null?void 0:n.first_name)+" "+((r=t.owner)==null?void 0:r.last_name)}),e("div",{className:"text-xs text-gray-500",children:(k=t.owner)==null?void 0:k.email})]}),e("button",{className:"btn text-xs btn-sm ml-auto",onClick:()=>{var o,C;return y(`${((o=t.owner)==null?void 0:o.first_name)+" "+((C=t.owner)==null?void 0:C.last_name)}`)},children:"Copy & Select"})]}):null},(w=t.owner)==null?void 0:w.id)}}),"Contact Status":e(u,{id:"contact_status",name:"contact_status",onChange:({value:o})=>{l("contact_status",o)},className:"flex-1 ",options:I,defaultValue:I.find(o=>o.value==t.contact_status)})}};return e(g,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(v,{fields:s})})})},R=()=>{const c=_(),t=x(a=>a.contactForm),l=(a,i)=>{c(f({[a]:i}))},s={"Contact Information":{Email:e("input",{id:"email",name:"email",className:"form-input flex-1",onChange:a=>l(a.target.name,a.target.value),defaultValue:t.email}),Mobile:e("input",{id:"mobile",name:"mobile",className:"form-input flex-1",onChange:a=>l(a.target.name,a.target.value),defaultValue:t.mobile}),Phone:e("input",{id:"phone",name:"phone",className:"form-input flex-1",onChange:a=>l(a.target.name,a.target.value),defaultValue:t.phone}),Department:e("input",{id:"department",name:"department",className:"form-input flex-1",onChange:a=>l(a.target.name,a.target.value),defaultValue:t.department}),"Asst Phone":e("input",{id:"asst_phone",name:"asst_phone",className:"form-input flex-1 disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0,onChange:a=>l(a.target.name,a.target.value),defaultValue:t.asst_phone}),"Home Phone":e("input",{id:"home_phone",name:"home_phone",className:"form-input flex-1 disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0,onChange:a=>l(a.target.name,a.target.value),defaultValue:t.home_phone}),"Other Phone":e("input",{id:"other_phone",name:"other_phone",className:"form-input flex-1",onChange:a=>l(a.target.name,a.target.value),defaultValue:t.other_phone}),Fax:e("input",{id:"fax",name:"fax",className:"form-input flex-1",onChange:a=>l(a.target.name,a.target.value),defaultValue:t.fax})},"":{"Last Activity Date":e(H,{name:"last_activity_date",options:{dateFormat:"Y-m-d",position:"auto left",defaultDate:t.last_activity_date?new Date(t.last_activity_date):null},className:"form-input flex-1",value:t.last_activity_date?new Date(t.last_activity_date):"",onChange:(a,i)=>l("last_activity_date",i),defaultValue:t.last_activity_date}),"Reporting To":e("input",{id:"reporting_to",name:"reporting_to",className:"form-input flex-1 disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0,onChange:a=>l(a.target.name,a.target.value),defaultValue:t.reporting_to}),"LinkedIn Contact":e("input",{id:"linkedin",name:"linkedin",className:"form-input flex-1",onChange:a=>l(a.target.name,a.target.value),defaultValue:t.linkedin}),"Portal Access":e(u,{id:"portal_access",name:"portal_access",onChange:({value:a})=>{l("double_check_status",a)},className:"flex-1 ",options:O,defaultValue:O.find(a=>a.value==t.portal_access)})}};return e(g,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(v,{fields:s})})})},W=()=>{const c=_(),t=x(a=>a.contactForm),l=(a,i)=>{c(f({[a]:i}))},s={"Address Information":{"Mailing Country":e("input",{id:"mailing_country",name:"mailing_country",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value),defaultValue:t.mailing_country}),"Mailing City":e("input",{id:"mailing_city",name:"mailing_city",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value),defaultValue:t.mailing_city}),"Mailing Zip":e("input",{id:"mailing_code",name:"mailing_code",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value),defaultValue:t.mailing_code})},"":{"Mailing State":e("input",{id:"mailing_state",name:"mailing_state",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value),defaultValue:t.mailing_state}),"Mailing Street":e("input",{id:"mailing_street",name:"mailing_street",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value),defaultValue:t.mailing_street})}};return e(g,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(v,{fields:s})})})},Y=()=>{const c=_(),t=x(a=>a.contactForm),l=(a,i)=>{c(f({[a]:i}))},s={"Communication Details / History":{Description:e("textarea",{id:"description",rows:3,name:"description",className:"form-textarea flex-1",placeholder:"",defaultValue:t.description,onChange:a=>l(a.target.name,a.target.value)}),"LinkedIn Communication":e("textarea",{id:"linkedin_communication",rows:3,name:"linkedin_communication",className:"form-textarea flex-1",placeholder:"",defaultValue:t.linkedin_communication,onChange:a=>l(a.target.name,a.target.value)})}};return e(g,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(v,{fields:s})})})},Z=()=>{var a,i,m,p,h;const c=_(),t=x(n=>n.contactForm),l=(n,r)=>{c(f({[n]:r}))},s={"Fields with Secondary Priority":{"Approved By":e(N,{defaultOptions:!0,isMulti:!1,id:"approved_by",placeholder:"Type at least 2 characters to search...",name:"approved_by_id",loadOptions:E,onChange:({value:n})=>{l("approved_by_id",n)},className:"flex-1",defaultValue:{value:(a=t.approved_by)==null?void 0:a.id,label:e("div",{className:"flex items-center",children:t.approved_by?d(g,{children:[e("img",{src:t.approved_by.image??"/assets/images/user-profile.jpeg",alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),d("div",{children:[e("div",{className:"text-sm font-bold",children:((i=t.approved_by)==null?void 0:i.first_name)+" "+((m=t.approved_by)==null?void 0:m.last_name)}),e("div",{className:"text-xs text-gray-500",children:(p=t.approved_by)==null?void 0:p.email})]}),e("button",{className:"btn text-xs btn-sm ml-auto",onClick:()=>{var n,r;return y(`${((n=t.approved_by)==null?void 0:n.first_name)+" "+((r=t.approved_by)==null?void 0:r.last_name)}`)},children:"Copy & Select"})]}):null},(h=t.approved_by)==null?void 0:h.id)}}),"Books Contact":e("input",{id:"book_contact",type:"checkbox",name:"book_contact",className:"form-checkbox",onChange:n=>l(n.target.name,n.target.checked),checked:t.book_contact}),"Contact Activity":e(u,{id:"contact_activity",name:"contact_activity",onChange:({value:n})=>{l("contact_activity",n)},className:"flex-1",options:P,defaultValue:P.find(n=>n.value==t.contact_activity)}),Title:e("input",{id:"title",name:"title",className:"form-input flex-1 ",onChange:n=>l(n.target.name,n.target.value),defaultValue:t.title}),private_email:e("input",{id:"private_email",name:"private_email",className:"form-input flex-1 ",onChange:n=>l(n.target.name,n.target.value),defaultValue:t.private_email}),secondary_email:e("input",{id:"secondary_email",name:"secondary_email",className:"form-input flex-1 ",onChange:n=>l(n.target.name,n.target.value),defaultValue:t.secondary_email}),portal_operation_tag:e("input",{id:"portal_operation_tag",name:"portal_operation_tag",className:"form-input flex-1 ",onChange:n=>l(n.target.name,n.target.value),defaultValue:t.portal_operation_tag})},"":{"Email Opt Out":e("input",{id:"email_opt_out",type:"checkbox",name:"email_opt_out",className:"form-checkbox",onChange:n=>l(n.target.name,n.target.checked),checked:t.email_opt_out}),lead_reference:e("input",{id:"lead_reference",name:"lead_reference",className:"form-input flex-1 ",onChange:n=>l(n.target.name,n.target.value),defaultValue:t.lead_reference}),"Double Check Status":e(u,{id:"double_check_status",name:"double_check_status",onChange:({value:n})=>{l("double_check_status",n)},className:"flex-1",options:M,defaultValue:M.find(n=>n.value==t.double_check_status)}),DCheck:e("input",{id:"d_check",type:"checkbox",name:"d_check",className:"form-checkbox",onChange:n=>l(n.target.name,n.target.checked),checked:t.d_check})}};return e(g,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(v,{fields:s})})})},z=()=>d("div",{className:"mt-8 px-4",children:[e(J,{},"ContactDetailsSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(R,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(W,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Y,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Z,{})]}),se=()=>{const{hasPermission:c}=$(),t=x(n=>n.contactForm),l=_(),[s,a]=b.useState(!0),m=L().id,p=new U,h=async()=>{const n=await p.fetchSingleContact(m);if(n.status!=200)return;const r=n.data.data.contact;l(f(r))};return b.useEffect(()=>{l(q("Contact Edit"))}),b.useEffect(()=>{l(F())},[]),b.useEffect(()=>{h().then(()=>{a(!1)})},[m]),b.useEffect(()=>{l(f({api:"updateSingleContact",redirectTo:"/contact/edit/:id",action:"edit"}))},[]),s?e(D,{}):!c("update-contact")||s?e(D,{}):d("div",{className:"px-4",children:[e(B,{formState:t,resetForm:F}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(z,{})})})]})};export{se as default};
