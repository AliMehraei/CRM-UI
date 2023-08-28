import{j as s,F as r,b as a}from"./main-aee2b09f.js";import{S as N}from"./react-select.esm-a7801317.js";import{a as O,A as k}from"./react-select-async.esm-688ec673.js";const S=new O,I=(F,t,V,y)=>{const _=(e,n)=>{console.log("value",n);const l={...y};l[e]={...l[e],value:n},V(l)},h=(e,n)=>{const l={value:n.target.value};_(e,l)},b=(e,n)=>{const{name:l,value:c}=n.target,o=y[e],u=o?o.value:{},d=l==="from"?c:u.from||"",i=l==="to"?c:u.to||"";_(e,{from:d,to:i})},g=(e,n)=>{const{name:l,value:c}=n.target,o=y[e],u=o?o.value:{},d=l==="period_val"?c:u.value||2,i=l==="period"?c:u.period||"day";_(e,{value:d,period:i})},w=(e,n,l="is_not")=>{let c,o,u,d;if(n.target!=null){const{name:i,value:p}=n.target,v=y[e],C=v?v.value:{};u=i==="duration"?p:C.duration||2,d=i==="duration_condtion"?p:C.duration_condtion||"=",o=C.options??[],console.log("options",o)}else o=n.map(i=>i.value);l==="is_not"?c={options:o}:l==="is"&&(c={options:o,duration:u,duration_condtion:d}),_(e,c)},x=(e,n)=>{let l;Array.isArray(n)?l={options:n.map(c=>c.value)}:l={options:[n.value]},_(e,l)},M=(e,n)=>{const l={options:n.map(c=>c.value)};_(e,l)},j=async(e,n)=>{if(e.length<2)return[];const l=n.type_info.api,c="id",o="name",u="avatar",d="email";try{const i=await S.loadAdminUsers(e,l);return i.status?i.data.map(v=>({value:v[c],label:s("div",{className:"flex items-center",children:[a("img",{src:v[u],alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),s("div",{children:[a("div",{className:"text-sm font-bold",children:v[o]}),a("div",{className:"text-xs text-gray-500",children:v[d]})]})]},v[c])})):(console.error("An error occurred while fetching users",i.message),[])}catch(i){return console.error("An error occurred while fetching users:",i),[]}},A=async(e,n)=>{if(e.length<2)return[];const l=n.type_info.api,c=n.type_info.method,o=n.type_info.value_flield,u=n.type_info.lable_filed;try{const d=await S.loadApiModelsPost(e,l,c);return d.status?d.data.data.map(p=>({value:p[o],label:a("div",{className:"flex items-center",children:a("div",{children:a("div",{className:"text-sm font-bold",children:p[u]})})},p[o])})):(console.error("An error occurred while fetching users",d.message),[])}catch(d){return console.error("An error occurred while fetching users:",d),[]}},m=F.condition,f=t.type;if(!t.condition[m]||!t.condition[m].input)return null;if(f=="number")switch(m){case"between":return s(r,{children:[a("label",{className:"block text-sm text-gray-600",children:"From:"}),a("input",{type:"number",name:"from",className:"border p-2 w-full",onChange:e=>b(t.value,e)}),a("label",{className:"block text-sm text-gray-600",children:"To:"}),a("input",{type:"number",name:"to",className:"border p-2 w-full",onChange:e=>b(t.value,e)})]});case"not_between":return s(r,{children:[a("label",{className:"block text-sm text-gray-600",children:"From:"}),a("input",{type:"number",name:"from",className:"border p-2 w-full",onChange:e=>b(t.value,e)}),a("label",{className:"block text-sm text-gray-600",children:"To:"}),a("input",{type:"number",name:"to",className:"border p-2 w-full",onChange:e=>b(t.value,e)})]});default:return s(r,{children:[a("label",{className:"block font-semibold",children:"Value:"}),a("input",{type:"number",placeholder:"Search value",className:"border p-2 w-full",onChange:e=>h(t.value,e)})]})}else if(f=="select"){const e=t.options,n=Object.keys(e).map(l=>({value:l,label:e[l]}));switch(m){case"is_empty":case"is_not_empty":break;case"is_not":case"is":return a(r,{children:a(N,{placeholder:"Select an option",onChange:l=>x(t.value,l),options:n,isMulti:!1})});default:return s(r,{children:[a("label",{className:"block font-semibold",children:"Value:"}),a("input",{type:"text",placeholder:"Search value that contains",className:"border p-2 w-full",onChange:l=>h(t.value,l)})]})}}else if(f=="select2_multiple_duration"){const e=t.options,n=Object.keys(e).map(l=>({value:l,label:e[l]}));switch(m){case"is_empty":case"is_not_empty":break;case"is_not":return a(r,{children:a(N,{placeholder:"Select an option",onChange:l=>w(t.value,l,"is_not"),options:n,isMulti:!0})});case"is":return s(r,{children:[a(N,{placeholder:"Select an option",onChange:l=>w(t.value,l,"is"),options:n,isMulti:!0}),s("div",{className:" mt-4",children:[a("label",{className:"block font-semibold",children:"Duration:"}),s("div",{className:"mb-2",children:[a("input",{type:"number",placeholder:"Days",className:"border p-2 w-1/2",min:"1",name:"duration",onChange:l=>w(t.value,l,"is")}),s("select",{name:"duration_condtion",className:"border p-2 w-1/2",placeholder:"Select a Condition",onChange:l=>w(t.value,l,"is"),children:[a("option",{value:"=",children:"="}),a("option",{value:"<",children:"<"}),a("option",{value:">",children:">"}),a("option",{value:"<=",children:"<="}),a("option",{value:">=",children:">="})]})]})]})]});default:return s(r,{children:[a("label",{className:"block font-semibold",children:"Value:"}),a("input",{type:"text",placeholder:"Search value that contains",className:"border p-2 w-full",onChange:l=>h(t.value,l)})]})}}else if(f=="select2_multiple"){const e=t.options,n=Object.keys(e).map(l=>({value:l,label:e[l]}));switch(m){case"is_empty":case"is_not_empty":break;case"is_not":case"is":return a(r,{children:a(N,{placeholder:"Select an option",onChange:l=>x(t.value,l),options:n,isMulti:!0})});default:return s(r,{children:[a("label",{className:"block font-semibold",children:"Value:"}),a("input",{type:"text",placeholder:"Search value that contains",className:"border p-2 w-full",onChange:l=>h(t.value,l)})]})}}else if(f=="select2_multiple_api_user")switch(m){case"is_empty":case"is_not_empty":break;case"is_not":case"is":return a(r,{children:a(k,{placeholder:"Type at least 2 characters to search...",loadOptions:e=>j(e,t),onChange:e=>M(t.value,e),isMulti:!0})});default:return s(r,{children:[a("label",{className:"block font-semibold",children:"Value:"}),a("input",{type:"text",placeholder:"Search value that contains",className:"border p-2 w-full",onChange:e=>h(t.value,e)})]})}else if(f=="select2_multiple_api")switch(m){case"is_empty":case"is_not_empty":break;case"is_not":case"is":return a(r,{children:a(k,{placeholder:"Type at least 2 characters to search...",loadOptions:e=>A(e,t),onChange:e=>x(t.value,e),isMulti:!0})});default:return s(r,{children:[a("label",{className:"block font-semibold",children:"Value:"}),a("input",{type:"text",placeholder:"Search value that contains",className:"border p-2 w-full",onChange:e=>h(t.value,e)})]})}else if(f=="text")switch(m){case"between":return s(r,{children:[a("label",{className:"block text-sm text-gray-600",children:"From:"}),a("input",{type:"date",name:"from",className:"border p-2 w-full",onChange:e=>b(t.value,e)}),a("label",{className:"block text-sm text-gray-600",children:"To:"}),a("input",{type:"date",name:"to",className:"border p-2 w-full",onChange:e=>b(t.value,e)})]});case"is_empty":case"is_not_empty":break;case"in_the_last":case"due_in":return a(r,{children:s("div",{className:"flex",children:[a("input",{type:"number",placeholder:"2",className:"border p-2 w-1/2",min:"1",name:"period_val",onChange:e=>g(t.value,e)}),s("select",{name:"period",className:"border p-2 w-1/2",defaultValue:"days",onChange:e=>g(t.value,e),children:[a("option",{value:"days",children:"Days"}),a("option",{value:"weeks",children:"Weeks"}),a("option",{value:"months",children:"Months"})]})]})});case"on":case"before":case"after":return a(r,{children:a("input",{type:"date",className:"border p-2 w-full",onChange:e=>h(t.value,e)})});default:return s(r,{children:[a("label",{className:"block font-semibold",children:"Value:"}),a("input",{type:"text",placeholder:"Search value that contains",className:"border p-2 w-full",onChange:e=>h(t.value,e)})]})}else if(f=="date")switch(m){case"between":return s(r,{children:[a("label",{className:"block text-sm text-gray-600",children:"From:"}),a("input",{type:"date",name:"from",className:"border p-2 w-full",onChange:e=>b(t.value,e)}),a("label",{className:"block text-sm text-gray-600",children:"To:"}),a("input",{type:"date",name:"to",className:"border p-2 w-full",onChange:e=>b(t.value,e)})]});case"is_empty":case"is_not_empty":break;case"in_the_last":case"due_in":return a(r,{children:s("div",{className:"flex",children:[a("input",{type:"number",placeholder:"2",className:"border p-2 w-1/2",min:"1",name:"period_val",onChange:e=>g(t.value,e)}),s("select",{name:"period",className:"border p-2 w-1/2",defaultValue:"days",onChange:e=>g(t.value,e),children:[a("option",{value:"days",children:"Days"}),a("option",{value:"weeks",children:"Weeks"}),a("option",{value:"months",children:"Months"})]})]})});case"on":case"before":case"after":return a(r,{children:a("input",{type:"date",className:"border p-2 w-full",onChange:e=>h(t.value,e)})});default:return s(r,{children:[a("label",{className:"block font-semibold",children:"Value:"}),a("input",{type:"text",placeholder:"Search value that contains",className:"border p-2 w-full",onChange:e=>h(t.value,e)})]})}};export{I as r};
