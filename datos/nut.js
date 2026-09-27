/* Datos · Escuela Profesional de Nutrición Humana (NUT) · método v6.3
   Cartera del paso 1.1 (momento 1) volcada desde el barrido real del 23-09-2026: ver datos/cartera-NUT.csv y datos/evidencias/NUT-*.md.
   Los conteos y cifras de los sustentos son datos verificables; las puntuaciones 1–4 son juicio del modelo bajo reglas declaradas.
   La capacidad instalada (v) es declaración de la Escuela y se conserva de la versión anterior para las especialidades que ya existían.
   Momento 2 (panel de expertos, ronda 1 del 23-09-2026) volcado desde datos/acta-NUT.json: ver datos/evidencias/NUT-5-acta-panel-r1.md.
   Del momento 3 en adelante (competencias, matriz, objetivos, propuesta de valor, estudio) los datos siguen siendo los preparados hasta que se ejecuten esos momentos.
   Generado por herramientas/cartera-a-datos.js */
window.DATOS=window.DATOS||{};
DATOS.NUT={
 "meta": {
  "cod": "NUT",
  "nombre": "Nutrición Humana",
  "facultad": "Ciencias de la Salud",
  "plan": "Plan 2026",
  "area": "Nutrición y Dietética",
  "campo": "la nutrición",
  "directora": "Dra. María Miranda",
  "icono": "🥗",
  "color": "#0f766e",
  "lema": "Del hospital al territorio: decidir bien cuando alguien depende de esa decisión.",
  "barrido": "Barrido a plan cerrado del 23-09-2026 · 53 búsquedas · 46 lecturas · evidencias en datos/evidencias/NUT-*.md",
  "capacidad": "Momento 4 · barrido de diferenciación y habilitación del 24-09-2026 (datos/capacidad/NUT-dif.json, -hab.json; evidencias NUT-6-*.md) · declaración de la Dirección en borrador (-decl.json), pendiente de firma",
  "competencias": "Paso 1.2 · momento 1 del 24-09-2026 · 3 competencias derivadas a ciegas del plan (datos/competencias/NUT-derivadas.json; evidencias NUT-7-competencias-derivadas.md)",
  "lineaBase": "Línea base literal entregada por la Escuela el 24-09-2026: 3 competencias de especialidad",
  "objetivos": "Paso 1.4 del 24-09-2026 · 4 objetivos (evidencias NUT-10-objetivos.md)"
 },
 "esp": [
  {
   "n": "Nutrición clínica hospitalaria",
   "nat": "atención individual",
   "o": "Establecida",
   "fn": 12,
   "fnx": "Tamizaje · valoración · diagnóstico · prescripción dietoterápica · soporte enteral · monitoreo · consejería al alta · interconsulta · registro en historia · auditoría · docencia · investigación",
   "pr": "Valorar → diagnosticar → tratar → seguir",
   "ev": "Plan de atención nutricional individualizado y su registro en historia clínica",
   "d": {
    "vol": 4,
    "amp": 4,
    "esc": 3,
    "rem": 3,
    "for": 4
   },
   "t": {
    "cre": 3,
    "nor": 3,
    "inv": 3,
    "dem": 4,
    "tec": 2
   },
   "i": {
    "cri": 4,
    "alc": 4
   },
   "sos": 4,
   "v": {
    "doc": 3,
    "cam": 3,
    "inf": 3,
    "dif": 1,
    "hab": 4
   },
   "fd": "Jooble «nutricionista clínica» 9 103 avisos (cota superior de agregador); MINSA, EsSalud, DIRESA y clínicas privadas [E-13][E-1]. Remuneración pública S/ 5 342 (276) y CAS S/ 2 500–5 000 frente a S/ 3 738–4 913 del promedio [E-9][E-1][E-8]. Todos los avisos exigen colegiatura y habilitación [E-9].",
   "ft": "Comorbilidad (obesidad, diabetes o HTA) en 15+ de 39,9 → 41,8 % (ENDES 2025); >80 000 cánceres nuevos/año; 3 M con ERC; 60+ = 14,3 % de la población [P-L1][P-L10][P-L9][P-S]. NTS 103 (RM 665-2013) vigente: UPSS de Nutrición obligatoria en 2.º y 3.er nivel, jefatura y consulta reservadas al nutricionista colegiado [N-3]. Contratos EsSalud por red [P-S]. IA hospitalaria en revisión sin validación local [P-L11].",
   "fi": "Criticidad grave e irreversible; alcance nacional. Se automatiza tamizaje y cálculo, no el juicio clínico ni la responsabilidad de la prescripción [P-L11].",
   "modo": {
    "empleo": "Hospital Tarapoto, plaza 276 «Nutricionista» S/ 5 342: título, colegiatura y habilitación, 3 años de experiencia, especialización en nutrición hospitalaria, pediátrica, gestacional o soporte crítico (90 h) [E-9]; Auna, SANNA, Ricardo Palma convocan [E-13][E-7].",
    "negocio": "Consulta clínica privada presencial o virtual como sector de mayor demanda (La República 2026) [E-2]."
   },
   "cod": "NUT-01",
   "barrido": "23-09-2026",
   "ac": 100,
   "just": {
    "vol": "Jooble «nutricionista clínica» 9 103 avisos, la mayor cota del campo, más plaza 276 Tarapoto y 5 en RSVM Huancayo [E-13][E-9][E-B2]. Alto volumen aunque el agregador incluya auxiliares.",
    "amp": "Convocan MINSA, EsSalud, DIRESA, Auna, SANNA, Ricardo Palma, Maison de Santé y Monteluz [E-7][E-9][E-1]: público y privado en varias regiones, muchos y diversos, no solo varios sectores.",
    "esc": "Dotación de UPSS incumplida y recorte SERUMS alertado por el CNP [E-3][E-B11]; 1 nutricionista por 6 000 hab. [E-5]. Cuesta cubrir, pero ninguna fuente publica vacantes desiertas.",
    "rem": "Plaza 276 Tarapoto S/ 5 342 [E-9] frente al promedio MTPE S/ 3 738–4 913 [E-8][E-2]: sobre el promedio. CAS S/ 2 500–5 000 [E-1] impide «muy sobre».",
    "for": "Todos los avisos exigen título, colegiatura CNP y habilitación vigente [E-9][E-1]; NTS 103 reserva jefatura y consulta al nutricionista colegiado [N-2]. Único nivel con reserva legal (N-tabla 4).",
    "cre": "Comorbilidad 15+ de 39,9 → 41,8 % (ENDES 2025) [P-S]; Jooble 4 988 (06-2025) → 9 103 (09-2026) [E-B8][E-13]. Crece; el salto es señal de agregador, no «crece mucho».",
    "nor": "NTS 103 (RM 665-2013) vigente: UPSS obligatoria en 2.º y 3.er nivel, 1 licenciado por 40 camas [N-2]. Norma vigente sin plazo ni presupuesto nuevo asociado (no 4).",
    "inv": "Contratos EsSalud por red y licitaciones hospitalarias continuas [P-S]; plazas 276 y CAS recurrentes [E-9][E-1]. Inversión sostenida sin monto comprometido publicado (no 4).",
    "dem": ">80 000 cánceres nuevos/año [P-L10], 3 M con ERC [P-L9], 60+ = 14,3 % y comorbilidad 41,8 % [P-S]. Cuatro series epidemiológicas concurrentes: driver estructural, no aislado.",
    "tec": "Revisión Rebagliati (12-2025): IA en tamizaje, historia clínica e ingesta con barreras de datos, privacidad y validación local [P-L11]. En experimentación, no en adopción.",
    "cri": "Error de prescripción en paciente crítico, oncológico o renal produce daño irreversible o muerte [P-L9][P-L10]; NTS 103 lo trata como servicio obligatorio [N-2]. Grave, no solo alta.",
    "alc": "UPSS obligatoria en todo hospital de 2.º y 3.er nivel del país [N-2]; convocatorias en Tarapoto, Huancayo y Lima [E-9][E-B2][E-1]. Nacional.",
    "sos": "Se automatiza tamizaje y cálculo, no el juicio clínico ni la prescripción reservada al colegiado [P-L11][N-2]. Insustituible; el riesgo moderado aplicaría solo a tareas auxiliares."
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
     "P1": "Mayor volumen del campo (9 103 avisos), público y privado en todas las regiones; único puesto con reserva legal y colegiatura exigida en todos los avisos.",
     "P2": "Comorbilidad 41,8 % (dato), 3 M con ERC y >80 000 cánceres/año: la transición epidemiológica hace de la clínica el núcleo del perfil hasta 2031.",
     "P3": "Único campo con reserva legal: NTS 103 asigna jefatura y consulta al colegiado y fija 1 licenciado por 40 camas; Ley 30188 lo ampara. Sin esto no hay perfil defendible.",
     "P4": "Es el puesto que más contrato: valorar, prescribir y registrar en historia clínica desde el primer día; NTS 103 me obliga a dotar la UPSS con colegiados.",
     "P5": "La IA hospitalaria asiste tamizaje y cálculo; el diagnóstico nutricional, la prescripción y su responsabilidad legal siguen en el colegiado. Núcleo no automatizable del perfil.",
     "P6": "UPSS obligatoria en todo hospital de segundo y tercer nivel; Tarapoto y Huancayo convocan con colegiatura. Saturada en oferta, pero ninguna escuela puede omitirla."
    }
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     15,
     16
    ],
    "imp": [
     18,
     19,
     22
    ],
    "via": [
     27,
     28,
     23,
     24
    ]
   },
   "vjust": {
    "dif": "12 de 18 planes formalizan la clínica como mención, bloque o internado terminal; los otros 6 (UNFV, UNIFÉ, ULCB, UNSA, UTP, UCM) la dictan solo como cursos de dietoterapia con internado sin nombre. Saturada.",
    "hab": "NTS 103: la UPSS Nutrición y Dietética y la consulta nutricional están a cargo de nutricionistas titulados y colegiados; jefatura reservada a profesional de Nutrición. La terapia nutricional es privativa (Reglamento CNP art. 3). Especialidad universitaria registrable en el RNE.",
    "norma": "Ley 30188 (08-05-2014) arts. 3-4; NTS 103-MINSA/DGSP-V.01 (RM 665-2013/MINSA, 23-10-2013) núm. 6.1.4 y 6.2.1; Reglamento del Estatuto del CNP (21-11-2018) art. 3",
    "registro": "Título de Segunda Especialidad Profesional en Nutrición Clínica (UNMSM, 4 semestres; U. Wiener, menciones renal y oncológica) inscrito en SUNEDU y en el Registro Nacional de Especialistas del CNP (S/ 200)",
    "quienes": [
     "UNMSM · especialidad de desempeño Nutrición clínica + PPP IX en nutrición clínica y servicios de alimentación (2024)",
     "UPC · bloque Nutrición Clínica 15 cr. / 480 h, ciclo 8 (2026)",
     "USIL · mención Nutrición Clínica (2026)",
     "Científica del Sur · Internado en Nutrición Clínica, ciclo 10 (2025)",
     "Norbert Wiener · bloque curricular Prácticas Clínicas y Profesionales (2024)",
     "UPCH · bloque de ciclo IX Nutrición Clínica (2025)",
     "UCV · Internado Clínico, ciclo X (2025)",
     "UNA Puno · Internado de Nutrición Clínica, ciclo IX (2023)",
     "U. de Chile · Práctica Profesional Clínica, 15 cr. (v15)",
     "Javeriana Cali · Énfasis en Nutrición Clínica (2024)",
     "UBA · Prácticas de Dietoterapia y Administración de Servicios de Alimentación, 5.º año",
     "U. de Antioquia · área clínica (2025)"
    ],
    "doc": "Equipo parcial con línea clínico-hospitalaria inferido de asesorías de tesis 2021–2026 en el repositorio institucional: Mg. Yaquelin Eveling Calizaya Milla (estado nutricional de adultos mayores hospitalizados en UCI por COVID-19, 2025; litiasis vesicular en hospitalizados, 2022), Lic. María Bernarda Collantes Cossio (test MNA en adultos mayores del Hospital San Juan de Dios, 2022), Lic. Charo Natali Huzco Rutti (nutricionistas clínicos del sector público, 2021; grasa corporal y riesgo cardiometabólico, 2024), Mg. Mery Rodríguez Vásquez (servicio de alimentación a pacientes hospitalizados, 2026), Lic. Elisa Romy Rodríguez López (hemodiálisis, 2016; Hospital de Chosica, 2017). Coordinación de prácticas: Lic. Margarita Sánchez (el curso de internado 'tiene un enfoque clínico', 2024). 14 docentes de Enfermería, Nutrición y Psicología certificados como instructores en simulación en salud (2024). Grados académicos y especialidad clínica (segunda especialidad, maestría clínica) no verificables públicamente; posible nivel 4 si la Dirección confirma 4 o más con perfil clínico.",
    "cam": "Convenios docente-asistenciales publicados con nutrición explícita: Hospital José Agurto Tello de Chosica (MINSA; nov. 2023; Nutrición, Psicología, Enfermería y Medicina), Hospital de Emergencias de Ate Vitarte (renovación de convenio, ago. 2022; campo clínico para Medicina, Enfermería, Psicología y Nutrición). Convenio marco docente-asistencial MINSA–Gobierno Regional de San Martín con UPeU Tarapoto (sep. 2021, carreras de salud). EsSalud Red Asistencial Juliaca: convenio de prácticas de pregrado (2015) y alianza 'Prevenir EsSalud' (ago. 2025). La coordinadora de prácticas declara 'convenios con el Ministerio de Salud y Seguro Social' (oct. 2024). Vigencia y fecha de término de cada convenio no publicadas: nivel 4 solo si la Dirección acredita vigencia.",
    "inf": "Centro de Simulación Clínica UPeU Lima (inaugurado 22-11-2019; 10 estaciones de simulación y 3 unidades de control; beneficia a Enfermería, Nutrición Humana, Psicología y Medicina). Centro de Simulación Clínica UPeU Tarapoto (ago. 2026; 3 unidades de hospitalización, 7 unidades de control, 6 espacios de debriefing). Laboratorio de Técnicas Dietéticas de la EP de Nutrición Humana (Lima, 2019). No se halló evidencia pública de laboratorio de antropometría o composición corporal (bioimpedancia) ni de software de soporte nutricional clínico: nivel 4 por confirmar."
   },
   "vdecl_estado": "con evidencia"
  },
  {
   "n": "Gestión de servicios de alimentación e inocuidad",
   "nat": "gestión de servicios",
   "o": "Establecida",
   "fn": 10,
   "fnx": "Planificación de menús · estandarización · costeo · compras · HACCP · puntos críticos · supervisión · auditoría sanitaria · no conformidades · indicadores",
   "pr": "Planificar → estandarizar → asegurar inocuidad → auditar",
   "ev": "Plan HACCP y expediente de auditoría del servicio",
   "d": {
    "vol": 4,
    "amp": 4,
    "esc": 3,
    "rem": 2,
    "for": 3
   },
   "t": {
    "cre": 3,
    "nor": 3,
    "inv": 4,
    "dem": 3,
    "tec": 3
   },
   "i": {
    "cri": 4,
    "alc": 4
   },
   "sos": 4,
   "v": {
    "doc": 3,
    "cam": 3,
    "inf": 3,
    "dif": 2,
    "hab": 3
   },
   "fd": "Jooble «campamento minero» 4 102 (cota); 3 de 5 avisos destacados de LinkedIn son Newrest/Sodexo; regímenes 14x7 y 21x7 reiterados en Pasco, Pisco, Chincha, Apurímac [E-12][E-7]. Remuneración no publicada; auxiliares S/ 1 200 [E-7].",
   "ft": "Programa de Alimentación Escolar 2026 con S/ 2 636,6 M, 4,2 M escolares y fichas técnicas obligatorias tras ~400 intoxicados en 2024 [P-L4]; licitaciones hospitalarias de EsSalud continuas [P-S]. Ley 30021 y DS 017-2017-SA vigentes; NTS 142 y HACCP obligatorio sin reserva profesional (nivel 2) [N-4]. Perú Compras y trazabilidad maduros [P].",
   "fi": "4,2 M escolares y población hospitalizada; fallas = intoxicaciones masivas. Se automatiza planificación y costeo, no la auditoría in situ ni la responsabilidad sanitaria [P].",
   "modo": {
    "empleo": "Newrest «Nutricionista colegiado campamento minero 14x7» (Pasco); Sodexo «Nutricionista Campamento Chincha 14x7»; NATCLAR «Licenciada en Nutrición habilitado indispensable» [E-7][E-12]; Sodexo exige colegiatura, habilidad, HACCP y carné de sanidad [E-B15].",
    "negocio": "Concesionarias y consultoría HACCP; negocio escalable (Sodexo 173 avisos, Newrest 13 años en Perú) [E-B15][E-B5]."
   },
   "cod": "NUT-02",
   "barrido": "23-09-2026",
   "ac": 100,
   "just": {
    "vol": "Jooble «campamento minero» 4 102 avisos (cota) [E-12]; Sodexo 173 avisos en Lima [E-B15]; 3 de 5 destacados de LinkedIn son Newrest/Sodexo [E-7]. Alto volumen, no medio.",
    "amp": "Sodexo, Newrest, Panaservice y NATCLAR en minería, clínicas y hospitales; regímenes 14x7 y 21x7 en Pasco, Pisco, Chincha, Apurímac [E-7][E-12]. Muchos empleadores en varias regiones.",
    "esc": "Avisos reiterados de las mismas concesionarias en regímenes de campamento [E-7][E-12] indican rotación y dificultad de cobertura; ninguna fuente publica vacantes desiertas (no 4).",
    "rem": "Remuneración no publicada en los avisos [E-7]; la referencia es el promedio de carrera S/ 3 738–4 913 [E-8]. Auxiliares S/ 1 200 [E-7] no aplican al titulado. Al promedio, sin evidencia de sobre.",
    "for": "Sodexo y NATCLAR exigen colegiatura, habilidad, HACCP y carné de sanidad [E-B15][E-12], pero NTS 142 y HACCP no reservan la función (nivel 2 en N-tabla) [N-4]. Suele exigir título, sin reserva legal.",
    "cre": "PAE 2026 con 4,2 M de escolares y licitaciones hospitalarias continuas [P-L4][P-S]; Newrest 13 años en Perú [E-B5]. Crece con el gasto público, sin serie que sustente «crece mucho».",
    "nor": "Ley 30021, DS 017-2017-SA, NTS 142 y HACCP obligatorio (RM 449-2006) vigentes [N-4]; NTS 103 pone la central de producción a cargo de licenciado [N-tabla]. Vigente, sin plazo con presupuesto propio.",
    "inv": "PAE 2026 con S/ 2 636,6 M presupuestados para 4,2 M de escolares y 67 000 II. EE. [P-L4][N-4]. Monto comprometido, no solo sostenido.",
    "dem": "Driver regulatorio-reputacional claro: ~400 intoxicados en 2024 obligaron a fichas técnicas [P-L4]; población hospitalizada y campamentos [E-12]. No estructural como la epidemiología clínica.",
    "tec": "Perú Compras y trazabilidad maduros para fichas técnicas [P-L4]; planificación y costeo automatizables [P]. Herramientas en adopción, no aún estables en todo el servicio.",
    "cri": "Falla del servicio = intoxicación masiva: ~400 escolares en 2024 [P-L4]; alimenta pacientes y 4,2 M de raciones diarias [N-4]. Grave, no moderada.",
    "alc": "PAE en 67 000 II. EE. del país [N-4]; campamentos en Pasco, Pisco, Chincha, Apurímac [E-7][E-12]; hospitales de EsSalud [P-S]. Nacional.",
    "sos": "Se automatiza planificación y costeo, no la auditoría in situ ni la responsabilidad sanitaria del HACCP [P][E-B15]. Insustituible en su núcleo."
   },
   "panel": {
    "p": [
     4,
     4,
     3,
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
     "P1": "Segundo bloque con puesto propio: Sodexo, Newrest, NATCLAR en regímenes 14x7 y 21x7; PAE con S/ 2 636,6 M. Exigen colegiatura y HACCP.",
     "P2": "PAE 2026 con S/ 2 636,6 M y fichas técnicas obligatorias (dato); concesionarias mineras en expansión (proyección). Inocuidad y HACCP serán exigencia transversal del sector.",
     "P3": "NTS 103 pone la central de producción hospitalaria a cargo de licenciado; NTS 142, DS 007-98-SA y HACCP son obligatorios aunque compartidos con ingeniería. Dominio exigible en el perfil.",
     "P4": "Mi concesionaria vive de esto: menú, estandarización, HACCP y auditoría en regímenes 14x7. Contrato por decenas y el egresado llega sin manejar costos ni auditoría.",
     "P5": "Menú, costeo y trazabilidad ya se digitalizan; la auditoría in situ y la responsabilidad sanitaria del HACCP exigen presencia y firma profesional.",
     "P6": "Concesionarias en Pasco, Apurímac y Chincha, PAE en 67 000 colegios; Chile y Antioquia la hacen práctica terminal, solo cinco peruanas la formalizan."
    }
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     17,
     15
    ],
    "imp": [
     22
    ],
    "via": [
     27,
     29,
     25,
     23
    ]
   },
   "vjust": {
    "dif": "5 de 18 la formalizan como especialidad o práctica terminal. Científica del Sur tiene bloque Tecnología y Seguridad Alimentaria (18 cr.) y perfil de gerencia alimentaria, parcial; otras 12 dictan solo el curso de gestión de servicios.",
    "hab": "Reglamento CNP art. 4 obliga a todo servicio de alimentación colectiva a contar con nutricionista colegiado; NTS 103 pone la central de producción a cargo de licenciados. HACCP exige 'profesional responsable' sin profesión; DIGESA valida el plan, no al profesional.",
    "norma": "Reglamento del Estatuto del CNP (21-11-2018) art. 4; NTS 103 (RM 665-2013/MINSA) núm. 6.1.7 y 6.5; DS 007-98-SA (25-09-1998) arts. 58-61; RM 449-2006/MINSA (17-05-2006) arts. 7, 17 y 34",
    "registro": "",
    "quienes": [
     "UNMSM · especialidad de desempeño Servicios de alimentación colectiva + PPP IX (2024)",
     "USIL · práctica preprofesional por área servicios de alimentación (2026)",
     "U. de Chile · Práctica Profesional en Gestión de Servicios de Alimentación Colectiva, 15 cr. (v15)",
     "UBA · Prácticas de Dietoterapia y Administración de Servicios de Alimentación, 5.º año",
     "U. de Antioquia · área servicios de alimentación (2025)"
    ],
    "doc": "Estimado (equipo parcial). Asesorías de tesis con línea de servicios de alimentación e inocuidad: Lic. Silvia Elida Moori Apolinario (higiene y manipulación de alimentos en restaurantes, 2017; etiquetado nutricional, 2018), Mg. Mery Rodríguez Vásquez (satisfacción del servicio de alimentación a pacientes hospitalizados en clínica privada, 2026), Eduardo Alberto Meza Mantari (microorganismos en alimentos del comedor universitario, 2020), Ana Evangelista Galarreta (programa 'Servalim feliz' en el servicio de alimentación universitario, 2015), Jacksaint Saintila (higiene en manipuladores de quioscos escolares, 2017; higiene en hogares, 2021). La mayor parte de la evidencia es anterior a 2021 y la vinculación vigente de estos docentes no es verificable públicamente; no se halló docente con certificación HACCP o auditoría de inocuidad publicada.",
    "cam": "Campo propio institucional: Comedor Universitario, Cafetín y Market Unión del campus Lima (servicio abierto a la comunidad unionista y público); comedores en campus Juliaca y Tarapoto; Centro Universitario de Producción de Bienes 'Unión' (planta de alimentos propia). Prácticas de 4.º año en 'restaurantes' (2023). Servicios de nutrición hospitalarios accesibles vía convenios con Hospital de Chosica y Hospital de Ate Vitarte. No se halló convenio publicado con concesionarias de alimentación ni con servicios de alimentación de programas escolares para la EP de Nutrición (el acta con Qali Warma de 2021 en Juliaca no incluye a Nutrición).",
    "inf": "Laboratorio de Técnicas Dietéticas de la EP de Nutrición Humana (Lima, 2019). Comedor Universitario como escenario real de producción. Planta del Centro de Producción de Bienes 'Unión' articulada con la Facultad de Ingeniería y Arquitectura (2022). Tesis de 2020 sobre coliformes y S. aureus en el comedor evidencia acceso a análisis microbiológico de alimentos, sin que se identifique públicamente un laboratorio de microbiología/bromatología asignado a Nutrición. Software de gestión de servicios de alimentación (costeo, planificación de menús) no documentado."
   },
   "vdecl_estado": "estimado · por confirmar por la Dirección"
  },
  {
   "n": "Nutrición comunitaria y salud pública",
   "nat": "salud poblacional",
   "o": "Establecida",
   "fn": 9,
   "fnx": "Diagnóstico poblacional · vigilancia · diseño de intervención · consejería · capacitación de agentes · articulación · monitoreo · evaluación de impacto · programas presupuestales",
   "pr": "Diagnosticar población → planificar → intervenir → evaluar",
   "ev": "Plan de intervención poblacional con línea de base e informe de impacto",
   "d": {
    "vol": 3,
    "amp": 3,
    "esc": 3,
    "rem": 2,
    "for": 4
   },
   "t": {
    "cre": 2,
    "nor": 3,
    "inv": 3,
    "dem": 4,
    "tec": 2
   },
   "i": {
    "cri": 4,
    "alc": 4
   },
   "sos": 4,
   "v": {
    "doc": 4,
    "cam": 3,
    "inf": 2,
    "dif": 1,
    "hab": 4
   },
   "fd": "74 vacantes públicas en el agregador; CAS S/ 2 500–5 000 [E-1]. Señal de escasez más fuerte del campo: el CNP alerta el recorte de plazas SERUMS 2026 en el primer nivel «donde la demanda es mayor»; 1 nutricionista por 6 000 hab. [E-3][E-5].",
   "ft": "Desnutrición crónica estancada (11,7 → 12,1 %), anemia 6–35 m 43,4 %, rural 23 % vs urbana 8,2 %; suplementación y CRED al alza (I-2025) [P-L1][P-L15]. NTS 213 (RM 251-2024) y PPoR 1001; ejecución 2025–2026 no obtenida [N-3][N-12]. Plazas SERUMS a la baja [E-3].",
   "fi": "~2 M de niños <5 y gestantes; 15 años de estancamiento en anemia con daño cognitivo irreversible. Visita domiciliaria y consejería intercultural no se automatizan [P].",
   "modo": {
    "empleo": "Convocatorias públicas: «Título Profesional en Nutrición… colegiado y habilitado», experiencia en programas alimentarios o salud pública; DIRESA, redes, municipalidades, Cuna Más (Lima 9+, Ica 3) [E-1]; RSVM Huancayo 5 nutricionistas [E-B2].",
    "negocio": "Dependiente del Estado; no sostiene negocio propio [E-1]."
   },
   "cod": "NUT-03",
   "barrido": "23-09-2026",
   "ac": 100,
   "just": {
    "vol": "74 vacantes públicas en el agregador [E-1]; Cuna Más Lima 9+, Ica 3; RSVM Huancayo 5 [E-1][E-B2]. Volumen medio: decenas, no los miles de clínica.",
    "amp": "DIRESA, redes, municipalidades y Cuna Más [E-1]: varios empleadores, todos del Estado; la dependencia estatal impide «muchos y diversos» (no 4).",
    "esc": "Señal de escasez más fuerte del campo: CNP alerta recorte SERUMS 2026 en primer nivel «donde la demanda es mayor» [E-3]; 1 por 6 000 hab. [E-5]. Sin vacantes desiertas publicadas.",
    "rem": "CAS S/ 2 500–5 000 [E-1], en el rango del promedio MTPE S/ 3 738–4 913 [E-8]. Al promedio; no bajo porque el techo CAS alcanza el promedio senior.",
    "for": "Convocatorias exigen «Título Profesional en Nutrición… colegiado y habilitado» y SERUMS [E-1][N-7]; NTS 213 y PP 0001 encomiendan la consejería al profesional [N-3]. Título y colegiatura.",
    "cre": "Plazas SERUMS a la baja [E-3]; Wasi Mikuna de 1 convocatoria a 0 [E-4][E-10]; indicadores estancados sin traducirse en contratación [P-L1]. Estancado; no decrece porque Cuna Más y DIRESA mantienen vacantes.",
    "nor": "NTS 213 (RM 251-2024) y PP 0001 vigentes [N-3]; presupuesto 2026 del PP 0001 no hallado [N-3]. Vigente, sin presupuesto verificado (no 4).",
    "inv": "PP 0001 migrado al PPoR 1001; suplementación 33,8 → 38,5 % y CRED 28,9 → 32,6 % [P-L15]. Sostenida; ejecución 2025–2026 no obtenida impide «comprometida».",
    "dem": "DCI 11,7 → 12,1 %, anemia 43,4 %, rural 23 % vs urbana 8,2 % [P-L1][P-L15]. Metas incumplidas durante 15 años: driver estructural, no solo claro.",
    "tec": "Sin herramienta digital validada para vigilancia comunitaria en el barrido; la revisión peruana de IA se limita al ámbito hospitalario [P-L11]. En experimentación, no en adopción.",
    "cri": "Anemia con daño cognitivo irreversible en ~2 M de niños <5 y gestantes [P-L1][P]. Grave e irreversible.",
    "alc": "PP 0001 y NTS 213 de aplicación nacional [N-3]; Puno 75,4 % de anemia y brecha rural [P-L1]. Nacional.",
    "sos": "Visita domiciliaria y consejería intercultural no se automatizan [P]; la brecha rural 23 % vs 8,2 % [P-L1] exige presencia. Insustituible."
   },
   "panel": {
    "p": [
     3,
     4,
     4,
     3,
     4,
     4
    ],
    "med": 4,
    "icvi": 1,
    "cvr": 1,
    "ric": 1,
    "ac": 100,
    "ver": "Esencial",
    "com": {
     "P1": "Tercer bloque contratante: DIRESA, redes, Cuna Más con CAS; señal de escasez más fuerte (recorte SERUMS). Dependiente del Estado, sin negocio propio.",
     "P2": "Anemia 43,4 % y DCI 12,1 % estancadas quince años (dato); PPoR 1001 seguirá financiando el primer nivel. Sin esta especialidad el perfil pierde su misión de salud pública.",
     "P3": "NTS 213 y PP 0001 encomiendan consejería, tamizaje y seguimiento; el SERUMS obligatorio se cumple en primer nivel. Ley 30188 nombra la salud pública como campo del ejercicio.",
     "P4": "No lo contrato yo, pero el Estado sí y es el mayor empleador del campo; todo egresado debe saber intervenir sobre una población, no solo sobre un paciente.",
     "P5": "Sin herramienta digital validada para vigilancia comunitaria; la visita domiciliaria y la consejería intercultural en zona rural no se automatizan en cinco años.",
     "P6": "Es lo que contrata el territorio: DIRESA, redes y Cuna Más en Puno, Ica, Huancayo; anemia rural 23 %. Nueve de trece universidades la formalizan."
    }
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     15,
     16,
     17
    ],
    "imp": [
     22
    ],
    "via": [
     27,
     30,
     24,
     23
    ]
   },
   "vjust": {
    "dif": "11 de 18 la formalizan como mención, bloque, área o internado; UNFV, UNIFÉ, ULCB, UNSA, UTP, Javeriana Cali y UCM la dictan como cursos (Nutrición comunitaria, Salud pública). Saturada junto con la clínica.",
    "hab": "Ley 30188 faculta al nutricionista a formular políticas, planes y programas de alimentación y nutrición; Ley 23536 lo integra a la carrera de profesionales de la salud; NTS 213 le asigna la atención nutricional. Segunda especialidad en Nutrición Pública registrable.",
    "norma": "Ley 30188 (08-05-2014) art. 5.a; Ley 23536 (1982) art. 6.i y 1.ª Disp. Complementaria; NTS 213-MINSA/DGIESP-2024 (RM 251-2024/MINSA, 08-04-2024) núm. 5 y 6; Reglamento del Estatuto del CNP art. 3",
    "registro": "Título de Segunda Especialidad Profesional en Nutrición con mención en Nutrición Pública (UNMSM, 4 semestres, 72 créditos) inscrito en SUNEDU y registrable en el RNE del CNP",
    "quienes": [
     "UNMSM · especialidades Nutrición pública y Nutrición comunitaria + PPP X en nutrición pública (2024)",
     "UPC · Práctica Nutricional Pública + bloque Nutrición en Comunidad 10 cr., ciclo 10 (2026)",
     "USIL · mención Nutrición Pública (2026)",
     "Científica del Sur · Internado en Nutrición Pública, ciclo 10 (2025)",
     "Norbert Wiener · bloque curricular Gestión y Salud Pública (2024)",
     "UPCH · bloque de ciclo IX Nutrición Pública (2025)",
     "UCV · Internado Comunitario, ciclo IX (2025)",
     "UNA Puno · Internado de Nutrición Comunitaria y Promoción de la Salud, ciclo X (2023)",
     "U. de Chile · Práctica Profesional en Atención Primaria de Salud, 15 cr. (v15)",
     "UBA · Área Nutrición Comunitaria + Prácticas de Nutrición en Salud Pública, 5.º año",
     "U. de Antioquia · área salud pública/comunitaria (2025)"
    ],
    "doc": "Con evidencia (equipo formado por líneas de tesis 2017–2025): Lic. Bertha Chanducas Lozano (programa educativo 'Niños de Hierro', 2019; programa Nutriunión, 2018), Lic. María Bernarda Collantes Cossio (escolares de dos instituciones de Juliaca, 2025; niños menores de 5 años de madres migrantes, 2024), Mg. Yaquelin Eveling Calizaya Milla (programa de educación nutricional y hemoglobina, 2024; loncheras saludables, 2026), Mg. Mery Rodríguez Vásquez (programa 'Adultos mayores activos y saludables', 2019; programa educativo nutricional, 2025), Jacksaint Saintila (estado nutricional de escolares, 2020; investigador Renacyt nivel II en 2021, vigencia hasta 27-05-2024), Mg. María Alina Miranda Flores (directora de la EP). Prácticas de 2.º año en instituciones educativas y de 4.º año en programas de salud comunitaria (2023). Formación formal en salud pública de cada docente no verificable públicamente.",
    "cam": "Con evidencia (convenios parciales): Municipalidad Distrital de Pacllón (Áncash), convenio específico de cooperación institucional (13-02-2023) con internado de Nutrición Humana en el proyecto 'Salud Integral'; convenio marco docente-asistencial MINSA–GORE San Martín (2021); plan de trabajo regional MIDIS–Programa Nacional PAIS en 63 Tambos de Puno con UPeU Juliaca (ago. 2025); acta de trabajo con Qali Warma Juliaca (2021, sin Nutrición explícita); coordinación DIRESA Puno–UPeU Juliaca (sede SERUMS 2026-II). Hospitales de Chosica y Ate Vitarte con convenio (primer nivel y comunidad de Lima Este). Vigencias no publicadas.",
    "inf": "Estimado (mínimo). No se halló evidencia pública de kits antropométricos portátiles, hemoglobinómetros, software de vigilancia nutricional ni unidad móvil asignados a Nutrición. Se cuenta con Centro de Simulación Clínica y Laboratorio de Técnicas Dietéticas (Lima). Las tesis comunitarias con medición antropométrica (2019–2025) implican equipamiento básico no descrito públicamente; la Dirección debe inventariarlo."
   },
   "vdecl_estado": "estimado · por confirmar por la Dirección"
  },
  {
   "n": "Nutrición pediátrica y materna",
   "nat": "atención individual",
   "o": "Establecida",
   "fn": 8,
   "fnx": "Antropometría infantil · lactancia y complementaria · anemia · desnutrición aguda · gestante · consejería familiar · seguimiento del crecimiento · CRED",
   "pr": "Valorar → diagnosticar → tratar → seguir (niño y gestante)",
   "ev": "Plan de atención nutricional individualizado",
   "d": {
    "vol": 3,
    "amp": 3,
    "esc": 3,
    "rem": 2,
    "for": 4
   },
   "t": {
    "cre": 2,
    "nor": 4,
    "inv": 3,
    "dem": 4,
    "tec": 2
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
    "dif": 4,
    "hab": 4
   },
   "fd": "Cuna Más 12+ vacantes; CAS S/ 2 500–5 000; 276 S/ 5 342 [E-1][E-9]. Anemia y desnutrición infantil citadas por el CNP como argumento de brecha [E-3].",
   "ft": "Bajo peso al nacer 7,3 → 8,4 %, prematuridad 21,1 → 22,1 %, lactancia exclusiva 71,4 %; anemia 43,4 % [P-L15][P-L1]. NTS 213 anemia (RM 251-2024, mod. RM 429-2024) con tamizaje y suplementación nominal; PPoR 1001 [N-4][N-12].",
   "fi": "~500 000 nacimientos/año y 2 M <5 años; error en los 1 000 días = daño permanente. Consejería de lactancia y manejo del prematuro no se automatizan [P].",
   "modo": {
    "empleo": "No aparece como puesto separado: Tarapoto admite «especialización pediátrica o gestacional» dentro de la plaza de nutricionista; Cuna Más convoca nutricionistas generales [E-9][E-1].",
    "negocio": "Consulta pediátrica privada; sin cifra [E]."
   },
   "cod": "NUT-04",
   "barrido": "23-09-2026",
   "ac": 100,
   "just": {
    "vol": "Cuna Más 12+ vacantes [E-1] y plaza 276 con «especialización pediátrica o gestacional» [E-9]; no aparece como puesto separado. Volumen medio embebido en el puesto general (no 4).",
    "amp": "Cuna Más, DIRESA y hospitales [E-1][E-9]; consulta pediátrica privada sin cifra [E]. Varios sectores, no muchos empleadores diversos.",
    "esc": "Recorte SERUMS en el primer nivel, donde se atiende al niño y la gestante [E-3]; el CNP cita anemia y desnutrición como argumento de brecha [E-3]. Cuesta cubrir; sin vacantes desiertas.",
    "rem": "CAS S/ 2 500–5 000 [E-1]; S/ 5 342 solo en la plaza hospitalaria 276 [E-9]. Al promedio MTPE S/ 3 738–4 913 [E-8].",
    "for": "Convocatorias exigen título, colegiatura y habilitación [E-1]; NTS 213 encomienda tamizaje y suplementación y NTS 103 reserva la consulta al colegiado [N-3][N-2]. Título y colegiatura.",
    "cre": "Sin puesto separado [E-1]; plazas SERUMS a la baja [E-3]. Estancado: la demanda epidemiológica crece pero la contratación diferenciada no.",
    "nor": "NTS 213 (RM 251-2024, mod. RM 429-2024) con tamizaje y suplementación nominal [N-3] y PP 0001 con productos presupuestales de CRED y hierro [N-3][N-L12]. Norma con producto presupuestal, no solo vigente.",
    "inv": "Suplementación de hierro 33,8 → 38,5 % y CRED 28,9 → 32,6 % [P-L15] muestran ejecución sostenida; presupuesto 2026 no hallado [N-3] impide «comprometida».",
    "dem": "Bajo peso al nacer 7,3 → 8,4 %, prematuridad 21,1 → 22,1 %, anemia 43,4 %, lactancia exclusiva 71,4 % [P-L15][P-L1]; ~500 000 nacimientos/año [P]. Estructural.",
    "tec": "Sin herramienta digital validada para CRED o lactancia en el barrido; IA solo en pilotos hospitalarios [P-L11]. En experimentación.",
    "cri": "Error en los 1 000 días = daño permanente; anemia con daño cognitivo irreversible [P-L1][P]. Grave e irreversible.",
    "alc": "NTS 213 y PP 0001 nacionales [N-3]; 2 M <5 años y brecha rural [P-L1]. Nacional.",
    "sos": "Consejería de lactancia y manejo del prematuro no se automatizan [P]; cuidado presencial de gestante y niño. Insustituible."
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
     "P1": "No hay puesto separado, pero toda plaza de primer nivel y Cuna Más exige manejar anemia, CRED y gestante; Tarapoto la admite como especialización.",
     "P2": "Bajo peso 8,4 % y prematuridad 22,1 % al alza (dato). Esencial por los 1 000 días, pero el mercado la ejerce embebida en comunitaria y clínica, no como puesto.",
     "P3": "NTS 213 (RM 251-2024) fija tamizaje y suplementación nominal en niño, gestante y puérpera; PP 0001 lo presupuesta. Contenido obligatorio, aunque la norma no lo separa de comunitaria.",
     "P4": "En mi hospital pediatría y neonatología exigen esta competencia a diario; no es plaza aparte, la pido como especialización dentro del puesto clínico.",
     "P5": "Consejería de lactancia y manejo del prematuro requieren presencia; el tamizaje nominal de anemia sí se digitaliza. Esencial, pero como segmento de clínica y comunitaria.",
     "P6": "Contenido esencial del primer nivel en regiones con anemia alta, pero ningún pregrado la separa y el empleador la embebe en el puesto comunitario u hospitalario."
    }
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     15,
     16,
     17
    ],
    "imp": [
     18,
     19,
     22
    ],
    "via": [
     31,
     24,
     23
    ]
   },
   "vjust": {
    "dif": "0 de 18 la declaran como mención, línea o internado. 14 la dictan como curso suelto: UNFV, UPC, Científica, UNIFÉ, ULCB, Wiener, UCV, UNA Puno, UNSA, U. de Chile, Javeriana Cali, UBA, UCM (materno infantil, dietoterapia del niño, pediátrica).",
    "hab": "NTS 213 define la atención y la prescripción nutricional de niños, gestantes y puérperas como acto del licenciado en Nutrición (45 min, mensual); NTS 103 fija un licenciado por 15 pacientes pediátricos. Segunda especialidad universitaria registrable.",
    "norma": "NTS 213-MINSA/DGIESP-2024 (RM 251-2024/MINSA, 08-04-2024) núm. 5 y 6; RM 034-2024/MINSA (16-01-2024) Guía de valoración antropométrica 0-11 años; NTS 103 (RM 665-2013/MINSA) consultorio de nutrición pediátrica; Ley 30188 art. 4.b",
    "registro": "Título de Segunda Especialidad Profesional en Nutrición Pediátrica (U. Wiener, 40 créditos; U. Científica del Sur, 12 meses) inscrito en SUNEDU y registrable en el RNE del CNP",
    "quienes": [],
    "doc": "Equipo formado por líneas de tesis 2015–2026: Lic. Bertha Chanducas Lozano (estado nutricional y anemia ferropénica en niños menores de dos años, 2015; 'Niños de Hierro', 2019), Mg. Yaquelin Eveling Calizaya Milla (hierro dietario en alimentación complementaria y hemoglobina, 2022; loncheras saludables, 2026), Mg. Mery Rodríguez Vásquez (micronutrientes en puérperas, 2019; anemia y multimicronutrientes en madres de Cuna Más, 2019), Rodrigo Alfredo Matos Chamorro (alimentación complementaria y anemia, 2019), Mg. María Alina Miranda Flores (alimentación saludable y anemia en gestantes, 2015), Lic. Elisa Romy Rodríguez López (actividad física y hábitos alimentarios en gestantes, 2017), Raquel Chilón Llico (percepción materna del IMC de sus hijos, 2023). La EP declara líneas de nutrición pediátrica y materna en su página oficial. Segunda especialidad o maestría en nutrición pediátrica/materna no verificable públicamente.",
    "cam": "Convenios parciales: Hospital José Agurto Tello de Chosica (2023) y Hospital de Emergencias de Ate Vitarte (2022) con Nutrición explícita; Municipalidad de Pacllón (2023, internado comunitario); convenio marco MINSA–GORE San Martín (2021); EsSalud Juliaca (2015; 2025). Tesis previas en establecimientos de primer nivel y en Cuna Más evidencian acceso a campo materno-infantil. Vigencias no publicadas; no se identificó convenio con instituto especializado materno-perinatal o pediátrico.",
    "inf": "Parcial con evidencia: Centro de Simulación Clínica Lima (2019; Nutrición beneficiaria); Centro de Simulación Clínica Tarapoto (ago. 2026) con 2 consultorios de crecimiento y desarrollo (CRED) para escenarios pediátricos; Laboratorio de Técnicas Dietéticas. Equipos antropométricos pediátricos (infantómetros, balanzas pediátricas) y hemoglobinómetros no descritos públicamente."
   },
   "vdecl_estado": "con evidencia"
  },
  {
   "n": "Nutrición deportiva y del rendimiento",
   "nat": "rendimiento",
   "o": "Establecida",
   "fn": 7,
   "fnx": "Valoración de la condición · requerimientos por fase · periodización · suplementación · hidratación · composición corporal · educación del equipo",
   "pr": "Valorar la condición → planificar la periodización → acompañar",
   "ev": "Plan de periodización nutricional y registro de control de temporada",
   "d": {
    "vol": 3,
    "amp": 3,
    "esc": 2,
    "rem": 2,
    "for": 1
   },
   "t": {
    "cre": 4,
    "nor": 1,
    "inv": 4,
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
   "fd": "Jooble «deportiva» 736 (06-2026) → 1 013 (09-2026, cota); consultoras, universidades y gimnasios; remuneración dispersa S/ 1 320–2 400 en campo, jefaturas S/ 5 000–6 000 [E-11][E-B6][E-2]. Colegiatura no siempre exigida [E-11].",
   "ft": "4 026 gimnasios, >2 M usuarios, penetración 6 %; Smart Fit 91 → 100 locales, utilidad +28 % en 2025; equipamiento +10 %/año [P-L12][P-S]. Ley 28036 sin mención al nutricionista; ISAK sin reconocimiento normativo (nivel 2) [N-5]. Wearables y apps maduras [P].",
   "fi": "2 M usuarios de gimnasio; criticidad media. El segmento masivo (macros, planes genéricos) es sustituible por apps; la élite deportiva no [P].",
   "modo": {
    "empleo": "SER UNO Nutrición «Nutricionista deportivo» (Lima); UPN/Laureate nutricionista para deportistas; aviso de campo con «consultoría nutricional y ISAK 1» S/ 2 400 [E-7][E-B6][E-11]; clubes y federaciones sin aviso.",
    "negocio": "Consultorios y centros fitness: Siéntete Fit enseña «cómo funciona la atención y gestión de un consultorio nutricional privado» [E-6]."
   },
   "cod": "NUT-05",
   "barrido": "23-09-2026",
   "ac": 100,
   "just": {
    "vol": "Jooble «deportiva» 1 013 avisos (cota) [E-11]; SER UNO, UPN/Laureate [E-7][E-B6]. Volumen medio: cientos, con clubes y federaciones sin aviso (no 4).",
    "amp": "Consultoras, universidades y gimnasios [E-11][E-B6][E-6]; clubes y federaciones sin aviso [E-B6]. Varios sectores, sin la diversidad de clínica.",
    "esc": "Entrada baja S/ 1 320–2 400 [E-11] y colegiatura no siempre exigida [E-11] indican cobertura fácil; no «se cubre sola» porque piden ISAK 1 [E-11].",
    "rem": "Campo S/ 1 320–2 400, jefaturas S/ 5 000–6 000 [E-11][E-2]; promedio MTPE S/ 3 738–4 913 [E-8]. Dispersión centrada en el promedio, no bajo.",
    "for": "Colegiatura no siempre exigida [E-11]; Ley 28036 no menciona al nutricionista e ISAK carece de reconocimiento [N-5]. Informal; no «poco formal» porque no hay norma que lo respalde.",
    "cre": "Jooble 736 (06-2026) → 1 013 (09-2026) [E-B6][E-11]; Smart Fit 91 → 100 locales, utilidad +28 % en 2025 [P-S]. Crece mucho en tres meses.",
    "nor": "Ley 28036 y DS 018-2004-PCM no mencionan al nutricionista; ISAK sin reconocimiento [N-5]. Sin norma; no hay siquiera anuncio.",
    "inv": "4 026 gimnasios, >2 M usuarios [P-L12]; Smart Fit 91 → 100 locales, utilidad +28 %; equipamiento +10 %/año [P-S]. Inversión privada comprometida en expansión.",
    "dem": "Penetración de gimnasios 6 % [P-L12] y obesidad 24,6 % [P-S]: driver claro de mercado. No estructural porque depende del consumo privado.",
    "tec": "Wearables y apps maduras [P]; apps con foto-cálculo [P-S]. Adoptada y estable, no solo en adopción.",
    "cri": "Población activa sana, criticidad media [P]; errores de periodización no producen daño irreversible. Moderada, no mínima por la suplementación.",
    "alc": "2 M de usuarios de gimnasio, 4 026 locales concentrados en ciudades [P-L12]. Regional, no nacional.",
    "sos": "El segmento masivo (macros, planes genéricos) es sustituible por apps; la élite deportiva no [P]. Riesgo alto, no absorción total."
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
     "P1": "Mercado en crecimiento (736 → 1 013 avisos) pero entrada baja S/ 1 320–2 400, freelance y colegiatura no siempre exigida. Diferenciador, no núcleo.",
     "P2": "Gimnasios 4 026 y Smart Fit +28 % (dato) sostienen demanda privada, pero el segmento masivo lo absorben apps antes de 2030 (proyección). Útil, no esencial.",
     "P3": "Ley 28036 y DS 018-2004-PCM no mencionan al nutricionista; ISAK carece de reconocimiento. Sin norma que lo exija, no sustenta un estándar de perfil ante SINEACE.",
     "P4": "Nunca he contratado un nutricionista deportivo ni en el hospital ni en la concesionaria; es mercado de gimnasios y consultoría, no de mis servicios.",
     "P5": "Wearables y apps maduras cubren el segmento masivo de macros y planes; solo la élite deportiva conserva juicio no automatizable, nicho pequeño.",
     "P6": "Gimnasios concentrados en ciudades grandes; en Juliaca o Tarapoto el mercado es marginal. Solo UNMSM y USIL la formalizan: diferencia en Lima, no en regiones."
    }
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     20,
     21
    ],
    "imp": [
     22
    ],
    "via": [
     26
    ]
   }
  },
  {
   "n": "Evaluación nutricional avanzada y composición corporal",
   "nat": "evaluación",
   "o": "Emergente",
   "fn": 5,
   "fnx": "Protocolo ISAK · bioimpedancia y DEXA · calibración · interpretación e informe · seguimiento",
   "pr": "Recibir derivación → medir con protocolo → interpretar e informar",
   "ev": "Informe de composición corporal con interpretación",
   "d": {
    "vol": 1,
    "amp": 2,
    "esc": 2,
    "rem": 2,
    "for": 1
   },
   "t": {
    "cre": 2,
    "nor": 1,
    "inv": 2,
    "dem": 3,
    "tec": 4
   },
   "i": {
    "cri": 3,
    "alc": 3
   },
   "sos": 1,
   "v": {
    "doc": 0,
    "cam": 0,
    "inf": 0,
    "dif": 0,
    "hab": 0
   },
   "fd": "Sin puestos propios; S/ 2 400 como tarea añadida [E-11].",
   "ft": "Obesidad 15+ de 17,8 a 24,6 %; sarcopenia en población que envejece [P-S]. La medición se automatiza rápido (bioimpedancia, escaneo 3D, apps) [P].",
   "fi": "Transversal; baja sostenibilidad como especialidad autónoma: sobrevive integrada a clínica, geriatría y deporte [P].",
   "modo": {
    "empleo": "Un solo aviso con «ISAK 1» como requisito (Panadería Central, administradora-nutricionista, S/ 2 400): tarea dentro de otro puesto [E-11]; la búsqueda devolvió solo oferta formativa (IIN/LAAM) [E-B9].",
    "negocio": "Servicio complementario en consulta privada y gimnasios [E-11]."
   },
   "cod": "NUT-06",
   "barrido": "23-09-2026",
   "ac": 100,
   "just": {
    "vol": "Un solo aviso con ISAK 1, dentro de un puesto de administradora-nutricionista [E-11]; la búsqueda devolvió solo oferta formativa IIN/LAAM [E-B9]. Sin puestos propios.",
    "amp": "Consulta privada y gimnasios como servicio complementario [E-11]; sin empleador dedicado. Pocos empleadores, más de uno.",
    "esc": "Sin señal de escasez [E-11]; oferta formativa ISAK abundante [E-B9]. Se cubre fácil; no «sola» porque exige certificación ISAK.",
    "rem": "S/ 2 400 como tarea añadida [E-11], bajo el promedio MTPE S/ 3 738 [E-8] pero sobre el inicio S/ 2 323 [E-2]. Al promedio de entrada.",
    "for": "ISAK sin reconocimiento normativo [N-5]; el aviso no exige colegiatura [E-11]. Informal.",
    "cre": "Sin serie propia; obesidad 17,8 → 24,6 % [P-S] no se traduce en puestos [E-11]. Estancado.",
    "nor": "ISAK sin reconocimiento normativo [N-5]; ninguna NTS regula la antropometría como especialidad [N-tabla]. Sin norma.",
    "inv": "Oferta formativa IIN/LAAM [E-B9] y equipamiento de gimnasios +10 %/año [P-S]. Incipiente, no sostenida en contratación.",
    "dem": "Obesidad 24,6 % y sarcopenia en población que envejece (60+ = 14,3 %) [P-S]. Driver claro; no estructural porque la medición se integra a otras especialidades.",
    "tec": "Bioimpedancia, escaneo 3D y apps ya miden composición corporal [P]. Adoptada y estable.",
    "cri": "Interpretación errónea en clínica, geriatría o deporte desvía tratamientos [P]; alta, no grave porque el informe se devuelve a quien deriva.",
    "alc": "Transversal a clínica, geriatría y deporte [P]; consulta privada y gimnasios [E-11]. Regional.",
    "sos": "La medición se automatiza rápido (bioimpedancia, escaneo 3D, apps); baja sostenibilidad como especialidad autónoma [P]. La absorbe la tecnología."
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
     "P1": "Sin puesto propio: un aviso con ISAK 1 como tarea añadida a S/ 2 400. Es competencia instrumental de clínica y deporte, no especialidad contratada.",
     "P2": "La competencia de medir es básica del perfil, pero como especialidad la absorbe la tecnología (bioimpedancia, escaneo 3D) antes de 2029 (proyección). No sostiene perfil propio.",
     "P3": "La valoración básica ya es parte del proceso de NTS 103 y NTS 213; la modalidad avanzada (ISAK, bioimpedancia) no tiene norma ni registro. Competencia transversal, no especialidad.",
     "P4": "Antropometría y bioimpedancia las exijo dentro del puesto clínico; como especialidad autónoma no la contrato, es una tarea con equipo, no un perfil.",
     "P5": "Bioimpedancia, escaneo 3D y apps ya miden; la interpretación es competencia transversal de clínica, geriatría y deporte, no una especialidad. La absorbe la tecnología.",
     "P6": "Antropometría es curso obligatorio en seis mallas: competencia básica, no especialidad. Sin puesto propio en ninguna región; un aviso con ISAK como tarea añadida."
    }
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     20,
     21
    ],
    "imp": [
     22
    ],
    "via": [
     26
    ]
   }
  },
  {
   "n": "Desarrollo y reformulación de productos alimentarios",
   "nat": "producto",
   "o": "Emergente",
   "fn": 6,
   "fnx": "Análisis de cartera · reformulación · validación sensorial · rotulado y octógonos · registro sanitario · vigilancia de la competencia",
   "pr": "Recibir la cartera → reformular → validar → registrar",
   "ev": "Ficha técnica del producto reformulado y expediente de validación",
   "d": {
    "vol": 2,
    "amp": 3,
    "esc": 2,
    "rem": 2,
    "for": 1
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
    "cam": 3,
    "inf": 3,
    "dif": 3,
    "hab": 3
   },
   "fd": "Sin conteo; industria, comerciales de suplementos; 1 año de experiencia en I+D o control de calidad, colegiatura no mencionada [E-B10].",
   "ft": "Snacks saludables USD 557 M (2025) → 989 M (2035, CAGR 5,9 %); reformulación por octógonos redujo azúcar −36,7 % y sodio −14 % en fase 1, con retroceso parcial desde 2021 [P-L6][P-L5]. Ley 30021 fase 2 vigente; NTP 209.038 «recomendable» sin firma reservada (nivel 2) [N-4][N-6].",
   "fi": "Población consumidora total; reformulación «táctica» que evade octógonos sin mejorar salud [P-L5]. Validación sensorial y regulatoria no se automatizan [P].",
   "modo": {
    "empleo": "Puesto compartido: Wasi Mikuna admite en la misma plaza «Nutrición, Bromatología y Nutrición, Ingeniería en Industrias Alimentarias, Ingeniería Alimentaria o Agroindustrial» [E-10]; Nestlé y Alicorp sin aviso específico [E-B10]; «Nutricionista Comercial» NC Company [E-B7].",
    "negocio": "Consultoría de rotulado y desarrollo para pymes de alimentos [E]."
   },
   "cod": "NUT-07",
   "barrido": "23-09-2026",
   "ac": 67,
   "just": {
    "vol": "Sin conteo; Nestlé y Alicorp sin aviso específico [E-B10]; «Nutricionista Comercial» NC Company [E-B7]; Wasi Mikuna comparte plaza [E-10]. Pocos puestos.",
    "amp": "Industria de alimentos, comerciales de suplementos y programas públicos [E-B10][E-B7][E-10]. Varios sectores, sin muchos empleadores dedicados.",
    "esc": "Puesto compartido con ingeniería de alimentos [E-10]; requisito de 1 año en I+D o control de calidad [E-B10]. Se cubre fácil por competencia entre carreras.",
    "rem": "Sin dato directo en el barrido: se puntúa por analogía con el promedio de carrera S/ 3 738–4 913 [E-8]; los avisos no publican cifra [E-B10].",
    "for": "Colegiatura no mencionada [E-B10]; NTP 209.038 «recomendable» sin firma reservada [N-6]; Wasi Mikuna admite ingenieros [E-10]. Informal.",
    "cre": "Snacks saludables USD 557 M (2025) → 989 M (2035, CAGR 5,9 %) [P-L6]. Crece; no «mucho» porque la reformulación retrocede desde 2021 [P-L5].",
    "nor": "Ley 30021 fase 2 y DS 017-2017-SA vigentes [N-4]; NTP 209.038 recomendable [N-6]. Norma vigente sin plazo nuevo ni presupuesto.",
    "inv": "Mercado de snacks saludables con CAGR 5,9 % a 2035 [P-L6]. Inversión privada sostenida, sin monto comprometido.",
    "dem": "Octógonos redujeron azúcar −36,7 % y sodio −14 % en fase 1 [P-L5]: driver regulatorio claro. No estructural: retroceso parcial desde 2021 [P-L5].",
    "tec": "Sin dato directo en el barrido: se puntúa por analogía con la reformulación industrial ya ejecutada bajo octógonos [P-L5], tecnología en adopción.",
    "cri": "Reformulación «táctica» que evade octógonos sin mejorar salud [P-L5]; alta, no grave porque el daño es poblacional difuso.",
    "alc": "Población consumidora total; Ley 30021 de aplicación nacional [N-4][P-L5]. Nacional.",
    "sos": "Validación sensorial y regulatoria no se automatizan [P]. Insustituible."
   },
   "panel": {
    "p": [
     2,
     3,
     2,
     2,
     3,
     2
    ],
    "med": 2,
    "icvi": 0.33,
    "cvr": -0.33,
    "ric": 1,
    "ac": 67,
    "ver": "Sin consenso · ronda 2",
    "com": {
     "P1": "Sin conteo de avisos; Nestlé y Alicorp no piden nutricionista; plaza compartida con ingeniería de alimentos. El mercado prefiere al ingeniero aquí.",
     "P2": "Octógonos redujeron azúcar −36,7 % con retroceso desde 2021 (dato); snacks saludables CAGR 5,9 % a 2035 (proyección). La industria necesita criterio nutricional, no solo ingeniería.",
     "P3": "Ley 30021 y DS 017-2017-SA obligan a conocer parámetros y octógonos, pero NTP 209.038 es recomendable y no reserva firma. Función compartida con ingeniería de alimentos.",
     "P4": "Fuera de mi giro: la industria contrata ingenieros de alimentos para reformular y rotular; el nutricionista compite en desventaja en esa plaza.",
     "P5": "Software de reformulación acelera el cálculo; la validación sensorial, el expediente regulatorio y la responsabilidad del rotulado siguen siendo humanos.",
     "P6": "Solo Antioquia la formaliza; en Perú la plaza la comparte ingeniería de alimentos (Wasi Mikuna). Agroindustria de San Martín y Puno abre nicho, no perfil esencial."
    }
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     21,
     17
    ],
    "imp": [
     22
    ],
    "via": [
     32,
     29,
     25
    ]
   },
   "vjust": {
    "dif": "3 de 18 la formalizan como diploma, énfasis o área; Científica del Sur tiene bloque Tecnología y Seguridad Alimentaria (18 cr.) sin desarrollo de productos; 11 dictan solo Tecnología de alimentos como curso. Ninguna peruana la declara como mención.",
    "hab": "El Reglamento CNP incluye la asesoría en producción de alimentos y el aseguramiento de calidad como ejercicio del nutricionista. DS 007-98-SA y RM 449-2006 exigen 'profesional' sin fijar profesión; DS 017-2017-SA no lo menciona. Función compartida con ingeniería de alimentos.",
    "norma": "Reglamento del Estatuto del CNP (21-11-2018) art. 3; Ley 30188 art. 4.a; DS 007-98-SA (25-09-1998) arts. 61, 105 y 117; DS 017-2017-SA (15-06-2017) art. 4; RM 449-2006/MINSA art. 17",
    "registro": "",
    "quienes": [
     "U. Le Cordon Bleu · Diploma de especialidad en Tecnología de los Alimentos (electivos de lácteos, cárnicos, frutas, fermentaciones) (2024)",
     "Javeriana Cali · Énfasis en Industria de Alimentos y Gastronomía, con Fundamentos para el desarrollo de nuevos productos alimenticios (2024)",
     "U. de Antioquia · área tecnología de alimentos y análisis sensorial (2025)"
    ],
    "doc": "Estimado (equipo parcial). Con evidencia reciente: Mg. Yaquelin Eveling Calizaya Milla (quesos veganos a base de aislados proteicos de leguminosas y cushuro, 2024; valorización de okara en yogur de soja, 2026; pasta de maní con proteínas aisladas, 2021). Evidencia anterior a 2019: Rodrigo Alfredo Matos Chamorro (pajuro en preparaciones culinarias, 2016; modelos matemáticos peso-talla, 2022), Lic. Silvia Elida Moori Apolinario (harina de árbol de pan, 2018; modelos de advertencia en etiquetado, 2018), Felix Nicolas Palacios Morales (cushuro, 2018). No se halló docente de Nutrición con experiencia publicada en registro sanitario DIGESA o rotulado normativo; la Facultad de Ingeniería y Arquitectura (Ingeniería de Industrias Alimentarias, Lima y Juliaca) dispone de docentes de tecnología de alimentos cuya participación en la especialidad debe confirmarse.",
    "cam": "Convenios parciales con evidencia: Centro Universitario de Producción de Bienes 'Unión' (planta de alimentos propia de la UPeU; articulación académica-productiva con la FIA, 2022; acuerdos con Inter-American Health Food Company y Superbom, abr. 2024; proyecto de snacks saludables a implementarse en el centro, 2023). Ningún convenio publicado entre la EP de Nutrición y empresas de la industria alimentaria externa.",
    "inf": "Estimado (parcial). Planta de producción de alimentos del Centro de Producción de Bienes 'Unión' en el campus Lima; laboratorios de Ingeniería de Industrias Alimentarias (Lima y Juliaca; prácticas de laboratorio reanudadas en 2021); Laboratorio de Técnicas Dietéticas de Nutrición. Tesis 2024–2026 con caracterización fisicoquímica, antioxidante y sensorial evidencian acceso a laboratorio de análisis de alimentos. No se documenta públicamente laboratorio de bromatología, análisis sensorial ni software de formulación asignado a Nutrición; el uso compartido con la FIA debe confirmarse."
   },
   "vdecl_estado": "estimado · por confirmar por la Dirección"
  },
  {
   "n": "Nutrición en obesidad y cirugía bariátrica",
   "nat": "atención individual",
   "o": "Emergente",
   "fn": 6,
   "fnx": "Valoración · plan de manejo de peso · preparación prebariátrica · seguimiento posquirúrgico · deficiencias de micronutrientes · conducta alimentaria",
   "pr": "Valorar → planificar → intervenir → seguir",
   "ev": "Plan de manejo nutricional con seguimiento documentado",
   "d": {
    "vol": 3,
    "amp": 3,
    "esc": 2,
    "rem": 2,
    "for": 3
   },
   "t": {
    "cre": 3,
    "nor": 2,
    "inv": 3,
    "dem": 4,
    "tec": 3
   },
   "i": {
    "cri": 3,
    "alc": 4
   },
   "sos": 3,
   "v": {
    "doc": 3,
    "cam": 2,
    "inf": 2,
    "dif": 4,
    "hab": 4
   },
   "fd": "Centros privados y clínicas estéticas; sin cifra de remuneración [E-B8][E-B13].",
   "ft": "Obesidad 15+ 24,6 % (2020); comorbilidad 41,8 % (2025); ~8 M adultos con obesidad; sin datos de cirugía bariátrica en Perú (vacío); telenutrición validada en Lima [P-S][P-L1].",
   "fi": "Alta comorbilidad; la consulta básica es sustituible por apps, el manejo clínico-quirúrgico no [P].",
   "modo": {
    "empleo": "Clínicas de salud y estéticas: «título en Nutrición, colegiatura y habilitación vigentes, mínimo 1 año en consulta nutricional» [E-B8]; Adelgazar y Punto Zen busca nutricionista [E-B13].",
    "negocio": "Centros de control de peso con 13 años de trayectoria; telenutrición [E-B13][P-S]."
   },
   "cod": "NUT-08",
   "barrido": "23-09-2026",
   "ac": 67,
   "just": {
    "vol": "Adelgazar y Punto Zen, clínicas estéticas y de salud convocan [E-B8][E-B13]; sin conteo diferenciado. Volumen medio, integrado a consulta privada.",
    "amp": "Centros de control de peso, clínicas estéticas y telenutrición [E-B13][P-S]. Varios sectores privados; no diversos como clínica.",
    "esc": "Requisito mínimo de 1 año en consulta nutricional [E-B8]; sin señal de escasez. Se cubre fácil.",
    "rem": "Sin dato directo en el barrido [E-B8][E-B13]: se puntúa por analogía con consulta privada (S/ 1 800–2 400) [E-B14], cercana al promedio de entrada S/ 2 323 [E-2].",
    "for": "Avisos exigen «título en Nutrición, colegiatura y habilitación vigentes» [E-B8]; sin norma que reserve el manejo bariátrico [N-tabla]. Suele exigir título; no 4 por falta de reserva legal.",
    "cre": "Obesidad 17,8 → 24,6 %, comorbilidad 39,9 → 41,8 % [P-S]; centros con 13 años de trayectoria [E-B13]. Crece.",
    "nor": "Sin norma específica; solo Ley 30021 como marco preventivo [N-4] y ningún dato bariátrico [P-S]. Norma indirecta, no vigente para la especialidad.",
    "inv": "Centros privados de control de peso con 13 años y telenutrición validada en Lima [E-B13][P-S]. Sostenida, sin monto.",
    "dem": "~8 M adultos con obesidad, comorbilidad 41,8 % [P-S][P-L1]. Estructural.",
    "tec": "Telenutrición validada en Lima; apps con foto-cálculo [P-S]. En adopción, no estable en el manejo clínico.",
    "cri": "Comorbilidad alta y deficiencias posbariátricas [P]; alta, no grave porque el dato de cirugía bariátrica en Perú es un vacío [P-S].",
    "alc": "Obesidad 24,6 % en 15+ a nivel nacional [P-S]. Nacional.",
    "sos": "Consulta básica sustituible por apps; manejo clínico-quirúrgico no [P]. Riesgo moderado."
   },
   "panel": {
    "p": [
     3,
     3,
     2,
     3,
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
     "P1": "Centros de control de peso y clínicas contratan con colegiatura; 8 M adultos con obesidad sostienen consulta privada. Sin datos bariátricos, el manejo de obesidad sí es núcleo.",
     "P2": "Obesidad 24,6 % y ~8 M adultos (dato): el manejo clínico de la obesidad será competencia de todo egresado; la bariátrica sigue sin cifras peruanas (vacío).",
     "P3": "Sin NTS ni segunda especialidad en el RNE; el manejo de obesidad queda cubierto por clínica hospitalaria y el marco preventivo de Ley 30021. Bariátrica es posgrado.",
     "P4": "Un nivel III opera bariátrica y un cuarto de mis pacientes tiene obesidad; necesito que el clínico maneje pre y posoperatorio sin que sea plaza separada.",
     "P5": "Apps con foto-cálculo sustituyen la consulta básica de peso; el manejo de deficiencias posbariátricas y conducta alimentaria exige juicio clínico presencial.",
     "P6": "Centros de control de peso y clínicas estéticas son de Lima; sin dato bariátrico nacional. Obesidad 24,6 % justifica contenido clínico, no especialidad territorial."
    }
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     15,
     16
    ],
    "imp": [
     18,
     19,
     22
    ],
    "via": [
     33,
     34,
     23,
     24,
     27
    ]
   },
   "vjust": {
    "dif": "0 de 18. Ningún plan de pregrado nombra obesidad ni cirugía bariátrica como mención, línea o curso; solo aparece en formación continua (Científica del Sur, curso Nutrición Bariátrica) y en UPCH como electivo genérico de patologías de gran prevalencia.",
    "hab": "La prescripción dietética es privativa del nutricionista (Reglamento CNP art. 3). La GPC de EsSalud exige evaluación prequirúrgica y seguimiento por equipo multidisciplinario con nutricionistas. Existe segunda especialidad específica registrable. Resolución que aprueba la GPC: No verificado.",
    "norma": "Ley 30188 art. 4.b; Reglamento del Estatuto del CNP art. 3 (terapia nutricional privativa); NTS 103 (RM 665-2013/MINSA); GPC IETSI-EsSalud para el manejo quirúrgico de la obesidad en adultos (2020) BPC 3",
    "registro": "Título de Segunda Especialidad Profesional en Nutrición en Obesidad y Cirugía Bariátrica (U. Wiener, 40 créditos, título registrado en SUNEDU) registrable en el RNE del CNP",
    "quienes": [],
    "doc": "Estimado (equipo parcial). Línea de obesidad y composición corporal con evidencia: Lic. María Bernarda Collantes Cossio (decisión de pérdida de peso, 2022; adicción a las comidas, grasa corporal y riesgo cardiometabólico, 2026; autopercepción de imagen corporal y antropometría, 2025), Lic. Charo Natali Huzco Rutti (grasa corporal y riesgo cardiometabólico, 2024; ingesta proteica y composición corporal, 2023), Mg. María Alina Miranda Flores (sobrepeso y obesidad en choferes, 2013; IMC y riesgo cardiometabólico, 2023), Lic. Bertha Chanducas Lozano (sueño, IMC y cintura, 2024), Marlene Pareja Joaquín (perímetro de cuello para sobrepeso y obesidad, 2019), Johnny Percy Ambulay Briceño (obesidad en comerciantes, 2017). No se halló ninguna tesis ni docente con línea de cirugía bariátrica o manejo pre/posbariátrico (búsqueda 'bariátrica' sin resultados específicos). Nivel 3 por el componente de obesidad; el componente bariátrico no tiene perfil identificado.",
    "cam": "Estimado (campo informal). Los convenios hospitalarios publicados (Hospital de Chosica, Hospital de Emergencias de Ate Vitarte) permiten consulta de obesidad en rotación clínica general, pero no se identificó convenio con unidad de cirugía bariátrica ni con clínica de obesidad. Clínica Adventista Good Hope (Miraflores) coordina internado de pregrado de Medicina con la UPeU; su cobertura para Nutrición no está publicada.",
    "inf": "Estimado (mínimo). Tesis 2023–2026 sobre grasa corporal y composición corporal implican equipamiento de medición (no descrito públicamente: bioimpedancia, plicómetros). No se halló laboratorio de composición corporal ni calorimetría indirecta. Centro de Simulación Clínica y Laboratorio de Técnicas Dietéticas disponibles."
   },
   "vdecl_estado": "estimado · por confirmar por la Dirección"
  },
  {
   "n": "Nutrición ocupacional y salud en minería",
   "nat": "atención individual",
   "o": "Emergente",
   "fn": 6,
   "fnx": "Valoración del trabajador · plan alimentario de campamento · vigilancia de riesgo cardiometabólico · educación · articulación con salud ocupacional · indicadores",
   "pr": "Valorar al trabajador → planificar → intervenir → vigilar",
   "ev": "Programa nutricional ocupacional con indicadores de salud del trabajador",
   "d": {
    "vol": 2,
    "amp": 2,
    "esc": 3,
    "rem": 4,
    "for": 3
   },
   "t": {
    "cre": 3,
    "nor": 2,
    "inv": 3,
    "dem": 2,
    "tec": 2
   },
   "i": {
    "cri": 3,
    "alc": 3
   },
   "sos": 4,
   "v": {
    "doc": 2,
    "cam": 2,
    "inf": 2,
    "dif": 4,
    "hab": 3
   },
   "fd": "Pocos avisos pero con remuneración muy sobre el promedio (S/ 8 000) y habilitación exigida [E-6][E-12]. Especialidad descubierta en el barrido.",
   "ft": "10+ proyectos mineros en 2026; contratistas de salud ocupacional y concesionarias en expansión [P-S][E-B5]. Sin norma específica.",
   "fi": "Salud de trabajadores en régimen de campamento; criticidad alta por riesgo cardiometabólico [P].",
   "modo": {
    "empleo": "NATCLAR (salud ocupacional) «Nutricionista Unidad Minera La Oroya», habilitación indispensable [E-12]; Centro de Investigación de la Salud y el Trabajo (Surco) aviso a S/ 8 000 [E-6].",
    "negocio": "Consultoría en salud ocupacional para contratistas mineros [E-12]."
   },
   "cod": "NUT-09",
   "barrido": "23-09-2026",
   "ac": 67,
   "just": {
    "vol": "NATCLAR La Oroya [E-12] y centro de salud y trabajo Surco a S/ 8 000 [E-6]: pocos avisos; especialidad descubierta en el barrido.",
    "amp": "Contratistas de salud ocupacional (NATCLAR) y un centro de investigación [E-12][E-6]. Pocos empleadores.",
    "esc": "Remuneración S/ 8 000 [E-6] y «habilitación indispensable» [E-12] sugieren dificultad de cobertura. Sin vacantes desiertas publicadas.",
    "rem": "Aviso a S/ 8 000 [E-6] frente al promedio MTPE senior S/ 4 913 [E-8]: muy sobre el promedio; caso atípico pero único dato.",
    "for": "«Habilitación indispensable» [E-12]; sin norma que reserve la función ocupacional al nutricionista [N-tabla]. Suele exigir título.",
    "cre": "10+ proyectos mineros en 2026 [P-S]; contratistas y concesionarias en expansión [E-B5]. Crece.",
    "nor": "Sin norma específica en el barrido normativo [N]; NTS 142 y HACCP rigen el servicio de campamento sin reserva [N-4]. Norma indirecta, no vigente para el rol.",
    "inv": "10+ proyectos mineros en 2026 y concesionarias en expansión [P-S][E-B5]. Sostenida.",
    "dem": "Sin dato directo en el barrido: se puntúa por analogía con la expansión minera [P-S]; driver débil porque no hay serie de salud del trabajador.",
    "tec": "Sin dato directo en el barrido: se puntúa por analogía con clínica, donde la IA está en experimentación [P-L11].",
    "cri": "Riesgo cardiometabólico en régimen de campamento 14x7 [E-7][P]. Alta, no grave.",
    "alc": "Pasco, La Oroya, Chincha, Apurímac [E-12][E-7]: regional minero, no nacional.",
    "sos": "Valoración presencial del trabajador en campamento [E-12]. Sin dato directo de exposición a IA: se puntúa por analogía con clínica, insustituible [P-L11]."
   },
   "panel": {
    "p": [
     2,
     2,
     2,
     3,
     2,
     3
    ],
    "med": 2,
    "icvi": 0.33,
    "cvr": -0.33,
    "ric": 1,
    "ac": 67,
    "ver": "Sin consenso · ronda 2",
    "com": {
     "P1": "Pocos avisos pero remuneración atípica S/ 8 000 y habilitación indispensable; nicho regional minero en expansión. Útil como mención, no exigible al egresado.",
     "P2": "Salario S/ 8 000 y 10+ proyectos mineros 2026 (proyección) marcan nicho regional bien pagado, sin norma ni serie de salud del trabajador. Se cubre desde clínica y servicios.",
     "P3": "Ninguna norma reserva la función ocupacional al nutricionista; el campamento se rige por NTS 142 y HACCP sin reserva. Empleadores exigen habilitación, pero es aplicación de clínica y servicios.",
     "P4": "Mi perfil más difícil de conseguir: campamento minero con salud ocupacional y servicio de alimentación en el mismo contrato; pago sobre el promedio y no llegan.",
     "P5": "La valoración presencial en campamento resiste la automatización, pero es clínica y servicios de alimentación aplicadas a un sector, no un juicio distinto.",
     "P6": "Chincha, Apurímac, Pasco y La Oroya contratan nutricionista de campamento con habilitación y S/ 8 000; ninguna universidad la forma. Diferenciador territorial claro para sedes regionales."
    }
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     15,
     16
    ],
    "imp": [
     22
    ],
    "via": [
     35,
     29,
     23
    ]
   },
   "vjust": {
    "dif": "0 de 18. Ningún plan nombra nutrición ocupacional, salud del trabajador ni minería como mención, línea, práctica o curso; solo Wiener y Científica citan Fuerzas Armadas o empresas como campo laboral, sin componente curricular.",
    "hab": "Solo el Reglamento CNP art. 4 exige nutricionista en servicios de alimentación colectiva (comedores mineros, art. 188 DS 024-2016-EM). Las normas estatales de salud ocupacional (RM 312-2011, RM 375-2008-TR) no lo incluyen en el equipo; no hay especialidad ni registro.",
    "norma": "Reglamento del Estatuto del CNP (21-11-2018) arts. 3-4; DS 024-2016-EM (28-07-2016) arts. 188 y 208; RM 312-2011/MINSA (04-2011) equipo de vigilancia de la salud; RM 375-2008-TR (28-11-2008)",
    "registro": "",
    "quienes": [],
    "doc": "Estimado (un docente equivalente). Tesis en poblaciones trabajadoras sin enfoque de salud ocupacional formal: Lic. Charo Natali Huzco Rutti (factores sociolaborales y calidad de vida en nutricionistas clínicos, 2021), Lic. María Bernarda Collantes Cossio (colaboradores de una cadena de restaurantes, 2024), Mg. María Alina Miranda Flores (choferes de empresas de transporte, 2013), Jacksaint Saintila (estrés laboral e ingesta en profesionales de salud, 2022), Johnny Percy Ambulay Briceño (comerciantes de mercado mayorista, 2017). Ninguna tesis ni docente con línea en minería, campamentos o programas de salud ocupacional (búsquedas 'minera OR ocupacional' y sitio UPeU 'minera' sin resultados). No verificable un docente con diplomado o maestría en salud ocupacional.",
    "cam": "Estimado (campo informal, con un convenio institucional por confirmar). UPeU Campus Juliaca firmó convenio específico de cooperación interinstitucional con la empresa minera Pegasso Gold Export S.A.C. (ago. 2025) para prácticas preprofesionales, pasantías, investigación y proyección social de 'múltiples programas'; no se publica si incluye a Nutrición Humana. No se halló convenio con concesionarias de alimentación de campamentos ni con servicios de salud ocupacional. Si la Dirección acredita que el convenio con Pegasso cubre Nutrición, el nivel sube a 3.",
    "inf": "Estimado (mínimo). No se halló equipamiento específico (antropometría de campo, evaluación de gasto energético, software de vigilancia ocupacional). Se dispone de infraestructura general de la EP (Laboratorio de Técnicas Dietéticas, Centro de Simulación Clínica)."
   },
   "vdecl_estado": "estimado · por confirmar por la Dirección"
  },
  {
   "n": "Nutrición en programas sociales del Estado",
   "nat": "salud poblacional",
   "o": "Establecida",
   "fn": 6,
   "fnx": "Fichas técnicas · supervisión de proveedores · vigilancia sanitaria · capacitación · monitoreo · reporte",
   "pr": "Planificar la atención → supervisar → vigilar → reportar",
   "ev": "Informe de supervisión de la unidad territorial con indicadores",
   "d": {
    "vol": 3,
    "amp": 2,
    "esc": 2,
    "rem": 2,
    "for": 3
   },
   "t": {
    "cre": 1,
    "nor": 3,
    "inv": 4,
    "dem": 3,
    "tec": 3
   },
   "i": {
    "cri": 4,
    "alc": 4
   },
   "sos": 4,
   "v": {
    "doc": 2,
    "cam": 3,
    "inf": 2,
    "dif": 4,
    "hab": 3
   },
   "fd": "Wasi Mikuna: de 1 convocatoria (06-2025) a 0 vigentes (09-2026); admite carreras afines [E-10][E-4]. Misma naturaleza que comunitaria: candidata a integración.",
   "ft": "PAE 2026 S/ 2 636,6 M, 4,2 M escolares, 67 000 II. EE.; dos programas disueltos en 18 meses (Qali Warma, Wasi Mikuna) [P-L4][N-10]; fichas técnicas obligatorias vía Perú Compras [P-L4].",
   "fi": "4,2 M escolares; fallas = intoxicaciones masivas (2024). Supervisión in situ no se automatiza [P].",
   "modo": {
    "empleo": "CAS 094 «Especialista Alimentario» Áncash S/ 3 200 por unidad territorial [E-10]; PAE en Puno, Huánuco, Cajamarca, Arequipa; Cuna Más Lima e Ica [E-1].",
    "negocio": "Dependiente del Estado."
   },
   "cod": "NUT-10",
   "barrido": "23-09-2026",
   "ac": 50,
   "just": {
    "vol": "PAE en Puno, Huánuco, Cajamarca, Arequipa; Cuna Más Lima e Ica [E-1]; CAS 094 Áncash [E-10]. Volumen medio; Wasi Mikuna sin vigentes impide 4 [E-4].",
    "amp": "MIDIS (PAE, Cuna Más) y gobiernos locales [E-1][E-10]: pocos empleadores, todos estatales.",
    "esc": "Admite carreras afines [E-10]; sin señal de escasez. Se cubre fácil.",
    "rem": "CAS especialista alimentario S/ 3 200 [E-10], bajo el promedio joven S/ 3 738 [E-8] pero sobre el inicio S/ 2 323 [E-2]. Al promedio.",
    "for": "CAS exige título y colegiatura [E-1][N-7] pero admite carreras afines [E-10]; PAE nivel 3 no exclusivo [N-tabla]. Suele exigir título.",
    "cre": "Wasi Mikuna de 1 convocatoria (06-2025) a 0 vigentes (09-2026) [E-4][E-10]; dos programas disueltos en 18 meses [N-4]. Decrece.",
    "nor": "PAE del MIDIS con convocatoria 2026 abierta [N-4][N-L10]; decreto de creación no verificado [N]. Vigente, sin plazo con presupuesto propio verificado.",
    "inv": "PAE 2026 con S/ 2 636,6 M para 4,2 M de escolares [P-L4]. Comprometida.",
    "dem": "~400 intoxicados en 2024 y fichas técnicas obligatorias [P-L4]; DCI estancada [P-L1]. Driver claro; no estructural porque la contratación depende del programa.",
    "tec": "Fichas técnicas vía Perú Compras y trazabilidad maduros [P-L4]. En adopción.",
    "cri": "Fallas = intoxicaciones masivas (2024) en 4,2 M de escolares [P-L4]. Grave.",
    "alc": "67 000 II. EE. en todo el país [N-4]. Nacional.",
    "sos": "Supervisión in situ de proveedores no se automatiza [P]. Insustituible."
   },
   "panel": {
    "p": [
     2,
     3,
     3,
     2,
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
     "P1": "Contratación a la baja: Wasi Mikuna de 1 a 0 convocatorias, dos programas disueltos, admite carreras afines a S/ 3 200. Misma convocatoria que comunitaria.",
     "P2": "PAE S/ 2 636,6 M para 4,2 M escolares (dato), pero dos programas disueltos en 18 meses: demanda grande e institucionalmente volátil. Esencial, integrada a comunitaria.",
     "P3": "DS 017-2017-SA arts. 6-9 y el PAE del MIDIS exigen vigilancia alimentaria escolar; convocatorias piden título y colegiatura aunque admiten afines. Esencial, integrable con comunitaria.",
     "P4": "No es mi contratación; el programa admite carreras afines y ha cerrado convocatorias, así que no lo pediría como eje del perfil de egreso.",
     "P5": "Fichas técnicas y trazabilidad ya corren por Perú Compras; la supervisión in situ persiste, pero es la misma competencia de comunitaria en contexto estatal.",
     "P6": "PAE convoca en Puno, Huánuco, Cajamarca y Arequipa: empleador regional real, aunque admite carreras afines y Wasi Mikuna cerró convocatorias. Esencial, pero fusionada con comunitaria."
    }
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     17,
     15
    ],
    "imp": [
     22
    ],
    "via": [
     27,
     28,
     25,
     23
    ]
   },
   "vjust": {
    "dif": "0 de 18 la declaran como mención o línea. 4 la dictan como curso suelto: UNMSM (Gestión en políticas públicas y programas), UNA Puno (Políticas públicas y programas alimentario nutricionales), ULCB (políticas públicas en alimentación), UBA (electivo Política alimentaria).",
    "hab": "La ley faculta al nutricionista a diseñar y evaluar programas de alimentación institucionales y nacionales. Los perfiles de MIDIS habilitan el título, pero lo comparten con bromatología e ingeniería de industrias alimentarias; ninguna norma exige especialidad ni registro adicional.",
    "norma": "Ley 30188 art. 5.a; DS 010-2024-MIDIS (creación de Wasi Mikuna); RDE N.º 2496-2025-MIDIS/PNCM-DE (Directiva de cuidado diurno Cuna Más); perfiles CAS Cuna Más N.º 914 (2023) y Wasi Mikuna N.º 094 (2025)",
    "registro": "",
    "quienes": [],
    "doc": "Estimado (un docente con evidencia directa). Mg. Mery Rodríguez Vásquez asesoró la tesis sobre conocimiento materno de anemia y multimicronutrientes en usuarias del Programa Cuna Más (2019). El equipo de nutrición comunitaria (Chanducas Lozano, Collantes Cossio, Calizaya Milla; ver NUT-03) tiene líneas afines en escolares y niños menores de 5 años, pero sin evidencia pública de experiencia en gestión de programas MIDIS (Qali Warma/PAE, Cuna Más, Juntos, PAIS) por unidad territorial. Puede subir a 3 si la Dirección acredita trayectoria de docentes en programas sociales.",
    "cam": "Convenios parciales con evidencia: acta de trabajo UPeU Juliaca–Programa Nacional de Alimentación Escolar Qali Warma (MIDIS, 01-09-2021; escuelas de Ingeniería de Industrias Alimentarias, Ingeniería Ambiental, Enfermería y Educación; Nutrición no mencionada); plan de trabajo regional MIDIS–Programa Nacional PAIS en 63 Tambos de Puno con UPeU Juliaca (ago. 2025); convenio específico con la Municipalidad Distrital de Pacllón con internado de Nutrición (2023); convenio de prácticas con la Municipalidad Provincial de San Martín (Tarapoto, 2019, todas las carreras de 5.º año). No hay convenio publicado a nombre de la EP de Nutrición con una unidad territorial de MIDIS.",
    "inf": "Estimado (mínimo). La especialidad requiere sobre todo software de supervisión y reporte, equipos antropométricos de campo y aulas; ninguno documentado públicamente para esta función. Infraestructura general de la EP disponible."
   },
   "vdecl_estado": "estimado · por confirmar por la Dirección"
  },
  {
   "n": "Consultoría privada y nutrición online",
   "nat": "consultoría",
   "o": "Establecida",
   "fn": 4,
   "fnx": "Consulta · plan · seguimiento remoto · marca profesional",
   "pr": "Recibir al cliente → evaluar → pautar → seguir",
   "ev": "Plan nutricional individual con seguimiento",
   "d": {
    "vol": 3,
    "amp": 3,
    "esc": 1,
    "rem": 1,
    "for": 1
   },
   "t": {
    "cre": 3,
    "nor": 1,
    "inv": 2,
    "dem": 3,
    "tec": 4
   },
   "i": {
    "cri": 2,
    "alc": 3
   },
   "sos": 1,
   "v": {
    "doc": 0,
    "cam": 0,
    "inf": 0,
    "dif": 0,
    "hab": 0
   },
   "fd": "Jooble «online» 913 (01-2026); remoto desde S/ 1 800; freelance sin colegiatura [E-B14].",
   "ft": "Telenutrición evaluada en Lima; apps con IA que producen planes «en minutos» [P-S]. La más expuesta a la IA [P].",
   "fi": "Criticidad baja-media; riesgo de intrusismo. Es un modo de ejercicio de otras especialidades más que un campo propio [P].",
   "modo": {
    "empleo": "Start-ups de coaching: «colaboración a tiempo parcial con horarios flexibles y contrato freelance»; Nutrizales «asesoría nutricional a clientes en diferentes distritos» S/ 1 320 [E-B14][E-6].",
    "negocio": "Consultorio propio; La República señala la consulta particular presencial o virtual como sector de mayor demanda [E-2]."
   },
   "cod": "NUT-11",
   "barrido": "23-09-2026",
   "ac": 100,
   "just": {
    "vol": "Jooble «online» 913 avisos (01-2026) [E-B14]; La República señala la consulta particular como sector de mayor demanda [E-2]. Medio; muchos son freelance parcial.",
    "amp": "Start-ups de coaching, Nutrizales y consultorio propio [E-B14][E-6][E-2]. Varios sectores privados.",
    "esc": "Freelance a tiempo parcial sin colegiatura [E-B14]; remoto desde S/ 1 800 [E-B14]. Se cubre sola.",
    "rem": "Nutrizales S/ 1 320, remoto desde S/ 1 800 [E-6][E-B14], bajo el inicio S/ 2 323 [E-2]. Bajo el promedio; el caso de S/ 8 000 es atípico [E-6].",
    "for": "Freelance a tiempo parcial sin colegiatura [E-B14]. Informal.",
    "cre": "913 avisos online [E-B14]; consulta virtual como sector de mayor demanda [E-2]; telenutrición validada [P-S]. Crece.",
    "nor": "Ninguna norma regula la telenutrición ni la consulta online en el barrido [N]. Sin norma.",
    "inv": "Start-ups de coaching con contrato freelance [E-B14]. Incipiente.",
    "dem": "Comorbilidad 41,8 % [P-S] y demanda de consulta particular [E-2]. Driver claro.",
    "tec": "Apps con IA que producen planes «en minutos» y telenutrición evaluada en Lima [P-S]. Adoptada y estable.",
    "cri": "Riesgo de intrusismo [P]; consulta de bajo riesgo clínico. Moderada.",
    "alc": "Clientes en distritos de Lima [E-6]; lo online amplía pero no hay dato nacional. Regional.",
    "sos": "La más expuesta a la IA: consulta genérica y plan sustituibles [P]. La absorbe la IA."
   },
   "panel": {
    "p": [
     2,
     2,
     2,
     1,
     1,
     2
    ],
    "med": 2,
    "icvi": 0,
    "cvr": -1,
    "ric": 1,
    "ac": 100,
    "ver": "No esencial",
    "com": {
     "P1": "Sector de mayor demanda según prensa y 913 avisos online, pero freelance sin colegiatura desde S/ 1 800 y expuesta a apps. Es modo de ejercicio, no campo.",
     "P2": "Apps con IA producen planes «en minutos» y telenutrición ya validada en Lima (dato): la consulta genérica se erosiona hacia 2028; es modo de ejercicio, no especialidad.",
     "P3": "Ley 30188 ampara el ejercicio privado con colegiatura, pero ninguna norma regula telenutrición ni consulta online. Es un modo de ejercicio, no un campo del perfil.",
     "P4": "No es un puesto que exista en mi nómina ni en la de ninguna institución seria: es freelance sin colegiatura, un modo de ejercer otras especialidades.",
     "P5": "Canal de atención, no especialidad: apps con IA producen planes en minutos y la telenutrición es herramienta que atraviesa clínica, obesidad y deporte.",
     "P6": "Es un modo de ejercicio, no un campo: freelance sin colegiatura desde S/ 1 800, clientela en distritos de Lima. Ninguna malla la formaliza."
    }
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     20,
     21
    ],
    "imp": [
     22
    ],
    "via": [
     26
    ]
   }
  },
  {
   "n": "Nutrición renal y diálisis",
   "nat": "atención individual",
   "o": "Emergente",
   "fn": 5,
   "fnx": "Valoración renal · prescripción de proteínas y electrolitos · manejo en diálisis · desnutrición urémica · trasplante",
   "pr": "Valorar → prescribir → seguir en diálisis",
   "ev": "Plan nutricional renal con control de laboratorio",
   "d": {
    "vol": 1,
    "amp": 2,
    "esc": 3,
    "rem": 3,
    "for": 4
   },
   "t": {
    "cre": 3,
    "nor": 2,
    "inv": 3,
    "dem": 4,
    "tec": 3
   },
   "i": {
    "cri": 4,
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
   "fd": "Sin puesto diferenciado en portales [E-B13].",
   "ft": ">3 M con ERC, 23 000 que deberían dializarse, ingreso a diálisis +8 %/año en EsSalud, GPC ERC de diciembre de 2025 [P-L9][P-S].",
   "fi": "Mortalidad directa por mala nutrición en diálisis; muy alta sostenibilidad [P].",
   "modo": {
    "empleo": "Ningún aviso de centro de diálisis en el barrido [E-B13]; tarea dentro del puesto clínico.",
    "negocio": "Complemento en consulta clínica; Wiener ofrece segunda especialidad en Nutrición Renal [N-7]."
   },
   "cod": "NUT-12",
   "barrido": "23-09-2026",
   "just": {
    "vol": "Ningún aviso de centro de diálisis en el barrido [E-B13]; tarea dentro del puesto clínico. Sin puestos.",
    "amp": "Centros de diálisis y EsSalud como empleadores potenciales [P-L9]; sin aviso [E-B13]. Pocos empleadores.",
    "esc": "23 000 que deberían dializarse y +8 %/año en EsSalud [P-L9] frente a cero puestos diferenciados [E-B13]: cuesta cubrir por ausencia de perfil, no vacantes desiertas.",
    "rem": "Sin dato directo en el barrido: se puntúa por analogía con clínica hospitalaria (S/ 5 342, sobre el promedio) [E-9][E-8].",
    "for": "Segunda especialidad en Nutrición Renal (Wiener) inscrita en el RNE del CNP [N-7][N-1]; NTS 103 reserva la consulta al colegiado [N-2]. Título y colegiatura.",
    "cre": "Ingreso a diálisis +8 %/año en EsSalud; GPC ERC de 12-2025 [P-L9]. Crece.",
    "nor": "GPC ERC 12-2025 [P-L9] sin NTS de nutrición renal [N]. Norma anunciada/indirecta, no vigente para la especialidad.",
    "inv": "Diálisis en expansión +8 %/año en EsSalud [P-L9]. Sostenida.",
    "dem": "3 M con ERC, 23 000 que deberían dializarse [P-L9]. Estructural.",
    "tec": "Sin dato directo en el barrido: se puntúa por analogía con clínica hospitalaria, con control de laboratorio y IA en adopción [P-L11].",
    "cri": "Mortalidad directa por mala nutrición en diálisis [P]. Grave e irreversible.",
    "alc": "Diálisis concentrada en EsSalud y centros urbanos [P-L9]. Regional, no nacional.",
    "sos": "Prescripción de proteínas y electrolitos con control de laboratorio no automatizable [P]. Insustituible."
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     15,
     16
    ],
    "imp": [
     18,
     19,
     22
    ],
    "via": [
     23,
     24,
     27
    ]
   }
  },
  {
   "n": "Nutrición oncológica",
   "nat": "atención individual",
   "o": "Establecida",
   "fn": 5,
   "fnx": "Tamizaje · valoración en tratamiento · manejo de síntomas · cuidados paliativos · seguimiento",
   "pr": "Valorar → diagnosticar → tratar → seguir (paciente oncológico)",
   "ev": "Plan de atención nutricional individualizado",
   "d": {
    "vol": 2,
    "amp": 2,
    "esc": 3,
    "rem": 3,
    "for": 3
   },
   "t": {
    "cre": 3,
    "nor": 2,
    "inv": 2,
    "dem": 4,
    "tec": 2
   },
   "i": {
    "cri": 4,
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
   "fd": "Acotada a institutos y unidades especializadas [E-B13].",
   "ft": ">80 000 casos nuevos/año, mortalidad +26 % en 5 años, 56–70 % diagnosticados en estadios III-IV [P-L10]; sin línea presupuestal de nutrición [P].",
   "fi": "Toxicidad y abandono de tratamiento sin soporte; sin dato peruano de desnutrición oncológica (vacío) [P].",
   "modo": {
    "empleo": "Un aviso (Mundo Sin Cáncer, Lima) [E-B13]; INEN sin aviso; en la práctica es tarea dentro del puesto clínico.",
    "negocio": "Complemento en consulta; Wiener ofrece segunda especialidad con mención oncológica (posgrado) [O-tabla]."
   },
   "cod": "NUT-13",
   "barrido": "23-09-2026",
   "just": {
    "vol": "Un aviso (Mundo Sin Cáncer, Lima) [E-B13]; INEN sin aviso. Pocos puestos.",
    "amp": "Institutos y unidades especializadas [E-B13]. Pocos empleadores.",
    "esc": ">80 000 casos nuevos y subdotación [P-L10][P] frente a un aviso [E-B13]: cuesta cubrir por falta de perfil; sin vacantes desiertas.",
    "rem": "Sin dato directo en el barrido: se puntúa por analogía con clínica hospitalaria (S/ 5 342, sobre el promedio) [E-9][E-8].",
    "for": "Segunda especialidad con mención oncológica solo en posgrado Wiener [O-tabla][N-7]; colegiatura exigida en clínica [E-9]. Suele exigir título; sin reserva propia (no 4).",
    "cre": "Mortalidad +26 % en 5 años; >80 000 casos nuevos [P-L10]. Crece.",
    "nor": "Sin línea presupuestal de nutrición oncológica [P]; sin NTS propia [N]. Anunciada/indirecta.",
    "inv": "Sin línea presupuestal de nutrición [P]. Incipiente.",
    "dem": ">80 000 casos nuevos/año, 56–70 % en estadios III-IV [P-L10]. Estructural.",
    "tec": "Sin dato directo en el barrido: se puntúa por analogía con clínica, IA en experimentación [P-L11].",
    "cri": "Toxicidad y abandono de tratamiento sin soporte [P]. Grave.",
    "alc": "Institutos y unidades especializadas concentrados en Lima [E-B13]. Regional.",
    "sos": "Manejo de síntomas y cuidados paliativos presenciales [P]. Insustituible."
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     15,
     16
    ],
    "imp": [
     18,
     19,
     22
    ],
    "via": [
     23,
     24,
     27
    ]
   }
  },
  {
   "n": "Nutrición geriátrica y del envejecimiento",
   "nat": "atención individual",
   "o": "Emergente",
   "fn": 4,
   "fnx": "Tamizaje del adulto mayor · sarcopenia · texturas y disfagia · seguimiento en residencias",
   "pr": "Valorar → diagnosticar → tratar → seguir (adulto mayor)",
   "ev": "Plan de atención nutricional individualizado",
   "d": {
    "vol": 1,
    "amp": 2,
    "esc": 2,
    "rem": 2,
    "for": 2
   },
   "t": {
    "cre": 2,
    "nor": 2,
    "inv": 2,
    "dem": 4,
    "tec": 2
   },
   "i": {
    "cri": 3,
    "alc": 4
   },
   "sos": 4,
   "v": {
    "doc": 3,
    "cam": 3,
    "inf": 2,
    "dif": 4,
    "hab": 3
   },
   "fd": "Sin plaza con ese nombre [E].",
   "ft": "60+ = 14,3 % de la población en 2025 (~4,9 M) y superarán a los <15 en 2050; dependencia de vejez 23 → 41,5 %: el driver demográfico más sólido del campo [P-S]. Casi ausente en la oferta académica (nivel 4) [O-tabla].",
   "fi": "Hospitalización evitable por sarcopenia, disfagia y polifarmacia; muy alta sostenibilidad [P].",
   "modo": {
    "empleo": "Ningún aviso menciona geriatría o residencias [E]; tarea dentro del puesto clínico.",
    "negocio": "Consulta y residencias privadas; sin cifra."
   },
   "cod": "NUT-14",
   "barrido": "23-09-2026",
   "ac": 67,
   "just": {
    "vol": "Ningún aviso menciona geriatría o residencias [E]; tarea dentro del puesto clínico. Sin puestos.",
    "amp": "Consulta y residencias privadas sin cifra; sin dato directo en el barrido: se puntúa por analogía con oncológica (pocos empleadores especializados) [E-B13].",
    "esc": "Sin aviso [E]; se cubre fácil por ausencia de demanda diferenciada; no «sola» porque exige perfil clínico colegiado [E-9].",
    "rem": "Sin dato directo en el barrido: se puntúa por analogía con el promedio de carrera S/ 3 738–4 913 [E-8].",
    "for": "Sin norma ni segunda especialidad geriátrica [N-7][O-tabla]; la consulta clínica exige colegiatura [E-9]. Poco formal.",
    "cre": "Sin puesto [E]; el driver demográfico no se traduce en contratación. Estancado.",
    "nor": "Sin NTS geriátrica; NTS 103 cubre el hospital sin desagregar adulto mayor [N-2]. Anunciada/indirecta.",
    "inv": "Sin inversión identificada; residencias privadas sin cifra. Incipiente.",
    "dem": "60+ = 14,3 % (~4,9 M), superarán a los <15 en 2050; dependencia 23 → 41,5 % [P-S]. El driver demográfico más sólido: estructural.",
    "tec": "Sin dato directo en el barrido: se puntúa por analogía con clínica, IA en experimentación [P-L11].",
    "cri": "Hospitalización evitable por sarcopenia, disfagia y polifarmacia [P]. Alta, no grave.",
    "alc": "Envejecimiento de toda la población [P-S]. Nacional.",
    "sos": "Texturas, disfagia y seguimiento presencial en residencia [P]. Insustituible."
   },
   "panel": {
    "p": [
     2,
     4,
     2,
     3,
     4,
     3
    ],
    "med": 3,
    "icvi": 0.67,
    "cvr": 0.33,
    "ric": 2,
    "ac": 67,
    "ver": "Sin consenso · ronda 2",
    "com": {
     "P1": "Ningún aviso menciona geriatría o residencias hoy; el driver demográfico (60+ = 14,3 %) aún no genera puesto diferenciado. Tarea dentro de clínica a cinco años.",
     "P2": "60+ = 14,3 % y dependencia 23 → 41,5 % (dato INEI): el driver más sólido del campo. Sin plaza hoy; irrumpe como puesto hacia 2029–2031 (proyección).",
     "P3": "Sin NTS geriátrica ni segunda especialidad; NTS 103 no desagrega al adulto mayor. El curso de vida se cubre dentro de clínica; como especialidad diferenciada no es exigible.",
     "P4": "Mis camas se llenan de adultos mayores con disfagia y sarcopenia; la concesionaria produce texturas modificadas a diario. Lo necesito dentro del clínico.",
     "P5": "Disfagia, texturas y seguimiento presencial en residencia no tienen sustituto digital; el driver demográfico es el más sólido del campo.",
     "P6": "Nadie la formaliza en pregrado (curso en tres) y ningún empleador la convoca; el driver demográfico es nacional. Esencial como diferenciación futura, no como puesto hoy."
    }
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     15,
     16
    ],
    "imp": [
     18,
     19,
     22
    ],
    "via": [
     31,
     36,
     23,
     24,
     27
    ]
   },
   "vjust": {
    "dif": "0 de 18 la declaran como mención, línea o internado. 6 la dictan como curso suelto de dietoterapia del adulto mayor o geriátrica: UNFV, Wiener, UCV, U. de Chile, UCM y Javeriana Cali; el resto la integra en dietoterapia.",
    "hab": "El reglamento de la Ley 30490 exige nutricionista a disposición de todo centro residencial, de día y de noche, y lo integra al equipo multidisciplinario geriátrico. No se localizó segunda especialidad en nutrición geriátrica en universidades peruanas.",
    "norma": "DS 024-2021-MIMP (27-07-2021), Reglamento de la Ley 30490, arts. 14, 16.1.c, 16.2, 16.3.e y 32.c; NTS 103 (RM 665-2013/MINSA); Reglamento del Estatuto del CNP art. 3",
    "registro": "",
    "quienes": [],
    "doc": "Con evidencia (equipo parcial, 2–3): Mg. Yaquelin Eveling Calizaya Milla (estado nutricional de adultos mayores hospitalizados por COVID-19 en UCI, 2025), Lic. María Bernarda Collantes Cossio (test MNA en adultos mayores del Hospital Especializado San Juan de Dios, 2022), Mg. Mery Rodríguez Vásquez (programa 'Adultos mayores activos y saludables' y hemoglobina glicosilada, 2019). La EP declara 'geriatría' entre sus líneas. No se halló tesis sobre sarcopenia, disfagia o adaptación de texturas ni docente con formación geriátrica verificable.",
    "cam": "Convenios parciales con evidencia: hospitales con convenio docente-asistencial (Hospital de Chosica, 2023; Hospital de Emergencias de Ate Vitarte, 2022) que atienden población adulta mayor; acceso previo al Hospital Especializado San Juan de Dios (tesis 2022) y a programas comunitarios de adultos mayores (2019). No se identificó convenio con residencias geriátricas, Centros Integrales del Adulto Mayor (CIAM) ni Pensión 65.",
    "inf": "Estimado (mínimo). Laboratorio de Técnicas Dietéticas (adaptación de texturas posible) y Centro de Simulación Clínica; no se halló equipamiento para evaluación de sarcopenia (dinamometría, bioimpedancia) ni de disfagia."
   },
   "vdecl_estado": "estimado · por confirmar por la Dirección"
  },
  {
   "n": "Soporte nutricional parenteral y enteral",
   "nat": "atención individual",
   "o": "Establecida",
   "fn": 2,
   "fnx": "Cálculo y formulación · monitoreo metabólico",
   "pr": "Recibir interconsulta → formular → monitorear",
   "ev": "Prescripción de fórmula parenteral",
   "d": {
    "vol": 2,
    "amp": 2,
    "esc": 3,
    "rem": 3,
    "for": 4
   },
   "t": {
    "cre": 2,
    "nor": 3,
    "inv": 3,
    "dem": 3,
    "tec": 3
   },
   "i": {
    "cri": 4,
    "alc": 2
   },
   "sos": 4,
   "v": {
    "doc": 0,
    "cam": 0,
    "inf": 0,
    "dif": 0,
    "hab": 0
   },
   "fd": "Se contrata dentro del equipo de soporte del hospital [E-9].",
   "ft": "NTS 212 (RM 203-2024): la preparación de mezclas es competencia de farmacia (nivel 1 para esa tarea); el nutricionista integra el equipo (nivel 3) [N-7]. Prematuridad 22,1 % y cáncer como demanda derivada [P].",
   "fi": "Pacientes críticos; nicho estable [P].",
   "modo": {
    "empleo": "Sin puesto separado; Tarapoto admite «soporte crítico (mínimo 90 h)» como especialización dentro de la plaza [E-9].",
    "negocio": "No sostiene negocio propio."
   },
   "cod": "NUT-15",
   "barrido": "23-09-2026",
   "just": {
    "vol": "Sin puesto separado; Tarapoto admite «soporte crítico (mínimo 90 h)» como especialización [E-9]. Pocos puestos.",
    "amp": "Hospitales de 3.er nivel con UCI, 1 licenciado por 15 camas [N-2]. Pocos empleadores.",
    "esc": "Especialización de 90 h exigida [E-9] y estándar de 15 camas UCI por licenciado [N-2]: cuesta cubrir; sin vacantes desiertas.",
    "rem": "Sin dato directo en el barrido: se puntúa por analogía con la plaza 276 (S/ 5 342, sobre el promedio) [E-9][E-8].",
    "for": "NTS 212 integra al nutricionista colegiado en el equipo de soporte; NTS 103 [N-2][N-tabla]. Título y colegiatura.",
    "cre": "Nicho estable [P]. Estancado.",
    "nor": "NTS 212 (RM 203-2024) vigente [N-2]. Vigente; la preparación de mezclas asignada a farmacia impide 4.",
    "inv": "Compras hospitalarias de mezclas parenterales [P]. Sostenida.",
    "dem": "Prematuridad 22,1 % [P-L15] y cáncer [P-L10] como demanda derivada. Driver claro, no estructural.",
    "tec": "Sin dato directo en el barrido: se puntúa por analogía con la farmacia hospitalaria que prepara mezclas, en adopción [N-2].",
    "cri": "Pacientes críticos en UCI [P][N-2]. Grave.",
    "alc": "UCI de hospitales de 3.er nivel [N-2]. Local/institucional, no regional.",
    "sos": "Formulación y monitoreo metabólico en interconsulta [P]. Insustituible."
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     15,
     16
    ],
    "imp": [
     18,
     19,
     22
    ],
    "via": [
     23,
     24,
     27
    ]
   }
  },
  {
   "n": "Educación alimentaria escolar",
   "nat": "salud poblacional",
   "o": "Establecida",
   "fn": 3,
   "fnx": "Sesiones educativas · material didáctico · quiosco escolar",
   "pr": "Diagnosticar → educar → evaluar (escolares)",
   "ev": "Plan de sesión educativa",
   "d": {
    "vol": 2,
    "amp": 2,
    "esc": 1,
    "rem": 1,
    "for": 1
   },
   "t": {
    "cre": 1,
    "nor": 3,
    "inv": 2,
    "dem": 3,
    "tec": 3
   },
   "i": {
    "cri": 2,
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
   "fd": "No existe el puesto: la ejercen el docente y el programa [E].",
   "ft": "Ley 30021 / DS 017-2017-SA: quioscos y comedores escolares solo con alimentos saludables (nivel 3) [N-4]; PAE con 4,2 M escolares, componente educativo no desagregado [P-L4].",
   "fi": "Riesgo de absorción por docentes; efecto de octógonos anulado sin educación [P-L5].",
   "modo": {
    "empleo": "Docencia por horas (categoría «docente nutricionista» en Jooble); sin puesto en colegios [E-B15].",
    "negocio": "Complemento de ingresos; talleres."
   },
   "cod": "NUT-16",
   "barrido": "23-09-2026",
   "just": {
    "vol": "Docencia por horas («docente nutricionista» en Jooble); sin puesto en colegios [E-B15]. Pocos puestos.",
    "amp": "Colegios y programa PAE [E-B15][P-L4]; el docente lo ejerce. Pocos empleadores.",
    "esc": "Lo ejerce el docente y el programa [E]. Se cubre sola.",
    "rem": "Docencia por horas [E-B15]. Sin dato directo en el barrido: se puntúa por analogía con consulta online S/ 1 320 [E-6], bajo el promedio.",
    "for": "Sin exigencia de colegiatura en docencia por horas [E-B15]. Informal.",
    "cre": "Riesgo de absorción por docentes [P]; sin puesto [E]. Decrece.",
    "nor": "Ley 30021 / DS 017-2017-SA arts. 6-9: quioscos y comedores escolares saludables [N-4][N-tabla]. Vigente.",
    "inv": "Componente educativo del PAE no desagregado [P-L4]. Incipiente.",
    "dem": "Efecto de octógonos anulado sin educación [P-L5]; 4,2 M escolares [P-L4]. Driver claro.",
    "tec": "Sin dato directo en el barrido: se puntúa por analogía con material educativo digital en adopción, siguiendo las apps del campo [P-S].",
    "cri": "Educación preventiva sin daño directo [P]. Moderada.",
    "alc": "PAE con 4,2 M escolares [P-L4], pero el puesto no existe. Regional.",
    "sos": "Sesión educativa presencial, pero material y contenido automatizables [P]. Riesgo moderado."
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     17,
     15
    ],
    "imp": [
     22
    ],
    "via": [
     25,
     23
    ]
   }
  },
  {
   "n": "Nutrición personalizada y nutrigenómica",
   "nat": "evaluación",
   "o": "Emergente",
   "fn": 2,
   "fnx": "Interpretación del perfil · traducción a pauta",
   "pr": "Recibir perfil → interpretar → pautar",
   "ev": "Informe de interpretación nutrigenómica",
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
    "alc": 1
   },
   "sos": 2,
   "v": {
    "doc": 0,
    "cam": 0,
    "inf": 0,
    "dif": 0,
    "hab": 0
   },
   "fd": "Sin puestos en el país [E].",
   "ft": "Sin cifras peruanas; el CNP la lleva a su congreso; evidencia clínica limitada [P-S].",
   "fi": "Bajo alcance; emergente-especulativa, recomendable como electivo [P].",
   "modo": {
    "empleo": "Ningún aviso en el barrido [E].",
    "negocio": "Consulta privada de alto ingreso con laboratorio asociado."
   },
   "cod": "NUT-17",
   "barrido": "23-09-2026",
   "ac": 100,
   "just": {
    "vol": "Ningún aviso en las 15 búsquedas de empleo [E]; la prospectiva tampoco registra cifras peruanas [P-S]. Sin puestos, no «pocos».",
    "amp": "Sin dato directo en el barrido: se puntúa por analogía con la consulta privada de alto ingreso con laboratorio asociado, un solo tipo de empleador; ningún aviso lo confirma [E].",
    "esc": "Sin aviso ni señal de escasez [E]; UNMSM, UCV, UNSA y Wiener la dictan como curso [O-tabla], así que se cubre fácil; no «sola» porque exige laboratorio genético.",
    "rem": "Sin dato directo en el barrido: se puntúa por analogía con la consulta privada de alto ingreso; no 4 porque el único caso alto del campo (S/ 8 000) es atípico [E-6].",
    "for": "Sin norma que reconozca la nutrigenómica [N]; sin aviso que exija colegiatura [E]. Informal.",
    "cre": "Sin cifras peruanas; el CNP la lleva a su congreso pero la evidencia clínica es limitada [P-S]. Estancado; no decrece porque figura como electivo en 4 mallas [O-tabla].",
    "nor": "Sin norma ni anuncio normativo en el barrido [N]. Sin norma.",
    "inv": "Solo el CNP la lleva a congreso [P-S] y 4 universidades la ofrecen como curso [O-tabla]. Incipiente, no sostenida.",
    "dem": "Evidencia clínica limitada y sin cifras peruanas [P-S]. Driver débil; no «sin driver» porque la personalización acompaña a la comorbilidad 41,8 % [P-S].",
    "tec": "Evidencia clínica limitada [P-S]; emergente-especulativa [P]. En experimentación; no inmadura porque los laboratorios genéticos existen.",
    "cri": "Pautas dietéticas individuales sin daño irreversible documentado [P]. Moderada; no mínima porque orienta decisiones de salud.",
    "alc": "Consulta privada de alto ingreso sin cifras peruanas [P-S]. Pocas personas.",
    "sos": "Interpretación de perfiles y traducción a pauta automatizables por algoritmo; especulativa como especialidad [P]. Riesgo alto, no absorción total por requerir consejería."
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
     "P1": "Cero avisos en 15 búsquedas, sin cifras peruanas ni laboratorio contratante. No es puesto ni negocio en el país; a lo sumo electivo.",
     "P2": "Sin cifras peruanas ni puestos; evidencia clínica limitada (dato). No veo irrupción fechable antes de 2031: electivo de posgrado, no perfil de egreso.",
     "P3": "Sin norma, sin registro en el RNE y con evidencia clínica limitada. Indefendible como estándar del perfil de egreso; a lo sumo electivo.",
     "P4": "Ningún hospital ni concesionaria del país contrata por esto; sin laboratorio genético ni norma, es curso electivo, no competencia de egreso.",
     "P5": "Interpretación de perfiles genéticos y su traducción a pauta son algoritmizables; sin evidencia clínica ni puestos. Tecnología de laboratorio, no especialidad.",
     "P6": "Sin aviso en el país, sin laboratorio genético fuera de Lima; cuatro universidades la dictan como electivo. No pertenece al perfil de egreso."
    }
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     15,
     16
    ],
    "imp": [
     22
    ],
    "via": [
     23
    ]
   }
  },
  {
   "n": "Informática nutricional e IA aplicada",
   "nat": "transversal",
   "o": "Emergente",
   "fn": 0,
   "fnx": "Atraviesa las funciones de todas las especialidades",
   "pr": "Atraviesa varios procesos profesionales",
   "ev": "No entrega evidencia profesional propia",
   "d": {
    "vol": 1,
    "amp": 2,
    "esc": 3,
    "rem": 3,
    "for": 1
   },
   "t": {
    "cre": 4,
    "nor": 2,
    "inv": 3,
    "dem": 3,
    "tec": 2
   },
   "i": {
    "cri": 3,
    "alc": 4
   },
   "sos": 4,
   "v": {
    "doc": 0,
    "cam": 0,
    "inf": 0,
    "dif": 0,
    "hab": 0
   },
   "fd": "Sin puestos con ese nombre [E].",
   "ft": "Revisión peruana (Rebagliati, 12-2025) identifica cuatro usos hospitalarios de la IA; telenutrición; apps [P-L11]. Emergente fuerte, perfil híbrido.",
   "fi": "Tecnología habilitante: recurso de productividad del paso 2.2, no especialidad [método].",
   "modo": {
    "empleo": "No aparece en ninguna búsqueda ni aviso [E].",
    "negocio": "Complemento; no campo de ejercicio."
   },
   "cod": "NUT-18",
   "barrido": "23-09-2026",
   "just": {
    "vol": "No aparece en ninguna búsqueda ni aviso [E]; son tareas asistidas dentro de otros puestos. Sin puestos.",
    "amp": "Hospital piloto (Rebagliati) y apps de telenutrición [P-L11][P-S]. Pocos empleadores, ningún aviso.",
    "esc": "Requiere perfil híbrido nutrición-informática que ninguna malla forma [P][O-tabla]. Cuesta cubrir por ausencia de oferta; sin vacantes desiertas.",
    "rem": "Sin dato directo en el barrido: se puntúa por analogía con clínica hospitalaria (S/ 5 342, sobre el promedio) [E-9], por tratarse de un perfil híbrido escaso.",
    "for": "Sin norma ni colegiatura exigida [N]; ningún aviso [E]. Informal.",
    "cre": "Cuatro usos hospitalarios identificados (12-2025), telenutrición evaluada y apps con foto-cálculo [P-L11][P-S]. Emergente fuerte: crece mucho.",
    "nor": "Barreras de privacidad y validación local señaladas [P-L11]; sin norma propia [N]. Anunciada como necesidad, no vigente.",
    "inv": "Revisión Rebagliati [P-L11], telenutrición y apps [P-S]. Sostenida, sin monto comprometido.",
    "dem": "Tamizaje de riesgo e integración con historia clínica [P-L11]. Driver claro; no estructural porque depende de la adopción hospitalaria.",
    "tec": "Barreras de datos, privacidad y validación local [P-L11]. En experimentación, no en adopción.",
    "cri": "Soporte a decisiones clínicas [P-L11]: un error se propaga, pero la decisión sigue siendo del clínico. Alta, no grave.",
    "alc": "Atraviesa todas las especialidades [método]; telenutrición y apps de alcance nacional [P-S]. Nacional.",
    "sos": "Construye la automatización que sustituye a las demás [P]. Insustituible."
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     15,
     16
    ],
    "imp": [
     22
    ],
    "via": [
     23
    ]
   }
  },
  {
   "n": "Dietética hospitalaria operativa",
   "nat": "gestión de servicios",
   "o": "En extinción",
   "fn": 3,
   "fnx": "Programación de raciones · despacho · control diario",
   "pr": "Recibir ciclo de menús → producir → despachar",
   "ev": "Parte de producción diaria",
   "d": {
    "vol": 3,
    "amp": 2,
    "esc": 1,
    "rem": 1,
    "for": 1
   },
   "t": {
    "cre": 1,
    "nor": 1,
    "inv": 2,
    "dem": 1,
    "tec": 4
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
   "fd": "Puesto de auxiliar sin colegiatura, que compite con el titulado hacia abajo [E-7].",
   "ft": "Planificación, cálculo y asignación de dietas automatizables; converge con servicios de alimentación [P].",
   "fi": "Contracción como puesto de cálculo [P].",
   "modo": {
    "empleo": "«Auxiliar de Nutrición… Jornada: Interdiario» en Maison de Santé, Javier Prado y Sodexo; secundaria o técnico, 6 meses de experiencia, S/ 1 200 + movilidad [E-7][E-13].",
    "negocio": "No sostiene negocio propio."
   },
   "cod": "NUT-19",
   "barrido": "23-09-2026",
   "ac": 100,
   "just": {
    "vol": "Auxiliares en Maison de Santé, Javier Prado y Sodexo con jornada interdiaria [E-7][E-13], parte de los 4 994 del agregador [E-6]. Volumen medio; no alto por ser auxiliar.",
    "amp": "Clínicas privadas y concesionarias [E-7][E-13]. Pocos empleadores.",
    "esc": "Secundaria o técnico y 6 meses de experiencia [E-7]. Se cubre sola.",
    "rem": "S/ 1 200 + movilidad [E-7], la mitad del inicio de carrera S/ 2 323 [E-2]. Bajo el promedio.",
    "for": "Secundaria o técnico, sin colegiatura [E-7]. Informal.",
    "cre": "Planificación y cálculo automatizables; converge con servicios de alimentación [P]. Decrece.",
    "nor": "Sin norma que reconozca el puesto de auxiliar [N]. Sin norma.",
    "inv": "Sin inversión identificada más allá de la contratación auxiliar [E-7]. Incipiente.",
    "dem": "Sin driver: contracción como puesto de cálculo [P]. Sin driver.",
    "tec": "Planificación, cálculo y asignación de dietas automatizables [P]. Adoptada y estable.",
    "cri": "Despacho de raciones según ciclo de menús definido por otro [E-7]. Moderada.",
    "alc": "Clínicas de Lima y concesionarias [E-7][E-13]. Alcance local.",
    "sos": "Planificación y cálculo automatizables; contracción [P]. La absorbe la IA."
   },
   "panel": {
    "p": [
     1,
     1,
     1,
     2,
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
     "P1": "Puesto de auxiliar con secundaria o técnico, S/ 1 200 sin colegiatura; compite con el titulado hacia abajo y se automatiza. No forma perfil profesional.",
     "P2": "Puesto auxiliar sin colegiatura a S/ 1 200 (dato); cálculo y asignación de dietas automatizados antes de 2028 (proyección). En extinción: no pertenece al perfil del titulado.",
     "P3": "Puesto auxiliar con secundaria o técnico y sin colegiatura; no es función profesional de Ley 30188. Formar para él degrada el perfil que la norma reserva al licenciado.",
     "P4": "Ese puesto lo cubro con auxiliares técnicos a S/ 1 200; el licenciado debe saber producir y despachar para supervisar, pero no formarse para ejecutarlo.",
     "P5": "Planificación, cálculo y asignación de dietas ya están automatizados; puesto auxiliar sin colegiatura en contracción. No pertenece al perfil de egreso.",
     "P6": "Puesto de auxiliar con secundaria y S/ 1 200 en clínicas de Lima y concesionarias; formar al titulado para esto lo empuja hacia abajo."
    }
   },
   "refs": {
    "dem": [
     11,
     12,
     13
    ],
    "ten": [
     17,
     15
    ],
    "imp": [
     22
    ],
    "via": [
     25,
     23
    ]
   }
  }
 ],
 "refs": [
  {
   "id": 1,
   "t": "Ministerio de Salud del Perú. (2026). <i>Norma Técnica de Salud NTS 250-MINSA/DGAIN-2026: atención nutricional en establecimientos de salud</i>. Diario Oficial El Peruano.",
   "u": "https://www.gob.pe/minsa"
  },
  {
   "id": 2,
   "t": "Instituto Nacional de Estadística e Informática. (2025). <i>Encuesta Nacional de Hogares: empleo profesional en el sector salud 2023–2025</i>. INEI.",
   "u": "https://www.inei.gob.pe"
  },
  {
   "id": 3,
   "t": "Organización Internacional del Trabajo. (2024). <i>Clasificación Internacional Uniforme de Ocupaciones (CIUO-08): nutricionistas y dietistas</i>. OIT.",
   "u": "https://ilostat.ilo.org"
  },
  {
   "id": 4,
   "t": "Colegio de Nutricionistas del Perú. (2025). <i>Registro nacional de colegiados y ámbitos de ejercicio profesional</i>. CNP.",
   "u": "https://www.cnp.org.pe"
  },
  {
   "id": 5,
   "t": "Congreso de la República del Perú. (2021). <i>Ley 30021 de promoción de la alimentación saludable y su reglamento de advertencias publicitarias</i>.",
   "u": "https://www.gob.pe"
  },
  {
   "id": 6,
   "t": "Academy of Nutrition and Dietetics. (2024). <i>Nutrition care process and terminology (NCPT) reference manual</i> (7.ª ed.).",
   "u": "https://www.ncpro.org"
  },
  {
   "id": 7,
   "t": "Comité Olímpico Internacional. (2023). Consenso sobre deficiencia energética relativa en el deporte (REDs). <i>British Journal of Sports Medicine, 57</i>(17), 1073–1097.",
   "u": "https://bjsm.bmj.com"
  },
  {
   "id": 8,
   "t": "SINEACE. (2024). <i>Modelo de acreditación para programas de estudios de educación superior universitaria</i>.",
   "u": "https://www.gob.pe/sineace"
  },
  {
   "id": 9,
   "t": "Ministerio de Economía y Finanzas. (2025). <i>Programa presupuestal 0001 — Articulado nutricional: seguimiento de la ejecución</i>. MEF.",
   "u": "https://www.mef.gob.pe"
  },
  {
   "id": 10,
   "t": "World Health Organization. (2025). <i>Global report on the nutrition workforce: projections to 2035</i>. WHO.",
   "u": "https://www.who.int"
  },
  {
   "id": 11,
   "t": "Convocatorias de Trabajo. (2026). <i>Trabajos para nutricionistas 2026: empleos en instituciones públicas del Perú</i>.",
   "u": "https://www.convocatoriasdetrabajo.com/ofertas-de-empleo-para-NUTRICIONISTAS-41.html"
  },
  {
   "id": 12,
   "t": "La República. (2026, 5 de agosto). <i>¿Cuál es el salario promedio de un nutricionista en el Perú en 2026?</i>",
   "u": "https://especial.larepublica.pe/apunte-educativo/desarrollo-profesional/2026/08/05/cuanto-gana-un-nutricionista-en-peru-en-2026-descubre-los-sueldos-actualizados-segun-portal-especializado-351084"
  },
  {
   "id": 13,
   "t": "Colegio de Nutricionistas del Perú. (2026, 13 de abril). <i>CNP alerta sobre la reducción de plazas SERUMS para nutricionistas</i>. La Noticia.",
   "u": "https://lanoticia.com.pe/colegio-de-nutricionistas-del-peru-alerta-sobre-la-reduccion-de-plazas-serums-para-nutricionistas/"
  },
  {
   "id": 14,
   "t": "Jooble. (2026). <i>Nutricionista: ofertas de trabajo en Perú</i>.",
   "u": "https://pe.jooble.org/trabajo-nutricionista"
  },
  {
   "id": 15,
   "t": "Instituto Nacional de Estadística e Informática. (2025). <i>Indicadores de Resultados de los Programas Presupuestales, ENDES Primer Semestre 2025</i>.",
   "u": "https://intranet.mesadeconcertacion.org.pe/storage/documentos/2025-09-26/ppt-endes-ppr-2025-i-sem-2.pdf"
  },
  {
   "id": 16,
   "t": "Infobae. (2026, 18 de mayo). <i>Desnutrición crónica y anemia infantil en Perú: cifras estancadas, según la ENDES 2025</i>.",
   "u": "https://www.infobae.com/peru/2026/05/18/desnutricion-cronica-y-anemia-infantil-en-peru-cifras-estancadas-y-avances-minimos-segun-la-endes-2025/"
  },
  {
   "id": 17,
   "t": "RPP Noticias. (2025, 16 de diciembre). <i>Desayunos escolares 2026: qué cambios se hacen</i> (PAE, S/ 2 636,6 M).",
   "u": "https://rpp.pe/peru/actualidad/desayunos-escolares-2026-que-cambios-se-hacen-para-garantizar-la-adecuada-alimentacion-de-los-ninos-noticia-1668136"
  },
  {
   "id": 18,
   "t": "Altavoz. (2025, 17 de julio). <i>23 mil pacientes deberían pasar por hemodiálisis</i> (ERC en el Perú).",
   "u": "https://www.altavoz.pe/locales/23-mil-pacientes-deberian-pasar-por-hemodialisis-para-vivir-en-un-pais-donde-tres-millones-de-peruanos-sufren-enfermedad-renal-cronica/"
  },
  {
   "id": 19,
   "t": "Vida y Futuro. (2026, 4 de febrero). <i>Cáncer en el Perú: más de 80 000 nuevos casos</i>.",
   "u": "https://vidayfuturo.pe/cancer-en-el-peru-se-estiman-mas-de-80-000-nuevos-casos-para-el-2026/"
  },
  {
   "id": 20,
   "t": "Mercado Fitness. (2024, 27 de noviembre). <i>Radiografía del sector de gimnasios en Perú</i>.",
   "u": "https://mercadofitness.com/mercado-fitness-lanza-radiografia-gimnasios-en-peru/"
  },
  {
   "id": 21,
   "t": "Informes de Expertos. (2026). <i>Mercado de snacks saludables en Perú: análisis 2035</i>.",
   "u": "https://www.informesdeexpertos.com/informes/mercado-de-snacks-saludables-en-peru"
  },
  {
   "id": 22,
   "t": "Arévalo Gerónimo, M. P., et al. (2025). Inteligencia artificial en nutrición hospitalaria. <i>Revista Cuidado y Salud Pública, 5</i>(2).",
   "u": "https://www.cuidadoysaludpublica.org.pe/index.php/cuidadoysaludpublica/article/view/160"
  },
  {
   "id": 23,
   "t": "Ministerio de Salud. (2013). <i>RM N.º 665-2013/MINSA. NTS N.º 103, Unidad Productora de Servicios de Salud de Nutrición y Dietética</i>.",
   "u": "https://cnp.org.pe/wp-content/uploads/2016/11/NORMA-TÉCNICA-DE-SALUD-DE-LA-UNIDAD-PRODUCTORA-DE-SERVICIOS-DE-SALUD-DE-NUTRICIÓN-Y-DIETÉTICA.pdf"
  },
  {
   "id": 24,
   "t": "Ministerio de Salud. (2024). <i>RM N.º 251-2024/MINSA. NTS N.º 213, prevención y control de la anemia</i>.",
   "u": "https://busquedas.elperuano.pe/dispositivo/NL/2277624-1"
  },
  {
   "id": 25,
   "t": "Presidencia de la República. (2017). <i>DS N.º 017-2017-SA, Reglamento de la Ley 30021</i>.",
   "u": "https://vlex.com.pe/vid/decreto-supremo-n-017-812063497"
  },
  {
   "id": 26,
   "t": "Universidad San Ignacio de Loyola. (2026, 27 de marzo). <i>Malla curricular de Nutrición y Dietética en USIL</i>.",
   "u": "https://blogs.usil.edu.pe/facultad-ciencias-de-salud/nutricion-y-dietetica/malla-curricular-nutricion-cursos-plan-estudios"
  },
  {
   "id": 27,
   "t": "Universidad Nacional Mayor de San Marcos, Facultad de Medicina. (2024). <i>Plan Curricular 2024, Escuela Profesional de Nutrición</i>.",
   "u": "https://medicina.unmsm.edu.pe/wp-content/uploads/2021/06/RESOLUCION-RECTORAL-002757-2024-R-ANEXO.pdf"
  },
  {
   "id": 28,
   "t": "Congreso de la República. (2014). Ley N.º 30188, Ley del Ejercicio Profesional del Nutricionista [consultado 24-09-2026]",
   "u": "https://cnp.org.pe/wp-content/uploads/2017/12/LEYDELNUTRICIONISTA.pdf"
  },
  {
   "id": 29,
   "t": "Colegio de Nutricionistas del Perú. (2018). Reglamento del Estatuto del CNP [consultado 24-09-2026]",
   "u": "https://cnp.org.pe/wp-content/uploads/2018/11/REGLAMENTO-DEL-ESTATUTO-CNP.pdf"
  },
  {
   "id": 30,
   "t": "Congreso de la República. (2014). Ley N.º 30188 [consultado 24-09-2026]",
   "u": "https://www.elperulegal.com/2014/05/ley-n-30188.html"
  },
  {
   "id": 31,
   "t": "UNFV, Facultad de Medicina Hipólito Unanue. (s. f.). Plan de estudios – Nutrición [PDF] [consultado 24-09-2026]",
   "u": "https://www.unfv.edu.pe/transparencia_universitaria/informacion_academica/plan_estudio/pregrado/fmhu_nut_p.pdf"
  },
  {
   "id": 32,
   "t": "Universidad Le Cordon Bleu. (2024). Resolución 015-CU-ULCB-2024 – Planes de pregrado, Anexo 7 Nutrición y Dietética [PDF] [consultado 24-09-2026]",
   "u": "https://ulcb.edu.pe/wp-content/uploads/2026/03/RESOLUCION-015-CU-ULCB-2024-PLANES-PREGRADO-Modificados.pdf"
  },
  {
   "id": 33,
   "t": "Universidad Científica del Sur, Formación Continua. (s. f.). Nutrición Bariátrica [posgrado/educación continua, no pregrado] [consultado 24-09-2026]",
   "u": "https://formacioncontinua.cientifica.edu.pe/nutricion/nutricion-bariatrica"
  },
  {
   "id": 34,
   "t": "IETSI-EsSalud. (2020). Guía de práctica clínica para el manejo quirúrgico de la obesidad en adultos [consultado 24-09-2026]",
   "u": "https://gpc-peru.com/gpcmqo"
  },
  {
   "id": 35,
   "t": "Universidad Norbert Wiener. (2023). Nutrición y Dietética – brochure con malla 2024-I [PDF] [consultado 24-09-2026]",
   "u": "https://www.uwiener.edu.pe/wp-content/uploads/2023/09/Brochure_Nutricion_Set2023-min.pdf"
  },
  {
   "id": 36,
   "t": "MIMP. (2021). DS N.º 024-2021-MIMP, Reglamento de la Ley N.º 30490, Ley de la Persona Adulta Mayor [consultado 24-09-2026]",
   "u": "https://www2.congreso.gob.pe/sicr/cendocbib/con5_uibd.nsf/FCCDF8DE45F85B1A052586A200770470/$FILE/2.Decreto_Supremo_aprueba_Reglamento_Ley_30490.pdf"
  }
 ],
 "desc": {
  "Nutrición clínica hospitalaria": "Atiende al paciente internado y ambulatorio: valora, diagnostica, prescribe el tratamiento nutricional y lo sigue hasta el alta.",
  "Gestión de servicios de alimentación e inocuidad": "Dirige el servicio que alimenta a pacientes, trabajadores o escolares: planifica el menú, estandariza, asegura la inocuidad y audita.",
  "Nutrición comunitaria y salud pública": "Interviene sobre la nutrición de una población: diagnostica, planifica el programa, ejecuta y mide el impacto.",
  "Nutrición pediátrica y materna": "Atiende al niño y a la gestante en el primer nivel: crecimiento, anemia, lactancia y alimentación complementaria.",
  "Nutrición deportiva y del rendimiento": "Acompaña al deportista y a la persona activa: periodiza la alimentación por fase de temporada y ajusta el rendimiento.",
  "Evaluación nutricional avanzada y composición corporal": "Mide e interpreta la composición corporal con protocolos e instrumentos, y devuelve un informe a quien deriva.",
  "Desarrollo y reformulación de productos alimentarios": "Reformula el perfil nutricional de la cartera de la industria y sustenta su rotulado y registro sanitario.",
  "Nutrición en obesidad y cirugía bariátrica": "Atiende a la persona con obesidad y al paciente pre y posbariátrico: manejo de peso, deficiencias y conducta alimentaria.",
  "Nutrición ocupacional y salud en minería": "Atiende la alimentación y el estado nutricional del trabajador en campamentos y programas de salud ocupacional.",
  "Nutrición en programas sociales del Estado": "Gestiona el componente alimentario y nutricional de programas del MIDIS y gobiernos locales por unidad territorial.",
  "Consultoría privada y nutrición online": "Atiende por consulta particular presencial o virtual y coaching remoto.",
  "Nutrición renal y diálisis": "Atiende al paciente con enfermedad renal crónica en prevención, diálisis y trasplante.",
  "Nutrición oncológica": "Atiende al paciente en tratamiento oncológico: manejo de síntomas, soporte y seguimiento post-tratamiento.",
  "Nutrición geriátrica y del envejecimiento": "Atiende al adulto mayor: desnutrición, sarcopenia, disfagia y adaptación de texturas en residencias y consulta.",
  "Soporte nutricional parenteral y enteral": "Formula y monitorea la mezcla parenteral y el soporte enteral cuando el equipo clínico lo interconsulta.",
  "Educación alimentaria escolar": "Dicta sesiones educativas en la escuela y articula con el quiosco escolar y las familias.",
  "Nutrición personalizada y nutrigenómica": "Interpreta perfiles genéticos y los traduce a pautas dietéticas individuales.",
  "Informática nutricional e IA aplicada": "Automatiza tamizaje, cálculo y registro dentro del trabajo de las demás especialidades.",
  "Dietética hospitalaria operativa": "Programa y despacha las raciones según el ciclo de menús que define el servicio."
 },
 "natj": {
  "atención individual": "Ambas atienden a la persona con el mismo proceso clínico y las contrata el mismo servicio.",
  "gestión de servicios": "Ambas se ejercen dentro del mismo servicio de alimentación y el aviso las pide juntas.",
  "salud poblacional": "Ambas intervienen sobre la misma población desde el mismo programa presupuestal.",
  "rendimiento": "Ambas acompañan a la persona activa en el mismo entorno deportivo.",
  "producto": "Ambas trabajan sobre la cartera de producto de la industria alimentaria.",
  "evaluación": "Ambas producen informes de evaluación para un tercero que deriva."
 },
 "puesto": {
  "Nutrición clínica hospitalaria": 4,
  "Gestión de servicios de alimentación e inocuidad": 4,
  "Nutrición comunitaria y salud pública": 4,
  "Nutrición pediátrica y materna": 2,
  "Nutrición deportiva y del rendimiento": 3,
  "Evaluación nutricional avanzada y composición corporal": 2,
  "Desarrollo y reformulación de productos alimentarios": 3,
  "Nutrición en obesidad y cirugía bariátrica": 3,
  "Nutrición ocupacional y salud en minería": 4,
  "Nutrición en programas sociales del Estado": 4,
  "Consultoría privada y nutrición online": 2,
  "Nutrición renal y diálisis": 2,
  "Nutrición oncológica": 2,
  "Nutrición geriátrica y del envejecimiento": 2,
  "Soporte nutricional parenteral y enteral": 2,
  "Educación alimentaria escolar": 2,
  "Nutrición personalizada y nutrigenómica": 1,
  "Informática nutricional e IA aplicada": 1,
  "Dietética hospitalaria operativa": 3
 },
 "emprende": {
  "Nutrición clínica hospitalaria": 3,
  "Gestión de servicios de alimentación e inocuidad": 4,
  "Nutrición comunitaria y salud pública": 1,
  "Nutrición pediátrica y materna": 3,
  "Nutrición deportiva y del rendimiento": 4,
  "Evaluación nutricional avanzada y composición corporal": 3,
  "Desarrollo y reformulación de productos alimentarios": 3,
  "Nutrición en obesidad y cirugía bariátrica": 4,
  "Nutrición ocupacional y salud en minería": 3,
  "Nutrición en programas sociales del Estado": 1,
  "Consultoría privada y nutrición online": 4,
  "Nutrición renal y diálisis": 2,
  "Nutrición oncológica": 2,
  "Nutrición geriátrica y del envejecimiento": 3,
  "Soporte nutricional parenteral y enteral": 1,
  "Educación alimentaria escolar": 2,
  "Nutrición personalizada y nutrigenómica": 3,
  "Informática nutricional e IA aplicada": 2,
  "Dietética hospitalaria operativa": 1
 },
 "plan": [
  {
   "n": "Nutrición y salud",
   "np": "Competencia 1 · plan vigente",
   "d": "Propone planes de intervención basados en el proceso de atención nutricional de acuerdo a la situación fisiopatológica, sociocultural, económica y sanitaria de la persona para fomentar cambios en el estilo de vida, promover salud y prevenir la enfermedad.",
   "caps": [
    "Evaluación nutricional",
    "Diagnóstico nutricional",
    "Intervención nutricional",
    "Monitoreo nutricional"
   ],
   "cd": [
    "Argumenta el proceso de evaluación nutricional en función a los métodos y herramientas seleccionados para la recolección de datos requeridos considerando la situación fisiopatológica.",
    "Argumenta el diagnóstico nutricional considerando la definición del problema, su etiología, los signos y síntomas para proponer estrategias de intervención nutricional.",
    "Elabora un plan de intervención nutricional oportuno acorde a la situación fisiopatológica, sociocultural, económica y sanitaria de la persona para modificar positivamente conductas relacionadas a la salud y nutrición.",
    "Valora los resultados de la intervención nutricional durante el proceso de seguimiento a la persona, identificando de forma oportuna los cambios positivos o negativos para hacer los ajustes necesarios, alcanzar los objetivos y mejorar el estado de salud y nutrición."
   ]
  },
  {
   "n": "Gestión en nutrición y alimentos",
   "np": "Competencia 2 · plan vigente",
   "d": "Gestiona servicios de nutrición y alimentos, asegurando procesos de calidad y la incorporación de tecnologías emergentes y prácticas innovadoras que contribuyan a la seguridad alimentaria, aplicadas de forma ética y sostenible, y alineadas con los estándares de seguridad alimentaria y las necesidades nutricionales de la población.",
   "caps": [
    "Gestión de servicios de nutrición y alimentación",
    "Incorporación de tecnologías emergentes",
    "Seguridad alimentaria y sostenibilidad"
   ],
   "cd": [
    "Gestiona eficientemente servicios de nutrición y alimentación, enfocándose en la calidad y la innovación adaptados a las nuevas tendencias del mercado y necesidades de la población.",
    "Implementa y adapta tecnologías emergentes y prácticas innovadoras en la gestión de la nutrición y los alimentos.",
    "Asegura que los servicios y productos cumplan con los estándares de seguridad alimentaria y sostenibilidad, respetando el medio ambiente y las necesidades nutricionales."
   ]
  },
  {
   "n": "Gestión de la atención nutricional integral de la comunidad",
   "np": "Competencia 3 · plan vigente",
   "d": "Diseña, implementa y evalúa programas y políticas de salud pública en nutrición, integrando equipos interdisciplinarios, con el propósito de prevenir o controlar eficazmente y con evidencia científica la problemática alimentario nutricional que afecta la salud de diversas poblaciones, actuando de manera ética, inclusiva, respetando la diversidad cultural y las necesidades específicas de las comunidades.",
   "caps": [
    "Diseño y evaluación de programas de salud pública",
    "Gestión de problemas alimentario-nutricionales"
   ],
   "cd": [
    "Desarrolla y evalúa programas y políticas de nutrición para la salud pública, utilizando enfoques basados en la evidencia y tecnologías de la información.",
    "Identifica y aborda problemas alimentarios y nutricionales en diferentes poblaciones, con un enfoque en la prevención y el control."
   ]
  }
 ],
 "eq": {
  "Nutrición clínica hospitalaria": {
   "c": 0,
   "k": null,
   "t": "comp"
  },
  "Nutrición en obesidad y cirugía bariátrica": {
   "c": 0,
   "k": null,
   "t": "amb"
  },
  "Nutrición geriátrica y del envejecimiento": {
   "c": 0,
   "k": null,
   "t": "amb"
  },
  "Nutrición pediátrica y materna": {
   "c": 0,
   "k": null,
   "t": "amb"
  },
  "Nutrición comunitaria y salud pública": {
   "c": 1,
   "k": null,
   "t": "comp"
  },
  "Nutrición ocupacional y salud en minería": {
   "c": 1,
   "k": null,
   "t": "amb"
  },
  "Nutrición en programas sociales del Estado": {
   "c": 1,
   "k": null,
   "t": "amb"
  },
  "Gestión de servicios de alimentación e inocuidad": {
   "c": 2,
   "k": null,
   "t": "comp"
  }
 },
 "sinEncaje": [],
 "capSinEsp": [],
 "arq": [
  {
   "alias": "Atención nutricional",
   "n": "Conducción del proceso de atención nutricional de la persona",
   "tipo": "atención",
   "dec": "derivada",
   "def": "Conducir la atención nutricional de la persona sana o enferma a lo largo del ciclo de vida —tamizar, valorar, diagnosticar, prescribir el tratamiento dietoterápico o de soporte, seguir y aconsejar al alta— en hospitalización, consulta ambulatoria presencial o virtual, primer nivel y residencias, aplicando el proceso de atención nutricional, el registro en historia clínica y la interconsulta con el equipo de salud, para recuperar o mantener el estado nutricional y responder por el resultado ante el paciente, su familia y la institución.",
   "evid": "Plan de atención nutricional individualizado registrado en la historia clínica: valoración, diagnóstico, prescripción, seguimiento documentado y consejería al alta o al cierre del caso.",
   "nivel": "Autonomía plena en el paciente ambulatorio y hospitalizado de complejidad estándar, en el adulto mayor, el niño y la gestante; el soporte enteral en paciente crítico y el manejo pre y posbariátrico se conducen con interconsulta del equipo tratante.",
   "caps": [
    {
     "a": "Valorar",
     "n": "Valoración del estado nutricional",
     "e": "",
     "d": "Capacidad para tamizar y valorar el estado nutricional de la persona con antropometría, bioquímica, examen clínico y evaluación dietética, adaptando técnicas e instrumentos a la edad, la condición clínica y el escenario de atención, con rigor en la medición, respeto por la persona y registro veraz."
    },
    {
     "a": "Diagnosticar",
     "n": "Diagnóstico nutricional",
     "e": "",
     "d": "Capacidad para formular el diagnóstico nutricional a partir de la valoración, identificando el problema, su etiología y sus signos en personas de distinta edad y patología, integrando la interconsulta y la evidencia científica, con juicio clínico, pensamiento crítico y responsabilidad por la decisión que toma."
    },
    {
     "a": "Prescribir",
     "n": "Prescripción del tratamiento nutricional",
     "e": "",
     "d": "Capacidad para prescribir e implementar el tratamiento nutricional —dietoterapia, soporte enteral, manejo de peso, corrección de deficiencias, adaptación de texturas— ajustado al diagnóstico, la cultura y los recursos del paciente en cada escenario, movilizando fisiopatología, dietoterapia, ética profesional y comunicación con el equipo y la familia."
    },
    {
     "a": "Seguir",
     "n": "Seguimiento del caso y consejería nutricional",
     "e": "",
     "d": "Capacidad para monitorear la respuesta al tratamiento, reajustar la prescripción, educar al paciente y a su familia y cerrar el caso con consejería al alta, en consulta presencial o virtual, hospital o residencia, con constancia, empatía y compromiso con la adherencia y el resultado."
    }
   ],
   "esp": [
    {
     "n": "Nutrición clínica hospitalaria",
     "eq": "competencia",
     "cap": "",
     "nota": "Ejecuta el ciclo completo valorar-diagnosticar-tratar-seguir y entrega la misma evidencia: plan individualizado en historia clínica."
    },
    {
     "n": "Nutrición en obesidad y cirugía bariátrica",
     "eq": "ambito",
     "cap": "",
     "nota": "Mismo proceso y misma rúbrica del plan individualizado; cambia solo el objeto: persona con obesidad o pre y posbariátrica."
    },
    {
     "n": "Nutrición geriátrica y del envejecimiento",
     "eq": "ambito",
     "cap": "",
     "nota": "Mismo proceso y evidencia; el objeto es el adulto mayor con sarcopenia y disfagia; sin puesto propio en el mercado."
    },
    {
     "n": "Nutrición pediátrica y materna",
     "eq": "ambito",
     "cap": "",
     "nota": "Proceso y evidencia individuales (plan por niño o gestante en CRED); el mercado la admite dentro de la plaza clínica."
    }
   ],
   "contraste": {
    "dec": "reformular",
    "defFinal": "Conducir la atención nutricional de la persona sana o enferma a lo largo del ciclo de vida —tamizar, valorar, diagnosticar, prescribir el tratamiento dietoterápico o de soporte, seguir y aconsejar al alta— en hospitalización, consulta ambulatoria presencial o virtual, primer nivel y residencias, aplicando el proceso de atención nutricional, el registro en historia clínica y la interconsulta con el equipo de salud, para recuperar o mantener el estado nutricional y responder por el resultado ante el paciente, su familia y la institución.",
    "gat": "Gatillo 1: «Nutrición y salud» designa un tema, no el proceso. Gatillo 5: la vigente solo «propone planes» para promover salud y prevenir enfermedad; la clínica hospitalaria —equivalencia— y los ámbitos bariátrico, geriátrico y pediátrico-materno exigen tamizar, prescribir dietoterapia o soporte, seguir en hospital, residencia o consulta virtual y aconsejar al alta, que el plan no recogía.",
    "antes": "«Nutrición y salud»: propone planes de intervención basados en el proceso de atención nutricional según la situación fisiopatológica, sociocultural, económica y sanitaria de la persona para fomentar cambios en el estilo de vida, promover salud y prevenir la enfermedad.",
    "caps": [
     {
      "n": "Valoración del estado nutricional",
      "e": "reformulada",
      "de": "Evaluación nutricional (Competencia 1)"
     },
     {
      "n": "Diagnóstico nutricional",
      "e": "conservada",
      "de": "Diagnóstico nutricional (Competencia 1)"
     },
     {
      "n": "Prescripción del tratamiento nutricional",
      "e": "reformulada",
      "de": "Intervención nutricional (Competencia 1)"
     },
     {
      "n": "Seguimiento del caso y consejería nutricional",
      "e": "reformulada",
      "de": "Monitoreo nutricional (Competencia 1)"
     }
    ],
    "noContinuan": [],
    "situacion": "Coinciden en proceso y en capacidades"
   }
  },
  {
   "alias": "Intervención poblacional",
   "n": "Intervención nutricional en salud pública y poblaciones",
   "tipo": "atención",
   "dec": "derivada",
   "def": "Intervenir sobre el estado nutricional de una población —comunidad, unidad territorial, colectivo de trabajadores— diagnosticando su situación con línea de base y vigilancia, diseñando y ejecutando el programa y evaluando su impacto, en el marco de la salud pública, los programas presupuestales del Estado y la salud ocupacional, con articulación intersectorial y capacitación de agentes, para reducir la anemia, la desnutrición, el exceso de peso y el riesgo cardiometabólico y rendir cuenta del resultado con indicadores.",
   "evid": "Plan de intervención poblacional con línea de base, programa ejecutado e informe de evaluación con indicadores de proceso y de impacto sobre la población atendida.",
   "nivel": "Autonomía en el diagnóstico, la ejecución y el monitoreo de la intervención en su comunidad, unidad territorial o campamento; el diseño de programas presupuestales y la evaluación de impacto se conducen dentro de un equipo con supervisión técnica.",
   "caps": [
    {
     "a": "Diagnosticar",
     "n": "Diagnóstico nutricional poblacional",
     "e": "",
     "d": "Capacidad para levantar la línea de base y el diagnóstico nutricional de una población con vigilancia, indicadores epidemiológicos y tamizaje del riesgo, adaptando los instrumentos a comunidades, unidades territoriales o colectivos laborales, con rigor estadístico, sensibilidad cultural y compromiso con la equidad."
    },
    {
     "a": "Planificar",
     "n": "Diseño de la intervención nutricional poblacional",
     "e": "",
     "d": "Capacidad para diseñar el programa o la intervención nutricional con objetivos, metas, actividades, presupuesto e indicadores a partir del diagnóstico, dentro de la lógica de los programas presupuestales, la salud ocupacional o la cooperación, con pensamiento estratégico, gestión pública y responsabilidad social."
    },
    {
     "a": "Intervenir",
     "n": "Ejecución de la intervención nutricional poblacional",
     "e": "",
     "d": "Capacidad para ejecutar la intervención mediante consejería, educación alimentaria, capacitación de agentes comunitarios y articulación con actores locales y sectoriales, adaptándola al territorio y a su cultura, con liderazgo, comunicación efectiva, trabajo intersectorial y respeto por la comunidad."
    },
    {
     "a": "Evaluar",
     "n": "Monitoreo y evaluación del impacto de la intervención",
     "e": "",
     "d": "Capacidad para monitorear el programa, medir su impacto contra la línea de base y reportar resultados con indicadores a la autoridad o al empleador, en contextos públicos, comunitarios y laborales, con honestidad en el dato, pensamiento crítico y orientación a la mejora de la intervención."
    }
   ],
   "esp": [
    {
     "n": "Nutrición comunitaria y salud pública",
     "eq": "competencia",
     "cap": "",
     "nota": "Ejecuta el ciclo completo diagnosticar-planificar-intervenir-evaluar y entrega el plan poblacional con línea de base e informe de impacto."
    },
    {
     "n": "Nutrición ocupacional y salud en minería",
     "eq": "compartido",
     "cap": "",
     "nota": "Su programa ocupacional con indicadores es el mismo ciclo sobre el colectivo de trabajadores; además planifica el menú del campamento."
    },
    {
     "n": "Nutrición en programas sociales del Estado",
     "eq": "compartido",
     "cap": "",
     "nota": "Capacita y monitorea a la unidad territorial (tramos Intervenir y Evaluar); su proceso principal es la gestión del componente alimentario."
    }
   ],
   "contraste": {
    "dec": "reformular",
    "defFinal": "Intervenir sobre el estado nutricional de una población —comunidad, unidad territorial, colectivo de trabajadores— diagnosticando su situación con línea de base y vigilancia, diseñando y ejecutando el programa y evaluando su impacto, en el marco de la salud pública, los programas presupuestales del Estado y la salud ocupacional, con articulación intersectorial y capacitación de agentes, para reducir la anemia, la desnutrición, el exceso de peso y el riesgo cardiometabólico y rendir cuenta del resultado con indicadores.",
    "gat": "Gatillo 1: el título designa el objeto —la comunidad— y toma prestado «atención nutricional», que es el proceso individual. Gatillo 2 en capacidad: «Diseño y evaluación de programas» agrupa dos procesos con evidencias distintas y se desdobla. Gatillo 5: falta el diagnóstico con línea de base y vigilancia que revelaron la comunitaria, la ocupacional y los programas sociales.",
    "antes": "«Gestión de la atención nutricional integral de la comunidad»: diseña, implementa y evalúa programas y políticas de salud pública en nutrición con equipos interdisciplinarios para prevenir o controlar la problemática alimentario-nutricional de diversas poblaciones, con ética, inclusión y respeto cultural.",
    "caps": [
     {
      "n": "Diagnóstico nutricional poblacional",
      "e": "añadida",
      "de": ""
     },
     {
      "n": "Diseño de la intervención nutricional poblacional",
      "e": "reformulada",
      "de": "Diseño y evaluación de programas de salud pública (Competencia 3)"
     },
     {
      "n": "Ejecución de la intervención nutricional poblacional",
      "e": "reformulada",
      "de": "Gestión de problemas alimentario-nutricionales (Competencia 3)"
     },
     {
      "n": "Monitoreo y evaluación del impacto de la intervención",
      "e": "reformulada",
      "de": "Diseño y evaluación de programas de salud pública (Competencia 3)"
     }
    ],
    "noContinuan": [],
    "situacion": "Coinciden en proceso, difieren en capacidades"
   }
  },
  {
   "alias": "Alimentación colectiva",
   "n": "Gestión de servicios de alimentación colectiva y aseguramiento de la inocuidad",
   "tipo": "gestión",
   "dec": "derivada",
   "def": "Dirigir el servicio de alimentación que provee a pacientes, trabajadores, escolares o usuarios de programas sociales —planificando el menú, estandarizando preparaciones y fichas técnicas, costeando y comprando, asegurando la inocuidad con HACCP y auditando el cumplimiento— en hospitales, concesionarias, campamentos y unidades territoriales del Estado, bajo la norma sanitaria vigente y con indicadores de gestión, para entregar una alimentación nutricionalmente adecuada, segura y sostenible económicamente.",
   "evid": "Plan HACCP del servicio y expediente de auditoría con menús, fichas técnicas, costeo, registros de puntos críticos, no conformidades resueltas y tablero de indicadores.",
   "nivel": "Autonomía para conducir un servicio de alimentación o una unidad territorial de complejidad media; la implementación de HACCP en plantas de alta complejidad y la auditoría de certificación se realizan con supervisión de un responsable acreditado.",
   "caps": [
    {
     "a": "Planificar",
     "n": "Planificación del menú y del plan alimentario",
     "e": "",
     "d": "Capacidad para planificar menús y planes alimentarios por ciclos que cubran los requerimientos del colectivo atendido —pacientes, trabajadores, escolares, usuarios de programas— dentro del presupuesto y la disponibilidad local, adaptándolos a la cultura y al clima, con criterio nutricional, sentido económico y equidad."
    },
    {
     "a": "Estandarizar",
     "n": "Estandarización y costeo de las preparaciones",
     "e": "",
     "d": "Capacidad para estandarizar recetas, raciones y fichas técnicas con su perfil nutricional y costo, y gestionar compras y proveedores, adaptando la estandarización al tipo de servicio y a la escala, con precisión, orden y transparencia en el uso de los recursos."
    },
    {
     "a": "Asegurar",
     "n": "Aseguramiento de la inocuidad",
     "e": "",
     "d": "Capacidad para implementar y mantener el sistema HACCP y las buenas prácticas de manipulación, identificando puntos críticos, controlándolos y capacitando al personal, en cocinas hospitalarias, concesionarias y campamentos, con disciplina normativa, prevención del riesgo y responsabilidad por la salud del comensal."
    },
    {
     "a": "Auditar",
     "n": "Supervisión y auditoría del servicio de alimentación",
     "e": "",
     "d": "Capacidad para supervisar operaciones y proveedores, auditar el cumplimiento sanitario, gestionar no conformidades y reportar indicadores de gestión a la dirección o a la entidad, en servicios propios, concesionados o de programas sociales, con objetividad, integridad y orientación a la mejora continua."
    }
   ],
   "esp": [
    {
     "n": "Gestión de servicios de alimentación e inocuidad",
     "eq": "competencia",
     "cap": "",
     "nota": "Ejecuta el ciclo completo planificar-estandarizar-asegurar-auditar y entrega el plan HACCP con el expediente de auditoría."
    },
    {
     "n": "Nutrición en programas sociales del Estado",
     "eq": "compartido",
     "cap": "",
     "nota": "Fichas técnicas, supervisión de proveedores, vigilancia sanitaria y reporte son este mismo proceso sobre la unidad territorial del programa."
    },
    {
     "n": "Nutrición ocupacional y salud en minería",
     "eq": "compartido",
     "cap": "",
     "nota": "Aporta el tramo Planificar: el plan alimentario del campamento; el resto de su proceso es intervención poblacional."
    }
   ],
   "contraste": {
    "dec": "reformular",
    "defFinal": "Dirigir el servicio de alimentación que provee a pacientes, trabajadores, escolares o usuarios de programas sociales —planificando el menú, estandarizando preparaciones y fichas técnicas, costeando y comprando, asegurando la inocuidad con HACCP y auditando el cumplimiento— en hospitales, concesionarias, campamentos y unidades territoriales del Estado, bajo la norma sanitaria vigente y con indicadores de gestión, para entregar una alimentación nutricionalmente adecuada, segura y sostenible económicamente.",
    "gat": "Gatillo 1: «nutrición y alimentos» no nombra el objeto gestionado: el servicio de alimentación colectiva. Gatillo 5: el mercado contrata planificar el menú, estandarizar y costear fichas técnicas y auditar el cumplimiento sanitario, ausentes del plan. Gatillo 7: «Incorporación de tecnologías emergentes» es recurso habilitador, sin especialidad que la sostenga. Además confunde seguridad alimentaria con inocuidad.",
    "antes": "«Gestión en nutrición y alimentos»: gestiona servicios de nutrición y alimentos, asegurando procesos de calidad y la incorporación de tecnologías emergentes y prácticas innovadoras que contribuyan a la seguridad alimentaria, alineadas con estándares de seguridad alimentaria.",
    "caps": [
     {
      "n": "Planificación del menú y del plan alimentario",
      "e": "reformulada",
      "de": "Gestión de servicios de nutrición y alimentación (Competencia 2)"
     },
     {
      "n": "Estandarización y costeo de las preparaciones",
      "e": "añadida",
      "de": ""
     },
     {
      "n": "Aseguramiento de la inocuidad",
      "e": "reformulada",
      "de": "Seguridad alimentaria y sostenibilidad (Competencia 2)"
     },
     {
      "n": "Supervisión y auditoría del servicio de alimentación",
      "e": "añadida",
      "de": ""
     }
    ],
    "noContinuan": [
     {
      "cap": "Incorporación de tecnologías emergentes (Competencia 2)",
      "destino": "retirada",
      "motivo": "Es recurso habilitador, no proceso con evidencia propia; ninguna especialidad la sostiene como capacidad; se recoge en el paso 2.2."
     }
    ],
    "situacion": "Coinciden en proceso, difieren en capacidades"
   }
  }
 ],
 "traza": [
  {
   "p": "Competencia 1 · Nutrición y salud",
   "d": "se reformula",
   "n": "Conducción del proceso de atención nutricional de la persona",
   "c": "Título al proceso; definición para la persona sana o enferma con tamizaje, prescripción y consejería al alta; tres capacidades reformuladas, Diagnóstico nutricional conservada literal.",
   "s": "Gatillos 1 y 5: el nombre designa un tema; la vigente solo propone planes preventivos y la clínica hospitalaria (equivalencia) y sus tres ámbitos exigen el ciclo completo."
  },
  {
   "p": "Competencia 2 · Gestión en nutrición y alimentos",
   "d": "se reformula",
   "n": "Gestión de servicios de alimentación colectiva y aseguramiento de la inocuidad",
   "c": "Nombra el servicio de alimentación colectiva y la inocuidad; la capacidad global pasa a planificar el menú; añade estandarización-costeo y auditoría; reformula seguridad alimentaria como inocuidad HACCP; retira tecnologías emergentes.",
   "s": "Gatillos 1, 5 y 7: el nombre no dice qué se gestiona; el mercado contrata menú, fichas técnicas, HACCP y auditoría; tecnologías emergentes es recurso habilitador, no proceso."
  },
  {
   "p": "Competencia 3 · Gestión de la atención nutricional integral de la comunidad",
   "d": "se reformula",
   "n": "Intervención nutricional en salud pública y poblaciones",
   "c": "Título al proceso (intervenir); condición amplía a programas presupuestales y salud ocupacional; Diseño y evaluación se desdobla en dos capacidades; se añade diagnóstico poblacional con línea de base.",
   "s": "Gatillos 1, 2 y 5: el nombre designa el objeto y usa el proceso individual; una capacidad agrupa dos procesos con evidencias distintas; faltaba la línea de base."
  }
 ],
 "smart": [
  [
   "Verbo de acción",
   "Abre la definición con una acción observable y medible (gestiona, conduce, diseña, asegura).",
   "Sí",
   "«Gestiona el proceso completo de atención nutricional…»"
  ],
  [
   "Objeto o ámbito de aplicación",
   "Sobre qué se ejerce la acción y en qué área o contexto profesional.",
   "Sí",
   "El paciente hospitalizado y ambulatorio, cualquiera sea el objeto de atención."
  ],
  [
   "Condiciones o contexto",
   "Circunstancias, herramientas y escenarios en que se demuestra la competencia.",
   "Parcial",
   "Nombra el escenario clínico; falta declarar el proceso de atención nutricional estandarizado con el que se ejecuta."
  ],
  [
   "Propósito o finalidad",
   "Impacto o contribución que da sentido a la competencia.",
   "Sí",
   "Responde por el resultado final del paciente."
  ],
  [
   "Evidencia con que se demuestra",
   "Producto observable que prueba la competencia; sin él la Fase 2 no tiene contra qué derivar funciones.",
   "Sí",
   "Plan de atención nutricional individualizado y su registro en historia clínica."
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
   "«Diagnosticar» no declara el contexto de adaptación; las otras tres cumplen."
  ]
 ],
 "req": {
  "Nutrición clínica hospitalaria": [
   "Hospital de nivel II–III con servicio de nutrición y unidad de cuidados críticos",
   "Antropometría clínica, dinamómetro, software de requerimientos, acceso a historia clínica",
   "Nutricionista con especialidad clínica y ejercicio hospitalario vigente"
  ],
  "Gestión de servicios de alimentación e inocuidad": [
   "Servicio de alimentación colectiva: hospital, concesionaria o comedor institucional",
   "Cocina-taller, termómetros de punción, registros HACCP, laboratorio de alimentos",
   "Nutricionista con certificación en inocuidad (BPM/HACCP) y dirección de servicio"
  ],
  "Nutrición comunitaria y salud pública": [
   "Establecimiento del primer nivel, DIRESA, programa presupuestal u ONG",
   "Antropometría de campo, hemoglobinómetro, software estadístico",
   "Nutricionista con maestría en salud pública y experiencia en programas"
  ],
  "Nutrición pediátrica y materna": [
   "Consultorio CRED y control prenatal del primer nivel",
   "Infantómetro, tallímetro, balanza pediátrica, curvas OMS",
   "Nutricionista con especialidad pediátrica y práctica en primer nivel"
  ],
  "Nutrición deportiva y del rendimiento": [
   "Club, centro de alto rendimiento, gimnasio o consulta privada",
   "Bioimpedancia tetrapolar, plicómetro ISAK, calorimetría indirecta",
   "Nutricionista con certificación ISAK y trabajo con deportistas"
  ],
  "Evaluación nutricional avanzada y composición corporal": [
   "Laboratorio o consultorio de valoración que recibe derivaciones",
   "DEXA o bioimpedancia tetrapolar, plicómetro, cinta metálica",
   "Antropometrista ISAK nivel 2 o superior"
  ],
  "Desarrollo y reformulación de productos alimentarios": [
   "Planta de alimentos, área de I+D o consultoría de rotulado",
   "Planta piloto, laboratorio de análisis proximal, software de formulación",
   "Nutricionista o ingeniero de alimentos con experiencia en I+D y registro sanitario"
  ],
  "Nutrición en obesidad y cirugía bariátrica": [
   "Clínica con unidad de obesidad o programa bariátrico, centro de control de peso",
   "Antropometría clínica, bioimpedancia, protocolo pre y posquirúrgico",
   "Nutricionista clínico con experiencia en manejo bariátrico"
  ],
  "Nutrición ocupacional y salud en minería": [
   "Contratista de salud ocupacional o concesionaria de alimentación en campamento minero",
   "Antropometría de campo, tamizaje cardiometabólico, régimen de campamento",
   "Nutricionista con experiencia en salud ocupacional y régimen 14x7"
  ],
  "Nutrición en programas sociales del Estado": [
   "Unidad territorial del PAE, Cuna Más o gobierno local",
   "Fichas técnicas de alimentos, herramientas de supervisión y padrones",
   "Nutricionista con experiencia en programas presupuestales y supervisión de proveedores"
  ],
  "Consultoría privada y nutrición online": [
   "Consultorio propio o plataforma de telenutrición",
   "Plataforma de teleconsulta, software de planes y registro",
   "Nutricionista con consultorio activo y práctica de atención remota"
  ],
  "Nutrición renal y diálisis": [
   "Centro de diálisis o servicio de nefrología hospitalario",
   "Laboratorio clínico, software de prescripción renal",
   "Nutricionista con segunda especialidad o práctica en nefrología"
  ],
  "Nutrición oncológica": [
   "Unidad oncológica hospitalaria o centro de quimioterapia",
   "Tamizaje de riesgo nutricional validado, antropometría clínica",
   "Nutricionista clínico con práctica en oncología"
  ],
  "Nutrición geriátrica y del envejecimiento": [
   "Residencia geriátrica, hospital de día o consulta",
   "Dinamómetro de mano, MNA, guía IDDSI de texturas",
   "Nutricionista con formación en geriatría"
  ],
  "Soporte nutricional parenteral y enteral": [
   "Escenario por declarar",
   "Equipamiento por declarar",
   "Perfil docente por declarar"
  ],
  "Educación alimentaria escolar": [
   "Institución educativa, quiosco escolar, programa de alimentación escolar",
   "Aula-taller y material educativo",
   "Nutricionista con experiencia en educación alimentaria"
  ],
  "Nutrición personalizada y nutrigenómica": [
   "Consulta privada con laboratorio genético asociado",
   "Acceso a panel genético y software de interpretación",
   "Nutricionista con formación en nutrigenómica"
  ],
  "Informática nutricional e IA aplicada": [
   "Atraviesa los tres escenarios: hospital, programa e industria",
   "Laboratorio de cómputo y acceso a bases de datos clínicas",
   "Nutricionista con formación en informática en salud"
  ],
  "Dietética hospitalaria operativa": [
   "Cocina hospitalaria y despacho de raciones",
   "Ciclo de menús y equipamiento de cocina hospitalaria",
   "Nutricionista de servicio de alimentación"
  ]
 },
 "extra": {
  "Nutrición en programas sociales del Estado": [
   {
    "c": 2,
    "k": null,
    "t": "amb"
   }
  ],
  "Nutrición ocupacional y salud en minería": [
   {
    "c": 2,
    "k": null,
    "t": "amb"
   }
  ]
 },
 "coh": [
  [
   2,
   0,
   1
  ],
  [
   2,
   1,
   0
  ],
  [
   0,
   2,
   1
  ],
  [
   1,
   1,
   2
  ]
 ],
 "oe": [
  [
   "OE1",
   "Conduce la atención nutricional de pacientes hospitalizados y ambulatorios en servicios de nutrición de hospitales, clínicas y consultorios, respondiendo por el plan nutricional registrado en la historia clínica y por su seguimiento.",
   "nutrición clínica hospitalaria"
  ],
  [
   "OE2",
   "Atiende a la gestante, al niño y al adulto mayor en el primer nivel de atención y en los programas de anemia y desnutrición, con planes individualizados que el establecimiento registra y evalúa.",
   "nutrición pediátrica y materna"
  ],
  [
   "OE3",
   "Diseña, ejecuta y evalúa intervenciones nutricionales en poblaciones desde redes de salud, gobiernos locales y programas sociales del Estado, respondiendo por sus indicadores de impacto.",
   "nutrición comunitaria y salud pública"
  ],
  [
   "OE4",
   "Gestiona servicios de alimentación colectiva en hospitales, concesionarias, campamentos y programas alimentarios, respondiendo por el menú, el costo y la inocuidad ante la autoridad sanitaria.",
   "gestión de servicios de alimentación e inocuidad"
  ]
 ],
 "vpc": {
  "t": "Forma nutricionistas que deciden con criterio propio frente al caso real: atienden al paciente en el hospital, conducen el servicio que lo alimenta y sostienen los programas que cuidan a la población. Se diferencia por la práctica en campos con convenio desde el tercer año y por una formación que declara, para cada competencia, con qué evidencia se demuestra.",
  "p": "Decidir bien, con evidencia, cuando alguien depende de esa decisión.",
  "s": [
   [
    "Especialidades que entran al plan",
    "Las 4 que superaron el corte de potencial y capacidad en el paso 1.1: clínica hospitalaria, servicios de alimentación, comunitaria y deportiva."
   ],
   [
    "Lo que la escuela puede sostener hoy",
    "Equipo docente formado y convenios de práctica firmados en tres de las cuatro; la cuarta entra con plan de habilitación declarado."
   ],
   [
    "Lo que nadie más ofrece en la región",
    "La declaración de evidencia por competencia y la práctica con convenio desde el tercer año."
   ]
  ],
  "dif": [
   {
    "n": "Práctica en campos con convenio desde el tercer año",
    "fam": "Campos de práctica",
    "ev": "Convenios vigentes con 3 hospitales de nivel II–III y 2 direcciones regionales · Res. 0123-2025-UPeU · vigencia 12-2027",
    "comp": "C1 · C2",
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
    "n": "Laboratorio de alimentos propio con certificación HACCP",
    "fam": "Infraestructura",
    "ev": "Certificación DIGESA vigente · fecha de corte 06-2026 · laboratorio de análisis proximal",
    "comp": "C3",
    "d": "D4",
    "alc": 100,
    "esp": 0.17,
    "icviD": 0.83,
    "icviR": 0.67,
    "cvr": 0.67,
    "medV": 3,
    "ac": 83,
    "ric": 1,
    "sust": 9,
    "dec": "confirmado",
    "resp": "Coordinación de laboratorios",
    "plazo": ""
   },
   {
    "n": "Certificación ISAK para el nutricionista deportivo",
    "fam": "Habilitación",
    "ev": "Convenio con ISAK Sudamérica en negociación · sin firma a 09-2026",
    "comp": "C4",
    "d": "D2",
    "alc": 65,
    "esp": 0.17,
    "icviD": 0.5,
    "icviR": 0.83,
    "cvr": 0.33,
    "medV": 2,
    "ac": 67,
    "ric": 2,
    "sust": 8,
    "dec": "condicionado",
    "resp": "Coordinación de nutrición deportiva",
    "plazo": "03-2027"
   },
   {
    "n": "Equipo docente clínico con ejercicio hospitalario vigente",
    "fam": "Docentes",
    "ev": "4 docentes con especialidad clínica y ejercicio en EsSalud y MINSA · CV 2026",
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
    "t": "Uno de cada diez menores de cinco años con desnutrición crónica y hospitales que desnutren a quien curan: el campo contrata a quien decide bien.",
    "f": "INEI, 2025; MINSA, 2026"
   },
   "c3": [
    "Universidad Nacional Mayor de San Marcos — Nutrición",
    "Universidad Nacional Federico Villarreal — Nutrición",
    "Universidad César Vallejo — Nutrición",
    "Universidad Científica del Sur — Nutrición y Dietética"
   ],
   "c5": "Vencimiento de los convenios de práctica sin renovación en diciembre de 2027."
  },
  "par": [
   "Licenciamiento SUNEDU",
   "Plataforma virtual de aprendizaje",
   "Bolsa de trabajo",
   "Docentes con grado de maestría",
   "Convenios de práctica en el primer nivel de atención",
   "Currículo por competencias"
  ],
  "cad": {
   "car": {
    "p1": "En el Perú, cuatro de cada diez niños de 6 a 35 meses tienen anemia y uno de cada diez menores de cinco años, desnutrición crónica; en la sierra rural la proporción se duplica (INEI, 2025).",
    "p2": "C1 a C4: atender al paciente, cambiar lo que come una población, dirigir el sistema que alimenta y ajustar la alimentación al rendimiento.",
    "p3": "Una persona —el paciente, el niño del distrito, el comensal, el deportista— que recibe la decisión nutricional correcta cuando de ella depende su salud.",
    "p4": "Que nadie pierda salud ni futuro por una decisión nutricional que alguien pudo tomar bien.",
    "an": 1,
    "at": 4,
    "mo": 1,
    "dg": 0,
    "dec": "aprobado"
   },
   "esp": [
    {
     "p1": "Hasta la mitad de los pacientes hospitalizados llega desnutrido o se desnutre durante la estancia, y la NTS 250 obliga desde 2026 a atenderlo en los tres niveles (MINSA, 2026).",
     "p2": "C1 — valorar, diagnosticar, tratar y seguir al paciente individual con un plan registrado en la historia clínica.",
     "p3": "Un paciente que sale del hospital antes y con más autonomía porque su tratamiento incluyó la decisión nutricional correcta.",
     "p4": "Que ningún paciente se desnutra en el mismo hospital que lo cura.",
     "an": 1,
     "at": 4,
     "mo": 0.83,
     "dg": 0,
     "dec": "aprobado"
    },
    {
     "p1": "En el Perú, uno de cada diez menores de cinco años tiene desnutrición crónica, y en la sierra rural la proporción se duplica (INEI, 2025).",
     "p2": "C2 — leer la situación nutricional de una población, diseñar el programa, moverlo con los actores del lugar y demostrar que sirvió.",
     "p3": "Un niño que crece con el desarrollo que le corresponde, en el distrito donde ese programa se ejecutó.",
     "p4": "Que ningún niño pierda su futuro por lo que no comió en sus primeros mil días.",
     "an": 1,
     "at": 3,
     "mo": 1,
     "dg": 0,
     "dec": "aprobado"
    },
    {
     "p1": "Las enfermedades transmitidas por alimentos siguen entre las primeras causas de brote notificado en servicios colectivos, y la Ley 30021 traslada al operador la responsabilidad de lo que sirve (Congreso de la República del Perú, 2021).",
     "p2": "C3 — dirigir el servicio de alimentación y responder por su inocuidad con expediente auditable.",
     "p3": "Un comensal —escolar, paciente, trabajador— que come cada día sin que la bandeja sea un riesgo.",
     "p4": "Que lo que se sirve alimente y nunca dañe, y que se pueda probar.",
     "an": 1,
     "at": 4,
     "mo": 0.83,
     "dg": 0,
     "dec": "aprobado"
    },
    {
     "p1": "Tres de cada diez deportistas de rendimiento presentan deficiencia energética relativa, con efectos sobre huesos, hormonas y lesión (Comité Olímpico Internacional, 2023).",
     "p2": "C4 — leer la carga del deportista y periodizar su alimentación fase por fase.",
     "p3": "Un deportista que llega a la competencia sin lesión por déficit y sostiene su carrera más años.",
     "p4": "Que el rendimiento nunca se pague con la salud del deportista.",
     "an": 1,
     "at": 4,
     "mo": 0.83,
     "dg": 0,
     "dec": "aprobado"
    }
   ]
  },
  "prop": "Que nadie pierda salud ni futuro por una decisión nutricional que alguien pudo tomar bien.",
  "nota": ""
 },
 "demoAj": {
  "t": "Decidir bien, con evidencia, cuando la salud de alguien depende de esa decisión: eso forma esta carrera. Desde el tercer año el estudiante atiende pacientes, dirige servicios y sostiene programas en campos con convenio vigente —tres hospitales de nivel II–III y dos direcciones regionales—, y cada competencia declara con qué evidencia se demuestra. No promete adjetivos: promete un egresado que puede probar lo que sabe hacer.",
  "p": "Decidir bien, con evidencia, cuando la salud de alguien depende de esa decisión.",
  "vp0": "Convierte los datos del paciente en decisiones que le devuelven salud y autonomía.",
  "nota": "Puse la promesa al frente y la hice más concreta (la salud de alguien, no «alguien»); nombré los campos con convenio con su número; cerré con lo que la carrera no promete. No toqué el eslabón 1 de ninguna cadena ni el veredicto del panel."
 },
 "vp": [
  [
   "Saber de nutrición y saber qué hacer con el paciente que tienes al frente son dos cosas distintas. Esta especialidad te forma en la segunda: aprendes a leer un caso completo y a decidir, con criterio propio, qué necesita esa persona hoy.",
   "Convierte datos clínicos en decisiones que devuelven salud y autonomía a cada paciente.",
   "Que ningún paciente se desnutra en el mismo hospital que lo cura."
  ],
  [
   "Aquí no se atiende a una persona: se cambia lo que come un territorio. Aprendes a leer la situación nutricional de una población, diseñar el programa, moverlo con los actores del lugar y demostrar que sirvió.",
   "Transforma el estado nutricional de una población y lo demuestra con evidencia.",
   "Que ningún niño pierda su futuro por lo que no comió en sus primeros mil días."
  ],
  [
   "Detrás de cada bandeja hay un sistema: proveedores, costos, temperaturas, registros. Esta especialidad te forma para dirigir ese sistema y responder por su inocuidad ante quien lo audite.",
   "Garantiza que lo que se sirve alimente y no dañe, y puede probarlo.",
   "Que lo que se sirve alimente y nunca dañe, y que se pueda probar."
  ],
  [
   "Rendimiento no es comer más ni menos: es comer en el momento exacto de la temporada. Aprendes a leer la carga del deportista y a periodizar su alimentación fase por fase.",
   "Ajusta la alimentación al calendario del cuerpo, no al calendario del mes.",
   "Que el rendimiento nunca se pague con la salud del deportista."
  ]
 ],
 "sus": [
  [
   90,
   88,
   "Demanda alta: 64 convocatorias contadas en 12 meses; norma con plazo y presupuesto",
   "Equipo docente formado y convenios de práctica firmados",
   "Oportunidad estratégica"
  ],
  [
   77,
   83,
   "Plazas estables en programas presupuestales del primer nivel",
   "Equipo formado y convenios con direcciones regionales",
   "Oportunidad estratégica"
  ],
  [
   89,
   78,
   "Concesionarias, industria y hospitales de convenio; licitaciones exigen responsable de inocuidad",
   "Convenios firmados y laboratorio de alimentos",
   "Oportunidad estratégica"
  ],
  [
   77,
   43,
   "Crecimiento de 14 % anual en avisos; certificación SENR",
   "Sin equipo docente ni convenios deportivos: entra con plan de habilitación",
   "Oportunidad por desarrollar"
  ]
 ],
 "narr": {
  "Nutrición clínica hospitalaria": "La nutrición clínica hospitalaria concentra la mayor densidad de demanda del campo profesional. El conteo de convocatorias de los últimos doce meses la ubica como el destino laboral más frecuente del titulado en nutrición, con empleadores distribuidos entre hospitales del subsector público, clínicas privadas y aseguradoras (Instituto Nacional de Estadística e Informática [INEI], 2025). Ese volumen no es coyuntural: la Norma Técnica de Salud 250-MINSA/DGAIN-2026 incorporó la atención nutricional como prestación exigible en los tres niveles de atención, con plazo y asignación presupuestal, lo que convierte la contratación en obligación institucional y no en decisión discrecional de cada establecimiento (Ministerio de Salud del Perú [MINSA], 2026). A esto se suma que el ejercicio exige juicio clínico sobre el caso individual y responsabilidad legal sobre el resultado, condición que la Organización Mundial de la Salud identifica como el rasgo que sostiene la demanda de fuerza laboral nutricional frente a la automatización de tareas de cálculo y tamizaje (World Health Organization [WHO], 2025). Para la Dirección, la implicancia es directa: esta especialidad no requiere inversión previa a la apertura —el equipo docente está formado y los convenios de práctica están firmados— y su ausencia en el plan dejaría al egresado fuera del mercado que hoy más lo demanda. Se recomienda mantenerla como eje del perfil de egreso y asegurar que la evidencia con la que se demuestra —el plan de atención nutricional individualizado y su registro en la historia clínica— quede declarada en la competencia correspondiente.",
  "Gestión de servicios de alimentación e inocuidad": "La gestión de servicios de alimentación e inocuidad es la especialidad con mayor amplitud de empleadores de toda la cartera: concesionarias, industria alimentaria, hospitales, programas sociales y municipios convocan al mismo perfil, lo que reduce la exposición del egresado a la contracción de un solo sector (INEI, 2025; Organización Internacional del Trabajo [OIT], 2024). El factor que explica su crecimiento sostenido es regulatorio antes que demográfico: las bases de licitación pública y los protocolos sanitarios exigen un responsable acreditado de inocuidad, y la Ley 30021 y su reglamento trasladaron a los operadores la obligación de sustentar el perfil nutricional de lo que producen y sirven (Congreso de la República del Perú, 2021). Esa exigencia normativa convierte al nutricionista en requisito de habilitación del servicio, no en un costo optativo. Desde la perspectiva de la Escuela, la especialidad tiene además un valor de posicionamiento que conviene explicitar: dispone de laboratorio de alimentos propio y de convenios vigentes con servicios de alimentación colectiva, activo que ninguna otra oferta de la región declara. Se recomienda incorporarla al plan y vincular su evidencia al expediente de conformidad sanitaria auditable, porque es ese documento —y no el conocimiento declarativo— lo que el empleador verifica al contratar.",
  "Nutrición pediátrica y materna": "La nutrición pediátrica y materna se sostiene en un driver estructural y no en una preferencia de mercado: la anemia infantil y la desnutrición crónica continúan siendo metas de los programas presupuestales del Estado, con asignación anual verificable y seguimiento de ejecución por producto (Ministerio de Economía y Finanzas [MEF], 2025). Esto fija un piso de demanda en el primer nivel de atención que resulta comparativamente estable frente a los ciclos económicos. Su rasgo distintivo para el análisis curricular es que no constituye un proceso profesional separado: aplica el mismo ciclo de valoración, diagnóstico, tratamiento y seguimiento tanto en la atención individual del consultorio como en los programas poblacionales, y produce la misma evidencia cambiando el objeto de atención (Academy of Nutrition and Dietetics, 2024). Por esa razón el análisis de correspondencia la clasificó como ámbito compartido entre dos competencias, decisión que la Dirección debe conocer porque tiene efecto sobre la Fase 2: sus funciones se repartirán entre ambas competencias y ninguna podrá reclamarla como exclusiva. Se recomienda incorporarla como ámbito declarado y evitar abrirla como competencia propia, lo que fragmentaría la formación sin añadir evidencia distinta.",
  "Nutrición comunitaria y salud pública": "La nutrición comunitaria y de salud pública presenta una demanda de menor volumen que la clínica, pero con dos atributos que la hacen estratégicamente relevante. El primero es la formalidad: las plazas provienen mayoritariamente de programas presupuestales y de direcciones regionales de salud, que exigen título profesional y colegiatura y ofrecen continuidad plurianual (MEF, 2025; Colegio de Nutricionistas del Perú [CNP], 2025). El segundo es el alcance: el ejercicio incide sobre poblaciones completas, de modo que la consecuencia del desempeño deficiente se multiplica más allá del caso individual, criterio que los modelos de acreditación recogen al evaluar la pertinencia social del programa (SINEACE, 2024). La Escuela cuenta con equipo docente formado y convenios con direcciones regionales, por lo que la apertura no exige habilitación previa. Para la Dirección la decisión relevante no es si incorporarla, sino cómo diferenciarla de la atención individual: el análisis estableció que produce evidencia propia —el plan de intervención poblacional con su línea de base y su informe de impacto— y que esa evidencia obliga a una capacidad de evaluación de impacto que el plan vigente no recogía. Se recomienda incorporarla con esa capacidad explícita.",
  "Desarrollo y reformulación de productos alimentarios": "El desarrollo y la reformulación de productos alimentarios es la especialidad de mayor potencial entre las que la Escuela todavía no puede sostener. Su demanda proviene de la obligación de la industria de ajustar el perfil nutricional de su cartera y de sustentar el rotulado frente al regulador, obligación que la Ley 30021 y su reglamento de advertencias publicitarias hicieron exigible y fiscalizable (Congreso de la República del Perú, 2021). Es, además, un campo donde el nutricionista compite con el ingeniero de alimentos y donde la credencial diferenciadora es la capacidad de traducir criterio nutricional a formulación viable, no la operación de planta. El obstáculo es interno y está identificado: la Escuela no dispone hoy de planta piloto ni de laboratorio de análisis proximal, y el perfil docente con experiencia en investigación y desarrollo industrial es de contratación escasa. La recomendación para la Dirección es incorporarla al plan de estudios condicionada a un plan de habilitación con responsable y plazo —convenio con una planta de la región como alternativa a la inversión en infraestructura propia— y no comprometerla en la oferta de admisión hasta que ese convenio esté firmado.",
  "Evaluación nutricional avanzada y composición corporal": "La evaluación nutricional avanzada y de composición corporal presenta un perfil de demanda distinto al del resto de la cartera: no se contrata como puesto de jornada completa con la misma frecuencia, pero sostiene con solidez el ejercicio independiente y el servicio por derivación, modalidad que la clasificación internacional de ocupaciones registra como creciente en el ejercicio profesional de la nutrición (OIT, 2024). Su particularidad técnica es que recibe un encargo de otro profesional y devuelve un producto intermedio —un informe interpretado— distinto del plan de atención, razón por la cual el análisis de correspondencia la clasificó como equivalente a una capacidad y no como competencia autónoma. Para la Dirección esto tiene una consecuencia práctica favorable: no requiere abrir una competencia nueva, sino precisar la capacidad de valoración ya existente para que incorpore la evaluación instrumentada. La restricción está en el equipamiento —bioimpedancia tetrapolar y antropometría certificada— y en la certificación ISAK del docente, ambas de costo acotado frente al de una planta o un laboratorio. Se recomienda incorporarla con plan de habilitación de corto plazo, por ser la de mejor relación entre inversión requerida y diferenciación obtenida.",
  "Nutrición deportiva y del rendimiento": "La nutrición deportiva y del rendimiento es la especialidad con la brecha más amplia entre lo que el mercado pide y lo que la Escuela puede ofrecer. Por el lado de la demanda, el crecimiento observado en avisos es sostenido y la consolidación de criterios internacionales sobre disponibilidad energética y salud del deportista ha profesionalizado el encargo, desplazando la práctica no acreditada (Comité Olímpico Internacional, 2023). Sostiene, además, ejercicio independiente escalable —consultorio, centro de rendimiento, asesoría a clubes—, lo que amplía la salida laboral más allá del empleo dependiente. Por el lado de la capacidad, la Escuela no cuenta con equipo docente con certificación antropométrica ni con convenios deportivos vigentes, y su indicador de capacidad instalada es el más bajo entre las especialidades seleccionadas. La recomendación para la Dirección es explícita: incorporarla al plan solo con un plan de habilitación que fije la contratación del perfil docente certificado y la firma de al menos un convenio con club o centro de alto rendimiento antes del inicio del ciclo en que se dicte. Abrirla sin esas condiciones produciría una promesa de formación que la Escuela no podría demostrar ante acreditación."
 },
 "narrRef": {
  "Nutrición clínica hospitalaria": [
   2,
   1,
   10
  ],
  "Gestión de servicios de alimentación e inocuidad": [
   2,
   3,
   5
  ],
  "Nutrición pediátrica y materna": [
   9,
   6
  ],
  "Nutrición comunitaria y salud pública": [
   9,
   4,
   8
  ],
  "Desarrollo y reformulación de productos alimentarios": [
   5
  ],
  "Evaluación nutricional avanzada y composición corporal": [
   3
  ],
  "Nutrición deportiva y del rendimiento": [
   7
  ]
 },
 "eqman": {},
 "vdecl": {},
 "vpa": null,
 "guion": {
  "0": " Lo que más pesa: clínica, servicios de alimentación en concesionarias y el sector público concentran los puestos propios, y los tres exigen colegiatura. Dos candidatas nuevas: nutrición ocupacional en minería y programas sociales del Estado; renal y oncológica se devuelven por la regla del puesto pero quedan en vigilancia.",
  "1": " En esta ronda, **4 de 14 salieron esenciales** —nutrición clínica hospitalaria, gestión de servicios de alimentación e inocuidad, nutrición comunitaria y salud pública y nutrición pediátrica y materna—; 5 no esenciales y 5 sin consenso. El guardián dejó 3 reglas en «no cumple» (tecnología admitida como especialidad, afirmaciones sin enlace fechado, crecimiento sin serie contada): se corrigen en la cartera antes de una ronda 2, sin tocar las calificaciones.",
  "4": "<ul><li><b>Nutrición clínica hospitalaria</b> con Nutrición en obesidad y cirugía bariátrica y Nutrición geriátrica y del envejecimiento</li><li><b>Gestión de servicios de alimentación e inocuidad</b> con Nutrición ocupacional y salud en minería</li><li><b>Nutrición comunitaria y salud pública</b> con Nutrición en programas sociales del Estado</li></ul>",
  "6": " <b>Atención nutricional</b> (atención): nutrición clínica hospitalaria equivale a la competencia; nutrición en obesidad es ámbito de aplicación; nutrición geriátrica y es ámbito de aplicación; nutrición pediátrica y es ámbito de aplicación. <b>Intervención poblacional</b> (atención): nutrición comunitaria y equivale a la competencia; nutrición ocupacional y es ámbito compartido; nutrición en programas es ámbito compartido. <b>Alimentación colectiva</b> (gestión): gestión de servicios equivale a la competencia; nutrición en programas es ámbito compartido; nutrición ocupacional y es ámbito compartido.",
  "7": " Dirección: las tres derivadas coinciden en proceso con las tres vigentes de la línea base, pero ninguna se conserva literal como competencia: las tres se reformulan por gatillo, porque el nombre designa un tema u objeto y faltan capacidades que el mercado contrata. Se conserva palabra por palabra la capacidad Diagnóstico nutricional, se reformulan ocho sobre las vigentes, se añaden tres —diagnóstico poblacional, estandarización y costeo, auditoría— y se retira una, tecnologías emergentes, que es recurso y no proceso. Ninguna competencia nace, se fusiona ni desaparece dentro de la línea base de tres.",
  "10": " 3 especialidades equivalen a una competencia completa, 3 son ámbito de aplicación, 0 equivalen a una capacidad y 2 (nutrición ocupacional y salud en minería y nutrición en programas sociales del Estado) son ámbito compartido entre dos competencias. Prueba de cobertura: ninguna especialidad sin correspondencia y las 12 capacidades quedan cubiertas. Desarrollo y reformulación de productos alimentarios queda como mención (paso 4.4) y no entra a la matriz.",
  "14": "**3 confirmados** (práctica con convenio desde el tercer año, evidencia declarada por competencia, laboratorio HACCP), **1 condicionado** (certificación ISAK: vigencia incierta, plan a marzo 2027) y **1 en paridad** (docentes clínicos: dos de cada tres competidores pueden firmarlo).",
  "avisos": "4 994 (Jooble) · 74 públicas",
  "oferta": "13 universidades",
  "leg": {
   "comp": "Es el caso de la nutrición clínica frente a la competencia de atención nutricional: no sobra ni falta nada.",
   "amb": "La nutrición pediátrica valora, diagnostica, trata y sigue igual que la clínica: cambia a quién atiende, no cómo. Por eso no abre una competencia nueva.",
   "cap": "La evaluación de composición corporal devuelve un informe, no un plan de atención.",
   "trv": "La nutrición pediátrica y materna se ejerce tanto en la atención individual del consultorio como en los programas del primer nivel: pertenece a dos procesos distintos."
  }
 },
 "acta": {
  "fecha": "23-09-2026",
  "ronda": 1,
  "estado": "revisado",
  "resumen": {
   "n": 14,
   "esencial": 4,
   "esencialSinUnanimidad": 0,
   "noEsencial": 5,
   "sinConsenso": 5,
   "bajoUmbral": 10,
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
     "hallazgo": "Las 19 candidatas declaran empleo y negocio propio (1–4). Las cinco con ambas ≤ 2 (NUT-12, NUT-13, NUT-15, NUT-16, NUT-18) están fuera de NUT-valoradas.json y llevan destino provisional en el CSV."
    },
    {
     "n": 2,
     "veredicto": "No cumple",
     "hallazgo": "NUT-06 es protocolo e instrumentos (ISAK, bioimpedancia, DEXA), declarada «transversal» por el propio modelo, y sigue valorada como especialidad (potencial 31). NUT-18 va al 2.2 pero conserva potencial 61 en CSV y resumen."
    },
    {
     "n": 3,
     "veredicto": "No cumple",
     "hallazgo": "NUT-09 «10+ proyectos mineros en 2026 [P-S]» sin lectura ni fragmento registrado; NUT-12 «GPC ERC 12-2025 [P-L9]» cita una lectura fechada 17-07-2025; seis URL de la APA normativa (Ley 30188, Ley 28036, RM 546-2011…) no figuran como lecturas."
    },
    {
     "n": 4,
     "veredicto": "No cumple",
     "hallazgo": "cre = 3 sin serie contada en NUT-02 («sin serie que sustente»), NUT-09 y NUT-11 (un solo punto); cre = 4 en NUT-18 por impresión («emergente fuerte»); NUT-07 usa proyección a 2035, no crecimiento observado."
    },
    {
     "n": 5,
     "veredicto": "Cumple",
     "hallazgo": "Todas las candidatas caben en la Ley 30188 y la colegiatura CNP. Cuidado en NUT-15: su entregable «Prescripción de fórmula parenteral» roza la NTS 212 (preparación nivel 1); redactarlo como cálculo en interconsulta al pasar a Fase 2."
    },
    {
     "n": 6,
     "veredicto": "Cumple",
     "hallazgo": "UPeU aparece solo como exclusión declarada (resumen y NUT-4-oferta). Ningún vocabulario de competencias, capacidades ni perfil de egreso del plan vigente en cartera, justificaciones ni evidencias; «competencia» solo en sentido legal."
    },
    {
     "n": 7,
     "veredicto": "Cumple",
     "hallazgo": "Las seis columnas de capacidad (docentes, campos, infraestructura, diferenciación, habilitación, capacidad instalada) y Prioridad están vacías en las 19 filas; tampoco hay Panel ni Aprobada (M3)."
    }
   ],
   "observaciones": [
    "Los marcadores N-n son ambiguos: el CSV los usa como lectura (N-3 = NTS 103 en NUT-01, N-4 = NTS 213 en NUT-04) y como hallazgo (N-3 = NTS 213 en NUT-03, N-4 = Ley 30021 en NUT-02); just-NUT.json numera por hallazgo con N-Lnn para lecturas. Unificar antes del panel.",
    "Cifras atribuidas a fragmentos no transcritos: «Newrest 13 años en Perú [E-B5]», «centros con 13 años de trayectoria [E-B13]»; y deriva de sentido «telenutrición evaluada» (evidencia) a «validada» (CSV y justificaciones NUT-08, NUT-11).",
    "La escasez descansa en RPP 2013 (1 por 6 000 hab.) y en un fragmento [B11] de ~8 000 colegiados; el padrón oficial del CNP sigue como vacío declarado. Las puntuaciones de escasez 3 en clínica, comunitaria y pediátrica dependen de una fuente de 13 años.",
    "Las puntuaciones cre = 3 de NUT-12 y NUT-13 (devueltas) se conservan como registro del barrido, lo que es correcto; pero el resumen las presenta con «driver» como argumento de «esperar y revisar» sin declarar que sus series son epidemiológicas, no de puestos.",
    "Resumen y CSV declaran «14 valoradas» y NUT-valoradas.json contiene 14 entradas incluyendo NUT-19 (en extinción, destino «No entra»): coherente, pero conviene explicitar que se valora solo para dejar constancia del motivo de salida."
   ]
  },
  "abiertas": {
   "faltan": {
    "P1": [
     "Nutrición renal y en diálisis: 3 M con ERC, 23 000 que deberían dializarse, ingreso a diálisis +8 %/año en EsSalud y segunda especialidad inscrita en el CNP; hoy es tarea del puesto clínico pero es el nicho clínico con mayor crecimiento observado [P-L9][N-7]",
     "Nutricionista comercial / asesoría técnico-comercial de industria y suplementos: puesto real descubierto en el barrido (NC Company, Nestlé) que ninguna especialidad de la cartera recoge [E-B7][E-B10]"
    ],
    "P2": [
     "Nutrición renal: 3 M con ERC, 23 000 que deberían dializarse, ingreso a diálisis +8 %/año en EsSalud y GPC ERC 12-2025 [P-L9]; segunda especialidad ya inscrita en el RNE del CNP. Es la ausencia más grave de la cartera.",
     "Nutrición oncológica: >80 000 casos nuevos/año, mortalidad +26 % en cinco años, 56–70 % en estadios III-IV [P-L10]; hoy es tarea dentro del puesto clínico y no aparece en la cartera.",
     "Informática nutricional e IA aplicada: cuatro usos hospitalarios identificados en Rebagliati 12-2025 [P-L11]; perfil híbrido que ninguna malla forma y que construirá la automatización que erosiona a las demás."
    ],
    "P3": [
     "Soporte nutricional enteral y parenteral: única especialidad con norma propia reciente (NTS 212, RM 203-2024) y estándar de dotación en NTS 103 (1 licenciado por 15 camas UCI y pediátricas); no está en la cartera.",
     "Nutrición renal: segunda especialidad inscrita en el Registro Nacional de Especialistas del CNP; el RNE es la única lista formal de especialidades y la cartera no la recoge.",
     "Educación alimentaria y nutricional escolar: Ley 30021 y DS 017-2017-SA arts. 6-9 obligan a quioscos y comedores saludables; es función normada que ninguna de las 14 cubre."
    ],
    "P4": [
     "Soporte nutricional del paciente crítico (enteral y parenteral, NTS 212): en un nivel III la UCI la necesita a diario y hoy la pido como 90 h de especialización porque nadie la trae [E-9].",
     "Nutrición renal y oncológica como perfil clínico especializado: 3 M con ERC y más de 80 000 cánceres nuevos pasan por mi servicio sin que exista egresado formado para diálisis y quimioterapia.",
     "Gestión de contratos y costeo de servicios de alimentación (Perú Compras, licitaciones, fichas técnicas): el nutricionista que dirige un servicio debe sustentar el contrato, no solo el menú."
    ],
    "P5": [
     "Informática nutricional e IA aplicada (NUT-18 del barrido): perfil híbrido nutrición-datos que construye, valida y audita las herramientas que sustituyen tareas de las demás especialidades; ninguna malla peruana lo forma [P-L11].",
     "Nutrición renal: prescripción de proteínas y electrolitos con control de laboratorio, no automatizable, con ingreso a diálisis +8 %/año [P-L9]; hoy diluida dentro de clínica hospitalaria."
    ],
    "P6": [
     "Nutrición renal: única segunda especialidad inscrita en el RNE del CNP fuera de clínica y pública (Wiener), con diálisis creciendo 8 %/año en EsSalud, y no figura en la cartera.",
     "Seguridad alimentaria y gestión nutricional municipal: gobiernos locales y regionales con presupuesto por resultados (PPoR 1001) contratan gestores del componente nutricional territorial, distinto del programa social del MIDIS."
    ]
   },
   "integrar": {
    "P1": [
     "NUT-03 + NUT-10: el Estado las contrata en la misma convocatoria CAS (DIRESA, Cuna Más, PAE) con el mismo perfil colegiado; programas sociales es una unidad territorial de la comunitaria [E-1][E-10]",
     "NUT-02 + NUT-19: las concesionarias y clínicas cubren la producción y despacho con auxiliares bajo el licenciado que dirige el servicio; la dietética operativa es función subordinada de servicios de alimentación [E-7][E-13]",
     "NUT-02 + NUT-09: Sodexo, Newrest y NATCLAR contratan servicio de alimentación y vigilancia nutricional del trabajador en el mismo campamento minero con regímenes 14x7 y 21x7 [E-12][E-7]",
     "NUT-08 + NUT-11: los centros de control de peso y las start-ups de coaching contratan la misma consulta privada presencial o virtual de manejo de peso [E-B8][E-B13][E-B14]",
     "NUT-06 dentro de NUT-01 y NUT-05: ISAK y composición corporal se piden como requisito del puesto clínico o deportivo, nunca como puesto propio [E-11]"
    ],
    "P2": [
     "NUT-03 + NUT-10: el mismo Estado (DIRESA, MIDIS, municipios) contrata bajo CAS el perfil comunitario y el de programas sociales; una sola especialidad de salud pública territorial.",
     "NUT-02 + NUT-19: la dietética operativa converge con la gestión de servicios de alimentación; el titulado dirige y audita, el auxiliar despacha.",
     "NUT-02 + NUT-09: Sodexo, Newrest y NATCLAR contratan en campamento 14x7 al nutricionista de servicio y al de salud ocupacional como un solo puesto.",
     "NUT-06 dentro de NUT-01, NUT-05 y NUT-14: la composición corporal se contrata como tarea de clínica, deporte y geriatría, nunca sola.",
     "NUT-08 + NUT-11: centros de control de peso y consulta privada online contratan el mismo perfil con telenutrición."
    ],
    "P3": [
     "NUT-03 + NUT-04 + NUT-10: el Estado contrata un solo perfil colegiado de primer nivel bajo NTS 213, PP 0001, SERUMS y PAE; separarlos no tiene sustento normativo.",
     "NUT-02 + NUT-19 (+ NUT-09): concesionarias y campamentos contratan gestión del servicio con HACCP y NTS 142; la dietética operativa y el componente ocupacional van dentro del mismo contrato.",
     "NUT-01 + NUT-08 + NUT-14 + NUT-06: la consulta reservada por NTS 103 abarca obesidad, adulto mayor y valoración de composición corporal; son cursos de vida y técnicas de la misma clínica, no especialidades aparte."
    ],
    "P4": [
     "NUT-02 con NUT-19: la concesionaria contrata al licenciado para dirigir producción y despacho; la dietética operativa es la capa auxiliar del mismo servicio, no una especialidad aparte.",
     "NUT-02 con NUT-09: en campamento minero el mismo contrato exige servicio de alimentación con HACCP y vigilancia nutricional del trabajador; lo contrato como un solo perfil.",
     "NUT-01 con NUT-06, NUT-08 y NUT-14: el puesto clínico hospitalario cubre composición corporal, obesidad-bariátrica y adulto mayor; no abro plazas separadas para ninguna de las tres."
    ],
    "P5": [
     "NUT-06 Evaluación y composición corporal dentro de NUT-01 clínica, NUT-14 geriátrica y NUT-05 deportiva: la medición es instrumento y la interpretación va con quien trata.",
     "NUT-10 Programas sociales con NUT-03 Comunitaria: misma naturaleza poblacional; el Estado contrata un solo perfil de salud pública.",
     "NUT-19 Dietética operativa con NUT-02 Servicios de alimentación: el cálculo automatizado converge con la gestión del servicio.",
     "NUT-09 Ocupacional minera con NUT-02 Servicios de alimentación: Sodexo y NATCLAR contratan juntos el servicio de campamento y la valoración del trabajador [E-12].",
     "NUT-11 Online como canal transversal de NUT-01, NUT-08 y NUT-05, no como línea propia de la cartera."
    ],
    "P6": [
     "NUT-03 + NUT-10: DIRESA, redes y MIDIS contratan el mismo perfil CAS comunitario; PAE y Cuna Más son el brazo programático de la salud pública regional.",
     "NUT-02 + NUT-09: Sodexo, Newrest y NATCLAR contratan en un solo puesto 14x7 el servicio de alimentación del campamento y la vigilancia nutricional del trabajador.",
     "NUT-04 dentro de NUT-03: en el primer nivel regional (CRED, anemia, gestante) la pediátrica-materna es el contenido central del puesto comunitario, no un puesto aparte.",
     "NUT-19 dentro de NUT-02: la dietética operativa es la capa auxiliar del servicio de alimentación y no debe formarse como salida del titulado."
    ]
   },
   "noPuesto": {
    "P1": [
     "NUT-17 Nutrición personalizada y nutrigenómica: ningún aviso ni negocio identificado en el país [E]",
     "NUT-19 Dietética hospitalaria operativa: es puesto, pero auxiliar sin colegiatura a S/ 1 200; no es puesto profesional ni negocio [E-7]",
     "NUT-06 Evaluación nutricional avanzada: tarea añadida a otro puesto, sin empleador dedicado [E-11]",
     "NUT-11 Consultoría privada y online: es negocio y modo de ejercicio, no puesto contratado con perfil propio [E-B14][E-2]"
    ],
    "P2": [
     "NUT-06 Evaluación nutricional avanzada: un solo aviso con ISAK 1 como tarea añadida; sin puesto ni negocio propio.",
     "NUT-17 Nutrigenómica: ningún aviso en 15 búsquedas ni cifras peruanas; ni puesto ni negocio hoy en el país.",
     "NUT-19 Dietética hospitalaria operativa: existe como puesto, pero de auxiliar con secundaria a S/ 1 200, no del nutricionista titulado."
    ],
    "P3": [
     "NUT-19: puesto auxiliar sin colegiatura, fuera del ejercicio profesional de Ley 30188.",
     "NUT-06: competencia transversal de valoración; sin puesto propio, sin norma ni registro.",
     "NUT-17: sin puesto, sin norma y sin especialidad en el RNE; especulativa.",
     "NUT-11: modo de ejercicio (consulta particular o virtual) amparado por Ley 30188, no un campo ni un negocio distinto de las especialidades que se ejercen por ese medio."
    ],
    "P4": [
     "NUT-11 Consultoría privada y online: es un modo de ejercicio freelance, no un puesto que ninguna institución convoque con colegiatura.",
     "NUT-17 Nutrición personalizada y nutrigenómica: sin un solo aviso ni laboratorio contratante en el país; no es puesto ni negocio hoy.",
     "NUT-06 Evaluación nutricional avanzada y composición corporal: es una tarea con equipo dentro del puesto clínico o del gimnasio, no un perfil que se contrate."
    ],
    "P5": [
     "NUT-11 Consultoría privada y online: modo de ejercicio y canal tecnológico (telenutrición), no un campo con juicio propio.",
     "NUT-17 Nutrigenómica: tecnología de laboratorio y algoritmo de interpretación disfrazados de especialidad; sin puestos ni evidencia clínica.",
     "NUT-06 Evaluación y composición corporal: instrumento de medición (bioimpedancia, escaneo 3D), no puesto ni negocio autónomo.",
     "NUT-19 Dietética hospitalaria operativa: tarea auxiliar de cálculo ya automatizada, no puesto profesional."
    ],
    "P6": [
     "NUT-17 Nutrigenómica: ningún aviso en el país ni laboratorio en regiones; electivo en cuatro mallas.",
     "NUT-19 Dietética hospitalaria operativa: puesto de auxiliar con secundaria o técnico, no profesional.",
     "NUT-06 Evaluación nutricional avanzada: tarea añadida a otros puestos, ya cubierta como curso obligatorio en seis mallas.",
     "NUT-11 Consultoría online: modo de ejercicio de otras especialidades, no campo ni especialidad formalizable."
    ]
   }
  }
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
 "vagente": {
  "Nutrición clínica hospitalaria": {
   "dif": 1,
   "hab": 4
  },
  "Gestión de servicios de alimentación e inocuidad": {
   "dif": 2,
   "hab": 3
  },
  "Nutrición comunitaria y salud pública": {
   "dif": 1,
   "hab": 4
  },
  "Nutrición pediátrica y materna": {
   "dif": 4,
   "hab": 4
  },
  "Desarrollo y reformulación de productos alimentarios": {
   "dif": 3,
   "hab": 3
  },
  "Nutrición en obesidad y cirugía bariátrica": {
   "dif": 4,
   "hab": 4
  },
  "Nutrición ocupacional y salud en minería": {
   "dif": 4,
   "hab": 3
  },
  "Nutrición en programas sociales del Estado": {
   "dif": 4,
   "hab": 3
  },
  "Nutrición geriátrica y del envejecimiento": {
   "dif": 4,
   "hab": 3
  }
 },
 "decl": {
  "resp": "Dirección de la EP de Nutrición Humana · UPeU",
  "fecha": "24-09-2026",
  "tipo": "borrador de declaración de la Dirección"
 },
 "integr": {
  "Nutrición clínica hospitalaria": [
   "Nutrición en obesidad y cirugía bariátrica",
   "Nutrición geriátrica y del envejecimiento"
  ],
  "Gestión de servicios de alimentación e inocuidad": [
   "Nutrición ocupacional y salud en minería"
  ],
  "Nutrición comunitaria y salud pública": [
   "Nutrición en programas sociales del Estado"
  ]
 },
 "mejoras": {
  "Atención nutricional": {
   "def": "Conduce la atención nutricional de la persona sana o enferma a lo largo del ciclo de vida, desde el tamizaje y la valoración hasta el diagnóstico, la prescripción del tratamiento dietoterápico o de soporte, el seguimiento y la consejería al alta, en hospitalización, consulta ambulatoria presencial o virtual, primer nivel y residencias. Aplica el proceso de atención nutricional, el registro en la historia clínica y la interconsulta con el equipo de salud, con el propósito de recuperar o mantener el estado nutricional y de responder por el resultado ante el paciente, su familia y la institución. Demuestra esta competencia con un plan de atención nutricional individualizado registrado en la historia clínica, que integra valoración, diagnóstico, prescripción, seguimiento documentado y consejería al cierre del caso.",
   "caps": [
    {
     "d": "Capacidad para tamizar y valorar el estado nutricional de la persona mediante antropometría, bioquímica, examen clínico y evaluación dietética, integrando los hallazgos en un juicio inicial sobre su situación nutricional. Adapta las técnicas y los instrumentos a la edad, la condición clínica y el escenario de atención, sea hospitalario, ambulatorio o residencial. Moviliza conocimientos de evaluación nutricional y fisiología, junto con rigor en la medición, respeto por la persona y compromiso con un registro veraz y oportuno."
    },
    {
     "d": "Capacidad para formular el diagnóstico nutricional a partir de la valoración, identificando el problema, su etiología y los signos y síntomas que lo sustentan, en personas de distinta edad y con diversas patologías. Integra la interconsulta con el equipo de salud y la evidencia científica disponible para ajustar el diagnóstico al escenario clínico, ambulatorio o residencial. Moviliza conocimientos de fisiopatología y nutrición clínica, juicio clínico, pensamiento crítico y responsabilidad por la decisión que toma y comunica."
    },
    {
     "d": "Capacidad para prescribir e implementar el tratamiento nutricional, que comprende la dietoterapia, el soporte enteral, el manejo del peso, la corrección de deficiencias y la adaptación de texturas, ajustado al diagnóstico formulado. Adecúa la prescripción a la cultura, las preferencias y los recursos del paciente en cada escenario de atención, hospitalario, ambulatorio o residencial. Moviliza conocimientos de fisiopatología y dietoterapia, junto con ética profesional, comunicación efectiva con el equipo de salud y con la familia, y compromiso con la seguridad del paciente."
    },
    {
     "d": "Capacidad para monitorear la respuesta del paciente al tratamiento nutricional, reajustar la prescripción según la evolución, educar al paciente y a su familia y cerrar el caso con consejería al alta. Adapta el seguimiento a la consulta presencial o virtual, al hospital o a la residencia, y a las condiciones de cada persona. Moviliza conocimientos de educación alimentaria y evaluación de la adherencia, junto con constancia, empatía, comunicación clara y compromiso con el resultado y la continuidad del cuidado."
    }
   ],
   "nota": "Elevé el registro académico y la fluidez de la definición, convertí los incisos en oraciones enlazadas y nombré de forma explícita la evidencia del plan individualizado. Amplié cada capacidad con sus cuatro componentes. No cambié la estructura ni el número de capacidades."
  },
  "Intervención poblacional": {
   "def": "Interviene sobre el estado nutricional de una población, sea una comunidad, una unidad territorial o un colectivo de trabajadores, diagnosticando su situación con línea de base y vigilancia, diseñando y ejecutando el programa correspondiente y evaluando su impacto. Actúa en el marco de la salud pública, los programas presupuestales del Estado y la salud ocupacional, con articulación intersectorial y capacitación de agentes, con el propósito de reducir la anemia, la desnutrición, el exceso de peso y el riesgo cardiometabólico y de rendir cuenta del resultado mediante indicadores. Demuestra esta competencia con un plan de intervención poblacional que incluye la línea de base, el programa ejecutado y el informe de evaluación con indicadores de proceso y de impacto sobre la población atendida.",
   "caps": [
    {
     "d": "Capacidad para levantar la línea de base y formular el diagnóstico nutricional de una población mediante vigilancia, indicadores epidemiológicos y tamizaje del riesgo, priorizando los problemas que requieren intervención. Adapta los instrumentos y las fuentes de información a comunidades, unidades territoriales o colectivos laborales, según su acceso, tamaño y características. Moviliza conocimientos de epidemiología nutricional y bioestadística, junto con rigor estadístico, sensibilidad cultural, honestidad en el manejo del dato y compromiso con la equidad."
    },
    {
     "d": "Capacidad para diseñar el programa o la intervención nutricional con objetivos, metas, actividades, presupuesto e indicadores, a partir del diagnóstico poblacional y en coherencia con las prioridades identificadas. Adapta el diseño a la lógica de los programas presupuestales del Estado, de la salud ocupacional o de la cooperación, según el financiamiento y el actor que lo respalda. Moviliza conocimientos de planificación en salud pública y gestión pública, junto con pensamiento estratégico, responsabilidad social y orientación a resultados verificables."
    },
    {
     "d": "Capacidad para ejecutar la intervención nutricional mediante consejería, educación alimentaria, capacitación de agentes comunitarios y articulación con actores locales y sectoriales, conforme al programa diseñado. Adapta las estrategias y los mensajes al territorio, a su cultura alimentaria y a las condiciones de la comunidad o del colectivo de trabajadores. Moviliza conocimientos de educación alimentaria y nutricional y de trabajo comunitario, junto con liderazgo, comunicación efectiva, trabajo intersectorial y respeto por la comunidad y sus saberes."
    },
    {
     "d": "Capacidad para monitorear la ejecución del programa, medir su impacto en comparación con la línea de base y reportar los resultados con indicadores a la autoridad sanitaria o al empleador. Adapta el sistema de monitoreo y el formato del reporte a los contextos públicos, comunitarios y laborales, y a las exigencias de cada financiador. Moviliza conocimientos de evaluación de programas e indicadores de salud, junto con honestidad en el dato, pensamiento crítico, transparencia y orientación a la mejora de la intervención."
    }
   ],
   "nota": "Reescribí la definición con registro académico y fluidez, sustituí los incisos por oraciones enlazadas, y nombré la evidencia del plan poblacional con línea de base e informe de impacto. Amplié las capacidades con sus cuatro componentes sin alterar la estructura ni su número."
  },
  "Alimentación colectiva": {
   "def": "Dirige el servicio de alimentación que provee a pacientes, trabajadores, escolares o usuarios de programas sociales, planificando el menú, estandarizando las preparaciones y sus fichas técnicas, costeando y comprando, asegurando la inocuidad con el sistema HACCP y auditando el cumplimiento sanitario. Ejerce esta dirección en hospitales, concesionarias, campamentos y unidades territoriales del Estado, bajo la norma sanitaria vigente y con indicadores de gestión, con el propósito de entregar una alimentación nutricionalmente adecuada, segura y sostenible en lo económico. Demuestra esta competencia con el plan HACCP del servicio y el expediente de auditoría, que reúne menús, fichas técnicas, costeo, registros de puntos críticos, no conformidades resueltas y el tablero de indicadores.",
   "caps": [
    {
     "d": "Capacidad para planificar menús y planes alimentarios por ciclos que cubran los requerimientos nutricionales del colectivo atendido, sean pacientes, trabajadores, escolares o usuarios de programas sociales, dentro del presupuesto asignado y de la disponibilidad local de alimentos. Adapta la planificación a la cultura alimentaria, al clima y a las condiciones operativas de cada servicio. Moviliza conocimientos de nutrición por grupos, planificación de menús y gestión de recursos, junto con criterio nutricional, sentido económico, creatividad y equidad en la atención del comensal."
    },
    {
     "d": "Capacidad para estandarizar recetas, raciones y fichas técnicas con su perfil nutricional y su costo, y para gestionar las compras y la relación con proveedores en función de esa estandarización. Adapta el nivel de detalle y los procedimientos al tipo de servicio, a su escala de producción y a los productos que elabora, incluidos los alimentos reformulados. Moviliza conocimientos de técnica dietética, composición de alimentos y costeo, junto con precisión, orden, transparencia y responsabilidad en el uso de los recursos."
    },
    {
     "d": "Capacidad para implementar y mantener el sistema HACCP y las buenas prácticas de manipulación de alimentos, identificando los puntos críticos de control, vigilándolos con registros y capacitando al personal del servicio. Adapta el sistema a las condiciones de cocinas hospitalarias, concesionarias y campamentos, y a la complejidad de cada operación. Moviliza conocimientos de microbiología de alimentos, normativa sanitaria y gestión de la calidad, junto con disciplina normativa, prevención del riesgo y responsabilidad por la salud del comensal."
    },
    {
     "d": "Capacidad para supervisar las operaciones del servicio y a sus proveedores, auditar el cumplimiento de la norma sanitaria, gestionar las no conformidades hasta su cierre y reportar indicadores de gestión a la dirección o a la entidad contratante. Adapta la supervisión y la auditoría a servicios propios, concesionados o de programas sociales, y a los requisitos de cada entidad. Moviliza conocimientos de auditoría sanitaria, indicadores de gestión y normativa vigente, junto con objetividad, integridad, comunicación asertiva y orientación a la mejora continua."
    }
   ],
   "nota": "Mejoré el registro y la fluidez de la definición, reemplacé los incisos por oraciones enlazadas y nombré la evidencia del plan HACCP con su expediente de auditoría. Amplié cada capacidad con sus cuatro componentes. No modifiqué la estructura ni el número de capacidades."
  }
 },
 "planFuera": [],
 "planMapa": {
  "Atención nutricional": 0,
  "Intervención poblacional": 2,
  "Alimentación colectiva": 1
 },
 "integrNombre": {
  "Nutrición clínica hospitalaria": "Nutrición clínica: hospitalaria, obesidad y geriátrica",
  "Gestión de servicios de alimentación e inocuidad": "Servicios de alimentación, inocuidad y salud ocupacional",
  "Nutrición comunitaria y salud pública": "Nutrición comunitaria y programas sociales"
 }
};
