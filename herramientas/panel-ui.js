/* Momento 2 · el acta del tablero muestra el veredicto real del panel, el guardián y las preguntas abiertas. */
const fs=require("fs"),path=require("path");
const APP=path.join(__dirname,"..","js","app.js"), CSS=path.join(__dirname,"..","css","tema.css");
let a=fs.readFileSync(APP,"utf8");
const r=(x,y)=>{ if(!a.includes(x)) throw new Error("no: "+x.slice(0,80)); a=a.replace(x,y) };

r(`let DESC={};`,`let DESC={};
let ACTA=null;`);
r(` GUION=clon(d.guion||{}); DEMO_AJ=d.demoAj?clon(d.demoAj):null;`,
  ` GUION=clon(d.guion||{}); DEMO_AJ=d.demoAj?clon(d.demoAj):null; ACTA=d.acta?clon(d.acta):null;`);
r(`El acta queda abajo: calificación de cada experto, mediana, I-CVI, CVR, acuerdo y RIC.",`,
  `El acta queda abajo: calificación de cada experto, mediana, I-CVI, CVR, acuerdo y RIC.{G:1}",`);

/* chips del veredicto y helpers del acta */
r(`const chipDec=d=>\`<span class="chip \${DEC[d][0]}">\${DEC[d][1]}</span>\`;`,
`const chipDec=d=>\`<span class="chip \${DEC[d][0]}">\${DEC[d][1]}</span>\`;
const VER={"Esencial":"c-esen","Esencial · sin unanimidad":"c-esen2","No esencial":"c-noesen","Sin consenso · ronda 2":"c-r2"};
const verChip=v=>\`<span class="chip \${VER[v]||"c-prop"}">\${v}</span>\`;
const att=s=>String(s==null?"":s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;");
const REGLAS_G=["Modo de ejercicio declarado","Ninguna tecnología como especialidad","Fuente fechada y enlace verificable","Crecimiento con serie contada","Alcance del título","Sello del plan intacto","Capacidad sin inventar"];
function resumenActa(){
 const L=ESP.filter(e=>!e.oculta&&!noValorada(e));
 if(L.some(e=>e.panel&&e.panel.ver)){
  const c=k=>L.filter(e=>(e.panel||{}).ver===k).length;
  const sc=c("Sin consenso · ronda 2");
  return \`De las \${L.length} valoradas, <b>\${c("Esencial")+c("Esencial · sin unanimidad")}</b> salieron esenciales, <b>\${c("No esencial")}</b> no esenciales y <b>\${sc}</b> \${sc===1?"queda":"quedan"} sin consenso: \${sc===1?"pasaría":"pasarían"} a una ronda 2 si la Dirección lo pide.\`;
 }
 const b=L.filter(e=>{const p=panelDe(e);return p.icvi<0.83||p.ac<75}).length;
 return b?b+(b===1?" especialidad queda":" especialidades quedan")+" bajo umbral y pasarían a una ronda 2 si la Dirección lo pide.":"Ninguna especialidad queda bajo umbral.";
}
function actaExtra(){
 if(!ACTA) return "";
 const g=ACTA.guardian||{}, ab=ACTA.abiertas||{};
 const preg=[["faltan","¿Qué especialidad real del campo falta?"],["integrar","¿Qué candidatas deberían integrarse?"],["noPuesto","¿Cuál no es puesto ni negocio?"]];
 const items=k=>Object.entries(ab[k]||{}).flatMap(([rol,l])=>l.map(t=>\`<li><b>\${rol}</b> \${t}</li>\`)).join("");
 return \`<div class="acta-x">
  <div class="acta-g"><div class="acta-xh"><b>Guardián metodológico</b><em>verifica las siete reglas del método y no califica · \${(g.reglas||[]).filter(x=>/No/.test(x.veredicto)).length} por corregir</em></div>
   <table class="tb-guard"><tbody>\${(g.reglas||[]).map(x=>\`<tr><td class="num">\${x.n}</td><td>\${REGLAS_G[x.n-1]||""}</td><td><span class="chip \${/No/.test(x.veredicto)?"c-r2":"c-esen"}">\${x.veredicto}</span></td><td class="mut">\${x.hallazgo}</td></tr>\`).join("")}</tbody></table>
   \${(g.observaciones||[]).length?\`<details class="acta-d"><summary>Observaciones del guardián · \${g.observaciones.length}</summary><ul>\${g.observaciones.map(o=>\`<li>\${o}</li>\`).join("")}</ul></details>\`:""}
  </div>
  <div class="acta-q"><div class="acta-xh"><b>Preguntas abiertas de la ronda 1</b><em>cada experto responde por separado; lo que proponen dos o más entra a la ronda 2</em></div>
   \${preg.map(p=>{const n=Object.values(ab[p[0]]||{}).reduce((s,l)=>s+l.length,0); return \`<details class="acta-d"><summary>\${p[1]} <span>\${n}</span></summary><ul>\${items(p[0])}</ul></details>\`}).join("")}
  </div></div>\`;
}`);

