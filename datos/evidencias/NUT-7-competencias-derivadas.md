# NUT · Paso 1.2 · M1 — Competencias derivadas del campo

**Escuela:** Nutrición Humana · **Fecha:** 24-09-2026 · **Sello:** a ciegas del plan · **Agente:** Génesys
**Insumo:** `datos/competencias/NUT-entrada.json` (4 grupos integrados por la Escuela en el 1.1 + 1 mención) · **Salida:** `datos/competencias/NUT-derivadas.json`

Regla que gobierna este registro: *la especialidad no es la unidad de la competencia*. Manda el proceso que ejecuta y la evidencia que entrega; los grupos de la Escuela son el punto de partida, no la respuesta.

---

## 1. Procesos extraídos por especialidad

| Cod | Especialidad | Secuencia de acciones | Ciclo / tramo | Evidencia que entrega | ¿Propia? |
|---|---|---|---|---|---|
| NUT-01 | Nutrición clínica hospitalaria | Tamizar → valorar → diagnosticar → prescribir (dietoterapia, soporte enteral) → seguir → consejería al alta; registra en historia, interconsulta | **Cierra ciclo**: responde por el resultado ante paciente e institución | Plan de atención nutricional individualizado en historia clínica | **Sí** — es la rúbrica base de la atención individual |
| NUT-08 | Nutrición en obesidad y cirugía bariátrica | Valorar → planificar manejo de peso / preparación prebariátrica → intervenir → seguir posquirúrgico (deficiencias, conducta) | Cierra ciclo | Plan de manejo nutricional con seguimiento documentado | **No** — la rúbrica de NUT-01 sirve cambiando el objeto (persona con obesidad, pre/posbariátrico) |
| NUT-14 | Nutrición geriátrica y del envejecimiento | Tamizar adulto mayor → diagnosticar (sarcopenia, disfagia) → tratar (texturas) → seguir en residencia | Cierra ciclo | Plan de atención nutricional individualizado | **No** — misma rúbrica, objeto adulto mayor. El mercado no abre puesto: «tarea dentro del puesto clínico» |
| NUT-04 | Nutrición pediátrica y materna | Antropometría → diagnosticar (anemia, desnutrición aguda, crecimiento) → tratar (lactancia, complementaria) → seguir (CRED, consejería familiar) | Cierra ciclo | Plan de atención nutricional individualizado | **No** — misma rúbrica, objeto niño y gestante. Sin puesto separado (Tarapoto la admite como especialización en la plaza clínica) |
| NUT-02 | Gestión de servicios de alimentación e inocuidad | Planificar menú → estandarizar y costear → comprar → asegurar inocuidad (HACCP, puntos críticos) → supervisar → auditar (no conformidades, indicadores) | **Cierra ciclo**: responde por el servicio ante la institución o el cliente | Plan HACCP y expediente de auditoría del servicio | **Sí** — rúbrica de gestión de un servicio; ninguna otra unidad la produce |
| NUT-09 | Nutrición ocupacional y salud en minería | Valorar al trabajador → planificar (plan alimentario de campamento) → intervenir (educación) → vigilar riesgo cardiometabólico → indicadores | Cierra ciclo sobre el colectivo de trabajadores | Programa nutricional ocupacional con indicadores de salud del trabajador | **No** — la rúbrica del plan poblacional con línea de base e informe (NUT-03) sirve cambiando el objeto (población → trabajadores); el plan alimentario del campamento es el tramo Planificar de NUT-02 |
| NUT-03 | Nutrición comunitaria y salud pública | Diagnosticar población (vigilancia) → planificar la intervención → intervenir (consejería, capacitación de agentes, articulación) → monitorear → evaluar impacto | **Cierra ciclo**: responde por el resultado poblacional ante la autoridad | Plan de intervención poblacional con línea de base e informe de impacto | **Sí** — rúbrica de atención a una población, distinta de la individual (indicadores epidemiológicos, cobertura, impacto) |
| NUT-10 | Nutrición en programas sociales del Estado | Planificar la atención (fichas técnicas) → supervisar proveedores → vigilar sanitariamente → capacitar → monitorear → reportar | Ejecuta la operación de un programa ya diseñado: no diagnostica ni evalúa impacto; cierra el ciclo de gestión de su unidad territorial | Informe de supervisión de la unidad territorial con indicadores | **No** — es el expediente de auditoría de NUT-02 con otro objeto (unidad territorial del programa en vez de servicio propio); capacitación y monitoreo son tramos de NUT-03 |
| NUT-07 (mención) | Desarrollo y reformulación de productos alimentarios | Recibir cartera → reformular perfil nutricional → validar sensorialmente → rotular → registrar | Tramo: recibe encargo de la industria y devuelve producto reformulado | Ficha técnica del producto reformulado y expediente de validación | Parcial — la ficha técnica con perfil nutricional y costo es la de Estandarizar (NUT-02) con objeto producto; el registro sanitario sí sería propio, pero es el tramo que el mercado comparte con ingeniería de alimentos |

