/* Nivel 1 · vuelca la Cartera de Especialidades del barrido real (herramientas/cartera-m1.js) en datos/<cod>.js.
   Conserva: capacidad instalada (v), acuerdo del panel (ac) y todo lo que pertenece a momentos posteriores (plan, arq, matriz, objetivos, valor, narrativa).
   Reemplaza: esp, desc, puesto, emprende, req; añade las referencias del barrido (ids nuevos, sin tocar los anteriores) y actualiza el guion.
   Uso: node herramientas/cartera-a-datos.js */
const fs=require("fs"),path=require("path");
const R=p=>path.join(__dirname,"..","datos",p);
const {SIS,NUT}=require("./cartera-m1");
global.window={};global.DATOS=window.DATOS={};
for(const f of ["nut.js","sis.js"]) new Function(fs.readFileSync(R(f),"utf8"))();

/* Referencias nuevas por carrera (APA) con la familia semántica que usa refsDe: dem, ten, imp, via */
const REFS_NUEVAS={
 SIS:[
  {t:"Ministerio de Trabajo y Promoción del Empleo. (2025). <i>Encuesta de Demanda Ocupacional 2025 con proyección al 2026</i>. MTPE.",u:"https://www.gob.pe/institucion/mtpe/campa%C3%B1as/117365-encuesta-de-demanda-ocupacional-2025-con-proyeccion-al-2026",k:"dem"},
  {t:"Buk. (2026, 11 de septiembre). Guía laboral 2026: ¿Cuánto ganan los profesionales de TI y Administración y Finanzas en Perú? <i>Gestión</i>.",u:"https://gestion.pe/economia/empresas/cuanto-ganan-los-profesionales-de-ti-y-finanzas-en-peru-estos-son-los-sueldos-segun-buk-noticia/",k:"dem"},
  {t:"ManpowerGroup Perú. (2026). <i>Escasez de talento en Perú 2026</i>.",u:"https://blog.manpowergroup.pe/escasez-de-talento-en-per%C3%BA-2026",k:"dem"},
  {t:"ManpowerGroup Perú / Experis. (2026). <i>Expectativas de empleo sector TI Q4-2026</i>.",u:"https://blog.manpowergroup.pe/expectativas-de-empleo-sector-ti-q4-2026",k:"ten"},
  {t:"Gestión. (2025, 5 de enero). <i>Este 2025 se eleva en 20 % la demanda de profesionales en IA y big data</i> (Michael Page).",u:"https://gestion.pe/economia/empresas/este-2025-se-eleva-en-20-la-demanda-de-profesionales-en-ia-y-big-data-inteligencia-artificial-tecnologia-empleo-ciberseguridad-noticia/",k:"ten"},
  {t:"El Ecosistema Startup. (2026, 22 de julio). <i>IA en Perú: mercado crece 20 % anual hasta 2027</i> (IDC).",u:"https://ecosistemastartup.com/ia-en-peru-mercado-crece-20-anual-hasta-2027/",k:"ten"},
  {t:"Infobae. (2025, 27 de agosto). <i>Ciberataques en Perú superan los 748 millones de intentos en lo que va del 2025</i> (Fortinet).",u:"https://www.infobae.com/peru/2025/08/27/ciberataques-en-peru-superan-los-748-millones-de-intentos-en-lo-que-va-del-2025/",k:"imp"},
  {t:"Gestión. (2026, 13 de enero). <i>Telecomunicaciones en 2026: 5G, fibra y data centers</i>.",u:"https://gestion.pe/economia/empresas/telecomunicaciones-en-2026-5g-fibra-y-data-centers-quien-sera-el-actor-mas-dinamico-noticia/",k:"ten"},
  {t:"Superintendencia de Banca, Seguros y AFP. (2021). <i>Resolución SBS N° 504-2021, Reglamento para la Gestión de la Seguridad de la Información y la Ciberseguridad</i>.",u:"https://intranet2.sbs.gob.pe/dv_int_cn/2046/v2.0/Adjuntos/504-2021.R.pdf",k:"via"},
  {t:"EY Perú. (2025). <i>Reglamento de la Ley Marco de Confianza Digital</i> [DS 126-2025-PCM].",u:"https://www.ey.com/es_pe/technical/tax-alert/reglamento-ley-marco-confianza-digital-medidas-fortalecimiento",k:"via"},
  {t:"EY Perú. (2025). <i>Reglamento de la Ley que promueve el uso de la inteligencia artificial</i> [DS 115-2025-PCM].",u:"https://www.ey.com/es_pe/technical/tax-alert/reglamento-ley-promueve-uso-inteligencia-artificial",k:"via"},
  {t:"IAPP. (2024). <i>Se publica el nuevo reglamento de protección de datos personales en Perú</i> [DS 016-2024-JUS].",u:"https://iapp.org/news/a/se-publica-el-nuevo-reglamento-de-protecci-n-de-datos-personales-en-per-",k:"via"},
  {t:"Ministerio de Vivienda, Construcción y Saneamiento. (2008). <i>Decreto Supremo N° 016-2008-VIVIENDA, Reglamento de la Ley N° 28858</i>.",u:"https://www.cip.org.pe/publicaciones/2018/Ley_28858.pdf",k:"via"},
  {t:"Noticias ONU. (2025, 20 de mayo). <i>Uno de cada cuatro empleos está en riesgo de transformarse por la IA</i> (OIT-NASK).",u:"https://news.un.org/es/story/2025/05/1538911",k:"imp"},
  {t:"Universidad de Ingeniería y Tecnología. (2026). <i>Ciencia de la Computación: malla 2026</i>.",u:"https://utec.edu.pe/carreras/ciencia-de-la-computacion",k:"via"},
  {t:"Universidad Peruana de Ciencias Aplicadas. (2022). <i>Malla curricular: Ingeniería de Sistemas de Información</i>.",u:"https://pregrado.upc.edu.pe/carrera-de-ingenieria-de-sistemas-de-informacion/malla-curricular/",k:"via"}],
 NUT:[
  {t:"Convocatorias de Trabajo. (2026). <i>Trabajos para nutricionistas 2026: empleos en instituciones públicas del Perú</i>.",u:"https://www.convocatoriasdetrabajo.com/ofertas-de-empleo-para-NUTRICIONISTAS-41.html",k:"dem"},
  {t:"La República. (2026, 5 de agosto). <i>¿Cuál es el salario promedio de un nutricionista en el Perú en 2026?</i>",u:"https://especial.larepublica.pe/apunte-educativo/desarrollo-profesional/2026/08/05/cuanto-gana-un-nutricionista-en-peru-en-2026-descubre-los-sueldos-actualizados-segun-portal-especializado-351084",k:"dem"},
  {t:"Colegio de Nutricionistas del Perú. (2026, 13 de abril). <i>CNP alerta sobre la reducción de plazas SERUMS para nutricionistas</i>. La Noticia.",u:"https://lanoticia.com.pe/colegio-de-nutricionistas-del-peru-alerta-sobre-la-reduccion-de-plazas-serums-para-nutricionistas/",k:"dem"},
  {t:"Jooble. (2026). <i>Nutricionista: ofertas de trabajo en Perú</i>.",u:"https://pe.jooble.org/trabajo-nutricionista",k:"dem"},
  {t:"Instituto Nacional de Estadística e Informática. (2025). <i>Indicadores de Resultados de los Programas Presupuestales, ENDES Primer Semestre 2025</i>.",u:"https://intranet.mesadeconcertacion.org.pe/storage/documentos/2025-09-26/ppt-endes-ppr-2025-i-sem-2.pdf",k:"ten"},
  {t:"Infobae. (2026, 18 de mayo). <i>Desnutrición crónica y anemia infantil en Perú: cifras estancadas, según la ENDES 2025</i>.",u:"https://www.infobae.com/peru/2026/05/18/desnutricion-cronica-y-anemia-infantil-en-peru-cifras-estancadas-y-avances-minimos-segun-la-endes-2025/",k:"ten"},
  {t:"RPP Noticias. (2025, 16 de diciembre). <i>Desayunos escolares 2026: qué cambios se hacen</i> (PAE, S/ 2 636,6 M).",u:"https://rpp.pe/peru/actualidad/desayunos-escolares-2026-que-cambios-se-hacen-para-garantizar-la-adecuada-alimentacion-de-los-ninos-noticia-1668136",k:"ten"},
  {t:"Altavoz. (2025, 17 de julio). <i>23 mil pacientes deberían pasar por hemodiálisis</i> (ERC en el Perú).",u:"https://www.altavoz.pe/locales/23-mil-pacientes-deberian-pasar-por-hemodialisis-para-vivir-en-un-pais-donde-tres-millones-de-peruanos-sufren-enfermedad-renal-cronica/",k:"imp"},
  {t:"Vida y Futuro. (2026, 4 de febrero). <i>Cáncer en el Perú: más de 80 000 nuevos casos</i>.",u:"https://vidayfuturo.pe/cancer-en-el-peru-se-estiman-mas-de-80-000-nuevos-casos-para-el-2026/",k:"imp"},
  {t:"Mercado Fitness. (2024, 27 de noviembre). <i>Radiografía del sector de gimnasios en Perú</i>.",u:"https://mercadofitness.com/mercado-fitness-lanza-radiografia-gimnasios-en-peru/",k:"ten"},
  {t:"Informes de Expertos. (2026). <i>Mercado de snacks saludables en Perú: análisis 2035</i>.",u:"https://www.informesdeexpertos.com/informes/mercado-de-snacks-saludables-en-peru",k:"ten"},
  {t:"Arévalo Gerónimo, M. P., et al. (2025). Inteligencia artificial en nutrición hospitalaria. <i>Revista Cuidado y Salud Pública, 5</i>(2).",u:"https://www.cuidadoysaludpublica.org.pe/index.php/cuidadoysaludpublica/article/view/160",k:"imp"},
  {t:"Ministerio de Salud. (2013). <i>RM N.º 665-2013/MINSA. NTS N.º 103, Unidad Productora de Servicios de Salud de Nutrición y Dietética</i>.",u:"https://cnp.org.pe/wp-content/uploads/2016/11/NORMA-TÉCNICA-DE-SALUD-DE-LA-UNIDAD-PRODUCTORA-DE-SERVICIOS-DE-SALUD-DE-NUTRICIÓN-Y-DIETÉTICA.pdf",k:"via"},
  {t:"Ministerio de Salud. (2024). <i>RM N.º 251-2024/MINSA. NTS N.º 213, prevención y control de la anemia</i>.",u:"https://busquedas.elperuano.pe/dispositivo/NL/2277624-1",k:"via"},
  {t:"Presidencia de la República. (2017). <i>DS N.º 017-2017-SA, Reglamento de la Ley 30021</i>.",u:"https://vlex.com.pe/vid/decreto-supremo-n-017-812063497",k:"via"},
  {t:"Universidad San Ignacio de Loyola. (2026, 27 de marzo). <i>Malla curricular de Nutrición y Dietética en USIL</i>.",u:"https://blogs.usil.edu.pe/facultad-ciencias-de-salud/nutricion-y-dietetica/malla-curricular-nutricion-cursos-plan-estudios",k:"via"},
  {t:"Universidad Nacional Mayor de San Marcos, Facultad de Medicina. (2024). <i>Plan Curricular 2024, Escuela Profesional de Nutrición</i>.",u:"https://medicina.unmsm.edu.pe/wp-content/uploads/2021/06/RESOLUCION-RECTORAL-002757-2024-R-ANEXO.pdf",k:"via"}]
};
/* Escenarios, equipamiento y perfil docente de las candidatas nuevas (insumo para juzgar la capacidad instalada; el dato lo declara la Escuela) */
const REQ_NUEVAS={
 "Consultoría e implementación de ERP (SAP)":["Consultora integradora, retail o industria con proyecto de ERP en curso","Acceso académico a un ERP (SAP, Oracle u open source) y a un ambiente de práctica","Consultor con proyectos implantados y certificación del fabricante"],
 "Análisis funcional y de sistemas de información":["Área de TI de banca, industria o Estado con equipo de desarrollo","Herramientas de modelado de procesos y gestión de requisitos","Analista con experiencia en levantamiento y especificación en proyectos reales"],
 "Protección de datos personales y privacidad":["Entidad pública o empresa con Oficial de Datos Personales designado","Marco normativo (Ley 29733, DS 016-2024-JUS) y herramientas de inventario de tratamientos","Especialista en cumplimiento con experiencia ante la ANPDP"],
 "Inteligencia de negocios y analítica empresarial":["Área de analítica de banca, retail o telecomunicaciones","Plataforma de datos y herramientas de tableros (Power BI, Tableau o equivalente)","Ingeniero con tableros en producción y experiencia en modelado de datos"],
 "Diseño de experiencia de usuario (UX/UI)":["Equipo de producto digital o estudio de diseño","Laboratorio de experiencia de usuario y herramientas de prototipado","Diseñador con productos publicados y experiencia en investigación de usuarios"],
 "Nutrición en obesidad y cirugía bariátrica":["Clínica con unidad de obesidad o programa bariátrico, centro de control de peso","Antropometría clínica, bioimpedancia, protocolo pre y posquirúrgico","Nutricionista clínico con experiencia en manejo bariátrico"],
 "Nutrición ocupacional y salud en minería":["Contratista de salud ocupacional o concesionaria de alimentación en campamento minero","Antropometría de campo, tamizaje cardiometabólico, régimen de campamento","Nutricionista con experiencia en salud ocupacional y régimen 14x7"],
 "Nutrición en programas sociales del Estado":["Unidad territorial del PAE, Cuna Más o gobierno local","Fichas técnicas de alimentos, herramientas de supervisión y padrones","Nutricionista con experiencia en programas presupuestales y supervisión de proveedores"],
 "Consultoría privada y nutrición online":["Consultorio propio o plataforma de telenutrición","Plataforma de teleconsulta, software de planes y registro","Nutricionista con consultorio activo y práctica de atención remota"],
 "Nutrición renal y diálisis":["Centro de diálisis o servicio de nefrología hospitalario","Laboratorio clínico, software de prescripción renal","Nutricionista con segunda especialidad o práctica en nefrología"]
};
/* Referencias por especialidad (ids nuevos, calculados sobre la base existente) */
function refsPara(cod,e,base){
 const id=k=>REFS_NUEVAS[cod].map((r,i)=>[r,base+i+1]).filter(x=>x[0].k===k).map(x=>x[1]);
 const dem=id("dem"), ten=id("ten"), imp=id("imp"), via=id("via");
 const pick=(arr,n)=>arr.slice(0,n);
 if(cod==="SIS"){
  const r={dem:pick(dem,3),ten:[base+4,base+5],imp:[base+14],via:[base+13]};
  if(/Ciberseguridad|Protección de datos|Auditoría/.test(e.n)) r.via=[base+9,base+10,base+12,base+13], r.imp=[base+7,base+14];
  if(/inteligencia artificial|Inteligencia de negocios|IA generativa|bases de datos/.test(e.n)) r.ten=[base+6,base+5], r.via=[base+11,base+13];
  if(/nube|Redes|Internet de las cosas/.test(e.n)) r.ten=[base+8,base+4];
  if(/Desarrollo|Análisis funcional|calidad|móvil|UX/.test(e.n)) r.via=[base+13,base+15,base+16];
  if(/proyectos|Arquitectura|ERP/.test(e.n)) r.via=[base+13,base+16];
  return r;
 }
 const r={dem:pick(dem,3),ten:[base+5,base+6],imp:[base+12],via:[base+13]};
 if(/clínica|renal|oncológica|obesidad|parenteral|geriátrica|pediátrica/.test(e.n)) r.imp=[base+8,base+9,base+12], r.via=[base+13,base+14,base+17];
 if(/servicios de alimentación|programas sociales|Dietética|escolar/.test(e.n)) r.ten=[base+7,base+5], r.via=[base+15,base+13];
 if(/deportiva|Evaluación|online/.test(e.n)) r.ten=[base+10,base+11], r.via=[base+16];
 if(/productos/.test(e.n)) r.ten=[base+11,base+7], r.via=[base+15];
 if(/comunitaria|pediátrica/.test(e.n)) r.ten=[base+5,base+6,base+7], r.via=[base+14,base+13];
 return r;
}
function convertir(cod,filas){
 const D=DATOS[cod], viejos=Object.fromEntries(D.esp.map(e=>[e.n,e]));
 // las referencias del barrido se añaden una sola vez: si ya están (misma URL), se reutiliza su base
 const ya=D.refs.findIndex(r=>r.u===REFS_NUEVAS[cod][0].u);
 const base=ya>=0?ya:D.refs.length;
 if(ya<0) D.refs=D.refs.concat(REFS_NUEVAS[cod].map((r,i)=>({id:base+i+1,t:r.t,u:r.u})));
 if(D.meta.barrido) D.meta.barrido=D.meta.barrido; // conserva la nota del barrido
 let JUST={}; try{ JUST=JSON.parse(fs.readFileSync(R("just-"+cod+".json"),"utf8")) }catch(err){ console.log("  (sin justificaciones para "+cod+")") }
 /* Momento 2 · acta real del panel (herramientas/panel-m2.js → datos/acta-<cod>.json) */
 let ACTA=null; try{ ACTA=JSON.parse(fs.readFileSync(R("acta-"+cod+".json"),"utf8")) }catch(err){ console.log("  (sin acta del panel para "+cod+")") }
 const esp=[],desc={},puesto={},emprende={},req={};
 filas.forEach(f=>{
  const v=viejos[f.especialidad]; const n=f.especialidad;
  const e={n,nat:f.naturaleza,o:f.origen==="en extinción"?"En extinción":f.origen.charAt(0).toUpperCase()+f.origen.slice(1),fn:f.funciones_n,
   fnx:f.funciones,pr:f.proceso,ev:f.evidencia,
   d:{vol:f.d_vol,amp:f.d_amp,esc:f.d_esc,rem:f.d_rem,for:f.d_for},t:{cre:f.t_cre,nor:f.t_nor,inv:f.t_inv,dem:f.t_dem,tec:f.t_tec},
   i:{cri:f.i_cri,alc:f.i_alc},sos:f.sos,
   v:v?{...v.v}:{doc:0,cam:0,inf:0,dif:0,hab:0},
   fd:f.fd,ft:f.ft,fi:f.fi,modo:{empleo:f.empleo_txt,negocio:f.negocio_txt},cod:f.cod,barrido:"23-09-2026"};
  if(v&&v.ac!==undefined) e.ac=v.ac;
  if(JUST[f.cod]) e.just=JUST[f.cod];
  const pa=ACTA&&ACTA.especialidades.find(x=>x.cod===f.cod);
  if(pa){ e.panel={p:pa.p,med:pa.med,icvi:pa.icvi,cvr:pa.cvr,ric:pa.ric,ac:pa.ac,ver:pa.ver,com:Object.fromEntries(Object.entries(pa.com).map(([k,c])=>[k,c.c]))}; e.ac=pa.ac; }
  else { delete e.ac; }
  e.refs=refsPara(cod,e,base);
  esp.push(e); desc[n]=f.descripcion; puesto[n]=f.empleo; emprende[n]=f.negocio;
  req[n]=D.req[n]||REQ_NUEVAS[n]||["Escenario por declarar","Equipamiento por declarar","Perfil docente por declarar"];
 });
 D.esp=esp; D.desc=desc; D.puesto=puesto; D.emprende=emprende; D.req=req;
 /* Paso 1.2 · momento 1 · competencias derivadas del campo (datos/competencias/<cod>-derivadas.json), a ciegas del plan */
 let DER=null; try{ DER=JSON.parse(fs.readFileSync(R("competencias/"+cod+"-derivadas.json"),"utf8")) }catch(err){}
 if(DER){
  D.arq=DER.competencias.map(k=>({alias:k.alias,n:k.n,tipo:k.tipo,dec:"derivada",def:k.def,evid:k.evid,nivel:k.nivel,
   caps:k.caps.map(x=>({a:x.a,n:x.n,e:"",d:x.d})),esp:k.esp.map(x=>({n:x.n,eq:x.eq,cap:x.cap||"",nota:x.nota||""}))}));
  const EQT={competencia:"equivale a la competencia",ambito:"es ámbito de aplicación",capacidad:"equivale a una capacidad",compartido:"es ámbito compartido"};
  D.guion=Object.assign({},D.guion,{6:" "+DER.competencias.map(k=>"<b>"+k.alias+"</b> ("+k.tipo+"): "+k.esp.map(x=>x.n.split(" ").slice(0,3).join(" ").toLowerCase()+" "+EQT[x.eq]+(x.eq==="capacidad"&&x.cap?" («"+x.cap+"»)":"")).join("; ")).join(". ")+"."});
  D.meta.competencias="Paso 1.2 · momento 1 del "+DER.fecha+" · "+DER.competencias.length+" competencias derivadas a ciegas del plan (datos/competencias/"+cod+"-derivadas.json; evidencias "+cod+"-7-competencias-derivadas.md)";
  console.log("  competencias:",DER.competencias.length,"·",DER.competencias.reduce((s,k)=>s+k.caps.length,0),"capacidades");
  /* Momento 2 · plan vigente literal (datos/plan-vigente/<cod>-plan.json) y contraste real (datos/competencias/<cod>-contraste.json) */
  let PLV=null, CON=null;
  try{ PLV=JSON.parse(fs.readFileSync(R("plan-vigente/"+cod+"-plan.json"),"utf8")) }catch(err){}
  try{ CON=JSON.parse(fs.readFileSync(R("competencias/"+cod+"-contraste.json"),"utf8")) }catch(err){}
  if(PLV){ const A=PLV.competencias.filter(x=>!x.tipo||x.tipo==="A"); D.plan=A.map(x=>({n:x.n,np:x.np,d:x.d,caps:x.caps,cd:x.cd})); D.planFuera=PLV.competencias.filter(x=>x.tipo&&x.tipo!=="A").map(x=>({n:x.n,tipo:x.tipo,nota:x.nota})); if(/Línea base/.test(D.meta.plan||"")) D.meta.plan="Plan 2026"; D.meta.lineaBase="Línea base literal entregada por la Escuela el 24-09-2026: "+D.plan.length+" competencias de especialidad"; }
  if(CON&&PLV){
   D.planMapa={};
   CON.mapa.forEach(m=>{ const k=D.arq.find(x=>x.alias===m.alias); if(!k) return; const j=D.plan.findIndex(x=>x.n===m.plan); D.planMapa[m.alias]=j;
    k.contraste={dec:m.dec,defFinal:m.defFinal||"",gat:m.gat||"",antes:m.antes||"",caps:(m.caps||[]).map(x=>({n:x.n,e:x.e,de:x.de||""})),noContinuan:m.noContinuan||[],situacion:m.situacion} });
   D.traza=CON.traza.map(t=>({p:t.p,d:t.d,n:t.n,c:t.c,s:t.s}));
   D.guion=Object.assign({},D.guion,{7:" "+CON.resumen});
   console.log("  contraste:",CON.mapa.map(m=>m.alias+"→"+m.dec).join(" · "));
  }
  /* Paso 1.3 · momento 1 · cruce real (datos/competencias/<cod>-cruce.json) */
  let CRU=null; try{ CRU=JSON.parse(fs.readFileSync(R("competencias/"+cod+"-cruce.json"),"utf8")) }catch(err){}
  if(CRU){ D.eq=CRU.eq; D.extra=CRU.extra; D.eqman={}; D.sinEncaje=CRU.sinEncaje; D.capSinEsp=CRU.capSinEsp; D.guion=Object.assign({},D.guion,{10:CRU.resumen}); console.log("  cruce:",Object.keys(CRU.eq).length,"especialidades") }
  /* Paso 1.4 · objetivos educacionales y matriz de coherencia (datos/competencias/<cod>-objetivos.json) */
  let OBJ=null; try{ OBJ=JSON.parse(fs.readFileSync(R("competencias/"+cod+"-objetivos.json"),"utf8")) }catch(err){}
  if(OBJ){ D.oe=OBJ.oe; D.coh=OBJ.coh; D.meta.objetivos="Paso 1.4 del "+OBJ.fecha+" · "+OBJ.oe.length+" objetivos (evidencias "+cod+"-10-objetivos.md)"; console.log("  objetivos:",OBJ.oe.length,OBJ.prueba.ok?"· coherencia OK":"· con huecos") }
  let MEJ=null; try{ MEJ=JSON.parse(fs.readFileSync(R("competencias/"+cod+"-mejoras.json"),"utf8")) }catch(err){}
  if(MEJ){ D.mejoras=Object.fromEntries(MEJ.mejoras.map(m=>[m.alias,{def:m.def,caps:m.caps.map(x=>({d:x.d})),nota:m.nota}])); console.log("  mejoras preparadas:",MEJ.mejoras.length) }
 }
 /* Momento 5 · integraciones que Génesys propone (acordadas con la Escuela el 24-09-2026; el panel las sugirió en la ronda 1) */
 const INT={SIS:{"SIS-03":["SIS-13"],"SIS-04":["SIS-11"],"SIS-05":["SIS-12","SIS-06"],"SIS-02":["SIS-14"],"SIS-01":["SIS-09"]},
            NUT:{"NUT-01":["NUT-08","NUT-14"],"NUT-02":["NUT-09"],"NUT-03":["NUT-10"]}}[cod];
 const nom=k=>(esp.find(e=>e.cod===k)||{}).n;
 D.integr=Object.fromEntries(Object.entries(INT).map(([b,l])=>[nom(b),l.map(nom).filter(Boolean)]).filter(x=>x[0]));
 const INTN={SIS:{"SIS-03":"Ciberseguridad y protección de datos","SIS-05":"Gobierno, proyectos y auditoría de TI","SIS-02":"Ciencia de datos, inteligencia artificial e inteligencia de negocios","SIS-04":"Infraestructura en la nube, DevOps y redes","SIS-01":"Desarrollo de software y análisis de sistemas"},
             NUT:{"NUT-01":"Nutrición clínica: hospitalaria, obesidad y geriátrica","NUT-02":"Servicios de alimentación, inocuidad y salud ocupacional","NUT-03":"Nutrición comunitaria y programas sociales"}}[cod];
 D.integrNombre=Object.fromEntries(Object.entries(INTN).map(([b,n])=>[nom(b),n]).filter(x=>x[0]));
 D.guion=Object.assign({},D.guion,{4:"<ul>"+Object.entries(D.integr).map(([b,l])=>"<li><b>"+b+"</b> con "+l.join(" y ")+"</li>").join("")+"</ul>"});
 /* Momento 4 · barrido real de Génesys (datos/capacidad/<cod>-dif.json y -hab.json) y borrador de la declaración de la Dirección (-decl.json).
    e.v de las aprobadas = declaración (semilla() la pasa a vdecl y la carga al ejecutar el momento 4); las no aprobadas quedan sin declarar. */
 const leer=f=>{ try{ return JSON.parse(fs.readFileSync(R("capacidad/"+cod+"-"+f+".json"),"utf8")) }catch(err){ return null } };
 const DIF=leer("dif"), HAB=leer("hab"), DEC=leer("decl");
 if(DIF&&HAB){
  const idx=(J)=>Object.fromEntries((J.items||[]).map(i=>[i.cod,i]));
  const dif=idx(DIF), hab=idx(HAB), dec=DEC?idx(DEC):{};
  D.vagente={}; const nuevasRefs=[];
  const refId=(f)=>{ if(!f||!f.u) return null; let r=D.refs.find(x=>x.u===f.u); if(!r){ r={id:D.refs.length+1,t:f.t+(f.fecha?" [consultado "+f.fecha+"]":""),u:f.u}; D.refs.push(r); nuevasRefs.push(r) } return r.id };
  esp.forEach(e=>{
   const a=dif[e.cod], h=hab[e.cod], d=dec[e.cod];
   if(a&&h){ D.vagente[e.n]={dif:a.nivel,hab:h.nivel}; e.v.dif=a.nivel; e.v.hab=h.nivel;
    e.vjust={dif:a.sustento,hab:h.sustento,norma:h.norma,registro:h.registro||"",quienes:a.quienes||[]};
    const ids=[refId((a.fuentes||[])[0]),refId((h.fuentes||[])[0])].filter(Boolean);
    e.refs=e.refs||{}; e.refs.via=[...new Set([...(ids),...(e.refs.via||[])])]; }
   else { e.v.dif=0; e.v.hab=0; }
   if(d){ e.v.doc=d.doc; e.v.cam=d.cam; e.v.inf=d.inf; e.vdecl_estado=d.estado; e.vjust=Object.assign(e.vjust||{},{doc:d.docentes,cam:d.campos,inf:d.infraestructura}); }
   else { e.v.doc=0; e.v.cam=0; e.v.inf=0; }
  });
  D.decl=DEC?{resp:DEC.responsable,fecha:DEC.fecha,tipo:DEC.tipo}:{resp:"Dirección de la Escuela Profesional",fecha:DIF.fecha};
  D.meta.capacidad="Momento 4 · barrido de diferenciación y habilitación del "+DIF.fecha+" (datos/capacidad/"+cod+"-dif.json, -hab.json; evidencias "+cod+"-6-*.md)"+(DEC?" · declaración de la Dirección en borrador (-decl.json), pendiente de firma":"");
  console.log("  capacidad:",Object.keys(D.vagente).length,"con dif/hab ·",DEC?DEC.items.length:0,"con declaración ·",nuevasRefs.length,"referencias nuevas");
 } else {
  D.vagente=Object.fromEntries(esp.filter(e=>e.v&&e.v.dif>=1&&e.v.hab>=1).map(e=>[e.n,{dif:e.v.dif,hab:e.v.hab}]));
 }
 if(ACTA){
  D.expertos=(D.expertos&&D.expertos.length)?D.expertos:[["P1","Mercado laboral y ocupaciones"],["P2","Prospectiva sectorial"],["P3","Regulación y acreditación"],["P4","Empleador del sector"],["P5","Tecnología y automatización"],["P6","Territorio y oferta comparada"]];
  D.acta={fecha:ACTA.fecha,ronda:ACTA.ronda,estado:ACTA.estado,resumen:ACTA.resumen,guardian:ACTA.guardian,abiertas:ACTA.abiertas};
  const rs=ACTA.resumen, es=ACTA.especialidades.filter(x=>x.ver==="Esencial").map(x=>x.n.toLowerCase());
  const lista=es.length?" —"+es.slice(0,-1).join(", ")+(es.length>1?" y ":"")+es.slice(-1)+"—":"";
  const ng=rs.guardianNoCumple.length, NOMBRE={2:"tecnología admitida como especialidad",3:"afirmaciones sin enlace fechado",4:"crecimiento sin serie contada",1:"modo de ejercicio",5:"alcance del título",6:"sello del plan",7:"capacidad inventada"};
  D.guion=Object.assign({},D.guion,{1:" En esta ronda, **"+(rs.esencial+rs.esencialSinUnanimidad)+" de "+rs.n+" salieron esenciales**"+lista+"; "+rs.noEsencial+" no esenciales y "+rs.sinConsenso+" sin consenso."+(ng?" El guardián dejó "+ng+" reglas en «no cumple» ("+rs.guardianNoCumple.map(n=>NOMBRE[n]).join(", ")+"): se corrigen en la cartera antes de una ronda 2, sin tocar las calificaciones.":" El guardián dio por cumplidas las siete reglas.")});
 }
 D.guion=Object.assign({},D.guion,cod==="SIS"
  ?{avisos:"2 089 públicas · 2 000+ LinkedIn",oferta:"14 universidades",0:" Lo que más pesa: ciberseguridad, datos e IA, nube y desarrollo concentran la escasez y las medianas salariales más altas (S/ 7 190–11 380 frente a S/ 4 331 del promedio joven). Dos candidatas nuevas frente a la cartera anterior: consultoría ERP y protección de datos personales."}
  :{avisos:"4 994 (Jooble) · 74 públicas",oferta:"13 universidades",0:" Lo que más pesa: clínica, servicios de alimentación en concesionarias y el sector público concentran los puestos propios, y los tres exigen colegiatura. Dos candidatas nuevas: nutrición ocupacional en minería y programas sociales del Estado; renal y oncológica se devuelven por la regla del puesto pero quedan en vigilancia."});
 D.meta.barrido="Barrido a plan cerrado del 23-09-2026 · 53 búsquedas · "+(cod==="SIS"?"44":"46")+" lecturas · evidencias en datos/evidencias/"+cod+"-*.md";
 return D;
}
function escribirDatos(cod,nombre){
 const D=convertir(cod,cod==="SIS"?SIS:NUT);
 const cab=`/* Datos · Escuela Profesional de ${nombre} (${cod}) · método v6.3
   Cartera del paso 1.1 (momento 1) volcada desde el barrido real del 23-09-2026: ver datos/cartera-${cod}.csv y datos/evidencias/${cod}-*.md.
   Los conteos y cifras de los sustentos son datos verificables; las puntuaciones 1–4 son juicio del modelo bajo reglas declaradas.
   La capacidad instalada (v) es declaración de la Escuela y se conserva de la versión anterior para las especialidades que ya existían.
   Momento 2 (panel de expertos, ronda 1 del 23-09-2026) volcado desde datos/acta-${cod}.json: ver datos/evidencias/${cod}-5-acta-panel-r1.md.
   Del momento 3 en adelante (competencias, matriz, objetivos, propuesta de valor, estudio) los datos siguen siendo los preparados hasta que se ejecuten esos momentos.
   Generado por herramientas/cartera-a-datos.js */
window.DATOS=window.DATOS||{};
DATOS.${cod}=`;
 fs.writeFileSync(R(cod.toLowerCase()+".js"),cab+JSON.stringify(D,null,1)+";\n");
 console.log(cod,"→",D.esp.length,"especialidades ·",D.refs.length,"referencias ·",Object.keys(D.req).length,"req");
}
escribirDatos("SIS","Ingeniería de Sistemas"); escribirDatos("NUT","Nutrición Humana");
