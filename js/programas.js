/* Gestión de Programas Curriculares (programas.html) · portado del artefacto «Programas Curriculares Udato».
   Tres vistas: #tv tabla de programas · #pv proyecto de evaluación · #dv tablero del programa.
   Nutrición Humana (NUT) e Ingeniería de Sistemas (SIS) son reales: sus competencias y especialidades salen de
   datos/programas.js (herramientas/programas-datos.js) y el estado de cada paso se lee de lo que guardan las consolas
   en Supabase —la Fase 1 en la fila <COD>, la Fase 2 en F2-<COD>—. La comisión, los grupos de interés, los documentos,
   el certificado y las extensiones de esas carreras se guardan en la fila PRG-<COD>. Los demás programas son simulados. */
(async function(){
if(window.NUBE) try{ await NUBE.listo; }catch(_){}

const HOY=(()=>{const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');})();
const fechaLarga=()=>{const t=new Date().toLocaleDateString('es-PE',{weekday:'long',day:'numeric',month:'long'});return t.charAt(0).toUpperCase()+t.slice(1);};
const REAL=window.PROG_REAL||{};

/* Estado real de cada paso, con las mismas reglas que usan las consolas para pintar su hoja de ruta
   (estadoEsp en js/f2.js): d cerrado · h cerrado, esperando validación · p en curso · '' pendiente */
const F1_TAM=[6,4,3,3,2,3];   // momentos por paso de la Fase 1 (PROG en js/app.js)
function estadoReal(cod){
  const S={},BE={},BC={}, R=REAL[cod];
  R.comps.forEach(c=>{BC[c.code]={}; c.esp.forEach(e=>BE[e.id]={});});
  const b1=NUBE.get(cod), done=(b1&&b1.d&&b1.d.paso&&b1.d.paso.done)||0; let base=0;
  F1_TAM.forEach((n,k)=>{ S['1.'+(k+1)]= done>=base+n?'d':done>base?'p':''; base+=n; });
  const b2=NUBE.get('F2-'+cod), d2=(b2&&b2.d)||{}, por=d2.por||{};
  R.comps.forEach(c=>c.esp.forEach(e=>{ const x=por[e.id]||{}, sv=x.saved||{}, te=x.te||{}, n=x.step||0;
    BE[e.id]['2.1']= sv.p21?'d':n>=1?'p':'';
    BE[e.id]['2.2']= sv.p22?'d':n>=4?'p':'';
    BE[e.id]['2.3']= te.saved?'d':te.gen?'h':n>=5?'p':''; }));
  const d23=d2.d23||{}, d24=d2.d24||{}, d25=d2.d25||{};
  S['2.4']= d23.saved?'d':d23.lote?'p':'';
  S['2.5']= d24.saved?'d':d24.gen?'p':'';
  S['2.6']= d25.saved?'d':d25.gen?'p':'';
  return {S,BE,BC};
}
const comps0=cod=>REAL[cod].comps.flatMap(c=>c.esp.map(e=>e.n));

/* Adónde lleva cada fase de una carrera real */
function urlFase(r,i){
  if(!r||!r.cod) return null;
  if(i===0) return 'consola.html?escuela='+r.cod;
  if(i===1) return REAL[r.cod].hastaF2?'consola2.html?escuela='+r.cod:'programas.html?proyecto='+encodeURIComponent(r.cod);
  return 'consola3.html?escuela='+r.cod;
}
function irA(u){ if(/^https?:/.test(u)) window.open(u,'_blank','noopener'); else location.href=u; }

/* Vista actual en la dirección y en la miga de la barra */
function vista(q,miga){ try{history.replaceState(null,'',q?'?'+q:location.pathname);}catch(e){} const m=document.getElementById('miga'); if(m) m.textContent=miga; }

/* Gestión del proyecto de las carreras reales: fila PRG-<COD> en public.avance */
const GEST={};
Object.keys(REAL).forEach(cod=>{const b=NUBE.get('PRG-'+cod); if(b&&b.d) GEST[cod]=b.d;});
const gest=cod=>GEST[cod]||(GEST[cod]={v:1});
const tGest={};
function guardarGest(cod){
  clearTimeout(tGest[cod]);
  tGest[cod]=setTimeout(async()=>{
    try{ GEST[cod].act=new Date().toISOString(); await NUBE.poner('PRG-'+cod,{d:GEST[cod],docs:[]}); }
    catch(e){ console.error('[programas]',e); alert('No se pudo guardar en la nube: '+(e.message||e)); }
  },800);
}

(()=>{

const CHECK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
const I={
 p1:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/></svg>',
 p2:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2.2"/><circle cx="5" cy="18" r="2.2"/><circle cx="19" cy="18" r="2.2"/><circle cx="12" cy="13" r="2.2"/><path d="M12 7.2v3.6M10.3 14.6l-3.6 2.2M13.7 14.6l3.6 2.2"/></svg>',
 p3:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11M15 9v11M3 14.5h18"/></svg>',
 spark:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 5.6L19.5 9.5l-5.7 1.9L12 17l-1.8-5.6L4.5 9.5l5.7-1.9z"/><path d="M19 14l.8 2.3 2.2.7-2.2.8L19 20l-.8-2.2L16 17l2.2-.7z" opacity=".75"/></svg>',
 lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>',
 x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
 Empleadores:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 12h18"/></svg>',
 Egresados:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c2 2 10 2 12 0v-5"/></svg>',
 Estudiantes:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 5h7a2 2 0 012 2v12a2 2 0 00-2-2H4zM20 5h-7a2 2 0 00-2 2v12a2 2 0 012-2h7z"/></svg>',
 SINEACE:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/></svg>',
 Director:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>',
 Expertos:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5M11 8v6M8 11h6"/></svg>'
};
const TYPECOL={Empleadores:'p2',Egresados:'p1',Estudiantes:'p1',SINEACE:'p3',Director:'p2',Expertos:'p3'};

const PHASES=[
 {k:'p1',n:'Fase 1',name:'Prospectiva',steps:[
  {c:'1.1',n:'Prospectiva de especialidades',l:'E'},{c:'1.2',n:'Definir competencias',l:'E'},{c:'1.3',n:'Matriz de correspondencia',l:'E'},
  {c:'1.4',n:'Definir objetivos',l:'E'},{c:'1.5',n:'Propuesta de valor',l:'E'},{c:'1.6',n:'Estudio prospectivo',l:'E'}]},
 {k:'p2',n:'Fase 2',name:'Diseño Curricular',steps:[
  {c:'2.1',n:'Funciones, sustento y productos',l:'S'},{c:'2.2',n:'Elementos de productividad',l:'S'},{c:'2.3',n:'Temas nucleares',l:'S'},
  {c:'2.4',n:'Derivación disciplinar',l:'E'},{c:'2.5',n:'Pesos y créditos',l:'E'},{c:'2.6',n:'Propuesta de cursos',l:'E'}]},
 {k:'p3',n:'Fase 3',name:'Plan de Estudio',steps:[
  {c:'3.1',n:'Perfiles y objetivos',l:'E'},{c:'3.2',n:'Estructura de conocimiento',l:'E'},{c:'3.3',n:'Diseño de cursos',l:'E'},{c:'3.4',n:'Cursos de dominio',l:'E'}]}
];
const LV={E:'escuela',S:'especialidad',C:'competencia'};
const pvEl=document.getElementById('pv');
let abriendo=false;
let COMPS=[], SCHOOL={}, BYESP={}, BYCOMP={}, ESPS=[], phaseAv=[0,0,0], glob=0, CUR=null, curTab='comp';
const allSteps=PHASES.flatMap(p=>p.steps);
const val=s=>(s==='d'||s==='h')?1:0;
const pct=x=>Math.round(x*100);
const TODAY=HOY;
function stEsp(step,esp){ if(step.l==='E')return SCHOOL[step.c]||''; if(step.l==='C')return (BYCOMP[esp.comp.code]||{})[step.c]||''; return (BYESP[esp.id]||{})[step.c]||''; }
function stepComp(step){
  if(step.l==='E') return val(SCHOOL[step.c]);
  if(step.l==='C') return COMPS.length?COMPS.reduce((a,c)=>a+val((BYCOMP[c.code]||{})[step.c]),0)/COMPS.length:0;
  return ESPS.length?ESPS.reduce((a,e)=>a+val((BYESP[e.id]||{})[step.c]),0)/ESPS.length:0;
}
function recompute(){
  ESPS=COMPS.flatMap(c=>c.esp.map(e=>({...e,comp:c})));
  phaseAv=PHASES.map(p=>p.steps.reduce((a,s)=>a+stepComp(s),0)/p.steps.length);
  glob=phaseAv.reduce((a,b)=>a+b,0)/3;
}
function phaseLabels(){
  return PHASES.map((p,i)=>{const v=pct(phaseAv[i]); const lock=!(CUR&&CUR.r.cod)&&i>0&&phaseAv[i-1]<1&&phaseAv[i]===0;  // en las carreras reales cada fase abre su consola sin esperar a la anterior
    const hasH=p.steps.some(s=>s.l==='E'&&SCHOOL[s.c]==='h');
    return {v,lock,s:lock?'':v>=100?(hasH?'Validación':'Cerrada'):v>0?'En curso':'Por iniciar'};});
}
const firstOpen=p=>p.steps.find(s=>stepComp(s)<1)||p.steps[p.steps.length-1];

/* ---------- Catálogo simulado por carrera ---------- */
const CATALOG=[
 [/Sistemas/,['Desarrollo de software','Ciencia de datos e IA','Ciberseguridad','Infraestructura y nube','Gestión e innovación de TI','Sistemas de información empresarial']],
 [/Civil/,['Estructuras','Geotecnia','Hidráulica y recursos hídricos','Transportes y vías','Gestión de la construcción','Ingeniería sismorresistente']],
 [/Ambiental/,['Gestión ambiental','Tratamiento de aguas','Evaluación de impacto ambiental','Gestión de residuos sólidos','Cambio climático y energía']],
 [/Alimentarias/,['Procesamiento de alimentos','Control de calidad e inocuidad','Desarrollo de productos','Gestión de plantas agroindustriales','Biotecnología alimentaria']],
 [/Arquitectura/,['Diseño arquitectónico','Urbanismo y planificación','Edificación sostenible','Patrimonio y restauración','Diseño de interiores']],
 [/Medicina/,['Medicina interna','Cirugía general','Pediatría','Ginecología y obstetricia','Medicina familiar y comunitaria','Salud pública']],
 [/Nutrición/,['Nutrición clínica hospitalaria','Nutrición comunitaria y salud pública','Gestión de servicios de alimentación','Nutrición pediátrica y materna','Nutrición clínica ambulatoria','Nutrición deportiva']],
 [/Enfermería/,['Cuidado del adulto','Enfermería materno-infantil','Salud comunitaria','Cuidados críticos','Gestión de servicios de enfermería']],
 [/Psicología/,['Psicología clínica','Psicología educativa','Psicología organizacional','Psicología social comunitaria','Neuropsicología']],
 [/Contabilidad/,['Contabilidad financiera','Tributación','Auditoría','Costos y presupuestos','Finanzas corporativas']],
 [/Marketing/,['Marketing digital','Comercio internacional','Investigación de mercados','Logística internacional','Gestión de marca']],
 [/Administración|Adm\./,['Gestión del talento humano','Finanzas empresariales','Marketing','Operaciones y logística','Emprendimiento e innovación','Gestión pública']],
 [/Teología|Misiones/,['Ministerio pastoral','Misiología','Educación religiosa','Capellanía','Liderazgo eclesiástico']],
 [/Comunicaciones/,['Periodismo','Comunicación corporativa','Producción audiovisual','Comunicación digital','Publicidad']],
 [/Derecho/,['Derecho civil','Derecho penal','Derecho corporativo','Derecho laboral','Derecho constitucional']],
 [/Educación|Docentes/,['Educación inicial','Educación primaria','Educación secundaria','Gestión educativa','Tecnología educativa']],
 [/Industrial/,['Gestión de operaciones','Calidad y productividad','Logística y cadena de suministro','Seguridad industrial','Ingeniería económica']]
];
const DEFAULT_ESP=['Formación general','Investigación formativa','Responsabilidad social','Gestión académica','Innovación educativa'];
const CTYPES=['Competencia de atención','Competencia de gestión','Competencia de construcción','Competencia de aseguramiento'];
const NOM=['María','Luis','Ana','Jorge','Rosa','Carmen','Víctor','Paola','Samuel','Rocío','Alberto','Lucía','Daniel','Elena','Raúl','Gabriela','Hugo','Noemí','Esteban','Ruth','Marco','Julia','Andrés','Sara'];
const APE=['Rojas','Paredes','Castillo','Quispe','Vargas','Salazar','Mendoza','Ccori','Tito','Benavides','Chávez','Fernández','Huamán','Flores','Mamani','Torres','Ramos','Gutiérrez','Cárdenas','Sánchez','Apaza','Condori','Villanueva','Espinoza'];
const TIT=['Dr.','Mg.','Lic.','Mg.','Ing.'];
const BIBH=['Esdras','Josué','Caleb','Gedeón','Samuel','Débora','Elías','Rut'];
const TIPOS=['Evaluación','Rediseño','Actualización'];
const seeded=i=>{let s=i*7919+17;return()=>{s=(s*9301+49297)%233280;return s/233280;};};
const pad=n=>String(n).padStart(2,'0');


function displayName(n){
  if(/Nutrición/.test(n)) return 'Nutrición Humana';
  return n.replace(/^Programa (Curricular )?(de )?/,'').replace(/\s(al\s)?20\d\d$/,'');
}
function buildStates(fases,comps){
  const S={},BE={},BC={}; comps.forEach(c=>{BC[c.code]={};c.esp.forEach(e=>BE[e.id]={});});
  const esps=comps.flatMap(c=>c.esp);
  PHASES.forEach((p,pi)=>{const units=fases[pi]/100*p.steps.length; const k=Math.floor(units+1e-9); const frac=units-k;
    p.steps.forEach((s,si)=>{const st= si<k?'d':(si===k&&frac>0.01)?'p':'';
      if(s.l==='E') S[s.c]=st==='p'&&frac>=.5?'p':st;
      else if(s.l==='C') comps.forEach((c,ci)=>BC[c.code][s.c]= st==='p'?(ci<Math.floor(comps.length*frac)?'d':'p'):st);
      else esps.forEach((e,ei)=>BE[e.id][s.c]= st==='p'?(ei<Math.floor(esps.length*frac)?'d':'p'):st);});});
  return {S,BE,BC};
}
function buildCfg(r,i){
  const p=r.proj, R=seeded(i+3), pick=a=>a[Math.floor(R()*a.length)];
  const person=()=>`${pick(TIT)} ${pick(NOM)} ${pick(APE)}`;
  const name=r.cod?REAL[r.cod].nombre:displayName(r.n);
  const label=`Proyecto ${p.tipo} ${p.anio} ${p.bib}`;
  const fin=p.ext||p.fin; const ini=r.cod?p.ini:`${p.anio}-03-02`;
  let comps,S,BE,BC,COMx,STKx,DOCSx,hist;
  const list=r.cod?comps0(r.cod):(CATALOG.find(([re])=>re.test(r.n))||[null,DEFAULT_ESP])[1];
  if(r.cod){
    comps=REAL[r.cod].comps; ({S,BE,BC}=estadoReal(r.cod));
  } else {
    const nE=Math.min(r.esp,list.length), nC=Math.max(1,Math.min(r.comp,nE));
    comps=Array.from({length:nC},(_,k)=>({code:'C'+(k+1),name:list[k],type:CTYPES[k%4],esp:[]}));
    for(let e=0;e<nE;e++) comps[e%nC].esp.push({id:'E'+(e+1),n:list[e],r:e<nC?'Equivale a la competencia':'Ámbito de aplicación'});
    ({S,BE,BC}=buildStates(p.fasesRaw,comps));
  }
  if(r.cod==='NUT'){
    COMx=[{n:REAL.NUT.directora,c:'Directora de Escuela',r:'Presidente'},{n:'Dr. Luis Paredes',c:'Curriculista',r:'Secretario'},
      {n:'Lic. Ana Castillo',c:'Coordinadora de Nutrición Clínica',r:'Vocal'},{n:'Mg. Jorge Quispe',c:'Coordinador de Salud Pública',r:'Vocal'},
      {n:'Lic. Rosa Vargas',c:'Docente · Servicios de alimentación',r:'Vocal'}];
    STKx=[{t:'Empleadores',n:'Lic. Carmen Salazar',d:'Jefa de nutrición, hospital regional',cert:'Entregado',res:'Recibido'},
      {t:'Empleadores',n:'Ing. Víctor Mendoza',d:'Gerente de operaciones, concesionaria de alimentos',cert:'Pendiente',res:'Entregado'},
      {t:'Egresados',n:'Lic. Paola Ccori',d:'Promoción 2021, campus Juliaca',cert:'Pendiente',res:'Recibido'},
      {t:'Estudiantes',n:'Samuel Tito',d:'Delegado de 9.º ciclo, campus Lima',cert:'Pendiente',res:'Pendiente'},
      {t:'SINEACE',n:'Mg. Rocío Benavides',d:'Evaluadora externa',cert:'Entregado',res:'Recibido'},
      {t:'Director',n:'Dr. Alberto Chávez',d:'Director de Escuela, campus Tarapoto',cert:'Pendiente',res:'Entregado'},
      {t:'Expertos',n:'Dra. Lucía Fernández',d:'Especialista en nutrición clínica',cert:'Recibido',res:'Recibido'}];
  } else {
    const dir=r.cod?REAL[r.cod].directora:person(), cur=person();
    COMx=[{n:dir,c:'Director de Escuela',r:'Presidente'},{n:cur,c:'Curriculista',r:'Secretario'},
      ...comps.slice(0,3).map(c=>({n:person(),c:`Coordinación · ${c.alias||c.name}`,r:'Vocal'}))];
    const st=()=>pick(['Pendiente','Entregado','Recibido']);
    STKx=[{t:'Empleadores',n:person(),d:`Empleador · ${list[0]}`,cert:st(),res:st()},
      {t:'Empleadores',n:person(),d:`Empleador · ${list[1]||list[0]}`,cert:st(),res:st()},
      {t:'Egresados',n:person(),d:`Promoción ${p.anio-4}`,cert:st(),res:st()},
      {t:'Estudiantes',n:`${pick(NOM)} ${pick(APE)}`,d:'Delegado de último ciclo',cert:st(),res:st()},
      {t:'SINEACE',n:person(),d:'Evaluador externo',cert:st(),res:st()},
      {t:'Director',n:dir,d:'Director de Escuela',cert:st(),res:st()},
      {t:'Expertos',n:person(),d:`Especialista en ${list[0].toLowerCase()}`,cert:st(),res:st()}];
  }
  const f1ok=S['1.6']==='d'||(!r.cod&&p.fasesRaw[0]>=100);
  DOCSx=[{t:'Resolución de aprobación',n:`Resolución de inicio del ${label}`,f:`${p.anio}-02-20`,r:'Consejo de Facultad',file:'resolucion-inicio.pdf'},
    {t:'Resolución de actualización de las competencias',n:f1ok?'Competencias actualizadas':'',f:f1ok?`${p.anio}-07-10`:'',r:'Vicerrectorado Académico',file:f1ok?'resolucion-competencias.pdf':''},
    {t:'Resolución para stakeholders',n:'Designación de evaluadores externos',f:`${p.anio}-04-15`,r:'Dirección de Escuela',file:'designacion-evaluadores.pdf'},
    {t:'Recomendaciones de SINEACE',n:`Informe de evaluación externa ${p.anio-3}`,f:`${p.anio-3}-11-20`,r:'Oficina de Calidad',file:'informe-sineace.pdf'},
    {t:'Recomendaciones de calidad',n:'Plan de mejora del programa',f:`${p.anio}-03-05`,r:'Oficina de Calidad',file:'plan-mejora.docx'}];
  hist=Array.from({length:Math.max(0,r.nproj-1)},(_,k)=>{const y=p.anio-3*(k+1);return {tipo:pick(TIPOS),anio:y,bib:BIBH[(i+k)%BIBH.length],per:`03/${y} – 11/${y}`,res:`Plan de Estudios ${y+1}`};});
  // lo que la Escuela ya registró en la nube manda sobre lo de ejemplo
  const g=r.cod&&GEST[r.cod];
  if(g){ if(g.COM)COMx=g.COM; if(g.STK)STKx=g.STK; if(g.DOCS)DOCSx=g.DOCS; }
  return {r,i,name,label,tipo:p.tipo,anio:p.anio,bib:p.bib,ini,fin,fac:r.fac,comps,S,BE,BC,COM:COMx,STK:STKx,DOCS:DOCSx,hist};
}
function applyCfg(c){CUR=c; COMPS=c.comps; SCHOOL=c.S; BYESP=c.BE; BYCOMP=c.BC; recompute();}
window.projSummary=(r,i)=>{applyCfg(buildCfg(r,i)); return phaseLabels();};

/* ---------- Render de la cabecera y las fases ---------- */
const fmtD=d=>d?d.split('-').reverse().join('/'):'';
function renderHero(){
  const c=CUR, $=id=>document.getElementById(id);
  $('crProg').textContent=c.r.n; $('hLabel').textContent=c.r.n; $('hName').textContent=c.name;
  $('hPre').textContent=`Proyecto ${c.tipo} ${c.anio}`; $('hBib').textContent=c.bib; $('hTipo').textContent=c.tipo;
  const pres=c.COM.find(m=>m.r==='Presidente'), sec=c.COM.find(m=>m.r==='Secretario');
  $('hPeople').innerHTML=[pres,sec].filter(Boolean).map(m=>`<div class="person"><span class="av">${ini(m.n)}</span><div><b>${m.n}</b><span>${m.c}</span></div></div>`).join('');
  $('hIni').textContent=fmtD(c.ini); $('hFin').textContent=fmtD(c.fin);
  const d0=new Date(c.ini),d1=new Date(c.fin),dt=new Date(TODAY); const tot=Math.max(1,Math.round((d1-d0)/864e5)); const el=Math.min(tot,Math.max(0,Math.round((dt-d0)/864e5)));
  const w=Math.round(el/tot*100); $('hTlI').style.width=w+'%'; $('hTlE').style.left=w+'%';
  $('hTlN').textContent=`Hoy ${fmtD(TODAY)} · día ${el} de ${tot} · quedan ${tot-el}`;
  // siguiente acción
  const labs=phaseLabels(); let nxt='El proyecto está listo para su cierre', nxs='Todas las fases completas';
  for(let i=0;i<3;i++){ if(!labs[i].lock && phaseAv[i]<1){ const s=firstOpen(PHASES[i]);
      let who=''; if(s.l==='S'){const e=ESPS.find(e=>!val((BYESP[e.id]||{})[s.c])); if(e) who=` de ${e.id}`;}
      nxt=`${phaseAv[i]>0?'Continuar':'Iniciar'} ${s.c} (${s.n})${who}`; nxs='Mentor Génesys tiene listo el siguiente paso'; break; } }
  $('hNext').textContent=nxt; $('hNextS').textContent=nxs;
  $('proj').innerHTML=`<option>${c.tipo} ${c.anio} · ${c.bib} (vigente)</option>`+c.hist.map(h=>`<option>${h.tipo} ${h.anio} · ${h.bib}</option>`).join('');
  $('hist').innerHTML=c.hist.length?c.hist.map(h=>`<tr><td class="pn">Proyecto ${h.tipo} ${h.anio} <em>${h.bib}</em></td><td class="num">${h.per}</td><td>Director de Escuela · Curriculista</td><td>${h.res}</td><td><span class="ok">Cerrado</span></td><td><button class="btn" type="button">Ver</button></td></tr>`).join(''):'<tr><td colspan="6" class="note" style="padding:18px 0">Es el primer proyecto de evaluación del programa.</td></tr>';
  $('dU').textContent=`Universidad Peruana Unión · Escuela de ${c.name}`;
  $('dWhy').textContent=`Por su participación como evaluador en el ${c.label}, con una dedicación de ${(window.kHor&&kHor.value)||40} horas.`;
  const r=56,cc=2*Math.PI*r;
  $('gring').innerHTML=`<circle cx="64" cy="64" r="${r}" fill="none" stroke="rgba(255,255,255,.14)" stroke-width="9"/><circle cx="64" cy="64" r="${r}" fill="none" stroke="#d4a12a" stroke-width="9" stroke-linecap="round" stroke-dasharray="${cc*glob} ${cc}" transform="rotate(-90 64 64)"/>`;
  $('gpct').textContent=pct(glob)+'%';
}
function renderJourney(){
  const labs=phaseLabels();
  document.getElementById('journey').innerHTML=PHASES.map((p,i)=>{
    const L=labs[i]; let st,sub,cta,ok=true;
    if(L.lock){st='Bloqueada';ok=false;const prev=PHASES[i-1],ls=prev.steps[prev.steps.length-1];sub=`Se habilita al cerrar <b>${ls.c} (${ls.n})</b>.`;cta=`Se habilita al cerrar ${prev.name}`;}
    else if(L.v>=100){st=L.s==='Validación'?'Esperando validación humana':'Cerrada';sub=`<b>${p.steps.length} pasos cerrados.</b> ${L.s==='Validación'?'Falta la validación del panel de especialistas.':'Resultados guardados en el módulo.'}`;cta='Revisar resultados';}
    else if(L.v>0){st='En curso';const s=firstOpen(p);sub=`<b>${s.c} (${s.n})</b> en curso.`;cta='Continuar la fase';}
    else {st='Por iniciar';sub=`Comienza con <b>${p.steps[0].c} (${p.steps[0].n})</b>.`;cta='Iniciar la fase';}
    const bars=p.steps.map(s=>{const v=stepComp(s);return `<i class="${v>=1?'d':v>0?'p':''}" title="${s.c} (${s.n})"></i>`}).join('');
    return `<article class="ph" style="--c:var(--${p.k});--cs:var(--${p.k}-soft)">
      <div class="ph-head"><div style="display:flex;gap:14px;align-items:center"><span class="ic">${I[p.k]}</span><div><div class="idx">${p.n} · ${p.steps.length} pasos</div><h3>${p.name}</h3></div></div><span class="state ${ok?'ok':''}">${st}</span></div>
      <div class="steps" aria-label="Pasos de la fase">${bars}</div>
      <p class="sub">${sub}</p>
      <button class="gen" type="button" data-ph="${p.name}" data-x="${i}" ${L.lock?'disabled':''}>
        <span class="pc">${L.v}%</span>
        <span class="lab"><b>Trabajar con Mentor Génesys</b><small>${cta}</small></span>
        <span class="spark">${L.lock?I.lock:I.spark}</span>
      </button>
    </article>`;}).join('');
  document.querySelectorAll('#journey .gen:not(:disabled)').forEach(b=>b.addEventListener('click',()=>{const u=urlFase(CUR.r,+b.dataset.x); if(u) irA(u); else toast(`Mentor Génesys abre la fase ${b.dataset.ph} del ${CUR.label}.`);}));
}
window.espNames=n=>(CATALOG.find(([re])=>re.test(n))||[null,DEFAULT_ESP])[1];


// ===== Tablero =====
function ck(s,txt){const cls=s==='d'?'done':s==='h'?'hum':s==='p'?'prog':'';
  const lab=s==='d'?'cerrado':s==='h'?'esperando validación humana':s==='p'?'en curso':'pendiente';
  return `<span class="ck ${cls} ${txt?'frac':''}" aria-label="${lab}${txt?' '+txt:''}">${txt?txt:((s==='d'||s==='h')?CHECK:'')}</span>`;}
/* El tablero muestra solo las fases con avance registrado (1 y 2). En las carreras reales, la especialidad
   aparece cuando se cierra el paso 1.1 y la competencia cuando se cierra el 1.2; antes, «Por definir». */
const TPH=()=>PHASES.filter(p=>p.k!=="p3");
const TSTEPS=()=>TPH().flatMap(p=>p.steps);
const espDef=()=>!(CUR&&CUR.r&&CUR.r.cod)||SCHOOL["1.1"]==="d";
const compDef=()=>!(CUR&&CUR.r&&CUR.r.cod)||SCHOOL["1.2"]==="d";
function header(firstCols){
  let h='<thead><tr class="ph-row">'+firstCols.map(()=>'<th class="blank"></th>').join('');
  TPH().forEach((p,i)=>h+=`<th colspan="${p.steps.length}" class="${i?'sep':''}" style="--c:var(--${p.k})">${p.n} · ${p.name}</th>`);
  h+='<th class="blank"></th></tr><tr class="st-row">'+firstCols.map(t=>`<th style="text-align:left;padding-left:0"><span class="eyebrow">${t}</span></th>`).join('');
  TPH().forEach((p,pi)=>p.steps.forEach((s,si)=>h+=`<th class="${pi&&!si?'sep':''}" title="${s.c} (${s.n}) · paso de ${LV[s.l]}"><div class="stp"><span class="c">${s.c}</span><span class="n">${s.n}</span><span class="lv">${LV[s.l]}</span></div></th>`));
  return h+'<th style="text-align:right"><span class="eyebrow">Avance</span></th></tr></thead>';
}
function rav(v){return `<td class="rav"><div class="rv"><b>${v}%</b><i><s style="width:${v}%"></s></i></div></td>`;}
function renderEsp(){
  let h=header(['Especialidad'])+'<tbody>';let first=true;
  COMPS.forEach(c=>c.esp.forEach((e,ei)=>{
    const E={...e,comp:c};h+='<tr>';
    h+=espDef()?`<td class="lbl"><b><span class="code">${e.id}</span>${e.n}</b><span>${e.r}</span></td>`:`<td class="lbl"><b><span class="code">${e.id}</span><i style="color:var(--muted);font-weight:500">Por definir</i></b><span>Se define en el paso 1.1</span></td>`;
    let done=0;
    TPH().forEach((p,pi)=>p.steps.forEach((s,si)=>{const st=stEsp(s,E);done+=val(st);const sep=pi&&!si?'sep ':'';
      if(s.l==='E'){if(first)h+=`<td class="${sep}band" rowspan="${ESPS.length}">${ck(st)}</td>`;}
      else if(s.l==='C'){if(ei===0)h+=`<td class="${sep}" rowspan="${c.esp.length}">${ck(st)}</td>`;}
      else h+=`<td class="${sep}">${ck(st)}</td>`;}));
    h+=rav(pct(done/TSTEPS().length))+'</tr>';first=false;}));
  return h+'</tbody>';
}
function renderComp(){
  let h=header(['Competencia'])+'<tbody>';
  COMPS.forEach((c,ci)=>{
    h+=compDef()?`<tr><td class="lbl"><b><span class="code">${c.code}</span>${c.name}</b><span>${c.type} · ${c.esp.length} especialidad${c.esp.length>1?'es':''}</span></td>`:`<tr><td class="lbl"><b><span class="code">${c.code}</span><i style="color:var(--muted);font-weight:500">Por definir</i></b><span>Se define en el paso 1.2</span></td>`;
    let sum=0;
    TPH().forEach((p,pi)=>p.steps.forEach((s,si)=>{const sep=pi&&!si?'sep ':'';
      if(s.l==='E'){const st=SCHOOL[s.c]||'';sum+=val(st);if(ci===0)h+=`<td class="${sep}band" rowspan="${COMPS.length}">${ck(st)}</td>`;return;}
      if(s.l==='C'){const st=BYCOMP[c.code][s.c]||'';sum+=val(st);h+=`<td class="${sep}">${ck(st)}</td>`;return;}
      const sts=c.esp.map(e=>(BYESP[e.id]||{})[s.c]||'');const n=sts.filter(x=>val(x)).length;sum+=n/sts.length;
      let cell;
      if(n===sts.length) cell=ck(sts.every(x=>x==='d')?'d':'h');
      else if(sts.length>1&&(n>0||sts.some(x=>x==='p'))) cell=ck('p',`${n}/${sts.length}`);
      else cell=ck(sts.some(x=>x==='p')?'p':'');
      h+=`<td class="${sep}">${cell}</td>`;}));
    h+=rav(pct(sum/TSTEPS().length))+'</tr>';});
  return h+'</tbody>';
}
function setTab(which){curTab=which;
  document.getElementById('t-comp').setAttribute('aria-selected',which==='comp');
  document.getElementById('t-esp').setAttribute('aria-selected',which==='esp');
  document.getElementById('mxTitle').textContent= which==='comp'?'Avance por competencia':'Avance por especialidad';
  document.getElementById('legFrac').hidden = which!=='comp';
  document.getElementById('mx').innerHTML= which==='comp'?renderComp():renderEsp();
}
document.getElementById('t-comp').onclick=()=>setTab('comp');
const namesBtn=document.getElementById('names');
namesBtn.onclick=()=>{const on=namesBtn.getAttribute('aria-pressed')!=='true';
  namesBtn.setAttribute('aria-pressed',on);document.getElementById('mx').classList.toggle('compact',!on);
  namesBtn.lastChild.textContent=on?'Ocultar nombre de pasos':'Mostrar nombre de pasos';};
document.getElementById('t-esp').onclick=()=>setTab('esp');
setTab('comp');

// ===== Certificado de evaluadores =====
const dCert=document.getElementById('dCert');
['cfgCert','diploma'].forEach(id=>document.getElementById(id).onclick=()=>dCert.showModal());
document.getElementById('fCert').addEventListener('submit',e=>{e.preventDefault();
  document.getElementById('dTit').textContent=kTit.value.trim()||'Certificado de Evaluador';
  document.getElementById('dWhy').textContent=`Por su participación como evaluador en el ${CUR?CUR.label:'proyecto'}, con una dedicación de ${kHor.value||40} horas.`;
  document.getElementById('dF1').textContent=kF1.value.trim()||'Presidente de la Comisión';
  document.getElementById('dF2').textContent=kF2.value.trim()||'Director de Escuela';
  if(CUR&&CUR.r.cod){gest(CUR.r.cod).cert={tit:kTit.value,hor:kHor.value,fec:kFec.value,f1:kF1.value,f2:kF2.value,para:kFor.value};guardarGest(CUR.r.cod);}
  dCert.close();toast('Certificado de evaluadores guardado.');});

// ===== Documentos de gestión =====
let DOCS=[
 {t:'Resolución de aprobación',n:'Resolución de inicio del proyecto de rediseño',f:'2026-06-28',r:'Consejo de Facultad',file:'resolucion-inicio.pdf'},
 {t:'Resolución de actualización de las competencias',n:'',f:'',r:'Vicerrectorado Académico',file:''},
 {t:'Resolución para stakeholders',n:'Designación de evaluadores externos',f:'2026-08-12',r:'Dirección de Escuela',file:'designacion-evaluadores.pdf'},
 {t:'Recomendaciones de SINEACE',n:'Informe de evaluación externa 2023',f:'2023-11-20',r:'Oficina de Calidad',file:'informe-sineace-2023.pdf'},
 {t:'Recomendaciones de calidad',n:'Plan de mejora del programa',f:'2026-07-05',r:'Oficina de Calidad',file:'plan-mejora.docx'}];
const fmt=d=>d?d.split('-').reverse().join('/'):'';
const ext=f=>(f.split('.').pop()||'').toUpperCase();
var renderDocs;renderDocs=function(){
  document.getElementById('docs').innerHTML=DOCS.map((d,i)=>`<tr>
    <td><div class="doc"><span class="fi">${d.file?ext(d.file):'—'}</span><div><b>${d.t}</b><span class="${d.file?'':'empty'}">${d.file?(d.n||d.file):'Sin archivo cargado'}</span></div></div></td>
    <td class="num">${fmt(d.f)||'<span class="pend">—</span>'}</td>
    <td>${d.r||'<span class="pend">—</span>'}</td>
    <td style="text-align:right;white-space:nowrap">${d.file?`<button class="btn" type="button" data-v="${i}">Ver</button>`:`<button class="btn" type="button" data-u="${i}">Subir</button>`} <button class="del" type="button" data-q="${i}" aria-label="Quitar ${d.t}" style="display:inline-grid">${I.x}</button></td></tr>`).join('');
  document.querySelectorAll('#docs [data-q]').forEach(b=>b.onclick=()=>{const d=DOCS[+b.dataset.q];DOCS.splice(+b.dataset.q,1);renderDocs();toast(`Se quitó ${d.t}.`);});
  document.querySelectorAll('#docs [data-v]').forEach(b=>b.onclick=()=>toast(`Abre ${DOCS[+b.dataset.v].file}`));
  document.querySelectorAll('#docs [data-u]').forEach(b=>b.onclick=()=>openDoc(DOCS[+b.dataset.u].t,+b.dataset.u));
}
const _rd=renderDocs;renderDocs=function(){_rd();document.getElementById('n-doc').textContent=DOCS.length;};
renderDocs=conGuardado(renderDocs,()=>({DOCS}));
renderDocs();
const dDoc=document.getElementById('dDoc');let docIdx=null;
function openDoc(tipo,idx,file){document.getElementById('fDoc').reset();gFec.value=HOY;gErr.textContent='';docIdx=idx??null;
  if(tipo)gTipo.value=tipo; if(file){const dt=new DataTransfer();dt.items.add(file);gFile.files=dt.files;} dDoc.showModal();}
document.getElementById('addDoc').onclick=()=>openDoc();
const drop=document.getElementById('drop'),docFile=document.getElementById('docFile');
drop.onclick=()=>openDoc();drop.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openDoc();}};
['dragenter','dragover'].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault();drop.classList.add('over');}));
['dragleave','drop'].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault();drop.classList.remove('over');}));
drop.addEventListener('drop',e=>{const f=e.dataTransfer.files[0];if(f)openDoc(null,null,f);});
document.getElementById('fDoc').addEventListener('submit',e=>{e.preventDefault();
  const f=gFile.files[0];if(!f){gErr.textContent='Elija el archivo del documento.';return;}
  const rec={t:gTipo.value,n:gNom.value.trim(),f:gFec.value,r:gRes.value.trim(),file:f.name};
  if(docIdx!==null)DOCS[docIdx]=rec;else DOCS.push(rec);
  renderDocs();dDoc.close();toast(`${rec.t} subido.`);});

