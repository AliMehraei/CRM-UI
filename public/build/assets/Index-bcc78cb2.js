import{u as i,c as l,r as o,s as n,b as s,F as d,N as m}from"./main-d50c1b5f.js";import{G as c}from"./GenerateIndexTable-96979512.js";import"./sortBy-515493b8.js";import"./Select-aecb2a80.esm-ecfd9304.js";import"./_baseIsEqual-4cfeb0d6.js";import"./sweetalert2.all-3ffe5e63.js";import"./CommonFunctions-43750655.js";import"./react-select.esm-979cfe87.js";import"./react-select-async.esm-e52329c5.js";const _=()=>{const a=i(),{hasPermission:t}=l();return o.useEffect(()=>{a(n("Lead List"))},[a]),s(d,{children:s(c,{modelName:"lead",tableColumns:[{accessor:"id",sortable:!0,render:({id:e})=>s("div",{className:"font-semibold",children:e})},{accessor:"lead_name",title:"Lead Name",sortable:!1,render:({first_name:e,last_name:r})=>s("div",{className:"flex items-center font-semibold",children:`${e} ${r}`})},{accessor:"company",sortable:!0,render:({company:e,id:r})=>t("update-lead")?s(m,{to:`/lead/edit/${r}`,children:s("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e}`})}):s("div",{className:"font-semibold",children:`#${e}`})},{accessor:"owner",title:"Lead Owner",sortable:!1,render:({owner:e})=>s("div",{className:"flex items-center font-semibold",children:e?e.first_name+" "+e.last_name:"No Owner"})},{accessor:"email",sortable:!0,render:({email:e})=>s("div",{className:"flex items-center font-semibold",children:e})}]})})};export{_ as default};
