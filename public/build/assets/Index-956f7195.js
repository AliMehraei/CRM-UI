import{u as a,c as i,r as n,s as c,b as t,F as l,N as m}from"./main-14f615f5.js";import{G as d}from"./GenerateIndexTable-94ec4f5b.js";import"./sortBy-abb58878.js";import"./Select-aecb2a80.esm-a628f797.js";import"./_baseIsEqual-c9f6f2e1.js";import"./CommonIcons-8e83bba2.js";import"./react-select.esm-f82d134e.js";import"./react-select-async.esm-fa6aa9d3.js";const g=()=>{const s=a(),{hasPermission:r}=i();return n.useEffect(()=>{s(c("Quote List"))},[s]),t(l,{children:t(d,{modelName:"quote",tableColumns:[{accessor:"id",sortable:!0,render:({id:e})=>t("div",{className:"font-semibold",children:e})},{accessor:"Subject",sortable:!0,render:({subject:e,id:o})=>r("update-quote")?t(m,{to:`/quotes/edit/${o}`,children:t("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e}`})}):t("div",{className:"font-semibold",children:`#${e}`})},{accessor:"quote_stage",title:"Quote Stage",sortable:!0,render:({quote_stage:e})=>t("div",{className:"flex items-center font-semibold",children:e})},{accessor:"owner",title:"Quote Owner",sortable:!1,render:({owner:e})=>t("div",{className:"flex items-center font-semibold",children:e?e.first_name+" "+e.last_name:"No Owner"})},{accessor:"account",title:"Account Name",sortable:!1,render:({account:e})=>t("div",{className:"flex items-center font-semibold",children:e?e.account_name:"No Account"})}],frontRoute:"quotes"})})};export{g as default};
