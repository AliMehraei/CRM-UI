import{u as o,c as n,r as i,s as l,a as s,F as m,N as d}from"./main-22663fbf.js";import{G as u}from"./GenerateIndexTable-4f1d0af7.js";import"./sortBy-4aa50b22.js";import"./_baseIsEqual-4f184a44.js";import"./CommonIcons-cd9ae448.js";import"./react-select.esm-d04eef86.js";const $=()=>{const t=o(),{hasPermission:r}=n();return i.useEffect(()=>{t(l("Contact List"))},[t]),s(m,{children:s(u,{modelName:"contact",tableColumns:[{accessor:"id",sortable:!0,render:({id:e})=>s("div",{className:"font-semibold",children:e})},{accessor:"contact_name",sortable:!1,render:({first_name:e,last_name:a,id:c})=>r("update-contact")?s(d,{to:`/contact/edit/${c}`,children:s("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e} ${a}`})}):s("div",{className:"font-semibold",children:`#${e} ${a}`})},{accessor:"email",sortable:!0,render:({email:e})=>s("div",{className:"flex items-center font-semibold",children:e})},{accessor:"owner",title:"Contact Owner",sortable:!1,render:({owner:e})=>s("div",{className:"flex items-center font-semibold",children:e?e.first_name+" "+e.last_name:"No Owner"})},{accessor:"account",title:"Account Name",sortable:!1,render:({account:e})=>s("div",{className:"flex items-center font-semibold",children:e?e.account_name:"No Account"})}]})})};export{$ as default};