**Lectura:** hay solo **tres evidencias propias** en la cartera —el plan individualizado (NUT-01), el plan HACCP con expediente (NUT-02) y el plan poblacional con impacto (NUT-03)—. Tres evidencias propias son tres procesos y, por tanto, tres competencias. Todo lo demás es el mismo proceso sobre otro objeto o un tramo de él.

---

## 2. Agrupación por proceso compartido

| Competencia derivada | Tipo | Proceso común | Especialidades que la sostienen | Justificación |
|---|---|---|---|---|
| **Atención nutricional** — Conducción de la atención nutricional de la persona | atención | Valorar → diagnosticar → prescribir → seguir | NUT-01 ≡ · NUT-08 ámbito · NUT-14 ámbito · NUT-04 ámbito | Cuatro especialidades, un proceso, una rúbrica. Caso medicina: la competencia de atención sostiene varias especialidades que se diferencian por el objeto (adulto hospitalizado, persona con obesidad, adulto mayor, niño y gestante). |
| **Intervención poblacional** — Intervención nutricional en poblaciones | atención | Diagnosticar población → planificar → intervenir → evaluar | NUT-03 ≡ · NUT-09 compartido · NUT-10 compartido | Mismo tipo que la anterior (atención) pero **distinta evidencia**: plan poblacional con línea de base e informe de impacto frente a plan individual en historia. La regla «dos competencias del mismo tipo con la misma evidencia no son dos» no se activa: las rúbricas no son intercambiables. |
| **Alimentación colectiva** — Gestión de servicios de alimentación colectiva con inocuidad | gestión | Planificar → estandarizar → asegurar inocuidad → auditar | NUT-02 ≡ · NUT-10 compartido · NUT-09 compartido | El único proceso de gestión de la cartera. Se consideró separar «auditar» como competencia de aseguramiento y se descartó: el mercado contrata el ciclo completo en un mismo puesto (Sodexo exige HACCP + colegiatura al mismo nutricionista) y la auditoría es un tramo con evidencia propia, es decir, una capacidad. |

**Resultado: 3 competencias** (dentro del rango 3–5). No hay una cuarta: la docencia y la investigación aparecen como funciones de NUT-01, pero ningún puesto las contrata como proceso con evidencia propia; la mención de productos no entró al plan y no abre competencia.

### Dónde el proceso corrigió la agrupación de la Escuela

| Grupo de la Escuela | Lo que dijo la Escuela | Lo que dice el proceso | Decisión |
|---|---|---|---|
| Grupo 1 (NUT-01, 08, 14) y Grupo 4 (NUT-04) | Dos grupos: la pediátrica-materna aparte | Los cuatro ejecutan valorar-diagnosticar-tratar-seguir y entregan el mismo plan individualizado; la rúbrica de NUT-01 sirve para NUT-04 cambiando solo el objeto | **Se funden** en una competencia. NUT-04 queda como ámbito (niño y gestante), no como competencia propia. |
| Grupo 2 (NUT-02, NUT-09) | Un mismo puesto en campamento minero | NUT-09 no ejecuta el proceso de NUT-02: no estandariza, no implementa HACCP ni audita. Valora al trabajador, planifica el menú del campamento, interviene y vigila con indicadores: es intervención poblacional sobre trabajadores más el tramo Planificar de la alimentación colectiva | **Se separa**: NUT-09 es **compartido** (Intervención poblacional + tramo Planificar de Alimentación colectiva). La integración de puesto se respeta en el 1.1; aquí manda el proceso. |
| Grupo 3 (NUT-03, NUT-10) | Un mismo empleador (Estado) | NUT-10 no diagnostica población ni evalúa impacto: gestiona el componente alimentario de un programa ya diseñado (fichas técnicas, proveedores, vigilancia sanitaria, reporte). Su evidencia es un expediente de supervisión, no un plan de intervención. Solo capacita y monitorea, que son tramos de NUT-03 | **Se separa**: NUT-10 es **compartido**, con proceso principal en Alimentación colectiva (ámbito: unidad territorial del programa) y tramos Intervenir/Evaluar en Intervención poblacional. |
| NUT-04 · ¿ámbito compartido con programas? | — | El único tirón hacia lo poblacional es que Cuna Más convoca nutricionistas generales; pero su proceso declarado, sus funciones (CRED, consejería familiar) y su evidencia son individuales. No hay diagnóstico poblacional ni evaluación de impacto en su descripción | **Se mantiene como ámbito** de Atención nutricional. Si en el 1.3 la Escuela demuestra que la contratan para el proceso poblacional, pasa a compartido sin rehacer competencias. |

