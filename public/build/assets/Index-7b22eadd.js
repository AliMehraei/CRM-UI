import{u as o,c as n,r as i,s as c,b as s,F as d,N as l}from"./main-a3f9880b.js";import{G as m}from"./GenerateIndexTable-5c173bf5.js";import"./sortBy-f12221d1.js";import"./_baseIsEqual-c866216b.js";import"./CommonIcons-30a2f2ed.js";import"./react-select.esm-90327a01.js";const x=()=>{const r=o(),{hasPermission:a}=n();return i.useEffect(()=>{r(c("Purchase Order List"))},[r]),s(d,{children:s(m,{modelName:"purchaseOrder",tableColumns:[{accessor:"id",sortable:!0,render:({id:e})=>s("div",{className:"font-semibold",children:e})},{accessor:"subject",sortable:!0,render:({subject:e,id:t})=>a("update-purchase-order")?s(l,{to:`/purchase/edit/${t}`,children:s("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e}`})}):s("div",{className:"font-semibold",children:`#${e}`})},{accessor:"status",sortable:!0,render:({status:e})=>s("div",{className:"flex items-center font-semibold",children:e})},{accessor:"vendor_owner",title:"Purchase Order Owner",sortable:!1,render:({owner:e})=>s("div",{className:"font-semibold",children:e?e.first_name+" "+e.last_name:"-No Owner-"})},{accessor:"vendor",title:"Vendor Name",sortable:!1,render:({vendor:e})=>s("div",{className:"font-semibold",children:e?e.vendor_name:"-No vendor-"})}],frontRoute:"purchase"})})};export{x as default};
