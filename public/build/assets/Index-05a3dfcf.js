import{u as d,c as m,r as u,s as p,j as t,F as h,N as b}from"./main-d8a5bb6c.js";import{G as f}from"./GenerateIndexTable-d694bbb0.js";import"./sortBy-b97195a6.js";import"./_baseIsEqual-080469de.js";import"./CommonIcons-2d80fe0b.js";import"./react-select.esm-1a6d75af.js";const C=()=>{const a=d(),{hasPermission:o}=m();return u.useEffect(()=>{a(p("Call List"))},[a]),t(h,{children:t(f,{modelName:"call",tableColumns:[{accessor:"id",sortable:!0,render:({id:e})=>t("div",{className:"font-semibold",children:e})},{accessor:"subject",title:"Call subject",sortable:!1,render:({subject:e,id:s})=>o("update-call")?t(b,{to:`/call/edit/${s}`,children:t("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e}`})}):t("div",{className:"font-semibold",children:`#${e}`})},{accessor:"type",sortable:!0,render:({type:e})=>t("div",{className:"flex items-center font-semibold",children:e})},{accessor:"created_at",title:"Created time",sortable:!0,render:({created_at:e})=>{const s=new Date(e),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=s.getHours(),l=String(s.getMinutes()).padStart(2,"0"),c=r>=12?"PM":"AM",i=`${n[s.getMonth()]} ${s.getDate()}, ${s.getFullYear()} ${r%12||12}:${l} ${c}`;return t("div",{className:"font-semibold",children:i})}}]})})};export{C as default};