// ===== Comisión =====
let COM=[
 {n:'Mg. María Rojas',c:'Directora de Escuela',r:'Presidente'},
 {n:'Dr. Luis Paredes',c:'Curriculista',r:'Secretario'},
 {n:'Lic. Ana Castillo',c:'Coordinadora de Nutrición Clínica',r:'Vocal'},
 {n:'Mg. Jorge Quispe',c:'Coordinador de Salud Pública',r:'Vocal'},
 {n:'Lic. Rosa Vargas',c:'Docente · Servicios de alimentación',r:'Vocal'}];
const RC={Presidente:'r-pres',Secretario:'r-sec',Vocal:'r-voc'};
const ini=n=>n.replace(/^(Dr\.|Dra\.|Mg\.|Lic\.|Ing\.)\s*/,'').split(/\s+/).slice(0,2).map(w=>w[0]).join('').toUpperCase();
var renderCom;renderCom=function(){
  const order={Presidente:0,Secretario:1,Vocal:2};
  const list=[...COM].sort((a,b)=>order[a.r]-order[b.r]);
  document.getElementById('comision').innerHTML=list.map(m=>`<div class="mem ${m.r==='Presidente'?'pres':''}"><span class="av">${ini(m.n)}</span><div><b>${m.n}</b><span class="c">${m.c||'—'}</span><span class="role ${RC[m.r]}">${m.r}</span></div><button class="del" type="button" data-n="${m.n}" aria-label="Quitar ${m.n}">${I.x}</button></div>`).join('')+'<button class="mem-add" type="button" id="addCom2">+ Agregar integrante</button>';
  document.querySelectorAll('#comision .del').forEach(b=>b.onclick=()=>{const i=COM.findIndex(x=>x.n===b.dataset.n);COM.splice(i,1);renderCom();});
  document.getElementById('addCom2').onclick=()=>document.getElementById('addCom').click();
  document.getElementById('n-com').textContent=COM.length;
};
renderCom=conGuardado(renderCom,()=>({COM}));
renderCom();
const dCom=document.getElementById('dCom');
document.getElementById('addCom').onclick=()=>{
  document.getElementById('fCom').reset();cErr.textContent='';
  const hasP=COM.some(m=>m.r==='Presidente'),hasS=COM.some(m=>m.r==='Secretario');
  rPres.disabled=hasP;rSec.disabled=hasS;
  (!hasP?rPres:!hasS?rSec:rVoc).checked=true;
  dCom.showModal();};
