import{r as t,j as e,b as o,a as N,u as M,F as k,ba as E,l as U,m as G,L as I,c as Y,s as z}from"./main-378d85af.js";import{_ as O}from"./react-apexcharts.min-f42fdd74.js";import{L as F}from"./LoadingSpinner-dc6ec74d.js";import{F as j}from"./index-3b697400.js";/* empty css                  */import{S as X}from"./react-select.esm-c6c6ac7a.js";const $=({dateStartFilter:n,dateEndFilter:p,statusFilter:s,personFilter:i})=>{const[c,b]=t.useState(!0),d=new N,[g,r]=t.useState(!1),h={series:[{name:"PRODUCT A",data:[44,55,41,67,22,43]},{name:"PRODUCT B",data:[13,23,20,8,13,27]},{name:"PRODUCT C",data:[11,17,15,15,21,14]},{name:"PRODUCT D",data:[21,7,25,13,22,8]}],options:{chart:{type:"bar",height:350,stacked:!0,toolbar:{show:!1},zoom:{enabled:!0},dataLabels:{enabled:!1}},dataLabels:{enabled:!1},responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],plotOptions:{bar:{horizontal:!1,borderRadius:10,dataLabels:{enabled:!1,total:{enabled:!1}}},dataLabels:{total:{enabled:!1}}},xaxis:{categories:["01/01/2011 GMT","01/02/2011 GMT","01/03/2011 GMT","01/04/2011 GMT","01/05/2011 GMT","01/06/2011 GMT"]},legend:{position:"right",offsetY:40},fill:{opacity:1},yaxis:{opposite:!1,labels:{offsetX:0,formatter:function(a){return new Intl.NumberFormat("en-US",{style:"currency",currency:"EUR",minimumFractionDigits:2}).format(a)}}}}},[u,S]=t.useState(h),v=async()=>{try{const a=await d.reportInvoiceChartMTD({status:s,date_start:n??"",date_end:p??"",sales_person:i});if(a.status===200){const f=a.data.data,m=h;m.series=f.series,m.options.xaxis.categories=f.options,S(m),b(!1)}else console.error("Failed to fetch MTD Billing Inc.Backlog:",a)}catch(a){console.error("An error occurred while fetching MTD Billing Inc.Backlog: ",a)}};return t.useEffect(()=>{v(),(s.length>0||i.length>0||n!="")&&r(!0)},[s,i,n]),e("div",{className:"pt-5 flex-1",children:e("div",{className:"grid  gap-6 mb-6",children:e("div",{className:"panel h-full xl:col-span-2",children:o("div",{className:"relative",children:[e("h5",{className:"font-semibold text-lg",children:g===!1?"MTD Billing":"Filtered Billing Performance Analysis"}),e("div",{className:"bg-white dark:bg-black rounded-lg",children:c?e(F,{}):e(O,{series:u.series,options:u.options,className:"rounded-lg bg-white dark:bg-black",type:"bar",height:300})})]})})})})},V=({setDateStartFilter:n,setDateEndFilter:p,setStatusFilter:s,setPersonFilter:i,dateStartFilter:c,dateEndFilter:b,statusFilter:d,personFilter:g})=>{M();const[r,h]=t.useState(""),[u,S]=t.useState(""),[v,a]=t.useState(""),[f,m]=t.useState([]),[y,w]=t.useState([]),[T,D]=t.useState([]),[H,L]=t.useState([]),B=l=>{w(l);const C=l.map(x=>x.value);m(C)},P=l=>{L(l);const C=l.map(x=>x.value);D(C)},A=()=>{s(f),i(T),n(u),p(v)},R=l=>{if(Array.isArray(l)&&l.length===2){const C=new Date(l[0].getTime()-l[0].getTimezoneOffset()*6e4).toISOString().split("T")[0],x=new Date(l[1].getTime()-l[1].getTimezoneOffset()*6e4).toISOString().split("T")[0],_=`${C} to ${x}`;h(_)}};return t.useEffect(()=>{const[l,C]=r.split(" to ");S(l),a(C)},[r]),e(k,{children:e("div",{className:"panel  border-white-light dark:border-[#1b2e4b]",children:o("div",{className:"grid sm:grid-cols-12 md:grid-cols-4 gap-3 mb-10",children:[o("div",{className:"inline-block gap-3",children:[e("label",{className:"sm:col-span-4 mt-2 block text-[16px] font-semibold text-gray-800",children:"Select Status :"}),e(X,{isMulti:!0,options:E,name:"status",id:"status",value:y,onChange:B,className:"sm:col-span-8 lg:col-span-2",placeholder:"Select Status"})]}),o("div",{className:"inline-block gap-3",children:[e("label",{className:"sm:col-span-4 mt-2 block text-[16px] font-semibold text-gray-800",children:"Select Owner :"}),e(U,{defaultOptions:!0,isMulti:!0,id:"owner_id",placeholder:"Select Owner",loadOptions:G,onChange:P,className:"sm:col-span-8 lg:col-span-2"})]}),o("div",{className:"inline-block gap-3",children:[e("label",{className:"sm:col-span-4 mt-2 block text-[16px] font-semibold text-gray-800",children:"Select Date :"}),o("div",{className:"inline-flex",children:[e(j,{options:{mode:"range",dateFormat:"Y-m-d",position:"auto left"},value:r,className:"sm:col-span-8 form-input w-56",onChange:l=>R(l)}),e("a",{className:"input-button ml-2 cursor-pointer",title:"Clear",onClick:()=>{h(""),S(""),a("")},children:o("svg",{width:"35",height:"35",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{opacity:"0.5",d:"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z",stroke:"#1C274C","stroke-width":"1.5"}),e("path",{d:"M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5",stroke:"#1C274C","stroke-width":"1.5","stroke-linecap":"round"})]})})]})]}),o("div",{className:"inline-block lg:justify-end  lg:mt-9",children:[e("button",{type:"button",onClick:A,className:"sm:col-span-12 lg:col-span-2 float-right block items-center  px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:" Filter"}),e(I,{type:"button",className:"sm:col-span-12 lg:col-span-2 float-right block items-center  mx-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",to:"/admin-analytics/invoice",reloadDocument:!0,children:"Reset"})]})]})})})},Z=({dateStartFilter:n,dateEndFilter:p,statusFilter:s,personFilter:i})=>{const[c,b]=t.useState(!0),d=new N,g={series:[{name:"PRODUCT A",data:[44,55,41,67,22,43]},{name:"PRODUCT B",data:[13,23,20,8,13,27]},{name:"PRODUCT C",data:[11,17,15,15,21,14]},{name:"PRODUCT D",data:[21,7,25,13,22,8]}],options:{chart:{type:"bar",height:350,stacked:!0,toolbar:{show:!1},zoom:{enabled:!0},dataLabels:{enabled:!1}},dataLabels:{enabled:!1},responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],plotOptions:{bar:{horizontal:!1,borderRadius:10,dataLabels:{enabled:!1,total:{enabled:!1}}},dataLabels:{total:{enabled:!1}}},xaxis:{categories:["01/01/2011 GMT","01/02/2011 GMT","01/03/2011 GMT","01/04/2011 GMT","01/05/2011 GMT","01/06/2011 GMT"]},legend:{position:"right",offsetY:40},fill:{opacity:1},yaxis:{opposite:!1,labels:{offsetX:0,formatter:function(a){return new Intl.NumberFormat("en-US",{style:"currency",currency:"EUR",minimumFractionDigits:2}).format(a)}}}}},[r,h]=t.useState(!1),[u,S]=t.useState(g),v=async()=>{try{const a=await d.reportInvoiceChartYTD({status:s,date_start:n??"",date_end:p??"",sales_person:i});if(a.status===200){const f=a.data.data,m=g;m.series=f.series,m.options.xaxis.categories=f.options,S(m),b(!1)}else console.error("Failed to fetch Booking Sales YTD:",a)}catch(a){console.error("An error occurred while fetching Booking Sales YTD: ",a)}};return t.useEffect(()=>{v(),(s.length>0||i.length>0||n!="")&&h(!0)},[s,i,n]),e("div",{className:"pt-5 flex-1",children:e("div",{className:"grid  gap-6 mb-6",children:e("div",{className:"panel h-full xl:col-span-2",children:o("div",{className:"relative",children:[e("h5",{className:"font-semibold text-lg",children:r===!1?"YTD Billing":"Filtered Billing Performance Analysis"}),e("div",{className:"bg-white dark:bg-black rounded-lg",children:c?e(F,{}):e(O,{series:u.series,options:u.options,className:"rounded-lg bg-white dark:bg-black",type:"bar",height:300})})]})})})})},q=({dateStartFilter:n,dateEndFilter:p,statusFilter:s,personFilter:i})=>{const c=new N,[b,d]=t.useState(!0),[g,r]=t.useState(0),[h,u]=t.useState(0),[S,v]=t.useState(0),[a,f]=t.useState(0),[m,y]=t.useState(!1),w=async()=>{try{const T=await c.reportInvoiceDetails({status:s,date_start:n??"",date_end:p??"",sales_person:i});if(T.status===200){const D=T.data.data;v(D.average),f(D.count),u(D.subtotal),r(D.total),d(!1)}else console.error("Failed to fetch Billing Details:",T)}catch(T){console.error("An error Billing Details: ",T)}};return t.useEffect(()=>{w(),(s.length>0||i.length>0||n!="")&&y(!0)},[s,i,n]),e(k,{children:o("div",{className:"panel  border-white-light dark:border-[#1b2e4b]",children:[e("h2",{className:"text-xl font-bold mb-4",children:m===!1?"Year in Review: 12-Month Filtered Billing Analysis":"Filtered Billing Performance Analysis"}),e("div",{className:"grid sm:grid-cols-1 lg:grid-cols-1 gap-6 mb-6",children:b?e(F,{}):o("div",{className:"flex justify-between items-center p-4",children:[o("div",{className:"inline-flex gap-3",children:[e("label",{children:" Total: "}),e("span",{children:g})]}),o("div",{className:"inline-flex gap-3",children:[e("label",{children:"SubTotal: "}),e("span",{children:h})]}),o("div",{className:"inline-flex gap-3",children:[e("label",{children:"Count: "}),e("span",{children:a})]}),o("div",{className:"inline-flex gap-3",children:[e("label",{children:"Average: "}),e("span",{children:S})]})]})})]})})},ae=()=>{const n=M(),{hasPermission:p}=Y();t.useEffect(()=>{n(z("Invoice Performance Analytics"))},[n]),t.useState(null),new N,t.useState(!0);const[s,i]=t.useState(""),[c,b]=t.useState(""),[d,g]=t.useState([]),[r,h]=t.useState([]);return e("div",{className:"panel  border-white-light dark:border-[#1b2e4b]",children:p("admin-invoice-analytics")?o(k,{children:[e(V,{setDateStartFilter:i,setDateEndFilter:b,setStatusFilter:g,setPersonFilter:h,dateStartFilter:s,dateEndFilter:c,statusFilter:d,personFilter:r}),e($,{dateStartFilter:s,dateEndFilter:c,statusFilter:d,personFilter:r}),e(Z,{dateStartFilter:s,dateEndFilter:c,statusFilter:d,personFilter:r}),e(q,{dateStartFilter:s,dateEndFilter:c,statusFilter:d,personFilter:r})]}):null})};export{ae as default};
