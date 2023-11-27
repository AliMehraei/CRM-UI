import{u,d as y,j as e,l as g,a0 as w,m as C,aB as d,F as h,X as k,k as S,r as v,b as c,c as F,s as A,aC as _,e as O}from"./main-0b302a62.js";import{S as x}from"./react-select.esm-baf394b3.js";import{G as f,R as q,A as V}from"./GenerateFields-5ada396c.js";import{F as I}from"./FileUploadComponent-bbd59883.js";import{F as P}from"./index-383f56fd.js";/* empty css                  */import"./index-ad146f50.js";import"./ClearButtonComponent-a191a875.js";const j=()=>{const o=u(),n=y(r=>r.availabilityForm),s=(r,b)=>{o(d({[r]:b}))},a=[{value:"-None-",label:"-None-"},{value:"Email",label:"Email"},{value:"Skype/Wechat",label:"Skype/Wechat"},{value:"Phone",label:"Phone"},{value:"Online",label:"Online"},{value:"Other",label:"Other"},{value:"Web Api (Mouser)",label:"Web Api (Mouser)"},{value:"Web Api (Octopart)",label:"Web Api (Octopart)"},{value:"Web",label:"Web"},{value:"Portal",label:"Portal"}],i={Header:{Vendor:e(g,{defaultOptions:!0,required:!0,isMulti:!1,id:"vendor_id",name:"vendor_id",placeholder:"Type at least 2 characters to search...",loadOptions:w,onChange:({value:r})=>{s("vendor_id",r)},className:"flex-1"}),"Vendor Quote No":e("input",{id:"vendor_quote_no",type:"text",name:"vendor_quote_no",className:"form-input flex-1 ",onChange:r=>s(r.target.name,r.target.value)})},"":{"Availability Owner":e(g,{defaultOptions:!0,isMulti:!1,id:"owner_id",name:"owner_id",placeholder:"Type at least 2 characters to search...",loadOptions:C,onChange:({value:r})=>{s("owner_id",r)},className:"flex-1"}),"Availability File":e(I,{id:"availability_file",modelName:"availability",formState:n,formAttribute:"availability_file",updateFormData:d}),"Availability Source":e(x,{id:"availability_source",name:"availability_source",required:!0,options:a,onChange:({value:r})=>{s("availability_source",r)},className:"flex-1",defaultValue:a.find(r=>r.value=="Other")})}};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(f,{fields:i})})})},W=()=>{const o=u(),n=(i,r)=>{o(d({[i]:r}))};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(f,{fields:{Status:{"Availability Type":e(x,{options:[{value:"none",label:"-None-"},{value:"web_downloaded",label:"Web Downloaded"},{value:"cost_saving",label:"Cost Saving"},{value:"shortage",label:"Shortage"},{value:"proactive",label:"Proactive"},{value:"excess",label:"Excess"},{value:"not_valid",label:"Not_valid"}],name:"availability_type",id:"availability_type",className:"flex-1",onChange:({value:i})=>{n("availability_type",i)}}),Valid:e(P,{name:"valid",id:"valid",options:{dateFormat:"Y-m-d "},className:"form-input flex-1",placeholder:"YYYY-MM-DD",onChange:(i,r)=>n("valid",r)})},"":{"Availability Name":e("input",{required:!0,id:"availability_name",name:"availability_name",className:"form-input flex-1 ",onChange:i=>n(i.target.name,i.target.value)}),Rating:e("input",{id:"rating",name:"rating",className:"form-input flex-1 ",onChange:i=>n(i.target.name,i.target.value)})}}})})})},M=()=>{const o=u(),n=(a,i)=>{o(d({[a]:i}))};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(f,{fields:{"Quote Line":{"Product name":e(g,{defaultOptions:!1,required:!0,isMulti:!1,id:"product_id",name:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:k,onChange:({value:a})=>{n("product_id",a)},className:"flex-1"}),"SKU name":e("input",{id:"sku_name",name:"sku_name",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),Quantity:e("input",{required:!0,id:"quantity",name:"quantity",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"In Stock Quantity":e("input",{id:"in_stock_quantity",name:"in_stock_quantity",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),Currency:e(x,{id:"currency",name:"currency",options:S,className:"flex-1",onChange:({value:a})=>{n("currency",a)}}),Cost:e("input",{id:"cost",name:"cost",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"Exchange Rate":e("input",{id:"exchangeRate",type:"text",value:"1",placeholder:"Readonly input here…",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0})},"":{"Lead Time":e("input",{id:"lead_time",name:"lead_time",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"Date Code":e("input",{id:"date_code",name:"date_code",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),SPQ:e("input",{id:"spq",name:"spq",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),MOQ:e("input",{id:"moq",name:"moq",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),comment:e("input",{id:"comment",name:"comment",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)})}}})})})},D=()=>{const o=u(),n=y(l=>l.availabilityForm),[s,a]=v.useState(n.price_breaks),i=(l,t,m)=>{const p={...n.price_breaks[m],[l]:t},N={...n.price_breaks,[m]:p};a(Object.values(N)),o(d({price_breaks:N}))},r=()=>{let l;l=s!=null&&s.length?s.reduce((m,p)=>p.id>m?p.id:m,s[0].id):0;const t=[...s,{id:l+1}];a(t),o(d({price_breaks:t}))},b=(l=null)=>{const t=s.filter(m=>m.id!=l.id);a(t),o(d({price_breaks:t}))};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12",children:c("div",{className:"",children:[c("div",{className:"text-lg",children:["Price Break ",e(q,{})," :"]}),c("div",{className:"mt-8",children:[e("div",{className:"overflow-x-auto	w-11/12",children:c("table",{className:"table-auto",children:[e("thead",{children:c("tr",{children:[e("th",{className:"w-1",children:"3000 (€)"}),e("th",{className:"w-1",children:"1000 (€)"}),e("th",{className:"w-1",children:"500 (€)"}),e("th",{className:"w-1",children:"250 (€)"}),e("th",{className:"w-1",children:"100 (€)"}),e("th",{className:"w-1",children:"25 (€)"}),e("th",{className:"w-1",children:"10 (€)"}),e("th",{className:"w-1",children:"1 (€)"})]})}),e("tbody",{children:s.map(l=>c("tr",{className:"align-top",children:[e("td",{children:e("input",{type:"number",className:"form-input w-32",min:0,name:"cost_3000",defaultValue:l.cost_3000,onChange:t=>i(t.target.name,t.target.value,l.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",min:0,name:"cost_1000",defaultValue:l.cost_1000,onChange:t=>i(t.target.name,t.target.value,l.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",min:0,name:"cost_500",defaultValue:l.cost_500,onChange:t=>i(t.target.name,t.target.value,l.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",min:0,name:"cost_250",defaultValue:l.cost_250,onChange:t=>i(t.target.name,t.target.value,l.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",min:0,name:"cost_100",defaultValue:l.cost_100,onChange:t=>i(t.target.name,t.target.value,l.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",min:0,name:"cost_25",defaultValue:l.cost_25,onChange:t=>i(t.target.name,t.target.value,l.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",name:"cost_10",min:0,defaultValue:l.cost_10,onChange:t=>i(t.target.name,t.target.value,l.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",name:"cost_1",min:0,defaultValue:l.cost_1,onChange:t=>i(t.target.name,t.target.value,l.id)})}),e("td",{children:e("button",{type:"button",onClick:()=>b(l),children:c("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},l.id))})]})}),e("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:e("div",{className:"sm:mb-0 mb-6",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>r(),children:"Add Item"})})})]})]},"Quote Items")})})})},Q=()=>{const o=u(),n=(a,i)=>{o(d({[a]:i}))};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(f,{fields:{Development:{"From Our Inventory":e("input",{id:"from_our_inventory",type:"checkbox",name:"from_our_inventory",className:"form-checkbox",onChange:a=>n(a.target.name,a.target.checked)})}}})})})},T=()=>c("div",{className:"mt-8 px-4",children:[e(j,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(W,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(M,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(D,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Q,{})]}),$=()=>{const{hasPermission:o}=F(),n=y(a=>a.availabilityForm),s=u();return v.useEffect(()=>{s(A("Availability Add"))}),v.useEffect(()=>{s(_())},[]),o("create-availability")?c("div",{className:"px-4",children:[e(V,{formState:n,resetForm:_}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(T,{})})})]}):e(O,{})};export{$ as default};
