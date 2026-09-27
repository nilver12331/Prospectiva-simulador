/* Tema de la consola: stepper de los seis pasos, modo rápido, botón superior y portada.
   Corre después de js/app.js y solo envuelve funciones existentes. */
(function(){
 /* ── Stepper: los seis pasos con su estado ── */
 let STEP_ABIERTO=null;
 document.addEventListener("click",ev=>{ if(STEP_ABIERTO!==null&&!ev.target.closest(".tn-w")){ STEP_ABIERTO=null; pintarStepper() } });
 function pintarStepper(){
  const o=document.getElementById("stepper"); if(!o||typeof PROG==="undefined") return;
  const vistas=["tablero","arquitectura","equivalencia","perfil","valor","informe"];
  const cortos=["Especialidades","Competencias","Correspondencia","Objetivos","Propuesta de Valor","Estudio Prospectivo"];
  const n=PROG.length;
  let idxAct=n-1; for(let i=0;i<n;i++){ if(S.done<BASE[i]+PROG[i].subs.length){ idxAct=i; break } }
  const hechosAct=Math.max(0,S.done-BASE[idxAct]);
  /* Los seis pasos y la bandera final ocupan intervalos iguales de la línea. */
  const nodoPct=i=>i/n*100;
  const fraccion=Math.min(1,hechosAct/PROG[idxAct].subs.length);
  const lleno=S.done>=TOTAL?100:nodoPct(idxAct)+(fraccion*(idxAct===n-1?100-nodoPct(idxAct):nodoPct(idxAct+1)-nodoPct(idxAct)));
  const nodos=PROG.map((p,i)=>{
   const b=BASE[i],fin=b+p.subs.length;
   const est=S.done>=fin?"ok":(S.done>=b?"act":"fut");
   const hechos=Math.max(0,Math.min(p.subs.length,S.done-b));
   const sub=est==="act"?(p.subs[S.done-b]||""):(est==="ok"?"cerrado":p.subs.length+" momentos");
   const lista=p.subs.map((s,j)=>{const k=b+j; const e2=S.done>k?"ok":(S.done===k?"now":"wait");
     return `<li class="${e2}" ${S.done>=k?`data-mom="${k}"`:""}><i></i>${s}</li>`}).join("");
   return `<div class="tn-w ${est}" style="left:${nodoPct(i)}%">
     <button class="tn ${est} ${STEP_ABIERTO===i?"abierto":""}" data-st="${vistas[i]}" data-idx="${i}" ${S.done>=ABRE[vistas[i]]?"":"disabled"} title="${p.id} · ${p.t} · clic para ver sus momentos">
      <span class="tn-c">${est==="ok"?"✓":p.id}</span>
      <span class="tn-l"><b>${cortos[i]}</b><em>${sub}</em></span></button>
     <div class="st-pop" ${STEP_ABIERTO===i?"":"hidden"}><div class="st-pop-h">${p.id} · ${p.t}<span>${hechos} de ${p.subs.length}</span></div><ul>${lista}</ul></div></div>`}).join("");
  o.innerHTML=`<div class="tl-k"><b>Fase 1</b></div>
   <div class="tl"><div class="tl-track"></div><div class="tl-fill" style="width:${lleno}%"></div>${nodos}<div class="tl-finish ${S.done>=TOTAL?"done":""}" title="Fase 1 cerrada"><span class="tl-flag" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 21V4m0 1c4-3 7 3 14 0v9c-7 3-10-3-14 0"/><path d="M3 21h4"/></svg></span><b>Fase 1</b><em>cerrada</em></div></div>
   <div class="st-tot"><b>${Math.min(S.done,TOTAL)}</b><span>de ${TOTAL} momentos</span></div>`;
  o.querySelectorAll("[data-st]").forEach(b=>b.onclick=()=>{ if(b.disabled) return; const i=+b.dataset.idx;
    STEP_ABIERTO=(STEP_ABIERTO===i)?null:i; pintarCentro(b.dataset.st); pintarStepper() });
  o.querySelectorAll("[data-mom]").forEach(li=>li.onclick=ev=>{ ev.stopPropagation(); const k=+li.dataset.mom;
    let idx=0; for(let i=0;i<PROG.length;i++){ if(k>=BASE[i]) idx=i } STEP_ABIERTO=null; pintarCentro(vistas[idx]); if(k===S.done&&typeof guiar==="function") guiar(); pintarStepper() });
  document.documentElement.style.setProperty("--stepper-h",o.offsetHeight+"px");
 }
 const _pp=window.pintarPanel;
 window.pintarPanel=function(){ _pp.apply(this,arguments); pintarStepper() };
 const _pt=window.pintarTabs;
 window.pintarTabs=function(){ _pt.apply(this,arguments); pintarStepper() };

 /* ── Selector de escuela con diseño propio (el <select> nativo queda oculto y sigue mandando) ── */
 const sel=document.getElementById("sel-escuela");
 const pick=document.getElementById("pick"), pb=document.getElementById("pick-b"), pl=document.getElementById("pick-l");
 function pintarPick(){
  if(!pick||!sel||typeof ESCUELAS==="undefined") return;
  const act=ESCUELAS.find(x=>x.cod===sel.value)||ESCUELAS[0]; if(!act) return;
  pb.querySelector(".pick-i").textContent=act.icono||"🎓";
  pb.querySelector(".pick-t b").textContent=act.nombre;
  pb.querySelector(".pick-t em").textContent=act.plan||"Plan vigente";
  pl.innerHTML=ESCUELAS.map(x=>{ let done=0; const b=NUBE.get(x.cod); if(b&&b.d&&b.d.paso) done=b.d.paso.done||0;
   if(x.cod===sel.value&&typeof S!=="undefined") done=S.done;
   const pct=Math.round(Math.min(done,TOTAL)/TOTAL*100);
   return `<button class="pick-o ${x.cod===sel.value?"on":""}" role="option" data-cod="${x.cod}" style="--c:${x.color||"#134c8c"}">
     <span class="pick-oi">${x.icono||"🎓"}</span>
     <span class="pick-ot"><b>${x.nombre}</b><em>${x.facultad?"Facultad de "+x.facultad+" · ":""}${x.plan||"Plan vigente"}</em>
       <span class="pick-p"><i><u style="width:${pct}%"></u></i><small>${done>=TOTAL?"Fase 1 cerrada":(done?done+" de "+TOTAL+" momentos":"Sin iniciar")}</small></span></span>
     <span class="pick-ok">${x.cod===sel.value?"✓":""}</span></button>`}).join("");
  pl.querySelectorAll("[data-cod]").forEach(b=>b.onclick=()=>{ cerrarPick(); if(b.dataset.cod===sel.value) return; sel.value=b.dataset.cod; sel.dispatchEvent(new Event("change")) });
 }
 function cerrarPick(){ if(pl){ pl.hidden=true; pick.classList.remove("abierto") } }
 if(pb){ pb.onclick=ev=>{ ev.stopPropagation(); if(pl.hidden){ pintarPick(); pl.hidden=false; pick.classList.add("abierto") } else cerrarPick() };
  document.addEventListener("click",ev=>{ if(!ev.target.closest("#pick")) cerrarPick() });
  document.addEventListener("keydown",ev=>{ if(ev.key==="Escape") cerrarPick() }); }
 const _ps=window.pintarSelector; window.pintarSelector=function(){ _ps.apply(this,arguments); pintarPick() };

 /* ── Plegar el panel derecho, como la conversación de Génesys ── */
 const bp=document.getElementById("btn-pan");
 if(bp) bp.onclick=()=>{ document.body.classList.add("p-off"); if(typeof sinc==="function") sinc() };

 /* ── Botón superior: dispara el acto pendiente de Génesys ── */
 const bt=document.getElementById("btn-top");
 if(bt) bt.onclick=()=>{
  const b=document.getElementById("b-act");
  if(b&&!b.disabled){ b.click(); document.body.classList.remove("g-off"); return }
  const chat=document.getElementById("chat"); if(chat) chat.scrollTop=chat.scrollHeight;
 };

 /* ── Etiqueta del selector de escuela con el color de la carrera ── */
 function colorear(){ if(!sel||typeof ESCUELA==="undefined"||!ESCUELA) return; document.documentElement.style.setProperty("--carrera",ESCUELA.color||"#0a4a8f") }
 const _ce=window.cargarEscuela;
 window.cargarEscuela=async function(){ const r=await _ce.apply(this,arguments); colorear(); pintarStepper(); pintarPick(); return r };
 setTimeout(()=>{ colorear(); pintarStepper(); pintarPick() },0);
})();

