import{k as oe,m as pe,u as fe,S as de,_ as le}from"./Select-aecb2a80.esm-623bc0fb.js";import{r as e,aa as s,ab as v,ai as ce}from"./main-147692d0.js";var Se=["defaultOptions","cacheOptions","loadOptions","options","isLoading","onInputChange","filterOption"];function ve(a){var f=a.defaultOptions,n=f===void 0?!1:f,d=a.cacheOptions,l=d===void 0?!1:d,O=a.loadOptions;a.options;var L=a.isLoading,k=L===void 0?!1:L,m=a.onInputChange,A=a.filterOption,z=A===void 0?null:A,P=oe(a,Se),V=P.inputValue,r=e.useRef(void 0),c=e.useRef(!1),B=e.useState(Array.isArray(n)?n:void 0),E=s(B,2),F=E[0],$=E[1],G=e.useState(typeof V<"u"?V:""),x=s(G,2),D=x[0],_=x[1],H=e.useState(n===!0),R=s(H,2),J=R[0],i=R[1],K=e.useState(void 0),b=s(K,2),h=b[0],g=b[1],N=e.useState([]),j=s(N,2),Q=j[0],y=j[1],U=e.useState(!1),M=s(U,2),X=M[0],S=M[1],Y=e.useState({}),q=s(Y,2),o=q[0],w=q[1],Z=e.useState(void 0),T=s(Z,2),ee=T[0],te=T[1],ae=e.useState(void 0),W=s(ae,2),ne=W[0],se=W[1];l!==ne&&(w({}),se(l)),n!==ee&&($(Array.isArray(n)?n:void 0),te(n)),e.useEffect(function(){return c.current=!0,function(){c.current=!1}},[]);var I=e.useCallback(function(p,u){if(!O)return u();var t=O(p,u);t&&typeof t.then=="function"&&t.then(u,function(){return u()})},[O]);e.useEffect(function(){n===!0&&I(D,function(p){c.current&&($(p||[]),i(!!r.current))})},[]);var ue=e.useCallback(function(p,u){var t=pe(p,u,m);if(!t){r.current=void 0,_(""),g(""),y([]),i(!1),S(!1);return}if(l&&o[t])_(t),g(t),y(o[t]),i(!1),S(!1);else{var ie=r.current={};_(t),i(!0),S(!h),I(t,function(C){c&&ie===r.current&&(r.current=void 0,i(!1),g(t),y(C||[]),S(!1),w(C?v(v({},o),{},ce({},t,C)):o))})}},[l,I,h,o,m]),re=X?[]:D&&h?Q:F||[];return v(v({},P),{},{options:re,isLoading:J||k,onInputChange:ue,filterOption:z})}var Oe=e.forwardRef(function(a,f){var n=ve(a),d=fe(n);return e.createElement(de,le({ref:f},d))}),ge=Oe;export{ge as A};
