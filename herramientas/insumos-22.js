/* Prepara los insumos del paso 2.2 (elementos de productividad) y 2.3 (temas nucleares) por especialidad:
   datos/f2/insumos/<COD>-<Ek>-22.json, a partir de lo que el 2.1 dejó en datos/f2-<cod>.js.
   Solo las funciones que siguen en el paquete (matriz de asignación), con su título tras la ronda 2.
   Uso: node herramientas/insumos-22.js */
const fs = require("fs"), path = require("path"), vm = require("vm");
const RAIZ = path.join(__dirname, "..");
const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
for (const f of ["nut", "sis", "f2-nut", "f2-sis"]) vm.runInContext(fs.readFileSync(path.join(RAIZ, "datos", f + ".js"), "utf8"), ctx);

for (const cod of ["NUT", "SIS"]) {
  const X = ctx.DATOS2[cod], F1 = ctx.DATOS[cod];
  for (const e of X.ESC) {
    const D = X.esp[e.k], A = X.ARQ[e.c];
    const arq = F1.arq.find(a => a.n === A.n) || {};
    const vivas = D.alloc.map(r => r[0].split(" · ")[0]);
    const funciones = vivas.map(c => { const f = D.FN[c], aj = (f.panel && f.panel.ajustes) || {};
      return {c, t: aj.t || f.t, d: aj.d || f.d, tipo: f.tipo, amb: aj.amb || f.amb || "", conf: f.conf, lim: f.lim, dem: f.dem, imp: f.imp,
        capacidades_que_moviliza: f.capm || "",
        tasks: (aj.tasks || f.tasks).map(t => ({code: t.code, t: t.t, ent: t.ent})),
        producto: {nombre: (aj.prod || f.prod || {}).name, desc: (aj.prod || f.prod || {}).desc, entregables: ((aj.prod || f.prod || {}).ents || []).map(x => ({n: x.n, t: x.t, tareas: x.codes, resumen: x.sum, evidencias: x.ev}))}}; });
    const out = {
      cod, k: e.k, carrera: X.meta.nombre, especialidad: e.n, integradas: e.integradas, ambitos: e.ambitos,
      otras_especialidades_de_la_escuela: X.ESC.filter(o => o.k !== e.k).map(o => ({k: o.k, n: o.n})),
      competencia_v11: {codigo: e.c, nombre: A.n, alias: A.alias,
        definicion_conceptual: A.def,
        definicion_operacional: (arq.contraste && arq.contraste.defFinal) || "",
        capacidades: A.caps.map(c => ({id: c[0], nombre: c[2], definicion: c[3]}))},
      proposito_clave: D.proposito, funciones
    };
    const dst = path.join(RAIZ, "datos", "f2", "insumos", `${cod}-${e.k}-22.json`);
    fs.writeFileSync(dst, JSON.stringify(out, null, 1));
    console.log(`${cod}-${e.k}: ${funciones.length} funciones · ${funciones.reduce((a, f) => a + f.tasks.length, 0)} tareas → ${path.relative(RAIZ, dst)}`);
  }
}
