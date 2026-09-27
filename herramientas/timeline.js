/* Convierte el stepper superior en una línea de tiempo al pie de la consola. */
const fs=require("fs");const path=require("path");
const R=p=>path.join(__dirname,"..",p);
/* 1. HTML: el stepper pasa al pie, después de .app */
let c=fs.readFileSync(R("consola.html"),"utf8");
const nav=`<nav class="stepper" id="stepper" aria-label="Pasos de la Fase 1"></nav>\n\n`;
if(!c.includes(nav)) throw new Error("no nav");
c=c.replace(nav,"");
c=c.replace(`<button class="asidero" id="as-gen">`,`<nav class="stepper" id="stepper" aria-label="Línea de tiempo de la Fase 1"></nav>\n\n<button class="asidero" id="as-gen">`);
fs.writeFileSync(R("consola.html"),c);

/* 2. JS: pintarStepper como línea de tiempo */
let t=fs.readFileSync(R("js/tema.js"),"utf8");
const ini=t.indexOf(" function pintarStepper(){"), fin=t.indexOf(" const _pp=window.pintarPanel;");
if(ini<0||fin<0) throw new Error("no pintarStepper");
const nuevo=` function pintarStepper(){
  const o=document.getElementById("stepper"); if(!o||typeof PROG==="undefined") return;
  const vistas=["tablero","arquitectura","equivalencia","perfil","valor","informe"];
  const cortos=["Especialidades","Competencias","Correspondencia","Objetivos","Propuesta de Valor","Estudio Prospectivo"];
  const n=PROG.length;
  let idxAct=n-1; for(let i=0;i<n;i++){ if(S.done<BASE[i]+PROG[i].subs.length){ idxAct=i; break } }
  const hechosAct=Math.max(0,S.done-BASE[idxAct]);
  const lleno=S.done>=TOTAL?100:((idxAct+Math.min(1,hechosAct/PROG[idxAct].subs.length))/(n-1))*100;
  const nodos=PROG.map((p,i)=>{
   const b=BASE[i],fin=b+p.subs.length;
   const est=S.done>=fin?"ok":(S.done>=b?"act":"fut");
   const hechos=Math.max(0,Math.min(p.subs.length,S.done-b));
   const sub=est==="act"?(p.subs[S.done-b]||""):(est==="ok"?"cerrado":p.subs.length+" momentos");
   const lista=p.subs.map((s,j)=>{const k=b+j; const e2=S.done>k?"ok":(S.done===k?"now":"wait");
     return \`<li class="\${e2}" \${S.done>=k?\`data-mom="\${k}"\`:""}><i></i>\${s}</li>\`}).join("");
   return \`<div class="tn-w \${est}" style="left:\${i/(n-1)*100}%">
     <button class="tn \${est} \${STEP_ABIERTO===i?"abierto":""}" data-st="\${vistas[i]}" data-idx="\${i}" \${S.done>=ABRE[vistas[i]]?"":"disabled"} title="\${p.id} · \${p.t} · clic para ver sus momentos">
      <span class="tn-c">\${est==="ok"?"✓":p.id}</span>
      <span class="tn-l"><b>\${cortos[i]}</b><em>\${sub}</em></span></button>
     <div class="st-pop" \${STEP_ABIERTO===i?"":"hidden"}><div class="st-pop-h">\${p.id} · \${p.t}<span>\${hechos} de \${p.subs.length}</span></div><ul>\${lista}</ul></div></div>\`}).join("");
  o.innerHTML=\`<div class="tl-k"><b>Fase 1</b><span>línea de tiempo</span></div>
   <div class="tl"><div class="tl-track"></div><div class="tl-fill" style="width:\${lleno}%"></div>\${nodos}</div>
   <div class="st-tot"><b>\${Math.min(S.done,TOTAL)}</b><span>de \${TOTAL} momentos</span></div>\`;
  o.querySelectorAll("[data-st]").forEach(b=>b.onclick=()=>{ if(b.disabled) return; const i=+b.dataset.idx;
    STEP_ABIERTO=(STEP_ABIERTO===i)?null:i; pintarCentro(b.dataset.st); pintarStepper() });
  o.querySelectorAll("[data-mom]").forEach(li=>li.onclick=ev=>{ ev.stopPropagation(); const k=+li.dataset.mom;
    let idx=0; for(let i=0;i<PROG.length;i++){ if(k>=BASE[i]) idx=i } STEP_ABIERTO=null; pintarCentro(vistas[idx]); if(k===S.done&&typeof guiar==="function") guiar(); pintarStepper() });
  document.documentElement.style.setProperty("--stepper-h",o.offsetHeight+"px");
 }
`;
t=t.slice(0,ini)+nuevo+t.slice(fin);
t=t.replace(`if(STEP_ABIERTO!==null&&!ev.target.closest(".st-w"))`,`if(STEP_ABIERTO!==null&&!ev.target.closest(".tn-w"))`);
fs.writeFileSync(R("js/tema.js"),t);

