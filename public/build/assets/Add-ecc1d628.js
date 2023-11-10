import{u,a as e,F as p,l as n,V as h,W as x,aM as N,aL as d,e as v,n as C,x as y,m as F,k as q,_ as S,j as b,c as O,r as _,s as w,aN as g,L as R}from"./main-22663fbf.js";/* empty css                  */import{G as f,A as Q}from"./GenerateFields-d6e292b2.js";import{F as m}from"./index-008d6758.js";import{T}from"./tippy-react.esm-6cb1da4d.js";import{S as c}from"./react-select.esm-d04eef86.js";import{F as M}from"./FileUploadComponent-2aab5425.js";import"./index-f85a6b97.js";import"./ClearButtonComponent-29b9f612.js";const D=()=>{const r=u(),o=(a,s)=>{r(d({[a]:s}))};return e(p,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(f,{fields:{"RFQ Line":{"Product Name":e(n,{defaultOptions:!0,isMulti:!1,id:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:h,onChange:({value:a})=>{o("product_id",a)},className:"flex-1",required:!0}),"Customer Part Id":e("input",{id:"customer_part_id",name:"customer_part_id",className:"form-input flex-1 ",onChange:a=>o(a.target.name,a.target.value)}),Quantity:e("input",{id:"quantity",name:"quantity",className:"form-input flex-1 ",onChange:a=>o(a.target.name,a.target.value),required:!0}),"Target Price":e("input",{id:"target_price",name:"target_price",onChange:a=>o(a.target.name,a.target.value),className:"form-input flex-1 "})},"":{"Alternative Products":e(n,{defaultOptions:!0,id:"alternative_products",name:"alternative_products",placeholder:"Type at least 2 characters to search...",loadOptions:h,onChange:a=>{o("alternative_products",a.map(s=>s.value))},isMulti:!0,className:"flex-1"}),Availability:e(n,{defaultOptions:!0,isMulti:!1,id:"availability",name:"availability_id",placeholder:"Type at least 2 characters to search...",loadOptions:x,onChange:({value:a})=>{o("availability_id",a)},className:"flex-1"}),Excess:e(n,{defaultOptions:!0,isMulti:!1,id:"excess_id",name:"excess_id",placeholder:"Type at least 2 characters to search...",loadOptions:N,onChange:({value:a})=>{o("excess_id",a)},className:"flex-1"}),"Special Instructions":e("textarea",{id:"special_instructions",name:"special_instructions",rows:3,onChange:a=>o(a.target.name,a.target.value),className:"form-textarea flex-1"}),comment:e("textarea",{id:"comment",rows:3,name:"comment",className:"form-textarea flex-1",onChange:a=>o(a.target.name,a.target.value),placeholder:""})}}})})})},P=()=>{const r=u(),o=(a,s)=>{r(d({[a]:s}))};return e(p,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(f,{fields:{Development:{"Processed for VRFQ round 1":e(T,{content:"Please do not change the value",className:"red",children:e("input",{id:"processed_for_vrfq_round_1",type:"checkbox",name:"processed_for_vrfq_round_1",className:"form-checkbox",onChange:a=>o(a.target.name,a.target.checked)})}),"Processed for VRFQ round 2":e("label",{className:"flex items-center cursor-pointer",children:e("input",{id:"processed_for_vrfq_round_2",type:"checkbox",name:"processed_for_vrfq_round_2",className:"form-checkbox",onChange:a=>o(a.target.name,a.target.checked)})}),"Open Status Time":e(m,{name:"open_status_timestamp","data-enable-time":!0,options:{enableTime:!0,dateFormat:"Y-m-d H:i",position:"auto left"},onChange:(a,s)=>o("open_status_timestamp",s),className:"form-input flex-1"})}}})})})},k=()=>{const r=u(),o=v(t=>t.rfqFormSlice),l=(t,i)=>{r(d({[t]:i}))};return e(p,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(f,{fields:{Header:{"Account Name":e(n,{defaultOptions:!0,isMulti:!1,id:"account_id",name:"account_id",placeholder:"Type at least 2 characters to search...",loadOptions:C,onChange:({value:t})=>{l("account_id",t)},className:"flex-1"}),Contact:e(n,{defaultOptions:!0,isMulti:!1,id:"contact",name:"contact_id",placeholder:"Type at least 2 characters to search...",loadOptions:y,onChange:({value:t})=>{l("contact_id",t)},className:"flex-1"}),"Customer RFQ No":e("input",{id:"customer_rfq_no",name:"customer_rfq_no",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value)}),"Project Name / Application":e("input",{id:"project_name",name:"project_name",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value)}),"RFQ Source":e(c,{name:"rfq_source",required:!0,options:[{value:"none",label:"-None-"},{value:"email",label:"Email"},{value:"telephone",label:"Telephone"},{value:"web_portal",label:"Web portal"},{value:"history",label:"History"}],onChange:({value:t})=>{l("rfq_source",t)},defaultValue:{value:"none",label:"-None-"},className:"flex-1"}),"RFQ Type":e(c,{name:"rfq_type",required:!0,options:[{value:"none",label:"-None-"},{value:"cost_saving",label:"Cost Saving"},{value:"shortage",label:"Shortage"},{value:"eol",label:"EOL"},{value:"proactive",label:"Proactive"},{value:"calculation",label:"Calculation"}],onChange:({value:t})=>{l("rfq_type",t)},defaultValue:{value:"none",label:"-None-"},className:"flex-1"}),Status:e(c,{name:"status",required:!0,options:[{value:"none",label:"-None-"},{value:"open",label:"Open"},{value:"open_without_routing",label:"Open without routing"},{value:"quoted",label:"Quoted"},{value:"closed",label:"Closed"},{value:"in_review",label:"In review"}],onChange:({value:t})=>{l("status",t)},defaultValue:{value:"open",label:"Open"},className:"flex-1"}),"Date History":e(m,{name:"date_history",options:{dateFormat:"Y-m-d "},className:"form-input flex-1",placeholder:"YYYY-MM-DD",onChange:(t,i)=>l("date_history",i)}),"Exchange Rate":e("input",{id:"exchangeRate",type:"text",value:"1",placeholder:"Readonly input here…",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0}),"Portal BOM id":e("input",{id:"portal_bom_id",name:"portal_bom_id",onChange:t=>l(t.target.name,t.target.value),className:"form-input flex-1 "})},"":{"RFQ Owner":e(n,{defaultOptions:!0,isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",loadOptions:F,onChange:({value:t})=>{l("owner_id",t)},className:"flex-1"}),"Deal Stage":e(c,{name:"deal_stage",options:[{value:"none",label:"-None-"},{value:"draft",label:"Draft"},{value:"no_feedback",label:"No Feedback"},{value:"negotiation_price",label:"Negotiation Price"},{value:"negotiation_conditions",label:"Negotiation Conditions"},{value:"open",label:"Open"},{value:"lost",label:"Lost"},{value:"won",label:"Won"}],onChange:({value:t})=>{l("deal_stage",t)},className:"flex-1"}),"Customer RFQ File":e(M,{id:"customer_rfq_file",modelName:"rfq",formState:o,formAttribute:"customer_rfq_file",updateFormData:d}),"RFQ Dead Line":e(m,{name:"rfq_dead_line",options:{dateFormat:"Y-m-d "},className:"form-input flex-1",placeholder:"YYYY-MM-DD",onChange:(t,i)=>l("rfq_dead_line",i)}),Currency:e(c,{name:"currency",id:"currency",options:q,className:"flex-1",onChange:({value:t})=>{l("currency",t)}}),"Vendor RFQs Line":e(n,{defaultOptions:!0,id:"vendor_rfqs_line",name:"vendor_rfqs_line",placeholder:"Type at least 2 characters to search...",loadOptions:S,onChange:t=>{l("vendor_rfqs_line",t.map(i=>i.value))},isMulti:!0,className:"flex-1"})}}})})})},A=()=>b("div",{className:"mt-8 px-4",children:[e(k,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(D,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(P,{})]}),z=()=>{const{hasPermission:r}=O(),o=v(a=>a.rfqFormSlice),l=u();return _.useEffect(()=>{l(w("RFQ Add"))}),_.useEffect(()=>{l(g())},[]),r("create-rfq")?b("div",{className:"px-4",children:[e(Q,{formState:o,resetForm:g}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6",children:e(A,{})})})]}):e(R,{})};export{z as default};
