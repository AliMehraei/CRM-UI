import{u as T,d as A,a as G,r as b,j as e,l as _,X as W,Y as K,aO as Z,b as n,F as D,aN as v,S as J,n as ee,f as $,w as ae,m as te,k as B,a0 as le,h as X,c as se,J as re,s as ne,aP as H,e as U,O as oe}from"./main-3000a6dc.js";/* empty css                  */import{G as P,A as ce}from"./GenerateFields-7282bc65.js";import{F as M}from"./index-0aeaf758.js";import{T as ie}from"./tippy-react.esm-52ac0aa1.js";import{S as F}from"./react-select.esm-2a6a39a3.js";import{F as de}from"./FileUploadComponent-37e5f074.js";import{A as ue}from"./AttachmentSection-628d53a2.js";import"./index-29603cbb.js";import"./ClearButtonComponent-21bbcf28.js";const k=u=>{const a=new Date(u),r=a.getFullYear(),m=String(a.getMonth()+1).padStart(2,"0"),o=String(a.getDate()).padStart(2,"0");return`${r}:${m}:${o}`},me=()=>{var q,w,S,t,h,Y,j,I,L;const u=T(),a=A(l=>l.rfqFormSlice),r=new G,[m,o]=b.useState({web:[],nonWeb:[]}),[p,N]=b.useState({matched:[]}),[C,y]=b.useState(null),g=(l="",s="success")=>{J.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3,customClass:{container:"toast"}}).fire({icon:s,title:l,padding:"10px 20px"})},x=(l,s)=>{navigator.clipboard.writeText(l),y(s),g("Copied to clipboard!")},i=({suggestions:l})=>n(D,{children:[e("h3",{className:"text-xl",children:"Availability Suggestions :"}),n("table",{className:"min-w-full bg-white border border-gray-300",children:[e("thead",{children:n("tr",{children:[e("th",{className:"py-2 px-4 border-b",children:"Availability"}),e("th",{className:"py-2 px-4 border-b",children:"Availability Source"}),e("th",{className:"py-2 px-4 border-b",children:"Availability Cost"}),e("th",{className:"py-2 px-4 border-b",children:"Availability Created Date"}),e("th",{className:"py-2 px-4 border-b",children:"Actions"})]})}),n("tbody",{children:[l.web.map((s,c)=>n("tr",{className:c%2===0?"bg-gray-100":"",children:[e("td",{className:"py-2 px-4 border-b",children:s.availability_name}),e("td",{className:"py-2 px-4 border-b",children:s.availability_source}),n("td",{className:"py-2 px-4 border-b",children:[s.cost," ",s.currency]}),e("td",{className:"py-2 px-4 border-b",children:k(s.created_at)}),e("td",{className:"py-2 px-4 border-b",children:e("button",{className:"btn btn-sm",onClick:()=>x(s.availability_name,c),children:"Copy to Clipboard"})})]},c)),l.nonWeb.map((s,c)=>n("tr",{className:c%2===0?"bg-gray-100":"",children:[e("td",{className:"py-2 px-4 border-b",children:s.availability_name}),e("td",{className:"py-2 px-4 border-b",children:s.availability_source}),n("td",{className:"py-2 px-4 border-b",children:[s.cost," ",s.currency]}),e("td",{className:"py-2 px-4 border-b",children:k(s.created_at)})]},c))]})]})]}),f=({suggestions:l})=>n(D,{children:[e("h3",{className:"text-xl mt-4",children:"Excess Suggestions :"}),n("table",{className:"min-w-full bg-white border border-gray-300",children:[e("thead",{children:n("tr",{children:[e("th",{className:"py-2 px-4 border-b",children:"Excess Name"}),e("th",{className:"py-2 px-4 border-b",children:"Excess Source"}),e("th",{className:"py-2 px-4 border-b",children:"Excess No"}),e("th",{className:"py-2 px-4 border-b",children:"Excess Cost"}),e("th",{className:"py-2 px-4 border-b",children:"Excess Type"}),e("th",{className:"py-2 px-4 border-b",children:"Excess Quantity"}),e("th",{className:"py-2 px-4 border-b",children:"Excess Created Date"}),e("th",{className:"py-2 px-4 border-b",children:"Actions"})]})}),e("tbody",{children:l.matched.map((s,c)=>n("tr",{className:c%2===0?"bg-gray-100":"",children:[e("td",{className:"py-2 px-4 border-b",children:s.excess_name}),e("td",{className:"py-2 px-4 border-b",children:s.excess_source}),e("td",{className:"py-2 px-4 border-b",children:s.excess_no}),n("td",{className:"py-2 px-4 border-b",children:[s.cost," ",s.currency]}),e("td",{className:"py-2 px-4 border-b",children:s.excess_type}),e("td",{className:"py-2 px-4 border-b",children:s.quantity}),e("td",{className:"py-2 px-4 border-b",children:k(s.created_at)}),e("td",{className:"py-2 px-4 border-b",children:e("button",{className:"btn btn-sm",onClick:()=>x(s.excess_name,c),children:"Copy to Clipboard"})})]},c))})]})]}),d=(l,s)=>{u(v({[l]:s})),l==="product_id"&&(O(s),R(s))},V=l=>{u(v({availability_id:l}))},E={"RFQ Line":{"Product Name":e(_,{defaultOptions:!1,isMulti:!1,id:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:W,onChange:({value:l})=>{d("product_id",l)},defaultValue:{value:(q=a.product)==null?void 0:q.id,label:e("div",{className:"flex items-center",children:e("div",{className:"text-sm font-bold",children:(w=a.product)==null?void 0:w.product_name})},(S=a.product)==null?void 0:S.id)},className:"flex-1",required:!0}),"Customer Part Id":e("input",{id:"customer_part_id",name:"customer_part_id",className:"form-input flex-1 ",defaultValue:a.customer_part_id,onChange:l=>d(l.target.name,l.target.value)}),Quantity:e("input",{id:"quantity",name:"quantity",className:"form-input flex-1 ",defaultValue:a.quantity,onChange:l=>d(l.target.name,l.target.value),required:!0}),"Target Price":e("input",{id:"target_price",name:"target_price",defaultValue:a.target_price,onChange:l=>d(l.target.name,l.target.value),className:"form-input flex-1 "})},"":{"Alternative Products":e(_,{defaultOptions:!1,id:"alternative_products",name:"alternative_products",placeholder:"Type at least 2 characters to search...",loadOptions:W,onChange:l=>{d("alternative_products",l.map(s=>s.value))},isMulti:!0,defaultValue:a.rfq_product_alternatives?a.rfq_product_alternatives.map(l=>({value:l.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:l.product_name})})},l.id)})):[],className:"flex-1"}),Availability:e(_,{defaultOptions:!0,isMulti:!1,id:"availability",name:"availability_id",placeholder:"Type at least 2 characters to search...",loadOptions:K,onChange:({value:l})=>{d("availability_id",l)},defaultValue:{value:(t=a.availability)==null?void 0:t.id,label:e("div",{className:"flex items-center",children:e("div",{className:"text-sm font-bold",children:(h=a.availability)==null?void 0:h.availability_name})},(Y=a.availability)==null?void 0:Y.id)},className:"flex-1"}),Excess:e(_,{defaultOptions:!0,isMulti:!1,id:"excess_id",name:"excess_id",placeholder:"Type at least 2 characters to search...",loadOptions:Z,onChange:({value:l})=>{d("excess_id",l)},defaultValue:{value:(j=a.excess)==null?void 0:j.id,label:e("div",{className:"flex items-center",children:e("div",{className:"text-sm font-bold",children:(I=a.excess)==null?void 0:I.excess_name})},(L=a.excess)==null?void 0:L.id)},className:"flex-1"}),"Special Instructions":e("textarea",{id:"special_instructions",name:"special_instructions",rows:3,defaultValue:a.special_instructions,onChange:l=>d(l.target.name,l.target.value),className:"form-textarea flex-1"}),comment:e("textarea",{id:"comment",rows:3,name:"comment",className:"form-textarea flex-1",defaultValue:a.comment,onChange:l=>d(l.target.name,l.target.value),placeholder:""})}},O=async l=>{try{const s=await r.fetchSuggestedAvailability(l);if(s.status===200){const c=s.data.data,Q=c.web?[c.web]:[],z=c.nonWeb?[c.nonWeb]:[];o({web:Q,nonWeb:z})}}catch(s){console.error("Error fetching availability suggestions:",s)}},R=async l=>{try{const s=await r.fetchSuggestedExcess(l);if(s.status===200){const c=s.data.data,Q=c.matched?[c.matched]:[];N({matched:Q})}}catch(s){console.error("Error fetching excess suggestions:",s)}};return n(D,{children:[e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(P,{fields:E})}),e(i,{suggestions:m,onAvailabilitySelect:V}),e(f,{suggestions:p})]})},pe=()=>{const u=T(),a=A(o=>o.rfqFormSlice),r=(o,p)=>{u(v({[o]:p}))},m={Development:{"Processed for VRFQ round 1":e(ie,{content:"Please do not change the value",className:"red",children:e("input",{id:"processed_for_vrfq_round_1",type:"checkbox",name:"processed_for_vrfq_round_1",className:"form-checkbox",onChange:o=>r(o.target.name,o.target.checked),checked:a.processed_for_vrfq_round_1=="true"})}),"Processed for VRFQ round 2":e("label",{className:"flex items-center cursor-pointer",children:e("input",{id:"processed_for_vrfq_round_2",type:"checkbox",name:"processed_for_vrfq_round_2",className:"form-checkbox",onChange:o=>r(o.target.name,o.target.checked),checked:a.processed_for_vrfq_round_2=="true"})}),"Open Status Time":e(M,{name:"open_status_timestamp","data-enable-time":!0,options:{enableTime:!0,dateFormat:"Y-m-d H:i",position:"auto left",defaultDate:a.open_status_date?new Date(a.open_status_date+" "+a.open_status_time):null},defaultValue:a.open_status_timestamp,onChange:(o,p)=>r("open_status_timestamp",p),className:"form-input flex-1"})}};return e(D,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(P,{fields:m})})})},he=()=>{var y,g,x,i,f,d,V,E,O,R,q,w,S;const u=T(),a=A(t=>t.rfqFormSlice),r=(t,h)=>{u(v({[t]:h}))},m=[{value:"none",label:"-None-"},{value:"email",label:"Email"},{value:"telephone",label:"Telephone"},{value:"web_portal",label:"Web portal"},{value:"history",label:"History"}],o=[{value:"none",label:"-None-"},{value:"cost_saving",label:"Cost Saving"},{value:"shortage",label:"Shortage"},{value:"eol",label:"EOL"},{value:"proactive",label:"Proactive"},{value:"calculation",label:"Calculation"}],p=[{value:"none",label:"-None-"},{value:"open",label:"Open"},{value:"open_without_routing",label:"Open without routing"},{value:"quoted",label:"Quoted"},{value:"closed",label:"Closed"},{value:"in_review",label:"In review"}],N=[{value:"none",label:"-None-"},{value:"draft",label:"Draft"},{value:"no_feedback",label:"No Feedback"},{value:"negotiation_price",label:"Negotiation Price"},{value:"negotiation_conditions",label:"Negotiation Conditions"},{value:"open",label:"Open"},{value:"lost",label:"Lost"},{value:"won",label:"Won"}],C={Header:{"Account Name":e(_,{defaultOptions:!0,isMulti:!1,id:"account_id",name:"account_id",placeholder:"Type at least 2 characters to search...",loadOptions:ee,onChange:({value:t})=>{r("account_id",t)},defaultValue:{value:(y=a.account)==null?void 0:y.id,label:n("div",{className:"flex items-center",children:[a.account?e("img",{src:$(a.account.image),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,n("div",{children:[e("div",{className:"text-sm font-bold",children:(g=a.account)==null?void 0:g.account_name}),e("div",{className:"text-xs text-gray-500",children:(x=a.account)==null?void 0:x.email})]})]},(i=a.account)==null?void 0:i.id)},className:"flex-1"}),Contact:e(_,{defaultOptions:!0,isMulti:!1,id:"contact",name:"contact_id",placeholder:"Type at least 2 characters to search...",loadOptions:ae,onChange:({value:t})=>{r("contact_id",t)},defaultValue:{value:(f=a.contact)==null?void 0:f.id,label:n("div",{className:"flex items-center",children:[a.contact?e("img",{src:a.contact.image??"/assets/images/user-profile.jpeg",alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,n("div",{children:[e("div",{className:"text-sm font-bold",children:(d=a.contact)==null?void 0:d.name}),e("div",{className:"text-xs text-gray-500",children:(V=a.contact)==null?void 0:V.email})]})]},(E=a.contact)==null?void 0:E.id)},className:"flex-1"}),"Customer RFQ No":e("input",{id:"customer_rfq_no",name:"customer_rfq_no",className:"form-input flex-1 ",defaultValue:a.customer_rfq_no,onChange:t=>r(t.target.name,t.target.value)}),"Project Name / Application":e("input",{id:"project_name",name:"project_name",className:"form-input flex-1 ",defaultValue:a.project_name,onChange:t=>r(t.target.name,t.target.value)}),"RFQ Source":e(F,{name:"rfq_source",required:!0,options:m,onChange:({value:t})=>{r("rfq_source",t)},defaultValue:a.rfq_source?m.find(t=>t.value==a.rfq_source):{value:"none",label:"-None-"},className:"flex-1"}),"RFQ Type":e(F,{name:"rfq_type",required:!0,options:o,onChange:({value:t})=>{r("rfq_type",t)},defaultValue:a.rfq_type?o.find(t=>t.value==a.rfq_type):{value:"none",label:"-None-"},className:"flex-1"}),Status:e(F,{name:"status",required:!0,options:p,onChange:({value:t})=>{r("status",t)},defaultValue:a.status?p.find(t=>t.value==a.status):{value:"open",label:"Open"},className:"flex-1"}),"Date History":e(M,{name:"date_history",options:{dateFormat:"Y-m-d ",defaultDate:a.date_history?new Date(a.date_history):null},defaultValue:a.date_history,className:"form-input flex-1",placeholder:"YYYY-MM-DD",onChange:(t,h)=>r("date_history",h)}),"Exchange Rate":e("input",{id:"exchangeRate",type:"text",value:"1",placeholder:"Readonly input here…",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0}),"Portal BOM id":e("input",{id:"portal_bom_id",name:"portal_bom_id",onChange:t=>r(t.target.name,t.target.value),defaultValue:a.portal_bom_id,className:"form-input flex-1 "})},"":{"RFQ Owner":e(_,{defaultOptions:!0,isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",loadOptions:te,onChange:({value:t})=>{r("owner_id",t)},defaultValue:{value:(O=a.owner)==null?void 0:O.id,label:n("div",{className:"flex items-center",children:[a.owner?e("img",{src:$(a.owner.avatar_data),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,n("div",{children:[e("div",{className:"text-sm font-bold",children:((R=a.owner)==null?void 0:R.first_name)+" "+((q=a.owner)==null?void 0:q.last_name)}),e("div",{className:"text-xs text-gray-500",children:(w=a.owner)==null?void 0:w.email})]})]},(S=a.owner)==null?void 0:S.id)},className:"flex-1"}),"Deal Stage":e(F,{name:"deal_stage",options:N,onChange:({value:t})=>{r("deal_stage",t)},defaultValue:N.find(t=>t.value==a.deal_stage),className:"flex-1"}),"Customer RFQ File":e(de,{id:"customer_rfq_file",modelName:"rfq",formState:a,formAttribute:"customer_rfq_file",updateFormData:v}),"RFQ Dead Line":e(M,{name:"rfq_dead_line",options:{dateFormat:"Y-m-d ",defaultDate:a.rfq_dead_line?new Date(a.rfq_dead_line):null},defaultValue:a.rfq_dead_line,className:"form-input flex-1",placeholder:"YYYY-MM-DD",onChange:(t,h)=>r("rfq_dead_line",h)}),Currency:e(F,{name:"currency",id:"currency",options:B,className:"flex-1",onChange:({value:t})=>{r("currency",t)},defaultValue:B.find(t=>t.value==a.currency)}),"Vendor RFQs Line":e(_,{defaultOptions:!0,id:"vendor_rfqs_line",name:"vendor_rfqs_line",placeholder:"Type at least 2 characters to search...",loadOptions:le,onChange:t=>{r("vendor_rfqs_lines",t.map(h=>h.value))},defaultValue:a.vendor_rfqs_line?a.vendor_rfqs_line.map(t=>({value:t.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:t.vendor_name})})},t.id)})):[],isMulti:!0,className:"flex-1"})}};return e(D,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(P,{fields:C})})})},fe=()=>{const a=X().id;return n("div",{className:"mt-8 px-4",children:[e(he,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(me,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(pe,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ue,{modelId:a,modelName:"rfq"})]})},Se=()=>{const{hasPermission:u}=se(),a=A(i=>i.rfqFormSlice),r=T(),m=new G,[o,p]=b.useState(!0),C=X().id,y=re();b.useEffect(()=>{r(ne("RFQ Edit"))}),b.useEffect(()=>{r(H())},[]),b.useEffect(()=>{g().then(()=>{p(!1)})},[C]),b.useEffect(()=>{r(v({api:"updateSingleRfq",redirectTo:"/rfq/edit/:id",action:"edit"}))},[]);const g=async()=>{const i=await m.fetchSingleRfq(C);if(i.status!=200)return;const f=i.data.data.rfq;r(v(f))};if(o)return e(U,{});const x=async()=>{try{const i=await m.convertRfqToQuote({id:a.id});J.fire({title:"Rfq Converted Successfully.",html:`
                <span class="text-blue-500">Do you want to redirect to created Quote ? </span>
                `,showCancelButton:!0,icon:"success",confirmButtonText:"Redirect",denyButtonText:"Close",customClass:{title:"text-blue-500"}}).then(f=>{f.isConfirmed&&y(`/quotes/edit/${i.data.quote.id}`,{replace:!0})})}catch(i){oe("Failed to convert Rfq"),console.error(i);return}};return!u("update-rfq")||o?e(U,{}):n("div",{className:"px-4",children:[e(ce,{formState:a,resetForm:H}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:n("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6",children:[e("button",{onClick:x,className:"mx-5 btn btn-secondary gap-2",children:"Convert RFQ to Quote"}),e(fe,{})]})})]})};export{Se as default};
