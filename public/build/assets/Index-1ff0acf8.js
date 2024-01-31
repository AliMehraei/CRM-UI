import{u as n,c as i,r as l,s as o,j as r,F as d,b as c}from"./main-df5dc7ed.js";import{G as m}from"./GenerateIndexTable-d17fc913.js";import"./sortBy-4d9efad5.js";import"./_baseIsEqual-9290e441.js";import"./CommonIcons-4af903f4.js";import"./react-select.esm-9f2a3f32.js";const N=()=>{const s=n();return i(),l.useEffect(()=>{s(o("Email Log List"))},[s]),r(d,{children:r(m,{modelName:"emailLog",tableColumns:[{accessor:"subject",sortable:!0,render:({subject:e})=>r("div",{className:"font-semibold",children:e})},{accessor:"receiver_mail",sortable:!0,render:({receiver_mail:e})=>r("div",{className:"font-semibold",children:e})},{accessor:"sender_email",sortable:!0,render:({sender_email:e})=>r("div",{className:"font-semibold",children:e})},{accessor:"sender_type",sortable:!0,render:({sender_type:e})=>r("div",{className:"font-semibold",children:e})},{accessor:"status",sortable:!0,render:({status:e})=>c("div",{children:[e==="pending"&&r("span",{className:"inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10",children:e}),e==="opened"&&r("span",{className:"inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20",children:e})]})},{accessor:"owner",title:"Owner",sortable:!1,render:({owner:e})=>r("div",{className:"font-semibold",children:e?e.first_name+" "+e.last_name:"No Owner"})},{accessor:"created_at",title:"Created time",sortable:!0,render:({created_at:e})=>{const t=new Date(e),a=`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`;return r("div",{className:"font-semibold",children:a})}}],frontRoute:"email_log"})})};export{N as default};