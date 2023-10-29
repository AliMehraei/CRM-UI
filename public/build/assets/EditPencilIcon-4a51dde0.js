import{r as a,a3 as I,b as ee,F as me,j as be}from"./main-8d5d8e48.js";import{S as Y,D as H,y as j,a as Se,m as oe,s as ce,o as g,h as ye,T as Ee,u as A,X as z,I as K,k as N,d as te,p as ne,c as ge,O as G,M as L,e as he,N as re}from"./use-is-mounted-79c74be6.js";import{n as le,b as Ce,e as $e,E as Ie,h as we,g as xe,d as W,r as pe,a as de,C as ve,s as R}from"./transition-dfb331eb.js";import{s as Te}from"./use-resolve-button-type-f84be91f.js";var Fe=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Fe||{}),Me=(e=>(e[e.TogglePopover=0]="TogglePopover",e[e.ClosePopover=1]="ClosePopover",e[e.SetButton=2]="SetButton",e[e.SetButtonId=3]="SetButtonId",e[e.SetPanel=4]="SetPanel",e[e.SetPanelId=5]="SetPanelId",e))(Me||{});let ke={0:e=>{let o={...e,popoverState:A(e.popoverState,{0:1,1:0})};return o.popoverState===0&&(o.__demoMode=!1),o},1(e){return e.popoverState===1?e:{...e,popoverState:1}},2(e,o){return e.button===o.button?e:{...e,button:o.button}},3(e,o){return e.buttonId===o.buttonId?e:{...e,buttonId:o.buttonId}},4(e,o){return e.panel===o.panel?e:{...e,panel:o.panel}},5(e,o){return e.panelId===o.panelId?e:{...e,panelId:o.panelId}}},ae=a.createContext(null);ae.displayName="PopoverContext";function J(e){let o=a.useContext(ae);if(o===null){let m=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(m,J),m}return o}let ue=a.createContext(null);ue.displayName="PopoverAPIContext";function se(e){let o=a.useContext(ue);if(o===null){let m=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(m,se),m}return o}let ie=a.createContext(null);ie.displayName="PopoverGroupContext";function fe(){return a.useContext(ie)}let Q=a.createContext(null);Q.displayName="PopoverPanelContext";function Oe(){return a.useContext(Q)}function Be(e,o){return A(o.type,ke,e,o)}let De="div";function Le(e,o){var m;let{__demoMode:h=!1,...w}=e,l=a.useRef(null),t=j(o,Se(u=>{l.current=u})),S=a.useRef([]),b=a.useReducer(Be,{__demoMode:h,popoverState:h?0:1,buttons:S,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:a.createRef(),afterPanelSentinel:a.createRef()}),[{popoverState:E,button:i,buttonId:C,panel:r,panelId:k,beforePanelSentinel:P,afterPanelSentinel:c},p]=b,y=le((m=l.current)!=null?m:i),M=a.useMemo(()=>{if(!i||!r)return!1;for(let X of document.querySelectorAll("body > *"))if(Number(X==null?void 0:X.contains(i))^Number(X==null?void 0:X.contains(r)))return!0;let u=oe(),x=u.indexOf(i),U=(x+u.length-1)%u.length,q=(x+1)%u.length,V=u[U],Pe=u[q];return!r.contains(V)&&!r.contains(Pe)},[i,r]),T=ce(C),_=ce(k),O=a.useMemo(()=>({buttonId:T,panelId:_,close:()=>p({type:1})}),[T,_,p]),B=fe(),s=B==null?void 0:B.registerPopover,$=g(()=>{var u;return(u=B==null?void 0:B.isFocusWithinPopoverGroup())!=null?u:(y==null?void 0:y.activeElement)&&((i==null?void 0:i.contains(y.activeElement))||(r==null?void 0:r.contains(y.activeElement)))});a.useEffect(()=>s==null?void 0:s(O),[s,O]);let[d,F]=Ce(),n=$e({portals:d,defaultContainers:[i,r]});Ie(y==null?void 0:y.defaultView,"focus",u=>{var x,U,q,V;u.target!==window&&u.target instanceof HTMLElement&&E===0&&($()||i&&r&&(n.contains(u.target)||(U=(x=P.current)==null?void 0:x.contains)!=null&&U.call(x,u.target)||(V=(q=c.current)==null?void 0:q.contains)!=null&&V.call(q,u.target)||p({type:1})))},!0),we(n.resolveContainers,(u,x)=>{p({type:1}),ye(x,Ee.Loose)||(u.preventDefault(),i==null||i.focus())},E===0);let v=g(u=>{p({type:1});let x=(()=>u?u instanceof HTMLElement?u:"current"in u&&u.current instanceof HTMLElement?u.current:i:i)();x==null||x.focus()}),f=a.useMemo(()=>({close:v,isPortalled:M}),[v,M]),D=a.useMemo(()=>({open:E===0,close:v}),[E,v]),Z={ref:t};return I.createElement(Q.Provider,{value:null},I.createElement(ae.Provider,{value:b},I.createElement(ue.Provider,{value:f},I.createElement(xe,{value:A(E,{0:W.Open,1:W.Closed})},I.createElement(F,null,z({ourProps:Z,theirProps:w,slot:D,defaultTag:De,name:"Popover"}),I.createElement(n.MainTreeNode,null))))))}let Re="button";function _e(e,o){let m=K(),{id:h=`headlessui-popover-button-${m}`,...w}=e,[l,t]=J("Popover.Button"),{isPortalled:S}=se("Popover.Button"),b=a.useRef(null),E=`headlessui-focus-sentinel-${K()}`,i=fe(),C=i==null?void 0:i.closeOthers,r=Oe()!==null;a.useEffect(()=>{if(!r)return t({type:3,buttonId:h}),()=>{t({type:3,buttonId:null})}},[r,h,t]);let[k]=a.useState(()=>Symbol()),P=j(b,o,r?null:n=>{if(n)l.buttons.current.push(k);else{let v=l.buttons.current.indexOf(k);v!==-1&&l.buttons.current.splice(v,1)}l.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),n&&t({type:2,button:n})}),c=j(b,o),p=le(b),y=g(n=>{var v,f,D;if(r){if(l.popoverState===1)return;switch(n.key){case N.Space:case N.Enter:n.preventDefault(),(f=(v=n.target).click)==null||f.call(v),t({type:1}),(D=l.button)==null||D.focus();break}}else switch(n.key){case N.Space:case N.Enter:n.preventDefault(),n.stopPropagation(),l.popoverState===1&&(C==null||C(l.buttonId)),t({type:0});break;case N.Escape:if(l.popoverState!==0)return C==null?void 0:C(l.buttonId);if(!b.current||p!=null&&p.activeElement&&!b.current.contains(p.activeElement))return;n.preventDefault(),n.stopPropagation(),t({type:1});break}}),M=g(n=>{r||n.key===N.Space&&n.preventDefault()}),T=g(n=>{var v,f;pe(n.currentTarget)||e.disabled||(r?(t({type:1}),(v=l.button)==null||v.focus()):(n.preventDefault(),n.stopPropagation(),l.popoverState===1&&(C==null||C(l.buttonId)),t({type:0}),(f=l.button)==null||f.focus()))}),_=g(n=>{n.preventDefault(),n.stopPropagation()}),O=l.popoverState===0,B=a.useMemo(()=>({open:O}),[O]),s=Te(e,b),$=r?{ref:c,type:s,onKeyDown:y,onClick:T}:{ref:P,id:l.buttonId,type:s,"aria-expanded":l.popoverState===0,"aria-controls":l.panel?l.panelId:void 0,onKeyDown:y,onKeyUp:M,onClick:T,onMouseDown:_},d=de(),F=g(()=>{let n=l.panel;if(!n)return;function v(){A(d.current,{[R.Forwards]:()=>G(n,L.First),[R.Backwards]:()=>G(n,L.Last)})===re.Error&&G(oe().filter(f=>f.dataset.headlessuiFocusGuard!=="true"),A(d.current,{[R.Forwards]:L.Next,[R.Backwards]:L.Previous}),{relativeTo:l.button})}v()});return I.createElement(I.Fragment,null,z({ourProps:$,theirProps:w,slot:B,defaultTag:Re,name:"Popover.Button"}),O&&!r&&S&&I.createElement(te,{id:E,features:ne.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:F}))}let Ne="div",Ge=Y.RenderStrategy|Y.Static;function Ae(e,o){let m=K(),{id:h=`headlessui-popover-overlay-${m}`,...w}=e,[{popoverState:l},t]=J("Popover.Overlay"),S=j(o),b=ve(),E=(()=>b!==null?(b&W.Open)===W.Open:l===0)(),i=g(r=>{if(pe(r.currentTarget))return r.preventDefault();t({type:1})}),C=a.useMemo(()=>({open:l===0}),[l]);return z({ourProps:{ref:S,id:h,"aria-hidden":!0,onClick:i},theirProps:w,slot:C,defaultTag:Ne,features:Ge,visible:E,name:"Popover.Overlay"})}let Ke="div",je=Y.RenderStrategy|Y.Static;function We(e,o){let m=K(),{id:h=`headlessui-popover-panel-${m}`,focus:w=!1,...l}=e,[t,S]=J("Popover.Panel"),{close:b,isPortalled:E}=se("Popover.Panel"),i=`headlessui-focus-sentinel-before-${K()}`,C=`headlessui-focus-sentinel-after-${K()}`,r=a.useRef(null),k=j(r,o,s=>{S({type:4,panel:s})}),P=le(r);ge(()=>(S({type:5,panelId:h}),()=>{S({type:5,panelId:null})}),[h,S]);let c=ve(),p=(()=>c!==null?(c&W.Open)===W.Open:t.popoverState===0)(),y=g(s=>{var $;switch(s.key){case N.Escape:if(t.popoverState!==0||!r.current||P!=null&&P.activeElement&&!r.current.contains(P.activeElement))return;s.preventDefault(),s.stopPropagation(),S({type:1}),($=t.button)==null||$.focus();break}});a.useEffect(()=>{var s;e.static||t.popoverState===1&&((s=e.unmount)==null||s)&&S({type:4,panel:null})},[t.popoverState,e.unmount,e.static,S]),a.useEffect(()=>{if(t.__demoMode||!w||t.popoverState!==0||!r.current)return;let s=P==null?void 0:P.activeElement;r.current.contains(s)||G(r.current,L.First)},[t.__demoMode,w,r,t.popoverState]);let M=a.useMemo(()=>({open:t.popoverState===0,close:b}),[t,b]),T={ref:k,id:h,onKeyDown:y,onBlur:w&&t.popoverState===0?s=>{var $,d,F,n,v;let f=s.relatedTarget;f&&r.current&&(($=r.current)!=null&&$.contains(f)||(S({type:1}),((F=(d=t.beforePanelSentinel.current)==null?void 0:d.contains)!=null&&F.call(d,f)||(v=(n=t.afterPanelSentinel.current)==null?void 0:n.contains)!=null&&v.call(n,f))&&f.focus({preventScroll:!0})))}:void 0,tabIndex:-1},_=de(),O=g(()=>{let s=r.current;if(!s)return;function $(){A(_.current,{[R.Forwards]:()=>{var d;G(s,L.First)===re.Error&&((d=t.afterPanelSentinel.current)==null||d.focus())},[R.Backwards]:()=>{var d;(d=t.button)==null||d.focus({preventScroll:!0})}})}$()}),B=g(()=>{let s=r.current;if(!s)return;function $(){A(_.current,{[R.Forwards]:()=>{var d;if(!t.button)return;let F=oe(),n=F.indexOf(t.button),v=F.slice(0,n+1),f=[...F.slice(n+1),...v];for(let D of f.slice())if(D.dataset.headlessuiFocusGuard==="true"||(d=t.panel)!=null&&d.contains(D)){let Z=f.indexOf(D);Z!==-1&&f.splice(Z,1)}G(f,L.First,{sorted:!1})},[R.Backwards]:()=>{var d;G(s,L.Previous)===re.Error&&((d=t.button)==null||d.focus())}})}$()});return I.createElement(Q.Provider,{value:h},p&&E&&I.createElement(te,{id:i,ref:t.beforePanelSentinel,features:ne.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:O}),z({ourProps:T,theirProps:l,slot:M,defaultTag:Ke,features:je,visible:p,name:"Popover.Panel"}),p&&E&&I.createElement(te,{id:C,ref:t.afterPanelSentinel,features:ne.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:B}))}let qe="div";function He(e,o){let m=a.useRef(null),h=j(m,o),[w,l]=a.useState([]),t=g(P=>{l(c=>{let p=c.indexOf(P);if(p!==-1){let y=c.slice();return y.splice(p,1),y}return c})}),S=g(P=>(l(c=>[...c,P]),()=>t(P))),b=g(()=>{var P;let c=he(m);if(!c)return!1;let p=c.activeElement;return(P=m.current)!=null&&P.contains(p)?!0:w.some(y=>{var M,T;return((M=c.getElementById(y.buttonId.current))==null?void 0:M.contains(p))||((T=c.getElementById(y.panelId.current))==null?void 0:T.contains(p))})}),E=g(P=>{for(let c of w)c.buttonId.current!==P&&c.close()}),i=a.useMemo(()=>({registerPopover:S,unregisterPopover:t,isFocusWithinPopoverGroup:b,closeOthers:E}),[S,t,b,E]),C=a.useMemo(()=>({}),[]),r=e,k={ref:h};return I.createElement(ie.Provider,{value:i},z({ourProps:k,theirProps:r,slot:C,defaultTag:qe,name:"Popover.Group"}))}let ze=H(Le),Ze=H(_e),Ue=H(Ae),Ve=H(We),Xe=H(He),tt=Object.assign(ze,{Button:Ze,Overlay:Ue,Panel:Ve,Group:Xe});const nt=()=>ee(me,{children:be("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[ee("path",{d:"M11.4001 18.1612L11.4001 18.1612L18.796 10.7653C17.7894 10.3464 16.5972 9.6582 15.4697 8.53068C14.342 7.40298 13.6537 6.21058 13.2348 5.2039L5.83882 12.5999L5.83879 12.5999C5.26166 13.1771 4.97307 13.4657 4.7249 13.7838C4.43213 14.1592 4.18114 14.5653 3.97634 14.995C3.80273 15.3593 3.67368 15.7465 3.41556 16.5208L2.05445 20.6042C1.92743 20.9852 2.0266 21.4053 2.31063 21.6894C2.59466 21.9734 3.01478 22.0726 3.39584 21.9456L7.47918 20.5844C8.25351 20.3263 8.6407 20.1973 9.00498 20.0237C9.43469 19.8189 9.84082 19.5679 10.2162 19.2751C10.5343 19.0269 10.823 18.7383 11.4001 18.1612Z",fill:"currentColor"}),ee("path",{d:"M20.8482 8.71306C22.3839 7.17735 22.3839 4.68748 20.8482 3.15178C19.3125 1.61607 16.8226 1.61607 15.2869 3.15178L14.3999 4.03882C14.4121 4.0755 14.4246 4.11268 14.4377 4.15035C14.7628 5.0875 15.3763 6.31601 16.5303 7.47002C17.6843 8.62403 18.9128 9.23749 19.85 9.56262C19.8875 9.57563 19.9245 9.58817 19.961 9.60026L20.8482 8.71306Z",fill:"currentColor"})]})});export{nt as E,tt as k};
