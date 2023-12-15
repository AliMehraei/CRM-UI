import{c as x,u as C,r as o,h as S,d as I,s as P,j as a,e as h,b as s,f as O,aA as D,a as T}from"./main-d68524cb.js";import{I as $}from"./InfoListComponent-3883e93a.js";import{A as B,I as i}from"./InformationSectionPreview-8c8ad7b0.js";import{T as L}from"./TableSectionPreview-fa00fb60.js";import{A as Q}from"./AttachmentSection-0b5e3527.js";import{A as E}from"./AttachmentDownloadButton-d93a3bb8.js";import"./CommonIcons-b4f98920.js";const z=()=>{var c,m,d,u,v,y,f,_;const{hasPermission:n}=x(),b=C(),[r,p]=o.useState(!0),t=S().id,g=new T,e=I(l=>l.availabilityForm);o.useEffect(()=>{b(P("Availability Preview"))});const w=()=>{window.print()},k=async()=>{const l=await g.fetchSingleAvailability(t);if(l.status!=200)return;const j=l.data.data.availability;b(D(j))},A=[{label:"Vendor Name",value:((c=e.vendor)==null?void 0:c.vendor_name)??""},{label:"Vendor Quote No",value:e.vendor_quote_no},{label:"Vendor Source",value:e.availability_source},{label:"Availability Owner",value:`${((m=e.owner)==null?void 0:m.first_name)??""} ${((d=e.owner)==null?void 0:d.last_name)??""}`},{label:"Created By",value:`${((u=e.creator)==null?void 0:u.first_name)??""} ${((v=e.creator)==null?void 0:v.last_name)??""}`},{label:"Modified By",value:`${((y=e.modifier)==null?void 0:y.first_name)??""} ${((f=e.modifier)==null?void 0:f.last_name)??""}`}],N=[{key:"cost_3000",label:"Cost_3000"},{key:"cost_1000",label:"Cost_1000"},{key:"cost_500",label:"cost_500"},{key:"cost_250",label:"Cost_250"},{key:"cost_25",label:"Cost_25"},{key:"cost_10",label:"Cost_10"},{key:"cost_1",label:"Cost_1"}];return o.useEffect(()=>{k().then(()=>{p(!1)})},[t]),r?a(h,{}):!n("read-availability")||r?a(h,{}):s("div",{children:[a("div",{className:"flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6",children:a(B,{loading:r,hasPermission:n,modelId:t,exportTable:w,routeModel:"availability",permissionModel:"availability"})}),s("div",{className:"panel",children:[s("div",{className:"flex justify-between flex-wrap gap-4 px-4",children:[a("div",{className:"text-2xl font-semibold uppercase",children:"Availability"}),a("div",{className:"shrink-0",children:a("img",{src:O(e.image_data),alt:"vendor image",className:"w-20 ltr:ml-auto rtl:mr-auto"})})]}),a($,{data:A}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(i,{title:"Availability Information",leftObjects:[{label:"Availability Name",value:e.availability_name}],rightObjects:[{label:"Availability File",value:a(E,{formAttribute:"availability_file",modelName:"availability",formState:e})}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(i,{title:"Status Information",leftObjects:[{label:"Availability Type",value:e.availability_type},{label:"Valid",value:e.valid}],rightObjects:[{label:"Availability Date",value:e.created_at},{label:"Availability No",value:e.availability_no},{label:"Rating",value:e.rating}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(i,{title:"Quote Line",leftObjects:[{label:"Product name",value:((_=e.product)==null?void 0:_.product_name)??""},{label:"SKU name",value:e.quantity},{label:"In Stock Quantity",value:e.in_stock_quantity},{label:"Currency",value:e.currency},{label:"Cost",value:e.cost},{label:"Exchange Rate",value:e.exchange_rate}],rightObjects:[{label:"Lead Time",value:e.vat_no},{label:"Date Code",value:e.forwarder},{label:"SPQ",value:e.forwarder_account_no},{label:"MOQ",value:e.forwarder_account_no},{label:"Comment",value:e.comment}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(i,{title:"Development Information",leftObjects:[{label:"From Our Inventory",value:e.from_our_inventory?"Yes":"No"}],rightObjects:[{label:"Portal Availability Id",value:e.portal_availability_id}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(L,{title:"Price-Breaks Items",items:e.price_breaks,columns:N}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(Q,{modelId:t,modelName:"availability"})]})]})};export{z as default};