# Bitácora del barrido · Paso 2.1 · Momento 1 · SIS-E3

**Especialidad:** Ciencia de datos, inteligencia artificial e inteligencia de negocios (integra: Inteligencia de negocios y analítica empresarial)
**Competencia:** C3 · Desarrollo de soluciones de analítica e inteligencia artificial
**Contexto:** Perú, horizonte de 5 años (2026-2031) · **Fecha del barrido:** 25-09-2026
**Insumo usado:** nombre, especialidad integrada y ámbito, descripción F1 (vol 4, amp 4, esc 4, rem 4, for 2), proceso y evidencia F1 y definición conceptual de C3. **No se leyeron ni usaron las capacidades.**

## 1. Propósito clave

> Construir soluciones de datos, analítica e inteligencia artificial que integran y gobiernan el dato de la organización, lo modelan, validan e implantan en producción bajo principios de calidad, ética algorítmica y protección de datos personales, para que la gerencia y los procesos automatizados decidan con evidencia confiable.

(verbo: construir · objeto: soluciones de datos, analítica e IA · condición: integrando, gobernando, modelando, validando e implantando bajo calidad, ética y protección de datos · finalidad: decisiones con evidencia confiable)

## 2. Fuentes revisadas por tipo

Se cubren 4 de 6 tipos: O, N, M y P. A (actores) y D (Diseña tu Vida) no aplican en este momento.

### O · Ocupacional (6)
| Ref | Fuente | Qué aporta | Enlace |
|---|---|---|---|
| [1] | O*NET 15-2051.00 Data Scientists | 16 tareas con importancia (analizar 83, visualizar 83, validar modelos 81, presentar 80, recomendar 79, identificar problemas 78, comparar modelos 76) | https://www.onetonline.org/link/details/15-2051.00 |
| [2] | O*NET 15-2051.01 Business Intelligence Analysts | 17 tareas (reportes para ejecutivos 91, mantener tableros 84, flujo de información 80) | https://www.onetonline.org/link/details/15-2051.01 |
| [3] | O*NET 15-1243.01 Data Warehousing Specialists | modelos de proceso del almacén 86, verificar calidad 86, mapear fuentes 81 | https://www.onetonline.org/link/details/15-1243.01 |
| [4] | ESCO 2511.3 científico de datos | descripción y 23 habilidades esenciales (limpieza, calidad, visualización, sistemas de recomendación) | https://ec.europa.eu/esco/api/resource/occupation?uri=http://data.europa.eu/esco/occupation/258e46f9-0075-4a2e-adae-1ff0477e0f30&language=es |
| [5] | ESCO 2511.2 analista de datos | 28 habilidades esenciales (inteligencia empresarial, calidad de datos, confidencialidad, informar resultados) | https://ec.europa.eu/esco/api/resource/occupation?uri=http://data.europa.eu/esco/occupation/d3edb8f8-3a06-47a0-8fb9-9b212c006aa2&language=es |
| [6] | ESCO 2511.10 diseñador de sistemas inteligentes de TIC | 22 habilidades (principios de IA, procesamiento del lenguaje natural) | https://ec.europa.eu/esco/api/resource/occupation?uri=http://data.europa.eu/esco/occupation/35553663-deab-4d9a-bf22-15c1625d28e8&language=es |

CIUO-08: las tres ocupaciones ESCO cuelgan del grupo 2511 (analistas de sistemas); no se consultó la tabla CIUO-08 de la OIT por separado.

