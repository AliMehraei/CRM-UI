import{a as c,u as m,c as f,b as e,F as p,ab as s,j as N,r as _,f as D,s as T,g as j,ac as O}from"./main-2481ab9f.js";import{G as h,h as C,s as I,a as M,P,c as E}from"./CommonFunctions-d37f68f5.js";import{A as g}from"./react-select-async.esm-a0bd60b0.js";import{S as b}from"./react-select.esm-300dd603.js";import"./sweetalert2.all-d12b6692.js";import"./Select-aecb2a80.esm-77401763.js";const L=()=>{const l=c(a=>a.vendorForm),o=m();new f;const r=(a,u)=>{o(s({[a]:u}))},t={"Contact Information":{"First Name":e("input",{id:"first_name",name:"first_name",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:l.first_name}),Phone:e("input",{id:"phone",required:!0,name:"phone",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:l.phone}),email:e("input",{id:"email",required:!0,name:"email",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:l.email}),linkedin:e("input",{id:"linkedin",name:"linkedin",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:l.linkedin})},"":{"Last Name":e("input",{id:"last_name",name:"last_name",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:l.last_name}),Mobile:e("input",{id:"mobile",name:"mobile",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:l.mobile}),Website:e("input",{id:"website",name:"website",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:l.website})}};return e(p,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(h,{fields:t})})})},U=()=>{var d,x,V,S,F;const l=m(),o=new f,r=c(n=>n.vendorForm),t=(n,i)=>{l(s({[n]:i}))},a=async n=>{const i="id",A="vendor_name",k=await o.searchVendor({query:n});if(k.status)return k.data.data.map(y=>({value:y[i],label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:y[A]})})},y[i])}))},u=[{value:"none",label:"-None-"},{value:"draft",label:"Draft"},{value:"waiting",label:"Waiting for approval"},{value:"approval",label:"Approval"},{value:"rejected",label:"Rejected"}],v=[{value:"none",label:"-None-"},{value:"web",label:"Web Download"},{value:"linkedin",label:"Linkedin"},{value:"chat",label:"Chat"},{value:"messe",label:"Messe"}],w={"Vendor Information":{"Vendor Image":e("input",{id:"vendor_image",type:"file",className:"form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1",accept:"image/*",onChange:n=>C(n,i=>{l(s({image:`${i==null?void 0:i.data.data.file_url}`}))}),name:"vendorImage"},"vendor_image"),"Vendor Name":e("input",{id:"vendor_name",required:!0,name:"vendor_name",className:"form-input flex-1 ",onChange:n=>t(n.target.name,n.target.value),defaultValue:r.vendor_name}),Contracts:e(g,{isMulti:!1,id:"contracts",placeholder:"Type at least 2 characters to search...",name:"contracts",loadOptions:a,onChange:({value:n})=>{t("contracts",n)},className:"flex-1"}),"SL Contains all MFRs":e("input",{id:"is_active",type:"checkbox",name:"is_active",className:"form-checkbox",onChange:n=>t(n.target.name,n.target.checked),checked:r.is_active}),"Strong Lines":e(g,{isMulti:!1,id:"strong_lines",placeholder:"Type at least 2 characters to search...",name:"strong_lines",loadOptions:a,onChange:({value:n})=>{t("strong_lines",n)},className:"flex-1"}),"Line Card":e(g,{isMulti:!1,id:"line_card",placeholder:"Type at least 2 characters to search...",name:"line_card",loadOptions:a,onChange:({value:n})=>{t("line_card",n)},className:"flex-1"}),"Approve status":e(b,{options:u,name:"approved_status",id:"approved_status",onChange:({value:n})=>{t("approved_status",n)},className:"flex-1"}),"Business Vendor":e("input",{id:"business_vendor",type:"checkbox",name:"business_vendor",className:"form-checkbox",onChange:n=>t(n.target.name,n.target.checked),checked:r.business_vendor}),"Approved By":e(g,{isMulti:!1,id:"approved_by",placeholder:"Type at least 2 characters to search...",name:"approved_by_id",loadOptions:I,onChange:({value:n})=>{t("approved_by_id",n)},className:"flex-1"})},"":{"Vendor Owner":e(g,{isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:I,onChange:({value:n})=>{t("owner_id",n)},className:"flex-1",defaultValue:{value:(d=r.owner)==null?void 0:d.id,label:N("div",{className:"flex items-center",children:[r.owner?e("img",{src:r.owner.image??"/assets/images/user-profile.jpeg",alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,N("div",{children:[e("div",{className:"text-sm font-bold",children:((x=r.owner)==null?void 0:x.first_name)+" "+((V=r.owner)==null?void 0:V.last_name)}),e("div",{className:"text-xs text-gray-500",children:(S=r.owner)==null?void 0:S.email})]})]},(F=r.owner)==null?void 0:F.id)}}),"Vendor Source":e(b,{options:v,name:"vendor_source",id:"vendor_source",onChange:({value:n})=>{t("vendor_source",n)},className:"flex-1"}),Currency:e(b,{options:M,name:"currency",id:"currency",onChange:({value:n})=>{t("currency",n)},className:"flex-1"}),"ISO Upload":e("input",{id:"iso_upload",type:"file",className:"form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1",accept:"*",onChange:n=>C(n,i=>{l(s({field:"iso_upload",value:`${i==null?void 0:i.data.data.file_url}`}))}),name:"iso_upload"},"iso_upload"),"Doc Upload":e("input",{id:"doc_upload",type:"file",className:"form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1",accept:"*",onChange:n=>C(n,i=>{l(s({field:"doc_upload",value:`${i==null?void 0:i.data.data.file_url}`}))}),name:"doc_upload"},"doc_upload"),"Parent Vendor":e(g,{isMulti:!1,id:"parent_vendor_id",placeholder:"Type at least 2 characters to search...",name:"parent_vendor_id",loadOptions:a,onChange:({value:n})=>{t("parent_vendor_id",n)},className:"flex-1",defaultValue:{value:r.parent_vendor_id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:r.parent_vendor_id})})},r.parent_vendor_id)}}),"Vendor Number":e("input",{id:"vendor_number",name:"vendor_number",className:"form-input flex-1 ",onChange:n=>t(n.target.name,n.target.value),defaultValue:r.vendor_number}),"Portal Access":e(b,{options:P,name:"currency",id:"currency",onChange:({value:n})=>{t("currency",n)},className:"flex-1"})}};return e(p,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(h,{fields:w})})})},$=()=>{c(t=>t.vendorForm);const l=m();new f;const o=(t,a)=>{l(s({[t]:a}))};return e(p,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(h,{fields:{"Terms and Shipping":{"Payment Terms":e("input",{id:"payment_terms",name:"payment_terms",className:"form-input flex-1 ",onChange:t=>o(t.target.name,t.target.value)}),"Incoterms ":e("input",{id:"incoterms",name:"incoterms",className:"form-input flex-1 ",onChange:t=>o(t.target.name,t.target.value)})},"":{"Vat NO":e("input",{id:"vat_no",required:!0,name:"vat_no",className:"form-input flex-1 ",onChange:t=>o(t.target.name,t.target.value)}),Forwarder:e("input",{id:"forwarder",name:"forwarder",className:"form-input flex-1 ",onChange:t=>o(t.target.name,t.target.value)}),"Forwarder Account no.":e("input",{id:"forwarder_account_no",name:"forwarder_account_no",className:"form-input flex-1 ",onChange:t=>o(t.target.name,t.target.value)})}}})})})},z=()=>{const l=c(a=>a.vendorForm),o=m();new f;const r=(a,u)=>{o(s({[a]:u}))},t={"Address Information":{Street:e("input",{id:"street",name:"street",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:l.street}),City:e("input",{id:"city",name:"city",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:l.city}),"Zip Code":e("input",{id:"zip_code",name:"zip_code",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:l.zip_code}),State:e("input",{id:"state",name:"state",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:l.state}),Country:e("input",{id:"country",name:"country",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:l.country})},"":{}};return e(p,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(h,{fields:t})})})},B=()=>(c(o=>o.vendorForm),m(),new f,e(p,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(h,{fields:{"Description Information":{Description:e("textarea",{id:"description",rows:3,name:"description",className:"form-textarea flex-1",placeholder:""})},"":{}}})})})),q=()=>{c(t=>t.vendorForm);const l=m();new f;const o=(t,a)=>{l(s({[t]:a}))};return e(p,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(h,{fields:{"Technical information":{"BOM/Excess Total Uploading Rows":e("input",{id:"bom_excess_total_rows",name:"bom_excess_total_rows",className:"form-input flex-1 ",onChange:t=>o(t.target.name,t.target.value)})},"":{}}})})})},R=()=>{c(t=>t.vendorForm);const l=m();new f;const o=(t,a)=>{l(s({[t]:a}))};return e(p,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(h,{fields:{"API Data":{"Octopart ID":e("input",{id:"octopart_id",name:"octopart_id",className:"form-input flex-1 ",onChange:t=>o(t.target.name,t.target.value)})},"":{ZohoBooksID:e("input",{id:"zoho_book_id",name:"zoho_book_id",className:"form-input flex-1 ",onChange:t=>o(t.target.name,t.target.value)})}}})})})},W=()=>N("div",{className:"mt-8 px-4",children:[e(U,{},"vendorInfo"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(L,{},"contact"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e($,{},"Terms"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(z,{},"Address"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(B,{},"Description"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(q,{},"Technical"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(R,{},"APi")]}),X=()=>{const l=c(d=>d.vendorForm),[o,r]=_.useState(!0),a=D().id,u=new f,v=m();_.useEffect(()=>{v(T("Vendor Edit"))});const w=async()=>{const d=await u.fetchSingleVendor(a);if(d.status!=200)return;const x=d.data.data.vendor;v(s(x))};return _.useEffect(()=>{w().then(()=>{r(!1)})},[a]),_.useEffect(()=>{v(s({api:"updateSingleVendor",redirectTo:"/vendor/edit/:id",action:"edit"}))},[]),o?e(j,{}):N("div",{className:"px-4",children:[e(E,{formState:l,resetForm:O}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(W,{})})})]})};export{X as default};
