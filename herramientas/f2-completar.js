/* Completa datos/f2-<cod>.js con los pasos 2.2 a 2.6 derivados del 2.1 (generación directa de Génesys, sin barrido web):
   · por especialidad: elementos de productividad por función (rec), banco, referencias, temas nucleares (TE) y competencia v1.2 (comp31);
   · por escuela: temas base (TN), dimensiones, competencias disciplinares, panel, agentes, indicadores, pesos, plan vigente y cursos.
   Uso: node herramientas/f2-datos.js && node herramientas/f2-completar.js */
const fs = require("fs"), path = require("path"), vm = require("vm");
const RAIZ = path.join(__dirname, "..");

/* ── catálogos de recursos por carrera: [categoría, nombre, referencia, palabras clave] ── */
const CAT = {
 NUT: [
  ["Estándares","Proceso de Atención Nutricional (Academy of Nutrition and Dietetics) y terminología eNCPT",1,/./],
  ["Estándares","Criterios GLIM para el diagnóstico de la desnutrición (2019)",2,/diagn|tamiz|valora|clín|hospital/i],
  ["Estándares","Guías ESPEN de nutrición clínica y soporte nutricional",3,/soporte|enteral|clín|hospital|terap/i],
  ["Estándares","Ley N.º 30188, Ley de alimentación saludable, y su reglamento",4,/comunit|escolar|program|pobla|educa/i],
  ["Estándares","Principios generales de higiene y sistema HACCP (Codex Alimentarius, CXC 1-1969)",5,/inocu|servicio|aliment|produc|cocina|menú/i],
  ["Estándares","Norma sanitaria para servicios de alimentación colectiva (MINSA/DIGESA)",6,/servicio|colectiv|comedor|concesion|inocu/i],
  ["Estándares","Tablas peruanas de composición de alimentos (CENAN-INS)",7,/./],
  ["Metodologías","Entrevista motivacional y modelo transteórico del cambio",8,/consej|educa|seguim|conduct|alta/i],
  ["Metodologías","Antropometría según protocolo ISAK y guía técnica del MINSA",9,/valora|antropo|tamiz|comunit|vigil/i],
  ["Metodologías","Marco lógico para el diseño y la evaluación de intervenciones",10,/program|interven|proyect|comunit|pobla/i],
  ["Metodologías","Planificación de menús por ciclo y estandarización de recetas",11,/menú|servicio|produc|colectiv|costeo|receta/i],
  ["Herramientas y tecnologías","Software de análisis dietético y cálculo nutricional",12,/./],
  ["Herramientas y tecnologías","Historia clínica electrónica y registro nutricional",13,/clín|hospital|pacien|consult/i],
  ["Herramientas y tecnologías","Sistema de información del estado nutricional (SIEN-INS)",14,/comunit|vigil|pobla|program/i],
  ["Herramientas y tecnologías","Balanzas, tallímetros e impedanciometría calibrados",15,/valora|antropo|tamiz|vigil/i],
  ["Herramientas y tecnologías","Hoja de costeo y sistema de gestión del servicio de alimentación",16,/servicio|costeo|produc|colectiv|compra/i]],
 SIS: [
  ["Estándares","ISO/IEC/IEEE 12207 · procesos del ciclo de vida del software",1,/software|desarrollo|requer|aplicac|sistema/i],
  ["Estándares","ISO/IEC 25010 · modelo de calidad del producto de software",2,/calidad|prueba|software|desarrollo/i],
  ["Estándares","ISO/IEC 27001:2022 y controles de ISO/IEC 27002",3,/segur|riesgo|ciber|incident|protec|audit/i],
  ["Estándares","COBIT 2019 e ISO/IEC 38500 · gobierno de TI",4,/gobier|gesti|proyecto|audit|servicio|portafol/i],
  ["Estándares","ITIL 4 · gestión de servicios de TI",5,/servicio|operac|infra|incident|nube|soporte/i],
  ["Estándares","Ley N.º 29733 de protección de datos personales y su reglamento",6,/dato|segur|analít|protec|privac/i],
  ["Estándares","Decreto Legislativo N.º 1412, Ley de Gobierno Digital",7,/./],
  ["Metodologías","Scrum y gestión ágil de proyectos",8,/./],
  ["Metodologías","CRISP-DM para proyectos de analítica de datos",9,/dato|analít|model|intelig|BI|negocio/i],
  ["Metodologías","DevOps e integración y despliegue continuos (CI/CD)",10,/despl|infra|nube|desarrollo|operac|devops/i],
  ["Metodologías","NIST Cybersecurity Framework 2.0",11,/segur|ciber|riesgo|incident/i],
  ["Metodologías","PMBOK 7 · dirección de proyectos",12,/proyecto|gesti|gobier|portafol/i],
  ["Herramientas y tecnologías","Git y plataformas de repositorio (GitHub o GitLab)",13,/./],
  ["Herramientas y tecnologías","Plataformas de nube pública (AWS, Azure o Google Cloud)",14,/nube|infra|despl|servid|red|dato/i],
  ["Herramientas y tecnologías","Python con pandas y scikit-learn; Power BI",15,/dato|analít|model|intelig|BI|report/i],
  ["Herramientas y tecnologías","Herramientas de monitoreo y seguridad (SIEM, escáneres de vulnerabilidades)",16,/segur|ciber|monitor|incident|red/i]]
};
const REFS = {
 NUT: ["Academy of Nutrition and Dietetics. eNCPT · Electronic Nutrition Care Process Terminology|https://www.ncpro.org/",
  "Cederholm T, et al. GLIM criteria for the diagnosis of malnutrition. Clin Nutr 2019;38(1):1-9|https://pubmed.ncbi.nlm.nih.gov/30181091/",
  "ESPEN. Guidelines and consensus papers|https://www.espen.org/guidelines-home/espen-guidelines",
  "Ley N.º 30188, Ley de Promoción de la Alimentación Saludable para Niños, Niñas y Adolescentes|https://www.gob.pe/institucion/congreso-de-la-republica/normas-legales/4058-30188",
  "FAO/OMS. Codex Alimentarius · Principios generales de higiene de los alimentos CXC 1-1969|https://www.fao.org/fao-who-codexalimentarius/",
  "MINSA/DIGESA. Normativa sanitaria para servicios de alimentación|https://www.gob.pe/digesa",
  "CENAN-INS. Tablas peruanas de composición de alimentos|https://www.gob.pe/ins",
  "Miller WR, Rollnick S. Motivational Interviewing (3.ª ed.). Guilford Press, 2013|https://www.guilford.com/",
  "ISAK. International Standards for Anthropometric Assessment|https://www.isak.global/",
  "CEPAL. Metodología del marco lógico para la planificación de proyectos|https://www.cepal.org/",
  "Payne-Palacio J, Theis M. Foodservice Management: Principles and Practices. Pearson|https://www.pearson.com/",
  "Software de análisis dietético (documentación del fabricante)|https://www.nutrium.com/",
  "Ley N.º 30024, Ley que crea el Registro Nacional de Historias Clínicas Electrónicas|https://www.gob.pe/",
  "INS-CENAN. Sistema de Información del Estado Nutricional (SIEN)|https://www.gob.pe/ins",
  "MINSA. Guía técnica para la valoración nutricional antropométrica|https://www.gob.pe/minsa",
  "Hojas de costeo y sistemas de gestión de servicios de alimentación (documentación del proveedor)|https://www.gob.pe/"],
 SIS: ["ISO/IEC/IEEE 12207:2017 Software life cycle processes|https://www.iso.org/standard/63712.html",
  "ISO/IEC 25010:2023 Product quality model|https://www.iso.org/standard/78176.html",
  "ISO/IEC 27001:2022 Information security management systems|https://www.iso.org/standard/27001",
  "ISACA. COBIT 2019 Framework|https://www.isaca.org/resources/cobit",
  "AXELOS. ITIL 4|https://www.axelos.com/certifications/itil-service-management",
  "Ley N.º 29733, Ley de Protección de Datos Personales|https://www.gob.pe/institucion/minjus/normas-legales/243470-29733",
  "Decreto Legislativo N.º 1412, Ley de Gobierno Digital|https://www.gob.pe/institucion/pcm/normas-legales/289706-1412",
  "Schwaber K, Sutherland J. The Scrum Guide (2020)|https://scrumguides.org/",
  "Chapman P, et al. CRISP-DM 1.0 Step-by-step data mining guide (2000)|https://www.the-modeling-agency.com/crisp-dm.pdf",
  "Kim G, et al. The DevOps Handbook (2.ª ed.). IT Revolution, 2021|https://itrevolution.com/",
  "NIST. Cybersecurity Framework 2.0 (2024)|https://www.nist.gov/cyberframework",
  "PMI. Guía del PMBOK (7.ª ed.), 2021|https://www.pmi.org/pmbok-guide-standards",
  "Git · documentación oficial|https://git-scm.com/doc",
  "Documentación oficial de AWS, Microsoft Azure y Google Cloud|https://aws.amazon.com/documentation/",
  "scikit-learn · documentación oficial|https://scikit-learn.org/stable/",
  "OWASP y documentación de herramientas SIEM|https://owasp.org/"]
};
/* ── temas base por carrera: [tema, micro temas, recurso de origen, dimensión, marca] ── */
const TB = {
 NUT: {DIM:[["D-01","Bioquímica y metabolismo nutricional","Explicar","Bioquímica nutricional","Cómo el organismo transforma y regula los nutrientes: macronutrientes, vías metabólicas, gasto energético y micronutrientes."],
            ["D-02","Fisiopatología y razonamiento clínico","Fundamentar","Bases clínicas","Cómo la enfermedad altera el estado nutricional y cómo se razona un diagnóstico."],
            ["D-03","Ciencia de los alimentos e inocuidad","Interpretar","Alimentos e inocuidad","El alimento como objeto: composición, procesamiento, conservación y peligros."],
            ["D-04","Epidemiología y medición en nutrición","Modelar","Medición y población","Cómo se mide el estado nutricional de personas y poblaciones y qué vale una medición."]],
  T:[["Bioquímica de macronutrientes y metabolismo energético","Estructura y función de los macronutrientes|Vías metabólicas centrales|Gasto energético y su estimación|Metabolismo del ayuno y la realimentación","Software de análisis dietético","D-01","principal"],
     ["Micronutrientes: función, deficiencia y suplementación","Vitaminas y minerales|Biodisponibilidad|Cuadros de deficiencia|Suplementación y fortificación","Tablas de composición","D-01","apoyo"],
     ["Fisiopatología de la malnutrición","Desnutrición asociada a la enfermedad|Inflamación y catabolismo|Obesidad y enfermedades crónicas|Criterios GLIM","Criterios GLIM","D-02","principal"],
     ["Razonamiento clínico y diagnóstico nutricional","Lógica del Proceso de Atención Nutricional|Formulación PES|Terminología eNCPT","Proceso de Atención Nutricional","D-02","apoyo"],
     ["Composición y química de los alimentos","Composición proximal|Tablas peruanas|Efecto del procesamiento en los nutrientes","Tablas de composición","D-03","principal"],
     ["Microbiología e inocuidad alimentaria","Peligros biológicos, químicos y físicos|Buenas prácticas de manipulación|Principios HACCP","Sistema HACCP","D-03","apoyo"],
     ["Antropometría y evaluación del estado nutricional","Técnica ISAK|Patrones de referencia OMS|Error de medición","Antropometría ISAK","D-04","principal"],
     ["Epidemiología y bioestadística nutricional","Indicadores de salud y nutrición|Diseños de estudio|Estadística descriptiva e inferencial|Vigilancia nutricional","SIEN-INS","D-04","apoyo"],
     ["Comunicación y comportamiento alimentario","Determinantes de la conducta alimentaria|Modelos de cambio de conducta|Comunicación educativa","Entrevista motivacional",null,null]],
  CD:[["C4","Fundamenta el juicio nutricional",["Fundamenta","el juicio nutricional sobre personas y poblaciones","con la evidencia científica vigente, en cualquiera de las especialidades de la escuela","para responder por las decisiones que toma ante el equipo de salud"],["D-01","D-02"],"Juicio nutricional","Reúne los saberes con que el egresado explica y defiende una decisión nutricional."],
      ["C5","Interpreta el alimento y la medición en nutrición",["Interpreta","la composición y la seguridad del alimento y las mediciones del estado nutricional","frente a la normativa y los patrones de referencia vigentes","para sustentar técnicamente las decisiones de servicio, de programa y de atención"],["D-03","D-04"],"Alimento y medición","Reúne los saberes sobre el alimento como objeto y sobre la medición en nutrición."]]},
 SIS: {DIM:[["D-01","Fundamentos de computación y programación","Explicar","Computación","Algoritmos, estructuras de datos, paradigmas de programación y arquitectura de computadoras."],
            ["D-02","Datos y matemática aplicada","Modelar","Datos y matemática","Modelado de datos, bases de datos, estadística y matemática discreta aplicadas."],
            ["D-03","Redes, sistemas operativos y seguridad","Interpretar","Infraestructura","Cómo se comunican, se ejecutan y se protegen los sistemas de cómputo."],
            ["D-04","Organización, procesos y gestión de TI","Fundamentar","Organización y TI","Cómo la organización crea valor con TI: procesos, proyectos, gobierno y economía."]],
  T:[["Algoritmos y estructuras de datos","Complejidad algorítmica|Estructuras lineales y no lineales|Búsqueda y ordenamiento|Recursividad","Git","D-01","principal"],
     ["Paradigmas y lenguajes de programación","Programación orientada a objetos|Programación funcional|Patrones de diseño","Git","D-01","apoyo"],
     ["Modelado de datos y bases de datos","Modelo entidad-relación|Normalización|SQL|Bases de datos NoSQL","Python y pandas","D-02","principal"],
     ["Estadística y probabilidad aplicada","Estadística descriptiva|Distribuciones|Inferencia y contraste de hipótesis","scikit-learn","D-02","apoyo"],
     ["Matemática discreta y lógica","Lógica proposicional|Conjuntos y relaciones|Grafos","—","D-02","apoyo"],
     ["Redes de computadoras","Modelo TCP/IP|Direccionamiento y enrutamiento|Protocolos de aplicación","Nube pública","D-03","principal"],
     ["Sistemas operativos y virtualización","Procesos y memoria|Sistemas de archivos|Máquinas virtuales y contenedores","Nube pública","D-03","apoyo"],
     ["Fundamentos de seguridad de la información","Confidencialidad, integridad y disponibilidad|Criptografía básica|Gestión del riesgo","ISO/IEC 27001","D-03","apoyo"],
     ["Procesos de negocio y sistemas de información","Cadena de valor|Modelado de procesos BPMN|Tipos de sistemas de información","COBIT 2019","D-04","principal"],
     ["Gestión de proyectos y economía de TI","Ciclo de vida del proyecto|Estimación y costos|Evaluación económica","PMBOK 7","D-04","apoyo"]],
  CD:[["C6","Fundamenta soluciones computacionales",["Fundamenta","las soluciones computacionales que diseña y construye","con los principios de la computación, los datos y la matemática aplicada","para garantizar su corrección, eficiencia y calidad"],["D-01","D-02"],"Soluciones computacionales","Reúne los saberes con que el egresado explica por qué una solución de software o de datos funciona."],
      ["C7","Interpreta la infraestructura y la organización de TI",["Interpreta","la infraestructura tecnológica y la organización en que opera","frente a los estándares de seguridad, servicio y gobierno vigentes","para alinear las TI con el valor y el riesgo de la organización"],["D-03","D-04"],"Infraestructura y organización","Reúne los saberes sobre cómo operan, se protegen y se gobiernan los sistemas en la organización."]]}
};
const ESTR = {NUT:{hito:["N1","N2","N2","N3"]}, SIS:{hito:["N1","N2","N2","N3"]}};

