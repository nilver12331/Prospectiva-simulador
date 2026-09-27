/* Momento 5 · Génesys piensa y propone (traza), la Escuela ajusta, integra y confirma; propuesta de integración a la vista. */
const fs=require("fs"),path=require("path");
const P=f=>path.join(__dirname,"..",f);
let a=fs.readFileSync(P("js/app.js"),"utf8");
const r=(x,y)=>{ if(a.split(x).length!==2) throw new Error("no único: "+x.slice(0,80)); a=a.replace(x,y) };

/* 1 · integraciones propuestas por Génesys (datos/<cod>.js → integr) */
r(`let DESC={};
let ACTA=null;`,`let DESC={};
let ACTA=null;
let INTEGR={};   // propuesta de integración de Génesys: nombre base → [nombres que absorbe]`);
r(` GUION=clon(d.guion||{}); DEMO_AJ=d.demoAj?clon(d.demoAj):null; ACTA=d.acta?clon(d.acta):null;`,
  ` GUION=clon(d.guion||{}); DEMO_AJ=d.demoAj?clon(d.demoAj):null; ACTA=d.acta?clon(d.acta):null; INTEGR=clon(d.integr||{});`);
/* 2 · candidatas: aprobadas de la misma naturaleza, o las que Génesys propone integrar */
r(`function candidatas(e){
 if(!e.sel) return [];
 return ESP.filter(o=>!o.oculta&&o!==e&&o.sel&&o.nat===e.nat);
}`,`function candidatas(e){
 if(!e.sel) return [];
 const prop=INTEGR[e.n]||[];
 return ESP.filter(o=>!o.oculta&&o!==e&&!noValorada(o)&&(o.sel||o.apr)&&(o.nat===e.nat||prop.includes(o.n)||(INTEGR[o.n]||[]).includes(e.n)));
}`);
/* 3 · columna de integración con la propuesta a la vista */
r(`   <td class="intg">\${!S.delphi?'<span class="mut">—</span>':(cand.length?\``,
  `   <td class="intg">\${!S.delphi?'<span class="mut">—</span>':(cand.length?\`
      \${(()=>{const prop=(INTEGR[e.n]||[]).map(n=>cand.find(c=>c.n===n)).filter(Boolean); return prop.length?\`<div class="int-p">✦ Génesys propone integrar con <b>\${prop.map(c=>c.n).join("</b>, <b>")}</b></div>
      \${prop.map(c=>\`<button class="b-int prop" data-merge="\${i}|\${ESP.indexOf(c)}">Integrar \${c.n.split(" ").slice(0,3).join(" ")}…</button>\`).join(" ")}\`:""})()}`);
/* 4 · aprobación (momento 3) queda registrada aparte de la casilla */
r(`  S.done=a.done; if(a.cargaCap) ESP.forEach(calcular); // con la capacidad a la vista, la propuesta pasa al criterio del momento 5`,
  `  S.done=a.done; if(a.cargaCap) ESP.forEach(calcular); // con la capacidad a la vista, la propuesta pasa al criterio del momento 5
  if(a.done===3) ESP.forEach(e=>e.apr=!!e.sel);                                  // aprobadas del momento 3
  if(a.propone) ESP.forEach(e=>{ e.selMan=false; calcular(e) });                 // momento 5: propuesta fresca de Génesys`);
r(`   const e=ESP[+c.dataset.sel]; e.sel=c.checked; e.selMan=true; pintarCentro("tablero"); marcar()});`,
  `   const e=ESP[+c.dataset.sel]; e.sel=c.checked; e.selMan=true; if(S.done<4) e.apr=c.checked; pintarCentro("tablero"); marcar()});`);
/* 5 · acto del momento 5: piensa, propone y espera la confirmación de la Escuela */
r(`  instruccion:"Confirmo la selección y el destino de cada especialidad.",
  resp:["**Segunda decisión.** Con los dos ejes cruzados: qué entra al plan, qué entra con plan de habilitación, qué va como mención y qué se revisa el próximo ciclo. Donde el panel dijo «no esencial», el cálculo no manda: manda el acta.",
        "Selección confirmada: **{SEL} especialidades** entran al plan. **Solo las seleccionadas pasan a definir competencias**; las demás quedan con destino declarado."],
  vista:"tablero",done:5,selOk:true,sal:{k:"esp",e:"seleccionado"},fue:[]},`,
`  instruccion:"Propón la selección y el destino de cada especialidad aprobada.",
  traza:["Aplicando la cadena de decisión a cada aprobada: potencial, capacidad instalada y acta del panel","Calculando la prioridad (potencial × capacidad ÷ 100) y ordenando la cartera","Buscando candidatas de la misma naturaleza que el mercado contrata en un mismo puesto","Escribiendo la propuesta de destino e integración en el tablero"],
  resp:["**Segunda decisión.** Con los dos ejes cruzados propongo el destino de cada aprobada: qué entra al plan, qué entra con plan de habilitación, qué va como mención y qué se revisa el próximo ciclo. Donde el panel dijo «no esencial», el cálculo no manda: manda el acta. Hoy la propuesta marca **{SEL} especialidades** para entrar al plan.",
        "Integraciones que propongo, porque el mercado las contrata en un mismo puesto:{G:4}",
        "La decisión es de la Escuela: revise la casilla ✓ de cada fila, integre lo que corresponda con los botones de la columna de integración y pulse **Confirmar la selección y continuar** al pie de la tabla. **Solo las seleccionadas pasan a definir competencias**."],
  vista:"tablero",done:4,propone:true,sal:{k:"esp",e:"con propuesta"},fue:[]},`);
