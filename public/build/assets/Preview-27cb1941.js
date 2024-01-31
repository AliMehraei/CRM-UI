import{c as D,u as P,r,h as I,d as L,s as S,j as a,N as O,e as g,b as n,f as M,i as y,y as $,a as E}from"./main-09c635dc.js";import{I as A}from"./InfoListComponent-53c026d7.js";import{A as T}from"./ActionButtonsPreview-e92736d6.js";import{I as l}from"./InformationSectionPreview-70bad941.js";import{M as F}from"./MultipleLineSectionPreview-a0b3cc5f.js";import{A as B}from"./AttachmentSection-90863710.js";import{G as R}from"./GenerateEmailLogList-1ca1b725.js";import"./CommonIcons-a7d39a6f.js";import"./sortBy-6ea67a6d.js";import"./_baseIsEqual-82321e50.js";const W=()=>{var m,b,d,u,p,h,v,f,_;const{hasPermission:s}=D(),c=P(),[o,N]=r.useState(!0),t=I().id,k=new E,e=L(i=>i.contactForm);r.useEffect(()=>{c(S("Contact Preview"))});const w=()=>{window.print()},C=async()=>{const i=await k.fetchSingleContact(t);if(i.status!=200)return;const x=i.data.data.contact;c($(x))},j=[{label:"First Name",value:`${e.prefix_first_name} ${e.first_name}`},{label:"Last Name",value:`${e.last_name}`},{label:"Job Description",value:e.job_description},{label:"Contact Type",value:e.contact_type},{label:"Account Name",value:a(O,{to:`/account/preview/${e.account_id}`,className:" hover:text-info",children:(m=e.account)==null?void 0:m.account_name})},{label:"Contact Source",value:e.contact_source},{label:"Contact Owner",value:`${(b=e.owner)==null?void 0:b.first_name} ${(d=e.owner)==null?void 0:d.last_name}`},{label:"Contact Status",value:e.contact_status},{label:"Created By",value:`${(u=e.creator)==null?void 0:u.first_name} ${(p=e.creator)==null?void 0:p.last_name}`},{label:"Modified By",value:`${(h=e.modifier)==null?void 0:h.first_name} ${(v=e.modifier)==null?void 0:v.last_name}`}];return r.useEffect(()=>{C().then(()=>{N(!1)})},[t]),o?a(g,{}):!s("read-contact")||o?a(g,{}):n("div",{children:[a("div",{className:"flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6",children:a(T,{loading:o,hasPermission:s,modelId:t,exportTable:w,routeModel:"contact",permissionModel:"contact"})}),n("div",{className:"panel",children:[n("div",{className:"flex justify-between flex-wrap gap-4 px-4",children:[a("div",{className:"text-2xl font-semibold uppercase",children:"Contact"}),a("div",{className:"shrink-0",children:a("img",{src:M(e.image_data),alt:"Contact image",className:"w-20 ltr:ml-auto rtl:mr-auto"})})]}),a(A,{data:j}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"Contact Information",leftObjects:[{label:"Email",value:a("a",{className:"text-primary",target:"_blank",rel:"noopener noreferrer",href:"mailto:"+e.email,children:e.email})},{label:"Mobile",value:e.mobile},{label:"Phone",value:e.phone},{label:"Department",value:e.department},{label:"Asst Phone",value:e.asst_phone},{label:"Home Phone",value:e.home_phone},{label:"Other Phone",value:e.other_phone},{label:"Fax",value:e.fax}],rightObjects:[{label:"Reporting To",value:e.reporting_to},{label:"LinkedIn Contact",value:e.linkedin},{label:"Portal Access",value:e.portal_access}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"Contact Information",leftObjects:[{label:"First Name",value:e.first_name},{label:"Last Name",value:e.last_name},{label:"Phone",value:e.phone},{label:"Mobile",value:e.mobile},{label:"Email",value:a("a",{className:"text-primary",target:"_blank",rel:"noopener noreferrer",href:"mailto:"+e.email,children:e.email})}],rightObjects:[{label:"Job Description",value:e.job_description},{label:"Contact LinkedIn",value:e.linkedin_contact},{label:"Company LinkedIn",value:e.linkedin_company}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"Address Information",leftObjects:[{label:"Mailing Country",value:e.mailing_country},{label:"Mailing City",value:e.mailing_city},{label:"Mailing Zip",value:e.mailing_code}],rightObjects:[{label:"Mailing State",value:e.mailing_state},{label:"Mailing Street",value:e.mailing_street}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(F,{sectionTitle:"Communication Details / History",data:[{label:"Description",value:e.description},{label:"LinkedIn Communication",value:e.linkedin_communication}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"Fields with Secondary Priority",leftObjects:[{label:"Approved By",value:`${((f=e.approved_by)==null?void 0:f.first_name)??"-"} ${((_=e.approved_by)==null?void 0:_.last_name)??"-"}`},{label:"Books Contact",value:e.book_contact?"Yes":"No"},{label:"Contact Activity",value:e.contact_activity},{label:"Title",value:e.title},{label:"Private Email",value:e.private_email},{label:"Secondary Email",value:e.secondary_email},{label:"Portal Operation Tag",value:e.portal_operation_tag}],rightObjects:[{label:"Email Opt Out",value:e.email_opt_out?"Yes":"No"},{label:"Lead Reference",value:e.lead_reference},{label:"Double Check Status",value:e.double_check_status},{label:"D Check",value:e.d_check?"Yes":"No"}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"Date information",leftObjects:[{label:"Created Date",value:y(e.created_at)}],rightObjects:[{label:"Modified Date",value:y(e.updated_at)}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(B,{modelId:t,modelName:"contact"}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(R,{permissionName:"read-contact",type:"email-log",routeName:"fetchContactEmailLogs",modelId:t,title:"Email Logs"})]})]})};export{W as default};
