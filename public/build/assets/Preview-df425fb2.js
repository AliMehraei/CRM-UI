import{c as w,u as S,r as s,h as j,a as C,s as I,b as a,d as v,j as i,f as P,aU as F,e as O}from"./main-8d5d8e48.js";import{I as U}from"./InfoListComponent-5c490f80.js";import{A as $,I as o}from"./InformationSectionPreview-6cb73669.js";import"./CommonIcons-710cb86d.js";const A=()=>{var m,c,b,d,f;const{hasPermission:n}=w(),u=S(),[l,h]=s.useState(!0),r=j().id,p=new O,e=C(t=>t.userForm);s.useEffect(()=>{u(I("User Preview"))});const _=()=>{window.print()},g=async()=>{const t=await p.fetchSingleUser(r);if(t.status!=200)return;const N=t.data.data.user;u(F(N))},y=(m=e.roles)==null?void 0:m.map(t=>t==null?void 0:t.name).join(", "),x=[{label:"First Name",value:`${e.first_name??""}`},{label:"Last Name",value:`${e.first_name??""}`},{label:"Role(s)",value:y},{label:"Email",value:a("a",{className:"text-primary",target:"_blank",rel:"noopener noreferrer",href:"mailto:"+e.email,children:e.email})},{label:"Phone",value:e.phone},{label:"Mobile",value:e.mobile},{label:"Fax",value:e.fax},{label:"Language",value:e.language},{label:"Country",value:e.country},{label:"Created By",value:`${((c=e.creator)==null?void 0:c.first_name)??""} ${((b=e.creator)==null?void 0:b.last_name)??""}`},{label:"Modified By",value:`${((d=e.modifier)==null?void 0:d.first_name)??""} ${((f=e.modifier)==null?void 0:f.last_name)??""}`}];return s.useEffect(()=>{g().then(()=>{h(!1)})},[r]),l?a(v,{}):!n("read-user")||l?a(v,{}):i("div",{children:[a("div",{className:"flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6",children:a($,{loading:l,hasPermission:n,modelId:r,exportTable:_,routeModel:"user",permissionModel:"user"})}),i("div",{className:"panel",children:[i("div",{className:"flex justify-between flex-wrap gap-4 px-4",children:[a("div",{className:"text-2xl font-semibold uppercase",children:"User"}),a("div",{className:"shrink-0",children:a("img",{src:P(e.avatar_data),alt:"User image",className:"w-20 ltr:ml-auto rtl:mr-auto"})})]}),a(U,{data:x}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(o,{title:"General Information",leftObjects:[{label:"Alias Name",value:e.alias},{label:"Date of Birth",value:e.date_of_birth},{label:"Website",value:a("a",{className:"text-primary",target:"_blank",rel:"noreferrer",href:e.website,children:e.website})},{label:"Currency",value:e.currency},{label:"Grouping",value:e.grouping},{label:"Zuid",value:e.zuid}],rightObjects:[{label:"Time Format",value:e.time_format},{label:"Name Format",value:e.name_format},{label:"Confirmation status",value:e.confirmation_status?"Yes":"No"},{label:"User Status",value:e.user_status},{label:"Email Verified at",value:e.email_verified_at},{label:"Status",value:e.status}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(o,{title:"Other",leftObjects:[{label:"Shift Effective From",value:e.shift_effective_from},{label:"Next Shift Id",value:e.next_shift_id},{label:"Current Shift Id",value:e.current_shift_id}],rightObjects:[{label:"Type",value:e.type},{label:"Status Reason",value:e.status_reason}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(o,{title:"Address Information",leftObjects:[{label:"Street",value:e.street},{label:"City",value:e.city},{label:"Zip Code",value:e.zip_code},{label:"State",value:e.state},{label:"Country",value:e.country}],rightObjects:[{label:"Country Locale",value:e.country_locale},{label:"Time Zone, value",value:e.time_zone}]})]})]})};export{A as default};
