import{B as N,a as e,a8 as g,j as l,a9 as P,aa as x,r as u,F as $,p as I,ab as C}from"./index-36b453bc.js";import{L as z}from"./index-c7ecef89.js";import{T as E}from"./index-db655569.js";const L=N(e("path",{d:"M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2zm6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2z"}),"PauseRounded"),A=N(e("path",{d:"M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"}),"PlayArrowRounded"),D=N(e("path",{d:"M12 5V3.21c0-.45-.54-.67-.85-.35l-2.8 2.79c-.2.2-.2.51 0 .71l2.79 2.79c.32.31.86.09.86-.36V7c3.31 0 6 2.69 6 6 0 2.72-1.83 5.02-4.31 5.75-.42.12-.69.52-.69.95 0 .65.62 1.16 1.25.97C17.57 19.7 20 16.64 20 13c0-4.42-3.58-8-8-8zm-6 8c0-1.34.44-2.58 1.19-3.59.3-.4.26-.95-.09-1.31-.42-.42-1.14-.38-1.5.1-1 1.34-1.6 3-1.6 4.8 0 3.64 2.43 6.7 5.75 7.67.63.19 1.25-.32 1.25-.97 0-.43-.27-.83-.69-.95C7.83 18.02 6 15.72 6 13z"}),"RestartAltRounded"),r=({text:t,icon:n,btnStyle:c="normal",disabled:m,onClick:s})=>{const a=g[c];return l("button",{className:`${g.btn} ${a}`,onClick:s,disabled:m,children:[n," ",t]})},R=({id:t,min:n,max:c,label:m,startCount:s,countdownValue:a,inputValue:h,onChange:y})=>l("div",{className:P.time_input,children:[e("label",{htmlFor:"min",children:m}),e("input",{id:t,type:"number",min:n,max:c,value:s?a:h,onChange:s?()=>{}:y,disabled:s})]});function v(t){const n=Math.floor(t/60),c=t%60;return{min:n,sec:c}}function S(t){return t>=10?`${t}`:`0${t}`}const F=()=>l("div",{className:x.container,children:[e("div",{className:x.backDrop}),e("div",{className:x.card,children:"Times Up!"})]}),j=({open:t})=>{const[n,c]=u.useState(!1);return u.useEffect(()=>{c(t)},[t]),l($,{children:[e("p",{style:{display:"none"},children:"Result"}),n&&I.createPortal(e(F,{}),document.body)]})},B=()=>{const[t,n]=u.useState(!1),[c,m]=u.useState(!1),[s,a]=u.useState({min:0,sec:0}),[h,y]=u.useState({min:0,sec:0});u.useEffect(()=>{let i;if(t){let o=s.min*60+s.sec;y(()=>v(o)),i=setInterval(()=>(o-=1,o<0?(n(!1),m(!0),setTimeout(()=>m(!1),1500),clearInterval(i)):y(()=>v(o))),1e3)}return()=>clearInterval(i)},[t]);const T=i=>{const{id:o,value:d,max:p,min:w}=i.target;return d>Number(p)?a(b=>({...b,[o]:Number(p)})):d<Number(w)?a(b=>({...b,[o]:Number(w)})):a(b=>({...b,[o]:Number(d)}))},k=()=>{n(!0)},M=()=>{a(h),n(!1)},_=()=>{a({min:0,sec:0}),n(!1)},f=i=>{const d=s.min*60+s.sec;if(d===0&&i<0||d===3599&&i>0)return;const p=d+i;p<0?a({min:0,sec:0}):p>3599?a({min:59,sec:59}):a(v(p))};return l("div",{className:C.timer,children:[l("div",{className:C.controls,children:[l("div",{className:C.time_value,children:[e(r,{text:"-2m",onClick:()=>f(-120),disabled:t}),e(r,{text:"-15s",onClick:()=>f(-15),disabled:t}),e(r,{text:"-1s",onClick:()=>f(-1),disabled:t}),e(r,{text:"+1s",onClick:()=>f(1),disabled:t}),e(r,{text:"+15s",onClick:()=>f(15),disabled:t}),e(r,{text:"+2m",onClick:()=>f(120),disabled:t})]}),l("div",{className:C.time_run,children:[e(r,{icon:e(D,{}),text:"Reset",onClick:_,btnStyle:"primary"}),e(r,{btnStyle:"primary",icon:e(A,{}),text:"Start",onClick:k,disabled:t}),e(r,{btnStyle:"primary",icon:e(L,{}),text:"Pause",onClick:M,disabled:!t})]})]}),l("div",{className:C.inputs,children:[e(R,{id:"min",label:"Minutes",min:0,max:59,startCount:t,countdownValue:S(h.min),inputValue:S(s.min),onChange:T}),e("span",{children:":"}),e(R,{id:"sec",label:"Seconds",min:0,max:59,startCount:t,countdownValue:S(h.sec),inputValue:S(s.sec),onChange:T})]}),e(j,{open:c})]})},U="_page_14ywf_2",q="_title_14ywf_9",V={page:U,title:q},K=()=>l(z,{baseClassName:V.page,children:[e(E,{title:"Countdown",titleClassName:V.title}),e(B,{})]});export{K as default};