document.getElementById('fCom').addEventListener('submit',e=>{e.preventDefault();
  const n=cNom.value.trim();if(!n){cErr.textContent='Escriba el nombre del integrante.';return;}
  const r=document.querySelector('input[name="rol"]:checked').value;
  COM.push({n,c:cCar.value.trim(),r});renderCom();dCom.close();toast(`${n} se agregó como ${r}.`);});

// ===== Stakeholders =====
const TYPES=['Empleadores','Egresados','Estudiantes','SINEACE','Director','Expertos'];
let STK=[
 {t:'Empleadores',n:'Lic. Carmen Salazar',d:'Jefa de nutrición, hospital regional',cert:'Entregado',res:'Recibido'},
 {t:'Empleadores',n:'Ing. Víctor Mendoza',d:'Gerente de operaciones, concesionaria de alimentos',cert:'Pendiente',res:'Entregado'},
 {t:'Egresados',n:'Lic. Paola Ccori',d:'Promoción 2021, campus Juliaca',cert:'Pendiente',res:'Recibido'},
 {t:'Estudiantes',n:'Samuel Tito',d:'Delegado de 9.º ciclo, campus Lima',cert:'Pendiente',res:'Pendiente'},
 {t:'SINEACE',n:'Mg. Rocío Benavides',d:'Evaluadora externa',cert:'Entregado',res:'Recibido'},
 {t:'Director',n:'Dr. Alberto Chávez',d:'Director de Escuela, campus Tarapoto',cert:'Pendiente',res:'Entregado'},
 {t:'Expertos',n:'Dra. Lucía Fernández',d:'Especialista en nutrición clínica',cert:'Recibido',res:'Recibido'}];
