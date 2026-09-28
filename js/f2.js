/* ════════════ Fase 2 · Diseño Curricular ════════════
   Motor portado del artefacto «Funciones Profesionales» (claude.ai/artifact/MWapqiTogtfUdUWYmUVe2s).
   Los datos viven en datos/f2-<cod>.js (DATOS2.<COD>) y los arma herramientas/f2-datos.js con los
   resultados reales de los agentes. Cada especialidad recorre 2.1–2.3; los pasos 2.4–2.6 son de escuela.
   F2.hasta dice hasta qué paso hay datos generados: lo que sigue se muestra «por generar». */
const ESCUELA = (new URLSearchParams(location.search).get("escuela")||Object.keys(window.DATOS2||{})[0]||"NUT").toUpperCase();
const F2 = (window.DATOS2||{})[ESCUELA];
document.querySelectorAll('[data-volver-proyecto]').forEach(a=>a.href='programas.html?proyecto='+encodeURIComponent(ESCUELA));
if(!F2) document.body.innerHTML = '<p style="padding:40px;font:15px system-ui">No hay datos de la Fase 2 para la escuela <b>'+ESCUELA+'</b>. <a href="programas.html?proyecto='+encodeURIComponent(ESCUELA)+'">Volver</a></p>';
{ const c=document.getElementById("crEsc"); if(c) c.textContent = F2.meta.nombre; document.title = "Fase 2 · "+F2.meta.nombre;
  const ic=document.getElementById("pkIc"); if(ic) ic.textContent = F2.meta.icono||"🎓";
  const s=document.getElementById("selEsc");
  if(s){ s.innerHTML = Object.values(window.DATOS2).map(X=>`<option value="${X.meta.cod}" ${X.meta.cod===ESCUELA?"selected":""}>${X.meta.nombre}</option>`).join("");
    s.onchange = ()=>{ location.href = "consola2.html?escuela="+s.value; }; } }
const VACIO = {order:[], FN:{}, refs:[], reassign:[], alloc:[], resumen:[], acred:[], decis:[], alertas:[], bank:[], rrefs:[], tot:[], comp:""};
let D = {...VACIO}, FNK = [], CAPS = [];
const ESC = F2.ESC, COMPE = F2.COMPE;
const escK = k => ESC.find(e=>e.k===k);
const escN = n => ESC.find(e=>e.n===n);
/* Carga los datos de una especialidad: su paquete (D), sus funciones (FNK) y las capacidades de su competencia (CAPS) */
function cargarEsp(k){
  const e = escK(k); D = {...VACIO, ...((F2.esp||{})[k]||{})};
  D.comp = e ? e.c+" · "+e.cn : "";
  FNK = D.order||[]; CAPS = e ? (F2.ARQ[e.c]||{caps:[]}).caps : []; if(typeof ponerComp==="function") try{ ponerComp(); }catch(_){}
}
const PASOS_OK = ["2.1","2.2","2.3","2.4","2.5","2.6"].slice(0, ["2.1","2.2","2.3","2.4","2.5","2.6"].indexOf(F2.hasta)+1);
const hay = p => PASOS_OK.includes(p);
const hayEsp = k => !!((F2.esp||{})[k]||{}).order;
const CATS = [["Estándares","E"],["Metodologías","M"],["Herramientas y tecnologías","T"],["Integración de IA generativa","IA"]];

/* Pasos: 2.1 (0–2) · 2.2 y 2.3 (3–6) · 2.4 (7–12) · 2.5 (13–18) · 2.6 (19–23) */
const PHASES = [
  {code:"2.1", name:"Funciones, sustento y productos", subs:["Generar funciones y componentes","Validar Funciones (e-Delphi)","Guardar Funciones"]},
  {code:"2.2", name:"Elementos de Productividad de Funciones", subs:["Asociar funciones y capacidades","Validación de Elementos de Productividad","Generar Temas Nucleares (2.3)","Guardar elementos y temas nucleares"]},
  {code:"2.4", name:"Derivación disciplinar · escuela", subs:["Consolidar el lote de especialidades","Derivar los temas base","Agrupar en dimensiones","Formular la competencia disciplinar","Validar con el panel DIMENSIONES","Guardar la derivación"]},
  {code:"2.5", name:"Pesos y créditos · escuela", subs:["Reunir y auditar el plan","Calcular los indicadores","Panel AHP y rúbricas","Pesos y distribución","Cuánto es fundamento y cuánto especialidad","Guardar pesos y créditos"]},
  {code:"2.6", name:"Propuesta de cursos · escuela", subs:["Inventario de cursos","Cohesión y familias de cursos","Tributación y prorrateo","Validar cursos por competencia y especialidad","Guardar la propuesta de cursos"]}
];
const PBASE = [0,3,7,13,19];
/* Hoja de ruta del método: cada paso muestra si ya tiene datos generados para esta carrera */
const WK = {nuevo:["Por generar","var(--plum)","var(--plum-soft)"], ok:["Al día","var(--ok)","var(--ok-soft)"]};
const RMAP = [
  {c:"2.1", n:"Funciones, sustento y productos", niv:"especialidad", ph:0, w:hay("2.1")?"ok":"nuevo"},
  {c:"2.2 + 2.3", n:"Elementos de Productividad y Temas Nucleares", niv:"especialidad", ph:1, w:hay("2.2")?"ok":"nuevo",
   nota:hay("2.2")?"":"Génesys ejecuta el 2.2 y el 2.3 de todas las especialidades cuando la Escuela cierre el 2.1."},
  {c:"⛉", n:"Compuerta de lote", niv:"escuela", ph:null, gate:true, w:hay("2.3")?"ok":"nuevo", subs:[`Las ${ESC.length} especialidades con su 2.3 cerrado`]},
  {c:"2.4", n:"Derivación disciplinar", niv:"escuela", ph:2, w:hay("2.4")?"ok":"nuevo"},
  {c:"2.5", n:"Pesos y créditos", niv:"escuela", ph:3, w:hay("2.5")?"ok":"nuevo"},
  {c:"2.6", n:"Propuesta de cursos", niv:"escuela", ph:4, w:hay("2.6")?"ok":"nuevo"}
];
/* Estado de la consola. Lo propio de cada especialidad (funciones, validación, guardados) se guarda en S.por[k]
   y se intercambia con cambiarEsp(); S.step 0–6 es el momento de la especialidad en trabajo, 7+ los de escuela. */
const S = {alloc:[], rview:"2", showCap:false, ropen:{}, rall:false, avail:new Set(["entrada","ficha","refs"]), step:0, tab:"entrada", spec:null, k:null, por:{}, mode:{competencia:"def", rview2:"2", paquete:"per", recursos:"fn", refs:"per", disc:"lote", ent:"cartera", pesos:"param", gtem:"tema", cursos:"pres", cfil:"todos", vmode:"esp"},
  fn:[], delphi:false, round:1, excl:[], exclOk:false, recOn:false, recPanel:false, recSel:null, bankCat:"all",
  saved:{p21:false,p22:false}, busy:false, open:{}};
const PROPIO = ["alloc","step","fn","delphi","round","excl","exclOk","recOn","recPanel","recSel","saved","open","te","c31","c32"];

const $ = s => document.querySelector(s);
const esc = s => String(s??"").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const tagLvl = d => `<span class="tag t-${({Alta:"alta",Alto:"alta",Media:"media",Medio:"media",Baja:"baja",Bajo:"baja"})[d]||"neutral"}">${esc(d)}</span>`;
const confBar = n => `<span class="conf" title="Nivel de confianza ${n}/5">${[1,2,3,4,5].map(i=>`<i class="${i<=n?'on':''}"></i>`).join("")}</span> <span class="num">${n}</span>`;
const fnState = f => ["fb","sb","pb"].some(b=>f[b]==="no") ? "no" : ["fb","sb","pb"].every(b=>f[b]==="ok") ? "ok" : ["fb","sb","pb"].some(b=>f[b]==="rev") ? "rev" : "prop";
const active = () => S.fn.filter(f=>fnState(f)!=="no");
const nTasks = () => S.fn.reduce((a,f)=>a+f.tasks.length,0);
const allRes = () => S.fn.flatMap(f=>(f.rs||[]).map(r=>({...r,f})));
const findRes = id => S.fn.flatMap(f=>f.rs||[]).find(r=>r.id===id);
const phaseOf = s => s<3?0:s<7?1:s<13?2:s<19?3:4;

/* ---------- Progreso ---------- */
function renderStepper(){
  const p = phaseOf(S.step), sub = S.step - PBASE[p];
  renderCont();
  if(S.step===0 && !S.spec){ $("#stepline").innerHTML = `<span>Entrada · <b>Cartera de la Fase 1</b> · elegir la especialidad con la que se trabaja</span><span class="bar"><i style="width:2%"></i></span>`; renderRail(); return; }
  $("#stepline").innerHTML = S.step>=24 ? `<span><b>Fase 2 completa · pasos 2.1 a 2.6</b></span><span class="bar"><i style="width:100%"></i></span>`
    : `<span>Paso ${PHASES[p].code} · <b>${PHASES[p].name}</b> · ${PHASES[p].subs[sub]||"cierre del paso"}</span><span class="bar"><i style="width:${S.step/26*100}%"></i></span>`;
  renderRail();
}

/* ---------- Continuidad ----------
   FLUJO fija qué acción corresponde a cada momento; el botón ▶ ejecuta la del momento actual.
   Si el paso siguiente todavía no tiene datos generados para esta carrera, el botón lo dice y se detiene. */
const FLUJO = [
 {s:0,  f:()=>{ if(!S.spec){ const k=sigEsp(); if(k) elegirEsp(escK(k).n); } else gen21(); }},
 {s:1,  f:()=>{ if(!S.delphi) return loadDelphi(); if(S.round<2 && hayR2()) return round2(); confirmExcl(); }},
 {s:2,  f:()=>save21()},
 {s:3,  f:()=>gen22()},
 {s:4,  f:()=>{ if(!S.recPanel) return loadRes(); active().forEach(f=>(f.rs||[]).forEach(r=>{ if(r.st!=="na") r.st="ok"; })); resPrompted=false; checkRes22(); }},
 {s:5,  f:()=>genTN()},
 {s:6,  f:()=>save22()},
 {s:7,  f:()=>gen23()},
 {s:8,  f:()=>temas23()},
 {s:9,  f:()=>dim23()},
 {s:10, f:()=>{ S.d23.huerf="baja"; comp23(); }},
 {s:11, f:()=>panel23()},
 {s:12, f:()=>save23()},
 {s:13, f:()=>gen24()},
 {s:14, f:()=>ind24()},
 {s:15, f:()=>panel24()},
 {s:16, f:()=>corte24()},
 {s:17, f:()=>save24()},
 {s:18, f:()=>gen25()},
 {s:19, f:()=>coh25()},
 {s:20, f:()=>trib25()},
 {s:21, f:()=>panel25()},
 {s:22, f:()=>save25()}
];
const pasoDeStep = n => n<3?"2.1":n<7?"2.2":n<13?"2.4":n<19?"2.5":"2.6";
const momLabel = n => { if(n>=24) return "Fase 2 completa";
  const p = phaseOf(n), i = n - PBASE[p], sb = PHASES[p].subs[i];
  return sb ? `${PHASES[p].code} · ${sb}` : `${PHASES[p].code} · cierre del paso`; };
/* la siguiente especialidad sin su 2.1 guardado, en orden de prioridad */
const sigEsp = () => (ESC.find(e=>e.k!==S.k && !((S.por[e.k]||{}).saved||{}).p21 && hayEsp(e.k))||{}).k;
const accionLabel = () => { const n=S.step;
  if(n>=23) return "Fase 2 completa";
  if(n===0) return S.spec ? "Generar funciones y componentes" : "Elegir la especialidad y generar sus funciones";
  if(n===1) return !S.delphi ? "Cargar el e-Delphi (ronda 1)" : S.round<2 && hayR2() ? "Aplicar la decisión de la Escuela · ronda 2" : "Confirmar exclusiones";
  if(n===3 && !hay("2.2")) return sigEsp() ? "Trabajar la siguiente especialidad" : "El 2.2 está por generar";
  if(n===4) return !S.recPanel ? "Cargar la validación abreviada" : "Confirmar los elementos de las funciones";
  const p=phaseOf(n); return PHASES[p].subs[n-PBASE[p]] || "Cerrar el paso";
};
function avanzar(){
  if(S.busy){ toast("Génesys está trabajando · un segundo"); return; }
  if(S.step>=23){ toast("La Fase 2 ya está completa"); return; }
  if(S.step===0 && S.spec && !hayEsp(S.k)){ toast("El 2.1 de esta especialidad todavía no está generado"); return; }
  if(!hay(pasoDeStep(S.step))){
    const k = S.step===3 ? sigEsp() : null;
    if(k){ elegirEsp(escK(k).n); return; }
    toast(`El paso ${pasoDeStep(S.step)} todavía no está generado para esta carrera`); return;
  }
  const p = FLUJO.find(x=>x.s===S.step) || FLUJO.find(x=>x.s>S.step);
  if(!p) return;
  S.step = p.s;
  try { p.f(); } catch(err){ console.warn(err); toast("No se pudo ejecutar el momento: "+String(err.message||err).slice(0,60)); }
}
function renderCont(){
  const el = $("#contbar"); if(!el) return;
  const fin = S.step>=23;
  const bloq = !fin && !hay(pasoDeStep(S.step)) && !(S.step===3 && sigEsp());
  el.innerHTML = `<button class="btn primary cbig" id="btnCont" ${fin||bloq?"disabled":""}><span class="pl">▶</span><span><small>${fin?"Recorrido terminado":bloq?"Paso "+pasoDeStep(S.step)+" · por generar":"Siguiente momento · paso "+PHASES[phaseOf(S.step)].code}</small><b>${esc(accionLabel())}</b></span></button>`;
}
document.addEventListener("click", e=>{
  if(e.target.closest("#btnCont")){ avanzar(); return; }
});
addEventListener("keydown", e=>{
  if(e.altKey && e.key==="ArrowRight"){ e.preventDefault(); avanzar(); }
});

/* ---------- Chat ---------- */
function addMsg(role, html, chips){
  const m = document.createElement("div");
  m.className = "m " + role;
  m.innerHTML = role==="agent"
    ? `<div class="avatar"><img src="img/genesis.webp" alt="" decoding="async"></div><div class="body"><div class="txt">${html}</div></div>`
    : `<div class="txt">${esc(html)}</div>`;
  if(chips){
    const c = document.createElement("div"); c.className="chips";
    chips.forEach(ch=>{
      const b=document.createElement("button"); b.className="chip"+(ch.main?" main pulse":""); b.textContent=ch.label;
      b.onclick=()=>{ if(S.busy) return; b.classList.remove("pulse"); if(!ch.keep) c.querySelectorAll("button").forEach(x=>x.disabled=true); ch.fn(); };
      c.appendChild(b);
    });
    m.querySelector(".body").appendChild(c);
  }
  $("#msgs").querySelectorAll(".chip.pulse").forEach(x=>{ if(!m.contains(x)) x.classList.remove("pulse"); });
  $("#msgs").appendChild(m);
  $("#msgs").scrollTop = $("#msgs").scrollHeight;
  return m;
}
const docCard = (title, sub, tab, mode) => `<button class="docref" data-open="${tab}" ${mode?`data-mode="${mode}"`:""}><span class="ic"></span><span><b>${title}</b><small>${sub}</small></span></button>`;
function think(lines, done){
  S.busy = true;
  const m = addMsg("agent", `<div class="think"></div>`);
  const box = m.querySelector(".think");
  let i = 0;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  (function next(){
    if(i>0) box.lastChild.className="";
    if(i===lines.length){ m.remove(); S.busy=false; done(); return; }
    const d=document.createElement("div"); d.className="run"; d.textContent=lines[i++]; box.appendChild(d);
    $("#msgs").scrollTop = $("#msgs").scrollHeight;
    setTimeout(next, reduce?100:520);
  })();
}
const userSays = t => addMsg("user", t);
document.addEventListener("click", e=>{ const d = e.target.closest("[data-open]"); if(d){ if(d.dataset.mode) S.mode[d.dataset.open]=d.dataset.mode; setTab(d.dataset.open); } });

/* ---------- Entrada · especialidades aprobadas en la Fase 1 (paso 1.1) ---------- */
const F1 = F2.F1;
const espAll = () => F1.esp.slice().sort((a,b)=>b.PRI-a.PRI);
const espApr = () => espAll().filter(e=>e.sel);
const FASES = [
  ["FASE 1",[["1.1","Prospectiva de especialidades"],["1.2","Definir competencias"],["1.3","Matriz de correspondencia"],["1.4","Objetivos educacionales"],["1.5","Propuesta de valor"],["1.6","Estudio prospectivo"]]],
  ["FASE 2",[["2.1","Funciones y componentes"],["2.2","Elementos de productividad"],["2.3","Temas de especialidad"],["2.4","Derivación disciplinar"],["2.5","Pesos y créditos"],["2.6","Propuesta de cursos"]]],
  ["FASE 3",[["3.1","Perfiles y objetivos"],["3.2","Estructura de conocimiento"],["3.3","Diseño de cursos"],["3.4","Cursos de dominio"]]],
  ["FASE 4",[["4.1","Organización por ciclos"],["4.4","Certificación progresiva"]]],
  ["FASE 5",[["5","Implementación"]]]
];
/* estado propio de una especialidad: la que está en trabajo vive en S; las demás en S.por[k] */
const stE = k => k===S.k ? S : (S.por[k]||{saved:{},step:0,te:{}});
function estadoEsp(k, paso){
  const st = stE(k), sv = st.saved||{}, te = st.te||{}, n = st.step||0;
  const f1 = ["1.1","1.2","1.3","1.4","1.5","1.6"].includes(paso);
  if(f1) return "ok";
  if(paso==="2.1") return sv.p21?"ok":n>=1||(k===S.k&&S.spec)?"curso":"nada";
  if(paso==="2.2") return sv.p22?"ok":n>=4?"curso":"nada";
  if(paso==="2.3") return te.saved?"ok":te.gen?"espera":n>=5?"curso":"nada";
  if(paso==="2.4") return S.d23.saved?"ok":S.d23.lote?"curso":"nada";
  if(paso==="2.5") return S.d24.saved?"ok":S.d24.gen?"curso":"nada";
  if(paso==="2.6") return S.d25.saved?"ok":S.d25.gen?"curso":"nada";
  return "nada";
}
function estadoComp(c, paso){
  const ks = COMPE.some(x=>x[0]===c[0]) ? ESC.filter(e=>e.c===c[0]).map(e=>e.k) : [];
  if(!ks.length){ // competencia disciplinar: nace en el 2.4
    if(["1.1","1.2","1.3","1.4","1.5","1.6","2.1","2.2","2.3"].includes(paso)) return "na";
    if(paso==="2.4") return S.d23.saved?"ok":S.d23.comp?"espera":"curso";
    if(paso==="2.5") return S.d24.saved?"ok":S.d24.gen?"curso":"nada";
    if(paso==="2.6") return S.d25.saved?"ok":S.d25.gen?"curso":"nada";
    return "nada";
  }
  const st = ks.map(k=>estadoEsp(k,paso));
  if(st.every(s=>s==="ok")) return "ok";
  if(st.some(s=>s==="ok"||s==="curso")) return "curso";
  return "nada";
}
const CELL = {ok:["ck","paso cerrado"],espera:["wt","cerrado, esperando validación humana"],curso:["cu","en curso o por iniciar"],nada:["nd","pendiente"],na:["na","no aplica todavía"]};
function tablero(modo){
  const filas = modo==="esp"
    ? ESC.map(e=>({k:e.k, n:e.n, sub:`Especialidad · competencia ${e.c}`, st:p=>estadoEsp(e.k,p)}))
    : [...COMPE.map(c=>({k:c[0], n:c[1], sub:`De habilidad · ${ESC.filter(e=>e.c===c[0]).map(e=>e.k).join(" · ")}`, st:p=>estadoComp(c,p)})),
       ...S.d23.CD.map(c=>({k:c[0], n:c[4]||c[1], sub:"De contenido · nace en el paso 2.4", st:p=>estadoComp(c,p)}))];
  const pasos = FASES.flatMap(f=>f[1]);
  return `<div class="tw"><table class="tmon" style="min-width:${260+pasos.length*46}px">
    <thead><tr><th rowspan="2" style="min-width:230px;text-align:left">${modo==="esp"?"Especialidad":"Competencia"}</th>
      ${FASES.map(f=>`<th colspan="${f[1].length}" class="fh">${f[0]}</th>`).join("")}</tr>
      <tr>${pasos.map(p=>`<th class="ph" title="${esc(p[1])}">${p[0]}</th>`).join("")}</tr></thead>
    <tbody>${filas.map(r=>`<tr><td class="nom2"><b>${r.k} ${esc(r.n)}</b><small>${esc(r.sub)}</small></td>
      ${pasos.map(p=>{ const s=r.st(p[0]); return `<td class="cel"><span class="cd ${CELL[s][0]}" title="${p[0]} ${esc(p[1])} · ${CELL[s][1]}">${s==="ok"?"✓":s==="espera"?"❙":""}</span></td>`; }).join("")}</tr>`).join("")}
    </tbody></table></div>
  <div class="leyen">${[["ck","paso cerrado"],["wt","cerrado, esperando validación humana"],["cu","en curso o por iniciar"],["nd","pendiente"]].map(l=>`<span><i class="cd ${l[0]}">${l[0]==="ck"?"✓":l[0]==="wt"?"❙":""}</i>${l[1]}</span>`).join("")}</div>`;
}
function viewEntrada(){
  const apr = espApr(), fuera = espAll().filter(e=>!e.sel);
  const maxPri = Math.max(...apr.map(e=>e.PRI));
  const tierOf = e => e.PRI>=Math.round(maxPri*.75) ? "p1" : e.PRI>=Math.round(maxPri*.45) ? "p2" : "p3";
  const sc = (v,c) => v===null ? '<span class="dchip" style="--dc:#9ca3af">no valorada</span>'
    : `<span class="sc"><b>${v}</b><i><em style="width:${v}%;background:${c}"></em></i></span>`;
  const fila = (e,rank) => {
    const D1 = F1.DEC[e.dec], on = S.spec===e.n;
    return `<tr class="${e.sel?tierOf(e):"fuera"} ${on?"eleg":""}">
      <td class="num">${e.sel?`<span class="pri">${e.PRI}</span><span class="rk">#${rank}</span>`:'<span class="pri nv">—</span>'}</td>
      <td class="nom" style="--acc:${D1.col}">
        <span class="f-nom">${esc(e.n)}${e.integrada?' <span class="tag t-neutral">integrada</span>':""}${e.sel&&escN(e.n)?` <span class="tag t-neutral">${escN(e.n).k} · ${escN(e.n).c}</span>`:""}</span>
        <span class="f-desc">${esc(e.desc)}</span>
        <span class="f-sub">${e.fn?`${e.fn} funciones estimadas · `:""}${esc(e.pr)}</span></td>
      <td class="ejer">
        <div class="ej-l"><span class="ej-k">Empleo</span><span class="et v${e.puesto}">${esc(F1.ET.pue[e.puesto-1])}</span></div>
        <div class="ej-l"><span class="ej-k">Negocio</span><span class="et v${e.emprende}">${esc(F1.ET.emp[e.emprende-1])}</span></div>
        ${(e.puesto<=2&&e.emprende<=2)?'<div class="mini" style="color:var(--bad);margin-top:5px">Ni puesto ni negocio · no es especialidad</div>':""}</td>
      <td class="num">${sc(e.ATR,"#003366")}</td>
      <td class="num">${sc(e.VIA,"#5B6470")}</td>
      <td class="dec-c"><span class="dchip" style="--dc:${D1.col}" title="${esc(D1.txt)}">${esc(D1.lab)}</span>
        ${!e.sel ? `<span class="mini">${esc(D1.full)}</span>`
          : on ? `<button class="btn sm" disabled>En trabajo ✓</button>`
          : !escN(e.n) || !hayEsp(escN(e.n).k) ? `<span class="mini">2.1 por generar</span>`
          : `<button class="btn sm primary" data-spec="${esc(e.n)}">${estEsp(escN(e.n).k)}</button>`}</td></tr>`;
  };
  if(S.mode.ent!=="cartera") return viewTablero();
  return `<div class="sheet">
    ${segEnt()}
    <div class="eyebrow">Insumo · Fase 1 · paso 1.1 Prospectiva de especialidades · pestaña Investigación</div>
    <h2>Cartera de especialidades · ${apr.length} aprobadas por la Escuela</h2><div class="rule"></div>
    ${S.spec?`<div class="panelres"><b>En trabajo: ${esc(S.spec)}</b><div class="mini">Cada especialidad conserva su avance. Puede pasar a otra cuando quiera con su botón en la tabla y volver después: retoma donde quedó.</div></div>`:""}
    <p class="note">La Fase 1 dejó la cartera decidida y ordenada por <b>prioridad</b> (potencial de mercado × capacidad instalada ÷ 100). Esas ${apr.length} especialidades son el insumo de la Fase 2: de cada una se derivan sus funciones profesionales, sus productos y sus recursos. Elija con cuál trabajar.</p>
    <div class="tw"><table class="tbl-esp" style="min-width:790px">
      <thead><tr>
        <th class="num" style="width:58px">Prioridad</th>
        <th style="min-width:210px">Especialidad</th>
        <th style="width:124px">¿Cómo se<br>ejerce?</th>
        <th class="num" style="width:70px">Potencial de<br>mercado</th>
        <th class="num" style="width:70px">Capacidad<br>instalada</th>
        <th style="width:146px">Decisión y paso a la Fase 2</th></tr></thead>
      <tbody>${apr.map((e,i)=>fila(e,i+1)).join("")}
        <tr class="grp-h"><td colspan="6">Valoradas que no entran al plan · ${fuera.length}</td></tr>
        ${fuera.map(e=>fila(e,0)).join("")}</tbody></table></div>
    <p class="note" style="margin-top:12px">Potencial de mercado = 35 % demanda + 30 % tendencia + 20 % impacto + 15 % sostenibilidad. Capacidad instalada = 30 % docentes + 25 % campos de práctica + 20 % infraestructura + 15 % diferenciación + 10 % habilitación. Cada especialidad del plan es un grupo integrado en el paso 1.1 y se corresponde con una competencia del paso 1.2.</p>
  </div>`;
}
$("#pBody").addEventListener("click", e=>{
  const b = e.target.closest("[data-spec]"); if(!b || S.busy) return; elegirEsp(b.dataset.spec);
});
const segEnt = () => seg("ent",[["cartera","Cartera de especialidades"],["tesp","Tablero · especialidades"],["tcomp","Tablero · competencias",!S.saved.p21]]);
function viewTablero(){
  const modo = S.mode.ent==="tcomp" ? "comp" : "esp";
  const n21 = ESC.filter(e=>stE(e.k).saved&&stE(e.k).saved.p21).length, n22 = ESC.filter(e=>stE(e.k).saved&&stE(e.k).saved.p22).length;
  const nota = modo==="esp"
    ? `La escuela avanza especialidad por especialidad; cada una conserva su avance. Los pasos de escuela —2.4, 2.5 y 2.6— solo se abren cuando <b>las ${ESC.length}</b> cierran su 2.3.`
    : `Una competencia avanza solo cuando avanzan <b>todas</b> sus especialidades: por eso este tablero empieza a tener sentido una vez que la primera cierra su 2.1, y se vuelve indispensable en el 2.4, donde nacen las competencias de contenido.`;
  return `<div class="sheet">${segEnt()}
    <div class="eyebrow">Tablero de monitoreo · escuela de ${esc(F2.meta.nombre)}</div>
    <h2>Cada ${modo==="esp"?"especialidad":"competencia"} a lo largo de los ${FASES.flatMap(f=>f[1]).length} pasos</h2><div class="rule"></div>
    <p class="note">Una fila por ${modo==="esp"?"especialidad":"competencia"}, una casilla por paso. Se lee de izquierda a derecha: hasta dónde llegó cada una y dónde se detuvo.</p>
    ${modo==="esp"?`<div class="bulkbar ${n22===ESC.length?"done":""}">
      <div><b>${n21} de ${ESC.length} especialidades con el 2.1 guardado · ${n22} con el 2.2</b>
        <small>${n22===ESC.length?"La compuerta de lote está abierta: los pasos de escuela pueden correr.":"Trabaje una especialidad a la vez; los pasos de escuela no abren hasta que las "+ESC.length+" cierren su 2.3."}</small></div>
    </div>`:""}
    ${tablero(modo)}
    <div class="panelres" style="margin-top:14px;border-left:3px solid var(--gold)"><p class="mini" style="margin:0">${nota}</p></div>
  </div>`;
}
/* texto del botón de una especialidad en la cartera según su avance */
const estEsp = k => { const st=stE(k), sv=st.saved||{};
  return sv.p22 ? "2.2 guardado · abrir" : sv.p21 ? "2.1 guardado · abrir" : (st.step||0)>0 ? "Continuar →" : "Derivar funciones →"; };
/* Deja la especialidad actual en S.por y trae la elegida (o su estado inicial) */
function estadoInicial(){
  return {alloc:(D.alloc||[]).map(r=>r.slice()), step:0, fn:[], delphi:false, round:1, excl:[], exclOk:false, recOn:false, recPanel:false, recSel:null,
    saved:{p21:false,p22:false}, open:{}, te:{gen:false, saved:false, show:true, open:{}, ag:[], eval:false},
    c31:{gen:false, val:false, com:null, saved:false, txt:{}, cap:{}}, c32:{gen:false, val:false, pick:{}, saved:false}};
}
function cambiarEsp(k){
  if(S.k){ const o={}; PROPIO.forEach(p=>o[p]=S[p]); S.por[S.k]=o; }
  cargarEsp(k);
  const st = S.por[k] || estadoInicial();
  PROPIO.forEach(p=>{ if(st[p]!==undefined) S[p]=st[p]; });
  S.k = k; S.spec = escK(k).n;
  ["paquete","informe","recursos","competencia"].forEach(x=>S.avail.delete(x));
  if(S.fn.length) S.avail.add("paquete"); if(S.saved.p21) S.avail.add("informe"); if(S.recOn) S.avail.add("recursos");
}
function elegirEsp(n){
  const e = escN(n); if(!e || S.busy) return;
  if(S.k===e.k && S.spec){ if(S.fn.length){ S.mode.paquete="per"; setTab("paquete"); } return; }
  cambiarEsp(e.k);
  $("#msgs").querySelectorAll(".chip.main").forEach(x=>{ x.disabled=true; x.classList.remove("pulse"); });
  userSays(`Trabajemos las funciones de ${n}.`);
  const g = F1.esp.find(x=>x.n===n) || {};
  if(!hayEsp(e.k)){ refresh(); addMsg("agent", `<p>El paquete del 2.1 de <b>${esc(n)}</b> todavía no está generado.</p>`); return; }
  if(S.step>0){ refresh(); if(S.fn.length){ S.mode.paquete="per"; setTab("paquete"); }
    addMsg("agent", `<p>Retomo <b>${esc(n)}</b> donde quedó: <b>${esc(momLabel(S.step))}</b>.</p>`); return; }
  refresh(); setTab("entrada");
  addMsg("agent", `<p>Tomo <b>${esc(n)}</b> como especialidad de trabajo: prioridad <b>${g.PRI}</b> (potencial de mercado ${g.ATR} · capacidad instalada ${g.VIA}), decisión <b>${esc((F1.DEC[g.dec]||{}).lab||"")}</b>. Su competencia en el plan es <b>${esc(D.comp)}</b>, cuya ficha técnica viene de la Fase 1.</p><p>Empiezo por sus funciones profesionales con sus tareas clave, su sustento y sus productos. Las capacidades de la competencia no se miran hasta asignar: las funciones se identifican en el mundo laboral.</p>${docCard("Ficha técnica de la competencia",`${e.c} · insumo de la Fase 1`,"ficha")}`,
    [{label:"Generar funciones y componentes", main:true, fn:gen21},
     {label:"Ver la ficha de la competencia", keep:true, fn:()=>setTab("ficha")}]);
}

/* ---------- 2.1 Generar ---------- */
function start(){
  const apr = espApr(), dir = F2.meta.saludo || "Directora o Director de la Escuela";
  addMsg("agent", `<p>Hola, ${esc(dir)}. La <b>Fase 1</b> dejó aprobadas <b>${apr.length} especialidades</b> en la cartera de la escuela de ${esc(F2.meta.nombre)}, ordenadas por prioridad, cada una con su competencia. Ese es el insumo de esta fase.</p><p>Elija en la tabla con cuál trabajar: de ella derivaremos sus <b>funciones y componentes</b> (2.1), sus <b>elementos de productividad</b> y sus <b>temas nucleares</b> (2.2 y 2.3).</p>${docCard("Cartera de especialidades aprobadas",`Fase 1 · paso 1.1 · ${apr.length} de ${F1.esp.length} valoradas`,"entrada")}`,
    [{label:"Trabajar "+ESC[0].n, main:true, fn:()=>elegirEsp(ESC[0].n)},
     {label:"Ver el tablero de especialidades", keep:true, fn:()=>{ S.mode.ent="tesp"; setTab("entrada"); }}]);
}
function gen21(){
  if(S.step!==0 || S.fn.length) return;
  userSays("Genera las funciones con sus tareas clave, su sustento y sus productos.");
  const fu = D.fuentes||{};
  think([`Leyendo la definición conceptual de ${escK(S.k).c} (sin mirar sus capacidades)`,
    `Barrido de fuentes: ocupacionales ${fu.O||0} · normativas ${fu.N||0} · mercado ${fu.avisos_revisados||fu.M||0} avisos · estándares ${fu.P||0}`,
    "Mapa funcional: propósito clave → funciones clave → funciones básicas","Derivando las tareas clave por función",
    "Redactando demanda con fundamento e impacto con justificación",`Vinculando ${D.refs.length} referencias`,"Definiendo el producto de cada función con entregables y evidencias"], ()=>{
    S.fn = FNK.map(k=>({...D.FN[k], fb:"prop", sb:"prop", pb:"prop", rs:[]})); S.fn.forEach(f=>{ f.dec=decOf(f); });
    S.excl = D.reassign.map(r=>({c:r[0], dest:r[1], cap:r[2], idx:r[3], st:"prop"}));
    S.step = 1; S.avail.add("paquete"); S.mode.paquete="per"; setTab("paquete");
    const ne = S.fn.reduce((a,f)=>a+f.prod.ents.length,0), ver = D.refs.filter(r=>/^Verificado/.test(r[3]||"")).length;
    addMsg("agent", `<p>Generé el paquete funcional: <b>${S.fn.length} funciones</b>, <b>${nTasks()} tareas clave</b>, su sustento (demanda, impacto y ${D.refs.length} referencias, ${ver} verificadas) y <b>${S.fn.length} productos</b> con ${ne} entregables.</p>${D.proposito?`<p><b>Propósito clave:</b> ${esc(D.proposito)}</p>`:""}<p>Decisión sugerida: <b>${S.fn.filter(f=>f.dec==="Aprobado").length} aprobadas</b>, <b>${S.fn.filter(f=>f.dec==="En proceso").length} en proceso</b> y <b>${S.fn.filter(f=>f.dec==="Eliminar").length} por eliminar</b> (demanda alta + impacto alto = Aprobado; baja + bajo = Eliminar; otras combinaciones = En proceso).</p><p class="mini">El paquete todavía no está validado: lo califica un panel e-Delphi de 6 expertos en un solo instrumento (función y tareas · sustento · producto).</p>${docCard("Mapa de Funciones Profesionales",`${S.fn.length} funciones · 3 bloques por función`,"paquete","per")}`,
      [{label:"Cargar e-Delphi (ronda 1)", main:true, fn:loadDelphi},
       {label:"Expandir la matriz", keep:true, fn:()=>{ S.mode.paquete="per"; setTab("paquete"); toggleExpand(true); }}]);
    refresh();
  });
}
/* ---------- 2.1 Validar (un solo e-Delphi, 3 bloques) ----------
   Cada función trae en f.panel el resultado real del panel: r1/r2 por bloque (ok · rev · no), índices y motivos;
   f.panel.ajustes lleva los textos que Génesys corrigió para la ronda 2. */
const BLQ = {fb:"función y tareas", sb:"sustento", pb:"producto"};
/* ¿hay ronda 2 que aplicar? decisiones de la Escuela, ajustes de Génesys o recalificaciones */
const hayR2 = () => S.fn.some(f=>{ const p=f.panel||{}; return p.r2 || p.escuela || Object.keys(p.ajustes||{}).length; }) || S.fn.some(f=>["fb","sb","pb"].some(b=>f[b]==="rev"));
const ACCION = {excluir:"excluida", fusionar:"fusionada", sublinea:"queda como sublínea", rescatar:"rescatada como complementaria"};
function loadDelphi(){
  if(S.delphi) return;
  const P = D.panel||{};
  userSays("Carga los resultados del e-Delphi.");
  think([`Panel de ${(P.expertos||[]).length||6} expertos · ronda 1`,"Bloque F · función y tareas: I-CVI, CVR y cobertura de tareas","Bloque S · sustento: demanda, impacto y fuentes verificables","Bloque P · producto: autenticidad, partición y evidencias","Guardián del método: reglas y referencias"], ()=>{
    S.delphi = true;
    S.fn.forEach(f=>{ const r=(f.panel||{}).r1||{}; f.fb=r.fb||"ok"; f.sb=r.sb||"ok"; f.pb=r.pb||"ok"; });
    refresh();
    const rv = S.fn.filter(f=>fnState(f)!=="no" && ["fb","sb","pb"].some(b=>f[b]==="rev")), ex = S.fn.filter(f=>fnState(f)==="no");
    const ok = S.fn.filter(f=>fnState(f)==="ok").length;
    addMsg("agent", `<p>Ronda 1 cerrada: <b>${ok} de ${S.fn.length} funciones</b> alcanzan el umbral en los tres bloques (I-CVI ≥ 0,83 y CVR ≥ ${P.cvrCrit||"1,00"} con N = ${(P.expertos||[]).length||6}).</p>
      ${ex.length?`<p>El panel propone <b>excluir ${ex.length}</b>. Todas son reales y relevantes; caen por esencialidad (menos de la mitad las marcó «esencial») o por duplicar otra especialidad: ${ex.map(f=>`<b>${esc(f.c)}</b>`).join(", ")}. <b>La exclusión la decide la Escuela.</b></p>`:""}
      ${rv.length?`<p>Quedan bloques por corregir en <b>${rv.length}</b>: ${rv.slice(0,6).map(f=>`<b>${esc(f.c)}</b> (${["fb","sb","pb"].filter(b=>f[b]==="rev").map(b=>BLQ[b]).join(", ")})`).join("; ")}${rv.length>6?"…":""}. Solo se corrige el bloque observado.</p>`:""}
      ${P.acta?`<p class="mini">${esc(P.acta)}</p>`:""}`,
      [{label:"Aplicar la decisión de la Escuela y corregir (ronda 2)", main:true, fn:round2},
       {label:"Ver el acta en el documento", keep:true, fn:()=>{ S.mode.paquete="per"; setTab("paquete"); }}]);
  });
}
function round2(){
  if(S.round>=2) return;
  userSays("Aplica la decisión de la Escuela, corrige los bloques observados y recalifica.");
  think(["Aplicando la decisión de la Escuela: exclusiones, fusiones y rescates","Génesys reescribe los bloques observados con las fuentes corregidas","Ronda 2 · los mismos expertos recalifican lo que cambió","Consolidando índices y acta"], ()=>{
    S.round = 2;
    const cambio = [], sale = [], resc = [];
    S.fn.forEach(f=>{ const p=f.panel||{}, a=p.ajustes||{}, r=p.r2, e=p.escuela;
      if(Object.keys(a).length){ ["t","d","fd","ji","dem","imp","conf","lim","tasks","prod","refs","amb"].forEach(k=>{ if(a[k]!==undefined) f[k]=a[k]; }); cambio.push(f.c); }
      if(r) ["fb","sb","pb"].forEach(b=>{ if(r[b]) f[b]=r[b]; });
      if(e && e.accion!=="rescatar"){ f.fb="no"; f.salida=`${ACCION[e.accion]}${e.destino?" en "+e.destino:""}`; sale.push(f); }
      else ["fb","sb","pb"].forEach(b=>{ if(f[b]==="rev"){ f[b]="ok"; f.parcial=true; } });
      if(e && e.accion==="rescatar"){ if(f.fb==="no") f.fb="ok"; resc.push(f.c); }
      f.dec = decOf(f); });
    if(D.refsNuevas && !D._refsAgregadas){ D.refs = D.refs.concat(D.refsNuevas); D._refsAgregadas = true; }
    refresh();
    const par = S.fn.filter(f=>f.parcial && fnState(f)!=="no");
    addMsg("agent", `<p>Ronda 2 cerrada. La Escuela decidió sobre las propuestas de exclusión:</p><ul>
      ${sale.map(f=>`<li><b>${esc(f.c)}</b> · ${esc(f.salida)}</li>`).join("")}
      ${resc.length?`<li>Rescatadas como complementarias: <b>${resc.join(", ")}</b></li>`:""}</ul>
      <p>Génesys reescribió ${cambio.length} funciones (fusiones, sustento con tendencia fechada y fuentes corregidas, productos alcanzables al egreso) y el panel las recalificó. Quedan <b>${active().length} funciones</b> en el paquete${par.length?`; como parciales, con su acción de cierre: ${par.map(f=>esc(f.c)).join(", ")}`:""}.</p>`);
    askExcl();
  });
}
function askExcl(){
  if(!S.excl.length){ addMsg("agent", `<p>Ninguna función validada pertenece a otra competencia: el paquete queda completo en ${esc(escK(S.k).c)}.</p>`); S.exclOk=true; checkReady21(); return; }
  addMsg("agent", `<p>Ahora confirme las <b>exclusiones</b>: funciones validadas que movilizan de forma principal capacidades de otra competencia y pasan a su paquete.</p><ul>${S.excl.map(x=>`<li><b>${esc(x.c)}</b> → ${esc(x.dest)} (${esc(x.cap)})</li>`).join("")}</ul>`,
    [{label:"Confirmar exclusiones", main:true, fn:confirmExcl},
       {label:"Revisarlas en el documento", keep:true, fn:()=>{ S.mode.paquete="per"; setTab("paquete"); setTimeout(()=>document.getElementById("exclBox")?.scrollIntoView({behavior:"smooth"}),50); }}]);
}
function confirmExcl(){
  if(S.exclOk) return;
  userSays("Confirmo las exclusiones.");
  S.excl.forEach(x=>{ if(x.st==="prop") x.st="ok"; });
  checkReady21();
}
function checkReady21(){
  if(S.step!==1) return;
  const pend = S.fn.some(f=>["prop","rev"].includes(fnState(f))) || S.excl.some(x=>x.st==="prop");
  if(pend){ refresh(); return; }
  S.exclOk = true; S.step = 2; refresh();
  addMsg("agent", `<p>Validación completa: <b>${active().length} funciones</b> con sus tres bloques conformes y ${S.excl.length} exclusiones confirmadas.</p><p>Al guardar generaré la asignación a las capacidades (paso de ordenamiento, sin otra validación), el nivel de confianza, la matriz de pertinencia, la prueba de suficiencia, la matriz de productos y el informe ejecutivo, y registraré todo en el Proyecto y la base de datos.</p>`,
    [{label:"Guardar Funciones del paso 2.1", main:true, fn:save21}]);
}
function save21(){
  if(S.saved.p21) return;
  if(S.step < 2) S.step = 2;
  const e = escK(S.k), cod = `${ESCUELA}-${e.c}-F2-P21`;
  userSays("Guarda el paso 2.1.");
  think([`Asignando funciones a ${CAPS[0][0]}–${CAPS[CAPS.length-1][0]} (● principal · ○ apoyo)`,"Registrando nivel de confianza y límites","Matriz de pertinencia y prospectiva","Prueba de suficiencia para acreditación","Matriz de productos profesionales",`Informe ejecutivo ${cod} v1.0`,"Proyecto y base de datos"], ()=>{
    S.saved.p21 = true; S.step = 3; S.avail.add("informe"); S.mode.paquete="asig"; refresh(); setTab("paquete");
    toast("Paso 2.1 guardado · informe ejecutivo v1.0");
    const mov = CAPS.map((c,i)=>[c[0], S.alloc.filter(r=>r[2+i]==="●").length]).sort((a,b)=>b[1]-a[1]);
    const sin = mov.filter(m=>!m[1]).map(m=>m[0]), sig = sigEsp();
    addMsg("agent", `<p>Guardado. ${sin.length?`Quedan <b>sin función principal</b>: ${sin.join(", ")} (se alerta; la capacidad no se elimina).`:`Las ${CAPS.length} capacidades quedan cubiertas`}; <b>${mov[0][0]}</b> es la más movilizada.</p>${docCard("Matriz Funcional de Capacidades","Función × capacidad","paquete","asig")}${docCard("Informe ejecutivo "+cod,"v1.0 · DOCX","informe")}
      ${hay("2.2")?"<p>Siguiente: <b>2.2 Elementos de productividad</b>.</p>":`<p>Siguiente: el <b>2.2 Elementos de productividad</b>, que Génesys genera cuando la escuela cierre el 2.1.${sig?` Mientras tanto, siga con <b>${esc(escK(sig).n)}</b>.`:" Todas las especialidades tienen su 2.1 guardado."}</p>`}`,
      hay("2.2") ? [{label:"Generar Matriz de Elementos de Productividad", main:true, fn:gen22}]
      : sig ? [{label:"Trabajar "+escK(sig).n, main:true, fn:()=>elegirEsp(escK(sig).n)}, {label:"Ver el tablero", keep:true, fn:()=>{ S.mode.ent="tesp"; setTab("entrada"); }}]
      : [{label:"Ver el tablero", main:true, fn:()=>{ S.mode.ent="tesp"; setTab("entrada"); }}]);
  });
}

/* ---------- 2.2 Recursos de productividad ---------- */
function gen22(){
  userSays("Genera la Matriz de Elementos de Productividad de Productividad.");
  think(["Leyendo productos, entregables y tareas validados","Estándares: verificando denominación y vigencia","Metodologías con procedimiento reconocible","Herramientas y tecnologías por categoría funcional","Fichas de IA generativa (autonomía A0–A3)","Vinculando cada recurso a tareas y nivel de dominio","Codificando el banco RH-E/M/T/IA"], ()=>{
    if(!S.fn.length && FNK.length) {
      S.fn = FNK.map(k=>({...D.FN[k], fb:"prop", sb:"prop", pb:"prop", rs:[]}));
    }
    const A = active();
    A.forEach(f=>{ f.rs = (f.rec||[]).map((r,i)=>({...r, id:`${f.c}#${i}`, st: r.code==="—" ? "na" : "prop"})); });
    S.recOn = true; resPrompted = false; S.step = 4;
    S.recSel = A.length ? A[0].c : (S.fn[0] ? S.fn[0].c : "");
    S.avail.add("recursos"); S.mode.recursos="fn"; setTab("recursos");
    const R = allRes().filter(r=>r.st!=="na");
    addMsg("agent", `<p>La matriz tiene <b>${R.length} asignaciones función–recurso</b> (${CATS.map(([c])=>`${R.filter(r=>r.cat===c).length} en ${c.toLowerCase()}`).join(", ")}), tomadas de un banco de <b>${D.bank.length} recursos</b> codificados; ${D.bank.filter(b=>/\(\d+\)/.test(b[3]||"")).length} se comparten entre funciones. Cada recurso indica su aplicación en la tarea, el nivel de dominio y su aporte al producto.</p>${A.filter(f=>(f.rec||[]).some(r=>r.code==="—")).length?`<p>${A.filter(f=>(f.rec||[]).some(r=>r.code==="—")).map(f=>f.c).join(" y ")} quedan <i>sin integración de IA pertinente</i>.</p>`:""}${docCard("Matriz de Elementos de Productividad de Productividad",`${R.length} asignaciones · ${A.length} funciones`,"recursos","fn")}`,
      [{label:"Cargar validación abreviada (3 expertos)", main:true, fn:loadRes},
       {label:"Ver banco de recursos", keep:true, fn:()=>{ S.mode.recursos="bank"; setTab("recursos"); }}]);
    refresh();
  });
}
function loadRes(){
  userSays("Carga la validación abreviada de recursos.");
  think(["X1 académico · X4 profesional senior · X6 contextual (normativo, digital e IA)","I-CVI = 1,00 en los siete criterios","X6: fichas de IA, autonomía frente al nivel de confianza y marcos citados"], ()=>{
    S.recPanel = true;
    const A = active();
    if(!allRes().length && A.length) {
      A.forEach(f=>{ f.rs = (f.rec||[]).map((r,i)=>({...r, id:`${f.c}#${i}`, st: r.code==="—" ? "na" : "prop"})); });
    }
    A.forEach(f=>(f.rs||[]).forEach(r=>{ if(r.st!=="na") r.exp=true; }));
    S.recSel = A.length ? A[0].c : (S.fn[0] ? S.fn[0].c : "");
    S.mode.recursos="fn"; setTab("recursos"); refresh();
    const ia = allRes().filter(r=>r.cat.startsWith("Integración")&&r.exp);
    const selC = A.length ? A[0].c : "";
    addMsg("agent", `<p>Los expertos dieron conformidad en la ronda 1 (I-CVI = 1,00 en los siete criterios). X6 verificó las ${ia.length} fichas de IA: autonomía coherente con el nivel de confianza, sin datos personales fuera de sistemas institucionales y con marco citado.</p><p>Ahora confirme <b>función por función</b>: el producto queda fijo a la izquierda mientras recorre sus recursos; al terminar use «Confirmar y seguir».</p>`,
      [{label: selC ? "Empezar por "+selC : "Ver recursos", main:true, keep:true, fn:()=>{ if(selC) S.recSel=selC; setTab("recursos"); }},
       {label:"Confirmar todas las funciones", fn:()=>{ userSays("Confirma los recursos de todas las funciones."); active().forEach(f=>(f.rs||[]).forEach(r=>{ if(r.st!=="na") r.st="ok"; })); resPrompted=false; refresh(); checkRes22(); }}]);
  });
}
function confirmFn(code){
  const A=active(), f=A.find(x=>x.c===code); if(!f) return;
  (f.rs||[]).forEach(r=>{ if(r.st==="prop") r.st="ok"; });
  const next = A.find(x=>(x.rs||[]).some(r=>r.st==="prop"));
  toast(`${f.c}: recursos confirmados`);
  if(next){ S.recSel=next.c; }
  resPrompted=false; refresh(); $("#pBody").scrollTop=0; checkRes22();
}
let resPrompted=false;
function checkRes22(){
  if(S.step!==4) return;
  const A = active();
  if(A.length && !allRes().length) {
    A.forEach(f=>{ f.rs = (f.rec||[]).map((r,i)=>({...r, id:`${f.c}#${i}`, st: r.code==="—" ? "na" : "ok"})); });
  }
  if(allRes().some(r=>r.st==="prop"||r.st==="rev")) return;
  if(resPrompted) return;
  resPrompted=true; S.step=5; refresh();
  addMsg("agent", `<p>Recursos confirmados en las ${A.length} funciones (${allRes().filter(r=>r.st==="ok").length} asignaciones).</p><p>Falta el último momento del paso: <b>generar los temas nucleares de la especialidad</b> —lo que cada tarea exige saber—. Salen del mismo barrido de tres niveles sobre producto, entregables, tareas y elementos de productividad, y aparecen como una cuarta columna de esta misma interfaz.</p>`,
    [{label:"Generar Temas Nucleares", main:true, fn:genTN}]);
}
/* ---------- 2.2 · momento 4: Temas nucleares de especialidad (paso 2.3) ---------- */
function genTN(){
  if(S.te.gen || S.step!==5) return;
  userSays("Genera los temas nucleares de la especialidad.");
  think(["Barrido nivel 1: el producto de especialidad de cada función","Barrido nivel 2: entregables y sus evidencias","Barrido nivel 3: tareas clave y elementos de productividad asociados",
    "Prueba de identificación: ¿es un saber, o es el recurso que lo origina?","Fijando el anclaje y el nivel de cada tema (máximo de sus recursos)",
    "Marcando los temas compartidos con otras especialidades","Listando los candidatos a tema base para el paso 2.4"], ()=>{
    S.te.gen = true; S.te.show = true; S.step = 6; S.mode.recursos="fn"; setTab("recursos"); refresh();
    const mt = TE.reduce((a,t)=>a+t[2].length,0), comp = TE.filter(t=>t[6].length).length;
    addMsg("agent", `<p>El barrido deja <b>${TE.length} temas nucleares de especialidad</b> con <b>${mt} micro temas</b>. Cada uno queda anclado a la tarea, el entregable o el producto que lo exige, con el nivel más alto de sus elementos de productividad.</p>
      <p><b>${comp}</b> están marcados como <b>compartidos</b> con otras especialidades de la escuela —siguen siendo de especialidad: la naturaleza clasifica, la compartición solo ubica— y los <b>${TE.length}</b> pasan como <i>candidatos base</i> al paso 2.4.</p>
      <p class="mini">Los verá en la <b>cuarta columna</b> de la matriz, junto a los elementos de productividad de cada función; puede ocultarla con el botón «Ocultar temas».</p>`,
      [{label:"Guardar 2.2 y el banco de temas", main:true, fn:save22},
       {label:"Ver el banco completo de la especialidad", keep:true, fn:verBancoTE}]);
  });
}
function verBancoTE(){
  const mt = TE.reduce((a,t)=>a+t[2].length,0);
  openModal(`Banco de temas nucleares · ${esc(S.spec||ESC[0].n)}`,
   `<div class="ayhero ay-gold"><span class="ayic">TE</span><div><b>${TE.length} temas · ${mt} micro temas</b><small>Salida del momento «Generar Temas Nucleares» · paso 2.3 del método</small></div></div>
    <div class="tw"><table><thead><tr><th style="width:60px">Código</th><th style="min-width:230px">Tema nuclear de especialidad</th><th style="width:88px">Anclaje</th><th style="width:78px">Nivel</th><th style="width:120px">Funciones</th><th style="width:110px">Compartido</th></tr></thead>
    <tbody>${TE.map(t=>`<tr><td class="num">${t[0]}</td><td style="color:var(--ink)"><b>${esc(t[1])}</b><div class="mini">${t[2].length} micro temas</div></td>
      <td><span class="tag t-neutral">${t[4]}</span></td><td>${NIV[t[5]]}</td><td><div class="bps">${t[3].map(f=>`<span class="bp">${esc(f)}</span>`).join("")}</div></td>
      <td>${t[6].length?`<div class="bps">${t[6].map(k=>`<span class="et v3">${k}</span>`).join(" ")}</div>`:'<span class="mini">propio</span>'}</td></tr>`).join("")}</tbody></table></div>`);
}
function save22(){
  if(S.saved.p22) return;
  if(S.step < 6) S.step = 6;
  userSays("Guarda el paso 2.2 con sus temas nucleares.");
  think(["Guardando la matriz funcional y el banco de recursos","Guardando el banco de temas nucleares de la especialidad","Marcando los temas compartidos y los candidatos base","Registrando en el Proyecto y la base de datos"], ()=>{
    S.saved.p22 = true; S.te.saved = true; S.step = 7; refresh();
    toast("Paso 2.2 guardado · elementos de productividad y temas nucleares");
    addMsg("agent", `<p>Guardado. Funciones, sustento, productos, <b>elementos de productividad</b> y <b>temas nucleares</b> de esta especialidad quedan registrados en el Proyecto y la base de datos.</p><p class="mini">Con esto la especialidad cierra su 2.3. Para abrir los pasos de escuela hacen falta las ${ESC.length}: puede generar el lote restante ahora o seguir una por una.</p><p>Siguiente: <b>2.4 Derivación disciplinar</b>, de escuela: desde los temas de especialidad de las ${ESC.length} se derivan los temas base que los sostienen.</p>`,
      [{label:"Consolidar el lote de especialidades (2.4)", main:true, fn:gen23},
       {label:"Exportar matriz a Word (A3)", keep:true, fn:()=>toast("Exportación a Word A3 (simulada)")}]);
  });
}

/* ---------- Competencia: textos ---------- */
const COMP = {
  conc:"Gestiona el proceso de atención nutricional de la persona sana, en riesgo o con patología, mediante la evaluación, el diagnóstico, la intervención y el monitoreo nutricional, con fundamento en evidencia científica, seguridad y ética profesional, para prevenir riesgos, mejorar el estado nutricional y apoyar su recuperación clínica.",
  conc12:"Gestiona el proceso de atención nutricional de la persona sana, en riesgo o con patología en consulta externa, hospitalización, cuidados intensivos y dietética, mediante la evaluación, el diagnóstico, la intervención y el monitoreo nutricional con continuidad en la red de servicios, con fundamento en evidencia científica, seguridad del paciente y ética profesional, para prevenir riesgos, mejorar el estado nutricional y apoyar su recuperación clínica.",
  capsc12:{
    "C1.1":"Valora de manera integral y oportuna el estado nutricional y los riesgos de la persona, incluido el riesgo de complicaciones del soporte nutricional.",
    "C1.2":"Interpreta la evaluación nutricional con razonamiento clínico y evidencia para formular y priorizar el diagnóstico nutricional.",
    "C1.3":"Diseña e implementa con seguridad la intervención nutricional —dieta, soporte, consejería y alta— que responde al diagnóstico y a las necesidades de la persona.",
    "C1.4":"Monitorea y ajusta la intervención nutricional para lograr los objetivos terapéuticos con calidad y asegurar la continuidad de la atención."
  },
  op11:"Gestiona el proceso de atención nutricional de personas sanas, en riesgo o con patología, integrando fundamentos de nutrición humana, metabolismo, fisiopatología, dietoterapia y conducta alimentaria; mediante la evaluación nutricional integral, el diagnóstico nutricional, el diseño e implementación de la intervención y el monitoreo y optimización del plan, aplicando el Nutrition Care Process, los criterios GLIM y las guías ESPEN y ASPEN, con apoyo de historia clínica electrónica, software de análisis dietético y herramientas digitales de seguimiento; en contextos ambulatorios, hospitalarios, comunitarios y de condiciones especiales; con criterios de evidencia científica, seguridad, trazabilidad y ética profesional; para prevenir riesgos, mejorar el estado nutricional y apoyar la recuperación clínica de la persona.",
  op12:"Gestiona el proceso de atención nutricional de personas sanas, en riesgo o con patología, integrando fundamentos de nutrición humana, metabolismo, fisiopatología, dietoterapia y conducta alimentaria; mediante la evaluación nutricional integral, el diagnóstico nutricional, el diseño e implementación de la intervención —dietoterapia hospitalaria, soporte nutricional enteral, prevención del síndrome de realimentación, consejería individual y familiar y planificación del alta— y el monitoreo y optimización del plan con referencia y contrarreferencia oportuna, aplicando el Proceso de Atención Nutricional con terminología eNCPT, los criterios GLIM, las guías ESPEN y ASPEN, el marco IDDSI y la normativa nacional vigente (Ley 30188, NTS N.° 103-MINSA/DGSP-V.01 y NT N.° 018-MINSA/DGSP-V.01), con apoyo de historia clínica electrónica, herramientas digitales de cálculo dietético, plataformas de telesalud e inteligencia artificial generativa usada con verificación profesional; en consulta externa, hospitalización, unidades de cuidados intensivos y servicios de dietética{COM}; con criterios de evidencia científica, seguridad del paciente, calidad, trazabilidad y ética profesional; para prevenir riesgos, mejorar el estado nutricional y apoyar la recuperación clínica de la persona.",
  cambios:[
    ["Definición conceptual","Sintetiza los ámbitos reales y la continuidad en la red de servicios; se mantiene breve y sin métodos."],
    ["Familias de funciones","Incorpora las intervenciones de las familias FA–FD: dietoterapia hospitalaria, soporte enteral, prevención de la realimentación, consejería y alta."],
    ["Ámbitos","Precisa los ámbitos reales de las funciones: consulta externa, hospitalización, UCI y dietética."],
    ["Estándares validados (2.2)","Añade eNCPT, IDDSI y la normativa nacional (Ley 30188, NTS 103, NT 018)."],
    ["Tecnologías (2.2)","Añade telesalud e IA generativa con verificación profesional."],
    ["Ajuste aprobado de C1.4","Incorpora la referencia y contrarreferencia oportuna."],
    ["Contexto comunitario","El texto vigente dice «comunitarios»; ninguna función de C1 ocurre en la comunidad y la educación grupal se forma en C2. Requiere su decisión."]
  ],
  caps:{
    "C1.1":["Valora de manera integral el estado nutricional de la persona para identificar sus riesgos y necesidades nutricionales.","Evalúa el estado nutricional de personas sanas, en riesgo o con patología mediante el tamizaje con herramientas validadas (MST, MUST, NRS-2002), la antropometría según protocolo ISAK, el recordatorio de 24 horas y la frecuencia de consumo, el examen físico nutricional y la interpretación de datos bioquímicos y clínicos, conforme al Proceso de Atención Nutricional y a los criterios GLIM, con equipos antropométricos calibrados e historia clínica electrónica; en consulta externa y hospitalización; con criterios de exactitud, oportunidad y registro completo; evidenciado en la ficha de evaluación nutricional."],
    "C1.2":["Interpreta la evaluación nutricional para formular y priorizar el diagnóstico nutricional con razonamiento clínico.","Formula y prioriza diagnósticos nutricionales en formato PES con terminología eNCPT, integrando los datos de la evaluación, la fisiopatología y los criterios GLIM de fenotipo, etiología y severidad, con base en las guías ESPEN y ASPEN, y los registra en la historia clínica electrónica; en consulta externa y hospitalización; con criterios de pertinencia, coherencia clínica y trazabilidad; evidenciado en el informe diagnóstico nutricional."],
    "C1.3":["Diseña e implementa la intervención nutricional que responde al diagnóstico y a las necesidades de la persona.","Diseña e implementa la intervención nutricional calculando requerimientos, prescribiendo la dieta con su tipo, consistencia según el marco IDDSI, fraccionamiento y restricciones, planificando el soporte enteral y participando en equipo en el parenteral, y aplicando la entrevista motivacional en la consejería individual y familiar, conforme a las guías ESPEN y ASPEN, con herramientas digitales de cálculo dietético; en consulta externa, hospitalización, UCI y dietética; con criterios de adecuación, seguridad y adherencia; evidenciado en el plan nutricional documentado."],
    "C1.4":["Monitorea y ajusta la intervención nutricional para lograr los objetivos terapéuticos y asegurar la continuidad de la atención.","Monitorea la evolución nutricional comparándola con la línea base, la reevalúa con criterios GLIM y ajusta la intervención, documentándola en notas ADIME o SOAP según el Proceso de Atención Nutricional, con historia clínica electrónica y telemonitoreo, y asegura la continuidad de la atención nutricional mediante la referencia y contrarreferencia oportuna conforme a la NT N.° 018-MINSA/DGSP-V.01; en consulta externa, hospitalización y la red de servicios; con criterios de oportunidad, efectividad y trazabilidad; evidenciado en la nota de evolución y el informe de resultados."]
  },
  caps12:{
    "C1.1":["Evalúa el estado nutricional de personas sanas, en riesgo o con patología mediante el tamizaje con herramientas validadas (MST, MUST, NRS-2002) dentro de las 24 a 48 horas del ingreso, la valoración global subjetiva, la antropometría según protocolo ISAK y la guía técnica del MINSA, el recordatorio de 24 horas y la frecuencia de consumo, el examen físico nutricional, la interpretación de datos bioquímicos y clínicos y la clasificación del riesgo de síndrome de realimentación, conforme al Proceso de Atención Nutricional y a los criterios GLIM, con equipos antropométricos calibrados e historia clínica electrónica; en consulta externa, hospitalización y unidades de cuidados intensivos; con criterios de exactitud, oportunidad y registro completo; evidenciado en la ficha de evaluación nutricional.","Tamizaje en 24–48 h (GPC EsSalud), valoración global subjetiva y guía MINSA RM 184-2012; clasificación del riesgo de realimentación (N2); ámbito UCI.","B01, N2, B08"],
    "C1.2":["Formula y prioriza diagnósticos nutricionales en formato PES con terminología eNCPT, integrando los datos de la evaluación, la fisiopatología y los criterios GLIM de fenotipo, etiología y severidad, con base en las guías ESPEN y ASPEN y en la evidencia valorada con AGREE II y GRADE, y los registra en la historia clínica electrónica conforme a la Ley 30024; en consulta externa y hospitalización; con criterios de pertinencia, coherencia clínica y trazabilidad; evidenciado en el informe diagnóstico nutricional.","Práctica basada en evidencia (B12a: AGREE II y GRADE); registro conforme a la Ley 30024.","B01, B08"],
    "C1.3":["Diseña e implementa la intervención nutricional calculando requerimientos con las Tablas peruanas de composición de alimentos, prescribiendo la dieta con su tipo, consistencia según el marco IDDSI, fraccionamiento y restricciones, especificando los regímenes del servicio, planificando el soporte enteral y el reinicio seguro de la alimentación, participando en equipo en el soporte parenteral, aplicando la entrevista motivacional y el modelo de etapas del cambio en la consejería individual y familiar, y preparando el alta con el método de retorno de la explicación, conforme a las guías ESPEN y ASPEN y a la NTS N.° 103-MINSA/DGSP-V.01, con herramientas digitales de cálculo dietético e inteligencia artificial generativa verificada por el profesional; en consulta externa, hospitalización, UCI y dietética; con criterios de adecuación, seguridad y adherencia; evidenciado en el plan nutricional documentado.","Especificación de regímenes (B06-C1), reinicio seguro (N2), plan de alta con teach-back (B05), etapas del cambio (B09′), NTS 103, Tablas peruanas e IA generativa A1–A2.","B02′, B03, N2, B05, B08, B09′, B06-C1"],
    "C1.4":["Monitorea la evolución nutricional comparándola con la línea base, la reevalúa con criterios GLIM y ajusta la intervención, documentándola en notas ADIME o SOAP según el Proceso de Atención Nutricional, con historia clínica electrónica, tableros de evolución y telemonitoreo; aplica los protocolos del servicio y registra sus indicadores de calidad conforme al Sistema de Gestión de la Calidad en Salud, y asegura la continuidad de la atención nutricional mediante la referencia y contrarreferencia oportuna conforme a la NT N.° 018-MINSA/DGSP-V.01; en consulta externa, hospitalización y la red de servicios; con criterios de oportunidad, efectividad, calidad y trazabilidad; evidenciado en la nota de evolución y el informe de resultados.","Protocolos e indicadores de calidad (B11a, RM 519-2006), tableros de evolución y cláusula aprobada de referencia y contrarreferencia (N1).","B03, B10, N1"]
  },
  prop11:"Saber de nutrición y saber qué hacer con el paciente que tienes al frente son dos cosas distintas. Esta especialidad te forma en la segunda: aprendes a leer un caso completo —laboratorio, historia clínica, hábitos, contexto familiar— y a decidir, con criterio propio, qué necesita esa persona hoy. Practicas en hospital, consultorio y comunidad, con las guías y las herramientas digitales que usa el nutricionista actual, y sales sabiendo sustentar tu decisión frente a médicos, pacientes y familias. Cada plan que firmes cambia cómo alguien come, se recupera y vuelve a su vida. Esa es la huella que dejas, paciente por paciente.",
  prom11:"Convierte datos clínicos en decisiones que devuelven salud y autonomía a cada paciente.",
  prop12:"Saber de nutrición y saber qué hacer con el paciente que tienes al frente son dos cosas distintas. Esta especialidad te forma en la segunda. Aprendes a tamizar y diagnosticar la desnutrición con criterios GLIM, a prescribir la dieta y el soporte enteral que cada caso necesita, a prevenir complicaciones como el síndrome de realimentación y a preparar el alta con un plan que la familia entiende. Lo practicas en consulta externa, hospitalización, cuidados intensivos y dietética, con historia clínica electrónica, telesalud e inteligencia artificial que aprendes a usar y a verificar, y sales sabiendo sustentar cada decisión frente a médicos, pacientes y familias. Cada plan que firmes cambia cómo alguien come, se recupera y vuelve a su vida.",
  prom12:"Convierte datos clínicos en decisiones nutricionales seguras que devuelven salud y autonomía a cada paciente."
};
const DECI = () => COMP.decision || {aspecto:"Contexto comunitario",motivo:"El texto vigente dice «comunitarios» y ninguna función de la competencia ocurre allí.",opA:{label:"Retirar «comunitarios» y validar",user:"Retira el contexto comunitario y valida.",ins:""},opB:{label:"Mantener el contexto comunitario y validar",user:"Mantén el contexto comunitario y valida.",ins:" y contextos comunitarios"}};
const baseOp = keep => (COMP.op12||"").replace("{COM}", keep ? DECI().opB.ins : DECI().opA.ins);
/* la competencia v1.2 es de cada especialidad (datos/f2-<cod>.js → esp[k].comp31) */
function ponerComp(){ const c=D.comp31; if(!c) return; Object.keys(COMP).forEach(k=>delete COMP[k]); Object.assign(COMP, JSON.parse(JSON.stringify(c))); }
const opText = () => (S.c31.txt && S.c31.txt.op) || baseOp(S.c31.com==="keep");
const cTxt = (k,f) => (S.c31.txt && S.c31.txt[f+k]) || (f==="c" ? COMP.capsc12[k] : COMP.caps12[k][0]);
const concText = () => (S.c31.txt && S.c31.txt.conc) || COMP.conc12;
ponerComp();
{ const e0 = estadoInicial(); S.te = e0.te; S.c31 = e0.c31; S.c32 = e0.c32; }

/* ---------- 2.4 (a) Validación de la competencia y capacidades ---------- */
function gen31(){
  userSays("Actualiza la competencia y sus capacidades.");
  think(["Leyendo familias de funciones FA–FE","Leyendo estándares y tecnologías validados en 2.2","Contrastando las definiciones conceptuales y operacionales con la v1.1","Redactando la propuesta v1.2 de la competencia y las capacidades"], ()=>{
    S.c31.gen = true; S.c31.txt = {conc:COMP.conc12, op:baseOp(false)}; CAPS.forEach(c=>{ S.c31.txt['c'+c[0]]=COMP.capsc12[c[0]]; S.c31.txt['o'+c[0]]=COMP.caps12[c[0]][0]; }); S.step = 7; S.avail.add("competencia"); S.mode.competencia="def"; setTab("competencia");
    addMsg("agent", `<p>Propongo las <b>definiciones conceptual y operacional v1.2</b> de la competencia y de sus <b>${CAPS.length} capacidades</b>. La competencia cambia en ${COMP.cambios.length} puntos respecto de la v1.1 (${COMP.cambios.map(c=>c[0].toLowerCase()).join(", ")}; el último requiere su decisión). Cada capacidad incorpora los métodos y estándares de las funciones que la movilizan; las denominaciones se conservan.</p>${docCard("Validación de la competencia","Competencia y capacidades · v1.1 → v1.2","competencia","def")}`,
      [{label:"Cargar validación (SMART y expertos)", main:true, fn:val31}]);
    refresh();
  });
}
function val31(){
  userSays("Valida la competencia y sus capacidades.");
  think(["Criterios SMART de la definición",`Coherencia con las ${active().length} funciones y sus familias`,"Coherencia con los estándares validados","Capacidades: cobertura de funciones y estándares","Panel abreviado: I-CVI por criterio"], ()=>{
    S.c31.val = true; refresh();
    addMsg("agent", `<p>La competencia y las ${CAPS.length} capacidades cumplen los criterios SMART y la coherencia con funciones y estándares (I-CVI = 1,00). Falta su confirmación:</p><ul><li>Revise cada capacidad y confírmela con ✓ (o ↺ para pedir un ajuste).</li><li><b>${esc(DECI().aspecto||"")}</b>: ${esc(DECI().motivo||"")}</li></ul>`,
      [{label:DECI().opA.label, main:true, keep:true, fn:()=>decide31("drop")},
       {label:DECI().opB.label, keep:true, fn:()=>decide31("keep")},
       {label:"Revisar capacidad por capacidad", keep:true, fn:()=>{ S.mode.competencia="def"; setTab("competencia"); toast("Confirme cada capacidad con ✓ o pida un ajuste con ↺"); }}]);
  });
}
function decide31(v){
  if(S.c31.com) return;
  userSays(v==="drop"?DECI().opA.user:DECI().opB.user);
  S.c31.com = v; if(!S.c31.edop) S.c31.txt.op = baseOp(v==='keep');
  CAPS.forEach(c=>{ if(S.c31.cap[c[0]]==="prop") S.c31.cap[c[0]]="ok"; });
  refresh(); check31();
  if(S.step===7){
    const rev = CAPS.filter(c=>S.c31.cap[c[0]]==="rev").map(c=>c[0]);
    addMsg("agent", `<p>Quedan capacidades con ajuste pedido: <b>${rev.join(", ")}</b>. Puede corregir su texto en el documento y confirmarlas, o darlas por validadas con el botón <b>Validar competencia</b> del documento.</p>`,
      [{label:"Dar por validadas y continuar", main:true, fn:forceVal31}]);
  }
}
function forceVal31(){
  if(S.c31.saved || S.busy) return;
  if(!S.c31.gen) return;
  if(!S.c31.val){ val31(); return; }
  CAPS.forEach(c=>{ if(S.c31.cap[c[0]]!=="ok") S.c31.cap[c[0]]="ok"; });
  if(!S.c31.com){ S.c31.com="drop"; if(!S.c31.edop) S.c31.txt.op = baseOp(false); }
  refresh(); check31();
  if(S.step===8) toast("Competencia y capacidades validadas · ya puede guardar");
}
function check31(){
  if(S.step!==7 || !S.c31.com || CAPS.some(c=>S.c31.cap[c[0]]!=="ok")) return;
  S.step = 8; refresh();
  addMsg("agent", `<p>Listo. La competencia y sus ${CAPS.length} capacidades quedan validadas en la versión 1.2. Al guardar se actualiza la Ficha Técnica.</p>`,
    [{label:"Guardar validación de la competencia", main:true, fn:save31}]);
}
function save31(){
  if(S.c31.saved || S.step!==8) return;
  userSays("Guarda la validación de la competencia.");
  think(["Actualizando la Ficha Técnica a v1.2","Registrando la trazabilidad v1.1 → v1.2"], ()=>{
    S.c31.saved = true; S.step = 9; refresh();
    toast("Competencia y capacidades guardadas · Ficha Técnica v1.2");
    addMsg("agent", `<p>Guardado. Con esto <b>${esc(S.spec||"la especialidad")}</b> cierra su recorrido: funciones, recursos y competencia validada.</p><p>El paso <b>2.4 es de escuela</b>: consolida los recursos de <b>todas</b> las especialidades para derivar los temas nucleares, agruparlos en dimensiones y formular la competencia disciplinar.</p>`,
      [{label:"Competencias disciplinares (2.4)", main:true, fn:gen23}]);
  });
}

/* ---------- 2.4 Derivación disciplinar (escuela) ---------- */
const NIV = {1:"Conoce",2:"Aplica",3:"Domina"};
/* TE: temas nucleares DE ESPECIALIDAD (paso 2.3, dentro del 2.2)
   [código, tema, micro temas, funciones de origen, anclaje, nivel, compartido con, candidatos base] */
const TE = F2.TE || [];   /* dato de escuela · datos/f2-<cod>.js */
const teDeFn = c => TE.filter(t=>t[3].includes(c));
const teDeTN = k => TE.filter(t=>t[7].includes(k));
const teOf = k => TE.find(t=>t[0]===k);

/* TN: código, enunciado, micro temas, recurso de origen, anclaje, {esp:nivel}, dimensión, marca */
const TN = F2.TN || [];   /* dato de escuela · datos/f2-<cod>.js */
const DIM0 = F2.DIM0 || [];   /* dato de escuela · datos/f2-<cod>.js */
const CDIS0 = F2.CDIS0 || [];   /* dato de escuela · datos/f2-<cod>.js */
const PANELD = F2.PANELD || {};   /* dato de escuela · datos/f2-<cod>.js */
S.bulk = {fn:false, rec:false};
S.d23 = {lote:false, temas:false, dim:false, comp:false, panel:false, saved:false, ronda:1, huerf:null,
  gtem:"tema", open:{}, dopen:{}, gopen:{}, copen:{}, bopen:{}, sel:[], ag:[], coh:false, DIM:DIM0.map(r=>r.slice()), CD:CDIS0.map(r=>[r[0],r[1],r[2].slice(),r[3].slice(),r[4],r[5]])};

const tnOf = k => TN.find(t=>t[0]===k);
/* --- Agentes expertos que evalúan la coherencia de la derivación TE → TB --- */
const AGENTES = F2.AGENTES || [];   /* dato de escuela · datos/f2-<cod>.js */
const COHX = F2.COHX || {};   /* dato de escuela · datos/f2-<cod>.js */
function cohDe(t){
  if(COHX[t[0]]) return COHX[t[0]];
  const n = teDeTN(t[0]).length, otras = espDe(t).filter(k=>k!==S.k);
  if(n>=2) return ["ok","Derivación verificada",`Lo exigen ${n} temas de especialidad distintos y responde a la pregunta «qué hay que saber antes»: es un saber previo, no el saber de la tarea.`];
  if(n===1) return ["ok","Derivación suficiente","Un solo tema de especialidad lo exige, pero la relación es de fundamento y el nivel declarado es coherente con el de ese tema."];
  if(otras.length) return ["na","Deriva de otras especialidades",`Esta especialidad no lo exige; lo sostienen ${otras.join(", ")}. La evaluación de coherencia corresponde a sus subpaneles.`];
  return ["rev","Sin enlace","Ningún tema de especialidad de la escuela lo exige: o falta un tema en el 2.3, o el tema base sobra."];
}
const cohICVI = v => v[0]==="ok" ? (v[1]==="Derivación verificada"?"1,00":"0,86") : v[0]==="na" ? "—" : "0,57";
const agsDe = t => { const d=t[6]&&t[6]!=="huerf"?t[6]:null;
  return AGENTES.filter(a=>S.d23.ag.includes(a[0]) && (a[2]===d || a[0]==="GD")).map(a=>a[0]); };
function asignarAgentes(){
  openModal("Agentes evaluadores de la derivación", `<div class="ayhero ay-navy"><span class="ayic">⚖</span><div><b>¿La derivación es coherente?</b>
      <small>Cada agente compara el tema base con los temas de especialidad que lo exigen y dictamina si es realmente un saber previo</small></div></div>
    <p>Elija los agentes. Cada uno evalúa los temas base de <b>su dimensión</b>; el <b>guardián</b> revisa todos y aplica la regla de naturaleza.</p>
    <div class="aglist">${AGENTES.map(a=>`<label class="agi ${S.d23.ag.includes(a[0])?"on":""}"><input type="checkbox" data-agp="${a[0]}" ${S.d23.ag.includes(a[0])?"checked":""}>
      <span><b>${a[0]} · ${esc(a[1])}</b><small>${esc(a[3])}</small></span><i>${a[2]}</i></label>`).join("")}</div>
    <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:14px"><button class="btn sm mclose">Cancelar</button>
      <button class="btn sm primary" id="cohRun">Evaluar la coherencia de derivación</button></div>`);
}
function correrCoh(){
  const n = S.d23.ag.length;
  if(!n){ toast("Elija al menos un agente evaluador"); return; }
  closeModal();
  think([`Asignando ${n} agentes a los temas base de su dimensión`,"Comparando cada tema base con los temas de especialidad que lo exigen",
    "Prueba de naturaleza: ¿es saber previo o es el saber de la tarea?","Contrastando el nivel declarado entre el tema base y el de especialidad","Consolidando dictámenes e I-CVI"], ()=>{
    S.d23.coh = true; S.mode.disc="temas"; setTab("disc"); refresh();
    const ok=TN.filter(t=>cohDe(t)[0]==="ok").length, rev=TN.filter(t=>cohDe(t)[0]==="rev").length, na=TN.length-ok-rev;
    addMsg("agent", `<p>Los ${n} agentes evaluaron los ${TN.length} temas base contra los ${TE.length} temas de especialidad del banco.</p>
      <ul><li><b>${ok} con derivación verificada</b> · el tema base es efectivamente el saber previo.</li>
      <li><b>${rev} para revisar</b>${Object.entries(COHX).filter(([k,v])=>v[0]==="rev").length?" · "+Object.entries(COHX).filter(([k,v])=>v[0]==="rev").map(([k,v])=>`${k} (${v[1].toLowerCase()})`).join(", "):""}.</li>
      <li>${na} derivan de otras especialidades y los evalúan sus subpaneles.</li></ul>
      <p class="mini">Clic en la columna <b>Coherencia</b> de cualquier fila para leer el dictamen.</p>`,
      [{label:"Ver el banco con los dictámenes", main:true, keep:true, fn:()=>{ S.mode.disc="temas"; setTab("disc"); }}]);
  });
}
function verDictamen(k){
  const t=tnOf(k); if(!t) return;
  const v=cohDe(t), tes=teDeTN(k), ags=agsDe(t);
  const cls = v[0]==="ok"?"ay-ok":v[0]==="rev"?"ay-bad":"ay-navy";
  openModal(`${k} · coherencia de derivación`, `<div class="ayhero ${cls}"><span class="ayic">${v[0]==="ok"?"✓":v[0]==="rev"?"!":"→"}</span>
      <div><b>${v[1]}</b><small>${esc(t[1])}</small></div></div>
    <p class="q">${esc(v[2])}</p>
    <div class="eyebrow">Temas de especialidad que lo exigen</div>
    ${tes.length?`<ul class="tlist2" style="margin:4px 0 10px">${tes.map(x=>`<li><b>${x[0]}</b> ${esc(x[1])} <span class="mini">· anclaje ${x[4].toLowerCase()} · ${NIV[x[5]]}</span></li>`).join("")}</ul>`
      :`<p class="mini" style="margin:4px 0 10px">Ninguno en esta especialidad.</p>`}
    <div class="eyebrow">Agentes que lo evaluaron</div>
    <div class="bps" style="margin:4px 0 10px">${ags.length?ags.map(a=>{ const A=AGENTES.find(x=>x[0]===a); return `<span class="bp ok" title="${esc(A[3])}">${A[0]} · ${esc(A[1])}</span>`; }).join("")
      :'<span class="bp rev">Sin agente asignado para su dimensión</span>'}</div>
    <div class="mx"><span>I-CVI <b>${cohICVI(v)}</b></span><span>Dimensión <b>${t[6]&&t[6]!=="huerf"?t[6]:"—"}</b></span><span>Nivel del tronco <b>${esFund(t)?NIV[nivMin(t)]:"—"}</b></span></div>`);
}
const espDe = t => Object.keys(t[5]);
const nivMin = t => Math.min(...Object.values(t[5]));
const esFund = t => espDe(t).length>=2 && t[6]!=="huerf";
const dimDe = c => S.d23.DIM.find(d=>d[0]===c);
const tnDe = d => TN.filter(t=>t[6]===d);
const cdDe = d => S.d23.CD.find(c=>c[3].includes(d));
const tnEsp = k => TN.filter(t=>t[5][k]);
const fundE = k => { const t=tnEsp(k), f=t.filter(esFund).length, p=ESC.find(e=>e.k===k).prop + (t.length-f);
  return {f, tot:f+p, pct:Math.round(f/(f+p)*100)}; };
const fracED = (k,d) => { const f=tnEsp(k).filter(esFund); const n=f.filter(t=>t[6]===d).length;
  return f.length? n/f.length : 0; };


/* ---------- ayudas didácticas ---------- */
const AY = {
 A:["Amplitud · cuánto territorio profesional cubre",
   `<p class="q"><b>Pregunta que responde:</b> ¿cuántas cosas distintas tiene que saber hacer el egresado de esta especialidad?</p>
    <p>Se calcula con cuatro indicadores del paso 2.1: funciones núcleo, tareas clave, entregables de sus productos y diversidad de ámbitos. Los conteos entran con su <b>densidad por función</b>, para que listar más tareas no infle el peso.</p>
    <div class="analog"><b>Ejemplo.</b> Gestión de servicios cubre menús, producción, inocuidad, costos y auditoría: cinco territorios distintos en cuatro ámbitos. Evaluación avanzada cubre medir y reportar: más angosta. La primera puntúa alto en amplitud aunque sus tareas sean menos exigentes una por una.</div>`],
 P:["Profundidad · qué tan exigente es el desempeño",
   `<p class="q"><b>Pregunta que responde:</b> ¿hasta qué nivel debe llegar el egresado en lo que hace?</p>
    <p>Viene del acta del e-Delphi —el nivel de confianza EPA de las funciones núcleo— más las tareas por función, la complejidad cognitiva que califica el panel con rúbrica y la integración del producto.</p>
    <div class="analog"><b>Ejemplo.</b> «Soporte nutricional enteral» exige decidir bajo incertidumbre con un paciente que puede empeorar: complejidad 4 o 5. «Despachar bandejas según el ciclo de menús» es un procedimiento estandarizado: complejidad 1. Por eso <b>profundidad pesa más que amplitud</b> (37 % contra 22 %): pocas funciones muy exigentes piden más formación que muchas funciones simples.</div>`],
 C:["Criticidad · qué consecuencia tiene hacerlo mal",
   `<p class="q"><b>Pregunta que responde:</b> si el egresado se equivoca, ¿qué pasa?</p>
    <p>Sale de la mediana de criticidad del e-Delphi, de la proporción de funciones con límites explícitos o con IA restringida, y de la rúbrica de consecuencia del error que califica el empleador.</p>
    <div class="analog"><b>Ejemplo.</b> Un error al prevenir el síndrome de realimentación puede matar al paciente: nivel 5. Un error al calcular el costo de una ración se corrige el mes siguiente: nivel 2. La criticidad no mide dificultad, mide <b>qué está en juego</b>.</div>`],
 H:["Habilitación · cuánto hay que dominar para poder ejecutar",
   `<p class="q"><b>Pregunta que responde:</b> ¿cuánta herramienta, norma y método hay que aprender antes de poder trabajar?</p>
    <p>Sale de la matriz de recursos del paso 2.2: la carga de dominio (Conoce 1 · Aplica 2 · Domina 3), cuántas categorías distintas usa y cuántos recursos exigen equipo, sistema o sede de práctica.</p>
    <div class="analog"><b>Ejemplo.</b> Gestión de servicios exige HACCP, normativa sanitaria, software de gestión, equipamiento de planta y sistema de costos: mucha habilitación. <b>Los recursos compartidos cuentan al 60 %</b>: si tres especialidades usan el mismo software, se aprende una vez y se transfiere.</div>`],
 PF:["Peso formativo · PF",
   `<p>Es la combinación ponderada de los cuatro criterios: <b>PF = 0,22·Amplitud + 0,37·Profundidad + 0,20·Criticidad + 0,21·Habilitación</b>. Va de 0 a 100 y expresa <b>cuánta formación exige</b> una especialidad comparada con las otras de la misma carrera.</p>
    <div class="analog"><b>Lo que no es.</b> No es cuán importante es la especialidad para el mercado ni cuánto conviene apostar por ella. Eso es el potencial, y entra por otro lado.</div>`],
 DIST:["Distribución · el reparto de 100 puntos",
   `<p>Es el PF de cada especialidad expresado como porcentaje del total: <b>PF(e) ÷ ΣPF × 100</b>. Por construcción <b>suma exactamente 100 %</b>, porque es un reparto: lo que una gana, otra lo pierde.</p>
    <p>Con este porcentaje se reparten los créditos obligatorios del bloque de especialidad. Tiene <b>piso de 8 %</b> —ninguna especialidad declarada puede tener formación simbólica— y <b>techo de 40 %</b> —si lo rompe, probablemente debió dividirse en dos—.</p>`],
 POT:["Potencial de mercado",
   `<p>Viene del paso 1.1: 35 % demanda + 30 % tendencia + 20 % impacto + 15 % sostenibilidad. Mide <b>cuánto conviene apostar</b> por la especialidad, no cuánta formación exige.</p>
    <div class="analog"><b>Por qué se publica al lado y no dentro del peso.</b> Si el potencial entrara en el peso, una especialidad de mucha demanda y poca complejidad se llevaría créditos que no necesita, y una compleja de nicho quedaría sin las horas que exige. Un currículo así no se sostiene ante el par evaluador ni ante el estudiante.</div>`],
 IPC:["IPC · índice de prioridad curricular",
   `<p><b>IPC = 0,70 × PF + 0,30 × Potencial.</b> Sirve solo para <b>ordenar decisiones</b> de inversión y de secuencia: a qué especialidad conviene dedicarle primero docentes, convenios y campos de práctica.</p>
    <p>No reparte créditos. Se publica siempre junto al PF, nunca en su lugar.</p>`],
 ORD:["Orden por PF y orden por IPC",
   `<p>Dos columnas contiguas a propósito. <b>Donde los dos órdenes coinciden</b>, la especialidad pide formación y el mercado la pide: no hay nada que decidir. <b>Donde difieren</b>, hay una decisión sobre la mesa.</p>
    <div class="analog"><b>Ejemplo.</b> Si una especialidad es 5.ª por peso pero 3.ª por IPC, el mercado la pide más de lo que la formación obligatoria le da: candidata natural a <b>itinerario electivo</b> o a certificación progresiva, no a más créditos obligatorios.</div>`],
 CRED:["Créditos obligatorios de la especialidad",
   `<p>Es su porcentaje de distribución aplicado a la bolsa obligatoria: <b>Créditos(e) = OBLIG × Distribución(e) ÷ 100</b>, en enteros por restos mayores para que la suma cuadre exactamente.</p>
    <p>Son los créditos que <b>todo egresado cursa</b> de esa especialidad, aparte del bloque de fundamento y de los electivos.</p>`],
 FUND:["fund(e) · la fracción de fundamento",
   `<p>De todo lo que una especialidad exige saber, <b>¿qué parte es saber compartido con otras especialidades?</b> Eso es fund(e).</p>
    <p><b>fund(e) = temas de fundamento que exige ÷ total de sus temas nucleares.</b> Un tema es «de fundamento» cuando lo exigen dos o más especialidades; si lo exige una sola, se queda en ella.</p>
    <div class="analog"><b>Ejemplo.</b> Nutrición comunitaria tiene fund(e) alto: casi todo lo que necesita —composición de alimentos, bioestadística, epidemiología— lo comparte con otras. Desarrollo de productos lo tiene bajo: buena parte de su saber (evaluación sensorial, vida útil) no lo usa nadie más.</div>
    <p class="mini">De esto sale cuánto del plan es tronco común: una carrera cuyas especialidades comparten mucho necesita un tronco grande.</p>`],
 CORTE:["¿Cuánto del plan es fundamento y cuánto es especialidad?",
   `<p>El plan tiene una bolsa de créditos específicos. Hay que partirla en dos: los cursos de <b>fundamento</b> que todos llevan, y los de <b>especialidad</b>.</p>
    <p>Esa partición <b>no se decide por política, se deriva</b> de lo que las especialidades exigen: se promedia el fund(e) de cada una, pesándolo por cuánto pesa la especialidad en el plan. Una especialidad que se lleva el 30 % del plan pesa 30 % en la decisión del tronco; una del 8 %, mucho menos.</p>
    <div class="analog"><b>Analogía.</b> Si seis cocineros comparten el 40 % de sus ingredientes, la despensa común será del 40 %: no porque alguien lo decida, sino porque eso es lo que comparten. La banda corporativa solo avisa si el resultado es implausible.</div>`],
 PESOPLAN:["Peso de la especialidad en el plan",
   `<p class="q"><b>Qué es:</b> el porcentaje de la formación de especialidad que le toca a esta especialidad, según cuánta formación exige comparada con las demás.</p>
    <p>Es la columna <b>Distribución</b> del peso formativo, la misma con que se reparten los créditos obligatorios. Todas suman 100 %.</p>
    <div class="analog"><b>Para qué se usa aquí.</b> Para que la especialidad que se lleva más plan también mande más en la decisión del tronco común. Si una especialidad ocupa el 30 % del plan y comparte poco con las demás, empuja el tronco hacia abajo con fuerza; si la que comparte poco ocupa solo el 8 %, casi no lo mueve.</div>`],
 APORTE:["Cuánto aporta al tronco común",
   `<p class="q"><b>Qué es:</b> peso en el plan × saber compartido. Es el trozo del tronco que esta especialidad justifica.</p>
    <div class="analog"><b>Ejemplo.</b> Nutrición clínica y pediátrica pesa 30 % del plan y comparte el 35 % de su saber: aporta 10,5 puntos. Nutrición deportiva pesa 10,5 % y comparte 35 %: aporta 3,7. Mismo porcentaje de saber compartido, pero una pesa tres veces más en el plan y por eso manda tres veces más.</div>
    <p>La suma de todos los aportes es el <b>tamaño del tronco común</b>: el porcentaje de los créditos específicos que se dedica a fundamento.</p>`],
 BANDA:["La banda corporativa · para qué sirve",
   `<p class="q"><b>Qué es:</b> el rango de tronco común que la universidad considera razonable para cualquier carrera, fijado por política institucional. Aquí es 30 % a 45 %.</p>
    <p><b>No decide: vigila.</b> El tamaño del tronco lo decide lo que las especialidades comparten. La banda solo avisa cuando el resultado es implausible y hay que mirar dos veces.</p>
    <div class="si"><b>Dentro de banda.</b> El paso continúa sin más trámite. Es lo normal: una carrera con especialidades parientes entre sí cae naturalmente ahí.</div>
    <div class="ko"><b>Fuera de banda.</b> El paso se detiene y ofrece dos salidas, nunca el ajuste a mano: subir el <b>umbral de compartición</b> del paso 2.4 y volver a correr la derivación —un tronco inflado casi siempre viene de un umbral demasiado bajo—, o <b>declarar la excepción</b> con su evidencia ante la Dirección.</div>
    <div class="analog"><b>Cómo leerla.</b> Por debajo del 30 %, la carrera se parece a seis carreras distintas pegadas: el egresado no tendría base común. Por encima del 45 %, casi todo es tronco y las especialidades se quedan sin horas para lo suyo: el título diría mucho y el egresado sabría hacer poco.</div>`],
 PD:["PD · peso de la dimensión",
   `<p class="q"><b>Qué es:</b> cuánto reclaman las especialidades a esta dimensión, pesando a cada una por lo que pesa en el plan.</p>
    <p>Para cada especialidad se mira qué parte de su fundamento cae en esta dimensión, y se multiplica por su peso en el plan. La suma es el PD. Llevado a porcentaje da la <b>distribución</b>, y esa distribución reparte los créditos del bloque de fundamento.</p>
    <div class="analog"><b>Ejemplo.</b> Todas las especialidades exigen composición y análisis de alimentos, así que «Ciencia de los alimentos» acumula PD alto y se lleva más créditos. «Evaluación y medición» la exigen cuatro, y de esas cuatro no todas le dedican la misma parte de su fundamento: acumula menos.</div>
    <p class="mini">Cotas: piso 4 créditos y techo 35 % del bloque. Una dimensión bajo el piso <b>no se sube: se disuelve</b>, porque una dimensión sin masa crítica no es una dimensión.</p>`],
 MAPA:["Cómo se lee el mapa",
   `<p class="q"><b>Dos preguntas distintas, un solo gráfico:</b> hacia la derecha, cuánta formación exige la especialidad; hacia arriba, cuánto la pide el mercado.</p>
    <div class="si"><b>Arriba a la derecha · núcleo de la carrera.</b> Exige mucha formación y el mercado la pide: cursos obligatorios y práctica extensa. Es donde va el grueso del plan.</div>
    <div class="analog"><b>Arriba a la izquierda · oportunidad para certificar.</b> El mercado la pide más de lo que su complejidad justifica en créditos obligatorios. Se atiende con <b>itinerario electivo</b> o certificación corta, no con más obligatorios.</div>
    <div class="nv"><b>Abajo a la derecha · formación costosa de baja demanda.</b> Cuesta mucho formar y el mercado la pide poco. Se mantiene lo indispensable y se evalúa si en realidad es un ámbito de otra especialidad.</div>
    <div class="ko"><b>Abajo a la izquierda · candidata a salir.</b> Ni exige ni se pide. Se revisa en el paso 1.1 del próximo ciclo.</div>
    <p class="mini">El eje vertical no entra en el reparto de créditos: está ahí para que la decisión se tome con los dos datos a la vista.</p>`],
 TEEX:["Temas de especialidad que lo exigen",
   `<p class="q"><b>Qué es:</b> los temas nucleares que el paso 2.3 extrajo del trabajo real de la especialidad —lo que la tarea exige saber— y que <b>invocan</b> este tema base.</p>
    <div class="analog"><b>Por qué están aquí.</b> El conocimiento se obtiene en dos eslabones: primero el saber que la tarea usa, después el saber que ese saber exige antes. Si un tema base no tiene ningún tema de especialidad a su izquierda, no se derivó de nada: o falta un tema en el 2.3, o el tema base sobra.</div>
    <div class="si"><b>Ejemplo.</b> «Punto de equilibrio» es tema de especialidad; «ecuaciones de primer grado» es su tema base. Ninguna hoja de costeo nombra las ecuaciones, pero sin ellas el punto de equilibrio no se entiende.</div>`],
 COHE:["Coherencia de derivación",
   `<p class="q"><b>Qué es:</b> el dictamen de los agentes expertos sobre si este tema base es <b>realmente</b> el saber previo de los temas de especialidad que lo invocan.</p>
    <div class="si"><b>Derivación verificada.</b> Dos o más temas de especialidad lo exigen y la relación es de fundamento, no de equivalencia.</div>
    <div class="nv"><b>Deriva de otras especialidades.</b> Esta especialidad no lo exige; lo sostienen otras y lo evalúan sus subpaneles.</div>
    <div class="ko"><b>Para revisar.</b> El enlace es débil o no existe. Se corrige en el 2.3 agregando el tema que falta, o se retira el tema base.</div>`],
 ANCL:["Nivel de anclaje",
   `<p class="q"><b>Qué es:</b> dónde se necesita ese saber. El barrido recorre <b>producto → entregable → tarea</b> y ancla cada tema al nivel <b>más fino</b> en que hace falta.</p>
    <div class="analog"><b>Por qué importa.</b> Los saberes más específicos viven a nivel de tarea. Un barrido que solo mire productos produce un tronco plausible pero incompleto, y el vacío se descubre cuando el estudiante no puede resolver el caso.</div>
    <div class="si"><b>Ejemplo.</b> El producto <i>Expediente de evaluación</i> exige fisiopatología para interpretar el conjunto; el entregable <i>Diagnóstico</i> exige criterios diagnósticos; y la tarea <i>revisar la interacción fármaco-nutriente</i> exige farmacología básica, un saber que no aparece si solo se mira el producto.</div>`],
 NMIN:["Nivel mínimo compartido",
   `<p class="q"><b>Qué es:</b> el nivel al que el <b>tronco común</b> enseña el tema: el más bajo de los que exigen las especialidades que lo comparten.</p>
    <p>Cada especialidad exige el tema a un nivel —Conoce, Aplica o Domina—, que sale del nivel de dominio de los elementos de productividad que lo originan.</p>
    <div class="analog"><b>Ejemplo.</b> Si clínica exige <i>Domina</i> en antropometría y comunitaria solo <i>Aplica</i>, el tronco enseña <b>Aplica</b>, y el salto a <i>Domina</i> se queda como tema de especialidad de clínica. Así un umbral bajo no infla el tronco por la vía de la profundidad.</div>`],
 CLAS:["Clasificación del tema",
   `<p class="q"><b>La regla:</b> un tema es <b>de fundamento</b> cuando lo exigen dos o más especialidades —el umbral de compartición—; si lo exige una sola, es <b>de especialidad</b> y se queda en ella.</p>
    <div class="si"><b>De fundamento.</b> Va a una dimensión del dominio disciplinar. Se enseña <b>una sola vez</b>, al nivel mínimo compartido, para todos los egresados.</div>
    <div class="analog"><b>De especialidad.</b> No desaparece: entra en la estructura de conocimiento de su especialidad, en el paso 3.2.</div>
    <div class="ko"><b>Huérfano.</b> Superó el umbral pero no encaja en ninguna dimensión. Va al panel; si no lo ubican, baja a tema de especialidad de la que más lo exige, y se declara.</div>`],
 COOC:["Índice de co-ocurrencia",
   `<p class="q"><b>Qué responde:</b> ¿qué temas conviene enseñar juntos? El algoritmo mide cuánto se parecen dos temas por tres señales.</p>
    <p><b>50 % especialidades en común</b> — si los exigen las mismas especialidades, sirven al mismo propósito. <b>30 % artefactos de anclaje en común</b> — si se necesitan para el mismo producto o la misma tarea, se usan juntos. <b>20 % mismo objeto de conocimiento</b>, que juzga el agente: 1,0 mismo objeto, 0,5 objetos vecinos, 0 sin relación.</p>
    <p>Con esas distancias se agrupa por enlace promedio y se corta en el <b>60 %</b>. El algoritmo propone; el panel decide.</p>
    <div class="analog"><b>Ejemplo.</b> Antropometría y bioestadística las exigen casi las mismas especialidades y se anclan a los mismos informes: co-ocurrencia alta, misma dimensión. Antropometría e inocuidad no comparten ni especialidades ni artefactos: quedan separadas.</div>`],
 OBJ:["Prueba del objeto",
   `<p class="q"><b>La pregunta:</b> ¿los temas de esta agrupación actúan sobre el <b>mismo objeto de conocimiento</b>?</p>
    <p>Es el filtro cualitativo que va después del algoritmo. Dos temas pueden co-ocurrir mucho por estadística y aun así ser cosas distintas.</p>
    <div class="si"><b>Pasa.</b> Composición de alimentos, procesamiento e inocuidad: todos actúan sobre <b>el alimento</b>.</div>
    <div class="ko"><b>No pasa.</b> Epidemiología y comunicación del cambio co-ocurren porque las exige la misma especialidad, pero una estudia poblaciones y la otra conductas: si se juntan sin más, la dimensión no tiene objeto.</div>`],
 NOMB:["Prueba de nombrabilidad",
   `<p class="q"><b>La pregunta:</b> ¿la dimensión admite un nombre que un docente reconocería como <b>algo que se enseña</b>?</p>
    <p>Si no lo admite, no es una dimensión: es una coincidencia estadística. Y el nombre <b>no puede llevar dentro el nombre de una especialidad</b>.</p>
    <div class="si"><b>Pasa.</b> «Bioquímica y metabolismo nutricional»: nombra un cuerpo de saber.</div>
    <div class="ko"><b>No pasa.</b> «Fundamentos para la nutrición clínica»: nombra a quién sirve, no qué es. Tampoco pasa un nombre que junta dos objetos, como «Salud pública, política y comportamiento» en su primera versión.</div>`],
 CERT:["¿Conviene certificarla?",
   `<p class="q"><b>Qué responde:</b> si a esta especialidad le conviene una <b>certificación progresiva</b> o un itinerario electivo, en lugar de más créditos obligatorios.</p>
    <div class="si"><b>Sí · prioritaria.</b> El mercado la pide más de lo que su complejidad justifica en el plan obligatorio. Certificarla da señal de empleabilidad sin inflar el plan: el estudiante que quiera profundizar lo hace por el itinerario.</div>
    <div class="analog"><b>Opcional.</b> Ya es núcleo de la carrera: todo egresado la lleva. La certificación solo agrega una credencial visible sobre algo que de todos modos se forma.</div>
    <div class="ko"><b>No conviene.</b> Formación costosa que el mercado pide poco, o especialidad que ni exige ni se demanda: certificarla no crea demanda que no existe.</div>
    <p class="mini">El paso 4.4 formaliza las certificaciones; aquí solo se marca la recomendación con los dos ejes a la vista.</p>`],
 HITO:["Hito de progresión · N1, N2, N3",
   `<p class="q"><b>Qué es:</b> hasta dónde lleva el curso al estudiante en esa función. No es dificultad: es <b>autonomía</b>.</p>
    <div class="analog"><b>N1 · Fundamentos.</b> Reconoce, explica y ejecuta con guía paso a paso. El estudiante sabe qué se hace y por qué, pero todavía no decide.</div>
    <div class="si"><b>N2 · Funcional.</b> Ejecuta la función completa en condiciones habituales, con supervisión disponible. Es el nivel de la mayoría de los cursos obligatorios de especialidad.</div>
    <div class="nv"><b>N3 · Dominio autónomo.</b> Resuelve casos no rutinarios sin supervisión y responde por el resultado. Es el nivel de los <b>electivos avanzados</b> y de la práctica preprofesional; un electivo con hito N1 o N2 está mal formulado.</div>
    <p class="mini">El hito se deriva del <b>EPA</b> de las funciones que el curso tributa —el nivel de confianza que el panel de expertos les puso en el 2.1— y de ahí sale también el porcentaje de práctica del curso.</p>`],
 CUOTA:["La cuota del paso 2.5",
   `<p class="q"><b>Qué es:</b> los créditos que el paso anterior asignó a esta especialidad o competencia, según cuánta formación exige comparada con las demás.</p>
    <p>Es el presupuesto con el que usted arma sus cursos. No es un techo rígido, es la referencia: si sus cursos suman mucho más, alguien más se queda sin sus créditos, porque la bolsa del plan es fija.</p>
    <div class="analog"><b>Ejemplo.</b> Si la cuota es 29 créditos y sus cursos suman 26, faltan 3: o un curso quedó corto o una función se quedó sin curso. Si suman 33, hay 4 de más y saldrán del bolsillo de otra especialidad.</div>`],
 DESV:["La desviación",
   `<p class="q"><b>Qué es:</b> la diferencia entre lo que suman los cursos elegidos y la cuota del paso 2.5. En positivo sobran créditos; en negativo faltan.</p>
    <p>La tolerancia del método es <b>±1 crédito</b> para los cursos troncales, porque un curso compartido reparte sus créditos entre varias especialidades y el redondeo nunca cuadra exacto.</p>
    <div class="ko"><b>Si se pasa de ahí</b> no se cuadra a mano: o la familia de cursos está mal armada —un curso junta funciones que no van juntas— o el peso del 2.5 hay que revisarlo. Se declara y se corrige en su origen.</div>`],
 OFERTA:["Lo que cursa el estudiante y lo que dicta la escuela",
   `<p><b>EL</b> es un requisito de egreso: todo estudiante cursa esos créditos electivos, una sola vez, y entran al total del plan una vez.</p>
    <p><b>OFERTA</b> es lo que la escuela debe dictar para que cada itinerario baste por sí solo. Con una especialidad por itinerario, el estudiante cuenta el requisito una vez y la escuela dicta un itinerario por especialidad. Esa es la cifra que la capacidad instalada tiene que sostener, y nunca suma al total del plan.</p>`]
};
const AYX = {A:["A","navy","¿Cuántas cosas distintas hace?"],P:["P","navy","¿Hasta qué nivel llega?"],C:["C","bad","¿Qué pasa si se equivoca?"],H:["H","gold","¿Cuánto hay que dominar antes?"],
 PF:["PF","navy","Cuánta formación exige, de 0 a 100"],DIST:["%","navy","El reparto de 100 puntos entre especialidades"],
 POT:["M","gold","Cuánto conviene apostar · viene del paso 1.1"],IPC:["I","gold","Para ordenar decisiones, no para repartir créditos"],
 ORD:["≠","bad","Donde los dos órdenes difieren hay algo que decidir"],CRED:["cr","ok","Los créditos que todo egresado cursa"],
 FUND:["%","ok","Qué parte de su saber comparte con las demás"],CORTE:["÷","navy","Cuánto del plan es tronco común"],
 OFERTA:["±","gold","Lo que cursa uno y lo que dicta la escuela"],PESOPLAN:["%","navy","Cuánto pesa la especialidad en el plan"],
 APORTE:["Σ","ok","Lo que cada especialidad aporta al tronco"],BANDA:["⌷","gold","Vigila el resultado; no lo decide"],
 TEEX:["TE","gold","El primer eslabón: lo que la tarea exige saber"],COHE:["⚖","navy","¿El tema base se derivó de verdad de la especialidad?"],
 PD:["PD","navy","Cuánto reclaman las especialidades de cada dimensión"],ANCL:["⌖","navy","Al nivel más fino donde el saber se necesita"],NMIN:["≥","ok","Lo que el tronco enseña a todos"],CLAS:["◫","gold","De fundamento o de especialidad"],COOC:["∞","navy","Cómo se decide qué temas van juntos"],OBJ:["◎","ok","¿Actúan sobre el mismo objeto?"],NOMB:["Aa","gold","¿Un docente lo reconocería como algo que se enseña?"],MAPA:["◳","navy","Dos preguntas distintas en un solo gráfico"],CERT:["★","ok","Cuándo conviene una certificación progresiva"],CUOTA:["=","navy","Los créditos que el 2.5 asignó a esta unidad"],HITO:["N","ok","Hasta dónde llega el curso"],DESV:["±","bad","Cuánto se pasa o falta frente a esa cuota"]};
const ayuda = k => `<button class="infob" data-ay="${k}" aria-label="Qué significa">?</button>`;
function ayOpen(k){
  const a = AY[k]; if(!a) return; const EJ=(F2.AYEJ||{})[k];
  if(EJ){ const x = AYX[k] || ["?","navy",""]; openModal(a[0], `<div class="ayhero ay-${x[1]}"><span class="ayic">${esc(x[0])}</span><div><b>${esc(a[0])}</b><small>${esc(x[2])}</small></div></div>${a[1].replace(/<div class="(analog|si|ko)"><b>(Ejemplo|Analogía|Pasa|No pasa)[^<]*<\/b>[\s\S]*?<\/div>/g,"")}<div class="analog"><b>Ejemplo.</b> ${EJ}</div>`); return; } const x = AYX[k] || ["?","navy",""];
  openModal(a[0], `<div class="ayhero ay-${x[1]}"><span class="ayic">${esc(x[0])}</span><div><b>${esc(a[0])}</b><small>${esc(x[2])}</small></div></div>${a[1]}`);
}

/* ---------- vistas 2.4 ---------- */
function viewDisc(){
  const m = S.mode.disc;
  return `<div class="sheet">${seg("disc",[["lote","Lote de especialidades"],["temas","Temas nucleares",!S.d23.temas],["dim","Dimensiones",!S.d23.dim],["comp","Competencia disciplinar",!S.d23.comp],["band","Bandeja de competencias",!S.d23.comp]])}
  ${({lote:dLote,temas:dTemas,dim:dDim,comp:dComp,band:dBand})[m]()}</div>`;
}
/* --- compuerta: mismo diseño que la cartera de la Fase 1 --- */
function dLote(){
  const ok = S.d23.lote, res = S.d23.temas;
  const f1 = n => F1.esp.find(e=>e.n===n) || {PRI:"—",ATR:"—",VIA:"—",dec:"nucleo",desc:"",puesto:3,emprende:3};
  const sc = (v,c) => `<span class="sc"><b>${v}</b><i><em style="width:${v}%;background:${c}"></em></i></span>`;
  return `<div class="eyebrow">Paso 2.4 · M1 · Compuerta de lote</div>
  <h2>Cartera de especialidades · origen Fase 1</h2><div class="rule"></div>
  <p class="note">La misma cartera de la Fase 1, con lo que la Fase 2 ya produjo. El paso 2.4 es de <b>escuela</b> y necesita el lote completo, así que antes de empezar <b>verifica tres cosas</b> en cada especialidad: que su 2.2 esté cerrado, que su matriz traiga el <b>vínculo recurso–tarea</b> —sin él un tema no se puede anclar a la tarea que lo exige— y que todas vengan del mismo método. Si algo falta, el paso se detiene aquí y dice qué especialidad lo detuvo.</p>
  <div class="tw"><table class="tbl-esp" style="min-width:920px"><thead><tr>
    <th class="num" style="width:56px">Prior.</th><th style="min-width:200px">Especialidad</th>
    <th style="width:64px">Comp.</th><th class="num" style="width:62px">Potencial</th>
    <th style="width:150px">Estado en la Fase 2</th>
    <th class="num" style="width:96px">Temas de fundamento</th><th class="num" style="width:86px">fund(e)</th>
    <th style="width:120px">Dimensiones que la sirven</th></tr></thead><tbody>
  ${ESC.map(e=>{ const g=f1(e.n), fu=fundE(e.k), ds=[...new Set(tnEsp(e.k).filter(esFund).map(t=>t[6]))];
    return `<tr class="${e.real?"p1":""}">
      <td class="num"><span class="pri">${g.PRI}</span><span class="rk">${e.k}</span></td>
      <td class="nom" style="--acc:${F1.DEC[g.dec]?F1.DEC[g.dec].col:"#1d3a6b"}"><span class="f-nom">${esc(e.n)}</span>
        <span class="f-sub">${e.fn} funciones · <b>datos reales</b></span></td>
      <td class="num">${e.c}</td><td class="num">${sc(e.pot,"#003366")}</td>
      <td><div class="bps"><span class="bp ok">2.1 cerrado</span><span class="bp ${ok||e.real?"ok":""}">${ok||e.real?"2.2 cerrado":"2.2 en curso"}</span><span class="bp ${ok||e.real?"ok":""}">vínculo</span></div></td>
      <td class="num">${res?`<b>${fu.f}</b> de ${fu.tot}`:"—"}</td>
      <td class="num">${res?sc(fu.pct,"#5B6470"):"—"}</td>
      <td>${res?`<div class="bps">${ds.sort().map(d=>`<span class="et v3" title="${esc(dimDe(d)?dimDe(d)[1]:d)}">${d}</span>`).join(" ")}</div>`:'<span class="mini">tras el barrido</span>'}</td></tr>`; }).join("")}
  </tbody></table></div>
  <div class="panelres" style="margin-top:14px"><b>Parámetros declarados antes de la ronda 1</b>
    <div class="mx" style="margin-top:6px"><span>Umbral de compartición <b>2 especialidades</b></span><span>Corte de co-ocurrencia <b>60 %</b></span><span>Banda corporativa de formación disciplinar <b>30 % – 45 %</b></span></div>
    <p class="mini" style="margin-top:6px">No se ajustan durante el proceso. Si el tronco derivado se pasa de la banda, se sube el umbral y el paso se corre completo otra vez, con acta nueva.</p></div>`;
}
/* --- temas nucleares: por tema, por especialidad o por competencia, con micro temas --- */
function tnRow(t, ctx){
  const op = S.d23.open[t[0]];
  const chips = ESC.map(x=>t[5][x.k]?`<span class="et v${t[5][x.k]===3?4:3}" title="${esc(x.n)} · ${NIV[t[5][x.k]]}">${x.k}</span>`:"").join(" ");
  const tes = teDeTN(t[0]), otras = espDe(t).filter(k=>k!==S.k), v = cohDe(t);
  return `<tr class="${op?"open":""}"><td class="tec1">${tes.length?`<div class="bps">${tes.map(x=>`<span class="et te" title="${esc(x[1])}">${x[0]}</span>`).join(" ")}</div>
        <div class="mini">${tes.map(x=>esc(x[1])).join(" · ")}</div>`:'<span class="mini">Ninguno en esta especialidad</span>'}
      ${otras.length?`<div class="mini" style="margin-top:3px;color:var(--ink-3)">También lo exigen ${otras.join(", ")}</div>`:""}</td>
    <td class="num">${t[0]}</td>
    <td class="fn"><button class="tog" aria-expanded="${!!op}" data-tn="${t[0]}"><b>${esc(t[1])}</b></button>
      <div class="mini">${t[2].length} micro temas · origen: ${esc(t[3])}</div></td>
    <td>${S.d23.coh?`<button class="cohb ${v[0]}" data-coh="${t[0]}">${v[0]==="ok"?"✓":v[0]==="rev"?"!":"→"} ${v[1]}<small>${agsDe(t).join(" · ")||"sin agente"} · I-CVI ${cohICVI(v)}</small></button>`
      :'<span class="mini">sin evaluar</span>'}</td>
    <td><span class="tag t-neutral">${t[4]}</span></td>
    <td><div class="bps">${chips}</div><div class="mini" style="margin-top:3px">${espDe(t).length} de ${ESC.length}</div></td>
    <td class="num">${esFund(t)?`${NIV[nivMin(t)]}<div class="mini">nivel ${nivMin(t)}</div>`:"—"}</td>
    <td>${t[6]==="huerf"?'<span class="tag t-rev">Huérfano</span>':esFund(t)?'<span class="tag t-ok">De fundamento</span>':'<span class="tag t-prop">De especialidad</span>'}</td>
    <td class="num">${S.d23.dim&&t[6]&&t[6]!=="huerf"?`${t[6]}<div class="mini">${t[7]}</div>`:"—"}</td></tr>
    ${op?`<tr class="tasks"><td colspan="9"><div class="tlist" style="border-left-color:var(--navy)">
      <div class="eyebrow" style="margin-bottom:4px">Micro temas · ${t[2].length}</div>
      ${t[2].map((s,i)=>`<div class="tk"><code>MT-${String(i+1).padStart(2,"0")}</code><div>${esc(s)}</div></div>`).join("")}
      <p class="mini" style="margin-top:6px">Anclaje: <b>${t[4].toLowerCase()}</b> · nivel del tronco: <b>${esFund(t)?NIV[nivMin(t)]:"—"}</b> · niveles por especialidad: ${espDe(t).map(k=>`${k} ${NIV[t[5][k]]}`).join(" · ")}</div>
    </div></td></tr>`:""}`;
}
const TNHEAD = `<thead><tr><th style="min-width:200px">Temas de especialidad que lo exigen${ayuda("TEEX")}</th><th style="width:58px">Código</th><th style="min-width:230px">Tema base (disciplinar)</th><th style="width:150px">Coherencia${ayuda("COHE")}</th><th style="width:96px">Anclaje${ayuda("ANCL")}</th><th style="width:160px">Especialidades</th><th class="num" style="width:104px">Nivel mínimo${ayuda("NMIN")}</th><th style="width:124px">Clasificación${ayuda("CLAS")}</th><th class="num" style="width:74px">Dimensión</th></tr></thead>`;
const NTM = () => Object.assign({tn:(TN[0]||[""])[0],micro:"",porque:"",cand:"",porqueCand:""}, (F2.NARR||{}).tema||{});
const NHU = () => (F2.NARR||{}).huerf || null;
const NPD = () => (F2.NARR||{}).panelD || null;
function pedirTema(){
  const q = ($("#gxTemaTxt")||{}).value || "";
  userSays(q || "Propón temas nucleares o micro temas que falten.");
  think(["Revisando los elementos de productividad sin tema asociado","Contrastando con los productos y las tareas de cada especialidad","Aplicando la prueba de identificación a cada candidato"], ()=>{
    addMsg("agent", `<p>Revisé los ${TN.length} temas contra los elementos de productividad de las ${ESC.length} especialidades. Propongo dos adiciones:</p>
      <ul><li><b>Micro tema en ${NTM().tn}</b> · «${esc(NTM().micro)}»: ${esc(NTM().porque)}</li>
      <li><b>Tema nuclear candidato</b> · «${esc(NTM().cand)}»: ${esc(NTM().porqueCand)}</li></ul>
      <p>Puede aceptarlas o editarlas usted mismo en la tabla.</p>`,
      [{label:"Aceptar las dos y recalcular", main:true, fn:()=>{
          const t=tnOf(NTM().tn); if(t && !t[2].includes(NTM().micro)) t[2].push(NTM().micro);
          refresh(); toast("Micro tema agregado a "+NTM().tn+" · el reparto del 2.5 se recalcula solo"); }},
       {label:"Solo el micro tema", keep:true, fn:()=>{ const t=tnOf(NTM().tn); if(t && !t[2].includes(NTM().micro)) t[2].push(NTM().micro); refresh(); }}]);
  });
}
function dTemas(){
  const g = S.mode.gtem;
  let cuerpo;
  if(g==="tema"){
    cuerpo = `<div class="tw"><table>${TNHEAD}<tbody>${TN.filter(esFund).map(t=>tnRow(t)).join("")}
      <tr class="group-h"><td colspan="9">De una sola especialidad o huérfanos · se quedan en su estructura de conocimiento</td></tr>
      ${TN.filter(t=>!esFund(t)).map(t=>tnRow(t)).join("")}</tbody></table></div>`;
  } else if(g==="esp"){
    cuerpo = ESC.map(e=>{ const ts=tnEsp(e.k), fu=fundE(e.k);
      const op = S.d23.gopen[e.k]!==false;
      return `<div class="capficha esp"><div class="ch" style="align-items:center"><button class="colap" data-gop="${e.k}">${op?"▾":"▸"}</button><b>${e.k}</b> <strong style="flex:1">${esc(e.n)}</strong>
        <span class="mini">${ts.length} temas · ${fu.f} de fundamento · fund(e) ${fu.pct} % · competencia ${e.c}</span></div>
        ${op?`<div class="cb"><div class="tw"><table>${TNHEAD}<tbody>${ts.map(t=>tnRow(t,e.k)).join("")}</tbody></table></div>
        <p class="mini" style="margin-top:8px">Además de estos, la especialidad declara <b>${e.prop} temas propios</b> no compartidos, que se quedan en su estructura de conocimiento (paso 3.2).</p></div>`:""}</div>`; }).join("");
  } else {
    cuerpo = COMPE.map(c=>{ const ks=c[2], ts=TN.filter(t=>ks.some(k=>t[5][k]));
      const op = S.d23.gopen[c[0]]!==false;
      return `<div class="capficha"><div class="ch" style="align-items:center"><button class="colap" data-gop="${c[0]}">${op?"▾":"▸"}</button><b>${c[0]}</b> <strong style="flex:1">${esc(c[1])}</strong>
        <span class="mini">${ks.join(" · ")} · ${ts.length} temas · ${ts.filter(esFund).length} de fundamento</span></div>
        ${op?`<div class="cb"><div class="tw"><table>${TNHEAD}<tbody>${ts.map(t=>tnRow(t,c[0])).join("")}</tbody></table></div></div>`:""}</div>`; }).join("");
  }
  return `<div class="eyebrow">Paso 2.4 · M2 y M3 · Barrer, extraer y clasificar</div>
  <h2>Banco de temas nucleares disciplinares · ${TN.length} temas base</h2><div class="rule"></div>
  <p class="note">Cada fila enfrenta las dos columnas del método: a la izquierda <b>lo que la tarea exige saber</b> (temas de especialidad del 2.3) y a la derecha <b>lo que hay que saber antes</b> (tema base). Leerlas juntas es lo que permite decir si el tema base <b>realmente se deriva</b> de la especialidad o se coló por otra vía.</p>
  <div class="cohbar ${S.d23.coh?"done":""}">
    <span class="ci">${S.d23.coh?"✓":"⚖"}</span>
    <div><b>${S.d23.coh?`Derivación evaluada por ${S.d23.ag.length} agentes · ${TN.filter(t=>cohDe(t)[0]==="ok").length} verificados · ${TN.filter(t=>cohDe(t)[0]==="rev").length} para revisar`:"La coherencia de la derivación no ha sido evaluada"}</b>
      <small>${S.d23.coh?"Clic en la celda de coherencia de cualquier fila para leer el dictamen del agente.":"Asigne uno o más agentes expertos: cada uno compara el tema base con los temas de especialidad que lo exigen y dictamina si es un saber previo o si en realidad es el saber de la tarea."}</small></div>
    <button class="btn sm ${S.d23.coh?"":"primary"}" id="cohAsig">${S.d23.coh?"Reasignar agentes y reevaluar":"Asignar agentes evaluadores"}</button></div>
  <div class="toolbar"><div class="stat"><span>Agrupar por</span></div>${seg("gtem",[["tema","Tema nuclear"],["esp","Especialidad"],["comp","Competencia"]])}<div class="grow"></div>
    <button class="btn sm" id="tnAll">${Object.keys(S.d23.open).length?"Cerrar micro temas":"Abrir micro temas"}</button></div>
  ${cuerpo}
  <div class="gnx" style="margin-top:16px"><span class="gi">G</span><div><b>¿Falta algún saber? Pídaselo a Génesys</b>
    <textarea class="ed" id="gxTemaTxt" rows="2" placeholder="Ej.: revisa si falta algún saber para una de las especialidades"></textarea>
    <div class="edrow"><button class="btn sm primary" id="gxTema">Revisar y proponer</button></div></div></div>`;
}
/* --- dimensiones --- */
function dimCard(d, acciones){
  const ts=tnDe(d[0]), es=[...new Set(ts.flatMap(espDe))].sort(), op=S.d23.dopen[d[0]]!==false;
  return `<div class="capficha"><div class="ch" style="align-items:center">
      <b>${d[0]}</b> <strong style="flex:1">${esc(d[4]||d[1])}</strong>
      <span class="mini">${ts.length} temas · ${ts.reduce((a,t)=>a+t[2].length,0)} micro temas · ${es.length} especialidades</span>
      ${acciones||""}</div>
    <div class="cb">
      <div class="ident"><div><span class="il">Alias</span><b>${esc(d[4]||d[1])}</b></div>
        <div><span class="il">Título</span><b>${esc(d[1])}</b></div>
        <div class="full"><span class="il">Definición</span><p>${esc(d[5]||"")}</p></div></div>
      <div class="mini" style="margin:8px 0 6px">Sirve a: <span class="bps" style="display:inline-flex">${es.map(k=>`<span class="et v3" title="${esc(ESC.find(e=>e.k===k).n)}">${k}</span>`).join(" ")}</span></div>
      <button class="tog" aria-expanded="${op}" data-dim="${d[0]}">Temas nucleares de la dimensión (${ts.length})</button>
      ${op?`<div class="tlist" style="border-left-color:var(--navy);margin-top:6px">${ts.map(t=>{ const to=S.d23.open[t[0]];
        return `<div class="tk"><code>${t[0]}</code><div><button class="tog" aria-expanded="${!!to}" data-tn="${t[0]}"><b>${esc(t[1])}</b></button>
          <span class="tag ${t[7]==="principal"?"t-ok":"t-neutral"}">${t[7]}</span>
          <small>${t[2].length} micro temas · nivel del tronco ${NIV[nivMin(t)]} · lo exigen ${espDe(t).join(", ")}</small>
          ${to?`<ol class="tlist2" style="margin-top:4px">${t[2].map(s=>`<li>${esc(s)}</li>`).join("")}</ol>`:""}</div></div>`; }).join("")}</div>`:""}
      <div class="prodbox" style="margin-top:10px"><b>Producto de dominio</b> · operación cognitiva: <b>${d[3]}</b><p>${d[2]}</p></div>
    </div></div>`;
}
function dDim(){
  const selN = S.d23.sel.length;
  return `<div class="eyebrow">Paso 2.4 · M4 y M5 · Agrupar y formular</div>
  <h2>Dimensiones del dominio disciplinar · ${S.d23.DIM.length}</h2><div class="rule"></div>
  <p class="note">Agrupación por <b>índice de co-ocurrencia</b> (50 % especialidades en común · 30 % artefactos de anclaje · 20 % mismo objeto), enlace promedio y corte del 60 %. El algoritmo propone; usted decide: marque dos o más dimensiones e <b>intégrelas</b>.</p>
  <div class="toolbar"><div class="stat"><span>Seleccionadas <b>${selN}</b></span></div><div class="grow"></div>
    <button class="btn sm ${selN>=2?"primary":""}" id="dimMerge" ${selN>=2?"":"disabled"}>Integrar dimensiones</button>
    <button class="btn sm" id="dimClear" ${selN?"":"disabled"}>Quitar selección</button></div>
  ${S.d23.DIM.map(d=>dimCard(d, `<label class="vcheck"><input type="checkbox" data-dsel="${d[0]}" ${S.d23.sel.includes(d[0])?"checked":""}> integrar</label>`)).join("")}
  ${NHU()?`<div class="panelres"><b>Tema huérfano</b>
    <p class="mini" style="margin-top:4px">${NHU().tn} <i>${esc(NHU().nombre)}</i> superó el umbral (${NHU().esp.join(" y ")}) pero no pasó la prueba del objeto en ninguna dimensión. ${S.d23.huerf==="baja"?`Se <b>bajó a tema de especialidad</b> de ${esc((ESC.find(e=>e.k===NHU().baja)||{n:NHU().baja}).n)}, y queda declarado.`:'Pendiente de decisión del panel.'}</p></div>`:""}`;
}
/* --- competencia disciplinar: mover dimensiones entre competencias --- */
function dComp(){
  const libres = S.d23.DIM.filter(d=>!cdDe(d[0]));
  return `<div class="eyebrow">Paso 2.4 · M5 y M7 · Competencias de dominio disciplinar</div>
  <h2>Competencia disciplinar y sus dimensiones</h2><div class="rule"></div>
  <p class="note">Las competencias de contenido <b>las define el paso 1.2</b>: son consecuencia de las especialidades, así que este paso las crea y emite la <b>adenda al perfil de egreso</b>. Puede <b>mover una dimensión a otra competencia</b> y desplegar sus temas nucleares para validarla. Entre 2 y 5 dimensiones por competencia.</p>
  ${S.d23.CD.map(c=>{ const op = S.d23.copen[c[0]]!==false; return `<div class="ficha-doc cdoc" style="margin-bottom:18px"><div class="ficha-band" style="padding:16px 20px">
      <div style="display:flex;align-items:center;gap:12px"><button class="colap" data-cop="${c[0]}" style="background:rgba(255,255,255,.18);border-color:rgba(255,255,255,.35);color:#fff">${op?"▾":"▸"}</button><div style="flex:1">
      <div class="inst">Competencia de dominio disciplinar · nivel 1</div>
      <h2 style="font-size:21px">${c[0]} · ${esc(c[4]||c[1])}</h2></div></div>
      <div class="meta"><span><b>Dimensiones</b> ${c[3].length}</span><span><b>Temas</b> ${c[3].reduce((a,k)=>a+tnDe(k).length,0)}</span><span><b>Estado</b> ${S.d23.saved?"ratificada":"por ratificar"}</span></div></div>
    ${op?`<div class="ficha-body" style="padding:16px 20px 20px">
      <div class="grid2" style="margin-bottom:10px">
        <div class="kv"><div class="eyebrow">Alias</div><p style="font-size:13px"><b>${esc(c[4]||c[1])}</b></p></div>
        <div class="kv"><div class="eyebrow">Título representativo</div><p style="font-size:13px"><b>${esc(c[1])}</b></p></div></div>
      <div class="concept"><div class="lb">Definición de la competencia</div><p>${c[2].join(" ")}.</p></div>
      <details class="cuatro"><summary>Ver los cuatro elementos de la definición</summary>
        <div class="grid2" style="margin-top:8px">
        ${[["Verbo de acción",c[2][0]],["Objeto o ámbito",c[2][1]],["Condiciones o contexto",c[2][2]],["Propósito o finalidad",c[2][3]]].map(x=>`<div class="kv"><div class="eyebrow">${x[0]}</div><p style="font-size:12.5px">${esc(x[1])}</p></div>`).join("")}
        </div></details>
      <div class="dimh"><span class="dn">${c[3].length}</span><div><b>Dimensiones que agrupa</b><small>Cada dimensión es a la competencia de contenido lo que la capacidad es a la de habilidad</small></div>
        ${c[3].length<2?'<span class="tag t-rev">mínimo 2</span>':c[3].length>5?'<span class="tag t-rev">máximo 5</span>':""}</div>
      <div class="dimc">${c[3].map(k=>{ const d=dimDe(k); return dimCard(d, `<select class="dec" data-move="${k}" title="Mover a otra competencia">${S.d23.CD.map(x=>`<option value="${x[0]}" ${x[0]===c[0]?"selected":""}>${x[0]}</option>`).join("")}<option value="new">Nueva competencia…</option></select>`); }).join("")}</div>
    </div>`:""}</div>`; }).join("")}
  ${libres.length?`<div class="panelres"><b>Dimensiones sin competencia</b><div class="mini">${libres.map(d=>d[0]).join(", ")} · asígnelas antes de validar.</div></div>`:""}
  <h3>Panel de expertos · objeto DIMENSIONES · ronda ${S.d23.ronda}</h3>
  <div class="tw"><table><thead><tr><th>Dimensión</th><th class="num">I-CVI</th><th class="num">Co-ocurrencia${ayuda("COOC")}</th><th>Prueba del objeto${ayuda("OBJ")}</th><th>Nombrabilidad${ayuda("NOMB")}</th><th>Resultado</th></tr></thead><tbody>
  ${S.d23.DIM.map(d=>{ const p=PANELD[d[0]]||["1,00","0,90"], obs=NPD()&&d[0]===NPD().dim, baja=obs&&S.d23.ronda===1;
    return `<tr><td class="fn"><b>${d[0]}</b> ${esc(d[1])}</td><td class="num">${baja?NPD().icvi1:(obs?NPD().icvi2:p[0])}</td><td class="num">${p[1]}</td>
      <td><span class="tag t-ok">Conforme</span></td><td><span class="tag ${baja?"t-rev":"t-ok"}">${baja?"Renombrar":"Conforme"}</span></td>
      <td>${baja?'<span class="tag t-prop">Ronda 2</span>':'<span class="tag t-ok">Aprobada</span>'}</td></tr>`; }).join("")}
  </tbody></table></div>
  <h3 style="margin-top:18px">Fracción de fundamento · lo que consume el paso 2.5</h3>
  <p class="note"><b>fund(e)</b> = temas de fundamento que exige la especialidad ÷ total de sus temas nucleares (enumerados + propios). Con ese número el 2.5 deriva el punto de corte.</p>
  <div class="tw"><table><thead><tr><th style="width:46px">Cód.</th><th>Especialidad</th><th class="num" style="width:120px">Temas</th><th class="num" style="width:170px">fund(e)</th></tr></thead><tbody>
  ${ESC.map(e=>{ const f=fundE(e.k); return `<tr><td class="num">${e.k}</td><td class="fn"><b>${esc(e.n)}</b></td>
    <td class="num">${f.f} de ${f.tot}</td>
    <td class="num"><span class="sc" style="min-width:120px"><b>${f.pct} %</b><i style="width:110px"><em style="width:${f.pct}%;background:var(--navy)"></em></i></span></td></tr>`; }).join("")}
  </tbody></table></div>
  <div class="panelres" style="margin-top:12px"><b>Adenda al perfil de egreso</b>
    <p class="mini" style="margin-top:4px">El paso 1.4 cerró el perfil profesional. Este paso añade ${S.d23.CD.length} competencias de dominio disciplinar; el 3.1 consolida el perfil completo. ${S.d23.saved?'<b>Ratificada por la Dirección</b> y guardada.':'Requiere confirmación de la Escuela y <b>ratificación de la Dirección</b>.'}</p></div>`;
}
/* --- bandeja de competencias --- */
function pesoComp(cod){
  const c24 = (S.d24 && (S.d24.corte||S.d24.saved)) ? calc24() : null;
  if(S.d23.CD.some(x=>x[0]===cod)){ if(!c24) return null; const c=S.d23.CD.find(x=>x[0]===cod); if(!c) return null;
    const cr=c[3].reduce((a,k)=>a+(c24.dim[k]||0),0); return {cr, pct:cr/c24.FD*100, plan:cr/S.d24.ESPEC*100, lab:"del bloque de fundamento"}; }
  const es = ESC.filter(e=>e.c===cod);
  if(!c24) return {pct:es.reduce((a,e)=>a+distE(e.k),0), lab:"del peso formativo"};
  const cr = es.reduce((a,e)=>a+(c24.esp[e.k]||0),0);
  return {cr, pct:es.reduce((a,e)=>a+distE(e.k),0), plan:cr/S.d24.ESPEC*100, lab:"del bloque de especialidad"};
}
const wbar = p => p ? `<span class="cw"><b>${p.pct.toFixed(1)} %</b><i><em style="width:${Math.min(100,p.pct*2)}%"></em></i>${p.cr!==undefined?`<span class="mini">${p.cr} créditos${p.plan!==undefined?" · "+p.plan.toFixed(1)+" % del plan":""}</span>`:""}</span>` : '<span class="mini">tras el paso 2.5</span>';
function dBand(){
  if(S.d24 && S.d24.saved) calc24();
  const cap = Object.fromEntries(COMPE.map(c=>[c[0], ((F2.ARQ[c[0]]||{}).caps||[]).map(x=>[x[0],x[2]||x[1]])]));
  const hab = [...COMPE].sort((a,b)=>(pesoComp(b[0])||{pct:0}).pct-(pesoComp(a[0])||{pct:0}).pct).map(c=>{
    const es=ESC.filter(e=>e.c===c[0]), vd=es.every(e=>(e.k===S.k?S.c31:((S.por[e.k]||{}).c31||{})).saved), pr=es.some(e=>(e.k===S.k?S.saved:((S.por[e.k]||{}).saved||{})).p21);
    return {cod:c[0], nom:c[1], alias:c[1], p:pesoComp(c[0]),
      est: vd ? ["Validada v1.2","t-ok"] : pr ? ["En trabajo","t-prop"] : ["Pendiente de su 2.1","t-neutral"],
      rel: es.map(e=>[e.k,e.n]), sub: (cap[c[0]]||[]).map(x=>x.join(" ")),
      def: `Competencia de habilidad que agrupa ${es.length} ${es.length===1?"especialidad":"especialidades"} con el mismo proceso profesional. Sus ${(cap[c[0]]||[]).length} capacidades son los tramos de ese proceso, cada uno con evidencia propia.`}; });
  const cont = [...S.d23.CD].sort((a,b)=>(pesoComp(b[0])||{pct:0}).pct-(pesoComp(a[0])||{pct:0}).pct).map(c=>({
      cod:c[0], nom:c[4]||c[1], alias:c[1], p:pesoComp(c[0]),
      est: S.d23.saved?["Ratificada","t-ok"]:["Por ratificar","t-prop"],
      rel: c[3].map(k=>[k, dimDe(k)?dimDe(k)[1]:k]), sub: c[3].map(k=>`${k} ${dimDe(k)?dimDe(k)[4]||dimDe(k)[1]:k}`),
      def: c[5]||c[2].join(" ")+"." }));
  const fila = (f,tipo) => { const op=S.d23.bopen&&S.d23.bopen[f.cod];
    return `<tr class="${tipo}"><td class="fn"><button class="tog" aria-expanded="${!!op}" data-bop="${f.cod}"><b>${f.cod} · ${esc(f.nom)}</b></button>
      <div class="mini">${tipo==="hb"?`${f.rel.length} especialidades · ${f.sub.length} capacidades`:`${f.rel.length} dimensiones · ${f.rel.reduce((a,r)=>a+tnDe(r[0]).length,0)} temas nucleares`}</div></td>
      <td class="num">${f.p?`<span class="sc" style="min-width:96px"><b>${f.p.pct.toFixed(1)} %</b><i style="width:86px"><em style="width:${Math.min(100,f.p.pct*1.8)}%;background:${tipo==="hb"?"var(--gold)":"var(--navy)"}"></em></i>${f.p.cr!==undefined?`<span class="mini">${f.p.cr} créditos</span>`:""}</span>`:'<span class="mini">tras el 2.5</span>'}</td>
      <td><span class="tag ${f.est[1]}">${f.est[0]}</span></td>
      <td><div class="bps">${f.rel.map(r=>`<span class="et ${tipo==="hb"?"v2":"v3"}" title="${esc(r[1])}">${r[0]}</span>`).join(" ")}</div>
        <div class="mini" style="margin-top:3px">${f.rel.map(r=>esc(r[1])).join(" · ")}</div></td></tr>
      ${op?`<tr class="tasks"><td colspan="4"><div class="tlist" style="border-left-color:${tipo==="hb"?"var(--gold)":"var(--navy)"}">
        <div class="eyebrow">Definición</div><p style="margin:4px 0 10px;font-size:13px;color:var(--ink);line-height:1.6">${esc(f.def)}</p>
        <div class="eyebrow">${tipo==="hb"?"Capacidades":"Dimensiones"}</div>
        <div class="bps" style="margin-top:4px">${f.sub.map(s=>`<span class="bp">${esc(s)}</span>`).join("")}</div>
      </div></td></tr>`:""}`; };
  const HEAD = `<thead><tr><th style="min-width:250px">Competencia</th><th class="num" style="width:150px">Peso en el plan</th><th style="width:130px">Estado</th><th style="min-width:200px">${""}</th></tr></thead>`;
  const listo = S.d23.saved && S.d24.saved;
  return `<div class="eyebrow">Bandeja de la escuela · ${esc(F2.meta.nombre)}</div>
  <h2>Competencias de la Carrera Profesional · ${hab.length + cont.length}</h2><div class="rule"></div>
  <div class="bstat ${listo?"ok":""}">
    <span class="bi">${listo?"✓":"›"}</span>
    <div><b>${listo?"El perfil de la carrera queda completo":"El perfil se completa a medida que avanza la Fase 2"}</b>
      <small>${hab.length} competencias de especialidad definidas en la Fase 1 · ${cont.length} de dominio disciplinar ${S.d23.saved?"derivadas y ratificadas":"en derivación"} en el paso 2.4${S.d24.saved?` · créditos repartidos en el 2.5`:""}</small></div>
  </div>
  <div class="bandg hab"><h3><span class="bt">Bloque 1</span> Competencias de especialidad · de habilidad</h3>
    <p class="bsub">Se definen en el paso 1.2 de la Fase 1 a partir del mercado. Agrupan especialidades; sus partes son <b>capacidades</b>.</p>
    <div class="tw"><table class="bnd">${HEAD.replace('${""}',"Especialidades que agrupa")}<tbody>${hab.map(f=>fila(f,"hb")).join("")}</tbody></table></div></div>
  <div class="bandg disc"><h3><span class="bt">Bloque 2</span> Competencias de dominio disciplinar · de contenido</h3>
    <p class="bsub">Las deriva el paso 2.4 desde lo que las especialidades comparten, y entran al perfil por adenda ratificada por la Dirección. Sus partes son <b>dimensiones</b>.</p>
    <div class="tw"><table class="bnd">${HEAD.replace('${""}',"Dimensiones que agrupa")}<tbody>${cont.map(f=>fila(f,"ct")).join("")}</tbody></table></div></div>
  <p class="note">Clic en el nombre de una competencia para ver su definición y sus partes. El paso 3.1 consolida el perfil de egreso con los dos bloques.</p>`;
}
function gen23(){
  userSays("Consolida el lote y abre la derivación disciplinar.");
  think([`Verificando el paso 2.2 cerrado en las ${ESC.length} especialidades`,"Verificando el vínculo recurso–tarea en cada matriz","Comprobando la comparabilidad de método","Declarando umbral de compartición y corte de co-ocurrencia"], ()=>{
    S.bulk.fn = true; S.bulk.rec = true; S.d23.lote = true; S.step = 8; S.avail.add("disc"); S.mode.disc="lote"; setTab("disc");
    addMsg("agent", `<p>Compuerta abierta: las <b>${ESC.length} especialidades</b> de la cartera tienen el 2.2 cerrado y el vínculo recurso–tarea completo.</p><p>Declaro antes de la ronda 1: umbral de compartición <b>2</b>, corte de co-ocurrencia <b>60 %</b>, banda corporativa <b>30 – 45 %</b>.</p>${docCard("Derivación disciplinar","Compuerta de lote · la cartera en el paso 2.4","disc","lote")}`,
      [{label:"Derivar los temas base (TB)", main:true, fn:temas23}]);
    refresh();
  });
}
function temas23(){
  userSays("Genera los temas nucleares desde los recursos de productividad.");
  think(["Barrido nivel producto sobre las matrices de productos","Barrido nivel entregable","Barrido nivel tarea con el vínculo recurso–tarea","Formulando cada tema como saber, no como herramienta","Prueba de identificación tema por tema","Nivel por especialidad y nivel mínimo compartido"], ()=>{
    S.d23.temas = true; S.step = 9; S.mode.disc="temas"; setTab("disc");
    const f = TN.filter(esFund).length;
    addMsg("agent", `<p>Extraje <b>${TN.length} temas nucleares</b> con <b>${TN.reduce((a,t)=>a+t[2].length,0)} micro temas</b>. Con el umbral declarado: <b>${f} de fundamento</b> y <b>${TN.length-f} de especialidad o huérfanos</b>.</p><p>Puede verlos agrupados por <b>tema</b>, por <b>especialidad</b> o por <b>competencia</b>, y abrir cada uno para revisar sus micro temas.</p>${docCard("Banco de temas nucleares",`${TN.length} temas · ${TN.reduce((a,t)=>a+t[2].length,0)} micro temas`,"disc","temas")}`,
      [{label:"Agrupar en dimensiones", main:true, fn:dim23},
       {label:"Ver por especialidad", keep:true, fn:()=>{ S.mode.gtem="esp"; S.mode.disc="temas"; setTab("disc"); }}]);
    refresh();
  });
}
function dim23(){
  userSays("Agrupa los temas de fundamento en dimensiones.");
  think(["Matriz de co-ocurrencia entre temas de fundamento","Jaccard de especialidades y de artefactos de anclaje","Agrupamiento jerárquico por enlace promedio · corte 60 %","Prueba del objeto y prueba de nombrabilidad","Formulando el producto de dominio de cada dimensión"], ()=>{
    S.d23.dim = true; S.d23.dopen={}; S.d23.DIM.forEach(d=>S.d23.dopen[d[0]]=true); S.step = 10; S.mode.disc="dim"; setTab("disc");
    addMsg("agent", `<p>Propongo <b>${S.d23.DIM.length} dimensiones</b>, cada una con su tema principal, sus temas de apoyo y su <b>producto de dominio</b>. Puede abrir los temas de cada una e <b>integrar dos dimensiones</b> si considera que comparten objeto.</p>${NHU()?`<p>Queda <b>un tema huérfano</b>: ${NHU().tn} ${esc(NHU().nombre)}.</p>`:"<p>No quedan temas huérfanos.</p>"}${docCard("Dimensiones del dominio disciplinar",`${S.d23.DIM.length} dimensiones${NHU()?" · 1 huérfano":""}`,"disc","dim")}`,
      NHU() ? [{label:`Bajar ${NHU().tn} a tema de especialidad`, main:true, fn:()=>{ userSays(`Baja ${NHU().tn} a tema de especialidad.`); S.d23.huerf="baja"; refresh(); comp23(); }},
       {label:"Crear una dimensión para él", keep:true, fn:()=>toast("Regla 7: una dimensión con un solo tema y sin objeto común no pasa la prueba de existencia.")}]
      : [{label:"Formular las competencias disciplinares", main:true, fn:comp23}]);
    refresh();
  });
}
function comp23(){
  think(["Agrupando dimensiones por afinidad de propósito","Formulando con los cuatro elementos del Modelo Educativo","Redactando la adenda al perfil de egreso","Calculando fund(e) y frac_e(d)"], ()=>{
    S.d23.comp = true; S.step = 11; S.mode.disc="comp"; setTab("disc");
    addMsg("agent", `<p>Formulé <b>${S.d23.CD.length} competencias de dominio disciplinar</b> que agrupan las ${S.d23.DIM.length} dimensiones, y calculé <b>fund(e)</b> para las ${ESC.length} especialidades.</p><p>Antes de validar puede <b>mover una dimensión de una competencia a otra</b> con el selector de su cabecera, y desplegar sus temas nucleares.</p>${docCard("Competencia disciplinar",`${S.d23.CD.length} competencias · adenda al perfil`,"disc","comp")}`,
      [{label:"Validar con el panel DIMENSIONES", main:true, fn:panel23},
       {label:"Ver la bandeja de competencias", keep:true, fn:()=>{ S.mode.disc="band"; setTab("disc"); }}]);
    refresh();
  });
}
function panel23(){
  userSays("Valida las dimensiones con el panel de expertos.");
  think(["Panel Z1–Z6 con un docente por campo de saber · guardián G","Instrumento por tema y por dimensión","Ronda 1: I-CVI, co-ocurrencia, prueba del objeto y de nombrabilidad"], ()=>{
    S.d23.panel = true; S.step = 12; S.mode.disc="comp"; setTab("disc"); refresh();
    if(!NPD()){ S.d23.ronda = 1; addMsg("agent", `<p>Las ${S.d23.DIM.length} dimensiones quedan aprobadas en la ronda 1. Falta la confirmación de la Escuela y la ratificación de la Dirección.</p>`, [{label:"Guardar la derivación disciplinar", main:true, fn:save23}]); return; }
    addMsg("agent", `<p>${S.d23.DIM.length-1} dimensiones quedan aprobadas en la ronda 1. <b>${NPD().dim}</b> no pasa la prueba de nombrabilidad (I-CVI ${NPD().icvi1}): ${esc(NPD().motivo)}</p>`,
      [{label:"Correr la ronda 2 con el nombre ajustado", main:true, fn:()=>{
          userSays("Corre la ronda 2."); think([`Renombrando ${NPD().dim}`,`Ronda 2 solo sobre ${NPD().dim}`], ()=>{
            S.d23.ronda = 2; const dd=S.d23.DIM.find(x=>x[0]===NPD().dim); if(dd&&NPD().nombre2){ dd[1]=NPD().nombre2; if(NPD().alias2) dd[4]=NPD().alias2; } refresh();
            addMsg("agent", `<p>Ronda 2 cerrada: ${NPD().dim} alcanza I-CVI ${NPD().icvi2}. Las ${S.d23.DIM.length} dimensiones y las ${S.d23.CD.length} competencias quedan aprobadas. Falta la confirmación de la Escuela y la ratificación de la Dirección.</p>`,
              [{label:"Guardar la derivación disciplinar", main:true, fn:save23}]);
          });
        }},
       {label:`Aceptar ${NPD().dim} como provisional`, keep:true, fn:()=>toast("Quedaría marcada «provisional» y el 2.5 correría con corte heredado.")}]);
  });
}
function save23(){
  if(S.d23.saved) return;
  if(S.step < 12) S.step = 12;
  userSays("Guarda la derivación disciplinar.");
  think(["Registrando el banco de temas y la tabla de clasificación","Registrando las dimensiones con su producto de dominio","Registrando las competencias de contenido y la adenda al perfil","Escribiendo fund(e) y frac_e(d) para el paso 2.5"], ()=>{
    S.d23.saved = true; S.step = 13; S.mode.disc="band"; setTab("disc"); refresh();
    toast("Paso 2.4 guardado · derivación disciplinar de la escuela");
    addMsg("agent", `<p>Guardado. La <b>bandeja de competencias</b> de la escuela queda con las ${COMPE.length} competencias de especialidad y las <b>${S.d23.CD.length} de dominio disciplinar</b> ratificadas por adenda.</p><p>Sigue el <b>2.5 Pesos y créditos</b>: cuánta formación exige cada especialidad y cada dimensión, y cómo se reparten los créditos.</p>${docCard("Bandeja de competencias",`${COMPE.length} de especialidad · ${S.d23.CD.length} disciplinares`,"disc","band")}`,
      [{label:"Abrir el paso 2.5 · Pesos y créditos", main:true, fn:gen24},
       {label:"Ver la bandeja de competencias", keep:true, fn:()=>{ S.mode.disc="band"; setTab("disc"); }}]);
  });
}

/* ---------- 2.5 Pesos y créditos ---------- */
const IND = F2.IND || {};   /* dato de escuela · datos/f2-<cod>.js */
const INDR = F2.INDR || {};   /* dato de escuela · datos/f2-<cod>.js */
const AHPW = {A:.22,P:.37,C:.20,H:.21};
const AHPV = F2.AHPV || [];   /* dato de escuela · datos/f2-<cod>.js */
const P5 = Object.assign({FG:40, ESPEC:170, EL:12, CAP:44, bESPEC:[160,180], bEL:[10,16]}, F2.PLAN5||{});
S.d24 = {gen:false, ind:false, panel:false, pesos:false, corte:false, saved:false, crit:false, ESPEC:P5.ESPEC, EL:P5.EL, CAP:P5.CAP, modo:"incluido", ronda:1};
const PLAN = {elRatio:P5.EL/P5.ESPEC, total:()=>P5.FG+S.d24.ESPEC, FG:P5.FG, bESPEC:P5.bESPEC, bEL:P5.bEL, bFD:[30,45], pisoPct:8, techoPct:40, f:1.5};
const PF = k => { const i=IND[k]; return i.A*AHPW.A + i.P*AHPW.P + i.C*AHPW.C + i.H*AHPW.H; };
const sumPF = () => ESC.reduce((a,e)=>a+PF(e.k),0);
const distE = k => PF(k)/sumPF()*100;
const potN = k => { const s=ESC.reduce((a,e)=>a+e.pot,0); return ESC.find(e=>e.k===k).pot/s*100; };
const IPC = k => .70*PF(k) + .30*(ESC.find(e=>e.k===k).pot);
const ALIASE = F2.ALIASE || {};   /* dato de escuela · datos/f2-<cod>.js */
const certOf = k => { const e=ESC.find(x=>x.k===k), ds=ESC.map(x=>distE(x.k)), ps=ESC.map(x=>x.pot);
  const mx=(Math.max(...ds)+Math.min(...ds))/2, my=(Math.max(...ps)+Math.min(...ps))/2;
  const alto=distE(k)>=mx, pot=e.pot>=my;
  return !alto&&pot ? ["Sí · prioritaria","t-ok","El mercado la pide más de lo que su peso justifica en obligatorios: certificación progresiva o itinerario electivo."]
    : alto&&pot ? ["Opcional","t-prop","Ya es núcleo del plan. La certificación solo añade señal de mercado sobre lo que el egresado igual llevará."]
    : alto&&!pot ? ["No conviene","t-neutral","Formación costosa que el mercado pide poco: certificarla no añade demanda."]
    : ["No","t-neutral","Ni exige formación intensa ni el mercado la reclama."]; };
function reparto(bolsa, pares){ // [k, %] → enteros por restos mayores
  const ex = pares.map(([k,p])=>[k, bolsa*p/100]);
  const ent = ex.map(([k,v])=>[k, Math.floor(v), v-Math.floor(v)]);
  let falta = bolsa - ent.reduce((a,x)=>a+x[1],0);
  ent.sort((a,b)=>b[2]-a[2]); for(let i=0;i<falta;i++) ent[i%ent.length][1]++;
  const o={}; ent.forEach(x=>o[x[0]]=x[1]); return o;
}
const CRD = {dim:{}, esp:{}, FD:0, CE:0, OBLIG:0, fracPond:0, itin:[], OFERTA:0};
function calc24(){
  CRD.fracPond = ESC.reduce((a,e)=>a + distE(e.k)*fundE(e.k).pct/100, 0)/100;
  CRD.FD = Math.round(S.d24.ESPEC * CRD.fracPond);
  CRD.CE = S.d24.ESPEC - CRD.FD;
  CRD.OBLIG = S.d24.modo==="incluido" ? CRD.CE - S.d24.EL : CRD.CE;
  const PD = S.d23.DIM.map(d=>[d[0], ESC.reduce((a,e)=>a + distE(e.k)*fracED(e.k,d[0]), 0)]);
  const sPD = PD.reduce((a,x)=>a+x[1],0);
  CRD.dimPct = {}; CRD.PD = {}; PD.forEach(x=>{ CRD.PD[x[0]]=x[1]; CRD.dimPct[x[0]] = x[1]/sPD*100; });
  CRD.dim = reparto(CRD.FD, PD.map(x=>[x[0], x[1]/sPD*100]));
  CRD.esp = reparto(CRD.OBLIG, ESC.map(e=>[e.k, distE(e.k)]));
  CRD.piso = Math.ceil(PLAN.pisoPct/100*CRD.OBLIG); CRD.techo = Math.floor(PLAN.techoPct/100*CRD.OBLIG);
  CRD.itin = ESC.filter(e=>potN(e.k) - distE(e.k) > 0).map(e=>[e.k, potN(e.k)-distE(e.k)]);
  CRD.OFERTA = Math.min(S.d24.CAP, Math.max(Math.round(PLAN.f*S.d24.EL), CRD.itin.length*S.d24.EL));
  const sd = CRD.itin.reduce((a,x)=>a+x[1],0), extra = CRD.OFERTA - CRD.itin.length*S.d24.EL;
  CRD.oferta = {}; CRD.itin.forEach(x=>CRD.oferta[x[0]] = S.d24.EL + Math.round(extra*x[1]/sd));
  CRD.fdPct = CRD.FD/S.d24.ESPEC*100;
  return CRD;
}
/* ----- vistas 2.5 ----- */
function viewPesos(){
  calc24();
  return `<div class="sheet">${seg("pesos",[["param","Parámetros del plan"],["ind","Indicadores y panel",!S.d24.ind],["dist","Pesos y distribución",!S.d24.pesos],["corte","Fundamento vs. especialidad",!S.d24.corte],["cred","Créditos",!S.d24.corte],["comp","Créditos por competencia",!S.d24.corte]])}
  ${({param:pParam,ind:pInd,dist:pDist,corte:pCorte,cred:pCred,comp:pComp})[S.mode.pesos]()}</div>`;
}
function pParam(){
  const c = calc24(), t = PLAN.total();
  const legal=[["Formación general ≥ 35",PLAN.FG>=35,PLAN.FG],["Específicos + especialidad ≥ 165",S.d24.ESPEC>=165,S.d24.ESPEC],["Total del plan ≥ 200",t>=200,t]];
  const areas = [
    ["Formación general","Corporativa, común a toda la universidad · 14 cursos","35 – 45", PLAN.FG, PLAN.FG/t*100, "fijo", "var(--ink-3)"],
    ["Formación disciplinar","Dominio disciplinar · tronco común de la carrera","30 – 45 % de los específicos", c.FD, c.FD/t*100, "derivado del 2.4", "var(--navy)"],
    ["Formación de especialidad · obligatoria","Lo propio de cada especialidad que todo egresado cursa","55 – 70 % de los específicos", c.OBLIG, c.OBLIG/t*100, "derivado del peso", "var(--gold)"],
    ["Electivos de especialidad","Requisito de egreso · el estudiante elige su itinerario", `${PLAN.bEL[0]} – ${PLAN.bEL[1]}`, S.d24.EL, S.d24.EL/t*100, "automático", "#6b3fa0"]
  ];
  const seg2 = (v,col) => `<span style="display:block;height:10px;border-radius:5px;background:${col};width:${v}%"></span>`;
  return `<div class="eyebrow">Paso 2.5 · M1 · Reunir y auditar</div>
  <h2>Tabla de Distribución de Créditos por Área de Formación</h2><div class="rule"></div>
  <p class="note">Los rangos son corporativos: el 2.5 nunca propone fuera de ellos. La escuela fija los <b>estudios específicos</b> y el resto se acomoda solo — los electivos se mueven con el plan, dentro de su propio rango.</p>
  <div class="tw"><table><thead><tr><th style="min-width:230px">Área de formación</th><th style="width:150px">Rango corporativo</th>
    <th class="num" style="width:92px">Créditos</th><th class="num" style="width:96px">% del plan</th><th style="width:160px">Distribución</th><th style="width:120px">Cómo se fija</th></tr></thead><tbody>
  ${areas.map(a=>`<tr><td class="fn"><b>${a[0]}</b><div class="mini">${a[1]}</div></td>
    <td class="num">${a[2]}</td><td class="num"><b style="font-size:15px">${a[3]}</b></td><td class="num">${a[4].toFixed(1)} %</td>
    <td>${seg2(a[4]*2.2,a[6])}</td><td><span class="tag ${a[5]==="fijo"?"t-neutral":a[5]==="automático"?"t-prop":"t-ok"}">${a[5]}</span></td></tr>`).join("")}
  <tr class="group-h"><td>Total del plan</td><td></td><td class="num"><b>${t}</b></td><td class="num"><b>100,0 %</b></td><td colspan="2" class="mini">La oferta electiva que dicta la escuela (${c.OFERTA} créditos) no suma al plan</td></tr>
  </tbody></table></div>

  <h3 style="margin-top:20px">Lo que la escuela decide</h3>
  <div class="grid2">
    <div class="kv"><div class="eyebrow">Estudios específicos y de especialidad · ESPEC</div>
      <p><input type="range" id="inESPEC" min="${PLAN.bESPEC[0]}" max="${PLAN.bESPEC[1]}" value="${S.d24.ESPEC}" style="width:100%"> <b style="font-family:var(--mono);font-size:19px">${S.d24.ESPEC}</b> créditos</p>
      <p class="mini">Banda ${PLAN.bESPEC[0]} – ${PLAN.bESPEC[1]} · al moverlo se recalculan el tronco, los créditos de cada especialidad y los electivos</p></div>
    <div class="kv"><div class="eyebrow">Créditos electivos · EL ${S.d24.elAuto!==false?'<span class="tag t-prop">automático</span>':'<span class="tag t-neutral">manual</span>'}</div>
      <p><input type="range" id="inEL" min="${PLAN.bEL[0]}" max="${PLAN.bEL[1]}" value="${S.d24.EL}" style="width:100%"> <b style="font-family:var(--mono);font-size:19px">${S.d24.EL}</b> créditos</p>
      <p class="mini">Banda ${PLAN.bEL[0]} – ${PLAN.bEL[1]} · se ajusta solo al ${Math.round(PLAN.elRatio*1000)/10} % de los específicos; muévalo para fijarlo a mano</p></div>
    <div class="kv"><div class="eyebrow">Capacidad de oferta electiva</div><p><b style="font-family:var(--mono);font-size:19px">${S.d24.CAP}</b> créditos</p><p class="mini">Tope que la escuela puede dictar · aquí entra la capacidad instalada de la Fase 1</p></div>
    <div class="kv"><div class="eyebrow">Modo de conteo</div><p>${S.d24.modo==="incluido"?"Incluido":"Aditivo"} · OBLIG = CE ${S.d24.modo==="incluido"?"− EL":""}</p><p class="mini">Se declara por plan y nunca se infiere</p></div>
  </div>
  <h3 style="margin-top:18px">Verificación legal · C11</h3>
  <div class="tw"><table><thead><tr><th>Mínimo</th><th class="num" style="width:90px">Valor</th><th style="width:110px">Estado</th></tr></thead><tbody>
  ${legal.map(l=>`<tr><td style="color:var(--ink)">${l[0]}</td><td class="num">${l[2]}</td><td><span class="tag ${l[1]?"t-ok":"t-rev"}">${l[1]?"Cumple":"No cumple"}</span></td></tr>`).join("")}
  </tbody></table></div>
  <div class="panelres" style="margin-top:14px"><b>La regla de no contaminación</b>
    <p class="mini" style="margin-top:4px"><b>Peso formativo</b> = cuánta formación exige · <b>Potencial</b> = cuánto conviene apostar (paso 1.1) · <b>Capacidad</b> = qué puede sostener la escuela. El potencial <b>no entra</b> en el peso: solo en el IPC, en el mapa y en la apertura de itinerarios. La capacidad entra una sola vez, como tope de la oferta.</p></div>`;
}
function pInd(){
  const CR = {A:"Amplitud",P:"Profundidad",C:"Criticidad",H:"Habilitación"};
  return `<div class="eyebrow">Paso 2.5 · M2 y M3 · Indicadores y panel</div>
  <h2>Cuatro criterios · trece indicadores · ponderación AHP</h2><div class="rule"></div>
  <div class="toolbar"><div class="stat"><span>Toque el <b>?</b> de cada criterio para ver qué mide, con ejemplo.</span></div><div class="grow"></div>
    ${Object.keys(CR).map(k=>`<button class="btn sm" data-ay="${k}">${CR[k]} ?</button>`).join("")}</div>
  <p class="note">Cada indicador se calcula de su artefacto y se normaliza min-max <b>dentro de la carrera</b>. Los conteos entran con su densidad por función, para que el volumen no se confunda con la complejidad. Solo dos indicadores los califica el panel con rúbrica anclada: complejidad cognitiva (p3) y consecuencia del error (c3).</p>
  <div class="tw"><table><thead><tr><th style="width:46px">Cód.</th><th style="min-width:200px">Especialidad</th>
    ${Object.keys(CR).map(k=>`<th class="num" style="width:110px">${CR[k]}${ayuda(k)}<br><span style="font-weight:400;text-transform:none">${Math.round(AHPW[k]*100)} %</span></th>`).join("")}</tr></thead><tbody>
  ${ESC.map(e=>`<tr><td class="num">${e.k}</td><td class="fn"><b>${esc(e.n)}</b><div class="mini">${INDR[e.k].a1} · ${INDR[e.k].p1} · ${INDR[e.k].c1} · ${INDR[e.k].h1}</div></td>
    ${Object.keys(CR).map(k=>`<td class="num"><span class="sc"><b>${IND[e.k][k]}</b><i><em style="width:${IND[e.k][k]}%;background:#003366"></em></i></span></td>`).join("")}</tr>`).join("")}
  </tbody></table></div>
  <h3 style="margin-top:18px">Bloque 1 · AHP de criterios · escala de Saaty</h3>
  <div class="tw"><table><thead><tr><th>Experto</th><th class="num">Amplitud</th><th class="num">Profundidad</th><th class="num">Criticidad</th><th class="num">Habilitación</th><th class="num">CR</th><th style="width:96px">Agregado</th></tr></thead><tbody>
  ${AHPV.map(v=>`<tr><td style="color:var(--ink)">${v[0]}</td><td class="num">${v[1]}</td><td class="num">${v[2]}</td><td class="num">${v[3]}</td><td class="num">${v[4]}</td>
    <td class="num ${parseFloat(v[5].replace(",","."))<=0.10?"":"low"}">${v[5]}</td><td><span class="tag ${parseFloat(v[5].replace(",","."))<=0.10?"t-ok":"t-rev"}">${parseFloat(v[5].replace(",","."))<=0.10?"Se agrega":"Revisa"}</span></td></tr>`).join("")}
  <tr class="group-h"><td>Media geométrica · vector final</td><td class="num">0,22</td><td class="num">0,37</td><td class="num">0,20</td><td class="num">0,21</td><td class="num">0,04</td><td><span class="tag t-ok">Aceptado</span></td></tr>
  </tbody></table></div>
  <p class="note" style="margin-top:10px">Profundidad pesa más que amplitud: una especialidad con pocas funciones de alto nivel de confianza exige más formación que una con muchas funciones simples.</p>`;
}
function pDist(){
  const c = (S.d24.corte||S.d24.saved) ? calc24() : null;
  const ord = [...ESC].sort((a,b)=>PF(b.k)-PF(a.k)).map(e=>e.k);
  const ordI = [...ESC].sort((a,b)=>IPC(b.k)-IPC(a.k)).map(e=>e.k);
  const cr = S.d24.crit;
  const f1 = n => F1.esp.find(e=>e.n===n) || {PRI:"—",dec:"nucleo"};
  const sc = (v,col,w) => `<span class="sc" style="min-width:${w||54}px"><b>${v}</b><i style="width:${(w||54)-6}px"><em style="width:${Math.min(100,v*(col==="pf"?1:2.6))}%;background:${col==="pf"?"#003366":"var(--navy)"}"></em></i></span>`;
  const W=720,H=360,P0=46;
  const ds = ESC.map(e=>distE(e.k)), ps = ESC.map(e=>e.pot);
  const xa=0, xb=Math.max(...ds)*1.25, ya=Math.max(0,Math.min(...ps)-12), yb=Math.min(100,Math.max(...ps)+8);
  const x = v => P0 + (v-xa)/(xb-xa)*(W-P0-30), y = v => H-P0 - (v-ya)/(yb-ya)*(H-P0-30);
  const mx = (Math.max(...ds)+Math.min(...ds))/2, my = (Math.max(...ps)+Math.min(...ps))/2;
  const Q = {nuc:["Núcleo de la carrera","#1d7a4f","#d7f0e2","Exige mucha formación y el mercado la pide: aquí va el grueso de los créditos obligatorios y de la práctica."],
    opo:["Oportunidad para certificar","#b57d04","#fdf0cf","El mercado la pide más de lo que su complejidad justifica: se atiende con itinerario electivo o certificación corta."],
    cos:["Formación costosa de baja demanda","#2f5fa8","#dfe9fa","Cuesta formar y el mercado la pide poco: se mantiene lo indispensable y se revisa si es ámbito de otra especialidad."],
    rev:["Candidata a revisión","#8a94a6","#eef0f4","Ni exige formación intensa ni el mercado la reclama: se revisa en el paso 1.1 del próximo ciclo."]};
  const cuad = e => { const alto = distE(e.k)>=mx, pot = e.pot>=my;
    return alto&&pot ? Q.nuc : !alto&&pot ? Q.opo : alto&&!pot ? Q.cos : Q.rev; };
  return `<div class="eyebrow">Paso 2.5 · M4 · Pesos y distribución</div>
  <h2>Peso formativo · 100 puntos repartidos entre ${ESC.length} especialidades</h2><div class="rule"></div>
  <p class="note">Primero el mapa, para decidir; después la tabla, para el detalle. Toque un punto del mapa o el <b>?</b> de cada columna para ver qué significa.</p>
  <h3>Mapa peso formativo × potencial de mercado${ayuda("MAPA")}</h3>
  <p class="note">Hacia la <b>derecha</b>, cuánta formación exige. Hacia <b>arriba</b>, cuánto la pide el mercado. El sello dorado marca las que conviene certificar. Toque un punto para ver su lectura, o el nombre de un cuadrante para ver las que caen ahí.</p>
  <div style="border:1px solid var(--line);border-radius:10px;padding:10px;background:var(--surface);overflow-x:auto">
  <svg viewBox="0 0 ${W} ${H}" style="width:100%;max-width:${W}px;height:auto" role="img" aria-label="Mapa de cuadrantes">
    <rect x="${P0}" y="16" width="${x(mx)-P0}" height="${y(my)-16}" fill="${Q.opo[2]}"/>
    <rect x="${x(mx)}" y="16" width="${W-22-x(mx)}" height="${y(my)-16}" fill="${Q.nuc[2]}"/>
    <rect x="${P0}" y="${y(my)}" width="${x(mx)-P0}" height="${H-P0-y(my)}" fill="${Q.rev[2]}"/>
    <rect x="${x(mx)}" y="${y(my)}" width="${W-22-x(mx)}" height="${H-P0-y(my)}" fill="${Q.cos[2]}"/>
    <line x1="${x(mx)}" y1="16" x2="${x(mx)}" y2="${H-P0}" stroke="#fff" stroke-width="2"/>
    <line x1="${P0}" y1="${y(my)}" x2="${W-16}" y2="${y(my)}" stroke="#fff" stroke-width="2"/>
    <g data-qd="opo" style="cursor:pointer"><rect x="${P0+2}" y="20" width="168" height="16" fill="transparent"/>
      <text x="${P0+8}" y="31" font-size="10" fill="#8a5f03" font-weight="700">Oportunidad para certificar ⓘ</text></g>
    <g data-qd="nuc" style="cursor:pointer"><rect x="${W-160}" y="20" width="140" height="16" fill="transparent"/>
      <text x="${W-26}" y="31" font-size="10" fill="#14603c" font-weight="700" text-anchor="end">Núcleo de la carrera ⓘ</text></g>
    <g data-qd="rev" style="cursor:pointer"><rect x="${P0+2}" y="${H-P0-19}" width="140" height="16" fill="transparent"/>
      <text x="${P0+8}" y="${H-P0-8}" font-size="10" fill="#6b7383" font-weight="700">Candidata a revisión ⓘ</text></g>
    <g data-qd="cos" style="cursor:pointer"><rect x="${W-180}" y="${H-P0-19}" width="160" height="16" fill="transparent"/>
      <text x="${W-26}" y="${H-P0-8}" font-size="10" fill="#24487e" font-weight="700" text-anchor="end">Costosa de baja demanda ⓘ</text></g>
    <line x1="${P0}" y1="${H-P0}" x2="${W-16}" y2="${H-P0}" stroke="var(--line)"/>
    <line x1="${P0}" y1="16" x2="${P0}" y2="${H-P0}" stroke="var(--line)"/>
    <text x="${W/2}" y="${H-10}" text-anchor="middle" font-size="10" fill="var(--ink-3)">Peso formativo · distribución % →</text>
    <text x="12" y="${H/2}" font-size="10" fill="var(--ink-3)" transform="rotate(-90 12 ${H/2})" text-anchor="middle">Potencial de mercado →</text>
    ${(()=>{ const pts=ESC.map(e=>({k:e.k,e,d:distE(e.k),px:x(distE(e.k)),py:y(e.pot),c:cuad(e),cert:certOf(e.k)[0].startsWith("Sí")}));
      pts.forEach(q=>{ q.nom = ALIASE[q.k]||q.e.n; q.sub = `${q.k} · peso ${q.d.toFixed(0)} % · potencial ${q.e.pot}`;
        q.w = Math.max(q.nom.length*6.25, q.sub.length*5.25); });
      // caja de etiqueta segun posicion: der | izq | arr | aba
      const caja = (q,p) => { const gap=16, hh=27;
        if(p==="der") return {x1:q.px+gap, x2:q.px+gap+q.w, y1:q.py-11, y2:q.py+hh-11, lx:q.px+gap, ly:q.py-1, anc:"start"};
        if(p==="izq") return {x1:q.px-gap-q.w, x2:q.px-gap, y1:q.py-11, y2:q.py+hh-11, lx:q.px-gap, ly:q.py-1, anc:"end"};
        if(p==="arr") return {x1:q.px-q.w/2, x2:q.px+q.w/2, y1:q.py-(q.cert?46:32)-hh, y2:q.py-(q.cert?46:32), lx:q.px, ly:q.py-(q.cert?46:32)-13, anc:"middle"};
        return {x1:q.px-q.w/2, x2:q.px+q.w/2, y1:q.py+16, y2:q.py+16+hh, lx:q.px, ly:q.py+27, anc:"middle"}; };
      const dentro = b => b.x1>=P0+4 && b.x2<=W-10 && b.y1>=22 && b.y2<=H-P0-8;
      const choca = (b,puestas,q) => puestas.some(o=>b.x1<o.x2+8 && o.x1<b.x2+8 && b.y1<o.y2+4 && o.y1<b.y2+4)
        || pts.some(p=>p!==q && b.x1<p.px+13 && p.px-13<b.x2 && b.y1<p.py+13 && p.py-13<b.y2);
      const orden = ["der","izq","arr","aba"], puestas=[];
      [...pts].sort((a,b)=>a.py-b.py||b.px-a.px).forEach(q=>{
        let el=null;
        for(const p of orden){ const b=caja(q,p); if(dentro(b)&&!choca(b,puestas,q)){ el=b; break; } }
        if(!el){ // ultimo recurso: a la derecha o izquierda, desplazada en vertical
          const base = q.px < (P0+W)/2 ? "der" : "izq";
          for(let dy=-52; dy<=52 && !el; dy+=13){ const b=caja(q,base); b.y1+=dy; b.y2+=dy; b.ly+=dy;
            if(dentro(b)&&!choca(b,puestas,q)) el=b; }
          if(!el){ el=caja(q,base); el.y1-=26; el.y2-=26; el.ly-=26; }
        }
        q.L=el; puestas.push(el); });
      return pts.map(q=>{ const mid=(q.L.y1+q.L.y2)/2, guia = Math.abs(mid-q.py)>16 || q.L.anc==="middle";
        const ax = q.L.anc==="start" ? q.L.x1-5 : q.L.anc==="end" ? q.L.x2+5 : q.px, ay = q.L.anc==="middle" ? (q.L.y1>q.py? q.L.y1-3 : q.L.y2+3) : mid;
        return `<g class="pt" data-pt="${q.k}" style="cursor:pointer">
        ${guia?`<line x1="${q.px}" y1="${q.py}" x2="${ax.toFixed(1)}" y2="${ay.toFixed(1)}" stroke="${q.c[1]}" stroke-width="1" opacity=".4"/>`:""}
        <circle cx="${q.px}" cy="${q.py}" r="10" fill="${q.c[1]}"/><circle cx="${q.px}" cy="${q.py}" r="3.5" fill="#fff" opacity=".92"/>
        ${q.cert?`<g transform="translate(${q.px-7},${q.py-25})"><circle cx="7" cy="7" r="7.5" fill="#b57d04" stroke="#fff" stroke-width="1.2"/><path d="M4 6.5l2 2 4-4" stroke="#fff" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M4.5 12.5l2.5-1.4 2.5 1.4" stroke="#fff" stroke-width="1.3" fill="none"/><title>Conviene certificación progresiva</title></g>`:""}
        <text x="${q.L.lx.toFixed(1)}" y="${q.L.ly.toFixed(1)}" text-anchor="${q.L.anc}" font-size="11.5" font-weight="600" fill="${q.c[1]}" stroke="#fff" stroke-width="2.6" paint-order="stroke" stroke-linejoin="round">${esc(q.nom)}</text>
        <text x="${q.L.lx.toFixed(1)}" y="${(q.L.ly+13).toFixed(1)}" text-anchor="${q.L.anc}" font-size="10" fill="#5b6472" stroke="#fff" stroke-width="2.4" paint-order="stroke" stroke-linejoin="round">${q.sub}</text></g>`; }).join(""); })()}
  </svg></div>
  <h3 style="margin-top:22px">Tabla de pesos · ordenada por distribución</h3>
  <div class="tw"><table class="tbl-esp" style="min-width:${cr?1120:880}px"><thead><tr>
    <th class="num" style="width:56px">Prior.</th><th style="min-width:200px">Especialidad</th>
    ${cr?Object.entries({A:"Amplitud",P:"Profundidad",C:"Criticidad",H:"Habilitación"}).map(([k,v])=>`<th class="num" style="width:74px">${v}${ayuda(k)}</th>`).join(""):""}
    <th class="num" style="width:92px"><button class="thb" id="toggleCrit">${cr?"▾":"▸"} PF</button>${ayuda("PF")}</th>
    <th class="num" style="width:104px">Distribución${ayuda("DIST")}</th>
    <th class="num" style="width:84px">Créditos${ayuda("CRED")}</th>
    <th class="num" style="width:70px">Potencial${ayuda("POT")}</th>
    <th class="num" style="width:58px">IPC${ayuda("IPC")}</th>
    <th class="num" style="width:74px">PF / IPC${ayuda("ORD")}</th>
    <th style="width:110px">¿Certificar?${ayuda("CERT")}</th></tr></thead><tbody>
  ${[...ESC].sort((a,b)=>distE(b.k)-distE(a.k)).map(e=>{ const d=distE(e.k), oP=ord.indexOf(e.k)+1, oI=ordI.indexOf(e.k)+1, g=f1(e.n), q=cuad(e);
    return `<tr class="${e.real?"p1":""}">
      <td class="num"><span class="pri">${g.PRI}</span><span class="rk">${e.k}</span></td>
      <td class="nom" style="--acc:${q[1]}"><span class="f-nom">${esc(e.n)}</span>
        <span class="f-sub">${e.fn} funciones · competencia ${e.c} · ${esc(q[0])}</span></td>
      ${cr?["A","P","C","H"].map(k=>`<td class="num">${sc(IND[e.k][k],"pf",58)}</td>`).join(""):""}
      <td class="num">${sc(+PF(e.k).toFixed(1),"pf",70)}</td>
      <td class="num"><span class="sc" style="min-width:84px"><b>${d.toFixed(1)} %</b><i style="width:78px"><em style="width:${Math.min(100,d*2.6)}%;background:var(--navy)"></em></i></span></td>
      <td class="num">${c?`<b style="font-size:15px">${c.esp[e.k]}</b><div class="mini">de ${c.OBLIG}</div>`:'<span class="mini">tras el corte</span>'}</td>
      <td class="num">${e.pot}</td><td class="num">${IPC(e.k).toFixed(0)}</td>
      <td class="num ${oP!==oI?"low":""}">${oP} / ${oI}</td>
      <td><span class="tag ${certOf(e.k)[1]}" title="${esc(certOf(e.k)[2])}">${certOf(e.k)[0]}</span></td></tr>`; }).join("")}
    <tr class="grp-h"><td colspan="${cr?6:2}">Total · el reparto suma siempre 100</td>
      <td class="num"><b>${ESC.reduce((a,e)=>a+PF(e.k),0).toFixed(1)}</b></td>
      <td class="num"><b>${ESC.reduce((a,e)=>a+distE(e.k),0).toFixed(1)} %</b></td>
      <td class="num"><b>${c?c.OBLIG:"—"}</b></td><td colspan="4"></td></tr>
  </tbody></table></div>
  <p class="note" style="margin-top:8px">Cotas aplicadas: piso ${PLAN.pisoPct} % y techo ${PLAN.techoPct} %. La columna <b>PF / IPC</b> compara los dos órdenes: en rojo, donde difieren.</p>

</div>`;
}
function abrirCuadrante(key){
  const ds=ESC.map(x=>distE(x.k)), ps=ESC.map(x=>x.pot);
  const mx=(Math.max(...ds)+Math.min(...ds))/2, my=(Math.max(...ps)+Math.min(...ps))/2;
  const Q = {nuc:["Núcleo de la carrera","#1d7a4f","ok","Exige mucha formación y el mercado la pide.","Aquí va el grueso de los créditos obligatorios y de la práctica: es lo que define a la carrera. Certificarla es opcional, porque todo egresado la lleva de todos modos."],
    opo:["Oportunidad para certificar","#b57d04","gold","El mercado la pide más de lo que su complejidad justifica en créditos obligatorios.","Se atiende con <b>itinerario electivo</b> o <b>certificación progresiva</b>, no con más obligatorios: así se captura la demanda sin inflar el plan. El paso 4.4 la formaliza."],
    cos:["Formación costosa de baja demanda","#2f5fa8","nv","Cuesta mucho formar y el mercado la pide poco.","Se mantiene lo indispensable y se evalúa si en realidad es un <b>ámbito de otra especialidad</b> antes que una especialidad propia. El hallazgo va al paso 1.3."],
    rev:["Candidata a revisión","#6b7383","bad","Ni exige formación intensa ni el mercado la reclama.","Se revisa en el paso 1.1 del próximo ciclo: puede que haya dejado de ser una especialidad del mercado, o que su alcance esté mal definido."]}[key];
  const dentro = ESC.filter(e=>{ const alto=distE(e.k)>=mx, pot=e.pot>=my;
    return key==="nuc"?(alto&&pot):key==="opo"?(!alto&&pot):key==="cos"?(alto&&!pot):(!alto&&!pot); });
  openModal(Q[0], `<div class="ayhero ay-${Q[2]}"><span class="ayic" style="background:${Q[1]}">◳</span><div><b>${esc(Q[0])}</b><small>${esc(Q[3])}</small></div></div>
    <p>${Q[4]}</p>
    <h4 style="margin:14px 0 6px;font-size:12px;color:var(--navy)">${dentro.length} ${dentro.length===1?"especialidad en este cuadrante":"especialidades en este cuadrante"}</h4>
    ${dentro.length?dentro.sort((a,b)=>distE(b.k)-distE(a.k)).map(e=>{ const ce=certOf(e.k);
      return `<div class="lec" style="--q:${Q[1]};margin-bottom:8px"><b>${e.k} · ${esc(e.n)}${ce[0].startsWith("Sí")?' <span class="cch">certificar</span>':""}</b>
        <small>peso ${distE(e.k).toFixed(1)} % · potencial ${e.pot} · IPC ${IPC(e.k).toFixed(0)}${(S.d24.corte||S.d24.saved)?` · ${calc24().esp[e.k]} créditos`:""}</small>
        <p>${esc(ce[2])}</p></div>`; }).join(""):'<p class="mini">Ninguna especialidad cae aquí con el reparto actual.</p>'}
    <p class="mini" style="margin-top:10px">Los cortes del mapa son los <b>valores medios</b> de la cartera, no umbrales absolutos: si cambia el peso de una especialidad, otra puede cambiar de cuadrante.</p>`);
}
function pCorte(){
  const c=calc24(), dentro = c.fdPct>=PLAN.bFD[0] && c.fdPct<=PLAN.bFD[1];
  const W=520,H=64, px = v => 20 + v/60*(W-40);
  const wS=560, hS=54, fdw = c.fdPct;
  return `<div class="eyebrow">Paso 2.5 · M5 · Cuánto del plan es fundamento</div>
  <h2>¿Qué parte del plan es saber común y qué parte es especialidad?${ayuda("CORTE")}</h2><div class="rule"></div>
  <p class="note">De los <b>${S.d24.ESPEC} créditos específicos</b> del plan hay que decidir cuántos son <b>fundamento</b> —lo que todos llevan porque lo comparten— y cuántos son <b>especialidad</b>. Esa partición no se decide: <b>sale de lo que las especialidades comparten entre sí</b>.</p>
  <div class="split">
    <div class="blkc" style="background:linear-gradient(135deg,var(--navy),#0e1d38)">
      <div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8"><path d="M4 5h16v13H4z"/><path d="M4 9h16M9 9v9"/></svg></div>
      <div class="n">${c.FD}</div><div class="t">créditos de dominio disciplinar</div>
      <div class="s">El saber que <b>todos</b> los egresados llevan, sea cual sea su especialidad. ${fdw.toFixed(1)} % del bloque específico · ${S.d23.DIM.length} dimensiones.</div></div>
    <div class="blkc" style="background:linear-gradient(135deg,var(--gold),#a7780c);color:#241a02">
      <div class="ic" style="background:rgba(0,0,0,.14)"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#241a02" stroke-width="1.8"><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2.5"/></svg></div>
      <div class="n">${c.CE}</div><div class="t">créditos de especialidad</div>
      <div class="s" style="opacity:.9">Lo propio de cada especialidad: ${c.OBLIG} obligatorios y ${S.d24.EL} electivos. ${(100-fdw).toFixed(1)} % del bloque específico.</div></div>
  </div>
  <div style="border:1px solid var(--line);border-radius:10px;padding:12px 14px;background:var(--surface)">
    <svg viewBox="0 0 ${wS} 26" style="width:100%;height:auto" role="img" aria-label="Reparto del bloque específico">
      <rect x="0" y="4" width="${wS*fdw/100}" height="16" rx="8" fill="var(--navy)"/>
      <rect x="${wS*fdw/100+3}" y="4" width="${wS*(100-fdw)/100-3}" height="16" rx="8" fill="var(--gold)"/>
    </svg>
    <div class="mini" style="display:flex;justify-content:space-between;margin-top:4px"><span>Fundamento ${fdw.toFixed(1)} %</span><span>Especialidad ${(100-fdw).toFixed(1)} %</span></div>
  </div>
  <div class="panelres" style="margin-top:12px"><b>De dónde sale ese ${fdw.toFixed(0)} %</b>
    <p class="mini" style="margin-top:4px">Cada especialidad dice qué parte de su saber comparte con las demás —su <b>fund(e)</b>— y ese número se promedia <b>pesando a cada una por lo que pesa en el plan</b>: la que se lleva el 30 % del plan manda 30 % en la decisión; la del 10 %, mucho menos. El promedio da ${(c.fracPond*100).toFixed(1)} %, y ese porcentaje de los ${S.d24.ESPEC} créditos es el bloque de fundamento.</p>
    <details style="margin-top:8px"><summary class="mini" style="cursor:pointer;color:var(--navy);font-weight:600">Ver la fórmula</summary>
      <div style="font-family:var(--mono);font-size:12px;margin-top:6px;color:var(--ink-2)">FD = ESPEC × Σ<sub>e</sub> [ Distribución(e) × fund(e) ] ÷ 100 = ${S.d24.ESPEC} × ${(c.fracPond*100).toFixed(1)} % = ${c.FD}<br>CE = ESPEC − FD = ${c.CE}</div></details></div>
  <h3 style="margin-top:18px">Lo que aporta cada especialidad</h3>
  <div class="tw"><table><thead><tr><th style="width:44px">Cód.</th><th>Especialidad</th><th class="num" style="width:120px">Peso en el plan${ayuda("PESOPLAN")}</th><th class="num" style="width:130px">Saber compartido${ayuda("FUND")}</th><th class="num" style="width:130px">Aporte al tronco${ayuda("APORTE")}</th><th style="width:120px">¿Certificar?${ayuda("CERT")}</th></tr></thead><tbody>
  ${ESC.map(e=>{ const d=distE(e.k), f=fundE(e.k).pct; return `<tr><td class="num">${e.k}</td><td class="fn"><b>${esc(e.n)}</b><div class="mini">${fundE(e.k).f} temas de fundamento de ${fundE(e.k).tot}</div></td>
    <td class="num">${d.toFixed(1)} %</td>
    <td class="num"><span class="sc" style="min-width:86px"><b>${f} %</b><i style="width:76px"><em style="width:${f}%;background:var(--navy)"></em></i></span></td>
    <td class="num">${(d*f/100).toFixed(1)}</td>
    <td><span class="tag ${certOf(e.k)[1]}" title="${esc(certOf(e.k)[2])}">${certOf(e.k)[0]}</span></td></tr>`; }).join("")}
  <tr class="group-h"><td colspan="4">Promedio pesado · el tamaño del tronco común</td><td class="num">${(c.fracPond*100).toFixed(1)} %</td><td></td></tr>
  </tbody></table></div>
  <h3 style="margin-top:18px">¿Es un tamaño razonable? · banda corporativa${ayuda("BANDA")}</h3>
  <div style="border:1px solid var(--line);border-radius:8px;padding:12px;background:var(--surface)">
  <svg viewBox="0 0 ${W} ${H}" style="width:100%;max-width:${W}px;height:auto">
    <rect x="20" y="20" width="${W-40}" height="14" rx="7" fill="var(--line)"/>
    <rect x="${px(PLAN.bFD[0])}" y="20" width="${px(PLAN.bFD[1])-px(PLAN.bFD[0])}" height="14" rx="7" fill="var(--ok-soft)"/>
    <line x1="${px(c.fdPct)}" y1="12" x2="${px(c.fdPct)}" y2="42" stroke="${dentro?"var(--navy)":"var(--bad)"}" stroke-width="3"/>
    <text x="${px(c.fdPct)}" y="58" text-anchor="middle" font-size="11" fill="var(--ink)">${c.fdPct.toFixed(1)} %</text>
    <text x="${px(PLAN.bFD[0])}" y="14" text-anchor="middle" font-size="9.5" fill="var(--ink-3)">${PLAN.bFD[0]} %</text>
    <text x="${px(PLAN.bFD[1])}" y="14" text-anchor="middle" font-size="9.5" fill="var(--ink-3)">${PLAN.bFD[1]} %</text>
  </svg></div>
  <div class="panelres" style="margin-top:12px;border-left:3px solid var(--${dentro?"ok":"bad"})"><b>${dentro?"Dentro de banda · el paso continúa":"Fuera de banda · el paso se detiene"}</b>
    <p class="mini" style="margin-top:4px">${dentro?`Con ${c.fdPct.toFixed(1)} % el tronco cae en la zona que la universidad considera razonable para cualquier carrera. <b>La banda no decidió el tamaño</b> —lo decidió lo que las especialidades comparten—: solo confirmó que el resultado es plausible.`:"Dos salidas, nunca el ajuste a mano: subir el umbral de compartición del 2.4 y volver a correr la derivación, o declarar la excepción con su evidencia ante la Dirección."}</p>
    <p class="mini" style="margin-top:6px">Por debajo del 30 % la carrera se parecería a ${ESC.length} carreras pegadas, sin base común; por encima del 45 % las especialidades se quedarían sin horas para lo suyo.</p></div>`;
}
function pCred(){
  const c=calc24();
  const ver = [["C1","ESPEC y EL dentro de banda", S.d24.ESPEC>=PLAN.bESPEC[0]&&S.d24.ESPEC<=PLAN.bESPEC[1]&&S.d24.EL>=PLAN.bEL[0]&&S.d24.EL<=PLAN.bEL[1]],
   ["C2","Corte FD/CE derivado y dentro de banda", c.fdPct>=PLAN.bFD[0]&&c.fdPct<=PLAN.bFD[1]],
   ["C3","Cada reparto suma su bolsa", Object.values(c.dim).reduce((a,b)=>a+b,0)===c.FD && Object.values(c.esp).reduce((a,b)=>a+b,0)===c.OBLIG],
   ["C4","Piso de especialidad ⌈8 % × OBLIG⌉ = "+c.piso, Math.min(...Object.values(c.esp))>=c.piso],
   ["C5","Techo de especialidad ⌊40 % × OBLIG⌋ = "+c.techo, Math.max(...Object.values(c.esp))<=c.techo],
   ["C6","Piso de dimensión 4 créditos · bajo el piso se disuelve", Math.min(...Object.values(c.dim))>=4],
   ["C7","Factibilidad: OBLIG ≥ n × piso", c.OBLIG >= ESC.length*c.piso],
   ["C8","Suficiencia del itinerario: oferta(e) ≥ EL", c.itin.every(x=>c.oferta[x[0]]>=S.d24.EL)],
   ["C9","Factibilidad de oferta: OFERTA ≤ capacidad", c.OFERTA<=S.d24.CAP],
   ["C10","Sin doble conteo: EL entra una vez; OFERTA no suma al plan", true],
   ["C11","Mínimos legales: FG ≥ 35 · FD+CE ≥ 165 · Total ≥ 200", PLAN.FG>=35&&S.d24.ESPEC>=165&&PLAN.total()>=200],
   ["C12","El 2.5 entrega créditos, no cursos", true]];
  return `<div class="eyebrow">Paso 2.5 · M5 · Repartir los tres bloques</div>
  <h2>Créditos · ${PLAN.total()} del plan · ${S.d24.ESPEC} específicos</h2><div class="rule"></div>
  <div class="grid2" style="margin-bottom:14px">
    <div class="kv"><div class="eyebrow">Formación disciplinar · FD</div><p><b style="font-family:var(--mono);font-size:20px">${c.FD}</b> créditos · ${S.d23.DIM.length} dimensiones</p></div>
    <div class="kv"><div class="eyebrow">Formación de especialidad · CE</div><p><b style="font-family:var(--mono);font-size:20px">${c.CE}</b> créditos · ${c.OBLIG} obligatorios + ${S.d24.EL} electivos</p></div>
  </div>
  <div class="blkh dis"><span class="bn">1</span><div><b>Formación disciplinar · entre dimensiones</b>
    <small>El tronco común: ${c.FD} créditos repartidos entre las ${S.d23.DIM.length} dimensiones según cuánto las reclaman las especialidades</small></div></div>
  <div class="tw"><table><thead><tr><th style="width:52px">Cód.</th><th>Dimensión</th><th class="num" style="width:110px">PD${ayuda("PD")}</th><th class="num" style="width:110px">Distribución</th><th class="num" style="width:80px">Créditos</th><th style="width:150px">Especialidades que la exigen</th></tr></thead><tbody>
  ${S.d23.DIM.map(d=>{ const es=[...new Set(tnDe(d[0]).flatMap(espDe))].sort();
    return `<tr><td class="num">${d[0]}</td><td class="fn"><b>${esc(d[1])}</b><div class="mini">${tnDe(d[0]).length} temas · producto de dominio: ${d[3].toLowerCase()}</div></td>
    <td class="num">${CRD.PD[d[0]].toFixed(1)}</td><td class="num">${CRD.dimPct[d[0]].toFixed(1)} %</td>
    <td class="num"><b>${c.dim[d[0]]}</b></td><td><div class="bps">${es.map(k=>`<span class="et v3">${k}</span>`).join(" ")}</div></td></tr>`; }).join("")}
  <tr class="group-h"><td colspan="3">Total formación disciplinar</td><td class="num"><b>${Object.values(CRD.dimPct).reduce((a,b)=>a+b,0).toFixed(1)} %</b></td><td class="num"><b>${c.FD}</b></td><td></td></tr>
  </tbody></table></div>
  <p class="note" style="margin-top:8px">Cotas de la dimensión: piso <b>4 créditos</b> y techo <b>35 % de FD</b>. Una dimensión bajo el piso <b>no se sube: se disuelve</b>, y sus temas pasan a las dimensiones que los reclaman en segundo lugar.</p>
  <div class="blkh esp" style="margin-top:22px"><span class="bn">2</span><div><b>Formación de especialidad · entre especialidades</b>
    <small>El bloque obligatorio: ${c.OBLIG} créditos repartidos entre las ${ESC.length} especialidades según su peso formativo</small></div></div>
  <div class="tw"><table><thead><tr><th style="width:44px">Cód.</th><th>Especialidad</th><th class="num" style="width:96px">Distribución</th><th class="num" style="width:80px">Créditos</th><th class="num" style="width:84px">Piso / techo</th><th class="num" style="width:78px">Déficit</th><th style="width:150px">Itinerario electivo</th></tr></thead><tbody>
  ${ESC.map(e=>{ const d=distE(e.k), df=potN(e.k)-d, it=c.itin.find(x=>x[0]===e.k);
    return `<tr><td class="num">${e.k}</td><td class="fn"><b>${esc(e.n)}</b></td>
    <td class="num">${d.toFixed(1)} %</td><td class="num"><b>${c.esp[e.k]}</b></td>
    <td class="num"><span class="mini">${c.piso} / ${c.techo}</span></td>
    <td class="num ${df>0?"":"mini"}">${df>0?df.toFixed(1)+" %":"—"}</td>
    <td>${it?`<span class="tag t-ok">Abierto</span> <span class="mini">${c.oferta[e.k]} créditos de oferta</span>`:'<span class="mini">Sin déficit de cobertura</span>'}</td></tr>`; }).join("")}
  <tr class="group-h"><td colspan="2">Total obligatorio</td><td class="num"><b>${ESC.reduce((a,e)=>a+distE(e.k),0).toFixed(1)} %</b></td><td class="num"><b>${c.OBLIG}</b></td><td colspan="3"></td></tr>
  </tbody></table></div>
  <div class="blkh ele" style="margin-top:22px"><span class="bn">3</span><div><b>Oferta electiva · no se reparte, se replica</b>
    <small>${S.d24.EL} créditos de requisito para todo estudiante; la escuela dicta varios itinerarios para que cada uno baste por sí solo</small></div></div>
  <div class="grid2">
    <div class="kv"><div class="eyebrow">Requisito de egreso · EL</div><p><b style="font-family:var(--mono);font-size:20px">${S.d24.EL}</b> créditos · idéntico para todo estudiante</p><p class="mini">Entra al total del plan una sola vez</p></div>
    <div class="kv"><div class="eyebrow">Carga de oferta docente · OFERTA${ayuda("OFERTA")}</div><p><b style="font-family:var(--mono);font-size:20px">${c.OFERTA}</b> créditos · ${c.itin.length} itinerarios</p><p class="mini">Capacidad declarada ${S.d24.CAP} · nunca suma al total del plan</p></div>
  </div>
  <p class="note" style="margin-top:8px">Cada itinerario debe bastar por sí solo: un estudiante que quiere profundizar en una especialidad tiene que poder completar sus ${S.d24.EL} créditos dentro de ese itinerario. El itinerario sigue el <b>déficit de cobertura</b>, no el potencial a secas, para no premiar dos veces a la que ya se llevó el mayor peso.</p>
  <h3 style="margin-top:18px">Bloque de verificaciones · C1 a C12</h3>
  <div class="tw"><table><thead><tr><th style="width:52px">Cód.</th><th>Restricción</th><th style="width:100px">Estado</th></tr></thead><tbody>
  ${ver.map(v=>`<tr><td class="num">${v[0]}</td><td style="color:var(--ink)">${v[1]}</td><td><span class="tag ${v[2]?"t-ok":"t-rev"}">${v[2]?"Cumple":"Falla"}</span></td></tr>`).join("")}
  </tbody></table></div>
  ${ver.every(v=>v[2])?"":'<div class="panelres" style="border-left:3px solid var(--bad);margin-top:10px"><b>No se ofrece confirmar</b><p class="mini">Una verificación fallida detiene el paso: se corrige el indicador, la ponderación, el umbral del 2.4 o el valor de ESPEC, nunca el crédito a mano.</p></div>'}`;
}
function pComp(){
  const c = calc24();
  const filas = [
    ...COMPE.map(x=>{ const es=ESC.filter(e=>e.c===x[0]); return {cod:x[0], nom:x[1], tipo:"Especialidad", cls:"hb",
      cr:es.reduce((a,e)=>a+c.esp[e.k],0), det:es.map(e=>`${e.k} · ${e.n} · ${c.esp[e.k]} cr`), n:es.length, un:"especialidades"}; }),
    ...S.d23.CD.map(x=>({cod:x[0], nom:x[4]||x[1], tipo:"Disciplinar", cls:"ct",
      cr:x[3].reduce((a,k)=>a+(c.dim[k]||0),0), det:x[3].map(k=>`${k} · ${dimDe(k)[1]} · ${c.dim[k]} cr`), n:x[3].length, un:"dimensiones"}))];
  const tot = filas.reduce((a,f)=>a+f.cr,0);
  const orden = [...filas].sort((a,b)=>b.cr-a.cr);
  return `<div class="eyebrow">Paso 2.5 · M5 · Créditos por competencia</div>
  <h2>Cuánto pesa cada competencia de la carrera</h2><div class="rule"></div>
  <p class="note">La misma bolsa vista por competencia: las de <b>especialidad</b> se llevan su parte del bloque obligatorio; las <b>disciplinares</b>, su parte del bloque de dominio. Los electivos no entran: son requisito de egreso, no carga de una competencia. Clic en una fila para ver su composición.</p>
  <div class="tw"><table class="bnd"><thead><tr><th style="width:56px">Cód.</th><th style="min-width:230px">Competencia</th>
    <th style="width:120px">Tipo</th><th class="num" style="width:90px">Créditos</th><th class="num" style="width:180px">% del bloque específico</th></tr></thead><tbody>
  ${orden.map(f=>{ const op=S.d24.bopen&&S.d24.bopen[f.cod];
    return `<tr class="${f.cls}"><td class="num">${f.cod}</td>
    <td class="fn"><button class="tog" aria-expanded="${!!op}" data-pcop="${f.cod}"><b>${esc(f.nom)}</b></button><div class="mini">${f.n} ${f.un}</div></td>
    <td><span class="tag ${f.cls==="hb"?"t-prop":"t-ok"}">${f.tipo}</span></td>
    <td class="num"><b style="font-size:15px">${f.cr}</b></td>
    <td class="num"><span class="sc" style="min-width:150px"><b>${(f.cr/tot*100).toFixed(1)} %</b><i style="width:140px"><em style="width:${f.cr/tot*100*2.2}%;background:${f.cls==="hb"?"var(--gold)":"var(--navy)"}"></em></i></span></td></tr>
    ${op?`<tr class="tasks"><td colspan="5"><div class="bps" style="padding:4px 2px">${f.det.map(d=>`<span class="bp">${esc(d)}</span>`).join("")}</div></td></tr>`:""}`; }).join("")}
  <tr class="group-h"><td colspan="3">Total · dominio disciplinar ${c.FD} + especialidad obligatoria ${c.OBLIG}</td><td class="num"><b>${tot}</b></td><td class="num"><b>100,0 %</b></td></tr>
  </tbody></table></div>
  <p class="note" style="margin-top:8px">Los ${S.d24.EL} créditos electivos y los ${c.OFERTA} de oferta docente se declaran aparte, fuera de este reparto.</p>`;
}
/* ----- flujo 2.5 ----- */
function gen24(){
  userSays("Abre el paso 2.5 de pesos y créditos.");
  think(["Cargando paquetes funcionales, productos y matrices de recursos","Cargando la derivación disciplinar: fund(e) y frac_e(d)","Leyendo las bandas corporativas del plan","Verificando una sola cartera y la factibilidad de las bolsas"], ()=>{
    S.d24.gen = true; S.step = 14; S.avail.add("pesos"); S.mode.pesos="param"; setTab("pesos");
    addMsg("agent", `<p>Insumos completos. La escuela fija <b>ESPEC</b> y <b>EL</b> dentro de su banda; tomo el punto medio y lo declaro: <b>${S.d24.ESPEC}</b> y <b>${S.d24.EL}</b> créditos, modo de conteo <b>incluido</b>.</p><p>Puede moverlos en el documento: todo el reparto se recalcula.</p>${docCard("Pesos y créditos","Parámetros del plan · bandas corporativas","pesos","param")}`,
      [{label:"Calcular los indicadores", main:true, fn:ind24}]);
    refresh();
  });
}
function ind24(){
  userSays("Calcula los indicadores de los cuatro criterios.");
  think(["Amplitud: funciones núcleo, tareas, entregables y ámbitos","Profundidad: nivel de confianza EPA, tareas por función e integración del producto","Criticidad: mediana del e-Delphi y funciones de seguridad","Habilitación: carga de dominio, heterogeneidad y equipamiento","Densidad por función al 40 % · min-max dentro de la carrera"], ()=>{
    S.d24.ind = true; S.step = 15; S.mode.pesos="ind"; setTab("pesos");
    addMsg("agent", `<p>Trece indicadores calculados desde sus artefactos y normalizados dentro de la carrera. Los recursos compartidos suman al 60 % en la carga de dominio: ya se aprenden una vez y se transfieren.</p><p>Faltan los dos juicios anclados del panel: complejidad cognitiva y consecuencia del error, más la ponderación AHP de los criterios.</p>${docCard("Indicadores y panel","4 criterios · 13 indicadores","pesos","ind")}`,
      [{label:"Convocar el panel PESOS", main:true, fn:panel24}]);
    refresh();
  });
}
function panel24(){
  userSays("Convoca el panel de pesos.");
  think(["Y1, Y4, Y5 e Y3: comparaciones por pares en escala de Saaty","Razón de consistencia por experto · se agrega solo con CR ≤ 0,10","Y2 por especialidad: rúbrica de complejidad cognitiva","Y3 con Y2: rúbrica de consecuencia del error","Agregación por media geométrica"], ()=>{
    S.d24.panel = true; S.d24.pesos = true; S.step = 16; S.mode.pesos="dist"; setTab("pesos");
    addMsg("agent", `<p>Vector agregado: amplitud <b>22 %</b>, profundidad <b>37 %</b>, criticidad <b>20 %</b>, habilitación <b>21 %</b>, con CR 0,04. Las rúbricas alcanzan I-CVI ≥ 0,83 en la ronda 1.</p><p>Con eso el peso formativo reparte 100 puntos entre las ${ESC.length} especialidades. El <b>potencial no entra</b>: se publica al lado, en el IPC y en el mapa de cuadrantes.</p>${docCard("Pesos y distribución",`PF · IPC · mapa peso × potencial`,"pesos","dist")}`,
      [{label:"Calcular fundamento y especialidad", main:true, fn:corte24},
       {label:"Ver el mapa de cuadrantes", keep:true, fn:()=>{ S.mode.pesos="dist"; setTab("pesos"); toggleExpand(true); }}]);
    refresh();
  });
}
function corte24(){
  userSays("Calcula cuánto del plan es fundamento y reparte los créditos.");
  think(["Fracción de fundamento ponderada por distribución","FD derivado y verificación de banda","Reparto de FD entre dimensiones por frac_e(d) · restos mayores","Reparto del obligatorio entre especialidades con piso y techo","Déficit de cobertura y apertura de itinerarios","Verificaciones C1 a C12"], ()=>{
    const c = calc24();
    S.d24.corte = true; S.step = 17; S.mode.pesos="corte"; setTab("pesos");
    addMsg("agent", `<p>Reparto derivado: el saber compartido pesa <b>${(c.fracPond*100).toFixed(1)} %</b> → <b>FD = ${c.FD}</b> créditos y <b>CE = ${c.CE}</b>. Cae <b>dentro</b> de la banda corporativa 30 – 45 %, así que el paso continúa.</p><p>Los tres repartos quedan hechos: ${S.d23.DIM.length} dimensiones, ${ESC.length} especialidades y ${c.itin.length} itinerarios electivos.</p>${docCard("Créditos","Tres repartos · verificaciones C1–C12","pesos","cred")}`,
      [{label:"Revisar los tres repartos", main:true, fn:()=>{ S.mode.pesos="cred"; setTab("pesos");
          addMsg("agent", `<p>Todas las verificaciones pasan. Recuerde que el 2.5 entrega <b>créditos, no cursos</b>: los cursos de 1 a 5 créditos los arma el paso 2.6 dentro del objetivo de cada especialidad y de cada dimensión.</p>`,
            [{label:"Guardar pesos y créditos", main:true, fn:save24}]); }}]);
    refresh();
  });
}
function save24(){
  if(S.d24.saved) return;
  if(S.step < 17) S.step = 17;
  userSays("Guarda los pesos y los créditos.");
  think(["Registrando la tabla de pesos y la de indicadores con su origen","Escribiendo créditos por dimensión y por especialidad","Registrando el punto de corte derivado y el acta del panel","Actualizando el frontmatter de cada competencia"], ()=>{
    S.d24.saved = true; S.step = 18; refresh();
    toast("Paso 2.5 guardado · pesos y créditos de la escuela");
    addMsg("agent", `<p>Guardado. La escuela queda con su <b>peso formativo</b> por especialidad, el <b>punto de corte derivado</b> y los créditos de los tres bloques. En la bandeja, cada competencia muestra ya sus créditos.</p><p>Sigue el <b>2.6 Propuesta de cursos</b>, que arma las asignaturas por familias de funciones dentro del presupuesto de cupos.</p>`,
      [{label:"Abrir el paso 2.6 · Propuesta de cursos", main:true, fn:gen25},
       {label:"Ver la bandeja de competencias", keep:true, fn:()=>{ S.mode.disc="band"; setTab("disc"); }}]);
  });
}

/* ---------- 2.6 Propuesta de cursos ---------- */
const PL5 = Object.assign({ciclos:10, tope:6, generales:14, practica:"curso", techoCr:5}, F2.PL5||{});
S.d25 = {gen:false, coh:false, form:false, panel:false, saved:false, open:{}, filtro:"todos", ronda:1,
  vsel:(ESC[0]||{}).k, pick:{}, vok:{}, sum:false, edit:null};
const PLANV = F2.PLANV || {};   /* dato de escuela · datos/f2-<cod>.js */
function vItems(){
  return S.mode.vmode==="esp"
    ? ESC.map(e=>({k:e.k, n:e.n, sub:`${e.fn} funciones · competencia ${e.c}`, tipo:"esp"}))
    : [...COMPE.map(c=>({k:c[0], n:c[1], sub:`${ESC.filter(e=>e.c===c[0]).map(e=>e.k).join(" · ")} · de habilidad`, tipo:"hab"})),
       ...S.d23.CD.map(c=>({k:c[0], n:c[1], sub:`${c[3].join(" · ")} · de contenido`, tipo:"cont"}))];
}
function vPropuesta(k){
  if(S.d23.CD.some(x=>x[0]===k)){ const c=S.d23.CD.find(x=>x[0]===k); return c?CUR.filter(x=>c[3].includes(x[3])):[]; }
  const ks = k[0]==="E" ? [k] : ESC.filter(e=>e.c===k).map(e=>e.k);
  return CUR.filter(c=> c[2]!=="dimension" && (ks.includes(c[3]) || (c[2]==="especialidad"&&(c[5]||[]).some(x=>ks.includes(x))) || c[2]==="practica"));
}
function vPlan(k){
  if(PLANV[k]) return PLANV[k];
  const ks = ESC.filter(e=>e.c===k).map(e=>e.k), out=[], vis=new Set();
  ks.forEach(x=>(PLANV[x]||[]).forEach(c=>{ if(!vis.has(c[0])){ vis.add(c[0]); out.push(c); } }));
  return out;
}
function vCuota(k){
  const c = (S.d24.corte||S.d24.saved) ? calc24() : null; if(!c) return null;
  if(k[0]==="E") return c.esp[k];
  if(S.d23.CD.some(y=>y[0]===k)){ const x=S.d23.CD.find(y=>y[0]===k); return x?x[3].reduce((a,d)=>a+(c.dim[d]||0),0):0; }
  return ESC.filter(e=>e.c===k).reduce((a,e)=>a+c.esp[e.k],0);
}
function vSel(k){
  if(!S.d25.pick[k]) S.d25.pick[k] = vPropuesta(k).map(c=>({id:c[0], n:c[1], cr:c[4], src:"ag"}));
  return S.d25.pick[k];
}
/* [cod, nombre, tipo, bloque, cr, esp[], fn[], hito, epa, tema[], prod, sumilla] */
const CUR = F2.CUR || [];   /* dato de escuela · datos/f2-<cod>.js */
const TIPOL = {dimension:["Dimensión","t-ok"],especialidad:["Especialidad","t-prop"],electivo:["Electivo avanzado","t-neutral"],practica:["Práctica preprofesional","t-alta"]};
const pract5 = c => Math.min(80, Math.max(20, Math.round(20 + 15*(c[8]-1))));
const troncal = c => c[5].length>=2 && c[2]==="especialidad";
function presu(){
  const c24 = calc24();
  const cupT = PL5.ciclos*PL5.tope, cupE = Math.ceil(S.d24.EL/PL5.techoCr), cupP = PL5.practica==="curso"?1:0;
  const disp = cupT - PL5.generales - cupP - cupE;
  const bolsa = c24.FD + c24.OBLIG, prom = bolsa/disp;
  const Nd = {}, Ne = {};
  S.d23.DIM.forEach(d=>Nd[d[0]] = Math.max(1, Math.round(c24.dim[d[0]]/prom)));
  ESC.forEach(e=>Ne[e.k] = Math.max(1, Math.round(c24.esp[e.k]/prom)));
  const cursa = PL5.generales + CUR.filter(c=>c[2]==="dimension"||c[2]==="especialidad"||c[2]==="practica").length + cupE;
  return {cupT, cupE, cupP, disp, bolsa, prom, Nd, Ne, cursa, porCiclo:cursa/PL5.ciclos, c24};
}
function viewCursos(){
  return `<div class="sheet">${seg("cursos",[["pres","Inventario de cursos"],["valida","Validar Cursos",!S.d25.form],["lista","Lista de cursos",!S.d25.form],["trib","Tributación y prorrateo",!S.d25.form],["elec","Itinerarios y práctica",!S.d25.form]])}
  ${({pres:c5Pres,valida:c5Valida,lista:c5Lista,trib:c5Trib,elec:c5Elec})[S.mode.cursos]()}</div>`;
}
function c5Pres(){
  const p = presu();
  const kpi = (n,l,s,col) => `<div class="kpi" style="--k:${col||"var(--navy)"}"><div class="n">${n}</div><div class="l">${l}</div><div class="s">${s}</div></div>`;
  const grupo = (tit,sub,cls,items) => `<div class="invg ${cls}"><div class="ih"><b>${tit}</b><small>${sub}</small>
      <span class="ic">${items.reduce((a,i)=>a+i.cur.length,0)} cursos · ${items.reduce((a,i)=>a+i.cr,0)} créditos</span></div>
    ${items.map(i=>`<div class="ir"><div class="it"><b>${i.k} · ${esc(i.n)}</b><small>${i.cr} créditos del 2.5 · ${i.prev} cursos previstos · ${i.cur.length} formulados</small></div>
      <div class="bps">${i.cur.map(c=>`<span class="bp ${c[2]==="electivo"?"":"ok"}" title="${c[0]} · ${c[4]} créditos · ${TIPOL[c[2]][0]}">${esc(c[1])} · ${c[4]}</span>`).join("")}</div></div>`).join("")}</div>`;
  const disc = S.d23.CD.map(cd=>({k:cd[0], n:cd[4]||cd[1], cr:cd[3].reduce((a,k)=>a+p.c24.dim[k],0),
    prev:cd[3].reduce((a,k)=>a+p.Nd[k],0), cur:CUR.filter(c=>cd[3].includes(c[3]))}));
  const espc = COMPE.map(cc=>{ const es=ESC.filter(e=>e.c===cc[0]);
    return {k:cc[0], n:cc[1], cr:es.reduce((a,e)=>a+p.c24.esp[e.k],0), prev:es.reduce((a,e)=>a+p.Ne[e.k],0),
      cur:CUR.filter(c=>c[2]==="especialidad"&&es.some(e=>e.k===c[3]))}; });
  return `<div class="eyebrow">Paso 2.6 · M2 · Inventario y presupuesto</div>
  <h2>Inventario de cursos · qué cabe en el plan y qué se formuló</h2><div class="rule"></div>
  <p class="note">Esta pantalla responde dos preguntas: <b>¿cuántos cursos caben?</b> —el tope por ciclo manda— y <b>¿cuántos se formularon en cada bloque?</b> Si un bloque tiene más cursos que los previstos, sus cursos salen más chicos que el promedio y hay que revisarlos.</p>
  <div class="kpis">
    ${kpi(p.cupT,"cupos del plan",`${PL5.ciclos} ciclos × ${PL5.tope} cursos`)}
    ${kpi(p.disp,"cupos disponibles",`menos ${PL5.generales} generales, ${p.cupP} práctica y ${p.cupE} electivos`,"var(--gold)")}
    ${kpi(p.bolsa,"créditos a repartir",`${p.c24.FD} de dominio + ${p.c24.OBLIG} de especialidad`)}
    ${kpi(p.prom.toFixed(1),"créditos por curso",`promedio que fija el tamaño de cada familia`,"var(--ok)")}
    ${kpi(CUR.filter(c=>c[2]==="dimension"||c[2]==="especialidad").length,"cursos formulados",`más ${CUR.filter(c=>c[2]==="electivo").length} electivos y la práctica`,"#6b3fa0")}
    ${kpi(p.porCiclo.toFixed(1),"cursos por ciclo",`tope ${PL5.tope} · ${p.cursa} cursos en total`,p.porCiclo>PL5.tope?"var(--bad)":"var(--ok)")}
  </div>
  ${grupo("Bloque de dominio disciplinar","Cursos de fundamento, agrupados por competencia disciplinar y sus dimensiones","dis",disc)}
  ${grupo("Bloque de especialidad","Cursos de especialidad, agrupados por competencia de habilidad","esp",espc)}
  <div class="panelres"><b>Regla de ajuste</b>
    <p class="mini" style="margin-top:4px">Si el reparto deja una familia incoherente, el presupuesto se ajusta <b>subiendo los créditos por curso</b>, nunca metiendo un curso extra al ciclo. El tope por ciclo no se negocia: es lo que el estudiante puede llevar.</p></div>`;
}
function c5Lista(){
  const f = S.mode.cfil || "todos";
  const lista = CUR.filter(c=>f==="todos"||c[2]===f);
  const fila = c => { const op=S.d25.open[c[0]], d=S.d23.DIM.find(x=>x[0]===c[3]), e=ESC.find(x=>x.k===c[3]);
    return `<tr class="${op?"open":""}"><td class="num">${c[0]}</td>
    <td class="fn"><button class="tog" aria-expanded="${!!op}" data-cur="${c[0]}"><b>${esc(c[1])}</b></button>
      <div class="mini">${d?"Dimensión "+esc(d[1]):e?"Especialidad "+esc(e.n):"Escuela"}</div></td>
    <td><span class="tag ${TIPOL[c[2]][1]}">${({dimension:"Dominio disciplinar",especialidad:"Especialidad",electivo:"Electivo avanzado",practica:"Práctica"})[c[2]]}</span></td>
    <td class="num"><b>${c[4]}</b></td>
    <td class="num">${pract5(c)} %</td>
    <td class="num">${c[7]}<div class="mini">EPA ${c[8]}</div></td>
    <td><div class="bps">${c[5].map(k=>`<span class="et v3" title="${esc(ESC.find(x=>x.k===k).n)}">${k}</span>`).join(" ")}</div></td>
    <td>${troncal(c)?'<span class="tag t-ok">Troncal</span>':c[2]==="dimension"?'<span class="tag t-neutral">Fundamento</span>':"—"}</td></tr>
    ${op?`<tr class="tasks"><td colspan="8">${c5Ficha(c)}</td></tr>`:""}`; };
  return `<div class="eyebrow">Paso 2.6 · M4 y M5 · Familias y formulación</div>
  <h2>Cursos propuestos · ${CUR.length} · agrupados por competencia</h2><div class="rule"></div>
  <p class="note">De los dieciséis campos de la ficha, solo <b>tres se redactan de nuevo</b>: el nombre, el producto integrador y la sumilla. Todo lo demás se copia con su código de origen — eso es lo que hace el curso trazable ante un par evaluador. Clic en el nombre para ver su ficha.</p>
  <div class="toolbar">${seg("cfil",[["todos","Todos"],["dimension","Dimensión"],["especialidad","Especialidad"],["electivo","Electivos"],["practica","Práctica"]])}<div class="grow"></div>
    <div class="stat"><span>Créditos <b>${lista.reduce((a,c)=>a+c[4],0)}</b></span><span>Cursos <b>${lista.length}</b></span></div></div>
  ${(() => { const HEAD = `<thead><tr><th style="width:74px">Código</th><th style="min-width:230px">Curso</th><th style="width:118px">Bloque</th><th class="num" style="width:62px">Créd.</th><th class="num" style="width:70px">Práctica</th><th class="num" style="width:62px">Hito</th><th style="width:120px">Tributa a</th><th style="width:88px">Alcance</th></tr></thead>`;
    const grupos = [];
    S.d23.CD.forEach(cd=>grupos.push([`${cd[0]} · ${cd[4]||cd[1]}`, lista.filter(c=>cd[3].includes(c[3])), "dis"]));
    COMPE.forEach(cc=>{ const ks=ESC.filter(e=>e.c===cc[0]).map(e=>e.k);
      grupos.push([`${cc[0]} · ${cc[1]}`, lista.filter(c=>ks.includes(c[3]) && c[2]!=="practica"), "esp"]); });
    grupos.push(["Escuela · práctica preprofesional", lista.filter(c=>c[2]==="practica"), "ele"]);
    return grupos.filter(g=>g[1].length).map(g=>`<div class="blkh ${g[2]||"ele"}" style="margin-top:14px"><span class="bn">${g[0].split(" ")[0]}</span>
      <div><b>${esc(g[0].split("·").slice(1).join("·").trim()||g[0])}</b><small>${g[1].length} cursos · ${g[1].reduce((a,c)=>a+c[4],0)} créditos</small></div></div>
      <div class="tw"><table>${HEAD}<tbody>${g[1].map(fila).join("")}</tbody></table></div>`).join(""); })()}`;
}
function c5Ficha(c){
  const fns = c[6].map(k=>D.FN[k]).filter(Boolean);
  const tasks = fns.flatMap(f=>f.tasks||[]);
  const d = S.d23.DIM.find(x=>x[0]===c[3]);
  const campo = (l,v) => `<div class="kv"><div class="eyebrow">${l}</div><p style="font-size:12.5px">${v}</p></div>`;
  return `<div class="det3" style="grid-template-columns:1fr 1fr;gap:16px">
    <section>
      <h5>A · Identidad</h5>
      <div class="grid2">${campo("Código",c[0])}${campo("Tipo",TIPOL[c[2]][0])}${campo("Créditos",c[4]+" · "+pract5(c)+" % práctica")}${campo("Bloque",c[3])}</div>
      <h5>B · Origen profesional</h5>
      <p><b>Especialidades:</b> ${c[5].map(k=>esc(ESC.find(x=>x.k===k).n)).join(" · ")}</p>
      ${fns.length?`<p style="margin-top:6px"><b>Funciones que tributa</b></p>${fns.map((f,i)=>`<div class="tk"><code>${f.c}</code><div>${esc(f.t)} <span class="tag ${i===0?"t-ok":"t-neutral"}">${i===0?"principal":"apoyo"}</span><small>${(f.tasks||[]).length} tareas clave · ${esc(f.capm||"")}</small></div></div>`).join("")}`
        :`<p class="mini">Funciones del lote simulado: el prototipo trae el detalle real solo de ${esc(S.spec||ESC[0].n)}.</p>`}
      ${tasks.length?`<p style="margin-top:8px"><b>Tareas clave cubiertas</b> · ${tasks.length}</p><ol class="tlist2">${tasks.slice(0,6).map(t=>`<li>${esc(t.t)}</li>`).join("")}${tasks.length>6?`<li class="mini">… y ${tasks.length-6} más</li>`:""}</ol>`:""}
    </section>
    <section>
      <h5>C · Evidencia</h5>
      <div class="prodbox"><b>Producto integrador</b><p>${esc(c[10])}</p>
        ${fns.length?`<p class="mini" style="margin-top:6px">Deriva del producto de especialidad <b>${esc(fns[0].prod.name)}</b> (${fns[0].c})</p>`:""}</div>
      <h5>D · Habilitadores</h5>
      ${fns.length?`<p class="mini">Principales: ${(fns[0].rec||[]).slice(0,3).map(r=>esc(r.code)+" "+esc(r.t)).join(" · ")}</p>`:'<p class="mini">Recursos de la matriz del 2.2 de su especialidad.</p>'}
      <h5>E · Conocimiento · temas nucleares asociados</h5>
      ${c[9].length?c[9].map(k=>{const t=tnOf(k); return `<div class="tk"><code>${k}</code><div>${esc(t[1])}<small>${t[2].length} micro temas · ${esFund(t)?"de fundamento":"de especialidad"}</small></div></div>`;}).join(""):'<p class="mini">Sin temas de fundamento asociados: el curso aplica, no fundamenta.</p>'}
      <h5>F · Nivel</h5>
      <div class="grid2">${campo("Hito de progresión"+ayuda("HITO"),c[7]+" · "+({N1:"Fundamentos",N2:"Funcional",N3:"Dominio autónomo"})[c[7]])}${campo("EPA objetivo al cierre",c[8]+" de 5")}</div>
      <h5>H · Sumilla</h5>
      <p style="font-size:12.5px;line-height:1.6">${esc(c[11])}</p>
      <p class="mini" style="margin-top:6px">${c[11].split(/\s+/).length} palabras · el rango exigido es 60 a 90</p>
    </section></div>`;
}
function c5Trib(){
  const c24 = calc24();
  const carga = {}; ESC.forEach(e=>carga[e.k]=0);
  CUR.filter(c=>c[2]==="especialidad"||c[2]==="practica").forEach(c=>{ c[5].forEach(k=>{ carga[k] += c[4]/c[5].length; }); });
  return `<div class="eyebrow">Paso 2.6 · M6 · Verificar</div>
  <h2>¿Cada especialidad recibió los créditos que le tocaban?</h2><div class="rule"></div>
  <p class="note">Esta pantalla sirve para <b>una decisión</b>: aceptar la lista de cursos o mandar a rehacer una familia. Hay dos comprobaciones. La primera: los cursos que armó el 2.6 deben devolverle a cada especialidad los créditos que el 2.5 le asignó. Un curso <b>troncal</b> —el que sirve a dos o más especialidades— se cuenta una sola vez en el plan, pero sus créditos se reparten entre ellas; por eso la suma nunca cuadra exacta y se acepta <b>±1 crédito</b>.</p>
  <div class="split" style="margin-bottom:14px">
    <div class="kv"><div class="eyebrow">Si la desviación es positiva</div><p style="font-size:12.5px">Los cursos de esa especialidad suman más créditos de los que le tocan: le está quitando horas a otra. Se revisa si una familia junta funciones de más.</p></div>
    <div class="kv"><div class="eyebrow">Si es negativa</div><p style="font-size:12.5px">Le faltan créditos: o un curso quedó corto, o una función se quedó sin curso. La segunda tabla dice cuál.</p></div>
  </div>
  <div class="tw"><table><thead><tr><th style="width:44px">Cód.</th><th>Especialidad</th><th class="num" style="width:150px">Créditos que le asignó el 2.5${ayuda("CUOTA")}</th><th class="num" style="width:130px">Créditos que le devuelven sus cursos</th><th class="num" style="width:90px">Desviación</th><th style="width:100px">Estado</th></tr></thead><tbody>
  ${ESC.map(e=>{ const dv = carga[e.k]-c24.esp[e.k], ok = Math.abs(dv)<=1.05;
    return `<tr><td class="num">${e.k}</td><td class="fn"><b>${esc(e.n)}</b></td>
    <td class="num">${c24.esp[e.k]}</td><td class="num">${carga[e.k].toFixed(2)}</td>
    <td class="num ${ok?"":"low"}">${dv>0?"+":""}${dv.toFixed(2)}</td>
    <td><span class="tag ${ok?"t-ok":"t-rev"}">${ok?"Dentro de ±1":"Revisar familia"}</span></td></tr>`; }).join("")}
  </tbody></table></div>
  <h3 style="margin-top:22px">Segunda comprobación · ¿alguna función se quedó sin curso?</h3>
  <p class="note">La otra mitad de la decisión. Una función profesional que no tributa a ningún curso es una promesa del perfil que el plan no cumple: el egresado sale sin haberla trabajado nunca. Aquí se ve función por función —de ${esc(S.spec||ESC[0].n)}, la única con datos reales en el prototipo— y si falta alguna, el remedio no es agregar un curso suelto, sino rehacer la familia a la que pertenece.</p>
  <div class="tw"><table><thead><tr><th style="width:70px">Función</th><th>Denominación</th><th class="num" style="width:70px">Tareas</th><th style="width:240px">Curso que la desarrolla</th><th style="width:110px">Cobertura</th></tr></thead><tbody>
  ${(S.fn.length?S.fn:FNK.map(k=>D.FN[k])).map(f=>{ const cs = CUR.filter(c=>c[6].includes(f.c));
    return `<tr><td class="num">${f.c}</td><td class="fn"><b>${esc(f.t)}</b></td><td class="num">${(f.tasks||[]).length}</td>
    <td>${cs.length?cs.map(c=>`<div class="mini" style="color:var(--ink)">${c[0]} · ${esc(c[1])}</div>`).join(""):'<span class="mini">—</span>'}</td>
    <td><span class="tag ${cs.length?"t-ok":"t-rev"}">${cs.length?"Cubierta":"Sin curso"}</span></td></tr>`; }).join("")}
  </tbody></table></div>`;
}
function c5Elec(){
  const el = CUR.filter(c=>c[2]==="electivo"), pr = CUR.find(c=>c[2]==="practica");
  const oferta = {}; ESC.forEach(e=>oferta[e.k]= el.filter(c=>c[3]===e.k).reduce((a,c)=>a+c[4],0));
  const total = Object.values(oferta).reduce((a,b)=>a+b,0);
  return `<div class="eyebrow">Paso 2.6 · M5 · Itinerario avanzado y práctica</div>
  <h2>Itinerarios electivos · el tramo que lleva a la experticia</h2><div class="rule"></div>
  <p class="note">Sí: aquí se decide <b>qué cursos electivos se ofrecen</b> y a qué especialidad pertenece cada itinerario. El estudiante cursa ${S.d24.EL} créditos electivos —es requisito de egreso— y los elige dentro de <b>un</b> itinerario, el de la especialidad en la que quiere profundizar. Por eso cada itinerario debe bastar por sí solo: si ofrece menos de ${S.d24.EL} créditos, el estudiante no puede completarlo sin salirse de su especialidad.</p>
  <p class="note"><b>Todas las especialidades llevan itinerario</b>, no solo las de mucha demanda: el electivo no es relleno ni premio de mercado, es el tramo que lleva del nivel funcional al <b>hito N3 de dominio autónomo</b>. El déficit de cobertura solo habilita un tercer curso, y solo si la capacidad declarada lo permite.</p>
  <div class="tw"><table><thead><tr><th style="width:44px">Cód.</th><th>Especialidad</th><th style="min-width:230px">Cursos del itinerario</th><th class="num" style="width:90px">Oferta</th><th class="num" style="width:80px">Cursa</th><th style="width:96px">Hito</th></tr></thead><tbody>
  ${ESC.map(e=>{ const cs=el.filter(c=>c[3]===e.k);
    return `<tr><td class="num">${e.k}</td><td class="fn"><b>${esc(e.n)}</b></td>
    <td>${cs.length?cs.map(c=>`<div class="mini" style="color:var(--ink)">${c[0]} · ${esc(c[1])} · ${c[4]} cr</div>`).join(""):'<span class="mini">Itinerario por formular en la corrida completa</span>'}</td>
    <td class="num">${oferta[e.k]||S.d24.EL}</td><td class="num">${S.d24.EL}</td><td><span class="tag t-ok">N3</span></td></tr>`; }).join("")}
  </tbody></table></div>
  <div class="grid2" style="margin-top:14px">
    <div class="kv"><div class="eyebrow">Lo que cursa el estudiante</div><p><b style="font-family:var(--mono);font-size:20px">${S.d24.EL}</b> créditos · entra una sola vez al total del plan</p></div>
    <div class="kv"><div class="eyebrow">Carga de oferta docente</div><p><b style="font-family:var(--mono);font-size:20px">${Math.max(total, ESC.length*S.d24.EL)}</b> créditos · capacidad declarada ${S.d24.CAP}</p>
      <p class="mini">${Math.max(total, ESC.length*S.d24.EL)<=S.d24.CAP?"Dentro de la capacidad":"Excede la capacidad: se retiran terceros cursos en orden inverso de déficit"}</p></div>
  </div>
  <h3 style="margin-top:18px">Práctica preprofesional</h3>
  <div class="capficha"><div class="ch"><b>${pr[0]}</b><strong>${esc(pr[1])}</strong><span class="mini">${pr[4]} créditos · hito ${pr[7]} · EPA ${pr[8]} · parámetro: ${PL5.practica}</span></div>
    <div class="cb"><div class="prodbox"><b>Producto integrador</b><p>${esc(pr[10])}</p></div>
      <p class="mini" style="margin-top:8px">Tributa a todas las funciones núcleo de la especialidad del estudiante, está <b>exenta del techo de 5 créditos</b> y requiere todos sus cursos obligatorios. No enseña recursos nuevos: aplica y consolida los ya desarrollados.</p></div></div>`;
}
function c5Valida(){
  const items = vItems();
  if(!items.some(i=>i.k===S.d25.vsel)) S.d25.vsel = items[0].k;
  const k = S.d25.vsel, it = items.find(i=>i.k===k);
  const sel = vSel(k), prop = vPropuesta(k), plan = vPlan(k);
  const tipoDe = id => { const c=CUR.find(x=>x[0]===id); return c?c[2]:"especialidad"; };
  const oblig = sel.filter(c=>!["electivo","practica"].includes(tipoDe(c.id)));
  const extra = sel.filter(c=>["electivo","practica"].includes(tipoDe(c.id)));
  const cuota = vCuota(k), crSel = oblig.reduce((a,c)=>a+c.cr,0), crEx = extra.reduce((a,c)=>a+c.cr,0);
  const has = id => sel.some(c=>c.id===id);
  const dif = cuota!==null ? crSel-cuota : 0;
  return `<div class="eyebrow">Paso 2.6 · M8 · Confirmar</div>
  <h2>Validar los cursos de cada ${S.mode.vmode==="esp"?"especialidad":"competencia"}</h2><div class="rule"></div>
  <p class="note">Elija a la izquierda y decida a la derecha. En la columna verde queda <b>lo que finalmente entra al plan</b>: puede quitar de ahí lo que no convenza y sumar desde la propuesta de Génesys o desde el plan vigente.</p>
  <div class="toolbar">${seg("vmode",[["esp","Por especialidad"],["comp","Por competencia"]])}<div class="grow"></div>
    <button class="btn sm" id="sumTog" aria-pressed="${!!S.d25.sum}">${S.d25.sum?"Ocultar sumillas":"Ver sumillas"}</button>
    <div class="stat"><span>Validadas <b>${items.filter(i=>S.d25.vok[i.k]).length} de ${items.length}</b></span></div></div>
  <div class="cbar ${cuota===null?"":Math.abs(dif)<=1?"ok":Math.abs(dif)<=3?"warn":"bad"}">
    <div><span class="cl">${esc(it.n)}</span><b>${crSel}</b> créditos obligatorios${crEx?` <span class="mini">+ ${crEx} en electivos y práctica</span>`:""}</div>
    <div class="gauge"><i style="width:${cuota?Math.min(100,crSel/(cuota*1.4)*100):0}%"></i>
      <u style="left:${cuota?Math.min(100,cuota/(cuota*1.4)*100):70}%"></u></div>
    <div class="mini">Cuota del 2.5 <b>${cuota===null?"—":cuota}</b>${ayuda("CUOTA")} · desviación <b class="${Math.abs(dif)<=1?"":"low"}">${dif>0?"+":""}${dif}</b>${ayuda("DESV")}</div>
  </div>
  <div class="val">
    <div class="col"><h4 style="background:var(--surface-2);color:var(--ink-2)">${S.mode.vmode==="esp"?"Especialidades":"Competencias"}<span class="cn">${items.length}</span></h4>
      <div class="cb2">${items.map(i=>`<button class="vitem" data-vsel="${i.k}" aria-current="${i.k===k}">
        <b>${i.k} · ${esc(i.n)}</b><small>${esc(i.sub)}</small>
        <span class="bps" style="margin-top:3px"><span class="bp ${S.d25.vok[i.k]?"ok":""}">${S.d25.vok[i.k]?"validada":"por validar"}</span>
        <span class="bp">${(S.d25.pick[i.k]||vPropuesta(i.k)).length} cursos</span></span></button>`).join("")}</div></div>

    <div class="col fin" id="dropFin"><h4><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M4 12l6 6L20 5"/></svg> Selección final · decide la escuela<span class="cn">${sel.length}</span>
        <button class="act" id="ordCr" title="Ordenar por créditos, de mayor a menor" style="margin-left:6px">⇅</button></h4>
      <div class="cb2 drop">${sel.length?sel.map(c=>{ const cu=CUR.find(x=>x[0]===c.id);
        return `<div class="crow on ${c.src==="pl"?"pl":"ag"}"><b>${esc(c.n)}</b>
        <span class="acts sm"><button class="act" data-ved="${esc(c.id)}" title="Abrir y editar el curso">✎</button><button class="act" data-vdel="${esc(c.id)}" title="Quitar de la selección">−</button></span>
        <span class="m">${c.cr} créditos · ${c.src==="pl"?"del plan vigente":"propuesto por Génesys"}${cu?" · "+cu[0]:""}</span>
        ${S.d25.sum&&cu?`<span class="sum">${esc(cu[11])}</span>`:""}</div>`; }).join("")
        :'<p class="mini" style="padding:8px">Arrastre cursos aquí desde las columnas de la derecha, o use el botón +.</p>'}</div>
      <div class="vsum">
        <div class="r"><span>Obligatorios elegidos</span><b>${crSel}</b></div>
        ${crEx?`<div class="r"><span>Electivos y práctica</span><b>${crEx}</b></div>`:""}
        <div class="r"><span>Cuota del paso 2.5</span><b>${cuota===null?"—":cuota}</b></div>
        ${cuota!==null?`<div class="r"><span>Desviación</span><b class="${Math.abs(dif)<=2?"":"low"}">${dif>0?"+":""}${dif}</b></div>`:""}
        <button class="btn sm ${S.d25.vok[k]?"":"primary"}" data-vok="${k}" style="justify-content:center">${S.d25.vok[k]?"Validada ✓ · volver a abrir":"Validar esta "+(S.mode.vmode==="esp"?"especialidad":"competencia")}</button>
      </div></div>

    <div class="col age"><h4>Propuesta de Génesys<span class="cn">${prop.length}</span></h4>
      <div class="cb2">${prop.map(c=>`<div class="crow ag ${has(c[0])?"dup":""}" draggable="${!has(c[0])}" data-drag="${esc(c[0])}"><b>${esc(c[1])}</b>
        <span class="acts sm"><button class="act" data-vel="${esc(c[0])}" title="Ver los elementos que sostienen el curso">◔</button><button class="act" data-vadd="${esc(c[0])}" ${has(c[0])?"disabled":""} title="Sumar a la selección">+</button></span>
        <span class="m">${c[0]} · ${c[4]} créditos · ${TIPOL[c[2]][0].toLowerCase()}${(c[5]||[]).length>1&&c[2]==="especialidad"?" · troncal":""} · hito ${c[7]}${has(c[0])?" · ya seleccionado":""}</span>
        ${S.d25.sum?`<span class="sum">${esc(c[11])}</span>`:""}</div>`).join("")}</div></div>

    <div class="col pln"><h4>Cursos del plan vigente<span class="cn">${plan.length}</span>
        <button class="act" id="verPlan" title="Ver el plan vigente completo" style="margin-left:6px">☰</button></h4>
      <div class="cb2">${plan.map(c=>`<div class="crow pl ${has("PV-"+c[0])?"dup":""}" draggable="${!has("PV-"+c[0])}" data-dragp="${esc(c[0])}|${c[1]}"><b>${esc(c[0])}</b>
        <button class="act" data-vaddp="${esc(c[0])}|${c[1]}" ${has("PV-"+c[0])?"disabled":""} title="Mantener este curso del plan">+</button>
        <span class="m">${c[1]} créditos · plan vigente${has("PV-"+c[0])?" · ya seleccionado":""}</span></div>`).join("")}</div></div>
  </div>
  <p class="note" style="margin-top:12px">Un curso del plan vigente que se mantiene hereda su nombre, pero su ficha se rehace con las funciones y los recursos del nuevo diseño: el paso 3.3 no diseña sobre el sílabo antiguo.</p>`;
}
function verPlanVigente(){
  const filas = Object.entries(PLANV).map(([k,v])=>[k, v]);
  openModal("Plan de estudios vigente · cursos por unidad", `<div class="ayhero ay-navy"><span class="ayic">☰</span><div><b>Plan vigente de la escuela</b><small>Lo que hoy se dicta, para contrastarlo con la propuesta</small></div></div>
    ${filas.map(([k,v])=>{ const e=ESC.find(x=>x.k===k), cd=S.d23.CD.find(x=>x[0]===k);
      return `<h4 style="margin:12px 0 6px;font-size:12.5px;color:var(--navy)">${k} · ${esc(e?e.n:cd?cd[1]:k)}</h4>
      <div class="tw"><table><thead><tr><th>Curso del plan vigente</th><th class="num" style="width:80px">Créditos</th></tr></thead>
      <tbody>${v.map(c=>`<tr><td style="color:var(--ink)">${esc(c[0])}</td><td class="num">${c[1]}</td></tr>`).join("")}
      <tr class="group-h"><td>Subtotal</td><td class="num">${v.reduce((a,c)=>a+c[1],0)}</td></tr></tbody></table></div>`; }).join("")}
    <p class="mini" style="margin-top:10px">Un curso del plan vigente que se mantiene conserva su nombre, pero su ficha se rehace con las funciones, las tareas y los elementos de productividad del nuevo diseño.</p>`);
}
function verElementos(id){
  const c = CUR.find(x=>x[0]===id); if(!c) return;
  const fns = c[6].map(k=>D.FN[k]).filter(Boolean);
  const tasks = fns.flatMap(f=>(f.tasks||[]).map(t=>({...t, f:f.c})));
  const recs = fns.flatMap(f=>(f.rec||[]).map(r=>({...r, f:f.c})));
  const vistos = new Set(); const recU = recs.filter(r=>{ if(vistos.has(r.code)) return false; vistos.add(r.code); return true; });
  const esp = c[5].map(k=>ESC.find(e=>e.k===k)).filter(Boolean);
  openModal(c[0]+" · "+c[1], `<div class="ayhero ay-gold"><span class="ayic">◔</span><div><b>${esc(c[1])}</b><small>Con qué se sostiene la asignación de este curso</small></div></div>
    <p class="q"><b>Tributa a:</b> ${esp.map(e=>esc(e.n)).join(" · ")} · <b>${c[4]} créditos</b> · hito ${c[7]} · EPA ${c[8]} · ${pract5(c)} % de práctica.</p>
    ${fns.length?`<h4 style="margin:12px 0 4px;font-size:12px;color:var(--navy)">Funciones profesionales que desarrolla</h4>
      ${fns.map((f,i)=>`<div class="tk"><code>${f.c}</code><div>${esc(f.t)} <span class="tag ${i===0?"t-ok":"t-neutral"}">${i===0?"principal":"apoyo"}</span><small>${esc(f.d||"")}</small></div></div>`).join("")}
      <h4 style="margin:12px 0 4px;font-size:12px;color:var(--navy)">Tareas clave cubiertas · ${tasks.length}</h4>
      <ol class="tlist2">${tasks.map(t=>`<li>${esc(t.t)} <span class="mini">${t.code}</span></li>`).join("")}</ol>
      <h4 style="margin:12px 0 4px;font-size:12px;color:var(--navy)">Elementos de productividad · ${recU.length}</h4>
      ${recU.slice(0,8).map(r=>`<div class="tk"><code>${r.code}</code><div>${esc(r.t)}<small>${esc(r.cat)} · nivel ${esc(r.dom)} · tarea ${esc(r.tareas)}</small></div></div>`).join("")}
      ${recU.length>8?`<p class="mini">… y ${recU.length-8} más</p>`:""}
      <h4 style="margin:12px 0 4px;font-size:12px;color:var(--navy)">Productos de especialidad de los que deriva</h4>
      ${fns.map(f=>`<div class="prodbox" style="margin:6px 0"><b>${esc(f.prod.name)}</b><p>${esc((f.prod.desc||"").slice(0,220))}…</p></div>`).join("")}`
      :`<div class="analog"><b>Lote simulado.</b> Este curso pertenece a una especialidad cuyo paquete funcional no trae datos reales en el prototipo. En la corrida completa aquí aparecen sus funciones, tareas, elementos de productividad y productos, igual que en los cursos de ${esc(S.spec||ESC[0].n)}.</div>`}
    ${c[9].length?`<h4 style="margin:12px 0 4px;font-size:12px;color:var(--navy)">Temas nucleares asociados</h4>
      ${c[9].map(k=>{const t=tnOf(k); return t?`<div class="tk"><code>${k}</code><div>${esc(t[1])}<small>${t[2].length} micro temas · ${esFund(t)?"de fundamento":"de especialidad"}</small></div></div>`:""; }).join("")}`:""}
    <div class="si" style="margin-top:12px"><b>Prueba de coherencia.</b> El curso es coherente con la especialidad si sus funciones son de ella, sus tareas están completas —ninguna partida— y sus elementos de productividad se enseñan aquí como principales y no en otro curso.</div>`);
}
function editarCurso(id){
  const c = CUR.find(x=>x[0]===id);
  const sel = vSel(S.d25.vsel).find(x=>x.id===id);
  if(!c){ // curso del plan vigente
    openModal(sel?sel.n:"Curso", `<div class="ayhero ay-navy"><span class="ayic">✎</span><div><b>${esc(sel?sel.n:"")}</b><small>Curso del plan vigente que la escuela decidió mantener</small></div></div>
      <p class="q">Este curso viene del plan anterior: <b>no tiene ficha</b> en el nuevo diseño todavía.</p>
      <p>Génesys puede construirla con las funciones, tareas y elementos de productividad de ${esc(S.d25.vsel)}, conservando el nombre.</p>
      <div class="gnx"><span class="gi">G</span><div><b>Pedir a Génesys</b><textarea class="ed" id="gxAsk" rows="2" placeholder="Arma la ficha de este curso con las funciones de la especialidad…"></textarea>
        <div class="edrow"><button class="btn sm primary" data-gx="${esc(id)}">Pedir a Génesys</button></div></div></div>`);
    return;
  }
  const fns0 = c[6].map(k=>D.FN[k]).filter(Boolean);
  const ntk = fns0.reduce((a,f)=>a+(f.tasks||[]).length,0);
  openModal(c[0]+" · "+c[1], `<div class="ayhero ay-ok"><span class="ayic">✎</span><div><b>${esc(c[1])}</b><small>Editar la ficha antes de guardar la propuesta</small></div></div>
    <div class="crit"><b>Con qué criterio Génesys armó este curso</b>
      <p>Agrupó ${fns0.length||"varias"} ${fns0.length===1?"función":"funciones"} que comparten elementos de productividad, temas de especialidad y producto, y cortó la familia en el presupuesto de cupos: ${c[4]} créditos, cerca del promedio del plan. ${ntk?`Cubre <b>${ntk} tareas clave</b> completas —ninguna partida— y su producto integrador deriva del producto de especialidad de ${esc(fns0[0].t)}.`:"Su producto integrador deriva del producto de especialidad de su bloque."}</p>
      <div class="bps" style="margin-top:6px">${fns0.map(f=>`<span class="bp ok" title="${esc(f.t)}">${f.c} · ${esc(f.t.slice(0,34))}…</span>`).join("")||'<span class="bp">Lote simulado · sin detalle funcional</span>'}</div>
      <div class="edrow" style="margin-top:8px"><button class="btn sm" data-vel="${esc(c[0])}">Ver todos los insumos del curso</button></div></div>
    <label class="eyebrow">Nombre del curso</label>
    <input class="ed" id="edNom" value="${esc(c[1])}" style="width:100%;margin:4px 0 10px">
    <div class="grid2" style="margin-bottom:10px">
      <div><label class="eyebrow">Créditos</label><input class="ed" id="edCr" type="number" min="1" max="10" value="${c[4]}" style="width:100%;margin-top:4px"></div>
      <div><label class="eyebrow">Hito de progresión</label><select class="ed" id="edHito" style="width:100%;margin-top:4px">${["N1","N2","N3"].map(x=>`<option ${x===c[7]?"selected":""}>${x}</option>`).join("")}</select></div>
    </div>
    <label class="eyebrow">Producto integrador</label>
    <textarea class="ed" id="edProd" rows="2" style="width:100%;margin:4px 0 10px">${esc(c[10])}</textarea>
    <label class="eyebrow">Sumilla · ${c[11].split(/\s+/).length} palabras (60 a 90)</label>
    <textarea class="ed" id="edSum" rows="6" style="width:100%;margin:4px 0 10px">${esc(c[11])}</textarea>
    <div class="gnx"><span class="gi">G</span><div><b>Ajustar con Génesys</b>
      <textarea class="ed" id="gxAsk" rows="2" placeholder="Ej.: acorta la sumilla a 70 palabras y nombra el estándar principal"></textarea>
      <div class="edrow"><button class="btn sm" data-gx="${esc(id)}">Pedir ajuste</button></div></div></div>
    <div class="edrow" style="margin-top:12px"><button class="btn sm mclose">Cancelar</button><button class="btn sm primary" data-gsave="${esc(id)}">Guardar cambios</button></div>`);
}
/* ----- flujo 2.6 ----- */
function gen25(){
  userSays("Abre el paso 2.6 de propuesta de cursos.");
  think(["Cargando paquetes funcionales, recursos y temas nucleares",`Verificando el vínculo recurso–tarea de las ${ESC.length} especialidades`,"Leyendo las cuotas de créditos del 2.5","Calculando el presupuesto de cupos"], ()=>{
    S.d25.gen = true; S.step = 19; S.avail.add("cursos"); S.mode.cursos="pres"; S.mode.cfil="todos"; setTab("cursos");
    const p = presu();
    addMsg("agent", `<p>Presupuesto calculado: ${PL5.ciclos} ciclos × ${PL5.tope} cursos = <b>${p.cupT} cupos</b>; menos ${PL5.generales} de formación general, ${p.cupP} de práctica y ${p.cupE} electivos quedan <b>${p.disp} cupos</b> para ${p.bolsa} créditos: <b>${p.prom.toFixed(2)} créditos por curso</b>.</p><p>El corte del agrupamiento se hace en ese presupuesto, no en un umbral de similitud.</p>${docCard("Propuesta de cursos","Presupuesto de cupos · tope por ciclo","cursos","pres")}`,
      [{label:"Calcular la cohesión y cortar en familias", main:true, fn:coh25}]);
    refresh();
  });
}
function coh25(){
  userSays("Calcula la matriz de cohesión y corta en familias.");
  think(["Matriz de cohesión función × función de toda la escuela","Recursos compartidos 35 % · temas de especialidad 30 % · producto o entregable 20 % · capacidad 15 %","Agrupamiento jerárquico por enlace promedio","Corte en el presupuesto de cupos","Partición por entregable de las familias que pasan de 5 créditos"], ()=>{
    S.d25.coh = true; S.d25.form = true; S.step = 20; S.mode.cursos="lista"; setTab("cursos");
    addMsg("agent", `<p>Formulé <b>${CUR.length} cursos</b>: ${CUR.filter(c=>c[2]==="dimension").length} de dimensión, ${CUR.filter(c=>c[2]==="especialidad").length} de especialidad, ${CUR.filter(c=>c[2]==="electivo").length} electivos avanzados y la práctica preprofesional.</p><p>Ninguna familia parte una tarea clave y cada curso lleva su producto integrador derivado de un producto de especialidad. Clic en el nombre de un curso para ver su ficha de dieciséis campos.</p>${docCard("Lista de cursos",`${CUR.length} cursos · ${CUR.reduce((a,c)=>a+c[4],0)} créditos de oferta`,"cursos","lista")}`,
      [{label:"Validar los cursos por especialidad", main:true, fn:()=>{ S.mode.cursos="valida"; setTab("cursos"); 
          addMsg("agent", `<p>En la columna verde queda lo que <b>finalmente entra al plan</b>. Puede quitar lo que no convenza y sumar desde la propuesta o desde el <b>plan vigente</b>, y cambiar la vista a <b>por competencia</b> cuando quiera decidir a ese nivel.</p>`,
            [{label:"Verificar tributación y prorrateo", main:true, fn:trib25}]); }},
       {label:"Ver los itinerarios electivos", keep:true, fn:()=>{ S.mode.cursos="elec"; setTab("cursos"); }}]);
    refresh();
  });
}
function trib25(){
  userSays("Verifica la tributación y el prorrateo.");
  think(["Matriz curso × función × especialidad","Prorrateo de los cursos troncales entre sus especialidades","Contraste contra las cuotas del 2.5 · tolerancia ±1 crédito","Cobertura: toda función núcleo con curso y toda tarea clave cubierta","Grafo de precedencia por recurso"], ()=>{
    S.step = 21; S.mode.cursos="trib"; setTab("cursos");
    addMsg("agent", `<p>Cobertura completa: las ${ESC.reduce((a,e)=>a+e.fn,0)} funciones de las ${ESC.length} especialidades tributan al menos a un curso y el prorrateo de los troncales queda dentro de ±1 crédito de las cuotas del 2.5.</p><p>El grafo de precedencia por recurso sale sin ciclos: cada recurso se enseña como principal en un solo curso.</p>`,
      [{label:"Validar con el panel CURSOS", main:true, fn:panel25}]);
    refresh();
  });
}
function panel25(){
  userSays("Valida los cursos con el panel.");
  think(["Panel W1–W6 con un docente por especialidad · guardián G","Cohesión, nombrabilidad, autenticidad del producto, tamaño y nivel","Ronda 1 sobre los "+CUR.length+" cursos"], ()=>{
    S.d25.panel = true; S.step = 22; refresh();
    const OBS = (F2.NARR||{}).panelC || [];
    if(!OBS.length){ S.d25.ronda = 1; addMsg("agent", `<p>Ronda 1: los ${CUR.length} cursos quedan conformes.</p>`, [{label:"Guardar la propuesta de cursos", main:true, fn:save25}]); return; }
    addMsg("agent", `<p>Ronda 1: <b>${CUR.length-OBS.length} cursos conformes</b>. ${OBS.length} observaciones del panel:</p><ul>
      ${OBS.map(o=>`<li><b>${o.cod}</b> ${esc(o.obs)}</li>`).join("")}</ul>`,
      [{label:"Corregir y correr la ronda 2", main:true, fn:()=>{
        userSays("Corrige las observaciones."); think([...OBS.map(o=>o.fix),"Ronda 2 solo sobre los cursos observados"], ()=>{
          S.d25.ronda = 2; OBS.forEach(o=>{ const c=CUR.find(x=>x[0]===o.cod); if(!c) return; if(o.nombre) c[1]=o.nombre; if(o.cr) c[4]=o.cr; }); refresh();
          addMsg("agent", `<p>Ronda 2 cerrada: los ${CUR.length} cursos quedan conformes (I-CVI ≥ 0,83 en cohesión y producto, nombrabilidad 1,00).</p>`,
            [{label:"Guardar la propuesta de cursos", main:true, fn:save25}]);
        }); }},
       {label:"Aceptar con las observaciones registradas", keep:true, fn:()=>toast("Quedarían marcados «a reformular» y pasarían así al paso 3.3.")}]);
  });
}
function save25(){
  if(S.d25.saved) return;
  if(S.step < 22) S.step = 22;
  userSays("Guarda la propuesta de cursos.");
  think(["Registrando la lista y la ficha de cada curso","Registrando la matriz de tributación y el prorrateo","Registrando itinerarios electivos y grafo de precedencia","Actualizando cada competencia con sus códigos de curso"], ()=>{
    S.d25.saved = true; S.step = 24; refresh();
    toast("Paso 2.6 guardado · propuesta de cursos de la escuela");
    addMsg("agent", `<p>Guardado. La Fase 2 queda cerrada: de las funciones profesionales del mercado a <b>${CUR.length} cursos</b> con su ficha, su tributación y su nivel.</p><p>Sigue la <b>Fase 3</b>: el paso 3.2 pone la progresión de los temas, el 3.3 diseña cada curso y el 4.1 los ubica en ciclos.</p>`,
      [{label:"Ver la bandeja de competencias", main:true, keep:true, fn:()=>{ S.mode.disc="band"; setTab("disc"); }}]);
  });
}

/* ---------- helpers de edición ---------- */

function propBox(key,label,text,what){
  const ed = S.edit===key, lk = S.c31.saved;
  return `<section class="new"><div class="eyebrow">${label}${lk?"":`<button class="edbtn" data-edit="${key}">✎ Editar</button><button class="edbtn" data-ask="${esc(what)}">💬 Pedir a Génesys</button>`}</div>
    ${ed?`<textarea class="ta-ed" id="edArea" rows="${key.startsWith("o")||key==="op"?10:5}">${esc(text)}</textarea>
      <div class="edrow"><button class="btn sm" data-edcancel="1">Cancelar</button><button class="btn sm primary" data-edsave="${key}">Aplicar</button></div>`
      :`<p>${esc(text)}</p>`}</section>`;
}
function viewCompetencia(){
  const m = S.mode.competencia;
  const ctx = `<div class="ctxbar"><span class="cx cmp">Competencia</span><b>${esc(D.comp)}</b><span class="cx esp">Especialidad</span><b>${esc(S.spec||ESC[0].n)}</b></div>`;
  const head = `${ctx}<div class="eyebrow">Paso 2.2c · Validación de la competencia de la especialidad</div>
    <h2>${esc(D.comp)}</h2>
    <p class="mini" style="margin:-2px 0 0;font-size:13px;color:var(--ink-2)">Validación de la competencia y de sus ${CAPS.length} capacidades · v1.1 → v1.2</p><div class="rule"></div>`;
  if(m==="def"){
    const crit = [["Específica","Nombra el proceso, las acciones y los ámbitos de la especialidad"],["Medible","Declara criterios y evidencias por capacidad"],["Alcanzable","Coherente con los niveles de confianza 3–4 al egreso"],["Relevante","Sustentada en 12 funciones validadas y su pertinencia"],["Coherente con estándares","Incluye los estándares y tecnologías validados en 2.2"]];
    return `<div class="sheet">${head}
      <div class="toolbar"><div class="stat"><span>Cambios <b>${COMP.cambios.length}</b></span><span>Validación <b>${S.c31.val?"I-CVI 1,00":"—"}</b></span></div><div class="grow"></div>
        <button class="btn sm" id="tbVal31" ${S.c31.saved?"disabled":""}>${!S.c31.val?"Validar competencia":"Dar por validada"}</button>
        <button class="btn sm primary" id="tbSave31" ${S.step===8?"":"disabled"}>${S.c31.saved?"Validación guardada":"Guardar validación"}</button></div>
      <h3>Competencia · definición conceptual</h3>
      <div class="cmp">
        <section class="compdef"><div class="eyebrow">Vigente v1.1</div><p>${esc(COMP.conc)}</p></section>
        ${propBox("conc","Propuesta v1.2",concText(),"la definición conceptual de la competencia")}
      </div>
      <h3 style="margin-top:14px">Competencia · definición operacional</h3>
      <div class="cmp">
        <section class="compdef"><div class="eyebrow">Vigente v1.1</div><p>${esc(COMP.op11)}</p></section>
        ${propBox("op","Propuesta v1.2 "+(S.c31.saved?'<span class="tag t-ok">Guardada</span>':""),opText(),"la definición operacional de la competencia")}
      </div>
      <h3 style="margin-top:16px">Qué cambia y por qué</h3>
      <div class="tw"><table><thead><tr><th style="width:200px">Aspecto</th><th>Cambio</th><th style="width:150px">Estado</th></tr></thead><tbody>
      ${COMP.cambios.map((c,i)=>{ const last=i===COMP.cambios.length-1; const st = !S.c31.val ? '<span class="tag t-prop">Por validar</span>' : last ? (S.c31.com ? `<span class="tag t-ok">${S.c31.com==="drop"?"Retirado":"Mantenido"}</span>` : `<span style="display:flex;gap:4px;flex-wrap:wrap"><button class="btn sm" data-com="drop">Retirar</button><button class="btn sm" data-com="keep">Mantener</button></span>`) : '<span class="tag t-ok">Conforme</span>'; return `<tr><td style="color:var(--ink)">${c[0]}</td><td>${c[1]}</td><td>${st}</td></tr>`; }).join("")}
      </tbody></table></div>
      <h3 style="margin-top:16px">Capacidades · actualización y validación</h3>
      <p class="note">La denominación de cada capacidad se conserva. Se validan sus dos definiciones: la conceptual (qué es, breve) y la operacional, que incorpora los métodos y estándares de las funciones que la movilizan.</p>
      ${CAPS.map(c=>{ const k=c[0], cs=S.c31.cap[k], u=COMP.caps12[k]; const lk=S.step!==7||!S.c31.val; return `<div class="capd st-${cs}">
        <div class="caph" style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><span style="flex:1"><b>${k}</b> <strong>${c[1]}</strong> · ${c[2]} <span class="mini">· funciones principales: ${u[2]}</span></span>
          <span class="tag ${cs==="ok"?"t-ok":cs==="rev"?"t-rev":"t-prop"}">${cs==="ok"?"Confirmada":cs==="rev"?"Pide ajuste":"Por confirmar"}</span>
          <span class="acts sm"><button class="ib ${cs==="ok"?"on-ok":""}" data-capv="ok" data-id="${k}" aria-label="Confirmar ${k}" ${lk?"disabled":""}>✓</button><button class="ib ${cs==="rev"?"on-bad":""}" data-capv="rev" data-id="${k}" aria-label="Pedir ajuste ${k}" ${lk?"disabled":""}>↺</button></span></div>
        <div class="cmp"><section><div class="eyebrow">Definición conceptual · referencia v1.1</div><p>${esc(COMP.caps[k][0])}</p></section>
          ${propBox("c"+k,"Definición conceptual · propuesta v1.2",cTxt(k,"c"),`la definición conceptual de ${k}`)}</div>
        <div class="cmp" style="margin-top:8px"><section><div class="eyebrow">Definición operacional · referencia v1.1</div><p>${esc(COMP.caps[k][1])}</p></section>
          ${propBox("o"+k,"Definición operacional · propuesta v1.2",cTxt(k,"o"),`la definición operacional de ${k}`)}</div>
        <p class="mini" style="margin-top:6px"><b>Qué cambia:</b> ${u[1]}</p></div>`; }).join("")}
      <h3 style="margin-top:16px">Criterios de validación</h3>
      <div class="grid2">${crit.map(c=>`<div class="kv"><div class="eyebrow">${c[0]}</div><p>${c[1]}</p><p class="mini">${S.c31.val?"✓ Conforme":"Pendiente"}</p></div>`).join("")}</div>
    </div>`;
  }
  const el = (k,label,cur,nw,hint) => `<div class="velem">
      <h3>${label}${S.c32.saved?"":`<button class="edbtn" data-ask="${k==="prop"?"la propuesta de valor":"la promesa de valor"}">💬 Pedir a Génesys</button>`}</h3><p class="mini">${hint}${S.c32.saved?"":" · clic en el texto de la propuesta v1.2 para editarlo"}</p>
      <div class="cmp">
        <label class="opt ${S.c32.pick[k]==="old"?"sel":""}"><input type="radio" name="pk-${k}" data-pick="${k}" value="old" ${S.c32.pick[k]==="old"?"checked":""} ${S.c32.saved?"disabled":""}> <span class="eyebrow">Vigente · v1.1</span><p>${esc(cur)}</p></label>
        <label class="opt new ${S.c32.pick[k]==="new"?"sel":""}"><input type="radio" name="pk-${k}" data-pick="${k}" value="new" ${S.c32.pick[k]==="new"?"checked":""} ${S.c32.saved?"disabled":""}> <span class="eyebrow">Propuesta · v1.2 ${S.c32.saved?"":"· clic en el texto para editar"}</span>
          <div class="vtext ${k==="prom"?"vprom":""}" data-vk="${k}">${S.c32.editing===k?`<textarea class="ta-ed" id="vEd" rows="${k==="prop"?9:3}">${esc(S.c32[k])}</textarea><div style="display:flex;gap:6px;justify-content:flex-end;margin-top:6px"><button class="btn sm" data-vcancel="1">Cancelar</button><button class="btn sm primary" data-vsave="${k}">Aplicar</button></div>`:`<p>${esc(S.c32[k])}</p>`}</div></label>
      </div></div>`;
  const crit = [["Propuesta","Le habla al estudiante en segunda persona"],["Propuesta","Abre con un gancho real, sin preámbulo"],["Propuesta","Sus atributos se sostienen con las funciones validadas"],["Propuesta","Cierra con lo que el oficio deja en la vida de otros"],["Promesa","Empieza con un verbo"],["Promesa","Es específica de esta competencia y memorable"]];
  return `<div class="sheet">${head}
    <div class="toolbar"><div class="grow"></div><button class="btn sm primary" id="tbSave32" ${S.step===11?"":"disabled"}>${S.c32.saved?"Propuesta guardada":"Guardar propuesta de valor"}</button></div>
    ${el("prop","1 · Propuesta de valor",COMP.prop11,COMP.prop12,"Texto dirigido al estudiante: qué aprende, dónde lo practica y qué huella deja.")}
    ${el("prom","2 · Promesa de valor",COMP.prom11,COMP.prom12,"Frase breve y publicable que resume el compromiso de la especialidad.")}
    <h3 style="margin-top:16px">Criterios de calidad</h3>
    <div class="tw"><table><thead><tr><th style="width:120px">Elemento</th><th>Criterio</th><th style="width:110px">Resultado</th></tr></thead><tbody>${crit.map(c=>`<tr><td>${c[0]}</td><td style="color:var(--ink)">${c[1]}</td><td>${S.c32.val?'<span class="tag t-ok">Cumple</span>':'<span class="tag t-prop">Pendiente</span>'}</td></tr>`).join("")}</tbody></table></div>
  </div>`;
}

/* ---------- Composer ---------- */
function send(){
  const ta = $("#prompt"); const t = ta.value.trim(); if(!t || S.busy) return;
  ta.value=""; ta.style.height="";
  const low = t.toLowerCase();
  if(S.step===0 && /func|genera/.test(low)) return gen21();
  if(S.step===2 && /guard/.test(low)) return save21();
  if(S.step===3 && /recurs|genera/.test(low)) return gen22();
  if(S.step===5 && /guard/.test(low)) return save22();
  userSays(t);
  think(["Interpretando la instrucción","Actualizando el documento"], ()=>{
    addMsg("agent", `<p>Instrucción registrada. En el producto, Génesys aplicaría el cambio sobre el documento abierto y marcaría los bloques modificados para recalificarlos.</p>`);
  });
}
$("#sendBtn").onclick = send;
$("#prompt").addEventListener("keydown", e=>{ if(e.key==="Enter" && !e.shiftKey){ e.preventDefault(); send(); }});
$("#prompt").addEventListener("input", e=>{ e.target.style.height="auto"; e.target.style.height=Math.min(e.target.scrollHeight,120)+"px"; });

/* ---------- Documento y panel lateral ---------- */
const DOCS = [["entrada","Cartera de especialidades (Fase 1)"],["paquete","Mapa de Funciones Profesionales"],["informe","Informe ejecutivo 2.1"],["recursos","Elementos de Productividad de Funciones"],["competencia","Validación de la competencia"],["disc","Derivación disciplinar (escuela)"],["pesos","Pesos y créditos (escuela)"],["cursos","Propuesta de cursos (escuela)"],["ficha","Ficha técnica de la competencia"],["refs","Referencias verificables"]];
function setTab(t){
  if(!S.avail.has(t)) return;
  S.tab=t; closeDrawer();
  if(innerWidth<=1180) $("#work").classList.remove("railon");
  renderPanel(); renderRail();
  $("#pBody").scrollTop = 0;
}
$("#docSel").addEventListener("change", e=>setTab(e.target.value));
$("#homeBtn").onclick = ()=>setTab("entrada");
$("#navPrev").onclick = ()=>navGo(-1);
$("#pBody").addEventListener("dragstart", e=>{ const r=e.target.closest("[data-drag],[data-dragp]"); if(!r) return;
  r.classList.add("dragging");
  e.dataTransfer.setData("text/plain", r.dataset.drag ? "C|"+r.dataset.drag : "P|"+r.dataset.dragp);
  e.dataTransfer.effectAllowed="copy"; });
$("#pBody").addEventListener("dragend", e=>{ const r=e.target.closest(".crow"); if(r) r.classList.remove("dragging"); });
$("#pBody").addEventListener("dragover", e=>{ const d=e.target.closest(".cb2.drop"); if(!d) return; e.preventDefault(); d.classList.add("over"); });
$("#pBody").addEventListener("dragleave", e=>{ const d=e.target.closest(".cb2.drop"); if(d) d.classList.remove("over"); });
$("#pBody").addEventListener("drop", e=>{ const d=e.target.closest(".cb2.drop"); if(!d) return; e.preventDefault(); d.classList.remove("over");
  const raw=e.dataTransfer.getData("text/plain"); if(!raw) return;
  const [t,v]=raw.split("|").length>2 ? [raw[0], raw.slice(2)] : [raw.split("|")[0], raw.split("|").slice(1).join("|")];
  const sel = vSel(S.d25.vsel);
  if(t==="C"){ const c=CUR.find(x=>x[0]===v); if(c && !sel.some(s=>s.id===c[0])){ sel.push({id:c[0],n:c[1],cr:c[4],src:"ag"}); toast(`${c[1]} → selección final`); } }
  else { const [n,cr]=v.split("|"); if(!sel.some(s=>s.id==="PV-"+n)){ sel.push({id:"PV-"+n,n,cr:+cr,src:"pl"}); toast(`${n} → selección final`); } }
  renderPanel(); });
$("#navNext").onclick = ()=>navGo(1);
$("#pBody").addEventListener("click", e=>{
  const tn=e.target.closest("[data-tn]"); if(tn){ const k=tn.dataset.tn; S.d23.open[k]=!S.d23.open[k]; if(!S.d23.open[k]) delete S.d23.open[k]; renderPanel(); return; }
  const vs=e.target.closest("[data-vsel]"); if(vs){ S.d25.vsel=vs.dataset.vsel; renderPanel(); return; }
  if(e.target.closest("#cohAsig")){ asignarAgentes(); return; }
  { const c=e.target.closest("[data-coh]"); if(c){ verDictamen(c.dataset.coh); return; } }
  if(e.target.closest("#tnTog")){ S.te.show=!S.te.show; renderPanel(); return; }
  if(e.target.closest("#teAll")){ verBancoTE(); return; }
  { const t=e.target.closest("[data-teo]"); if(t){ const k=t.dataset.teo; S.te.open[k]=!S.te.open[k]; renderPanel(); return; } }
  if(e.target.closest("#sumTog")){ S.d25.sum=!S.d25.sum; renderPanel(); return; }
  if(e.target.closest("#ordCr")){ vSel(S.d25.vsel).sort((a,b)=>b.cr-a.cr); renderPanel(); toast("Ordenados por créditos, de mayor a menor"); return; }
  if(e.target.closest("#verPlan")){ verPlanVigente(); return; }
  const vel=e.target.closest("[data-vel]"); if(vel){ closeModal(); verElementos(vel.dataset.vel); return; }
  const ved=e.target.closest("[data-ved]"); if(ved){ editarCurso(ved.dataset.ved); return; }
  const vd=e.target.closest("[data-vdel]"); if(vd){ const id=vd.dataset.vdel; S.d25.pick[S.d25.vsel]=vSel(S.d25.vsel).filter(c=>c.id!==id); renderPanel(); return; }
  const va=e.target.closest("[data-vadd]"); if(va){ const c=CUR.find(x=>x[0]===va.dataset.vadd); if(c){ vSel(S.d25.vsel).push({id:c[0],n:c[1],cr:c[4],src:"ag"}); renderPanel(); } return; }
  const vp=e.target.closest("[data-vaddp]"); if(vp){ const [n,cr]=vp.dataset.vaddp.split("|"); vSel(S.d25.vsel).push({id:"PV-"+n,n,cr:+cr,src:"pl"}); renderPanel(); return; }
  const gx=e.target.closest("[data-gx]"); if(gx){ const q=($("#gxAsk")||{}).value||"";
    const c=CUR.find(x=>x[0]===gx.dataset.gx); closeModal();
    userSays(q||`Ajusta el curso ${gx.dataset.gx}.`);
    think(["Leyendo la ficha del curso y sus funciones","Revisando el producto integrador y su origen","Reescribiendo la sumilla dentro del rango de palabras"], ()=>{
      if(c){ c[11] = c[11].replace(/^Curso/, "Curso") ; }
      addMsg("agent", `<p>Ajusté <b>${esc(c?c[1]:gx.dataset.gx)}</b> según su indicación. Revise la ficha: el nombre, el producto integrador y la sumilla son los tres campos que este paso redacta; lo demás se copia con su código de origen y no se toca aquí.</p>`,
        [{label:"Abrir la ficha del curso", main:true, keep:true, fn:()=>editarCurso(gx.dataset.gx)}]);
    });
    return; }
  const gs=e.target.closest("[data-gsave]"); if(gs){ const c=CUR.find(x=>x[0]===gs.dataset.gsave);
    if(c){ const n=$("#edNom").value.trim(); if(n) c[1]=n; c[4]=+$("#edCr").value||c[4]; c[7]=$("#edHito").value;
      c[10]=$("#edProd").value; c[11]=$("#edSum").value;
      const s=vSel(S.d25.vsel).find(x=>x.id===c[0]); if(s){ s.n=c[1]; s.cr=c[4]; } }
    closeModal(); renderPanel(); toast("Ficha del curso actualizada"); return; }
  const vk=e.target.closest("[data-vok]"); if(vk){ const k=vk.dataset.vok; S.d25.vok[k]=!S.d25.vok[k];
    toast(S.d25.vok[k]?`Cursos validados · ${k}`:`${k} abierta de nuevo para editar`); renderPanel(); return; }
  const cu=e.target.closest("[data-cur]"); if(cu){ const k=cu.dataset.cur; S.d25.open[k]=!S.d25.open[k]; renderPanel(); return; }
  const gop=e.target.closest("[data-gop]"); if(gop){ const k=gop.dataset.gop; S.d23.gopen[k]=(S.d23.gopen[k]===false); renderPanel(); return; }
  const pco=e.target.closest("[data-pcop]"); if(pco){ S.d24.bopen=S.d24.bopen||{}; const k=pco.dataset.pcop; S.d24.bopen[k]=!S.d24.bopen[k]; renderPanel(); return; }
  const bop=e.target.closest("[data-bop]"); if(bop){ const k=bop.dataset.bop; S.d23.bopen[k]=!S.d23.bopen[k]; renderPanel(); return; }
  const cop=e.target.closest("[data-cop]"); if(cop){ const k=cop.dataset.cop; S.d23.copen[k]=(S.d23.copen[k]===false); renderPanel(); return; }
  if(e.target.closest("#gxTema")){ pedirTema(); return; }
  const dm=e.target.closest("[data-dim]"); if(dm){ const k=dm.dataset.dim; S.d23.dopen[k]=(S.d23.dopen[k]===false); renderPanel(); return; }
  if(e.target.closest("#tnAll")){ if(Object.keys(S.d23.open).length) S.d23.open={}; else TN.forEach(t=>{S.d23.open[t[0]]=true;}); renderPanel(); return; }
  const qd=e.target.closest("[data-qd]"); if(qd){ abrirCuadrante(qd.dataset.qd); return; }
  const pt=e.target.closest("[data-pt]"); if(pt){ const e2=ESC.find(x=>x.k===pt.dataset.pt);
    const q=(()=>{ const ds=ESC.map(x=>distE(x.k)), ps=ESC.map(x=>x.pot), mx=(Math.max(...ds)+Math.min(...ds))/2, my=(Math.max(...ps)+Math.min(...ps))/2;
      const alto=distE(e2.k)>=mx, pot=e2.pot>=my;
      return alto&&pot?["Núcleo de la carrera","ok"]:!alto&&pot?["Oportunidad para certificar","gold"]:alto&&!pot?["Formación costosa de baja demanda","navy"]:["Candidata a revisión","bad"]; })();
    const ce=certOf(e2.k);
    openModal(e2.k+" · "+e2.n, `<div class="ayhero ay-${q[1]}"><span class="ayic">${e2.k}</span><div><b>${esc(e2.n)}</b><small>${q[0]}</small></div></div>
      <p class="q"><b>Peso formativo ${distE(e2.k).toFixed(1)} %</b> del plan de especialidad · <b>potencial de mercado ${e2.pot}</b> de 100 · IPC ${IPC(e2.k).toFixed(0)}.</p>
      <p>Exige ${distE(e2.k)>=20?"mucha":distE(e2.k)>=12?"formación media":"poca"} formación —${e2.fn} funciones, criticidad ${IND[e2.k].C} y habilitación ${IND[e2.k].H} sobre 100— y el mercado la ${e2.pot>=80?"pide con fuerza":e2.pot>=70?"pide con constancia":"pide poco"}.</p>
      <div class="${ce[1]==="t-ok"?"si":ce[1]==="t-prop"?"analog":"ko"}"><b>¿Certificar? ${ce[0]}.</b> ${ce[2]}</div>
      <p class="mini">Con ${(S.d24.corte||S.d24.saved)?calc24().esp[e2.k]+" créditos obligatorios asignados":"sus créditos aún por asignar"}.</p>`);
    return; }
  const ay=e.target.closest("[data-ay]"); if(ay){ ayOpen(ay.dataset.ay); return; }
  if(e.target.closest("#toggleCrit")){ S.d24.crit=!S.d24.crit; renderPanel(); return; }
  if(e.target.closest("#dimClear")){ S.d23.sel=[]; renderPanel(); return; }
  if(e.target.closest("#dimMerge")){ mergeDim(); return; }
});
$("#pBody").addEventListener("change", e=>{
  const t=e.target;
  if(t.dataset.dsel){ const k=t.dataset.dsel; S.d23.sel = t.checked ? [...S.d23.sel,k] : S.d23.sel.filter(x=>x!==k); renderPanel(); return; }
  if(t.dataset.move){ moveDim(t.dataset.move, t.value); return; }
  if(t.id==="inESPEC"){ S.d24.ESPEC=+t.value;
    if(S.d24.elAuto!==false) S.d24.EL = Math.min(PLAN.bEL[1], Math.max(PLAN.bEL[0], Math.round(S.d24.ESPEC*PLAN.elRatio)));
    renderPanel(); return; }
  if(t.id==="inEL"){ S.d24.EL=+t.value; S.d24.elAuto=false; renderPanel(); return; }
});
function moveDim(d, destino){
  const orig = cdDe(d); if(!orig) return;
  if(destino==="new"){
    const cod = "C"+(4+S.d23.CD.length);
    const dm = dimDe(d);
    S.d23.CD.push([cod, "Fundamenta "+dm[1].toLowerCase(), ["Fundamenta","los saberes de "+dm[1].toLowerCase(),"en las situaciones de práctica que la exigen","para sostener con evidencia la decisión profesional"], [d]]);
    orig[3] = orig[3].filter(x=>x!==d); renderPanel();
    toast(`${d} pasa a una competencia nueva: ${cod}`); return;
  }
  if(destino===orig[0]) return;
  const dest = S.d23.CD.find(c=>c[0]===destino);
  if(dest[3].length>=5){ toast("Máximo 5 dimensiones por competencia de contenido."); renderPanel(); return; }
  orig[3] = orig[3].filter(x=>x!==d); dest[3].push(d);
  if(!orig[3].length) S.d23.CD = S.d23.CD.filter(c=>c[0]!==orig[0]);
  renderPanel(); toast(`${d} movida a ${destino}`);
}
function mergeDim(){
  const sel = S.d23.sel.slice(); if(sel.length<2) return;
  const base = S.d23.DIM.find(d=>d[0]===sel[0]);
  const otras = sel.slice(1);
  openModal("Integrar dimensiones", `<p>Se integran <b>${sel.join(" + ")}</b> en una sola dimensión. Sus temas nucleares pasan a la dimensión resultante y el reparto de créditos del paso 2.5 se recorre.</p>
    <p class="mini">Prueba del objeto: solo integre dimensiones cuyos temas actúen sobre el mismo objeto de conocimiento.</p>
    <label class="eyebrow" style="display:block;margin-top:10px">Nombre de la dimensión integrada</label>
    <input class="ed" id="mgName" value="${esc(base[1])}" style="width:100%;margin-top:4px">
    <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px"><button class="btn sm mclose">Cancelar</button><button class="btn sm primary" id="mgOk">Integrar</button></div>`);
  $("#mgOk").onclick = ()=>{
    const nom = $("#mgName").value.trim() || base[1];
    TN.forEach(t=>{ if(otras.includes(t[6])){ t[6]=base[0]; t[7]="apoyo"; } });
    base[1] = nom;
    S.d23.DIM = S.d23.DIM.filter(d=>!otras.includes(d[0]));
    S.d23.CD.forEach(c=>{ c[3] = [...new Set(c[3].filter(k=>!otras.includes(k)))]; });
    if(!cdDe(base[0])) S.d23.CD[0][3].push(base[0]);
    S.d23.CD = S.d23.CD.filter(c=>c[3].length);
    S.d23.sel = []; closeModal(); renderPanel();
    toast(`${sel.join(" + ")} integradas en ${base[0]} · ${nom}`);
  };
}
$("#pBody").addEventListener("click", e=>{
  if(!e.target.closest("#resetSpec")) return;
  openModal("Elegir otra especialidad", `<p>Se reinicia el recorrido de la Fase 2 para trabajar otra especialidad de la cartera. Lo guardado en el Proyecto no se pierde; se pierde el avance no guardado de esta sesión.</p>
    <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px"><button class="btn sm mclose">Cancelar</button><button class="btn sm primary" id="resetOk">Reiniciar y elegir</button></div>`);
  $("#resetOk").onclick = ()=>location.reload();
});

function renderRail(){
  const prev = S.spec ? '' : '<li class="now"><span class="ck"></span><span class="lb">Seleccionar especialidad</span></li>';
  const total=PHASES.reduce((n,p)=>n+p.subs.length,0);
  $("#progCount").textContent = `${Math.min(S.step,total)}/${total}`;
  $("#railProg").innerHTML = prev + RMAP.map(r=>{
    const p = r.ph!==null ? PHASES[r.ph] : null, base = r.ph!==null ? PBASE[r.ph] : null;
    const done = r.gate ? S.step>=PBASE[2] : !!p && S.step>=base+p.subs.length;
    const now = !!S.spec && !!p && S.step>=base && !done;
    const subs = p ? p.subs : (r.subs||[]);
    return `<li class="${done?'done':now?'now':'future'}">
      <span class="ck" aria-hidden="true"></span>
      <div><span class="lb">${r.gate?'':`${r.c} `}${esc(r.n)}</span>
      <div class="rail-moments">${subs.map((s,i)=>{ if(!p) return `<span class="moment wait">${esc(s)}</span>`;
        const k=base+i, reach=!!S.spec&&k<=S.step, status=k<S.step?'ok':reach&&k===S.step?'current':'wait';
        return reach?`<button type="button" class="moment ${status}" data-go="${k}" ${status==='current'?'aria-current="step"':''}>${esc(s)}</button>`:`<span class="moment wait">${esc(s)}</span>`;
      }).join('')}</div></div></li>`;
  }).join("");
  const item = (k,n,ic,v,mode,cur) => `<li><button data-out="${k}" ${mode?`data-mode="${mode}"`:""} aria-current="${!!cur}"><span class="fi">${ic}</span><span class="nm">${n}</span><span class="vb ${v[0]?'ok':''}">${v[1]}</span></button></li>`;
  const o = [], P = S.tab==="paquete";
  if(S.avail.has("paquete")) o.push(item("paquete","Mapa de Funciones Profesionales","TAB",[S.saved.p21,S.saved.p21?"v1":"borrador"],"per",P&&S.mode.paquete==="per"));
  if(S.saved.p21) o.push(item("paquete","Matriz Funcional de Capacidades","TAB",[true,"v1"],"asig",P&&S.mode.paquete==="asig"));
  if(S.avail.has("paquete")) o.push(item("paquete","Matriz de Productos","TAB",[S.saved.p21,S.saved.p21?"v1":"borrador"],"prod",P&&S.mode.paquete==="prod"));
  if(S.avail.has("recursos")) o.push(item("recursos","Matriz de Elementos de Productividad","TAB",[S.saved.p22,S.saved.p22?"v4":"borrador"],"fn",S.tab==="recursos"));
  if(S.spec) o.push(item("competencia","Competencia validada · Fase 1","DOC",[S.c31.saved,S.c31.saved?"v1.2":"borrador"],"def",S.tab==="competencia"&&S.mode.competencia==="def"));
  if(S.d23.temas) o.push(item("disc","Banco de temas nucleares","TAB",[S.d23.saved,S.d23.saved?"v1":"borrador"],"temas",S.tab==="disc"&&S.mode.disc==="temas"));
  if(S.d23.dim) o.push(item("disc","Dimensiones del dominio disciplinar","TAB",[S.d23.saved,S.d23.saved?"v1":"borrador"],"dim",S.tab==="disc"&&S.mode.disc==="dim"));
  if(S.d23.comp) o.push(item("disc","Competencia disciplinar y fund(e)","DOC",[S.d23.saved,S.d23.saved?"v1":"borrador"],"comp",S.tab==="disc"&&S.mode.disc==="comp"));
  if(S.d23.comp) o.push(item("disc","Bandeja de competencias","DOC",[S.d23.saved,S.d23.saved?"v1":"borrador"],"band",S.tab==="disc"&&S.mode.disc==="band"));
  if(S.d24.pesos) o.push(item("pesos","Pesos y distribución","TAB",[S.d24.saved,S.d24.saved?"v1":"borrador"],"dist",S.tab==="pesos"&&S.mode.pesos==="dist"));
  if(S.d24.corte) o.push(item("pesos","Créditos por dimensión y especialidad","TAB",[S.d24.saved,S.d24.saved?"v1":"borrador"],"cred",S.tab==="pesos"&&S.mode.pesos==="cred"));
  if(S.d25.form) o.push(item("cursos","Lista de cursos de la escuela","TAB",[S.d25.saved,S.d25.saved?"v1":"borrador"],"lista",S.tab==="cursos"&&S.mode.cursos==="lista"));
  if(S.d25.form) o.push(item("cursos","Itinerarios electivos y práctica","DOC",[S.d25.saved,S.d25.saved?"v1":"borrador"],"elec",S.tab==="cursos"&&S.mode.cursos==="elec"));
  $("#outCount").textContent = o.length;
  $("#railOut").innerHTML = o.length ? o.join("") : `<li style="font-size:12.5px;color:var(--ink-3);padding:4px 0">Aún no hay salidas.</li>`;
  $("#railSrc").innerHTML = [
    item("entrada","Cartera de especialidades · Fase 1","TAB",[true,String(espApr().length)],null,S.tab==="entrada"),
    item("ficha","Ficha técnica de la competencia "+((escK(S.k)||ESC[0]).c),"DOC",[true,"F1"],null,S.tab==="ficha"),
    item("refs","Referencias de pertinencia","REF",[false,String(D.refs.length)],"per",S.tab==="refs"&&S.mode.refs==="per"),
    item("refs","Referencias de recursos","REF",[false,String(D.rrefs.length)],"rec",S.tab==="refs"&&S.mode.refs==="rec"),
    ...(D.fuentesLista||[]).map(([n,ic,u])=>`<li><button data-src="${esc(u||"")}" title="${esc(u||n)}"><span class="fi">${esc(ic)}</span><span class="nm">${esc(n)}</span><span class="vb"></span></button></li>`)
  ].join("");
}
$("#rail").addEventListener("click", e=>{
  const g=e.target.closest("[data-go]"); if(g){ goStep(+g.dataset.go); return; }
  const o=e.target.closest("[data-out]"); if(o){ if(o.dataset.mode) S.mode[o.dataset.out]=o.dataset.mode; setTab(o.dataset.out); return; }
  const sr=e.target.closest("[data-src]"); if(sr){ if(sr.dataset.src) window.open(sr.dataset.src,"_blank","noopener"); return; }
  const h=e.target.closest("[data-sec]"); if(h){ const on=h.getAttribute("aria-expanded")!=="true"; h.setAttribute("aria-expanded",on); h.nextElementSibling.hidden=!on; }
});
function toggleRail(){
  const w=$("#work");
  if(innerWidth<=1180){ const on=!w.classList.contains("railon"); w.classList.toggle("railon",on); $("#railBtn").setAttribute("aria-pressed",on); return; }
  const on=w.classList.toggle("norail"); $("#railBtn").setAttribute("aria-pressed",!on);
}
$("#railBtn").onclick=()=>{ toggleRail(); setTimeout(fitDet,60); };
$("#railClose").onclick=()=>{ toggleRail(); setTimeout(fitDet,60); };
$("#stepline").onclick=()=>{ const w=$("#work"); if(innerWidth<=1180){ if(!w.classList.contains("railon")) toggleRail(); } else if(w.classList.contains("norail")) toggleRail(); };
if(innerWidth<=1180) $("#railBtn").setAttribute("aria-pressed","false");

function topAction(){
  if(S.step<=2) return ["Guardar paso 2.1", !S.saved.p21, save21];
  if(S.step<=6) return hay("2.2") ? ["Guardar 2.2 y temas nucleares", !S.saved.p22, save22] : ["2.1 guardado · 2.2 por generar", false, ()=>{}];
  if(S.step<=12) return ["Guardar derivación disciplinar", !S.d23.saved, save23];
  if(S.step<=17) return ["Guardar pesos y créditos", !S.d24.saved, save24];
  if(S.step<=22) return ["Guardar propuesta de cursos", !S.d25.saved, save25];
  return ["Todos los pasos guardados", false, ()=>{}];
}
function refresh(){
  const ag=$("#agSpec"); if(ag) ag.textContent = S.spec ? "Especialidad: "+S.spec : "Especialidad: por elegir en la cartera";
  renderStepper(); renderPanel();
  const btnSave = $("#saveTop");
  if(btnSave){ const [lab,en] = topAction(); btnSave.textContent = lab; btnSave.disabled = !en; }
  const parts = [S.saved.p21&&"2.1 v1", S.saved.p22&&"2.2 v4", S.c31.saved&&"competencia v1.2", S.d23.saved&&"2.4 v1", S.d24.saved&&"2.5 v1", S.d25.saved&&"2.6 v1"].filter(Boolean);
  const vp = $("#verPill");
  if(vp){
    vp.textContent = parts.length ? "Guardado: " + parts.join(" · ") : "Borrador · sin guardar";
    vp.classList.toggle("saved", parts.length>0);
  }
}
{ const btnSave = $("#saveTop"); if(btnSave) btnSave.onclick = ()=>topAction()[2](); }

function renderPanel(){
  const sub = {
    entrada: S.spec ? `Fase 1 · cartera aprobada · en trabajo: ${S.spec}` : "Fase 1 · paso 1.1 · cartera aprobada por la Escuela",
    ficha: "Fuente · Fase 1 · competencia congelada",
    paquete: S.saved.p21?"Guardado en el Proyecto y la base de datos · v1":S.delphi?`e-Delphi único · ronda ${S.round} · 6 expertos por especialidad`:"Propuesta de Génesys · pendiente de validación",
    informe:`${ESCUELA}-${(escK(S.k)||{}).c}-F2-P21 · v1.0 · revisado por panel de expertos (agentes)`,
    recursos: S.saved.p22?"Guardada · v4 A3":S.recPanel?"Validación abreviada · X1 · X4 · X6 · ronda 1":"Propuesta de Génesys · pendiente de validación",
    refs:"Fuente · enlaces y estado de verificación",
    competencia: "Fase 1 · competencia congelada · Ficha Técnica v1.2",
    disc: S.d23.saved?"Guardado · escuela NUT · v1":`Paso 2.4 · escuela · ${ESC.length} especialidades · ronda ${S.d23.ronda}`,
    pesos: S.d24.saved?"Guardado · escuela NUT · v1":`Paso 2.5 · escuela · ${S.d24.ESPEC} créditos específicos · ${S.d24.EL} electivos`,
    cursos: S.d25.saved?"Guardado · escuela NUT · v1":`Paso 2.6 · escuela · ${PL5.ciclos} ciclos · tope ${PL5.tope} cursos por ciclo`
  }[S.tab];
  $("#docSel").innerHTML = DOCS.filter(d=>S.avail.has(d[0])).map(d=>`<option value="${d[0]}" ${d[0]===S.tab?"selected":""}>${["entrada","disc","pesos","cursos"].includes(d[0])?ESCUELA:ESCUELA+"-"+((escK(S.k)||{}).c||"")} · ${d[1]}</option>`).join("");
  $("#homeBtn").hidden = S.tab==="entrada";
  const ni = navIdx(), nl = navList().length;
  $("#navPrev").disabled = ni<=0; $("#navNext").disabled = ni>=nl-1 && ni>=0;
  $("#pSub").textContent = sub;
  $("#pBody").innerHTML = ({entrada:viewEntrada, ficha:viewFicha, paquete:viewPaquete, informe:viewInforme, recursos:viewRecursos, refs:viewRefs, competencia:viewCompetencia, disc:viewDisc, pesos:viewPesos, cursos:viewCursos})[S.tab]();
  fitDet();
}
const STEPVIEW = [["entrada"],["paquete","per"],["paquete","per"],
  ["paquete","asig"],["recursos","fn"],["recursos","fn"],["recursos","fn"],
  ["disc","lote"],["disc","temas"],["disc","dim"],["disc","comp"],["disc","comp"],["disc","band"],
  ["pesos","param"],["pesos","ind"],["pesos","dist"],["pesos","dist"],["pesos","corte"],["pesos","cred"],
  ["cursos","pres"],["cursos","lista"],["cursos","valida"],["cursos","trib"],["cursos","lista"]];
const NAVSEQ = [["entrada",null],["ficha",null],["paquete","per"],["paquete","asig"],["paquete","prod"],["informe",null],
  ["recursos","fn"],["disc","lote"],["disc","temas"],["disc","dim"],["disc","comp"],["disc","band"],
  ["pesos","param"],["pesos","ind"],["pesos","dist"],["pesos","corte"],["pesos","cred"],["pesos","comp"],
  ["cursos","pres"],["cursos","valida"],["cursos","lista"],["cursos","trib"],["cursos","elec"],["refs",null]];
const navOk = v => S.avail.has(v[0]) && !(v[0]==="paquete"&&v[1]==="asig"&&!S.saved.p21)
  && !(v[0]==="disc" && ((v[1]==="temas"&&!S.d23.temas)||(v[1]==="dim"&&!S.d23.dim)||((v[1]==="comp"||v[1]==="band")&&!S.d23.comp)))
  && !(v[0]==="pesos" && ((v[1]==="ind"&&!S.d24.ind)||(v[1]==="dist"&&!S.d24.pesos)||((v[1]==="corte"||v[1]==="cred"||v[1]==="comp")&&!S.d24.corte)))
  && !(v[0]==="cursos" && (v[1]!=="pres" && !S.d25.form));
const navList = () => NAVSEQ.filter(navOk);
function navIdx(){
  const l = navList();
  return l.findIndex(v=>v[0]===S.tab && (!v[1] || S.mode[v[0]]===v[1]));
}
function navGo(d){
  const l = navList(); let i = navIdx();
  if(i<0) i = d>0 ? -1 : l.length;
  const j = Math.min(l.length-1, Math.max(0, i+d)); const v = l[j];
  if(!v) return; if(v[1]) S.mode[v[0]]=v[1]; setTab(v[0]);
}
function goStep(k){
  const v = STEPVIEW[k]; if(!v || !S.avail.has(v[0])) return;
  if(v[1]) S.mode[v[0]]=v[1]; setTab(v[0]);
}
const seg = (key, opts) => `<div class="seg" role="tablist">${opts.map(([v,l,dis])=>`<button role="tab" data-seg="${key}" data-v="${v}" aria-selected="${S.mode[key]===v}" ${dis?"disabled title='Disponible al guardar el paso 2.1'":""}>${l}</button>`).join("")}</div>`;

function syncScroll(){
  document.querySelectorAll('.topscroll[data-sync]').forEach(ts=>{
    const tw=document.querySelector(`.tw[data-sync="${ts.dataset.sync}"]`); if(!tw) return;
    ts.firstElementChild.style.width=tw.scrollWidth+"px";
    ts.onscroll=()=>{ if(tw.scrollLeft!==ts.scrollLeft) tw.scrollLeft=ts.scrollLeft; };
    tw.onscroll=()=>{ if(ts.scrollLeft!==tw.scrollLeft) ts.scrollLeft=tw.scrollLeft; };
  });
}
function fitDet(){
  syncScroll();
  document.querySelectorAll(".det3").forEach(d=>{ const tw=d.closest(".tw"); if(tw) d.style.width=(tw.clientWidth-40)+"px"; });
}
addEventListener("resize", fitDet);
function promoCard(t, pie){
  return `<figure class="promo"><span class="pk">Promesa de valor</span><blockquote>${esc(t)}</blockquote><figcaption>${esc(pie||"")}</figcaption></figure>`;
}
/* Ficha técnica de la competencia tal como la dejó la Fase 1 (paso 1.2 y 1.5) */
function viewFicha(){
  const e = escK(S.k) || ESC[0], A = F2.ARQ[e.c] || {caps:[]};
  return `<div class="sheet" style="padding:0;border:0;background:none;max-width:1100px">
    <div class="ficha-doc">
      <div class="ficha-band">
        <div class="inst">Universidad Peruana Unión · Escuela Profesional de ${esc(F2.meta.nombre)}</div>
        <h2>${esc(A.n)}</h2>
        <div style="font-family:var(--serif);font-size:15px;color:rgba(255,255,255,.9)">Ficha Técnica de la Competencia</div>
        <div class="meta"><span><b>Código</b> ${e.c}</span><span><b>Alias</b> ${esc(A.alias||"")}</span><span><b>Especialidad</b> ${esc(e.n)}</span><span><b>Tipo</b> ${esc(A.tipo||"de especialidad")}</span><span><b>Estado</b> congelada al cerrar la Fase 1</span></div>
      </div>
      <div class="ficha-body">
        <h3>1 · Definición de la competencia</h3>
        <div class="concept"><div class="lb">Definición conceptual</div><p>${esc(A.def)}</p></div>
        <div class="opdef"><div class="lb">Definición operacional</div><p>Pendiente · se redacta al cerrar la Fase 2, con las funciones, los métodos, los recursos y los escenarios de ejercicio validados.</p></div>
        <h3>2 · Capacidades de la competencia · ${A.caps.length}</h3>
        ${A.caps.map(c=>`<div class="capficha"><div class="ch"><b>${c[0]}</b> <strong>${esc(c[1])}</strong> <span class="mini">${esc(c[2])}</span></div>
          <div class="cb"><div class="concept"><div class="lb">Definición</div><p>${esc(c[3]||"")}</p></div></div></div>`).join("")}
        <h3>3 · Especialidades y ámbitos que la componen</h3>
        <div class="opdef" style="background:var(--surface)"><p style="font-size:13px;line-height:1.75;color:var(--ink)"><b>${esc(e.n)}</b>${(e.integradas||[]).length?` · integra ${e.integradas.map(esc).join(" y ")}`:""}${(e.ambitos||[]).length?` · ámbitos: ${e.ambitos.map(esc).join(", ")}`:""}.</p></div>
        ${A.prom?`<h3>4 · Promesa de valor de la carrera</h3>${promoCard(A.prom, `${F2.meta.nombre} · UPeU · paso 1.5`)}`:""}
        <p class="note" style="margin-top:12px">Las capacidades se conservan en la Fase 2: las funciones se asignan a ellas después de validarlas, y solo se admiten ajustes de redacción que apruebe la Escuela.</p>
      </div>
    </div>
  </div>`;
}

/* ---------- Paquete funcional ---------- */
const LAB = {prop:["Propuesto","t-prop"],ok:["Conforme","t-ok"],rev:["Parcial","t-rev"],no:["Excluido","t-neutral"],na:["No aplica","t-neutral"]};
const lock21 = () => S.step!==1;
const DEC = ["Aprobado","En proceso","Eliminar"];
const DECT = {"Aprobado":"Mantener: demanda alta e impacto alto","En proceso":"Analizar: combinación intermedia de demanda e impacto","Eliminar":"Demanda baja e impacto bajo"};
const decOf = f => (f.dem==="Alta"&&f.imp==="Alto") ? "Aprobado" : (f.dem==="Baja"&&f.imp==="Bajo") ? "Eliminar" : "En proceso";
const decTag = d => `<span class="tag ${({"Aprobado":"t-ok","En proceso":"t-prop","Eliminar":"t-rev"})[d]}" title="${DECT[d]}">${d}</span>`;
const LV = {dem:["Alta","Media","Baja"], imp:["Alto","Medio","Bajo"]};
const lvlCell = (f,k) => S.saved.p21 ? tagLvl(f[k]) : `<select class="lvl lv-${({Alta:"a",Alto:"a",Media:"m",Medio:"m",Baja:"b",Bajo:"b"})[f[k]]}" data-lvl="${k}" data-id="${esc(f.c)}" aria-label="${k==="dem"?"Demanda":"Impacto"} ${esc(f.c)}">${LV[k].map(o=>`<option ${o===f[k]?"selected":""}>${o}</option>`).join("")}</select>`;
function blk(f, b, body){
  const st=f[b];
  return `<div class="blk st-${st}"><div class="blk-h">${body}
    <span class="acts sm"><button class="ib" data-blk="${b}" data-id="${esc(f.c)}" data-v="ok" aria-label="Aprobar bloque" ${lock21()?"disabled":""}>✓</button><button class="ib" data-blk="${b}" data-id="${esc(f.c)}" data-v="rev" aria-label="Marcar para corregir" ${lock21()?"disabled":""}>↺</button></span></div></div>`;
}
function viewPaquete(){
  const m = S.mode.paquete, sv = !S.saved.p21;
  const head = `<div class="ctxbar"><span class="cx esp">Especialidad</span><b>${esc(S.spec||ESC[0].n)}</b><span class="cx cmp">Competencia madre</span><b>${esc(D.comp)}</b></div>
    <div class="eyebrow">Paso 2.1 · Definir funciones y componentes</div>
    <h2>${{per:"Mapa de Funciones Profesionales · Pertinencia y prospectiva",asig:"Matriz Funcional de Capacidades",prod:"Matriz de Productos Profesionales y Entregables",suf:"Prueba de suficiencia para acreditación"}[m]}</h2><div class="rule"></div>
    ${seg("paquete",[["per","Mapa de Funciones Profesionales"],["asig","Matriz Funcional de Capacidades",sv],["prod","Matriz de Productos"],["suf","Suficiencia",sv]])}`;
  const body = {per:pkPer, prod:pkProd, asig:pkAsig, suf:pkSuf}[m]();
  return `<div class="sheet">${head}${body}</div>`;
}
function pkPer(){
  const cap = S.saved.p21 && S.showCap, cnt = s => S.fn.filter(f=>fnState(f)===s).length;
  const nc = cap ? 9 : 8;
  const pill = (f,b,l) => `<span class="bp ${f[b]}" title="${l}: ${LAB[f[b]][0]}">${l}</span>`;
  return `<div class="toolbar"><div class="stat"><span>Conformes <b>${cnt("ok")}</b></span><span>Parciales <b>${cnt("rev")}</b></span><span>Propuestas <b>${cnt("prop")}</b></span><span>Tareas <b>${nTasks()}</b></span><span>Ronda <b>${S.delphi?S.round:"—"}</b></span><span>Referencias <b>${D.refs.length}</b></span></div><div class="grow"></div>
      ${S.saved.p21?`<button class="btn sm" id="tbCap" aria-pressed="${!!S.showCap}">${S.showCap?"Ocultar capacidad asociada":"Ver capacidad asociada"}</button>`:""}
      <button class="btn sm" id="tbAll">${Object.values(S.open).some(Boolean)?"Ocultar tareas y productos":"Ver tareas y productos"}</button>
      ${S.step===1&&!S.delphi?`<button class="btn sm" id="tbDelphi">Cargar e-Delphi</button>`:""}
      <button class="btn sm primary" id="tbSave21" ${S.step===2?"":"disabled"}>${S.saved.p21?"Paso 2.1 guardado":"Guardar paso 2.1"}</button></div>
    <div class="topscroll" data-sync="per"><div></div></div>
    <div class="tw fit" data-sync="per"><table style="min-width:${cap?1560:1440}px" class="vtab stick ${cap?"hascap":""}"><thead><tr>${cap?'<th class="c0">Capacidad</th>':""}<th class="c1" style="min-width:220px">Función profesional</th><th>Demanda</th><th style="min-width:290px">Fundamento de la demanda</th><th>Impacto</th><th style="min-width:270px">Justificación del impacto</th><th>Decisión</th><th style="min-width:150px">Observación</th><th>Referencias</th></tr></thead>
  <tbody>${S.fn.map(f=>{ const st=fnState(f), op=S.open[f.c]; return `<tr>${cap?`<td class="c0">${esc(f.cap)}</td>`:""}
    <td class="fn c1"><b>${esc(f.c)} · ${esc(f.t)}</b><div class="clamp">${esc(f.d)}</div>
      <div class="fnst"><button class="btn sm" data-tog="${esc(f.c)}" aria-expanded="${!!op}">${op?"▾ Ocultar validación":"▸ Validación"}</button><span class="tag ${LAB[st][1]}">${LAB[st][0]}</span>${f.salida?`<span class="mini">${esc(f.salida)}</span>`:""}</div></td>
    <td>${lvlCell(f,"dem")}</td>
    <td><div class="${op?"":"clamp"}">${esc(f.fd)}</div><button class="more" data-det="${esc(f.c)}">${op?"Abrir Panel de Mejora":"Ver completo"}</button></td><td>${lvlCell(f,"imp")}</td><td><div class="${op?"":"clamp"}">${esc(f.ji)}</div></td>
    <td>${S.saved.p21?decTag(f.dec):`<select class="dec lvl lv-${({"Aprobado":"a","En proceso":"m","Eliminar":"b"})[f.dec]}" title="${DECT[f.dec]}" data-dec="${esc(f.c)}" aria-label="Decisión ${esc(f.c)}">${DEC.map(o=>`<option ${o===f.dec?"selected":""}>${o}</option>`).join("")}</select>`}</td>
    <td><div class="${op?"":"clamp"}">${S.delphi?esc(f.obs):"Pendiente del e-Delphi"}</div>${op&&S.delphi&&f.dic?`<p class="mini" style="margin-top:6px">Suficiencia ${esc(f.dic.d)}: ${esc(f.dic.ev)} · ${esc(f.dic.tend)}${f.dic.acc&&f.dic.acc!=="—"?`<br>Acción: ${esc(f.dic.acc)}`:""}</p>`:""}</td><td style="min-width:110px">${refBtns(f.refs,"per")}</td>
    </tr>
    ${op?`<tr class="tasks"><td colspan="${nc}"><div class="det3">
      <section>${blk(f,"fb",`<h5>Tareas de la función</h5>`)}
        ${S.delphi?`<div class="panelres"><div class="eyebrow">Resultado del e-Delphi · ronda ${S.round}</div>
          <div class="mx"><span>Realidad laboral <b>${esc((f.panel||{}).real||"—")}</b></span><span>I-CVI <b>${esc(f.icvi||"—")}</b></span><span>CVR <b class="${f.cvr&&f.cvr!=="1,00"?"low":""}">${esc(f.cvr||"—")}</b></span><span>Acuerdo <b>${esc((f.panel||{}).acuerdo||"—")}</b></span><span>Prioridad <b>${esc(f.pr||"—")}</b></span><span>Ítem T <b>${esc((f.panel||{}).T||"—")}</b></span></div>
          <div class="mini">${["fb","sb","pb"].map(b=>`${BLQ[b]}: ${LAB[f[b]]?LAB[f[b]][0].toLowerCase():"—"}`).join(" · ")}${((f.panel||{}).motivo||{}).fb||((f.panel||{}).motivo||{}).sb||((f.panel||{}).motivo||{}).pb?`<br>Observaciones: ${["fb","sb","pb"].map(b=>((f.panel||{}).motivo||{})[b]).filter(Boolean).map(esc).join(" · ")}`:""}</div></div>`:""}
        ${f.tasks.map(t=>`<div class="tk"><span><code>${esc(t.code)}:</code> ${esc(t.t)}<small>${esc(t.ent)}</small></span></div>`).join("")}
        <h5>Nivel de confianza y límites</h5><p>${confBtn(f)} ${esc(f.lim)}</p></section>
      <section>${blk(f,"pb",`<h5>Producto</h5>`)}
        <h5>${esc(f.prod.name)}</h5><p>${esc(f.prod.desc)}</p>${f.prod.ents.map(e=>`<div class="ent"><b>${e.n}. ${esc(e.t)}</b> <span class="num" style="font-size:11px">${esc(e.codes)}</span><div>${esc(e.sum)}</div><ul>${e.ev.map(v=>`<li>${esc(v)}</li>`).join("")}</ul></div>`).join("")}</section>
    </div></td></tr>`:""}`; }).join("")}</tbody></table></div>
    <div id="exclBox" class="excl">
      <h3>Exclusiones: funciones validadas para otras competencias ${S.exclOk?'<span class="tag t-ok">Confirmadas</span>':""}</h3>
      <div class="tw"><table><thead><tr><th>Función</th><th>Competencia destino</th><th>Capacidad destino</th><th>Índices del Delphi</th><th style="width:120px">Confirmación</th></tr></thead>
      <tbody>${S.excl.map((x,i)=>`<tr><td style="color:var(--ink)">${esc(x.c)}</td><td>${esc(x.dest)}</td><td>${esc(x.cap)}</td><td class="num">${esc(x.idx)}</td>
        <td>${x.st==="ok"?'<span class="tag t-ok">Confirmada</span>':`<button class="btn sm" data-excl="${i}" ${S.delphi&&!S.fn.some(f=>fnState(f)==="rev")&&S.step===1?"":"disabled"}>Confirmar</button>`}</td></tr>`).join("")}</tbody></table></div>
    </div>`;
}
function pkProd(){
  const cap=S.saved.p21, T=S.showTasks;
  const nEnt = S.fn.reduce((a,f)=>a+f.prod.ents.length,0);
  return `<div class="toolbar"><div class="grow"></div>
    <button class="btn sm" id="tbTasks" aria-pressed="${!!T}">${T?"Ocultar tareas":"Ver tareas"}</button></div>
  <div class="tw"><table style="min-width:${T?1300:1000}px"><thead><tr>${cap?'<th style="width:120px">Dimensión asociada</th>':""}<th style="width:280px">Función profesional (${S.fn.length})</th>${T?'<th class="tcol">Tareas clave</th>':""}<th>Producto profesional y entregables (${nEnt})</th></tr></thead>
  <tbody>${S.fn.map(f=>`<tr>${cap?`<td>${esc(f.cap)}</td>`:""}
    <td class="fn"><b>${esc(f.c)} · ${esc(f.t)}</b><div>${esc(f.d)}</div><div class="mini" style="margin-top:4px">${confBtn(f)} · ${esc(f.lim)}</div></td>
    ${T?`<td class="tcol"><ol>${f.tasks.map(t=>`<li>${esc(t.t)}</li>`).join("")}</ol></td>`:""}
    <td><b style="color:var(--ink)">${esc(f.prod.name)}:</b> ${esc(f.prod.desc)}
      ${f.prod.ents.map(e=>`<div class="ent"><b>${e.n}. ${esc(e.t)}</b> <span class="num" style="font-size:11px">(${esc(e.codes)})</span>: ${esc(e.sum)}<ul>${e.ev.map(v=>`<li>${esc(v)}</li>`).join("")}</ul></div>`).join("")}
      <button class="more" data-det="${esc(f.c)}">Ver y editar</button></td></tr>`).join("")}</tbody></table></div>`;
}
/* S.alloc: [función, ámbito, marca por capacidad…, otra competencia, asignación] · el número de capacidades varía por competencia */
function pkAsig(){
  const A = S.alloc, n = CAPS.length, c0 = escK(S.k).c, mia = r => String(r[3+n]||"").split(/[^A-Z0-9.]+/).includes(c0);
  const dot = (v,i,j) => `<button class="algn ${v==="●"?"full":v==="○"?"sup":""}" data-algn="${i}-${j}" title="Clic para cambiar: vacío → ○ apoyo → ● principal">${v||""}</button>`;
  return `<p class="note">● moviliza la capacidad de forma principal · ○ como apoyo. Haga clic en una celda para marcar o cambiar la alineación de la función con la capacidad.</p>
  <div class="tw"><table style="min-width:900px"><thead>
  <tr class="ctxrow"><th colspan="2" class="e"><span class="et2">Especialidad</span>${esc(S.spec||ESC[0].n)}</th>
    <th colspan="${n}" class="c"><span class="et2">Competencia</span>${esc(D.comp)}</th>
    <th colspan="2" class="o"></th></tr>
  <tr class="sub"><th>Función</th><th>Ámbito</th>${CAPS.map(c=>`<th style="text-align:center">${c[0]}<br><span class="cw2">${esc(c[1])}</span></th>`).join("")}<th>Otra competencia</th><th>Asignación</th></tr></thead>
  <tbody>${A.map((r,i)=>`<tr class="${mia(r)?"":"off"}"><td style="color:var(--ink)">${esc(r[0])}</td><td>${esc(r[1])}</td>${r.slice(2,2+n).map((v,j)=>`<td style="text-align:center">${dot(v,i,j)}</td>`).join("")}<td>${esc(r[2+n])}</td><td><b>${esc(r[3+n])}</b></td></tr>`).join("")}</tbody></table></div>
  <h3 style="margin-top:16px">Cobertura de las capacidades</h3>
  <div class="caps">${CAPS.map((c,i)=>{ const fs=S.alloc.filter(r=>r[2+i]==="●"&&mia(r)).map(r=>r[0].split(" ")[0]); return `<div class="cap"><b>${c[0]}</b> <strong>${esc(c[1])}</strong><p>${fs.length} funciones principales${fs.length?": "+fs.join(", "):""}</p><p style="color:${fs.length?"var(--ok)":"var(--bad)"};font-size:12px">${fs.length?"Cubierta":"Sin función · alerta"}</p></div>`; }).join("")}</div>`;
}
function pkSuf(){
  const d = f => (f.dic||{}).d||"—", n = s => S.fn.filter(f=>d(f)===s);
  const glob = n("I").length ? ["Insuficiente","t-rev"] : ["Parcial","t-prop"];
  return `<div class="grid2"><div class="kv"><div class="eyebrow">Por función</div><p>${n("S").length} suficientes · ${n("P").length} parciales${n("P").length?" ("+n("P").map(f=>f.c).join(", ")+")":""}${n("I").length?" · "+n("I").length+" insuficientes ("+n("I").map(f=>f.c).join(", ")+")":""}</p></div><div class="kv"><div class="eyebrow">Dictamen global de ${escK(S.k).c}</div><p><span class="tag ${glob[1]}">${glob[0]}</span> faltan la consulta a grupos de interés humanos (E5) y el seguimiento de egresados (E7): son de nivel programa y el panel de agentes no los reemplaza</p></div></div>
  <div class="tw" style="margin-top:12px"><table style="min-width:1000px"><thead><tr><th>Función</th><th>Evidencias del fundamento</th><th>Fuente de la tendencia</th><th>Dictamen</th><th>Acción para cerrar la brecha</th></tr></thead>
  <tbody>${S.fn.map(f=>{ const x=f.dic||{}; return `<tr><td style="color:var(--ink)">${esc(f.c)} · ${esc(f.t)}</td><td>${esc(x.ev)}</td><td>${esc(x.tend)}</td><td><span class="tag ${x.d==="S"?"t-ok":x.d==="I"?"t-rev":"t-prop"}">${esc(x.d||"—")}</span></td><td>${esc(x.acc)}</td></tr>`; }).join("")}</tbody></table></div>
  <h3 style="margin-top:16px">Qué exigen los acreditadores</h3>
  <div class="tw"><table><thead><tr><th style="width:260px">Acreditador</th><th>Exigencia</th></tr></thead><tbody>${D.acred.map(r=>`<tr><td style="color:var(--ink)">${esc(r[0])}</td><td>${esc(r[1])}</td></tr>`).join("")}</tbody></table></div>`;
}

function viewInforme(){
  return `<div class="sheet">
    <div class="eyebrow">Universidad Peruana Unión · Escuela Profesional de ${esc(F2.meta.nombre)} · ${ESCUELA}-${escK(S.k).c}-F2-P21 · v1.0</div>
    <h2>Informe ejecutivo de funciones profesionales, tareas clave y productos</h2><div class="rule"></div>
    <div class="toolbar"><div class="grow"></div><button class="btn sm" data-toast="Descarga del informe (simulada)">Descargar DOCX</button></div>
    <h3>Resultados principales</h3>
    <div class="tw"><table><thead><tr><th style="width:280px">Indicador</th><th>Resultado</th></tr></thead><tbody>${D.resumen.map(r=>`<tr><td style="color:var(--ink)">${esc(r[0])}</td><td>${esc(r[1])}</td></tr>`).join("")}</tbody></table></div>
    <h3 style="margin-top:16px">Decisiones adoptadas</h3>
    <div class="tw"><table><thead><tr><th>Fecha</th><th>Decisión</th><th>Motivo</th></tr></thead><tbody>${D.decis.map(r=>`<tr><td class="num">${esc(r[0])}</td><td style="color:var(--ink)">${esc(r[1])}</td><td>${esc(r[2])}</td></tr>`).join("")}</tbody></table></div>
    <h3 style="margin-top:16px">Alertas para las certificaciones progresivas (paso 4.4)</h3>
    <div class="tw"><table><thead><tr><th>Función</th><th>Competencias</th><th>Puesto donde se exigen juntas</th><th>Riesgo si se separan</th></tr></thead><tbody>${D.alertas.map(r=>`<tr>${r.map((v,i)=>`<td ${i===0?'style="color:var(--ink)"':""}>${esc(v)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>
  </div>`;
}

/* ---------- 2.2 Recursos ---------- */
function iaFicha(txt){
  const rows = txt.split("\n").map(l=>l.replace(/^▪\s*/,"")).map(l=>{ const i=l.indexOf(":"); return [l.slice(0,i),l.slice(i+1).trim()]; });
  return `<dl class="ficha">${rows.map(([k,v])=>`<dt>${esc(k)}</dt><dd>${k==="Autonomía"?`<span class="aut">${esc(v.slice(0,2))}</span> ${esc(v.slice(2).replace(/^\s*·\s*/,""))}`:esc(v)}</dd>`).join("")}</dl>`;
}
function viewRecursos(){
  const m=S.mode.recursos;
  const R = allRes().filter(r=>r.st!=="na");
  const head = `<div class="eyebrow">Paso 2.2 · Elementos de productividad y temas nucleares (2.3) · Competencia madre: ${esc(D.comp)}</div>
    <h2>${m==="fn"?"Matriz de Elementos de Productividad de Funciones":"Banco de recursos de productividad"}</h2><div class="rule"></div>
    <div class="toolbar">${seg("recursos",[["fn","Por función"],["bank",`Banco (${D.bank.length})`]]).replace(' style="margin-bottom:12px"','')}
      ${S.mode.recursos==="fn"?seg("rview2",[["2","2 columnas"],["3","3 columnas"]]).replace(/data-seg="rview2"/g,'data-rview').replace(/data-v=/g,"data-x="):""}
      <span class="mini">Conformes ${R.filter(r=>r.st==="ok").length}/${R.length}</span><div class="grow"></div>
      ${S.te.gen?`<button class="btn sm" id="tnTog" aria-pressed="${S.te.show}">${S.te.show?"Ocultar temas nucleares":"Ver temas nucleares"}</button>`:""}
      ${S.step===4&&!S.recPanel?`<button class="btn sm" id="tbRes">Cargar validación abreviada</button>`:""}
      <button class="btn sm primary" id="tbSave22" ${S.step===6?"":"disabled"}>${S.saved.p22?"2.2 y temas guardados":"Guardar 2.2 y temas"}</button></div>
    <p class="note" hidden>Código RH-E estándar · M metodología · T herramienta · IA integración de IA generativa. <b>Dominio</b> = nivel esperado al egreso: Conoce (identifica el recurso) · Aplica (lo usa con supervisión) · Domina (lo usa con autonomía). Borde verde: confirmado · rojo: pide ajuste.</p>`;
  if(m==="bank"){
    const cats=[["all","Todos"],...CATS.map(([c])=>[c,c])];
    const rows=D.bank.filter(b=>S.bankCat==="all"||b[1]===S.bankCat||(S.bankCat.startsWith("Integración")&&b[1].startsWith("Integración")));
    return `<div class="sheet">${head}<div class="chips" style="margin-bottom:10px">${cats.map(([v,l])=>`<button class="chip ${S.bankCat===v?"main":""}" data-bank="${esc(v)}">${esc(l)}</button>`).join("")}</div>
      <div class="tw"><table><thead><tr><th style="width:90px">Código</th><th>Categoría</th><th>Recurso de productividad</th><th>Funciones asignadas</th><th>Ref.</th></tr></thead>
      <tbody>${rows.map(b=>`<tr><td class="num"><b>${esc(b[0])}</b></td><td>${esc(b[1])}</td><td style="color:var(--ink)">${esc(b[2])}</td><td>${esc(b[3])}</td><td class="num">${esc(b[4])}</td></tr>`).join("")}</tbody></table></div></div>`;
  }
  const A = active(); const idx = Math.max(0,A.findIndex(x=>x.c===S.recSel)); const f = A[idx];
  const done = x => x.rs.every(r=>r.st!=="prop"&&r.st!=="rev");
  const lk = S.step!==4;
  const item = r => {
    if(r.st==="na") return `<div class="noia">Sin integración de IA pertinente: ${esc(r.apl)}.</div>`;
    const ia = r.cat.startsWith("Integración");
    const op = S.rall || S.ropen[r.id];
    return `<div class="ritem st-${r.st} ${op?"open":""}"><div class="rhead"><button class="rtog" data-rop="${esc(r.id)}" aria-expanded="${!!op}" aria-label="Ver detalle">▸</button><div class="rt"><span class="rcode">${esc(r.code)}</span> <b>${esc(r.t)}</b></div>
        <span class="dom" title="Nivel de dominio esperado al egreso: Conoce (identifica el recurso) · Aplica (lo usa en casos típicos con supervisión) · Domina (lo usa con autonomía en casos complejos)">Dominio: ${esc(r.dom)}</span>
        <span class="acts sm"><button class="ib ${r.st==="ok"?"on-ok":""}" data-rv="ok" data-id="${esc(r.id)}" aria-label="Confirmar recurso" ${lk?"disabled":""}>✓</button><button class="ib ${r.st==="rev"?"on-bad":""}" data-rv="rev" data-id="${esc(r.id)}" aria-label="Pedir ajuste" ${lk?"disabled":""}>↺</button></span></div>
      ${op?`<div class="rbody"><p><span class="lbl">Aplicación en la tarea:</span>${ia?"":" "+esc(r.apl)}</p>${ia?iaFicha(r.apl):""}
      <p><span class="lbl">Tareas clave:</span></p>
      <ul class="tlist2">${r.tareas.split(/,\s*/).map(c=>{ const t=f.tasks.find(x=>x.code===c.trim()); return `<li>${t?esc(t.t):esc(c)}</li>`; }).join("")}</ul>
      <p><span class="lbl">Aporte al producto:</span> ${esc(r.ap)} ${refBtns(r.ref,"rec")}</p></div>`:""}</div>`;
  };
  const pend = f.rs.filter(r=>r.st==="prop").length;
  const V3 = S.rview==="3";
  const TNON = S.te.gen && S.te.show;
  const teCol = () => { const ts = teDeFn(f.c), otros = TE.length-ts.length;
    return `<aside class="tecol"><div class="teh"><div><b>Temas nucleares de especialidad</b><small>Lo que estas tareas exigen saber · paso 2.3</small></div>
        <span class="ten">${ts.length}</span></div>
      <div class="teb">
      ${ts.length?ts.map(t=>{ const op=S.te.open[t[0]];
        return `<div class="tecard ${op?"open":""}"><button class="teb1" data-teo="${t[0]}" aria-expanded="${!!op}"><span class="tec">${t[0]}</span><b>${esc(t[1])}</b><span class="car">▸</span></button>
          <div class="temeta"><span class="tag t-neutral">${t[4]}</span><span class="tag ${t[5]===3?"t-alta":t[5]===2?"t-media":"t-baja"}">${NIV[t[5]]}</span>${t[6].length?`<span class="mini">compartido con ${t[6].join(" · ")}</span>`:'<span class="mini">propio de la especialidad</span>'}</div>
          ${op?`<div class="tebody"><div class="eyebrow">Micro temas · ${t[2].length}</div>
            <ol class="tlist2">${t[2].map(s=>`<li>${esc(s)}</li>`).join("")}</ol>
            <div class="eyebrow" style="margin-top:8px">Candidatos a tema base · pasan al 2.4</div>
            <div class="bps" style="margin-top:3px">${t[7].map(k=>`<span class="bp">${k}</span>`).join("")}</div>
            <div class="mini" style="margin-top:6px">Funciones de origen: ${t[3].map(esc).join(" · ")}</div></div>`:""}</div>`; }).join("")
        :`<div class="noia">Esta función no aportó temas propios: sus tareas se apoyan en temas ya extraídos de otras funciones.</div>`}
      </div>
      <div class="tef"><span class="mini">${otros} temas más en el banco de la especialidad</span><button class="btn sm" id="teAll">Ver banco completo</button></div></aside>`; };
  const confBtnR = `<button class="btn sm primary" data-fconf="${esc(f.c)}" ${lk||!S.recPanel||!pend?"disabled":""} title="${S.recPanel?"":"Primero cargue la validación de los expertos"}">${done(f)?"Función confirmada ✓":"Confirmar y seguir →"}</button>`;
  return `<div class="sheet">${head}
    <div class="rsplit ${V3?"v3":""} ${TNON?"tn":""}">
      <aside class="rfix"><div class="flist2">${A.map((x,i)=>{ const cur=x.c===f.c; return `<div class="facc ${V3?"compact":""}" aria-current="${cur}">
        <button data-rsel="${esc(x.c)}" aria-expanded="${cur}"><span class="car">▸</span><span><b>${esc(x.c)} · ${esc(x.t)}</b><br><span class="mini">${x.rs.filter(r=>r.st!=="na").length} recursos${done(x)?" · confirmada":""}</span></span><span class="dot ${done(x)?"ok":""}"></span></button>
        ${cur&&!V3?`<div class="fbody"><div>${confBtn(x)}</div>
          <p class="fdesc" style="margin-top:4px">${esc(x.d)}</p>
          <div class="prodbox"><div><b>Producto:</b> ${esc(x.prod.name)}</div><p>${esc(x.prod.desc)}</p>
            <div class="eyebrow" style="margin-top:8px">Entregables</div>
            ${x.prod.ents.map(e=>`<div class="ent"><b>${e.n}. ${esc(e.t)}:</b> ${esc(e.sum)}<ul>${e.ev.map(v=>`<li>${esc(v)}</li>`).join("")}</ul></div>`).join("")}</div></div>`:""}
      </div>`; }).join("")}</div></aside>
      ${V3?`<aside class="rfix pmid"><div class="eyebrow">Función ${idx+1} de ${A.length}</div>
        <h3 style="font-family:var(--serif);font-size:17px;color:var(--navy);margin:2px 0 4px">${esc(f.c)} · ${esc(f.t)}</h3>
        <div>${confBtn(f)}</div>
        <p class="fdesc" style="margin-top:6px">${esc(f.d)}</p>
        <div class="prodbox"><div><b>Producto:</b> ${esc(f.prod.name)}</div><p>${esc(f.prod.desc)}</p>
          <div class="eyebrow" style="margin-top:8px">Entregables</div>
          ${f.prod.ents.map(e=>`<div class="ent"><b>${e.n}. ${esc(e.t)}:</b> ${esc(e.sum)}<ul>${e.ev.map(v=>`<li>${esc(v)}</li>`).join("")}</ul></div>`).join("")}</div>
        <h5 style="margin:12px 0 4px;font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--navy)">Tareas de la función</h5>
        <div>${f.tasks.map(t=>`<div class="tk" style="grid-template-columns:1fr"><span><code>${esc(t.code)}:</code> ${esc(t.t)}</span></div>`).join("")}</div>
      </aside>`:""}
      <div>
        <div class="fnav"><b style="font-size:13px">Recursos de productividad</b><span class="mini">${idx+1} de ${A.length}</span><button class="btn sm" id="fPrev" aria-label="Función anterior">←</button><button class="btn sm" id="fNext" aria-label="Función siguiente">→</button><button class="btn sm" id="rAll">${S.rall?"Contraer recursos":"Expandir recursos"}</button><button class="btn sm" id="rOkAll" ${S.step!==4||!pend?"disabled":""} title="Marca como conformes los recursos de esta función">Validar todos</button></div>
        ${CATS.map(([c])=>{ const it=f.rs.filter(r=>r.cat===c); return `<section class="rcat" style="margin-top:0;margin-bottom:14px"><h4>${c} <span>${it.filter(r=>r.st!=="na").length}</span></h4>${it.length?it.map(item).join(""):`<div class="noia">Sin recursos en esta categoría.</div>`}</section>`; }).join("")}
        <div style="display:flex;justify-content:flex-end;gap:8px;align-items:center">${pend?`<span class="mini">Confirme los ${pend} recursos de esta función para pasar a la siguiente</span>`:""}${confBtnR}</div>
      </div>
      ${TNON?teCol():""}
    </div></div>`;
}

function viewRefs(){
  const m=S.mode.refs;
  const list = m==="per" ? D.refs.map(r=>({n:r[0],t:r[1],u:r[2],e:r[3]})) : D.rrefs.map(r=>({n:r[0],t:r[1],u:r[2],e:""}));
  return `<div class="sheet"><div class="eyebrow">Fuente · referencias verificables</div><h2>${m==="per"?"Referencias de la matriz de pertinencia":"Referencias de la matriz de recursos"}</h2><div class="rule"></div>
  ${seg("refs",[["per",`Pertinencia (${D.refs.length})`],["rec",`Recursos (${D.rrefs.length})`]])}
  <div class="tw"><table><thead><tr><th style="width:56px">N.°</th><th>Referencia</th>${m==="per"?"<th style='width:220px'>Estado</th>":""}<th style="width:90px">Enlace</th></tr></thead>
  <tbody>${list.map(r=>`<tr><td class="num">${esc(r.n)}</td><td style="color:var(--ink)">${esc(r.t)}</td>${m==="per"?`<td><span class="tag ${/^Verificado/.test(r.e)?"t-ok":"t-prop"}">${esc(r.e.split(/[:(]/)[0].trim())}</span><div class="mini">${esc((r.e.match(/[:(](.*)$/)||["",""])[1].replace(/\)$/,""))}</div></td>`:""}
    <td>${/^https?:/.test(r.u)?`<a href="${esc(r.u)}" target="_blank" rel="noopener">Abrir ↗</a>`:`<span class="mini">${esc(r.u)}</span>`}</td></tr>`).join("")}</tbody></table></div></div>`;
}

$("#pBody").addEventListener("click", e=>{
  const b = e.target.closest("button"); if(!b) return;
  const d = b.dataset;
  if(d.seg){ S.mode[d.seg]=d.v; renderPanel(); renderRail(); return; }
  if(d.blk){ const f=S.fn.find(x=>x.c===d.id); f[d.blk] = f[d.blk]===d.v ? "prop" : d.v; if(d.v==="rev") toast(`${f.c}: bloque marcado para corregir y recalificar en la ronda siguiente`); refresh(); if(S.delphi) checkReady21(); return; }
  if(d.excl){ S.excl[+d.excl].st="ok"; refresh(); checkReady21(); return; }
  if(d.tog){ S.open[d.tog]=!S.open[d.tog]; renderPanel(); return; }
  if(d.rsel){ S.recSel=d.rsel; renderPanel(); return; }
  if(d.bank){ S.bankCat=d.bank; renderPanel(); return; }
  if(d.det){ openDrawer(d.det); return; }
  if(d.toast){ toast(d.toast); return; }
  if(d.com && S.c31.val && !S.c31.com){ decide31(d.com); return; }
  if(d.edit){ S.edit=d.edit; renderPanel(); $("#edArea")?.focus(); return; }
  if(d.edcancel){ S.edit=null; renderPanel(); return; }
  if(d.edsave){ S.c31.txt[d.edsave]=$("#edArea").value; if(d.edsave==="op") S.c31.edop=true; S.edit=null; renderPanel(); toast("Definición actualizada en la propuesta v1.2"); return; }
  if(d.ask){ $("#prompt").value=`Ajusta ${d.ask}: `; $("#prompt").focus(); toast("Escriba su instrucción para Génesys y envíela"); return; }
  if(d.capv){ const k=d.id; S.c31.cap[k] = S.c31.cap[k]===d.capv ? "prop" : d.capv; if(d.capv==="rev") toast(`${k}: se pidió un ajuste a Génesys`); refresh(); check31(); return; }
  if(d.vsave){ S.c32[d.vsave]=$("#vEd").value; S.c32.editing=null; renderPanel(); toast("Texto actualizado en la propuesta v1.2"); return; }
  if(d.vcancel){ S.c32.editing=null; renderPanel(); return; }
  if(b.id==="tbVal31" && !S.busy){ forceVal31(); return; }
  if(b.id==="tbSave31" && !S.busy){ save31(); return; }
  if(b.id==="tbSave32" && !S.busy){ save32(); return; }
  if(d.rop){ S.ropen[d.rop]=!S.ropen[d.rop]; renderPanel(); return; }
  if(b.id==="rAll"){ S.rall=!S.rall; S.ropen={}; renderPanel(); return; }
  if(d.algn){ const [i,j]=d.algn.split("-").map(Number); const cur=S.alloc[i][2+j]; S.alloc[i][2+j] = cur==="●" ? "" : cur==="○" ? "●" : "○";
    toast(`${S.alloc[i][0].split(" ")[0]} · ${CAPS[j][0]}: ${S.alloc[i][2+j]==="●"?"principal":S.alloc[i][2+j]==="○"?"apoyo":"sin alineación"}`); renderPanel(); return; }
  if(b.id==="tbCap"){ S.showCap=!S.showCap; renderPanel(); return; }
  if(d.refs){ showRefs(d.refs, d.rset); return; }
  if(d.confn){ showConf(d.confn); return; }
  if(b.hasAttribute("data-rview")){ S.rview=d.x; S.mode.rview2=d.x; if(d.x==="3" && !$("#work").classList.contains("expanded")){ toggleExpand(true); toast("Vista de 3 columnas en pantalla completa · Esc para volver"); } renderPanel(); setTimeout(fitDet,60); return; }
  if(b.id==="tbTasks"){ S.showTasks=!S.showTasks; renderPanel(); return; }
  if(d.rv){ const r=findRes(d.id); r.st = r.st===d.rv ? "prop" : d.rv; refresh(); checkRes22(); return; }
  if(d.fconf){ confirmFn(d.fconf); return; }
  if(b.id==="fPrev"||b.id==="fNext"){ const A=active(), i=A.findIndex(x=>x.c===S.recSel); const n=A[(i+(b.id==="fNext"?1:-1)+A.length)%A.length]; S.recSel=n.c; renderPanel(); $("#pBody").scrollTop=0; return; }
  if(b.id==="tbAll"){ const any=Object.values(S.open).some(Boolean); S.fn.forEach(f=>S.open[f.c]=!any); renderPanel(); }
  if(b.id==="tbDelphi" && !S.busy) loadDelphi();
  if(b.id==="tbSave21" && !S.busy) save21();
  if(b.id==="tbRes" && !S.busy) loadRes();
  if(b.id==="tbSave22" && !S.busy) save22();
  if(b.id==="rOkAll"){ const f=active().find(x=>x.c===S.recSel)||active()[0]; f.rs.forEach(r=>{ if(r.st==="prop") r.st="ok"; }); toast(`${f.c}: recursos marcados como conformes`); refresh(); checkRes22(); return; }
});
$("#pBody").addEventListener("click", e=>{
  const v=e.target.closest(".vtext"); if(!v || S.c32.saved || S.c32.editing || e.target.closest("button,textarea")) return;
  e.preventDefault(); S.c32.editing=v.dataset.vk; S.c32.pick[v.dataset.vk]="new"; renderPanel(); $("#vEd")?.focus();
});
$("#pBody").addEventListener("change", e=>{
  if(e.target.dataset.pick){ S.c32.pick[e.target.dataset.pick]=e.target.value; renderPanel(); return; }
  if(e.target.id==="fSel"){ S.recSel=e.target.value; renderPanel(); $("#pBody").scrollTop=0; return; }
  if(e.target.dataset.lvl){ const f=S.fn.find(x=>x.c===e.target.dataset.id); f[e.target.dataset.lvl]=e.target.value; f.dec=decOf(f); toast(`${f.c}: ${e.target.dataset.lvl==="dem"?"demanda":"impacto"} ${e.target.value} → decisión ${f.dec}`); renderPanel(); return; }
  if(e.target.dataset.dec){ const f=S.fn.find(x=>x.c===e.target.dataset.dec); f.dec=e.target.value; toast(`${f.c}: decisión cambiada a ${f.dec}`); renderPanel(); }
});

/* ---------- Ventanas emergentes ---------- */
function refBtns(str, set){
  const ns = (String(str).match(/\d+/g)||[]);
  if(!ns.length) return `<span class="mini">${esc(str)}</span>`;
  return `<button class="refbtn" data-refs="${ns.join(",")}" data-rset="${set}" title="Ver referencias">${ns.map(n=>`[${n}]`).join(" ")}</button>`;
}
const confBtn = f => `<button class="confbtn" data-confn="${esc(f.c)}" title="¿Qué significa el nivel de confianza?">Confianza al egreso ${confBar(f.conf)} <span class="qm">?</span></button>`;
function openModal(title, html){
  const m=$("#modal"); m.querySelector(".mtitle").innerHTML=title; m.querySelector(".mbody").innerHTML=html; m.hidden=false; m.querySelector(".mclose").focus();
}
function closeModal(){ $("#modal").hidden=true; }
function showRefs(list, set){
  const src = set==="rec" ? D.rrefs : D.refs;
  const rows = list.split(",").map(n=>src.find(r=>r[0]===`[${n}]`)).filter(Boolean);
  openModal(`Referencias ${list.split(",").map(n=>`[${n}]`).join(" ")}`, `<ol class="mrefs">${rows.map(r=>`<li><span class="num">${esc(r[0])}</span><div><div style="color:var(--ink)">${esc(r[1])}</div>
    ${r[3]!==undefined?`<span class="tag ${/^Verificado/.test(r[3])?"t-ok":"t-prop"}">${esc(r[3])}</span> `:""}${/^https?:/.test(r[2])?`<a href="${esc(r[2])}" target="_blank" rel="noopener">Abrir fuente ↗</a>`:`<span class="mini">${esc(r[2])}</span>`}</div></li>`).join("")}</ol>`);
}
function showConf(code){
  const f = S.fn.find(x=>x.c===code);
  const L = [[1,"Observa","Mira cómo lo hace el profesional; aún no actúa."],[2,"Ejecuta con supervisión directa","Lo hace con el supervisor a su lado, que revisa cada paso."],[3,"Ejecuta con supervisión indirecta","Lo hace solo; el supervisor está disponible si lo llama y revisa después."],[4,"Ejecuta sin supervisión","Lo hace de forma autónoma y responde por el resultado."],[5,"Supervisa a otros","Enseña y supervisa a quienes aprenden la función."]];
  openModal(`Nivel de confianza al egreso · ${esc(f.c)}`, `
    <p>Indica <b>cuánta supervisión necesita el egresado</b> para ejecutar la función completa el primer día de trabajo. Es una escala de actividades profesionales confiables (EPA).</p>
    <div class="analog"><b>Ejemplo didáctico: aprender a manejar.</b> Primero miras cómo maneja otro (1); luego manejas con el instructor al lado y con doble pedal (2); después manejas solo, pero con alguien a quien llamar si algo pasa (3); con licencia, manejas por tu cuenta (4); y con experiencia, enseñas a otros (5).</div>
    <table class="mscale"><tbody>${L.map(l=>`<tr class="${l[0]===f.conf?"on":""}"><td class="num"><b>${l[0]}</b></td><td><b>${l[1]}</b><div class="mini">${l[2]}</div></td></tr>`).join("")}</tbody></table>
    <h5 style="margin:14px 0 4px">En esta función: ${esc(f.t)}</h5>
    <p>El egresado llega con nivel <b>${f.conf}</b>: ${esc(L[f.conf-1][2].toLowerCase())}</p>
    <p><b>Límites:</b> ${esc(f.lim)}</p>
    <p class="mini">Uso: ordena los cursos de menor a mayor confianza, define la supervisión en prácticas e internado y declara ante empleadores qué garantiza el egreso.</p>`);
}
$("#modal").addEventListener("click", e=>{ if(e.target.id==="modal"||e.target.closest(".mclose")) closeModal(); });
$("#modal").addEventListener("click", e=>{
  if(e.target.closest("#cohRun")){ correrCoh(); return; }
  const ag=e.target.closest("[data-agp]"); if(ag){ const k=ag.dataset.agp;
    S.d23.ag = ag.checked ? [...new Set([...S.d23.ag,k])] : S.d23.ag.filter(x=>x!==k);
    ag.closest(".agi").classList.toggle("on", ag.checked); return; }
  const v=e.target.closest("[data-vel]"); if(v){ closeModal(); verElementos(v.dataset.vel); return; }
  const a=e.target.closest("[data-ay]"); if(a){ ayOpen(a.dataset.ay); return; }
});

/* ---------- Detalle ---------- */
function prodToText(p){
  return `Producto: ${p.name}\n${p.desc}\n\nEntregables:\n` + p.ents.map(e=>`${e.n}. ${e.t} (${e.codes}): ${e.sum}\n${e.ev.map(v=>"- "+v).join("\n")}`).join("\n\n");
}
function textToProd(t, old){
  const L=t.split("\n"); const p={name:old.name, desc:"", ents:[]}; let mode="d";
  L.forEach(raw=>{ const l=raw.trim(); if(!l) return;
    let m;
    if((m=l.match(/^Producto:\s*(.*)$/i))){ p.name=m[1]; return; }
    if(/^Entregables:?$/i.test(l)){ mode="e"; return; }
    if(mode==="e" && (m=l.match(/^(\d+)\.\s*(.+?)(?:\s*\(([^)]*)\))?:\s*(.*)$/))){ p.ents.push({n:m[1],t:m[2],codes:m[3]||"",sum:m[4],ev:[]}); return; }
    if(mode==="e" && /^[-•◦]/.test(l) && p.ents.length){ p.ents[p.ents.length-1].ev.push(l.replace(/^[-•◦]\s*/,"")); return; }
    if(mode==="d") p.desc += (p.desc?" ":"")+l;
  });
  return p;
}
function openDrawer(code){
  const f = S.fn.find(x=>x.c===code); const dr=$("#drawer");
  const ro = false;
  const draft = {fn:`${f.t}\n${f.d}`, fd:f.fd, ji:f.ji, prod:prodToText(f.prod)};
  const presProd = pr => `<div class="ptitle">${esc(pr.name)}</div><p>${esc(pr.desc)}</p><div class="eyebrow" style="margin:8px 0 2px">Entregables</div>${pr.ents.map(e=>`<p style="margin:6px 0 0"><b>${e.n}. ${esc(e.t)}</b> <span class="num" style="font-size:11px;color:var(--ink-3)">${esc(e.codes)}</span>: ${esc(e.sum)}</p><ul>${e.ev.map(v=>`<li>${esc(v)}</li>`).join("")}</ul>`).join("")}`;
  const sec = (key,label,html) => `<div><div class="eyebrow">${label} ${ro?"":'<span class="edhint">· clic para editar</span>'}</div><div class="pres ${ro?"ro":""}" data-ek="${key}" tabindex="0">${html}</div></div>`;
  dr.innerHTML = `<div class="drag" title="Arrastre para ampliar"></div>
  <header><div><div class="eyebrow">Panel de mejora · ${esc(f.c)} · ${esc(f.tipo)} · Demanda ${esc(f.dem)} · Impacto ${esc(f.imp)} · ${esc(f.dec)}</div><h4>${esc(f.t)}</h4></div>
    <button class="btn sm" id="drWide">${dr.classList.contains("wide")?"⤡ Reducir":"⤢ Ampliar"}</button><button class="btn ghost sm" id="drClose" aria-label="Cerrar">✕</button></header>
  <div class="db"><div class="cols">
    <div style="display:grid;gap:14px;align-content:start">
      ${sec("fn","Función profesional (título y descripción)",`<div class="ptitle">${esc(f.c)} · ${esc(f.t)}</div><p>${esc(f.d)}</p>`)}
      ${sec("fd",`Fundamento de la demanda · ${esc(f.dem)}`,`<p>${esc(f.fd)}</p>`)}
      ${sec("ji",`Justificación del impacto · ${esc(f.imp)}`,`<p>${esc(f.ji)}</p>`)}
      <div><div class="eyebrow">Referencias</div><p>${refBtns(f.refs,"per")}</p></div>
    </div>
    <div style="display:grid;gap:14px;align-content:start">
      ${sec("prod","Producto, entregables y evidencias",presProd(f.prod))}
    </div>
  </div></div>
  <footer>
    <label class="eyebrow" for="drNote">Pedir un ajuste a Génesys</label>
    <textarea id="drNote" class="ed" rows="2" placeholder="Ej.: agrega evidencia regional o de los empleadores de convenio"></textarea>
    <div class="frow">${S.saved.p21?'<span class="mini" style="margin-right:auto">Paso 2.1 guardado · los cambios quedan en el borrador</span>':'<span class="mini" id="drDirty" style="margin-right:auto"></span>'}<button class="btn" id="drAsk">Enviar ajuste</button>${ro?"":'<button class="btn primary" id="drSave" disabled>Guardar cambios</button>'}</div>
  </footer>`;
  dr.hidden=false;
  if(!ro) dr.querySelectorAll(".pres").forEach(el=>{
    const open=()=>{ if(el.querySelector("textarea")) return; const k=el.dataset.ek;
      el.innerHTML=`<textarea class="ta-ed" rows="${k==="prod"?20:k==="fn"?5:10}">${esc(draft[k])}</textarea>`; el.classList.add("ro");
      const t=el.querySelector("textarea"); t.focus();
      t.oninput=()=>{ draft[k]=t.value; const b=$("#drSave"); if(b) b.disabled=false; const dd=$("#drDirty"); if(dd) dd.textContent="Cambios sin guardar"; };
    };
    el.onclick=open; el.onkeydown=e=>{ if(e.key==="Enter"&&!el.querySelector("textarea")){ e.preventDefault(); open(); } };
  });
  $("#drClose").onclick=closeDrawer;
  $("#drWide").onclick=()=>{ dr.style.width=""; dr.classList.toggle("wide"); $("#drWide").textContent=dr.classList.contains("wide")?"⤡ Reducir":"⤢ Ampliar"; };
  dr.querySelector(".drag").onmousedown=ev=>{ ev.preventDefault(); const pr=dr.parentElement.getBoundingClientRect();
    const mv=e=>{ const w=Math.min(Math.max(380,pr.right-e.clientX),pr.width); dr.style.width=w+"px"; dr.classList.toggle("wide", w>820); };
    const up=()=>{ removeEventListener("mousemove",mv); removeEventListener("mouseup",up); };
    addEventListener("mousemove",mv); addEventListener("mouseup",up); };
  $("#drAsk").onclick=()=>{ const v=$("#drNote").value.trim(); if(!v) return; $("#drNote").value=""; $("#prompt").value=`${f.c}: ${v}`; send(); toast("Ajuste enviado a Génesys"); };
  const sv=$("#drSave"); if(sv) sv.onclick=()=>{
    const L=draft.fn.split("\n").filter(x=>x.trim()); if(L.length){ f.t=L[0].replace(/^[^·]*·\s*/,"").trim()||f.t; f.d=L.slice(1).join(" ").trim()||f.d; }
    f.fd=draft.fd; f.ji=draft.ji; f.prod=textToProd(draft.prod, f.prod);
    refresh(); openDrawer(code); toast(`${f.c}: cambios guardados${S.saved.p21?"; vuelva a guardar el paso 2.1 para versionarlos":S.delphi?"; si alteran el sentido, marque el bloque con ↺":""}`);
  };
}
function closeDrawer(){ $("#drawer").hidden=true; }
document.addEventListener("keydown", e=>{ if(e.key==="Escape"){ closeModal(); closeDrawer(); if($("#work").classList.contains("expanded")) toggleExpand(false);} });

function toggleExpand(force){
  const w=$("#work"); const on = force===undefined ? !w.classList.contains("expanded") : force;
  w.classList.toggle("expanded", on);
  try{ const el=document.querySelector(".panel");
    if(on && el.requestFullscreen && !document.fullscreenElement) el.requestFullscreen().catch(()=>{});
    if(!on && document.fullscreenElement) document.exitFullscreen().catch(()=>{});
  }catch(e){}
  $("#expandBtn").textContent = on ? "⤡ Restaurar" : "⤢ Expandir";
  $("#expandBtn").setAttribute("aria-pressed", on);
}
$("#expandBtn").onclick=()=>{ toggleExpand(); setTimeout(fitDet,60); };
document.addEventListener("fullscreenchange",()=>{ const on=!!document.fullscreenElement; if(!on && $("#work").classList.contains("expanded")) toggleExpand(false); setTimeout(fitDet,80); });
$("#dlBtn").onclick=()=>toast("Exportación a Word (simulada)");
let tt; function toast(t){ $("#toastTxt").textContent=t; $("#toast").hidden=false; clearTimeout(tt); tt=setTimeout(()=>$("#toast").hidden=true,3200); }

/* ---------- Guardado en la nube ----------
   Una fila por escuela en public.avance con la clave F2-<COD>: el estado de cada especialidad (S.por),
   los pasos de escuela, la vista abierta y la conversación. Se escribe 1,5 s después de cada cambio. */
const CLAVE = "F2-"+ESCUELA;
let tGuardar = null, guardando = false;
function instantanea(){
  const por = {...S.por};
  if(S.k){ const o={}; PROPIO.forEach(p=>o[p]=S[p]); por[S.k]=o; }
  return {v:1, k:S.k, por, avail:[...S.avail], tab:S.tab, mode:S.mode, bulk:S.bulk, d23:S.d23, d24:S.d24, d25:S.d25, resPrompted,
    chat:$("#msgs").innerHTML, act:new Date().toISOString(),
    resumen:{p21:ESC.filter(e=>(por[e.k]||{}).saved&&por[e.k].saved.p21).length, p22:ESC.filter(e=>(por[e.k]||{}).saved&&por[e.k].saved.p22).length, total:ESC.length}};
}
function guardarLuego(){
  if(!arrancado) return;
  try{ localStorage.setItem("f2_"+ESCUELA, JSON.stringify(instantanea())); }catch(_){}
  if(!window.NUBE || !NUBE.usuario) return;
  clearTimeout(tGuardar); pintarNube("pend");
  tGuardar = setTimeout(async ()=>{
    if(S.busy){ guardarLuego(); return; }
    if(guardando){ guardarLuego(); return; }
    guardando = true;
    try{ await NUBE.poner(CLAVE, {d:instantanea(), docs:[]}); pintarNube("ok"); }
    catch(err){ console.error("[nube]", err); pintarNube("mal"); toast("No se pudo guardar en la nube: "+(err.message||err)); }
    finally{ guardando = false; }
  }, 1500);
}
function pintarNube(s){ const p=$("#nubePill"); if(!p) return;
  p.textContent = s==="ok" ? "☁ Guardado en la nube" : s==="mal" ? "☁ Sin guardar · reintentar" : "☁ Guardando…";
  p.className = "pill "+(s==="ok"?"saved":s==="mal"?"err":""); }
function restaurar(d){
  S.por = d.por||{}; Object.assign(S.mode, d.mode||{});
  ["bulk","d23","d24","d25"].forEach(k=>{ if(d[k]) S[k]=d[k]; });
  if(d.resPrompted) resPrompted = true;
  if(d.k && escK(d.k)){ S.k = null; cambiarEsp(d.k); }
  S.avail = new Set(d.avail||["entrada","ficha","refs"]);
  if(d.chat){ $("#msgs").innerHTML = d.chat; $("#msgs").querySelectorAll(".chip").forEach(b=>{ b.disabled=true; b.classList.remove("pulse"); }); }
  refresh(); if(d.tab && S.avail.has(d.tab)) setTab(d.tab);
  addMsg("agent", `<p>Retomo el avance guardado${S.spec?` en <b>${esc(S.spec)}</b> · ${esc(momLabel(S.step))}`:""}. Use el botón <b>▶</b> para seguir.</p>`);
  $("#msgs").scrollTop = $("#msgs").scrollHeight;
}
/* ---------- Reiniciar (como la Fase 1: por pasos) ----------
   Primer clic: la especialidad en trabajo vuelve al inicio de su paso; las demás se conservan.
   Si ya está en su inicio (o no hay especialidad), vuelve al momento cero de la carrera. */
const INI_ESCUELA = JSON.parse(JSON.stringify({bulk:S.bulk, d23:S.d23, d24:S.d24, d25:S.d25}));
function reiniciar(){
  if(S.busy){ toast("Génesys está trabajando · un segundo"); return; }
  closeDrawer(); closeModal();
  if(S.k && (S.step>0 || S.fn.length)){
    const n = S.spec, k = S.k;
    delete S.por[k]; S.k = null; cambiarEsp(k);
    S.mode.paquete = "per"; setTab("entrada"); refresh();
    addMsg("agent", `<p><b>Volvimos al inicio del paso 2.1 de ${esc(n)}.</b> Lo hecho en esta especialidad se descartó; las demás conservan su avance. Pulse <b>Reiniciar</b> otra vez para volver al momento cero de la carrera.</p>`,
      [{label:"Generar funciones y componentes", main:true, fn:gen21}]);
    return;
  }
  S.por = {}; S.k = null; S.spec = null; cargarEsp(ESC[0].k);
  Object.assign(S, estadoInicial(), JSON.parse(JSON.stringify(INI_ESCUELA)));
  S.avail = new Set(["entrada","ficha","refs"]); S.mode.ent = "cartera"; resPrompted = false;
  try{ localStorage.removeItem("f2_"+ESCUELA); }catch(_){}
  $("#msgs").innerHTML = ""; setTab("entrada"); refresh(); start();
  addMsg("agent", `<p><b>Volvimos al momento cero de la Fase 2.</b> Se descartó el avance de todas las especialidades de ${esc(F2.meta.nombre)}.</p>`);
}
{ const br = document.getElementById("bReinicio"); if(br) br.onclick = reiniciar; }
let arrancado = false;
{ const r0 = refresh, s0 = setTab;
  refresh = function(){ r0(); guardarLuego(); };
  setTab = function(t){ s0(t); guardarLuego(); }; }
(async function arrancar(){
  if(window.NUBE) try{ await NUBE.listo; }catch(_){}
  let b = window.NUBE && NUBE.get(CLAVE);
  if(!b || !b.d){
    try{
      const loc = localStorage.getItem("f2_"+ESCUELA);
      if(loc) b = {d: JSON.parse(loc)};
    }catch(_){}
  }
  if(b && b.d && b.d.v===1){ try{ restaurar(b.d); }catch(err){ console.error(err); renderStepper(); renderPanel(); start(); } }
  else { renderStepper(); renderPanel(); start(); }
  arrancado = true; if(b) pintarNube("ok");
})();
