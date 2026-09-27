# SIS · Paso 1.1 · Momento 4 · Registro de evidencias de la declaración de capacidad instalada

**Programa:** EP de Ingeniería de Sistemas · Universidad Peruana Unión (Lima-Ñaña, Juliaca, Tarapoto)
**Agente:** Génesys · **Fecha de consulta de todas las fuentes:** 24-09-2026
**Archivo resultante:** `datos/capacidad/SIS-decl.json`

> **AVISO. Este documento y el JSON asociado son un BORRADOR.** Los valores se derivaron únicamente de información pública (sitio institucional, repositorio de tesis, noticias). No sustituyen la declaración oficial: la Dirección de la EP de Ingeniería de Sistemas debe revisar cada indicador, corregirlo con su información interna (plana docente vigente, convenios firmados y vigentes, inventario de laboratorios por sede) y firmarlo. Todo valor marcado "estimado · por confirmar por la Dirección" es una inferencia prudente, no un dato verificado.

**Restricción respetada:** no se abrió el plan de estudios ni la malla curricular de la UPeU ni se citaron sus competencias (sello del plan). Solo se leyó la portada institucional de cada carrera en las secciones de convenios, tecnología, alianzas y sedes.

---

## 1. Resumen por especialidad (doc / cam / inf · estado)

| Código | Especialidad | doc | cam | inf | Estado |
|---|---|---|---|---|---|
| SIS-01 | Desarrollo de software e ingeniería de aplicaciones | 4 | 3 | 3 | con evidencia |
| SIS-02 | Ciencia de datos e inteligencia artificial | 4 | 3 | 3 | estimado · por confirmar por la Dirección |
| SIS-03 | Ciberseguridad y gestión de riesgos digitales | 4 | 3 | 3 | estimado · por confirmar por la Dirección |
| SIS-04 | Infraestructura en la nube y DevOps | 3 | 3 | 3 | con evidencia |
| SIS-05 | Gestión de proyectos y servicios de TI | 4 | 3 | 3 | estimado · por confirmar por la Dirección |
| SIS-06 | Arquitectura empresarial y transformación digital | 3 | 2 | 2 | estimado · por confirmar por la Dirección |
| SIS-09 | Análisis funcional y de sistemas de información | 4 | 3 | 3 | con evidencia |
| SIS-11 | Redes y telecomunicaciones | 4 | 3 | 3 | estimado · por confirmar por la Dirección |
| SIS-12 | Auditoría de sistemas y gobierno de TI | 3 | 2 | 2 | estimado · por confirmar por la Dirección |
| SIS-13 | Protección de datos personales y privacidad | 2 | 2 | 2 | estimado · por confirmar por la Dirección |
| SIS-14 | Inteligencia de negocios y analítica empresarial | 4 | 3 | 3 | estimado · por confirmar por la Dirección |

Criterio de "estado": se marcó **con evidencia** solo cuando los tres indicadores se apoyan en fuentes públicas concretas; bastó un indicador inferido para marcar el ítem completo como **estimado**. En cada ítem del JSON se indica cuál indicador es el estimado.

---

## 2. Hallazgos por indicador

### 2.1 Docentes con el perfil (doc)

**Método.** La UPeU publica la plana docente por periodo en `upeu.edu.pe/transparencia/plana-docente/`, pero los enlaces del menú son `href="#"` (cargan por JavaScript) y no fue posible extraer el listado (bloqueo B1). El perfil docente se infirió por **tesis asesoradas** en el repositorio institucional (colección Ingeniería de Sistemas, uuid `03998fc1-ac34-427d-a9ab-3cb0c0f64b0b`, handle `20.500.12840/73`) y por **noticias institucionales** con nombres. Un asesor de dos o más tesis en una línea se consideró "docente con el perfil". La condición de docente vigente en 2026 de cada nombre **no se pudo verificar** y debe confirmarla la Dirección.

**Docentes identificados y líneas (por tesis asesoradas, 2013-2026):**

