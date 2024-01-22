import{u as b,d as g,j as e,A as w,aD as D,b as m,x as C,n as O,f as j,aG as f,F as y,a0 as E,t as S,k as P,r as v,h as I,c as Q,s as T,aH as V,e as F,a as L}from"./main-47e64be7.js";import{A as M}from"./ActionButtonsComponent-b1e33665.js";import{S as k}from"./react-select.esm-a7d99c23.js";import{G as x,R as $}from"./GenerateFields-ecaae248.js";import{F as R}from"./FileUploadComponent-86656e61.js";import{v as q,w as A}from"./SelectOptions-3a2c6409.js";import{F as U}from"./index-c90cb229.js";import{A as Y}from"./AttachmentSection-ed14aaa0.js";/* empty css                  */import"./index-2a8dd478.js";import"./ClearButtonComponent-9216c711.js";const B=()=>{var l,o,p,a,i,s,u,_;const d=b(),t=g(r=>r.availabilityForm),n=(r,h)=>{d(f({[r]:h}))},c={Header:{Vendor:e(w,{defaultOptions:!0,required:!0,isMulti:!1,id:"vendor_id",name:"vendor_id",placeholder:"Type at least 2 characters to search...",loadOptions:D,onChange:({value:r})=>{n("vendor_id",r)},className:"flex-1",defaultValue:{value:(l=t.vendor)==null?void 0:l.id,label:m("div",{className:"flex items-center",children:[e("div",{children:e("div",{className:"text-sm font-bold",children:(o=t.vendor)==null?void 0:o.vendor_name})}),e("button",{className:"btn text-xs btn-sm ml-auto",onClick:()=>{var r;return C(`${(r=t.vendor)==null?void 0:r.vendor_name}`)},children:"Copy & Select"})]},(p=t.vendor)==null?void 0:p.id)}}),"Vendor Quote No":e("input",{id:"vendor_quote_no",type:"text",name:"vendor_quote_no",className:"form-input flex-1 ",defaultValue:t.vendor_quote_no,onChange:r=>n(r.target.name,r.target.value)})},"":{"Availability Owner":e(w,{defaultOptions:!0,isMulti:!1,id:"owner_id",name:"owner_id",placeholder:"Type at least 2 characters to search...",loadOptions:O,onChange:({value:r})=>{n("owner_id",r)},defaultValue:{value:(a=t.owner)==null?void 0:a.id,label:m("div",{className:"flex items-center",children:[t.owner?e("img",{src:j(t.owner.avatar_data),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,m("div",{children:[e("div",{className:"text-sm font-bold",children:((i=t.owner)==null?void 0:i.first_name)+" "+((s=t.owner)==null?void 0:s.last_name)}),e("div",{className:"text-xs text-gray-500",children:(u=t.owner)==null?void 0:u.email})]}),e("button",{className:"btn text-xs btn-sm ml-auto",onClick:()=>{var r,h;return C(`${((r=t.owner)==null?void 0:r.first_name)+" "+((h=t.owner)==null?void 0:h.last_name)}`)},children:"Copy & Select"})]},(_=t.owner)==null?void 0:_.id)},className:"flex-1"}),"Availability File":e(R,{id:"availability_file",modelName:"availability",formState:t,formAttribute:"availability_file",updateFormData:f}),"Availability Source":e(k,{id:"availability_source",name:"availability_source",required:!0,options:q,onChange:({value:r})=>{n("availability_source",r)},className:"flex-1",defaultValue:q.find(r=>r.value==t.availability_source)})}};return e(y,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(x,{fields:c})})})},G=()=>{const d=b(),t=g(l=>l.availabilityForm),n=(l,o)=>{d(f({[l]:o}))},c={Status:{"Availability Type":e(k,{options:A,name:"availability_type",id:"availability_type",className:"flex-1",onChange:({value:l})=>{n("availability_type",l)},defaultValue:A.find(l=>l.value==t.availability_source)}),Valid:e(U,{name:"valid",id:"valid",options:{dateFormat:"Y-m-d ",defaultDate:t.valid?new Date(t.valid):null},defaultValue:t.valid,className:"form-input flex-1",placeholder:"MM DD YYYY",onChange:(l,o)=>n("valid",o)})},"":{"Availability Name":e("input",{required:!0,id:"availability_name",name:"availability_name",className:"form-input flex-1 ",defaultValue:t.availability_name,onChange:l=>n(l.target.name,l.target.value)}),"Availability Number":e("input",{required:!0,id:"availability_no",name:"availability_no",className:"form-input flex-1 ",defaultValue:t.availability_no,onChange:l=>n(l.target.name,l.target.value)}),Rating:e("input",{id:"rating",name:"rating",className:"form-input flex-1 ",defaultValue:t.rating,onChange:l=>n(l.target.name,l.target.value)})}};return e(y,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(x,{fields:c})})})},H=()=>{var l,o,p;const d=b(),t=g(a=>a.availabilityForm),n=(a,i)=>{d(P({[a]:i}))},c={"Quote Line":{"Product name":e(w,{defaultOptions:!1,required:!0,isMulti:!1,id:"product_id",name:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:E,onChange:({value:a})=>{n("product_id",a)},defaultValue:{value:(l=t.product)==null?void 0:l.id,label:m("div",{className:"flex items-center",children:[e("div",{className:"text-sm font-bold",children:(o=t.product)==null?void 0:o.product_name}),e("button",{className:"btn text-xs btn-sm ml-auto",onClick:()=>{var a;return C(`${(a=t.product)==null?void 0:a.product_name}`)},children:"Copy & Select"})]},(p=t.product)==null?void 0:p.id)},className:"flex-1"}),"SKU name":e("input",{id:"sku_name",name:"sku_name",className:"form-input flex-1 ",defaultValue:t.sku_name,onChange:a=>n(a.target.name,a.target.value)}),Quantity:e("input",{required:!0,id:"quantity",name:"quantity",className:"form-input flex-1 ",defaultValue:t.quantity,onChange:a=>n(a.target.name,a.target.value)}),"In Stock Quantity":e("input",{id:"in_stock_quantity",name:"in_stock_quantity",defaultValue:t.in_stock_quantity,className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),Currency:e(k,{id:"currency",name:"currency",options:S,className:"flex-1",defaultValue:S.find(a=>a.value==t.currency),onChange:({value:a})=>{n("currency",a)}}),Cost:e("input",{id:"cost",name:"cost",className:"form-input flex-1 ",defaultValue:t.cost,onChange:a=>n(a.target.name,a.target.value)}),"Exchange Rate":e("input",{id:"exchangeRate",type:"text",value:"1",placeholder:"readOnly input here…",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0})},"":{"Lead Time":e("input",{id:"lead_time",name:"lead_time",className:"form-input flex-1 ",defaultValue:t.lead_time,onChange:a=>n(a.target.name,a.target.value)}),"Date Code":e("input",{id:"date_code",name:"date_code",className:"form-input flex-1 ",defaultValue:t.date_code,onChange:a=>n(a.target.name,a.target.value)}),SPQ:e("input",{id:"spq",name:"spq",className:"form-input flex-1 ",defaultValue:t.spq,onChange:a=>n(a.target.name,a.target.value)}),MOQ:e("input",{id:"moq",name:"moq",className:"form-input flex-1 ",defaultValue:t.moq,onChange:a=>n(a.target.name,a.target.value)}),comment:e("input",{id:"comment",name:"comment",className:"form-input flex-1 ",defaultValue:t.comment,onChange:a=>n(a.target.name,a.target.value)})}};return e(y,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(x,{fields:c})})})},K=()=>{const d=b(),t=g(a=>a.availabilityForm),[n,c]=v.useState([]),l=(a,i,s)=>{const u=n.find(N=>N.id===s),_=n.findIndex(N=>N.id===s),r={...u,[a]:i},h={...n,[_]:r};c(Object.values(h)),d(f({price_breaks:h}))};v.useEffect(()=>{c(Object.values(t.price_breaks))},[]);const o=()=>{let a;a=n!=null&&n.length?n.reduce((s,u)=>u.id>s?u.id:s,n[0].id):0;let i=[...n,{id:a+1,cost_3000:"",cost_1000:"",cost_500:"",cost_250:"",cost_100:"",cost_25:"",cost_10:"",cost_1:""}];c(i),d(f({price_breaks:i}))},p=(a=null)=>{const i=n.filter(s=>s.id!=a.id);c(i),d(f({price_breaks:i}))};return e(y,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12",children:m("div",{className:"",children:[m("div",{className:"text-lg",children:["Price Break ",e($,{})," :"]}),m("div",{className:"mt-8",children:[e("div",{className:"overflow-x",children:m("table",{className:"table-auto overflow-scroll w-full",children:[e("thead",{children:m("tr",{children:[e("th",{className:"w-1",children:"3000 (€)"}),e("th",{className:"w-1",children:"1000 (€)"}),e("th",{className:"w-1",children:"500 (€)"}),e("th",{className:"w-1",children:"250 (€)"}),e("th",{className:"w-1",children:"100 (€)"}),e("th",{className:"w-1",children:"25 (€)"}),e("th",{className:"w-1",children:"10 (€)"}),e("th",{className:"w-1",children:"1 (€)"})]})}),e("tbody",{children:n.map(a=>m("tr",{className:"align-top",children:[e("td",{children:e("input",{type:"number",className:"form-input w-32",min:0,name:"cost_3000",defaultValue:a.cost_3000,onChange:i=>l(i.target.name,i.target.value,a.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",min:0,name:"cost_1000",defaultValue:a.cost_1000,onChange:i=>l(i.target.name,i.target.value,a.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",min:0,name:"cost_500",defaultValue:a.cost_500,onChange:i=>l(i.target.name,i.target.value,a.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",min:0,name:"cost_250",defaultValue:a.cost_250,onChange:i=>l(i.target.name,i.target.value,a.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",min:0,name:"cost_100",defaultValue:a.cost_100,onChange:i=>l(i.target.name,i.target.value,a.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",min:0,name:"cost_25",defaultValue:a.cost_25,onChange:i=>l(i.target.name,i.target.value,a.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",name:"cost_10",min:0,defaultValue:a.cost_10,onChange:i=>l(i.target.name,i.target.value,a.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",name:"cost_1",min:0,defaultValue:a.cost_1,onChange:i=>l(i.target.name,i.target.value,a.id)})}),e("td",{children:e("button",{type:"button",onClick:()=>p(a),children:m("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},a.id))})]})}),e("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:e("div",{className:"sm:mb-0 mb-6",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>o(),children:"Add Item"})})})]})]},"Quote Items")})})})},W=()=>{const d=b(),t=g(l=>l.availabilityForm),n=(l,o)=>{d(f({[l]:o}))},c={Development:{"From Our Inventory":e("input",{id:"from_our_inventory",type:"checkbox",name:"from_our_inventory",className:"form-checkbox",checked:t.from_our_inventory,onChange:l=>n(l.target.name,l.target.checked)})},"":{"Portal Availability Id":e("input",{id:"portal_availability_id",name:"portal_availability_id",onChange:l=>n(l.target.name,l.target.value),defaultValue:t.portal_availability_id,className:"form-input flex-1 "})}};return e(y,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(x,{fields:c})})})},z=()=>{const t=I().id;return m("div",{className:"mt-8 px-4",children:[e(B,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(G,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(H,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(K,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(W,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Y,{modelId:t,modelName:"availability"})]})},oe=()=>{const{hasPermission:d}=Q(),t=g(s=>s.availabilityForm),n=b(),c=new L,[l,o]=v.useState(!0),a=I().id;v.useEffect(()=>{n(T("Availability Edit"))}),v.useEffect(()=>{n(V())},[]),v.useEffect(()=>{i().then(()=>{o(!1)})},[a]),v.useEffect(()=>{n(f({api:"updateSingleAvailability",redirectTo:"/availability/edit/:id",action:"edit"}))},[]);const i=async()=>{const s=await c.fetchSingleAvailability(a);if(s.status!=200)return;const u=s.data.data.availability;n(f(u))};return l?e(F,{}):!d("update-availability")||l?e(F,{}):m("div",{className:"px-4",children:[e(M,{formState:t,resetForm:V}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6",children:e(z,{})})})]})};export{oe as default};
