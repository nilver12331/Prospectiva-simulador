/* Fase 3 · Plan de Estudios de Nutrición Humana (consola3.html?escuela=NUT), propuesto por Génesys.
   Las competencias de especialidad y sus capacidades son las de la Fase 1 real (datos/nut.js → arq):
   atención nutricional, intervención poblacional y alimentación colectiva (tres especialidades de trabajo).
   Los cursos generales, de formación cristiana e investigación son los comunes de la UPeU; los de especialidad
   los propone Génesys siguiendo la secuencia ciencias básicas → nutrición → dietética y salud pública →
   dietoterapia y gestión → internados. Cumple los límites del plan: 200 créditos (45 G · 16 P · 139 E),
   18 a 21 créditos por ciclo y todas las capacidades en nivel 3 al egreso. */
window.PLANES3=window.PLANES3||{};
PLANES3.NUT={
 nombre:'Nutrición Humana',facultad:'Facultad de Ciencias de la Salud',prefijo:'NUT',
 planNombre:'Plan de Estudios 2027',
 plan:{code:'PE-NH-2027',vig:'2027-I – 2031-II'},
 version:{major:1,minor:0,rev:0,estado:'Propuesta'},
 versions:[
  {v:'v1.0',fecha:'27 set 2026',autor:'Génesys · Comisión de Currículo',estado:'Propuesta',vig:'2027-I – 2031-II',res:null,
   items:['Plan propuesto desde las competencias de la Fase 1 (3 competencias, 12 capacidades) y las especialidades de trabajo de la Fase 2.',
          'Tres internados en el último año: nutrición clínica, nutrición comunitaria y servicios de alimentación.',
          'Certificaciones progresivas en cinco etapas, de promotor de alimentación saludable a soporte nutricional.']}],
 certCode:'NUT336',

 /* Competencias específicas esenciales: fundamentación científica en ciencias de la salud */
 bloqueD:cap=>[
  {id:'ds',name:'Fundamentación científica en ciencias de la salud',color:'#c2740a',cols:[
   cap('d1','Bases biológicas del organismo humano','Comprende la estructura y la función del organismo humano en salud y enfermedad.','Relaciona estructuras, funciones y alteraciones del organismo con el estado nutricional.'),
   cap('d2','Química y bioquímica de los alimentos','Explica la composición de los alimentos y el metabolismo de los nutrientes.','Analiza la composición química de los alimentos y las rutas metabólicas de los nutrientes.'),
   cap('d3','Razonamiento clínico y fisiopatológico','Interpreta los procesos fisiopatológicos que alteran la nutrición.','Integra datos bioquímicos, clínicos y farmacológicos para explicar un caso.'),
   cap('d4','Inferencia en salud','Extrae conclusiones válidas a partir de datos de salud y nutrición.','Aplica métodos epidemiológicos y estadísticos para inferir sobre poblaciones.')]}],

 /* Competencias de especialidad: las tres competencias de la Fase 1 con sus cuatro capacidades */
 bloqueE:cap=>[
  {id:'e1g',name:'Atención nutricional de la persona',color:'#0f8a5f',cols:[
   cap('e1','Valoración del estado nutricional','Valora el estado nutricional con métodos antropométricos, bioquímicos, clínicos y dietéticos.','Aplica y registra la evaluación nutricional completa de la persona.'),
   cap('e2','Diagnóstico nutricional','Formula el diagnóstico nutricional con problema, etiología y signos y síntomas.','Redacta el diagnóstico nutricional en formato PES a partir de la valoración.'),
   cap('e3','Prescripción del tratamiento nutricional','Prescribe el tratamiento nutricional según la situación fisiopatológica y sociocultural.','Calcula requerimientos y prescribe la dieta, el soporte o la suplementación.'),
   cap('e4','Seguimiento del caso y consejería nutricional','Monitorea el caso y acompaña el cambio de conducta alimentaria.','Evalúa la evolución del caso, ajusta el plan y brinda consejería.')]},
  {id:'e2g',name:'Intervención nutricional en poblaciones',color:'#0a7e9c',cols:[
   cap('e5','Diagnóstico nutricional poblacional','Caracteriza la situación alimentaria y nutricional de una población.','Analiza indicadores y encuestas nutricionales de una comunidad o territorio.'),
   cap('e6','Diseño de la intervención nutricional poblacional','Diseña intervenciones nutricionales pertinentes y basadas en evidencia.','Formula objetivos, estrategias, metas e indicadores de la intervención.'),
   cap('e7','Ejecución de la intervención nutricional poblacional','Ejecuta intervenciones con la comunidad y los actores del territorio.','Implementa acciones educativas, de suplementación y de promoción con la comunidad.'),
   cap('e8','Monitoreo y evaluación del impacto de la intervención','Evalúa el proceso y el impacto de las intervenciones nutricionales.','Mide indicadores de proceso, resultado e impacto y propone mejoras.')]},
  {id:'e3g',name:'Gestión de servicios de alimentación e inocuidad',color:'#6d8b1a',cols:[
   cap('e9','Planificación del menú y del plan alimentario','Planifica menús y planes alimentarios para colectividades.','Elabora ciclos de menú balanceados según requerimientos y presupuesto.'),
   cap('e10','Estandarización y costeo de las preparaciones','Estandariza recetas y calcula el costo de las preparaciones.','Elabora fichas técnicas estandarizadas con rendimiento y costo.'),
   cap('e11','Aseguramiento de la inocuidad','Garantiza la inocuidad de los alimentos en toda la cadena del servicio.','Implementa buenas prácticas y el plan HACCP del servicio.'),
   cap('e12','Supervisión y auditoría del servicio de alimentación','Supervisa y audita la calidad del servicio de alimentación.','Audita procesos del servicio con indicadores y propone acciones correctivas.')]}],

 /* C(code,name,ciclo,cr,tipoEstudio,tipoAsig,HT,HP,{pl,pt,pc,pp},[prerrequisitos],[equivalencias],{capacidad:nivel}) */
 cursos:(C,X)=>[
  // Ciclo 1 · 19 cr
  C('ERE101','Formación Cristiana I',1,2,'G','O',32,0,{},[],['ERE101'],{ge1:1,ge2:1}),
  C('EGE101','Comunicación Oral y Escrita',1,3,'G','O',32,32,{pt:32},[],['EGE102'],{gc1:1,gc2:1,gc3:1}),
  C('EGE102','Matemática Básica',1,4,'G','O',48,32,{pt:32},[],['EGE104'],{d4:1}),
  C('EGE103','Estilo de Vida Saludable',1,2,'G','O',32,16,{pt:16},[],[],{gv1:1,gv2:1}),
  C('NUT301','Introducción a la Nutrición Humana',1,4,'E','O',32,64,{pc:64},[],['NUT301'],{e1:1,e4:1,gt1:1}),
  C('NUT302','Anatomía Humana',1,4,'E','O',32,64,{pl:64},[],['NUT302'],{d1:1}),
  // Ciclo 2 · 19 cr
  C('ERE102','Formación Cristiana II',2,2,'G','O',32,0,{},[],['ERE102'],{ge1:1,ge3:1}),
  C('EGE110','Biología Celular y Molecular',2,4,'G','O',48,32,{pl:32},[],['EGE110'],{d1:1,d2:1}),
  C('EGE105','Cultura, Ciudadanía y Sustentabilidad',2,2,'G','O',32,16,{pt:16},[],[],{gv3:1,gt3:1}),
  C('NUT303','Fisiología Humana',2,4,'E','O',32,64,{pl:64},['NUT302'],['NUT303'],{d1:2,d3:1}),
  C('NUT304','Psicología y Comportamiento Alimentario',2,3,'E','O',32,32,{pt:32},[],['NUT304'],{e4:1,gp6:1}),
  C('NUT305','Microbiología y Parasitología',2,4,'E','O',32,64,{pl:64},[],['NUT305'],{d1:2,e11:1}),
  // Ciclo 3 · 21 cr
  C('ERE103','Formación Cristiana III',3,2,'G','O',32,0,{},[],['ERE103'],{ge2:2,ge4:1}),
  C('INV201','Metodología de la Investigación',3,3,'P','O',32,32,{pt:32},[],['INV201'],{gi1:1,gi2:1,gi5:1}),
  C('EGE111','Química General y Orgánica',3,4,'G','O',48,32,{pl:32},['EGE110'],['EGE111'],{d2:2}),
  C('NUT306','Bioquímica General',3,4,'E','O',32,64,{pl:64},['EGE110'],['NUT306'],{d1:2,d2:2}),
  C('NUT307','Bromatología y Composición de Alimentos',3,4,'E','O',32,64,{pl:64},[],['NUT307'],{d2:2,e9:1,e10:1}),
  C('NUT308','Nutrición Básica: Macro y Micronutrientes',3,4,'E','O',48,32,{pt:32},['NUT303'],['NUT308'],{e1:1,e3:1,d3:1}),
  // Ciclo 4 · 21 cr
  C('ERE104','Formación Cristiana IV',4,2,'G','O',32,0,{},[],['ERE104'],{ge3:2,gp3:1}),
  C('EGE112','Antropología y Sociología de la Alimentación',4,4,'G','O',48,32,{pc:32},[],['EGE112'],{gv3:2,gc1:2}),
  C('NUT309','Bioquímica Nutricional y Metabolismo',4,4,'E','O',32,64,{pl:64},['NUT306'],['NUT309'],{d2:3,d3:2,e2:1}),
  C('NUT310','Evaluación del Estado Nutricional',4,4,'E','O',32,64,{pl:64},['NUT308'],['NUT310'],{e1:2,e2:1,e5:1}),
  C('NUT311','Tecnología de Alimentos',4,4,'E','O',32,64,{pl:64},['NUT307'],['NUT311'],{e10:2,e11:1}),
  C('NUT312','Epidemiología y Salud Pública',4,3,'E','O',32,32,{pt:32},[],['NUT312'],{e5:2,d4:2}),
  // Ciclo 5 · 21 cr
  C('ERE105','Formación Cristiana V',5,2,'G','O',32,0,{},[],['ERE105'],{ge4:2,gp1:2}),
  C('INV202','Estadística Aplicada a la Investigación',5,4,'P','O',32,64,{pl:64},['INV201'],['INV202'],{gi3:2,gi4:2,d4:2}),
  C('NUT313','Fisiopatología',5,4,'E','O',48,32,{pl:32},['NUT309'],['NUT313'],{d1:3,d3:2,e2:2}),
  C('NUT314','Dietética y Planificación de Dietas',5,4,'E','O',32,64,{pl:64},['NUT310'],['NUT314'],{e3:2,e9:2,e10:1}),
  C('NUT315','Nutrición en el Ciclo de Vida',5,4,'E','O',32,64,{pc:64},['NUT310'],['NUT315'],{e1:2,e3:2,e4:1}),
  C('NUT316','Educación y Consejería Nutricional',5,3,'E','O',32,32,{pc:32},['NUT304'],['NUT316'],{e4:2,e7:1,gc3:2}),
  // Ciclo 6 · 21 cr
  C('ERE106','Formación Cristiana VI',6,2,'G','O',32,0,{},[],['ERE106'],{gp2:2,gp4:2}),
  C('INV203','Investigación I — Proyecto de Tesis',6,3,'P','O',32,32,{pt:32},['INV202'],['INV203'],{gi1:3,gi2:3,gi5:3}),
  C('NUT317','Dietoterapia I',6,4,'E','O',32,64,{pc:64},['NUT313'],['NUT317'],{e2:2,e3:2,e4:2}),
  C('NUT318','Nutrición Materno Infantil',6,4,'E','O',32,64,{pc:64},['NUT315'],['NUT318'],{e1:2,e3:2,e6:1}),
  C('NUT319','Nutrición en Salud Pública',6,4,'E','O',32,64,{pc:64},['NUT312'],['NUT319'],{e5:2,e6:2}),
  C('NUT320','Gestión de Servicios de Alimentación',6,4,'E','O',48,32,{pt:32},['NUT314'],['NUT320'],{e9:2,e12:2,gt2:2}),
  // Ciclo 7 · 21 cr
  C('ERE107','Formación Cristiana VII',7,2,'G','O',32,0,{},[],['ERE107'],{ge2:3,gp6:2}),
  C('INV204','Investigación II — Tesis I',7,2,'P','O',32,32,{pt:32},['INV203'],['INV204'],{gi3:3,gi5:3}),
  C('NUT321','Dietoterapia II',7,4,'E','O',32,64,{pc:64},['NUT317'],['NUT321'],{e2:3,e3:3,e4:2}),
  C('NUT322','Soporte Nutricional Enteral y Parenteral',7,3,'E','O',32,32,{pc:32},['NUT317'],['NUT322'],{e3:3,e1:2}),
  C('NUT323','Programas Sociales y Seguridad Alimentaria',7,4,'E','O',32,64,{pc:64},['NUT319'],['NUT323'],{e6:2,e7:2,gt3:3}),
  C('NUT324','Inocuidad Alimentaria y Sistema HACCP',7,3,'E','O',32,32,{pl:32},['NUT311'],['NUT324'],{e11:3,e12:1}),
  C('NUT325','Farmacología e Interacción Fármaco-Nutriente',7,3,'E','O',32,32,{pt:32},['NUT313'],['NUT325'],{d3:3,e3:2}),
  // Ciclo 8 · 20 cr
  C('ERE108','Formación Cristiana VIII',8,2,'G','O',32,0,{},[],['ERE108'],{ge1:3,ge3:3}),
  C('INV205','Investigación III — Tesis II',8,2,'P','O',32,32,{pt:32},['INV204'],['INV205'],{gi4:3,gi5:3}),
  C('NUT326','Nutrición Clínica Pediátrica y Geriátrica',8,4,'E','O',32,64,{pc:64},['NUT321'],['NUT326'],{e1:3,e2:3,e4:3}),
  C('NUT327','Evaluación de Programas e Intervenciones Nutricionales',8,3,'E','O',32,32,{pc:32},['NUT323'],['NUT327'],{e8:3,e5:3,d4:3}),
  C('NUT328','Estandarización y Costeo de Preparaciones',8,3,'E','O',32,32,{pl:32},['NUT320'],['NUT328'],{e10:3,e9:3}),
  C('NUT329','Nutrición en Obesidad, Deporte y Enfermedades Crónicas',8,3,'E','O',32,32,{pc:32},['NUT321'],['NUT329'],{e3:3,e4:3,gv1:3,gv2:3}),
  C('NUT330','Comunicación y Marketing Social en Nutrición',8,3,'E','O',32,32,{pc:32},['NUT316'],['NUT330'],{e7:3,gc2:3}),
  // Ciclo 9 · 18 cr
  C('ERE109','Formación Cristiana IX',9,2,'G','O',32,0,{},[],['ERE109'],{ge4:3,gp1:3}),
  C('INV206','Investigación IV — Sustentación',9,2,'P','O',32,32,{pt:32},['INV205'],['INV206'],{gi5:3,gc2:3}),
  C('NUT331','Internado en Nutrición Clínica',9,8,'E','O',0,256,{pp:256},['NUT326'],['NUT331'],{e1:3,e2:3,e3:3,e4:3,gp2:3,gp6:3}),
  C('NUT332','Auditoría y Calidad de Servicios de Alimentación',9,3,'E','O',32,32,{pt:32},['NUT324'],['NUT332'],{e12:3,e11:3}),
  C('NUT333','Electivo de Especialidad I',9,3,'E','L',32,32,{pc:32},[],[],{e6:3}),
  // Ciclo 10 · 19 cr
  C('ERE110','Formación Cristiana X',10,2,'G','O',32,0,{},[],['ERE110'],{ge3:3,gp4:3}),
  C('NUT334','Internado en Nutrición Comunitaria',10,7,'E','O',0,224,{pp:224},['NUT327'],['NUT334'],{e5:3,e6:3,e7:3,e8:3,gt4:3}),
  C('NUT335','Internado en Servicios de Alimentación',10,5,'E','O',0,160,{pp:160},['NUT332'],['NUT335'],{e9:3,e10:3,e11:3,e12:3,gt2:3}),
  C('NUT336','Taller de Certificación Profesional',10,3,'E','O',32,32,{pc:32},[],[],{gp5:3,e3:3}),
  C('EGE108','Responsabilidad Social Universitaria',10,2,'G','O',32,16,{pc:16},[],[],{gv3:3,gt1:3}),
  // Programas y proyectos no curriculares
  X('PRG-LID','Programa de Liderazgo y Servicio (extracurricular)',0,'X',{ge4:2,gt5:3},'Programa institucional de servicio; evidencia liderazgo sin créditos en el plan.'),
  X('PRY-EDEN','Proyecto EDEN — carácter con propósito',0,'X',{gp1:3,gp3:3},'Proyecto formativo transversal del Modelo Educativo; se evalúa en el perfil.'),
  X('CER-ENG','Certificación de inglés B2 (requisito de egreso)',0,'X',{gc1:3,gc3:3},'Requisito de egreso acreditado por centro de idiomas; no otorga créditos.'),
  X('PRG-SEM','Semillero de Investigación en Nutrición',0,'X',{gi3:3,gi6:3},'Participación en semillero con producción de un artículo; evidencia investigación.')
 ],

 certs:[
  {stage:'Explora',ciclos:'1 – 2',name:'Promotor de Alimentación Saludable',caps:['E4 · Seguimiento y consejería N1','D1 · Bases biológicas N2'],cursos:['NUT301','NUT303','NUT304']},
  {stage:'Construye',ciclos:'3 – 4',name:'Técnico en Evaluación del Estado Nutricional',caps:['E1 · Valoración del estado nutricional N2','D2 · Química y bioquímica N3'],cursos:['NUT308','NUT309','NUT310']},
  {stage:'Especialízate',ciclos:'5 – 6',name:'Consejero en Dietética y Nutrición del Ciclo de Vida',caps:['E3 · Prescripción del tratamiento N2','E4 · Consejería N2'],cursos:['NUT314','NUT315','NUT316']},
  {stage:'Experimenta',ciclos:'7 – 8',name:'Gestor de Inocuidad Alimentaria (HACCP)',caps:['E11 · Aseguramiento de la inocuidad N3','E10 · Estandarización y costeo N3'],cursos:['NUT324','NUT328','NUT320']},
  {stage:'Profesionaliza',ciclos:'9 – 10',name:'Nutricionista en Soporte Nutricional',caps:['E2 · Diagnóstico nutricional N3','E3 · Prescripción del tratamiento N3'],cursos:['NUT321','NUT322','NUT331']}],

 /* Tipo de producto de cada curso, antes de las reglas generales */
 prodtipo:[
  [/dietoterapia|cl[íi]nica|soporte nutricional|fisiopatolog|estado nutricional|pedi[áa]trica|geri[áa]trica|obesidad/i,'Caso clínico nutricional'],
  [/salud p[úu]blica|programas|comunitaria|materno|ciclo de vida|consejer|marketing social|epidemiolog|introducci[óo]n a la nutrici/i,'Proyecto de intervención nutricional'],
  [/servicios de alimentaci|diet[ée]tica|costeo|inocuidad|haccp|tecnolog[íi]a de alimentos|bromatolog/i,'Plan de servicio de alimentación'],
  [/anatom|fisiolog|bioqu[íi]mica|biolog|qu[íi]mica|microbiolog|farmacolog|nutrici[óo]n b[áa]sica/i,'Portafolio de laboratorio']],

 /* Estructuras de referencia de sílabos de nutrición para el constructor */
 bancos:[
  {k:'nut-clinica',lab:'Nutrición clínica y dietoterapia',clase:'Integrado',
   re:/dietoterapia|cl[íi]nica|soporte nutricional|fisiopatolog|estado nutricional|pedi[áa]trica|geri[áa]trica|obesidad|internado en nutrici[óo]n cl/i,
   ref:'Nutrición Clínica y Dietoterapia (sílabos UNMSM · UPeU · UPC) · Proceso de Atención Nutricional de la Academy of Nutrition and Dietetics · guías ASPEN y ESPEN',
   prod:'Caso clínico nutricional con plan de atención',
   u:[{macro:'Valoración y diagnóstico nutricional',prod:'Informe de valoración y diagnóstico nutricional del caso',m:[
      ['Proceso de atención nutricional','Etapas del proceso de atención nutricional|Terminología estandarizada|Registro en la historia clínica','Ficha del proceso de atención'],
      ['Valoración antropométrica y de la composición corporal','Medidas e índices antropométricos|Bioimpedancia y pliegues|Interpretación con patrones de referencia','Registro antropométrico'],
      ['Valoración bioquímica, clínica y dietética','Indicadores bioquímicos|Signos clínicos de deficiencia|Recordatorio de 24 horas y frecuencia de consumo','Valoración integral del caso'],
      ['Diagnóstico nutricional','Formato problema-etiología-signos (PES)|Priorización de diagnósticos|Tamizaje de riesgo nutricional','Diagnóstico PES del caso']]},
    {macro:'Prescripción y tratamiento nutricional',prod:'Plan de tratamiento nutricional del caso',m:[
      ['Cálculo de requerimientos','Gasto energético y ecuaciones predictivas|Requerimiento de macronutrientes|Requerimiento de micronutrientes y líquidos','Cálculo de requerimientos'],
      ['Prescripción dietoterapéutica','Modificaciones de consistencia y composición|Dietas terapéuticas por patología|Distribución de las comidas','Prescripción dietética'],
      ['Soporte nutricional','Indicaciones del soporte enteral y parenteral|Selección de fórmulas|Complicaciones y su prevención','Plan de soporte nutricional'],
      ['Interacción fármaco-nutriente','Fármacos de uso frecuente|Efectos sobre el estado nutricional|Ajustes en el plan','Tabla de interacciones del caso']]},
    {macro:'Monitoreo, consejería y sustentación',prod:'Caso clínico nutricional sustentado',m:[
      ['Monitoreo y evaluación del caso','Indicadores de evolución|Ajuste del plan|Registro de la evolución','Hoja de monitoreo'],
      ['Consejería nutricional','Entrevista motivacional|Metas de cambio de conducta|Material educativo','Sesión de consejería registrada'],
      ['Trabajo en el equipo de salud','Rol del nutricionista en el equipo|Interconsulta y referencia|Ética y confidencialidad','Nota de interconsulta'],
      ['Presentación del caso clínico','Estructura de la presentación|Discusión con evidencia|Retroalimentación del equipo','Caso clínico presentado']]}]},
  {k:'nut-publica',lab:'Nutrición pública y comunitaria',clase:'Integrado',
   re:/salud p[úu]blica|programas|comunitaria|materno|ciclo de vida|consejer|marketing social|epidemiolog|evaluaci[óo]n de programas|introducci[óo]n a la nutrici/i,
   ref:'Nutrición en Salud Pública (sílabos UNMSM · UPCH · UPeU) · Documento técnico de la situación nutricional del CENAN-INS · marco de los programas sociales del MIDIS y el MINSA',
   prod:'Proyecto de intervención nutricional poblacional',
   u:[{macro:'Diagnóstico de la situación alimentaria y nutricional',prod:'Diagnóstico nutricional de la población del caso',m:[
      ['Situación nutricional del Perú','Desnutrición crónica y anemia|Sobrepeso y obesidad|Determinantes sociales de la nutrición','Ficha de la situación nutricional'],
      ['Fuentes e indicadores poblacionales','ENDES y encuestas del CENAN|Indicadores de vigilancia|Sistemas de información en salud','Matriz de indicadores'],
      ['Diagnóstico comunitario','Mapeo de actores|Técnicas participativas|Priorización de problemas','Diagnóstico participativo'],
      ['Análisis de causas','Árbol de problemas|Evidencia de intervenciones efectivas|Selección de la alternativa','Árbol de problemas y objetivos']]},
    {macro:'Diseño de la intervención',prod:'Proyecto de intervención nutricional diseñado',m:[
      ['Objetivos, metas e indicadores','Marco lógico|Metas medibles|Indicadores de proceso, resultado e impacto','Matriz de marco lógico'],
      ['Estrategias de intervención','Educación alimentaria|Suplementación y fortificación|Articulación con programas sociales','Plan de estrategias'],
      ['Comunicación para el cambio de conducta','Mensajes clave|Materiales educativos|Pertinencia cultural','Materiales validados'],
      ['Presupuesto y cronograma','Recursos necesarios|Cronograma de actividades|Sostenibilidad','Presupuesto y cronograma']]},
    {macro:'Ejecución, monitoreo y evaluación',prod:'Proyecto de intervención ejecutado y evaluado',m:[
      ['Ejecución con la comunidad','Organización de actividades|Trabajo con agentes comunitarios|Registro de evidencias','Informe de ejecución'],
      ['Monitoreo de la intervención','Seguimiento de indicadores de proceso|Ajustes en campo|Tablero de monitoreo','Tablero de monitoreo'],
      ['Evaluación de resultados e impacto','Diseños de evaluación|Análisis de indicadores|Lecciones aprendidas','Informe de evaluación'],
      ['Sustentación ante la comunidad','Devolución de resultados|Recomendaciones a las autoridades|Sostenibilidad','Proyecto sustentado']]}]},
  {k:'nut-servicios',lab:'Servicios de alimentación e inocuidad',clase:'Integrado',
   re:/servicios de alimentaci|diet[ée]tica|costeo|estandarizaci|inocuidad|haccp|tecnolog[íi]a de alimentos|bromatolog|auditor[íi]a y calidad|internado en servicios/i,
   ref:'Gestión de Servicios de Alimentación (sílabos UNMSM · UPeU · UNALM) · Codex Alimentarius (principios de higiene y HACCP) · normativa sanitaria de DIGESA',
   prod:'Plan de gestión del servicio de alimentación',
   u:[{macro:'Planificación del servicio y del menú',prod:'Plan alimentario y ciclo de menú del servicio',m:[
      ['Tipos de servicios de alimentación','Servicios hospitalarios, escolares e institucionales|Organización del servicio|Flujo de producción','Ficha del servicio'],
      ['Requerimientos de la colectividad','Perfil de los comensales|Recomendaciones nutricionales|Plan alimentario','Plan alimentario'],
      ['Planificación del menú','Ciclo de menú|Balance nutricional|Aceptabilidad y variedad','Ciclo de menú'],
      ['Compras y almacenamiento','Especificaciones de compra|Proveedores|Control de inventarios','Plan de abastecimiento']]},
    {macro:'Producción estandarizada y costeo',prod:'Recetario estandarizado y costeado',m:[
      ['Estandarización de recetas','Ficha técnica de la receta|Rendimiento y porcionado|Pruebas de producción','Fichas técnicas'],
      ['Costeo de preparaciones','Costo de la materia prima|Costos indirectos|Precio y margen','Costeo de preparaciones'],
      ['Producción y distribución','Planificación de la producción|Control de temperaturas|Distribución y servicio','Plan de producción'],
      ['Gestión del personal','Dotación y turnos|Capacitación|Seguridad y salud en el trabajo','Plan de personal']]},
    {macro:'Inocuidad, calidad y auditoría',prod:'Plan HACCP y auditoría del servicio',m:[
      ['Buenas prácticas de manipulación','Higiene personal|Programa de higiene y saneamiento|Control de plagas','Programa de BPM'],
      ['Sistema HACCP','Análisis de peligros|Puntos críticos de control|Límites, monitoreo y acciones correctivas','Plan HACCP'],
      ['Calidad del servicio','Indicadores de calidad|Satisfacción del comensal|Mejora continua','Tablero de calidad'],
      ['Auditoría del servicio','Lista de verificación|Hallazgos y no conformidades|Plan de acciones correctivas','Informe de auditoría']]}]},
  {k:'nut-ciencias',lab:'Ciencias básicas de la salud y la nutrición',clase:'Modular',
   re:/anatom|fisiolog|bioqu[íi]mica|biolog|qu[íi]mica|microbiolog|farmacolog|nutrici[óo]n b[áa]sica/i,
   ref:'Ciencias básicas de la salud (sílabos UNMSM · UPCH · UPeU) · guías de laboratorio institucionales',
   prod:'Portafolio de prácticas de laboratorio',
   u:[{macro:'Estructura y composición',prod:'Informe de prácticas de estructura y composición',m:[
      ['Niveles de organización','Célula, tejido, órgano y sistema|Terminología científica|Bioseguridad en el laboratorio','Guía de bioseguridad aplicada'],
      ['Estructura de los sistemas','Sistemas del organismo|Relaciones anatómicas|Modelos y preparados','Informe de práctica'],
      ['Composición química','Biomoléculas|Agua y electrolitos|Técnicas de análisis','Informe de análisis'],
      ['Integración estructura-función','Relación con la nutrición|Casos aplicados|Discusión de resultados','Caso integrador']]},
    {macro:'Función y regulación',prod:'Informe de prácticas de función y regulación',m:[
      ['Procesos fisiológicos y metabólicos','Digestión y absorción|Metabolismo energético|Regulación hormonal','Informe de práctica'],
      ['Alteraciones y su impacto nutricional','Mecanismos de alteración|Indicadores de laboratorio|Relación con la dieta','Análisis de caso'],
      ['Técnicas de laboratorio','Procedimientos estandarizados|Registro y control de calidad|Interpretación de resultados','Registro de laboratorio'],
      ['Aplicación a la nutrición','Casos nutricionales|Discusión con evidencia|Conclusiones','Portafolio sustentado']]}]}]
};
