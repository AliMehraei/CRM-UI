import{u as d,c as m,r as u,s as b,b as t,F as f,N as p}from"./main-8d5d8e48.js";import{G as v}from"./GenerateIndexTable-37cb283d.js";import"./sortBy-59ee7ced.js";import"./Select-aecb2a80.esm-86aa9b81.js";import"./_baseIsEqual-cf15a3f3.js";import"./CommonIcons-710cb86d.js";import"./react-select.esm-85161b78.js";import"./react-select-async.esm-ada93d7d.js";const _=()=>{const a=d(),{hasPermission:o}=m();return u.useEffect(()=>{a(b("Availability List"))},[a]),t(f,{children:t(v,{modelName:"availability",tableColumns:[{accessor:"id",sortable:!0,render:({id:e})=>t("div",{className:"font-semibold",children:e})},{accessor:"created_at",title:"Created time",sortable:!0,render:({created_at:e})=>{const s=new Date(e),i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=s.getHours(),n=String(s.getMinutes()).padStart(2,"0"),l=r>=12?"PM":"AM",c=`${i[s.getMonth()]} ${s.getDate()}, ${s.getFullYear()} ${r%12||12}:${n} ${l}`;return t("div",{className:"font-semibold",children:c})}},{accessor:"availability_name",sortable:!0,render:({availability_name:e,id:s})=>o("update-availability")?t(p,{to:`/availability/edit/${s}`,children:t("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e}`})}):t("div",{className:"font-semibold",children:`#${e}`})},{accessor:"vendor",sortable:!1,render:({vendor:e})=>t("div",{className:"flex items-center font-semibold",children:e?e.vendor_name:"-No vendor-"})},{accessor:"owner",sortable:!1,render:({owner:e})=>t("div",{className:"flex items-center font-semibold",children:e?e.first_name+" "+e.last_name:"-No owner-"})},{accessor:"product",sortable:!1,render:({product:e})=>t("div",{className:"flex items-center font-semibold",children:e?e.product_name:"-No product-"})},{accessor:"Availability Type",sortable:!0,render:({availability_type:e})=>t("div",{className:"font-semibold",children:e})}]})})};export{_ as default};
