import{b as d,j as e,F as A,l as Oe,a as Ce,u as xe,a8 as me,f as Me,a9 as Te,d as ve,c as Pe,r as v,aa as D,ab as je,e as Re,L as Be,N as X,ac as ee,ad as te,S as ae}from"./main-acf92102.js";import{s as fe,Q as We}from"./sortBy-ab201d09.js";import{E as ze,D as He,V as Ue}from"./CommonIcons-993ab145.js";import{S as we}from"./react-select.esm-71f1ee2c.js";const Qe=({option:n,handleFieldChange:s,selectedFields:m})=>d("label",{className:"flex items-center cursor-pointer",children:[e("input",{type:"checkbox",value:n.value,onChange:p=>s(p,n),checked:m.includes(n.value),className:"form-checkbox"}),e("span",{className:"text-dark",children:n.label})]}),ge=({onChange:n,defaultValue:s})=>d(A,{children:[e("label",{className:"block text-sm text-gray-600",children:"From:"}),e("input",{defaultValue:s.from,type:"number",name:"from",className:"border p-2 w-full",onChange:n}),e("label",{className:"block text-sm text-gray-600",children:"To:"}),e("input",{defaultValue:s.to,type:"number",name:"to",className:"border p-2 w-full",onChange:n})]}),ne=({onChange:n,placeholder:s,defaultValue:m})=>d(A,{children:[e("label",{className:"block font-semibold",children:"Value:"}),e("input",{defaultValue:m.value,type:"text",placeholder:s,className:"border p-2 w-full",onChange:n})]}),Ge=({onChange:n,optionValue:s,defaultValue:m})=>d("div",{className:" mt-4",children:[e("label",{className:"block font-semibold",children:"Duration:"}),d("div",{className:"mb-2",children:[e("input",{type:"number",placeholder:"Days",className:"border p-2 w-1/2",min:"1",name:"duration",defaultValue:m.duration,onChange:p=>n(s,p,"is")}),d("select",{name:"duration_condition",className:"border p-2 w-1/2",placeholder:"Select a Condition",defaultValue:m.duration_condition,onChange:p=>n(s,p,"is"),children:[e("option",{value:"=",children:"="}),e("option",{value:"<",children:"<"}),e("option",{value:">",children:">"}),e("option",{value:"<=",children:"<="}),e("option",{value:">=",children:">="})]})]})]}),Q=({placeholder:n,onChange:s,label:m,defaultValue:p})=>d(A,{children:[e("label",{className:"block font-semibold",children:m}),e("input",{type:"text",placeholder:n,className:"border p-2 w-full",defaultValue:p.value,onChange:s})]}),be=({onChange:n,defaultValue:s})=>d(A,{children:[e("label",{className:"block text-sm text-gray-600",children:"From:"}),e("input",{type:"date",name:"from",className:"border p-2 w-full",onChange:n,defaultValue:s.from}),e("label",{className:"block text-sm text-gray-600",children:"To:"}),e("input",{type:"date",name:"to",className:"border p-2 w-full",onChange:n,defaultValue:s.to})]}),G=({onChange:n,defaultValue:s})=>e(A,{children:d("div",{className:"flex",children:[e("input",{type:"number",placeholder:"2",className:"border p-2 w-1/2",min:"1",name:"period_val",defaultValue:s.value,onChange:n}),d("select",{name:"period",className:"border p-2 w-1/2",defaultValue:s.period,onChange:n,children:[e("option",{value:"days",children:"Days"}),e("option",{value:"weeks",children:"Weeks"}),e("option",{value:"months",children:"Months"})]})]})}),W=({onChange:n,defaultValue:s})=>e(A,{children:e("input",{defaultValue:s.value,type:"date",className:"border p-2 w-full",onChange:n})}),q=({placeholder:n,loadOptions:s,onChange:m,filterSelect:p})=>{var c;const F=(c=p==null?void 0:p.value)==null?void 0:c.fullOptions,w=F==null?void 0:F.map(r=>({value:r.value,label:r.label}));return e(Oe,{defaultOptions:!0,placeholder:n,loadOptions:s,onChange:m,defaultValue:w,isMulti:!0})},J=({options:n,condition:s,optionValue:m,isMulti:p=!1,handleSelectMultipleDuration:F,handleSelectMultiple:w,defaultValue:c})=>{const r=Object.keys(n||{}).map(i=>({value:i,label:n[i]}));c=c==null?void 0:c.options;let y;return p&&Array.isArray(c)?y=c.map(i=>({value:i,label:n[i]})):!p&&c&&(y={value:c,label:n[c]}),e(we,{placeholder:"Select an option",onChange:i=>p?w(m,i):F(m,i,s),options:r,isMulti:p,defaultValue:y})},qe=new Ce,Je=({filterSelect:n,option:s,setFilters:m,filters:p})=>{const F=xe(),w=n.condition,c=s.type;if(!s.condition[w]||!s.condition[w].input)return null;const r=n.value,y=(t,a)=>{const u={...p};u[t]={...u[t],value:a},F(Te({[t]:a.value})),m(u)},i=(t,a)=>{const u={value:a.target.value};y(t,u)},x=(t,a)=>{const{name:u,value:g}=a.target,S=p[t],b=S?S.value:{},f=u==="from"?g:b.from||"",N=u==="to"?g:b.to||"";y(t,{from:f,to:N})},T=(t,a)=>{const{name:u,value:g}=a.target,S=p[t],b=S?S.value:{},f=u==="period_val"?g:b.value||2,N=u==="period"?g:b.period||"day";y(t,{value:f,period:N})},P=(t,a,u="is_not")=>{let g,S,b=n.value.duration,f=n.value.duration_condition;if(a.target!=null){const{name:N,value:_}=a.target,V=p[t],M=V?V.value:{};b=N==="duration"?_:M.duration||2,f=N==="duration_condition"?_:M.duration_condition||"=",S=M.options??[]}else S=a.map(N=>N.value);u==="is_not"?g={options:S}:u==="is"&&(g={options:S,duration:b,duration_condition:f}),y(t,g)},L=(t,a)=>{let u;Array.isArray(a)?u={options:a.map(g=>g.value),fullOptions:a,relation:s==null?void 0:s.relation_model}:u={options:[a.value],fullOptions:a,relation:s==null?void 0:s.relation_model},y(t,u)},U=(t,a)=>{const u={options:a.map(g=>g.value),fullOptions:a};y(t,u)},j=async t=>{if(t.length<2)return[];const a="id",u="name",g="avatar_data",S="email";try{const b=await qe.loadAdminUsers({search:t});return b.status?b.data.map(f=>({value:f[a],label:d("div",{className:"flex items-center",children:[e("img",{src:Me(f[g]),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),d("div",{children:[e("div",{className:"text-sm font-bold",children:f[u]}),e("div",{className:"text-xs text-gray-500",children:f[S]})]})]},f[a])})):(console.error("An error occurred while fetching users",b.message),[])}catch(b){return console.error("An error occurred while fetching users:",b),[]}},R={number:{between:()=>e(ge,{defaultValue:r,onChange:t=>x(s.value,t)}),not_between:()=>e(ge,{defaultValue:r,onChange:t=>x(s.value,t)}),default:()=>e(ne,{defaultValue:r,onChange:t=>i(s.value,t),placeholder:"Search value"})},select2_multiple_duration:{is_not:()=>e(J,{options:s.options,condition:"is_not",optionValue:s.value,handleSelectMultipleDuration:P,isMulti:!0}),is:()=>d(A,{children:[e(J,{options:s.options,condition:"is",optionValue:s.value,isMulti:!0,defaultValue:r,handleSelectMultipleDuration:P}),e(Ge,{defaultValue:r,onChange:P,optionValue:s.value})]}),default:()=>e(ne,{defaultValue:r,onChange:t=>i(s.value,t),placeholder:"Search value that contains"})},select2_multiple_api_user:{is_not:t=>e(q,{placeholder:"Type at least 2 characters to search...",loadOptions:a=>j(a),defaultValue:r,filterSelect:n,onChange:a=>U(t.value,a)}),is:t=>e(q,{placeholder:"Type at least 2 characters to search...",loadOptions:a=>j(a),defaultValue:r,filterSelect:n,onChange:a=>U(t.value,a)}),default:t=>e(Q,{placeholder:"Search value that contains",defaultValue:r,onChange:a=>i(t.value,a),label:"Value:"})},select2_multiple_api:{is_not:t=>e(q,{placeholder:"Type at least 2 characters to search...",loadOptions:a=>me(a,t),defaultValue:r,filterSelect:n,onChange:a=>L(t.value,a)}),is:t=>e(q,{placeholder:"Type at least 2 characters to search...",loadOptions:a=>me(a,t),defaultValue:r,filterSelect:n,onChange:a=>L(t.value,a)}),default:t=>e(Q,{placeholder:"Search value that contains",defaultValue:r,onChange:a=>i(t.value,a),label:"Value:"})},select2_multiple:{is_not:()=>e(J,{options:s.options,condition:"is_not",optionValue:s.value,isMulti:!0,handleSelectMultiple:L,defaultValue:r}),is:()=>e(J,{options:s.options,condition:"is",optionValue:s.value,isMulti:!0,handleSelectMultiple:L,defaultValue:r}),default:()=>e(ne,{defaultValue:r,onChange:t=>i(s.value,t),placeholder:"Search value that contains"})},text:{between:t=>e(be,{defaultValue:r,onChange:a=>x(t.value,a)}),in_the_last:t=>e(G,{defaultValue:r,onChange:a=>T(t.value,a)}),due_in:t=>e(G,{defaultValue:r,onChange:a=>T(t.value,a)}),on:t=>e(W,{defaultValue:r,onChange:a=>i(t.value,a)}),before:t=>e(W,{defaultValue:r,onChange:a=>i(t.value,a)}),after:t=>e(W,{defaultValue:r,onChange:a=>i(t.value,a)}),default:t=>e(Q,{placeholder:"Search value that contains",defaultValue:r,onChange:a=>i(t.value,a),label:"Value:"})},date:{between:t=>e(be,{defaultValue:r,onChange:a=>x(t.value,a)}),in_the_last:t=>e(G,{defaultValue:r,onChange:a=>T(t.value,a)}),due_in:t=>e(G,{defaultValue:r,onChange:a=>T(t.value,a)}),on:t=>e(W,{defaultValue:r,onChange:a=>i(t.value,a)}),before:t=>e(W,{defaultValue:r,onChange:a=>i(t.value,a)}),after:t=>e(W,{defaultValue:r,onChange:a=>i(t.value,a)}),default:t=>e(Q,{placeholder:"Search value that contains",defaultValue:r,onChange:a=>i(t.value,a),label:"Value:"})}};if(R[c])return R[c][w]?R[c][w](s):R[c].default(s)},Ye=({option:n,handleConditionChange:s,filters:m,filterState:p,setFilters:F,filterOptionRef:w})=>{var r,y;const c=((y=(r=w==null?void 0:w.current)==null?void 0:r.filters[n.value])==null?void 0:y.condition)||null;return d("div",{children:[e("h3",{className:"text-lg font-semibold mt-4",children:"Search Options"}),d("div",{className:"mb-4",children:[d("div",{className:"mb-2",children:[d("label",{className:"block font-semibold",children:["Search include for ",n.label,":"]}),e(we,{onChange:i=>s(n.value,i),placeholder:"Select an include",options:n.conditions,defaultValue:n.conditions.find(i=>i.value==c)})]}),m[n.value]&&e("div",{className:"mb-2",children:e(Je,{filterOptionRef:w,filterSelect:m[n.value],option:n,setFilters:F,filters:m,filterState:p})})]})]})},tt=({modelName:n,tableColumns:s,frontRoute:m,actionPlus:p=[]})=>{const F=xe(),w=ve(l=>l.filters),{hasPermission:c,isLoading:r,isLoggedIn:y}=Pe(),[i,x]=v.useState(!1),[T,P]=v.useState(!1),L=new Ce,U=ve(l=>l.themeConfig.theme)==="dark",[j,R]=v.useState([]),[t,a]=v.useState([]),[u,g]=v.useState([]),[S,b]=v.useState(""),[f,N]=v.useState([]),[_,V]=v.useState(1),M=[50,100],[$,ye]=v.useState(M[0]),[Y,Se]=v.useState(fe(j,"id")),[Ne,ke]=v.useState(Y),[se,Z]=v.useState([]),[_e,Fe]=v.useState(0),[E,$e]=v.useState({columnAccessor:"created_at",direction:"desc"}),I=v.useRef(),Ie=async()=>{var l;x(!0);try{const h=(l=(await ee("filterOption").call(L,{model:te(n)})).data)==null?void 0:l.data.map(k=>{const C=k.condition;return{...k,conditions:Object.entries(C).map(([O,H])=>({value:O,label:H.value,input:H.input,type:H.type,model:k.model}))}});a(h)}catch(o){z("Error fetching filter options.","error"),console.error("Error fetching data:",o)}x(!1)},le=()=>{window.scrollTo({top:0,behavior:"smooth"})},re=({page:l,pageSize:o,filters:h,sortStatus:k})=>{P(!1),le(),K(l,o,h,k)};let oe=[];t&&t.length>0&&(oe=t.filter(l=>l.label.toLowerCase().includes(S.toLowerCase())));const z=(l="",o="success")=>{ae.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3,customClass:{container:"toast"}}).fire({icon:o,title:l,padding:"10px 20px"})},ce=(l=null)=>{ae.fire({icon:"warning",title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonText:"Delete",padding:"2em",customClass:"sweet-alerts"}).then(o=>{o.value&&(l?(ie(l),Z([])):((se||[]).map(C=>C.id).forEach(C=>ie(C)),Z([]),V(1)),ae.fire({title:"Deleted!",text:"Row has been deleted.",icon:"success",customClass:"sweet-alerts"}))})},ie=async l=>{try{x(!0),ee(`deleteSingle${te(n)}`).call(L,l).then(o=>{const h=o.data;h.status?re(I.current):(z(`Error deleting the ${n}: `+h.message,"error"),console.error(`Error deleting the ${n} : `,h.message))}),x(!1)}catch(o){z("Error making delete request","error"),console.error("Error making delete request",o),x(!1)}},K=async(l=1,o=M[0],h=[],k={})=>{x(!0);const{columnAccessor:C="",direction:O=""}=k,H=encodeURIComponent(JSON.stringify(h));try{ee(`fetchData${te(n)}`).call(L,{page:l,pageSize:o,sortField:C,sortDirection:O,filterParam:H}).then(B=>{var de,ue,he,pe;R((ue=(de=B.data)==null?void 0:de.data)==null?void 0:ue.data),Fe((pe=(he=B.data)==null?void 0:he.data)==null?void 0:pe.total),x(!1)}).catch(B=>{console.error("Error fetching data: ",B),x(!1),z(`Error fetching  ${n} data.`,"error")})}catch(B){z(`Error fetching ${n} data.`,"error"),console.error("Error fetching data: ",B),x(!1)}},Ee=()=>{g([]),N([]),b(""),V(1),P(!0),le()},De=(l,o)=>{const{value:h,checked:k}=l.target;k?(N(C=>({...C,[h]:{field:h,condition:"",value:"",model:o.model,type:o.type}})),g(C=>[...C,h])):(N(C=>{const O={...C};return delete O[h],O}),g(C=>C.filter(O=>O!==h)))},Ae=l=>{const{columnAccessor:o,direction:h="desc"}=l;$e({columnAccessor:o,direction:h}),V(1),K(_,$,f,{columnAccessor:o,direction:h})},Le=(l,o)=>{const h=["between","in_the_last","due_in"];let k={...f[l],condition:o.value};h.includes(k.condition)&&(k.value="");const C={...f,[l]:k};N(C)};v.useEffect(()=>{const l=fe(j,E.columnAccessor),o=E.direction!=="asc"?l.reverse():l;I.current={...I.current,sortStatus:E},Se(o)},[j,E]),v.useEffect(()=>{V(1)},[$]),v.useEffect(()=>{ke([...Y.slice(0,$)]),I.current={...I.current,page:_,pageSize:$}},[_,$,Y]),v.useEffect(()=>{I.current={...I.current,page:_,pageSize:$,sortStatus:E},K(_,$,f,E)},[_,$,E,T]),v.useEffect(()=>{I.current={...I.current,filters:f}},[f]),v.useEffect(()=>{!r&&!c(`filter-${D(n)}`)&&!c(`read-${D(n)}`)&&x(!0),x(!1)},[r,y,c]),v.useEffect(()=>{Ie(),F(je())},[]);const Ve=d("button",{type:"button",className:"btn btn-danger gap-2",onClick:()=>ce(),children:[d("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",children:[e("path",{d:"M20.5001 6H3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M18.8334 8.5L18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M9.5 11L10 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M14.5 11L14 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6",stroke:"currentColor",strokeWidth:"1.5"})]}),"Delete"]});return!c(`read-${D(n)}`)||i?e(Re,{}):e(A,{children:e("div",{className:"panel px-0 border-white-light dark:border-[#1b2e4b]",children:d("div",{className:`${n}-table`,children:[e("div",{className:"mb-4.5 px-5 flex md:items-center md:flex-row flex-col gap-5",children:d("div",{className:"flex items-center gap-2",children:[c(`delete-${D(n)}`)&&Ve,c(`create-${D(n)}`)&&e(Be,{to:`/${m??n}/add`,className:"btn btn-primary gap-2",children:"Add New"})]})}),d("div",{className:"grid grid-cols-7 gap-6 mb-6",children:[c(`filter-${D(n)}`)&&d("div",{className:"panel col-span-1",children:[e("h2",{className:"text-xl font-bold mb-4",children:"Filter By Fields"}),e("div",{className:"mb-4",children:e("input",{type:"text",placeholder:"Search fields...",className:"border p-2 w-full",value:S,onChange:l=>b(l.target.value)})}),d("div",{className:"mb-4",children:[e("label",{className:"block font-semibold",children:"Filter by:"}),oe.map((l,o)=>d("div",{children:[e(Qe,{option:l,handleFieldChange:De,selectedFields:u}),u.includes(l.value)&&e(Ye,{option:l,handleConditionChange:Le,filters:f,filterState:w,setFilters:N,filterOptionRef:I})]},l.value+o))]}),u.length>0&&d("div",{className:"flex justify-between space-x-2  ",style:{position:"fixed",left:-58,zIndex:99999,top:"50vh",transform:"rotate(90deg)"},children:[e("button",{onClick:()=>re({page:_,pageSize:$,filters:f,sortStatus:E}),className:"btn btn-sm btn-primary",children:"Apply Filter"}),e("button",{onClick:Ee,className:"btn btn-sm btn-dark",children:"Reset"})]})]}),e("div",{className:"panel col-span-6",children:e("div",{className:"datatables pagination-padding",children:i?e("div",{className:"flex justify-center",children:e("span",{className:"animate-spin border-4 my-4 border-success border-l-transparent rounded-full w-12 h-12 inline-block align-middle m-auto mb-10"})}):e(We,{className:`${U} whitespace-nowrap table-hover`,records:Ne,columns:[...s,{accessor:"action",title:"Actions",sortable:!1,textAlignment:"center",render:({id:l})=>e(A,{children:d("div",{className:"flex gap-4 items-center w-max mx-auto",children:[c(`update-${D(n)}`)&&e(X,{to:`/${m??n}/edit/${l}`,className:"flex hover:text-info",children:e(ze,{})}),c(`delete-${D(n)}`)&&e("button",{type:"button",className:"flex hover:text-danger",onClick:()=>ce(l),children:e(He,{})}),c(`read-${D(n)}`)&&e(X,{to:`/${m??n}/preview/${l}`,className:"flex hover:text-info",children:e(Ue,{})}),p.map((o,h)=>e(X,{to:`/${o.route}/${l}`,className:"flex hover:text-info",children:o.icon},`${l}-${h}`))]})})}],highlightOnHover:!0,totalRecords:_e,recordsPerPage:$,page:_,onPageChange:V,recordsPerPageOptions:M,onRecordsPerPageChange:ye,sortStatus:E,onSortStatusChange:Ae,selectedRecords:se,onSelectedRecordsChange:Z,paginationText:({from:l,to:o,totalRecords:h})=>`Showing ${l} to ${o} of ${h} entries`})})})]})]})})})};export{tt as G};