### N · Normativa y sector público (9)
| Ref | Norma o documento | Qué aporta | Enlace |
|---|---|---|---|
| [7] | Ley 31814 (2023) | principios: enfoque basado en riesgos, ética, privacidad | https://busquedas.elperuano.pe/dispositivo/NL/2192926-1 |
| [8] | DS 115-2025-PCM, Reglamento de la Ley 31814 | art. 24 usos de riesgo alto (crédito, selección de personal, salud, educación de menores, programas sociales, infraestructura crítica); art. 25 transparencia algorítmica; art. 28 supervisión humana; implementación escalonada del sector privado (1 año salud, educación, justicia, seguridad, economía y finanzas; hasta 4 años el resto) | https://busquedas.elperuano.pe/dispositivo/NL/2436426-1 |
| [9] | RM 152-2026-PCM, ENIA 2026-2030 (El Peruano, 1-5-2026) | Oficial de IA, Equipo Técnico de Datos e IA, Plan de Acción de IA condicionado al de gobierno de datos, Catálogo IA Perú con modelos, métricas de rendimiento o sesgo; diagnóstico: adopción incipiente, escasez de talento, Perú bajo el promedio regional en ILIA 2025 | https://iuslatin.pe/wp-content/uploads/2026/05/Estrategia-Nacional-de-Inteligencia-Artificial-2026-2030.pdf |
| [10] | DS 016-2024-JUS, Reglamento de la Ley 29733 | art. 34 notificación de incidentes en 48 h; arts. 37-39 Oficial de Datos Personales; art. 40 evaluación de impacto; art. 87 derecho a no ser objeto de decisiones automatizadas | https://img.lpderecho.pe/wp-content/uploads/2024/11/Decreto-Supremo-016-2024-JUS-LPDerecho.pdf |
| [11] | RM 049-2026-PCM, Estrategia Nacional de Gobierno de Datos 2026-2030 (nota TVPerú) | Plan de Acción de Gobierno de Datos obligatorio, Oficial de Gobierno de Datos | https://www.tvperu.gob.pe/noticias/politica/poder-ejecutivo-aprueba-la-estrategia-nacional-de-gobierno-de-datos-2026-2030 |
| [12] | Directiva 001-2022-PCM/SGTD | responsabilidades del Oficial de Gobierno de Datos: calidad, trazabilidad, datos abiertos, almacenes, analítica | https://cdn.www.gob.pe/uploads/document/file/3026640/SGTD_Perfil_Oficial%20de%20Gobierno%20de%20Datos.pdf.pdf |
| [13] | PCM, nota PNDA (6-3-2026) | más de 4 000 conjuntos de datos, 350 entidades, 1.2 millones de usuarios | https://www.gob.pe/institucion/pcm/noticias/1362816-pcm-mas-de-1-2-millones-de-peruanos-utilizan-la-plataforma-nacional-de-datos-abiertos-para-investigar-innovar-y-crear-soluciones-digitales |
| [14] | Res. SBS 00053-2023, Reglamento de Gestión de Riesgos de Modelo | validación independiente inicial y periódica (art. 20), monitoreo con umbrales al menos anual (art. 21), inventario semestral (art. 5) | https://busquedas.elperuano.pe/dispositivo/NL/2141173-1 |
| [38] | Convocatoria CAS 2026 Hospital General de Jaén: Analista de datos | reportes, bases de datos, Power BI o Tableau; S/ 5 364 | https://www.convocatoriascas.com/concurso-publico-proceso-hospital-general-jaen-octubre-2026-ingenieria-sistemas-informatica-computacion-282765.html |

### M · Mercado (80 avisos pertinentes + 5 estudios)
Estudios: [24] WEF Future of Jobs 2025 (86 % espera transformación por IA; big data, IA/ML, almacenes de datos y analistas/científicos de datos entre los empleos de mayor crecimiento), [25] APOYO Consultoría vía Gestión (demanda ~3 800, oferta ~1 100 egresados, brecha ~2 700; composición: analista 35 %, científico 24 %, ingeniero de datos 16 %, ingeniero de IA 5 %, data steward 6 %), [26] La República 2026 (demanda +40 %, equipos de 19 a 26, más buscados: ingeniero de IA, arquitecto de datos, ingeniero MLOps; S/ 6 000-12 000), [27] CCL EAE-2024 vía Forbes (14 % usa IA, 23 % implementa, 51 % considera).

Avisos: Computrabajo Perú, 13 búsquedas el 25-09-2026 (científico de datos, data scientist, analista de datos, analista BI, analista de business intelligence, analista de inteligencia de negocios, ingeniero de datos, data engineer, machine learning, ingeniero de machine learning, MLOps, inteligencia artificial, gobierno de datos). Se recogieron 94 avisos; se descartaron 14 que no correspondían (promotores, ejecutivos de ventas, registradores, instructores, soporte). Se leyeron completos 80 y se codificaron por palabras clave con revisión manual de los casos límite. Avisos citados: [32]-[37], [39]; páginas de búsqueda [28]-[31].

### P · Estándares profesionales (9)
SFIA 9: DENG [15], DATM [16], BINT [17], VISL [18], DAAN [19], DATS [20], MLNG [21] (incluye MLOps, equidad y sesgo, trazabilidad); ACM Computing Competencies for Undergraduate Data Science Curricula 2021 [22]; DAMA-DMBOK 2.ª ed. revisada [23].

