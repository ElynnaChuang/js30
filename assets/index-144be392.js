import{r as d,j as m,a as s,F as w}from"./index-a1969aff.js";import{L}from"./index-880ca017.js";import{T as M}from"./index-fa7f6835.js";const S="_page_1n6qq_1",D="_title_1n6qq_7",x="_container_1n6qq_24",A="_shadow_1n6qq_35",C="_scroll_items_1n6qq_45",N="_active_1n6qq_71",X="_item_1n6qq_77",n={page:S,title:D,container:x,shadow:A,scroll_items:C,active:N,item:X},I=Array.from({length:25},(o,t)=>({name:(t+1).toString().padStart(2,0),id:t})),f=(o,t)=>{if(!t)return 0;const{pageX:c}=o,l=t.getBoundingClientRect().left;return c-l},R=5,T=()=>{const o=d.useRef(),[t,c]=d.useState(!1),[l,u]=d.useState({startX:0,scrollLeft:0}),p=a=>{c(!0);const e=o.current,r=f(a,e),{scrollLeft:i}=e;u({startX:r,scrollLeft:i})},h=()=>{c(!1)},g=()=>{c(!1)},q=a=>{if(!t)return;a.preventDefault();const e=o.current,r=e.scrollWidth-e.clientWidth,i=f(a,e),v=(l.startX-i)*R,_=l.scrollLeft+v;e.scrollLeft=_>r?r:_};return m(L,{baseClassName:n.page,children:[s(M,{title:m(w,{children:[s("span",{children:"Click"})," ",s("span",{children:"and"})," ",s("span",{children:"Drag"})]}),size:"m",titleClassName:n.title}),m("div",{className:n.container,children:[s("div",{ref:o,role:"button",tabIndex:0,className:`${n.scroll_items} ${t?n.active:""}`,onMouseDown:p,onMouseLeave:h,onMouseUp:g,onMouseMove:q,children:I.map(({id:a,name:e})=>s("div",{className:n.item,children:s("p",{children:e})},a))}),s("div",{className:n.shadow})]})]})};export{T as default};