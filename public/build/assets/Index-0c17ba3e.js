import{u as t,c as n,r as d,s as i,j as s,F as l,N as c}from"./main-d68524cb.js";import{G as m}from"./GenerateIndexTable-350c0c34.js";import"./sortBy-e149e031.js";import"./_baseIsEqual-f596d1d7.js";import"./CommonIcons-b4f98920.js";import"./react-select.esm-2ed32846.js";const _=()=>{const r=t(),{hasPermission:o}=n();return d.useEffect(()=>{r(i("vendor RFQ List"))},[r]),s(l,{children:s(m,{modelName:"vendorRfq",tableColumns:[{accessor:"id",sortable:!0,render:({id:e})=>s("div",{className:"font-semibold",children:e})},{accessor:"vendor_rfq_name",sortable:!0,render:({vendor_rfq_name:e,id:a})=>o("update-vendor-rfq")?s(c,{to:`/vendor_rfq/edit/${a}`,children:s("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e}`})}):s("div",{className:"font-semibold",children:`#${e}`})},{accessor:"status",sortable:!0,render:({status:e})=>s("div",{className:"flex items-center font-semibold",children:e})},{accessor:"vendor_rfq_owner",sortable:!1,render:({owner:e})=>s("div",{className:"font-semibold",children:e?e.first_name+" "+e.last_name:"-No Owner-"})},{accessor:"vendor name",sortable:!1,render:({vendor:e})=>s("div",{className:"font-semibold",children:e?e.vendor_name:"-No Vendor-"})}],frontRoute:"vendor_rfq"})})};export{_ as default};