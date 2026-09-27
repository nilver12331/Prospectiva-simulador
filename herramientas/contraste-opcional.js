/* Paso 1.2 · momento 2 opcional: la conversación ofrece «Contrastar» y «Omitir»; al contrastar, Génesys pide el plan (cualquier archivo),
   simula su lectura y sigue. Si se omite, las competencias pasan a las compuertas declaradas como nuevas. */
const fs=require("fs"),path=require("path");
const P=f=>path.join(__dirname,"..",f);
let a=fs.readFileSync(P("js/app.js"),"utf8");
const r=(x,y)=>{ if(a.split(x).length!==2) throw new Error("no único: "+x.slice(0,80)); a=a.replace(x,y) };

/* 1 · el acto del contraste es opcional y pide el plan */
r(` {boton:"Contrastar con el plan vigente",sec:"Ver el plan de estudios",
  instruccion:"Abre el plan de estudios y contrasta lo determinado con la formulación vigente (momento opcional).",
  traza:["Levantando el sello: abriendo el plan de estudios desde Fuentes",`,
` {boton:"Contrastar con el plan vigente",sec:"Ver el plan de estudios",opcional:"Omitir el contraste y revisar la estructura",pidePlan:true,
  instruccion:"Abre el plan de estudios y contrasta lo determinado con la formulación vigente (momento opcional).",
  traza:["Levantando el sello: leyendo {PLANARCH}",`);
r(`  C1:1+((VPC.cad&&VPC.cad.esp)||[]).length,AVISOS:GUION.avisos||"—",OFERTA:GUION.oferta||"—",CAMPO:(ESCUELA&&ESCUELA.campo)||"el campo",ESC:nombreEsc()};`,
  `  C1:1+((VPC.cad&&VPC.cad.esp)||[]).length,AVISOS:GUION.avisos||"—",OFERTA:GUION.oferta||"—",CAMPO:(ESCUELA&&ESCUELA.campo)||"el campo",ESC:nombreEsc(),
  PLANARCH:S.planArchivo?"«"+S.planArchivo+"»":"el plan de estudios adjunto en Fuentes",
  TRZ:S.contrasteOmitido?"sin contraste con el plan, todas se declaran nuevas":REFN+" se reforman y "+(CONN===0?"ninguna se conserva literal":(CONN===1?"1 se conserva literal":CONN+" se conservan literal"))};`);
r(`  resp:["Guardadas. Las {C} competencias quedan congeladas con sus capacidades y su trazabilidad: {REF} se reforman y {CONT}. **Paso 1.2 cerrado.**",`,
  `  resp:["Guardadas. Las {C} competencias quedan congeladas con sus capacidades y su trazabilidad: {TRZ}. **Paso 1.2 cerrado.**",`);

/* 2 · estado */
r(`capForm:false,acta:false,verPlan:false,capAy:null,capAg:true,capOk:false,`,`capForm:false,acta:false,verPlan:false,capAy:null,capAg:true,capOk:false,planArchivo:null,contrasteOmitido:false,`);
r(`  paso:{done:S.done,vista:S.vista,salE:S.salE,delphi:S.delphi,capOk:S.capOk,selOk:S.selOk,`,`  paso:{done:S.done,vista:S.vista,salE:S.salE,delphi:S.delphi,capOk:S.capOk,planArchivo:S.planArchivo,contrasteOmitido:S.contrasteOmitido,selOk:S.selOk,`);
r(` p=p||{}; S.decisionUpdated=false; S.done=p.done||0; S.vista=p.vista||"inicio"; S.salE=p.salE||{}; S.delphi=!!p.delphi; S.capOk=!!p.capOk; S.selOk=!!p.selOk;`,
  ` p=p||{}; S.decisionUpdated=false; S.done=p.done||0; S.vista=p.vista||"inicio"; S.salE=p.salE||{}; S.delphi=!!p.delphi; S.capOk=!!p.capOk; S.planArchivo=p.planArchivo||null; S.contrasteOmitido=!!p.contrasteOmitido; S.selOk=!!p.selOk;`);
r(` S.acto=0; S.det=null; S.f={dec:[]}; S.capForm=false; S.capAg=true; S.capTodas=false; S.capOk=false;`,` S.acto=0; S.det=null; S.f={dec:[]}; S.capForm=false; S.capAg=true; S.capTodas=false; S.capOk=false; S.planArchivo=null; S.contrasteOmitido=false;`);

