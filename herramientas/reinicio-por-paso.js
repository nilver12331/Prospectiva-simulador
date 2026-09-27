/* Reiniciar por pasos: el primer clic vuelve al inicio del paso en curso; el siguiente, al inicio del paso anterior; y así hasta el momento cero.
   Se toma una foto del estado al empezar cada paso y se restaura al reiniciar. Además: el botón de adjuntar el plan sin fondo. */
const fs=require("fs"),path=require("path");
const P=f=>path.join(__dirname,"..",f);
let a=fs.readFileSync(P("js/app.js"),"utf8");
const r=(x,y)=>{ if(a.split(x).length!==2) throw new Error("no único: "+x.slice(0,80)); a=a.replace(x,y) };

/* estado: fotos por paso, persistidas */
r(`capForm:false,acta:false,verPlan:false,capAy:null,capAg:true,capOk:false,planArchivo:null,contrasteOmitido:false,`,
  `capForm:false,acta:false,verPlan:false,capAy:null,capAg:true,capOk:false,planArchivo:null,contrasteOmitido:false,snaps:{},`);
r(`   infVer:S.infVer,rev:S.rev,acto:S.acto,encIns:S.encIns,encExtra:S.encExtra}};
}`,
`   infVer:S.infVer,rev:S.rev,acto:S.acto,encIns:S.encIns,encExtra:S.encExtra,snaps:S.snaps,fue:S.fue,integr:S.integr}};
}
/* Foto del estado al empezar un paso (sin las otras fotos), para poder volver a su inicio. */
function fotoPaso(){ const c=clon(capturar()); delete c.paso.snaps; return {d:c,docs:clon(DOCS)} }
const ORDEN_PASOS=["tablero","arquitectura","equivalencia","perfil","valor","informe"];
const NOMBRE_PASO={tablero:"1.1 · Prospectiva de Especialidades",arquitectura:"1.2 · Definir Competencias",equivalencia:"1.3 · Matriz de Correspondencia",perfil:"1.4 · Definir Objetivos",valor:"1.5 · Propuesta de Valor",informe:"1.6 · Estudio Prospectivo"};
function pasoActual(){ const x=ACTOS[S.acto]; return x?x.vista:"informe" }
function inicioDePaso(v){ return ACTOS.findIndex(x=>x.vista===v) }
/* Reiniciar por pasos. */
function reiniciar(){
 if(!(ESCUELA&&ESCUELA.demo)) return;
 const v=pasoActual(), k=ORDEN_PASOS.indexOf(v);
 let destino=null;
 if(S.acto>inicioDePaso(v)&&S.snaps[v]) destino=v;
 else { for(let i=k-1;i>=0;i--){ if(S.snaps[ORDEN_PASOS[i]]){ destino=ORDEN_PASOS[i]; break } } }
 if(!destino||destino==="tablero"&&!S.snaps.tablero){ reiniciarDemo(); return }
 const f=S.snaps[destino], snaps=S.snaps;
 aplicar(f.d); aplicarPaso(f.d.paso); DOCS=clon(f.docs||[]);
 S.snaps=Object.fromEntries(Object.entries(snaps).filter(([kv])=>ORDEN_PASOS.indexOf(kv)<=ORDEN_PASOS.indexOf(destino)));
 S.det=null; S.f={dec:[]}; S.capForm=false; S.acta=false; S.zoom=null; S.mapOff=false; S.form=null; S.foco=null; S.comparar=false; S.expArq=[0,1,2,3];
 pintarCentro(S.done>0?destino:"inicio"); pintarTabs(); pintarPanel();
 document.getElementById("chat").innerHTML=""; saludo();
 const ant=ORDEN_PASOS[ORDEN_PASOS.indexOf(destino)-1];
 addHTML(\`<div class="g-fila"><div><p><b>Volvimos al inicio del paso \${NOMBRE_PASO[destino]}.</b> Lo hecho en este paso se descartó; lo anterior se conserva. Pulse <b>Reiniciar</b> otra vez para volver \${ant?"al inicio del paso "+NOMBRE_PASO[ant]:"al momento cero"}.</p></div></div>\`);
 botones(); marcar();
}`);
r(` S.rev=p.rev||{traza:false,smart:false}; S.acto=p.acto||0; S.encIns=p.encIns||{}; S.encExtra=p.encExtra||{};`,
  ` S.rev=p.rev||{traza:false,smart:false}; S.acto=p.acto||0; S.encIns=p.encIns||{}; S.encExtra=p.encExtra||{}; S.snaps=p.snaps||{}; S.fue=p.fue||S.fue||[]; S.integr=p.integr||S.integr||[];`);
r(` S.fue=[]; S.integr=[];
 pintarCentro("inicio"); pintarTabs(); pintarPanel();`,` S.fue=[]; S.integr=[]; S.snaps={};
 pintarCentro("inicio"); pintarTabs(); pintarPanel();`);
/* la foto se toma cuando la conversación entra en un paso nuevo */
r(`  S.acto++;
  pintarCentro(a.vista);pintarPanel();botones();abajo();`,
`  S.acto++;
  if(ACTOS[S.acto]&&ACTOS[S.acto].vista!==a.vista) S.snaps[ACTOS[S.acto].vista]=fotoPaso();   // empieza otro paso: foto para «Reiniciar»
  pintarCentro(a.vista);pintarPanel();botones();abajo();`);
/* el botón */
r(`\`<button class="b-reinicio" id="b-reinicio" title="Volver al momento cero">↺ Reiniciar</button>\`:"";
 const br=document.getElementById("b-reinicio"); if(br) br.onclick=reiniciarDemo;`,
  `\`<button class="b-reinicio" id="b-reinicio" title="Vuelve al inicio del paso en curso; otro clic, al paso anterior">↺ Reiniciar</button>\`:"";
 const br=document.getElementById("b-reinicio"); if(br) br.onclick=reiniciar;`);
fs.writeFileSync(P("js/app.js"),a);


/* prueba: dos reinicios seguidos desde el final */
let p=fs.readFileSync(P("herramientas/prueba.js"),"utf8");
const px=` for(const v of ["tablero","arquitectura","equivalencia","perfil","valor","informe"]){`;
if(p.split(px).length!==2) throw new Error("no prueba");
p=p.replace(px,` try{ const antes=S.acto; reiniciar(); out.push("reinicio 1 → acto "+antes+" ⇒ "+S.acto+" ("+pasoActual()+")"); reiniciar(); out.push("reinicio 2 ⇒ "+S.acto+" ("+pasoActual()+")"); for(let i=0;i<30;i++){ const b=document.getElementById("b-act"); if(!b||b.disabled) break; b.click(); await espera(400); { const bs=document.getElementById("b-sel-ok"); if(bs&&!bs.disabled&&!document.getElementById("b-act")){ bs.click(); await espera(300) } } if(document.getElementById("plan-file")){ planAdjuntado("plan-de-estudios-prueba.pdf"); await espera(400) } } out.push("reanudado hasta acto "+S.acto+" done="+S.done) }catch(e){ out.push("reinicio ERROR "+e.message) }
`+px);
fs.writeFileSync(P("herramientas/prueba.js"),p);
console.log("reinicio por paso aplicado");