| Docente (como figura en el repositorio) | Líneas evidenciadas | Sede probable |
|---|---|---|
| Lévano Rodríguez, Danny (Dr./Mg.) | desarrollo, SI, ITIL v4, procesos, arquitectura escalable, IoT+IA (heladas, tilapia) | Juliaca |
| Saboya Rios, Nemias | SI (SICPE), ML e-commerce, CNN+LSTM contraseñas, CMMI-SVC/ITIL | Lima |
| Huanca López, Lizeth Geanina (Mg.) | COBIT 5, PMBOK, ISO 27002, gestión de incidentes, gobierno de TI | Lima |
| Otazu Luque, Jorge Eddy | DWDM/FTTH, G-PON, IDS/IPS ISO 27001, IoT, campo laboral | Juliaca |
| Asin Gomez, Fernando Manuel (Mg.) | VoIP, transformación digital, protección de datos personales | Lima |
| Cuellar Rodríguez, Immer Elías | ISO 27001, SI web | Lima |
| Valles Coral, Miguel Angel | ISO 27001, VoIP, visión artificial, data warehouse | Tarapoto |
| Condori Coaquira, Angel Rosendo | ML, deep learning, CI/CD (2 tesis) | Juliaca |
| Gómez Apaza, Roel Dante | ML, apps móviles, informes en WDS | Juliaca |
| Cruz Rodriguez, Joseph Ibrahim | SI web, SCRUM/XP, identidad digital | Lima |
| Gutierrez Quispe, Eder | SI web Angular/REST, LoopBack/NuxtJS, apps móviles | Juliaca |
| Valladares Castillo, Sergio Omar | BI (2 tesis) | Lima |
| Chambi Aguilar, Jenson Daniel | ITIL v3, datamart | Tarapoto |
| Casildo Bedón, Nancy Esther (Mg.) | ITIL difuso, digitalización, investigación metodológica | Juliaca |
| Humpiri Flores, Milton Edward | transformación digital, operación de data center | Juliaca |
| Sullon Macalupu, Abel Angel | CNN, apps móviles K-NN | Lima |
| Ramírez Pezo, Yngue Elízabeth (Mg.) | software (Negosy), IA tilapia (líder técnica) | Tarapoto |
| Huamán Labán, Joyse Baldwin (Mtro.) | automatización, datasets IA | Tarapoto |
| Herrera Yucra, Benazir Francis (Mg.) | coordinadora EP Juliaca (2022), informes, IoT heladas | Juliaca |
| Mamani Pari, David (Mg.) | app móvil GPS, IoT heladas | Juliaca |
| Ruiz Grandez, Marco Antonio | datamart | Tarapoto |
| Sánchez Garcés, Jorge Alejandro | ML financiero | Lima |
| Huanca Torres, Fredy Abel | chatbot, YOLO/TrOCR | Juliaca |
| Carrasco Guerrero, Erick | red LAN (2017) | s. d. |
| Mamani Apaza, Guillermo | BI Kimball (2013) | Lima |
| Quea López, Godofredo (Ing.) | prototipos IoT | Juliaca |
| Loaiza Jara, Omar (Ing.) | coordinador de investigación EP Sistemas, investigador Concytec (2020) | Lima |
| López Gonzales, Javier Linkolk (PhD) | ML series temporales ambientales (posgrado, 2025) | Lima |
| Acuña Salinas, Érika (Dra.) | directora EP Sistemas (2020) / decana FIA (2022) | Lima |

**Resultado por especialidad:** ver campo `docentes` del JSON. Equipo formado (4) en SIS-01, 02, 03, 05, 09, 11, 14; parcial (3) en SIS-04, 06, 12; un docente (2) en SIS-13.

**No encontrado:** grupos de investigación formalizados de la EP (no hay página pública); fichas CTI Vitae individuales (el directorio es una aplicación que no se pudo consultar por URL, bloqueo B2); lista de docentes acreditados por AWS Academy; docentes con certificaciones Cisco, Fortinet, CISA, PMP o ISO 27001 LA.

### 2.2 Campos de práctica con convenio (cam)

