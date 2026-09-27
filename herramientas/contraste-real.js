/* Paso 1.2 · momento 2 con el plan real: la columna vigente se empareja por competencia (no por posición),
   la decisión, el «por qué cambió» y las marcas de las capacidades se aplican al ejecutar el contraste. */
const fs=require("fs"),path=require("path");
const P=f=>path.join(__dirname,"..",f);
let a=fs.readFileSync(P("js/app.js"),"utf8");
const r=(x,y)=>{ if(a.split(x).length!==2) throw new Error("no único: "+x.slice(0,80)); a=a.replace(x,y) };

/* estado y helpers */
r(`let MEJORAS={};  // mejora preparada por competencia (alias → {def, caps, nota}) para «Mejorar con Génesys»`,
`let MEJORAS={};  // mejora preparada por competencia (alias → {def, caps, nota}) para «Mejorar con Génesys»
let PLANMAPA=null; // contraste real: alias de la derivada → índice de la competencia vigente que la recoge (−1 = nace)
function planDe(ai){ const c=ARQ[ai]; if(!c) return null; if(PLANMAPA&&c.alias in PLANMAPA){ const j=PLANMAPA[c.alias]; return j>=0?PLAN[j]:null } return PLAN[ai]||null }
function trazaDe(c){ return c?TRAZA.find(t=>t.n===c.n||t.n===c.alias)||null:null }`);
r(` ACTA=d.acta?clon(d.acta):null; INTEGR=clon(d.integr||{}); MEJORAS=clon(d.mejoras||{});`,
  ` ACTA=d.acta?clon(d.acta):null; INTEGR=clon(d.integr||{}); MEJORAS=clon(d.mejoras||{}); PLANMAPA=d.planMapa?clon(d.planMapa):null;`);

/* la columna vigente se empareja por competencia */
r(`    <div class="ac-t">\${PLAN[ai]?(PLAN[ai].np||"Competencia vigente"):"Sin equivalente en el plan"}</div>
    \${PLAN[ai]?\`<div class="cmp-n">\${PLAN[ai].n}</div>
    <div class="ac-t" style="margin-top:12px">Definición conceptual vigente</div>
    <div class="cmp-d">\${PLAN[ai].d}</div>
    <div class="ac-t" style="margin-top:12px">Capacidades vigentes · \${PLAN[ai].caps.length}</div>\`:\`<div class="cmp-d">Ninguna competencia vigente recoge este proceso: la competencia <b>nace</b> del campo.</div>\`}
    \${(PLAN[ai]?PLAN[ai].caps:[]).map((k,ki)=>{const sigue=a.caps.some(x=>x.n===k||x.a.toLowerCase()===k.toLowerCase().split(" ")[0]);`,
`    \${(pv=>\`<div class="ac-t">\${pv?(pv.np||"Competencia vigente"):"Sin equivalente en el plan"}</div>
    \${pv?\`<div class="cmp-n">\${pv.n}</div>
    <div class="ac-t" style="margin-top:12px">Definición conceptual vigente</div>
    <div class="cmp-d">\${pv.d}</div>
    <div class="ac-t" style="margin-top:12px">Capacidades vigentes · \${pv.caps.length}</div>\`:\`<div class="cmp-d">Ninguna competencia vigente recoge este proceso: la competencia <b>nace</b> del campo.</div>\`}
    \${(pv?pv.caps:[]).map((k,ki)=>{const sigue=a.caps.some(x=>x.n===k||(x.de&&x.de===k)||x.a.toLowerCase()===k.toLowerCase().split(" ")[0]);`);
r(`        <p class="cmp-kd">\${PLAN[ai].cd[ki]}</p></div>\`}).join("")}`,`        <p class="cmp-kd">\${pv.cd[ki]}</p></div>\`}).join("")}\`)(planDe(ai))}`);
/* chips de destino y de decisión */
r(` const TD={"se reformula":"c-vigilancia","se conserva":"c-ok"};`,
  ` const TD={"se reformula":"c-vigilancia","se conserva":"c-ok","se fusiona":"c-certificacion","se desdobla":"c-certificacion","se redistribuye":"c-certificacion","desaparece":"c-descartar","nace":"c-prop"};`);
r(` const D={reformular:["c-vigilancia","Reformulada"],conservar:["c-ok","Conservada literal"],derivada:["c-prop","Derivada del campo · a ciegas del plan"]};`,
  ` const D={reformular:["c-vigilancia","Reformulada"],conservar:["c-ok","Conservada literal"],nueva:["c-esen","Nueva · el plan no la recogía"],derivada:["c-prop","Derivada del campo · a ciegas del plan"]};`);
r(`<span class="chip \${(D[a.dec]||D.derivada)[0]}">\${(D[a.dec]||D.derivada)[1]}</span>`,
  `<span class="chip \${((S.done>=8&&!S.contrasteOmitido&&D[a.dec])||D.derivada)[0]}">\${((S.done>=8&&!S.contrasteOmitido&&D[a.dec])||D.derivada)[1]}</span>`);
