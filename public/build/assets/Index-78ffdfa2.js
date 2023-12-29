import{u as d,c as m,r as u,s as b,j as t,F as p,N as h}from"./main-acf92102.js";import{G as v}from"./GenerateIndexTable-e166ccce.js";import"./sortBy-ab201d09.js";import"./_baseIsEqual-e2b1a3ca.js";import"./CommonIcons-993ab145.js";import"./react-select.esm-71f1ee2c.js";const y=()=>{const r=d(),{hasPermission:o}=m();return u.useEffect(()=>{r(b("Vendor List"))},[r]),t(p,{children:t(v,{modelName:"vendor",tableColumns:[{accessor:"vendor_name",sortable:!0,render:({vendor_name:e,id:s})=>o("update-vendor")?t(h,{to:`/vendor/edit/${s}`,children:t("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e}`})}):t("div",{className:"font-semibold",children:`#${e}`})},{accessor:"vendor_owner",sortable:!1,render:({owner:e})=>t("div",{className:"font-semibold",children:e?e.first_name+" "+e.last_name:"No Owner"})},{accessor:"phone",sortable:!0,render:({phone:e})=>t("div",{className:"font-semibold",children:e})},{accessor:"website",sortable:!0,render:({website:e})=>t("div",{className:"font-semibold",children:e})},{accessor:"created_at",title:"Created time",sortable:!0,render:({created_at:e})=>{const s=new Date(e),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=s.getHours(),i=String(s.getMinutes()).padStart(2,"0"),c=a>=12?"PM":"AM",l=`${n[s.getMonth()]} ${s.getDate()}, ${s.getFullYear()} ${a%12||12}:${i} ${c}`;return t("div",{className:"font-semibold",children:l})}}],actionPlus:[{icon:"Availability",route:"availability-vendor/list"}]})})};export{y as default};
