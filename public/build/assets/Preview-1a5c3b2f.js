import{c as S,u as x,r as s,h as I,d as D,s as O,j as a,e as g,b as l,f as F,i as y,Q as P,a as E,F as i}from"./main-df5dc7ed.js";import{I as M}from"./InfoListComponent-0cf3cf84.js";import{A as $}from"./ActionButtonsPreview-b8a965fd.js";import{I as o}from"./InformationSectionPreview-f66ace2c.js";import{M as Q}from"./MultipleLineSectionPreview-31bef909.js";import{A as q}from"./AttachmentSection-2b18bb8f.js";import{G as A}from"./GenerateCallList-8e7ca3b6.js";import{G as H}from"./GenerateEmailLogList-056f10ce.js";import"./CommonIcons-4af903f4.js";import"./sortBy-4d9efad5.js";import"./_baseIsEqual-9290e441.js";const ee=()=>{var b,u,f,p,h,v;const{hasPermission:m}=S(),c=x(),[d,L]=s.useState(!0),r=I().id,_=new E,e=D(t=>t.leadForm);s.useState(!1),s.useState(null),s.useEffect(()=>{c(O("Lead Preview"))});const w=()=>{window.print()},N=async()=>{const t=await _.fetchSingleLead(r);if(t.status!=200)return;const n=t.data.data.lead;c(P(n))},C=[{value:"none",label:"-None-"},{value:"0.0 Cold lead / unqualified (CLU)",label:l(i,{children:[" ",a("span",{className:"inline-block w-4 h-4 mr-2 bg-gray-500 rounded-full"}),"0.0 Cold lead / unqualified (CLU)"]})},{value:"1.0 Cold lead qualified (CLQ)",label:l(i,{children:[" ",a("span",{className:"inline-block w-4 h-4 mr-2 bg-blue-300 rounded-full"}),"1.0 Cold lead qualified (CLQ)"]})},{value:"2.0 First contact made (FCM)",label:l(i,{children:[" ",a("span",{className:"inline-block w-4 h-4 mr-2 bg-purple-200 rounded-full"}),"2.0 First contact made (FCM)"]})},{value:"3.0 warm lead qualified (WLQ)",label:l(i,{children:[" ",a("span",{className:"inline-block w-4 h-4 mr-2 bg-orange-300 rounded-full"}),"3.0 warm lead qualified (WLQ)"]})},{value:"4.0 Hot lead (HLQ)",label:l(i,{children:[" ",a("span",{className:"inline-block w-4 h-4 mr-2 bg-orange-600 rounded-full"}),"4.0 Hot lead (HLQ)"]})},{value:"Close Lead / Lost Lead",label:l(i,{children:[" ",a("span",{className:"inline-block w-4 h-4 mr-2 bg-red-500 rounded-full"}),"Close Lead / Lost Lead"]})}],k=[{label:"Lead Status",value:(t=>{const n=C.find(j=>j.value===t);return n?n.label:t})(e.status)},{label:"Full Name",value:`${e.prefix_first_name??""} ${e.first_name??""} ${e.last_name??""}`},{label:"Email",value:a("a",{className:"text-primary",target:"_blank",rel:"noopener noreferrer",href:"mailto:"+e.email,children:e.email})},{label:"Company",value:e.company},{label:"Website",value:a("a",{className:"text-primary",target:"_blank",href:e.website,children:e.website})},{label:"Account Owner",value:`${((b=e.owner)==null?void 0:b.first_name)??""} ${((u=e.owner)==null?void 0:u.last_name)??""}`},{label:"Created By",value:`${((f=e.creator)==null?void 0:f.first_name)??""} ${((p=e.creator)==null?void 0:p.last_name)??""}`},{label:"Modified By",value:`${((h=e.modifier)==null?void 0:h.first_name)??""} ${((v=e.modifier)==null?void 0:v.last_name)??""}`}];return s.useEffect(()=>{N().then(()=>{L(!1)})},[r]),d?a(g,{}):!m("read-lead")||d?a(g,{}):l("div",{children:[a("div",{className:"flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6",children:a($,{loading:d,hasPermission:m,modelId:r,exportTable:w,routeModel:"lead",permissionModel:"lead"})}),l("div",{className:"panel",children:[l("div",{className:"flex justify-between flex-wrap gap-4 px-4",children:[a("div",{className:"text-2xl font-semibold uppercase",children:"Lead"}),a("div",{className:"shrink-0",children:a("img",{src:F(e.image_data),alt:"Lead image",className:"w-20 ltr:ml-auto rtl:mr-auto"})})]}),a(M,{data:k}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(o,{title:"Lead Information",leftObjects:[{label:"Website",value:a("a",{className:"text-primary",target:"_blank",href:e.website,children:e.website})},{label:"Lost Reason",value:e.lost_reason},{label:"Lost Reason Comment",value:e.lost_reason_comment},{label:"Lead Source",value:e.lead_source}],rightObjects:[{label:"Industry",value:e.industry},{label:"Email Opt Out",value:e.email_opt_out?"Yes":"No"},{label:"Company",value:e.company},{label:"Company Type",value:e.company_type}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(o,{title:"Contact Information",leftObjects:[{label:"First Name",value:e.first_name},{label:"Last Name",value:e.last_name},{label:"Phone",value:e.phone},{label:"Mobile",value:e.mobile},{label:"Email",value:a("a",{className:"text-primary",target:"_blank",rel:"noopener noreferrer",href:"mailto:"+e.email,children:e.email})}],rightObjects:[{label:"Job Description",value:e.job_description},{label:"Contact LinkedIn",value:e.linkedin_contact},{label:"Company LinkedIn",value:e.linkedin_company}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(o,{title:"Address Information",leftObjects:[{label:"City",value:e.city},{label:"Zip Code",value:e.zip_code}],rightObjects:[{label:"Country",value:e.country},{label:"State",value:e.state}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(Q,{sectionTitle:"Communication Details / History",data:[{label:"Description",value:e.description},{label:"Details and notes",value:e.detail_note},{label:"LinkedIn Communication",value:e.linkedin_communication}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(o,{title:"Fields with Secondary Priority",leftObjects:[{label:"No.of Employees",value:e.no_of_employees},{label:"Currency",value:e.currency}],rightObjects:[{label:"Lead Reference",value:e.exchange_rate},{label:"Job Position",value:e.job_position}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(o,{title:"Development information",leftObjects:[{label:"Imported Qualification Status",value:e.imported_qualification_status}],rightObjects:[{label:"Last Modified",value:e.last_modified},{label:"Created Date",value:e.created_date}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(o,{title:"Date information",leftObjects:[{label:"Created Date",value:y(e.created_at)}],rightObjects:[{label:"Modified Date",value:y(e.updated_at)}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(q,{modelId:r,modelName:"lead"}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(A,{permissionName:"read-lead",type:"call",routeName:"fetchLeadCall",modelId:r,title:"Call Logs"}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(H,{permissionName:"read-lead",type:"email-log",routeName:"fetchLeadEmailLogs",modelId:r,title:"Email Logs"})]})]})};export{ee as default};