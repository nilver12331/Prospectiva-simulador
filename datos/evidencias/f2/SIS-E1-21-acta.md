# Acta del Juicio de Expertos — PAQUETE · SIS-E1 · Desarrollo de software y análisis de sistemas

Técnica: e-Delphi modificado (RAND/UCLA) · N = 6 · rondas 1 y 2 · calculado por `herramientas/panel-21.js` el 2026-09-25.
Umbrales declarados a priori: Realidad ≥ 75 % · I-CVI ≥ 0,83 · CVR ≥ 1,00 · Acuerdo ≥ 75 % y RIC ≤ 1 · % T ≥ 75 % · I-CVI S y P ≥ 0,83.
Panel de 6 expertos simulados (X1–X6) y guardián metodológico · rondas 1 y 2 · N = 6: I-CVI ≥ 0,83 y CVR crítico 1,00 (Ayre y Scally, 2014). Un solo panel por carrera: cada experto calificó en su rol todas las especialidades. Pre-validación de agentes: la validación oficial la repiten especialistas humanos con el mismo instrumento.

## Panel
- X1 · Académico-investigador · doctor en Ciencias de la Computación · 15 años de docencia e investigación en ingeniería de software, redes y nube, ciencia de datos, ciberseguridad y gobierno de TI · ACM/IEEE CC2020, SWEBOK v4, SFIA 9
- X2 · Empleador del sector público · jefe de la Oficina de Tecnologías de la Información de una entidad pública peruana · 12 años en OTI de ministerios y organismos · gobierno digital, contrataciones TIC y SGSI
- X3 · Empleador del sector privado · gerente de tecnología · 16 años · banca, retail y consultora de TI en Lima · contrata desarrollo, datos, infraestructura, seguridad y proyectos
- X4 · Profesional senior · 15 años · desarrollo, infraestructura, seguridad y gestión de TI en banca, fábricas de software y sector público peruano · SFIA, ITIL, ISO/IEC 27001, PMBOK
- X5 · Egresado reciente · 3 años · desarrollo backend en fintech, soporte de infraestructura en ISP y analítica de datos en retail; contacto con pares en SOC, auditoría de TI y oficinas de TI del Estado
- X6 · Experto contextual · 15 años · consultor en transformación digital del Estado y regulación TIC (gobierno digital, datos personales, ciberseguridad, IA) para entidades públicas y banca
- G · Guardián metodológico (no califica)

