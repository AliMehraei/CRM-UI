import{u as W,r,s as R,a as A,b as t,j as a,L as D,N as w}from"./main-aee2b09f.js";import{s as b,Q as H}from"./sortBy-1a0e32a2.js";import"./floating-ui.dom-776dbd07.js";import"./_baseIsEqual-40004883.js";const G=()=>{const N=W();r.useEffect(()=>{N(R("Invoice List"))});const P=A(e=>e.themeConfig.theme)==="dark",[i,k]=r.useState([{id:1,invoice:"081451",name:"Laurie Fox",email:"lauriefox@company.com",date:"15 Dec 2020",amount:"2275.45",status:{tooltip:"Paid",color:"success"},profile:"profile-1.jpeg"},{id:2,invoice:"081452",name:"Alexander Gray",email:"alexGray3188@gmail.com",date:"20 Dec 2020",amount:"1044.00",status:{tooltip:"Paid",color:"success"},profile:"profile-1.jpeg"},{id:3,invoice:"081681",name:"James Taylor",email:"jamestaylor468@gmail.com",date:"27 Dec 2020",amount:"20.00",status:{tooltip:"Pending",color:"danger"},profile:"profile-1.jpeg"},{id:4,invoice:"082693",name:"Grace Roberts",email:"graceRoberts@company.com",date:"31 Dec 2020",amount:"344.00",status:{tooltip:"Paid",color:"success"},profile:"profile-1.jpeg"},{id:5,invoice:"084743",name:"Donna Rogers",email:"donnaRogers@hotmail.com",date:"03 Jan 2021",amount:"405.15",status:{tooltip:"Paid",color:"success"},profile:"profile-1.jpeg"},{id:6,invoice:"086643",name:"Amy Diaz",email:"amy968@gmail.com",date:"14 Jan 2020",amount:"100.00",status:{tooltip:"Paid",color:"success"},profile:"profile-1.jpeg"},{id:7,invoice:"086773",name:"Nia Hillyer",email:"niahillyer666@comapny.com",date:"20 Jan 2021",amount:"59.21",status:{tooltip:"Pending",color:"danger"},profile:"profile-1.jpeg"},{id:8,invoice:"087916",name:"Mary McDonald",email:"maryDonald007@gamil.com",date:"25 Jan 2021",amount:"79.00",status:{tooltip:"Pending",color:"danger"},profile:"profile-1.jpeg"},{id:9,invoice:"089472",name:"Andy King",email:"kingandy07@company.com",date:"28 Jan 2021",amount:"149.00",status:{tooltip:"Paid",color:"success"},profile:"profile-1.jpeg"},{id:10,invoice:"091768",name:"Vincent Carpenter",email:"vincentcarpenter@gmail.com",date:"30 Jan 2021",amount:"400",status:{tooltip:"Paid",color:"success"},profile:"profile-1.jpeg"},{id:11,invoice:"095841",name:"Kelly Young",email:"youngkelly@hotmail.com",date:"06 Feb 2021",amount:"49.00",status:{tooltip:"Pending",color:"danger"},profile:"profile-1.jpeg"},{id:12,invoice:"098424",name:"Alma Clarke",email:"alma.clarke@gmail.com",date:"10 Feb 2021",amount:"234.40",status:{tooltip:"Paid",color:"success"},profile:"profile-1.jpeg"}]),L=(e=null)=>{if(window.confirm("Are you sure want to delete selected row ?"))if(e)d(i.filter(o=>o.id!==e)),u(i.filter(o=>o.id!==e)),k(i.filter(o=>o.id!==e)),C(""),h([]);else{const g=(y||[]).map(v=>v.id),f=i.filter(v=>!g.includes(v.id));d(f),u(f),k(f),C(""),h([]),c(1)}},[p,c]=r.useState(1),x=[10,20,30,50,100],[n,S]=r.useState(x[0]),[l,u]=r.useState(b(i,"invoice")),[j,d]=r.useState(l),[y,h]=r.useState([]),[s,C]=r.useState(""),[m,M]=r.useState({columnAccessor:"firstName",direction:"asc"});return r.useEffect(()=>{c(1)},[n]),r.useEffect(()=>{const e=(p-1)*n,o=e+n;d([...l.slice(e,o)])},[p,n,l]),r.useEffect(()=>{u(()=>i.filter(e=>e.invoice.toLowerCase().includes(s.toLowerCase())||e.name.toLowerCase().includes(s.toLowerCase())||e.email.toLowerCase().includes(s.toLowerCase())||e.date.toLowerCase().includes(s.toLowerCase())||e.amount.toLowerCase().includes(s.toLowerCase())||e.status.tooltip.toLowerCase().includes(s.toLowerCase())))},[s]),r.useEffect(()=>{const e=b(l,m.columnAccessor);d(m.direction==="desc"?e.reverse():e),c(1)},[m]),t("div",{className:"panel px-0 border-white-light dark:border-[#1b2e4b]",children:a("div",{className:"invoice-table",children:[a("div",{className:"mb-4.5 px-5 flex md:items-center md:flex-row flex-col gap-5",children:[a("div",{className:"flex items-center gap-2",children:[a("button",{type:"button",className:"btn btn-danger gap-2",onClick:()=>L(),children:[a("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",children:[t("path",{d:"M20.5001 6H3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{d:"M18.8334 8.5L18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M9.5 11L10 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M14.5 11L14 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6",stroke:"currentColor",strokeWidth:"1.5"})]}),"Delete"]}),a(D,{to:"/invoice/add",className:"btn btn-primary gap-2",children:[a("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[t("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),t("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),"Add New"]})]}),t("div",{className:"ltr:ml-auto rtl:mr-auto",children:t("input",{type:"text",className:"form-input w-auto",placeholder:"Search...",value:s,onChange:e=>C(e.target.value)})})]}),t("div",{className:"datatables pagination-padding",children:t(H,{className:`${P} whitespace-nowrap table-hover`,records:j,columns:[{accessor:"invoice",sortable:!0,render:({invoice:e})=>t(w,{to:"/invoice/preview",children:t("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e}`})})},{accessor:"name",sortable:!0,render:({name:e,id:o})=>a("div",{className:"flex items-center font-semibold",children:[t("div",{className:"p-0.5 bg-white-dark/30 rounded-full w-max ltr:mr-2 rtl:ml-2",children:t("img",{className:"h-8 w-8 rounded-full object-cover",src:`/assets/images/profile-${o}.jpeg`,alt:""})}),t("div",{children:e})]})},{accessor:"email",sortable:!0},{accessor:"date",sortable:!0},{accessor:"amount",sortable:!0,titleClassName:"text-right",render:({amount:e,id:o})=>t("div",{className:"text-right font-semibold",children:`$${e}`})},{accessor:"status",sortable:!0,render:({status:e})=>t("span",{className:`badge badge-outline-${e.color} `,children:e.tooltip})},{accessor:"action",title:"Actions",sortable:!1,textAlignment:"center",render:({id:e})=>a("div",{className:"flex gap-4 items-center w-max mx-auto",children:[t(w,{to:"/invoice/edit",className:"flex hover:text-info",children:a("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-4.5 h-4.5",children:[t("path",{opacity:"0.5",d:"M22 10.5V12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2H13.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{d:"M17.3009 2.80624L16.652 3.45506L10.6872 9.41993C10.2832 9.82394 10.0812 10.0259 9.90743 10.2487C9.70249 10.5114 9.52679 10.7957 9.38344 11.0965C9.26191 11.3515 9.17157 11.6225 8.99089 12.1646L8.41242 13.9L8.03811 15.0229C7.9492 15.2897 8.01862 15.5837 8.21744 15.7826C8.41626 15.9814 8.71035 16.0508 8.97709 15.9619L10.1 15.5876L11.8354 15.0091C12.3775 14.8284 12.6485 14.7381 12.9035 14.6166C13.2043 14.4732 13.4886 14.2975 13.7513 14.0926C13.9741 13.9188 14.1761 13.7168 14.5801 13.3128L20.5449 7.34795L21.1938 6.69914C22.2687 5.62415 22.2687 3.88124 21.1938 2.80624C20.1188 1.73125 18.3759 1.73125 17.3009 2.80624Z",stroke:"currentColor",strokeWidth:"1.5"}),t("path",{opacity:"0.5",d:"M16.6522 3.45508C16.6522 3.45508 16.7333 4.83381 17.9499 6.05034C19.1664 7.26687 20.5451 7.34797 20.5451 7.34797M10.1002 15.5876L8.4126 13.9",stroke:"currentColor",strokeWidth:"1.5"})]})}),t(w,{to:"/invoice/preview",className:"flex hover:text-primary",children:a("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{opacity:"0.5",d:"M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z",stroke:"currentColor",strokeWidth:"1.5"}),t("path",{d:"M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z",stroke:"currentColor",strokeWidth:"1.5"})]})}),t("button",{type:"button",className:"flex hover:text-danger",onClick:o=>L(e),children:a("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",children:[t("path",{d:"M20.5001 6H3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{d:"M18.8334 8.5L18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M9.5 11L10 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M14.5 11L14 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6",stroke:"currentColor",strokeWidth:"1.5"})]})})]})}],highlightOnHover:!0,totalRecords:l.length,recordsPerPage:n,page:p,onPageChange:e=>c(e),recordsPerPageOptions:x,onRecordsPerPageChange:S,sortStatus:m,onSortStatusChange:M,selectedRecords:y,onSelectedRecordsChange:h,paginationText:({from:e,to:o,totalRecords:g})=>`Showing  ${e} to ${o} of ${g} entries`})})]})})};export{G as default};