**Evidencia pública encontrada:**
- Portadas de la FIA (Sistemas, Software, Ciberseguridad, Ciencia de Datos): "28 convenios para prácticas preprofesionales", "42 convenios de investigación", "14 convenios de vinculación con el medio"; la FIA declara "más de 3 800 convenios con empresa" a nivel institucional. **Sin desglose por empresa.**
- Acuerdo **firmado** con **AWS Academy** (09-09-2020), dirigido a la EP de Ingeniería de Sistemas; vigencia actual no verificada.
- Alianzas **declaradas** en portadas: AWS Academy, **Cisco Systems**, **Fortinet** (sin fecha, sin documento). El buscador del sitio no devuelve noticias sobre Cisco ni Fortinet.
- Convenio marco con **IATEC** (Instituto Adventista de Tecnología, Brasil) en coordinación (16-02-2022) para prácticas de estudiantes de Sistemas; firma no verificada.
- Convenio marco UPeU Juliaca – **CIP Consejo Departamental Puno** (03-03-2022, 3 años; vencido en 2025 salvo renovación) con participación del Capítulo de Ingeniería de Sistemas.
- Investidura de prácticas preprofesionales a 25 estudiantes en Juliaca (08-06-2022) en "instituciones con convenio" (sin nombres).
- Escenarios de investigación aplicada: CITEacuícola Ahuashiyacu (Tarapoto, 2025); parcelas en Caracoto-Juliaca (2026).
- Organizaciones de tesis (evidencia de acceso, no de convenio): Negosy SAC, Well Done Solutions/WDS, Eterniasoft, Induamerica Chiclayo, Bitness Corp, Cooperativa San Martín de Porres, CIP-CDSMT, URPI SUMAC TOURS, Expreso Grael, Chugur, municipalidades (Florida-Bongará), Misión Nor Oriental, Unión Peruana del Norte, Data Center Apurímac.

**No encontrado:** convenios con bancos, entidades de gobierno digital, Huawei ICT Academy, Oracle Academy, Microsoft (solo licencia Microsoft 365), Autoridad Nacional de Protección de Datos Personales, firmas de auditoría, operadores de telecomunicaciones.

**Regla aplicada:** 4 solo con convenio firmado y vigente verificado (ninguno alcanzó 4: el de AWS Academy es una academia formativa, no un campo de práctica, y su vigencia no está verificada); 3 cuando hay alianza declarada o convenio en trámite más organizaciones reales de tesis; 2 cuando solo hay escenarios internos o de tesis.

### 2.3 Infraestructura y equipamiento (inf)

**Evidencia pública encontrada:**
- **Centro de Innovación Tecnológica** (Lima-Ñaña, inaugurado 15-08-2023): tres plantas; tercer piso con laboratorio especializado "con tecnología de vanguardia y elementos de domótica" para prácticas de Ingeniería de Sistemas; cuarto piso Eureka Lab.
- **Campus Tarapoto** (27-05-2022): laboratorios de computación modernizados, **laboratorio de redes y comunicación para Ingeniería de Sistemas**, laboratorio de domótica, FAB LAB.
- **AWS Academy** (2020): acceso a laboratorios en la nube para estudiantes y docentes.
- **Microsoft 365** como entorno de trabajo institucional (portadas FIA).
- Sistema **IDS/IPS** implementado en UPeU Juliaca (tesis 2019) y suite **UPeU Lamb System** (DTI) como escenario interno.

**No encontrado:** inventario de equipos por sede, laboratorio de ciberseguridad o cyber range, clúster o GPU para IA, centro de datos académico, licencias de BI/ITSM/modelado, información específica de laboratorios en Juliaca (solo noticias de eventos). El buscador del sitio no devuelve resultados para "data center", "fortinet", "cisco", "huawei", "oracle".

**Regla aplicada:** 3 (parcial) cuando hay laboratorios de cómputo documentados más un recurso específico de la especialidad (redes Tarapoto, AWS, domótica/IoT); 2 (mínimo) cuando solo hay cómputo genérico y Microsoft 365.

---

## 3. Registro de búsquedas (48)

Formato: nº · motor · consulta · resultado. Fecha de todas: 24-09-2026.

