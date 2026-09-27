/* Revisa los documentos del 1.6 al final del recorrido: por cada ficha y por el estudio, detecta elementos que se salen
   de su hoja, textos «undefined», «NaN», «null» o celdas vacías sospechosas. Se carga después de prueba.js. */
(async()=>{
 const espera=ms=>new Promise(r=>setTimeout(r,ms));
 for(let i=0;i<400;i++){ await espera(250); if(document.getElementById("resultado")) break }
 const out=[];
 const revisar=(etq)=>{
  const hojas=[...document.querySelectorAll("#doc-ficha .hoja-v, #doc-ficha .hoja-h, .hoja-doc .hoja-v, .hoja-doc .hoja-h")];
  let fuera=0, ejemplos=[];
  hojas.forEach((h,hi)=>{ const R=h.getBoundingClientRect();
   h.querySelectorAll("*").forEach(el=>{ const r=el.getBoundingClientRect(); if(!r.width) return;
    if(r.right>R.right+1||r.left<R.left-1){ fuera++; if(ejemplos.length<4) ejemplos.push((el.className||el.tagName)+" +"+Math.round(r.right-R.right)+"px en hoja "+(hi+1)) } }) });
  const txt=document.querySelector("#vista").innerText;
  const malos=(txt.match(/undefined|NaN|\bnull\b|\[object Object\]/g)||[]);
  out.push(etq+": hojas "+hojas.length+" · desbordes "+fuera+(ejemplos.length?" ("+ejemplos.join("; ")+")":"")+" · valores rotos "+malos.length+(malos.length?" "+[...new Set(malos)].join(","):""));
 };
 try{
  S.fichas=true; S.informe=true; S.done=Math.max(S.done,20);
  S.doc="fichas";
  for(let c=0;c<ARQ.length;c++){ S.fichaC=c; pintarCentro("informe"); await espera(300); revisar("ficha C"+(c+1)) }
  S.doc="informe"; pintarCentro("informe"); await espera(500); revisar("estudio");
 }catch(e){ out.push("ERROR "+e.message) }
 const d=document.createElement("pre"); d.id="revision"; d.textContent=out.join("\n"); document.body.appendChild(d);
})();
