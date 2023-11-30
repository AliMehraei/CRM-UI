import{u as d,c as m,r as u,s as b,j as t,F as f,N as p}from"./main-fb19eb09.js";import{G as v}from"./GenerateIndexTable-7c4a3757.js";import"./sortBy-4be20054.js";import"./_baseIsEqual-c7aa4403.js";import"./CommonIcons-7b387e5f.js";import"./react-select.esm-8668e882.js";const A=()=>{const a=d(),{hasPermission:o}=m();return u.useEffect(()=>{a(b("Availability List"))},[a]),t(f,{children:t(v,{modelName:"availability",tableColumns:[{accessor:"id",sortable:!0,render:({id:e})=>t("div",{className:"font-semibold",children:e})},{accessor:"created_at",title:"Created time",sortable:!0,render:({created_at:e})=>{const s=new Date(e),i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=s.getHours(),n=String(s.getMinutes()).padStart(2,"0"),l=r>=12?"PM":"AM",c=`${i[s.getMonth()]} ${s.getDate()}, ${s.getFullYear()} ${r%12||12}:${n} ${l}`;return t("div",{className:"font-semibold",children:c})}},{accessor:"availability_name",sortable:!0,render:({availability_name:e,id:s})=>o("update-availability")?t(p,{to:`/availability/edit/${s}`,children:t("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e}`})}):t("div",{className:"font-semibold",children:`#${e}`})},{accessor:"vendor",sortable:!1,render:({vendor:e})=>t("div",{className:"flex items-center font-semibold",children:e?e.vendor_name:"-No vendor-"})},{accessor:"owner",sortable:!1,render:({owner:e})=>t("div",{className:"flex items-center font-semibold",children:e?e.first_name+" "+e.last_name:"-No owner-"})},{accessor:"product",sortable:!1,render:({product:e})=>t("div",{className:"flex items-center font-semibold",children:e?e.product_name:"-No product-"})},{accessor:"Availability Type",sortable:!0,render:({availability_type:e})=>t("div",{className:"font-semibold",children:e})}]})})};export{A as default};