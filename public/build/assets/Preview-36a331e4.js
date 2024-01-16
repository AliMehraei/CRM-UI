import{c as P,u as C,r as s,h as T,d as $,s as D,j as a,e as g,b as n,f as L,aT as M,a as B}from"./main-38fe5343.js";import{I as F}from"./InfoListComponent-5478568b.js";import{A as E,I as r}from"./InformationSectionPreview-c33d83be.js";import{M as U}from"./MultipleLineSectionPreview-c762b0ac.js";import{A as R}from"./AttachmentSection-80fb3b61.js";import{A as w}from"./AttachmentDownloadButton-b4e3596e.js";import{T as N}from"./TableSectionPreview-b4585c5d.js";import"./CommonIcons-7619afcd.js";const Q=()=>{var m,c,b,u,v,p,h,f,_,y;const{hasPermission:i}=P(),d=C(),[o,k]=s.useState(!0),t=T().id,S=new B,e=$(l=>l.vendorForm);s.useEffect(()=>{d(D("Vendor Preview"))});const j=()=>{window.print()},I=async()=>{const l=await S.fetchSingleVendor(t);if(l.status!=200)return;const V=l.data.data.vendor;d(M(V))},x=[{label:"Vendor Name",value:e.vendor_name},{label:"Vendor Site",value:`${e.vendor_name??""} | ${e.city??""}`},{label:"Vendor Source",value:e.vendor_source},{label:"Vendor Type",value:e.vendor_type},{label:"Vendor Owner",value:`${((m=e.owner)==null?void 0:m.first_name)??""} ${((c=e.owner)==null?void 0:c.last_name)??""}`},{label:"Created By",value:`${((b=e.creator)==null?void 0:b.first_name)??""} ${((u=e.creator)==null?void 0:u.last_name)??""}`},{label:"Modified By",value:`${((v=e.modifier)==null?void 0:v.first_name)??""} ${((p=e.modifier)==null?void 0:p.last_name)??""}`}],O=[{key:"name",label:"Manufacturer Name"}],A=[{key:"name",label:"Manufacturer Name"}];return s.useEffect(()=>{I().then(()=>{k(!1)})},[t]),o?a(g,{}):!i("read-vendor")||o?a(g,{}):n("div",{children:[a("div",{className:"flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6",children:a(E,{loading:o,hasPermission:i,modelId:t,exportTable:j,routeModel:"vendor",permissionModel:"vendor"})}),n("div",{className:"panel",children:[n("div",{className:"flex justify-between flex-wrap gap-4 px-4",children:[a("div",{className:"text-2xl font-semibold uppercase",children:"Vendor"}),a("div",{className:"shrink-0",children:a("img",{src:L(e.image_data),alt:"vendor image",className:"w-20 ltr:ml-auto rtl:mr-auto"})})]}),a(F,{data:x}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(r,{title:"Vendor Information",leftObjects:[{label:"Currency",value:e.currency},{label:"Contracts",value:e.contract},{label:"SL Contains all MFRs",value:e.sl_contains_all_mfrs?"Yes":"No"},{label:"Approve status",value:e.approved_status},{label:"Business Vendor",value:e.business_vendor?"Yes":"No"}],rightObjects:[{label:"Approved by",value:`${((h=e.approvedBy)==null?void 0:h.first_name)??""} ${((f=e.approvedBy)==null?void 0:f.last_name)??""}`},{label:"ISO Upload",value:a(w,{formAttribute:"iso_upload",modelName:"vendor",formState:e})},{label:"Doc Upload",value:a(w,{formAttribute:"doc_upload",modelName:"vendor",formState:e})},{label:"Vendor Number",value:e.vendor_number},{label:"Parent Vendor",value:`${((_=e.parent)==null?void 0:_.first_name)??""} ${((y=e.parent)==null?void 0:y.last_name)??""}`},{label:"Portal Access",value:e.portal_access}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(r,{title:"Contact Information",leftObjects:[{label:"First Name",value:e.first_name},{label:"Last Name",value:e.last_name},{label:"Phone",value:e.phone},{label:"Mobile",value:e.mobile}],rightObjects:[{label:"Website",value:a("a",{className:"text-primary",target:"_blank",href:e.website,children:e.website})},{label:"Email",value:a("a",{className:"text-primary",target:"_blank",rel:"noopener noreferrer",href:"mailto:"+e.email,children:e.email})},{label:"LinkedIn",value:a("a",{className:"text-primary",target:"_blank",href:e.linkedin,children:e.linkedin})}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(r,{title:"Terms and Shipping",leftObjects:[{label:"Incoterms",value:e.incoterms},{label:"Payment Terms",value:e.payment_terms},{label:"Credit Line",value:e.credit_line}],rightObjects:[{label:"VAT No",value:e.vat_no},{label:"Forwarder",value:e.forwarder},{label:"Forwarder Account no",value:e.forwarder_account_no}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(r,{title:"Address Information",leftObjects:[{label:"Street",value:e.street},{label:"City",value:e.city},{label:"Zip Code",value:e.zip_code}],rightObjects:[{label:"State",value:e.state},{label:"Country",value:e.country}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(U,{sectionTitle:"Description Information",data:[{label:"Description",value:e.description}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(r,{title:"Technical information",leftObjects:[{label:"BOM/Excess Total Uploading Rows",value:e.bom_excess_total_rows}],rightObjects:[]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(r,{title:"API Data",leftObjects:[{label:"Octopart ID",value:e.octopart_id}],rightObjects:[{label:"ZohoBooksID",value:e.zoho_book_id}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(N,{title:"Vendor Strong Lines Items",items:e.strong_lines,columns:O}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(N,{title:"Vendor Line Cards Items",items:e.line_cards,columns:A}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(R,{modelId:t,modelName:"vendor"})]})]})};export{Q as default};
