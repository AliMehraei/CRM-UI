import{d,u as c,a as m,j as a,F as u,aU as i,C as A,l as f,aI as _,m as x,k as I,aV as D,b as w,c as O,r as b,s as T,aW as N,e as V}from"./main-360609a7.js";import{G as p,A as j}from"./GenerateFields-89af4685.js";import{S as h}from"./react-select.esm-26c512a6.js";import{I as M}from"./ImageUploadComponent-114d0f09.js";import{F as C}from"./FileUploadComponent-df936b98.js";import"./index-79920e12.js";import"./ClearButtonComponent-7b0a9117.js";const P=()=>{d(e=>e.vendorForm);const r=c();new m;const n=(e,s)=>{r(i({[e]:s}))};return a(u,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(p,{fields:{"Contact Information":{"First Name":a("input",{id:"primary_first_name",name:"primary_first_name",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),Phone:a("input",{id:"phone",required:!0,name:"phone",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),email:a("input",{id:"email",required:!0,name:"email",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),linkedin:a("input",{id:"linkedin",name:"linkedin",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)})},"":{"Last Name":a("input",{id:"primary_last_name",name:"primary_last_name",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),Mobile:a("input",{id:"mobile",name:"mobile",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),Website:a("input",{id:"website",name:"website",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)})}}})})})},U=()=>{const r=c(),n=new m,o=d(t=>t.vendorForm),e=(t,l)=>{r(i({[t]:l}))},s=async t=>{const l="id",k="vendor_name",v=await n.searchVendor({query:t});if(v.status)return v.data.data.map(g=>({value:g[l],label:a("div",{className:"flex items-center",children:a("div",{children:a("div",{className:"text-sm font-bold",children:g[k]})})},g[l])}))},y=[{value:"none",label:"-None-"},{value:"draft",label:"Draft"},{value:"waiting",label:"Waiting for approval"},{value:"approval",label:"Approval"},{value:"rejected",label:"Rejected"}],F=[{value:"none",label:"-None-"},{value:"web",label:"Web Download"},{value:"linkedin",label:"Linkedin"},{value:"chat",label:"Chat"},{value:"messe",label:"Messe"}],S={"Vendor Information":{"Vendor Image":a(M,{formState:o,modelName:"vendor",id:"vendor_image",formAttribute:"image",updateFormData:i}),"Vendor Name":a("input",{id:"vendor_name",required:!0,name:"vendor_name",className:"form-input flex-1 ",onChange:t=>e(t.target.name,t.target.value)}),Contracts:a(h,{isMulti:!0,name:"contract",id:"contract",placeholder:"Select Contract Type...",options:A,onChange:t=>{e("contract",t.map(l=>l.value))}}),"SL Contains all MFRs":a("input",{id:"is_active",type:"checkbox",name:"is_active",className:"form-checkbox",onChange:t=>e(t.target.name,t.target.checked),checked:o.is_active}),"Strong Lines":a(f,{defaultOptions:!0,id:"strong_line_ids",name:"strong_line_ids",placeholder:"Type at least 2 characters to search...",loadOptions:_,onChange:t=>{e("strong_line_ids",t.map(l=>l.value))},isMulti:!0,className:"flex-1"}),"Line Card":a(f,{defaultOptions:!0,id:"line_card_ids",name:"line_card_ids",placeholder:"Type at least 2 characters to search...",loadOptions:_,onChange:t=>{e("line_card_ids",t.map(l=>l.value))},isMulti:!0,className:"flex-1"}),"Approve status":a(h,{options:y,name:"approved_status",id:"approved_status",onChange:({value:t})=>{e("approved_status",t)},defaultValue:{value:"draft",label:"Draft"},className:"flex-1"}),"Business Vendor":a("input",{id:"business_vendor",type:"checkbox",name:"business_vendor",className:"form-checkbox",onChange:t=>e(t.target.name,t.target.checked),checked:o.business_vendor}),"Approved By":a(f,{defaultOptions:!0,isMulti:!1,id:"approved_by",placeholder:"Type at least 2 characters to search...",name:"approved_by_id",loadOptions:x,onChange:({value:t})=>{e("approved_by_id",t)},className:"flex-1"})},"":{"Vendor Owner":a(f,{defaultOptions:!0,isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:x,onChange:({value:t})=>{e("owner_id",t)},className:"flex-1"}),"Vendor Source":a(h,{options:F,name:"vendor_source",id:"vendor_source",onChange:({value:t})=>{e("vendor_source",t)},className:"flex-1"}),Currency:a(h,{options:I,name:"currency",id:"currency",required:!0,onChange:({value:t})=>{e("currency",t)},className:"flex-1"}),"ISO Upload":a(C,{id:"iso_upload",modelName:"vendor",updateFormDate:i,formState:o,formAttribute:"iso_upload"}),"Doc Upload":a(C,{id:"doc_upload",modelName:"vendor",updateFormDate:i,formState:o,formAttribute:"doc_upload"}),"Parent Vendor":a(f,{defaultOptions:!0,isMulti:!1,id:"parent_vendor_id",placeholder:"Type at least 2 characters to search...",name:"parent_vendor_id",loadOptions:s,onChange:({value:t})=>{e("parent_vendor_id",t)},className:"flex-1"}),"Portal Access":a(h,{options:D,name:"portal_access",id:"portal_access",onChange:({value:t})=>{e("portal_access",t)},className:"flex-1"})}};return a(u,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(p,{fields:S})})})},L=()=>{d(e=>e.vendorForm);const r=c();new m;const n=(e,s)=>{r(i({[e]:s}))};return a(u,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(p,{fields:{"Terms and Shipping":{"Payment Terms":a("input",{id:"payment_terms",name:"payment_terms",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),"Incoterms ":a("input",{id:"incoterms",name:"incoterms",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)})},"":{"Vat NO":a("input",{id:"vat_no",required:!0,name:"vat_no",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),Forwarder:a("input",{id:"forwarder",name:"forwarder",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),"Forwarder Account no.":a("input",{id:"forwarder_account_no",name:"forwarder_account_no",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)})}}})})})},q=()=>{d(e=>e.vendorForm);const r=c();new m;const n=(e,s)=>{r(i({[e]:s}))};return a(u,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(p,{fields:{"Address Information":{Street:a("input",{id:"street",name:"street",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),City:a("input",{id:"city",name:"city",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),"Zip Code":a("input",{id:"zip_code",name:"zip_code",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),State:a("input",{id:"state",name:"state",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),Country:a("input",{id:"country",name:"country",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)})},"":{}}})})})},B=()=>{d(e=>e.vendorForm);const r=c();new m;const n=(e,s)=>{r(i({[e]:s}))};return a(u,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(p,{fields:{"Description Information":{Description:a("textarea",{id:"description",rows:3,name:"description",className:"form-textarea flex-1",onChange:e=>n(e.target.name,e.target.value),placeholder:""})},"":{}}})})})},z=()=>{d(e=>e.vendorForm);const r=c();new m;const n=(e,s)=>{r(i({[e]:s}))};return a(u,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(p,{fields:{"Technical information":{"BOM/Excess Total Uploading Rows":a("input",{id:"bom_excess_total_rows",name:"bom_excess_total_rows",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)})},"":{}}})})})},E=()=>{d(e=>e.vendorForm);const r=c();new m;const n=(e,s)=>{r(i({[e]:s}))};return a(u,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(p,{fields:{"API Data":{"Octopart ID":a("input",{id:"octopart_id",name:"octopart_id",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)})},"":{ZohoBooksID:a("input",{id:"zoho_book_id",name:"zoho_book_id",className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)})}}})})})},W=()=>w("div",{className:"mt-8 px-4",children:[a(U,{},"vendorInfo"),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(P,{},"contact"),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(L,{},"Terms"),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(q,{},"Address"),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(B,{},"Description"),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(z,{},"Technical"),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(E,{},"APi")]}),Q=()=>{const{hasPermission:r}=O(),n=d(e=>e.vendorForm),o=c();return b.useEffect(()=>{o(T("Vendor Add"))}),b.useEffect(()=>{o(N())},[]),r("create-vendor")?w("div",{className:"px-4",children:[a(j,{formState:n,resetForm:N}),a("div",{className:"flex xl:flex-row flex-col gap-2.5",children:a("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:a(W,{})})})]}):a(V,{})};export{Q as default};