## Resultados por función
| Función | Título | % Realidad | I-CVI | CVR | Acuerdo | RIC | F | C | Prioridad | V | N | % T | I-CVI S | I-CVI P | Decisión R1 | Bloques R1 (F S P) | Bloques R2 | Decisión final |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| E1-01 | Análisis de requerimientos y procesos del negocio | 100 % | 1,00 | 1,00 | 100 % | 0.0 | 3.5 | 3 | 10.5 | 3 | 3 | 100 % | 1,00 | 1,00 | Función núcleo | ✓ ✓ ✓ | ✓ ✓ ✓ | Función núcleo |
| E1-02 | Diseño de arquitectura y datos del software | 100 % | 1,00 | 1,00 | 100 % | 0.0 | 2.5 | 3 | 7.5 | 3 | 2 | 100 % | 0,67 | 0,83 | Función núcleo | ✓ ↺ ✓ | ✓ ✓ ✓ | Función núcleo |
| E1-03 | Desarrollo de servicios y lógica de negocio | 100 % | 1,00 | 1,00 | 100 % | 0.0 | 4 | 3 | 12 | 3 | 3 | 100 % | 1,00 | 1,00 | Función núcleo | ✓ ✓ ✓ | ✓ ✓ ✓ | Función núcleo |
| E1-04 | Desarrollo de interfaces web de usuario | 100 % | 1,00 | 0,67 | 100 % | 1.0 | 4 | 2 | 8 | 3 | 3 | 100 % | 1,00 | 1,00 | Función complementaria | ✓ ✓ ✓ | ✓ ✓ ✓ | Función núcleo |
| E1-05 | Desarrollo de aplicaciones para dispositivos móviles | 100 % | 1,00 | -1,00 | 100 % | 0.0 | 3 | 2 | 6 | 3 | 3 | 100 % | 0,83 | 1,00 | Propuesta de exclusión | ✗ ✓ ✓ | ✗ ✓ ✓ | Fusionada en E1-04 |
| E1-06 | Integración de sistemas y servicios de información | 100 % | 1,00 | 1,00 | 100 % | 0.0 | 3 | 4 | 12 | 3.5 | 3 | 100 % | 1,00 | 1,00 | Función núcleo | ✓ ✓ ✓ | ✓ ✓ ✓ | Función núcleo |
| E1-07 | Automatización de procesos operativos del negocio | 100 % | 1,00 | -1,00 | 100 % | 0.0 | 3 | 2 | 6 | 4 | 3 | 100 % | 0,67 | 1,00 | Propuesta de exclusión | ✗ ↺ ✓ | ✗ ↺ ✓ | Sublínea en E1-06 |
| E1-08 | Aseguramiento de la calidad del software | 100 % | 1,00 | 1,00 | 100 % | 0.0 | 4 | 3.5 | 14 | 3 | 3 | 100 % | 1,00 | 1,00 | Función núcleo | ✓ ✓ ✓ | ✓ ✓ ✓ | Función núcleo |
| E1-09 | Seguridad y privacidad en aplicaciones | 100 % | 1,00 | 1,00 | 100 % | 0.0 | 3 | 4 | 12 | 4 | 3 | 100 % | 1,00 | 0,83 | Función núcleo | ↺ ✓ ↺ | ✓ ✓ ✓ | Función núcleo |
| E1-10 | Despliegue y liberación continua del software | 100 % | 1,00 | -0,67 | 100 % | 0.3 | 3 | 3 | 9 | 3 | 3 | 100 % | 1,00 | 0,83 | Propuesta de exclusión | ✗ ✓ ↺ | ✓ ✓ ✓ | Complementaria por decisión de la Escuela |
| E1-11 | Mantenimiento evolutivo y soporte de aplicaciones | 100 % | 1,00 | 1,00 | 100 % | 0.0 | 4 | 3 | 12 | 2 | 3 | 100 % | 0,50 | 1,00 | Función núcleo | ✓ ↺ ✓ | ✓ ✓ ✓ | Función núcleo |

**S-CVI/Ave del banco:** 1,00 · **Resumen:** 7 núcleo · 1 complementarias · 3 propuestas de exclusión · 5 con bloques observados en R1 · S-CVI/Ave 1,00

## Decisión de la Escuela (momento 3)
- **E1-05** · Fusionada en E1-04: Solo 13 de 71 avisos piden móvil directo; con marcos multiplataforma web y móvil son un mismo encargo de interfaces.
- **E1-07** · Sublínea en E1-06: La automatización de procesos (RPA) queda como sublínea de la integración de sistemas; el rediseño del proceso es de E5-08.
- **E1-10** · Complementaria por decisión de la Escuela: Casa única de la integración y el despliegue continuo del software; absorbe E2-06. En E2 queda la plataforma de contenedores.