const NEXT={Pendiente:'Entregado',Entregado:'Recibido',Recibido:'Pendiente'};
const ECL={Pendiente:'',Entregado:'ent',Recibido:'rec'};
let fT='Todos';
var renderStk;renderStk=function(){
  const counts=Object.fromEntries(TYPES.map(t=>[t,STK.filter(s=>s.t===t).length]));
  document.getElementById('stkFilters').innerHTML=['Todos',...TYPES].map(t=>`<button type="button" aria-pressed="${fT===t}" data-t="${t}">${t} ${t==='Todos'?STK.length:counts[t]}</button>`).join('');
  document.querySelectorAll('#stkFilters button').forEach(b=>b.onclick=()=>{fT=b.dataset.t;renderStk();});
  const list=STK.map((s,i)=>({...s,i})).filter(s=>fT==='Todos'||s.t===fT);
  document.getElementById('stake').innerHTML=list.length?list.map(s=>`<tr>
    <td><div class="per"><span class="av" style="width:34px;height:34px;background:var(--soft);border:1px solid var(--line);color:var(--ink)">${ini(s.n)}</span><div><b>${s.n}</b><span>${s.d||'—'}</span></div></div></td>
    <td><span class="grp-chip" style="--c:var(--${TYPECOL[s.t]});--cs:var(--${TYPECOL[s.t]}-soft)">${I[s.t]}${s.t}</span></td>
    <td><button class="est ${ECL[s.cert]}" type="button" data-i="${s.i}" data-k="cert" title="Cambiar estado del certificado">${s.cert}</button></td>
    <td><button class="est ${ECL[s.res]}" type="button" data-i="${s.i}" data-k="res" title="Cambiar estado de la resolución">${s.res}</button></td>
    <td style="text-align:right"><button class="del" type="button" data-i="${s.i}" aria-label="Quitar ${s.n}">${I.x}</button></td></tr>`).join(''):'<tr><td colspan="5" class="note" style="padding:18px 0">Sin stakeholders en este grupo.</td></tr>';
  document.querySelectorAll('#stake .est').forEach(b=>b.onclick=()=>{const o=STK[+b.dataset.i];o[b.dataset.k]=NEXT[o[b.dataset.k]];renderStk();});
  document.querySelectorAll('#stake .del').forEach(b=>b.onclick=()=>{STK.splice(+b.dataset.i,1);renderStk();});
}
function certStats(){
  const c={Pendiente:0,Entregado:0,Recibido:0};STK.forEach(x=>c[x.cert]++);
  document.getElementById('certStats').innerHTML=`<div class="stat rec"><b>${c.Recibido}</b><span>Recibidos</span></div><div class="stat ent"><b>${c.Entregado}</b><span>Entregados</span></div><div class="stat"><b>${c.Pendiente}</b><span>Pendientes</span></div>`;
  document.getElementById('n-stk').textContent=STK.length;
}
const _rs=renderStk;renderStk=function(){_rs();certStats();};
renderStk=conGuardado(renderStk,()=>({STK}));
renderStk();
const dStk=document.getElementById('dStk');
document.getElementById('addStk').onclick=()=>{document.getElementById('fStk').reset();if(fT!=='Todos')sTipo.value=fT;dStk.showModal();};
document.getElementById('fStk').addEventListener('submit',e=>{e.preventDefault();
  const n=sNom.value.trim();if(!n)return;
  STK.push({t:sTipo.value,n,d:sDet.value.trim(),cert:'Pendiente',res:'Pendiente'});renderStk();dStk.close();toast(`${n} se agregó a ${sTipo.value}.`);});

// ===== Pestañas de gestión =====
const MT=['com','stk','doc','cer'];
function mgTab(k){MT.forEach(x=>{document.getElementById('mt-'+x).setAttribute('aria-selected',x===k);document.getElementById('mp-'+x).hidden=x!==k;});
  try{localStorage.setItem('udato-mg',k)}catch(e){}}
MT.forEach(x=>document.getElementById('mt-'+x).onclick=()=>mgTab(x));
try{const k=localStorage.getItem('udato-mg');if(MT.includes(k))mgTab(k);}catch(e){}

// ===== Guardado de la gestión (solo carreras reales) =====
function conGuardado(fn,datos){return function(){fn();if(abriendo||!CUR||!CUR.r.cod)return;Object.assign(gest(CUR.r.cod),datos());guardarGest(CUR.r.cod);};}
const CERT0={tit:'Certificado de Evaluador',hor:'40',fec:'2026-12-15',f1:'Presidente de la Comisión',f2:'Director de Escuela',para:'Stakeholders y comisión'};
function ponerCert(c){c={...CERT0,...(c||{})};kTit.value=c.tit;kHor.value=c.hor;kFec.value=c.fec;kF1.value=c.f1;kF2.value=c.f2;kFor.value=c.para;
  document.getElementById('dTit').textContent=c.tit;document.getElementById('dF1').textContent=c.f1;document.getElementById('dF2').textContent=c.f2;}

// ===== Utilidades =====
document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>b.closest('dialog').close());
const modeBtn=document.getElementById('mode');
try{ if(localStorage.getItem('udato-mode')==='upeu'){pvEl.dataset.mode='upeu';modeBtn.setAttribute('aria-pressed','true');} }catch(e){}
modeBtn.onclick=()=>{const on=pvEl.dataset.mode!=='upeu';
  if(on)pvEl.dataset.mode='upeu';else delete pvEl.dataset.mode;
  modeBtn.setAttribute('aria-pressed',on);
  try{localStorage.setItem('udato-mode',on?'upeu':'normal');}catch(e){}};
document.getElementById('newProj').onclick=()=>toast('Nombre del proyecto: Proyecto + Evaluación, Rediseño o Actualización + año + nombre bíblico.');
let tt;function toast(m){const t=document.getElementById('toast');t.textContent=m;t.hidden=false;clearTimeout(tt);tt=setTimeout(()=>t.hidden=true,3000);}

// ===== Navegación entre bandeja y proyecto =====
window.openProject=(r,i)=>{
  const c=buildCfg(r,i); applyCfg(c);
  COM=c.COM.map(x=>({...x})); STK=c.STK.map(x=>({...x})); DOCS=c.DOCS.map(x=>({...x})); fT='Todos';
  abriendo=true; ponerCert(r.cod&&GEST[r.cod]&&GEST[r.cod].cert);
  renderHero(); renderJourney(); setTab(curTab); renderDocs(); renderCom(); renderStk(); abriendo=false;
  document.getElementById('pvNota').textContent=r.cod?`El avance de las casillas es real: se lee de las consolas de la Fase 1 y la Fase 2 de ${REAL[r.cod].nombre}. Comisión, grupos de interés, documentos y certificado se guardan en la nube; la Fase 3 guarda su plan de estudios en su propia consola.`:'Programa simulado: personas, fechas, proyectos anteriores, documentos, certificado y estado de las casillas son de ejemplo.';
  vista(`proyecto=${r.cod||i}`,`Programas › ${c.name} › ${c.label}`);
  document.getElementById('tv').hidden=true; document.getElementById('dv').hidden=true; pvEl.hidden=false; window.scrollTo(0,0);
};
function goBack(){vista('','Programas curriculares');pvEl.hidden=true;document.getElementById('dv').hidden=true;document.getElementById('tv').hidden=false;window.scrollTo(0,0);}
document.getElementById('back').onclick=goBack;
document.querySelector('#pv [data-back]').onclick=e=>{e.preventDefault();goBack();};

})();

