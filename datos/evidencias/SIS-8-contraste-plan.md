# SIS · Evidencia 8 · Contraste con el plan vigente (paso 1.2, momento 2)

**Escuela:** Ingeniería de Sistemas · **Fecha:** 24-09-2026 · **Agente:** Génesys
**Sello:** el plan vigente se abre en este momento. La formulación literal de `datos/plan-vigente/SIS-plan.json` es la línea base congelada: no se edita, y es lo que se presenta en acreditación.
**Regla:** el plan es material de contraste y trazabilidad, no marco. La arquitectura derivada (`datos/competencias/SIS-derivadas.json`) no se ajustó para parecerse a él. La redacción vigente se conserva literal donde la estructura coincide y es buena; solo cambia por un gatillo, y toda reformulación registra el texto anterior, el nuevo y el gatillo.

## 0. Insumos

**Competencias derivadas del campo (5):** Ingeniería de software · Plataforma e infraestructura · Datos e inteligencia artificial · Ciberseguridad · Gobierno y gestión de TI. Veinticinco capacidades, cinco por competencia.

**Competencias vigentes de tipo A (3):** Competencia 1 «Ingeniería de software» (4 capacidades) · Competencia 2 «Gestión de la infraestructura tecnológica» (3) · Competencia 3 «Ciencia de datos e inteligencia artificial» (5). Doce capacidades.

**Hallazgos ya anotados en la línea base:** (a) el plan no define una competencia de seguridad de la información: la trata como capacidad de la Competencia 2; (b) la definición de la Competencia 2 repite su título; (c) «Ingeniería de requerimientos» e «Ingeniería de la información» comparten la misma definición literal, y «Analista de negocios» y «Requerimiento de inteligencia» también.

**Unidades de tipo B o C:** la formulación literal entregada por la Escuela contiene solo competencias de especialidad (tipo A). No hay competencias generales ni específicas que declarar fuera del alcance; si existen en el plan, se piden a la Escuela cuando se necesiten en el paso 3.4. Por eso `fuera` queda vacío.

## 1. Matriz de contraste (derivada × vigente)

Regla de lectura de las celdas: una celda se resuelve entre las cinco situaciones del método. Cuando la derivada y la vigente no comparten ningún proceso, la celda se marca **«Sin contraste posible»** con la nota «sin proceso común»: no requiere decisión de la Escuela porque la fila se resuelve en otra celda o, si ninguna celda de la fila tiene proceso común, la unidad queda **«Solo en la derivada»** (competencia nueva).

| Derivada \ Vigente | C1 · Ingeniería de software | C2 · Gestión de la infraestructura tecnológica | C3 · Ciencia de datos e inteligencia artificial |
|---|---|---|---|
| **Ingeniería de software** | **Coinciden en proceso, difieren en capacidades.** Mismo proceso (requisitos → programación → calidad); el plan tiene 4 capacidades por tema, dos con definición idéntica; falta el despliegue. | Sin contraste posible (sin proceso común). | Sin contraste posible (sin proceso común; «Analista de negocios» define requerimientos de sistemas inteligentes y pertenece al ciclo del dato). |
| **Plataforma e infraestructura** | Sin contraste posible (sin proceso común). | **Coinciden en proceso, difieren en capacidades.** Mismo proceso sobre red y centro de datos; el plan organiza por objeto y agrupa además la seguridad; faltan automatización, observabilidad y optimización. | Sin contraste posible (sin proceso común). |
| **Datos e inteligencia artificial** | Sin contraste posible (sin proceso común). | Sin contraste posible (sin proceso común). | **Coinciden en proceso, difieren en capacidades.** Mismo ciclo dato → modelo → reporte; el plan nombra capacidades por rol, dos con definición idéntica; faltan evaluación e implantación. |
| **Ciberseguridad** | Sin contraste posible (sin proceso común). | **Solo en la derivada.** El plan no la tiene como competencia: la contiene como capacidad «Gestión de la seguridad de la información» dentro de C2, que se desdobla y le redistribuye esa capacidad. | Sin contraste posible (sin proceso común). |
| **Gobierno y gestión de TI** | Sin contraste posible (sin proceso común; «gestiona» en la definición vigente alude a la gestión del desarrollo, no de proyectos ni servicios). | Sin contraste posible (sin proceso común; «controla los servicios de un centro de datos» es operación de plataforma, no gestión de servicios de TI). | Sin contraste posible (sin proceso común). |

