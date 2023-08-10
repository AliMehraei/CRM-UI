import{r as a,R as v,d as wt,e as Re}from"./main-c01c532a.js";var yt=Object.defineProperty,$t=(e,t,n)=>t in e?yt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Se=(e,t,n)=>($t(e,typeof t!="symbol"?t+"":t,n),n);let Tt=class{constructor(){Se(this,"current",this.detect()),Se(this,"handoffState","pending"),Se(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},j=new Tt,R=(e,t)=>{j.isServer?a.useEffect(e,t):a.useLayoutEffect(e,t)};function I(e){let t=a.useRef(e);return R(()=>{t.current=e},[e]),t}function ge(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function J(){let e=[],t={addEventListener(n,r,o,u){return n.addEventListener(r,o,u),t.add(()=>n.removeEventListener(r,o,u))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);return t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...n))},setTimeout(...n){let r=setTimeout(...n);return t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return ge(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,o){let u=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:o}),this.add(()=>{Object.assign(n.style,{[r]:u})})},group(n){let r=J();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let o of e.splice(r,1))o()}},dispose(){for(let n of e.splice(0))n()}};return t}function Ie(){let[e]=a.useState(J);return a.useEffect(()=>()=>e.dispose(),[e]),e}let b=function(e){let t=I(e);return v.useCallback((...n)=>t.current(...n),[t])};function Q(){let[e,t]=a.useState(j.isHandoffComplete);return e&&j.isHandoffComplete===!1&&t(!1),a.useEffect(()=>{e!==!0&&t(!0)},[e]),a.useEffect(()=>j.handoff(),[]),e}var qe;let Z=(qe=v.useId)!=null?qe:function(){let e=Q(),[t,n]=v.useState(e?()=>j.nextId():null);return R(()=>{t===null&&n(j.nextId())},[t]),t!=null?""+t:void 0};function S(e,t,...n){if(e in t){let o=t[e];return typeof o=="function"?o(...n):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,S),r}function Xe(e){return j.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let Ne=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var q=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(q||{}),ze=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(ze||{}),St=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(St||{});function Pt(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Ne)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Je=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Je||{});function Lt(e,t=0){var n;return e===((n=Xe(e))==null?void 0:n.body)?!1:S(t,{0(){return e.matches(Ne)},1(){let r=e;for(;r!==null;){if(r.matches(Ne))return!0;r=r.parentElement}return!1}})}var Ft=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(Ft||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function G(e){e==null||e.focus({preventScroll:!0})}let Ct=["textarea","input"].join(",");function Ot(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Ct))!=null?n:!1}function Rt(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),u=t(r);if(o===null||u===null)return 0;let l=o.compareDocumentPosition(u);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function pe(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){let u=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,l=Array.isArray(e)?n?Rt(e):e:Pt(e);o.length>0&&l.length>1&&(l=l.filter(m=>!o.includes(m))),r=r??u.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,l.indexOf(r))-1;if(t&4)return Math.max(0,l.indexOf(r))+1;if(t&8)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=t&32?{preventScroll:!0}:{},d=0,p=l.length,g;do{if(d>=p||d+p<=0)return 0;let m=s+d;if(t&16)m=(m+p)%p;else{if(m<0)return 3;if(m>=p)return 1}g=l[m],g==null||g.focus(c),d+=i}while(g!==u.activeElement);return t&6&&Ot(g)&&g.select(),2}function de(e,t,n){let r=I(t);a.useEffect(()=>{function o(u){r.current(u)}return document.addEventListener(e,o,n),()=>document.removeEventListener(e,o,n)},[e,n])}function Qe(e,t,n){let r=I(t);a.useEffect(()=>{function o(u){r.current(u)}return window.addEventListener(e,o,n),()=>window.removeEventListener(e,o,n)},[e,n])}function Nt(e,t,n=!0){let r=a.useRef(!1);a.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function o(l,i){if(!r.current||l.defaultPrevented)return;let s=i(l);if(s===null||!s.getRootNode().contains(s)||!s.isConnected)return;let c=function d(p){return typeof p=="function"?d(p()):Array.isArray(p)||p instanceof Set?p:[p]}(e);for(let d of c){if(d===null)continue;let p=d instanceof HTMLElement?d:d.current;if(p!=null&&p.contains(s)||l.composed&&l.composedPath().includes(p))return}return!Lt(s,Je.Loose)&&s.tabIndex!==-1&&l.preventDefault(),t(l,s)}let u=a.useRef(null);de("pointerdown",l=>{var i,s;r.current&&(u.current=((s=(i=l.composedPath)==null?void 0:i.call(l))==null?void 0:s[0])||l.target)},!0),de("mousedown",l=>{var i,s;r.current&&(u.current=((s=(i=l.composedPath)==null?void 0:i.call(l))==null?void 0:s[0])||l.target)},!0),de("click",l=>{u.current&&(o(l,()=>u.current),u.current=null)},!0),de("touchend",l=>o(l,()=>l.target instanceof HTMLElement?l.target:null),!0),Qe("blur",l=>o(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}let Ze=Symbol();function xt(e,t=!0){return Object.assign(e,{[Ze]:t})}function N(...e){let t=a.useRef(e);a.useEffect(()=>{t.current=e},[e]);let n=b(r=>{for(let o of t.current)o!=null&&(typeof o=="function"?o(r):o.current=r)});return e.every(r=>r==null||(r==null?void 0:r[Ze]))?void 0:n}function xe(...e){return e.filter(Boolean).join(" ")}var me=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(me||{}),H=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(H||{});function O({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:u=!0,name:l}){let i=et(t,e);if(u)return fe(i,n,r,l);let s=o??0;if(s&2){let{static:c=!1,...d}=i;if(c)return fe(d,n,r,l)}if(s&1){let{unmount:c=!0,...d}=i;return S(c?0:1,{0(){return null},1(){return fe({...d,hidden:!0,style:{display:"none"}},n,r,l)}})}return fe(i,n,r,l)}function fe(e,t={},n,r){let{as:o=n,children:u,refName:l="ref",...i}=Pe(e,["unmount","static"]),s=e.ref!==void 0?{[l]:e.ref}:{},c=typeof u=="function"?u(t):u;"className"in i&&i.className&&typeof i.className=="function"&&(i.className=i.className(t));let d={};if(t){let p=!1,g=[];for(let[m,f]of Object.entries(t))typeof f=="boolean"&&(p=!0),f===!0&&g.push(m);p&&(d["data-headlessui-state"]=g.join(" "))}if(o===a.Fragment&&Object.keys(Ye(i)).length>0){if(!a.isValidElement(c)||Array.isArray(c)&&c.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(i).map(f=>`  - ${f}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(f=>`  - ${f}`).join(`
`)].join(`
`));let p=c.props,g=typeof(p==null?void 0:p.className)=="function"?(...f)=>xe(p==null?void 0:p.className(...f),i.className):xe(p==null?void 0:p.className,i.className),m=g?{className:g}:{};return a.cloneElement(c,Object.assign({},et(c.props,Ye(Pe(i,["ref"]))),d,s,Dt(c.ref,s.ref),m))}return a.createElement(o,Object.assign({},Pe(i,["ref"]),o!==a.Fragment&&s,o!==a.Fragment&&d),c)}function Dt(...e){return{ref:e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}}function et(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(n[o]!=null||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](o,...u){let l=n[r];for(let i of l){if((o instanceof Event||(o==null?void 0:o.nativeEvent)instanceof Event)&&o.defaultPrevented)return;i(o,...u)}}});return t}function F(e){var t;return Object.assign(a.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function Ye(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function Pe(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function Mt(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&At(n)?!1:r}function At(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let kt="div";var ve=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(ve||{});function Ht(e,t){let{features:n=1,...r}=e,o={ref:t,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return O({ourProps:o,theirProps:r,slot:{},defaultTag:kt,name:"Hidden"})}let De=F(Ht),Be=a.createContext(null);Be.displayName="OpenClosedContext";var L=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(L||{});function Ue(){return a.useContext(Be)}function jt({value:e,children:t}){return v.createElement(Be.Provider,{value:e},t)}var tt=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(tt||{});function _e(e,t){let n=a.useRef([]),r=b(e);a.useEffect(()=>{let o=[...n.current];for(let[u,l]of t.entries())if(n.current[u]!==l){let i=r(t,o);return n.current=t,i}},[r,...t])}function It(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}var le=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(le||{});function Bt(){let e=a.useRef(0);return Qe("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function ie(){let e=a.useRef(!1);return R(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function ue(...e){return a.useMemo(()=>Xe(...e),[...e])}function nt(e,t,n,r){let o=I(n);a.useEffect(()=>{e=e??window;function u(l){o.current(l)}return e.addEventListener(t,u,r),()=>e.removeEventListener(t,u,r)},[e,t,r])}function Ut(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function rt(e){let t=b(e),n=a.useRef(!1);a.useEffect(()=>(n.current=!1,()=>{n.current=!0,ge(()=>{n.current&&t()})}),[t])}function ot(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let _t="div";var lt=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(lt||{});function Wt(e,t){let n=a.useRef(null),r=N(n,t),{initialFocus:o,containers:u,features:l=30,...i}=e;Q()||(l=1);let s=ue(n);Yt({ownerDocument:s},!!(l&16));let c=Gt({ownerDocument:s,container:n,initialFocus:o},!!(l&2));Kt({ownerDocument:s,container:n,containers:u,previousActiveElement:c},!!(l&8));let d=Bt(),p=b(h=>{let E=n.current;E&&(w=>w())(()=>{S(d.current,{[le.Forwards]:()=>{pe(E,q.First,{skipElements:[h.relatedTarget]})},[le.Backwards]:()=>{pe(E,q.Last,{skipElements:[h.relatedTarget]})}})})}),g=Ie(),m=a.useRef(!1),f={ref:r,onKeyDown(h){h.key=="Tab"&&(m.current=!0,g.requestAnimationFrame(()=>{m.current=!1}))},onBlur(h){let E=ot(u);n.current instanceof HTMLElement&&E.add(n.current);let w=h.relatedTarget;w instanceof HTMLElement&&w.dataset.headlessuiFocusGuard!=="true"&&(it(E,w)||(m.current?pe(n.current,S(d.current,{[le.Forwards]:()=>q.Next,[le.Backwards]:()=>q.Previous})|q.WrapAround,{relativeTo:h.target}):h.target instanceof HTMLElement&&G(h.target)))}};return v.createElement(v.Fragment,null,!!(l&4)&&v.createElement(De,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:p,features:ve.Focusable}),O({ourProps:f,theirProps:i,defaultTag:_t,name:"FocusTrap"}),!!(l&4)&&v.createElement(De,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:p,features:ve.Focusable}))}let Vt=F(Wt),re=Object.assign(Vt,{features:lt}),U=[];Ut(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&U[0]!==t.target&&(U.unshift(t.target),U=U.filter(n=>n!=null&&n.isConnected),U.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function qt(e=!0){let t=a.useRef(U.slice());return _e(([n],[r])=>{r===!0&&n===!1&&ge(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=U.slice())},[e,U,t]),b(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function Yt({ownerDocument:e},t){let n=qt(t);_e(()=>{t||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&G(n())},[t]),rt(()=>{t&&G(n())})}function Gt({ownerDocument:e,container:t,initialFocus:n},r){let o=a.useRef(null),u=ie();return _e(()=>{if(!r)return;let l=t.current;l&&ge(()=>{if(!u.current)return;let i=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===i){o.current=i;return}}else if(l.contains(i)){o.current=i;return}n!=null&&n.current?G(n.current):pe(l,q.First)===ze.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=e==null?void 0:e.activeElement})},[r]),o}function Kt({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let u=ie();nt(e==null?void 0:e.defaultView,"focus",l=>{if(!o||!u.current)return;let i=ot(n);t.current instanceof HTMLElement&&i.add(t.current);let s=r.current;if(!s)return;let c=l.target;c&&c instanceof HTMLElement?it(i,c)?(r.current=c,G(c)):(l.preventDefault(),l.stopPropagation(),G(s)):G(r.current)},!0)}function it(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let ut=a.createContext(!1);function Xt(){return a.useContext(ut)}function Me(e){return v.createElement(ut.Provider,{value:e.force},e.children)}function zt(e){let t=Xt(),n=a.useContext(at),r=ue(e),[o,u]=a.useState(()=>{if(!t&&n!==null||j.isServer)return null;let l=r==null?void 0:r.getElementById("headlessui-portal-root");if(l)return l;if(r===null)return null;let i=r.createElement("div");return i.setAttribute("id","headlessui-portal-root"),r.body.appendChild(i)});return a.useEffect(()=>{o!==null&&(r!=null&&r.body.contains(o)||r==null||r.body.appendChild(o))},[o,r]),a.useEffect(()=>{t||n!==null&&u(n.current)},[n,u,t]),o}let Jt=a.Fragment;function Qt(e,t){let n=e,r=a.useRef(null),o=N(xt(d=>{r.current=d}),t),u=ue(r),l=zt(r),[i]=a.useState(()=>{var d;return j.isServer?null:(d=u==null?void 0:u.createElement("div"))!=null?d:null}),s=a.useContext(Ae),c=Q();return R(()=>{!l||!i||l.contains(i)||(i.setAttribute("data-headlessui-portal",""),l.appendChild(i))},[l,i]),R(()=>{if(i&&s)return s.register(i)},[s,i]),rt(()=>{var d;!l||!i||(i instanceof Node&&l.contains(i)&&l.removeChild(i),l.childNodes.length<=0&&((d=l.parentElement)==null||d.removeChild(l)))}),c?!l||!i?null:wt.createPortal(O({ourProps:{ref:o},theirProps:n,defaultTag:Jt,name:"Portal"}),i):null}let Zt=a.Fragment,at=a.createContext(null);function en(e,t){let{target:n,...r}=e,o={ref:N(t)};return v.createElement(at.Provider,{value:n},O({ourProps:o,theirProps:r,defaultTag:Zt,name:"Popover.Group"}))}let Ae=a.createContext(null);function tn(){let e=a.useContext(Ae),t=a.useRef([]),n=b(u=>(t.current.push(u),e&&e.register(u),()=>r(u))),r=b(u=>{let l=t.current.indexOf(u);l!==-1&&t.current.splice(l,1),e&&e.unregister(u)}),o=a.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,a.useMemo(()=>function({children:u}){return v.createElement(Ae.Provider,{value:o},u)},[o])]}let nn=F(Qt),rn=F(en),ke=Object.assign(nn,{Group:rn}),st=a.createContext(null);function ct(){let e=a.useContext(st);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,ct),t}return e}function on(){let[e,t]=a.useState([]);return[e.length>0?e.join(" "):void 0,a.useMemo(()=>function(n){let r=b(u=>(t(l=>[...l,u]),()=>t(l=>{let i=l.slice(),s=i.indexOf(u);return s!==-1&&i.splice(s,1),i}))),o=a.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return v.createElement(st.Provider,{value:o},n.children)},[t])]}let ln="p";function un(e,t){let n=Z(),{id:r=`headlessui-description-${n}`,...o}=e,u=ct(),l=N(t);R(()=>u.register(r),[r,u.register]);let i={ref:l,...u.props,id:r};return O({ourProps:i,theirProps:o,slot:u.slot||{},defaultTag:ln,name:u.name||"Description"})}let an=F(un),sn=Object.assign(an,{}),We=a.createContext(()=>{});We.displayName="StackContext";var He=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(He||{});function cn(){return a.useContext(We)}function dn({children:e,onUpdate:t,type:n,element:r,enabled:o}){let u=cn(),l=b((...i)=>{t==null||t(...i),u(...i)});return R(()=>{let i=o===void 0||o===!0;return i&&l(0,n,r),()=>{i&&l(1,n,r)}},[l,n,r,o]),v.createElement(We.Provider,{value:l},e)}function fn(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const pn=typeof Object.is=="function"?Object.is:fn,{useState:mn,useEffect:vn,useLayoutEffect:hn,useDebugValue:gn}=Re;function En(e,t,n){const r=t(),[{inst:o},u]=mn({inst:{value:r,getSnapshot:t}});return hn(()=>{o.value=r,o.getSnapshot=t,Le(o)&&u({inst:o})},[e,r,t]),vn(()=>(Le(o)&&u({inst:o}),e(()=>{Le(o)&&u({inst:o})})),[e]),gn(r),r}function Le(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!pn(n,r)}catch{return!0}}function bn(e,t,n){return t()}const wn=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",yn=!wn,$n=yn?bn:En,Tn="useSyncExternalStore"in Re?(e=>e.useSyncExternalStore)(Re):$n;function Sn(e){return Tn(e.subscribe,e.getSnapshot,e.getSnapshot)}function Pn(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(o){return r.add(o),()=>r.delete(o)},dispatch(o,...u){let l=t[o].call(n,...u);l&&(n=l,r.forEach(i=>i()))}}}function Ln(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,o=r.clientWidth-r.offsetWidth,u=e-o;n.style(r,"paddingRight",`${u}px`)}}}function Fn(){if(!It())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function o(l){return r.containers.flatMap(i=>i()).some(i=>i.contains(l))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let u=null;n.addEventListener(t,"click",l=>{if(l.target instanceof HTMLElement)try{let i=l.target.closest("a");if(!i)return;let{hash:s}=new URL(i.href),c=t.querySelector(s);c&&!o(c)&&(u=c)}catch{}},!0),n.addEventListener(t,"touchmove",l=>{l.target instanceof HTMLElement&&!o(l.target)&&l.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),u&&u.isConnected&&(u.scrollIntoView({block:"nearest"}),u=null)})}}}function Cn(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function On(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let Y=Pn(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:J(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:On(n)},o=[Fn(),Ln(),Cn()];o.forEach(({before:u})=>u==null?void 0:u(r)),o.forEach(({after:u})=>u==null?void 0:u(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});Y.subscribe(()=>{let e=Y.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",o=n.count!==0;(o&&!r||!o&&r)&&Y.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&Y.dispatch("TEARDOWN",n)}});function Rn(e,t,n){let r=Sn(Y),o=e?r.get(e):void 0,u=o?o.count>0:!1;return R(()=>{if(!(!e||!t))return Y.dispatch("PUSH",e,n),()=>Y.dispatch("POP",e,n)},[t,e]),u}let Fe=new Map,oe=new Map;function Ge(e,t=!0){R(()=>{var n;if(!t)return;let r=typeof e=="function"?e():e.current;if(!r)return;function o(){var l;if(!r)return;let i=(l=oe.get(r))!=null?l:1;if(i===1?oe.delete(r):oe.set(r,i-1),i!==1)return;let s=Fe.get(r);s&&(s["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",s["aria-hidden"]),r.inert=s.inert,Fe.delete(r))}let u=(n=oe.get(r))!=null?n:0;return oe.set(r,u+1),u!==0||(Fe.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),o},[e,t])}function Nn({defaultContainers:e=[],portals:t}={}){let n=a.useRef(null),r=ue(n),o=b(()=>{var u;let l=[];for(let i of e)i!==null&&(i instanceof HTMLElement?l.push(i):"current"in i&&i.current instanceof HTMLElement&&l.push(i.current));if(t!=null&&t.current)for(let i of t.current)l.push(i);for(let i of(u=r==null?void 0:r.querySelectorAll("html > *, body > *"))!=null?u:[])i!==document.body&&i!==document.head&&i instanceof HTMLElement&&i.id!=="headlessui-portal-root"&&(i.contains(n.current)||l.some(s=>i.contains(s))||l.push(i));return l});return{resolveContainers:o,contains:b(u=>o().some(l=>l.contains(u))),mainTreeNodeRef:n,MainTreeNode:a.useMemo(()=>function(){return v.createElement(De,{features:ve.Hidden,ref:n})},[n])}}var xn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(xn||{}),Dn=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(Dn||{});let Mn={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},he=a.createContext(null);he.displayName="DialogContext";function ae(e){let t=a.useContext(he);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,ae),n}return t}function An(e,t,n=()=>[document.body]){Rn(e,t,r=>{var o;return{containers:[...(o=r.containers)!=null?o:[],n]}})}function kn(e,t){return S(t.type,Mn,e,t)}let Hn="div",jn=me.RenderStrategy|me.Static;function In(e,t){var n;let r=Z(),{id:o=`headlessui-dialog-${r}`,open:u,onClose:l,initialFocus:i,__demoMode:s=!1,...c}=e,[d,p]=a.useState(0),g=Ue();u===void 0&&g!==null&&(u=(g&L.Open)===L.Open);let m=a.useRef(null),f=N(m,t),h=ue(m),E=e.hasOwnProperty("open")||g!==null,w=e.hasOwnProperty("onClose");if(!E&&!w)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!E)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!w)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof u!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u}`);if(typeof l!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l}`);let y=u?0:1,[T,P]=a.useReducer(kn,{titleId:null,descriptionId:null,panelRef:a.createRef()}),x=b(()=>l(!1)),ee=b($=>P({type:0,id:$})),M=Q()?s?!1:y===0:!1,A=d>1,K=a.useContext(he)!==null,[te,X]=tn(),{resolveContainers:_,mainTreeNodeRef:B,MainTreeNode:ye}=Nn({portals:te,defaultContainers:[(n=T.panelRef.current)!=null?n:m.current]}),W=A?"parent":"leaf",se=g!==null?(g&L.Closing)===L.Closing:!1,$e=(()=>K||se?!1:M)(),z=a.useCallback(()=>{var $,k;return(k=Array.from(($=h==null?void 0:h.querySelectorAll("body > *"))!=null?$:[]).find(C=>C.id==="headlessui-portal-root"?!1:C.contains(B.current)&&C instanceof HTMLElement))!=null?k:null},[B]);Ge(z,$e);let ne=(()=>A?!0:M)(),Te=a.useCallback(()=>{var $,k;return(k=Array.from(($=h==null?void 0:h.querySelectorAll("[data-headlessui-portal]"))!=null?$:[]).find(C=>C.contains(B.current)&&C instanceof HTMLElement))!=null?k:null},[B]);Ge(Te,ne);let D=(()=>!(!M||A))();Nt(_,x,D);let mt=(()=>!(A||y!==0))();nt(h==null?void 0:h.defaultView,"keydown",$=>{mt&&($.defaultPrevented||$.key===tt.Escape&&($.preventDefault(),$.stopPropagation(),x()))});let vt=(()=>!(se||y!==0||K))();An(h,vt,_),a.useEffect(()=>{if(y!==0||!m.current)return;let $=new ResizeObserver(k=>{for(let C of k){let ce=C.target.getBoundingClientRect();ce.x===0&&ce.y===0&&ce.width===0&&ce.height===0&&x()}});return $.observe(m.current),()=>$.disconnect()},[y,m,x]);let[ht,gt]=on(),Et=a.useMemo(()=>[{dialogState:y,close:x,setTitleId:ee},T],[y,T,x,ee]),Ve=a.useMemo(()=>({open:y===0}),[y]),bt={ref:f,id:o,role:"dialog","aria-modal":y===0?!0:void 0,"aria-labelledby":T.titleId,"aria-describedby":ht};return v.createElement(dn,{type:"Dialog",enabled:y===0,element:m,onUpdate:b(($,k)=>{k==="Dialog"&&S($,{[He.Add]:()=>p(C=>C+1),[He.Remove]:()=>p(C=>C-1)})})},v.createElement(Me,{force:!0},v.createElement(ke,null,v.createElement(he.Provider,{value:Et},v.createElement(ke.Group,{target:m},v.createElement(Me,{force:!1},v.createElement(gt,{slot:Ve,name:"Dialog.Description"},v.createElement(re,{initialFocus:i,containers:_,features:M?S(W,{parent:re.features.RestoreFocus,leaf:re.features.All&~re.features.FocusLock}):re.features.None},v.createElement(X,null,O({ourProps:bt,theirProps:c,slot:Ve,defaultTag:Hn,features:jn,visible:y===0,name:"Dialog"}))))))))),v.createElement(ye,null))}let Bn="div";function Un(e,t){let n=Z(),{id:r=`headlessui-dialog-overlay-${n}`,...o}=e,[{dialogState:u,close:l}]=ae("Dialog.Overlay"),i=N(t),s=b(d=>{if(d.target===d.currentTarget){if(Mt(d.currentTarget))return d.preventDefault();d.preventDefault(),d.stopPropagation(),l()}}),c=a.useMemo(()=>({open:u===0}),[u]);return O({ourProps:{ref:i,id:r,"aria-hidden":!0,onClick:s},theirProps:o,slot:c,defaultTag:Bn,name:"Dialog.Overlay"})}let _n="div";function Wn(e,t){let n=Z(),{id:r=`headlessui-dialog-backdrop-${n}`,...o}=e,[{dialogState:u},l]=ae("Dialog.Backdrop"),i=N(t);a.useEffect(()=>{if(l.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[l.panelRef]);let s=a.useMemo(()=>({open:u===0}),[u]);return v.createElement(Me,{force:!0},v.createElement(ke,null,O({ourProps:{ref:i,id:r,"aria-hidden":!0},theirProps:o,slot:s,defaultTag:_n,name:"Dialog.Backdrop"})))}let Vn="div";function qn(e,t){let n=Z(),{id:r=`headlessui-dialog-panel-${n}`,...o}=e,[{dialogState:u},l]=ae("Dialog.Panel"),i=N(t,l.panelRef),s=a.useMemo(()=>({open:u===0}),[u]),c=b(d=>{d.stopPropagation()});return O({ourProps:{ref:i,id:r,onClick:c},theirProps:o,slot:s,defaultTag:Vn,name:"Dialog.Panel"})}let Yn="h2";function Gn(e,t){let n=Z(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:u,setTitleId:l}]=ae("Dialog.Title"),i=N(t);a.useEffect(()=>(l(r),()=>l(null)),[r,l]);let s=a.useMemo(()=>({open:u===0}),[u]);return O({ourProps:{ref:i,id:r},theirProps:o,slot:s,defaultTag:Yn,name:"Dialog.Title"})}let Kn=F(In),Xn=F(Wn),zn=F(qn),Jn=F(Un),Qn=F(Gn),gr=Object.assign(Kn,{Backdrop:Xn,Panel:zn,Overlay:Jn,Title:Qn,Description:sn});function Zn(e=0){let[t,n]=a.useState(e),r=ie(),o=a.useCallback(s=>{r.current&&n(c=>c|s)},[t,r]),u=a.useCallback(s=>!!(t&s),[t]),l=a.useCallback(s=>{r.current&&n(c=>c&~s)},[n,r]),i=a.useCallback(s=>{r.current&&n(c=>c^s)},[n]);return{flags:t,addFlag:o,hasFlag:u,removeFlag:l,toggleFlag:i}}function er(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function Ce(e,...t){e&&t.length>0&&e.classList.add(...t)}function Oe(e,...t){e&&t.length>0&&e.classList.remove(...t)}function tr(e,t){let n=J();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:o}=getComputedStyle(e),[u,l]=[r,o].map(s=>{let[c=0]=s.split(",").filter(Boolean).map(d=>d.includes("ms")?parseFloat(d):parseFloat(d)*1e3).sort((d,p)=>p-d);return c}),i=u+l;if(i!==0){n.group(c=>{c.setTimeout(()=>{t(),c.dispose()},i),c.addEventListener(e,"transitionrun",d=>{d.target===d.currentTarget&&c.dispose()})});let s=n.addEventListener(e,"transitionend",c=>{c.target===c.currentTarget&&(t(),s())})}else t();return n.add(()=>t()),n.dispose}function nr(e,t,n,r){let o=n?"enter":"leave",u=J(),l=r!==void 0?er(r):()=>{};o==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let i=S(o,{enter:()=>t.enter,leave:()=>t.leave}),s=S(o,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),c=S(o,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return Oe(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),Ce(e,...i,...c),u.nextFrame(()=>{Oe(e,...c),Ce(e,...s),tr(e,()=>(Oe(e,...i),Ce(e,...t.entered),l()))}),u.dispose}function rr({container:e,direction:t,classes:n,onStart:r,onStop:o}){let u=ie(),l=Ie(),i=I(t);R(()=>{let s=J();l.add(s.dispose);let c=e.current;if(c&&i.current!=="idle"&&u.current)return s.dispose(),r.current(i.current),s.add(nr(c,n.current,i.current==="enter",()=>{s.dispose(),o.current(i.current)})),s.dispose},[t])}function V(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let Ee=a.createContext(null);Ee.displayName="TransitionContext";var or=(e=>(e.Visible="visible",e.Hidden="hidden",e))(or||{});function lr(){let e=a.useContext(Ee);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function ir(){let e=a.useContext(be);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let be=a.createContext(null);be.displayName="NestingContext";function we(e){return"children"in e?we(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function dt(e,t){let n=I(e),r=a.useRef([]),o=ie(),u=Ie(),l=b((m,f=H.Hidden)=>{let h=r.current.findIndex(({el:E})=>E===m);h!==-1&&(S(f,{[H.Unmount](){r.current.splice(h,1)},[H.Hidden](){r.current[h].state="hidden"}}),u.microTask(()=>{var E;!we(r)&&o.current&&((E=n.current)==null||E.call(n))}))}),i=b(m=>{let f=r.current.find(({el:h})=>h===m);return f?f.state!=="visible"&&(f.state="visible"):r.current.push({el:m,state:"visible"}),()=>l(m,H.Unmount)}),s=a.useRef([]),c=a.useRef(Promise.resolve()),d=a.useRef({enter:[],leave:[],idle:[]}),p=b((m,f,h)=>{s.current.splice(0),t&&(t.chains.current[f]=t.chains.current[f].filter(([E])=>E!==m)),t==null||t.chains.current[f].push([m,new Promise(E=>{s.current.push(E)})]),t==null||t.chains.current[f].push([m,new Promise(E=>{Promise.all(d.current[f].map(([w,y])=>y)).then(()=>E())})]),f==="enter"?c.current=c.current.then(()=>t==null?void 0:t.wait.current).then(()=>h(f)):h(f)}),g=b((m,f,h)=>{Promise.all(d.current[f].splice(0).map(([E,w])=>w)).then(()=>{var E;(E=s.current.shift())==null||E()}).then(()=>h(f))});return a.useMemo(()=>({children:r,register:i,unregister:l,onStart:p,onStop:g,wait:c,chains:d}),[i,l,r,p,g,d,c])}function ur(){}let ar=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function Ke(e){var t;let n={};for(let r of ar)n[r]=(t=e[r])!=null?t:ur;return n}function sr(e){let t=a.useRef(Ke(e));return a.useEffect(()=>{t.current=Ke(e)},[e]),t}let cr="div",ft=me.RenderStrategy;function dr(e,t){let{beforeEnter:n,afterEnter:r,beforeLeave:o,afterLeave:u,enter:l,enterFrom:i,enterTo:s,entered:c,leave:d,leaveFrom:p,leaveTo:g,...m}=e,f=a.useRef(null),h=N(f,t),E=m.unmount?H.Unmount:H.Hidden,{show:w,appear:y,initial:T}=lr(),[P,x]=a.useState(w?"visible":"hidden"),ee=ir(),{register:M,unregister:A}=ee,K=a.useRef(null);a.useEffect(()=>M(f),[M,f]),a.useEffect(()=>{if(E===H.Hidden&&f.current){if(w&&P!=="visible"){x("visible");return}return S(P,{hidden:()=>A(f),visible:()=>M(f)})}},[P,f,M,A,w,E]);let te=I({enter:V(l),enterFrom:V(i),enterTo:V(s),entered:V(c),leave:V(d),leaveFrom:V(p),leaveTo:V(g)}),X=sr({beforeEnter:n,afterEnter:r,beforeLeave:o,afterLeave:u}),_=Q();a.useEffect(()=>{if(_&&P==="visible"&&f.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[f,P,_]);let B=T&&!y,ye=(()=>!_||B||K.current===w?"idle":w?"enter":"leave")(),W=Zn(0),se=b(D=>S(D,{enter:()=>{W.addFlag(L.Opening),X.current.beforeEnter()},leave:()=>{W.addFlag(L.Closing),X.current.beforeLeave()},idle:()=>{}})),$e=b(D=>S(D,{enter:()=>{W.removeFlag(L.Opening),X.current.afterEnter()},leave:()=>{W.removeFlag(L.Closing),X.current.afterLeave()},idle:()=>{}})),z=dt(()=>{x("hidden"),A(f)},ee);rr({container:f,classes:te,direction:ye,onStart:I(D=>{z.onStart(f,D,se)}),onStop:I(D=>{z.onStop(f,D,$e),D==="leave"&&!we(z)&&(x("hidden"),A(f))})}),a.useEffect(()=>{B&&(E===H.Hidden?K.current=null:K.current=w)},[w,B,P]);let ne=m,Te={ref:h};return y&&w&&T&&(ne={...ne,className:xe(m.className,...te.current.enter,...te.current.enterFrom)}),v.createElement(be.Provider,{value:z},v.createElement(jt,{value:S(P,{visible:L.Open,hidden:L.Closed})|W.flags},O({ourProps:Te,theirProps:ne,defaultTag:cr,features:ft,visible:P==="visible",name:"Transition.Child"})))}function fr(e,t){let{show:n,appear:r=!1,unmount:o,...u}=e,l=a.useRef(null),i=N(l,t);Q();let s=Ue();if(n===void 0&&s!==null&&(n=(s&L.Open)===L.Open),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[c,d]=a.useState(n?"visible":"hidden"),p=dt(()=>{d("hidden")}),[g,m]=a.useState(!0),f=a.useRef([n]);R(()=>{g!==!1&&f.current[f.current.length-1]!==n&&(f.current.push(n),m(!1))},[f,n]);let h=a.useMemo(()=>({show:n,appear:r,initial:g}),[n,r,g]);a.useEffect(()=>{if(n)d("visible");else if(!we(p))d("hidden");else{let T=l.current;if(!T)return;let P=T.getBoundingClientRect();P.x===0&&P.y===0&&P.width===0&&P.height===0&&d("hidden")}},[n,p]);let E={unmount:o},w=b(()=>{var T;g&&m(!1),(T=e.beforeEnter)==null||T.call(e)}),y=b(()=>{var T;g&&m(!1),(T=e.beforeLeave)==null||T.call(e)});return v.createElement(be.Provider,{value:p},v.createElement(Ee.Provider,{value:h},O({ourProps:{...E,as:a.Fragment,children:v.createElement(pt,{ref:i,...E,...u,beforeEnter:w,beforeLeave:y})},theirProps:{},defaultTag:a.Fragment,features:ft,visible:c==="visible",name:"Transition"})))}function pr(e,t){let n=a.useContext(Ee)!==null,r=Ue()!==null;return v.createElement(v.Fragment,null,!n&&r?v.createElement(je,{ref:t,...e}):v.createElement(pt,{ref:t,...e}))}let je=F(fr),pt=F(dr),mr=F(pr),Er=Object.assign(je,{Child:mr,Root:je});export{Er as $,gr as _};
