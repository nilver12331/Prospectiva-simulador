/* 1.1 · momento 5: «Integrar nombres». En la barra del tablero, en lugar de «Declarar la capacidad instalada», un botón abre un
   formulario donde la Escuela confirma qué especialidades integra cada grupo y le da nombre. Ese nombre y esa composición
   son los que usa la matriz del 1.3 (S.grupos manda sobre la propuesta de Génesys INTEGR / INTEGRN). */
const fs=require("fs"),path=require("path");
const P=f=>path.join(__dirname,"..",f);
let a=fs.readFileSync(P("js/app.js"),"utf8");
const r=(x,y)=>{ if(a.split(x).length!==2) throw new Error("no único: "+x.slice(0,80)); a=a.replace(x,y) };

/* estado */
r(`capForm:false,acta:false,verPlan:false,capAy:null,capAg:true,capOk:false,planArchivo:null,contrasteOmitido:false,snaps:{},`,
  `capForm:false,acta:false,verPlan:false,capAy:null,capAg:true,capOk:false,planArchivo:null,contrasteOmitido:false,snaps:{},grupos:{},intForm:false,`);
r(`   infVer:S.infVer,rev:S.rev,acto:S.acto,encIns:S.encIns,encExtra:S.encExtra,snaps:S.snaps,fue:S.fue,integr:S.integr}};`,
  `   infVer:S.infVer,rev:S.rev,acto:S.acto,encIns:S.encIns,encExtra:S.encExtra,snaps:S.snaps,fue:S.fue,integr:S.integr,grupos:S.grupos}};`);
r(` S.snaps=p.snaps||{}; S.fue=p.fue||S.fue||[]; S.integr=p.integr||S.integr||[];`,
  ` S.snaps=p.snaps||{}; S.fue=p.fue||S.fue||[]; S.integr=p.integr||S.integr||[]; S.grupos=p.grupos||{}; S.intForm=false;`);
r(` S.fue=[]; S.integr=[]; S.snaps={};`,` S.fue=[]; S.integr=[]; S.snaps={}; S.grupos={};`);

/* los grupos de la Escuela mandan sobre la propuesta */
r(`const miembrosDe=n=>(INTEGR[n]||[]).filter(m=>ESP.some(x=>x.n===m));
const esMiembro=n=>Object.values(INTEGR).some(l=>l.includes(n));`,
`const gruposDef=()=>{ const g={}; Object.keys(INTEGR).forEach(b=>{ g[b]={nombre:INTEGRN[b]||b,miembros:(INTEGR[b]||[]).slice()} });
  ESP.filter(e=>e.oculta&&e.integradaEn).forEach(e=>{ const b=e.integradaEn; g[b]=g[b]||{nombre:b,miembros:[]}; if(!g[b].miembros.includes(e.n)) g[b].miembros.push(e.n) });
  return g };
const gruposDe=()=>{ const g=gruposDef(); Object.entries(S.grupos||{}).forEach(([b,v])=>{ g[b]=g[b]||{nombre:b,miembros:[]}; if(v.nombre) g[b].nombre=v.nombre; if(v.miembros) g[b].miembros=v.miembros.slice() }); return g };
const miembrosDe=n=>((gruposDe()[n]||{}).miembros||[]).filter(m=>ESP.some(x=>x.n===m));
const esMiembro=n=>Object.values(gruposDe()).some(g=>g.miembros.includes(n));
const nombreGrupo=n=>(gruposDe()[n]||{}).nombre||n;`);
r(`   const mi=miembrosDe(baseDe(e)), nom=mi.length?(INTEGRN[baseDe(e)]||e.n):e.n;`,
  `   const mi=miembrosDe(baseDe(e)), nom=mi.length?nombreGrupo(baseDe(e)):e.n;`);

/* barra del tablero: «Integrar nombres» en lugar de «Declarar la capacidad instalada» */
r(`  \${(CAP&&S.done>=3)?\`<button class="b-env sm" id="abre-cap">Declarar la capacidad instalada</button>\`:""}`,
  `  \${S.delphi&&S.done>=4?\`<button class="b-env sm" id="abre-int">⧉ Integrar nombres</button>\`:""}
  \${S.intForm?formIntegrar():""}`);

