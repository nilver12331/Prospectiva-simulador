# Bitácora del barrido · Paso 2.1 · Momento 1 · SIS-E1

- **Carrera:** Ingeniería de Sistemas (SIS)
- **Especialidad E1:** Desarrollo de software y análisis de sistemas (integra: Análisis funcional y de sistemas de información)
- **Competencia:** C1 Desarrollo de soluciones de software
- **Fecha del barrido:** 25-09-2026
- **Insumos usados:** nombre, especialidades integradas y ámbitos, descripción de la Fase 1 y definición conceptual de C1. **No** se leyeron ni usaron las capacidades (`capacidades_SOLO_PARA_MOMENTO_4`).
- **Contexto:** Perú, horizonte de 5 años.

## 1. Propósito clave

> Desarrollar, integrar y mantener soluciones de software web y móviles que las organizaciones usan en sus operaciones, analizando sus procesos y requerimientos, en equipos que aplican prácticas ágiles, entrega continua y normas de calidad, seguridad, protección de datos y gobierno digital, para entregar sistemas confiables y mantenibles que respondan a las necesidades del negocio y de los ciudadanos.

(verbo: desarrollar, integrar y mantener · objeto: soluciones de software web y móviles · condición: equipos ágiles, entrega continua, normas de calidad, seguridad, datos y gobierno digital · finalidad: sistemas confiables y mantenibles para el negocio y los ciudadanos)

## 2. Fuentes revisadas por tipo

Tipos cubiertos: **O, N, M, P** (4 de 6). A (actores) y D (Diseña tu Vida): no hay insumos.

### O · Ocupacional (6)
| Ref | Fuente | Qué aporta |
|---|---|---|
| [1] | O*NET 15-1252.00 Software Developers — https://www.onetonline.org/link/details/15-1252.00 | Tareas: analizar necesidades de usuario (77), dirigir pruebas y documentación (73), conferir con analistas para diseñar (69), modificar software existente para corregir errores o mejorar rendimiento (69). Bright Outlook. |
| [2] | O*NET 15-1211.00 Computer Systems Analysts — https://www.onetonline.org/link/details/15-1211.00 | Solucionar fallas de programas y sistemas (81), asistir a usuarios (76), probar y mantener programas (75), usar el computador para resolver problemas del negocio (74), coordinar y enlazar sistemas (70). |
| [3] | O*NET 15-1253.00 Software QA Analysts and Testers — https://www.onetonline.org/link/details/15-1253.00 | Identificar y documentar problemas (93), registrar defectos (92), desarrollar programas de prueba (88), diseñar planes de prueba (84), probar modificaciones antes de implementarlas (80). |
| [4] | BLS Occupational Outlook Handbook — https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm | 1 905 400 empleos (2025); crecimiento de 10% 2025-2035; 106 100 vacantes anuales. |
| [5] | ESCO software developer (2512.4) — enlace en el JSON | Implementa sistemas a partir de especificaciones y diseños; habilidades: analizar especificaciones, depurar, prototipos, patrones de diseño. |
| [6] | ESCO software analyst (2512.2) — enlace en el JSON | Obtiene y prioriza requisitos, analiza procesos, crea modelos de datos, define la arquitectura, diseña sistemas de información. |

CIUO-08: grupo 251 (2511 analistas de sistemas, 2512 desarrolladores de software, 2513 desarrolladores web y multimedia, 2514 programadores de aplicaciones), confirmado en la jerarquía ESCO.

