import{k as ie,m as pe,u as fe,S as de,_ as le}from"./Select-aecb2a80.esm-ecfd9304.js";import{r as e,_ as s,H as v,S as ce}from"./main-d50c1b5f.js";var Se=["defaultOptions","cacheOptions","loadOptions","options","isLoading","onInputChange","filterOption"];function ve(a){var f=a.defaultOptions,n=f===void 0?!1:f,d=a.cacheOptions,l=d===void 0?!1:d,O=a.loadOptions;a.options;var L=a.isLoading,W=L===void 0?!1:L,m=a.onInputChange,A=a.filterOption,k=A===void 0?null:A,P=ie(a,Se),V=P.inputValue,r=e.useRef(void 0),c=e.useRef(!1),z=e.useState(Array.isArray(n)?n:void 0),E=s(z,2),B=E[0],$=E[1],F=e.useState(typeof V<"u"?V:""),x=s(F,2),D=x[0],_=x[1],G=e.useState(n===!0),R=s(G,2),J=R[0],o=R[1],K=e.useState(void 0),j=s(K,2),h=j[0],g=j[1],N=e.useState([]),M=s(N,2),Q=M[0],y=M[1],U=e.useState(!1),b=s(U,2),X=b[0],S=b[1],Y=e.useState({}),q=s(Y,2),i=q[0],w=q[1],Z=e.useState(void 0),H=s(Z,2),ee=H[0],te=H[1],ae=e.useState(void 0),T=s(ae,2),ne=T[0],se=T[1];l!==ne&&(w({}),se(l)),n!==ee&&($(Array.isArray(n)?n:void 0),te(n)),e.useEffect(function(){return c.current=!0,function(){c.current=!1}},[]);var I=e.useCallback(function(p,u){if(!O)return u();var t=O(p,u);t&&typeof t.then=="function"&&t.then(u,function(){return u()})},[O]);e.useEffect(function(){n===!0&&I(D,function(p){c.current&&($(p||[]),o(!!r.current))})},[]);var ue=e.useCallback(function(p,u){var t=pe(p,u,m);if(!t){r.current=void 0,_(""),g(""),y([]),o(!1),S(!1);return}if(l&&i[t])_(t),g(t),y(i[t]),o(!1),S(!1);else{var oe=r.current={};_(t),o(!0),S(!h),I(t,function(C){c&&oe===r.current&&(r.current=void 0,o(!1),g(t),y(C||[]),S(!1),w(C?v(v({},i),{},ce({},t,C)):i))})}},[l,I,h,i,m]),re=X?[]:D&&h?Q:B||[];return v(v({},P),{},{options:re,isLoading:J||W,onInputChange:ue,filterOption:k})}var Oe=e.forwardRef(function(a,f){var n=ve(a),d=fe(n);return e.createElement(de,le({ref:f},d))}),ge=Oe;export{ge as A};
