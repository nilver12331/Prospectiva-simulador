/* «Mejorar con Génesys» en la demostración: aplica la mejora preparada de cada competencia (datos/competencias/<cod>-mejoras.json)
   con traza de trabajo, marca lo mejorado y deja la versión anterior a la vista. */
const fs=require("fs"),path=require("path");
const P=f=>path.join(__dirname,"..",f);
let a=fs.readFileSync(P("js/app.js"),"utf8");
const r=(x,y)=>{ if(a.split(x).length!==2) throw new Error("no único: "+x.slice(0,80)); a=a.replace(x,y) };

r(`let INTEGR={};   // propuesta de integración de Génesys: nombre base → [nombres que absorbe]`,
`let INTEGR={};   // propuesta de integración de Génesys: nombre base → [nombres que absorbe]
let MEJORAS={};  // mejora preparada por competencia (alias → {def, caps, nota}) para «Mejorar con Génesys»`);
r(` ACTA=d.acta?clon(d.acta):null; INTEGR=clon(d.integr||{});`,` ACTA=d.acta?clon(d.acta):null; INTEGR=clon(d.integr||{}); MEJORAS=clon(d.mejoras||{});`);

/* el envío en la demostración: traza, mejora aplicada y respuesta con la nota */
r(`   if(ESCUELA&&ESCUELA.demo){
     addHTML(\`<div class="burbuja">Mejora la definición de «\${a.alias}» conservando la estructura aprobada.</div>\`);
     addHTML(\`<div class="g-fila"><div><p>Tomo la definición vigente de <b>\${a.alias}</b> y la reescribo nombrando la evidencia con que se demuestra, sin tocar el número de capacidades. Le devuelvo la propuesta en el mismo bloque para que la acepte o la ajuste.</p></div></div>\`);
     return;
   }`,
`   if(ESCUELA&&ESCUELA.demo){ mejorarDemo(a,ops,txt); return; }`);

r(`function formMejora(a){`,
`/* Mejora de demostración: Génesys reescribe la definición y las capacidades con la versión preparada, conservando alias, títulos y número de capacidades. */
function mejorarDemo(a,ops,txt){
 const m=MEJORAS[a.alias];
 addHTML(\`<div class="burbuja">Mejora la competencia «\${a.alias}»\${ops&&ops.length?" · "+ops.join(", ").toLowerCase():""}\${txt?": "+txt:""}.</div>\`);
 if(!m){ addHTML(\`<div class="g-fila"><div><p>No tengo una mejora preparada para <b>\${a.alias}</b>. Puede editarla a mano con «Editar» en la misma ficha.</p></div></div>\`); abajo(); return }
 const pasos=["Leyendo la definición y las capacidades vigentes de la competencia","Auditando los elementos: verbo, objeto, condiciones, propósito, evidencia y nivel","Reescribiendo la definición con registro académico y sin incisos","Ampliando cada capacidad con sus cuatro componentes","Verificando que la estructura y el número de capacidades no cambien"];
 const tr=addHTML(\`<div class="g-traza"><div class="g-traza-h"><span class="g-punto"></span>Génesys está trabajando…</div><ul>\${pasos.map(p=>\`<li>\${p}</li>\`).join("")}</ul></div>\`);
 const total=RAPIDO?300:9000, paso=total/(pasos.length+1);
 pasos.forEach((p,i)=>setTimeout(()=>{ const li=tr.querySelectorAll("li")[i]; if(li) li.classList.add("on"); if(i>0) tr.querySelectorAll("li")[i-1].classList.add("ok"); abajo() },paso*(i+1)));
 setTimeout(()=>{
  tr.querySelectorAll("li").forEach(li=>li.classList.add("ok")); tr.querySelector(".g-traza-h").innerHTML="✓ Listo"; tr.classList.add("hecho");
  setTimeout(()=>{ tr.classList.add("se-va"); setTimeout(()=>tr.remove(),450) },RAPIDO?0:700);
  if(!a.antesMejora) a.antesMejora={def:a.def,caps:a.caps.map(k=>({a:k.a,n:k.n,d:k.d}))};
  a.def=m.def; a.caps.forEach((k,i)=>{ if(m.caps[i]){ k.d=m.caps[i].d; k.e="mejorada" } }); a.mejorada=true;
  const ai=ARQ.indexOf(a); if(!S.expArq.includes(ai)) S.expArq.push(ai);
  pintarCentro("arquitectura"); marcar();
  addHTML(\`<div class="g-fila"><div><p>\${m.nota}</p><p>Los cambios ya están en la ficha de <b>\${a.alias}</b>: la definición y las \${a.caps.length} capacidades llevan la marca <i>mejorada</i>, y la versión anterior queda a la vista para compararla. Puede aceptarla tal cual o seguir editando a mano.</p></div></div>\`);
  abajo();
 },total);
}
function formMejora(a){`);

