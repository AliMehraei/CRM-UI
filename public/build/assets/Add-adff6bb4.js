import{u as m,d as v,j as e,l as g,_ as C,m as k,az as c,F as u,W as S,k as F,r as b,b as o,c as A,s as q,aA as N,e as V}from"./main-378d85af.js";import{S as y}from"./react-select.esm-c6c6ac7a.js";import{G as p,R as I}from"./GenerateFields-aa49606d.js";import{F as O}from"./FileUploadComponent-c5d2a701.js";import{r as _,s as j}from"./SelectOptions-08232785.js";import{F as Q}from"./index-3b697400.js";/* empty css                  */import{A as D}from"./ActionButtonsComponent-1e4b0b64.js";import"./ClearButtonComponent-8f10f449.js";import"./index-a7fc5899.js";const M=()=>{const s=m(),i=v(t=>t.availabilityForm),r=(t,f)=>{s(c({[t]:f}))},a={Header:{Vendor:e(g,{defaultOptions:!0,required:!0,isMulti:!1,id:"vendor_id",name:"vendor_id",placeholder:"Type at least 2 characters to search...",loadOptions:C,onChange:({value:t})=>{r("vendor_id",t)},className:"flex-1"}),"Vendor Quote No":e("input",{id:"vendor_quote_no",type:"text",name:"vendor_quote_no",className:"form-input flex-1 ",onChange:t=>r(t.target.name,t.target.value)})},"":{"Availability Owner":e(g,{defaultOptions:!0,isMulti:!1,id:"owner_id",name:"owner_id",placeholder:"Type at least 2 characters to search...",loadOptions:k,onChange:({value:t})=>{r("owner_id",t)},className:"flex-1"}),"Availability File":e(O,{id:"availability_file",modelName:"availability",formState:i,formAttribute:"availability_file",updateFormData:c}),"Availability Source":e(y,{id:"availability_source",name:"availability_source",required:!0,options:_,onChange:({value:t})=>{r("availability_source",t)},className:"flex-1",defaultValue:_.find(t=>t.value=="Other")})}};return e(u,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(p,{fields:a})})})},P=()=>{const s=m(),i=(a,t)=>{s(c({[a]:t}))};return e(u,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(p,{fields:{Status:{"Availability Type":e(y,{options:j,name:"availability_type",id:"availability_type",className:"flex-1",onChange:({value:a})=>{i("availability_type",a)}}),Valid:e(Q,{name:"valid",id:"valid",options:{dateFormat:"Y-m-d "},className:"form-input flex-1",placeholder:"YYYY-MM-DD",onChange:(a,t)=>i("valid",t)})},"":{"Availability Name":e("input",{required:!0,id:"availability_name",name:"availability_name",className:"form-input flex-1 ",onChange:a=>i(a.target.name,a.target.value)}),Rating:e("input",{id:"rating",name:"rating",className:"form-input flex-1 ",onChange:a=>i(a.target.name,a.target.value)})}}})})})},T=()=>{const s=m(),i=(a,t)=>{s(c({[a]:t}))};return e(u,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(p,{fields:{"Quote Line":{"Product name":e(g,{defaultOptions:!1,required:!0,isMulti:!1,id:"product_id",name:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:S,onChange:({value:a})=>{i("product_id",a)},className:"flex-1"}),"SKU name":e("input",{id:"sku_name",name:"sku_name",className:"form-input flex-1 ",onChange:a=>i(a.target.name,a.target.value)}),Quantity:e("input",{required:!0,id:"quantity",name:"quantity",className:"form-input flex-1 ",onChange:a=>i(a.target.name,a.target.value)}),"In Stock Quantity":e("input",{id:"in_stock_quantity",name:"in_stock_quantity",className:"form-input flex-1 ",onChange:a=>i(a.target.name,a.target.value)}),Currency:e(y,{id:"currency",name:"currency",options:F,className:"flex-1",onChange:({value:a})=>{i("currency",a)}}),Cost:e("input",{id:"cost",name:"cost",className:"form-input flex-1 ",onChange:a=>i(a.target.name,a.target.value)}),"Exchange Rate":e("input",{id:"exchangeRate",type:"text",value:"1",placeholder:"Readonly input here…",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0})},"":{"Lead Time":e("input",{id:"lead_time",name:"lead_time",className:"form-input flex-1 ",onChange:a=>i(a.target.name,a.target.value)}),"Date Code":e("input",{id:"date_code",name:"date_code",className:"form-input flex-1 ",onChange:a=>i(a.target.name,a.target.value)}),SPQ:e("input",{id:"spq",name:"spq",className:"form-input flex-1 ",onChange:a=>i(a.target.name,a.target.value)}),MOQ:e("input",{id:"moq",name:"moq",className:"form-input flex-1 ",onChange:a=>i(a.target.name,a.target.value)}),comment:e("input",{id:"comment",name:"comment",className:"form-input flex-1 ",onChange:a=>i(a.target.name,a.target.value)})}}})})})},L=()=>{const s=m(),i=v(l=>l.availabilityForm),[r,a]=b.useState(i.price_breaks),t=(l,n,d)=>{const h={...i.price_breaks[d],[l]:n},x={...i.price_breaks,[d]:h};a(Object.values(x)),s(c({price_breaks:x}))},f=()=>{let l;l=r!=null&&r.length?r.reduce((d,h)=>h.id>d?h.id:d,r[0].id):0;const n=[...r,{id:l+1}];a(n),s(c({price_breaks:n}))},w=(l=null)=>{const n=r.filter(d=>d.id!=l.id);a(n),s(c({price_breaks:n}))};return e(u,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12",children:o("div",{className:"",children:[o("div",{className:"text-lg",children:["Price Break ",e(I,{})," :"]}),o("div",{className:"mt-8",children:[e("div",{className:"overflow-x-auto	w-11/12",children:o("table",{className:"table-auto",children:[e("thead",{children:o("tr",{children:[e("th",{className:"w-1",children:"3000 (€)"}),e("th",{className:"w-1",children:"1000 (€)"}),e("th",{className:"w-1",children:"500 (€)"}),e("th",{className:"w-1",children:"250 (€)"}),e("th",{className:"w-1",children:"100 (€)"}),e("th",{className:"w-1",children:"25 (€)"}),e("th",{className:"w-1",children:"10 (€)"}),e("th",{className:"w-1",children:"1 (€)"})]})}),e("tbody",{children:r.map(l=>o("tr",{className:"align-top",children:[e("td",{children:e("input",{type:"number",className:"form-input w-32",min:0,name:"cost_3000",defaultValue:l.cost_3000,onChange:n=>t(n.target.name,n.target.value,l.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",min:0,name:"cost_1000",defaultValue:l.cost_1000,onChange:n=>t(n.target.name,n.target.value,l.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",min:0,name:"cost_500",defaultValue:l.cost_500,onChange:n=>t(n.target.name,n.target.value,l.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",min:0,name:"cost_250",defaultValue:l.cost_250,onChange:n=>t(n.target.name,n.target.value,l.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",min:0,name:"cost_100",defaultValue:l.cost_100,onChange:n=>t(n.target.name,n.target.value,l.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",min:0,name:"cost_25",defaultValue:l.cost_25,onChange:n=>t(n.target.name,n.target.value,l.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",name:"cost_10",min:0,defaultValue:l.cost_10,onChange:n=>t(n.target.name,n.target.value,l.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",name:"cost_1",min:0,defaultValue:l.cost_1,onChange:n=>t(n.target.name,n.target.value,l.id)})}),e("td",{children:e("button",{type:"button",onClick:()=>w(l),children:o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},l.id))})]})}),e("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:e("div",{className:"sm:mb-0 mb-6",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>f(),children:"Add Item"})})})]})]},"Quote Items")})})})},R=()=>{const s=m(),i=(a,t)=>{s(c({[a]:t}))};return e(u,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(p,{fields:{Development:{"From Our Inventory":e("input",{id:"from_our_inventory",type:"checkbox",name:"from_our_inventory",className:"form-checkbox",onChange:a=>i(a.target.name,a.target.checked)})}}})})})},Y=()=>o("div",{className:"mt-8 px-4",children:[e(M,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(P,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(T,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(L,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(R,{})]}),X=()=>{const{hasPermission:s}=A(),i=v(a=>a.availabilityForm),r=m();return b.useEffect(()=>{r(q("Availability Add"))}),b.useEffect(()=>{r(N())},[]),s("create-availability")?o("div",{className:"px-4",children:[e(D,{formState:i,resetForm:N}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(Y,{})})})]}):e(V,{})};export{X as default};
