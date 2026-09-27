# Encargo · Paso 2.1 · Momento 1 — Generar el paquete funcional de UNA especialidad

Usted es el analista de Génesys que ejecuta de verdad el **momento 1 del paso 2.1** (método de rediseño
curricular v6.3) para una especialidad de una carrera peruana (UPeU). El resultado alimenta el
simulador `C:\Proyectos\Prospectiva-Simulador` y será validado después por un panel e-Delphi.
Trabaje con búsqueda web real. **No invente fuentes, cifras, normas ni enlaces.**

## Insumo
Lea `datos/f2/insumos/<COD>-<Ek>.json`. En este momento use **solo**: nombre de la especialidad,
especialidades integradas y ámbitos, descripción de la Fase 1 y la **definición conceptual** de la
competencia. **No lea ni use las capacidades** (`capacidades_SOLO_PARA_MOMENTO_4`): las funciones se
identifican en el mundo laboral, nunca se derivan de las capacidades.
Las especialidades integradas y los ámbitos (p. ej. obesidad, geriatría, pediatría, redes, BI,
protección de datos, auditoría) deben quedar cubiertos por las funciones o sus ámbitos.

## Qué hacer (método)
1. **Propósito clave** en una frase: verbo + objeto + condición + finalidad.
2. **Barrido de fuentes** con al menos **4 de 6 tipos**:
   O ocupacional (O*NET con tareas e importancia, ESCO, CIUO-08) · N normativa (ley del ejercicio,
   reglamentos, MOF/ROF/MAPRO, perfiles de puesto, convocatorias CAS/SERVIR) · M mercado (avisos
   laborales del Perú: meta ≥ 30; si no, declare cuántos revisó) · P estándares profesionales
   (asociaciones, colegios, marcos como SFIA, NICE, ACM/IEEE, ESPEN, ASPEN, AND) · A actores (no hay) ·
   D Diseña tu Vida (no hay). Si una fuente no se puede leer, se declara.
   Recoja en el mismo barrido evidencia de **necesidad social** (dato cuantitativo) y **tendencias**.
3. **Mapa funcional** (análisis funcional OIT/Cinterfor): propósito → funciones clave → funciones
   básicas, cortando donde un egresado de pregrado ejecuta la función completa. **Entre 6 y 12
   funciones.** Cada función con evidencia en ≥ 2 tipos de fuente; si tiene una sola, `unica: true`.
4. **Qué es función:** encargo laboral reconocible que produce un resultado. **No** es función: una
   etapa de método (salvo que se contrate por separado), una tecnología o modalidad (IA, telesalud,
   un software), un tema, un curso, una actitud.
5. **Tareas clave** (2 a 6 por función): verbo + objeto, observables; código `<cód. función>-T<n>`.
6. **Redacción:** descripción funcional = verbo profesional + objeto + finalidad laboral, sin verbos
   académicos. **Título representativo** = frase nominal de 3 a 7 palabras, sin verbos conjugados,
   siglas, cursos ni tecnologías; único y reconocible por un empleador.
7. **Sustento** por función:
   - `tipo`: Actual · Emergente · Futurista · Transversal · En declive
   - `dem`: Alta · Media · Baja
   - `fd` **Fundamento de la demanda**: 70 a 120 palabras, 3 a 5 oraciones. Abre con «Esta función
     tiene demanda porque [necesidad, con un dato cuantitativo]»; sigue con evidencia normativa,
     ocupacional y de mercado, cada una con su número de referencia entre corchetes `[n]`; cierra con
     «Ello exige profesionales capaces de [desempeño].» Combina ≥ 2 tipos de evidencia.
   - `imp`: Alto · Medio · Bajo
   - `ji` **Justificación del impacto**: 50 a 90 palabras. Abre con «En los próximos 5 años, esta
     función tendrá impacto porque [tendencia, con su fuente [n]]»; añade una segunda tendencia o su
     efecto; cierra con «Por eso es necesario que el egresado domine [función clave].» Toda tendencia
     cita una norma aprobada, plan oficial, guía o estudio; si no hay fuente, marque `Por sustentar`.