### N · Normativa y convocatorias del Estado (14)
| Ref | Fuente | Qué aporta |
|---|---|---|
| [19] | D. Leg. 1412, Ley de Gobierno Digital (2018) — https://www2.congreso.gob.pe/sicr/cendocbib/con6_uibd.nsf/BC4C2F1C7A87C56F05258AAE00716268/$FILE/decr_legis_1412.pdf | Art. 5: privacidad desde el diseño (5.3), usabilidad (5.5), cooperación digital e interoperabilidad (5.6), digital desde el diseño (5.7). Art. 28: interoperabilidad técnica a cargo de las oficinas de informática. Art. 29: reutilización de Software Público Peruano. |
| [20] | DS 029-2021-PCM, Reglamento (El Peruano, 19-02-2021) — https://busquedas.elperuano.pe/normaslegales/decreto-supremo-que-aprueba-el-reglamento-del-decreto-legisl-decreto-supremo-n-029-2021-pcm-1929103-3/ | Art. 24: servicios accesibles y diseñados para móviles; art. 25.3: arquitectura digital; art. 27: etapas alineamiento, diseño, construcción e integración, operación y mejora continua. |
| [21] | DS 098-2025-PCM (El Peruano, 31-07-2025) — https://busquedas.elperuano.pe/dispositivo/NL/2423580-2 | Art. 87: bloques básicos obligatorios (PIDE, ID GOB.PE, PÁGALO.PE, FIRMA PERÚ, SGD PERÚ). |
| [22] | RM 041-2017-PCM (El Peruano, 02-03-2017) — https://busquedas.elperuano.pe/dispositivo/NL/1491441-1 | Uso obligatorio de la NTP-ISO/IEC 12207:2016 (ciclo de vida del software) en el Sistema Nacional de Informática. |
| [23] | Ley 29733 (texto vigente, SMV) — https://www.smv.gob.pe/Uploads/Ley_29733_vigente_2025.pdf | Art. 16: medidas técnicas, organizativas y legales de seguridad del tratamiento. |
| [24] | DS 016-2024-JUS, Reglamento Ley 29733 (30-11-2024) — https://img.lpderecho.pe/wp-content/uploads/2024/11/Decreto-Supremo-016-2024-JUS-LPDerecho.pdf | Notificación de incidentes dentro de 48 horas; cita el principio de privacidad desde el diseño del D. Leg. 1412. |
| [25] | DS 115-2025-PCM, Reglamento Ley 31814 de IA (09-09-2025) — https://spijweb.minjus.gob.pe/wp-content/uploads/2025/09/DS-115-2025-PCM.pdf | Uso de riesgo alto, transparencia algorítmica (art. 25), evaluación de impacto de riesgo alto (arts. 30 y 32); aplicación gradual en el sector privado, de 2026 a 2029. |
| [26] | DS 085-2023-PCM, Política Nacional de Transformación Digital al 2030 — https://busquedas.elperuano.pe/dispositivo/NL/2200457-5 | Meta de duplicar la ciudadanía digital; 30,4% de la población haciendo trámites en línea al 2030. |
| [27] | RM 049-2026-PCM, Estrategia Nacional de Gobierno de Datos 2026-2030 (leída vía Infobae) — enlace en el JSON | Estándares de interoperabilidad y seguridad de datos en todas las entidades; plan de acción de 3 años. |
| [28] | Ley 28858 (copia CIP, El Peruano 29-07-2006) — https://www.cip.org.pe/publicaciones/2018/ley-28858.pdf | Art. 1: colegiatura y habilitación para ejercer; incluye expresamente «aspectos informáticos y de sistemas» y a la especialidad de sistemas e informática. Art. 4: certificado de habilitación. |
| [29] | CAS SUNAFIL Analista Programador (23-09-2026) — enlace en el JSON | Desarrollo web en Java, Oracle, herramientas CASE, RUP; título en Ing. de Sistemas. |
| [30] | CAS Pensión 65 Programador de Sistemas (14-09-2026) — enlace en el JSON | Backend y APIs REST, frontend, arquitectura de software, DevOps, Docker y CI/CD, pruebas de software y QA, móviles Android/Flutter, desarrollo seguro. |
| [31] | CAS SENACE Coordinador de Proyectos de SI (25-09-2026) — enlace en el JSON | NTP-ISO/IEC 12207, NTP-ISO 27001, arquitectura empresarial, normas de gobierno digital; colegiatura y habilitación vigentes. |
| — | CAS INEN Analista de Programación Informática (14-09-2026) — https://buscachamba.pe/lima/surquillo/instituto-nacional-de-enfermedades-neoplasicas/34897-analista-de-programacion-informatica | Desarrollo web (PHP, Java, JavaScript), procedimientos almacenados en Oracle, control de cambios (Git). Se leyó; no se numeró para no superar 40 referencias. |

Nota: la **Ley 30035** regula el Repositorio Nacional Digital de Ciencia, Tecnología e Innovación y **no aplica** al ejercicio profesional; la norma aplicable es la Ley 28858 (complementa la Ley 16053). Los MOF, ROF y MAPRO de oficinas de TI no se revisaron uno a uno; se usaron en su lugar las convocatorias CAS vigentes, que contienen el perfil del puesto.

