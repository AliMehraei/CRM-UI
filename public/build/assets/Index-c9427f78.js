import{u as o,c as n,r as i,s as l,b as s,F as m,N as d}from"./main-a3f9880b.js";import{G as u}from"./GenerateIndexTable-5c173bf5.js";import"./sortBy-f12221d1.js";import"./_baseIsEqual-c866216b.js";import"./CommonIcons-30a2f2ed.js";import"./react-select.esm-90327a01.js";const $=()=>{const t=o(),{hasPermission:r}=n();return i.useEffect(()=>{t(l("Contact List"))},[t]),s(m,{children:s(u,{modelName:"contact",tableColumns:[{accessor:"id",sortable:!0,render:({id:e})=>s("div",{className:"font-semibold",children:e})},{accessor:"contact_name",sortable:!1,render:({first_name:e,last_name:a,id:c})=>r("update-contact")?s(d,{to:`/contact/edit/${c}`,children:s("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e} ${a}`})}):s("div",{className:"font-semibold",children:`#${e} ${a}`})},{accessor:"email",sortable:!0,render:({email:e})=>s("div",{className:"flex items-center font-semibold",children:e})},{accessor:"owner",title:"Contact Owner",sortable:!1,render:({owner:e})=>s("div",{className:"flex items-center font-semibold",children:e?e.first_name+" "+e.last_name:"No Owner"})},{accessor:"account",title:"Account Name",sortable:!1,render:({account:e})=>s("div",{className:"flex items-center font-semibold",children:e?e.account_name:"No Account"})}]})})};export{$ as default};
