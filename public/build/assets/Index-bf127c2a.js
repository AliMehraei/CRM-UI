import{u as m,c as d,r as u,s as f,b as t,F as b,N as h}from"./main-a3f9880b.js";import{G as p}from"./GenerateIndexTable-5c173bf5.js";import"./sortBy-f12221d1.js";import"./_baseIsEqual-c866216b.js";import"./CommonIcons-30a2f2ed.js";import"./react-select.esm-90327a01.js";const D=()=>{const r=m(),{hasPermission:n}=d();return u.useEffect(()=>{r(f("Invoice List"))},[r]),t(b,{children:t(p,{modelName:"invoice",tableColumns:[{accessor:"id",sortable:!0,render:({id:e})=>t("div",{className:"font-semibold",children:e})},{accessor:"created_at",title:"Created time",sortable:!0,render:({created_at:e})=>{const s=new Date(e),o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=s.getHours(),c=String(s.getMinutes()).padStart(2,"0"),i=a>=12?"PM":"AM",l=`${o[s.getMonth()]} ${s.getDate()}, ${s.getFullYear()} ${a%12||12}:${c} ${i}`;return t("div",{className:"font-semibold",children:l})}},{accessor:"subject",sortable:!0,render:({subject:e,id:s})=>n("update-invoice")?t(h,{to:`/invoice/edit/${s}`,children:t("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e}`})}):t("div",{className:"font-semibold",children:`#${e}`})},{accessor:"owner",title:"Invoice Owner",sortable:!1,render:({owner:e})=>t("div",{className:"flex items-center font-semibold",children:e?e.first_name+" "+e.last_name:"-No owner-"})},{accessor:"contact",title:"Contact Owner",sortable:!1,render:({contact:e})=>t("div",{className:"flex items-center font-semibold",children:e?`${e.first_name} ${e.last_name}`:"-No contact-"})},{accessor:"account",title:"Account Owner",sortable:!1,render:({account:e})=>t("div",{className:"flex items-center font-semibold",children:e?e.account_name:"-No account-"})}]})})};export{D as default};