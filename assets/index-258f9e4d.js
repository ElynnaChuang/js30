import{r as h,k,j as b,a as c}from"./index-a4b5a922.js";import{L as x}from"./index-1f39cdb1.js";import{T as p}from"./index-639ead78.js";const y=({id:n,content:d,checkedStatus:s})=>{const[l,e]=h.useState(s),r=l?k.checked:k.default,a=t=>{const{checked:o}=t.target;e(o)};return h.useEffect(()=>{e(s)},[s]),b("div",{className:r,children:[c("input",{type:"checkbox",id:n,onChange:t=>a(t),checked:l}),c("label",{htmlFor:n,onClick:t=>t.stopPropagation(),children:d})]})},m="_page_rfn75_1",T="_items_container_rfn75_5",C={page:m,items_container:T},g=[{id:1,content:"This is an inbox layout",isCheck:!1},{id:2,content:"This is an inbox layout",isCheck:!1},{id:3,content:"This is an inbox layout",isCheck:!1},{id:4,content:"This is an inbox layout",isCheck:!1},{id:6,content:"This is an inbox layout",isCheck:!1},{id:7,content:"This is an inbox layout",isCheck:!1},{id:8,content:"This is an inbox layout",isCheck:!1},{id:9,content:"This is an inbox layout",isCheck:!1},{id:10,content:"This is an inbox layout",isCheck:!1},{id:11,content:"This is an inbox layout",isCheck:!1},{id:12,content:"This is an inbox layout",isCheck:!1},{id:13,content:"This is an inbox layout",isCheck:!1},{id:14,content:"This is an inbox layout",isCheck:!1},{id:15,content:"This is an inbox layout",isCheck:!1}],N=()=>{const[n,d]=h.useState(g);let s;const l=e=>{const r=document.querySelectorAll('input[type="checkbox"]'),a=[],{id:t}=e.target,{checked:o}=e.target,u=e.shiftKey;if(o||(s=0),o&&!u&&(s=t),o&&u){let f=!1;r.forEach(i=>{(i.id===s||i.id===t)&&(f=!f),f&&a.push(Number(i.id))}),a.push(Number(t)),d(n.map(i=>a.includes(i.id)?{...i,isCheck:!0}:i))}};return h.useEffect(()=>{window.addEventListener("click",l)},[]),b(x,{baseClassName:C.page,children:[c(p,{title:"Checkbox Page",titleColor:"#fff",size:"m"}),c("div",{className:C.items_container,children:n.map(e=>c(y,{id:e.id,content:e.content,checkedStatus:e.isCheck},e.id))})]})};export{N as default};
