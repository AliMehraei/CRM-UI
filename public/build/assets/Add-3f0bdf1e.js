import{u as c,a as f,d as h,j as e,F as s,aF as m,l as p,aG as P,y as O,m as C,b as _,c as S,r as y,aH as w,s as M,e as F}from"./main-fb19eb09.js";import{G as u,A as D}from"./GenerateFields-c40cef71.js";import{S as x}from"./react-select.esm-8668e882.js";import{I as T}from"./ImageUploadComponent-9a324e39.js";import{F as k}from"./index-5a1fde46.js";/* empty css                  */import"./index-f5f709e9.js";import"./ClearButtonComponent-292bb5e9.js";const I=()=>{const o=c();new f;const r=h(l=>l.productForm),n=(l,d)=>{o(m({[l]:d}))};return e(s,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(u,{fields:{"Product Information":{"Product Image":e(T,{formState:r,modelName:"product",id:"image",formAttribute:"image",updateFormData:m}),"Product Name":e("input",{id:"product_name",required:!0,name:"product_name",className:"form-input flex-1 ",onChange:l=>n(l.target.name,l.target.value)}),"Part Description":e("input",{id:"part_description",name:"part_description",className:"form-input flex-1 ",onChange:l=>n(l.target.name,l.target.value)}),Manufacturer:e(p,{defaultOptions:!0,isMulti:!1,required:!0,id:"manufacturer_id",placeholder:"Type at least 2 characters to search...",name:"manufacturer_id",loadOptions:P,onChange:({value:l})=>{n("manufacturer_id",l)},className:"flex-1"}),"RFQ (Alternative)":e(p,{defaultOptions:!0,isMulti:!0,id:"rfqs_id",placeholder:"Type at least 2 characters to search...",name:"rfqs_id",loadOptions:O,onChange:l=>{n("rfqs_id",l.map(d=>d.value))},className:"flex-1"}),"Business Product":e("input",{id:"business_product",type:"checkbox",name:"business_product",className:"form-checkbox",onChange:l=>n(l.target.name,l.target.checked)}),"Approved By":e(p,{defaultOptions:!0,isMulti:!1,id:"approved_by_id",placeholder:"Type at least 2 characters to search...",name:"approved_by_id",loadOptions:C,onChange:({value:l})=>{n("approved_by_id",l)},className:"flex-1"})},"":{"Product Active":e("input",{id:"product_active",type:"checkbox",name:"product_active",className:"form-checkbox",onChange:l=>n(l.target.name,l.target.checked)}),"Product Owner":e(p,{defaultOptions:!0,isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:C,onChange:({value:l})=>{n("owner_id",l)},className:"flex-1"}),"Datasheet URL":e("input",{id:"datasheet_url",name:"datasheet_url",className:"form-input flex-1 ",onChange:l=>n(l.target.name,l.target.value)}),"Product Type":e(x,{options:[{label:"-None-",value:"none"},{label:"Goods",value:"goods"},{label:"Service",value:"service"}],name:"product_type",id:"product_type",onChange:({value:l})=>{n("product_type",l)},className:"flex-1",defaultValue:{label:"Goods",value:"goods"}})}}})})})},A=()=>{const o=c();new f;const r=(i,l)=>{o(m({[i]:l}))};return e(s,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(u,{fields:{"Supply Chain":{"Manufacturer Name":e("input",{id:"manufacturer_name",name:"manufacturer_name",className:"form-input flex-1 ",onChange:i=>r(i.target.name,i.target.value)})},"":{"Lifecylce Status":e(x,{options:[{label:"-None-",value:"none"},{label:"Production",value:"production"},{label:"Phase out",value:"phase_out"},{label:"EOL",value:"eol"},{label:"Unknown",value:"unknown"}],name:"lifecycle_status",id:"lifecycle_status",onChange:({value:i})=>{r("lifecycle_status",i)},className:"flex-1",defaultValue:{label:"-None-",value:"none"}})}}})})})},q=()=>{const o=c(),r=new f;h(a=>a.productForm);const n=(a,g)=>{o(m({[a]:g}))};return e(s,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(u,{fields:{"Tech Data":{Category:e(p,{defaultOptions:!0,isMulti:!1,required:!0,id:"product_category_id",placeholder:"Type at least 2 characters to search...",name:"product_category_id",loadOptions:async a=>{const g="id",v="name",b=await r.searchCategoryProduct({query:a});if(b.status)return b.data.data.map(N=>({value:N[g],label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:N[v]})})},N[g])}))},onChange:({value:a})=>{n("product_category_id",a)},className:"flex-1"}),"Average Lead Time":e("input",{id:"average_lead_time",name:"average_lead_time",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),Capacitance:e("input",{id:"capacitance",name:"capacitance",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),Dielectric:e("input",{id:"dielectric",name:"dielectric",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"Flash Memory Size":e("input",{id:"flash_memory_size",name:"flash_memory_size",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),Frequency:e("input",{id:"frequency",name:"frequency",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"Halogen Free":e("input",{id:"halogen_free",name:"halogen_free",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"Lead Free":e("input",{id:"lead_free",name:"lead_free",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"Max Operating Temperature":e("input",{id:"max_operating_temperature",name:"max_operating_temperature",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"Max Supply Voltage":e("input",{id:"max_supply_voltage",name:"max_supply_voltage",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"Number of A/D Converters":e("input",{id:"number_of_ad_converters",name:"number_of_ad_converters",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"Number of D/A Converters":e("input",{id:"number_of_da_converters",name:"number_of_da_converters",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"Number of I2C Channels":e("input",{id:"number_of_i2c_channels",name:"number_of_i2c_channels",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"Number of Timers/Counters":e("input",{id:"number_of_timers_counters",name:"number_of_timers_counters",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"Number of USART Channels":e("input",{id:"number_of_usart_channels",name:"number_of_usart_channels",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),Mount:e("input",{id:"mount",name:"mount",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"Radiation Hardening":e("input",{id:"radiation_hardening",name:"radiation_hardening",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"Schedule B":e("input",{id:"schedule_b",name:"schedule_b",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),Termination:e("input",{id:"termination",name:"termination",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"Voltage ":e("input",{id:"voltage",name:"voltage",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"Voltage Rating":e("input",{id:"voltage_rating",name:"voltage_rating",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)})},"":{SPQ:e("input",{id:"spq",name:"spq",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"Weight in kg":e("input",{id:"weight_in_kg",name:"weight_in_kg",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),Composition:e("input",{id:"composition",name:"composition",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"Core Architecture":e("input",{id:"core_architecture",name:"core_architecture",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"RAM Size":e("input",{id:"ram_size",name:"ram_size",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),Material:e("input",{id:"material",name:"material",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"Usage Unit":e(x,{options:[{label:"PCS",value:"pcs"}],name:"usage_unit",id:"usage_unit",onChange:({value:a})=>{n("usage_unit",a)},className:"flex-1",defaultValue:{label:"PCS",value:"pcs"}}),"Unit Price":e("input",{id:"unit_price",name:"unit_price",type:"number",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),defaultValue:0}),"Min Operating Temperature":e("input",{id:"min_operating_temperature",name:"min_operating_temperature",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"Min Supply Voltage":e("input",{id:"min_supply_voltage",name:"min_supply_voltage",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"Nominal Supply Current":e("input",{id:"nominal_supply_current",name:"nominal_supply_current",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"Number of Channels":e("input",{id:"number_of_channels",name:"number_of_channels",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"Number of I/Os":e("input",{id:"number_of_ios",name:"number_of_ios",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"Number of SPI Channels":e("input",{id:"number_of_spi_channels",name:"number_of_spi_channels",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"Number of UART Channels":e("input",{id:"number_of_uart_channels",name:"number_of_uart_channels",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),Resistance:e("input",{id:"resistance",name:"resistance",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"Temperature Coefficient ":e("input",{id:"temperature_coefficient",name:"temperature_coefficient",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),Tolerance:e("input",{id:"tolerance",name:"tolerance",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)}),"Duplicated Status":e(x,{options:[{label:"-None-",value:"none"},{label:_(s,{children:[e("span",{className:"inline-block w-4 h-4 mr-2 bg-red-500 rounded-full"}),"Must be deleted"]}),value:"must_be_deleted"},{label:_(s,{children:[e("span",{className:"inline-block w-4 h-4 mr-2 bg-yellow-500 rounded-full"}),"Must be merged"]}),value:"must_be_merged"},{label:_(s,{children:[e("span",{className:"inline-block w-4 h-4 mr-2 bg-blue-500 rounded-full"}),"Must be renamed"]}),value:"must_be_renamed"},{label:_(s,{children:[e("span",{className:"inline-block w-4 h-4 mr-2 bg-red-800 rounded-full"}),"Delete confirmed"]}),value:"delete_confirmed"}],name:"duplicated_status",id:"duplicated_status",onChange:({value:a})=>{n("duplicated_status",a)},className:"flex-1",defaultValue:{label:"-None-",value:"none"}}),"Voltage Rating (DC)":e("input",{id:"voltage_rating_dc",name:"voltage_rating_dc",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value)})}}})})})},U=()=>{const o=c(),r=(i,l)=>{o(m({[i]:l}))};return e(s,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(u,{fields:{"Product Information":{Package:e(x,{options:[{label:"-None-",value:"none"},{label:"SMD",value:"smd"},{label:"THT",value:"tht"},{label:"Peripheral",value:"peripheral"},{label:"Other",value:"other"}],name:"package",id:"package",onChange:({value:i})=>{r("package",i)},className:"flex-1",defaultValue:{label:"-None-",value:"none"}}),"Case/Package":e("input",{id:"case_package",name:"case_package",className:"form-input flex-1 ",onChange:i=>r(i.target.name,i.target.value)}),Packaging:e("input",{id:"packaging",name:"packaging",className:"form-input flex-1 ",onChange:i=>r(i.target.name,i.target.value)}),"Number of Pins":e("input",{id:"number_of_pins",name:"number_of_pins",className:"form-input flex-1 ",onChange:i=>r(i.target.name,i.target.value)})},"":{Weight:e("input",{id:"weight",name:"weight",className:"form-input flex-1 ",onChange:i=>r(i.target.name,i.target.value)}),"Case Code (Imperial)":e("input",{id:"case_code_imperial",name:"case_code_imperial",className:"form-input flex-1 ",onChange:i=>r(i.target.name,i.target.value)}),"Case Code (Metric)":e("input",{id:"case_code_metric",name:"case_code_metric",className:"form-input flex-1 ",onChange:i=>r(i.target.name,i.target.value)})}}})})})},j=()=>{const o=c();new f,h(t=>t.productForm);const r=(t,i)=>{o(m({[t]:i}))};return e(s,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(u,{fields:{Dimensions:{Length:e("input",{id:"length",name:"length",className:"form-input flex-1 ",onChange:t=>r(t.target.name,t.target.value)}),Depth:e("input",{id:"depth",name:"depth",className:"form-input flex-1 ",onChange:t=>r(t.target.name,t.target.value)}),Thickness:e("input",{id:"thickness",name:"thickness",className:"form-input flex-1 ",onChange:t=>r(t.target.name,t.target.value)})},"":{Width:e("input",{id:"width",name:"width",className:"form-input flex-1 ",onChange:t=>r(t.target.name,t.target.value)}),Height:e("input",{id:"height",name:"height",className:"form-input flex-1 ",onChange:t=>r(t.target.name,t.target.value)})}}})})})},L=()=>{const o=c();new f,h(t=>t.productForm);const r=(t,i)=>{o(m({[t]:i}))};return e(s,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(u,{fields:{"Stock Information":{"Quantity in Stock":e("input",{id:"quantity_in_stock",name:"quantity_in_stock",className:"form-input flex-1 ",onChange:t=>r(t.target.name,t.target.value)})},"":{"Quantity Ordered":e("input",{id:"quantity_ordered",name:"quantity_ordered",className:"form-input flex-1 ",onChange:t=>r(t.target.name,t.target.value)}),"Quantity in Demand":e("input",{id:"quantity_in_demand",name:"quantity_in_demand",className:"form-input flex-1 ",onChange:t=>r(t.target.name,t.target.value)})}}})})})},R=()=>{const o=c(),r=new f;h(l=>l.productForm);const n=(l,d)=>{o(m({[l]:d}))},t=async l=>{const d="id",a="product_name",g=await r.searchProduct({query:l});if(g.status)return g.data.data.map(v=>({value:v[d],label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:v[a]})})},v[d])}))};return e(s,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(u,{fields:{Alternatives:{"Alternative MPN 1":e(p,{defaultOptions:!0,isMulti:!1,id:"alternative_mpn_1_id",placeholder:"Type at least 2 characters to search...",name:"alternative_mpn_1_id",loadOptions:t,onChange:({value:l})=>{n("alternative_mpn_1_id",l)},className:"flex-1"}),"Alternative MPN 2":e(p,{defaultOptions:!0,isMulti:!1,id:"alternative_mpn_2_id",placeholder:"Type at least 2 characters to search...",name:"alternative_mpn_2_id",loadOptions:t,onChange:({value:l})=>{n("alternative_mpn_2_id",l)},className:"flex-1"})},"":{"Alternative MPN 3":e(p,{defaultOptions:!0,isMulti:!1,id:"alternative_mpn_3_id",placeholder:"Type at least 2 characters to search...",name:"alternative_mpn_3_id",loadOptions:t,onChange:({value:l})=>{n("alternative_mpn_3_id",l)},className:"flex-1"}),"Alternative MPN 4":e(p,{defaultOptions:!0,isMulti:!1,id:"alternative_mpn_4_id",placeholder:"Type at least 2 characters to search...",name:"alternative_mpn_4_id",loadOptions:t,onChange:({value:l})=>{n("alternative_mpn_4_id",l)},className:"flex-1"})}}})})})},V=()=>{const o=c();new f,h(t=>t.productForm);const r=(t,i)=>{o(m({[t]:i}))};return e(s,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(u,{fields:{"Export / Import Data":{"Tariff Code":e("input",{id:"tariff_code",name:"tariff_code",className:"form-input flex-1 ",onChange:t=>r(t.target.name,t.target.value)})},"":{ECCN:e("input",{id:"eccn",name:"eccn",className:"form-input flex-1 ",onChange:t=>r(t.target.name,t.target.value)})}}})})})},Y=()=>{const o=c(),r=(t,i)=>{o(m({[t]:i}))};return e(s,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(u,{fields:{"API Data":{"Octopart ID":e("input",{id:"octopart_id",name:"octopart_id",className:"form-input flex-1 ",onChange:t=>r(t.target.name,t.target.value)}),"Octopart URL":e("input",{id:"octopart_url",name:"octopart_url",className:"form-input flex-1 ",onChange:t=>r(t.target.name,t.target.value)}),updateByMouser:e("input",{id:"update_by_mouser",type:"checkbox",name:"update_by_mouser",className:"form-checkbox",onChange:t=>r(t.target.name,t.target.checked)}),ZohoBooksID:e("input",{id:"zoho_books_id",name:"zoho_books_id",className:"form-input flex-1 ",onChange:t=>r(t.target.name,t.target.value)}),"OP Last Update":e(k,{name:"last_activity_date",options:{dateFormat:"Y-m-d "},className:"form-input flex-1",placeholder:"YYYY-MM-DD",onChange:(t,i)=>r("last_activity_date",i)}),"OP Failure Message":e("input",{id:"op_failure_message",name:"op_failure_message",className:"form-input flex-1 ",onChange:t=>r(t.target.name,t.target.value)}),"Octopart Images":e("textarea",{id:"octopart_images",rows:2,name:"octopart_images",className:"form-textarea flex-1",placeholder:"",onChange:t=>r(t.target.name,t.target.value)}),"Octopart Datasheets":e("textarea",{id:"octopart_datasheets",rows:2,name:"octopart_datasheets",className:"form-textarea flex-1",placeholder:"",onChange:t=>r(t.target.name,t.target.value)}),"Octopart Compliance Documents":e("textarea",{id:"octopart_compliance_documents",rows:2,name:"octopart_compliance_documents",className:"form-textarea flex-1",placeholder:"",onChange:t=>r(t.target.name,t.target.value)})},"":{"Mouser URL":e("input",{id:"mouser_url",name:"mouser_url",className:"form-input flex-1 ",onChange:t=>r(t.target.name,t.target.value)}),"Mouser ID":e("input",{id:"mouser_id",name:"mouser_id",className:"form-input flex-1 ",onChange:t=>r(t.target.name,t.target.value)}),"Mouser Category":e("input",{id:"mouser_category",name:"mouser_category",className:"form-input flex-1 ",onChange:t=>r(t.target.name,t.target.value)}),"M Last Update":e(k,{name:"m_last_update",options:{dateFormat:"Y-m-d "},className:"form-input flex-1",placeholder:"YYYY-MM-DD",onChange:(t,i)=>r("m_last_update",i)}),"Product Margin":e("input",{id:"product_margin",name:"product_margin",className:"form-input flex-1 ",onChange:t=>r(t.target.name,t.target.value)})}}})})})},z=()=>{const o=c(),r=(t,i)=>{o(m({[t]:i}))};return e(s,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(u,{fields:{"Description Information":{Description:e("textarea",{id:"description",rows:2,name:"description",className:"form-textarea flex-1",placeholder:"",onChange:t=>r(t.target.name,t.target.value)}),"Octopart Short Description":e("textarea",{id:"octopart_short_description",rows:2,name:"octopart_short_description",className:"form-textarea flex-1",placeholder:"",onChange:t=>r(t.target.name,t.target.value)})},"":{}}})})})},E=()=>_("div",{className:"mt-8 px-4",children:[e(I,{},"productInfo"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(A,{},"SupplyChain"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(U,{},"PhysicalProperties"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(q,{},"TechData"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(j,{},"Dimensions"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(L,{},"StockInformation"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(R,{},"Alternatives"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(V,{},"ExportImportData"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Y,{},"APIData"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(z,{},"DescriptionInformation")]}),K=()=>{const{hasPermission:o}=S(),r=h(t=>t.productForm),n=c();return y.useEffect(()=>{n(w())},[]),y.useEffect(()=>{n(M("Product Add"))}),o("create-product")?_("div",{className:"px-4",children:[e(D,{formState:r,resetForm:w}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(E,{})})})]}):e(F,{})};export{K as default};