Lectura por columnas: ninguna vigente queda «Solo en el plan»; las tres tienen una derivada que las recoge. Lectura por filas: dos derivadas (Ciberseguridad, Gobierno y gestión de TI) quedan «Solo en la derivada».

## 2. Decisiones por unidad

Resultado global: **0 conservar · 3 reformular · 2 nueva.** No sobrevive ninguna redacción literal del plan, ni en competencias ni en capacidades, por una razón estructural y no de estilo: el plan nombra sus unidades por disciplina, objeto, tema o rol (gatillo 1), y la derivación las nombra por fase del proceso. Donde el proceso coincide, la trazabilidad se registra capacidad por capacidad.

### 2.1 Ingeniería de software → «Desarrollo de soluciones de software»

- **Vigente que la recoge:** Competencia 1 · Ingeniería de software.
- **Situación:** coinciden en proceso, difieren en capacidades. **Decisión: reformular.**
- **Antes:** Competencia 1: «Gestiona y desarrolla software de manera eficiente y efectiva, basándose en estándares internacionales de calidad a fin de lograr el control y aseguramiento de la calidad según el contexto de la organización»; cuatro capacidades nombradas por tema.
- **Por qué cambió:** Gatillo 6: «Ingeniería de requerimientos» e «Ingeniería de la información» comparten definición literal («Define requerimientos y diseña su arquitectura de sistemas»); se fusionan y su definición, con dos procesos, se desdobla en Analizar y Diseñar. Gatillo 5: falta el despliegue y mantenimiento en producción. Gatillo 1: título y capacidades nombran disciplina y temas, no el proceso; el propósito vigente es controlar calidad, no entregar el sistema.
- **Definición final:** la derivada, sin ajuste.

| Capacidad derivada | Marca | Viene de (plan) | Texto anterior (plan) |
|---|---|---|---|
| Análisis y especificación de requisitos | reformulada | Ingeniería de requerimientos | Define requerimientos y diseña su arquitectura de sistemas. |
| Diseño de la arquitectura de la solución | reformulada | Ingeniería de la información | Define requerimientos y diseña su arquitectura de sistemas. |
| Construcción e integración de los componentes de software | reformulada | Programación | Desarrolla aplicaciones de escritorio, web y móvil. |
| Verificación de la calidad del software | reformulada | Calidad de software | Gestionar la calidad de software y madurez de procesos de desarrollo. |
| Despliegue y mantenimiento en producción | añadida (gatillo 5) | — | — |

Capacidades del plan que no continúan: ninguna; las cuatro continúan reformuladas.

### 2.2 Plataforma e infraestructura → «Diseño y operación de la infraestructura tecnológica»

- **Vigente que la recoge:** Competencia 2 · Gestión de la infraestructura tecnológica (que se desdobla).
- **Situación:** coinciden en proceso, difieren en capacidades. **Decisión: reformular.**
- **Antes:** Competencia 2: «Gestión de la infraestructura tecnológica» (la definición repite el título); tres capacidades por objeto: conectividad de datos (red), gestión de la seguridad de la información y centro de datos, cada una con ciclo diseña–implementa–controla.
- **Por qué cambió:** Gatillo 2: la vigente agrupa dos procesos con evidencias distintas —plataforma operando e informe de riesgos con plan de respuesta—; se desdobla y la seguridad pasa a competencia propia. Gatillo 1: la definición repite el título y las capacidades nombran objetos (red, centro de datos), no fases. Gatillo 5: faltan aprovisionamiento como código, observabilidad y optimización de rendimiento y costos.
- **Definición final:** la derivada, sin ajuste. Redes y telecomunicaciones queda como ámbito (ya resuelto en la derivación); el plan la tenía como capacidad «Conectividad de datos», y su ciclo diseña–implementa–controla se reparte por fase.

| Capacidad derivada | Marca | Viene de (plan) | Texto anterior (plan) |
|---|---|---|---|
| Diseño de la arquitectura de la plataforma | reformulada | Conectividad de datos · Implementa centro de datos (tramo «diseña») | «Diseña … la red» / «Diseña … los servicios de un centro de datos» |
| Aprovisionamiento y automatización de la infraestructura | reformulada | Conectividad de datos · Implementa centro de datos (tramo «implementa / desarrolla») | «implementa, testea … la red» / «desarrolla … los servicios de un centro de datos» |
| Operación y soporte de la infraestructura | reformulada | Conectividad de datos · Implementa centro de datos (tramo «controla») | «controla la red» / «controla los servicios de un centro de datos … para el alcance de los objetivos de la organización» |
| Observabilidad y aseguramiento de la disponibilidad | añadida (gatillo 5) | — | — |
| Optimización del rendimiento y de los costos | añadida (gatillo 5) | — | — |

