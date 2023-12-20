import{u as l,c as m,r as u,s as p,j as t,F as f,N as b}from"./main-d8a5bb6c.js";import{G as h}from"./GenerateIndexTable-d694bbb0.js";import"./sortBy-b97195a6.js";import"./_baseIsEqual-080469de.js";import"./CommonIcons-2d80fe0b.js";import"./react-select.esm-1a6d75af.js";const D=()=>{const r=l(),{hasPermission:o}=m();return u.useEffect(()=>{r(p("Product List"))},[r]),t(f,{children:t(h,{modelName:"product",tableColumns:[{accessor:"product_name",sortable:!0,render:({product_name:e,id:s})=>o("update-product")?t(b,{to:`/product/edit/${s}`,children:t("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e}`})}):t("div",{className:"font-semibold",children:`#${e}`})},{accessor:"manufacturer",sortable:!1,render:({manufacturer:e})=>t("div",{className:"flex items-center font-semibold",children:e?e.name:"No manufacturer"})},{accessor:"owner",title:"Product Owner",sortable:!1,render:({owner:e})=>t("div",{className:"font-semibold",children:e?e.first_name+" "+e.last_name:"No Owner"})},{accessor:"product_active",title:"Product Active",sortable:!0,render:({product_active:e})=>t("div",{className:"flex items-center font-semibold",children:e===1?"✔":""})},{accessor:"Product Type",sortable:!0,render:({product_type:e})=>t("div",{className:"font-semibold",children:e})},{accessor:"created_at",title:"Created time",sortable:!0,render:({created_at:e})=>{const s=new Date(e),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=s.getHours(),c=String(s.getMinutes()).padStart(2,"0"),i=a>=12?"PM":"AM",d=`${n[s.getMonth()]} ${s.getDate()}, ${s.getFullYear()} ${a%12||12}:${c} ${i}`;return t("div",{className:"font-semibold",children:d})}}]})})};export{D as default};
