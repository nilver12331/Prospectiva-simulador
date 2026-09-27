/* Refactor 1: quita el runtime del artefacto, guarda en localStorage y hace el motor independiente de la escuela. */
const fs=require("fs");
const path=require("path");
const APP=path.join(__dirname,"..","js","app.js");
let s=fs.readFileSync(APP,"utf8");
let n=0;
function rep(a,b,todo){ const c=s.split(a).length-1; if(c===0) throw new Error("NO HALLADO: "+a.slice(0,90)); if(c>1&&!todo) throw new Error("AMBIGUO("+c+"): "+a.slice(0,90)); s=s.split(a).join(b); n++; }

/* ── escuela activa y helpers ── */
rep(`const nombreEsc=()=>(ESCUELA&&ESCUELA.nombre&&!ESCUELA.demo)?ESCUELA.nombre:"Nutrición Humana";`,
`const nombreEsc=()=>ESCUELA&&ESCUELA.nombre?ESCUELA.nombre:"la carrera";
const META=()=>ESCUELA||{};
const MES=()=>{const d=new Date();const m=d.toLocaleDateString("es-PE",{month:"long"});return m.charAt(0).toUpperCase()+m.slice(1)+" de "+d.getFullYear()};`);

/* refsDe genérico: cada especialidad puede traer sus refs; si no, se derivan de las variables */
rep(`function refsDe(e){
 const dem=[2,3]; if(e.d.for>=3) dem.push(4);
 const ten=[]; if(e.t.nor>=3) ten.push(e.n.indexOf("producto")>=0?5:1); if(e.t.dem>=3) ten.push(10); if(e.nat==="rendimiento") ten.push(7); if(!ten.length) ten.push(10);
 const imp=[9,6]; const via=[4,8];
 return {dem,ten,imp,via};
}`,
`function refsDe(e){
 if(e.refs) return e.refs;
 const ok=i=>REF(i)?[i]:[];
 const dem=[...ok(2),...ok(3)]; if(e.d.for>=3) dem.push(...ok(4));
 const ten=[]; if(e.t.nor>=3) ten.push(...ok(e.t.inv>=4?5:1)); if(e.t.dem>=3) ten.push(...ok(10)); if(e.t.tec>=4) ten.push(...ok(7)); if(!ten.length) ten.push(...ok(10));
 const imp=[...ok(9),...ok(6)]; const via=[...ok(4),...ok(8)];
 return {dem,ten,imp,via};
}`);

/* ── runtime del artefacto fuera ── */
rep(`const usar=async nombre=>{try{return (window.claude&&window.claude.use)?await window.claude.use(nombre):null}catch(err){return null}};`,
`const usar=async()=>null; // el simulador no usa capacidades del anfitrión`);
rep(`function semillaNUT(){
 return {esp:ESP,refs:REFS,desc:DESC,natj:NAT_J,expertos:EXPERTOS,puesto:PUESTO,emprende:EMPRENDE,
  plan:PLAN,eq:EQ,eqman:EQMAN,extra:EXTRA,sinEncaje:SIN_ENCAJE,capSinEsp:CAP_SIN_ESP,
  arq:ARQ,traza:TRAZA,smart:SMART,vdecl:{},coh:COH,oe:OE,vpc:VPC,vp:VP,vpa:null,sus:SUS,narr:NARR,narrRef:NARRREF};
}`,
`/* Semilla de una escuela: los datos vienen de datos/<cod>.js. La capacidad instalada
   no viene puesta: se declara durante el recorrido, como en una escuela real. */
function semilla(cod){
 const D=DATOS[cod]; if(!D) return escuelaVacia();
 const d=clon(D); delete d.meta;
 d.vdecl={}; (d.esp||[]).forEach(e=>{ d.vdecl[e.n]={...e.v}; e.v={doc:0,cam:0,inf:0,dif:0,hab:0} });
 return d;
}`);
rep(`let BASE_NUT=null, ESCUELA=null, ESCUELAS=[], DB=null, USUARIO=null, PUEDO=true, LOCAL=false, ultimo="";`,
`let ESCUELA=null, ESCUELAS=[], DB=null, USUARIO=null, PUEDO=true, LOCAL=false, ultimo="";
let GUION={}, DEMO_AJ=null;
const CLAVE=cod=>"prospectiva-sim:"+cod;`);
rep(`  coh:[],oe:[],vpc:{t:"",p:"",s:[]},vp:[],vpa:null,sus:[],narr:{},narrRef:{}};
}`,`  coh:[],oe:[],vpc:{t:"",p:"",s:[]},vp:[],vpa:null,sus:[],narr:{},narrRef:{},guion:{},demoAj:null};
}`);
rep(` VP=clon(d.vp||[]); VPA=d.vpa?clon(d.vpa):null; SUS=clon(d.sus||[]); NARR=clon(d.narr||{}); NARRREF=clon(d.narrRef||{});
 DESC={};`,
` VP=clon(d.vp||[]); VPA=d.vpa?clon(d.vpa):null; SUS=clon(d.sus||[]); NARR=clon(d.narr||{}); NARRREF=clon(d.narrRef||{});
 GUION=clon(d.guion||{}); DEMO_AJ=d.demoAj?clon(d.demoAj):null;
 DESC={};`);