Capacidades del plan que no continúan aquí:

| Capacidad del plan | Destino | Motivo |
|---|---|---|
| Gestión de la seguridad de la información | redistribuida a Ciberseguridad · Diseño e implantación de controles de seguridad | Proceso distinto con evidencia propia; el campo lo contrata como competencia sostenida por dos especialidades del 1.1 (gatillo 2). |

### 2.3 Datos e inteligencia artificial → «Desarrollo de soluciones de analítica e inteligencia artificial»

- **Vigente que la recoge:** Competencia 3 · Ciencia de datos e inteligencia artificial.
- **Situación:** coinciden en proceso, difieren en capacidades. **Decisión: reformular.**
- **Antes:** Competencia 3: «Diseña y gestiona sistemas inteligentes basándose en metodologías, estándares y herramientas a fin de lograr estrategias de mejora para la organización»; cinco capacidades nombradas por rol, dos con definición idéntica.
- **Por qué cambió:** Gatillo 6: «Analista de negocios» y «Requerimiento de inteligencia» comparten definición literal («Analiza y define requerimientos para sistemas inteligentes»); se fusionan en la formulación del problema dentro de Modelar. Gatillo 1: título y capacidades nombran disciplina y roles, no fases; «sistemas inteligentes» deja fuera la analítica descriptiva (ámbito Inteligencia de negocios). Gatillo 5: faltan la evaluación de validez y ética del modelo y su implantación con monitoreo.
- **Definición final:** la derivada, sin ajuste.

| Capacidad derivada | Marca | Viene de (plan) | Texto anterior (plan) |
|---|---|---|---|
| Gobierno e integración del dato | reformulada | Ingeniería de datos | Construye una infraestructura de extracción y preparación de datos para analítica de datos (Data Engineer). |
| Modelado analítico y entrenamiento de algoritmos | reformulada | Científico de datos | Explora y transforma los datos para generar modelos estadísticos y/o de Inteligencia Artificial (Data Scientist). |
| Evaluación de la validez y la ética del modelo | añadida (gatillo 5) | — | — |
| Implantación y monitoreo en producción | añadida (gatillo 5) | — | — |
| Comunicación de resultados para la toma de decisiones | reformulada | Analista de datos | Analiza los datos y crea reportes/informes y/o visualizaciones estratégicas para la toma de decisiones (Data Analyst). |

Capacidades del plan que no continúan como unidad:

| Capacidad del plan | Destino | Motivo |
|---|---|---|
| Analista de negocios | fusionada en Modelado analítico y entrenamiento de algoritmos | Definir requerimientos del sistema inteligente es formular el problema de negocio como problema analítico: tramo inicial de Modelar, sin evidencia propia. |
| Requerimiento de inteligencia | fusionada en Modelado analítico y entrenamiento de algoritmos | Definición literal idéntica a «Analista de negocios» (gatillo 6); misma evidencia, se fusionan y siguen el mismo destino. |

### 2.4 Ciberseguridad → «Gestión de la seguridad de la información y de los riesgos digitales»

- **Vigente que la recoge:** ninguna como competencia. La Competencia 2 la contenía como capacidad y se la redistribuye al desdoblarse.
- **Situación:** solo en la derivada. **Decisión: nueva.**
- **Antes:** el plan no tiene competencia de seguridad: la trata como capacidad de la Competencia 2 —«Diseña y desarrolla sistemas de gestión de seguridad de la información, para la recolección de datos basándose en normas y estándares a fin de lograr el aseguramiento de la información de la organización»—. (Se registra aunque la decisión sea «nueva», porque el plan sí decía algo sobre ella.)
- **Por qué cambió:** solo en la derivada. Gatillo 2 sobre la Competencia 2: la seguridad es un proceso distinto —evaluar, proteger, detectar, responder, recuperar— con evidencia propia (informe de riesgos y plan de respuesta), sostenido por dos especialidades del 1.1: Ciberseguridad y gestión de riesgos digitales, y Protección de datos personales. El plan lo reducía a diseñar un SGSI.
- **Definición final:** la derivada, sin ajuste.

