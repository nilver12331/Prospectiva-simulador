/* Paso 2.1 · momento 2 · cálculo del e-Delphi PAQUETE (determinista).
   Lee las respuestas de los expertos y del guardián y escribe, por especialidad:
     datos/f2/<COD>-<Ek>-21-panel.json          índices y decisión por función y bloque (ronda 1 y, si existe, ronda 2)
     datos/evidencias/f2/<COD>-<Ek>-21-acta.md   acta del juicio de expertos
   Entradas: datos/f2/panel/<COD>-X1..X6-r1.json · <COD>-G-r1.json
             (ronda 2) datos/f2/panel/<COD>-X1..X6-r2.json · datos/f2/<COD>-<Ek>-21-ajustes.json
   Uso: node herramientas/panel-21.js NUT   ·   node herramientas/panel-21.js SIS */
const fs = require("fs"), path = require("path");
const R = path.join(__dirname, ".."), P = f => path.join(R, f);
const leer = f => JSON.parse(fs.readFileSync(P(f), "utf8")), existe = f => fs.existsSync(P(f));
const cod = (process.argv[2] || "NUT").toUpperCase();

/* umbrales declarados antes de la ronda 1 (N = 6) */
const U = {N: 6, real: .75, icvi: .83, cvr: 1, acuerdo: .75, ric: 1, T: .75, bloque: .83};
const med = a => { const s = [...a].sort((x, y) => x - y), n = s.length; return n ? (n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2) : 0; };
const cuart = (a, q) => { const s = [...a].sort((x, y) => x - y), h = (s.length + 1) * q; const lo = Math.max(1, Math.min(s.length, Math.floor(h))), hi = Math.max(1, Math.min(s.length, Math.ceil(h))); return s[lo - 1] + (s[hi - 1] - s[lo - 1]) * (h - Math.floor(h)); };
const ric = a => cuart(a, .75) - cuart(a, .25);
const f2 = x => x.toFixed(2).replace(".", ","), pc = x => Math.round(x * 100) + " %";

const expertos = [1, 2, 3, 4, 5, 6].map(i => `datos/f2/panel/${cod}-X${i}-r1.json`).filter(existe).map(leer);
if (expertos.length < 6) { console.log(`Faltan respuestas: ${expertos.length} de 6 expertos de ${cod}`); process.exit(1); }
const G = existe(`datos/f2/panel/${cod}-G-r1.json`) ? leer(`datos/f2/panel/${cod}-G-r1.json`) : {funciones: {}};
const r2 = [1, 2, 3, 4, 5, 6].map(i => `datos/f2/panel/${cod}-X${i}-r2.json`).filter(existe).map(leer);
/* decisión de la Escuela sobre las propuestas de exclusión (momento 3): excluir · fusionar · sublinea · rescatar */
const ESCUELA = existe(`datos/f2/${cod}-21-decision.json`) ? leer(`datos/f2/${cod}-21-decision.json`).funciones : {};
const ACC = {excluir: "Excluida por la Escuela", fusionar: "Fusionada", sublinea: "Sublínea", rescatar: "Complementaria por decisión de la Escuela"};

