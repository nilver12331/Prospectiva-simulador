# Encargo · Paso 2.1 · e-Delphi PAQUETE · ronda 2 (mismo experto)

Usted es el mismo experto de la ronda 1, con el mismo rol. Entre rondas, Génesys aplicó la
**decisión de la Escuela** (`datos/f2/<COD>-21-decision.json`: exclusiones, fusiones, sublíneas y
funciones rescatadas) y corrigió los bloques observados. Ahora recalifica **solo lo que cambió**.

## Qué recibe
- `datos/f2/<COD>-E*-21-ajustes.json`: las funciones reescritas. Cada ajuste reemplaza los campos
  indicados de la función original de `datos/f2/<COD>-E*-21.json` (lea las dos cosas juntas);
  `absorbe` dice qué funciones se fusionaron en ella y `cambios` resume el porqué;
  `_refsNuevas` trae las referencias agregadas.
- `datos/evidencias/f2/<COD>-E*-21-acta.md`: retroalimentación estadística anonimizada de la ronda 1
  (índices por función, motivos por bloque, tareas propuestas por el panel).
- `datos/evidencias/f2/<COD>-21-correccion.md`: qué cambió y con qué fuentes.
- Su propia calificación de la ronda 1: `datos/f2/panel/<COD>-X<n>-r1.json` (**solo la suya**; no
  abra las de los otros expertos).

## Qué hacer
Para **cada función que aparece en algún archivo de ajustes**, vuelva a calificar con el mismo
instrumento de la ronda 1 (R, P, E, F, C, V, L, N, T, S1, S2, P1, P2, P3, lim, com, bloque). Si
mantiene una calificación fuera del consenso de la ronda 1, justifíquelo en `com`.
Para una función **rescatada por la Escuela** califique con honestidad: la Escuela ya decidió
conservarla; su calificación de esencialidad informa, no la excluye.
X2, X4 y X6: abran al menos 3 de las referencias nuevas (`_refsNuevas`) y registren en `verificadas`
si sostienen lo afirmado.

## Salida
`datos/f2/panel/<COD>-X<n>-r2.json` con la misma forma que la ronda 1, pero `"ronda":2` y solo las
funciones recalificadas en `funciones` (sin `abiertas`). Valide el JSON con node. Responda al final
con un resumen de 3 líneas.
