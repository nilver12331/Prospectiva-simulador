/* Momento 2 · consolida la ronda 1 del panel e-Delphi (6 expertos + guardián) en el acta de cada carrera.
   Lee datos/panel/<COD>-P1..P6.json, <COD>-G.json y <COD>-valoradas.json; escribe datos/acta-<COD>.json
   y datos/evidencias/<COD>-5-acta-panel-r1.md. Fórmulas idénticas a panelDe() de js/app.js.
   Uso: node herramientas/panel-m2.js */
const fs=require("fs"),path=require("path");
const R=p=>path.join(__dirname,"..","datos",p);
const FECHA="23-09-2026", N=6;
const UMBRALES={icvi:0.83,cvr:1.00,ac:75,ric:1,rondas:3};
const ROLES=[["P1","Analista de mercado laboral y ocupaciones"],["P2","Prospectivista sectorial"],["P3","Experto regulatorio y de acreditación"],
 ["P4","Empleador del sector"],["P5","Experto en tecnología y automatización"],["P6","Analista territorial y de oferta comparada"]];
const J=f=>JSON.parse(fs.readFileSync(R(f),"utf8"));

function indices(p){
 const ord=[...p].sort((a,b)=>a-b);
 const med=(ord[2]+ord[3])/2;
 const nE=p.filter(v=>v>=3).length;
 const icvi=+(nE/N).toFixed(2);
 const cvr=+(((nE-N/2)/(N/2)).toFixed(2));
 const ac=Math.round(Math.max(nE,N-nE)/N*100);
 const ric=ord[4]-ord[1];
 let ver;
 if(nE===N&&ric<=1) ver="Esencial";
 else if(nE>=5&&ric<=1) ver="Esencial · sin unanimidad";
 else if(nE<=1&&ric<=1) ver="No esencial";
 else ver="Sin consenso · ronda 2";
 return {p,med,icvi,cvr,ac,ric,ver};
}
function acta(cod){
 const val=J("panel/"+cod+"-valoradas.json"), G=J("panel/"+cod+"-G.json");
 const P=ROLES.map(r=>J("panel/"+cod+"-"+r[0]+".json"));
 const esp=val.map(v=>{
  const cal=P.map(x=>x.calificaciones[v.cod]);
  cal.forEach((c,i)=>{ if(!c||![1,2,3,4].includes(c.E)) throw new Error(cod+" "+v.cod+" sin calificación de "+ROLES[i][0]) });
  const ix=indices(cal.map(c=>c.E));
  return Object.assign({cod:v.cod,n:v.especialidad,POT:v.POT},ix,{com:Object.fromEntries(ROLES.map((r,i)=>[r[0],{E:cal[i].E,c:cal[i].comentario,f:cal[i].fuente}]))});
 });
 const abiertas={faltan:{},integrar:{},noPuesto:{}};
 ROLES.forEach((r,i)=>{ for(const k of Object.keys(abiertas)) abiertas[k][r[0]]=P[i][k]||[] });
 const cuenta=k=>esp.filter(e=>e.ver===k).length;
 const resumen={n:esp.length,esencial:cuenta("Esencial"),esencialSinUnanimidad:cuenta("Esencial · sin unanimidad"),noEsencial:cuenta("No esencial"),sinConsenso:cuenta("Sin consenso · ronda 2"),
  bajoUmbral:esp.filter(e=>e.icvi<UMBRALES.icvi||e.ac<UMBRALES.ac).length,guardianNoCumple:G.reglas.filter(r=>/No/.test(r.veredicto)).map(r=>r.n)};
 return {cod,fecha:FECHA,ronda:1,n:N,estado:"revisado",umbrales:UMBRALES,expertos:ROLES.map(r=>({rol:r[0],perfil:r[1]})),especialidades:esp,abiertas,guardian:G,resumen};
}
function md(A){
 const f=x=>x.toFixed(2).replace(".",",");
 let s=`# Acta del panel de expertos - ronda 1 · ${A.cod}\n\nFecha: ${A.fecha} · Panel: 6 expertos independientes (cada uno califica sin ver al resto) + guardián metodológico (verifica, no califica) · Estado: **${A.estado}** (el *validado* lo otorga el panel humano con el mismo instrumento).\n\n`;
 s+=`**Pregunta del instrumento:** ¿qué tan esencial es la especialidad para el perfil de egreso? Escala 1 no esencial · 2 útil pero no esencial · 3 esencial · 4 imprescindible.\n\n**Umbrales declarados antes de la ronda 1:** I-CVI ≥ 0,83 · CVR crítico 1,00 (N = 6) · acuerdo ≥ 75 % · RIC ≤ 1 · máximo 3 rondas.\n\n`;
 s+=`## Expertos\n\n`+A.expertos.map(e=>`- **${e.rol}** · ${e.perfil}`).join("\n")+"\n\n";
 s+=`## Calificaciones e índices\n\n| Cód. | Especialidad | POT | P1 | P2 | P3 | P4 | P5 | P6 | Mediana | I-CVI | CVR | Acuerdo | RIC | Veredicto |\n|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|\n`;
 s+=A.especialidades.map(e=>`| ${e.cod} | ${e.n} | ${e.POT} | ${e.p.join(" | ")} | ${e.med.toFixed(1).replace(".",",")} | ${f(e.icvi)} | ${f(e.cvr)} | ${e.ac} % | ${e.ric} | ${e.ver} |`).join("\n")+"\n\n";
 const r=A.resumen;
 s+=`**Resumen:** ${r.n} especialidades valoradas · ${r.esencial} esenciales por unanimidad · ${r.esencialSinUnanimidad} esenciales sin unanimidad (5 de 6) · ${r.noEsencial} no esenciales · ${r.sinConsenso} sin consenso (pasarían a ronda 2 si la Dirección lo pide).\n\n`;
 s+=`## Comentarios por experto\n\n`;
 for(const e of A.especialidades){ s+=`### ${e.cod} · ${e.n}\n\n`; for(const [k,c] of Object.entries(e.com)) s+=`- **${k}** (${c.E}): ${c.c} — ${c.f}\n`; s+="\n"; }
 s+=`## Preguntas abiertas de la ronda 1\n\n`;
 for(const [k,t] of [["faltan","¿Qué especialidad real del campo falta?"],["integrar","¿Qué candidatas deberían integrarse?"],["noPuesto","¿Cuál no es puesto ni negocio?"]]){
  s+=`### ${t}\n\n`; for(const [rol,l] of Object.entries(A.abiertas[k])) for(const x of l) s+=`- **${rol}:** ${x}\n`; s+="\n"; }
 s+=`## Guardián metodológico\n\n| # | Regla | Veredicto | Hallazgo |\n|---|---|---|---|\n`;
 const REG=["Modo de ejercicio declarado; ambas ≤ 2 no pasa","Ninguna tecnología, herramienta o metodología como especialidad","Fuente fechada y enlace verificable en toda afirmación","Crecimiento observado con serie contada","Alcance del título y la colegiatura","Sello del plan intacto","Ningún valor de capacidad sin declaración"];
 s+=A.guardian.reglas.map(g=>`| ${g.n} | ${REG[g.n-1]} | **${g.veredicto}** | ${g.hallazgo} |`).join("\n")+"\n\n";
 if(A.guardian.observaciones&&A.guardian.observaciones.length) s+="**Observaciones:**\n\n"+A.guardian.observaciones.map(o=>"- "+o).join("\n")+"\n";
 return s;
}
const {SIS,NUT,depurar}=require("./cartera-m1"), {escribir}=require("./cartera-csv");
for(const cod of ["SIS","NUT"]){
 const A=acta(cod);
 /* columna «Panel de expertos» del CSV de la cartera */
 const filas=depurar(cod==="SIS"?SIS:NUT);
 filas.forEach(f=>{ const e=A.especialidades.find(x=>x.cod===f.cod); f.panel=e?`${e.p.join(" ")} · med ${e.med} · I-CVI ${e.icvi} · CVR ${e.cvr} · ${e.ac} % · RIC ${e.ric} · ${e.ver}`:"No se valora (regla del puesto)" });
 escribir(R("cartera-"+cod+".csv"),filas);
 fs.writeFileSync(R("acta-"+cod+".json"),JSON.stringify(A,null,1));
 fs.writeFileSync(R("evidencias/"+cod+"-5-acta-panel-r1.md"),md(A));
 const r=A.resumen;
 console.log(cod,"→",r.n,"valoradas · esencial",r.esencial,"· sin unanimidad",r.esencialSinUnanimidad,"· no esencial",r.noEsencial,"· sin consenso",r.sinConsenso,"· guardián no cumple:",r.guardianNoCumple.join(","));
 A.especialidades.forEach(e=>console.log("  ",e.cod,e.p.join(""),"med",e.med,"icvi",e.icvi,"cvr",e.cvr,"ac",e.ac,"ric",e.ric,"→",e.ver,"·",e.n));
}
