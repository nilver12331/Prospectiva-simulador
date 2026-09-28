# Encargo · Pasos 2.2 y 2.3 — Elementos de productividad, temas nucleares y competencia v1.2 de UNA especialidad

Usted es el analista de Génesys que ejecuta de verdad los **pasos 2.2 y 2.3** (método de rediseño curricular
v6.3) para una especialidad de una carrera peruana (UPeU). El resultado alimenta el simulador
`C:\Proyectos\Prospectiva-Simulador` (consola de la Fase 2). Trabaje con búsqueda web real cuando necesite
confirmar una norma, un estándar o una herramienta. **No invente fuentes, cifras, normas ni enlaces.**
Escriba en español del Perú, claro y profesional.

## Insumo
Lea `datos/f2/insumos/<COD>-<Ek>-22.json`: la especialidad, la competencia v1.1 (definiciones y capacidades),
el propósito clave y las **funciones validadas en el 2.1** (código, título, descripción, ámbito, nivel de
confianza, tareas con su código y entregable, y el producto con sus entregables y evidencias).
Trabaje **solo** con esas funciones y esos códigos de tarea: no agregue ni quite funciones.

## Qué producir
Un único archivo JSON en `datos/f2/<COD>-<Ek>-22.json` (UTF-8, válido, sin comentarios) con esta forma:

```json
{
 "cod": "NUT", "k": "E1",
 "rec": { "<código de función>": [ <recurso>, ... ], ... },
 "bank": [ [código, categoría, nombre, "funciones", "refs"], ... ],
 "rrefs": [ ["[1]", "referencia en formato breve", "https://enlace-abierto"], ... ],
 "tot": ["Total: N recursos en el banco (a estándares, b metodologías, c herramientas y tecnologías, d casos de IA generativa) y M asignaciones función–recurso; S recursos se comparten entre dos o más funciones."],
 "TE": [ <tema nuclear>, ... ],
 "comp": { <competencia v1.2> }
}
```

### 1 · Paso 2.2 — `rec`: elementos de productividad por función
Para **cada** función del insumo, entre **6 y 11 recursos** que el profesional usa para ejecutar sus tareas,
en cuatro categorías (use exactamente estos textos en `cat`):
`Estándares` · `Metodologías` · `Herramientas y tecnologías` · `Integración de IA generativa`.
Cada función lleva al menos un estándar, una metodología y una herramienta.

Cada recurso es un objeto:
```json
{"cat":"Estándares","code":"RH-E01","t":"Guías ESPEN de tamizaje nutricional (NRS-2002)",
 "apl":"Define el tamizaje del riesgo nutricional del paciente hospitalizado con la herramienta NRS-2002 y su conducta según el puntaje.",
 "tareas":"E1-01-T1","dom":"Domina",
 "ap":"Entregable 1: Tamizaje y valoración — facilita el registro de tamizaje validado — mejora la precisión y la comparabilidad del riesgo.",
 "ref":"[1]"}
```
- `code`: código del banco, único por recurso en toda la especialidad: `RH-E01…` (estándares), `RH-M01…`
  (metodologías), `RH-T01…` (herramientas y tecnologías), `RH-IA01…` (IA). **Si el mismo recurso sirve a
  varias funciones, se repite el mismo código** (eso es lo que el banco cuenta como «compartido»).
- `t`: nombre propio y verificable (norma con su número, guía con su año, método reconocido, software real).
- `apl`: para qué se usa en esta función, en una oración.
- `tareas`: códigos de las tareas del insumo que apoya, separados por « · ».
- `dom`: nivel de dominio que exige al egresado: `Conoce` · `Aplica` · `Domina`.
- `ap`: «Entregable n: nombre — qué facilita — qué mejora del producto».
- `ref`: números de `rrefs` entre corchetes, separados por espacio.
- **Estándares**: normas técnicas y legales peruanas vigentes (ley, reglamento, NTS, NTP, resolución)
  e internacionales (ISO, guías de sociedades científicas, marcos profesionales). Verifique la vigencia.