/* tabla del acta: fila no valorada, tooltip con el comentario, veredicto del panel */
r(`   <tbody>\${ESP.filter(e=>!e.oculta).map(e=>{const pn=panelDe(e);
     return \`<tr><td>\${e.n}</td>
      \${pn.p.map(v=>\`<td class="num"><span class="et v\${v}" style="min-width:22px">\${v}</span></td>\`).join("")}`,
`   <tbody>\${ESP.filter(e=>!e.oculta).map(e=>{const pn=panelDe(e);
     if(noValorada(e)) return \`<tr class="fuera"><td>\${e.n}</td><td colspan="11" class="mut">No se valora: devuelta por la regla del puesto (empleo \${e.puesto} · negocio \${e.emprende}). No entra al panel.</td></tr>\`;
     return \`<tr><td>\${e.n}</td>
      \${pn.p.map((v,i)=>\`<td class="num"><span class="et v\${v}" style="min-width:22px" title="\${att(EXPERTOS[i]?EXPERTOS[i][1]:"")}\${pn.com&&pn.com[EXPERTOS[i][0]]?": "+att(pn.com[EXPERTOS[i][0]]):""}">\${v}</span></td>\`).join("")}`);
r(`<th class="num">RIC</th><th style="width:130px">Decisión</th></tr></thead>`,
  `<th class="num">RIC</th><th style="width:150px">Veredicto</th></tr></thead>`);
r(`      <td>\${chipDec(e.dec)}</td></tr>\`}).join("")}</tbody></table></div>`,
  `      <td>\${pn.ver?verChip(pn.ver):chipDec(e.dec)}</td></tr>\`}).join("")}</tbody></table></div>`);
r(`    \${(()=>{const b=ESP.filter(e=>!e.oculta).filter(e=>{const p=panelDe(e);return p.icvi<0.83||p.ac<75}).length; return b?b+(b===1?" especialidad queda":" especialidades quedan")+" bajo umbral y pasarían a una ronda 2 si la Dirección lo pide.":"Ninguna especialidad queda bajo umbral."})()}</div>
  </div>\`:""}</div>\`:""}`,
`    \${resumenActa()}</div>\${actaExtra()}
  </div>\`:""}</div>\`:""}`);
fs.writeFileSync(APP,a);

let s=fs.readFileSync(CSS,"utf8");
s+=`
/* ── Acta del panel · veredicto, guardián y preguntas abiertas ── */
.chip.c-esen{background:#dcfce7;color:#15803d}
.chip.c-esen2{background:#ecfdf5;color:#047857;border:1px dashed #6ee7b7}
.chip.c-noesen{background:#f1f5f9;color:#64748b}
.chip.c-r2{background:#fef3c7;color:#a35c06}
.tb-acta tr.fuera td{color:var(--gris-2);font-style:italic}
.acta-x{display:grid;grid-template-columns:1.2fr 1fr;gap:14px;margin-top:14px}
@media (max-width:1000px){.acta-x{grid-template-columns:1fr}}
.acta-g,.acta-q{background:#fff;border:1px solid var(--linea);border-radius:12px;padding:12px 14px;animation:subir .3s both}
.acta-xh{display:flex;flex-direction:column;gap:2px;margin-bottom:8px}
.acta-xh b{font-size:12.5px;color:var(--navy)}
.acta-xh em{font-style:normal;font-size:11px;color:var(--gris)}
.tb-guard{width:100%;border-collapse:collapse;font-size:11.5px}
.tb-guard td{padding:6px 6px;border-top:1px solid var(--linea-2);vertical-align:top;line-height:1.45}
.tb-guard td.num{width:18px;color:var(--gris-2);font-weight:700}
.tb-guard td.mut{color:var(--gris);font-size:11px}
.acta-d{margin-top:6px;border-top:1px solid var(--linea-2);padding-top:6px}
.acta-d summary{font-size:11.5px;color:var(--tinta);font-weight:600;cursor:pointer;display:flex;justify-content:space-between;gap:8px}
.acta-d summary span{font-size:10.5px;font-weight:700;color:#fff;background:var(--navy-2);border-radius:10px;padding:1px 8px}
.acta-d ul{margin:6px 0 2px;padding-left:16px;font-size:11.5px;color:#374151;line-height:1.5}
.acta-d li{margin-bottom:4px}
.acta-d li b{color:var(--navy);margin-right:4px}
`;
fs.writeFileSync(CSS,s);
console.log("acta UI aplicada");
