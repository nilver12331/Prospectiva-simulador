# NUT-6 · Registro de evidencias — Borrador de declaración de capacidad instalada

**Proyecto:** Rediseño curricular · EP de Nutrición Humana · Universidad Peruana Unión (Lima-Ñaña, Juliaca, Tarapoto)
**Paso:** 1.1 · momento 4 · capacidad instalada de las especialidades aprobadas
**Agente:** Génesys · **Fecha de consulta de todas las fuentes:** 24-09-2026
**Archivo de salida:** `datos/capacidad/NUT-decl.json` (9 ítems)

> **AVISO.** Este documento y el JSON asociado son un **BORRADOR** preparado con información pública verificable. No sustituyen la declaración oficial: **la Dirección de la EP de Nutrición Humana debe revisar, corregir, confirmar y firmar** cada nivel antes de que se use en el paso 1.1. Los niveles marcados «estimado · por confirmar por la Dirección» son el valor más prudente que la evidencia pública permite, no una medición. No se abrió el plan de estudios ni la malla curricular de la UPeU (sello del plan); ninguna competencia del plan fue citada.

---

## 1. Resumen de niveles

| Código | Especialidad | doc | cam | inf | Estado |
|---|---|---|---|---|---|
| NUT-01 | Nutrición clínica hospitalaria | 3 | 3 | 3 | con evidencia |
| NUT-02 | Gestión de servicios de alimentación e inocuidad | 3 | 3 | 3 | estimado · por confirmar por la Dirección |
| NUT-03 | Nutrición comunitaria y salud pública | 4 | 3 | 2 | estimado · por confirmar por la Dirección |
| NUT-04 | Nutrición pediátrica y materna | 4 | 3 | 3 | con evidencia |
| NUT-07 | Desarrollo y reformulación de productos alimentarios | 3 | 3 | 3 | estimado · por confirmar por la Dirección |
| NUT-08 | Nutrición en obesidad y cirugía bariátrica | 3 | 2 | 2 | estimado · por confirmar por la Dirección |
| NUT-09 | Nutrición ocupacional y salud en minería | 2 | 2 | 2 | estimado · por confirmar por la Dirección |
| NUT-10 | Nutrición en programas sociales del Estado | 2 | 3 | 2 | estimado · por confirmar por la Dirección |
| NUT-14 | Nutrición geriátrica y del envejecimiento | 3 | 3 | 2 | estimado · por confirmar por la Dirección |

Regla aplicada al campo `estado` del ítem: «con evidencia» solo cuando los tres indicadores se apoyan en fuente pública citada; si al menos uno es estimado, el ítem entero queda «estimado · por confirmar por la Dirección» y el texto de cada indicador precisa cuál lo es.

---

## 2. Qué se encontró por indicador

### 2.1 Docentes con el perfil (doc)

**Método.** La UPeU no publica un directorio docente por escuela con perfiles. Se infirieron las líneas de cada docente desde las asesorías de tesis de la colección *Nutrición Humana* del repositorio institucional (165 ítems al 24-09-2026, consultada por la API DSpace) y desde noticias oficiales. Limitación central: la asesoría de tesis evidencia línea de trabajo, **no** grado, segunda especialidad ni vínculo laboral vigente. Varios asesores de 2013–2019 pueden ya no pertenecer a la EP.

**Docentes identificados públicamente (nombre · evidencia · años):**

