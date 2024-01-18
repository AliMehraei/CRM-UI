import{c as I,u as R,r as o,h as L,d as B,s as U,j as a,e as k,b as i,f as F,aJ as $,a as H}from"./main-396129fe.js";import{I as z}from"./InfoListComponent-93a4c56a.js";import{A as V,I as l}from"./InformationSectionPreview-2d4563bb.js";import{M as Y}from"./MultipleLineSectionPreview-ce85a630.js";import{A as q}from"./AttachmentSection-84478b6f.js";import"./CommonIcons-f41cb20c.js";const X=()=>{var c,b,m,d,p,v,_,h,f,g,y,N,P,C,O,w,S;const{hasPermission:u}=I(),n=R(),[s,j]=o.useState(!0),t=L().id,D=new H,e=B(r=>r.productForm);o.useEffect(()=>{n(U("Product Preview"))});const M=()=>{window.print()},x=async()=>{const r=await D.fetchSingleProduct(t);if(r.status!=200)return;const T=r.data.data.product;n($(T))},A=[{label:"Manufacture",value:((c=e.manufacturer)==null?void 0:c.name)??""},{label:"Part Description",value:e.part_description},{label:"Product Owner",value:`${((b=e.owner)==null?void 0:b.first_name)??""} ${((m=e.owner)==null?void 0:m.last_name)??""}`},{label:"Created By",value:`${((d=e.creator)==null?void 0:d.first_name)??""} ${((p=e.creator)==null?void 0:p.last_name)??""}`},{label:"Modified By",value:`${((v=e.modifier)==null?void 0:v.first_name)??""} ${((_=e.modifier)==null?void 0:_.last_name)??""}`},{label:"Approved By",value:`${((h=e.approvedBy)==null?void 0:h.first_name)??""} ${((f=e.approvedBy)==null?void 0:f.last_name)??""}`}];return o.useEffect(()=>{x().then(()=>{j(!1)})},[t]),s?a(k,{}):!u("read-product")||s?a(k,{}):i("div",{children:[a("div",{className:"flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6",children:a(V,{loading:s,hasPermission:u,modelId:t,exportTable:M,routeModel:"product",permissionModel:"product"})}),i("div",{className:"panel",children:[i("div",{className:"flex justify-between flex-wrap gap-4 px-4",children:[a("div",{className:"text-2xl font-semibold uppercase",children:"Product"}),a("div",{className:"shrink-0",children:a("img",{src:F(e.image_data),alt:"product image",className:"w-20 ltr:ml-auto rtl:mr-auto"})})]}),a(z,{data:A}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"Product Information",leftObjects:[{label:"Datasheet URL",value:a("a",{className:"text-primary",target:"_blank",href:e.datasheet_url,children:e.datasheet_url})},{label:"Product Type",value:e.product_type},{label:"Lost Reason Comment",value:e.lost_reason_comment},{label:"Lead Source",value:e.lead_source}],rightObjects:[{label:"Mpn",value:e.mpn_id},{label:"Business Product",value:e.business_product?"Yes":"No"},{label:"Product Active",value:e.product_active?"Yes":"No"},{label:"Company",value:e.company},{label:"Company Type",value:e.company_type}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"Bussiness Product",leftObjects:[{label:"Bussiness Product",value:e.business_product?"Yes":"No"},{label:"Sales Selling Price",value:e.sales_selling_price},{label:"Sales Fiscal Account",value:(g=e.fiscal_account_sale)==null?void 0:g.account_name},{label:"Sales Description",value:e.sales_description},{label:"Sales Tax",value:e.sales_tax}],rightObjects:[{label:"Purchase Cost Price",value:e.purchase_cost_price},{label:"Purchase Fiscal Account",value:(y=e.fiscal_account_purchase)==null?void 0:y.account_name},{label:"Purchase Description",value:e.purchase_description},{label:"Purchase Tax",value:e.purchase_tax},{label:"Purchase Preferred Vendor",value:(N=e.vendor)==null?void 0:N.vendor_name}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"Supply Chain",leftObjects:[],rightObjects:[{label:"Lifecycle Status",value:e.lifecycle_status}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"Physical Properties",leftObjects:[{label:"Package",value:e.city},{label:"Case/Package",value:e.address},{label:"Packaging",value:e.zip_code},{label:"Number of Pins",value:e.zip_code}],rightObjects:[{label:"Weight",value:e.country},{label:"Case Code (Imperial)",value:e.state},{label:"Case Code (Metric)",value:e.state}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"Tech Data",leftObjects:[{label:"Category",value:(P=e.category)==null?void 0:P.name},{label:"Average Lead Time",value:e.average_lead_time},{label:"Capacitance",value:e.capacitance},{label:"Dielectric",value:e.dielectric},{label:"Flash Memory Size",value:e.flash_memory_size},{label:"Frequency",value:e.frequency},{label:"Halogen Free",value:e.halogen_free},{label:"Lead Free",value:e.lead_free},{label:"Max Operating Temperature",value:e.max_operating_temperature},{label:"Max Supply Voltage",value:e.max_supply_voltage},{label:"Number of A/D Converters",value:e.number_of_ad_converters},{label:"Number of D/A Converters",value:e.number_of_da_converters},{label:"Number of I2C Channels",value:e.number_of_i2c_channels},{label:"Number of Timers/Counters",value:e.number_of_timers_counters},{label:"Number of USART Channels",value:e.number_of_usart_channels},{label:"Mount",value:e.mount},{label:"Radiation Hardening",value:e.radiation_hardening},{label:"Schedule B",value:e.schedule_b},{label:"Termination",value:e.termination},{label:"Voltage",value:e.voltage},{label:"Voltage Rating",value:e.voltage_rating}],rightObjects:[{label:"SPQ",value:e.spq},{label:"Weight in kg",value:e.weight_in_kg},{label:"Composition",value:e.composition},{label:"Core Architecture",value:e.core_architecture},{label:"RAM Size",value:e.ram_size},{label:"Material",value:e.material},{label:"Usage Unit",value:e.usage_unit},{label:"Unit Price",value:e.unit_price},{label:"Min Operating Temperature",value:e.min_operating_temperature},{label:"Min Supply Voltage",value:e.min_supply_voltage},{label:"Nominal Supply Current",value:e.nominal_supply_current},{label:"Number of Channels",value:e.number_of_channels},{label:"Number of I/Os",value:e.number_of_ios},{label:"Number of SPI Channels",value:e.number_of_spi_channels},{label:"Number of UART Channels",value:e.number_of_uart_channels},{label:"Resistance",value:e.resistance},{label:"Temperature Coefficient",value:e.temperature_coefficient},{label:"Tolerance",value:e.tolerance},{label:"Duplicated Status",value:e.duplicated_status},{label:"Voltage Rating (DC)",value:e.voltage_rating_dc}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"Dimensions information",leftObjects:[{label:"Length",value:e.length},{label:"Depth",value:e.depth},{label:"Thickness",value:e.thickness}],rightObjects:[{label:"Width",value:e.width},{label:"Height",value:e.height}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"Compliance information",leftObjects:[{label:"RoHs",value:e.rohs?"Yes":"No"},{label:"Reach",value:e.reach?"Yes":"No"}],rightObjects:[{label:"RoHs Status",value:e.rohs_status},{label:"REACH SVHC",value:e.reach_svhc}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"Stock Information",leftObjects:[{label:"Quantity in Stock",value:e.quantity_in_stock}],rightObjects:[{label:"QTY Ordered",value:e.quantity_ordered},{label:"Quantity in Demand",value:e.quantity_in_demand}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"Alternatives",leftObjects:[{label:"Alternative MPN 1",value:((C=e.alternative_mpn1)==null?void 0:C.product_name)??""},{label:"Alternative MPN 2",value:((O=e.alternative_mpn2)==null?void 0:O.product_name)??""}],rightObjects:[{label:"Alternative MPN 3",value:((w=e.alternative_mpn3)==null?void 0:w.product_name)??""},{label:"Alternative MPN 4",value:((S=e.alternative_mpn4)==null?void 0:S.product_name)??""}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"Export / Import Data",leftObjects:[{label:"Tariff Code",value:e.tariff_code}],rightObjects:[{label:"ECCN",value:e.eccn}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"API Data",leftObjects:[{label:"Octopart ID",value:e.octopart_id},{label:"Octopart URL",value:a("a",{className:"text-primary",target:"_blank",href:e.octopart_url,children:e.octopart_url})},{label:"updateByMouser",value:e.update_by_mouser?"Yes":"No"},{label:"ZohoBooksID",value:e.zoho_books_id},{label:"OP Last Update",value:e.op_last_update},{label:"OP Failure Message",value:e.op_failure_message}],rightObjects:[{label:"Mouser URL",value:a("a",{className:"text-primary",target:"_blank",href:e.mouser_url,children:e.mouser_url})},{label:"Mouser ID",value:e.mouser_id},{label:"Mouser Category",value:e.mouser_category},{label:"M Last Update",value:e.m_last_update},{label:"Product Margin",value:e.product_margin}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(Y,{sectionTitle:"Communication Details / History",data:[{label:"Octopart Datasheets",value:e.octopart_datasheets},{label:"Octopart Compliance Documents",value:e.octopart_compliance_documents},{label:"Octopart Images",value:e.octopart_images}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(q,{modelId:t,modelName:"product"})]})]})};export{X as default};
