import{a as s,a6 as m}from"./index-8bf4165c.js";const u=({name:l,selectClass:t,onChange:a,isDisable:r,options:c})=>s("select",{name:l,className:`${m.select} ${t}`,onChange:e=>a==null?void 0:a(e.target.value),disabled:r,children:c.map(e=>s("option",{value:e.value,children:e.optionName||e.name},e.key))});export{u as S};