- **Integración de IA generativa** (una ficha por función cuando sea pertinente) con `apl` en este formato
  de líneas (use el carácter ▪ y saltos de línea `\n`):
  ```
  ▪ Tarea: <tarea que apoya>
  ▪ Autonomía: A0–A3 · <qué hace la IA> (nivel de confianza de la función: n)
  ▪ Herramienta: <tipo de herramienta>
  ▪ Datos permitidos: <qué datos pueden entrar y cuáles nunca>
  ▪ Verificación: <contra qué estándar y quién verifica>
  ▪ Evidencia: <qué deja registrado el estudiante>
  ▪ Competencia en IA (UNESCO): <Comprender · Aplicar · Crear>
  ```
  A0 sin IA · A1 apoyo sin datos reales · A2 borrador verificado · A3 automatización supervisada. La
  autonomía nunca supera lo que permite el nivel de confianza de la función. Si en una función la IA no es
  pertinente (seguridad del paciente, datos identificables fuera de sistemas institucionales, decisiones
  legales), ponga **en su lugar** este registro:
  `{"cat":"Integración de IA generativa","code":"—","t":"Sin integración de IA pertinente","apl":"<motivo en una oración>","tareas":"—","dom":"","ap":"—","ref":"—"}`

### 2 · `bank`, `rrefs` y `tot`
- `bank`: una fila por recurso distinto (no por asignación), ordenada por código:
  `["RH-E03","Estándares","GPC de EsSalud para la desnutrición del adulto (2021)","E1-01 · E1-02  (2)","[3] [4]"]`
  — la cuarta columna lista las funciones que lo usan y, si son dos o más, su número entre paréntesis.
- `rrefs`: todas las referencias citadas, numeradas desde [1]: `["[1]","Autor o entidad. Título (año)","https://…"]`.
  **Cada enlace debe haberlo abierto usted.** Si no pudo abrirlo, use el enlace oficial conocido y agregue
  al final del texto « · Por verificar». Prefiera portales del Estado (gob.pe, El Peruano, MINSA, INACAL,
  SUNEDU), organismos (ISO, OMS, FAO), sociedades científicas y documentación oficial de fabricantes.
- `tot`: un solo texto con los conteos reales, como en el ejemplo de arriba.

### 3 · Paso 2.3 — `TE`: temas nucleares de especialidad
Lo que cada tarea **exige saber** para ejecutarse. Salen de un barrido de tres niveles sobre el producto,
los entregables, las tareas y los recursos del 2.2. **Entre 8 y 16 temas** para la especialidad.
Cada tema es un arreglo de 8 posiciones:
```json
["TE-E1-01","Tamizaje y valoración del riesgo nutricional hospitalario",
 ["Herramientas validadas y sus puntos de corte (NRS-2002, MST, MUST, MNA-SF)","La ventana de 24 a 48 horas y por qué existe","Valoración Global Subjetiva: qué agrega al tamizaje","Conducta según el puntaje y registro del tamizaje"],
 ["E1-01"],"Tarea",3,["E2"],[]]
```
posiciones: `[código, tema, micro temas (4 a 7), funciones de origen, anclaje, nivel, compartido con, candidatos base]`
- código `TE-<Ek>-nn`; el tema es un **saber** nombrado como cuerpo de conocimiento (no un recurso, no una
  tarea, no un curso). Prueba de identificación: si el nombre es una norma, un software o un método
  concreto, eso es un recurso del 2.2, no un tema; el tema es lo que hay que saber para usarlo.
- anclaje: `Tarea` · `Entregable` · `Producto` (el nivel donde se exige); nivel: 1 Conoce · 2 Aplica ·
  3 Domina (el máximo de los recursos que lo originan).
