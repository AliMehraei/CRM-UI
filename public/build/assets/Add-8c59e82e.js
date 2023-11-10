import{e as _,u,a as e,F as m,q as c,j as g,t as C,l as p,n as N,m as v,c as y,r as h,s as k,v as f,L as S}from"./main-22663fbf.js";import{G as d,A as w}from"./GenerateFields-d6e292b2.js";/* empty css                  */import{S as r}from"./react-select.esm-d04eef86.js";import{I as A}from"./ImageUploadComponent-72083264.js";import{F}from"./index-008d6758.js";import"./index-f85a6b97.js";import"./ClearButtonComponent-29b9f612.js";const D=()=>{const s=_(o=>o.contactForm),t=u(),i=(o,x)=>{t(c({[o]:x}))};return e(m,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(d,{fields:{"Contact Details":{"Contact Image":e(A,{formState:s,modelName:"contact",id:"image",formAttribute:"image",updateFormData:c}),"First Name":g("div",{className:"flex",children:[e(r,{id:"prefix_first_name",name:"prefix_first_name",onChange:({value:o})=>{i("prefix_first_name",o)},className:"flex-none w-32 mr-2",options:C}),e("input",{id:"first_name",required:!0,name:"first_name",className:"form-input flex-1 ",onChange:o=>i(o.target.name,o.target.value)})]}),"Last Name":e("input",{id:"last_name",required:!0,name:"last_name",className:"form-input flex-1 ",onChange:o=>i(o.target.name,o.target.value)}),"Job Description":e(r,{id:"job_description",name:"job_description",onChange:({value:o})=>{i("job_description",o)},className:"flex-1",options:[{value:"none",label:"-None-"},{value:"buyer",label:"Buyer"},{value:"operative_buyer",label:"Operative Buyer"},{value:"strategic_buyer",label:"Strategic Buyer"},{value:"project_buyer",label:"Project Buyer"},{value:"commodity_buyer",label:"Commodity Buyer"},{value:"team_leader",label:"Team Leader"},{value:"purchasing_manager",label:"Purchasing Manager"},{value:"purchasing_director",label:"Purchasing Director"},{value:"director",label:"Director"},{value:"developer",label:"Developer"},{value:"sales",label:"Sales"}]}),"Contact Type":e(r,{id:"contact_type",name:"contact_type",onChange:({value:o})=>{i("double_check_status",o)},className:"flex-1 disabled",isDisabled:!0,defaultValue:{value:"none",label:"-None-"}})},"":{"Account Name":e(p,{defaultOptions:!0,isMulti:!1,required:!0,id:"account_id",placeholder:"Type at least 2 characters to search...",name:"account_id",loadOptions:N,onChange:({value:o})=>{i("account_id",o)},className:"flex-1"}),"Contact Source":e(r,{id:"contact_source",name:"cocontact_source",onChange:({value:o})=>{i("contact_source",o)},className:"flex-1 ",options:[{value:"none",label:"-None-"},{value:"ceo_connections",label:"CEO connections"},{value:"client_tipp",label:"Client Tipp"},{value:"competitor_tipp",label:"Competitor Tipp"},{value:"externe_vermittlung",label:"Externe Vermittlung"},{value:"fachtagung",label:"Fachtagung"},{value:"google_ad_campaign_sem",label:"Google Ad campaign SEM"},{value:"google_seo",label:"Google SEO"},{value:"internet_recherche",label:"Internetrecherche"},{value:"lead_called_alpyn",label:"Lead called ALPYN"},{value:"linkedin_ads",label:"LinkedIn Ads"},{value:"linkedin_social_selling",label:"LinkedIn Social selling activity"},{value:"messe",label:"Messe"},{value:"messe_at",label:"Messe AT"},{value:"messe_ch",label:"Messe CH"},{value:"messe_de",label:"Messe DE"},{value:"messe_ita",label:"Messe ITA"},{value:"netcomponents",label:"Netcomponents"},{value:"networking_linkedin",label:"Networking Linkedin"},{value:"networking_offline",label:"Networking offline"},{value:"online_events",label:"Online Events (b2bmatch e.g)"},{value:"online_messen",label:"Online Messen"},{value:"others",label:"Others"},{value:"portal_access_request",label:"Portal Access request"},{value:"reseller_tipp",label:"Reseller Tipp"},{value:"sales_activity_general",label:"Sales activity by general Assistant (BDR / SDR)"},{value:"sales_activity_ita",label:"Sales activity by ITA Assistent (BDR / SDR)"},{value:"team_connections",label:"Team Connections"},{value:"website_request",label:"Website request"}],defaultValue:{value:"none",label:"-None-"}}),"Contact Owner":e(p,{defaultOptions:!0,isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:v,onChange:({value:o})=>{i("owner_id",o)},className:"flex-1"}),"Contact Status":e(r,{id:"contact_status",name:"contact_status",onChange:({value:o})=>{i("contact_status",o)},className:"flex-1 ",options:[{value:"none",label:"-None-"},{value:"not_qualified",label:"Nicht qualifiziert"},{value:"prequalified",label:"Vorqualifiziert"},{value:"contact_future",label:"Zukünftig kontaktieren"},{value:"not_contacted",label:"Nicht kontaktiert"},{value:"contact_attempt",label:"Kontaktversuch"},{value:"cold_call",label:"Cold Call"},{value:"follow_up",label:"Follow Up"},{value:"objection_handling",label:"Einwandbehandlung"},{value:"rfq",label:"RFQ"},{value:"quote",label:"Quote"},{value:"sales_order",label:"Sales Order"},{value:"worthless_contact",label:"Wertloser Kontakt"},{value:"lost_contact",label:"Verlorener Kontakt"}],defaultValue:{value:"none",label:"-None-"}})}}})})})},M=()=>{const s=u(),t=(a,l)=>{s(c({[a]:l}))};return e(m,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(d,{fields:{"Contact Information":{Email:e("input",{id:"email",name:"email",className:"form-input flex-1",onChange:a=>t(a.target.name,a.target.value)}),Mobile:e("input",{id:"mobile",name:"mobile",className:"form-input flex-1",onChange:a=>t(a.target.name,a.target.value)}),Phone:e("input",{id:"phone",name:"phone",className:"form-input flex-1",onChange:a=>t(a.target.name,a.target.value)}),Department:e("input",{id:"department",name:"department",className:"form-input flex-1",onChange:a=>t(a.target.name,a.target.value)}),"Asst Phone":e("input",{id:"asst_phone",name:"asst_phone",className:"form-input flex-1 disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0,onChange:a=>t(a.target.name,a.target.value)}),"Home Phone":e("input",{id:"home_phone",name:"home_phone",className:"form-input flex-1 disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0,onChange:a=>t(a.target.name,a.target.value)}),"Other Phone":e("input",{id:"other_phone",name:"other_phone",className:"form-input flex-1",onChange:a=>t(a.target.name,a.target.value)}),Fax:e("input",{id:"fax",name:"fax",className:"form-input flex-1",onChange:a=>t(a.target.name,a.target.value)})},"":{"Last Activity Date":e(F,{name:"last_activity_date",options:{dateFormat:"Y-m-d",position:"auto left"},value:"",className:"form-input flex-1",onChange:(a,l)=>t("last_activity_date",l)}),"Reporting To":e("input",{id:"reporting_to",name:"reporting_to",className:"form-input flex-1 disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0,onChange:a=>t(a.target.name,a.target.value)}),"LinkedIn Contact":e("input",{id:"linkedin",name:"linkedin",className:"form-input flex-1",onChange:a=>t(a.target.name,a.target.value)}),"Portal Access":e(r,{id:"portal_access",name:"portal_access",onChange:({value:a})=>{t("portal_access",a)},className:"flex-1 ",options:[{value:"none",label:"-None-"},{value:"waiting",label:"Waiting"},{value:"confirmed",label:"Confirmed"},{value:"rejected",label:"Rejected"}],defaultValue:{value:"none",label:"-None-"}})}}})})})},O=()=>{const s=u(),t=(n,a)=>{s(c({[n]:a}))};return e(m,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(d,{fields:{"Address Information":{"Mailing Country":e("input",{id:"mailing_country",name:"mailing_country",className:"form-input flex-1 ",onChange:n=>t(n.target.name,n.target.value)}),"Mailing City":e("input",{id:"mailing_city",name:"mailing_city",className:"form-input flex-1 ",onChange:n=>t(n.target.name,n.target.value)}),"Mailing Zip":e("input",{id:"mailing_code",name:"mailing_code",className:"form-input flex-1 ",onChange:n=>t(n.target.name,n.target.value)})},"":{"Mailing State":e("input",{id:"mailing_state",name:"mailing_state",className:"form-input flex-1 ",onChange:n=>t(n.target.name,n.target.value)}),"Mailing Street":e("input",{id:"mailing_street",name:"mailing_street",className:"form-input flex-1 ",onChange:n=>t(n.target.name,n.target.value)})}}})})})},j=()=>{const s=u(),t=(n,a)=>{s(c({[n]:a}))};return e(m,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(d,{fields:{"Communication Details / History":{Description:e("textarea",{id:"description",rows:3,name:"description",className:"form-textarea flex-1",placeholder:"",onChange:n=>t(n.target.name,n.target.value)}),"LinkedIn Communication":e("textarea",{id:"linkedin_communication",rows:3,name:"linkedin_communication",className:"form-textarea flex-1",placeholder:"",onChange:n=>t(n.target.name,n.target.value)})}}})})})},T=()=>{const s=u(),t=(l,b)=>{s(c({[l]:b}))};return e(m,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(d,{fields:{"Fields with Secondary Priority":{"Approved By":e(p,{defaultOptions:!0,isMulti:!1,id:"approved_by",placeholder:"Type at least 2 characters to search...",name:"approved_by_id",loadOptions:v,onChange:({value:l})=>{t("approved_by_id",l)},className:"flex-1"}),"Books Contact":e("input",{id:"book_contact",type:"checkbox",name:"book_contact",className:"form-checkbox",onChange:l=>t(l.target.name,l.target.checked)}),"Contact Activity":e(r,{id:"contact_activity",name:"contact_activity",onChange:({value:l})=>{t("contact_activity",l)},className:"flex-1",options:[{value:"none",label:"-None-"},{value:"no_activity",label:"No Activity"},{value:"more_1_year",label:"> 1 year Activity"},{value:"more_1_month",label:"> 1 month Activity"},{value:"regular_activity",label:"Regular Activity"}]}),Title:e("input",{id:"title",name:"title",className:"form-input flex-1 ",onChange:l=>t(l.target.name,l.target.value)}),"Private Email":e("input",{id:"private_email",name:"private_email",className:"form-input flex-1 ",onChange:l=>t(l.target.name,l.target.value)}),"Secondary Email":e("input",{id:"secondary_email",name:"secondary_email",className:"form-input flex-1 ",onChange:l=>t(l.target.name,l.target.value)}),"Portal Operation Tag":e("input",{id:"portal_operation_tag",name:"portal_operation_tag",className:"form-input flex-1 ",onChange:l=>t(l.target.name,l.target.value)})},"":{"Email Opt Out":e("input",{id:"email_opt_out",type:"checkbox",name:"email_opt_out",className:"form-checkbox",onChange:l=>t(l.target.name,l.target.checked)}),"Lead Reference":e("input",{id:"lead_reference",name:"lead_reference",className:"form-input flex-1 ",onChange:l=>t(l.target.name,l.target.value)}),"Double Check Status":e(r,{id:"double_check_status",name:"double_check_status",onChange:({value:l})=>{t("double_check_status",l)},className:"flex-1",options:[{value:"none",label:"-None-"},{value:"back_to_lead",label:"Back to lead"},{value:"converted_to_lead",label:"Converted to lead"},{value:"must_be_deleted",label:"Must be deleted"}]}),DCheck:e("input",{id:"d_check",type:"checkbox",name:"d_check",className:"form-checkbox",onChange:l=>t(l.target.name,l.target.checked)})}}})})})},P=()=>g("div",{className:"mt-8 px-4",children:[e(D,{},"ContactDetailsSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(M,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(O,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(j,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(T,{})]}),W=()=>{const{hasPermission:s}=y(),t=_(n=>n.contactForm),i=u();return h.useEffect(()=>{i(k("Contact Add"))}),h.useEffect(()=>{i(f())},[]),s("create-contact")?g("div",{className:"px-4",children:[e(w,{formState:t,resetForm:f}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(P,{})})})]}):e(S,{})};export{W as default};
