import{u as d,c as m,r as u,s as p,j as s,F as g,N as h}from"./main-d8a5bb6c.js";import{G as $}from"./GenerateIndexTable-d694bbb0.js";import"./sortBy-b97195a6.js";import"./_baseIsEqual-080469de.js";import"./CommonIcons-2d80fe0b.js";import"./react-select.esm-1a6d75af.js";const x=()=>{const l=d(),{hasPermission:i}=m();return u.useEffect(()=>{l(p("Deal List"))},[l]),s(g,{children:s($,{modelName:"deal",tableColumns:[{accessor:"deal_name",sortable:!0,render:({deal_name:t,id:e})=>i("update-contact")?s(h,{to:`/deal/edit/${e}`,children:s("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${t} `})}):s("div",{className:"font-semibold",children:`#${t} `})},{accessor:"amount",sortable:!0,render:({amount:t,currency:e})=>s("div",{className:"flex items-center font-semibold",children:`${t} ${e}`})},{accessor:"deal_owner",title:"Deal Owner",sortable:!1,render:({owner:t})=>s("div",{className:"font-semibold",children:t?t.first_name+" "+t.last_name:"-No Owner-"})},{accessor:"closing_date",title:"Closing time",sortable:!0,render:({closing_date:t})=>{const e=new Date(t),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=e.getHours(),n=String(e.getMinutes()).padStart(2,"0"),o=a>=12?"PM":"AM",c=`${r[e.getMonth()]} ${e.getDate()}, ${e.getFullYear()} ${a%12||12}:${n} ${o}`;return s("div",{className:"font-semibold",children:c})}},{accessor:"created_at",title:"Created time",sortable:!0,render:({created_at:t})=>{const e=new Date(t),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=e.getHours(),n=String(e.getMinutes()).padStart(2,"0"),o=a>=12?"PM":"AM",c=`${r[e.getMonth()]} ${e.getDate()}, ${e.getFullYear()} ${a%12||12}:${n} ${o}`;return s("div",{className:"font-semibold",children:c})}}]})})};export{x as default};