rep(`  narr:NARR,narrRef:NARRREF,vman:`,`  narr:NARR,narrRef:NARRREF,guion:GUION,demoAj:DEMO_AJ,vman:`);

/* reiniciar demo */
rep(`function reiniciarDemo(){
 if(!(ESCUELA&&ESCUELA.demo)) return;
 const d=clon(BASE_NUT||semillaNUT());
 // la capacidad se declara durante el recorrido, no viene puesta
 d.vdecl={}; (d.esp||[]).forEach(e=>{ d.vdecl[e.n]={...e.v}; e.v={doc:0,cam:0,inf:0,dif:0,hab:0} });
 aplicar(d); aplicarPaso({});`,
`function reiniciarDemo(){
 if(!(ESCUELA&&ESCUELA.demo)) return;
 try{ localStorage.removeItem(CLAVE(ESCUELA.cod)) }catch(err){}
 DOCS=[];
 aplicar(semilla(ESCUELA.cod)); aplicarPaso({});`);

/* documentos: simulados en memoria/localStorage */
rep(`async function cargarDocs(){
 DOCS=[];
 if(!DB||!ESCUELA) return;
 try{ const sn=await DB.collection("escuelas/"+ESCUELA.cod+"/fuentes").get();
  DOCS=sn.docs.map(d=>Object.assign({id:d.id},d.data()));
  DOCS.sort((a,b)=>(a.subido||"").localeCompare(b.subido||""));
 }catch(err){}
}`,
`async function cargarDocs(){
 DOCS=[];
 if(!ESCUELA) return;
 try{ const b=JSON.parse(localStorage.getItem(CLAVE(ESCUELA.cod))||"null"); if(b&&b.docs) DOCS=b.docs }catch(err){}
}`);
rep(`    <a class="df-n" href="\${d.url}" target="_blank" rel="noopener" title="Abrir \${d.nombre}">\${d.nombre}</a>`,
`    <span class="df-n" title="\${d.nombre} · documento simulado">\${d.nombre}</span>`);
rep(`async function subirDoc(archivo,rol){
 if(!ASSETS) ASSETS=await usar("assets");
 if(!ASSETS||!DB||!ESCUELA){ avisar("Los documentos solo se guardan en el tablero publicado.","mal"); return }
 const o=document.getElementById("b-subir"); o.disabled=true; o.textContent="Subiendo…";
 try{
  const r=await ASSETS.upload(archivo);
  const ext=(archivo.name.split(".").pop()||"doc").toLowerCase();
  const cuerpo={nombre:archivo.name,rol:rol,peso:archivo.size,ext:ext,url:r.url,
   asset:r.id,subido:new Date().toISOString()};
  await DB.doc("escuelas/"+ESCUELA.cod+"/fuentes/"+r.id).set(cuerpo);
  DOCS.push(Object.assign({id:r.id},cuerpo));
  pintarPanel();`,
`async function subirDoc(archivo,rol){
 if(!ESCUELA){ avisar("Elija primero una escuela.","mal"); return }
 const o=document.getElementById("b-subir"); o.disabled=true; o.textContent="Adjuntando…";
 try{
  /* Simulación: se registra el documento (nombre, tipo y peso); el archivo no sale del navegador. */
  const ext=(archivo.name.split(".").pop()||"doc").toLowerCase();
  const id="d"+Date.now().toString(36);
  const cuerpo={nombre:archivo.name,rol:rol,peso:archivo.size,ext:ext,url:"#",subido:new Date().toISOString()};
  DOCS.push(Object.assign({id},cuerpo));
  pintarPanel(); marcar();`);
{ const re=/async function quitarDoc\(id\)\{[\s\S]*?DOCS=DOCS\.filter\(d=>d\.id!==id\); pintarPanel\(\);\n\}/;
  if(!re.test(s)) throw new Error("NO HALLADO quitarDoc");
  s=s.replace(re,"async function quitarDoc(id){\n DOCS=DOCS.filter(d=>d.id!==id); pintarPanel(); marcar();\n}"); n++; }

