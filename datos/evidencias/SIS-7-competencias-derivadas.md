# SIS · Paso 1.2 · M1 — Competencias Derivadas del Campo

**Escuela:** Ingeniería de Sistemas · **Fecha:** 24-09-2026 · **Agente:** Génesys · **Sello:** a ciegas del plan (no se leyó ni buscó el plan de estudios ni sus competencias; todo sale de `SIS-entrada.json`).

**Insumo:** 11 especialidades que entraron al plan en el 1.1, integradas por la Escuela en 5 grupos (seguridad · gestión TI · datos · infraestructura · desarrollo). **Salida:** `SIS-derivadas.json` — 5 competencias, 25 capacidades, 11 relaciones declaradas.

---

## Paso 1 · Proceso extraído por especialidad

Prueba dura de evidencia propia: *si la rúbrica de otra unidad sirve cambiando solo el objeto, no hay evidencia propia.*

| Cod | Especialidad | Secuencia de acciones | Cierra ciclo / tramo | Evidencia que produce | Propia |
|---|---|---|---|---|---|
| SIS-03 | Ciberseguridad y gestión de riesgos digitales | Evaluar el riesgo → proteger → detectar → responder → recuperar | **Cierra ciclo**: responde por la seguridad ante la organización y el regulador | Informe de riesgos y plan de respuesta a incidentes aprobados | **Sí** |
| SIS-13 | Protección de datos personales y privacidad | Inventariar → diseñar controles → operar → notificar → auditar | Cierra ciclo sobre su objeto (datos personales) | Programa de cumplimiento con registro de incidentes y reportes a la autoridad | **No**: la rúbrica de SIS-03 (riesgo evaluado, controles, incidentes gestionados, reporte al regulador) sirve cambiando «información» por «datos personales» y «SBS» por «ANPDP» |
| SIS-05 | Gestión de proyectos y servicios de TI | Planificar → dirigir → controlar → entregar → operar el servicio | **Cierra ciclo**: responde por el proyecto y el servicio ante la organización | Proyecto entregado con acta de cierre y catálogo de servicios bajo acuerdos de nivel | **Sí** |
| SIS-12 | Auditoría de sistemas y gobierno de TI | Planificar la auditoría → evaluar controles → reportar → seguir hallazgos | **Tramo**: recibe el encargo del comité de auditoría y devuelve un informe; no ejecuta la remediación | Informe de auditoría con hallazgos y plan de remediación | **Sí**: rúbrica distinta (criterio, condición, causa, efecto, recomendación); ninguna otra unidad la produce |
| SIS-06 | Arquitectura empresarial y transformación digital | Diagnosticar → alinear → diseñar la arquitectura → priorizar → medir el valor | **Tramo**: devuelve la hoja de ruta a la alta dirección; la ejecución la hacen los proyectos | Hoja de ruta de transformación aprobada con arquitectura objetivo | **Sí**: rúbrica distinta (diagnóstico de madurez, alineamiento, arquitectura objetivo, priorización) |
| SIS-02 | Ciencia de datos e inteligencia artificial | Gobernar el dato → modelar → entrenar → evaluar → implantar | **Cierra ciclo**: el modelo opera y sostiene decisiones | Modelo en producción con informe de evaluación y tablero de decisión | **Sí** |
| SIS-14 | Inteligencia de negocios y analítica empresarial | Integrar → modelar → visualizar → analizar | Cierra ciclo ante la gerencia (tablero en operación) | Tablero de indicadores en operación con modelo de datos documentado | **No**: la rúbrica de SIS-02 (dato gobernado, modelo documentado, producto en operación, decisión soportada) sirve cambiando «modelo que aprende» por «modelo descriptivo» |
| SIS-04 | Infraestructura en la nube y DevOps | Diseñar la plataforma → automatizar → operar → observar → optimizar | **Cierra ciclo**: la plataforma opera con disponibilidad medida | Plataforma operando con infraestructura como código, pipelines y observabilidad | **Sí** |
| SIS-11 | Redes y telecomunicaciones | Diseñar la red → implementar → operar → asegurar la disponibilidad | Cierra ciclo sobre su objeto (la red) | Red operando con documentación e indicadores de disponibilidad | **No**: la rúbrica de SIS-04 (sistema operando con configuración versionada/documentada e indicadores de disponibilidad) sirve cambiando «nube» por «red» |
| SIS-01 | Desarrollo de software e ingeniería de aplicaciones | Analizar → diseñar → construir → verificar → desplegar | **Cierra ciclo**: el software está en producción y aceptado | Software desplegado con repositorio, pruebas automatizadas y documentación | **Sí** |
| SIS-09 | Análisis funcional y de sistemas de información | Relevar → especificar → validar → acompañar la construcción | **Tramo**: devuelve la especificación al equipo de desarrollo; no construye ni despliega | Documento de especificación aprobado y casos de aceptación | **Sí**: rúbrica distinta (completitud, verificabilidad, trazabilidad de requisitos) |

