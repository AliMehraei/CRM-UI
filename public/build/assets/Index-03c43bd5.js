import{u as d,c as m,r as u,s as p,j as s,F as f,N as h}from"./main-763a01a7.js";import{G as b}from"./GenerateIndexTable-9f698d99.js";import"./sortBy-8c40204b.js";import"./_baseIsEqual-aa59899e.js";import"./CommonIcons-0598faa2.js";import"./react-select.esm-1d97a747.js";const D=()=>{const r=d(),{hasPermission:n}=m();return u.useEffect(()=>{r(p("Excess List"))},[r]),s(f,{children:s(b,{modelName:"excess",tableColumns:[{accessor:"excess_name",sortable:!0,render:({excess_name:e,id:t})=>n("update-excess")?s(h,{to:`/excess/edit/${t}`,children:s("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e}`})}):s("div",{className:"font-semibold",children:`#${e}`})},{accessor:"owner",sortable:!1,render:({owner:e})=>s("div",{className:"flex items-center font-semibold",children:e?e.first_name+" "+e.last_name:"-No owner-"})},{accessor:"product",sortable:!1,render:({product:e})=>s("div",{className:"flex items-center font-semibold",children:e?e.product_name:"-No product-"})},{accessor:"quantity_in_demand",sortable:!0,render:({quantity_in_demand:e})=>s("div",{className:"font-semibold",children:e})},{accessor:"created_at",title:"Created time",sortable:!0,render:({created_at:e})=>{const t=new Date(e),o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=t.getHours(),c=String(t.getMinutes()).padStart(2,"0"),i=a>=12?"PM":"AM",l=`${o[t.getMonth()]} ${t.getDate()}, ${t.getFullYear()} ${a%12||12}:${c} ${i}`;return s("div",{className:"font-semibold",children:l})}}]})})};export{D as default};