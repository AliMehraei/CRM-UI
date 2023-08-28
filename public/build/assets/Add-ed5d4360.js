import{a as d,u as m,b as e,F as c,g as s,j as b,r as x,s as v}from"./main-7587a7bd.js";import{a as u,A as _}from"./react-select-async.esm-4f8c9a58.js";import{G as p,h as y,s as C,a as N}from"./CommonFunctions-21e80599.js";import{S as r}from"./react-select.esm-d562fb5f.js";import{F as g}from"./index-59d3072a.js";import{A as w}from"./ActionButtonsComponent-f183376c.js";/* empty css                  */import"./Select-aecb2a80.esm-0cf48af5.js";import"./sweetalert2.all-85428551.js";const F=()=>{d(t=>t.leadForm);const o=m();new u;const n=(t,h)=>{o(s({[t]:h}))};return e(c,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(p,{fields:{"Contact Information":{"First Name":e("input",{id:"first_name",name:"first_name",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value)}),"Job Description":e(r,{options:[{value:"none",label:"-None-"},{value:"buyer",label:"Buyer"},{value:"operative_buyer",label:"Operative Buyer"},{value:"chat",label:"Chat"},{value:"messe",label:"Messe"},{value:"not_yet_clear",label:"Not Yet Clear"}],name:"job_description",id:"job_description",onChange:({value:t})=>{n("job_description",t)},className:"flex-1"}),Phone:e("input",{id:"phone",name:"phone",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value)}),Mobile:e("input",{id:"mobile",name:"mobile",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value)}),fax:e("input",{id:"fax",name:"fax",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value)})},"":{"Last Name":e("input",{id:"last_name",required:!0,name:"last_name",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value)}),Email:e("input",{id:"email",name:"email",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value)}),"Contact LinkedIn":e("input",{id:"linkedin_contact",name:"linkedin_contact",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value)}),"Company LinkedIn":e("input",{id:"linkedin_contact",name:"linkedin_company",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value)})}}})})})},L=()=>{const o=m();new u,d(l=>l.leadForm);const n=(l,f)=>{o(s({[l]:f}))};return e(c,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(p,{fields:{"Lead Information":{"Lead Image":e("input",{id:"lead_image",type:"file",className:"form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1",accept:"image/*",onChange:l=>y(l,f=>{o(s({field:"image",value:`${f==null?void 0:f.data.data.file_url}`}))}),name:"leadImage"},"lead_image"),Status:e(r,{options:[{value:"none",label:"-None-"},{value:"0_cold_lead",label:"0.0 Cold lead / unqualified (CLU)"},{value:"1_cold_lead",label:"1.0 Cold lead qualified (CLQ)"},{value:"2_first_contract",label:"2.0 First contact made (FCM)"},{value:"3_warm_lead",label:"3.0 warm lead qualified (WLQ)"},{value:"4_hot_lead",label:"4.0 Hot lead (HLQ)"},{value:"close_lead",label:"Close Lead / Lost Lead"}],name:"status",id:"status",onChange:({value:l})=>{n("status",l)},className:"flex-1"}),"Lost Reason":e(r,{options:[{value:"none",label:"-None-"},{value:"account_contact",label:"Account or Contact exist already"},{value:"wrong_branch",label:"Wrong Branch"},{value:"wrong_department",label:"Wrong Department"},{value:"does_not_exist",label:"Does Not Exist Anymore"},{value:"bankruptcy",label:"Bankruptcy"},{value:"other",label:"Other"}],name:"lost_reason",id:"lost_reason",onChange:({value:l})=>{n("lost_reason",l)},className:"flex-1"}),"Lost Reason Comment":e("input",{id:"lost_reason_comment",name:"lost_reason_comment",className:"form-input flex-1 ",onChange:l=>n(l.target.name,l.target.value)}),"Lead Owner":e(_,{isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:C,onChange:({value:l})=>{n("owner_id",l)},className:"flex-1"})},"":{Company:e("input",{id:"company",required:!0,name:"company",className:"form-input flex-1 ",onChange:l=>n(l.target.name,l.target.value)}),"Company Type":e(r,{options:[{value:"none",label:"-None-"},{value:"oem",label:"OEM"},{value:"ems",label:"EMS"},{value:"odm",label:"ODM (Development)"},{value:"reseller",label:"Reseller"},{value:"other",label:"Other"}],name:"company_type",id:"company_type",onChange:({value:l})=>{n("company_type",l)},className:"flex-1"}),Industry:e(r,{options:[{value:"none",label:"-None-"},{value:"industrial",label:"Industrial"},{value:"automotive",label:"Automotive"},{value:"consumer",label:"Consumer"},{value:"it",label:"IT"},{value:"defence",label:"Defence"},{value:"transportation",label:"Transportation"}],name:"industry",id:"industry",onChange:({value:l})=>{n("industry",l)},className:"flex-1"}),Website:e("input",{id:"website",name:"website",className:"form-input flex-1 ",onChange:l=>n(l.target.name,l.target.value)}),"Lead Source":e(r,{options:[{value:"none",label:"-None-"},{value:"exhibitor_list",label:"Exhibitor List"},{value:"linkedin",label:"Linkedin"},{value:"chat",label:"Chat"},{value:"messe",label:"Messe"}],name:"lead_source",id:"lead_source",onChange:({value:l})=>{n("lead_source",l)},className:"flex-1"}),"Zusätzlicher Ansprechpartner":e("input",{id:"Ansprechpartner",name:"Ansprechpartner",disabled:!0,className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed"}),"Email Opt Out":e("input",{id:"email_opt_out",type:"checkbox",name:"email_opt_out",className:"form-checkbox",onChange:l=>n(l.target.name,l.target.checked)})}}})})})},k=()=>{d(a=>a.leadForm);const o=m();new u;const n=(a,t)=>{o(s({[a]:t}))};return e(c,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(p,{fields:{Development:{"Imported Qualification Status":e("input",{id:"imported_qualification_status",name:"imported_qualification_status",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"Last Modified":e(g,{options:{dateFormat:"Y-m-d ",position:"auto left"},name:"last_modified",value:"",className:"form-input flex-1"}),"Created Date":e(g,{options:{dateFormat:"Y-m-d ",position:"auto left"},name:"created_date",value:"",className:"form-input flex-1"})},"":{"From Panel Side":e("input",{id:"from_panel_site",type:"checkbox",name:"from_panel_site",className:"form-checkbox",onChange:a=>n(a.target.name,a.target.checked)})}}})})})},S=()=>{d(a=>a.leadForm);const o=m();new u;const n=(a,t)=>{o(s({[a]:t}))};return e(c,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(p,{fields:{"Address Information":{"Zip Code":e("input",{id:"zip_code",name:"zip_code",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),City:e("input",{id:"city",name:"city",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)})},"":{State:e("input",{id:"state",name:"state",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),Country:e("input",{id:"country",name:"country",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)})}}})})})},D=()=>{d(a=>a.leadForm);const o=m();new u;const n=(a,t)=>{o(s({[a]:t}))};return e(c,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(p,{fields:{"Communication Details / History":{"Details and notes":e("input",{id:"detail_note",name:"detail_note",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"LinkedIn Communication":e("textarea",{id:"linkedin_communication",rows:3,name:"delinkedin_communicationscription",className:"form-textarea flex-1",placeholder:"",onChange:a=>n(a.target.name,a.target.value)})},"":{}}})})})},I=()=>{d(a=>a.leadForm);const o=m();new u;const n=(a,t)=>{o(s({[a]:t}))};return e(c,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(p,{fields:{"Fields with Secondary Priority":{"No. of Employees":e("input",{id:"no_of_employees",name:"no_of_employees",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"Lead Reference":e("input",{id:"lead_reference",name:"lead_reference",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)})},"":{Currency:e(r,{options:N,name:"currency",id:"currency",onChange:({value:a})=>{n("currency",a)},className:"flex-1"}),"Exchange Rate":e("input",{id:"exchange_rate",name:"exchange_rate",type:"text",value:"1",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0})}}})})})},A=()=>b("div",{className:"mt-8 px-4",children:[e(L,{},"leadInfo"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(F,{},"contact"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(S,{},"Address"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(D,{},"Description"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(I,{},"FieldsScondaryPriority"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(k,{},"Development")]}),z=()=>{const o=d(i=>i.leadForm),n=m();return x.useEffect(()=>{n(v("Lead Add"))}),b("div",{className:"px-4",children:[e(w,{formState:o}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(A,{})})})]})};export{z as default};