| Docente | Líneas inferidas | Fuente |
|---|---|---|
| Mg. María Alina Miranda Flores (Flores de Pacheco) · Directora de la EP (2023–2024) | obesidad en choferes (2013), anemia en gestantes (2015), sueño/IMC/riesgo cardiometabólico (2023) | noticias aniversario 2023 y 2024; API repositorio |
| Mg. Yaquelin Eveling Calizaya Milla · docente e investigadora UPeU (posgrado) | adultos mayores hospitalizados UCI (2025), litiasis en hospitalizados (2022), hierro en alimentación complementaria (2022), loncheras (2026), programa educativo y hemoglobina (2024), quesos veganos (2024), okara/yogur (2026), pasta de maní (2021), ultraprocesados (2022) | página Maestría; API repositorio |
| Mg. Tabita Lozano López · coordinadora Maestría en Nutrición (2024) | coasesora tesis régimen dietético (2022) | noticia aniversario 2024; API repositorio |
| Lic. Charo Natali Huzco Rutti | nutricionistas clínicos (2021), composición corporal (2023), grasa corporal/riesgo cardiometabólico (2024), inteligencia emocional/IMC (2026) | API repositorio |
| Mg. Mery Rodríguez Vásquez · directora de la EP en 2019 | adultos mayores activos (2019), MMN en puérperas y Cuna Más (2019), rugby (2021), programa educativo (2025), servicio de alimentación hospitalario (2026) | noticia 2019; API repositorio |
| Lic. María Bernarda Collantes Cossio | pérdida de peso (2022), MNA adultos mayores hospital (2022), niños <5 madres migrantes (2024), colaboradores de restaurantes (2024), escolares Juliaca (2025), imagen corporal/antropometría (2025), adicción a comidas/grasa corporal (2026) | API repositorio |
| Lic. Bertha Chanducas Lozano | anemia en niños <2 (2015), Nutriunión (2018), Niños de Hierro (2019), sueño/IMC (2024) | API repositorio; PDF tesis 2015 |
| Lic. Silvia Elida Moori Apolinario | higiene en restaurantes (2017), etiquetado (2018), harina de árbol de pan (2018), té verde (2018), vegetarianismo (2022), conductas alimentarias (2022) | API repositorio |
| Lic. Elisa Romy Rodríguez López | hemodiálisis (2016), gestantes (2017), chía Hospital de Chosica (2017) | API repositorio |
| Rodrigo Alfredo Matos Chamorro | pajuro (2016), alimentación complementaria (2019), modelos peso-talla (2022) | API repositorio |
| Jacksaint Saintila · Renacyt nivel II (27-05-2021 a 27-05-2024), coordinador de investigación de la EP en 2021 | higiene manipuladores (2017), escolares (2020), imagen corporal (2021), patrones alimentarios (2022), estrés laboral (2022) | noticia 01-06-2021; API repositorio |
| Eduardo Alberto Meza Mantari | microbiología del comedor universitario (2020) | API repositorio |
| Ana Evangelista Galarreta | programa Servalim feliz (2015) | API repositorio |
| Felix Nicolas Palacios Morales | cushuro (2018) | API repositorio |
| Johnny Percy Ambulay Briceño | obesidad en comerciantes (2017) | API repositorio |
| Marlene Pareja Joaquín | perímetro de cuello (2019) | API repositorio |
| Raquel Chilón Llico | percepción materna del IMC (2023) | API repositorio |
| María Elena Varillas Lermo | ultraprocesados en escolares (2018) | API repositorio |
| Lic. Margarita Sánchez · coordinadora de prácticas (2024) | internado con enfoque clínico | noticia investidura 2024 |
| Lic. Gabriela Peña, Lic. Silvia Villegas, Lic. Pedro Tirado | egresadas/os reconocidos; vínculo docente no confirmado | noticias 2023 y 2024 |

**Por especialidad.** NUT-01 equipo parcial clínico-hospitalario (Calizaya, Collantes, Huzco, Rodríguez Vásquez, Rodríguez López) → 3. NUT-02 equipo parcial, evidencia mayormente ≥5 años → 3 estimado. NUT-03 ≥4 con líneas comunitarias recientes → 4. NUT-04 ≥4 con líneas materno-infantiles → 4. NUT-07 una docente con evidencia reciente (Calizaya) más tres con evidencia 2016–2018 → 3 estimado. NUT-08 obesidad ≥4, bariátrica 0 → 3 estimado. NUT-09 poblaciones trabajadoras sin salud ocupacional ni minería → 2 estimado. NUT-10 una asesoría directa (Cuna Más) → 2 estimado. NUT-14 tres asesorías geriátricas → 3.

