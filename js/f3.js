/* Motor de la Fase 3 · Plan de Estudio (consola3.html), portado del artefacto «Matriz del Plan de Estudios».
   Matriz del plan, malla curricular, especialidades, certificaciones y constructor de sílabo. */
/* ===================== ESCUELA ===================== */
/* Sistemas trae su plan dentro del motor; las demás escuelas lo traen en datos/f3-<cod>.js (window.PLANES3) */
const ESC3=(new URLSearchParams(location.search).get('escuela')||'SIS').toUpperCase();
const PLAN_ESC=ESC3==='SIS'?null:((window.PLANES3||{})[ESC3]||null);

/* ===================== CAPACIDADES (Fase 1 · solo lectura) ===================== */
const CAPS={};
function cap(id,name,conc,oper){CAPS[id]={id,name,conc,oper};return {id,label:name,cap:1}}

const BLOCKS=[
{id:'s',name:'Sílabo y recursos',short:'Sílabo',accent:'--bl-s',kind:'mgmt',groups:[
  {id:'s0',name:'Sílabo y recursos del curso',color:'--bl-s',cols:[{id:'sil',label:'Estado del sílabo',w:98},{id:'rec',label:'Recursos del curso',w:48}]}
]},
{id:'m',name:'Gestión académica del plan',short:'Gestión',accent:'--bl-m',kind:'mgmt',groups:[
  {id:'m1',name:'Créditos y tipo',color:'--bl-m',cols:[{id:'cr',label:'Créditos',w:36},{id:'dic',label:'Dictado',w:40},{id:'dicv',label:'Clase virtual',w:40},{id:'te',label:'Tipo de estudio',w:42},{id:'ta',label:'Tipo de asignatura',w:36},{id:'tip',label:'Tipificación',w:38}]},
  {id:'m2',name:'N° horas teóricas',color:'--bl-m',cols:[{id:'htp',label:'Presencial',w:32},{id:'hts',label:'Síncrona',w:32},{id:'hta',label:'Asíncrona',w:32},{id:'htt',label:'Total teóricas',w:38,tot:1}]},
  {id:'m3',name:'N° horas prácticas',color:'--bl-m',cols:[{id:'hpp',label:'Presencial',w:32},{id:'hps',label:'Síncrona',w:32},{id:'hpa',label:'Asíncrona',w:32},{id:'hpt',label:'Total prácticas',w:38,tot:1}]},
  {id:'m4',name:'Tipo de horas prácticas',color:'--bl-m',cols:[{id:'pl',label:'Laboratorio',w:32},{id:'pt',label:'Taller',w:32},{id:'pc',label:'Campo',w:32},{id:'pp',label:'Pre-profesional',w:32}]},
  {id:'m5',name:'Totales',color:'--bl-m',cols:[{id:'tt',label:'Horas totales',w:40,tot:1},{id:'pv',label:'% no presencial',w:40,tot:1}]}
]},
{id:'g',name:'Competencias generales',short:'Generales',accent:'--bl-g',kind:'cap',groups:[
 {id:'gi',name:'Investigación e innovación',color:'#1f6feb',cols:[
  cap('gi1','Formulación del problema','Delimita problemas de su campo con sustento teórico y pertinencia social.','Formula el problema, objetivos e hipótesis de un estudio de su especialidad.'),
  cap('gi2','Diseño de investigación','Selecciona el diseño metodológico coherente con el problema formulado.','Elabora la matriz de consistencia y define diseño, población y muestra.'),
  cap('gi3','Instrumentos','Construye y valida instrumentos de recolección de datos.','Diseña el instrumento, lo somete a juicio de expertos y calcula su confiabilidad.'),
  cap('gi4','Procesamiento de datos','Procesa evidencia empírica con técnicas estadísticas apropiadas.','Organiza, analiza e interpreta datos con software estadístico.'),
  cap('gi5','Informe y publicación','Comunica resultados según normas científicas y editoriales.','Redacta el informe en formato de artículo y lo prepara para publicación.'),
  cap('gi6','Innovación y solución de problemas','Genera soluciones novedosas y viables ante problemas reales.','Propone y prototipa una solución innovadora con criterio de valor.')]},
 {id:'ge',name:'Desarrollo espiritual · servicio y misión',color:'#16336e',cols:[
  cap('ge1','Conocimiento de las Sagradas Escrituras','Comprende el mensaje bíblico y su cosmovisión.','Interpreta pasajes bíblicos y los relaciona con su ejercicio profesional.'),
  cap('ge2','Meditación','Cultiva la reflexión y la devoción personal.','Practica la meditación diaria y registra su experiencia formativa.'),
  cap('ge3','Testificación','Comparte su fe con respeto y coherencia.','Participa en actividades de testificación en su entorno.'),
  cap('ge4','Liderazgo de servicio','Ejerce liderazgo orientado al servicio del otro.','Lidera proyectos de servicio con impacto en la comunidad.')]},
 {id:'gv',name:'Estilo de vida y sustentabilidad',color:'#2f9ad0',cols:[
  cap('gv1','Nutrición saludable','Valora la alimentación como base del bienestar integral.','Aplica principios de nutrición en su plan de vida personal.'),
  cap('gv2','Salud física','Asume el cuidado del cuerpo como responsabilidad personal.','Mantiene una rutina de actividad física y evalúa sus indicadores.'),
  cap('gv3','Desarrollo sostenible','Comprende la interdependencia entre desarrollo y ambiente.','Incorpora criterios de sostenibilidad en sus propuestas técnicas.')]},
 {id:'gp',name:'Pensamiento superior · carácter y aprendizaje autónomo',color:'#4348b5',cols:[
  cap('gp1','Firmeza de propósito','Orienta sus decisiones por un propósito definido.','Sostiene metas de mediano plazo pese a la dificultad.'),
  cap('gp2','Ejecución','Convierte planes en resultados verificables.','Cumple compromisos académicos en plazo y con calidad.'),
  cap('gp3','Dominio propio','Autorregula impulsos, tiempo y atención.','Gestiona su tiempo y evita la postergación en tareas complejas.'),
  cap('gp4','Mantener el esfuerzo','Persevera ante tareas extensas o adversas.','Sostiene el trabajo en proyectos de varias semanas.'),
  cap('gp5','Habilidades técnicas','Aprende de forma autónoma nuevas herramientas.','Domina una herramienta nueva sin instrucción formal y la documenta.'),
  cap('gp6','Salud socioemocional','Reconoce y regula sus emociones en el trabajo con otros.','Maneja el conflicto y pide ayuda oportunamente.')]},
 {id:'gc',name:'Comunicación eficaz',color:'#0e6fa8',cols:[
  cap('gc1','Comprensión oral y escrita','Interpreta textos y discursos técnicos y académicos.','Resume e infiere información de fuentes técnicas en español e inglés.'),
  cap('gc2','Producción oral y escrita','Produce textos claros, correctos y pertinentes.','Redacta informes técnicos con estructura y normativa.'),
  cap('gc3','Expresión verbal','Expone con claridad y adecuación al público.','Sustenta oralmente propuestas técnicas ante audiencias diversas.')]},
 {id:'gt',name:'Trabajo individual y en equipo',color:'#4f78e0',cols:[
  cap('gt1','Responsabilidad individual','Responde por sus compromisos y resultados.','Asume su rol y rinde cuentas del entregable asignado.'),
  cap('gt2','Organización','Planifica recursos, tareas y plazos.','Construye y mantiene el plan de trabajo del equipo.'),
  cap('gt3','Proactividad','Anticipa necesidades y actúa sin que se le indique.','Propone mejoras y asume tareas no asignadas cuando el equipo lo requiere.'),
  cap('gt4','Sinergia de equipo','Integra aportes diversos hacia un resultado común.','Colabora y retroalimenta en equipos multidisciplinarios.'),
  cap('gt5','Liderazgo en el equipo','Moviliza al equipo hacia la meta.','Conduce reuniones, decide y distribuye el trabajo del equipo.')]}
]},
{id:'d',name:'Competencias específicas esenciales',short:'Específicos',accent:'--bl-d',kind:'cap',groups:[
 {id:'ds',name:'Solución de problemas en ciencias de ingeniería',color:'#c2740a',cols:[
  cap('d1','Modelamiento','Representa situaciones reales mediante modelos matemáticos y computacionales.','Traduce un problema de ingeniería a un modelo formal con sus supuestos.'),
  cap('d2','Resolución','Resuelve el modelo con métodos exactos o aproximados.','Aplica métodos analíticos y numéricos y verifica la solución.'),
  cap('d3','Comunica su comprensión','Explica el razonamiento y los resultados del modelo.','Argumenta el procedimiento con lenguaje matemático.'),
  cap('d4','Inferencia','Extrae conclusiones válidas a partir de evidencia.','Contrasta hipótesis y estima parámetros con control del error.')]}
]},
{id:'e',name:'Competencias de especialidad',short:'Especialidad',accent:'--bl-e',kind:'cap',groups:[
 {id:'e1g',name:'Gestión e innovación de TI',color:'#0f8a5f',cols:[
  cap('e1','Gobierno e innovación de TI','Alinea las TI con la estrategia y el valor de la organización.','Formula políticas, marcos e indicadores de gobierno de TI.'),
  cap('e2','Gestión de proyectos','Dirige proyectos de TI con alcance, tiempo y costo controlados.','Planifica, ejecuta y cierra un proyecto de TI bajo estándar reconocido.'),
  cap('e3','Gestión de procesos','Modela y mejora procesos de negocio soportados por TI.','Levanta, modela en BPMN y rediseña procesos con indicadores.'),
  cap('e4','Gestión de sistemas de información','Gestiona el portafolio de sistemas y su arquitectura.','Evalúa, selecciona e integra sistemas de información.')]},
 {id:'e2g',name:'Ciencia de datos e inteligencia artificial',color:'#0a7e9c',cols:[
  cap('e5','Define requerimientos de inteligencia analítica','Traduce preguntas de negocio en requerimientos analíticos.','Define casos de uso, métricas y criterios de éxito analíticos.'),
  cap('e6','Construye dataset','Obtiene, integra y prepara datos confiables.','Construye pipelines de extracción, limpieza y modelado de datos.'),
  cap('e7','Genera modelos de inteligencia analítica','Entrena y evalúa modelos estadísticos y de aprendizaje automático.','Implementa, ajusta y valida modelos con métricas apropiadas.'),
  cap('e8','Analiza los datos y define estrategias','Convierte resultados analíticos en decisiones.','Comunica hallazgos y propone estrategias basadas en datos.')]},
 {id:'e3g',name:'Ingeniería de software',color:'#6d8b1a',cols:[
  cap('e9','Ingeniería de requerimientos','Obtiene, especifica y gestiona requerimientos de software.','Elicita, documenta y valida requerimientos con el interesado.'),
  cap('e10','Ingeniería de la información','Diseña estructuras de datos y persistencia del software.','Modela datos y diseña esquemas y su gobierno.'),
  cap('e11','Programación','Construye software mantenible con buenas prácticas.','Implementa, versiona y refactoriza código con pruebas.'),
  cap('e12','Calidad de software','Asegura la calidad del producto y del proceso.','Define y ejecuta planes de prueba y métricas de calidad.')]},
 {id:'e4g',name:'Infraestructura de TI',color:'#2f6f9f',cols:[
  cap('e13','Conectividad','Diseña y opera redes de comunicación de datos.','Configura, segmenta y monitorea infraestructura de red.'),
  cap('e14','Gestión de la seguridad de la información','Protege la información según riesgo y normativa.','Implementa controles, gestiona riesgos y audita seguridad.'),
  cap('e15','Implementación de centro de datos','Dimensiona y despliega plataformas de cómputo.','Implementa servicios en centro de datos propio o en la nube.')]}
]},
{id:'p',name:'Dependencias',short:'Dependencias',accent:'--bl-p',kind:'rel',groups:[
 {id:'p1',name:'Prerrequisitos y equivalencias',color:'--bl-p',cols:[{id:'pre',label:'Prerrequisito',w:136},{id:'eq',label:'Equivalencias',w:124}]}
]},
{id:'r',name:'Responsables y validación del sílabo',short:'Responsables',accent:'--bl-r',kind:'resp',groups:[
 {id:'r1',name:'Asignación docente',color:'--bl-r',cols:[{id:'plan',label:'Planifica el sílabo',w:112},{id:'val',label:'Valida (expertos)',w:96},{id:'recp',label:'Construye recursos',w:104},{id:'est',label:'Estado de validación',w:78}]}
]}
];
const RUBRIC=[['1','Nivel 1 — Inicial: reconoce y aplica con guía docente en situaciones estructuradas.'],
['2','Nivel 2 — Intermedio: aplica con autonomía en contextos conocidos de la especialidad.'],
['3','Nivel 3 — Avanzado: integra, decide y transfiere a contextos nuevos o inciertos.']];

/* ===================== PLAN 2025 ===================== */
// C(code,name,ciclo,cr,tipoEstudio,tipoAsig,horasTeoria,horasPractica,{pl,pt,pc,pp},[prereq],[equiv2022],{cap:nivel})
function C(code,name,ciclo,cr,te,ta,ht,hp,pr,pre,eq,caps){
  return {code,name,ciclo,cr,te,ta,ht,hp,pl:pr.pl||0,pt:pr.pt||0,pc:pr.pc||0,pp:pr.pp||0,
    pre:pre||[],eq:eq||[],caps:caps||{},of:true};
}
function X(code,name,cr,tip,caps,nota){ // programas / proyectos no oficiales del plan
  return {code,name,ciclo:99,cr:0,te:'X',ta:'N',ht:0,hp:0,pl:0,pt:0,pc:0,pp:0,pre:[],eq:[],caps:caps||{},of:false,tip,nota};
}
let COURSES=[
 C('ERE101','Formación Cristiana I',1,2,'G','O',32,0,{},[],['ERE101'],{ge1:1,ge2:1}),
 C('EGE101','Comunicación Oral y Escrita',1,3,'G','O',32,32,{pt:32},[],['EGE102'],{gc1:1,gc2:1,gc3:1}),
 C('EGE102','Matemática Básica',1,4,'G','O',48,32,{pt:32},[],['EGE104'],{d1:1,d2:1}),
 C('EGE103','Estilo de Vida Saludable',1,2,'G','O',32,16,{pt:16},[],[],{gv1:1,gv2:1}),
 C('SIS301','Introducción a la Ingeniería de Sistemas',1,3,'E','O',32,32,{pl:32},[],['SIS301'],{e1:1,e4:1,gt1:1}),
 C('SIS302','Algorítmica y Programación I',1,4,'E','O',32,64,{pl:64},[],['SIS302'],{e11:1,d1:1}),
 C('ERE102','Formación Cristiana II',2,2,'G','O',32,0,{},[],['ERE102'],{ge1:1,ge3:1}),
 C('EGE104','Cálculo Diferencial',2,4,'G','O',48,32,{pt:32},['EGE102'],['EGE105'],{d1:1,d2:2}),
 C('EGE105','Cultura, Ciudadanía y Sustentabilidad',2,2,'G','O',32,16,{pt:16},[],[],{gv3:1,gt3:1}),
 C('SIS303','Algorítmica y Programación II',2,4,'E','O',32,64,{pl:64},['SIS302'],['SIS303'],{e11:2,d2:1}),
 C('SIS304','Matemática Discreta',2,3,'E','O',32,32,{pt:32},['EGE102'],['SIS304'],{d1:2,d4:1}),
 C('SIS305','Arquitectura de Computadoras',2,4,'E','O',32,64,{pl:64},[],['SIS306'],{e13:1,e15:1}),
 C('ERE103','Formación Cristiana III',3,2,'G','O',32,0,{},[],['ERE103'],{ge2:2,ge4:1}),
 C('INV201','Metodología de la Investigación',3,3,'P','O',32,32,{pt:32},[],['INV201'],{gi1:1,gi2:1,gi5:1}),
 C('EGE106','Cálculo Integral',3,4,'G','O',48,32,{pt:32},['EGE104'],['EGE107'],{d2:2,d4:2}),
 C('SIS306','Estructura de Datos',3,4,'E','O',32,64,{pl:64},['SIS303'],['SIS307'],{e11:2,d1:2}),
 C('SIS307','Base de Datos I',3,4,'E','O',32,64,{pl:64},['SIS303'],['SIS308'],{e6:1,e10:1}),
 C('SIS308','Redes y Comunicación de Datos I',3,3,'E','O',32,32,{pl:32},['SIS305'],['SIS309'],{e13:2}),
 C('ERE104','Formación Cristiana IV',4,2,'G','O',32,0,{},[],['ERE104'],{ge3:2,gp3:1}),
 C('EGE107','Física para Ingeniería',4,4,'G','O',48,32,{pl:32},['EGE106'],['EGE108'],{d1:2,d2:2,d3:1}),
 C('SIS309','Programación Orientada a Objetos',4,4,'E','O',32,64,{pl:64},['SIS306'],['SIS310'],{e11:3,e12:1}),
 C('SIS310','Base de Datos II',4,3,'E','O',32,32,{pl:32},['SIS307'],['SIS311'],{e6:2,e10:2}),
 C('SIS311','Sistemas Operativos',4,4,'E','O',32,64,{pl:64},['SIS305'],['SIS312'],{e13:2,e15:1}),
 C('SIS312','Análisis y Diseño de Sistemas',4,3,'E','O',32,32,{pt:32},['SIS301'],['SIS313'],{e9:1,e4:2}),
 C('ERE105','Formación Cristiana V',5,2,'G','O',32,0,{},[],['ERE105'],{ge4:2,gp1:2}),
 C('INV202','Estadística Aplicada a la Investigación',5,4,'P','O',32,64,{pl:64},['INV201'],['INV202'],{gi3:2,gi4:2,d4:2}),
 C('SIS313','Ingeniería de Requerimientos',5,3,'E','O',32,32,{pt:32},['SIS312'],['SIS314'],{e9:2,gc1:2}),
 C('SIS314','Programación Web',5,4,'E','O',32,64,{pl:64},['SIS309'],['SIS315'],{e11:3,e10:2}),
 C('SIS315','Redes Informáticas II',5,4,'E','O',32,64,{pl:64},['SIS308'],['SIS320'],{e13:3,e14:1}),
 C('SIS316','Investigación de Operaciones',5,4,'E','O',48,32,{pt:32},['EGE106'],['SIS316'],{d2:3,d4:3}),
 C('ERE106','Formación Cristiana VI',6,2,'G','O',32,0,{},[],['ERE106'],{gp2:2,gp4:2}),
 C('SIS317','Ingeniería de Software I',6,4,'E','O',32,64,{pl:64},['SIS313'],['SIS317'],{e9:3,e12:2}),
 C('SIS318','Ingeniería Administrativa',6,3,'E','O',32,32,{pt:32},[],['SIS318'],{e2:1,e3:1,gt2:2}),
 C('SIS319','Gestión de Procesos',6,3,'E','O',32,32,{pt:32},[],['SIS319'],{e3:2,e4:2}),
 C('SIS320','Inteligencia de Negocios',6,4,'E','O',32,64,{pl:64},['SIS310'],['SIS327'],{e5:1,e8:2}),
 C('SIS321','Análisis Multivariado',6,3,'E','O',32,32,{pl:32},['INV202'],['SIS321'],{e7:2,gi4:3}),
 C('INV203','Investigación I — Proyecto de Tesis',6,3,'P','O',32,32,{pt:32},['INV202'],['INV203'],{gi1:3,gi2:3,gi5:3}),
 C('ERE107','Formación Cristiana VII',7,2,'G','O',32,0,{},[],['ERE107'],{ge2:3,gp6:2}),
 C('SIS322','Ingeniería de Software II',7,4,'E','O',32,64,{pl:64},['SIS317'],['SIS322'],{e9:3,e12:3}),
 C('SIS323','Virtualización de Servicios Tecnológicos',7,3,'E','O',32,32,{pl:32},['SIS311'],['SIS323'],{e15:2,e13:3}),
 C('SIS324','Pruebas y Despliegue del Software',7,3,'E','O',32,32,{pl:32},['SIS317'],['SIS324'],{e12:3}),
 C('SIS325','Minería de Datos',7,4,'E','O',32,64,{pl:64},['SIS321'],['SIS328'],{e6:3,e7:3}),
 C('SIS326','Gestión de Proyectos de TI',7,3,'E','O',32,32,{pt:32},['SIS318'],['SIS326'],{e2:2,gt4:2}),
 C('INV204','Investigación II — Tesis I',7,2,'P','O',32,32,{pt:32},['INV203'],['INV204'],{gi3:3,gi5:3}),
 C('ERE108','Formación Cristiana VIII',8,2,'G','O',32,0,{},[],['ERE108'],{ge1:3,ge3:3}),
 C('SIS327','Mejora de Procesos y Calidad Total',8,3,'E','O',32,32,{pt:32},['SIS319'],['SIS325'],{e3:3,e12:3,gt1:3}),
 C('SIS328','Teoría de Sistemas',8,3,'E','O',32,32,{pt:32},[],['SIS326'],{e1:2,e4:3}),
 C('SIS329','Inteligencia Artificial',8,4,'E','O',32,64,{pl:64},['SIS325'],['SIS330'],{e7:3,e8:3}),
 C('SIS330','Cloud Computing',8,3,'E','O',32,32,{pl:32},['SIS323'],['SIS329'],{e13:3,e14:2,e15:3}),
 C('SIS331','Seguridad de la Información',8,3,'E','O',32,32,{pl:32},['SIS315'],['SIS333'],{e14:3}),
 C('INV205','Investigación III — Tesis II',8,2,'P','O',32,32,{pt:32},['INV204'],['INV205'],{gi4:3,gi5:3}),
 C('ERE109','Formación Cristiana IX',9,2,'G','O',32,0,{},[],['ERE109'],{ge4:3,gp1:3}),
 C('SIS332','Big Data',9,4,'E','O',32,64,{pl:64},['SIS329'],['SIS331'],{e6:3,e7:3,e8:3}),
 C('SIS333','Gobierno de Tecnologías de Información',9,3,'E','O',32,32,{pt:32},['SIS328'],['SIS335'],{e1:3,e2:3}),
 C('SIS334','Emprendimiento e Innovación Tecnológica',9,3,'E','O',32,32,{pt:32},[],['SIS334'],{gi6:3,gt3:3,gt5:2}),
 C('SIS335','Auditoría de Sistemas',9,3,'E','O',32,32,{pt:32},['SIS331'],['SIS336'],{e14:3,e1:3}),
 C('SIS336','Electivo de Especialidad I',9,3,'E','L',32,32,{pl:32},[],[],{e5:3}),
 C('INV206','Investigación IV — Sustentación',9,2,'P','O',32,32,{pt:32},['INV205'],['INV206'],{gi5:3,gc2:3}),
 C('ERE110','Formación Cristiana X',10,2,'G','O',32,0,{},[],['ERE110'],{ge3:3,gp4:3}),
 C('SIS337','Práctica Pre-Profesional',10,6,'E','O',0,192,{pp:192},['SIS322'],['SIS337'],{gt4:3,gt5:3,e4:3}),
 C('SIS338','Arquitectura Empresarial',10,3,'E','O',32,32,{pt:32},['SIS333'],['SIS338'],{e1:3,e4:3}),
 C('SIS339','Electivo de Especialidad II',10,3,'E','L',32,32,{pl:32},[],[],{e11:3}),
 C('SIS340','Taller de Certificación Profesional',10,3,'E','O',32,32,{pl:32},[],[],{gp5:3,e12:3}),
 C('EGE108','Responsabilidad Social Universitaria',10,2,'G','O',32,16,{pc:16},[],[],{gv3:3,gt1:3}),
 X('PRG-LID','Programa de Liderazgo y Servicio (extracurricular)',0,'X',{ge4:2,gt5:3},'Programa institucional de servicio; evidencia liderazgo sin créditos en el plan.'),
 X('PRY-EDEN','Proyecto EDEN — carácter con propósito',0,'X',{gp1:3,gp3:3},'Proyecto formativo transversal del Modelo Educativo; se evalúa en el perfil.'),
 X('CER-ENG','Certificación de inglés B2 (requisito de egreso)',0,'X',{gc1:3,gc3:3},'Requisito de egreso acreditado por centro de idiomas; no otorga créditos.'),
 X('PRG-SEM','Semillero de Investigación',0,'X',{gi3:3,gi6:3},'Participación en semillero con producción de un artículo; evidencia investigación.')
];
if(PLAN_ESC){
  ['d','e'].forEach(bid=>{const b=BLOCKS.find(x=>x.id===bid);
    b.groups.forEach(g=>g.cols.forEach(col=>delete CAPS[col.id]));
    b.groups=PLAN_ESC['bloque'+bid.toUpperCase()](cap)});
  COURSES=PLAN_ESC.cursos(C,X);
}
const HITOS={1:'Explora',2:'Explora',3:'Construye',4:'Construye',5:'Especialízate',6:'Especialízate',
 7:'Experimenta',8:'Experimenta',9:'Profesionaliza',10:'Profesionaliza',99:'Perfil'};
const TE_LABEL={G:'General',P:'Específico (investigación)',E:'De especialidad',X:'No curricular'};
const TE_SHORT={G:'GEN',P:'ESP',E:'ESPD',X:'N/C'};
const TA_LABEL={O:'Obligatorio',L:'Electivo',N:'No aplica'};
const TIP={R:{ic:'',lab:'Asignatura regular'},S:{ic:'✦',lab:'Curso sello institucional'},
 C:{ic:'◎',lab:'Curso de certificación progresiva'},X:{ic:'◈',lab:'Programa o proyecto no curricular'}};
const DOCENTES=['María F. López','Carlos A. Rojas','Ana P. Gómez','Jorge L. Paredes','Rocío Salas',
 'Iván Quispe','Elena Tapia','Luis Mendoza','Paola Ríos','Hugo Ccahuana','Silvia Núñez','Diego Ramos'];
const SIL_ST={ap:'Aprobado',pr:'En proceso',pe:'Pendiente'};
const DIC={P:{lab:'Presencial',tag:'PRE'},V:{lab:'Virtual',tag:'VIR'},H:{lab:'Híbrido',tag:'HIB'}};
const DICV={S:'Sincrónico',A:'Asincrónico',SA:'Sincrónico y asincrónico','':'—'};
const RECMOD=[
 {g:'Unidades',items:[['P','Productos'],['E','Entregables (tareas)'],['R','Rúbricas'],['RAU','Resultados de aprendizaje de unidad']]},
 {g:'Sesiones',items:[['AEA','Actividad estructurada de aprendizaje'],['AAA','Actividades de aprendizaje autónomo'],['SD','Secuencia didáctica'],['C','Contenido'],['Q','Quiz / cuestionarios']]},
 {g:'Recursos',items:[['M','Motivación'],['GT','Guía teórica'],['GP','Guía práctica'],['GDAA','Guía de aprendizaje autónomo'],['GTYP','Guía teórica y práctica']]}];
const RECKEYS=RECMOD.flatMap(g=>g.items.map(i=>g.g+'|'+i[0]));
function recPct(c){const u=Object.keys(c.recs),t=u.length*RECKEYS.length;
  return t?Math.round(u.reduce((a,k)=>a+RECKEYS.filter(x=>c.recs[k][x]).length,0)/t*100):0}
const SIL_SH={ap:'Aprob.',pr:'Proceso',pe:'Pend.'};
const INSTRUM=['Rúbrica analítica','Lista de cotejo','Escala valorativa','Portafolio de evidencias','Examen de desempeño'];

/* semillas deterministas de gestión, responsables y perfil */
COURSES.forEach((c,i)=>{
  const pre3=c.code.slice(0,3);
  c.dic = c.of ? ((pre3==='ERE'||pre3==='INV')?'V':((c.code==='EGE103'||c.code==='EGE105')?'H':'P')) : 'V';
  c.dicv = c.dic==='P' ? '' : (pre3==='ERE'?'A':(pre3==='INV'?'SA':(c.dic==='H'?'S':'SA')));
  c.reqPres = (c.pl>0||c.pp>0);
  if(!c.tip) c.tip = pre3==='ERE' ? 'S' : ((c.code==='SIS340'||(PLAN_ESC&&c.code===PLAN_ESC.certCode))?'C':(c.code==='EGE108'?'S':'R'));
  c.sil = c.of ? ['ap','ap','pr','ap','pe','ap','pr','ap'][i%8] : 'pe';
  c.recs={};['U1','U2'].forEach((u,ui)=>{c.recs[u]={};
    RECKEYS.forEach((k,ki)=>{c.recs[u][k]=((i*7+ki*3+ui*5)%10) < (c.of?(c.sil==='ap'?9:c.sil==='pr'?6:3):4)})});
  c.rec = recPct(c);
  c.resp = {plan:DOCENTES[i%DOCENTES.length],
    val:[DOCENTES[(i+3)%DOCENTES.length]].concat(i%4===0?[DOCENTES[(i+7)%DOCENTES.length]]:[]),
    rec:DOCENTES[(i+5)%DOCENTES.length]};
  c.estVal = c.sil==='ap'?'Validado':(c.sil==='pr'?'En revisión':'Pendiente');
  const top=Object.keys(c.caps).sort((a,b)=>c.caps[b]-c.caps[a])[0];
  const evid = !c.of || (top && c.caps[top]>=3);
  c.perfil = {evid:!!evid, cap:top||'', uni:evid?(c.of?2:1):0, inst:evid?INSTRUM[i%INSTRUM.length]:'', sem:evid?(c.of?16:12):0};
  c.eqs = (c.eq.length?c.eq:[]).map(k=>({plan:'2022',code:k,name:c.name,cr:c.cr}));
  if(c.of && i%3===0) c.eqs.push({plan:'2019',code:pre3+(parseInt(c.code.replace(/\D/g,''))-100),
    name:c.name+' (denominación anterior)',cr:Math.max(2,c.cr-1)});
});

const LIMITS={total:200,G:50,P:18,E:140,crCicloMax:21,crCicloMin:18,horasSemMax:30,
 virt:{P:20,SP:70,AD:100},virtMin:{P:0,SP:21,AD:71}};
const CERTS=[
 {stage:'Explora',ciclos:'1 – 2',name:'Programador de Aplicaciones (Nivel I)',caps:['E11 · Programación N2','D1 · Modelamiento N2'],cursos:['SIS302','SIS303','SIS304']},
 {stage:'Construye',ciclos:'3 – 4',name:'Desarrollador de Bases de Datos',caps:['E6 · Construye dataset N2','E10 · Ingeniería de la información N2'],cursos:['SIS306','SIS307','SIS310']},
 {stage:'Especialízate',ciclos:'5 – 6',name:'Analista de Sistemas y Redes',caps:['E9 · Ingeniería de requerimientos N2','E13 · Conectividad N3'],cursos:['SIS313','SIS314','SIS315']},
 {stage:'Experimenta',ciclos:'7 – 8',name:'Científico de Datos Junior / Cloud Associate',caps:['E7 · Modelos analíticos N3','E15 · Centro de datos N3'],cursos:['SIS325','SIS329','SIS330']},
 {stage:'Profesionaliza',ciclos:'9 – 10',name:'Gobierno de TI y Arquitectura Empresarial',caps:['E1 · Gobierno e innovación de TI N3','E2 · Gestión de proyectos N3'],cursos:['SIS333','SIS335','SIS338']}
];
if(PLAN_ESC)CERTS.splice(0,CERTS.length,...PLAN_ESC.certs);
const SILABO_URL='https://claude.ai/artifact/6X7JoKG3tzLE7aKcVjtedR';

/* ===================== ESTADO ===================== */
const state={
  tab:'matriz',modalidad:'P',dens:'n',q:'',showCode:false,kpis:true,nameW:310,
  collapsed:{s:false,m:false,g:false,d:false,e:false,p:false,r:true},
  gcol:{},
  espMin:{},troncal:{},cuotas:{},espOpen:{},valorEsp:{},certCfg:{},
  horas:{tSync:50,pSync:30},
  plan:{code:'PE-IS-2025',vig:'2025-I – 2029-II'},
  version:{major:3,minor:0,rev:0,estado:'Aprobado'},
  versions:[
   {v:'v1.0',fecha:'12 mar 2024',autor:'Comisión de Currículo',estado:'Histórico',vig:'2024-I – 2024-II',res:'RCU-0231-2024-UPeU.pdf',
    items:['Creación del plan (10 ciclos, 200 créditos).']},
   {v:'v2.0',fecha:'20 ene 2025',autor:'Dirección de Escuela',estado:'Histórico',vig:'2025-I – 2025-II',res:'RCU-0058-2025-UPeU.pdf',
    items:['Recodificación de asignaturas según SINEACE.','Incorporación del bloque de competencias generales UPeU.']},
   {v:'v3.0',fecha:'05 mar 2026',autor:'Consejo de Facultad',estado:'Aprobado',vig:'2025-I – 2029-II',res:'RCU-0117-2026-UPeU.pdf',
    items:['Fusión de Redes I y II en la línea de Infraestructura de TI.','Mapeo completo de niveles de formación por capacidad.','Habilitación de la oferta en modalidad a distancia.']}
  ],
  pending:[],
  codeRule:{mode:'area',digits:3,sep:'',bases:{G:101,P:201,E:301}},
  mark:null
};
if(PLAN_ESC){state.plan={...PLAN_ESC.plan};state.version={...PLAN_ESC.version};state.versions=JSON.parse(JSON.stringify(PLAN_ESC.versions))}
const SCALE={c:.86,n:1,a:1.16};
const TEORD={G:0,P:1,E:2,X:3};
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const byCode=c=>COURSES.find(x=>x.code===c);
const dependents=code=>COURSES.filter(c=>c.pre.includes(code));
const oficiales=()=>COURSES.filter(c=>c.of);
function ordena(){COURSES.sort((a,b)=>a.ciclo-b.ciclo||TEORD[a.te]-TEORD[b.te]||a.code.localeCompare(b.code))}

