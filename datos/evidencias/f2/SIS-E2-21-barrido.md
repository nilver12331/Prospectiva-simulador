# Bitácora del barrido · SIS-E2 · Paso 2.1 · Momento 1

**Carrera:** Ingeniería de Sistemas (SIS) · **Especialidad E2:** Infraestructura en la nube, DevOps y redes · **Competencia:** C2 Diseño y operación de la infraestructura tecnológica
**Integradas / ámbitos:** Redes y telecomunicaciones (ámbito) · **Contexto:** Perú, horizonte de 5 años · **Fecha del barrido:** 25-sep-2026
**Insumo usado:** nombre, integradas y ámbitos, descripción F1 (proceso «Diseñar → automatizar → operar → observar → optimizar») y definición conceptual de C2. Las capacidades (`capacidades_SOLO_PARA_MOMENTO_4`) **no se leyeron ni se usaron**.

## 1. Propósito clave

Diseñar, automatizar y operar la plataforma tecnológica y las redes de comunicaciones de una organización, en entornos locales, híbridos y de nube, con criterios de disponibilidad, seguridad y costo, para que sus aplicaciones y comunicaciones funcionen de forma continua, escalable y eficiente.

(verbo: diseñar, automatizar y operar · objeto: plataforma tecnológica y redes de comunicaciones · condición: entornos locales, híbridos y de nube, con criterios de disponibilidad, seguridad y costo · finalidad: aplicaciones y comunicaciones continuas, escalables y eficientes)

## 2. Fuentes revisadas por tipo

Tipos cubiertos: **4 de 6** (O, N, M, P). A (actores) y D (Diseña tu Vida) no existen para este encargo.

### O · Ocupacional (6)
- [1] O*NET 15-1244.00 Network and Computer Systems Administrators — https://www.onetonline.org/link/summary/15-1244.00 (20 tareas; proyección 2024-2034: descenso de 1 % o más, 14 300 vacantes anuales).
- [2] O*NET 15-1241.00 Computer Network Architects — https://www.onetonline.org/link/summary/15-1241.00 (tareas de diseño, capacidad, disponibilidad, recuperación).
- [3] O*NET 15-1299.08 Computer Systems Engineers/Architects — https://www.onetonline.org/link/summary/15-1299.08 (28 tareas; arquitecturas distribuidas, escalabilidad, configuración de servidores).
- [4] ESCO Ingeniero de redes de TIC (CIUO 2523) — API oficial ESCO (URL en `refs`).
- [5] ESCO Administrador de sistemas de TIC (CIUO 2522) — API oficial ESCO.
- [6] ESCO Administrador de redes de TIC — API oficial ESCO.
- Nota: la página de O*NET no mostró puntajes de importancia por tarea; ESCO no tiene ocupaciones «cloud engineer» ni «DevOps engineer» (la búsqueda devuelve ocupaciones ajenas), por eso se usaron las tres ocupaciones TIC afines.

