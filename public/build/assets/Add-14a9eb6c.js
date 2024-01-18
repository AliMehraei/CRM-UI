import{u as m,a as g,d as i,r as p,b as l,F as d,j as a,a_ as c,a$ as w,S as y,b0 as F,A as S,b1 as P,c as k,s as I,aI as x,e as j}from"./main-396129fe.js";import{A}from"./ActionButtonsComponent-956a7de1.js";import{G as u}from"./GenerateFields-a12d4397.js";import{F as N}from"./index-01ab0391.js";/* empty css                  */import"./index-41a4595b.js";const R=()=>{const o=m();new g;const t=i(n=>n.userForm),r=(n,f)=>{o(c({[n]:f}))},[e,s]=p.useState(!1),[O,b]=p.useState(""),_=()=>{const n=F();b(n),w(n),r("password",n),v("Password copied to clipboard!")},C=()=>{s(!e)},v=(n="",f="success")=>{y.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3,customClass:{container:"toast"}}).fire({icon:f,title:n,padding:"10px 20px"})},h=i(n=>n.formErrors);return l(d,{children:[a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(u,{fields:{Header:{"First Name":a("input",{id:"first_name",name:"first_name",className:"form-input flex-1 ",onChange:n=>r(n.target.name,n.target.value)}),"Last Name":a("input",{id:"last_name",name:"last_name",className:"form-input flex-1 ",onChange:n=>r(n.target.name,n.target.value)}),Alias:a("input",{id:"alias",name:"alias",className:"form-input flex-1 ",onChange:n=>r(n.target.name,n.target.value)}),"Date of birth":a(N,{options:{dateFormat:"Y-m-d ",position:"auto left"},name:"date_of_birth",value:"",className:"form-input flex-1",onChange:(n,f)=>r("date_of_birth",f)})},"":{Email:a("input",{id:"email",name:"email",className:"form-input flex-1 ",onChange:n=>r(n.target.name,n.target.value)}),Phone:a("input",{id:"phone",name:"phone",className:"form-input flex-1 ",onChange:n=>r(n.target.name,n.target.value)}),Mobile:a("input",{id:"mobile",name:"mobile",className:"form-input flex-1 ",onChange:n=>r(n.target.name,n.target.value)})}}})}),a("div",{className:"flex justify-between lg:flex-row flex-col",children:l("div",{className:"mt-4 items-center",children:[l("div",{className:"flex",children:[a("label",{className:"ltr:mr-2 rtl:ml-2  mb-0 mt-2",htmlFor:"password",children:"Password:"}),l("div",{className:"w-full flex items-center",children:[a("div",{className:"password-input-container",children:a("input",{type:e?"text":"password",id:"password",name:"password",value:t.password,className:"form-input flex-1",onChange:n=>r(n.target.name,n.target.value),autoComplete:"off"})}),a("button",{type:"button",onClick:C,className:"password-toggle-button btn btn-sm btn-outline-info m-2",children:e?"Hide":"Show"})]}),a("button",{type:"button",onClick:_,className:"generate-password-button btn btn-sm btn-outline-primary m-2",children:"Generate&Copy"})]}),h.password&&l("div",{className:"text-red-500 mt-2",children:[h.password," "]})]})})]})},E=()=>{const o=m();new g,i(e=>e.userForm);const t=(e,s)=>{o(c({[e]:s}))};return a(d,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(u,{fields:{"Contact Information":{Street:a("input",{id:"street",name:"street",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)}),City:a("input",{id:"city",name:"city",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)}),State:a("input",{id:"state",name:"state",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)}),Country:a("input",{id:"country",name:"country",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)})},"":{"Zip Code":a("input",{id:"zip_code",name:"zip_code",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)}),Fax:a("input",{id:"fax",name:"fax",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)}),Website:a("input",{id:"website",name:"website",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)})}}})})})},T=()=>{const o=m();new g,i(e=>e.userForm);const t=(e,s)=>{o(c({[e]:s}))};return a(d,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(u,{fields:{Preference:{Language:a("input",{id:"language",name:"language",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)}),Locale:a("input",{id:"country_locale",name:"country_locale",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)}),"Time Zone":a("input",{id:"time_zone",name:"time_zone",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)}),"Time Format":a("input",{id:"time_format",name:"time_format",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)}),"Date Format":a("input",{id:"date_format",name:"date_format",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)})},"":{Decimal:a("input",{id:"decimal",name:"decimal",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)}),"Sort Order Preference":a("input",{id:"sort_order_preference",name:"sort_order_preference",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)}),"Name Format":a("input",{id:"name_format",name:"name_format",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)})}}})})})},z=()=>{const o=m();new g,i(e=>e.userForm);const t=(e,s)=>{o(c({[e]:s}))};return a(d,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(u,{fields:{Other:{Grouping:a("input",{id:"grouping",name:"grouping",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)}),"Status Reason":a("input",{id:"status_reason",name:"status_reason",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)})},"":{Type:a("input",{id:"type",name:"type",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)}),Zuid:a("input",{id:"zuid",name:"zuid",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)})}}})})})},G=()=>{const o=m();new g,i(e=>e.userForm);const t=(e,s)=>{o(c({[e]:s}))};return a(d,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(u,{fields:{"Shift Information ":{"Current Shift Id":a("input",{id:"current_shift_id",name:"current_shift_id",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)}),"Next Shift Id":a("input",{id:"next_shift_id",name:"next_shift_id",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)})},"":{"Shift Effective From":a(N,{options:{dateFormat:"Y-m-d H:i",position:"auto left"},name:"shift_effective_from",value:"",className:"form-input flex-1",onChange:(e,s)=>t("shift_effective_from",s)})}}})})})},D=()=>{const o=m();i(e=>e.userForm);const t=(e,s)=>{o(c({[e]:s}))};return a(d,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(u,{fields:{Roles:{Roles:a(S,{defaultOptions:!0,isMulti:!0,id:"roles_id",placeholder:"Type at least 2 characters to search...",name:"roles_id",loadOptions:P,onChange:e=>{t("roles_id",e.map(s=>s.value))},className:"flex-1"}),"Role Id":a("input",{id:"role_id",name:"role_id",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)}),"Added By Id":a("input",{id:"added_by_id",name:"added_by_id",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)}),"Profile Id":a("input",{id:"profile_id",name:"profile_id",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)})},"":{"Reporting To Id":a("input",{id:"reporting_to_id",name:"reporting_to_id",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)}),"User Status":a("input",{id:"user_status",name:"user_status",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)}),"Confirmation Status":a("input",{type:"checkbox",id:"confirmation_status",name:"confirmation_status",className:"form-checkbox  ",onChange:e=>t(e.target.name,e.target.checked)})}}})})})},H=()=>l("div",{className:"mt-8 px-4",children:[a(R,{}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(E,{}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(T,{}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(D,{}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(G,{}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(z,{})]}),W=()=>{const{hasPermission:o}=k(),t=i(e=>e.userForm),r=m();return p.useEffect(()=>{r(I("User Add"))}),p.useEffect(()=>{r(x())},[]),o("create-user")?l("div",{className:"px-4",children:[a(A,{formState:t,resetForm:x}),a("div",{className:"flex xl:flex-row flex-col gap-2.5",children:a("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:a(H,{})})})]}):a(j,{})};export{W as default};
