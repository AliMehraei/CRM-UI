import{b as u,j as e,F as D,A as Ue,a as Le,u as Ie,a7 as ke,f as Qe,a8 as Ge,d as _e,c as qe,r as d,a9 as I,aa as Je,e as Ye,L as Ze,N as re,ab as oe,ac as ce,S as ie}from"./main-5d4f75a1.js";import{s as Fe,Q as Ke}from"./sortBy-d6692cda.js";import{E as Xe,D as et,V as tt}from"./CommonIcons-ec399c13.js";import{S as De}from"./react-select.esm-2d1c0dcd.js";const at=({option:n,handleFieldChange:l,selectedFields:f})=>u("label",{className:"flex items-center cursor-pointer",children:[e("input",{type:"checkbox",value:n.value,onChange:p=>l(p,n),checked:f.includes(n.value),className:"form-checkbox"}),e("span",{className:"text-dark",children:n.label})]}),$e=({onChange:n,defaultValue:l})=>u(D,{children:[e("label",{className:"block text-sm text-gray-600",children:"From:"}),e("input",{defaultValue:l.from,type:"number",name:"from",className:"border p-2 w-full",onChange:n}),e("label",{className:"block text-sm text-gray-600",children:"To:"}),e("input",{defaultValue:l.to,type:"number",name:"to",className:"border p-2 w-full",onChange:n})]}),de=({onChange:n,placeholder:l,defaultValue:f})=>u(D,{children:[e("label",{className:"block font-semibold",children:"Value:"}),e("input",{defaultValue:f.value,type:"text",placeholder:l,className:"border p-2 w-full",onChange:n})]}),nt=({onChange:n,optionValue:l,defaultValue:f})=>u("div",{className:" mt-4",children:[e("label",{className:"block font-semibold",children:"Duration:"}),u("div",{className:"mb-2",children:[e("input",{type:"number",placeholder:"Days",className:"border p-2 w-1/2",min:"1",name:"duration",defaultValue:f.duration,onChange:p=>n(l,p,"is")}),u("select",{name:"duration_condition",className:"border p-2 w-1/2",placeholder:"Select a Condition",defaultValue:f.duration_condition,onChange:p=>n(l,p,"is"),children:[e("option",{value:"=",children:"="}),e("option",{value:"<",children:"<"}),e("option",{value:">",children:">"}),e("option",{value:"<=",children:"<="}),e("option",{value:">=",children:">="})]})]})]}),Z=({placeholder:n,onChange:l,label:f,defaultValue:p})=>u(D,{children:[e("label",{className:"block font-semibold",children:f}),e("input",{type:"text",placeholder:n,className:"border p-2 w-full",defaultValue:p.value,onChange:l})]}),Ee=({onChange:n,defaultValue:l})=>u(D,{children:[e("label",{className:"block text-sm text-gray-600",children:"From:"}),e("input",{type:"date",name:"from",className:"border p-2 w-full",onChange:n,defaultValue:l.from}),e("label",{className:"block text-sm text-gray-600",children:"To:"}),e("input",{type:"date",name:"to",className:"border p-2 w-full",onChange:n,defaultValue:l.to})]}),K=({onChange:n,defaultValue:l})=>e(D,{children:u("div",{className:"flex",children:[e("input",{type:"number",placeholder:"2",className:"border p-2 w-1/2",min:"1",name:"period_val",defaultValue:l.value,onChange:n}),u("select",{name:"period",className:"border p-2 w-1/2",defaultValue:l.period,onChange:n,children:[e("option",{value:"days",children:"Days"}),e("option",{value:"weeks",children:"Weeks"}),e("option",{value:"months",children:"Months"})]})]})}),H=({onChange:n,defaultValue:l})=>e(D,{children:e("input",{defaultValue:l.value,type:"date",className:"border p-2 w-full",onChange:n})}),X=({placeholder:n,loadOptions:l,onChange:f,filterSelect:p})=>{var c;const N=(c=p==null?void 0:p.value)==null?void 0:c.fullOptions,x=N==null?void 0:N.map(r=>({value:r.value,label:r.label}));return e(Ue,{defaultOptions:!0,placeholder:n,loadOptions:l,onChange:f,defaultValue:x,isMulti:!0})},ee=({options:n,condition:l,optionValue:f,isMulti:p=!1,handleSelectMultipleDuration:N,handleSelectMultiple:x,defaultValue:c})=>{const r=Object.keys(n||{}).map(i=>({value:i,label:n[i]}));c=c==null?void 0:c.options;let w;return p&&Array.isArray(c)?w=c.map(i=>({value:i,label:n[i]})):!p&&c&&(w={value:c,label:n[c]}),e(De,{placeholder:"Select an option",onChange:i=>p?x(f,i):N(f,i,l),options:r,isMulti:p,defaultValue:w})},lt=new Le,st=({filterSelect:n,option:l,setFilters:f,filters:p})=>{const N=Ie(),x=n.condition,c=l.type;if(!l.condition[x]||!l.condition[x].input)return null;const r=n.value,w=(t,a)=>{const m={...p};m[t]={...m[t],value:a},N(Ge({[t]:a.value})),f(m)},i=(t,a)=>{const m={value:a.target.value};w(t,m)},T=(t,a)=>{const{name:m,value:g}=a.target,b=p[t],C=b?b.value:{},y=m==="from"?g:C.from||"",_=m==="to"?g:C.to||"";w(t,{from:y,to:_})},B=(t,a)=>{const{name:m,value:g}=a.target,b=p[t],C=b?b.value:{},y=m==="period_val"?g:C.value||2,_=m==="period"?g:C.period||"day";w(t,{value:y,period:_})},k=(t,a,m="is_not")=>{let g,b,C=n.value.duration,y=n.value.duration_condition;if(a.target!=null){const{name:_,value:F}=a.target,Y=p[t],P=Y?Y.value:{};C=_==="duration"?F:P.duration||2,y=_==="duration_condition"?F:P.duration_condition||"=",b=P.options??[]}else b=a.map(_=>_.value);m==="is_not"?g={options:b}:m==="is"&&(g={options:b,duration:C,duration_condition:y}),w(t,g)},W=(t,a)=>{let m;Array.isArray(a)?m={options:a.map(g=>g.value),fullOptions:a,relation:l==null?void 0:l.relation_model}:m={options:[a.value],fullOptions:a,relation:l==null?void 0:l.relation_model},w(t,m)},M=(t,a)=>{const m={options:a.map(g=>g.value),fullOptions:a};w(t,m)},z=async t=>{if(t.length<2)return[];const a="userId",m="name",g="avatar_data",b="email";try{const C=await lt.loadAdminUsers({search:t});return C.status?C.data.map(y=>({value:y[a],label:u("div",{className:"flex items-center",children:[e("img",{src:Qe(y[g]),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),u("div",{children:[e("div",{className:"text-sm font-bold",children:y[m]}),e("div",{className:"text-xs text-gray-500",children:y[b]})]})]},y[a])})):(console.error("An error occurred while fetching users",C.message),[])}catch(C){return console.error("An error occurred while fetching users:",C),[]}},j={number:{between:()=>e($e,{defaultValue:r,onChange:t=>T(l.value,t)}),not_between:()=>e($e,{defaultValue:r,onChange:t=>T(l.value,t)}),default:()=>e(de,{defaultValue:r,onChange:t=>i(l.value,t),placeholder:"Search value"})},select2_multiple_duration:{is_not:()=>e(ee,{options:l.options,condition:"is_not",optionValue:l.value,handleSelectMultipleDuration:k,isMulti:!0}),is:()=>u(D,{children:[e(ee,{options:l.options,condition:"is",optionValue:l.value,isMulti:!0,defaultValue:r,handleSelectMultipleDuration:k}),e(nt,{defaultValue:r,onChange:k,optionValue:l.value})]}),default:()=>e(de,{defaultValue:r,onChange:t=>i(l.value,t),placeholder:"Search value that contains"})},select2_multiple_api_user:{is_not:t=>e(X,{placeholder:"Type at least 2 characters to search...",loadOptions:a=>z(a),defaultValue:r,filterSelect:n,onChange:a=>M(t.value,a)}),is:t=>e(X,{placeholder:"Type at least 2 characters to search...",loadOptions:a=>z(a),defaultValue:r,filterSelect:n,onChange:a=>M(t.value,a)}),default:t=>e(Z,{placeholder:"Search value that contains",defaultValue:r,onChange:a=>i(t.value,a),label:"Value:"})},select2_multiple_api:{is_not:t=>e(X,{placeholder:"Type at least 2 characters to search...",loadOptions:a=>ke(a,t),defaultValue:r,filterSelect:n,onChange:a=>W(t.value,a)}),is:t=>e(X,{placeholder:"Type at least 2 characters to search...",loadOptions:a=>ke(a,t),defaultValue:r,filterSelect:n,onChange:a=>W(t.value,a)}),default:t=>e(Z,{placeholder:"Search value that contains",defaultValue:r,onChange:a=>i(t.value,a),label:"Value:"})},select2_multiple:{is_not:()=>e(ee,{options:l.options,condition:"is_not",optionValue:l.value,isMulti:!0,handleSelectMultiple:W,defaultValue:r}),is:()=>e(ee,{options:l.options,condition:"is",optionValue:l.value,isMulti:!0,handleSelectMultiple:W,defaultValue:r}),default:()=>e(de,{defaultValue:r,onChange:t=>i(l.value,t),placeholder:"Search value that contains"})},text:{between:t=>e(Ee,{defaultValue:r,onChange:a=>T(t.value,a)}),in_the_last:t=>e(K,{defaultValue:r,onChange:a=>B(t.value,a)}),due_in:t=>e(K,{defaultValue:r,onChange:a=>B(t.value,a)}),on:t=>e(H,{defaultValue:r,onChange:a=>i(t.value,a)}),before:t=>e(H,{defaultValue:r,onChange:a=>i(t.value,a)}),after:t=>e(H,{defaultValue:r,onChange:a=>i(t.value,a)}),default:t=>e(Z,{placeholder:"Search value that contains",defaultValue:r,onChange:a=>i(t.value,a),label:"Value:"})},date:{between:t=>e(Ee,{defaultValue:r,onChange:a=>T(t.value,a)}),in_the_last:t=>e(K,{defaultValue:r,onChange:a=>B(t.value,a)}),due_in:t=>e(K,{defaultValue:r,onChange:a=>B(t.value,a)}),on:t=>e(H,{defaultValue:r,onChange:a=>i(t.value,a)}),before:t=>e(H,{defaultValue:r,onChange:a=>i(t.value,a)}),after:t=>e(H,{defaultValue:r,onChange:a=>i(t.value,a)}),default:t=>e(Z,{placeholder:"Search value that contains",defaultValue:r,onChange:a=>i(t.value,a),label:"Value:"})}};if(j[c])return j[c][x]?j[c][x](l):j[c].default(l)},rt=({option:n,handleConditionChange:l,filters:f,filterState:p,setFilters:N,filterOptionRef:x})=>{var r,w;const c=((w=(r=x==null?void 0:x.current)==null?void 0:r.filters[n.value])==null?void 0:w.condition)||null;return u("div",{children:[e("h3",{className:"text-lg font-semibold mt-4",children:"Search Options"}),u("div",{className:"mb-4",children:[u("div",{className:"mb-2",children:[u("label",{className:"block font-semibold",children:["Search include for ",n.label,":"]}),e(De,{onChange:i=>l(n.value,i),placeholder:"Select an include",options:n.conditions,defaultValue:n.conditions.find(i=>i.value==c)})]}),f[n.value]&&e("div",{className:"mb-2",children:e(st,{filterOptionRef:x,filterSelect:f[n.value],option:n,setFilters:N,filters:f,filterState:p})})]})]})},ut=({modelName:n,tableColumns:l,frontRoute:f,actionPlus:p=[]})=>{const N=Ie(),x=_e(s=>s.filters),{hasPermission:c,isLoading:r,isLoggedIn:w}=qe(),[i,T]=d.useState(!0),[B,k]=d.useState(!0),[W,M]=d.useState(!0),[z,j]=d.useState(!0),[t,a]=d.useState(!1),[m,g]=d.useState(!1),b=new Le,C=_e(s=>s.themeConfig.theme)==="dark",[y,_]=d.useState([]),[F,Y]=d.useState([]),[P,te]=d.useState([]),[ue,he]=d.useState(""),[A,U]=d.useState([]),[V,Q]=d.useState(1),ae=[50,100],[$,Ae]=d.useState(ae[0]),[G,Ve]=d.useState(Fe(y,"id")),[ne,Oe]=d.useState(G),[pe,le]=d.useState([]),[Te,Me]=d.useState(0),[L,je]=d.useState({columnAccessor:"created_at",direction:"desc"}),E=d.useRef(),Pe=async()=>{var s;try{M(!0);const h=(s=(await oe("filterOption").call(b,{model:ce(n)})).data)==null?void 0:s.data.map(S=>{const v=S.condition;return{...S,conditions:Object.entries(v).map(([O,J])=>({value:O,label:J.value,input:J.input,type:J.type,model:S.model}))}});Y(h)}catch(o){q("Error fetching filter options.","error"),console.error("Error fetching data:",o),M(!1)}},me=()=>{window.scrollTo({top:0,behavior:"smooth"})},fe=({page:s,pageSize:o,filters:h,sortStatus:S})=>{g(!1),me(),se(s,o,h,S)};let ge=[];F&&F.length>0&&(ge=F.filter(s=>s.label.toLowerCase().includes(ue.toLowerCase())));const q=(s="",o="success")=>{ie.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3,customClass:{container:"toast"}}).fire({icon:o,title:s,padding:"10px 20px"})},ve=(s=null)=>{ie.fire({icon:"warning",title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonText:"Delete",padding:"2em",customClass:"sweet-alerts"}).then(o=>{o.value&&(s?(be(s),le([])):((pe||[]).map(v=>v.id).forEach(v=>be(v)),le([]),Q(1)),ie.fire({title:"Deleted!",text:"Row has been deleted.",icon:"success",customClass:"sweet-alerts"}))})},be=async s=>{try{k(!0),oe(`deleteSingle${ce(n)}`).call(b,s).then(o=>{const h=o.data;h.status?fe(E.current):(q(`Error deleting the ${n}: `+h.message,"error"),console.error(`Error deleting the ${n} : `,h.message))})}catch(o){q("Error making delete request","error"),console.error("Error making delete request",o),k(!1)}},se=async(s=1,o=ae[0],h=[],S={})=>{k(!0);const{columnAccessor:v="",direction:O=""}=S,J=encodeURIComponent(JSON.stringify(h));try{oe(`fetchData${ce(n)}`).call(b,{page:s,pageSize:o,sortField:v,sortDirection:O,filterParam:J}).then(R=>{var Ce,ye,xe,we,Se,Ne;_((ye=(Ce=R.data)==null?void 0:Ce.data)==null?void 0:ye.data),Me((we=(xe=R.data)==null?void 0:xe.data)==null?void 0:we.total),((Ne=(Se=R.data)==null?void 0:Se.data)==null?void 0:Ne.data.length)==0?a(!0):a(!1)}).catch(R=>{console.error("Error fetching data: ",R),j(!z),q(`Error fetching  ${n} data.`,"error")})}catch(R){q(`Error fetching ${n} data.`,"error"),console.error("Error fetching data: ",R),j(!z)}},Re=()=>{te([]),U([]),he(""),Q(1),g(!0),me()},Be=(s,o)=>{const{value:h,checked:S}=s.target;S?(U(v=>({...v,[h]:{field:h,condition:"",value:"",model:o.model,type:o.type}})),te(v=>[...v,h])):(U(v=>{const O={...v};return delete O[h],O}),te(v=>v.filter(O=>O!==h)))},We=s=>{const{columnAccessor:o,direction:h="desc"}=s;je({columnAccessor:o,direction:h}),Q(1),se(V,$,A,{columnAccessor:o,direction:h})},ze=(s,o)=>{const h=["between","in_the_last","due_in"];let S={...A[s],condition:o.value};h.includes(S.condition)&&(S.value="");const v={...A,[s]:S};U(v)};d.useEffect(()=>{const s=Fe(y,L.columnAccessor),o=L.direction!=="asc"?s.reverse():s;E.current={...E.current,sortStatus:L},Ve(o)},[y,L]),d.useEffect(()=>{Q(1)},[$]),d.useEffect(()=>{Oe([...G.slice(0,$)]),E.current={...E.current,page:V,pageSize:$}},[V,$,G]),d.useEffect(()=>{M(!0),F.length>0&&M(!1)},[F]),d.useEffect(()=>{k(!0),ne.length>0&&k(!1),G.length>0&&k(!1),t&&k(!1)},[ne,G,z,t]),d.useEffect(()=>{E.current={...E.current,page:V,pageSize:$,sortStatus:L},se(V,$,A,L)},[V,$,L,m]),d.useEffect(()=>{E.current={...E.current,filters:A}},[A]),d.useEffect(()=>{!r&&!c(`filter-${I(n)}`)&&!c(`read-${I(n)}`)&&T(!0),T(!1)},[r,w,c]),d.useEffect(()=>{Pe(),N(Je())},[]);const He=u("button",{type:"button",className:"btn btn-danger gap-2",onClick:()=>ve(),children:[u("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",children:[e("path",{d:"M20.5001 6H3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M18.8334 8.5L18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M9.5 11L10 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M14.5 11L14 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6",stroke:"currentColor",strokeWidth:"1.5"})]}),"Delete"]});return!c(`read-${I(n)}`)||i?e(Ye,{}):e(D,{children:e("div",{className:"panel px-0 border-white-light dark:border-[#1b2e4b]",children:u("div",{className:`${n}-table`,children:[e("div",{className:"mb-4.5 px-5 flex md:items-center md:flex-row flex-col gap-5",children:u("div",{className:"flex items-center gap-2",children:[c(`delete-${I(n)}`)&&He,c(`create-${I(n)}`)&&e(Ze,{to:`/${f??n}/add`,className:"btn btn-primary gap-2",children:"Add New"})]})}),u("div",{className:"grid grid-cols-7 gap-6 mb-6",children:[c(`filter-${I(n)}`)&&u("div",{className:"panel col-span-1",children:[e("h2",{className:"text-xl font-bold mb-4",children:"Filter By Fields"}),e("div",{className:"mb-4",children:e("input",{type:"text",placeholder:"Search fields...",className:"border p-2 w-full",value:ue,onChange:s=>he(s.target.value)})}),u("div",{className:"mb-4",children:[e("label",{className:"block font-semibold",children:"Filter by:"}),W?e("div",{className:"flex justify-center",children:e("span",{className:"animate-spin border-4 my-4 border-primary border-l-transparent rounded-full w-12 h-12 inline-block align-middle m-auto mb-10"})}):e("div",{children:ge.map((s,o)=>u("div",{children:[e(at,{option:s,handleFieldChange:Be,selectedFields:P}),P.includes(s.value)&&e(rt,{option:s,handleConditionChange:ze,filters:A,filterState:x,setFilters:U,filterOptionRef:E})]},s.value+o))})]}),P.length>0&&u("div",{className:"flex justify-between space-x-2  ",style:{position:"fixed",left:-58,zIndex:99999,top:"50vh",transform:"rotate(90deg)"},children:[e("button",{onClick:()=>fe({page:V,pageSize:$,filters:A,sortStatus:L}),className:"btn btn-sm btn-primary",children:"Apply Filter"}),e("button",{onClick:Re,className:"btn btn-sm btn-dark",children:"Reset"})]})]}),e("div",{className:"panel col-span-6",children:e("div",{className:"datatables pagination-padding",children:B?e("div",{className:"flex justify-center",children:e("span",{className:"animate-spin border-4 my-4 border-primary border-l-transparent rounded-full w-12 h-12 inline-block align-middle m-auto mb-10"})}):e(Ke,{className:`${C} whitespace-nowrap table-hover`,records:ne,columns:[...l,{accessor:"action",title:"Actions",sortable:!1,textAlignment:"center",render:({id:s})=>e(D,{children:u("div",{className:"flex gap-4 items-center w-max mx-auto",children:[c(`update-${I(n)}`)&&e(re,{to:`/${f??n}/edit/${s}`,className:"flex hover:text-info",children:e(Xe,{})}),c(`delete-${I(n)}`)&&e("button",{type:"button",className:"flex hover:text-danger",onClick:()=>ve(s),children:e(et,{})}),c(`read-${I(n)}`)&&e(re,{to:`/${f??n}/preview/${s}`,className:"flex hover:text-info",children:e(tt,{})}),p.map((o,h)=>e(re,{to:`/${o.route}/${s}`,className:"flex hover:text-info",children:o.icon},`${s}-${h}`))]})})}],highlightOnHover:!0,totalRecords:Te,recordsPerPage:$,page:V,onPageChange:Q,recordsPerPageOptions:ae,onRecordsPerPageChange:Ae,sortStatus:L,onSortStatusChange:We,selectedRecords:pe,onSelectedRecordsChange:le,paginationText:({from:s,to:o,totalRecords:h})=>`Showing ${s} to ${o} of ${h} entries`})})})]})]})})})};export{ut as G};
