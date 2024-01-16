import{u as y,a as C,d as w,r as f,j as t,l as d,m as J,b as n,f as L,p as c,n as K,F as v,x as W,y as X,z as Z,B as ee,E as ae,G as te,k as P,w as N,h as H,c as le,s as ne,H as R,e as Q}from"./main-38fe5343.js";import{G as Y}from"./GenerateFields-93e4149c.js";import{S as h}from"./react-select.esm-c9ae4ddb.js";import{F as se}from"./index-09ca2f26.js";import{k as b,D as G,h as U,i as B,j as z}from"./SelectOptions-c7baecc3.js";import{A as ie}from"./AttachmentSection-80fb3b61.js";import{A as oe}from"./ActionButtonsComponent-85ee23fd.js";/* empty css                  */import"./index-ee82f402.js";const de=()=>{var x,r,_,o,g,S,D,O,V,q,F,k,j,T,E,$,I,M,A;const m=y();new C;const a=w(e=>e.dealForm),l=(e,i)=>{m(N({[e]:i}))},[p,s]=f.useState(a.deal_pipeline=="Deal"?b:G),u={"Deals Information":{"Deals Owner":t(d,{defaultOptions:!0,isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:J,onChange:({value:e})=>{l("owner_id",e)},className:"flex-1",defaultValue:{value:(x=a.owner)==null?void 0:x.id,label:n("div",{className:"flex items-center",children:[a.owner?t("img",{src:L(a.owner.avatar_data),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,n("div",{children:[t("div",{className:"text-sm font-bold",children:((r=a.owner)==null?void 0:r.first_name)+" "+((_=a.owner)==null?void 0:_.last_name)}),t("div",{className:"text-xs text-gray-500",children:(o=a.owner)==null?void 0:o.email})]}),t("button",{className:"btn text-xs btn-sm ml-auto",onClick:()=>{var e,i;return c(`${((e=a.owner)==null?void 0:e.first_name)+" "+((i=a.owner)==null?void 0:i.last_name)}`)},children:"Copy & Select"})]},(g=a.owner)==null?void 0:g.id)}}),"Deals Name":t("input",{id:"deal_name",name:"deal_name",className:"form-input flex-1 ",onChange:e=>l(e.target.name,e.target.value),defaultValue:a.deal_name}),"Account Name":t(d,{defaultOptions:!0,isMulti:!1,id:"account_id",placeholder:"Type at least 2 characters to search...",name:"account_id",loadOptions:K,onChange:({value:e})=>{l("account_id",e)},className:"flex-1",defaultValue:{value:(S=a.account)==null?void 0:S.id,label:t("div",{className:"flex items-center",children:a.account?n(v,{children:[t("img",{src:L(a.account.image),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),n("div",{children:[t("div",{className:"text-sm font-bold",children:(D=a.account)==null?void 0:D.account_name}),t("div",{className:"text-xs text-gray-500",children:(O=a.account)==null?void 0:O.email})]}),t("button",{className:"btn text-xs btn-sm ml-auto",onClick:()=>{var e;return c(`${(e=a.account)==null?void 0:e.account_name}`)},children:"Copy & Select"})]}):null},(V=a.account)==null?void 0:V.id)}}),Type:t(h,{options:U,name:"deal_type",id:"deal_type",onChange:({value:e})=>{l("deal_type",e)},className:"flex-1",defaultValue:U.find(e=>e.value==a.deal_type)}),"Expected Revenue":t("input",{id:"expected_revenue",name:"expected_revenue",type:"text",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0,defaultValue:a.expected_revenue??1}),"Lead Source":t(h,{options:B,name:"lead_source",id:"lead_source",onChange:({value:e})=>{l("lead_source",e)},className:"flex-1",defaultValue:B.find(e=>e.value==a.lead_source)}),"Contact Name":t(d,{defaultOptions:!0,isMulti:!1,id:"contact_id",placeholder:"Type at least 2 characters to search...",name:"contact_id",loadOptions:W,onChange:({value:e})=>{l("contact_id",e)},className:"flex-1",defaultValue:{value:(q=a.contact)==null?void 0:q.id,label:t("div",{className:"flex items-center",children:a.contact?n(v,{children:[t("img",{src:a.contact.image??"/assets/images/user-profile.jpeg",alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),n("div",{children:[t("div",{className:"text-sm font-bold",children:((F=a.contact)==null?void 0:F.first_name)+" "+((k=a.contact)==null?void 0:k.last_name)}),t("div",{className:"text-xs text-gray-500",children:(j=a.contact)==null?void 0:j.email})]}),t("button",{className:"btn text-xs btn-sm ml-auto",onClick:()=>{var e,i;return c(`${((e=a.contact)==null?void 0:e.first_name)+" "+((i=a.contact)==null?void 0:i.last_name)}`)},children:"Copy & Select"})]}):null},(T=a.contact)==null?void 0:T.id)}}),Lead:t(d,{defaultOptions:!0,isMulti:!1,id:"lead_id",placeholder:"Type at least 2 characters to search...",name:"lead_id",loadOptions:X,onChange:({value:e})=>{l("lead_id",e)},className:"flex-1",defaultValue:{value:a.lead_id,label:t("div",{className:"flex items-center",children:n("div",{children:[t("div",{className:"text-sm font-bold",children:(E=a.lead)==null?void 0:E.company}),a.lead?t("button",{className:"btn text-xs btn-sm ml-auto",onClick:()=>{var e;return c(`${(e=a.lead)==null?void 0:e.company}`)},children:"Copy & Select"}):null]})},a.lead_id)}}),RFQ:t(d,{defaultOptions:!0,isMulti:!1,id:"rfq_id",placeholder:"Type at least 2 characters to search...",name:"rfq_id",loadOptions:Z,onChange:({value:e})=>{l("rfq_id",e)},className:"flex-1",defaultValue:{value:a.rfq_id,label:t("div",{className:"flex items-center",children:n("div",{children:[t("div",{className:"text-sm font-bold",children:($=a.rfq)==null?void 0:$.rfq_name}),a.rfq?t("button",{className:"btn text-xs btn-sm ml-auto",onClick:()=>{var e;return c(`${(e=a.rfq)==null?void 0:e.rfq_name}`)},children:"Copy & Select"}):null]})},a.rfq_id)}}),Quote:t(d,{defaultOptions:!0,isMulti:!1,id:"quote_id",placeholder:"Type at least 2 characters to search...",name:"quote_id",loadOptions:ee,onChange:({value:e})=>{l("quote_id",e)},className:"flex-1",defaultValue:{value:a.quote_id,label:t("div",{className:"flex items-center",children:n("div",{children:[t("div",{className:"text-sm font-bold",children:(I=a.quote)==null?void 0:I.subject}),a.quote?t("button",{className:"btn text-xs btn-sm ml-auto",onClick:()=>{var e;return c(`${(e=a.quote)==null?void 0:e.subject}`)},children:"Copy & Select"}):null]})},a.quote_id)}}),"Sales Order":t(d,{defaultOptions:!0,isMulti:!1,id:"sales_order_id",placeholder:"Type at least 2 characters to search...",name:"sales_order_id",loadOptions:ae,onChange:({value:e})=>{l("sales_order_id",e)},className:"flex-1",defaultValue:{value:a.sales_order_id,label:t("div",{className:"flex items-center",children:n("div",{children:[t("div",{className:"text-sm font-bold",children:(M=a.sales_order)==null?void 0:M.subject}),a.sales_order?t("button",{className:"btn text-xs btn-sm ml-auto",onClick:()=>{var e;return c(`${(e=a.sales_order)==null?void 0:e.subject}`)},children:"Copy & Select"}):null]})},a.sales_order_id)}}),Invoice:t(d,{defaultOptions:!0,isMulti:!1,id:"invoice_id",placeholder:"Type at least 2 characters to search...",name:"invoice_id",loadOptions:te,onChange:({value:e})=>{l("invoice_id",e)},className:"flex-1",defaultValue:{value:a.invoice_id,label:t("div",{className:"flex items-center",children:n("div",{children:[t("div",{className:"text-sm font-bold",children:(A=a.invoice)==null?void 0:A.subject}),a.invoice?t("button",{className:"btn text-xs btn-sm ml-auto",onClick:()=>{var e;return c(`${(e=a.invoice)==null?void 0:e.subject}`)},children:"Copy & Select"}):null]})},a.invoice_id)}}),Currency:t(h,{options:P,name:"currency",id:"currency",onChange:({value:e})=>{l("currency",e)},className:"flex-1",defaultValue:P.find(e=>e.value==a.currency)})},"":{Amount:t("input",{id:"amount",type:"number",name:"amount",className:"form-input flex-1 ",onChange:e=>l(e.target.name,e.target.value),defaultValue:a.amount}),"Closing Date":t(se,{options:{dateFormat:"Y-m-d ",position:"auto left",defaultDate:a.closing_date?new Date(a.closing_date):null},name:"closing_date",value:a.closing_date?new Date(a.closing_date):"",className:"form-input flex-1",onChange:(e,i)=>l("closing_date",i)}),Pipeline:t(h,{options:z,name:"deal_pipeline",id:"deal_pipeline",onChange:({value:e})=>{l("deal_pipeline",e),s(e=="Deal"?b:G)},className:"flex-1",defaultValue:z.find(e=>e.value==a.deal_pipeline)}),Stage:t(h,{options:p,name:"deal_stage",id:"deal_stage",onChange:({value:e})=>{l("deal_stage",e)},className:"flex-1",defaultValue:a.deal_pipeline=="Deal"?b.find(e=>e.value==a.deal_stage):b.find(e=>e.value==a.deal_stage)}),"Probability (%)":t("input",{id:"probability",name:"probability",className:"form-input flex-1 ",onChange:e=>l(e.target.name,e.target.value),defaultValue:a.probability}),"Next Step":t("input",{id:"next_step",name:"next_step",className:"form-input flex-1 ",onChange:e=>l(e.target.name,e.target.value),defaultValue:a.next_step}),"Exchange Rate":t("input",{id:"exchange_rate",name:"exchange_rate",type:"text",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0,defaultValue:a.exchange_rate??1}),"Lead Reference":t("input",{id:"lead_reference",name:"lead_reference",className:"form-input flex-1 ",onChange:e=>l(e.target.name,e.target.value),defaultValue:a.lead_reference})}};return t(v,{children:t("div",{className:"flex justify-between lg:flex-row flex-col",children:t(Y,{fields:u})})})},ce=()=>{const m=w(s=>s.dealForm),a=y();new C;const l=(s,u)=>{a(N({[s]:u}))},p={"Description Information":{Description:t("textarea",{id:"description",rows:3,name:"description",className:"form-textarea flex-1",placeholder:"",onChange:s=>l(s.target.name,s.target.value),defaultValue:m.description})},"":{}};return t(v,{children:t("div",{className:"flex justify-between lg:flex-row flex-col",children:t(Y,{fields:p})})})},re=()=>{const a=H().id;return n("div",{className:"mt-8 px-4",children:[t(de,{},"lealInfo"),t("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),t(ce,{},"description"),t("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),t(ie,{modelId:a,modelName:"deal"})]})},ve=()=>{const{hasPermission:m}=le(),a=w(o=>o.dealForm),[l,p]=f.useState(!0),u=H().id,x=new C,r=y();f.useEffect(()=>{r(ne("Deal Edit"))}),f.useEffect(()=>{r(R())},[]);const _=async()=>{const o=await x.fetchSingleDeal(u);if(o.status!=200)return;const g=o.data.data.deal;r(N(g))};return f.useEffect(()=>{_().then(()=>{p(!1)})},[u]),f.useEffect(()=>{r(N({api:"updateSingleDeal",redirectTo:"/deal/edit/:id",action:"edit"}))},[]),l?t(Q,{}):!m("update-deal")||l?t(Q,{}):n("div",{className:"px-4",children:[t(oe,{formState:a,resetForm:R}),t("div",{className:"flex xl:flex-row flex-col gap-2.5",children:t("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:t(re,{})})})]})};export{ve as default};
