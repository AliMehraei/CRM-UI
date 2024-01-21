import{u as b,c as h,r as f,s as p,j as a,F as s,N as g,b as n}from"./main-763a01a7.js";import{G as L}from"./GenerateIndexTable-9f698d99.js";import"./sortBy-8c40204b.js";import"./_baseIsEqual-aa59899e.js";import"./CommonIcons-0598faa2.js";import"./react-select.esm-1d97a747.js";const j=()=>{const o=b(),{hasPermission:d}=h();f.useEffect(()=>{o(p("Lead List"))},[o]);const c=[{value:"none",label:"-None-"},{value:"0.0 Cold lead / unqualified (CLU)",label:n(s,{children:[a("span",{className:"inline-block w-4 h-4 mr-2 bg-gray-500 rounded-full"}),"0.0 Cold lead..."]})},{value:"1.0 Cold lead qualified (CLQ)",label:n(s,{children:[a("span",{className:"inline-block w-4 h-4 mr-2 bg-blue-300 rounded-full"}),"1.0 Cold lead..."]})},{value:"2.0 First contact made (FCM)",label:n(s,{children:[a("span",{className:"inline-block w-4 h-4 mr-2 bg-purple-200 rounded-full"}),"2.0 First contact..."]})},{value:"3.0 Warm lead qualified (WLQ)",label:n(s,{children:[a("span",{className:"inline-block w-4 h-4 mr-2 bg-orange-300 rounded-full"}),"3.0 warm lead..."]})},{value:"4.0 Hot lead (HLQ)",label:n(s,{children:[a("span",{className:"inline-block w-4 h-4 mr-2 bg-orange-600 rounded-full"}),"4.0 Hot lead..."]})},{value:"Close Lead / Lost Lead",label:n(s,{children:[a("span",{className:"inline-block w-4 h-4 mr-2 bg-red-500 rounded-full"}),"Close Lead / Lost Lead"]})}];return a(s,{children:a(L,{modelName:"lead",tableColumns:[{accessor:"lead_name",title:"Lead Name",sortable:!1,render:({first_name:e,last_name:l})=>a("div",{className:"flex items-center font-semibold",children:`${e} ${l}`})},{accessor:"company",sortable:!0,render:({company:e,id:l})=>{const t=e.length>20?e.slice(0,20)+"...":e;return d("update-lead")?a(g,{to:`/lead/edit/${l}`,children:a("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${t}`})}):a("div",{className:"font-semibold",children:`#${t}`})}},{accessor:"owner",title:"Lead Owner",sortable:!1,render:({owner:e})=>a("div",{className:"flex items-center font-semibold",children:e?e.first_name+" "+e.last_name:"No Owner"})},{accessor:"email",sortable:!0,render:({email:e})=>a("div",{className:"flex items-center font-semibold",children:e})},{accessor:"status",sortable:!0,render:({status:e})=>{const l=c.find(t=>t.value===e),r=l?l.label:e;return a("div",{className:"flex items-center font-semibold",children:r})}},{accessor:"created_at",title:"Created time",sortable:!0,render:({created_at:e})=>{const l=new Date(e),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t=l.getHours(),i=String(l.getMinutes()).padStart(2,"0"),m=t>=12?"PM":"AM",u=`${r[l.getMonth()]} ${l.getDate()}, ${l.getFullYear()} ${t%12||12}:${i} ${m}`;return a("div",{className:"font-semibold",children:u})}}]})})};export{j as default};
