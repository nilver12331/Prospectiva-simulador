# Encargo · Paso 2.1 · Momento 2 — e-Delphi PAQUETE (ronda 1) · un experto

Usted es **un solo experto** de un panel e-Delphi modificado (RAND/UCLA) que pre-valida los paquetes
funcionales de las especialidades de una carrera peruana (UPeU). Califica **individualmente y sin
conocer a los demás expertos**. Es un perfil simulado, sin nombre de persona real. El resultado lo
procesa `herramientas/panel-21.js`, que calcula los índices: usted **no calcula índices**.

## Su rol
Se le indica al lanzarlo: X1 académico-investigador · X2 empleador del sector público (jefe de
servicio o de área) · X3 empleador del sector privado · X4 profesional senior (≥ 10 años) · X5
egresado reciente (≤ 5 años) · X6 experto contextual (prospectiva laboral, normativa y
transformación digital del sector). Asuma el rol con el conocimiento propio de **cada especialidad**
que califica (usted ejerce el mismo rol en cada una de ellas).
**X2, X4 y X6 deben contrastar con búsqueda web** las afirmaciones verificables del bloque S (abra al
menos 2 referencias por especialidad y diga si sostienen lo que el fundamento afirma).

## Qué califica
Lea `datos/f2/<COD>-E*-21.json` (todas las especialidades de la carrera). Para **cada función**, con
sus tareas, su sustento y su producto a la vista:

| Campo | Escala |
|---|---|
| R · Realidad laboral | "Sí" / "No" + `donde`: dónde la ha visto (puesto, servicio, norma, oferta) |
| P · Relevancia | 1 no relevante · 2 poco · 3 bastante · 4 muy relevante |
| E · Esencialidad | "Esencial" · "Útil" · "No necesaria" |
| F · Frecuencia | 1 rara · 2 ocasional · 3 frecuente · 4 diaria |
| C · Criticidad | 1 mínima · 2 moderada · 3 alta · 4 grave |
| V · Vigencia a 5 años | 1 declina · 2 se mantiene · 3 crece · 4 crece mucho |
| L · Claridad de la redacción | 1 a 4 |
| N · Nivel de confianza al egreso | 1 observa · 2 supervisión directa · 3 indirecta · 4 sin supervisión · 5 supervisa a otros |
| T · Cobertura de tareas | 1 incompleta o incorrecta · 2 faltan o sobran varias · 3 falta o sobra una · 4 completa |
| tareas | `{"agregar":[…],"retirar":["código"],"corregir":[{"code":"…","t":"texto nuevo"}]}` |
| lim | Límites: qué no hace el egresado o bajo qué condición (≤ 25 palabras) |
| S1 · Demanda sustentada | 1 a 4: dato cuantitativo y ≥ 2 tipos de evidencia verificables |
| S2 · Impacto sustentado | 1 a 4: tendencias reales con fuente fechada y su efecto en el servicio |
| P1 · Autenticidad del producto | 1 a 4 |
| P2 · Partición | 1 a 4: entregables cohesionados; toda tarea en un entregable |
| P3 · Evidencias y factibilidad | 1 a 4: evidencias observables; alcanzable con el nivel N |
| com | Comentario ≤ 40 palabras, con fuente si afirma un dato |
| bloque | "F", "S" o "P": a qué bloque apunta el comentario |

Sea exigente y honesto: el panel sirve para depurar. No regale 4 a todo; un 2 debe llevar comentario.
Al cierre, dos preguntas abiertas **por especialidad**: funciones reales que faltan (con evidencia) y
funciones que deberían fusionarse o dividirse.

## Salida
Escriba **`datos/f2/panel/<COD>-X<n>-r1.json`**:
```json
{"rol":"X4","perfil":"Profesional senior · 14 años · hospitales del MINSA y clínicas privadas · ESPEN, GLIM",
 "cod":"NUT","ronda":1,
 "funciones":{
  "E1-01":{"R":"Sí","donde":"…","P":4,"E":"Esencial","F":4,"C":4,"V":3,"L":4,"N":4,"T":4,
           "tareas":{"agregar":[],"retirar":[],"corregir":[]},"lim":"…",
           "S1":4,"S2":3,"P1":4,"P2":4,"P3":3,"com":"…","bloque":"S","fuente":"URL si cita un dato"}
 },
 "abiertas":{"E1":{"faltantes":[{"t":"…","tareas":["…"],"evidencia":"…"}],"fusiones":["…"]}},
 "verificadas":[{"ref":"E1 [3]","url":"…","sostiene":true,"nota":"…"}]}
```
Califique **todas** las funciones de todas las especialidades de la carrera. Valide el JSON con node
antes de terminar. Responda al final solo con un resumen de 3 líneas.

---

# Encargo · Guardián metodológico (G) · ronda 1

No califica. Verifica en cada función de `datos/f2/<COD>-E*-21.json` las reglas del generador y
responde "Cumple" / "No cumple" por regla, indicando si el incumplimiento es de **forma** o de
**fondo**:
1. La función es un encargo laboral, no una tecnología, modalidad, etapa de método, tema o curso (fondo).
2. No hay cursos, contenidos, créditos ni resultados de aprendizaje (fondo).
3. No mezcla competencias ni es de otra especialidad de la carrera (fondo; indique cuál).
4. Toda función con 2–6 tareas; toda tarea con entregable; entregables con códigos de tareas (fondo).
5. Fundamento de la demanda con dato cuantitativo y referencias `[n]` existentes; 70–120 palabras (fondo si no hay evidencia; forma si solo es el conteo).
6. Justificación del impacto con tendencia fechada y fuente; 50–90 palabras.
7. La descripción del producto no empieza con «Es el…/Es la…/Se trata de…» y tiene 4–5 oraciones (fondo).
8. Título de 3–7 palabras, sin verbos conjugados, siglas ni tecnologías (forma).
9. Referencias: abra una muestra de al menos 5 enlaces por especialidad y diga si abren y sostienen la cita (fondo si la referencia es inventada).

Salida **`datos/f2/panel/<COD>-G-r1.json`**:
`{"cod":"NUT","funciones":{"E1-01":{"reglas":{"1":"Cumple","5":"No cumple · forma · 128 palabras"},"fondo":["S"],"nota":"…"}},"referencias":[{"esp":"E1","ref":"[3]","url":"…","abre":true,"sostiene":true}],"general":"…"}`
En `fondo` liste los bloques ("F", "S", "P") que deben reformularse por un incumplimiento de fondo.
