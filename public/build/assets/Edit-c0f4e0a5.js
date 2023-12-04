import{u as v,d as x,j as e,aE as h,l as p,m as S,b as u,f as F,p as _,F as b,a as w,h as C,c as M,r as f,aF as g,s as I,e as N}from"./main-cf3c5856.js";import{G as y}from"./GenerateFields-c0baefe4.js";import{I as k}from"./ImageUploadComponent-9382e191.js";import{A}from"./AttachmentSection-a80ad856.js";import{A as O}from"./ActionButtonsComponent-f33a2eb9.js";import"./ClearButtonComponent-543bde52.js";import"./index-37c8eb8b.js";const E=()=>{var d,o,t,r,m;const i=v(),n=x(a=>a.manufacturerForm),l=(a,s)=>{i(h({[a]:s}))},c={"Manufacturer Information":{"Manufacturer Image":e(k,{formState:n,modelName:"manufacturer",id:"manufacturer_image",formAttribute:"image",updateFormData:h}),"Manufacturer Name":e("input",{id:"name",required:!0,name:"name",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value),value:n.name}),"Octo Api Id":e("input",{id:"octo_api_id",name:"octo_api_id",className:"form-input flex-1 ",onChange:a=>l(a.target.name,a.target.value),value:n.octo_api_id}),"Alias Names":e("textarea",{id:"alias_names",name:"alias_names",rows:3,className:"form-textarea flex-1",onChange:a=>l(a.target.name,a.target.value),value:n.alias_names})},"":{Active:e("input",{id:"is_active",type:"checkbox",name:"is_active",className:"form-checkbox",onChange:a=>l(a.target.name,a.target.checked),checked:n.is_active}),"Manufacturer Owner":e(p,{defaultOptions:!0,isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:S,onChange:({value:a})=>{l("owner_id",a)},className:"flex-1",defaultValue:{value:(d=n.owner)==null?void 0:d.id,label:u("div",{className:"flex items-center",children:[n.owner?e("img",{src:F(n.owner.avatar_data),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,u("div",{children:[e("div",{className:"text-sm font-bold",children:((o=n.owner)==null?void 0:o.first_name)+" "+((t=n.owner)==null?void 0:t.last_name)}),e("div",{className:"text-xs text-gray-500",children:(r=n.owner)==null?void 0:r.email})]}),e("button",{className:"btn text-xs btn-sm ml-auto",onClick:()=>{var a,s;return _(`${((a=n.owner)==null?void 0:a.first_name)+" "+((s=n.owner)==null?void 0:s.last_name)}`)},children:"Copy & Select"})]},(m=n.owner)==null?void 0:m.id)}})}};return e(b,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(y,{fields:c})})})},V=()=>{const i=x(t=>t.manufacturerForm),n=v(),l=new w,c=(t,r)=>{n(h({[t]:r}))},d=async t=>{const r="id",m="vendor_name",a=await l.searchVendor({query:t});if(a.status)return a.data.data.map(s=>({value:s[r],label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:s[m]})})},s[r])}))},o={"Line Card":{"Vendor_Line Card":e(p,{defaultOptions:!0,isMulti:!0,id:"vendor_line_card_id",name:"vendor_line_card_id",placeholder:"Type at least 2 characters to search...",loadOptions:d,className:"flex-1",onChange:t=>{c("vendor_line_card_ids",t.map(r=>r.value))},defaultValue:i.vendor_line_cards?i.vendor_line_cards.map(t=>({value:t.id,label:e("div",{className:"flex items-center",children:u("div",{children:[e("div",{className:"text-sm font-bold",children:t.vendor_name}),e("button",{className:"btn text-xs btn-sm ml-auto",onClick:()=>_(`${t.vendor_name}`),children:"Copy & Select"})]})},t.id)})):[]})},"":{"Vendor_Strong Lines":e(p,{defaultOptions:!0,isMulti:!0,id:"vendor_strong_lines_id",name:"vendor_strong_lines_id",placeholder:"Type at least 2 characters to search...",loadOptions:d,className:"flex-1",onChange:t=>{c("vendor_strong_lines_ids",t.map(r=>r.value))},defaultValue:i.vendor_strong_lines?i.vendor_strong_lines.map(t=>({value:t.id,label:e("div",{className:"flex items-center",children:u("div",{children:[e("div",{className:"text-sm font-bold",children:t.vendor_name}),e("button",{className:"btn text-xs btn-sm ml-auto",onClick:()=>_(`${t.vendor_name}`),children:"Copy & Select"})]})},t.id)})):[]})}};return e(b,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(y,{fields:o})})})},L=()=>{const n=C().id;return u("div",{className:"mt-8 px-4",children:[e(E,{},"manufacturerInfo"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(V,{},"lineCard"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(A,{modelId:n,modelName:"manufacturer"})]})},q=()=>{const{hasPermission:i}=M(),n=x(a=>a.manufacturerForm),[l,c]=f.useState(!0),o=C().id,t=new w,r=v();f.useEffect(()=>{r(g())},[]),f.useEffect(()=>{r(I("Manufacturer Edit"))});const m=async()=>{const a=await t.fetchSingleManufacturer(o);if(a.status!=200)return;const s=a.data.data.manufacturer;s.oldImage=s.image,r(h(s))};return f.useEffect(()=>{m().then(()=>{c(!1)})},[o]),f.useEffect(()=>{r(h({api:"updateSingleManufacturer",redirectTo:"/manufacturer/edit/:id",action:"edit"}))},[]),l?e(N,{}):!i("update-manufacturer")||l?e(N,{}):u("div",{className:"px-4",children:[e(O,{formState:n,resetForm:g}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6",children:e(L,{})})})]})};export{q as default};