Resultado: 5 especialidades cierran ciclo con evidencia propia (candidatas a equivalencia); 3 cierran ciclo sin evidencia propia (candidatas a ámbito); 3 son tramos con evidencia propia (candidatas a capacidad).

---

## Paso 2 · Agrupación por proceso compartido

Punto de partida: los 5 grupos de la Escuela. Manda el proceso.

| Grupo Escuela | Especialidades | Lectura del proceso | Resultado |
|---|---|---|---|
| Seguridad | SIS-03 · SIS-13 | Mismo ciclo (riesgo → controles → operar/detectar → responder/notificar → recuperar/auditar) y misma rúbrica; solo cambia el objeto | **Una competencia** (gestión). SIS-03 ≡ · SIS-13 ámbito |
| Gestión TI | SIS-05 · SIS-12 · SIS-06 | **Mezcla dos procesos**: gestión (05, 06) y aseguramiento (12), con tres evidencias distintas. Pero 06 y 12 no cierran ciclo: 06 entrega el tramo previo (hoja de ruta) que los proyectos ejecutan; 12 entrega el tramo de verificación (informe) sobre el mismo objeto —los controles y proyectos de TI— sin ejecutar la remediación. Son tramos del ciclo de gobierno de la tecnología: alinear → planificar → dirigir → operar → evaluar | **Una competencia** (gestión) cuyo ciclo base es el de SIS-05 y a la que 06 y 12 **aportan un tramo cada una** («si ese tramo no existía, se crea»). SIS-05 ≡ · SIS-06 ⊂ Alinear · SIS-12 ⊂ Evaluar |
| Datos | SIS-02 · SIS-14 | Mismo ciclo dato → modelo → producto en operación para la decisión; SIS-14 lo ejecuta sobre modelos descriptivos, sin entrenar. La rúbrica sirve cambiando el objeto | **Una competencia** (construcción). SIS-02 ≡ · SIS-14 ámbito |
| Infraestructura | SIS-04 · SIS-11 | Mismo ciclo diseñar → implementar/automatizar → operar → asegurar disponibilidad; cambia la capa (nube vs. red) | **Una competencia** (construcción). SIS-04 ≡ · SIS-11 ámbito |
| Desarrollo | SIS-01 · SIS-09 | SIS-09 no ejecuta el ciclo sobre otro objeto: ejecuta el **primer tramo** (analizar/especificar) y devuelve un producto intermedio con rúbrica propia | **Una competencia** (construcción). SIS-01 ≡ · SIS-09 ⊂ Analizar |

**Fusiones consideradas y rechazadas** (para no pasar de 5 sin necesidad y para respetar la regla «mismo tipo + misma evidencia = una sola»):

- *Software + Plataforma* (ambas construcción): rúbricas distintas —funcionalidad verificada por pruebas de aceptación vs. disponibilidad y costo observados en operación—; el proceso de plataforma no arranca en requisitos y continúa en operación continua; el mercado las contrata en puestos distintos. Siguen separadas.
- *Ciberseguridad + Auditoría de sistemas*: SIS-12 audita el gobierno de TI en general (proyectos, controles, cumplimiento), no solo la seguridad; y ciberseguridad ejecuta el tratamiento del riesgo, cosa que la auditoría no hace por independencia. SIS-12 queda como tramo «Evaluar» del gobierno de TI, y la capacidad «Recuperar» de ciberseguridad conserva la auditoría *del programa de seguridad* como parte de su cumplimiento.
- *Auditoría de sistemas como sexta competencia de aseguramiento*: la sostiene una sola especialidad, que es un tramo (no cierra ciclo) sobre el mismo objeto que gobierna la competencia de gestión de TI. Abrirla duplicaría el objeto y excedería el tope de 5. Queda como capacidad con evidencia propia.