**A. Buscador web (WebSearch) — 16**
1. `UPeU Ingeniería de Sistemas plana docente Universidad Peruana Unión` → Sineace 2021, plana docente (menú), Mg. Fernando Asín.
2. `Universidad Peruana Unión Facultad de Ingeniería y Arquitectura laboratorios ingeniería de sistemas` → portadas FIA y EP.
3. `Universidad Peruana Unión Cisco Networking Academy` → sin resultado UPeU.
4. `Universidad Peruana Unión AWS Academy` → noticia acuerdo 2020.
5. `Universidad Peruana Unión Huawei ICT Academy` → sin resultado UPeU (sí UTP, UP, PUCP, UCH).
6. `Universidad Peruana Unión Oracle Academy convenio` → sin resultado UPeU.
7. `Universidad Peruana Unión Microsoft convenio ingeniería de sistemas` → sin resultado UPeU.
8. `UPeU grupos de investigación ingeniería de sistemas Renacyt docentes` → noticia Concytec 2020 (Omar Loaiza Jara).
9. `Universidad Peruana Unión convenio empresas prácticas preprofesionales ingeniería de sistemas` → sin resultado específico.
10. `Universidad Peruana Unión data center centro de datos DTI infraestructura tecnológica` → sin resultado.
11. `Universidad Peruana Unión Ingeniería de Sistemas acreditación ICACIT` → UPeU se une a ICACIT 2019; taller ICACIT Ñaña 2019.
12. `repositorio.upeu.edu.pe tesis ingeniería de sistemas ciberseguridad seguridad de la información` → sin resultado directo.
13. `repositorio.upeu.edu.pe tesis "Ingeniería de Sistemas" machine learning inteligencia artificial UPeU asesor` → colección Ingeniería de Sistemas del repositorio.
14. `repositorio.upeu.edu.pe tesis redes CCNA Cisco UPeU ingeniería de sistemas` → handle 20.500.12840/73.
15. `repositorio.upeu.edu.pe tesis auditoría de sistemas COBIT gobierno de TI UPeU` → tesis COBIT 5 (Huanca López) y colección de maestría.
16. Consultas 17-25 planificadas (BI, TOGAF, ITIL/PMBOK, DevOps, datos personales, laboratorios Juliaca/Tarapoto, convenios gobierno) → **bloqueo B3: cuota de WebSearch de la sesión agotada**; se reemplazaron por las búsquedas B, C y D.

**B. Buscador del repositorio institucional (API DSpace, scope = colección Ingeniería de Sistemas) — 12**
17. `ciberseguridad OR "seguridad de la información" OR ISO 27001` → 7 ítems.
18. `redes OR telecomunicaciones OR cisco OR "red de datos"` → 8 ítems.
19. `"inteligencia de negocios" OR "business intelligence" OR datamart OR "Power BI"` → 7 ítems.
20. `"machine learning" OR "aprendizaje automático" OR "inteligencia artificial" OR "redes neuronales"` → 7 ítems.
21. `"arquitectura empresarial" OR TOGAF OR "transformación digital"` → 8 ítems (ninguno TOGAF).
22. `ITIL OR PMBOK OR Scrum OR "gestión de proyectos" OR "gestión de servicios"` → 7 ítems.
23. `DevOps OR "computación en la nube" OR cloud OR AWS OR Docker OR microservicios` → 8 ítems.
24. `"datos personales" OR privacidad OR "Ley 29733"` → 8 ítems (1 específico).
25. `auditoría OR COBIT OR "gobierno de TI"` → 7 ítems.
26. `requerimientos OR "análisis de sistemas" OR "sistema de información" OR "sistema web"` → 8 ítems.
27. `"aplicación móvil" OR "desarrollo de software" OR "aplicación web" OR Scrum OR "metodología ágil"` → 6 ítems.
28. `*` con scope `20.500.12840/36` (maestría Dirección y Gestión TI) → el scope devolvió ítems de otras colecciones; no concluyente.
URL base: `https://repositorio.upeu.edu.pe/server/api/discover/search/objects?query=…&scope=03998fc1-ac34-427d-a9ab-3cb0c0f64b0b&size=20`

