/* Genera datos/f2-<cod>.js para la consola de la Fase 2 (consola2.html).
   Entrada:
   · Fase 1 de la carrera (datos/<cod>.js): cartera valorada, grupos integrados, competencias y capacidades.
   · Paso 2.1 real, por especialidad:
       datos/f2/<COD>-<Ek>-21.json        paquete funcional (momento 1, agente de barrido)
       datos/f2/<COD>-<Ek>-21-panel.json  acta del e-Delphi PAQUETE (momento 2, panel de agentes) — opcional
       datos/f2/<COD>-<Ek>-21-asig.json   asignación a capacidades, EPA y suficiencia (momento 4) — opcional
   Uso: node herramientas/f2-datos.js            (las dos carreras)
        node herramientas/f2-datos.js NUT        (una) */
const fs = require("fs"), path = require("path");
const RAIZ = path.join(__dirname, "..");
const leer = f => JSON.parse(fs.readFileSync(path.join(RAIZ, f), "utf8"));
const existe = f => fs.existsSync(path.join(RAIZ, f));

/* Fase 1: datos de la carrera y el cálculo de potencial y capacidad del motor de la Fase 1 */
global.window = {}; global.DATOS = window.DATOS = {};
for (const f of ["nut", "sis"]) new Function(fs.readFileSync(path.join(RAIZ, "datos", f + ".js"), "utf8"))();
const APP = fs.readFileSync(path.join(RAIZ, "js/app.js"), "utf8").split("\n");
const ini = APP.findIndex(l => l.startsWith("const DEC={")), fin = APP.findIndex((l, i) => i > ini && l.startsWith("};"));
const M = new Function(APP.slice(0, 110).join("\n") + "\n" + APP.slice(ini, fin + 1).join("\n") + "\n;return {calcular,DEC};")();

const ET = {pue: ["Tarea dentro de otro puesto", "Encargo puntual", "Puesto compartido", "Puesto propio a tiempo completo"],
            emp: ["No sostiene negocio propio", "Complemento de ingresos", "Consultorio o servicio propio", "Negocio escalable: consultora o centro"]};
const DEC = {}; for (const [k, v] of Object.entries(M.DEC)) DEC[k] = {cls: v[0], lab: v[1], col: v[2], full: v[3], txt: v[4]};

const ACRED = {
  comun: [
    ["SINEACE – Modelo de acreditación para programas de estudios de educación superior universitaria",
     "Estándar de pertinencia del perfil: el currículo se fundamenta en las tendencias nacionales e internacionales del ejercicio profesional y toma en cuenta la opinión de empleadores, egresados, estudiantes y docentes; las competencias del perfil se refieren a las actividades profesionales básicas del egresado; el programa hace seguimiento a sus egresados."]],
  NUT: [["ACEND (EE. UU.; programas fuera del país como Foreign Dietitian Education)",
     "Misión, metas y objetivos con plan de evaluación; objetivos de empleo de egresados en el campo y de satisfacción de empleadores; el currículo desarrolla las competencias CRDN."]],
  SIS: [["ICACIT / ABET – Criterios para programas de computación e ingeniería",
     "Criterio 2 y 3: objetivos educacionales publicados y consistentes con las necesidades de los constituyentes; resultados del estudiante que habilitan el ejercicio profesional; evaluación y mejora continua con evidencia de empleadores y egresados."]]
};

