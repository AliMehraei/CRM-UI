import{u as z,c as C,r as a,h as S,s as m,ad as i,j as e,F as d,b as t}from"./main-2e04d675.js";import{_ as h}from"./react-apexcharts.min-538f3f8c.js";const W=()=>{const l=z();C();const[c,p]=a.useState(""),[u,g]=a.useState(""),[x,f]=a.useState(""),[v,b]=a.useState("");a.useState([]);const[w,N]=a.useState(""),y=S().id;a.useEffect(()=>{l(m(c))},[l]);const r={series:[44,55,13,43,22],options:{chart:{height:300,type:"pie",zoom:{enabled:!1},toolbar:{show:!1}},labels:["Team A","Team B","Team C","Team D","Team E"],colors:["#4361ee","#805dca","#00ab55","#e7515a","#e2a03f"],responsive:[{breakpoint:480,options:{chart:{width:200}}}],stroke:{show:!1},legend:{position:"bottom"}}},k=[{header:"Material",sampleData:"476577",rows:["468423","468405","468398"]}];a.useEffect(()=>{const s=window.location.pathname.split("/");p(i(s[1])+" - Overview"),g(s[1]),f("View "+i(s[1])+" List"),b("Your "+i(s[1])+" List Overview"),N("Here you can see an overview about your uploaded "+i(s[1])+"  list"),l(m(i(s[1])+" - Overview"))},[]);const[j,T]=a.useState({}),[n,D]=a.useState(k);return e(d,{children:t("div",{className:"panel px-0 border-white-light dark:border-[#1b2e4b]",children:[e("div",{className:"px-4 sm:px-6 lg:px-8",children:e("section",{className:"border-b border-gray-200 pb-4",children:e("div",{className:"sm:flex sm:items-center sm:justify-between",children:e("h3",{className:"title-1",children:e("b",{children:c})})})})}),t("div",{className:"my-4",children:[e("section",{className:" px-4 sm:px-6 lg:px-8 ",children:t("div",{className:"sm:flex sm:items-center sm:justify-between border-b border-gray-200 pb-4",children:[e("h3",{className:"title-1",children:" "}),e("div",{className:"flex mt-3 sm:ml-4 sm:mt-0 space-x-1",children:t("button",{id:"confirmlist-next-tour",type:"button",onClick:()=>{window.location.href=`/${u}/list/${y}`},className:"bg-blue-500 hover:bg-blue-700 text-white font-bold flex items-center p-2 space-x-2 text-sm rounded border-primary-500",children:[e("span",{children:x}),e("svg",{className:"w-4 h-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})})]})})]})}),e("section",{className:"dashboard-item-view-page  px-4 sm:px-6 lg:px-8 ",children:t("div",{className:"rounded-lg bg-white overflow-hidden shadow p-6 text-center",children:[e("h3",{className:"text-lg font-medium leading-6 text-gray-900",children:v}),e("p",{className:"text-sm font-medium text-gray-500 mt-4",children:w}),t("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-5 mt-4 divide-x divide-y md:divide-y-0 divide-gray-200",children:[t("div",{className:"col-span-2",children:[t("div",{className:"chartjs-size-monitor",children:[e("div",{className:"chartjs-size-monitor-expand",children:e("div",{className:""})}),e("div",{className:"chartjs-size-monitor-shrink",children:e("div",{className:""})})]}),e("div",{className:"flex items-center justify-center p-5 text-lg font-medium leading-6 text-gray-900 text-center",children:"Data Source"}),e(h,{series:r.series,options:r.options,className:"rounded-lg bg-white dark:bg-black",type:"pie",height:300})]}),t("div",{className:"col-span-2",children:[t("div",{className:"chartjs-size-monitor",children:[e("div",{className:"chartjs-size-monitor-expand",children:e("div",{className:""})}),e("div",{className:"chartjs-size-monitor-shrink",children:e("div",{className:""})})]}),e("div",{className:"flex items-center justify-center p-5 text-lg font-medium leading-6 text-gray-900 text-center",children:"Founded MPNs"}),e(h,{series:r.series,options:r.options,className:"rounded-lg bg-white dark:bg-black",type:"pie",height:300})]})]})]})}),e("section",{id:"table-section-list2-tour",className:"dashboard-item-view-page  px-4 sm:px-6 lg:px-8 mt-6",children:e("div",{className:"rounded-lg bg-white overflow-hidden shadow p-6",children:t("div",{className:"",children:[t("div",{className:"flex flex-row items-center justify-between h-full space-x-3",children:[e("h3",{className:"text-lg font-medium leading-6 text-gray-900",children:"Your uploaded file data                "}),e("div",{className:"flex justify-start",children:t("div",{className:"bg-yellow-300 rounded px-2 py-1 flex items-center space-x-1",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"})}),e("span",{className:"text-black text-sm",children:"Double click on the row to change file header"})]})})]}),e("div",{className:"overflow-x-scroll mt-6",children:e("div",{className:"flex flex-col",children:e("div",{className:"flex-grow",children:t("table",{children:[e("thead",{children:e("tr",{children:n.map((o,s)=>t(d,{children:[e("th",{className:"",children:e("button",{"data-bom-item-id":"240",className:"remove-header-btn flex space-x-3 items-center justify-center w-full p-3 rounded hover:bg-gray-100 default-transition",children:e("svg",{className:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})})}),e("th",{children:j[s]||o.header},s)]}))})}),e("tbody",{children:n[0].rows.map((o,s)=>e("tr",{children:n.map((M,L)=>t(d,{children:[e("td",{className:"border p-2",children:e("button",{type:"button","data-row-id":"66085",className:"bg-gray-200 ignored-switch toggle toggle-red bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200",role:"switch","aria-checked":"false",children:t("span",{className:"translate-x-0 translate-x-0 pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200",children:[e("span",{className:"opacity-100 toggle-icon-1 ease-in duration-200 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity","aria-hidden":"true",children:e("svg",{className:"h-3 w-3 text-gray-400",fill:"currentColor",viewBox:"0 0 12 12",children:e("path",{d:"M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"})})}),e("span",{className:"opacity-0 toggle-icon-2 ease-out duration-100 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity","aria-hidden":"true",children:e("svg",{className:"h-3 w-3 text-red-500",fill:"none",viewBox:"0 0 12 12",children:e("path",{d:"M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})})}),e("td",{children:M.rows[s]},L)]}))},s))})]})})})}),e("div",{className:"mt-6"})]})})})]})]})})};export{W as default};
