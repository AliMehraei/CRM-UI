import{u as _,a as h,j as u,b as e,h as m,F as y,r as k,f as j,s as E,g as I,i as T,c as O}from"./main-9b0342c2.js";import{h as P,g as B,b as q,s as M,G as N,c as L}from"./CommonFunctions-abe86de7.js";/* empty css                  */import{A as w}from"./react-select-async.esm-2234b8d6.js";import{S as f}from"./react-select.esm-1dd62acb.js";import{C as R}from"./ClearButtonComponent-707db401.js";import{F as $}from"./index-8089a176.js";import"./sweetalert2.all-1b2d968f.js";import"./Select-aecb2a80.esm-73074169.js";const G=()=>{var d,p,v,b,n,C,S,V,F,D,A;const s=_(),a=h(o=>o.contactForm),l=(o,x)=>{s(m({[o]:x}))},r=[{value:"none",label:"-None-"},{value:"herr",label:"Herr"},{value:"frau",label:"Frau"},{value:"fr.",label:"Fr."},{value:"dr.",label:"Dr."},{value:"prof.",label:"Prof."}],i=[{value:"none",label:"-None-"},{value:"buyer",label:"Buyer"},{value:"operative_buyer",label:"Operative Buyer"},{value:"strategic_buyer",label:"Strategic Buyer"},{value:"project_buyer",label:"Project Buyer"},{value:"commodity_buyer",label:"Commodity Buyer"},{value:"team_leader",label:"Team Leader"},{value:"purchasing_manager",label:"Purchasing Manager"},{value:"purchasing_director",label:"Purchasing Director"},{value:"director",label:"Director"},{value:"developer",label:"Developer"},{value:"sales",label:"Sales"}],t=[{value:"none",label:"-None-"},{value:"ceo_connections",label:"CEO connections"},{value:"client_tipp",label:"Client Tipp"},{value:"competitor_tipp",label:"Competitor Tipp"},{value:"externe_vermittlung",label:"Externe Vermittlung"},{value:"fachtagung",label:"Fachtagung"},{value:"google_ad_campaign_sem",label:"Google Ad campaign SEM"},{value:"google_seo",label:"Google SEO"},{value:"internet_recherche",label:"Internetrecherche"},{value:"lead_called_alpyn",label:"Lead called ALPYN"},{value:"linkedin_ads",label:"LinkedIn Ads"},{value:"linkedin_social_selling",label:"LinkedIn Social selling activity"},{value:"messe",label:"Messe"},{value:"messe_at",label:"Messe AT"},{value:"messe_ch",label:"Messe CH"},{value:"messe_de",label:"Messe DE"},{value:"messe_ita",label:"Messe ITA"},{value:"netcomponents",label:"Netcomponents"},{value:"networking_linkedin",label:"Networking Linkedin"},{value:"networking_offline",label:"Networking offline"},{value:"online_events",label:"Online Events (b2bmatch e.g)"},{value:"online_messen",label:"Online Messen"},{value:"others",label:"Others"},{value:"portal_access_request",label:"Portal Access request"},{value:"reseller_tipp",label:"Reseller Tipp"},{value:"sales_activity_general",label:"Sales activity by general Assistant (BDR / SDR)"},{value:"sales_activity_ita",label:"Sales activity by ITA Assistent (BDR / SDR)"},{value:"team_connections",label:"Team Connections"},{value:"website_request",label:"Website request"}],c=[{value:"none",label:"-None-"},{value:"not_qualified",label:"Nicht qualifiziert"},{value:"prequalified",label:"Vorqualifiziert"},{value:"contact_future",label:"Zukünftig kontaktieren"},{value:"not_contacted",label:"Nicht kontaktiert"},{value:"contact_attempt",label:"Kontaktversuch"},{value:"cold_call",label:"Cold Call"},{value:"follow_up",label:"Follow Up"},{value:"objection_handling",label:"Einwandbehandlung"},{value:"rfq",label:"RFQ"},{value:"quote",label:"Quote"},{value:"sales_order",label:"Sales Order"},{value:"worthless_contact",label:"Wertloser Kontakt"},{value:"lost_contact",label:"Verlorener Kontakt"}],g={"Contact Details":{"Contact Image":u("div",{className:"",children:[u("div",{className:"flex",children:[e("input",{id:"image",type:"file",className:"form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1",accept:"image/*",onChange:o=>P(o,x=>{s(m({image:`${x==null?void 0:x.data.data.file_url}`}))}),name:"image"},"image"),e(R,{callBack:()=>{const o=document.getElementById("image");o&&(o.value="",o.dispatchEvent(new Event("change",{bubbles:!0}))),s(m({image:null}))}})]}),e("img",{id:"contact_image_preview",src:B(a.image||a.oldImage),alt:"img",className:"mt-4 w-20 h-20 rounded"})]}),"First Name":u("div",{className:"flex",children:[e(f,{id:"prefix_first_name",name:"prefix_first_name",onChange:({value:o})=>{l("prefix_first_name",o)},className:"flex-none w-32 mr-2",options:r,defaultValue:r.find(o=>o.value==a.prefix_first_name)}),e("input",{id:"first_name",required:!0,name:"first_name",className:"form-input flex-1 ",onChange:o=>l(o.target.name,o.target.value),defaultValue:a.first_name})]}),"Last Name":e("input",{id:"last_name",required:!0,name:"last_name",className:"form-input flex-1 ",onChange:o=>l(o.target.name,o.target.value),defaultValue:a.last_name}),"Job Description":e(f,{id:"job_description",name:"job_description",onChange:({value:o})=>{l("job_description",o)},className:"flex-1",options:i,defaultValue:i.find(o=>o.value==a.job_description)}),"Contact Type":e(f,{id:"contact_type",name:"contact_type",onChange:({value:o})=>{l("contact_type",o)},className:"flex-1 disabled",isDisabled:!0,defaultValue:{value:"none",label:"-None-"}})},"":{"Account Name":e(w,{isMulti:!1,id:"account_id",required:!0,placeholder:"Type at least 2 characters to search...",name:"account_id",loadOptions:q,onChange:({value:o})=>{l("account_id",o)},className:"flex-1",defaultValue:{value:(d=a.account)==null?void 0:d.id,label:u("div",{className:"flex items-center",children:[e("img",{src:(p=a.account)==null?void 0:p.image,alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),u("div",{children:[e("div",{className:"text-sm font-bold",children:(v=a.account)==null?void 0:v.name}),e("div",{className:"text-xs text-gray-500",children:(b=a.account)==null?void 0:b.email})]})]},(n=a.account)==null?void 0:n.id)}}),"Contact Source":e(f,{id:"contact_source",name:"contact_source",onChange:({value:o})=>{l("contact_source",o)},className:"flex-1 ",options:t,defaultValue:t.find(o=>o.value==a.contact_source)}),"Contact Owner":e(w,{isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:M,onChange:({value:o})=>{l("owner_id",o)},className:"",defaultValue:{value:(C=a.owner)==null?void 0:C.id,label:u("div",{className:"flex items-center",children:[e("img",{src:(S=a.owner)==null?void 0:S.avatar,alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),u("div",{children:[e("div",{className:"text-sm font-bold",children:((V=a.owner)==null?void 0:V.first_name)+" "+((F=a.owner)==null?void 0:F.last_name)}),e("div",{className:"text-xs text-gray-500",children:(D=a.owner)==null?void 0:D.email})]})]},(A=a.owner)==null?void 0:A.id)}}),"Contact Status":e(f,{id:"contact_status",name:"contact_status",onChange:({value:o})=>{l("contact_status",o)},className:"flex-1 ",options:c,defaultValue:c.find(o=>o.value==a.contact_status)})}};return e(y,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(N,{fields:g})})})},H=()=>{const s=_(),a=h(t=>t.contactForm),l=(t,c)=>{s(m({[t]:c}))},r=[{value:"none",label:"-None-"},{value:"waiting",label:"Waiting"},{value:"confirmed",label:"Confirmed"},{value:"rejected",label:"Rejected"}],i={"Contact Information":{Email:e("input",{id:"email",name:"email",className:"form-input flex-1",onChange:t=>l(t.target.name,t.target.value),defaultValue:a.email}),Mobile:e("input",{id:"mobile",name:"mobile",className:"form-input flex-1",onChange:t=>l(t.target.name,t.target.value),defaultValue:a.mobile}),Phone:e("input",{id:"phone",name:"phone",className:"form-input flex-1",onChange:t=>l(t.target.name,t.target.value),defaultValue:a.phone}),Department:e("input",{id:"department",name:"department",className:"form-input flex-1",onChange:t=>l(t.target.name,t.target.value),defaultValue:a.department}),"Asst Phone":e("input",{id:"asst_phone",name:"asst_phone",className:"form-input flex-1 disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0,onChange:t=>l(t.target.name,t.target.value),defaultValue:a.asst_phone}),"Home Phone":e("input",{id:"home_phone",name:"home_phone",className:"form-input flex-1 disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0,onChange:t=>l(t.target.name,t.target.value),defaultValue:a.home_phone}),"Other Phone":e("input",{id:"other_phone",name:"other_phone",className:"form-input flex-1",onChange:t=>l(t.target.name,t.target.value),defaultValue:a.other_phone}),Fax:e("input",{id:"fax",name:"fax",className:"form-input flex-1",onChange:t=>l(t.target.name,t.target.value),defaultValue:a.fax})},"":{"Last Activity Date":e($,{name:"last_activity_date",options:{dateFormat:"Y-m-d",position:"auto left",defaultDate:`${a.last_activity_date?new Date(a.last_activity_date):""}`},className:"form-input flex-1",value:a.last_activity_date?new Date(a.last_activity_date):"",onChange:(t,c)=>l("last_activity_date",c),defaultValue:a.last_activity_date}),"Reporting To":e("input",{id:"reporting_to",name:"reporting_to",className:"form-input flex-1 disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0,onChange:t=>l(t.target.name,t.target.value),defaultValue:a.reporting_to}),"LinkedIn Contact":e("input",{id:"linkedin",name:"linkedin",className:"form-input flex-1",onChange:t=>l(t.target.name,t.target.value),defaultValue:a.linkedin}),"Portal Access":e(f,{id:"portal_access",name:"portal_access",onChange:({value:t})=>{l("double_check_status",t)},className:"flex-1 ",options:r,defaultValue:r.find(t=>t.value==a.portal_access)})}};return e(y,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(N,{fields:i})})})},U=()=>{const s=_(),a=h(i=>i.contactForm),l=(i,t)=>{s(m({[i]:t}))},r={"Address Information":{"Mailing Country":e("input",{id:"mailing_country",name:"mailing_country",className:"form-input flex-1 ",onChange:i=>l(i.target.name,i.target.value),defaultValue:a.mailing_country}),"Mailing City":e("input",{id:"mailing_city",name:"mailing_city",className:"form-input flex-1 ",onChange:i=>l(i.target.name,i.target.value),defaultValue:a.mailing_city}),"Mailing Zip":e("input",{id:"mailing_code",name:"mailing_code",className:"form-input flex-1 ",onChange:i=>l(i.target.name,i.target.value),defaultValue:a.mailing_code})},"":{"Mailing State":e("input",{id:"mailing_state",name:"mailing_state",className:"form-input flex-1 ",onChange:i=>l(i.target.name,i.target.value),defaultValue:a.mailing_state}),"Mailing Street":e("input",{id:"mailing_street",name:"mailing_street",className:"form-input flex-1 ",onChange:i=>l(i.target.name,i.target.value),defaultValue:a.mailing_street})}};return e(y,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(N,{fields:r})})})},W=()=>{const s=_(),a=h(i=>i.contactForm),l=(i,t)=>{s(m({[i]:t}))},r={"Communication Details / History":{Description:e("textarea",{id:"description",rows:3,name:"description",className:"form-textarea flex-1",placeholder:"",defaultValue:a.description,onChange:i=>l(i.target.name,i.target.value)}),"LinkedIn Communication":e("textarea",{id:"linkedin_communication",rows:3,name:"linkedin_communication",className:"form-textarea flex-1",placeholder:"",defaultValue:a.linkedin_communication,onChange:i=>l(i.target.name,i.target.value)})}};return e(y,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(N,{fields:r})})})},K=()=>{var c,g,d,p,v,b;const s=_(),a=h(n=>n.contactForm),l=(n,C)=>{s(m({[n]:C}))},r=[{value:"none",label:"-None-"},{value:"no_activity",label:"No Activity"},{value:"more_1_year",label:"> 1 year Activity"},{value:"more_1_month",label:"> 1 month Activity"},{value:"regular_activity",label:"Regular Activity"}],i=[{value:"none",label:"-None-"},{value:"back_to_lead",label:"Back to lead"},{value:"converted_to_lead",label:"Converted to lead"},{value:"must_be_deleted",label:"Must be deleted"}],t={"Fields with Secondary Priority":{"Approved By":e(w,{isMulti:!1,id:"approved_by",placeholder:"Type at least 2 characters to search...",name:"approved_by_id",loadOptions:M,onChange:({value:n})=>{l("approved_by_id",n)},className:"flex-1",defaultValue:{value:(c=a.approved_by)==null?void 0:c.id,label:u("div",{className:"flex items-center",children:[e("img",{src:(g=a.approved_by)==null?void 0:g.avatar,alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),u("div",{children:[e("div",{className:"text-sm font-bold",children:((d=a.approved_by)==null?void 0:d.first_name)+" "+((p=a.approved_by)==null?void 0:p.last_name)}),e("div",{className:"text-xs text-gray-500",children:(v=a.approved_by)==null?void 0:v.email})]})]},(b=a.approved_by)==null?void 0:b.id)}}),"Books Contact":e("input",{id:"book_contact",type:"checkbox",name:"book_contact",className:"form-checkbox",onChange:n=>l(n.target.name,n.target.checked),checked:a.book_contact}),"Contact Activity":e(f,{id:"contact_activity",name:"contact_activity",onChange:({value:n})=>{l("contact_activity",n)},className:"flex-1",options:r,defaultValue:r.find(n=>n.value==a.contact_activity)}),Title:e("input",{id:"title",name:"title",className:"form-input flex-1 ",onChange:n=>l(n.target.name,n.target.value),defaultValue:a.title}),private_email:e("input",{id:"private_email",name:"private_email",className:"form-input flex-1 ",onChange:n=>l(n.target.name,n.target.value),defaultValue:a.private_email}),secondary_email:e("input",{id:"secondary_email",name:"secondary_email",className:"form-input flex-1 ",onChange:n=>l(n.target.name,n.target.value),defaultValue:a.secondary_email}),portal_operation_tag:e("input",{id:"portal_operation_tag",name:"portal_operation_tag",className:"form-input flex-1 ",onChange:n=>l(n.target.name,n.target.value),defaultValue:a.portal_operation_tag})},"":{"Email Opt Out":e("input",{id:"email_opt_out",type:"checkbox",name:"email_opt_out",className:"form-checkbox",onChange:n=>l(n.target.name,n.target.checked),checked:a.email_opt_out}),lead_reference:e("input",{id:"lead_reference",name:"lead_reference",className:"form-input flex-1 ",onChange:n=>l(n.target.name,n.target.value),defaultValue:a.lead_reference}),"Double Check Status":e(f,{id:"double_check_status",name:"double_check_status",onChange:({value:n})=>{l("double_check_status",n)},className:"flex-1",options:i,defaultValue:i.find(n=>n.value==a.double_check_status)}),DCheck:e("input",{id:"d_check",type:"checkbox",name:"d_check",className:"form-checkbox",onChange:n=>l(n.target.name,n.target.checked),checked:a.d_check})}};return e(y,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(N,{fields:t})})})},z=()=>u("div",{className:"mt-8 px-4",children:[e(G,{},"ContactDetailsSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(H,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(U,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(W,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(K,{})]}),ne=()=>{const s=h(d=>d.contactForm),a=_(),[l,r]=k.useState(!0),t=j().id,c=new O,g=async()=>{const d=await c.fetchSingleContact(t);if(d.status!=200)return;const p=d.data.data.contact;a(m(p))};return k.useEffect(()=>{a(E("Contact Edit"))}),k.useEffect(()=>{g().then(()=>{r(!1)})},[t]),k.useEffect(()=>{a(m({api:"updateSingleContact",redirectTo:"/contact/edit/:id",action:"edit"}))},[]),l?e(I,{}):u("div",{className:"px-4",children:[e(L,{formState:s,resetForm:T}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(z,{})})})]})};export{ne as default};