Tipos resultantes: 3 de construcción (evidencias distintas: software en producción · plataforma operando con disponibilidad · modelo/tablero en producción con informe de evaluación) y 2 de gestión (evidencias distintas: informe de riesgos + plan de respuesta · expediente de proyecto/servicio con hoja de ruta e informe de controles). Ninguna pareja del mismo tipo comparte evidencia.

---

## Paso 3 · Capacidades derivadas (tramos con evidencia propia)

| Competencia | Capacidades (verbo · evidencia del tramo) |
|---|---|
| Ingeniería de software | Analizar (especificación aprobada + casos de aceptación) · Diseñar (arquitectura documentada) · Construir (código en repositorio revisado) · Verificar (suite de pruebas + reporte) · Desplegar (software en producción con pipeline y documentación) |
| Plataforma e infraestructura | Diseñar (arquitectura dimensionada) · Automatizar (plataforma aprovisionada como código) · Operar (runbooks y registro de operación) · Observar (tablero de observabilidad e indicadores de disponibilidad) · Optimizar (informe de optimización de costo y rendimiento) |
| Datos e inteligencia artificial | Gobernar (modelo de datos + pipeline de integración) · Modelar (modelo entrenado con experimentos) · Evaluar (informe de evaluación y sesgo) · Implantar (modelo en producción con monitoreo) · Comunicar (tablero de decisión) |
| Ciberseguridad | Evaluar (informe de riesgos y pentest) · Proteger (controles y políticas implantados) · Detectar (registro de eventos y alertas gestionadas) · Responder (informe de incidente y notificaciones) · Recuperar (plan de continuidad probado e informe de cumplimiento) |
| Gobierno y gestión de TI | Alinear (hoja de ruta con arquitectura objetivo) · Planificar (plan de proyecto aprobado) · Dirigir (proyecto entregado con acta de cierre) · Operar (catálogo de servicios con indicadores de nivel) · Evaluar (informe de auditoría con plan de remediación) |

25 capacidades, 5 por competencia; todas dentro del rango 2–6.

---

## Paso 4 · Tipo de relación de cada especialidad

| Cod | Especialidad | Competencia | Relación | Sustento |
|---|---|---|---|---|
| SIS-01 | Desarrollo de software e ingeniería de aplicaciones | Ingeniería de software | **≡ competencia** | Ciclo completo, misma evidencia |
| SIS-09 | Análisis funcional y de sistemas de información | Ingeniería de software | **⊂ capacidad** Analizar | Tramo inicial con evidencia propia |
| SIS-04 | Infraestructura en la nube y DevOps | Plataforma e infraestructura | **≡ competencia** | Ciclo completo, misma evidencia |
| SIS-11 | Redes y telecomunicaciones | Plataforma e infraestructura | **ámbito** | Mismo ciclo, distinta capa; rúbrica sirve |
| SIS-02 | Ciencia de datos e inteligencia artificial | Datos e inteligencia artificial | **≡ competencia** | Ciclo completo, misma evidencia |
| SIS-14 | Inteligencia de negocios y analítica empresarial | Datos e inteligencia artificial | **ámbito** | Mismo ciclo sobre modelos descriptivos; rúbrica sirve |
| SIS-03 | Ciberseguridad y gestión de riesgos digitales | Ciberseguridad | **≡ competencia** | Ciclo completo, misma evidencia |
| SIS-13 | Protección de datos personales y privacidad | Ciberseguridad | **ámbito** | Mismo ciclo sobre datos personales; rúbrica sirve |
| SIS-05 | Gestión de proyectos y servicios de TI | Gobierno y gestión de TI | **≡ competencia** | Ciclo base planificar–operar, evidencia núcleo |
| SIS-06 | Arquitectura empresarial y transformación digital | Gobierno y gestión de TI | **⊂ capacidad** Alinear | Tramo previo con evidencia propia (aportó el tramo) |
| SIS-12 | Auditoría de sistemas y gobierno de TI | Gobierno y gestión de TI | **⊂ capacidad** Evaluar | Tramo de aseguramiento con evidencia propia (aportó el tramo) |

