import{u as l,c as o,r as i,s as c,b as e,F as n,N as d}from"./main-147692d0.js";import{G as m}from"./GenerateIndexTable-d66e2683.js";import"./sortBy-bae957af.js";import"./Select-aecb2a80.esm-623bc0fb.js";import"./_baseIsEqual-77a63aea.js";import"./react-select.esm-70d620c0.js";import"./react-select-async.esm-b9121d10.js";const C=()=>{const t=l(),{hasPermission:r}=o();return i.useEffect(()=>{t(c("Call List"))},[t]),e(n,{children:e(m,{modelName:"call",tableColumns:[{accessor:"id",sortable:!0,render:({id:s})=>e("div",{className:"font-semibold",children:s})},{accessor:"subject",title:"Call subject",sortable:!1,render:({subject:s,id:a})=>r("update-call")?e(d,{to:`/call/edit/${a}`,children:e("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${s}`})}):e("div",{className:"font-semibold",children:`#${s}`})},{accessor:"type",sortable:!0,render:({type:s})=>e("div",{className:"flex items-center font-semibold",children:s})}]})})};export{C as default};