### M · Mercado laboral peruano (5 fuentes; 74 avisos)
| Ref | Fuente | Qué aporta |
|---|---|---|
| [32] | Computrabajo Perú: desarrollador (916 ofertas) — https://pe.computrabajo.com/trabajo-de-desarrollador | Muestra de avisos leídos completos (ver §3). Volúmenes consultados el 25-09-2026: desarrollador 916, desarrollador web 631, analista de sistemas 1 461 (incluye puestos que no son de software), ingeniero de software 167, analista programador 115, analista funcional 97, desarrollador móvil 37, desarrollador full stack 20. |
| [33] | Computrabajo Perú: analista programador — https://pe.computrabajo.com/trabajo-de-analista-programador | Parte de la misma muestra. |
| [34] | LinkedIn: «+1000 empleos de Desarrollador de Software en Perú» — https://pe.linkedin.com/jobs/desarrollador-de-software-empleos | 60 títulos visibles; empleadores: BCP, Indra, NTT DATA, Stefanini, TCS, Valtx, Encora, AFP Integra, entre otros. Solo se leyeron títulos (sin detalle). |
| [35] | Infobae (EDO 2025 del MTPE) — enlace en el JSON | Ingeniería de Sistemas de Información encabeza la demanda para 2025: 5 226 puestos proyectados; S/ 4 331 a S/ 7 807. |
| [36] | Gestión (estudio ISIL y U. Siglo 21, 05-12-2024) — enlace en el JSON | La demanda de perfiles tecnológicos crece 15% al año; 60% de empresas tiene dificultad para cubrir vacantes; los más buscados son los desarrolladores de software. |

### P · Estándares profesionales (12)
[7] SFIA 9 REQM · [8] SWDN · [9] PROG · [10] HCEV · [11] SINT · [12] TEST · [13] RELM · [14] ASUP (sfia-online.org) · [15] SWEBOK v4.0a (18 áreas; nuevas: arquitectura, operaciones y seguridad del software; se integran agilidad y DevOps) · [16] ISTQB CTFL 4.0 · [17] OWASP Top 10:2025 (A03 fallas de la cadena de suministro) · [18] W3C WCAG 2.2 (recomendación del 12-12-2024).

### Necesidad social y tendencias
- [37] INEI, TIC en hogares, II trim. 2025: 89,0% de los usuarios de Internet se conecta por celular; la telefonía móvil llega a 95,4% de los hogares y el Internet, a 60,1%.
- [38] Prensa Perú (03-01-2026): PIDE con más de 500 millones de transacciones en 2025; Cero Papel con 267 entidades interconectadas; GOB.PE con más de 350 servicios.
- [39] WEF Future of Jobs 2025: los desarrolladores de software y aplicaciones y los ingenieros DevOps están entre los empleos de más rápido crecimiento; los especialistas en automatización de procesos, entre los de crecimiento neto; 86% de los empleadores espera que la IA transforme su negocio al 2030.
- [40] Stack Overflow 2025: 84% usa o planea usar IA; 51% de los profesionales la usa a diario; 46% desconfía de su exactitud.

## 3. Avisos revisados y frecuencia por función

- **Avisos leídos completos:** 74 de Computrabajo Perú, descargados el 25-09-2026 desde las búsquedas desarrollador, analista de sistemas, analista programador, analista funcional, desarrollador móvil, desarrollador full stack, analista QA, desarrollador web e ingeniero de software. **Meta ≥ 30: cumplida.**
- **Válidos:** 71. Se excluyeron 3: 5FDD5422 (duplicado del aviso WTS 63E0F326), D2A7ABEF (soporte de redes y mesa de ayuda, no es de software) y 770E0C80 (sin funciones descritas).
- **Perfil de empleadores:** fábricas y consultoras de software (Valtx, SONDA, Indra, Materia Gris, SOEN, Yarkan), banca, microfinanzas y fintech (Los Andes, Bipay, QTC, Grupo Mendieta), universidades (USAT, UPP y dos instituciones de educación superior), salud (Clínica Montefiori, Villa Salud), industria y agroindustria (CIDASA, Procomsac, Ecopacking, FUCSA), transporte y logística, minería, retail y energía (SEAL, Pluz). Ciudades: Lima, Arequipa, Trujillo, Chiclayo, Pisco, Puno, Cusco y Tacna.
- **Señales normativas en avisos:** SEAL pide un profesional «titulado, colegiado y habilitado»; varios exigen «procedimiento de desarrollo seguro» (ISO 27001, OWASP, SonarQube).
- **Método:** se codificó cada aviso por palabras clave para cada función y luego se revisó la lectura del texto (p. ej., se descartó «automatización de pruebas» al contar la automatización de procesos, y «móvil» se contó solo cuando aparece como aplicación o dispositivo).

| Código | Función | Avisos (de 71) |
|---|---|---|
| E1-01 | Análisis de requerimientos y procesos del negocio | 42 |
| E1-02 | Diseño de arquitectura y datos del software | 29 |
| E1-03 | Desarrollo de servicios y lógica de negocio | 56 |
| E1-04 | Desarrollo de interfaces web de usuario | 34 |
| E1-05 | Desarrollo de aplicaciones para dispositivos móviles | 17 (13 de desarrollo directo, 4 de pruebas o arquitectura) |
| E1-06 | Integración de sistemas y servicios de información | 48 |
| E1-07 | Automatización de procesos operativos del negocio | 15 |
| E1-08 | Aseguramiento de la calidad del software | 41 |
| E1-09 | Seguridad y privacidad en aplicaciones | 18 |
| E1-10 | Despliegue y liberación continua del software | 33 |
| E1-11 | Mantenimiento evolutivo y soporte de aplicaciones | 56 |
| — | Uso de herramientas de IA en el desarrollo (tendencia, no función) | 19 |

