import{r as d,s as r,j as k,a as t,I as w}from"./index-38e8c392.js";const p=({keyName:n,soundTag:u,currentKey:o,onClick:s})=>{const[e,c]=d.useState(!1),l=e?r.active_key:r.default_key,y=()=>{c(!0),setTimeout(()=>c(!1),200)};return d.useEffect(()=>{o===n.toLowerCase()&&y()},[n,o]),k("button",{tabIndex:"0",className:l,onClick:()=>{s==null||s(),y()},children:[t("kbd",{children:n}),t("span",{className:r.soundTag,children:u})]})},g="/js30/assets/clap-08503e34.wav",h="/js30/assets/hihat-60673504.wav",N="/js30/assets/kick-7e4f0243.wav",b="/js30/assets/openhat-178e58ea.wav",f="/js30/assets/boom-bf1a1025.wav",j="/js30/assets/ride-ac3ceeac.wav",_="/js30/assets/snare-51b6e61b.wav",v="/js30/assets/tom-c1514e79.wav",T="/js30/assets/tink-047d06f1.wav",x="/js30/assets/base-5030a85b.jpg",a="/js30/assets/base-a44ff76a.webp",A="_page_pkwyw_1",I="_bg_pkwyw_8",E="_container_pkwyw_19",S="_keys_pkwyw_27",P="_caption_pkwyw_35",i={page:A,bg:I,container:E,keys:S,caption:P},K=[{keyNum:65,keyName:"a",soundTag:"clap"},{keyNum:83,keyName:"s",soundTag:"hihat"},{keyNum:68,keyName:"d",soundTag:"kick"},{keyNum:70,keyName:"f",soundTag:"openhat"},{keyNum:71,keyName:"g",soundTag:"boom"},{keyNum:72,keyName:"h",soundTag:"ride"},{keyNum:74,keyName:"j",soundTag:"snare"},{keyNum:75,keyName:"k",soundTag:"tom"},{keyNum:76,keyName:"l",soundTag:"tink"}],m={a:new Audio(g),s:new Audio(h),d:new Audio(N),f:new Audio(b),g:new Audio(f),h:new Audio(j),j:new Audio(_),k:new Audio(v),l:new Audio(T)},$=()=>{const[n,u]=d.useState(""),o=s=>{m[s]&&(m[s].currentTime=0,m[s].play())};return d.useEffect(()=>{window.addEventListener("keydown",s=>{const e=window.location.pathname.split("/");e[e.length-1]==="01"&&(o(s.key),u(s.key),setTimeout(()=>u(""),100))})},[]),k("section",{className:i.page,children:[t(w,{images:{base:x,l1x:a,l2x:a,m1x:a,m2x:a,s1x:a,s2x:a,s3x:a},className:i.bg}),k("div",{className:i.container,children:[t("h1",{className:i.caption,children:"Press your keyboard or tap the keys on the screen!"}),t("div",{className:i.keys,children:K.map(({keyNum:s,keyName:e,soundTag:c})=>t(p,{keyName:e,soundTag:c,onClick:()=>o(e),currentKey:n},s))})]})]})};export{$ as default};