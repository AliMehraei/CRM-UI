import{d as h,u as g,a as v,b as i,j as e,q as L,F as c,H as m,l as A,m as j,f as q,k as S,h as E,c as M,r as x,J as O,I as V,s as T,e as F,K as P,M as D}from"./main-360609a7.js";import{G as _,A as Q}from"./GenerateFields-89af4685.js";import{S as f}from"./react-select.esm-26c512a6.js";import{I as R}from"./ImageUploadComponent-114d0f09.js";import{F as I}from"./index-85cd636f.js";import{A as U}from"./AttachmentSection-cb3f2c1d.js";/* empty css                  */import"./index-79920e12.js";import"./ClearButtonComponent-7b0a9117.js";const H=()=>{const n=h(t=>t.leadForm),r=g();new v;const l=(t,p)=>{r(m({[t]:p}))},s=[{value:"none",label:"-None-"},{value:"buyer",label:"Buyer"},{value:"operative_buyer",label:"Operative Buyer"},{value:"chat",label:"Chat"},{value:"messe",label:"Messe"},{value:"not_yet_clear",label:"Not Yet Clear"}],a={"Contact Information":{"First Name":i("div",{className:"flex",children:[e(f,{id:"prefix_first_name",name:"prefix_first_name",onChange:({value:t})=>{l("prefix_first_name",t)},className:"flex-none w-32 mr-2",options:L,defaultValue:L.find(t=>t.value==n.prefix_first_name)}),e("input",{id:"first_name",required:!0,name:"first_name",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:n.first_name})]}),"Job Description":e(f,{options:s,name:"job_description",id:"job_description",onChange:({value:t})=>{l("job_description",t)},defaultValue:s.find(t=>t.value==n.job_description),className:"flex-1"}),Phone:e("input",{id:"phone",name:"phone",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:n.phone}),Mobile:e("input",{id:"mobile",name:"mobile",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:n.mobile}),fax:e("input",{id:"fax",name:"fax",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:n.fax})},"":{"Last Name":e("input",{id:"last_name",required:!0,name:"last_name",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:n.last_name}),Email:e("input",{id:"email",name:"email",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:n.email}),"Contact LinkedIn":e("input",{id:"linkedin_contact",name:"linkedin_contact",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:n.linkedin_contact}),"Company LinkedIn":e("input",{id:"linkedin_contact",name:"linkedin_company",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:n.linkedin_company})}};return e(c,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(_,{fields:a})})})},W=()=>{var y,C,d,b,N;const n=g(),r=h(o=>o.leadForm),l=(o,k)=>{n(m({[o]:k}))},s=[{value:"none",label:"-None-"},{value:"account_contact",label:"Account or Contact exist already"},{value:"wrong_branch",label:"Wrong Branch"},{value:"wrong_department",label:"Wrong Department"},{value:"does_not_exist",label:"Does Not Exist Anymore"},{value:"bankruptcy",label:"Bankruptcy"},{value:"other",label:"Other"}],a=[{value:"none",label:"-None-"},{value:"0.0 Cold lead / unqualified (CLU)",label:i(c,{children:[e("span",{className:"inline-block w-4 h-4 mr-2 bg-gray-500 rounded-full"}),"0.0 Cold lead / unqualified (CLU)"]})},{value:"1.0 Cold lead qualified (CLQ)",label:i(c,{children:[e("span",{className:"inline-block w-4 h-4 mr-2 bg-blue-300 rounded-full"}),"1.0 Cold lead qualified (CLQ)"]})},{value:"2.0 First contact made (FCM)",label:i(c,{children:[e("span",{className:"inline-block w-4 h-4 mr-2 bg-purple-200 rounded-full"}),"2.0 First contact made (FCM)"]})},{value:"3.0 warm lead qualified (WLQ)",label:i(c,{children:[e("span",{className:"inline-block w-4 h-4 mr-2 bg-orange-300 rounded-full"}),"3.0 warm lead qualified (WLQ)"]})},{value:"4.0 Hot lead (HLQ)",label:i(c,{children:[e("span",{className:"inline-block w-4 h-4 mr-2 bg-orange-600 rounded-full"}),"4.0 Hot lead (HLQ)"]})},{value:"Close Lead / Lost Lead",label:i(c,{children:[e("span",{className:"inline-block w-4 h-4 mr-2 bg-red-500 rounded-full"}),"Close Lead / Lost Lead"]})}],t=[{value:"none",label:"-None-"},{value:"oem",label:"OEM"},{value:"ems",label:"EMS"},{value:"odm",label:"ODM (Development)"},{value:"reseller",label:"Reseller"},{value:"other",label:"Other"}],p=[{value:"none",label:"-None-"},{value:"industrial",label:"Industrial"},{value:"automotive",label:"Automotive"},{value:"consumer",label:"Consumer"},{value:"it",label:"IT"},{value:"defence",label:"Defence"},{value:"transportation",label:"Transportation"}],u=[{value:"none",label:"-None-"},{value:"exhibitor_list",label:"Exhibitor List"},{value:"linkedin",label:"Linkedin"},{value:"chat",label:"Chat"},{value:"messe",label:"Messe"}],w={"Lead Information":{"Lead Image":e(R,{formState:r,modelName:"lead",id:"image",formAttribute:"image",updateFormData:m}),Status:e(f,{options:a,name:"status",id:"status",onChange:({value:o})=>{l("status",o)},className:"flex-1",defaultValue:a.find(o=>o.value==r.status)}),"Lost Reason":e(f,{options:s,name:"lost_reason",id:"lost_reason",onChange:({value:o})=>{l("lost_reason",o)},className:"flex-1",defaultValue:s.find(o=>o.value==r.lost_reason)}),"Lost Reason Comment":e("input",{id:"lost_reason_comment",name:"lost_reason_comment",className:"form-input flex-1 ",onChange:o=>l(o.target.name,o.target.value),defaultValue:r.lost_reason_comment}),"Lead Owner":e(A,{defaultOptions:!0,isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:j,onChange:({value:o})=>{l("owner_id",o)},className:"flex-1",defaultValue:{value:(y=r.owner)==null?void 0:y.id,label:i("div",{className:"flex items-center",children:[r.owner?e("img",{src:q(r.owner.avatar_data),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,i("div",{children:[e("div",{className:"text-sm font-bold",children:((C=r.owner)==null?void 0:C.first_name)+" "+((d=r.owner)==null?void 0:d.last_name)}),e("div",{className:"text-xs text-gray-500",children:(b=r.owner)==null?void 0:b.email})]})]},(N=r.owner)==null?void 0:N.id)}})},"":{Company:e("input",{id:"company",required:!0,name:"company",className:"form-input flex-1 ",onChange:o=>l(o.target.name,o.target.value),defaultValue:r.company}),"Company Type":e(f,{options:t,name:"company_type",id:"company_type",onChange:({value:o})=>{l("company_type",o)},className:"flex-1",defaultValue:t.find(o=>o.value==r.company_type)}),Industry:e(f,{options:p,name:"industry",id:"industry",onChange:({value:o})=>{l("industry",o)},className:"flex-1",defaultValue:p.find(o=>o.value==r.industry)}),Website:e("input",{id:"website",name:"website",className:"form-input flex-1 ",onChange:o=>l(o.target.name,o.target.value),defaultValue:r.website}),"Lead Source":e(f,{options:u,name:"lead_source",id:"lead_source",onChange:({value:o})=>{l("lead_source",o)},className:"flex-1",defaultValue:u.find(o=>o.value==r.lead_source)}),"Zusätzlicher Ansprechpartner":e("input",{id:"Ansprechpartner",name:"Ansprechpartner",disabled:!0,className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",defaultValue:r.Ansprechpartner}),"Email Opt Out":e("input",{id:"email_opt_out",type:"checkbox",name:"email_opt_out",className:"form-checkbox",onChange:o=>l(o.target.name,o.target.checked),checked:r.email_opt_out})}};return e(c,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(_,{fields:w})})})},z=()=>{const n=h(a=>a.leadForm),r=g();new v;const l=(a,t)=>{r(m({[a]:t}))},s={Development:{"Imported Qualification Status":e("input",{id:"imported_qualification_status",name:"imported_qualification_status",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value),defaultValue:n.imported_qualification_status}),"Last Modified":e(I,{name:"last_modified",options:{dateFormat:"Y-m-d",position:"auto left",defaultDate:n.last_modified?new Date(n.last_modified):null},className:"form-input flex-1",value:n.last_modified?new Date(n.last_modified):"",onChange:(a,t)=>l("last_modified",t),defaultValue:n.last_modified}),"Created Date":e(I,{name:"created_date",options:{dateFormat:"Y-m-d",position:"auto left",defaultDate:n.created_date?new Date(n.created_date):null},className:"form-input flex-1",value:n.created_date?new Date(n.created_date):"",onChange:(a,t)=>l("created_date",t),defaultValue:n.created_date})},"":{"From Panel Side":e("input",{id:"from_panel_site",type:"checkbox",name:"from_panel_site",className:"form-checkbox",onChange:a=>l(a.target.name,a.target.checked),checked:n.from_panel_site})}};return e(c,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(_,{fields:s})})})},B=()=>{const n=h(a=>a.leadForm),r=g();new v;const l=(a,t)=>{r(m({[a]:t}))},s={"Address Information":{"Zip Code":e("input",{id:"zip_code",name:"zip_code",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value),defaultValue:n.zip_code}),City:e("input",{id:"city",name:"city",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value),defaultValue:n.city})},"":{State:e("input",{id:"state",name:"state",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value),defaultValue:n.state}),Country:e("input",{id:"country",name:"country",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value),defaultValue:n.country})}};return e(c,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(_,{fields:s})})})},Y=()=>{const n=h(a=>a.leadForm),r=g();new v;const l=(a,t)=>{r(m({[a]:t}))},s={"Communication Details / History":{"Details and notes":e("input",{id:"detail_note",name:"detail_note",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value),defaultValue:n.detail_note}),"LinkedIn Communication":e("textarea",{id:"linkedin_communication",rows:3,name:"linkedin_communication",className:"form-textarea flex-1",placeholder:"",onChange:a=>l(a.target.name,a.target.value),defaultValue:n.linkedin_communication})},"":{}};return e(c,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(_,{fields:s})})})},$=()=>{const n=h(a=>a.leadForm),r=g();new v;const l=(a,t)=>{r(m({[a]:t}))},s={"Fields with Secondary Priority":{"No. of Employees":e("input",{id:"no_of_employees",name:"no_of_employees",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value),defaultValue:n.no_of_employees}),"Lead Reference":e("input",{id:"lead_reference",name:"lead_reference",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value),defaultValue:n.lead_reference})},"":{Currency:e(f,{options:S,name:"currency",id:"currency",onChange:({value:a})=>{l("currency",a)},className:"flex-1",defaultValue:S.find(a=>a.value==n.currency)}),"Exchange Rate":e("input",{id:"exchange_rate",name:"exchange_rate",type:"text",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0,defaultValue:n.exchange_rate??1})}};return e(c,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(_,{fields:s})})})},J=()=>{const r=E().id;return i("div",{className:"mt-8 px-4",children:[e(W,{},"leadInfo"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(H,{},"contact"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(B,{},"Address"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Y,{},"Description"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e($,{},"FieldsScondaryPriority"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(z,{},"Development"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(U,{modelId:r,modelName:"lead"})]})},oe=()=>{const{hasPermission:n}=M(),r=h(d=>d.leadForm),[l,s]=x.useState(!0),t=E().id,p=new v,u=g(),w=O();x.useEffect(()=>{u(V())},[]);const y=async()=>{const d=await p.fetchSingleLead(t);if(d.status!=200)return;const b=d.data.data.lead;u(m(b))},C=async()=>{const d=await p.convertLeadValidation({id:r.id});if(d.status==200)w(`/lead/convert/${t}`,{replace:!0});else if(d.status===422){const b=d.data.errors,N={titleMessage:"You have validation error on converting lead",hasError:!0,...Object.fromEntries(Object.entries(b).map(([o,k])=>[o,k[0]]))};u(P(N)),D.fire({icon:"error",html:`<h5>Convert Validation Error</h5>
                        <span style="font-size: 12px">Please Check fields</span>
                        `,padding:"10px 20px"})}else D.fire({icon:"error",title:"Internal Server Error ,Converting lead failed",padding:"10px 20px"})};return x.useEffect(()=>{u(T("Lead Edit"))}),x.useEffect(()=>{y().then(()=>{s(!1)})},[t]),x.useEffect(()=>{u(m({api:"updateSingleLead",redirectTo:"/lead/edit/:id",action:"edit"}))},[]),l?e(F,{}):!n("update-lead")||l?e(F,{}):i("div",{className:"px-4",children:[e(Q,{disabled:r.status=="converted",formState:r,resetForm:V}),r.status=="converted"&&e("div",{className:"flex items-center p-3.5 rounded text-warning bg-warning-light dark:bg-warning-dark-light mb-5",children:i("span",{className:"ltr:pr-2 rtl:pl-2 flex item-center",children:[e("strong",{className:"ltr:mr-1 rtl:ml-1",children:"Warning!"}),"This lead has been converted before , you can not modify it ."]})}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:i("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:[r.status!="converted"&&e("button",{onClick:C,className:"mx-5 btn btn-secondary gap-2",children:"Convert Lead"}),e(J,{})]})})]})};export{oe as default};
