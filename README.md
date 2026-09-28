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
ingreso.html      inicio de sesión (Supabase); al entrar lleva a programas.html
programas.html    gestión de programas curriculares: tabla, proyecto de evaluación y tablero (NUT y SIS reales)
css/programas.css estilos de programas.html (artefacto «Programas Curriculares Udato» con el tema de la Fase 1)
js/programas.js   lógica de programas.html: lee el avance de las consolas y guarda la gestión en PRG-<COD>
datos/programas.js resumen de NUT y SIS para programas.html (generado por herramientas/programas-datos.js)
index.html        portada de las tres fases (oculta: redirige a programas.html)
fase1.html        portada de la Fase 1: elegir carrera, ver el avance, reiniciar
consola.html      la consola de la Fase 1 (Génesys · tablero · progreso)
fase2.html        portada de la Fase 2: elegir carrera, ver el avance, reiniciar
consola2.html     la consola de la Fase 2 (motor portado del artefacto «Funciones Profesionales»)
css/fase2.css     estilos de la consola de la Fase 2
js/f2.js          motor de la Fase 2: especialidad por especialidad (2.1–2.3) y pasos de escuela (2.4–2.6)
fase3.html        portada de la Fase 3: elegir carrera, ver la versión del plan, reiniciar
consola3.html     la consola de la Fase 3 (matriz del plan, malla, especialidades, certificaciones, sílabos)
css/fase3.css     estilos de la consola de la Fase 3 (tema de la Fase 1)
js/f3.js          motor de la Fase 3 (portado del artefacto «Matriz del Plan de Estudios»); guarda en F3-<COD>
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

## Gestión de programas

`programas.html` es la entrada después de iniciar sesión. Tiene tres vistas: la tabla de programas
(vigencia, proyecto de evaluación y gestión del perfil), el proyecto de evaluación (recorrido por fases,
tablero por competencia o especialidad, comisión, grupos de interés, documentos, certificado, historial)
y el tablero del programa (indicadores y comunicados). Nutrición Humana e Ingeniería de Sistemas son
reales: el estado de cada paso se lee de lo que guardan las consolas (fila `<COD>` para la Fase 1 y
`F2-<COD>` para la Fase 2, con las mismas reglas de la hoja de ruta de la consola), y cada fase lleva a su
consola. La comisión, los grupos de interés, los documentos, el certificado y las extensiones se guardan en
la fila `PRG-<COD>`. Los demás programas y los indicadores de aula son simulados. Si cambian las
especialidades o competencias de una carrera: `node herramientas/programas-datos.js`.
Se abre una vista directa con `programas.html?proyecto=NUT` o `?tablero=SIS`.

## Fase 3

`consola3.html?escuela=<COD>` es la matriz del Plan de Estudios de la escuela, con la malla, las especialidades,
las certificaciones y el constructor de sílabo. Sistemas usa el plan PE-IS-2025 que trae el motor (64 cursos en 10
ciclos y 4 programas no curriculares). Nutrición Humana usa `datos/f3-nut.js`: el plan PE-NH-2027 propuesto por
Génesys (60 cursos, 200 créditos) con las tres competencias y las doce capacidades reales de la Fase 1 como bloque
de especialidad, sus certificaciones y las estructuras de sílabo de nutrición. Otra escuela se agrega con un
`datos/f3-<cod>.js` que defina `PLANES3.<COD>` con las mismas claves. Los
cursos, los niveles por capacidad, la secuencia y el versionado se guardan en Supabase en la fila
`F3-<COD>` cuando algo cambia; las preferencias de vista quedan en el navegador.

Sílabos investigados por Génesys: `datos/silabos-sis.js` trae el sílabo completo de SIS332 Big Data y SIS333
Gobierno de Tecnologías de Información (tres unidades, 16 sesiones con las horas de la matriz, evaluación y
referencias). Al pulsar «Generar sílabo» en esos cursos, el constructor muestra la traza de cada momento M1–M9
y entrega ese sílabo; el resto de cursos se sigue armando con el banco genérico. Para agregar otro curso, se
añade su clave en `SILABOS_GENESYS` con el mismo formato.

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

Requiere Node.js 22 o posterior. Copiar `.env.example` a `.env` y completar
`SUPABASE_URL` y `SUPABASE_PUBLISHABLE_KEY` con la URL y la clave pública del proyecto.
Si `.env` ya existe, conservar sus valores. El servidor lee ese archivo al iniciar y entrega
`js/config.js` al navegador; reiniciarlo después de cambiar la configuración.
Las variables del entorno tienen prioridad sobre `.env`. No abrir los HTML directamente.

```bash
node herramientas/servir.js 8090      # http://localhost:8090
bash herramientas/probar.sh           # recorre los 21 momentos de las dos carreras en Chrome headless
```

`probar.sh` imprime, por carrera, el estado tras cada acto, si cada vista renderiza y si quedaron
errores o plantillas sin resolver. Necesita Google Chrome instalado.

## Publicar en Netlify

Con Git: configurar `SUPABASE_URL` y `SUPABASE_PUBLISHABLE_KEY` en las variables de entorno
de Netlify, disponibles durante el build. `netlify.toml` ejecuta `node herramientas/build.js`
y publica únicamente `dist` con Node.js 22.

Para publicar manualmente, ejecutar `node herramientas/build.js` y arrastrar **solo `dist`**
a Netlify. El script lee `.env` local y genera `dist/js/config.js`; no incluye `.env`,
el historial Git ni las herramientas. Volver a ejecutar el build después de cada cambio.

`.env` y `dist/` están excluidos de Git. `.env.example` documenta los nombres sin valores reales.
La URL y la clave `sb_publishable_…` son públicas y llegan al navegador: la protección de datos
sigue dependiendo de Supabase Auth y sus políticas RLS. No usar claves `service_role` ni
`sb_secret_…` en esta configuración; el generador las rechaza.

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
