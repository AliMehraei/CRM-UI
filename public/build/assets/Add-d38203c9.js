import{u as g,a as R,r as b,b as c,F as f,j as e,aN as h,l as p,X as N,Y as Q,aO as M,S as P,d as w,n as k,w as Y,m as j,k as E,a0 as W,c as L,s as V,aP as C,e as $}from"./main-360609a7.js";/* empty css                  */import{G as v,A as H}from"./GenerateFields-89af4685.js";import{F as _}from"./index-85cd636f.js";import{T as I}from"./tippy-react.esm-89caf17d.js";import{S as m}from"./react-select.esm-26c512a6.js";import{F as B}from"./FileUploadComponent-df936b98.js";import"./index-79920e12.js";import"./ClearButtonComponent-7b0a9117.js";const S=d=>{const n=new Date(d),r=n.getFullYear(),o=String(n.getMonth()+1).padStart(2,"0"),u=String(n.getDate()).padStart(2,"0");return`${r}:${o}:${u}`},G=()=>{const d=g(),n=new R,r=(a="",l="success")=>{P.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3,customClass:{container:"toast"}}).fire({icon:l,title:a,padding:"10px 20px"})},[o,u]=b.useState({web:[],nonWeb:[]}),[F,x]=b.useState(null),y=(a,l)=>{navigator.clipboard.writeText(a),x(l),r("Copied to clipboard!")},t=({suggestions:a})=>c(f,{children:[e("h3",{className:"text-xl",children:"Availability Suggestions :"}),c("table",{className:"min-w-full bg-white border border-gray-300",children:[e("thead",{children:c("tr",{children:[e("th",{className:"py-2 px-4 border-b",children:"Availability"}),e("th",{className:"py-2 px-4 border-b",children:"Availability Source"}),e("th",{className:"py-2 px-4 border-b",children:"Availability Cost"}),e("th",{className:"py-2 px-4 border-b",children:"Availability Created Date"}),e("th",{className:"py-2 px-4 border-b",children:"Actions"})]})}),c("tbody",{children:[a.web.map((l,i)=>c("tr",{className:i%2===0?"bg-gray-100":"",children:[e("td",{className:"py-2 px-4 border-b",children:l.availability_name}),e("td",{className:"py-2 px-4 border-b",children:l.availability_source}),c("td",{className:"py-2 px-4 border-b",children:[l.cost," ",l.currency]}),e("td",{className:"py-2 px-4 border-b",children:S(l.created_at)}),e("td",{className:"py-2 px-4 border-b",children:e("button",{className:"btn btn-sm",onClick:()=>y(l.availability_name,i),children:"Copy to Clipboard"})})]},i)),a.nonWeb.map((l,i)=>c("tr",{className:i%2===0?"bg-gray-100":"",children:[e("td",{className:"py-2 px-4 border-b",children:l.availability_name}),e("td",{className:"py-2 px-4 border-b",children:l.availability_source}),c("td",{className:"py-2 px-4 border-b",children:[l.cost," ",l.currency]}),e("td",{className:"py-2 px-4 border-b",children:S(l.created_at)})]},i))]})]})]}),s=(a,l)=>{d(h({[a]:l})),a==="product_id"&&A(l)},q=a=>{d(h({availability_id:a}))},O={"RFQ Line":{"Product Name":e(p,{defaultOptions:!1,isMulti:!1,id:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:N,onChange:({value:a})=>{s("product_id",a)},className:"flex-1",required:!0}),"Customer Part Id":e("input",{id:"customer_part_id",name:"customer_part_id",className:"form-input flex-1 ",onChange:a=>s(a.target.name,a.target.value)}),Quantity:e("input",{id:"quantity",name:"quantity",className:"form-input flex-1 ",onChange:a=>s(a.target.name,a.target.value),required:!0}),"Target Price":e("input",{id:"target_price",name:"target_price",onChange:a=>s(a.target.name,a.target.value),className:"form-input flex-1 "})},"":{"Alternative Products":e(p,{defaultOptions:!1,id:"alternative_products",name:"alternative_products",placeholder:"Type at least 2 characters to search...",loadOptions:N,onChange:a=>{s("alternative_products",a.map(l=>l.value))},isMulti:!0,className:"flex-1"}),Availability:e(p,{defaultOptions:!1,isMulti:!1,id:"availability",name:"availability_id",placeholder:"Type at least 2 characters to search...",loadOptions:Q,onChange:({value:a})=>{s("availability_id",a)},className:"flex-1"}),Excess:e(p,{defaultOptions:!0,isMulti:!1,id:"excess_id",name:"excess_id",placeholder:"Type at least 2 characters to search...",loadOptions:M,onChange:({value:a})=>{s("excess_id",a)},className:"flex-1"}),"Special Instructions":e("textarea",{id:"special_instructions",name:"special_instructions",rows:3,onChange:a=>s(a.target.name,a.target.value),className:"form-textarea flex-1"}),comment:e("textarea",{id:"comment",rows:3,name:"comment",className:"form-textarea flex-1",onChange:a=>s(a.target.name,a.target.value),placeholder:""})}},A=async a=>{try{const l=await n.fetchSuggestedAvailability(a);if(l.status===200){const i=l.data.data,T=i.web?[i.web]:[],D=i.nonWeb?[i.nonWeb]:[];u({web:T,nonWeb:D})}}catch(l){console.error("Error fetching availability suggestions:",l)}};return c(f,{children:[e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(v,{fields:O})}),e(t,{suggestions:o,onAvailabilitySelect:q})]})},U=()=>{const d=g(),n=(o,u)=>{d(h({[o]:u}))};return e(f,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(v,{fields:{Development:{"Processed for VRFQ round 1":e(I,{content:"Please do not change the value",className:"red",children:e("input",{id:"processed_for_vrfq_round_1",type:"checkbox",name:"processed_for_vrfq_round_1",className:"form-checkbox",onChange:o=>n(o.target.name,o.target.checked)})}),"Processed for VRFQ round 2":e("label",{className:"flex items-center cursor-pointer",children:e("input",{id:"processed_for_vrfq_round_2",type:"checkbox",name:"processed_for_vrfq_round_2",className:"form-checkbox",onChange:o=>n(o.target.name,o.target.checked)})}),"Open Status Time":e(_,{name:"open_status_timestamp","data-enable-time":!0,options:{enableTime:!0,dateFormat:"Y-m-d H:i",position:"auto left"},onChange:(o,u)=>n("open_status_timestamp",u),className:"form-input flex-1"})}}})})})},X=()=>{const d=g(),n=w(t=>t.rfqFormSlice),r=(t,s)=>{d(h({[t]:s}))};return e(f,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(v,{fields:{Header:{"Account Name":e(p,{defaultOptions:!0,required:!0,isMulti:!1,id:"account_id",name:"account_id",placeholder:"Type at least 2 characters to search...",loadOptions:k,onChange:({value:t})=>{r("account_id",t)},className:"flex-1"}),Contact:e(p,{defaultOptions:!0,required:!0,isMulti:!1,id:"contact",name:"contact_id",placeholder:"Type at least 2 characters to search...",loadOptions:Y,onChange:({value:t})=>{r("contact_id",t)},className:"flex-1"}),"Customer RFQ No":e("input",{id:"customer_rfq_no",name:"customer_rfq_no",className:"form-input flex-1 ",onChange:t=>r(t.target.name,t.target.value)}),"Project Name / Application":e("input",{id:"project_name",name:"project_name",className:"form-input flex-1 ",onChange:t=>r(t.target.name,t.target.value)}),"RFQ Source":e(m,{name:"rfq_source",required:!0,options:[{value:"none",label:"-None-"},{value:"email",label:"Email"},{value:"telephone",label:"Telephone"},{value:"web_portal",label:"Web portal"},{value:"history",label:"History"}],onChange:({value:t})=>{r("rfq_source",t)},defaultValue:{value:"none",label:"-None-"},className:"flex-1"}),"RFQ Type":e(m,{name:"rfq_type",required:!0,options:[{value:"none",label:"-None-"},{value:"cost_saving",label:"Cost Saving"},{value:"shortage",label:"Shortage"},{value:"eol",label:"EOL"},{value:"proactive",label:"Proactive"},{value:"calculation",label:"Calculation"}],onChange:({value:t})=>{r("rfq_type",t)},defaultValue:{value:"none",label:"-None-"},className:"flex-1"}),Status:e(m,{name:"status",options:[{value:"none",label:"-None-"},{value:"open",label:"Open"},{value:"open_without_routing",label:"Open without routing"},{value:"quoted",label:"Quoted"},{value:"closed",label:"Closed"},{value:"in_review",label:"In review"}],onChange:({value:t})=>{r("status",t)},defaultValue:{value:"open",label:"Open"},className:"flex-1"}),"Date History":e(_,{name:"date_history",options:{dateFormat:"Y-m-d "},className:"form-input flex-1",placeholder:"YYYY-MM-DD",onChange:(t,s)=>r("date_history",s)}),"Exchange Rate":e("input",{id:"exchangeRate",type:"text",value:"1",placeholder:"Readonly input here…",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0}),"Portal BOM id":e("input",{id:"portal_bom_id",name:"portal_bom_id",onChange:t=>r(t.target.name,t.target.value),className:"form-input flex-1 "})},"":{"RFQ Owner":e(p,{defaultOptions:!0,isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",loadOptions:j,onChange:({value:t})=>{r("owner_id",t)},className:"flex-1"}),"Deal Stage":e(m,{name:"deal_stage",options:[{value:"none",label:"-None-"},{value:"draft",label:"Draft"},{value:"no_feedback",label:"No Feedback"},{value:"negotiation_price",label:"Negotiation Price"},{value:"negotiation_conditions",label:"Negotiation Conditions"},{value:"open",label:"Open"},{value:"lost",label:"Lost"},{value:"won",label:"Won"}],onChange:({value:t})=>{r("deal_stage",t)},className:"flex-1"}),"Customer RFQ File":e(B,{id:"customer_rfq_file",modelName:"rfq",formState:n,formAttribute:"customer_rfq_file",updateFormData:h}),"RFQ Dead Line":e(_,{name:"rfq_dead_line",options:{dateFormat:"Y-m-d "},className:"form-input flex-1",placeholder:"YYYY-MM-DD",onChange:(t,s)=>r("rfq_dead_line",s)}),Currency:e(m,{name:"currency",id:"currency",options:E,className:"flex-1",onChange:({value:t})=>{r("currency",t)}}),"Vendor RFQs Line":e(p,{defaultOptions:!0,id:"vendor_rfqs_line",name:"vendor_rfqs_line",placeholder:"Type at least 2 characters to search...",loadOptions:W,onChange:t=>{r("vendor_rfqs_line",t.map(s=>s.value))},isMulti:!0,className:"flex-1"})}}})})})},z=()=>c("div",{className:"mt-8 px-4",children:[e(X,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(G,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(U,{})]}),oe=()=>{const{hasPermission:d}=L(),n=w(o=>o.rfqFormSlice),r=g();return b.useEffect(()=>{r(V("RFQ Add"))}),b.useEffect(()=>{r(C())},[]),d("create-rfq")?c("div",{className:"px-4",children:[e(H,{formState:n,resetForm:C}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6",children:e(z,{})})})]}):e($,{})};export{oe as default};