## Bloques observados y motivos
- **E1-02** · sustento: S2 débil: la Estrategia de Gobierno de Datos no sustenta la arquitectura de software y SWEBOK v4 es un cuerpo de conocimiento, no una tendencia; usar datos de adopción de servicios o nube nativa. · S2 débil: la Estrategia de Gobierno de Datos se cita vía Infobae (fuente secundaria) y que SWEBOK tenga un área no es una tendencia con efecto en el servicio. Citar la RM 049-2026-PCM directa.
- **E1-05** · función y tareas: En el Estado es ocasional: priorizamos web adaptable y pocas entidades publican apps propias. Útil, no esencial; la publicación en tiendas rara vez la hace un junior. · En el privado el canal móvil es crítico (billeteras, banca móvil), pero lo ocupa un perfil especializado; como función de egreso es útil más que esencial.
- **E1-07** · función y tareas: Real y en ascenso. Se solapa con E5-08 (digitalización de procesos): aquí debe quedar la construcción técnica y en E5-08 el rediseño del servicio. Dato Cero Papel (267 entidades) verificado. · Crece mucho con agentes de IA; conviene que cubra también la automatización con IA, hoy repartida con E3-07. Criticidad moderada: un bot caído rara vez detiene la operación. · sustento: S1 débil: Cero Papel mide interconexión documental y la importancia O*NET citada es genérica; faltan avisos de automatización con dato. Delimitar frente a E5-08. · S1 débil: que Cero Papel interconecte 267 entidades no prueba demanda de bots ni de scripts. Se superpone con E5-08 (digitalización de procesos); conviene delimitar la construcción técnica frente al rediseño.
- **E1-09** · función y tareas: Acotar a la codificación segura del propio código (T2, T4) y dejar el modelado de amenazas, el análisis de vulnerabilidades y el dictamen de pase a E4-05; T5 (registro de tratamientos) repite E4-10 T1. · Solapa con E4-05 (seguridad de aplicaciones); la frontera entre quien construye y quien evalúa es válida y debe quedar explícita en ambas. · producto: Acotar a la codificación segura del propio código (T2, T4) y dejar el modelado de amenazas, el análisis de vulnerabilidades y el dictamen de pase a E4-05; T5 (registro de tratamientos) repite E4-10 T1. · El modelado de amenazas no lo hace un recién egresado; corregir vulnerabilidades señaladas sí. Solapa con E4-05. N=2 más honesto; producto «expediente» ambicioso para el egreso.
- **E1-10** · función y tareas: Una sola casa para la canalización de despliegue: en E1 dejar la gestión de liberaciones de la aplicación (versionado, notas de cambio, pase con reversión) o fusionar con E2-06. · Duplica casi textualmente E2-06; decidir una especialidad dueña o diferenciar (E1: canalización de la aplicación; E2: plataforma de despliegue y clústeres). · producto: Una sola casa para la canalización de despliegue: en E1 dejar la gestión de liberaciones de la aplicación (versionado, notas de cambio, pase con reversión) o fusionar con E2-06.
- **E1-11** · sustento: S2 débil: el uso de asistentes de IA no prueba más mantenimiento y la Estrategia de Gobierno de Datos no trata sistemas heredados; buscar datos de deuda técnica o modernización. · S2 débil: que la IA «acelere código que luego debe mantenerse» es inferencia sin fuente; conviene un dato fechado sobre deuda técnica o sistemas legados del Estado.

## Tareas propuestas por dos o más expertos
- **E1-01**: Especificar requerimientos no funcionales medibles de calidad, seguridad y rendimiento

## Preguntas abiertas (funciones faltantes, fusiones y divisiones)
- X1: faltan: Prototipado y diseño de la experiencia de usuario · fusiones/divisiones: Fusionar E1-04 y E1-05 en interfaces de usuario web y móviles; E1-10 duplica E2-06: una sola especialidad dueña; E1-09 y E4-05: mantener la frontera construir/evaluar; E1-07 y E5-08: delimitar automatización frente a rediseño de procesos
- X2: faltan: Implantación y soporte funcional de sistemas administrativos transversales del Estado · fusiones/divisiones: E1-10 con E2-06: integración y despliegue continuo duplicado; una sola función en una especialidad; E1-09 con E4-05: delimitar codificación segura (E1) frente a verificación y dictamen de seguridad (E4); E1-07 y E1-01 con E5-08: separar construcción técnica del rediseño del servicio
- X3: faltan: Implantación y configuración de sistemas empresariales (ERP y CRM) · fusiones/divisiones: E1-10 debe fusionarse con E2-06: son la misma canalización de despliegue.; E1-09 y E4-05: delimitar práctica del desarrollador frente a verificación independiente.; E1-01 y E5-08: delimitar especificación para construir frente a rediseño del proceso.
- X4: faltan: Implantación y parametrización de sistemas empresariales · fusiones/divisiones: E1-04 y E1-05 en desarrollo de interfaces web y móviles (frameworks multiplataforma); E1-10 con E2-06: el mismo encargo de CI/CD está en dos especialidades; Delimitar E1-09 frente a E4-05 y E1-07 frente a E5-08
- X5: faltan: Documentación técnica y transferencia del software; Programación asistida por IA con verificación · fusiones/divisiones: E1-10 con E2-06: dejar el despliegue continuo en una sola especialidad; E1-09 con E4-05: definir el reparto entre codificación segura y aseguramiento de seguridad; E1-02: separar diseño de datos (alcanzable) de arquitectura (senior)
- X6: faltan: Integración de servicios de IA generativa en aplicaciones · fusiones/divisiones: E1-10 con E2-06 (CI/CD duplicado); E1-09 con E4-05: delimitar controles del desarrollador frente a la conformidad independiente; E1-07 con E5-08: automatización técnica frente al rediseño de procesos