**No se pudo verificar:** grados académicos actuales, segundas especialidades, registro CTI Vitae individual (la plataforma Renacyt es dinámica y no indexable por fetch; la búsqueda web de Renacyt/CTI Vitae fue bloqueada por cuota, ver §4), planta docente de Juliaca (ninguna noticia nombra docentes de Nutrición Juliaca) y existencia de la carrera en Tarapoto (ver §5).

### 2.2 Campos de práctica con convenio (cam)

**Convenios y escenarios publicados (fecha de firma o noticia):**

| Entidad | Tipo | Fecha | ¿Nutrición explícita? | Vigencia publicada |
|---|---|---|---|---|
| Hospital José Agurto Tello de Chosica (MINSA) | docente-asistencial | 21-11-2023 | Sí | No |
| Hospital de Emergencias de Ate Vitarte | renovación de convenio interinstitucional, campo clínico | 23-08-2022 | Sí | No |
| MINSA + Gobierno Regional de San Martín (UPeU Tarapoto) | marco docente-asistencial | 23-09-2021 | «carreras de Ciencias de la Salud» | No |
| EsSalud Red Asistencial Juliaca | prácticas de pregrado | 24-03-2015 | «diferentes áreas» | No |
| EsSalud Red Asistencial Juliaca | alianza «Prevenir EsSalud» | 25-08-2025 | carreras de salud | No |
| Municipalidad Distrital de Pacllón (Áncash) | convenio específico, internado «Salud Integral» | 13-02-2023 | Sí (Enfermería, Psicología, Nutrición) | No |
| Qali Warma – MIDIS (UPeU Juliaca) | acta de reunión de trabajo | 01-09-2021 | No (Ind. Alimentarias, Ambiental, Enfermería, Educación) | No |
| MIDIS – Programa Nacional PAIS (UPeU Juliaca) | plan de trabajo regional, 63 Tambos | 25-08-2025 | No especificado | No |
| Pegasso Gold Export S.A.C. (minera, UPeU Juliaca) | convenio específico: prácticas, pasantías, tesis | 25-08-2025 | «múltiples programas» | No |
| Municipalidad Provincial de San Martín (UPeU Tarapoto) | prácticas de 5.º año, todas las carreras | 11-07-2019 | Implícito | No |
| DIRESA Puno | coordinación (sede SERUMS 2026-II; UPeU como apoyo operativo) | 09-08-2026 | Nutrición en la convocatoria SERUMS | n/a |
| Clínica Adventista Good Hope | coordinación de internado de pregrado (Medicina) | s. f. | No | n/a |
| INEN | docente-asistencial, segunda especialidad Enfermería Oncológica, 3 años | 21-05-2024 | No | Sí (3 años) |
| Centro de Producción de Bienes «Unión» | planta propia; acuerdos con Inter-American Health Food Co. y Superbom | 09-04-2024 | n/a (FIA) | No |
| Comedor Universitario Lima / Juliaca / Tarapoto | campo propio | s. f. | n/a | n/a |

**Declaraciones oficiales de la EP:** prácticas de 2.º año en instituciones educativas, 3.º año en hospitales de Lima, 4.º año en restaurantes, centros de nutrición y programas comunitarios (27-09-2023); la coordinadora de prácticas cita «convenios con el Ministerio de Salud y Seguro Social» (15-10-2024); la página de la carrera declara campo en hospitales, centros de salud, programas de alimentación escolar/comunitaria, industria y servicios colectivos.

**Por qué ningún ítem alcanza 4:** el nivel 4 exige «convenios firmados vigentes»; ninguna fuente pública consigna la vigencia. Con vigencia acreditada por la Dirección, NUT-01 y NUT-04 subirían a 4. NUT-08 (sin unidad bariátrica), NUT-09 (Pegasso sin Nutrición explícita) quedan en 2.

