/* Gráficos de indicadores: nivel como porcentaje, sin pesos a la vista, y botón «Ver rúbrica» con pesos y escalas. */
const fs=require("fs"),path=require("path");
const APP=path.join(__dirname,"..","js","app.js"), CSS=path.join(__dirname,"..","css","tema.css");
let a=fs.readFileSync(APP,"utf8");
const r=(x,y)=>{ if(!a.includes(x)) throw new Error("no: "+x.slice(0,70)); a=a.replace(x,y) };

/* barra: sin peso, nivel en porcentaje */
r(` const barra=(k,titulo,peso,v,g)=>{ const pct=Math.round((v-1)/3*100);
  return \`<div class="ib" tabindex="0"><div class="ib-l"><span>\${titulo}</span><em>\${peso}</em></div>
   <div class="ib-t"><i><u style="width:\${Math.max(pct,4)}%"></u></i><b>\${v}</b></div>
   <div class="ib-v">\${ET[k]?ET[k][v-1]:""}</div>
   <div class="ib-tip"><b>\${titulo} · nivel \${v} de 4</b>\${dato(g,k)||""}</div></div>\`};`,
` const barra=(k,titulo,peso,v,g)=>{ const pct=Math.round((v-1)/3*100);
  return \`<div class="ib" tabindex="0"><div class="ib-l"><span>\${titulo}</span><em>\${ET[k]?ET[k][v-1]:""}</em></div>
   <div class="ib-t"><i><u style="width:\${Math.max(pct,3)}%"></u></i><b>\${pct} %</b></div>
   <div class="ib-tip"><b>\${titulo} · \${pct} % (nivel \${v} de 4 · \${ET[k]?ET[k][v-1]:""}) · peso \${peso}</b>\${dato(g,k)||""}</div></div>\`};`);
/* cabecera del gráfico: sin peso */
r(` const grafico=(titulo,valor,peso,cit,barras)=>\`<div class="ig"><div class="ig-h"><b>\${titulo}</b><span class="ig-v">\${valor}</span><span class="ig-p">\${peso}</span><span class="cts">\${citas(cit)}</span></div>\${barras.join("")}</div>\`;`,
` const grafico=(titulo,valor,peso,cit,barras)=>\`<div class="ig"><div class="ig-h"><b>\${titulo}</b><span class="ig-v">\${valor}</span><span class="ig-p"></span><span class="cts">\${citas(cit)}</span></div>\${barras.join("")}</div>\`;`);
/* cabecera general: sin pesos, con botón Ver rúbrica */
r(`<div class="ig-res">\${[["Demanda",e.DEM,"35 %"],["Tendencia",e.TEN,"30 %"],["Impacto",e.IMP,"20 %"],["Sostenibilidad",e.SOS,"15 %"]].map(x=>\`<div class="ig-r"><span>\${x[0]}<em>\${x[2]}</em></span><i><u style="width:\${x[1]}%"></u></i><b>\${x[1]}</b></div>\`).join("")}</div></div>`,
`<div class="ig-res">\${[["Demanda",e.DEM],["Tendencia",e.TEN],["Impacto",e.IMP],["Sostenibilidad",e.SOS]].map(x=>\`<div class="ig-r"><span>\${x[0]}</span><i><u style="width:\${x[1]}%"></u></i><b>\${x[1]}</b></div>\`).join("")}</div>
    <button class="ic-b \${S.rubrica?"on":""}" data-rubrica="1">\${S.rubrica?"▾ Ocultar la rúbrica":"▸ Ver rúbrica"}</button></div>
   \${S.rubrica?rubricaHTML():""}`);
