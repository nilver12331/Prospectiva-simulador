/* Revisión rápida de un paquete 2.1: conteos, límites de palabras, tareas sin entregable y citas sin referencia */
const fs=require("fs");
for(const f of process.argv.slice(2)){ let P; try{ P=JSON.parse(fs.readFileSync(f,"utf8")) }catch(e){ console.log(f,"JSON inválido",e.message); continue }
 const w=s=>String(s||"").trim().split(/\s+/).filter(Boolean).length, refs=new Set((P.refs||[]).map(r=>r[0]));
 const ver=(P.refs||[]).filter(r=>/^Verificado/.test(r[3]||"")).length, prob=[];
 P.funciones.forEach(fn=>{ const fd=w(fn.fd), ji=w(fn.ji);
  if(fd<70||fd>120) prob.push(`${fn.c} fd ${fd}`); if(ji<50||ji>90) prob.push(`${fn.c} ji ${ji}`);
  const cods=new Set(fn.prod.ents.flatMap(e=>e.codes.split(/,\s*/)));
  fn.tasks.forEach(t=>{ if(!cods.has(t.code)) prob.push(`${t.code} sin entregable`) });
  const citas=((fn.fd||"")+(fn.ji||"")).match(/\[\d+\]/g)||[]; citas.forEach(c=>{ if(!refs.has(c)) prob.push(`${fn.c} cita ${c} inexistente`) });
  if(/^(Es el|Es la|Se trata)/.test(fn.prod.desc)) prob.push(`${fn.c} producto empieza mal`); });
 console.log(`${P.cod}-${P.k} · ${P.funciones.length} funciones · ${P.funciones.reduce((a,x)=>a+x.tasks.length,0)} tareas · ${(P.refs||[]).length} refs (${ver} verificadas) · fuentes ${JSON.stringify(P.fuentes&&{O:P.fuentes.O,N:P.fuentes.N,M:P.fuentes.M,P:P.fuentes.P,avisos:P.fuentes.avisos_revisados})}`);
 console.log("   observaciones: "+(prob.length?prob.join(" · "):"ninguna"));
}