### 2.3 Infraestructura y equipamiento (inf)

**Identificado públicamente:**
- Centro de Simulación Clínica UPeU Lima: inaugurado 22-11-2019; 10 estaciones de simulación y 3 unidades de control; beneficiarias: Enfermería, Nutrición Humana, Psicología y Medicina.
- Centro de Simulación Clínica UPeU Tarapoto: inaugurado ago. 2026; 3 unidades de entrenamiento, 3 de hospitalización, 2 consultorios CRED, 1 lavado quirúrgico, 7 unidades de control, 6 espacios de debriefing (>800 estudiantes de la FCS).
- Laboratorio de Técnicas Dietéticas de la EP de Nutrición Humana (Lima; noticia 23-09-2019).
- Comedor Universitario, Cafetín y Market Unión (Lima); comedores en Juliaca y Tarapoto; Consultorio Médico del campus Lima (atención primaria a la comunidad universitaria).
- Centro Universitario de Producción de Bienes «Unión» (planta de alimentos; marca Unión); articulación con la FIA (2022).
- Laboratorios de Ingeniería de Industrias Alimentarias (Lima, Juliaca); reanudación de prácticas de laboratorio 2021 (Lima 41, Juliaca 57, Tarapoto 13 asignaturas).
- 14 docentes de Enfermería, Nutrición y Psicología certificados como instructores en simulación (16-07-2024).
- Inspección de laboratorios e infraestructura por comisión internacional para abrir Nutrición en Juliaca (21 a 24-03-2022; informe favorable).

**No hallado públicamente (búsquedas en sitio y web sin resultados):** laboratorio de antropometría/composición corporal, bioimpedancia, calorimetría, dinamometría, hemoglobinómetros, laboratorio de bromatología o microbiología asignado a Nutrición, software de soporte nutricional o de gestión de servicios, unidad móvil. Por eso ningún ítem alcanza 4 y los ítems comunitario, obesidad, ocupacional, programas sociales y geriátrico quedan en 2.

---

## 3. Registro de búsquedas (34 efectivas · 12 bloqueadas · 5 sin render)

Fecha de todas: 24-09-2026.

**A. Búsqueda web (WebSearch) — 12 ejecutadas**
1. «Universidad Peruana Unión Escuela Profesional de Nutrición Humana docentes»
2. «UPeU Nutrición Humana laboratorios equipamiento antropometría composición corporal»
3. «UPeU Nutrición Humana convenios hospitales internado prácticas preprofesionales»
4. «Clínica Good Hope Universidad Peruana Unión convenio Facultad Ciencias de la Salud»
5. «UPeU Ñaña comedor universitario servicio de alimentación nutrición»
6. «UPeU planta piloto de alimentos Ingeniería de Alimentos Ñaña laboratorio bromatología» (sin resultados UPeU)
7. «repositorio.upeu.edu.pe tesis nutrición humana anemia niños gestantes»
8. «Universidad Peruana Unión convenio EsSalud prácticas nutrición»
9. «Universidad Peruana Unión convenio Qali Warma MIDIS municipalidad nutrición»
10. «UPeU Juliaca Nutrición Humana docentes laboratorio convenio DIRESA Puno»
11. «UPeU Tarapoto Nutrición Humana convenio hospital DIRESA San Martín»
12. «Renacyt docente Universidad Peruana Unión nutrición investigador» (sin resultados UPeU)