/* 6 · la conversación espera la confirmación antes de ofrecer el guardado */
r(` const a=ACTOS[S.acto];
 if(!a){addHTML(\`<div class="humano" style="border-left-color:var(--verde);background:#f2faf5;color:#14532d">Fase 1 recorrida.</div>\`);return}
 const d=addHTML(\`<div class="acc"><button class="b-nav" id="b-act">\${a.boton}</button></div>\`);`,
` const a=ACTOS[S.acto];
 if(!a){addHTML(\`<div class="humano" style="border-left-color:var(--verde);background:#f2faf5;color:#14532d">Fase 1 recorrida.</div>\`);return}
 if(S.acto>0&&ACTOS[S.acto-1].propone&&!S.selOk){ addHTML(\`<div class="humano" id="acc-espera">Esperando la decisión de la Escuela: ajuste las casillas ✓, integre lo que corresponda y confirme con el botón verde al pie de la tabla.</div>\`); return }
 const d=addHTML(\`<div class="acc"><button class="b-nav" id="b-act">\${a.boton}</button></div>\`);`);
r(`   addHTML(\`<div class="g-fila"><div><p>Selección confirmada: <b>\${ESP.filter(e=>!e.oculta&&e.sel).length}</b> especialidades entran al plan. Sigue <b>Guardar las Especialidades Validadas</b>.</p></div></div>\`);
   guiar()};`,
`   addHTML(\`<div class="g-fila"><div><p>Selección confirmada: <b>\${ESP.filter(e=>!e.oculta&&e.sel).length}</b> especialidades entran al plan\${S.integr.length?\` con \${S.integr.length} integración\${S.integr.length>1?"es":""}\`:""}. Sigue <b>Guardar las Especialidades Validadas</b>.</p></div></div>\`);
   if(ESCUELA&&ESCUELA.demo){ const w=document.getElementById("acc-espera"); if(w) w.remove(); botones(); abajo() } else guiar()};`);
/* 7 · la barra de confirmación también en la demostración */
r(` \${(!(ESCUELA&&ESCUELA.demo)&&S.delphi&&S.done>=4&&!S.selOk)?\`<div class="guardar" id="sel-bar">`,` \${(S.delphi&&S.done>=4&&!S.selOk&&(!(ESCUELA&&ESCUELA.demo)||S.acto>=5))?\`<div class="guardar" id="sel-bar">`);
r(` \${(!(ESCUELA&&ESCUELA.demo)&&S.selOk&&S.done===5)?\`<div class="guardar"><div><b>Selección confirmada</b>`,` \${(S.selOk&&S.done===5)?\`<div class="guardar"><div><b>Selección confirmada</b>`);
fs.writeFileSync(P("js/app.js"),a);

/* prueba: confirma la selección cuando la conversación la espera */
let p=fs.readFileSync(P("herramientas/prueba.js"),"utf8");
const px=`  { const cg=document.getElementById("cap-guardar"); if(cg){ cg.click(); await espera(300); out.push("  · Declarar y procesar → capOk="+S.capOk) } }`;
if(!p.includes(px)) throw new Error("no prueba");
p=p.replace(px,px+`
  { const bs=document.getElementById("b-sel-ok"); if(bs&&!bs.disabled&&!document.getElementById("b-act")){ bs.click(); await espera(300); out.push("  · Confirmar la selección → selOk="+S.selOk+" sel="+ESP.filter(e=>!e.oculta&&e.sel).length) } }`);
fs.writeFileSync(P("herramientas/prueba.js"),p);

/* datos: propuesta de integración y frase de Génesys */
let c=fs.readFileSync(P("herramientas/cartera-a-datos.js"),"utf8");
const cx=` D.esp=esp; D.desc=desc; D.puesto=puesto; D.emprende=emprende; D.req=req;`;
if(c.split(cx).length!==2) throw new Error("no cartera-a-datos");
c=c.replace(cx,cx+`
 /* Momento 5 · integraciones que Génesys propone (acordadas con la Escuela el 24-09-2026; el panel las sugirió en la ronda 1) */
 const INT={SIS:{"SIS-03":["SIS-13"],"SIS-04":["SIS-11"],"SIS-05":["SIS-12","SIS-06"],"SIS-02":["SIS-14"],"SIS-01":["SIS-09"]},
            NUT:{"NUT-01":["NUT-08","NUT-14"],"NUT-02":["NUT-09"],"NUT-03":["NUT-10"]}}[cod];
 const nom=k=>(esp.find(e=>e.cod===k)||{}).n;
 D.integr=Object.fromEntries(Object.entries(INT).map(([b,l])=>[nom(b),l.map(nom).filter(Boolean)]).filter(x=>x[0]));
 D.guion=Object.assign({},D.guion,{4:"<ul>"+Object.entries(D.integr).map(([b,l])=>"<li><b>"+b+"</b> con "+l.join(" y ")+"</li>").join("")+"</ul>"});`);
fs.writeFileSync(P("herramientas/cartera-a-datos.js"),c);
fs.appendFileSync(P("css/tema.css"),`.int-p{font-size:11px;color:var(--navy);background:#eaf1f8;border-radius:6px;padding:5px 8px;margin-bottom:6px;line-height:1.4}
.b-int.prop{border-color:var(--navy-2);color:var(--navy);background:#fff;margin:0 4px 6px 0}
`);
console.log("momento 5 aplicado");
