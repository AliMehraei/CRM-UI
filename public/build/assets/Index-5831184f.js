import{u as i,c,r as n,s as o,j as s,F as l,N as m}from"./main-fb19eb09.js";import{G as d}from"./GenerateIndexTable-7c4a3757.js";import"./sortBy-4be20054.js";import"./_baseIsEqual-c7aa4403.js";import"./CommonIcons-7b387e5f.js";import"./react-select.esm-8668e882.js";const x=()=>{const r=i(),{hasPermission:t}=c();return n.useEffect(()=>{r(o("manufacturer List"))},[r]),s(l,{children:s(d,{modelName:"manufacturer",tableColumns:[{accessor:"id",sortable:!0,render:({id:e})=>s("div",{className:"font-semibold",children:e})},{accessor:"manufacturer_name",sortable:!0,render:({name:e,id:a})=>t("update-manufacturer")?s(m,{to:`/manufacturer/edit/${a}`,children:s("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e}`})}):s("div",{className:"font-semibold",children:`#${e}`})},{accessor:"octo_api_id",sortable:!0,render:({octo_api_id:e})=>s("div",{className:"flex items-center font-semibold",children:e})},{accessor:"owner",sortable:!0,render:({owner:e})=>s("div",{className:"flex items-center font-semibold",children:e?e.first_name+" "+e.last_name:"No Owner"})},{accessor:"is_active",title:"Active",sortable:!0,render:({is_active:e})=>s("div",{className:"flex items-center font-semibold",children:e===1?"Active":"Not Active"})}]})})};export{x as default};