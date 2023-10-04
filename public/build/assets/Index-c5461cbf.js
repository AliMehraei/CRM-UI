import{u as m,c as d,r as u,s as f,b as t,F as p,N as b}from"./main-1d204f78.js";import{G as h}from"./GenerateIndexTable-c4bf7277.js";import"./sortBy-32afb995.js";import"./Select-aecb2a80.esm-27c7288e.js";import"./_baseIsEqual-4a2d132a.js";import"./sweetalert2.all-da6653af.js";import"./CommonFunctions-ef1be312.js";import"./react-select.esm-c3107f47.js";import"./react-select-async.esm-19b258b2.js";const F=()=>{const r=m(),{hasPermission:n}=d();return u.useEffect(()=>{r(f("Invoice List"))},[r]),t(p,{children:t(h,{modelName:"invoice",tableColumns:[{accessor:"id",sortable:!0,render:({id:e})=>t("div",{className:"font-semibold",children:e})},{accessor:"created_at",title:"Created time",sortable:!0,render:({created_at:e})=>{const s=new Date(e),o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=s.getHours(),i=String(s.getMinutes()).padStart(2,"0"),c=a>=12?"PM":"AM",l=`${o[s.getMonth()]} ${s.getDate()}, ${s.getFullYear()} ${a%12||12}:${i} ${c}`;return t("div",{className:"font-semibold",children:l})}},{accessor:"subject",sortable:!0,render:({subject:e,id:s})=>n("update-invoice")?t(b,{to:`/invoice/edit/${s}`,children:t("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e}`})}):t("div",{className:"font-semibold",children:`#${e}`})},{accessor:"owner",title:"Invoice Owner",sortable:!1,render:({owner:e})=>t("div",{className:"flex items-center font-semibold",children:e?e.first_name+" "+e.last_name:"-No owner-"})},{accessor:"contact",title:"Contact Owner",sortable:!1,render:({contact:e})=>t("div",{className:"flex items-center font-semibold",children:e?`${e.first_name} ${e.last_name}`:"-No contact-"})},{accessor:"account",title:"Account Owner",sortable:!1,render:({account:e})=>t("div",{className:"flex items-center font-semibold",children:e?e.account_name:"-No account-"})}]})})};export{F as default};
