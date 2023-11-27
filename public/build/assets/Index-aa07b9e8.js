import{u as o,c,r as m,s as u,j as e,F as a,N as b,b as r}from"./main-0b302a62.js";import{G as f}from"./GenerateIndexTable-8ca1a44c.js";import"./sortBy-ae092935.js";import"./_baseIsEqual-4212dfc7.js";import"./CommonIcons-fc2ebd59.js";import"./react-select.esm-baf394b3.js";const x=()=>{const n=o(),{hasPermission:d}=c();m.useEffect(()=>{n(u("Lead List"))},[n]);const i=[{value:"none",label:"-None-"},{value:"0.0 Cold lead / unqualified (CLU)",label:r(a,{children:[e("span",{className:"inline-block w-4 h-4 mr-2 bg-gray-500 rounded-full"}),"0.0 Cold lead / unqualified (CLU)"]})},{value:"1.0 Cold lead qualified (CLQ)",label:r(a,{children:[e("span",{className:"inline-block w-4 h-4 mr-2 bg-blue-300 rounded-full"}),"1.0 Cold lead qualified (CLQ)"]})},{value:"2.0 First contact made (FCM)",label:r(a,{children:[e("span",{className:"inline-block w-4 h-4 mr-2 bg-purple-200 rounded-full"}),"2.0 First contact made (FCM)"]})},{value:"3.0 warm lead qualified (WLQ)",label:r(a,{children:[e("span",{className:"inline-block w-4 h-4 mr-2 bg-orange-300 rounded-full"}),"3.0 warm lead qualified (WLQ)"]})},{value:"4.0 Hot lead (HLQ)",label:r(a,{children:[e("span",{className:"inline-block w-4 h-4 mr-2 bg-orange-600 rounded-full"}),"4.0 Hot lead (HLQ)"]})},{value:"Close Lead / Lost Lead",label:r(a,{children:[e("span",{className:"inline-block w-4 h-4 mr-2 bg-red-500 rounded-full"}),"Close Lead / Lost Lead"]})}];return e(a,{children:e(f,{modelName:"lead",tableColumns:[{accessor:"id",sortable:!0,render:({id:l})=>e("div",{className:"font-semibold",children:l})},{accessor:"lead_name",title:"Lead Name",sortable:!1,render:({first_name:l,last_name:s})=>e("div",{className:"flex items-center font-semibold",children:`${l} ${s}`})},{accessor:"company",sortable:!0,render:({company:l,id:s})=>d("update-lead")?e(b,{to:`/lead/edit/${s}`,children:e("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${l}`})}):e("div",{className:"font-semibold",children:`#${l}`})},{accessor:"owner",title:"Lead Owner",sortable:!1,render:({owner:l})=>e("div",{className:"flex items-center font-semibold",children:l?l.first_name+" "+l.last_name:"No Owner"})},{accessor:"email",sortable:!0,render:({email:l})=>e("div",{className:"flex items-center font-semibold",children:l})},{accessor:"status",sortable:!0,render:({status:l})=>{const s=i.find(t=>t.value===l);return s?e("div",{className:"flex items-center font-semibold",children:s.label}):e("div",{className:"flex items-center font-semibold",children:l})}}]})})};export{x as default};