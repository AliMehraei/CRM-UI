import{u as v,a as g,j as m,b as e,O as u,F as N,r as h,d as y,s as C}from"./main-77e2ced5.js";import{A as _,a as w}from"./react-select-async.esm-3c543bf6.js";import{h as F,g as I,s as M,G as b}from"./CommonFunctions-ad427eed.js";import{C as S}from"./ClearButtonComponent-6fe18d3f.js";import{A as E}from"./ActionButtonsComponent-a955f533.js";import{L as A}from"./LoadingAlpyn-26884e39.js";import"./Select-aecb2a80.esm-420bfc07.js";import"./sweetalert2.all-fc958ea3.js";const L=()=>{var s,o,l,c,t;const r=v(),n=g(a=>a.manufactureForm),i=(a,d)=>{r(u({[a]:d}))},f={"Manufacture Information":{"Manufacture Image":m("div",{className:"",children:[m("div",{className:"flex",children:[e("input",{id:"manufacture_image",type:"file",className:"form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1",accept:"image/*",onChange:a=>F(a,d=>{r(u({image:`${d==null?void 0:d.data.data.file_url}`}))}),name:"manufactureImage"},"manufacture_image"),e(S,{callBack:()=>{const a=document.getElementById("manufacture_image");a&&(a.value="",a.dispatchEvent(new Event("change",{bubbles:!0}))),r(u({image:null}))}})]}),e("img",{id:"manufacture_image_preview",src:I(n.image||n.oldImage),alt:"img",className:"mt-4 w-20 h-20 rounded"})]}),"Manufacture Name":e("input",{id:"name",required:!0,name:"name",className:"form-input flex-1 ",onChange:a=>i(a.target.name,a.target.value),value:n.name}),"Octo Api Id":e("input",{id:"octo_api_id",name:"octo_api_id",className:"form-input flex-1 ",onChange:a=>i(a.target.name,a.target.value),value:n.octo_api_id}),"Alias Names":e("textarea",{id:"alias_names",name:"alias_names",rows:3,className:"form-textarea flex-1",onChange:a=>i(a.target.name,a.target.value),value:n.alias_names})},"":{Active:e("input",{id:"is_active",type:"checkbox",name:"is_active",className:"form-checkbox",onChange:a=>i(a.target.name,a.target.checked),checked:n.is_active}),"Manufacture Owner":e(_,{isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:M,onChange:({value:a})=>{i("owner_id",a)},className:"flex-1",defaultValue:{value:(s=n.owner)==null?void 0:s.id,label:m("div",{className:"flex items-center",children:[e("img",{src:(o=n.owner)==null?void 0:o.avatar,alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),m("div",{children:[e("div",{className:"text-sm font-bold",children:(l=n.owner)==null?void 0:l.name}),e("div",{className:"text-xs text-gray-500",children:(c=n.owner)==null?void 0:c.email})]})]},(t=n.owner)==null?void 0:t.id)}})}};return e(N,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(b,{fields:f})})})},O=()=>{var l,c;const r=g(t=>t.manufactureForm),n=v(),i=new w,f=(t,a)=>{n(u({[t]:a}))},s=async t=>{const a="id",d="vendor_name",x=await i.searchVendor({query:t});if(x.status)return x.data.data.map(p=>({value:p[a],label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:p[d]})})},p[a])}))},o={"Line Card":{"Vendor_Line Card":e(_,{isMulti:!1,id:"vendor_line_card_id",name:"vendor_line_card_id",placeholder:"Type at least 2 characters to search...",loadOptions:s,className:"flex-1",onChange:({value:t})=>{f("vendor_line_card_id",t)},defaultValue:{value:r.vendor_line_card_id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(l=r.vendor_line_card)==null?void 0:l.vendor_name})})},r.vendor_line_card_id)}})},"":{"Vendor_Strong Lines":e(_,{isMulti:!1,id:"vendor_strong_lines_id",name:"vendor_strong_lines_id",placeholder:"Type at least 2 characters to search...",loadOptions:s,className:"flex-1",onChange:({value:t})=>{f("vendor_strong_lines_id",t)},defaultValue:{value:r.vendor_line_card_id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(c=r.vendor_line_card)==null?void 0:c.vendor_name})})},r.vendor_line_card_id)}})}};return e(N,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(b,{fields:o})})})},V=()=>m("div",{className:"mt-8 px-4",children:[e(L,{},"manufactureInfo"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(O,{},"lineCard")]}),P=()=>{const r=g(t=>t.manufactureForm),[n,i]=h.useState(!0),s=y().id,o=new w,l=v();h.useEffect(()=>{l(C("Manufacture Edit"))});const c=async()=>{const t=await o.fetchSingleManufacturer(s);if(t.status!=200)return;const a=t.data.data.manufacture;a.oldImage=a.image,l(u(a))};return h.useEffect(()=>{c().then(()=>{i(!1)})},[s]),h.useEffect(()=>{l(u({api:"updateSingleManufacture",redirectTo:"/manufacture/edit/:id",action:"edit"}))},[]),n?e(A,{}):m("div",{className:"px-4",children:[e(E,{formState:r}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(V,{})})})]})};export{P as default};