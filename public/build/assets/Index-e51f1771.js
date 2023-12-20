import{u as d,c as m,r as u,s as p,j as s,F as f,N as h}from"./main-d8a5bb6c.js";import{G as b}from"./GenerateIndexTable-d694bbb0.js";import"./sortBy-b97195a6.js";import"./_baseIsEqual-080469de.js";import"./CommonIcons-2d80fe0b.js";import"./react-select.esm-1a6d75af.js";const k=()=>{const i=d(),{hasPermission:l}=m();return u.useEffect(()=>{i(p("Task List"))},[i]),s(f,{children:s(b,{modelName:"task",tableColumns:[{accessor:"subject",title:"Task subject",sortable:!1,render:({subject:e,id:t})=>l("update-task")?s(h,{to:`/task/edit/${t}`,children:s("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e}`})}):s("div",{className:"font-semibold",children:`#${e}`})},{accessor:"due_date",title:"Due Date",sortable:!0,render:({due_date:e})=>{const t=new Date(e),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=t.getHours(),n=String(t.getMinutes()).padStart(2,"0"),o=a>=12?"PM":"AM",c=`${r[t.getMonth()]} ${t.getDate()}, ${t.getFullYear()} ${a%12||12}:${n} ${o}`;return s("div",{className:"font-semibold",children:c})}},{accessor:"owner",title:"Task Owner",sortable:!1,render:({owner:e})=>s("div",{className:"flex items-center font-semibold",children:e?e.first_name+" "+e.last_name:"No Owner"})},{accessor:"status",sortable:!0,render:({status:e})=>s("div",{className:"flex items-center font-semibold",children:e})},{accessor:"priority",sortable:!0,render:({priority:e})=>s("div",{className:"flex items-center font-semibold",children:e})},{accessor:"created_at",title:"Created time",sortable:!0,render:({created_at:e})=>{const t=new Date(e),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=t.getHours(),n=String(t.getMinutes()).padStart(2,"0"),o=a>=12?"PM":"AM",c=`${r[t.getMonth()]} ${t.getDate()}, ${t.getFullYear()} ${a%12||12}:${n} ${o}`;return s("div",{className:"font-semibold",children:c})}}]})})};export{k as default};