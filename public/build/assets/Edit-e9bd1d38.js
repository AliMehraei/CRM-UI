import{c as x,d as h,r as a,h as k,u as g,s as E,b9 as i,b7 as n,j as t,e as c,b as S,a as D}from"./main-d43b918e.js";import{A as T}from"./ActionButtonsComponent-7872802a.js";/* empty css                  */import"./index-b5b67a75.js";const N=()=>{const{hasPermission:d}=x(),l=h(s=>s.taskForm),[o,p]=a.useState(!0),r=k().id,f=new D,e=g();a.useEffect(()=>{e(E("Task Edit"))}),a.useEffect(()=>{e(i())},[]);const m=async()=>{const s=await f.fetchSingleTask(r);if(s.status!=200)return;const u=s.data.data.task;e(n(u))};return a.useEffect(()=>{m().then(()=>{p(!1)})},[r]),a.useEffect(()=>{e(n({api:"updateSingleTask",redirectTo:"/task/edit/:id",action:"edit"}))},[]),o?t(c,{}):!d("update-task")||o?t(c,{}):S("div",{className:"px-4",children:[t(T,{formState:l,resetForm:i}),t("div",{className:"flex xl:flex-row flex-col gap-2.5",children:t("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden"})})]})};export{N as default};