/* guardado en localStorage */
rep(`async function guardar(){
 if(VALID) return;
 if(!DB||!ESCUELA||!PUEDO) return;
 const cuerpo=capturar(), txt=JSON.stringify(cuerpo);
 if(txt===ultimo) return;
 try{
  await DB.doc("escuelas/"+ESCUELA.cod+"/datos/estado").set({d:cuerpo,act:new Date().toISOString()});
  await DB.doc("escuelas/"+ESCUELA.cod).update({done:S.done,act:new Date().toISOString()});
  ultimo=txt; estadoGuardado("guardado");
 }catch(err){
  if(err&&err.code==="invalid_argument"){ PUEDO=false; estadoGuardado("solo lectura") }
  else estadoGuardado("sin guardar");
 }
}`,
`async function guardar(){
 if(VALID) return;
 if(!ESCUELA) return;
 const cuerpo=capturar(), txt=JSON.stringify(cuerpo);
 if(txt===ultimo) return;
 try{
  localStorage.setItem(CLAVE(ESCUELA.cod),JSON.stringify({d:cuerpo,docs:DOCS,act:new Date().toISOString()}));
  ESCUELA.done=S.done; ultimo=txt; estadoGuardado("guardado");
 }catch(err){ estadoGuardado("sin guardar") }
}`);
rep(` o.textContent = LOCAL ? "Vista local · sin guardar"
   : (t==="guardado" ? "Guardado · "+new Date().toLocaleTimeString("es-PE",{hour:"2-digit",minute:"2-digit"})`,
` o.textContent = (t==="guardado" ? "Guardado · "+new Date().toLocaleTimeString("es-PE",{hour:"2-digit",minute:"2-digit"})`);
rep(`async function cargarEscuela(cod,semilla){
 const meta=ESCUELAS.find(x=>x.cod===cod); if(!meta) return;
 ESCUELA=meta;
 let d=semilla||null,p=null;
 if(DB){ const sn=await DB.doc("escuelas/"+cod+"/datos/estado").get();
   if(sn.exists){const b=sn.data(); d=b.d||null; p=(b.d||{}).paso||null} }
 aplicar(d); aplicarPaso(p);`,
`async function cargarEscuela(cod){
 const meta=ESCUELAS.find(x=>x.cod===cod); if(!meta) return;
 ESCUELA=meta;
 let d=null,p=null;
 try{ const b=JSON.parse(localStorage.getItem(CLAVE(cod))||"null"); if(b&&b.d){ d=b.d; p=b.d.paso||null } }catch(err){}
 if(!d) d=semilla(cod);
 aplicar(d); aplicarPaso(p);
 try{ history.replaceState(null,"","?escuela="+cod) }catch(err){}`);