/* ficha: el origen se lee por competencia, no por posición */
a=a.split("TRAZA[ci]").join("trazaDe(c)");
/* al ejecutar el contraste se aplican decisión, definición final y marcas; al derivar se vuelve a la versión a ciegas */
r(`  if(a.redactado&&ESCUELA&&DATOS[ESCUELA.cod]&&DATOS[ESCUELA.cod].arq){        // momento 1 del 1.2: la derivación se escribe desde los datos vigentes
    ARQ=clon(DATOS[ESCUELA.cod].arq); MEJORAS=clon(DATOS[ESCUELA.cod].mejoras||{}); S.expArq=[0,1,2,3]; S.rev={traza:false,smart:false}; }`,
`  if(a.redactado&&ESCUELA&&DATOS[ESCUELA.cod]&&DATOS[ESCUELA.cod].arq){        // momento 1 del 1.2: la derivación se escribe desde los datos vigentes
    ARQ=clon(DATOS[ESCUELA.cod].arq); MEJORAS=clon(DATOS[ESCUELA.cod].mejoras||{}); S.expArq=[0,1,2,3]; S.rev={traza:false,smart:false};
    ARQ.forEach(c=>{ c.dec="derivada"; c.caps.forEach(k=>{ k.e="" }) }); }
  if(a.pidePlan){                                                                  // momento 2: se aplica el contraste real sobre las derivadas
    ARQ.forEach(c=>{ const m=c.contraste; if(!m) return; c.dec=m.dec; if(m.dec==="conservar"&&m.defFinal) c.def=m.defFinal; c.gat=m.gat||""; c.antes=m.antes||"";
      c.caps.forEach(k=>{ const mk=(m.caps||[]).find(x=>x.n===k.n); if(mk){ k.e=mk.e||""; k.de=mk.de||"" } }) }); }`);
fs.writeFileSync(P("js/app.js"),a);

fs.appendFileSync(P("css/tema.css"),`.kc.conservada .kc-e,.cmp-k.conservada .kc-e{background:#e6f6ec;color:#15803d}
.kc.añadida .kc-e,.cmp-k.añadida .kc-e{background:#eaf1f8;color:var(--navy)}
`);

/* generador: plan literal y contraste */
let c=fs.readFileSync(P("herramientas/cartera-a-datos.js"),"utf8");
const cx=`  let MEJ=null; try{ MEJ=JSON.parse(fs.readFileSync(R("competencias/"+cod+"-mejoras.json"),"utf8")) }catch(err){}`;
if(c.split(cx).length!==2) throw new Error("no cartera-a-datos");
c=c.replace(cx,`  /* Momento 2 · plan vigente literal (datos/plan-vigente/<cod>-plan.json) y contraste real (datos/competencias/<cod>-contraste.json) */
  let PLV=null, CON=null;
  try{ PLV=JSON.parse(fs.readFileSync(R("plan-vigente/"+cod+"-plan.json"),"utf8")) }catch(err){}
  try{ CON=JSON.parse(fs.readFileSync(R("competencias/"+cod+"-contraste.json"),"utf8")) }catch(err){}
  if(PLV){ const A=PLV.competencias.filter(x=>!x.tipo||x.tipo==="A"); D.plan=A.map(x=>({n:x.n,np:x.np,d:x.d,caps:x.caps,cd:x.cd})); D.planFuera=PLV.competencias.filter(x=>x.tipo&&x.tipo!=="A").map(x=>({n:x.n,tipo:x.tipo,nota:x.nota})); D.meta.plan="Línea base literal entregada por la Escuela el 24-09-2026: "+D.plan.length+" competencias de especialidad"; }
  if(CON&&PLV){
   D.planMapa={};
   CON.mapa.forEach(m=>{ const k=D.arq.find(x=>x.alias===m.alias); if(!k) return; const j=D.plan.findIndex(x=>x.n===m.plan); D.planMapa[m.alias]=j;
    k.contraste={dec:m.dec,defFinal:m.defFinal||"",gat:m.gat||"",antes:m.antes||"",caps:(m.caps||[]).map(x=>({n:x.n,e:x.e,de:x.de||""})),noContinuan:m.noContinuan||[],situacion:m.situacion} });
   D.traza=CON.traza.map(t=>({p:t.p,d:t.d,n:t.n,c:t.c,s:t.s}));
   D.guion=Object.assign({},D.guion,{7:" "+CON.resumen});
   console.log("  contraste:",CON.mapa.map(m=>m.alias+"→"+m.dec).join(" · "));
  }
`+cx);
fs.writeFileSync(P("herramientas/cartera-a-datos.js"),c);
console.log("contraste real aplicado");
