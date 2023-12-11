import{r as t,j as e,b as l,a as y,u as M,F as k,l as G,m as U,L as Y,c as B,s as z}from"./main-2e04d675.js";import{_ as O}from"./react-apexcharts.min-538f3f8c.js";import{L as F}from"./LoadingSpinner-6fc0ac0b.js";import{F as I}from"./index-a09d771a.js";/* empty css                  */import{S as j}from"./react-select.esm-fdc63f69.js";const $=({dateStartFilter:s,dateEndFilter:g,statusFilter:r,personFilter:o})=>{const[S,T]=t.useState(!0),D=new y,[h,u]=t.useState(!1),i={series:[{name:"PRODUCT A",data:[44,55,41,67,22,43]},{name:"PRODUCT B",data:[13,23,20,8,13,27]},{name:"PRODUCT C",data:[11,17,15,15,21,14]},{name:"PRODUCT D",data:[21,7,25,13,22,8]}],options:{chart:{type:"bar",height:350,stacked:!0,toolbar:{show:!1},zoom:{enabled:!0},dataLabels:{enabled:!1}},dataLabels:{enabled:!1},responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],plotOptions:{bar:{horizontal:!1,borderRadius:10,dataLabels:{enabled:!1,total:{enabled:!1}}},dataLabels:{total:{enabled:!1}}},xaxis:{categories:["01/01/2011 GMT","01/02/2011 GMT","01/03/2011 GMT","01/04/2011 GMT","01/05/2011 GMT","01/06/2011 GMT"]},legend:{position:"right",offsetY:40},fill:{opacity:1},yaxis:{opposite:!1,labels:{offsetX:0,formatter:function(a){return new Intl.NumberFormat("en-US",{style:"currency",currency:"EUR",minimumFractionDigits:2}).format(a)}}}}},[p,c]=t.useState(i),f=async()=>{try{const a=await D.reportQuoteChartMTD({status:r,date_start:s??"",date_end:g??"",owner:o});if(a.status===200){const m=a.data.data,d=i;d.series=m.series,d.options.xaxis.categories=m.options,c(d),T(!1)}else console.error("Failed to fetch MTD Billing Inc.Backlog:",a)}catch(a){console.error("An error occurred while fetching MTD Billing Inc.Backlog: ",a)}};return t.useEffect(()=>{f(),(r.length>0||o.length>0||s!="")&&u(!0)},[r,o,s]),e("div",{className:"pt-5 flex-1",children:e("div",{className:"grid  gap-6 mb-6",children:e("div",{className:"panel h-full xl:col-span-2",children:l("div",{className:"relative",children:[e("h5",{className:"font-semibold text-lg",children:h===!1?"MTD Quote":"Filtered Quote Performance Analysis"}),e("div",{className:"bg-white dark:bg-black rounded-lg",children:S?e(F,{}):e(O,{series:p.series,options:p.options,className:"rounded-lg bg-white dark:bg-black",type:"bar",height:300})})]})})})})},X=({setDateStartFilter:s,setDateEndFilter:g,setStatusFilter:r,setPersonFilter:o,dateStartFilter:S,dateEndFilter:T,statusFilter:D,personFilter:h})=>{M();const[u,i]=t.useState(""),[p,c]=t.useState(""),[f,a]=t.useState(""),[m,d]=t.useState([]),[b,w]=t.useState([]),[v,x]=t.useState([]),[q,L]=t.useState([]),P=[{value:"draft",label:"Draft"},{value:"no_feedback",label:"No Feedback"},{value:"negotiation_price",label:"Negotiation Price"},{value:"negotiation_conditions",label:"Negotiation Conditions"},{value:"open",label:"Open"},{value:"lost",label:"Lost"},{value:"won",label:"Won"}],_=n=>{w(n);const C=n.map(N=>N.value);d(C)},A=n=>{L(n);const C=n.map(N=>N.value);x(C)},R=()=>{r(m),o(v),s(p),g(f)},E=n=>{if(Array.isArray(n)&&n.length===2){const C=new Date(n[0].getTime()-n[0].getTimezoneOffset()*6e4).toISOString().split("T")[0],N=new Date(n[1].getTime()-n[1].getTimezoneOffset()*6e4).toISOString().split("T")[0],Q=`${C} to ${N}`;i(Q)}};return t.useEffect(()=>{const[n,C]=u.split(" to ");c(n),a(C)},[u]),e(k,{children:e("div",{className:"panel  border-white-light dark:border-[#1b2e4b]",children:l("div",{className:"grid sm:grid-cols-12 md:grid-cols-4 gap-3 mb-10",children:[l("div",{className:"inline-block gap-3",children:[e("label",{className:"sm:col-span-4 mt-2 block text-[16px] font-semibold text-gray-800",children:"Select Quote Stage :"}),e(j,{isMulti:!0,options:P,name:"status",id:"status",value:b,onChange:_,className:"sm:col-span-8 lg:col-span-2",placeholder:"Select Quote Stage"})]}),l("div",{className:"inline-block gap-3",children:[e("label",{className:"sm:col-span-4 mt-2 block text-[16px] font-semibold text-gray-800",children:"Select Owner :"}),e(G,{defaultOptions:!0,isMulti:!0,id:"owner_id",placeholder:"Select Owner",loadOptions:U,onChange:A,className:"sm:col-span-8 lg:col-span-2"})]}),l("div",{className:"inline-block gap-3",children:[e("label",{className:"sm:col-span-4 mt-2 block text-[16px] font-semibold text-gray-800",children:"Select Date :"}),l("div",{className:"inline-flex",children:[e(I,{options:{mode:"range",dateFormat:"Y-m-d",position:"auto left"},value:u,className:"sm:col-span-8 form-input w-56",onChange:n=>E(n)}),e("a",{className:"input-button ml-2 cursor-pointer",title:"Clear",onClick:()=>{i(""),c(""),a("")},children:l("svg",{width:"35",height:"35",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{opacity:"0.5",d:"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z",stroke:"#1C274C",strokeWidth:"1.5"}),e("path",{d:"M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5",stroke:"#1C274C",strokeWidth:"1.5",strokeLinecap:"round"})]})})]})]}),l("div",{className:"inline-block lg:justify-end  lg:mt-9",children:[e("button",{type:"button",onClick:R,className:"sm:col-span-12 lg:col-span-2 float-right block items-center  px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:" Filter"}),e(Y,{type:"button",className:"sm:col-span-12 lg:col-span-2 float-right block items-center  mx-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",to:"/admin-analytics/sales-order",reloadDocument:!0,children:"Reset"})]})]})})})},W=({dateStartFilter:s,dateEndFilter:g,statusFilter:r,personFilter:o})=>{const[S,T]=t.useState(!0),D=new y,h={series:[{name:"PRODUCT A",data:[44,55,41,67,22,43]},{name:"PRODUCT B",data:[13,23,20,8,13,27]},{name:"PRODUCT C",data:[11,17,15,15,21,14]},{name:"PRODUCT D",data:[21,7,25,13,22,8]}],options:{chart:{type:"bar",height:350,stacked:!0,toolbar:{show:!1},zoom:{enabled:!0},dataLabels:{enabled:!1}},dataLabels:{enabled:!1},responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],plotOptions:{bar:{horizontal:!1,borderRadius:10,dataLabels:{enabled:!1,total:{enabled:!1}}},dataLabels:{total:{enabled:!1}}},xaxis:{categories:["01/01/2011 GMT","01/02/2011 GMT","01/03/2011 GMT","01/04/2011 GMT","01/05/2011 GMT","01/06/2011 GMT"]},legend:{position:"right",offsetY:40},fill:{opacity:1},yaxis:{opposite:!1,labels:{offsetX:0,formatter:function(a){return new Intl.NumberFormat("en-US",{style:"currency",currency:"EUR",minimumFractionDigits:2}).format(a)}}}}},[u,i]=t.useState(!1),[p,c]=t.useState(h),f=async()=>{try{const a=await D.reportQuoteChartYTD({status:r,date_start:s??"",date_end:g??"",owner:o});if(a.status===200){const m=a.data.data,d=h;d.series=m.series,d.options.xaxis.categories=m.options,c(d),T(!1)}else console.error("Failed to fetch Booking Sales YTD:",a)}catch(a){console.error("An error occurred while fetching Booking Sales YTD: ",a)}};return t.useEffect(()=>{f(),(r.length>0||o.length>0||s!="")&&i(!0)},[r,o,s]),e("div",{className:"pt-5 flex-1",children:e("div",{className:"grid  gap-6 mb-6",children:e("div",{className:"panel h-full xl:col-span-2",children:l("div",{className:"relative",children:[e("h5",{className:"font-semibold text-lg",children:u===!1?"YTD Quote":"Filtered Quote Performance Analysis"}),e("div",{className:"bg-white dark:bg-black rounded-lg",children:S?e(F,{}):e(O,{series:p.series,options:p.options,className:"rounded-lg bg-white dark:bg-black",type:"bar",height:300})})]})})})})},V=({dateStartFilter:s,dateEndFilter:g,statusFilter:r,personFilter:o})=>{const S=new y,[T,D]=t.useState(!0),[h,u]=t.useState(0),[i,p]=t.useState(0),[c,f]=t.useState(0),[a,m]=t.useState(0),[d,b]=t.useState(!1),w=async()=>{try{const v=await S.reportQuoteDetails({status:r,date_start:s??"",date_end:g??"",sales_person:o});if(v.status===200){const x=v.data.data;f(x.average),m(x.count),p(x.gpTotal),u(x.total),D(!1)}else console.error("Failed to fetch Sales Details:",v)}catch(v){console.error("An error Sales Details: ",v)}};return t.useEffect(()=>{w(),(r.length>0||o.length>0||s!="")&&b(!0)},[r,o,s]),e(k,{children:l("div",{className:"panel  border-white-light dark:border-[#1b2e4b]",children:[e("h2",{className:"text-xl font-bold mb-4",children:d===!1?"Year in Review: 12-Month Filtered Quote Analysis":"Filtered Quote Performance Analysis"}),e("div",{className:"grid sm:grid-cols-1 lg:grid-cols-1 gap-6 mb-6",children:T?e(F,{}):l("div",{className:"flex justify-between items-center p-4",children:[l("div",{className:"inline-flex gap-3",children:[e("label",{children:"Sales Total: "}),e("span",{children:h})]}),l("div",{className:"inline-flex gap-3",children:[e("label",{children:"GP Total: "}),e("span",{children:i})]}),l("div",{className:"inline-flex gap-3",children:[e("label",{children:"Count: "}),e("span",{children:a})]}),l("div",{className:"inline-flex gap-3",children:[e("label",{children:"Average: "}),e("span",{children:c})]})]})})]})})},ae=()=>{const s=M(),{hasPermission:g}=B();t.useEffect(()=>{s(z("Quote Performance Analytics"))},[s]);const[r,o]=t.useState(null),S=new y,[T,D]=t.useState(!0),[h,u]=t.useState(""),[i,p]=t.useState(""),[c,f]=t.useState([]),[a,m]=t.useState([]),d=async()=>{try{const b=await S.dashboardData();b.status===200?o(b.data.data.sales_order):console.error("Failed to fetch dashboard data:",b)}catch(b){console.error("An error occurred while fetching dashboard data:",b)}finally{D(!1)}};return t.useEffect(()=>{d()},[]),e("div",{className:"panel  border-white-light dark:border-[#1b2e4b]",children:g("admin-quote-analytics")?l(k,{children:[e(X,{setDateStartFilter:u,setDateEndFilter:p,setStatusFilter:f,setPersonFilter:m,dateStartFilter:h,dateEndFilter:i,statusFilter:c,personFilter:a}),e($,{dateStartFilter:h,dateEndFilter:i,statusFilter:c,personFilter:a}),e(W,{dateStartFilter:h,dateEndFilter:i,statusFilter:c,personFilter:a}),e(V,{dateStartFilter:h,dateEndFilter:i,statusFilter:c,personFilter:a})]}):null})};export{ae as default};
