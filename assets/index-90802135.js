import{j as n,a,L as y,S as o}from"./index-38e8c392.js";const i=[{id:1,name:"Wes",year:1988},{id:2,name:"Kait",year:1986},{id:3,name:"Irv",year:1970},{id:4,name:"Lux",year:2015}],s=[{text:"Love this!",id:523423},{text:"Super good",id:823423},{text:"You are the best",id:2039842},{text:"Ramen is my fav food ever",id:123523},{text:"Nice Nice Nice!",id:542328}],C="_page_1imfb_1",p="_title_1imfb_9",_="_link_1imfb_21",f="_container_1imfb_29",v="_hr_1imfb_42",l={page:C,title:p,link:_,container:f,hr:v},g=()=>{const t="#9363ad",r=new Date().getFullYear(),c=i.some(e=>r-e.year>=19),m=i.every(e=>r-e.year===19),h=s.findIndex(e=>e.id===823423),d=[...s];return d.splice(h,1),n("section",{className:l.page,children:[n("div",{className:l.title,style:{color:t},children:["ArrayCardio v2",a(y,{to:"/04",className:l.link,children:"Go to ArrayCardio v1 page"})]}),n("div",{className:l.container,children:[a(o,{title:"01. All people",titleColor:t,headerColor:t,data:i}),a(o,{title:`02. Is at least one person 19? (Answer: ${c?"Yes":"No"})`,titleColor:t,headerColor:t,data:i.filter(e=>r-e.year>=19).map(e=>({...e,age:r-e.year}))}),a(o,{title:`03. Is everyone 19? (Answer: ${m?"Yes":"No"})`,titleColor:t,headerColor:t,data:i.map(e=>({...e,age:r-e.year}))}),a("hr",{className:l.hr}),a(o,{title:"03. Every comments",titleColor:t,headerColor:t,data:s}),a(o,{title:"04. The comment with the ID of 823423",titleColor:t,headerColor:t,data:[...s].filter(e=>e.id===823423)}),a(o,{title:"05. Delete the comment with the ID of 823423",titleColor:t,headerColor:t,data:d})]})]})};export{g as default};