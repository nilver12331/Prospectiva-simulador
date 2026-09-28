/* Genera datos/programas.js para la Gestión de Programas Curriculares (programas.html).
   Resume, por carrera real, lo que la tabla, el proyecto y el tablero necesitan sin cargar los datos completos:
   · Fase 1 (datos/<cod>.js): meta, candidatas de la cartera, objetivos, competencias y capacidades.
   · Fase 2 (datos/f2-<cod>.js): especialidades de trabajo, su competencia, potencial y funciones; hasta qué paso hay datos.
   Uso: node herramientas/programas-datos.js */
const fs = require("fs"), path = require("path"), vm = require("vm");
const RAIZ = path.join(__dirname, "..");
const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
const CARRERAS = ["nut", "sis"];
for (const c of CARRERAS) for (const f of [c, "f2-" + c]) vm.runInContext(fs.readFileSync(path.join(RAIZ, "datos", f + ".js"), "utf8"), ctx);

const TIPO = t => "Competencia de " + (t || "atención");
const out = {};
for (const c of CARRERAS) {
  const cod = c.toUpperCase(), D = ctx.DATOS[cod], X = ctx.DATOS2[cod], m = D.meta;
  const comps = X.COMPE.map(([code, name, eks], i) => {
    const a = D.arq[i] || {};
    return {
      code, name, alias: a.alias || name, type: TIPO(a.tipo), caps: (a.caps || []).length,
      esp: eks.map(k => {
        const e = X.ESC.find(x => x.k === k);
        const r = e.integradas.length ? "Integra " + e.integradas.join(" · ") : "Equivale a la competencia";
        return { id: e.k, n: e.n, r, pot: e.pot, fn: e.fn, ambitos: e.ambitos };
      })
    };
  });
  out[cod] = {
    cod, nombre: m.nombre, facultad: "Facultad de " + m.facultad, plan: m.plan, directora: m.directora,
    color: m.color, icono: m.icono, cand: D.esp.length, oe: (D.oe || []).length,
    caps: comps.reduce((a, x) => a + x.caps, 0), hastaF2: X.hasta || "", comps
  };
}
const txt = "/* Generado por herramientas/programas-datos.js; no editar a mano. */\nwindow.PROG_REAL=" + JSON.stringify(out, null, 1) + ";\n";
fs.writeFileSync(path.join(RAIZ, "datos", "programas.js"), txt);
console.log("datos/programas.js:", Object.values(out).map(o => `${o.cod} ${o.comps.length} comp · ${o.comps.reduce((a, x) => a + x.esp.length, 0)} esp`).join(" | "));
