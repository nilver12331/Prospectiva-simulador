/* Paso 1.3 · momento 1 · Cruzar especialidades y competencias.
   Confirma, para cada especialidad validada, el tipo de relación que declaró la derivación del 1.2 (misma prueba: ciclo completo o tramo;
   evidencia propia o la misma) y corre la prueba de cobertura en las dos direcciones.
   Escribe datos/competencias/<COD>-cruce.json (eq, extra, sinEncaje, capSinEsp, resumen) y datos/evidencias/<COD>-9-matriz-correspondencia.md */
const fs=require("fs"),path=require("path");
const R=p=>path.join(__dirname,"..","datos",p);
const FECHA="24-09-2026";
const T={competencia:"comp",ambito:"amb",capacidad:"cap",compartido:"amb"};
const TXT={comp:"Equivale a la competencia",amb:"Ámbito de aplicación",cap:"Equivale a una capacidad",trv:"Ámbito compartido",no:"Sin correspondencia"};
for(const cod of ["SIS","NUT"]){
 const D=JSON.parse(fs.readFileSync(R("competencias/"+cod+"-derivadas.json"),"utf8"));
 const E=JSON.parse(fs.readFileSync(R("competencias/"+cod+"-entrada.json"),"utf8"));
 const eq={}, extra={}, filas=[];
 D.competencias.forEach((k,ci)=>k.esp.forEach(x=>{
  const ki=x.cap?k.caps.findIndex(c=>c.n===x.cap):-1;
  const t=x.eq==="compartido"?(ki>=0?"cap":"amb"):T[x.eq];
  const m={c:ci,k:ki>=0?ki:null,t};
  if(!eq[x.n]) eq[x.n]=m; else (extra[x.n]=extra[x.n]||[]).push(m);
  filas.push({esp:x.n,comp:k.alias,cap:ki>=0?k.caps[ki].n:"",t,nota:x.nota||""});
 }));
 /* cobertura 1: toda especialidad que entró al plan cae en una celda */
 const plan=E.grupos.flat().map(x=>x.n);
 const sinEncaje=plan.filter(n=>!eq[n]).map(n=>({e:n,q:"Ninguna competencia ni capacidad guardada la recoge.",r:"Hallazgo: vuelve al paso 1.2"}));
 /* cobertura 2: toda capacidad con al menos una especialidad (directa o implícita por equivalencia a la competencia) */
 const capSinEsp=[];
 D.competencias.forEach((k,ci)=>{ const comp=Object.values(eq).concat(...Object.values(extra)).some(m=>m.c===ci&&m.t==="comp");
  if(comp) return; k.caps.forEach((c,ki)=>{ const con=Object.values(eq).concat(...Object.values(extra)).some(m=>m.c===ci&&m.k===ki); if(!con) capSinEsp.push({c:k.n,k:c.n,q:"Ninguna especialidad del mercado la sostiene y la competencia no tiene equivalente completo.",r:"Candidata a fusión o retiro en el 1.2"}) }) });
 const n=t=>filas.filter(f=>f.t===t).length, comp=[...new Set(filas.map(f=>f.esp))].filter(e=>filas.filter(f=>f.esp===e).length>1);
 const totalCaps=D.competencias.reduce((s,k)=>s+k.caps.length,0);
 const resumen=` ${n("comp")} especialidades equivalen a una competencia completa, ${filas.filter(f=>f.t==="amb"&&!comp.includes(f.esp)).length} son ámbito de aplicación, ${filas.filter(f=>f.t==="cap").length} equivalen a una capacidad`+(comp.length?` y ${comp.length} (${comp.map(e=>e.charAt(0).toLowerCase()+e.slice(1)).join(" y ")}) son ámbito compartido entre dos competencias`:"")+`. Prueba de cobertura: ${sinEncaje.length?sinEncaje.length+" especialidades sin correspondencia":"ninguna especialidad sin correspondencia"} y ${capSinEsp.length?capSinEsp.length+" capacidades sin especialidad que las sostenga":"las "+totalCaps+" capacidades quedan cubiertas"}${E.menciones&&E.menciones.length?". "+E.menciones.map(m=>m.n).join(", ")+" queda como mención (paso 4.4) y no entra a la matriz":""}.`;
 fs.writeFileSync(R("competencias/"+cod+"-cruce.json"),JSON.stringify({cod,fecha:FECHA,eq,extra,sinEncaje,capSinEsp,resumen,filas},null,1));
 let md=`# Matriz de Correspondencia · ${cod} · momento 1 (cruce del agente)\n\nFecha: ${FECHA}. Filas: especialidades validadas que entraron al plan (con las integradas por la Escuela). Columnas: competencias guardadas en el 1.2. Cada celda confirma el tipo de relación con la prueba del método (ciclo completo o tramo · evidencia propia o la misma).\n\n| Especialidad | Competencia | Tipo | Capacidad | Nota |\n|---|---|---|---|---|\n`;
 md+=filas.map(f=>`| ${f.esp} | ${f.comp} | ${comp.includes(f.esp)?TXT.trv+" · "+TXT[f.t].toLowerCase():TXT[f.t]} | ${f.cap||"—"} | ${f.nota} |`).join("\n");
 md+=`\n\n## Prueba de cobertura\n\n- Especialidades sin correspondencia: ${sinEncaje.length?sinEncaje.map(x=>x.e).join(", "):"ninguna"}.\n- Capacidades sin especialidad que las sostenga: ${capSinEsp.length?capSinEsp.map(x=>x.k).join(", "):"ninguna ("+totalCaps+" cubiertas, por marca directa o implícita por equivalencia a la competencia)"}.\n${E.menciones&&E.menciones.length?"- Menciones fuera de la matriz: "+E.menciones.map(m=>m.n).join(", ")+".\n":""}\n## Resumen\n\n${resumen.trim()}\n`;
 fs.writeFileSync(R("evidencias/"+cod+"-9-matriz-correspondencia.md"),md);
 console.log(cod,"→",Object.keys(eq).length,"especialidades ·",Object.keys(extra).length,"con marca adicional · sinEncaje",sinEncaje.length,"· capSinEsp",capSinEsp.length);
 console.log("  ",resumen.trim());
}