**C. Buscador interno del sitio upeu.edu.pe (`/?s=`) — 11**
29. `laboratorio ingeniería de sistemas` → Centro de Innovación Tecnológica 2023.
30. `cisco` → sin resultados relevantes.
31. `fortinet` → sin resultados.
32. `convenio ingeniería de sistemas` → CIP Puno 2022, ASPAAH 2021, IATEC 2022.
33. `data center` → sin resultados.
34. `huawei oracle microsoft` → sin resultados.
35. `ciberseguridad` → portada EP Ingeniería de Ciberseguridad.
36. `inteligencia artificial ingeniería de sistemas` → heladas 2026, tilapia 2025, eclipses 2026.
37. `Juliaca ingeniería de sistemas` → investidura prácticas 2022, ofimática 2022, planes de mejora 2022.
38. `Tarapoto ingeniería de sistemas` → nuevas instalaciones 2022, jornada científica 2022.
39. `ciencia de datos` → López Gonzales 2025, portada Ciencia de Datos, carreras semipresenciales 2026.
40. `AWS` → solo la noticia de 2020.
41. `prácticas preprofesionales sistemas` → investidura Juliaca 2022, CIT 2023.

**D. Buscadores alternos vía fetch — 9**
42-46. DuckDuckGo HTML (Cisco; Huawei/Oracle/Microsoft; laboratorios Juliaca/Tarapoto; LinkedIn EP; convenios empresas/bancos) → **bloqueo B4: CAPTCHA**, sin resultados.
47. Bing `"Universidad Peruana Unión" "Cisco Networking Academy"` → resultados no pertinentes.
48. Bing `ctivitae concytec "Universidad Peruana Unión" "ingeniería de sistemas" Renacyt` → solo portales, sin nombres.
49. Bing `linkedin.com "Escuela Profesional de Ingeniería de Sistemas" "Universidad Peruana Unión"` → sin resultados útiles.
50. Bing `UPeU "Ingeniería de Sistemas" director OR directora escuela 2025 OR 2026` → sin resultados útiles.

---

## 4. Registro de lecturas (29)

