import{u as Y,c as A,r as o,d as U,h as V,bf as q,s as w,af as m,j as e,e as O,F as z,b as s,f as G,S as J,y as v,a as K}from"./main-cc930730.js";const ee=()=>{const i=Y();A();const[b,N]=o.useState(""),[c,S]=o.useState(""),[f,_]=o.useState(""),[Q,k]=o.useState("");o.useState([]);const[W,F]=o.useState(""),[E,u]=o.useState(!0),[C,I]=o.useState(""),n=U(a=>a.contactForm),p=new K,l=V().contactId,[d,L]=o.useState("contact"),D=q(),{pathname:T}=D;o.useEffect(()=>{i(w(b))},[i]),o.useEffect(()=>{const t=window.location.pathname.split("/");L(t[1]=="availability-vendor"?"vendor":"contact"),N(m(t[1])+" - Import"),S(t[1]),_(m(t[1])+" Import"),k("Your "+m(t[1])+" List"),F("You don't have any"+m(t[1])+" List"),i(w(m(t[1])+" - Import"))},[]);const[h,B]=o.useState(!0),[g,P]=o.useState(0),$=async()=>{const a="https://phpstack-1110393-3914892.cloudwaysapps.com//ALPYN%20electronics%20BOM-List%20Samplefile.xlsx";console.log(a);const t=document.createElement("a");t.href=a,t.target="_blank",t.click()},j=a=>{const t=a.target.files[0];I(t)},R=async a=>{a.preventDefault();const t=J.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:5e3});try{const r=new FormData(a.target);let x=d+"_"+c+"_list";c=="availability-vendor"&&(x=d+"_availability_list"),r.append("has_header",h),r.append("ignored_top_rows",g),r.append("type",x),r.append("excess_bom_file",C),u(!0);const y=await p.importBomExcess(l,d,r);if(y.status===200){t.fire({icon:"success",timer:2e3,title:"Form submitted successfully",padding:"10px 20px"});const M=y.data.data;window.location.href=`/${c}/confirmation/${l}/${M.id}`}else t.fire({icon:"error",title:"Internal Server Error ,submitting form failed",padding:"10px 20px"});u(!1)}catch{u(!1),t.fire({icon:"error",title:"Internal Server Error ,submitting form failed",padding:"10px 20px"})}},H=async()=>{if(T.split("/")[1]!="availability-vendor"){const a=await p.fetchSingleContact(l);if(a.status!=200)return;const t=a.data.data.contact;i(v(t))}else{const a=await p.fetchSingleVendor(l);if(a.status!=200)return;const t=a.data.data.vendor;i(v(t))}};return o.useEffect(()=>{H().then(()=>{u(!1)})},[l]),E?e(O,{}):e(z,{children:s("div",{className:"panel px-0 border-white-light dark:border-[#1b2e4b]",children:[s("div",{className:"flex justify-end flex-wrap gap-4 px-4",children:[e("div",{className:"flex",children:s("div",{children:[s("div",{className:"text-sm font-semibold mt-5",children:[n.first_name," ",n.last_name," | ",n.vendor_name]}),e("div",{className:"text-s font-semibold ",children:n.email}),e("div",{className:"text-s font-semibold ",children:n.phone})]})}),s("div",{className:"shrink-0",children:[e("img",{src:G(n.image_data),alt:"Contact image",className:"w-20 ltr:ml-auto rtl:mr-auto"}),s("a",{className:"text-sm font-semibold mt-5  text-primary ",target:"_blank",href:`/${d}/preview/${l}`,children:["View ",d]})]})]}),e("hr",{className:"border-white-light dark:border-[#849bbc] my-6"}),s("div",{className:"px-4 sm:px-6 lg:px-8",children:[e("section",{className:"border-b border-gray-200 pb-4",children:e("div",{className:"sm:flex sm:items-center sm:justify-between",children:e("h3",{className:"title-1",children:e("b",{children:b})})})}),s("div",{className:" p-6 bg-white shadow-md",children:[e("h1",{className:"text-2xl font-bold mb-5",children:f}),s("form",{onSubmit:R,children:[s("div",{className:"mb-4",children:[e("label",{htmlFor:"title",className:"block text-gray-700 text-sm font-bold mb-2",children:"Title"}),e("input",{type:"text",id:"title",name:"title",placeholder:`Enter your new ${c} list name`,required:!0,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"})]}),s("div",{className:"mb-4",children:[s("label",{htmlFor:"file",className:"block text-gray-700 text-sm font-bold mb-2",children:["Upload your ",c," list"]}),e("input",{className:"block w-full py-2 px-3 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer  dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",id:"excess-bom-file",type:"file",onChange:j}),e("p",{className:"text-gray-600 text-xs italic mt-2",children:"* Please kindly note that there is a maximum limit of 1000 rows allowed in a single sheet of an Excel file."}),e("button",{type:"button",onClick:$,className:"mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Download Sample Data"})]}),s("div",{className:"flex items-center justify-between mb-4",children:[e("label",{htmlFor:"has_header",className:"block text-gray-700 text-sm font-bold mb-2",children:"Files has a Header"}),s("div",{className:"relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in",children:[e("input",{type:"checkbox",name:"has_header",id:"has_header",checked:h,onChange:()=>B(!h),className:"toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"}),e("label",{htmlFor:"has_header",className:"toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"})]})]}),s("div",{className:"mb-4",children:[e("label",{htmlFor:"ignored_top_rows",className:"block text-gray-700 text-sm font-bold mb-2",children:"Ignored rows from top"}),e("input",{type:"number",id:"ignored_top_rows",name:"ignored_top_rows",min:"0",value:g,onChange:a=>P(a.target.value),className:"shadow appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"})]}),e("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:f})]})]})]})]})})};export{ee as default};