/* ═══════════════ MOVIMIENTO ═══════════════
   Numera los hijos de cada bloque para el escalonado CSS, revela las respuestas
   de Génesys párrafo a párrafo y anima los contadores. */
(function(){
 const red=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
 function numerar(raiz){
  if(!raiz) return;
  [...raiz.children].forEach((h,i)=>h.style.setProperty("--i",Math.min(i,14)));
  raiz.querySelectorAll("tbody").forEach(tb=>[...tb.rows].forEach((r,i)=>r.style.setProperty("--i",Math.min(i,16))));
  [".kpi",".pf-k",".pf-o",".sub-c",".di-c",".vp-s",".cad-c",".fi-c",".ac","svg circle[data-pt]",".chip",".et"].forEach(sel=>{
   raiz.querySelectorAll(sel).forEach((o,i)=>o.style.setProperty("--i",Math.min(i,18)));
  });
 }
 /* pintarCentro: vuelve a lanzar el escalonado solo cuando cambia la vista, no en cada marca */
 const _pc=window.pintarCentro; let vistaPrev=null;
 window.pintarCentro=function(v){
  const r=_pc.apply(this,arguments);
  const o=document.getElementById("vista"); if(!o) return r;
  if(v!==vistaPrev&&!red){ o.classList.remove("anim"); void o.offsetWidth; numerar(o); o.classList.add("anim") }
  else o.classList.remove("anim");
  vistaPrev=v; return r;
 };
 /* addHTML: párrafos de Génesys revelados uno a uno */
 const _add=window.addHTML;
 window.addHTML=function(h){
  const d=_add.apply(this,arguments);
  if(d&&!red) d.querySelectorAll(".g-fila p").forEach((p,i)=>p.style.setProperty("--i",Math.min(i,6)));
  return d;
 };
 /* contador del stepper: salta cuando cambia */
 let ultimoTot=null;
 const obs=new MutationObserver(()=>{ const b=document.querySelector(".st-tot b"); if(!b) return;
  if(ultimoTot!==null&&b.textContent!==ultimoTot){ b.classList.remove("salta"); void b.offsetWidth; b.classList.add("salta") }
  ultimoTot=b.textContent });
 const st=document.getElementById("stepper"); if(st) obs.observe(st,{childList:true,subtree:true});
 /* números de KPI que cuentan hacia arriba al aparecer */
 function contar(o){ const fin=parseInt(o.textContent,10); if(isNaN(fin)||o.dataset.contado) return; o.dataset.contado="1";
  const t0=performance.now(), dur=650; const paso=t=>{ const k=Math.min(1,(t-t0)/dur), e=1-Math.pow(1-k,3); o.textContent=Math.round(fin*e); if(k<1) requestAnimationFrame(paso) }; requestAnimationFrame(paso) }
 const _pc2=window.pintarCentro;
 window.pintarCentro=function(){ const r=_pc2.apply(this,arguments);
  if(!red) document.querySelectorAll("#vista.anim .kpi b, #vista.anim .tl-1 b").forEach(o=>{ if(/^\d+$/.test(o.textContent.trim())) contar(o) });
  return r };
})();

/* ── Repintar con un modal abierto: sin volver a animarlo y conservando su desplazamiento ── */
(function(){
 const _pc=window.pintarCentro;
 window.pintarCentro=function(){
  const dr=document.querySelector(".drawer"), cuerpo=dr&&dr.querySelector(".dr-b"), tabla=dr&&dr.querySelector(".mx-cap,.scroll-x");
  const y=cuerpo?cuerpo.scrollTop:0, x=tabla?tabla.scrollLeft:0, yd=dr?dr.scrollTop:0;
  if(dr) document.body.classList.add("modal-quieto");
  const r=_pc.apply(this,arguments);
  const nd=document.querySelector(".drawer");
  if(dr&&nd){ const nc=nd.querySelector(".dr-b"), nt=nd.querySelector(".mx-cap,.scroll-x"); if(nc) nc.scrollTop=y; if(nt) nt.scrollLeft=x; nd.scrollTop=yd }
  if(dr) requestAnimationFrame(()=>document.body.classList.remove("modal-quieto"));
  return r;
 };
})();
