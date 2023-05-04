import{r as h,j as p,a0 as x,a as n,a1 as u}from"./index-38e8c392.js";const S=({addItem:t})=>{const[e,r]=h.useState(""),s=a=>{a.preventDefault(),t==null||t(e),r("")};return p("form",{className:x.form,onSubmit:s,children:[n("input",{type:"text",placeholder:"Item name",value:e,onChange:a=>r(a.target.value)}),n("button",{type:"submit",onClick:s,children:"+ Add Item"})]})},v=({items:t=[],handleDone:e})=>n("ul",{className:u.list,children:t.map(({id:r,name:s,done:a})=>n(C,{name:s,done:a,onClick:()=>e==null?void 0:e(r)},r))}),C=({name:t,done:e,onClick:r})=>n("li",{className:`${u.list_item} ${e?u.done:""}`,onClick:r,children:n("p",{children:t})});let d;const w=new Uint8Array(16);function I(){if(!d&&(d=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!d))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return d(w)}const c=[];for(let t=0;t<256;++t)c.push((t+256).toString(16).slice(1));function U(t,e=0){return(c[t[e+0]]+c[t[e+1]]+c[t[e+2]]+c[t[e+3]]+"-"+c[t[e+4]]+c[t[e+5]]+"-"+c[t[e+6]]+c[t[e+7]]+"-"+c[t[e+8]]+c[t[e+9]]+"-"+c[t[e+10]]+c[t[e+11]]+c[t[e+12]]+c[t[e+13]]+c[t[e+14]]+c[t[e+15]]).toLowerCase()}const L=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),g={randomUUID:L};function N(t,e,r){if(g.randomUUID&&!e&&!t)return g.randomUUID();t=t||{};const s=t.random||(t.rng||I)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,e){r=r||0;for(let a=0;a<16;++a)e[r+a]=s[a];return e}return U(s)}const _=()=>n("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 512 512",enableBackground:"new 0 0 512 512",xmlSpace:"preserve",children:p("g",{children:[n("path",{d:"M495.9,425.3H16.1c-5.2,0-10.1,2.9-12.5,7.6c-2.4,4.7-2.1,10.3,0.9,14.6l39,56.4c2.6,3.8,7,6.1,11.6,6.1h401.7   c4.6,0,9-2.3,11.6-6.1l39-56.4c3-4.3,3.3-9.9,0.9-14.6C506,428.2,501.1,425.3,495.9,425.3z M449.4,481.8H62.6L43,453.6H469   L449.4,481.8z"}),n("path",{d:"M158.3,122c7.8,0,14.1-6.3,14.1-14.1V43.4c0-7.8-6.3-14.1-14.1-14.1c-7.8,0-14.1,6.3-14.1,14.1v64.5   C144.2,115.7,150.5,122,158.3,122z"}),n("path",{d:"M245.1,94.7c7.8,0,14.1-6.3,14.1-14.1V16.1c0-7.8-6.3-14.1-14.1-14.1C237.3,2,231,8.3,231,16.1v64.5   C231,88.4,237.3,94.7,245.1,94.7z"}),n("path",{d:"M331.9,122c7.8,0,14.1-6.3,14.1-14.1V43.4c0-7.8-6.3-14.1-14.1-14.1s-14.1,6.3-14.1,14.1v64.5   C317.8,115.7,324.1,122,331.9,122z"}),n("path",{d:"M9.6,385.2c5.3,2.8,11.8,1.9,16.2-2.2l50.6-47.7c56.7,46.5,126.6,71.9,198.3,71.9c0,0,0,0,0,0   c87.5,0,169.7-36.6,231.4-103.2c5-5.4,5-13.8,0-19.2c-61.8-66.5-144-103.2-231.4-103.2c-72,0-142.2,25.6-199,72.5l-50-47.1   c-4.4-4.1-10.9-5-16.2-2.2c-5.3,2.8-8.3,8.7-7.4,14.6l11.6,75L2.2,370.6C1.3,376.5,4.2,382.4,9.6,385.2z M380.9,230.8   c34.9,14.3,67.2,35.7,95.3,63.6c-10.1,10-20.8,19.2-31.9,27.5c-22.4-3.3-29.6-8.8-30.7-9.7c-4-5.7-11.8-7.7-18.1-4.4   c-6.9,3.6-9.5,12.2-5.9,19.1c1.9,3.5,7.3,10.3,22.4,16c-10.1,5.7-20.5,10.7-31.1,15.1C352.4,320.2,352.4,268.6,380.9,230.8z    M36.3,255.6l29.4,27.7c5.3,5,13.6,5.1,19.1,0.3c53.2-47.6,120.7-73.7,190-73.7c26.9,0,53.2,3.9,78.5,11.3   c-29.3,44.6-29.3,102,0,146.6c-25.3,7.4-51.6,11.3-78.5,11.3c-69,0-136.3-26-189.4-73.2c-2.7-2.4-13.4-6.3-19.1,0.3l-30.1,28.3   l5.7-40C42.2,293,36.3,255.6,36.3,255.6z"}),n("circle",{cx:"398.8",cy:"273.8",r:"14.1"})]})}),z="_page_1myya_2",M="_container_1myya_21",b="_wrapper_1myya_47",m={page:z,container:M,wrapper:b},V=()=>{const[t,e]=h.useState(JSON.parse(localStorage.getItem("items"))||[]),r=i=>{if(!i.trim().length)return;const l={id:N(),name:i,done:!1};e(y=>[...y,l]),localStorage.setItem("items",JSON.stringify([...t,l]))},s=i=>{e(o=>o.map(l=>l.id===i?{...l,done:!l.done}:l)),localStorage.setItem("items",JSON.stringify(t.map(o=>o.id===i?{...o,done:!o.done}:o)))},a=()=>{e([]),localStorage.removeItem("items")};return n("section",{className:m.page,children:p("div",{className:m.container,children:[n(_,{}),p("div",{className:m.wrapper,children:[n("h2",{className:m.title,children:"LOCAL TAPAS"}),n(S,{addItem:r}),n(v,{items:t,handleDone:s}),!!t.length&&n("button",{onClick:a,children:"Clear All"})]})]})})};export{V as default};