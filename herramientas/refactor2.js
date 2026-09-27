/* Refactor 2: guion de Génesys con plantillas por escuela, arranque estático y textos sin carrera fija. */
const fs=require("fs");
const path=require("path");
const APP=path.join(__dirname,"..","js","app.js");
let s=fs.readFileSync(APP,"utf8");
let n=0;
function rep(a,b,todo){ const c=s.split(a).length-1; if(c===0) throw new Error("NO HALLADO: "+a.slice(0,90)); if(c>1&&!todo) throw new Error("AMBIGUO("+c+"): "+a.slice(0,90)); s=s.split(a).join(b); n++; }
function repRe(re,b){ if(!re.test(s)) throw new Error("NO HALLADO RE: "+re); s=s.replace(re,b); n++; }

/* ── ACTOS: guion genérico con plantillas ── */
const ACTOS=`/* ════════════ GUION ════════════
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
  resp:["Lancé los **seis expertos simulados** —mercado laboral, prospectiva, regulación, empleador, tecnología y territorio— más el guardián metodológico. Cada uno califica por separado y no ve las respuestas de los demás: eso es lo que hace de esto un **Delphi**.",
        "Juzgan la **esencialidad de cada especialidad para el perfil de egreso**, no la capacidad de la escuela: por eso el panel va antes de declarar capacidad. El acta queda abajo: calificación de cada experto, mediana, I-CVI, CVR, acuerdo y RIC.",
        "**Importante:** este panel deja el estado en \`revisado\`. El \`validado\` lo otorga el panel de especialistas humanos aplicando el mismo instrumento."],
  adj:{t:"Acta del panel · ronda 1",m:"6 expertos · {N} especialidades"},
  vista:"tablero",done:2,delphi:true,abreActa:true,sal:{k:"esp",e:"revisado"},
  fue:[{ic:"PDF",t:"Norma sectorial y reglamento del colegio"},{ic:"WEB",t:"Oferta comparada",n:"{OFERTA}"}]},
 {boton:"Aprobar las especialidades a trabajar",sec:"Ver el criterio de aprobación",
  humano:"La primera decisión es de escuela: qué vale la pena seguir trabajando.",
  instruccion:"Apruebo las especialidades que se siguen trabajando.",
  resp:["**Primera decisión.** Con el potencial de mercado y el acta a la vista, quedan aprobadas las que el panel no descartó y tienen potencial suficiente: **{SEL} de {VAL}**. Las descartadas conservan su destino declarado y **no pasan a capacidad**.",
        "Recién ahora tiene sentido pedirle a la Dirección el dato caro: la capacidad instalada, y solo de estas."],
  vista:"tablero",done:3,sal:{k:"esp",e:"aprobadas"},fue:[]},
 {boton:"Registrar la capacidad instalada",sec:"Ver la plantilla antes de descargar",abreCap:true,cargaCap:true,
  instruccion:"Registro la capacidad instalada de la escuela para las aprobadas.",
  traza:["Cargando la declaración firmada por la Dirección de la Escuela","Comparando planes de estudio publicados de la región, el país y el extranjero (diferenciación)","Rastreando la habilitación normativa de cada especialidad aprobada","Cruzando potencial de mercado × capacidad instalada"],
  resp:["Recibida. Con los cinco indicadores por especialidad aprobada —docentes, campos de práctica con convenio, equipamiento, diferenciación y habilitación— ya puedo cruzar los dos ejes. Es un momento **opcional**: sin declaración la cartera se ordena solo por potencial de mercado.",
        "Queda registrado quién lo declaró y en qué fecha: es el dato que sostiene la decisión ante la Dirección."],
  adj:{t:"Ficha de Capacidad de Servicio",m:"5 indicadores × especialidades aprobadas"},
  vista:"tablero",done:4,sal:{k:"esp",e:"con capacidad"},
  fue:[{ic:"DOC",t:"Declaración de la Dirección",n:"firmada"}]},
 {boton:"Seleccionar y decidir el destino",sec:"Integrar dos especialidades",
  humano:"La segunda decisión es de escuela: qué entra al plan y con qué destino.",
  instruccion:"Confirmo la selección y el destino de cada especialidad.",
  resp:["**Segunda decisión.** Con los dos ejes cruzados: qué entra al plan, qué entra con plan de habilitación, qué va como mención y qué se revisa el próximo ciclo. Donde el panel dijo «no esencial», el cálculo no manda: manda el acta.",
        "Selección confirmada: **{SEL} especialidades** entran al plan. **Solo las seleccionadas pasan a definir competencias**; las demás quedan con destino declarado."],
  vista:"tablero",done:5,selOk:true,sal:{k:"esp",e:"seleccionado"},fue:[]},
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
 {boton:"Contrastar con el plan vigente",sec:"Ver el plan de estudios",
  instruccion:"Abre el plan de estudios y contrasta lo determinado con la formulación vigente (momento opcional).",
  traza:["Levantando el sello: abriendo el plan de estudios desde Fuentes","Extrayendo la formulación literal: competencias, capacidades y definiciones","Armando la matriz de contraste determinada × vigente","Resolviendo cada celda en una de cinco situaciones","Registrando el gatillo de cada cambio"],
  resp:["**Ahora se levanta el sello**: el {PLAN} tiene {PLANC} competencias de especialidad con {PLANK} capacidades. Dos lecturas independientes, una del campo y otra del plan, puestas frente a frente.",
        "Contraste: {G:7}",
        "La mínima intervención rige sobre la redacción, no sobre la estructura: donde la redacción vigente es buena, se conserva. Cada cambio deja su gatillo en «Por qué cambió»."],
  adj:{t:"Matriz de contraste",m:"{C} derivadas × {PLANC} vigentes · {REF} se reforman, {CON} se conserva"},
  vista:"arquitectura",done:8,comparar:true,sal:{k:"comp",e:"contrastado"},
  fue:[{ic:"DOC",t:"{PLAN}",n:"v1.0"}]},
 {boton:"Revisar la estructura y la trazabilidad",sec:"Ver los elementos de la estructura",
  instruccion:"Revisa la estructura de cada competencia y capacidad, y la trazabilidad con el plan.",
  resp:["Dos compuertas antes de guardar. **Estructura**: cada competencia declara verbo de acción, objeto o ámbito, condiciones o contexto, propósito y evidencia, y cada capacidad sus componentes; las filas que exigían ajuste ya están corregidas. **Trazabilidad**: cada competencia declara de qué especialidades se deriva y qué cambió respecto del plan.",
        "Se valida aquí y no después del cruce: si cambiara una competencia después de cruzar, habría que cruzar de nuevo."],
  vista:"arquitectura",done:9,smartOk:true,sal:{k:"comp",e:"revisado"},fue:[{ic:"DOC",t:"Escala de progresión UPeU"}]},
 {boton:"Guardar las competencias",sec:"Ajustar una definición",humano:"La definición es decisión de escuela.",
  instruccion:"Confirmo y guardo las competencias.",
  resp:["Guardadas. Las {C} competencias quedan congeladas con sus capacidades y su trazabilidad: {REF} se reforman y {CON} se conserva. **Paso 1.2 cerrado.**",
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
  REF:REFN,CON:CONN,OE:OE.length,DIF:DIF.length,DIFC:DIF.filter(d=>d.dec==="confirmado").length,
  DIFCOND:DIF.filter(d=>d.dec==="condicionado").length,DIFPAR:DIF.filter(d=>d.dec==="paridad").length,
  WPROP:palabras(VPC.prop),WT:palabras(VPC.t),WP:palabras(VPC.p),L:T.L??"—",SO:T.so!=null?pct(T.so):"—",AU:T.au!=null?pct(T.au):"—",
  C1:1+((VPC.cad&&VPC.cad.esp)||[]).length,AVISOS:GUION.avisos||"—",OFERTA:GUION.oferta||"—",CAMPO:(ESCUELA&&ESCUELA.campo)||"el campo",ESC:nombreEsc()};
 return t.replace(/\\{G:(\\d+)\\}/g,(m,k)=>GUION[k]||"").replace(/\\{([A-Z0-9]+)\\}/g,(m,k)=>V[k]!==undefined?V[k]:m);
}`;
repRe(/\/\* ════════════ GUION ════════════ \*\/\nconst ACTOS=\[[\s\S]*?\n\];\n/,ACTOS+"\n");

