import{u,b as e,F as h,t as d,a as y,r as x,j as c,s as N,v as w}from"./main-36d29c26.js";import{A as g}from"./react-select-async.esm-553a648f.js";import{S as b}from"./react-select.esm-6fdaacd5.js";import{G as p,p as C,s as k,h as S,m as F,a as A,R as q,c as I}from"./CommonFunctions-dfef060c.js";import{F as j}from"./index-fefd8ff2.js";/* empty css                  */import"./Select-aecb2a80.esm-2944e309.js";import"./sweetalert2.all-8f337f8d.js";const V=()=>{const r=u(),l=(t,o)=>{r(d({[t]:o}))};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(p,{fields:{Header:{Vendor:e(g,{required:!0,isMulti:!1,id:"vendor_id",name:"vendor_id",placeholder:"Type at least 2 characters to search...",loadOptions:C,onChange:({value:t})=>{l("vendor_id",t)},className:"flex-1"}),"Vendor Quote No":e("input",{id:"vendor_quote_no",type:"text",name:"vendor_quote_no",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value)})},"":{"Availability Owner":e(g,{isMulti:!1,id:"owner_id",name:"owner_id",placeholder:"Type at least 2 characters to search...",loadOptions:k,onChange:({value:t})=>{l("owner_id",t)},className:"flex-1"}),"Availability File":e("input",{type:"file",name:"availability_file",id:"availability_file",className:"form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1",accept:"image/*,.zip,.pdf,.xls,.xlsx,.txt.doc,.docx",onChange:t=>S(t,o=>{r(d({availability_file:`${o==null?void 0:o.data.data.file_url}`}))})}),"Availability Source":e(b,{id:"availability_source",name:"availability_source",required:!0,options:[{value:"none",label:"-None-"},{value:"email",label:"Email"},{value:"skype_wechat",label:"Skype/Wechat"},{value:"phone",label:"Phone"},{value:"online",label:"Online"},{value:"other",label:"Other"},{value:"mouser",label:"Web Api (Mouser)"},{value:"octopart",label:"Web Api (Octopart)"},{value:"web",label:"Web"},{value:"portal",label:"Portal"}],onChange:({value:t})=>{l("availability_source",t)},className:"flex-1"})}}})})})},O=()=>{const r=u(),l=(t,o)=>{r(d({[t]:o}))};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(p,{fields:{Status:{"Availability Type":e(b,{options:[{value:"none",label:"-None-"},{value:"web_downloaded",label:"Web Downloaded"},{value:"cost_saving",label:"Cost Saving"},{value:"shortage",label:"Shortage"},{value:"proactive",label:"Proactive"},{value:"excess",label:"Excess"},{value:"not_valid",label:"Not_valid"}],name:"availability_type",id:"availability_type",className:"flex-1",onChange:({value:t})=>{l("availability_type",t)}}),Valid:e(j,{name:"valid",id:"valid",options:{dateFormat:"d-m-Y"},className:"form-input flex-1",placeholder:"MM DD YYYY",onChange:(t,o)=>l("valid",o)})},"":{"Availability Name":e("input",{required:!0,id:"availability_name",name:"availability_name",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value)}),Rating:e("input",{id:"rating",name:"rating",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value)})}}})})})},P=()=>{const r=u(),l=(a,t)=>{r(d({[a]:t}))};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(p,{fields:{"Quote Line":{"Product name":e(g,{required:!0,isMulti:!1,id:"product_id",name:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:F,onChange:({value:a})=>{l("product_id",a)},className:"flex-1"}),"SKU name":e("input",{id:"sku_name",name:"sku_name",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value)}),Quantity:e("input",{required:!0,id:"quantity",name:"quantity",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value)}),"In Stock Quantity":e("input",{id:"in_stock_quantity",name:"in_stock_quantity",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value)}),Currency:e(b,{id:"currency",name:"currency",options:A,className:"flex-1",onChange:({value:a})=>{l("currency",a)}}),Cost:e("input",{id:"cost",name:"cost",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value)}),"Exchange Rate":e("input",{id:"exchangeRate",type:"text",value:"1",placeholder:"Readonly input here…",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0})},"":{"Lead Time":e("input",{id:"lead_time",name:"lead_time",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value)}),"Date Code":e("input",{id:"date_code",name:"date_code",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value)}),SPQ:e("input",{id:"spq",name:"spq",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value)}),MOQ:e("input",{id:"moq",name:"moq",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value)}),comment:e("input",{id:"comment",name:"comment",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value)})}}})})})},D=()=>{const r=u(),l=y(i=>i.availabilityForm),[s,a]=x.useState(l.price_breaks),t=(i,n,m)=>{const f={...l.price_breaks[m],[i]:n},v={...l.price_breaks,[m]:f};a(Object.values(v)),r(d({price_breaks:v}))},o=()=>{let i;i=s!=null&&s.length?s.reduce((m,f)=>f.id>m?f.id:m,s[0].id):0;const n=[...s,{id:i+1}];a(n),r(d({price_breaks:n}))},_=(i=null)=>{const n=s.filter(m=>m.id!=i.id);a(n),r(d({price_breaks:n}))};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12",children:c("div",{className:"",children:[c("div",{className:"text-lg",children:["Price Break ",e(q,{})," :"]}),c("div",{className:"mt-8",children:[e("div",{className:"overflow-x-auto	w-11/12",children:c("table",{className:"table-auto",children:[e("thead",{children:c("tr",{children:[e("th",{className:"w-1",children:"3000 (€)"}),e("th",{className:"w-1",children:"1000 (€)"}),e("th",{className:"w-1",children:"500 (€)"}),e("th",{className:"w-1",children:"250 (€)"}),e("th",{className:"w-1",children:"100 (€)"}),e("th",{className:"w-1",children:"25 (€)"}),e("th",{className:"w-1",children:"10 (€)"}),e("th",{className:"w-1",children:"1 (€)"})]})}),e("tbody",{children:s.map(i=>c("tr",{className:"align-top",children:[e("td",{children:e("input",{type:"number",className:"form-input w-32",min:0,name:"cost_3000",defaultValue:i.cost_3000,onChange:n=>t(n.target.name,n.target.value,i.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",min:0,name:"cost_1000",defaultValue:i.cost_1000,onChange:n=>t(n.target.name,n.target.value,i.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",min:0,name:"cost_500",defaultValue:i.cost_500,onChange:n=>t(n.target.name,n.target.value,i.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",min:0,name:"cost_250",defaultValue:i.cost_250,onChange:n=>t(n.target.name,n.target.value,i.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",min:0,name:"cost_100",defaultValue:i.cost_100,onChange:n=>t(n.target.name,n.target.value,i.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",min:0,name:"cost_25",defaultValue:i.cost_25,onChange:n=>t(n.target.name,n.target.value,i.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",name:"cost_10",min:0,defaultValue:i.cost_10,onChange:n=>t(n.target.name,n.target.value,i.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",name:"cost_1",min:0,defaultValue:i.cost_1,onChange:n=>t(n.target.name,n.target.value,i.id)})}),e("td",{children:e("button",{type:"button",onClick:()=>_(i),children:c("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},i.id))})]})}),e("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:e("div",{className:"sm:mb-0 mb-6",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>o(),children:"Add Item"})})})]})]},"Quote Items")})})})},M=()=>{const r=u(),l=(a,t)=>{r(d({[a]:t}))};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(p,{fields:{Created:{test:e("input",{id:"test",type:"checkbox",name:"test",className:"form-checkbox",onChange:a=>l(a.target.name,a.target.checked)}),"Send letter owner":e("input",{id:"send_letter_owner",type:"checkbox",name:"send_letter_owner",className:"form-checkbox",onChange:a=>l(a.target.name,a.target.checked)})}}})})})},Q=()=>{const r=u(),l=(a,t)=>{r(d({[a]:t}))};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(p,{fields:{Development:{"From Our Inventory":e("input",{id:"from_our_inventory",type:"checkbox",name:"from_our_inventory",className:"form-checkbox",onChange:a=>l(a.target.name,a.target.checked)})},"":{"Portal Availability Id":e("input",{id:"portal_availability_id",name:"portal_availability_id",onChange:a=>l(a.target.name,a.target.value),className:"form-input flex-1 "})}}})})})},T=()=>c("div",{className:"mt-8 px-4",children:[e(V,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(O,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(P,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(D,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Q,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(M,{})]}),H=()=>{const r=y(s=>s.availabilityForm),l=u();return x.useEffect(()=>{l(N("Availability Add"))}),c("div",{className:"px-4",children:[e(I,{formState:r,resetForm:w}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(T,{})})})]})};export{H as default};
