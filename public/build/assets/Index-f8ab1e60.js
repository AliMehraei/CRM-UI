import{u as o,c as l,r as i,s as n,b as s,F as d,N as c}from"./main-0a556f10.js";import{G as m}from"./GenerateIndexTable-19ed71d9.js";import"./sortBy-b0b2381f.js";import"./Select-aecb2a80.esm-8205e217.js";import"./_baseIsEqual-060149b0.js";import"./CommonIcons-e09c83e0.js";import"./react-select.esm-03d9b7c7.js";import"./react-select-async.esm-cf6509b4.js";const S=()=>{const r=o(),{hasPermission:t}=l();return i.useEffect(()=>{r(n("Sales Order List"))},[r]),s(d,{children:s(m,{modelName:"salesOrder",tableColumns:[{accessor:"id",sortable:!0,render:({id:e})=>s("div",{className:"font-semibold",children:e})},{accessor:"subject",title:"Sales Order subject",sortable:!0,render:({subject:e,id:a})=>t("update-sales-order")?s(c,{to:`/sales/edit/${a}`,children:s("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e}`})}):s("div",{className:"font-semibold",children:`#${e}`})},{accessor:"status",sortable:!0,render:({status:e})=>s("div",{className:"flex items-center font-semibold",children:e})},{accessor:"owner",title:"Sale Order Owner",sortable:!1,render:({owner:e})=>s("div",{className:"flex items-center font-semibold",children:e?e.first_name+" "+e.last_name:"No Owner"})}],frontRoute:"sales"})})};export{S as default};
