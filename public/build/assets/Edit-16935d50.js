import{d as m,u,a as f,j as e,F as h,aT as d,l as x,aH as I,m as A,b as _,f as z,p as V,k as T,h as B,c as L,r as b,s as $,aU as O,e as D}from"./main-d68524cb.js";import{G as g}from"./GenerateFields-9a512569.js";import{S as v}from"./react-select.esm-2ed32846.js";import{I as q}from"./ImageUploadComponent-e070f998.js";import{F as M}from"./FileUploadComponent-d63dfc9f.js";import{N as R,O as P,T as j,U,W as E}from"./SelectOptions-35d56804.js";import{A as G}from"./AttachmentSection-0b5e3527.js";import{A as W}from"./ActionButtonsComponent-bc200581.js";import"./ClearButtonComponent-07e67d10.js";import"./index-e65b1456.js";const Z=()=>{const o=m(a=>a.vendorForm),s=u();new f;const n=(a,l)=>{s(d({[a]:l}))},r={"Contact Information":{"First Name":e("input",{id:"first_name",name:"first_name",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:o.first_name}),Phone:e("input",{id:"phone",required:!0,name:"phone",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:o.phone}),email:e("input",{id:"email",required:!0,name:"email",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:o.email}),linkedin:e("input",{id:"linkedin",name:"linkedin",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:o.linkedin})},"":{"Last Name":e("input",{id:"last_name",name:"last_name",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:o.last_name}),Mobile:e("input",{id:"mobile",name:"mobile",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:o.mobile}),Website:e("input",{id:"website",name:"website",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:o.website})}};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(g,{fields:r})})})},H=()=>{var N,p,C,c,w,S;const o=u(),s=new f,n=m(t=>t.vendorForm),r=(t,i)=>{o(d({[t]:i}))},a=async t=>{const i="id",F="vendor_name",k=await s.searchVendor({query:t});if(k.status)return k.data.data.map(y=>({value:y[i],label:_("div",{className:"flex items-center",children:[e("div",{className:"text-sm font-bold",children:y[F]}),e("button",{className:"btn text-xs btn-sm ml-auto",onClick:()=>V(`${y[F]}`),children:"Copy & Select"})]},y[i])}))},l={"Vendor Information":{"Vendor Image":e(q,{formState:n,modelName:"vendor",id:"vendor_image",formAttribute:"image",updateFormData:d}),"Vendor Name":e("input",{id:"vendor_name",required:!0,name:"vendor_name",className:"form-input flex-1 ",onChange:t=>r(t.target.name,t.target.value),defaultValue:n.vendor_name}),Contracts:e(v,{isMulti:!0,name:"contract",id:"contract",placeholder:"Select Contract Type...",options:R,onChange:t=>{r("contract",t.map(i=>i.value))},defaultValue:n.contract?n.contract.map(t=>({value:t,label:t})):[]}),"SL Contains all MFRs":e("input",{id:"is_active",type:"checkbox",name:"is_active",className:"form-checkbox",onChange:t=>r(t.target.name,t.target.checked),checked:n.is_active}),"Strong Lines":e(x,{defaultOptions:!0,id:"strong_line_ids",name:"strong_line_ids",placeholder:"Type at least 2 characters to search...",loadOptions:I,onChange:t=>{r("strong_line_ids",t.map(i=>i.value))},defaultValue:n.strong_lines?n.strong_lines.map(t=>({value:t.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:t.name})})},t.id)})):[],isMulti:!0,className:"flex-1"}),"Line Card":e(x,{defaultOptions:!0,id:"line_card_ids",name:"line_card_ids",placeholder:"Type at least 2 characters to search...",loadOptions:I,onChange:t=>{r("line_card_ids",t.map(i=>i.value))},defaultValue:n.line_cards?n.line_cards.map(t=>({value:t.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:t.name})})},t.id)})):[],isMulti:!0,className:"flex-1"}),"Approve status":e(v,{options:P,name:"approved_status",id:"approved_status",onChange:({value:t})=>{r("approved_status",t)},className:"flex-1",defaultValue:P.find(t=>t.value==n.approved_status)}),"Business Vendor":e("input",{id:"business_vendor",type:"checkbox",name:"business_vendor",className:"form-checkbox",onChange:t=>r(t.target.name,t.target.checked),checked:n.business_vendor}),"Approved By":e(x,{defaultOptions:!0,isMulti:!1,id:"approved_by",placeholder:"Type at least 2 characters to search...",name:"approved_by_id",loadOptions:A,onChange:({value:t})=>{r("approved_by_id",t)},className:"flex-1"})},"":{"Vendor Owner":e(x,{defaultOptions:!0,isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:A,onChange:({value:t})=>{r("owner_id",t)},className:"flex-1",defaultValue:{value:(N=n.owner)==null?void 0:N.id,label:_("div",{className:"flex items-center",children:[n.owner?e("img",{src:z(n.owner.avatar_data),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,_("div",{children:[e("div",{className:"text-sm font-bold",children:((p=n.owner)==null?void 0:p.first_name)+" "+((C=n.owner)==null?void 0:C.last_name)}),e("div",{className:"text-xs text-gray-500",children:(c=n.owner)==null?void 0:c.email})]}),e("button",{className:"btn text-xs btn-sm ml-auto",onClick:()=>{var t,i;return V(`${((t=n.owner)==null?void 0:t.first_name)+" "+((i=n.owner)==null?void 0:i.last_name)}`)},children:"Copy & Select"})]},(w=n.owner)==null?void 0:w.id)}}),"Vendor Source":e(v,{options:j,name:"vendor_source",id:"vendor_source",onChange:({value:t})=>{r("vendor_source",t)},defaultValue:j.find(t=>t.value==n.vendor_source),className:"flex-1"}),Currency:e(v,{options:T,name:"currency",id:"currency",onChange:({value:t})=>{r("currency",t)},defaultValue:T.find(t=>t.value==n.currency),required:!0,className:"flex-1"}),"ISO Upload":e(M,{id:"iso_upload",updateFormData:d,formState:n,modelName:"vendor",formAttribute:"iso_upload"}),"Doc Upload":e(M,{id:"doc_upload",updateFormData:d,formState:n,modelName:"vendor",formAttribute:"doc_upload"}),"Parent Vendor":e(x,{defaultOptions:!0,isMulti:!1,id:"parent_vendor_id",placeholder:"Type at least 2 characters to search...",name:"parent_vendor_id",loadOptions:a,onChange:({value:t})=>{r("parent_vendor_id",t)},className:"flex-1",defaultValue:{value:n.parent_vendor_id,label:_("div",{className:"flex items-center",children:[e("div",{children:e("div",{className:"text-sm font-bold",children:(S=n.parent)==null?void 0:S.vendor_name})}),n.parent?e("button",{className:"btn text-xs btn-sm ml-auto",onClick:()=>{var t;return V(`${(t=n.parent)==null?void 0:t.vendor_name}`)},children:"Copy & Select"}):null]},n.parent_vendor_id)}}),"Portal Access":e(v,{options:U,name:"portal_access",id:"portal_access",onChange:({value:t})=>{r("portal_access",t)},defaultValue:U.find(t=>t.value==n.portal_access),className:"flex-1"}),"Broker Type":e(v,{options:E,name:"vendor_type",id:"vendor_type",onChange:({value:t})=>{r("vendor_type",t)},defaultValue:E.find(t=>t.value==n.vendor_type),className:"flex-1"})}};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(g,{fields:l})})})},J=()=>{const o=m(a=>a.vendorForm),s=u();new f;const n=(a,l)=>{s(d({[a]:l}))},r={"Terms and Shipping":{"Payment Terms":e("input",{id:"payment_terms",name:"payment_terms",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"Incoterms ":e("input",{id:"incoterms",name:"incoterms",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)})},"":{"Vat No":e("input",{id:"vat_no",required:!0,name:"vat_no",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:o.vat_no}),Forwarder:e("input",{id:"forwarder",name:"forwarder",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"Forwarder Account no.":e("input",{id:"forwarder_account_no",name:"forwarder_account_no",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)})}};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(g,{fields:r})})})},K=()=>{const o=m(a=>a.vendorForm),s=u();new f;const n=(a,l)=>{s(d({[a]:l}))},r={"Address Information":{Street:e("input",{id:"street",name:"street",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:o.street}),City:e("input",{id:"city",name:"city",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:o.city}),"Zip Code":e("input",{id:"zip_code",name:"zip_code",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:o.zip_code}),State:e("input",{id:"state",name:"state",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:o.state}),Country:e("input",{id:"country",name:"country",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:o.country})},"":{}};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(g,{fields:r})})})},Q=()=>{const o=m(a=>a.vendorForm),s=u();new f;const n=(a,l)=>{s(d({[a]:l}))},r={"Description Information":{Description:e("textarea",{id:"description",rows:3,name:"description",className:"form-textarea flex-1",defaultValue:o.description,onChange:a=>n(a.target.name,a.target.value),placeholder:""})},"":{}};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(g,{fields:r})})})},X=()=>{const o=m(a=>a.vendorForm),s=u();new f;const n=(a,l)=>{s(d({[a]:l}))},r={"Technical information":{"BOM/Excess Total Uploading Rows":e("input",{id:"bom_excess_total_rows",name:"bom_excess_total_rows",className:"form-input flex-1 ",defaultValue:o.bom_excess_total_rows,onChange:a=>n(a.target.name,a.target.value)})},"":{}};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(g,{fields:r})})})},Y=()=>{const o=m(a=>a.vendorForm),s=u();new f;const n=(a,l)=>{s(d({[a]:l}))},r={"API Data":{"Octopart ID":e("input",{id:"octopart_id",name:"octopart_id",className:"form-input flex-1 ",defaultValue:o.octopart_id,onChange:a=>n(a.target.name,a.target.value)})},"":{ZohoBooksID:e("input",{id:"zoho_book_id",name:"zoho_book_id",className:"form-input flex-1 ",defaultValue:o.zoho_book_id,onChange:a=>n(a.target.name,a.target.value)})}};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(g,{fields:r})})})},ee=()=>{const s=B().id;return _("div",{className:"mt-8 px-4",children:[e(H,{},"vendorInfo"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Z,{},"contact"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(J,{},"Terms"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(K,{},"Address"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Q,{},"Description"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(X,{},"Technical"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Y,{},"APi"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(G,{modelId:s,modelName:"vendor"})]})},me=()=>{const{hasPermission:o}=L(),s=m(c=>c.vendorForm),[n,r]=b.useState(!0),l=B().id,N=new f,p=u();b.useEffect(()=>{p($("Vendor Edit"))}),b.useEffect(()=>{p(O())},[]);const C=async()=>{const c=await N.fetchSingleVendor(l);if(c.status!=200)return;const w=c.data.data.vendor;p(d(w))};return b.useEffect(()=>{C().then(()=>{r(!1)})},[l]),b.useEffect(()=>{p(d({api:"updateSingleVendor",redirectTo:"/vendor/edit/:id",action:"edit"}))},[]),n?e(D,{}):!o("update-vendor")||n?e(D,{}):_("div",{className:"px-4",children:[e(W,{formState:s,resetForm:O}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(ee,{})})})]})};export{me as default};
