import{u as i,c,r as o,s as n,b as r,F as l,N as m}from"./main-147692d0.js";import{G as d}from"./GenerateIndexTable-d66e2683.js";import"./sortBy-bae957af.js";import"./Select-aecb2a80.esm-623bc0fb.js";import"./_baseIsEqual-77a63aea.js";import"./react-select.esm-70d620c0.js";import"./react-select-async.esm-b9121d10.js";const _=()=>{const s=i(),{hasPermission:t}=c();return o.useEffect(()=>{s(n("manufacturer List"))},[s]),r(l,{children:r(d,{modelName:"manufacturer",tableColumns:[{accessor:"id",sortable:!0,render:({id:e})=>r("div",{className:"font-semibold",children:e})},{accessor:"manufacturer_name",sortable:!0,render:({name:e,id:a})=>t("update-manufacturer")?r(m,{to:`/manufacturer/edit/${a}`,children:r("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e}`})}):r("div",{className:"font-semibold",children:`#${e}`})},{accessor:"octo_api_id",sortable:!0,render:({octo_api_id:e})=>r("div",{className:"flex items-center font-semibold",children:e})},{accessor:"owner",sortable:!0,render:({owner:e})=>r("div",{className:"flex items-center font-semibold",children:e?e.first_name+" "+e.last_name:"No Owner"})},{accessor:"is_active",title:"Active",sortable:!0,render:({is_active:e})=>r("div",{className:"flex items-center font-semibold",children:e===1?"Active":"Not Active"})}]})})};export{_ as default};
