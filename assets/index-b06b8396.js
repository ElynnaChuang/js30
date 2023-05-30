import{U as yt,B as Qe,a as p,r as a,_ as b,l as Q,R as ue,t as ie,v as ee,C as X,E as te,u as me,k as I,y as se,V as gt,A as bt,w as de,j as R,W as xt,D as pe,m as vt}from"./index-b16799ca.js";import{L as Ct}from"./index-08fd4db5.js";import{T as Rt}from"./index-4b288bf0.js";import{_ as Tt,b as He,u as $t,T as Et,g as Ge,a as fe}from"./Typography-78d700f7.js";var Ne={},Mt={get exports(){return Ne},set exports(e){Ne=e}},y={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M=typeof Symbol=="function"&&Symbol.for,Fe=M?Symbol.for("react.element"):60103,_e=M?Symbol.for("react.portal"):60106,ye=M?Symbol.for("react.fragment"):60107,ge=M?Symbol.for("react.strict_mode"):60108,be=M?Symbol.for("react.profiler"):60114,xe=M?Symbol.for("react.provider"):60109,ve=M?Symbol.for("react.context"):60110,De=M?Symbol.for("react.async_mode"):60111,Ce=M?Symbol.for("react.concurrent_mode"):60111,Re=M?Symbol.for("react.forward_ref"):60112,Te=M?Symbol.for("react.suspense"):60113,St=M?Symbol.for("react.suspense_list"):60120,$e=M?Symbol.for("react.memo"):60115,Ee=M?Symbol.for("react.lazy"):60116,wt=M?Symbol.for("react.block"):60121,Lt=M?Symbol.for("react.fundamental"):60117,It=M?Symbol.for("react.responder"):60118,Pt=M?Symbol.for("react.scope"):60119;function D(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Fe:switch(e=e.type,e){case De:case Ce:case ye:case be:case ge:case Te:return e;default:switch(e=e&&e.$$typeof,e){case ve:case Re:case Ee:case $e:case xe:return e;default:return t}}case _e:return t}}}function Ze(e){return D(e)===Ce}y.AsyncMode=De;y.ConcurrentMode=Ce;y.ContextConsumer=ve;y.ContextProvider=xe;y.Element=Fe;y.ForwardRef=Re;y.Fragment=ye;y.Lazy=Ee;y.Memo=$e;y.Portal=_e;y.Profiler=be;y.StrictMode=ge;y.Suspense=Te;y.isAsyncMode=function(e){return Ze(e)||D(e)===De};y.isConcurrentMode=Ze;y.isContextConsumer=function(e){return D(e)===ve};y.isContextProvider=function(e){return D(e)===xe};y.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fe};y.isForwardRef=function(e){return D(e)===Re};y.isFragment=function(e){return D(e)===ye};y.isLazy=function(e){return D(e)===Ee};y.isMemo=function(e){return D(e)===$e};y.isPortal=function(e){return D(e)===_e};y.isProfiler=function(e){return D(e)===be};y.isStrictMode=function(e){return D(e)===ge};y.isSuspense=function(e){return D(e)===Te};y.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ye||e===Ce||e===be||e===ge||e===Te||e===St||typeof e=="object"&&e!==null&&(e.$$typeof===Ee||e.$$typeof===$e||e.$$typeof===xe||e.$$typeof===ve||e.$$typeof===Re||e.$$typeof===Lt||e.$$typeof===It||e.$$typeof===Pt||e.$$typeof===wt)};y.typeOf=D;(function(e){e.exports=y})(Mt);var et=Ne,Vt={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Bt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},tt={};tt[et.ForwardRef]=Vt;tt[et.Memo]=Bt;function Nt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return yt(t)}var ke=function(){var t=Nt.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function zt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}const Ft=Qe(p("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess"),_t=Qe(p("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");function Oe(e,t){var n=function(r){return t&&a.isValidElement(r)?t(r):r},i=Object.create(null);return e&&a.Children.map(e,function(o){return o}).forEach(function(o){i[o.key]=n(o)}),i}function Dt(e,t){e=e||{},t=t||{};function n(m){return m in t?t[m]:e[m]}var i=Object.create(null),o=[];for(var r in e)r in t?o.length&&(i[r]=o,o=[]):o.push(r);var s,l={};for(var c in t){if(i[c])for(s=0;s<i[c].length;s++){var u=i[c][s];l[i[c][s]]=n(u)}l[c]=n(c)}for(s=0;s<o.length;s++)l[o[s]]=n(o[s]);return l}function J(e,t,n){return n[t]!=null?n[t]:e.props[t]}function kt(e,t){return Oe(e.children,function(n){return a.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:J(n,"appear",e),enter:J(n,"enter",e),exit:J(n,"exit",e)})})}function Ot(e,t,n){var i=Oe(e.children),o=Dt(t,i);return Object.keys(o).forEach(function(r){var s=o[r];if(a.isValidElement(s)){var l=r in t,c=r in i,u=t[r],m=a.isValidElement(u)&&!u.props.in;c&&(!l||m)?o[r]=a.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:J(s,"exit",e),enter:J(s,"enter",e)}):!c&&l&&!m?o[r]=a.cloneElement(s,{in:!1}):c&&l&&a.isValidElement(u)&&(o[r]=a.cloneElement(s,{onExited:n.bind(null,s),in:u.props.in,exit:J(s,"exit",e),enter:J(s,"enter",e)}))}}),o}var Ut=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},At={component:"div",childFactory:function(t){return t}},Ue=function(e){Tt(t,e);function t(i,o){var r;r=e.call(this,i,o)||this;var s=r.handleExited.bind(zt(r));return r.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},r}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,r){var s=r.children,l=r.handleExited,c=r.firstRender;return{children:c?kt(o,l):Ot(o,s,l),firstRender:!1}},n.handleExited=function(o,r){var s=Oe(this.props.children);o.key in s||(o.props.onExited&&o.props.onExited(r),this.mounted&&this.setState(function(l){var c=b({},l.children);return delete c[o.key],{children:c}}))},n.render=function(){var o=this.props,r=o.component,s=o.childFactory,l=Q(o,["component","childFactory"]),c=this.state.contextValue,u=Ut(this.state.children).map(s);return delete l.appear,delete l.enter,delete l.exit,r===null?ue.createElement(He.Provider,{value:c},u):ue.createElement(He.Provider,{value:c},ue.createElement(r,l,u))},t}(ue.Component);Ue.propTypes={};Ue.defaultProps=At;const Wt=Ue;function jt(e){return ie("MuiCollapse",e)}ee("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const Ht=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],Gt=e=>{const{orientation:t,classes:n}=e,i={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return se(i,jt,n)},Yt=X("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.orientation],n.state==="entered"&&t.entered,n.state==="exited"&&!n.in&&n.collapsedSize==="0px"&&t.hidden]}})(({theme:e,ownerState:t})=>b({height:0,overflow:"hidden",transition:e.transitions.create("height")},t.orientation==="horizontal"&&{height:"auto",width:0,transition:e.transitions.create("width")},t.state==="entered"&&b({height:"auto",overflow:"visible"},t.orientation==="horizontal"&&{width:"auto"}),t.state==="exited"&&!t.in&&t.collapsedSize==="0px"&&{visibility:"hidden"})),Kt=X("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})(({ownerState:e})=>b({display:"flex",width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),Xt=X("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})(({ownerState:e})=>b({width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),nt=a.forwardRef(function(t,n){const i=te({props:t,name:"MuiCollapse"}),{addEndListener:o,children:r,className:s,collapsedSize:l="0px",component:c,easing:u,in:m,onEnter:x,onEntered:v,onEntering:T,onExit:h,onExited:C,onExiting:P,orientation:S="vertical",style:k,timeout:$=gt.standard,TransitionComponent:g=Et}=i,O=Q(i,Ht),w=b({},i,{orientation:S,collapsedSize:l}),_=Gt(w),Y=$t(),q=a.useRef(),E=a.useRef(null),U=a.useRef(),V=typeof l=="number"?`${l}px`:l,B=S==="horizontal",N=B?"width":"height";a.useEffect(()=>()=>{clearTimeout(q.current)},[]);const A=a.useRef(null),H=me(n,A),W=f=>F=>{if(f){const G=A.current;F===void 0?f(G):f(G,F)}},z=()=>E.current?E.current[B?"clientWidth":"clientHeight"]:0,Se=W((f,F)=>{E.current&&B&&(E.current.style.position="absolute"),f.style[N]=V,x&&x(f,F)}),ae=W((f,F)=>{const G=z();E.current&&B&&(E.current.style.position="");const{duration:L,easing:Z}=Ge({style:k,timeout:$,easing:u},{mode:"enter"});if($==="auto"){const le=Y.transitions.getAutoHeightDuration(G);f.style.transitionDuration=`${le}ms`,U.current=le}else f.style.transitionDuration=typeof L=="string"?L:`${L}ms`;f.style[N]=`${G}px`,f.style.transitionTimingFunction=Z,T&&T(f,F)}),we=W((f,F)=>{f.style[N]="auto",v&&v(f,F)}),Le=W(f=>{f.style[N]=`${z()}px`,h&&h(f)}),Ie=W(C),K=W(f=>{const F=z(),{duration:G,easing:L}=Ge({style:k,timeout:$,easing:u},{mode:"exit"});if($==="auto"){const Z=Y.transitions.getAutoHeightDuration(F);f.style.transitionDuration=`${Z}ms`,U.current=Z}else f.style.transitionDuration=typeof G=="string"?G:`${G}ms`;f.style[N]=V,f.style.transitionTimingFunction=L,P&&P(f)});return p(g,b({in:m,onEnter:Se,onEntered:we,onEntering:ae,onExit:Le,onExited:Ie,onExiting:K,addEndListener:f=>{$==="auto"&&(q.current=setTimeout(f,U.current||0)),o&&o(A.current,f)},nodeRef:A,timeout:$==="auto"?null:$},O,{children:(f,F)=>p(Yt,b({as:c,className:I(_.root,s,{entered:_.entered,exited:!m&&V==="0px"&&_.hidden}[f]),style:b({[B?"minWidth":"minHeight"]:V},k),ownerState:b({},w,{state:f}),ref:H},F,{children:p(Kt,{ownerState:b({},w,{state:f}),className:_.wrapper,ref:E,children:p(Xt,{ownerState:b({},w,{state:f}),className:_.wrapperInner,children:r})})}))}))});nt.muiSupportAuto=!0;const qt=nt;function Jt(e){const{className:t,classes:n,pulsate:i=!1,rippleX:o,rippleY:r,rippleSize:s,in:l,onExited:c,timeout:u}=e,[m,x]=a.useState(!1),v=I(t,n.ripple,n.rippleVisible,i&&n.ripplePulsate),T={width:s,height:s,top:-(s/2)+r,left:-(s/2)+o},h=I(n.child,m&&n.childLeaving,i&&n.childPulsate);return!l&&!m&&x(!0),a.useEffect(()=>{if(!l&&c!=null){const C=setTimeout(c,u);return()=>{clearTimeout(C)}}},[c,l,u]),p("span",{className:v,style:T,children:p("span",{className:h})})}const Qt=ee("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),j=Qt,Zt=["center","classes","className"];let Me=e=>e,Ye,Ke,Xe,qe;const ze=550,en=80,tn=ke(Ye||(Ye=Me`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),nn=ke(Ke||(Ke=Me`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),on=ke(Xe||(Xe=Me`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),rn=X("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),sn=X(Jt,{name:"MuiTouchRipple",slot:"Ripple"})(qe||(qe=Me`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),j.rippleVisible,tn,ze,({theme:e})=>e.transitions.easing.easeInOut,j.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,j.child,j.childLeaving,nn,ze,({theme:e})=>e.transitions.easing.easeInOut,j.childPulsate,on,({theme:e})=>e.transitions.easing.easeInOut),an=a.forwardRef(function(t,n){const i=te({props:t,name:"MuiTouchRipple"}),{center:o=!1,classes:r={},className:s}=i,l=Q(i,Zt),[c,u]=a.useState([]),m=a.useRef(0),x=a.useRef(null);a.useEffect(()=>{x.current&&(x.current(),x.current=null)},[c]);const v=a.useRef(!1),T=a.useRef(null),h=a.useRef(null),C=a.useRef(null);a.useEffect(()=>()=>{clearTimeout(T.current)},[]);const P=a.useCallback(g=>{const{pulsate:O,rippleX:w,rippleY:_,rippleSize:Y,cb:q}=g;u(E=>[...E,p(sn,{classes:{ripple:I(r.ripple,j.ripple),rippleVisible:I(r.rippleVisible,j.rippleVisible),ripplePulsate:I(r.ripplePulsate,j.ripplePulsate),child:I(r.child,j.child),childLeaving:I(r.childLeaving,j.childLeaving),childPulsate:I(r.childPulsate,j.childPulsate)},timeout:ze,pulsate:O,rippleX:w,rippleY:_,rippleSize:Y},m.current)]),m.current+=1,x.current=q},[r]),S=a.useCallback((g={},O={},w=()=>{})=>{const{pulsate:_=!1,center:Y=o||O.pulsate,fakeElement:q=!1}=O;if((g==null?void 0:g.type)==="mousedown"&&v.current){v.current=!1;return}(g==null?void 0:g.type)==="touchstart"&&(v.current=!0);const E=q?null:C.current,U=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let V,B,N;if(Y||g===void 0||g.clientX===0&&g.clientY===0||!g.clientX&&!g.touches)V=Math.round(U.width/2),B=Math.round(U.height/2);else{const{clientX:A,clientY:H}=g.touches&&g.touches.length>0?g.touches[0]:g;V=Math.round(A-U.left),B=Math.round(H-U.top)}if(Y)N=Math.sqrt((2*U.width**2+U.height**2)/3),N%2===0&&(N+=1);else{const A=Math.max(Math.abs((E?E.clientWidth:0)-V),V)*2+2,H=Math.max(Math.abs((E?E.clientHeight:0)-B),B)*2+2;N=Math.sqrt(A**2+H**2)}g!=null&&g.touches?h.current===null&&(h.current=()=>{P({pulsate:_,rippleX:V,rippleY:B,rippleSize:N,cb:w})},T.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},en)):P({pulsate:_,rippleX:V,rippleY:B,rippleSize:N,cb:w})},[o,P]),k=a.useCallback(()=>{S({},{pulsate:!0})},[S]),$=a.useCallback((g,O)=>{if(clearTimeout(T.current),(g==null?void 0:g.type)==="touchend"&&h.current){h.current(),h.current=null,T.current=setTimeout(()=>{$(g,O)});return}h.current=null,u(w=>w.length>0?w.slice(1):w),x.current=O},[]);return a.useImperativeHandle(n,()=>({pulsate:k,start:S,stop:$}),[k,S,$]),p(rn,b({className:I(j.root,r.root,s),ref:C},l,{children:p(Wt,{component:null,exit:!0,children:c})}))}),ln=an;function cn(e){return ie("MuiButtonBase",e)}const un=ee("MuiButtonBase",["root","disabled","focusVisible"]),dn=un,pn=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],fn=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:i,classes:o}=e,s=se({root:["root",t&&"disabled",n&&"focusVisible"]},cn,o);return n&&i&&(s.root+=` ${i}`),s},mn=X("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${dn.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),hn=a.forwardRef(function(t,n){const i=te({props:t,name:"MuiButtonBase"}),{action:o,centerRipple:r=!1,children:s,className:l,component:c="button",disabled:u=!1,disableRipple:m=!1,disableTouchRipple:x=!1,focusRipple:v=!1,LinkComponent:T="a",onBlur:h,onClick:C,onContextMenu:P,onDragLeave:S,onFocus:k,onFocusVisible:$,onKeyDown:g,onKeyUp:O,onMouseDown:w,onMouseLeave:_,onMouseUp:Y,onTouchEnd:q,onTouchMove:E,onTouchStart:U,tabIndex:V=0,TouchRippleProps:B,touchRippleRef:N,type:A}=i,H=Q(i,pn),W=a.useRef(null),z=a.useRef(null),Se=me(z,N),{isFocusVisibleRef:ae,onFocus:we,onBlur:Le,ref:Ie}=bt(),[K,ne]=a.useState(!1);u&&K&&ne(!1),a.useImperativeHandle(o,()=>({focusVisible:()=>{ne(!0),W.current.focus()}}),[]);const[f,F]=a.useState(!1);a.useEffect(()=>{F(!0)},[]);const G=f&&!m&&!u;a.useEffect(()=>{K&&v&&!m&&f&&z.current.pulsate()},[m,v,K,f]);function L(d,We,ht=x){return de(je=>(We&&We(je),!ht&&z.current&&z.current[d](je),!0))}const Z=L("start",w),le=L("stop",P),ot=L("stop",S),rt=L("stop",Y),it=L("stop",d=>{K&&d.preventDefault(),_&&_(d)}),st=L("start",U),at=L("stop",q),lt=L("stop",E),ct=L("stop",d=>{Le(d),ae.current===!1&&ne(!1),h&&h(d)},!1),ut=de(d=>{W.current||(W.current=d.currentTarget),we(d),ae.current===!0&&(ne(!0),$&&$(d)),k&&k(d)}),Pe=()=>{const d=W.current;return c&&c!=="button"&&!(d.tagName==="A"&&d.href)},Ve=a.useRef(!1),dt=de(d=>{v&&!Ve.current&&K&&z.current&&d.key===" "&&(Ve.current=!0,z.current.stop(d,()=>{z.current.start(d)})),d.target===d.currentTarget&&Pe()&&d.key===" "&&d.preventDefault(),g&&g(d),d.target===d.currentTarget&&Pe()&&d.key==="Enter"&&!u&&(d.preventDefault(),C&&C(d))}),pt=de(d=>{v&&d.key===" "&&z.current&&K&&!d.defaultPrevented&&(Ve.current=!1,z.current.stop(d,()=>{z.current.pulsate(d)})),O&&O(d),C&&d.target===d.currentTarget&&Pe()&&d.key===" "&&!d.defaultPrevented&&C(d)});let ce=c;ce==="button"&&(H.href||H.to)&&(ce=T);const oe={};ce==="button"?(oe.type=A===void 0?"button":A,oe.disabled=u):(!H.href&&!H.to&&(oe.role="button"),u&&(oe["aria-disabled"]=u));const ft=me(n,Ie,W),Ae=b({},i,{centerRipple:r,component:c,disabled:u,disableRipple:m,disableTouchRipple:x,focusRipple:v,tabIndex:V,focusVisible:K}),mt=fn(Ae);return R(mn,b({as:ce,className:I(mt.root,l),ownerState:Ae,onBlur:ct,onClick:C,onContextMenu:le,onFocus:ut,onKeyDown:dt,onKeyUp:pt,onMouseDown:Z,onMouseLeave:it,onMouseUp:rt,onDragLeave:ot,onTouchEnd:at,onTouchMove:lt,onTouchStart:st,ref:ft,tabIndex:u?-1:V,type:A},oe,H,{children:[s,G?p(ln,b({ref:Se,center:r},B)):null]}))}),yn=hn,gn=a.createContext({}),he=gn;function bn(e){return ie("MuiList",e)}ee("MuiList",["root","padding","dense","subheader"]);const xn=["children","className","component","dense","disablePadding","subheader"],vn=e=>{const{classes:t,disablePadding:n,dense:i,subheader:o}=e;return se({root:["root",!n&&"padding",i&&"dense",o&&"subheader"]},bn,t)},Cn=X("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})(({ownerState:e})=>b({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),Rn=a.forwardRef(function(t,n){const i=te({props:t,name:"MuiList"}),{children:o,className:r,component:s="ul",dense:l=!1,disablePadding:c=!1,subheader:u}=i,m=Q(i,xn),x=a.useMemo(()=>({dense:l}),[l]),v=b({},i,{component:s,dense:l,disablePadding:c}),T=vn(v);return p(he.Provider,{value:x,children:R(Cn,b({as:s,className:I(T.root,r),ref:n,ownerState:v},m,{children:[u,o]}))})}),Tn=Rn;function $n(e){return ie("MuiListItemButton",e)}const En=ee("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),re=En,Mn=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],Sn=(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.alignItems==="flex-start"&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters]},wn=e=>{const{alignItems:t,classes:n,dense:i,disabled:o,disableGutters:r,divider:s,selected:l}=e,u=se({root:["root",i&&"dense",!r&&"gutters",s&&"divider",o&&"disabled",t==="flex-start"&&"alignItemsFlexStart",l&&"selected"]},$n,n);return b({},n,u)},Ln=X(yn,{shouldForwardProp:e=>xt(e)||e==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:Sn})(({theme:e,ownerState:t})=>b({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${re.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:pe(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${re.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:pe(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${re.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:pe(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:pe(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${re.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${re.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.alignItems==="flex-start"&&{alignItems:"flex-start"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.dense&&{paddingTop:4,paddingBottom:4})),In=a.forwardRef(function(t,n){const i=te({props:t,name:"MuiListItemButton"}),{alignItems:o="center",autoFocus:r=!1,component:s="div",children:l,dense:c=!1,disableGutters:u=!1,divider:m=!1,focusVisibleClassName:x,selected:v=!1,className:T}=i,h=Q(i,Mn),C=a.useContext(he),P=a.useMemo(()=>({dense:c||C.dense||!1,alignItems:o,disableGutters:u}),[o,C.dense,c,u]),S=a.useRef(null);vt(()=>{r&&S.current&&S.current.focus()},[r]);const k=b({},i,{alignItems:o,dense:P.dense,disableGutters:u,divider:m,selected:v}),$=wn(k),g=me(S,n);return p(he.Provider,{value:P,children:p(Ln,b({ref:g,href:h.href||h.to,component:(h.href||h.to)&&s==="div"?"button":s,focusVisibleClassName:I($.focusVisible,x),ownerState:k,className:I($.root,T)},h,{classes:$,children:l}))})}),Pn=In;function Vn(e){return ie("MuiListItemText",e)}const Bn=ee("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),Je=Bn,Nn=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],zn=e=>{const{classes:t,inset:n,primary:i,secondary:o,dense:r}=e;return se({root:["root",n&&"inset",r&&"dense",i&&o&&"multiline"],primary:["primary"],secondary:["secondary"]},Vn,t)},Fn=X("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${Je.primary}`]:t.primary},{[`& .${Je.secondary}`]:t.secondary},t.root,n.inset&&t.inset,n.primary&&n.secondary&&t.multiline,n.dense&&t.dense]}})(({ownerState:e})=>b({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56})),_n=a.forwardRef(function(t,n){const i=te({props:t,name:"MuiListItemText"}),{children:o,className:r,disableTypography:s=!1,inset:l=!1,primary:c,primaryTypographyProps:u,secondary:m,secondaryTypographyProps:x}=i,v=Q(i,Nn),{dense:T}=a.useContext(he);let h=c??o,C=m;const P=b({},i,{disableTypography:s,inset:l,primary:!!h,secondary:!!C,dense:T}),S=zn(P);return h!=null&&h.type!==fe&&!s&&(h=p(fe,b({variant:T?"body2":"body1",className:S.primary,component:u!=null&&u.variant?void 0:"span",display:"block"},u,{children:h}))),C!=null&&C.type!==fe&&!s&&(C=p(fe,b({variant:"body2",className:S.secondary,color:"text.secondary",display:"block"},x,{children:C}))),R(Fn,b({className:I(S.root,r),ownerState:P,ref:n},v,{children:[h,C]}))}),Dn=_n,kn="_page_qleix_1",On="_title_qleix_5",Un="_videos_qleix_13",Be={page:kn,title:On,videos:Un},Yn=()=>{const[e,t]=a.useState(!0),[n,i]=a.useState({hour:0,min:0,sec:0}),o=a.useRef(null),r=()=>{t(!e)};return a.useEffect(()=>{if(!o.current)return;let l=[...o.current.childNodes].map(m=>{const{time:x}=m.dataset,[v,T]=x.split(":");return parseFloat(v)*60+parseFloat(T)}).reduce((m,x)=>m+x);const c=Math.floor(l/3600);l%=3600;const u=Math.floor(l/60);l%=60,!(n.hour===c||n.min===u||n.sec===l)&&i({hour:c,min:u,sec:l})},[o.current]),R(Ct,{baseClassName:Be.page,children:[p(Rt,{title:"Total Time",subtitle:`${n.hour}:${n.min}:${n.sec}`,titleClassName:Be.title,size:"m"}),R(Tn,{sx:{width:"100%",maxWidth:"360px",margin:"0 auto"},components:"nav","aria-labelledby":"nested-list-subheader",children:[R(Pn,{onClick:r,sx:{bgcolor:"#f1f1f1"},children:[p(Dn,{primary:"Example Data"}),e?p(Ft,{}):p(_t,{})]}),p(qt,{in:e,timeout:"auto",unmountOnExit:!0,sx:{bgcolor:"#fff",gap:"16px",maxHeight:"500px",overflowY:"scroll"},children:R("ul",{className:Be.videos,ref:o,children:[R("li",{"data-time":"5:43",children:["Video 1",p("span",{children:"5:43"})]}),R("li",{"data-time":"2:33",children:["Video 2",p("span",{children:"2:33"})]}),R("li",{"data-time":"3:45",children:["Video 3",p("span",{children:"3:45"})]}),R("li",{"data-time":"0:47",children:["Video 4",p("span",{children:"0:47"})]}),R("li",{"data-time":"5:21",children:["Video 5",p("span",{children:"5:21"})]}),R("li",{"data-time":"6:56",children:["Video 6",p("span",{children:"6:56"})]}),R("li",{"data-time":"3:46",children:["Video 7",p("span",{children:"3:46"})]}),R("li",{"data-time":"5:25",children:["Video 8",p("span",{children:"5:25"})]}),R("li",{"data-time":"3:14",children:["Video 9",p("span",{children:"3:14"})]}),R("li",{"data-time":"3:31",children:["Video 10",p("span",{children:"3:31"})]}),R("li",{"data-time":"5:59",children:["Video 11",p("span",{children:"5:59"})]}),R("li",{"data-time":"3:07",children:["Video 12",p("span",{children:"3:07"})]}),R("li",{"data-time":"11:29",children:["Video 13",p("span",{children:"11:29"})]}),R("li",{"data-time":"8:57",children:["Video 14",p("span",{children:"8:57"})]}),R("li",{"data-time":"5:49",children:["Video 15",p("span",{children:"7:49"})]})]})})]})]})};export{Yn as default};