---

## 3. Capacidades derivadas (tramos con evidencia propia)

| Competencia | Capacidad | Evidencia del tramo |
|---|---|---|
| Atención nutricional | Valorar · Valoración del estado nutricional | Ficha de valoración (antropometría, bioquímica, clínica, dietética) |
|  | Diagnosticar · Diagnóstico nutricional | Diagnóstico nutricional formulado (problema-etiología-signos) |
|  | Prescribir · Prescripción del tratamiento nutricional | Prescripción dietoterápica o de soporte |
|  | Seguir · Seguimiento y consejería del caso | Notas de evolución y consejería al alta |
| Intervención poblacional | Diagnosticar · Diagnóstico nutricional poblacional | Línea de base con indicadores |
|  | Planificar · Diseño de la intervención poblacional | Documento de programa con metas, actividades e indicadores |
|  | Intervenir · Ejecución de la intervención con la población | Registro de ejecución (sesiones, agentes capacitados, articulación) |
|  | Evaluar · Monitoreo y evaluación de impacto | Informe de evaluación con indicadores de proceso e impacto |
| Alimentación colectiva | Planificar · Planificación del menú y del plan alimentario | Ciclo de menús aprobado |
|  | Estandarizar · Estandarización y costeo de preparaciones | Fichas técnicas con perfil nutricional y costo |
|  | Asegurar · Aseguramiento de la inocuidad | Plan HACCP y registros de puntos críticos |
|  | Auditar · Supervisión y auditoría del servicio | Informe de auditoría con no conformidades e indicadores |

Ninguna especialidad de tipo `capacidad`: ninguna entró al plan como tramo puro. La mención NUT-07 se habría comportado como tal (ámbito de Estandarizar), pero no abre capacidad nueva porque no entró.

---

## 4. Relación de cada especialidad del plan

| Cod | Especialidad | Competencia | Relación | Por qué |
|---|---|---|---|---|
| NUT-01 | Nutrición clínica hospitalaria | Atención nutricional | **competencia ≡** | Ciclo completo, misma evidencia |
| NUT-08 | Nutrición en obesidad y cirugía bariátrica | Atención nutricional | ámbito | Mismo proceso, objeto: persona con obesidad / bariátrica |
| NUT-14 | Nutrición geriátrica y del envejecimiento | Atención nutricional | ámbito | Mismo proceso, objeto: adulto mayor |
| NUT-04 | Nutrición pediátrica y materna | Atención nutricional | ámbito | Mismo proceso, objeto: niño y gestante |
| NUT-03 | Nutrición comunitaria y salud pública | Intervención poblacional | **competencia ≡** | Ciclo completo, misma evidencia |
| NUT-09 | Nutrición ocupacional y salud en minería | Intervención poblacional + Alimentación colectiva | compartido | Ciclo poblacional sobre trabajadores + tramo Planificar (menú de campamento) |
| NUT-02 | Gestión de servicios de alimentación e inocuidad | Alimentación colectiva | **competencia ≡** | Ciclo completo, misma evidencia |
| NUT-10 | Nutrición en programas sociales del Estado | Alimentación colectiva + Intervención poblacional | compartido | Gestión del componente alimentario de la unidad territorial + tramos Intervenir/Evaluar |

Las ocho especialidades que entraron al plan tienen competencia. Ninguna queda `+` sin correspondencia.

**Mención NUT-07 · Desarrollo y reformulación de productos alimentarios → capacidad Estandarizar (Alimentación colectiva).** Reformular el perfil nutricional, elaborar la ficha técnica y rotular es estandarizar una preparación con otro objeto (el producto industrial). El registro sanitario y la vigilancia de la competencia quedan **fuera**: es el tramo que Wasi Mikuna contrata indistintamente a nutrición, bromatología o ingeniería de alimentos. No abre competencia porque no entró al plan.

---

## 5. Auditoría por competencia (tabla de elementos)

Primera pasada y corrección antes de entregar.

### 5.1 Atención nutricional

| Elemento | 1.ª pasada | Corrección | Final |
|---|---|---|---|
| Verbo de acción | Sí — «Conducir» | — | Sí |
| Objeto o ámbito | Ajustar — decía «la persona»; faltaba el ciclo de vida que sostiene los ámbitos pediátrico y geriátrico | Se añadió «sana o enferma a lo largo del ciclo de vida» | Sí |
| Condiciones o contexto | Sí — hospitalización, consulta presencial o virtual, primer nivel, residencias; PAN, historia clínica, interconsulta | — | Sí |
| Propósito | Sí — recuperar o mantener el estado nutricional y responder por el resultado | — | Sí |
| Evidencia | Sí — plan individualizado en historia clínica con sus cuatro partes | — | Sí |
| Nivel al egreso | Ajustar — la primera versión no delimitaba el soporte crítico ni el bariátrico | Se declaró autonomía plena en complejidad estándar y con interconsulta en crítico y bariátrico | Sí |
| Sustento de mercado | Sí — NUT-01 (plaza 276 Tarapoto, Auna, SANNA), NUT-08 (clínicas), NUT-14 y NUT-04 dentro de la plaza clínica | — | Sí |
| Capacidades 2–6 | Sí — 4, cada una con habilidad, acción-objeto, contexto y conocimientos-actitudes-valores | — | Sí |

