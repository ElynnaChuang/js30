import{a as e,h as i,j as d,F as _,r as u}from"./index-4882b892.js";import{T as y}from"./index-ac1c91db.js";import{L as N}from"./index-db2e8858.js";const f=({id:s,status:r,textArr01:c,textArr02:t,subText:n})=>e("li",{className:i.list_item,children:r==="noresult"?e("div",{className:i.name,children:"No Result"}):d(_,{children:[d("div",{className:i.name,children:[[c[0],e("span",{className:i.hl,children:c[1]},s+c[1]),c[2]],",",[t[0],e("span",{className:i.hl,children:t[1]},s+t[1]),t[2]]]}),e("div",{className:i.population,children:n})]})}),b="https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json",v=async()=>{let s=[];try{s=(await(await fetch(b)).json()).map((t,n)=>({id:n,...t}))}catch{return s}return s},x="_page_1vyka_2",R="_title_1vyka_7",j="_search_form_1vyka_12",C="_search_1vyka_12",k="_suggestions_1vyka_35",g={page:x,title:R,search_form:j,search:C,suggestions:k},T=()=>{const[s,r]=u.useState([]),[c,t]=u.useState([]),[n,l]=u.useState(""),h=a=>{if(!a.length)return[];const o=new RegExp(a,"gi");return s.filter(p=>p.city.match(o)||p.state.match(o))},m=async a=>{const o=h(a);l(a),t([...o])};return u.useEffect(()=>{(async()=>{const o=await v();r(o)})()},[]),d(N,{baseClassName:g.page,children:[e(y,{title:"Filter for a city or a state",titleColor:"#fff",size:"s"}),d("form",{className:g.search_form,children:[e("input",{type:"text",className:g.search,placeholder:"Enter City or State",onChange:a=>m(a.target.value)}),e(D,{result:c,inputValue:n})]})]})},D=({result:s,inputValue:r})=>{const c=(t,n)=>{const l=new RegExp(t,"gi"),h=n.match(l);if(!h)return[n];const[m]=h,a=n.split(l);return a.splice(1,0,m),a};return e("ul",{className:g.suggestions,children:s.length?s.map(t=>e(f,{id:t.id,textArr01:c(r,t.city),textArr02:c(r,t.state),subText:t.population},t.id)):e(f,{status:"noresult"})})};export{T as default};
