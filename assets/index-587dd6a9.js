import{r,j as u,f as _,a as s,I as S}from"./index-1a56e42a.js";import{L as h}from"./index-e5498cb8.js";const g=({label:i,name:e,initialValue:n,min:a,max:o,handleCgange:t})=>{const[l,c]=r.useState(n),d=m=>{c(m.target.value),t==null||t(m.target.value)};return u("div",{className:_.input_container,children:[s("label",{htmlFor:e,children:`${i} : ${l}`}),s("input",{type:"range",id:e,name:e,min:a,max:o,value:l,onChange:m=>d(m)})]})},j=({label:i,name:e,initialValue:n,handleCgange:a})=>{const[o,t]=r.useState(n),l=c=>{t(c.target.value),a==null||a(c.target.value)};return u("div",{className:_.input_container,children:[s("label",{htmlFor:e,children:i}),s("input",{type:"color",id:e,name:e,value:o,onChange:c=>l(c)})]})},v="/js30/assets/base-bc574842.jpg",x="/js30/assets/image_l1x-0db76051.webp",b="/js30/assets/image_l2x-43272621.webp",y="/js30/assets/image_s1x-31667fc5.webp",f="/js30/assets/image_s2x-603c4c73.webp",w="/js30/assets/image_s3x-09b82038.webp",C="_page_1pub1_1",N="_title_1pub1_5",V="_controls_1pub1_13",$="_example_img_1pub1_23",p={page:C,title:N,controls:V,example_img:$},L=()=>{const[i,e]=r.useState(10),[n,a]=r.useState(0),[o,t]=r.useState("#FACA7A"),l={padding:`${i}px`,background:o,filter:`blur(${n}px)`};return u(h,{baseClassName:p.page,children:[u("h2",{className:p.title,children:["Update CSS Variables with",s("span",{style:{color:`${l.background}`},children:"JS"})]}),u("div",{className:p.controls,children:[s(g,{label:"Spacing",name:"spacing",min:"10",max:"200",initialValue:i,handleCgange:e}),s(g,{label:"Blur",name:"blur",min:"0",max:"25",initialValue:n,handleCgange:a}),s(j,{label:"Base Color",name:"base",initialValue:o,handleCgange:t})]}),s(S,{className:p.example_img,images:{base:v,l1x:x,l2x:b,m1x:x,m2x:b,s1x:y,s2x:f,s3x:w},imgStyle:l})]})};export{L as default};
