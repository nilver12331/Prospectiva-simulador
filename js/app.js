/* ════════════ MODELO DE VALORACIÓN ════════════
 Dos ejes de decisión, como en una cartera de productos:
   POTENCIAL DEL MERCADO  = 35% demanda + 30% tendencia + 20% impacto + 15% sostenibilidad
   CAPACIDAD DE SERVICIO = 30% docentes + 25% campos de práctica + 20% infraestructura
                              + 15% diferenciación + 10% habilitación
 Cada eje se compone de subvariables observables, todas en escala 1–4 con etiqueta.
 Regla de granularidad: una especialidad encierra FUNCIONES (≥ 4). Si moviliza menos,
 no es especialidad: es una función y pertenece a la Fase 2.                        */

const W_DEM={vol:.35,amp:.20,esc:.20,rem:.15,for:.10};
const W_TEN={cre:.30,nor:.25,inv:.20,dem:.15,tec:.10};
const W_ATR={dem:.35,ten:.30,imp:.20,sos:.15};
const W_VIA={doc:.30,cam:.25,inf:.20,dif:.15,hab:.10};
const ET={
 vol:["Sin puestos","Pocos puestos","Volumen medio","Alto volumen"],
 amp:["Un solo empleador","Pocos empleadores","Varios sectores","Muchos y diversos"],
 esc:["Se cubre sola","Se cubre fácil","Cuesta cubrir","Vacantes desiertas"],
 rem:["Bajo el promedio","Al promedio","Sobre el promedio","Muy sobre el promedio"],
 for:["Informal","Poco formal","Suele exigir título","Exige título y colegiatura"],
 cre:["Decrece","Estancado","Crece","Crece mucho"],
 nor:["Sin norma","Norma anunciada","Norma vigente","Norma con plazo y presupuesto"],
 inv:["Sin inversión","Inversión incipiente","Inversión sostenida","Inversión comprometida"],
 dem:["Sin driver","Driver débil","Driver claro","Driver estructural"],
 tec:["Tecnología inmadura","En experimentación","En adopción","Adoptada y estable"],
 cri:["Consecuencia mínima","Moderada","Alta","Grave o irreversible"],
 alc:["Pocas personas","Alcance local","Alcance regional","Alcance nacional"],
 sos:["La absorbe la IA","Riesgo alto","Riesgo moderado","Insustituible"],
 doc:["Sin docentes","1 docente","Equipo parcial","Equipo formado"],
 cam:["Sin campo","Campo informal","Convenios parciales","Convenios firmados"],
 inf:["Sin equipamiento","Equipamiento mínimo","Equipamiento parcial","Equipamiento completo"],
 dif:["Todos la ofrecen","Varias la ofrecen","Pocas la ofrecen","Nadie la ofrece"],
 hab:["Reservada a otra profesión","Sin norma expresa","Habilita el título","Habilita y es acreditable"]
};
const NIV4=v=>`<span class="et v${v}">`;

let ESP=[];

let REFS=[];
const REF=i=>REFS.find(r=>r.id===i);
/* Referencias metodológicas del Estudio Prospectivo: se citan en formato APA en la introducción y donde el método lo exige.
   Son constantes del método; las fuentes del campo (REFS) las aporta cada escuela. */
const REFS_MET=[
 {id:"ley",c:"Congreso de la República del Perú, 2014",t:"Congreso de la República del Perú. (2014). <i>Ley 30220, Ley Universitaria</i>. Diario Oficial El Peruano."},
 {id:"godet",c:"Godet & Durance, 2011",t:"Godet, M., & Durance, P. (2011). <i>La prospectiva estratégica para las empresas y los territorios</i>. UNESCO / Dunod."},
 {id:"tuning",c:"Beneitone et al., 2007",t:"Beneitone, P., Esquetini, C., González, J., Maletá, M. M., Siufi, G., & Wagenaar, R. (Eds.). (2007). <i>Reflexiones y perspectivas de la educación superior en América Latina: Informe final Proyecto Tuning América Latina 2004–2007</i>. Universidad de Deusto."},
 {id:"rand",c:"Fitch et al., 2001",t:"Fitch, K., Bernstein, S. J., Aguilar, M. D., Burnand, B., LaCalle, J. R., Lázaro, P., van het Loo, M., McDonnell, J., Vader, J. P., & Kahan, J. P. (2001). <i>The RAND/UCLA Appropriateness Method user's manual</i>. RAND Corporation."},
 {id:"lynn",c:"Lynn, 1986",t:"Lynn, M. R. (1986). Determination and quantification of content validity. <i>Nursing Research, 35</i>(6), 382–385."},
 {id:"polit",c:"Polit & Beck, 2006",t:"Polit, D. F., & Beck, C. T. (2006). The content validity index: Are you sure you know what's being reported? Critique and recommendations. <i>Research in Nursing & Health, 29</i>(5), 489–497."},
 {id:"lawshe",c:"Lawshe, 1975",t:"Lawshe, C. H. (1975). A quantitative approach to content validity. <i>Personnel Psychology, 28</i>(4), 563–575."},
 {id:"anderson",c:"Anderson et al., 2006",t:"Anderson, J. C., Narus, J. A., & van Rossum, W. (2006). Customer value propositions in business markets. <i>Harvard Business Review, 84</i>(3), 90–99."},
 {id:"abet",c:"ABET, 2024",t:"ABET. (2024). <i>Criteria for accrediting engineering programs, 2025–2026</i>. ABET Engineering Accreditation Commission."}];
/* Nombre de la carrera para los documentos */
const nombreEsc=()=>ESCUELA&&ESCUELA.nombre?ESCUELA.nombre:"la carrera";
const META=()=>ESCUELA||{};
const MES=()=>{const d=new Date();const m=d.toLocaleDateString("es-PE",{month:"long"});return m.charAt(0).toUpperCase()+m.slice(1)+" de "+d.getFullYear()};
const CM=k=>{const r=REFS_MET.find(x=>x.id===k); return r?"("+r.c+")":""};
function refsDe(e){
 if(e.refs) return e.refs;
 const ok=i=>REF(i)?[i]:[];
 const dem=[...ok(2),...ok(3)]; if(e.d.for>=3) dem.push(...ok(4));
 const ten=[]; if(e.t.nor>=3) ten.push(...ok(e.t.inv>=4?5:1)); if(e.t.dem>=3) ten.push(...ok(10)); if(e.t.tec>=4) ten.push(...ok(7)); if(!ten.length) ten.push(...ok(10));
 const imp=[...ok(9),...ok(6)]; const via=[...ok(4),...ok(8)];
 return {dem,ten,imp,via};
}
const citas=a=>a.map(i=>`<button class="cita" data-ref="${i}">${i}</button>`).join("");
const pond=(o,w)=>Object.keys(w).reduce((s,k)=>s+w[k]*o[k],0);
const a100=v=>Math.round((v-1)/3*100);
/* Propuesta de Génesys para la casilla ✓. Momento 3 (antes de la capacidad): se aprueba lo que tiene potencial ≥ 50
   y el panel no declaró «no esencial» —donde el panel dijo no esencial, manda el acta, no el cálculo—.
   Momento 5 (con la capacidad a la vista): lo que entra al plan, con habilitación o con potencial sin capacidad declarada. */
function propuestaSel(e){
 if(e.nat==="transversal"||e.o==="En extinción"||(e.puesto<=2&&e.emprende<=2)) return false;
 if(e.panel&&e.panel.ver==="No esencial") return false;
 const antesCap=(typeof S==="undefined")||S.done<4;
 return antesCap?e.ATR>=50:["nucleo","desarrollar","potencial"].includes(e.dec);
}
function calcular(e){
 e.DEM=a100(pond(e.d,W_DEM));
 e.TEN=a100(pond(e.t,W_TEN));
 e.IMP=a100(.6*e.i.cri+.4*e.i.alc);
 e.SOS=a100(e.sos);
 e.ATR=Math.round(W_ATR.dem*e.DEM+W_ATR.ten*e.TEN+W_ATR.imp*e.IMP+W_ATR.sos*e.SOS);
 // Capacidad: completa con los cinco indicadores; parcial —renormalizada— con los tres que declara la escuela
 const compl=Object.keys(W_VIA).every(k=>e.v[k]>=1);
 const complEsc=["doc","cam","inf"].every(k=>e.v[k]>=1);
 let v4=null;
 const procesada=(typeof S==="undefined")||S.capOk;   // marcar la matriz y cerrar no declara: procesa «Declarar y procesar»
 if(procesada&&compl) v4=pond(e.v,W_VIA);
 else if(procesada&&complEsc){ const ks=Object.keys(W_VIA).filter(k=>e.v[k]>=1), tot=ks.reduce((a,k)=>a+W_VIA[k],0); v4=ks.reduce((a,k)=>a+W_VIA[k]/tot*e.v[k],0) }
 e.parcial=complEsc&&!compl;
 e.VIA=v4===null?null:a100(v4);
 e.D4=Math.round(pond(e.d,W_DEM)); e.T4=Math.round(pond(e.t,W_TEN));
 e.I4=Math.round(.6*e.i.cri+.4*e.i.alc); e.V4=v4===null?null:Math.round(v4);
 if(e.nat==="transversal") e.dec="recurso";
 else if(e.o==="En extinción") e.dec="descartar";
 else if(e.puesto<=2&&e.emprende<=2) e.dec=(e.t.dem>=4)?"vigilancia":"encargo";
 else if(e.VIA===null) e.dec=(e.ATR>=65)?"potencial":((e.t.dem>=4||e.TEN>=65)?"vigilancia":"descartar");
 else if(e.ATR>=65&&e.VIA>=60) e.dec="nucleo";
 else if(e.ATR>=65) e.dec="desarrollar";
 else if(e.ATR>=50&&e.VIA>=60) e.dec="certificacion";
 else if(e.t.dem>=4||e.TEN>=65) e.dec="vigilancia";
 else e.dec="descartar";
 if(!e.selMan) e.sel=propuestaSel(e);
 e.PRI=(e.VIA===null)?e.ATR:Math.round(e.ATR*e.VIA/100);
}
let DESC={};
let ACTA=null;
let INTEGR={};   // propuesta de integración de Génesys: nombre base → [nombres que absorbe]
let INTEGRN={};  // nombre que agrupa a cada integración: nombre base → nombre del grupo
const baseDe=e=>e.n0||e.n;
const gruposDef=()=>{ const g={}; Object.keys(INTEGR).forEach(b=>{ g[b]={nombre:INTEGRN[b]||b,miembros:(INTEGR[b]||[]).slice()} });
  ESP.filter(e=>e.oculta&&e.integradaEn).forEach(e=>{ const b=e.integradaEn; g[b]=g[b]||{nombre:b,miembros:[]}; if(!g[b].miembros.includes(e.n)) g[b].miembros.push(e.n) });
  return g };
const gruposDe=()=>{ const g=gruposDef(); Object.entries(S.grupos||{}).forEach(([b,v])=>{ g[b]=g[b]||{nombre:b,miembros:[]}; if(v.nombre) g[b].nombre=v.nombre; if(v.miembros) g[b].miembros=v.miembros.slice() }); return g };
const miembrosDe=n=>((gruposDe()[n]||{}).miembros||[]).filter(m=>ESP.some(x=>x.n===m));
const esMiembro=n=>Object.values(gruposDe()).some(g=>g.miembros.includes(n));
const nombreGrupo=n=>(gruposDe()[n]||{}).nombre||n;
let MEJORAS={};  // mejora preparada por competencia (alias → {def, caps, nota}) para «Mejorar con Génesys»
let PLANMAPA=null; // contraste real: alias de la derivada → índice de la competencia vigente que la recoge (−1 = nace)
function planDe(ai){ const c=ARQ[ai]; if(!c) return null; if(PLANMAPA&&c.alias in PLANMAPA){ const j=PLANMAPA[c.alias]; return j>=0?PLAN[j]:null } return PLAN[ai]||null }
let PLANFUERA=[];
function notaFuera(){ if(PLANFUERA.length) return "Quedan fuera de este paso: "+PLANFUERA.map(x=>"«"+x.n+"»"+(x.tipo==="C"?" (dominio disciplinar, se deriva en el paso 3.4)":x.tipo==="B"?" (general, institucional)":"")).join(", ")+". Las competencias generales son institucionales y no se rediseñan aquí."; return "Las competencias generales quedan fuera de este paso: son institucionales. Las de dominio disciplinar se derivan en el paso 3.4."; }
function trazaDe(c){ return c?TRAZA.find(t=>t.n===c.n||t.n===c.alias)||null:null }
let NAT_J={};
const EXPERTOS_DEF=[["P1","Mercado laboral y ocupaciones"],["P2","Prospectiva sectorial"],["P3","Regulación y acreditación"],
 ["P4","Empleador del sector"],["P5","Tecnología y automatización"],["P6","Territorio y oferta comparada"]];
let EXPERTOS=[["P1","Mercado laboral y ocupaciones"],["P2","Prospectiva sectorial"],["P3","Regulación y acreditación"],
 ["P4","Empleador del sector"],["P5","Tecnología y automatización"],["P6","Territorio y oferta comparada"]];
function panelDe(e){
 if(e.panel&&e.panel.p&&e.panel.p.length) return e.panel;
 const h=[...e.n].reduce((a,c)=>a+c.charCodeAt(0),0);
 const base=Math.round((e.i.cri+e.d.vol+e.t.cre)/3);
 const p=EXPERTOS.map((x,i)=>{const d=((h+i*37)%5)-2; return Math.max(1,Math.min(4,base+(d>1?1:(d<-1?-1:0))))});
 const ord=[...p].sort((a,b)=>a-b);
 const med=(ord[2]+ord[3])/2;
 const esen=p.filter(v=>v>=3).length;
 const cvr=+(((esen-p.length/2)/(p.length/2)).toFixed(2));
 const icvi=+(esen/p.length).toFixed(2);
 const ric=ord[4]-ord[1];
 return {p,med,icvi,cvr,ric,ac:e.ac};
}
function candidatas(e){
 if(!e.sel) return [];
 const prop=INTEGR[e.n]||[];
 return ESP.filter(o=>!o.oculta&&o!==e&&!noValorada(o)&&(o.sel||o.apr)&&(o.nat===e.nat||prop.includes(o.n)||(INTEGR[o.n]||[]).includes(e.n)));
}
let PUESTO={};
ET.pue=["Tarea dentro de otro puesto","Encargo puntual","Puesto compartido","Puesto propio a tiempo completo"];
ET.emp=["No sostiene negocio propio","Complemento de ingresos","Consultorio o servicio propio","Negocio escalable: consultora o centro"];
let EMPRENDE={};
/* La declaración de la escuela se guarda aparte: la matriz nace vacía y solo se llena
   cuando la Dirección la declara (o cuando Génesys carga la ficha firmada). */
let VDECL={}, DECL={resp:"Dirección de la Escuela Profesional",fecha:new Date().toLocaleDateString("es-PE")};
const capDeclarada=()=>ESP.some(e=>!e.oculta&&!(e.puesto<=2&&e.emprende<=2)&&e.VIA!==null);
const valoradas=()=>ESP.filter(e=>!e.oculta&&!(e.puesto<=2&&e.emprende<=2));
/* La capacidad se declara solo de las aprobadas: la cartera está completa cuando todas ellas la tienen. */
const capBase=()=>{const L=valoradas(), A=L.filter(e=>e.sel); return A.length?A:L};
const capCompleta=()=>{const B=capBase(); return B.length>0&&B.every(e=>e.VIA!==null)};
const capFaltan=()=>capBase().filter(e=>!["doc","cam","inf"].every(k=>e.v[k]>=1));
/* Momento 4: Génesys aplica siempre sus dos indicadores (diferenciación y habilitación); los tres de la Escuela llegan con la declaración firmada, si existe. */
function cargarDeclaracion(){ESP.forEach(e=>{if(VDECL[e.n])e.v={...VDECL[e.n]}; if(e.vagente) ["dif","hab"].forEach(k=>{ if(!(e.vman||{})[k]&&e.vagente[k]) e.v[k]=e.vagente[k] }); calcular(e)}); marcar()}
const DEC={
 nucleo:["c-nucleo","Entra al plan","#15803d","Entra al rediseño","Campo atractivo y escuela preparada. Entra al rediseño: de ella se derivan competencias en el 1.2 y se cruza en el 1.3."],
 desarrollar:["c-desarrollar","Entra con habilitación","#5b21b6","Entra con plan de habilitación","Campo atractivo, escuela aún no lista. Entra al rediseño, pero con plan de habilitación: docentes, convenios o equipamiento."],
 certificacion:["c-certificacion","Como mención","#1d4ed8","Mención progresiva (paso 4.4)","Atractivo moderado con la escuela preparada. Rinde mejor como mención o certificación progresiva (paso 4.4)."],
 vigilancia:["c-vigilancia","Esperar y revisar","#a35c06","Se revisa el próximo ciclo","Sin demanda hoy, con un driver que la sostendrá. No entra al plan; se revisa en el próximo ciclo."],
 encargo:["c-funcion","Va a la Fase 2","#9ca3af","El mercado no lo contrata como puesto propio","El mercado no lo contrata como puesto propio: es un encargo dentro de otro. Va a la Fase 2 como función."],
 recurso:["c-recurso","Recurso del 2.2","#9ca3af","Entra en el paso 2.2","Atraviesa todas las especialidades: es un recurso de productividad (paso 2.2), no un campo de ejercicio."],
 descartar:["c-descartar","No entra","#9ca3af","Sale del alcance","Sin demanda ni tendencia que la sostengan, o en extinción. Sale del alcance con motivo declarado."],
 potencial:["c-potencial","Potencial sin capacidad declarada","#003366","El mercado la pide · falta el dato de la escuela","El campo la sostiene, pero la escuela no ha declarado su capacidad instalada. Con ese dato se separará entre las que entran al plan y las que entran con habilitación."]
};

/* ════════════ Competencias vigentes y equivalencia ════════════ */
let PLAN=[];
let PLA=["C1 · Atención","C2 · Comunidad","C3 · Sistemas alimentarios","C4 · Vida y deporte"];
let EQMAN={};   // marcas hechas a mano por el experto
const EQKEY=(e,ci,ki)=>e+"|"+ci+"|"+(ki===null?"c":ki);
let EQ={};
let SIN_ENCAJE=[];
let CAP_SIN_ESP=[];
let ARQ=[];
let TRAZA=[];
let SMART=[];

/* ════════════ PROGRESO ════════════ */
const PROG=[
 {id:"1.1",t:"Prospectiva de Especialidades",subs:["Generar la cartera del campo","Validar con el panel de expertos","Aprobar las especialidades a trabajar","Declarar la capacidad instalada","Seleccionar y decidir el destino","Guardar las Especialidades Validadas"]},
 {id:"1.2",t:"Definir Competencias",subs:["Determinar las competencias del campo","Contrastar con el plan vigente","Revisar la estructura y la trazabilidad","Guardar las competencias"]},
 {id:"1.3",t:"Matriz de Correspondencia",subs:["Cruzar especialidades y competencias","Marcar y ajustar correspondencias","Guardar la Matriz de Correspondencia"]},
 {id:"1.4",t:"Definir Objetivos",subs:["Formular objetivos educacionales","Verificar la coherencia","Guardar los objetivos"]},
 {id:"1.5",t:"Propuesta de Valor",subs:["Formular la propuesta de valor","Guardar la propuesta de valor"]},
 {id:"1.6",t:"Estudio Prospectivo de la Carrera",subs:["Generar las fichas técnicas","Armar el Estudio Prospectivo","Guardar y versionar"]}
];
const OCULTOS=[2];   // «Aprobar las especialidades a trabajar» se hace con las casillas del tablero, no es un momento aparte
const BASE=[];let acc=0;PROG.forEach(p=>{BASE.push(acc);acc+=p.subs.length});const TOTAL=acc;

/* ════════════ GUION ════════════
   Los textos llevan plantillas que se resuelven con los datos de la escuela activa:
   {N} candidatas, {SEL} seleccionadas, {C} competencias, {K} capacidades, {REF} reformuladas,
   {CON} conservadas, {PLAN} nombre del plan, {PLANC}/{PLANK} competencias y capacidades vigentes,
   {OE} objetivos, {DIF*} diferenciales, {G:n} frase propia de la escuela (datos/<cod>.js → guion). */
const ACTOS=[
 {boton:"Generar la cartera de especialidades",sec:"Ver el alcance del barrido",
  instruccion:"Barre el campo profesional y genera la cartera de especialidades.",
  traza:["Leyendo la página de identificación del plan (el resto queda sellado)","Barriendo portales de empleo y convocatorias de los últimos 12 meses","Contando avisos por especialidad y tipo de empleador","Rastreando norma sectorial, colegio profesional y registros exigibles","Estimando tendencia a cinco años con series 2023–2026","Escribiendo la cartera en el tablero"],
  resp:["Barrí el campo **a plan cerrado**: {N} candidatas con su modo de ejercicio —si el mercado las contrata como **puesto** o si sostienen un **negocio propio**—, el proceso que ejecuta cada una, la evidencia que entrega y los indicadores de mercado.{G:0}",
        "Lo que **no** puedo levantar solo es la **capacidad instalada**: cuántos docentes con el perfil hay, qué convenios están firmados, qué laboratorios existen. Eso lo sabe la escuela, y se pedirá más adelante, solo de las que se aprueben."],
  adj:{t:"Cartera de Especialidades",m:"{N} candidatas · indicadores de mercado"},
  vista:"tablero",done:1,sal:{k:"esp",e:"borrador"},
  fue:[{ic:"CSV",t:"Convocatorias 12 meses",n:"{AVISOS}"},{ic:"REF",t:"Series de avisos 2023–26",n:"3 años"}]},
 {boton:"Ejecutar el panel de expertos (ronda 1)",sec:"Ver el acta del panel",
  instruccion:"Valida la cartera con el panel de expertos.",
  traza:["Convocando a seis expertos independientes y al guardián metodológico","Cada experto califica la esencialidad de las {N} especialidades sin ver al resto","Calculando mediana, I-CVI, CVR, acuerdo y RIC","Contrastando contra los umbrales declarados antes de la ronda","Escribiendo el acta en el tablero"],
  resp:["Lancé a los **seis expertos independientes** —mercado laboral, prospectiva, regulación, empleador, tecnología y territorio— más el guardián metodológico. Cada uno califica por separado y no ve las respuestas de los demás: eso es lo que hace de esto un **Delphi**.",
        "Juzgan la **esencialidad de cada especialidad para el perfil de egreso**, no la capacidad de la escuela: por eso el panel va antes de declarar capacidad. El acta queda abajo: calificación de cada experto, mediana, I-CVI, CVR, acuerdo y RIC.{G:1}",
        "**Importante:** este panel deja el estado en `revisado`. El `validado` lo otorga el panel de especialistas humanos aplicando el mismo instrumento."],
  adj:{t:"Acta del panel · ronda 1",m:"6 expertos · {N} especialidades"},
  vista:"tablero",done:3,delphi:true,abreActa:true,sal:{k:"esp",e:"revisado"},
  fue:[{ic:"PDF",t:"Norma sectorial y reglamento del colegio"},{ic:"WEB",t:"Oferta comparada",n:"{OFERTA}"}]},
 {boton:"Declarar la capacidad instalada",sec:"Ver la plantilla antes de descargar",abreCap:true,cargaCap:true,opcional:"Seleccionar y decidir el destino",omiteCap:true,
  instruccion:"Registro la capacidad instalada de la escuela para las aprobadas.",
  traza:["Cargando la declaración firmada por la Dirección de la Escuela","Comparando planes de estudio publicados de la región, el país y el extranjero (diferenciación)","Rastreando la habilitación normativa de cada especialidad aprobada","Cruzando potencial de mercado × capacidad instalada"],
  resp:["Recibida. Con los cinco indicadores por especialidad aprobada —docentes, campos de práctica con convenio, equipamiento, diferenciación y habilitación— ya puedo cruzar los dos ejes. Mis dos indicadores —**diferenciación** y **habilitación normativa**— los evalué con el barrido de oferta y norma; esos no se saltan. Los tres de la Escuela son **opcionales**: sin ellos la cartera se ordena solo por potencial de mercado.",
        "Queda registrado quién lo declaró y en qué fecha: es el dato que sostiene la decisión ante la Dirección."],
  adj:{t:"Ficha de Capacidad de Servicio",m:"5 indicadores × especialidades aprobadas"},
  vista:"tablero",done:4,sal:{k:"esp",e:"con capacidad"},
  fue:[{ic:"DOC",t:"Declaración de la Dirección",n:"borrador · por firmar"}]},
 {boton:"Seleccionar y decidir el destino",sec:"Integrar dos especialidades",
  humano:"La segunda decisión es de escuela: qué entra al plan y con qué destino.",
  instruccion:"Propón la selección y el destino de cada especialidad aprobada.",
  traza:["Aplicando la cadena de decisión a cada aprobada: potencial, capacidad instalada y acta del panel","Calculando la prioridad (potencial × capacidad ÷ 100) y ordenando la cartera","Buscando candidatas de la misma naturaleza que el mercado contrata en un mismo puesto","Escribiendo la propuesta de destino e integración en el tablero"],
  resp:["**Segunda decisión.** Con los dos ejes cruzados propongo el destino de cada aprobada: qué entra al plan, qué entra con plan de habilitación, qué va como mención y qué se revisa el próximo ciclo. Donde el panel dijo «no esencial», el cálculo no manda: manda el acta. Hoy la propuesta marca **{SEL} especialidades** para entrar al plan.",
        "Integraciones que propongo, porque el mercado las contrata en un mismo puesto:{G:4}",
        "La decisión es de la Escuela: revise la casilla ✓ de cada fila, integre lo que corresponda con los botones de la columna de integración y pulse **Confirmar la selección y continuar** al pie de la tabla. **Solo las seleccionadas pasan a definir competencias**."],
  vista:"tablero",done:5,propone:true,sal:{k:"esp",e:"con propuesta"},fue:[]},
 {boton:"Guardar las Especialidades Validadas",sec:"Revisar la cartera antes de guardar",
  humano:"El cierre del paso 1.1 es decisión de escuela.",
  instruccion:"Guarda las especialidades validadas y cierra el paso 1.1.",
  resp:["Guardadas. Las **{SEL} especialidades seleccionadas** quedan congeladas con su potencial de mercado, su capacidad instalada y el acta del panel que las sustenta.",
        "Desde aquí ya no se agregan candidatas: lo que entra al paso 1.2 es esta lista, con el proceso que ejecuta y la evidencia que entrega cada una."],
  adj:{t:"Especialidades Validadas",m:"{SEL} de {N} · paso 1.1 cerrado"},
  vista:"arquitectura",done:6,sal:{k:"esp",e:"validado"},fue:[]},
 {boton:"Determinar las competencias del campo",sec:"Ver la regla de derivación",
  instruccion:"Determina las competencias del campo a partir de las especialidades validadas, con el plan sellado.",
  traza:["Tomando las {SEL} especialidades validadas con su proceso y su evidencia","Agrupando por proceso compartido (el plan sigue sellado)","Formulando cada competencia: verbo, objeto, contexto, propósito, evidencia y nivel de dominio","Derivando de 2 a 6 capacidades por competencia","Declarando el tipo de relación de cada especialidad","Escribiendo las competencias del campo en el tablero"],
  resp:["**El plan sigue sellado.** Agrupé las {SEL} especialidades por **proceso compartido**: el proceso común de cada grupo es una competencia y sus tramos con evidencia propia son las capacidades, entre 2 y 6.",
        "Salen **{C} competencias con {K} capacidades**. Cada especialidad lleva su tipo de relación: {G:6}",
        "Cada competencia lleva alias, título, definición conceptual y tipo. La **definición operativa** queda pendiente hasta cerrar la Fase 2."],
  adj:{t:"Competencias Derivadas del Campo",m:"{C} competencias · {K} capacidades · a ciegas del plan"},
  vista:"arquitectura",done:7,redactado:true,sal:{k:"comp",e:"borrador"},fue:[]},
 {boton:"Contrastar con el plan vigente",sec:"Ver el plan de estudios",opcional:"Omitir el contraste y revisar la estructura",pidePlan:true,
  instruccion:"Abre el plan de estudios y contrasta lo determinado con la formulación vigente (momento opcional).",
  traza:["Levantando el sello: leyendo {PLANARCH}","Extrayendo la formulación literal: competencias, capacidades y definiciones","Armando la matriz de contraste determinada × vigente","Resolviendo cada celda en una de cinco situaciones","Registrando el gatillo de cada cambio"],
  resp:["**Ahora se levanta el sello**: el {PLAN} tiene {PLANC} competencias de especialidad con {PLANK} capacidades. Dos lecturas independientes, una del campo y otra del plan, puestas frente a frente.",
        "Contraste: {G:7}",
        "La mínima intervención rige sobre la redacción, no sobre la estructura: donde la redacción vigente es buena, se conserva. Cada cambio deja su gatillo en «Por qué cambió»."],
  adj:{t:"Matriz de contraste",m:"{C} derivadas × {PLANC} vigentes · {REF} se reforman, {CONT}"},
  vista:"arquitectura",done:8,comparar:true,sal:{k:"comp",e:"contrastado"},
  fue:[{ic:"DOC",t:"{PLAN}",n:"v1.0"}]},
 {boton:"Revisar la estructura y la trazabilidad",sec:"Ver los elementos de la estructura",opcional:"Confirmar y guardar",omiteRev:true,
  instruccion:"Revisa la estructura de cada competencia y capacidad, y la trazabilidad con el plan.",
  resp:["Dos compuertas antes de guardar. **Estructura**: cada competencia declara verbo de acción, objeto o ámbito, condiciones o contexto, propósito y evidencia, y cada capacidad sus componentes; las filas que exigían ajuste ya están corregidas. **Trazabilidad**: cada competencia declara de qué especialidades se deriva y qué cambió respecto del plan.",
        "Se valida aquí y no después del cruce: si cambiara una competencia después de cruzar, habría que cruzar de nuevo."],
  vista:"arquitectura",done:9,smartOk:true,sal:{k:"comp",e:"revisado"},fue:[{ic:"DOC",t:"Escala de progresión UPeU"}]},
 {boton:"Guardar las competencias",sec:"Ajustar una definición",humano:"La definición es decisión de escuela.",esperaArq:true,
  instruccion:"Confirmo y guardo las competencias.",
  resp:["Guardadas. Las {C} competencias quedan congeladas con sus capacidades y su trazabilidad: {TRZ}. **Paso 1.2 cerrado.**",
        "Con las competencias fijas recién tiene sentido cruzar."],
  adj:{t:"Definición de competencias",m:"{C} competencias · {K} capacidades · paso 1.2 cerrado"},
  vista:"equivalencia",done:10,arqOk:true,sal:{k:"comp",e:"validado"},fue:[]},
 {boton:"Cruzar especialidades y competencias",sec:"Ver la prueba de cobertura",
  instruccion:"Cruza las especialidades validadas contra las competencias guardadas.",
  traza:["Cruzando {SEL} especialidades validadas × {C} competencias guardadas","Confirmando el tipo de correspondencia de cada celda","Prueba de cobertura: toda especialidad en una celda, toda capacidad con especialidad","Escribiendo la matriz en el tablero"],
  resp:["Crucé las **{SEL} validadas** contra las **{C} competencias guardadas**, no contra el plan: {G:10}",
        "La matriz ya no descubre: registra. Una celda sin correspondencia es un hallazgo que, en una ejecución real, **vuelve al paso 1.2** antes de guardar; aquí queda a la vista para mostrarlo.",
        "Puede marcar a mano en cualquier celda: su criterio manda sobre el mío."],
  adj:{t:"Correspondencia: Especialidad y Competencia",m:"{SEL} especialidades × {C} competencias"},
  vista:"equivalencia",done:11,cruzado:true,sal:{k:"corr",e:"borrador"},fue:[]},
 {boton:"Guardar la Matriz de Correspondencia",sec:"Marcar una correspondencia a mano",
  humano:"Las correspondencias son juicio del experto.",
  instruccion:"Guarda la matriz de correspondencia y cierra el paso 1.3.",
  resp:["Guardada. Quedan registradas las correspondencias de las {SEL} especialidades: es la trazabilidad que los objetivos del 1.4 necesitan, porque cada objetivo se rastrea a una especialidad y se sostiene en una competencia.",
        "Las marcas hechas a mano se guardan como **juicio del experto**, distinguidas de las que propuso el agente."],
  adj:{t:"Matriz de Correspondencia",m:"{SEL} especialidades × {C} competencias · paso 1.3 cerrado"},
  vista:"perfil",done:13,sal:{k:"corr",e:"validado"},fue:[]},
 {boton:"Formular Objetivos",sec:"Ver criterio de objetivos educacionales",
  instruccion:"Formula los objetivos educacionales sobre el perfil de egreso ya definido.",
  traza:["Leyendo el perfil de egreso: las {C} competencias guardadas","Formulando el desempeño del egresado a 3–5 años, rastreable a una especialidad","Verificando la coherencia en las dos direcciones","Escribiendo los objetivos y su matriz en el tablero"],
  resp:["El perfil de egreso **no se redacta aparte**: es el conjunto de las competencias guardadas en el 1.2, y queda a la vista.",
        "Formulé **{OE} objetivos educacionales** —lo que el egresado logra a 3–5 años—, cada uno rastreable a una especialidad por la matriz del 1.3, y verifiqué la coherencia contra las {C} competencias.",
        "Ambos deben validarse con grupos de interés: es requisito de SINEACE."],
  adj:{t:"Objetivos Educacionales",m:"{OE} objetivos · coherencia verificada"},
  vista:"perfil",done:15,objetivos:true,sal:{k:"perf",e:"borrador"},fue:[{ic:"DOC",t:"Modelo SINEACE",n:"2024"}]},
 {boton:"Guardar los objetivos",sec:"Ver la prueba de coherencia",
  humano:"Los objetivos educacionales son decisión de escuela.",
  instruccion:"Guarda los objetivos educacionales y cierra el paso 1.4.",
  resp:["Guardados los **{OE} objetivos educacionales** con su alineación: cada uno indica qué competencia lo sostiene y cuáles contribuyen.",
        "Queda pendiente **validarlos con grupos de interés** —empleadores, egresados y colegio profesional—: es requisito de SINEACE y no lo puede suplir el agente."],
  adj:{t:"Objetivos Educacionales",m:"{OE} objetivos · alineados con {C} competencias"},
  vista:"valor",done:16,sal:{k:"perf",e:"validado"},fue:[]},
 {boton:"Formular la Propuesta de Valor",sec:"Ver en qué se sustenta",
  instruccion:"Formula la propuesta de valor de la carrera.",
  traza:["Construyendo la cadena de propósito de la carrera y de cada competencia","Llenando la ficha de cinco campos y declarando paridades","Puerta G0: nueve verificaciones automáticas","Convocando al panel VALOR: prueba del espejo, demostrabilidad, relevancia, vigencia","Derivando propósito, párrafo y promesa de los diferenciales confirmados","Escribiendo la propuesta de valor en el tablero"],
  resp:["La propuesta de valor **no se redacta primero**: construí la **cadena de propósito** de la carrera y de las {C} competencias —problema con dato, competencia, consecuencia para alguien nombrado, propósito— y llené la **ficha de cinco campos**: destinatario, tensión del campo, universidades de comparación, {DIF} diferenciales candidatos y la condición de caducidad, más las paridades declaradas.",
        "La **puerta G0** pasó sus nueve verificaciones, así que convoqué al **panel VALOR**. Resultado: {G:14} Las cadenas de propósito quedaron **aprobadas**. El acta queda en la pantalla.",
        "Con los {DIFC} confirmados derivé el **propósito** ({WPROP} palabras), el **párrafo** ({WT}) y la **promesa** ({WP}) de la carrera, y el propósito, la propuesta y la promesa de cada especialidad. El panel aprobó los textos: claridad {L}, sostenido {SO}, doble auditorio {AU}. Si quiere ajustar, use **Ajustar con Génesys**: verá los cambios palabra por palabra."],
  adj:{t:"Propuesta de Valor",m:"ficha C1–C5 · G0 superada · {C1} cadenas · {DIFC} diferenciales confirmados"},
  vista:"valor",done:17,valor:true,sal:{k:"vlr",e:"borrador"},fue:[]},
 {boton:"Guardar la propuesta de valor",sec:"Ajustar la promesa",
  humano:"La propuesta de valor es decisión de escuela.",
  instruccion:"Guarda la propuesta de valor y cierra el paso 1.5.",
  resp:["Guardada. Es el texto que sustenta la diferenciación de la carrera ante admisión, ante el postulante y ante acreditación.",
        "Sigue el paso **1.6**: primero las fichas técnicas, después el Estudio Prospectivo de la Carrera Profesional que las consolida."],
  adj:{t:"Propuesta de Valor",m:"paso 1.5 cerrado"},
  vista:"informe",done:18,sal:{k:"vlr",e:"validado"},fue:[]},
 {boton:"Generar las fichas técnicas",sec:"Revisar el consolidado",
  instruccion:"Genera la ficha técnica de cada competencia.",
  traza:["Leyendo las {C} competencias guardadas con sus capacidades y su trazabilidad","Cargando la plantilla institucional P001","Redactando la identificación y el resumen ejecutivo de cada ficha","Componiendo la hoja apaisada: competencia, capacidades, especialidades y objetivos","Verificando que cada ficha quepa en sus dos hojas y armando el documento completo"],
  resp:["{C} fichas sobre la plantilla **P001**, una por competencia, más el documento completo."],
  adj:{t:"Fichas Técnicas · {C} competencias",m:"P001 · primera versión"},
  vista:"informe",done:19,fichas:true,sal:{k:"inf",e:"fichas listas"},fue:[{ic:"DOC",t:"Plantilla P001",n:"V1.0"}]},
 {boton:"Armar el Estudio Prospectivo de la Carrera",sec:"Ver el índice del estudio",
  instruccion:"Consolida todo lo decidido en el Estudio Prospectivo de la Carrera Profesional.",
  traza:["Consolidando lo guardado en los cinco pasos anteriores","Redactando resumen ejecutivo e introducción con citas APA","Insertando mapa de decisión, resultados y propuesta de valor","Adjuntando la matriz, los objetivos y las {C} fichas técnicas","Armando el control de versiones"],
  resp:["Armé el estudio con lo producido en los cinco pasos anteriores: introducción, resumen ejecutivo, objetivo, mapa de decisión, resultados por especialidad, propuesta de valor, matriz de correspondencia, objetivos educacionales y las {C} fichas técnicas.",
        "Está escrito para **vender el rediseño a los directivos**: cada sección abre con lo que está en juego y cierra con la decisión que pide. Nada se inventa: **todo se deriva** de lo ya aprobado; si algo no cuadra, se corrige en su paso y el estudio se regenera."],
  adj:{t:"Estudio Prospectivo de la Carrera Profesional",m:"11 secciones · v1.0 borrador"},
  vista:"informe",done:20,informe:true,sal:{k:"inf",e:"borrador v1.0"},fue:[]},
 {boton:"Guardar el estudio · v1.0",sec:"Revisar antes de versionar",
  humano:"El estudio se aprueba en Consejo de Facultad.",
  instruccion:"Versiona y guarda el Estudio Prospectivo de la Carrera Profesional.",
  resp:["Guardado como **v1.0**, con su control de versiones. Queda congelado: cualquier cambio posterior abre una **v1.1** con el motivo declarado.",
        "**Fase 1 cerrada.** El estudio y las fichas habilitan el inicio de la Fase 2."],
  adj:{t:"Estudio Prospectivo · v1.0",m:"Fase 1 cerrada"},
  vista:"informe",done:TOTAL,guardaInf:true,sal:{k:"inf",e:"v1.0 guardado"},fue:[]}
];
/* Resuelve las plantillas del guion con el estado actual de la escuela. */
function plantilla(t){
 if(typeof t!=="string") return t;
 const vis=ESP.filter(e=>!e.oculta), val=vis.filter(e=>!(e.puesto<=2&&e.emprende<=2)), sel=vis.filter(e=>e.sel);
 const K=ARQ.reduce((a,c)=>a+(c.caps||[]).length,0), PK=PLAN.reduce((a,c)=>a+(c.caps||[]).length,0);
 const REFN=TRAZA.filter(x=>x.d==="se reformula").length, CONN=TRAZA.filter(x=>x.d==="se conserva").length;
 const DIF=VPC.dif||[], T=VPC.txt||{};
 const V={N:vis.length,VAL:val.length,SEL:sel.length,C:ARQ.length,K,PLANC:PLAN.length,PLANK:PK,PLAN:(ESCUELA&&ESCUELA.plan)||"plan vigente",
  REF:REFN,CON:CONN,CONT:CONN===0?"ninguna se conserva literal":(CONN===1?"1 se conserva literal":CONN+" se conservan literal"),OE:OE.length,DIF:DIF.length,DIFC:DIF.filter(d=>d.dec==="confirmado").length,
  DIFCOND:DIF.filter(d=>d.dec==="condicionado").length,DIFPAR:DIF.filter(d=>d.dec==="paridad").length,
  WPROP:palabras(VPC.prop),WT:palabras(VPC.t),WP:palabras(VPC.p),L:T.L??"—",SO:T.so!=null?pct(T.so):"—",AU:T.au!=null?pct(T.au):"—",
  C1:1+((VPC.cad&&VPC.cad.esp)||[]).length,AVISOS:GUION.avisos||"—",OFERTA:GUION.oferta||"—",CAMPO:(ESCUELA&&ESCUELA.campo)||"el campo",ESC:nombreEsc(),
  PLANARCH:S.planArchivo?"«"+S.planArchivo+"»":"el plan de estudios adjunto en Fuentes",
  TRZ:S.contrasteOmitido?"sin contraste con el plan, todas se declaran nuevas":REFN+" se reforman y "+(CONN===0?"ninguna se conserva literal":(CONN===1?"1 se conserva literal":CONN+" se conservan literal"))};
 return t.replace(/\{G:(\d+)\}/g,(m,k)=>GUION[k]||"").replace(/\{([A-Z0-9]+)\}/g,(m,k)=>V[k]!==undefined?V[k]:m);
}


/* ════════════ DATOS POR ESCUELA ════════════
   El tablero deja de traer los datos dentro: cada escuela es un registro
   en la base del artefacto. Lo que sigue es la carga, el volcado y el guardado. */
const clon=o=>JSON.parse(JSON.stringify(o));
/* La página corre dentro de un marco donde navigator.clipboard suele estar bloqueado.
   El textarea oculto con execCommand sigue funcionando ahí. */
/* El marco donde corre la página bloquea alert() y confirm(): confirm devuelve
   "no" en silencio y el botón parece muerto. Todo aviso se pinta en la página. */
function avisar(txt,tono){
 const o=document.getElementById("chat"); if(!o) return;
 addHTML(`<div class="humano" ${tono==="mal"?'style="border-left-color:#b91c1c;background:#fdeaea;color:#7f1d1d"':""}>${txt}</div>`);
 abajo();
}
function confirmar(host,txt,siTxt,onSi){
 const w=document.createElement("div");
 w.className="cfm";
 w.innerHTML=`<p>${txt}</p><div class="cfm-a">
   <button class="b-env sm" data-si>${siTxt}</button>
   <button class="b-out2" data-no>Cancelar</button></div>`;
 host.appendChild(w); abajo();
 w.querySelector("[data-si]").onclick=()=>{ w.remove(); onSi() };
 w.querySelector("[data-no]").onclick=()=>w.remove();
}
async function copiar(t){
 try{ if(navigator.clipboard&&window.isSecureContext){ await navigator.clipboard.writeText(t); return true } }catch(err){}
 try{
  const ta=document.createElement("textarea");
  ta.value=t; ta.setAttribute("readonly","");
  ta.style.cssText="position:fixed;top:0;left:0;width:1px;height:1px;opacity:0";
  document.body.appendChild(ta); ta.focus(); ta.select(); ta.setSelectionRange(0,t.length);
  const ok=document.execCommand("copy"); document.body.removeChild(ta); return ok;
 }catch(err){ return false }
}
/* El anfitrión concede las capacidades al abrir; fuera de él no existen. */
const usar=async()=>null;
const CLAVES=["esp","refs","desc","natj","expertos","puesto","emprende","plan","eq","eqman","extra",
 "sinEncaje","capSinEsp","arq","traza","smart","vdecl","coh","oe","vpc","vp","sus","narr","narrRef"];
let ESCUELA=null, ESCUELAS=[], DB=null, USUARIO=null, PUEDO=true, LOCAL=false, ultimo="";
let GUION={}, DEMO_AJ=null;
const CLAVE=cod=>"prospectiva-sim:"+cod;

/* Semilla de una escuela: los datos vienen de datos/<cod>.js. La capacidad instalada
   no viene puesta: se declara durante el recorrido, como en una escuela real. */
function semilla(cod){
 const D=DATOS[cod]; if(!D) return escuelaVacia();
 const d=clon(D); delete d.meta;
 d.vdecl={}; (d.esp||[]).forEach(e=>{ d.vdecl[e.n]={...e.v}; e.v={doc:0,cam:0,inf:0,dif:0,hab:0} });
 return d;
}
function escuelaVacia(){
 return {esp:[],refs:[],desc:{},natj:{},expertos:clon(EXPERTOS),puesto:{},emprende:{},
  plan:[],eq:{},eqman:{},extra:{},sinEncaje:[],capSinEsp:[],arq:[],traza:[],smart:[],vdecl:{},
  coh:[],oe:[],vpc:{t:"",p:"",s:[]},vp:[],vpa:null,sus:[],narr:{},narrRef:{},guion:{},demoAj:null};
}
/* Vuelca los datos de una escuela sobre las variables que usan las vistas. */
function aplicar(d){
 d=d||escuelaVacia();
 ESP=clon(d.esp||[]); REFS=clon(d.refs||[]); NAT_J=clon(d.natj||{}); EXPERTOS=clon((d.expertos&&d.expertos.length)?d.expertos:EXPERTOS_DEF);
 PUESTO=clon(d.puesto||{}); EMPRENDE=clon(d.emprende||{}); REQ=clon(d.req||{});
 PLAN=clon(d.plan||[]); EQ=clon(d.eq||{}); EQMAN=clon(d.eqman||{}); EXTRA=clon(d.extra||{});
 SIN_ENCAJE=clon(d.sinEncaje||[]); CAP_SIN_ESP=clon(d.capSinEsp||[]);
 ARQ=clon(d.arq||[]); TRAZA=clon(d.traza||[]); SMART=clon(d.smart||[]); VDECL=clon(d.vdecl||{});
 DECL=Object.assign({resp:"Dirección de la Escuela Profesional",fecha:new Date().toLocaleDateString("es-PE")},d.decl||{});
 COH=clon(d.coh||[]); OE=clon(d.oe||[]); VPC=clon(d.vpc||{t:"",p:"",s:[]});
 VP=clon(d.vp||[]); VPA=d.vpa?clon(d.vpa):null; SUS=clon(d.sus||[]); NARR=clon(d.narr||{}); NARRREF=clon(d.narrRef||{});
 GUION=clon(d.guion||{}); DEMO_AJ=d.demoAj?clon(d.demoAj):null; ACTA=d.acta?clon(d.acta):null; INTEGR=clon(d.integr||{}); INTEGRN=clon(d.integrNombre||{}); MEJORAS=clon(d.mejoras||{}); PLANMAPA=d.planMapa?clon(d.planMapa):null; PLANFUERA=clon(d.planFuera||[]);
 DESC={};
 ESP.forEach(e=>{
  if(e.puesto===undefined) e.puesto=PUESTO[e.n]??3;
  if(e.emprende===undefined) e.emprende=EMPRENDE[e.n]??2;
  if(!e.desc) e.desc=(d.desc||{})[e.n]||"";
  if(!e.req&&(d.req||{})[e.n]) e.req=(d.req||{})[e.n];
  if(!e.v) e.v={doc:0,cam:0,inf:0,dif:0,hab:0};
  if(!e.vagente&&(d.vagente||{})[e.n]) e.vagente=(d.vagente||{})[e.n];
  if(!e.vman) e.vman=(d.vman||{})[e.n]||{};
  if(!e.panel&&(d.panel||{})[e.n]) e.panel=(d.panel||{})[e.n];
  // los dos indicadores del agente rigen salvo que un experto los haya ajustado
  // los dos indicadores de Génesys no se precargan: se completan con «Evaluar con Génesys» en el formulario de capacidad
  DESC[e.n]=e.desc;
  calcular(e);
 });
 if(!Object.keys(VDECL).length) ESP.forEach(e=>{VDECL[e.n]={...e.v}});
 PLA=(ARQ.length?ARQ:PLAN).map((c,i)=>"C"+(i+1)+" · "+(ARQ[i]?ARQ[i].alias:c.n.split(" ").slice(0,2).join(" ")));
 if(!COH.length&&OE.length&&ARQ.length) COH=OE.map(()=>ARQ.map(()=>0));
 // si cambió el número de competencias (derivación real), la matriz de coherencia se ajusta: nunca apunta fuera de ARQ
 // los datos preparados de momentos posteriores (sustento, propuesta de valor, trazabilidad) se completan por competencia hasta que se ejecuten de verdad
 while(SUS.length<ARQ.length){ const c=ARQ[SUS.length], b=ESP.find(e=>c.esp&&c.esp[0]&&e.n===c.esp[0].n), A=b?b.ATR:0, V=(b&&b.VIA!=null)?b.VIA:0;
   SUS.push([A,V,"Potencial de la especialidad base (paso 1.1)","Capacidad declarada de la especialidad base",A>=65?(V>=60?"Oportunidad estratégica":"Oportunidad por desarrollar"):(V>=60?"Capacidad por activar":"Baja prioridad estratégica")]) }
 while(VP.length<ARQ.length) VP.push(["","",""]);
 if(COH.length&&ARQ.length&&COH.some(f=>f.length!==ARQ.length)) COH=OE.map((o,j)=>{ const f=(COH[j]||[]).slice(0,ARQ.length); while(f.length<ARQ.length) f.push(0); if(!f.includes(2)) f[0]=2; return f });
}
/* Recoge el estado actual para guardarlo. */
function capturar(){
 return {esp:ESP,refs:REFS,desc:DESC,natj:NAT_J,expertos:EXPERTOS,puesto:PUESTO,emprende:EMPRENDE,
  req:REQ,plan:PLAN,eq:EQ,eqman:EQMAN,extra:EXTRA,sinEncaje:SIN_ENCAJE,capSinEsp:CAP_SIN_ESP,
  arq:ARQ,traza:TRAZA,smart:SMART,vdecl:VDECL,decl:DECL,coh:COH,oe:OE,vpc:VPC,vp:VP,vpa:VPA,sus:SUS,
  narr:NARR,narrRef:NARRREF,guion:GUION,demoAj:DEMO_AJ,vman:Object.fromEntries(ESP.map(e=>[e.n,e.vman||{}])),panel:Object.fromEntries(ESP.filter(e=>e.panel).map(e=>[e.n,e.panel])),
  paso:{done:S.done,vista:S.vista,salE:S.salE,delphi:S.delphi,capOk:S.capOk,planArchivo:S.planArchivo,contrasteOmitido:S.contrasteOmitido,selOk:S.selOk,arqOk:S.arqOk,smartOk:S.smartOk,
   cruzado:S.cruzado,redactado:S.redactado,objetivos:S.objetivos,valor:S.valor,informe:S.informe,fichas:S.fichas,comparar:S.comparar,
   infVer:S.infVer,rev:S.rev,acto:S.acto,encIns:S.encIns,encExtra:S.encExtra,snaps:S.snaps,fue:S.fue,integr:S.integr,grupos:S.grupos,intPropuesto:S.intPropuesto}};
}
/* Foto del estado al empezar un paso (sin las otras fotos), para poder volver a su inicio. */
function fotoPaso(){ const c=clon(capturar()); delete c.paso.snaps; return {d:c,docs:clon(DOCS)} }
const ORDEN_PASOS=["tablero","arquitectura","equivalencia","perfil","valor","informe"];
const NOMBRE_PASO={tablero:"1.1 · Prospectiva de Especialidades",arquitectura:"1.2 · Definir Competencias",equivalencia:"1.3 · Matriz de Correspondencia",perfil:"1.4 · Definir Objetivos",valor:"1.5 · Propuesta de Valor",informe:"1.6 · Estudio Prospectivo"};
/* A qué paso pertenece cada acto: lo fija el momento que cierra el paso (su valor done), no la vista que muestra. */
function pasoDeActo(i){ const d=ACTOS[i]?ACTOS[i].done:99; return d<=6?"tablero":d<=10?"arquitectura":d<=13?"equivalencia":d<=16?"perfil":d<=18?"valor":"informe" }
function pasoActual(){ return S.acto<ACTOS.length?pasoDeActo(S.acto):"informe" }
function inicioDePaso(v){ return ACTOS.findIndex((x,i)=>pasoDeActo(i)===v) }
/* Reiniciar por pasos. */
function reiniciar(){
 if(!(ESCUELA&&ESCUELA.demo)) return;
 const v=pasoActual(), k=ORDEN_PASOS.indexOf(v);
 let destino=null;
 if(S.acto>inicioDePaso(v)&&S.snaps[v]) destino=v;
 else { for(let i=k-1;i>=0;i--){ if(S.snaps[ORDEN_PASOS[i]]){ destino=ORDEN_PASOS[i]; break } } }
 if(!destino||destino==="tablero"&&!S.snaps.tablero){ reiniciarDemo(); return }
 const f=S.snaps[destino], snaps=S.snaps;
 aplicar(f.d); aplicarPaso(f.d.paso); DOCS=clon(f.docs||[]);
 S.snaps=Object.fromEntries(Object.entries(snaps).filter(([kv])=>ORDEN_PASOS.indexOf(kv)<=ORDEN_PASOS.indexOf(destino)));
 S.det=null; S.f={dec:[]}; S.capForm=false; S.acta=false; S.zoom=null; S.mapOff=false; S.form=null; S.foco=null; S.comparar=false; S.expArq=[0,1,2,3,4,5,6,7];
 pintarCentro(S.done>0?destino:"inicio"); pintarTabs(); pintarPanel();
 document.getElementById("chat").innerHTML=""; saludo();
 const ant=ORDEN_PASOS[ORDEN_PASOS.indexOf(destino)-1];
 addHTML(`<div class="g-fila"><div><p><b>Volvimos al inicio del paso ${NOMBRE_PASO[destino]}.</b> Lo hecho en este paso se descartó; lo anterior se conserva. Pulse <b>Reiniciar</b> otra vez para volver ${ant?"al inicio del paso "+NOMBRE_PASO[ant]:"al momento cero"}.</p></div></div>`);
 botones(); marcar();
}
/* La demostración se recorre más de una vez: ante un director, ante el equipo,
   ante un cliente. Reiniciar la devuelve al momento cero, y sin capacidad
   declarada — como nace una escuela real. */
/* MODO VALIDACIÓN — herramienta de trabajo, no de demostración.
   Recorre los 23 momentos sobre una escuela VACÍA para revisar el estado
   inicial de cada pantalla. No toca ninguna escuela ni guarda nada. */
let VALID=false, VUELVE=null, COLS_PREV=null;
const VISTA_DE=[];
PROG.forEach((p,i)=>p.subs.forEach(()=>VISTA_DE.push(["tablero","arquitectura","equivalencia","perfil","valor","informe"][i])));
function momentoInfo(n){
 let idx=0; for(let i=0;i<PROG.length;i++){ if(n>=BASE[i]) idx=i }
 const p=PROG[idx];
 return {pasoId:p.id,pasoT:p.t,sub:p.subs[n-BASE[idx]]||"paso cerrado",vista:VISTA_DE[Math.min(n,TOTAL-1)]};
}
function pintarValBar(){
 const n=S.done, o=document.getElementById("vb-sel"), I=momentoInfo(Math.min(n,TOTAL-1));
 o.innerHTML=Array.from({length:TOTAL},(_,k)=>{const m=momentoInfo(k);
   return `<option value="${k}" ${k===n?"selected":""}>${k+1} de ${TOTAL} · ${m.pasoId} ${m.sub}</option>`}).join("");
 document.getElementById("vb-paso").textContent=`Paso ${I.pasoId} · ${I.pasoT}`;
 document.getElementById("vb-prev").disabled=n<=0;
 document.getElementById("vb-next").disabled=n>=TOTAL-1;
}
function irMomento(n){
 S.done=Math.max(0,Math.min(TOTAL-1,n));
 const I=momentoInfo(S.done);
 pintarCentro(S.done===0?"inicio":I.vista); pintarTabs(); pintarPanel(); pintarValBar();
 document.getElementById("chat").innerHTML=""; guiar();
 // guía del momento bajo la barra del recorrido: qué se produce aquí y quién lo hace
 const g=document.getElementById("vb-guia"); if(g){ const e=encargoActual();
  g.innerHTML=`<div class="vbg-k">${e?(e.tipo==="agente"?"Lo hace Génesys":(e.tipo==="guardar"?"Decisión de la Escuela · guardado":"Se resuelve en el tablero")):"Fase 1 recorrida"}</div>
   <div class="vbg-t">${e?e.t:"Fase 1 cerrada"}</div><div class="vbg-q">${e?e.q:"El estudio quedó guardado y versionado."}</div>`; g.hidden=false }
}
function modoValidacion(on){
 const bar=document.getElementById("val-bar");
 if(on){
  if(VALID) return;
  VUELVE=ESCUELA?ESCUELA.cod:null; VALID=true;
  ESCUELA={cod:"VAL",nombre:"Recorrido del método",plan:"—",demo:false,metodo:METODO};
  aplicar(escuelaVacia()); aplicarPaso({});
  bar.hidden=false; document.body.classList.add("validando");
  // pantalla completa: se pliegan la conversación y el panel, y se restauran al salir
  COLS_PREV=[document.body.classList.contains("p-off"),document.body.classList.contains("g-off")];
  document.body.classList.add("p-off","g-off"); if(typeof sinc==="function") sinc();
  document.getElementById("g-escuela").innerHTML="<b>Recorrido del método</b> · sin escuela cargada";
  document.getElementById("est-borr").textContent="Recorrido · no se guarda";
  pintarPie(); irMomento(0);
 } else {
  VALID=false; bar.hidden=true; document.body.classList.remove("validando");
  const g=document.getElementById("vb-guia"); if(g) g.hidden=true;
  if(COLS_PREV){ document.body.classList.toggle("p-off",COLS_PREV[0]); document.body.classList.toggle("g-off",COLS_PREV[1]); COLS_PREV=null; if(typeof sinc==="function") sinc() }
  if(VUELVE) cargarEscuela(VUELVE); else { ESCUELA=null; pintarCentro("inicio"); pintarPanel() }
  VUELVE=null;
 }
}
function reiniciarDemo(){
 if(!(ESCUELA&&ESCUELA.demo)) return;
 NUBE.quitar(ESCUELA.cod).catch(err=>avisar("No se pudo reiniciar en la nube: "+(err.message||err),"mal"));
 DOCS=[];
 aplicar(semilla(ESCUELA.cod)); aplicarPaso({});
 S.acto=0; S.det=null; S.f={dec:[]}; S.capForm=false; S.capAg=true; S.capTodas=false; S.capOk=false; S.planArchivo=null; S.contrasteOmitido=false;
 S.acta=false; S.decisionUpdated=false; S.zoom=null; S.mapOff=false; S.colsM=false; S.colsC=false; S.expDesc={};
 S.expComp=[]; S.expArq=[0,1,2,3,4,5,6,7]; S.comparar=false; S.foco=null; S.doc="fichas"; S.fichaC=0;
 S.fue=[]; S.integr=[]; S.snaps={}; S.grupos={}; S.intPropuesto=false;
 pintarCentro("inicio"); pintarTabs(); pintarPanel();
 document.getElementById("chat").innerHTML=""; saludo();
 addHTML(`<div class="g-fila"><div><p><b>Recorrido reiniciado.</b> Volvimos al momento cero: sin cartera, sin capacidad declarada y sin panel. Es el estado con el que nace cualquier escuela.</p></div></div>`);
 botones(); estadoGuardado("sin iniciar"); marcar();
}
function aplicarPaso(p){
 p=p||{}; S.decisionUpdated=false; S.done=p.done||0; S.vista=p.vista||"inicio"; S.salE=p.salE||{}; S.delphi=!!p.delphi; S.capOk=!!p.capOk; S.planArchivo=p.planArchivo||null; S.contrasteOmitido=!!p.contrasteOmitido; S.selOk=!!p.selOk;
 S.arqOk=!!p.arqOk; S.smartOk=!!p.smartOk; S.cruzado=!!p.cruzado; S.redactado=!!p.redactado;
 S.objetivos=!!p.objetivos; S.valor=!!p.valor; S.informe=!!p.informe; S.infVer=p.infVer||null;
 S.fichas=!!p.fichas; S.comparar=!!p.comparar; S.capForm=false; S.acta=false; S.actaV=false;
 S.rev=p.rev||{traza:false,smart:false}; S.acto=p.acto||0; S.encIns=p.encIns||{}; S.encExtra=p.encExtra||{}; S.snaps=p.snaps||{}; S.fue=p.fue||S.fue||[]; S.integr=p.integr||S.integr||[]; S.grupos=p.grupos||{}; S.intForm=false; S.intPropuesto=!!p.intPropuesto;
}
/* ════════════ DOCUMENTOS DE LA ESCUELA ════════════
   El plan de estudios se adjunta al inicio pero no se abre hasta el paso 1.2:
   adjuntar no es leer. El tablero lo sella y lo dice. */
const ROLES={
 plan:["Plan de estudios vigente","Se abre en el paso 1.2. En el 1.1 solo su página de identificación.",true],
 modelo:["Modelo educativo institucional","Marco de referencia de la carrera.",false],
 norma:["Normativa del ejercicio profesional","Norma sectorial, colegio profesional, registros.",false],
 sector:["Informe sectorial o de prospectiva","Sustento de tendencia y de inversión.",false],
 oferta:["Oferta académica comparada","Planes de otras universidades, para la diferenciación.",false],
 capacidad:["Declaración de capacidad instalada","Ficha firmada por la Dirección de la Escuela.",false],
 otro:["Otro documento","",false]};
let DOCS=[], ASSETS=null;
const pesoLegible=b=>b<1024?b+" B":(b<1048576?(b/1024).toFixed(0)+" KB":(b/1048576).toFixed(1)+" MB");
const selladoPlan=()=>S.done<7;   // se abre al contrastar (momento 8, opcional) del paso 1.2

async function cargarDocs(){
 DOCS=[];
 if(!ESCUELA) return;
 const b=NUBE.get(ESCUELA.cod); if(b&&b.docs) DOCS=b.docs;
}
function pintarDocs(){
 const o=document.getElementById("p-docs"); if(!o) return;
 if(!DOCS.length){ o.innerHTML=`<div class="p-vacio">Aún no hay documentos. El <b>plan de estudios vigente</b> se adjunta al inicio: no se abre hasta el paso 1.2.</div>`; return }
 o.innerHTML=DOCS.map(d=>{
  const R=ROLES[d.rol]||ROLES.otro;
  const sellado=R[2]&&selladoPlan();
  return `<div class="doc-f ${sellado?"sellado":""}">
   <div class="df-1"><span class="df-ic">${(d.ext||"DOC").toUpperCase().slice(0,4)}</span>
    <span class="df-n" title="${d.nombre}">${d.nombre}</span>
    ${PUEDO?`<button class="df-x" data-quitar="${d.id}" title="Quitar">✕</button>`:""}</div>
   <div class="df-2">${R[0]} · ${pesoLegible(d.peso||0)}</div>
   ${sellado?`<div class="df-sello">Sellado hasta el paso 1.2 · adjuntar no es leer</div>`
    :(R[1]?`<div class="df-3">${R[1]}</div>`:"")}
  </div>`}).join("");
 o.querySelectorAll("[data-quitar]").forEach(b=>b.onclick=()=>quitarDoc(b.dataset.quitar));
}
async function subirDoc(archivo,rol){
 if(!ESCUELA){ avisar("Elija primero una escuela.","mal"); return }
 const o=document.getElementById("b-subir"); o.disabled=true; o.textContent="Adjuntando…";
 try{
  /* Simulación: se registra el documento (nombre, tipo y peso); el archivo no sale del navegador. */
  const ext=(archivo.name.split(".").pop()||"doc").toLowerCase();
  const id="d"+Date.now().toString(36);
  const cuerpo={nombre:archivo.name,rol:rol,peso:archivo.size,ext:ext,url:"#",subido:new Date().toISOString()};
  DOCS.push(Object.assign({id},cuerpo));
  pintarPanel(); marcar();
  if(!(ESCUELA&&ESCUELA.demo)){ const ea=encargoActual(); if(ea&&ea.tipo==="agente"&&S.encIns[ea.done]) S.encIns[ea.done].push(r.id) }
  addHTML(`<div class="burbuja">Adjunté <b>${archivo.name}</b> como ${(ROLES[rol]||ROLES.otro)[0].toLowerCase()}.</div>`);
  if(!(ESCUELA&&ESCUELA.demo)) guiar();
  addHTML(`<div class="g-fila"><div><p>Recibido.${rol==="plan"?" Queda <b>sellado</b>: en el paso 1.1 solo leo su página de identificación —carrera, grado, título, modalidad y duración—. El plan se abre en el paso 1.2, cuando toca cruzarlo con las especialidades validadas.":" Lo uso como fuente del barrido y queda citado donde corresponda."}</p></div></div>`);
 }catch(err){
  avisar("No se pudo adjuntar <b>"+archivo.name+"</b>: "+((err&&err.message)||"formato no admitido")+
   ". Admite PDF, CSV, JSON, Markdown, texto e imágenes; un .docx hay que guardarlo como PDF.","mal");
 }
 o.disabled=false; o.textContent="＋ Adjuntar un documento";
}
async function quitarDoc(id){
 DOCS=DOCS.filter(d=>d.id!==id); pintarPanel(); marcar();
}
let tGuardar=null;
function marcar(){ if(tGuardar)clearTimeout(tGuardar); tGuardar=setTimeout(guardar,900) }
async function guardar(){
 if(VALID) return;
 if(!ESCUELA) return;
 const cuerpo=capturar(), txt=JSON.stringify(cuerpo);
 if(txt===ultimo) return;
 const cod=ESCUELA.cod;
 estadoGuardado("Guardando…");
 try{
  await NUBE.poner(cod,{d:cuerpo,docs:DOCS});
  if(ESCUELA&&ESCUELA.cod===cod){ ESCUELA.done=S.done; ultimo=txt; estadoGuardado("guardado") }
 }catch(err){
  console.error("[guardar]",err); estadoGuardado("Sin guardar · reintentando");
  avisar("No se pudo guardar en la nube: "+((err&&err.message)||err)+". Se reintenta en unos segundos.","mal");
  clearTimeout(tGuardar); tGuardar=setTimeout(guardar,5000);
 }
}
function estadoGuardado(t){
 const o=document.getElementById("est-borr"); if(!o) return;
 o.textContent = (t==="guardado" ? "Guardado · "+new Date().toLocaleTimeString("es-PE",{hour:"2-digit",minute:"2-digit"})
   : (t==="solo lectura" ? "Solo lectura" : t));
}
async function cargarEscuela(cod){
 const meta=ESCUELAS.find(x=>x.cod===cod); if(!meta) return;
 ESCUELA=meta;
 document.querySelectorAll('[data-volver-proyecto]').forEach(a=>a.href='programas.html?proyecto='+encodeURIComponent(meta.cod));
 let d=null,p=null;
 const b=NUBE.get(cod); if(b&&b.d){ d=b.d; p=b.d.paso||null }
 if(!d) d=semilla(cod);
 aplicar(d); aplicarPaso(p);
 try{ const u=new URL(location.href); u.searchParams.set("escuela",cod); history.replaceState(null,"",u.search) }catch(err){}
 await cargarDocs();
 ultimo=JSON.stringify(capturar());
 document.getElementById("bc-escuela").textContent=meta.nombre;
 document.getElementById("bc-plan").textContent=meta.plan||"Plan vigente";
 const viejo=meta.metodo&&meta.metodo!==METODO;
 document.getElementById("g-escuela").innerHTML=meta.demo?`<button class="b-reinicio" id="b-reinicio" title="Vuelve al inicio del paso en curso; otro clic, al paso anterior">↺ Reiniciar</button>`:"";
 const br=document.getElementById("b-reinicio"); if(br) br.onclick=reiniciar;
 pintarPie(); pintarSelector(); pintarTabs(); pintarPanel();
 const vv=(S.vista&&S.vista!=="inicio"&&VISTAS[S.vista])?S.vista:"tablero";
 pintarCentro(S.done>0?vv:"inicio");
 estadoGuardado(S.done?"guardado":"sin iniciar");
}
async function crearEscuela(cod,nombre,facultad,plan){
 const meta={cod,nombre,facultad:facultad||"",plan:plan||"",done:0,demo:false,
  metodo:METODO,creada:new Date().toISOString(),act:new Date().toISOString()};
 ESCUELAS.push(meta);
 return meta;
}
function pintarSelector(){
 const o=document.getElementById("sel-escuela"); if(!o) return;
 o.innerHTML=ESCUELAS.map(x=>`<option value="${x.cod}" ${ESCUELA&&x.cod===ESCUELA.cod?"selected":""}>${x.icono||""} ${x.nombre} · ${x.plan||"Plan vigente"}</option>`).join("");
}

/* ════════════ ESTADO ════════════ */
/* Lo indispensable para juzgar la capacidad instalada sin adivinar:
   dónde se ejerce, con qué equipo y qué perfil docente exige. */
let REQ={};
const REQL=["Dónde se ejerce","Con qué equipamiento","Qué docente exige"];
/* Tres indicadores los sabe la escuela y nadie más; dos salen de un barrido
   que ningún currriculista tiene tiempo de hacer a mano. */
const CAPFUENTE={doc:"escuela",cam:"escuela",inf:"escuela",dif:"agente",hab:"agente"};
const CAPBARRIDO={
 dif:"Génesys revisa los planes de estudio publicados de las universidades de la región, del país y de referentes del extranjero, y cuenta cuántas declaran la especialidad.",
 hab:"Génesys revisa la norma sectorial vigente, el reglamento del colegio profesional y los registros o certificaciones exigibles, y fecha cada fuente."};
const CAPAY={
 doc:{q:"¿Cuántos docentes de la plana pueden dictar y supervisar esta especialidad?",
  c:"Cuente solo a quienes tengan grado o especialidad en el campo <b>y</b> ejercicio profesional en él en los últimos cinco años. No cuente al docente que solo lo ha estudiado.",
  e:["Ningún docente de la plana tiene formación ni ejercicio en el campo. Habría que contratar desde cero.",
     "Un solo docente lo cubre. Si se va o enferma, la especialidad queda sin quién la dicte.",
     "Dos o tres docentes con experiencia, pero a alguno le falta el grado, la certificación o la práctica reciente.",
     "Tres o más con grado de maestría o especialidad y ejercicio vigente; la carga se puede repartir."]},
 cam:{q:"¿Dónde practica el estudiante y con qué respaldo formal?",
  c:"La pregunta no es si existe la institución, sino si existe <b>documento vigente</b> que declare cupos y tutor. Un contacto personal no es un convenio.",
  e:["No hay institución en la región donde pueda hacerse la práctica de esta especialidad.",
     "La institución existe y recibe estudiantes, pero por acuerdo verbal o contacto personal, sin documento.",
     "Hay convenio firmado, pero vencido, sin número de cupos o sin tutor designado.",
     "Convenio vigente, con cupos declarados por escrito y tutor de la institución asignado."]},
 inf:{q:"¿Con qué equipos e instalaciones se enseña hoy, sin comprar nada?",
  c:"Valore lo que está <b>operativo y calibrado</b> al día de hoy, no lo presupuestado. Contraste contra el tamaño del grupo: un solo equipo para cuarenta estudiantes es equipamiento mínimo.",
  e:["No hay laboratorio ni equipo; la especialidad solo podría enseñarse en teoría.",
     "Se enseña en aula y la práctica se simula o se observa; el equipo se alquila o se presta.",
     "Laboratorio con parte del equipo propio; lo que falta se comparte con otra escuela o se terceriza.",
     "Equipamiento propio, operativo y suficiente para el número de estudiantes del grupo."]},
 dif:{q:"¿Cuántas universidades ya ofrecen esta especialidad, en la región, el país y fuera de él?",
  c:"Cuente solo las que la <b>declaran en su plan de estudios</b>, no las que dictan un curso suelto. Menos competidores, más alto el nivel. <b>Este barrido lo levanta Génesys</b>: revisar los planes de todas las universidades a mano sería el cuello de botella del paso.",
  e:["Todas o casi todas las universidades de la región ya la ofrecen: no diferencia nada.",
     "Varias la ofrecen; entrar significa competir por el mismo postulante.",
     "Solo una o dos la ofrecen en la región; hay espacio para posicionarse.",
     "Ninguna la ofrece en la región o en el país: sería la primera."]},
 hab:{q:"¿La norma habilita al titulado de esta carrera para ejercer la especialidad, y puede acreditarlo?",
  c:"Tres preguntas en orden: <b>¿alguna norma reserva esa función a otra profesión?</b> Si sí, es 1. <b>¿Alguna norma la habilita expresamente para esta carrera?</b> Si no hay ninguna —ni a favor ni en contra—, es 2: se ejerce en vacío regulatorio y una norma futura puede cerrarlo. <b>¿Se exige o se reconoce un registro o certificación adicional que el egresado pueda obtener?</b> Si sí, es 4; si basta el título y la colegiatura, es 3.",
  e:["Norma vigente reserva esa función a otra profesión o excluye al titulado de esta carrera. Ejercerla sería ilegal.",
     "Ninguna norma la prohíbe ni la habilita: vacío regulatorio. Se ejerce hoy, pero sin respaldo si la norma cambia.",
     "Norma o reglamento del colegio profesional habilita expresamente al titulado; el título y la colegiatura bastan.",
     "Además del título, existe registro, certificación o competencia declarada en norma que el egresado puede obtener y que el empleador exige o reconoce."]}
};
const CAPMETA={doc:"Docentes con el perfil",cam:"Campos de práctica con convenio",inf:"Infraestructura y equipamiento",
 dif:"Diferenciación frente a la competencia",hab:"Habilitación normativa"};
const SALIDAS=[["esp","TAB","Especialidades Validadas","1.1"],["comp","TAB","Definir Competencias","1.2"],
 ["corr","TAB","Matriz de Correspondencia","1.3"],["perf","MD","Objetivos Educacionales","1.4"],
 ["vlr","MD","Propuesta de Valor","1.5"],["inf","DOC","Estudio Prospectivo de la Carrera Profesional","1.6"]];
const S={acto:0,done:0,vista:"inicio",delphi:false,selOk:false,arqOk:false,smartOk:false,salE:{},fue:[],
 f:{dec:[]},arm:null,integr:[],expComp:[],ay:null,mapOff:false,pick:null,form:null,det:null,zoom:null,colsM:false,colsC:false,edit:null,fichaC:0,leg:null,capForm:false,acta:false,verPlan:false,capAy:null,capAg:true,capOk:false,planArchivo:null,contrasteOmitido:false,snaps:{},grupos:{},intForm:false,intPropuesto:false,capTodas:false,expArq:[0,1,2,3],comparar:false,foco:null,docInd:false,doc:"fichas",infVer:null,rev:{traza:false,smart:false},coh:false,expDesc:{},
 cruzado:false,redactado:false,objetivos:false,fichas:false,valor:false,informe:false,encIns:{},encExtra:{},actaV:false,rubrica:false};
const TABS=[["tablero","1.1 Investigación"],["arquitectura","1.2 Competencias"],["equivalencia","1.3 Correspondencia"],["perfil","1.4 Objetivos"],["valor","1.5 Valor"],["informe","1.6 Estudio"]];
const ABRE={tablero:1,arquitectura:6,equivalencia:10,perfil:13,valor:16,informe:18};
const VISTA_SAL={esp:"tablero",corr:"equivalencia",comp:"arquitectura",perf:"perfil",vlr:"valor",inf:"informe"};
const T={
 inicio:["NUT · Prospectiva de Especialidades","Fase 1 · De la cartera del campo a la arquitectura","Consola de Prospectiva de Especialidades",
  "Conducir los seis pasos de la Fase 1: de la cartera del campo al Estudio Prospectivo.","Esperando la primera instrucción"],
 tablero:["NUT · Investigación de Especialidades","Paso 1.1 · Investigación del campo profesional y selección","Investigación de Especialidades",
  "Decidir qué especialidades entran al rediseño, cruzando la <b>potencial del mercado laboral</b> con la <b>capacidad instalada</b>. Haga clic en las etiquetas para filtrar. <b>Solo las seleccionadas pasan al paso 1.2</b>.","Propuesta de Génesys · decisión de escuela"],
 equivalencia:["NUT · Matriz de Correspondencia","Paso 1.3 · Especialidades validadas × competencias definidas","Matriz de Correspondencia",
  "Ver si cada especialidad seleccionada <b>ya está cubierta</b> por una competencia o una capacidad del plan. Lo que no encaja es lo único que obliga a cambiar algo.","Cruce de las especialidades validadas"],
 arquitectura:["NUT · Definir Competencias","Paso 1.2 · Derivadas del campo, contrastadas con el plan, validadas y guardadas","Definir Competencias",
  "Redactar cada competencia y sus capacidades, validar la redacción con los criterios SMART, revisar la trazabilidad y <b>guardar</b> — todo en una sola pantalla.","Decisión de escuela"],
 perfil:["NUT · Definir Objetivos","Paso 1.4 · Una sola vez para toda la carrera","Definir Objetivos",
  "Formular los <b>objetivos educacionales</b>: lo que el egresado logra a 3–5 años, cada uno sostenido por una competencia.","Una sola vez por escuela"],
 valor:["NUT · Propuesta de Valor","Paso 1.5 · Una sola vez para toda la carrera","Propuesta de Valor",
  "Declarar <b>qué distingue a esta carrera</b> de las demás que ofrecen lo mismo, y la <b>promesa</b> que la escuela puede sostener ante un postulante. Se deriva de lo decidido en 1.1 y 1.3, no se inventa.","Una sola vez por escuela"],
 informe:["NUT · Estudio Prospectivo","Paso 1.6 · Fichas técnicas y Estudio Prospectivo de la Carrera Profesional","Estudio Prospectivo de la Carrera",
  "Consolidar los cinco pasos anteriores en los <b>documentos de aprobación</b>: una ficha técnica por competencia y el Estudio Prospectivo de la Carrera Profesional, versionado. Es la primera venta del rediseño ante los directivos.","Documentos generados"]
};

/* ════════════ TABLERO ════════════ */
const etq=(k,v)=>`<span class="et v${v}">${ET[k][v-1]}</span>`;
const chipDec=d=>`<span class="chip ${DEC[d][0]}">${DEC[d][1]}</span>`;
const VER={"Esencial":"c-esen","Esencial · sin unanimidad":"c-esen2","No esencial":"c-noesen","Sin consenso · ronda 2":"c-r2"};
const verChip=v=>`<span class="chip ${VER[v]||"c-prop"}">${v}</span>`;
const att=s=>String(s==null?"":s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;");
const REGLAS_G=["Modo de ejercicio declarado","Ninguna tecnología como especialidad","Fuente fechada y enlace verificable","Crecimiento con serie contada","Alcance del título","Sello del plan intacto","Capacidad sin inventar"];
function resumenActa(){
 const L=ESP.filter(e=>!e.oculta&&!noValorada(e));
 if(L.some(e=>e.panel&&e.panel.ver)){
  const c=k=>L.filter(e=>(e.panel||{}).ver===k).length;
  const sc=c("Sin consenso · ronda 2");
  return `De las ${L.length} valoradas, <b>${c("Esencial")+c("Esencial · sin unanimidad")}</b> salieron esenciales, <b>${c("No esencial")}</b> no esenciales y <b>${sc}</b> ${sc===1?"queda":"quedan"} sin consenso: ${sc===1?"pasaría":"pasarían"} a una ronda 2 si la Dirección lo pide.`;
 }
 const b=L.filter(e=>{const p=panelDe(e);return p.icvi<0.83||p.ac<75}).length;
 return b?b+(b===1?" especialidad queda":" especialidades quedan")+" bajo umbral y pasarían a una ronda 2 si la Dirección lo pide.":"Ninguna especialidad queda bajo umbral.";
}
function actaExtra(){
 if(!ACTA) return "";
 const g=ACTA.guardian||{}, ab=ACTA.abiertas||{};
 const preg=[["faltan","¿Qué especialidad real del campo falta?"],["integrar","¿Qué candidatas deberían integrarse?"],["noPuesto","¿Cuál no es puesto ni negocio?"]];
 const items=k=>Object.entries(ab[k]||{}).flatMap(([rol,l])=>l.map(t=>`<li><b>${rol}</b> ${t}</li>`)).join("");
 return `<div class="acta-x">
  <div class="acta-g"><div class="acta-xh"><b>Guardián metodológico</b><em>verifica las siete reglas del método y no califica · ${(g.reglas||[]).filter(x=>/No/.test(x.veredicto)).length} por corregir</em></div>
   ${(g.reglas||[]).map(x=>`<div class="g-r"><div class="g-rh"><i>${x.n}</i><b>${REGLAS_G[x.n-1]||""}</b><span class="chip ${/No/.test(x.veredicto)?"c-r2":"c-esen"}">${x.veredicto}</span></div><p>${x.hallazgo}</p></div>`).join("")}
   ${(g.observaciones||[]).length?`<details class="acta-d"><summary>Observaciones del guardián · ${g.observaciones.length}</summary><ul>${g.observaciones.map(o=>`<li>${o}</li>`).join("")}</ul></details>`:""}
  </div>
  <div class="acta-q"><div class="acta-xh"><b>Preguntas abiertas de la ronda 1</b><em>cada experto responde por separado; lo que proponen dos o más entra a la ronda 2</em></div>
   ${preg.map(p=>{const n=Object.values(ab[p[0]]||{}).reduce((s,l)=>s+l.length,0); return `<details class="acta-d"><summary>${p[1]} <span>${n}</span></summary><ul>${items(p[0])}</ul></details>`}).join("")}
  </div></div>`;
}

function pasaFiltro(e){ return !S.f.dec.length||S.f.dec.includes(e.dec) }
const noValorada=e=>e.puesto<=2&&e.emprende<=2;
/* orden de la tabla: primero las que tienen prioridad (capacidad declarada), de mayor a menor; luego las demás por potencial; al final las no valoradas */
const grupoOrden=e=>noValorada(e)?2:(capDeclarada()&&e.VIA===null?1:0);
const listadas=()=>ESP.filter(e=>!e.oculta).filter(pasaFiltro).sort((a,b)=>grupoOrden(a)-grupoOrden(b)||b.PRI-a.PRI||b.ATR-a.ATR);

function faceta(tit,campo,ops,etk){
 const f=S.f[campo];
 return `<div class="fac-fila"><div class="fac-tit">${tit}</div><div class="fac-ops">
  ${ops.map(o=>{const val=o.v, n=ESP.filter(e=>!e.oculta&&(campo==="gran"?(e.fn>=4?"si":"no")===val:e[campo]===val)).length;
   return `<button class="fac ${etk?"v"+val:""} ${f.includes(val)?"on":""}" data-fac="${campo}" data-val="${val}">${o.t}<span class="c">${n}</span></button>`}).join("")}
 </div></div>`;
}

const QN=["BAJA PRIORIDAD ESTRATÉGICA","CAPACIDAD POR ACTIVAR","OPORTUNIDAD POR DESARROLLAR","OPORTUNIDAD ESTRATÉGICA"];
/* Sin capacidad declarada no hay eje horizontal: se ordena por potencial de mercado. */
function ranking(L){
 const M=Math.max(1,...L.map(e=>e.ATR))||100;
 return `<div class="mapa-caja">
  <div class="mapa-cab"><div><div class="mapa-tit">Orden por potencial del mercado laboral</div>
   <div class="mapa-sub">La escuela todavía no ha declarado su capacidad instalada, así que no hay segundo eje.
    Con esa declaración este bloque se convierte en el <b>mapa de decisión</b> de cuatro segmentos.</div></div>
   <div class="mapa-acc"><button class="min" id="abre-cap2">Declarar la capacidad instalada</button>
    </div></div>
  <div class="rk-l">${L.map((e,i)=>`<div class="rk-r ${noValorada(e)?"nv":(e.ATR>=65?"alto":"")}">
    <span class="rk-n">${i+1}</span><span class="rk-t">${e.n}</span>
    ${noValorada(e)?`<span class="rk-b"></span><span class="rk-v nv">—</span>`
      :`<span class="rk-b"><i style="width:${Math.round(e.ATR/M*100)}%"></i></span><span class="rk-v">${e.ATR}</span>`}
    <span class="rk-d">${S.delphi?chipDec(e.dec):""}</span></div>`).join("")}</div>
  <div class="mapa-n">Corte de potencial: 65. Por encima de ese umbral el campo sostiene la especialidad; qué hace la escuela con ella lo decide la capacidad instalada.</div>
 </div>`;
}
function mapa(L,vert,dashboard=false){
 if(!capDeclarada()) return ranking(L);
 L=L.filter(e=>e.VIA!==null);
 if(!L.length) return ranking(listadas());
 const W=vert?600:660, H=vert?600:400, P={t:20,r:vert?36:22,b:44,l:58};
 const CX=60,CY=65;                                   // cortes de decisión
 // plano cartesiano completo (0–100 en los dos ejes) con los cuatro segmentos del mismo tamaño:
 // cada eje se dibuja en dos tramos, antes y después del corte, y el corte cae en el centro.
 const z=S.zoom;
 let x0=0,x1=100,y0=0,y1=100;
 if(z){ x0=z[0]?CX:0; x1=z[0]?100:CX; y0=z[1]?CY:0; y1=z[1]?100:CY; }
 const tramo=(v,a,b,c)=>{ v=Math.max(a,Math.min(b,v)); if(z) return (v-a)/(b-a); return v<=c?(v-a)/(c-a)*.5:.5+(v-c)/(b-c)*.5 };
 const px=v=>P.l+tramo(v,x0,x1,CX)*(W-P.l-P.r);
 const py=v=>H-P.b-tramo(v,y0,y1,CY)*(H-P.t-P.b);
 const rr=i=>5+Math.max(0,(i-10))/90*7;
 // anti-solape: repulsión suave, desplazamiento acotado para no falsear la lectura
 const pts=L.map(e=>({e,x:px(e.VIA),y:py(e.ATR),ox:px(e.VIA),oy:py(e.ATR),r:rr(e.IMP)}));
 for(let it=0;it<90;it++){
  for(let a=0;a<pts.length;a++) for(let b=a+1;b<pts.length;b++){
   const A=pts[a],B=pts[b], dx=B.x-A.x, dy=B.y-A.y;
   const d=Math.hypot(dx,dy)||.01, min=A.r+B.r+5;
   if(d<min){ const f=(min-d)/d*.5; A.x-=dx*f*.5; A.y-=dy*f*.5; B.x+=dx*f*.5; B.y+=dy*f*.5 }
  }
  pts.forEach(p=>{ const dx=p.x-p.ox, dy=p.y-p.oy, d=Math.hypot(dx,dy), max=22;
   if(d>max){ p.x=p.ox+dx/d*max; p.y=p.oy+dy/d*max }
   p.x=Math.max(P.l+p.r,Math.min(W-P.r-p.r,p.x)); p.y=Math.max(P.t+p.r,Math.min(H-P.b-p.r,p.y)) });
 }
 const ejeX=[], ejeY=[];
 for(let v=Math.ceil(x0/10)*10; v<=Math.min(100,x1); v+=10) ejeX.push(v);
 for(let v=Math.ceil(y0/10)*10; v<=Math.min(100,y1); v+=10) ejeY.push(v);
 const dentro=(v,a,b)=>v>=a&&v<=b;
 const QB=[]; /* cajas de los títulos de cuadrante: los nombres de los puntos no se dibujan encima */
 const qz=(qx,qy,tit,sub,col,col2)=>{
  const xa=qx?Math.max(CX,x0):x0, xb=qx?x1:Math.min(CX,x1);
  const ya=qy?Math.max(CY,y0):y0, yb=qy?y1:Math.min(CY,y1);
  if(xb<=xa||yb<=ya) return "";
  const X=px(xa),Y=py(yb),Wq=px(xb)-px(xa),Hq=py(ya)-py(yb);
  const n=L.filter(e=>dentro(e.VIA,xa,xb)&&dentro(e.ATR,ya,yb)).length;
  { const wq=Math.max((tit.length+5)*(vert?6.6:7.6),sub.length*(vert?4.6:5.4))+12; QB.push({x:qx?X+Wq-wq:X,y:Y,w:wq,h:vert?30:34}) }
  return `<g class="qd" data-q="${qx?1:0}|${qy?1:0}" style="cursor:zoom-in">
    <rect x="${X}" y="${Y}" width="${Wq}" height="${Hq}" fill="${col}"/>
    <text x="${qx?X+Wq-9:X+9}" y="${Y+16}" text-anchor="${qx?"end":"start"}" font-size="${vert?9.5:11}" font-weight="700" fill="${col2}" letter-spacing=".04em">${tit}<tspan font-size="10" font-weight="400" opacity=".8"> · ${n}</tspan></text>
    <text x="${qx?X+Wq-9:X+9}" y="${Y+(vert?26:29)}" text-anchor="${qx?"end":"start"}" font-size="${vert?8:9.5}" fill="${col2}" opacity=".75">${sub}</text></g>`;
 };
 const segmentos=[
  {x:0,y:1,t:QN[2],c:"#a3762a",d:"Potencial alto · capacidad por desarrollar"},
  {x:1,y:1,t:QN[3],c:"#15803d",d:"Potencial alto · capacidad instalada"},
  {x:0,y:0,t:QN[0],c:"#64748b",d:"Potencial bajo · capacidad baja"},
  {x:1,y:0,t:QN[1],c:"#1d4ed8",d:"Potencial bajo · capacidad instalada"}
 ];
 return `<div class="mapa-caja ${dashboard?"decision-map":""}">
 ${dashboard?(()=>{ const T=ESP.filter(e=>!e.oculta), f=S.f.dec;
     return `<div class="dec-filtros"><button class="dec-f ${f.length?"":"on"}" id="f-reset">Todas <b>${T.length}</b></button>${["nucleo","desarrollar","certificacion","vigilancia","encargo","recurso","descartar","potencial"].map(k=>{const n=T.filter(e=>e.dec===k).length;
      return `<button class="dec-f ${f.includes(k)?"on":""}" data-fac="dec" data-val="${k}" ${n?"":"disabled"}><i style="background:${DEC[k][2]}"></i>${k==="potencial"?"Potencial":DEC[k][1]} <b>${n}</b></button>`}).join("")}</div>` })():""}
  <div class="mapa-cab"><div><div class="mapa-tit">Mapa de decisión${z?` · zoom en ${QN[(z[1]?2:0)+(z[0]?1:0)]}`:""}</div>
   </div>
   <div class="mapa-acc">${z?`<button class="min" id="unzoom">↺ Ver los cuatro</button>`:""}
    </div></div>
  ${dashboard?'<div class="decision-plot">':""}<svg viewBox="0 0 ${W} ${H}" width="100%" style="display:block;margin:0 auto" id="svg-mapa">
   ${qz(0,1,QN[2],"alta demanda · capacidad por construir","#fdf6e9","#a3762a")}
   ${qz(1,1,QN[3],"alta demanda · capacidad instalada","#eef7f1","#15803d")}
   ${qz(0,0,QN[0],"baja demanda · baja capacidad","#f6f7f8","#7c848d")}
   ${qz(1,0,QN[1],"baja demanda · capacidad instalada","#eef2fb","#1d4ed8")}
   <rect x="${P.l}" y="${P.t}" width="${W-P.l-P.r}" height="${H-P.t-P.b}" fill="none" stroke="#AFC0D4"/>
   ${dentro(CX,x0,x1)?`<line x1="${px(CX)}" y1="${P.t}" x2="${px(CX)}" y2="${H-P.b}" stroke="#AFC0D4" stroke-dasharray="4 3"/>`:""}
   ${dentro(CY,y0,y1)?`<line x1="${P.l}" y1="${py(CY)}" x2="${W-P.r}" y2="${py(CY)}" stroke="#AFC0D4" stroke-dasharray="4 3"/>`:""}
   ${ejeX.map(v=>`<text x="${px(v)}" y="${H-P.b+15}" text-anchor="middle" font-size="9.5" fill="#9ca3af">${v}</text>`).join("")}
   ${ejeY.map(v=>`<text x="${P.l-8}" y="${py(v)+3}" text-anchor="end" font-size="9.5" fill="#9ca3af">${v}</text>`).join("")}
   <text x="${(P.l+W-P.r)/2}" y="${H-5}" text-anchor="middle" font-size="10" fill="#5B6470">Capacidad instalada →</text>
   <text x="14" y="${(P.t+H-P.b)/2}" text-anchor="middle" font-size="10" fill="#5B6470" transform="rotate(-90 14 ${(P.t+H-P.b)/2})">Potencial del mercado laboral →</text>
   ${pts.map((p,i)=>{const e=p.e, c=S.delphi?DEC[e.dec][2]:"#003366", hueco=S.delphi&&["encargo","descartar","recurso"].includes(e.dec);
     const mov=Math.hypot(p.x-p.ox,p.y-p.oy)>3;
     return `${mov?`<line x1="${p.ox.toFixed(1)}" y1="${p.oy.toFixed(1)}" x2="${p.x.toFixed(1)}" y2="${p.y.toFixed(1)}" stroke="#c9d3dd" stroke-width="1"/>`:""}
      <circle ${dashboard&&S.f.dec.length&&!S.f.dec.includes(e.dec)?'opacity="0.15"':""} cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="${p.r.toFixed(1)}"
      fill="${hueco?"#fff":c}" fill-opacity="${hueco?1:.85}" stroke="${hueco?"#9ca3af":"#fff"}" stroke-width="2"
      ${e.dec==="descartar"&&S.delphi?'stroke-dasharray="3 2"':""} data-pt="${i}" style="cursor:pointer"/>`}).join("")}
   ${dashboard?(()=>{ /* nombre junto a cada punto, letra pequeña, colocado donde no choque con otro nombre ni con otro punto */
     const FS=8, cw=FS*0.53, puestos=[], out=[];
     const corto=n=>n.length>34?n.slice(0,32).trim()+"…":n;
     [...pts].sort((p,q)=>q.e.PRI-p.e.PRI).forEach(p=>{ const t=corto(p.e.n), w=t.length*cw, h=FS+2;
       const cand=[[p.x+p.r+3,p.y-h/2],[p.x-p.r-3-w,p.y-h/2],[p.x-w/2,p.y-p.r-2-h],[p.x-w/2,p.y+p.r+2]];
       [1,2,3].forEach(k=>[-1,1].forEach(s=>{ const dy=s*k*(h+1)-h/2; cand.push([p.x+p.r+3,p.y+dy],[p.x-p.r-3-w,p.y+dy]) }));
       [1,2].forEach(k=>cand.push([p.x-w/2,p.y-p.r-2-h-k*(h+1)],[p.x-w/2,p.y+p.r+2+k*(h+1)]));
       const cabe=bb=>!(bb.x<P.l+2||bb.x+w>W-P.r-2||bb.y<P.t+2||bb.y+h>H-P.b-2);
       const sobre=(bb,arr)=>arr.some(o=>bb.x<o.x+o.w&&bb.x+bb.w>o.x&&bb.y<o.y+o.h&&bb.y+bb.h>o.y);
       const tocaPt=bb=>pts.some(q=>q.x>bb.x-q.r&&q.x<bb.x+bb.w+q.r&&q.y>bb.y-q.r&&q.y<bb.y+bb.h+q.r);
       let b=null;
       for(const prueba of [bb=>!sobre(bb,QB)&&!sobre(bb,puestos)&&!tocaPt(bb), bb=>!sobre(bb,puestos)&&!tocaPt(bb), bb=>!sobre(bb,puestos)]){
        for(const c of cand){ const bb={x:c[0],y:c[1],w,h}; if(cabe(bb)&&prueba(bb)){ b=bb; break } } if(b) break }
       if(!b) return; puestos.push(b);
       const dim=S.f.dec.length&&!S.f.dec.includes(p.e.dec);
       { const nx=Math.max(b.x,Math.min(p.x,b.x+b.w)), ny=Math.max(b.y,Math.min(p.y,b.y+b.h)), d=Math.hypot(nx-p.x,ny-p.y);
         if(d>p.r+6){ const k=p.r/d; out.push(`<line x1="${(p.x+(nx-p.x)*k).toFixed(1)}" y1="${(p.y+(ny-p.y)*k).toFixed(1)}" x2="${nx.toFixed(1)}" y2="${ny.toFixed(1)}" stroke="#9ca3af" stroke-width=".8" ${dim?'opacity="0.2"':""} style="pointer-events:none"/>`) } }
       out.push(`<text x="${b.x.toFixed(1)}" y="${(b.y+FS).toFixed(1)}" font-size="${FS}" fill="#374151" ${dim?'opacity="0.2"':""} style="pointer-events:none" paint-order="stroke" stroke="#fff" stroke-width="2.5">${t}</text>`) });
     return out.join("") })():""}
   </svg>${dashboard?`</div><div hidden aria-label="Segmentos del mapa">${segmentos.map(q=>{const n=L.filter(e=>(e.VIA>=CX?1:0)===q.x&&(e.ATR>=CY?1:0)===q.y).length;return `<button class="decision-segment" data-q="${q.x}|${q.y}" style="--segment-color:${q.c}" aria-pressed="${!!z&&z[0]===q.x&&z[1]===q.y}"><span class="decision-segment-top"><span>${q.t}</span><b>${n}</b></span><span class="decision-segment-description">${q.d}</span><span class="decision-segment-action">${z&&z[0]===q.x&&z[1]===q.y?"Segmento ampliado":"Ampliar segmento ↗"}</span></button>`}).join("")}</div><div class="decision-guide"><span><i></i>Cada círculo representa una especialidad</span><span>Su tamaño indica el impacto</span></div>`:""}
  ${capCompleta()?"":`<div class="mapa-n"><b>Solo aparecen las ${L.length} con capacidad declarada</b>; las demás siguen en la tabla como «sin declarar».</div>`}
  <div class="tip" id="tip"></div></div>`;
}
/* Rúbrica de evaluación: pesos de cada variable y subvariable, y las cuatro escalas. Se abre desde «Ver rúbrica». */
function rubricaHTML(){
 const fila=(k,n,p)=>`<tr><th scope="row"><b>${n}</b><span class="rb-p">Peso interno <strong>${p}</strong></span></th>${[0,1,2,3].map(i=>`<td>${ET[k][i]}</td>`).join("")}</tr>`;
 const bloque=(t,p,q,filas)=>`<section class="rb-b"><div class="rb-h"><b>${t}</b><span>${p} del potencial</span><p>${q}</p></div>
  <div class="rb-scroll" role="region" aria-label="Rúbrica de ${t}: niveles de evaluación" tabindex="0"><table class="rb-t"><caption class="rb-sr">${t}: subvariables, pesos internos y descripción de los cuatro niveles</caption><colgroup><col class="rb-col-variable"><col span="4"></colgroup><thead><tr><th scope="col">Subvariable<span class="rb-th-note">Criterio y ponderación</span></th>${[1,2,3,4].map(n=>`<th scope="col"><span class="rb-level">${n}</span> Nivel ${n}</th>`).join("")}</tr></thead><tbody>${filas.join("")}</tbody></table></div></section>`;
 return `<div class="rubrica">
  <div class="rb-intro"><div><span class="rb-eyebrow">GUÍA DE EVALUACIÓN</span><h3>Rúbrica del potencial de mercado</h3></div><span class="rb-scale">Escala de 1 a 4</span></div>
  <div class="rb-f"><p>Asigna a cada subvariable el nivel que mejor la describe. Los pesos internos ponderan cada dimensión; el resultado se convierte en un puntaje de <strong>0 a 100</strong>.</p><div class="rb-formula" aria-label="Ponderación del potencial del mercado"><span>Demanda <b>35 %</b></span><span>Tendencia <b>30 %</b></span><span>Impacto <b>20 %</b></span><span>Sostenibilidad <b>15 %</b></span></div></div>
  ${bloque("Demanda","35 %","¿Existe hoy trabajo pagado para esa especialidad?",[fila("vol","Volumen de puestos","35 %"),fila("amp","Amplitud de empleadores","20 %"),fila("esc","Escasez","20 %"),fila("rem","Remuneración","15 %"),fila("for","Formalidad","10 %")])}
  ${bloque("Tendencia","30 %","¿Hacia dónde va el campo en cinco años?",[fila("cre","Crecimiento observado","30 %"),fila("nor","Impulso normativo comprometido","25 %"),fila("inv","Inversión y adopción sectorial","20 %"),fila("dem","Driver demográfico o estructural","15 %"),fila("tec","Madurez de la tecnología habilitante","10 %")])}
  ${bloque("Impacto","20 %","¿Qué se pierde si nadie ejerce bien?",[fila("cri","Criticidad","60 %"),fila("alc","Alcance","40 %")])}
  ${bloque("Sostenibilidad","15 %","¿Cuánto del ejercicio resiste la automatización?",[fila("sos","Resistencia a la automatización","100 %")])}
 </div>`;
}
/* el sustento se lee sin los marcadores internos de evidencia ([E-L11], [P-S]…): las citas numeradas van en la cabecera de cada tarjeta */
const sinMarcas=t=>(t||"").replace(/\s*\[(?:[A-Z](?:-[A-Za-z0-9]+)?|método)\](\s*\[(?:[A-Z](?:-[A-Za-z0-9]+)?|método)\])*/g,"").replace(/\s+([.,;:])/g,"$1");
function detalle(e,q){
 const cabe=t=>`<div class="det-h">${t}</div>`;
 const tarj=(t,cit,filas)=>`<div class="sub-c"><h5>${t} <span class="cts">${citas(cit)}</span></h5>
   ${filas.map(x=>`<div class="sub-l"><span>${x[1]} <small>${x[2]}</small></span>${etq(x[0],x[3])}</div>`).join("")}</div>`;
 const R=refsDe(e);
 let cuerpo="";
 if(q==="atr") cuerpo=`<div class="pot-h">
   <div class="pot-n"><span>Potencial del mercado laboral</span><b>${e.ATR}<small>/100</small></b></div>
   <div class="pot-f"><div class="pot-bar">${[["Demanda",35,e.DEM,"#1f4e8c"],["Tendencia",30,e.TEN,"#2f6fb5"],["Impacto",20,e.IMP,"#5b8fd0"],["Sostenibilidad",15,e.SOS,"#9dbbe3"]].map(v=>`<i style="flex:${v[1]};background:${v[3]}" title="${v[0]} · peso ${v[1]} % · ${v[2]}/100"></i>`).join("")}</div>
    <div class="pot-l">${[["Demanda",35,e.DEM,"#1f4e8c"],["Tendencia",30,e.TEN,"#2f6fb5"],["Impacto",20,e.IMP,"#5b8fd0"],["Sostenibilidad",15,e.SOS,"#9dbbe3"]].map(v=>`<span style="flex:${v[1]}"><em style="background:${v[3]}"></em>${v[0]} <b>${v[1]} %</b></span>`).join("")}</div></div>
  </div>`+
  `<div class="sub-g">
   ${tarj(`Demanda · ${e.DEM}`,R.dem,[["vol","Volumen de puestos","35 %",e.d.vol],["amp","Amplitud de empleadores","20 %",e.d.amp],["esc","Escasez","20 %",e.d.esc],["rem","Remuneración","15 %",e.d.rem],["for","Formalidad","10 %",e.d.for]])}
   ${tarj(`Tendencia · ${e.TEN}`,R.ten,[["cre","Crecimiento observado","30 %",e.t.cre],["nor","Impulso normativo","25 %",e.t.nor],["inv","Inversión sectorial","20 %",e.t.inv],["dem","Driver demográfico","15 %",e.t.dem],["tec","Madurez tecnológica","10 %",e.t.tec]])}
   ${tarj(`Impacto · ${e.IMP}`,R.imp,[["cri","Criticidad","60 %",e.i.cri],["alc","Alcance","40 %",e.i.alc],["sos","Sostenibilidad","—",e.sos]])}
   <div class="sub-c"><h5>Sustento</h5><div class="tx"><b>Demanda.</b> ${sinMarcas(e.fd)}</div>
     <div class="tx" style="margin-top:7px"><b>Tendencia.</b> ${sinMarcas(e.ft)}</div>
     <div class="sub-l" style="margin-top:7px"><span>Acuerdo del panel</span><b>${S.delphi?e.ac+" %":"—"}</b></div></div>
  </div>`;
 else cuerpo=cabe(`Capacidad instalada · <b>${e.VIA===null?"sin declarar":e.VIA+"/100"}</b> — 30 % docentes · 25 % campos de práctica · 20 % infraestructura · 15 % diferenciación · 10 % habilitación`)+
  `<div class="sub-g">
   ${e.VIA===null?`<div class="sub-c"><h5>Capacidad instalada</h5><div class="tx">La Dirección de la Escuela todavía no ha declarado estos cinco indicadores. Sin ellos la especialidad solo se juzga por el potencial del mercado.</div>
     <button class="b-env sm" id="abre-cap3" style="margin-top:9px">Declarar la capacidad instalada</button></div>`
    :tarj("Capacidad instalada",R.via,[["doc","Docentes con el perfil","30 %",e.v.doc],["cam","Campos de práctica y convenios","25 %",e.v.cam],["inf","Infraestructura y equipamiento","20 %",e.v.inf],["dif","Diferenciación","15 %",e.v.dif],["hab","Habilitación normativa","10 %",e.v.hab]])}
   <div class="sub-c"><h5>Modo de ejercicio</h5>
     <div class="sub-l"><span>Como empleo</span>${etq("pue",e.puesto)}</div>
     <div class="sub-l"><span>Como negocio propio</span>${etq("emp",e.emprende)}</div>
     <div class="tx" style="margin-top:7px">${e.fnx}</div></div>
   <div class="sub-c"><h5>Lectura</h5><div class="tx">${frase(e)}</div></div>
  </div>`;
 const ids=[...new Set(q==="atr"?[].concat(R.dem,R.ten,R.imp):R.via)].filter(x=>REF(x)).sort((a,b)=>a-b);
 return cuerpo+`<div class="refs"><h5>Referencias · formato APA</h5>
  ${ids.map(x=>`<div class="ref"><span class="rn">${x}</span><span>${REF(x).t} <a href="${REF(x).u}" target="_blank" rel="noopener">${REF(x).u}</a></span></div>`).join("")}</div>`;
}
/* Ficha metodológica de cada indicador: qué mide, cómo se puntúa y de dónde sale el dato.
   Es el insumo del capítulo de sustento del Programa de la Carrera Profesional. */
const DOCIND={
 dem:{t:"Demanda",p:"35 %",
  q:"Mide si <b>hoy</b> existe trabajo pagado para esa especialidad, no si es interesante ni si hace falta. Un campo puede ser socialmente necesario y no tener un solo puesto convocado: ese es el error que esta variable evita.",
  m:"Se puntúa con cinco subvariables ponderadas, cada una en escala 1–4. El resultado se normaliza a 0–100.",
  sub:[["vol","Volumen de puestos","35 %","Convocatorias contadas en los últimos 12 meses en portales públicos y privados, sin duplicados."],
       ["amp","Amplitud de empleadores","20 %","Número de tipos de empleador distintos que convocan: hospital, industria, Estado, consultoría, deporte."],
       ["esc","Escasez","20 %","Días promedio para cubrir la vacante y proporción de convocatorias que quedan desiertas."],
       ["rem","Nivel de remuneración","15 %","Mediana ofrecida frente a la mediana de la carrera en el mismo territorio."],
       ["for","Formalidad","10 %","Proporción de avisos que exigen título profesional y colegiatura."]],
  f:[2,3,4],
  n:"Escasez y remuneración son las que más discriminan: separan un campo con muchos puestos mal pagados de uno con pocos que nadie puede cubrir."},
 ten:{t:"Tendencia",p:"30 %",
  q:"Mide hacia dónde va el campo en el <b>horizonte de decisión de cinco años</b> —el momento en que egresa la primera promoción—. El dato a diez años sirve para marcar vigilancia, no para sostener una apuesta: a mayor horizonte, más ancha la incertidumbre.",
  m:"Una sola subvariable es dato observado —el crecimiento—; las otras cuatro son juicio prospectivo y se declaran como tal.",
  sub:[["cre","Crecimiento observado","30 %","CAGR de convocatorias de los últimos tres años. Serie contada, no impresión."],
       ["nor","Impulso normativo comprometido","25 %","Norma vigente con plazo y presupuesto asignado, no anuncio ni proyecto."],
       ["inv","Inversión y adopción sectorial","20 %","Inversión pública o privada comprometida en el sector en los últimos tres años."],
       ["dem","Driver demográfico o epidemiológico","15 %","Cambio poblacional o de perfil de enfermedad que empuja la demanda de manera estructural."],
       ["tec","Madurez de la tecnología habilitante","10 %","Grado de adopción real de la tecnología de la que depende el ejercicio."]],
  f:[1,5,9,10],
  n:"El único dato retrospectivo duro es el crecimiento observado. Presentar juicio prospectivo como dato observado invalida el sustento ante acreditación."},
 imp:{t:"Impacto",p:"20 %",
  q:"Mide <b>qué se pierde si nadie ejerce bien</b> esa especialidad. No mide cuántos puestos hay, sino la consecuencia del mal desempeño. Es lo que justifica formar en un campo pequeño pero crítico.",
  m:"Dos subvariables: la gravedad de la consecuencia y el número de personas alcanzadas.",
  sub:[["cri","Criticidad","60 %","Consecuencia del desempeño deficiente: desde mínima hasta grave o irreversible para la persona atendida."],
       ["alc","Alcance","40 %","Población alcanzada por el ejercicio: pocas personas, local, regional o nacional."]],
  f:[1,6,8],
  n:"Una especialidad de alta criticidad y bajo volumen puede entrar al plan como mención antes que como competencia."},
 sos:{t:"Sostenibilidad",p:"15 %",
  q:"Mide <b>cuánto del ejercicio resiste la automatización</b> en el horizonte de la carrera. Formar en un campo que la IA absorberá en cinco años es formar para el desempleo.",
  m:"Una sola escala 1–4, sustentada en el tipo de juicio profesional que exige el ejercicio.",
  sub:[["sos","Resistencia a la automatización","100 %","1 la absorbe la IA · 2 riesgo alto · 3 riesgo moderado · 4 insustituible: exige juicio clínico, responsabilidad legal o presencia."]],
  f:[10,3],
  n:"Lo que se automatiza es la tarea, no la responsabilidad. La especialidad que responde ante un tercero por el resultado es la que resiste."}
};
function vDocumentacion(){
 const bloque=k=>{const D=DOCIND[k];
  return `<div class="di-c" id="di-${k}">
   <div class="di-h"><span class="di-p">${D.p}</span><b>${D.t}</b></div>
   <p class="di-q">${D.q}</p>
   <div class="di-m"><b>Cómo se puntúa</b>${D.m}</div>
   <table class="di-t"><thead><tr><th style="width:230px">Subvariable</th><th style="width:60px">Peso</th>
     <th>Qué dato la sustenta</th></tr></thead>
    <tbody>${D.sub.map(x=>`<tr><td><b>${x[1]}</b></td><td class="pw">${x[2]}</td><td>${x[3]}</td></tr>`).join("")}</tbody></table>
   <div class="di-n">${D.n}</div>
   <div class="di-f"><b>Fuentes utilizadas</b>
    ${D.f.map(i=>`<div class="ref"><span class="rn">${i}</span><span>${REF(i).t} <a href="${REF(i).u}" target="_blank" rel="noopener">${REF(i).u}</a></span></div>`).join("")}</div>
  </div>`};
 return `<div class="doc-ind">
  <div class="di-cab"><button class="acta-h" id="t-docind"><span>${S.docInd?"▾":"▸"}</span>
    <b>Documentación de los indicadores del Potencial del mercado laboral</b>
    <em>qué mide cada uno, cómo se puntúa y con qué fuentes · insumo del Programa de la Carrera Profesional</em></button></div>
  ${S.docInd?`<div class="di-b">
   <p class="di-i">Esta sección no se usa para decidir: se usa para <b>sustentar la decisión por escrito</b>. Su contenido se traslada al capítulo de estudio de mercado del Programa de la Carrera Profesional y a la sección 5 del Estudio Prospectivo de la Carrera Profesional del paso 1.6.
    El <b>Potencial del mercado laboral</b> es el promedio ponderado de las cuatro variables siguientes, cada una en 0–100.</p>
   <div class="di-form">Potencial = 35 % Demanda + 30 % Tendencia + 20 % Impacto + 15 % Sostenibilidad</div>
   ${["dem","ten","imp","sos"].map(bloque).join("")}
   <div class="di-todas"><b>Referencias consultadas · formato APA</b>
    ${REFS.map(r=>`<div class="ref"><span class="rn">${r.id}</span><span>${r.t} <a href="${r.u}" target="_blank" rel="noopener">${r.u}</a></span></div>`).join("")}</div>
  </div>`:""}
 </div>`;
}
/* Guía del método para la vista de investigación: solo se muestra en «Recorrer el método». */
function guiasTablero(){
 return ` <div class="bloque oro"><b>Prioridad · cómo se ordena la lista</b>
  <span>La prioridad es el <b>producto de los dos ejes llevado a porcentaje</b> —potencial × capacidad ÷ 100—: premia a la que es buena en ambos y castiga a la que falla en uno. Una especialidad con potencial 90 y viabilidad 40 rinde 36; otra con 70 y 70 rinde 49 y va primero. La lista se ordena por ese valor y las de prioridad alta llevan fondo verde.</span></div>
 <div class="bloque"><b>Regla del puesto</b>
  <span>Una especialidad es algo que el mercado <b>contrata como puesto</b>. Con «tarea dentro de otro puesto» o «encargo puntual» la candidata no es especialidad: sus tareas se recogen en la Fase 2, que es donde se identifican las funciones. Aquí no se analizan funciones: solo la amplitud del encargo en los avisos.</span></div>
 ${vDocumentacion()}`;
}
function vTableroPendiente(){
 return `<section class="research-empty" aria-labelledby="research-empty-title"><header class="research-empty-heading"><span class="research-empty-step">1.1</span><div><span class="research-empty-eyebrow">DEL CAMPO PROFESIONAL A LA DECISIÓN</span><h2 id="research-empty-title">Investigación de Especialidades</h2><p>Identifica qué especialidades demanda el mercado y cuáles vale la pena trabajar.</p></div><span class="research-empty-status">Aún sin cartera</span></header><div class="research-empty-body"><p>Génesys barre el campo profesional <b>a plan cerrado</b>, registra la evidencia del mercado y entrega una cartera trazable para que la Escuela decida qué especialidades pasan al rediseño.</p><div class="research-empty-flow"><div><span>01</span><b>Barrer el campo</b><small>Puestos, negocio propio y fuentes verificables.</small></div><i>→</i><div><span>02</span><b>Medir el potencial</b><small>Demanda, tendencia, impacto y sostenibilidad.</small></div><i>→</i><div><span>03</span><b>Decidir la cartera</b><small>Panel de expertos y decisión de la Escuela.</small></div></div></div><footer class="research-empty-next"><span>✦</span><div><b>Siguiente acción con Génesys</b><p>Usa el botón <strong>Generar la cartera de especialidades</strong> de la conversación.</p></div></footer></section>`;
}
function vTablero(){
 if(S.done===0) return vTableroPendiente();
 if(!ESP.length) return vacio("Investigación de Especialidades · sin cartera todavía",
   `Esta escuela está creada y vacía. El primer momento del paso 1.1 es <b>barrer el campo profesional a plan cerrado</b>
    —sin leer el plan de estudios vigente— y levantar las especialidades que el mercado contrata como puesto propio
    o que sostienen un negocio propio, cada una con su potencial de mercado y su fuente verificable.`,
   "Generar la cartera de especialidades")+(VALID?guiasTablero():"");
 const CAP=capDeclarada();   // basta con que alguna aprobada tenga capacidad: las demás se muestran «sin declarar»
 const L=listadas(), sel=ESP.filter(e=>!e.oculta&&e.sel).length, tot=ESP.filter(e=>!e.oculta&&!noValorada(e)).length;
 const maxPri=Math.max(1,...ESP.filter(e=>!e.oculta).map(e=>e.PRI));
 const a100=x=>Math.round((x-1)/3*100);
 const mini=(v,col)=>`<span class="mi"><b>${v}</b><i><em style="width:${v}%;background:${col}"></em></i></span>`;
 return `



 <div class="research-flow">
 ${S.done>=1?`<section class="research-section research-cap" aria-labelledby="research-cap-title">
  <h2 class="research-panel-title"><button class="research-heading research-toggle" data-section-toggle="capacityClosed" aria-expanded="${!S.capacityClosed}" aria-controls="research-cap-body"><span class="research-number" aria-hidden="true">01</span><span class="research-heading-copy"><span class="research-title" id="research-cap-title">Capacidad instalada</span><span class="research-description">Cinco indicadores de las especialidades aprobadas. Dos los evalúa Génesys y tres declara la Dirección de la Escuela.</span></span><span class="research-tag ${CAP?"ok":""}">${CAP?(DECL&&/borrador/i.test(DECL.tipo||"")?"Declarada · borrador por firmar":"Declarada"):(S.done>=4?"Génesys evaluó 2 de 5":"Pendiente")}</span><span class="research-chevron" aria-hidden="true">${S.capacityClosed?"+":"−"}</span></button></h2>
  <div class="research-body" id="research-cap-body" ${S.capacityClosed?"hidden":""}>
   ${CAP?(()=>{const A=ESP.filter(e=>!e.oculta&&!noValorada(e)&&(e.sel||Object.values(e.v).some(v=>v>0))).sort((x,y)=>y.ATR-x.ATR), KS=["doc","cam","inf","dif","hab"];
     const cel=(e,k)=>e.v[k]?`<span class="et v${e.v[k]}" title="${att((ET[k]||[])[e.v[k]-1]||"")}${e.vjust&&e.vjust[k]?" · "+att(e.vjust[k]):""}">${e.v[k]}</span>`:'<span class="mut">—</span>';
     return `${S.verPuntaje?"":mapa(ESP.filter(e=>!e.oculta).sort((x,y)=>y.PRI-x.PRI),false,true)}${S.verPuntaje?`<table class="tb-ag tb-cap"><thead><tr><th>Especialidad aprobada</th>${KS.map(k=>`<th title="${CAPMETA[k]}">${CAPMETA[k].split(" ")[0]}<small>${CAPFUENTE[k]==="agente"?"Génesys":"Escuela"}</small></th>`).join("")}<th class="num">Capacidad</th></tr></thead>
      <tbody>${A.map(e=>`<tr><td>${e.n}</td>${KS.map(k=>`<td>${cel(e,k)}</td>`).join("")}<td class="num">${e.VIA===null?'<span class="mut">sin declarar</span>':`<b>${e.VIA}</b>`}</td></tr>`).join("")}</tbody></table>
      `:""}<div class="cap-pie"><span>${S.verPuntaje?"Escala 1–4 por indicador; pase el cursor para ver el nivel. Capacidad instalada = 30 % docentes + 25 % campos + 20 % infraestructura + 15 % diferenciación + 10 % habilitación.":"Mapa de decisión: potencial del mercado laboral × capacidad instalada."}</span><span class="cap-pie-b"><button class="ic-b" id="ver-puntaje">${S.verPuntaje?"◔ Ver gráfico":"▤ Ver puntaje"}</button>${S.capForm?"":`<button class="ic-b" id="abre-cap4">✎ Editar la declaración</button>`}</span></div>`})():`<div class="sin-cap">
    <p class="sc-q">Declare los indicadores de la Escuela y use <b>Evaluar con Génesys</b> para diferenciación y habilitación: con los cinco aparecen la capacidad, la prioridad y el mapa de decisión.</p>
    <p class="sc-n"><b>Este paso es opcional:</b> puede seguir sin declarar y volver cuando la Dirección responda.</p>
    ${S.capForm?"":(S.done>=3?`<button class="b-env sm" id="abre-cap4">Declarar la capacidad instalada</button>`:`<p class="sc-n" style="margin-top:10px;background:#f4f7fa;border-left-color:var(--linea);color:var(--gris)">Se habilita en el momento 3, después del panel de expertos.</p>`)}</div>`}
   ${S.capForm?formCapacidad():""}
  </div></section>`:""}
 <section class="research-section" aria-labelledby="research-title">
  <h2 class="research-panel-title"><button class="research-heading research-toggle" data-section-toggle="researchClosed" aria-expanded="${!S.researchClosed}" aria-controls="research-body"><span class="research-number" aria-hidden="true">02</span><span class="research-heading-copy"><span class="research-title" id="research-title">Investigación de Especialidades</span><span class="research-description">Cartera del campo profesional, indicadores de mercado y selección de especialidades.</span></span><span class="research-tag">Cartera</span><span class="research-chevron" aria-hidden="true">${S.researchClosed?"+":"−"}</span></button></h2>
  <div class="research-body" id="research-body" ${S.researchClosed?"hidden":""}>

 <div class="tool cols filtro">
  <div class="tl-1"><span class="tl-k">Seleccionadas</span><b>${sel}</b><span class="tl-t">de ${tot} valoradas</span></div>
  ${S.selOk?`<span class="tl-t">selección confirmada</span>`:""}
  <span style="margin-left:auto"></span>
  <button class="col-b ${S.colsM?"on":""}" id="cols-m"><i class="d1"></i>${S.colsM?"Ocultar":"Ver"} detalle de potencial de mercado</button>

  ${CAP?`<button class="col-b ${S.colsC?"on":""}" id="cols-c"><i class="d2"></i>${S.colsC?"Ocultar":"Ver"} detalle de capacidad instalada</button>`:""}
  ${S.delphi&&S.done>=4&&(!(ESCUELA&&ESCUELA.demo)||S.acto>=4)?`<button class="b-env sm" id="abre-int">⧉ Integrar nombres</button>`:""}
  ${S.intForm?formIntegrar():""}
 </div>
 ${S.decisionUpdated?'<div class="decision-notice" role="status">Decisiones listas. Revisa el destino propuesto para cada especialidad.</div>':""}
 <div class="scroll-x tbl-esp"><table style="min-width:${(CAP?1120:860)+(S.colsM?300:0)+(CAP&&S.colsC?370:0)}px"><thead>
  ${(S.colsM||S.colsC)?`<tr class="grp"><th colspan="${CAP?4:3}" class="grp-space"></th>
    ${S.colsM?`<th colspan="4" class="g1">Indicadores de mercado</th>`:""}
    <th class="grp-space"></th>
    ${CAP&&S.colsC?`<th colspan="5" class="g2">Indicadores de capacidad</th>`:""}
    <th colspan="${CAP?3:2}" class="grp-space"></th></tr>`:""}
  <tr><th style="width:26px" title="Entra al rediseño">✓</th>${CAP?`<th style="width:70px" class="num">Prioridad</th>`:""}
   <th style="width:290px">Especialidad</th>
   <th style="width:190px">¿Cómo se ejerce?</th>
   ${S.colsM?`<th class="num mm">Demanda</th><th class="num mm">Tendencia</th><th class="num mm">Impacto</th><th class="num mm">Sostenib.</th>`:""}
   <th class="num" style="width:120px">Potencial de<br>mercado</th>
   ${CAP&&S.colsC?`<th class="num mm2">Docentes</th><th class="num mm2">Campos</th><th class="num mm2">Equipam.</th><th class="num mm2">Difer.</th><th class="num mm2">Habilit.</th>`:""}
   ${CAP?`<th class="num" style="width:120px">Capacidad<br>instalada</th>`:""}
   <th style="width:130px" class="decision-column" id="decision-column">Decisión${S.decisionUpdated?'<span class="decision-updated">Actualizado</span>':""}</th><th style="width:220px">Integrar</th></tr>
 </thead><tbody>
 ${L.map(e=>{const i=ESP.indexOf(e), fuera=S.delphi&&!e.sel, cand=candidatas(e), rank=L.indexOf(e)+1;
  const tier=e.PRI>=Math.round(maxPri*.75)?"p1":(e.PRI>=Math.round(maxPri*.45)?"p2":"p3");
  const nc=(CAP?4:3)+(S.colsM?4:0)+1+(CAP&&S.colsC?5:0)+(CAP?1:0)+2; const ab=S.det&&S.det.i===i;
  return `<tr class="${fuera?"fuera":""} ${S.delphi?tier:""}" data-row="${i}">
   <td>${noValorada(e)?"":`<input type="checkbox" data-sel="${i}" ${e.sel?"checked":""} ${S.selOk?"disabled":""} title="Marcar si esta especialidad entra al rediseño">`}</td>
   ${CAP?`<td class="num">${noValorada(e)?`<span class="pri nv">—</span>`:`<span class="pri ${tier}">${S.delphi?e.PRI:"—"}</span><span class="rk">${S.delphi?"#"+rank:""}</span>`}</td>`:""}
   <td class="nom" style="--acc:${S.delphi?DEC[e.dec][2]:"#cbd5e1"}">
     <span class="f-nom">${e.n}${e.integrada?`<span class="integrada" data-int-i="${i}">⧉ integrada</span>`:""}</span>
     <span class="f-desc ${S.expDesc[i]?"abierta":""}">${e.desc}</span>
     ${(e.desc||"").length>96?`<button class="mas" data-desc="${i}">${S.expDesc[i]?"ver menos":"ver más"}</button>`:""}</td>
   <td class="ejer">
     <div class="ej-l"><span class="ej-k">Empleo</span><span class="et v${e.puesto}">${ET.pue[e.puesto-1]}</span></div>
     <div class="ej-l"><span class="ej-k">Negocio</span><span class="et v${e.emprende}">${ET.emp[e.emprende-1]}</span></div>
     ${(e.puesto<=2&&e.emprende<=2)?`<span class="alerta-fn">Ni puesto ni negocio · no es especialidad</span>`:""}</td>
   ${S.colsM?`<td class="num mm">${mini(e.DEM,"#003366")}</td><td class="num mm">${mini(e.TEN,"#003366")}</td>
     <td class="num mm">${mini(e.IMP,"#003366")}</td><td class="num mm">${mini(e.SOS,"#003366")}</td>`:""}
   <td class="num">${noValorada(e)?`<span class="sin-dec">no valorada</span>`
     :`<span class="sc"><b>${e.ATR}</b><i><em style="width:${e.ATR}%;background:${S.delphi?DEC[e.dec][2]:"#003366"}"></em></i></span>
     <button class="b-det ${ab&&S.det.q==="atr"?"on":""}" data-det="${i}|atr">${ab&&S.det.q==="atr"?"▾":"▸"} indicadores</button>`}</td>
   ${CAP&&S.colsC?["doc","cam","inf","dif","hab"].map(k=>`<td class="num mm2">${e.v[k]?mini(a100(e.v[k]),"#5B6470"):'<span class="sin-dec">—</span>'}</td>`).join(""):""}
   ${CAP?`<td class="num">${e.VIA===null?`<span class="sin-dec">sin declarar</span>`
     :`<span class="sc"><b>${e.VIA}</b><i><em style="width:${e.VIA}%;background:#5B6470"></em></i></span>${e.parcial?`<span class="sin-dec" title="Faltan diferenciación y habilitación: las evalúa Génesys">3 de 5</span>`:""}`}
     <button class="b-det ${ab&&S.det.q==="via"?"on":""}" data-det="${i}|via">${ab&&S.det.q==="via"?"▾":"▸"} indicadores</button></td>`:""}
   <td class="decision-column">${S.delphi?chipDec(e.dec):'<span class="chip c-prop">Sin decidir</span>'}</td>
   <td class="intg">${!S.delphi?'<span class="mut">—</span>':(cand.length?`
      ${(()=>{const prop=(INTEGR[e.n]||[]).map(n=>cand.find(c=>c.n===n)).filter(Boolean); return prop.length?`<div class="int-p">✦ Génesys propone integrar con <b>${prop.map(c=>c.n).join("</b>, <b>")}</b></div>
      ${prop.map(c=>`<button class="b-int prop" data-merge="${i}|${ESP.indexOf(c)}">Integrar ${c.n.split(" ").slice(0,3).join(" ")}…</button>`).join(" ")}`:""})()}
      <div class="int-j">Integrable con <b>${cand.map(c=>c.n).join("</b>, <b>")}</b>
        <span>${NAT_J[e.nat]||"Comparten naturaleza profesional."}</span></div>
      <button class="b-int ${S.pick===i?"on":""}" data-pick="${i}">${S.pick===i?"Elija con cuál ▾":"Integrar…"}</button>
      ${S.pick===i?`<div class="picker">${cand.map(c=>`<button data-merge="${i}|${ESP.indexOf(c)}">${c.n}</button>`).join("")}
        <button class="cancel" data-pick="-1">Cancelar</button></div>`:""}`
    :'<span class="mut">Sin candidata compatible</span>')}</td></tr>
  ${ab?`<tr class="detalle"><td colspan="${nc}" style="padding:16px"><div class="det-vis">${detalle(e,S.det.q)}</div></td></tr>`:""}`}).join("")}
 </tbody></table></div>

 </div></section>
 ${S.delphi?`<section class="research-section research-panel" aria-label="Acta del panel de expertos · Ronda 1">
  <h2 class="research-panel-title"><button class="research-heading research-toggle" id="t-acta" aria-expanded="${!!S.acta}" aria-controls="research-panel-body"><span class="research-number" aria-hidden="true">03</span><span class="research-heading-copy"><span class="research-title">Acta del panel de expertos</span><span class="research-description">Validación de la cartera por seis expertos independientes. El guardián verifica y no califica.</span></span><span class="research-tag">Ronda 1</span><span class="research-chevron" aria-hidden="true">${S.acta?"−":"+"}</span></button></h2>
  ${S.acta?`<div class="acta-b research-body" id="research-panel-body">
   <div class="acta-n">Qué hace este panel: cada experto puntúa la <b>esencialidad de la especialidad para el perfil de egreso</b> en escala 1–4, con su propio criterio y sus propias fuentes. De ahí salen la mediana, el <b>I-CVI</b> (proporción que la califica 3 o 4), el <b>CVR</b> de Lawshe, el <b>acuerdo</b> y el <b>RIC</b> (dispersión). Este panel deja el estado en <b>revisado.</b></div>
   <div class="scroll-x"><table class="tb-acta"><thead><tr><th>Especialidad</th>
    ${EXPERTOS.map(x=>`<th class="num" title="${x[1]}">${x[0]}</th>`).join("")}
    <th class="num">Mediana</th><th class="num">I-CVI</th><th class="num">CVR</th><th class="num">Acuerdo</th><th class="num">RIC</th></tr></thead>
   <tbody>${ESP.filter(e=>!e.oculta&&!noValorada(e)).map(e=>{const pn=panelDe(e);
     return `<tr><td class="tb-nom">${e.n}<div>${pn.ver?verChip(pn.ver):chipDec(e.dec)}</div></td>
      ${pn.p.map((v,i)=>`<td class="num"><span class="et v${v}" style="min-width:22px" title="${att(EXPERTOS[i]?EXPERTOS[i][1]:"")}${pn.com&&pn.com[EXPERTOS[i][0]]?": "+att(pn.com[EXPERTOS[i][0]]):""}">${v}</span></td>`).join("")}
      <td class="num"><b>${pn.med.toFixed(1)}</b></td>
      <td class="num ${pn.icvi>=0.83?"ok":"ko"}">${pn.icvi.toFixed(2)}</td>
      <td class="num ${pn.cvr>=0.99?"ok":(pn.cvr<=0?"ko":"")}">${pn.cvr.toFixed(2)}</td>
      <td class="num ${pn.ac==null?"":(pn.ac>=75?"ok":"ko")}">${pn.ac==null?"—":pn.ac+" %"}</td>
      <td class="num ${pn.ric<=1?"ok":"ko"}">${pn.ric}</td>
</tr>`}).join("")}</tbody></table></div>
   <div class="acta-u"><b>Umbrales declarados antes de la ronda 1:</b> I-CVI ≥ 0,83 · CVR crítico 1,00 con N = 6 · acuerdo ≥ 75 % · RIC ≤ 1 · máximo 3 rondas.
    ${resumenActa()}</div>${actaExtra()}
  </div>`:""}</section>`:""}
 ${S.done>=4&&!capDeclarada()?`<section class="research-section research-gen" aria-labelledby="research-gen-title">
  <header class="research-heading"><div class="research-heading-copy"><h2 id="research-gen-title">Evaluación de Génesys</h2><p>Diferenciación frente a la competencia y habilitación normativa de las especialidades aprobadas.</p></div><span class="research-tag">2 de 5 indicadores</span></header>
  <div class="research-body"><p class="sc-q">Los tres indicadores de la Escuela siguen sin declarar: hasta entonces la cartera se ordena <b>solo por potencial del mercado laboral</b>.</p>
    <table class="tb-ag"><thead><tr><th>Especialidad aprobada</th><th>Diferenciación</th><th>Habilitación normativa</th></tr></thead><tbody>${ESP.filter(e=>!e.oculta&&!noValorada(e)&&e.sel).sort((x,y)=>y.ATR-x.ATR).map(e=>`<tr><td>${e.n}</td><td>${e.v.dif?`<span class="et v${e.v.dif}">${e.v.dif} · ${ET.dif[e.v.dif-1]}</span>`:'<span class="mut">—</span>'}</td><td>${e.v.hab?`<span class="et v${e.v.hab}">${e.v.hab} · ${ET.hab[e.v.hab-1]}</span>`:'<span class="mut">—</span>'}</td></tr>`).join("")}</tbody></table></div></section>`:""}

 </div>


 ${VALID?guiasTablero():""}`;
}

/* ════════════ Otras vistas ════════════ */
function vInicio(){
 if(S.done===0&&ESCUELA) return vTableroPendiente();
 if(!ESCUELA) return `<div class="sin-esc"><h2>Ninguna escuela cargada</h2>
   <p>Agregue una escuela profesional con el botón <b>＋</b> de la barra superior. Cada escuela guarda su propia Fase 1: cartera, correspondencia, competencias, objetivos, propuesta de valor e informe.</p></div>`;
 return `<div class="vacio">Génesys aún no ha ejecutado ningún paso en <b>${ESCUELA.nombre}</b>.<br>Pídale a Génesys que genere la cartera del campo profesional con el botón que aparece en la conversación.</div>`}
let EXTRA={};
const PIN=(w)=>`<svg viewBox="0 0 24 24" width="${w}" height="${w}" style="display:block"><path d="M12 2.2c-3.8 0-6.9 3.1-6.9 6.9 0 5.1 6.9 12.7 6.9 12.7s6.9-7.6 6.9-12.7c0-3.8-3.1-6.9-6.9-6.9z" fill="currentColor"/><circle cx="12" cy="9.1" r="2.5" fill="#fff"/></svg>`;
const MKI={comp:"≡",amb:PIN(13),cap:"⊂",trv:`<span class="pin2">${PIN(11)}${PIN(11)}</span>`,no:"+"};
const MKT={comp:"Equivale a la competencia",amb:"Ámbito de aplicación",cap:"Equivale a una capacidad",trv:"Ámbito compartido",no:"Sin correspondencia"};
function marcasAgente(n){
 const out=[];
 const e0=ESP.find(x=>x.n===n); if(e0&&e0.n0) n=e0.n0;
 const v=EQ[n]; if(v) out.push({c:v.c,k:v.k,t:v.t==="comp"?"comp":(v.t==="amb"?"amb":"cap"),man:false});
 (EXTRA[n]||[]).forEach(x=>out.push({c:x.c,k:x.k,t:x.t,man:false}));
 return out;
}
/* El experto manda: puede marcar, cambiar el tipo o DESMARCAR ("off") una marca del agente. */
function marcasDe(n,conGrupo=true){
 let out=marcasAgente(n);
 if(conGrupo){ const e0=ESP.find(x=>x.n===n); const b=e0?baseDe(e0):n; miembrosDe(b).forEach(m=>{ marcasDe(m,false).forEach(x=>{ if(!out.some(y=>y.c===x.c&&y.k===x.k)) out.push(Object.assign({},x,{de:m})) }) }) }
 Object.keys(EQMAN).forEach(key=>{const [nn,ci,ki]=key.split("|"); if(nn!==n) return;
   const c=+ci, k=ki==="c"?null:+ki;
   out=out.filter(x=>!(x.c===c&&x.k===k));
   if(EQMAN[key]!=="off") out.push({c,k,t:EQMAN[key],man:true})});
 return out;
}
function tipoDe(n){
 const m=marcasDe(n,false); if(!m.length) return ["sin","Sin correspondencia","No la recoge ninguna competencia ni capacidad vigente"];
 const comps=[...new Set(m.map(x=>x.c))];
 if(comps.length>1) return ["trv","Ámbito compartido","Se aplica en más de una competencia: "+comps.map(c=>ARQ[c]?ARQ[c].alias:"C"+(c+1)).join(" y ")];
 if(m.some(x=>x.k===null&&x.t==="comp")) return ["cmp","Equivale a la competencia","Ejecuta el proceso completo y produce su evidencia"];
 if(m.some(x=>x.t==="cap")) return ["cap","Equivale a una capacidad","Ejecuta un tramo del proceso con evidencia propia"];
 return ["amb","Ámbito de aplicación","Mismo proceso y misma evidencia, distinto objeto de atención"];
}
function vacio(t,q,b){
 return `<div class="vac"><div class="vac-i">▣</div><div class="vac-t">${t}</div>
  <p class="vac-q">${q}</p>
  <div class="vac-b">Pídaselo a Génesys con el botón <b>${b}</b> de la conversación.</div></div>`;
}
const CMP=()=>ARQ.length?ARQ.map(a=>({n:a.n,caps:a.caps.map(k=>k.n)})):PLAN;
function vEquivalencia(){
 const CX=CMP();
 const selec=ESP.filter(e=>!e.oculta&&e.sel).sort((a,b)=>b.PRI-a.PRI);
 const filas=selec.filter(e=>!(esMiembro(baseDe(e))&&selec.some(b=>miembrosDe(baseDe(b)).includes(baseDe(e)))));
 const nInt=selec.length-filas.length;
 const pri=e=>`<td class="num pri-c"><span class="pri">${e.PRI}</span><span class="rk">${e.VIA===null?"potencial":"prioridad"}</span></td>`;
 const ex=S.expComp;
 const anchoComp=ci=>ex.includes(ci)?CX[ci].caps.length+1:1;
 const marca=(e,ci,ki)=>{
  const todas=marcasDe(e.n);
  const m=todas.find(x=>x.c===ci&&x.k===ki);
  if(m&&m.de) return `<span class="mk ${m.t} her" title="Aporte de ${m.de}, integrada en este grupo">${MKI[m.t]}</span><span class="mk-t">${MKT[m.t]}<small>· ${m.de.split(" ").slice(0,3).join(" ")}</small></span>`;
  const d=`data-mk="${e.n}|${ci}|${ki===null?"c":ki}"`;
  if(!m){
   const off=EQMAN[EQKEY(e.n,ci,ki)]==="off";
   if(off) return `<button class="mk no" ${d} title="Clic para marcar">+</button><span class="mk-t man">desmarcada por el experto</span>`;
   const nivel=todas.find(x=>x.c===ci&&x.k===null);
   if(ki!==null&&nivel) return `<button class="mk cap imp" ${d} data-imp="1" title="Asignada por la competencia${nivel.t==="amb"?" (ámbito de aplicación)":""} · clic para ajustar a mano">${MKI.cap}</button><span class="mk-t">Por la competencia</span>`;
   return `<button class="mk no" ${d} title="Clic para marcar">+</button>`;
  }
  const cls={comp:["comp",MKI.comp,"Corresponde a la competencia completa","Equivale a la competencia"],amb:["amb",MKI.amb,"Ámbito de aplicación: mismo proceso, otro objeto","Ámbito de aplicación"],
   cap:["cap",MKI.cap,"Corresponde a esta capacidad: es una parte del proceso","Equivale a la capacidad"]}[m.t];
  return `<button class="mk ${cls[0]} ${m.man?"man":""}" ${d} title="${cls[2]}${m.man?" · marcado a mano":""}">${cls[1]}</button><span class="mk-t ${m.man?"man":""}">${cls[3]}${m.man?" · experto":""}</span>`;
 };
 if(!S.cruzado) return `<section class="competency-empty correspondence-start" aria-labelledby="correspondence-start-title">
  <header class="competency-empty-heading"><span class="competency-step">1.3</span><div><span class="competency-eyebrow">ESPECIALIDADES Y COMPETENCIAS</span><h2 id="correspondence-start-title">Matriz de Correspondencia</h2><p>Relaciona cada especialidad con las competencias y capacidades que la sostienen.</p></div><span class="competency-status">Aún sin cruzar</span></header>
  <div class="competency-empty-body">
   <div class="correspondence-inputs" aria-label="Elementos que se van a cruzar">
    <div class="correspondence-input"><span class="correspondence-input-step">DEL PASO 1.1</span><div><strong>${selec.length}</strong><span>especialidades validadas</span></div><p>Serán las filas de la matriz.</p></div>
    <span class="correspondence-cross" aria-hidden="true">×</span>
    <div class="correspondence-input"><span class="correspondence-input-step">DEL PASO 1.2</span><div><strong>${CX.length}</strong><span>competencias definidas y guardadas</span></div><p>Serán las columnas, con sus capacidades.</p></div>
   </div>
   <h3 class="competency-process-title">Qué mostrará cada relación</h3>
   <ul class="competency-process correspondence-relations">
    <li><span class="correspondence-relation-icon relation-full" aria-hidden="true">≡</span><h4>Competencia completa</h4><p>La especialidad equivale al proceso completo de una competencia.</p></li>
    <li><span class="correspondence-relation-icon relation-part" aria-hidden="true">⊂</span><h4>Una capacidad</h4><p>La especialidad equivale a un tramo del proceso, con evidencia propia.</p></li>
    <li><span class="correspondence-relation-icon relation-scope" aria-hidden="true">◎</span><h4>Ámbito de aplicación</h4><p>La especialidad aplica la competencia a un objeto o contexto específico.</p></li>
   </ul>
   <div class="correspondence-finding"><span aria-hidden="true">!</span><div><b>Lo que no encaje es un hallazgo</b><p>Las especialidades sin correspondencia requieren volver al paso 1.2 para revisar las competencias antes de guardar la matriz.</p></div></div>
  </div>
  <footer class="competency-next"><span class="competency-next-mark" aria-hidden="true">→</span><div><b>Siguiente acción con Génesys</b><p>En la conversación, selecciona <strong>Cruzar especialidades y competencias</strong>. La matriz aparecerá aquí para revisar y ajustar las relaciones.</p></div></footer>
 </section>`;
 return `<div class="cr-cab correspondence-toolbar">
   
   
   <div class="cr-lg"><span class="correspondence-legend-title">Tipo de relación</span>${["comp","amb","cap","trv","no"]
     .map(k=>`<button class="lg-b" data-leg="${k}"><span class="mk ${k} sm">${MKI[k]}</span>${MKT[k]}</button>`).join("")}
    <span class="cr-h">clic para ver qué significa</span>
    <button class="ic-b" id="exp-todas" style="margin-left:auto">${S.expComp.length===CX.length?"⊟ Encoger competencias":"⊞ Desplegar competencias"}</button></div>
 </div>
 <div class="mx correspondence-matrix" tabindex="0" role="region" aria-label="Matriz de correspondencia entre especialidades y competencias"><table><thead>
  <tr><th rowspan="2" style="width:250px">Especialidad seleccionada</th><th rowspan="2" style="width:70px" class="num" title="Potencial × capacidad ÷ 100 · la lista va de mayor a menor">Prioridad</th><th rowspan="2" style="width:165px">Tipo de Correspondencia</th>
   ${CX.map((c,ci)=>`<th class="cc k${ci} ${ex.includes(ci)?"abierta":""}" colspan="${anchoComp(ci)}" data-comp="${ci}">${c.n}
     <span class="ex">${ex.includes(ci)?"▾ ocultar capacidades":"▸ ver "+c.caps.length+" capacidades"}</span></th>`).join("")}</tr>
  <tr>${CX.map((c,ci)=>ex.includes(ci)
     ? `<th class="kk niv k${ci}">▸ la competencia</th>`+c.caps.map(k=>`<th class="kk cap k${ci}">${k}</th>`).join("")
     : `<th class="kk k${ci}">nivel competencia</th>`).join("")}</tr>
 </thead><tbody>
  ${filas.map(e=>{const tp=tipoDe(e.n);
   const cps=[...new Set(marcasDe(e.n).map(x=>x.c))].sort();
   const mi=miembrosDe(baseDe(e)), nom=mi.length?nombreGrupo(baseDe(e)):e.n;
   const rel=m=>{const t=tipoDe(m); const k=marcasDe(m,false).find(x=>x.k!==null); return t[0]==="cap"&&k&&ARQ[k.c]?"capacidad «"+ARQ[k.c].caps[k.k].n+"»":t[1].toLowerCase()};
   return `<tr><td class="esp"><span class="f-nom">${nom}${mi.length?`<span class="integrada" data-int-b="${att(baseDe(e))}">⧉ integra ${mi.length}</span>`:""}</span>
    <span class="f-esd">${e.desc}</span><span class="f-sub">${e.nat}</span></td>${pri(e)}
   <td class="tipo"><span class="tp tp-${tp[0]}">${tp[1]}</span>
    <div>${cps.length?cps.map(c=>`<span class="cb c${c}"><i></i>${PLA[c]}</span>`).join("")
      :`<span class="cb non">ninguna competencia</span>`}</div>
    <span class="tp-d">${tp[2]}</span></td>
   ${CX.map((c,ci)=>{
     const g=marcasDe(e.n).some(x=>x.c===ci)?"g":"";
     const cel=`<td class="cell niv c${ci} ${g}">${marca(e,ci,null)}</td>`+(ex.includes(ci)?c.caps.map((k,ki)=>`<td class="cell cap c${ci} ${g}">${marca(e,ci,ki)}</td>`).join(""):"");
     return cel}).join("")}</tr>`}).join("")}
 </tbody><tfoot><tr><td class="lbl" colspan="3">¿Alguna especialidad sostiene esta capacidad?</td>
  ${CX.map((c,ci)=>{let t=`<td>—</td>`;
    if(ex.includes(ci)) t+=c.caps.map((k,ki)=>{
      const sin=CAP_SIN_ESP.find(x=>x.k===k);
      const con=selec.some(e=>marcasDe(e.n).some(x=>x.c===ci&&x.k===ki));
      return `<td>${con?'<span style="color:var(--verde)">sí</span>':(sin?'<span style="color:var(--ambar);font-weight:700">⚠ ninguna</span>':"cubierta")}</td>`}).join("");
    return t}).join("")}</tr></tfoot></table></div>
 ${SIN_ENCAJE.length+CAP_SIN_ESP.length?`<div class="sin-encaje"><h4>Lo que no encaja (${SIN_ENCAJE.length+CAP_SIN_ESP.length})</h4>
  ${SIN_ENCAJE.map(x=>`<div class="se-item"><b>${x.e}</b><span class="q">${x.q}</span><span class="r">→ ${x.r}</span></div>`).join("")}
  ${CAP_SIN_ESP.map(x=>`<div class="se-item"><b>Capacidad «${x.k}» · ${x.c}</b><span class="q">${x.q}</span><span class="r">→ ${x.r}</span></div>`).join("")}</div>`:""}
 ${S.leg?modalLeyenda(S.leg):""}`;
}
function modalLeyenda(k){
 const D={
  comp:["Equivale a la competencia","La especialidad <b>ejecuta el proceso completo</b> que la competencia describe y produce la misma evidencia. "+((GUION.leg||{}).comp||"No sobra ni falta nada."),"Qué hacer: la competencia se conserva o se precisa; la especialidad queda como su expresión principal en el mercado."],
  amb:["Ámbito de aplicación","Mismo proceso y misma evidencia, <b>distinto objeto de atención</b>. "+((GUION.leg||{}).amb||"Cambia sobre qué o para quién se ejerce, no cómo. Por eso no abre una competencia nueva."),"Qué hacer: se declara como ámbito dentro de su competencia y, si tiene demanda propia, se ofrece como mención o certificación."],
  cap:["Equivale a una capacidad","La especialidad <b>ejecuta solo un tramo</b> del proceso, pero con evidencia propia: recibe un encargo de otro profesional y devuelve un producto intermedio. "+((GUION.leg||{}).cap||""),"Qué hacer: se incorpora como capacidad dentro de la competencia madre; si esa capacidad no existía, se crea."],
  trv:["Ámbito compartido","La especialidad <b>aparece en más de una competencia</b>. "+((GUION.leg||{}).trv||"Pertenece a dos procesos distintos."),"Qué hacer: se declara en las dos competencias y se cuida que ninguna la reclame como exclusiva; en la Fase 2 sus funciones se repartirán."],
  no:["Sin correspondencia","<b>Ninguna competencia ni capacidad vigente la recoge.</b> No es un error del análisis: es el hallazgo más valioso del paso, porque señala que al plan le falta algo que el mercado ya está contratando.","Qué hacer: reabre el paso 1.2 para crear una capacidad nueva —o, si ejecuta un proceso completo y distinto, una competencia nueva— y se vuelve a cruzar."]}[k];
 return `<div class="dr-ov" data-leg="-"></div><div class="lg-modal">
   <div class="lgm-h"><span class="mk ${k} big">${MKI[k]}</span><b>${D[0]}</b><button class="mf-x" data-leg="-">✕</button></div>
   <div class="lgm-b"><p>${D[1]}</p><p class="lgm-q">${D[2]}</p></div>
   <div class="lgm-p"><button class="b-out2" data-leg="-">Entendido</button></div></div>`;
}
const FOCO={
 traza:["Revisar la trazabilidad con el plan vigente","Trazabilidad",
  "Compruebe que <b>cada competencia del plan vigente tiene destino declarado</b> —se conserva, se reformula, se fusiona, se desdobla o desaparece— y que el motivo de cada cambio es el que usted sostendría ante el comité de acreditación. Esta tabla no decide nada: se deriva de lo que ya resolvió arriba. Si algún destino no le cuadra, cierre esta vista y corrija la competencia."],
 smart:["Revisar la estructura de la competencia y sus capacidades","Estructura de la definición",
  "Según el Modelo Educativo, una competencia se describe con cuatro elementos: <b>verbo de acción</b>, <b>objeto o ámbito de aplicación</b>, <b>condiciones o contexto</b> y <b>propósito o finalidad</b>; y una capacidad con su potencial o habilidad, la acción sobre un objeto, el contexto de adaptación y los conocimientos, actitudes y valores que moviliza. El método añade la <b>evidencia con que se demuestra</b> y el <b>nivel de dominio al egreso</b>: sin eso la Fase 2 no tiene contra qué derivar las funciones. Lea cada elemento contra la redacción propuesta. <b>Ajustar</b> no bloquea el guardado: señala qué parte falta."]};
function vFoco(k){
 const F=FOCO[k];
 const cuerpo = k==="traza"
  ? `<div class="scroll-x"><table style="min-width:900px"><thead><tr>
      <th style="width:260px">Competencia de especialidad · ${META().plan||"plan vigente"}</th><th style="width:110px">Destino</th>
      <th style="width:270px">Cambio aplicado</th><th>Motivo</th></tr></thead>
     <tbody>${TRAZA.length?TRAZA.map(t=>`<tr><td>${t.p}</td><td><span class="chip ${t.d==="se reformula"?"c-vigilancia":"c-ok"}">${t.d}</span></td>
      <td>${t.c}</td><td class="f-sub" style="margin:0">${t.s}</td></tr>`).join(""):`<tr><td colspan="4" class="f-sub">Sin contraste con el plan: el momento se omitió o la escuela no tiene plan vigente. La trazabilidad queda declarada como «competencias nuevas».</td></tr>`}</tbody></table></div>
     <div class="traza-n">${notaFuera()}</div>`
  : `<div class="scroll-x"><table style="min-width:820px"><thead><tr><th style="width:190px">Elemento</th>
      <th style="width:300px">Qué exige</th><th style="width:90px">Estado</th><th>Cómo lo cumple la redacción propuesta</th></tr></thead>
     <tbody>${SMART.map(r=>`<tr><td><b>${r[0]}</b></td><td>${r[1]}</td>
      <td><span class="chip ${r[2]==="Sí"?"c-ok":"c-vigilancia"}">${r[2]==="Sí"?"Cumple":"Ajustar"}</span></td>
      <td class="f-sub" style="margin:0">${r[3]}</td></tr>`).join("")}</tbody></table></div>`;
 return `<div class="foco">
  <div class="fo-h"><button class="ic-b" data-foco="-">‹ Volver a las competencias</button>
   <span class="fo-p">Paso 1.3 · ${F[1]}</span></div>
  <div class="fo-t">${F[0]}</div>
  <div class="fo-q"><b>Qué tiene que hacer aquí</b>${F[2]}</div>
  ${cuerpo}
  <div class="fo-f"><span>${S.rev[k]?"Ya marcó esta tabla como revisada.":"Cuando termine de leerla, márquela como revisada: sin las dos revisiones no se habilita el guardado."}</span>
   <button class="b-out2" data-foco="-">Volver sin marcar</button>
   <button class="b-env" data-foco-ok="${k}">${S.rev[k]?"✓ Revisada":"Marcar como revisada y volver"}</button></div>
 </div>`;
}
function vCompetenciasPendientes(){
 const count=ESP.filter(e=>!e.oculta&&e.sel).length;
 const ready=S.done>=6&&count>0;
 return `<section class="competency-empty" aria-labelledby="competency-empty-title">
  <header class="competency-empty-heading"><span class="competency-step">1.2</span><div><span class="competency-eyebrow">DEL CAMPO PROFESIONAL AL PERFIL DE EGRESO</span><h2 id="competency-empty-title">Definir Competencias</h2><p>Transforma las especialidades validadas en competencias y capacidades.</p></div><span class="competency-status">Aún sin derivar</span></header>
  <div class="competency-empty-body">
   <div class="competency-input"><div class="competency-input-count"><strong>${count}</strong><span>especialidades ${S.done>=6?"validadas":"seleccionadas"}</span></div><p>${ready?"Son el punto de partida para identificar procesos compartidos. Una competencia puede reunir varias especialidades.":"Completa y guarda las Especialidades Validadas del paso 1.1 para iniciar la derivación."}</p></div>
   <h3 class="competency-process-title">Cómo se construye la propuesta</h3>
   <ol class="competency-process">
    <li><span class="competency-process-number" aria-hidden="true">01</span><h4>Agrupar por proceso</h4><p>Identificar qué especialidades comparten un proceso profesional. Ese proceso común da origen a una competencia.</p></li>
    <li><span class="competency-process-number" aria-hidden="true">02</span><h4>Definir las capacidades</h4><p>Precisar entre <b>2 y 6 capacidades</b> por competencia: tramos del proceso con evidencia propia.</p></li>
    <li><span class="competency-process-number" aria-hidden="true">03</span><h4>Registrar la relación</h4><p>Vincular cada especialidad por <b>equivalencia</b>, <b>ámbito de aplicación</b> o <b>capacidad</b>.</p></li>
   </ol>
   <div class="competency-plan"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/></svg><div><b>El plan vigente sigue sellado</b><p>Primero se derivan las competencias del campo. El contraste con el plan se realiza en el momento siguiente.</p></div></div>
  </div>
  <footer class="competency-next"><span class="competency-next-mark" aria-hidden="true">→</span><div><b>${ready?"Siguiente acción con Génesys":"Antes de continuar"}</b><p>${ready?'En la conversación, selecciona <strong>Determinar las competencias del campo</strong>. La propuesta aparecerá aquí.':'Finaliza el paso <strong>1.1 · Prospectiva de Especialidades</strong> y guarda la selección antes de determinar las competencias.'}</p></div></footer>
 </section>`;
}
function vArquitectura(){
 if(S.foco) return vFoco(S.foco);
 const D={reformular:["c-vigilancia","Reformulada"],conservar:["c-ok","Conservada literal"],nueva:["c-esen","Nueva · el plan no la recogía"],derivada:["c-prop","Derivada del campo · a ciegas del plan"]};
 const EQL={competencia:["eqc","Equivale a la competencia"],ambito:["eqa","Ámbito de aplicación"],capacidad:["eqk","Equivale a una capacidad"],compartido:["eqa","Ámbito compartido"]};
 const TD={"se reformula":"c-vigilancia","se conserva":"c-ok","se fusiona":"c-certificacion","se desdobla":"c-certificacion","se redistribuye":"c-certificacion","desaparece":"c-descartar","nace":"c-prop"};
 if(!S.redactado) return vCompetenciasPendientes();
 return `
 <div class="arq-acc"><span class="tl-k">${ARQ.length} competencias</span>
  ${PLAN.length&&S.done>=8&&!S.contrasteOmitido?`<button class="ic-b ${S.comparar?"on":""}" id="b-comparar">${S.comparar?"▣ Ocultar el contraste con el plan":"▢ Contrastar con el plan vigente"}</button>`
    :""}
  ${S.comparar?`<div class="plan-compare-key plan-compare-key-inline"><span><i class="plan-key-current"></i><b>Plan vigente</b> · referencia de solo lectura</span><span><i class="plan-key-proposed"></i><b>Propuesta</b> · definición editable</span></div>`:""}
  <button class="ic-b" id="exp-arq" style="margin-left:auto">${ARQ.every((c,i)=>S.expArq.includes(i))?"⊟ Replegar todas":"⊞ Desplegar todas"}</button></div>

 ${ARQ.map((a,ai)=>`<div class="ac c${ai} ${S.expArq.includes(ai)?"":"cerrada"} ${S.comparar?"cmp":""}">
  <div class="ac-h">
   <button class="ac-tg" data-arq="${ai}" title="${S.expArq.includes(ai)?"Replegar":"Desplegar"}">${S.expArq.includes(ai)?"▾":"▸"}</button>
   <span class="ac-alias" contenteditable="true" data-ed="arq|${ai}|alias">${a.alias}</span>
   <span class="ac-n" contenteditable="true" data-ed="arq|${ai}|n">${a.n}</span>
   <span class="ac-km">${a.caps.length} capacidades</span>
   ${a.tipo?`<span class="ac-tipo">de ${a.tipo}</span>`:""}<span class="chip ${((S.done>=8&&!S.contrasteOmitido&&D[a.dec])||D.derivada)[0]}">${((S.done>=8&&!S.contrasteOmitido&&D[a.dec])||D.derivada)[1]}</span>${a.mejorada?`<span class="chip c-esen">✦ Mejorada por Génesys</span>`:""}
   <button class="b-mejora" data-form="${ai}">✦ Mejorar con Génesys</button></div>
  ${S.comparar?`<div class="cmp-g">
   <div class="cmp-a">
    <div class="plan-column-heading"><span class="cmp-e">Plan vigente</span><span class="plan-column-note">Referencia · solo lectura</span></div>
    ${(pv=>`<div class="ac-t">${pv?(pv.np||"Competencia vigente"):"Sin equivalente en el plan"}</div>
    ${pv?`<div class="cmp-n">${pv.n}</div>
    <div class="ac-t" style="margin-top:12px">Definición conceptual vigente</div>
    <div class="cmp-d">${pv.d}</div>
    <div class="ac-t" style="margin-top:12px">Capacidades vigentes · ${pv.caps.length}</div>`:`<div class="cmp-d">Ninguna competencia vigente recoge este proceso: la competencia <b>nace</b> del campo.</div>`}
    ${(pv?pv.caps:[]).map((k,ki)=>{const sigue=a.caps.some(x=>x.n===k||(x.de&&x.de===k)||x.a.toLowerCase()===k.toLowerCase().split(" ")[0]);
      return `<div class="cmp-k ${sigue?"":"fuera"}"><div class="cmp-kn">${k}${sigue?"":`<span class="cmp-x">no continúa</span>`}</div>
        <p class="cmp-kd">${pv.cd[ki]}</p></div>`}).join("")}`)(planDe(ai))}
    <div class="cmp-nota">Esta columna es la línea base congelada: no se edita. Sirve para sustentar el rediseño ante acreditación.</div>
   </div>
   <div class="cmp-b">
    <div class="plan-column-heading"><span class="cmp-e nueva">Propuesta del campo</span><span class="plan-column-note">Paso 1.2 · rediseño</span></div>
    <div class="ac-t">Definición conceptual</div>
    <div class="ac-d" contenteditable="true" data-ed="arq|${ai}|def">${a.def}</div>
    <div class="ac-t" style="margin-top:12px">Capacidades propuestas · ${a.caps.length}</div>
    ${a.caps.map((k,ki)=>`<div class="cmp-k prop ${k.e}"><div class="cmp-kn"><span class="kc-a" contenteditable="true" data-ed="cap|${ai}|${ki}|a">${k.a}</span> <span contenteditable="true" data-ed="cap|${ai}|${ki}|n">${k.n}</span>${k.e?`<span class="kc-e">${k.e}</span>`:""}</div>
      <p class="cmp-kd" contenteditable="true" data-ed="cap|${ai}|${ki}|d">${k.d}</p></div>`).join("")}
    ${a.gat&&S.done>=8?`<div class="ac-gat"><b>${a.dec==="conservar"?"Sin motivo para reformular":"Por qué cambió"}</b>${a.gat}
      ${a.antes?`<span class="ac-antes">Antes: ${a.antes}</span>`:""}</div>`:""}
   </div>
  </div>`:`<div class="ac-g">
   <div class="ac-c">
    <div class="ac-t">Definición conceptual</div>
    <div class="ac-d" contenteditable="true" data-ed="arq|${ai}|def">${a.def}</div>
    ${a.antesMejora?`<details class="ac-antes-d"><summary>Versión anterior a la mejora</summary><p>${a.antesMejora.def}</p></details>`:""}
    ${a.evid||a.nivel?`<div class="ac-ev">${a.evid?`<div><b>Evidencia con que se demuestra</b><span contenteditable="true" data-ed="arq|${ai}|evid">${a.evid}</span></div>`:""}${a.nivel?`<div><b>Nivel de dominio al egreso</b><span contenteditable="true" data-ed="arq|${ai}|nivel">${a.nivel}</span></div>`:""}</div>`:""}
    ${a.gat&&S.done>=8?`<div class="ac-gat"><b>${a.dec==="conservar"?"Sin motivo para reformular":"Por qué cambió"}</b>${a.gat}
      ${a.antes?`<span class="ac-antes">Antes: ${a.antes}</span>`:""}</div>`:""}
   </div>
   <div class="ac-k">
    <div class="ac-t">Capacidades · ${a.caps.length}</div>
    ${a.caps.map((k,ki)=>`<div class="kc ${k.e}">
      <div class="kc-n"><span class="kc-a" contenteditable="true" data-ed="cap|${ai}|${ki}|a">${k.a}</span>
        <span contenteditable="true" data-ed="cap|${ai}|${ki}|n">${k.n}</span>${k.e?`<span class="kc-e">${k.e}</span>`:""}</div>
      <div class="kc-d" contenteditable="true" data-ed="cap|${ai}|${ki}|d">${k.d}</div></div>`).join("")}
   </div>
  </div>`}
  <table class="ac-esp"><thead><tr>
    <th>Especialidad asociada</th><th style="width:190px">¿Equivale a la competencia?</th>
    <th style="width:250px">A qué capacidad</th><th>Nota</th></tr></thead>
   <tbody>${a.esp.map(x=>`<tr><td><b style="font-weight:600;color:var(--tinta)">${x.n}</b>
     ${DESC[x.n]?`<span class="f-esd">${DESC[x.n]}</span>`:""}</td>
    <td><span class="eqm ${(EQL[x.eq]||EQL.ambito)[0]}">${(EQL[x.eq]||EQL.ambito)[1]}</span></td>
    <td>${x.cap?x.cap:'<span style="color:var(--gris-2)">— toda la competencia</span>'}</td>
    <td class="f-sub" style="margin:0">${x.nota}</td></tr>`).join("")}</tbody></table>
 </div>`).join("")}

 ${S.done>=9?`<!-- momento 3 · compuertas y confirmación: aparecen al ejecutar «Revisar la estructura y la trazabilidad» -->
 <div class="traza-b ${S.rev.traza?"revisado":""}" id="blk-traza"><div class="blk-h">
   <div class="ac-t">Trazabilidad con el ${META().plan||"plan vigente"} · se deriva de lo anterior, no se decide aquí</div>
   <button class="b-rev ${S.rev.traza?"on":""}" data-rev="traza">${S.rev.traza?"✓ Revisada":"Revisar ahora"}</button></div>
  <div class="scroll-x"><table style="min-width:900px"><thead><tr>
   <th style="width:260px">Competencia de especialidad · ${META().plan||"plan vigente"}</th><th style="width:110px">Destino</th>
   <th style="width:270px">Cambio aplicado</th><th>Motivo</th></tr></thead>
   <tbody>${S.contrasteOmitido||!TRAZA.length?`<tr><td colspan="4" class="f-sub" style="margin:0">Contraste omitido: no hay plan vigente contrastado. Las ${ARQ.length} competencias se declaran <b>nuevas</b>; si adjunta el plan antes de guardar, la trazabilidad se deriva del contraste.</td></tr>`:TRAZA.map(t=>`<tr><td>${t.p}</td><td><span class="chip ${TD[t.d]}">${t.d}</span></td>
    <td>${t.c}</td><td class="f-sub" style="margin:0">${t.s}</td></tr>`).join("")}</tbody></table></div>
  <div class="traza-n">${notaFuera()}</div>
 </div>

 <div class="smart-b ${S.rev.smart?"revisado":""}" id="blk-smart"><div class="blk-h">
   <div class="ac-t">Validación de la estructura · elementos de la competencia y de la capacidad</div>
   <button class="b-rev ${S.rev.smart?"on":""}" data-rev="smart">${S.rev.smart?"✓ Revisada":"Revisar ahora"}</button></div>
  <div class="scroll-x"><table style="min-width:820px"><thead><tr><th style="width:190px">Elemento</th>
   <th style="width:300px">Qué exige</th><th style="width:90px">Estado</th><th>Cómo lo cumple la redacción propuesta</th></tr></thead>
   <tbody>${SMART.map(r=>`<tr><td><b>${r[0]}</b></td><td>${r[1]}</td>
    <td><span class="chip ${r[2]==="Sí"?"c-ok":"c-vigilancia"}">${r[2]==="Sí"?"Cumple":"Ajustar"}</span></td>
    <td class="f-sub" style="margin:0">${r[3]}</td></tr>`).join("")}</tbody></table></div>
  <div class="traza-n">Los criterios SMART quedan cubiertos por esta estructura: S es el objeto y el ámbito, M la evidencia, R el sustento de mercado del 1.1 y T el nivel de dominio al egreso. Se verifica por competencia y por capacidad antes de guardar.</div>
 </div>

 <div class="guardar ${S.rev.traza&&S.rev.smart?"":"trabado"}">
  <div><b>${S.arqOk?"Arquitectura confirmada y guardada":"¿Confirma esta arquitectura?"}</b>
   <span>Al confirmar se escriben las ${ARQ.length} competencias con sus capacidades, la trazabilidad y las especialidades asociadas en la ficha de la escuela.</span>
   <div class="gt-l">${[["traza","Trazabilidad con el plan vigente"],["smart","Estructura de la competencia y sus capacidades"]]
     .map(x=>`<button class="gt ${S.rev[x[0]]?"ok":""}" data-ir="${x[0]}">
       <span class="gt-i">${S.rev[x[0]]?"✓":"!"}</span>${x[1]}
       <em>${S.rev[x[0]]?"revisada":"abrir y revisarla"}</em></button>`).join("")}</div></div>
  <button class="b-guardar ${S.arqOk?"ok":""}" id="b-guardar" ${S.rev.traza&&S.rev.smart?"":"disabled"}>${S.arqOk?"✓ Guardada":"Confirmar y guardar"}</button>
 </div>
 `:`<div class="arq-i" style="margin-top:14px">${S.done>=8?"Lo que sigue: <b>revisar la estructura y la trazabilidad</b> desde la conversación; entonces aparecen aquí las dos compuertas y la confirmación.":"Lo que sigue: <b>contrastar con el plan vigente</b> (se levanta el sello) o omitirlo, y después revisar la estructura y la trazabilidad antes de guardar."}</div>`}
 ${S.form!==null?formMejora(ARQ[S.form]):""}`;
}
/* Mejora de demostración: Génesys reescribe la definición y las capacidades con la versión preparada, conservando alias, títulos y número de capacidades. */
function mejorarDemo(a,ops,txt){
 const m=MEJORAS[a.alias];
 addHTML(`<div class="burbuja">Mejora la competencia «${a.alias}»${ops&&ops.length?" · "+ops.join(", ").toLowerCase():""}${txt?": "+txt:""}.</div>`);
 if(!m){ addHTML(`<div class="g-fila"><div><p>No tengo una mejora preparada para <b>${a.alias}</b>. Puede editarla a mano con «Editar» en la misma ficha.</p></div></div>`); accionAlFinal(); return }
 const pasos=["Leyendo la definición y las capacidades vigentes de la competencia","Auditando los elementos: verbo, objeto, condiciones, propósito, evidencia y nivel","Reescribiendo la definición con registro académico y sin incisos","Ampliando cada capacidad con sus cuatro componentes","Verificando que la estructura y el número de capacidades no cambien"];
 const tr=addHTML(`<div class="g-traza"><div class="g-traza-h"><span class="g-punto"></span>Génesys está trabajando…</div><ul>${pasos.map(p=>`<li>${p}</li>`).join("")}</ul></div>`);
 accionAlFinal();
 const total=RAPIDO?300:9000, paso=total/(pasos.length+1);
 pasos.forEach((p,i)=>setTimeout(()=>{ const li=tr.querySelectorAll("li")[i]; if(li) li.classList.add("on"); if(i>0) tr.querySelectorAll("li")[i-1].classList.add("ok"); abajo() },paso*(i+1)));
 setTimeout(()=>{
  tr.querySelectorAll("li").forEach(li=>li.classList.add("ok")); tr.querySelector(".g-traza-h").innerHTML="✓ Listo"; tr.classList.add("hecho");
  setTimeout(()=>{ tr.classList.add("se-va"); setTimeout(()=>tr.remove(),450) },RAPIDO?0:700);
  if(!a.antesMejora) a.antesMejora={def:a.def,caps:a.caps.map(k=>({a:k.a,n:k.n,d:k.d}))};
  a.def=m.def; a.caps.forEach((k,i)=>{ if(m.caps[i]){ k.d=m.caps[i].d; k.e="mejorada" } }); a.mejorada=true;
  const ai=ARQ.indexOf(a); if(!S.expArq.includes(ai)) S.expArq.push(ai);
  pintarCentro("arquitectura"); marcar();
  addHTML(`<div class="g-fila"><div><p>${m.nota}</p><p>Los cambios ya están en la ficha de <b>${a.alias}</b>: la definición y las ${a.caps.length} capacidades llevan la marca <i>mejorada</i>, y la versión anterior queda a la vista para compararla. Puede aceptarla tal cual o seguir editando a mano.</p></div></div>`);
  accionAlFinal();
 },total);
}
function formMejora(a){
 const ed=S.edit===ARQ.indexOf(a);
 const ai=ARQ.indexOf(a);
 const campo=(lab,val,tag,fe)=>ed
  ? `<label>${lab}</label>${tag==="t"?`<textarea class="dr-t" rows="5" data-fe="${fe}">${val}</textarea>`:`<input class="dr-i" value="${val.replace(/"/g,"&quot;")}" data-fe="${fe}">`}`
  : `<div class="pv-l">${lab}</div><div class="pv-v ${tag==="t"?"txt":""}">${val}</div>`;
 return `<div class="dr-ov" data-form="-1"></div>
 <aside class="drawer">
  <div class="dr-h"><div><span class="dr-e">${ed?"Editando":"Competencia"}</span><b>${a.alias}</b></div>
   <button class="ic-b ${ed?"on":""}" data-edit="${ARQ.indexOf(a)}">${ed?"✓ Terminar edición":"✎ Editar"}</button>
   <button class="mf-x" data-form="-1">✕</button></div>
  <div class="dr-b">
   <div class="dr-s">Competencia</div>
   ${campo("Alias · nombre corto",a.alias,"i",`arq|${ai}|alias`)}
   ${campo("Título representativo",a.n,"i",`arq|${ai}|n`)}
   ${campo("Definición conceptual",a.def,"t",`arq|${ai}|def`)}

   <div class="dr-s">Capacidades · ${a.caps.length}</div>
   ${a.caps.map((k,i)=>`<div class="dr-k">
     <div class="dr-kh">C${ARQ.indexOf(a)+1}.${i+1} · ${ed?"":k.a}${k.e?`<span class="kc-e">${k.e}</span>`:""}</div>
     ${ed?`<label>Alias</label><input class="dr-i" value="${k.a}" data-fe="cap|${ai}|${i}|a">
       <label>Título</label><input class="dr-i" value="${k.n}" data-fe="cap|${ai}|${i}|n">
       <label>Definición conceptual</label><textarea class="dr-t" rows="4" data-fe="cap|${ai}|${i}|d">${k.d}</textarea>`
      :`<div class="pv-t">${k.n}</div><div class="pv-v txt">${k.d}</div>`}
     </div>`).join("")}

   <div class="dr-s">Correspondencias y sustento</div>
   <table class="pv-tb"><tbody>${a.esp.map(x=>`<tr><td><b>${x.n}</b>
     ${DESC[x.n]?`<span class="f-esd">${DESC[x.n]}</span>`:""}</td>
     <td>${{competencia:"Competencia completa",ambito:"Ámbito de aplicación",capacidad:"Capacidad"}[x.eq]}</td></tr>`).join("")}</tbody></table>
   <div class="pv-gat"><b>Motivo del cambio</b>${a.gat}</div>
  </div>
  <div class="dr-f">
   <label class="dr-fl">Instrucción de mejora para Génesys</label>
   <div class="mf-ops inline">${["Definición conceptual","Alias y títulos","Conjunto de capacidades","Alinear con SINEACE"]
     .map((o,i)=>`<label class="mf-o"><input type="checkbox" ${i===0?"checked":""}> ${o}</label>`).join("")}</div>
   <textarea class="dr-t" rows="3" id="mej-txt" placeholder="Qué debería considerar: p. ej. que la definición nombre la evidencia con que se demuestra…"></textarea>
   <div class="dr-p">
    <button class="b-out2" data-form="-1">Cerrar</button>
    <button class="b-env" data-enviar="${ARQ.indexOf(a)}">Enviar a Génesys</button></div>
  </div>
 </aside>`;
}
function armarArquitectura(){
 document.querySelectorAll("[data-form]").forEach(b=>b.onclick=()=>{
   const i=+b.dataset.form; S.form=(i<0)?null:i; S.edit=null; pintarCentro("arquitectura")});
 document.querySelectorAll("[data-edit]").forEach(b=>b.onclick=()=>{
   const i=+b.dataset.edit; S.edit=(S.edit===i)?null:i; pintarCentro("arquitectura")});
 document.querySelectorAll("[data-fe]").forEach(o=>o.addEventListener("input",()=>{
   const p=o.dataset.fe.split("|"), t=o.value;
   if(p[0]==="arq"&&ARQ[p[1]]) ARQ[p[1]][p[2]]=t;
   else if(p[0]==="cap"&&ARQ[p[1]]&&ARQ[p[1]].caps[p[2]]) ARQ[p[1]].caps[p[2]][p[3]]=t;
   marcar();
 }));
 document.querySelectorAll("[data-enviar]").forEach(b=>b.onclick=()=>{
   const a=ARQ[+b.dataset.enviar];
   const ops=[...document.querySelectorAll(".mf-ops.inline .mf-o")].filter(l=>l.querySelector("input").checked).map(l=>l.textContent.trim());
   const txt=(document.getElementById("mej-txt")||{}).value||"";
   S.form=null; pintarCentro("arquitectura");
   if(ESCUELA&&ESCUELA.demo){ mejorarDemo(a,ops,txt); return; }
   encargoLibre("Mejorar la competencia «"+a.alias+"»",
    `Mejora la competencia «${a.n}» (alias ${a.alias}) de ${ESCUELA?ESCUELA.nombre:"la escuela"}, con el skill dc-1-2-definir-competencias, conservando la estructura aprobada y el número de capacidades.\n\nQué mejorar: ${ops.join(", ")||"la definición conceptual"}.\n${txt?"Instrucciones adicionales: "+txt+"\n":""}\nDefinición actual: ${a.def}\nCapacidades: ${a.caps.map(k=>k.a+" — "+k.n).join(" · ")}\n\nVerifica que la definición tenga verbo de acción, objeto o ámbito, condiciones o contexto, propósito, evidencia y nivel de dominio, y que cada capacidad tenga su estructura. Escribe la versión mejorada en el tablero.`);
 });
 document.querySelectorAll("[data-arq]").forEach(b=>b.onclick=()=>{
   const i=+b.dataset.arq, j=S.expArq.indexOf(i);
   j>=0?S.expArq.splice(j,1):S.expArq.push(i); pintarCentro("arquitectura")});
 const bcm=document.getElementById("b-comparar"); if(bcm) bcm.onclick=()=>{
   S.comparar=!S.comparar; pintarCentro("arquitectura")};
 const ea=document.getElementById("exp-arq"); if(ea) ea.onclick=()=>{
   S.expArq=ARQ.every((c,i)=>S.expArq.includes(i))?[]:ARQ.map((x,i)=>i); pintarCentro("arquitectura")};
 document.querySelectorAll("[data-rev]").forEach(b=>b.onclick=()=>{
   S.foco=b.dataset.rev; pintarCentro("arquitectura")});
 document.querySelectorAll("[data-ir]").forEach(b=>b.onclick=()=>{
   S.foco=b.dataset.ir; pintarCentro("arquitectura")});
 // al volver de una compuerta, la vista se queda en el bloque desde el que se abrió, no en el inicio
 const volverA=k=>{ const f=k; S.foco=null; pintarCentro("arquitectura"); setTimeout(()=>{ const el=document.getElementById(f==="smart"?"blk-smart":"blk-traza")||document.getElementById("b-guardar"); if(el) el.scrollIntoView({block:"start"}) },30) };
 document.querySelectorAll("[data-foco]").forEach(b=>b.onclick=()=>volverA(S.foco));
 document.querySelectorAll("[data-foco-ok]").forEach(b=>b.onclick=()=>{
   S.rev[b.dataset.focoOk]=true; volverA(b.dataset.focoOk)});
 const g=document.getElementById("b-guardar");
 if(g) g.onclick=()=>{
   if(!(S.rev.traza&&S.rev.smart)) return;
   S.arqOk=true; if(S.done<10)S.done=10; S.salE.comp="validado";
   pintarCentro("equivalencia"); pintarTabs(); pintarPanel();
   addHTML(`<div class="burbuja">Confirmo la arquitectura: las ${ARQ.length} competencias quedan guardadas.</div>`);
   addHTML(`<div class="g-fila"><div><p>Guardadas las <b>${ARQ.length} competencias</b> con sus capacidades, la trazabilidad y las especialidades asociadas. Paso 1.2 cerrado.</p><p>Sigue el paso <b>1.3 · Matriz de Correspondencia</b>: con las competencias congeladas, recién se cruzan contra las especialidades validadas.</p></div></div>`); cerrarActo(8); accionAlFinal(); };
}
/* Ficha impresa: solo las especialidades seleccionadas, con los tres indicadores de la Escuela
   y el criterio de cada nivel. Se imprime o se guarda como PDF desde el diálogo del navegador. */
function imprimirFicha(){
 const L=ESP.filter(e=>!e.oculta&&!noValorada(e)&&e.sel).sort((a,b)=>b.ATR-a.ATR);
 const K=["doc","cam","inf"];
 let d=document.getElementById("ficha-print"); if(!d){ d=document.createElement("div"); d.id="ficha-print"; document.body.appendChild(d) }
 d.innerHTML=`<h1>Ficha de Capacidad Instalada · ${ESCUELA?ESCUELA.nombre:"Escuela Profesional"}</h1>
  <div class="esc">Metodología de Rediseño Curricular · Fase 1 · Paso 1.1 · Declaración de la Dirección de la Escuela · ${new Date().toLocaleDateString("es-PE")}</div>
  <p>Por cada especialidad aprobada, marque el nivel que corresponde a cada indicador. La declaración la firma la Dirección y sustenta la decisión de apertura.</p>
  <h2>Cómo decidir cada nivel</h2>
  ${K.map(k=>`<p style="margin:8pt 0 3pt"><b>${CAPMETA[k]}</b> — ${CAPAY[k].q}</p>
   <table><thead><tr><th style="width:24pt">N.º</th><th style="width:130pt">Nivel</th><th>Cuándo corresponde</th></tr></thead><tbody>
   ${ET[k].map((x,i)=>`<tr><td>${i+1}</td><td>${x}</td><td>${CAPAY[k].e[i]}</td></tr>`).join("")}</tbody></table>`).join("")}
  <h2>Declaración por especialidad</h2>
  <table><thead><tr><th>Especialidad aprobada</th>${K.map(k=>`<th style="width:110pt">${CAPMETA[k]}</th>`).join("")}</tr></thead>
  <tbody>${L.map(e=>`<tr><td><b>${e.n}</b><br><span class="esc">${e.desc||""}</span></td>${K.map(()=>`<td>1 ☐ &nbsp; 2 ☐ &nbsp; 3 ☐ &nbsp; 4 ☐</td>`).join("")}</tr>`).join("")}</tbody></table>
  <h2>Firma</h2>
  <table><tbody><tr><th style="width:120pt">Declara (nombre y cargo)</th><td></td></tr><tr><th>Fecha</th><td></td></tr><tr><th>Firma</th><td style="height:36pt"></td></tr></tbody></table>`;
 window.print();
}
function descargarPlantilla(){
 const L=ESP.filter(e=>!e.oculta);
 const filas=L.map(e=>`<tr><td>${e.n}</td>${Object.keys(CAPMETA).map(()=>"<td></td>").join("")}</tr>`).join("");
 const html=`<html><head><meta charset="utf-8"><title>Ficha de Capacidad de Servicio</title><style>
  body{font-family:"Segoe UI",Arial,sans-serif;font-size:10.5pt;color:#1A1A1A}
  h1{font-size:14pt;color:#003366} h2{font-size:11pt;background:#003366;color:#fff;padding:5pt 8pt}
  table{border-collapse:collapse;width:100%;font-size:9pt}
  td,th{border:1px solid #AFC0D4;padding:5pt 6pt;text-align:left;vertical-align:top}
  th{background:#F2F5F8;color:#5B6470}</style></head><body>
  <h1>Ficha de Capacidad de Servicio · Escuela Profesional de ${nombreEsc()}</h1>
  <p>Metodología de Rediseño Curricular · Fase 1, paso 1.1. Marque de 1 a 4 el nivel que corresponde a cada indicador.</p>
  <h2>Escalas y criterio de decisión</h2>
  ${Object.keys(CAPMETA).map(k=>`<p style="margin:10pt 0 3pt"><b>${CAPMETA[k]}</b> — ${CAPAY[k].q}</p>
   <table><thead><tr><th style="width:26pt">N.º</th><th style="width:150pt">Nivel</th><th>Cuándo corresponde</th></tr></thead><tbody>
   ${ET[k].map((x,i)=>`<tr><td>${i+1}</td><td>${x}</td><td>${CAPAY[k].e[i]}</td></tr>`).join("")}</tbody></table>
   <p style="font-size:8.5pt;color:#5B6470;margin:3pt 0 0"><i>Cómo decidir sin dudar: ${CAPAY[k].c.replace(/<\/?b>/g,"")}</i></p>`).join("")}
  <h2>Declaración por especialidad</h2><table><thead><tr><th>Especialidad</th>
   ${Object.values(CAPMETA).map(x=>`<th>${x}</th>`).join("")}</tr></thead><tbody>${filas}</tbody></table>
  <h2>Firma</h2><table><tbody><tr><th style="width:170px">Declara</th><td></td><th style="width:110px">Fecha</th><td></td><th style="width:110px">Firma</th><td></td></tr></tbody></table>
  </body></html>`;
 bajar(`Ficha-Capacidad-Instalada_${ESCUELA?ESCUELA.cod:"ESC"}.doc`,html);
}
function descargarInforme(){
 const doc=document.getElementById("doc-ficha"); if(!doc)return;
 const html=`<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word"><head>
  <meta charset="utf-8"><title>Estudio Prospectivo de la Carrera Profesional</title><style>${CSSWORD}</style></head><body>${doc.innerHTML}</body></html>`;
 bajar(`Estudio-Prospectivo-Carrera_${ESCUELA?ESCUELA.cod:"ESC"}_${(S.infVer||"v1.0").replace(/[^\w.]/g,"")}.doc`,html);
}
/* El visor bloquea las descargas que arranca la propia página: se pide al anfitrión. */
let BAJADAS=null;
async function bajar(nombre,html){
 const datos="\ufeff"+html;
 const b=new Blob([datos],{type:"application/msword"});
 const a=document.createElement("a"); a.href=URL.createObjectURL(b);
 a.download=nombre; a.click(); URL.revokeObjectURL(a.href);
}
const CSSWORD=`body{font-family:"Segoe UI",Arial,sans-serif;font-size:10.5pt;color:#1A1A1A}
  h1{font-size:15pt;text-align:center;color:#003366}
  h2{font-size:11pt;background:#003366;color:#fff;padding:5pt 8pt;margin-top:16pt}
  table{border-collapse:collapse;width:100%;font-size:9.5pt}
  td,th{border:1px solid #AFC0D4;padding:5pt 7pt;text-align:left;vertical-align:top}
  th{background:#F2F5F8;color:#5B6470}
  p{line-height:1.55;text-align:justify}
  .ci-1{background:#C8961E;color:#003366;font-weight:bold;padding:4pt 8pt}
  .doc-df{border-left:3pt solid #003366;padding:6pt 9pt;background:#F8FAFC}
  .cap-h{background:#F2F5F8;padding:4pt 8pt;font-weight:bold}
  /* dos secciones de Word: la ficha abre en vertical y la competencia con sus capacidades va apaisada */
  @page Vertical{size:21cm 29.7cm;margin:2cm 2cm 2cm 2.5cm;mso-page-orientation:portrait}
  div.hoja-v{page:Vertical}
  @page Horizontal{size:29.7cm 21cm;margin:1.6cm 1.8cm;mso-page-orientation:landscape}
  div.hoja-h{page:Horizontal;border:none;background:#fff}
  div.hoja-v,div.hoja-h{mso-element:section}
  .cc-g{width:100%;margin:0}
  .pg-n,.pg-b{display:none}
  .cc-a{border:1pt solid #AFC0D4;border-top:3pt solid #003366;padding:8pt 10pt}
  .cc-k{border:1pt solid #AFC0D4;border-left:3pt solid #C8961E;padding:6pt 9pt;margin-bottom:6pt}
  .cc-n{font-size:13pt;color:#003366;font-weight:bold}
  .cc-al{color:#a3762a;font-size:9pt;font-weight:bold}
  .doc-corte{page-break-before:always;height:0;border:none}
  .inf-e{border:1pt solid #AFC0D4;border-left:3pt solid #003366;padding:6pt 9pt;margin-bottom:6pt}
  .inf-em{font-size:8.5pt;color:#5B6470}
  .inf-idx,.doc-sel{display:none}
  svg{max-width:100%}`;
function descargarWord(){
 const doc=document.getElementById("doc-ficha"); if(!doc)return;
 const css=CSSWORD;
 const html=`<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word"><head>
  <meta charset="utf-8"><title>Ficha Técnica de la Competencia</title><style>${css}</style></head><body>${doc.innerHTML}</body></html>`;
 const cod=ESCUELA?ESCUELA.cod:"ESC";
 bajar(S.fichaC===-1?`Fichas-Tecnicas_${cod}_Fase1_v1.0.doc`:`Ficha-Tecnica-Competencia_${cod}-C${S.fichaC+1}_v1.0.doc`,html);
}
function ayudaCap(k){
 const A=CAPAY[k];
 return `<div class="ay-c">
  <div class="ay-h"><b>${CAPMETA[k]}</b><span>${A.q}</span><button class="mf-x sm" data-ayuda="-">✕</button></div>
  <div class="ay-g">${A.e.map((x,i)=>`<div class="ay-n v${i+1}"><span class="ay-v">${i+1}</span>
    <b>${ET[k][i]}</b><p>${x}</p></div>`).join("")}</div>
  <div class="ay-k"><b>Cómo decidir sin dudar</b> ${A.c}</div></div>`;
}
/* Formulario «Integrar nombres»: por cada grupo, la base, sus integradas (marcables) y el nombre que las agrupa. */
function formIntegrar(){
 const G=gruposDe(); const bases=Object.keys(G).filter(b=>ESP.some(e=>(e.n0||e.n)===b&&!e.oculta));
 const cand=b=>{ const be=ESP.find(e=>(e.n0||e.n)===b); return ESP.filter(o=>o!==be&&!noValorada(o)&&(o.sel||o.apr||o.oculta)&&(o.nat===be.nat||G[b].miembros.includes(o.n))).map(o=>o.n) };
 return `<div class="dr-ov" data-int="-"></div>
 <aside class="drawer ancho">
  <div class="dr-h"><div><span class="dr-e">Paso 1.1 · segunda decisión · integración</span><b>Integrar nombres</b></div><button class="mf-x" data-int="-">✕</button></div>
  <div class="dr-b">
   <p class="sc-q">Dos candidatas de la misma naturaleza que el mercado contrata en un mismo puesto se integran en una sola. Aquí la Escuela confirma <b>qué integra cada grupo</b> y le da el <b>nombre</b> con el que seguirá en la matriz del paso 1.3 y en las competencias. La propuesta viene de Génesys; su marca prevalece.</p>
   ${bases.length?bases.map(b=>`<div class="int-g" data-base="${att(b)}">
     <label class="dr-fl">Nombre del grupo</label><input class="dr-i int-nom" value="${att(G[b].nombre)}" placeholder="Nombre que agrupa a las integradas">
     <div class="int-base">Base: <b>${b}</b></div>
     <div class="int-m">${cand(b).map(m=>`<label class="mf-o"><input type="checkbox" class="int-chk" value="${att(m)}" ${G[b].miembros.includes(m)?"checked":""}> ${m}</label>`).join("")||'<span class="mut">Sin candidatas de la misma naturaleza.</span>'}</div>
    </div>`).join(""):'<p class="mut">No hay integraciones propuestas ni hechas todavía. Integre desde la columna de integración de la tabla y vuelva aquí para nombrar el grupo.</p>'}
  </div>
  <div class="dr-f"><div class="dr-p"><span class="dr-n">Los nombres se aplican en la matriz del 1.3; las especialidades siguen listadas aquí con su propio potencial.</span>
    <button class="b-out2" data-int="-">Cerrar</button><button class="b-env" id="int-guardar">✓ Guardar cambios</button></div></div>
 </aside>`;
}
/* Actualiza el modal de capacidad en su lugar: no se vuelve a insertar, no se anima y conserva el desplazamiento. */
function refrescarModalCap(){
 const old=document.querySelector("aside.drawer"); if(!old){ pintarCentro("tablero"); return }
 const b=old.querySelector(".dr-b"), t=old.querySelector(".mx-cap"), y=b?b.scrollTop:0, x=t?t.scrollLeft:0, yd=old.scrollTop;
 const tmp=document.createElement("div"); tmp.innerHTML=formCapacidad();
 const nuevo=tmp.querySelector("aside.drawer"); if(!nuevo){ pintarCentro("tablero"); return }
 old.innerHTML=nuevo.innerHTML;
 const nb=old.querySelector(".dr-b"), nt=old.querySelector(".mx-cap"); if(nb) nb.scrollTop=y; if(nt) nt.scrollLeft=x; old.scrollTop=yd;
 armarTablero(); marcar();
}
function formCapacidad(){
 const TOD=ESP.filter(e=>!e.oculta);
 const VAL=TOD.filter(e=>!noValorada(e)), SEL=VAL.filter(e=>e.sel);
 const L=(S.capTodas?VAL:(SEL.length?SEL:VAL)).sort((a,b)=>b.ATR-a.ATR);
 const fuera=VAL.length-L.length;
 const TODAS=Object.keys(CAPMETA);
 const K=S.capAg?TODAS:TODAS.filter(k=>CAPFUENTE[k]==="escuela"); // las dos de Génesys se muestran u ocultan con el botón
 const ESC=TODAS.filter(k=>CAPFUENTE[k]==="escuela");
 const listas=L.filter(e=>ESC.every(k=>e.v[k])).length;
 return `<div class="dr-ov" data-cap="-"></div>
 <aside class="drawer ancho capacity-drawer" role="dialog" aria-modal="true" aria-label="Declarar capacidad instalada">
  <div class="dr-h"><div><b>Capacidad instalada</b></div>
   <button class="mf-x" data-cap="-">✕</button></div>
  <div class="dr-b">
   <div class="cap-i">Se declara la capacidad <b>solo de las ${L.length} especialidades seleccionadas</b> para entrar al rediseño, ordenadas por potencial de mercado.
    ${fuera?`Las <b>${fuera} no seleccionadas</b> no se declaran: si no van a entrar al plan, su capacidad no decide nada.`:""}
    ${!SEL.length?`<b>Todavía no ha seleccionado ninguna</b>: marque primero en la lista cuáles entran.`:""}
    Marque el nivel en cada casilla. <b>Es opcional</b>: sin declaración la cartera se evalúa solo por el
    <b>potencial del mercado laboral</b>.</div>
   <div class="cap-acc">
    <button class="ic-b ${S.verPlan?"on":""}" id="ver-plan">${S.verPlan?"▾ Ocultar":"▸ Ver"} la plantilla</button>
    <button class="ic-b" id="baja-plan">⤓ Descargar plantilla</button>
    <button class="ic-b" id="cap-imprimir" title="Ficha para imprimir o guardar como PDF">🖨 Imprimir la ficha</button>
    <button class="ic-b" id="cap-limpiar" title="Borra solo los tres indicadores que declara la Escuela">Vaciar la matriz</button>
    <span class="cap-r">Responsable: <b contenteditable="true" data-ed="decl|resp">${DECL.resp}</b> · <b contenteditable="true" data-ed="decl|fecha">${DECL.fecha}</b></span>
   </div>
   ${S.verPlan?`<div class="plan-prev" id="plantilla-cap">
     <div class="cinta"><div class="ci-1">FASE 1</div><div class="ci-2"><b>Ficha de Capacidad de Servicio</b><span>Declaración de la Escuela Profesional · Paso 1.1</span></div></div>
     <p class="doc-p" style="margin:18px 20px">Por cada especialidad candidata, marque el nivel que corresponde. La declaración la firma la Dirección de la Escuela y sustenta la decisión de apertura.</p>
     <table class="doc-tb" style="margin:0 20px 18px"><thead><tr><th style="width:180px">Especialidad</th>
      ${Object.values(CAPMETA).map(x=>`<th>${x}</th>`).join("")}</tr></thead>
      <tbody>${L.slice(0,4).map(e=>`<tr><td>${e.n}</td>${K.map(()=>`<td>1 □ 2 □ 3 □ 4 □</td>`).join("")}</tr>`).join("")}
      <tr><td colspan="6" style="text-align:center;color:#5B6470">… y ${L.length-4} especialidades más</td></tr></tbody></table>
     <table class="doc-tb" style="margin:0 20px 20px"><tbody><tr><th style="width:180px">Declara</th><td></td><th style="width:110px">Fecha</th><td></td><th style="width:110px">Firma</th><td></td></tr></tbody></table>
    </div>`:""}
   <div class="ev-p"><span class="capacity-progress-label"><strong class="capacity-progress-count">${listas} de ${L.length}</strong><span>especialidades con sus <b>tres indicadores</b> declarados</span></span>
    <i><em style="width:${Math.round(listas/L.length*100)}%"></em></i></div>
   <div class="cap-gen"><div><b>✦ Evaluar con Génesys</b><span>Génesys solo evalúa <b>Diferenciación frente a la competencia</b> y <b>Habilitación normativa</b>, con el barrido de oferta académica y de norma. Los tres indicadores de la Escuela los marca usted.</span></div>
    <div class="cap-gen-b"><button class="ic-b ${S.capAg?"on":""}" id="ver-agente">${S.capAg?"▣ Ocultar las 2 de Génesys":"▢ Ver las 2 de Génesys"}</button>
    <button class="b-env sm" id="barrer-of">${L.some(e=>e.v.dif&&e.v.hab)?"↺ Volver a evaluar":"✦ Evaluar con Génesys"}</button></div></div>
   <div class="cap-lg">Nivel marcado:
     <span><i style="background:#b91c1c"></i>1 · crítico</span>
     <span><i style="background:#6d28d9"></i>2 · insuficiente</span>
     <span><i style="background:#15803d"></i>3 · parcial</span>
     <span><i style="background:#1d4ed8"></i>4 · completo</span></div>
   <div class="mx-cap"><table class="cap-m" style="min-width:${340+K.length*180}px"><colgroup><col style="width:240px">${K.map(()=>`<col>`).join("")}<col style="width:100px"></colgroup><thead><tr><th class="e-col">Especialidad</th>
     ${K.map((k,ki)=>`<th class="k${ki} ${CAPFUENTE[k]}"><span class="cth">${CAPMETA[k]}<button class="cap-q ${S.capAy===k?"on":""}" data-ayuda="${k}" title="Ver qué significa cada nivel">?</button></span>
       <span class="fu fu-${CAPFUENTE[k]}">${CAPFUENTE[k]==="agente"?"lo levanta Génesys":"lo declara la escuela"}</span></th>`).join("")}
     <th class="r-col">Capacidad</th></tr></thead>
    <tbody>${S.capAy?`<tr class="ay-fila"><td colspan="${K.length+2}">${ayudaCap(S.capAy)}</td></tr>`:""}
     ${L.map(e=>{const i=ESP.indexOf(e), ok=e.VIA!==null;
      return `<tr class="${ok?"ok":""}">
       <td class="e-col"><b>${e.n}</b><span class="f-esd">${e.desc}</span></td>
       ${K.map((k,ki)=>{const ag=CAPFUENTE[k]==="agente", man=ag&&(e.vman||{})[k];
        return `<td class="op-col k${ki}">
         ${ag?`<div class="op-f ${man?"man":""}">${man?"✎ ajustado por el experto":"✦ evaluado por Génesys"}</div>`:""}
         ${[1,2,3,4].map(v=>`<button class="ev-op n${v} ${e.v[k]===v?"on":""} ${ag&&e.v[k]===v?(man?"man":"ag"):""}" data-marca="${i}|${k}|${v}">
         <span class="ev-n">${v}</span><span class="ev-x">${ET[k][v-1]}</span></button>`).join("")}</td>`}).join("")}
       <td class="r-col">${ok?`<span class="sc"><b>${e.VIA}</b><i><em style="width:${e.VIA}%;background:#5B6470"></em></i></span>`
         :`<span class="sin-dec">faltan ${TODAS.filter(k=>CAPFUENTE[k]==="escuela"&&!e.v[k]).length}</span>`}</td></tr>`}).join("")}</tbody></table></div>
  </div>
  ${(()=>{ const fal=L.filter(e=>!TODAS.every(k=>e.v[k]>=1)), ok=!fal.length;
   const faltan=e=>TODAS.filter(k=>!(e.v[k]>=1)).map(k=>CAPMETA[k].split(" ")[0].toLowerCase());
   return `<div class="dr-f"><div class="dr-p"><span class="dr-n">${ok
     ?`<b>Completo.</b> Las ${L.length} especialidades tienen sus cinco indicadores: al procesar aparecen Capacidad y Prioridad y el mapa cruza los dos ejes`
     :`<b>Incompleto:</b> ${fal.length} de ${L.length} especialidades`}</span>
   <button class="b-out2" data-cap="-">Cerrar</button>
   <button class="b-out2" id="cap-avance" title="Guarda lo marcado y cierra; puede seguir otro día">💾 Guardar avance</button>
   <button class="b-env ${ok?"":"trabado"}" id="cap-guardar" data-falta="${fal.length}" title="${ok?"":"Hay especialidades con columnas vacías"}">✓ Declarar y procesar</button></div></div>` })()}
 </aside>`;
}
/* Coherencia OE × competencias: ● la sostiene · ○ contribuye */
let COH=[];
const OEREQ=[
 ["Describe un desempeño, no un aprendizaje","Se redacta con lo que el egresado <b>hace en el trabajo</b> a los 3–5 años —dirige, responde por, conduce—, no con lo que sabe al egresar."],
 ["Es observable por un tercero","El empleador debe poder confirmarlo sin entrevistar al egresado: un cargo ocupado, un servicio dirigido, un proyecto sostenido."],
 ["Se rastrea a una especialidad seleccionada","Si ningún objetivo llega a una especialidad del paso 1.1, esa especialidad no tiene para qué estar en el plan."],
 ["Es alcanzable con las competencias del perfil","Cada objetivo debe poder sostenerse con al menos una competencia aprobada. Si ninguna lo sostiene, falta una competencia o sobra el objetivo."],
 ["Se valida con grupos de interés","Empleadores, egresados y colegio profesional confirman que el desempeño descrito es el que el campo reconoce (exigencia de SINEACE)."]];
function panelCoherencia(){
 const huerf=ARQ.map((a,ci)=>COH.some(r=>r[ci]===2)?null:ci).filter(x=>x!==null);
 return `<div class="coh">
  <div class="coh-d"><b>Qué es un objetivo educacional.</b> Es el desempeño profesional que se espera del egresado
   <b>tres a cinco años después de titularse</b>, cuando ya ejerce. El perfil de egreso dice qué sabe hacer el día que sale;
   el objetivo educacional dice dónde llegó con eso. Por eso se formula una sola vez para toda la carrera y no por competencia.</div>
  <ol class="coh-l">${OEREQ.map(x=>`<li><b>${x[0]}</b><span>${x[1]}</span></li>`).join("")}</ol>
  <div class="coh-t">Prueba de coherencia · cada objetivo contra las competencias del perfil</div>
  <table class="coh-m"><thead><tr><th>Objetivo</th>
   ${ARQ.map((a,i)=>`<th class="cm c${i}">C${i+1} · ${a.alias}</th>`).join("")}<th style="width:120px">Veredicto</th></tr></thead>
   <tbody>${COH.map((r,i)=>`<tr><th class="oe">OE${i+1}</th>
    ${r.map((v,ci)=>`<td class="cm c${ci}">${v===2?'<span class="pt full">●</span>':(v===1?'<span class="pt">○</span>':'<span class="pt no">·</span>')}</td>`).join("")}
    <td>${r.includes(2)?'<span class="chip c-ok">Sostenido</span>':'<span class="chip c-vigilancia">Sin competencia</span>'}</td></tr>`).join("")}</tbody></table>
  <div class="coh-k"><span class="pt full">●</span> la competencia sostiene el objetivo &nbsp;·&nbsp;
   <span class="pt">○</span> contribuye &nbsp;·&nbsp; <span class="pt no">·</span> no interviene</div>
  <div class="coh-v ${huerf.length?"mal":"bien"}">${huerf.length
   ? `Revisar: ${huerf.map(c=>"C"+(c+1)+" · "+(ARQ[c]?ARQ[c].alias:"—")).join(", ")} no sostiene ningún objetivo. O falta un objetivo que la recoja, o la competencia no tiene destino profesional declarado.`
   : `Las ${ARQ.length} competencias sostienen al menos un objetivo, y los ${OE.length} objetivos se apoyan en al menos una competencia. La coherencia se cumple en ambos sentidos.`}</div>
 </div>`;
}
let OE=[];
function vObjetivosPendientes(){
 const competencias=ARQ.length;
 const especialidades=ESP.filter(e=>!e.oculta&&e.sel).length;
 return `<section class="competency-empty objectives-empty" aria-labelledby="objectives-empty-title">
  <header class="competency-empty-heading"><span class="competency-step">1.4</span><div><span class="competency-eyebrow">DEL PERFIL DE EGRESO AL DESEMPEÑO PROFESIONAL</span><h2 id="objectives-empty-title">Objetivos Educacionales</h2><p>Describe lo que el egresado logra entre 3 y 5 años después de titularse.</p></div><span class="competency-status">Aún sin formular</span></header>
  <div class="competency-empty-body">
   <div class="objectives-inputs" aria-label="Insumos para formular objetivos">
    <div class="objectives-input"><span class="correspondence-input-step">PERFIL DE EGRESO</span><div><strong>${competencias}</strong><span>competencias guardadas</span></div><p>Lo que el egresado sabe hacer al terminar la carrera.</p></div>
    <span class="correspondence-cross" aria-hidden="true">→</span>
    <div class="objectives-input objectives-input-accent"><span class="correspondence-input-step">HORIZONTE PROFESIONAL</span><div><strong>3–5</strong><span>años después de egresar</span></div><p>El desempeño observable que alcanza en el campo profesional.</p></div>
   </div>
   <h3 class="competency-process-title">Qué debe cumplir cada objetivo</h3>
   <ol class="competency-process objectives-process">
    <li><span class="competency-process-number" aria-hidden="true">01</span><h4>Describir desempeño</h4><p>Expresa lo que el titulado <b>hace en el trabajo</b>, no lo que aprendió durante la carrera.</p></li>
    <li><span class="competency-process-number" aria-hidden="true">02</span><h4>Ser observable</h4><p>Un empleador, egresado o colegio profesional puede reconocer ese resultado.</p></li>
    <li><span class="competency-process-number" aria-hidden="true">03</span><h4>Tener trazabilidad</h4><p>Cada objetivo se vincula con una competencia y con una especialidad validada.</p></li>
   </ol>
   <div class="objectives-check"><span class="objectives-check-icon" aria-hidden="true">✓</span><div><b>La coherencia se revisa en dos direcciones</b><p>Cada objetivo debe apoyarse en al menos una competencia y cada competencia debe sostener al menos un objetivo.</p></div></div>
  </div>
  <footer class="competency-next"><span class="competency-next-mark" aria-hidden="true">→</span><div><b>Siguiente acción con Génesys</b><p>En la conversación, selecciona <strong>Formular Objetivos</strong>. Los objetivos y su prueba de coherencia aparecerán aquí.</p></div></footer>
 </section>`;
}
function vPerfil(){
 if(!S.objetivos) return vObjetivosPendientes();
 return `<div class="arq-i">Este paso se hace <b>una sola vez para toda la carrera</b>, cuando las ${ARQ.length} competencias ya están definidas y guardadas. Cada objetivo lleva el <b>color de la competencia que lo sostiene</b>; el texto es editable.</div>
 <div class="pf-g">
  <div class="pf-c pf-profile">
   <div class="profile-panel-heading"><span class="profile-panel-icon">C</span><div><span class="profile-panel-eyebrow">RESULTADO AL EGRESAR</span><h2>Perfil de egreso</h2><p>Lo que el titulado sabe hacer al terminar la carrera.</p></div><span class="profile-panel-count">${ARQ.length} competencias</span></div>
   <p class="pf-i">Se compone de las competencias aprobadas; no se redacta aparte.</p>
   ${ARQ.map((a,i)=>`<div class="pf-k c${i}"><span class="pf-n c${i}">C${i+1}</span>
     <div><b class="c${i}">${a.alias}</b><span class="pf-tt c${i}">${a.n}</span>
      <span class="pf-oe">${COH.map((r,j)=>r[i]===2?`OE${j+1}`:null).filter(Boolean).join(" · ")||"sin objetivo"}</span>
      <p class="pf-def">${a.def}</p>
      <p class="pf-cap"><b>Capacidades:</b> ${a.caps.map(k=>k.a).join(" · ")}</p></div></div>`).join("")}
   <div class="pf-k gen"><span class="pf-n">G</span><div><b>Competencias generales</b><span>Cinco, institucionales · se declaran, no se rediseñan aquí</span></div></div>
   <div class="pf-k gen"><span class="pf-n">D</span><div><b>Dominio disciplinar</b><span>Dos · se derivan en el paso 3.4 desde los cursos de especialidad</span></div></div>
  </div>
  <div class="pf-c pf-objectives">
   <div class="profile-panel-heading"><span class="profile-panel-icon objective-icon">→</span><div><span class="profile-panel-eyebrow">RESULTADO PROFESIONAL</span><h2>Objetivos educacionales</h2><p>Lo que el egresado logra a 3–5 años.</p></div><span class="profile-panel-count">${OE.length} objetivos</span></div>
   <div class="blk-h"><div class="ac-t">Prueba y edición de objetivos</div>
    <button class="b-rev ${S.coh?"on":""}" id="b-coh">${S.coh?"▾ Ocultar el concepto":"? Concepto y prueba de coherencia"}</button></div>
   <p class="pf-i">No son el perfil de egreso: describen el desempeño profesional alcanzado años después de egresar. Se derivan de la cartera del paso 1.1 y se validan con grupos de interés.</p>
   ${S.coh?panelCoherencia():""}
   ${OE.map((o,j)=>{const p=COH[j].indexOf(2), sec=COH[j].map((v,i)=>v===1?i:null).filter(x=>x!==null);
     return `<div class="pf-o c${p}"><span class="pf-oc c${p}">${o[0]}</span>
      <div><div contenteditable="true" data-ed="oe|${j}|1">${o[1]}</div>
       <div class="pf-al"><span class="pf-ab c${p}"><i></i>C${p+1} · ${ARQ[p]?ARQ[p].alias:"—"}</span>
        <span class="pf-ax">la sostiene</span>
        ${sec.map(i=>`<span class="pf-ab sec c${i}"><i></i>C${i+1}</span>`).join("")}
        ${sec.length?`<span class="pf-ax">contribuyen</span>`:""}
        <span class="pf-ae">← ${o[2]}</span></div></div></div>`}).join("")}
   <div class="pf-w">Cada objetivo lleva el color de la competencia que lo sostiene y la especialidad de la que se deriva. La prueba completa, en el botón de arriba.</div>
  </div>
 </div>
 `;
}
let VPC={t:"",p:"",s:[]};
/* Versión ajustada que la demostración aplica al pedir «Ajustar con Génesys» */
/* DEMO_AJ: ajuste de demostración de la propuesta de valor; lo trae cada escuela en datos/<cod>.js */
const DIFDEC={confirmado:["c-ok","Diferencial confirmado","Pasa al texto de la propuesta y al estudio"],
 condicionado:["c-vigilancia","Condicionado","Vigencia incierta a 5 años: plan de sostenimiento con responsable y plazo"],
 paridad:["c-descartar","Paridad declarada","Más de la mitad de los competidores puede firmarlo: no diferencia, se declara"],
 reformular:["c-certificacion","Reformular","Sustento entre 0,50 y el mínimo, o texto poco claro"],
 descartado:["c-descartar","Descartado","Sin demostrabilidad, CVR ≤ 0 o espejo > 0,75"]};
/* Lista negra (G0.7): términos que no entran ni en variantes */
const NEGRA=["excelencia","líder","líderes","liderazgo","primer nivel","integral","holístico","holística","sinergia","sinergias","vanguardia","de calidad"];
const LIM={parMin:45,parMax:70,pro:18,prop:18,esp:60};
const palabras=t=>(t||"").trim().split(/\s+/).filter(Boolean).length;
const negra=t=>NEGRA.filter(w=>new RegExp("(^|[^\\wáéíóúñ])"+w+"(?=$|[^\\wáéíóúñ])","i").test(t||""));
const FAM={D1:"Identidad y sello formativo",D2:"Reconocimiento externo de calidad",D3:"Cuerpo docente e investigación",D4:"Entornos de práctica e infraestructura",D5:"Red de convenios y campo real",D6:"Modelo de aprendizaje y tecnología",D7:"Resultados del egresado",D8:"Acceso y sostenibilidad económica"};
const DEST={postulante:"Postulante","decisor familiar":"Decisor familiar",empleador:"Empleador"};
/* Puerta automática G0: ocho verificaciones binarias (+ una por las cadenas). Falla una y el panel no se convoca. */
function g0(){
 const DIF=VPC.dif||[], F=VPC.ficha||{}, C=VPC.cad||{};
 const wt=palabras(VPC.t), wp=palabras(VPC.p);
 const txtAll=[VPC.t,VPC.p,VPC.prop,...(VP||[]).flat()].join(" ");
 const res=(d)=>/D7|Resultados/i.test((d.d||"")+(d.fam||""));
 const cads=[C.car,...(C.esp||[])].filter(Boolean);
 return [
  ["G0.1","Objetivos educacionales del 1.4 guardados",S.done>=16],
  ["G0.2","Cada candidato declara familia, evidencia fechada y responsable",DIF.length>0&&DIF.every(d=>(d.d||d.fam)&&d.ev&&/\d{4}|\d{2}-\d{4}/.test(d.ev)&&d.resp)],
  ["G0.3","Alcance ≥ 60 % de la cohorte en cada candidato",DIF.length>0&&DIF.every(d=>(d.alc??100)>=60)],
  ["G0.4","Cada candidato traza a una competencia o especialidad",DIF.length>0&&DIF.every(d=>d.comp)],
  ["G0.5","Paridades declaradas ≥ 5",(VPC.par||[]).length>=5],
  ["G0.6","Párrafo de 45 a 70 palabras · promesa ≤ 18",wt>=LIM.parMin&&wt<=LIM.parMax&&wp>0&&wp<=LIM.pro],
  ["G0.7","Cero términos de la lista negra",negra(txtAll).length===0],
  ["G0.8","Todo dato de resultados con cohorte y fecha de corte",DIF.filter(res).every(d=>/cohorte/i.test(d.ev)&&/\d{4}/.test(d.ev))],
  ["G0.9","Cada cadena de propósito con sus cuatro anclas",cads.length>0&&cads.every(c=>c.p1&&/\d{4}\)/.test(c.p1)&&/C\d/.test(c.p2||"")&&c.p3&&palabras(c.p4)>0&&palabras(c.p4)<=LIM.prop)]];
}
/* Diferencia palabra por palabra entre dos textos (LCS): lo que Génesys quitó y lo que puso */
function difTexto(a,b){
 const A=(a||"").split(/\s+/).filter(Boolean), B=(b||"").split(/\s+/).filter(Boolean);
 const n=A.length,m=B.length, L=Array.from({length:n+1},()=>new Array(m+1).fill(0));
 for(let i=n-1;i>=0;i--)for(let j=m-1;j>=0;j--) L[i][j]=A[i]===B[j]?L[i+1][j+1]+1:Math.max(L[i+1][j],L[i][j+1]);
 const out=[]; let i=0,j=0; const esc=t=>t.replace(/</g,"&lt;");
 while(i<n&&j<m){ if(A[i]===B[j]){out.push(esc(A[i]));i++;j++} else if(L[i+1][j]>=L[i][j+1]){out.push("<del>"+esc(A[i])+"</del>");i++} else {out.push("<ins>"+esc(B[j])+"</ins>");j++} }
 while(i<n){out.push("<del>"+esc(A[i++])+"</del>")} while(j<m){out.push("<ins>"+esc(B[j++])+"</ins>")}
 return out.join(" ");
}
const cambioTxt=(a,b)=>(a||"").trim()!==(b||"").trim();
/* Estado del ajuste con Génesys: la foto de los textos antes de pedirlo, la instrucción y si ya se ve la versión nueva */
let VPA=null;
function ajusteHecho(){ if(!VPA||!VPA.prev) return false; const p=VPA.prev;
 return cambioTxt(p.t,VPC.t)||cambioTxt(p.p,VPC.p)||cambioTxt(p.prop,VPC.prop)||(VP||[]).some((v,i)=>{const q=(p.vp||[])[i]||[];return cambioTxt(q[0],v[0])||cambioTxt(q[1],v[1])||cambioTxt(q[2],v[2])}) }
function fotoVP(){ return {t:VPC.t,p:VPC.p,prop:VPC.prop,vp:clon(VP||[])} }
function chipDif(d){const D=DIFDEC[d]||DIFDEC.reformular;return `<span class="chip ${D[0]}" title="${D[2]}">${D[1]}</span>`}
const pct=v=>Math.round(v*100)+" %";
function vValorPendiente(){
 return `<section class="value-empty" aria-labelledby="value-empty-title">
  <header class="value-empty-heading"><span class="value-step">1.5</span><div><span class="value-eyebrow">DE LAS DECISIONES A LA PROMESA</span><h2 id="value-empty-title">Propuesta de Valor</h2><p>Lo que distingue a esta carrera y la promesa que puede sostener.</p></div><span class="value-status">Aún sin formular</span></header>
  <div class="value-empty-body">
   <p class="value-lead">La propuesta se deriva de lo que la Escuela ya decidió. Primero se identifican los diferenciales, se comprueba su sustento y luego se redacta una promesa clara para el postulante y su familia.</p>
   <div class="value-flow" aria-label="Proceso de formulación de la propuesta de valor">
    <div class="value-flow-item"><span>01</span><b>Encontrar la diferencia</b><p>Qué puede firmar esta carrera y no cualquier otra.</p></div><i aria-hidden="true">→</i>
    <div class="value-flow-item"><span>02</span><b>Probar el sustento</b><p>Evidencia, alcance y vigencia a cinco años.</p></div><i aria-hidden="true">→</i>
    <div class="value-flow-item value-flow-final"><span>03</span><b>Convertirla en promesa</b><p>Un mensaje breve, demostrable y memorable.</p></div>
   </div>
   <div class="value-inputs"><div><b>Se apoya en</b><span>Especialidades, competencias y objetivos guardados</span></div><div><b>Se valida con</b><span>Panel VALOR y puerta automática G0</span></div></div>
  </div>
  <footer class="value-next"><span aria-hidden="true">✦</span><div><b>Siguiente acción con Génesys</b><p>En la conversación, selecciona <strong>Formular la Propuesta de Valor</strong>. La ficha, los diferenciales y las pruebas aparecerán aquí.</p></div></footer>
 </section>`;
}
function vValor(){
 if(!S.valor) return vValorPendiente();
 if(!S.valor) return vacio("Propuesta de Valor · aún sin formular",
   `La propuesta de valor <b>no se redacta primero</b>: se llena una <b>ficha de cinco campos</b> (destinatario, tensión del campo, con quién se compara, diferenciales candidatos y condición de caducidad), se construye la <b>cadena de propósito</b> de la carrera y de cada competencia, pasa la <b>puerta G0</b> y recién entonces el panel VALOR juzga los diferenciales y los textos. Por eso se formula al final, cuando todo lo anterior ya está decidido y guardado.`,
   "Formular la Propuesta de Valor")
  +`<div class="pf-vp pal"><div class="ac-t">Propuesta de valor de la carrera</div>
    <div class="vac-l"></div><div class="vac-l"></div><div class="vac-l corto"></div></div>`;
 const DIF=VPC.dif||[], conf=DIF.filter(d=>d.dec==="confirmado"), cond=DIF.filter(d=>d.dec==="condicionado"), par=DIF.filter(d=>d.dec==="paridad"), desc=DIF.filter(d=>d.dec==="descartado");
 const T=VPC.txt||{}, F=VPC.ficha||{c1:"",c2:{t:"",f:""},c3:[],c5:""}, C=VPC.cad||{car:null,esp:[]};
 const wt=palabras(VPC.t), wp=palabras(VPC.p), wpr=palabras(VPC.prop), nt=negra([VPC.t,VPC.p,VPC.prop].join(" "));
 const okTxt=T.L>=3&&(T.so||0)>=0.83&&(T.au||0)>=0.83;
 const G=g0(), gOk=G.every(x=>x[2]);
 const ajHecho=ajusteHecho();
 const cadena=(c,k,ttl,cls)=>{ if(!c) return `<div class="cad-c ${cls}"><div class="cad-h"><b>${ttl}</b></div><div class="ac-pend">Sin cadena todavía.</div></div>`;
   const okAn=(c.an||0)>=0.83, okMo=(c.mo||0)>=0.83, okAt=(c.at||0)>=3, okDg=(c.dg||0)===0;
   return `<div class="cad-c ${cls}"><div class="cad-h">${ttl}<span class="chip ${c.dec==="aprobado"?"c-ok":(c.dec==="rechazado"?"c-descartar":"c-certificacion")}" style="margin-left:auto">${c.dec==="aprobado"?"Propósito aprobado":(c.dec==="rechazado"?"Rechazado":(c.dec||"sin veredicto"))}</span></div>
    ${[["1","p1","Problema · dato con fuente, fecha y territorio"],["2","p2","Capacidad · la competencia guardada, por su código"],["3","p3","Consecuencia · qué cambia y para quién"],["4","p4","Propósito · ≤ 18 palabras, en la lengua del postulante"]].map(e=>`<div class="cad-e ${e[1]}"><i>${e[0]}</i><div><span class="v" contenteditable="true" data-ed="cad|${k}|${e[1]}">${c[e[1]]||""}</span><span class="a">${e[2]}${e[1]==="p4"?` · <b class="${palabras(c.p4)>LIM.prop?"mal":""}">${palabras(c.p4)} / ${LIM.prop}</b>`:""}</span></div></div>`).join("")}
    <div class="cad-v"><span class="${okAn?"ok":"ko"}">anclaje ${c.an!=null?pct(c.an):"—"}</span><span class="${okAt?"ok":"ko"}">atribución med. ${c.at??"—"}</span><span class="${okMo?"ok":"ko"}">moviliza I-CVI ${c.mo!=null?c.mo.toFixed(2):"—"}</span><span class="${okDg?"ok":"ko"}">dignidad ${c.dg!=null?pct(c.dg):"—"} (se busca 0)</span></div></div>`};
 const dfk=(a,b)=>cambioTxt(a,b)?difTexto(a,b):`<span style="color:var(--gris-2)">sin cambios</span>`;
 return `<div class="arq-i">Se formula <b>una sola vez para toda la carrera</b> y responde dos preguntas de dos lectores: <b>¿por qué dedicaría mi vida a esto?</b> —la cadena de propósito— y <b>¿por qué esta carrera y no la de al lado?</b> —los diferenciales que pasaron la prueba del espejo—. Nada se redacta primero: se llena la ficha, pasa la puerta G0, el panel VALOR califica y el texto se deriva. Todo es editable.</div>
 <header class="value-live-heading"><span class="value-step">1.5</span><div><span class="value-eyebrow">DE LAS DECISIONES A LA PROMESA</span><h2>Propuesta de Valor</h2><p>La diferencia que esta carrera puede demostrar y sostener ante sus públicos.</p></div><span class="value-live-status">${gOk?"G0 superada":"En revisión"}</span></header>
 <div class="vp-kpis">
  <div class="kpi"><b>${DIF.length}</b><span>candidatos</span></div>
  <div class="kpi k1"><b>${conf.length}</b><span>confirmados</span></div>
  <div class="kpi k4"><b>${cond.length}</b><span>condicionados</span></div>
  <div class="kpi"><b>${par.length}</b><span>en paridad</span></div>
  <div class="kpi"><b>${desc.length}</b><span>descartados</span></div>
  <div class="kpi ${gOk?"k1":"k4"}"><b>${G.filter(x=>x[2]).length} / ${G.length}</b><span>puerta G0</span></div>
  <div class="kpi ${okTxt?"k1":"k4"}"><b>${T.L?T.L.toFixed(0):"—"} · ${T.so!=null?pct(T.so):"—"} · ${T.au!=null?pct(T.au):"—"}</b><span>claridad · sostenido · doble auditorio</span></div>
 </div>
 <div class="vp-g">
  <div class="vp-sust"><div class="ac-t">En qué se sustenta</div>
   ${(VPC.s||[]).map(x=>`<div class="vp-s"><b>${x[0]}</b><span>${x[1]}</span></div>`).join("")}
   <div class="vp-n">Si alguno de estos cambia, la propuesta de valor se rehace. No al revés.</div>
   <div class="ac-t" style="margin-top:14px">Reglas del texto</div>
   <div class="vp-rg"><span>Propósito de la carrera</span><b class="${wpr>LIM.prop?"mal":""}">${wpr} / ${LIM.prop} palabras</b></div>
   <div class="vp-rg"><span>Párrafo de carrera</span><b class="${(wt<LIM.parMin||wt>LIM.parMax)?"mal":""}">${wt} · entre ${LIM.parMin} y ${LIM.parMax}</b></div>
   <div class="vp-rg"><span>Promesa</span><b class="${wp>LIM.pro?"mal":""}">${wp} / ${LIM.pro} palabras</b></div>
   <div class="vp-rg"><span>Lista negra</span><b class="${nt.length?"mal":""}">${nt.length?nt.join(", "):"limpio"}</b></div>
   <div class="vp-n">Un texto se aprueba con claridad ≥ 3, sostenido ≥ 83 % y doble auditorio ≥ 83 %. Si falla el sostenimiento se reescribe el texto, no se busca más evidencia. Un propósito se aprueba con anclaje ≥ 83 %, atribución ≥ 3, moviliza ≥ 0,83 y dignidad 0.</div>
   <div class="ac-t" style="margin-top:14px">Ajustar con Génesys</div>
   <textarea class="dr-t" rows="4" id="vp-txt" placeholder="Qué debería cambiar: tono, énfasis, público, una promesa más concreta…">${VPA&&!ajHecho?(VPA.instr||""):""}</textarea>
   <button class="b-mejora" id="vp-mejora" style="margin-top:8px">✦ Pedir el ajuste a Génesys</button>
   <div class="vp-n">${ESCUELA&&ESCUELA.demo?"El ajuste se aplica al instante y abajo se ven los cambios palabra por palabra.":"La instrucción aparece en la conversación con Génesys, lista para copiar al chat del proyecto. Cuando Génesys escriba la versión ajustada, abajo se ven los cambios palabra por palabra."}</div>
</div>
  <div class="vp-main">
   <div class="vp-fi"><div class="ac-t">Ficha de cinco campos · el texto se deriva de aquí, no se escribe aparte</div>
    <div class="fi-c"><span class="k">C1</span><span class="n">Destinatario principal<br>postulante · decisor familiar · empleador</span><span class="v" contenteditable="true" data-ed="ficha|c1">${F.c1||""}</span><span class="l ${F.c1?"":"mal"}">${F.c1?"1 de 3":"vacío"}</span></div>
    <div class="fi-c"><span class="k">C2</span><span class="n">Tensión del campo<br>el problema con su dato y su fuente</span><span><span class="v" contenteditable="true" data-ed="ficha|c2t">${(F.c2||{}).t||""}</span><span class="a" style="display:block;font-size:10px;color:var(--gris-2);margin-top:2px">Fuente: <span class="v" contenteditable="true" data-ed="ficha|c2f">${(F.c2||{}).f||""}</span></span></span><span class="l ${palabras((F.c2||{}).t)>25||!(F.c2||{}).f?"mal":""}">${palabras((F.c2||{}).t)} / 25${(F.c2||{}).f?"":" · sin fuente"}</span></div>
    <div class="fi-c"><span class="k">C3</span><span class="n">Categoría de comparación<br>instituciones reales del barrido del 1.1</span><span class="v" contenteditable="true" data-ed="ficha|c3">${(F.c3||[]).join(" · ")}</span><span class="l ${(F.c3||[]).length<2?"mal":""}">${(F.c3||[]).length} · mín. 2</span></div>
    <div class="fi-c"><span class="k">C4</span><span class="n">Diferenciales candidatos<br>familia D1–D8, evidencia fechada, responsable, alcance, competencia</span><span class="v" style="color:var(--gris)">${DIF.length} candidatos en la tabla de abajo · ${conf.length} confirmados</span><span class="l ${(DIF.length<3||DIF.length>8)?"mal":""}">3 a 8</span></div>
    <div class="fi-c"><span class="k">C5</span><span class="n">Condición de caducidad<br>hecho concreto y fechable</span><span class="v" contenteditable="true" data-ed="ficha|c5">${F.c5||""}</span><span class="l ${palabras(F.c5)>15||!F.c5?"mal":""}">${palabras(F.c5)} / 15</span></div>
    <div class="ac-t" style="margin-top:12px">Paridades declaradas · lo que no se usará como argumento (mínimo cinco)</div>
    <div class="v" contenteditable="true" data-ed="par|0" style="font-size:11.5px;color:#374151;line-height:1.55;border-radius:5px;padding:3px 6px">${(VPC.par||[]).join(" · ")}</div>
    <div class="fi-par">${(VPC.par||[]).map(x=>`<span>${x}</span>`).join("")}<span style="background:${(VPC.par||[]).length>=5?"#dcfce7;color:#15803d":"#fee2e2;color:#b91c1c"}">${(VPC.par||[]).length} / 5</span></div>
    <div class="ac-t" style="margin-top:12px">Puerta automática G0 · falla una y el panel no se convoca</div>
    <div class="g0">${G.map(x=>`<div><i class="${x[2]?"ok":"ko"}">${x[2]?"✓":"✕"}</i><span><b>${x[0]}</b>${x[1]}</span></div>`).join("")}</div>
    <div class="g0-r ${gOk?"ok":"ko"}">${gOk?"G0 superada: el panel VALOR se convocó con los umbrales declarados antes de la ronda 1.":"G0 no superada: corrija lo marcado antes de convocar al panel. Lo que ya calificó el panel se conserva, pero no se guarda con G0 fallida."}</div>
   </div>
   <div class="cad"><div class="ac-t">Cadena de propósito · ¿por qué dedicaría mi vida a esto?</div>
    <div class="vp-n" style="margin:0 0 10px">Cuatro eslabones con ancla obligatoria: el problema con su dato, la competencia guardada que lo enfrenta, qué cambia en la vida de alguien nombrado y el propósito en el que el postulante se reconoce. La magnitud la pone la cifra, no el adjetivo; solo se promete lo que depende del egresado; el propósito se deriva, no se escribe primero.</div>
    <div class="cad-g">${cadena(C.car,"car",`<b>De la carrera</b>`,"car")}
     ${ARQ.map((a,i)=>cadena((C.esp||[])[i],"esp"+i,`<span class="pf-n c${i}">C${i+1}</span><b>${a.alias}</b>`,"c"+i)).join("")}</div></div>
   <div class="vp-dif">
    <div class="blk-h"><div class="ac-t">Diferenciales · lo que solo esta carrera puede firmar</div>
     <button class="b-rev ${S.actaV?"on":""}" id="t-acta-v">${S.actaV?"▾ Ocultar el acta del panel":"▸ Ver el acta del panel VALOR"}</button></div>
    ${DIF.length?`<div class="scroll-x"><table class="tb-dif"><thead><tr><th style="width:250px">Diferencial</th><th style="width:130px">Familia</th><th>Evidencia fechada · responsable</th><th class="num" title="Porcentaje de la cohorte que alcanza">Alcance</th><th class="num" title="Competidores de la región que pueden firmarlo hoy">Espejo</th><th class="num" title="Mediana demostrabilidad × mediana relevancia (1–16)">Sustento</th><th style="width:150px">Decisión</th></tr></thead>
     <tbody>${[...DIF].sort((a,b)=>({confirmado:0,condicionado:1,reformular:2,paridad:3,descartado:4}[a.dec]-{confirmado:0,condicionado:1,reformular:2,paridad:3,descartado:4}[b.dec])||b.sust-a.sust).map((d,k)=>{const di=DIF.indexOf(d);
      return `<tr class="${d.dec}"><td><b class="f-nom" contenteditable="true" data-ed="dif|${di}|n">${d.n}</b><span class="f-sub">${d.comp?"Sostiene: "+d.comp:""}</span></td>
       <td><span class="chip c-prop" title="${FAM[d.d]||""}">${d.d?d.d+" · ":""}${d.fam}</span></td>
       <td class="f-sub" style="margin:0"><span contenteditable="true" data-ed="dif|${di}|ev">${d.ev}</span><span style="display:block;color:var(--gris-2)">${d.resp||"responsable por definir"}</span></td>
       <td class="num"><b class="${(d.alc??100)<60?"mal":""}" style="${(d.alc??100)<60?"color:#b91c1c":""}">${d.alc!=null?d.alc+" %":"—"}</b></td>
       <td class="num"><span class="sc"><b class="${d.esp>0.5?"mal":""}">${pct(d.esp)}</b><i><em style="width:${Math.round(d.esp*100)}%;background:${d.esp>0.5?"#b91c1c":"#003366"}"></em></i></span></td>
       <td class="num"><span class="pri">${d.sust}</span><span class="rk">de 16</span></td>
       <td>${chipDif(d.dec)}${d.dec==="condicionado"?`<span class="f-sub">${d.resp||"responsable por definir"} · ${d.plazo||"plazo por definir"}</span>`:""}</td></tr>`}).join("")}</tbody></table></div>`
     :`<div class="ac-pend">Sin diferenciales todavía. El encargo de este momento los deriva de lo guardado y los somete al panel VALOR.</div>`}
    ${S.actaV?`<div class="acta-b">
     <div class="acta-n">Qué hace el panel VALOR: seis expertos —orientador vocacional que lee como postulante, empleador, par evaluador de acreditación, analista de oferta comparada, director de escuela del campo y editor de mensaje institucional— más un guardián que no califica. Por cada diferencial: <b>Espejo</b> (¿un competidor puede firmarlo hoy?), <b>D</b> demostrabilidad, <b>R</b> relevancia en la matrícula, <b>S</b> esencialidad y <b>V</b> vigencia a 5 años. Por cada cadena de propósito: anclaje, atribución, movilización y dignidad (en ese objeto el analista de oferta cede el puesto a un padre o madre que decide y paga). Umbrales declarados antes de la ronda 1: espejo ≤ 25 %, I-CVI ≥ 0,83, CVR crítico 1,00 con N = 6, mediana V ≥ 3, acuerdo ≥ 75 % y RIC ≤ 1. Tope: 2 rondas. Estado que deja: <b>revisado</b>.</div>
     <div class="scroll-x"><table class="tb-acta"><thead><tr><th style="width:240px">Diferencial</th><th class="num">Espejo</th><th class="num">I-CVI D</th><th class="num">I-CVI R</th><th class="num">CVR</th><th class="num">Med. V</th><th class="num">Acuerdo · RIC</th><th class="num">Sustento</th><th style="width:140px">Decisión</th></tr></thead>
      <tbody>${DIF.map(d=>`<tr><td>${d.n}</td><td class="num ${d.esp<=0.25?"ok":"ko"}">${pct(d.esp)}</td><td class="num ${d.icviD>=0.83?"ok":"ko"}">${d.icviD.toFixed(2)}</td><td class="num ${d.icviR>=0.83?"ok":"ko"}">${d.icviR.toFixed(2)}</td><td class="num ${d.cvr>=0.99?"ok":(d.cvr<=0?"ko":"")}">${d.cvr.toFixed(2)}</td><td class="num ${d.medV>=3?"ok":"ko"}">${d.medV}</td><td class="num ${d.ac>=75&&d.ric<=1?"ok":"ko"}">${d.ac} % · ${d.ric}</td><td class="num"><b>${d.sust}</b></td><td>${chipDif(d.dec)}</td></tr>`).join("")}</tbody></table></div>
     ${(C.car||(C.esp||[]).length)?`<div class="scroll-x" style="margin-top:8px"><table class="tb-acta"><thead><tr><th style="width:200px">Cadena de propósito</th><th class="num">Anclaje</th><th class="num">Med. At</th><th class="num">I-CVI Mo</th><th class="num">Dignidad</th><th style="width:140px">Decisión</th></tr></thead>
      <tbody>${[["De la carrera",C.car],...ARQ.map((a,i)=>[a.alias,(C.esp||[])[i]])].filter(x=>x[1]).map(x=>{const c=x[1];return `<tr><td>${x[0]}</td><td class="num ${(c.an||0)>=0.83?"ok":"ko"}">${pct(c.an||0)}</td><td class="num ${(c.at||0)>=3?"ok":"ko"}">${c.at??"—"}</td><td class="num ${(c.mo||0)>=0.83?"ok":"ko"}">${(c.mo||0).toFixed(2)}</td><td class="num ${(c.dg||0)===0?"ok":"ko"}">${pct(c.dg||0)}</td><td><span class="chip ${c.dec==="aprobado"?"c-ok":"c-certificacion"}">${c.dec||"—"}</span></td></tr>`}).join("")}</tbody></table></div>`:""}
     <div class="acta-u"><b>Textos:</b> claridad mediana <b>${T.L??"—"}</b> · sostenido por la evidencia de las competencias <b>${T.so!=null?pct(T.so):"—"}</b> · se sostiene ante un postulante de 17 años y ante un par evaluador <b>${T.au!=null?pct(T.au):"—"}</b>. ${VPC.pend?"<br>Preguntas abiertas: "+VPC.pend:""}</div>
    </div>`:""}
   </div>
   ${VPA?`<div class="aj"><div class="aj-h">Ajuste pedido ${VPA.fecha||""}<span class="et ${ajHecho?"ok":""}">${ajHecho?"cambios aplicados":"esperando a Génesys"}</span></div>
     <div class="aj-i"><b>Instrucción:</b> ${(VPA.instr||"más concreta y con la promesa al frente").replace(/</g,"&lt;")}</div>
     ${ajHecho?`${VPC.nota?`<div class="aj-n"><b>Génesys:</b> ${VPC.nota.replace(/</g,"&lt;")}</div>`:""}
       <div class="aj-d"><b class="k">Párrafo de la carrera</b>${dfk(VPA.prev.t,VPC.t)}</div>
       <div class="aj-d"><b class="k">Promesa</b>${dfk(VPA.prev.p,VPC.p)}</div>
       ${cambioTxt(VPA.prev.prop,VPC.prop)?`<div class="aj-d"><b class="k">Propósito</b>${difTexto(VPA.prev.prop,VPC.prop)}</div>`:""}
       ${(VP||[]).map((v,i)=>{const q=(VPA.prev.vp||[])[i]||[]; const ch=[0,1,2].filter(k=>cambioTxt(q[k],v[k])); return ch.length?`<div class="aj-d"><b class="k">${ARQ[i]?ARQ[i].alias:"C"+(i+1)}</b>${ch.map(k=>`<div>${["Propuesta","Promesa","Propósito"][k]}: ${difTexto(q[k],v[k])}</div>`).join("")}</div>`:""}).join("")}
       <div class="aj-a"><button class="p" id="aj-ok">✓ Aceptar los cambios</button><button id="aj-no">↶ Volver a la versión anterior</button></div>`
     :`<div class="aj-a">${ESCUELA&&ESCUELA.demo?"":`<button id="aj-ver">↻ Ver si Génesys ya escribió</button>`}<button id="aj-no">✕ Cancelar el ajuste</button></div>`}</div>`:""}
   <div class="pf-vp"><div class="ac-t">Propuesta de valor de la carrera · propósito → propuesta → promesa</div>
    <div class="pf-prop"><b>Propósito</b><span contenteditable="true" data-ed="vpc|prop">${VPC.prop||""}</span><span class="vp-ct"><b class="${wpr>LIM.prop?"mal":""}">${wpr}</b> / ${LIM.prop}</span></div>
    <div class="pf-vpx" contenteditable="true" data-ed="vpc|t">${VPC.t}</div>
    <div class="vp-ct" style="text-align:right;margin:2px 8px 0"><b class="${(wt<LIM.parMin||wt>LIM.parMax)?"mal":""}">${wt}</b> palabras · entre ${LIM.parMin} y ${LIM.parMax} · [1] forma un profesional que… [2] se diferencia por… [3] y lo demuestra con…</div>
    <div class="pf-vpp"><b>Promesa</b><span contenteditable="true" data-ed="vpc|p">${VPC.p}</span><span class="vp-ct"><b class="${wp>LIM.pro?"mal":""}">${wp}</b> / ${LIM.pro}</span></div>
    ${par.length?`<div class="vp-par"><b>Lo que no se firma como diferencia</b> —paridad declarada—: ${par.map(d=>d.n.toLowerCase()).join("; ")}. Se dice, pero no se promete.</div>`:""}</div>
   <div class="vp-esp"><div class="ac-t">Por especialidad · propósito, propuesta y promesa · van en la sección 2 de cada ficha</div>
    ${ARQ.map((a,i)=>`<div class="vp-e c${i}"><div class="vp-eh"><span class="pf-n c${i}">C${i+1}</span><b>${a.alias}</b><span class="tl-t" style="margin-left:auto">propósito ${palabras(VP[i]?VP[i][2]:"")} / ${LIM.prop} · ${palabras(VP[i]?VP[i][0]:"")} / ${LIM.esp} · promesa ${palabras(VP[i]?VP[i][1]:"")} / ${LIM.pro}</span></div>
      <div class="pf-prop" style="margin-bottom:8px"><b>Propósito</b><span contenteditable="true" data-ed="vp|${i}|2" style="font-size:12px">${VP[i]&&VP[i][2]?VP[i][2]:""}</span></div>
      <div class="vp-ed" contenteditable="true" data-ed="vp|${i}|0">${VP[i]?VP[i][0]:""}</div>
      <div class="vp-ep"><b>Promesa</b><span contenteditable="true" data-ed="vp|${i}|1">${VP[i]?VP[i][1]:""}</span></div></div>`).join("")}</div>
  </div>
 </div>`;
}
function docCompleto(){
 const t=S.fichaC;
 const g=ARQ.map((a,i)=>{S.fichaC=i; const h=fichaHTML(); return h}).join('<div class="doc-corte"></div>');
 S.fichaC=t;
 return `<div class="fi-sel"><span class="tl-k">Ficha de</span>
   ${ARQ.map((x,i)=>`<button class="fi-b" data-ficha="${i}">C${i+1} · ${x.alias}</button>`).join("")}
   <button class="fi-b tot on" data-ficha="-1">▤ Documento completo · ${ARQ.length} fichas</button></div>
  <div class="ficha-acc"><button class="b-desc" id="b-word">⤓ Descargar en Word (documento completo)</button>
   <span class="fa-n">Las ${ARQ.length} fichas en un solo archivo, una por página</span></div>
  <div class="hoja-doc" id="doc-ficha">${g}</div>`;
}
function fichaHTML(){
 const ci=Math.max(0,S.fichaC), c=ARQ[ci];
 const idd=[["Programa curricular","Escuela Profesional de "+nombreEsc()],["Área formativa",META().area||nombreEsc()],
  ["Destinataria",(META().directora||"Dirección de la Escuela")+" — Dirección de la Escuela Profesional"],["Presentado por","Dirección de Currículo"],
  ["Versión / fecha","v1.0 · "+MES()],["Estado","Borrador para revisión"]];
 const esp=c.esp[0]?c.esp[0].n:"—";
 return `<div class="hoja-v"><div class="cinta"><div class="ci-1">FASE 1</div><div class="ci-2"><b>Diseño de la propuesta de valor profesional</b>
    <span>Metodología de Rediseño Curricular · Fase 1 de 5</span></div></div>
  <h1 class="doc-t">FICHA TÉCNICA DE LA COMPETENCIA</h1>
  <p class="doc-st">Documento oficial para revisión y aprobación curricular · Una ficha por competencia</p>
  <table class="doc-id">${idd.map(x=>`<tr><th>${x[0]}</th><td>${x[1]}</td></tr>`).join("")}</table>
  <h2 class="doc-s"><i>0</i> Resumen ejecutivo</h2>
  <p class="doc-p">La competencia <b>${c.n}</b>, asociada a la especialidad <b>${esp}</b>, se estructura en ${c.caps.length} capacidades que reproducen el ciclo profesional completo. Su formulación proviene del paso 1.2 de la Fase 1: derivada de las especialidades validadas con el plan sellado y contrastada después con la formulación vigente; el paso 1.3 registra su correspondencia con cada especialidad.</p>
  <p class="doc-p">Una vez aprobada, la competencia queda congelada y habilita el inicio de la Fase 2, momento en el que se redactará la <b>definición operativa</b> de la competencia y de cada capacidad. Esta ficha no contiene cursos, créditos ni resultados de aprendizaje.</p>
  <table class="doc-tb"><tbody>
   <tr><th style="width:130px">Código</th><td style="width:170px">C${ci+1}</td><th style="width:130px">Alias</th><td>${c.alias}</td></tr>
   <tr><th>Capacidades</th><td>${c.caps.length}</td><th>Especialidad asociada</th><td>${esp}</td></tr>
   <tr><th>Potencial de mercado</th><td>${SUS[ci][0]} / 100</td><th>Capacidad instalada</th><td>${SUS[ci][1]} / 100</td></tr>
  </tbody></table>
  <div class="pg-n">Página 1 de la ficha · orientación vertical. La competencia y sus capacidades se despliegan completas en la hoja horizontal siguiente.</div>
  </div><div class="hoja-h"><div class="pg-b"><span>Hoja horizontal</span> La competencia a la izquierda, sus ${c.caps.length} capacidades a la derecha — todo el mapa en una sola vista</div>
  <h2 class="doc-s"><i>1</i> La competencia y sus capacidades</h2>
  <table class="cc-g"><tr>
   <td class="cc-a" style="width:40%;vertical-align:top">
    <div class="cc-cod">C${ci+1}</div>
    <div class="cc-al">${c.alias}</div>
    <div class="cc-n">${c.n}</div>
    <div class="cc-df"><b>Definición conceptual</b><p>${c.def}</p></div>
    <div class="cc-df pend"><b>Definición operativa</b><p>Pendiente · se redacta al cerrar la Fase 2, con las funciones, métodos, recursos y escenarios de ejercicio.</p></div>
    <table class="cc-tb"><tbody>
     <tr><th>Tipo</th><td>De especialidad</td></tr>
     <tr><th>Especialidad</th><td>${esp}</td></tr>
     <tr><th>Origen</th><td>${S.contrasteOmitido?"Derivada del campo · sin contraste":({reformular:"Reformulada del plan vigente",conservar:"Conservada literal del plan vigente",nueva:"Nueva · el plan no la recogía"}[c.dec]||"Derivada del campo")}</td></tr>
    </tbody></table>
   </td>
   <td style="width:14px"></td>
   <td class="cc-b" style="width:58%;vertical-align:top">
    <div class="cc-kt">Capacidades · ${c.caps.length} tramos del proceso, cada uno con evidencia propia</div>
    <div class="cc-kg">${c.caps.map((k,i)=>`<div class="cc-k">
      <div class="cc-kh"><span class="cap-c">C${ci+1}.${i+1}</span><span class="cap-a">${k.a}</span>
       ${k.e?`<span class="cap-e">${k.e}</span>`:""}</div>
      <div class="cc-kn">${k.n}</div>
      <p class="cc-kd">${k.d}</p>
      <p class="cc-kp">Definición operativa · Fase 2</p></div>`).join("")}</div>
   </td>
  </tr></table>
  </div><div class="hoja-v">
  <h2 class="doc-s"><i>2</i> Propuesta de valor de la especialidad</h2>
  ${VP[ci][2]?`<div class="doc-df"><b>Propósito</b><p><b>${VP[ci][2]}</b></p></div>`:""}
  <div class="doc-df"><b>Descripción</b><p>${VP[ci][0]}</p></div>
  <div class="doc-df oro"><b>Promesa de valor</b><p>${VP[ci][1]}</p></div>
  <h2 class="doc-s"><i>3</i> Sustento de mercado de la especialidad</h2>
  <table class="doc-tb"><thead><tr><th>Indicador</th><th style="width:110px">Resultado</th><th>Lectura</th></tr></thead><tbody>
   <tr><td>Potencial del mercado laboral</td><td>${SUS[ci][0]} / 100</td><td>${SUS[ci][2]}</td></tr>
   <tr><td>Capacidad instalada</td><td>${SUS[ci][1]} / 100</td><td>${SUS[ci][3]}</td></tr>
   <tr><td>Prioridad en la cartera</td><td>${Math.round(SUS[ci][0]*SUS[ci][1]/100)} %</td><td>Segmento <b>${SUS[ci][4]}</b></td></tr></tbody></table>
  <h2 class="doc-s"><i>4</i> Trazabilidad con el plan vigente</h2>
  <table class="doc-tb"><thead><tr><th style="width:250px">Formulación vigente</th><th style="width:110px">Decisión</th>
    <th style="width:230px">Formulación propuesta</th><th>Sustento</th></tr></thead><tbody>
   <tr><td>${trazaDe(c)?trazaDe(c).p:"Sin equivalente en el plan vigente"}</td><td><b>${trazaDe(c)?(trazaDe(c).d==="se reformula"?"Reformular":"Conservar"):"Nace"}</b></td><td>${c.n}</td><td>${trazaDe(c)?trazaDe(c).s:"Competencia derivada del campo sin correspondencia en el plan"}</td></tr>
  </tbody></table>
  <h2 class="doc-s"><i>5</i> Conclusiones y recomendaciones</h2>
  <ul class="doc-ul">
   <li>La competencia conserva el objeto profesional del plan vigente y precisa su alcance según la especialidad seleccionada en el paso 1.1.</li>
   <li>Las ${c.caps.length} capacidades reproducen la secuencia real del proceso profesional, sin traslapes ni vacíos.</li>
   <li>Todo el contenido es trazable a la investigación de especialidades y al Plan de Estudios 2024.</li></ul>
  <p class="doc-p">Se recomienda aprobar la presente ficha técnica, a fin de habilitar el inicio de la Fase 2 sobre una formulación congelada y trazable.</p>
  <h2 class="doc-s"><i>6</i> Aprobación</h2>
  <table class="doc-tb"><thead><tr><th style="width:110px">Acción</th><th>Nombre y cargo</th>
    <th style="width:110px">Fecha</th><th style="width:130px">Firma</th></tr></thead><tbody>
   <tr><td>Elabora</td><td>Dirección de Currículo</td><td></td><td></td></tr>
   <tr><td>Revisa</td><td>${META().directora||"Dirección de la Escuela"} — Dirección de la Escuela Profesional</td><td></td><td></td></tr>
   <tr><td>Aprueba</td><td>Consejo de Facultad</td><td></td><td></td></tr></tbody></table>
  <h2 class="doc-s"><i>A</i> Anexo — Referencias</h2>
  <div class="doc-refs">${[1,2,4,6,8].map(i=>`<p>${REF(i).t} ${REF(i).u}</p>`).join("")}</div></div>`;
}
let VP=[];
let SUS=[];
/* La pestaña Informe contiene dos documentos: las fichas técnicas y el informe que las consolida. */
function vInforme(){
 const sub=`<div class="doc-sel">
  ${S.fichas?`<button class="ds-b ${S.doc==="fichas"?"on":""}" data-doc="fichas"><b>Fichas Técnicas</b>
   <span>${ARQ.length} competencias · P001</span></button>`:""}
  ${S.informe?`<button class="ds-b ${S.doc==="informe"?"on":""}" data-doc="informe"><b>Estudio Prospectivo de la Carrera Profesional</b>
   <span>${S.infVer?S.infVer+" · guardado":"borrador v1.0"}</span></button>`:""}
 </div>`;
 return (S.fichas?sub:"")+(S.doc==="informe"&&S.informe?vInformeDoc():vFicha());
}
function vInformeDoc(){
 if(!S.informe) return vacio("Estudio Prospectivo de la Carrera Profesional · aún sin armar",
   `Consolida los cinco pasos anteriores en un solo documento de aprobación para la Dirección, con las ${ARQ.length} fichas técnicas. <b>Nada se inventa</b>: todo se deriva de lo ya aprobado y el documento queda versionado.`,
   "Armar el Estudio Prospectivo de la Carrera");
 const L=ESP.filter(e=>!e.oculta).sort((a,b)=>b.PRI-a.PRI);
 const dentro=L.filter(e=>e.sel);
 const ver=S.infVer||"v1.0 · borrador";
 return `<div class="ficha-acc"><button class="b-desc" id="b-word-inf">⤓ Descargar el estudio en Word</button>
   <span class="fa-n">${ver} · ${IDX.length} secciones · escrito para la Dirección · se regenera si cambia cualquier paso anterior</span></div>
  <div class="hoja-doc" id="doc-ficha">
   <div class="hoja-v"><div class="cinta"><div class="ci-1">FASE 1</div><div class="ci-2"><b>Estudio Prospectivo de la Carrera Profesional</b>
     <span>Metodología de Rediseño Curricular · Escuela Profesional de ${nombreEsc()}</span></div></div>
    <h1 class="doc-t">ESTUDIO PROSPECTIVO DE LA CARRERA PROFESIONAL</h1>
    <p class="doc-st">${nombreEsc()} · Qué pide el campo, qué puede sostener la Escuela y qué carrera vamos a ofrecer · ${ver}</p>
    <table class="doc-id"><tr><th>Programa curricular</th><td>Escuela Profesional de ${nombreEsc()}</td></tr>
     <tr><th>Elaborado por</th><td>Dirección de Currículo con el asistente Génesys</td></tr>
     <tr><th>Destinataria</th><td>${META().directora||"Dirección de la Escuela"} — Dirección de la Escuela Profesional</td></tr>
     <tr><th>Aprueba</th><td>Consejo de Facultad</td></tr>
     <tr><th>Versión / fecha</th><td>${ver} · ${MES()}</td></tr>
     <tr><th>Método aplicado</th><td>Metodología de Rediseño Curricular ${ESCUELA&&ESCUELA.metodo?ESCUELA.metodo:METODO} · Fase 1, seis pasos</td></tr></table>

    <h2 class="doc-s"><i>1</i> Resumen ejecutivo</h2>
    <p class="doc-p"><b>El campo ya decidió; falta que la Escuela lo alcance.</b> Barrimos el mercado de ${META().campo||nombreEsc().toLowerCase()} <b>a plan cerrado</b> y encontramos <b>${L.length} especialidades</b> con evidencia de contratación real. Cada una fue medida en dos ejes que no se compensan entre sí —el <b>potencial del mercado laboral</b> (demanda, tendencia, impacto y sostenibilidad frente a la automatización) y la <b>capacidad instalada</b> de la Escuela— y validada por un panel de expertos en una ronda de e-Delphi modificado ${CM("rand")}.</p>
    <p class="doc-p"><b>La apuesta: ${dentro.length} especialidades entran al plan.</b> Son las que el mercado paga hoy, seguirá pagando en cinco años y la Escuela puede sostener —o puede habilitar con un plan de responsable y plazo—. Las ${L.length-dentro.length} restantes no se descartan a ciegas: cada una queda con destino declarado (mención progresiva, vigilancia para el próximo ciclo, función de la Fase 2 o descarte con motivo). Al determinar las competencias desde el campo y contrastarlas con el ${ESCUELA&&ESCUELA.plan?ESCUELA.plan:"plan vigente"}, ${TRAZA.filter(t=>t.d==="se reformula").length} de las ${TRAZA.length} competencias de especialidad se reformulan y ${TRAZA.filter(t=>t.d==="se conserva").length} se conserva literal: el plan no estaba mal, estaba incompleto.</p>
    <p class="doc-p"><b>El propósito y la promesa que salen de todo esto.</b> Propósito: «${(VPC.prop||"—").replace(/\.$/,"")}». Promesa: «${(VPC.p||"").replace(/\.$/,"")}». No son eslóganes: el propósito se deriva de una cadena que ancla un problema con su dato a una competencia guardada, y la promesa es la frase que ${(VPC.dif||[]).filter(d=>d.dec==="confirmado").length||"los"} diferenciales confirmados por el panel pueden sostener ante un postulante y ante acreditación (sección 7).</p>
    <p class="doc-p"><b>Lo que la Dirección recibe:</b> una arquitectura de <b>${ARQ.length} competencias</b> con sus capacidades, <b>${OE.length} objetivos educacionales</b> rastreables a las especialidades que el campo contrata, y una propuesta de valor que ninguna otra oferta de la región puede firmar. Aprobar este estudio es aprobar la promesa con la que la carrera saldrá a captar a su próxima promoción.</p>

    <h2 class="doc-s"><i>2</i> Introducción</h2>
    <p class="doc-p"><b>El objeto.</b> Toda carrera universitaria vive de una promesa: que quien la estudie ejercerá lo que el campo contrata, y no lo que el plan de estudios recordaba de la década pasada. Este estudio pone esa promesa a prueba para la <b>Escuela Profesional de ${nombreEsc()}</b>. No parte del plan vigente ni de lo que la Escuela ya sabe hacer: parte del <b>campo profesional</b> —lo que los empleadores están contratando hoy, con qué nombre, con qué exigencia y con qué tendencia— y recién después mira hacia adentro. Es la lógica del diseño por competencias que el proyecto Tuning fijó para la región: la competencia se define desde el desempeño que el campo exige, no desde el contenido que la universidad acostumbra a enseñar ${CM("tuning")}.</p>
    <p class="doc-p"><b>La pregunta y por qué ahora.</b> ¿Qué contrata el campo hoy, hacia dónde va en cinco años y qué de eso puede sostener la Escuela? La Ley Universitaria obliga a actualizar el currículo cada tres años o cuando sea conveniente, según los avances científicos y tecnológicos ${CM("ley")}; pero el motivo de fondo no es normativo: es que cada año de demora produce una promoción entera que egresa sin la competencia que el mercado ya está pagando. Las fuentes del campo que sustentan esta pregunta —norma sectorial, series de empleo, registros del colegio profesional y proyecciones de fuerza laboral— se citan en las secciones 5 y 6 y se listan completas en el anexo.</p>
    <p class="doc-p"><b>El enfoque: prospectivo, no solo diagnóstico.</b> Un estudio de mercado describe el presente; un estudio prospectivo decide sobre un horizonte —aquí, los <b>cinco años</b> que separan la primera matrícula del primer egresado— y declara la incertidumbre en vez de esconderla ${CM("godet")}. Por eso cada especialidad se valora no solo por cuántos puestos hay, sino por hacia dónde va la demanda, qué norma la empuja, qué inversión la sostiene y cuánto de su ejercicio resistirá la automatización. El resultado no es un ranking: es un <b>mapa de decisión</b> que dice qué entra al plan, qué entra con condiciones y qué se deja para el próximo ciclo, con el sustento que un comité de acreditación puede auditar.</p>
    <p class="doc-p"><b>Cómo se hizo.</b> Se aplicó la Fase 1 de la Metodología de Rediseño Curricular en seis pasos: (1) barrido del campo profesional <i>a plan cerrado</i> —es decir, sin abrir el plan de estudios vigente, para que el barrido no encontrara lo que el plan ya dice— y validación por un panel de expertos, con dos decisiones de Escuela sobre qué se trabaja y qué entra; (2) determinación de las competencias desde el campo y contraste con el plan vigente; (3) matriz de correspondencia entre especialidades y competencias; (4) objetivos educacionales; (5) propuesta de valor; (6) este estudio y las fichas técnicas. Los paneles siguen el método e-Delphi modificado de RAND/UCLA ${CM("rand")}, con índice de validez de contenido ${CM("lynn")}; ${CM("polit").replace(/[()]/g,"")}) y razón de validez de contenido ${CM("lawshe")}, con umbrales declarados antes de la primera ronda. Cada paso cerró con una decisión de la Escuela, registrada.</p>
    <p class="doc-p"><b>Qué se pide a la Dirección.</b> Leer las secciones 3 a 7 como lo que son —un diagnóstico del mercado, una recomendación de apuesta y la promesa que esa apuesta autoriza— y aprobar, en la sección 11, una versión que congele la arquitectura de competencias y habilite la Fase 2. Lo que aquí se decide se convertirá en el perfil que el postulante lee, en la promesa que admisión sostiene y en la competencia que el empleador verifica.</p>

    <h2 class="doc-s"><i>3</i> Objetivo del estudio</h2>
    <div class="doc-df"><b>Objetivo general</b><p>Determinar qué especialidades del campo profesional de ${META().campo||nombreEsc().toLowerCase()} tienen demanda comprobada y pueden ser sostenidas por la Escuela, para fundamentar el rediseño de las competencias del plan de estudios.</p></div>
    <table class="doc-tb"><thead><tr><th style="width:36px">N.º</th><th>Objetivo específico</th></tr></thead><tbody>
     ${[["Identificar las especialidades que el mercado contrata como puesto propio o que sostienen un negocio propio, sin leer el plan vigente."],
        ["Valorar cada especialidad en potencial del mercado laboral y en capacidad instalada de la Escuela, con fuente fechada y verificable."],
        ["Validar la cartera con un panel de expertos y seleccionar las que entran al rediseño."],
        ["Establecer la correspondencia entre cada especialidad seleccionada y las competencias vigentes, y reformular donde el análisis lo exija."],
        ["Formular los objetivos educacionales y la propuesta de valor de la carrera."]]
      .map((x,i)=>`<tr><td>${i+1}</td><td>${x[0]}</td></tr>`).join("")}</tbody></table>
    <p class="doc-p"><b>Alcance.</b> El campo que habilita el título profesional y la colegiatura, no la afinidad temática. <b>Horizonte de decisión:</b> cinco años, el momento en que egresa la primera promoción.</p>
   </div>

   <div class="hoja-v">
    <h2 class="doc-s"><i>4</i> Mapa de decisión</h2>
    <p class="doc-p">Cada especialidad se ubica por el cruce de dos ejes independientes: el <b>potencial del mercado laboral</b> en la vertical y la <b>capacidad instalada</b> de la Escuela en la horizontal. El área del punto expresa el impacto del ejercicio. Los cortes —65 en potencial, 60 en capacidad— dividen el plano en los cuatro segmentos que ordenan la decisión, a la manera de las matrices de posicionamiento de la prospectiva estratégica ${CM("godet")}.</p>
    <div class="inf-mapa">${mapa(L,true)}</div>
    <h3 class="inf-h3">Interpretación de las especialidades que entran al plan</h3>
    ${["nucleo","desarrollar"].map(d=>{const g=dentro.filter(e=>e.dec===d); if(!g.length)return "";
      const q=d==="nucleo"?["Oportunidad estratégica","alto potencial y capacidad instalada"]
                          :["Oportunidad por desarrollar","alto potencial con capacidad aún por construir"];
      return `<div class="inf-q"><div class="inf-qh"><b>${q[0]}</b><span>${q[1]} · ${g.length} de las que entran al plan</span></div>
       <p class="doc-p">${QINT[d]}</p>
       ${g.map(e=>`<p class="inf-qe"><b>${e.n}</b> se ubica en potencial ${e.ATR} y capacidad ${e.VIA}, con prioridad ${e.PRI}.
         ${INTERP(e,d)}</p>`).join("")}</div>`}).join("")}
    <p class="doc-p inf-nota">Las ${L.length-dentro.length} especialidades restantes quedan fuera del plan con destino declarado —mención progresiva, vigilancia, función de la Fase 2 o descarte— y no se interpretan en esta sección: su lugar está en la sección 5.</p>
   </div>

   <div class="hoja-v">
    <h2 class="doc-s"><i>5</i> Resultados por especialidad</h2>
    <table class="doc-tb"><thead><tr><th style="width:30px">#</th><th>Especialidad</th>
      <th style="width:56px">Pot.</th><th style="width:56px">Cap.</th><th style="width:52px">Prior.</th>
      <th style="width:150px">Decisión</th></tr></thead><tbody>
     ${L.map((e,i)=>`<tr class="${e.sel?"inf-ok":""}"><td>${i+1}</td><td>${e.n}</td>
       <td class="pw">${e.ATR}</td><td class="pw">${e.VIA===null?"—":e.VIA}</td><td class="pw"><b>${e.PRI}</b></td>
       <td>${DEC[e.dec][1]}</td></tr>`).join("")}</tbody></table>
    <p class="doc-p">Los valores son promedios ponderados en escala 0–100. La <b>prioridad</b> es el producto de los dos ejes llevado a porcentaje: premia a la que es buena en ambos y castiga a la que falla en uno.</p>

    <h2 class="doc-s"><i>6</i> Especialidades que entran al plan</h2>
    <p class="doc-p">El análisis que sigue está redactado para la toma de decisión directiva: por cada especialidad seleccionada se expone la evidencia de mercado, la restricción interna cuando la hay y la recomendación que de ello se desprende. Las referencias citadas en el texto se listan en el anexo.</p>
    ${dentro.map((e,i)=>`<div class="inf-e"><div class="inf-eh"><span class="inf-nn">5.${i+1}</span><b>${e.n}</b>
      <span class="chip ${DEC[e.dec][0]}">${DEC[e.dec][1]}</span></div>
      <div class="inf-em"><span>Potencial <b>${e.ATR}</b></span><span>Capacidad instalada <b>${e.VIA===null?"—":e.VIA}</b></span>
       <span>Prioridad <b>${e.PRI}</b></span><span>Acuerdo del panel <b>${e.ac!=null?e.ac+" %":"—"}</b></span></div>
      <p class="inf-par">${NARR[e.n]||e.desc}</p>
      <p class="inf-cit"><b>Referencias citadas:</b> ${(NARRREF[e.n]||[]).map(i=>REF(i).t.replace(/<[^>]+>/g,"").split(".")[0]).join(" · ")||"—"}</p>
     </div>`).join("")}

    <h2 class="doc-s"><i>7</i> Propuesta de valor: para qué existe esta carrera y lo que solo ella puede firmar</h2>
    <p class="doc-p">Todo lo anterior responde qué contrata el campo y qué puede sostener la Escuela. Esta sección responde dos preguntas de dos lectores distintos. La primera la hace el postulante y quien paga su carrera: <b>¿por qué dedicaría mi vida a esto?</b> ${VPC.cad&&VPC.cad.car?`La respuesta es una cadena que empieza en un hecho —${VPC.cad.car.p1}— sigue en lo que el egresado sabrá hacer frente a él, y termina en un propósito:`:"La responde el propósito de la carrera:"}</p>
    <div class="doc-df oro"><b>Propósito de la carrera</b><p>${VPC.prop||"—"}</p></div>
    <p class="doc-p">La segunda la hacen admisión, la competencia y el par evaluador: <b>¿por qué esta carrera y no la de al lado?</b> La respuesta no es un eslogan: es la lista de diferenciales que un panel de seis expertos sometió a la <b>prueba del espejo</b> —¿puede un competidor de la región firmar esto hoy?— y a la demostrabilidad con documento vigente, separando los puntos de diferencia de los puntos de paridad que toda oferta de la región puede reclamar ${CM("anderson")}. Solo lo que pasó esa prueba entra al texto${VPC.ficha&&VPC.ficha.c3&&VPC.ficha.c3.length?`; la comparación se hizo contra ${VPC.ficha.c3.length} ofertas publicadas: ${VPC.ficha.c3.join("; ")}`:""}.</p>
    ${(VPC.dif&&VPC.dif.length)?`<table class="doc-tb"><thead><tr><th>Diferencial</th><th style="width:90px">Familia</th><th style="width:56px">Espejo</th><th style="width:60px">Sustento</th><th style="width:110px">Decisión</th></tr></thead><tbody>
     ${[...VPC.dif].sort((a,b)=>({confirmado:0,condicionado:1,reformular:2,paridad:3,descartado:4}[a.dec]-{confirmado:0,condicionado:1,reformular:2,paridad:3,descartado:4}[b.dec])||b.sust-a.sust).map(d=>`<tr class="${d.dec==="confirmado"?"inf-ok":""}"><td><b>${d.n}</b><span style="display:block;font-size:9.5px;color:#5B6470">${d.ev}</span></td><td>${d.fam}</td><td class="pw">${pct(d.esp)}</td><td class="pw"><b>${d.sust}</b>/16</td><td>${DIFDEC[d.dec]?DIFDEC[d.dec][1]:d.dec}${d.dec==="condicionado"&&d.plazo?` · ${d.plazo}`:""}</td></tr>`).join("")}</tbody></table>
    <p class="doc-p inf-nota">Espejo: proporción del panel que afirma que un competidor de la región puede firmar el diferencial hoy (se busca ≤ 25 %). Sustento: mediana de demostrabilidad × mediana de relevancia en la decisión de matrícula (1–16). I-CVI y CVR según ${CM("lynn").replace(/[()]/g,"")} y ${CM("lawshe").replace(/[()]/g,"")}; umbrales declarados antes de la ronda 1; el panel de agentes deja el estado en revisado.</p>`:""}
    <div class="doc-df"><b>De la carrera</b><p>${VPC.t}</p></div>
    <div class="doc-df oro"><b>Promesa</b><p>${VPC.p}</p></div>
    ${(VPC.dif||[]).some(d=>d.dec==="paridad")?`<div class="doc-df pend"><b>Lo que se dice pero no se promete · paridad declarada</b><p>${VPC.dif.filter(d=>d.dec==="paridad").map(d=>d.n).join("; ")}. Más de la mitad de la oferta regional puede firmarlo: se declara como condición de base, no como diferencia.</p></div>`:""}
    ${(VPC.dif||[]).some(d=>d.dec==="condicionado")?`<div class="doc-df"><b>Diferenciales condicionados · plan de sostenimiento</b><p>${VPC.dif.filter(d=>d.dec==="condicionado").map(d=>`${d.n}: ${d.resp||"responsable por definir"}, ${d.plazo||"plazo por definir"}`).join(" · ")}. Entran al texto cuando la vigencia a cinco años quede asegurada.</p></div>`:""}
    ${VPC.ficha&&VPC.ficha.c5?`<p class="doc-p inf-nota">Condición de caducidad declarada: ${VPC.ficha.c5} Si ocurre, la propuesta de valor se rehace.${(VPC.par||[]).length?` Paridades que no se usan como argumento: ${VPC.par.join(", ").toLowerCase()}.`:""}</p>`:""}
    <h3 class="inf-h3">Por especialidad · lo que cada ficha técnica lleva en su sección 2</h3>
    ${ARQ.map((a,i)=>`<div class="doc-df"><b>${a.alias}</b>${VP[i]&&VP[i][2]?`<p style="margin-bottom:6px"><i>Propósito:</i> <b>${VP[i][2]}</b></p>`:""}<p>${VP[i]?VP[i][0]:""}</p><p style="margin-top:6px"><i>Promesa:</i> ${VP[i]?VP[i][1]:""}</p></div>`).join("")}
    <p class="doc-p"><b>La decisión que pide esta sección:</b> aprobar el propósito y la promesa tal como están escritos —o corregirlos aquí— porque son las frases con las que admisión saldrá a captar a la próxima promoción y las que un par evaluador contrastará contra las fichas técnicas.</p>

   </div>

   <div class="hoja-h"><div class="pg-b"><span>Hoja horizontal</span> Matriz de correspondencia · las especialidades validadas contra las competencias vigentes</div>
    <h2 class="doc-s"><i>8</i> Matriz de correspondencia</h2>
    <div class="inf-mx">
     <div class="inf-lg">${["comp","amb","cap","trv","no"].map(k=>`<span><i class="mk ${k} sm">${MKI[k]}</i>${MKT[k]}</span>`).join("")}</div>
     <table class="mx-inf"><thead><tr><th class="e">Especialidad validada</th><th class="t">Tipo de correspondencia</th>
       ${CMP().map((c,ci)=>`<th class="k${ci}">${c.n}</th>`).join("")}</tr></thead>
      <tbody>${ESP.filter(e=>!e.oculta&&e.sel).map(e=>{const tp=tipoDe(e.n), ms=marcasDe(e.n);
        return `<tr><td class="e"><b>${e.n}</b><span>${e.desc}</span></td>
         <td class="t"><span class="tp tp-${tp[0]}">${tp[1]}</span></td>
         ${CMP().map((c,ci)=>{const m=ms.find(x=>x.c===ci);
           const t=m?(m.k===null?m.t:"cap"):null;
           return `<td class="c${ci} ${m?"g":""}">${t?`<span class="mk ${t}">${MKI[t]}</span>`:`<span class="mk no">+</span>`}</td>`}).join("")}</tr>`}).join("")}</tbody></table>
     <div class="inf-se"><b>Lo que no encajó — y es lo único que obligó a cambiar la estructura</b>
      ${SIN_ENCAJE.map(x=>`<div class="inf-sei"><b>${x.e}</b> ${x.q} <i>→ ${x.r}</i></div>`).join("")}
      ${CAP_SIN_ESP.map(x=>`<div class="inf-sei"><b>Capacidad «${x.k}» · ${x.c}</b> ${x.q} <i>→ ${x.r}</i></div>`).join("")}</div>
    </div>
   </div>

   <div class="hoja-v">

    <h2 class="doc-s"><i>9</i> Objetivos educacionales</h2>
    <p class="doc-p">Los objetivos educacionales describen el <b>desempeño profesional del egresado entre tres y cinco años después de titularse</b>, cuando ya ejerce, tal como los definen los modelos de acreditación por resultados ${CM("abet")}. No son el perfil de egreso —que declara lo que sabe hacer el día que sale—, y por eso se formulan una sola vez para toda la carrera. Cada uno se apoya en al menos una competencia del perfil y se rastrea a una especialidad validada en el paso 1.1.</p>
    ${OE.map((o,j)=>{const p=COH[j].indexOf(2), sec=COH[j].map((v,i)=>v===1?i:null).filter(x=>x!==null);
      return `<div class="inf-oe2"><div class="inf-oh"><span class="inf-onn">${o[0]}</span>
       <p class="inf-ot">${o[1]}</p></div>
       <div class="inf-oc"><b>Competencia que lo sostiene:</b> C${p+1} · ${ARQ[p]?ARQ[p].alias:"—"} — ${ARQ[p]?ARQ[p].n:""}</div>
       ${sec.length?`<div class="inf-oc sec"><b>Contribuyen:</b> ${sec.map(i=>`C${i+1} · ${ARQ[i]?ARQ[i].alias:"—"}`).join(" · ")}</div>`:""}
       <div class="inf-oc esp"><b>Se deriva de:</b> ${o[2]}</div></div>`}).join("")}

    <h2 class="doc-s"><i>10</i> Fichas técnicas de las competencias</h2>
    <p class="doc-p">Las ${ARQ.length} fichas se adjuntan a continuación, una por competencia, sobre la plantilla institucional P001.</p>
    <table class="doc-tb"><thead><tr><th style="width:44px">Cód.</th><th>Competencia</th><th style="width:88px">Capacidades</th>
      <th style="width:110px">Decisión</th></tr></thead><tbody>
     ${ARQ.map((a,i)=>`<tr><td>C${i+1}</td><td><b>${a.n}</b></td><td class="pw">${a.caps.length}</td>
       <td>${a.dec==="conservar"?"Conservada literal":"Reformulada"}</td></tr>`).join("")}</tbody></table>

    <h2 class="doc-s"><i>11</i> Control de versiones y aprobación</h2>
    <table class="doc-tb"><thead><tr><th style="width:70px">Versión</th><th style="width:100px">Fecha</th>
      <th>Cambio</th><th style="width:130px">Responsable</th></tr></thead><tbody>
     <tr><td><b>v1.0</b></td><td>${new Date().toLocaleDateString("es-PE")}</td><td>Primera emisión con el método ${ESCUELA&&ESCUELA.metodo?ESCUELA.metodo:METODO}: cartera, selección, correspondencia, competencias, objetivos y propuesta de valor.</td><td>Dirección de Currículo</td></tr>
     ${S.infVer?"":`<tr class="inf-pend"><td>—</td><td>—</td><td>Sin guardar. Al guardar, esta versión queda congelada y cualquier cambio posterior abre una v1.1 con el motivo declarado.</td><td>—</td></tr>`}</tbody></table>
    <table class="doc-tb" style="margin-top:10px"><thead><tr><th style="width:110px">Acción</th><th>Nombre y cargo</th>
      <th style="width:100px">Fecha</th><th style="width:120px">Firma</th></tr></thead><tbody>
     <tr><td>Elabora</td><td>Dirección de Currículo</td><td></td><td></td></tr>
     <tr><td>Revisa</td><td>${META().directora||"Dirección de la Escuela"} — Dirección de la Escuela Profesional</td><td></td><td></td></tr>
     <tr><td>Aprueba</td><td>Consejo de Facultad</td><td></td><td></td></tr></tbody></table>

    <h2 class="doc-s"><i>A</i> Anexo — Referencias consultadas</h2>
    <p class="doc-p inf-nota">Fuentes del campo profesional, citadas en las secciones 1 a 7.</p>
    <div class="doc-refs">${REFS.map(r=>`<p>${r.t} ${r.u}</p>`).join("")}</div>
    <p class="doc-p inf-nota" style="margin-top:10px">Referencias metodológicas, citadas en la introducción y donde el método lo exige.</p>
    <div class="doc-refs">${REFS_MET.map(r=>`<p>${r.t}</p>`).join("")}</div>
   </div>
  </div>`;
}
const QINT={
 nucleo:"El segmento de <b>oportunidad estratégica</b> reúne a las especialidades que el mercado ya está contratando y que la Escuela puede dictar con lo que tiene hoy. No exigen inversión previa a la apertura: exigen decisión. Son las que sostienen el núcleo del perfil de egreso y las que primero deben quedar amarradas en el plan de estudios, porque cualquier demora se traduce en promociones que egresan sin la competencia que el campo está pagando.",
 desarrollar:"El segmento de <b>oportunidad por desarrollar</b> reúne a las especialidades que el mercado pide pero que la Escuela todavía no puede sostener con su equipo, sus convenios o su equipamiento. Entran al plan <b>condicionadas a un plan de habilitación</b> con responsable y plazo: contratar el perfil docente que falta, firmar el convenio de práctica o adquirir el instrumental. Abrirlas sin ese plan compromete la calidad de la formación y la acreditación del programa."};
function INTERP(e,d){
 const debil={doc:"el equipo docente con el perfil",cam:"los campos de práctica con convenio",inf:"el equipamiento",
  dif:"la diferenciación frente a la competencia regional",hab:"la habilitación normativa"};
 const k=Object.keys(debil).reduce((a,b)=>e.v[a]<=e.v[b]?a:b);
 if(d==="nucleo") return `Su posición se explica por una demanda ${ET.vol[e.d.vol-1].toLowerCase()} con ${ET.cre[e.t.cre-1].toLowerCase()} sostenido y por una capacidad ya instalada —${ET[k][e.v[k]-1].toLowerCase()} en ${debil[k]}, su indicador más bajo, que aun así no la limita—. El panel la respaldó con ${e.ac} % de acuerdo.`;
 return `El freno está en ${debil[k]}: hoy se encuentra en «${ET[k][e.v[k]-1].toLowerCase()}». Mientras ese indicador no suba, la especialidad se ofrece con plan de habilitación declarado y no como promesa de admisión. El panel la respaldó con ${e.ac} % de acuerdo.`;
}
/* Sección 5 del informe: análisis en prosa continua, con citación APA en el texto,
   escrito para que la Dirección decida —no para describir la tabla otra vez—. */
let NARR={};
let NARRREF={};
const IDX=[["Resumen ejecutivo","la apuesta en una página: qué se estudió, a qué se llegó, el propósito y la promesa"],["Introducción","la carrera, su campo, por qué un estudio prospectivo ahora y cómo se hizo, con sus referencias"],["Objetivo del estudio","general, específicos, alcance y horizonte"],
 ["Mapa de decisión","los dos ejes y la interpretación por segmento"],["Resultados por especialidad","puntajes y decisión de las 14"],
 ["Especialidades que entran al plan","con su sustento de demanda y tendencia"],["Propuesta de valor","propósito, diferenciales con prueba del espejo, texto de la carrera, promesa y por especialidad"],
 ["Matriz de correspondencia","qué encajó y qué obligó a cambiar"],["Objetivos educacionales","con la competencia que sostiene cada uno, en hoja horizontal"],
 ["Fichas técnicas","una por competencia, sobre la plantilla P001"],["Control de versiones y aprobación","más el anexo de referencias"]];
// El estudio se escribe para vender el rediseño a los directivos: cada sección abre con lo que está en juego y cierra con la decisión que pide.
function vFichaPendiente(){
 return `<section class="ficha-empty" aria-labelledby="ficha-empty-title"><header class="ficha-empty-heading"><span class="ficha-step">1.6</span><div><span class="ficha-eyebrow">DOCUMENTOS PARA APROBACIÓN</span><h2 id="ficha-empty-title">Fichas Técnicas y Estudio Prospectivo</h2><p>Las fichas por competencia y el estudio completo de la carrera.</p></div><span class="ficha-status">Aún sin generar</span></header><div class="ficha-empty-body"><p class="ficha-study-note"><b>Además,</b> el paso 1.6 arma el Estudio Prospectivo de la Carrera Profesional y reúne lo decidido en los seis pasos para su aprobación.</p><p>Se generará una ficha por competencia en la plantilla P001 y un documento completo con las ${ARQ.length} fichas. Cada ficha tendrá una primera hoja vertical con la identificación y el resumen ejecutivo, seguida de una hoja apaisada con la competencia y sus capacidades.</p><div class="ficha-layout"><div><span>HOJA 1</span><b>Vertical</b><small>Identificación y resumen ejecutivo</small></div><i>→</i><div><span>HOJA 2</span><b>Apaisada</b><small>Competencia y capacidades en una sola vista</small></div></div></div><footer class="ficha-empty-next"><span>✦</span><div><b>Siguiente acción con Génesys</b><p>Primero usa el botón <strong>Generar las fichas técnicas</strong> y luego solicita <strong>Armar el Estudio Prospectivo</strong> en la conversación.</p></div></footer></section>`;
}
function vFicha(){
 if(!S.fichas) return vFichaPendiente();
 if(!S.fichas) return vacio("Fichas Técnicas · aún sin generar",
   `Se emitirá <b>una ficha por competencia</b> sobre la plantilla institucional P001, más el documento completo con las ${ARQ.length}.
    La primera hoja es vertical —identificación y resumen ejecutivo— y la segunda es apaisada, con la competencia y sus capacidades en una sola vista.`,
   "Generar las fichas técnicas")
  +`<div class="fi-prev"><div class="fi-pv v"><span>Hoja 1 · vertical</span></div>
    <div class="fi-pv h"><span>Hoja 2 · horizontal</span></div></div>`;
 if(S.fichaC===-1) return docCompleto();
 return `<div class="fi-sel"><span class="tl-k">Ficha de</span>
   ${ARQ.map((x,i)=>`<button class="fi-b ${S.fichaC===i?"on":""}" data-ficha="${i}">C${i+1} · ${x.alias}</button>`).join("")}
   <button class="fi-b tot" data-ficha="-1">▤ Documento completo · ${ARQ.length} fichas</button></div>
 <div class="ficha-acc"><button class="b-desc" id="b-word">⤓ Descargar en Word</button>
   <span class="fa-n">Plantilla institucional P001 · primera versión, sin definición operativa</span></div>
 <div class="hoja-doc" id="doc-ficha">${fichaHTML()}</div>`;
}
const VISTAS={inicio:vInicio,tablero:vTablero,equivalencia:vEquivalencia,arquitectura:vArquitectura,perfil:vPerfil,valor:vValor,informe:vInforme};
function armarEdicion(){
 document.querySelectorAll("[data-ed]").forEach(o=>{
  o.addEventListener("blur",()=>{
   const p=o.dataset.ed.split("|"), t=o.textContent.trim();
   if(p[0]==="arq"&&ARQ[p[1]]) ARQ[p[1]][p[2]]=t;
   else if(p[0]==="cap"&&ARQ[p[1]]&&ARQ[p[1]].caps[p[2]]) ARQ[p[1]].caps[p[2]][p[3]]=t;
   else if(p[0]==="oe"&&OE[p[1]]) OE[p[1]][+p[2]]=t;
   else if(p[0]==="vpc") VPC[p[1]]=t;
   else if(p[0]==="dif"&&VPC.dif&&VPC.dif[p[1]]) VPC.dif[p[1]][p[2]]=t;
   else if(p[0]==="ficha"){ VPC.ficha=VPC.ficha||{c1:"",c2:{t:"",f:""},c3:[],c5:""}; VPC.ficha.c2=VPC.ficha.c2||{t:"",f:""};
     if(p[1]==="c2t") VPC.ficha.c2.t=t; else if(p[1]==="c2f") VPC.ficha.c2.f=t; else if(p[1]==="c3") VPC.ficha.c3=t.split(/\s*[·;]\s*/).filter(Boolean); else VPC.ficha[p[1]]=t; }
   else if(p[0]==="par"){ VPC.par=t.split(/\s*[·;]\s*/).filter(Boolean); }
   else if(p[0]==="cad"){ VPC.cad=VPC.cad||{car:null,esp:[]}; let c; if(p[1]==="car"){ VPC.cad.car=VPC.cad.car||{}; c=VPC.cad.car } else { const k=+p[1].slice(3); VPC.cad.esp=VPC.cad.esp||[]; VPC.cad.esp[k]=VPC.cad.esp[k]||{}; c=VPC.cad.esp[k] } c[p[2]]=t; }
   else if(p[0]==="vp"&&VP[p[1]]) VP[p[1]][+p[2]]=t;
   else if(p[0]==="decl") DECL[p[1]]=t;
   marcar();
  });
 });
}
function pintarCentro(v){
 // marcar una casilla no debe devolver al usuario al principio de la tabla
 const SC=[[".centro",".centro"],[".dr-b",".dr-b"],[".mx-cap",".mx-cap"],[".mx",".mx"]];
 const guarda=SC.map(([k,q])=>{const o=document.querySelector(q); return [k,o?o.scrollTop:0,o?o.scrollLeft:0]});
 S.vista=v;
 document.getElementById("vista").innerHTML=VISTAS[v]();
 const t=T[v];
 { const tc=document.getElementById("tit-centro"); if(tc) tc.textContent=(ESCUELA?ESCUELA.cod:"")+t[0].replace(/^NUT/,""); }
 document.getElementById("eyebrow").textContent=t[1];
 document.getElementById("hoja-h1").textContent=t[2];
 document.getElementById("prop-txt").innerHTML=t[3];
 { const sc=document.getElementById("sub-centro"); if(sc) sc.textContent=t[4]; }
 pintarTabs();
 if(v==="tablero") armarTablero();
 if(v==="equivalencia"){
  document.querySelectorAll("[data-comp]").forEach(th=>th.onclick=()=>{
    const i=+th.dataset.comp, k=S.expComp.indexOf(i);
    k>=0?S.expComp.splice(k,1):S.expComp.push(i); pintarCentro("equivalencia")});
  const et=document.getElementById("exp-todas");
  if(et) et.onclick=()=>{const n=CMP().length; S.expComp=(S.expComp.length===n)?[]:Array.from({length:n},(_,i)=>i); pintarCentro("equivalencia")};
  document.querySelectorAll("[data-leg]").forEach(b=>b.onclick=()=>{
    S.leg=(b.dataset.leg==="-")?null:b.dataset.leg; pintarCentro("equivalencia")});
  document.querySelectorAll("[data-mk]").forEach(b=>b.onclick=ev=>{
    ev.stopPropagation();
    const [n,ci,ki]=b.dataset.mk.split("|"); const k=EQKEY(n,ci,ki==="c"?null:+ki);
    const ag=marcasAgente(n).find(x=>x.c===+ci&&x.k===(ki==="c"?null:+ki));
    const base=ki==="c"?["comp","amb"]:["cap"];
    // con marca del agente: agente → otros tipos a mano → desmarcada → agente; sin marca: vacío → tipos → vacío
    const seq=ag?[undefined,...base.filter(t=>t!==ag.t),"off"]:(b.dataset.imp?[undefined,"off",...base]:[undefined,...base]);
    const sig=seq[(seq.indexOf(EQMAN[k])+1)%seq.length];
    if(sig===undefined) delete EQMAN[k]; else EQMAN[k]=sig;
    marcar(); pintarCentro("equivalencia")});
 }
 if(v==="arquitectura") armarArquitectura();
 if(v==="valor"||v==="perfil") armarValor();
 armarInforme(v);
 guarda.forEach(([q,y,x])=>{if(!y&&!x)return; const o=document.querySelector(q); if(o){o.scrollTop=y;o.scrollLeft=x}});
 armarEdicion(); marcar();
}
/* Botones de las vistas Perfil y Propuesta de Valor (antes colgaban del tablero y no respondían) */
function armarValor(){
 const bc=document.getElementById("b-coh"); if(bc) bc.onclick=()=>{S.coh=!S.coh; pintarCentro("perfil")};
 const tv=document.getElementById("t-acta-v"); if(tv) tv.onclick=()=>{S.actaV=!S.actaV; pintarCentro("valor")};
 const vm=document.getElementById("vp-mejora"); if(vm) vm.onclick=()=>{
   const txt=((document.getElementById("vp-txt")||{}).value||"").trim();
   VPA={prev:fotoVP(),instr:txt||"más concreta y con la promesa al frente",fecha:new Date().toLocaleDateString("es-PE"),estado:"pendiente"};
   addHTML(`<div class="burbuja">Ajusta la propuesta de valor: ${VPA.instr.replace(/</g,"&lt;")}.</div>`);
   if(ESCUELA&&ESCUELA.demo){
     VPC.t=DEMO_AJ.t; VPC.p=DEMO_AJ.p; if(VP[0]) VP[0][1]=DEMO_AJ.vp0; VPC.nota=DEMO_AJ.nota; VPA.estado="hecho";
     addHTML(`<div class="g-fila"><div><p>Reescribí sobre lo ya decidido, sin inventar sustento nuevo ni tocar el eslabón 1 de ninguna cadena ni el veredicto del panel. ${DEMO_AJ.nota}</p><p>Los cambios están marcados en la pantalla, palabra por palabra: lo tachado salió, lo verde entró. Puede <b>aceptarlos</b> o <b>volver a la versión anterior</b>.</p></div></div>`);
     marcar(); pintarCentro("valor"); return }
   marcar(); pintarCentro("valor");
   encargoLibre("Ajustar la propuesta de valor",
    `Ajusta la propuesta de valor de ${ESCUELA?ESCUELA.nombre:"la escuela"} con el skill dc-1-5-propuesta-valor, sin inventar: el texto solo dice lo que un diferencial confirmado sostiene y lo que su cadena de propósito ancla.\n\nInstrucciones: ${VPA.instr}.\n\nDiferenciales confirmados: ${(VPC.dif||[]).filter(d=>d.dec==="confirmado").map(d=>d.n).join(" · ")||"ninguno todavía"}\nPropósito actual: ${VPC.prop||"—"}\nPárrafo actual: ${VPC.t}\nPromesa actual: ${VPC.p}\n\nReglas: párrafo de 45 a 70 palabras en tres movimientos (forma… · se diferencia por… · se demuestra con…), promesa y propósito ≤ 18 palabras, sin lista negra; no toques el eslabón 1 de ninguna cadena ni el veredicto del panel.\n\nEscribe en el tablero la versión ajustada (vpc.t, vpc.p, vpc.prop y, si corresponde, vp de cada competencia) y en vpc.nota, en dos líneas, qué cambiaste y por qué. No modifiques vpa: la consola compara sola la versión nueva con la anterior y muestra los cambios.`)};
 const ajOk=document.getElementById("aj-ok"); if(ajOk) ajOk.onclick=()=>{VPA=null; VPC.nota=""; marcar(); pintarCentro("valor"); addHTML(`<div class="burbuja">Acepto los cambios del ajuste.</div>`)};
 const ajNo=document.getElementById("aj-no"); if(ajNo) ajNo.onclick=()=>{ if(VPA&&VPA.prev&&ajusteHecho()){const p=VPA.prev; VPC.t=p.t; VPC.p=p.p; VPC.prop=p.prop; VP=clon(p.vp||VP); VPC.nota=""} VPA=null; marcar(); pintarCentro("valor")};
 const ajVer=document.getElementById("aj-ver"); if(ajVer) ajVer.onclick=()=>{ if(ajusteHecho()){VPA.estado="hecho"; marcar()} pintarCentro("valor"); if(!ajusteHecho()) avisar("Génesys todavía no escribió la versión ajustada.")};
}
function armarInforme(v){
 if(v!=="informe") return;
 const b=document.getElementById("b-word"); if(b) b.onclick=descargarWord;
 document.querySelectorAll("[data-ficha]").forEach(x=>x.onclick=()=>{S.fichaC=+x.dataset.ficha; pintarCentro("informe")});
 document.querySelectorAll("[data-doc]").forEach(x=>x.onclick=()=>{S.doc=x.dataset.doc; pintarCentro("informe")});
 const bi=document.getElementById("b-word-inf"); if(bi) bi.onclick=descargarInforme;
}
function pintarTabs(){
 document.getElementById("tabs").innerHTML=TABS.map(([k,n])=>
  `<button class="tab ${S.vista===k?"on":""}" data-v="${k}" ${S.done>=ABRE[k]?"":"disabled"}>${n}</button>`).join("");
 document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>{if(!b.disabled)pintarCentro(b.dataset.v)});
}
function integrar(a,b){
 const A=ESP[a],B=ESP[b];
 A.n0=A.n0||A.n; B.integradaEn=A.n0; if(A.ATR0==null) A.ATR0=A.ATR;
 A.n=A.n+" + "+B.n.replace(/^(Nutrición|Ingeniería|Gestión|Desarrollo) (de |del )?/,"");
 A.fnx=A.fnx+" · "+B.fnx; A.integrada=true; A.puesto=Math.max(A.puesto,B.puesto);
 A.desc=A.desc+" Integra además: "+(B.desc||"").toLowerCase();
 ["d","t","v"].forEach(g=>Object.keys(A[g]).forEach(k=>A[g][k]=Math.round((A[g][k]+B[g][k])/2)));
 A.i.cri=Math.max(A.i.cri,B.i.cri); A.i.alc=Math.max(A.i.alc,B.i.alc);
 A.fd=A.fd+" · "+B.fd; A.ft=A.ft+" · "+B.ft;
 B.oculta=true; calcular(A); S.integr.push([A.n,B.n]);
}
function frase(e){
 const d=ET.vol[e.D4-1].toLowerCase(), t=ET.cre[e.T4-1].toLowerCase();
 const nomb={doc:"el equipo docente",cam:"los campos de práctica",inf:"el equipamiento",dif:"la diferenciación",hab:"la habilitación"};
 const debil=Object.keys(nomb).reduce((a,b)=>e.v[a]<=e.v[b]?a:b);
 if(!S.delphi) return `Demanda ${d}, tendencia ${t}. Pendiente de validación del panel.`;
 switch(e.dec){
  case "nucleo": return `Oportunidad estratégica: demanda ${d} y tendencia ${t}, con la escuela en capacidad de sostenerla hoy.`;
  case "desarrollar": return `Oportunidad por desarrollar: el mercado la pide —demanda ${d}, tendencia ${t}—, pero falta ${nomb[debil]}.`;
  case "certificacion": return `Capacidad por activar: capacidad instalada con mercado moderado. Rinde más como mención.`;
  case "vigilancia": return `Hoy no hay puestos, pero el driver que la empuja es firme. Se revisa en el próximo ciclo.`;
  case "encargo": return `El mercado no la contrata como puesto propio: sus tareas se recogen en la Fase 2.`;
  case "recurso": return `Atraviesa todas las especialidades: tecnología habilitante, no campo de ejercicio.`;
  case "potencial": return `El campo la sostiene —demanda ${d}, tendencia ${t}—. Falta que la escuela declare su capacidad para saber si entra directo o con habilitación.`;
  default: return `Baja prioridad estratégica: demanda ${d} y tendencia ${t}, sin evidencia que sostenga abrirla.`;
 }
}
function revelarAprobadas(){
 requestAnimationFrame(()=>{
  const heading=document.getElementById("research-cap-title");
  const center=document.querySelector(".centro");
  if(!heading||!center||S.vista!=="tablero")return;
  const target=heading.closest(".research-heading").getBoundingClientRect();
  const viewport=center.getBoundingClientRect();
  const behavior=window.matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth";
  center.scrollTo({top:Math.max(0,center.scrollTop+target.top-viewport.top-16),behavior});
 });
}
function revelarActa(){
 requestAnimationFrame(()=>{
  const section=document.querySelector(".research-panel");
  const center=document.querySelector(".centro");
  if(!section||!center||S.vista!=="tablero"||!S.acta)return;
  const target=section.getBoundingClientRect(), viewport=center.getBoundingClientRect();
  const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  center.scrollTo({top:Math.max(0,center.scrollTop+target.top-viewport.top-16),behavior:reduced?"instant":"smooth"});
 });
}
function revelarDecisiones(){
 requestAnimationFrame(()=>{
  const column=document.getElementById("decision-column");
  const center=document.querySelector(".centro");
  const table=column&&column.closest(".tbl-esp");
  if(!column||!center||!table||S.vista!=="tablero")return;
  const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const behavior=reduced?"instant":"smooth";
  const heading=document.getElementById("sel-bar")||table.closest(".research-section").querySelector(".research-heading");
  const cr=center.getBoundingClientRect(),hr=heading.getBoundingClientRect();
  center.scrollTo({top:Math.max(0,center.scrollTop+hr.top-cr.top-16),behavior});
  const tr=table.getBoundingClientRect(),dr=column.getBoundingClientRect();
  table.scrollTo({left:Math.max(0,table.scrollLeft+dr.left-tr.left-(table.clientWidth-dr.width)/2),behavior});
  table.classList.add("decision-reveal");
  setTimeout(()=>table.classList.remove("decision-reveal"),3400);
 });
}
function armarTablero(){
 const decisionTable=document.querySelector("#research-body .tbl-esp");
 if(decisionTable&&S.decisionUpdated){
  const acknowledge=()=>{
   S.decisionUpdated=false;
   document.querySelectorAll(".decision-updated,.decision-notice").forEach(el=>el.remove());
   decisionTable.removeEventListener("pointerdown",acknowledge);
   decisionTable.removeEventListener("keydown",acknowledge);
  };
  decisionTable.addEventListener("pointerdown",acknowledge);
  decisionTable.addEventListener("keydown",acknowledge);
 }

 document.querySelectorAll("[data-fac]").forEach(b=>b.onclick=()=>{
   const v=b.dataset.val, a=S.f.dec, i=a.indexOf(v);
   i>=0?a.splice(i,1):a.push(v); pintarCentro("tablero")});
 const sp=document.getElementById("sel-prop"); if(sp) sp.onclick=()=>{
   ESP.forEach(e=>{ if(!e.oculta&&!noValorada(e)){ e.sel=propuestaSel(e); e.selMan=false } });
   pintarCentro("tablero"); marcar()};
 const sn=document.getElementById("sel-nada"); if(sn) sn.onclick=()=>{
   ESP.forEach(e=>{e.sel=false; e.selMan=true}); pintarCentro("tablero"); marcar()};
 const r=document.getElementById("f-reset");
 if(r) r.onclick=()=>{S.f.dec=[]; pintarCentro("tablero")};
 document.querySelectorAll("[data-ay]").forEach(b=>b.onclick=()=>{
   S.ay=(S.ay===b.dataset.ay)?null:b.dataset.ay; pintarCentro("tablero")});
 document.querySelectorAll("[data-sel]").forEach(c=>c.onchange=()=>{
   const e=ESP[+c.dataset.sel]; e.sel=c.checked; e.selMan=true; if(S.done<4) e.apr=c.checked; pintarCentro("tablero"); marcar()});
 document.querySelectorAll("[data-rubrica]").forEach(b=>b.onclick=()=>{ S.rubrica=!S.rubrica; pintarCentro("tablero") });
 document.querySelectorAll("[data-det]").forEach(b=>b.onclick=()=>{
   const [i,q]=b.dataset.det.split("|"); const n=+i;
   S.det=(S.det&&S.det.i===n&&S.det.q===q)?null:{i:n,q}; pintarCentro("tablero")});
 document.querySelectorAll("[data-ref]").forEach(b=>b.onclick=()=>{
   const td=b.closest("td"); if(!td)return;
   const caja=td.querySelector(".refs"); if(!caja)return;
   caja.querySelectorAll(".ref").forEach(x=>x.classList.remove("hl"));
   const obj=[...caja.querySelectorAll(".ref")].find(x=>x.querySelector(".rn").textContent===b.dataset.ref);
   if(obj){obj.classList.add("hl"); obj.scrollIntoView({block:"nearest",behavior:"smooth"})}});
 document.querySelectorAll("[data-pick]").forEach(b=>b.onclick=()=>{
   const i=+b.dataset.pick; S.pick=(i<0||S.pick===i)?null:i; pintarCentro("tablero")});
 document.querySelectorAll("[data-merge]").forEach(b=>b.onclick=()=>{
   const [a,c]=b.dataset.merge.split("|").map(Number); integrar(a,c); S.pick=null; pintarCentro("tablero")});
 document.querySelectorAll("[data-desc]").forEach(b=>b.onclick=()=>{
   const i=b.dataset.desc; S.expDesc[i]=!S.expDesc[i]; pintarCentro("tablero")});
 document.querySelectorAll("[data-section-toggle]").forEach(b=>b.onclick=()=>{const key=b.dataset.sectionToggle; S[key]=!S[key]; pintarCentro("tablero")});
 const ta=document.getElementById("t-acta"); if(ta) ta.onclick=()=>{S.acta=!S.acta; pintarCentro("tablero")};
 const td=document.getElementById("t-docind"); if(td) td.onclick=()=>{S.docInd=!S.docInd; pintarCentro("tablero")};
 const ac=document.getElementById("abre-cap"); if(ac) ac.onclick=()=>{S.capacityClosed=false; S.capForm=true; pintarCentro("tablero")};
 const ai=document.getElementById("abre-int"); if(ai) ai.onclick=()=>{
   if(S.intPropuesto){ S.intForm=true; pintarCentro("tablero"); return }
   ai.disabled=true;
   addHTML(`<div class="burbuja">Propón cómo integrar las especialidades que el mercado contrata juntas y el nombre de cada grupo.</div>`);
   const pasos=["Buscando candidatas de la misma naturaleza entre las aprobadas","Revisando en los avisos del barrido cuáles se contratan en un mismo puesto","Sumando descripciones y promediando indicadores de cada grupo","Proponiendo el nombre que agrupa a cada integración"];
   const tr=addHTML(`<div class="g-traza"><div class="g-traza-h"><span class="g-punto"></span>Génesys está trabajando…</div><ul>${pasos.map(p=>`<li>${p}</li>`).join("")}</ul></div>`);
   accionAlFinal();
   const total=RAPIDO?250:8000, paso=total/(pasos.length+1);
   pasos.forEach((p,i)=>setTimeout(()=>{ const li=tr.querySelectorAll("li")[i]; if(li) li.classList.add("on"); if(i>0) tr.querySelectorAll("li")[i-1].classList.add("ok"); abajo() },paso*(i+1)));
   setTimeout(()=>{ tr.querySelectorAll("li").forEach(li=>li.classList.add("ok")); tr.querySelector(".g-traza-h").innerHTML="✓ Listo"; tr.classList.add("hecho");
     setTimeout(()=>{ tr.classList.add("se-va"); setTimeout(()=>tr.remove(),450) },RAPIDO?0:700);
     S.intPropuesto=true; S.intForm=true; pintarCentro("tablero");
     const G=gruposDe(), n=Object.values(G).filter(g=>g.miembros.length).length;
     addHTML(`<div class="g-fila"><div><p>Propongo <b>${n}</b> grupos: ${Object.values(G).filter(g=>g.miembros.length).map(g=>"<b>"+g.nombre+"</b>").join(", ")}. Revise en el formulario qué integra cada uno y su nombre; si está de acuerdo, pulse <b>Guardar cambios</b> y la tabla se actualiza con los nombres.</p></div></div>`); accionAlFinal() },total);
 };
 document.querySelectorAll("[data-int]").forEach(b=>b.onclick=()=>{S.intForm=false; pintarCentro("tablero")});
 const ig=document.getElementById("int-guardar"); if(ig) ig.onclick=()=>{
   const g={}; document.querySelectorAll(".int-g").forEach(d=>{ const b=d.dataset.base; g[b]={nombre:(d.querySelector(".int-nom").value||"").trim()||b,miembros:[...d.querySelectorAll(".int-chk:checked")].map(c=>c.value)} });
   S.grupos=g;
   Object.entries(g).forEach(([b,v])=>{ const A=ESP.find(e=>(e.n0||e.n)===b); if(!A) return;
     v.miembros.forEach(m=>{ const B=ESP.find(e=>e.n===m); if(B&&!B.oculta&&B!==A) integrar(ESP.indexOf(A),ESP.indexOf(B)) });
     if(v.miembros.length){ A.n0=A.n0||A.n; A.n=v.nombre; A.grupo=true } });
   S.intForm=false; pintarCentro("tablero"); marcar();
   const n=Object.values(g).filter(x=>x.miembros.length).length;
   addHTML(`<div class="burbuja">Confirmo los nombres de los grupos integrados.</div>`);
   addHTML(`<div class="g-fila"><div><p>Registrados <b>${n}</b> grupos con nombre: ${Object.values(g).filter(x=>x.miembros.length).map(x=>"<b>"+x.nombre+"</b> ("+x.miembros.length+")").join(", ")}. Con esos nombres se cruzarán en el paso 1.3.</p></div></div>`); accionAlFinal() };
 document.querySelectorAll("[data-cap]").forEach(b=>{
   if(b.dataset.cap==="-"){b.onclick=()=>{S.capForm=false;S.verPlan=false;S.capAy=null;pintarCentro("tablero")}}
   else if(b.tagName==="SELECT"){b.onchange=()=>{const [i,k]=b.dataset.cap.split("|");
     ESP[+i].v[k]=+b.value; calcular(ESP[+i])}}});
 document.querySelectorAll("[data-ayuda]").forEach(b=>b.onclick=()=>{
   const k=b.dataset.ayuda; S.capAy=(k==="-"||S.capAy===k)?null:k; pintarCentro("tablero")});
 document.querySelectorAll("[data-marca]").forEach(b=>b.onclick=()=>{
   const [i,k,v]=b.dataset.marca.split("|"); const e=ESP[+i];
   e.v[k]=(e.v[k]===+v)?0:+v;
   if(CAPFUENTE[k]==="agente"){ e.vman=e.vman||{};
     if(e.vagente&&e.v[k]===e.vagente[k]) delete e.vman[k]; else e.vman[k]=true }
   calcular(e); refrescarModalCap()});
 const bo=document.getElementById("barrer-of"); if(bo) bo.onclick=()=>{
   if(!bo.dataset.listo){ bo.disabled=true; bo.textContent="Génesys evaluando…"; bo.dataset.listo="1"; setTimeout(()=>bo.onclick(),RAPIDO?50:1600); return }
   let n=0;
   ESP.forEach(e=>{
     const f=e.vagente||VDECL[e.n];
     if(f&&f.dif&&f.hab){ e.v.dif=f.dif; e.v.hab=f.hab; e.vman={}; n++ }
     calcular(e);
   });
   S.capAg=true; pintarCentro("tablero"); marcar();
   addHTML(`<div class="burbuja">Evalúa la diferenciación y la habilitación normativa.</div>`);
   if(n) addHTML(`<div class="g-fila"><div><p>Evaluadas <b>${n}</b> candidatas. Comparé la oferta académica publicada —región, país y referentes del extranjero— y rastreé la norma sectorial con el reglamento del colegio profesional y los registros exigibles.</p><p>Esas dos columnas ya están a la vista en la matriz. Las otras tres siguen siendo declaración de la Escuela: sin ellas no hay capacidad instalada.</p></div></div>`);
   else addHTML(`<div class="g-fila"><div><p>Todavía no tengo el barrido de esta escuela. Pídamelo en el chat del proyecto con esta instrucción:</p><div class="enc-i">Levanta la diferenciación y la habilitación normativa de cada especialidad de ${ESCUELA?ESCUELA.nombre:"la escuela"}: compara los planes de estudio publicados de las universidades de la región, del país y de referentes del extranjero, y rastrea la norma sectorial vigente, el reglamento del colegio profesional y los registros exigibles, fechando cada fuente. Escribe el resultado en el tablero.</div></div></div>`);
   accionAlFinal()};
 const ci=document.getElementById("cap-imprimir"); if(ci) ci.onclick=imprimirFicha;
 const cl=document.getElementById("cap-limpiar"); if(cl) cl.onclick=()=>{
   ESP.forEach(e=>{e.v.doc=0; e.v.cam=0; e.v.inf=0; calcular(e)}); pintarCentro("tablero")};
 ["abre-cap2","abre-cap3","abre-cap4"].forEach(id=>{const o=document.getElementById(id);
   if(o) o.onclick=()=>{S.capacityClosed=false; S.capForm=true; pintarCentro("tablero")}});
 const vp=document.getElementById("ver-plan"); if(vp) vp.onclick=()=>{S.verPlan=!S.verPlan; pintarCentro("tablero")};
 const bp=document.getElementById("baja-plan"); if(bp) bp.onclick=descargarPlantilla;
 const co=document.getElementById("cap-omitir"); if(co) co.onclick=()=>{
   S.capForm=false;S.verPlan=false;S.capAy=null; if(S.done<4)S.done=4;
   pintarCentro("tablero"); pintarPanel(); marcar();
   if(ESCUELA&&ESCUELA.demo){ cerrarActo(2,"Capacidad instalada <b>omitida por ahora</b>: la cartera se ordena solo por potencial de mercado y mis dos indicadores quedan evaluados. Puede declarar los tres de la Escuela desde la sección 03 cuando la Dirección responda.") }
   else { document.getElementById("chat").innerHTML=""; guiar(); }
   avisar("Capacidad instalada <b>omitida por ahora</b>. La cartera se ordena solo por potencial de mercado; puede declararla cuando la Dirección responda.")};
 const va=document.getElementById("ver-agente"); if(va) va.onclick=()=>{S.capAg=!S.capAg; pintarCentro("tablero")};
 const bvp=document.getElementById("ver-puntaje"); if(bvp) bvp.onclick=()=>{ S.verPuntaje=!S.verPuntaje; pintarCentro("tablero") };
 const cav=document.getElementById("cap-avance"); if(cav) cav.onclick=()=>{
   const Lc=capBase(), llenas=Lc.filter(e=>["doc","cam","inf","dif","hab"].every(k=>e.v[k]>=1)).length, marcadas=Lc.reduce((s,e)=>s+["doc","cam","inf","dif","hab"].filter(k=>e.v[k]>=1).length,0);
   S.capForm=false; S.verPlan=false; S.capAy=null; marcar(); guardar(); pintarCentro("tablero");
   avisar(`<b>Avance guardado.</b> ${marcadas} casillas marcadas; ${llenas} de ${Lc.length} especialidades completas. Puede volver cuando quiera con «Declarar la capacidad instalada» y seguir donde lo dejó.`) };
 const cg=document.getElementById("cap-guardar"); if(cg) cg.onclick=()=>{
   if(cg.classList.contains("trabado")){   // no se procesa: se explica qué falta y se señala la primera fila incompleta
     const Lc=capBase(), fal=Lc.filter(e=>!["doc","cam","inf","dif","hab"].every(k=>e.v[k]>=1));
     const sinGen=Lc.some(e=>!(e.v.dif>=1&&e.v.hab>=1));
     avisar(`<b>Aún no se puede declarar y procesar.</b> ${fal.length} de ${Lc.length} especialidades tienen casillas vacías, por ejemplo <b>${fal[0].n}</b>. Marque un nivel en cada columna${sinGen?"; para diferenciación y habilitación pulse «Evaluar con Génesys»":""}. Si no termina hoy, use «Guardar avance».`,"mal");
     const fila=[...document.querySelectorAll(".drawer tbody tr")].find(tr=>tr.textContent.includes(fal[0].n));
     if(fila){ fila.scrollIntoView({behavior:"smooth",block:"center"}); fila.classList.add("foco-ahora"); setTimeout(()=>fila.classList.remove("foco-ahora"),4500) }
     return }
   S.capOk=true; ESP.forEach(calcular);
   const B=capBase(), falt=capFaltan(), conCap=B.filter(e=>e.VIA!==null), parc=B.filter(e=>e.parcial);
   S.capForm=false;S.verPlan=false;S.capAy=null;
   if(!conCap.length){ avisar(`<b>Nada que procesar todavía.</b> Ninguna especialidad tiene sus tres indicadores —docentes, campos de práctica y equipamiento— marcados. Marque los tres en al menos una fila y vuelva a pulsar <b>Declarar y procesar</b>.`,"mal"); pintarCentro("tablero"); return }
   if(S.done>=3&&S.done<4)S.done=4; if(S.done>=3) S.salE.esp=S.salE.esp||"con capacidad";
   S.mapOff=false; S.mapClosed=false; pintarCentro("tablero"); pintarPanel(); marcar();
   // el resultado de procesar es el mapa de decisión: se lleva la vista hasta la sección 04
   setTimeout(()=>{ const m=document.querySelector(".research-cap"); if(m) m.scrollIntoView({behavior:"smooth",block:"start"}) },80);
   addHTML(`<div class="burbuja">Declaro la capacidad instalada y la proceso.</div>`);
   const ok=falt.length===0;
   addHTML(`<div class="g-fila"><div><p><b>${ok?"Declaración completa.":"Declaración incompleta."}</b> Procesé la capacidad instalada de <b>${conCap.length} de ${B.length}</b> especialidades aprobadas: la tabla ya muestra las columnas <b>Capacidad instalada</b> y <b>Prioridad</b>${capCompleta()?" y el mapa de decisión cruza los dos ejes":""}.</p>
     ${falt.length?`<p>Faltan los tres indicadores de la Escuela en: <b>${falt.map(e=>e.n).join("</b>, <b>")}</b>. Sin ellos esas filas siguen «sin declarar» y se juzgan solo por potencial; puede completarlas con <b>Declarar la capacidad instalada</b> cuando la Dirección responda.</p>`:""}
     ${parc.length?`<p>${parc.length} especialidad${parc.length>1?"es":""} quedó con <b>3 de 5</b> indicadores: Génesys no encontró oferta ni norma que evaluar para su diferenciación y habilitación. Su capacidad se calculó con los tres declarados.</p>`:""}
     <p>Sigue <b>Seleccionar y decidir el destino</b>: marque ✓ las que entran al plan y confirme con el botón verde al pie de la tabla.</p></div></div>`);
   cerrarActo(2); accionAlFinal();
   if(!(ESCUELA&&ESCUELA.demo)){ document.querySelectorAll("#chat .enc.encT").forEach(x=>{ if(/capacidad/i.test(x.textContent)&&!/Listo|Omitido/.test(x.textContent)) x.innerHTML=`<div class="enc-k encT">Listo</div><div class="enc-t">Declarar la capacidad instalada</div>` }); guiar() }
   abajo()};
 const bso=document.getElementById("b-sel-ok"); if(bso) bso.onclick=confirmarSeleccion;
 armarTableroResto();
}
/* Confirmación de la segunda decisión (momento 5): desde la barra verde del tablero o desde la conversación. */
function confirmarSeleccion(){
   if(!ESP.some(e=>!e.oculta&&e.sel)) return;
   const e4=ENCARGOS.find(x=>x.done===4); const h=e4?siguienteDone(e4):5; if(S.done<h) S.done=h;
   S.selOk=true; ESP.forEach(x=>{ if(x.sel) x.selMan=true }); S.salE.esp="seleccionado";
   document.querySelectorAll("#chat .enc.encT").forEach(x=>{ if(/Seleccionar y decidir/.test(x.textContent)&&!/Listo/.test(x.textContent)) x.innerHTML=`<div class="enc-k encT">Listo</div><div class="enc-t">Seleccionar y decidir el destino</div>` });
   pintarCentro("tablero"); pintarPanel(); marcar();
   addHTML(`<div class="burbuja">Confirmo la selección y el destino de cada especialidad.</div>`);
   addHTML(`<div class="g-fila"><div><p>Selección confirmada: <b>${ESP.filter(e=>!e.oculta&&e.sel).length}</b> especialidades entran al plan${S.integr.length?` con ${S.integr.length} integración${S.integr.length>1?"es":""}`:""}. Sigue <b>Guardar las Especialidades Validadas</b>.</p></div></div>`);
   if(ESCUELA&&ESCUELA.demo){ const w=document.getElementById("acc-espera"); if(w) w.remove(); botones(); abajo() } else guiar()}
function armarTableroResto(){
 const verDet=()=>{ const d=document.querySelector(".detalle"); if(d) d.scrollIntoView({block:"nearest"}) };
 const cm=document.getElementById("cols-m"); if(cm) cm.onclick=()=>{S.colsM=!S.colsM; S.det=null; S.rubrica=false; pintarCentro("tablero"); verDet()};
 const cc=document.getElementById("cols-c"); if(cc) cc.onclick=()=>{S.colsC=!S.colsC; pintarCentro("tablero"); verDet()};
 document.querySelectorAll("[data-q]").forEach(g=>g.onclick=()=>{
   const [a,b]=g.dataset.q.split("|").map(Number); S.zoom=[a,b]; pintarCentro("tablero")});
 const uz=document.getElementById("unzoom"); if(uz) uz.onclick=()=>{S.zoom=null; pintarCentro("tablero")};
 const mx=document.getElementById("max-mapa"); if(mx) mx.onclick=()=>{S.mapOff=false; pintarCentro("tablero")};
 const svg=document.getElementById("svg-mapa"), tip=document.getElementById("tip");
 if(svg){const L=listadas();
  svg.querySelectorAll("[data-pt]").forEach(c=>{
   c.addEventListener("mouseenter",()=>{const e=L[+c.dataset.pt];
    const b=(t,v,col)=>`<div class="tb"><span>${t}</span><i><b style="width:${v}%;background:${col}"></b></i><em>${v}</em></div>`;
    const a100=x=>Math.round((x-1)/3*100);
    tip.innerHTML=`<div class="tp-h"><b>${e.n}</b>${S.delphi?`<span class="chip ${DEC[e.dec][0]}">${DEC[e.dec][1]}</span>`:""}</div>
     <div class="tp-frase">${frase(e)}</div>
     <div class="tp-2">
      <div class="tp-col"><div class="tp-t">Potencial de mercado<em>${e.ATR}</em></div>
       ${b("Demanda",e.DEM,"#003366")}${b("Tendencia",e.TEN,"#003366")}${b("Impacto",e.IMP,"#003366")}${b("Sostenib.",e.SOS,"#003366")}</div>
      <div class="tp-col"><div class="tp-t">Capacidad<em>${e.VIA===null?"—":e.VIA}</em></div>
       ${e.VIA===null?'<div class="tp-ind">Sin declarar por la escuela</div>'
        :b("Docentes",a100(e.v.doc),"#5B6470")+b("Campos",a100(e.v.cam),"#5B6470")+b("Equipam.",a100(e.v.inf),"#5B6470")+b("Difer.",a100(e.v.dif),"#5B6470")+b("Habilit.",a100(e.v.hab),"#5B6470")}</div></div>
     <div class="tp-pie">${ET.pue[e.puesto-1]} · impacto ${ET.cri[e.i.cri-1].toLowerCase()}, alcance ${ET.alc[e.i.alc-1].toLowerCase()}</div>`;
    tip.style.display="block";
    const box=svg.getBoundingClientRect(), pr=c.getBoundingClientRect(), caja=svg.parentElement.getBoundingClientRect();
    tip.style.left=Math.max(6,Math.min(pr.left-caja.left+16, box.width-430))+"px";
    tip.style.top=Math.max(6,pr.top-caja.top-40)+"px"});
   c.addEventListener("mouseleave",()=>tip.style.display="none")})}
}
const ULT=()=>{const k=Object.keys(S.salE); return k[k.length-1]};
function ajustarDetalle(){ document.querySelectorAll(".det-vis").forEach(d=>{ const c=d.closest(".tbl-esp")||d.closest(".research-body"); if(c) d.style.width=Math.max(320,c.clientWidth-34)+"px" }) }
window.addEventListener("resize",ajustarDetalle);
new MutationObserver(()=>{ if(document.querySelector(".det-vis")) ajustarDetalle() }).observe(document.getElementById("vista")||document.body,{childList:true,subtree:true});
/* Matriz ancha: se arrastra con el mouse (botón izquierdo sobre zonas sin control, o botón derecho en cualquier punto)
   para desplazarla a la derecha o a la izquierda; el menú contextual se suprime mientras se arrastra. */
(function(){
 let caja=null,x0=0,y0=0,sx=0,sy=0,movio=false,boton=0;
 document.addEventListener("mousedown",ev=>{
  const c=ev.target.closest(".mx"); if(!c) return;
  if(ev.button===0&&ev.target.closest("button,input,select,textarea,a,[contenteditable=true],[data-mk],[data-comp]")) return;
  if(ev.button!==0&&ev.button!==2) return;
  caja=c; boton=ev.button; x0=ev.clientX; y0=ev.clientY; sx=c.scrollLeft; sy=c.scrollTop; movio=false; c.classList.add("arrastra"); ev.preventDefault();
 });
 document.addEventListener("mousemove",ev=>{ if(!caja) return; const dx=ev.clientX-x0, dy=ev.clientY-y0; if(Math.abs(dx)>3||Math.abs(dy)>3) movio=true; caja.scrollLeft=sx-dx; caja.scrollTop=sy-dy });
 const soltar=()=>{ if(caja){ caja.classList.remove("arrastra"); } caja=null };
 document.addEventListener("mouseup",soltar); document.addEventListener("mouseleave",soltar);
 document.addEventListener("contextmenu",ev=>{ if(ev.target.closest(".mx")&&(movio||boton===2)){ ev.preventDefault(); movio=false } });
})();
(function(){
 let tip=null;
 const crear=()=>{ if(tip) return tip; tip=document.createElement("div"); tip.className="tip tip-int"; tip.style.display="none"; document.body.appendChild(tip); return tip };
 document.addEventListener("mouseover",ev=>{
  const b=ev.target.closest(".integrada[data-int-i],.integrada[data-int-b]"); if(!b) return;
  const t=crear();
  if(b.dataset.intB){   // matriz del 1.3: cómo se cruza cada integrada
    const base=b.dataset.intB, e=ESP.find(x=>(x.n0||x.n)===base); if(!e) return;
    const rel=m=>{ const tp=tipoDe(m); const k=marcasDe(m,false).find(x=>x.k!==null); return tp[0]==="cap"&&k&&ARQ[k.c]?"capacidad «"+ARQ[k.c].caps[k.k].n+"»":tp[1].toLowerCase() };
    t.innerHTML=`<div class="tp-h"><b>${nombreGrupo(base)}</b><span class="chip c-esen">⧉ grupo integrado</span></div>
     <div class="tp-frase">Cada integrada se cruza con su propio proceso; la fila reúne sus marcas.</div>
     <div class="tp-int"><div class="tp-ir base"><span class="tp-ik">base</span><span>${base}</span><em>${tipoDe(base)[1].toLowerCase()}</em></div>
     ${miembrosDe(base).map(m=>`<div class="tp-ir"><span class="tp-ik">integra</span><span>${m}</span><em>${rel(m)}</em></div>`).join("")}</div>
     <div class="tp-pie">El tipo de la fila es el de la base · las marcas aportadas por una integrada llevan borde punteado en la celda.</div>`;
  } else {
  const e=ESP[+b.dataset.intI]; if(!e) return;
  const base=e.n0||e.n, mi=ESP.filter(o=>o.oculta&&o.integradaEn===base);
  t.innerHTML=`<div class="tp-h"><b>${e.n}</b><span class="chip c-esen">⧉ grupo integrado</span></div>
   <div class="tp-frase">Especialidades que lo componen, con el potencial que tenía cada una antes de integrarse.</div>
   <div class="tp-int"><div class="tp-ir base"><span class="tp-ik">base</span><span>${base}</span><em>${e.ATR0!=null?e.ATR0:""}</em></div>
   ${mi.map(o=>`<div class="tp-ir"><span class="tp-ik">integra</span><span>${o.n}</span><em>${o.ATR}</em></div>`).join("")}</div>
   <div class="tp-pie">Indicadores promediados · criticidad y alcance por el máximo · el nombre lo fijó la Escuela en «Integrar nombres».</div>`;
  }
  t.style.display="block"; t.style.position="fixed";
  const r=b.getBoundingClientRect(), w=380; let x=r.left, y=r.bottom+8;
  if(x+w>window.innerWidth-12) x=window.innerWidth-12-w; if(x<8) x=8;
  t.style.width=w+"px"; t.style.left=x+"px";
  t.classList.remove("arriba");
  requestAnimationFrame(()=>{ const h=t.offsetHeight; if(y+h>window.innerHeight-8){ y=Math.max(8,r.top-10-h); t.classList.add("arriba") } t.style.top=y+"px" });
 });
 document.addEventListener("mouseout",ev=>{ if(ev.target.closest&&ev.target.closest(".integrada[data-int-i],.integrada[data-int-b]")&&tip) tip.style.display="none" });
})();
function pintarPanel(){
 { const np=document.getElementById("n-prog"); if(np) np.textContent=(S.done-OCULTOS.filter(k=>k<S.done).length)+"/"+(TOTAL-OCULTOS.length); }
 document.getElementById("p-prog").innerHTML=PROG.map((p,i)=>{
  const b=BASE[i],fin=b+p.subs.length,cls=S.done>=fin?"ok":(S.done>=b?"act":"fut");
  return `<div class="paso ${cls}"><div class="bola"></div><div><div class="t">${p.id} ${p.t}</div>
   <ul class="sub">${p.subs.map((s,j)=>{const k=b+j; if(OCULTOS.includes(k)) return "";
    return `<li class="${S.done>k?"ok":(S.done===k?"now":"wait")} ${S.done>=k?"ir":""}" ${S.done>=k?`data-momento="${k}"`:""}>${s}</li>`}).join("")}</ul></div></div>`}).join("");
 document.querySelectorAll("[data-momento]").forEach(li=>li.onclick=()=>{
   const k=+li.dataset.momento;
   let idx=0; for(let i=0;i<PROG.length;i++){ if(k>=BASE[i]) idx=i }
   const v=["tablero","arquitectura","equivalencia","perfil","valor","informe"][idx];
   pintarCentro(v);
   if(k===S.done) guiar();
 });
 document.getElementById("p-sal").innerHTML=SALIDAS.map(x=>{const e=S.salE[x[0]];
  const v=VISTA_SAL[x[0]], abierta=S.done>=ABRE[v];
  return `<button class="salida ${e?"":"esp"} ${e&&x[0]===ULT()?"on":""} ${abierta?"ir":""}"
   ${abierta?`data-ver="${v}"`:"disabled"} title="${abierta?"Abrir "+x[2]:"Aún no producida"}"><span class="ic">${x[1]}</span>
   <span class="t">${x[2]}<small>paso ${x[3]}</small></span><span class="e">${e||"pendiente"}</span>
   ${abierta?`<span class="sal-go">›</span>`:""}</button>`}).join("");
 document.querySelectorAll("[data-ver]").forEach(b=>b.onclick=()=>pintarCentro(b.dataset.ver));
 pintarDocs();
 const rf=document.getElementById("fu-t-ref"); if(rf) rf.hidden=!S.fue.length;
 document.getElementById("p-fue").innerHTML=S.fue.map(f=>
  `<div class="fuente"><span class="ic">${f.ic}</span><span class="t">${f.t}</span><span class="n">${f.n||""}</span></div>`).join("");
 document.getElementById("n-sal").textContent=Object.keys(S.salE).length+" / "+SALIDAS.length;
 document.getElementById("n-fue").textContent=S.fue.length||"0";
 if(!S.fue.length)document.getElementById("p-fue").innerHTML='<p class="side-panel-empty">Las fuentes consultadas por Génesys aparecerán aquí a medida que avance el proceso.</p>';
 document.getElementById("g-bar").style.width=(S.done/TOTAL*100)+"%";
 let idx=PROG.length-1;
 for(let i=0;i<PROG.length;i++){if(S.done<BASE[i]+PROG[i].subs.length){idx=i;break}}
 const p=PROG[idx],sub=p.subs[S.done-BASE[idx]]||"paso cerrado";
 document.getElementById("g-paso-l").innerHTML=`Paso ${p.id} · <b>${p.t}</b> · ${S.done>=TOTAL?"Fase 1 cerrada":sub}`;
 { const bt=document.getElementById("btn-top"); if(bt) bt.textContent=S.done>=TOTAL?"Enviar a aprobación":`Guardar paso ${p.id}` }
 if(S.done>=TOTAL) document.getElementById("est-borr").textContent="Fase 1 · cerrada";
}

/* ════════════ CHAT ════════════ */
const chat=document.getElementById("chat");
const md=t=>t.replace(/\*\*(.+?)\*\*/g,"<b>$1</b>");
const abajo=()=>chat.scrollTop=chat.scrollHeight;
function addHTML(h){
 const d=document.createElement("div");d.innerHTML=h;
 d.querySelectorAll('#b-act,#b-sel-ok2,#b-acc-enc,#b-listo-enc,#b-listo-t').forEach(b=>{
  const titulo=b.textContent.trim(), M=momentoActual();
  b.classList.add('siguiente-momento');
  b.replaceChildren();
  const icono=document.createElement('span');icono.className='sm-icono';icono.textContent='▶';icono.setAttribute('aria-hidden','true');
  const texto=document.createElement('span'),etiqueta=document.createElement('small'),nombre=document.createElement('b');
  etiqueta.textContent='Siguiente momento · paso '+M.p.id;nombre.textContent=titulo;
  texto.append(etiqueta,nombre);b.append(icono,texto);
 });
 chat.appendChild(d);abajo();return d;
}
/* El botón del momento pendiente siempre cierra la conversación: si Génesys escribe después (una mejora, una confirmación), el botón baja al final. */
function accionAlFinal(){ const b=document.getElementById("b-act")||document.getElementById("b-sel-ok2"); const c=b&&b.closest("#chat > div"); if(c&&c!==chat.lastElementChild) chat.appendChild(c); abajo() }
/* ════════════ ENCARGOS ════════════
   En una escuela real el guion de demostración no corre. La columna de Génesys
   dice qué corresponde ahora: lo que hace el agente en conversación, con la
   instrucción lista para copiar, o lo que se resuelve aquí mismo. */
const METODO="v6.3";
const siguienteDone=e=>{const i=ENCARGOS.indexOf(e);return i>=0&&ENCARGOS[i+1]?ENCARGOS[i+1].done:TOTAL};
const ENCARGOS=[
 {done:0,tipo:"agente",t:"Generar la cartera del campo",
  i:"Ejecuta el paso 1.1 de la Fase 1 para {E}, con el skill dc-1-2-prospectiva-especialidades.\n\nBarre el campo profesional A PLAN CERRADO: el plan de estudios está adjunto en Fuentes pero queda sellado; solo puedes leer su página de identificación. El alcance lo fija el título profesional y la colegiatura.\n\nPor cada especialidad candidata quiero: nombre como lo usa el mercado, descripción de dos líneas, origen, naturaleza, modo de ejercicio en las dos escalas de la regla del puesto, el proceso que ejecuta, la evidencia que entrega, y las cuatro variables del potencial del mercado laboral con fuente fechada y enlace verificable.\n\nCuando termines, escribe la cartera en el tablero de esta escuela.",
  q:"Devuelve la cartera completa del campo, con sus indicadores y sus fuentes, escrita directamente en este tablero."},
 {done:1,tipo:"agente",t:"Validar con el panel de expertos",
  i:"Ejecuta el panel de expertos del paso 1.1 para {E}, con el skill dc-1-panel-prospectiva (o dc-2-panel-expertos con objeto ESPECIALIDADES).\n\nSeis expertos que califican como subagentes independientes y un guardián que verifica y no califica. Cada experto puntúa la esencialidad de cada especialidad para el perfil de egreso en escala 1 a 4, con su propio criterio y sus propias fuentes.\n\nUmbrales declarados antes de la ronda 1: I-CVI mayor o igual a 0,83; CVR crítico 1,00 con N igual a 6; acuerdo mayor o igual a 75 por ciento; RIC menor o igual a 1.\n\nEscribe el acta en el tablero de esta escuela.",
  q:"Seis expertos independientes califican <b>la esencialidad de cada especialidad para el perfil de egreso</b> —de 1 no esencial a 4 imprescindible—, cada uno con su criterio y sus fuentes: mercado laboral, prospectiva, regulación, empleador, tecnología y territorio. No juzgan la capacidad de la Escuela ni el puntaje de mercado: juzgan si el titulado debe formarse ahí. Deja el acta con mediana, I-CVI, CVR, acuerdo y RIC, y el estado en «revisado»."},
 {done:2,tipo:"tablero",t:"Aprobar las especialidades a trabajar",
  q:"<b>Primera decisión.</b> Con el potencial de mercado y el acta del panel a la vista, marque cuáles vale la pena seguir trabajando. Conserve todo lo que tenga potencial ≥ 50: entre 50 y 64 una buena capacidad la convierte en mención. Solo de las aprobadas se declarará capacidad.",
  b:"Ir a la lista y marcar",acc:"tablero"},
 {done:3,tipo:"tablero",omitible:true,t:"Declarar la capacidad instalada",
  q:"Solo de las aprobadas. Abra el formulario, marque los tres indicadores de la Escuela por especialidad y pulse <b>Declarar y procesar</b>: la tabla mostrará <b>Capacidad instalada</b> y <b>Prioridad</b>, el mapa cruzará los dos ejes y aparecerá el botón para seleccionar y decidir. Los otros dos los evalúa Génesys siempre. Lo opcional son los tres de la Escuela.",
  b:"Declarar la capacidad instalada",acc:"cap"},
 {done:4,tipo:"tablero",t:"Seleccionar y decidir el destino",
  q:"<b>Segunda decisión.</b> Con los dos ejes cruzados, marque ✓ qué entra al plan —directo o con plan de habilitación—; lo demás queda como mención, vigilancia o descarte. Confirme con el botón verde al pie de la tabla o con <b>Listo · continuar</b>. Donde el panel dijo «no esencial», el tablero no manda: manda el acta.",
  b:"Ir a la lista y decidir",acc:"tablero"},
 {done:5,tipo:"guardar",t:"Guardar las Especialidades Validadas",
  q:"Al guardar, las seleccionadas quedan congeladas con su potencial, su capacidad y el acta que las sustenta. Desde aquí no se agregan candidatas.",
  k:"esp",e:"validado",hasta:6,ir:"arquitectura"},
 {done:6,tipo:"agente",t:"Determinar las competencias del campo",
  i:"Ejecuta el paso 1.2 de la Fase 1 para {E}, momento de determinación, con el skill dc-1-2-definir-competencias.\n\nEL PLAN SIGUE SELLADO: no lo abras. Toma las especialidades validadas con su proceso que ejecuta y su evidencia que entrega, y agrúpalas por proceso compartido. El proceso común de cada grupo es una competencia; sus tramos con evidencia propia son sus capacidades, entre 2 y 6.\n\nPara cada especialidad del grupo declara su tipo de relación: equivalencia (ejecuta el proceso completo), ámbito de aplicación (mismo proceso, otro objeto) o equivale a una capacidad (un tramo con evidencia propia).\n\nFormula cada competencia con la estructura del Modelo Educativo: verbo de acción + objeto o ámbito de aplicación + condiciones o contexto + propósito o finalidad, más la evidencia con que se demuestra y el nivel de dominio al egreso; y cada capacidad con potencial o habilidad + acción sobre un objeto + contexto de adaptación + conocimientos, actitudes y valores. Alias, título representativo, tipo de competencia y definición conceptual. No redactes la definición operativa. Escríbelas en el tablero como Competencias del Campo.",
  q:"Deja las competencias determinadas <b>a ciegas del plan</b>: agrupadas por proceso compartido, con sus 2 a 6 capacidades, la estructura completa de cada definición y el tipo de relación de cada especialidad —equivalencia, ámbito o capacidad—."},
 {done:7,tipo:"agente",omitible:true,t:"Contrastar con el plan vigente",
  i:"Ejecuta el paso 1.2 de la Fase 1 para {E}, momento de contraste, con el skill dc-1-2-definir-competencias.\n\nAQUÍ SE LEVANTA EL SELLO: abre el plan de estudios desde Fuentes y extrae su formulación literal con dc-1-competencias —competencias, capacidades y definiciones conceptuales tal como están escritas—. Esa extracción es la línea base congelada y no se edita.\n\nArma la matriz de contraste: competencia determinada × competencia vigente. Resuelve cada celda en una de cinco situaciones: coinciden; coinciden en proceso y difieren en capacidades; solo la determinada; solo el plan; sin contraste posible. Donde coincidan y la redacción vigente sea buena, consérvala literal. Registra el gatillo de cada cambio.\n\nEscribe la versión final propuesta y la trazabilidad en el tablero.",
  q:"Es <b>opcional</b>: si la escuela no tiene plan vigente o rediseña desde cero, se omite y las competencias determinadas pasan directo a las compuertas. Si se hace, abre el plan por primera vez y deja las competencias a dos columnas —vigente y propuesta— con la matriz de contraste y el bloque «Por qué cambió»."},
 {done:8,tipo:"tablero",t:"Revisar la estructura y la trazabilidad",
  q:"Dos compuertas antes de guardar: la <b>estructura</b> de cada competencia y capacidad —verbo de acción, objeto o ámbito, condiciones o contexto, propósito, evidencia y nivel de dominio— y la trazabilidad con el plan. Cada una se abre sola, con la instrucción de qué verificar. Si cambia una competencia aquí, la matriz del paso siguiente se regenera: por eso se valida antes de cruzar.",
  b:"Ir a las compuertas",acc:"arquitectura"},
 {done:9,tipo:"guardar",t:"Guardar las competencias",
  q:"Al confirmar quedan guardadas las competencias con sus capacidades y la trazabilidad con el plan. Con ellas congeladas recién se cruza.",
  k:"comp",e:"validado",hasta:10,ir:"equivalencia"},
 {done:10,tipo:"agente",t:"Cruzar especialidades y competencias",
  i:"Ejecuta el paso 1.3 de la Fase 1 para {E}, con el skill dc-1-3-matriz-correspondencia.\n\nCruza cada especialidad validada contra las competencias guardadas en el paso 1.2 —no contra el plan— y confirma el tipo de correspondencia de cada celda: equivale a la competencia, ámbito de aplicación, equivale a una capacidad, ámbito compartido, o sin correspondencia.\n\nAplica la prueba de cobertura en las dos direcciones: toda especialidad cae en al menos una celda y toda capacidad tiene al menos una especialidad. Lo que no encaje es hallazgo y vuelve al paso 1.2.\n\nEscribe la matriz en el tablero.",
  q:"Deja la matriz de trazabilidad especialidad × competencia con la prueba de cobertura en las dos direcciones. Lo que no encaje vuelve al 1.2."},
 {done:11,tipo:"tablero",t:"Marcar y ajustar correspondencias",
  q:"Puede corregir cualquier celda a mano: marcar, cambiar el tipo o <b>desmarcar</b> una correspondencia que el agente propuso. Sus marcas quedan distinguidas como juicio del experto.",
  b:"Ir a la matriz",acc:"equivalencia"},
 {done:12,tipo:"guardar",t:"Guardar la Matriz de Correspondencia",
  q:"Se guarda con las marcas del agente y las que usted corrigió, distinguidas entre sí.",
  k:"corr",e:"validado",hasta:13,ir:"perfil"},
 {done:13,tipo:"agente",t:"Formular los objetivos educacionales",
  i:"Ejecuta el paso 1.4 de la Fase 1 para {E}, con el skill dc-1-4-objetivos-valor-informe.\n\nEl perfil de egreso no se redacta aparte: es la suma de las competencias guardadas y el tablero ya lo muestra. Formula entre tres y cinco objetivos educacionales —el desempeño profesional a tres o cinco años del egreso, no lo que sabe al egresar— y verifica la coherencia en las dos direcciones: ningún objetivo sin competencia que lo sostenga, ninguna competencia sin objetivo que la recoja.\n\nCada objetivo debe rastrearse a una especialidad validada por la matriz del 1.3.\n\nEscribe los objetivos y su matriz de coherencia en el tablero.",
  q:"Deja los objetivos con la competencia que sostiene cada uno, la especialidad de la que se deriva y la prueba de coherencia bidireccional."},
 {done:15,tipo:"guardar",t:"Guardar los objetivos",
  q:"Queda pendiente la validación con grupos de interés —empleadores, egresados y colegio profesional—: es requisito de SINEACE y no la puede suplir el agente.",
  k:"perf",e:"validado",hasta:16,ir:"valor"},
 {done:16,tipo:"agente",t:"Formular la propuesta de valor",
  i:"Ejecuta el paso 1.5 de la Fase 1 para {E}, con el skill dc-1-5-propuesta-valor.\n\nLa propuesta de valor no se redacta primero: se deriva. No la inventes.\n\n1. Cadena de propósito de la carrera y de cada competencia: problema con dato, fuente, fecha y territorio → competencia guardada por su código → consecuencia para un beneficiario nombrado → propósito ≤ 18 palabras.\n2. Ficha de cinco campos: C1 destinatario principal; C2 tensión del campo (≤ 25 palabras, con fuente); C3 categoría de comparación (≥ 2 instituciones reales del barrido del 1.1); C4 diferenciales candidatos (3 a 8, cada uno con familia D1–D8, evidencia fechada, responsable, alcance ≥ 60 % de la cohorte y competencia que lo recoge); C5 condición de caducidad (≤ 15 palabras, fechable). Más cinco o más paridades declaradas.\n3. Puerta G0: ocho verificaciones binarias (más las anclas de cada cadena). Si falla una, no convoques al panel: corrige y dilo.\n4. Panel VALOR: seis expertos independientes y un guardián que no califica. Objeto A por diferencial (espejo, demostrabilidad, relevancia, esencialidad, vigencia a 5 años); objeto C por cadena (anclaje, atribución, movilización, dignidad; el analista de oferta cede el puesto a un padre o madre que paga); umbrales declarados antes de la ronda 1; tope de 2 rondas.\n5. Corte a los tres confirmados de mayor sustento y redacción derivada: propósito (≤ 18), párrafo de la carrera de 45 a 70 palabras en tres movimientos (forma… · se diferencia por… · se demuestra con…), promesa ≤ 18; por competencia propósito, propuesta (2–3 oraciones) y promesa ≤ 18. Sin lista negra. Objeto B sobre los textos: claridad, sostenimiento, doble auditorio.\n\nEscribe en el tablero la ficha, las paridades, las cadenas con su veredicto, los diferenciales con su acta, los textos y el veredicto sobre los textos.",
  q:"Deja la ficha C1–C5 con sus paridades, la puerta G0 superada, las cadenas de propósito aprobadas, los diferenciales con el acta del panel VALOR y el propósito, el párrafo y la promesa de la carrera y de cada competencia. Después puede ajustarla con <b>Ajustar con Génesys</b> desde la misma pantalla y ver los cambios."},
 {done:17,tipo:"guardar",t:"Guardar la propuesta de valor",
  q:"Es el texto que sustenta la diferenciación de la carrera ante admisión, ante el postulante y ante acreditación.",
  k:"vlr",e:"validado",hasta:18,ir:"informe"},
 {done:18,tipo:"tablero",t:"Generar las fichas técnicas",
  q:"Las fichas se arman con lo ya guardado: una por competencia sobre la plantilla P001, hoja vertical y hoja apaisada.",
  b:"Ir al Estudio",acc:"informe",marca:"fichas",hasta:19},
 {done:19,tipo:"agente",t:"Armar el Estudio Prospectivo de la Carrera",
  i:"Ejecuta el paso 1.6 de la Fase 1 para {E}, con el skill dc-1-4-objetivos-valor-informe.\n\nRedacta el Estudio Prospectivo de la Carrera Profesional como un experto en estudios de mercado educativo, con estilo de marketing: es la primera venta del rediseño ante los directivos. Once secciones: resumen ejecutivo (con el propósito y la promesa), introducción (la carrera, su campo, por qué un estudio prospectivo ahora y cómo se hizo, con citas APA a la Ley Universitaria, Tuning, la prospectiva estratégica y el método e-Delphi), objetivo del estudio, mapa de decisión, resultados por especialidad, especialidades que entran al plan, propuesta de valor, matriz de correspondencia, objetivos educacionales, fichas técnicas, control de versiones. Cada sección abre con lo que está en juego y cierra con la decisión que pide.\n\nNada se inventa: todo se deriva de lo ya guardado en el tablero. Toda afirmación sobre el campo o sobre el método lleva su cita APA en el texto y su entrada en el anexo: fuentes del campo en las secciones 4 a 7 y referencias metodológicas en la introducción. Escribe el estudio en el tablero.",
  q:"Deja el estudio armado a partir de lo guardado, con introducción y redacción que enganche a la Dirección. Si algo no cuadra, se corrige en su paso y el estudio se regenera."},
 {done:20,tipo:"guardar",t:"Guardar el estudio y versionar",
  q:"Se guarda como v1.0 y queda congelado: cualquier cambio posterior abre una v1.1 con el motivo declarado. Fase 1 cerrada.",
  k:"inf",e:"v1.0 guardado",hasta:21,ir:"informe",version:true,marca:"informe"}
];
/* Qué tiene que ver el tablero para dar por entregado cada encargo del agente.
   Sin esto el contador avanza sobre el vacío y las pantallas siguientes quedan inertes. */
const VERIF={
 0:()=>ESP.length?null:"la cartera del campo: el tablero no tiene ninguna especialidad todavía",
 1:()=>ESP.some(e=>e.panel)?null:"el acta del panel de expertos",
 2:()=>ESP.some(e=>!e.oculta&&e.sel)?null:"ninguna especialidad aprobada: marque en la casilla ✓ cuáles se siguen trabajando",
 4:()=>ESP.some(e=>!e.oculta&&e.sel)?null:"ninguna especialidad seleccionada para entrar al plan",
 8:()=>(S.rev.traza&&S.rev.smart)?null:"las dos compuertas revisadas: estructura y trazabilidad",
 6:()=>ARQ.length?null:"las competencias del campo",
 7:()=>PLAN.length?null:"la formulación literal del plan vigente",
 10:()=>S.cruzado?null:"la matriz de correspondencia",
 13:()=>S.objetivos?null:"los objetivos educacionales",
 16:()=>S.valor?null:"la propuesta de valor",
 19:()=>S.informe?null:"el estudio prospectivo"
};
function encargoActual(){
 if(S.done>=TOTAL) return null;
 // un encargo de agente cubre varios momentos (p. ej. objetivos: 14–16): en un momento
 // intermedio rige el último encargo emitido, no «fase recorrida».
 return ENCARGOS.find(x=>x.done===S.done)||[...ENCARGOS].filter(x=>x.done<S.done).pop()||null;
}
/* ════════════ GUÍA DE GÉNESYS ════════════
   En una escuela real Génesys no simula resultados, pero sí conduce: dice en qué
   momento está, qué se produce ahí, qué resuelve el usuario en el tablero y qué
   me toca a mí. Lo único que no puede hacer desde aquí es el trabajo de fondo. */
const PORQUE={
 0:"Porque el rediseño no empieza por el plan: empieza por el campo. Si mirara primero el plan vigente, saldría a buscar con su vocabulario y encontraría lo que el plan ya dice. A plan cerrado aparece lo que el mercado contrata y el plan no recogió.",
 1:"Porque la cartera la propuso un agente y una decisión curricular no se sostiene en eso. El panel califica la esencialidad de cada especialidad para el perfil de egreso, con umbrales declarados antes de empezar. Va antes de la capacidad porque no la necesita: juzga el campo, no la Escuela.",
 2:"Porque declarar capacidad es trabajo caro de la Dirección, y no tiene sentido pedirlo sobre especialidades que nadie aprobó. Primero se acuerda qué vale la pena discutir; después se levanta el dato.",
 3:"Porque el potencial de mercado dice qué pide el campo, pero no qué puede sostener la Escuela hoy. Sin ese segundo dato no se separa lo que entra directo de lo que entra con habilitación. Es opcional: el paso no se detiene por esto.",
 4:"Porque con los dos ejes cruzados recién se puede decidir el destino de cada una. Y donde el panel dijo «no esencial», el cálculo no manda: manda el acta.",
 5:"Porque desde aquí ya no se agregan candidatas. Lo que guarde es la lista que entra al paso 1.2, congelada con su sustento.",
 6:"Porque las competencias se determinan desde el campo, no desde el plan. Si el agente leyera las competencias vigentes antes, saldría a buscar la estructura del plan y la encontraría. A ciegas produce una lectura independiente que después puede contrastarse.",
 7:"Porque recién ahora se abre el plan: dos lecturas independientes —la del campo y la del plan— se comparan. Donde coinciden, la competencia queda doblemente sustentada; donde difieren, la diferencia es información. Es opcional: sin plan vigente, o rediseñando desde cero, se omite.",
 8:"Porque la estructura de la definición y la trazabilidad son las dos compuertas antes de congelar, y se validan aquí y no después: si cambiara una competencia después del cruce, habría que cruzar de nuevo.",
 9:"Porque al guardar, las competencias quedan congeladas con su trazabilidad. Solo con ellas fijas tiene sentido cruzar.",
 10:"Porque la matriz ya no descubre: registra. Cruza las especialidades validadas contra las competencias finales y deja la trazabilidad que los objetivos del 1.4 necesitan: cada objetivo se rastrea a una especialidad y se sostiene en una competencia.",
 11:"Porque su criterio manda sobre el del agente. Las marcas a mano —incluido desmarcar— quedan distinguidas como juicio del experto.",
 12:"Porque la matriz guardada es lo que se presenta en acreditación para explicar qué especialidad sostiene cada competencia.",
 13:"Porque el perfil de egreso ya está —son las competencias guardadas— y lo que falta es distinto: dónde llega el egresado tres a cinco años después. Eso no se deduce del perfil, se formula.",
 15:"Porque la coherencia se verifica en las dos direcciones: ningún objetivo sin competencia que lo sostenga, ninguna competencia sin objetivo que la recoja.",
 16:"Porque la propuesta de valor no se inventa: se deriva de lo que entró al plan, de lo que la Escuela sostiene hoy y de lo que nadie más ofrece en la región. Por eso va al final.",
 17:"Porque es el texto que sustenta la diferenciación de la carrera ante admisión, ante el postulante y ante acreditación.",
 18:"Porque la ficha técnica es el documento con el que cada competencia se aprueba, una por competencia, sobre la plantilla institucional.",
 19:"Porque el estudio es la primera venta del rediseño ante los directivos: consolida los cinco pasos anteriores en un relato que enganche. Nada se inventa: todo se deriva de lo ya aprobado.",
 20:"Porque al versionar, la Fase 1 queda cerrada y auditable, y habilita el inicio de la Fase 2."
};
function momentoActual(){
 let idx=PROG.length-1;
 for(let i=0;i<PROG.length;i++){ if(S.done<BASE[i]+PROG[i].subs.length){idx=i;break} }
 return {p:PROG[idx], sub:PROG[idx].subs[S.done-BASE[idx]]||"paso cerrado", n:Math.min(S.done+1,TOTAL)};
}
function orientar(){
 const e=encargoActual(), M=momentoActual();
 if(!e) return `<p>La <b>Fase 1 está recorrida</b>. El informe quedó guardado y versionado: habilita el inicio de la Fase 2.</p>`;
 const cab=`<p>Está en el <b>paso ${M.p.id} · ${M.p.t}</b>, momento <b>${M.n} de ${TOTAL}</b>: ${M.sub}.</p>`;
 if(e.tipo==="agente") return cab+`<p>${e.q}</p>
   <p><b>Esto lo hago yo, no el tablero.</b> Abajo está el encargo con la instrucción completa: cópiela, péguela en una conversación de este proyecto y vuelva. Yo escribo el resultado aquí y el tablero avanza el momento.</p>`;
 if(e.tipo==="guardar") return cab+`<p>${e.q}</p>
   <p><b>Es una parada humana.</b> El agente propone; la Escuela congela. Revise lo que está en pantalla y, cuando esté conforme, guarde con el botón de abajo.</p>`;
 return cab+`<p>${e.q}</p><p><b>Esto se resuelve aquí mismo</b>, con el botón de abajo. No hace falta pedírmelo.</p>`;
}
function guiar(){
 addHTML(`<div class="g-fila"><div>${orientar()}</div></div>`);
 pintarEncargo();
 const d=addHTML(`<div class="acc-q">
   <button class="qk" data-qk="ahora">¿Qué hago ahora?</button>
   <button class="qk" data-qk="porque">¿Por qué este paso?</button>
   <button class="qk" data-qk="mapa">¿Dónde estoy en la Fase 1?</button></div>`);
 d.querySelectorAll("[data-qk]").forEach(b=>b.onclick=()=>responder(b.dataset.qk));
 abajo();
}
function responder(k){
 const M=momentoActual(), e=encargoActual();
 if(k==="ahora"){ addHTML(`<div class="burbuja">¿Qué hago ahora?</div>`); guiar(); return }
 if(k==="porque"){
   addHTML(`<div class="burbuja">¿Por qué este paso?</div>`);
   addHTML(`<div class="g-fila"><div><p>${PORQUE[e?e.done:S.done]||"Este momento cierra lo anterior y habilita lo siguiente."}</p></div></div>`);
   abajo(); return }
 if(k==="mapa"){
   addHTML(`<div class="burbuja">¿Dónde estoy en la Fase 1?</div>`);
   addHTML(`<div class="g-fila"><div><p>Va <b>${S.done} de ${TOTAL}</b> momentos. Los seis pasos:</p>
     ${PROG.map((p,i)=>{const fin=BASE[i]+p.subs.length;
       const est=S.done>=fin?"✓ cerrado":(S.done>=BASE[i]?"› en curso":"· pendiente");
       return `<p style="margin:0 0 5px"><b>${p.id}</b> ${p.t} — <i>${est}</i></p>`}).join("")}
     <p>El sello del plan de estudios se levanta en el paso 1.2, al contrastar con el plan vigente.</p></div></div>`);
   abajo(); return }
}
/* Un encargo suelto —mejorar una competencia, ajustar la propuesta de valor— con la misma
   mecánica: instrucción lista para copiar y pegar en el chat del proyecto. */
function encargoLibre(t,txt){
 const d=addHTML(`<div class="enc"><div class="enc-k">Encargo a Génesys</div><div class="enc-t">${t}</div>
   <div class="enc-i">${txt.replace(/</g,"&lt;").replace(/\n/g,"<br>")}</div>
   <div class="enc-a"><button class="b-nav" data-cop>Copiar la instrucción</button></div>
   <div class="enc-n">Péguela en una conversación de este proyecto. Génesys escribe el resultado en el tablero y usted lo revisa aquí.</div></div>`);
 d.querySelector("[data-cop]").onclick=async()=>{const b=d.querySelector("[data-cop]");
   if(await copiar(txt)){b.textContent="✓ Copiada al portapapeles"; setTimeout(()=>{b.textContent="Copiar la instrucción"},2400)}
   else b.textContent="Seleccione el texto y pulse Ctrl+C"};
 abajo();
}
function pintarEncargo(){
 const e=encargoActual();
 if(!e){ addHTML(`<div class="humano" style="border-left-color:var(--verde);background:#f2faf5;color:#14532d">Fase 1 recorrida. El informe está guardado y versionado.</div>`); return }
 const esc=ESCUELA?ESCUELA.nombre:"la escuela";
 if(e.tipo==="agente"){
  const base=e.i.replace(/\{E\}/g,esc);
  // insumos: los documentos adjuntos que el usuario marque + instrucciones adicionales; ambos entran al encargo
  const ROL_DEF={0:["norma","sector","oferta","modelo"],1:["norma","sector","oferta"],3:["oferta","norma","capacidad"],6:["modelo"],7:["plan"],13:["modelo"],16:["modelo","oferta"],19:["modelo"]};
  if(!S.encIns[e.done]) S.encIns[e.done]=DOCS.filter(d=>(ROL_DEF[e.done]||[]).includes(d.rol)).map(d=>d.id);
  const compone=()=>{
    const sel=DOCS.filter(d=>S.encIns[e.done].includes(d.id));
    const ex=(S.encExtra[e.done]||"").trim();
    return base+(sel.length?"\n\nINSUMOS ADJUNTOS — léelos como contexto antes de ejecutar; si el enlace no abre, pide el archivo en el chat:\n"+sel.map(d=>"- "+d.nombre+" ("+((ROLES[d.rol]||ROLES.otro)[0])+") — "+d.url).join("\n"):"")
      +(ex?"\n\nINSTRUCCIONES ADICIONALES DE LA ESCUELA — tienen prioridad sobre lo anterior donde no contradigan el método:\n"+ex:"");
  };
  let txt=compone();
  const d=addHTML(`<div class="enc">
    <div class="enc-k">Encargo a Génesys</div>
    <div class="enc-t">${e.t}</div>
    <p class="enc-q">${e.q}</p>
    <div class="enc-i" id="enc-txt">${txt.replace(/\n/g,"<br>")}</div>
    <div class="enc-ins">
     <div class="enc-k">Insumos para este encargo <span class="enc-nn">${DOCS.length?DOCS.length+" en Fuentes":"sin documentos adjuntos"}</span></div>
     ${DOCS.map(dd=>`<label class="mf-o"><input type="checkbox" data-ins="${dd.id}" ${S.encIns[e.done].includes(dd.id)?"checked":""}> ${dd.nombre} <em>${(ROLES[dd.rol]||ROLES.otro)[0]}</em></label>`).join("")}
     <button class="b-out sm" id="enc-subir">＋ Adjuntar otro documento</button>
     <label class="dr-fl" style="margin-top:9px">Instrucciones adicionales para Génesys</label>
     <textarea class="dr-t" id="enc-extra" rows="2" placeholder="Lo que Génesys deba considerar además del método: énfasis, alcance, fuentes preferidas…">${S.encExtra[e.done]||""}</textarea>
    </div>
    <div class="enc-a"><button class="b-nav" id="b-copiar-enc">Copiar la instrucción</button>
     <button class="b-out" id="b-listo-enc">✓ Ya lo entregó · continuar</button>
     ${e.omitible?`<button class="b-out" id="b-omitir-ag">Omitir este momento ›</button>`:""}</div>
    ${S.done>0?`<div class="enc-a" style="margin-top:6px"><button class="b-out" id="b-atras-enc2">‹ Volver al momento anterior</button></div>`:""}
    <div class="enc-n">Péguela en una conversación de este proyecto. Cuando Génesys le devuelva el resultado, marque <b>Ya lo entregó</b> y la secuencia avanza al momento siguiente.</div>
  </div>`);
  d.querySelectorAll("[data-ins]").forEach(c=>c.onchange=()=>{
    const L=S.encIns[e.done]; const i=L.indexOf(c.dataset.ins); c.checked?(i<0&&L.push(c.dataset.ins)):(i>=0&&L.splice(i,1));
    txt=compone(); d.querySelector("#enc-txt").innerHTML=txt.replace(/\n/g,"<br>"); marcar()});
  d.querySelector("#enc-extra").addEventListener("input",ev=>{S.encExtra[e.done]=ev.target.value; txt=compone(); d.querySelector("#enc-txt").innerHTML=txt.replace(/\n/g,"<br>"); marcar()});
  d.querySelector("#enc-subir").onclick=()=>document.getElementById("b-subir").click();
  const oa=d.querySelector("#b-omitir-ag"); if(oa) oa.onclick=()=>{
   const h=siguienteDone(e); if(S.done<h) S.done=h;
   d.innerHTML=`<div class="enc encT"><div class="enc-k encT">Omitido</div><div class="enc-t">${e.t}</div><p class="enc-q">Se puede volver a este momento desde «Volver al momento anterior».</p></div>`;
   pintarCentro(S.vista); pintarPanel(); guiar(); marcar();
  };
  d.querySelector("#b-copiar-enc").onclick=async()=>{
   const b=d.querySelector("#b-copiar-enc");
   if(await copiar(txt)){ b.textContent="✓ Copiada al portapapeles"; setTimeout(()=>{b.textContent="Copiar la instrucción"},2400); return }
   // si el marco no deja copiar, se deja el texto seleccionado y se dice qué hacer
   const c=d.querySelector("#enc-txt");
   c.classList.add("sel"); const r=document.createRange(); r.selectNodeContents(c);
   const sel=getSelection(); sel.removeAllRanges(); sel.addRange(r);
   b.textContent="Seleccionada — pulse Ctrl+C";
   if(!d.querySelector(".enc-w")) c.insertAdjacentHTML("afterend",
     `<div class="enc-w">El navegador no deja copiar desde aquí. El texto ya quedó <b>seleccionado</b>: pulse <b>Ctrl+C</b> (o Cmd+C) y péguelo en el chat del proyecto.</div>`);
  };
  const at2=d.querySelector("#b-atras-enc2"); if(at2) at2.onclick=()=>atras();
  const avanzar=()=>{
   const h=siguienteDone(e); if(S.done<h) S.done=h;
   d.innerHTML=`<div class="enc hecho"><div class="enc-k">Recibido</div><div class="enc-t">${e.t}</div></div>`;
   pintarCentro(S.vista); pintarPanel(); guiar(); marcar();
  };
  d.querySelector("#b-listo-enc").onclick=()=>{
   if(d.querySelector(".cfm")) return;
   const falta=(VERIF[e.done]||(()=>null))();
   if(!falta) return avanzar();
   confirmar(d,`El tablero todavía no ve <b>${falta}</b>. Si avanza igual, las pantallas del momento siguiente quedarán vacías.`,
     "Avanzar de todos modos",avanzar);
  };
 } else {
  const d=addHTML(`<div class="enc encT">
    <div class="enc-k encT">Se hace en el tablero</div>
    <div class="enc-t">${e.t}</div>
    <p class="enc-q">${e.q}</p>
    <div class="enc-a"><button class="b-nav" id="b-acc-enc">${e.b||"Guardar este paso"}</button>
     ${(e.tipo==="tablero"&&!e.marca)?`<button class="b-out" id="b-listo-t">✓ Listo · continuar</button>`:""}
     ${e.omitible?`<button class="b-out" id="b-omitir-enc">Omitir por ahora ›</button>`:""}
     ${S.done>0?`<button class="b-out" id="b-atras-enc">‹ Volver al momento anterior</button>`:""}</div>
    ${(e.tipo==="tablero"&&!e.marca)?`<div class="enc-n">Cuando termine de marcar en el tablero, pulse <b>Listo · continuar</b> y la secuencia avanza al momento siguiente.</div>`:""}
    ${e.omitible?`<div class="enc-n">Es opcional. Si la Dirección aún no responde, omítalo: la cartera se ordena solo por potencial y puede volver cuando tenga el dato.</div>`:""}
  </div>`);
  d.querySelector("#b-acc-enc").onclick=()=>accionEncargo(e,d);
  const lt=d.querySelector("#b-listo-t"); if(lt) lt.onclick=()=>{
   if(d.querySelector(".cfm")) return;
   const avanzarT=()=>{
    const h=siguienteDone(e); if(S.done<h) S.done=h;
    if(e.done===4){ S.selOk=true; ESP.forEach(x=>{ if(x.sel) x.selMan=true }) }
    d.innerHTML=`<div class="enc hecho"><div class="enc-k">Listo</div><div class="enc-t">${e.t}</div></div>`;
    pintarCentro(S.vista); pintarPanel(); guiar(); marcar();
   };
   const falta=(VERIF[e.done]||(()=>null))();
   if(!falta) return avanzarT();
   confirmar(d,`El tablero todavía no ve <b>${falta}</b>. Si avanza igual, el momento siguiente trabajará sobre eso.`,"Avanzar de todos modos",avanzarT);
  };
  const at=d.querySelector("#b-atras-enc"); if(at) at.onclick=()=>atras();
  const om=d.querySelector("#b-omitir-enc"); if(om) om.onclick=()=>{
   const h=siguienteDone(e); if(S.done<h) S.done=h;
   d.innerHTML=`<div class="enc encT"><div class="enc-k encT">Omitido por ahora</div><div class="enc-t">${e.t}</div>
     <p class="enc-q">Puede volver a declararla cuando quiera desde el botón <b>Declarar la capacidad instalada</b> de la pantalla de investigación.</p></div>`;
   pintarCentro(S.vista); pintarPanel(); guiar(); marcar();
  };
 }
}
function atras(){
 const prev=[...ENCARGOS].filter(x=>x.done<S.done).pop();
 S.done=prev?prev.done:0;
 pintarCentro(S.done?S.vista:"inicio"); pintarPanel(); guiar(); marcar();
}
function accionEncargo(e,d){
 if(e.tipo==="guardar"||e.marca){
  if(e.marca) S[e.marca]=true;
  if(e.hasta&&S.done<e.hasta) S.done=e.hasta;
  if(e.k) S.salE[e.k]=e.e;
  if(e.version&&!S.infVer) S.infVer="v1.0";
  if(e.done===5) S.selOk=true;
  if(e.done===9) S.arqOk=true;
  if(e.done===20&&!S.informe) S.informe=true;
  d.innerHTML=`<div class="enc hecho"><div class="enc-k">Guardado</div><div class="enc-t">${e.t}</div></div>`;
  pintarCentro(e.ir||S.vista); pintarPanel(); guiar(); marcar();
  return;
 }
 if(e.acc==="cap"){
   if(!ESP.length){
     addHTML(`<div class="g-fila"><div><p>Todavía no hay <b>cartera</b> en esta escuela, así que no hay especialidades cuya capacidad declarar.</p>
       <p>El momento anterior —<b>generar la cartera del campo</b>— no se completó. Vuelva a él con el botón de abajo, copie el encargo y pídamelo en el chat del proyecto.</p></div></div>`);
     const b=addHTML(`<div class="acc-q"><button class="qk" id="b-volver-cartera">‹ Volver a generar la cartera</button></div>`);
     b.querySelector("#b-volver-cartera").onclick=()=>atras();
     abajo(); return;
   }
   S.capacityClosed=false; S.capForm=true; pintarCentro("tablero") }
 else if(e.acc) pintarCentro(e.acc);
}
function botones(){
 if(!(ESCUELA&&ESCUELA.demo)) return guiar();
 // un momento ya resuelto desde el tablero (arquitectura confirmada, contraste omitido) no se vuelve a ofrecer
 while(ACTOS[S.acto]&&((ACTOS[S.acto].esperaArq&&S.arqOk&&S.done>=10)||(ACTOS[S.acto].pidePlan&&S.contrasteOmitido)||(ACTOS[S.acto].omiteCap&&S.capOk))){ const h=ACTOS[S.acto];
  if(h.omiteCap){ S.done=Math.max(S.done,h.done); S.acto++; continue }   // capacidad ya declarada: no se pregunta
  addHTML(`<div class="acc"><button class="b-hecho">${h.boton}${h.pidePlan?" · omitido":""}</button></div>`); S.acto++ }
 const a=ACTOS[S.acto];
 if(!a){addHTML(`<div class="humano" style="border-left-color:var(--verde);background:#f2faf5;color:#14532d">Fase 1 recorrida.</div>`);return}
 if(a.esperaArq&&!S.arqOk){ addHTML(`<div class="humano" id="acc-espera">Esperando la decisión de la Escuela: revise las dos compuertas (trazabilidad y estructura) y pulse <b>Confirmar y guardar</b> en el tablero. Recién entonces se guardan las competencias.</div>`); return }
 if(S.acto>0&&ACTOS[S.acto-1].propone&&!S.selOk){ const w=addHTML(`<div class="humano" id="acc-espera">Esperando la decisión de la Escuela: ajuste las casillas ✓ e integre lo que corresponda en el tablero; luego confirme aquí.<div class="acc"><button class="b-nav" id="b-sel-ok2">✓ Confirmar la selección y continuar</button></div></div>`); w.querySelector("#b-sel-ok2").onclick=confirmarSeleccion; return }
 const d=addHTML(`<div class="acc"><button class="b-nav" id="b-act">${a.boton}</button>${a.opcional?`<button class="b-out2" id="b-omitir">${a.opcional} ›</button>`:""}</div>`);
 d.querySelector("#b-act").onclick=()=>ejecutar(d);
 const om=d.querySelector("#b-omitir"); if(om) om.onclick=()=>omitirActo(d);
}
/* Lleva la vista hasta el primer elemento y señala el bloque de trabajo durante unos segundos. */
function enfocar(sels){
 setTimeout(()=>{ const els=sels.map(s=>document.querySelector(s)).filter(Boolean); if(!els.length) return;
  els[0].scrollIntoView({behavior:"smooth",block:"start"});
  els.forEach(el=>{ const b=el.closest(".traza-b,.smart-b,.guardar")||el; b.classList.add("foco-ahora"); setTimeout(()=>b.classList.remove("foco-ahora"),4500) }) },120);
}
/* Momento opcional omitido: se da por resuelto y la conversación sigue con el siguiente. */
function omitirActo(cont){
 const a=ACTOS[S.acto];
 if(a.omiteCap||a.omiteRev) cont.remove(); else cont.innerHTML=`<div class="acc"><button class="b-hecho">${a.boton} · omitido</button></div>`;
 if(!a.omiteCap) addHTML(`<div class="burbuja">Omito el contraste con el plan vigente.</div>`);
 if(a.pidePlan){ S.contrasteOmitido=true; TRAZA=[]; S.done=Math.max(S.done,a.done); S.salE.comp=S.salE.comp||"borrador";
  addHTML(`<div class="g-fila"><div><p>Contraste omitido. Las <b>${ARQ.length} competencias</b> pasan a las compuertas tal como se derivaron, con la trazabilidad declarada como <b>competencias nuevas</b>. Si más adelante adjunta el plan, el contraste puede hacerse antes de guardar.</p></div></div>`); }
 if(a.omiteRev){   // revisión opcional: se confirma y guarda la arquitectura sin abrir las compuertas
  S.rev={traza:true,smart:true}; S.smartOk=true; S.arqOk=true; if(S.done<10) S.done=10; S.salE.comp="validado";
  addHTML(`<div class="burbuja">Confirmo la arquitectura: las ${ARQ.length} competencias quedan guardadas.</div>`);
  addHTML(`<div class="g-fila"><div><p>Guardadas las <b>${ARQ.length} competencias</b> con sus capacidades${S.contrasteOmitido?"":", la trazabilidad"} y las especialidades asociadas, sin revisar las compuertas. <b>Paso 1.2 cerrado.</b></p></div></div>`);
  S.acto++; pintarCentro("equivalencia"); pintarTabs(); pintarPanel(); marcar(); botones(); abajo(); return }
 if(a.omiteCap){   // capacidad: Génesys aplica igual sus dos indicadores; los tres de la Escuela quedan sin declarar
  ESP.forEach(e=>{ if(e.vagente) ["dif","hab"].forEach(k=>{ if(!(e.vman||{})[k]&&e.vagente[k]) e.v[k]=e.vagente[k] }); calcular(e) });
  S.done=Math.max(S.done,a.done); S.salE.esp=S.salE.esp||"aprobadas";
  S.acto++; pintarCentro(a.vista); pintarPanel(); marcar();
  const d=addHTML(`<div class="acc"><button class="b-nav" id="b-act">${ACTOS[S.acto].boton}</button></div>`); ejecutar(d); return; }
 S.acto++;
 if(ACTOS[S.acto]&&pasoDeActo(S.acto)!==pasoDeActo(S.acto-1)) S.snaps[pasoDeActo(S.acto)]=fotoPaso();
 pintarCentro(a.vista); pintarPanel(); marcar(); botones(); abajo();
}
/* Génesys pide el plan antes de contrastar: cualquier archivo sirve; se registra en Fuentes y se simula su lectura. */
function pedirPlan(cont){
 const a=ACTOS[S.acto];
 cont.innerHTML=`<div class="acc"><button class="b-hecho">${a.boton}</button></div>`;
 addHTML(`<div class="burbuja">Contrasta las competencias con el plan vigente.</div>`);
 const d=addHTML(`<div class="g-fila"><div><p>Para contrastar necesito el <b>plan de estudios vigente</b>. Hasta ahora estuvo sellado; al adjuntarlo lo abro por primera vez. Sirve PDF, Word, texto o Markdown.</p>
  <div class="acc" style="margin-top:8px"><label class="b-nav" style="cursor:pointer">📎 Adjuntar el plan de estudios<input type="file" id="plan-file" hidden></label><button class="b-out2" id="b-omitir2">Omitir el contraste ›</button></div></div></div>`);
 d.querySelector("#plan-file").onchange=ev=>{ const f=ev.target.files&&ev.target.files[0]; if(f) planAdjuntado(f.name) };
 d.querySelector("#b-omitir2").onclick=()=>{ d.remove(); const c=addHTML(""); omitirActo(c) };
}
function planAdjuntado(nombre){
 S.planArchivo=nombre; S.fue.push({ic:/\.pdf$/i.test(nombre)?"PDF":"DOC",t:"Plan de estudios vigente",n:nombre}); pintarPanel(); marcar();
 document.querySelectorAll("#plan-file").forEach(i=>{ const acc=i.closest(".acc"); if(acc) acc.innerHTML=`<span class="tl-t">✓ Plan adjunto: <b>${nombre}</b></span>` });
 addHTML(`<div class="burbuja">Adjunto el plan de estudios vigente: ${nombre}.</div>`);
 const d=addHTML(`<div class="acc"><button class="b-nav" id="b-act">${ACTOS[S.acto].boton}</button></div>`);
 ejecutar(d);
}
window.planAdjuntado=planAdjuntado;
/* Cuando el usuario resuelve un momento desde el tablero (p. ej. declara la capacidad desde la sección 03),
   el botón pendiente de ese momento en la conversación se da por hecho y aparece el del siguiente. */
function cerrarActo(i,nota){
 if(!(ESCUELA&&ESCUELA.demo)||S.acto!==i) return;
 const a=ACTOS[i]; const b=document.getElementById("b-act"); const w=document.getElementById("acc-espera");
 if(b&&b.parentElement) b.parentElement.innerHTML=`<button class="b-hecho">${a.boton}</button>`;
 else if(w) w.outerHTML=`<div class="acc"><button class="b-hecho">${a.boton}</button></div>`;
 if(a.sal) S.salE[a.sal.k]=S.salE[a.sal.k]||a.sal.e;
 if(nota) addHTML(`<div class="g-fila"><div><p>${nota}</p></div></div>`);
 if(a.humano&&ACTOS[i+1]&&ACTOS[i+1].humano) addHTML(`<div class="humano">${ACTOS[i+1].humano}</div>`);
 S.acto=i+1;
 if(ACTOS[S.acto]&&pasoDeActo(S.acto)!==pasoDeActo(S.acto-1)) S.snaps[pasoDeActo(S.acto)]=fotoPaso();   // si con esto empieza otro paso, foto para «Reiniciar»
 pintarPanel(); botones(); abajo();
}
let RAPIDO=false;   // con ⚡ la traza de Génesys corre sin esperas
function ejecutar(cont){
 const a=ACTOS[S.acto],b=cont.querySelector("#b-act");
 if(a.pidePlan&&!S.planArchivo){ pedirPlan(cont); return }
 if(a.abreCap){   // declarar la capacidad: solo se abre el formulario, sin autocompletar lo de la Escuela ni traza de Génesys
  S.capacityClosed=false; S.capForm=true; pintarCentro("tablero"); return }
 b.disabled=true;b.textContent="Ejecutando…";
 addHTML(`<div class="burbuja">${a.instruccion}</div>`);
 const pasos=(a.traza||[]).map(plantilla);
 const tr=pasos.length?addHTML(`<div class="g-traza"><div class="g-traza-h"><span class="g-punto"></span>Génesys está trabajando…</div><ul>${pasos.map(p=>`<li>${p}</li>`).join("")}</ul></div>`):null;
 // duración de la simulación: 15 s en encargos complejos (5 pasos o más), 10 s en los demás
 const total=RAPIDO?60*(pasos.length+1):(a.dur||(pasos.length>=5?15000:10000));
 const paso=pasos.length?total/(pasos.length+1):0;
 pasos.forEach((p,i)=>setTimeout(()=>{ const li=tr.querySelectorAll("li")[i]; if(li) li.classList.add("on"); if(i>0) tr.querySelectorAll("li")[i-1].classList.add("ok"); abajo() },paso*(i+1)));
 setTimeout(()=>{
  if(tr){ tr.querySelectorAll("li").forEach(li=>li.classList.add("ok")); tr.querySelector(".g-traza-h").innerHTML="✓ Listo"; tr.classList.add("hecho");
   setTimeout(()=>{ tr.classList.add("se-va"); setTimeout(()=>tr.remove(),450) },RAPIDO?0:700) }
  cont.innerHTML=`<div class="acc"><button class="b-hecho">${a.boton}</button></div>`;
  // el estado se aplica antes de escribir la respuesta para que las plantillas lean los datos ya cargados
  if(a.delphi)S.delphi=true; ["cruzado","redactado","objetivos","fichas","valor","informe","comparar"].forEach(k=>{if(a[k])S[k]=true});
  if(a.guardaInf)S.infVer="v1.0";
  if(a.cargaCap)cargarDeclaracion(); if(a.abreCap){S.capacityClosed=false; S.capForm=true;} if(a.abreActa)S.acta=true; if(a.selOk){S.selOk=true; S.capForm=false; S.acta=false} if(a.arqOk)S.arqOk=true; if(a.smartOk)S.smartOk=true;
  S.done=a.done; if(a.cargaCap) ESP.forEach(calcular); // con la capacidad a la vista, la propuesta pasa al criterio del momento 5
  if(a.done===3){ ESP.forEach(e=>e.apr=!!e.sel); S.capacityClosed=false; }                                  // aprobadas del momento 3
  if(a.redactado&&ESCUELA&&DATOS[ESCUELA.cod]&&DATOS[ESCUELA.cod].arq){        // momento 1 del 1.2: la derivación se escribe desde los datos vigentes
    ARQ=clon(DATOS[ESCUELA.cod].arq); MEJORAS=clon(DATOS[ESCUELA.cod].mejoras||{}); S.expArq=[0,1,2,3,4,5,6,7]; S.rev={traza:false,smart:false};
    ARQ.forEach(c=>{ c.dec="derivada"; c.caps.forEach(k=>{ k.e="" }) }); }
  if(a.objetivos&&ESCUELA&&DATOS[ESCUELA.cod]&&DATOS[ESCUELA.cod].oe){          // paso 1.4: los objetivos se escriben desde los datos vigentes
    OE=clon(DATOS[ESCUELA.cod].oe); COH=clon(DATOS[ESCUELA.cod].coh||[]); }
  if(a.pidePlan){                                                                  // momento 2: se aplica el contraste real sobre las derivadas
    ARQ.forEach(c=>{ const m=c.contraste; if(!m) return; c.dec=m.dec; if(m.dec==="conservar"&&m.defFinal) c.def=m.defFinal; c.gat=m.gat||""; c.antes=m.antes||"";
      c.caps.forEach(k=>{ const mk=(m.caps||[]).find(x=>x.n===k.n); if(mk){ k.e=mk.e||""; k.de=mk.de||"" } }) }); }
  if(a.propone){ ESP.forEach(e=>{ e.selMan=false; calcular(e) }); S.researchClosed=false; S.decisionUpdated=true; }                 // momento 5: propuesta fresca de Génesys
  if(a.sal) S.salE[a.sal.k]=a.sal.e; (a.fue||[]).forEach(f=>S.fue.push({ic:f.ic,t:plantilla(f.t),n:plantilla(f.n||"")}));
  addHTML(`<div class="g-fila"><div>${a.resp.map(p=>`<p>${md(plantilla(p))}</p>`).join("")}</div></div>`);
  if(a.adj) addHTML(`<div class="g-adj"><div class="ic"></div><div><div class="t">${plantilla(a.adj.t)}</div><div class="m">${plantilla(a.adj.m)}</div></div></div>`);
  if(a.humano) addHTML(`<div class="humano">${a.humano}</div>`);
  S.acto++;
  if(ACTOS[S.acto]&&pasoDeActo(S.acto)!==pasoDeActo(S.acto-1)) S.snaps[pasoDeActo(S.acto)]=fotoPaso();   // empieza otro paso: foto para «Reiniciar»
  pintarCentro(a.vista);pintarPanel();botones();abajo();
  if(a.done===9) enfocar(["#blk-traza","#blk-smart","#b-guardar"]);   // momento 3: la vista baja hasta las compuertas y las señala
  // la propuesta se muestra sin mover la vista
  // el acta se abre sin mover la vista
  else if(a.done===3) revelarAprobadas();
 },pasos.length?total:(RAPIDO?150:900));
}
document.addEventListener("click",e=>{
 const b=e.target.closest("[data-fila]");if(!b)return;
 const d=document.getElementById("d"+b.dataset.fila);
 const ab=d.style.display==="none";
 if(ab){
  d.style.display="table-row";
  d.classList.remove("det-cierra");
  requestAnimationFrame(()=>d.classList.add("det-abriendo"));
 }else{
  d.classList.remove("det-abriendo");
  d.classList.add("det-cierra");
  setTimeout(()=>{d.style.display="none";d.classList.remove("det-cierra")},220);
 }
 b.textContent=(ab?"▾ ":"▸ ")+"Ver métricas de sustento";
});
function pintarPie(){
 const real=!(ESCUELA&&ESCUELA.demo);
 document.getElementById("g-inp").style.display="flex";
 document.getElementById("g-nota").style.display=real?"none":"flex";
 document.getElementById("g-real").style.display=real?"block":"none";
 document.getElementById("inp").placeholder=real?"Pregúnteme qué hacer en este momento…":"Da una instrucción a Génesys…";
}
function enviar(){
 const i=document.getElementById("inp"), t=i.value.trim(); if(!t)return; i.value="";
 if(ESCUELA&&ESCUELA.demo){ const b=document.getElementById("b-act"); if(b&&!b.disabled)b.click(); return }
 addHTML(`<div class="burbuja">${t.replace(/</g,"&lt;")}</div>`);
 const q=t.toLowerCase();
 if(/por qu|porqu|para qu/.test(q)) return responder("porque");
 if(/d[oó]nde|avance|progreso|voy|falta/.test(q)) return responder("mapa");
 guiar();
}
document.getElementById("env").onclick=enviar;
document.getElementById("inp").addEventListener("keydown",e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();enviar()}});

/* ════════════ COLUMNAS ════════════ */
const B=document.body,btnGen=document.getElementById("btn-gen"),btnExp=document.getElementById("btn-exp");
function sinc(){
 const p=B.classList.contains("p-off"),g=B.classList.contains("g-off");
 const bp=document.getElementById("btn-panel"); if(bp){ bp.classList.toggle("on",!p); bp.textContent=p?"▢ Expandir panel":"▣ Comprimir panel" }
 const x=p&&g;btnExp.textContent=x?"⤡ Contraer":"⤢ Expandir";btnExp.classList.toggle("on",x);
}
/* un solo panel: progreso, salidas y fuentes; cada sección se pliega por separado */
const alternarPanel=()=>{ B.classList.toggle("p-off"); sinc() };
document.getElementById("btn-panel").onclick=alternarPanel;
document.getElementById("btn-pan").onclick=alternarPanel;
document.getElementById("as-pan").onclick=alternarPanel;
document.querySelectorAll("[data-pu]").forEach(b=>b.onclick=()=>b.parentElement.classList.toggle("plegada"));
btnGen.onclick=()=>{B.classList.add("g-off");sinc()};
document.getElementById("as-gen").onclick=()=>{B.classList.remove("g-off");sinc()};
let previo=null;
btnExp.onclick=()=>{const x=B.classList.contains("p-off")&&B.classList.contains("g-off");
 if(x){B.classList.toggle("p-off",!!(previo&&previo[0]));B.classList.toggle("g-off",!!(previo&&previo[1]));previo=null}
 else{previo=[B.classList.contains("p-off"),B.classList.contains("g-off")];B.classList.add("p-off","g-off")}sinc()};
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&B.classList.contains("p-off")&&B.classList.contains("g-off"))btnExp.click()});
document.querySelectorAll(".panel .p-h").forEach(h=>h.onclick=()=>h.parentElement.classList.toggle("plegada"));
sinc();

/* ════════════ ARRANQUE ════════════ */
function saludo(){
 addHTML(`<div class="g-fila"><div>
  <p>Soy Génesys. Conduzco la <b>Fase 1</b> en seis pasos: especialidades validadas, definir competencias, matriz de correspondencia, definir objetivos, propuesta de valor y el Estudio Prospectivo de la Carrera Profesional.</p>
  <p>Una advertencia de alcance: aquí identifico <b>especialidades</b>, no funciones. La prueba es si el mercado la contrata como <b>puesto propio</b> o si sostiene un <b>negocio propio</b>; las funciones se identifican en la Fase 2.</p>
  <p>Cada paso cierra con un guardado que decide la escuela. Lo que marque queda registrado en este tablero y se conserva en este navegador.</p>
  <p><b>Antes de empezar:</b> adjunte el <b>plan de estudios vigente</b> y lo que tenga de normativa, modelo educativo u oferta comparada, en el panel <b>Fuentes</b>. El plan queda sellado hasta el paso 1.2: en el 1.1 barro el campo <b>a plan cerrado</b> y solo leo su página de identificación.</p></div></div>`);
}
{ const bv=document.getElementById("btn-valida"); if(bv) bv.onclick=()=>modoValidacion(!VALID); }
document.getElementById("vb-salir").onclick=()=>modoValidacion(false);
document.getElementById("vb-prev").onclick=()=>irMomento(S.done-1);
document.getElementById("vb-next").onclick=()=>irMomento(S.done+1);
document.getElementById("vb-sel").onchange=e=>irMomento(+e.target.value);
document.getElementById("sel-escuela").onchange=async e=>{
 if(VALID) modoValidacion(false);
 await guardar();
 await cargarEscuela(e.target.value);
 document.getElementById("chat").innerHTML=""; saludo(); botones();
};
const dlgDoc=document.getElementById("dlg-doc"), inpArch=document.getElementById("f-archivo");
document.getElementById("b-subir").onclick=()=>{
 if(!ESCUELA){avisar("Elija primero una escuela.","mal");return}
 if(!PUEDO){avisar("Está viendo el tablero en <b>solo lectura</b>.","mal");return}
 dlgDoc.showModal();
};
dlgDoc.addEventListener("close",()=>{
 if(dlgDoc.returnValue!=="elegir") return;
 inpArch.dataset.rol=document.getElementById("nd-rol").value;
 inpArch.value=""; inpArch.click();
});
inpArch.addEventListener("change",()=>{
 const a=inpArch.files&&inpArch.files[0]; if(!a) return;
 subirDoc(a,inpArch.dataset.rol||"otro");
});
const dlg=document.getElementById("dlg-escuela");
if(dlg) document.getElementById("nueva-escuela").onclick=()=>{
 ["ne-cod","ne-nom","ne-fac","ne-plan"].forEach(id=>document.getElementById(id).value="");
 dlg.showModal();
};
if(dlg) dlg.addEventListener("close",async()=>{
 if(dlg.returnValue!=="crear") return;
 const cod=(document.getElementById("ne-cod").value||"").trim().toUpperCase().replace(/[^A-Z0-9_-]/g,"");
 const nom=(document.getElementById("ne-nom").value||"").trim();
 if(!cod||!nom) return;
 if(ESCUELAS.some(x=>x.cod===cod)){ avisar("Ya existe una escuela con el código <b>"+cod+"</b>.","mal"); return }
 const meta=await crearEscuela(cod,nom,document.getElementById("ne-fac").value.trim(),
   document.getElementById("ne-plan").value.trim()||"Plan vigente");
 pintarSelector(); document.getElementById("sel-escuela").value=cod;
 await cargarEscuela(cod);
 document.getElementById("chat").innerHTML=""; saludo();
 addHTML(`<div class="g-fila"><div><p>Escuela <b>${nom}</b> creada y vacía. El primer momento del paso 1.1 es <b>barrer el campo profesional a plan cerrado</b>: sin leer el plan vigente, solo su página de identificación.</p></div></div>`);
 botones();
});

(async()=>{
 if(window.NUBE) try{ await NUBE.listo; }catch(_){}
 ESCUELAS=Object.values(DATOS).map(D=>Object.assign({done:0,demo:true,metodo:METODO},D.meta));
 ESCUELAS.forEach(m=>{ const b=NUBE.get(m.cod); if(b&&b.d&&b.d.paso) m.done=b.d.paso.done||0 });
 const q=new URLSearchParams(location.search).get("escuela");
 const cod=(q&&DATOS[q])?q:ESCUELAS[0].cod;
 pintarSelector();
 saludo();
 await cargarEscuela(cod); botones();
})();
