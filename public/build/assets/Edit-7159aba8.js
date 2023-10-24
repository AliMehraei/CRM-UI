import{a as p,u as h,e as b,j as s,b as e,q as k,F as d,H as c,k as A,f as E,i as L,n as D,c as j,r as v,J as q,I as S,s as M,d as F}from"./main-abaca463.js";import{G as _}from"./GenerateFields-0ca5d491.js";import{S as u}from"./react-select.esm-8e3be6d7.js";import{A as O}from"./react-select-async.esm-ef864f04.js";import{I as T}from"./ImageUploadComponent-42e0a7ca.js";import{F as V}from"./index-9df264ec.js";import{A as P}from"./AttachmentSection-80a3a552.js";import{A as Q}from"./ActionButtonsComponent-581a3a1c.js";/* empty css                  */import"./Select-aecb2a80.esm-ebd29451.js";import"./ClearButtonComponent-2e20a897.js";const R=()=>{const n=p(t=>t.leadForm),r=h();new b;const l=(t,g)=>{r(c({[t]:g}))},i=[{value:"none",label:"-None-"},{value:"buyer",label:"Buyer"},{value:"operative_buyer",label:"Operative Buyer"},{value:"chat",label:"Chat"},{value:"messe",label:"Messe"},{value:"not_yet_clear",label:"Not Yet Clear"}],a={"Contact Information":{"First Name":s("div",{className:"flex",children:[e(u,{id:"prefix_first_name",name:"prefix_first_name",onChange:({value:t})=>{l("prefix_first_name",t)},className:"flex-none w-32 mr-2",options:k,defaultValue:k.find(t=>t.value==n.prefix_first_name)}),e("input",{id:"first_name",required:!0,name:"first_name",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:n.first_name})]}),"Job Description":e(u,{options:i,name:"job_description",id:"job_description",onChange:({value:t})=>{l("job_description",t)},defaultValue:i.find(t=>t.value==n.job_description),className:"flex-1"}),Phone:e("input",{id:"phone",name:"phone",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:n.phone}),Mobile:e("input",{id:"mobile",name:"mobile",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:n.mobile}),fax:e("input",{id:"fax",name:"fax",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:n.fax})},"":{"Last Name":e("input",{id:"last_name",required:!0,name:"last_name",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:n.last_name}),Email:e("input",{id:"email",name:"email",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:n.email}),"Contact LinkedIn":e("input",{id:"linkedin_contact",name:"linkedin_contact",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:n.linkedin_contact}),"Company LinkedIn":e("input",{id:"linkedin_contact",name:"linkedin_company",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:n.linkedin_company})}};return e(d,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(_,{fields:a})})})},H=()=>{var x,y,m,N,w;const n=h(),r=p(o=>o.leadForm),l=(o,I)=>{n(c({[o]:I}))},i=[{value:"none",label:"-None-"},{value:"account_contact",label:"Account or Contact exist already"},{value:"wrong_branch",label:"Wrong Branch"},{value:"wrong_department",label:"Wrong Department"},{value:"does_not_exist",label:"Does Not Exist Anymore"},{value:"bankruptcy",label:"Bankruptcy"},{value:"other",label:"Other"}],a=[{value:"none",label:"-None-"},{value:"0.0 Cold lead / unqualified (CLU)",label:s(d,{children:[e("span",{className:"inline-block w-4 h-4 mr-2 bg-gray-500 rounded-full"}),"0.0 Cold lead / unqualified (CLU)"]})},{value:"1.0 Cold lead qualified (CLQ)",label:s(d,{children:[e("span",{className:"inline-block w-4 h-4 mr-2 bg-blue-300 rounded-full"}),"1.0 Cold lead qualified (CLQ)"]})},{value:"2.0 First contact made (FCM)",label:s(d,{children:[e("span",{className:"inline-block w-4 h-4 mr-2 bg-purple-200 rounded-full"}),"2.0 First contact made (FCM)"]})},{value:"3.0 warm lead qualified (WLQ)",label:s(d,{children:[e("span",{className:"inline-block w-4 h-4 mr-2 bg-orange-300 rounded-full"}),"3.0 warm lead qualified (WLQ)"]})},{value:"4.0 Hot lead (HLQ)",label:s(d,{children:[e("span",{className:"inline-block w-4 h-4 mr-2 bg-orange-600 rounded-full"}),"4.0 Hot lead (HLQ)"]})},{value:"Close Lead / Lost Lead",label:s(d,{children:[e("span",{className:"inline-block w-4 h-4 mr-2 bg-red-500 rounded-full"}),"Close Lead / Lost Lead"]})}],t=[{value:"none",label:"-None-"},{value:"oem",label:"OEM"},{value:"ems",label:"EMS"},{value:"odm",label:"ODM (Development)"},{value:"reseller",label:"Reseller"},{value:"other",label:"Other"}],g=[{value:"none",label:"-None-"},{value:"industrial",label:"Industrial"},{value:"automotive",label:"Automotive"},{value:"consumer",label:"Consumer"},{value:"it",label:"IT"},{value:"defence",label:"Defence"},{value:"transportation",label:"Transportation"}],f=[{value:"none",label:"-None-"},{value:"exhibitor_list",label:"Exhibitor List"},{value:"linkedin",label:"Linkedin"},{value:"chat",label:"Chat"},{value:"messe",label:"Messe"}],C={"Lead Information":{"Lead Image":e(T,{formState:r,modelName:"lead",id:"image",formAttribute:"image",updateFormData:c}),Status:e(u,{options:a,name:"status",id:"status",onChange:({value:o})=>{l("status",o)},className:"flex-1",defaultValue:a.find(o=>o.value==r.status)}),"Lost Reason":e(u,{options:i,name:"lost_reason",id:"lost_reason",onChange:({value:o})=>{l("lost_reason",o)},className:"flex-1",defaultValue:i.find(o=>o.value==r.lost_reason)}),"Lost Reason Comment":e("input",{id:"lost_reason_comment",name:"lost_reason_comment",className:"form-input flex-1 ",onChange:o=>l(o.target.name,o.target.value),defaultValue:r.lost_reason_comment}),"Lead Owner":e(O,{defaultOptions:!0,isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:A,onChange:({value:o})=>{l("owner_id",o)},className:"flex-1",defaultValue:{value:(x=r.owner)==null?void 0:x.id,label:s("div",{className:"flex items-center",children:[r.owner?e("img",{src:E(r.owner.avatar),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,s("div",{children:[e("div",{className:"text-sm font-bold",children:((y=r.owner)==null?void 0:y.first_name)+" "+((m=r.owner)==null?void 0:m.last_name)}),e("div",{className:"text-xs text-gray-500",children:(N=r.owner)==null?void 0:N.email})]})]},(w=r.owner)==null?void 0:w.id)}})},"":{Company:e("input",{id:"company",required:!0,name:"company",className:"form-input flex-1 ",onChange:o=>l(o.target.name,o.target.value),defaultValue:r.company}),"Company Type":e(u,{options:t,name:"company_type",id:"company_type",onChange:({value:o})=>{l("company_type",o)},className:"flex-1",defaultValue:t.find(o=>o.value==r.company_type)}),Industry:e(u,{options:g,name:"industry",id:"industry",onChange:({value:o})=>{l("industry",o)},className:"flex-1",defaultValue:g.find(o=>o.value==r.industry)}),Website:e("input",{id:"website",name:"website",className:"form-input flex-1 ",onChange:o=>l(o.target.name,o.target.value),defaultValue:r.website}),"Lead Source":e(u,{options:f,name:"lead_source",id:"lead_source",onChange:({value:o})=>{l("lead_source",o)},className:"flex-1",defaultValue:f.find(o=>o.value==r.lead_source)}),"Zusätzlicher Ansprechpartner":e("input",{id:"Ansprechpartner",name:"Ansprechpartner",disabled:!0,className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",defaultValue:r.Ansprechpartner}),"Email Opt Out":e("input",{id:"email_opt_out",type:"checkbox",name:"email_opt_out",className:"form-checkbox",onChange:o=>l(o.target.name,o.target.checked),checked:r.email_opt_out})}};return e(d,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(_,{fields:C})})})},U=()=>{const n=p(a=>a.leadForm),r=h();new b;const l=(a,t)=>{r(c({[a]:t}))},i={Development:{"Imported Qualification Status":e("input",{id:"imported_qualification_status",name:"imported_qualification_status",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value),defaultValue:n.imported_qualification_status}),"Last Modified":e(V,{name:"last_modified",options:{dateFormat:"Y-m-d",position:"auto left",defaultDate:n.last_modified?new Date(n.last_modified):null},className:"form-input flex-1",value:n.last_modified?new Date(n.last_modified):"",onChange:(a,t)=>l("last_modified",t),defaultValue:n.last_modified}),"Created Date":e(V,{name:"created_date",options:{dateFormat:"Y-m-d",position:"auto left",defaultDate:n.created_date?new Date(n.created_date):null},className:"form-input flex-1",value:n.created_date?new Date(n.created_date):"",onChange:(a,t)=>l("created_date",t),defaultValue:n.created_date})},"":{"From Panel Side":e("input",{id:"from_panel_site",type:"checkbox",name:"from_panel_site",className:"form-checkbox",onChange:a=>l(a.target.name,a.target.checked),checked:n.from_panel_site})}};return e(d,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(_,{fields:i})})})},W=()=>{const n=p(a=>a.leadForm),r=h();new b;const l=(a,t)=>{r(c({[a]:t}))},i={"Address Information":{"Zip Code":e("input",{id:"zip_code",name:"zip_code",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value),defaultValue:n.zip_code}),City:e("input",{id:"city",name:"city",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value),defaultValue:n.city})},"":{State:e("input",{id:"state",name:"state",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value),defaultValue:n.state}),Country:e("input",{id:"country",name:"country",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value),defaultValue:n.country})}};return e(d,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(_,{fields:i})})})},B=()=>{const n=p(a=>a.leadForm),r=h();new b;const l=(a,t)=>{r(c({[a]:t}))},i={"Communication Details / History":{"Details and notes":e("input",{id:"detail_note",name:"detail_note",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value),defaultValue:n.detail_note}),"LinkedIn Communication":e("textarea",{id:"linkedin_communication",rows:3,name:"linkedin_communication",className:"form-textarea flex-1",placeholder:"",onChange:a=>l(a.target.name,a.target.value),defaultValue:n.linkedin_communication})},"":{}};return e(d,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(_,{fields:i})})})},z=()=>{const n=p(a=>a.leadForm),r=h();new b;const l=(a,t)=>{r(c({[a]:t}))},i={"Fields with Secondary Priority":{"No. of Employees":e("input",{id:"no_of_employees",name:"no_of_employees",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value),defaultValue:n.no_of_employees}),"Lead Reference":e("input",{id:"lead_reference",name:"lead_reference",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value),defaultValue:n.lead_reference})},"":{Currency:e(u,{options:L,name:"currency",id:"currency",onChange:({value:a})=>{l("currency",a)},className:"flex-1",defaultValue:L.find(a=>a.value==n.currency)}),"Exchange Rate":e("input",{id:"exchange_rate",name:"exchange_rate",type:"text",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0,defaultValue:n.exchange_rate??1})}};return e(d,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(_,{fields:i})})})},$=()=>{const r=D().id;return s("div",{className:"mt-8 px-4",children:[e(H,{},"leadInfo"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(R,{},"contact"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(W,{},"Address"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(B,{},"Description"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(z,{},"FieldsScondaryPriority"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(U,{},"Development"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(P,{modelId:r,modelName:"lead"})]})},oe=()=>{const{hasPermission:n}=j(),r=p(m=>m.leadForm),[l,i]=v.useState(!0),t=D().id,g=new b,f=h(),C=q();v.useEffect(()=>{f(S())},[]);const x=async()=>{const m=await g.fetchSingleLead(t);if(m.status!=200)return;const N=m.data.data.lead;f(c(N))},y=async()=>{C(`/lead/convert/${t}`,{replace:!0})};return v.useEffect(()=>{f(M("Lead Edit"))}),v.useEffect(()=>{x().then(()=>{i(!1)})},[t]),v.useEffect(()=>{f(c({api:"updateSingleLead",redirectTo:"/lead/edit/:id",action:"edit"}))},[]),l?e(F,{}):!n("update-lead")||l?e(F,{}):s("div",{className:"px-4",children:[e(Q,{disabled:r.status=="converted",formState:r,resetForm:S}),r.status=="converted"&&e("div",{className:"flex items-center p-3.5 rounded text-warning bg-warning-light dark:bg-warning-dark-light mb-5",children:s("span",{className:"ltr:pr-2 rtl:pl-2 flex item-center",children:[e("strong",{className:"ltr:mr-1 rtl:ml-1",children:"Warning!"}),"This lead has been converted before you can not modify it ."]})}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:s("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:[r.status!="converted"&&e("button",{onClick:y,className:"mx-5 btn btn-secondary gap-2",children:"Convert Lead"}),e($,{})]})})]})};export{oe as default};
