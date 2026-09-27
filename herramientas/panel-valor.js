/* Paso 1.5 · M3–M4 · acta del panel VALOR (V1–V6 + G) y corte a tres.
   Lee datos/valor/<COD>-ficha.json y datos/valor/panel/V1..V6.json, G.json.
   Escribe datos/valor/<COD>-valor.json (estructura vpc/vp del tablero) y datos/evidencias/<COD>-12-acta-valor.md */
const fs=require("fs"),path=require("path");
const R=p=>path.join(__dirname,"..","datos",p);
const ROLES=["V1","V2","V3","V4","V5","V6"], N=6, MIN=0.83;
const P=Object.fromEntries(ROLES.map(r=>[r,JSON.parse(fs.readFileSync(R("valor/panel/"+r+".json"),"utf8"))]));
const G=JSON.parse(fs.readFileSync(R("valor/panel/G.json"),"utf8"));
const med=a=>{const s=[...a].sort((x,y)=>x-y), n=s.length; return n%2?s[(n-1)/2]:(s[n/2-1]+s[n/2])/2};
const ric=a=>{const s=[...a].sort((x,y)=>x-y); return s[4]-s[1]};                 // N = 6: Q3 − Q1 por posición
const acu=a=>{const hi=a.filter(v=>v>=3).length; return Math.round(Math.max(hi,a.length-hi)/a.length*100)};
const r2=x=>Math.round(x*100)/100;
for(const cod of ["SIS","NUT"]){
 const F=JSON.parse(fs.readFileSync(R("valor/"+cod+"-ficha.json"),"utf8"));
 /* Objeto A · diferenciales */
 const dif=F.dif.map((d,i)=>{
  const a=ROLES.map(r=>P[r][cod].A[i]);
  const E=a.filter(x=>x.E).length/N, D=a.map(x=>x.D), Rr=a.map(x=>x.R), V=a.map(x=>x.V), nE=a.filter(x=>x.S==="E").length;
  const icviD=r2(D.filter(v=>v>=3).length/N), icviR=r2(Rr.filter(v=>v>=3).length/N), cvr=r2((nE-N/2)/(N/2));
  const medD=med(D), medR=med(Rr), medV=med(V), ac=Math.min(acu(D),acu(Rr)), rc=Math.max(ric(D),ric(Rr));
  let dec;
  if(icviD<0.5||cvr<=0||E>0.75) dec="descartado";
  else if(E>0.5) dec="paridad";
  else if(E<=0.25&&icviD>=MIN&&icviR>=MIN&&cvr>=0.99&&ac>=75&&rc<=1&&medV>=3) dec="confirmado";
  else if(E<=0.25&&icviD>=MIN&&icviR>=MIN&&cvr>=0.99&&ac>=75&&rc<=1&&medV===2) dec="condicionado";
  else dec="reformular";
  return {n:d.n,d:d.d,fam:d.fam,ev:d.ev,resp:d.resp,alc:d.alc,comp:d.comp,espec:d.esp||"",fuente:d.fuente||"",verificado:!!d.verificado,
   esp:r2(E),icviD,icviR,cvr,medV,ac,ric:rc,sust:medD*medR,dec,plazo:dec==="condicionado"?"Plan de sostenimiento: responsable "+d.resp+", antes del inicio de la cohorte":"",
   com:Object.fromEntries(ROLES.map((r,k)=>[r,a[k].c||""]))};
 });
 /* corte a tres: confirmados de mayor sustento (empate: CVR, luego mediana V) */
 const conf=dif.filter(d=>d.dec==="confirmado").sort((a,b)=>b.sust-a.sust||b.cvr-a.cvr||b.medV-a.medV);
 const corte=conf.slice(0,3).map(d=>d.n);
 dif.forEach(d=>{ d.corte=corte.includes(d.n); if(d.dec==="confirmado"&&!d.corte) d.respaldo=true });
 /* Objeto C · cadenas */
 const cadena=(k,j)=>{ const c=ROLES.map(r=>j==null?P[r][cod].C.car:P[r][cod].C.esp[j]);
  const an=r2(c.filter(x=>x.An).length/N), at=med(c.map(x=>x.At)), mo=r2(c.filter(x=>x.Mo>=3).length/N), dg=r2(c.filter(x=>x.Dg).length/N), medMo=med(c.map(x=>x.Mo));
  const ac=Math.min(acu(c.map(x=>x.At)),acu(c.map(x=>x.Mo))), rc=Math.max(ric(c.map(x=>x.At)),ric(c.map(x=>x.Mo)));
  let dec; if(dg>0) dec="rechazado"; else if(at<=2||an<MIN) dec="rehacer"; else if(an>=MIN&&mo>=MIN&&at>=3&&ac>=75&&rc<=1) dec="aprobado"; else if(medMo<=2&&at>=3) dec="reescribir"; else dec="aprobado";
  return Object.assign({},k,{an,at,mo,dg,dec}) };
 const car=cadena(F.cad.car,null), esp=F.cad.esp.map((k,j)=>cadena(k,j));
 /* Objeto B · textos */
 const txt=(sel)=>{ const b=ROLES.map(r=>sel(P[r][cod].B)); return {L:med(b.map(x=>x.L)),so:r2(b.filter(x=>x.So).length/N),au:r2(b.filter(x=>x.Au).length/N)} };
 const tT=txt(B=>B.t), tVP=F.textos.vp.map((v,i)=>txt(B=>B.vp[i]));
 const okT=t=>t.L>=3&&t.so>=MIN&&t.au>=MIN;
 const pend=ROLES.map(r=>P[r][cod]).map((x,k)=>"«"+ROLES[k]+"» Falta: "+(x.falta||"—")+" · Problema: "+(x.problema||"—")).join("  ");
 const out={cod,fecha:F.fecha,
  vpc:{t:F.textos.t,p:F.textos.p,prop:F.textos.prop,s:F.sustento,dif,txt:tT,pend,ficha:F.ficha,par:F.par.concat(dif.filter(d=>d.dec==="paridad").map(d=>d.n)),cad:{car,esp},nota:"",
   corte,textosOk:okT(tT),vpOk:tVP.map(okT)},
  vp:F.textos.vp, guardian:G[cod]};
 fs.writeFileSync(R("valor/"+cod+"-valor.json"),JSON.stringify(out,null,1));
 const cnt=k=>dif.filter(d=>d.dec===k).length;
 const lista=k=>dif.filter(d=>d.dec===k).map(d=>d.n.split(" ").slice(0,6).join(" ").toLowerCase()+"…");
 const g14=`**${cnt("confirmado")} confirmado${cnt("confirmado")===1?"":"s"}**`+(conf.length?` (${conf.map(d=>d.n.split(" ").slice(0,6).join(" ").toLowerCase()+"…").join("; ")})`:"")+`, **${cnt("condicionado")} condicionado${cnt("condicionado")===1?"":"s"}**, **${cnt("reformular")} por reformular** y **${cnt("paridad")+cnt("descartado")} en paridad o descartado${cnt("paridad")+cnt("descartado")===1?"":"s"}**. Cadenas de propósito: ${[car,...esp].filter(c=>c.dec==="aprobado").length} de ${1+esp.length} aprobadas.`;
 out.guion14=g14; fs.writeFileSync(R("valor/"+cod+"-valor.json"),JSON.stringify(out,null,1));
 const pc=x=>Math.round(x*100)+" %";
 let md=`# Acta del panel VALOR · ${cod} · ronda 1\n\nFecha: ${F.fecha}. Seis evaluadores independientes (V1 orientador vocacional · V2 empleador · V3 par evaluador · V4 oferta comparada / V4′ decisor familiar en cadenas · V5 director de escuela · V6 editor de mensaje) y guardián metodológico. Estado: **revisado**.\n\nUmbrales declarados antes de R1: I-CVI ≥ 0,83 · CVR 1,00 (N = 6) · acuerdo ≥ 75 % · RIC ≤ 1 · % Espejo ≤ 0,25.\n\n## Diferenciales\n\n| Diferencial | Familia | %Espejo | I-CVI_D | I-CVI_R | CVR | Med. V | Acuerdo · RIC | Sustento | Decisión |\n|---|---|---|---|---|---|---|---|---|---|\n`;
 md+=dif.map(d=>`| ${d.n} | ${d.d} ${d.fam} | ${pc(d.esp)} | ${d.icviD} | ${d.icviR} | ${d.cvr} | ${d.medV} | ${d.ac} % · ${d.ric} | ${d.sust} | ${d.dec}${d.corte?" · corte":""} |`).join("\n");
 md+=`\n\n**Conservados (corte a tres):** ${corte.join(" · ")||"ninguno"}.\n**Movidos a paridad:** ${lista("paridad").join(" · ")||"ninguno"}. **Condicionados:** ${lista("condicionado").join(" · ")||"ninguno"}. **Por reformular:** ${lista("reformular").join(" · ")||"ninguno"}.\n\n## Cadenas de propósito\n\n| Cadena | Propósito | %Anclaje | Med. At | I-CVI_Mo | %Dg | Decisión |\n|---|---|---|---|---|---|---|\n`;
 md+=[["Carrera",car],...esp.map(c=>[c.comp+" · "+c.alias,c])].map(([n,c])=>`| ${n} | ${c.p4} | ${pc(c.an)} | ${c.at} | ${c.mo} | ${pc(c.dg)} | ${c.dec} |`).join("\n");
 md+=`\n\n## Textos\n\n| Texto | Med. L | %So | %Au | Decisión |\n|---|---|---|---|---|\n| Párrafo de carrera | ${tT.L} | ${pc(tT.so)} | ${pc(tT.au)} | ${okT(tT)?"aprobado":"reescribir"} |\n`;
 md+=tVP.map((t,i)=>`| ${F.cad.esp[i].comp} · ${F.cad.esp[i].alias} | ${t.L} | ${pc(t.so)} | ${pc(t.au)} | ${okT(t)?"aprobado":"reescribir"} |`).join("\n");
 md+=`\n\n## Guardián\n\n`+G[cod].reglas.map(g=>`- ${g.n}. **${g.veredicto}** · ${g.hallazgo}`).join("\n")+`\n\n## Preguntas abiertas\n\n`+ROLES.map(r=>`- **${r}** · falta: ${P[r][cod].falta||"—"} · problema: ${P[r][cod].problema||"—"}`).join("\n")+"\n";
 fs.writeFileSync(R("evidencias/"+cod+"-12-acta-valor.md"),md);
 console.log(cod,"→",dif.map(d=>d.dec+(d.corte?"*":"")).join(", "),"| cadenas:",[car,...esp].map(c=>c.dec).join(","),"| textos:",okT(tT)?"ok":"reescribir",tVP.map(t=>okT(t)?"ok":"re").join(","),"| G no cumple:",G[cod].reglas.filter(g=>/No/.test(g.veredicto)).map(g=>g.n).join(","));
}
