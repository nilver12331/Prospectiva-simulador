/* Matriz de correspondencia por grupo integrado: una fila por grupo (nombre del grupo + «Integra: …»),
   las celdas reúnen las marcas de la base y de sus integradas; el tipo de la fila es el de la base. */
const fs=require("fs"),path=require("path");
const P=f=>path.join(__dirname,"..",f);
let a=fs.readFileSync(P("js/app.js"),"utf8");
const r=(x,y)=>{ if(a.split(x).length!==2) throw new Error("no único: "+x.slice(0,80)); a=a.replace(x,y) };

/* nombres de grupo */
r(`let INTEGR={};   // propuesta de integración de Génesys: nombre base → [nombres que absorbe]`,
`let INTEGR={};   // propuesta de integración de Génesys: nombre base → [nombres que absorbe]
let INTEGRN={};  // nombre que agrupa a cada integración: nombre base → nombre del grupo
const baseDe=e=>e.n0||e.n;
const miembrosDe=n=>(INTEGR[n]||[]).filter(m=>ESP.some(x=>x.n===m));
const esMiembro=n=>Object.values(INTEGR).some(l=>l.includes(n));`);
r(` INTEGR=clon(d.integr||{}); MEJORAS=clon(d.mejoras||{});`,` INTEGR=clon(d.integr||{}); INTEGRN=clon(d.integrNombre||{}); MEJORAS=clon(d.mejoras||{});`);

/* marcas: las de la base más las de sus integradas (para las celdas); solo las propias (para el tipo) */
r(`function marcasDe(n){
 let out=marcasAgente(n);`,
`function marcasDe(n,conGrupo=true){
 let out=marcasAgente(n);
 if(conGrupo){ const e0=ESP.find(x=>x.n===n); const b=e0?baseDe(e0):n; miembrosDe(b).forEach(m=>{ marcasDe(m,false).forEach(x=>{ if(!out.some(y=>y.c===x.c&&y.k===x.k)) out.push(Object.assign({},x,{de:m})) }) }) }`);
r(`function tipoDe(n){
 const m=marcasDe(n); if(!m.length)`,`function tipoDe(n){
 const m=marcasDe(n,false); if(!m.length)`);

/* filas: una por grupo; las integradas no salen como fila propia */
r(`  \${selec.flatMap(e=>[e,...ESP.filter(o=>o.oculta&&o.integradaEn&&o.integradaEn===(e.n0||e.n)).map(o=>Object.assign(Object.create(o),{_sub:true}))]).map(e=>{const tp=tipoDe(e.n);
   const cps=[...new Set(marcasDe(e.n).map(x=>x.c))].sort();
   return \`<tr class="\${e._sub?"fila-int":""}"><td class="esp"><span class="f-nom">\${e._sub?"↳ ":""}\${e.n}</span>\${e._sub?\`<span class="f-sub">integrada en la fila anterior · se cruza con su propio proceso</span>\`:""}`,
`  \${selec.filter(e=>!(esMiembro(baseDe(e))&&selec.some(b=>miembrosDe(baseDe(b)).includes(baseDe(e))))).map(e=>{const tp=tipoDe(e.n);
   const cps=[...new Set(marcasDe(e.n).map(x=>x.c))].sort();
   const mi=miembrosDe(baseDe(e)), nom=mi.length?(INTEGRN[baseDe(e)]||e.n):e.n;
   const rel=m=>{const t=tipoDe(m); const k=marcasDe(m,false).find(x=>x.k!==null); return t[0]==="cap"&&k&&ARQ[k.c]?"capacidad «"+ARQ[k.c].caps[k.k].n+"»":t[1].toLowerCase()};
   return \`<tr><td class="esp"><span class="f-nom">\${nom}</span>\${mi.length?\`<span class="f-int">⧉ Integra: <b>\${baseDe(e)}</b> (base) · \${mi.map(m=>m+" ("+rel(m)+")").join(" · ")}</span>\`:""}`);
/* la celda de una marca heredada de una integrada lo dice */
r(`  const todas=marcasDe(e.n);
  const m=todas.find(x=>x.c===ci&&x.k===ki);`,
`  const todas=marcasDe(e.n);
  const m=todas.find(x=>x.c===ci&&x.k===ki);
  if(m&&m.de) return \`<span class="mk \${m.t} her" title="Aporte de \${m.de}, integrada en este grupo">\${MKI[m.t]}</span><span class="mk-t">\${MKT[m.t]}<small>· \${m.de.split(" ").slice(0,3).join(" ")}</small></span>\`;`);
fs.writeFileSync(P("js/app.js"),a);

fs.appendFileSync(P("css/tema.css"),`.f-int{display:block;margin-top:4px;font-size:10.5px;color:var(--navy);background:#eaf1f8;border-radius:6px;padding:4px 7px;line-height:1.45}
.f-int b{font-weight:700}
.mk.her{opacity:.85;outline:1px dashed var(--navy-2);outline-offset:1px}
.mk-t small{display:block;font-size:9.5px;color:var(--gris-2)}
`);

/* generador: nombre de cada grupo */
let c=fs.readFileSync(P("herramientas/cartera-a-datos.js"),"utf8");
const cx=` D.integr=Object.fromEntries(Object.entries(INT).map(([b,l])=>[nom(b),l.map(nom).filter(Boolean)]).filter(x=>x[0]));`;
if(c.split(cx).length!==2) throw new Error("no cartera-a-datos");
c=c.replace(cx,cx+`
 const INTN={SIS:{"SIS-03":"Ciberseguridad y protección de datos","SIS-05":"Gobierno, proyectos y auditoría de TI","SIS-02":"Ciencia de datos, inteligencia artificial e inteligencia de negocios","SIS-04":"Infraestructura en la nube, DevOps y redes","SIS-01":"Desarrollo de software y análisis de sistemas"},
             NUT:{"NUT-01":"Nutrición clínica: hospitalaria, obesidad y geriátrica","NUT-02":"Servicios de alimentación, inocuidad y salud ocupacional","NUT-03":"Nutrición comunitaria y programas sociales"}}[cod];
 D.integrNombre=Object.fromEntries(Object.entries(INTN).map(([b,n])=>[nom(b),n]).filter(x=>x[0]));`);
fs.writeFileSync(P("herramientas/cartera-a-datos.js"),c);
console.log("cruce por grupos aplicado");