(()=>{
const dv=document.getElementById('dv');
const $=id=>document.getElementById(id);
const IC={
 plan:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z"/><path d="M4 9h16M9 9v11M14.5 9v11M4 14.5h16"/></svg>',
 perfil:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c.8-4 4-6 8-6s7.2 2 8 6"/></svg>',
 esp:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 12.5h18"/></svg>',
 doc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4M7 9l3 3 6-6"/></svg>',
 pros:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/></svg>',
 est:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c2 2 10 2 12 0v-5M22 9v6"/></svg>',
 chev:'<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',
 send:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 11l18-8-8 18-2-7z"/></svg>'
};
const seeded=i=>{let s=i*104729+31;return()=>{s=(s*9301+49297)%233280;return s/233280;};};
const nf=n=>n.toLocaleString('es-PE');
let D=null, wFilter='Todos', POSTS=[], FIL='Lima'; const FILS=['Lima','Juliaca','Tarapoto'];

function build(r,i){
  const R=seeded(i+11+FILS.indexOf(FIL)*97), rng=(a,b)=>a+Math.floor(R()*(b-a+1));
  const RR=r.cod&&REAL[r.cod], names = RR ? comps0(r.cod) : window.espNames(r.n).slice(0,r.esp);
  const cursos=rng(58,66), cred=rng(208,226), sil=cursos-rng(2,9);
  const esp=names.map((n,k)=>{const nc=rng(6,10), cr=+(nc*3.2+R()*2).toFixed(1);
    return {code:'E'+(k+1),n,cr,cursos:nc,cap:rng(3,5),tron:rng(1,3),elec:rng(1,2),c0:rng(2,4),c1:rng(8,10),hab:rng(3,5),cert:rng(2,4),dec:'Decano Académico',folio:`PE-${(r.n.match(/[A-ZÁÉÍÓÚ]/g)||['P']).slice(-2).join('')}-${2025}-E${k+1}-001`};});
  const comps=r.comp, capac=RR?RR.caps:comps*rng(3,5), cg=14;
  const logro=rng(62,86), evalSes=+(3.6+R()*1.2).toFixed(1), unidT=rng(78,96), recursos=rng(320,520), docentes=rng(28,46), sesiones=rng(900,1500), unidades=rng(140,220), recPub=rng(88,99);
  const entTot=rng(2200,2900), entOk=Math.round(entTot*rng(80,95)/100), prom=+(13.2+R()*2.6).toFixed(1), riesgo=rng(4,14);
  const cumpSil=rng(80,97), evalUnidP=rng(74,96), evalForm=rng(70,95), sesT=rng(78,97), entT=rng(74,94), desP=rng(62,84), desSD=+(8+R()*7).toFixed(1), oe=RR?RR.oe:rng(4,6), cand=RR?RR.cand:rng(9,15), pot=rng(62,88), potE=RR?RR.comps.flatMap(c=>c.esp.map(e=>e.pot)):null;
  const certNow=esp.filter((_,k)=>((k+i)%3)!==2).map((e,k)=>({...e,cursosCert:Array.from({length:rng(2,3)},(_,q)=>`${['Taller','Práctica','Proyecto','Seminario'][q%4]} de ${e.n.split(' ').slice(0,3).join(' ').toLowerCase()} ${['I','II','III'][q]}`),estado:['Evaluando producto','Con evidencia','Pendiente'][(k+i)%3]}));
  const proj=r.proj?Math.round(r.proj.fases.reduce((a,f)=>a+f.v,0)/3):null;
  return {potE,sesT,entT,desP,desSD,oe,cand,pot,cumpSil,evalUnidP,evalForm,certNow,r,i,names,esp,cursos,cred,sil,comps,capac,cg,logro,evalSes,unidT,recursos,docentes,sesiones,unidades,recPub,entTot,entOk,prom,riesgo,proj,ciclos:/Medicina/.test(r.n)?14:10};
}

/* ---------- Instrumentos ---------- */
function gauge(v,max,label,unit,disp,color){
  const f=Math.max(0,Math.min(1,v/max)); const R=52,cx=70,cy=66; const a0=Math.PI, a=a0-Math.PI*f;
  const pt=(ang,r)=>[cx+r*Math.cos(ang),cy-r*Math.sin(ang)];
  const [x1,y1]=pt(a0,R),[x2,y2]=pt(0,R),[xv,yv]=pt(a,R);
  let ticks=''; for(let t=0;t<=10;t++){const an=Math.PI-Math.PI*t/10;const [a1,b1]=pt(an,R+7),[a2,b2]=pt(an,R+(t%5?10:13));ticks+=`<line x1="${a1.toFixed(1)}" y1="${b1.toFixed(1)}" x2="${a2.toFixed(1)}" y2="${b2.toFixed(1)}" style="stroke:var(--ck-faint)" stroke-width="${t%5?1:1.6}"/>`;}
  const [nx,ny]=pt(a,R-14);
  return `<div class="gauge"><svg viewBox="0 0 140 76" aria-hidden="true">${ticks}
    <path d="M${x1} ${y1} A${R} ${R} 0 0 1 ${x2} ${y2}" fill="none" style="stroke:var(--ck-track)" stroke-width="9" stroke-linecap="round"/>
    ${f>0?`<path d="M${x1} ${y1} A${R} ${R} 0 0 1 ${xv.toFixed(1)} ${yv.toFixed(1)}" fill="none" style="stroke:${color}" stroke-width="9" stroke-linecap="round"/>`:''}
    <line x1="${cx}" y1="${cy}" x2="${nx.toFixed(1)}" y2="${ny.toFixed(1)}" style="stroke:var(--ck-ink)" stroke-width="2" stroke-linecap="round"/><circle cx="${cx}" cy="${cy}" r="4" style="fill:var(--ck-ink)"/></svg>
    <span class="v">${disp}</span><span class="u">${unit}</span><span class="l">${label}</span></div>`;
}
function ringG(v,max,label,unit,disp,color){
  const f=Math.max(0,Math.min(1,v/max)),r=36,c=2*Math.PI*r; const on=Math.round(f*10);
  return `<div class="ring" style="--c:${color}"><svg viewBox="0 0 86 86" aria-hidden="true"><circle cx="43" cy="43" r="${r}" fill="none" style="stroke:var(--ck-track)" stroke-width="8"/><circle cx="43" cy="43" r="${r}" fill="none" style="stroke:${color}" stroke-width="8" stroke-linecap="round" stroke-dasharray="${(c*f).toFixed(1)} ${c.toFixed(1)}" transform="rotate(-90 43 43)"/><circle cx="43" cy="43" r="24" fill="none" style="stroke:var(--ck-line)" stroke-dasharray="2 4"/></svg>
    <div><div class="v">${disp}</div><div class="l">${label}</div><div class="u">${unit}</div><div class="seg">${Array.from({length:10},(_,k)=>`<i class="${k<on?'on':''}"></i>`).join('')}</div></div></div>`;
}
const tone=(v,g,a)=>v>=g?'var(--ck-green)':v>=a?'var(--ck-amber)':'var(--ck-red)';

function renderTop(){
  const r=D.r, fmt=d=>d.split('-').reverse().join('/');
  $('dName').textContent=r.n;
  $('dSub').textContent=`${r.fac} · ${r.plan} vigente · ${D.ciclos} ciclos · Filial ${FIL}${r.cod?' · prospectiva y perfil reales; indicadores de aula simulados':' · datos simulados'}`;
  $('dFil').innerHTML=FILS.map(f=>`<button type="button" aria-pressed="${f===FIL}" data-fil="${f}">${f}</button>`).join('');
  $('dFil').querySelectorAll('button').forEach(b=>b.onclick=()=>{FIL=b.dataset.fil;D=build(D.r,D.i);POSTS=buildPosts();renderTop();renderPanels();renderWall();});
  const end=r.ext||r.fin; const dias=(new Date(end)-new Date(HOY))/864e5;
  const vig=dias<0?['var(--ck-red)','Vencido']:dias<365?['var(--ck-amber)','Por vencer']:['var(--ck-green)','Vigente'];
  $('dLeds').innerHTML=r.proj?`<button class="go-proj" id="dProj" type="button">Proyecto ${r.proj.bib}</button>`:'';
  if(r.proj) $('dProj').onclick=()=>{window.openProject(D.r,D.i);};
  const silP=Math.round(D.sil/D.cursos*100), entP=Math.round(D.entOk/D.entTot*100);
  $('dGauges').innerHTML=`
   <div class="cluster dir" style="--c:var(--ck-gold)"><div class="cl-h"><b>Director</b><span>Gestión del plan</span></div>
     <div class="cl-g">${gauge(silP,100,'Sílabo base','% aprobados',silP+'%',tone(silP,95,85))}</div></div>
   <div class="cluster" style="--c:var(--ck-green)"><div class="cl-h"><b>Docentes</b><span>${D.docentes} docentes · % de cumplimiento</span></div>
     <div class="cl-g">${gauge(D.cumpSil,100,'Cumplimiento de sílabo','% de avance',D.cumpSil+'%',tone(D.cumpSil,90,80))}${gauge(D.evalUnidP,100,'Evaluación de unidad','% de cumplimiento',D.evalUnidP+'%',tone(D.evalUnidP,90,80))}${gauge(D.evalForm,100,'Evaluación formativa','% de sesiones',D.evalForm+'%',tone(D.evalForm,90,80))}</div></div>
   <div class="cluster" style="--c:var(--ck-coral)"><div class="cl-h"><b>Estudiantes</b><span>${nf(D.entTot)} entregables · % a tiempo y desempeño</span></div>
     <div class="cl-g">${gauge(D.entT,100,'Entregables','% a tiempo',D.entT+'%',tone(D.entT,90,80))}${gauge(D.desP,100,'Desempeño',`% promedio · DE ±${D.desSD}`,D.desP+'%',tone(D.desP,75,65))}</div></div>`;
}

/* ---------- Paneles ---------- */
const bar=(l,v,max,disp,c)=>`<div class="bar"><span>${l}</span><i><s style="width:${Math.round(v/max*100)}%;${c?`--bc:${c}`:''}"></s></i><em>${disp}</em></div>`;
function item(n,t,s,chip,body,cls='',link=''){
  const h=`<button class="it-h" type="button" aria-expanded="false"><span class="n">${n}</span><span class="it-t"><b>${t}</b><span>${s}</span></span><span class="chip ${cls}">${chip}</span>${IC.chev}</button>`;
  return `<div class="it">${link?`<div class="it-row">${h}<a class="open" href="${link}" target="_blank" rel="noopener">Abrir <span aria-hidden="true">↗</span></a></div>`:h}<div class="it-b" hidden>${body}</div></div>`;
}
function head(icon,title,sub,ok){
  return `<div class="p-head"><div class="p-title"><span class="p-ic">${IC[icon]}</span><div><h2>${title}</h2><small>${sub}</small></div></div><span class="status"><i class="led" style="--c:${ok?'var(--ck-green)':'var(--ck-amber)'}"></i>${ok?'NOMINAL':'ATENCIÓN'}</span></div>`;
}
const RR0=()=>D.r.cod&&REAL[D.r.cod];
function renderPanels(){
  const silP=Math.round(D.sil/D.cursos*100);
  // Malla simulada
  const areas=[['#F2A900','General'],['#A78BFA','Disciplinar'],['#22D3EE','Especialidad'],['#FB923C','Electivo']];
  const R=seeded(D.i+5); let malla='';
  for(let c=1;c<=D.ciclos;c++){let cells='';for(let k=0;k<6;k++){const a=c<=2?0:c<=4?(k<3?1:0):c>=D.ciclos-1?(k<2?3:2):(k<2?1:2);cells+=`<i style="background:${areas[a][0]};opacity:${.55+R()*.45}"></i>`;}malla+=`<div>${cells}<span>${c}</span></div>`;}
  $('sec-plan').innerHTML=head('plan','Gestión del Plan',`${D.r.plan} · ${D.cursos} cursos · ${D.cred} cr`,silP>=90)+`<div class="items">
    ${item(1,'Plan Matricial',`${D.ciclos} ciclos · ${D.cursos} cursos · ${D.cred} créditos`,'Vigente',
      bar('Formación general',22,100,'22 %','#F2A900')+bar('Disciplinar',30,100,'30 %','#A78BFA')+bar('Especialidad',38,100,'38 %','#22D3EE')+bar('Electivos',10,100,'10 %','#FB923C')+'<button class="cta" type="button" data-go="Plan Matricial">Abrir plan matricial</button>','ok')}
    ${item(2,'Sílabo Base',`${D.sil} de ${D.cursos} sílabos aprobados`,silP+' %',
      bar('Aprobados',D.sil,D.cursos,D.sil,'#34D399')+bar('En revisión',Math.ceil((D.cursos-D.sil)/2),D.cursos,Math.ceil((D.cursos-D.sil)/2),'#FBBF24')+bar('Pendientes',Math.floor((D.cursos-D.sil)/2),D.cursos,Math.floor((D.cursos-D.sil)/2),'#F87171')+'<button class="cta" type="button" data-go="Sílabo Base">Revisar sílabos</button>',silP>=95?'ok':'warn')}
    ${item(3,'Malla Curricular',`${D.ciclos} ciclos · 4 áreas · prerrequisitos`,'Ver malla',
      `<div class="malla">${malla}</div><div class="legend">${areas.map(a=>`<span><i style="background:${a[0]}"></i>${a[1]}</span>`).join('')}</div><button class="cta" type="button" data-go="Malla Curricular">Abrir malla</button>`)}
  </div>`;
  $('sec-pros').innerHTML=head('pros','Prospectiva de la Carrera',`Estudio prospectivo · horizonte 5 años`,true)+`<div class="items">
    ${item(1,'Estudio Prospectivo',D.r.cod?'Fase 1 · potencial de cada especialidad de trabajo':'Versión 1.0 · resumen ejecutivo y 11 secciones','Vigente',D.names.slice(0,D.potE?D.names.length:4).map((n,k)=>{const v=D.potE?D.potE[k]:Math.max(55,D.pot-k*6);return bar(n,v,100,v,'var(--ck-sky)');}).join('')+'<p class="note">Potencial de mercado por especialidad (0–100).</p><button class="cta" type="button" data-go="Estudio Prospectivo">Abrir estudio prospectivo</button>','ok')}
    ${item(2,'Cartera de especialidades',`${D.esp.length} validadas de ${D.cand} candidatas`,`${D.esp.length} esp.`,bar('Validadas',D.esp.length,D.cand,D.esp.length)+bar('Mención o certificación',Math.min(3,D.cand-D.esp.length),D.cand,Math.min(3,D.cand-D.esp.length))+bar('Descartadas',Math.max(0,D.cand-D.esp.length-3),D.cand,Math.max(0,D.cand-D.esp.length-3))+'<button class="cta" type="button" data-go="Cartera de especialidades">Ver cartera</button>')}
    ${item(3,'Propuesta de valor','Propósito · propuesta · promesa','3 componentes','<p class="note">Diferenciales validados por el panel VALOR y promesa de la carrera.</p><button class="cta" type="button" data-go="Propuesta de valor">Ver propuesta de valor</button>')}
    ${item(4,'Objetivos educacionales',`${D.oe} objetivos · horizonte 3–5 años del egreso`,`${D.oe} OE`,'<p class="note">Cada objetivo trazado a sus competencias en la matriz de coherencia.</p><button class="cta" type="button" data-go="Objetivos educacionales">Ver objetivos</button>')}
  </div>`;
  const CG=['Pensamiento crítico','Comunicación efectiva','Ética y valores cristianos','Investigación','Trabajo en equipo','Ciudadanía y responsabilidad social'];
  $('sec-perfil').innerHTML=head('perfil','Gestión del Perfil',`${D.comps} competencias específicas · ${D.cg} generales`,D.logro>=75)+`<div class="items">
    ${item(1,'Centro del Perfil 360',`${D.comps} competencias · ${D.capac} capacidades`,'360°',
      (RR0()?RR0().comps.map(c=>c.alias):D.names.slice(0,D.comps)).map((n,k)=>bar(`C${k+1} · ${n}`,60+((k*17+D.i*7)%35),100,(60+((k*17+D.i*7)%35))+' %','#A78BFA')).join('')+'<a class="cta" href="https://perfil-360-competencias.guillepiter.chatgpt.site" target="_blank" rel="noopener">Abrir Centro del Perfil 360 ↗</a>','','https://perfil-360-competencias.guillepiter.chatgpt.site')}
    ${item(2,'Gestión de Competencias',`${D.comps} específicas · ${D.cg} generales`,`${D.comps+D.cg} comp.`,
      CG.map((n,k)=>bar(n,70+((k*11+D.i*3)%28),100,(70+((k*11+D.i*3)%28))+' %','#C4B5FD')).join('')+'<button class="cta" type="button" data-go="Gestión de Competencias">Gestionar competencias</button>')}
    ${item(3,'Evaluación del Perfil',`Logro del perfil de egreso · cohorte ${2026}`,`${D.logro} %`,
      bar('Logrado',D.logro,100,D.logro+' %','#34D399')+bar('En proceso',Math.round((100-D.logro)*.7),100,Math.round((100-D.logro)*.7)+' %','#FBBF24')+bar('No logrado',100-D.logro-Math.round((100-D.logro)*.7),100,(100-D.logro-Math.round((100-D.logro)*.7))+' %','#F87171')+'<button class="cta" type="button" data-go="Evaluación del Perfil">Abrir evaluación del perfil</button>',D.logro>=80?'ok':'warn')}
  </div>`;
  const EST={'Evaluando producto':'var(--ck-amber)','Con evidencia':'var(--ck-green)','Pendiente':'var(--ck-faint)'};
  $('sec-esp').innerHTML=head('esp','Especialidades que certifican en este ciclo',`2026-2 · ${D.certNow.length} de ${D.esp.length} especialidades`,D.certNow.every(e=>e.estado!=='Pendiente'))+`<div style="overflow-x:auto"><table class="tbl"><thead><tr><th>Especialidad</th><th>Cursos que certifica</th><th>Estado</th></tr></thead><tbody>${D.certNow.map(e=>`<tr>
      <td><div class="esp-n"><span class="code">${e.code}</span><div><b>${e.n}</b><span>${e.cert} certificaciones · ${e.cursos} cursos</span></div></div></td>
      <td><div class="courses">${e.cursosCert.map(c=>`<span>${c}</span>`).join('')}</div></td>
      <td><span class="est" style="--c:${EST[e.estado]}"><i class="led" style="--c:${EST[e.estado]}"></i>${e.estado}</span></td></tr>`).join('')}</tbody></table></div>`;
  $('sec-doc').innerHTML=head('doc','Monitoreo Docente',`${D.docentes} docentes · ${nf(D.sesiones)} sesiones`,D.unidT>=85)+`<div class="items">
    ${item(1,'Recursos',`${nf(D.recursos)} recursos · ${D.docentes} docentes`,`${D.recPub} % publicados`,bar('Publicados',D.recPub,100,D.recPub+' %','#34D399')+bar('En borrador',100-D.recPub,100,(100-D.recPub)+' %','#FBBF24')+'<button class="cta" type="button" data-go="Recursos">Ver recursos</button>',D.recPub>=95?'ok':'warn')}
    ${item(2,'Evaluación de Sesión',`${nf(D.sesiones)} sesiones evaluadas`,`${D.sesT} % a tiempo`,bar('A tiempo',D.sesT,100,D.sesT+' %','#34D399')+bar('Con retraso',100-D.sesT,100,(100-D.sesT)+' %','#F87171')+'<button class="cta" type="button" data-go="Evaluación de Sesión">Abrir evaluación de sesión</button>',D.sesT>=90?'ok':'warn')}
    ${item(3,'Evaluación de Unidad',`${D.unidades} unidades cerradas`,`${D.unidT} % a tiempo`,bar('A tiempo',D.unidT,100,D.unidT+' %','#34D399')+bar('Con retraso',100-D.unidT,100,(100-D.unidT)+' %','#F87171')+'<button class="cta" type="button" data-go="Evaluación de Unidad">Abrir evaluación de unidad</button>',D.unidT>=90?'ok':'warn')}
  </div>`;
  const entP=Math.round(D.entOk/D.entTot*100);
  $('sec-est').innerHTML=head('est','Monitoreo Estudiante',`${nf(D.entTot)} entregables · desempeño ${D.desP} %`,D.entT>=85&&D.desP>=70)+`<div class="items">
    ${item(1,'Simulador Estudiante','Ver el programa como lo ve el estudiante','Abrir',`<p class="note">Recorre cursos, sesiones y entregables con la vista del estudiante.</p><button class="cta" type="button" data-go="Simulador Estudiante">Iniciar simulador</button>`)}
    ${item(2,'Cumplimiento de Entregables',`${nf(D.entOk)} de ${nf(D.entTot)} entregados`,`${D.entT} % a tiempo`,Array.from({length:5},(_,k)=>{const v=Math.min(99,Math.max(65,D.entT-6+((k*13+D.i)%12)));return bar(`Ciclo ${2*k+1}–${2*k+2}`,v,100,v+' %',tone(v,90,80));}).join('')+'<button class="cta" type="button" data-go="Cumplimiento de Entregables">Ver entregables</button>',D.entT>=90?'ok':'warn')}
    ${item(3,'Desempeño',`Promedio ${D.desP} % · desviación estándar ± ${D.desSD}`,`${D.desP} % ± ${D.desSD}`,bar('≥ 80 %',Math.round(30+(D.desP-62)),100,Math.round(30+(D.desP-62))+' %','#34D399')+bar('60 – 79 %',45,100,'45 %','#FBBF24')+bar('< 60 %',100-45-Math.round(30+(D.desP-62)),100,(100-45-Math.round(30+(D.desP-62)))+' %','#F87171')+'<button class="cta" type="button" data-go="Desempeño">Ver desempeño</button>',D.desP>=75?'ok':'warn')}
  </div>`;
  const Rr=seeded(D.i+23), rr=(a,b)=>a+Math.floor(Rr()*(b-a+1));
  const AI=[['Revisión de tareas','M4 4h16v12H4zM8 20h8M9 9l2 2 4-4'],['Foros inteligentes','M4 5h16v10H9l-5 4z'],['Chat','M12 3a9 9 0 00-8 13l-1 5 5-1A9 9 0 1012 3z'],['Rutas de aprendizaje','M4 19c4 0 4-6 8-6s4-6 8-6M4 19h.01M20 7h.01'],['Rúbricas','M5 4h14v16H5zM8 9h8M8 13h8M8 17h5']];
  $('sec-ia').innerHTML=head('esp','Uso de productos de IA','Mentor Génesys · últimas 8 semanas',true).replace(IC.esp,'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 5.6L19.5 9.5l-5.7 1.9L12 17l-1.8-5.6L4.5 9.5l5.7-1.9z"/></svg>')+`<div class="ai-grid">${AI.map(([n,path])=>{const tot=rr(400,3200),doc=rr(25,60),wk=Array.from({length:8},(_,k)=>rr(30,100)*(0.7+k*0.05));const mx=Math.max(...wk);
    return `<div class="ai"><div class="ai-h"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${path}"/></svg></i><b>${n}</b></div>
      <div><div class="big">${nf(tot)}</div><div class="sm">usos en el ciclo</div></div>
      <div class="spark">${wk.map(v=>`<i style="height:${Math.round(v/mx*100)}%"></i>`).join('')}</div>
      <div class="split"><i style="width:${doc}%;background:var(--ck-green)"></i><i style="width:${100-doc}%;background:var(--ck-coral)"></i></div>
      <div class="split-l"><span>Docentes ${doc}%</span><span>Estudiantes ${100-doc}%</span></div></div>`;}).join('')}</div>`;
  const IXS=[['Tareas','var(--ck-coral)',[['Creadas',rr(180,320)],['Entregadas',rr(2200,2900)],['Retroalimentadas',rr(1800,2400)]]],
             ['Recursos','var(--ck-green)',[['Publicados',D.recursos],['Vistas',rr(9000,16000)],['Descargas',rr(2500,5200)]]],
             ['Rúbricas','var(--ck-violet)',[['Creadas',rr(60,120)],['Aplicadas',rr(1400,2200)],['Con retro.',rr(900,1500)]]]];
  $('sec-ix').innerHTML=head('esp','Tablero de interacciones','Docentes ↔ estudiantes · últimas 8 semanas',true).replace(IC.esp,'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h11l-3-3M17 17H6l3 3"/></svg>')+`<div class="ix-grid">${IXS.map(([n,c,k])=>{const wk=Array.from({length:8},()=>rr(25,100));
    return `<div class="ix" style="--c:${c}"><div class="ix-h"><b>${n}</b><span class="chip" style="--c:${c}">${nf(k[1][1])} interacciones</span></div>
      <div class="kpis">${k.map(([l,v])=>`<div><b>${nf(v)}</b><span>${l}</span></div>`).join('')}</div>
      <div class="heat">${wk.map(v=>`<i style="opacity:${(0.18+v/100*0.82).toFixed(2)}" title="${v}% de actividad"></i>`).join('')}</div>
      <div class="heat-l"><span>Sem. 1</span><span>Sem. 8</span></div></div>`;}).join('')}</div>`;
  dv.querySelectorAll('.it-h').forEach(b=>b.onclick=()=>{const it=b.closest('.it'),body=it.querySelector('.it-b');const open=body.hidden;body.hidden=!open;b.setAttribute('aria-expanded',open);it.classList.toggle('open',open);});
  const F1GO=['Estudio Prospectivo','Cartera de especialidades','Propuesta de valor','Objetivos educacionales','Gestión de Competencias'];
  const F3GO=['Plan Matricial','Sílabo Base'];
  dv.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>{
    if(D.r.cod&&F3GO.includes(b.dataset.go)) irA('consola3.html?escuela='+encodeURIComponent(D.r.cod));
    else if(D.r.cod&&F1GO.includes(b.dataset.go)) irA(urlFase(D.r,0));
    else toastD(`Abre ${b.dataset.go} · ${D.r.n}`);
  });
}

/* ---------- Muro de comunicados ---------- */
function buildPosts(){
  const e=D.names;
  return [
   {who:'Vicerrectorado Académico',src:'Universidad',tag:'Universidad',c:'var(--ck-gold)',when:'Viernes 25 de septiembre, 09:10',text:'Se amplía hasta el 15 de octubre el plazo para cargar los sílabos base del semestre 2027-1 en el módulo. Las escuelas con proyecto de evaluación en curso deben coordinar con su curriculista.',cm:[{n:'Dirección de Escuela',t:'Recibido, lo coordinamos esta semana.'}]},
   {who:'Mg. Elena Torres',src:'Docentes',tag:`Docente · ${e[0]}`,c:'var(--ck-green)',when:'Jueves 24 de septiembre, 18:42',text:`Compartí en Recursos la guía de laboratorio actualizada para ${e[0].toLowerCase()}. Incluye la rúbrica del entregable de la unidad 2.`,cm:[{n:'Lic. Raúl Mamani',t:'Gracias, la usaré en mi sección.'},{n:'Mg. Julia Apaza',t:'Excelente aporte.'}]},
   {who:'Oficina de Calidad',src:'Universidad',tag:'Calidad · SINEACE',c:'var(--ck-cyan)',when:'Miércoles 23 de septiembre, 11:05',text:'Recordatorio: la visita de verificación de evidencias está programada para noviembre. Revisen que el plan de mejora y las actas de la comisión estén cargados en Documentos de gestión.',cm:[]},
   {who:'Dr. Hugo Cárdenas',src:'Docentes',tag:`Docente · ${e[1]||e[0]}`,c:'var(--ck-green)',when:'Martes 22 de septiembre, 16:20',text:'Tres estudiantes del 7.º ciclo no han entregado el avance del proyecto integrador. Solicito apoyo de tutoría para darles seguimiento antes del cierre de la unidad.',cm:[{n:'Dirección de Escuela',t:'Derivado a tutoría. Gracias por avisar.'}]},
   {who:'Dirección de Escuela',src:'Míos',tag:'Dirección de Escuela',c:'var(--ck-violet)',when:'Lunes 21 de septiembre, 08:30',text:'Queridos docentes: gracias por su compromiso con la evaluación de sesiones de este mes. Seguimos avanzando juntos en la mejora del programa. Dios los bendiga.',cm:[{n:'Mg. Elena Torres',t:'Gracias a usted.'}]}
  ];
}
const ini=n=>n.replace(/^(Dr\.|Dra\.|Mg\.|Lic\.|Ing\.)\s*/,'').split(/\s+/).slice(0,2).map(w=>w[0]).join('').toUpperCase();
function renderWall(){
  const F=['Todos','Universidad','Docentes','Míos'];
  $('wFilt').innerHTML=F.map(f=>`<button type="button" aria-pressed="${wFilter===f}" data-f="${f}">${f}</button>`).join('');
  $('wFilt').querySelectorAll('button').forEach(b=>b.onclick=()=>{wFilter=b.dataset.f;renderWall();});
  const list=POSTS.map((p,k)=>({...p,k})).filter(p=>wFilter==='Todos'||p.src===wFilter);
  $('wList').innerHTML=list.length?list.map(p=>{const long=p.text.length>150;
    return `<article class="post" style="--c:${p.c}">
      <div class="post-h"><span class="av">${ini(p.who)}</span><div><b>${p.who}</b><span class="when">Publicado el ${p.when}</span></div></div>
      <span class="tag">${p.tag}</span>
      <p data-full="${p.k}">${long&&!p.open?p.text.slice(0,140)+'…':p.text}</p>
      ${long&&!p.open?`<button class="more" type="button" data-more="${p.k}">mostrar más</button>`:''}
      <div class="cmts">${p.cm.map(c=>`<div class="cmt"><span class="av">${ini(c.n)}</span><div><b>${c.n}</b><span class="t">${c.t}</span></div></div>`).join('')}
        <form class="cform" data-c="${p.k}"><input aria-label="Comentario" placeholder="Escribe un comentario…"><button type="submit" aria-label="Enviar">${IC.send}</button></form></div>
    </article>`;}).join(''):'<p class="note">No hay comunicados en este filtro.</p>';
  $('wList').querySelectorAll('[data-more]').forEach(b=>b.onclick=()=>{POSTS[+b.dataset.more].open=true;renderWall();});
  $('wList').querySelectorAll('.cform').forEach(f=>f.onsubmit=e=>{e.preventDefault();const v=f.querySelector('input').value.trim();if(!v)return;POSTS[+f.dataset.c].cm.push({n:'Dirección de Escuela',t:v});renderWall();});
}
$('wNew').onclick=()=>{const c=$('wCompose');c.hidden=!c.hidden;if(!c.hidden)$('wText').focus();};
$('wCompose').onsubmit=e=>{e.preventDefault();const t=$('wText').value.trim();if(!t)return;
  POSTS.unshift({who:'Dirección de Escuela',src:'Míos',tag:`Dirección · ${$('wAud').value}`,c:'var(--ck-violet)',when:fechaLarga()+', ahora',text:t,cm:[]});
  $('wText').value='';$('wCompose').hidden=true;wFilter='Todos';renderWall();toastD('Comunicado publicado.');};

let tt;function toastD(m){const t=$('toastD');t.textContent=m;t.hidden=false;clearTimeout(tt);tt=setTimeout(()=>t.hidden=true,2600);}

window.openDash=(r,i,focus)=>{
  D=build(r,i); POSTS=buildPosts(); wFilter='Todos';
  renderTop(); renderPanels(); renderWall();
  document.getElementById('tv').hidden=true; document.getElementById('pv').hidden=true; dv.hidden=false; window.scrollTo(0,0);
  vista(`tablero=${r.cod||i}`,`Programas › ${r.n} › Tablero`);
  const map={'Especialidades':'sec-esp','Competencias':'sec-perfil','Plan de Estudios':'sec-plan'};
  const sec=$(map[focus]); if(sec){setTimeout(()=>{sec.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});sec.classList.add('flash');setTimeout(()=>sec.classList.remove('flash'),1600);},60);}
};
const mb=$('dMode');
function setMode(dk){if(dk)dv.dataset.mode='dark';else delete dv.dataset.mode;mb.setAttribute('aria-pressed',dk);try{localStorage.setItem('udato-ck',dk?'dark':'light')}catch(e){}}
mb.onclick=()=>setMode(dv.dataset.mode!=='dark');
try{if(localStorage.getItem('udato-ck')==='dark')setMode(true);}catch(e){}
$('dBack').onclick=()=>{vista('','Programas curriculares');dv.hidden=true;document.getElementById('tv').hidden=false;window.scrollTo(0,0);};

})();

