import{r as U,D as R,E as k,a as w,j as I}from"./index-c2c878e3.js";var P={},N={get exports(){return P},set exports(c){P=c}};(function(c,y){(function(g,d){c.exports=d(U)})(R,function(h){return function(g){var d={};function n(e){if(d[e])return d[e].exports;var s=d[e]={i:e,l:!1,exports:{}};return g[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=g,n.c=d,n.d=function(e,s,f){n.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:f})},n.r=function(e){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,s){if(s&1&&(e=n(e)),s&8||s&4&&typeof e=="object"&&e&&e.__esModule)return e;var f=Object.create(null);if(n.r(f),Object.defineProperty(f,"default",{enumerable:!0,value:e}),s&2&&typeof e!="string")for(var v in e)n.d(f,v,function(S){return e[S]}.bind(null,v));return f},n.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(s,"a",s),s},n.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},n.p="",n(n.s="./src/react-webcam.tsx")}({"./src/react-webcam.tsx":function(g,d,n){n.r(d);var e=n("react"),s=function(){var l=function(a,t){return l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)o.hasOwnProperty(i)&&(r[i]=o[i])},l(a,t)};return function(a,t){l(a,t);function r(){this.constructor=a}a.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),f=function(){return f=Object.assign||function(l){for(var a,t=1,r=arguments.length;t<r;t++){a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(l[o]=a[o])}return l},f.apply(this,arguments)},v=function(l,a){var t={};for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&a.indexOf(r)<0&&(t[r]=l[r]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(l);o<r.length;o++)a.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(l,r[o])&&(t[r[o]]=l[r[o]]);return t};(function(){typeof window>"u"||(navigator.mediaDevices===void 0&&(navigator.mediaDevices={}),navigator.mediaDevices.getUserMedia===void 0&&(navigator.mediaDevices.getUserMedia=function(a){var t=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;return t?new Promise(function(r,o){t.call(navigator,a,r,o)}):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}))})();function S(){return!!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)}var C=function(l){s(a,l);function a(t){var r=l.call(this,t)||this;return r.canvas=null,r.ctx=null,r.requestUserMediaId=0,r.unmounted=!1,r.state={hasUserMedia:!1},r}return a.prototype.componentDidMount=function(){var t=this,r=t.state,o=t.props;if(this.unmounted=!1,!S()){o.onUserMediaError("getUserMedia not supported");return}r.hasUserMedia||this.requestUserMedia(),o.children&&typeof o.children!="function"&&console.warn("children must be a function")},a.prototype.componentDidUpdate=function(t){var r=this.props;if(!S()){r.onUserMediaError("getUserMedia not supported");return}var o=JSON.stringify(t.audioConstraints)!==JSON.stringify(r.audioConstraints),i=JSON.stringify(t.videoConstraints)!==JSON.stringify(r.videoConstraints),u=t.minScreenshotWidth!==r.minScreenshotWidth,m=t.minScreenshotHeight!==r.minScreenshotHeight;(i||u||m)&&(this.canvas=null,this.ctx=null),(o||i)&&(this.stopAndCleanup(),this.requestUserMedia())},a.prototype.componentWillUnmount=function(){this.unmounted=!0,this.stopAndCleanup()},a.stopMediaStream=function(t){t&&(t.getVideoTracks&&t.getAudioTracks?(t.getVideoTracks().map(function(r){t.removeTrack(r),r.stop()}),t.getAudioTracks().map(function(r){t.removeTrack(r),r.stop()})):t.stop())},a.prototype.stopAndCleanup=function(){var t=this.state;t.hasUserMedia&&(a.stopMediaStream(this.stream),t.src&&window.URL.revokeObjectURL(t.src))},a.prototype.getScreenshot=function(t){var r=this,o=r.state,i=r.props;if(!o.hasUserMedia)return null;var u=this.getCanvas(t);return u&&u.toDataURL(i.screenshotFormat,i.screenshotQuality)},a.prototype.getCanvas=function(t){var r=this,o=r.state,i=r.props;if(!this.video||!o.hasUserMedia||!this.video.videoHeight)return null;if(!this.ctx){var u=this.video.videoWidth,m=this.video.videoHeight;if(!this.props.forceScreenshotSourceSize){var p=u/m;u=i.minScreenshotWidth||this.video.clientWidth,m=u/p,i.minScreenshotHeight&&m<i.minScreenshotHeight&&(m=i.minScreenshotHeight,u=m*p)}this.canvas=document.createElement("canvas"),this.canvas.width=(t==null?void 0:t.width)||u,this.canvas.height=(t==null?void 0:t.height)||m,this.ctx=this.canvas.getContext("2d")}var _=this,M=_.ctx,b=_.canvas;return M&&b&&(i.mirrored&&(M.translate(b.width,0),M.scale(-1,1)),M.imageSmoothingEnabled=i.imageSmoothing,M.drawImage(this.video,0,0,(t==null?void 0:t.width)||b.width,(t==null?void 0:t.height)||b.height),i.mirrored&&(M.scale(-1,1),M.translate(-b.width,0))),b},a.prototype.requestUserMedia=function(){var t=this,r=this.props,o=function(m,p){var _={video:typeof p<"u"?p:!0};r.audio&&(_.audio=typeof m<"u"?m:!0),t.requestUserMediaId++;var M=t.requestUserMediaId;navigator.mediaDevices.getUserMedia(_).then(function(b){t.unmounted||M!==t.requestUserMediaId?a.stopMediaStream(b):t.handleUserMedia(null,b)}).catch(function(b){t.handleUserMedia(b)})};if("mediaDevices"in navigator)o(r.audioConstraints,r.videoConstraints);else{var i=function(m){return{optional:[{sourceId:m}]}},u=function(m){var p=m.deviceId;return typeof p=="string"?p:Array.isArray(p)&&p.length>0?p[0]:typeof p=="object"&&p.ideal?p.ideal:null};MediaStreamTrack.getSources(function(m){var p=null,_=null;m.forEach(function(j){j.kind==="audio"?p=j.id:j.kind==="video"&&(_=j.id)});var M=u(r.audioConstraints);M&&(p=M);var b=u(r.videoConstraints);b&&(_=b),o(i(p),i(_))})}},a.prototype.handleUserMedia=function(t,r){var o=this.props;if(t||!r){this.setState({hasUserMedia:!1}),o.onUserMediaError(t);return}this.stream=r;try{this.video&&(this.video.srcObject=r),this.setState({hasUserMedia:!0})}catch{this.setState({hasUserMedia:!0,src:window.URL.createObjectURL(r)})}o.onUserMedia(r)},a.prototype.render=function(){var t=this,r=this,o=r.state,i=r.props,u=i.audio;i.forceScreenshotSourceSize,i.onUserMedia,i.onUserMediaError,i.screenshotFormat,i.screenshotQuality,i.minScreenshotWidth,i.minScreenshotHeight,i.audioConstraints,i.videoConstraints,i.imageSmoothing;var m=i.mirrored,p=i.style,_=p===void 0?{}:p,M=i.children,b=v(i,["audio","forceScreenshotSourceSize","onUserMedia","onUserMediaError","screenshotFormat","screenshotQuality","minScreenshotWidth","minScreenshotHeight","audioConstraints","videoConstraints","imageSmoothing","mirrored","style","children"]),j=m?f(f({},_),{transform:(_.transform||"")+" scaleX(-1)"}):_,D={getScreenshot:this.getScreenshot.bind(this)};return e.createElement(e.Fragment,null,e.createElement("video",f({autoPlay:!0,src:o.src,muted:!u,playsInline:!0,ref:function(E){t.video=E},style:j},b)),M&&M(D))},a.defaultProps={audio:!1,forceScreenshotSourceSize:!1,imageSmoothing:!0,mirrored:!1,onUserMedia:function(){},onUserMediaError:function(){},screenshotFormat:"image/webp",screenshotQuality:.92},a}(e.Component);d.default=C},react:function(g,d){g.exports=h}}).default})})(N);const W=k(P),T="_page_f0d6w_1",A="_photobooth_f0d6w_7",q="_filters_f0d6w_22",G="_video_container_f0d6w_36",F="_screenshot_f0d6w_72",H="_button_f0d6w_97",L="_disabled_f0d6w_109",z="_checked_f0d6w_113",O={page:T,photobooth:A,filters:q,video_container:G,screenshot:F,button:H,disabled:L,checked:z},x=[{id:1,value:"original",label:"Original",func:(c,y)=>c.putImageData(y,0,0)},{id:2,value:"rgbSplit",label:"RGB Split",func:(c,y)=>{c.putImageData(y,0,0);const{width:h,height:g}=c.canvas,d=c.getImageData(0,0,h,g),{data:n}=d;for(let e=0;e<n.length;e+=4)n[e-50]=n[e+0],n[e+200]=n[e+1],n[e-250]=n[e+2];c.putImageData(d,0,0)}},{id:3,value:"grayScale",label:"Gray Scale",func:(c,y)=>{c.putImageData(y,0,0);const{width:h,height:g}=c.canvas,d=c.getImageData(0,0,h,g),{data:n}=d;for(let e=0;e<d.data.length;e+=4){const s=n[e]*.3+n[e+1]*.6+n[e+2]*.1;n[e+0]=s,n[e+1]=s,n[e+2]=s}c.putImageData(d,0,0)}},{id:4,value:"nos",label:"Nostalgia",func:(c,y)=>{c.putImageData(y,0,0);const{width:h,height:g}=c.canvas,d=c.getImageData(0,0,h,g),{data:n}=d;for(let e=0;e<n.length;e+=4){const s=n[e+0],f=n[e+1],v=n[e+2];n[e+0]=s*.5+f*.72+v*.35,n[e+1]=s*.28+f*.63+v*.28,n[e+2]=s*.17+f*.69+v*.13}c.putImageData(d,0,0)}},{id:5,value:"mosaic",label:"Mosaic",func:(c,y)=>{c.putImageData(y,0,0);const{width:h,height:g}=c.canvas,d=c.getImageData(0,0,h,g),{data:n}=d,e=12,s=2*e+1,f=s*s;for(let v=e;v<=h;v+=s)for(let S=e;S<=g;S+=s){let C=0,l=0,a=0;for(let i=-e;i<=e;i+=1)for(let u=-e;u<=e;u+=1)C+=n[4*((S+i)*h+v+u)+0],l+=n[4*((S+i)*h+v+u)+1],a+=n[4*((S+i)*h+v+u)+2];const t=C/f,r=l/f,o=a/f;for(let i=-e;i<=e;i+=1)for(let u=-e;u<=e;u+=1)n[4*((S+i)*h+v+u)+0]=t,n[4*((S+i)*h+v+u)+1]=r,n[4*((S+i)*h+v+u)+2]=o}c.putImageData(d,0,0)}}],J={width:{ideal:1920},height:{ideal:1080},aspectRatio:.6666666667,facingMode:"user"},$=()=>{const c=U.useRef(null),y=U.useRef(null),h=U.useRef(null),[g,d]=U.useState(!1),[n,e]=U.useState(null),[s,f]=U.useState(null),[v,S]=U.useState(x[0].value);U.useEffect(()=>{e(y.current.getContext("2d"))},[]);const C=()=>{const l=c.current.getScreenshot(),a=new Image;a.src=l,a.onload=()=>{const t=y.current,{width:r,height:o}=a;t.width=r,t.height=o,n.drawImage(a,0,0),h.current=a,f(n.getImageData(0,0,r,o)),S(x[0].value)}};return w("section",{className:O.page,children:I("div",{className:O.photobooth,children:[w("div",{className:O.filters,children:x.map(l=>{const{id:a,value:t,label:r,func:o}=l;return w(Q,{label:r,onClick:()=>{S(t),o==null||o(n,s)},isDisabled:!s,isChecked:v===t},a)})}),I("div",{className:O.video_container,children:[w(W,{mirrored:!0,ref:c,audio:!1,videoConstraints:J,onCanPlay:()=>d(!0),minScreenshotWidth:1920,minScreenshotHeight:1080,screenshotFormat:"image/jpeg"}),g?w("button",{onClick:C,children:"Take Photo"}):w("h3",{children:"Camera Permission Denied"})]}),I("div",{className:O.screenshot,children:[!s&&w("p",{children:"No Picture Now"}),w("canvas",{ref:y})]})]})})},Q=({label:c,onClick:y,isDisabled:h,isChecked:g})=>{const d=`
  ${O.button}
  ${h?O.disabled:""}
  ${g?O.checked:""}
  `;return w("button",{className:d,onClick:()=>y==null?void 0:y(),children:c})};export{$ as default};