**B. Búsqueda en el sitio upeu.edu.pe (`/?s=`) — 13**
13. https://upeu.edu.pe/?s=nutrici%C3%B3n+laboratorio
14. https://upeu.edu.pe/?s=convenio+nutrici%C3%B3n
15. https://upeu.edu.pe/?s=minera (sin resultados)
16. https://upeu.edu.pe/?s=planta+piloto (sin resultados pertinentes)
17. https://upeu.edu.pe/?s=antropometr%C3%ADa (sin resultados)
18. https://upeu.edu.pe/?s=Qali+Warma
19. https://upeu.edu.pe/?s=Good+Hope
20. https://upeu.edu.pe/?s=Renacyt+nutrici%C3%B3n
21. https://upeu.edu.pe/?s=comedor+universitario
22. https://upeu.edu.pe/?s=adulto+mayor+nutrici%C3%B3n (sin resultados)
23. https://upeu.edu.pe/?s=obesidad
24. https://upeu.edu.pe/?s=anemia+gestantes
25. https://upeu.edu.pe/?s=Productos+Uni%C3%B3n
26. https://upeu.edu.pe/?s=Pegasso (sin resultados)
27. https://upeu.edu.pe/?s=Centro+Universitario+de+Producci%C3%B3n+de+Bienes
28. https://upeu.edu.pe/?s=simulaci%C3%B3n+cl%C3%ADnica

**C. Búsqueda en el repositorio institucional por API DSpace (colección Nutrición Humana `457644ec-7c72-4143-b451-d9c0bd37c212`) — 10**
29. query=sarcopenia OR "adulto mayor" (7 resultados)
30. query=obesidad (8)
31. query=inocuidad OR HACCP OR "servicio de alimentación" (8)
32. query=trabajadores OR minera OR ocupacional (8; ninguno minero)
33. query=anemia OR gestantes OR lactancia (7)
34. query="Qali Warma" OR "programa social" OR "Cuna Más" (7)
35. query=producto OR formulación OR elaboración OR aceptabilidad (7)
36. query=hospital OR pacientes OR hospitalizados (7)
37. query=bariátrica OR "conducta alimentaria" (8; ninguno bariátrico)
38. query=disfagia OR geriátrico OR residencia OR asilo (7; ninguno sobre disfagia)
39. query=Juliaca OR Puno (8)
40. query=* size=1 → 165 ítems en la colección
URL base: `https://repositorio.upeu.edu.pe/server/api/discover/search/objects?query=…&scope=457644ec-7c72-4143-b451-d9c0bd37c212&size=20`

**D. Intentos sin resultado por renderizado dinámico (DSpace HTML) — 5**
`/search?query=…` (sarcopenia; obesidad bariátrica; inocuidad HACCP; minera trabajadores) y `/browse/subject?scope=…`: la interfaz Angular no entrega contenido sin JavaScript; se sustituyó por la API (bloque C).

**E. Búsquedas web bloqueadas por cuota de sesión (12)** — ver §4.

---

## 4. Registro de lecturas (35 páginas leídas · 3 fallidas)

Todas consultadas el 24-09-2026.