function construir(cod) {
  const F = DATOS[cod], meta = F.meta;
  /* valorar la cartera como lo hace la consola de la Fase 1 */
  F.esp.forEach(e => {
    const v = (F.vdecl && F.vdecl[e.n]) || e.v || {};
    e.v = {...v}; if (e.vagente) ["dif", "hab"].forEach(k => { if (!e.v[k]) e.v[k] = e.vagente[k]; });
    e.puesto = F.puesto[e.n]; e.emprende = F.emprende[e.n]; M.calcular(e);
  });
  const byN = n => F.esp.find(e => e.n === n);
  /* especialidades del plan = una por competencia (la que la Fase 1 marcó como «comp»), con sus integradas y ámbitos */
  const ESC = [], ARQ = {}, COMPE = [];
  let n = 0;
  for (const [nom, v] of Object.entries(F.eq)) {
    if (v.t !== "comp") continue;
    n++; const k = "E" + n, c = "C" + (v.c + 1), A = F.arq[v.c], e = byN(nom);
    /* lo que la Fase 1 integró en otro grupo no se repite aquí como ámbito */
    const integradaEnOtro = x => Object.entries(F.integr || {}).some(([g, l]) => g !== nom && l.includes(x));
    const absorbidas = Object.entries(F.eq).filter(([x, w]) => w.c === v.c && x !== nom && !integradaEnOtro(x)).map(([x]) => x);
    ESC.push({k, n: (F.integrNombre || {})[nom] || nom, base: nom, c, cn: A.n, fn: e.fn, pot: e.ATR,
      integradas: (F.integr || {})[nom] || [], ambitos: absorbidas.filter(x => !((F.integr || {})[nom] || []).includes(x)), prop: 0});
    ARQ[c] = {n: A.n, alias: A.alias, def: A.def, tipo: A.tipo,
      caps: A.caps.map((x, i) => [c + "." + (i + 1), x.a, x.n, x.d]), prom: ((F.vp || [])[v.c] || [])[1] || ""};
    COMPE.push([c, A.n, [k]]);
  }
  /* cartera de entrada: las del plan (integradas) y las valoradas que no entran */
  const enGrupo = new Set(ESC.flatMap(e => [e.base, ...e.integradas, ...e.ambitos]));
  const esp = [
    ...ESC.map(x => { const e = byN(x.base);
      return {n: x.n, desc: (F.desc || {})[x.base] || "", PRI: Math.round(e.ATR * (e.VIA || 0) / 100), ATR: e.ATR, VIA: e.VIA, dec: e.dec,
        puesto: e.puesto, emprende: e.emprende, sel: true, fn: e.fn,
        pr: [x.integradas.length ? "integra " + x.integradas.join(" y ") : "", x.ambitos.length ? "ámbitos: " + x.ambitos.join(", ") : ""].filter(Boolean).join(" · ") || e.pr || ""}; }),
    ...F.esp.filter(e => !enGrupo.has(e.n) && e.dec !== "recurso").map(e => ({n: e.n, desc: (F.desc || {})[e.n] || "", PRI: e.VIA === null ? null : Math.round(e.ATR * e.VIA / 100),
      ATR: e.ATR, VIA: e.VIA, dec: e.dec, puesto: e.puesto, emprende: e.emprende, sel: false, fn: e.fn, pr: e.pr || ""}))
  ];
  /* paso 2.1 por especialidad */
  const out = {}; let con21 = 0;
  for (const x of ESC) {
    const f21 = `datos/f2/${cod}-${x.k}-21.json`; if (!existe(f21)) continue;
    const P = leer(f21), PAN = existe(`datos/f2/${cod}-${x.k}-21-panel.json`) ? leer(`datos/f2/${cod}-${x.k}-21-panel.json`) : null,
          AS = existe(`datos/f2/${cod}-${x.k}-21-asig.json`) ? leer(`datos/f2/${cod}-${x.k}-21-asig.json`) : null;
    const caps = ARQ[x.c].caps, FN = {}, order = [];
    for (const f of P.funciones) {
      const p = PAN && (PAN.funciones || {})[f.c] || null, a = AS && (AS.funciones || {})[f.c] || null;
      const marcas = a && a.marcas ? a.marcas : caps.map(() => "");
      const capm = caps.filter((c, i) => marcas[i] === "●").map(c => c[0] + " " + c[1]).join(" · ");
      FN[f.c] = {...f,
        conf: p && p.N ? p.N : f.conf, lim: p && p.lim ? p.lim : f.lim,
        /* coherencia con el Delphi: demanda según la frecuencia F e impacto según la vigencia V */
        dem: p && p.demDelphi ? p.demDelphi : f.dem, imp: p && p.impDelphi ? p.impDelphi : f.imp,
        icvi: p ? p.icvi : "", cvr: p ? p.cvr : "", pr: p ? String(p.prioridad || "") : "",
        panel: p ? {r1: p.r1, r2: p.r2 || null, motivo: p.motivo || {}, ajustes: p.ajustes || {}, real: p.real, acuerdo: p.acuerdo, T: p.T,
          escuela: p.escuela || null, decision: p.decision, decision2: p.decision2 || null} : null,
        obs: p ? `I-CVI ${p.icvi} · CVR ${p.cvr} · Prioridad ${p.prioridad}${a && a.dic ? " · Suficiencia: " + a.dic.d : ""}` : "",
        dic: a && a.dic ? a.dic : null,
        caps: marcas, capm: capm || (a ? "Transversal (" + caps[0][0] + "–" + caps[caps.length - 1][0] + ")" : ""), cap: capm,
        asig: a ? a.asig : x.c, otra: a ? (a.otra || "") : "", rec: f.rec || []};
      order.push(f.c);
    }
    /* matriz de asignación: solo las funciones que siguen en el paquete (con la asignación del momento 4), con su título tras la ronda 2 */
    const sigue = k => !AS || !!(AS.funciones || {})[k];
    const alloc = order.filter(sigue).map(k => { const f = FN[k], aj = (f.panel && f.panel.ajustes) || {}; return [`${f.c} · ${aj.t || f.t}`, aj.amb || f.amb || "", ...f.caps, f.otra || "", f.asig || x.c]; });
    const nT = P.funciones.reduce((s, f) => s + f.tasks.length, 0), nE = P.funciones.reduce((s, f) => s + f.prod.ents.length, 0);
    const ver = (P.refs || []).filter(r => /^Verificado/.test(r[3] || "")).length;
    const dics = order.map(k => (FN[k].dic || {}).d).filter(Boolean);
    const fu = P.fuentes || {};
    out[x.k] = {
      order, FN, alloc, refs: P.refs || [], proposito: P.proposito || "", fuentes: fu,
      refsNuevas: existe(`datos/f2/${cod}-${x.k}-21-ajustes.json`) ? (leer(`datos/f2/${cod}-${x.k}-21-ajustes.json`)._refsNuevas || []) : [],
      fuentesLista: (P.fuentesLista || []),
      reassign: AS ? (AS.reasignadas || []) : [],
      alertas: AS ? (AS.alertas || []) : [],
      panel: PAN ? {expertos: PAN.expertos || [], cvrCrit: PAN.cvrCrit || "0,99", acta: PAN.acta || ""} : null,
      acred: [...ACRED.comun, ...(ACRED[cod] || [])],
      decis: [["2026-09-25", "Las capacidades de la competencia se conservan y las funciones se asignan a ellas después de validarlas.", "Las capacidades son el núcleo formativo aplicable en cualquier ámbito de la especialidad."],
              ["2026-09-25", "Cada función lleva un título representativo y su sustento cita referencias con enlace verificable.", "Configuración en la plataforma y sustento ante acreditadores."],
              ...(AS && AS.decisiones ? AS.decisiones : [])],
      resumen: [
        ["Funciones profesionales del paquete", `${order.length}${AS ? ` (${order.filter(k => FN[k].asig && FN[k].asig.includes(x.c)).length} asignadas a ${x.c})` : ""}`],
        ["Tareas clave", String(nT)],
        ["Productos profesionales", `${order.length}, con ${nE} entregables y sus evidencias verificables`],
        ["Fuentes del barrido", `ocupacionales ${fu.O || 0} · normativas ${fu.N || 0} · mercado ${fu.avisos_revisados || fu.M || 0} avisos · estándares ${fu.P || 0}`],
        ["Referencias", `${(P.refs || []).length} (${ver} verificadas)`],
        ...(PAN ? [["Índices del e-Delphi", PAN.resumen || ""]] : []),
        ...(dics.length ? [["Suficiencia para acreditación", `${dics.filter(d => d === "S").length} suficientes · ${dics.filter(d => d === "P").length} parciales · ${dics.filter(d => d === "I").length} insuficientes`]] : [])
      ]};
    x.fn = alloc.length || order.length; con21++;
  }
  const listo21 = ESC.every(x => out[x.k] && out[x.k].panel && out[x.k].alertas);
  return {meta: {cod, nombre: meta.nombre, facultad: meta.facultad, color: meta.color, icono: meta.icono, lema: meta.lema, saludo: meta.directora},
    F1: {esp, ET, DEC}, ESC, COMPE, ARQ, hasta: con21 ? "2.1" : "", esp: out,
    estado: {con21, total: ESC.length, validado: listo21}};
}

const pedidas = process.argv.slice(2).map(s => s.toUpperCase());
for (const cod of (pedidas.length ? pedidas : ["NUT", "SIS"])) {
  const X = construir(cod);
  const js = `/* Fase 2 · ${X.meta.nombre} · generado por herramientas/f2-datos.js el ${new Date().toISOString().slice(0, 16).replace("T", " ")} — no editar a mano */\n` +
    `window.DATOS2=window.DATOS2||{};\nwindow.DATOS2.${cod}=${JSON.stringify(X)};\n`;
  fs.writeFileSync(path.join(RAIZ, "datos", `f2-${cod.toLowerCase()}.js`), js);
  console.log(`${cod}: ${X.ESC.length} especialidades · 2.1 con datos en ${X.estado.con21} · ${(js.length / 1024).toFixed(0)} KB`);
  X.ESC.forEach(e => console.log(`   ${e.k} ${e.c} ${e.n} · ${X.esp[e.k] ? X.esp[e.k].order.length + " funciones" : "sin 2.1"}`));
}
