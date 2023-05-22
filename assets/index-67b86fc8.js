import{j as o,a as r,L as y,S as s}from"./index-e941a0c0.js";import{L as h}from"./index-804dc16c.js";import{T as m}from"./index-4bd6b276.js";const l=[{id:1,first:"Albert",last:"Einstein",year:1879,passed:1955},{id:2,first:"Isaac",last:"Newton",year:1643,passed:1727},{id:3,first:"Galileo",last:"Galilei",year:1564,passed:1642},{id:4,first:"Marie",last:"Curie",year:1867,passed:1934},{id:5,first:"Johannes",last:"Kepler",year:1571,passed:1630},{id:6,first:"Nicolaus",last:"Copernicus",year:1473,passed:1543},{id:7,first:"Max",last:"Planck",year:1858,passed:1947},{id:8,first:"Katherine",last:"Blodgett",year:1898,passed:1979},{id:9,first:"Ada",last:"Lovelace",year:1815,passed:1852},{id:10,first:"Sarah E.",last:"Goode",year:1855,passed:1905},{id:11,first:"Lise",last:"Meitner",year:1878,passed:1968},{id:12,first:"Hanna",last:"Hammarström",year:1829,passed:1909}],f=["Blake, William","Bernhard, Sandra","Bethea, Erin","Becker, Carl","Bentsen, Lloyd","Beckett, Samuel","Berger, Ric","Beddoes, Mick","Beethoven, Ludwig","Belloc, Hilaire","Begin, Menachem","Bake, Mena","Bellow, Saul","Benchley, Robert","Blair, Robert","Benenson, Peter","Benjamin, Walter","Berlin, Irving","Benn, Tony","Benson, Leana","Bent, Silas","Berle, Milton","Berry, Halle","Biko, Steve","Beck, Glenn","Bergman, Ingmar","Black, Elk","Berio, Luciano","Berne, Eric","Berra, Yogi","Berry, Wendell","Bevan, Aneurin","Ben-Gurion, David","Bevel, Ken","Biden, Joseph","Bennington, Chester","Bierce, Ambrose","Billings, Josh","Birrell, Augustine","Blair, Tony","Beecher, Henry","Biondo, Frank"],u=["car","car","truck","truck","bike","walk","car","van","bike","walk","car","van","car","truck"],C="_page_wvzee_1",b="_tables_wvzee_5",n={page:C,tables:b},S=()=>{const d=[...l].reduce((e,a)=>e+Number(a.passed-a.year),0),c=[...u].reduce((e,a)=>(e[a]||(e[a]=0),e[a]+=1,e),{}),B=Object.entries(c).map((e,a)=>{const[i,p]=e;return{id:a+1,way:i,times:p}}),t="#2796b5";return o(h,{baseClassName:n.page,children:[r(m,{title:" ArrayCardio v1",subtitle:r(y,{to:"/07",children:"Go to ArrayCardio v2 page"}),titleColor:t}),o("div",{className:n.tables,children:[r(s,{title:"01. All inventors",titleColor:t,headerColor:t,data:[...l].sort((e,a)=>e.id-a.id)}),r(s,{title:"02. Inventors first and last names",titleColor:t,headerColor:t,data:[...l].map(e=>({id:e.id,first:e.first,last:e.last}))}),r(s,{title:"03. The list of inventors for those who were born in the 1500's",titleColor:t,headerColor:t,data:[...l].filter(e=>e.year>=1500&&e.year<1600)}),r(s,{title:"04. Sort the inventors by birthdate, oldest to youngest",titleColor:t,headerColor:t,data:[...l].sort((e,a)=>e.year-a.year)}),r(s,{title:`05. Sort the inventors by years lived (total: ${d} years)`,titleColor:t,headerColor:t,data:[...l].map(e=>({...e,lived:e.passed-e.year})).sort((e,a)=>a.lived-e.lived)}),r(s,{title:"06. Sort the people alphabetically by last name",titleColor:t,headerColor:t,data:[...f].map((e,a)=>{const i=e.split(",");return{id:a+1,lastName:i[0],firstName:i[1]}}).sort((e,a)=>e.lastName>a.lastName?1:-1)}),r(s,{title:"07. Sum up the instances of each of transportation",titleColor:t,headerColor:t,data:B.sort((e,a)=>a.times-e.times)})]})]})};export{S as default};