import{a as m,u as d,c,b as e,F as u,j as h,m as s,r as y,s as C,n as N}from"./main-35460055.js";import{G as f,F as w,h as F,g as k,s as L,a as S,c as I}from"./CommonFunctions-8d68cb35.js";import{S as r}from"./react-select.esm-0f23c0c6.js";import{A as D}from"./react-select-async.esm-fd963321.js";import{C as A}from"./ClearButtonComponent-dbb5eebf.js";import{F as b}from"./index-4ec3b352.js";/* empty css                  */import"./sweetalert2.all-0e486584.js";import"./Select-aecb2a80.esm-98e07ddb.js";const E=()=>{m(t=>t.leadForm);const i=d();new c;const l=(t,g)=>{i(s({[t]:g}))};return e(u,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(f,{fields:{"Contact Information":{"First Name":h("div",{className:"flex",children:[e(r,{id:"prefix_first_name",name:"prefix_first_name",onChange:({value:t})=>{l("prefix_first_name",t)},className:"flex-none w-32 mr-2",options:w}),e("input",{id:"first_name",required:!0,name:"first_name",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value)})]}),"Job Description":e(r,{options:[{value:"none",label:"-None-"},{value:"buyer",label:"Buyer"},{value:"operative_buyer",label:"Operative Buyer"},{value:"chat",label:"Chat"},{value:"messe",label:"Messe"},{value:"not_yet_clear",label:"Not Yet Clear"}],name:"job_description",id:"job_description",onChange:({value:t})=>{l("job_description",t)},className:"flex-1"}),Phone:e("input",{id:"phone",name:"phone",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value)}),Mobile:e("input",{id:"mobile",name:"mobile",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value)}),fax:e("input",{id:"fax",name:"fax",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value)})},"":{"Last Name":e("input",{id:"last_name",required:!0,name:"last_name",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value)}),Email:e("input",{id:"email",name:"email",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value)}),"Contact LinkedIn":e("input",{id:"linkedin_contact",name:"linkedin_contact",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value)}),"Company LinkedIn":e("input",{id:"linkedin_contact",name:"linkedin_company",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value)})}}})})})},j=()=>{const i=d();new c;const l=m(n=>n.leadForm),o=(n,p)=>{i(s({[n]:p}))},a=[{value:"none",label:"-None-"},{value:"account_contact",label:"Account or Contact exist already"},{value:"wrong_branch",label:"Wrong Branch"},{value:"wrong_department",label:"Wrong Department"},{value:"does_not_exist",label:"Does Not Exist Anymore"},{value:"bankruptcy",label:"Bankruptcy"},{value:"other",label:"Other"}],t=[{value:"none",label:"-None-"},{value:"0_cold_lead",label:"0.0 Cold lead / unqualified (CLU)"},{value:"1_cold_lead",label:"1.0 Cold lead qualified (CLQ)"},{value:"2_first_contract",label:"2.0 First contact made (FCM)"},{value:"3_warm_lead",label:"3.0 warm lead qualified (WLQ)"},{value:"4_hot_lead",label:"4.0 Hot lead (HLQ)"},{value:"close_lead",label:"Close Lead / Lost Lead"}],g=[{value:"none",label:"-None-"},{value:"oem",label:"OEM"},{value:"ems",label:"EMS"},{value:"odm",label:"ODM (Development)"},{value:"reseller",label:"Reseller"},{value:"other",label:"Other"}],x=[{value:"none",label:"-None-"},{value:"industrial",label:"Industrial"},{value:"automotive",label:"Automotive"},{value:"consumer",label:"Consumer"},{value:"it",label:"IT"},{value:"defence",label:"Defence"},{value:"transportation",label:"Transportation"}],v=[{value:"none",label:"-None-"},{value:"exhibitor_list",label:"Exhibitor List"},{value:"linkedin",label:"Linkedin"},{value:"chat",label:"Chat"},{value:"messe",label:"Messe"}],_={"Lead Information":{"Lead Image":h("div",{className:"",children:[h("div",{className:"flex",children:[e("input",{id:"image",type:"file",className:"form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1",accept:"image/*",onChange:n=>F(n,p=>{i(s({image:`${p==null?void 0:p.data.data.file_url}`}))}),name:"leadImage"},"image"),e(A,{callBack:()=>{const n=document.getElementById("image");n&&(n.value="",n.dispatchEvent(new Event("change",{bubbles:!0}))),i(s({image:null}))}})]}),e("img",{id:"image_preview",src:k(l.image||l.oldImage),alt:"img",className:"mt-4 w-20 h-20 rounded"})]}),Status:e(r,{options:t,name:"status",id:"status",onChange:({value:n})=>{o("status",n)},className:"flex-1"}),"Lost Reason":e(r,{options:a,name:"lost_reason",id:"lost_reason",onChange:({value:n})=>{o("lost_reason",n)},className:"flex-1"}),"Lost Reason Comment":e("input",{id:"lost_reason_comment",name:"lost_reason_comment",className:"form-input flex-1 ",onChange:n=>o(n.target.name,n.target.value)}),"Lead Owner":e(D,{isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:L,onChange:({value:n})=>{o("owner_id",n)},className:"flex-1"})},"":{Company:e("input",{id:"company",required:!0,name:"company",className:"form-input flex-1 ",onChange:n=>o(n.target.name,n.target.value)}),"Company Type":e(r,{options:g,name:"company_type",id:"company_type",onChange:({value:n})=>{o("company_type",n)},className:"flex-1"}),Industry:e(r,{options:x,name:"industry",id:"industry",onChange:({value:n})=>{o("industry",n)},className:"flex-1"}),Website:e("input",{id:"website",name:"website",className:"form-input flex-1 ",onChange:n=>o(n.target.name,n.target.value)}),"Lead Source":e(r,{options:v,name:"lead_source",id:"lead_source",onChange:({value:n})=>{o("lead_source",n)},className:"flex-1"}),"Zusätzlicher Ansprechpartner":e("input",{id:"Ansprechpartner",name:"Ansprechpartner",disabled:!0,className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed"}),"Email Opt Out":e("input",{id:"email_opt_out",type:"checkbox",name:"email_opt_out",className:"form-checkbox",onChange:n=>o(n.target.name,n.target.checked)})}};return e(u,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(f,{fields:_})})})},M=()=>{m(a=>a.leadForm);const i=d();new c;const l=(a,t)=>{i(s({[a]:t}))};return e(u,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(f,{fields:{Development:{"Imported Qualification Status":e("input",{id:"imported_qualification_status",name:"imported_qualification_status",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value)}),"Last Modified":e(b,{options:{dateFormat:"Y-m-d ",position:"auto left"},name:"last_modified",value:"",className:"form-input flex-1"}),"Created Date":e(b,{options:{dateFormat:"Y-m-d ",position:"auto left"},name:"created_date",value:"",className:"form-input flex-1"})},"":{"From Panel Side":e("input",{id:"from_panel_site",type:"checkbox",name:"from_panel_site",className:"form-checkbox",onChange:a=>l(a.target.name,a.target.checked)})}}})})})},O=()=>{m(a=>a.leadForm);const i=d();new c;const l=(a,t)=>{i(s({[a]:t}))};return e(u,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(f,{fields:{"Address Information":{"Zip Code":e("input",{id:"zip_code",name:"zip_code",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value)}),City:e("input",{id:"city",name:"city",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value)})},"":{State:e("input",{id:"state",name:"state",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value)}),Country:e("input",{id:"country",name:"country",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value)})}}})})})},q=()=>{m(a=>a.leadForm);const i=d();new c;const l=(a,t)=>{i(s({[a]:t}))};return e(u,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(f,{fields:{"Communication Details / History":{"Details and notes":e("input",{id:"detail_note",name:"detail_note",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value)}),"LinkedIn Communication":e("textarea",{id:"linkedin_communication",rows:3,name:"delinkedin_communicationscription",className:"form-textarea flex-1",placeholder:"",onChange:a=>l(a.target.name,a.target.value)})},"":{}}})})})},B=()=>{m(a=>a.leadForm);const i=d();new c;const l=(a,t)=>{i(s({[a]:t}))};return e(u,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(f,{fields:{"Fields with Secondary Priority":{"No. of Employees":e("input",{id:"no_of_employees",name:"no_of_employees",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value)}),"Lead Reference":e("input",{id:"lead_reference",name:"lead_reference",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value)})},"":{Currency:e(r,{options:S,name:"currency",id:"currency",onChange:({value:a})=>{l("currency",a)},className:"flex-1"}),"Exchange Rate":e("input",{id:"exchange_rate",name:"exchange_rate",type:"text",value:"1",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0})}}})})})},T=()=>h("div",{className:"mt-8 px-4",children:[e(j,{},"leadInfo"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(E,{},"contact"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(O,{},"Address"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(q,{},"Description"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(B,{},"FieldsScondaryPriority"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(M,{},"Development")]}),G=()=>{const i=m(o=>o.leadForm),l=d();return y.useEffect(()=>{l(C("Lead Add"))}),h("div",{className:"px-4",children:[e(I,{formState:i,resetForm:N}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(T,{})})})]})};export{G as default};
