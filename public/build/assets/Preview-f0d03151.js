import{c as D,u as P,r as o,h as V,a as $,s as C,i as g,aO as n,b as a,d as N,j as d,f as T,e as A}from"./main-14f615f5.js";import{I as B}from"./InfoListComponent-87aca96b.js";import{A as L,I as r}from"./InformationSectionPreview-130d8c00.js";import{M}from"./MultipleLineSectionPreview-708fbff5.js";import"./CommonIcons-8e83bba2.js";const Z=()=>{var b,m,u,p,v,_,h,f,w,y;const{hasPermission:c}=D(),t=P(),[s,j]=o.useState(!0),i=V().id,k=new A,e=$(l=>l.vendorForm);o.useEffect(()=>{t(C("Vendor Preview"))});const x=()=>{window.print()},O=async()=>{const l=await k.fetchSingleVendor(i);if(l.status!=200)return;const S=l.data.data.vendor;t(n(S))};o.useEffect(()=>{e.iso_upload&&g("vendor","iso_upload",e.iso_upload).then(l=>{t(n({iso_upload_preview:l}))}),e.doc_upload&&g("vendor","doc_upload",e.doc_upload).then(l=>{t(n({doc_upload_preview:l}))})},[]);const I=[{label:"Vendor Name",value:e.vendor_name},{label:"Vendor Site",value:`${e.vendor_name??""} | ${e.city??""}`},{label:"Vendor Source",value:e.vendor_source},{label:"Vendor Type",value:e.vendor_type},{label:"Vendor Owner",value:`${((b=e.owner)==null?void 0:b.first_name)??""} ${((m=e.owner)==null?void 0:m.last_name)??""}`},{label:"Created By",value:`${((u=e.creator)==null?void 0:u.first_name)??""} ${((p=e.creator)==null?void 0:p.last_name)??""}`},{label:"Modified By",value:`${((v=e.modifier)==null?void 0:v.first_name)??""} ${((_=e.modifier)==null?void 0:_.last_name)??""}`}];return o.useEffect(()=>{O().then(()=>{j(!1)})},[i]),s?a(N,{}):!c("read-vendor")||s?a(N,{}):d("div",{children:[a("div",{className:"flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6",children:a(L,{loading:s,hasPermission:c,modelId:i,exportTable:x,routeModel:"vendor",permissionModel:"vendor"})}),d("div",{className:"panel",children:[d("div",{className:"flex justify-between flex-wrap gap-4 px-4",children:[a("div",{className:"text-2xl font-semibold uppercase",children:"Vendor"}),a("div",{className:"shrink-0",children:a("img",{src:T(e.image_data),alt:"vendor image",className:"w-20 ltr:ml-auto rtl:mr-auto"})})]}),a(B,{data:I}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(r,{title:"Vendor Information",leftObjects:[{label:"Currency",value:e.currency},{label:"Contracts",value:e.contract},{label:"SL Contains all MFRs",value:e.sl_contains_all_mfrs?"Yes":"No"},{label:"Approve status",value:e.approved_status},{label:"Business Vendor",value:e.business_vendor?"Yes":"No"}],rightObjects:[{label:"Approved by",value:`${((h=e.approvedBy)==null?void 0:h.first_name)??""} ${((f=e.approvedBy)==null?void 0:f.last_name)??""}`},{label:"ISO Upload",value:a("a",{disabled:!e.iso_upload,className:"btn btn-sm btn-outline-primary cursor-pointer",href:e.iso_upload_preview??e.iso_upload,target:"__blank",children:"Download"})},{label:"Doc Upload",value:a("a",{disabled:!e.doc_upload,className:"btn btn-sm btn-outline-primary cursor-pointer",href:e.doc_upload_preview??e.doc_upload,target:"__blank",children:"Download"})},{label:"Vendor Number",value:e.vendor_number},{label:"Parent Vendor",value:`${((w=e.parent)==null?void 0:w.first_name)??""} ${((y=e.parent)==null?void 0:y.last_name)??""}`},{label:"Portal Access",value:e.portal_access}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(r,{title:"Contact Information",leftObjects:[{label:"First Name",value:e.first_name},{label:"Last Name",value:e.last_name},{label:"Phone",value:e.phone},{label:"Mobile",value:e.mobile}],rightObjects:[{label:"Website",value:a("a",{className:"text-primary",target:"_blank",href:e.website,children:e.website})},{label:"Email",value:a("a",{className:"text-primary",target:"_blank",rel:"noopener noreferrer",href:"mailto:"+e.email,children:e.email})},{label:"LinkedIn",value:a("a",{className:"text-primary",target:"_blank",href:e.linkedin,children:e.linkedin})}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(r,{title:"Terms and Shipping",leftObjects:[{label:"Incoterms",value:e.incoterms},{label:"Payment Terms",value:e.payment_terms},{label:"Credit Line",value:e.credit_line}],rightObjects:[{label:"VAT No",value:e.vat_no},{label:"Forwarder",value:e.forwarder},{label:"Forwarder Account no",value:e.forwarder_account_no}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(r,{title:"Address Information",leftObjects:[{label:"Street",value:e.street},{label:"City",value:e.city},{label:"Zip Code",value:e.zip_code}],rightObjects:[{label:"State",value:e.state},{label:"Country",value:e.country}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(M,{sectionTitle:"Description Information",data:[{label:"Description",value:e.description}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(r,{title:"Technical information",leftObjects:[{label:"BOM/Excess Total Uploading Rows",value:e.bom_excess_total_rows}],rightObjects:[]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(r,{title:"API Data",leftObjects:[{label:"Octopart ID",value:e.octopart_id}],rightObjects:[{label:"ZohoBooksID",value:e.zoho_book_id}]})]})]})};export{Z as default};
