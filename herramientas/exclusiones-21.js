/* Paso 2.1 · momento 3: resume por qué el panel propuso excluir cada función (para la decisión de la Escuela) */
const fs = require("fs"), path = require("path");
const P = f => path.join(__dirname, "..", f);
for (const cod of (process.argv[2] ? [process.argv[2].toUpperCase()] : ["NUT", "SIS"])) {
  const X = [1, 2, 3, 4, 5, 6].map(i => JSON.parse(fs.readFileSync(P(`datos/f2/panel/${cod}-X${i}-r1.json`), "utf8")));
  const G = JSON.parse(fs.readFileSync(P(`datos/f2/panel/${cod}-G-r1.json`), "utf8"));
  const pan = fs.readdirSync(P("datos/f2")).filter(x => x.startsWith(cod + "-E") && x.endsWith("-21-panel.json"));
  for (const f of pan) {
    const A = JSON.parse(fs.readFileSync(P("datos/f2/" + f), "utf8"));
    const B = JSON.parse(fs.readFileSync(P("datos/f2/" + f.replace("-panel", "")), "utf8"));
    for (const [c, v] of Object.entries(A.funciones)) {
      if (v.decision !== "Propuesta de exclusión") continue;
      const E = X.map(x => ((x.funciones[c] || {}).E || "?").toLowerCase());
      const nE = E.filter(e => e.startsWith("esen")).length, nU = E.filter(e => e.startsWith("út") || e.startsWith("ut")).length;
      const g = (G.funciones || {})[c] || {};
      const com = X.map(x => (x.funciones[c] || {}).com || "").filter(s => /fusi|integr|duplic|misma|repite|solap|dentro|absorb|tarea de|sublínea/i.test(s)).map(s => s.slice(0, 120));
      const t = B.funciones.find(x => x.c === c).t;
      console.log(`${cod}-${c} ${t} · esencial ${nE}/6 · útil ${nU}/6 · realidad ${v.real} · guardián ${(g.fondo || []).join("") || "—"}`);
      if (g.nota) console.log("    G: " + g.nota.slice(0, 160));
      com.slice(0, 2).forEach(s => console.log("    · " + s));
    }
  }
}
