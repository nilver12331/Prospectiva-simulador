/* Avanza N actos (parámetro &hasta=N) con modo rápido y se detiene, para capturar pantallas. */
(async()=>{
 const espera=ms=>new Promise(r=>setTimeout(r,ms));
 const q=new URLSearchParams(location.search); const hasta=+(q.get("hasta")||0); const vista=q.get("vista");
 await espera(300); RAPIDO=true;
 console.log("[foto] hasta="+hasta+" b-act="+!!document.getElementById("b-act"));
 for(let n=0;n<hasta;n++){ const b=document.getElementById("b-act"); if(!b||b.disabled){console.log("[foto] sin botón en "+n);break} b.click();
  for(let i=0;i<80;i++){ await espera(100); const nb=document.getElementById("b-act"); if(nb&&nb!==b&&!nb.disabled) break; if(!nb&&i>10) break }
  console.log("[foto] acto "+(n+1)+" done="+S.done);
 }
 if(vista) pintarCentro(vista);
 if(q.get("acta")) { S.acta=true; pintarCentro("tablero") }
 /* &solo=<selector>: desplaza el contenedor que hace scroll hasta ese elemento para que la captura empiece ahí */
 if(q.get("clic")){ const partes=[];{ let d=0,cur=""; for(const ch of q.get("clic")){ if(ch==="("||ch==="{"||ch==="[") d++; if(ch===")"||ch==="}"||ch==="]") d--; if(ch===","&&d===0){ partes.push(cur); cur="" } else cur+=ch } if(cur) partes.push(cur) }
 for(const sel of partes){ if(sel.trim().startsWith("js:")){ try{ eval(sel.trim().slice(3)) }catch(e){ console.log("[foto] js error "+e.message) } await espera(1500); continue } const el=document.querySelector(sel.trim()); console.log("[foto] clic "+sel+" → "+!!el); if(el){ el.click(); await espera(1500) } } }
 if(q.get("solo")){ await espera(500); const el=document.querySelector(q.get("solo")); if(el){ el.scrollIntoView({block:"start"}); await espera(300) } }
 document.body.classList.add("foto-lista");
})();