Sin correspondencia: ninguna. Ámbito compartido: ninguna (ninguna especialidad ejerce su proceso en dos competencias; la protección de datos personales toca a datos e IA solo como principio, no como proceso).

---

## Paso 5 · Formulación

La formulación completa (alias, título del proceso, tipo, definición conceptual, evidencia, nivel de dominio al egreso, capacidades con definición propia y especialidades con relación) está en `SIS-derivadas.json`. No se redactó definición operativa: corresponde al cierre de la Fase 2.

Resumen de la estructura:

| Alias | Título (proceso) | Tipo | Evidencia | Nivel al egreso |
|---|---|---|---|---|
| Ingeniería de software | Desarrollo de soluciones de software desde el requisito hasta la producción | construcción | Software desplegado con repositorio, pruebas, pipeline y documentación, aceptado | Autónomo en solución de mediana complejidad; bajo dirección en gran escala |
| Plataforma e infraestructura | Construcción y operación de la plataforma tecnológica donde corre el software | construcción | Plataforma operando con IaC/configuración, pipelines, observabilidad e indicadores | Autónomo en organización mediana; supervisado en multinube o telecom de gran escala |
| Datos e inteligencia artificial | Construcción de soluciones analíticas y de IA para la decisión | construcción | Modelo en producción con modelo de datos, informe de evaluación y tablero en uso | Autónomo del dato al modelo/tablero en mediana complejidad; supervisado en alto riesgo |
| Ciberseguridad | Gestión de la seguridad de la información y de los riesgos digitales | gestión | Informe de riesgos + plan de respuesta aprobados, registro de incidentes y reportes a la autoridad | Autónomo en organización mediana; supervisado en entornos regulados o críticos |
| Gobierno y gestión de TI | Dirección de proyectos, servicios y gobierno de la tecnología de la organización | gestión | Expediente: proyecto con acta de cierre, servicio bajo SLA, hoja de ruta e informe de controles | Autónomo en proyecto mediano y su servicio; supervisado en hoja de ruta y auditorías |

---

## Paso 6 · Auditoría por competencia (tabla de elementos)

| Elemento | Ingeniería de software | Plataforma e infraestructura | Datos e IA | Ciberseguridad | Gobierno y gestión de TI |
|---|---|---|---|---|---|
| Verbo de acción | Sí — «Construir» | Sí — «Diseñar, automatizar y operar» | Sí — «Construir» | Sí — «Gestionar» | Sí — «Dirigir» |
| Objeto o ámbito | Sí — soluciones de software que la organización usa | Sí — plataforma: nube, contenedores, pipelines, redes | Sí — datos convertidos en decisiones y modelos que aprenden | Sí — seguridad de la información y sistemas | Sí — tecnología de la organización, estrategia → servicio |
| Condiciones o contexto | Sí — equipos/fábricas, repositorios, CI, ágiles, estándares | Sí — local, híbrido, multinube, servicios gestionados | Sí — calidad del dato, ética algorítmica, empresas/consultoras/remoto | Sí — marcos y normas, banca/fintech/telecom/Estado | Sí — marcos de proyectos, servicios y gobierno; empresas/Estado/consultoras |
| Propósito | Sí — sistemas confiables y mantenibles | Sí — operación continua, escalable, eficiente | Sí — decisiones sustentadas en evidencia | Sí — proteger, sostener la operación, cumplir | Sí — valor, compromisos, control |
| Evidencia | Sí | Sí | Sí | Sí | Sí |
| Nivel de dominio | Sí | Sí | Sí | Sí | Sí |
| Sustento de mercado (especialidades del 1.1) | Sí — SIS-01, SIS-09 | Sí — SIS-04, SIS-11 | Sí — SIS-02, SIS-14 | Sí — SIS-03, SIS-13 | Sí — SIS-05, SIS-06, SIS-12 |
| Capacidades 2–6 con habilidad + acción + contexto + saberes/actitudes | Sí — 5 | Sí — 5 | Sí — 5 | Sí — 5 | Sí — 5 |