| Capacidad derivada | Marca | Viene de (plan) |
|---|---|---|
| Evaluación de riesgos y vulnerabilidades | añadida | — |
| Diseño e implantación de controles de seguridad | reformulada | Gestión de la seguridad de la información (Competencia 2, redistribuida) |
| Monitoreo y detección de amenazas | añadida | — |
| Respuesta a incidentes y análisis forense | añadida | — |
| Continuidad, cumplimiento y auditoría de la seguridad | añadida | — |

### 2.5 Gobierno y gestión de TI → «Gobierno y dirección de proyectos y servicios de tecnología de la información»

- **Vigente que la recoge:** ninguna.
- **Situación:** solo en la derivada. **Decisión: nueva.**
- **Antes:** nada; no hay unidad vigente.
- **Por qué cambió:** solo en la derivada: ninguna competencia vigente dirige proyectos, servicios ni gobierno de TI; el plan solo alude a «gestiona» en software y a «controla los servicios» del centro de datos. La contratan tres especialidades del 1.1: Gestión de proyectos y servicios de TI, Arquitectura empresarial y transformación digital, y Auditoría de sistemas y gobierno de TI.
- **Definición final:** la derivada, sin ajuste.
- **Capacidades:** las cinco son añadidas (Alineamiento de la tecnología con la estrategia organizacional · Planificación de proyectos tecnológicos · Dirección, control y entrega de proyectos tecnológicos · Operación de los servicios de tecnología de la información · Auditoría de controles y riesgos de tecnología de la información).

## 3. Trazabilidad (se deriva, no se decide)

| Competencia del plan vigente | Destino | Competencia nueva que la recoge | Cambio aplicado | Sustento |
|---|---|---|---|---|
| Competencia 1 · Ingeniería de software | se reformula | Desarrollo de soluciones de software | Título y definición por proceso; las dos capacidades con definición idéntica se fusionan y desdoblan en Analizar y Diseñar; se añade Despliegue y mantenimiento. | Gatillos 1, 5 y 6; la sostienen Desarrollo de software (competencia) y Análisis funcional (capacidad Analizar); evidencia: software en producción. |
| Competencia 2 · Gestión de la infraestructura tecnológica | se desdobla | Diseño y operación de la infraestructura tecnológica · Gestión de la seguridad de la información y de los riesgos digitales | Seguridad sale como competencia propia; red y centro de datos se reorganizan por fase diseñar–optimizar; se añaden automatización, observabilidad y optimización. | Gatillos 2, 1 y 5; dos evidencias distintas; la sostienen Infraestructura nube y DevOps, Redes, Ciberseguridad y Protección de datos personales. |
| Competencia 3 · Ciencia de datos e inteligencia artificial | se reformula | Desarrollo de soluciones de analítica e inteligencia artificial | Capacidades por rol pasan a fases del ciclo; Analista de negocios y Requerimiento de inteligencia se fusionan en Modelar; se añaden Evaluar e Implantar. | Gatillos 1, 5 y 6; la sostienen Ciencia de datos e IA (competencia) e Inteligencia de negocios (ámbito); evidencia: modelo en producción con tablero. |
| — · sin competencia vigente | nueva | Gobierno y dirección de proyectos y servicios de tecnología de la información | Competencia y cinco capacidades añadidas. | Solo en la derivada; la sostienen tres especialidades del 1.1. |

Balance de capacidades del plan (12): 10 continúan reformuladas, 2 se fusionan (Analista de negocios, Requerimiento de inteligencia), 1 de las reformuladas se redistribuye a otra competencia (Gestión de la seguridad de la información). Ninguna se retira. Ninguna competencia vigente desaparece.

## 4. Resumen para la Dirección

Abrí el plan y lo contrasté con las cinco competencias derivadas. Ninguna competencia vigente se conserva literal: sus definiciones nombran disciplinas u objetos y no el proceso, y dos pares de capacidades repiten la misma definición. Dos se reformulan —Ingeniería de software y Ciencia de datos e inteligencia artificial—, una se desdobla —Gestión de la infraestructura tecnológica, que separa la seguridad como competencia propia— y dos nacen: Ciberseguridad, que el plan trataba como capacidad, y Gobierno y gestión de TI, que el plan no recogía. Ninguna competencia ni capacidad vigente desaparece: las doce capacidades del plan continúan reformuladas, fusionadas o redistribuidas.

Archivo de datos: `datos/competencias/SIS-contraste.json`. Siguiente momento: M3, compuertas de estructura y trazabilidad, que el agente no puede marcar por la Escuela.
