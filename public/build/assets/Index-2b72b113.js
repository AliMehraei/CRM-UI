import{u as n,c,r as i,s as l,b as t,F as d,N as m}from"./main-c04bb166.js";import{G as u}from"./GenerateIndexTable-11f1d25d.js";import"./sortBy-38df5aba.js";import"./Select-aecb2a80.esm-e774644f.js";import"./_baseIsEqual-d5837c14.js";import"./sweetalert2.all-9d5da798.js";import"./CommonFunctions-90d107b8.js";import"./react-select.esm-a460a2c5.js";import"./react-select-async.esm-a7c7d1e9.js";const D=()=>{const r=n(),{hasPermission:a}=c();return i.useEffect(()=>{r(l("Account List"))},[r]),t(d,{children:t(u,{modelName:"account",tableColumns:[{accessor:"id",sortable:!0,render:({id:e})=>t("div",{className:"font-semibold",children:e})},{accessor:"account_name",sortable:!0,render:({account_name:e,id:s})=>a("update-account")?t(m,{to:`/account/edit/${s}`,children:t("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e}`})}):t("div",{className:"font-semibold",children:`#${e}`})},{accessor:"business_account",title:"Business Account",sortable:!0,render:({business_account:e})=>t("div",{className:"flex items-center font-semibold",children:e===1?"✔":""})},{accessor:"owner",title:"Account Owner",sortable:!1,render:({owner:e})=>t("div",{className:"font-semibold",children:e?e.first_name+" "+e.last_name:"No Owner"})},{accessor:"created_at",title:"Created time",sortable:!0,render:({created_at:e})=>{const s=new Date(e),o=`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`;return t("div",{className:"font-semibold",children:o})}},{accessor:"phone",sortable:!0,render:({phone:e})=>t("div",{className:"font-semibold",children:e})}]})})};export{D as default};