/* ejecutar(): traza animada + plantillas */
rep(`function ejecutar(cont){
 const a=ACTOS[S.acto],b=cont.querySelector("#b-act");
 b.disabled=true;b.textContent="Ejecutando…";
 setTimeout(()=>{
  cont.innerHTML=\`<div class="acc"><button class="b-hecho">\${a.boton}</button></div>\`;
  addHTML(\`<div class="burbuja">\${a.instruccion}</div>\`);
  addHTML(\`<div class="g-fila"><div>\${a.resp.map(p=>\`<p>\${md(p)}</p>\`).join("")}</div></div>\`);
  if(a.adj) addHTML(\`<div class="g-adj"><div class="ic"></div><div><div class="t">\${a.adj.t}</div><div class="m">\${a.adj.m}</div></div></div>\`);
  if(a.humano) addHTML(\`<div class="humano">\${a.humano}</div>\`);
  if(a.delphi)S.delphi=true; ["cruzado","redactado","objetivos","fichas","valor","informe","comparar"].forEach(k=>{if(a[k])S[k]=true});
  if(a.guardaInf)S.infVer="v1.0";
  if(a.cargaCap)cargarDeclaracion(); if(a.abreCap)S.capForm=true; if(a.abreActa)S.acta=true; if(a.selOk)S.selOk=true; if(a.arqOk)S.arqOk=true; if(a.smartOk)S.smartOk=true;
  S.done=a.done;
  if(a.sal) S.salE[a.sal.k]=a.sal.e; (a.fue||[]).forEach(f=>S.fue.push(f));
  S.acto++;
  pintarCentro(a.vista);pintarPanel();botones();abajo();
 },900);
}`,
`let RAPIDO=false;   // con ⚡ la traza de Génesys corre sin esperas
function ejecutar(cont){
 const a=ACTOS[S.acto],b=cont.querySelector("#b-act");
 b.disabled=true;b.textContent="Ejecutando…";
 addHTML(\`<div class="burbuja">\${a.instruccion}</div>\`);
 const pasos=(a.traza||[]).map(plantilla);
 const tr=pasos.length?addHTML(\`<div class="g-traza"><div class="g-traza-h"><span class="g-punto"></span>Génesys está trabajando…</div><ul>\${pasos.map(p=>\`<li>\${p}</li>\`).join("")}</ul></div>\`):null;
 const paso=RAPIDO?60:520;
 pasos.forEach((p,i)=>setTimeout(()=>{ const li=tr.querySelectorAll("li")[i]; if(li) li.classList.add("on"); if(i>0) tr.querySelectorAll("li")[i-1].classList.add("ok"); abajo() },paso*(i+1)));
 setTimeout(()=>{
  if(tr){ tr.querySelectorAll("li").forEach(li=>li.classList.add("ok")); tr.querySelector(".g-traza-h").innerHTML="✓ Listo"; tr.classList.add("hecho") }
  cont.innerHTML=\`<div class="acc"><button class="b-hecho">\${a.boton}</button></div>\`;
  // el estado se aplica antes de escribir la respuesta para que las plantillas lean los datos ya cargados
  if(a.delphi)S.delphi=true; ["cruzado","redactado","objetivos","fichas","valor","informe","comparar"].forEach(k=>{if(a[k])S[k]=true});
  if(a.guardaInf)S.infVer="v1.0";
  if(a.cargaCap)cargarDeclaracion(); if(a.abreCap)S.capForm=true; if(a.abreActa)S.acta=true; if(a.selOk)S.selOk=true; if(a.arqOk)S.arqOk=true; if(a.smartOk)S.smartOk=true;
  S.done=a.done;
  if(a.sal) S.salE[a.sal.k]=a.sal.e; (a.fue||[]).forEach(f=>S.fue.push({ic:f.ic,t:plantilla(f.t),n:plantilla(f.n||"")}));
  addHTML(\`<div class="g-fila"><div>\${a.resp.map(p=>\`<p>\${md(plantilla(p))}</p>\`).join("")}</div></div>\`);
  if(a.adj) addHTML(\`<div class="g-adj"><div class="ic"></div><div><div class="t">\${plantilla(a.adj.t)}</div><div class="m">\${plantilla(a.adj.m)}</div></div></div>\`);
  if(a.humano) addHTML(\`<div class="humano">\${a.humano}</div>\`);
  S.acto++;
  pintarCentro(a.vista);pintarPanel();botones();abajo();
 },pasos.length?paso*(pasos.length+1):(RAPIDO?150:900));
}`);

