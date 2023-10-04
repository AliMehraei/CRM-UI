import{u as d,c as m,r as u,s as p,b as s,F as b,N as f}from"./main-1d204f78.js";import{G as h}from"./GenerateIndexTable-c4bf7277.js";import"./sortBy-32afb995.js";import"./Select-aecb2a80.esm-27c7288e.js";import"./_baseIsEqual-4a2d132a.js";import"./sweetalert2.all-da6653af.js";import"./CommonFunctions-ef1be312.js";import"./react-select.esm-c3107f47.js";import"./react-select-async.esm-19b258b2.js";const A=()=>{const r=d(),{hasPermission:o}=m();return u.useEffect(()=>{r(p("Deal List"))},[r]),s(b,{children:s(h,{modelName:"deal",tableColumns:[{accessor:"id",sortable:!0,render:({id:e})=>s("div",{className:"font-semibold",children:e})},{accessor:"deal_name",sortable:!0,render:({deal_name:e,id:t})=>o("update-contact")?s(f,{to:`/deal/edit/${t}`,children:s("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e} `})}):s("div",{className:"font-semibold",children:`#${e} `})},{accessor:"amount",sortable:!0,render:({amount:e,currency:t})=>s("div",{className:"flex items-center font-semibold",children:`${e} ${t}`})},{accessor:"deal_owner",title:"Deal Owner",sortable:!1,render:({owner:e})=>s("div",{className:"font-semibold",children:e?e.first_name+" "+e.last_name:"-No Owner-"})},{accessor:"closing_date",title:"Closing time",sortable:!0,render:({closing_date:e})=>{const t=new Date(e),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=t.getHours(),i=String(t.getMinutes()).padStart(2,"0"),l=a>=12?"PM":"AM",c=`${n[t.getMonth()]} ${t.getDate()}, ${t.getFullYear()} ${a%12||12}:${i} ${l}`;return s("div",{className:"font-semibold",children:c})}}]})})};export{A as default};