/* ===================== HORAS POR MODALIDAD ===================== */
function esVirtual(c){
  if(!c.of)return{t:true,p:true};
  const m=state.modalidad;
  if(m==='P')return{t:c.dic!=='P',p:c.dic==='V'};
  if(m==='SP')return{t:true,p:!c.reqPres};
  return{t:true,p:!c.reqPres};
}
function dist(c){
  const v=esVirtual(c),R=state.horas,r={htp:0,hts:0,hta:0,hpp:0,hps:0,hpa:0};
  const ps=c.dicv==='S'?100:c.dicv==='A'?0:null;
  if(v.t){r.hts=Math.round(c.ht*(ps===null?R.tSync:ps)/100);r.hta=c.ht-r.hts}else r.htp=c.ht;
  if(v.p){r.hps=Math.round(c.hp*(ps===null?R.pSync:ps)/100);r.hpa=c.hp-r.hps}else r.hpp=c.hp;
  r.htt=c.ht;r.hpt=c.hp;r.tt=c.ht+c.hp;
  r.novp=r.hts+r.hta+r.hps+r.hpa;
  r.pv=r.tt?Math.round(r.novp/r.tt*100):0;
  return r;
}
function val(c,id){
  const d=dist(c);
  if(['htp','hts','hta','htt','hpp','hps','hpa','hpt','tt','pv'].includes(id))return d[id];
  if(id==='cr')return c.cr; if(['pl','pt','pc','pp'].includes(id))return c[id];
  return 0;
}
function sum(arr,f){return arr.reduce((a,c)=>a+f(c),0)}
function cycles(){
  const m=new Map();COURSES.forEach(c=>{if(!m.has(c.ciclo))m.set(c.ciclo,[]);m.get(c.ciclo).push(c)});
  return [...m.keys()].sort((a,b)=>a-b).map(n=>({n,rows:m.get(n)}));
}
function totals(){
  const of_=oficiales(),t={cr:sum(of_,c=>c.cr),G:0,P:0,E:0,tt:sum(of_,c=>c.ht+c.hp)};
  of_.forEach(c=>t[c.te]+=c.cr);
  t.crVirt=Math.round(sum(of_,c=>{const d=dist(c);return c.cr*(d.tt?d.novp/d.tt:0)})*10)/10;
  t.pv=t.cr?Math.round(t.crVirt/t.cr*100):0;
  return t;
}
function allCapIds(){const r=[];BLOCKS.filter(b=>b.kind==='cap').forEach(b=>b.groups.forEach(g=>g.cols.forEach(c=>r.push(c.id))));return r}
function capCourses(id){return COURSES.filter(c=>c.caps[id]).sort((a,b)=>a.ciclo-b.ciclo||a.code.localeCompare(b.code))}
function blockOfCap(id){return BLOCKS.find(b=>b.kind==='cap'&&b.groups.some(g=>g.cols.some(c=>c.id===id)))}
function groupOfCap(id){const b=blockOfCap(id);return b&&b.groups.find(g=>g.cols.some(c=>c.id===id))}
function gcolor(g,b){return g.color.startsWith('--')?`var(${g.color})`:g.color}
function validate(){
  const t=totals(),out=[];
  if(t.cr>LIMITS.total)out.push({lv:'crit',txt:`El plan tiene ${t.cr} créditos y excede el límite corporativo de ${LIMITS.total}.`});
  [['G','generales'],['P','específicos de investigación'],['E','de especialidad']].forEach(([k,n])=>{
    if(t[k]>LIMITS[k])out.push({lv:'crit',txt:`Los créditos ${n} (${t[k]}) exceden el máximo de ${LIMITS[k]}.`})});
  const mx=LIMITS.virt[state.modalidad],mn=LIMITS.virtMin[state.modalidad];
  if(t.pv>mx)out.push({lv:'crit',txt:`El ${t.pv}% de créditos no presenciales excede el tope de ${mx}% de la modalidad ${MODL[state.modalidad]} (R.C. 105-2020-SUNEDU/CD).`});
  if(t.pv<mn)out.push({lv:'crit',txt:`La modalidad ${MODL[state.modalidad]} exige más del ${mn-1}% de créditos no presenciales; el plan tiene ${t.pv}%.`});
  cycles().filter(c=>c.n!==99).forEach(({n,rows})=>{
    const cr=sum(rows,c=>c.cr);
    if(cr>LIMITS.crCicloMax)out.push({lv:'warn',txt:`Ciclo ${n}: ${cr} créditos, por encima del máximo de ${LIMITS.crCicloMax} por ciclo.`});
    if(cr<LIMITS.crCicloMin)out.push({lv:'warn',txt:`Ciclo ${n}: ${cr} créditos, por debajo del mínimo de ${LIMITS.crCicloMin} por ciclo.`})});
  COURSES.forEach(c=>c.pre.forEach(p=>{const q=byCode(p);
    if(q&&q.ciclo>=c.ciclo)out.push({lv:'crit',txt:`${c.code} está en el ciclo ${c.ciclo} y su prerrequisito ${p} en el ciclo ${q.ciclo}.`})}));
  const sin=allCapIds().filter(id=>!COURSES.some(c=>c.caps[id]));
  if(sin.length)out.push({lv:'warn',txt:`${sin.length} capacidad(es) sin asignatura que aporte: ${sin.map(i=>CAPS[i].name).join(', ')}.`});
  const sinN3=allCapIds().filter(id=>Math.max(0,...COURSES.map(c=>c.caps[id]||0))<3);
  if(sinN3.length)out.push({lv:'warn',txt:`${sinN3.length} capacidad(es) no alcanzan el nivel 3 al término del plan.`});
  const sinSil=oficiales().filter(c=>c.sil!=='ap').length;
  if(sinSil)out.push({lv:'warn',txt:`${sinSil} asignatura(s) con sílabo no aprobado.`});
  return out;
}
const MODL={P:'presencial',SP:'semipresencial',AD:'a distancia'};

/* ===================== VERSIONADO ===================== */
const KIND={mayor:{rank:3,lab:'mayor'},menor:{rank:2,lab:'menor'},revision:{rank:1,lab:'revisión'}};
function logChange(kind,txt){state.pending.push({kind,txt,ts:new Date()});renderVersionChip();if($('#floatHist').classList.contains('open'))renderHist()}
function baseVer(){const v=state.version;return `v${v.major}.${v.minor}${v.rev?'.'+v.rev:''}`}
function nextVersion(){
  const v=state.version;if(!state.pending.length)return baseVer();
  const top=Math.max(...state.pending.map(p=>KIND[p.kind].rank));
  if(top===3)return `v${v.major+1}.0`;
  if(top===2)return `v${v.major}.${v.minor+1}`;
  return `v${v.major}.${v.minor}.${v.rev+1}`;
}
function renderVersionChip(){
  const chip=$('#btnVer');
  if(state.pending.length){chip.textContent=`${nextVersion()} · Borrador (${state.pending.length})`;chip.className='chip ver warn'}
  else{chip.textContent=`${baseVer()} · ${state.version.estado}`;chip.className='chip ver ok'}
}
function commitVersion(){
  if(!state.pending.length){toast('No hay cambios pendientes por versionar.');return}
  const nv=nextVersion(),top=Math.max(...state.pending.map(p=>KIND[p.kind].rank));
  if(top===3){state.version.major++;state.version.minor=0;state.version.rev=0}
  else if(top===2){state.version.minor++;state.version.rev=0}else state.version.rev++;
  state.version.estado='En revisión';
  state.versions.push({v:nv,fecha:new Date().toLocaleDateString('es-PE',{day:'2-digit',month:'short',year:'numeric'}),
    autor:(window.NUBE&&NUBE.usuario&&NUBE.usuario.email)||'Gestión Curricular',estado:'En revisión',vig:state.plan.vig,res:null,
    items:state.pending.map(p=>p.txt)});
  state.pending=[];renderVersionChip();renderHist();
  toast(`Versión <b>${nv}</b> guardada. Carga su resolución cuando sea aprobada.`,'good');
}

/* ===================== COLUMNAS ===================== */
function buildCols(){
  const out=[];
  BLOCKS.forEach(b=>{
    if(state.collapsed[b.id]){out.push({t:'brail',b,gc:`var(${b.accent})`});return}
    b.groups.forEach(g=>{
      const gc=g.color.startsWith('--')?`var(${g.color})`:g.color;
      if(state.gcol[b.id+':'+g.id]){out.push({t:'grail',b,g,gc});return}
      g.cols.forEach((col,i)=>out.push({t:'col',b,g,col,gc,first:i===0}));
    });
  });
  return out;
}
function nCapsOf(b){return b.groups.reduce((a,g)=>a+g.cols.length,0)}
function matches(c){const q=state.q.trim().toLowerCase();if(!q)return true;
  return c.code.toLowerCase().includes(q)||c.name.toLowerCase().includes(q)}

/* ===================== RENDER MATRIZ ===================== */
function renderMatrix(){
  const s=SCALE[state.dens],W=n=>Math.round(n*s);
  const LH=Math.round(178*s);
  document.documentElement.style.setProperty('--capw',Math.round(28*s)+'px');
  document.documentElement.style.setProperty('--fs',(11.5*s).toFixed(1)+'px');
  document.documentElement.style.setProperty('--lh',LH+'px');
  const H1=30,H2=46,H3=LH,H4=24;
  const COLS=buildCols();
  const IDW=state.showCode?[W(76),state.nameW]:[state.nameW];
  const nId=IDW.length;

  let cg=IDW.map((w,i)=>`<col class="${i===IDW.length-1?'colname':''}" style="width:${w}px">`).join('');
  COLS.forEach(it=>{cg+=`<col style="width:${it.t==='col'?(it.col.cap?'var(--capw)':W(it.col.w)+'px'):'26px'}">`});

  /* thead */
  let r1=`<th class="sl idhead" rowspan="3" colspan="${nId}" style="left:0;top:0;height:${H1+H2+H3}px">
    <span class="colrsz" id="nameRsz" title="Arrastra para cambiar el ancho de la columna de cursos"></span>
    <div class="t"><div class="legend">
      <b>${esc(state.plan.code)} · ${esc(PLAN_ESC?PLAN_ESC.planNombre.replace('Plan de Estudios ','Plan '):'Plan 2025')} · ${esc(state.version.estado)}</b>
      <span class="lv">Niveles:
        <i style="background:color-mix(in srgb,var(--bl-e) 14%,var(--surface))">1</i>inicial
        <i style="background:color-mix(in srgb,var(--bl-e) 28%,var(--surface))">2</i>intermedio
        <i style="background:color-mix(in srgb,var(--bl-e) 46%,var(--surface));color:#fff">3</i>avanzado</span>
      <span>Clic en la celda asigna nivel · clic en el título de una competencia la reduce</span>
      <span>Arrastra ⠿ para mover de ciclo · arrastra el borde derecho ⟷ para ensanchar esta columna</span>
    </div></div></th>`;
  let r2='',r3='',r4='';
  BLOCKS.forEach(b=>{
    if(state.collapsed[b.id]){
      r1+=`<th class="rail" rowspan="4" style="--blk:var(${b.accent});top:0" data-expand="${b.id}"
        title="Expandir: ${esc(b.name)}"><div class="lab">▸ ${esc(b.short)} (${nCapsOf(b)})</div></th>`;return;
    }
    const items=COLS.filter(it=>it.b===b);
    const nCaps=b.kind==='cap'?nCapsOf(b):0;
    r1+=`<th class="band" colspan="${items.length}" style="--blk:var(${b.accent});top:0;height:${H1}px">
      <div class="bandlabel"><span class="t">${esc(b.name)}</span>
      <span class="c">${b.kind==='cap'?b.groups.length+' comp · '+nCaps+' cap':items.length+' col'}</span>
      <span class="sp"></span>
      ${b.kind==='cap'?`<button type="button" data-gall="${b.id}" title="Reducir todas las competencias de este bloque">⊟ comp.</button>`:''}
      <button type="button" data-collapse="${b.id}" title="Reducir el bloque">◂▸</button></div></th>`;
    b.groups.forEach(g=>{
      const gc=g.color.startsWith('--')?`var(${g.color})`:g.color, key=b.id+':'+g.id;
      if(state.gcol[key]){
        r2+=`<th class="rail" rowspan="3" style="--blk:${gc};top:${H1}px" data-gexpand="${key}"
          title="Expandir: ${esc(g.name)}"><div class="lab">▸ ${esc(g.name)} (${g.cols.length})</div></th>`;return;
      }
      r2+=`<th class="grp" colspan="${g.cols.length}" style="--gc:${gc};top:${H1}px;height:${H2}px">
        <div class="grplabel" data-gcol="${key}" title="Clic para reducir: ${esc(g.name)}">
          <span class="t">${esc(g.name)}</span><span class="x">⊟</span></div></th>`;
      g.cols.forEach((col,i)=>{
        const isCap=!!col.cap,w=isCap?'var(--capw)':W(col.w)+'px';
        r3+=`<th class="leaf ${isCap?'cap':''} ${i===0?'gs':''}" data-col="${col.id}" ${isCap?`data-cap="${col.id}"`:''}
          style="--gc:${gc};top:${H1+H2}px;height:${H3}px;width:${w}"
          title="${esc(isCap?CAPS[col.id].name+' — clic para ver su definición':col.label)}">
          <div class="lab">${esc(col.label)}</div>${isCap?`<span class="mk">${col.id.toUpperCase()}</span>`:''}</th>`;
        const n=isCap?COURSES.filter(c=>c.caps[col.id]).length:null;
        r4+=`<th class="cnt ${i===0?'gs':''} ${n===0?'zero':''}" style="--gc:${gc};top:${H1+H2+H3}px;height:${H4}px"
          title="${isCap?'Asignaturas que aportan a esta capacidad':''}">${isCap?(n||'0'):'—'}</th>`;
      });
    });
  });
  r4=`<th class="sl idcnt" style="left:0;top:${H1+H2+H3}px;height:${H4}px" colspan="${nId}">N.º de cursos que aportan →</th>`+r4;

  let html=`<colgroup>${cg}</colgroup><thead>
    <tr class="r1">${r1}</tr><tr class="r2">${r2}</tr><tr class="r3">${r3}</tr><tr class="r4">${r4}</tr></thead><tbody>`;

  /* filas */
  const leftOf=i=>IDW.slice(0,i).reduce((a,b)=>a+b,0);
  cycles().forEach(({n,rows})=>{
    const extra=n===99, cr=sum(rows,c=>c.cr);
    const over=!extra&&(cr>LIMITS.crCicloMax||cr<LIMITS.crCicloMin);
    html+=`<tr class="cyc ${extra?'extra':''}" data-cyc="${n}"><td class="sl" colspan="${nId}" style="left:0">
      <div class="cychead"><span class="cyn">${extra?'Programas y proyectos no curriculares':'Ciclo '+n}</span>
      <span class="hito">${HITOS[n]}</span>
      <span class="cr">${extra?rows.length+' prog. · sin créditos':cr+' cr · '+rows.length+' asig.'+(over?' ⚠':'')}</span></div></td>
      <td colspan="${COLS.length}"></td></tr>`;
    rows.forEach(c=>{
      const d=dist(c),hid=!matches(c);
      html+=`<tr class="crs t-${c.te} ${c.of?'':'noof'}" data-code="${c.code}" ${hid?'hidden':''}>`;
      if(state.showCode)html+=`<td class="sl code" style="left:0"><div class="c">
        <span class="grip" draggable="true" data-drag="${c.code}" title="Arrastrar para mover de ciclo">⠿</span>${c.code}</div></td>`;
      html+=`<td class="sl last name" style="left:${state.showCode?IDW[0]:0}px"><div class="namewrap">
        ${state.showCode?'':`<span class="grip" draggable="true" data-drag="${c.code}" title="Arrastrar para mover de ciclo">⠿</span>`}
        ${c.tip!=='R'?`<span class="tipico ${c.tip}" title="${esc(TIP[c.tip].lab)}">${TIP[c.tip].ic}</span>`:''}
        ${c.ta==='L'?`<span class="tipico L" title="Asignatura electiva">◇</span>`:''}
        <button type="button" class="nm" data-open="${c.code}" title="${esc(c.name)}">${esc(c.name)}</button></div></td>`;
      COLS.forEach(it=>{
        if(it.t!=='col'){html+=`<td style="background:color-mix(in srgb,${it.gc} 5%,var(--cell-bg));border-left:2px solid ${it.gc}"></td>`;return}
        const id=it.col.id,gs=it.first?'gs':'';
        if(it.b.kind==='mgmt'){
          if(id==='sil'){const st=c.sil;
            html+=`<td class="${gs}" style="--gc:${it.gc}"><button class="sil" data-sil="${c.code}" title="Sílabo ${SIL_ST[st]} — clic para abrirlo en una pestaña nueva">
              <span class="silchip ${st}">${st==='ap'?'✓':st==='pr'?'◔':'!'} ${SIL_ST[st]}</span></button></td>`;return}
          if(id==='rec'){html+=`<td class="${gs}" style="--gc:${it.gc}"><button class="recbtn" data-rec="${c.code}" title="Ver el detalle de recursos elaborados">
              <span class="recbar"><span>${c.rec}%</span><i><b class="${c.rec>=90?'ok':c.rec>=60?'md':'lo'}" style="width:${c.rec}%"></b></i></span></button></td>`;return}
          if(id==='dic'){html+=`<td class="mg ${gs}" style="--gc:${it.gc}">
              <span class="tag ${c.dic==='P'?'PR':c.dic==='H'?'HB':'VI'}" title="Dictado ${DIC[c.dic].lab}">${DIC[c.dic].tag}</span></td>`;return}
          if(id==='dicv'){html+=`<td class="mg ${gs} ${c.dicv?'':'zero'}" style="--gc:${it.gc}" title="${DICV[c.dicv]}">
              ${c.dicv?`<span class="tag SY">${c.dicv==='SA'?'SÍN+ASÍN':c.dicv==='S'?'SÍNC':'ASÍNC'}</span>`:'—'}</td>`;return}
          if(id==='te'){html+=`<td class="mg ${gs}" style="--gc:${it.gc}"><span class="tag ${c.te}" title="${TE_LABEL[c.te]}">${TE_SHORT[c.te]}</span></td>`;return}
          if(id==='ta'){html+=`<td class="mg ${gs}" style="--gc:${it.gc}"><span class="tag ${c.ta}" title="${TA_LABEL[c.ta]}">${c.ta}</span></td>`;return}
          if(id==='tip'){html+=`<td class="mg ${gs}" style="--gc:${it.gc}" title="${esc(TIP[c.tip].lab)}${c.ta==='L'?' · electiva':''}">${c.tip==='R'?(c.ta==='L'?'<span class="tipico L" style="margin:0 auto">◇</span>':'<span class="tag O">REG</span>'):`<span class="tipico ${c.tip}" style="margin:0 auto">${TIP[c.tip].ic}</span>`}</td>`;return}
          const v=val(c,id),zero=v===0;
          html+=`<td class="mg ${it.col.tot?'tot':''} ${zero?'zero':''} ${gs}" style="--gc:${it.gc}">${zero?'—':(id==='pv'?v+'%':v)}</td>`;
          return;
        }
        if(it.b.kind==='resp'){
          if(id==='est'){const k=c.estVal==='Validado'?'ap':c.estVal==='En revisión'?'pr':'pe';
            html+=`<td class="${gs}" style="--gc:${it.gc}"><div style="display:grid;place-items:center;height:100%">
              <span class="silchip ${k}">${c.estVal}</span></div></td>`;return}
          const who=id==='plan'?c.resp.plan:id==='recp'?c.resp.rec:c.resp.val.join(', ');
          const ini=w=>w.split(' ').map(x=>x[0]).join('').slice(0,2);
          html+=`<td class="resp ${gs}" style="--gc:${it.gc}" data-resp="${c.code}" title="${esc(who)} — clic para reasignar">
            <span class="av">${esc(ini(id==='val'?c.resp.val[0]:who))}</span>${esc(id==='val'?(c.resp.val.length>1?c.resp.val[0].split(' ').slice(-1)+' +'+(c.resp.val.length-1):c.resp.val[0]):who)}</td>`;
          return;
        }
        if(it.b.kind==='cap'){
          const lv=c.caps[id]||0;
          html+=`<td class="lv ${lv?'set n'+lv:''} ${gs}" style="--gc:${it.gc}" tabindex="0" data-cell="${c.code}|${id}" data-cap="${id}"
            aria-label="${esc(c.code)} — ${esc(CAPS[id].name)}${lv?' nivel '+lv:' sin aporte'}">${lv||''}</td>`;
          return;
        }
        if(it.b.kind==='perf'){
          const p=c.perfil;let v='—';
          if(id==='evid')v=p.evid?'<span class="ev">✓</span>':'—';
          else if(id==='ecap')v=p.evid&&p.cap?CAPS[p.cap].id.toUpperCase():'—';
          else if(id==='euni')v=p.evid?'U'+p.uni:'—';
          else if(id==='einst')v=p.evid?esc(p.inst.split(' ')[0]):'—';
          html+=`<td class="perf ${gs}" style="--gc:${it.gc}" data-perf="${c.code}"
            title="${p.evid?esc('Evidencia '+(p.cap?CAPS[p.cap].name:'')+' · unidad '+p.uni+' · '+p.inst+' · semana '+p.sem):'No evidencia el logro — clic para planificar'}">${v}</td>`;
          return;
        }
        if(it.b.kind==='rel'){
          if(id==='pre'){
            html+=`<td class="rel ${gs}" style="--gc:${it.gc}"><div class="relwrap">
              <button class="minib a" data-pre="${c.code}" title="Pintar los prerrequisitos de ${esc(c.code)}">◂ PRE</button>
              <button class="minib" data-post="${c.code}" title="Pintar las asignaturas que lo requieren">POST ▸</button>
              <span class="txt">${c.pre.length?esc(c.pre.join(' · ')):'<span class="none">—</span>'}</span></div></td>`;return}
          html+=`<td class="rel ${gs}" style="--gc:${it.gc}"><div class="relwrap">
            <button class="minib" data-eq="${c.code}" title="Ver equivalencias de planes anteriores">≡ ${c.eqs.length}</button>
            <span class="txt">${c.eqs.length?esc(c.eqs.map(e=>e.code).join(' · ')):'<span class="none">nueva</span>'}</span></div></td>`;
        }
      });
      html+=`</tr>`;
    });
    html+=`<tr class="sub" data-sub="${n}"><td class="sl" colspan="${nId}" style="left:0">
      <div class="lbl">${n===99?'Total no curricular':'Sub total ciclo '+n}</div></td>`;
    COLS.forEach(it=>{
      if(it.t!=='col'){html+=`<td class="${''}"></td>`;return}
      const id=it.col.id,gs=it.first?'gs':'';
      if(it.b.kind==='mgmt'&&!['sil','rec','dic','dicv','te','ta','tip'].includes(id))
        html+=`<td class="${gs}" style="--gc:${it.gc}">${id==='pv'?(sum(rows,c=>dist(c).tt)?Math.round(sum(rows,c=>dist(c).novp)/sum(rows,c=>dist(c).tt)*100)+'%':'—'):sum(rows,c=>val(c,id))}</td>`;
      else if(it.b.kind==='cap')html+=`<td class="cnt2 ${gs}" style="--gc:${it.gc}">${rows.filter(c=>c.caps[id]).length||''}</td>`;
      else if(it.b.kind==='perf'&&id==='evid')html+=`<td class="${gs}" style="--gc:${it.gc}">${rows.filter(c=>c.perfil.evid).length}</td>`;
      else html+=`<td class="${gs}" style="--gc:${it.gc}"></td>`;
    });
    html+=`</tr>`;
  });

  let f=`<tr><td class="sl" colspan="${nId}" style="left:0"><div class="lbl">Total plan · nivel alcanzado</div></td>`;
  COLS.forEach(it=>{
    if(it.t!=='col'){f+=`<td></td>`;return}
    const id=it.col.id,gs=it.first?'gs':'',of_=oficiales();
    if(it.b.kind==='mgmt'&&!['sil','rec','dic','dicv','te','ta','tip'].includes(id))
      f+=`<td class="${gs}" style="--gc:${it.gc}">${id==='pv'?totals().pv+'%':sum(of_,c=>val(c,id))}</td>`;
    else if(it.b.kind==='cap'){const mx=Math.max(0,...COURSES.map(c=>c.caps[id]||0));
      f+=`<td class="${mx>=3?'max':'gap'} ${gs}" style="--gc:${it.gc}" title="${mx?'Nivel máximo alcanzado: '+mx:'Sin aporte'}">${mx||'!'}</td>`}
    else if(it.b.kind==='perf'&&id==='evid')f+=`<td class="${gs}" style="--gc:${it.gc}">${COURSES.filter(c=>c.perfil.evid).length}</td>`;
    else f+=`<td class="${gs}" style="--gc:${it.gc}"></td>`;
  });
  html+=`</tbody><tfoot>${f}</tr></tfoot>`;
  $('#tbl').innerHTML=html;
  wireMatrix();wireResizer();renderKpis();renderBlockSeg();renderLegend();applyMark();if(state.q)applyFilter();else $('#qcount').textContent=COURSES.length+' cursos';
  $('#planNcursos').textContent=`${oficiales().length} asignaturas · ${COURSES.length-oficiales().length} programas`;
  $('#modLabel').textContent='Modalidad '+MODL[state.modalidad];
}
function renderLegend(){
  const items=[];
  BLOCKS.filter(b=>b.kind==='cap'&&!state.collapsed[b.id]).forEach(b=>b.groups.forEach(g=>{
    const gc=g.color.startsWith('--')?`var(${g.color})`:g.color;
    items.push(`<span class="sw" style="--c:${gc}"><i></i>${esc(g.name)}</span>`)}));
  $('#legendbar').innerHTML=`<span class="tblabel">Competencias</span>${items.join('')}
    <span style="margin-left:auto;display:flex;gap:10px">
    <span class="sw">✦ curso sello</span><span class="sw">◎ certificación</span><span class="sw">◇ electivo</span><span class="sw">◈ no curricular</span></span>`;
}
function renderBlockSeg(){
  $('#blockSeg').innerHTML=BLOCKS.map(b=>`<button data-toggle="${b.id}" aria-pressed="${!state.collapsed[b.id]}"
    title="${esc(b.name)}" style="--bk:var(${b.accent})">${esc(b.short)}</button>`).join('');
}
function renderKpis(){
  const t=totals(),v=validate();
  const card=(lab,val_,max,foot,unit)=>{
    const pct=Math.min(100,Math.round(val_/max*100)),cls=val_>max?'crit':pct>95?'warn':'';
    return `<div class="kpi"><span class="lab">${lab}</span><span class="val">${val_}${unit||''}<small>/ ${max}${unit||''}</small></span>
      <span class="meter"><i class="${cls}" style="width:${pct}%"></i></span>
      <span class="foot" ${val_>max?'style="color:var(--crit);font-weight:600"':''}>${foot}</span></div>`;
  };
  const alerts=v.filter(x=>x.lv==='crit').length,warns=v.filter(x=>x.lv==='warn').length;
  const mx=LIMITS.virt[state.modalidad],mn=LIMITS.virtMin[state.modalidad];
  const silAp=oficiales().filter(c=>c.sil==='ap').length;
  $('#kpis').innerHTML=
    card('Créditos del plan',t.cr,LIMITS.total,`${t.tt} horas · ${MODL[state.modalidad]}`)+
    card('Estudios generales',t.G,LIMITS.G,'Formación cristiana y generales')+
    card('Investigación',t.P,LIMITS.P,'Línea INV hasta sustentación')+
    card('Especialidad',t.E,LIMITS.E,`${BLOCKS.find(b=>b.id==='e').groups.length} competencias de especialidad`)+
    card('Créditos no presenciales',t.pv,mx,`Modalidad ${MODL[state.modalidad]}: ${mn?'>'+(mn-1)+'% y ':''}hasta ${mx}%`,'%')+
    card('Sílabos aprobados',silAp,oficiales().length,`${oficiales().length-silAp} pendientes o en proceso`)+
    `<div class="kpi act" id="kpiVal" role="button" tabindex="0"><span class="lab">Validación normativa</span>
      <span class="val" style="color:${alerts?'var(--crit)':warns?'var(--warn)':'var(--ok)'}">${alerts+warns||'OK'}
      <small>${alerts+warns?'observaciones':'sin observaciones'}</small></span>
      <span class="meter"><i class="${alerts?'crit':warns?'warn':''}" style="width:${alerts+warns?Math.min(100,alerts*40+warns*15):100}%"></i></span>
      <span class="foot">${alerts} crítica(s) · ${warns} advertencia(s) — ver detalle</span></div>`;
  $('#kpiVal').onclick=openValidacion;
  $('#kpiVal').onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openValidacion()}};
}

/* ===================== INTERACCIÓN ===================== */
let dragCode=null;
function wireMatrix(){
  const tbl=$('#tbl');
  tbl.querySelectorAll('[data-collapse]').forEach(b=>b.onclick=e=>{e.stopPropagation();state.collapsed[b.dataset.collapse]=true;saveUi();renderMatrix()});
  tbl.querySelectorAll('[data-expand]').forEach(th=>th.onclick=()=>{state.collapsed[th.dataset.expand]=false;saveUi();renderMatrix()});
  tbl.querySelectorAll('[data-gall]').forEach(b=>b.onclick=e=>{e.stopPropagation();
    const bid=b.dataset.gall,blk=BLOCKS.find(x=>x.id===bid);
    const anyOpen=blk.groups.some(g=>!state.gcol[bid+':'+g.id]);
    blk.groups.forEach(g=>state.gcol[bid+':'+g.id]=anyOpen);saveUi();renderMatrix()});
  tbl.querySelectorAll('[data-gcol]').forEach(el=>el.onclick=()=>{state.gcol[el.dataset.gcol]=true;saveUi();renderMatrix()});
  tbl.querySelectorAll('[data-gexpand]').forEach(el=>el.onclick=()=>{state.gcol[el.dataset.gexpand]=false;saveUi();renderMatrix()});
  tbl.querySelectorAll('th.leaf.cap').forEach(th=>{th.onclick=()=>openCapacidad(th.dataset.cap);
    th.onmouseenter=()=>hlCol(th.dataset.cap,true);th.onmouseleave=()=>hlCol(th.dataset.cap,false)});
  tbl.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>openProductos(b.dataset.open));
  tbl.querySelectorAll('[data-sil]').forEach(b=>b.onclick=()=>openSilaboFS(b.dataset.sil));
  tbl.querySelectorAll('[data-resp]').forEach(b=>b.onclick=()=>openResp(b.dataset.resp));
  tbl.querySelectorAll('[data-rec]').forEach(b=>b.onclick=()=>openRecursos(b.dataset.rec));
  tbl.querySelectorAll('[data-eq]').forEach(b=>b.onclick=()=>openEquiv(b.dataset.eq));
  tbl.querySelectorAll('[data-pre]').forEach(b=>b.onclick=()=>setMark(b.dataset.pre,'pre'));
  tbl.querySelectorAll('[data-post]').forEach(b=>b.onclick=()=>setMark(b.dataset.post,'post'));
  tbl.querySelectorAll('td.lv').forEach(td=>{
    td.onclick=e=>bumpLevel(td,e.shiftKey?-1:1);
    td.onkeydown=e=>{if(/^[0-5]$/.test(e.key)){e.preventDefault();setLevel(td,+e.key)}
      else if(e.key==='Backspace'||e.key==='Delete'){e.preventDefault();setLevel(td,0)}
      else if(e.key==='Enter'||e.key===' '){e.preventDefault();bumpLevel(td,1)}};
    td.onmouseenter=()=>hlCol(td.dataset.cap,true);td.onmouseleave=()=>hlCol(td.dataset.cap,false)});
  tbl.querySelectorAll('[data-drag]').forEach(h=>{
    h.ondragstart=e=>{dragCode=h.dataset.drag;h.closest('tr').classList.add('dragging');
      e.dataTransfer.setData('text/plain',dragCode);e.dataTransfer.effectAllowed='move'};
    h.ondragend=()=>{dragCode=null;tbl.querySelectorAll('.dragging,.dropok').forEach(x=>x.classList.remove('dragging','dropok'))}});
  tbl.querySelectorAll('tr.cyc,tr.crs,tr.sub').forEach(tr=>{
    const target=()=>tr.classList.contains('cyc')?+tr.dataset.cyc:tr.classList.contains('sub')?+tr.dataset.sub:byCode(tr.dataset.code).ciclo;
    tr.ondragover=e=>{if(!dragCode)return;e.preventDefault();
      tbl.querySelectorAll('.dropok').forEach(x=>x.classList.remove('dropok'));
      const h=tbl.querySelector(`tr.cyc[data-cyc="${target()}"]`);if(h)h.classList.add('dropok')};
    tr.ondrop=e=>{if(!dragCode)return;e.preventDefault();moveCourse(dragCode,target())}});
}
function wireResizer(){
  const h=$('#nameRsz');if(!h)return;
  const colEl=()=>$('#tbl colgroup .colname');
  let x0=0,w0=0,on=false;
  h.onpointerdown=e=>{e.preventDefault();on=true;h.classList.add('act');document.body.classList.add('rsz');
    h.setPointerCapture(e.pointerId);x0=e.clientX;w0=state.nameW};
  h.onpointermove=e=>{if(!on)return;
    const w=Math.max(150,Math.min(720,w0+(e.clientX-x0)));state.nameW=Math.round(w);
    const c=colEl();if(c)c.style.width=state.nameW+'px'};
  h.onpointerup=()=>{if(!on)return;on=false;h.classList.remove('act');document.body.classList.remove('rsz');
    saveUi();renderMatrix()};
  h.ondblclick=()=>{state.nameW=310;saveUi();renderMatrix()};
}
function hlCol(cap,on){if(!cap)return;document.querySelectorAll(`[data-cap="${cap}"]`).forEach(el=>el.classList.toggle('colhl',on))}
function bumpLevel(td,dir){const [code,cap]=td.dataset.cell.split('|'),c=byCode(code);
  const cur=c.caps[cap]||0;let nx=cur+dir;if(nx>3)nx=0;if(nx<0)nx=3;setLevel(td,nx)}
