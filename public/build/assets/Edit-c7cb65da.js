import{d as m,u,a as f,j as e,F as p,aS as i,C as U,l as g,aG as k,m as A,b as C,f as E,k as I,aT as T,h as M,c as L,r as _,s as z,aU as D,e as O}from"./main-fb19eb09.js";import{G as h,A as q}from"./GenerateFields-c40cef71.js";import{S as x}from"./react-select.esm-8668e882.js";import{I as B}from"./ImageUploadComponent-9a324e39.js";import{F as j}from"./FileUploadComponent-889010cf.js";import{A as R}from"./AttachmentSection-c4324de7.js";import"./index-f5f709e9.js";import"./ClearButtonComponent-292bb5e9.js";const G=()=>{const r=m(a=>a.vendorForm),l=u();new f;const t=(a,s)=>{l(i({[a]:s}))},o={"Contact Information":{"First Name":e("input",{id:"first_name",name:"first_name",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value),defaultValue:r.first_name}),Phone:e("input",{id:"phone",required:!0,name:"phone",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value),defaultValue:r.phone}),email:e("input",{id:"email",required:!0,name:"email",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value),defaultValue:r.email}),linkedin:e("input",{id:"linkedin",name:"linkedin",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value),defaultValue:r.linkedin})},"":{"Last Name":e("input",{id:"last_name",name:"last_name",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value),defaultValue:r.last_name}),Mobile:e("input",{id:"mobile",name:"mobile",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value),defaultValue:r.mobile}),Website:e("input",{id:"website",name:"website",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value),defaultValue:r.website})}};return e(p,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(h,{fields:o})})})},W=()=>{var N,c,w,V,S;const r=u(),l=new f,t=m(n=>n.vendorForm),o=(n,d)=>{r(i({[n]:d}))},a=async n=>{const d="id",P="vendor_name",F=await l.searchVendor({query:n});if(F.status)return F.data.data.map(y=>({value:y[d],label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:y[P]})})},y[d])}))},s=[{value:"none",label:"-None-"},{value:"draft",label:"Draft"},{value:"waiting",label:"Waiting for approval"},{value:"approval",label:"Approval"},{value:"rejected",label:"Rejected"}],b=[{value:"none",label:"-None-"},{value:"web",label:"Web Download"},{value:"linkedin",label:"Linkedin"},{value:"chat",label:"Chat"},{value:"messe",label:"Messe"}],v={"Vendor Information":{"Vendor Image":e(B,{formState:t,modelName:"vendor",id:"vendor_image",formAttribute:"image",updateFormData:i}),"Vendor Name":e("input",{id:"vendor_name",required:!0,name:"vendor_name",className:"form-input flex-1 ",onChange:n=>o(n.target.name,n.target.value),defaultValue:t.vendor_name}),Contracts:e(x,{isMulti:!0,name:"contract",id:"contract",placeholder:"Select Contract Type...",options:U,onChange:n=>{o("contract",n.map(d=>d.value))},defaultValue:t.contract?t.contract.map(n=>({value:n,label:n})):[]}),"SL Contains all MFRs":e("input",{id:"is_active",type:"checkbox",name:"is_active",className:"form-checkbox",onChange:n=>o(n.target.name,n.target.checked),checked:t.is_active}),"Strong Lines":e(g,{defaultOptions:!0,id:"strong_line_ids",name:"strong_line_ids",placeholder:"Type at least 2 characters to search...",loadOptions:k,onChange:n=>{o("strong_line_ids",n.map(d=>d.value))},defaultValue:t.strong_lines?t.strong_lines.map(n=>({value:n.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:n.name})})},n.id)})):[],isMulti:!0,className:"flex-1"}),"Line Card":e(g,{defaultOptions:!0,id:"line_card_ids",name:"line_card_ids",placeholder:"Type at least 2 characters to search...",loadOptions:k,onChange:n=>{o("line_card_ids",n.map(d=>d.value))},defaultValue:t.line_cards?t.line_cards.map(n=>({value:n.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:n.name})})},n.id)})):[],isMulti:!0,className:"flex-1"}),"Approve status":e(x,{options:s,name:"approved_status",id:"approved_status",onChange:({value:n})=>{o("approved_status",n)},className:"flex-1",defaultValue:s.find(n=>n.value==t.approved_status)}),"Business Vendor":e("input",{id:"business_vendor",type:"checkbox",name:"business_vendor",className:"form-checkbox",onChange:n=>o(n.target.name,n.target.checked),checked:t.business_vendor}),"Approved By":e(g,{defaultOptions:!0,isMulti:!1,id:"approved_by",placeholder:"Type at least 2 characters to search...",name:"approved_by_id",loadOptions:A,onChange:({value:n})=>{o("approved_by_id",n)},className:"flex-1"})},"":{"Vendor Owner":e(g,{defaultOptions:!0,isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:A,onChange:({value:n})=>{o("owner_id",n)},className:"flex-1",defaultValue:{value:(N=t.owner)==null?void 0:N.id,label:C("div",{className:"flex items-center",children:[t.owner?e("img",{src:E(t.owner.avatar_data),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,C("div",{children:[e("div",{className:"text-sm font-bold",children:((c=t.owner)==null?void 0:c.first_name)+" "+((w=t.owner)==null?void 0:w.last_name)}),e("div",{className:"text-xs text-gray-500",children:(V=t.owner)==null?void 0:V.email})]})]},(S=t.owner)==null?void 0:S.id)}}),"Vendor Source":e(x,{options:b,name:"vendor_source",id:"vendor_source",onChange:({value:n})=>{o("vendor_source",n)},defaultValue:b.find(n=>n.value==t.vendor_source),className:"flex-1"}),Currency:e(x,{options:I,name:"currency",id:"currency",onChange:({value:n})=>{o("currency",n)},defaultValue:I.find(n=>n.value==t.currency),required:!0,className:"flex-1"}),"ISO Upload":e(j,{id:"iso_upload",updateFormData:i,formState:t,modelName:"vendor",formAttribute:"iso_upload"}),"Doc Upload":e(j,{id:"doc_upload",updateFormData:i,formState:t,modelName:"vendor",formAttribute:"doc_upload"}),"Parent Vendor":e(g,{defaultOptions:!0,isMulti:!1,id:"parent_vendor_id",placeholder:"Type at least 2 characters to search...",name:"parent_vendor_id",loadOptions:a,onChange:({value:n})=>{o("parent_vendor_id",n)},className:"flex-1",defaultValue:{value:t.parent_vendor_id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:t.parent_vendor_id})})},t.parent_vendor_id)}}),"Portal Access":e(x,{options:T,name:"portal_access",id:"portal_access",onChange:({value:n})=>{o("portal_access",n)},defaultValue:T.find(n=>n.value==t.portal_access),className:"flex-1"})}};return e(p,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(h,{fields:v})})})},$=()=>{const r=m(a=>a.vendorForm),l=u();new f;const t=(a,s)=>{l(i({[a]:s}))},o={"Terms and Shipping":{"Payment Terms":e("input",{id:"payment_terms",name:"payment_terms",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value)}),"Incoterms ":e("input",{id:"incoterms",name:"incoterms",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value)})},"":{"Vat No":e("input",{id:"vat_no",required:!0,name:"vat_no",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value),defaultValue:r.vat_no}),Forwarder:e("input",{id:"forwarder",name:"forwarder",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value)}),"Forwarder Account no.":e("input",{id:"forwarder_account_no",name:"forwarder_account_no",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value)})}};return e(p,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(h,{fields:o})})})},Z=()=>{const r=m(a=>a.vendorForm),l=u();new f;const t=(a,s)=>{l(i({[a]:s}))},o={"Address Information":{Street:e("input",{id:"street",name:"street",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value),defaultValue:r.street}),City:e("input",{id:"city",name:"city",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value),defaultValue:r.city}),"Zip Code":e("input",{id:"zip_code",name:"zip_code",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value),defaultValue:r.zip_code}),State:e("input",{id:"state",name:"state",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value),defaultValue:r.state}),Country:e("input",{id:"country",name:"country",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value),defaultValue:r.country})},"":{}};return e(p,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(h,{fields:o})})})},H=()=>{const r=m(a=>a.vendorForm),l=u();new f;const t=(a,s)=>{l(i({[a]:s}))},o={"Description Information":{Description:e("textarea",{id:"description",rows:3,name:"description",className:"form-textarea flex-1",defaultValue:r.description,onChange:a=>t(a.target.name,a.target.value),placeholder:""})},"":{}};return e(p,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(h,{fields:o})})})},J=()=>{const r=m(a=>a.vendorForm),l=u();new f;const t=(a,s)=>{l(i({[a]:s}))},o={"Technical information":{"BOM/Excess Total Uploading Rows":e("input",{id:"bom_excess_total_rows",name:"bom_excess_total_rows",className:"form-input flex-1 ",defaultValue:r.bom_excess_total_rows,onChange:a=>t(a.target.name,a.target.value)})},"":{}};return e(p,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(h,{fields:o})})})},K=()=>{const r=m(a=>a.vendorForm),l=u();new f;const t=(a,s)=>{l(i({[a]:s}))},o={"API Data":{"Octopart ID":e("input",{id:"octopart_id",name:"octopart_id",className:"form-input flex-1 ",defaultValue:r.octopart_id,onChange:a=>t(a.target.name,a.target.value)})},"":{ZohoBooksID:e("input",{id:"zoho_book_id",name:"zoho_book_id",className:"form-input flex-1 ",defaultValue:r.zoho_book_id,onChange:a=>t(a.target.name,a.target.value)})}};return e(p,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(h,{fields:o})})})},Q=()=>{const l=M().id;return C("div",{className:"mt-8 px-4",children:[e(W,{},"vendorInfo"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(G,{},"contact"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e($,{},"Terms"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Z,{},"Address"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(H,{},"Description"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(J,{},"Technical"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(K,{},"APi"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(R,{modelId:l,modelName:"vendor"})]})},le=()=>{const{hasPermission:r}=L(),l=m(c=>c.vendorForm),[t,o]=_.useState(!0),s=M().id,b=new f,v=u();_.useEffect(()=>{v(z("Vendor Edit"))}),_.useEffect(()=>{v(D())},[]);const N=async()=>{const c=await b.fetchSingleVendor(s);if(c.status!=200)return;const w=c.data.data.vendor;v(i(w))};return _.useEffect(()=>{N().then(()=>{o(!1)})},[s]),_.useEffect(()=>{v(i({api:"updateSingleVendor",redirectTo:"/vendor/edit/:id",action:"edit"}))},[]),t?e(O,{}):!r("update-vendor")||t?e(O,{}):C("div",{className:"px-4",children:[e(q,{formState:l,resetForm:D}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(Q,{})})})]})};export{le as default};
