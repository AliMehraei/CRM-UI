import{e as b,u as x,b as ae,a as e,l as _,n as ie,j as p,f as F,x as se,z as re,m as k,k as X,U as oe,aI as g,F as y,V as te,_ as ce,aJ as de,r as w,h as le,c as ue,K as me,s as pe,aK as Z,L as ee,S as he,M as fe}from"./main-22663fbf.js";import{S as V}from"./react-select.esm-d04eef86.js";import{G as q,R as ge,A as ve}from"./GenerateFields-d6e292b2.js";import{F as _e}from"./FileUploadComponent-2aab5425.js";import{F as be}from"./index-008d6758.js";import{A as xe}from"./AttachmentSection-2f8be997.js";/* empty css                  */import"./index-f85a6b97.js";import"./ClearButtonComponent-29b9f612.js";const Ne=()=>{var m,n,o,h,v,C,i,N,O,Q,I,D,T,j,A,M,P,L,R,E,B,U,Y,$,H,W,G;const a=b(r=>r.quoteForm),c=x(),l=new ae,d=[{value:"none",label:"-None-"},{value:"high",label:"High"},{value:"unknown",label:"Unknown"},{value:"low",label:"Low"}],u=[{value:"draft",label:"Draft"},{value:"no_feedback",label:"No Feedback"},{value:"negotiation_price",label:"Negotiation Price"},{value:"negotiation_conditions",label:"Negotiation Conditions"},{value:"open",label:"Open"},{value:"lost",label:"Lost"},{value:"won",label:"Won"}],s=(r,S)=>{c(g({[r]:S}))},f=async r=>{const S=await l.fetchSingleAccount(r);if(S.status!=200)return;const K=S.data.data.account;c(g({account:K}));const ne=["billing_street","billing_city","billing_state","billing_code","billing_country","shipping_street","shipping_city","shipping_state","shipping_code","shipping_country"],z={};ne.forEach(J=>{z[J]=K[J]??null}),c(g(z))},t={Header:{"Account Name":e(_,{defaultOptions:!0,isMulti:!1,id:"account_id",name:"account_id",placeholder:"Type at least 2 characters to search...",loadOptions:ie,onChange:({value:r})=>{s("account_id",r),f(r)},defaultValue:{value:(m=a.account)==null?void 0:m.id,label:p("div",{className:"flex items-center",children:[a.account?e("img",{src:F(a.account.image),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,p("div",{children:[e("div",{className:"text-sm font-bold",children:(n=a.account)==null?void 0:n.account_name}),e("div",{className:"text-xs text-gray-500",children:(o=a.account)==null?void 0:o.email})]})]},(h=a.account)==null?void 0:h.id)},className:"flex-1"}),"Contact Name":e(_,{defaultOptions:!0,isMulti:!1,id:"contact_id",name:"contact_id",placeholder:"Type at least 2 characters to search...",loadOptions:se,onChange:({value:r})=>{s("contact_id",r)},defaultValue:{value:(v=a.contact)==null?void 0:v.id,label:p("div",{className:"flex items-center",children:[a.contact?e("img",{src:a.contact.image??"/assets/images/user-profile.jpeg",alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,p("div",{children:[e("div",{className:"text-sm font-bold",children:(C=a.contact)==null?void 0:C.name}),e("div",{className:"text-xs text-gray-500",children:(i=a.contact)==null?void 0:i.email})]})]},(N=a.contact)==null?void 0:N.id)},className:"flex-1"}),RFQ:e(_,{defaultOptions:!0,isMulti:!1,id:"rfq_id",name:"rfq_id",placeholder:"Type at least 2 characters to search...",loadOptions:re,onChange:({value:r})=>{s("rfq_id",r)},defaultValue:{value:(O=a.rfq)==null?void 0:O.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(Q=a.rfq)==null?void 0:Q.rfq_name})})},(I=a.rfq)==null?void 0:I.id)},className:"flex-1"}),"Customer RFQ No":e("input",{id:"customer_rfq_no",type:"text",name:"customer_rfq_no",className:"form-input flex-1 ",onChange:r=>s(r.target.name,r.target.value),defaultValue:a.customer_rfq_no}),Subject:e("input",{required:!0,id:"subject",name:"subject",type:"text",className:"form-input flex-1 ",onChange:r=>s(r.target.name,r.target.value),defaultValue:a.subject}),"Converted by":e(_,{defaultOptions:!0,isMulti:!1,id:"converted_by_id",name:"converted_by_id",placeholder:"Type at least 2 characters to search...",loadOptions:k,className:"flex-1",onChange:({value:r})=>{s("converted_by_id",r)},defaultValue:{value:(D=a.converted_by)==null?void 0:D.id,label:e("div",{className:"flex items-center",children:e("div",{className:"text-sm font-bold",children:((T=a.converted_by)==null?void 0:T.first_name)+" "+((j=a.converted_by)==null?void 0:j.last_name)})},(A=a.converted_by)==null?void 0:A.id)}}),"Quote Chance":e(V,{name:"quote_chance",required:!0,options:d,className:"flex-1",onChange:({value:r})=>{s("quote_chance",r)},defaultValue:d.find(r=>r.value==a.quote_chance)}),Currency:e(V,{name:"currency",options:X,className:"flex-1",onChange:({value:r})=>{s("currency",r)},defaultValue:X.find(r=>r.value==a.currency)})},"":{"Quote Owner":e(_,{defaultOptions:!0,isMulti:!1,id:"owner_id",name:"owner_id",placeholder:"Type at least 2 characters to search...",loadOptions:k,onChange:({value:r})=>{s("owner_id",r)},defaultValue:{value:(M=a.owner)==null?void 0:M.id,label:p("div",{className:"flex items-center",children:[a.owner?e("img",{src:F(a.owner.avatar_data),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,p("div",{children:[e("div",{className:"text-sm font-bold",children:((P=a.owner)==null?void 0:P.first_name)+" "+((L=a.owner)==null?void 0:L.last_name)}),e("div",{className:"text-xs text-gray-500",children:(R=a.owner)==null?void 0:R.email})]})]},(E=a.owner)==null?void 0:E.id)},className:"flex-1"}),"PM User":e(_,{defaultOptions:!0,required:!0,isMulti:!1,id:"pm_user_id",name:"pm_user_id",placeholder:"Type at least 2 characters to search...",loadOptions:k,onChange:({value:r})=>{s("pm_user_id",r)},defaultValue:{value:(B=a.pm_user)==null?void 0:B.id,label:p("div",{className:"flex items-center",children:[a.pm_user?e("img",{src:F(a.pm_user.avatar_data),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,p("div",{children:[e("div",{className:"text-sm font-bold",children:(U=a.pm_user)==null?void 0:U.name}),e("div",{className:"text-xs text-gray-500",children:(Y=a.pm_user)==null?void 0:Y.email})]})]},($=a.pm_user)==null?void 0:$.id)},className:"flex-1"}),"Deals Name":e(_,{defaultOptions:!0,isMulti:!1,id:"deal_id",name:"deal_id",placeholder:"Type at least 2 characters to search...",loadOptions:oe,onChange:({value:r})=>{s("deal_id",r)},defaultValue:{value:(H=a.deal)==null?void 0:H.id,label:e("div",{className:"flex items-center",children:e("div",{className:"text-sm font-bold",children:(W=a.deal)==null?void 0:W.deal_name})},(G=a.deal)==null?void 0:G.id)},className:"flex-1"}),"Quote Stage":e(V,{name:"quote_stage",required:!0,options:u,className:"flex-1",onChange:({value:r})=>{s("quote_stage",r)},defaultValue:u.find(r=>r.value==a.quote_stage)}),"Quote File(Excel)":e(_e,{id:"quote_file",modelName:"quote",formState:a,formAttribute:"quote_file",updateFormData:g}),"Exchange Rate":e("input",{id:"exchangeRate",type:"text",value:"1",placeholder:"Readonly input here…",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0})}};return e(y,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(q,{fields:t})})})},ye=()=>{const a=x(),c=b(s=>s.quoteForm),l=(s,f)=>{a(g({[s]:f}))},d=[{value:"none",label:"-None-"},{value:"1_day",label:"1 Day"},{value:"3_day",label:"3 Days"},{value:"1_week",label:"1 Week"}],u={Status:{"Quote valid":e(V,{options:d,name:"quote_valid",id:"quote_valid",onChange:({value:s})=>{l("converted_by_id",s)},defaultValue:d.find(s=>s.value==c.quote_valid),className:"flex-1"}),"Proactive Offer":e("input",{id:"proactive_offer",type:"checkbox",name:"proactive_offer",className:"form-checkbox",onChange:s=>l(s.target.name,s.target.checked),checked:c.proactive_offer})},"":{Rating:e("input",{id:"rating",name:"rating",className:"form-input flex-1 ",onChange:s=>l(s.target.name,s.target.value),defaultValue:c.rating})}};return e(y,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(q,{fields:u})})})},Ce=()=>{var u,s,f;const a=x(),c=b(t=>t.quoteForm),l=(t,m)=>{a(g({[t]:m}))},d={"Quote Line":{"Product Name":e(_,{defaultOptions:!0,isMulti:!1,id:"product_id",name:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:te,onChange:({value:t})=>{l("product_id",t)},defaultValue:{value:(u=c.product)==null?void 0:u.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(s=c.product)==null?void 0:s.product_name})})},(f=c.product)==null?void 0:f.id)},className:"flex-1"}),"Customer part ID":e("input",{id:"customer_part_id",name:"customer_part_id",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:c.customer_part_id})},"":{Quantity:e("input",{id:"quantity",name:"quantity",className:"form-input flex-1 ",defaultValue:c.quantity,onChange:t=>l(t.target.name,t.target.value)}),"List Price":e("input",{id:"list_price",name:"list_price",className:"form-input flex-1 ",defaultValue:c.list_price,onChange:t=>l(t.target.name,t.target.value)}),"Lead Time":e("input",{id:"lead_time",name:"lead_time",className:"form-input flex-1 ",defaultValue:c.lead_time,onChange:t=>l(t.target.name,t.target.value)})}};return e(y,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(q,{fields:d})})})},we=()=>{var u,s,f,t,m,n;const a=b(o=>o.quoteForm),c=x(),l=(o,h)=>{c(g({[o]:h}))},d={Source:{Vendor:e(_,{defaultOptions:!0,isMulti:!1,id:"vendor_id",name:"vendor_id",placeholder:"Type at least 2 characters to search...",loadOptions:ce,onChange:({value:o})=>{l("vendor_id",o)},defaultValue:{value:(u=a.vendor)==null?void 0:u.id,label:e("div",{className:"flex items-center",children:e("div",{className:"text-sm font-bold",children:(s=a.vendor)==null?void 0:s.vendor_name})},(f=a.vendor)==null?void 0:f.id)},className:"flex-1"}),"Availability No":e("input",{id:"availability_no",name:"availability_no",className:"form-input flex-1 ",defaultValue:a.availability_no,onChange:o=>l(o.target.name,o.target.value)}),"Availability Date":e(be,{name:"availability_date",options:{dateFormat:"Y-m-d ",defaultDate:a.availability_date?new Date(a.availability_date):null},defaultValue:a.availability_date,className:"form-input flex-1",placeholder:"YYYY-MM-DD",onChange:(o,h)=>l("availability_date",h)}),Availability:e(_,{defaultOptions:!0,isMulti:!1,id:"availability_id",name:"availability_id",placeholder:"Type at least 2 characters to search...",loadOptions:de,onChange:({value:o})=>{l("availability_id",o)},defaultValue:{value:(t=a.availability)==null?void 0:t.id,label:e("div",{className:"flex items-center",children:e("div",{className:"text-sm font-bold",children:(m=a.availability)==null?void 0:m.availability_name})},(n=a.availability)==null?void 0:n.id)},className:"flex-1"})},"":{Cost:e("input",{id:"cost",name:"cost",className:"form-input flex-1 ",defaultValue:a.cost,onChange:o=>l(o.target.name,o.target.value)}),"LT vendor":e("input",{id:"lt_vendor",name:"lt_vendor",className:"form-input flex-1 ",defaultValue:a.lt_vendor,onChange:o=>l(o.target.name,o.target.value)}),SPQ:e("input",{id:"spq",name:"spq",className:"form-input flex-1 ",defaultValue:a.spq,onChange:o=>l(o.target.name,o.target.value)}),"Quantity in Stock":e("input",{id:"quantity_in_stock",name:"quantity_in_stock",defaultValue:a.quantity_in_stock,className:"form-input flex-1 ",onChange:o=>l(o.target.name,o.target.value)})}};return e(y,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(q,{fields:d})})})},qe=()=>{var u,s,f,t,m,n,o,h,v,C;const a=b(i=>i.quoteForm),c=x(),l=(i,N)=>{c(g({[i]:N}))},d={"Address Information":{"Billing Street":e("input",{id:"billing_street",name:"billing_street",required:!0,onChange:i=>l(i.target.name,i.target.value),value:a.billing_street||((u=a.account)==null?void 0:u.billing_street)||"",className:"form-input flex-1"}),"Billing City":e("input",{id:"billing_city",name:"billing_city",required:!0,value:a.billing_city||((s=a.account)==null?void 0:s.billing_city)||"",onChange:i=>l(i.target.name,i.target.value),className:"form-input flex-1"}),"Billing State":e("input",{id:"billing_state",name:"billing_state",value:a.billing_state||((f=a.account)==null?void 0:f.billing_state)||"",onChange:i=>l(i.target.name,i.target.value),className:"form-input flex-1"}),"Billing Code":e("input",{id:"billing_code",name:"billing_code",required:!0,value:a.billing_code||((t=a.account)==null?void 0:t.billing_code)||"",onChange:i=>l(i.target.name,i.target.value),className:"form-input flex-1"}),"Billing Country":e("input",{id:"billing_country",name:"billing_country",required:!0,value:a.billing_country||((m=a.account)==null?void 0:m.billing_country)||"",onChange:i=>l(i.target.name,i.target.value),className:"form-input flex-1"})},"":{"Shipping Street":e("input",{id:"shipping_street",name:"shipping_street",value:a.shipping_street||((n=a.account)==null?void 0:n.shipping_street)||"",onChange:i=>l(i.target.name,i.target.value),className:"form-input flex-1"}),"Shipping City":e("input",{id:"shipping_city",name:"shipping_city",value:a.shipping_city||((o=a.account)==null?void 0:o.shipping_city)||"",onChange:i=>l(i.target.name,i.target.value),className:"form-input flex-1"}),"Shipping State":e("input",{id:"shipping_state",name:"shipping_state",value:a.shipping_state||((h=a.account)==null?void 0:h.shipping_state)||"",onChange:i=>l(i.target.name,i.target.value),className:"form-input flex-1"}),"Shipping Code":e("input",{id:"shipping_code",name:"shipping_code",value:a.shipping_code||((v=a.account)==null?void 0:v.shipping_code)||"",onChange:i=>l(i.target.name,i.target.value),className:"form-input flex-1"}),"Shipping Country":e("input",{id:"shipping_country",name:"shipping_country",value:a.shipping_country||((C=a.account)==null?void 0:C.shipping_country)||"",onChange:i=>l(i.target.name,i.target.value),className:"form-input flex-1"})}};return e(y,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(q,{fields:d})})})},Se=()=>{const a=b(d=>d.quoteForm),c=x(),l=(d,u)=>{c(g({[d]:u}))};return e(y,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:"lg:w-1/2 w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6",children:p("div",{className:"",children:[e("div",{className:"text-lg",children:"Terms and Conditions :"}),p("div",{className:"mt-4 flex items-center",children:[e("label",{className:"ltr:mr-2 rtl:ml-2 w-1/3 mb-0",children:"Terms and Conditions"}),e("textarea",{id:"terms_conditions",rows:3,name:"terms_conditions",className:"form-textarea flex-1",defaultValue:a.terms_conditions,placeholder:"",onChange:d=>l(d.target.name,d.target.value)})]},"terms_conditions")]},"Terms and Conditions")})})})},Ve=()=>{const a=b(d=>d.quoteForm),c=x(),l=(d,u)=>{c(g({[d]:u}))};return e(y,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:"lg:w-1/2 w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6",children:p("div",{className:"",children:[e("div",{className:"text-lg",children:"Description Information :"}),p("div",{className:"mt-4 flex items-center",children:[e("label",{className:"ltr:mr-2 rtl:ml-2 w-1/3 mb-0",children:"Description"}),e("textarea",{id:"description",rows:3,name:"description",className:"form-textarea flex-1",placeholder:"",onChange:d=>l(d.target.name,d.target.value),defaultValue:a.description})]},"description")]},"Terms and Conditions")})})})},Fe=()=>{const a=b(t=>t.quoteForm),c=x(),[l,d]=w.useState([]),u=(t,m,n)=>{const o=l.find(N=>N.id===n),h=l.findIndex(N=>N.id===n),v={...o,[t]:m},C=(parseFloat(v.quantity)||0)*(parseFloat(v.list_price)||0);v.amount=C;const i={...l,[h]:v};d(Object.values(i)),c(g({items:i}))};w.useEffect(()=>{d(Object.values(a.items))},[]);const s=()=>{let t;t=l!=null&&l.length?l.reduce((n,o)=>o.id>n?o.id:n,l[0].id):0;let m=[...l,{id:t+1,name:"",part_id:"",quantity:1,SPQ:"",list_price:"",lead_time:"",date_code:"",comment:"",amount:0}];d(m),c(g({items:m}))},f=(t=null)=>{const m=l.filter(n=>n.id!=t.id);d(m),c(g({items:m}))};return e(y,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12",children:p("div",{className:"",children:[p("div",{className:"text-lg",children:["Quote Items ",e(ge,{})," :"]}),p("div",{className:"mt-8",children:[e("div",{className:"overflow-x-auto	w-11/12",children:p("table",{className:"table-auto",children:[e("thead",{children:p("tr",{children:[e("th",{className:"w-1",children:"Product Name"}),e("th",{className:"w-1",children:"Customer Part ID"}),e("th",{className:"w-1",children:"Quantity"}),e("th",{className:"w-1",children:"SPQ"}),e("th",{className:"w-1",children:"List Price"}),e("th",{className:"w-1",children:"Lead Time"}),e("th",{className:"w-1",children:"Date Code"}),e("th",{className:"w-1",children:"Comment"}),e("th",{className:"w-1",children:"Amount"})]})}),e("tbody",{children:l==null?void 0:l.map(t=>{var m;return p("tr",{className:"align-top",children:[p("td",{children:[e(_,{defaultOptions:!0,isMulti:!1,id:"product_id",name:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:te,onChange:({value:n})=>{u("product_id",n,t.id)},className:"flex-1  min-w-[200px]",defaultValue:{value:t.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(m=t.product)==null?void 0:m.product_name})})},t.id)}}),",",e("textarea",{name:"description",className:"form-textarea mt-4",placeholder:"Enter Description",onChange:n=>u(n.target.name,n.target.value,t.id),defaultValue:t.description})]}),e("td",{children:e("input",{name:"customer_part_id",type:"text",className:"form-input min-w-[200px]",onChange:n=>u(n.target.name,n.target.value,t.id),defaultValue:t.customer_part_id})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",placeholder:"Quantity",name:"quantity",min:0,onChange:n=>u(n.target.name,n.target.value,t.id),defaultValue:t.quantity})}),e("td",{children:e("input",{name:"spq",type:"text",className:"form-input min-w-[200px]",onChange:n=>u(n.target.name,n.target.value,t.id),defaultValue:t.spq})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",placeholder:"Price",name:"list_price",min:0,defaultValue:t.list_price,onChange:n=>u(n.target.name,n.target.value,t.id)})}),e("td",{children:e("input",{name:"lead_time",type:"text",className:"form-input min-w-[200px]",defaultValue:t.lead_time,onChange:n=>u(n.target.name,n.target.value,t.id)})}),e("td",{children:e("input",{name:"date_code",type:"text",className:"form-input min-w-[200px]",defaultValue:t.date_code,onChange:n=>u(n.target.name,n.target.value,t.id)})}),e("td",{children:e("input",{name:"comment",type:"text",className:"form-input min-w-[200px]",defaultValue:t.comment,onChange:n=>u(n.target.name,n.target.value,t.id)})}),e("td",{children:e("input",{disabled:!0,name:"amount",type:"text",className:"form-input min-w-[200px] disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",value:t.amount,onChange:n=>u(n.target.name,n.target.value,t.id)})}),e("td",{children:e("button",{type:"button",onClick:()=>f(t),children:p("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},t.id)})})]})}),e("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:e("div",{className:"sm:mb-0 mb-6",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>s(),children:"Add Item"})})})]})]},"Quote Items")})})})},ke=()=>{const c=le().id;return p("div",{className:"mt-8 px-4",children:[e(Ne,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ye,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Fe,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Ce,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(we,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(qe,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Se,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Ve,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(xe,{modelId:c,modelName:"quote"})]})},Le=()=>{const{hasPermission:a}=ue(),c=x(),l=b(h=>h.quoteForm),[d,u]=w.useState(!0),f=le().id,t=new ae,m=me();w.useEffect(()=>{c(pe("Quotes Edit"))}),w.useEffect(()=>{c(Z())},[]),w.useEffect(()=>{n().then(()=>{u(!1)})},[f]),w.useEffect(()=>{c(g({api:"updateSingleQuote",redirectTo:"/quotes/edit/:id",action:"edit"}))},[]);const n=async()=>{const h=await t.fetchSingleQuote(f);if(h.status!=200)return;const v=h.data.data.quote;c(g(v))},o=async()=>{try{const h=await t.convertQuoteToSalesOrder({id:l.id});he.fire({title:"Quote Converted Successfully.",html:`
                <span class="text-blue-500">Do you want to redirect to created SalesOrder ? </span>
                `,showCancelButton:!0,icon:"success",confirmButtonText:"Redirect",denyButtonText:"Close",customClass:{title:"text-blue-500"}}).then(v=>{v.isConfirmed&&m(`/sales/edit/${h.data.salesOrder.id}`,{replace:!0})})}catch(h){fe("Failed to convert Rfq"),console.error(h);return}};return d?e(ee,{}):!a("update-quote")||d?e(ee,{}):p("div",{className:"px-4",children:[e(ve,{formState:l,resetForm:Z}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:p("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:[e("button",{onClick:o,className:"mx-5 btn btn-secondary gap-2",children:"Convert Quote to Sales Order"}),e(ke,{})]})})]})};export{Le as default};