rep(`async function crearEscuela(cod,nombre,facultad,plan,datos,demo){
 const meta={cod,nombre,facultad:facultad||"",plan:plan||"",done:0,demo:!!demo,
  metodo:METODO,creada:new Date().toISOString(),act:new Date().toISOString()};
 if(DB){ await DB.doc("escuelas/"+cod).set(meta);
   await DB.doc("escuelas/"+cod+"/datos/estado").set({d:Object.assign(datos||escuelaVacia(),{paso:{}}),act:meta.act}) }
 ESCUELAS.push(meta); ESCUELAS.sort((a,b)=>a.nombre.localeCompare(b.nombre));
 return meta;
}`,
`async function crearEscuela(cod,nombre,facultad,plan){
 const meta={cod,nombre,facultad:facultad||"",plan:plan||"",done:0,demo:false,
  metodo:METODO,creada:new Date().toISOString(),act:new Date().toISOString()};
 ESCUELAS.push(meta);
 return meta;
}`);

/* descargas: solo Blob */
rep(`async function bajar(nombre,html){
 const datos="\\ufeff"+html;
 if(BAJADAS===null) BAJADAS=(await usar("downloads"))||false;
 if(BAJADAS){ try{ await BAJADAS.save({filename:nombre,data:datos}); return }catch(err){} }
 const b=new Blob([datos],{type:"application/msword"});`,
`async function bajar(nombre,html){
 const datos="\\ufeff"+html;
 const b=new Blob([datos],{type:"application/msword"});`);

/* ajuste de la propuesta: sin DB */
rep(` const ajVer=document.getElementById("aj-ver"); if(ajVer) ajVer.onclick=async()=>{ const a=VPA; if(DB&&ESCUELA){ const sn=await DB.doc("escuelas/"+ESCUELA.cod+"/datos/estado").get(); if(sn.exists){const d=(sn.data().d||{}); if(d.vpc){VPC=clon(d.vpc)} if(d.vp){VP=clon(d.vp)} } } VPA=a; if(ajusteHecho()){VPA.estado="hecho"; marcar()} pintarCentro("valor"); if(!ajusteHecho()) avisar("Génesys todavía no escribió la versión ajustada. Pegue la instrucción en el chat del proyecto y vuelva a comprobar.")};`,
` const ajVer=document.getElementById("aj-ver"); if(ajVer) ajVer.onclick=()=>{ if(ajusteHecho()){VPA.estado="hecho"; marcar()} pintarCentro("valor"); if(!ajusteHecho()) avisar("Génesys todavía no escribió la versión ajustada.")};`);

/* enlace público de la declaración: fuera */
rep(`    <button class="ic-b" id="cap-enlace" title="Página pública que llena la Dirección sin cuenta">🔗 Copiar enlace público</button>\n`,``);
rep(`const ENLACE_DECLARACION="https://claude.ai/artifact/G4rAL76BJUoUHSmerQV9gk";\n`,``);
rep(` const ce=document.getElementById("cap-enlace"); if(ce) ce.onclick=async()=>{
   const ok=await copiar(ENLACE_DECLARACION);
   ce.textContent=ok?"✓ Enlace copiado":"No se pudo copiar"; setTimeout(()=>{ce.textContent="🔗 Copiar enlace público"},2400);
   avisar(ok?"Enlace público copiado. Envíeselo a la Dirección de la Escuela: lo llena <b>sin cuenta</b> y le devuelve la declaración como texto para pegar aquí.":"El navegador no dejó copiar. El enlace es: "+ENLACE_DECLARACION)};\n`,``);

fs.writeFileSync(APP,s);
console.log("reemplazos:",n);
