# Prospectiva de Especialidades · Simulador

Simulador estático de la **Fase 1 del rediseño curricular** (método v6.3): seis pasos y veintiún momentos
conducidos por el mentor Génesys, con dos carreras de demostración —**Nutrición Humana** e
**Ingeniería de Sistemas**—. Todo corre en el navegador; no hay servidor ni claves. Pensado para
publicarse en Netlify.

## Qué simula y qué es real

- **Real:** el flujo del método (pasos, momentos, encargos del agente, decisiones de la Escuela,
  compuertas y guardados), las fórmulas de valoración (potencial del mercado × capacidad instalada),
  el panel e-Delphi, la matriz de correspondencia, la puerta G0 y el panel VALOR, las fichas P001 y el
  Estudio Prospectivo con exportación a Word.
- **Simulado:** las respuestas de Génesys. Cada carrera trae en `datos/<cod>.js` la cartera, el plan
  vigente, las competencias derivadas, los objetivos, la propuesta de valor y la narrativa del estudio.
  Los documentos que se "adjuntan" solo se registran por nombre; nada sale del navegador.
- **Persistencia:** el avance de cada carrera se guarda en **Supabase** (tabla `public.avance`, una fila
  por escuela; `js/nube.js`). Todas las páginas piden iniciar sesión (`ingreso.html`); los usuarios se
  crean en el panel de Supabase y comparten el mismo avance. "Reiniciar" borra la fila de la carrera.
  El modo **⚡ Rápido** ejecuta los encargos sin esperas.

## Estructura

```
ingreso.html      inicio de sesión (Supabase)
index.html        portada de las tres fases (Fases 1 y 2 aquí, Fase 3 en el artefacto de Claude)
fase1.html        portada de la Fase 1: elegir carrera, ver el avance, reiniciar
consola.html      la consola de la Fase 1 (Génesys · tablero · progreso)
fase2.html        portada de la Fase 2: elegir carrera, ver el avance, reiniciar
consola2.html     la consola de la Fase 2 (motor portado del artefacto «Funciones Profesionales»)
css/fase2.css     estilos de la consola de la Fase 2
js/f2.js          motor de la Fase 2: especialidad por especialidad (2.1–2.3) y pasos de escuela (2.4–2.6)
datos/f2-*.js     datos de la Fase 2 por carrera (generados; no editar a mano)
datos/f2/         resultados reales por especialidad: paquete 2.1, panel, asignación, insumos
css/base.css      estilos del tablero (heredados del artefacto)
css/tema.css      tema visual del simulador (tipografía, barra, stepper, chat)
js/app.js         motor: modelo, vistas, guion de Génesys, encargos, guardado
js/tema.js        stepper de pasos, modo rápido, botón superior
js/nube.js        sesión y avance en Supabase (URL y clave pública del proyecto)
datos/nut.js      Nutrición Humana (NUT)
datos/sis.js      Ingeniería de Sistemas (SIS)
herramientas/     scripts de refactor, servidor local y prueba automática
netlify.toml      cabeceras y carpeta de publicación
```

## Fase 2

La consola de la Fase 2 lee `datos/f2-<cod>.js`, que arma `herramientas/f2-datos.js` a partir de la
Fase 1 de la carrera (cartera, grupos integrados, competencias y capacidades) y de los resultados
reales de cada momento que «piensa» Génesys, ejecutados por agentes:

| Momento del 2.1 | Encargo | Salida |
|---|---|---|
| 1 · Generar el paquete funcional | `herramientas/encargo-2-1.md` (un agente por especialidad) | `datos/f2/<COD>-<Ek>-21.json` y bitácora en `datos/evidencias/f2/` |
| 2 · e-Delphi PAQUETE | `herramientas/encargo-panel-21.md` (6 expertos + guardián por carrera) | `datos/f2/panel/` → `node herramientas/panel-21.js <COD>` |
| 4 · Asignar, EPA y suficiencia | `herramientas/encargo-asig-21.md` (un agente por carrera) | `datos/f2/<COD>-<Ek>-21-asig.json` |

Luego: `node herramientas/f2-datos.js`. `DATOS2.<COD>.hasta` indica hasta qué paso hay datos; lo
que sigue aparece «por generar» en la consola. El avance se guarda en Supabase con la clave `F2-<COD>`.

## Probar en local

```bash
node herramientas/servir.js 8090      # http://localhost:8090
bash herramientas/probar.sh           # recorre los 21 momentos de las dos carreras en Chrome headless
```

`probar.sh` imprime, por carrera, el estado tras cada acto, si cada vista renderiza y si quedaron
errores o plantillas sin resolver. Necesita Google Chrome instalado.

## Publicar en Netlify

Arrastrar la carpeta al panel de Netlify, o conectar el repositorio: `netlify.toml` publica la raíz
y no hay paso de build.

## Agregar una carrera

1. Copiar `datos/sis.js` a `datos/<cod>.js` y cambiar `DATOS.<COD>` y `meta` (código, nombre,
   facultad, plan, área, campo, dirección, icono, color, lema).
2. Reescribir `esp`, `plan`, `arq`, `traza`, `eq`/`extra`, `sinEncaje`, `capSinEsp`, `coh`, `oe`,
   `vpc`, `vp`, `sus`, `narr`, `narrRef` y las frases del `guion`. Las claves de `desc`, `puesto`,
   `emprende` y `req` deben coincidir con los nombres de `esp`.
3. Incluir el archivo en `fase1.html` y `consola.html` con una etiqueta `<script>`.
4. Comprobar puntajes y límites de palabras con `bash herramientas/probar.sh`.

Los puntajes se calculan en el tablero: potencial = 35 % demanda + 30 % tendencia + 20 % impacto +
15 % sostenibilidad; capacidad = 30 % docentes + 25 % campos + 20 % infraestructura +
15 % diferenciación + 10 % habilitación; cortes 65 y 60.
