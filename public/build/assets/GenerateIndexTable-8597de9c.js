import{j as c,b as e,F as $,e as fe,u as be,a4 as he,a5 as Ie,a as pe,c as De,r as f,a6 as I,a7 as Ve,d as Oe,L as Te,N as Pe,a8 as K,a9 as X,S as ee}from"./main-abaca463.js";import{s as me,Q as We}from"./sortBy-0beeae20.js";import{S as Ce}from"./react-select.esm-8e3be6d7.js";import{A as je}from"./react-select-async.esm-ef864f04.js";const Re=()=>c("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-4.5 h-4.5",children:[e("path",{opacity:"0.5",d:"M22 10.5V12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2H13.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M17.3009 2.80624L16.652 3.45506L10.6872 9.41993C10.2832 9.82394 10.0812 10.0259 9.90743 10.2487C9.70249 10.5114 9.52679 10.7957 9.38344 11.0965C9.26191 11.3515 9.17157 11.6225 8.99089 12.1646L8.41242 13.9L8.03811 15.0229C7.9492 15.2897 8.01862 15.5837 8.21744 15.7826C8.41626 15.9814 8.71035 16.0508 8.97709 15.9619L10.1 15.5876L11.8354 15.0091C12.3775 14.8284 12.6485 14.7381 12.9035 14.6166C13.2043 14.4732 13.4886 14.2975 13.7513 14.0926C13.9741 13.9188 14.1761 13.7168 14.5801 13.3128L20.5449 7.34795L21.1938 6.69914C22.2687 5.62415 22.2687 3.88124 21.1938 2.80624C20.1188 1.73125 18.3759 1.73125 17.3009 2.80624Z",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{opacity:"0.5",d:"M16.6522 3.45508C16.6522 3.45508 16.7333 4.83381 17.9499 6.05034C19.1664 7.26687 20.5451 7.34797 20.5451 7.34797M10.1002 15.5876L8.4126 13.9",stroke:"currentColor",strokeWidth:"1.5"})]}),Be=()=>c("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",children:[e("path",{d:"M20.5001 6H3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M18.8334 8.5L18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M9.5 11L10 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M14.5 11L14 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6",stroke:"currentColor",strokeWidth:"1.5"})]}),He=({option:n,handleFieldChange:s,selectedFields:v})=>c("label",{className:"flex items-center cursor-pointer",children:[e("input",{type:"checkbox",value:n.value,onChange:u=>s(u,n),checked:v.includes(n.value),className:"form-checkbox"}),e("span",{className:"text-dark",children:n.label})]}),ve=({onChange:n,defaultValue:s})=>c($,{children:[e("label",{className:"block text-sm text-gray-600",children:"From:"}),e("input",{defaultValue:s.from,type:"number",name:"from",className:"border p-2 w-full",onChange:n}),e("label",{className:"block text-sm text-gray-600",children:"To:"}),e("input",{defaultValue:s.to,type:"number",name:"to",className:"border p-2 w-full",onChange:n})]}),te=({onChange:n,placeholder:s,defaultValue:v})=>c($,{children:[e("label",{className:"block font-semibold",children:"Value:"}),e("input",{defaultValue:v.value,type:"text",placeholder:s,className:"border p-2 w-full",onChange:n})]}),ze=({onChange:n,optionValue:s,defaultValue:v})=>c("div",{className:" mt-4",children:[e("label",{className:"block font-semibold",children:"Duration:"}),c("div",{className:"mb-2",children:[e("input",{type:"number",placeholder:"Days",className:"border p-2 w-1/2",min:"1",name:"duration",defaultValue:v.duration,onChange:u=>n(s,u,"is")}),c("select",{name:"duration_condition",className:"border p-2 w-1/2",placeholder:"Select a Condition",defaultValue:v.duration_condition,onChange:u=>n(s,u,"is"),children:[e("option",{value:"=",children:"="}),e("option",{value:"<",children:"<"}),e("option",{value:">",children:">"}),e("option",{value:"<=",children:"<="}),e("option",{value:">=",children:">="})]})]})]}),U=({placeholder:n,onChange:s,label:v,defaultValue:u})=>c($,{children:[e("label",{className:"block font-semibold",children:v}),e("input",{type:"text",placeholder:n,className:"border p-2 w-full",defaultValue:u.value,onChange:s})]}),ge=({onChange:n,defaultValue:s})=>c($,{children:[e("label",{className:"block text-sm text-gray-600",children:"From:"}),e("input",{type:"date",name:"from",className:"border p-2 w-full",onChange:n,defaultValue:s.from}),e("label",{className:"block text-sm text-gray-600",children:"To:"}),e("input",{type:"date",name:"to",className:"border p-2 w-full",onChange:n,defaultValue:s.to})]}),Q=({onChange:n,defaultValue:s})=>e($,{children:c("div",{className:"flex",children:[e("input",{type:"number",placeholder:"2",className:"border p-2 w-1/2",min:"1",name:"period_val",defaultValue:s.value,onChange:n}),c("select",{name:"period",className:"border p-2 w-1/2",defaultValue:s.period,onChange:n,children:[e("option",{value:"days",children:"Days"}),e("option",{value:"weeks",children:"Weeks"}),e("option",{value:"months",children:"Months"})]})]})}),R=({onChange:n,defaultValue:s})=>e($,{children:e("input",{defaultValue:s.value,type:"date",className:"border p-2 w-full",onChange:n})}),G=({placeholder:n,loadOptions:s,onChange:v,filterSelect:u})=>{var g;const L=(g=u==null?void 0:u.value)==null?void 0:g.fullOptions,p=L==null?void 0:L.map(r=>({value:r.value,label:r.label}));return e(je,{defaultOptions:!0,placeholder:n,loadOptions:s,onChange:v,defaultValue:p,isMulti:!0})},q=({options:n,condition:s,optionValue:v,isMulti:u=!1,handleSelectMultipleDuration:L,handleSelectMultiple:p,defaultValue:g})=>{const r=Object.keys(n||{}).map(o=>({value:o,label:n[o]}));g=g==null?void 0:g.options;let x;return u&&Array.isArray(g)?x=g.map(o=>({value:o,label:n[o]})):!u&&g&&(x={value:g,label:n[g]}),e(Ce,{placeholder:"Select an option",onChange:o=>u?p(v,o):L(v,o,s),options:r,isMulti:u,defaultValue:x})},Ue=new fe,Qe=({filterSelect:n,option:s,setFilters:v,filters:u})=>{const L=be(),p=n.condition,g=s.type;if(!s.condition[p]||!s.condition[p].input)return null;const r=n.value,x=(a,t)=>{const d={...u};d[a]={...d[a],value:t},L(Ie({[a]:t.value})),v(d)},o=(a,t)=>{const d={value:t.target.value};x(a,d)},O=(a,t)=>{const{name:d,value:b}=t.target,k=u[a],m=k?k.value:{},C=d==="from"?b:m.from||"",w=d==="to"?b:m.to||"";x(a,{from:C,to:w})},D=(a,t)=>{const{name:d,value:b}=t.target,k=u[a],m=k?k.value:{},C=d==="period_val"?b:m.value||2,w=d==="period"?b:m.period||"day";x(a,{value:C,period:w})},V=(a,t,d="is_not")=>{let b,k,m=n.value.duration,C=n.value.duration_condition;if(t.target!=null){const{name:w,value:_}=t.target,W=u[a],S=W?W.value:{};m=w==="duration"?_:S.duration||2,C=w==="duration_condition"?_:S.duration_condition||"=",k=S.options??[]}else k=t.map(w=>w.value);d==="is_not"?b={options:k}:d==="is"&&(b={options:k,duration:m,duration_condition:C}),x(a,b)},T=(a,t)=>{let d;Array.isArray(t)?d={options:t.map(b=>b.value),fullOptions:t,relation:s==null?void 0:s.relation_model}:d={options:[t.value],fullOptions:t,relation:s==null?void 0:s.relation_model},x(a,d)},P=(a,t)=>{const d={options:t.map(b=>b.value),fullOptions:t};x(a,d)},z=async a=>{if(a.length<2)return[];const t="id",d="name",b="avatar",k="email";try{const m=await Ue.loadAdminUsers({search:a});return m.status?m.data.map(C=>({value:C[t],label:c("div",{className:"flex items-center",children:[e("img",{src:C[b],alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),c("div",{children:[e("div",{className:"text-sm font-bold",children:C[d]}),e("div",{className:"text-xs text-gray-500",children:C[k]})]})]},C[t])})):(console.error("An error occurred while fetching users",m.message),[])}catch(m){return console.error("An error occurred while fetching users:",m),[]}},A={number:{between:()=>e(ve,{defaultValue:r,onChange:a=>O(s.value,a)}),not_between:()=>e(ve,{defaultValue:r,onChange:a=>O(s.value,a)}),default:()=>e(te,{defaultValue:r,onChange:a=>o(s.value,a),placeholder:"Search value"})},select2_multiple_duration:{is_not:()=>e(q,{options:s.options,condition:"is_not",optionValue:s.value,handleSelectMultipleDuration:V,isMulti:!0}),is:()=>c($,{children:[e(q,{options:s.options,condition:"is",optionValue:s.value,isMulti:!0,defaultValue:r,handleSelectMultipleDuration:V}),e(ze,{defaultValue:r,onChange:V,optionValue:s.value})]}),default:()=>e(te,{defaultValue:r,onChange:a=>o(s.value,a),placeholder:"Search value that contains"})},select2_multiple_api_user:{is_not:a=>e(G,{placeholder:"Type at least 2 characters to search...",loadOptions:t=>z(t),defaultValue:r,filterSelect:n,onChange:t=>P(a.value,t)}),is:a=>e(G,{placeholder:"Type at least 2 characters to search...",loadOptions:t=>z(t),defaultValue:r,filterSelect:n,onChange:t=>P(a.value,t)}),default:a=>e(U,{placeholder:"Search value that contains",defaultValue:r,onChange:t=>o(a.value,t),label:"Value:"})},select2_multiple_api:{is_not:a=>e(G,{placeholder:"Type at least 2 characters to search...",loadOptions:t=>he(t,a),defaultValue:r,filterSelect:n,onChange:t=>T(a.value,t)}),is:a=>e(G,{placeholder:"Type at least 2 characters to search...",loadOptions:t=>he(t,a),defaultValue:r,filterSelect:n,onChange:t=>T(a.value,t)}),default:a=>e(U,{placeholder:"Search value that contains",defaultValue:r,onChange:t=>o(a.value,t),label:"Value:"})},select2_multiple:{is_not:()=>e(q,{options:s.options,condition:"is_not",optionValue:s.value,isMulti:!0,handleSelectMultiple:T,defaultValue:r}),is:()=>e(q,{options:s.options,condition:"is",optionValue:s.value,isMulti:!0,handleSelectMultiple:T,defaultValue:r}),default:()=>e(te,{defaultValue:r,onChange:a=>o(s.value,a),placeholder:"Search value that contains"})},text:{between:a=>e(ge,{defaultValue:r,onChange:t=>O(a.value,t)}),in_the_last:a=>e(Q,{defaultValue:r,onChange:t=>D(a.value,t)}),due_in:a=>e(Q,{defaultValue:r,onChange:t=>D(a.value,t)}),on:a=>e(R,{defaultValue:r,onChange:t=>o(a.value,t)}),before:a=>e(R,{defaultValue:r,onChange:t=>o(a.value,t)}),after:a=>e(R,{defaultValue:r,onChange:t=>o(a.value,t)}),default:a=>e(U,{placeholder:"Search value that contains",defaultValue:r,onChange:t=>o(a.value,t),label:"Value:"})},date:{between:a=>e(ge,{defaultValue:r,onChange:t=>O(a.value,t)}),in_the_last:a=>e(Q,{defaultValue:r,onChange:t=>D(a.value,t)}),due_in:a=>e(Q,{defaultValue:r,onChange:t=>D(a.value,t)}),on:a=>e(R,{defaultValue:r,onChange:t=>o(a.value,t)}),before:a=>e(R,{defaultValue:r,onChange:t=>o(a.value,t)}),after:a=>e(R,{defaultValue:r,onChange:t=>o(a.value,t)}),default:a=>e(U,{placeholder:"Search value that contains",defaultValue:r,onChange:t=>o(a.value,t),label:"Value:"})}};if(A[g])return A[g][p]?A[g][p](s):A[g].default(s)},Ge=({option:n,handleConditionChange:s,filters:v,filterState:u,setFilters:L,filterOptionRef:p})=>{var r,x;const g=((x=(r=p==null?void 0:p.current)==null?void 0:r.filters[n.value])==null?void 0:x.condition)||null;return c("div",{children:[e("h3",{className:"text-lg font-semibold mt-4",children:"Search Options"}),c("div",{className:"mb-4",children:[c("div",{className:"mb-2",children:[c("label",{className:"block font-semibold",children:["Search include for ",n.label,":"]}),e(Ce,{onChange:o=>s(n.value,o),placeholder:"Select an include",options:n.conditions,defaultValue:n.conditions.find(o=>o.value==g)})]}),v[n.value]&&e("div",{className:"mb-2",children:e(Qe,{filterOptionRef:p,filterSelect:v[n.value],option:n,setFilters:L,filters:v,filterState:u})})]})]})},Ke=({modelName:n,tableColumns:s,frontRoute:v})=>{const u=be(),L=pe(l=>l.filters),{hasPermission:p,isLoading:g,isLoggedIn:r}=De(),[x,o]=f.useState(!1),[O,D]=f.useState(!1),V=new fe,T=pe(l=>l.themeConfig.theme)==="dark",[P,z]=f.useState([]),[A,a]=f.useState([]),[t,d]=f.useState([]),[b,k]=f.useState(""),[m,C]=f.useState([]),[w,_]=f.useState(1),W=[50,100],[S,we]=f.useState(W[0]),[Z,ye]=f.useState(me(P,"id")),[xe,ke]=f.useState(Z),[ae,J]=f.useState([]),[Se,Ne]=f.useState(0),[M,Le]=f.useState({columnAccessor:"id",direction:"asc"}),F=f.useRef(),_e=async()=>{var l;o(!0);try{const h=(l=(await K("filterOption").call(V,{model:X(n)})).data)==null?void 0:l.data.map(N=>{const y=N.condition;return{...N,conditions:Object.entries(y).map(([E,H])=>({value:E,label:H.value,input:H.input,type:H.type,model:N.model}))}});a(h)}catch(i){B("Error fetching filter options.","error"),console.error("Error fetching data:",i)}o(!1)},ne=()=>{window.scrollTo({top:0,behavior:"smooth"})},se=({page:l,pageSize:i,filters:h,sortStatus:N})=>{D(!1),ne(),Y(l,i,h,N)};let le=[];A&&A.length>0&&(le=A.filter(l=>l.label.toLowerCase().includes(b.toLowerCase())));const B=(l="",i="success")=>{ee.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3,customClass:{container:"toast"}}).fire({icon:i,title:l,padding:"10px 20px"})},re=(l=null)=>{ee.fire({icon:"warning",title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonText:"Delete",padding:"2em",customClass:"sweet-alerts"}).then(i=>{i.value&&(l?(oe(l),J([])):((ae||[]).map(y=>y.id).forEach(y=>oe(y)),J([]),_(1)),ee.fire({title:"Deleted!",text:"Row has been deleted.",icon:"success",customClass:"sweet-alerts"}))})},oe=async l=>{try{o(!0),K(`deleteSingle${X(n)}`).call(V,l).then(i=>{const h=i.data;h.status?se(F.current):(B(`Error deleting the ${n}: `+h.message,"error"),console.error(`Error deleting the ${n} : `,h.message))}),o(!1)}catch(i){B("Error making delete request","error"),console.error("Error making delete request",i),o(!1)}},Y=async(l=1,i=W[0],h=[],N={})=>{o(!0);const{columnAccessor:y="",direction:E=""}=N,H=encodeURIComponent(JSON.stringify(h));try{K(`fetchData${X(n)}`).call(V,{page:l,pageSize:i,sortField:y,sortDirection:E,filterParam:H}).then(j=>{var ce,ie,de,ue;z((ie=(ce=j.data)==null?void 0:ce.data)==null?void 0:ie.data),Ne((ue=(de=j.data)==null?void 0:de.data)==null?void 0:ue.total),o(!1)}).catch(j=>{console.error("Error fetching data: ",j),o(!1),B(`Error fetching  ${n} data.`,"error")})}catch(j){B(`Error fetching ${n} data.`,"error"),console.error("Error fetching data: ",j),o(!1)}},Fe=()=>{d([]),C([]),k(""),_(1),D(!0),ne()},Me=(l,i)=>{const{value:h,checked:N}=l.target;N?(C(y=>({...y,[h]:{field:h,condition:"",value:"",model:i.model,type:i.type}})),d(y=>[...y,h])):(C(y=>{const E={...y};return delete E[h],E}),d(y=>y.filter(E=>E!==h)))},$e=l=>{const{columnAccessor:i,direction:h="asc"}=l;Le({columnAccessor:i,direction:h}),_(1),Y(w,S,m,{columnAccessor:i,direction:h})},Ae=(l,i)=>{const h=["between","in_the_last","due_in"];let N={...m[l],condition:i.value};h.includes(N.condition)&&(N.value="");const y={...m,[l]:N};C(y)};f.useEffect(()=>{const l=me(P,M.columnAccessor),i=M.direction!=="asc"?l.reverse():l;F.current={...F.current,sortStatus:M},ye(i)},[P,M]),f.useEffect(()=>{_(1)},[S]),f.useEffect(()=>{ke([...Z.slice(0,S)]),F.current={...F.current,page:w,pageSize:S}},[w,S,Z]),f.useEffect(()=>{F.current={...F.current,page:w,pageSize:S,sortStatus:M},Y(w,S,m,M)},[w,S,M,O]),f.useEffect(()=>{F.current={...F.current,filters:m}},[m]),f.useEffect(()=>{!g&&!p(`filter-${I(n)}`)&&!p(`read-${I(n)}`)&&o(!0),o(!1)},[g,r,p]),f.useEffect(()=>{_e(),u(Ve())},[]);const Ee=c("button",{type:"button",className:"btn btn-danger gap-2",onClick:()=>re(),children:[c("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",children:[e("path",{d:"M20.5001 6H3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M18.8334 8.5L18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M9.5 11L10 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M14.5 11L14 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6",stroke:"currentColor",strokeWidth:"1.5"})]}),"Delete"]});return!p(`read-${I(n)}`)||x?e(Oe,{}):e($,{children:e("div",{className:"panel px-0 border-white-light dark:border-[#1b2e4b]",children:c("div",{className:`${n}-table`,children:[e("div",{className:"mb-4.5 px-5 flex md:items-center md:flex-row flex-col gap-5",children:c("div",{className:"flex items-center gap-2",children:[p(`delete-${I(n)}`)&&Ee,p(`create-${I(n)}`)&&e(Te,{to:`/${v??n}/add`,className:"btn btn-primary gap-2",children:"Add New"})]})}),c("div",{className:"grid grid-cols-7 gap-6 mb-6",children:[p(`filter-${I(n)}`)&&c("div",{className:"panel col-span-1",children:[e("h2",{className:"text-xl font-bold mb-4",children:"Filter By Fields"}),e("div",{className:"mb-4",children:e("input",{type:"text",placeholder:"Search fields...",className:"border p-2 w-full",value:b,onChange:l=>k(l.target.value)})}),c("div",{className:"mb-4",children:[e("label",{className:"block font-semibold",children:"Filter by:"}),le.map((l,i)=>c("div",{children:[e(He,{option:l,handleFieldChange:Me,selectedFields:t}),t.includes(l.value)&&e(Ge,{option:l,handleConditionChange:Ae,filters:m,filterState:L,setFilters:C,filterOptionRef:F})]},l.value+i))]}),t.length>0&&c("div",{className:"flex justify-between space-x-2  ",style:{position:"fixed",left:-58,zIndex:99999,top:"50vh",transform:"rotate(90deg)"},children:[e("button",{onClick:()=>se({page:w,pageSize:S,filters:m,sortStatus:M}),className:"btn btn-sm btn-primary",children:"Apply Filter"}),e("button",{onClick:Fe,className:"btn btn-sm btn-dark",children:"Reset"})]})]}),e("div",{className:"panel col-span-6",children:e("div",{className:"datatables pagination-padding",children:x?e("div",{className:"flex justify-center",children:e("span",{className:"animate-spin border-4 my-4 border-success border-l-transparent rounded-full w-12 h-12 inline-block align-middle m-auto mb-10"})}):e(We,{className:`${T} whitespace-nowrap table-hover`,records:xe,columns:[...s,{accessor:"action",title:"Actions",sortable:!1,textAlignment:"center",render:({id:l})=>e($,{children:c("div",{className:"flex gap-4 items-center w-max mx-auto",children:[p(`update-${I(n)}`)&&e(Pe,{to:`/${v??n}/edit/${l}`,className:"flex hover:text-info",children:e(Re,{})}),p(`delete-${I(n)}`)&&e("button",{type:"button",className:"flex hover:text-danger",onClick:()=>re(l),children:e(Be,{})})]})})}],highlightOnHover:!0,totalRecords:Se,recordsPerPage:S,page:w,onPageChange:_,recordsPerPageOptions:W,onRecordsPerPageChange:we,sortStatus:M,onSortStatusChange:$e,selectedRecords:ae,onSelectedRecordsChange:J,paginationText:({from:l,to:i,totalRecords:h})=>`Showing ${l} to ${i} of ${h} entries`})})})]})]})})})};export{Ke as G};
