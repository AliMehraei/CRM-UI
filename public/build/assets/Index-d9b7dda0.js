import{u as d,c as m,r as u,s as f,j as t,F as b,N as h}from"./main-d8a5bb6c.js";import{G as p}from"./GenerateIndexTable-d694bbb0.js";import"./sortBy-b97195a6.js";import"./_baseIsEqual-080469de.js";import"./CommonIcons-2d80fe0b.js";import"./react-select.esm-1a6d75af.js";const q=()=>{const r=d(),{hasPermission:o}=m();return u.useEffect(()=>{r(f("Quote List"))},[r]),t(b,{children:t(p,{modelName:"quote",tableColumns:[{accessor:"id",sortable:!0,render:({id:e})=>t("div",{className:"font-semibold",children:e})},{accessor:"Subject",sortable:!0,render:({subject:e,id:s})=>o("update-quote")?t(h,{to:`/quotes/edit/${s}`,children:t("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e}`})}):t("div",{className:"font-semibold",children:`#${e}`})},{accessor:"quote_stage",title:"Quote Stage",sortable:!0,render:({quote_stage:e})=>t("div",{className:"flex items-center font-semibold",children:e})},{accessor:"owner",title:"Quote Owner",sortable:!1,render:({owner:e})=>t("div",{className:"flex items-center font-semibold",children:e?e.first_name+" "+e.last_name:"No Owner"})},{accessor:"account",title:"Account Name",sortable:!1,render:({account:e})=>t("div",{className:"flex items-center font-semibold",children:e?e.account_name:"No Account"})},{accessor:"created_at",title:"Created time",sortable:!0,render:({created_at:e})=>{const s=new Date(e),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=s.getHours(),c=String(s.getMinutes()).padStart(2,"0"),i=a>=12?"PM":"AM",l=`${n[s.getMonth()]} ${s.getDate()}, ${s.getFullYear()} ${a%12||12}:${c} ${i}`;return t("div",{className:"font-semibold",children:l})}}],frontRoute:"quotes"})})};export{q as default};