| nº | Fuente | URL | Resultado |
|---|---|---|---|
| L1 | Insumo `SIS-aprobadas.json` (11 especialidades) | local | leído |
| L2 | UPeU · Ingeniería de Sistemas - FIA (lectura general) | https://upeu.edu.pe/facultad-de-ingenieria/ingenieria-sistemas/ | convenios (40/42/28/14/1), Microsoft 365, AGTU, campo laboral; sin docentes |
| L3 | UPeU · Ingeniería de Sistemas - FIA (lectura de alianzas) | ídem | solo AGTU, Microsoft 365, Andrews; no menciona AWS/Cisco/Fortinet |
| L4 | UPeU · Facultad de Ingeniería y Arquitectura | https://upeu.edu.pe/facultad-de-ingenieria/ | 9 carreras; "más de 3 800 convenios con empresa"; sin inventario |
| L5 | UPeU · Acuerdo AWS Academy (09-09-2020) | https://upeu.edu.pe/upeu-firma-acuerdo-con-aws-academy-que-permitira-que-estudiantes-accedan-a-cursos-y-obtengan-certificaciones-reconocidas/ | Dra. Érika Acuña Salinas, directora EP; alcance del acuerdo |
| L6 | UPeU · Docentes calificados investigadores Concytec (05-02-2020) | https://upeu.edu.pe/docentes-unionistas-son-calificados-como-investigadores-por-el-concytec/ | Omar Loaiza Jara (coord. investigación EP Sistemas); 26 Renacyt UPeU |
| L7 | UPeU · Sineace reconoce EP Sistemas (01-06-2021) | https://upeu.edu.pe/sineace-reconoce-programa-de-estudios-de-ingenieria-de-sistemas-de-la-upeu-por-su-calidad-educativa/ | acreditación 26-05-2021, campus Lima |
| L8 | UPeU · Plana docente (en) | https://upeu.edu.pe/en/transparencia/plana-docente/ | menú por periodo, sin listado |
| L9 | UPeU · Plana docente (es) + curl | https://upeu.edu.pe/transparencia/plana-docente/ | enlaces `href="#"`; sin PDF/Excel detectables |
| L10 | ICACIT · Taller en UPeU Ñaña (nov. 2019) | https://webicacit.com/es/?view=article&id=311:icacit-noticia-179&catid=25 | Sistemas entre 4 programas en taller |
| L11 | UPeU · Reconocimiento docentes 2023-2 (04-03-2024) | https://upeu.edu.pe/en/noticias/upeu-reconoce-a-15-docentes-del-campus-lima-por-su-excelencia-academica-durante-el-ciclo-2023-2/ | Mg. Fernando Asín, EP Sistemas |
| L12 | Repositorio · Tesis COBIT 5 Huanca López (2018) | https://repositorio.upeu.edu.pe/items/f2f6914e-e798-4e0e-b0a7-cba0c296eeff | maestría Dirección y Gestión TI |
| L13 | UPeU · Ingeniería de Software - FIA | https://upeu.edu.pe/facultad-de-ingenieria/ingenieria-de-software/ | alianzas AWS Academy, Cisco Systems, Fortinet |
| L14 | UPeU · /ingenieria-de-ciberseguridad/ | https://upeu.edu.pe/facultad-de-ingenieria/ingenieria-de-ciberseguridad/ | 404 |
| L15 | UPeU · /ingenieria-de-ciencia-de-datos-e-inteligencia-artificial/ | https://upeu.edu.pe/facultad-de-ingenieria/ingenieria-de-ciencia-de-datos-e-inteligencia-artificial/ | 404 |
| L16 | UPeU · Ingeniería de Ciberseguridad - FIA | https://upeu.edu.pe/facultad-de-ingenieria/ciberseguridad/ | alianzas AWS/Cisco/Fortinet; sin laboratorios |
| L17 | UPeU · Centro de Innovación Tecnológica (15-08-2023) | https://upeu.edu.pe/inauguracion-del-centro-de-innovacion-tecnologico-de-la-universidad-peruana-union/ | lab. 3er piso con domótica para Sistemas; Eureka Lab |
| L18 | UPeU · Nuevas instalaciones Tarapoto (27-05-2022) | https://upeu.edu.pe/se-inauguraron-nuevas-instalaciones-en-la-upeu-campus-tarapoto/ | lab. redes y comunicación, cómputo, domótica, FAB LAB |
| L19 | UPeU · Investidura prácticas Juliaca (08-06-2022) | https://upeu.edu.pe/ceremonia-de-investidura-de-practicas-preprofesionales-a-25-estudiantes-de-ingenieria-de-sistemas-de-la-upeu-juliaca/ | Mg. Francis Herrera, coordinadora; sin empresas |
| L20 | UPeU · Tecnología contra heladas (10-04-2026) | https://upeu.edu.pe/upeu-desarrolla-tecnologia-que-protege-cultivos-de-papa-y-apoya-a-familias-frente-a-heladas-en-el-altiplano/ | Lévano, Quea, Herrera Yucra, Mamani Pari; IA + sensores + radio >5 km |
| L21 | UPeU · Dispositivo inteligente tilapia (02-06-2025) | https://upeu.edu.pe/innovacion-acuicola-investigadores-de-la-upeu-crean-dispositivo-inteligente-para-optimizar-la-produccion-de-tilapia-en-la-selva-peruana/ | Ramírez Pezo, Lévano, Casildo, Huamán Labán, Quea; CITE Ahuashiyacu; S/ 30 000 |
| L22 | UPeU · Convenio marco IATEC (16-02-2022) | https://upeu.edu.pe/upeu-se-reune-para-coordinar-firma-de-convenio-marco-y-comparte-su-suite-de-aplicaciones-con-iatec/ | prácticas en IATEC; UPeU Lamb System; Dra. Érika Acuña decana FIA |
| L23 | UPeU · Planes de mejora EP Sistemas (20-12-2022) | https://upeu.edu.pe/socializacion-de-ejecucion-de-planes-de-mejora-en-la-escuela-profesional-de-ingenieria-de-sistemas/ | tres campus; sin nombres |
| L24 | UPeU · Convenio CIP Puno (03-03-2022) | https://upeu.edu.pe/convenio-marco-de-cooperacion-interinstitucional-entre-la-upeu-campus-juliaca-y-el-colegio-de-ingenieros-del-peru-puno/ | 3 años; Capítulo de Sistemas; coordinadores |
| L25 | UPeU · Se une al Sistema ICACIT (02-09-2019) | https://upeu.edu.pe/upeu-se-une-al-sistema-icacit/ | 10 programas, 3 sedes |
| L26 | Repositorio · Colección maestría Dirección y Gestión TI | https://repositorio.upeu.edu.pe/handle/20.500.12840/36 | listado vacío en la vista servida |
| L27 | Repositorio · Colección Ingeniería de Sistemas | https://repositorio.upeu.edu.pe/collections/03998fc1-ac34-427d-a9ab-3cb0c0f64b0b | handle 20.500.12840/73; sin conteo visible |
| L28 | LinkedIn · página UPeU | https://www.linkedin.com/school/universidad-peruana-union/ | HTTP 999 (bloqueo B5) |
| L29 | UPeU · Ingeniería en Ciencia de Datos e IA - FIA | https://upeu.edu.pe/facultad-de-ingenieria/ciencia-de-datos/ | alianzas AWS/Cisco/Fortinet; sin laboratorios |
| L30 | UPeU · Investigador liderará sesión LACSC 2025 (15-07-2025) | https://upeu.edu.pe/investigador-de-la-upeu-liderara-sesion-sobre-ciencia-de-datos-ambientales-en-congreso-internacional/ | PhD Javier Linkolk López Gonzales, ML series temporales |

