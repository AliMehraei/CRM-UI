import{u as o,a as m,b as a,F as u,ah as s,e as h,j as x,c as b,r as c,h as y,s as V,d as _,ai as S}from"./main-8c659d75.js";import{G as d,A as F}from"./GenerateFields-e427e4d2.js";import{F as N}from"./index-780f1f07.js";import{A as w}from"./react-select-async.esm-e686b623.js";import{y as D}from"./CommonFunctions-a8ba45d1.js";/* empty css                  */import"./sweetalert2.all-120fb9f5.js";import"./Select-aecb2a80.esm-4b2d5e83.js";const I=()=>{const l=o(),t=m(e=>e.userForm),n=(e,r)=>{l(s({[e]:r}))},i={Header:{"First Name":a("input",{id:"first_name",name:"first_name",className:"form-input flex-1 ",defaultValue:t.first_name,onChange:e=>n(e.target.name,e.target.value)}),"Last Name":a("input",{id:"last_name",name:"last_name",className:"form-input flex-1 ",defaultValue:t.last_name,onChange:e=>n(e.target.name,e.target.value)}),Alias:a("input",{id:"alias",name:"alias",className:"form-input flex-1 ",defaultValue:t.alias,onChange:e=>n(e.target.name,e.target.value)}),"Date of birth":a(N,{options:{dateFormat:"Y-m-d ",position:"auto left",defaultDate:`${t.date_of_birth?new Date(t.date_of_birth):""}`},defaultValue:t.date_of_birth,name:"date_of_birth",className:"form-input flex-1",onChange:(e,r)=>n("date_of_birth",r)})},"":{Email:a("input",{id:"email",name:"email",defaultValue:t.email,className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),Phone:a("input",{id:"phone",name:"phone",defaultValue:t.phone,className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),Mobile:a("input",{id:"mobile",name:"mobile",defaultValue:t.mobile,className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)})}};return a(u,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(d,{fields:i})})})},k=()=>{const l=o();new h;const t=m(e=>e.userForm),n=(e,r)=>{l(s({[e]:r}))},i={"Contact Information":{Street:a("input",{id:"street",name:"street",className:"form-input flex-1 ",defaultValue:t.street,onChange:e=>n(e.target.name,e.target.value)}),City:a("input",{id:"city",name:"city",className:"form-input flex-1 ",defaultValue:t.city,onChange:e=>n(e.target.name,e.target.value)}),State:a("input",{id:"state",name:"state",className:"form-input flex-1 ",defaultValue:t.state,onChange:e=>n(e.target.name,e.target.value)}),Country:a("input",{id:"country",name:"country",className:"form-input flex-1 ",defaultValue:t.country,onChange:e=>n(e.target.name,e.target.value)})},"":{"Zip Code":a("input",{id:"zip_code",name:"zip_code",className:"form-input flex-1 ",defaultValue:t.zip_code,onChange:e=>n(e.target.name,e.target.value)}),Fax:a("input",{id:"fax",name:"fax",className:"form-input flex-1 ",defaultValue:t.fax,onChange:e=>n(e.target.name,e.target.value)}),Website:a("input",{id:"website",name:"website",className:"form-input flex-1 ",defaultValue:t.website,onChange:e=>n(e.target.name,e.target.value)})}};return a(u,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(d,{fields:i})})})},j=()=>{const l=o(),t=m(e=>e.userForm),n=(e,r)=>{l(s({[e]:r}))},i={Preference:{Language:a("input",{id:"language",name:"language",defaultValue:t.language,className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),Locale:a("input",{id:"country_locale",name:"country_locale",defaultValue:t.country_locale,className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),"Time Zone":a("input",{id:"time_zone",name:"time_zone",defaultValue:t.time_zone,className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),"Time Format":a("input",{id:"time_format",name:"time_format",defaultValue:t.time_format,className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),"Date Format":a("input",{id:"date_format",name:"date_format",className:"form-input flex-1 ",defaultValue:t.date_format,onChange:e=>n(e.target.name,e.target.value)})},"":{Decimal:a("input",{id:"decimal",name:"decimal",className:"form-input flex-1 ",defaultValue:t.decimal,onChange:e=>n(e.target.name,e.target.value)}),"Sort Order Preference":a("input",{id:"sort_order_preference",name:"sort_order_preference",className:"form-input flex-1 ",defaultValue:t.sort_order_preference,onChange:e=>n(e.target.name,e.target.value)}),"Name Format":a("input",{id:"name_format",name:"name_format",className:"form-input flex-1 ",defaultValue:t.name_format,onChange:e=>n(e.target.name,e.target.value)})}};return a(u,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(d,{fields:i})})})},z=()=>{const l=o();new h;const t=m(e=>e.userForm),n=(e,r)=>{l(s({[e]:r}))},i={Other:{Grouping:a("input",{id:"grouping",name:"grouping",className:"form-input flex-1 ",defaultValue:t.grouping,onChange:e=>n(e.target.name,e.target.value)}),"Status Reason":a("input",{id:"status_reason",name:"status_reason",className:"form-input flex-1 ",defaultValue:t.status_reason,onChange:e=>n(e.target.name,e.target.value)})},"":{Type:a("input",{id:"type",name:"type",className:"form-input flex-1 ",defaultValue:t.type,onChange:e=>n(e.target.name,e.target.value)}),Zuid:a("input",{id:"zuid",name:"zuid",className:"form-input flex-1 ",defaultValue:t.zuid,onChange:e=>n(e.target.name,e.target.value)})}};return a(u,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(d,{fields:i})})})},E=()=>{const l=o(),t=m(e=>e.userForm),n=(e,r)=>{l(s({[e]:r}))},i={"Shift Information ":{"Current Shift Id":a("input",{id:"current_shift_id",name:"current_shift_id",className:"form-input flex-1 ",defaultValue:t.current_shift_id,onChange:e=>n(e.target.name,e.target.value)}),"Next Shift Id":a("input",{id:"next_shift_id",name:"next_shift_id",className:"form-input flex-1 ",defaultValue:t.next_shift_id,onChange:e=>n(e.target.name,e.target.value)})},"":{"Shift Effective From":a(N,{options:{dateFormat:"Y-m-d H:i",position:"auto left",defaultDate:`${t.shift_effective_from?new Date(t.shift_effective_from):""}`},defaultValue:t.shift_effective_from,name:"shift_effective_from",className:"form-input flex-1",onChange:(e,r)=>n("shift_effective_from",r)})}};return a(u,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(d,{fields:i})})})},R=()=>{const l=o(),t=m(e=>e.userForm),n=(e,r)=>{l(s({[e]:r}))},i={Roles:{Roles:a(w,{isMulti:!0,id:"roles_id",placeholder:"Type at least 2 characters to search...",name:"roles_id",loadOptions:D,onChange:e=>{n("roles_id",e.map(r=>r.value))},className:"flex-1",defaultValue:t.roles?t.roles.map(e=>({value:e.id,label:a("div",{className:"flex items-center",children:a("div",{children:a("div",{className:"text-sm font-bold",children:e.name})})},e.id)})):[]}),"Role Id":a("input",{id:"role_id",name:"role_id",defaultValue:t.role_id,className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),"Added By Id":a("input",{id:"added_by_id",name:"added_by_id",defaultValue:t.added_by_id,className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),"Profile Id":a("input",{id:"profile_id",name:"profile_id",defaultValue:t.profile_id,className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)})},"":{"Reporting To Id":a("input",{id:"reporting_to_id",name:"reporting_to_id",defaultValue:t.reporting_to_id,className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),"User Status":a("input",{id:"user_status",name:"user_status",defaultValue:t.user_status,className:"form-input flex-1 ",onChange:e=>n(e.target.name,e.target.value)}),"Confirmation Status":a("input",{type:"checkbox",id:"confirmation_status",name:"confirmation_status",checked:t.confirmation_status,className:"form-checkbox  ",onChange:e=>n(e.target.name,e.target.checked)})}};return a(u,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(d,{fields:i})})})},U=()=>x("div",{className:"mt-8 px-4",children:[a(I,{}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(k,{}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(j,{}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(R,{}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(E,{}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(z,{})]}),Z=()=>{const{hasPermission:l}=b(),t=m(f=>f.userForm),[n,i]=c.useState(!0),r=y().id,v=new h,g=o();c.useEffect(()=>{g(V("User Edit"))});const C=async()=>{const f=await v.fetchSingleUser(r);if(f.status!=200)return;const p=f.data.data.user;p.oldImage=p.image,g(s(p))};return c.useEffect(()=>{C().then(()=>{i(!1)})},[r]),c.useEffect(()=>{g(s({api:"updateSingleUser",redirectTo:"/user/edit/:id",action:"edit"}))},[]),n?a(_,{}):!l("update-user")||n?a(_,{}):x("div",{className:"px-4",children:[a(F,{formState:t,resetForm:S}),a("div",{className:"flex xl:flex-row flex-col gap-2.5",children:a("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:a(U,{})})})]})};export{Z as default};
