import{d as f,u as p,a as g,b as u,j as a,t as N,F as _,I as m,l as M,m as z,f as U,p as $,k as w,h as P,c as J,r as y,K as Y,J as S,s as G,e as V,M as W,O as k}from"./main-38fe5343.js";import{G as x}from"./GenerateFields-93e4149c.js";import{S as d}from"./react-select.esm-c9ae4ddb.js";import{L,l as F,m as D,n as I,o as E,p as j,q as A}from"./SelectOptions-c7baecc3.js";import{I as Z}from"./ImageUploadComponent-b1c70ca1.js";import{F as O}from"./index-09ca2f26.js";import{A as B}from"./AttachmentSection-80fb3b61.js";import{A as H}from"./ActionButtonsComponent-85ee23fd.js";/* empty css                  */import"./ClearButtonComponent-b4d8730d.js";import"./index-ee82f402.js";const K=()=>{const o=f(e=>e.leadForm),l=p();new g;const n=(e,r)=>{l(m({[e]:r}))},s={"Contact Information":{"First Name":u("div",{className:"flex",children:[a(d,{id:"prefix_first_name",name:"prefix_first_name",onChange:({value:e})=>{n("prefix_first_name",e)},className:"flex-none w-32 mr-2",options:N,defaultValue:N.find(e=>e.value==o.prefix_first_name)}),a("input",{id:"first_name",required:!0,name:"first_name",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value),defaultValue:o.first_name})]}),"Job Description":a(d,{options:L,name:"job_description",id:"job_description",onChange:({value:e})=>{n("job_description",e)},defaultValue:L.find(e=>e.value==o.job_description),className:"flex-1"}),Phone:a("input",{id:"phone",name:"phone",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value),defaultValue:o.phone}),Mobile:a("input",{id:"mobile",name:"mobile",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value),defaultValue:o.mobile}),fax:a("input",{id:"fax",name:"fax",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value),defaultValue:o.fax})},"":{"Last Name":a("input",{id:"last_name",required:!0,name:"last_name",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value),defaultValue:o.last_name}),Email:a("input",{id:"email",name:"email",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value),defaultValue:o.email}),"Contact LinkedIn":a("input",{id:"linkedin_contact",name:"linkedin_contact",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value),defaultValue:o.linkedin_contact}),"Company LinkedIn":a("input",{id:"linkedin_contact",name:"linkedin_company",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value),defaultValue:o.linkedin_company})}};return a(_,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(x,{fields:s})})})},Q=()=>{var e,r,b,c,v;const o=p(),l=f(t=>t.leadForm),n=(t,h)=>{o(m({[t]:h}))},s={"Lead Information":{"Lead Image":a(Z,{formState:l,modelName:"lead",id:"image",formAttribute:"image",updateFormData:m}),Status:a(d,{options:F,name:"status",id:"status",onChange:({value:t})=>{n("status",t)},className:"flex-1",defaultValue:F.find(t=>t.value==l.status)}),"Lost Reason":a(d,{options:D,name:"lost_reason",id:"lost_reason",onChange:({value:t})=>{n("lost_reason",t)},className:"flex-1",defaultValue:D.find(t=>t.value==l.lost_reason)}),"Lost Reason Comment":a("input",{id:"lost_reason_comment",name:"lost_reason_comment",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value),defaultValue:l.lost_reason_comment}),"Lead Owner":a(M,{defaultOptions:!0,isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:z,onChange:({value:t})=>{n("owner_id",t)},className:"flex-1",defaultValue:{value:(e=l.owner)==null?void 0:e.id,label:u("div",{className:"flex items-center",children:[l.owner?a("img",{src:U(l.owner.avatar_data),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,u("div",{children:[a("div",{className:"text-sm font-bold",children:((r=l.owner)==null?void 0:r.first_name)+" "+((b=l.owner)==null?void 0:b.last_name)}),a("div",{className:"text-xs text-gray-500",children:(c=l.owner)==null?void 0:c.email})]}),a("button",{className:"btn text-xs btn-sm ml-auto",onClick:()=>{var t,h;return $(`${((t=l.owner)==null?void 0:t.first_name)+" "+((h=l.owner)==null?void 0:h.last_name)}`)},children:"Copy & Select"})]},(v=l.owner)==null?void 0:v.id)}}),Rating:a(d,{options:I,name:"lead_source",id:"lead_source",onChange:({value:t})=>{n("rating",t)},className:"flex-1",defaultValue:I.find(t=>t.value==l.rating)})},"":{Company:a("input",{id:"company",required:!0,name:"company",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value),defaultValue:l.company}),"Company Type":a(d,{options:E,name:"company_type",id:"company_type",onChange:({value:t})=>{n("company_type",t)},className:"flex-1",defaultValue:E.find(t=>t.value==l.company_type)}),Industry:a(d,{options:j,name:"industry",id:"industry",onChange:({value:t})=>{n("industry",t)},className:"flex-1",defaultValue:j.find(t=>t.value==l.industry)}),Website:a("input",{id:"website",name:"website",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value),defaultValue:l.website}),"Lead Source":a(d,{options:A,name:"lead_source",id:"lead_source",onChange:({value:t})=>{n("lead_source",t)},className:"flex-1",defaultValue:A.find(t=>t.value==l.lead_source)}),"Zusätzlicher Ansprechpartner":a("input",{id:"Ansprechpartner",name:"Ansprechpartner",disabled:!0,className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",defaultValue:l.Ansprechpartner}),"Email Opt Out":a("input",{id:"email_opt_out",type:"checkbox",name:"email_opt_out",className:"form-checkbox",onChange:t=>n(t.target.name,t.target.checked),checked:l.email_opt_out})}};return a(_,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(x,{fields:s})})})},X=()=>{const o=f(e=>e.leadForm),l=p();new g;const n=(e,r)=>{l(m({[e]:r}))},s={Development:{"Imported Qualification Status":a("input",{id:"imported_qualification_status",name:"imported_qualification_status",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value),defaultValue:o.imported_qualification_status}),"Last Modified":a(O,{name:"last_modified",options:{dateFormat:"Y-m-d",position:"auto left",defaultDate:o.last_modified?new Date(o.last_modified):null},className:"form-input flex-1",value:o.last_modified?new Date(o.last_modified):"",onChange:(e,r)=>n("last_modified",r),defaultValue:o.last_modified}),"Created Date":a(O,{name:"created_date",options:{dateFormat:"Y-m-d",position:"auto left",defaultDate:o.created_date?new Date(o.created_date):null},className:"form-input flex-1",value:o.created_date?new Date(o.created_date):"",onChange:(e,r)=>n("created_date",r),defaultValue:o.created_date})},"":{"From Panel Side":a("input",{id:"from_panel_site",type:"checkbox",name:"from_panel_site",className:"form-checkbox",onChange:e=>n(e.target.name,e.target.checked),checked:o.from_panel_site})}};return a(_,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(x,{fields:s})})})},ee=()=>{const o=f(e=>e.leadForm),l=p();new g;const n=(e,r)=>{l(m({[e]:r}))},s={"Address Information":{"Zip Code":a("input",{id:"zip_code",name:"zip_code",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value),defaultValue:o.zip_code}),City:a("input",{id:"city",name:"city",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value),defaultValue:o.city})},"":{State:a("input",{id:"state",name:"state",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value),defaultValue:o.state}),Country:a("input",{id:"country",name:"country",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value),defaultValue:o.country})}};return a(_,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(x,{fields:s})})})},ae=()=>{const o=f(e=>e.leadForm),l=p();new g;const n=(e,r)=>{l(m({[e]:r}))},s={"Communication Details / History":{"Details and notes":a("input",{id:"detail_note",name:"detail_note",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value),defaultValue:o.detail_note}),"LinkedIn Communication":a("textarea",{id:"linkedin_communication",rows:3,name:"linkedin_communication",className:"form-textarea flex-1",placeholder:"",onChange:e=>n(e.target.name,e.target.value),defaultValue:o.linkedin_communication})},"":{}};return a(_,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(x,{fields:s})})})},te=()=>{const o=f(e=>e.leadForm),l=p();new g;const n=(e,r)=>{l(m({[e]:r}))},s={"Fields with Secondary Priority":{"No. of Employees":a("input",{id:"no_of_employees",name:"no_of_employees",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value),defaultValue:o.no_of_employees}),"Lead Reference":a("input",{id:"lead_reference",name:"lead_reference",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value),defaultValue:o.lead_reference})},"":{Currency:a(d,{options:w,name:"currency",id:"currency",onChange:({value:e})=>{n("currency",e)},className:"flex-1",defaultValue:w.find(e=>e.value==o.currency)}),"Exchange Rate":a("input",{id:"exchange_rate",name:"exchange_rate",type:"text",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0,defaultValue:o.exchange_rate??1})}};return a(_,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(x,{fields:s})})})},ne=()=>{const l=P().id;return u("div",{className:"mt-8 px-4",children:[a(Q,{},"leadInfo"),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(K,{},"contact"),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(ee,{},"Address"),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(ae,{},"Description"),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(te,{},"FieldsScondaryPriority"),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(X,{},"Development"),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(B,{modelId:l,modelName:"lead"})]})},he=()=>{const{hasPermission:o}=J(),l=f(i=>i.leadForm),[n,s]=y.useState(!0),r=P().id,b=new g,c=p(),v=Y();y.useEffect(()=>{c(S())},[]);const t=async()=>{const i=await b.fetchSingleLead(r);if(i.status!=200)return;const C=i.data.data.lead;c(m(C))},h=async()=>{const i=await b.convertLeadValidation({id:l.id});if(i.status==200)v(`/lead/convert/${r}`,{replace:!0});else if(i.status===422){const C=i.data.errors,T={titleMessage:"You have validation error on converting lead",hasError:!0,...Object.fromEntries(Object.entries(C).map(([R,q])=>[R,q[0]]))};c(W(T)),k.fire({icon:"error",html:`<h5>Convert Validation Error</h5>
                        <span style="font-size: 12px">Please Check fields</span>
                        `,padding:"10px 20px"})}else k.fire({icon:"error",title:"Internal Server Error ,Converting lead failed",padding:"10px 20px"})};return y.useEffect(()=>{c(G("Lead Edit"))}),y.useEffect(()=>{t().then(()=>{s(!1)})},[r]),y.useEffect(()=>{c(m({api:"updateSingleLead",redirectTo:"/lead/edit/:id",action:"edit"}))},[]),n?a(V,{}):!o("update-lead")||n?a(V,{}):u("div",{className:"px-4",children:[a(H,{disabled:l.status=="converted",formState:l,resetForm:S}),l.status=="converted"&&a("div",{className:"flex items-center p-3.5 rounded text-warning bg-warning-light dark:bg-warning-dark-light mb-5",children:u("span",{className:"ltr:pr-2 rtl:pl-2 flex item-center",children:[a("strong",{className:"ltr:mr-1 rtl:ml-1",children:"Warning!"}),"This lead has been converted before , you can not modify it ."]})}),a("div",{className:"flex xl:flex-row flex-col gap-2.5",children:u("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:[l.status!="converted"&&a("button",{onClick:h,className:"mx-5 btn btn-secondary gap-2",children:"Convert Lead"}),a(ne,{})]})})]})};export{he as default};
