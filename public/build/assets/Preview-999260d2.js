import{c as j,u as x,r as d,h as S,d as I,s as O,j as a,e as y,b as l,f as D,H as F,a as P,F as r}from"./main-cfd27acf.js";import{I as $}from"./InfoListComponent-401c9034.js";import{A as M,I as i}from"./InformationSectionPreview-8fb7776a.js";import{M as q}from"./MultipleLineSectionPreview-926932f3.js";import{A}from"./AttachmentSection-3760d3c6.js";import"./CommonIcons-8a302a15.js";const J=()=>{var b,u,p,f,h,v;const{hasPermission:m}=j(),c=x(),[n,g]=d.useState(!0),s=S().id,_=new P,e=I(t=>t.leadForm);d.useEffect(()=>{c(O("Lead Preview"))});const w=()=>{window.print()},L=async()=>{const t=await _.fetchSingleLead(s);if(t.status!=200)return;const o=t.data.data.lead;c(F(o))},N=[{value:"none",label:"-None-"},{value:"0.0 Cold lead / unqualified (CLU)",label:l(r,{children:[" ",a("span",{className:"inline-block w-4 h-4 mr-2 bg-gray-500 rounded-full"}),"0.0 Cold lead / unqualified (CLU)"]})},{value:"1.0 Cold lead qualified (CLQ)",label:l(r,{children:[" ",a("span",{className:"inline-block w-4 h-4 mr-2 bg-blue-300 rounded-full"}),"1.0 Cold lead qualified (CLQ)"]})},{value:"2.0 First contact made (FCM)",label:l(r,{children:[" ",a("span",{className:"inline-block w-4 h-4 mr-2 bg-purple-200 rounded-full"}),"2.0 First contact made (FCM)"]})},{value:"3.0 warm lead qualified (WLQ)",label:l(r,{children:[" ",a("span",{className:"inline-block w-4 h-4 mr-2 bg-orange-300 rounded-full"}),"3.0 warm lead qualified (WLQ)"]})},{value:"4.0 Hot lead (HLQ)",label:l(r,{children:[" ",a("span",{className:"inline-block w-4 h-4 mr-2 bg-orange-600 rounded-full"}),"4.0 Hot lead (HLQ)"]})},{value:"Close Lead / Lost Lead",label:l(r,{children:[" ",a("span",{className:"inline-block w-4 h-4 mr-2 bg-red-500 rounded-full"}),"Close Lead / Lost Lead"]})}],C=[{label:"Lead Status",value:(t=>{const o=N.find(k=>k.value===t);return o?o.label:t})(e.status)},{label:"Full Name",value:`${e.prefix_first_name??""} ${e.first_name??""} ${e.last_name??""}`},{label:"Email",value:a("a",{className:"text-primary",target:"_blank",rel:"noopener noreferrer",href:"mailto:"+e.email,children:e.email})},{label:"Company",value:e.company},{label:"Website",value:a("a",{className:"text-primary",target:"_blank",href:e.website,children:e.website})},{label:"Account Owner",value:`${((b=e.owner)==null?void 0:b.first_name)??""} ${((u=e.owner)==null?void 0:u.last_name)??""}`},{label:"Created By",value:`${((p=e.creator)==null?void 0:p.first_name)??""} ${((f=e.creator)==null?void 0:f.last_name)??""}`},{label:"Modified By",value:`${((h=e.modifier)==null?void 0:h.first_name)??""} ${((v=e.modifier)==null?void 0:v.last_name)??""}`}];return d.useEffect(()=>{L().then(()=>{g(!1)})},[s]),n?a(y,{}):!m("read-lead")||n?a(y,{}):l("div",{children:[a("div",{className:"flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6",children:a(M,{loading:n,hasPermission:m,modelId:s,exportTable:w,routeModel:"lead",permissionModel:"lead"})}),l("div",{className:"panel",children:[l("div",{className:"flex justify-between flex-wrap gap-4 px-4",children:[a("div",{className:"text-2xl font-semibold uppercase",children:"Lead"}),a("div",{className:"shrink-0",children:a("img",{src:D(e.image_data),alt:"Lead image",className:"w-20 ltr:ml-auto rtl:mr-auto"})})]}),a($,{data:C}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(i,{title:"Lead Information",leftObjects:[{label:"Website",value:a("a",{className:"text-primary",target:"_blank",href:e.website,children:e.website})},{label:"Lost Reason",value:e.lost_reason},{label:"Lost Reason Comment",value:e.lost_reason_comment},{label:"Lead Source",value:e.lead_source}],rightObjects:[{label:"Industry",value:e.industry},{label:"Email Opt Out",value:e.email_opt_out?"Yes":"No"},{label:"Company",value:e.company},{label:"Company Type",value:e.company_type}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(i,{title:"Contact Information",leftObjects:[{label:"First Name",value:e.first_name},{label:"Last Name",value:e.last_name},{label:"Phone",value:e.phone},{label:"Mobile",value:e.mobile},{label:"Email",value:a("a",{className:"text-primary",target:"_blank",rel:"noopener noreferrer",href:"mailto:"+e.email,children:e.email})}],rightObjects:[{label:"Job Description",value:e.job_description},{label:"Contact LinkedIn",value:e.linkedin_contact},{label:"Company LinkedIn",value:e.linkedin_company}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(i,{title:"Address Information",leftObjects:[{label:"City",value:e.city},{label:"Address",value:e.address},{label:"Zip Code",value:e.zip_code}],rightObjects:[{label:"Country",value:e.country},{label:"State",value:e.state}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(q,{sectionTitle:"Communication Details / History",data:[{label:"Description",value:e.description},{label:"Details and notes",value:e.detail_note},{label:"LinkedIn Communication",value:e.linkedin_communication}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(i,{title:"Fields with Secondary Priority",leftObjects:[{label:"No.of Employees",value:e.company_employee_count},{label:"Title",value:e.books_id_eur},{label:"Currency",value:e.currency}],rightObjects:[{label:"Lead Reference",value:e.exchange_rate},{label:"Job Position",value:e.job_position}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(i,{title:"Development information",leftObjects:[{label:"Imported Qualification Status",value:e.imported_qualification_status}],rightObjects:[{label:"Last Modified",value:e.last_modified},{label:"Created Date",value:e.created_date}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(A,{modelId:s,modelName:"lead"})]})]})};export{J as default};