## 4. Lo que no se pudo leer
- **gob.pe** por WebFetch devolvió HTTP 418; se usaron El Peruano, congreso.gob.pe, SMV y SPIJ como fuentes oficiales equivalentes. Una página de gob.pe sí respondió por curl, pero no fue necesaria.
- **LP Derecho** (páginas web): HTTP 403; se leyó el PDF oficial alojado en img.lpderecho.pe.
- **ISO/IEC 25010:2023** (iso.org): HTTP 403; no se usa como referencia.
- **WEF** (página digest): HTTP 403; se leyó el PDF completo del informe.
- **Bumeran:** la página carga los avisos por JavaScript; no se obtuvieron avisos legibles.
- **Talento Perú / SERVIR** directo: aplicación dinámica; las convocatorias CAS se leyeron en la réplica BuscaChamba, que muestra número de convocatoria, fechas, requisitos y conocimientos (no la lista de funciones).
- **Informe DORA 2025:** la página solo tiene un resumen, sin cifras; no se usa como referencia.
- **EDO 2025 del MTPE:** gob.pe no se pudo leer; la cifra se toma de Infobae [35] (fuente secundaria).
- **LinkedIn:** solo títulos y empresas del listado público; el detalle de los avisos exige iniciar sesión.

## 5. Mapa funcional (OIT/Cinterfor)

**Propósito clave:** Desarrollar, integrar y mantener soluciones de software web y móviles que las organizaciones usan en sus operaciones (…) para entregar sistemas confiables y mantenibles.

- **FC1 · Analizar y diseñar la solución de software**
  - E1-01 Análisis de requerimientos y procesos del negocio (integra el análisis funcional y de sistemas de información)
  - E1-02 Diseño de arquitectura y datos del software
- **FC2 · Construir e integrar los componentes de la solución**
  - E1-03 Desarrollo de servicios y lógica de negocio
  - E1-04 Desarrollo de interfaces web de usuario
  - E1-05 Desarrollo de aplicaciones para dispositivos móviles
  - E1-06 Integración de sistemas y servicios de información
  - E1-07 Automatización de procesos operativos del negocio (emergente)
- **FC3 · Verificar la calidad y la seguridad del software**
  - E1-08 Aseguramiento de la calidad del software
  - E1-09 Seguridad y privacidad en aplicaciones (transversal)
- **FC4 · Desplegar y evolucionar el software en producción**
  - E1-10 Despliegue y liberación continua del software
  - E1-11 Mantenimiento evolutivo y soporte de aplicaciones

**Corte de pregrado:** el mapa se corta en el nivel en que un egresado ejecuta la función completa con supervisión indirecta (SFIA nivel 3, «Apply»). La arquitectura empresarial, la gestión de proyectos y servicios de TI, la infraestructura y nube corporativa, la seguridad corporativa (pentesting, respuesta a incidentes) y la analítica e IA quedan fuera porque corresponden a C2 a C5.

**No son funciones** (se trataron como tecnologías, modalidades o tendencias): IA generativa y asistentes de código, nube (AWS/Azure), ERP concretos (SAP B1, GeneXus), low-code y metodologías ágiles. Aparecen dentro de tareas, ámbitos o justificaciones.

**Cobertura de ámbitos integrados:** el «Análisis funcional y de sistemas de información» queda cubierto por E1-01 (relevamiento, modelado de procesos, especificación funcional), E1-06 (integración de sistemas de información) y E1-11 (soporte funcional y evolutivo).

## 6. Dudas para el panel
1. ¿E1-07 (automatización de procesos) es una función propia o debe absorberse en E1-03 y E1-06? Tiene 15 de 71 avisos y apoyo del WEF, pero se superpone con la analítica e IA de C3.
2. ¿E1-09 (seguridad y privacidad en aplicaciones) queda en E1 como función transversal o se deja solo como estándar dentro de las demás funciones y se remite a C4?
3. ¿Separar E1-04 (web) de E1-05 (móvil), o unirlas en «Desarrollo de interfaces de usuario web y móviles»?
4. EPA: se propone nivel 4 solo para E1-03 y E1-04, y nivel 3 en las demás. ¿El panel lo acepta?
5. E1-10 (despliegue continuo) se superpone con C2 (automatización de infraestructura); el límite propuesto es que E1 despliega sus aplicaciones y C2 opera la plataforma.