8. **Producto profesional** por función: nombre específico (no «informe» o «plan» a secas);
   descripción de 4 o 5 oraciones que **empieza con el sustantivo del producto** (nunca «Es el…»,
   «Es la…», «Se trata de…») y cubre sin rótulos: qué es y para qué sirve · qué integra · cómo se
   elabora y verifica · qué decisión orienta y qué desempeño demuestra.
   **Entregables** por alta cohesión y bajo acoplamiento (puede ser único); cada uno con los códigos de
   las tareas que lo producen; **toda tarea queda en un entregable**. **Evidencias** observables (1 a 3
   por entregable).
9. **Propuesta de EPA** (el panel la ajusta): nivel de confianza al egreso 1–5 (1 observa · 2
   supervisión directa · 3 indirecta · 4 sin supervisión · 5 supervisa a otros; 5 no exigible en
   pregrado) y límites.

## Regla de referencias (estricta)
Cada referencia lleva un enlace que **usted abrió y leyó** (portal del Estado, El Peruano, repositorio
institucional, DOI/PubMed, asociación profesional, bolsa de empleo). Si no pudo abrirlo: estado
`No verificado` y no puede ser la única evidencia. Nunca construya enlaces por deducción. Numere
[1]…[n] de forma continua dentro de la especialidad. Entre 15 y 40 referencias es lo normal.

## Salida (obligatoria)
1. **`datos/f2/<COD>-<Ek>-21.json`** (UTF-8, JSON válido) con esta forma exacta:
```json
{
 "cod":"NUT","k":"E1","especialidad":"…","competencia":"C1",
 "proposito":"…",
 "fuentes":{"O":0,"N":0,"M":0,"P":0,"A":0,"D":0,"avisos_revisados":0,"nota":"qué se revisó y qué no se pudo leer"},
 "funciones":[
  {"c":"E1-01","t":"Título representativo","d":"Descripción funcional.","fclave":"Función clave a la que pertenece",
   "tipo":"Actual","amb":"Ámbito(s) donde se ejerce","evid":"O,N,M","unica":false,"frec":"p. ej. 18 de 34 avisos",
   "conf":4,"lim":"Límites y condiciones",
   "tasks":[{"code":"E1-01-T1","t":"…","ent":"1. Título del entregable"}],
   "dem":"Alta","fd":"…","imp":"Alto","ji":"…","refs":"[1] [3] [7]",
   "prod":{"name":"…","desc":"…","ents":[{"n":"1","t":"Título del entregable","codes":"E1-01-T1, E1-01-T2","sum":"qué contiene (frase corta en minúscula)","ev":["evidencia 1","evidencia 2"]}]}}
 ],
 "refs":[["[1]","Autor o entidad. Título. Año","https://…","Verificado"]]
}
```
   Códigos de función: `<Ek>-01`, `<Ek>-02`… El campo `ent` de cada tarea repite exactamente
   «n. Título» del entregable al que pertenece.
2. **`datos/evidencias/f2/<COD>-<Ek>-21-barrido.md`**: bitácora del barrido — propósito clave, fuentes
   revisadas por tipo (con enlaces), avisos revisados y frecuencia por función, lo que no se pudo leer,
   y el mapa funcional (propósito → funciones clave → funciones básicas).

Antes de terminar, valide el JSON con `node -e "JSON.parse(require('fs').readFileSync('<ruta>','utf8'))"`
y compruebe: 6–12 funciones; toda tarea en un entregable; todas las `[n]` citadas existen en `refs`;
fd 70–120 palabras y ji 50–90. Responda al final solo con un resumen de 5 líneas (funciones, fuentes,
referencias verificadas / no verificadas, dudas para el panel).