/* ── arranque estático ── */
repRe(/\(async\(\)=>\{\n BASE_NUT=semillaNUT\(\);[\s\S]*$/,
`(async()=>{
 ESCUELAS=Object.values(DATOS).map(D=>Object.assign({done:0,demo:true,metodo:METODO},D.meta));
 ESCUELAS.forEach(m=>{ try{ const b=JSON.parse(localStorage.getItem(CLAVE(m.cod))||"null"); if(b&&b.d&&b.d.paso) m.done=b.d.paso.done||0 }catch(err){} });
 const q=new URLSearchParams(location.search).get("escuela");
 const cod=(q&&DATOS[q])?q:ESCUELAS[0].cod;
 pintarSelector();
 saludo();
 await cargarEscuela(cod); botones();
})();
`);

/* ── textos fijos de Nutrición ── */
rep(`/* Nombre de la carrera para los documentos: la demostración se escribe como Nutrición Humana */`,`/* Nombre de la carrera para los documentos */`);
rep(`"Ver si cada especialidad seleccionada <b>ya está cubierta</b> por una competencia o una capacidad del plan. Lo que no encaja es lo único que obliga a cambiar algo.","Cruce de 7 especialidades"],`,
`"Ver si cada especialidad seleccionada <b>ya está cubierta</b> por una competencia o una capacidad del plan. Lo que no encaja es lo único que obliga a cambiar algo.","Cruce de las especialidades validadas"],`);
rep(`  comp:["Equivale a la competencia","La especialidad <b>ejecuta el proceso completo</b> que la competencia describe y produce la misma evidencia. Es el caso de la nutrición clínica frente a la competencia de atención nutricional: no sobra ni falta nada.","Qué hacer: la competencia se conserva o se precisa; la especialidad queda como su expresión principal en el mercado."],
  amb:["Ámbito de aplicación","Mismo proceso y misma evidencia, <b>distinto objeto de atención</b>. La nutrición pediátrica valora, diagnostica, trata y sigue igual que la clínica: cambia a quién atiende, no cómo. Por eso no abre una competencia nueva.","Qué hacer: se declara como ámbito dentro de su competencia y, si tiene demanda propia, se ofrece como mención o certificación."],
  cap:["Equivale a una capacidad","La especialidad <b>ejecuta solo un tramo</b> del proceso, pero con evidencia propia: recibe un encargo de otro profesional y devuelve un producto intermedio. La evaluación de composición corporal devuelve un informe, no un plan de atención.","Qué hacer: se incorpora como capacidad dentro de la competencia madre; si esa capacidad no existía, se crea."],
  trv:["Ámbito compartido","La especialidad <b>aparece en más de una competencia</b>. La nutrición pediátrica y materna se ejerce tanto en la atención individual del consultorio como en los programas del primer nivel: pertenece a dos procesos distintos.","Qué hacer: se declara en las dos competencias y se cuida que ninguna la reclame como exclusiva; en la Fase 2 sus funciones se repartirán."],`,
`  comp:["Equivale a la competencia","La especialidad <b>ejecuta el proceso completo</b> que la competencia describe y produce la misma evidencia. "+((GUION.leg||{}).comp||"No sobra ni falta nada."),"Qué hacer: la competencia se conserva o se precisa; la especialidad queda como su expresión principal en el mercado."],
  amb:["Ámbito de aplicación","Mismo proceso y misma evidencia, <b>distinto objeto de atención</b>. "+((GUION.leg||{}).amb||"Cambia sobre qué o para quién se ejerce, no cómo. Por eso no abre una competencia nueva."),"Qué hacer: se declara como ámbito dentro de su competencia y, si tiene demanda propia, se ofrece como mención o certificación."],
  cap:["Equivale a una capacidad","La especialidad <b>ejecuta solo un tramo</b> del proceso, pero con evidencia propia: recibe un encargo de otro profesional y devuelve un producto intermedio. "+((GUION.leg||{}).cap||""),"Qué hacer: se incorpora como capacidad dentro de la competencia madre; si esa capacidad no existía, se crea."],
  trv:["Ámbito compartido","La especialidad <b>aparece en más de una competencia</b>. "+((GUION.leg||{}).trv||"Pertenece a dos procesos distintos."),"Qué hacer: se declara en las dos competencias y se cuida que ninguna la reclame como exclusiva; en la Fase 2 sus funciones se repartirán."],`);
rep(` traza:["Revisar la trazabilidad con el Plan 2024","Trazabilidad",`,` traza:["Revisar la trazabilidad con el plan vigente","Trazabilidad",`);
rep(`      <th style="width:260px">Competencia de especialidad · Plan 2024</th><th style="width:110px">Destino</th>`,`      <th style="width:260px">Competencia de especialidad · \${META().plan||"plan vigente"}</th><th style="width:110px">Destino</th>`);
rep(`   <th style="width:260px">Competencia de especialidad · Plan 2024</th><th style="width:110px">Destino</th>`,`   <th style="width:260px">Competencia de especialidad · \${META().plan||"plan vigente"}</th><th style="width:110px">Destino</th>`);
rep(`<div class="cmp-h a">Plan 2024 · formulación vigente</div>`,`<div class="cmp-h a">\${META().plan||"Plan vigente"} · formulación vigente</div>`);
rep(`   <div class="ac-t">Trazabilidad con el Plan 2024 · se deriva de lo anterior, no se decide aquí</div>`,`   <div class="ac-t">Trazabilidad con el \${META().plan||"plan vigente"} · se deriva de lo anterior, no se decide aquí</div>`);
rep(`   <span>Al confirmar se escriben las cuatro competencias con sus capacidades, la trazabilidad y las especialidades asociadas en la ficha de la escuela.</span>`,`   <span>Al confirmar se escriben las \${ARQ.length} competencias con sus capacidades, la trazabilidad y las especialidades asociadas en la ficha de la escuela.</span>`);
rep(`   addHTML(\`<div class="burbuja">Confirmo la arquitectura: las cuatro competencias quedan guardadas.</div>\`);
   addHTML(\`<div class="g-fila"><div><p>Guardadas las <b>4 competencias</b> con sus capacidades, la trazabilidad y las especialidades asociadas. Paso 1.3 cerrado.</p><p>Sigue el paso <b>1.3 · Matriz de Correspondencia</b>: con las competencias congeladas, recién se cruzan contra las especialidades validadas.</p></div></div>\`)};`,
`   addHTML(\`<div class="burbuja">Confirmo la arquitectura: las \${ARQ.length} competencias quedan guardadas.</div>\`);
   addHTML(\`<div class="g-fila"><div><p>Guardadas las <b>\${ARQ.length} competencias</b> con sus capacidades, la trazabilidad y las especialidades asociadas. Paso 1.2 cerrado.</p><p>Sigue el paso <b>1.3 · Matriz de Correspondencia</b>: con las competencias congeladas, recién se cruzan contra las especialidades validadas.</p></div></div>\`)};`);
rep(`  <h1>Ficha de Capacidad de Servicio · Escuela Profesional de Nutrición Humana</h1>`,`  <h1>Ficha de Capacidad de Servicio · Escuela Profesional de \${nombreEsc()}</h1>`);
rep(`   : "Las cuatro competencias sostienen al menos un objetivo, y los cuatro objetivos se apoyan en al menos una competencia. La coherencia se cumple en ambos sentidos."}</div>`,
`   : \`Las \${ARQ.length} competencias sostienen al menos un objetivo, y los \${OE.length} objetivos se apoyan en al menos una competencia. La coherencia se cumple en ambos sentidos.\`}</div>`);
rep(`cuando las cuatro competencias ya están definidas y guardadas.`,`cuando las \${ARQ.length} competencias ya están definidas y guardadas.`);
rep(`   <button class="fi-b tot on" data-ficha="-1">▤ Documento completo · 4 fichas</button></div>`,`   <button class="fi-b tot on" data-ficha="-1">▤ Documento completo · \${ARQ.length} fichas</button></div>`);
rep(`   <button class="fi-b tot" data-ficha="-1">▤ Documento completo · 4 fichas</button></div>`,`   <button class="fi-b tot" data-ficha="-1">▤ Documento completo · \${ARQ.length} fichas</button></div>`);
rep(`   <span class="fa-n">Las cuatro fichas en un solo archivo, una por página</span>`,`   <span class="fa-n">Las \${ARQ.length} fichas en un solo archivo, una por página</span>`);
rep(` const idd=[["Programa curricular","Escuela Profesional de Nutrición Humana"],["Área formativa","Nutrición y Dietética"],
  ["Destinataria","Dra. María Miranda — Dirección de la Escuela Profesional"],["Presentado por","Dirección de Currículo"],
  ["Versión / fecha","v1.0 · Septiembre de 2026"],["Estado","Borrador para revisión"]];`,
` const idd=[["Programa curricular","Escuela Profesional de "+nombreEsc()],["Área formativa",META().area||nombreEsc()],
  ["Destinataria",(META().directora||"Dirección de la Escuela")+" — Dirección de la Escuela Profesional"],["Presentado por","Dirección de Currículo"],
  ["Versión / fecha","v1.0 · "+MES()],["Estado","Borrador para revisión"]];`);
rep(`     <tr><th>Origen</th><td>\${TRAZA[ci].d==="se reformula"?"Reformulada del Plan 2024":"Conservada del Plan 2024"}</td></tr>`,
`     <tr><th>Origen</th><td>\${TRAZA[ci]?(TRAZA[ci].d==="se reformula"?"Reformulada del "+(META().plan||"plan vigente"):"Conservada del "+(META().plan||"plan vigente")):"Nueva"}</td></tr>`);
rep(`   <tr><td>Revisa</td><td>Dra. María Miranda — Dirección de la Escuela Profesional</td><td></td><td></td></tr>`,`   <tr><td>Revisa</td><td>\${META().directora||"Dirección de la Escuela"} — Dirección de la Escuela Profesional</td><td></td><td></td></tr>`,true);
rep(`     <tr><th>Destinataria</th><td>Dra. María Miranda — Dirección de la Escuela Profesional</td></tr>`,`     <tr><th>Destinataria</th><td>\${META().directora||"Dirección de la Escuela"} — Dirección de la Escuela Profesional</td></tr>`);
rep(`     <tr><th>Versión / fecha</th><td>\${ver} · Septiembre de 2026</td></tr>`,`     <tr><th>Versión / fecha</th><td>\${ver} · \${MES()}</td></tr>`);
rep(`Determinar qué especialidades del campo profesional de la nutrición tienen demanda comprobada`,`Determinar qué especialidades del campo profesional de \${META().campo||nombreEsc().toLowerCase()} tienen demanda comprobada`);
rep(`Barrimos el mercado de la \${nombreEsc().toLowerCase()} <b>a plan cerrado</b>`,`Barrimos el mercado de \${META().campo||nombreEsc().toLowerCase()} <b>a plan cerrado</b>`);
rep(`    <p class="doc-p inf-nota">Las siete especialidades restantes quedan fuera del plan con destino declarado`,`    <p class="doc-p inf-nota">Las \${L.length-dentro.length} especialidades restantes quedan fuera del plan con destino declarado`);
rep(`     <tr><td><b>v1.0</b></td><td>20/09/2026</td><td>Primera emisión`,`     <tr><td><b>v1.0</b></td><td>\${new Date().toLocaleDateString("es-PE")}</td><td>Primera emisión`);
rep(` ["Fichas técnicas","las cuatro competencias sobre la plantilla P001"],`,` ["Fichas técnicas","una por competencia, sobre la plantilla P001"],`);
rep(`    Dos especialidades quedan bajo umbral y pasarían a una ronda 2 si la Dirección lo pide.</div>`,
`    \${(()=>{const b=ESP.filter(e=>!e.oculta).filter(e=>{const p=panelDe(e);return p.icvi<0.83||p.ac<75}).length; return b?b+(b===1?" especialidad queda":" especialidades quedan")+" bajo umbral y pasarían a una ronda 2 si la Dirección lo pide.":"Ninguna especialidad queda bajo umbral."})()}</div>`);
rep(` A.n=A.n+" + "+B.n.replace(/^Nutrición /,"").replace(/^Gestión de /,"");`,` A.n=A.n+" + "+B.n.replace(/^(Nutrición|Ingeniería|Gestión|Desarrollo) (de |del )?/,"");`);
rep(`function pintarSelector(){
 const o=document.getElementById("sel-escuela"); if(!o) return;
 o.innerHTML=ESCUELAS.map(x=>\`<option value="\${x.cod}" \${ESCUELA&&x.cod===ESCUELA.cod?"selected":""}>\${x.nombre}</option>\`).join("");
}`,
`function pintarSelector(){
 const o=document.getElementById("sel-escuela"); if(!o) return;
 o.innerHTML=ESCUELAS.map(x=>\`<option value="\${x.cod}" \${ESCUELA&&x.cod===ESCUELA.cod?"selected":""}>\${x.icono||""} \${x.nombre}</option>\`).join("");
}`);
/* el selector de escuela: guardar el avance antes de cambiar */
rep(`document.getElementById("sel-escuela").onchange=async e=>{
 if(VALID) modoValidacion(false);
 await cargarEscuela(e.target.value);
 document.getElementById("chat").innerHTML=""; saludo(); botones();
};`,
`document.getElementById("sel-escuela").onchange=async e=>{
 if(VALID) modoValidacion(false);
 await guardar();
 await cargarEscuela(e.target.value);
 document.getElementById("chat").innerHTML=""; saludo(); botones();
};`);
/* diálogo de escuela nueva: solo si existe en la página */
rep(`const dlg=document.getElementById("dlg-escuela");
document.getElementById("nueva-escuela").onclick=()=>{`,`const dlg=document.getElementById("dlg-escuela");
if(dlg) document.getElementById("nueva-escuela").onclick=()=>{`);
rep(`dlg.addEventListener("close",async()=>{
 if(dlg.returnValue!=="crear") return;`,`if(dlg) dlg.addEventListener("close",async()=>{
 if(dlg.returnValue!=="crear") return;`);
/* saludo: lo que el simulador es */
rep(`  <p>Cada paso cierra con un guardado que decide la escuela. Lo que marque queda registrado en este tablero.</p>`,
`  <p>Cada paso cierra con un guardado que decide la escuela. Lo que marque queda registrado en este tablero y se conserva en este navegador.</p>`);

fs.writeFileSync(APP,s);
console.log("reemplazos:",n);
