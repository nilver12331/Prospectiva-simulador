# Encargo · Paso 2.1 · Momento 4 — Asignar a capacidades, EPA y suficiencia (una carrera)

Usted ejecuta el **momento 4 del paso 2.1** para todas las especialidades de una carrera. Recién
aquí se leen las capacidades de la Fase 1, **que no se modifican**.

## Insumos
- `datos/f2/insumos/<COD>-E*.json` → `competencia`, `capacidades_SOLO_PARA_MOMENTO_4` y `otras_competencias`.
- `datos/f2/<COD>-E*-21.json` → paquete funcional (funciones, tareas, sustento, producto, referencias).
- `datos/f2/<COD>-E*-21-panel.json` → acta del e-Delphi: decisión por función, índices, bloques y motivos.
- `datos/evidencias/f2/<COD>-E*-21-acta.md` → acta legible.
- `datos/f2/<COD>-E*-21-ajustes.json` → funciones reescritas entre rondas: **aplique cada ajuste sobre
  la función original** antes de asignar (los campos del ajuste reemplazan a los originales).
- **Solo se asignan las funciones que siguen en el paquete**: en el panel, las que tienen
  `decision2` «Excluida por la Escuela», «Fusionada en …» o «Sublínea en …» **no** se asignan ni
  llevan dictamen (su alcance ya está en la función destino). Las «Complementaria por decisión de
  la Escuela» sí se asignan.

## Qué hacer, por especialidad
1. **Matriz de movilización función × capacidad**: por cada función (excepto las que el panel propuso
   excluir), marque cada capacidad de su competencia con `●` (moviliza de forma principal), `○`
   (apoyo) o `""`. El arreglo `marcas` tiene exactamente tantas posiciones como capacidades tiene la
   competencia, en su orden.
2. **Reglas de asignación**:
   - moviliza de forma principal ≥ 1 capacidad de su competencia → `asig: "<Cn>"`;
   - moviliza de forma principal capacidades de esta y de otra competencia → **compartida**:
     `asig: "<Cn> · compartida con <Cm>"`, `otra: "<Cm.k> <acción>"`;
   - no moviliza de forma principal ninguna capacidad propia → **se reasigna**: `asig: "<Cm>"`,
     `otra: "<Cm.k> <acción>"`, y va a `reasignadas`;
   - moviliza todas como apoyo (calidad, evidencia, ética) → **transversal**: marcas todas `○`,
     `asig: "<Cn> · transversal"`;
   - no corresponde a ninguna competencia de la escuela → `asig: "brecha"` y explíquelo en `decisiones`.
3. **Cobertura**: toda capacidad con ≥ 1 función principal; si alguna queda sin función, regístrelo en
   `decisiones` (la capacidad no se elimina). Si una función exige un método o contexto que la
   definición de la capacidad no nombra, proponga un **ajuste de redacción** (no de estructura) en
   `decisiones`, marcado «pendiente de la Escuela».
4. **Alerta de certificación** (paso 4.4): toda función compartida o reasignada que los empleadores
   esperan en el mismo puesto → fila `[función, competencias, puesto donde se exige junta, riesgo si
   la certificación las separa]`.
5. **Prueba de suficiencia para acreditación** por función, con los siete tipos de evidencia
   (E1 normativa · E2 ocupacional ≥ 2 fuentes · E3 mercado ≥ 30 avisos · E4 necesidad social con dato
   · E5 grupos de interés humanos · E6 tendencia fechada · E7 resultados). Mire las referencias
   citadas en `fd` y `ji` y su estado. Dictamen:
   - **S**: fundamento con E1 o E2 y además E3 o E4, verificados; justificación con E6 verificada;
   - **P**: falta uno de esos requisitos, o hay fuentes «No verificado» / «Por sustentar»;
   - **I**: una sola evidencia, o tendencia sin fuente.
   E5 y E7 son de programa: no bajan el dictamen de una función, pero el global nunca es S.
   `dic: {"ev":"E1 (…) · E2 (…) · E4 (dato)","tend":"E6 (…)","d":"S|P|I","acc":"acción concreta para cerrar la brecha o —"}`.

## Salida
Por especialidad, **`datos/f2/<COD>-<Ek>-21-asig.json`**:
```json
{"cod":"NUT","k":"E1","competencia":"C1",
 "funciones":{"E1-01":{"marcas":["●","●","",""],"asig":"C1","otra":"","dic":{"ev":"…","tend":"…","d":"S","acc":"—"}}},
 "reasignadas":[["E1-09 · Título","C3 · nombre de la competencia","C3.3 Asegurar","I-CVI 1,00 · CVR 1,00"]],
 "alertas":[["E1-09 · Título","C1.3 y C3.3","Puesto donde se exigen juntas (fuente)","Riesgo si se separan"]],
 "decisiones":[["2026-09-25","Decisión","Motivo"]]}
```
Valide cada JSON con node. Responda al final con 4 líneas por carrera: asignadas, compartidas,
reasignadas, capacidades sin función y dictamen S/P/I.
