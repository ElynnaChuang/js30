import{j as i,a as e}from"./index-36b453bc.js";import{L as c}from"./index-c7ecef89.js";import{T as r}from"./index-db655569.js";const l="_page_jcfiz_1",m="_bg_jcfiz_7",_="_container_jcfiz_12",b="_title_jcfiz_36",p="_list_jcfiz_52",o={page:l,bg:m,container:_,title:b,list:p},d=["The Plot in You","The Devil Wears Prada","Pierce the Veil","Norma Jean","The Bled","Say Anything","The Midway State","We Came as Romans","Counterparts","Oh, Sleeper","A Skylit Drive","Anywhere But Here","An Old Dog"],f=d.map((s,t)=>({id:t,name:s})),j="/js30/assets/17_base-784aab77.jpg",x="/js30/assets/17_l1x-e91300d6.webp",g="/js30/assets/17_l2x-045f56b9.webp",h="/js30/assets/17_m1x-77fb0f9c.webp",u="/js30/assets/17_m2x-1db3db1d.webp",w="/js30/assets/17_s1x-0820173d.webp",y="/js30/assets/17_s2x-322f52b3.webp",z="/js30/assets/17_s3x-c1f38457.webp",S={base:j,l1x:x,l2x:g,m1x:h,m2x:u,s1x:w,s2x:y,s3x:z},n=s=>s.replace(/^(a |an |the )/i,""),P=()=>{const s=f.sort((t,a)=>n(t.name)>n(a.name)?1:-1);return i(c,{bgImages:S,children:[e(r,{title:"Sorted Bands",subtitle:"sorting by name without articles",titleColor:"#fff",size:"m"}),e(T,{items:s})]})},T=({items:s=[]})=>e("ul",{className:o.list,children:s.map(({id:t,name:a})=>e(A,{id:t,name:a},t))}),A=({id:s,name:t})=>e("li",{className:o.item,id:s,children:t});export{T as List,P as default};