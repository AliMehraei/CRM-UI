import{b as s,j as n}from"./main-378d85af.js";const h=(e,t,a)=>t?new Intl.NumberFormat("en-US",{style:"currency",currency:a,minimumFractionDigits:2,maximumFractionDigits:2}).format(e):e.toFixed(2),r=(e,t)=>t===0?e===0?"N/A":"New":(e-t)/t*100,o=({value:e})=>{const t=e>0?"badge bg-green-500":"badge bg-red-500",a=typeof e=="number"?`${e.toFixed(2)}%`:e;return n("div",{className:t,children:a})},p=({title:e,value:t,isCurrency:a,currency:c})=>s("div",{className:"flex items-center font-bold mt-2",children:[s("span",{className:"ltr:mr-2 rtl:ml-2",children:[e,":"]}),n("span",{children:h(t,a,c)})]}),w=({currentAmount:e,lastPeriodAmount:t,sectionTitle:a,firstColor:c="cyan-500",secondColor:N="cyan-400",isCurrency:m=!0,currency:d="EUR",currentTitle:f="Current Period",lastPeriodTitle:v="Last Period",currentAverage:i,currentCount:l,lastPeriodAverage:g,lastPeriodCount:b})=>{const x=r(e,t),u=r(l,b),y=r(i,g);return s("div",{className:"panel bg-gradient-to-r from-cyan-500 to-cyan-400",children:[n("div",{className:"flex justify-between",children:n("div",{className:"text-md font-semibold",children:a})}),s("div",{className:"flex items-center mt-5",children:[n("div",{className:"text-3xl font-bold ltr:mr-3 rtl:ml-3",children:h(e,m,d)}),n(o,{value:x})]}),typeof i=="number"&&typeof g=="number"&&s("div",{className:"flex items-center justify-between",children:[n(p,{title:`${f} Average`,value:i,isCurrency:m,currency:d}),n(o,{value:y})]}),typeof l=="number"&&typeof b=="number"&&s("div",{className:"flex items-center justify-between",children:[n(p,{title:`${f} Count`,value:l}),n(o,{value:u})]})]})};export{w as L};
