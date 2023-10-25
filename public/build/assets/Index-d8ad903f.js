import{u as o,c,r as i,s as l,b as t,F as d,N as m}from"./main-147692d0.js";import{G as u}from"./GenerateIndexTable-d66e2683.js";import"./sortBy-bae957af.js";import"./Select-aecb2a80.esm-623bc0fb.js";import"./_baseIsEqual-77a63aea.js";import"./react-select.esm-70d620c0.js";import"./react-select-async.esm-b9121d10.js";const $=()=>{const r=o(),{hasPermission:a}=c();return i.useEffect(()=>{r(l("Account List"))},[r]),t(d,{children:t(u,{modelName:"account",tableColumns:[{accessor:"id",sortable:!0,render:({id:e})=>t("div",{className:"font-semibold",children:e})},{accessor:"account_name",sortable:!0,render:({account_name:e,id:s})=>a("update-account")?t(m,{to:`/account/edit/${s}`,children:t("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e}`})}):t("div",{className:"font-semibold",children:`#${e}`})},{accessor:"business_account",title:"Business Account",sortable:!0,render:({business_account:e})=>t("div",{className:"flex items-center font-semibold",children:e===1?"✔":""})},{accessor:"owner",title:"Account Owner",sortable:!1,render:({owner:e})=>t("div",{className:"font-semibold",children:e?e.first_name+" "+e.last_name:"No Owner"})},{accessor:"created_at",title:"Created time",sortable:!0,render:({created_at:e})=>{const s=new Date(e),n=`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`;return t("div",{className:"font-semibold",children:n})}},{accessor:"phone",sortable:!0,render:({phone:e})=>t("div",{className:"font-semibold",children:e})}]})})};export{$ as default};