### 5.2 Intervención poblacional

| Elemento | 1.ª pasada | Corrección | Final |
|---|---|---|---|
| Verbo de acción | Sí — «Intervenir» | — | Sí |
| Objeto o ámbito | Sí — población: comunidad, unidad territorial, colectivo de trabajadores | — | Sí |
| Condiciones o contexto | Sí — salud pública, programas presupuestales, salud ocupacional; vigilancia, articulación, capacitación de agentes | — | Sí |
| Propósito | Ajustar — decía «mejorar la nutrición»; no era medible | Se nombraron los problemas que el mercado paga por reducir: anemia, desnutrición, exceso de peso, riesgo cardiometabólico, y la rendición con indicadores | Sí |
| Evidencia | Sí — plan con línea de base, programa ejecutado e informe con indicadores | — | Sí |
| Nivel al egreso | Sí — autonomía en diagnóstico, ejecución y monitoreo; diseño de programa presupuestal y evaluación de impacto con supervisión | — | Sí |
| Sustento de mercado | Sí — NUT-03 (DIRESA, redes, municipalidades, Cuna Más), NUT-09 (NATCLAR, CIST S/ 8 000), NUT-10 (CAS 094 Áncash) | — | Sí |
| Capacidades 2–6 | Sí — 4 | — | Sí |

### 5.3 Alimentación colectiva

| Elemento | 1.ª pasada | Corrección | Final |
|---|---|---|---|
| Verbo de acción | Sí — «Dirigir» | — | Sí |
| Objeto o ámbito | Sí — el servicio de alimentación a pacientes, trabajadores, escolares, usuarios de programas | — | Sí |
| Condiciones o contexto | Ajustar — no incluía la unidad territorial del Estado, que es el escenario de NUT-10 | Se añadieron «unidades territoriales del Estado» y la norma sanitaria vigente | Sí |
| Propósito | Ajustar — faltaba | Se añadió «alimentación nutricionalmente adecuada, segura y sostenible económicamente» | Sí |
| Evidencia | Sí — plan HACCP y expediente de auditoría con sus piezas | — | Sí |
| Nivel al egreso | Sí — autonomía en complejidad media; HACCP en alta complejidad y auditoría de certificación con supervisión | — | Sí |
| Sustento de mercado | Sí — NUT-02 (Newrest, Sodexo 173 avisos, NATCLAR), NUT-10 (PAE, Cuna Más), NUT-09 (campamentos) | — | Sí |
| Capacidades 2–6 | Sí — 4 | — | Sí |

Las tres competencias quedan con **Sí** en los ocho elementos después de la corrección. Las dos condiciones que la Fase 2 necesita —evidencia y nivel de dominio— están declaradas en las tres.

---

## 6. Validación técnica del JSON

`node valida-nut.js`: JSON válido · 3 competencias (rango 3–5) · 4 capacidades por competencia (rango 2–6) · definiciones de 65–82 palabras · capacidades de 38–46 palabras · las 8 especialidades del plan asignadas, ninguna faltante ni extra · auditoría en Sí en las tres.

## 7. Lo que la Dirección debe saber antes del M2

1. Salieron **tres** competencias, no cuatro como grupos había: el mercado paga tres evidencias distintas, no cuatro.
2. Dos especialidades son **compartidas** (ocupacional y programas sociales). No es una ambigüedad: es que el puesto real —el nutricionista de campamento y el especialista alimentario de la unidad territorial— ejerce dos procesos. El 1.3 debe cruzarlas en las dos competencias.
3. La pediátrica-materna quedó como **ámbito**, aunque el método la cita como ejemplo de compartido: aquí no se tomó el ejemplo, se tomó el insumo. Si la Escuela tiene evidencia de que la contratan para el proceso poblacional, se marca compartido en el 1.3 sin rehacer nada.
4. La mención de productos alimentarios **no abre competencia** y solo su tramo de reformulación y ficha técnica encuentra casa (Estandarizar). El registro sanitario queda fuera y así se declara.
5. Nada de lo anterior mira el plan vigente. El contraste es el M2, opcional, y allí se levanta el sello.
