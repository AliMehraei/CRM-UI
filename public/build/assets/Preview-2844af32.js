import{c as M,u as B,r as o,h as E,d as V,s as U,j as a,e as P,b as i,f as H,aQ as z,a as G}from"./main-957414d0.js";import{A as J,I as r}from"./InformationSectionPreview-472d0ad5.js";import{M as C}from"./MultipleLineSectionPreview-36ab8c12.js";import{A as K}from"./AttachmentDownloadButton-860f7043.js";import{A as W}from"./AttachmentSection-c971bb21.js";import"./CommonIcons-7f073eb8.js";const re=()=>{var b,f,v,_,p,h,g,$,j,y,O,q,w,F,N,R,Q,S,x;const{hasPermission:n}=M(),c=B(),[s,D]=o.useState(!0),l=E().id,A=new G,e=V(t=>t.rfqFormSlice);o.useEffect(()=>{c(U("RFQ Preview"))});const T=()=>{window.print()},I=async()=>{const t=await A.fetchSingleRfq(l);if(t.status!=200)return;const k=t.data.data.rfq;c(z(k))};o.useEffect(()=>{I().then(()=>{D(!1)})},[l]);const m={leftObjects:[{label:"Account Name",value:`${(b=e.account)==null?void 0:b.account_name}`},{label:"Contact Name",value:`${e.contact?((f=e.contact)==null?void 0:f.first_name)+" "+((v=e.contact)==null?void 0:v.last_name):""}`},{label:"Customer RFQ No",value:(_=e.qoute)==null?void 0:_.customer_rfq_no},{label:"Project Name / Application",value:`${e.project_name}`},{label:" RFQ Source",value:`${e.rfq_source}`},{label:"RFQ Type",value:`${e.rfq_type}`},{label:"RFQ Date",value:`${e.rfq_}`},{label:"Status",value:`${e.status}`},{label:"RFQ Date",value:`${e.created_at}`},{label:"Date History",value:`${e.date_history}`},{label:"Exchange Rate",value:`${e.exchange_rate}`},{label:"Portal BOM id",value:`${e.portal_bom_id}`}],rightObjects:[{label:"RFQ Name",value:`${e.rfq_name}`},{label:"Owner Name",value:`${(p=e.owner)==null?void 0:p.first_name} ${(h=e.owner)==null?void 0:h.last_name}`},{label:"Deal Stage",value:`${e.deal_stage}`},{label:"Lost Reason",value:`${(g=e.lead)==null?void 0:g.lost_reason}`},{label:"Lost Reason Comment",value:`${($=e.lead)==null?void 0:$.lost_reason}`},{label:"PM User",value:`${(j=e.pmUser)==null?void 0:j.first_name} ${(y=e.pmUser)==null?void 0:y.last_name}`},{label:"Customer RFQ File",value:a(K,{formAttribute:"customer_rfq_file",modelName:"rfq",formState:e})},{label:"Created By",value:`${(O=e.creator)==null?void 0:O.first_name} ${(q=e.creator)==null?void 0:q.last_name}`},{label:"Modified By",value:`${(w=e.modifier)==null?void 0:w.first_name} ${(F=e.modifier)==null?void 0:F.last_name}`},{label:"RFQ Dead Line",value:`${e.rfq_dead_line}`},{label:"Currency ",value:`${e.currency}`},{label:"Vendor_RFQs_Line",value:`${(N=e.vendor_rfqs_line)==null?void 0:N.map(t=>t.vendor_name)}`}]},d={leftObjects:[{label:"Product Name",value:`${(R=e.product)==null?void 0:R.name}`},{label:"Customer Part Id",value:e.customer_part_id},{label:"Quantity",value:e.quantity},{label:"Target Price",value:e.target_price},{label:"Total",value:parseFloat(e.quantity)*parseFloat(e.target_price)}],rightObjects:[{label:"Alternative Products",value:`${(Q=e.rfq_product_alternatives)==null?void 0:Q.map(t=>t.product_name)}`}]},u={leftObjects:[{label:"Availability",value:`${(S=e.availability)==null?void 0:S.availability_name}`}],rightObjects:[{label:"Excess",value:`${(x=e.excess)==null?void 0:x.excess_name}`}]},L={leftObjects:[{label:"Processed for VRFQ round 1",value:`${e.processed_for_vrfq_round_1}`},{label:"Processed for VRFQ round 2",value:`${e.processed_for_vrfq_round_2}`},{label:"Open Status Time",value:`${e.open_status_date} ${e.open_status_time}`}]};return s?a(P,{}):!n("read-rfq")||s?a(P,{}):i("div",{children:[a("div",{className:"flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6",children:a(J,{loading:s,hasPermission:n,modelId:l,exportTable:T,routeModel:"rfq",permissionModel:"rfq"})}),i("div",{className:"panel",children:[i("div",{className:"flex justify-between flex-wrap gap-4 px-4",children:[a("div",{className:"text-2xl font-semibold uppercase",children:"RFQ"}),a("div",{className:"shrink-0",children:a("img",{src:H(e.image_data),alt:"RFQ image",className:"w-20 ltr:ml-auto rtl:mr-auto"})})]}),a(r,{title:"Header",leftObjects:m.leftObjects,rightObjects:m.rightObjects}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(r,{title:"RFQ Line",leftObjects:d.leftObjects,rightObjects:d.rightObjects}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(C,{sectionTitle:"Special Instructions",data:[{label:"Special Instructions",value:e.special_instructions}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(C,{sectionTitle:"Comment For Vendors ",data:[{label:"Comment For Vendors",value:e.comment}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(r,{title:"Convert TO Quote",leftObjects:u.leftObjects,rightObjects:u.rightObjects}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(r,{title:"Development",leftObjects:L.leftObjects,rightObjects:null}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(W,{modelId:l,modelName:"rfq"})]})]})};export{re as default};
