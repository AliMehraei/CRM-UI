import{u as d,c as m,r as u,s as f,j as t,F as p,N as b}from"./main-d8a5bb6c.js";import{G as h}from"./GenerateIndexTable-d694bbb0.js";import"./sortBy-b97195a6.js";import"./_baseIsEqual-080469de.js";import"./CommonIcons-2d80fe0b.js";import"./react-select.esm-1a6d75af.js";const F=()=>{const r=d(),{hasPermission:o}=m();return u.useEffect(()=>{r(f("RFQ List"))},[r]),t(p,{children:t(h,{modelName:"rfq",tableColumns:[{accessor:"rfq_name",sortable:!0,render:({rfq_name:e,id:s})=>o("update-rfq")?t(b,{to:`/rfq/edit/${s}`,children:t("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e}`})}):t("div",{className:"font-semibold",children:`#${e}`})},{accessor:"status",sortable:!0,render:({status:e})=>t("div",{className:"flex items-center font-semibold",children:e})},{accessor:"owner",title:"Quote Owner",sortable:!1,render:({owner:e})=>t("div",{className:"flex items-center font-semibold",children:e?e.first_name+" "+e.last_name:"No Owner"})},{accessor:"target_price",sortable:!0,render:({target_price:e,currency:s})=>t("div",{className:"font-semibold",children:`${e} ${s}`})},{accessor:"Rfq Type",sortable:!0,render:({rfq_type:e})=>t("div",{className:"font-semibold",children:e})},{accessor:"created_at",title:"Created time",sortable:!0,render:({created_at:e})=>{const s=new Date(e),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=s.getHours(),c=String(s.getMinutes()).padStart(2,"0"),i=a>=12?"PM":"AM",l=`${n[s.getMonth()]} ${s.getDate()}, ${s.getFullYear()} ${a%12||12}:${c} ${i}`;return t("div",{className:"font-semibold",children:l})}}]})})};export{F as default};