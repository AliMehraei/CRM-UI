import{d as S,u as q,a as ne,j as e,l as y,n as oe,b as m,F as h,f as Q,p as C,x as ce,z as de,m as I,k as J,W as ue,aJ as f,X as ie,$ as me,aK as pe,r as w,h as se,c as he,K as fe,s as ge,aL as X,e as Z,S as be,M as ve,O as ee,Q as _e}from"./main-52c7c346.js";import{S as T}from"./react-select.esm-7d4aafc4.js";import{G as F,R as xe}from"./GenerateFields-b98fd03f.js";import{F as ye}from"./FileUploadComponent-25ab6a47.js";import{Q as te,H as ae,I as le}from"./SelectOptions-11a13050.js";import{F as Ne}from"./index-2ea3a7cd.js";import{A as Ce}from"./AttachmentSection-61f7c225.js";/* empty css                  */import{A as we}from"./ActionButtonsComponent-285b78cc.js";import"./ClearButtonComponent-5de9866e.js";import"./index-cd3f232e.js";const Se=()=>{var p,u,b,v,a,c,i,_,r,x,O,k,V,j,D,E,A,M,P,$,L,R,B,U,Y,H,z;const t=S(l=>l.quoteForm),o=q(),n=new ne,s=(l,N)=>{o(f({[l]:N}))},d=async l=>{const N=await n.fetchSingleAccount(l);if(N.status!=200)return;const G=N.data.data.account;o(f({account:G}));const re=["billing_street","billing_city","billing_state","billing_code","billing_country","shipping_street","shipping_city","shipping_state","shipping_code","shipping_country"],K={};re.forEach(W=>{K[W]=G[W]??null}),o(f(K))},g={Header:{"Account Name":e(y,{defaultOptions:!0,isMulti:!1,id:"account_id",name:"account_id",placeholder:"Type at least 2 characters to search...",loadOptions:oe,onChange:({value:l})=>{s("account_id",l),d(l)},defaultValue:{value:(p=t.account)==null?void 0:p.id,label:e("div",{className:"flex items-center",children:t.account?m(h,{children:[e("img",{src:Q(t.account.image_data),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),m("div",{children:[e("div",{className:"text-sm font-bold",children:(u=t.account)==null?void 0:u.account_name}),e("div",{className:"text-xs text-gray-500",children:(b=t.account)==null?void 0:b.email})]}),e("button",{className:"btn text-xs btn-sm ml-auto",onClick:()=>{var l;return C(`${(l=t.account)==null?void 0:l.account_name}`)},children:"Copy & Select"})]}):null},(v=t.account)==null?void 0:v.id)},className:"flex-1"}),"Contact Name":e(y,{defaultOptions:!0,isMulti:!1,id:"contact_id",name:"contact_id",placeholder:"Type at least 2 characters to search...",loadOptions:ce,onChange:({value:l})=>{s("contact_id",l)},defaultValue:{value:(a=t.contact)==null?void 0:a.id,label:e("div",{className:"flex items-center",children:t.contact?m(h,{children:[e("img",{src:Q(t.contact.image_data),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),m("div",{children:[e("div",{className:"text-sm font-bold",children:(c=t.contact)==null?void 0:c.name}),e("div",{className:"text-xs text-gray-500",children:(i=t.contact)==null?void 0:i.email})]}),e("button",{className:"btn text-xs btn-sm ml-auto",onClick:()=>{var l;return C(`${(l=t.contact)==null?void 0:l.name}`)},children:"Copy & Select"})]}):null},(_=t.contact)==null?void 0:_.id)},className:"flex-1"}),RFQ:e(y,{defaultOptions:!0,isMulti:!1,id:"rfq_id",name:"rfq_id",placeholder:"Type at least 2 characters to search...",loadOptions:de,onChange:({value:l})=>{s("rfq_id",l)},defaultValue:{value:(r=t.rfq)==null?void 0:r.id,label:e("div",{className:"flex items-center",children:t.rfq?m(h,{children:[e("div",{className:"text-sm font-bold",children:(x=t.rfq)==null?void 0:x.rfq_name}),e("button",{className:"btn text-xs btn-sm ml-auto",onClick:()=>{var l;return C(`${(l=t.rfq)==null?void 0:l.rfq_name}`)},children:"Copy & Select"})]}):null},(O=t.rfq)==null?void 0:O.id)},className:"flex-1"}),"Customer RFQ No":e("input",{id:"customer_rfq_no",type:"text",name:"customer_rfq_no",className:"form-input flex-1 ",onChange:l=>s(l.target.name,l.target.value),defaultValue:t.customer_rfq_no}),Subject:e("input",{required:!0,id:"subject",name:"subject",type:"text",className:"form-input flex-1 ",onChange:l=>s(l.target.name,l.target.value),defaultValue:t.subject}),"Converted by":e(y,{defaultOptions:!0,isMulti:!1,id:"converted_by_id",name:"converted_by_id",placeholder:"Type at least 2 characters to search...",loadOptions:I,className:"flex-1",onChange:({value:l})=>{s("converted_by_id",l)},defaultValue:t.converted_by?{value:(k=t.converted_by)==null?void 0:k.id,label:m("div",{className:"flex items-center",children:[m("div",{className:"text-sm font-bold",children:[(V=t.converted_by)==null?void 0:V.first_name," ",(j=t.converted_by)==null?void 0:j.last_name]}),e("button",{className:"btn text-xs btn-sm ml-auto",onClick:()=>{var l,N;return C(`${((l=t.converted_by)==null?void 0:l.first_name)+((N=t.converted_by)==null?void 0:N.last_name)}`)},children:"Copy & Select"})]},(D=t.converted_by)==null?void 0:D.id)}:{value:null,lable:null}}),"Quote Chance":e(T,{name:"quote_chance",required:!0,options:te,className:"flex-1",onChange:({value:l})=>{s("quote_chance",l)},defaultValue:te.find(l=>l.value==t.quote_chance)}),Currency:e(T,{name:"currency",options:J,className:"flex-1",onChange:({value:l})=>{s("currency",l)},defaultValue:J.find(l=>l.value==t.currency)})},"":{"Quote Owner":e(y,{defaultOptions:!0,isMulti:!1,id:"owner_id",name:"owner_id",placeholder:"Type at least 2 characters to search...",loadOptions:I,onChange:({value:l})=>{s("owner_id",l)},defaultValue:{value:(E=t.owner)==null?void 0:E.id,label:m("div",{className:"flex items-center",children:[t.owner?e("img",{src:Q(t.owner.avatar_data),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,m("div",{children:[e("div",{className:"text-sm font-bold",children:((A=t.owner)==null?void 0:A.first_name)+" "+((M=t.owner)==null?void 0:M.last_name)}),e("div",{className:"text-xs text-gray-500",children:(P=t.owner)==null?void 0:P.email})]}),e("button",{className:"btn text-xs btn-sm ml-auto",onClick:()=>{var l,N;return C(`${((l=t.owner)==null?void 0:l.first_name)+" "+((N=t.owner)==null?void 0:N.last_name)}`)},children:"Copy & Select"})]},($=t.owner)==null?void 0:$.id)},className:"flex-1"}),"PM User":e(y,{defaultOptions:!0,isMulti:!1,id:"pm_user_id",name:"pm_user_id",placeholder:"Type at least 2 characters to search...",loadOptions:I,onChange:({value:l})=>{s("pm_user_id",l)},defaultValue:{value:(L=t.pm_user)==null?void 0:L.id,label:e("div",{className:"flex items-center",children:t.pm_user?m(h,{children:[e("img",{src:Q(t.pm_user.avatar_data),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),m("div",{children:[e("div",{className:"text-sm font-bold",children:(R=t.pm_user)==null?void 0:R.name}),e("div",{className:"text-xs text-gray-500",children:(B=t.pm_user)==null?void 0:B.email})]}),e("button",{className:"btn text-xs btn-sm ml-auto",onClick:()=>{var l;return C(`${(l=t.pm_user)==null?void 0:l.name}`)},children:"Copy & Select"})]}):null},(U=t.pm_user)==null?void 0:U.id)},className:"flex-1"}),"Deals Name":e(y,{defaultOptions:!0,isMulti:!1,id:"deal_id",name:"deal_id",placeholder:"Type at least 2 characters to search...",loadOptions:ue,onChange:({value:l})=>{s("deal_id",l)},defaultValue:{value:(Y=t.deal)==null?void 0:Y.id,label:e("div",{className:"flex items-center",children:t.deal?m(h,{children:[e("div",{className:"text-sm font-bold",children:(H=t.deal)==null?void 0:H.deal_name}),e("button",{className:"btn text-xs btn-sm ml-auto",onClick:()=>{var l;return C(`${(l=t.deal)==null?void 0:l.deal_name}`)},children:"Copy & Select"})]}):null},(z=t.deal)==null?void 0:z.id)},className:"flex-1"}),"Quote Stage":e(T,{name:"quote_stage",required:!0,options:ae,className:"flex-1",onChange:({value:l})=>{s("quote_stage",l)},defaultValue:ae.find(l=>l.value==t.quote_stage)}),"Quote File(Excel)":e(ye,{id:"quote_file",modelName:"quote",formState:t,formAttribute:"quote_file",updateFormData:f}),"Exchange Rate":e("input",{id:"exchangeRate",type:"text",value:"1",placeholder:"Readonly input here…",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0})}};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(F,{fields:g})})})},qe=()=>{const t=q(),o=S(d=>d.quoteForm),n=(d,g)=>{t(f({[d]:g}))},s={Status:{"Quote valid":e(T,{options:le,name:"quote_valid",id:"quote_valid",onChange:({value:d})=>{n("converted_by_id",d)},defaultValue:le.find(d=>d.value==o.quote_valid),className:"flex-1"}),"Proactive Offer":e("input",{id:"proactive_offer",type:"checkbox",name:"proactive_offer",className:"form-checkbox",onChange:d=>n(d.target.name,d.target.checked),checked:o.proactive_offer})},"":{Rating:e("input",{id:"rating",name:"rating",className:"form-input flex-1 ",onChange:d=>n(d.target.name,d.target.value),defaultValue:o.rating})}};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(F,{fields:s})})})},Ve=()=>{var d,g,p;const t=q(),o=S(u=>u.quoteForm),n=(u,b)=>{t(f({[u]:b}))},s={"Quote Line":{"Product Name":e(y,{defaultOptions:!1,isMulti:!1,id:"product_id",name:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:ie,onChange:({value:u})=>{n("product_id",u)},defaultValue:{value:(d=o.product)==null?void 0:d.id,label:e("div",{className:"flex items-center",children:o.product?m(h,{children:[e("div",{className:"text-sm font-bold",children:(g=o.product)==null?void 0:g.product_name}),e("button",{className:"btn text-xs btn-sm ml-auto",onClick:()=>{var u;return C(`${(u=o.product)==null?void 0:u.product_name}`)},children:"Copy & Select"})]}):null},(p=o.product)==null?void 0:p.id)},className:"flex-1"}),"Customer part ID":e("input",{id:"customer_part_id",name:"customer_part_id",className:"form-input flex-1 ",onChange:u=>n(u.target.name,u.target.value),defaultValue:o.customer_part_id})},"":{Quantity:e("input",{id:"quantity",name:"quantity",className:"form-input flex-1 ",defaultValue:o.quantity,onChange:u=>n(u.target.name,u.target.value)}),"List Price":e("input",{id:"list_price",name:"list_price",className:"form-input flex-1 ",defaultValue:o.list_price,onChange:u=>n(u.target.name,u.target.value)}),"Lead Time":e("input",{id:"lead_time",name:"lead_time",className:"form-input flex-1 ",defaultValue:o.lead_time,onChange:u=>n(u.target.name,u.target.value)})}};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(F,{fields:s})})})},ke=()=>{var d,g,p,u,b,v;const t=S(a=>a.quoteForm),o=q(),n=(a,c)=>{o(f({[a]:c}))},s={Source:{Vendor:e(y,{defaultOptions:!0,isMulti:!1,id:"vendor_id",name:"vendor_id",placeholder:"Type at least 2 characters to search...",loadOptions:me,onChange:({value:a})=>{n("vendor_id",a)},defaultValue:{value:(d=t.vendor)==null?void 0:d.id,label:e("div",{className:"flex items-center",children:t.vendor?m(h,{children:[e("div",{className:"text-sm font-bold",children:(g=t.vendor)==null?void 0:g.vendor_name}),e("button",{className:"btn text-xs btn-sm ml-auto",onClick:()=>{var a;return C(`${(a=t.vendor)==null?void 0:a.vendor_name}`)},children:"Copy & Select"})]}):null},(p=t.vendor)==null?void 0:p.id)},className:"flex-1"}),"Availability No":e("input",{id:"availability_no",name:"availability_no",className:"form-input flex-1 ",defaultValue:t.availability_no,onChange:a=>n(a.target.name,a.target.value)}),"Availability Date":e(Ne,{name:"availability_date",options:{dateFormat:"Y-m-d ",defaultDate:t.availability_date?new Date(t.availability_date):null},defaultValue:t.availability_date,className:"form-input flex-1",placeholder:"YYYY-MM-DD",onChange:(a,c)=>n("availability_date",c)}),Availability:e(y,{defaultOptions:!0,isMulti:!1,id:"availability_id",name:"availability_id",placeholder:"Type at least 2 characters to search...",loadOptions:pe,onChange:({value:a})=>{n("availability_id",a)},defaultValue:{value:(u=t.availability)==null?void 0:u.id,label:e("div",{className:"flex items-center",children:t.availability?m(h,{children:[e("div",{className:"text-sm font-bold",children:(b=t.availability)==null?void 0:b.availability_name}),e("button",{className:"btn text-xs btn-sm ml-auto",onClick:()=>{var a;return C(`${(a=t.availability)==null?void 0:a.availability_name}`)},children:"Copy & Select"})]}):null},(v=t.availability)==null?void 0:v.id)},className:"flex-1"})},"":{Cost:e("input",{id:"cost",name:"cost",className:"form-input flex-1 ",defaultValue:t.cost,onChange:a=>n(a.target.name,a.target.value)}),"LT vendor":e("input",{id:"lt_vendor",name:"lt_vendor",className:"form-input flex-1 ",defaultValue:t.lt_vendor,onChange:a=>n(a.target.name,a.target.value)}),SPQ:e("input",{id:"spq",name:"spq",className:"form-input flex-1 ",defaultValue:t.spq,onChange:a=>n(a.target.name,a.target.value)}),"Quantity in Stock":e("input",{id:"quantity_in_stock",name:"quantity_in_stock",defaultValue:t.quantity_in_stock,className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)})}};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(F,{fields:s})})})},Fe=()=>{var d,g,p,u,b,v,a,c,i,_;const t=S(r=>r.quoteForm),o=q(),n=(r,x)=>{o(f({[r]:x}))},s={"Address Information":{"Billing Street":e("input",{id:"billing_street",name:"billing_street",onChange:r=>n(r.target.name,r.target.value),value:t.billing_street||((d=t.account)==null?void 0:d.billing_street)||"",className:"form-input flex-1"}),"Billing City":e("input",{id:"billing_city",name:"billing_city",value:t.billing_city||((g=t.account)==null?void 0:g.billing_city)||"",onChange:r=>n(r.target.name,r.target.value),className:"form-input flex-1"}),"Billing State":e("input",{id:"billing_state",name:"billing_state",value:t.billing_state||((p=t.account)==null?void 0:p.billing_state)||"",onChange:r=>n(r.target.name,r.target.value),className:"form-input flex-1"}),"Billing Code":e("input",{id:"billing_code",name:"billing_code",value:t.billing_code||((u=t.account)==null?void 0:u.billing_code)||"",onChange:r=>n(r.target.name,r.target.value),className:"form-input flex-1"}),"Billing Country":e("input",{id:"billing_country",name:"billing_country",value:t.billing_country||((b=t.account)==null?void 0:b.billing_country)||"",onChange:r=>n(r.target.name,r.target.value),className:"form-input flex-1"})},"":{"Shipping Street":e("input",{id:"shipping_street",name:"shipping_street",value:t.shipping_street||((v=t.account)==null?void 0:v.shipping_street)||"",onChange:r=>n(r.target.name,r.target.value),className:"form-input flex-1"}),"Shipping City":e("input",{id:"shipping_city",name:"shipping_city",value:t.shipping_city||((a=t.account)==null?void 0:a.shipping_city)||"",onChange:r=>n(r.target.name,r.target.value),className:"form-input flex-1"}),"Shipping State":e("input",{id:"shipping_state",name:"shipping_state",value:t.shipping_state||((c=t.account)==null?void 0:c.shipping_state)||"",onChange:r=>n(r.target.name,r.target.value),className:"form-input flex-1"}),"Shipping Code":e("input",{id:"shipping_code",name:"shipping_code",value:t.shipping_code||((i=t.account)==null?void 0:i.shipping_code)||"",onChange:r=>n(r.target.name,r.target.value),className:"form-input flex-1"}),"Shipping Country":e("input",{id:"shipping_country",name:"shipping_country",value:t.shipping_country||((_=t.account)==null?void 0:_.shipping_country)||"",onChange:r=>n(r.target.name,r.target.value),className:"form-input flex-1"})}};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(F,{fields:s})})})},Oe=()=>{const t=S(s=>s.quoteForm),o=q(),n=(s,d)=>{o(f({[s]:d}))};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:"lg:w-1/2 w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6",children:m("div",{className:"",children:[e("div",{className:"text-lg",children:"Terms and Conditions :"}),m("div",{className:"mt-4 flex items-center",children:[e("label",{className:"ltr:mr-2 rtl:ml-2 w-1/3 mb-0",children:"Terms and Conditions"}),e("textarea",{id:"terms_conditions",rows:3,name:"terms_conditions",className:"form-textarea flex-1",defaultValue:t.terms_conditions,placeholder:"",onChange:s=>n(s.target.name,s.target.value)})]},"terms_conditions")]},"Terms and Conditions")})})})},Qe=()=>{const t=S(s=>s.quoteForm),o=q(),n=(s,d)=>{o(f({[s]:d}))};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:"lg:w-1/2 w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6",children:m("div",{className:"",children:[e("div",{className:"text-lg",children:"Description Information :"}),m("div",{className:"mt-4 flex items-center",children:[e("label",{className:"ltr:mr-2 rtl:ml-2 w-1/3 mb-0",children:"Description"}),e("textarea",{id:"description",rows:3,name:"description",className:"form-textarea flex-1",placeholder:"",onChange:s=>n(s.target.name,s.target.value),defaultValue:t.description})]},"description")]},"Terms and Conditions")})})})},Te=()=>{const t=S(a=>a.quoteForm),o=q(),[n,s]=w.useState([]),[d,g]=w.useState({total:0,...t.summary}),p=(a,c,i)=>{const _=n.find(V=>V.id===i),r=n.findIndex(V=>V.id===i),x={..._,[a]:c},O=(parseFloat(x.quantity)||0)*(parseFloat(x.list_price)||0);x.amount=O;const k={...n,[r]:x};s(Object.values(k)),o(f({items:k}))};w.useEffect(()=>{s(Object.values(t.items))},[]);const u=()=>{let a;a=n!=null&&n.length?n.reduce((i,_)=>_.id>i?_.id:i,n[0].id):0;let c=[...n,{id:a+1,name:"",part_id:"",quantity:1,SPQ:"",list_price:"",lead_time:"",date_code:"",comment:"",amount:0}];s(c),o(f({items:c}))};w.useEffect(()=>{o(f({summary:d}))},[d]);const b=(a=null)=>{const c=n.filter(i=>i.id!=a.id);s(c),o(f({items:c}))},v=()=>{const a=n.reduce((c,i)=>c+(parseFloat(i.amount)||0),0);g({total:a})};return w.useEffect(()=>{v()},[n]),e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12",children:m("div",{className:"",children:[m("div",{className:"text-lg",children:["Quote Items ",e(xe,{})," :"]}),m("div",{className:"mt-8",children:[e("div",{className:"overflow-x-auto	w-11/12",children:m("table",{className:"table-auto",children:[e("thead",{children:m("tr",{children:[e("th",{className:"w-1",children:"Product Name"}),e("th",{className:"w-1",children:"Customer Part ID"}),e("th",{className:"w-1",children:"Quantity"}),e("th",{className:"w-1",children:"SPQ"}),e("th",{className:"w-1",children:"List Price"}),e("th",{className:"w-1",children:"Lead Time"}),e("th",{className:"w-1",children:"Date Code"}),e("th",{className:"w-1",children:"Comment"}),e("th",{className:"w-1",children:"Amount"})]})}),e("tbody",{children:n==null?void 0:n.map(a=>{var c;return m("tr",{className:"align-top",children:[m("td",{children:[e(y,{defaultOptions:!1,isMulti:!1,id:"product_id",name:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:ie,onChange:({value:i})=>{p("product_id",i,a.id)},className:"flex-1  min-w-[200px]",defaultValue:{value:a.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(c=a.product)==null?void 0:c.product_name})})},a.id)}}),",",e("textarea",{name:"description",className:"form-textarea mt-4",placeholder:"Enter Description",onChange:i=>p(i.target.name,i.target.value,a.id),defaultValue:a.description})]}),e("td",{children:e("input",{name:"customer_part_id",type:"text",className:"form-input min-w-[200px]",onChange:i=>p(i.target.name,i.target.value,a.id),defaultValue:a.customer_part_id})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",placeholder:"Quantity",name:"quantity",min:0,onChange:i=>p(i.target.name,i.target.value,a.id),defaultValue:a.quantity})}),e("td",{children:e("input",{name:"spq",type:"text",className:"form-input min-w-[200px]",onChange:i=>p(i.target.name,i.target.value,a.id),defaultValue:a.spq})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",placeholder:"Price",name:"list_price",min:0,defaultValue:a.list_price,onChange:i=>p(i.target.name,i.target.value,a.id)})}),e("td",{children:e("input",{name:"lead_time",type:"text",className:"form-input min-w-[200px]",defaultValue:a.lead_time,onChange:i=>p(i.target.name,i.target.value,a.id)})}),e("td",{children:e("input",{name:"date_code",type:"text",className:"form-input min-w-[200px]",defaultValue:a.date_code,onChange:i=>p(i.target.name,i.target.value,a.id)})}),e("td",{children:e("input",{name:"comment",type:"text",className:"form-input min-w-[200px]",defaultValue:a.comment,onChange:i=>p(i.target.name,i.target.value,a.id)})}),e("td",{children:e("input",{disabled:!0,name:"amount",type:"text",className:"form-input min-w-[200px] disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",value:a.amount,onChange:i=>p(i.target.name,i.target.value,a.id)})}),e("td",{children:e("button",{type:"button",onClick:()=>b(a),children:m("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},a.id)})})]})}),m("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:[e("div",{className:"sm:mb-0 mb-6",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>u(),children:"Add Item"})}),e("div",{className:"sm:w-2/5",children:m("div",{className:"flex items-center justify-between mt-4 font-semibold",children:[e("div",{className:"flex-1",children:"Total(€)"}),e("input",{id:"total",name:"total",type:"text",value:d.total,className:"w-64 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0})]})})]})]})]},"Quote Items")})})})},Ie=()=>{const o=se().id;return m("div",{className:"mt-8 px-4",children:[e(Se,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(qe,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Te,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Ve,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ke,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Fe,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Oe,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Qe,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Ce,{modelId:o,modelName:"quote"})]})},Ye=()=>{const{hasPermission:t}=he(),o=q(),n=S(c=>c.quoteForm),[s,d]=w.useState(!0),p=se().id,u=new ne,b=fe();w.useEffect(()=>{o(ge("Quotes Edit"))}),w.useEffect(()=>{o(X())},[]),w.useEffect(()=>{v().then(()=>{d(!1)})},[p]),w.useEffect(()=>{o(f({api:"updateSingleQuote",redirectTo:"/quotes/edit/:id",action:"edit"}))},[]);const v=async()=>{const c=await u.fetchSingleQuote(p);if(c.status!=200)return;const i=c.data.data.quote;o(f(i))},a=async()=>{try{const c=await u.convertQuoteToSalesOrder({id:n.id});if(c.status==200)be.fire({title:"Quote Converted Successfully.",html:`
                <span class="text-blue-500">Do you want to redirect to created SalesOrder ? </span>
                `,showCancelButton:!0,icon:"success",confirmButtonText:"Redirect",denyButtonText:"Close",customClass:{title:"text-blue-500"}}).then(i=>{i.isConfirmed&&b(`/sales/edit/${c.data.salesOrder.id}`,{replace:!0})});else if(c.status===422){const i=c.data.errors,_={titleMessage:"You have validation error on converting Sales Order",hasError:!0,...Object.fromEntries(Object.entries(i).map(([r,x])=>[r,x[0]]))};o(ve(_)),ee.fire({icon:"error",html:`<h5>Convert Validation Error</h5>
                        <span style="font-size: 12px">Please Check fields</span>
                        `,padding:"10px 20px"})}else ee.fire({icon:"error",title:"Internal Server Error ,Converting Sales Order failed failed",padding:"10px 20px"})}catch(c){_e("Failed to convert sales order"),console.error(c);return}};return s?e(Z,{}):!t("update-quote")||s?e(Z,{}):m("div",{className:"px-4",children:[e(we,{formState:n,resetForm:X}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:m("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:[e("button",{onClick:a,className:"mx-5 btn btn-secondary gap-2",children:"Convert Quote to Sales Order"}),e(Ie,{})]})})]})};export{Ye as default};
