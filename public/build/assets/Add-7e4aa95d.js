import{a as d,u as c,d as m,b as a,F as f,ad as s,j as b,c as F,r as S,s as k,f as A,ae as I}from"./main-d50c1b5f.js";import{G as p,A as T}from"./GenerateFields-58c5ac0d.js";import{A as u}from"./react-select-async.esm-e52329c5.js";import{S as h}from"./react-select.esm-979cfe87.js";import{h as v,s as _,a as V,P as D}from"./CommonFunctions-43750655.js";import"./sweetalert2.all-3ffe5e63.js";import"./Select-aecb2a80.esm-ecfd9304.js";const j=()=>{d(e=>e.vendorForm);const r=c();new m;const n=(e,l)=>{r(s({[e]:l}))};return a(f,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(p,{fields:{"Contact Information":{"First Name":a("input",{id:"primary_first_name",name:"primary_first_name",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),Phone:a("input",{id:"phone",required:!0,name:"phone",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),email:a("input",{id:"email",required:!0,name:"email",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),linkedin:a("input",{id:"linkedin",name:"linkedin",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)})},"":{"Last Name":a("input",{id:"primary_last_name",name:"primary_last_name",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),Mobile:a("input",{id:"mobile",name:"mobile",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),Website:a("input",{id:"website",name:"website",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)})}}})})})},O=()=>{const r=c(),n=new m,i=d(t=>t.vendorForm),e=(t,o)=>{r(s({[t]:o}))},l=async t=>{const o="id",w="vendor_name",x=await n.searchVendor({query:t});if(x.status)return x.data.data.map(g=>({value:g[o],label:a("div",{className:"flex items-center",children:a("div",{children:a("div",{className:"text-sm font-bold",children:g[w]})})},g[o])}))},N=[{value:"none",label:"-None-"},{value:"draft",label:"Draft"},{value:"waiting",label:"Waiting for approval"},{value:"approval",label:"Approval"},{value:"rejected",label:"Rejected"}],C=[{value:"none",label:"-None-"},{value:"web",label:"Web Download"},{value:"linkedin",label:"Linkedin"},{value:"chat",label:"Chat"},{value:"messe",label:"Messe"}],y={"Vendor Information":{"Vendor Image":a("input",{id:"vendor_image",type:"file",className:"form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1",accept:"image/*",onChange:t=>v(t,o=>{r(s({image:`${o==null?void 0:o.data.data.file_url}`}))}),name:"vendorImage"},"vendor_image"),"Vendor Name":a("input",{id:"vendor_name",required:!0,name:"vendor_name",className:"form-input flex-1 ",onChange:t=>e(t.target.name,t.target.value)}),Contracts:a(u,{isMulti:!1,id:"contracts",placeholder:"Type at least 2 characters to search...",name:"contracts",loadOptions:l,onChange:({value:t})=>{e("contracts",t)},className:"flex-1"}),"SL Contains all MFRs":a("input",{id:"is_active",type:"checkbox",name:"is_active",className:"form-checkbox",onChange:t=>e(t.target.name,t.target.checked),checked:i.is_active}),"Strong Lines":a(u,{isMulti:!1,id:"strong_lines",placeholder:"Type at least 2 characters to search...",name:"strong_lines",loadOptions:l,onChange:({value:t})=>{e("strong_lines",t)},className:"flex-1"}),"Line Card":a(u,{isMulti:!1,id:"line_card",placeholder:"Type at least 2 characters to search...",name:"line_card",loadOptions:l,onChange:({value:t})=>{e("line_card",t)},className:"flex-1"}),"Approve status":a(h,{options:N,name:"approved_status",id:"approved_status",onChange:({value:t})=>{e("approved_status",t)},className:"flex-1"}),"Business Vendor":a("input",{id:"business_vendor",type:"checkbox",name:"business_vendor",className:"form-checkbox",onChange:t=>e(t.target.name,t.target.checked),checked:i.business_vendor}),"Approved By":a(u,{isMulti:!1,id:"approved_by",placeholder:"Type at least 2 characters to search...",name:"approved_by_id",loadOptions:_,onChange:({value:t})=>{e("approved_by_id",t)},className:"flex-1"})},"":{"Vendor Owner":a(u,{isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:_,onChange:({value:t})=>{e("owner_id",t)},className:"flex-1"}),"Vendor Source":a(h,{options:C,name:"vendor_source",id:"vendor_source",onChange:({value:t})=>{e("vendor_source",t)},className:"flex-1"}),Currency:a(h,{options:V,name:"currency",id:"currency",onChange:({value:t})=>{e("currency",t)},className:"flex-1"}),"ISO Upload":a("input",{id:"iso_upload",type:"file",className:"form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1",accept:"*",onChange:t=>v(t,o=>{r(s({field:"iso_upload",value:`${o==null?void 0:o.data.data.file_url}`}))}),name:"iso_upload"},"iso_upload"),"Doc Upload":a("input",{id:"doc_upload",type:"file",className:"form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1",accept:"*",onChange:t=>v(t,o=>{r(s({field:"doc_upload",value:`${o==null?void 0:o.data.data.file_url}`}))}),name:"doc_upload"},"doc_upload"),"Parent Vendor":a(u,{isMulti:!1,id:"parent_vendor_id",placeholder:"Type at least 2 characters to search...",name:"parent_vendor_id",loadOptions:l,onChange:({value:t})=>{e("parent_vendor_id",t)},className:"flex-1"}),"Vendor Number":a("input",{id:"vendor_number",name:"vendor_number",className:"form-input flex-1 ",onChange:t=>e(t.target.name,t.target.value),value:i.vendor_number}),"Portal Access":a(h,{options:D,name:"portal_access",id:"portal_access",onChange:({value:t})=>{e("portal_access",t)},className:"flex-1"})}};return a(f,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(p,{fields:y})})})},M=()=>{d(e=>e.vendorForm);const r=c();new m;const n=(e,l)=>{r(s({[e]:l}))};return a(f,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(p,{fields:{"Terms and Shipping":{"Payment Terms":a("input",{id:"payment_terms",name:"payment_terms",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),"Incoterms ":a("input",{id:"incoterms",name:"incoterms",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)})},"":{"Vat NO":a("input",{id:"vat_no",required:!0,name:"vat_no",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),Forwarder:a("input",{id:"forwarder",name:"forwarder",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),"Forwarder Account no.":a("input",{id:"forwarder_account_no",name:"forwarder_account_no",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)})}}})})})},P=()=>{d(e=>e.vendorForm);const r=c();new m;const n=(e,l)=>{r(s({[e]:l}))};return a(f,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(p,{fields:{"Address Information":{Street:a("input",{id:"street",name:"street",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),City:a("input",{id:"city",name:"city",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),"Zip Code":a("input",{id:"zip_code",name:"zip_code",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),State:a("input",{id:"state",name:"state",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),Country:a("input",{id:"country",name:"country",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)})},"":{}}})})})},L=()=>{d(e=>e.vendorForm);const r=c();new m;const n=(e,l)=>{r(s({[e]:l}))};return a(f,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(p,{fields:{"Description Information":{Description:a("textarea",{id:"description",rows:3,name:"description",className:"form-textarea flex-1",onChange:e=>n(e.target.name,e.target.value),placeholder:""})},"":{}}})})})},B=()=>{d(e=>e.vendorForm);const r=c();new m;const n=(e,l)=>{r(s({[e]:l}))};return a(f,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(p,{fields:{"Technical information":{"BOM/Excess Total Uploading Rows":a("input",{id:"bom_excess_total_rows",name:"bom_excess_total_rows",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)})},"":{}}})})})},U=()=>{d(e=>e.vendorForm);const r=c();new m;const n=(e,l)=>{r(s({[e]:l}))};return a(f,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(p,{fields:{"API Data":{"Octopart ID":a("input",{id:"octopart_id",name:"octopart_id",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)})},"":{ZohoBooksID:a("input",{id:"zoho_book_id",name:"zoho_book_id",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)})}}})})})},$=()=>b("div",{className:"mt-8 px-4",children:[a(O,{},"vendorInfo"),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(j,{},"contact"),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(M,{},"Terms"),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(P,{},"Address"),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(L,{},"Description"),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(B,{},"Technical"),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(U,{},"APi")]}),H=()=>{const{hasPermission:r}=F(),n=d(e=>e.vendorForm),i=c();return S.useEffect(()=>{i(k("Vendor Add"))}),r("create-vendor")?b("div",{className:"px-4",children:[a(T,{formState:n,resetForm:I}),a("div",{className:"flex xl:flex-row flex-col gap-2.5",children:a("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:a($,{})})})]}):a(A,{})};export{H as default};
