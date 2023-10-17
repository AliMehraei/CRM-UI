import{u as d,c as m,r as u,s as f,b as t,F as p,N as b}from"./main-c04bb166.js";import{G as h}from"./GenerateIndexTable-11f1d25d.js";import"./sortBy-38df5aba.js";import"./Select-aecb2a80.esm-e774644f.js";import"./_baseIsEqual-d5837c14.js";import"./sweetalert2.all-9d5da798.js";import"./CommonFunctions-90d107b8.js";import"./react-select.esm-a460a2c5.js";import"./react-select-async.esm-a7c7d1e9.js";const _=()=>{const r=d(),{hasPermission:o}=m();return u.useEffect(()=>{r(f("RFQ List"))},[r]),t(p,{children:t(h,{modelName:"rfq",tableColumns:[{accessor:"id",sortable:!0,render:({id:e})=>t("div",{className:"font-semibold",children:e})},{accessor:"rfq_name",sortable:!0,render:({rfq_name:e,id:s})=>o("update-rfq")?t(b,{to:`/rfq/edit/${s}`,children:t("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e}`})}):t("div",{className:"font-semibold",children:`#${e}`})},{accessor:"created_at",title:"Created time",sortable:!0,render:({created_at:e})=>{const s=new Date(e),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=s.getHours(),i=String(s.getMinutes()).padStart(2,"0"),c=a>=12?"PM":"AM",l=`${n[s.getMonth()]} ${s.getDate()}, ${s.getFullYear()} ${a%12||12}:${i} ${c}`;return t("div",{className:"font-semibold",children:l})}},{accessor:"status",sortable:!0,render:({status:e})=>t("div",{className:"flex items-center font-semibold",children:e})},{accessor:"owner",title:"Quote Owner",sortable:!1,render:({owner:e})=>t("div",{className:"flex items-center font-semibold",children:e?e.first_name+" "+e.last_name:"No Owner"})},{accessor:"target_price",sortable:!0,render:({target_price:e,currency:s})=>t("div",{className:"font-semibold",children:`${e} ${s}`})},{accessor:"Rfq Type",sortable:!0,render:({rfq_type:e})=>t("div",{className:"font-semibold",children:e})}]})})};export{_ as default};