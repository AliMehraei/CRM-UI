import{c as B,u as E,r as o,h as V,d as U,s as H,j as a,e as P,b as i,f as z,i as D,aR as G,a as J}from"./main-763a01a7.js";import{A as K,I as l}from"./InformationSectionPreview-139737e5.js";import{M as C}from"./MultipleLineSectionPreview-1d7090f6.js";import{A as W}from"./AttachmentDownloadButton-c04d7269.js";import{A as X}from"./AttachmentSection-7a4759e3.js";import"./CommonIcons-0598faa2.js";const se=()=>{var b,f,v,_,p,h,g,$,j,O,y,q,w,R,F,N,Q,S,x;const{hasPermission:n}=B(),c=E(),[s,A]=o.useState(!0),r=V().id,T=new J,e=U(t=>t.rfqFormSlice);o.useEffect(()=>{c(H("RFQ Preview"))});const I=()=>{window.print()},L=async()=>{const t=await T.fetchSingleRfq(r);if(t.status!=200)return;const M=t.data.data.rfq;c(G(M))};o.useEffect(()=>{L().then(()=>{A(!1)})},[r]);const m={leftObjects:[{label:"Account Name",value:`${(b=e.account)==null?void 0:b.account_name}`},{label:"Contact Name",value:`${e.contact?((f=e.contact)==null?void 0:f.first_name)+" "+((v=e.contact)==null?void 0:v.last_name):""}`},{label:"Customer RFQ No",value:(_=e.qoute)==null?void 0:_.customer_rfq_no},{label:"Project Name / Application",value:`${e.project_name}`},{label:" RFQ Source",value:`${e.rfq_source}`},{label:"RFQ Type",value:`${e.rfq_type}`},{label:"RFQ Date",value:`${e.rfq_}`},{label:"Status",value:`${e.status}`},{label:"RFQ Date",value:`${e.created_at}`},{label:"Date History",value:`${e.date_history}`},{label:"Exchange Rate",value:`${e.exchange_rate}`},{label:"Portal BOM id",value:`${e.portal_bom_id}`}],rightObjects:[{label:"RFQ Name",value:`${e.rfq_name}`},{label:"Owner Name",value:`${(p=e.owner)==null?void 0:p.first_name} ${(h=e.owner)==null?void 0:h.last_name}`},{label:"Deal Stage",value:`${e.deal_stage}`},{label:"Lost Reason",value:`${(g=e.lead)==null?void 0:g.lost_reason}`},{label:"Lost Reason Comment",value:`${($=e.lead)==null?void 0:$.lost_reason}`},{label:"PM User",value:`${(j=e.pmUser)==null?void 0:j.first_name} ${(O=e.pmUser)==null?void 0:O.last_name}`},{label:"Customer RFQ File",value:a(W,{formAttribute:"customer_rfq_file",modelName:"rfq",formState:e})},{label:"Created By",value:`${(y=e.creator)==null?void 0:y.first_name} ${(q=e.creator)==null?void 0:q.last_name}`},{label:"Modified By",value:`${(w=e.modifier)==null?void 0:w.first_name} ${(R=e.modifier)==null?void 0:R.last_name}`},{label:"RFQ Dead Line",value:`${e.rfq_dead_line}`},{label:"Currency ",value:`${e.currency}`},{label:"Vendor_RFQs_Line",value:`${(F=e.vendor_rfqs_line)==null?void 0:F.map(t=>t.vendor_name)}`}]},d={leftObjects:[{label:"Product Name",value:`${(N=e.product)==null?void 0:N.name}`},{label:"Customer Part Id",value:e.customer_part_id},{label:"Quantity",value:e.quantity},{label:"Target Price",value:e.target_price},{label:"Total",value:parseFloat(e.quantity)*parseFloat(e.target_price)}],rightObjects:[{label:"Alternative Products",value:`${(Q=e.rfq_product_alternatives)==null?void 0:Q.map(t=>t.product_name)}`}]},u={leftObjects:[{label:"Availability",value:`${(S=e.availability)==null?void 0:S.availability_name}`}],rightObjects:[{label:"Excess",value:`${(x=e.excess)==null?void 0:x.excess_name}`}]},k={leftObjects:[{label:"Processed for VRFQ round 1",value:`${e.processed_for_vrfq_round_1}`},{label:"Processed for VRFQ round 2",value:`${e.processed_for_vrfq_round_2}`},{label:"Open Status Time",value:`${e.open_status_date} ${e.open_status_time}`}]};return s?a(P,{}):!n("read-rfq")||s?a(P,{}):i("div",{children:[a("div",{className:"flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6",children:a(K,{loading:s,hasPermission:n,modelId:r,exportTable:I,routeModel:"rfq",permissionModel:"rfq"})}),i("div",{className:"panel",children:[i("div",{className:"flex justify-between flex-wrap gap-4 px-4",children:[a("div",{className:"text-2xl font-semibold uppercase",children:"RFQ"}),a("div",{className:"shrink-0",children:a("img",{src:z(e.image_data),alt:"RFQ image",className:"w-20 ltr:ml-auto rtl:mr-auto"})})]}),a(l,{title:"Header",leftObjects:m.leftObjects,rightObjects:m.rightObjects}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"RFQ Line",leftObjects:d.leftObjects,rightObjects:d.rightObjects}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(C,{sectionTitle:"Special Instructions",data:[{label:"Special Instructions",value:e.special_instructions}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(C,{sectionTitle:"Comment For Vendors ",data:[{label:"Comment For Vendors",value:e.comment}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"Convert TO Quote",leftObjects:u.leftObjects,rightObjects:u.rightObjects}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"Development",leftObjects:k.leftObjects,rightObjects:null}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"Date information",leftObjects:[{label:"Created Date",value:D(e.created_at)}],rightObjects:[{label:"Modified Date",value:D(e.updated_at)}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(X,{modelId:r,modelName:"rfq"})]})]})};export{se as default};