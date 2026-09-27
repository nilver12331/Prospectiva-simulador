/* Matriz de correspondencia con especialidades integradas: la fila base conserva sus marcas (por su nombre original)
   y las integradas aparecen debajo, con las suyas. El generador carga el cruce real. */
const fs=require("fs"),path=require("path");
const P=f=>path.join(__dirname,"..",f);
let a=fs.readFileSync(P("js/app.js"),"utf8");
const r=(x,y)=>{ if(a.split(x).length!==2) throw new Error("no único: "+x.slice(0,80)); a=a.replace(x,y) };

/* integrar: se recuerda el nombre original de la base y en quién se integró cada absorbida */
r(`function integrar(a,b){
 const A=ESP[a],B=ESP[b];
 A.n=A.n+" + "+B.n.replace(/^(Nutrición|Ingeniería|Gestión|Desarrollo) (de |del )?/,"");`,
`function integrar(a,b){
 const A=ESP[a],B=ESP[b];
 A.n0=A.n0||A.n; B.integradaEn=A.n0;
 A.n=A.n+" + "+B.n.replace(/^(Nutrición|Ingeniería|Gestión|Desarrollo) (de |del )?/,"");`);
/* las marcas del agente se buscan por el nombre original */
r(`function marcasAgente(n){
 const out=[];
 const v=EQ[n];`,
`function marcasAgente(n){
 const out=[];
 const e0=ESP.find(x=>x.n===n); if(e0&&e0.n0) n=e0.n0;
 const v=EQ[n];`);
/* filas: seleccionadas y, debajo de cada una, las que integró */
r(`  \${selec.map(e=>{const tp=tipoDe(e.n);
   const cps=[...new Set(marcasDe(e.n).map(x=>x.c))].sort();
   return \`<tr><td class="esp"><span class="f-nom">\${e.n}</span>`,
`  \${selec.flatMap(e=>[e,...ESP.filter(o=>o.oculta&&o.integradaEn&&o.integradaEn===(e.n0||e.n)).map(o=>Object.assign(Object.create(o),{_sub:true}))]).map(e=>{const tp=tipoDe(e.n);
   const cps=[...new Set(marcasDe(e.n).map(x=>x.c))].sort();
   return \`<tr class="\${e._sub?"fila-int":""}"><td class="esp"><span class="f-nom">\${e._sub?"↳ ":""}\${e.n}</span>\${e._sub?\`<span class="f-sub">integrada en la fila anterior · se cruza con su propio proceso</span>\`:""}`);
fs.writeFileSync(P("js/app.js"),a);
fs.appendFileSync(P("css/tema.css"),`.fila-int td{background:#fbfcfe}.fila-int td.esp{padding-left:24px}.fila-int .f-nom{color:var(--gris);font-weight:600}
`);

let c=fs.readFileSync(P("herramientas/cartera-a-datos.js"),"utf8");
const cx=`  let MEJ=null; try{ MEJ=JSON.parse(fs.readFileSync(R("competencias/"+cod+"-mejoras.json"),"utf8")) }catch(err){}`;
if(c.split(cx).length!==2) throw new Error("no cartera-a-datos");
c=c.replace(cx,`  /* Paso 1.3 · momento 1 · cruce real (datos/competencias/<cod>-cruce.json) */
  let CRU=null; try{ CRU=JSON.parse(fs.readFileSync(R("competencias/"+cod+"-cruce.json"),"utf8")) }catch(err){}
  if(CRU){ D.eq=CRU.eq; D.extra=CRU.extra; D.eqman={}; D.sinEncaje=CRU.sinEncaje; D.capSinEsp=CRU.capSinEsp; D.guion=Object.assign({},D.guion,{10:CRU.resumen}); console.log("  cruce:",Object.keys(CRU.eq).length,"especialidades") }
`+cx);
fs.writeFileSync(P("herramientas/cartera-a-datos.js"),c);
console.log("cruce ui aplicado");