Los 12 resultados de la API del repositorio (B17-B28) se leyeron completos como parte de cada búsqueda; sus ítems se citan por handle en el JSON.

---

## 5. Bloqueos y límites

- **B1 · Plana docente no extraíble.** El listado oficial por periodo carga por JavaScript; sin él no se puede verificar quién es docente vigente en 2026-I ni por sede. La Dirección debe adjuntar la plana 2026-I por sede.
- **B2 · CTI Vitae / Renacyt no consultables por URL.** Solo se recuperó a Omar Loaiza Jara (2020) por noticia. Faltan los códigos Renacyt vigentes de los docentes listados.
- **B3 · Cuota del buscador web agotada** tras 16 consultas de esta sesión; se compensó con el buscador del repositorio (12) y del sitio institucional (11).
- **B4 · DuckDuckGo devolvió CAPTCHA** (5 consultas) y **Bing** no aportó resultados pertinentes (4).
- **B5 · LinkedIn** responde HTTP 999 sin sesión; no se pudo leer la página de la escuela ni perfiles docentes.
- **B6 · Convenios sin desglose.** La FIA solo publica conteos (28 prácticas, 42 investigación); no hay lista pública de empresas ni vigencias. Cisco y Fortinet aparecen solo como logos de alianza.
- **B7 · Sin inventario de laboratorios** por sede; Juliaca carece de noticia específica de laboratorios de Sistemas.
- **B8 · Sello del plan.** No se abrió el plan de estudios ni la malla; las portadas de carrera se leyeron omitiendo esas secciones.

## 6. Qué debe confirmar la Dirección antes de firmar

1. Plana docente vigente 2026 por sede y su correspondencia con las 11 especialidades (grados, certificaciones Cisco/AWS/Fortinet/PMP/CISA/ISO 27001).
2. Lista de convenios de prácticas vigentes con nombre de entidad, fecha y vigencia; estado actual del acuerdo AWS Academy y de las alianzas Cisco y Fortinet; si se firmó el convenio con IATEC y si se renovó el del CIP Puno.
3. Inventario de laboratorios y licencias por sede (Lima CIT, Tarapoto lab. de redes, Juliaca), incluyendo equipos de red, servidores, GPU y plataformas de BI/ITSM.
4. Los valores marcados "estimado" en SIS-02, 03, 05, 06, 11, 12, 13 y 14.

*Borrador preparado por Génesys el 24-09-2026. Requiere revisión, corrección y firma de la Dirección de la EP de Ingeniería de Sistemas.*