/* formulario */
r(`function formCapacidad(){`,
`/* Formulario «Integrar nombres»: por cada grupo, la base, sus integradas (marcables) y el nombre que las agrupa. */
function formIntegrar(){
 const G=gruposDe(); const bases=Object.keys(G).filter(b=>ESP.some(e=>(e.n0||e.n)===b&&!e.oculta));
 const cand=b=>{ const be=ESP.find(e=>(e.n0||e.n)===b); return ESP.filter(o=>o!==be&&!noValorada(o)&&(o.sel||o.apr||o.oculta)&&(o.nat===be.nat||G[b].miembros.includes(o.n))).map(o=>o.n) };
 return \`<div class="dr-ov" data-int="-"></div>
 <aside class="drawer ancho">
  <div class="dr-h"><div><span class="dr-e">Paso 1.1 · segunda decisión · integración</span><b>Integrar nombres</b></div><button class="mf-x" data-int="-">✕</button></div>
  <div class="dr-b">
   <p class="sc-q">Dos candidatas de la misma naturaleza que el mercado contrata en un mismo puesto se integran en una sola. Aquí la Escuela confirma <b>qué integra cada grupo</b> y le da el <b>nombre</b> con el que seguirá en la matriz del paso 1.3 y en las competencias. La propuesta viene de Génesys; su marca prevalece.</p>
   \${bases.length?bases.map(b=>\`<div class="int-g" data-base="\${att(b)}">
     <label class="dr-fl">Nombre del grupo</label><input class="dr-i int-nom" value="\${att(G[b].nombre)}" placeholder="Nombre que agrupa a las integradas">
     <div class="int-base">Base: <b>\${b}</b></div>
     <div class="int-m">\${cand(b).map(m=>\`<label class="mf-o"><input type="checkbox" class="int-chk" value="\${att(m)}" \${G[b].miembros.includes(m)?"checked":""}> \${m}</label>\`).join("")||'<span class="mut">Sin candidatas de la misma naturaleza.</span>'}</div>
    </div>\`).join(""):'<p class="mut">No hay integraciones propuestas ni hechas todavía. Integre desde la columna de integración de la tabla y vuelva aquí para nombrar el grupo.</p>'}
  </div>
  <div class="dr-f"><div class="dr-p"><span class="dr-n">Los nombres se aplican en la matriz del 1.3; las especialidades siguen listadas aquí con su propio potencial.</span>
    <button class="b-out2" data-int="-">Cerrar</button><button class="b-env" id="int-guardar">✓ Guardar nombres</button></div></div>
 </aside>\`;
}
function formCapacidad(){`);
/* manejadores */
r(` const ac=document.getElementById("abre-cap"); if(ac) ac.onclick=()=>{S.capacityClosed=false; S.capForm=true; pintarCentro("tablero")};`,
` const ac=document.getElementById("abre-cap"); if(ac) ac.onclick=()=>{S.capacityClosed=false; S.capForm=true; pintarCentro("tablero")};
 const ai=document.getElementById("abre-int"); if(ai) ai.onclick=()=>{S.intForm=true; pintarCentro("tablero")};
 document.querySelectorAll("[data-int]").forEach(b=>b.onclick=()=>{S.intForm=false; pintarCentro("tablero")});
 const ig=document.getElementById("int-guardar"); if(ig) ig.onclick=()=>{
   const g={}; document.querySelectorAll(".int-g").forEach(d=>{ const b=d.dataset.base; g[b]={nombre:(d.querySelector(".int-nom").value||"").trim()||b,miembros:[...d.querySelectorAll(".int-chk:checked")].map(c=>c.value)} });
   S.grupos=g; S.intForm=false; pintarCentro("tablero"); marcar();
   const n=Object.values(g).filter(x=>x.miembros.length).length;
   addHTML(\`<div class="burbuja">Confirmo los nombres de los grupos integrados.</div>\`);
   addHTML(\`<div class="g-fila"><div><p>Registrados <b>\${n}</b> grupos con nombre: \${Object.values(g).filter(x=>x.miembros.length).map(x=>"<b>"+x.nombre+"</b> ("+x.miembros.length+")").join(", ")}. Con esos nombres se cruzarán en el paso 1.3.</p></div></div>\`); accionAlFinal() };`);
fs.writeFileSync(P("js/app.js"),a);
fs.appendFileSync(P("css/tema.css"),`.int-g{border:1px solid var(--linea);border-radius:10px;padding:12px 14px;margin-bottom:10px;background:#fff}
.int-base{font-size:11.5px;color:var(--gris);margin:8px 0 6px}.int-base b{color:var(--tinta)}
.int-m{display:flex;flex-direction:column;gap:4px}.int-m .mf-o{font-size:12px}
`);
console.log("integrar nombres aplicado");
