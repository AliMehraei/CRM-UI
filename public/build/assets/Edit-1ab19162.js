import{u as b,a as g,b as e,j as u,F as y,$ as p,d as q,r as v,h as F,c as A,s as I,a0 as k,g as S,e as D}from"./main-c04bb166.js";import{G as N,R as j,A as O}from"./GenerateFields-302fde9a.js";import{A as w}from"./react-select-async.esm-a7c7d1e9.js";import{S as C}from"./react-select.esm-a460a2c5.js";import{q as P,s as E,h as M,m as Q,a as V}from"./CommonFunctions-90d107b8.js";import{F as T}from"./index-3c565ae9.js";import{A as L}from"./AttachmentSection-4e819460.js";/* empty css                  */import"./sweetalert2.all-9d5da798.js";import"./Select-aecb2a80.esm-e774644f.js";const R=()=>{var r,m,a,i,d,f,_,x;const c=b(),t=g(s=>s.availabilityForm),l=(s,h)=>{c(p({[s]:h}))},o=[{value:"none",label:"-None-"},{value:"email",label:"Email"},{value:"skype_wechat",label:"Skype/Wechat"},{value:"phone",label:"Phone"},{value:"online",label:"Online"},{value:"other",label:"Other"},{value:"mouser",label:"Web Api (Mouser)"},{value:"octopart",label:"Web Api (Octopart)"},{value:"web",label:"Web"},{value:"portal",label:"Portal"}],n={Header:{Vendor:e(w,{required:!0,isMulti:!1,id:"vendor_id",name:"vendor_id",placeholder:"Type at least 2 characters to search...",loadOptions:P,onChange:({value:s})=>{l("vendor_id",s)},className:"flex-1",defaultValue:{value:(r=t.vendor)==null?void 0:r.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(m=t.vendor)==null?void 0:m.vendor_name})})},(a=t.vendor)==null?void 0:a.id)}}),"Vendor Quote No":e("input",{id:"vendor_quote_no",type:"text",name:"vendor_quote_no",className:"form-input flex-1 ",defaultValue:t.vendor_quote_no,onChange:s=>l(s.target.name,s.target.value)})},"":{"Availability Owner":e(w,{isMulti:!1,id:"owner_id",name:"owner_id",placeholder:"Type at least 2 characters to search...",loadOptions:E,onChange:({value:s})=>{l("owner_id",s)},defaultValue:{value:(i=t.owner)==null?void 0:i.id,label:u("div",{className:"flex items-center",children:[t.owner?e("img",{src:t.owner.avatar??"/assets/images/user-profile.jpeg",alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,u("div",{children:[e("div",{className:"text-sm font-bold",children:((d=t.owner)==null?void 0:d.first_name)+" "+((f=t.owner)==null?void 0:f.last_name)}),e("div",{className:"text-xs text-gray-500",children:(_=t.owner)==null?void 0:_.email})]})]},(x=t.owner)==null?void 0:x.id)},className:"flex-1"}),"Availability File":u("div",{className:"flex",children:[e("input",{type:"file",name:"availability_file",id:"availability_file",className:"form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1",accept:"image/*,.zip,.pdf,.xls,.xlsx,.txt.doc,.docx",onChange:s=>M(s,h=>{c(p({availability_file:`${h==null?void 0:h.data.data.file_url}`}))})}),e("a",{className:"ml-1 btn btn-outline-primary",href:t.availability_file,target:"_blank",children:"Download"})]}),"Availability Source":e(C,{id:"availability_source",name:"availability_source",required:!0,options:o,onChange:({value:s})=>{l("availability_source",s)},className:"flex-1",defaultValue:o.find(s=>s.value==t.availability_source)})}};return e(y,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(N,{fields:n})})})},W=()=>{const c=b(),t=g(r=>r.availabilityForm),l=(r,m)=>{c(p({[r]:m}))},o=[{value:"none",label:"-None-"},{value:"web_downloaded",label:"Web Downloaded"},{value:"cost_saving",label:"Cost Saving"},{value:"shortage",label:"Shortage"},{value:"proactive",label:"Proactive"},{value:"excess",label:"Excess"},{value:"not_valid",label:"Not_valid"}],n={Status:{"Availability Type":e(C,{options:o,name:"availability_type",id:"availability_type",className:"flex-1",onChange:({value:r})=>{l("availability_type",r)},defaultValue:o.find(r=>r.value==t.availability_source)}),Valid:e(T,{name:"valid",id:"valid",options:{dateFormat:"Y-m-d ",defaultDate:t.valid?new Date(t.valid):null},defaultValue:t.valid,className:"form-input flex-1",placeholder:"MM DD YYYY",onChange:(r,m)=>l("valid",m)})},"":{"Availability Name":e("input",{required:!0,id:"availability_name",name:"availability_name",className:"form-input flex-1 ",defaultValue:t.availability_name,onChange:r=>l(r.target.name,r.target.value)}),Rating:e("input",{id:"rating",name:"rating",className:"form-input flex-1 ",defaultValue:t.rating,onChange:r=>l(r.target.name,r.target.value)})}};return e(y,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(N,{fields:n})})})},$=()=>{var n,r,m;const c=b(),t=g(a=>a.availabilityForm),l=(a,i)=>{c(q({[a]:i}))},o={"Quote Line":{"Product name":e(w,{required:!0,isMulti:!1,id:"product_id",name:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:Q,onChange:({value:a})=>{l("product_id",a)},defaultValue:{value:(n=t.product)==null?void 0:n.id,label:e("div",{className:"flex items-center",children:e("div",{className:"text-sm font-bold",children:(r=t.product)==null?void 0:r.product_name})},(m=t.product)==null?void 0:m.id)},className:"flex-1"}),"SKU name":e("input",{id:"sku_name",name:"sku_name",className:"form-input flex-1 ",defaultValue:t.sku_name,onChange:a=>l(a.target.name,a.target.value)}),Quantity:e("input",{required:!0,id:"quantity",name:"quantity",className:"form-input flex-1 ",defaultValue:t.quantity,onChange:a=>l(a.target.name,a.target.value)}),"In Stock Quantity":e("input",{id:"in_stock_quantity",name:"in_stock_quantity",defaultValue:t.in_stock_quantity,className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value)}),Currency:e(C,{id:"currency",name:"currency",options:V,className:"flex-1",defaultValue:V.find(a=>a.value==t.currency),onChange:({value:a})=>{l("currency",a)}}),Cost:e("input",{id:"cost",name:"cost",className:"form-input flex-1 ",defaultValue:t.cost,onChange:a=>l(a.target.name,a.target.value)}),"Exchange Rate":e("input",{id:"exchangeRate",type:"text",value:"1",placeholder:"Readonly input here…",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0})},"":{"Lead Time":e("input",{id:"lead_time",name:"lead_time",className:"form-input flex-1 ",defaultValue:t.lead_time,onChange:a=>l(a.target.name,a.target.value)}),"Date Code":e("input",{id:"date_code",name:"date_code",className:"form-input flex-1 ",defaultValue:t.date_code,onChange:a=>l(a.target.name,a.target.value)}),SPQ:e("input",{id:"spq",name:"spq",className:"form-input flex-1 ",defaultValue:t.spq,onChange:a=>l(a.target.name,a.target.value)}),MOQ:e("input",{id:"moq",name:"moq",className:"form-input flex-1 ",defaultValue:t.moq,onChange:a=>l(a.target.name,a.target.value)}),comment:e("input",{id:"comment",name:"comment",className:"form-input flex-1 ",defaultValue:t.comment,onChange:a=>l(a.target.name,a.target.value)})}};return e(y,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(N,{fields:o})})})},U=()=>{const c=b(),t=g(a=>a.availabilityForm),[l,o]=v.useState([]),n=(a,i,d)=>{const f=l.find(h=>h.id===d),_=l.findIndex(h=>h.id===d),x={...f,[a]:i},s={...l,[_]:x};o(Object.values(s)),c(p({price_breaks:s}))};v.useEffect(()=>{o(Object.values(t.price_breaks))},[]);const r=()=>{let a;a=l!=null&&l.length?l.reduce((d,f)=>f.id>d?f.id:d,l[0].id):0;let i=[...l,{id:a+1,cost_3000:"",cost_1000:"",cost_500:"",cost_250:"",cost_100:"",cost_25:"",cost_10:"",cost_1:""}];o(i),c(p({price_breaks:i}))},m=(a=null)=>{const i=l.filter(d=>d.id!=a.id);o(i),c(p({price_breaks:i}))};return e(y,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12",children:u("div",{className:"",children:[u("div",{className:"text-lg",children:["Price Break ",e(j,{})," :"]}),u("div",{className:"mt-8",children:[e("div",{className:"overflow-x",children:u("table",{className:"table-auto overflow-scroll w-full",children:[e("thead",{children:u("tr",{children:[e("th",{className:"w-1",children:"3000 (€)"}),e("th",{className:"w-1",children:"1000 (€)"}),e("th",{className:"w-1",children:"500 (€)"}),e("th",{className:"w-1",children:"250 (€)"}),e("th",{className:"w-1",children:"100 (€)"}),e("th",{className:"w-1",children:"25 (€)"}),e("th",{className:"w-1",children:"10 (€)"}),e("th",{className:"w-1",children:"1 (€)"})]})}),e("tbody",{children:l.map(a=>u("tr",{className:"align-top",children:[e("td",{children:e("input",{type:"number",className:"form-input w-32",min:0,name:"cost_3000",defaultValue:a.cost_3000,onChange:i=>n(i.target.name,i.target.value,a.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",min:0,name:"cost_1000",defaultValue:a.cost_1000,onChange:i=>n(i.target.name,i.target.value,a.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",min:0,name:"cost_500",defaultValue:a.cost_500,onChange:i=>n(i.target.name,i.target.value,a.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",min:0,name:"cost_250",defaultValue:a.cost_250,onChange:i=>n(i.target.name,i.target.value,a.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",min:0,name:"cost_100",defaultValue:a.cost_100,onChange:i=>n(i.target.name,i.target.value,a.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",min:0,name:"cost_25",defaultValue:a.cost_25,onChange:i=>n(i.target.name,i.target.value,a.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",name:"cost_10",min:0,defaultValue:a.cost_10,onChange:i=>n(i.target.name,i.target.value,a.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",name:"cost_1",min:0,defaultValue:a.cost_1,onChange:i=>n(i.target.name,i.target.value,a.id)})}),e("td",{children:e("button",{type:"button",onClick:()=>m(a),children:u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},a.id))})]})}),e("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:e("div",{className:"sm:mb-0 mb-6",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>r(),children:"Add Item"})})})]})]},"Quote Items")})})})},Y=()=>{const c=b(),t=g(n=>n.availabilityForm),l=(n,r)=>{c(p({[n]:r}))},o={Development:{"From Our Inventory":e("input",{id:"from_our_inventory",type:"checkbox",name:"from_our_inventory",className:"form-checkbox",checked:t.from_our_inventory,onChange:n=>l(n.target.name,n.target.checked)})},"":{"Portal Availability Id":e("input",{id:"portal_availability_id",name:"portal_availability_id",onChange:n=>l(n.target.name,n.target.value),defaultValue:t.portal_availability_id,className:"form-input flex-1 "})}};return e(y,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(N,{fields:o})})})},B=()=>{const t=F().id;return u("div",{className:"mt-8 px-4",children:[e(R,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(W,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e($,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(U,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Y,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(L,{modelId:t,modelName:"availability"})]})},le=()=>{const{hasPermission:c}=A(),t=g(d=>d.availabilityForm),l=b(),o=new D,[n,r]=v.useState(!0),a=F().id;v.useEffect(()=>{l(I("Availability Edit"))}),v.useEffect(()=>{l(k())},[]),v.useEffect(()=>{i().then(()=>{r(!1)})},[a]),v.useEffect(()=>{l(p({api:"updateSingleAvailability",redirectTo:"/availability/edit/:id",action:"edit"}))},[]);const i=async()=>{const d=await o.fetchSingleAvailability(a);if(d.status!=200)return;const f=d.data.data.availability;l(p(f))};return n?e(S,{}):!c("update-availability")||n?e(S,{}):u("div",{className:"px-4",children:[e(O,{formState:t,resetForm:k}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6",children:e(B,{})})})]})};export{le as default};