**Correcciones aplicadas durante la auditoría, antes de entregar:**

1. *Gobierno y gestión de TI / Alinear*: la definición de la capacidad tenía 52 palabras; se ajustó a 50 sin perder elementos.
2. *Datos e IA*: la primera versión de la evidencia solo decía «modelo en producción»; se añadió «modelo de datos documentado» para que la rúbrica también cubra a SIS-14 como ámbito.
3. *Ciberseguridad / Recuperar*: se incorporó explícitamente «programa de seguridad y de datos personales» y «reportes al regulador» para que la capacidad recoja el tramo «auditar → notificar» de SIS-13 y no quede fuera de la rúbrica.
4. *Gobierno y gestión de TI / evidencia*: pasó de «proyecto entregado y catálogo operando» a un expediente que traza a la hoja de ruta e incluye el informe de controles, porque la competencia incorporó los tramos Alinear y Evaluar y la evidencia debía cubrirlos.

Validación automática (node): JSON parseable; 5 competencias; 5 capacidades cada una; definiciones 65–87 palabras; capacidades 41–50 palabras; 11/11 especialidades asignadas con nombre exacto; notas ≤ 20 palabras; relaciones dentro del catálogo.

---

## Decisiones donde el proceso corrigió a la agrupación de la Escuela

| # | Grupo de la Escuela | Lo que decía la Escuela | Lo que dice el proceso | Decisión |
|---|---|---|---|---|
| 1 | Gestión TI (05 · 12 · 06) | Un mismo puesto contrata a las tres | El grupo mezcla gestión y aseguramiento y tres evidencias; 06 y 12 son tramos que no cierran ciclo | Una sola competencia de gestión cuyo ciclo incorpora dos tramos aportados: **Alinear** (SIS-06) y **Evaluar** (SIS-12). Relación de 06 y 12: **capacidad**, no ámbito. No se abrió una competencia de aseguramiento aparte. |
| 2 | Desarrollo (01 · 09) | Un mismo puesto | SIS-09 no construye: ejecuta el tramo inicial con evidencia propia | SIS-09 es **capacidad Analizar**, no ámbito. |
| 3 | Seguridad (03 · 13) | Un mismo puesto | Mismo ciclo y rúbrica; cambia el objeto | Se confirma. SIS-13 **ámbito**. La capacidad Recuperar absorbe «auditar y notificar a la ANPDP». |
| 4 | Datos (02 · 14) | Un mismo puesto | Mismo ciclo y rúbrica; SIS-14 no entrena modelos | Se confirma. SIS-14 **ámbito** (no capacidad: ejecuta el ciclo completo sobre modelos descriptivos, no un tramo). |
| 5 | Infraestructura (04 · 11) | Un mismo puesto | Mismo ciclo y rúbrica; cambia la capa | Se confirma. SIS-11 **ámbito**. La capacidad Observar absorbe «seguridad perimetral». |

**Hallazgos para la Dirección:**

- Los 5 grupos de la Escuela se sostienen como 5 competencias; lo que cambió es el **tipo de relación** dentro de dos grupos (gestión TI y desarrollo), no la agrupación en sí.
- La auditoría de sistemas queda como capacidad con informe propio. Si la Escuela quisiera una competencia de aseguramiento independiente, necesitaría que el 1.1 aportara más de una especialidad de aseguramiento; hoy solo hay una y es un tramo.
- La protección de datos personales aparece dos veces como principio (en Datos e IA, como condición de contexto) pero una sola vez como proceso (Ciberseguridad). No es ámbito compartido.

Salida de M1 lista para M2 (contraste opcional con el plan, donde se levanta el sello) y M3 (compuertas de estructura y trazabilidad, que marca la Escuela).
