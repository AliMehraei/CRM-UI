import{u as l,c as o,r as i,s as c,j as e,F as n,N as d}from"./main-378d85af.js";import{G as m}from"./GenerateIndexTable-d9d66135.js";import"./sortBy-413a4952.js";import"./_baseIsEqual-f8acadca.js";import"./CommonIcons-6743bb76.js";import"./react-select.esm-c6c6ac7a.js";const x=()=>{const t=l(),{hasPermission:a}=o();return i.useEffect(()=>{t(c("Call List"))},[t]),e(n,{children:e(m,{modelName:"call",tableColumns:[{accessor:"id",sortable:!0,render:({id:s})=>e("div",{className:"font-semibold",children:s})},{accessor:"subject",title:"Call subject",sortable:!1,render:({subject:s,id:r})=>a("update-call")?e(d,{to:`/call/edit/${r}`,children:e("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${s}`})}):e("div",{className:"font-semibold",children:`#${s}`})},{accessor:"type",sortable:!0,render:({type:s})=>e("div",{className:"flex items-center font-semibold",children:s})}]})})};export{x as default};