/* 3. CSS: reemplazar el bloque del stepper */
let s=fs.readFileSync(R("css/tema.css"),"utf8");
const a=s.indexOf("/* ── Stepper de pasos ── */"), z=s.indexOf(".app{height:calc(100vh - 56px - var(--stepper-h,56px))}");
if(a<0||z<0) throw new Error("no bloque css");
const css=`/* ── Línea de tiempo al pie ── */
.stepper{position:relative;z-index:25;display:flex;align-items:center;gap:18px;padding:12px 26px 8px;background:#fff;border-top:1px solid var(--linea);min-width:1240px;box-shadow:0 -4px 18px rgba(11,43,79,.06)}
body.p-off .stepper{min-width:1000px}body.g-off .stepper{min-width:960px}body.p-off.g-off .stepper{min-width:700px}
.tl-k{display:flex;flex-direction:column;min-width:70px}
.tl-k b{font-size:13px;color:var(--navy)}
.tl-k span{font-size:10px;text-transform:uppercase;letter-spacing:.08em;color:var(--gris-2)}
.tl{position:relative;flex:1;height:64px;margin:0 90px 0 70px}
.tl-track{position:absolute;left:0;right:0;top:15px;height:6px;border-radius:3px;background:#e2e8f0}
.tl-fill{position:absolute;left:0;top:15px;height:6px;border-radius:3px;background:linear-gradient(90deg,#15803d 0%,var(--navy-2) 100%);transition:width .8s cubic-bezier(.2,.7,.2,1);box-shadow:0 0 10px rgba(19,76,140,.35)}
.tl-fill:after{content:"";position:absolute;right:-2px;top:-3px;width:12px;height:12px;border-radius:50%;background:var(--navy-2);box-shadow:0 0 0 4px rgba(19,76,140,.18)}
.tn-w{position:absolute;top:0;transform:translateX(-50%);width:170px;display:flex;justify-content:center}
.tn{display:flex;flex-direction:column;align-items:center;gap:6px;background:none;border:0;padding:0;cursor:pointer;width:100%}
.tn:disabled{cursor:not-allowed}
.tn-c{width:36px;height:36px;border-radius:50%;display:grid;place-items:center;font-size:11.5px;font-weight:800;background:#fff;border:3px solid #cbd5e1;color:var(--gris);transition:transform .2s,box-shadow .2s,border-color .2s}
.tn:not(:disabled):hover .tn-c{transform:scale(1.08)}
.tn-l{display:flex;flex-direction:column;align-items:center;text-align:center;min-width:0;width:100%}
.tn-l b{font-size:11.5px;font-weight:700;color:var(--gris);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}
.tn-l em{font-style:normal;font-size:10px;color:var(--gris-2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}
.tn.ok .tn-c{background:#15803d;border-color:#15803d;color:#fff}
.tn.ok .tn-l b{color:#15803d}
.tn.act .tn-c{background:var(--navy-2);border-color:#fff;color:#fff;box-shadow:0 0 0 3px var(--navy-2),0 6px 16px rgba(19,76,140,.35);animation:pulso 2.2s infinite}
.tn.act .tn-l b{color:var(--navy)}
.tn.act .tn-l em{color:var(--navy-2);font-weight:600}
.tn.abierto .tn-c{transform:scale(1.1)}
.st-tot{display:flex;flex-direction:column;justify-content:center;align-items:flex-end;min-width:96px}
.st-tot b{font-size:22px;font-weight:800;color:var(--navy);line-height:1}
.st-tot span{font-size:10.5px;color:var(--gris)}
@keyframes pulso{0%,100%{box-shadow:0 0 0 3px var(--navy-2),0 0 0 6px rgba(19,76,140,.35)}60%{box-shadow:0 0 0 3px var(--navy-2),0 0 0 14px rgba(19,76,140,0)}}
`;
s=s.slice(0,a)+css+s.slice(z);
s=s.replace(".st-pop{position:absolute;left:0;top:calc(100% + 6px);",".st-pop{position:absolute;left:50%;transform:translateX(-50%);bottom:calc(100% + 10px);");
s=s.replace(".st-w:last-of-type .st-pop{left:auto;right:0}",".tn-w:first-of-type .st-pop{left:0;transform:none}.tn-w:last-of-type .st-pop{left:auto;right:0;transform:none}");
s=s.replace("/* momentos del paso, desplegables desde el stepper */\n.st-w{flex:1;position:relative;min-width:0;display:flex}\n.st-w .st{width:100%}\n.st.abierto{border-color:var(--navy-2);box-shadow:0 0 0 3px rgba(19,76,140,.14)}","/* momentos del paso, desplegables desde la línea de tiempo */");
s=s.replace(".st.act{background:linear-gradient(110deg,#fff 30%,#f3f7fd 50%,#fff 70%);background-size:200% 100%;animation:brillo 3.5s linear infinite}\n.st{transition:transform .2s,box-shadow .2s,border-color .2s}\n.st:not(:disabled):hover{transform:translateY(-2px)}\n","");
fs.writeFileSync(R("css/tema.css"),s);
console.log("línea de tiempo aplicada");
