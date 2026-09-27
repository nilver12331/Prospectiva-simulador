/* Recorrido automático del simulador en Chrome headless: ejecuta los 18 actos del guion,
   abre cada vista y subvista y deja el resultado en <pre id="resultado">. */
window.__errs=[];
window.addEventListener("error",e=>__errs.push(e.message+" @"+(e.filename||"").split("/").pop()+":"+e.lineno));
(async()=>{
 const out=[];const espera=ms=>new Promise(r=>setTimeout(r,ms));
 await espera(300); RAPIDO=true;
 let n=0;
 while(n<40){ const b=document.getElementById("b-act"); if(!b||b.disabled) break;
  const t=b.textContent; b.click(); n++;
  for(let i=0;i<80;i++){ await espera(100); const nb=document.getElementById("b-act"); if(nb&&nb!==b&&!nb.disabled) break; if(!nb&&i>10) break }
  { const cg0=document.getElementById("cap-guardar"); if(cg0){ ESP.forEach(e=>{ if(!e.oculta&&e.sel&&VDECL[e.n]){ ["doc","cam","inf"].forEach(k=>e.v[k]=VDECL[e.n][k]||0); if(e.vagente){ e.v.dif=e.vagente.dif; e.v.hab=e.vagente.hab } ["doc","cam","inf","dif","hab"].forEach(k=>{ if(!e.v[k]) e.v[k]=2 }); calcular(e) } }) } }
  { if(document.getElementById("cap-guardar")) pintarCentro("tablero"); const cg=document.getElementById("cap-guardar"); if(cg){ cg.click(); await espera(300); out.push("  · Declarar y procesar → capOk="+S.capOk) } }
  { if(document.getElementById("plan-file")){ planAdjuntado("plan-de-estudios-prueba.pdf"); out.push("  · Plan adjuntado (prueba)"); for(let i=0;i<80;i++){ await espera(100); const nb=document.getElementById("b-act"); if(nb&&!nb.disabled) break } } }
  { if(document.getElementById("acc-espera")&&!document.getElementById("b-act")&&typeof S!=="undefined"&&S.acto===8){ S.rev={traza:true,smart:true}; pintarCentro("arquitectura"); const g=document.getElementById("b-guardar"); if(g){ g.click(); await espera(300); out.push("  · Confirmar la arquitectura → arqOk="+S.arqOk+" acto="+S.acto) } } }
  { const bs=document.getElementById("b-sel-ok2"); if(bs&&!bs.disabled&&!document.getElementById("b-act")){ bs.click(); await espera(300); out.push("  · Confirmar la selección → selOk="+S.selOk+" sel="+ESP.filter(e=>!e.oculta&&e.sel).length) } }
  out.push("acto "+n+" · "+t+" → done="+S.done+" vista="+S.vista+" vistaLen="+document.getElementById("vista").innerHTML.length);
 }
 try{ if(typeof MEJORAS!=="undefined"&&Object.keys(MEJORAS).length){ S.form=0; pintarCentro("arquitectura"); const b=document.querySelector("[data-enviar]"); if(b){ b.click(); await espera(600); out.push("mejora demo: "+(ARQ[0].mejorada?"aplicada · "+ARQ[0].def.split(" ").length+" palabras":"NO aplicada")) } } }catch(e){ out.push("mejora demo ERROR "+e.message) }
 for(const v of ["tablero","arquitectura","equivalencia","perfil","valor","informe"]){ try{ pintarCentro(v); out.push("vista "+v+" ok "+document.getElementById("vista").innerHTML.length) }catch(e){ out.push("vista "+v+" ERROR "+e.message) } }
 try{ S.doc="informe"; pintarCentro("informe"); out.push("informe doc ok "+document.getElementById("vista").innerHTML.length) }catch(e){ out.push("informe ERROR "+e.message) }
 try{ S.doc="fichas"; S.fichaC=-1; pintarCentro("informe"); out.push("fichas completo ok") }catch(e){ out.push("fichas ERROR "+e.message) }
 try{ S.foco="traza"; pintarCentro("arquitectura"); S.foco="smart"; pintarCentro("arquitectura"); S.foco=null; S.comparar=true; pintarCentro("arquitectura"); out.push("arq focos ok") }catch(e){ out.push("arq focos ERROR "+e.message) }
 try{ S.coh=true; pintarCentro("perfil"); S.actaV=true; pintarCentro("valor"); S.acta=true; S.docInd=true; S.colsM=true; S.colsC=true; S.capForm=true; pintarCentro("tablero"); out.push("subvistas ok") }catch(e){ out.push("subvistas ERROR "+e.message) }
 try{ pintarCentro("valor"); document.getElementById("vp-mejora").click(); out.push("ajuste demo: "+(ajusteHecho()?"cambios aplicados":"sin cambios")) }catch(e){ out.push("ajuste ERROR "+e.message) }
 const chatTxt=document.getElementById("chat").textContent;
 out.push("plantillas sin resolver: "+JSON.stringify(chatTxt.match(/\{[A-Z0-9:]+\}/g)));
 out.push("errores: "+JSON.stringify(__errs));
 try{ const antes=S.acto; reiniciar(); out.push("reinicio 1 → acto "+antes+" ⇒ "+S.acto+" ("+pasoActual()+")"); reiniciar(); out.push("reinicio 2 ⇒ "+S.acto+" ("+pasoActual()+")"); for(let i=0;i<30;i++){ const b=document.getElementById("b-act"); if(!b||b.disabled) break; b.click(); await espera(400); { const bs=document.getElementById("b-sel-ok2"); if(bs&&!bs.disabled&&!document.getElementById("b-act")){ bs.click(); await espera(300) } } if(document.getElementById("plan-file")){ planAdjuntado("plan-de-estudios-prueba.pdf"); await espera(400) } } out.push("reanudado hasta acto "+S.acto+" done="+S.done) }catch(e){ out.push("reinicio ERROR "+e.message) }
 const d=document.createElement("pre");d.id="resultado";d.textContent=out.join("\n");document.body.appendChild(d);
})();