### Lo que no se pudo leer
- gob.pe «Conoce el Reglamento de la Ley de IA» [40] y la página de la ENIA en gob.pe: HTTP 418. El reglamento se leyó en El Peruano [8] y la ENIA en el PDF de El Peruano [9]. [40] queda **No verificado** y no se usa como evidencia única.
- Anexo de la ENIA (hoja de ruta con metas): no leído.
- Texto de la RM 049-2026-PCM: solo se leyó la nota de TVPerú [11].
- iso.org (ISO/IEC 42001) y weforum.org (nota web): 403. El WEF se leyó en su PDF oficial [24]; ISO/IEC 42001 no se cita.
- Página web de LP Derecho: 403; se leyó el PDF de la separata [10].
- SERVIR / Talento Perú: no se encontró un perfil CAS de científico de datos o ingeniero de IA. Solo se halló la convocatoria de analista de datos de Jaén [38], leída en un agregador.
- Bumeran, LinkedIn e Indeed no se barrieron, así que el mercado depende de una sola bolsa.

## 3. Frecuencia en avisos por función (n = 80)

| Función | Avisos | Tipos de evidencia |
|---|---|---|
| E3-01 Integración y preparación de datos organizacionales | 35 | O, M, P |
| E3-02 Diseño de almacenes analíticos de datos | 22 | O, M, P |
| E3-03 Gobierno, calidad y protección del dato | 21 | O, N, M, P |
| E3-04 Tableros de indicadores para la gestión | 61 | O, N, M, P |
| E3-05 Análisis de datos para decisiones de negocio | 54 | O, M, P |
| E3-06 Modelos predictivos para procesos de negocio | 23 | O, N, M, P |
| E3-07 Asistentes inteligentes para procesos organizacionales | 10 (piden construirlos; se excluyen los avisos que solo piden usar herramientas de IA generativa) | O, N, M, P |
| E3-08 Validación técnica y ética de modelos | 4 (controles de sesgo, explicabilidad, validar o calibrar modelos, gobierno de modelos) | O, N, M, P |
| E3-09 Operación de modelos en producción | 15 (8 de ellos sobre puesta en producción de modelos) | O, N, M, P |

Ninguna función depende de un solo tipo de fuente (`unica: false` en las 9).

## 4. Mapa funcional (OIT/Cinterfor)

**Propósito clave:** construir soluciones de datos, analítica e IA para decidir con evidencia confiable.

- **A. Gobernar e integrar el dato de la organización**
  - E3-01 Integración y preparación de datos organizacionales
  - E3-02 Diseño de almacenes analíticos de datos
  - E3-03 Gobierno, calidad y protección del dato (ámbito: protección de datos personales)
- **B. Convertir los datos en decisiones de gestión** (ámbito: inteligencia de negocios y analítica empresarial)
  - E3-04 Tableros de indicadores para la gestión
  - E3-05 Análisis de datos para decisiones de negocio
- **C. Construir y validar modelos que aprenden**
  - E3-06 Modelos predictivos para procesos de negocio
  - E3-07 Asistentes inteligentes para procesos organizacionales
  - E3-08 Validación técnica y ética de modelos
- **D. Implantar y sostener modelos en producción**
  - E3-09 Operación de modelos en producción

Corte: el mapa llega hasta donde un egresado de pregrado ejecuta la función completa (EPA 2 a 4). Quedan fuera por nivel: arquitectura corporativa de datos, dirección del área de datos y rol de Oficial de IA, de Gobierno de Datos o de Datos Personales. Esos roles sirven como destino del egresado, no como función de egreso.

Cobertura del insumo: la integrada «Inteligencia de negocios y analítica empresarial» queda en E3-02, E3-04 y E3-05; la protección de datos en E3-03 y E3-08; el trabajo en equipos remotos en los ámbitos de E3-01, E3-04, E3-06, E3-07 y E3-09. El proceso F1 queda cubierto así: gobernar (A), modelar y entrenar (E3-06, E3-07), evaluar (E3-08), implantar (E3-09). La evidencia F1 corresponde a los productos de E3-09, E3-08 y E3-04.

## 5. Dudas para el panel
1. ¿E3-07 es una función propia o una modalidad tecnológica de E3-06? Hay mercado emergente (10/80) y norma aplicable, pero el método excluye «una tecnología».
2. E3-08 tiene respaldo normativo fuerte (Reglamento 31814, SBS), pero poca presencia explícita en avisos (4/80). ¿Se mantiene como función separada con EPA 2?
3. ¿E3-02 se mantiene separada de E3-01 o se fusionan? En los avisos peruanos suelen aparecer juntas.
4. EPA de E3-04 propuesto en 4 (sin supervisión). Validar si es exigible al egreso.