/* la ficha muestra la marca y la versión anterior */
r(`   \${a.tipo?\`<span class="ac-tipo">de \${a.tipo}</span>\`:""}<span class="chip \${(D[a.dec]||D.derivada)[0]}">\${(D[a.dec]||D.derivada)[1]}</span>`,
  `   \${a.tipo?\`<span class="ac-tipo">de \${a.tipo}</span>\`:""}<span class="chip \${(D[a.dec]||D.derivada)[0]}">\${(D[a.dec]||D.derivada)[1]}</span>\${a.mejorada?\`<span class="chip c-esen">✦ Mejorada por Génesys</span>\`:""}`);
r(`    <div class="ac-d" contenteditable="true" data-ed="arq|\${ai}|def">\${a.def}</div>
    \${a.evid||a.nivel?`,
`    <div class="ac-d" contenteditable="true" data-ed="arq|\${ai}|def">\${a.def}</div>
    \${a.antesMejora?\`<details class="ac-antes-d"><summary>Versión anterior a la mejora</summary><p>\${a.antesMejora.def}</p></details>\`:""}
    \${a.evid||a.nivel?`);
fs.writeFileSync(P("js/app.js"),a);

fs.appendFileSync(P("css/tema.css"),`
/* mejora aplicada por Génesys */
.ac-antes-d{margin-top:8px;font-size:11.5px;color:var(--gris)}
.ac-antes-d summary{cursor:pointer;font-weight:600;color:var(--gris)}
.ac-antes-d p{margin:6px 0 0;padding-left:10px;border-left:3px solid var(--linea);line-height:1.55;color:#6b7280}
.kc.mejorada .kc-e{background:#e6f6ec;color:#15803d;border-color:#a7d7b8}
`);

/* generador de datos: carga las mejoras */
let c=fs.readFileSync(P("herramientas/cartera-a-datos.js"),"utf8");
const cx=`  console.log("  competencias:",DER.competencias.length,"·",DER.competencias.reduce((s,k)=>s+k.caps.length,0),"capacidades");`;
if(c.split(cx).length!==2) throw new Error("no cartera-a-datos");
c=c.replace(cx,cx+`
  let MEJ=null; try{ MEJ=JSON.parse(fs.readFileSync(R("competencias/"+cod+"-mejoras.json"),"utf8")) }catch(err){}
  if(MEJ){ D.mejoras=Object.fromEntries(MEJ.mejoras.map(m=>[m.alias,{def:m.def,caps:m.caps.map(x=>({d:x.d})),nota:m.nota}])); console.log("  mejoras preparadas:",MEJ.mejoras.length) }`);
fs.writeFileSync(P("herramientas/cartera-a-datos.js"),c);

/* prueba: envía una mejora y comprueba que se aplicó */
let p=fs.readFileSync(P("herramientas/prueba.js"),"utf8");
const px=` for(const v of ["tablero","arquitectura","equivalencia","perfil","valor","informe"]){`;
if(p.split(px).length!==2) throw new Error("no prueba");
p=p.replace(px,` try{ if(typeof MEJORAS!=="undefined"&&Object.keys(MEJORAS).length){ S.form=0; pintarCentro("arquitectura"); const b=document.querySelector("[data-enviar]"); if(b){ b.click(); await espera(600); out.push("mejora demo: "+(ARQ[0].mejorada?"aplicada · "+ARQ[0].def.split(" ").length+" palabras":"NO aplicada")) } } }catch(e){ out.push("mejora demo ERROR "+e.message) }
`+px);
fs.writeFileSync(P("herramientas/prueba.js"),p);
console.log("mejora-comp aplicado");