function setLevel(td,lv){
  const [code,cap]=td.dataset.cell.split('|'),c=byCode(code),prev=c.caps[cap]||0;
  if(prev===lv)return;
  if(lv)c.caps[cap]=lv;else delete c.caps[cap];
  td.className='lv '+(lv?'set n'+lv:'')+(td.classList.contains('gs')?' gs':'');
  td.textContent=lv||'';
  logChange('revision',`${code}: nivel en «${CAPS[cap].name}» ${prev||'—'} → ${lv||'—'}.`);
  renderMatrix();
  if(drawerType==='cap'&&drawerKey===cap)openCapacidad(cap);
}
function moveCourse(code,target){
  const c=byCode(code);if(!c||c.ciclo===target)return;
  if(!c.of||target===99){toast('Los programas no curriculares no se ubican en ciclos del plan.','bad');return}
  const bp=c.pre.map(byCode).filter(p=>p&&p.ciclo>=target);
  if(bp.length){toast(`No se puede mover <b>${code}</b> al ciclo ${target}: su prerrequisito <b>${bp[0].code}</b> está en el ciclo ${bp[0].ciclo}.`,'bad');return}
  const bq=dependents(code).filter(d=>d.ciclo<=target);
  if(bq.length){toast(`No se puede mover <b>${code}</b> al ciclo ${target}: <b>${bq[0].code}</b> lo tiene como prerrequisito y está en el ciclo ${bq[0].ciclo}.`,'bad');return}
  const from=c.ciclo;c.ciclo=target;ordena();
  logChange('menor',`${code} «${c.name}»: movido del ciclo ${from} al ciclo ${target}.`);
  renderMatrix();
  const tr=$(`tr.crs[data-code="${code}"]`);if(tr){tr.classList.add('hit');tr.scrollIntoView({block:'center',behavior:'smooth'})}
  toast(`<b>${code}</b> movido al ciclo ${target}. Secuencia verificada.`,'good');
}
function setMark(code,kind){
  const c=byCode(code);
  state.mark=state.mark&&state.mark.code===code&&state.mark.kind===kind?null:{code,kind};
  applyMark();
  if(state.mark){
    const n=kind==='pre'?c.pre.length:dependents(code).length;
    $('#markTxt').innerHTML=kind==='pre'
      ?`<b>${code}</b>: ${n} prerrequisito(s) resaltado(s)`
      :`<b>${code}</b>: ${n} asignatura(s) que lo requieren`;
  }
}
function applyMark(){
  document.querySelectorAll('tr.crs').forEach(tr=>tr.classList.remove('mark-pre','mark-post','mark-self'));
  const bar=$('#markbar');
  if(!state.mark){bar.classList.remove('on');return}
  bar.classList.add('on');
  const {code,kind}=state.mark,c=byCode(code);if(!c)return;
  const self=$(`tr.crs[data-code="${code}"]`);if(self)self.classList.add('mark-self');
  const set=kind==='pre'?c.pre:dependents(code).map(d=>d.code);
  set.forEach(k=>{const tr=$(`tr.crs[data-code="${k}"]`);if(tr)tr.classList.add(kind==='pre'?'mark-pre':'mark-post')});
}
$('#markClear').onclick=()=>{state.mark=null;applyMark()};

/* ===================== DRAWER ===================== */
let drawerType=null,drawerKey=null;
function openDrawer(eyebrow,title,body,foot,type,key){
  drawerType=type||null;drawerKey=key||null;
  $('#drEyebrow').innerHTML=eyebrow;$('#drTitle').innerHTML=title;$('#drBody').innerHTML=body;
  const f=$('#drFoot');if(foot){f.innerHTML=foot;f.hidden=false}else{f.hidden=true;f.innerHTML=''}
  $('#drawer').classList.add('open');$('#drawer').setAttribute('aria-hidden','false');$('#scrim').classList.add('on');
}
function closeDrawer(){$('#drawer').classList.remove('open');$('#drawer').setAttribute('aria-hidden','true');
  $('#scrim').classList.remove('on');drawerType=null;drawerKey=null}
$('#drClose').onclick=closeDrawer;$('#scrim').onclick=closeDrawer;
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeDrawer();$('#floatHist').classList.remove('open');$('#silfs').classList.remove('open')}});

function openCapacidad(id){
  const cp=CAPS[id],b=blockOfCap(id),g=groupOfCap(id),gc=g.color.startsWith('--')?`var(${g.color})`:g.color;
  const list=capCourses(id),mx=Math.max(0,...list.map(c=>c.caps[id]));
  const rows=list.map(c=>`<div class="frow"><span class="mono">${c.of?c.code:'◈'}</span><span class="nm">${esc(c.name)}</span>
    <span class="mono" style="flex:none">${c.of?'C'+c.ciclo:'N/C'}</span><span class="lvb">${c.caps[id]}</span></div>`).join('')
    ||`<div class="frow" style="color:var(--crit)">Ninguna asignatura aporta a esta capacidad.</div>`;
  openDrawer(`${esc(b.name)} · <span style="color:${gc};font-weight:700">${esc(g.name)}</span> · <span class="mono">${id.toUpperCase()}</span>`,
    esc(cp.name),
    `<div style="--gc:${gc};display:flex;flex-direction:column;gap:13px">
      <div class="lockrow">🔒 Definición establecida en <b style="margin-inline:3px">Fase 1 · Competencias</b> y validada por juicio de expertos: solo lectura en el plan.</div>
      <div class="def"><span class="t">Definición conceptual</span><p>${esc(cp.conc)}</p></div>
      <div class="def"><span class="t">Definición operacional</span><p>${esc(cp.oper)}</p></div>
      <div><span class="tlab">Niveles de formación</span><div style="margin-top:6px">
        ${RUBRIC.map(([n,t])=>`<div class="rub"><span class="n">${n}</span><span>${esc(t)}</span></div>`).join('')}</div></div>
      <div><div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:6px">
        <span class="tlab">Asignaturas que aportan (${list.length})</span>
        <span class="chip ${mx>=3?'ok':'warn'}">Nivel máximo: ${mx||'—'}</span></div>
        <div class="flist">${rows}</div></div>
      <div class="alert ${mx>=3?'ok':'warn'}">${mx>=3?'La capacidad cierra el plan en nivel 3 (avanzado), como exige el perfil de egreso.'
        :'La capacidad no alcanza el nivel 3 al término del plan: revisa la progresión en los ciclos finales.'}</div></div>`,
    null,'cap',id);
}
function openCurso(code){
  const c=byCode(code),deps=dependents(code),d=dist(c);
  const caps=Object.keys(c.caps).sort((a,b)=>c.caps[b]-c.caps[a]).map(id=>{
    const g=groupOfCap(id),gc=g.color.startsWith('--')?`var(${g.color})`:g.color;
    return `<div class="frow" style="--gc:${gc}"><span class="mono">${id.toUpperCase()}</span>
      <span class="nm">${esc(CAPS[id].name)}</span><span class="lvb">${c.caps[id]}</span></div>`}).join('')
    ||`<div class="frow" style="color:var(--warn)">Sin aportes registrados.</div>`;
  const cycOpts=[...new Set(oficiales().map(x=>x.ciclo))].sort((a,b)=>a-b)
    .map(n=>`<option value="${n}" ${n===c.ciclo?'selected':''}>Ciclo ${n}</option>`).join('');
  const preOpts=oficiales().filter(x=>x.code!==code&&x.ciclo<c.ciclo&&!c.pre.includes(x.code))
    .map(x=>`<option value="${x.code}">${x.code} — ${esc(x.name)} (C${x.ciclo})</option>`).join('');
  openDrawer(`${c.of?'Asignatura · Ciclo '+c.ciclo+' · '+esc(HITOS[c.ciclo]):'Programa no curricular'} · ${esc(TIP[c.tip].lab)}`,
   `<span class="mono" style="font-size:14px;color:var(--muted)">${c.code}</span><br>${esc(c.name)}`,
   `<div style="display:flex;flex-direction:column;gap:13px">
     ${c.of?'':`<div class="alert warn">${esc(c.nota||'')}</div>`}
     <div class="grid3">
      <div class="field"><label>Código</label><input id="fCode" value="${c.code}" class="mono"></div>
      <div class="field"><label>Créditos</label><input id="fCr" type="number" min="0" max="8" value="${c.cr}"></div>
      <div class="field"><label>Ciclo</label><select id="fCiclo" ${c.of?'':'disabled'}>${cycOpts}</select></div></div>
     <div class="field"><label>Nombre</label><input id="fName" value="${esc(c.name)}"></div>
     <div class="grid3">
      <div class="field"><label>Tipo de estudio</label><select id="fTe">
        ${Object.entries(TE_LABEL).map(([k,v])=>`<option value="${k}" ${k===c.te?'selected':''}>${v}</option>`).join('')}</select></div>
      <div class="field"><label>Tipo de asignatura</label><select id="fTa">
        ${Object.entries(TA_LABEL).map(([k,v])=>`<option value="${k}" ${k===c.ta?'selected':''}>${v}</option>`).join('')}</select></div>
      <div class="field"><label>Tipificación</label><select id="fTip">
        ${Object.entries(TIP).map(([k,v])=>`<option value="${k}" ${k===c.tip?'selected':''}>${v.ic} ${v.lab}</option>`).join('')}</select></div></div>
     <div class="grid2">
      <div class="field"><label>Dictado</label><select id="fDic">
        ${Object.entries(DIC).map(([k,v])=>`<option value="${k}" ${k===c.dic?'selected':''}>${v.lab}</option>`).join('')}</select></div>
      <div class="field"><label>Clase virtual</label><select id="fDicv">
        <option value="" ${c.dicv===''?'selected':''}>— no aplica</option>
        ${['S','A','SA'].map(k=>`<option value="${k}" ${k===c.dicv?'selected':''}>${DICV[k]}</option>`).join('')}</select></div>
      <div class="field"><label>Requiere presencialidad</label><select id="fReq">
        <option value="1" ${c.reqPres?'selected':''}>Sí — laboratorio o práctica</option>
        <option value="0" ${!c.reqPres?'selected':''}>No</option></select></div></div>
     <div><span class="tlab">Horas en modalidad ${MODL[state.modalidad]}</span>
      <table class="mini" style="margin-top:5px"><tr><th>Tipo</th><th style="text-align:right">Presencial</th>
      <th style="text-align:right">Síncrona</th><th style="text-align:right">Asíncrona</th><th style="text-align:right">Total</th></tr>
      <tr><td>Teóricas</td><td class="r">${d.htp}</td><td class="r">${d.hts}</td><td class="r">${d.hta}</td><td class="r"><b>${d.htt}</b></td></tr>
      <tr><td>Prácticas</td><td class="r">${d.hpp}</td><td class="r">${d.hps}</td><td class="r">${d.hpa}</td><td class="r"><b>${d.hpt}</b></td></tr>
      <tr><td>Distribución práctica</td><td class="r" colspan="4">Lab ${c.pl} · Taller ${c.pt} · Campo ${c.pc} · Pre-prof. ${c.pp}</td></tr>
      <tr><td><b>Totales</b></td><td class="r" colspan="4"><b>${d.tt}</b> h · ${(d.tt/16).toFixed(1)} h/sem · <b>${d.pv}%</b> no presencial</td></tr></table></div>
     <div class="field"><label>Prerrequisitos</label>
       <div class="chips" id="preChips">${c.pre.length?c.pre.map(p=>`<span class="pill">${p}<button type="button" data-rmpre="${p}">✕</button></span>`).join(''):'<span style="color:var(--muted);font-size:12px">Sin prerrequisitos</span>'}</div>
       <select id="fAddPre"><option value="">+ Agregar prerrequisito de ciclo anterior…</option>${preOpts}</select></div>
     <div><span class="tlab">Equivalencias</span><div class="flist" style="margin-top:5px">
       ${c.eqs.length?c.eqs.map(e=>`<div class="frow"><span class="mono">Plan ${e.plan}</span><span class="nm">${esc(e.name)}</span><span class="mono">${e.code} · ${e.cr} cr</span></div>`).join('')
        :'<div class="frow" style="color:var(--muted)">Asignatura nueva, sin equivalencia.</div>'}</div></div>
     <div><span class="tlab">Requisito de otras asignaturas</span><div class="flist" style="margin-top:5px">
       ${deps.length?deps.map(x=>`<div class="frow"><span class="mono">${x.code}</span><span class="nm">${esc(x.name)}</span><span class="mono">C${x.ciclo}</span></div>`).join(''):'<div class="frow" style="color:var(--muted)">Ninguna</div>'}</div></div>
     <div><span class="tlab">Aporte a capacidades (${Object.keys(c.caps).length})</span><div class="flist" style="margin-top:5px">${caps}</div></div>
   </div>`,
   `<button type="button" class="btn" id="fPerf">Evidencia del perfil</button>
    <button type="button" class="btn" id="fSil">Abrir sílabo</button>
    <button type="button" class="btn" id="fCancel">Cancelar</button>
    <button type="button" class="btn primary" id="fSave">Aplicar cambios</button>`,'curso',code);
  $('#fCancel').onclick=closeDrawer;
  $('#fSil').onclick=()=>{closeDrawer();openSilaboFS(code)};
  $('#fPerf').onclick=()=>openPerfil(code);
  $('#fAddPre').onchange=e=>{const v=e.target.value;if(!v)return;c.pre.push(v);
    logChange('menor',`${c.code}: se agregó el prerrequisito ${v}.`);renderMatrix();openCurso(code);toast(`Prerrequisito <b>${v}</b> agregado.`,'good')};
  $('#preChips').querySelectorAll('[data-rmpre]').forEach(b=>b.onclick=()=>{const p=b.dataset.rmpre;
    c.pre=c.pre.filter(x=>x!==p);logChange('menor',`${c.code}: se retiró el prerrequisito ${p}.`);renderMatrix();openCurso(code)});
  $('#fSave').onclick=()=>{
    const nc=$('#fCode').value.trim().toUpperCase(),nn=$('#fName').value.trim(),ncr=+$('#fCr').value,
      nte=$('#fTe').value,nta=$('#fTa').value,ntip=$('#fTip').value,ndic=$('#fDic').value,nreq=$('#fReq').value==='1',ncy=+$('#fCiclo').value;
    if(!nc||!nn){toast('El código y el nombre son obligatorios.','bad');return}
    if(nc!==c.code&&byCode(nc)){toast(`El código <b>${nc}</b> ya existe.`,'bad');return}
    const ch=[];
    if(nc!==c.code){COURSES.forEach(x=>x.pre=x.pre.map(p=>p===c.code?nc:p));ch.push(['mayor',`Recodificación: ${c.code} → ${nc}.`]);c.code=nc}
    if(nn!==c.name){ch.push(['mayor',`${c.code}: nombre «${c.name}» → «${nn}».`]);c.name=nn}
    if(ncr!==c.cr){ch.push(['mayor',`${c.code}: créditos ${c.cr} → ${ncr}.`]);c.cr=ncr}
    if(nte!==c.te){ch.push(['revision',`${c.code}: tipo de estudio → ${TE_LABEL[nte]}.`]);c.te=nte}
    if(nta!==c.ta){ch.push(['revision',`${c.code}: tipo de asignatura → ${TA_LABEL[nta]}.`]);c.ta=nta}
    if(ntip!==c.tip){ch.push(['revision',`${c.code}: tipificación → ${TIP[ntip].lab}.`]);c.tip=ntip}
    if(ndic!==c.dic){ch.push(['revision',`${c.code}: dictado → ${DIC[ndic].lab}.`]);c.dic=ndic}
    const ndicv=$('#fDicv').value;
    if(ndicv!==c.dicv){ch.push(['revision',`${c.code}: clase virtual → ${DICV[ndicv]}.`]);c.dicv=ndicv}
    if(nreq!==c.reqPres){ch.push(['revision',`${c.code}: requiere presencialidad → ${nreq?'sí':'no'}.`]);c.reqPres=nreq}
    ch.forEach(([k,t])=>logChange(k,t));
    if(c.of&&ncy!==c.ciclo)moveCourse(c.code,ncy);else renderMatrix();
    closeDrawer();
    if(ch.length)toast(`${ch.length} cambio(s) aplicados. Versión propuesta: <b>${nextVersion()}</b>.`,'good');
  };
}
function openSilabo(code){
  const c=byCode(code);
  const u=`${SILABO_URL}?codigo=${encodeURIComponent(c.code)}&curso=${encodeURIComponent(c.name)}&ciclo=${c.ciclo}&cr=${c.cr}&mod=${encodeURIComponent(MODL[state.modalidad])}`;
  window.open(u,'_blank','noopener');
  toast(`Sílabo de <b>${c.code}</b> abierto en una pestaña nueva.`,'good');
}
function openResp(code){
  const c=byCode(code);
  const opts=w=>DOCENTES.map(d=>`<option value="${esc(d)}" ${d===w?'selected':''}>${esc(d)}</option>`).join('');
  openDrawer(`Responsables del sílabo · ${esc(c.code)}`,esc(c.name),
   `<div style="display:flex;flex-direction:column;gap:13px">
     <div class="lockrow">Un sílabo lo planifica un docente responsable, lo validan uno o varios expertos y sus recursos los construye un responsable asignado.</div>
     <div class="field"><label>Planifica el sílabo</label><select id="rPlan">${opts(c.resp.plan)}</select></div>
     <div class="field"><label>Construye los recursos</label><select id="rRec">${opts(c.resp.rec)}</select></div>
     <div class="field"><label>Valida (uno o varios expertos)</label>
       <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;margin-top:3px">
       ${DOCENTES.map(d=>`<label class="ck"><input type="checkbox" value="${esc(d)}" ${c.resp.val.includes(d)?'checked':''}>${esc(d)}</label>`).join('')}</div></div>
     <div class="field"><label>Estado de validación</label><select id="rEst">
       ${['Pendiente','En revisión','Validado','Observado'].map(x=>`<option ${x===c.estVal?'selected':''}>${x}</option>`).join('')}</select></div>
     <div class="field"><label>Avance de recursos (%)</label><input id="rPct" type="number" min="0" max="100" value="${c.rec}"></div>
     <div class="field"><label>Estado del sílabo</label><select id="rSil">
       ${Object.entries(SIL_ST).map(([k,v])=>`<option value="${k}" ${k===c.sil?'selected':''}>${v}</option>`).join('')}</select></div>
   </div>`,
   `<button type="button" class="btn" onclick="closeDrawer()">Cancelar</button>
    <button type="button" class="btn primary" id="rSave">Guardar asignación</button>`,'resp',code);
  $('#rSave').onclick=()=>{
    const val=[...$('#drBody').querySelectorAll('input[type=checkbox]:checked')].map(i=>i.value);
    if(!val.length){toast('Asigna al menos un validador.','bad');return}
    c.resp.plan=$('#rPlan').value;c.resp.rec=$('#rRec').value;c.resp.val=val;
    c.estVal=$('#rEst').value;c.rec=+$('#rPct').value;c.sil=$('#rSil').value;
    logChange('revision',`${c.code}: responsables del sílabo actualizados (planifica ${c.resp.plan}; valida ${val.join(', ')}).`);
    renderMatrix();closeDrawer();toast(`Asignación guardada para <b>${c.code}</b>.`,'good');
  };
}
function openPerfil(code){
  const c=byCode(code),p=c.perfil;
  const capOpts=Object.keys(c.caps).length?Object.keys(c.caps).map(id=>`<option value="${id}" ${id===p.cap?'selected':''}>${id.toUpperCase()} — ${esc(CAPS[id].name)} (N${c.caps[id]})</option>`).join('')
    :allCapIds().map(id=>`<option value="${id}" ${id===p.cap?'selected':''}>${id.toUpperCase()} — ${esc(CAPS[id].name)}</option>`).join('');
  openDrawer(`Evaluación del perfil de egreso · ${esc(c.code)}`,esc(c.name),
   `<div style="display:flex;flex-direction:column;gap:13px">
     <div class="lockrow">Marca si esta asignatura o programa <b style="margin-inline:3px">evidencia el logro</b> de una capacidad del perfil y planifica en qué unidad se recoge la evidencia.</div>
     <label class="ck"><input type="checkbox" id="pEv" ${p.evid?'checked':''}> Evidencia el logro de la competencia</label>
     <div class="field"><label>Capacidad evidenciada</label><select id="pCap">${capOpts}</select></div>
     <div class="grid3">
       <div class="field"><label>Unidad</label><select id="pUni">${[1,2,3,4].map(n=>`<option value="${n}" ${n===p.uni?'selected':''}>Unidad ${n}</option>`).join('')}</select></div>
       <div class="field"><label>Semana</label><input id="pSem" type="number" min="1" max="16" value="${p.sem||8}"></div>
       <div class="field"><label>Nivel esperado</label><select id="pNiv">${[1,2,3].map(n=>`<option ${n===(c.caps[p.cap]||3)?'selected':''}>${n}</option>`).join('')}</select></div></div>
     <div class="field"><label>Instrumento</label><select id="pInst">${INSTRUM.map(x=>`<option ${x===p.inst?'selected':''}>${x}</option>`).join('')}</select></div>
     <div class="field"><label>Producto o evidencia</label><textarea id="pProd" rows="3">${esc(p.prod||'Producto integrador de la unidad, evaluado con el instrumento seleccionado y cargado al portafolio del estudiante.')}</textarea></div>
     <div class="alert ok">La evidencia planificada alimenta la campaña de evaluación del perfil de egreso y el Centro del Perfil 360.</div>
   </div>`,
   `<button type="button" class="btn" onclick="closeDrawer()">Cancelar</button>
    <button type="button" class="btn primary" id="pSave">Guardar planificación</button>`,'perf',code);
  $('#pSave').onclick=()=>{
    c.perfil={evid:$('#pEv').checked,cap:$('#pCap').value,uni:+$('#pUni').value,inst:$('#pInst').value,
      sem:+$('#pSem').value,prod:$('#pProd').value};
    logChange('revision',`${c.code}: evidencia del perfil ${c.perfil.evid?'planificada en la unidad '+c.perfil.uni+' con '+c.perfil.inst:'desactivada'}.`);
    renderMatrix();closeDrawer();toast(`Planificación de evidencia guardada para <b>${c.code}</b>.`,'good');
  };
}
function openEquiv(code){
  const c=byCode(code);
  const rows=c.eqs.length?c.eqs.map(e=>`<tr><td><b class="mono">Plan ${e.plan}</b></td><td class="mono">${e.code}</td>
      <td>${esc(e.name)}</td><td class="r">${e.cr}</td></tr>`).join('')
    :`<tr><td colspan="4" style="color:var(--muted)">Asignatura nueva del plan 2025: no tiene equivalencia en planes anteriores.</td></tr>`;
  openDrawer(`Equivalencias de planes anteriores · ${esc(c.code)}`,esc(c.name),
   `<div style="display:flex;flex-direction:column;gap:12px">
     <table class="mini"><tr><th>Plan</th><th>Código</th><th>Asignatura</th><th style="text-align:right">Cr.</th></tr>${rows}</table>
     <div class="alert ok">La equivalencia habilita la convalidación automática para estudiantes que migran de los planes 2019 y 2022.</div>
     <div class="field"><label>Agregar equivalencia</label>
       <div class="grid3"><select id="eqPlan"><option>2022</option><option>2019</option></select>
       <input id="eqCode" placeholder="Código"><input id="eqCr" type="number" placeholder="Cr." min="1" max="8"></div>
       <input id="eqName" placeholder="Nombre de la asignatura equivalente" style="margin-top:6px"></div>
   </div>`,
   `<button type="button" class="btn" onclick="closeDrawer()">Cerrar</button>
    <button type="button" class="btn primary" id="eqAdd">Agregar</button>`,'eq',code);
  $('#eqAdd').onclick=()=>{
    const p=$('#eqPlan').value,k=$('#eqCode').value.trim().toUpperCase(),n=$('#eqName').value.trim(),cr=+$('#eqCr').value||c.cr;
    if(!k||!n){toast('Indica el código y el nombre de la asignatura equivalente.','bad');return}
    c.eqs.push({plan:p,code:k,name:n,cr});
    logChange('menor',`${c.code}: se agregó la equivalencia ${k} del plan ${p}.`);
    renderMatrix();openEquiv(code);toast('Equivalencia agregada.','good');
  };
}
function openRecursos(code){
  const c=byCode(code);
  $('#dlg').classList.remove('big');
  const draw=()=>{
    const pct=recPct(c);
    $('#dlgTitle').textContent='Recursos elaborados · '+c.code;
    $('#dlgSub').textContent=`${c.name} — ${pct}% completado · responsable: ${c.resp.rec}`;
    $('#dlgBody').innerHTML=`
     <div class="alert ${pct>=90?'ok':pct>=60?'warn':'crit'}">Avance total <b>${pct}%</b>. Marca cada componente conforme el docente lo carga en el aula virtual.</div>
     <div class="recgrid">${Object.keys(c.recs).map(u=>{
       const done=RECKEYS.filter(k=>c.recs[u][k]).length;
       return `<div class="recunit"><h4>Unidad ${u.slice(1)}<span class="chip ${done===RECKEYS.length?'ok':'warn'}">${done}/${RECKEYS.length}</span></h4>
        <div class="recgr">${RECMOD.map(g=>`<div class="gt">${g.g}</div>
          ${g.items.map(([k,lab])=>{const key=g.g+'|'+k,on=c.recs[u][key];
            return `<label class="recit ${on?'done':'pend'}"><input type="checkbox" ${on?'checked':''} data-rk="${u}::${key}">
              <span class="k">${k}</span><span class="n">${esc(lab)}</span></label>`}).join('')}`).join('')}</div></div>`}).join('')}</div>`;
    $('#dlgBody').querySelectorAll('[data-rk]').forEach(inp=>inp.onchange=()=>{
      const [u,key]=inp.dataset.rk.split('::');c.recs[u][key]=inp.checked;c.rec=recPct(c);
      logChange('revision',`${c.code}: recurso ${key.split('|')[1]} de la unidad ${u.slice(1)} ${inp.checked?'marcado como elaborado':'desmarcado'}.`);
      renderMatrix();draw();
    });
  };
  draw();
  $('#dlgFoot').innerHTML=`<button class="btn" value="ok">Cerrar</button>
    <button type="button" class="btn primary" id="recSil">Abrir el sílabo</button>`;
  $('#recSil').onclick=()=>{$('#dlg').close();openSilaboFS(code)};
  $('#dlg').showModal();
}
function openValidacion(){
  $('#dlg').classList.remove('big');
  const v=validate(),t=totals(),mx=LIMITS.virt[state.modalidad];
  openDrawer('Bloque de gestión · control normativo','Validación del plan',
   `<div style="display:flex;flex-direction:column;gap:12px">
     <table class="mini"><tr><th>Indicador</th><th style="text-align:right">Plan</th><th style="text-align:right">Límite</th></tr>
      <tr><td>Créditos totales</td><td class="r">${t.cr}</td><td class="r">${LIMITS.total}</td></tr>
      <tr><td>Créditos generales</td><td class="r">${t.G}</td><td class="r">${LIMITS.G}</td></tr>
      <tr><td>Créditos de investigación</td><td class="r">${t.P}</td><td class="r">${LIMITS.P}</td></tr>
      <tr><td>Créditos de especialidad</td><td class="r">${t.E}</td><td class="r">${LIMITS.E}</td></tr>
      <tr><td>Créditos no presenciales (${MODL[state.modalidad]})</td><td class="r">${t.pv}%</td><td class="r">${mx}%</td></tr>
      <tr><td>Créditos por ciclo</td><td class="r">${Math.min(...cycles().filter(c=>c.n!==99).map(c=>sum(c.rows,x=>x.cr)))}–${Math.max(...cycles().filter(c=>c.n!==99).map(c=>sum(c.rows,x=>x.cr)))}</td>
        <td class="r">${LIMITS.crCicloMin}–${LIMITS.crCicloMax}</td></tr>
      <tr><td>Horas totales</td><td class="r">${t.tt}</td><td class="r">—</td></tr></table>
     ${v.length?v.map(x=>`<div class="alert ${x.lv}">${esc(x.txt)}</div>`).join(''):'<div class="alert ok">El plan cumple todos los límites y la secuencia de prerrequisitos.</div>'}
   </div>`,null,'val');
}
function openGenesys(){
  openDrawer('Fase 4 · Diseño del plan de estudios','Generar con Génesys',
   `<div style="display:flex;flex-direction:column;gap:12px">
     <div class="lockrow">El agente <b style="margin-inline:3px">Génesys</b> construye el plan desde los productos validados de las fases previas; no inventa competencias.</div>
     <table class="mini"><tr><th>Insumo</th><th>Origen</th></tr>
      <tr><td>Competencias y capacidades con definiciones</td><td>Fase 1 — informe aprobado</td></tr>
      <tr><td>Funciones, tareas y productos</td><td>Fase 2.1 — e-Delphi</td></tr>
      <tr><td>Estándares y recursos de productividad</td><td>Fase 2.2 — matriz funcional</td></tr>
      <tr><td>Cursos con resultado de aprendizaje</td><td>Fase 3 — ruta de formación</td></tr>
      <tr><td>Límites de créditos, horas y modalidad</td><td>Reglamento académico · SINEACE · SUNEDU</td></tr></table>
     <div class="alert warn">Generar sobrescribe la distribución actual y crea una versión mayor del plan. Acción deshabilitada en la maqueta.</div>
   </div>`,
   `<button type="button" class="btn" onclick="closeDrawer()">Cerrar</button>
    <button type="button" class="btn primary" disabled>Ejecutar Génesys</button>`,'gen');
}

