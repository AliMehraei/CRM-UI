import{u as m,c as d,r as u,s as f,j as t,F as p,N as h}from"./main-38fe5343.js";import{G as b}from"./GenerateIndexTable-8f3d9178.js";import"./sortBy-ac6bb855.js";import"./_baseIsEqual-e91e96af.js";import"./CommonIcons-7619afcd.js";import"./react-select.esm-c9ae4ddb.js";const M=()=>{const s=m(),{hasPermission:n}=d();return u.useEffect(()=>{s(f("manufacturer List"))},[s]),t(p,{children:t(b,{modelName:"manufacturer",tableColumns:[{accessor:"manufacturer_name",sortable:!0,render:({name:e,id:r})=>n("update-manufacturer")?t(h,{to:`/manufacturer/edit/${r}`,children:t("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e}`})}):t("div",{className:"font-semibold",children:`#${e}`})},{accessor:"octo_api_id",sortable:!0,render:({octo_api_id:e})=>t("div",{className:"flex items-center font-semibold",children:e})},{accessor:"owner",sortable:!0,render:({owner:e})=>t("div",{className:"flex items-center font-semibold",children:e?e.first_name+" "+e.last_name:"No Owner"})},{accessor:"is_active",title:"Active",sortable:!0,render:({is_active:e})=>t("div",{className:"flex items-center font-semibold",children:e===1?"Active":"Not Active"})},{accessor:"created_at",title:"Created time",sortable:!0,render:({created_at:e})=>{const r=new Date(e),o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=r.getHours(),c=String(r.getMinutes()).padStart(2,"0"),i=a>=12?"PM":"AM",l=`${o[r.getMonth()]} ${r.getDate()}, ${r.getFullYear()} ${a%12||12}:${c} ${i}`;return t("div",{className:"font-semibold",children:l})}}]})})};export{M as default};
