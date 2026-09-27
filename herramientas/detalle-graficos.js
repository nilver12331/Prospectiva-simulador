/* Reemplaza detalle(e,q) de js/app.js por una versión con mini-gráficos de barras (1–4) y añade su CSS a tema.css. */
const fs=require("fs"),path=require("path");
const APP=path.join(__dirname,"..","js","app.js"), CSS=path.join(__dirname,"..","css","tema.css");
let a=fs.readFileSync(APP,"utf8");
const ini=a.indexOf("function detalle(e,q){"), fin=a.indexOf("\n}\n",ini)+3;
if(ini<0) throw new Error("no detalle");
const nuevo=`function detalle(e,q){
 /* Mini-gráficos: cada subvariable es una barra horizontal en escala 1–4 (un solo tono, etiqueta del nivel en texto,
    peso en gris). Tooltip por barra con el dato que la sustenta (DOCIND). Sin leyenda: cada gráfico tiene una sola serie. */
 const R=refsDe(e);
 const dato=(g,k)=>{const D=DOCIND[g]; const s=D&&D.sub.find(x=>x[0]===k); return s?s[3]:""};
 const barra=(k,titulo,peso,v,g)=>{ const pct=Math.round((v-1)/3*100);
  return \`<div class="ib" tabindex="0"><div class="ib-l"><span>\${titulo}</span><em>\${peso}</em></div>
   <div class="ib-t"><i style="width:\${Math.max(pct,4)}%"></i><b>\${v}</b></div>
   <div class="ib-v">\${ET[k]?ET[k][v-1]:""}</div>
   <div class="ib-tip"><b>\${titulo} · nivel \${v} de 4</b>\${dato(g,k)||""}</div></div>\`};
 const grafico=(titulo,valor,peso,cit,barras)=>\`<div class="ig"><div class="ig-h"><b>\${titulo}</b><span class="ig-v">\${valor}</span><span class="ig-p">\${peso}</span><span class="cts">\${citas(cit)}</span></div>\${barras.join("")}</div>\`;
 let cuerpo="";
 if(q==="atr"){
  cuerpo=\`<div class="ig-cab"><div class="ig-hero"><span>Potencial del mercado laboral</span><b>\${e.ATR}</b><em>de 100</em></div>
    <div class="ig-res">\${[["Demanda",e.DEM,"35 %"],["Tendencia",e.TEN,"30 %"],["Impacto",e.IMP,"20 %"],["Sostenibilidad",e.SOS,"15 %"]].map(x=>\`<div class="ig-r"><span>\${x[0]}<em>\${x[2]}</em></span><i><u style="width:\${x[1]}%"></u></i><b>\${x[1]}</b></div>\`).join("")}</div></div>
   <div class="ig-g">
    \${grafico("Demanda",e.DEM,"35 % · ¿hay trabajo pagado hoy?",R.dem,[barra("vol","Volumen de puestos","35 %",e.d.vol,"dem"),barra("amp","Amplitud de empleadores","20 %",e.d.amp,"dem"),barra("esc","Escasez","20 %",e.d.esc,"dem"),barra("rem","Remuneración","15 %",e.d.rem,"dem"),barra("for","Formalidad","10 %",e.d.for,"dem")])}
    \${grafico("Tendencia",e.TEN,"30 % · horizonte de 5 años",R.ten,[barra("cre","Crecimiento observado","30 %",e.t.cre,"ten"),barra("nor","Impulso normativo","25 %",e.t.nor,"ten"),barra("inv","Inversión sectorial","20 %",e.t.inv,"ten"),barra("dem","Driver estructural","15 %",e.t.dem,"ten"),barra("tec","Madurez tecnológica","10 %",e.t.tec,"ten")])}
    \${grafico("Impacto y sostenibilidad",e.IMP+" · "+e.SOS,"20 % + 15 %",[].concat(R.imp),[barra("cri","Criticidad","60 %",e.i.cri,"imp"),barra("alc","Alcance","40 %",e.i.alc,"imp"),barra("sos","Resistencia a la automatización","15 % del potencial",e.sos,"sos")])}
   </div>
   <div class="ig-s"><div><b>Demanda</b>\${e.fd}</div><div><b>Tendencia</b>\${e.ft}</div>\${e.fi?\`<div><b>Impacto</b>\${e.fi}</div>\`:""}
    <div class="ig-ac">Acuerdo del panel: <b>\${S.delphi&&e.ac!=null?e.ac+" %":"—"}</b> · Modo de ejercicio: \${ET.pue[e.puesto-1]} · \${ET.emp[e.emprende-1]}</div></div>\`;
 } else {
  cuerpo=\`<div class="ig-cab"><div class="ig-hero"><span>Capacidad instalada</span><b>\${e.VIA===null?"—":e.VIA}</b><em>\${e.VIA===null?"sin declarar":"de 100"}</em></div>
    <div class="ig-res">\${[["Empleo",ET.pue[e.puesto-1],""],["Negocio propio",ET.emp[e.emprende-1],""]].map(x=>\`<div class="ig-r txt"><span>\${x[0]}</span><b>\${x[1]}</b></div>\`).join("")}</div></div>
   <div class="ig-g">
    \${e.VIA===null?\`<div class="ig"><div class="ig-h"><b>Capacidad instalada</b></div><div class="tx">La Dirección de la Escuela todavía no ha declarado estos indicadores. Sin ellos la especialidad solo se juzga por el potencial del mercado.</div>
      <button class="b-env sm" id="abre-cap3" style="margin-top:9px">Declarar la capacidad instalada</button></div>\`
     :grafico("Capacidad instalada",e.VIA,"30 · 25 · 20 · 15 · 10 %",R.via,[barra("doc","Docentes con el perfil","30 %",e.v.doc,null),barra("cam","Campos de práctica con convenio","25 %",e.v.cam,null),barra("inf","Infraestructura y equipamiento","20 %",e.v.inf,null),barra("dif","Diferenciación","15 %",e.v.dif||1,null),barra("hab","Habilitación normativa","10 %",e.v.hab||1,null)])}
    <div class="ig"><div class="ig-h"><b>Qué encierra</b></div><div class="tx">\${e.fnx}</div>\${e.pr?\`<div class="tx" style="margin-top:6px"><b>Proceso:</b> \${e.pr}</div><div class="tx"><b>Evidencia:</b> \${e.ev}</div>\`:""}</div>
    <div class="ig"><div class="ig-h"><b>Lectura</b></div><div class="tx">\${frase(e)}</div>\${e.modo?\`<div class="tx" style="margin-top:6px"><b>Aviso que lo sustenta:</b> \${e.modo.empleo}</div>\`:""}</div>
   </div>\`;
 }
 const ids=[...new Set(q==="atr"?[].concat(R.dem,R.ten,R.imp):R.via)].filter(x=>REF(x)).sort((a,b)=>a-b);
 return cuerpo+\`<details class="refs-d"><summary>Referencias · formato APA · \${ids.length}</summary><div class="refs">
  \${ids.map(x=>\`<div class="ref"><span class="rn">\${x}</span><span>\${REF(x).t} <a href="\${REF(x).u}" target="_blank" rel="noopener">\${REF(x).u}</a></span></div>\`).join("")}</div></details>\`;
}
`;
a=a.slice(0,ini)+nuevo+a.slice(fin);
fs.writeFileSync(APP,a);
let s=fs.readFileSync(CSS,"utf8");
s+=`
/* ── Indicadores en gráficos (detalle de una especialidad) ── */
.ig-cab{display:flex;gap:18px;align-items:center;flex-wrap:wrap;margin-bottom:12px}
.ig-hero{display:flex;flex-direction:column;background:#fff;border:1px solid var(--linea);border-radius:12px;padding:10px 16px;min-width:190px}
.ig-hero span{font-size:10.5px;text-transform:uppercase;letter-spacing:.06em;color:var(--gris);font-weight:700}
.ig-hero b{font-size:34px;line-height:1;color:var(--navy);font-weight:800;margin:3px 0 1px}
.ig-hero em{font-style:normal;font-size:11px;color:var(--gris-2)}
.ig-res{flex:1;display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:6px 18px;min-width:280px}
.ig-r{display:grid;grid-template-columns:120px 1fr 34px;align-items:center;gap:10px;font-size:11.5px;color:var(--tinta)}
.ig-r span em{font-style:normal;color:var(--gris-2);font-size:10px;margin-left:5px}
.ig-r i{display:block;height:8px;background:#e2e8f0;border-radius:4px;overflow:hidden}
.ig-r i u{display:block;height:100%;background:var(--navy-2);border-radius:4px;text-decoration:none;transition:width .6s cubic-bezier(.2,.7,.2,1)}
.ig-r b{font-variant-numeric:tabular-nums;color:var(--navy);text-align:right}
.ig-r.txt{grid-template-columns:120px 1fr}.ig-r.txt b{text-align:left;color:var(--tinta);font-weight:600}
.ig-g{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px}
.ig{background:#fff;border:1px solid var(--linea);border-radius:12px;padding:12px 14px 8px}
.ig-h{display:flex;align-items:baseline;gap:8px;margin-bottom:8px;padding-bottom:6px;border-bottom:1px solid var(--linea-2)}
.ig-h b{font-size:12.5px;color:var(--navy)}
.ig-v{font-size:16px;font-weight:800;color:var(--navy);font-variant-numeric:tabular-nums}
.ig-p{font-size:10.5px;color:var(--gris-2);flex:1}
.ib{position:relative;padding:5px 0 7px;outline:none}
.ib+.ib{border-top:1px dashed var(--linea-2)}
.ib-l{display:flex;justify-content:space-between;font-size:11.5px;color:var(--tinta);margin-bottom:3px}
.ib-l em{font-style:normal;color:var(--gris-2);font-size:10.5px}
.ib-t{display:flex;align-items:center;gap:8px}
.ib-t i{flex:1;position:relative;display:block;height:8px;border-radius:4px;background-color:#e2e8f0;background-image:linear-gradient(90deg,transparent calc(33.33% - 1px),#fff calc(33.33% - 1px) 33.33%,transparent 33.33% calc(66.66% - 1px),#fff calc(66.66% - 1px) 66.66%);overflow:hidden}
.ib-t i u{display:block;height:100%;background:var(--navy-2);border-radius:4px;text-decoration:none;transition:width .5s cubic-bezier(.2,.7,.2,1)}
.ib-t b{width:14px;text-align:right;font-size:12px;color:var(--navy);font-variant-numeric:tabular-nums}
.ib-v{font-size:10.5px;color:var(--gris);margin-top:3px}
.ib-tip{display:none;position:absolute;left:0;right:0;bottom:calc(100% - 4px);background:#152238;color:#fff;border-radius:8px;padding:8px 10px;font-size:11px;line-height:1.5;z-index:8;box-shadow:0 8px 20px rgba(11,43,79,.3)}
.ib-tip b{display:block;font-size:11px;margin-bottom:2px}
.ib:hover .ib-tip,.ib:focus .ib-tip{display:block;animation:subir .15s both}
.ib:hover .ib-t i u,.ib:focus .ib-t i u{background:var(--navy)}
.ig-s{margin-top:12px;display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:10px;font-size:11.5px;color:#374151;line-height:1.55}
.ig-s>div{background:#fff;border:1px solid var(--linea);border-left:3px solid var(--oro);border-radius:0 8px 8px 0;padding:8px 11px}
.ig-s b{display:block;font-size:10px;text-transform:uppercase;letter-spacing:.05em;color:var(--gris);margin-bottom:2px}
.ig-ac{grid-column:1/-1;border-left-color:var(--navy-2)!important;color:var(--gris)}
.refs-d{margin-top:10px}
.refs-d summary{font-size:11.5px;color:var(--gris);font-weight:600;cursor:pointer}
.refs-d .refs{margin-top:6px}
`;
fs.writeFileSync(CSS,s);
console.log("detalle con gráficos aplicado");
