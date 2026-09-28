/* Nube: sesión y avance de cada carrera en Supabase (tabla public.avance, una fila por escuela).
   Sin sesión no se ve nada: las páginas protegidas redirigen a ingreso.html.
   NUBE.get(cod) es síncrono (lee la copia cargada al entrar); poner/quitar escriben en la base. */
(function(){
 const config=window.APP_CONFIG||{};
 const URL_SB=config.supabaseUrl;
 const CLAVE_PUB=config.supabasePublishableKey;
 if(!URL_SB||!CLAVE_PUB||!window.supabase){
   const mensaje=!URL_SB||!CLAVE_PUB?'Falta la configuración de Supabase. Inicia el servidor local o publica la carpeta dist generada.':'No se pudo cargar Supabase. Comprueba tu conexión y recarga la página.';
   window.NUBE={listo:Promise.resolve(false),ingresar:async()=>{throw new Error(mensaje)}};
   const mostrar=()=>{const aviso=document.createElement('p');aviso.setAttribute('role','alert');aviso.textContent=mensaje;aviso.style.cssText='padding:16px;margin:16px;background:#fff3cd;color:#664d03;border-radius:8px';document.body.prepend(aviso)};
   if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mostrar,{once:true});else mostrar();
   return;
 }
 const esIngreso=/ingreso\.html$/.test(location.pathname);

 /* mientras se verifica la sesión, la página no se muestra */
 const st=document.createElement("style");
 st.textContent=`html.verificando body{visibility:hidden}
.ses{display:inline-flex;align-items:center;gap:8px;font-size:12px;color:#dbe6f2;white-space:nowrap}
.ses .ses-u{max-width:190px;overflow:hidden;text-overflow:ellipsis;opacity:.85}
.ses button{font:inherit;font-weight:600;font-size:12px;color:#fff;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.25);border-radius:20px;padding:4px 11px;cursor:pointer;transition:background .2s}
.ses button:hover{background:rgba(255,255,255,.22)}
@media(max-width:640px){.ses .ses-u{display:none}}`;
 document.head.appendChild(st);
 if(!esIngreso) document.documentElement.classList.add("verificando");

 const sb=window.supabase.createClient(URL_SB,CLAVE_PUB);
 const CACHE={};
 let usuario=null;

 const irIngreso=()=>{ location.replace("ingreso.html?volver="+encodeURIComponent(location.pathname.split("/").pop()+location.search)) };

 async function cargarTodo(){
  const {data,error}=await sb.from("avance").select("escuela,datos,docs,actualizado");
  if(error) throw error;
  for(const k in CACHE) delete CACHE[k];
  (data||[]).forEach(r=>{ CACHE[r.escuela]={d:r.datos,docs:r.docs||[],act:r.actualizado} });
 }

 function pintarUsuario(){
  const o=document.getElementById("sesion"); if(!o||!usuario) return;
  o.className="ses";
  o.innerHTML=`<span class="ses-u" title="${usuario.email}">${usuario.email}</span><button type="button">Salir</button>`;
  o.querySelector("button").onclick=()=>NUBE.salir();
 }

 const listo=(async()=>{
  const {data:{session}}=await sb.auth.getSession();
  if(!session){ if(!esIngreso) irIngreso(); return false }
  usuario=session.user;
  if(esIngreso) return true;
  try{ await cargarTodo() }catch(err){
   console.error("[nube]",err);
   document.documentElement.classList.remove("verificando");
   alert("No se pudo leer el avance desde Supabase: "+(err.message||err));
   return false;
  }
  if(document.readyState==="loading") await new Promise(r=>document.addEventListener("DOMContentLoaded",r,{once:true}));
  pintarUsuario();
  document.documentElement.classList.remove("verificando");
  return true;
 })();

 /* si la sesión se cierra en otra pestaña, esta también sale */
 sb.auth.onAuthStateChange(ev=>{ if(ev==="SIGNED_OUT"&&!esIngreso) irIngreso() });

 window.NUBE={
  sb, listo,
  get usuario(){ return usuario },
  get(cod){ return CACHE[cod]||null },
  async poner(cod,{d,docs}){
   const {data,error}=await sb.from("avance").upsert({escuela:cod,datos:d,docs:docs||[]}).select("actualizado").single();
   if(error) throw error;
   CACHE[cod]={d,docs:docs||[],act:data&&data.actualizado};
  },
  async quitar(cod){
   const {error}=await sb.from("avance").delete().eq("escuela",cod);
   if(error) throw error;
   delete CACHE[cod];
  },
  async ingresar(correo,clave){
   const {data,error}=await sb.auth.signInWithPassword({email:correo,password:clave});
   if(error) throw error;
   usuario=data.user; return usuario;
  },
  async salir(){ await sb.auth.signOut(); location.replace("ingreso.html") }
 };
})();
