import{c as W,u as X,r as s,h as ee,d as ae,s as le,Y as R,j as a,e as G,b as o,f as te,i as F,Z as re,_ as ie,a as se}from"./main-df5dc7ed.js";import{I as oe}from"./InfoListComponent-0cf3cf84.js";import{A as ne}from"./ActionButtonsPreview-b8a965fd.js";import{I as t}from"./InformationSectionPreview-f66ace2c.js";import{M as Q}from"./MultipleLineSectionPreview-31bef909.js";import{T as be}from"./TableSectionPreview-195cdfc1.js";import{A as de}from"./AttachmentSection-2b18bb8f.js";import{G as ce}from"./GenerateEmailLogList-056f10ce.js";import{G as me}from"./GenerateCallList-8e7ca3b6.js";import"./CommonIcons-4af903f4.js";import"./sortBy-4d9efad5.js";import"./_baseIsEqual-9290e441.js";const we=()=>{var p,h,g,f,y,_,O,$,S,j,N,w,C,k,D,P,L,A,I,x,T,B,E,M,q;const{hasPermission:n}=W(),b=X(),[i,H]=s.useState(!0),l=ee().id,Z=new se,e=ae(r=>r.salesOrderForm);s.useEffect(()=>{b(le("Sales Preview"))});const z=()=>{window.print()},U=async()=>{const r=await Z.fetchSingleSalesOrder(l);if(r.status!=200)return;const K=r.data.data.salesOrder;b(re(K))};s.useEffect(()=>{U().then(()=>{H(!1)})},[l]);const V=[{value:"none",label:"-None-"},{value:"single_order",label:"Single Order"},{value:"frame_contract",label:"Frame Contract"},{value:"call_off",label:"Call Off"},{value:"forecast",label:"Forecast"}],d={leftObjects:[{label:"Account Name",value:`${(p=e.account)==null?void 0:p.account_name}`},{label:"Contact Name",value:`${e.contact?((h=e.contact)==null?void 0:h.first_name)+" "+((g=e.contact)==null?void 0:g.last_name):""}`},{label:"Quote Name",value:(f=e.qoute)==null?void 0:f.subject},{label:"Currency",value:`${e.currency}`}],rightObjects:[{label:"SO Number",value:`${e.so_number}`},{label:"Deals Name",value:`${(y=e.deal)==null?void 0:y.deal_name}`},{label:"Deal Stage",value:`${(_=e.deal)==null?void 0:_.deal_stage}`},{label:"Lost Reason",value:`${(O=e.lead)==null?void 0:O.lost_reason}`},{label:"Lost Reason Comment",value:`${($=e.lead)==null?void 0:$.lost_reason}`},{label:"SO Date",value:`${e.so_date}`},{label:"Exchange Rate ",value:`${e.exchange_rate}`}]},c={leftObjects:[{label:"Purchase Order",value:`${e.purchase_order}`},{label:"Customer PO date",value:`${e.customer_po_date}`},{label:"PO upload",value:`${e.po_upload} `},{label:"SO Type",value:R(e.so_type,V)},{label:"Parent SO Nr",value:e.parent_so_nr}],rightObjects:[{label:"Subject",value:`${e.subject}`},{label:"Pending",value:`${e.pending}`},{label:"Status",value:`${R(e.status,ie)}`},{label:"ZohoBooksId",value:`${e.zoho_books_id}`}]},m={leftObjects:[{label:"Sales Total",value:`${e.sales_total}`},{label:"GP Total",value:`${e.gp_total}`},{label:"Margin",value:`${e.margin}`}],rightObjects:[{label:"Resale Price",value:`${e.resale_price}`},{label:"Cost Vendor",value:`${e.cost_vendor}`}]},u={leftObjects:[{label:"Availability Name",value:`${(S=e.availability)==null?void 0:S.availability_name}`},{label:"Availability No",value:`${(j=e.availability)==null?void 0:j.availability_no}`},{label:"Availability Cost",value:`${(N=e.availability)==null?void 0:N.cost}`}],rightObjects:[{label:"Availability Quantity",value:((w=e.availability)==null?void 0:w.quantity)!==null?`${(C=e.availability)==null?void 0:C.quantity}`:null},{label:"Availability LT",value:`${(k=e.availability)==null?void 0:k.lead_time}`},{label:"Availability DC",value:`${(D=e.availability)==null?void 0:D.date_code}`}]},v={leftObjects:[{label:"Billing Street",value:`${e.billing_street}`},{label:"Billing City",value:`${e.billing_city}`},{label:"Billing State",value:`${e.billing_state}`},{label:"Billing Code",value:`${e.billing_code}`},{label:"Billing Country",value:`${e.billing_country}`}],rightObjects:[{label:"Shipping Street",value:`${e.shipping_street}`},{label:"Shipping City",value:`${e.shipping_city}`},{label:"Shipping State",value:`${e.shipping_state}`},{label:"Shipping Code",value:`${e.shipping_code}`},{label:"Shipping Country",value:`${e.shipping_country}`}]},Y=[{key:"product_name",label:"Product Name",model:"product"},{key:"quantity",label:"Quantity"},{key:"customer_part_id",label:"Customer Part ID"},{key:"list_price",label:"List Price"},{key:"date_code",label:"Date Code"},{key:"amount",label:"Amount"},{key:"requested_delivery_date",label:"Requested Delivery Date"},{key:"estimated_delivery_date",label:"Estimated Delivery Date"}],J=[{label:"Sales Order Owner",value:`${((P=e.owner)==null?void 0:P.first_name)??""} ${((L=e.owner)==null?void 0:L.last_name)??""}`},{label:"Sales Person",value:`${((A=e.sales_person)==null?void 0:A.first_name)??""} ${((I=e.sales_person)==null?void 0:I.last_name)??""}`},{label:"Approved By",value:`${((x=e.approved_by)==null?void 0:x.first_name)??""} ${((T=e.approved_by)==null?void 0:T.last_name)??""}`},{label:"Created By",value:`${((B=e.creator)==null?void 0:B.first_name)??""} ${((E=e.creator)==null?void 0:E.last_name)??""}`},{label:"Modified By",value:`${((M=e.modifier)==null?void 0:M.first_name)??""} ${((q=e.modifier)==null?void 0:q.last_name)??""}`}];return i?a(G,{}):!n("read-sales-order")||i?a(G,{}):o("div",{children:[a("div",{className:"flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6",children:a(ne,{loading:i,hasPermission:n,modelId:l,exportTable:z,routeModel:"sales",permissionModel:"sales-order",hasDownloadPdf:!0})}),o("div",{className:"panel",children:[o("div",{className:"flex justify-between flex-wrap gap-4 px-4",children:[a("div",{className:"text-2xl font-semibold uppercase",children:"Sales Order"}),a("div",{className:"shrink-0",children:a("img",{src:te(e.image_data),alt:"Sales Order image",className:"w-20 ltr:ml-auto rtl:mr-auto"})})]}),a(oe,{data:J}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(t,{title:"Header",leftObjects:d.leftObjects,rightObjects:d.rightObjects}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(t,{title:"Sales Order Information",leftObjects:c.leftObjects,rightObjects:c.rightObjects}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(be,{title:"Ordered Items",items:e.items,columns:Y,total:e.sales_total}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(t,{title:"SO Line",leftObjects:m.leftObjects,rightObjects:m.rightObjects}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(t,{title:"Linked Availability",leftObjects:u.leftObjects,rightObjects:u.rightObjects}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(t,{title:"Address Information",leftObjects:v.leftObjects,rightObjects:v.rightObjects}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(Q,{sectionTitle:"Terms And Conditions",data:[{label:"Terms and Conditions",value:e.terms_and_conditions}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(Q,{sectionTitle:"Description ",data:[{label:"Description",value:e.description}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(t,{title:"Date information",leftObjects:[{label:"Created Date",value:F(e.created_at)}],rightObjects:[{label:"Modified Date",value:F(e.updated_at)}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(de,{modelId:l,modelName:"salesOrder"}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(me,{permissionName:"read-sales-order",type:"call",routeName:"fetchSalesOrderCall",modelId:l,title:"Call Logs"}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(ce,{permissionName:"read-sales-order",type:"email-log",routeName:"fetchSalesOrderEmailLogs",modelId:l,title:"Email Logs"})]})]})};export{we as default};