- compartido con: los códigos `Ek` de **otras** especialidades de la misma escuela que casi seguro exigen
  el mismo saber (vea `otras_especialidades_de_la_escuela`); vacío si es propio.
- candidatos base: deje `[]` (lo llena el paso 2.4 de escuela).

### 4 · Competencia v1.2 — `comp`
Con las funciones, sus familias, los estándares y tecnologías validados, Génesys propone la versión 1.2 de
la competencia y sus capacidades. Siga **exactamente** la forma del objeto `COMP` de `js/f2.js`
(líneas 534 a 570), que es el ejemplo real de una especialidad de nutrición clínica:
```json
{
 "conc":   "definición conceptual v1.1 (la del insumo, puede pulir la redacción)",
 "conc12": "definición conceptual v1.2: suma ámbitos reales y continuidad; sin métodos",
 "capsc12": {"C1.1":"definición conceptual v1.2 de la capacidad", ...},
 "op11":   "definición operacional v1.1 (la del insumo; si viene vacía, redáctela desde la conceptual v1.1)",
 "op12":   "definición operacional v1.2: verbo + objeto + integrando saberes + mediante (familias de funciones) + aplicando (estándares validados en 2.2) + con apoyo de (tecnologías) + en (ámbitos){COM} + con criterios de + para (finalidad)",
 "cambios": [["Aspecto","qué cambia y por qué"], ...],
 "caps":   {"C1.1":["conceptual v1.1","operacional v1.1"], ...},
 "caps12": {"C1.1":["operacional v1.2","cambio respecto de v1.1","códigos de las funciones que la movilizan"], ...},
 "prop11": "propuesta de valor v1.1 dirigida al estudiante (90 a 130 palabras)",
 "prom11": "promesa v1.1 (una frase)",
 "prop12": "propuesta de valor v1.2 con los ámbitos, estándares y tecnologías reales",
 "prom12": "promesa v1.2 (una frase)",
 "decision": {
   "aspecto": "nombre corto del punto que exige decisión de la Escuela",
   "motivo": "por qué: qué dice el texto vigente y qué muestran las funciones (1 o 2 oraciones)",
   "opA": {"label":"texto del botón (retira o ajusta)","user":"frase que dice la Escuela","ins":"texto que reemplaza {COM} en op12"},
   "opB": {"label":"texto del botón (mantiene)","user":"frase que dice la Escuela","ins":"texto que reemplaza {COM} en op12"}
 }
}
```
- Use los códigos de capacidad del insumo (`C1.1`, `C2.3`…); las **denominaciones** de las capacidades no cambian.
- `op12` y cada operacional v1.2 citan solo estándares y tecnologías que usted puso en `rec`.
- `cambios`: 5 a 7 filas; la última es el punto de `decision`.
- `decision`: identifique **un punto real** donde el texto vigente y las funciones validadas no coinciden
  (un ámbito que ninguna función ejerce, un método que ya no se usa, un alcance que corresponde a otra
  especialidad). `op12` lleva el marcador `{COM}` exactamente donde entra ese texto; `opA.ins` suele ser
  "" (se retira) y `opB.ins` el texto que se conserva (con su espacio inicial si va tras una coma o una y).

## Reglas
- Verbos en tercera persona para capacidades y competencia; nada de verbos académicos («conocer»,
  «comprender») en `op12` ni en `caps12`.
- Nada inventado: si una norma o guía no la pudo confirmar, no la use o márquela «Por verificar» en `rrefs`.
- Coherencia interna: todo código de tarea en `tareas` existe en el insumo; todo `[n]` existe en `rrefs`;
  todo código de `bank` aparece en algún `rec`.
- Al terminar, valide el JSON con `node -e "JSON.parse(require('fs').readFileSync('<ruta>','utf8'))"` y
  responda con un resumen breve: número de recursos por categoría, asignaciones, compartidos, temas y
  micro temas, referencias verificadas y por verificar, y el punto de decisión propuesto.