### N · Normativa, perfiles de puesto y estadística oficial (14)
- [10] RSGD N.° 001-2018-PCM/SEGDI, lineamientos de uso de servicios en la nube — https://busquedas.elperuano.pe/api/visor_html/1605580-1
- [11] D. S. N.° 098-2025-PCM, modifica el Reglamento de la Ley de Gobierno Digital (D. S. 029-2021-PCM): NUBE PERÚ como bloque básico; disponibilidad, escalabilidad, auditoría anual y continuidad — https://busquedas.elperuano.pe/dispositivo/NL/2423580-2
- [12] D. S. N.° 085-2023-PCM, Política Nacional de Transformación Digital al 2030 — https://busquedas.elperuano.pe/dispositivo/NL/2200457-5
- [13] D. S. N.° 126-2025-PCM, Reglamento del Marco de Confianza Digital (notificación de incidentes en 48 h; vigente desde 3-feb-2026), leído en EY Perú — https://www.ey.com/es_pe/technical/tax-alert/reglamento-ley-marco-confianza-digital-medidas-fortalecimiento
- [14] R. M. N.° 320-2021-PCM, lineamientos de continuidad operativa — https://elperuano.pe/NormasElperuano/2021/12/31/2026593-2/2026593-2.htm
- [15] Ley N.° 29904, banda ancha y Red Dorsal Nacional de Fibra Óptica — https://www.osiptel.gob.pe/media/vrxbedml/ley-29904.pdf
- [16] Guía de servicios digitales gob.pe: computación en la nube — https://guias.servicios.gob.pe/creacion-servicios-digitales/tecnologia/nube
- [17] SUNAT, Informe N.° 000027-2025-SUNAT/8B7100 (estandarización de la plataforma cloud Azure para el CPE; AKS, Container Registry, Azure Monitor, Backup, ExpressRoute, etc.) — https://www.sunat.gob.pe/cuentassunat/adquisiciones/estandarizacionBsSs/2025/Informe-DPG-000027-ri-000102-2025.pdf
- [18] SUNAT, CAS 2025 N.° 100-119: administrador de operaciones cloud (S/ 8 500), experto de infraestructura tecnológica – operaciones cloud (S/ 10 500), almacenamiento, servicios web — https://www.portaltrabajos.pe/2025/05/sunat-inspectores-tributarios-expertos-infraestructura.html
- [19] SUNAT, CAS N.° 285-2025 Especialista de infraestructura tecnológica (plataforma de red, cableado estructurado, enlaces, telefonía IP; S/ 5 500) — https://trabajando.pe/trabajo/sunat-lima-13-cas-no-285-2025-especialista-de-infraestructura-tecnologica/
- [20] INDECI, CAS N.° 0028-2025 Especialista en infraestructura móvil de comunicaciones (S/ 6 500) — https://portal.indeci.gob.pe/wp-content/uploads/2025/01/Proceso-CAS-0028-2025-ESPECIALISTA-INFRAESTUCTURA-MOVIL-DE-COMUNICACIONES.pdf
- [27] INEI, informe técnico TIC abril-junio 2025 (hogares con internet: 60,1 % nacional; 80,5 % Lima Metropolitana; 23,6 % rural) — https://www.inei.gob.pe/media/MenuRecursivo/boletines/informetecnico_tics_iit25.pdf
- [28] OSIPTEL, internet fijo al cierre de 2025 (4,38 millones de conexiones; 82 % fibra; regiones +15 %) — https://www.osiptel.gob.pe/portal-del-usuario/noticias/mas-del-82-de-conexiones-de-internet-fijo-usa-fibra-optica/
- [29] OSIPTEL, líneas móviles al cierre de 2025 (38,2 millones con tráfico) — https://www.osiptel.gob.pe/portal-del-usuario/noticias/osiptel-cu%C3%A1ntas-l%C3%ADneas-m%C3%B3viles-hay-en-per%C3%BA-al-cierre-de-2025/

### M · Mercado (8 fuentes + 61 avisos)
- [21] Computrabajo Perú: 19 búsquedas (ingeniero-devops, ingeniero-cloud, administrador-de-redes, ingeniero-de-redes, especialista-de-infraestructura, arquitecto-cloud, sre, ingeniero-de-telecomunicaciones, devops, cloud, aws, azure, kubernetes, ingeniero-de-infraestructura, administrador-de-servidores, analista-de-redes, noc, soporte-de-redes, analista-de-infraestructura). 232 avisos listados; 70 pertinentes; **61 leídos completos y codificados** (meta ≥ 30 cumplida).
- [22] WIN – Administrador de Infraestructura Cloud + On Premise · [23] Indra – DevOps Engineer · [24] IDELCOM – Ingeniero de Redes y Comunicaciones · [25] U. Peruana Cayetano Heredia – Especialista de Plataformas Cloud · [26] Grupo JBA – Coordinador de NOC (enlaces en `refs`).
- [30] Gestión (22-jul-2025): AWS consolida su operación en Perú; 49 % de participación en IaaS; madurez digital (EY 2024: 9 % avanzada, 73 % en transformación).
- [31] Gestión (5-dic-2024): estudio ISIL–U. Siglo 21; demanda de perfiles tecnológicos +15 % anual; 60 % de empresas con dificultad para cubrir vacantes.