## Verificación de referencias (X2, X4, X6 y guardián)
- X2 · E1 [38] · sostiene · https://prensaperu.pe/2026/01/03/transformacion-digital-en-perupcm-consolida-avances-historicos-en-modernizacion-estatal-con-mas-de-500-millones-de-transacciones-digitales-y-6-5-millones-de-atenciones-al-ciudadano-en-2025/ Confirma más de 500 millones de transacciones PIDE en 2025, Cero Papel en 267 entidades y más de 350 servicios en GOB.PE.
- X2 · E1 [35] · sostiene · https://www.infobae.com/peru/2026/01/20/conoce-las-carreras-de-ingenieria-que-tendran-mayor-demanda-laboral-este-2026/ Confirma Ingeniería de Sistemas de Información como la más demandada para 2025 con 5 226 puestos.
- X2 · E1 [21] · sostiene · https://busquedas.elperuano.pe/dispositivo/NL/2423580-2 Art. 87.3 obliga a usar bloques básicos (PIDE, ID GOB.PE, PÁGALO.PE, FIRMA PERÚ, SGD PERÚ, NUBE PERÚ).
- X4 · E1 [40] · sostiene · https://survey.stackoverflow.co/2025/ai 84% usa o planea usar IA; 51% de profesionales la usa a diario; 46% desconfía de su exactitud.
- X4 · E1 [35] · sostiene · https://www.infobae.com/peru/2026/01/20/conoce-las-carreras-de-ingenieria-que-tendran-mayor-demanda-laboral-este-2026/ Ingeniería de Sistemas de Información encabeza la demanda 2025 con 5 226 puestos proyectados.
- X4 · E1 [4] · sostiene · https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm 106 100 vacantes anuales promedio 2025-2035 para desarrolladores, analistas de calidad y probadores.
- X6 · E1 [21] · sostiene · https://busquedas.elperuano.pe/dispositivo/NL/2423580-2 DS 098-2025-PCM (31-07-2025), art. 87: uso obligatorio de PIDE, PÁGALO.PE, ID GOB.PE, FIRMA PERÚ, SGD PERÚ, NUBE PERÚ, entre otros.
- X6 · E1 [22] · sostiene · https://busquedas.elperuano.pe/dispositivo/NL/1491441-1 RM 041-2017-PCM (02-03-2017): uso obligatorio de la NTP-ISO/IEC 12207:2016 en el Sistema Nacional de Informática.
- X6 · E1 [24] / E4 [17] · sostiene · https://img.lpderecho.pe/wp-content/uploads/2024/11/Decreto-Supremo-016-2024-JUS-LPDerecho.pdf Por búsqueda (IAPP, Pérez-Llorca): DS 016-2024-JUS (30-11-2024), notificación a la ANPD en 48 h y oficial de datos obligatorio en supuestos definidos.
- G · [35] · abre · sostiene · https://www.infobae.com/peru/2026/01/20/conoce-las-carreras-de-ingenieria-que-tendran-mayor-demanda-laboral-este-2026/
- G · [40] · abre · sostiene · https://survey.stackoverflow.co/2025/ai
- G · [38] · abre · sostiene · https://prensaperu.pe/2026/01/03/transformacion-digital-en-perupcm-consolida-avances-historicos-en-modernizacion-estatal-con-mas-de-500-millones-de-transacciones-digitales-y-6-5-millones-de-atenciones-al-ciudadano-en-2025/
- G · [4] · abre · sostiene · https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm
- G · [37] · abre · sostiene · https://www.inei.gob.pe/media/MenuRecursivo/boletines/informetecnico_tics_iit25.pdf

Pendientes para los especialistas humanos: repetir el instrumento con el panel real; E5 (consulta a grupos de interés humanos) y E7 (seguimiento de egresados) no los reemplaza este panel.
