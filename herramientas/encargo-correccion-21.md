# Encargo · Paso 2.1 · entre la ronda 1 y la ronda 2 — Génesys corrige el paquete (una carrera)

Usted es el **generador** (Génesys). El panel e-Delphi calificó la ronda 1 y la Escuela ya decidió
qué hacer con las propuestas de exclusión. Ahora aplica esa decisión y corrige lo que el panel
observó, para que los mismos expertos recalifiquen en la ronda 2. **No invente fuentes, cifras ni
enlaces**: toda referencia nueva la abre y la lee (la búsqueda web puede estar agotada: use enlaces
directos conocidos, gob.pe/El Peruano en PDF, repositorios, y declare lo que no pudo abrir).

## Insumos (carrera <COD>)
- `datos/f2/<COD>-E*-21.json` — paquetes de la ronda 1 (no los modifique).
- `datos/f2/<COD>-E*-21-panel.json` — índices, bloques `r1` (ok · rev · no), `motivo` por bloque y
  `tareasPanel` (tareas propuestas por ≥ 2 expertos).
- `datos/evidencias/f2/<COD>-E*-21-acta.md` — acta legible con comentarios, verificación de referencias.
- `datos/f2/panel/<COD>-X*-r1.json` y `<COD>-G-r1.json` — respuestas completas de expertos y guardián.
- `datos/f2/<COD>-21-decision.json` — **decisión de la Escuela** por función: `excluir`, `fusionar`
  (con `destino`), `sublinea` (con `destino`), `rescatar`.

## Qué hacer
1. **Fusiones y sublíneas**: la función destino absorbe el alcance de la absorbida. Reescriba el
   destino (título si hace falta, descripción, tareas 2–6, producto y entregables) para que cubra lo
   absorbido sin superar 6 tareas: agrupe, no sume. Una sublínea se nombra en la descripción o en el
   ámbito del destino y aporta a lo sumo una tarea.
2. **Exclusiones**: si la decisión dice que sus tareas pasan a otra función, incorpórelas allí.
3. **Rescatadas**: quedan como complementarias; corrija sus bloques observados y ajuste el producto a
   lo alcanzable con la mediana N del panel.
4. **Bloques observados en `r1`** (rev) de toda función que sigue en el paquete:
   - **F**: aplique las tareas propuestas por ≥ 2 expertos (`tareasPanel`) y las correcciones que
     pidió el guardián; si hubo duplicado entre especialidades, deje la frontera explícita en `lim`.
   - **S**: reescriba `fd` (70–120 palabras) y/o `ji` (50–90) con evidencia pertinente a *esa*
     función, dato peruano cuando exista, y **el año de la tendencia dentro del texto**. Corrija las
     citas que el panel encontró mal leídas o desactualizadas (p. ej., Wasi Mikuna → Programa de
     Alimentación Escolar del MIDIS, DS 006-2025-MIDIS; síndrome metabólico en mineros; 46,9 % de
     2012; servicios GOB.PE y transacciones PIDE unificados entre especialidades; inventario SBS
     anual y no semestral; 31 300 vacantes anuales de O*NET; Sophos 54 % solo de organizaciones con
     datos cifrados; 40 % de tamaño de equipo, no de demanda). Quite de `refs` las que no se citan.
   - **P**: producto alcanzable al egreso con el nivel N del panel (sin firmas, dictámenes ni
     homologaciones que no le corresponden); entregables con todas las tareas.
5. `conf` = la mediana N del panel (campo `N` del panel); `lim` = el del panel salvo que la fusión
   exija ampliarlo (≤ 25 palabras).
6. Mantenga los **códigos** de las funciones que siguen (la destino conserva el suyo). Las tareas se
   renumeran `<cód>-T1…` en orden.

## Salida
Por especialidad, **`datos/f2/<COD>-<Ek>-21-ajustes.json`** con solo las funciones que cambian:
```json
{"E1-06":{"t":"…","d":"…","tasks":[{"code":"E1-06-T1","t":"…","ent":"1. …"}],"prod":{"name":"…","desc":"…","ents":[…]},
          "fd":"…","ji":"…","refs":"[1] [4] [41]","conf":3,"lim":"…","absorbe":["E1-07"],"cambios":"qué se cambió y por qué (≤ 40 palabras)"},
 "_refsNuevas":[["[41]","Autor. Título. Año","https://…","Verificado"]]}
```
Incluya en cada ajuste **el objeto completo** del campo que cambia (todas las tareas, el producto
completo). Referencias nuevas: numeración continua después de la última de esa especialidad, en
`_refsNuevas`. Una función que absorbe otra de **otra especialidad** (p. ej., SIS E2-06 → E1-10) se
escribe en el archivo de la especialidad del destino.

Además, **`datos/evidencias/f2/<COD>-21-correccion.md`**: tabla `Función | Decisión de la Escuela |
Bloques corregidos | Qué cambió | Fuentes nuevas`, y lo que no se pudo verificar.

Valide los JSON con node y compruebe con `node herramientas/revisar-21.js` que no queden problemas de
forma (aplique mentalmente los ajustes). Responda al final con un resumen de 6 líneas.