/* función rubricaHTML */
r(`function detalle(e,q){`,
`/* Rúbrica de evaluación: pesos de cada variable y subvariable, y las cuatro escalas. Se abre desde «Ver rúbrica». */
function rubricaHTML(){
 const fila=(k,n,p)=>\`<tr><td><b>\${n}</b><span class="rb-p">peso \${p}</span></td>\${[0,1,2,3].map(i=>\`<td><span class="rb-n">\${i+1} · \${[0,33,67,100][i]} %</span>\${ET[k][i]}</td>\`).join("")}</tr>\`;
 const bloque=(t,p,q,filas)=>\`<div class="rb-b"><div class="rb-h"><b>\${t}</b><span>\${p} del potencial</span><em>\${q}</em></div>
  <table class="rb-t"><thead><tr><th style="width:190px">Subvariable</th><th>Nivel 1</th><th>Nivel 2</th><th>Nivel 3</th><th>Nivel 4</th></tr></thead><tbody>\${filas.join("")}</tbody></table></div>\`;
 return \`<div class="rubrica">
  <div class="rb-f">Potencial del mercado laboral = 35 % Demanda + 30 % Tendencia + 20 % Impacto + 15 % Sostenibilidad. Cada subvariable se puntúa de 1 a 4 y se muestra como porcentaje: 1 = 0 %, 2 = 33 %, 3 = 67 %, 4 = 100 %.</div>
  \${bloque("Demanda","35 %","¿Existe hoy trabajo pagado para esa especialidad?",[fila("vol","Volumen de puestos","35 %"),fila("amp","Amplitud de empleadores","20 %"),fila("esc","Escasez","20 %"),fila("rem","Remuneración","15 %"),fila("for","Formalidad","10 %")])}
  \${bloque("Tendencia","30 %","¿Hacia dónde va el campo en cinco años?",[fila("cre","Crecimiento observado","30 %"),fila("nor","Impulso normativo comprometido","25 %"),fila("inv","Inversión y adopción sectorial","20 %"),fila("dem","Driver demográfico o estructural","15 %"),fila("tec","Madurez de la tecnología habilitante","10 %")])}
  \${bloque("Impacto","20 %","¿Qué se pierde si nadie ejerce bien?",[fila("cri","Criticidad","60 %"),fila("alc","Alcance","40 %")])}
  \${bloque("Sostenibilidad","15 %","¿Cuánto del ejercicio resiste la automatización?",[fila("sos","Resistencia a la automatización","100 %")])}
 </div>\`;
}
function detalle(e,q){`);
/* estado y clic del botón */
r(` cruzado:false,redactado:false,objetivos:false,fichas:false,valor:false,informe:false,encIns:{},encExtra:{},actaV:false};`,
  ` cruzado:false,redactado:false,objetivos:false,fichas:false,valor:false,informe:false,encIns:{},encExtra:{},actaV:false,rubrica:false};`);
r(` document.querySelectorAll("[data-det]").forEach(b=>b.onclick=()=>{`,
  ` document.querySelectorAll("[data-rubrica]").forEach(b=>b.onclick=()=>{ S.rubrica=!S.rubrica; pintarCentro("tablero") });
 document.querySelectorAll("[data-det]").forEach(b=>b.onclick=()=>{`);
fs.writeFileSync(APP,a);

let s=fs.readFileSync(CSS,"utf8");
s+=`
/* ── Rúbrica de evaluación ── */
.ig-cab .ic-b{align-self:center}
.rubrica{margin:0 0 14px;background:#fff;border:1px solid var(--linea);border-radius:12px;padding:12px 14px;animation:subir .3s both}
.rb-f{font-size:11.5px;color:var(--tinta);background:var(--sup-2);border-radius:8px;padding:8px 11px;margin-bottom:10px;line-height:1.5}
.rb-b{margin-bottom:10px}
.rb-h{display:flex;align-items:baseline;gap:8px;margin-bottom:5px}
.rb-h b{font-size:12.5px;color:var(--navy)}
.rb-h span{font-size:10.5px;font-weight:700;color:#fff;background:var(--navy-2);border-radius:10px;padding:1px 8px}
.rb-h em{font-style:normal;font-size:11px;color:var(--gris)}
.rb-t{width:100%;border-collapse:collapse;font-size:11px}
.rb-t th{background:var(--sup-2);color:var(--gris);font-size:10px;text-transform:uppercase;letter-spacing:.04em;text-align:left;padding:5px 8px;border:1px solid var(--linea)}
.rb-t td{border:1px solid var(--linea);padding:6px 8px;vertical-align:top;color:#374151;line-height:1.4}
.rb-t td b{color:var(--tinta);display:block}
.rb-p{font-size:10px;color:var(--gris-2)}
.rb-n{display:block;font-size:10px;font-weight:700;color:var(--navy-2);margin-bottom:2px}
.ib-t b{width:44px;font-size:11.5px}
.ib-l em{color:var(--gris);font-size:11px}
`;
fs.writeFileSync(CSS,s);
console.log("rúbrica aplicada");
