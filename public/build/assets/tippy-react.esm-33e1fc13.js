import{aJ as Tt,aK as Et,r as $,a2 as be,a0 as Ot}from"./main-abaca463.js";var At="tippy-box",Ge="tippy-content",wt="tippy-backdrop",Xe="tippy-arrow",Je="tippy-svg-arrow",H={passive:!0,capture:!0},Qe=function(){return document.body};function le(e,n,i){if(Array.isArray(e)){var o=e[n];return o??(Array.isArray(i)?i[n]:i)}return e}function Oe(e,n){var i={}.toString.call(e);return i.indexOf("[object")===0&&i.indexOf(n+"]")>-1}function Ze(e,n){return typeof e=="function"?e.apply(void 0,n):e}function Ue(e,n){if(n===0)return e;var i;return function(o){clearTimeout(i),i=setTimeout(function(){e(o)},n)}}function Dt(e){return e.split(/\s+/).filter(Boolean)}function K(e){return[].concat(e)}function Be(e,n){e.indexOf(n)===-1&&e.push(n)}function Ct(e){return e.filter(function(n,i){return e.indexOf(n)===i})}function St(e){return e.split("-")[0]}function ae(e){return[].slice.call(e)}function He(e){return Object.keys(e).reduce(function(n,i){return e[i]!==void 0&&(n[i]=e[i]),n},{})}function X(){return document.createElement("div")}function se(e){return["Element","Fragment"].some(function(n){return Oe(e,n)})}function Lt(e){return Oe(e,"NodeList")}function xt(e){return Oe(e,"MouseEvent")}function Mt(e){return!!(e&&e._tippy&&e._tippy.reference===e)}function It(e){return se(e)?[e]:Lt(e)?ae(e):Array.isArray(e)?e:ae(document.querySelectorAll(e))}function ve(e,n){e.forEach(function(i){i&&(i.style.transitionDuration=n+"ms")})}function Ve(e,n){e.forEach(function(i){i&&i.setAttribute("data-state",n)})}function Rt(e){var n,i=K(e),o=i[0];return o!=null&&(n=o.ownerDocument)!=null&&n.body?o.ownerDocument:document}function Nt(e,n){var i=n.clientX,o=n.clientY;return e.every(function(p){var c=p.popperRect,s=p.popperState,g=p.props,f=g.interactiveBorder,O=St(s.placement),h=s.modifiersData.offset;if(!h)return!0;var P=O==="bottom"?h.top.y:0,V=O==="top"?h.bottom.y:0,_=O==="right"?h.left.x:0,D=O==="left"?h.right.x:0,I=c.top-o+P>f,k=o-c.bottom-V>f,Y=c.left-i+_>f,F=i-c.right-D>f;return I||k||Y||F})}function me(e,n,i){var o=n+"EventListener";["transitionend","webkitTransitionEnd"].forEach(function(p){e[o](p,i)})}function ke(e,n){for(var i=n;i;){var o;if(e.contains(i))return!0;i=i.getRootNode==null||(o=i.getRootNode())==null?void 0:o.host}return!1}var M={isTouch:!1},Fe=0;function $t(){M.isTouch||(M.isTouch=!0,window.performance&&document.addEventListener("mousemove",et))}function et(){var e=performance.now();e-Fe<20&&(M.isTouch=!1,document.removeEventListener("mousemove",et)),Fe=e}function jt(){var e=document.activeElement;if(Mt(e)){var n=e._tippy;e.blur&&!n.state.isVisible&&e.blur()}}function Pt(){document.addEventListener("touchstart",$t,H),window.addEventListener("blur",jt)}var _t=typeof window<"u"&&typeof document<"u",Ut=_t?!!window.msCrypto:!1,Bt={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},Ht={allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999},S=Object.assign({appendTo:Qe,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},Bt,Ht),Vt=Object.keys(S),kt=function(n){var i=Object.keys(n);i.forEach(function(o){S[o]=n[o]})};function tt(e){var n=e.plugins||[],i=n.reduce(function(o,p){var c=p.name,s=p.defaultValue;if(c){var g;o[c]=e[c]!==void 0?e[c]:(g=S[c])!=null?g:s}return o},{});return Object.assign({},e,i)}function Ft(e,n){var i=n?Object.keys(tt(Object.assign({},S,{plugins:n}))):Vt,o=i.reduce(function(p,c){var s=(e.getAttribute("data-tippy-"+c)||"").trim();if(!s)return p;if(c==="content")p[c]=s;else try{p[c]=JSON.parse(s)}catch{p[c]=s}return p},{});return o}function We(e,n){var i=Object.assign({},n,{content:Ze(n.content,[e])},n.ignoreAttributes?{}:Ft(e,n.plugins));return i.aria=Object.assign({},S.aria,i.aria),i.aria={expanded:i.aria.expanded==="auto"?n.interactive:i.aria.expanded,content:i.aria.content==="auto"?n.interactive?null:"describedby":i.aria.content},i}var Wt=function(){return"innerHTML"};function ye(e,n){e[Wt()]=n}function qe(e){var n=X();return e===!0?n.className=Xe:(n.className=Je,se(e)?n.appendChild(e):ye(n,e)),n}function ze(e,n){se(n.content)?(ye(e,""),e.appendChild(n.content)):typeof n.content!="function"&&(n.allowHTML?ye(e,n.content):e.textContent=n.content)}function Te(e){var n=e.firstElementChild,i=ae(n.children);return{box:n,content:i.find(function(o){return o.classList.contains(Ge)}),arrow:i.find(function(o){return o.classList.contains(Xe)||o.classList.contains(Je)}),backdrop:i.find(function(o){return o.classList.contains(wt)})}}function nt(e){var n=X(),i=X();i.className=At,i.setAttribute("data-state","hidden"),i.setAttribute("tabindex","-1");var o=X();o.className=Ge,o.setAttribute("data-state","hidden"),ze(o,e.props),n.appendChild(i),i.appendChild(o),p(e.props,e.props);function p(c,s){var g=Te(n),f=g.box,O=g.content,h=g.arrow;s.theme?f.setAttribute("data-theme",s.theme):f.removeAttribute("data-theme"),typeof s.animation=="string"?f.setAttribute("data-animation",s.animation):f.removeAttribute("data-animation"),s.inertia?f.setAttribute("data-inertia",""):f.removeAttribute("data-inertia"),f.style.maxWidth=typeof s.maxWidth=="number"?s.maxWidth+"px":s.maxWidth,s.role?f.setAttribute("role",s.role):f.removeAttribute("role"),(c.content!==s.content||c.allowHTML!==s.allowHTML)&&ze(O,e.props),s.arrow?h?c.arrow!==s.arrow&&(f.removeChild(h),f.appendChild(qe(s.arrow))):f.appendChild(qe(s.arrow)):h&&f.removeChild(h)}return{popper:n,onUpdate:p}}nt.$$tippy=!0;var qt=1,oe=[],ge=[];function zt(e,n){var i=We(e,Object.assign({},S,tt(He(n)))),o,p,c,s=!1,g=!1,f=!1,O=!1,h,P,V,_=[],D=Ue(Me,i.interactiveDebounce),I,k=qt++,Y=null,F=Ct(i.plugins),Q={isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},t={id:k,reference:e,popper:X(),popperInstance:Y,props:i,state:Q,plugins:F,clearDelayTimeouts:ft,setProps:dt,setContent:lt,show:vt,hide:mt,hideWithInteractivity:gt,enable:ct,disable:pt,unmount:ht,destroy:bt};if(!i.render)return t;var Z=i.render(t),d=Z.popper,ee=Z.onUpdate;d.setAttribute("data-tippy-root",""),d.id="tippy-"+t.id,t.popper=d,e._tippy=t,d._tippy=t;var G=F.map(function(r){return r.fn(t)}),A=e.hasAttribute("aria-expanded");return Se(),T(),x(),b("onCreate",[t]),i.showOnCreate&&Pe(),d.addEventListener("mouseenter",function(){t.props.interactive&&t.state.isVisible&&t.clearDelayTimeouts()}),d.addEventListener("mouseleave",function(){t.props.interactive&&t.props.trigger.indexOf("mouseenter")>=0&&y().addEventListener("mousemove",D)}),t;function R(){var r=t.props.touch;return Array.isArray(r)?r:[r,0]}function j(){return R()[0]==="hold"}function w(){var r;return!!((r=t.props.render)!=null&&r.$$tippy)}function L(){return I||e}function y(){var r=L().parentNode;return r?Rt(r):document}function v(){return Te(d)}function U(r){return t.state.isMounted&&!t.state.isVisible||M.isTouch||h&&h.type==="focus"?0:le(t.props.delay,r?0:1,S.delay)}function x(r){r===void 0&&(r=!1),d.style.pointerEvents=t.props.interactive&&!r?"":"none",d.style.zIndex=""+t.props.zIndex}function b(r,a,u){if(u===void 0&&(u=!0),G.forEach(function(l){l[r]&&l[r].apply(l,a)}),u){var m;(m=t.props)[r].apply(m,a)}}function N(){var r=t.props.aria;if(r.content){var a="aria-"+r.content,u=d.id,m=K(t.props.triggerTarget||e);m.forEach(function(l){var E=l.getAttribute(a);if(t.state.isVisible)l.setAttribute(a,E?E+" "+u:u);else{var C=E&&E.replace(u,"").trim();C?l.setAttribute(a,C):l.removeAttribute(a)}})}}function T(){if(!(A||!t.props.aria.expanded)){var r=K(t.props.triggerTarget||e);r.forEach(function(a){t.props.interactive?a.setAttribute("aria-expanded",t.state.isVisible&&a===L()?"true":"false"):a.removeAttribute("aria-expanded")})}}function ue(){y().removeEventListener("mousemove",D),oe=oe.filter(function(r){return r!==D})}function te(r){if(!(M.isTouch&&(f||r.type==="mousedown"))){var a=r.composedPath&&r.composedPath()[0]||r.target;if(!(t.props.interactive&&ke(d,a))){if(K(t.props.triggerTarget||e).some(function(u){return ke(u,a)})){if(M.isTouch||t.state.isVisible&&t.props.trigger.indexOf("click")>=0)return}else b("onClickOutside",[t,r]);t.props.hideOnClick===!0&&(t.clearDelayTimeouts(),t.hide(),g=!0,setTimeout(function(){g=!1}),t.state.isMounted||ce())}}}function Ae(){f=!0}function we(){f=!1}function De(){var r=y();r.addEventListener("mousedown",te,!0),r.addEventListener("touchend",te,H),r.addEventListener("touchstart",we,H),r.addEventListener("touchmove",Ae,H)}function ce(){var r=y();r.removeEventListener("mousedown",te,!0),r.removeEventListener("touchend",te,H),r.removeEventListener("touchstart",we,H),r.removeEventListener("touchmove",Ae,H)}function at(r,a){Ce(r,function(){!t.state.isVisible&&d.parentNode&&d.parentNode.contains(d)&&a()})}function st(r,a){Ce(r,a)}function Ce(r,a){var u=v().box;function m(l){l.target===u&&(me(u,"remove",m),a())}if(r===0)return a();me(u,"remove",P),me(u,"add",m),P=m}function W(r,a,u){u===void 0&&(u=!1);var m=K(t.props.triggerTarget||e);m.forEach(function(l){l.addEventListener(r,a,u),_.push({node:l,eventType:r,handler:a,options:u})})}function Se(){j()&&(W("touchstart",xe,{passive:!0}),W("touchend",Ie,{passive:!0})),Dt(t.props.trigger).forEach(function(r){if(r!=="manual")switch(W(r,xe),r){case"mouseenter":W("mouseleave",Ie);break;case"focus":W(Ut?"focusout":"blur",Re);break;case"focusin":W("focusout",Re);break}})}function Le(){_.forEach(function(r){var a=r.node,u=r.eventType,m=r.handler,l=r.options;a.removeEventListener(u,m,l)}),_=[]}function xe(r){var a,u=!1;if(!(!t.state.isEnabled||Ne(r)||g)){var m=((a=h)==null?void 0:a.type)==="focus";h=r,I=r.currentTarget,T(),!t.state.isVisible&&xt(r)&&oe.forEach(function(l){return l(r)}),r.type==="click"&&(t.props.trigger.indexOf("mouseenter")<0||s)&&t.props.hideOnClick!==!1&&t.state.isVisible?u=!0:Pe(r),r.type==="click"&&(s=!u),u&&!m&&ne(r)}}function Me(r){var a=r.target,u=L().contains(a)||d.contains(a);if(!(r.type==="mousemove"&&u)){var m=pe().concat(d).map(function(l){var E,C=l._tippy,q=(E=C.popperInstance)==null?void 0:E.state;return q?{popperRect:l.getBoundingClientRect(),popperState:q,props:i}:null}).filter(Boolean);Nt(m,r)&&(ue(),ne(r))}}function Ie(r){var a=Ne(r)||t.props.trigger.indexOf("click")>=0&&s;if(!a){if(t.props.interactive){t.hideWithInteractivity(r);return}ne(r)}}function Re(r){t.props.trigger.indexOf("focusin")<0&&r.target!==L()||t.props.interactive&&r.relatedTarget&&d.contains(r.relatedTarget)||ne(r)}function Ne(r){return M.isTouch?j()!==r.type.indexOf("touch")>=0:!1}function $e(){je();var r=t.props,a=r.popperOptions,u=r.placement,m=r.offset,l=r.getReferenceClientRect,E=r.moveTransition,C=w()?Te(d).arrow:null,q=l?{getBoundingClientRect:l,contextElement:l.contextElement||L()}:e,_e={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(re){var z=re.state;if(w()){var yt=v(),de=yt.box;["placement","reference-hidden","escaped"].forEach(function(ie){ie==="placement"?de.setAttribute("data-placement",z.placement):z.attributes.popper["data-popper-"+ie]?de.setAttribute("data-"+ie,""):de.removeAttribute("data-"+ie)}),z.attributes.popper={}}}},B=[{name:"offset",options:{offset:m}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!E}},_e];w()&&C&&B.push({name:"arrow",options:{element:C,padding:3}}),B.push.apply(B,(a==null?void 0:a.modifiers)||[]),t.popperInstance=Et(q,d,Object.assign({},a,{placement:u,onFirstUpdate:V,modifiers:B}))}function je(){t.popperInstance&&(t.popperInstance.destroy(),t.popperInstance=null)}function ut(){var r=t.props.appendTo,a,u=L();t.props.interactive&&r===Qe||r==="parent"?a=u.parentNode:a=Ze(r,[u]),a.contains(d)||a.appendChild(d),t.state.isMounted=!0,$e()}function pe(){return ae(d.querySelectorAll("[data-tippy-root]"))}function Pe(r){t.clearDelayTimeouts(),r&&b("onTrigger",[t,r]),De();var a=U(!0),u=R(),m=u[0],l=u[1];M.isTouch&&m==="hold"&&l&&(a=l),a?o=setTimeout(function(){t.show()},a):t.show()}function ne(r){if(t.clearDelayTimeouts(),b("onUntrigger",[t,r]),!t.state.isVisible){ce();return}if(!(t.props.trigger.indexOf("mouseenter")>=0&&t.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(r.type)>=0&&s)){var a=U(!1);a?p=setTimeout(function(){t.state.isVisible&&t.hide()},a):c=requestAnimationFrame(function(){t.hide()})}}function ct(){t.state.isEnabled=!0}function pt(){t.hide(),t.state.isEnabled=!1}function ft(){clearTimeout(o),clearTimeout(p),cancelAnimationFrame(c)}function dt(r){if(!t.state.isDestroyed){b("onBeforeUpdate",[t,r]),Le();var a=t.props,u=We(e,Object.assign({},a,He(r),{ignoreAttributes:!0}));t.props=u,Se(),a.interactiveDebounce!==u.interactiveDebounce&&(ue(),D=Ue(Me,u.interactiveDebounce)),a.triggerTarget&&!u.triggerTarget?K(a.triggerTarget).forEach(function(m){m.removeAttribute("aria-expanded")}):u.triggerTarget&&e.removeAttribute("aria-expanded"),T(),x(),ee&&ee(a,u),t.popperInstance&&($e(),pe().forEach(function(m){requestAnimationFrame(m._tippy.popperInstance.forceUpdate)})),b("onAfterUpdate",[t,r])}}function lt(r){t.setProps({content:r})}function vt(){var r=t.state.isVisible,a=t.state.isDestroyed,u=!t.state.isEnabled,m=M.isTouch&&!t.props.touch,l=le(t.props.duration,0,S.duration);if(!(r||a||u||m)&&!L().hasAttribute("disabled")&&(b("onShow",[t],!1),t.props.onShow(t)!==!1)){if(t.state.isVisible=!0,w()&&(d.style.visibility="visible"),x(),De(),t.state.isMounted||(d.style.transition="none"),w()){var E=v(),C=E.box,q=E.content;ve([C,q],0)}V=function(){var B;if(!(!t.state.isVisible||O)){if(O=!0,d.offsetHeight,d.style.transition=t.props.moveTransition,w()&&t.props.animation){var fe=v(),re=fe.box,z=fe.content;ve([re,z],l),Ve([re,z],"visible")}N(),T(),Be(ge,t),(B=t.popperInstance)==null||B.forceUpdate(),b("onMount",[t]),t.props.animation&&w()&&st(l,function(){t.state.isShown=!0,b("onShown",[t])})}},ut()}}function mt(){var r=!t.state.isVisible,a=t.state.isDestroyed,u=!t.state.isEnabled,m=le(t.props.duration,1,S.duration);if(!(r||a||u)&&(b("onHide",[t],!1),t.props.onHide(t)!==!1)){if(t.state.isVisible=!1,t.state.isShown=!1,O=!1,s=!1,w()&&(d.style.visibility="hidden"),ue(),ce(),x(!0),w()){var l=v(),E=l.box,C=l.content;t.props.animation&&(ve([E,C],m),Ve([E,C],"hidden"))}N(),T(),t.props.animation?w()&&at(m,t.unmount):t.unmount()}}function gt(r){y().addEventListener("mousemove",D),Be(oe,D),D(r)}function ht(){t.state.isVisible&&t.hide(),t.state.isMounted&&(je(),pe().forEach(function(r){r._tippy.unmount()}),d.parentNode&&d.parentNode.removeChild(d),ge=ge.filter(function(r){return r!==t}),t.state.isMounted=!1,b("onHidden",[t]))}function bt(){t.state.isDestroyed||(t.clearDelayTimeouts(),t.unmount(),Le(),delete e._tippy,t.state.isDestroyed=!0,b("onDestroy",[t]))}}function J(e,n){n===void 0&&(n={});var i=S.plugins.concat(n.plugins||[]);Pt();var o=Object.assign({},n,{plugins:i}),p=It(e),c=p.reduce(function(s,g){var f=g&&zt(g,o);return f&&s.push(f),s},[]);return se(e)?c[0]:c}J.defaultProps=S;J.setDefaultProps=kt;J.currentInput=M;Object.assign({},Tt,{effect:function(n){var i=n.state,o={popper:{position:i.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(i.elements.popper.style,o.popper),i.styles=o,i.elements.arrow&&Object.assign(i.elements.arrow.style,o.arrow)}});J.setDefaultProps({render:nt});function rt(e,n){if(e==null)return{};var i={},o=Object.keys(e),p,c;for(c=0;c<o.length;c++)p=o[c],!(n.indexOf(p)>=0)&&(i[p]=e[p]);return i}var it=typeof window<"u"&&typeof document<"u";function Ee(e,n){e&&(typeof e=="function"&&e(n),{}.hasOwnProperty.call(e,"current")&&(e.current=n))}function Ke(){return it&&document.createElement("div")}function Kt(e){var n={"data-placement":e.placement};return e.referenceHidden&&(n["data-reference-hidden"]=""),e.escaped&&(n["data-escaped"]=""),n}function ot(e,n){if(e===n)return!0;if(typeof e=="object"&&e!=null&&typeof n=="object"&&n!=null){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(var i in e)if(n.hasOwnProperty(i)){if(!ot(e[i],n[i]))return!1}else return!1;return!0}else return!1}function Yt(e){var n=[];return e.forEach(function(i){n.find(function(o){return ot(i,o)})||n.push(i)}),n}function Gt(e,n){var i,o;return Object.assign({},n,{popperOptions:Object.assign({},e.popperOptions,n.popperOptions,{modifiers:Yt([].concat(((i=e.popperOptions)==null?void 0:i.modifiers)||[],((o=n.popperOptions)==null?void 0:o.modifiers)||[]))})})}var he=it?$.useLayoutEffect:$.useEffect;function Xt(e){var n=$.useRef();return n.current||(n.current=typeof e=="function"?e():e),n.current}function Ye(e,n,i){i.split(/\s+/).forEach(function(o){o&&e.classList[n](o)})}var Jt={name:"className",defaultValue:"",fn:function(n){var i=n.popper.firstElementChild,o=function(){var g;return!!((g=n.props.render)!=null&&g.$$tippy)};function p(){n.props.className&&!o()||Ye(i,"add",n.props.className)}function c(){o()&&Ye(i,"remove",n.props.className)}return{onCreate:p,onBeforeUpdate:c,onAfterUpdate:p}}};function Qt(e){function n(i){var o=i.children,p=i.content,c=i.visible,s=i.singleton,g=i.render,f=i.reference,O=i.disabled,h=O===void 0?!1:O,P=i.ignoreAttributes,V=P===void 0?!0:P;i.__source,i.__self;var _=rt(i,["children","content","visible","singleton","render","reference","disabled","ignoreAttributes","__source","__self"]),D=c!==void 0,I=s!==void 0,k=$.useState(!1),Y=k[0],F=k[1],Q=$.useState({}),t=Q[0],Z=Q[1],d=$.useState(),ee=d[0],G=d[1],A=Xt(function(){return{container:Ke(),renders:1}}),R=Object.assign({ignoreAttributes:V},_,{content:A.container});D&&(R.trigger="manual",R.hideOnClick=!1),I&&(h=!0);var j=R,w=R.plugins||[];g&&(j=Object.assign({},R,{plugins:I&&s.data!=null?[].concat(w,[{fn:function(){return{onTrigger:function(U,x){var b=s.data.children.find(function(N){var T=N.instance;return T.reference===x.currentTarget});U.state.$$activeSingletonInstance=b.instance,G(b.content)}}}}]):w,render:function(){return{popper:A.container}}}));var L=[f].concat(o?[o.type]:[]);return he(function(){var y=f;f&&f.hasOwnProperty("current")&&(y=f.current);var v=e(y||A.ref||Ke(),Object.assign({},j,{plugins:[Jt].concat(R.plugins||[])}));return A.instance=v,h&&v.disable(),c&&v.show(),I&&s.hook({instance:v,content:p,props:j,setSingletonContent:G}),F(!0),function(){v.destroy(),s==null||s.cleanup(v)}},L),he(function(){var y;if(A.renders===1){A.renders++;return}var v=A.instance;v.setProps(Gt(v.props,j)),(y=v.popperInstance)==null||y.forceUpdate(),h?v.disable():v.enable(),D&&(c?v.show():v.hide()),I&&s.hook({instance:v,content:p,props:j,setSingletonContent:G})}),he(function(){var y;if(g){var v=A.instance;v.setProps({popperOptions:Object.assign({},v.props.popperOptions,{modifiers:[].concat((((y=v.props.popperOptions)==null?void 0:y.modifiers)||[]).filter(function(U){var x=U.name;return x!=="$$tippyReact"}),[{name:"$$tippyReact",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(x){var b,N=x.state,T=(b=N.modifiersData)==null?void 0:b.hide;(t.placement!==N.placement||t.referenceHidden!==(T==null?void 0:T.isReferenceHidden)||t.escaped!==(T==null?void 0:T.hasPopperEscaped))&&Z({placement:N.placement,referenceHidden:T==null?void 0:T.isReferenceHidden,escaped:T==null?void 0:T.hasPopperEscaped}),N.attributes.popper={}}}])})})}},[t.placement,t.referenceHidden,t.escaped].concat(L)),be.createElement(be.Fragment,null,o?$.cloneElement(o,{ref:function(v){A.ref=v,Ee(o.ref,v)}}):null,Y&&Ot.createPortal(g?g(Kt(t),ee,A.instance):p,A.container))}return n}var Zt=function(e,n){return $.forwardRef(function(o,p){var c=o.children,s=rt(o,["children"]);return be.createElement(e,Object.assign({},n,s),c?$.cloneElement(c,{ref:function(f){Ee(p,f),Ee(c.ref,f)}}):null)})},en=Zt(Qt(J));const nn=en;export{nn as T};