const leerDatos = cod => { const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(RAIZ, "datos", `f2-${cod.toLowerCase()}.js`), "utf8"), ctx); return ctx.DATOS2[cod]; };
const pad = n => String(n).padStart(2, "0");
const minmax = (o, k) => { const v = Object.values(o).map(x => x[k]), mn = Math.min(...v), mx = Math.max(...v);
  Object.values(o).forEach(x => x[k] = mx === mn ? 60 : Math.round(20 + (x[k] - mn) / (mx - mn) * 80)); };

for (const cod of ["NUT", "SIS"]) {
  const X = leerDatos(cod), cat = CAT[cod], refs = REFS[cod], T = TB[cod];
  const TE = [], IND = {}, INDR = {};
  for (const e of X.ESC) {
    const D = X.esp[e.k]; if (!D) continue;
    const vivas = D.alloc.map(r => r[0].split(" · ")[0]);
    const usados = {}; let nAsig = 0;
    /* 2.2 · elementos de productividad por función */
    vivas.forEach(c => {
      const f = D.FN[c], txt = [f.t, f.d, f.amb, (f.tasks || []).map(t => t.t).join(" ")].join(" ");
      const tk = (f.tasks || []).map(t => t.code);
      const elig = cat.map((r, i) => ({r, i})).filter(x => x.r[3].test(txt));
      const porCat = ["Estándares", "Metodologías", "Herramientas y tecnologías"].flatMap(cc => elig.filter(x => x.r[0] === cc).slice(0, cc === "Estándares" ? 3 : 2));
      f.rec = porCat.map((x, j) => { const [cc, nom, rf] = x.r, pre = {Estándares: "E", Metodologías: "M", "Herramientas y tecnologías": "T"}[cc];
        const code = `RH-${pre}${pad(x.i + 1)}`; (usados[code] = usados[code] || {cat: cc, t: nom, fns: new Set(), ref: `[${rf}]`}).fns.add(c); nAsig++;
        return {cat: cc, code, t: nom, apl: `Se aplica en «${f.t}» para ejecutar la tarea con el criterio técnico que exige el producto.`,
          tareas: tk.filter((_, q) => q % 3 === j % 3).slice(0, 2).join(" · ") || tk[0] || "—", dom: ["Domina", "Aplica", "Aplica", "Conoce"][j % 4],
          ap: `Entregable 1: ${((f.prod || {}).ents || [{t: "producto"}])[0].t} — facilita su elaboración — mejora la calidad y la trazabilidad del producto.`, ref: `[${rf}]`}; });
      const segura = /UCI|pacient|clínic|hospital|incident|forense|audit/i.test(txt) && (f.conf || 3) <= 3;
      if (segura) f.rec.push({cat: "Integración de IA generativa", code: "—", t: "Sin integración de IA pertinente",
        apl: "Función con datos identificables o decisiones de riesgo que no admiten apoyo de IA fuera de sistemas institucionales.", tareas: "—", dom: "", ap: "—", ref: "—"});
      else { const code = `RH-IA${pad(Object.keys(usados).filter(k => k.startsWith("RH-IA")).length + 1)}`, t0 = (f.tasks || [{t: f.t}])[0].t;
        usados[code] = {cat: "Integración de IA generativa", t: `Borrador asistido: ${t0.charAt(0).toLowerCase() + t0.slice(1)}`, fns: new Set([c]), ref: "[1]"}; nAsig++;
        f.rec.push({cat: "Integración de IA generativa", code, t: usados[code].t,
          apl: `▪ Tarea: ${t0}\n▪ Autonomía: A2 · borrador que el profesional verifica (nivel de confianza de la función: ${f.conf || 3})\n▪ Herramienta: Modelo de lenguaje de uso general\n▪ Datos permitidos: solo datos simulados o anonimizados\n▪ Verificación: contra el estándar de la función; verifica el estudiante y el docente\n▪ Evidencia: registro de instrucciones y declaración de uso\n▪ Competencia en IA (UNESCO): Aplicar`,
          tareas: (f.tasks || [{code: "—"}])[0].code, dom: "Aplica", ap: "Entregable 1 — acelera el primer borrador; la decisión es del profesional · Relevancia: Complementario", ref: "[1]"}); }
    });
    D.bank = Object.entries(usados).sort().map(([k, v]) => [k, v.cat, v.t, [...v.fns].join(" · ") + (v.fns.size > 1 ? `  (${v.fns.size})` : ""), v.ref]);
    D.rrefs = refs.map((r, i) => [`[${i + 1}]`, ...r.split("|")]);
    const cats = n => D.bank.filter(b => b[1] === n).length;
    D.tot = [`Total: ${D.bank.length} recursos en el banco (${cats("Estándares")} estándares, ${cats("Metodologías")} metodologías, ${cats("Herramientas y tecnologías")} herramientas y tecnologías, ${cats("Integración de IA generativa")} casos de IA generativa) y ${nAsig} asignaciones función–recurso; ${D.bank.filter(b => /\(\d+\)/.test(b[3])).length} recursos se comparten entre dos o más funciones.`];
    /* 2.3 · temas nucleares: uno por entregable de cada función */
    let n = 0;
    vivas.forEach(c => { const f = D.FN[c];
      ((f.prod || {}).ents || []).slice(0, 2).forEach(en => { n++;
        const tks = (f.tasks || []).filter(t => (en.codes || "").includes(t.code));
        TE.push([`TE-${e.k}-${pad(n)}`, `Saberes para ${en.t.charAt(0).toLowerCase() + en.t.slice(1)}`,
          (tks.length ? tks : f.tasks || []).slice(0, 5).map(t => `Fundamento de: ${t.t.charAt(0).toLowerCase() + t.t.slice(1)}`),
          [c], n % 3 === 0 ? "Producto" : n % 2 ? "Tarea" : "Entregable", Math.min(3, Math.max(1, (f.conf || 3) - 1)), [], []]); }); });
    e.prop = n; e.real = true;
    /* competencia v1.2 desde la v1.1 y las funciones */
    const A = X.ARQ[e.c], caps = A.caps, stds = D.bank.filter(b => b[1] === "Estándares").slice(0, 4).map(b => b[2]).join(", ");
    const tecs = D.bank.filter(b => b[1] === "Herramientas y tecnologías").slice(0, 3).map(b => b[2].toLowerCase()).join(", ");
    const amb = [...new Set(vivas.map(c => D.FN[c].amb).filter(Boolean))].slice(0, 3).join("; ");
    D.comp31 = {conc: A.def, conc12: A.def.replace(/\.$/, "") + `, en ${amb || "los ámbitos de la especialidad"}.`,
      capsc12: Object.fromEntries(caps.map(c => [c[0], c[3] || c[2]])),
      op11: A.def, op12: `${A.def.replace(/\.$/, "")}, aplicando ${stds}, con apoyo de ${tecs}, en ${amb || "los ámbitos de la especialidad"}{COM}, con criterios de calidad, seguridad y ética profesional.`,
      cambios: [["Ámbitos", "Precisa los ámbitos reales de las funciones validadas en el 2.1."], ["Estándares validados (2.2)", `Añade ${stds}.`],
        ["Tecnologías (2.2)", `Añade ${tecs} e IA generativa con verificación profesional.`], ["Familias de funciones", `Incorpora las ${vivas.length} funciones validadas de la especialidad.`],
        ["Alcance", "El texto vigente incluye ámbitos que ninguna función validada ejerce. Requiere su decisión."]],
      caps: Object.fromEntries(caps.map(c => [c[0], [c[3] || c[2], c[3] || c[2]]])),
      caps12: Object.fromEntries(caps.map((c, i) => { const fs_ = vivas.filter(k => (D.FN[k].caps || [])[i] === "●");
        return [c[0], [`${(c[3] || c[2]).replace(/\.$/, "")}, aplicando ${stds.split(", ")[i % 3] || stds}, con criterios de calidad y trazabilidad.`, "Incorpora los estándares y las tecnologías validados en el 2.2.", fs_.join(", ") || vivas[0]]]; })),
      prop11: `Esta especialidad te forma para ${A.alias.toLowerCase()} con criterio profesional propio.`, prom11: `Resultados confiables en ${A.alias.toLowerCase()}.`,
      prop12: `Esta especialidad te forma para ${A.alias.toLowerCase()} en ${amb || "escenarios reales"}, con ${stds.split(", ").slice(0, 2).join(" y ")} y herramientas como ${tecs}. Sales sabiendo sustentar cada decisión ante tu equipo y tu organización.`,
      prom12: `Decisiones profesionales sustentadas en ${A.alias.toLowerCase()}, desde el primer día de trabajo.`,
      decision: {aspecto: "Alcance del texto vigente", motivo: "El texto vigente incluye ámbitos que ninguna función validada en el 2.1 ejerce; conviene retirarlos o declararlos como proyección.",
        opA: {label: "Retirar los ámbitos no ejercidos y validar", user: "Retira los ámbitos que ninguna función ejerce y valida.", ins: ""},
        opB: {label: "Mantenerlos como proyección y validar", user: "Mantén esos ámbitos como proyección y valida.", ins: " y en los ámbitos emergentes que la escuela proyecta"}}};
    /* indicadores del 2.5 */
    const fns = vivas.map(c => D.FN[c]), nt = fns.reduce((a, f) => a + (f.tasks || []).length, 0);
    const epa = fns.reduce((a, f) => a + (f.conf || 3), 0) / fns.length, crit = fns.filter(f => /Alto/.test(f.imp || "")).length / fns.length * 5;
    const dom = fns.reduce((a, f) => a + f.rec.reduce((b, r) => b + ({Domina: 3, Aplica: 2, Conoce: 1}[r.dom] || 0), 0), 0);
    IND[e.k] = {A: fns.length + nt / 4, P: epa, C: crit, H: dom};
    INDR[e.k] = {a1: `${fns.length} fn · ${nt} tareas`, p1: `EPA ${epa.toFixed(1).replace(".", ",")}`, c1: `C ${crit.toFixed(1).replace(".", ",")}`, h1: `Σ dominio ${dom}`};
  }
  ["A", "P", "C", "H"].forEach(k => minmax(IND, k));
  /* 2.4 · temas base: los exigen todas las especialidades (o las que comparten el campo) */
  const ks = X.ESC.map(e => e.k);
  const TN = T.T.map((t, i) => { const esp = {}; ks.forEach((k, j) => { if (t[3] === null ? j === 0 : (i + j) % 4 !== 3 || ks.length <= 3) esp[k] = 1 + ((i + j) % 3); });
    if (Object.keys(esp).length < 2 && t[3]) esp[ks[(i + 1) % ks.length]] = 2;
    return [`TN-${pad(i + 1)}`, t[0], t[1].split("|"), t[2], ["Producto", "Tarea", "Entregable"][i % 3], esp, t[3], t[4]]; });
  TE.forEach((t, i) => { const k = t[0].split("-")[1]; const cand = TN.filter(x => x[5][k] && x[6]).map(x => x[0]); t[7] = [cand[i % cand.length]].filter(Boolean);
    t[6] = ks.filter(o => o !== k && i % 4 === 0).slice(0, 1); });
  const nd = T.DIM.length;
  X.TE = TE; X.TN = TN;
  X.DIM0 = T.DIM.map(d => [d[0], d[1], `Producto de dominio: <b>${d[2].toLowerCase()}</b> un caso real de la especialidad con los saberes de la dimensión.`, d[2], d[3], d[4]]);
  X.CDIS0 = T.CD; X.PANELD = Object.fromEntries(T.DIM.map((d, i) => [d[0], [i === nd - 1 ? "0,71" : "1,00", ["0,92", "0,88", "0,95", "0,81"][i % 4]]]));
  X.AGENTES = [...T.DIM.map((d, i) => [`A${i + 1}`, d[3], d[0], `Verifica que el tema base de ${d[3].toLowerCase()} sea el saber previo que la tarea da por sabido.`]),
    ["GD", "Guardián del método", "—", "Aplica la regla: la naturaleza clasifica, la compartición ubica. Rechaza el tema base que en realidad es de especialidad."]];
  X.COHX = {};
  X.IND = IND; X.INDR = INDR; X.ALIASE = Object.fromEntries(X.ESC.map(e => [e.k, (X.ARQ[e.c] || {}).alias || e.n]));
  X.AHPV = [["Y1 · Metodólogo curricular", "0,20", "0,36", "0,22", "0,22", "0,03"], ["Y4 · Docente formador", "0,24", "0,35", "0,19", "0,22", "0,05"],
    ["Y5 · Metodólogo de medición", "0,22", "0,38", "0,20", "0,20", "0,02"], ["Y3 · Empleador", "0,21", "0,39", "0,21", "0,19", "0,07"]];
  X.PLAN5 = {FG: 61, ESPEC: 139, EL: 6, CAP: 24, bESPEC: [130, 150], bEL: [3, 9]};
  X.PL5 = {ciclos: 10, tope: 6, generales: 20};
  /* 2.6 · plan vigente y cursos propuestos */
  X.PLANV = Object.fromEntries(X.ESC.map(e => [e.k, (X.esp[e.k] ? X.esp[e.k].alloc : []).slice(0, 4).map(r => [r[0].split(" · ")[1].replace(/^./, s => s.toUpperCase()), 3])]));
  const CUR = []; let nD = 0, nE = 0;
  T.DIM.forEach(d => TN.filter(t => t[6] === d[0]).forEach(t => { nD++;
    CUR.push([`${cod}-D${pad(nD)}`, t[1], "dimension", d[0], t[7] === "principal" ? 4 : 3, Object.keys(t[5]), [], "N1", 2, [t[0]],
      `Análisis fundamentado de un caso: ${d[2].toLowerCase()} con los saberes de ${t[1].toLowerCase()}.`,
      `Curso de fundamento sobre ${t[2].slice(0, 3).join(", ").toLowerCase()}. Sostiene a las especialidades que lo exigen y entrega un análisis de caso fundamentado.`]); }));
  X.ESC.forEach(e => { const D = X.esp[e.k]; if (!D) return; const vivas = D.alloc.map(r => r[0].split(" · ")[0]);
    for (let i = 0; i < vivas.length; i += 2) { nE++; const g = vivas.slice(i, i + 2), f = D.FN[g[0]];
      CUR.push([`${cod}-E${pad(nE)}`, (D.FN[g[0]].panel && D.FN[g[0]].panel.ajustes && D.FN[g[0]].panel.ajustes.t) || f.t, "especialidad", e.k, g.length > 1 ? 4 : 3, [e.k], g,
        ESTR[cod].hito[Math.min(3, Math.floor(i / 2))], f.conf || 3, TE.filter(t => g.includes(t[3][0])).map(t => t[0]).slice(0, 3),
        (f.prod || {}).name || "Producto integrador de la función", `Curso de especialidad que forma las funciones ${g.join(" y ")} de ${e.n}. Entrega ${((f.prod || {}).name || "su producto").toLowerCase()} y se evalúa con rúbrica.`]); }
    nE++; CUR.push([`${cod}-E${pad(nE)}`, `Electivo avanzado de ${(X.ARQ[e.c] || {}).alias || e.n}`, "electivo", e.k, 3, [e.k], vivas.slice(0, 2), "N3", 4, [], "Caso integrador avanzado", `Electivo avanzado de ${e.n}: resuelve casos no rutinarios con autonomía.`]); });
  CUR.push([`${cod}-P01`, "Práctica preprofesional", "practica", "—", 6, ks, [], "N3", 4, [], "Informe de práctica preprofesional", "Práctica en sede real que integra las funciones núcleo de la especialidad del estudiante."]);
  X.CUR = CUR;
  X.NARR = {tema: {tn: TN[0][0], micro: "Casos integradores y errores frecuentes en la práctica", porque: "lo exigen varias especialidades a nivel de tarea y hoy no está.",
      cand: "Ética profesional y confidencialidad de la información", porqueCand: "lo exigen todas las especialidades, pero antes hay que pasarle la prueba de identificación."},
    huerf: null, panelD: {dim: T.DIM[nd - 1][0], icvi1: "0,71", icvi2: "0,88", motivo: "el panel observa que el nombre junta dos objetos distintos.", nombre2: T.DIM[nd - 1][1]},
    panelC: [{cod: CUR[1][0], obs: "junta dos temas con objetos distintos: se ajusta su tamaño.", fix: `Ajustando ${CUR[1][0]} a 4 créditos`, cr: 4}]};
  X.hasta = "2.6";
  const js = `/* Fase 2 · ${X.meta.nombre} · 2.1 real + 2.2–2.6 generados por herramientas/f2-completar.js — no editar a mano */\nwindow.DATOS2=window.DATOS2||{};\nwindow.DATOS2.${cod}=${JSON.stringify(X)};\n`;
  fs.writeFileSync(path.join(RAIZ, "datos", `f2-${cod.toLowerCase()}.js`), js);
  console.log(`${cod}: TE ${TE.length} · TN ${TN.length} · cursos ${CUR.length} · ${(js.length / 1024).toFixed(0)} KB`);
}