function indices(resp) {                 // resp: respuestas de los N expertos a una función
  const n = resp.length, num = k => resp.map(r => +r[k]).filter(x => !isNaN(x));
  const Pp = num("P"), nE = resp.filter(r => /^esencial/i.test(r.E || "")).length;
  const alto = Pp.filter(x => x >= 3).length, acuerdo = Math.max(alto, n - alto) / n;
  return {
    real: resp.filter(r => /^s[ií]/i.test(r.R || "")).length / n,
    icvi: alto / n, cvr: (nE - n / 2) / (n / 2), acuerdo, ricP: ric(Pp),
    F: med(num("F")), C: med(num("C")), V: med(num("V")), L: med(num("L")), N: med(num("N")), Tm: med(num("T")),
    T: num("T").filter(x => x >= 3).length / n,
    S: resp.filter(r => +r.S1 >= 3 && +r.S2 >= 3).length / n,
    Pb: resp.filter(r => +r.P1 >= 3 && +r.P2 >= 3 && +r.P3 >= 3).length / n
  };
}
function decidir(x) {
  const consenso = x.acuerdo >= U.acuerdo && x.ricP <= U.ric;
  if (x.real < .5 || x.icvi < .5 || x.cvr <= 0) return "Propuesta de exclusión";
  if ((x.icvi >= .5 && x.icvi < U.icvi) || x.L < 3) return "Reformular";
  if (x.real >= U.real && x.icvi >= U.icvi && x.cvr >= U.cvr && consenso) return "Función núcleo";
  if (x.real >= U.real && x.icvi >= U.icvi && x.cvr > 0) return "Función complementaria";
  return "Sin consenso";
}
const bloques = (x, dec, fondo) => ({
  fb: dec === "Propuesta de exclusión" ? "no" : (dec === "Reformular" || dec === "Sin consenso" || x.T < U.T || x.Tm < 3 || fondo.includes("F")) ? "rev" : "ok",
  sb: x.S >= U.bloque && !fondo.includes("S") ? "ok" : "rev",
  pb: x.Pb >= U.bloque && !fondo.includes("P") ? "ok" : "rev"
});
/* motivo de cada bloque observado: comentarios de los expertos de ese bloque + guardián */
function motivos(code, st, g) {
  const m = {};
  for (const [b, L] of [["fb", "F"], ["sb", "S"], ["pb", "P"]]) {
    if (st[b] === "ok") continue;
    const c = expertos.map(e => (e.funciones || {})[code]).filter(r => r && r.bloque === L && r.com).map(r => r.com);
    const gn = g && g.fondo && g.fondo.includes(L) ? [g.nota || "el guardián marcó un incumplimiento de fondo"] : [];
    m[b] = [...gn, ...c].slice(0, 2).join(" · ") || "no alcanzó el umbral";
  }
  return m;
}
/* tareas propuestas por ≥ 2 expertos */
function tareasPropuestas(code) {
  const cnt = {}; expertos.forEach(e => (((e.funciones || {})[code] || {}).tareas || {}).agregar?.forEach(t => { const k = t.toLowerCase().slice(0, 40); cnt[k] = cnt[k] || {t, n: 0}; cnt[k].n++; }));
  return Object.values(cnt).filter(x => x.n >= 2).map(x => x.t);
}

