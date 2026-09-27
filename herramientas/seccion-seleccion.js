/* 1.1 · la confirmación de «Seleccionar y decidir el destino» pasa a una sección propia al final del tablero;
   ejecutar la selección deja el progreso en «Guardar las Especialidades Validadas». */
const fs=require("fs"),path=require("path");
const F=path.join(__dirname,"..","js","app.js");
let a=fs.readFileSync(F,"utf8");
const ini=' ${(S.delphi&&S.done>=4&&!S.selOk&&(!(ESCUELA&&ESCUELA.demo)||S.acto>=4))?`<div class="guardar" id="sel-bar">';
const finTxt='✓ Confirmar la selección y continuar</button></div>`:""}\n';
const s0=a.indexOf(ini), s1=a.indexOf(finTxt,s0);
if(s0<0||s1<0) throw new Error("sel-bar");
const bar=a.slice(s0,s1+finTxt.length);
a=a.slice(0,s0)+a.slice(s1+finTxt.length);
const ancla='  </div>`:""}</section>`:""}\n\n </div>\n';
if(a.split(ancla).length!==2) throw new Error("ancla");
const sec=' ${(S.delphi&&S.done>=4&&(!(ESCUELA&&ESCUELA.demo)||S.acto>=4))?`<section class="research-section research-sel" aria-labelledby="research-sel-title">\n'+
 '  <header class="research-heading"><div class="research-heading-copy"><h2 id="research-sel-title">Selección y destino</h2><p>Segunda decisión de escuela: qué entra al plan y con qué destino. Solo las seleccionadas pasan a definir competencias.</p></div><span class="research-tag ${S.selOk?"ok":""}">${S.selOk?"Confirmada":"Por confirmar"}</span></header>\n'+
 '  <div class="research-body">\n'+bar+
 '  ${S.selOk?`<p class="sc-q" style="margin:0"><b>Selección confirmada:</b> ${sel} especialidades entran al plan. Sigue guardar las Especialidades Validadas.</p>`:""}\n'+
 '  </div></section>`:""}\n';
a=a.replace(ancla,'  </div>`:""}</section>`:""}\n'+sec+'\n </div>\n');
const x='  vista:"tablero",done:4,propone:true,';
if(a.split(x).length!==2) throw new Error("propone");
a=a.replace(x,'  vista:"tablero",done:5,propone:true,');
fs.writeFileSync(F,a);
console.log("sección de selección aplicada");