/* ===================== HISTORIAL (ventana flotante) ===================== */
function renderHist(){
  const pend=state.pending.length?`<div class="pend">
     <div class="hdr"><b>Cambios sin versionar (${state.pending.length})</b><span class="chip warn">Próxima: ${nextVersion()}</span></div>
     <ul>${state.pending.map(p=>`<li>${esc(p.txt)} <span style="color:var(--muted)">· ${KIND[p.kind].lab}</span></li>`).join('')}</ul>
     <div style="display:flex;gap:7px;margin-top:9px"><button class="btn sm primary" id="vCommit">Guardar ${nextVersion()}</button>
     <button class="btn sm" id="vDiscard">Descartar</button></div></div>`
   :`<div class="alert ok">Sin cambios pendientes: el plan está sincronizado con la versión vigente.</div>`;
  $('#fhBody').innerHTML=`${pend}
    <div><span class="tlab">Identificación</span>
      <table class="mini" style="margin-top:5px">
      <tr><td>Código del plan</td><td class="mono"><b>${esc(state.plan.code)}</b></td></tr>
      <tr><td>Versión vigente</td><td class="mono">${baseVer()} · ${esc(state.version.estado)}</td></tr>
      <tr><td>Vigencia</td><td>${esc(state.plan.vig)}</td></tr>
      <tr><td>Modalidades autorizadas</td><td>Presencial · Semipresencial · A distancia</td></tr></table></div>
    <div><span class="tlab">Regla de versionado</span>
      <table class="mini" style="margin-top:5px"><tr><th>Cambio</th><th>Incremento</th></tr>
      <tr><td>Alta/baja de asignatura, créditos, nombre o código</td><td class="mono"><b>mayor</b> · v${state.version.major+1}.0</td></tr>
      <tr><td>Ciclo, prerrequisito o equivalencia</td><td class="mono"><b>menor</b> · v${state.version.major}.${state.version.minor+1}</td></tr>
      <tr><td>Nivel de formación, horas, responsables o perfil</td><td class="mono"><b>revisión</b> · v${state.version.major}.${state.version.minor}.${state.version.rev+1}</td></tr></table></div>
    <div><span class="tlab">Versiones del plan</span><div style="margin-top:4px">
      ${[...state.versions].reverse().map((v,i)=>`<div class="vrow"><span class="vn">${v.v}</span>
        <div><b>${v.estado}</b> <span class="chip ${v.estado==='Aprobado'?'ok':v.estado==='Histórico'?'':'warn'}" style="margin-left:5px">vigencia ${esc(v.vig)}</span>
          <div class="meta">${v.fecha} · ${esc(v.autor)}</div>
          <ul>${v.items.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>
          <div class="res">${v.res?`<span class="ok">⎙ ${esc(v.res)}</span><button class="btn sm" data-verres="${v.v}">Reemplazar</button>`
            :`<label>⎙ Cargar resolución (PDF)<input type="file" accept="application/pdf" data-upl="${v.v}"></label>
              <span style="color:var(--muted)">${v.estado==='Aprobado'?'requerida':'al aprobar'}</span>`}</div>
        </div></div>`).join('')}</div></div>`;
  if(state.pending.length){$('#vCommit').onclick=commitVersion;
    $('#vDiscard').onclick=()=>{state.pending=[];renderVersionChip();renderHist();toast('Cambios pendientes descartados.')}}
  $('#fhBody').querySelectorAll('[data-upl]').forEach(inp=>inp.onchange=e=>{
    const f=e.target.files[0];if(!f)return;
    const v=state.versions.find(x=>x.v===inp.dataset.upl);v.res=f.name;
    if(v.estado==='En revisión'){v.estado='Aprobado';if(v.v===baseVer())state.version.estado='Aprobado'}
    renderVersionChip();renderHist();toast(`Resolución <b>${esc(f.name)}</b> asociada a ${v.v}.`,'good')});
  $('#fhBody').querySelectorAll('[data-verres]').forEach(b=>b.onclick=()=>toast('Se abriría el selector para reemplazar el documento oficial de la resolución.'));
  $('#fhCode').textContent=state.plan.code;
}
function toggleHist(force){
  const f=$('#floatHist'),open=force!==undefined?force:!f.classList.contains('open');
  f.classList.toggle('open',open);if(open)renderHist();
}
(function dragFloat(){
  const f=$('#floatHist'),h=$('#floatDrag');let sx,sy,ox,oy,on=false;
  h.onpointerdown=e=>{if(e.target.closest('button'))return;on=true;h.setPointerCapture(e.pointerId);
    const r=f.getBoundingClientRect();f.style.left=r.left+'px';f.style.top=r.top+'px';f.style.right='auto';
    sx=e.clientX;sy=e.clientY;ox=r.left;oy=r.top};
  h.onpointermove=e=>{if(!on)return;
    f.style.left=Math.max(4,Math.min(innerWidth-80,ox+e.clientX-sx))+'px';
    f.style.top=Math.max(4,Math.min(innerHeight-60,oy+e.clientY-sy))+'px'};
  h.onpointerup=()=>{on=false};
})();
$('#fhClose').onclick=()=>toggleHist(false);

/* ===================== DIÁLOGOS ===================== */
function codeFor(c,rule,seq){
  const pref=c.code.replace(/[^A-Z]/g,'').slice(0,3)||({G:'EGE',P:'INV',E:PLAN_ESC?PLAN_ESC.prefijo:'SIS'}[c.te]);
  const n=seq[pref]=(seq[pref]||(rule.bases[c.te]||101)-1)+1;
  if(rule.mode==='ciclo')return `${pref}${rule.sep}${c.ciclo}${String(n%100).padStart(2,'0')}`;
  return `${pref}${rule.sep}${String(n).padStart(rule.digits,'0')}`;
}
function openCodes(){
  $('#dlg').classList.remove('big');
  const r=state.codeRule,m={},pv=oficiales().slice(0,8).map(c=>({c,nc:codeFor(c,r,m)}));
  $('#dlgTitle').textContent='Codificación de asignaturas';
  $('#dlgSub').textContent='Regla declarada en el expediente de acreditación (SINEACE)';
  $('#dlgBody').innerHTML=`
   <div class="tokenrow"><span class="tok">[ÁREA]</span><span class="tok">[CICLO]</span><span class="tok">[CORRELATIVO]</span>
     <span style="color:var(--muted);font-size:12px">ÁREA: ERE / EGE · INV · ${PLAN_ESC?PLAN_ESC.prefijo:'SIS'}</span></div>
   <div class="grid3">
     <div class="field"><label>Modo</label><select id="rMode">
       <option value="area" ${r.mode==='area'?'selected':''}>Área + correlativo</option>
       <option value="ciclo" ${r.mode==='ciclo'?'selected':''}>Área + ciclo + correlativo</option></select></div>
     <div class="field"><label>Dígitos</label><input id="rDig" type="number" min="2" max="4" value="${r.digits}"></div>
     <div class="field"><label>Separador</label><input id="rSep" value="${r.sep}" placeholder="(ninguno)"></div></div>
   <div class="grid3">
     <div class="field"><label>Base generales</label><input id="rBG" type="number" value="${r.bases.G}"></div>
     <div class="field"><label>Base investigación</label><input id="rBP" type="number" value="${r.bases.P}"></div>
     <div class="field"><label>Base especialidad</label><input id="rBE" type="number" value="${r.bases.E}"></div></div>
   <div><span class="tlab">Vista previa</span><table class="mini" style="margin-top:5px">
     <tr><th>Actual</th><th>Asignatura</th><th>Ciclo</th><th>Propuesto</th></tr>
     ${pv.map(p=>`<tr><td class="mono">${p.c.code}</td><td>${esc(p.c.name)}</td><td class="r">${p.c.ciclo}</td><td class="codepv">${p.nc}</td></tr>`).join('')}</table></div>
   <div class="field"><label>Código del plan</label><input id="rPlanCode" value="${esc(state.plan.code)}" class="mono"></div>
   <div class="alert warn">Recodificar es un cambio <b>mayor</b>: se propaga a prerrequisitos y avanza a v${state.version.major+1}.0.</div>`;
  $('#dlgFoot').innerHTML=`<button class="btn" value="cancel">Cerrar</button>
    <button type="button" class="btn primary" id="rApply">Aplicar a todo el plan</button>`;
  $('#rApply').onclick=()=>{
    const r2={mode:$('#rMode').value,digits:+$('#rDig').value,sep:$('#rSep').value,
      bases:{G:+$('#rBG').value,P:+$('#rBP').value,E:+$('#rBE').value}};
    state.codeRule=r2;
    const pc=$('#rPlanCode').value.trim().toUpperCase();
    if(pc&&pc!==state.plan.code){logChange('menor',`Código del plan: ${state.plan.code} → ${pc}.`);state.plan.code=pc;$('#planCode').textContent=pc}
    const map={},nw={};
    oficiales().forEach(c=>nw[c.code]=codeFor(c,r2,map));
    COURSES.forEach(c=>c.pre=c.pre.map(p=>nw[p]||p));
    oficiales().forEach(c=>c.code=nw[c.code]);
    logChange('mayor',`Recodificación de ${oficiales().length} asignaturas según la regla ${r2.mode==='ciclo'?'[ÁREA][CICLO][CORRELATIVO]':'[ÁREA][CORRELATIVO]'}.`);
    renderMatrix();$('#dlg').close();toast(`Códigos regenerados. Versión propuesta: <b>${nextVersion()}</b>.`,'good');
  };
  $('#dlg').showModal();
}
function openHoras(){
  $('#dlg').classList.remove('big');
  const R=state.horas;
  $('#dlgTitle').textContent='Reglas de horas por modalidad';
  $('#dlgSub').textContent='Equivalencias institucionales declaradas para la oferta presencial, semipresencial y a distancia';
  $('#dlgBody').innerHTML=`
   <table class="mini"><tr><th>Modalidad</th><th>Créditos no presenciales</th><th>Qué cambia en la gestión académica</th></tr>
    <tr><td><b>Presencial</b></td><td class="r">hasta 20 %</td><td>Las horas teóricas y prácticas se registran como presenciales; solo los cursos marcados como no presenciales usan horas síncronas y asíncronas.</td></tr>
    <tr><td><b>Semipresencial</b></td><td class="r">> 20 % y ≤ 70 %</td><td>La teoría pasa a síncrona/asíncrona y la práctica sigue presencial cuando el curso exige laboratorio o práctica pre-profesional.</td></tr>
    <tr><td><b>A distancia</b></td><td class="r">> 70 %</td><td>Todo se registra como síncrono o asíncrono, salvo prácticas que exigen presencia; requiere aula virtual, recursos y evaluación en línea declarados en el sílabo.</td></tr></table>
   <div class="grid2">
     <div class="field"><label>% síncrono de las horas teóricas virtuales</label><input id="hT" type="number" min="0" max="100" value="${R.tSync}"></div>
     <div class="field"><label>% síncrono de las horas prácticas virtuales</label><input id="hP" type="number" min="0" max="100" value="${R.pSync}"></div></div>
   <div class="alert ok">El crédito no cambia con la modalidad: 1 crédito = 16 horas teóricas o 32 horas prácticas (Ley 30220, art. 39). Lo que cambia es la <b>naturaleza de la hora</b>: presencial, síncrona o asíncrona, y el tope de créditos no presenciales de la modalidad (R.C. 105-2020-SUNEDU/CD).</div>
   <div class="alert warn">La proporción síncrona/asíncrona es decisión institucional y debe constar en el reglamento y en el sílabo; las horas de trabajo autónomo no pueden ser menores que su equivalente presencial.</div>`;
  $('#dlgFoot').innerHTML=`<button class="btn" value="cancel">Cerrar</button>
    <button type="button" class="btn primary" id="hApply">Aplicar reglas</button>`;
  $('#hApply').onclick=()=>{
    state.horas={tSync:+$('#hT').value,pSync:+$('#hP').value};
    logChange('revision',`Reglas de horas: ${state.horas.tSync}% síncrono en teoría y ${state.horas.pSync}% en práctica.`);
    renderMatrix();$('#dlg').close();toast('Distribución de horas recalculada.','good');
  };
  $('#dlg').showModal();
}
function openLimits(){
  $('#dlg').classList.remove('big');
  const t=totals(),mx=LIMITS.virt[state.modalidad];
  const row=(lab,v,lim,u)=>`<tr><td>${lab}</td><td class="r">${lim}${u}</td><td class="r" style="${v>lim?'color:var(--crit);font-weight:600':''}">${v}${u}</td>
    <td class="r">${v>lim?'<span class="chip crit">Excede</span>':'<span class="chip ok">Cumple</span>'}</td></tr>`;
  $('#dlgTitle').textContent='Límites corporativos';
  $('#dlgSub').textContent='Parámetros del Vicerrectorado Académico · solo lectura para la escuela';
  $('#dlgBody').innerHTML=`
   <table class="mini"><tr><th>Parámetro</th><th style="text-align:right">Límite</th><th style="text-align:right">${esc(PLAN_ESC?PLAN_ESC.planNombre.replace('Plan de Estudios ','Plan '):'Plan 2025')}</th><th style="text-align:right">Estado</th></tr>
    ${row('Créditos totales de la carrera',t.cr,LIMITS.total,' cr')}
    ${row('Créditos de estudios generales',t.G,LIMITS.G,' cr')}
    ${row('Créditos de investigación',t.P,LIMITS.P,' cr')}
    ${row('Créditos de especialidad',t.E,LIMITS.E,' cr')}
    ${row('Créditos máximos por ciclo',Math.max(...cycles().filter(c=>c.n!==99).map(c=>sum(c.rows,x=>x.cr))),LIMITS.crCicloMax,' cr')}
    ${row('Créditos no presenciales ('+MODL[state.modalidad]+')',t.pv,mx,' %')}
    ${row('Horas semanales por ciclo',Math.round(Math.max(...cycles().filter(c=>c.n!==99).map(c=>sum(c.rows,x=>x.ht+x.hp)))/16),LIMITS.horasSemMax,' h')}</table>
   <div class="lockrow">🔒 Modificar un límite requiere resolución del Vicerrectorado Académico. La escuela ajusta la distribución interna del plan.</div>`;
  $('#dlgFoot').innerHTML=`<button class="btn" value="ok">Cerrar</button>`;
  $('#dlg').showModal();
}
function openExport(){
  $('#dlg').classList.remove('big');
  $('#dlgTitle').textContent='Exportar el plan de estudios';
  $('#dlgSub').textContent=`${state.plan.code} · ${baseVer()} · vigencia ${state.plan.vig}`;
  $('#dlgBody').innerHTML=`
   <div class="alert ok">La impresión sale en A3 apaisado con la cabecera del plan, los bloques visibles y la fila de niveles alcanzados.</div>
   <table class="mini"><tr><th>Formato</th><th>Contenido</th></tr>
    <tr><td><b>PDF / impresión</b></td><td>Matriz completa tal como está en pantalla, con código de plan, versión y vigencia.</td></tr>
    <tr><td><b>Excel</b></td><td>Matriz en texto tabulado: se copia al portapapeles y se pega en la hoja de cálculo.</td></tr></table>
   <div class="field"><label>Alcance</label><select id="xScope">
     <option value="vis">Bloques visibles en pantalla</option><option value="all">Todos los bloques</option></select></div>`;
  $('#dlgFoot').innerHTML=`<button class="btn" value="cancel">Cerrar</button>
    <button type="button" class="btn" id="xExcel">Copiar para Excel</button>
    <button type="button" class="btn primary" id="xPdf">Imprimir / PDF</button>`;
  $('#xPdf').onclick=()=>{$('#dlg').close();setTimeout(()=>window.print(),120)};
  $('#xExcel').onclick=async()=>{
    const all=$('#xScope').value==='all';
    const prev=JSON.stringify(state.collapsed);
    if(all){Object.keys(state.collapsed).forEach(k=>state.collapsed[k]=false);renderMatrix()}
    const rows=[...document.querySelectorAll('#tbl tr')].map(tr=>[...tr.children]
      .map(td=>(td.innerText||'').replace(/\s+/g,' ').trim()).join('\t')).join('\n');
    const head=`${state.plan.code}\t${baseVer()}\tVigencia ${state.plan.vig}\tModalidad ${MODL[state.modalidad]}\n`;
    if(all){state.collapsed=JSON.parse(prev);renderMatrix()}
    try{await navigator.clipboard.writeText(head+rows);$('#dlg').close();
      toast('Matriz copiada. Pégala en Excel con <b>Ctrl+V</b> y se distribuye en columnas.','good')}
    catch(err){toast('El navegador bloqueó el portapapeles. Usa Imprimir / PDF o vuelve a intentarlo.','bad')}
  };
  $('#dlg').showModal();
}

/* ===================== MALLA + CERTIFICACIONES ===================== */
function renderMalla(){
  const accent=c=>c.te==='G'?'--bl-g':c.te==='P'?'--bl-d':c.te==='X'?'--bl-f':'--bl-e';
  $('#paneMalla').innerHTML=`<div class="malla">${cycles().map(({n,rows})=>`
    <div class="mcol"><h3>${n===99?'No curricular':'Ciclo '+n}<span>${n===99?rows.length+' prog.':sum(rows,c=>c.cr)+' cr'}</span></h3>
      ${rows.map(c=>`<div class="mcard" style="--blk:var(${accent(c)})" data-m="${c.code}">
        <span class="cd"><b>${c.code}</b><span>${c.of?c.cr+' cr · '+(c.ht+c.hp)+' h':'s/c'}</span></span>
        <span class="nm">${c.tip!=='R'?TIP[c.tip].ic+' ':''}${esc(c.name)}</span>
        ${c.pre.length?`<span class="cd" style="color:var(--muted)">◂ ${c.pre.join(', ')}</span>`:''}</div>`).join('')}
    </div>`).join('')}</div>
    <div style="display:flex;gap:14px;flex-wrap:wrap;margin-top:12px;font-size:11.5px;color:var(--muted)">
      <span><b style="color:var(--bl-g)">▍</b> General</span><span><b style="color:var(--bl-d)">▍</b> Investigación</span>
      <span><b style="color:var(--bl-e)">▍</b> Especialidad</span><span><b style="color:var(--bl-f)">▍</b> No curricular</span>
      <span style="color:var(--amber)"><b>▭</b> prerrequisito</span><span style="color:var(--bl-p)"><b>▭</b> lo requieren</span></div>`;
  $('#paneMalla').querySelectorAll('[data-m]').forEach(card=>{
    card.onmouseenter=()=>{const c=byCode(card.dataset.m),pre=new Set(c.pre),post=new Set(dependents(c.code).map(d=>d.code));
      $('#paneMalla').querySelectorAll('[data-m]').forEach(o=>{const k=o.dataset.m;
        o.classList.toggle('pre',pre.has(k));o.classList.toggle('post',post.has(k));
        o.classList.toggle('dim',k!==c.code&&!pre.has(k)&&!post.has(k))})};
    card.onmouseleave=()=>$('#paneMalla').querySelectorAll('[data-m]').forEach(o=>o.classList.remove('pre','post','dim'));
    card.onclick=()=>openCurso(card.dataset.m);
  });
}
function renderCert(){
  $('#paneCert').innerHTML=`
    <div style="max-width:64ch;margin-bottom:14px;color:var(--ink-2);line-height:1.55">
      Cada hito formativo cierra con una certificación progresiva. Los cursos habilitantes están tipificados con ◎ en la matriz y los cursos sello con ✦.</div>
    <div class="certgrid">${CERTS.map(c=>`<div class="cert">
      <div class="h"><span class="stage">${c.stage}</span><span class="cyn">Ciclos ${c.ciclos}</span></div>
      <h4>${esc(c.name)}</h4>
      <div class="tlab">Capacidades acreditadas</div><ul>${c.caps.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>
      <div class="tlab">Asignaturas habilitantes</div>
      <div style="display:flex;gap:5px;flex-wrap:wrap">${c.cursos.map(k=>{const q=byCode(k);
        return `<span class="pill" title="${q?esc(q.name):''}">${k}</span>`}).join('')}</div></div>`).join('')}
    <div class="cert" style="border-style:dashed">
      <div class="h"><span class="stage" style="background:var(--bl-f)">Perfil</span><span class="cyn">Transversal</span></div>
      <h4>Programas y proyectos no curriculares</h4>
      <div class="tlab">Evidencian el perfil sin otorgar créditos</div>
      <ul>${COURSES.filter(c=>!c.of).map(c=>`<li>◈ ${esc(c.name)}</li>`).join('')}</ul></div></div>`;
}

/* ===================== PRODUCTOS Y APORTE A COMPETENCIAS ===================== */
const PRODTIPO=[
 [/program|software|web|aplicaci|algorit|estructura de datos|orientada a objetos/i,'Prototipo de software'],
 [/base de datos|minería|big data|inteligencia|datos|analítica|multivariado/i,'Solución analítica de datos'],
 [/red|sistemas operativos|cloud|seguridad|virtualiza|centro de datos|arquitectura de comput/i,'Implementación de infraestructura'],
 [/investigaci|tesis|estadística|metodolog/i,'Informe de investigación'],
 [/cristiana|ética|carácter/i,'Portafolio de reflexión y servicio'],
 [/gestión|gobierno|auditoría|calidad|proceso|proyecto|empresarial|administrativa/i,'Expediente de gestión'],
 [/comunicaci|oral|escrita/i,'Informe académico y sustentación'],
 [/práctica pre/i,'Informe de práctica pre-profesional'],
 [/responsabilidad social|sostenib|estilo de vida|cultura/i,'Proyecto de intervención'],
 [/matemática|cálculo|física|discreta|operaciones/i,'Resolución de problemas modelados']
];
if(PLAN_ESC&&PLAN_ESC.prodtipo)PRODTIPO.unshift(...PLAN_ESC.prodtipo);
function tipoProducto(c){const h=PRODTIPO.find(([re])=>re.test(c.name));return h?h[1]:'Producto integrador'}
function productos(c){
  const t=tipoProducto(c),n=c.name;
  return {integrador:`${t} de ${n}: evidencia final que integra las dos unidades y se evalúa con rúbrica analítica.`,
   unidades:[
    {n:1,nom:'Unidad 1 · Fundamentos y análisis',
     ra:`El estudiante comprende y analiza los fundamentos de ${n} y los aplica a un caso delimitado con criterio técnico.`,
     prod:`${t} — versión parcial: análisis del caso, justificación de las decisiones y plan de trabajo.`,
     ent:['Informe de análisis del caso (formato institucional)','Plan de trabajo con cronograma y responsables','Exposición breve de avance'],
     crit:['Identifica y delimita el problema del caso con sustento.','Justifica por escrito las decisiones técnicas adoptadas.','Presenta el avance con claridad y orden.']},
    {n:2,nom:'Unidad 2 · Aplicación y sustentación',
     ra:`El estudiante desarrolla y sustenta el ${t.toLowerCase()} de ${n}, evaluando resultados y proponiendo mejoras.`,
     prod:`${t} — versión final, con documentación, resultados verificados y sustentación oral.`,
     ent:['Producto final documentado','Informe de resultados y mejoras','Sustentación oral con apoyo visual'],
     crit:['Entrega el producto completo y funcional según especificación.','Evalúa los resultados con evidencia y propone mejoras.','Sustenta oralmente con dominio y responde preguntas.']}
   ]};
}
const GXRULES=[
 {re:/informe|redac|comunica|oral|escrita|sustent|exposici/i,caps:['gc1','gc2','gc3'],why:'El producto exige leer fuentes técnicas, redactar el informe y sustentarlo oralmente.'},
 {re:/equipo|proyecto|taller|práctica|gestión|empresarial/i,caps:['gt1','gt2','gt4'],why:'El producto se desarrolla en equipo, con reparto de tareas, plazos y rendición de cuentas.'},
 {re:/investigaci|tesis|estadística|datos|analítica|multivariado|minería/i,caps:['gi3','gi4','gi5'],why:'El producto recoge y procesa evidencia empírica y reporta resultados con normas científicas.'},
 {re:/innovaci|emprend|soluci|diseño|arquitectura|prototipo/i,caps:['gi6','gt3'],why:'El producto plantea una solución nueva y viable ante un problema real.'},
 {re:/cristiana|ética|carácter|servicio|social/i,caps:['ge1','ge4','gp1'],why:'El producto integra la cosmovisión institucional y el servicio a la comunidad.'},
 {re:/salud|vida|sostenib|ambient|ciudadan/i,caps:['gv1','gv2','gv3'],why:'El producto aborda hábitos de vida y criterios de sostenibilidad.'},
 {re:/calidad|auditoría|gobierno|proceso|pruebas|certificaci/i,caps:['gp2','gp5','gt5'],why:'El producto exige planificar, ejecutar con estándar y conducir al equipo hasta el cierre.'}
];
function genesysSugiere(c){
  const txt=[c.name,tipoProducto(c),productos(c).unidades.map(u=>u.prod+' '+u.ent.join(' ')).join(' ')].join(' ');
  const nivel=c.ciclo<=3?1:c.ciclo<=7?2:3,out=[],vistos=new Set();
  GXRULES.forEach(r=>{if(!r.re.test(txt))return;
    r.caps.forEach(id=>{if(vistos.has(id)||!CAPS[id])return;vistos.add(id);
      out.push({id,nivel:Math.max(c.caps[id]||0,nivel),actual:c.caps[id]||0,why:r.why})})});
  return out.sort((a,b)=>(a.actual?1:0)-(b.actual?1:0)||a.id.localeCompare(b.id));
}
function openProductos(code){
  const c=byCode(code),P=productos(c);
  const gcOf=id=>{const g=groupOfCap(id);return g.color.startsWith('--')?`var(${g.color})`:g.color};
  const actuales=Object.keys(c.caps).filter(id=>blockOfCap(id).id==='g');
  const dlg=$('#dlg');dlg.classList.add('big');
  $('#dlgTitle').textContent=`Productos y aporte a competencias generales · ${c.code}`;
  $('#dlgSub').textContent=`${c.name} — ${c.of?'ciclo '+c.ciclo+' · '+c.cr+' créditos':'programa no curricular'} · ${tipoProducto(c)}`;
  $('#dlgBody').innerHTML=`
   <div class="prodgrid">
     <div class="prodcard" style="border-left-color:var(--amber)"><h4>◆ Producto integrador del curso</h4><p>${esc(P.integrador)}</p></div>
     <div class="prodcard" style="border-left-color:var(--bl-e)"><h4>▣ Aporte actual a competencias generales</h4>
       ${actuales.length?`<ul>${actuales.map(id=>`<li><b>${id.toUpperCase()}</b> ${esc(CAPS[id].name)} — nivel ${c.caps[id]}</li>`).join('')}</ul>`
        :'<p style="color:var(--warn)">El curso todavía no registra aporte a ninguna competencia general.</p>'}</div>
     ${P.unidades.map(u=>`<div class="prodcard"><h4>${esc(u.nom)}</h4>
        <p><b>Resultado de aprendizaje.</b> ${esc(u.ra)}</p>
        <p><b>Producto.</b> ${esc(u.prod)}</p>
        <div><span class="tlab">Entregables</span><ul>${u.ent.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>
        <div><span class="tlab">Criterios de evaluación</span><ul>${u.crit.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div></div>`).join('')}
   </div>
   <div class="gxbox">
     <div class="gxhead"><span class="ic">✦</span><div><h4>Génesys · análisis del aporte a competencias generales</h4>
       <span class="s">Lee los productos, entregables y criterios del curso y propone a qué capacidades generales aporta y en qué nivel.</span></div>
       <button type="button" class="btn primary" id="gxRun" style="margin-left:auto">Analizar</button></div>
     <div id="gxOut"><p style="margin:0;font-size:12.5px;color:var(--muted)">Pulsa <b>Analizar</b> para obtener la propuesta. Podrás revisarla capacidad por capacidad antes de aplicarla a la matriz.</p></div>
   </div>`;
  $('#dlgFoot').innerHTML=`<button class="btn" value="ok">Cerrar</button>
    <button type="button" class="btn" id="pFicha">Ficha del curso</button>
    <button type="button" class="btn" id="pSil">Constructor de sílabo</button>`;
  $('#pFicha').onclick=()=>{dlg.close();openCurso(code)};
  $('#pSil').onclick=()=>{dlg.close();openSilaboFS(code)};
  $('#gxRun').onclick=()=>{
    const sug=genesysSugiere(c);
    $('#gxOut').innerHTML=sug.length?`
      <div style="display:flex;flex-direction:column;gap:7px">
        ${sug.map(x=>`<label class="sug ${x.actual?'has':''}" style="--gc:${gcOf(x.id)}">
          <input type="checkbox" data-sug="${x.id}" ${x.actual?'':'checked'}>
          <span><span class="nm" style="color:${gcOf(x.id)}">${x.id.toUpperCase()} · ${esc(CAPS[x.id].name)}</span>
            <span class="why">${esc(x.why)}${x.actual?` <b>Ya registrado en nivel ${x.actual}.</b>`:''}</span></span>
          <select class="lvsel" data-lv="${x.id}">${[1,2,3].map(n=>`<option value="${n}" ${n===x.nivel?'selected':''}>N${n}</option>`).join('')}</select>
        </label>`).join('')}
        <div style="display:flex;gap:8px;align-items:center">
          <button type="button" class="btn primary" id="gxApply">Aplicar seleccionadas a la matriz</button>
          <span style="font-size:11.5px;color:var(--muted)">Se registra como cambio de <b>revisión</b> en el historial de versiones.</span></div>
      </div>`:'<p style="margin:0;font-size:12.5px;color:var(--warn)">Génesys no encontró evidencia suficiente en los productos para proponer un aporte. Ajusta los productos o define el aporte manualmente en la matriz.</p>';
    const ap=$('#gxApply');if(!ap)return;
    ap.onclick=()=>{
      const sel=[...$('#gxOut').querySelectorAll('[data-sug]:checked')];
      if(!sel.length){toast('Selecciona al menos una capacidad.','bad');return}
      sel.forEach(i=>{const id=i.dataset.sug,lv=+$(`[data-lv="${id}"]`).value,prev=c.caps[id]||0;
        if(prev!==lv){c.caps[id]=lv;logChange('revision',`${c.code}: aporte a «${CAPS[id].name}» ${prev||'—'} → ${lv} (propuesto por Génesys desde los productos).`)}});
      renderMatrix();dlg.close();toast(`${sel.length} aporte(s) registrados en competencias generales para <b>${c.code}</b>.`,'good');
    };
  };
  dlg.showModal();
}

/* ===================== CONSTRUCTOR DE SÍLABO (pantalla completa) ===================== */
const FSSEC=[['info','1','Información general'],['sum','2','Sumilla'],['comp','3','Competencias del perfil'],
 ['uni','4','Unidades de aprendizaje'],['est','5','Estrategias y habilitadores'],['eva','6','Evaluación'],['ref','7','Referencias']];
const RECSES=[['C','Contenido de la sesión'],['M','Motivación'],['GT','Guía teórica'],['GP','Guía práctica'],
 ['GDAA','Guía de aprendizaje autónomo'],['Q','Quiz o cuestionario'],['R','Rúbrica o lista de cotejo'],['V','Video o multimedia']];
const MOMENTOS=[
 ['M1','Auditar los parámetros mínimos: nombre del curso y capacidades marcadas en la matriz',['info']],
 ['M2','Reconocer el campo del curso y cargar la estructura de unidades de referencia',[]],
 ['M3','Producto del curso y clase (integrado o modular)',[]],
 ['M4','Criterios del curso: uno por capacidad marcada',['comp']],
 ['M5','Resultado de aprendizaje del curso y sumilla',['sum','comp']],
 ['M6','Contenidos: macro temas, micro temas y subtemas desde la referencia',[]],
 ['M7','Partición del producto en unidades y entregables de sesión',['uni']],
 ['M8','Resultados de aprendizaje y criterios de cada unidad',['uni','eva']],
 ['M9','Sesiones: tema, actividad práctica y actividad autónoma',['uni','est','ref']]
];
/* --- Banco de estructuras de referencia: unidades típicas de sílabos universitarios --- */
const S=x=>x.split('|');
const BANCO=[
{k:'programacion',lab:'Programación y desarrollo de software',clase:'Integrado',
 re:/program|algorit|estructura de datos|orientada a objetos|web/i,
 ref:'Programación I–II y Algoritmos y Estructuras de Datos (UPC Barcelona · UPM) · ACM/IEEE CS2023, área SDF/PL',
 prod:'Aplicación de software',
 u:[{macro:'Fundamentos de algorítmica',prod:'Programa con estructuras de control, documentado y probado',m:[
   ['Resolución de problemas y algoritmos','Análisis y especificación del problema|Representación del algoritmo|Prueba de escritorio','Algoritmo especificado'],
   ['Tipos de datos, variables y expresiones','Tipos primitivos y conversión|Operadores y precedencia|Entrada y salida de datos','Programa básico ejecutable'],
   ['Estructuras selectivas','Condicional simple y múltiple|Anidamiento y condiciones compuestas|Validación de datos','Programa con decisiones'],
   ['Estructuras repetitivas','Bucles definidos e indefinidos|Acumuladores y contadores|Cortes de control','Programa con iteración']]},
  {macro:'Modularidad y estructuras de datos',prod:'Módulo con funciones y colecciones, con pruebas unitarias',m:[
   ['Funciones y modularidad','Parámetros y valor de retorno|Ámbito de las variables|Descomposición del problema','Biblioteca de funciones'],
   ['Arreglos y colecciones','Arreglos unidimensionales|Arreglos multidimensionales|Búsqueda y ordenamiento','Módulo de colecciones'],
   ['Cadenas y archivos','Manipulación de cadenas|Lectura y escritura de archivos|Persistencia simple','Módulo de persistencia'],
   ['Pruebas y depuración','Casos de prueba|Depuración paso a paso|Documentación del código','Suite de pruebas unitarias']]},
  {macro:'Programación orientada a objetos y aplicación',prod:'Aplicación orientada a objetos con su documentación técnica',m:[
   ['Clases y objetos','Atributos y métodos|Constructores|Encapsulamiento','Diagrama de clases y código base'],
   ['Herencia y polimorfismo','Jerarquía de clases|Sobrescritura|Interfaces y clases abstractas','Módulo con jerarquía de clases'],
   ['Colecciones y manejo de excepciones','Listas y diccionarios de objetos|Excepciones y validación|Registro de errores','Módulo robusto con excepciones'],
   ['Integración y despliegue de la aplicación','Integración de módulos|Control de versiones|Documentación de usuario','Aplicación integrada']]}]},
{k:'datos',lab:'Datos, analítica e inteligencia artificial',clase:'Integrado',
 re:/base de datos|miner|big data|inteligencia|datos|analític|multivariado|negocios/i,
 ref:'Bases de Datos y Gestión de Bases de Datos (UPC Barcelona · UPM) · ACM/IEEE CS2023, área DM/AI · CRISP-DM',
 prod:'Solución analítica de datos',
 u:[{macro:'Modelamiento de datos',prod:'Modelo de datos normalizado con su diccionario',m:[
   ['Sistemas de información y bases de datos','Arquitectura del SGBD|Modelos de datos|Roles y gobierno del dato','Informe de arquitectura de datos'],
   ['Modelo entidad-relación','Entidades y atributos|Relaciones y cardinalidad|Restricciones de integridad','Modelo conceptual'],
   ['Modelo relacional y normalización','Llaves y dependencias|Primera a tercera forma normal|Diccionario de datos','Modelo lógico normalizado'],
   ['Implementación física','Tipos de datos e índices|Vistas y restricciones|Script de creación','Base de datos implementada']]},
  {macro:'Consulta y preparación de datos',prod:'Dataset preparado y documentado con su pipeline de consultas',m:[
   ['Consultas SQL','Proyección, selección y orden|Funciones de agregación|Agrupamiento y filtros','Consultas resueltas'],
   ['Combinación de fuentes','Uniones internas y externas|Subconsultas|Consultas anidadas','Consulta integrada de fuentes'],
   ['Limpieza y transformación','Valores faltantes y atípicos|Estandarización de variables|Derivación de atributos','Dataset limpio'],
   ['Integración y carga','Proceso de extracción y carga|Control de calidad del dato|Versionado del dataset','Pipeline documentado']]},
  {macro:'Análisis y modelos de inteligencia analítica',prod:'Informe analítico con el modelo evaluado y sus recomendaciones',m:[
   ['Análisis exploratorio','Estadísticos descriptivos|Distribuciones y correlaciones|Visualización de datos','Reporte exploratorio'],
   ['Modelos supervisados','Partición de datos|Entrenamiento del modelo|Métricas de desempeño','Modelo entrenado y evaluado'],
   ['Modelos no supervisados y reglas','Agrupamiento|Reglas de asociación|Interpretación de patrones','Segmentación documentada'],
   ['Comunicación de resultados y decisión','Tablero de indicadores|Narrativa de datos|Recomendación de estrategia','Tablero y recomendación']]}]},
{k:'infraestructura',lab:'Infraestructura, redes y seguridad de TI',clase:'Integrado',
 re:/red|sistemas operativos|cloud|seguridad|virtualiza|centro de datos|arquitectura de comput|conectividad/i,
 ref:'Redes de Computadores (UPM, temas 1–5: comunicaciones, TCP/IP, redes de área local, transporte y aplicaciones, WAN e Internet) · ACM/IEEE CS2023, área NC/SEC',
 prod:'Implementación de infraestructura de TI',
 u:[{macro:'Fundamentos de comunicación de datos',prod:'Informe de diagnóstico de la infraestructura y su capacidad',m:[
   ['Introducción a las comunicaciones','Conceptos de transmisión de datos|Medios de transmisión y capacidad del canal|Técnicas de transmisión','Ficha técnica de medios'],
   ['Arquitecturas de comunicaciones','Modelo de capas|Arquitectura TCP/IP|Encapsulamiento y protocolos','Cuadro comparativo de arquitecturas'],
   ['Direccionamiento y nivel de red','Direccionamiento IP|Subredes y máscaras|Enrutamiento básico','Plan de direccionamiento'],
   ['Diagnóstico de la red del caso','Levantamiento de la topología|Medición de tráfico|Identificación de cuellos de botella','Informe de diagnóstico']]},
  {macro:'Implementación de servicios de red',prod:'Servicio de red configurado con su documentación de operación',m:[
   ['Tecnologías de red de área local','Control de acceso al medio|Conmutación y VLAN|Cableado y estándares','Diseño de la LAN'],
   ['Nivel de transporte y servicios','TCP y UDP|Puertos y servicios|Calidad de servicio','Configuración de servicios'],
   ['Servidores y virtualización','Sistemas operativos de red|Máquinas virtuales y contenedores|Servicios en la nube','Servidor virtualizado'],
   ['Monitoreo y disponibilidad','Herramientas de monitoreo|Registro de eventos|Plan de contingencia','Tablero de monitoreo']]},
  {macro:'Seguridad y operación',prod:'Plan de seguridad y operación con evidencias de verificación',m:[
   ['Gestión de riesgos de la información','Activos y amenazas|Evaluación del riesgo|Controles ISO 27001','Matriz de riesgos'],
   ['Controles técnicos','Autenticación y autorización|Cifrado|Segmentación y cortafuegos','Controles implementados'],
   ['Respaldo y continuidad','Políticas de respaldo|Recuperación ante desastres|Pruebas de restauración','Plan de continuidad'],
   ['Auditoría y cierre del servicio','Evidencias de cumplimiento|Informe de hallazgos|Sustentación del plan','Informe de auditoría interna']]}]},
{k:'software',lab:'Ingeniería de software',clase:'Integrado',
 re:/ingenier[íi]a de software|requerimientos|pruebas|análisis y diseño|calidad/i,
 ref:'Ingeniería de Software (sílabos UCV · Universidad Continental) · SWEBOK v4 · ACM/IEEE CS2023, área SE',
 prod:'Proyecto de software documentado',
 u:[{macro:'Ingeniería de requerimientos',prod:'Especificación de requerimientos validada con el interesado',m:[
   ['Proceso de software y ciclos de vida','Modelos de proceso|Marcos ágiles|Roles del equipo','Cuadro del proceso elegido'],
   ['Elicitación de requerimientos','Técnicas de entrevista y observación|Identificación de interesados|Registro de necesidades','Acta de elicitación'],
   ['Especificación y modelado','Historias de usuario y casos de uso|Requerimientos no funcionales|Criterios de aceptación','Documento de especificación'],
   ['Validación y gestión del cambio','Revisión con el interesado|Trazabilidad del requerimiento|Control de versiones','Especificación validada']]},
  {macro:'Diseño y construcción',prod:'Diseño técnico y versión construida del software',m:[
   ['Arquitectura del software','Estilos y patrones|Vistas de arquitectura|Decisiones y trade-offs','Documento de arquitectura'],
   ['Diseño detallado','Diagramas de clases y secuencia|Diseño de la base de datos|Diseño de interfaces','Diseño detallado'],
   ['Construcción y buenas prácticas','Estándares de codificación|Refactorización|Integración continua','Versión construida'],
   ['Gestión de la configuración','Ramas y versiones|Ambientes|Despliegue automatizado','Repositorio configurado']]},
  {macro:'Calidad, pruebas y entrega',prod:'Informe de pruebas y entrega del software con su documentación',m:[
   ['Plan de pruebas','Estrategia y niveles de prueba|Diseño de casos|Criterios de aceptación','Plan de pruebas'],
   ['Ejecución y defectos','Pruebas unitarias y de integración|Registro y triaje de defectos|Reprueba','Informe de defectos'],
   ['Métricas de calidad','Cobertura y densidad de defectos|Deuda técnica|Indicadores del proceso','Tablero de calidad'],
   ['Entrega y sustentación','Manual y capacitación|Acta de entrega|Sustentación del producto','Acta de entrega']]}]},
{k:'gestion',lab:'Gestión y gobierno de TI',clase:'Integrado',
 re:/gestión|gobierno|auditoría|proceso|proyecto|empresarial|administrativa|teoría de sistemas|certificaci/i,
 ref:'Gestión de Proyectos y Gobierno de TI (sílabos UCV · UTP) · PMBOK 7 · COBIT 2019 · BPM CBOK',
 prod:'Expediente de gestión',
 u:[{macro:'Diagnóstico de la organización y sus procesos',prod:'Informe de diagnóstico organizacional y del proceso crítico',m:[
   ['Organización, estrategia y TI','Cadena de valor|Alineamiento estratégico|Indicadores del negocio','Mapa estratégico'],
   ['Modelado de procesos','Notación BPMN|Proceso actual (as-is)|Roles y responsabilidades','Modelo del proceso actual'],
   ['Medición del proceso','Indicadores de desempeño|Toma de datos|Identificación de brechas','Tablero de indicadores'],
   ['Diagnóstico y oportunidades','Análisis de causas|Priorización de mejoras|Sustento del caso','Informe de diagnóstico']]},
  {macro:'Diseño de la propuesta de gestión',prod:'Propuesta de mejora con su caso de negocio',m:[
   ['Rediseño del proceso','Proceso propuesto (to-be)|Automatización con TI|Gestión del cambio','Modelo to-be'],
   ['Marcos de gobierno','Objetivos de COBIT|Políticas y controles|Estructura de decisión','Matriz de gobierno'],
   ['Planificación del proyecto','Alcance y EDT|Cronograma y recursos|Riesgos','Plan del proyecto'],
   ['Caso de negocio','Costos y beneficios|Indicadores de valor|Análisis de viabilidad','Caso de negocio']]},
  {macro:'Implantación, control y cierre',prod:'Expediente de gestión con evidencias de control y cierre',m:[
   ['Ejecución y control','Seguimiento del avance|Control de cambios|Gestión de interesados','Informe de avance'],
   ['Aseguramiento de la calidad','Auditoría del proceso|Acciones correctivas|Mejora continua','Informe de auditoría'],
   ['Evaluación de resultados','Comparación de indicadores|Lecciones aprendidas|Sostenibilidad de la mejora','Evaluación de resultados'],
   ['Cierre y sustentación','Acta de cierre|Transferencia al usuario|Sustentación ejecutiva','Acta de cierre']]}]},
{k:'investigacion',lab:'Investigación científica',clase:'Integrado',
 re:/investigaci|tesis|estadística|metodolog/i,
 ref:'Metodología de la Investigación y Estadística Aplicada (sílabos UNMSM · UPeU) · normas APA 7',
 prod:'Proyecto de investigación',
 u:[{macro:'Problema y marco teórico',prod:'Capítulo de planteamiento del problema y marco teórico',m:[
   ['La investigación científica','Enfoques y tipos|Ética de la investigación|Líneas de investigación','Ficha de línea y tema'],
   ['Planteamiento del problema','Formulación del problema|Objetivos e hipótesis|Justificación','Planteamiento del problema'],
   ['Antecedentes y bases teóricas','Búsqueda en bases de datos|Fichaje y citas APA|Estado del arte','Matriz de antecedentes'],
   ['Marco teórico y variables','Definición conceptual y operacional|Operacionalización|Matriz de consistencia','Marco teórico']]},
  {macro:'Diseño metodológico e instrumentos',prod:'Capítulo de metodología con los instrumentos validados',m:[
   ['Diseño de investigación','Tipo y nivel|Diseño y esquema|Variables de estudio','Diseño declarado'],
   ['Población y muestra','Criterios de inclusión|Técnicas de muestreo|Tamaño de muestra','Plan de muestreo'],
   ['Instrumentos de recolección','Construcción del instrumento|Validez por juicio de expertos|Confiabilidad','Instrumento validado'],
   ['Plan de análisis','Estadística descriptiva e inferencial|Pruebas según variables|Consideraciones éticas','Plan de análisis']]},
  {macro:'Resultados y difusión',prod:'Informe de investigación en formato de artículo, sustentado',m:[
   ['Procesamiento de datos','Depuración de la base|Software estadístico|Tablas y figuras','Base de datos procesada'],
   ['Análisis e interpretación','Contraste de hipótesis|Tamaño del efecto|Interpretación de resultados','Capítulo de resultados'],
   ['Discusión y conclusiones','Comparación con antecedentes|Limitaciones|Conclusiones y recomendaciones','Discusión y conclusiones'],
   ['Redacción y sustentación','Estructura del artículo|Normas APA y similitud|Sustentación oral','Artículo y sustentación']]}]},
{k:'comunicacion',lab:'Comunicación académica',clase:'Modular',
 re:/comunicaci|oral|escrita|redacci/i,
 ref:'Competencia comunicativa y Redacción Universitaria (sílabos UPeU · UTP) · normas APA 7',
 prod:'Portafolio de comunicación académica',
 u:[{macro:'Comprensión de textos académicos',prod:'Informe crítico de lectura de un artículo académico',m:[
   ['Tópicos textuales','Texto expositivo y argumentativo|Ideas principales y secundarias|Progresión temática','Organizador de ideas'],
   ['Estrategias de lectura','Antes, durante y después de la lectura|Subrayado y sumillado|Esquemas y resúmenes','Resumen y esquema'],
   ['Niveles de comprensión','Nivel literal|Nivel inferencial|Nivel crítico-valorativo','Ficha de análisis'],
   ['Informe de lectura','Tesis, argumentos y contraargumentos|Estructura del informe|Normas de citado','Informe de lectura']]},
  {macro:'Producción de textos académicos',prod:'Ensayo argumentativo con referencias en APA 7',m:[
   ['El párrafo académico','Unidad y coherencia|Conectores lógicos|Tipos de párrafo','Párrafos corregidos'],
   ['Planificación del ensayo','Tesis y argumentos|Búsqueda y selección de fuentes|Esquema del texto','Esquema del ensayo'],
   ['Redacción y normativa','Cohesión y precisión léxica|Ortografía y puntuación|Citas y referencias APA','Borrador del ensayo'],
   ['Revisión entre pares','Rúbrica de revisión|Retroalimentación|Versión final','Ensayo final']]},
  {macro:'Expresión oral y sustentación',prod:'Sustentación oral con apoyo visual, evaluada con rúbrica',m:[
   ['El discurso académico','Estructura del discurso|Adecuación a la audiencia|Recursos no verbales','Guion del discurso'],
   ['Apoyo visual','Diseño de diapositivas|Datos y evidencias|Manejo del tiempo','Apoyo visual'],
   ['Ensayo de la exposición','Práctica y autoevaluación|Manejo de preguntas|Control de la ansiedad','Grabación de práctica'],
   ['Sustentación final','Presentación del producto|Defensa de argumentos|Retroalimentación','Sustentación evaluada']]}]},
{k:'matematica',lab:'Modelamiento matemático',clase:'Modular',
 re:/matemática|cálculo|física|discreta|operaciones|multivariado|álgebra/i,
 ref:'Álgebra, Cálculo y Matemática Discreta (guías docentes UPC Barcelona · UPM) · ACM/IEEE CS2023, área MSF',
 prod:'Portafolio de resolución de problemas modelados',
 u:[{macro:'Fundamentos y lenguaje matemático',prod:'Portafolio de problemas de fundamentos resueltos y sustentados',m:[
   ['Lógica y conjuntos','Proposiciones y conectivos|Cuantificadores|Operaciones con conjuntos','Problemas de lógica resueltos'],
   ['Relaciones y funciones','Producto cartesiano|Tipos de relaciones|Funciones y composición','Ejercicios de funciones'],
   ['Sistemas numéricos','Números y operaciones|Notación y aproximación|Errores de cálculo','Ficha de sistemas numéricos'],
   ['Modelamiento de situaciones','Traducción del enunciado|Supuestos del modelo|Verificación de la solución','Modelo de la situación']]},
  {macro:'Métodos de resolución',prod:'Portafolio de problemas resueltos con métodos analíticos y numéricos',m:[
   ['Ecuaciones y sistemas','Ecuaciones lineales|Sistemas de ecuaciones|Interpretación de la solución','Sistemas resueltos'],
   ['Técnicas de cálculo','Límites y continuidad|Derivada y razón de cambio|Integral y acumulación','Ejercicios de cálculo'],
   ['Métodos numéricos','Aproximación de raíces|Interpolación|Estimación del error','Cálculos numéricos'],
   ['Optimización','Formulación del modelo|Restricciones|Solución e interpretación','Modelo de optimización']]},
  {macro:'Inferencia y comunicación de resultados',prod:'Informe de análisis con conclusiones sustentadas',m:[
   ['Organización de datos','Tablas y distribuciones|Medidas de tendencia y dispersión|Gráficos','Reporte descriptivo'],
   ['Probabilidad e inferencia','Reglas de probabilidad|Distribuciones|Estimación e intervalos','Ejercicios de inferencia'],
   ['Contraste de hipótesis','Planteamiento de hipótesis|Pruebas paramétricas|Errores tipo I y II','Contraste resuelto'],
   ['Comunicación del resultado','Lenguaje matemático|Argumentación del procedimiento|Sustentación','Informe sustentado']]}]},
{k:'formacion',lab:'Formación integral y del carácter',clase:'Modular',
 re:/cristiana|ética|carácter|estilo de vida|cultura|ciudadan|responsabilidad social|emprend|liderazgo/i,
 ref:'Formación general y del carácter (sílabos UPeU) · Modelo Educativo UPeU',
 prod:'Portafolio de formación con proyecto de servicio',
 u:[{macro:'Fundamentos y cosmovisión',prod:'Portafolio de reflexión fundamentada',m:[
   ['Cosmovisión y sentido de vida','Fuentes de la cosmovisión|Propósito personal|Valores institucionales','Ficha de reflexión'],
   ['Estudio de las fuentes','Lectura de las fuentes|Interpretación en contexto|Aplicación personal','Comentario de fuentes'],
   ['Carácter y virtudes','Dominio propio|Firmeza de propósito|Hábitos formativos','Bitácora de hábitos'],
   ['Proyecto de vida','Metas y prioridades|Plan personal|Indicadores de avance','Proyecto de vida']]},
  {macro:'Estilo de vida y bienestar',prod:'Plan de estilo de vida con registro de evidencias',m:[
   ['Bienestar integral','Dimensiones del bienestar|Autoevaluación|Factores de riesgo','Autoevaluación de bienestar'],
   ['Nutrición y actividad física','Principios de nutrición|Rutina de actividad física|Descanso','Plan de vida saludable'],
   ['Salud socioemocional','Regulación emocional|Relaciones saludables|Manejo del conflicto','Bitácora socioemocional'],
   ['Sostenibilidad','Huella ambiental|Consumo responsable|Compromisos concretos','Compromiso de sostenibilidad']]},
  {macro:'Servicio y ciudadanía',prod:'Proyecto de servicio ejecutado con informe de impacto',m:[
   ['Liderazgo de servicio','Modelos de liderazgo|Servicio a la comunidad|Trabajo en equipo','Rol asignado en el equipo'],
   ['Diagnóstico de la necesidad','Identificación de la comunidad|Levantamiento de necesidades|Priorización','Diagnóstico de la necesidad'],
   ['Ejecución del proyecto','Plan de actividades|Gestión de recursos|Registro de evidencias','Informe de ejecución'],
   ['Evaluación del impacto','Indicadores de impacto|Testimonios|Sustentación del proyecto','Informe de impacto']]}]},
{k:'practica',lab:'Práctica profesional y certificación',clase:'Integrado',
 re:/práctica pre|preprofesional|taller de certificaci|arquitectura empresarial/i,
 ref:'Prácticas preprofesionales y talleres de certificación (sílabos UNMSM · UPeU · UTP)',
 prod:'Informe de práctica profesional',
 u:[{macro:'Inserción y diagnóstico del centro de prácticas',prod:'Plan de práctica con diagnóstico del área',m:[
   ['Marco de la práctica','Reglamento y compromisos|Perfil del puesto|Ética profesional','Convenio y plan de trabajo'],
   ['Diagnóstico del área','Procesos del área|Sistemas y herramientas|Necesidades detectadas','Diagnóstico del área'],
   ['Plan de intervención','Objetivos y alcance|Cronograma|Indicadores de logro','Plan de intervención'],
   ['Inducción y seguridad','Normas internas|Seguridad de la información|Registro de asistencia','Acta de inducción']]},
  {macro:'Ejecución de la práctica',prod:'Producto profesional entregado al área usuaria',m:[
   ['Ejecución de tareas asignadas','Aplicación de estándares|Uso de herramientas del área|Registro de decisiones','Bitácora de tareas'],
   ['Coordinación con el equipo','Comunicación con el supervisor|Trabajo en equipo|Rendición de cuentas','Actas de coordinación'],
   ['Resolución de incidencias','Identificación del problema|Alternativas de solución|Implementación','Informe de incidencias'],
   ['Entrega al usuario','Verificación del producto|Capacitación al usuario|Conformidad del área','Conformidad del usuario']]},
  {macro:'Evaluación y sustentación',prod:'Informe final de práctica sustentado ante el jurado',m:[
   ['Sistematización de la experiencia','Evidencias y anexos|Resultados alcanzados|Indicadores cumplidos','Sistematización'],
   ['Evaluación del desempeño','Ficha del supervisor|Autoevaluación|Plan de mejora','Ficha de evaluación'],
   ['Informe final','Estructura del informe|Redacción técnica|Revisión del asesor','Informe final'],
   ['Sustentación','Presentación de resultados|Defensa ante el jurado|Retroalimentación','Sustentación aprobada']]}]}
];
if(PLAN_ESC&&PLAN_ESC.bancos)BANCO.unshift(...PLAN_ESC.bancos);
const BANCO_GEN={k:'generico',lab:'Estructura genérica por producto',clase:'Integrado',
 ref:'Estructura genérica del constructor (dc-3-3): diagnóstico → elaboración → verificación y sustentación',
 prod:'Producto integrador',
 u:[{macro:'Fundamentos y diagnóstico',prod:'Informe de diagnóstico del caso',m:[
   ['Marco conceptual del curso','Conceptos y definiciones operativas|Componentes del sistema de referencia|Normas y estándares aplicables','Ficha de conceptos'],
   ['Diagnóstico del caso','Fuentes de información|Instrumentos de levantamiento|Criterios de delimitación','Informe de diagnóstico'],
   ['Métodos y procedimientos base','Secuencia del procedimiento|Parámetros y supuestos|Registro de decisiones','Registro de decisiones'],
   ['Modelado de la situación','Representación del modelo|Validación de supuestos|Resultados preliminares','Modelo preliminar']]},
  {macro:'Elaboración y sustentación',prod:'Producto final documentado',m:[
   ['Especificación de la solución','Requerimientos y restricciones|Criterios de aceptación|Plan de elaboración','Especificación'],
   ['Construcción guiada','Aplicación del estándar|Uso de la herramienta|Control de avance','Versión parcial'],
   ['Verificación y calidad','Casos de verificación|Registro de hallazgos|Corrección de desviaciones','Informe de verificación'],
   ['Documentación y sustentación','Estructura del documento|Trazabilidad de decisiones|Presentación del producto','Producto sustentado']]}]};
function bancoDe(c,k){
  if(k&&k!=='auto'){const b=BANCO.find(x=>x.k===k);if(b)return b}
  return BANCO.find(b=>b.re.test(c.name))||BANCO_GEN;
}
const VERBO_NIVEL={1:['Identifica','Describe','Reconoce','Registra'],2:['Aplica','Analiza','Elabora','Organiza'],3:['Integra','Evalúa','Diseña','Sustenta']};
const NIVEL_TXT={1:'reconoce y aplica con guía en situaciones estructuradas',2:'aplica con autonomía en contextos conocidos de la especialidad',3:'integra, decide y transfiere a contextos nuevos'};
const BLOOM={1:'Comprender · Aplicar',2:'Aplicar · Analizar',3:'Evaluar · Crear'};

/* --- documento vacío: el sílabo se abre sin contenido --- */
function silDoc(c){
  if(!c.sil_doc)c.sil_doc={generado:false,clase:'',sumilla:'',params:null,ref:'',
    productoCurso:{titulo:'',desc:'',entregables:[],origen:''},
    raCurso:{titulo:'',def:'',origen:''},
    criteriosCurso:[],funciones:[],temas:[],unidades:[],hechas:[],
    hist:[{v:'v1.0',fecha:'15 may 2026',estado:'Generado',autor:c.resp.plan},
          {v:'v2.0',fecha:'18 may 2026',estado:'Revisado',autor:c.resp.val[0]},
          {v:'v3.0',fecha:'20 may 2026',estado:'Aprobado',autor:c.resp.val[c.resp.val.length-1]}]};
  return c.sil_doc;
}
function capsMarcadas(c){return Object.keys(c.caps)}

/* --- constructor: parámetros mínimos = nombre del curso + capacidades marcadas --- */
function silBuild(c,params){
  const P=params||{nombre:c.name,caps:capsMarcadas(c),nUni:0,clase:'auto',banco:'auto',semanas:16};
  const B=bancoDe({name:P.nombre},P.banco);
  const clase=P.clase==='auto'?B.clase:P.clase;
  const caps=P.caps.filter(id=>CAPS[id]);
  const nivelDe=id=>c.caps[id]||1;
  const nMax=Math.max(1,...caps.map(nivelDe));
  const nUni=Math.min(B.u.length,Math.max(2,P.nUni||B.u.length));
  const US=B.u.slice(0,nUni);
  const tp=B.prod;

  /* funciones: una por competencia del perfil que el curso moviliza (capacidades marcadas) */
  const grupos=[];
  caps.forEach(id=>{const g=groupOfCap(id);if(g&&!grupos.some(x=>x.g===g))grupos.push({g,caps:[id]});
    else if(g){grupos.find(x=>x.g===g).caps.push(id)}});
  const funciones=(grupos.length?grupos:[{g:{name:'Competencia del perfil'},caps:[]}]).slice(0,3).map((x,i)=>({
    id:'F'+(i+1),nombre:`${x.g.name} aplicada en ${B.lab.toLowerCase()}`,
    producto:`${tp} requerido por el área usuaria en el marco de ${x.g.name.toLowerCase()}`,
    evidencia:`${tp} con conformidad del responsable del área, con registro de decisiones y verificación`,
    tareas:(x.caps.length?x.caps:['—']).map((id,k)=>({id:`T${i+1}.${k+1}`,
      txt:id==='—'?'Tarea clave por definir en el paquete funcional'
        :`${VERBO_NIVEL[nivelDe(id)][k%4]} ${CAPS[id].oper.charAt(0).toLowerCase()+CAPS[id].oper.slice(1).replace(/\.$/,'')}`}))
  }));
  const tareaPool=funciones.flatMap(f=>f.tareas.map(t=>({fx:f.id,tid:t.id})));

  const temas=US.map((U,ui)=>({id:`TE-0${ui+1}`,nombre:U.macro,fx:funciones[ui%funciones.length].id,
    micro:U.m.map((m,i)=>({id:`TE-0${ui+1}.${i+1}`,nombre:m[0],sub:S(m[1]),origen:`referencia: ${B.lab}`,
      nivel:['Comprende','Aplica','Aplica','Domina'][i%4],fx:funciones[ui%funciones.length].id,
      tarea:(tareaPool[(ui*4+i)%tareaPool.length]||{}).tid||'T1.1'}))}));

  const d=dist(c);
  const mk=(m,i,ui,total)=>{
    const ht=Math.max(1,Math.round(d.htt/nUni/(total+1))),hp=Math.max(1,Math.round(d.hpt/nUni/(total+1)));
    const niv=Math.min(3,Math.max(1,nMax)),vb=VERBO_NIVEL[niv][i%4],sub=S(m[1]);
    const tk=tareaPool[(ui*4+i)%tareaPool.length]||{fx:'F1',tid:'T1.1'};
    return {n:i+1,tema:m[0],subtemas:sub,ht,hp,
      prac:`${vb} ${sub[0].toLowerCase()} del caso asignado, aplicando ${sub[sub.length-1].toLowerCase()} con el recurso del curso.`,
      auto:`Elabora ${m[2].toLowerCase()} y lo entrega en el aula virtual con la lista de verificación de la unidad.`,
      ent:m[2],crit:`Elabora ${m[2].toLowerCase()} con sustento técnico y según el estándar del curso.`,
      hito:(i===1),cierre:false,fx:tk.fx,tarea:tk.tid,micro:`TE-0${ui+1}.${i+1}`,
      rec:Object.fromEntries(RECSES.map(([k],ki)=>[k,((ui*7+i*3+ki*2)%10)<(c.sil==='ap'?9:c.sil==='pr'?6:4)]))};
  };
  const cierreSes=(U,ui,n)=>({n,tema:`Cierre de la unidad: sustentación de ${U.prod.toLowerCase()}`,
    subtemas:['Integración de los entregables','Sustentación del producto de unidad','Retroalimentación y plan de mejora'],
    ht:Math.max(1,Math.round(d.htt/nUni/(U.m.length+1))),hp:Math.max(1,Math.round(d.hpt/nUni/(U.m.length+1))),
    prac:`Sustenta ${U.prod.toLowerCase()} ante el aula, integrando los entregables de la unidad.`,
    auto:`Incorpora la retroalimentación recibida y entrega la versión final de ${U.prod.toLowerCase()}.`,
    ent:`${U.prod} sustentado`,crit:`Sustenta ${U.prod.toLowerCase()} con dominio del contenido y responde preguntas con precisión.`,
    hito:true,cierre:true,fx:funciones[ui%funciones.length].id,
    tarea:(tareaPool[tareaPool.length-1]||{}).tid||'T1.1',micro:`TE-0${ui+1}.${U.m.length+1}`,
    rec:Object.fromEntries(RECSES.map(([k],ki)=>[k,((ui*5+ki)%10)<(c.sil==='ap'?9:5)]))});

  const capTxt=caps.length?caps.map(id=>CAPS[id].name.toLowerCase()).join(', '):'las capacidades del perfil';
  return {
    generado:true,clase,params:P,ref:B.ref,banco:B.k,
    sumilla:`Asignatura de naturaleza teórico-práctica que desarrolla ${capTxt} en el campo de ${B.lab.toLowerCase()}. Organiza el aprendizaje en torno a un ${tp.toLowerCase()} que el estudiante construye por unidades, con los estándares y herramientas de la línea formativa. Su estructura de unidades sigue la práctica universitaria de referencia y el nivel de logro declarado en la matriz del plan (nivel ${nMax}: ${NIVEL_TXT[nMax]}).`,
    funciones,temas,
    productoCurso:{titulo:`${tp} de ${P.nombre}`,
      desc:`${tp} que integra ${US.map(u=>u.prod.toLowerCase()).join(', ')}, elaborado con los estándares y herramientas de ${B.lab.toLowerCase()} en un caso real de la especialidad.`,
      entregables:US.map((u,i)=>`${u.prod} (unidad ${i+1})`),
      origen:`Parámetros mínimos: nombre del curso «${P.nombre}» y ${caps.length} capacidad(es) marcada(s) en la matriz. Estructura de unidades tomada de ${B.ref}.`},
    raCurso:{titulo:`Elaboración del ${tp.toLowerCase()} de ${P.nombre.toLowerCase()}`,
      def:`${VERBO_NIVEL[nMax][0]} el ${tp.toLowerCase()} de ${P.nombre.toLowerCase()} movilizando ${capTxt}, en un caso real de la especialidad, con criterio técnico y ético, hasta sustentarlo ante el aula.`,
      origen:`Capacidades marcadas en la matriz (nivel máximo ${nMax} · Bloom ${BLOOM[nMax]}) y producto del curso.`},
    criteriosCurso:(caps.length?caps:[]).map((id,i)=>{const t=tareaPool[i%tareaPool.length]||{fx:'F1',tid:'T1.1'};
      return {cap:id,txt:`${VERBO_NIVEL[nivelDe(id)][i%4]} el entregable que evidencia «${CAPS[id].name}»: ${CAPS[id].oper.charAt(0).toLowerCase()+CAPS[id].oper.slice(1)}`,
        fx:t.fx,tarea:t.tid,nivel:nivelDe(id)}}),
    unidades:US.map((U,ui)=>{
      const ses=U.m.map((m,i)=>mk(m,i,ui,U.m.length));
      ses.push(cierreSes(U,ui,U.m.length+1));
      let capsU=caps.filter((id,i)=>i%nUni===ui);
      if(!capsU.length&&caps.length)capsU=[caps[ui%caps.length]];
      if(capsU.length<2&&caps.length>1)capsU=capsU.concat([caps[(ui+1)%caps.length]]);
      return {n:ui+1,titulo:`Unidad ${ui+1} · ${U.macro}`,macro:`${temas[ui].id} · ${U.macro}`,
        ra:{titulo:`Elaboración de ${U.prod.toLowerCase()}`,
          def:`${VERBO_NIVEL[Math.min(3,nMax)][ui%4]} ${U.prod.toLowerCase()} aplicando ${U.m[0][0].toLowerCase()} y ${U.m[U.m.length-1][0].toLowerCase()}, en el caso asignado, para avanzar el producto del curso (${tp.toLowerCase()}).`,
          origen:`Tareas clave de ${funciones[ui%funciones.length].id} + producto de la unidad ${ui+1} · Bloom ≤ ${BLOOM[nMax]}`},
        producto:{titulo:U.prod,tipo:clase,
          desc:`${U.prod} que reúne ${U.m.map(m=>m[2].toLowerCase()).join(', ')}, elaborado con los instrumentos del curso y presentado según el formato institucional.`,
          entregables:U.m.map(m=>m[2]).concat([`${U.prod} sustentado`]),
          verificacion:['Cumple la estructura y el formato de entrega declarados.','Sustenta cada decisión con evidencia del caso.','Aplica el estándar y la herramienta del curso.'],
          formato:'Documento PDF y archivo fuente en el aula virtual · sustentación de 8 minutos',
          origen:clase==='Integrado'?'Parte del producto del curso: al integrarse con el resto forma el producto funcional.'
                                    :'Pieza independiente del portafolio: se evalúa y se cierra en la unidad.'},
        criterios:(capsU.length?capsU:caps.slice(0,1)).map((id,i)=>{const t=tareaPool[(ui+i)%tareaPool.length]||{fx:'F1',tid:'T1.1'};
          return {txt:`${VERBO_NIVEL[nivelDe(id)][i%4]} ${U.m[i%U.m.length][2].toLowerCase()} evidenciando «${CAPS[id].name}» según el estándar.`,
            cap:id,fx:t.fx,tarea:t.tid}}),
        sesiones:ses};
    })
  };
}
function gp(o,p){return p.split('.').reduce((a,k)=>a&&a[k],o)}
function sp(o,p,v){const ks=p.split('.'),l=ks.pop();const t=ks.reduce((a,k)=>a[k],o);t[l]=v}
function recPctSes(s){return Math.round(RECSES.filter(([k])=>s.rec[k]).length/RECSES.length*100)}
function pintaAct(txt,s){
  let h=esc(txt).replace(/^(\p{L}+)/u,'<span class="vb">$1</span>');
  [s.tema,...s.subtemas].filter(Boolean).sort((a,b)=>b.length-a.length).forEach(t=>{
    const re=new RegExp('('+t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','ig');
    h=h.replace(re,'<span class="tm">$1</span>');
  });
  return h;
}
function fx(D,id){return D.funciones.find(f=>f.id===id)}
function tareaDe(D,fxid,tid){const f=fx(D,fxid);return f&&f.tareas.find(t=>t.id===tid)}
function microDe(D,id){for(const t of D.temas){const m=t.micro.find(x=>x.id===id);if(m)return{macro:t,micro:m}}return null}

let fsCode=null,fsSec='uni',fsUni=0,fsCols={act:true,crit:false},fsOpen={ra:true,prod:true,crit:true},fsGen=null;
function openSilaboFS(code){fsCode=code;fsSec='uni';fsUni=0;fsGen=null;$('#silfs').classList.add('open');renderFS()}
function fsClose(){$('#silfs').classList.remove('open');if(document.fullscreenElement)document.exitFullscreen().catch(()=>{})}
const SKEL=n=>`<div class="skel">${Array.from({length:n}).map((_,i)=>`<i style="width:${[92,78,86,64][i%4]}%"></i>`).join('')}</div>`;

function renderFS(){
  const c=byCode(fsCode),D=silDoc(c),d=dist(c);
  $('#fsEyebrow').innerHTML=`Constructor de sílabo · ${esc(state.plan.code)} · ${c.of?'ciclo '+c.ciclo:'programa'} · ${c.cr} créditos · ${esc(DIC[c.dic].lab)}${D.generado?' · producto <b>'+D.clase+'</b>':' · <b>sin generar</b>'}`;
  $('#fsTitle').innerHTML=`<span class="mono" style="color:var(--muted);font-size:15px">${c.code}</span> ${esc(c.name)}`;

  /* ---------- lateral ---------- */
  $('#fsSide').innerHTML=`
   <div class="sidecard"><h3>Estructura del sílabo</h3><div class="snav" id="fsNav">
     ${FSSEC.map(([id,n,t])=>{
       const act=fsSec===id,done=D.hechas.includes(id);
       let h=`<button data-fsec="${id}" aria-current="${act}">
         <span class="n">${n}.</span><span>${t}</span>
         <span class="ck ${done?'on':''}" data-ck="${id}">${done?'✓':''}</span></button>`;
       if(id==='uni')h+=`<div class="subnav ${act?'':'cl'}">
         ${D.unidades.length?D.unidades.map((u,i)=>`<button class="sub" data-fsuni="${i}" aria-current="${act&&fsUni===i}">
           <span class="n">U${u.n}</span><span>${esc(u.ra.titulo)}</span><span class="ck on">✓</span></button>`).join('')
          :`<button class="sub" disabled><span class="n">—</span><span style="color:var(--muted)">sin unidades</span><span></span></button>`}
         ${D.generado?`<button class="sub add" id="fsAddUni"><span class="n">+</span><span>Agregar unidad</span><span></span></button>`:''}</div>`;
       return h;}).join('')}
   </div></div>
   <div class="sidecard"><h3>Historial</h3>
     ${D.hist.slice().reverse().map((h,i)=>`<div class="histrow ${i===0?'vig':''}">
       <span class="hv mono">${h.v}</span>
       <span class="hd"><b>${esc(h.estado)}</b><br><span>${h.fecha} · ${esc(h.autor)}</span></span>
       ${i===0?'<span class="vtag">Vigente</span>':'<span class="hold">Histórico</span>'}</div>`).join('')}
     <div style="display:flex;gap:6px;margin-top:9px">
       <button class="btn sm" id="fsRec" style="flex:1">Recursos ${c.rec}%</button>
       <button class="btn sm" id="fsResp" style="flex:1">Responsables</button></div></div>`;

  /* ---------- generación en curso ---------- */
  if(fsGen){
    $('#fsMain').innerHTML=`<div class="unitbox"><div class="uh"><h3>✦ Génesys · constructor de sílabo</h3>
      <span class="chip warn" style="margin-left:auto">${fsGen.i} de ${MOMENTOS.length} momentos</span></div>
      <div class="ub"><div class="genlog">
      ${MOMENTOS.map(([m,t],i)=>`<div class="genrow ${i<fsGen.i?'ok':i===fsGen.i?'run':''}">
        <span class="gm">${m}</span><span class="gt">${esc(t)}${fsGen.traza&&i<=fsGen.i&&fsGen.traza[i]?`<span class="gtz">${i===fsGen.i?'Génesys revisa: ':''}${esc(fsGen.traza[i])}</span>`:''}</span>
        <span class="gs">${i<fsGen.i?'✓':i===fsGen.i?'···':''}</span></div>`).join('')}</div>
      <div class="lockrow">Parámetros: <b style="margin-inline:3px">${esc(fsGen.p?fsGen.p.nombre:c.name)}</b> · ${fsGen.p?fsGen.p.caps.length:0} capacidad(es) de la matriz. Reglas del skill <b style="margin-inline:3px">dc-3-3-estructura-curso</b> (el producto manda) y formato del <b style="margin-inline:3px">Generador de Sílabo BC v2.0</b>.</div>
      </div></div>`;
    return;
  }

  const ed=(path,txt,cls)=>`<span class="ed ${cls||''}" contenteditable="true" data-ep="${path}">${esc(txt)}</span>`;
  const vacio=(titulo,filas,nota)=>`<div class="unitbox vacia"><div class="uh"><h3>${titulo}</h3>
      <span class="chip warn" style="margin-left:auto">Sin generar</span></div>
     <div class="ub"><div class="emptybox">
       <div class="eb-t">${esc(nota)}</div>
       ${SKEL(filas)}
       <button class="btn primary" data-gen="1">✦ Construir sílabo con parámetros mínimos</button>
       <div class="eb-s">Solo hacen falta el <b>nombre del curso</b> y las <b>capacidades marcadas en la matriz</b>. El constructor (M1 a M9 del skill <b>dc-3-3-estructura-curso</b>) toma la estructura de unidades de sílabos universitarios de referencia y entrega el formato del Generador BC v2.0.</div>
     </div></div></div>`;
  const u=D.unidades[fsUni],P=D.productoCurso;
  let main='';

  if(fsSec==='uni'){
    if(!D.generado||!u){main=vacio('4. Unidades de aprendizaje',6,'Las unidades, sus productos y sus sesiones se generan desde el producto del curso.');}
    else main=`<div class="unitbox"><div class="uh">
       <h3>${ed('unidades.'+fsUni+'.titulo',u.titulo)}</h3>
       <span class="chip">${u.sesiones.length} sesiones</span>
       <span class="chip">${u.sesiones.reduce((a,s)=>a+s.ht+s.hp,0)} h</span>
       <span class="chip mono" title="Macro tema del banco">${esc(u.macro||'')}</span>
       <span class="chip" title="Estructura de unidades de referencia">ref: ${esc((D.ref||'').split('·')[0].trim())}</span>
       <span class="chip ${D.clase==='Integrado'?'ok':'warn'}">Producto ${D.clase}</span>
       <button class="btn sm" id="tglComp" style="margin-left:auto" aria-pressed="${fsOpen.ra||fsOpen.prod||fsOpen.crit}">
         ${(fsOpen.ra||fsOpen.prod||fsOpen.crit)?'⊟ Ocultar componentes':'⊞ Mostrar componentes'}</button></div>
      <div class="ub">
       <div class="unigrid">
        <div class="unicol">
          <div class="prodcard tz ${fsOpen.ra?'':'col'}" data-tz="ra">
            <h4><button class="cbtn" data-tgl="ra">${fsOpen.ra?'▾':'▸'}</button>🎓 Resultado de aprendizaje de la unidad
              <span class="tzb">ver trazabilidad ▸</span></h4>
            ${fsOpen.ra?`<p><b>${ed('unidades.'+fsUni+'.ra.titulo',u.ra.titulo)}</b></p>
              <p>${ed('unidades.'+fsUni+'.ra.def',u.ra.def)}</p>`:''}</div>
          <div class="prodcard ${fsOpen.crit?'':'col'}">
            <h4><button class="cbtn" data-tgl="crit">${fsOpen.crit?'▾':'▸'}</button>✓ Criterios de evaluación del producto</h4>
            ${fsOpen.crit?`<ul>${u.criterios.map((x,i)=>`<li>${ed('unidades.'+fsUni+'.criterios.'+i+'.txt',x.txt)}
                ${x.cap?`<span class="capb">${x.cap.toUpperCase()}</span>`:''}${x.tarea?`<span class="capb">${x.tarea}</span>`:''}</li>`).join('')}</ul>
              <button class="linkb" id="critAdd">+ criterio</button>`:''}</div>
        </div>
        <div class="unicol">
          <div class="prodcard tz ${fsOpen.prod?'':'col'}" data-tz="prod" style="border-left-color:var(--amber)">
            <h4><button class="cbtn" data-tgl="prod">${fsOpen.prod?'▾':'▸'}</button>▤ Producto de la unidad y entregables
              <span class="tipo ${D.clase==='Integrado'?'int':'mod'}">${D.clase}</span>
              <span class="tzb">ver trazabilidad ▸</span></h4>
            ${fsOpen.prod?`<p><b>${ed('unidades.'+fsUni+'.producto.titulo',u.producto.titulo)}</b></p>
              <p>${ed('unidades.'+fsUni+'.producto.desc',u.producto.desc)}</p>
              <div><span class="tlab">Entregables que lo componen</span>
                <ul>${u.producto.entregables.map((x,i)=>`<li>${ed('unidades.'+fsUni+'.producto.entregables.'+i,x)}</li>`).join('')}</ul></div>
              <div><span class="tlab">Lista de verificación · formato</span>
                <ul>${u.producto.verificacion.map((x,i)=>`<li>${ed('unidades.'+fsUni+'.producto.verificacion.'+i,x)}</li>`).join('')}</ul>
                <p style="font-size:11.5px;color:var(--muted);margin-top:3px">${ed('unidades.'+fsUni+'.producto.formato',u.producto.formato)}</p></div>`:''}</div>
        </div>
       </div>

       <div class="sesbar">
         <h4>Sesiones de aprendizaje</h4>
         <span class="hint">⛓ abre la trazabilidad del contenido y de la actividad</span>
         <div class="sesbtns">
           <button class="btn sm" id="tglCrit" aria-pressed="${fsCols.crit}">Ver criterios y recursos</button>
           <button class="btn sm" id="tglAct" aria-pressed="${fsCols.act}">Ver actividades</button>
           <button class="btn sm" id="sesAdd">+ Sesión</button></div></div>
       <div class="sesw"><table class="ses"><thead><tr>
         <th style="width:30px">N°</th><th style="min-width:220px">Contenidos: tema y subtemas</th>
         <th style="width:34px">HT</th><th style="width:34px">HP</th>
         ${fsCols.act?'<th style="min-width:220px">Actividad práctica</th><th style="min-width:200px">Actividad autónoma</th>':''}
         ${fsCols.crit?'<th style="min-width:160px">Entregable de sesión</th><th style="min-width:180px">Criterio de evaluación</th>':''}
         <th style="width:74px">Recursos</th><th style="width:66px">Orden</th></tr></thead><tbody>
         ${u.sesiones.map((s,si)=>{const pc=recPctSes(s);
           return `<tr class="${s.cierre?'cierre':s.hito?'hito':''}" data-srow="${si}">
           <td class="c">${s.n}</td>
           <td><div class="cell-h"><b class="tema">${ed('unidades.'+fsUni+'.sesiones.'+si+'.tema',s.tema)}</b>
               <button class="tzs2" data-tzcont="${si}" title="Trazabilidad del contenido: tema nuclear y micro tema de la función">⛓</button></div>
             <ul class="subt">${s.subtemas.map((x,xi)=>`<li>${ed('unidades.'+fsUni+'.sesiones.'+si+'.subtemas.'+xi,x)}</li>`).join('')}</ul>
             <button class="linkb" data-subadd="${si}">+ subtema</button>
             <span class="mono micro">${s.micro||''}</span>
             ${s.hito||s.cierre?`<span class="entb">${s.cierre?'Entregable formal · cierre del producto':'Entregable formal del producto'}</span>`:''}</td>
           <td class="c"><input class="hin" type="number" min="0" max="8" value="${s.ht}" data-hp="unidades.${fsUni}.sesiones.${si}.ht"></td>
           <td class="c"><input class="hin" type="number" min="0" max="8" value="${s.hp}" data-hp="unidades.${fsUni}.sesiones.${si}.hp"></td>
           ${fsCols.act?`<td><div class="cell-h">
               <span class="ed" contenteditable="true" data-ep="unidades.${fsUni}.sesiones.${si}.prac" data-act="1">${pintaAct(s.prac,s)}</span>
               <button class="tzs2" data-tzact="${si}" title="Trazabilidad: tarea clave de la función que aplica esta actividad">⛓</button></div>
               <span class="mono micro">${s.fx} · ${s.tarea}</span></td>
             <td>${ed('unidades.'+fsUni+'.sesiones.'+si+'.auto',s.auto)}</td>`:''}
           ${fsCols.crit?`<td>${ed('unidades.'+fsUni+'.sesiones.'+si+'.ent',s.ent)}</td>
             <td>${ed('unidades.'+fsUni+'.sesiones.'+si+'.crit',s.crit)}</td>`:''}
           <td class="c"><button class="recbtn2 ${pc>=90?'ok':pc>=60?'md':'lo'}" data-sesrec="${si}" title="Ver recursos de la sesión">${pc}%</button></td>
           <td class="c"><div class="ordb">
             <span class="grip2" draggable="true" data-dses="${si}" title="Arrastra para reordenar la sesión">⠿</span>
             <button data-mv="${si}|-1" title="Subir">▲</button><button data-mv="${si}|1" title="Bajar">▼</button>
             <button data-del="${si}" title="Eliminar sesión" class="dl">✕</button></div></td></tr>`}).join('')}
         </tbody><tfoot><tr><td></td><td style="text-align:right;font-weight:600">Totales de la unidad</td>
           <td class="c">${u.sesiones.reduce((a,s)=>a+s.ht,0)}</td><td class="c">${u.sesiones.reduce((a,s)=>a+s.hp,0)}</td>
           <td colspan="${(fsCols.act?2:0)+(fsCols.crit?2:0)+2}"></td></tr></tfoot></table></div>

       <div class="gxbar">
         <div class="ainote">✦ Génesys aplica la instrucción sobre esta unidad: agregar o quitar sesiones, subtemas, criterios, rúbrica, redistribuir horas o cambiar la clase del producto.</div>
         <div class="aibar"><textarea id="fsPrompt" rows="2" placeholder="Ej.: agrega una sesión · agrega un subtema a cada sesión · mejora los criterios · genera la rúbrica · redistribuye las horas · cambia el producto a modular"></textarea>
           <button class="send" id="fsSend" title="Ejecutar instrucción">➤</button></div>
         <div class="sugg"><span class="tlab">Sugerencias</span>
           ${['Agrega una sesión','Agrega un subtema a cada sesión','Mejora los criterios de evaluación','Genera la rúbrica de evaluación','Redistribuye las horas','Cambia el producto a modular']
             .map(x=>`<button class="btn sm" data-fsg="${esc(x)}">${esc(x)}</button>`).join('')}</div></div>
      </div></div>`;
  }
  else if(fsSec==='info'){
    main=`<div class="unitbox"><div class="uh"><h3>1. Información general</h3>
       <span class="chip" style="margin-left:auto">Datos del plan</span></div><div class="ub">
      <table class="mini"><tr><td>Asignatura</td><td><b>${esc(c.name)}</b> · <span class="mono">${c.code}</span></td></tr>
      <tr><td>Plan</td><td class="mono">${esc(state.plan.code)} · ${baseVer()} · vigencia ${esc(state.plan.vig)}</td></tr>
      <tr><td>Ciclo / créditos</td><td>${c.of?c.ciclo:'—'} / ${c.cr}</td></tr>
      <tr><td>Tipo</td><td>${TE_LABEL[c.te]} · ${TA_LABEL[c.ta]} · ${TIP[c.tip].lab}</td></tr>
      <tr><td>Dictado</td><td>${DIC[c.dic].lab}${c.dicv?' · '+DICV[c.dicv]:''}</td></tr>
      <tr><td>Horas</td><td>Teóricas ${d.htt} · prácticas ${d.hpt} · total ${d.tt}</td></tr>
      <tr><td>Clase de producto</td><td>${D.generado?`<b>${D.clase}</b>`:'<span style="color:var(--muted)">se define al construir</span>'}</td></tr>
      ${D.generado&&D.params?`<tr><td>Parámetros de construcción</td><td>Nombre: <b>${esc(D.params.nombre)}</b> · capacidades: ${D.params.caps.map(x=>x.toUpperCase()).join(', ')}</td></tr>
      <tr><td>Estructura de referencia</td><td>${esc(D.ref||'')}</td></tr>`:''}
      <tr><td>Prerrequisitos</td><td class="mono">${c.pre.length?c.pre.join(' · '):'—'}</td></tr>
      <tr><td>Docente que planifica</td><td>${esc(c.resp.plan)}</td></tr></table>
      ${D.generado?'':`<div class="emptybox" style="margin-top:12px"><div class="eb-t">El sílabo aún no se ha construido.</div>
        <button class="btn primary" data-gen="1">✦ Construir sílabo con parámetros mínimos</button>
        <div class="eb-s">Nombre del curso + capacidades marcadas en la matriz · momentos M1 a M9 del skill dc-3-3-estructura-curso.</div></div>`}</div></div>`;
  }
  else if(fsSec==='sum'){
    main=D.generado?`<div class="unitbox"><div class="uh"><h3>2. Sumilla</h3>
       <span class="chip" style="margin-left:auto">Editable</span></div><div class="ub">
      <p style="max-width:86ch;line-height:1.7;margin:0;font-size:13.5px">${ed('sumilla',D.sumilla)}</p>
      <div class="lockrow">La sumilla describe la naturaleza de la asignatura, su producto y su relación con el perfil de egreso. El resultado de aprendizaje y el producto del curso están en la sección 3.</div></div></div>`
     :vacio('2. Sumilla',3,'La sumilla se redacta desde el producto del curso y las capacidades que moviliza.');
  }
  else if(fsSec==='comp'){
    const grupos=[['e','Competencias de especialidad'],['d','Competencias específicas esenciales'],['g','Competencias generales']];
    main=`<div class="unitbox"><div class="uh"><h3>3. Competencias del perfil que desarrolla la asignatura</h3>
        <span class="chip" style="margin-left:auto">${Object.keys(c.caps).length} capacidades marcadas en la matriz</span></div><div class="ub">
      ${grupos.map(([bid,tit])=>{
        const b=BLOCKS.find(x=>x.id===bid),gs=b.groups.filter(g=>g.cols.some(col=>c.caps[col.id]));
        return `<div><div class="blocktit">${tit}</div>
          ${gs.length?gs.map(g=>{const gc=g.color.startsWith('--')?`var(${g.color})`:g.color;
            return `<div class="compcard" style="--gc:${gc}">
              <div class="ct"><span class="cdot"></span>${esc(g.name)}</div>
              <div class="caps">${g.cols.filter(col=>c.caps[col.id]).map(col=>`
                <div class="capline"><span class="mono">${col.id.toUpperCase()}</span>
                  <span class="cn">${esc(CAPS[col.id].name)}</span>
                  <span class="lvb">N${c.caps[col.id]}</span></div>`).join('')}</div></div>`}).join('')
           :`<p style="font-size:12.5px;color:var(--muted);margin:0 0 10px">La asignatura no registra aporte en este bloque de la matriz del plan.</p>`}</div>`}).join('')}
      <div class="lockrow">Las competencias y capacidades provienen de la matriz del plan de estudios: se editan allí, marcando el nivel en el cruce curso × capacidad.</div>
      <div class="subsec">
        <div class="blocktit">Resultado de aprendizaje y producto del curso</div>
        ${D.generado?`<div class="prodgrid">
          <div class="prodcard tz" data-tz="racurso"><h4>🎓 Resultado de aprendizaje del curso <span class="tzb">ver trazabilidad ▸</span></h4>
            <p><b>${ed('raCurso.titulo',D.raCurso.titulo)}</b></p><p>${ed('raCurso.def',D.raCurso.def)}</p></div>
          <div class="prodcard tz" data-tz="prodcurso" style="border-left-color:var(--amber)">
            <h4>◆ Producto del curso <span class="tipo ${D.clase==='Integrado'?'int':'mod'}">${D.clase}</span><span class="tzb">ver trazabilidad ▸</span></h4>
            <p><b>${ed('productoCurso.titulo',P.titulo)}</b></p><p>${ed('productoCurso.desc',P.desc)}</p>
            <div><span class="tlab">Entregables</span><ul>${P.entregables.map((x,i)=>`<li>${ed('productoCurso.entregables.'+i,x)}</li>`).join('')}</ul></div></div>
          </div>
          <div style="margin-top:10px"><span class="tlab">Criterios del curso · uno por capacidad</span>
            <div class="flist" style="margin-top:5px">${D.criteriosCurso.map((x,i)=>`<div class="frow">
              <span class="mono">${x.cap?x.cap.toUpperCase():'—'}</span><span class="nm">${ed('criteriosCurso.'+i+'.txt',x.txt)}</span>
              <span class="capb">${x.fx||''} · ${x.tarea||''}</span></div>`).join('')}</div></div>`
         :`<div class="emptybox"><div class="eb-t">El resultado de aprendizaje, el producto y los criterios del curso se generan con el constructor.</div>
            ${SKEL(3)}<button class="btn primary" data-gen="1">✦ Generar sílabo con el constructor</button></div>`}
      </div></div></div>`;
  }
  else if(fsSec==='est'){
    const E=D.estrategias,li=a=>a.map((x,i)=>`<li>${esc(x)}</li>`).join('');
    if(D.generado&&E) main=`<div class="unitbox"><div class="uh"><h3>5. Estrategias y habilitadores</h3><span class="chip ok" style="margin-left:auto">Investigado por Génesys</span></div><div class="ub"><div class="prodgrid">
      <div class="prodcard"><h4>Estrategias didácticas</h4><ul>${li(E.didacticas)}</ul></div>
      <div class="prodcard"><h4>Herramientas y recursos de productividad</h4><ul>${li(E.recursos)}</ul></div>
      <div class="prodcard"><h4>Uso de IA generativa</h4><ul>${li(E.ia)}</ul></div>
      <div class="prodcard"><h4>Habilitadores de la modalidad ${esc(MODL[state.modalidad])}</h4><ul>${li(E.modalidad)}</ul></div>
      <div class="prodcard"><h4>Responsable de recursos</h4>
        <p>${esc(c.resp.rec)} — avance ${c.rec}% de los componentes del aula virtual.</p>
        <button class="btn sm" id="fsRec2">Ver detalle de recursos</button></div></div></div></div>`;
    else main=D.generado?`<div class="unitbox"><div class="uh"><h3>5. Estrategias y habilitadores</h3></div><div class="ub"><div class="prodgrid">
      <div class="prodcard"><h4>Estrategias didácticas</h4><ul>
        <li>Aprendizaje basado en el producto del curso (${D.clase.toLowerCase()})</li>
        <li>Taller guiado con registro de decisiones técnicas</li>
        <li>Revisión entre pares con la lista de verificación</li>
        <li>Sustentación final con rúbrica</li></ul></div>
      <div class="prodcard"><h4>Estándares y recursos de productividad</h4><ul>
        <li>Estándares declarados en la matriz funcional de la especialidad (paso 2.2)</li>
        <li>Herramientas del curso registradas en la ficha 2.6</li>
        <li>IA generativa con declaración de uso en el entregable</li></ul></div>
      <div class="prodcard"><h4>Habilitadores de la modalidad ${esc(MODL[state.modalidad])}</h4><ul>
        <li>Sesiones síncronas grabadas por 72 horas</li>
        <li>Guía de aprendizaje autónomo por sesión (GDAA)</li>
        <li>Tutoría asíncrona con respuesta en 24 horas</li></ul></div>
      <div class="prodcard"><h4>Responsable de recursos</h4>
        <p>${esc(c.resp.rec)} — avance ${c.rec}% de los componentes del aula virtual.</p>
        <button class="btn sm" id="fsRec2">Ver detalle de recursos</button></div></div></div></div>`
     :vacio('5. Estrategias y habilitadores',4,'Las estrategias y los habilitadores se derivan de la clase del producto y de la modalidad.');
  }
  else if(fsSec==='eva'){
    if(D.generado&&D.evaluacion) main=`<div class="unitbox"><div class="uh"><h3>6. Evaluación</h3><span class="chip ok" style="margin-left:auto">Investigado por Génesys</span></div><div class="ub">
      <table class="mini"><tr><th>Unidad</th><th>Descripción de evaluación</th><th>Instrumento</th><th>Fecha</th><th>Peso</th></tr>
      ${D.evaluacion.map(r=>`<tr><td>${esc(r[0])}</td><td>${esc(r[1])}</td><td>${esc(r[2])}</td><td>${esc(r[3])}</td><td class="r">${esc(r[4])}</td></tr>`).join('')}</table>
      <p style="font-size:12.5px;color:var(--muted);margin:0">${esc(D.evalNota||'')}</p></div></div>`;
    else main=D.generado?`<div class="unitbox"><div class="uh"><h3>6. Evaluación</h3></div><div class="ub">
      <table class="mini"><tr><th>Unidad</th><th>Descripción de evaluación</th><th>Instrumento</th><th>Sesión de cierre</th><th>Peso</th></tr>
      ${D.unidades.map(x=>`<tr><td>Unidad ${x.n}</td><td>${esc(x.producto.titulo)}</td><td>Rúbrica analítica</td>
        <td class="r">${x.sesiones.length}</td><td class="r">${Math.round(85/D.unidades.length)} %</td></tr>`).join('')}
      <tr><td>Transversal</td><td>Entregables de sesión y participación en el aula virtual</td><td>Lista de cotejo</td><td class="r">—</td><td class="r">15 %</td></tr></table>
      <p style="font-size:12.5px;color:var(--muted);margin:0">Cada sesión produce un entregable; los entregables marcados en color forman el producto de la unidad. Nota mínima aprobatoria 12.</p></div></div>`
     :vacio('6. Evaluación',3,'El plan de evaluación se arma con los productos de unidad y sus criterios.');
  }
  else{
    if(D.generado&&D.referencias) main=`<div class="unitbox"><div class="uh"><h3>7. Referencias</h3><span class="chip" style="margin-left:auto">${D.referencias.length} referencias · APA 7</span></div><div class="ub">
      <ul style="margin:0;padding-left:18px;line-height:1.8;max-width:90ch;color:var(--ink-2)">
      ${D.referencias.map((r,i)=>`<li>${ed('referencias.'+i,r)}</li>`).join('')}</ul></div></div>`;
    else main=D.generado?`<div class="unitbox"><div class="uh"><h3>7. Referencias</h3></div><div class="ub">
      <ul style="margin:0;padding-left:18px;line-height:1.8;max-width:80ch;color:var(--ink-2)">
      <li>${ed('ref0','Bibliografía base de la línea formativa declarada en la Fase 3 del rediseño curricular.')}</li>
      <li>${ed('ref1','Estándares y guías técnicas de la matriz funcional de recursos de productividad.')}</li>
      <li>${ed('ref2','Repositorio institucional UPeU y bases de datos suscritas.')}</li></ul></div></div>`
     :vacio('7. Referencias',3,'Las referencias se toman de la bibliografía de la línea formativa.');
  }
  const pend=D.generado&&!D.hechas.includes(fsSec);
  $('#fsMain').innerHTML=(pend?`<div class="pendbar">
     <span class="pdot"></span><span>Sección en borrador: revisa y confirma su contenido.</span>
     <button class="btn sm" id="pendOk">Marcar como hecha</button></div>`:'')+main;
  $('#fsMain').classList.toggle('pendiente',pend);
  const pk=$('#pendOk');if(pk)pk.onclick=()=>{D.hechas.push(fsSec);renderFS()};
  $('#fsMain').querySelectorAll('[data-gen]').forEach(b=>b.onclick=()=>openGenParams());
  wireFS(c,D);
}

function reNum(u){u.sesiones.forEach((s,i)=>{s.n=i+1;s.cierre=(i===u.sesiones.length-1);s.hito=(i===1||s.cierre)})}
function fsAddSes(){
  const c=byCode(fsCode),D=silDoc(c),u=D.unidades[fsUni];
  if(u.sesiones.length>=8){toast('Una unidad admite como máximo 8 sesiones (regla del constructor).','bad');return false}
  const last=u.sesiones[u.sesiones.length-1];
  u.sesiones.push({n:0,tema:'Nuevo tema de la sesión',subtemas:['Primer subtema','Segundo subtema'],ht:2,hp:2,
    prac:'Aplica el primer subtema en el caso asignado con el recurso del curso.',
    auto:'Completa el avance del producto y lo entrega en el aula virtual.',
    ent:'Avance del producto de la unidad',crit:'Elabora el avance con sustento técnico y según el estándar.',
    hito:false,cierre:false,fx:last?last.fx:'F1',tarea:last?last.tarea:'T1.1',micro:`TE-0${fsUni+1}.${u.sesiones.length+1}`,
    rec:Object.fromEntries(RECSES.map(([k])=>[k,false]))});
  reNum(u);return true;
}
function wireFS(c,D){
  $('#fsSide').querySelectorAll('[data-fsec]').forEach(b=>b.onclick=()=>{fsSec=b.dataset.fsec;renderFS()});
  $('#fsSide').querySelectorAll('[data-fsuni]').forEach(b=>b.onclick=()=>{fsSec='uni';fsUni=+b.dataset.fsuni;renderFS()});
  const au=$('#fsAddUni');
  if(au)au.onclick=()=>{
    if(D.unidades.length>=4){toast('El sílabo admite como máximo 4 unidades.','bad');return}
    const n=D.unidades.length+1,base=JSON.parse(JSON.stringify(D.unidades[D.unidades.length-1]));
    base.n=n;base.titulo=`Unidad ${n} · Nueva unidad`;base.ra.titulo='Resultado de la nueva unidad';
    base.producto.titulo=`Producto de la unidad ${n}`;
    D.unidades.push(base);D.productoCurso.entregables.push(`Producto de la unidad ${n}`);
    logChange('revision',`${c.code}: se agregó la unidad ${n} al sílabo.`);fsUni=n-1;fsSec='uni';renderFS();
    toast(`Unidad ${n} agregada.`,'good');
  };
  $('#fsRec').onclick=()=>{fsClose();openRecursos(fsCode)};
  const r2=$('#fsRec2');if(r2)r2.onclick=()=>{fsClose();openRecursos(fsCode)};
  $('#fsResp').onclick=()=>{fsClose();openResp(fsCode)};

  /* colapsar componentes de la unidad */
  $('#fsMain').querySelectorAll('[data-tgl]').forEach(b=>b.onclick=e=>{
    e.stopPropagation();fsOpen[b.dataset.tgl]=!fsOpen[b.dataset.tgl];renderFS()});
  const tcm=$('#tglComp');
  if(tcm)tcm.onclick=()=>{const any=fsOpen.ra||fsOpen.prod||fsOpen.crit;
    fsOpen={ra:!any,prod:!any,crit:!any};renderFS()};

  /* edición en línea */
  $('#fsMain').querySelectorAll('[data-ep]').forEach(el=>{
    el.onblur=()=>{const p=el.dataset.ep,v=el.innerText.replace(/\s+/g,' ').trim(),old=gp(D,p);
      if(v===String(old==null?'':old))return;
      sp(D,p,v);logChange('revision',`${c.code}: sílabo editado (${p.replace(/\./g,' › ')}).`);
      if(el.dataset.act)renderFS()};
    el.onkeydown=e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();el.blur()}};
  });
  $('#fsMain').querySelectorAll('[data-hp]').forEach(inp=>inp.onchange=()=>{
    sp(D,inp.dataset.hp,Math.max(0,+inp.value||0));
    logChange('revision',`${c.code}: horas de sesión ajustadas.`);renderFS()});
  $('#fsMain').querySelectorAll('[data-subadd]').forEach(b=>b.onclick=()=>{
    D.unidades[fsUni].sesiones[+b.dataset.subadd].subtemas.push('Nuevo subtema');renderFS()});

  /* sesiones */
  $('#fsMain').querySelectorAll('[data-mv]').forEach(b=>b.onclick=()=>{
    const [i,dir]=b.dataset.mv.split('|').map(Number),ss=D.unidades[fsUni].sesiones,j=i+dir;
    if(j<0||j>=ss.length)return;[ss[i],ss[j]]=[ss[j],ss[i]];reNum(D.unidades[fsUni]);
    logChange('revision',`${c.code}: se reordenaron las sesiones de la unidad ${fsUni+1}.`);renderFS()});
  $('#fsMain').querySelectorAll('[data-del]').forEach(b=>b.onclick=()=>{
    const ss=D.unidades[fsUni].sesiones;
    if(ss.length<=4){toast('Una unidad necesita al menos 4 sesiones (regla del constructor).','bad');return}
    const s=ss.splice(+b.dataset.del,1)[0];reNum(D.unidades[fsUni]);
    logChange('revision',`${c.code}: se eliminó la sesión «${s.tema}».`);renderFS();toast('Sesión eliminada.','good')});
  const add=$('#sesAdd');if(add)add.onclick=()=>{if(fsAddSes()){
    logChange('revision',`${c.code}: se agregó una sesión a la unidad ${fsUni+1}.`);renderFS();toast('Sesión agregada.','good')}};
  const ca=$('#critAdd');if(ca)ca.onclick=()=>{
    D.unidades[fsUni].criterios.push({txt:'Nuevo criterio de evaluación del producto.',cap:Object.keys(c.caps)[0]||'',fx:'F1',tarea:'T1.1'});
    logChange('revision',`${c.code}: se agregó un criterio a la unidad ${fsUni+1}.`);renderFS()};
  const tc=$('#tglCrit');if(tc)tc.onclick=()=>{fsCols.crit=!fsCols.crit;renderFS()};
  const ta=$('#tglAct');if(ta)ta.onclick=()=>{fsCols.act=!fsCols.act;renderFS()};
  $('#fsMain').querySelectorAll('[data-sesrec]').forEach(b=>b.onclick=()=>openRecSesion(+b.dataset.sesrec));
  let dragSes=null;
  const clrDrop=()=>$('#fsMain').querySelectorAll('tr[data-srow]').forEach(t=>t.classList.remove('dropline','dropline-a','dragging'));
  $('#fsMain').querySelectorAll('[data-dses]').forEach(g=>{
    g.ondragstart=e=>{dragSes=+g.dataset.dses;g.closest('tr').classList.add('dragging');
      e.dataTransfer.effectAllowed='move';try{e.dataTransfer.setData('text/plain','ses')}catch(_){}};
    g.ondragend=()=>{dragSes=null;clrDrop()};
  });
  $('#fsMain').querySelectorAll('tr[data-srow]').forEach(tr=>{
    tr.ondragover=e=>{if(dragSes===null)return;e.preventDefault();e.dataTransfer.dropEffect='move';
      const to=+tr.dataset.srow;clrDrop();
      $('#fsMain').querySelectorAll('[data-dses]').forEach(g=>{if(+g.dataset.dses===dragSes)g.closest('tr').classList.add('dragging')});
      tr.classList.add(to<dragSes?'dropline':'dropline-a')};
    tr.ondragleave=()=>tr.classList.remove('dropline','dropline-a');
    tr.ondrop=e=>{if(dragSes===null)return;e.preventDefault();
      const to=+tr.dataset.srow,ss=D.unidades[fsUni].sesiones;
      if(to===dragSes){clrDrop();return}
      const [m]=ss.splice(dragSes,1);ss.splice(to,0,m);reNum(D.unidades[fsUni]);
      logChange('revision',`${c.code}: la sesión «${m.tema}» se movió a la posición ${to+1} de la unidad ${fsUni+1}.`);
      dragSes=null;renderFS();toast(`Sesión reordenada a la posición <b>${to+1}</b>.`,'good')};
  });
  $('#fsMain').querySelectorAll('[data-tzact]').forEach(b=>b.onclick=e=>{e.stopPropagation();openTrazaAct(+b.dataset.tzact)});
  $('#fsMain').querySelectorAll('[data-tzcont]').forEach(b=>b.onclick=e=>{e.stopPropagation();openTrazaCont(+b.dataset.tzcont)});
  $('#fsMain').querySelectorAll('[data-tz]').forEach(el=>{
    const t=el.querySelector('.tzb');if(t)t.onclick=e=>{e.stopPropagation();openTraza(el.dataset.tz)}});

  const send=$('#fsSend');
  if(send){
    send.onclick=()=>{const v=$('#fsPrompt').value.trim();if(!v){toast('Escribe la instrucción que Génesys debe ejecutar.','bad');return}
      fsGenesys(v);$('#fsPrompt').value=''};
    $('#fsPrompt').onkeydown=e=>{if(e.key==='Enter'&&(e.ctrlKey||e.metaKey))send.onclick()};
    $('#fsMain').querySelectorAll('[data-fsg]').forEach(b=>b.onclick=()=>{$('#fsPrompt').value=b.dataset.fsg;$('#fsPrompt').focus()});
  }
}
function openRecSesion(si){
  const c=byCode(fsCode),D=silDoc(c),s=D.unidades[fsUni].sesiones[si],dlg=$('#dlg');dlg.classList.remove('big');
  const draw=()=>{
    const done=RECSES.filter(([k])=>s.rec[k]).length;
    $('#dlgTitle').textContent=`Recursos de la sesión ${s.n} · ${c.code}`;
    $('#dlgSub').textContent=`${s.tema} — ${done} de ${RECSES.length} elaborados (${recPctSes(s)}%)`;
    $('#dlgBody').innerHTML=`<div class="alert ${done===RECSES.length?'ok':done>=RECSES.length*0.6?'warn':'crit'}">Marca lo que ya está cargado en el aula virtual; lo pendiente queda resaltado.</div>
     <div class="recgr">${RECSES.map(([k,lab])=>`<label class="recit ${s.rec[k]?'done':'pend'}">
        <input type="checkbox" ${s.rec[k]?'checked':''} data-rs="${k}"><span class="k">${k}</span><span class="n">${esc(lab)}</span></label>`).join('')}</div>`;
    $('#dlgBody').querySelectorAll('[data-rs]').forEach(i=>i.onchange=()=>{
      s.rec[i.dataset.rs]=i.checked;
      logChange('revision',`${c.code}: recurso ${i.dataset.rs} de la sesión ${s.n} ${i.checked?'marcado como elaborado':'desmarcado'}.`);
      draw();renderFS()});
  };
  draw();$('#dlgFoot').innerHTML=`<button class="btn" value="ok">Cerrar</button>`;dlg.showModal();
}
function tzWrap(titulo,sub,pasos,nota){
  const dlg=$('#dlg');dlg.classList.add('big');
  $('#dlgTitle').textContent=titulo;$('#dlgSub').textContent=sub;
  $('#dlgBody').innerHTML=`<div class="tzchain">${pasos.map(([n,t,src,body],i)=>`
    <div class="tzstep"><div class="tzn">${n}</div><div class="tzc">
      <div class="tzt">${esc(t)}</div><div class="tzs">${esc(src)}</div><div class="tzb2">${body}</div></div></div>
    ${i<pasos.length-1?'<div class="tzarrow">▼</div>':''}`).join('')}</div>
   <div class="alert ok">${nota}</div>`;
  $('#dlgFoot').innerHTML=`<button class="btn" value="ok">Cerrar</button>`;dlg.showModal();
}
function openTrazaAct(si){
  const c=byCode(fsCode),D=silDoc(c),u=D.unidades[fsUni],s=u.sesiones[si],F=fx(D,s.fx),T=tareaDe(D,s.fx,s.tarea);
  tzWrap(`Trazabilidad de la actividad práctica · sesión ${s.n}`,
   `${c.code} · ${c.name} — actividad → tarea clave → función`,
   [['1','Función profesional que el curso tributa','Paso 2.1 · paquete funcional validado',
     `<b>${esc(F?F.nombre:'—')}</b> <span class="capb">${s.fx}</span><br>
      <span class="tlab">Producto de la función</span> ${esc(F?F.producto:'')}<br>
      <span class="tlab">Evidencia en el puesto</span> ${esc(F?F.evidencia:'')}`],
    ['2','Tarea clave que la actividad aplica','Paso 2.1 · tareas clave de la función',
     `<b>${esc(T?T.txt:'—')}</b> <span class="capb">${s.tarea}</span>
      <div style="margin-top:6px"><span class="tlab">Otras tareas de la función</span>
      <ul style="margin:3px 0 0;padding-left:16px">${(F?F.tareas:[]).filter(t=>t.id!==s.tarea).map(t=>`<li>${esc(t.txt)} <span class="capb">${t.id}</span></li>`).join('')}</ul></div>`],
    ['3','Actividad práctica de la sesión','Paso 3.3 · M9 · la práctica aplica el tema en una tarea clave con su recurso',
     `${pintaAct(s.prac,s)}<div style="margin-top:6px"><span class="tlab">Tema</span> ${esc(s.tema)} <span class="capb">${s.micro||''}</span></div>`],
    ['4','Actividad autónoma y entregable','Paso 3.3 · la autónoma nace de la práctica y produce el avance',
     `${esc(s.auto)}<div style="margin-top:6px"><span class="tlab">Entregable de sesión</span> ${esc(s.ent)}<br>
      <span class="tlab">Criterio</span> ${esc(s.crit)}</div>`]],
   'Regla: la actividad práctica aplica el tema en una tarea clave con su recurso; la actividad autónoma produce el avance del producto.');
}
function openTrazaCont(si){
  const c=byCode(fsCode),D=silDoc(c),u=D.unidades[fsUni],s=u.sesiones[si],M=microDe(D,s.micro),F=fx(D,s.fx);
  const macro=M?M.macro:null,micro=M?M.micro:null;
  tzWrap(`Trazabilidad del contenido · sesión ${s.n}`,
   `${c.code} · ${c.name} — subtemas → micro tema → tema nuclear → función`,
   [['1','Función y su campo de conocimiento','Paso 2.1 · función que el curso tributa',
     `<b>${esc(F?F.nombre:'—')}</b> <span class="capb">${s.fx}</span><br>
      <span class="tlab">Los temas nucleares se extraen de su producto, tareas y recursos</span> (paso 2.3)`],
    ['2','Tema nuclear de la función (macro tema)','Paso 2.3 · banco de temas de la escuela',
     `<b>${esc(macro?macro.nombre:'—')}</b> <span class="capb">${macro?macro.id:''}</span><br>
      <span class="tlab">Es el título de la unidad</span> ${esc(u.titulo)}`],
    ['3','Micro tema de la sesión','Paso 2.3 · se copia del banco, nunca se crea aquí',
     `<b>${esc(micro?micro.nombre:s.tema)}</b> <span class="capb">${s.micro||''}</span>
      <div style="margin-top:5px"><span class="tlab">Origen</span> ${esc(micro?micro.origen:'banco')} ·
      <span class="tlab">Nivel</span> ${esc(micro?micro.nivel:'—')}</div>
      <div style="margin-top:5px"><span class="tlab">Micro temas hermanos del mismo tema nuclear</span>
      <ul style="margin:3px 0 0;padding-left:16px">${(macro?macro.micro:[]).filter(m=>m.id!==s.micro).map(m=>`<li>${esc(m.nombre)} <span class="capb">${m.id}</span></li>`).join('')}</ul></div>`],
    ['4','Subtemas desagregados en el sílabo','Paso 3.3 · M5 · regla híbrida: se desagrega, no se inventa',
     `<ul style="margin:0;padding-left:16px">${s.subtemas.map(x=>`<li>${esc(x)} <span class="capb">desagregado</span></li>`).join('')}</ul>
      <div style="margin-top:6px"><span class="tlab">Tarea clave que los aplica</span> ${esc((tareaDe(D,s.fx,s.tarea)||{}).txt||'')} <span class="capb">${s.tarea}</span></div>`]],
   'Regla híbrida: el macro tema y el micro tema se copian del banco; solo los subtemas se desagregan en el sílabo. Los contenidos son saberes, sin verbos ni nombres de herramientas.');
}
function openTraza(kind){
  const c=byCode(fsCode),D=silDoc(c),u=D.unidades[fsUni],caps=Object.keys(c.caps);
  const F=D.funciones[0],F2=D.funciones[1]||F;
  const capTxt=caps.length?caps.map(id=>`${id.toUpperCase()} · ${CAPS[id].name} (N${c.caps[id]})`).join(' · '):'sin capacidades marcadas en la matriz';
  if(kind==='prod'||kind==='prodcurso'){
    tzWrap('Trazabilidad del producto',`${c.code} · ${c.name} — el producto manda: función → curso → unidad → sesión`,
     [['1','Funciones profesionales asignadas','Paso 2.1 · paquete funcional validado por expertos',
       D.funciones.map(f=>`<div style="margin-bottom:5px"><b>${esc(f.nombre)}</b> <span class="capb">${f.id}</span><br>
        <span class="tlab">Producto</span> ${esc(f.producto)}<br><span class="tlab">Evidencia</span> ${esc(f.evidencia)}</div>`).join('')],
      ['2','Producto del curso','Paso 2.6 (ficha) y 3.3 (estructura del curso)',
       `<b>${esc(D.productoCurso.titulo)}</b><br>${esc(D.productoCurso.desc)}<br>
        <span class="tlab">Clase</span> ${D.clase} — ${D.clase==='Integrado'?'los productos de unidad se integran en un producto funcional':'los productos de unidad son piezas independientes reunidas en portafolio'}`],
      ['3',`Producto de la unidad ${u?u.n:''}`,'Paso 3.3 · partición del producto (M6)',
       u?`<b>${esc(u.producto.titulo)}</b><br>${esc(u.producto.desc)}<br><span class="tlab">Regla</span> ${esc(u.producto.origen)}`:'—'],
      ['4','Entregables de sesión','Paso 3.3 · un entregable por sesión',
       u?`<ul style="margin:4px 0 0;padding-left:16px">${u.sesiones.map(s=>`<li>Sesión ${s.n} — ${esc(s.ent)} <span class="capb">${s.tarea}</span>${s.cierre?' <b>(cierre: sustenta el producto)</b>':''}</li>`).join('')}</ul>`:'—']],
     'Regla del constructor: el producto manda. Producto del curso → productos de unidad → entregables de sesión → sesiones. Nunca al revés.');
  }else{
    tzWrap('Trazabilidad del resultado de aprendizaje',`${c.code} · ${c.name} — función → capacidad → curso → unidad → criterio`,
     [['1','Función profesional y su evidencia','Paso 2.1 · paquete funcional',
       `<b>${esc(F?F.nombre:'')}</b> <span class="capb">${F?F.id:''}</span><br>
        <span class="tlab">Evidencia en el puesto</span> ${esc(F?F.evidencia:'')}<br>
        <span class="tlab">Segunda función</span> ${esc(F2?F2.nombre:'')} <span class="capb">${F2?F2.id:''}</span>`],
      ['2','Capacidades de la competencia','Matriz del plan de estudios (Fase 1)',
       `El techo de Bloom lo fija la capacidad: ${esc(capTxt)}`],
      ['3','Resultado de aprendizaje del curso','Paso 3.3 · M4',
       `<b>${esc(D.raCurso.titulo)}</b><br>${esc(D.raCurso.def)}<br><span class="tlab">Origen</span> ${esc(D.raCurso.origen)}`],
      ['4',`Resultado de aprendizaje de la unidad ${u?u.n:''}`,'Paso 3.3 · M7',
       u?`<b>${esc(u.ra.titulo)}</b><br>${esc(u.ra.def)}<br><span class="tlab">Origen</span> ${esc(u.ra.origen)}`:'—'],
      ['5','Criterios de la unidad','Paso 3.3 · M8 · un criterio moviliza una sola capacidad',
       u?`<ul style="margin:4px 0 0;padding-left:16px">${u.criterios.map(x=>`<li>${esc(x.txt)}${x.cap?` <span class="capb">${x.cap.toUpperCase()}</span>`:''}${x.tarea?` <span class="capb">${x.tarea}</span>`:''}</li>`).join('')}</ul>`:'—']],
     'Bloom en cascada: criterio ≤ resultado de unidad ≤ resultado del curso ≤ capacidad.');
  }
}
function fsGenesys(txt){
  const c=byCode(fsCode),D=silDoc(c);
  if(!D.generado){toast('Primero genera el sílabo con el constructor; después Génesys puede ajustarlo.','bad');return}
  const u=D.unidades[fsUni],t=txt.toLowerCase(),hechos=[];
  if(/(agrega|añad|sum|inserta|más|otra)\w*\s*(una\s+)?sesi[óo]n/.test(t)){if(fsAddSes())hechos.push('se agregó una sesión al final de la unidad')}
  const del=t.match(/(elimina|quita|borra)\w*\s*(la\s+)?sesi[óo]n\s*(\d+)?/);
  if(del){const ss=u.sesiones,idx=del[3]?(+del[3]-1):ss.length-1;
    if(ss.length<=4)hechos.push('no se eliminó ninguna sesión: la unidad está en el mínimo de 4');
    else if(idx>=0&&idx<ss.length){const s=ss.splice(idx,1)[0];reNum(u);hechos.push(`se eliminó la sesión «${s.tema}»`)}}
  if(/subtema/.test(t)){u.sesiones.forEach(s=>s.subtemas.push('Aspecto complementario del tema'));hechos.push('se agregó un subtema a cada sesión')}
  if(/criterio/.test(t)&&!/r[úu]brica/.test(t)){u.criterios.forEach(x=>{if(!/^Evalúa con evidencia/.test(x.txt))
    x.txt='Evalúa con evidencia: '+x.txt.charAt(0).toLowerCase()+x.txt.slice(1)});hechos.push('se reforzaron los criterios con la exigencia de evidencia')}
  if(/r[úu]brica/.test(t)){u.criterios.forEach(x=>{if(!/niveles:/.test(x.txt))x.txt+=' (niveles: logrado · en proceso · inicial)'});
    hechos.push('se añadieron los niveles de la rúbrica a cada criterio')}
  if(/modular/.test(t)){D.clase='Modular';D.unidades.forEach(x=>{x.producto.tipo='Modular';
    x.producto.origen='Pieza independiente del portafolio: se evalúa y se cierra en la unidad.'});hechos.push('la clase del producto cambió a Modular')}
  else if(/integrad/.test(t)){D.clase='Integrado';D.unidades.forEach(x=>{x.producto.tipo='Integrado';
    x.producto.origen='Parte del producto del curso: al integrarse con el resto forma el producto funcional.'});hechos.push('la clase del producto cambió a Integrado')}
  if(/hora/.test(t)){const d=dist(c),n=u.sesiones.length,ht=Math.max(1,Math.round(d.htt/D.unidades.length/n)),hp=Math.max(1,Math.round(d.hpt/D.unidades.length/n));
    u.sesiones.forEach(s=>{s.ht=ht;s.hp=hp});hechos.push(`las horas se redistribuyeron en ${ht} HT y ${hp} HP por sesión`)}
  if(/actividad(es)?\s*pr[áa]ctica/.test(t)){u.sesiones.forEach(s=>{if(!/registra la evidencia/.test(s.prac))
    s.prac=s.prac.replace(/\.$/,'')+`, y registra la evidencia en ${s.ent.toLowerCase()}.`});hechos.push('se enriquecieron las actividades prácticas')}
  if(/aut[óo]noma/.test(t)){u.sesiones.forEach(s=>{if(!/lista de verificación/.test(s.auto))
    s.auto=s.auto.replace(/\.$/,'')+' aplicando la lista de verificación del producto.'});hechos.push('se enriquecieron las actividades autónomas')}
  if(/(recurso|lectura|gu[íi]a|material)/.test(t)){u.sesiones.forEach(s=>{s.rec.GT=true;s.rec.GP=true;s.rec.GDAA=true});
    hechos.push('se planificaron las guías teórica, práctica y de aprendizaje autónomo')}
  if(/sumilla/.test(t)){D.sumilla=D.sumilla.replace(/\s*$/,'')+` La asignatura cierra con la sustentación del ${D.productoCurso.titulo.toLowerCase()}.`;hechos.push('se amplió la sumilla')}
  if(!hechos.length){toast('Génesys no reconoció la instrucción. Prueba con: <b>agrega una sesión</b>, <b>agrega un subtema</b>, <b>mejora los criterios</b>, <b>genera la rúbrica</b>, <b>redistribuye las horas</b>, <b>cambia el producto a modular</b>, <b>planifica los recursos</b>.','bad');return}
  logChange('revision',`${c.code}: Génesys ejecutó «${txt}» sobre la unidad ${u.n} — ${hechos.join('; ')}.`);
  renderFS();toast(`Génesys aplicó la instrucción: ${hechos.join('; ')}.`,'good');
}
function openGenParams(){
  const c=byCode(fsCode),D=silDoc(c),caps=capsMarcadas(c),dlg=$('#dlg');dlg.classList.add('big');
  const B=bancoDe(c,'auto');
  $('#dlgTitle').textContent='Constructor de sílabo · parámetros mínimos';
  $('#dlgSub').textContent=`${c.code} — con el nombre del curso y las capacidades marcadas en la matriz basta para construir el sílabo`;
  $('#dlgBody').innerHTML=`
   <div class="prodgrid">
     <div class="prodcard"><h4>① Nombre del curso</h4>
       <div class="field"><input id="gpName" value="${esc(c.name)}"></div>
       <p style="font-size:11.5px;color:var(--muted);margin-top:5px">Con el nombre se reconoce el campo del curso y se carga la estructura de unidades de referencia.</p></div>
     <div class="prodcard" style="border-left-color:var(--bl-e)"><h4>② Capacidades marcadas en la matriz</h4>
       ${caps.length?`<div style="display:grid;gap:4px;max-height:210px;overflow:auto">
         ${caps.map(id=>{const g=groupOfCap(id),gc=g.color.startsWith('--')?`var(${g.color})`:g.color;
           return `<label class="ck" style="border-left:3px solid ${gc}"><input type="checkbox" value="${id}" checked>
             <span><b class="mono">${id.toUpperCase()}</b> ${esc(CAPS[id].name)} <span class="capb">N${c.caps[id]}</span><br>
             <span style="font-size:11px;color:var(--muted)">${esc(g.name)}</span></span></label>`}).join('')}</div>`
        :`<div class="alert crit">El curso no tiene capacidades marcadas en la matriz. Marca al menos una en el cruce curso × capacidad antes de construir el sílabo.</div>`}</div>
   </div>
   <div class="grid3">
     <div class="field"><label>Estructura de referencia</label><select id="gpBanco">
       <option value="auto">Automática — ${esc(B.lab)}</option>
       ${BANCO.map(b=>`<option value="${b.k}" ${b.k===B.k?'':''}>${esc(b.lab)}</option>`).join('')}
       <option value="generico">Genérica por producto</option></select></div>
     <div class="field"><label>Unidades</label><select id="gpUni">
       <option value="0">Automática (según la referencia)</option><option value="2">2</option><option value="3">3</option></select></div>
     <div class="field"><label>Clase de producto</label><select id="gpClase">
       <option value="auto">Automática (${B.clase})</option><option value="Integrado">Integrado</option><option value="Modular">Modular</option></select></div>
   </div>
   ${window.SILABOS_GENESYS&&SILABOS_GENESYS[c.code]?`<div class="alert ok"><b>✦ Génesys ya investigó este curso:</b> ${esc(SILABOS_GENESYS[c.code].ref)}. Al construir, entrega el sílabo completo con 16 sesiones, evaluación y referencias verificables.</div>`:''}
   <div class="alert ok"><b>Referencia de unidades:</b> ${esc(B.ref)}. El constructor toma de allí los macro temas, micro temas y subtemas, y deriva el producto, los resultados de aprendizaje y los criterios de las capacidades marcadas (Bloom en cascada).</div>`;
  $('#dlgFoot').innerHTML=`<button class="btn" value="cancel">Cancelar</button>
    <button type="button" class="btn primary" id="gpRun" ${caps.length?'':'disabled'}>Construir sílabo</button>`;
  const run=$('#gpRun');
  if(run)run.onclick=()=>{
    const sel=[...$('#dlgBody').querySelectorAll('input[type=checkbox]:checked')].map(i=>i.value);
    if(!sel.length){toast('Selecciona al menos una capacidad.','bad');return}
    const P={nombre:$('#gpName').value.trim()||c.name,caps:sel,banco:$('#gpBanco').value,
      nUni:+$('#gpUni').value,clase:$('#gpClase').value,semanas:16};
    dlg.close();fsGenerar(P);
  };
  dlg.showModal();
}
/* Sílabos investigados por Génesys (datos/silabos-sis.js): reemplazan la estructura genérica del banco */
function silPreparado(c,params){
  const G=window.SILABOS_GENESYS&&SILABOS_GENESYS[c.code];if(!G)return null;
  const o=JSON.parse(JSON.stringify(G));o.params=params||{nombre:c.name,caps:capsMarcadas(c),nUni:0,clase:'auto',banco:'auto',semanas:16};
  return o;
}
function fsGenerar(params){
  const c=byCode(fsCode),D=silDoc(c);
  if(!params){openGenParams();return}
  const prep=silPreparado(c,params),full=prep||silBuild(c,params),traza=prep?SILABOS_GENESYS.TRAZA[c.code]:null,pausa=prep?1500:420;
  D.hechas=[];fsGen={i:0,p:params,traza};renderFS();
  const paso=i=>{
    if(i>=MOMENTOS.length){
      fsGen=null;D.generado=true;D.params=full.params;D.ref=full.ref;D.banco=full.banco;c.sil='ap';c.estVal='Validado';
      D.hist.push({v:'v'+(D.hist.length+1)+'.0',fecha:new Date().toLocaleDateString('es-PE',{day:'2-digit',month:'short',year:'numeric'}),
        estado:'Generado por Génesys',autor:c.resp.plan});
      D.hechas=FSSEC.map(x=>x[0]);
      if(prep)logChange('revision',`${c.code}: Génesys generó el sílabo investigado (M1 a M9): ${full.unidades.length} unidades, ${full.unidades.reduce((a,u)=>a+u.sesiones.length,0)} sesiones y ${full.referencias.length} referencias; fuentes: ${full.ref}.`);
      else logChange('revision',`${c.code}: sílabo construido con el constructor (M1 a M9) desde el nombre del curso y ${full.params.caps.length} capacidad(es) marcada(s); ${full.unidades.length} unidades y ${full.unidades.reduce((a,u)=>a+u.sesiones.length,0)} sesiones; referencia: ${full.ref}.`);
      renderMatrix();fsSec='uni';fsUni=0;renderFS();
      toast(`Sílabo de <b>${c.code}</b> construido desde ${full.params.caps.length} capacidad(es) de la matriz: producto ${full.clase}, ${full.unidades.length} unidades y ${full.unidades.reduce((a,u)=>a+u.sesiones.length,0)} sesiones.`,'good');
      return;
    }
    const m=MOMENTOS[i][0];
    if(m==='M1'){D.params=full.params;D.funciones=full.funciones}
    if(m==='M2'){D.ref=full.ref;D.banco=full.banco}
    if(m==='M3'){D.clase=full.clase;D.productoCurso=full.productoCurso}
    if(m==='M4'){D.criteriosCurso=full.criteriosCurso}
    if(m==='M5'){D.raCurso=full.raCurso;D.sumilla=full.sumilla}
    if(m==='M6'){D.temas=full.temas}
    if(m==='M7'){D.unidades=full.unidades.map(u=>({...u,criterios:[],sesiones:[]}))}
    if(m==='M8'){D.unidades.forEach((u,k)=>u.criterios=full.unidades[k].criterios)}
    if(m==='M9'){D.unidades.forEach((u,k)=>u.sesiones=full.unidades[k].sesiones);
      ['estrategias','evaluacion','evalNota','referencias'].forEach(k=>{if(full[k])D[k]=full[k];else delete D[k]})}
    MOMENTOS[i][2].forEach(s=>{if(!D.hechas.includes(s))D.hechas.push(s)});
    fsGen={i:i+1,p:params,traza};renderFS();setTimeout(()=>paso(i+1),pausa);
  };
  setTimeout(()=>paso(0),260);
}
$('#fsClose').onclick=fsClose;
$('#fsBack').onclick=fsClose;
$('#fsUnitPrev').onclick=()=>{fsSec='uni';fsUni=Math.max(0,fsUni-1);renderFS()};
$('#fsUnitNext').onclick=()=>{const D=silDoc(byCode(fsCode));fsSec='uni';fsUni=Math.min(Math.max(0,D.unidades.length-1),fsUni+1);renderFS()};
$('#fsIA').onclick=()=>openGenParams();
$('#fsTab').onclick=()=>openSilabo(fsCode);
$('#fsFull').onclick=async()=>{const el=$('#silfs');
  try{if(document.fullscreenElement){await document.exitFullscreen();$('#fsFull').textContent='⤢ Pantalla completa'}
    else{await el.requestFullscreen();$('#fsFull').textContent='⤡ Salir de pantalla completa'}}
  catch(e){toast('El navegador no permitió la pantalla completa; la vista ya ocupa toda la ventana.')}};

/* ===================== CURSOS POR ESPECIALIDAD (Fase 2 · paso 2.6) ===================== */
function especialidades(){
  const b=BLOCKS.find(x=>x.id==='e');
  return b.groups.map((g,i)=>({id:'E'+(i+1),nombre:g.name,caps:g.cols.map(c=>c.id),
    color:g.color.startsWith('--')?`var(${g.color})`:g.color}));
}
function espDeCurso(c,ESP){return ESP.map(e=>({e,n:e.caps.filter(id=>c.caps[id]).length})).filter(x=>x.n>0)}
function certDeCurso(code){const c=CERTS.find(x=>x.cursos.includes(code));return c?c.name:null}
function esTroncal(c,esp){
  if(state.troncal[c.code]!==undefined)return state.troncal[c.code];
  return esp.length>1;
}
function prorr(c,esp,id){const t=esp.reduce((a,x)=>a+x.n,0),n=(esp.find(x=>x.e.id===id)||{n:0}).n;
  return Math.round(c.cr*n/Math.max(1,t)*10)/10}
function valorEsp(e,nc,capNames){
  if(!state.valorEsp[e.id])state.valorEsp[e.id]={
    proposito:`Formar profesionales que resuelvan las necesidades reales de ${e.nombre.toLowerCase()} en organizaciones que dependen de la tecnología, con criterio técnico, ético y de servicio.`,
    propuesta:`Un itinerario de ${nc} cursos con productos profesionales verificables en ${e.nombre.toLowerCase()}, alineado a los estándares del sector y acompañado por agentes de IA y expertos que validan cada entregable.`,
    promesa:`Al cerrar la especialidad, el estudiante acredita nivel competente en ${capNames} y presenta su portafolio de productos certificado por la escuela.`};
  return state.valorEsp[e.id];
}
const HABICO=[['▤','var(--bl-e)'],['◫','var(--bl-p)'],['◍','var(--amber)'],['◈','var(--bl-g)']];
function habilidades(e,mine){
  const cods=mine.map(r=>r.c.code),out=[];
  CERTS.forEach(ct=>{
    const cs=mine.filter(r=>ct.cursos.includes(r.c.code));
    if(!cs.length)return;
    out.push({name:ct.name,desc:`Acredita ${ct.caps.map(x=>x.split('·')[1]?x.split('·')[1].trim():x).join(' y ').toLowerCase()} en el hito ${ct.stage}.`,
      tipo:'Por especialidad',n:cs.length,cr:Math.round(cs.reduce((a,r)=>a+prorr(r.c,r.esp,e.id),0)),
      c1:Math.min(...cs.map(r=>r.c.ciclo)),c2:Math.max(...cs.map(r=>r.c.ciclo)),cursos:cs.map(r=>r.c.code)});
  });
  if(mine.length>=3)out.unshift({name:`Certificación en ${e.nombre}`,
    desc:`Avala el dominio de las ${e.caps.length} capacidades de la competencia de especialidad y su producto integrador.`,
    tipo:'Por competencia',n:mine.length,cr:Math.round(mine.reduce((a,r)=>a+prorr(r.c,r.esp,e.id),0)),
    c1:Math.min(...mine.map(r=>r.c.ciclo)),c2:Math.max(...mine.map(r=>r.c.ciclo)),cursos:cods});
  return out;
}
function certCfg(e,habs){
  if(!state.certCfg[e.id])state.certCfg[e.id]={titulo:'Certificado',firma:'Decano Académico',
    codigo:`${state.plan.code}-${e.id}-001`,formato:'PDF',nombre:habs.length?habs[0].name:`Certificación en ${e.nombre}`};
  return state.certCfg[e.id];
}
function certPreview(e,cfg,big){
  return `<div class="certprev ${big?'big':''}">
    <div class="cp-in">
      <div class="cp-t">${esc(cfg.titulo||'Certificado')}</div>
      <div class="cp-s">otorgado a</div>
      <div class="cp-n">Nombre del Estudiante</div>
      <div class="cp-s">por haber cumplido los requisitos de la</div>
      <div class="cp-c">${esc(cfg.nombre)}</div>
      <div class="cp-f">
        <div class="cp-cod"><b>${esc(cfg.codigo)}</b><span>Código de validación</span></div>
        <div class="cp-seal">★</div>
        <div class="cp-sig"><b>${esc(cfg.firma)}</b><span>Firma autorizada</span></div>
      </div>
    </div></div>`;
}
function renderEsp(){
  const ESP=especialidades(),of_=oficiales();
  const rows=of_.map(c=>({c,esp:espDeCurso(c,ESP)}));
  const conEsp=rows.filter(r=>r.esp.length);
  const crEsp=sum(conEsp.map(r=>r.c),c=>c.cr);
  const totCaps=ESP.reduce((a,e)=>a+e.caps.length,0);
  const OP=state.espOpen;
  const isOpen=(id,n)=>!!OP[id+':'+n];
  const cargaDe=id=>conEsp.filter(r=>r.esp.some(x=>x.e.id===id)).reduce((a,r)=>a+prorr(r.c,r.esp,id),0);
  const tipoDe=c=>c.ta==='L'?['elec','◇','Electivo avanzado (tramo N3)']
    :(/práctica pre/i.test(c.name)?['prac','▣','Práctica preprofesional']:null);
  const allOn=n=>ESP.every(e=>isOpen(e.id,n));

  const tile=(id,n,tit,sub,chip,body)=>{
    const on=isOpen(id,n);
    return `<div class="sect ${on?'on':''}">
      <button class="sech2" data-tog="${id}:${n}">
        <span class="secn">${n}</span>
        <span class="st"><b>${tit}</b><span>${sub}</span></span>
        <span class="sv">${chip}</span><span class="ar">${on?'▴':'▾'}</span></button>
      ${on?`<div class="secb2">${body}</div>`:''}</div>`;
  };

  const col=(e)=>{
    const mine=conEsp.filter(r=>r.esp.some(x=>x.e.id===e.id)).sort((a,b)=>a.c.ciclo-b.c.ciclo);
    const carga=Math.round(cargaDe(e.id)*10)/10;
    const cuota=(state.cuotas[e.id]!=null)?state.cuotas[e.id]:Math.round(crEsp*e.caps.length/totCaps*10)/10;
    const desv=Math.round((carga-cuota)*10)/10,okq=Math.abs(desv)<=1;
    const capNames=e.caps.map(id=>CAPS[id].name.toLowerCase()).join(', ');
    const V=valorEsp(e,mine.length,capNames),habs=habilidades(e,mine),cfg=certCfg(e,habs);
    const nTron=mine.filter(r=>esTroncal(r.c,r.esp)).length,nElec=mine.filter(r=>r.c.ta==='L').length;
    const nCert=mine.filter(r=>certDeCurso(r.c.code)).length;
    const ciclos=mine.length?`${Math.min(...mine.map(r=>r.c.ciclo))} – ${Math.max(...mine.map(r=>r.c.ciclo))}`:'—';

    const s1=`<div class="vmini" style="--vc:var(--navy)"><b>Propósito</b>
        <p><span class="ed" contenteditable="true" data-vesp="${e.id}|proposito">${esc(V.proposito)}</span></p></div>
      <div class="vmini" style="--vc:var(--bl-e)"><b>Propuesta de valor</b>
        <p><span class="ed" contenteditable="true" data-vesp="${e.id}|propuesta">${esc(V.propuesta)}</span></p></div>
      <div class="vmini" style="--vc:var(--amber)"><b>Promesa</b>
        <p><span class="ed" contenteditable="true" data-vesp="${e.id}|promesa">${esc(V.promesa)}</span></p></div>`;

    const s2=`<div class="esplist">${mine.map(r=>{
        const tron=esTroncal(r.c,r.esp),ti=tipoDe(r.c),pr=prorr(r.c,r.esp,e.id);
        const cert=certDeCurso(r.c.code)||(r.c.tip==='C'?'Taller de certificación':null);
        const otras=r.esp.filter(x=>x.e.id!==e.id).map(x=>x.e.id);
        return `<div class="esprow">
          <button class="tronb ${tron?'':'off'}" data-tron="${r.c.code}|${e.id}"
            title="${tron?'Curso troncal — ver sustento':'No troncal — ver criterio y marcarlo'}">${tron?'⬢':'⬡'}</button>
          <button class="nm" data-esp-open="${r.c.code}">
            <b>${ti?`<span class="mk ${ti[0]}" style="margin-right:3px">${ti[1]}</span>`:''}${esc(r.c.name)}</b>
            <span>${r.c.code} · C${r.c.ciclo}${tron&&otras.length?' · troncal '+otras.join(','):(tron?' · troncal (dirección)':'')}</span></button>
          <span class="crc">${pr}${r.c.cr!==pr?'<em>de '+r.c.cr+'</em>':'<em>cr</em>'}</span>
          <span class="certmk" title="${cert?'Habilita: '+esc(cert):'No certifica'}">${cert?'◎':''}</span></div>`}).join('')
        ||'<div style="padding:10px;color:var(--muted);font-size:11.5px">Sin cursos adscritos en la matriz.</div>'}</div>`;

    const s3=habs.length?`<div class="habmini">${habs.map((h,i)=>{
        const [ic,cl]=HABICO[i%HABICO.length];
        return `<div class="hmini"><span class="hic2" style="--hc:${cl}">${ic}</span>
          <span class="hm"><b>${esc(h.name)}</b>
            <span class="hbadges"><span class="hbg ${h.tipo==='Por competencia'?'comp':'espe'}">${h.tipo}</span>
              <span class="hbg n">Cursos <b>${h.n}</b></span><span class="hbg n">Cr <b>${h.cr}</b></span>
              <span class="hbg n">Ciclo <b>${h.c1===h.c2?h.c1:h.c1+' – '+h.c2}</b></span></span></span></div>`}).join('')}
      <button class="btn sm" data-hab="${e.id}" style="width:100%;justify-content:center">Ver habilidades y requisitos</button>`
      :`<div class="alert warn" style="font-size:11.5px">Sin habilidades certificables: define el curso habilitante y su certificación.</div>`;

    const s4=`${certPreview(e,cfg)}
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px">
        <button class="btn sm" data-cert="${e.id}" style="flex:1;justify-content:center">Ver certificado</button>
        <button class="btn sm" data-req="${e.id}" style="flex:1;justify-content:center">Requisitos</button></div>`;

    return `<div class="espcol" style="--gc:${e.color}">
      <div class="colh"><span class="eid">${e.id}</span><h3>${esc(e.nombre)}</h3></div>
      <div class="colmeta">
        <span><b>${carga}</b> cr · ${mine.length} cursos · ${e.caps.length} cap.</span>
        <span class="cq">cuota <input class="qin" data-cuota="${e.id}" type="number" step="0.5" min="0" value="${cuota}">
          <span class="dchip ${okq?'ok':'warn'}" data-desv="${e.id}">${desv>0?'+':''}${desv}</span></span></div>
      <div class="sects">
        ${tile(e.id,1,'Propuesta de valor','Propósito · propuesta · promesa','3 componentes',s1)}
        ${tile(e.id,2,'Cursos',`${nTron} troncales · ${nElec} electivos · ciclos ${ciclos}`,`${mine.length} · ${carga} cr`,s2)}
        ${tile(e.id,3,'Habilidades certificables',`${nCert} cursos habilitan certificación`,`${habs.length} cert.`,s3)}
        ${tile(e.id,4,'Certificado',`${esc(cfg.firma)} · ${esc(cfg.codigo)}`,esc(cfg.formato),s4)}
      </div></div>`;
  };

  $('#paneEsp').innerHTML=`
    <h2 class="esptitle">Especialidades Certificables</h2>
    <div class="esptools">
      <span class="tblabel">Desplegar en todas</span>
      <button class="btn sm" id="tg1" aria-pressed="${allOn(1)}">${allOn(1)?'⊟':'⊞'} Ver propuesta de valor</button>
      <button class="btn sm" id="tg2" aria-pressed="${allOn(2)}">${allOn(2)?'⊟':'⊞'} Ver cursos</button>
      <button class="btn sm" id="tg3" aria-pressed="${allOn(3)}">${allOn(3)?'⊟':'⊞'} Ver habilidades</button>
      <button class="btn sm" id="tg4" aria-pressed="${allOn(4)}">${allOn(4)?'⊟':'⊞'} Ver certificado</button>
      <span class="hintx">⬢ troncal · ◇ electivo · ▣ práctica · ◎ certifica — clic en ⬢ para el sustento</span>
    </div>
    <div class="espcols">${ESP.map(col).join('')}</div>`;

  [1,2,3,4].forEach(n=>{$('#tg'+n).onclick=()=>{const v=!allOn(n);ESP.forEach(e=>OP[e.id+':'+n]=v);renderEsp()}});
  $('#paneEsp').querySelectorAll('[data-tog]').forEach(b=>b.onclick=()=>{
    const k=b.dataset.tog;OP[k]=!OP[k];renderEsp()});
  $('#paneEsp').querySelectorAll('[data-esp-open]').forEach(b=>b.onclick=()=>openProductos(b.dataset.espOpen));
  $('#paneEsp').querySelectorAll('[data-tron]').forEach(b=>b.onclick=()=>{
    const [code,eid]=b.dataset.tron.split('|');openTroncal(code,eid)});
  $('#paneEsp').querySelectorAll('[data-hab]').forEach(b=>b.onclick=()=>openHabilidades(b.dataset.hab));
  $('#paneEsp').querySelectorAll('[data-cert]').forEach(b=>b.onclick=()=>openCertificado(b.dataset.cert));
  $('#paneEsp').querySelectorAll('[data-req]').forEach(b=>b.onclick=()=>openReqCert(b.dataset.req));
  $('#paneEsp').querySelectorAll('[data-vesp]').forEach(el=>el.onblur=()=>{
    const [id,k]=el.dataset.vesp.split('|'),v=el.innerText.replace(/\s+/g,' ').trim();
    if(v===state.valorEsp[id][k])return;state.valorEsp[id][k]=v;
    logChange('revision',`${id}: se editó el componente «${k}» de la propuesta de valor de la especialidad.`)});
  $('#paneEsp').querySelectorAll('[data-cuota]').forEach(inp=>{
    inp.oninput=()=>{const id=inp.dataset.cuota;state.cuotas[id]=+inp.value||0;
      const carga=cargaDe(id),d=Math.round((carga-(+inp.value||0))*10)/10,ch=$(`[data-desv="${id}"]`);
      if(ch){ch.textContent=(d>0?'+':'')+d;ch.className='dchip '+(Math.abs(d)<=1?'ok':'warn')}}});
}

function openHabilidades(eid){
  const ESP=especialidades(),e=ESP.find(x=>x.id===eid),of_=oficiales();
  const mine=of_.map(c=>({c,esp:espDeCurso(c,ESP)})).filter(r=>r.esp.some(x=>x.e.id===eid));
  const habs=habilidades(e,mine),dlg=$('#dlg');dlg.classList.add('big');
  $('#dlgTitle').textContent='Habilidades certificables · '+e.id;
  $('#dlgSub').textContent=`${e.nombre} — ${habs.length} certificaciones · ${mine.length} cursos`;
  $('#dlgBody').innerHTML=habs.length?`<div class="habgrid">${habs.map((h,i)=>{
      const [ic,cl]=HABICO[i%HABICO.length];
      return `<div class="habcard"><span class="hic" style="--hc:${cl}">${ic}</span>
        <div class="hb"><b>${esc(h.name)}</b><p>${esc(h.desc)}</p>
          <div class="hbadges">
            <span class="hbg ${h.tipo==='Por competencia'?'comp':'espe'}">${h.tipo}</span>
            <span class="hbg n">Nro de cursos <b>${h.n}</b></span>
            <span class="hbg n">Créditos <b>${h.cr}</b></span>
            <span class="hbg n">Ciclo <b>${h.c1===h.c2?h.c1:h.c1+' – '+h.c2}</b></span></div>
          <div style="font-family:'IBM Plex Mono',monospace;font-size:10.5px;color:var(--muted);margin-top:4px">
            cursos: ${h.cursos.join(' · ')}</div></div>
        <button class="hmenu" data-habreq="${eid}" title="Requisitos de certificación">⋮</button></div>`}).join('')}</div>`
    :`<div class="alert warn">Esta especialidad todavía no tiene habilidades certificables: define el curso habilitante y su certificación progresiva en la pestaña Certificaciones.</div>`;
  $('#dlgFoot').innerHTML=`<button class="btn" value="ok">Cerrar</button>
    <button type="button" class="btn" id="hbReq">▣ Requisitos de certificación</button>
    <button type="button" class="btn primary" id="hbCert">Ver certificado</button>`;
  $('#hbReq').onclick=()=>{dlg.close();openReqCert(eid)};
  $('#hbCert').onclick=()=>{dlg.close();openCertificado(eid)};
  $('#dlgBody').querySelectorAll('[data-habreq]').forEach(b=>b.onclick=()=>{dlg.close();openReqCert(eid)});
  dlg.showModal();
}

function openTroncal(code,eid){
  const c=byCode(code),ESP=especialidades(),esp=espDeCurso(c,ESP),tron=esTroncal(c,esp);
  const tot=esp.reduce((a,x)=>a+x.n,0),dlg=$('#dlg');dlg.classList.add('big');
  const manual=state.troncal[code]!==undefined;
  $('#dlgTitle').textContent=`${tron?'Curso troncal de especialidad':'Curso propio de la especialidad'} · ${c.code}`;
  $('#dlgSub').textContent=`${c.name} — ciclo ${c.ciclo} · ${c.cr} créditos`;
  $('#dlgBody').innerHTML=`
   <div class="alert ${tron?'ok':''}" style="${tron?'':'border-color:var(--line);background:var(--surface-2);color:var(--ink-2)'}">
     <b>Definición (paso 2.6).</b> Un curso es <b>troncal de especialidad</b> cuando tributa a dos o más funciones de <b>dos o más especialidades</b>.
     Nace de un <b>tema de especialidad compartido</b> (paso 2.3), no de un tema base: la naturaleza clasifica, la compartición ubica.</div>
   <div><span class="tlab">Sustento en este curso</span>
     <table class="mini" style="margin-top:5px"><tr><th>Especialidad</th><th>Capacidades que el curso marca</th>
       <th style="text-align:right">Peso</th><th style="text-align:right">Créditos cargados</th></tr>
       ${esp.map(x=>`<tr><td><b class="mono">${x.e.id}</b> ${esc(x.e.nombre)}</td>
         <td>${x.e.caps.filter(id=>c.caps[id]).map(id=>`<span class="capb">${id.toUpperCase()} N${c.caps[id]}</span>`).join(' ')}</td>
         <td class="r">${x.n}/${tot}</td><td class="r"><b>${prorr(c,esp,x.e.id)}</b> cr</td></tr>`).join('')}
       <tr><td colspan="3" style="text-align:right"><b>El plan cuenta el curso una sola vez</b></td><td class="r"><b>${c.cr}</b> cr</td></tr></table></div>
   <div class="alert ${esp.length>1?'ok':'warn'}">${esp.length>1
     ?`Cumple el criterio automático: el curso marca capacidades de <b>${esp.length} especialidades</b>, por eso sus ${c.cr} créditos se prorratean.`
     :`Con la matriz actual el curso solo aporta a <b>una especialidad</b>, así que el criterio automático no lo declara troncal.${manual&&tron?' Está marcado como troncal por decisión de la dirección de escuela.':''}`}</div>
   <label class="ck" style="font-size:12.5px"><input type="checkbox" id="trSw" ${tron?'checked':''}>
     Marcar este curso como <b style="margin-inline:4px">troncal de especialidad</b> (decisión de la dirección de escuela)</label>
   <div style="font-size:11.5px;color:var(--muted);line-height:1.45">La marca manual queda en el historial de versiones del plan como cambio menor y prevalece sobre el criterio automático.
     ${manual?'<br><b>Estado actual:</b> marca manual activa. Puedes volver al criterio automático.':''}</div>`;
  $('#dlgFoot').innerHTML=`<button class="btn" value="ok">Cerrar</button>
    ${manual?'<button type="button" class="btn" id="trAuto">Volver al criterio automático</button>':''}
    <button type="button" class="btn primary" id="trSave">Guardar marca</button>`;
  const auto=$('#trAuto');
  if(auto)auto.onclick=()=>{delete state.troncal[code];
    logChange('menor',`${code}: la marca manual de troncal se retiró; vuelve al criterio automático.`);
    dlg.close();renderEsp();toast(`<b>${code}</b> vuelve al criterio automático.`,'good')};
  $('#trSave').onclick=()=>{
    const v=$('#trSw').checked;
    if(v===(esp.length>1))delete state.troncal[code];else state.troncal[code]=v;
    logChange('menor',`${code}: ${v?'marcado':'desmarcado'} como curso troncal de especialidad por la dirección de escuela.`);
    dlg.close();renderEsp();toast(`<b>${code}</b> ${v?'marcado como troncal':'ya no es troncal'}.`,'good');
  };
  dlg.showModal();
}
/* ---- tablero de competencia para los requisitos de certificación ---- */
function hashPct(sd,lo,hi){let h=0;for(let i=0;i<sd.length;i++)h=(h*31+sd.charCodeAt(i))%1000;return lo+h%(hi-lo+1)}
const RUBNIV=[['A','Destacado','cA'],['B','Previsto','cB'],['C','En proceso','cC'],['D','Inicio','cD']];
function openReqCert(eid){
  const ESP=especialidades(),e=ESP.find(x=>x.id===eid),of_=oficiales();
  const mine=of_.map(c=>({c,esp:espDeCurso(c,ESP)})).filter(r=>r.esp.some(x=>x.e.id===eid));
  const certs=[...new Set(mine.map(r=>certDeCurso(r.c.code)).filter(Boolean))];
  const pct=hashPct(e.id+e.nombre,78,94);
  const caps=e.caps.map(id=>({id,n:CAPS[id].name,d:CAPS[id].oper,p:hashPct(id+e.id,68,96)}));
  const crit=caps.slice(0,3).map((x,i)=>({cr:x.n,peso:[24,20,16][i]||16,sel:['B','A','B'][i]||'B',
    A:`Resuelve con autonomía y supera el estándar: ${x.d.toLowerCase()}`,
    B:`Cumple el estándar esperado: ${x.d.toLowerCase()}`,
    C:`Cumple parcialmente: ejecuta con apoyo y deja observaciones sin corregir.`,
    D:`No evidencia el desempeño: la tarea queda incompleta o sin sustento.`}));
  const cursoEv=mine.find(r=>certDeCurso(r.c.code))||mine[mine.length-1];
  const dlg=$('#dlg');dlg.classList.add('big');
  $('#dlgTitle').textContent=`Requisitos de certificación · ${e.id}`;
  $('#dlgSub').textContent=`${e.nombre} — ${certs.length?certs.join(' · '):'sin certificación asociada'}`;
  $('#dlgBody').innerHTML=`
   <div class="evid">
     <div class="tlab">Para certificar, el estudiante debe cumplir los tres requisitos</div>
     <div class="er"><span class="ck2">✓</span><span><b>Haber sido evaluado con rúbrica.</b> El desempeño se califica con la rúbrica del producto, criterio por criterio, en los cuatro niveles (A destacado, B previsto, C en proceso, D inicio).</span></div>
     <div class="er"><span class="ck2">✓</span><span><b>Tener la evidencia del producto entregado.</b> El producto profesional y sus entregables están cargados en el portafolio del estudiante, con fecha y conformidad del docente.</span></div>
     <div class="er"><span class="ck2">✓</span><span><b>Haber logrado el nivel competente.</b> El logro de la competencia alcanza el umbral institucional (≥ 80%) y ningún criterio queda en nivel D.</span></div>
   </div>

   <div class="cmpbar"><span class="pc">${pct}%</span>
     <div><h4>${esc(e.nombre)}</h4><div class="sb">Competencia de especialidad · ${mine.length} cursos · ${caps.length} capacidades</div></div>
     <span class="stamp">${pct>=80?'Competente':'En proceso'}</span></div>

   <div class="prodgrid" style="align-items:start">
     <div><span class="tlab">Logro por capacidad</span>
       <div class="capgrid" style="margin-top:6px">${caps.map(x=>`<div class="caprow">
         <span class="cl"><b>${x.id.toUpperCase()} · ${esc(x.n)}</b><span>${esc(x.d)}</span></span>
         <span class="cp" style="color:${x.p>=80?'var(--ok)':x.p>=70?'var(--warn)':'var(--crit)'}">${x.p}%</span>
         <span class="mbar"><i style="width:${x.p}%;background:${x.p>=80?'var(--ok)':x.p>=70?'var(--amber)':'var(--crit)'}"></i></span></div>`).join('')}</div></div>
     <div><span class="tlab">Evidencia del producto · portafolio</span>
       <div class="evid" style="margin-top:6px">
         <div class="er"><span class="ck2">▣</span><span><b>${esc(cursoEv?productos(cursoEv.c).integrador.split(':')[0]:'Producto integrador')}</b><br>
           <span style="color:var(--muted);font-size:11.5px">${cursoEv?esc(cursoEv.c.code+' · '+cursoEv.c.name):''} · unidad 2 · entregado y conforme</span></span></div>
         <div class="er"><span class="ck2">▤</span><span>Entregables de sesión cargados en el aula virtual (lista de verificación completa).</span></div>
         <div class="er"><span class="ck2">✓</span><span>Rúbrica aplicada por el docente y revisada por el experto de la especialidad.</span></div>
         <div class="er"><span class="ck2 ${pct>=80?'':'no'}">${pct>=80?'✓':'✕'}</span><span>Nivel alcanzado: <b>${pct>=80?'competente':'en proceso'}</b> (umbral 80%).</span></div>
       </div>
       <div style="margin-top:9px"><span class="tlab">Certificado que habilita</span>
         ${certs.length?`<div class="minicert" style="margin-top:6px" data-certprev="${e.id}">
           <span class="seal">UPeU<br>2026</span><span class="mc"><span class="t">Certificado de competencia</span>
           <span class="n">${esc(certs[0])}</span><span class="f">clic para ver el certificado</span></span></div>`
          :'<div style="font-size:12px;color:var(--muted);margin-top:5px">Esta especialidad todavía no tiene certificación asociada.</div>'}</div>
     </div>
   </div>

   <div><span class="tlab">Rúbrica del producto · niveles de desempeño</span>
     <div style="overflow-x:auto;margin-top:6px;border:1px solid var(--line);border-radius:10px">
     <table class="rub2"><thead><tr><th class="c0">Criterio</th>
       ${RUBNIV.map(([l,n,c])=>`<th class="${c}">${l} · ${n}</th>`).join('')}</tr></thead><tbody>
       ${crit.map(x=>`<tr><td class="cr">${esc(x.cr)}<br><span style="font-size:10px;color:var(--muted);font-weight:400">peso ${x.peso}%</span></td>
         ${RUBNIV.map(([l])=>`<td class="${x.sel===l?'sel':''}"><span class="lv">${l}${x.sel===l?' · logrado':''}</span>${esc(x[l])}</td>`).join('')}</tr>`).join('')}
     </tbody></table></div></div>`;
  $('#dlgFoot').innerHTML=`<button class="btn" value="ok">Cerrar</button>
    ${certs.length?'<button type="button" class="btn primary" id="rqCert">Ver certificado</button>':''}`;
  const rc=$('#rqCert');if(rc)rc.onclick=()=>{dlg.close();openCertificado(eid)};
  $('#dlgBody').querySelectorAll('[data-certprev]').forEach(b=>b.onclick=()=>{dlg.close();openCertificado(eid)});
  dlg.showModal();
}
function openCertificado(eid){
  const ESP=especialidades(),e=ESP.find(x=>x.id===eid),of_=oficiales();
  const mine=of_.map(c=>({c,esp:espDeCurso(c,ESP)})).filter(r=>r.esp.some(x=>x.e.id===eid));
  const habs=habilidades(e,mine),cfg=certCfg(e,habs);
  const cursos=mine.filter(r=>certDeCurso(r.c.code)).map(r=>r.c);
  const cr=Math.round(mine.reduce((a,r)=>a+prorr(r.c,r.esp,eid),0));
  const dlg=$('#dlg');dlg.classList.add('big');
  const draw=()=>{
    $('#dlgTitle').textContent='Certificado · '+e.id;
    $('#dlgSub').textContent=`${e.nombre} — ${cr} créditos · ${cursos.length||mine.length} cursos habilitantes`;
    $('#dlgBody').innerHTML=`
     <div class="certwrap">
       <div class="certform">
         <div class="tlab" style="margin-bottom:2px">Diseño del certificado</div>
         <div class="field"><label>Nombre del título</label><input data-cf="titulo" value="${esc(cfg.titulo)}"></div>
         <div class="field"><label>Certificación</label><select data-cf="nombre">
           ${habs.map(h=>`<option ${h.name===cfg.nombre?'selected':''}>${esc(h.name)}</option>`).join('')}
           ${habs.some(h=>h.name===cfg.nombre)?'':`<option selected>${esc(cfg.nombre)}</option>`}</select></div>
         <div class="field"><label>Firma</label><select data-cf="firma">
           ${['Decano Académico','Director de Escuela','Vicerrector Académico','Dirección de Gestión Curricular']
             .map(x=>`<option ${x===cfg.firma?'selected':''}>${x}</option>`).join('')}</select></div>
         <div class="field"><label>Código</label><input data-cf="codigo" value="${esc(cfg.codigo)}" class="mono"></div>
         <div class="field"><label>Formato</label><select data-cf="formato">
           ${['PDF','PNG','Insignia digital'].map(x=>`<option ${x===cfg.formato?'selected':''}>${x}</option>`).join('')}</select></div>
       </div>
       <div class="certside">${certPreview(e,cfg)}
         <table class="mini" style="margin-top:4px"><tr><td>Créditos acreditados</td><td class="r">${cr}</td></tr>
           <tr><td>Cursos habilitantes</td><td class="r">${cursos.length||mine.length}</td></tr>
           <tr><td>Emisión</td><td class="r">${new Date().toLocaleDateString('es-PE',{day:'2-digit',month:'short',year:'numeric'})}</td></tr></table></div>
     </div>
     <div><span class="tlab">Cursos habilitantes</span>
       <div class="flist" style="margin-top:5px">${(cursos.length?cursos:mine.map(r=>r.c)).map(c=>`<div class="frow">
         <span class="mono">${c.code}</span><span class="nm">${esc(c.name)}</span><span class="mono">C${c.ciclo} · ${c.cr} cr</span></div>`).join('')}</div></div>
     <div class="alert ok">El certificado se emite solo cuando los tres requisitos están cumplidos: rúbrica aplicada, evidencia del producto en el portafolio y nivel competente alcanzado.</div>`;
    $('#dlgBody').querySelectorAll('[data-cf]').forEach(el=>el.onchange=()=>{
      cfg[el.dataset.cf]=el.value;draw();renderEsp()});
  };
  draw();
  $('#dlgFoot').innerHTML=`<button class="btn" value="ok">Cerrar</button>
    <button type="button" class="btn" id="ceReq">▣ Requisitos</button>
    <button type="button" class="btn" id="cePrint">⎙ Guardar borrador</button>
    <button type="button" class="btn primary" id="ceSave">✓ Guardar certificación</button>`;
  $('#cePrint').onclick=()=>toast('Borrador del certificado guardado en el expediente de la especialidad.','good');
  $('#ceSave').onclick=()=>{logChange('menor',`${eid}: certificación «${cfg.nombre}» guardada con código ${cfg.codigo} en formato ${cfg.formato}.`);
    dlg.close();renderEsp();toast(`Certificación guardada para <b>${eid}</b>; queda en el historial del plan.`,'good')};
  $('#ceReq').onclick=()=>{dlg.close();openReqCert(eid)};
  dlg.showModal();
}

/* ===================== UI ===================== */
function toast(html,kind){const el=document.createElement('div');el.className='toast '+(kind||'');
  el.innerHTML=`<span>${kind==='bad'?'⚠':kind==='good'?'✓':'ℹ'}</span><span>${html}</span>`;
  $('#toasts').appendChild(el);setTimeout(()=>el.remove(),kind==='bad'?7000:4200)}
function saveUi(){try{localStorage.setItem('mpe2.ui',JSON.stringify({c:state.collapsed,g:state.gcol,d:state.dens,k:state.showCode,m:state.modalidad,kp:state.kpis,nw:state.nameW}))}catch(e){}}
function loadUi(){try{const s=JSON.parse(localStorage.getItem('mpe2.ui')||'null');if(!s)return;
  Object.assign(state.collapsed,s.c||{});Object.assign(state.gcol,s.g||{});
  if(s.d)state.dens=s.d;if(typeof s.k==='boolean')state.showCode=s.k;if(s.m)state.modalidad=s.m;
  if(typeof s.kp==='boolean')state.kpis=s.kp;if(s.nw)state.nameW=s.nw}catch(e){}}
document.querySelectorAll('.tab').forEach(t=>t.onclick=()=>{
  document.querySelectorAll('.tab').forEach(x=>x.setAttribute('aria-selected',String(x===t)));
  state.tab=t.dataset.tab;
  $('#paneMatriz').hidden=state.tab!=='matriz';$('#paneMalla').hidden=state.tab!=='malla';
  $('#paneEsp').hidden=state.tab!=='esp';$('#paneCert').hidden=state.tab!=='cert';
  $('#toolbar').style.display=state.tab==='matriz'?'':'none';
  if(state.tab==='malla')renderMalla();if(state.tab==='esp')renderEsp();if(state.tab==='cert')renderCert()});
$('#blockSeg').onclick=e=>{const b=e.target.closest('[data-toggle]');if(!b)return;
  state.collapsed[b.dataset.toggle]=!state.collapsed[b.dataset.toggle];saveUi();renderMatrix()};
$('#modSeg').onclick=e=>{const b=e.target.closest('[data-mod]');if(!b)return;
  [...$('#modSeg').children].forEach(x=>x.setAttribute('aria-pressed',String(x===b)));
  state.modalidad=b.dataset.mod;saveUi();renderMatrix();
  toast(`Vista de modalidad <b>${MODL[state.modalidad]}</b>: el bloque de gestión recalcula horas presenciales, síncronas y asíncronas.`)};
$('#presetSeg').onclick=e=>{const b=e.target.closest('[data-preset]');if(!b)return;
  [...$('#presetSeg').children].forEach(x=>x.setAttribute('aria-pressed',String(x===b)));
  const set=o=>Object.assign(state.collapsed,o),p=b.dataset.preset;
  if(p==='full')set({s:false,m:false,r:false,g:false,d:false,e:false,p:false});
  if(p==='gestion')set({s:false,m:false,r:false,g:true,d:true,e:true,p:false});
  if(p==='comp')set({s:true,m:true,r:true,g:false,d:false,e:false,p:true});
  if(p==='sec')set({s:true,m:false,r:true,g:true,d:true,e:true,p:false});
  saveUi();renderMatrix()};
$('#densSeg').onclick=e=>{const b=e.target.closest('[data-dens]');if(!b)return;
  [...$('#densSeg').children].forEach(x=>x.setAttribute('aria-pressed',String(x===b)));
  state.dens=b.dataset.dens;saveUi();renderMatrix()};
$('#btnCodeCol').onclick=()=>{state.showCode=!state.showCode;
  $('#btnCodeCol').setAttribute('aria-pressed',String(state.showCode));saveUi();renderMatrix()};
function applyFilter(){
  const q=state.q.trim().toLowerCase();let n=0;
  document.querySelectorAll('tr.crs').forEach(tr=>{
    const c=byCode(tr.dataset.code),ok=c&&matches(c);tr.hidden=!ok;if(ok)n++;
    if(!c)return;
    const btn=tr.querySelector('button.nm');
    if(btn){btn.innerHTML=q?esc(c.name).replace(new RegExp('('+q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','ig'),'<mark>$1</mark>'):esc(c.name)}
  });
  cycles().forEach(({n:cy,rows})=>{
    const vis=rows.some(c=>matches(c));
    const h=document.querySelector(`tr.cyc[data-cyc="${cy}"]`),sb=document.querySelector(`tr.sub[data-sub="${cy}"]`);
    if(h)h.hidden=!vis;if(sb)sb.hidden=!vis;
  });
  $('#qcount').textContent=q?`${n} de ${COURSES.length} cursos`:`${COURSES.length} cursos`;
}
$('#q').oninput=e=>{state.q=e.target.value;applyFilter()};
$('#q').onkeydown=e=>{if(e.key==='Escape'){e.target.value='';state.q='';applyFilter()}};
$('#btnVer').onclick=()=>toggleHist();
$('#btnHist').onclick=()=>toggleHist();
$('#btnExport').onclick=openExport;
$('#btnCodes').onclick=openCodes;
$('#btnHoras').onclick=openHoras;
$('#btnLimits').onclick=openLimits;
$('#btnGenesys').onclick=openGenesys;
function setKpis(on){state.kpis=on;$('#kpis').hidden=!on;
  $('#btnKpis').setAttribute('aria-pressed',String(on));
  $('#btnKpis').textContent=(on?'⌃ Ocultar indicadores':'⌄ Mostrar indicadores');saveUi()}
$('#btnKpis').onclick=()=>setKpis(!state.kpis);
$('#btnExpand').onclick=async()=>{
  const el=$('#paneMatriz');
  try{
    if(document.fullscreenElement){await document.exitFullscreen();$('#btnExpand').textContent='⤢ Expandir matriz'}
    else{await el.requestFullscreen();$('#btnExpand').textContent='⤡ Contraer matriz';el.style.background='var(--surface)'}
  }catch(err){setKpis(false);toast('El navegador no permitió la pantalla completa; se ocultaron los indicadores para dar espacio a la matriz.')}
};
document.addEventListener('fullscreenchange',()=>{
  $('#btnExpand').textContent=document.fullscreenElement?'⤡ Contraer matriz':'⤢ Expandir matriz'});
/* ===================== ARRANQUE Y NUBE =====================
   El plan (cursos, niveles por capacidad, secuencia) y su versionado se guardan en Supabase, fila F3-<COD>
   de public.avance. Se guarda solo cuando algo cambió: cada 1,5 s se compara una instantánea con la última guardada.
   Las preferencias de vista (bloques plegados, densidad, modalidad) siguen en el navegador. */
const ESCUELA=(new URLSearchParams(location.search).get('escuela')||'SIS').toUpperCase();
const CLAVE3='F3-'+ESCUELA;
/* «Regresar» vuelve al proyecto de evaluación de la carrera en la gestión de programas */
document.querySelectorAll('.volver-proy').forEach(a=>a.href='programas.html?proyecto='+encodeURIComponent(ESCUELA));
const PERSISTE=['version','versions','pending','espMin','troncal','cuotas','valorEsp','certCfg','horas','codeRule','plan'];
function instantanea3(){const o={v:1,courses:COURSES};PERSISTE.forEach(k=>o[k]=state[k]);return JSON.stringify(o)}
function pintarNube(t){const p=$('#nubePill');if(p)p.textContent=t}
(async function(){
  if(window.NUBE) try{ await NUBE.listo; }catch(_){}
  if(ESCUELA!=='SIS'&&!PLAN_ESC){
    document.querySelector('.app').innerHTML=`<div class="sin-datos"><h2>Fase 3 en preparación</h2><p>La Fase 3 de esta escuela aún no tiene su plan de estudios cargado. Por ahora está disponible Ingeniería de Sistemas.</p><p><a href="programas.html?proyecto=${ESCUELA}">← Volver al proyecto</a></p></div>`;
    pintarNube('Sin datos'); return;
  }
  const b=window.NUBE&&NUBE.get(CLAVE3), g=b&&b.d;
  if(g&&g.courses){ COURSES=g.courses; PERSISTE.forEach(k=>{ if(g[k]!==undefined) state[k]=g[k] });
    (state.pending||[]).forEach(p=>p.ts=new Date(p.ts)); }
  loadUi();
  $('#btnCodeCol').setAttribute('aria-pressed',String(state.showCode));
  [...$('#densSeg').children].forEach(x=>x.setAttribute('aria-pressed',String(x.dataset.dens===state.dens)));
  [...$('#modSeg').children].forEach(x=>x.setAttribute('aria-pressed',String(x.dataset.mod===state.modalidad)));
  $('#vigencia').textContent='Vigencia '+state.plan.vig;
  $('#planCode').textContent=state.plan.code;
  if(PLAN_ESC){
    document.querySelector('.top .eyebrow').textContent='UPeU · '+PLAN_ESC.facultad+' · Gestión curricular';
    document.querySelector('.top h1').textContent=PLAN_ESC.nombre;
    document.querySelector('.planline strong').textContent=PLAN_ESC.planNombre;
    $('#fhCode').textContent=state.plan.code;
    document.title='Plan de Estudio · '+PLAN_ESC.nombre;
  }
  setKpis(state.kpis);
  ordena();renderMatrix();renderVersionChip();
  if(!window.NUBE){pintarNube('Sin nube');return}
  let ultima=instantanea3(), guardando=false;
  pintarNube(g?'☁ Guardado':'☁ Sin cambios');
  setInterval(async()=>{
    if(guardando) return; const ahora=instantanea3(); if(ahora===ultima) return;
    guardando=true; pintarNube('☁ Guardando…');
    try{ await NUBE.poner(CLAVE3,{d:JSON.parse(ahora),docs:[]}); ultima=ahora; pintarNube('☁ Guardado'); }
    catch(e){ console.error('[fase3]',e); pintarNube('☁ Error al guardar'); }
    finally{ guardando=false; }
  },1500);
})();
