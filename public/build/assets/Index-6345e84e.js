import{u as o,c,r as i,s as l,j as t,F as d,N as m}from"./main-38fe5343.js";import{G as u}from"./GenerateIndexTable-8f3d9178.js";import"./sortBy-ac6bb855.js";import"./_baseIsEqual-e91e96af.js";import"./CommonIcons-7619afcd.js";import"./react-select.esm-c9ae4ddb.js";const x=()=>{const r=o(),{hasPermission:a}=c();return i.useEffect(()=>{r(l("Account List"))},[r]),t(d,{children:t(u,{modelName:"account",tableColumns:[{accessor:"account_name",sortable:!0,render:({account_name:e,id:s})=>a("update-account")?t(m,{to:`/account/edit/${s}`,children:t("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e}`})}):t("div",{className:"font-semibold",children:`#${e}`})},{accessor:"business_account",title:"Business Account",sortable:!0,render:({business_account:e})=>t("div",{className:"flex items-center font-semibold",children:e===1?"✔":""})},{accessor:"owner",title:"Account Owner",sortable:!1,render:({owner:e})=>t("div",{className:"font-semibold",children:e?e.first_name+" "+e.last_name:"No Owner"})},{accessor:"created_at",title:"Created time",sortable:!0,render:({created_at:e})=>{const s=new Date(e),n=`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`;return t("div",{className:"font-semibold",children:n})}},{accessor:"phone",sortable:!0,render:({phone:e})=>t("div",{className:"font-semibold",children:e})}]})})};export{x as default};