### P · Estándares profesionales y estudios sectoriales (12)
- [7] SFIA 9 – habilidades de computación en la nube (ITOP, SYSP, NTAS, NTDS, RELM, DEPL, SINT, COPL, CPMG, prototipos FinOps) · [8] SFIA 9 ITOP · [9] SFIA 9 NTDS.
- [34] FinOps Framework · [38] Google SRE Book, cap. 4 (SLI, SLO, SLA, presupuesto de error) · [39] AWS Well-Architected (seis pilares) · [40] Microsoft Cloud Adoption Framework (Strategy, Plan, Ready, Adopt, Govern, Secure, Manage).
- [32] Flexera 2025 State of the Cloud (84 % con dificultades de gasto; presupuestos excedidos 17 %; gasto +28 %; 60 % usa proveedores gestionados) · [33] State of FinOps 2025 (861 respuestas; 63 % gestiona gasto de IA) · [35] DORA 2025 (≈5 000 respuestas; 90 % usa IA; 90 % con plataforma interna) · [36] CNCF 2025 (82 % Kubernetes en producción; 66 % inferencia de IA generativa en Kubernetes) · [37] Uptime Institute 2025 (23 % de caídas graves por TI y red; ≈40 % sufrió caídas por error humano; +10 p. p. por no seguir procedimientos).

## 3. Lo que no se pudo leer

