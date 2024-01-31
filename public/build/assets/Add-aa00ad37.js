import{d as f,u as r,j as a,F as c,y as l,b as u,z as x,A as d,v as b,n as h,c as C,r as p,s as N,B as g,e as v}from"./main-df5dc7ed.js";import{A as y}from"./ActionButtonsComponent-1d92025d.js";/* empty css                  */import{G as m}from"./GenerateFields-3c7eab22.js";import{S as s}from"./react-select.esm-9f2a3f32.js";import{I as k}from"./ImageUploadComponent-ec80a1bf.js";import{C as w,c as S,d as F,e as A,f as D,g as O}from"./SelectOptions-b97727f8.js";import"./index-e120b408.js";import"./ClearButtonComponent-638f0936.js";const P=()=>{const i=f(n=>n.contactForm),t=r(),o=(n,_)=>{t(l({[n]:_}))};return a(c,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(m,{fields:{"Contact Details":{"Contact Image":a(k,{formState:i,modelName:"contact",id:"image",formAttribute:"image",updateFormData:l}),"First Name":u("div",{className:"flex",children:[a(s,{id:"prefix_first_name",name:"prefix_first_name",onChange:({value:n})=>{o("prefix_first_name",n)},className:"flex-none w-32 mr-2",options:x}),a("input",{id:"first_name",required:!0,name:"first_name",className:"form-input flex-1 ",onChange:n=>o(n.target.name,n.target.value)})]}),"Last Name":a("input",{id:"last_name",required:!0,name:"last_name",className:"form-input flex-1 ",onChange:n=>o(n.target.name,n.target.value)}),"Job Description":a(s,{id:"job_description",name:"job_description",onChange:({value:n})=>{o("job_description",n)},className:"flex-1",options:w}),"Contact Type":a(s,{id:"contact_type",name:"contact_type",onChange:({value:n})=>{o("double_check_status",n)},className:"flex-1 disabled",isDisabled:!0,defaultValue:{value:"none",label:"-None-"}})},"":{"Account Name":a(d,{defaultOptions:!0,isMulti:!1,required:!0,id:"account_id",placeholder:"Type at least 2 characters to search...",name:"account_id",loadOptions:b,onChange:({value:n})=>{o("account_id",n)},className:"flex-1"}),"Contact Source":a(s,{id:"contact_source",name:"cocontact_source",onChange:({value:n})=>{o("contact_source",n)},className:"flex-1 ",options:S,defaultValue:{value:"none",label:"-None-"}}),"Contact Owner":a(d,{defaultOptions:!0,isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:h,onChange:({value:n})=>{o("owner_id",n)},className:"flex-1"}),"Contact Status":a(s,{id:"contact_status",name:"contact_status",onChange:({value:n})=>{o("contact_status",n)},className:"flex-1 ",options:F,defaultValue:{value:"none",label:"-None-"}})}}})})})},j=()=>{const i=r(),t=(e,n)=>{i(l({[e]:n}))};return a(c,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(m,{fields:{"Contact Information":{Email:a("input",{id:"email",name:"email",className:"form-input flex-1",onChange:e=>t(e.target.name,e.target.value)}),Mobile:a("input",{id:"mobile",name:"mobile",className:"form-input flex-1",onChange:e=>t(e.target.name,e.target.value)}),Phone:a("input",{id:"phone",name:"phone",className:"form-input flex-1",onChange:e=>t(e.target.name,e.target.value)}),Department:a("input",{id:"department",name:"department",className:"form-input flex-1",onChange:e=>t(e.target.name,e.target.value)}),"Asst Phone":a("input",{id:"asst_phone",name:"asst_phone",className:"form-input flex-1 disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0,onChange:e=>t(e.target.name,e.target.value)}),"Home Phone":a("input",{id:"home_phone",name:"home_phone",className:"form-input flex-1 disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0,onChange:e=>t(e.target.name,e.target.value)}),"Other Phone":a("input",{id:"other_phone",name:"other_phone",className:"form-input flex-1",onChange:e=>t(e.target.name,e.target.value)}),Fax:a("input",{id:"fax",name:"fax",className:"form-input flex-1",onChange:e=>t(e.target.name,e.target.value)})},"":{"Reporting To":a("input",{id:"reporting_to",name:"reporting_to",className:"form-input flex-1 disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0,onChange:e=>t(e.target.name,e.target.value)}),"LinkedIn Contact":a("input",{id:"linkedin",name:"linkedin",className:"form-input flex-1",onChange:e=>t(e.target.name,e.target.value)}),"Portal Access":a(s,{id:"portal_access",name:"portal_access",onChange:({value:e})=>{t("portal_access",e)},className:"flex-1 ",options:A,defaultValue:{value:"none",label:"-None-"}})}}})})})},I=()=>{const i=r(),t=(e,n)=>{i(l({[e]:n}))};return a(c,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(m,{fields:{"Address Information":{"Mailing Country":a("input",{id:"mailing_country",name:"mailing_country",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)}),"Mailing City":a("input",{id:"mailing_city",name:"mailing_city",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)}),"Mailing Zip":a("input",{id:"mailing_code",name:"mailing_code",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)})},"":{"Mailing State":a("input",{id:"mailing_state",name:"mailing_state",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)}),"Mailing Street":a("input",{id:"mailing_street",name:"mailing_street",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)})}}})})})},M=()=>{const i=r(),t=(e,n)=>{i(l({[e]:n}))};return a(c,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(m,{fields:{"Communication Details / History":{Description:a("textarea",{id:"description",rows:3,name:"description",className:"form-textarea flex-1",placeholder:"",onChange:e=>t(e.target.name,e.target.value)}),"LinkedIn Communication":a("textarea",{id:"linkedin_communication",rows:3,name:"linkedin_communication",className:"form-textarea flex-1",placeholder:"",onChange:e=>t(e.target.name,e.target.value)})}}})})})},T=()=>{const i=r(),t=(e,n)=>{i(l({[e]:n}))};return a(c,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(m,{fields:{"Fields with Secondary Priority":{"Approved By":a(d,{defaultOptions:!0,isMulti:!1,id:"approved_by",placeholder:"Type at least 2 characters to search...",name:"approved_by_id",loadOptions:h,onChange:({value:e})=>{t("approved_by_id",e)},className:"flex-1"}),"Books Contact":a("input",{id:"book_contact",type:"checkbox",name:"book_contact",className:"form-checkbox",onChange:e=>t(e.target.name,e.target.checked)}),"Contact Activity":a(s,{id:"contact_activity",name:"contact_activity",onChange:({value:e})=>{t("contact_activity",e)},className:"flex-1",options:D}),Title:a("input",{id:"title",name:"title",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)}),"Private Email":a("input",{id:"private_email",name:"private_email",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)}),"Secondary Email":a("input",{id:"secondary_email",name:"secondary_email",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)}),"Portal Operation Tag":a("input",{id:"portal_operation_tag",name:"portal_operation_tag",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)})},"":{"Email Opt Out":a("input",{id:"email_opt_out",type:"checkbox",name:"email_opt_out",className:"form-checkbox",onChange:e=>t(e.target.name,e.target.checked)}),"Lead Reference":a("input",{id:"lead_reference",name:"lead_reference",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)}),"Double Check Status":a(s,{id:"double_check_status",name:"double_check_status",onChange:({value:e})=>{t("double_check_status",e)},className:"flex-1",options:O}),DCheck:a("input",{id:"d_check",type:"checkbox",name:"d_check",className:"form-checkbox",onChange:e=>t(e.target.name,e.target.checked)})}}})})})},E=()=>u("div",{className:"mt-8 px-4",children:[a(P,{},"ContactDetailsSection"),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(j,{}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(I,{}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(M,{}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(T,{})]}),U=()=>{const{hasPermission:i}=C(),t=f(e=>e.contactForm),o=r();return p.useEffect(()=>{o(N("Contact Add"))}),p.useEffect(()=>{o(g())},[]),i("create-contact")?u("div",{className:"px-4",children:[a(y,{formState:t,resetForm:g}),a("div",{className:"flex xl:flex-row flex-col gap-2.5",children:a("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:a(E,{})})})]}):a(v,{})};export{U as default};