/* 3 · botones: el momento opcional ofrece las dos salidas */
r(` const d=addHTML(\`<div class="acc"><button class="b-nav" id="b-act">\${a.boton}</button></div>\`);
 d.querySelector("#b-act").onclick=()=>ejecutar(d);
}`,
` const d=addHTML(\`<div class="acc"><button class="b-nav" id="b-act">\${a.boton}</button>\${a.opcional?\`<button class="b-out2" id="b-omitir">\${a.opcional} ›</button>\`:""}</div>\`);
 d.querySelector("#b-act").onclick=()=>ejecutar(d);
 const om=d.querySelector("#b-omitir"); if(om) om.onclick=()=>omitirActo(d);
}
/* Momento opcional omitido: se da por resuelto y la conversación sigue con el siguiente. */
function omitirActo(cont){
 const a=ACTOS[S.acto];
 cont.innerHTML=\`<div class="acc"><button class="b-hecho">\${a.boton} · omitido</button></div>\`;
 addHTML(\`<div class="burbuja">Omito el contraste con el plan vigente.</div>\`);
 if(a.pidePlan){ S.contrasteOmitido=true; TRAZA=[]; S.done=Math.max(S.done,a.done); S.salE.comp=S.salE.comp||"borrador"; }
 addHTML(\`<div class="g-fila"><div><p>Contraste omitido. Las <b>\${ARQ.length} competencias</b> pasan a las compuertas tal como se derivaron, con la trazabilidad declarada como <b>competencias nuevas</b>. Si más adelante adjunta el plan, el contraste puede hacerse antes de guardar.</p></div></div>\`);
 S.acto++; pintarCentro(a.vista); pintarPanel(); marcar(); botones(); abajo();
}
/* Génesys pide el plan antes de contrastar: cualquier archivo sirve; se registra en Fuentes y se simula su lectura. */
function pedirPlan(cont){
 const a=ACTOS[S.acto];
 cont.innerHTML=\`<div class="acc"><button class="b-hecho">\${a.boton}</button></div>\`;
 addHTML(\`<div class="burbuja">Contrasta las competencias con el plan vigente.</div>\`);
 const d=addHTML(\`<div class="g-fila"><div><p>Para contrastar necesito el <b>plan de estudios vigente</b>. Hasta ahora estuvo sellado; al adjuntarlo lo abro por primera vez. Sirve PDF, Word, texto o Markdown.</p>
  <div class="acc" style="margin-top:8px"><label class="b-nav" style="cursor:pointer">📎 Adjuntar el plan de estudios<input type="file" id="plan-file" hidden></label><button class="b-out2" id="b-omitir2">Omitir el contraste ›</button></div></div></div>\`);
 d.querySelector("#plan-file").onchange=ev=>{ const f=ev.target.files&&ev.target.files[0]; if(f) planAdjuntado(f.name) };
 d.querySelector("#b-omitir2").onclick=()=>{ d.remove(); const c=addHTML(""); omitirActo(c) };
}
function planAdjuntado(nombre){
 S.planArchivo=nombre; S.fue.push({ic:/\\.pdf$/i.test(nombre)?"PDF":"DOC",t:"Plan de estudios vigente",n:nombre}); pintarPanel(); marcar();
 document.querySelectorAll("#plan-file").forEach(i=>{ const acc=i.closest(".acc"); if(acc) acc.innerHTML=\`<span class="tl-t">✓ Plan adjunto: <b>\${nombre}</b></span>\` });
 addHTML(\`<div class="burbuja">Adjunto el plan de estudios vigente: \${nombre}.</div>\`);
 const d=addHTML(\`<div class="acc"><button class="b-nav" id="b-act">\${ACTOS[S.acto].boton}</button></div>\`);
 ejecutar(d);
}
window.planAdjuntado=planAdjuntado;`);
r(`function ejecutar(cont){
 const a=ACTOS[S.acto],b=cont.querySelector("#b-act");`,
`function ejecutar(cont){
 const a=ACTOS[S.acto],b=cont.querySelector("#b-act");
 if(a.pidePlan&&!S.planArchivo){ pedirPlan(cont); return }`);

/* 4 · tablero: sin contraste no hay columnas del plan ni tabla de trazabilidad */
r('  ${PLAN.length&&S.done>=8?`<button class="ic-b ${S.comparar?"on":""}" id="b-comparar">','  ${PLAN.length&&S.done>=8&&!S.contrasteOmitido?`<button class="ic-b ${S.comparar?"on":""}" id="b-comparar">');
r(`   <tbody>\${TRAZA.map(t=>\`<tr><td>\${t.p}</td><td><span class="chip \${TD[t.d]}">\${t.d}</span></td>
    <td>\${t.c}</td><td class="f-sub" style="margin:0">\${t.s}</td></tr>\`).join("")}</tbody></table></div>`,
`   <tbody>\${S.contrasteOmitido||!TRAZA.length?\`<tr><td colspan="4" class="f-sub" style="margin:0">Contraste omitido: no hay plan vigente contrastado. Las \${ARQ.length} competencias se declaran <b>nuevas</b>; si adjunta el plan antes de guardar, la trazabilidad se deriva del contraste.</td></tr>\`:TRAZA.map(t=>\`<tr><td>\${t.p}</td><td><span class="chip \${TD[t.d]}">\${t.d}</span></td>
    <td>\${t.c}</td><td class="f-sub" style="margin:0">\${t.s}</td></tr>\`).join("")}</tbody></table></div>`);
fs.writeFileSync(P("js/app.js"),a);

/* prueba: cuando Génesys pide el plan, se adjunta uno de prueba */
let p=fs.readFileSync(P("herramientas/prueba.js"),"utf8");
const px=`  { const bs=document.getElementById("b-sel-ok"); if(bs&&!bs.disabled&&!document.getElementById("b-act")){`;
if(!p.includes(px)) throw new Error("no prueba");
p=p.replace(px,`  { if(document.getElementById("plan-file")){ planAdjuntado("plan-de-estudios-prueba.pdf"); out.push("  · Plan adjuntado (prueba)"); for(let i=0;i<80;i++){ await espera(100); const nb=document.getElementById("b-act"); if(nb&&!nb.disabled) break } } }
`+px);
fs.writeFileSync(P("herramientas/prueba.js"),p);
console.log("contraste opcional aplicado");
