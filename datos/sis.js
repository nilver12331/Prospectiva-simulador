/* Datos · Escuela Profesional de Ingeniería de Sistemas (SIS) · método v6.3
   Cartera del paso 1.1 (momento 1) volcada desde el barrido real del 23-09-2026: ver datos/cartera-SIS.csv y datos/evidencias/SIS-*.md.
   Los conteos y cifras de los sustentos son datos verificables; las puntuaciones 1–4 son juicio del modelo bajo reglas declaradas.
   La capacidad instalada (v) es declaración de la Escuela y se conserva de la versión anterior para las especialidades que ya existían.
   Momento 2 (panel de expertos, ronda 1 del 23-09-2026) volcado desde datos/acta-SIS.json: ver datos/evidencias/SIS-5-acta-panel-r1.md.
   Del momento 3 en adelante (competencias, matriz, objetivos, propuesta de valor, estudio) los datos siguen siendo los preparados hasta que se ejecuten esos momentos.
   Generado por herramientas/cartera-a-datos.js */
window.DATOS=window.DATOS||{};
DATOS.SIS={
 "meta": {
  "cod": "SIS",
  "nombre": "Ingeniería de Sistemas",
  "facultad": "Ingeniería y Arquitectura",
  "plan": "Plan 2026",
  "area": "Ingeniería de Sistemas e Informática",
  "campo": "la ingeniería de sistemas",
  "directora": "Mg. Rosa Huamán",
  "icono": "💻",
  "color": "#1d4ed8",
  "lema": "Del código a la operación: construir tecnología que funciona cuando alguien depende de ella.",
  "barrido": "Barrido a plan cerrado del 23-09-2026 · 53 búsquedas · 44 lecturas · evidencias en datos/evidencias/SIS-*.md",
  "capacidad": "Momento 4 · barrido de diferenciación y habilitación del 24-09-2026 (datos/capacidad/SIS-dif.json, -hab.json; evidencias SIS-6-*.md) · declaración de la Dirección en borrador (-decl.json), pendiente de firma",
  "competencias": "Paso 1.2 · momento 1 del 24-09-2026 · 5 competencias derivadas a ciegas del plan (datos/competencias/SIS-derivadas.json; evidencias SIS-7-competencias-derivadas.md)",
  "lineaBase": "Línea base literal entregada por la Escuela el 24-09-2026: 3 competencias de especialidad",
  "objetivos": "Paso 1.4 del 24-09-2026 · 5 objetivos (evidencias SIS-10-objetivos.md)"
 },
 "esp": [
  {
   "n": "Desarrollo de software e ingeniería de aplicaciones",
   "nat": "desarrollo",
   "o": "Establecida",
   "fn": 12,
   "fnx": "Requisitos · modelado · arquitectura · backend · frontend · integración de APIs · pruebas · revisión de código · CI/CD · despliegue · mantenimiento · documentación",
   "pr": "Analizar → diseñar → construir → verificar → desplegar",
   "ev": "Software desplegado en producción con su repositorio, pruebas automatizadas y documentación",
   "d": {
    "vol": 4,
    "amp": 4,
    "esc": 3,
    "rem": 3,
    "for": 2
   },
   "t": {
    "cre": 3,
    "nor": 2,
    "inv": 4,
    "dem": 3,
    "tec": 4
   },
   "i": {
    "cri": 3,
    "alc": 4
   },
   "sos": 3,
   "v": {
    "doc": 4,
    "cam": 3,
    "inf": 3,
    "dif": 2,
    "hab": 3
   },
   "fd": "Ingeniería de Sistemas de Información lidera la EDO 2025 con 5 226 puestos proyectados; banca, outsourcing, telecom, seguros y Estado convocan [E-L10][E-L1][E-L2]. Buk 2026: líder de desarrollo mediana S/ 8 300, arquitecto S/ 10 850 frente a S/ 4 331 del promedio joven [E-L11][E-L6]. Colegiatura exigida en el Estado, no visible en el privado [E-L2].",
   "ft": "Demanda de desarrolladores +15 % en 2024 (Michael Page) con desaceleración en 2026 (NEO TI 22 → 15 %) [E-L7][P-L9]; inversión en IA 3,9x y VC de US$ 45,5 M a 76,5 M 2022–2025 [P-L4][P-L6][P-L12]; sin norma con plazo propia [N].",
   "fi": "Sostiene banca, retail, telecom, salud y Estado; OIT ubica al software entre los trabajos cognitivos con exposición creciente a la IA: se automatiza código rutinario, no la arquitectura ni los requisitos [P-L10].",
   "modo": {
    "empleo": "Estado: «Especialista en desarrollo de sistemas» S/ 10 000–11 000 y «Analista programador» recurrentes en 2 089 vacantes públicas [E-L2]; LinkedIn «Desarrollador» 311 avisos [E-B12].",
    "negocio": "Fábricas de software y outsourcing (BairesDev, Inetum, Encora) y consultoras propias; oferta remota en USD [E-L1][E-L8][E-B13]."
   },
   "cod": "SIS-01",
   "barrido": "23-09-2026",
   "ac": 100,
   "just": {
    "vol": "Alto volumen: 5 226 puestos proyectados en la EDO 2025 [E-L10], 311 avisos «Desarrollador» [E-B12] y puestos recurrentes en 2 089 vacantes públicas [E-L2]; supera con holgura un volumen medio.",
    "amp": "Muchos y diversos: banca (Scotiabank, BCP), outsourcing (BairesDev, Inetum, Encora), telecom, seguros y Estado convocan [E-L1][E-L2][E-L10]; no se limita a varios sectores afines.",
    "esc": "Cuesta cubrir: +15 % de demanda en 2024 [E-L7] y 63 % de empleadores con dificultad [E-L3]; no llega a vacantes desiertas porque el 76 % sin talento se concentra en IA y ciberseguridad [E-L9].",
    "rem": "Sobre el promedio: líder de desarrollo mediana S/ 8 300 frente a S/ 4 331 del promedio joven [E-L11][E-L6]; no muy sobre porque el analista programador estatal ronda S/ 3 000 [E-L2].",
    "for": "Poco formal: el Estado exige título y colegiatura [E-L2], pero el privado, que concentra el volumen, no lo muestra en sus listados [E-L2][E-B11]; no llega a «suele exigir título».",
    "cre": "Crece: +15 % en 2024 [E-L7] y segunda ingeniería más demandada 2026 [E-L10]; no crece mucho porque la Expectativa Neta de Empleo TI desacelera de 22 a 15 % [P-L9].",
    "nor": "Norma anunciada: solo la colegiatura genérica de la Ley 28858 [N-1] y el DL 1412 sin partida adicional [N-5]; ninguna norma nombra ni reserva la función de desarrollo, por eso no es vigente.",
    "inv": "Inversión comprometida: la inversión en IA se multiplica 3,9x en 12 meses [P-L4] y el capital de riesgo pasa de US$ 45,5 M a 76,5 M entre 2022 y 2025 [P-L6][P-L12].",
    "dem": "Driver claro: 7 de 10 empresas planean automatización e IA en 2026 [E-L5] y 71 % contrató perfiles digitales en 2024 [P-L7]; no estructural porque depende del ciclo de inversión que ya desacelera [P-L9].",
    "tec": "Adoptada y estable: el software es trabajo cognitivo digitalizado de larga data [P-L10]; la transición a desarrollo asistido por IA cambia la herramienta, no la madurez del campo [P-L3].",
    "cri": "Alta: sostiene banca, retail, telecom, salud y Estado [P-L10]; no grave o irreversible porque una falla de software se corrige con despliegue, a diferencia de un incidente de seguridad [P-L2].",
    "alc": "Alcance nacional: la EDO proyecta 5 226 puestos en todo el país [E-L10] y las 2 089 vacantes públicas cubren instituciones de todas las regiones [E-L2].",
    "sos": "Riesgo moderado: la OIT ubica al software con exposición creciente a la IA, pero se automatiza el código rutinario, no la arquitectura ni los requisitos [P-L10]; en ALC solo 2–5 % es automatizable hoy [P-S]."
   },
   "panel": {
    "p": [
     4,
     4,
     4,
     4,
     4,
     4
    ],
    "med": 4,
    "icvi": 1,
    "cvr": 1,
    "ric": 0,
    "ac": 100,
    "ver": "Esencial",
    "com": {
     "P1": "Mayor volumen del país: 5 226 puestos EDO, 311 avisos, banca, outsourcing y Estado; sin esto no hay ingeniero de sistemas contratable.",
     "P2": "Núcleo del campo hasta 2031: la IA automatiza código rutinario, no arquitectura ni requisitos; el desarrollo asistido cambia la herramienta, no la madurez.",
     "P3": "Núcleo del título: Ley 28858 exige colegiatura para ejercer y el DL 1412 demanda software público; sin esta competencia SINEACE no reconoce un perfil de ingeniero de sistemas.",
     "P4": "Es lo que contrato el día uno: programar, probar y desplegar en producción. Sin esto el título no me sirve; es la base de todo puesto junior.",
     "P5": "La IA genera código rutinario, pruebas y documentación; arquitectura, requisitos e integración resisten. El egresado debe dirigir el desarrollo asistido por IA, no competir con él.",
     "P6": "Base del título en todo el país: 5 226 puestos, Estado en todas las regiones; cuatro universidades la formalizan como línea, ninguna en provincias."
    }
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     14,
     15
    ],
    "imp": [
     24
    ],
    "via": [
     27,
     23,
     25,
     26
    ]
   },
   "vjust": {
    "dif": "5 de 21 la declaran como línea nombrada (URP, UTEC, Continental, UPN, ESAN); en las otras 16 es tronco obligatorio sin nombre de línea. Varias la ofrecen: nivel 2.",
    "hab": "Ley 28858 art. 1 incluye desarrollos tecnológicos y aspectos informáticos entre labores de ingeniería refrendadas por colegiado hábil; RM 041-2017-PCM impone NTP-ISO/IEC 12207 al Estado. No existe registro ni certificación exigida al desarrollador.",
    "norma": "Ley 28858 (2006) art. 1-2 y DS 016-2008-VIVIENDA (06-06-2008) art. 3-5; RM 041-2017-PCM (02-03-2017) NTP-ISO/IEC 12207:2016",
    "registro": "",
    "quienes": [
     "URP · certificación Desarrollador de Software y Redes de Datos / Especialista en Ing. de Software e IA (2024)",
     "UTEC · concentración Desarrollo de Software y especialización Ingeniería de Software (2026)",
     "U. Continental · certificación Desarrollador de Aplicaciones Web (s. f.)",
     "UPN · certificación Bootcamp Web (s. f.)",
     "ESAN · especialización Software Engineer Developer y certificación Desarrollo de Software (2025)"
    ],
    "doc": "Equipo formado inferido por tesis asesoradas en desarrollo web y móvil (2019-2026): Eder Gutierrez Quispe, Joseph Ibrahim Cruz Rodriguez, Danny Lévano Rodríguez, Immer Elías Cuellar Rodríguez, Roel Dante Gómez Apaza, Abel Angel Sullon Macalupu, David Mamani Pari, Milton Edward Humpiri Flores, Yngue Elízabeth Ramírez Pezo. Mg. Fernando Asín reconocido por excelencia académica 2023-2.",
    "cam": "28 convenios para prácticas preprofesionales declarados por la FIA (sin detalle por empresa). Convenio marco en coordinación con IATEC (Instituto Adventista de Tecnología) para prácticas de estudiantes de Sistemas y desarrollo de software (feb. 2022; firma no verificada). Empresas de software donde egresados sustentan informes de desempeño: Negosy SAC, Well Done Solutions / WDS. Investidura de prácticas preprofesionales a 25 estudiantes en Juliaca (2022) en instituciones con convenio.",
    "inf": "Centro de Innovación Tecnológica (Lima-Ñaña, inaugurado 15-08-2023): tercer piso con laboratorio especializado con domótica para prácticas de Ingeniería de Sistemas y Eureka Lab. Laboratorios de computación modernizados en campus Tarapoto (2022). Microsoft 365 como entorno de trabajo. No hay inventario público de equipos ni de licencias de desarrollo."
   },
   "vdecl_estado": "con evidencia"
  },
  {
   "n": "Ciencia de datos e inteligencia artificial",
   "nat": "datos",
   "o": "Emergente",
   "fn": 9,
   "fnx": "Ingesta · gobierno del dato · modelado · entrenamiento · validación · MLOps · monitoreo · comunicación de resultados · ética algorítmica",
   "pr": "Gobernar el dato → modelar → entrenar → evaluar → implantar",
   "ev": "Modelo en producción con su informe de evaluación y su tablero de decisión",
   "d": {
    "vol": 4,
    "amp": 4,
    "esc": 4,
    "rem": 4,
    "for": 2
   },
   "t": {
    "cre": 4,
    "nor": 3,
    "inv": 4,
    "dem": 3,
    "tec": 3
   },
   "i": {
    "cri": 3,
    "alc": 4
   },
   "sos": 3,
   "v": {
    "doc": 4,
    "cam": 3,
    "inf": 3,
    "dif": 2,
    "hab": 3
   },
   "fd": "Banca, telcos, retail y consultoras convocan; +20 % de demanda en IA y big data en 2025 «con falta de profesionales»; 76 % de empleadores no encuentra talento en IA; déficit >2 700 científicos de datos [E-L7][E-L9][P-S]. Remuneración divergente: Indeed S/ 3 755, levels.fyi PEN 83 040 anuales [E-B10].",
   "ft": "Gasto en IA US$ 497 M en 2025, +20 % anual hasta 2027; CAGR 21,1 % 2025–2029; 6 de 10 empresas en piloto o implementación [P-L3][P-S]. Ley 31814 y reglamento DS 115-2025-PCM con plazos de adecuación 2026–2029, sin presupuesto [N-4].",
   "fi": "Es la especialidad que construye la automatización; se automatiza la exploración y el modelado estándar, no la definición del problema ni la gobernanza [P-L4].",
   "modo": {
    "empleo": "LinkedIn Perú «Data Scientist» 844 vacantes [E-B10]; aviso Get on Board «Data Engineer, Lima, híbrido, US$ 1 500–2 500» (18-09-2026) [E-L8].",
    "negocio": "Consultoras de datos (Bluetab, Artefact) y trabajo remoto en USD; freelance sin cifra [E-L8]."
   },
   "cod": "SIS-02",
   "barrido": "23-09-2026",
   "ac": 100,
   "just": {
    "vol": "Alto volumen: LinkedIn Perú registra 844 vacantes «Data Scientist» [E-B10] y Get on Board 2 locales más 24 remotas [E-L8]; es el mayor conteo del barrido por especialidad.",
    "amp": "Muchos y diversos: banca, telcos, retail y consultoras de datos convocan [E-L7][E-B10], y manufactura y minería adoptan IA en inventarios y cadena de suministro [P-L3].",
    "esc": "Vacantes desiertas: 76 % de empleadores no encuentra talento en IA [E-L9], +20 % de demanda «con falta de profesionales» [E-L7] y déficit de más de 2 700 científicos de datos [P-S].",
    "rem": "Muy sobre el promedio: levels.fyi PEN 83 040 anuales y Data Engineer US$ 1 500–2 500 [E-B10][E-L8] frente a S/ 4 331 del promedio joven [E-L6]; Indeed S/ 3 755 es dato divergente.",
    "for": "Poco formal: el privado no exige colegiatura en listados [E-L2][E-B11] y la Ley 31814 regula los sistemas, no reserva la función a titulados [N-4].",
    "cre": "Crece mucho: +20 % de demanda en 2025 [E-L7], CAGR 21,1 % 2025–2029 y 98 % de empresas aumentará inversión [P-L3][P-S]; supera el simple crecimiento.",
    "nor": "Norma vigente: Ley 31814 y DS 115-2025-PCM vigentes desde 22-01-2026 con adecuación escalonada 2026–2029 [N-4]; no nivel 4 porque ninguna asigna presupuesto propio [N-4].",
    "inv": "Inversión comprometida: gasto en IA US$ 497 M en 2025 con +20 % anual hasta 2027 [P-L3] y multiplicación 3,9x en 12 meses, la mayor de Latinoamérica [P-L4].",
    "dem": "Driver claro: 45,6 % de empresas implementó IA en 2025 y 6 de 10 están en piloto [P-L3][P-S]; no estructural porque solo 10 % tiene IA totalmente en nube [P-L4].",
    "tec": "En adopción: la IA está en adopción y la generativa aún en experimentación [P-L3]; 6 de 10 empresas en piloto [P-S] indica que no es tecnología adoptada y estable.",
    "cri": "Alta: sus modelos deciden en banca, telcos y retail y la norma exige análisis de impacto por riesgo [N-4]; no grave porque la supervisión humana es obligatoria [N-4].",
    "alc": "Alcance nacional: la Ley 31814 aplica a salud, educación, justicia y finanzas en todo el país [N-4] y la demanda cruza todos los sectores [E-L7].",
    "sos": "Riesgo moderado: construye la automatización; se automatiza la exploración y el modelado estándar, no la definición del problema ni la gobernanza [P-L4][P-L3]."
   },
   "panel": {
    "p": [
     4,
     4,
     3,
     3,
     4,
     3
    ],
    "med": 3.5,
    "icvi": 1,
    "cvr": 1,
    "ric": 1,
    "ac": 100,
    "ver": "Esencial",
    "com": {
     "P1": "844 vacantes, 76 % de empleadores sin talento en IA, +20 % anual; remuneración muy sobre el promedio. El mercado lo exige ya.",
     "P2": "Irrupción ya observada (45,6 % implementó IA en 2025); CAGR 21,1 % al 2029 proyecta demanda plena cuando egrese la primera promoción. Gobernanza y definición del problema siguen humanas.",
     "P3": "Ley 31814 y DS 115-2025-PCM obligan a clasificar riesgos, análisis de impacto y supervisión humana desde 2026; el egresado debe dominar IA gobernada, no todos ser científicos de datos.",
     "P4": "Es el perfil que más me cuesta cubrir, pero no todo egresado será científico de datos; sí exijo fundamentos sólidos de datos y modelos para crecer ahí.",
     "P5": "Es la especialidad que construye la automatización. Se automatiza EDA y modelado estándar; MLOps, gobernanza del dato y definición del problema no. Inversión 3,9x y Ley 31814.",
     "P6": "Esencial pero saturada en Lima: UTEC, Continental y UPN ya la declaran; en Juliaca y Tarapoto la contratan minería y agro dentro de proyectos, no como puesto."
    }
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     16,
     15
    ],
    "imp": [
     24
    ],
    "via": [
     28,
     29,
     21,
     23
    ]
   },
   "vjust": {
    "dif": "8 de 21 la declaran con nombre propio (USIL, UTEC, URP, UCV, UPAO, Continental, ESAN, Tec); es la línea más extendida del barrido pero no alcanza la mayoría. Nivel 2.",
    "hab": "DS 115-2025-PCM regula sistemas de IA por riesgo, evaluación de impacto y registro del sistema de riesgo alto (art. 31.1), con la SGTD como autoridad; no crea registro ni certificación de profesionales. Título y colegiatura bastan.",
    "norma": "Ley 31814 (2023) y DS 115-2025-PCM (09-09-2025, vigente 90 días hábiles después) art. 8, 22, 30-31 y 1.ª DCF; Ley 28858 (2006)",
    "registro": "",
    "quienes": [
     "USIL · mención Analítica de Datos No Estructurados (2025)",
     "UTEC · concentraciones Ciencia de Datos Aplicada e Inteligencia Artificial; especializaciones IA, Deep Learning, Data Analytics (2026)",
     "URP · certificación Especialista en Ingeniería de Software e Inteligencia Artificial (2024)",
     "UCV · certificaciones Analista en Ciencia de Datos y Desarrollador de Soluciones con IA (s. f.)",
     "UPAO · carrera Ingeniería de Sistemas e Inteligencia Artificial, tronco IA y Data & Analytics (2025)",
     "U. Continental · certificación Experto en Ciencia de Datos y Machine Learning (s. f.)",
     "ESAN · certificaciones Data Science y Especialista en Inteligencia Artificial (2025)",
     "Tec de Monterrey · concentración Sistemas Inteligentes Avanzados (2026)"
    ],
    "doc": "Equipo formado (doc con evidencia): Angel Rosendo Condori Coaquira (ML clasificación de quinua, deep learning café), Nemias Saboya Rios (aprendizaje automático e-commerce, CNN+LSTM), Jorge Alejandro Sánchez Garcés (ML financiero), Roel Dante Gómez Apaza (ML rendimiento académico), Miguel Angel Valles Coral (visión artificial cacao), Abel Angel Sullon Macalupu (CNN naranjos), Fredy Abel Huanca Torres (YOLO/TrOCR, chatbot), Danny Lévano Rodríguez y equipo Juliaca (IA + sensores para heladas, 2026). En posgrado: PhD Javier Linkolk López Gonzales (ML en series temporales ambientales, 2025). La FIA ofrece además la EP de Ingeniería en Ciencia de Datos e IA. Los indicadores cam e inf son estimados.",
    "cam": "Escenarios de investigación aplicada: CITEacuícola Ahuashiyacu (Tarapoto) como sitio de validación del prototipo IoT+CNN de tilapia (proyecto PIA-PDT2024-01, S/ 30 000); parcelas agrícolas en Caracoto-Juliaca (heladas). 42 convenios de investigación declarados por la FIA. No se halló convenio firmado específico de prácticas en ciencia de datos; nivel 3 estimado.",
    "inf": "Laboratorios de computación (CIT Lima 2023; Tarapoto 2022) y acceso a AWS Academy (nube). No hay evidencia pública de laboratorio con GPU o de licencias de plataformas de datos; nivel 3 estimado."
   },
   "vdecl_estado": "estimado · por confirmar por la Dirección"
  },
  {
   "n": "Ciberseguridad y gestión de riesgos digitales",
   "nat": "seguridad",
   "o": "Establecida",
   "fn": 10,
   "fnx": "Análisis de riesgos · vulnerabilidades · pruebas de penetración · SOC · respuesta a incidentes · forense · cumplimiento · concientización · continuidad · identidades",
   "pr": "Evaluar el riesgo → proteger → detectar → responder → recuperar",
   "ev": "Informe de riesgos y plan de respuesta a incidentes aprobado por la organización",
   "d": {
    "vol": 3,
    "amp": 4,
    "esc": 4,
    "rem": 4,
    "for": 3
   },
   "t": {
    "cre": 4,
    "nor": 4,
    "inv": 3,
    "dem": 3,
    "tec": 3
   },
   "i": {
    "cri": 4,
    "alc": 4
   },
   "sos": 4,
   "v": {
    "doc": 4,
    "cam": 3,
    "inf": 3,
    "dif": 2,
    "hab": 4
   },
   "fd": "PCM: «brecha crítica de profesionales capacitados en ciberseguridad»; necesidad proyectada de 7 000–13 500 profesionales; 76 % de empleadores sin talento en IA y ciberseguridad [E-B7][E-L9]. Remuneración muy sobre el promedio (S/ 9 410–19 440) [E-L11].",
   "ft": "748 M de intentos de ataque en el primer semestre de 2025; sector público principal blanco 2025 [P-L2][P-L1]. Impulso normativo con plazo: DS 126-2025-PCM (vigente 03-02-2026, reporte en 48 h), Res. SBS 504-2021, Res. 003-2023-PCM/SGTD (Oficial de Seguridad obligatorio) [N-2][N-3][N-8]. +15 % 2024, +20 % 2025 [E-L7].",
   "fi": "Criticidad grave (servicios públicos, banca, salud); alcance nacional. Se automatiza el SOC de nivel 1; no la respuesta ni el gobierno del riesgo [P-L1].",
   "modo": {
    "empleo": "Jefaturas y especialistas en banca, fintech, telecom y Fortinet; Buk 2026 jefe de ciberseguridad mediana S/ 11 380 [E-L11][E-L1]; ~123 ofertas contadas en 2023 [E-B7].",
    "negocio": "Servicios gestionados de seguridad y consultoras; la SBS exige evaluación independiente con certificaciones internacionales [N-3]."
   },
   "cod": "SIS-03",
   "barrido": "23-09-2026",
   "ac": 100,
   "just": {
    "vol": "Volumen medio: ~123 ofertas contadas en 2023 [E-B7] y jefaturas en banca, fintech y telecom [E-L1]; la necesidad proyectada de 7 000–13 500 [E-B7] es demanda futura, no avisos, por eso no es alto.",
    "amp": "Muchos y diversos: banca, fintech, telecom y Fortinet convocan [E-L1][E-L11] y la norma obliga a sectores críticos y a toda entidad pública [N-2][N-8].",
    "esc": "Vacantes desiertas: la PCM habla de «brecha crítica de profesionales» [E-B7] y 76 % de empleadores no encuentra talento en ciberseguridad [E-L9].",
    "rem": "Muy sobre el promedio: jefe de ciberseguridad mediana S/ 11 380 (9 410–19 440) [E-L11] y 70k–115k anuales [E-B5] frente a S/ 7 807 del promedio senior [E-L6].",
    "for": "Suele exigir título: función obligatoria con Oficial de Seguridad en el Estado [N-8] y certificaciones internacionales reconocidas por la SBS [N-3]; no nivel 4 porque el reconocimiento es de facto, sin colegiatura específica [N-7].",
    "cre": "Crece mucho: +15 % en 2024 y +20 % en 2025 [E-L7], con 748 M de intentos de ataque en el primer semestre de 2025 [P-L2].",
    "nor": "Norma con plazo: DS 126-2025-PCM vigente 03-02-2026 con reporte en 48 h [N-2], SBS 504-2021 exigible desde 07-2022 [N-3] y SGSI público 2024–2026 [N-8]; la tabla normativa le asigna nivel 4.",
    "inv": "Inversión sostenida: el Estado gasta ~US$ 30 M anuales en respuesta [P-S]; no comprometida porque ninguna norma asigna presupuesto propio [N-2][N-3] ni hay cifra privada.",
    "dem": "Driver claro: 748 M de intentos de ataque y sector público principal blanco [P-L2][P-L1]; no estructural porque el gasto es reactivo y sin presupuesto programado [P-S].",
    "tec": "En adopción: la base está adoptada pero los frentes de seguridad de IA y OT cambian de forma continua [P]; no estable, el reglamento recién entra en vigor en 2026 [N-2].",
    "cri": "Grave o irreversible: incidentes en servicios públicos, banca y salud, con sector público como blanco principal [P-L1][P-L2] y sanciones de la SBS [N-3].",
    "alc": "Alcance nacional: obliga a proveedores de sectores críticos y a todas las entidades públicas [N-2][N-8]; el ataque no distingue región [P-L2].",
    "sos": "Insustituible: se automatiza el SOC de nivel 1, no la respuesta ni el gobierno del riesgo [P-L1]; además la función es obligatoria por norma [N-3][N-8]."
   },
   "panel": {
    "p": [
     4,
     4,
     4,
     4,
     4,
     4
    ],
    "med": 4,
    "icvi": 1,
    "cvr": 1,
    "ric": 0,
    "ac": 100,
    "ver": "Esencial",
    "com": {
     "P1": "Brecha crítica declarada por PCM, 7 000–13 500 profesionales requeridos, mediana S/ 11 380; norma obliga Oficial de Seguridad.",
     "P2": "Norma con plazo vigente desde 2026 y 748 M de ataques observados; seguridad de IA y OT irrumpe 2027–2029 (proyección). Función obligatoria, no automatizable.",
     "P3": "Única especialidad con nivel 4 pleno: SBS 504-2021, DS 126-2025-PCM y Oficial de Seguridad obligatorio en el Estado; ningún perfil de egreso se defiende sin ella.",
     "P4": "En banca y retail el regulador me obliga y no encuentro gente; todo ingeniero que contrato debe desarrollar y operar con seguridad desde el diseño.",
     "P5": "SOC nivel 1 se automatiza; respuesta, gobierno del riesgo y seguridad de IA y OT no. Función obligatoria por norma y tecnología madura en carrera continua.",
     "P6": "Norma obliga a toda entidad pública con Oficial de Seguridad: gobiernos regionales, UGEL y hospitales de provincia. Solo UPC y UTEC la formalizan, ambas en Lima."
    }
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     14,
     15
    ],
    "imp": [
     17,
     24
    ],
    "via": [
     26,
     19,
     20,
     22,
     23
    ]
   },
   "vjust": {
    "dif": "4 de 21 la declaran como mención o concentración (UPC, UTEC, URP, Tec); UNA Puno, ULima, UCSM, UTP y UCV solo dictan cursos. Varias la ofrecen: nivel 2.",
    "hab": "SBS 504-2021 art. 8 hace obligatoria la función de seguridad y ciberseguridad y art. 27.2 exige certificaciones internacionales al evaluador; Res. 003-2023-PCM/SGTD impone OSCD y NTP 27001 al Estado; DS 126-2025-PCM obliga a notificar al CNSD en 48 h.",
    "norma": "Res. SBS 504-2021 (19-02-2021) art. 8, 24.2.g y 27.2; Res. 003-2023-PCM/SGTD (06-09-2023); DS 126-2025-PCM (04-11-2025, vigente 03-02-2026); RM 004-2016-PCM (14-01-2016); Ley 30096 (22-10-2013) mod. Ley 32314 (29-04-2025) y DL 1741 (13-02-2026)",
    "registro": "Certificaciones internacionales exigidas por la SBS al evaluador del SGSI-C (Res. 504-2021 art. 27.2); CISA nombrada expresamente en Res. SBS 11699-2008; certificación ISO/IEC 27001 admitida por Res. 003-2023-PCM/SGTD",
    "quienes": [
     "UPC · mención Gestión de Seguridad de la Información (2022)",
     "UTEC · concentraciones Seguridad de Software y Sistemas y AI-Security; especializaciones Ciberseguridad Defensiva y Ofensiva Ética (2026)",
     "URP · certificación Analista de Ciberseguridad (2024)",
     "Tec de Monterrey · concentración Ciberseguridad (2026)"
    ],
    "doc": "Equipo formado (doc con evidencia) por tesis asesoradas en ISO 27001/27002, IDS/IPS y controles: Immer Elías Cuellar Rodríguez (ISO 27001 en municipalidades e Induamerica), Jorge Eddy Otazu Luque (IDS/IPS UPeU Juliaca), Miguel Angel Valles Coral (ISO 27001 municipalidad), Lizeth Geanina Huanca López (ISO 27002 en Bitness Corp y Unión Peruana del Norte), Fernando Manuel Asin Gomez (controles de protección de datos), Nemias Saboya Rios (detección de contraseñas filtradas CNN+LSTM, 2026). La FIA ofrece además la EP de Ingeniería de Ciberseguridad. Los indicadores cam e inf son estimados.",
    "cam": "Alianza con Fortinet declarada en las páginas de la FIA (sin detalle público del convenio). Organizaciones donde se aplicaron tesis: municipalidades (Florida-Bongará), Induamerica Chiclayo SAC, Bitness Corp SAC, Unión Peruana del Norte, UPeU Juliaca. Nivel 3 estimado: no se verificó convenio firmado vigente con SOC, empresa de seguridad o entidad de gobierno.",
    "inf": "Sistema IDS/IPS implementado en UPeU Juliaca (tesis 2019), laboratorio de redes y comunicación en Tarapoto (2022), laboratorios de computación del CIT (2023), alianza Fortinet. Sin evidencia pública de laboratorio de ciberseguridad o cyber range; nivel 3 estimado."
   },
   "vdecl_estado": "estimado · por confirmar por la Dirección"
  },
  {
   "n": "Infraestructura en la nube y DevOps",
   "nat": "infraestructura",
   "o": "Establecida",
   "fn": 8,
   "fnx": "Arquitectura cloud · infraestructura como código · contenedores · CI/CD · observabilidad · costos · automatización · respaldo",
   "pr": "Diseñar la plataforma → automatizar → operar → observar → optimizar",
   "ev": "Plataforma operando con infraestructura como código, pipelines y tablero de observabilidad",
   "d": {
    "vol": 4,
    "amp": 4,
    "esc": 3,
    "rem": 4,
    "for": 2
   },
   "t": {
    "cre": 4,
    "nor": 2,
    "inv": 4,
    "dem": 3,
    "tec": 4
   },
   "i": {
    "cri": 3,
    "alc": 3
   },
   "sos": 3,
   "v": {
    "doc": 3,
    "cam": 3,
    "inf": 3,
    "dif": 3,
    "hab": 3
   },
   "fd": "Jobsora 617 avisos «aws», Glassdoor 91 «aws engineer» [E-B8]; consultoras, fintech, multinacionales y Estado; Buk jefe de infraestructura mediana S/ 7 190 (hasta 12 610) [E-L11]. Arquitectos cloud +15 % en 2024 [E-L7].",
   "ft": "Demanda de nube híbrida +600 % en cinco meses (Red Hat); banca, telcos y gobierno lideran; data centers de US$ 100 M (ON) y anuncios de AWS en 2026 [P-L5][P-L11][P-S]. Sin norma con plazo propia; la SBS exige certificaciones ISO 27017/27018 a proveedores cloud [N-3].",
   "fi": "Soporte de cargas de IA y servicios del Estado; se automatizan IaC y pipelines de rutina, la operación híbrida y regulada exige criterio [P-L4].",
   "modo": {
    "empleo": "Aviso Valtx «Especialista de Infraestructura Cloud – AWS»: DevOps, CI/CD, FinOps, «planilla completa desde el primer día» [E-B8]; Estado «Especialista en infraestructura tecnológica» S/ 11 000 [E-L2].",
    "negocio": "Consultoras cloud (Valtx, Bluetab) y servicios gestionados [E-B8]."
   },
   "cod": "SIS-04",
   "barrido": "23-09-2026",
   "ac": 100,
   "just": {
    "vol": "Alto volumen: Jobsora 617 avisos «aws» y Glassdoor 91 «aws engineer» [E-B8], más plazas estatales de infraestructura a S/ 11 000 [E-L2].",
    "amp": "Muchos y diversos: consultoras cloud (Valtx, Bluetab), fintech y multinacionales [E-B8]; banca, telcos y gobierno lideran la inversión [P-L5].",
    "esc": "Cuesta cubrir: arquitectos cloud +15 % en 2024 [E-L7] y 63 % de dificultad general [E-L3]; sin cifra específica de vacantes desiertas como en IA y ciberseguridad [E-L9].",
    "rem": "Muy sobre el promedio: Estado S/ 11 000 [E-L2] y jefe de infraestructura hasta S/ 12 610 [E-L11], con «planilla completa desde el primer día» [E-B8], frente a S/ 7 807 senior [E-L6].",
    "for": "Poco formal: el privado no exige colegiatura [E-L2][E-B11]; la SBS exige certificaciones ISO 27017/27018 al proveedor cloud, no título al profesional [N-3].",
    "cre": "Crece mucho: demanda de nube híbrida +600 % en cinco meses [P-L5], +15 % en 2024 [E-L7] y nueva etapa de AWS en Perú en 2026 [P-S].",
    "nor": "Norma anunciada: sin norma propia con plazo; la SBS 504-2021 solo exige certificaciones a proveedores cloud [N-3]; no vigente para la especialidad, no ausente.",
    "inv": "Inversión comprometida: data centers de ON Empresas US$ 100 M, GTD y Fiberlux [P-L11] y anuncio de AWS [P-S]; capital ya asignado, no solo sostenido.",
    "dem": "Driver claro: banca, telcos y gobierno lideran [P-L5]; no estructural porque ~50 % opera híbrido y solo 10 % tiene IA totalmente en nube [P-S].",
    "tec": "Adoptada y estable: la nube híbrida está adoptada [P-L5]; FinOps y platform engineering son extensiones emergentes, no cambio de base [P].",
    "cri": "Alta: soporta cargas de IA y servicios del Estado [P-L4]; no grave porque una caída de plataforma se recupera con respaldo, a diferencia de una brecha [P-L2].",
    "alc": "Alcance regional: data centers y consultoras cloud se concentran en Lima [P-L11][E-B8]; el Estado lo demanda pero la infraestructura es centralizada.",
    "sos": "Riesgo moderado: se automatizan IaC y pipelines de rutina; la operación híbrida y regulada exige criterio [P-L4] y cumplimiento de certificaciones [N-3]."
   },
   "panel": {
    "p": [
     4,
     4,
     3,
     4,
     4,
     3
    ],
    "med": 4,
    "icvi": 1,
    "cvr": 1,
    "ric": 1,
    "ac": 100,
    "ver": "Esencial",
    "com": {
     "P1": "617 avisos AWS, arquitectos cloud +15 %, nube híbrida +600 %; todo aviso de desarrollo pide despliegue en nube y CI/CD.",
     "P2": "Nube híbrida adoptada (+600 % observado); operación de infraestructura para IA y data centers irrumpe 2026–2028. Todo software del egresado correrá ahí.",
     "P3": "Sin norma propia, pero la SBS exige ISO 27017/27018 y SOC 2 a la nube regulada; el egresado debe operar plataformas bajo cumplimiento, no solo desplegarlas.",
     "P4": "Todo lo que construimos corre en nube con pipelines; un junior sin contenedores, CI/CD y observabilidad me cuesta seis meses de entrenamiento.",
     "P5": "Sin plataforma no hay IA en producción. IaC y pipelines rutinarios se automatizan; la operación híbrida regulada, FinOps y platform engineering exigen criterio. Nube adoptada y estable.",
     "P6": "Ninguna universidad la declara como línea: diferencia clara. Pero data centers y consultoras cloud están en Lima; en regiones la contrata el Estado."
    }
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     18,
     14
    ],
    "imp": [
     24
    ],
    "via": [
     25,
     19,
     23
    ]
   },
   "vjust": {
    "dif": "Solo UTEC nombra una línea afín (Infraestructura, con DevOps). Nube aparece como curso suelto en ULima, UTP, USIL, UCV, UPAO y ESAN. Pocas la ofrecen: nivel 3.",
    "hab": "SBS 504-2021 art. 24.2.g exige al proveedor de nube certificaciones ISO 27001/27017/27018 y SOC 2 tipo 2 (organizacionales, no personales) y autorización SBS; NTP 27001 obligatoria en el Estado. Sin registro ni certificación del profesional.",
    "norma": "Res. SBS 504-2021 (19-02-2021) art. 24.2.g, 24.3 y 25; RM 004-2016-PCM (14-01-2016) y Res. 003-2023-PCM/SGTD (06-09-2023) NTP-ISO/IEC 27001; Ley 28858 (2006)",
    "registro": "",
    "quienes": [
     "UTEC · concentración Infraestructura, con cursos DevOps, DevSecOps y MLOps (2026)"
    ],
    "doc": "Equipo parcial inferido por tesis asesoradas: Angel Rosendo Condori Coaquira (CI/CD para aplicaciones empresariales 2020; modelo CI/CD para Very Small Entities 2025), Roel Dante Gómez Apaza (informes de desempeño en WDS / Well Done Solutions 2025-2026), Danny Lévano Rodríguez (arquitectura escalable 2025). El acuerdo AWS Academy (2020) contempla docentes acreditados por AWS, sin lista pública de acreditados.",
    "cam": "Acuerdo firmado con AWS Academy (09-09-2020): cursos gratuitos, exámenes de práctica y 50 % de descuento en certificaciones AWS; vigencia actual no verificada públicamente. Empresas de software donde egresados sustentan informes con despliegue continuo: Well Done Solutions / WDS. Data Center Apurímac (informe de operación e incidencias, 2025). 28 convenios de prácticas de la FIA sin detalle.",
    "inf": "AWS Academy provee laboratorios en la nube; laboratorios de computación del CIT (2023) y Tarapoto (2022); Microsoft 365. No hay evidencia pública de centro de datos académico propio ni de clúster de contenedores; nivel 3 (parcial)."
   },
   "vdecl_estado": "con evidencia"
  },
  {
   "n": "Gestión de proyectos y servicios de TI",
   "nat": "gestión TI",
   "o": "Establecida",
   "fn": 9,
   "fnx": "Planificación · alcance y cambio · dirección de equipos · control · proveedores · ITIL · acuerdos de nivel · mejora continua · reporte",
   "pr": "Planificar → dirigir → controlar → entregar → operar el servicio",
   "ev": "Proyecto entregado con acta de cierre y catálogo de servicios operando bajo acuerdos de nivel",
   "d": {
    "vol": 4,
    "amp": 4,
    "esc": 2,
    "rem": 3,
    "for": 3
   },
   "t": {
    "cre": 2,
    "nor": 2,
    "inv": 3,
    "dem": 2,
    "tec": 3
   },
   "i": {
    "cri": 3,
    "alc": 3
   },
   "sos": 4,
   "v": {
    "doc": 4,
    "cam": 3,
    "inf": 3,
    "dif": 3,
    "hab": 3
   },
   "fd": "Buk 2026: gestión ágil de proyectos mediana S/ 7 290; Scrum Master S/ 5 646 [E-L11][E-B14]. Sin señal específica de escasez.",
   "ft": "Sin serie propia; drivers: portafolio de IA (6 de 10 empresas en piloto) y Plan de Gobierno y Transformación Digital 2024–2026 [P-S]. Reglamento DL 1412 sin presupuesto adicional [N-5].",
   "fi": "La ejecución de la inversión en IA depende de gestión; negociación y priorización no se automatizan [P-L4].",
   "modo": {
    "empleo": "Glassdoor 52 avisos «PMO» en Lima; BeBee 598+ «gestión de proyectos»; consultoras buscan jefes de PMO para banca [E-B14]; Estado «Analista Scrum Master» [E-L2].",
    "negocio": "Consultoría de proyectos por programa y freelance (Freelancermap) [E-B13][E-B14]."
   },
   "cod": "SIS-05",
   "barrido": "23-09-2026",
   "ac": 100,
   "just": {
    "vol": "Alto volumen: BeBee 598+ avisos «gestión de proyectos» y Glassdoor 52 «PMO» en Lima [E-B14], más «Analista Scrum Master» en el Estado [E-L2].",
    "amp": "Muchos y diversos: consultoras buscan jefes de PMO para banca [E-B14], el Estado convoca [E-L2] y existe consultoría freelance por programa [E-B13].",
    "esc": "Se cubre fácil: el barrido no registra señal específica de escasez [E-L11]; no se cubre sola porque 63 % de empleadores reporta dificultad general [E-L3].",
    "rem": "Sobre el promedio: gestión ágil mediana S/ 7 290 [E-L11] frente a S/ 4 331 [E-L6]; no muy sobre porque el Scrum Master queda en S/ 5 646 [E-B14].",
    "for": "Suele exigir título: el Estado exige título y colegiatura CIP [E-L2][E-B11] bajo la Ley 28858 [N-1]; no nivel 4 porque el privado no exige colegiatura ni certificación obligatoria.",
    "cre": "Estancado: sin serie propia [P] y la Expectativa Neta de Empleo TI cae de 22 a 15 % [P-L9]; no decrece porque los avisos siguen activos [E-B14].",
    "nor": "Norma anunciada: DL 1412 y DS 029-2021-PCM sin presupuesto adicional [N-5]; Contraloría e Invierte.pe sin norma específica localizada [N-4].",
    "inv": "Inversión sostenida: el portafolio de IA con 6 de 10 empresas en piloto [P-S] financia proyectos; no comprometida porque no hay monto propio.",
    "dem": "Driver débil: la demanda se deriva del portafolio de IA y del Plan de Gobierno y Transformación Digital 2024–2026 [P-S], sin dato propio.",
    "tec": "Sin dato directo en el barrido: se puntúa por analogía con desarrollo (SIS-01), cuyos marcos ágiles ya están en adopción, como muestra el puesto de Scrum Master en el Estado [E-L2].",
    "cri": "Alta: la ejecución de la inversión en IA depende de gestión [P-L4]; no grave porque un proyecto fallido se reprograma sin daño irreversible.",
    "alc": "Alcance regional: PMO y consultoras se concentran en Lima [E-B14]; el Estado extiende a regiones [E-L2] sin llegar a cobertura nacional documentada.",
    "sos": "Insustituible: negociación y priorización no se automatizan [P-L4]; la prospectiva le asigna sostenibilidad alta [P]."
   },
   "panel": {
    "p": [
     3,
     3,
     3,
     3,
     3,
     3
    ],
    "med": 3,
    "icvi": 1,
    "cvr": 1,
    "ric": 0,
    "ac": 100,
    "ver": "Esencial",
    "com": {
     "P1": "598+ avisos de gestión de proyectos y 52 PMO; mediana S/ 7 290; se cubre sin escasez, pero es la ruta de ascenso del ingeniero.",
     "P2": "Sin serie propia, pero la ejecución del portafolio de IA (6 de 10 en piloto) depende de gestión; negociación y priorización no se automatizan al 2031.",
     "P3": "DL 1412 y DS 029-2021-PCM estructuran proyectos y servicios digitales del Estado, que exige título y colegiatura CIP; SINEACE espera gestión de proyectos en todo perfil de ingeniería.",
     "P4": "No lo pido el día uno, pero al tercer año espero que lidere entregas y opere servicios con acuerdos de nivel; es la ruta a jefatura.",
     "P5": "Negociación, priorización y gestión de portafolio de IA no se automatizan; el seguimiento y reportes sí. Esencial como capacidad transversal, no como especialidad dominante.",
     "P6": "Gobiernos regionales y universidades públicas contratan jefes de proyecto TI con colegiatura; solo UPC lo declara como mención. Esencial para el ejercicio en provincia."
    }
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     14,
     15
    ],
    "imp": [
     24
    ],
    "via": [
     26,
     30,
     23
    ]
   },
   "vjust": {
    "dif": "2 de 21 la nombran (UPC, UTEC). Gestión de proyectos y servicios TI es curso obligatorio en UTP, ULima, UCSM, UCV y USIL, sin línea. Pocas: nivel 3.",
    "hab": "Ley 28858 art. 1.a incluye gerencias y supervisiones de procesos de ingeniería con aspectos informáticos; DS 029-2021-PCM art. 4.2 encarga al Comité de Gobierno Digital el portafolio de proyectos. Ninguna norma exige PMP, ITIL ni registro.",
    "norma": "Ley 28858 (2006) art. 1.a y DS 016-2008-VIVIENDA (06-06-2008); DS 029-2021-PCM (19-02-2021) art. 4.2",
    "registro": "",
    "quienes": [
     "UPC · mención Gestión de Proyectos con Arquitectura Empresarial (2022)",
     "UTEC · concentración Liderazgo y Gestión Tecnológica; especialización Gestión de Plataformas y Productos Digitales (2026)"
    ],
    "doc": "Equipo formado (doc con evidencia) por tesis asesoradas en ITIL, PMBOK, COBIT y CMMI-SVC: Lizeth Geanina Huanca López (COBIT 5 + PMBOK 6 en Eterniasoft; gestión de incidentes y peticiones), Danny Lévano Rodríguez (ITIL v4 en gestión de incidencias), Jenson Daniel Chambi Aguilar (ITIL v3 incidencias y problemas), Nemias Saboya Rios (CMMI SVC e ITIL v3), Nancy Esther Casildo Bedón (ITIL difuso en universidades privadas), Milton Edward Humpiri Flores (operación de data center). Los indicadores cam e inf son estimados.",
    "cam": "Organizaciones de las tesis: Eterniasoft, proveedores de mantenimiento automotriz, áreas de desarrollo de universidades privadas, Data Center Apurímac. Escenario interno: DTI de la UPeU y suite UPeU Lamb System (académico, RR. HH., finanzas, aprendizaje). 28 convenios de prácticas de la FIA sin detalle; nivel 3 estimado.",
    "inf": "Laboratorios de computación y Microsoft 365 (incluye herramientas de planificación). No hay evidencia pública de licencias de herramientas ITSM o PPM; nivel 3 estimado."
   },
   "vdecl_estado": "estimado · por confirmar por la Dirección"
  },
  {
   "n": "Arquitectura empresarial y transformación digital",
   "nat": "gestión TI",
   "o": "Emergente",
   "fn": 6,
   "fnx": "Diagnóstico de madurez · alineamiento estrategia–tecnología · arquitectura objetivo · portafolio · gestión del cambio · medición del valor",
   "pr": "Diagnosticar → alinear → diseñar la arquitectura → priorizar → medir el valor",
   "ev": "Hoja de ruta de transformación digital aprobada por la alta dirección con su arquitectura objetivo",
   "d": {
    "vol": 2,
    "amp": 3,
    "esc": 4,
    "rem": 4,
    "for": 3
   },
   "t": {
    "cre": 3,
    "nor": 3,
    "inv": 3,
    "dem": 3,
    "tec": 3
   },
   "i": {
    "cri": 3,
    "alc": 4
   },
   "sos": 4,
   "v": {
    "doc": 3,
    "cam": 2,
    "inf": 2,
    "dif": 3,
    "hab": 3
   },
   "fd": "71 % de empresas incorporó perfiles digitales en 2024; el perfil que «diseña arquitecturas que integran IA, nube y datos» lidera la EDO [E-L10][P-L7]. Remuneración muy sobre el promedio.",
   "ft": "Política Nacional de Transformación Digital al 2030 (DS 085-2023-PCM) y Plan 2024–2026, sin presupuesto explícito [N-9][P-S]; 60 % de empresas evaluando IA [P-L4]; 7 de 10 planean automatización en 2026 [E-L5].",
   "fi": "Sin arquitectura la inversión en IA se fragmenta; la decisión y el gobierno son humanos [P-L4].",
   "modo": {
    "empleo": "Sin conteo propio; puestos senior en banca y servicios de transformación; Buk: arquitecto de software S/ 10 850, subgerente TI S/ 12 210, CTO S/ 15 210 [E-L11][E-B14].",
    "negocio": "Consultoras de transformación digital y arquitectura; ProInnóvate apoya 30 000 pymes/año [P-S]."
   },
   "cod": "SIS-06",
   "barrido": "23-09-2026",
   "ac": 67,
   "just": {
    "vol": "Pocos puestos: sin conteo propio; solo cargos senior en banca y servicios de transformación [E-B14]; no «sin puestos» porque Buk registra arquitecto, subgerente TI y CTO [E-L11].",
    "amp": "Varios sectores: banca y servicios de transformación [E-B14][E-L7]; 71 % de empresas incorporó perfiles digitales [E-L10] pero no hay evidencia de muchos empleadores diversos.",
    "esc": "Vacantes desiertas: el perfil que «diseña arquitecturas que integran IA, nube y datos» lidera la EDO [P-L7] y 64 % de empleadores TI no encuentra habilidades [P-L9].",
    "rem": "Muy sobre el promedio: arquitecto S/ 10 850, subgerente TI S/ 12 210 y CTO S/ 15 210 [E-L11] frente a S/ 7 807 del promedio senior [E-L6].",
    "for": "Suele exigir título: cargos senior bajo Ley 28858 [N-1] y figura de líder de gobierno digital del DL 1412 [N-5]; sin colegiatura específica que justifique nivel 4.",
    "cre": "Crece: 71 % incorporó perfiles digitales en 2024 [E-L10], 60 % evalúa IA [P-L4] y 7 de 10 planean automatización [E-L5]; sin tasa propia que sustente «crece mucho».",
    "nor": "Norma vigente: Política Nacional de Transformación Digital al 2030 (DS 085-2023-PCM) y DL 1412 [N-9][N-5]; no nivel 4 porque ninguna tiene presupuesto explícito [N-9].",
    "inv": "Inversión sostenida: ProInnóvate apoya 30 000 pymes por año [P-S]; no comprometida porque no hay monto asignado a arquitectura.",
    "dem": "Driver claro: 60 % de empresas evaluando IA [P-L4] y 7 de 10 planean automatización en 2026 [E-L5]; no estructural porque depende de decisiones de cada empresa.",
    "tec": "En adopción: 6 de 10 empresas en piloto y ~50 % en modelo híbrido [P-S] muestran arquitecturas en transición, no adoptadas y estables.",
    "cri": "Alta: sin arquitectura la inversión en IA se fragmenta [P-L4]; no grave porque el daño es económico y recuperable.",
    "alc": "Alcance nacional: la PNTD 2030 fija 82 servicios con indicadores para todo el Estado [N-9] y ProInnóvate cubre 30 000 empresas [P-S].",
    "sos": "Insustituible: la decisión y el gobierno son humanos [P-L4]; la prospectiva le asigna sostenibilidad alta [P]."
   },
   "panel": {
    "p": [
     3,
     3,
     3,
     2,
     3,
     2
    ],
    "med": 3,
    "icvi": 0.67,
    "cvr": 0.33,
    "ric": 1,
    "ac": 67,
    "ver": "Sin consenso · ronda 2",
    "com": {
     "P1": "El perfil que integra IA, nube y datos lidera la EDO; cargos senior S/ 10 850–15 210. Esencial como base, no como puesto de egresado.",
     "P2": "El perfil que integra IA, nube y datos lidera la EDO; PNTD al 2030 sostiene la demanda. Esencial como formación, aunque el ejercicio llega tras experiencia.",
     "P3": "Líder de Gobierno Digital del DL 1412 y PNTD 2030 con 82 servicios exigen arquitectura y hoja de ruta; esencial para cargos de dirección, no para el egresado inicial.",
     "P4": "Arquitecto empresarial es un cargo senior con diez años encima; al egresado le pido entender la estrategia, no trazar la hoja de ruta.",
     "P5": "La decisión arquitectónica que integra IA, nube y datos es humana y perdura. Es rol senior que madura con experiencia; la base debe formarse en el perfil.",
     "P6": "Cargos senior de banca y consultoras en Lima, sin conteo propio; es trayectoria de posgrado, no perfil de egreso. Solo UPC la declara."
    }
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     14,
     15
    ],
    "imp": [
     24
    ],
    "via": [
     26,
     31,
     23
    ]
   },
   "vjust": {
    "dif": "2 de 21 la declaran (UPC, USIL). Arquitectura empresarial es curso suelto en UNI, UTP, ULima y USIL; transformación digital, electivo en UPAO. Pocas: nivel 3.",
    "hab": "DL 1412 y DS 029-2021-PCM (art. 25.3.d y Título VIII) exigen que los servicios digitales sigan la arquitectura digital del Estado; PNTD 2030 (DS 085-2023-PCM). Función habilitada sin registro ni certificación reconocida.",
    "norma": "DL 1412 (2018) y DS 029-2021-PCM (19-02-2021) art. 2.1, 4.2, 25.3.d y Título VIII; DS 085-2023-PCM (2023) Política Nacional de Transformación Digital; Ley 28858 (2006)",
    "registro": "",
    "quienes": [
     "UPC · menciones Gestión de Procesos y Transformación Digital, y Gestión de Proyectos con Arquitectura Empresarial (2022)",
     "USIL · mención Digital Transformation for Business (2025)"
    ],
    "doc": "Equipo parcial (doc con evidencia): Fernando Manuel Asin Gomez (transformación digital post COVID-19 en Expreso Grael SAC, 2022), Lizeth Geanina Huanca López (alineación TI-estrategia y evaluación de capacidad de procesos COBIT 5, tesis de maestría 2018), Danny Lévano Rodríguez (gestión de procesos y decisiones basadas en hechos, 2021), Milton Edward Humpiri Flores (informe en plataformas web y transformación digital, 2025). No se halló evidencia de perfil en TOGAF/ArchiMate. Los indicadores cam e inf son estimados.",
    "cam": "Sin convenio identificado para arquitectura empresarial. Escenarios informales: empresas de las tesis (Expreso Grael SAC, Chugur), la propia UPeU (suite Lamb System, evaluación COBIT 5 en universidad privada) y el convenio marco en coordinación con IATEC (2022). Nivel 2 estimado.",
    "inf": "Laboratorios de computación y Microsoft 365. Sin evidencia pública de herramientas de modelado de arquitectura empresarial; nivel 2 (mínimo) estimado."
   },
   "vdecl_estado": "estimado · por confirmar por la Dirección"
  },
  {
   "n": "Desarrollo móvil y experiencias digitales",
   "nat": "desarrollo",
   "o": "Establecida",
   "fn": 6,
   "fnx": "Experiencia de usuario · desarrollo nativo y multiplataforma · integración · publicación · analítica · mantenimiento",
   "pr": "Analizar → diseñar la experiencia → construir → verificar → publicar",
   "ev": "Aplicación publicada con sus métricas de uso y su registro de versiones",
   "d": {
    "vol": 3,
    "amp": 4,
    "esc": 2,
    "rem": 3,
    "for": 2
   },
   "t": {
    "cre": 3,
    "nor": 2,
    "inv": 3,
    "dem": 3,
    "tec": 4
   },
   "i": {
    "cri": 2,
    "alc": 3
   },
   "sos": 2,
   "v": {
    "doc": 0,
    "cam": 0,
    "inf": 0,
    "dif": 0,
    "hab": 0
   },
   "fd": "Sin cifra separada: los portales lo integran en «desarrollo de software»; la EDO nombra «desarrollo y mantenimiento de aplicaciones» [E-B15]. Remuneración de referencia la de desarrollo [E-L11].",
   "ft": "39,4 M de líneas móviles; internet principalmente por celular; 5G en 5 ciudades [P-S][P-L11]. Tiende a fusionarse con desarrollo de software [P-L9].",
   "fi": "Canal principal de banca digital y servicios; el front-end estándar es altamente automatizable [P-L10].",
   "modo": {
    "empleo": "Se convoca dentro de equipos de producto de banca, telecom y fintech (Guinea Mobile/Cuy Móvil en Get on Board) [E-L8]; sin conteo propio.",
    "negocio": "Estudios de desarrollo y freelance de apps; fintech captura 76,9 % del capital de riesgo 2025 [P-S]."
   },
   "cod": "SIS-07",
   "barrido": "23-09-2026",
   "ac": 100,
   "just": {
    "vol": "Volumen medio: sin conteo propio, los portales lo integran en desarrollo [E-B15]; banca, telecom y fintech lo convocan [E-L8], por lo que no son pocos puestos.",
    "amp": "Muchos y diversos: telecom/OMV, fintech y banca [E-L8]; es el canal principal de servicios sobre 39,4 M de líneas móviles [P-S].",
    "esc": "Se cubre fácil: se recluta del mismo pool que desarrollo, sin señal de escasez propia [E-L7]; no se cubre sola porque exige perfil específico.",
    "rem": "Sobre el promedio: remuneración de referencia la de desarrollo, líder mediana S/ 8 300 [E-L11] frente a S/ 4 331 [E-L6].",
    "for": "Poco formal: como en desarrollo, el privado no exige colegiatura [E-L2][E-B11]; sin norma propia [N].",
    "cre": "Crece: dentro de desarrollo +15 % [E-L7] con 5G en 5 ciudades [P-L11]; no crece mucho porque tiende a fusionarse con desarrollo [P-L9].",
    "nor": "Norma anunciada: solo la colegiatura genérica de la Ley 28858 [N-1]; ninguna norma nombra la especialidad.",
    "inv": "Inversión sostenida: fintech captura 76,9 % del capital de riesgo 2025 [P-S]; no comprometida porque no hay cifra propia de móvil.",
    "dem": "Driver claro: 39,4 M de líneas, internet principalmente por celular y 5G [P-S][P-L11]; no estructural porque el canal ya está saturado.",
    "tec": "Adoptada y estable: el móvil es masivo con 39,4 M de líneas [P-S]; 5G cambia la red, no el desarrollo de apps.",
    "cri": "Moderada: la falla de una app afecta el servicio pero existen canales alternos; no alta como el backend que la sostiene [P-L10].",
    "alc": "Alcance regional: los equipos de producto se concentran en Lima [E-L8] aunque el uso sea nacional.",
    "sos": "Riesgo alto: el front-end estándar es altamente automatizable [P-L10]; no lo absorbe la IA porque la experiencia y la integración persisten."
   },
   "panel": {
    "p": [
     2,
     2,
     2,
     2,
     2,
     2
    ],
    "med": 2,
    "icvi": 0,
    "cvr": -1,
    "ric": 0,
    "ac": 100,
    "ver": "No esencial",
    "com": {
     "P1": "Sin conteo propio: los portales lo contratan como desarrollo de software; el mismo pool cubre ambas vacantes.",
     "P2": "Tiende a fusionarse con desarrollo; el front-end estándar es lo primero que automatiza la IA generativa (proyección 2027–2029). Útil dentro de SIS-01, no aparte.",
     "P3": "Ninguna norma nombra el canal móvil; se ejerce con la colegiatura genérica y se forma como capacidad dentro de desarrollo de software, no como especialidad defendible.",
     "P4": "Lo cubro con el mismo pool de desarrolladores; un buen backend aprende móvil en meses. No abro vacantes separadas de móvil.",
     "P5": "El front-end móvil estándar es lo más automatizable del desarrollo; frameworks multiplataforma y generación de UI lo absorben. Es plataforma de despliegue, no especialidad.",
     "P6": "Los portales no la separan de desarrollo; equipos de producto en Lima. Solo Continental la formaliza. Útil como módulo, no como especialidad."
    }
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     14,
     15
    ],
    "imp": [
     24
    ],
    "via": [
     23,
     25,
     26
    ]
   }
  },
  {
   "n": "Consultoría e implementación de ERP (SAP)",
   "nat": "gestión TI",
   "o": "Establecida",
   "fn": 7,
   "fnx": "Levantamiento de procesos · configuración de módulos · integración · migración · pruebas · capacitación · soporte posimplantación",
   "pr": "Relevar el proceso → configurar → integrar → probar → poner en marcha",
   "ev": "Sistema de gestión implantado con sus procesos configurados y acta de puesta en marcha",
   "d": {
    "vol": 3,
    "amp": 3,
    "esc": 3,
    "rem": 3,
    "for": 2
   },
   "t": {
    "cre": 2,
    "nor": 1,
    "inv": 3,
    "dem": 2,
    "tec": 4
   },
   "i": {
    "cri": 3,
    "alc": 3
   },
   "sos": 3,
   "v": {
    "doc": 0,
    "cam": 0,
    "inf": 0,
    "dif": 0,
    "hab": 0
   },
   "fd": "Consultor SAP S/ 2 000–10 000; Buk consultor ERP mediana S/ 6 420 [E-B9][E-L11]; retail, consultoras e integradores.",
   "ft": "Sin cifras públicas de Perú; manufactura y minería adoptan IA en inventarios y cadena de suministro; 10+ proyectos mineros en 2026; migración a ERP en nube [P-L3][P-L7]. Sin norma.",
   "fi": "Procesos financieros y logísticos de grandes empresas; configuración y reportes automatizables, rediseño e integración no [P].",
   "modo": {
    "empleo": "Computrabajo con secciones activas «consultor SAP», «analista SAP», «analista funcional SAP»; aviso San Isidro «100 % presencial, SAP Hybris/Commerce Cloud» [E-B9].",
    "negocio": "Consultoría por proyecto e integradores; Freelancermap lista «ingeniería SAP» [E-B13]."
   },
   "cod": "SIS-08",
   "barrido": "23-09-2026",
   "ac": 83,
   "just": {
    "vol": "Volumen medio: secciones activas «consultor SAP», «analista SAP» y «analista funcional SAP» en Computrabajo [E-B9]; sin conteo que sustente alto volumen.",
    "amp": "Varios sectores: retail, consultoras e integradores [E-B9], manufactura y minería [P-L3]; no muchos y diversos.",
    "esc": "Cuesta cubrir: rango hasta S/ 10 000 y mediana S/ 6 420 [E-B9][E-L11] revelan prima por escasez; sin dato de vacantes desiertas.",
    "rem": "Sobre el promedio: consultor ERP mediana S/ 6 420 [E-L11] frente a S/ 4 331 [E-L6]; el rango S/ 2 000–10 000 [E-B9] impide «muy sobre».",
    "for": "Poco formal: aviso «100 % presencial» sin colegiatura [E-B9]; el mercado privado no exige título.",
    "cre": "Estancado: sin cifras públicas de Perú [P]; nicho dependiente de proveedores [P]; no decrece porque hay migración a ERP en nube [P-L3].",
    "nor": "Sin norma: no aparece en la tabla de habilitación [N] ni existe regulación de ERP.",
    "inv": "Inversión sostenida: 10+ proyectos mineros en 2026 [P-L7] y migración a ERP en nube [P-L3]; sin monto comprometido.",
    "dem": "Driver débil: manufactura y minería adoptan IA en inventarios [P-L3], driver indirecto sin dato propio de ERP.",
    "tec": "Adoptada y estable: ERP de uso consolidado con secciones permanentes de empleo [E-B9]; la migración a nube no cambia la madurez [P-L3].",
    "cri": "Alta: procesos financieros y logísticos de grandes empresas [P]; no grave porque la falla es recuperable.",
    "alc": "Alcance regional: retail en Lima y proyectos mineros en regiones [P-L7]; sin cobertura nacional documentada.",
    "sos": "Riesgo moderado: configuración y reportes son automatizables, rediseño e integración no [P]."
   },
   "panel": {
    "p": [
     2,
     2,
     2,
     2,
     2,
     3
    ],
    "med": 2,
    "icvi": 0.17,
    "cvr": -0.67,
    "ric": 0,
    "ac": 83,
    "ver": "No esencial",
    "com": {
     "P1": "Nicho con mediana S/ 6 420 en retail y consultoras; competencia ligada a un proveedor, se aprende en el puesto o certificación.",
     "P2": "Nicho dependiente de proveedores sin serie pública; configuración y reportes automatizables con ERP en nube. Útil para quien vaya a consultoría, no para el perfil.",
     "P3": "Sin norma ni figura obligatoria; el mercado no exige título y la certificación la otorga el proveedor. Útil como electivo, indefendible como núcleo del perfil ante SINEACE.",
     "P4": "SAP lo contrato a consultoras o formo internamente; al egresado le exijo entender procesos financieros y logísticos, no configurar módulos.",
     "P5": "Producto de proveedor, no campo. Configuración y reportes se automatizan con asistentes del propio ERP; la integración de procesos se forma en desarrollo y arquitectura.",
     "P6": "Ninguna universidad la declara: nicho abierto. Minería en Puno, agroindustria en San Martín y retail operan ERP; ejercicio independiente viable en provincia."
    }
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     14,
     15
    ],
    "imp": [
     24
    ],
    "via": [
     23,
     26
    ]
   }
  },
  {
   "n": "Análisis funcional y de sistemas de información",
   "nat": "desarrollo",
   "o": "Establecida",
   "fn": 6,
   "fnx": "Levantamiento · modelado de procesos · especificación · casos de uso · pruebas de aceptación · gestión del cambio",
   "pr": "Relevar → especificar → validar → acompañar la construcción",
   "ev": "Documento de especificación de requisitos aprobado y casos de aceptación",
   "d": {
    "vol": 4,
    "amp": 4,
    "esc": 2,
    "rem": 2,
    "for": 3
   },
   "t": {
    "cre": 2,
    "nor": 2,
    "inv": 2,
    "dem": 2,
    "tec": 3
   },
   "i": {
    "cri": 2,
    "alc": 3
   },
   "sos": 2,
   "v": {
    "doc": 4,
    "cam": 3,
    "inf": 3,
    "dif": 3,
    "hab": 3
   },
   "fd": "La EDO nombra «analistas de sistemas de información» entre los más requeridos [E-B15]; remuneración S/ 2 000–4 600, bajo el promedio senior [E-B9].",
   "ft": "Sin serie; la IA generativa absorbe documentación y especificación rutinaria [P-L10].",
   "fi": "Criticidad moderada; alta exposición a la IA en tareas de documentación [P-L10].",
   "modo": {
    "empleo": "Secciones «analista funcional» activas; banca (Scotiabank), industria y Estado convocan «Analista de Sistemas» [E-B9][E-L1][E-L2].",
    "negocio": "Complemento de ingresos por encargo; sin evidencia de negocio escalable."
   },
   "cod": "SIS-09",
   "barrido": "23-09-2026",
   "ac": 67,
   "just": {
    "vol": "Alto volumen: la EDO nombra «analistas de sistemas de información» entre los más requeridos [E-B15]; secciones activas [E-B9] y banca, industria y Estado convocan [E-L1][E-L2].",
    "amp": "Muchos y diversos: banca (Scotiabank), industria y Estado [E-L1][E-L2]; toda organización con desarrollo necesita análisis.",
    "esc": "Se cubre fácil: rango S/ 2 000–4 600 sin prima [E-B9]; no se cubre sola porque exige perfil técnico.",
    "rem": "Al promedio: S/ 2 000–4 600 [E-B9] en torno a S/ 4 331 del promedio joven [E-L6]; no bajo porque el rango alcanza el promedio.",
    "for": "Suele exigir título: el Estado exige título y colegiatura para CAS [E-L2][E-B11]; sin nivel 4 en el privado.",
    "cre": "Estancado: sin serie propia [P]; la IA generativa absorbe especificación rutinaria [P-L10] sin señal de decrecimiento aún.",
    "nor": "Norma anunciada: solo la colegiatura genérica de la Ley 28858 [N-1]; sin norma propia.",
    "inv": "Inversión incipiente: sin inversión propia, depende del presupuesto de desarrollo [P].",
    "dem": "Driver débil: sin driver propio [P]; la demanda se deriva de desarrollo.",
    "tec": "Sin dato directo en el barrido: se puntúa por analogía con desarrollo (SIS-01), pero las herramientas de especificación migran a IA generativa [P-L10], por lo que no es estable.",
    "cri": "Moderada [P-L10]: un requisito mal especificado se corrige en desarrollo; no alta.",
    "alc": "Alcance regional: banca e industria en Lima [E-L1]; el Estado extiende sin cobertura nacional documentada [E-L2].",
    "sos": "Riesgo alto: la IA generativa absorbe documentación y especificación rutinaria [P-L10]; no la absorbe totalmente porque el relevamiento con el negocio persiste."
   },
   "panel": {
    "p": [
     3,
     2,
     3,
     3,
     2,
     3
    ],
    "med": 3,
    "icvi": 0.67,
    "cvr": 0.33,
    "ric": 1,
    "ac": 67,
    "ver": "Sin consenso · ronda 2",
    "com": {
     "P1": "La EDO nombra analistas de sistemas entre los más requeridos; alto volumen en banca y Estado, aunque con sueldo al promedio y presión de IA.",
     "P2": "La capacidad de relevar requisitos es imprescindible dentro de SIS-01; como especialidad autónoma se diluye: la IA generativa absorbe especificación rutinaria hacia 2028.",
     "P3": "El Estado convoca analistas de sistemas con título y colegiatura CIP; especificar requisitos es la competencia que da nombre al ingeniero de sistemas de información. Esencial, no autónoma.",
     "P4": "Sigo contratando analistas funcionales en volumen; traducir negocio a requisitos y casos de aceptación es esencial aunque la IA documente.",
     "P5": "La IA generativa absorbe especificación y documentación rutinaria. El relevamiento con el negocio persiste, pero es capacidad del desarrollador, no especialidad autónoma.",
     "P6": "La EDO nombra analistas de sistemas entre los más requeridos y el Estado regional los convoca por CAS. Es la puerta de entrada real fuera de Lima."
    }
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     14,
     15
    ],
    "imp": [
     24
    ],
    "via": [
     32,
     30,
     23,
     25,
     26
    ]
   },
   "vjust": {
    "dif": "Solo Continental nombra una línea de analista de sistemas. Análisis y diseño de SI es tronco obligatorio en UCSM, UTP, USIL, UNI y UNA Puno. Pocas: nivel 3.",
    "hab": "Ley 28858 art. 1.a habilita estudios y propuestas técnicas con aspectos informáticos; RM 041-2017-PCM impone los procesos de requisitos y adquisición de la NTP-ISO/IEC 12207 al Estado. No hay registro ni certificación exigible.",
    "norma": "Ley 28858 (2006) art. 1.a y DS 016-2008-VIVIENDA (06-06-2008); RM 041-2017-PCM (02-03-2017) NTP-ISO/IEC 12207:2016",
    "registro": "",
    "quienes": [
     "U. Continental · certificación progresiva Analista de Sistemas (s. f.)"
    ],
    "doc": "Equipo formado inferido por tesis asesoradas en sistemas de información: Joseph Ibrahim Cruz Rodriguez (SI web de monitoreo, gestión académica, XP/SCRUM), Eder Gutierrez Quispe (SI web Angular/REST, informe en análisis y desarrollo de SI 2026), Immer Elías Cuellar Rodríguez (SI web para producción textil), Danny Lévano Rodríguez (SI distribuido, SI test S-Bull), Nemias Saboya Rios (SI SICPE para evaluación del perfil del egresado), Nancy Esther Casildo Bedón (digitalización del proceso de transparencia).",
    "cam": "Comparte campos con SIS-01: 28 convenios de prácticas de la FIA, convenio marco IATEC en coordinación (2022), investidura de prácticas en Juliaca (2022). Organizaciones de tesis: empresa textil, restaurante, instituciones educativas, entidad pública (transparencia).",
    "inf": "Laboratorios de computación del CIT (2023) y Tarapoto (2022), Microsoft 365. Sin evidencia de licencias de herramientas de modelado (BPMN/UML) de pago; nivel 3 (parcial)."
   },
   "vdecl_estado": "con evidencia"
  },
  {
   "n": "Aseguramiento de calidad y pruebas de software",
   "nat": "desarrollo",
   "o": "Establecida",
   "fn": 5,
   "fnx": "Casos de prueba · automatización · rendimiento · defectos · aseguramiento del proceso",
   "pr": "Recibir la versión → probar → reportar → certificar",
   "ev": "Informe de pruebas con cobertura y certificación de la versión",
   "d": {
    "vol": 3,
    "amp": 3,
    "esc": 2,
    "rem": 2,
    "for": 2
   },
   "t": {
    "cre": 2,
    "nor": 1,
    "inv": 2,
    "dem": 2,
    "tec": 4
   },
   "i": {
    "cri": 3,
    "alc": 3
   },
   "sos": 2,
   "v": {
    "doc": 0,
    "cam": 0,
    "inf": 0,
    "dif": 0,
    "hab": 0
   },
   "fd": "Consultoras y banca; volumen medio con remuneración de entrada baja [E-B9].",
   "ft": "Sin serie; es la especialidad de software con más tareas automatizables (generación de casos y scripts); riesgo de extinción del tester manual [P].",
   "fi": "Calidad de apps financieras y estatales; el rol se desplaza a ingeniería de calidad [P-L10].",
   "modo": {
    "empleo": "Sección «qa funcional» activa; QA S/ 3 500 «remoto o presencial» [E-B9]; Buk jefe de QA mediana S/ 6 740 [E-L11].",
    "negocio": "Sin evidencia de negocio propio."
   },
   "cod": "SIS-10",
   "barrido": "23-09-2026",
   "ac": 83,
   "just": {
    "vol": "Volumen medio: sección «qa funcional» activa [E-B9] y jefaturas en Buk [E-L11]; sin conteo que sustente alto volumen.",
    "amp": "Varios sectores: consultoras y banca [E-B9]; no muchos y diversos.",
    "esc": "Se cubre fácil: QA S/ 3 500 sin prima [E-B9]; no se cubre sola porque exige perfil técnico.",
    "rem": "Al promedio: QA S/ 3 500 [E-B9] bajo S/ 4 331 [E-L6], pero jefe de QA mediana S/ 6 740 [E-L11] eleva el conjunto al promedio.",
    "for": "Poco formal: «remoto o presencial» sin colegiatura [E-B9].",
    "cre": "Estancado: sin serie [P]; riesgo de extinción del tester manual [P] sin señal de decrecimiento observado.",
    "nor": "Sin norma: NTP-ISO/IEC 12207 declarada como vacío [N]; ninguna norma exige la función.",
    "inv": "Inversión incipiente: sin inversión propia [P].",
    "dem": "Driver débil: sin driver propio [P]; la demanda se deriva de desarrollo.",
    "tec": "Adoptada y estable: la automatización de pruebas está madura, con generación de casos y scripts ya automatizable [P].",
    "cri": "Alta: calidad de apps financieras y estatales [P-L10]; no grave porque el defecto se detecta antes de producción.",
    "alc": "Alcance regional: consultoras y banca en Lima [E-B9].",
    "sos": "Riesgo alto: especialidad de software con más tareas automatizables [P]; no la absorbe la IA porque se desplaza a ingeniería de calidad [P-L10]."
   },
   "panel": {
    "p": [
     2,
     2,
     2,
     3,
     2,
     2
    ],
    "med": 2,
    "icvi": 0.17,
    "cvr": -0.67,
    "ric": 0,
    "ac": 83,
    "ver": "No esencial",
    "com": {
     "P1": "Volumen medio, QA S/ 3 500 sin prima; el tester manual es lo primero que se automatiza. Habilidad dentro de desarrollo, no especialidad.",
     "P2": "Tester manual en extinción; generación de casos y scripts ya automatizable. Se desplaza a ingeniería de calidad integrada en desarrollo y DevOps.",
     "P3": "NTP-ISO/IEC 12207 es vacío declarado y ninguna norma exige la función; SINEACE espera verificación como capacidad de desarrollo, no como especialidad separada.",
     "P4": "Ya no contrato testers manuales; exijo que cada desarrollador automatice pruebas y certifique versiones. Esencial como capacidad, no como puesto aparte.",
     "P5": "Especialidad con más tareas automatizables: generación de casos y scripts madura. El tester manual se extingue; la ingeniería de calidad se integra al desarrollo.",
     "P6": "Ninguna universidad la formaliza y la demanda es de consultoras y banca en Lima; va integrada en desarrollo. Útil, no esencial como línea."
    }
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     14,
     15
    ],
    "imp": [
     24
    ],
    "via": [
     23,
     25,
     26
    ]
   }
  },
  {
   "n": "Redes y telecomunicaciones",
   "nat": "infraestructura",
   "o": "Establecida",
   "fn": 6,
   "fnx": "Diseño de redes · configuración · seguridad perimetral · comunicaciones unificadas · monitoreo · soporte físico",
   "pr": "Diseñar la red → implementar → operar → asegurar la disponibilidad",
   "ev": "Red operando con su documentación y sus indicadores de disponibilidad",
   "d": {
    "vol": 2,
    "amp": 3,
    "esc": 2,
    "rem": 2,
    "for": 3
   },
   "t": {
    "cre": 3,
    "nor": 2,
    "inv": 4,
    "dem": 3,
    "tec": 3
   },
   "i": {
    "cri": 3,
    "alc": 4
   },
   "sos": 4,
   "v": {
    "doc": 4,
    "cam": 3,
    "inf": 3,
    "dif": 3,
    "hab": 2
   },
   "fd": "Operadores, integradores y Estado; remuneración al promedio; sin conteo en portales [E-L1].",
   "ft": "Inversión sectorial S/ 5 800 M en 2026 (+20–25 %); 5G con US$ 506 M mínimos de cuatro operadores y 437 localidades rurales; Bitel US$ 600 M en 20 años [P-L11]. Sin norma que habilite ni reserve (TUO Ley de Telecomunicaciones) [N-B12].",
   "fi": "Conectividad de minas y servicios públicos; infraestructura física poco automatizable [P-L11].",
   "modo": {
    "empleo": "Avisos de Fortinet («Systems Engineer»), Bitel e Inetum en LinkedIn [E-L1]; sin conteo propio.",
    "negocio": "Integradores y contratistas de redes; servicios a minería [P-L11]."
   },
   "cod": "SIS-11",
   "barrido": "23-09-2026",
   "ac": 67,
   "just": {
    "vol": "Pocos puestos: sin conteo; solo avisos de Fortinet, Bitel e Inetum [E-L1]; no «sin puestos».",
    "amp": "Varios sectores: operadores, integradores, Estado y minería [E-L1][P-L11]; no muchos y diversos.",
    "esc": "Se cubre fácil: sin señal de escasez en el barrido [E-L1]; no se cubre sola porque exige perfil de ingeniero.",
    "rem": "Sin dato directo en el barrido: se puntúa por analogía con el promedio de carrera S/ 4 331–7 807 [E-L6], sin mediana propia en Buk [E-L11].",
    "for": "Suele exigir título: el Estado exige colegiatura [E-L2]; no nivel 4 porque el TUO de Telecomunicaciones no reserva ni habilita [N-B12].",
    "cre": "Crece: inversión sectorial +20–25 % en 2026 [P-L11]; no crece mucho porque el empleo no muestra conteo [E-L1].",
    "nor": "Norma anunciada: TUO Ley de Telecomunicaciones sin exigencia de ingeniero colegiado ni reserva [N-B12]; la tabla normativa le asigna nivel 2.",
    "inv": "Inversión comprometida: S/ 5 800 M en 2026, 5G con US$ 506 M mínimos de cuatro operadores y Bitel US$ 600 M en 20 años [P-L11].",
    "dem": "Driver claro: 437 localidades rurales, 5G y fibra a 24 minas [P-L11]; no estructural porque depende de licitaciones.",
    "tec": "En adopción: 4G adoptada y 5G temprana [P-L11]; no estable.",
    "cri": "Alta: conectividad de minas y servicios públicos [P-L11]; no grave porque la caída es recuperable.",
    "alc": "Alcance nacional: 437 localidades rurales y cuatro operadores [P-L11].",
    "sos": "Insustituible: infraestructura física poco automatizable [P-L11]."
   },
   "panel": {
    "p": [
     2,
     2,
     2,
     2,
     3,
     3
    ],
    "med": 2,
    "icvi": 0.33,
    "cvr": -0.33,
    "ric": 1,
    "ac": 67,
    "ver": "Sin consenso · ronda 2",
    "com": {
     "P1": "Inversión sectorial S/ 5 800 M, pero los operadores contratan ingenieros de telecomunicaciones; avisos escasos para sistemas.",
     "P2": "Inversión comprometida y redes privadas 5G emergentes (proyección 2027–2030), pero es dominio de telecomunicaciones; el ingeniero de sistemas necesita fundamentos, no la especialidad.",
     "P3": "Nivel 2: el TUO de Telecomunicaciones no reserva ni habilita al ingeniero de sistemas; es territorio del capítulo de electrónica del CIP. Base útil, no especialidad del título.",
     "P4": "La red la tercerizo al operador o integrador; el ingeniero debe entender conectividad y seguridad perimetral, no diseñar ni operar la red.",
     "P5": "Infraestructura física poco automatizable; SDN automatiza la operación pero el diseño de 5G privadas para minería y conectividad rural resiste. Base de IoT y edge.",
     "P6": "Lo que contrata el territorio: 437 localidades rurales, fibra a 24 minas, Bitel en provincias. ULima y UTEC la declaran, pero desde Lima."
    }
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     18,
     14
    ],
    "imp": [
     24
    ],
    "via": [
     27,
     33,
     23
    ]
   },
   "vjust": {
    "dif": "Solo URP la incluye en el nombre de una certificación. Redes es curso obligatorio en casi todos (ULima, UCSM, UNA Puno, UPC, UNI, UTEC) sin línea. Pocas: nivel 3.",
    "hab": "Reserva parcial: EM.020 arts. 4-5 reservan proyecto, dirección e inspección de instalaciones de telecomunicaciones en edificaciones al ingeniero electrónico o de telecomunicaciones; DS 003-2015-MTC art. 15 exige civil o eléctrico. La red corporativa carece de norma expresa.",
    "norma": "Norma EM.020 Instalaciones de Comunicaciones del RNE (DS 011-2006-VIVIENDA; fecha de la norma no verificada) art. 4-5; DS 003-2015-MTC (21-07-2015) art. 15; TUO Ley de Telecomunicaciones DS 013-93-TCC",
    "registro": "",
    "quienes": [
     "URP · certificación Desarrollador de Software y Redes de Datos (2024)"
    ],
    "doc": "Equipo formado (doc con evidencia) por tesis asesoradas: Jorge Eddy Otazu Luque (red DWDM/FTTH, fibra G-PON, IDS/IPS, IoT), Fernando Manuel Asin Gomez (integración VoIP y comunicaciones móviles, 2024), Miguel Angel Valles Coral (infraestructura VoIP en Misión Nor Oriental Tarapoto), Erick Carrasco Guerrero (red LAN metodología Top-Down, 2017), equipo Juliaca Lévano/Quea/Herrera/Mamani Pari (red inalámbrica de sensores >5 km, 2026). Los indicadores cam e inf son estimados.",
    "cam": "Alianza con Cisco Systems declarada en páginas de la FIA (sin detalle público de academia ni convenio). Organizaciones de tesis: instituciones de Sicuani, Misión Nor Oriental (Tarapoto), UPeU Juliaca. Sin convenio firmado verificado con operador de telecomunicaciones; nivel 3 estimado.",
    "inf": "Laboratorio de redes y comunicación para Ingeniería de Sistemas en campus Tarapoto (inaugurado mayo 2022); laboratorios de computación del CIT Lima (2023); alianza Cisco. Sin inventario público de equipos de red por sede; nivel 3 estimado."
   },
   "vdecl_estado": "estimado · por confirmar por la Dirección"
  },
  {
   "n": "Auditoría de sistemas y gobierno de TI",
   "nat": "gestión TI",
   "o": "Establecida",
   "fn": 5,
   "fnx": "Auditoría de controles · riesgos de TI · cumplimiento · COBIT · reporte al comité",
   "pr": "Planificar la auditoría → evaluar controles → reportar → seguir hallazgos",
   "ev": "Informe de auditoría de sistemas con hallazgos y plan de remediación",
   "d": {
    "vol": 2,
    "amp": 2,
    "esc": 3,
    "rem": 3,
    "for": 4
   },
   "t": {
    "cre": 2,
    "nor": 4,
    "inv": 3,
    "dem": 2,
    "tec": 2
   },
   "i": {
    "cri": 4,
    "alc": 3
   },
   "sos": 4,
   "v": {
    "doc": 3,
    "cam": 2,
    "inf": 2,
    "dif": 4,
    "hab": 4
   },
   "fd": "Banca, seguros, contraloría y firmas de auditoría; exige colegiatura y certificación [N-1][N-3].",
   "ft": "Res. SBS 504-2021 incorporó la evaluación de seguridad y sistemas a los reglamentos de auditoría; NTP-ISO/IEC 27001 obligatoria en el Estado con SGSI 2024–2026 [N-3][N-8]; auditoría de algoritmos de IA emergente [P].",
   "fi": "Continuidad de servicios críticos del Estado; rol de control poco automatizable [P-L1].",
   "modo": {
    "empleo": "Riesgo y cumplimiento de ciberseguridad 70k–100k anuales (Michael Page) [E-B5]; sin conteo de «auditor de sistemas» [E-B14].",
    "negocio": "Firmas de auditoría y consultoras; la SBS exige evaluación independiente del SGSI con certificaciones internacionales [N-3]."
   },
   "cod": "SIS-12",
   "barrido": "23-09-2026",
   "ac": 67,
   "just": {
    "vol": "Pocos puestos: sin conteo de «auditor de sistemas» [E-B14]; solo riesgo y cumplimiento en Michael Page [E-B5].",
    "amp": "Pocos empleadores: banca, seguros, contraloría y firmas de auditoría [N-3]; no varios sectores.",
    "esc": "Cuesta cubrir: 70k–100k anuales [E-B5] con certificaciones internacionales exigidas [N-7] que restringen la oferta; sin dato de vacantes desiertas.",
    "rem": "Sobre el promedio: 70k–100k anuales [E-B5], por debajo del rango de ciberseguridad 70k–115k [E-B5] que puntúa «muy sobre».",
    "for": "Exige título y colegiatura: Ley 28858 [N-1] y evaluación independiente con certificaciones internacionales exigida por la SBS [N-3].",
    "cre": "Estancado: sin serie [P]; auditoría de algoritmos de IA emergente [P] sin señal de crecimiento observado.",
    "nor": "Norma con plazo: SBS 504-2021 art. 27.2 exigible desde 07-2022 [N-3] y SGSI público 2024–2026 [N-8]; la tabla normativa le asigna nivel 4 en el sistema financiero.",
    "inv": "Inversión sostenida: SGSI programados 2024–2026 [N-8] y ~US$ 30 M anuales del Estado en respuesta [P-S]; sin monto comprometido.",
    "dem": "Driver débil: proxy de 19 % de incidentes graves en sector público [P-L1]; derivado, no propio.",
    "tec": "En experimentación: la auditoría de algoritmos de IA es emergente [P]; no en adopción.",
    "cri": "Grave o irreversible: continuidad de servicios críticos del Estado [P-L1] y sanción de la SBS [N-3].",
    "alc": "Alcance regional: sistema financiero y entidades concentradas en Lima [N-3].",
    "sos": "Insustituible: rol de control poco automatizable [P-L1] y obligación normativa [N-3]."
   },
   "panel": {
    "p": [
     2,
     3,
     3,
     2,
     3,
     3
    ],
    "med": 3,
    "icvi": 0.67,
    "cvr": 0.33,
    "ric": 1,
    "ac": 67,
    "ver": "Sin consenso · ronda 2",
    "com": {
     "P1": "Pocos puestos, exige colegiatura y certificación internacional; mercado limitado a banca, seguros y Contraloría.",
     "P2": "Norma con plazo (SBS 504-2021, SGSI 2024–2026) y auditoría de algoritmos de IA emergente con adecuación 2026–2029: control poco automatizable, esencial al egreso.",
     "P3": "SBS 504-2021 art. 27.2 exige evaluación independiente certificada y la NTP 27001 es obligatoria en el Estado; el egresado debe dominar control de TI aunque audite una minoría.",
     "P4": "En banca la necesito, pero contrato auditores certificados con experiencia; no es perfil de egreso. Útil que conozca controles y marcos.",
     "P5": "Rol de control poco automatizable. La auditoría de algoritmos de IA es emergente y la Ley 31814 la hará exigible; complementa ciberseguridad.",
     "P6": "Ninguna universidad la declara; exige colegiatura; Contraloría, OCI y SGSI obligatorio alcanzan entidades públicas de todas las regiones."
    }
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     14,
     15
    ],
    "imp": [
     17,
     24
    ],
    "via": [
     34,
     35,
     19,
     20,
     22,
     23
    ]
   },
   "vjust": {
    "dif": "0 de 21 la declaran como línea. Auditoría de sistemas es curso obligatorio o electivo en UCSM, UNSA, UNSM, UNA Puno y ULima. Nadie la ofrece como línea: nivel 4.",
    "hab": "Res. SBS 11699-2008 obliga a toda UAI a un servicio de auditoría de sistemas y reconoce CISA; SBS 504-2021 art. 27.2 exige certificaciones al evaluador; Contraloría (RC 383-2013-CG Anexo 1, RC 314-2015-CG) registra especialistas en sistemas en RESAF.",
    "norma": "Res. SBS 11699-2008 (28-11-2008) Reglamento de Auditoría Interna; Res. SBS 504-2021 (19-02-2021) art. 27.2; RC 383-2013-CG (2013) Anexo 1; RC 314-2015-CG (30-10-2015) Directiva 012-2015-CG/PROCAL; RC 295-2021-CG (23-12-2021) NGCG",
    "registro": "CISA (ISACA) reconocida expresamente por Res. SBS 11699-2008; inscripción como Experto/Especialista en sistemas en el RESAF de la Contraloría (RC 314-2015-CG; RC 383-2013-CG Anexo 1: título en Sistemas y colegiatura)",
    "quienes": [],
    "doc": "Equipo parcial (doc con evidencia): Lizeth Geanina Huanca López (magíster con tesis en gobierno y gestión de TI basada en COBIT 5; asesora de tesis COBIT 5/PMBOK y controles ISO 27002), Immer Elías Cuellar Rodríguez (políticas ISO 27001 en municipalidades), Jenson Daniel Chambi Aguilar (ITIL v3). No se identificó docente con certificación CISA/CGEIT pública. Los indicadores cam e inf son estimados.",
    "cam": "Sin convenio identificado con firma de auditoría, comité de auditoría o Contraloría. Escenarios de tesis: universidad privada (evaluación COBIT 5), municipalidades, Unión Peruana del Norte. Nivel 2 (campo informal) estimado.",
    "inf": "Laboratorios de computación y Microsoft 365. Sin evidencia de herramientas GRC o de auditoría asistida; nivel 2 (mínimo) estimado."
   },
   "vdecl_estado": "estimado · por confirmar por la Dirección"
  },
  {
   "n": "Protección de datos personales y privacidad",
   "nat": "seguridad",
   "o": "Emergente",
   "fn": 5,
   "fnx": "Inventario de tratamientos · política de seguridad · gestión de incidentes · derechos ARCO · relación con la ANPDP",
   "pr": "Inventariar → diseñar controles → operar → notificar → auditar",
   "ev": "Programa de cumplimiento de datos personales con registro de incidentes y reportes a la autoridad",
   "d": {
    "vol": 2,
    "amp": 3,
    "esc": 3,
    "rem": 3,
    "for": 3
   },
   "t": {
    "cre": 2,
    "nor": 4,
    "inv": 2,
    "dem": 2,
    "tec": 2
   },
   "i": {
    "cri": 4,
    "alc": 4
   },
   "sos": 4,
   "v": {
    "doc": 2,
    "cam": 2,
    "inf": 2,
    "dif": 4,
    "hab": 4
   },
   "fd": "Demanda derivada de la obligación legal en todos los sectores; sin conteo específico en el barrido de empleo.",
   "ft": "Ley 29733 y DS 016-2024-JUS (vigente 29-03-2025): Oficial de Datos obligatorio con entrada escalonada 2025–2028, notificación de incidentes en 48 h, ANPDP fiscaliza y sanciona [N-6].",
   "fi": "Criticidad grave (sanciones, derechos de las personas); alcance nacional; la decisión y la relación con la autoridad no se automatizan.",
   "modo": {
    "empleo": "Figura de Oficial de Datos Personales obligatoria para entidades públicas, tratamientos masivos y datos sensibles (DS 016-2024-JUS art. 37) [N-6]; sin conteo en portales.",
    "negocio": "Consultoría de cumplimiento compartida con abogados [N-6]."
   },
   "cod": "SIS-13",
   "barrido": "23-09-2026",
   "ac": 67,
   "just": {
    "vol": "Pocos puestos: sin conteo en portales; la figura de Oficial de Datos Personales es obligatoria [N-6], por lo que no son «sin puestos».",
    "amp": "Varios sectores: entidades públicas, tratamientos masivos y datos sensibles [N-6]; no muchos y diversos porque la obligación es escalonada.",
    "esc": "Sin dato directo en el barrido: se puntúa por analogía con ciberseguridad (76 % sin talento [E-L9]), atenuada porque abogados cubren parte de la función [N-6].",
    "rem": "Sin dato directo en el barrido: se puntúa por analogía con riesgo y cumplimiento 70k–100k anuales [E-B5], sobre el promedio [E-L6].",
    "for": "Suele exigir título: Oficial de Datos Personales obligatorio por DS 016-2024-JUS art. 37 [N-6]; sin colegiatura específica para nivel 4.",
    "cre": "Estancado: sin serie de empleo; la obligación entra escalonada 2025–2028 [N-6] sin crecimiento observado.",
    "nor": "Norma con plazo: Ley 29733 y DS 016-2024-JUS vigente 29-03-2025, escalonado 2025–2028, incidentes en 48 h [N-6]; la tabla normativa le asigna nivel 4.",
    "inv": "Inversión incipiente: ninguna norma asigna presupuesto propio [N]; sin cifra de inversión.",
    "dem": "Driver débil: solo obligación legal sin inversión [N-6]; no claro.",
    "tec": "Sin dato directo en el barrido: se puntúa por analogía con auditoría (SIS-12), cuyas herramientas de cumplimiento están en experimentación [P].",
    "cri": "Grave o irreversible: sanciones de la ANPDP y derechos de las personas [N-6].",
    "alc": "Alcance nacional: todas las entidades públicas [N-6].",
    "sos": "Insustituible: la relación con la autoridad y la decisión no se automatizan; figura obligatoria [N-6]."
   },
   "panel": {
    "p": [
     2,
     3,
     3,
     2,
     2,
     2
    ],
    "med": 2,
    "icvi": 0.33,
    "cvr": -0.33,
    "ric": 1,
    "ac": 67,
    "ver": "Sin consenso · ronda 2",
    "com": {
     "P1": "Obligación legal escalonada 2025–2028 sin avisos en portales; el Oficial de Datos hoy lo cubren abogados y áreas de cumplimiento.",
     "P2": "Oficial de Datos obligatorio escalonado 2025–2028: plena vigencia cuando egrese la promoción. Compartida con abogados, pero el diseño de controles es de sistemas.",
     "P3": "Ley 29733 y DS 016-2024-JUS imponen Oficial de Datos, notificación en 48 h y sanciones de la ANPDP; el ingeniero implementa los controles, el abogado comparte la función.",
     "P4": "El Oficial de Datos suele ser legal o cumplimiento; al ingeniero le pido implementar los controles y saber la norma, no liderar el programa.",
     "P5": "Obligación legal real, pero función de cumplimiento compartida con abogados. Las herramientas de privacidad están en experimentación; el ingeniero la cubre desde ciberseguridad y gobierno.",
     "P6": "Oficial de Datos obligatorio, pero abogados cubren parte de la función y ninguna universidad la declara como línea. Integrable en ciberseguridad y auditoría."
    }
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     14,
     15
    ],
    "imp": [
     17,
     24
    ],
    "via": [
     36,
     37,
     19,
     20,
     22,
     23
    ]
   },
   "vjust": {
    "dif": "0 de 21 la declaran. Ningún plan leído nombra protección de datos personales ni privacidad como línea; lo más cercano son cursos de seguridad de la información. Nivel 4.",
    "hab": "DS 016-2024-JUS arts. 37-39 crean el Oficial de Datos Personales con conocimientos acreditados, comunicado a la ANPDP en 15 días; art. 42 obliga a inscribir bancos de datos en el Registro Nacional; art. 34 exige notificar incidentes en 48 h.",
    "norma": "Ley 29733 (2011) y DS 016-2024-JUS (30-11-2024, vigente 30-03-2025) art. 34, 37-39, 42-44 y 1.ª DCF; DS 126-2025-PCM (04-11-2025)",
    "registro": "Designación como Oficial de Datos Personales comunicada a la ANPDP (art. 37.5; obligatoria desde 30-11-2025 para empresas > 2300 UIT) e inscripción de bancos de datos en el Registro Nacional de Protección de Datos Personales (art. 42)",
    "quienes": [],
    "doc": "Un docente con perfil explícito (doc con evidencia): Fernando Manuel Asin Gomez, asesor de la tesis Implementación de controles de seguridad para la protección de datos personales en una universidad privada (2018). Perfil adyacente en seguridad de la información: Immer Elías Cuellar Rodríguez, Lizeth Geanina Huanca López. No se halló evidencia pública de docentes con especialización en Ley 29733 o certificación en privacidad; nivel 2 prudente.",
    "cam": "Sin convenio identificado con la Autoridad Nacional de Protección de Datos Personales ni con empresas para prácticas en privacidad. Escenario informal: la propia UPeU como titular de bancos de datos (universidad privada de la tesis 2018). Nivel 2 estimado.",
    "inf": "Laboratorios de computación y Microsoft 365. Sin evidencia de herramientas de gestión de privacidad o de inventario de datos; nivel 2 (mínimo) estimado."
   },
   "vdecl_estado": "estimado · por confirmar por la Dirección"
  },
  {
   "n": "Inteligencia de negocios y analítica empresarial",
   "nat": "datos",
   "o": "Establecida",
   "fn": 5,
   "fnx": "Modelado de datos · ETL · tableros · indicadores · análisis descriptivo",
   "pr": "Integrar → modelar → visualizar → analizar",
   "ev": "Tablero de indicadores en operación con su modelo de datos documentado",
   "d": {
    "vol": 3,
    "amp": 4,
    "esc": 3,
    "rem": 3,
    "for": 2
   },
   "t": {
    "cre": 3,
    "nor": 2,
    "inv": 3,
    "dem": 3,
    "tec": 4
   },
   "i": {
    "cri": 3,
    "alc": 3
   },
   "sos": 2,
   "v": {
    "doc": 4,
    "cam": 3,
    "inf": 3,
    "dif": 3,
    "hab": 3
   },
   "fd": "Banca, retail y telcos [E-B10]; TI y datos tradicionales demandados por 78 % de empleadores TI [P-L9].",
   "ft": "Adopción de IA exige gobernanza y calidad de datos [P-L4]; los tableros estándar se automatizan; converge con ciencia de datos [P].",
   "fi": "Misma naturaleza que ciencia de datos: candidata a integración [O-tabla].",
   "modo": {
    "empleo": "LinkedIn «Business Intelligence Analyst» 64–148 empleos [E-B12]; Buk jefe de BI mediana S/ 8 000 [E-L11].",
    "negocio": "Consultoría de analítica y tableros [E-L8]."
   },
   "cod": "SIS-14",
   "barrido": "23-09-2026",
   "ac": 50,
   "just": {
    "vol": "Volumen medio: LinkedIn «Business Intelligence Analyst» 64–148 empleos [E-B12]; no alto como ciencia de datos con 844 [E-B10].",
    "amp": "Muchos y diversos: banca, retail y telcos [E-B10]; 78 % de empleadores TI demanda TI y datos [P-L9].",
    "esc": "Cuesta cubrir: 64 % de empleadores TI no encuentra habilidades [P-L9]; no vacantes desiertas como en IA [E-L9].",
    "rem": "Sobre el promedio: jefe de BI mediana S/ 8 000 [E-L11] frente a S/ 4 331 [E-L6]; no muy sobre como ciberseguridad S/ 11 380 [E-L11].",
    "for": "Poco formal: el privado no exige colegiatura [E-L2][E-B11].",
    "cre": "Crece: TI y datos demandados por 78 % [P-L9]; no crece mucho porque converge con ciencia de datos [P].",
    "nor": "Norma anunciada: Ley 31814 alcanza IA, no BI [N-4]; sin norma propia.",
    "inv": "Inversión sostenida: parte del gasto en IA US$ 497 M [P-L3]; sin monto propio.",
    "dem": "Driver claro: la adopción de IA exige gobernanza y calidad de datos [P-L4]; no estructural.",
    "tec": "Adoptada y estable: los tableros estándar ya están maduros y se automatizan [P].",
    "cri": "Alta: decisiones de gerencia en banca y retail [E-B10]; no grave.",
    "alc": "Alcance regional: banca, retail y telcos en Lima [E-B10].",
    "sos": "Riesgo alto: los tableros estándar se automatizan [P]; no la absorbe la IA porque el modelado de datos persiste."
   },
   "panel": {
    "p": [
     3,
     2,
     2,
     3,
     2,
     3
    ],
    "med": 2.5,
    "icvi": 0.5,
    "cvr": 0,
    "ric": 1,
    "ac": 50,
    "ver": "Sin consenso · ronda 2",
    "com": {
     "P1": "64–148 vacantes, jefe de BI mediana S/ 8 000, 78 % de empleadores demanda TI y datos; se contrata junto con ciencia de datos.",
     "P2": "Tableros estándar se automatizan; converge con ciencia de datos antes de 2029 (proyección). Útil como capacidad dentro de SIS-02, no como especialidad.",
     "P3": "La Ley 31814 alcanza sistemas de IA, no tableros; sin norma propia ni figura obligatoria, se defiende como capacidad de datos dentro de SIS-02, no como especialidad.",
     "P4": "Retail y banca deciden con tableros; un junior de BI produce valor la primera semana. Es la puerta de entrada al equipo de datos.",
     "P5": "Los tableros estándar ya se generan automáticamente con lenguaje natural. El modelado de datos persiste, pero converge con ciencia de datos; no sostiene especialidad propia.",
     "P6": "En regiones, gobiernos, cooperativas, universidades y agro contratan analistas de BI antes que científicos de datos; tres universidades de Lima ya la declaran."
    }
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     16,
     15
    ],
    "imp": [
     24
    ],
    "via": [
     25,
     30,
     21,
     23
    ]
   },
   "vjust": {
    "dif": "3 de 21 la nombran (UTEC, ESAN, UPN). Inteligencia de negocios es curso suelto en UTP, UCV, UNSM, ULima y UCSM. Pocas: nivel 3.",
    "hab": "Ley 28858 art. 1.a cubre estudios e informes técnicos con aspectos informáticos y de sistemas; DS 115-2025-PCM 5.ª DCF ordena la Estrategia Nacional de Gobierno de Datos. Sin reserva, registro ni certificación reconocida.",
    "norma": "Ley 28858 (2006) art. 1.a y DS 016-2008-VIVIENDA (06-06-2008); DS 115-2025-PCM (09-09-2025) 5.ª DCF Estrategia Nacional de Gobierno de Datos; DS 029-2021-PCM (19-02-2021)",
    "registro": "",
    "quienes": [
     "UTEC · especializaciones Business Intelligence y Data Analytics (2026)",
     "ESAN · especialización Business Analytics Specialist y certificado en Análisis de Datos (2025)",
     "UPN · certificación progresiva Data Analytics (s. f.)"
    ],
    "doc": "Equipo formado (doc con evidencia) por tesis asesoradas en BI, datamart y data warehouse: Sergio Omar Valladares Castillo (BI en URPI SUMAC TOURS 2022; BI en IE Corazón de Jesús 2018), Marco Antonio Ruiz Grandez (datamart de créditos, Cooperativa San Martín de Porres 2025), Miguel Angel Valles Coral (data warehouse CIP-CDSMT 2024), Jenson Daniel Chambi Aguilar (datamart Admisión UPeU Tarapoto 2016), Guillermo Mamani Apaza (SI ejecutiva y modelo Kimball 2013), Danny Lévano Rodríguez (decisiones basadas en hechos 2021). Los indicadores cam e inf son estimados.",
    "cam": "Organizaciones donde se implantaron soluciones de BI en tesis: Cooperativa San Martín de Porres (Tarapoto), CIP Consejo Departamental San Martín-Tarapoto, agencia URPI SUMAC TOURS, IE Corazón de Jesús, Vicerrectorado Académico y Admisión de la UPeU. No se verificó convenio firmado específico; nivel 3 estimado.",
    "inf": "Laboratorios de computación del CIT (2023) y Tarapoto (2022); Microsoft 365. No hay evidencia pública de licencias de plataformas de BI (Power BI Pro, Tableau) ni de servidor analítico; nivel 3 estimado."
   },
   "vdecl_estado": "estimado · por confirmar por la Dirección"
  },
  {
   "n": "Internet de las cosas y sistemas embebidos",
   "nat": "infraestructura",
   "o": "Emergente",
   "fn": 5,
   "fnx": "Dispositivos · programación embebida · protocolos · plataforma IoT · analítica de sensores",
   "pr": "Diseñar el dispositivo → conectar → integrar → analizar",
   "ev": "Solución IoT operando con su plataforma y sus datos",
   "d": {
    "vol": 1,
    "amp": 2,
    "esc": 2,
    "rem": 3,
    "for": 2
   },
   "t": {
    "cre": 3,
    "nor": 1,
    "inv": 3,
    "dem": 4,
    "tec": 2
   },
   "i": {
    "cri": 3,
    "alc": 3
   },
   "sos": 4,
   "v": {
    "doc": 0,
    "cam": 0,
    "inf": 0,
    "dif": 0,
    "hab": 0
   },
   "fd": "Sin avisos en el barrido; se contrata dentro de proyectos de minería 4.0 [E][P-L3].",
   "ft": "88 % de empresas evalúa IA en el edge; fibra a 24 minas; 5G como habilitador; industria 4.0 como driver estructural [P-S][P-L11]. Experimentación ligada a 5G.",
   "fi": "Seguridad operacional minera e industrial (17 % de incidentes graves) [P-L1].",
   "modo": {
    "empleo": "Sin dato en ninguna búsqueda de empleo [E]; proyectos piloto en minería y agroindustria [P-L3].",
    "negocio": "Integradores de soluciones industriales; UPN lo dicta como curso [O-14]."
   },
   "cod": "SIS-15",
   "barrido": "23-09-2026",
   "ac": 83,
   "just": {
    "vol": "Sin puestos: sin dato en ninguna búsqueda de empleo [E]; se contrata dentro de proyectos de minería 4.0 [P-L3].",
    "amp": "Pocos empleadores: minería y agroindustria [P-L3]; no varios sectores.",
    "esc": "Sin dato directo en el barrido: se puntúa por analogía con redes (SIS-11), sin señal de escasez [E-L1].",
    "rem": "Sin dato directo en el barrido: se puntúa por analogía con infraestructura, jefe mediana S/ 7 190 [E-L11], sobre el promedio.",
    "for": "Sin dato directo en el barrido: se puntúa por analogía con el privado que no exige colegiatura [E-L2][E-B11].",
    "cre": "Crece: 88 % de empresas evalúa IA en el edge [P-S]; no crece mucho sin avisos de empleo [E].",
    "nor": "Sin norma: no aparece en la tabla de habilitación [N].",
    "inv": "Inversión sostenida: fibra a 24 minas [P-L11] y 10+ proyectos mineros [P-L7]; sin monto comprometido para IoT.",
    "dem": "Driver estructural: industria 4.0 como driver estructural [P-S], 88 % evalúa IA en el edge y 5G como habilitador [P-L11].",
    "tec": "En experimentación: experimentación ligada a 5G [P] con 5G temprana [P-L11]; no en adopción.",
    "cri": "Alta: seguridad operacional minera e industrial, 17 % de incidentes graves [P-L1]; no grave.",
    "alc": "Alcance regional: minas y agroindustria en regiones [P-L3][P-L11].",
    "sos": "Sin dato directo en el barrido: se puntúa por analogía con redes, infraestructura física poco automatizable [P-L11]."
   },
   "panel": {
    "p": [
     2,
     2,
     2,
     1,
     3,
     2
    ],
    "med": 2,
    "icvi": 0.17,
    "cvr": -0.67,
    "ric": 0,
    "ac": 83,
    "ver": "No esencial",
    "com": {
     "P1": "Sin avisos en ninguna búsqueda; se contrata dentro de proyectos de minería 4.0. Demanda futura, no actual.",
     "P2": "IA en el edge (88 % evalúa) y minería 4.0 son driver estructural, pero la irrupción se proyecta 2028–2030 sin puestos observados. Útil, aún no esencial.",
     "P3": "Sin norma que habilite ni reserve; el DS 126-2025-PCM alcanza a sectores críticos por su servicio digital, no por el dispositivo. Útil en minería, no esencial al título.",
     "P4": "En banca, retail y consultoría no he abierto ninguna vacante IoT; es de minería e industria. No es perfil de egreso para mis sectores.",
     "P5": "Frontera físico-digital que la IA no reemplaza; edge AI y 5G privadas maduran en cinco años. Aún en experimentación, pero driver estructural en minería e industria.",
     "P6": "Sin avisos y sin universidad que la declare; minería 4.0 y agro en Puno y San Martín la contratan dentro de proyectos, no como perfil de egreso."
    }
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     18,
     14
    ],
    "imp": [
     24
    ],
    "via": [
     23
    ]
   }
  },
  {
   "n": "Blockchain y activos digitales",
   "nat": "desarrollo",
   "o": "Emergente",
   "fn": 3,
   "fnx": "Contratos inteligentes · billeteras · auditoría",
   "pr": "Diseñar el contrato → desplegar → auditar",
   "ev": "Contrato inteligente desplegado y auditado",
   "d": {
    "vol": 1,
    "amp": 1,
    "esc": 2,
    "rem": 3,
    "for": 1
   },
   "t": {
    "cre": 2,
    "nor": 1,
    "inv": 2,
    "dem": 2,
    "tec": 2
   },
   "i": {
    "cri": 2,
    "alc": 2
   },
   "sos": 2,
   "v": {
    "doc": 0,
    "cam": 0,
    "inf": 0,
    "dif": 0,
    "hab": 0
   },
   "fd": "Sin puestos con ese nombre en el país [E].",
   "ft": "La búsqueda de prospectiva no arrojó información sobre blockchain en Perú; fintech captura el capital de riesgo sin blockchain como especialidad [P-S].",
   "fi": "Bajo alcance; en extinción como especialidad autónoma [P].",
   "modo": {
    "empleo": "Sin dato en ninguna búsqueda de empleo ni de prospectiva para Perú [E][P].",
    "negocio": "Proyectos puntuales en fintech; sin cifra."
   },
   "cod": "SIS-16",
   "barrido": "23-09-2026",
   "ac": 100,
   "just": {
    "vol": "Sin puestos: sin dato en ninguna búsqueda de empleo [E].",
    "amp": "Un solo empleador: proyectos puntuales en fintech sin empleador identificado [P-S].",
    "esc": "Sin dato directo en el barrido: se puntúa por analogía con desarrollo (SIS-01), pool amplio que se cubre fácil [E-L7].",
    "rem": "Sin dato directo en el barrido: se puntúa por analogía con desarrollo, líder mediana S/ 8 300 [E-L11], sobre el promedio.",
    "for": "Informal: sin norma ni título específico [N]; sin puestos que exijan formalidad [E].",
    "cre": "Estancado: sin resultados para Perú [P]; no decrece porque no hay serie.",
    "nor": "Sin norma: no aparece en la tabla de habilitación [N].",
    "inv": "Inversión incipiente: fintech captura 76,9 % del VC sin blockchain como especialidad [P-S].",
    "dem": "Driver débil: sin driver propio [P]; fintech no lo nombra [P-S].",
    "tec": "En experimentación [P]; sin adopción documentada.",
    "cri": "Moderada: sin servicios críticos que dependan de ello [P].",
    "alc": "Alcance local: proyectos puntuales [P]; sin alcance regional.",
    "sos": "Riesgo alto: en extinción como especialidad autónoma [P]; no la absorbe la IA sino la fusión con fintech."
   },
   "panel": {
    "p": [
     1,
     1,
     1,
     1,
     1,
     1
    ],
    "med": 1,
    "icvi": 0,
    "cvr": -1,
    "ric": 0,
    "ac": 100,
    "ver": "No esencial",
    "com": {
     "P1": "Sin puestos con ese nombre en el Perú; fintech capta el capital sin pedir blockchain.",
     "P2": "Sin evidencia local ni puestos; en extinción como especialidad autónoma, absorbida por fintech. No debe formar parte del perfil.",
     "P3": "Sin norma, sin figura obligatoria y sin puestos; no existe marco peruano de activos digitales que habilite la función. Indefendible ante SINEACE como especialidad.",
     "P4": "Nunca he contratado un perfil blockchain ni conozco par que lo haga; no existe el puesto en el mercado peruano.",
     "P5": "Tecnología en experimentación sin adopción local ni puestos. Fintech la absorbe como componente; no es campo de ejercicio profesional.",
     "P6": "Sin puestos en el país ni universidad que la declare; fintech capta el capital sin nombrarla. No forma parte del perfil de egreso."
    }
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     14,
     15
    ],
    "imp": [
     24
    ],
    "via": [
     23
    ]
   }
  },
  {
   "n": "Administración de bases de datos",
   "nat": "datos",
   "o": "Establecida",
   "fn": 3,
   "fnx": "Instalación y afinamiento · respaldo y recuperación · seguridad de acceso",
   "pr": "Recibir el requerimiento → administrar → respaldar",
   "ev": "Base de datos operando con su plan de respaldo",
   "d": {
    "vol": 2,
    "amp": 3,
    "esc": 2,
    "rem": 3,
    "for": 3
   },
   "t": {
    "cre": 1,
    "nor": 2,
    "inv": 2,
    "dem": 2,
    "tec": 4
   },
   "i": {
    "cri": 3,
    "alc": 3
   },
   "sos": 2,
   "v": {
    "doc": 0,
    "cam": 0,
    "inf": 0,
    "dif": 0,
    "hab": 0
   },
   "fd": "Estado y banca; el privado lo absorbe en DevOps y datos [E-L2].",
   "ft": "Los servicios gestionados en la nube absorben la administración; se reconvierte a ingeniería de datos [P].",
   "fi": "Integridad de datos financieros y estatales; el DBA operativo es altamente automatizable [P-L4].",
   "modo": {
    "empleo": "Estado: «Especialista en administración de base de datos» recurrente, S/ 6 500–10 000 [E-L2]; sin conteo privado.",
    "negocio": "No sostiene negocio propio; se contrata dentro del equipo de plataforma."
   },
   "cod": "SIS-17",
   "barrido": "23-09-2026",
   "ac": 100,
   "just": {
    "vol": "Pocos puestos: Estado recurrente [E-L2] sin conteo privado; no «sin puestos».",
    "amp": "Varios sectores: Estado y banca [E-L2]; el privado lo absorbe en DevOps y datos [E-L2].",
    "esc": "Se cubre fácil: sin señal de escasez [E-L2]; no se cubre sola porque exige perfil técnico.",
    "rem": "Sobre el promedio: Estado S/ 6 500–10 000 [E-L2] frente a S/ 4 331 [E-L6]; no muy sobre como ciberseguridad [E-L11].",
    "for": "Suele exigir título: el Estado exige título y colegiatura [E-L2][E-B11].",
    "cre": "Decrece: los servicios gestionados en la nube absorben la administración [P]; DBA operativo en contracción [P].",
    "nor": "Norma anunciada: solo la colegiatura genérica de la Ley 28858 [N-1].",
    "inv": "Inversión incipiente: sin inversión propia; la calidad de datos es barrera de IA [P-L4] pero no financia DBA.",
    "dem": "Driver débil: calidad de datos como barrera [P-L4], absorbida por la nube.",
    "tec": "Adoptada y estable: bases de datos consolidadas con servicios gestionados [P].",
    "cri": "Alta: integridad de datos financieros y estatales [P-L4]; no grave.",
    "alc": "Alcance regional: Estado y banca en Lima [E-L2].",
    "sos": "Riesgo alto: DBA operativo altamente automatizable [P-L4]; no la absorbe la IA porque se reconvierte a ingeniería de datos [P]."
   },
   "panel": {
    "p": [
     2,
     2,
     2,
     2,
     2,
     2
    ],
    "med": 2,
    "icvi": 0,
    "cvr": -1,
    "ric": 0,
    "ac": 100,
    "ver": "No esencial",
    "com": {
     "P1": "Solo el Estado convoca DBA (S/ 6 500–10 000); el privado lo absorbe en DevOps y datos y decrece con servicios gestionados.",
     "P2": "DBA operativo altamente automatizable por servicios gestionados; se reconvierte a ingeniería de datos, que sí es esencial dentro de SIS-02.",
     "P3": "Solo la colegiatura genérica; el Estado lo convoca con título, pero la SBS exige respaldo y continuidad como control, no como puesto. Capacidad de datos, no especialidad.",
     "P4": "El DBA operativo lo absorbió la nube gestionada; sí exijo SQL y modelado de datos, pero eso vive en desarrollo y datos, no como especialidad.",
     "P5": "El DBA operativo es altamente automatizable por servicios gestionados en nube. Lo que persiste es ingeniería de datos, que pertenece a ciencia de datos y nube.",
     "P6": "El Estado regional convoca DBA recurrente (S/ 6 500–10 000), pero el privado lo absorbe en nube y datos. Competencia base, no especialidad."
    }
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     16,
     15
    ],
    "imp": [
     24
    ],
    "via": [
     21,
     23
    ]
   }
  },
  {
   "n": "Diseño de experiencia de usuario (UX/UI)",
   "nat": "desarrollo",
   "o": "Establecida",
   "fn": 5,
   "fnx": "Investigación de usuarios · arquitectura de información · prototipado · pruebas de usabilidad · sistema de diseño",
   "pr": "Investigar → diseñar → prototipar → validar",
   "ev": "Prototipo validado y sistema de diseño documentado",
   "d": {
    "vol": 2,
    "amp": 3,
    "esc": 2,
    "rem": 3,
    "for": 1
   },
   "t": {
    "cre": 2,
    "nor": 1,
    "inv": 2,
    "dem": 3,
    "tec": 3
   },
   "i": {
    "cri": 2,
    "alc": 3
   },
   "sos": 2,
   "v": {
    "doc": 0,
    "cam": 0,
    "inf": 0,
    "dif": 0,
    "hab": 0
   },
   "fd": "Volumen bajo y compartido con diseño gráfico; colegiatura no exigida [E-B12].",
   "ft": "Sin serie; UTEC lo declara como concentración [O-5].",
   "fi": "Campo compartido con diseño; en el límite del alcance que habilita el título de ingeniero [O-tabla].",
   "modo": {
    "empleo": "LinkedIn Perú «UI UX» 39–56 vacantes [E-B12].",
    "negocio": "Estudios de diseño y freelance."
   },
   "cod": "SIS-18",
   "barrido": "23-09-2026",
   "ac": 100,
   "just": {
    "vol": "Pocos puestos: LinkedIn Perú «UI UX» 39–56 vacantes [E-B12]; no «sin puestos».",
    "amp": "Varios sectores: fintech, banca y estudios de diseño; compartido con diseño gráfico [E-B12].",
    "esc": "Se cubre fácil: volumen bajo compartido con diseño [E-B12]; sin señal de escasez.",
    "rem": "Sin dato directo en el barrido: se puntúa por analogía con desarrollo, líder mediana S/ 8 300 [E-L11], sobre el promedio.",
    "for": "Informal: colegiatura no exigida y campo compartido con diseño [E-B12].",
    "cre": "Estancado: sin serie [P]; UTEC lo declara como concentración [O-5] sin dato de crecimiento.",
    "nor": "Sin norma: no aparece en la tabla de habilitación [N].",
    "inv": "Inversión incipiente: sin inversión propia; fintech VC [P-S] es indirecto.",
    "dem": "Driver claro: 79 % de la población usa internet [P-S] y los canales digitales exigen experiencia; no estructural.",
    "tec": "En adopción: UTEC lo declara concentración UX Design [O-5]; no estable como campo.",
    "cri": "Moderada: una mala interfaz afecta uso, no servicio crítico [P].",
    "alc": "Alcance regional: fintech y banca en Lima [E-B12].",
    "sos": "Sin dato directo en el barrido: se puntúa por analogía con front-end móvil, altamente automatizable [P-L10]."
   },
   "panel": {
    "p": [
     2,
     2,
     1,
     2,
     2,
     2
    ],
    "med": 2,
    "icvi": 0,
    "cvr": -1,
    "ric": 0,
    "ac": 100,
    "ver": "No esencial",
    "com": {
     "P1": "39–56 vacantes compartidas con diseño gráfico, sin colegiatura; el mercado lo cubre con diseñadores, no con ingenieros.",
     "P2": "Campo compartido con diseño y front-end automatizable; sin serie de crecimiento. Útil como capacidad de producto, no como especialidad del ingeniero.",
     "P3": "Colegiatura no exigida, campo compartido con diseño gráfico y fuera del alcance que habilita el título de ingeniero; SINEACE no lo espera en un perfil de ingeniería.",
     "P4": "Para UX contrato diseñadores, no ingenieros; al ingeniero le pido trabajar con el diseñador y respetar el sistema de diseño.",
     "P5": "El diseño generativo automatiza wireframes y prototipos. La investigación de usuario persiste, pero es campo del diseño; el ingeniero la usa, no la ejerce.",
     "P6": "Solo UTEC la declara; 39–56 vacantes compartidas con diseño gráfico y concentradas en Lima. Útil como módulo de desarrollo."
    }
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     14,
     15
    ],
    "imp": [
     24
    ],
    "via": [
     23,
     25,
     26
    ]
   }
  },
  {
   "n": "Soporte técnico y mesa de ayuda",
   "nat": "infraestructura",
   "o": "En extinción",
   "fn": 3,
   "fnx": "Incidencias de primer nivel · instalación · tickets",
   "pr": "Recibir el ticket → resolver → cerrar",
   "ev": "Ticket cerrado",
   "d": {
    "vol": 4,
    "amp": 3,
    "esc": 1,
    "rem": 1,
    "for": 1
   },
   "t": {
    "cre": 1,
    "nor": 1,
    "inv": 1,
    "dem": 2,
    "tec": 3
   },
   "i": {
    "cri": 2,
    "alc": 2
   },
   "sos": 1,
   "v": {
    "doc": 0,
    "cam": 0,
    "inf": 0,
    "dif": 0,
    "hab": 0
   },
   "fd": "Puesto técnico, no de ingeniero; remuneración muy bajo el promedio [E-B1][E-L11].",
   "ft": "Los empleos de entrada son los primeros automatizados (OIT 2026); soporte nivel 1 en la franja de mayor exposición [P-S][P-L10].",
   "fi": "Contracción como carrera universitaria; puerta de entrada técnica [P].",
   "modo": {
    "empleo": "Gran parte de los 163 avisos «ingeniero de sistemas sin experiencia» con base S/ 1 200 [E-B1]; clínicas, universidades y UGEL [E-L1][E-L2].",
    "negocio": "No sostiene negocio propio."
   },
   "cod": "SIS-19",
   "barrido": "23-09-2026",
   "ac": 100,
   "just": {
    "vol": "Alto volumen: gran parte de los 163 avisos «sin experiencia» [E-B1]; clínicas, universidades y UGEL [E-L1][E-L2].",
    "amp": "Varios sectores: clínicas, universidades y UGEL [E-L1][E-L2]; no muchos y diversos.",
    "esc": "Se cubre sola: 163 avisos sin experiencia con base S/ 1 200 [E-B1]; la escasez de «soporte especializado» [E-L9] no es nivel 1.",
    "rem": "Bajo el promedio: base S/ 1 200 [E-B1] frente a S/ 4 331 [E-L6].",
    "for": "Informal: puesto técnico, no de ingeniero [E-B1].",
    "cre": "Decrece: empleos de entrada primeros automatizados [P-S]; soporte nivel 1 en franja de mayor exposición [P-L10].",
    "nor": "Sin norma: no aparece en la tabla de habilitación [N].",
    "inv": "Sin inversión: ninguna fuente registra inversión [P].",
    "dem": "Driver débil: tickets persisten pero se automatizan [P-L10].",
    "tec": "En adopción: automatización de soporte nivel 1 en curso [P-L10]; no estable.",
    "cri": "Moderada: incidencia de primer nivel sin daño irreversible [P].",
    "alc": "Alcance local: puesto por sede [E-L1].",
    "sos": "La absorbe la IA: OIT 2026 sitúa los empleos de entrada como primeros automatizados [P-S][P-L10]."
   },
   "panel": {
    "p": [
     1,
     1,
     1,
     1,
     1,
     1
    ],
    "med": 1,
    "icvi": 0,
    "cvr": -1,
    "ric": 0,
    "ac": 100,
    "ver": "No esencial",
    "com": {
     "P1": "Puesto técnico con base S/ 1 200, 163 avisos sin experiencia; primer empleo automatizado. No forma parte del perfil de ingeniero.",
     "P2": "Puesto técnico, no de ingeniero; empleos de entrada primeros automatizados (OIT 2026). Contracción observada y proyectada; no esencial.",
     "P3": "Puesto técnico sin exigencia de título ni norma; formar ingenieros para nivel 1 contradice el perfil que la Ley 28858 y SINEACE reservan al profesional colegiado.",
     "P4": "Es puesto técnico con sueldo base S/ 1 200; no contrato ingenieros para mesa de ayuda y la estoy automatizando.",
     "P5": "Soporte nivel 1 en la franja de mayor exposición; agentes conversacionales lo absorben. Puesto técnico, no especialidad de ingeniero.",
     "P6": "Puesto técnico con base S/ 1 200; clínicas, UGEL y universidades de provincia lo contratan, pero no exige ni justifica título de ingeniero."
    }
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     14,
     15
    ],
    "imp": [
     24
    ],
    "via": [
     23
    ]
   }
  },
  {
   "n": "IA generativa y automatización asistida",
   "nat": "transversal",
   "o": "Emergente",
   "fn": 0,
   "fnx": "Atraviesa varios procesos profesionales",
   "pr": "Atraviesa varios procesos profesionales",
   "ev": "No entrega evidencia profesional propia",
   "d": {
    "vol": 2,
    "amp": 3,
    "esc": 3,
    "rem": 3,
    "for": 1
   },
   "t": {
    "cre": 4,
    "nor": 3,
    "inv": 4,
    "dem": 3,
    "tec": 3
   },
   "i": {
    "cri": 3,
    "alc": 4
   },
   "sos": 2,
   "v": {
    "doc": 0,
    "cam": 0,
    "inf": 0,
    "dif": 0,
    "hab": 0
   },
   "fd": "Competencia más demandada del sector TI (84 % desarrollo de IA, 82 % alfabetización) [P-L9].",
   "ft": "CAGR de IA generativa 45,1 % 2025–2029; 50 % de grandes empresas la usa [P-S][P-L3]; Ley 31814 [N-4].",
   "fi": "Tecnología habilitante: recurso de productividad del paso 2.2, no especialidad [método].",
   "modo": {
    "empleo": "No hay puestos con ese nombre: hay tareas asistidas dentro del trabajo del ingeniero; alfabetización en IA demandada por 82 % de empleadores TI [P-L9].",
    "negocio": "Complemento dentro de consultoría; no campo de ejercicio."
   },
   "cod": "SIS-20",
   "barrido": "23-09-2026",
   "just": {
    "vol": "Pocos puestos: no hay puestos con ese nombre, solo tareas asistidas [P-L9]; no «sin puestos» porque la demanda existe.",
    "amp": "Varios sectores: 82 % de empleadores TI demanda alfabetización en IA [P-L9]; no muchos y diversos como puesto.",
    "esc": "Cuesta cubrir: 84 % demanda desarrollo de IA y 64 % no encuentra habilidades [P-L9]; no vacantes desiertas.",
    "rem": "Sin dato directo en el barrido: se puntúa por analogía con ciencia de datos [E-B10], atenuada porque no es puesto.",
    "for": "Informal: sin puesto ni norma que exija título [N].",
    "cre": "Crece mucho: CAGR de IA generativa 45,1 % 2025–2029 [P-S][P-L3].",
    "nor": "Norma vigente: Ley 31814 y DS 115-2025-PCM [N-4]; sin presupuesto para nivel 4.",
    "inv": "Inversión comprometida: IA se multiplica 3,9x [P-L4] y US$ 497 M en 2025 [P-L3].",
    "dem": "Driver claro: 50 % de grandes empresas la usa [P-L3]; no estructural porque solo grandes.",
    "tec": "En adopción: 50 % de grandes empresas la usa [P-L3]; IAG en experimentación [P-L3], no estable.",
    "cri": "Alta: redistribuye tareas de todas las especialidades [P]; no grave.",
    "alc": "Alcance nacional: transversal a todo el sector TI [P-L9].",
    "sos": "Riesgo alto: herramienta, no campo de ejercicio [P]; no la absorbe la IA porque es la IA misma."
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     16,
     15
    ],
    "imp": [
     24
    ],
    "via": [
     21,
     23
    ]
   }
  }
 ],
 "refs": [
  {
   "id": 1,
   "t": "Presidencia del Consejo de Ministros. (2025). <i>Marco de Confianza Digital: Decreto de Urgencia 007-2020 y su reglamento actualizado</i>. Secretaría de Gobierno y Transformación Digital.",
   "u": "https://www.gob.pe/pcm"
  },
  {
   "id": 2,
   "t": "Instituto Nacional de Estadística e Informática. (2025). <i>Encuesta Nacional de Hogares: empleo en ocupaciones de tecnologías de la información 2023–2025</i>. INEI.",
   "u": "https://www.inei.gob.pe"
  },
  {
   "id": 3,
   "t": "Organización Internacional del Trabajo. (2024). <i>Clasificación Internacional Uniforme de Ocupaciones (CIUO-08): desarrolladores y analistas de software y aplicaciones</i>. OIT.",
   "u": "https://ilostat.ilo.org"
  },
  {
   "id": 4,
   "t": "Colegio de Ingenieros del Perú. (2025). <i>Registro de colegiados del Capítulo de Ingeniería de Sistemas y ámbitos de ejercicio profesional</i>. CIP.",
   "u": "https://www.cip.org.pe"
  },
  {
   "id": 5,
   "t": "Congreso de la República del Perú. (2023). <i>Ley 31814, Ley que promueve el uso de la inteligencia artificial en favor del desarrollo económico y social del país</i>. Diario Oficial El Peruano.",
   "u": "https://www.gob.pe"
  },
  {
   "id": 6,
   "t": "IEEE Computer Society. (2024). <i>Guide to the Software Engineering Body of Knowledge (SWEBOK)</i> (v4.0). IEEE.",
   "u": "https://www.computer.org/swebok"
  },
  {
   "id": 7,
   "t": "National Institute of Standards and Technology. (2024). <i>The NIST Cybersecurity Framework (CSF) 2.0</i>. NIST.",
   "u": "https://www.nist.gov/cyberframework"
  },
  {
   "id": 8,
   "t": "SINEACE. (2024). <i>Modelo de acreditación para programas de estudios de educación superior universitaria</i>.",
   "u": "https://www.gob.pe/sineace"
  },
  {
   "id": 9,
   "t": "Ministerio de Economía y Finanzas. (2025). <i>Inversión pública en gobierno y transformación digital: seguimiento de la ejecución 2023–2025</i>. MEF.",
   "u": "https://www.mef.gob.pe"
  },
  {
   "id": 10,
   "t": "World Economic Forum. (2025). <i>The Future of Jobs Report 2025</i>. WEF.",
   "u": "https://www.weforum.org"
  },
  {
   "id": 11,
   "t": "Ministerio de Trabajo y Promoción del Empleo. (2025). <i>Encuesta de Demanda Ocupacional 2025 con proyección al 2026</i>. MTPE.",
   "u": "https://www.gob.pe/institucion/mtpe/campa%C3%B1as/117365-encuesta-de-demanda-ocupacional-2025-con-proyeccion-al-2026"
  },
  {
   "id": 12,
   "t": "Buk. (2026, 11 de septiembre). Guía laboral 2026: ¿Cuánto ganan los profesionales de TI y Administración y Finanzas en Perú? <i>Gestión</i>.",
   "u": "https://gestion.pe/economia/empresas/cuanto-ganan-los-profesionales-de-ti-y-finanzas-en-peru-estos-son-los-sueldos-segun-buk-noticia/"
  },
  {
   "id": 13,
   "t": "ManpowerGroup Perú. (2026). <i>Escasez de talento en Perú 2026</i>.",
   "u": "https://blog.manpowergroup.pe/escasez-de-talento-en-per%C3%BA-2026"
  },
  {
   "id": 14,
   "t": "ManpowerGroup Perú / Experis. (2026). <i>Expectativas de empleo sector TI Q4-2026</i>.",
   "u": "https://blog.manpowergroup.pe/expectativas-de-empleo-sector-ti-q4-2026"
  },
  {
   "id": 15,
   "t": "Gestión. (2025, 5 de enero). <i>Este 2025 se eleva en 20 % la demanda de profesionales en IA y big data</i> (Michael Page).",
   "u": "https://gestion.pe/economia/empresas/este-2025-se-eleva-en-20-la-demanda-de-profesionales-en-ia-y-big-data-inteligencia-artificial-tecnologia-empleo-ciberseguridad-noticia/"
  },
  {
   "id": 16,
   "t": "El Ecosistema Startup. (2026, 22 de julio). <i>IA en Perú: mercado crece 20 % anual hasta 2027</i> (IDC).",
   "u": "https://ecosistemastartup.com/ia-en-peru-mercado-crece-20-anual-hasta-2027/"
  },
  {
   "id": 17,
   "t": "Infobae. (2025, 27 de agosto). <i>Ciberataques en Perú superan los 748 millones de intentos en lo que va del 2025</i> (Fortinet).",
   "u": "https://www.infobae.com/peru/2025/08/27/ciberataques-en-peru-superan-los-748-millones-de-intentos-en-lo-que-va-del-2025/"
  },
  {
   "id": 18,
   "t": "Gestión. (2026, 13 de enero). <i>Telecomunicaciones en 2026: 5G, fibra y data centers</i>.",
   "u": "https://gestion.pe/economia/empresas/telecomunicaciones-en-2026-5g-fibra-y-data-centers-quien-sera-el-actor-mas-dinamico-noticia/"
  },
  {
   "id": 19,
   "t": "Superintendencia de Banca, Seguros y AFP. (2021). <i>Resolución SBS N° 504-2021, Reglamento para la Gestión de la Seguridad de la Información y la Ciberseguridad</i>.",
   "u": "https://intranet2.sbs.gob.pe/dv_int_cn/2046/v2.0/Adjuntos/504-2021.R.pdf"
  },
  {
   "id": 20,
   "t": "EY Perú. (2025). <i>Reglamento de la Ley Marco de Confianza Digital</i> [DS 126-2025-PCM].",
   "u": "https://www.ey.com/es_pe/technical/tax-alert/reglamento-ley-marco-confianza-digital-medidas-fortalecimiento"
  },
  {
   "id": 21,
   "t": "EY Perú. (2025). <i>Reglamento de la Ley que promueve el uso de la inteligencia artificial</i> [DS 115-2025-PCM].",
   "u": "https://www.ey.com/es_pe/technical/tax-alert/reglamento-ley-promueve-uso-inteligencia-artificial"
  },
  {
   "id": 22,
   "t": "IAPP. (2024). <i>Se publica el nuevo reglamento de protección de datos personales en Perú</i> [DS 016-2024-JUS].",
   "u": "https://iapp.org/news/a/se-publica-el-nuevo-reglamento-de-protecci-n-de-datos-personales-en-per-"
  },
  {
   "id": 23,
   "t": "Ministerio de Vivienda, Construcción y Saneamiento. (2008). <i>Decreto Supremo N° 016-2008-VIVIENDA, Reglamento de la Ley N° 28858</i>.",
   "u": "https://www.cip.org.pe/publicaciones/2018/Ley_28858.pdf"
  },
  {
   "id": 24,
   "t": "Noticias ONU. (2025, 20 de mayo). <i>Uno de cada cuatro empleos está en riesgo de transformarse por la IA</i> (OIT-NASK).",
   "u": "https://news.un.org/es/story/2025/05/1538911"
  },
  {
   "id": 25,
   "t": "Universidad de Ingeniería y Tecnología. (2026). <i>Ciencia de la Computación: malla 2026</i>.",
   "u": "https://utec.edu.pe/carreras/ciencia-de-la-computacion"
  },
  {
   "id": 26,
   "t": "Universidad Peruana de Ciencias Aplicadas. (2022). <i>Malla curricular: Ingeniería de Sistemas de Información</i>.",
   "u": "https://pregrado.upc.edu.pe/carrera-de-ingenieria-de-sistemas-de-informacion/malla-curricular/"
  },
  {
   "id": 27,
   "t": "Universidad Ricardo Palma. (2024). Ingeniería Informática: plan de estudios 2024-I y certificaciones intermedias [consultado 24-09-2026]",
   "u": "https://www.urp.edu.pe/pregrado/facultad-de-ingenieria/ingenieria-informatica/"
  },
  {
   "id": 28,
   "t": "USIL. (2025). Ingeniería de Sistemas de Información: malla y menciones [consultado 24-09-2026]",
   "u": "https://usil.edu.pe/pregrado/ingenieria-sistemas-de-informacion/"
  },
  {
   "id": 29,
   "t": "Presidencia del Consejo de Ministros. (2025). Decreto Supremo N° 115-2025-PCM, Reglamento de la Ley N° 31814 [El Peruano, 09-09-2025] [consultado 24-09-2026]",
   "u": "https://img.lpderecho.pe/wp-content/uploads/2025/09/Decreto-Supremo-115-2025-PCM-LPDerecho.pdf"
  },
  {
   "id": 30,
   "t": "Colegio de Ingenieros del Perú. (2011). Estatuto Único Ordenado del CIP, con anexo Ley 28858 [consultado 24-09-2026]",
   "u": "https://www.cip.org.pe/publicaciones/2018/estatuto2014.pdf"
  },
  {
   "id": 31,
   "t": "Presidencia del Consejo de Ministros. (2021). Decreto Supremo N° 029-2021-PCM, Reglamento del DL 1412 [consultado 24-09-2026]",
   "u": "https://busquedas.elperuano.pe/normaslegales/decreto-supremo-que-aprueba-el-reglamento-del-decreto-legisl-decreto-supremo-n-029-2021-pcm-1929103-3/"
  },
  {
   "id": 32,
   "t": "Universidad Continental. (s. f.). Ingeniería de Sistemas e Informática: certificaciones progresivas [consultado 24-09-2026]",
   "u": "https://ucontinental.edu.pe/carrera/ingenieria-de-sistemas-e-informatica/"
  },
  {
   "id": 33,
   "t": "Ministerio de Vivienda, Construcción y Saneamiento. (s. f.). Norma EM.020 Instalaciones de Comunicaciones, Reglamento Nacional de Edificaciones [consultado 24-09-2026]",
   "u": "https://cdn.www.gob.pe/uploads/document/file/2686405/EM.020%20Instalaciones%20de%20Comunicaciones.pdf"
  },
  {
   "id": 34,
   "t": "UCSM. (2026). Plan de estudios Ingeniería de Sistemas, Res. 9733-CU-2026 [consultado 24-09-2026]",
   "u": "https://www2.ucsm.edu.pe/wp-content/uploads/2026/04/9733-CU-2026-INGENIERIA-DE-SISTEMAS.pdf"
  },
  {
   "id": 35,
   "t": "Superintendencia de Banca, Seguros y AFP. (2008). Resolución SBS N° 11699-2008, Reglamento de Auditoría Interna [consultado 24-09-2026]",
   "u": "https://intranet2.sbs.gob.pe/dv_int_cn/1134/v17.0/Adjuntos/11699-2008.r.pdf"
  },
  {
   "id": 36,
   "t": "UNA Puno. (s. f.). Estructura del plan de estudios, Ingeniería de Sistemas [consultado 24-09-2026]",
   "u": "https://transparencia.unap.edu.pe/web/wp-content/uploads/2023/12/PLAN-DE-ESTUDIOS-INGENIERIA-DE-SISTEMAS.pdf"
  },
  {
   "id": 37,
   "t": "Ministerio de Justicia y Derechos Humanos. (2024). Decreto Supremo N° 016-2024-JUS, Reglamento de la Ley N° 29733 [El Peruano, 30-11-2024] [consultado 24-09-2026]",
   "u": "https://img.lpderecho.pe/wp-content/uploads/2024/11/Decreto-Supremo-016-2024-JUS-LPDerecho.pdf"
  }
 ],
 "desc": {
  "Desarrollo de software e ingeniería de aplicaciones": "Construye el software que una organización usa: levanta requisitos, diseña, programa, prueba y lo pone en producción.",
  "Ciencia de datos e inteligencia artificial": "Convierte datos en decisiones y en modelos que aprenden: gobierna el dato, modela, entrena, evalúa y pone el modelo a operar.",
  "Ciberseguridad y gestión de riesgos digitales": "Protege la información y los sistemas: evalúa riesgos, detecta, responde a incidentes y sostiene el cumplimiento.",
  "Infraestructura en la nube y DevOps": "Diseña y automatiza la plataforma donde corre el software: nube, contenedores, pipelines y observabilidad.",
  "Gestión de proyectos y servicios de TI": "Dirige el proyecto tecnológico de principio a fin y opera el servicio bajo acuerdos de nivel.",
  "Arquitectura empresarial y transformación digital": "Alinea la tecnología con la estrategia: diagnostica la madurez digital y traza la hoja de ruta con su arquitectura objetivo.",
  "Desarrollo móvil y experiencias digitales": "Construye aplicaciones móviles y experiencias digitales: diseña la experiencia, programa, publica y mide el uso.",
  "Consultoría e implementación de ERP (SAP)": "Configura, integra y pone en marcha sistemas de gestión empresarial y sus procesos financieros y logísticos.",
  "Análisis funcional y de sistemas de información": "Traduce las necesidades del negocio en requerimientos y especificaciones para los equipos de desarrollo.",
  "Aseguramiento de calidad y pruebas de software": "Prueba el software antes de que llegue al usuario: diseña casos, automatiza y certifica la versión.",
  "Redes y telecomunicaciones": "Diseña y opera la red que conecta a la organización: equipos, seguridad perimetral y disponibilidad.",
  "Auditoría de sistemas y gobierno de TI": "Evalúa controles y riesgos de TI ante el comité de auditoría y sostiene el gobierno de la tecnología.",
  "Protección de datos personales y privacidad": "Diseña e implementa el cumplimiento de datos personales: políticas, controles, incidentes y relación con la autoridad.",
  "Inteligencia de negocios y analítica empresarial": "Construye reportes, tableros y análisis que sostienen decisiones de gerencia.",
  "Internet de las cosas y sistemas embebidos": "Conecta dispositivos físicos a plataformas de datos: programa el dispositivo y analiza sus sensores.",
  "Blockchain y activos digitales": "Desarrolla y audita contratos inteligentes sobre redes distribuidas.",
  "Administración de bases de datos": "Instala, afina y respalda las bases de datos que usan los sistemas.",
  "Diseño de experiencia de usuario (UX/UI)": "Investiga, diseña y valida la experiencia e interfaz de productos digitales.",
  "Soporte técnico y mesa de ayuda": "Atiende incidencias de primer nivel y gestiona tickets.",
  "IA generativa y automatización asistida": "Atraviesa las funciones de todas las especialidades: generación de código, documentación, pruebas, análisis y soporte."
 },
 "natj": {
  "desarrollo": "Ambas construyen software con el mismo ciclo de ingeniería y las contrata el mismo equipo de desarrollo.",
  "datos": "Ambas trabajan sobre el mismo ciclo del dato, del origen a la decisión.",
  "seguridad": "Ambas responden por el riesgo digital ante el mismo responsable de seguridad.",
  "infraestructura": "Ambas operan la misma plataforma tecnológica y el aviso las pide juntas.",
  "gestión TI": "Ambas se ejercen desde la misma oficina de proyectos o de gobierno de TI."
 },
 "expertos": [
  [
   "P1",
   "Mercado laboral y ocupaciones"
  ],
  [
   "P2",
   "Prospectiva sectorial"
  ],
  [
   "P3",
   "Regulación y acreditación"
  ],
  [
   "P4",
   "Empleador del sector"
  ],
  [
   "P5",
   "Tecnología y automatización"
  ],
  [
   "P6",
   "Territorio y oferta comparada"
  ]
 ],
 "puesto": {
  "Desarrollo de software e ingeniería de aplicaciones": 4,
  "Ciencia de datos e inteligencia artificial": 4,
  "Ciberseguridad y gestión de riesgos digitales": 4,
  "Infraestructura en la nube y DevOps": 4,
  "Gestión de proyectos y servicios de TI": 4,
  "Arquitectura empresarial y transformación digital": 3,
  "Desarrollo móvil y experiencias digitales": 3,
  "Consultoría e implementación de ERP (SAP)": 4,
  "Análisis funcional y de sistemas de información": 4,
  "Aseguramiento de calidad y pruebas de software": 3,
  "Redes y telecomunicaciones": 3,
  "Auditoría de sistemas y gobierno de TI": 3,
  "Protección de datos personales y privacidad": 3,
  "Inteligencia de negocios y analítica empresarial": 4,
  "Internet de las cosas y sistemas embebidos": 2,
  "Blockchain y activos digitales": 1,
  "Administración de bases de datos": 3,
  "Diseño de experiencia de usuario (UX/UI)": 3,
  "Soporte técnico y mesa de ayuda": 3,
  "IA generativa y automatización asistida": 1
 },
 "emprende": {
  "Desarrollo de software e ingeniería de aplicaciones": 4,
  "Ciencia de datos e inteligencia artificial": 3,
  "Ciberseguridad y gestión de riesgos digitales": 4,
  "Infraestructura en la nube y DevOps": 3,
  "Gestión de proyectos y servicios de TI": 3,
  "Arquitectura empresarial y transformación digital": 4,
  "Desarrollo móvil y experiencias digitales": 4,
  "Consultoría e implementación de ERP (SAP)": 4,
  "Análisis funcional y de sistemas de información": 2,
  "Aseguramiento de calidad y pruebas de software": 2,
  "Redes y telecomunicaciones": 3,
  "Auditoría de sistemas y gobierno de TI": 3,
  "Protección de datos personales y privacidad": 3,
  "Inteligencia de negocios y analítica empresarial": 3,
  "Internet de las cosas y sistemas embebidos": 3,
  "Blockchain y activos digitales": 3,
  "Administración de bases de datos": 1,
  "Diseño de experiencia de usuario (UX/UI)": 4,
  "Soporte técnico y mesa de ayuda": 1,
  "IA generativa y automatización asistida": 2
 },
 "req": {
  "Desarrollo de software e ingeniería de aplicaciones": [
   "Fábrica de software, área de TI de empresa o startup con equipo de desarrollo",
   "Laboratorio de cómputo con repositorios, integración continua y entornos de despliegue",
   "Ingeniero con ejercicio vigente en desarrollo y experiencia en equipos ágiles"
  ],
  "Ciencia de datos e inteligencia artificial": [
   "Área de analítica, banco, telecomunicaciones o consultora de datos",
   "Clúster o nube con GPU, plataformas de datos y herramientas de MLOps",
   "Ingeniero o científico de datos con maestría y modelos en producción"
  ],
  "Ciberseguridad y gestión de riesgos digitales": [
   "Centro de operaciones de seguridad, banco o entidad con oficial de seguridad",
   "Laboratorio de ciberseguridad con rango de ciberataque y herramientas de análisis",
   "Especialista certificado (CISSP, CEH o equivalente) con respuesta a incidentes reales"
  ],
  "Infraestructura en la nube y DevOps": [
   "Proveedor de nube, fintech o fábrica de software con plataforma propia",
   "Cuentas en proveedores de nube, clúster de contenedores y herramientas de observabilidad",
   "Ingeniero certificado en nube (AWS, Azure o GCP) con operación de plataformas"
  ],
  "Gestión de proyectos y servicios de TI": [
   "Oficina de proyectos de empresa, entidad pública o consultora",
   "Herramientas de gestión de proyectos y de servicios (ITSM)",
   "Director de proyectos certificado (PMP o equivalente) con proyectos cerrados"
  ],
  "Arquitectura empresarial y transformación digital": [
   "Consultora, corporación o entidad de gobierno digital",
   "Herramientas de modelado de arquitectura empresarial y de portafolio",
   "Arquitecto empresarial certificado (TOGAF) con hojas de ruta aprobadas"
  ],
  "Desarrollo móvil y experiencias digitales": [
   "Equipo de producto digital de banca, retail o medios",
   "Dispositivos de prueba, cuentas de desarrollador y laboratorio de experiencia de usuario",
   "Ingeniero con aplicaciones publicadas y experiencia en diseño de experiencia"
  ],
  "Consultoría e implementación de ERP (SAP)": [
   "Consultora integradora, retail o industria con proyecto de ERP en curso",
   "Acceso académico a un ERP (SAP, Oracle u open source) y a un ambiente de práctica",
   "Consultor con proyectos implantados y certificación del fabricante"
  ],
  "Análisis funcional y de sistemas de información": [
   "Área de TI de banca, industria o Estado con equipo de desarrollo",
   "Herramientas de modelado de procesos y gestión de requisitos",
   "Analista con experiencia en levantamiento y especificación en proyectos reales"
  ],
  "Aseguramiento de calidad y pruebas de software": [
   "Fábrica de software o área de calidad de banca",
   "Herramientas de automatización de pruebas y de gestión de defectos",
   "Ingeniero certificado en pruebas (ISTQB) con automatización en producción"
  ],
  "Redes y telecomunicaciones": [
   "Operador, integrador o área de infraestructura del Estado",
   "Laboratorio de redes con equipos de conmutación, enrutamiento y seguridad perimetral",
   "Ingeniero certificado en redes (CCNA o superior) con operación vigente"
  ],
  "Auditoría de sistemas y gobierno de TI": [
   "Firma de auditoría, banco, seguros o contraloría",
   "Marcos de control (COBIT, ISO 27001) y herramientas de auditoría",
   "Auditor de sistemas certificado (CISA) y colegiado"
  ],
  "Protección de datos personales y privacidad": [
   "Entidad pública o empresa con Oficial de Datos Personales designado",
   "Marco normativo (Ley 29733, DS 016-2024-JUS) y herramientas de inventario de tratamientos",
   "Especialista en cumplimiento con experiencia ante la ANPDP"
  ],
  "Inteligencia de negocios y analítica empresarial": [
   "Área de analítica de banca, retail o telecomunicaciones",
   "Plataforma de datos y herramientas de tableros (Power BI, Tableau o equivalente)",
   "Ingeniero con tableros en producción y experiencia en modelado de datos"
  ],
  "Internet de las cosas y sistemas embebidos": [
   "Minería, agroindustria o proyecto de ciudad inteligente",
   "Laboratorio de electrónica, sensores y plataforma IoT",
   "Ingeniero con proyectos IoT desplegados"
  ],
  "Blockchain y activos digitales": [
   "Fintech o consultora con proyectos sobre redes distribuidas",
   "Nodos de prueba y herramientas de auditoría de contratos",
   "Desarrollador con contratos desplegados"
  ],
  "Administración de bases de datos": [
   "Área de TI con bases de datos propias",
   "Servidores de bases de datos y herramientas de respaldo",
   "Administrador de bases de datos certificado"
  ],
  "Diseño de experiencia de usuario (UX/UI)": [
   "Equipo de producto digital o estudio de diseño",
   "Laboratorio de experiencia de usuario y herramientas de prototipado",
   "Diseñador con productos publicados y experiencia en investigación de usuarios"
  ],
  "Soporte técnico y mesa de ayuda": [
   "Mesa de ayuda de empresa o entidad",
   "Herramienta de tickets y equipos de usuario",
   "Técnico de soporte"
  ],
  "IA generativa y automatización asistida": [
   "Atraviesa todos los escenarios: desarrollo, datos, seguridad y gestión",
   "Acceso a modelos y copilotos de desarrollo",
   "Ingeniero con experiencia en integración de modelos generativos"
  ]
 },
 "plan": [
  {
   "n": "Ingeniería de software",
   "np": "Competencia de especialidad 1 · plan vigente",
   "d": "Gestiona y desarrolla software de manera eficiente y efectiva, basándose en estándares internacionales de calidad a fin de lograr el control y aseguramiento de la calidad según el contexto de la organización.",
   "caps": [
    "Ingeniería de requerimientos",
    "Ingeniería de la información",
    "Programación",
    "Calidad de software"
   ],
   "cd": [
    "Define requerimientos y diseña su arquitectura de sistemas.",
    "Define requerimientos y diseña su arquitectura de sistemas.",
    "Desarrolla aplicaciones de escritorio, web y móvil.",
    "Gestionar la calidad de software y madurez de procesos de desarrollo."
   ]
  },
  {
   "n": "Gestión de la infraestructura tecnológica",
   "np": "Competencia de especialidad 2 · plan vigente",
   "d": "Gestión de la infraestructura tecnológica.",
   "caps": [
    "Conectividad de datos",
    "Gestión de la seguridad de la información",
    "Implementa centro de datos"
   ],
   "cd": [
    "Diseña, implementa, testea y controla la red; siguiendo las normas nacionales e internacionales en conectividad a fin de asegurar la transferencia de información en la organización.",
    "Diseña y desarrolla sistemas de gestión de seguridad de la información, para la recolección de datos basándose en normas y estándares a fin de lograr el aseguramiento de la información de la organización.",
    "Diseña, desarrolla y controla los servicios de un centro de datos basándose en metodologías y estándares a fin de lograr el adecuado manejo de la información para el alcance de los objetivos de la organización."
   ]
  },
  {
   "n": "Ciencia de datos e inteligencia artificial",
   "np": "Competencia de especialidad 3 · plan vigente",
   "d": "Diseña y gestiona sistemas inteligentes basándose en metodologías, estándares y herramientas a fin de lograr estrategias de mejora para la organización.",
   "caps": [
    "Analista de negocios",
    "Ingeniería de datos",
    "Científico de datos",
    "Analista de datos",
    "Requerimiento de inteligencia"
   ],
   "cd": [
    "Analiza y define requerimientos para sistemas inteligentes.",
    "Construye una infraestructura de extracción y preparación de datos para analítica de datos (Data Engineer).",
    "Explora y transforma los datos para generar modelos estadísticos y/o de Inteligencia Artificial (Data Scientist).",
    "Analiza los datos y crea reportes/informes y/o visualizaciones estratégicas para la toma de decisiones (Data Analyst).",
    "Analiza y define requerimientos para sistemas inteligentes."
   ]
  }
 ],
 "eq": {
  "Desarrollo de software e ingeniería de aplicaciones": {
   "c": 0,
   "k": null,
   "t": "comp"
  },
  "Análisis funcional y de sistemas de información": {
   "c": 0,
   "k": 0,
   "t": "cap"
  },
  "Infraestructura en la nube y DevOps": {
   "c": 1,
   "k": null,
   "t": "comp"
  },
  "Redes y telecomunicaciones": {
   "c": 1,
   "k": null,
   "t": "amb"
  },
  "Ciencia de datos e inteligencia artificial": {
   "c": 2,
   "k": null,
   "t": "comp"
  },
  "Inteligencia de negocios y analítica empresarial": {
   "c": 2,
   "k": null,
   "t": "amb"
  },
  "Ciberseguridad y gestión de riesgos digitales": {
   "c": 3,
   "k": null,
   "t": "comp"
  },
  "Protección de datos personales y privacidad": {
   "c": 3,
   "k": null,
   "t": "amb"
  },
  "Gestión de proyectos y servicios de TI": {
   "c": 4,
   "k": null,
   "t": "comp"
  },
  "Arquitectura empresarial y transformación digital": {
   "c": 4,
   "k": null,
   "t": "cap"
  },
  "Auditoría de sistemas y gobierno de TI": {
   "c": 4,
   "k": null,
   "t": "cap"
  }
 },
 "extra": {},
 "sinEncaje": [],
 "capSinEsp": [],
 "arq": [
  {
   "alias": "Ingeniería de software",
   "n": "Desarrollo de soluciones de software",
   "tipo": "construcción",
   "dec": "derivada",
   "def": "Construir soluciones de software que una organización usa en sus operaciones, analizando las necesidades del negocio, diseñando la arquitectura, programando los componentes de backend, frontend e integración, verificando con pruebas automatizadas y revisión de código, y desplegando en producción; en equipos de desarrollo o fábricas de software que trabajan con repositorios, integración continua, metodologías ágiles y estándares de calidad y seguridad, para entregar sistemas confiables y mantenibles que respondan a los requerimientos del negocio.",
   "evid": "Software desplegado en producción con su repositorio de código, pruebas automatizadas, pipeline de despliegue y documentación técnica, aceptado por el usuario.",
   "nivel": "Al egresar construye de forma autónoma una solución de mediana complejidad de principio a fin, y participa bajo dirección de un arquitecto en sistemas de gran escala.",
   "caps": [
    {
     "a": "Analizar",
     "n": "Análisis y especificación de requisitos",
     "e": "",
     "d": "Capacidad de relevar las necesidades del negocio y traducirlas en requisitos y especificaciones verificables, modelando procesos y casos de uso con los usuarios, en contextos de cambio organizacional; moviliza técnicas de elicitación, modelado de procesos, escucha activa, rigor y comunicación con áreas no técnicas."
    },
    {
     "a": "Diseñar",
     "n": "Diseño de la arquitectura de la solución",
     "e": "",
     "d": "Capacidad de diseñar la arquitectura, los modelos de datos y las interfaces de una solución a partir de los requisitos, eligiendo patrones y tecnologías según restricciones de escala, costo y seguridad; moviliza patrones de diseño, bases de datos, arquitectura de software, criterio técnico y responsabilidad por las decisiones."
    },
    {
     "a": "Construir",
     "n": "Construcción e integración de los componentes de software",
     "e": "",
     "d": "Capacidad de programar componentes de backend, frontend e integración de APIs conforme al diseño, en repositorios versionados con revisión de código y entrega incremental, adaptándose a distintos lenguajes y marcos de trabajo; moviliza dominio de programación, estructuras de datos, estándares de codificación, disciplina y trabajo colaborativo."
    },
    {
     "a": "Verificar",
     "n": "Verificación de la calidad del software",
     "e": "",
     "d": "Capacidad de verificar que el software cumple los requisitos y los estándares de calidad mediante pruebas unitarias, de integración y de aceptación automatizadas y revisión de código, en ciclos de entrega continua; moviliza técnicas de prueba, análisis de defectos, pensamiento crítico, meticulosidad y compromiso con la calidad."
    },
    {
     "a": "Desplegar",
     "n": "Despliegue y mantenimiento en producción",
     "e": "",
     "d": "Capacidad de liberar el software en producción mediante pipelines de integración y despliegue continuo, documentarlo y mantenerlo evolutivamente frente a fallos y nuevos requerimientos, en entornos de nube o locales; moviliza conocimientos de CI/CD, control de versiones, documentación técnica, responsabilidad operativa y orientación al usuario."
    }
   ],
   "esp": [
    {
     "n": "Desarrollo de software e ingeniería de aplicaciones",
     "eq": "competencia",
     "cap": "",
     "nota": "Ejecuta el ciclo completo analizar–desplegar y entrega la misma evidencia: software en producción."
    },
    {
     "n": "Análisis funcional y de sistemas de información",
     "eq": "capacidad",
     "cap": "Análisis y especificación de requisitos",
     "nota": "Tramo inicial: devuelve la especificación al equipo de desarrollo; no construye ni despliega."
    }
   ],
   "contraste": {
    "dec": "reformular",
    "defFinal": "Construir soluciones de software que una organización usa en sus operaciones, analizando las necesidades del negocio, diseñando la arquitectura, programando los componentes de backend, frontend e integración, verificando con pruebas automatizadas y revisión de código, y desplegando en producción; en equipos de desarrollo o fábricas de software que trabajan con repositorios, integración continua, metodologías ágiles y estándares de calidad y seguridad, para entregar sistemas confiables y mantenibles que respondan a los requerimientos del negocio.",
    "gat": "Gatillo 6: «Ingeniería de requerimientos» e «Ingeniería de la información» comparten definición literal; se fusionan y su definición, con dos procesos, se desdobla en Analizar y Diseñar. Gatillo 5: falta el despliegue y mantenimiento en producción. Gatillo 1: título y capacidades nombran disciplina y temas, no el proceso; el propósito vigente es controlar calidad, no entregar el sistema.",
    "antes": "Competencia 1: «Gestiona y desarrolla software de manera eficiente y efectiva, basándose en estándares internacionales de calidad a fin de lograr el control y aseguramiento de la calidad según el contexto de la organización»; cuatro capacidades nombradas por tema.",
    "caps": [
     {
      "n": "Análisis y especificación de requisitos",
      "e": "reformulada",
      "de": "Ingeniería de requerimientos"
     },
     {
      "n": "Diseño de la arquitectura de la solución",
      "e": "reformulada",
      "de": "Ingeniería de la información"
     },
     {
      "n": "Construcción e integración de los componentes de software",
      "e": "reformulada",
      "de": "Programación"
     },
     {
      "n": "Verificación de la calidad del software",
      "e": "reformulada",
      "de": "Calidad de software"
     },
     {
      "n": "Despliegue y mantenimiento en producción",
      "e": "añadida",
      "de": ""
     }
    ],
    "noContinuan": [],
    "situacion": "Coinciden en proceso, difieren en capacidades"
   }
  },
  {
   "alias": "Plataforma e infraestructura",
   "n": "Diseño y operación de la infraestructura tecnológica",
   "tipo": "construcción",
   "dec": "derivada",
   "def": "Diseñar, automatizar y operar la plataforma tecnológica sobre la que corren los sistemas de una organización —infraestructura en la nube, contenedores, pipelines, redes y comunicaciones—, aprovisionándola como código, monitoreándola con observabilidad y asegurando su disponibilidad, seguridad perimetral y costo, en entornos locales, híbridos, multinube y de servicios gestionados, para que las aplicaciones y las comunicaciones de la organización operen de forma continua, escalable y eficiente.",
   "evid": "Plataforma operando con su infraestructura como código o configuración documentada, pipelines de despliegue, tablero de observabilidad e indicadores de disponibilidad y costo.",
   "nivel": "Al egresar diseña y opera de forma autónoma la plataforma de una organización mediana en la nube o en red local, y participa bajo supervisión en arquitecturas multinube o de telecomunicaciones de gran escala.",
   "caps": [
    {
     "a": "Diseñar",
     "n": "Diseño de la arquitectura de la plataforma",
     "e": "",
     "d": "Capacidad de diseñar la arquitectura de la plataforma —servicios en la nube, contenedores, topología de red y comunicaciones— dimensionándola según carga, disponibilidad, seguridad y costo, en escenarios locales, híbridos o multinube; moviliza arquitectura cloud, redes, protocolos, criterio de diseño y responsabilidad por la continuidad del negocio."
    },
    {
     "a": "Automatizar",
     "n": "Aprovisionamiento y automatización de la infraestructura",
     "e": "",
     "d": "Capacidad de aprovisionar y configurar la plataforma mediante infraestructura como código, contenedores, pipelines de integración y despliegue y configuración de equipos de red, de forma reproducible y versionada, adaptándose a distintos proveedores; moviliza herramientas de automatización, scripting, control de versiones, rigor y orientación a la reproducibilidad."
    },
    {
     "a": "Operar",
     "n": "Operación y soporte de la infraestructura",
     "e": "",
     "d": "Capacidad de operar la plataforma día a día —respaldos, soporte, gestión de cambios, incidentes y capacidad— con procedimientos documentados y acuerdos de nivel, en contextos de operación continua; moviliza administración de sistemas y redes, procedimientos operativos, disciplina, atención a la continuidad y servicio al usuario."
    },
    {
     "a": "Observar",
     "n": "Observabilidad y aseguramiento de la disponibilidad",
     "e": "",
     "d": "Capacidad de instrumentar la plataforma con monitoreo, registros, trazas y alertas, medir su disponibilidad y rendimiento y proteger su perímetro, anticipando fallos en entornos distribuidos; moviliza observabilidad, seguridad perimetral, análisis de métricas, vigilancia proactiva y responsabilidad por la disponibilidad del servicio."
    },
    {
     "a": "Optimizar",
     "n": "Optimización del rendimiento y de los costos",
     "e": "",
     "d": "Capacidad de analizar el uso de la plataforma y optimizar su rendimiento, escalabilidad y costo —FinOps, ajuste de recursos, mejora de arquitectura— con base en evidencia de operación, en organizaciones con presupuesto restringido; moviliza análisis de costos, ingeniería de rendimiento, pensamiento económico, mejora continua y transparencia ante la dirección."
    }
   ],
   "esp": [
    {
     "n": "Infraestructura en la nube y DevOps",
     "eq": "competencia",
     "cap": "",
     "nota": "Ejecuta el ciclo completo diseñar–optimizar y entrega la plataforma operando con código y observabilidad."
    },
    {
     "n": "Redes y telecomunicaciones",
     "eq": "ambito",
     "cap": "",
     "nota": "Mismo ciclo diseñar–implementar–operar–asegurar; la rúbrica de plataforma sirve cambiando nube por red."
    }
   ],
   "contraste": {
    "dec": "reformular",
    "defFinal": "Diseñar, automatizar y operar la plataforma tecnológica sobre la que corren los sistemas de una organización —infraestructura en la nube, contenedores, pipelines, redes y comunicaciones—, aprovisionándola como código, monitoreándola con observabilidad y asegurando su disponibilidad, seguridad perimetral y costo, en entornos locales, híbridos, multinube y de servicios gestionados, para que las aplicaciones y las comunicaciones de la organización operen de forma continua, escalable y eficiente.",
    "gat": "Gatillo 2: la vigente agrupa dos procesos con evidencias distintas —plataforma operando e informe de riesgos con plan de respuesta—; se desdobla y la seguridad pasa a competencia propia. Gatillo 1: la definición repite el título y las capacidades nombran objetos (red, centro de datos), no fases. Gatillo 5: faltan aprovisionamiento como código, observabilidad y optimización de rendimiento y costos.",
    "antes": "Competencia 2: «Gestión de la infraestructura tecnológica» (la definición repite el título); tres capacidades por objeto: conectividad de datos (red), gestión de la seguridad de la información y centro de datos, cada una con ciclo diseña–implementa–controla.",
    "caps": [
     {
      "n": "Diseño de la arquitectura de la plataforma",
      "e": "reformulada",
      "de": "Conectividad de datos · Implementa centro de datos (tramo «diseña»)"
     },
     {
      "n": "Aprovisionamiento y automatización de la infraestructura",
      "e": "reformulada",
      "de": "Conectividad de datos · Implementa centro de datos (tramo «implementa / desarrolla»)"
     },
     {
      "n": "Operación y soporte de la infraestructura",
      "e": "reformulada",
      "de": "Conectividad de datos · Implementa centro de datos (tramo «controla»)"
     },
     {
      "n": "Observabilidad y aseguramiento de la disponibilidad",
      "e": "añadida",
      "de": ""
     },
     {
      "n": "Optimización del rendimiento y de los costos",
      "e": "añadida",
      "de": ""
     }
    ],
    "noContinuan": [
     {
      "cap": "Gestión de la seguridad de la información",
      "destino": "redistribuida a Ciberseguridad · Diseño e implantación de controles de seguridad",
      "motivo": "Proceso distinto con evidencia propia; el campo lo contrata como competencia sostenida por dos especialidades del 1.1 (gatillo 2)."
     }
    ],
    "situacion": "Coinciden en proceso, difieren en capacidades"
   }
  },
  {
   "alias": "Datos e inteligencia artificial",
   "n": "Desarrollo de soluciones de analítica e inteligencia artificial",
   "tipo": "construcción",
   "dec": "derivada",
   "def": "Construir soluciones que convierten los datos de una organización en decisiones y en modelos que aprenden, gobernando e integrando el dato, modelando, entrenando y evaluando modelos descriptivos, predictivos o de inteligencia artificial, e implantándolos en producción con monitoreo y tableros de decisión, bajo principios de calidad del dato, ética algorítmica y protección de datos, en empresas, consultoras y equipos remotos, para que las decisiones de gerencia y los procesos automatizados se sustenten en evidencia confiable.",
   "evid": "Modelo analítico o de inteligencia artificial en producción con su modelo de datos documentado, su informe de evaluación y su tablero de decisión en uso por la gerencia.",
   "nivel": "Al egresar construye de forma autónoma una solución analítica completa —del dato al tablero o modelo en producción— para un problema de negocio de mediana complejidad, y colabora bajo supervisión en modelos de gran escala o alto riesgo.",
   "caps": [
    {
     "a": "Gobernar",
     "n": "Gobierno e integración del dato",
     "e": "",
     "d": "Capacidad de ingerir, integrar y modelar los datos de la organización asegurando su calidad, linaje, seguridad y gobierno, mediante pipelines de extracción, transformación y carga sobre fuentes heterogéneas; moviliza bases de datos, modelado dimensional, arquitectura de datos, rigor, ética y responsabilidad sobre la protección de la información."
    },
    {
     "a": "Modelar",
     "n": "Modelado analítico y entrenamiento de algoritmos",
     "e": "",
     "d": "Capacidad de formular un problema de negocio como problema analítico y construir modelos estadísticos, de aprendizaje automático o de inteligencia artificial generativa, entrenándolos y ajustándolos con datos reales, adaptándose a distintos dominios; moviliza matemática, estadística, algoritmos de aprendizaje, programación científica, curiosidad y pensamiento crítico."
    },
    {
     "a": "Evaluar",
     "n": "Evaluación de la validez y la ética del modelo",
     "e": "",
     "d": "Capacidad de evaluar el desempeño, la robustez, el sesgo y el impacto ético de un modelo con métricas y pruebas adecuadas al problema, antes y después de implantarlo, en contextos regulados; moviliza estadística inferencial, diseño experimental, ética algorítmica, honestidad intelectual y responsabilidad por las consecuencias de la decisión."
    },
    {
     "a": "Implantar",
     "n": "Implantación y monitoreo en producción",
     "e": "",
     "d": "Capacidad de poner el modelo en producción como servicio o proceso automatizado, con prácticas de MLOps, versionado, monitoreo de deriva y reentrenamiento, integrándolo con los sistemas de la organización; moviliza ingeniería de software, contenedores y pipelines, automatización, disciplina operativa y compromiso con la continuidad del servicio."
    },
    {
     "a": "Comunicar",
     "n": "Comunicación de resultados para la toma de decisiones",
     "e": "",
     "d": "Capacidad de construir tableros de indicadores, visualizaciones y narrativas que traduzcan los resultados analíticos en decisiones de gerencia, adaptando el mensaje a públicos no técnicos; moviliza diseño de visualizaciones, definición de indicadores, análisis descriptivo, claridad expositiva, empatía con el decisor y transparencia sobre las limitaciones del análisis."
    }
   ],
   "esp": [
    {
     "n": "Ciencia de datos e inteligencia artificial",
     "eq": "competencia",
     "cap": "",
     "nota": "Ejecuta el ciclo completo gobernar–implantar y entrega modelo en producción con informe y tablero."
    },
    {
     "n": "Inteligencia de negocios y analítica empresarial",
     "eq": "ambito",
     "cap": "",
     "nota": "Mismo ciclo dato–modelo–producto en operación; objeto descriptivo, sin modelos que aprenden; rúbrica sirve."
    }
   ],
   "contraste": {
    "dec": "reformular",
    "defFinal": "Construir soluciones que convierten los datos de una organización en decisiones y en modelos que aprenden, gobernando e integrando el dato, modelando, entrenando y evaluando modelos descriptivos, predictivos o de inteligencia artificial, e implantándolos en producción con monitoreo y tableros de decisión, bajo principios de calidad del dato, ética algorítmica y protección de datos, en empresas, consultoras y equipos remotos, para que las decisiones de gerencia y los procesos automatizados se sustenten en evidencia confiable.",
    "gat": "Gatillo 6: «Analista de negocios» y «Requerimiento de inteligencia» comparten definición literal; se fusionan en la formulación del problema dentro de Modelar. Gatillo 1: título y capacidades nombran disciplina y roles, no fases; «sistemas inteligentes» deja fuera la analítica descriptiva. Gatillo 5: faltan la evaluación de validez y ética del modelo y su implantación con monitoreo.",
    "antes": "Competencia 3: «Diseña y gestiona sistemas inteligentes basándose en metodologías, estándares y herramientas a fin de lograr estrategias de mejora para la organización»; cinco capacidades nombradas por rol, dos con definición idéntica.",
    "caps": [
     {
      "n": "Gobierno e integración del dato",
      "e": "reformulada",
      "de": "Ingeniería de datos"
     },
     {
      "n": "Modelado analítico y entrenamiento de algoritmos",
      "e": "reformulada",
      "de": "Científico de datos"
     },
     {
      "n": "Evaluación de la validez y la ética del modelo",
      "e": "añadida",
      "de": ""
     },
     {
      "n": "Implantación y monitoreo en producción",
      "e": "añadida",
      "de": ""
     },
     {
      "n": "Comunicación de resultados para la toma de decisiones",
      "e": "reformulada",
      "de": "Analista de datos"
     }
    ],
    "noContinuan": [
     {
      "cap": "Analista de negocios",
      "destino": "fusionada en Modelado analítico y entrenamiento de algoritmos",
      "motivo": "Definir requerimientos del sistema inteligente es formular el problema de negocio como problema analítico: tramo inicial de Modelar, sin evidencia propia."
     },
     {
      "cap": "Requerimiento de inteligencia",
      "destino": "fusionada en Modelado analítico y entrenamiento de algoritmos",
      "motivo": "Definición literal idéntica a «Analista de negocios» (gatillo 6); misma evidencia, se fusionan y siguen el mismo destino."
     }
    ],
    "situacion": "Coinciden en proceso, difieren en capacidades"
   }
  },
  {
   "alias": "Ciberseguridad",
   "n": "Gestión de la seguridad de la información y de los riesgos digitales",
   "tipo": "gestión",
   "dec": "derivada",
   "def": "Gestionar la seguridad de la información y de los sistemas de una organización a lo largo del ciclo evaluar el riesgo, proteger, detectar, responder y recuperar, aplicando análisis de riesgos, pruebas de penetración, controles técnicos y de identidad, monitoreo, respuesta a incidentes, forense y continuidad, conforme a marcos y normas de seguridad y de protección de datos personales, en banca, fintech, telecomunicaciones, Estado y servicios gestionados, para proteger la información, sostener la operación y garantizar el cumplimiento ante reguladores y autoridad.",
   "evid": "Informe de riesgos con su plan de tratamiento y plan de respuesta a incidentes aprobados por la organización, con registro de incidentes gestionados y reportes de cumplimiento a la autoridad.",
   "nivel": "Al egresar evalúa riesgos, implanta controles y responde a incidentes de forma autónoma en una organización mediana, y opera bajo supervisión de un jefe de seguridad en entornos regulados o de infraestructura crítica.",
   "caps": [
    {
     "a": "Evaluar",
     "n": "Evaluación de riesgos y vulnerabilidades",
     "e": "",
     "d": "Capacidad de identificar activos y tratamientos de información, analizar amenazas, vulnerabilidades y riesgos mediante metodologías de riesgo, escaneos y pruebas de penetración, y priorizar su tratamiento, en organizaciones de distinto tamaño y sector; moviliza marcos de riesgo, hacking ético, normativa, pensamiento adversarial, objetividad y confidencialidad."
    },
    {
     "a": "Proteger",
     "n": "Diseño e implantación de controles de seguridad",
     "e": "",
     "d": "Capacidad de diseñar e implantar políticas y controles técnicos, de identidad y organizacionales —incluida la concientización— que reduzcan el riesgo a un nivel aceptable, adaptados al presupuesto y a la regulación aplicable; moviliza arquitectura de seguridad, gestión de identidades, criptografía, normativa, rigor y responsabilidad ante la organización."
    },
    {
     "a": "Detectar",
     "n": "Monitoreo y detección de amenazas",
     "e": "",
     "d": "Capacidad de monitorear la infraestructura y los sistemas desde un centro de operaciones de seguridad, correlacionar eventos y detectar incidentes y brechas de datos de forma temprana, en operación continua; moviliza herramientas de monitoreo, inteligencia de amenazas, análisis de registros, vigilancia sostenida y capacidad de discriminar señales relevantes."
    },
    {
     "a": "Responder",
     "n": "Respuesta a incidentes y análisis forense",
     "e": "",
     "d": "Capacidad de contener, erradicar y analizar forensemente un incidente de seguridad o brecha de datos, coordinar la comunicación y notificar a afectados y autoridad en los plazos legales, bajo presión; moviliza respuesta a incidentes, forense digital, normativa de notificación, serenidad, ética y trabajo coordinado."
    },
    {
     "a": "Recuperar",
     "n": "Continuidad, cumplimiento y auditoría de la seguridad",
     "e": "",
     "d": "Capacidad de restaurar la operación tras un incidente, mantener y probar los planes de continuidad, y sostener el cumplimiento del programa de seguridad y de datos personales mediante auditorías y reportes al regulador, en organizaciones supervisadas; moviliza gestión de continuidad, normativa, auditoría, mejora continua, responsabilidad y transparencia."
    }
   ],
   "esp": [
    {
     "n": "Ciberseguridad y gestión de riesgos digitales",
     "eq": "competencia",
     "cap": "",
     "nota": "Ejecuta el ciclo completo evaluar–recuperar y entrega informe de riesgos y plan de respuesta aprobados."
    },
    {
     "n": "Protección de datos personales y privacidad",
     "eq": "ambito",
     "cap": "",
     "nota": "Mismo ciclo inventariar–controlar–operar–notificar–auditar; la rúbrica sirve cambiando información por datos personales."
    }
   ],
   "contraste": {
    "dec": "nueva",
    "defFinal": "Gestionar la seguridad de la información y de los sistemas de una organización a lo largo del ciclo evaluar el riesgo, proteger, detectar, responder y recuperar, aplicando análisis de riesgos, pruebas de penetración, controles técnicos y de identidad, monitoreo, respuesta a incidentes, forense y continuidad, conforme a marcos y normas de seguridad y de protección de datos personales, en banca, fintech, telecomunicaciones, Estado y servicios gestionados, para proteger la información, sostener la operación y garantizar el cumplimiento ante reguladores y autoridad.",
    "gat": "Solo en la derivada. Gatillo 2 sobre la Competencia 2: la seguridad es un proceso distinto —evaluar, proteger, detectar, responder, recuperar— con evidencia propia (informe de riesgos y plan de respuesta), sostenido por dos especialidades del 1.1: Ciberseguridad y gestión de riesgos digitales, y Protección de datos personales. El plan lo reducía a diseñar un SGSI.",
    "antes": "El plan no tiene competencia de seguridad: la trata como capacidad de la Competencia 2 —«Diseña y desarrolla sistemas de gestión de seguridad de la información… a fin de lograr el aseguramiento de la información de la organización»—.",
    "caps": [
     {
      "n": "Evaluación de riesgos y vulnerabilidades",
      "e": "añadida",
      "de": ""
     },
     {
      "n": "Diseño e implantación de controles de seguridad",
      "e": "reformulada",
      "de": "Gestión de la seguridad de la información (Competencia 2 · redistribuida)"
     },
     {
      "n": "Monitoreo y detección de amenazas",
      "e": "añadida",
      "de": ""
     },
     {
      "n": "Respuesta a incidentes y análisis forense",
      "e": "añadida",
      "de": ""
     },
     {
      "n": "Continuidad, cumplimiento y auditoría de la seguridad",
      "e": "añadida",
      "de": ""
     }
    ],
    "noContinuan": [],
    "situacion": "Solo en la derivada"
   }
  },
  {
   "alias": "Gobierno y gestión de TI",
   "n": "Gobierno y dirección de proyectos y servicios de tecnología de la información",
   "tipo": "gestión",
   "dec": "derivada",
   "def": "Dirigir la tecnología de una organización desde la estrategia hasta el servicio, alineando la hoja de ruta tecnológica con la estrategia del negocio, planificando y dirigiendo proyectos con equipos y proveedores, operando los servicios bajo acuerdos de nivel y evaluando los controles y riesgos de TI ante la dirección y el comité de auditoría, con marcos de gestión de proyectos, de servicios y de gobierno de TI, en empresas, Estado y consultoras, para que la inversión tecnológica genere valor, cumpla sus compromisos y se gobierne con control.",
   "evid": "Expediente de gestión de TI con proyecto entregado y acta de cierre, catálogo de servicios operando bajo acuerdos de nivel, trazado a una hoja de ruta aprobada y con informe de evaluación de controles.",
   "nivel": "Al egresar planifica, dirige y cierra de forma autónoma un proyecto tecnológico de mediana complejidad y opera su servicio, y participa bajo supervisión en la hoja de ruta de transformación y en auditorías de sistemas.",
   "caps": [
    {
     "a": "Alinear",
     "n": "Alineamiento de la tecnología con la estrategia organizacional",
     "e": "",
     "d": "Capacidad de diagnosticar la madurez digital, alinear la tecnología con la estrategia, diseñar la arquitectura objetivo y priorizar el portafolio en una hoja de ruta con medición de valor, en organizaciones en transformación; moviliza arquitectura empresarial, gestión del cambio, análisis financiero, visión sistémica y comunicación con la alta dirección."
    },
    {
     "a": "Planificar",
     "n": "Planificación de proyectos tecnológicos",
     "e": "",
     "d": "Capacidad de definir el alcance, el cronograma, los recursos, los riesgos y los proveedores de un proyecto tecnológico, en enfoques predictivos o ágiles según el contexto de la organización; moviliza marcos de gestión de proyectos, estimación, contratación y negociación con proveedores, realismo, orden y compromiso con lo pactado."
    },
    {
     "a": "Dirigir",
     "n": "Dirección, control y entrega de proyectos tecnológicos",
     "e": "",
     "d": "Capacidad de dirigir equipos y proveedores, gestionar los cambios de alcance, controlar avance, costo y calidad, y entregar el proyecto con aceptación formal del cliente, en entornos de incertidumbre; moviliza liderazgo, gestión de equipos y conflictos, control de proyectos, reporte a la dirección, responsabilidad y orientación a resultados."
    },
    {
     "a": "Operar",
     "n": "Operación de los servicios de tecnología de la información",
     "e": "",
     "d": "Capacidad de operar el catálogo de servicios tecnológicos bajo acuerdos de nivel, gestionando incidentes, cambios, problemas y mejora continua con marcos de gestión de servicios, en organizaciones que dependen de la tecnología para operar; moviliza ITIL, medición de servicios, atención al usuario, disciplina operativa y orientación al servicio."
    },
    {
     "a": "Evaluar",
     "n": "Auditoría de controles y riesgos de tecnología de la información",
     "e": "",
     "d": "Capacidad de planificar y ejecutar auditorías de sistemas, evaluar los controles y riesgos de TI frente a marcos de gobierno y cumplimiento, reportar los hallazgos al comité de auditoría y seguir su remediación, con independencia; moviliza COBIT, auditoría, normativa, objetividad, integridad, rigor probatorio y comunicación de hallazgos."
    }
   ],
   "esp": [
    {
     "n": "Gestión de proyectos y servicios de TI",
     "eq": "competencia",
     "cap": "",
     "nota": "Ejecuta el ciclo base planificar–operar y entrega proyecto cerrado y servicio bajo acuerdos de nivel."
    },
    {
     "n": "Arquitectura empresarial y transformación digital",
     "eq": "capacidad",
     "cap": "Alineamiento de la tecnología con la estrategia",
     "nota": "Tramo previo: devuelve la hoja de ruta a la alta dirección; la ejecución la hacen los proyectos."
    },
    {
     "n": "Auditoría de sistemas y gobierno de TI",
     "eq": "capacidad",
     "cap": "Auditoría de controles y riesgos de TI",
     "nota": "Tramo de aseguramiento con informe propio: evalúa y reporta al comité; no ejecuta la remediación."
    }
   ],
   "contraste": {
    "dec": "nueva",
    "defFinal": "Dirigir la tecnología de una organización desde la estrategia hasta el servicio, alineando la hoja de ruta tecnológica con la estrategia del negocio, planificando y dirigiendo proyectos con equipos y proveedores, operando los servicios bajo acuerdos de nivel y evaluando los controles y riesgos de TI ante la dirección y el comité de auditoría, con marcos de gestión de proyectos, de servicios y de gobierno de TI, en empresas, Estado y consultoras, para que la inversión tecnológica genere valor, cumpla sus compromisos y se gobierne con control.",
    "gat": "Solo en la derivada: ninguna competencia vigente dirige proyectos, servicios ni gobierno de TI; el plan solo alude a «gestiona» en software y a «controla los servicios» del centro de datos. La contratan tres especialidades del 1.1: Gestión de proyectos y servicios de TI, Arquitectura empresarial y transformación digital, y Auditoría de sistemas y gobierno de TI.",
    "antes": "",
    "caps": [
     {
      "n": "Alineamiento de la tecnología con la estrategia organizacional",
      "e": "añadida",
      "de": ""
     },
     {
      "n": "Planificación de proyectos tecnológicos",
      "e": "añadida",
      "de": ""
     },
     {
      "n": "Dirección, control y entrega de proyectos tecnológicos",
      "e": "añadida",
      "de": ""
     },
     {
      "n": "Operación de los servicios de tecnología de la información",
      "e": "añadida",
      "de": ""
     },
     {
      "n": "Auditoría de controles y riesgos de tecnología de la información",
      "e": "añadida",
      "de": ""
     }
    ],
    "noContinuan": [],
    "situacion": "Solo en la derivada"
   }
  }
 ],
 "traza": [
  {
   "p": "Competencia 1 · Ingeniería de software",
   "d": "se reformula",
   "n": "Desarrollo de soluciones de software",
   "c": "Título y definición por proceso; las dos capacidades con definición idéntica se fusionan y desdoblan en Analizar y Diseñar; se añade Despliegue y mantenimiento.",
   "s": "Gatillos 1, 5 y 6; la sostienen Desarrollo de software (competencia) y Análisis funcional (capacidad Analizar); evidencia: software en producción."
  },
  {
   "p": "Competencia 2 · Gestión de la infraestructura tecnológica",
   "d": "se desdobla",
   "n": "Diseño y operación de la infraestructura tecnológica · Gestión de la seguridad de la información y de los riesgos digitales",
   "c": "Seguridad sale como competencia propia; red y centro de datos se reorganizan por fase diseñar–optimizar; se añaden automatización, observabilidad y optimización.",
   "s": "Gatillos 2, 1 y 5; dos evidencias distintas; la sostienen Infraestructura nube y DevOps, Redes, Ciberseguridad y Protección de datos personales."
  },
  {
   "p": "Competencia 3 · Ciencia de datos e inteligencia artificial",
   "d": "se reformula",
   "n": "Desarrollo de soluciones de analítica e inteligencia artificial",
   "c": "Capacidades por rol pasan a fases del ciclo; Analista de negocios y Requerimiento de inteligencia se fusionan en Modelar; se añaden Evaluar e Implantar.",
   "s": "Gatillos 1, 5 y 6; la sostienen Ciencia de datos e IA (competencia) e Inteligencia de negocios (ámbito); evidencia: modelo en producción con tablero."
  }
 ],
 "smart": [
  [
   "Verbo de acción",
   "Abre la definición con una acción observable y medible (desarrolla, gestiona, conduce, transforma).",
   "Sí",
   "«Desarrolla soluciones de software para organizaciones…»"
  ],
  [
   "Objeto o ámbito de aplicación",
   "Sobre qué se ejerce la acción y en qué área o contexto profesional.",
   "Sí",
   "Soluciones de software para organizaciones, en equipos de desarrollo, cualquiera sea la plataforma."
  ],
  [
   "Condiciones o contexto",
   "Circunstancias, herramientas y escenarios en que se demuestra la competencia.",
   "Parcial",
   "Nombra el ciclo de vida definido; falta declarar el marco (ágil o SWEBOK) con el que se ejecuta."
  ],
  [
   "Propósito o finalidad",
   "Impacto o contribución que da sentido a la competencia.",
   "Sí",
   "Responde por el software en producción."
  ],
  [
   "Evidencia con que se demuestra",
   "Producto observable que prueba la competencia; sin él la Fase 2 no tiene contra qué derivar funciones.",
   "Sí",
   "Repositorio con pruebas automatizadas, documentación y despliegue en producción."
  ],
  [
   "Nivel de dominio al egreso",
   "Qué grado de autonomía se exige al egresar.",
   "No",
   "No lo fija; se declara dominio autónomo (N3) al egreso."
  ],
  [
   "Capacidades · 2 a 6 con estructura propia",
   "Cada capacidad: potencial o habilidad + acción sobre un objeto + contexto de adaptación + conocimientos, actitudes y valores que moviliza.",
   "Parcial",
   "«Construir» no declara el contexto de adaptación; las otras cuatro cumplen."
  ]
 ],
 "coh": [
  [
   2,
   1,
   0,
   0,
   1
  ],
  [
   0,
   1,
   2,
   0,
   1
  ],
  [
   1,
   2,
   0,
   1,
   1
  ],
  [
   0,
   1,
   0,
   2,
   1
  ],
  [
   1,
   0,
   0,
   1,
   2
  ]
 ],
 "oe": [
  [
   "OE1",
   "Lidera equipos o células de desarrollo que entregan software en producción para organizaciones públicas y privadas, respondiendo por su calidad, su despliegue continuo y su mantenimiento.",
   "desarrollo de software e ingeniería de aplicaciones"
  ],
  [
   "OE2",
   "Conduce proyectos de analítica e inteligencia artificial que convierten los datos de la organización en decisiones y productos, con gobierno del dato, evaluación de los modelos y criterio ético.",
   "ciencia de datos e inteligencia artificial"
  ],
  [
   "OE3",
   "Diseña y opera la infraestructura tecnológica en la nube y las redes de una organización, respondiendo por su disponibilidad, su rendimiento, su costo y su continuidad.",
   "infraestructura en la nube y devops"
  ],
  [
   "OE4",
   "Dirige la gestión de la seguridad de la información y del cumplimiento normativo de una organización, respondiendo ante la dirección y los reguladores por la protección de los datos y la respuesta ante incidentes.",
   "ciberseguridad y gestión de riesgos digitales"
  ],
  [
   "OE5",
   "Gestiona proyectos, servicios y el gobierno de la tecnología de la información alineados con la estrategia de la organización, como jefe de proyecto, responsable de servicios o auditor de TI.",
   "gestión de proyectos y servicios de ti"
  ]
 ],
 "vpc": {
  "t": "Forma ingenieros de sistemas que construyen software que llega a producción y responden por él: desarrollan, protegen la información y ponen los datos al servicio de decisiones reales. Se diferencia por proyectos con empresas desde el segundo año y un laboratorio de ciberseguridad propio, y lo demuestra con una formación que declara, para cada competencia, con qué evidencia se prueba.",
  "p": "Construir tecnología que funciona cuando alguien depende de ella.",
  "s": [
   [
    "Especialidades que entran al plan",
    "Las 7 que superaron el corte de potencial y capacidad en el paso 1.1: desarrollo, móvil, datos e IA, ciberseguridad, nube y DevOps, gestión de proyectos y arquitectura empresarial."
   ],
   [
    "Lo que la escuela puede sostener hoy",
    "Equipo docente formado, laboratorio de ciberseguridad y convenios con empresas en cinco de las siete; dos entran con plan de habilitación declarado."
   ],
   [
    "Lo que nadie más ofrece en la región",
    "La declaración de evidencia por competencia, los proyectos con empresas desde el segundo año y el rango de ciberataque propio."
   ]
  ],
  "dif": [
   {
    "n": "Proyectos reales con empresas desde el segundo año",
    "fam": "Red de convenios y campo real",
    "ev": "Convenios vigentes con 6 empresas de software y 2 entidades públicas · Res. 0087-2025-UPeU · vigencia 12-2027",
    "comp": "C1 · C4",
    "d": "D5",
    "alc": 100,
    "esp": 0.17,
    "icviD": 1,
    "icviR": 0.83,
    "cvr": 1,
    "medV": 3,
    "ac": 83,
    "ric": 1,
    "sust": 12,
    "dec": "confirmado",
    "resp": "Dirección de Escuela",
    "plazo": ""
   },
   {
    "n": "Cada competencia declara con qué evidencia se demuestra",
    "fam": "Modelo formativo",
    "ev": "Fichas técnicas P001 con evidencia por competencia · aprobación de Consejo de Facultad · Plan 2027",
    "comp": "C1 · C2 · C3 · C4",
    "d": "D6",
    "alc": 100,
    "esp": 0,
    "icviD": 0.83,
    "icviR": 0.83,
    "cvr": 0.67,
    "medV": 4,
    "ac": 83,
    "ric": 1,
    "sust": 12,
    "dec": "confirmado",
    "resp": "Dirección de Currículo",
    "plazo": ""
   },
   {
    "n": "Laboratorio de ciberseguridad con rango de ciberataque propio",
    "fam": "Infraestructura",
    "ev": "Rango de ciberataque operativo desde 03-2026 · convenio con proveedor · fecha de corte 06-2026",
    "comp": "C3",
    "d": "D4",
    "alc": 100,
    "esp": 0,
    "icviD": 0.83,
    "icviR": 0.83,
    "cvr": 0.67,
    "medV": 3,
    "ac": 83,
    "ric": 1,
    "sust": 12,
    "dec": "confirmado",
    "resp": "Coordinación de laboratorios",
    "plazo": ""
   },
   {
    "n": "Certificaciones de nube integradas al plan de estudios",
    "fam": "Habilitación",
    "ev": "Convenio con academia de proveedor de nube en negociación · sin firma a 09-2026",
    "comp": "C3",
    "d": "D2",
    "alc": 70,
    "esp": 0.33,
    "icviD": 0.5,
    "icviR": 0.83,
    "cvr": 0.33,
    "medV": 2,
    "ac": 67,
    "ric": 2,
    "sust": 8,
    "dec": "condicionado",
    "resp": "Coordinación de infraestructura",
    "plazo": "03-2027"
   },
   {
    "n": "Docentes con ejercicio vigente en la industria del software",
    "fam": "Docentes",
    "ev": "5 docentes con ejercicio en fábricas de software y banca · CV 2026",
    "comp": "C1",
    "d": "D3",
    "alc": 100,
    "esp": 0.67,
    "icviD": 1,
    "icviR": 0.67,
    "cvr": 0.33,
    "medV": 3,
    "ac": 83,
    "ric": 1,
    "sust": 9,
    "dec": "paridad",
    "resp": "Dirección de Escuela",
    "plazo": ""
   }
  ],
  "txt": {
   "L": 4,
   "so": 1,
   "au": 0.83
  },
  "pend": "¿Qué diferencial real de esta escuela no está en la lista? Sin respuesta en R1. ¿Qué problema del campo, más grande que este, no está nombrado? Sin respuesta en R1.",
  "ficha": {
   "c1": "postulante",
   "c2": {
    "t": "Siete de cada diez empresas peruanas no encuentran perfiles de tecnología; el campo contrata a quien entrega software que funciona.",
    "f": "INEI, 2025; WEF, 2025"
   },
   "c3": [
    "Universidad Nacional de Ingeniería — Ingeniería de Sistemas",
    "Pontificia Universidad Católica del Perú — Ingeniería Informática",
    "Universidad Peruana de Ciencias Aplicadas — Ingeniería de Sistemas de Información",
    "Universidad Nacional Mayor de San Marcos — Ingeniería de Sistemas"
   ],
   "c5": "Vencimiento sin renovación de los convenios con empresas en diciembre de 2027."
  },
  "par": [
   "Licenciamiento SUNEDU",
   "Plataforma virtual de aprendizaje",
   "Bolsa de trabajo",
   "Docentes con grado de maestría",
   "Laboratorios de cómputo",
   "Currículo por competencias"
  ],
  "cad": {
   "car": {
    "p1": "En el Perú, siete de cada diez empresas declaran no encontrar perfiles de tecnología, y el 60 % de los proyectos de software públicos se retrasa o se cancela (INEI, 2025; MEF, 2025).",
    "p2": "C1 a C4: construir el software, convertir los datos en decisiones, proteger la plataforma y conducir la tecnología desde la estrategia.",
    "p3": "Una organización —el banco, el hospital, la municipalidad, la startup— cuyo sistema funciona el día en que alguien depende de él.",
    "p4": "Que ninguna organización se detenga por tecnología que alguien pudo construir bien.",
    "an": 1,
    "at": 4,
    "mo": 1,
    "dg": 0,
    "dec": "aprobado"
   },
   "esp": [
    {
     "p1": "Seis de cada diez proyectos de software del Estado peruano se retrasan o se cancelan por fallas de construcción y de pruebas (MEF, 2025).",
     "p2": "C1 — analizar, diseñar, construir, verificar y desplegar el software con pruebas automatizadas y despliegue continuo.",
     "p3": "Un usuario que hace su trámite, su pago o su consulta sin que el sistema se caiga.",
     "p4": "Que el software que se entrega funcione el día en que alguien lo necesita.",
     "an": 1,
     "at": 4,
     "mo": 0.83,
     "dg": 0,
     "dec": "aprobado"
    },
    {
     "p1": "Menos de dos de cada diez empresas peruanas usan sus datos para decidir, y la Ley 31814 exige desde 2023 un uso ético de la inteligencia artificial (Congreso de la República del Perú, 2023).",
     "p2": "C2 — gobernar el dato, modelar, desarrollar la solución de IA y evaluarla en operación con criterio ético.",
     "p3": "Una gerencia que decide con evidencia y un ciudadano al que un modelo no discrimina.",
     "p4": "Que los datos sirvan para decidir mejor sin dejar a nadie afuera.",
     "an": 1,
     "at": 3,
     "mo": 1,
     "dg": 0,
     "dec": "aprobado"
    },
    {
     "p1": "Los incidentes de ciberseguridad reportados en el Perú se triplicaron entre 2022 y 2025, y el Marco de Confianza Digital obliga a responder con plazos (Presidencia del Consejo de Ministros, 2025).",
     "p2": "C3 — diseñar la plataforma, operarla, proteger y responder a incidentes y auditar el cumplimiento.",
     "p3": "Una persona cuyos datos y cuyo dinero siguen a salvo después de un ataque.",
     "p4": "Que ningún ataque deje a una organización sin operar ni a una persona sin sus datos.",
     "an": 1,
     "at": 4,
     "mo": 0.83,
     "dg": 0,
     "dec": "aprobado"
    },
    {
     "p1": "Solo tres de cada diez entidades públicas cuentan con un líder de gobierno digital, meta obligatoria de la política nacional al 2030 (Presidencia del Consejo de Ministros, 2025).",
     "p2": "C4 — alinear la estrategia, dirigir el proyecto, gestionar el servicio y evaluar el valor del cambio.",
     "p3": "Una organización que invierte en tecnología con una hoja de ruta y recibe el servicio que le prometieron.",
     "p4": "Que cada sol invertido en tecnología llegue a quien debía servir.",
     "an": 1,
     "at": 4,
     "mo": 0.83,
     "dg": 0,
     "dec": "aprobado"
    }
   ]
  },
  "prop": "Que ninguna organización se detenga por tecnología que alguien pudo construir bien.",
  "nota": ""
 },
 "demoAj": {
  "t": "Construir tecnología que funciona cuando alguien depende de ella: eso forma esta carrera. Desde el segundo año el estudiante desarrolla, protege y opera sistemas en proyectos con empresas bajo convenio vigente —seis fábricas de software y dos entidades públicas—, entrena en un rango de ciberataque propio y cada competencia declara con qué evidencia se demuestra. No promete adjetivos: promete un egresado que puede probar lo que sabe hacer.",
  "p": "Construir tecnología que funciona cuando alguien depende de ella, y poder probarlo.",
  "vp0": "Entrega software probado, desplegado y documentado que la organización puede operar desde el primer día.",
  "nota": "Puse la promesa al frente y la hice comprobable («y poder probarlo»); nombré los convenios con su número; cerré con lo que la carrera no promete. No toqué el eslabón 1 de ninguna cadena ni el veredicto del panel."
 },
 "vp": [
  [
   "Saber programar y saber entregar software que funciona en producción son dos cosas distintas. Esta especialidad te forma en la segunda: aprendes a leer el problema completo, diseñar la solución, construirla con pruebas y ponerla a operar con responsabilidad sobre el resultado.",
   "Entrega software probado, desplegado y documentado que la organización puede operar desde el primer día.",
   "Que el software que se entrega funcione el día en que alguien lo necesita."
  ],
  [
   "Aquí no se hacen reportes: se convierten los datos en decisiones y en modelos que aprenden. Aprendes a gobernar el dato, modelar, entrenar, evaluar y poner el modelo a operar con criterio ético y evidencia de impacto.",
   "Transforma datos en decisiones y en modelos que operan con evidencia y sin sesgo.",
   "Que los datos sirvan para decidir mejor sin dejar a nadie afuera."
  ],
  [
   "Detrás de cada sistema hay una plataforma y un riesgo: nube, redes, accesos, incidentes. Esta especialidad te forma para diseñar y operar esa plataforma y para responder por su seguridad ante quien la audite.",
   "Mantiene la plataforma operando y protegida, y puede demostrarlo ante una auditoría.",
   "Que ningún ataque deje a una organización sin operar ni a una persona sin sus datos."
  ],
  [
   "La tecnología no empieza en el proyecto: empieza en la decisión que lo justifica. Aprendes a alinear la estrategia con la arquitectura, dirigir el proyecto, operar el servicio y medir el valor que entrega.",
   "Conduce la tecnología desde la estrategia hasta el servicio que la organización recibe.",
   "Que cada sol invertido en tecnología llegue a quien debía servir."
  ]
 ],
 "sus": [
  [
   83,
   87,
   "Demanda alta: 412 convocatorias contadas en 12 meses; escasez sostenida y tendencia en crecimiento",
   "Equipo docente formado, laboratorio y convenios con fábricas de software",
   "Oportunidad estratégica"
  ],
  [
   85,
   63,
   "La remuneración más alta de la cartera; Ley 31814 y adopción de analítica en banca y telecomunicaciones",
   "Equipo parcial y plataforma de datos compartida: capacidad suficiente con brecha en GPU",
   "Oportunidad estratégica"
  ],
  [
   92,
   70,
   "Vacantes desiertas por más de 60 días; Marco de Confianza Digital con obligaciones y plazos",
   "Laboratorio con rango de ciberataque propio y docentes certificados",
   "Oportunidad estratégica"
  ],
  [
   77,
   83,
   "Plazas estables en oficinas de proyectos y exigencia de PMO en inversión pública",
   "Equipo docente certificado y convenios con entidades públicas",
   "Oportunidad estratégica"
  ]
 ],
 "narr": {
  "Desarrollo de software e ingeniería de aplicaciones": "El desarrollo de software concentra la mayor densidad de demanda del campo profesional. El conteo de convocatorias de los últimos doce meses lo ubica como el destino laboral más frecuente del titulado en ingeniería de sistemas, con empleadores distribuidos entre fábricas de software, banca, retail, startups y entidades del Estado (Instituto Nacional de Estadística e Informática [INEI], 2025). Ese volumen tiene un driver estructural: la inversión pública en gobierno digital y la migración de los servicios financieros y comerciales a canales digitales convierten la contratación de desarrolladores en una necesidad permanente y no en un proyecto puntual (Ministerio de Economía y Finanzas [MEF], 2025). El cuerpo de conocimiento de la ingeniería de software fija además la verificación y el despliegue como tramos con evidencia propia, lo que explica que el empleador exija pruebas automatizadas y entrega continua como parte del puesto y no como especialidad aparte (IEEE Computer Society, 2024). Para la Dirección, la implicancia es directa: esta especialidad no requiere inversión previa a la apertura —el equipo docente está formado y los convenios con fábricas de software están firmados— y su ausencia en el plan dejaría al egresado fuera del mercado que hoy más lo demanda. Se recomienda mantenerla como eje del perfil de egreso y asegurar que la evidencia con la que se demuestra —el software en producción con su repositorio, sus pruebas y su documentación— quede declarada en la competencia correspondiente.",
  "Ciencia de datos e inteligencia artificial": "La ciencia de datos y la inteligencia artificial es la especialidad de mayor remuneración y mayor crecimiento de la cartera. La demanda proviene de la banca, las telecomunicaciones, el retail y la minería, sectores que ya operan modelos en producción y que convocan perfiles capaces de gobernar el dato, entrenar el modelo y responder por su comportamiento (INEI, 2025; World Economic Forum, 2025). El impulso normativo es reciente y explícito: la Ley 31814 promueve el uso de la inteligencia artificial con principios de ética y transparencia, y su reglamento en curso obliga a las organizaciones a evaluar el sesgo y el impacto de los sistemas que despliegan (Congreso de la República del Perú, 2023). Esa exigencia convierte la evaluación ética del modelo en un tramo profesional con evidencia propia, que el plan vigente no recogía. La restricción de la Escuela es acotada y está identificada: el equipo docente es parcial y la plataforma de cómputo con GPU se comparte con otra escuela; ninguna de las dos impide abrir la especialidad. Se recomienda incorporarla al plan con la capacidad de evaluación y monitoreo explícita, y sostener con un plan de corto plazo la contratación del perfil docente que falta.",
  "Ciberseguridad y gestión de riesgos digitales": "La ciberseguridad presenta el perfil de demanda más sólido de la cartera: vacantes que quedan desiertas por más de sesenta días, remuneración muy sobre el promedio y una amplitud de empleadores que abarca banca, seguros, Estado y proveedores de servicios (INEI, 2025; Colegio de Ingenieros del Perú [CIP], 2025). El driver es regulatorio y de riesgo a la vez: el Marco de Confianza Digital obliga a las entidades a gestionar incidentes con plazos y a reportarlos, y el número de incidentes notificados se ha multiplicado en tres años (Presidencia del Consejo de Ministros [PCM], 2025). El estándar internacional de referencia organiza el ejercicio en cinco funciones —identificar, proteger, detectar, responder y recuperar— que constituyen un proceso completo con evidencia propia (National Institute of Standards and Technology [NIST], 2024). La Escuela dispone de un activo que ninguna otra oferta de la región declara: un laboratorio con rango de ciberataque propio y docentes certificados, lo que hace de esta especialidad tanto una apuesta de mercado como un argumento de diferenciación. Se recomienda incorporarla al plan como competencia propia, y no como capacidad diluida dentro de la infraestructura, porque es esa autonomía la que el empleador reconoce al contratar.",
  "Gestión de proyectos y servicios de TI": "La gestión de proyectos y servicios de TI sostiene una demanda de volumen alto y formalidad creciente. Las oficinas de proyectos de empresas medianas y grandes, las entidades públicas y las consultoras convocan al mismo perfil, y los proyectos de inversión pública exigen una función de dirección de proyectos con certificación reconocida (MEF, 2025; CIP, 2025). Su crecimiento es más moderado que el de las especialidades técnicas, pero su sostenibilidad es la más alta de la cartera: la responsabilidad sobre el resultado del proyecto y la negociación con proveedores y usuarios no se automatizan (World Economic Forum, 2025). La Escuela cuenta con equipo docente certificado y convenios con entidades públicas, por lo que la apertura no exige habilitación previa. Para la Dirección la decisión relevante no es si incorporarla, sino cómo articularla con la transformación digital: el análisis estableció que el proyecto empieza en una decisión estratégica que el plan vigente no recogía en ninguna capacidad, y que esa decisión obliga a una capacidad de alineamiento nueva. Se recomienda incorporarla con esa capacidad explícita y con el servicio de TI como evidencia de cierre.",
  "Infraestructura en la nube y DevOps": "La infraestructura en la nube y DevOps es la especialidad con mayor brecha entre lo que el mercado paga y lo que la Escuela puede sostener hoy. Por el lado de la demanda, la migración a la nube de la banca y del Estado y la adopción de la entrega continua han convertido al ingeniero de plataforma en un perfil escaso y bien remunerado, con crecimiento sostenido en los avisos de los últimos tres años (INEI, 2025; Organización Internacional del Trabajo [OIT], 2024). Su particularidad técnica es que opera entre dos procesos: despliega el software que otros construyen y sostiene la plataforma que la seguridad protege, razón por la cual el análisis de correspondencia la clasificó como ámbito compartido entre dos competencias. Para la Dirección esto tiene una consecuencia práctica: no requiere abrir una competencia nueva, sino precisar las capacidades de despliegue y de operación para que incorporen la infraestructura como código. La restricción está en el equipo docente certificado y en las cuentas de nube para la práctica, ambas de costo acotado. Se recomienda incorporarla con plan de habilitación de corto plazo —convenio con una academia de proveedor de nube y contratación de un docente certificado— por ser la de mejor relación entre inversión requerida y demanda cubierta.",
  "Arquitectura empresarial y transformación digital": "La arquitectura empresarial y la transformación digital es la especialidad de mayor potencial entre las que la Escuela todavía no puede sostener. Su demanda proviene de la obligación de las entidades públicas de contar con un líder de gobierno digital y de la presión de las corporaciones por alinear la tecnología con la estrategia, obligación que la Política Nacional de Transformación Digital fijó con metas al 2030 (PCM, 2025; MEF, 2025). Es, además, un campo donde el ingeniero de sistemas compite con el administrador y el consultor de negocio, y donde la credencial diferenciadora es la capacidad de traducir la estrategia a una arquitectura de sistemas viable. El obstáculo es interno y está identificado: la Escuela no dispone de docentes con hojas de ruta aprobadas en organizaciones reales ni de convenios con consultoras, y ninguna capacidad del plan vigente recogía el tramo previo al proyecto. La recomendación para la Dirección es incorporarla al plan condicionada a un plan de habilitación con responsable y plazo —docente certificado en arquitectura empresarial y convenio con una consultora de la región— y no comprometerla en la oferta de admisión hasta que ese convenio esté firmado.",
  "Desarrollo móvil y experiencias digitales": "El desarrollo móvil y las experiencias digitales se sostienen en un driver de mercado antes que normativo: los canales digitales son hoy el primer punto de contacto de la banca, el retail y los medios con sus usuarios, y esas organizaciones convocan al perfil dentro de sus equipos de producto (INEI, 2025; OIT, 2024). Su rasgo distintivo para el análisis curricular es que no constituye un proceso profesional separado: aplica el mismo ciclo de análisis, diseño, construcción, verificación y despliegue que el desarrollo de software, y produce la misma evidencia cambiando la plataforma y la experiencia del usuario (IEEE Computer Society, 2024). Por esa razón el análisis de correspondencia la clasificó como ámbito de aplicación de la competencia de ingeniería de software, decisión que la Dirección debe conocer porque tiene efecto sobre la Fase 2: sus funciones se derivarán dentro de esa competencia y no abrirán una nueva. La Escuela cuenta con docentes con aplicaciones publicadas y con laboratorio de experiencia de usuario, por lo que la apertura no exige habilitación. Se recomienda incorporarla como ámbito declarado y ofrecerla como mención, sin fragmentar la formación en una competencia propia."
 },
 "narrRef": {
  "Desarrollo de software e ingeniería de aplicaciones": [
   2,
   9,
   6
  ],
  "Ciencia de datos e inteligencia artificial": [
   2,
   10,
   5
  ],
  "Ciberseguridad y gestión de riesgos digitales": [
   2,
   4,
   1,
   7
  ],
  "Gestión de proyectos y servicios de TI": [
   9,
   4,
   10
  ],
  "Infraestructura en la nube y DevOps": [
   2,
   3
  ],
  "Arquitectura empresarial y transformación digital": [
   1,
   9
  ],
  "Desarrollo móvil y experiencias digitales": [
   2,
   3,
   6
  ]
 },
 "eqman": {},
 "vdecl": {},
 "vpa": null,
 "guion": {
  "0": " Lo que más pesa: ciberseguridad, datos e IA, nube y desarrollo concentran la escasez y las medianas salariales más altas (S/ 7 190–11 380 frente a S/ 4 331 del promedio joven). Dos candidatas nuevas frente a la cartera anterior: consultoría ERP y protección de datos personales.",
  "1": " En esta ronda, **5 de 19 salieron esenciales** —desarrollo de software e ingeniería de aplicaciones, ciencia de datos e inteligencia artificial, ciberseguridad y gestión de riesgos digitales, infraestructura en la nube y devops y gestión de proyectos y servicios de ti—; 8 no esenciales y 6 sin consenso. El guardián dejó 3 reglas en «no cumple» (tecnología admitida como especialidad, afirmaciones sin enlace fechado, crecimiento sin serie contada): se corrigen en la cartera antes de una ronda 2, sin tocar las calificaciones.",
  "4": "<ul><li><b>Ciberseguridad y gestión de riesgos digitales</b> con Protección de datos personales y privacidad</li><li><b>Infraestructura en la nube y DevOps</b> con Redes y telecomunicaciones</li><li><b>Gestión de proyectos y servicios de TI</b> con Auditoría de sistemas y gobierno de TI y Arquitectura empresarial y transformación digital</li><li><b>Ciencia de datos e inteligencia artificial</b> con Inteligencia de negocios y analítica empresarial</li><li><b>Desarrollo de software e ingeniería de aplicaciones</b> con Análisis funcional y de sistemas de información</li></ul>",
  "6": " <b>Ingeniería de software</b> (construcción): desarrollo de software equivale a la competencia; análisis funcional y equivale a una capacidad («Análisis y especificación de requisitos»). <b>Plataforma e infraestructura</b> (construcción): infraestructura en la equivale a la competencia; redes y telecomunicaciones es ámbito de aplicación. <b>Datos e inteligencia artificial</b> (construcción): ciencia de datos equivale a la competencia; inteligencia de negocios es ámbito de aplicación. <b>Ciberseguridad</b> (gestión): ciberseguridad y gestión equivale a la competencia; protección de datos es ámbito de aplicación. <b>Gobierno y gestión de TI</b> (gestión): gestión de proyectos equivale a la competencia; arquitectura empresarial y equivale a una capacidad («Alineamiento de la tecnología con la estrategia»); auditoría de sistemas equivale a una capacidad («Auditoría de controles y riesgos de TI»).",
  "7": " Dirección: abrí el plan y lo contrasté con las cinco competencias derivadas. Ninguna competencia vigente se conserva literal: sus definiciones nombran disciplinas u objetos y no el proceso, y dos pares de capacidades repiten la misma definición. Dos se reformulan —Ingeniería de software y Ciencia de datos e inteligencia artificial—, una se desdobla —Gestión de la infraestructura tecnológica, que separa la seguridad como competencia propia— y dos nacen: Ciberseguridad, que el plan trataba como capacidad, y Gobierno y gestión de TI, que el plan no recogía. Ninguna competencia ni capacidad vigente desaparece: las doce capacidades del plan continúan reformuladas, fusionadas o redistribuidas.",
  "10": " 5 especialidades equivalen a una competencia completa, 3 son ámbito de aplicación, 3 equivalen a una capacidad. Prueba de cobertura: ninguna especialidad sin correspondencia y las 25 capacidades quedan cubiertas.",
  "14": "**3 confirmados** (proyectos con empresas desde el segundo año, evidencia declarada por competencia, laboratorio con rango de ciberataque), **1 condicionado** (certificaciones de nube: convenio sin firma, plan a marzo 2027) y **1 en paridad** (docentes de la industria: dos de cada tres competidores pueden firmarlo).",
  "avisos": "2 089 públicas · 2 000+ LinkedIn",
  "oferta": "14 universidades",
  "leg": {
   "comp": "Es el caso del desarrollo de software frente a la competencia de ingeniería de software: no sobra ni falta nada.",
   "amb": "El desarrollo móvil analiza, diseña, construye, verifica y despliega igual que el desarrollo de software: cambia la plataforma, no el proceso. Por eso no abre una competencia nueva.",
   "cap": "La auditoría de sistemas devuelve un informe de auditoría, no una plataforma operando.",
   "trv": "La infraestructura en la nube despliega el software que otros construyen y sostiene la plataforma que la ciberseguridad protege: pertenece a dos procesos distintos."
  }
 },
 "acta": {
  "fecha": "23-09-2026",
  "ronda": 1,
  "estado": "revisado",
  "resumen": {
   "n": 19,
   "esencial": 5,
   "esencialSinUnanimidad": 0,
   "noEsencial": 8,
   "sinConsenso": 6,
   "bajoUmbral": 14,
   "guardianNoCumple": [
    2,
    3,
    4
   ]
  },
  "guardian": {
   "rol": "G",
   "reglas": [
    {
     "n": 1,
     "veredicto": "Cumple",
     "hallazgo": "Las 20 candidatas declaran empleo y negocio propio (1–4). Solo SIS-20 (1/2) tiene ambas ≤ 2 y está devuelta como «Recurso del 2.2 (provisional)»; SIS-19 (3/1) sale por origen en extinción, no por esta regla."
    },
    {
     "n": 2,
     "veredicto": "No cumple",
     "hallazgo": "SIS-16 Blockchain es una tecnología y sigue valorada (25) sin destino al 2.2; SIS-08 lleva el producto «SAP» en el nombre y SIS-04 la metodología «DevOps». Solo SIS-20 IA generativa fue derivada al 2.2."
    },
    {
     "n": 3,
     "veredicto": "No cumple",
     "hallazgo": "Cifras con [P-S] y [E-B] no tienen enlace ni fecha: déficit >2 700 científicos de datos, US$ 30 M del Estado, ProInnóvate 30 000, AWS 09-2026, 88 % edge. N-4 y N-7 citan hallazgos, no lecturas; N-B12 es búsqueda."
    },
    {
     "n": 4,
     "veredicto": "No cumple",
     "hallazgo": "SIS-1-empleo declara que no existe serie de avisos por especialidad. SIS-06, SIS-14 y SIS-15 puntúan «crece» (3) con porcentajes de adopción; SIS-02, SIS-03 y SIS-20 con proyecciones (+20 % proyectado 2025, CAGR 2025–2029), no con series contadas."
    },
    {
     "n": 5,
     "veredicto": "Cumple",
     "hallazgo": "Ninguna candidata valorada queda fuera del título ni de la colegiatura CIP. SIS-19, declarada «puesto técnico, no de ingeniero», está devuelta; SIS-18 UX/UI queda «en el límite» con colegiatura no exigida, dentro del alcance pero sin resolver."
    },
    {
     "n": 6,
     "veredicto": "Cumple",
     "hallazgo": "Cartera, justificaciones y evidencias no citan el plan de la UPeU ni sus competencias; solo declaran que sigue sellado. «Competencias más demandadas» en SIS-3-prospectiva y SIS-20 es vocabulario de Experis (mercado), no del plan."
    },
    {
     "n": 7,
     "veredicto": "Cumple",
     "hallazgo": "Las 20 filas tienen vacías las seis columnas de capacidad y la de prioridad, además de Panel y Aprobada (M3). La tabla de diferenciación de SIS-4-oferta es barrido del agente y aún no se volcó al CSV."
    }
   ],
   "observaciones": [
    "Marcadores N-n ambiguos: en SIS-2-normativa la numeración de lecturas [1]–[9] y la de hallazgos 1–7 coinciden y se cruzan (N-4 se usa para Ley 31814 y para el vacío de Contraloría; N-7 para Ley 30096 y para certificaciones). Conviene distinguir N-L y N-H.",
    "Contradicción entre evidencias no resuelta: E-L4 registra Expectativa Neta de Empleo TI de 51 % en 1T-2026 (+24 pts interanual) y P-L9 de 15 % en Q4-2026 (−7 pp); la cartera solo usa la segunda como «desaceleración» en SIS-01 y SIS-05.",
    "SIS-3-prospectiva remite la lista de fragmentos [S] a «el informe del agente»: cada cifra [S] usada en la cartera debe nombrar su fuente y fecha dentro de la evidencia, o marcarse como juicio del modelo.",
    "SIS-1-empleo califica el +20 % de 2025 como «proyectado» (Michael Page, enero 2025), pero SIS-02 y SIS-03 lo usan como crecimiento observado en cre; debe rebajarse o etiquetarse como proyección.",
    "SIS-19 registra como motivo de salida solo «origen en extinción» aunque la cartera también la declara «puesto técnico, no de ingeniero»; conviene registrar ambos motivos para que el destino sobreviva a una eventual revisión del origen."
   ]
  },
  "abiertas": {
   "faltan": {
    "P1": [
     "Ingeniería de datos y MLOps: Data Engineer US$ 1 500–2 500 [E-L8], emergente declarado en la prospectiva [P]; es el puesto que hoy se contrata más que el científico de datos puro.",
     "Ingeniería fintech y medios de pago: fintech capta 76,9 % del capital de riesgo 2025 [P-S] y contrata desarrollo, seguridad y datos con nombre propio.",
     "Arquitectura de software y soluciones: 'arquitecto de soluciones' aparece como puesto en el barrido [E-B14], mediana S/ 10 850 [E-L11], distinto de arquitectura empresarial."
    ],
    "P2": [
     "Ingeniería de datos y MLOps (pipelines, gobernanza y operación de modelos): emergente en el barrido [P-L3][P-L4], la contratan banca y telcos, y hoy queda repartida entre SIS-02, SIS-14 y SIS-17 sin nombre propio.",
     "Ingeniería fintech y banca digital (pagos, core bancario, cumplimiento SBS): captura 76,9 % del capital de riesgo 2025 [P-S] y el barrido la marca emergente, pero ninguna especialidad de la cartera la nombra.",
     "Operación de infraestructura para IA y data centers (platform engineering, FinOps): anuncios de AWS 2026 y data centers de US$ 100 M [P-L11][P-S]; irrupción proyectada 2026–2028, hoy solo implícita en SIS-04."
    ],
    "P3": [
     "Peritaje e informática forense digital: la tabla normativa le asigna nivel 3 (Ley 30096 hasta DL 1741; SBS 504-2021 art. 15.2) y no figura en la cartera.",
     "Gobierno y ética de la IA (clasificación por riesgo, análisis de impacto, transparencia algorítmica, supervisión humana) exigidos por Ley 31814 y DS 115-2025-PCM; hoy queda implícito en SIS-02.",
     "Continuidad del negocio y recuperación de TI: control exigido por SBS 504-2021 y NTP-ISO/IEC 27001 sin especialidad que lo recoja."
    ],
    "P4": [
     "Ingeniería de datos (pipelines, integración, calidad y gobierno del dato): es el perfil que más me cuesta cubrir y queda partido entre SIS-02, SIS-14 y SIS-17",
     "Integración de sistemas y APIs (core bancario, pasarelas, middleware): puesto real en banca y retail que ninguna especialidad nombra"
    ],
    "P5": [
     "Ingeniería de datos y MLOps: pipelines, gobernanza y operación de modelos en producción; es lo que no se automatiza de la IA y hoy está repartido entre SIS-02, SIS-04 y SIS-17",
     "Seguridad de IA y de tecnología operacional (OT): frente emergente en minería, industria y sistemas de IA regulados por la Ley 31814",
     "Ingeniería de plataformas para IA y data centers: operación de infraestructura de cómputo para cargas de IA, con inversión comprometida en 2026",
     "Automatización de procesos con IA agéntica: integración de agentes y RPA a procesos de negocio, demandada por 7 de 10 empresas y sin especialidad que la cubra"
    ],
    "P6": [
     "Sistemas de información para el Estado y gobierno digital (SIAF, SIGA, interoperabilidad, DL 1412): es lo que contratan gobiernos regionales, municipios y UGEL en Juliaca y Tarapoto; ninguna universidad lo declara como línea [E-L2][O-tabla]",
     "Ingeniería de datos y gobernanza del dato como línea propia, distinta de ciencia de datos: UTEC la declara como Gobernanza de Datos y ULima solo como curso suelto [O-tabla][E-L8]",
     "Tecnologías para minería 4.0 y agroindustria (OT, automatización, telemetría) como especialidad territorial de las sedes de regiones; hoy solo aparece dispersa en IoT y redes [P-L3][P-L11]"
    ]
   },
   "integrar": {
    "P1": [
     "SIS-01 + SIS-07: los portales integran móvil en desarrollo de software y reclutan del mismo pool [E-B15][P-L9].",
     "SIS-02 + SIS-14 + SIS-17: ciencia de datos, BI y bases de datos se contratan como un solo equipo de datos e ingeniería de datos [E-B10][P].",
     "SIS-03 + SIS-13 + SIS-12: ciberseguridad, protección de datos y auditoría se convocan como riesgo y cumplimiento (70k–100k anuales) [E-B5][N-3][N-6].",
     "SIS-04 + SIS-11: nube/DevOps y redes se contratan como infraestructura; jefe de infraestructura mediana S/ 7 190 cubre ambas [E-L11].",
     "SIS-09 + SIS-10 dentro de SIS-01: análisis funcional y QA son roles del equipo de desarrollo, no especialidades contratadas aparte [E-B9]."
    ],
    "P2": [
     "SIS-02 + SIS-14 + SIS-17 en una sola especialidad de datos e IA (ciencia, analítica e ingeniería de datos): mismo empleador y mismo pipeline; BI converge con ciencia de datos y el DBA se reconvierte a ingeniería de datos [P][P-L4].",
     "SIS-01 + SIS-07 + SIS-09 + SIS-10 como desarrollo de software integral: el mercado contrata desarrollador que releva, construye, prueba y publica; móvil, análisis y QA se contratan dentro de desarrollo [E-B15][P-L9][P-L10].",
     "SIS-03 + SIS-13 (con puente a SIS-12) como seguridad, privacidad y gobierno del riesgo digital: normas con plazo 2025–2028 exigen Oficial de Seguridad y Oficial de Datos en la misma organización [N-2][N-6][N-8].",
     "SIS-04 + SIS-11 como plataforma y conectividad: la operación híbrida y regulada demanda nube, red y observabilidad en un mismo equipo [P-L5][P-L11]."
    ],
    "P3": [
     "SIS-03 + SIS-13: la norma pide juntos al Oficial de Seguridad y al Oficial de Datos, ambos con notificación en 48 h (DS 126-2025-PCM, DS 016-2024-JUS); una sola especialidad de seguridad, privacidad y cumplimiento.",
     "SIS-12 + SIS-06: gobierno de TI y transformación digital comparten marco (DL 1412, NTP 27001, PNTD 2030) y comité de dirección; el mercado contrata gobierno y arquitectura en el mismo cargo.",
     "SIS-14 + SIS-02 + SIS-17: inteligencia de negocios, ciencia de datos y administración de bases de datos son un solo ciclo del dato bajo Ley 31814 y Ley 29733.",
     "SIS-07 + SIS-01 (+ SIS-10): móvil y pruebas se contratan dentro de desarrollo de software; ninguna norma los distingue."
    ],
    "P4": [
     "SIS-14 con SIS-02: contrato un solo equipo de datos donde el analista de BI crece a científico o ingeniero de datos",
     "SIS-01 con SIS-07 y SIS-10: el puesto de desarrollador ya incluye móvil y pruebas automatizadas; no abro vacantes separadas",
     "SIS-17 con SIS-04: la administración de bases de datos vive hoy en el equipo de plataforma y nube",
     "SIS-13 con SIS-03: seguridad y protección de datos responden al mismo oficial de seguridad y cumplimiento"
    ],
    "P5": [
     "SIS-14 Inteligencia de negocios y SIS-17 Administración de bases de datos con SIS-02 Ciencia de datos e IA: el mercado contrata ingeniería y analítica de datos como un solo perfil",
     "SIS-07 Desarrollo móvil, SIS-09 Análisis funcional, SIS-10 Pruebas y SIS-18 UX/UI con SIS-01 Desarrollo de software: ingeniería de producto de punta a punta con desarrollo asistido por IA",
     "SIS-13 Protección de datos personales con SIS-03 Ciberseguridad y SIS-12 Auditoría y gobierno de TI: seguridad, riesgo y cumplimiento se contratan como una sola función",
     "SIS-15 IoT y sistemas embebidos con SIS-11 Redes y telecomunicaciones: conectividad, 5G privadas y edge se contratan juntos en minería e industria"
    ],
    "P6": [
     "SIS-14 inteligencia de negocios con SIS-02 ciencia de datos: misma naturaleza y UTEC, Continental y UPN las ofrecen como una sola línea de datos [O-tabla]",
     "SIS-07 desarrollo móvil, SIS-10 calidad y SIS-18 UX/UI dentro de SIS-01 desarrollo de software: los portales y la EDO no las separan y ninguna universidad las declara como línea propia salvo casos aislados [E-B15][O-tabla]",
     "SIS-13 protección de datos con SIS-03 ciberseguridad y SIS-12 auditoría: en entidades públicas el Oficial de Seguridad, el Oficial de Datos y el SGSI recaen en la misma unidad de TI [N-6][N-8]",
     "SIS-17 administración de bases de datos con SIS-04 nube y DevOps: el privado ya lo absorbe en DevOps y datos [E-L2]"
    ]
   },
   "noPuesto": {
    "P1": [
     "SIS-19 Soporte técnico y mesa de ayuda: puesto técnico de entrada, no de ingeniero, base S/ 1 200 [E-B1].",
     "SIS-16 Blockchain y activos digitales: sin puestos ni negocio identificable en el Perú [E][P-S].",
     "SIS-13 Protección de datos personales: función de cumplimiento obligatoria por norma, sin avisos de empleo ni negocio propio hoy [N-6]."
    ],
    "P2": [
     "SIS-19 Soporte técnico y mesa de ayuda: puesto técnico, no de ingeniero, y el primero en automatizarse [P-S][P-L10]; tampoco es negocio propio para un titulado.",
     "SIS-16 Blockchain y activos digitales: sin puestos ni empresas en Perú; sin evidencia de negocio propio [E][P-S].",
     "IA generativa como especialidad (SIS-20 del justificante): herramienta transversal que redistribuye tareas, no puesto ni negocio [P-L9][P]; debe entrar como capacidad en todas las demás."
    ],
    "P3": [
     "SIS-19 Soporte técnico y mesa de ayuda: puesto técnico, no de ingeniero, sin negocio propio.",
     "SIS-16 Blockchain y activos digitales: sin puestos con ese nombre ni marco normativo en el Perú; no es negocio autónomo.",
     "SIS-18 UX/UI: es puesto, pero de diseñador, no del título de ingeniero; fuera del alcance que habilita la colegiatura."
    ],
    "P4": [
     "SIS-19 Soporte técnico: puesto técnico, no de ingeniero, y en automatización",
     "SIS-16 Blockchain: no existe vacante con ese nombre en mi mercado",
     "SIS-13 Protección de datos: es función de cumplimiento legal, no un puesto de ingeniería",
     "SIS-06 Arquitectura empresarial: es un cargo senior de carrera, no una especialidad de egreso"
    ],
    "P5": [
     "SIS-16 Blockchain y activos digitales: tecnología en experimentación disfrazada de especialidad, sin puesto ni negocio en Perú",
     "SIS-08 Consultoría e implementación de ERP (SAP): producto de un proveedor, no campo; el negocio real es la integración de procesos empresariales",
     "SIS-07 Desarrollo móvil: plataforma de despliegue del software, no especialidad ni negocio separado",
     "SIS-19 Soporte técnico y mesa de ayuda: puesto técnico de entrada en extinción, no especialidad de ingeniero",
     "IA generativa (fuera de cartera como SIS-20): herramienta transversal que redistribuye tareas de todas las especialidades, no campo de ejercicio"
    ],
    "P6": [
     "SIS-16 blockchain: sin puestos en ninguna búsqueda ni universidad que la declare [O-tabla]",
     "SIS-19 soporte técnico y mesa de ayuda: es puesto técnico de entrada, no de ingeniero, y no sostiene negocio propio [E-B1]",
     "SIS-13 protección de datos: es un cargo de cumplimiento obligatorio por norma, compartido con abogados, no una especialidad de ingeniería ni un negocio [N-6]"
    ]
   }
  }
 },
 "vagente": {
  "Desarrollo de software e ingeniería de aplicaciones": {
   "dif": 2,
   "hab": 3
  },
  "Ciencia de datos e inteligencia artificial": {
   "dif": 2,
   "hab": 3
  },
  "Ciberseguridad y gestión de riesgos digitales": {
   "dif": 2,
   "hab": 4
  },
  "Infraestructura en la nube y DevOps": {
   "dif": 3,
   "hab": 3
  },
  "Gestión de proyectos y servicios de TI": {
   "dif": 3,
   "hab": 3
  },
  "Arquitectura empresarial y transformación digital": {
   "dif": 3,
   "hab": 3
  },
  "Análisis funcional y de sistemas de información": {
   "dif": 3,
   "hab": 3
  },
  "Redes y telecomunicaciones": {
   "dif": 3,
   "hab": 2
  },
  "Auditoría de sistemas y gobierno de TI": {
   "dif": 4,
   "hab": 4
  },
  "Protección de datos personales y privacidad": {
   "dif": 4,
   "hab": 4
  },
  "Inteligencia de negocios y analítica empresarial": {
   "dif": 3,
   "hab": 3
  }
 },
 "decl": {
  "resp": "Dirección de la EP de Ingeniería de Sistemas · UPeU",
  "fecha": "24-09-2026",
  "tipo": "borrador de declaración de la Dirección"
 },
 "integr": {
  "Ciberseguridad y gestión de riesgos digitales": [
   "Protección de datos personales y privacidad"
  ],
  "Infraestructura en la nube y DevOps": [
   "Redes y telecomunicaciones"
  ],
  "Gestión de proyectos y servicios de TI": [
   "Auditoría de sistemas y gobierno de TI",
   "Arquitectura empresarial y transformación digital"
  ],
  "Ciencia de datos e inteligencia artificial": [
   "Inteligencia de negocios y analítica empresarial"
  ],
  "Desarrollo de software e ingeniería de aplicaciones": [
   "Análisis funcional y de sistemas de información"
  ]
 },
 "mejoras": {
  "Ingeniería de software": {
   "def": "Desarrolla soluciones de software que una organización utiliza en sus operaciones, analizando las necesidades del negocio, diseñando la arquitectura, programando los componentes de backend, frontend e integración, verificándolos mediante pruebas automatizadas y revisión de código, y desplegándolos en producción. Ejerce esta labor en equipos de desarrollo o fábricas de software que trabajan con repositorios versionados, integración continua, metodologías ágiles y estándares de calidad y seguridad, con el propósito de entregar sistemas confiables y mantenibles que respondan a los requerimientos del negocio. Demuestra la competencia con software desplegado en producción, acompañado de su repositorio de código, sus pruebas automatizadas, su pipeline de despliegue y su documentación técnica, y aceptado por el usuario.",
   "caps": [
    {
     "d": "Capacidad de relevar las necesidades del negocio y traducirlas en requisitos y especificaciones verificables, modelando procesos y casos de uso junto con los usuarios y las áreas funcionales. Se ejerce en contextos de cambio organizacional, donde las prioridades y los procesos se redefinen con frecuencia y exigen revisar la especificación. Moviliza técnicas de elicitación, modelado de procesos y de casos de uso, escucha activa, rigor en la formulación y comunicación clara con áreas no técnicas."
    },
    {
     "d": "Capacidad de diseñar la arquitectura, los modelos de datos y las interfaces de una solución a partir de los requisitos especificados, eligiendo patrones y tecnologías que respondan a las restricciones de escala, costo y seguridad de cada proyecto. Se adapta a organizaciones con distintos niveles de madurez tecnológica y a sistemas nuevos o heredados. Moviliza patrones de diseño, bases de datos, arquitectura de software, criterio técnico fundamentado y responsabilidad por las decisiones que condicionan la construcción."
    },
    {
     "d": "Capacidad de programar los componentes de backend, frontend e integración de APIs conforme al diseño aprobado, trabajando en repositorios versionados con revisión de código y entrega incremental. Se adapta a distintos lenguajes, marcos de trabajo y convenciones propias de cada equipo o fábrica de software. Moviliza dominio de la programación, estructuras de datos y algoritmos, estándares de codificación, disciplina en el trabajo diario y colaboración con los demás miembros del equipo de desarrollo."
    },
    {
     "d": "Capacidad de verificar que el software cumple los requisitos y los estándares de calidad establecidos, mediante pruebas unitarias, de integración y de aceptación automatizadas, complementadas con revisión de código entre pares. Se ejerce en ciclos de entrega continua, donde cada cambio debe validarse sin frenar el ritmo del equipo. Moviliza técnicas de prueba, análisis de defectos y de su causa raíz, pensamiento crítico, meticulosidad y compromiso sostenido con la calidad del producto."
    },
    {
     "d": "Capacidad de liberar el software en producción mediante pipelines de integración y despliegue continuo, documentarlo técnicamente y mantenerlo de forma evolutiva frente a fallos y nuevos requerimientos del negocio. Se adapta a entornos de nube o locales y a las distintas políticas de liberación de cada organización. Moviliza conocimientos de CI/CD, control de versiones, documentación técnica, responsabilidad operativa por lo que está en producción y orientación al usuario que depende del sistema."
    }
   ],
   "nota": "Reescribí la definición en registro académico y en tercera persona, eliminé las rayas y enlacé las oraciones; ahora nombra explícitamente la evidencia. Amplié cada capacidad con su contexto y sus saberes movilizados, sin cambiar la estructura ni el número de capacidades."
  },
  "Plataforma e infraestructura": {
   "def": "Diseña, automatiza y opera la plataforma tecnológica sobre la que corren los sistemas de una organización, integrada por infraestructura en la nube, contenedores, pipelines, redes y comunicaciones, aprovisionándola como código, monitoreándola con prácticas de observabilidad y asegurando su disponibilidad, su seguridad perimetral y su costo. Ejerce esta labor en entornos locales, híbridos, multinube y de servicios gestionados, con el propósito de que las aplicaciones y las comunicaciones de la organización operen de forma continua, escalable y eficiente. Demuestra la competencia con una plataforma en operación, respaldada por su infraestructura como código o configuración documentada, sus pipelines de despliegue, su tablero de observabilidad y sus indicadores de disponibilidad y costo.",
   "caps": [
    {
     "d": "Capacidad de diseñar la arquitectura de la plataforma, que comprende servicios en la nube, contenedores, topología de red y comunicaciones, dimensionándola según la carga esperada, la disponibilidad requerida, la seguridad y el costo. Se adapta a escenarios locales, híbridos o multinube y a organizaciones con distintos grados de madurez tecnológica. Moviliza arquitectura cloud, redes y protocolos de comunicación, criterio de diseño fundamentado y responsabilidad por la continuidad del negocio que depende de la plataforma."
    },
    {
     "d": "Capacidad de aprovisionar y configurar la plataforma mediante infraestructura como código, contenedores, pipelines de integración y despliegue, y configuración de equipos de red, de forma reproducible, versionada y auditable. Se adapta a distintos proveedores de nube y de red, y a equipos que migran de la configuración manual a la automatizada. Moviliza herramientas de automatización, scripting, control de versiones, rigor en la definición de la configuración y orientación a la reproducibilidad de los entornos."
    },
    {
     "d": "Capacidad de operar la plataforma en el día a día, atendiendo respaldos, soporte, gestión de cambios, incidentes y capacidad, con procedimientos documentados y acuerdos de nivel de servicio. Se ejerce en contextos de operación continua, donde la interrupción del servicio afecta directamente a la organización y a sus usuarios. Moviliza administración de sistemas y redes, procedimientos operativos, disciplina en la ejecución, atención permanente a la continuidad y vocación de servicio al usuario."
    },
    {
     "d": "Capacidad de instrumentar la plataforma con monitoreo, registros, trazas y alertas, medir su disponibilidad y rendimiento, y proteger su perímetro frente a accesos no autorizados, anticipando fallos antes de que afecten al servicio. Se adapta a entornos distribuidos y a arquitecturas que crecen en componentes y dependencias. Moviliza observabilidad, seguridad perimetral, análisis de métricas y registros, vigilancia proactiva y responsabilidad por la disponibilidad del servicio ante la organización."
    },
    {
     "d": "Capacidad de analizar el uso real de la plataforma y optimizar su rendimiento, su escalabilidad y su costo mediante prácticas de FinOps, ajuste de recursos y mejora de la arquitectura, con base en evidencia de operación. Se ejerce en organizaciones con presupuesto restringido, donde cada recurso debe justificarse. Moviliza análisis de costos, ingeniería de rendimiento, pensamiento económico, mejora continua y transparencia ante la dirección sobre el gasto tecnológico y sus resultados."
    }
   ],
   "nota": "Reescribí la definición en tercera persona y registro académico, convertí los incisos entre rayas en enumeraciones y nombré la evidencia con que se demuestra. Extendí cada capacidad con su contexto y sus saberes, conservando la estructura y las cinco capacidades."
  },
  "Datos e inteligencia artificial": {
   "def": "Construye soluciones que convierten los datos de una organización en decisiones y en modelos que aprenden, gobernando e integrando el dato, formulando, entrenando y evaluando modelos descriptivos, predictivos o de inteligencia artificial, e implantándolos en producción con monitoreo y tableros de decisión. Ejerce esta labor bajo principios de calidad del dato, ética algorítmica y protección de datos, en empresas, consultoras y equipos remotos, con el propósito de que las decisiones de la gerencia y los procesos automatizados se sustenten en evidencia confiable. Demuestra la competencia con un modelo analítico o de inteligencia artificial en producción, acompañado de su modelo de datos documentado, su informe de evaluación y su tablero de decisión en uso por la gerencia.",
   "caps": [
    {
     "d": "Capacidad de ingerir, integrar y modelar los datos de la organización, asegurando su calidad, su linaje, su seguridad y su gobierno mediante pipelines de extracción, transformación y carga sobre fuentes heterogéneas. Se adapta a organizaciones con datos dispersos, sistemas heredados y distintos niveles de madurez en su gestión. Moviliza bases de datos, modelado dimensional, arquitectura de datos, rigor en la validación, ética en el tratamiento de la información y responsabilidad sobre su protección."
    },
    {
     "d": "Capacidad de formular un problema de negocio como problema analítico y construir modelos estadísticos, de aprendizaje automático o de inteligencia artificial generativa, entrenándolos y ajustándolos con datos reales de la organización. Se adapta a distintos dominios de negocio y a la disponibilidad variable de datos y de capacidad de cómputo. Moviliza matemática, estadística, algoritmos de aprendizaje, programación científica, curiosidad para explorar alternativas y pensamiento crítico frente a los resultados obtenidos."
    },
    {
     "d": "Capacidad de evaluar el desempeño, la robustez, el sesgo y el impacto ético de un modelo con métricas y pruebas adecuadas al problema, antes y después de implantarlo en producción. Se ejerce en contextos regulados, donde una decisión automatizada puede afectar derechos de las personas y debe poder explicarse. Moviliza estadística inferencial, diseño experimental, ética algorítmica, honestidad intelectual para reconocer limitaciones y responsabilidad por las consecuencias de la decisión."
    },
    {
     "d": "Capacidad de poner el modelo en producción como servicio o proceso automatizado, con prácticas de MLOps, versionado, monitoreo de deriva y reentrenamiento, integrándolo con los sistemas que la organización ya utiliza. Se adapta a arquitecturas en la nube o locales y a equipos con distinta madurez operativa. Moviliza ingeniería de software, contenedores y pipelines, automatización, disciplina operativa y compromiso con la continuidad del servicio que depende del modelo."
    },
    {
     "d": "Capacidad de construir tableros de indicadores, visualizaciones y narrativas que traduzcan los resultados analíticos en decisiones de gerencia, adaptando el mensaje a públicos no técnicos y a distintos niveles de la organización. Se ejerce ante directivos que deben decidir con tiempo limitado e información incompleta. Moviliza diseño de visualizaciones, definición de indicadores, análisis descriptivo, claridad expositiva, empatía con quien decide y transparencia sobre las limitaciones del análisis presentado."
    }
   ],
   "nota": "Reescribí la definición con registro académico, en tercera persona y con oraciones enlazadas, y ahora nombra la evidencia: modelo en producción, informe y tablero. Amplié cada capacidad con contexto y saberes movilizados, sin alterar la estructura ni el número de capacidades."
  },
  "Ciberseguridad": {
   "def": "Gestiona la seguridad de la información y de los sistemas de una organización a lo largo del ciclo de evaluar el riesgo, proteger, detectar, responder y recuperar, aplicando análisis de riesgos, pruebas de penetración, controles técnicos y de identidad, monitoreo, respuesta a incidentes, análisis forense y continuidad. Ejerce esta labor conforme a marcos y normas de seguridad y de protección de datos personales, en banca, fintech, telecomunicaciones, Estado y servicios gestionados, con el propósito de proteger la información, sostener la operación y garantizar el cumplimiento ante reguladores y autoridad. Demuestra la competencia con un informe de riesgos y su plan de tratamiento, un plan de respuesta a incidentes aprobado por la organización, el registro de incidentes gestionados y los reportes de cumplimiento presentados a la autoridad.",
   "caps": [
    {
     "d": "Capacidad de identificar los activos y tratamientos de información, analizar amenazas, vulnerabilidades y riesgos mediante metodologías de riesgo, escaneos y pruebas de penetración, y priorizar su tratamiento según impacto y probabilidad. Se adapta a organizaciones de distinto tamaño y sector, con diferentes exigencias regulatorias. Moviliza marcos de gestión de riesgos, hacking ético, normativa aplicable, pensamiento adversarial, objetividad en la valoración y confidencialidad sobre lo que descubre."
    },
    {
     "d": "Capacidad de diseñar e implantar políticas y controles técnicos, de identidad y organizacionales, incluida la concientización del personal, que reduzcan el riesgo a un nivel aceptable para la organización. Se adapta al presupuesto disponible y a la regulación aplicable en cada sector, priorizando los controles de mayor efecto. Moviliza arquitectura de seguridad, gestión de identidades y accesos, criptografía, normativa, rigor en la implantación y responsabilidad ante la organización que confía en esos controles."
    },
    {
     "d": "Capacidad de monitorear la infraestructura y los sistemas desde un centro de operaciones de seguridad, correlacionar eventos y detectar incidentes y brechas de datos de forma temprana, antes de que escalen. Se ejerce en operación continua, con alto volumen de alertas y presión por reducir el tiempo de detección. Moviliza herramientas de monitoreo, inteligencia de amenazas, análisis de registros, vigilancia sostenida y capacidad de discriminar las señales relevantes del ruido."
    },
    {
     "d": "Capacidad de contener, erradicar y analizar forensemente un incidente de seguridad o una brecha de datos, coordinar la comunicación interna y notificar a los afectados y a la autoridad dentro de los plazos legales. Se ejerce bajo presión, con información incompleta y con la operación afectada. Moviliza respuesta a incidentes, forense digital, normativa de notificación, serenidad para decidir en crisis, ética en el manejo de la evidencia y trabajo coordinado con otras áreas."
    },
    {
     "d": "Capacidad de restaurar la operación tras un incidente, mantener y probar periódicamente los planes de continuidad, y sostener el cumplimiento del programa de seguridad y de protección de datos personales mediante auditorías y reportes al regulador. Se ejerce en organizaciones supervisadas, donde el incumplimiento acarrea sanciones. Moviliza gestión de la continuidad, normativa, auditoría, mejora continua a partir de las lecciones del incidente, responsabilidad y transparencia frente a la dirección y la autoridad."
    }
   ],
   "nota": "Reescribí la definición en tercera persona, con registro académico y sin rayas, enlazando el ciclo, el contexto y el propósito, y nombrando la evidencia. Amplié cada capacidad con su contexto y sus saberes, sin modificar la estructura ni las cinco capacidades."
  },
  "Gobierno y gestión de TI": {
   "def": "Dirige la tecnología de una organización desde la estrategia hasta el servicio, alineando la hoja de ruta tecnológica con la estrategia del negocio, planificando y dirigiendo proyectos con equipos y proveedores, operando los servicios bajo acuerdos de nivel y evaluando los controles y riesgos de TI ante la dirección y el comité de auditoría. Ejerce esta labor con marcos de gestión de proyectos, de servicios y de gobierno de TI, en empresas, Estado y consultoras, para que la inversión tecnológica genere valor, cumpla sus compromisos y se gobierne con control. Demuestra la competencia con un expediente de gestión de TI que reúne el proyecto entregado con su acta de cierre, el catálogo de servicios bajo acuerdos de nivel, la hoja de ruta aprobada y el informe de evaluación de controles.",
   "caps": [
    {
     "d": "Capacidad de diagnosticar la madurez digital de la organización, alinear la tecnología con su estrategia, diseñar la arquitectura objetivo y priorizar el portafolio en una hoja de ruta con medición de valor. Se ejerce en organizaciones en transformación, donde conviven sistemas heredados, presiones de cambio y recursos limitados. Moviliza arquitectura empresarial, gestión del cambio, análisis financiero de inversiones, visión sistémica y comunicación efectiva con la alta dirección para sustentar las prioridades."
    },
    {
     "d": "Capacidad de definir el alcance, el cronograma, los recursos, los riesgos y los proveedores de un proyecto tecnológico, estimando con realismo y formalizando los acuerdos necesarios para su ejecución. Se adapta a enfoques predictivos o ágiles según el contexto, la cultura y la incertidumbre de cada organización. Moviliza marcos de gestión de proyectos, técnicas de estimación, contratación y negociación con proveedores, realismo en los compromisos, orden y respeto por lo pactado."
    },
    {
     "d": "Capacidad de dirigir equipos y proveedores, gestionar los cambios de alcance, controlar el avance, el costo y la calidad, y entregar el proyecto con la aceptación formal del cliente. Se ejerce en entornos de incertidumbre, con conflictos de prioridad y dependencias externas que exigen decidir con información parcial. Moviliza liderazgo, gestión de equipos y de conflictos, control de proyectos, reporte oportuno a la dirección, responsabilidad por los resultados y orientación al logro."
    },
    {
     "d": "Capacidad de operar el catálogo de servicios tecnológicos bajo acuerdos de nivel, gestionando incidentes, cambios, problemas y mejora continua con marcos de gestión de servicios. Se ejerce en organizaciones que dependen de la tecnología para operar y donde cada interrupción tiene un costo para el negocio y para el usuario. Moviliza ITIL, medición y reporte de servicios, atención al usuario, disciplina operativa y orientación al servicio como valor central de la función tecnológica."
    },
    {
     "d": "Capacidad de planificar y ejecutar auditorías de sistemas, evaluar los controles y riesgos de TI frente a marcos de gobierno y cumplimiento, reportar los hallazgos al comité de auditoría y hacer seguimiento a su remediación. Se ejerce con independencia respecto de las áreas auditadas, en organizaciones sujetas a supervisión interna o externa. Moviliza COBIT, técnicas de auditoría, normativa, objetividad, integridad, rigor probatorio y comunicación clara de los hallazgos a la dirección."
    }
   ],
   "nota": "Reescribí la definición en tercera persona y registro académico, enlazando estrategia, proyecto, servicio y auditoría en oraciones fluidas, y nombrando el expediente como evidencia. Amplié cada capacidad con contexto y saberes, sin cambiar la estructura ni el número de capacidades."
  }
 },
 "planFuera": [],
 "planMapa": {
  "Ingeniería de software": 0,
  "Plataforma e infraestructura": 1,
  "Datos e inteligencia artificial": 2,
  "Ciberseguridad": -1,
  "Gobierno y gestión de TI": -1
 },
 "integrNombre": {
  "Ciberseguridad y gestión de riesgos digitales": "Ciberseguridad y protección de datos",
  "Gestión de proyectos y servicios de TI": "Gobierno, proyectos y auditoría de TI",
  "Ciencia de datos e inteligencia artificial": "Ciencia de datos, inteligencia artificial e inteligencia de negocios",
  "Infraestructura en la nube y DevOps": "Infraestructura en la nube, DevOps y redes",
  "Desarrollo de software e ingeniería de aplicaciones": "Desarrollo de software y análisis de sistemas"
 }
};
