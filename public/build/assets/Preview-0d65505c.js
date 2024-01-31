import{c as O,u as A,r as s,h as M,d as T,s as G,j as a,e as x,b as i,f as R,i as L,E as B,a as F}from"./main-cc930730.js";import{I as q}from"./InfoListComponent-add63f72.js";import{A as Q}from"./ActionButtonsPreview-2c86593e.js";import{I as j}from"./InformationSectionPreview-f7158369.js";import{M as U}from"./MultipleLineSectionPreview-c72ec239.js";import{A as z}from"./AttachmentSection-9e25cbd6.js";import{G as H}from"./GenerateEmailLogList-c6ada5f2.js";import{G as J}from"./GenerateCallList-7652583e.js";import"./CommonIcons-0c4cb687.js";import"./sortBy-e6be9ca1.js";import"./_baseIsEqual-4a6c96d9.js";const ie=()=>{var m,d,c,b,u,f,p,h,v,g,_,w,D,y,N,$;const{hasPermission:o}=O(),n=A(),[r,S]=s.useState(!0),t=M().id,C=new F,e=T(l=>l.dealForm);s.useEffect(()=>{n(G("Deal Preview"))});const P=()=>{window.print()},I=async()=>{const l=await C.fetchSingleDeal(t);if(l.status!=200)return;const k=l.data.data.deal;n(B(k))},E=[{label:"Deal Number",value:e.deal_number},{label:"Deal Name",value:e.deal_name},{label:"Account Owner",value:`${((m=e.account)==null?void 0:m.first_name)??""} ${((d=e.account)==null?void 0:d.last_name)??""}`},{label:"Deal Owner",value:`${((c=e.owner)==null?void 0:c.first_name)??""} ${((b=e.owner)==null?void 0:b.last_name)??""}`},{label:"Created By",value:`${((u=e.creator)==null?void 0:u.first_name)??""} ${((f=e.creator)==null?void 0:f.last_name)??""}`},{label:"Modified By",value:`${((p=e.modifier)==null?void 0:p.first_name)??""} ${((h=e.modifier)==null?void 0:h.last_name)??""}`}];return s.useEffect(()=>{I().then(()=>{S(!1)})},[t]),r?a(x,{}):!o("read-deal")||r?a(x,{}):i("div",{children:[a("div",{className:"flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6",children:a(Q,{loading:r,hasPermission:o,modelId:t,exportTable:P,routeModel:"deal",permissionModel:"deal"})}),i("div",{className:"panel",children:[i("div",{className:"flex justify-between flex-wrap gap-4 px-4",children:[a("div",{className:"text-2xl font-semibold uppercase",children:"Deal"}),a("div",{className:"shrink-0",children:a("img",{src:R(e.image_data),alt:"Deal image",className:"w-20 ltr:ml-auto rtl:mr-auto"})})]}),a(q,{data:E}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(j,{title:"Deals Information",leftObjects:[{label:"Type",value:e.deal_type},{label:"Currency",value:e.lead_reference},{label:"Contact Name",value:`${((v=e.contact)==null?void 0:v.first_name)??""} ${((g=e.contact)==null?void 0:g.last_name)??""}`},{label:"Lead",value:`${((_=e.lead)==null?void 0:_.first_name)??""} ${((w=e.lead)==null?void 0:w.last_name)??""}`},{label:"Invoice",value:`${((D=e.invoice)==null?void 0:D.subject)??""}`},{label:"RFQ",value:`${((y=e.invoice)==null?void 0:y.rfq_name)??""}`},{label:"Quote",value:`${((N=e.quote)==null?void 0:N.subject)??""}`},{label:"Sales Order",value:`${(($=e.invoice)==null?void 0:$.sales_order)??""}`}],rightObjects:[{label:"Amount",value:e.amount},{label:"Closing Date",value:e.closing_date},{label:"PipLine",value:e.deal_pipeline},{label:"Stage",value:e.deal_stage},{label:"Probability",value:e.probability},{label:"Next Step",value:e.next_step},{label:"Lead Reference ",value:e.lead_reference},{label:"Exchange Rate",value:e.exchange_rate}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(U,{sectionTitle:"Description Information",data:[{label:"Description",value:e.description}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(j,{title:"Date information",leftObjects:[{label:"Created Date",value:L(e.created_at)}],rightObjects:[{label:"Modified Date",value:L(e.updated_at)}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(z,{modelId:t,modelName:"deal"}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(J,{permissionName:"read-deal",type:"call",routeName:"fetchDealCall",modelId:t,title:"Call Logs"}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(H,{permissionName:"read-deal",type:"email-log",routeName:"fetchDealEmailLogs",modelId:t,title:"Email Logs"})]})]})};export{ie as default};