| # | Fuente | URL | Hallazgo principal |
|---|---|---|---|
| 1 | UPeU · Carrera de Nutrición Humana (página oficial) | https://upeu.edu.pe/facultad-de-salud/en/nutricion-humana/ | Campo de práctica y laboral; líneas: clínica, deportiva, salud pública, pediátrica, materna, geriatría, inocuidad y calidad; sedes Lima, Juliaca, Tarapoto; sin docentes ni laboratorios |
| 2 | UPeU · Inicio de prácticas pre-profesionales (27-09-2023) | https://upeu.edu.pe/estudiantes-de-nutricion-humana-de-la-upeu-celebran-el-inicio-de-sus-practicas-pre-profesionales/ | Dra./Mg. María Miranda directora; prácticas por año (colegios, hospitales de Lima, restaurantes, programas comunitarios) |
| 3 | UPeU · Aniversario con sesión solemne (14-10-2024) | https://upeu.edu.pe/escuela-de-nutricion-humana-celebra-su-aniversario-con-sesion-solemne-y-reconocimientos-especiales/ | Mg. María Miranda, Dra. Lili Fernández (decana), Mg. Tabita Lozano (coord. maestría) |
| 4 | UPeU · Investidura de 62 estudiantes (15-10-2024) | https://upeu.edu.pe/escuela-de-nutricion-humana-celebro-la-ceremonia-de-investidura-de-sus-62-estudiantes/ | Lic. Margarita Sánchez coord. de prácticas; sedes principalmente hospitales; convenios MINSA y EsSalud |
| 5 | EsSalud · Convenio prácticas pregrado Red Juliaca (24-03-2015) | http://www.essalud.gob.pe/essalud-juliaca-firma-convenio-de-practicas-de-pre-grado-con-universidad-peruana-union/ | Convenio específico; carreras no listadas; sin vigencia |
| 6 | UPeU · Qali Warma Juliaca (01/09-09-2021) | https://upeu.edu.pe/upeu-campus-juliaca-y-qali-warma-articulan-esfuerzos-en-favor-de-los-escolares/ | Acta de trabajo; 4 escuelas, Nutrición no incluida |
| 7 | UPeU · Convenio marco MINSA–GORE San Martín (23-09-2021) | https://upeu.edu.pe/upeu-campus-tarapoto-firma-convenio-marco-de-cooperacion-docente-asistencial-con-el-ministerio-de-salud-y-el-gobierno-regional-de-san-martin/ | Marco docente-asistencial para carreras de salud; sin vigencia |
| 8 | INEN · Convenio con FCS UPeU (21-05-2024) | https://portal.inen.sld.pe/facultad-de-ciencias-de-la-salud-de-la-universidad-peruana-union/ | Solo Enfermería Oncológica; 3 años |
| 9 | Clínica Good Hope · Docencia e Investigación | https://www.goodhope.org.pe/docencia-e-investigacion/ | Internado de pregrado UPC y UPeU (Medicina); sin Nutrición |
| 10 | UPeU · Convenios Campus Juliaca (25-08-2025) | https://upeu.edu.pe/en/noticias/instituciones-educativas-de-salud-y-programas-nacionales-consolidan-convenios-con-la-upeu/ | EsSalud «Prevenir», I.E. Horacio Zevallos, Pegasso Gold Export, PRONABEC, MIDIS–PAIS (63 Tambos) |
| 11 | UPeU · Convenio Municipalidad de Pacllón (13-02-2023) | https://upeu.edu.pe/estudiantes-de-enfermeria-psicologia-y-nutricion-humana-de-la-upeu-realizaran-internado-y-contribuiran-en-proyectos-para-el-beneficio-de-la-salud-integral-de-los-pobladores-del-distrito-de-pacllon/ | Convenio específico; internado de Nutrición; sin vigencia |
| 12 | UPeU · Servicios Lima | https://upeu.edu.pe/servicios-lima/ | Comedor Universitario, Cafetín, Market Unión, Consultorio Médico, residencias, CRAI |
| 13 | Repositorio UPeU · Colección Nutrición Humana | https://repositorio.upeu.edu.pe/collections/457644ec-7c72-4143-b451-d9c0bd37c212 | Colección existente; contenido dinámico (se usó la API) |
| 14 | UPeU · Primer aniversario Nutrición Juliaca (12-10-2023) | https://upeu.edu.pe/la-escuela-profesional-de-nutricion-humana-de-la-upeu-juliaca-celebro-su-primer-aniversario/ | Sin docentes, laboratorios ni convenios |
| 15 | UPeU · Campus Juliaca | https://upeu.edu.pe/en/juliaca/ | Nutrición Humana ofertada; laboratorios, comedor, servicios sin detalle |
| 16 | UPeU · Campus Tarapoto | https://upeu.edu.pe/en/tarapoto/ | Salud: solo Enfermería y Psicología; centro de simulación clínica nuevo |
| 17 | UPeU · Facultad de Ciencias de la Salud | https://upeu.edu.pe/facultad-de-salud/en/ | Nutrición Humana en Lima y Juliaca; «laboratorios tecnológicos», simulación de alta fidelidad; >3 800 convenios institucionales (genérico) |
| 18 | Posgrado UPeU · Maestría en Nutrición Humana (plantas) | https://posgrado.upeu.edu.pe/maestrias/en-nutricion-humana-con-mencion-en-alimentacion-basada-en-plantas/ | Mg. Yaquelin Calizaya docente e investigadora UPeU; convenios MINSA, EsSalud, Colegio de Nutricionistas |
| 19 | DIRESA Puno · SERUMS 2026-II en UPeU Juliaca (09-08-2026) | https://www.diresapuno.gob.pe/universidad-peruana-union-de-juliaca-sera-sede-de-evaluacion-presencial-y-gratuita-de-serums-2026-ii/ | Coordinación DIRESA–UPeU; nutrición en convocatoria |
| 20 | UPeU · Convenio Municipalidad de San Martín (11-07-2019) | https://upeu.edu.pe/upeu-campus-tarapoto-realiza-firma-de-convenio-con-la-municipalidad-de-san-martin/ | Prácticas de 5.º año todas las carreras |
| 21 | Wikipedia · Universidad Peruana Unión (ed. 20-10-2025) | https://es.wikipedia.org/wiki/Universidad_Peruana_Uni%C3%B3n | Campus 49 ha, laboratorios, comedor; marca Unión (alimentos); Juliaca 2002, Tarapoto 2005 |
| 22 | UPeU · Docente de Nutrición calificado investigador CONCYTEC (01-06-2021) | https://upeu.edu.pe/docente-de-la-ep-de-nutricion-humana-de-la-upeu-es-calificado-como-investigador-concytec/ | Jacksaint Saintila, Renacyt María Rostworowski nivel II, vigencia 27-05-2021 a 27-05-2024 |
| 23 | UPeU · Convenio Hospital José Agurto Tello de Chosica (21-11-2023) | https://upeu.edu.pe/upeu-y-hospital-jose-agurto-tello-de-chosica-suscriben-convenio-para-el-mejoramiento-de-la-calidad-asistencial-y-la-formacion-academica/ | Docente-asistencial; Nutrición, Psicología, Enfermería, Medicina |
| 24 | UPeU · Renovación convenio Hospital de Emergencias Ate Vitarte (23-08-2022) | https://upeu.edu.pe/funcionarios-del-hospital-de-emergencias-de-ate-vitarte-visitan-campus-universitario-en-el-marco-de-renovacion-de-convenio/ | Campo clínico para Medicina, Enfermería, Psicología y Nutrición |
| 25 | UPeU · Taller «Dulces saludables» (23-09-2019) | https://upeu.edu.pe/escuela-profesional-de-nutricion-humana-realizo-curso-taller-dulces-saludables/ | Laboratorio de Técnicas Dietéticas; Mg. Mery Rodríguez directora |
| 26 | UPeU · Retorno a laboratorios (09-11-2021) | https://upeu.edu.pe/estudiantes-retornan-a-los-laboratorios-para-realizar-sus-practicas/ | Prácticas de laboratorio en 3 campus, incluye Nutrición e Ind. Alimentarias |
| 27 | UPeU · Proyecto anemia Caminaca (23-09-2019) | https://upeu.edu.pe/upeu-se-une-al-proyecto-combatiendo-la-anemia-en-el-distrito-de-caminaca/ | ADRA; escuelas de ingeniería y administración; sin Nutrición |
| 28 | UPeU · Nuevas carreras Juliaca (28-03-2022) | https://upeu.edu.pe/nuevas-carreras-profesionales-en-la-upeu-campus-juliaca-arquitectura-y-nutricion-humana/ | Inspección de laboratorios e infraestructura por comisión internacional; informe favorable |
| 29 | UPeU · Docentes certificados en simulación (16-07-2024) | https://upeu.edu.pe/docentes-de-la-upeu-obtienen-certificado-en-simulacion-en-salud/ | 14 docentes de Enfermería, Nutrición y Psicología; SIM Salud |
| 30 | UPeU · Inauguración Centro de Simulación Clínica Lima (22-11-2019) | https://upeu.edu.pe/inauguracion-del-centro-de-simulacion-clinica-upeu/ | 10 estaciones, 3 unidades de control; Nutrición beneficiaria |
| 31 | UPeU · Centro de Simulación Clínica Tarapoto (19-08-2026) | https://upeu.edu.pe/upeu-inaugura-moderno-centro-de-simulacion-clinica-en-el-campus-tarapoto/ | 3+3 unidades, 2 consultorios CRED, 7 control, 6 debriefing |
| 32–41 | Repositorio UPeU · resultados API (10 consultas del bloque C) | ver §3-C | Títulos, asesores y fechas de 165 ítems muestreados por tema |
| 42 | Repositorio UPeU · PDF tesis Farfán Dianderas (2015) | https://repositorio.upeu.edu.pe/server/api/core/bitstreams/74d9d0f7-7b28-4ff4-a867-6b1a43798182/content | Descargado (1,4 MB); texto no extraíble sin poppler; asesora confirmada por API |

