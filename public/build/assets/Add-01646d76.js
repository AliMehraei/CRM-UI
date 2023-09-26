import{u,a as f,j as o,b as e,a1 as c,F as p,d as v,c as x,r as N,s as C,f as w,a2 as b}from"./main-d50c1b5f.js";import{A as m}from"./react-select-async.esm-e52329c5.js";import{G as g,A as y}from"./GenerateFields-58c5ac0d.js";import{h as F,g as I,s as M}from"./CommonFunctions-43750655.js";import{C as S}from"./ClearButtonComponent-da69a37a.js";import"./Select-aecb2a80.esm-ecfd9304.js";import"./sweetalert2.all-3ffe5e63.js";const A=()=>{const i=u(),r=f(a=>a.manufacturerForm),n=(a,t)=>{i(c({[a]:t}))},s={"Manufacturer Information":{"Manufacturer Image":o("div",{className:"",children:[o("div",{className:"flex",children:[e("input",{id:"manufacturer_image",type:"file",className:"form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1",accept:"image/*",onChange:a=>F(a,t=>{i(c({image:`${t==null?void 0:t.data.data.file_url}`}))}),name:"manufacturerImage"},"manufacturer_image"),e(S,{callBack:()=>{const a=document.getElementById("manufacturer_image");a&&(a.value="",a.dispatchEvent(new Event("change",{bubbles:!0}))),i(c({image:null}))}})]}),e("img",{id:"manufacturer_image_preview",src:I(r.image||r.oldImage),alt:"img",className:"mt-4 w-20 h-20 rounded"})]}),"Manufacturer Name":e("input",{id:"name",required:!0,name:"name",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),value:r.name}),"Octo Api Id":e("input",{id:"octo_api_id",name:"octo_api_id",className:"form-input flex-1 ",onChange:a=>n(a.target.name,a.target.value),value:r.octo_api_id}),"Alias Names":e("textarea",{id:"alias_names",name:"alias_names",rows:3,className:"form-textarea flex-1",onChange:a=>n(a.target.name,a.target.value),value:r.alias_names})},"":{Active:e("input",{id:"is_active",type:"checkbox",name:"is_active",className:"form-checkbox",onChange:a=>n(a.target.name,a.target.checked),checked:r.is_active}),"Manufacturer Owner":e(m,{isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:M,onChange:({value:a})=>{n("owner_id",a)},className:"flex-1"})}};return e(p,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(g,{fields:s})})})},k=()=>{f(t=>t.manufacturerForm);const i=u(),r=new v,n=(t,l)=>{i(c({[t]:l}))},s=async t=>{const l="id",_="vendor_name",h=await r.searchVendor({query:t});if(h.status)return h.data.data.map(d=>({value:d[l],label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:d[_]})})},d[l])}))};return e(p,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(g,{fields:{"Line Card":{"Vendor_Line Card":e(m,{isMulti:!1,id:"vendor_line_card_id",name:"vendor_line_card_id",placeholder:"Type at least 2 characters to search...",loadOptions:s,className:"flex-1",onChange:({value:t})=>{n("vendor_line_card_id",t)}})},"":{"Vendor_Strong Card":e(m,{isMulti:!1,id:"vendor_strong_lines_id",name:"vendor_strong_lines_id",placeholder:"Type at least 2 characters to search...",loadOptions:s,className:"flex-1",onChange:({value:t})=>{n("vendor_strong_lines_id",t)}})}}})})})},O=()=>o("div",{className:"mt-8 px-4",children:[e(A,{},"manufacturerInfo"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(k,{},"lineCard")]}),G=()=>{const{hasPermission:i}=x(),r=f(s=>s.manufacturerForm),n=u();return N.useEffect(()=>{n(C("Manufacturer Add"))}),i("create-manufacturer")?o("div",{className:"px-4",children:[e(y,{formState:r,resetForm:b}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(O,{})})})]}):e(w,{})};export{G as default};
