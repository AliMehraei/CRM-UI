import{u as l,c as m,r as u,s as f,j as t,F as p,N as v}from"./main-df5dc7ed.js";import{G as h}from"./GenerateIndexTable-d17fc913.js";import"./sortBy-4d9efad5.js";import"./_baseIsEqual-9290e441.js";import"./CommonIcons-4af903f4.js";import"./react-select.esm-9f2a3f32.js";const q=()=>{const r=l(),{hasPermission:o}=m();return u.useEffect(()=>{r(f("vendor RFQ List"))},[r]),t(p,{children:t(h,{modelName:"vendorRfq",tableColumns:[{accessor:"vendor_rfq_name",sortable:!0,render:({vendor_rfq_name:e,id:s})=>o("update-vendor-rfq")?t(v,{to:`/vendor_rfq/edit/${s}`,children:t("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e}`})}):t("div",{className:"font-semibold",children:`#${e}`})},{accessor:"status",sortable:!0,render:({status:e})=>t("div",{className:"flex items-center font-semibold",children:e})},{accessor:"vendor_rfq_owner",sortable:!1,render:({owner:e})=>t("div",{className:"font-semibold",children:e?e.first_name+" "+e.last_name:"-No Owner-"})},{accessor:"vendor name",sortable:!1,render:({vendor:e})=>t("div",{className:"font-semibold",children:e?e.vendor_name:"-No Vendor-"})},{accessor:"created_at",title:"Created time",sortable:!0,render:({created_at:e})=>{const s=new Date(e),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=s.getHours(),d=String(s.getMinutes()).padStart(2,"0"),c=a>=12?"PM":"AM",i=`${n[s.getMonth()]} ${s.getDate()}, ${s.getFullYear()} ${a%12||12}:${d} ${c}`;return t("div",{className:"font-semibold",children:i})}}],frontRoute:"vendor_rfq"})})};export{q as default};