**Lecturas fallidas:** https://upeu.edu.pe/fsalud/nutricion-humana/ (HTTP 404); https://logrosperu.com/…/nutricion-humana-3234 (HTTP 403); búsquedas HTML de DSpace (render dinámico, bloque D).

---

## 5. Bloqueos y observaciones para la Dirección

1. **Cuota de búsqueda web agotada.** Tras 12 búsquedas, la sesión alcanzó el límite de WebSearch (200/200 compartido). Quedaron sin ejecutar 12 búsquedas: obesidad/bariátrica, adulto mayor/sarcopenia, minería/salud ocupacional, bioimpedancia/composición corporal, planta piloto FIA, clínica universitaria/centro de salud, Cuna Más/Juntos/Pensión 65, HACCP/concesionarias, hospitales de Huaycán/Vitarte/Hipólito Unanue, LinkedIn de la escuela, CTI Vitae, Tarapoto 2025-2026, desarrollo de productos. Se compensó con búsqueda en sitio (13) y API del repositorio (10), de modo que el total efectivo es 34.
2. **LinkedIn y CTI Vitae no consultados.** Por la cuota y porque LinkedIn no es accesible sin sesión; Renacyt/CTI Vitae es una aplicación dinámica sin contenido indexable. La Dirección debe adjuntar los códigos Renacyt vigentes de sus docentes.
3. **Tarapoto.** La página de la FCS y la del campus Tarapoto listan Nutrición Humana solo en Lima y Juliaca; la página de la carrera sí incluye dirección en Tarapoto. La Dirección debe aclarar si la carrera opera en Tarapoto antes de declarar capacidad en esa sede.
4. **Vigencia de convenios.** Ninguna fuente pública publica fecha de término; por eso el máximo en `cam` es 3. Con el registro institucional de convenios vigentes (nombre, resolución, fechas, carreras cubiertas) NUT-01 y NUT-04 pueden subir a 4.
5. **Renacyt.** La calificación de Jacksaint Saintila venció el 27-05-2024 y su vinculación actual con la UPeU no es verificable públicamente; no se le contó como Renacyt vigente.
6. **Equipamiento.** No hay evidencia pública de antropometría, composición corporal, bromatología o software; la Dirección debe adjuntar inventario por sede (Lima, Juliaca y, si aplica, Tarapoto).
7. **Sello del plan.** No se abrió el plan de estudios ni la malla; la mención de «líneas» proviene de la página comercial de la carrera, no del plan.
8. **PDF de tesis.** El lector de PDF del entorno carece de poppler; el asesor se verificó por metadatos de la API, no por lectura del documento.

---

## 6. Declaración de estado

Este es un **borrador**. Ningún nivel de `NUT-decl.json` debe considerarse declarado hasta que la Dirección de la EP de Nutrición Humana de la UPeU lo revise, corrija donde su registro interno difiera, reemplace cada «estimado · por confirmar por la Dirección» por un valor confirmado con su respaldo (resolución de convenio, inventario, CV docente) y **firme** la declaración. Génesys no inventó ningún valor; todo nivel sin evidencia pública se fijó en el mínimo prudente y quedó marcado.
