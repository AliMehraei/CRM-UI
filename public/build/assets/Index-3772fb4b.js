import{u as i,c as o,r as c,s as n,b as r,F as m,N as l}from"./main-d50c1b5f.js";import{G as d}from"./GenerateIndexTable-96979512.js";import"./sortBy-515493b8.js";import"./Select-aecb2a80.esm-ecfd9304.js";import"./_baseIsEqual-4cfeb0d6.js";import"./sweetalert2.all-3ffe5e63.js";import"./CommonFunctions-43750655.js";import"./react-select.esm-979cfe87.js";import"./react-select-async.esm-e52329c5.js";const L=()=>{const t=i(),{hasPermission:s}=o();return c.useEffect(()=>{t(n("manufacturer List"))},[t]),r(m,{children:r(d,{modelName:"manufacturer",tableColumns:[{accessor:"id",sortable:!0,render:({id:e})=>r("div",{className:"font-semibold",children:e})},{accessor:"manufacturer_name",sortable:!0,render:({name:e,id:a})=>s("update-manufacturer")?r(l,{to:`/manufacturer/edit/${a}`,children:r("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e}`})}):r("div",{className:"font-semibold",children:`#${e}`})},{accessor:"octo_api_id",sortable:!0,render:({octo_api_id:e})=>r("div",{className:"flex items-center font-semibold",children:e})},{accessor:"owner",sortable:!0,render:({owner:e})=>r("div",{className:"flex items-center font-semibold",children:e?e.first_name+" "+e.last_name:"No Owner"})},{accessor:"is_active",title:"Active",sortable:!0,render:({is_active:e})=>r("div",{className:"flex items-center font-semibold",children:e===1?"Active":"Not Active"})}]})})};export{L as default};