(()=>{

const I = {
  p1:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/></svg>',
  p2:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2.2"/><circle cx="5" cy="18" r="2.2"/><circle cx="19" cy="18" r="2.2"/><circle cx="12" cy="13" r="2.2"/><path d="M12 7.2v3.6M10.3 14.6l-3.6 2.2M13.7 14.6l3.6 2.2"/></svg>',
  p3:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11M15 9v11M3 14.5h18"/></svg>',
  lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>',
  cal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M12 13v5M9.5 15.5h5"/></svg>',
  doc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 13h6M9 17h6"/></svg>',
  esp:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 12.5h18M11 12.5v2h2v-2"/></svg>',
  perf:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c.8-4 4-6 8-6s7.2 2 8 6"/><path d="M15.5 3.5l1 1.2 1.5-.3"/></svg>',
  plan:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z"/><path d="M4 9h16M9 9v11M14.5 9v11M4 14.5h16"/></svg>',
  cfg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.4 13a7.5 7.5 0 000-2l2-1.6-2-3.4-2.4 1a7 7 0 00-1.7-1L15 3.5h-4l-.4 2.5a7 7 0 00-1.7 1l-2.4-1-2 3.4 2 1.6a7.5 7.5 0 000 2l-2 1.6 2 3.4 2.4-1a7 7 0 001.7 1l.4 2.5h4l.4-2.5a7 7 0 001.7-1l2.4 1 2-3.4zM13 15.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" transform="translate(-1 0)"/></svg>'
};
const NAMES = ['Programa General','Programa General 2024','Programa Ing. de Sistemas al 2023','Programa Curricular Medicina','Programa Arquitectura','Programa Ingeniería Civil','Programa Ingeniería Ambiental','Programa Ingeniería de Industrias Alimentarias','Programa Contabilidad y Gestión Tributaria','Programa Administración','Programa Marketing y Negocios Internacionales','Programa Nutrición Humana','Programa Psicología','Programa Enfermería','Programa Teología','Programa Comunicaciones','Programa General FIA','Programa Derecho','Programa Ingeniería de Sistemas 2027','Programa Ingeniería Civil 2024','Programa Ing. Industrias Alimentarias 2024','Programa Nutrición Humana 2024','Programa Administración 2024','Programa Educación 2024','Adm. Gestión Empresarial 2024','Adm. Gestión Empresarial','Escuela de Docentes','Acompañamiento Docentes','Cursos Generales','Cursos Libres','Escuela de Misiones','Programa de Acreditación','Programa de Vinculación con el Medio','Programa Ingeniería Industrial','Programa Nutrición Humana 2027'];
const FAC = ['Facultad de Ingeniería y Arquitectura','Facultad de Ciencias de la Salud','Facultad de Ciencias Empresariales','Facultad de Ciencias Humanas y Educación','Facultad de Teología'];
function facOf(n){ if(/Sistemas|Civil|Ambiental|Alimentarias|Arquitectura|Industrial|FIA/.test(n))return FAC[0];
  if(/Medicina|Nutrición|Enfermería|Psicología/.test(n))return FAC[1];
  if(/Contabilidad|Administración|Adm\.|Marketing/.test(n))return FAC[2];
  if(/Teología|Misiones/.test(n))return FAC[4]; return FAC[3]; }
const BIB = ['Nehemías','Esdras','Josué','Débora','Samuel','Daniel','Ester','Rut','Gedeón','Caleb','Elías','Eliseo','Moisés','Abigail','Jeremías','Isaías','José','Miqueas','Ana','Timoteo','Bernabé','Lidia','Jonatán','Josafat','Ezequiel','Priscila','Aarón','Noemí','Esteban','Febe','Hageo','Zacarías','Malaquías','Oseas','Nehemías'];
const TIPOS = ['Evaluación','Rediseño','Actualización'];
let seed=7; const rnd=()=>{seed=(seed*9301+49297)%233280;return seed/233280;};
const pick=a=>a[Math.floor(rnd()*a.length)];
const pad=n=>String(n).padStart(2,'0');
const TODAY=HOY;

const DATA = NAMES.map((n,i)=>{
  const y0 = pick([2021,2022,2022,2023,2023,2024]);   // inicio con más de 2 años
  const m0 = pick([3,3,3,8]);
  const dur = pick([5,6,6]);
  const ini = `${y0}-${pad(m0)}-01`, fin = `${y0+dur}-${pad(m0===3?2:7)}-28`;
  const ext = rnd()<.18 ? `${y0+dur+1}-${pad(m0===3?2:7)}-28` : null;
  const res = `Res. N.º ${pad(Math.floor(rnd()*900)+100).padStart(4,'0')}-${y0-1}-CU`;
  const esp = 2+Math.floor(rnd()*4), comp = Math.max(3,esp-1+Math.floor(rnd()*2)), plan=`Plan ${y0}`;
  const r = rnd(); let proj=null, nproj=1+Math.floor(rnd()*2);
  if(r<.7){
    const f1 = pick([100,100,100,67,33]), f2 = f1<100?0:pick([8,25,50,75,100]), f3 = f2<100?0:pick([0,33,67]);
    const lab=(v,prev)=>v>=100?'Cerrada':v>0?'En curso':prev<100?'':'Por iniciar';
    const pyear = 2025+Math.floor(rnd()*2);
    proj={tipo:pick(TIPOS), anio:pyear, bib:BIB[i], estado:'En curso', fin:(()=>{const f=`${pyear+1}-${pick(['03','06','12'])}-15`;return f<'2026-10-31'?'2026-12-15':f;})(), ext:rnd()<.2?'2027-06-30':null,
      fases:[{v:f1,s:lab(f1,100),lock:false},{v:f2,s:lab(f2,f1),lock:f1<100},{v:f3,s:lab(f3,f2),lock:f2<100}]};
    nproj++;
  }
  return {n, fac:facOf(n), ini, fin, ext, res, esp, comp, plan, proj, nproj};
});
// Carreras reales: el avance de sus fases se lee de las consolas (Supabase)
const REALES=[[34,'NUT','Nehemías',3],[18,'SIS','Timoteo',2]];
REALES.forEach(([i,cod,bib,nproj])=>{const R=REAL[cod]; if(!R) return;
  Object.assign(DATA[i],{cod,fac:R.facultad,ini:'2027-03-01',fin:'2032-02-28',ext:null,res:'En trámite',
    esp:R.comps.reduce((a,c)=>a+c.esp.length,0),comp:R.comps.length,plan:'Plan 2027 (en diseño)',nproj,
    proj:{tipo:'Rediseño',anio:2026,bib,estado:'En curso',ini:'2026-06-30',fin:'2026-12-15',ext:null,fases:[]}});
  const g=GEST[cod]; if(g&&g.ext){DATA[i].ext=g.ext.prog||null;DATA[i].proj.ext=g.ext.proj||null;}
});

DATA.forEach((r,i)=>{if(!r.proj)return; r.proj.fasesRaw=r.proj.fases.map(f=>f.v); r.proj.fases=window.projSummary(r,i);});
const fmt=d=>d?d.split('-').reverse().join('/'):'';
const PH=[['p1','Prospectiva'],['p2','Diseño Curricular'],['p3','Plan de Estudio']];
const ST={'En curso':'st-curso','Ampliado':'st-amp'};
let filt='all', q='';

const endOf=r=>r.ext||r.fin;
function vigState(r){const e=endOf(r); if(r.ini>TODAY) return ['soon','Por iniciar'];
  if(e<TODAY) return ['exp','Vencido'];
  const d=(new Date(e)-new Date(TODAY))/864e5; return d<365?['soon','Vence en '+Math.ceil(d/30)+' meses']:['ok','Vigente'];}
function phaseCell(r,idx){
  const [key,name]=PH[idx];
  if(!r.proj) return `<td class="pj"><button type="button" class="ph none" style="--c:var(--${key});--cs:var(--${key}-soft)" disabled aria-label="${name}: sin proyecto"><span class="ic">${I[key]}</span><span><span class="v">—</span><span class="bar"><i style="width:0"></i></span></span></button></td>`;
  const f=r.proj.fases[idx];
  return `<td class="pj"><button type="button" class="ph ${f.lock?'lock':''}" style="--c:var(--${key});--cs:var(--${key}-soft)" data-name="${name}" data-r="${r.i}" data-x="${idx}" data-lock="${f.lock?1:0}" aria-label="${name}: ${f.v} %, ${f.s}"><span class="ic">${f.lock?I.lock:I[key]}</span><span><span class="v">${f.v}%<small>${f.s}</small></span><span class="bar"><i style="width:${f.v}%"></i></span></span></button></td>`;
}
function ring(v){const r=13,c=2*Math.PI*r;
  return `<svg class="ring" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="${r}" fill="none" stroke="var(--lock-soft)" stroke-width="4"/><circle cx="16" cy="16" r="${r}" fill="none" stroke="var(--gold)" stroke-width="4" stroke-linecap="round" stroke-dasharray="${c*v/100} ${c}" transform="rotate(-90 16 16)"/></svg>`;}
function extBtn(kind,i,val){return `<button type="button" class="pill ext ${val?'set':''}" data-ext="${kind}" data-i="${i}" title="${val?'Extendido hasta '+fmt(val):'Configurar extensión'}">${I.cal}${val?fmt(val):'Configurar'}</button>`;}
function resBtn(icon,val,lab,form,prog){return `<button type="button" class="res-btn" data-form="${form}" data-i="${prog}"><span class="ri">${I[icon]}</span><span style="display:grid;text-align:left;line-height:1.1"><b>${val}</b><span>${lab}</span></span></button>`;}

function render(){
  const rows = DATA.map((r,i)=>({...r,i})).sort((a,b)=>(b.cod?1:0)-(a.cod?1:0)).filter(r=>{
    const name=(r.n+' '+(r.proj?`Proyecto ${r.proj.tipo} ${r.proj.anio} ${r.proj.bib}`:'')).toLowerCase();
    if(q && !name.includes(q)) return false;
    if(filt==='act' && !r.proj) return false;
    if(filt==='soon' && vigState(r)[0]==='ok') return false;
    return true;
  });
  document.getElementById('count').textContent = `${rows.length} de ${DATA.length} programas`;
  document.getElementById('rows').innerHTML = rows.map((r,k)=>{
    const p=r.proj; const g = p ? Math.round(p.fases.reduce((s,f)=>s+f.v,0)/3) : null;
    const estado = p ? (p.ext?'Ampliado':p.estado) : null; const [vc,vl]=vigState(r);
    return `<tr>
      <td class="num">${k+1}</td>
      <td class="l prog"><b>${r.n}${r.cod?'<span class="real" title="Avance leído de las consolas">Real</span>':''}</b><span>${r.fac}</span></td>
      <td class="date vg">${fmt(r.ini)}</td>
      <td class="date vg">${fmt(r.fin)}<span class="vig ${vc}">${vl}</span></td>
      <td class="vg">${extBtn('prog',r.i,r.ext)}</td>
      <td class="vg"><button type="button" class="pill res" title="Ver resolución">${I.doc}${r.res}</button></td>
      <td class="pj first l">${p?`<button type="button" class="projname" data-open="${r.i}"><b>Proyecto ${p.tipo} ${p.anio} <em>${p.bib}</em></b><span>${r.nproj} proyectos · termina ${fmt(p.ext||p.fin)}</span></button>`:`<span class="noproj">Sin proyecto vigente <button type="button" data-new="${r.i}">+ Crear</button></span>`}</td>
      <td class="pj">${p?`<span class="st ${ST[estado]}">${estado}</span>`:'<span class="st st-none">—</span>'}</td>
      <td class="pj">${p?extBtn('proj',r.i,p.ext):'<span class="dash">—</span>'}</td>
      ${phaseCell(r,0)}${phaseCell(r,1)}${phaseCell(r,2)}
      <td class="pj last">${g===null?'<span class="dash">—</span>':`<div class="glob">${ring(g)}<b>${g}%</b></div>`}</td>
      <td class="rs first">${resBtn('esp',r.esp,'especialidades','Especialidades',r.i)}</td>
      <td class="rs">${resBtn('perf',r.comp,'competencias','Competencias',r.i)}</td>
      <td class="rs">${resBtn('plan',r.plan.replace('Plan ',''),'plan vigente','Plan de Estudios',r.i)}</td>
      <td><button type="button" class="pill cfg" title="Configuración">${I.cfg}</button></td>
    </tr>`;}).join('');
  document.querySelectorAll('.ph:not(.none)').forEach(b=>b.onclick=()=>{ if(b.dataset.lock==='1'){toast(`${b.dataset.name} está bloqueada: falta cerrar la fase anterior.`);return;} const u=urlFase(DATA[+b.dataset.r],+b.dataset.x); if(u) irA(u); else toast(`Abre ${b.dataset.name} con Mentor Génesys`); });
  document.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>window.openProject(DATA[+b.dataset.open],+b.dataset.open));
  document.querySelectorAll('[data-new]').forEach(b=>b.onclick=()=>toast('Nuevo proyecto: Proyecto + Evaluación, Rediseño o Actualización + año + nombre bíblico'));
  document.querySelectorAll('[data-ext]').forEach(b=>b.onclick=()=>openExt(b.dataset.ext,+b.dataset.i));
  document.querySelectorAll('[data-form]').forEach(b=>b.onclick=()=>window.openDash(DATA[+b.dataset.i],+b.dataset.i,b.dataset.form));
}

// Ocultar / mostrar el bloque del proyecto
const tg=document.getElementById('tgPj'), tbl=document.getElementById('tbl');
function setPj(hide){tbl.classList.toggle('nopj',hide);tg.setAttribute('aria-pressed',hide);tg.querySelector('span').textContent=hide?'Mostrar proyecto de evaluación':'Ocultar proyecto de evaluación';try{localStorage.setItem('udato-nopj',hide?'1':'0')}catch(e){}}
tg.onclick=()=>setPj(tg.getAttribute('aria-pressed')!=='true');
try{ if(localStorage.getItem('udato-nopj')==='1') setPj(true); }catch(e){}
const tv=document.getElementById('tgVg');
function setVg(hide){tbl.classList.toggle('novg',hide);tv.setAttribute('aria-pressed',hide);tv.querySelector('span').textContent=hide?'Mostrar periodo de vigencia':'Ocultar periodo de vigencia';try{localStorage.setItem('udato-novg',hide?'1':'0')}catch(e){}}
tv.onclick=()=>setVg(tv.getAttribute('aria-pressed')!=='true');
try{ if(localStorage.getItem('udato-novg')==='1') setVg(true); }catch(e){}
const tr=document.getElementById('tgRs');
function setRs(hide){tbl.classList.toggle('nors',hide);tr.setAttribute('aria-pressed',hide);tr.querySelector('span').textContent=hide?'Mostrar gestión del perfil':'Ocultar gestión del perfil';}
tr.onclick=()=>setRs(tr.getAttribute('aria-pressed')!=='true');


// Extensión (programa o proyecto)
const dExt=document.getElementById('dExt'); let ctx=null;
function openExt(kind,i){
  const r=DATA[i]; ctx={kind,i};
  const base = kind==='prog'? r.fin : r.proj.fin, cur = kind==='prog'? r.ext : r.proj.ext;
  document.getElementById('extTitle').textContent = kind==='prog'?'Extensión de la vigencia del programa':'Extensión del proyecto de evaluación';
  document.getElementById('extSub').textContent = `${kind==='prog'?r.n:`Proyecto ${r.proj.tipo} ${r.proj.anio} ${r.proj.bib}`} · término original ${fmt(base)}`;
  document.getElementById('fExt').reset(); exErr.textContent='';
  exFecha.min = base; if(cur) exFecha.value=cur; exDel.hidden = !cur; dExt.showModal();
}
document.getElementById('fExt').addEventListener('submit',e=>{e.preventDefault();
  const r=DATA[ctx.i]; const base= ctx.kind==='prog'? r.fin : r.proj.fin;
  if(!exFecha.value || exFecha.value<=base){exErr.textContent=`La nueva fecha debe ser posterior al ${fmt(base)}.`;return;}
  if(ctx.kind==='prog') r.ext=exFecha.value; else r.proj.ext=exFecha.value;
  guardarExt(r);
  dExt.close(); render(); toast(`Extensión registrada hasta ${fmt(exFecha.value)}.`);});
exDel.onclick=()=>{const r=DATA[ctx.i]; if(ctx.kind==='prog') r.ext=null; else r.proj.ext=null; guardarExt(r); dExt.close(); render(); toast('Extensión retirada.');};
exCancel.onclick=()=>dExt.close();

let tt; function toast(m){const t=document.getElementById('toastT');t.textContent=m;t.hidden=false;clearTimeout(tt);tt=setTimeout(()=>t.hidden=true,2600);}
document.getElementById('q').addEventListener('input',e=>{q=e.target.value.trim().toLowerCase();render();});
document.querySelectorAll('.seg button').forEach(b=>b.addEventListener('click',()=>{
  filt=b.dataset.f; document.querySelectorAll('.seg button').forEach(x=>x.setAttribute('aria-pressed',x===b)); render();
}));
render();

// abrir la vista pedida en la dirección (?proyecto=NUT, ?tablero=3)
function desdeUrl(){const u=new URLSearchParams(location.search), idx=v=>v==null?-1:/^\d+$/.test(v)?+v:DATA.findIndex(r=>r.cod===v);
  const p=idx(u.get('proyecto')), t=idx(u.get('tablero'));
  if(DATA[p]&&DATA[p].proj) window.openProject(DATA[p],p); else if(DATA[t]) window.openDash(DATA[t],t);}
function guardarExt(r){ if(!r.cod) return; gest(r.cod).ext={prog:r.ext,proj:r.proj&&r.proj.ext}; guardarGest(r.cod); }
desdeUrl();

})();

})();