- Nota de prensa del INEI en gob.pe (HTTP 418): se reemplazó por el informe técnico PDF del INEI [27].
- D. S. 126-2025-PCM en gob.pe (418) y en LP Derecho (403): se leyó el resumen de EY Perú [13]; conviene que el panel confirme en El Peruano.
- Página de la Red Dorsal del MTC (404): se usó el texto de la Ley 29904 en OSIPTEL [15].
- Aviso CAS SUNAT N.° 108 en Bumeran (contenido vacío) y bases completas del CAS SUNAT N.° 102/168 (solo resumen): no se usaron sus funciones detalladas.
- Informe completo DORA 2025 (la página dora.dev no muestra cifras): se usó el anuncio oficial de Google Cloud [35].
- Anuncio de una región AWS en Lima: solo en agregadores no oficiales; **no se usó**. Tampoco se usaron cifras de brecha de talento de blogs no verificados (p. ej. «déficit de 17 000 TIC»).
- 7 avisos de Computrabajo sin descripción accesible (listados al final) y 2 descartados por no pertenecer al campo (#38 infraestructura civil, #57 monitoreo HACCP). LinkedIn e Indeed no se consultaron (requieren sesión).

## 4. Frecuencia por función (61 avisos leídos)

Codificación por palabras clave sobre el texto completo, revisada a mano (en E2-12 se descartaron coincidencias de «capacidad de análisis» o «costos» salariales).

| Código | Función | Avisos | % |
|---|---|---|---|
| E2-01 | Arquitectura de la plataforma en la nube | 24 (9 con diseño explícito) | 39 % |
| E2-02 | Migración de servicios a la nube | 7 | 11 % |
| E2-03 | Diseño e implementación de redes corporativas | 28 (11 con diseño o cálculo de red) | 46 % |
| E2-04 | Implementación de servicios de telecomunicaciones | 25 | 41 % |
| E2-05 | Aprovisionamiento automatizado de la infraestructura | 17 (4 con infraestructura como código explícita) | 28 % |
| E2-06 | Integración y despliegue continuo de aplicaciones | 7 | 11 % |
| E2-07 | Administración de servidores y plataformas virtualizadas | 32 | 52 % |
| E2-08 | Operación y soporte de servicios de infraestructura | 48 | 79 % |
| E2-09 | Respaldo y recuperación ante desastres | 25 | 41 % |
| E2-10 | Observabilidad y confiabilidad del servicio | 51 | 84 % |
| E2-11 | Protección perimetral de redes y plataformas | 19 | 31 % |
| E2-12 | Optimización de costos y capacidad | 10 | 16 % |

Lectura: el mercado peruano visible en bolsas abiertas es sobre todo de **operación** (NOC, soporte N2, administración, monitoreo) y de redes/telecom en proveedores de fibra; DevOps, IaC y FinOps aparecen en pocos avisos pero en empleadores grandes (Indra, WIN, UPCH, SUNAT) y con remuneraciones altas.

## 5. Mapa funcional

**Propósito clave:** Diseñar, automatizar y operar la plataforma tecnológica y las redes de comunicaciones de una organización, en entornos locales, híbridos y de nube, con criterios de disponibilidad, seguridad y costo, para que sus aplicaciones y comunicaciones funcionen de forma continua, escalable y eficiente.

- **FC1 · Diseñar la plataforma tecnológica, sus redes y comunicaciones**
  - E2-01 Arquitectura de la plataforma en la nube (O,N,M,P)
  - E2-02 Migración de servicios a la nube (O,N,M,P)
  - E2-03 Diseño e implementación de redes corporativas (O,N,M,P)
  - E2-04 Implementación de servicios de telecomunicaciones (O,N,M) ← ámbito integrado «Redes y telecomunicaciones»
- **FC2 · Automatizar el aprovisionamiento y el despliegue**
  - E2-05 Aprovisionamiento automatizado de la infraestructura (O,M,P)
  - E2-06 Integración y despliegue continuo de aplicaciones (M,P)
- **FC3 · Operar la plataforma y asegurar su continuidad**
  - E2-07 Administración de servidores y plataformas virtualizadas (O,N,M,P)
  - E2-08 Operación y soporte de servicios de infraestructura (O,M,P)
  - E2-09 Respaldo y recuperación ante desastres (O,N,M,P)
- **FC4 · Observar y proteger la disponibilidad del servicio**
  - E2-10 Observabilidad y confiabilidad del servicio (O,N,M,P)
  - E2-11 Protección perimetral de redes y plataformas (O,N,M)
- **FC5 · Optimizar el rendimiento y el costo de la plataforma**
  - E2-12 Optimización de costos y capacidad (O,M,P)

Corte: cada función básica la ejecuta completa un egresado de pregrado con supervisión indirecta (EPA 3) o sin supervisión (EPA 4 en E2-07 y E2-08). Ninguna función tiene evidencia de un solo tipo (`unica: false` en todas).

## 6. Dudas para el panel

1. E2-06 (despliegue continuo) tiene baja frecuencia en avisos (7/61) y se sostiene sobre todo en estándares y estudios; ¿mantenerla en E2 o compartirla con C1 (C1.5 Desplegar)?
2. E2-11 (protección perimetral) se solapa con C4 (seguridad); se acotó al perímetro de red y nube. ¿Límite adecuado?
3. E2-04 (telecomunicaciones): varios avisos piden Ingeniería de Telecomunicaciones o Electrónica; ¿qué alcance es exigible a un ingeniero de sistemas (se excluyó radiofrecuencia y red troncal)?
4. E2-12 (FinOps) se propone con EPA 3; ¿el panel la baja a 2 dado el bajo peso en el mercado local?
5. D. S. 126-2025-PCM se verificó vía EY; confirmar en El Peruano.

## 7. Avisos revisados (61 leídos completos)

Funciones: número de función E2 con evidencia en el texto del aviso.

| # | Aviso | Empleador | Fecha | Funciones con evidencia |
|---|---|---|---|---|
| 1 | [Administrador de redes](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-administrador-de-redes-ate-en-ate-0F7D63C0FE655B8761373E686DCF3405) | Platanitos Boutique | 2026-08-28 | 01, 03, 07, 08, 09, 10, 11 |
| 2 | [Administrador de Infraestructuras TI](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-administrador-de-infraestructuras-ti-azure-vmware-y-redes-en-santiago-de-surco-C63EECDF707ED4A561373E686DCF3405) | Grupo Pana S.A. | 2026-09-10 | 01, 02, 03, 07, 08, 09, 10, 11 |
| 3 | [Administrador de Redes y Comunicaciones Senior](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-administrador-de-redes-y-comunicaciones-senior-almacen-en-callao-en-callao-FFFD956559A83DE861373E686DCF3405) | SALOG | 2026-09-14 | 03, 04, 07, 08, 09, 10 |
| 4 | [Administrador de Redes y Comunicaciones Junior](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-administrador-de-redes-y-comunicaciones-junior-en-callao-38F04149928A901361373E686DCF3405) | SALOG | 2026-09-14 | 01, 04, 07, 09, 10 |
| 5 | [Administrador de Redes y Servidores](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-administrador-de-redes-y-servidores-mirafloresplanilla-completatarjeta-de-alimentacion-en-miraflores-D5C46F462DA8F62E61373E686DCF3405) | Adecco Perú S.A. | 2026-08-12 | 01, 03, 04, 07, 08, 10, 11, 12 |
| 6 | [Administrador de servidores de redes](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-administrador-de-servidores-de-redes-en-lima-DC6FDB6EEC02B73E61373E686DCF3405) | WIN | 2026-08-19 | 01, 02, 04, 05, 07, 08, 10, 11 |
| 8 | [DevOps Engineer](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-devops-engineer-cemibk-en-san-isidro-E60AFCD5EB766F5361373E686DCF3405) | INDRA | 2026-09-08 | 01, 05, 06, 09, 11 |
| 9 | [Analista DevOps](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-analista-devops-semi-senior-ci-cd-y-cloud-en-san-isidro-FE84A9B0EE21EAD861373E686DCF3405) | UNIDAD EJECUTORA N° 011: PROGRAMA DE ALIMENTACIÓN ESCOLAR (PAE) | 2026-08-21 | 01, 05, 06, 07, 08, 10 |
| 10 | [Platform Engineer Backstage](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-platform-engineer-backstage-cemibk-en-san-isidro-9CC7E0BA723D40CA61373E686DCF3405) | INDRA | 2026-09-08 | 01, 05, 06 |
| 11 | [Especialista de Infraestructura TI](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-especialista-de-infraestructura-ti-junior-en-trujillo-54C0AE20BBD2E48761373E686DCF3405) | Grupo Palermo SRL | 2026-09-24 | 01, 03, 07 |
| 12 | [Especialista de infraestructura](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-especialista-de-infraestructura-en-san-isidro-38C7E28C70C2AE7461373E686DCF3405) | INDRA | 2026-09-07 | 01, 02, 05, 07, 08, 09, 10, 11 |
| 13 | [Ingeniero de red de accesos](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-ingeniero-de-red-de-accesos-en-lima-10E32BCAF56543C461373E686DCF3405) | WIN | 2026-09-17 | 04, 08, 10, 12 |
| 14 | [Coordinador de NOC Ingeniero de Redes](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-coordinador-de-noc-ingeniero-de-redes-carabayllo-comas-en-carabayllo-7B94A098D742A7CB61373E686DCF3405) | GRUPO JBA | 2026-09-17 | 02, 03, 04, 05, 07, 08, 09, 10, 11, 12 |
| 16 | [Ingeniero de Redes y Comunicaciones](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-ingeniero-de-redes-y-comunicaciones-colegiado-en-lima-CC634950315159DB61373E686DCF3405) | IDELCOM | 2026-09-22 | 03, 04, 09, 10, 11, 12 |
| 17 | [Ingeniero Supervisor de Infraestructura y Redes](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-ingeniero-supervisor-de-infraestructura-y-redes-en-santiago-de-surco-02284A95C4CFD7D361373E686DCF3405) | Check Point Advertainment  | 2026-08-22 | 03, 04, 08, 10, 11 |
| 18 | [Egresado Ing. Telecomunicaciones o Eletrónica p. Optimización de redes telefónicas](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-egresado-ing-telecomunicaciones-o-eletronica-p-optimizacion-de-redes-telefonicas-en-lima-95877C38B9D22DF161373E686DCF3405) | Bitel | 2026-09-18 | 04, 08, 10 |
| 19 | [Ingeniero junior de soporte de red](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-ingeniero-de-soporte-redes-ftth-networking-puente-piedra-en-puente-piedra-EB93719F82FB4B5B61373E686DCF3405) | Novo | 2026-09-17 | 03, 04, 08, 10 |
| 20 | [ingeniero telecomunicaciones y redes](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-ingeniero-telecomunicaciones-y-redes-en-pisco-67B703F46661AF9C61373E686DCF3405) | NEXION | 2026-09-04 | 03, 04, 10, 11 |
| 21 | [Egresado de telecomunicaciones (NOC – BSS)](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-egresado-de-telecomunicaciones-noc-bss-en-lima-D6BB83AFBC82E55D61373E686DCF3405) | Bitel | 2026-09-08 | 04, 08, 10 |
| 23 | [Ingeniero de Telecomunicaciones/ Electrónica](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-ingeniero-de-telecomunicaciones-electronica-en-arequipa-AC00D733309A95E461373E686DCF3405) | Protab S.A.C. | 2026-08-13 | 03, 04, 05, 08, 09, 10, 11 |
| 24 | [Ingeniero Electronico o Telecomunicaciones](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-ingeniero-electronico-o-telecomunicaciones-en-miraflores-C919B449AA142A1861373E686DCF3405) | MIDEX PERU S.A.C. | 2026-08-04 | 10 |
| 25 | [Ingeniero de Telecomunicaciones, Especialista RF](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-ingeniero-de-telecomunicaciones-especialista-rf-medicion-de-equipo-amplificador-de-senal-celular-en-brena-8DE3ADE27110681561373E686DCF3405) | MICHAEL'S S A | 2026-08-14 | 04 |
| 26 | [Operador de Centro de Operaciones de Sistema (COS)](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-operador-de-centro-de-operaciones-de-sistema-cos-en-miraflores-1FE882A33C5F25E861373E686DCF3405) | Alignet SAC | 2026-08-24 | 01, 05, 07, 08, 10 |
| 27 | [Practicante del COS (Centro de Operaciones de Sistema)](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-practicante-del-cos-centro-de-operaciones-de-sistema-en-miraflores-ED4BE36DAF56CA8E61373E686DCF3405) | Alignet SAC | 2026-08-19 | 01, 07, 10 |
| 28 | [Administrador de servidores, seguridad informática](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-administrador-de-servidores-seguridad-informatica-en-lima-77043F28628A6B7D61373E686DCF3405) | Instituto de Ciencias y Humanidades | 2026-08-01 | 01, 05, 06, 07, 08, 09, 10, 11 |
| 29 | [Analista de Infraestructura TI](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-analista-de-infraestructura-ti-pisco-en-pisco-DEE3462473F12FA261373E686DCF3405) | Grupo Vanguard Internacional | 2026-09-21 | 03, 04, 06, 07, 08, 09, 10, 11 |
| 30 | [Administrador de Infraestructura TI](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-administrador-de-infraestructura-ti-en-san-isidro-383F272306855B0B61373E686DCF3405) | Newport Capital SAC  | 2026-08-21 | 07, 08, 09, 10 |
| 31 | [Jefe de Operaciones TI](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-jefe-de-operaciones-ti-en-san-borja-D7F5077BBD73FCF861373E686DCF3405) | Grupo Tawa | 2026-09-17 | 01, 05, 07, 08, 10, 12 |
| 32 | [Jefe de Operaciones TI y Ciberseguridad](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-jefe-de-operaciones-ti-y-ciberseguridad-en-ica-E103231B44362ADB61373E686DCF3405) | Grupo Vanguard Internacional | 2026-09-08 | 01, 05, 07, 08, 09, 10, 11, 12 |
| 33 | [Coordinador de sistemas](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-coordinador-de-sistemas-los-olivos-en-los-olivos-5AD1D4BF6088CB7861373E686DCF3405) | Compañia Electro Andina | 2026-08-21 | 04, 07, 08, 09, 10 |
| 34 | [Encargado de Sistemas](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-encargado-de-sistemas-concesionaria-de-alimentos-en-arequipa-B858602D64B9DC6661373E686DCF3405) | EPICA CONCESIONARIA DE ALIMENTOS Y SERVICIOS E.I.R.L. | 2026-08-07 | 03, 07, 08, 09, 10 |
| 36 | [Responsable de IT y Sistemas / Telecomunicaciones – Call Center](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-responsable-de-it-y-sistemas-telecomunicaciones-call-center-en-lima-BFCEEFC6D009BC5061373E686DCF3405) | AMPLIFFICA PERÚ S.A.C | 2026-09-22 | 03, 04, 07, 08, 11 |
| 37 | [Analista de infraestructura TI](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-analista-de-infraestructura-ti-en-lima-87CEE9A0A6525B6061373E686DCF3405) | Clínica aviva | 2026-09-01 | 03, 07, 08, 09, 10, 11 |
| 39 | [Analista de Infraestructura TI / Sanna Clínica el Golf](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-analista-de-infraestructura-ti-sanna-clinica-el-golf-en-san-isidro-39FC506954557D1061373E686DCF3405) | SANNA | 2026-09-23 | 03, 07, 08, 09, 10 |
| 41 | [Analista de Infraestructura TI y redes](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-analista-de-infraestructura-ti-y-redes-surco-en-santiago-de-surco-AE8391896749D45661373E686DCF3405) | GESTION DE PROCESOS ADMINISTRATIVOS S.A.C. | 2026-09-21 | 01, 02, 07, 08, 09, 10, 11, 12 |
| 42 | [Analista de Infraestructura](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-analista-de-infraestructura-en-arequipa-EAA1F1621152CBD361373E686DCF3405) | TEAM WORK Consultores Perú SAC | 2026-08-26 | 01, 03, 07, 08 |
| 44 | [Técnico de Soporte](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-tecnico-de-soporte-lima-norte-en-los-olivos-11679C20D92840FF61373E686DCF3405) | Universidad César Vallejo | 2026-09-01 | 09, 10 |
| 45 | [Analista de Implementación de Red 4G/5G / Telecomunicaciones / Temporal](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-analista-de-implementacion-de-red-4g5g-telecomunicaciones-temporal-en-lima-57EF42AC04C5915A61373E686DCF3405) | Overall Strategy | 2026-09-18 | 04, 08 |
| 46 | [Analista de TI redes y comunicaciones](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-analista-de-ti-redes-y-comunicaciones-informatica-telecomunicaciones-en-san-isidro-ADFA74362E753EF861373E686DCF3405) | ACS SOLUTIONS PERU S.A. | 2026-09-02 | 05 |
| 47 | [Analista de Soporte TI y Redes  Presencial en Magdalena del Mar](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-analista-de-soporte-ti-y-redes-presencial-en-magdalena-del-mar-en-magdalena-del-mar-8819BB12DF56D84361373E686DCF3405) |  JDD TECH CONSULTING | 2026-09-04 | 01, 08, 10 |
| 48 | [Analista de Sistemas, Redes y Ciberseguridad](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-analista-de-sistemas-redes-y-ciberseguridad-soporte-ti-desarrollo-y-ciberseguridad-en-ate-E7FF81D7648E375261373E686DCF3405) | Bitiar Cyber Technology | 2026-08-04 | 03, 05, 07, 08, 10, 11 |
| 49 | [Soporte técnico de TI](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-soporte-tecnico-de-ti-en-miraflores-87D02EF04E5F078B61373E686DCF3405) | RECUPERA BUSINESS PARTNER SAC | 2026-09-25 | 07, 08, 10 |
| 50 | [Analista de Sistemas](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-analista-de-sistemas-arequipa-en-arequipa-9DC51A7FEBA3ACA161373E686DCF3405) | CONSORCIO INDUSTRIAL DE AREQUIPA SA | 2026-09-09 | 01, 03, 05, 07 |
| 51 | [Líder de Operaciones TI](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-lider-de-operaciones-ti-magdalena-del-mar-en-jesus-maria-46D9F7408E4B017561373E686DCF3405) | Universidad César Vallejo | 2026-09-24 | 01, 06, 07, 08, 09, 10, 12 |
| 53 | [Soporte Técnico TI nivel 1 / Help desk  / soluciones de ciberseguridad y cloud](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-soporte-tecnico-ti-nivel-1-help-desk--soluciones-de-ciberseguridad-y-cloud-en-lima-E8DD3A22E6AB719D61373E686DCF3405) | abanza | 2026-09-05 | 01, 08, 10 |
| 54 | [Administrador de Infraestructura Cloud + On Premise](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-administrador-de-infraestructura-cloud-on-premise-en-lima-B6AC834B8E90B46D61373E686DCF3405) | WIN | 2026-09-14 | 01, 02, 04, 05, 06, 07, 08, 09, 10, 11, 12 |
| 55 | [Especialista de Plataformas Cloud](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-especialista-de-plataformas-cloud-san-martin-de-porres-en-san-martin-de-porres-A828FAE5A35011B061373E686DCF3405) | Universidad Peruana Cayetano Heredia | 2026-09-14 | 01, 02, 05, 08, 09, 10, 12 |
| 56 | [Profesional Cloud](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-profesional-cloud-lima-en-lima-6962E747BDDC970C61373E686DCF3405) | XOREX PERU | 2026-08-12 | 01, 03, 04, 08, 09, 10 |
| 58 | [Operador NOC / SOC](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-operador-noc-soc-en-miraflores-CB0260113A1FFCC161373E686DCF3405) | Atlantic City  | 2026-08-24 | 05, 07, 08, 09, 10 |
| 59 | [Analista de Soporte NOC 1](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-analista-de-soporte-noc-1-carabayllo-comas-en-carabayllo-E574F208E0596DF561373E686DCF3405) | GRUPO JBA | 2026-09-22 | 03, 04, 07, 08, 10 |
| 60 | [Operador NOC Junior S/. 1,300](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-operador-noc-junior-s-1300-miraflores-labores-presenciales-en-miraflores-4203C77ACE20928561373E686DCF3405) | FIBERLINE PERU SOCIEDAD ANONIMA CERRADA - FIBERLINE PERU S.A.C. | 2026-09-23 | 04, 08, 10 |
| 61 | [Operador NOC / Horarios Rotativos / Oficina / Egresado Con o Sin exp.](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-operador-noc-horarios-rotativos-oficina-egresado-con-o-sin-exp-san-martin-de-porres-lima-en-lima-7EC5F634350AF44B61373E686DCF3405) | Desysweb S.A.C. | 2026-09-23 | 08, 09, 10 |
| 62 | [Practicante Profesional NOC](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-practicante-profesional-noc-en-lima-DC5DAAA0F150055661373E686DCF3405) | EYTU SAC | 2026-09-22 | 08, 10 |
| 63 | [Operador NOC y Soporte de Redes](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-operador-noc-y-soporte-de-redes-en-santa-anita-9CB83D7EE88B41B961373E686DCF3405) | P & P BUSINESS GROUP S.A.C. | 2026-08-03 | 03, 04, 08, 10 |
| 64 | [Operador NOC](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-operador-noc-en-ilo-B563E966677D79FB61373E686DCF3405) | Global Talent & Solutions S.A.C. | 2026-08-17 | 03, 04, 08, 10 |
| 65 | [Técnico Noc1](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-tecnico-noc1-con-experiencia-en-rubro-de-telecomunicaciones-en-surco-4CB88ED4CAC078D661373E686DCF3405) | FRAVATEL | 2026-09-18 | 03, 04, 08, 10 |
| 66 | [Técnico en Redes/Telecomunicaciones (NOC)](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-tecnico-en-redestelecomunicaciones-noc-en-lima-EFB9B2E0A16CC2CE61373E686DCF3405) | Bitel | 2026-09-09 | 03, 08, 10 |
| 67 | [Analista de Noc](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-analista-de-noc-corporacion-inpecable-en-san-sebastian-CC64A03B6FAB758561373E686DCF3405) | INPECABLE S.R.L. | 2026-08-21 | 03, 08 |
| 68 | [Técnico de Soporte TI](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-tecnico-de-soporte-ti-y-redes-en-san-martin-de-porres-8895DDB0026F0AE561373E686DCF3405) |  ALESSTEC IT S.A.C. | 2026-08-20 | 03, 07, 10 |
| 69 | [Técnico de Soporte TI](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-tecnico-de-soporte-ti-contrato-temporal-en-surquillo-A1AD4AD1F8D1897861373E686DCF3405) | 386 SMART SAC | 2026-09-25 | 03, 08, 10 |
| 70 | [Técnico de Soporte N2](https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-tecnico-de-soporte-n2-en-san-isidro-931C350AA558E61861373E686DCF3405) | SONDA  | 2026-09-25 | 08, 10 |


### Avisos pertinentes sin descripción accesible (7, no codificados)

- Arquitecto de Soluciones Cloud — https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-arquitecto-de-soluciones-cloud-en-santiago-de-surco-D453F9FE08490E7A61373E686DCF3405
- Ingeniero en Redes y Telecomunicaciones / Proyecto Oriente — https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-ingeniero-en-redes-y-telecomunicaciones-proyecto-oriente-zona-oriente-del-pais-en-lima-ADD1F1FA490FE99361373E686DCF3405
- Ingeniero de Diseño de Infraestructuras de Telecomunicaciones — (enlace no recuperable del listado)
- Administrador de Sistemas / Infraestructura TI — https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-administrador-de-sistemas-infraestructura-ti-en-santiago-de-surco-D48BC5259AFB142961373E686DCF3405
- Analista de Infraestructura de T.I — https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-analista-de-infraestructura-de-ti-chiclayo-en-chiclayo-7D7F67E7C52D80BA61373E686DCF3405
- Analista de Redes e Infraestructura — https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-analista-de-redes-e-infraestructura-en-santiago-de-surco-1CF79E23C3C014D861373E686DCF3405
- Operations Engineer/ Support Platform Analyst — https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-operations-engineer-support-platform-analyst-pago-directo-en-san-isidro-DC50E57FC8C1FA4161373E686DCF3405

Descartados: #38 Analista de infraestructura (Caja Los Andes, infraestructura civil) y #57 Analista de Monitoreo y Soporte Cloud (MICSAC, monitoreo HACCP).