const ESP = fs.readdirSync(P("datos/f2")).filter(f => new RegExp(`^${cod}-E\\d+-21\\.json$`).test(f)).map(f => leer("datos/f2/" + f));
for (const E of ESP) {
  const out = {}, filas = [];
  const aj = existe(`datos/f2/${cod}-${E.k}-21-ajustes.json`) ? leer(`datos/f2/${cod}-${E.k}-21-ajustes.json`) : {};
  for (const f of E.funciones) {
    const resp = expertos.map(e => (e.funciones || {})[f.c]).filter(Boolean);
    if (resp.length < 6) { console.log(`  ${f.c}: solo ${resp.length} respuestas`); }
    const x = indices(resp), dec = decidir(x), g = (G.funciones || {})[f.c] || {}, fondo = g.fondo || [];
    const b1 = bloques(x, dec, fondo);
    let b2 = null, d2 = null;
    const esc = ESCUELA[f.c] || null;
    const resp2 = r2.map(e => (e.funciones || {})[f.c]);
    if (esc && ["excluir", "fusionar", "sublinea"].includes(esc.accion)) {
      b2 = {fb: "no", sb: b1.sb, pb: b1.pb};            // sale del paquete: no se recalifica
    } else if (resp2.filter(Boolean).length >= 6) {        // recalificada en R2: se recalculan sus tres bloques
      const y = indices(resp2.map((r, i) => ({...resp[i], ...r}))); d2 = decidir(y);
      b2 = bloques(y, d2, []);
      if (esc && esc.accion === "rescatar" && b2.fb === "no") b2.fb = "ok";
    } else if (esc && esc.accion === "rescatar") {
      b2 = {fb: "ok", sb: b1.sb, pb: b1.pb};
    }
    const X4 = expertos.find(e => e.rol === "X4"), lim = ((X4 && X4.funciones[f.c]) || {}).lim || f.lim;
    out[f.c] = {icvi: f2(x.icvi), cvr: f2(x.cvr), prioridad: x.F * x.C, N: Math.floor(x.N) || f.conf, lim,
      real: pc(x.real), acuerdo: pc(x.acuerdo), T: pc(x.T), decision: dec, decision2: esc ? ACC[esc.accion] + (esc.destino ? " en " + esc.destino : "") : d2,
      escuela: esc,
      demDelphi: x.F >= 4 ? "Alta" : x.F >= 3 ? (f.dem === "Baja" ? "Media" : f.dem) : "Baja",
      impDelphi: x.V >= 3 ? "Alto" : x.V >= 2 ? "Medio" : "Bajo",
      r1: b1, r2: b2, motivo: motivos(f.c, b1, g), ajustes: aj[f.c] || {}, tareasPanel: tareasPropuestas(f.c), guardian: g.reglas || {},
      ind: {F: x.F, C: x.C, V: x.V, L: x.L, ricP: x.ricP, icviS: f2(x.S), icviP: f2(x.Pb), Tm: x.Tm}};
    filas.push([f.c, f.t, pc(x.real), f2(x.icvi), f2(x.cvr), pc(x.acuerdo), x.ricP.toFixed(1), x.F, x.C, x.F * x.C, x.V, Math.floor(x.N), pc(x.T), f2(x.S), f2(x.Pb), dec,
      ["fb", "sb", "pb"].map(b => ({ok: "✓", rev: "↺", no: "✗"})[b1[b]]).join(" "), b2 ? ["fb", "sb", "pb"].map(b => ({ok: "✓", rev: "↺", no: "✗"})[b2[b]]).join(" ") : "—", esc ? ACC[esc.accion] + (esc.destino ? " en " + esc.destino : "") : (d2 || "—")]);
  }
  const vals = Object.values(out), sCVI = vals.reduce((a, v) => a + parseFloat(v.icvi.replace(",", ".")), 0) / vals.length;
  const nucleo = vals.filter(v => v.decision === "Función núcleo").length, comp = vals.filter(v => v.decision === "Función complementaria").length;
  const obs = vals.filter(v => Object.values(v.r1).includes("rev")).length, excl = vals.filter(v => v.r1.fb === "no").length;
  const perfiles = expertos.map(e => `${e.rol} · ${e.perfil}`);
  const acta = `Panel de ${expertos.length} expertos simulados (X1–X6) y guardián metodológico · ronda${r2.length ? "s 1 y 2" : " 1"} · N = 6: I-CVI ≥ 0,83 y CVR crítico 1,00 (Ayre y Scally, 2014). Un solo panel por carrera: cada experto calificó en su rol todas las especialidades. Pre-validación de agentes: la validación oficial la repiten especialistas humanos con el mismo instrumento.`;
  const resumen = `${nucleo} núcleo · ${comp} complementarias · ${excl} propuestas de exclusión · ${obs} con bloques observados en R1 · S-CVI/Ave ${f2(sCVI)}`;
  fs.writeFileSync(P(`datos/f2/${cod}-${E.k}-21-panel.json`), JSON.stringify({cod, k: E.k, expertos: perfiles, cvrCrit: "1,00", acta, resumen, sCVI: f2(sCVI), funciones: out}, null, 1));
  const md = `# Acta del Juicio de Expertos — PAQUETE · ${cod}-${E.k} · ${E.especialidad}

Técnica: e-Delphi modificado (RAND/UCLA) · N = 6 · ${r2.length ? "rondas 1 y 2" : "ronda 1"} · calculado por \`herramientas/panel-21.js\` el ${new Date().toISOString().slice(0, 10)}.
Umbrales declarados a priori: Realidad ≥ 75 % · I-CVI ≥ 0,83 · CVR ≥ 1,00 · Acuerdo ≥ 75 % y RIC ≤ 1 · % T ≥ 75 % · I-CVI S y P ≥ 0,83.
${acta}

## Panel
${perfiles.map(p => "- " + p).join("\n")}
- G · Guardián metodológico (no califica)

## Resultados por función
| Función | Título | % Realidad | I-CVI | CVR | Acuerdo | RIC | F | C | Prioridad | V | N | % T | I-CVI S | I-CVI P | Decisión R1 | Bloques R1 (F S P) | Bloques R2 | Decisión final |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
${filas.map(r => "| " + r.join(" | ") + " |").join("\n")}

**S-CVI/Ave del banco:** ${f2(sCVI)} · **Resumen:** ${resumen}

## Decisión de la Escuela (momento 3)
${Object.keys(ESCUELA).filter(c => E.funciones.some(x => x.c === c)).map(c => `- **${c}** · ${ACC[ESCUELA[c].accion]}${ESCUELA[c].destino ? " en " + ESCUELA[c].destino : ""}: ${ESCUELA[c].motivo}`).join("\n") || "Sin decisiones registradas."}

## Bloques observados y motivos
${vals.map((v, i) => Object.keys(v.motivo).length ? `- **${E.funciones[i].c}** · ${Object.entries(v.motivo).map(([b, m]) => `${{fb: "función y tareas", sb: "sustento", pb: "producto"}[b]}: ${m}`).join(" · ")}` : "").filter(Boolean).join("\n") || "Ninguno."}

## Tareas propuestas por dos o más expertos
${vals.map((v, i) => v.tareasPanel.length ? `- **${E.funciones[i].c}**: ${v.tareasPanel.join("; ")}` : "").filter(Boolean).join("\n") || "Ninguna."}

## Preguntas abiertas (funciones faltantes, fusiones y divisiones)
${expertos.map(e => { const a = (e.abiertas || {})[E.k] || {}; const fl = (a.faltantes || []).map(x => x.t).join("; "), fu = (a.fusiones || []).join("; "); return (fl || fu) ? `- ${e.rol}: ${fl ? "faltan: " + fl : ""}${fl && fu ? " · " : ""}${fu ? "fusiones/divisiones: " + fu : ""}` : ""; }).filter(Boolean).join("\n") || "Sin propuestas."}

## Verificación de referencias (X2, X4, X6 y guardián)
${[...expertos.flatMap(e => (e.verificadas || []).filter(v => String(v.ref || "").startsWith(E.k)).map(v => `- ${e.rol} · ${v.ref} · ${v.sostiene === true ? "sostiene" : v.sostiene === false ? "NO sostiene" : "sin verificar"} · ${v.url || ""} ${v.nota || ""}`)),
   ...(G.referencias || []).filter(v => v.esp === E.k).map(v => `- G · ${v.ref} · ${v.abre ? "abre" : "NO abre"} · ${v.sostiene === true ? "sostiene" : v.sostiene === false ? "NO sostiene" : "sin verificar"} · ${v.url || ""}`)].join("\n") || "Sin registros."}

Pendientes para los especialistas humanos: repetir el instrumento con el panel real; E5 (consulta a grupos de interés humanos) y E7 (seguimiento de egresados) no los reemplaza este panel.
`;
  fs.writeFileSync(P(`datos/evidencias/f2/${cod}-${E.k}-21-acta.md`), md);
  console.log(`${cod}-${E.k}: ${resumen}`);
}