/* Tablas anchas: igual que la matriz de la Fase 1, se arrastran con el mouse (botón izquierdo sobre zonas sin
   control, o botón derecho en cualquier punto) para desplazarlas a la derecha o a la izquierda cuando se desbordan;
   el menú contextual se suprime mientras se arrastra. */
(function(){
 const CAJAS=".tablebox,.mx-box,[style*='overflow-x:auto']";
 let caja=null,x0=0,sx=0,movio=false,boton=0;
 document.addEventListener("mousedown",ev=>{
  const c=ev.target.closest(CAJAS); if(!c||c.scrollWidth<=c.clientWidth) return;
  if(ev.button===0&&ev.target.closest("button,input,select,textarea,a,label,[contenteditable=true]")) return;
  if(ev.button!==0&&ev.button!==2) return;
  caja=c; boton=ev.button; x0=ev.clientX; sx=c.scrollLeft; movio=false; c.classList.add("arrastra"); ev.preventDefault();
 });
 document.addEventListener("mousemove",ev=>{ if(!caja) return; const dx=ev.clientX-x0; if(Math.abs(dx)>3) movio=true; caja.scrollLeft=sx-dx });
 const soltar=()=>{ if(caja) caja.classList.remove("arrastra"); caja=null };
 document.addEventListener("mouseup",soltar); document.addEventListener("mouseleave",soltar);
 document.addEventListener("contextmenu",ev=>{ const c=ev.target.closest(CAJAS); if(c&&(movio||boton===2)&&c.scrollWidth>c.clientWidth){ ev.preventDefault(); movio=false } });
})();
