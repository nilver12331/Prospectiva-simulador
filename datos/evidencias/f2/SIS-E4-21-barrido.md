# Bitácora del barrido · SIS-E4 · Paso 2.1, momento 1

- **Carrera:** Ingeniería de Sistemas (SIS) · **Especialidad E4:** Ciberseguridad y protección de datos · **Competencia:** C4
- **Integra:** Protección de datos personales y privacidad (como ámbito)
- **Fecha del barrido:** 25/09/2026 · **Contexto:** Perú, horizonte de 5 años
- **Insumo usado:** nombre, especialidad integrada y ámbito, descripción F1 (proceso evaluar → proteger → detectar → responder → recuperar) y definición conceptual de C4. **No se usaron las capacidades** (`capacidades_SOLO_PARA_MOMENTO_4`).

## 1. Propósito clave

Gestionar la seguridad de la información y la protección de datos personales de organizaciones públicas y privadas (verbo + objeto), evaluando riesgos, implantando controles y detectando, respondiendo y recuperándose de incidentes conforme a la normativa peruana y a marcos internacionales (condición), para proteger sus activos de información, sostener su operación y cumplir ante reguladores y titulares de datos (finalidad).

## 2. Fuentes revisadas por tipo

Tipos cubiertos: **O, N, M, P** (4 de 6). A (actores) y D (Diseña tu Vida) no hay.

### O · Ocupacional (5)
| Ref. | Fuente | Qué se extrajo |
|---|---|---|
| [1] | O*NET 15-1212.00 Information Security Analysts — https://www.onetonline.org/link/summary/15-1212.00 | 11 tareas (planes de salvaguarda y emergencia, evaluación de riesgos, cifrado y cortafuegos, monitoreo, documentación de políticas, capacitación de usuarios); 182 800 empleos (2024), crecimiento «much faster than average» 2024-2034 |
| [2] | O*NET 15-1299.05 Information Security Engineers — https://www.onetonline.org/link/summary/15-1299.05 | pruebas de penetración, monitoreo, respuesta, forense de brechas, capacitación |
| [3] | O*NET 15-1299.06 Digital Forensics Analysts — https://www.onetonline.org/link/summary/15-1299.06 | duplicar y preservar evidencia, análisis forense de sistemas, informes para procesos legales |
| [4] | ESCO v1.2 ICT security administrator (2529.6) — https://esco.ec.europa.eu/sites/default/files/ICT%20security%20administrator.pdf | habilidades esenciales: identificar debilidades, mantener la gestión de identidades, seguridad de BD, cumplimiento; conocimientos: hacking ético, resiliencia, respaldo |
| [5] | ENISA, Crosswalk ESCO–ECSF (2024) — https://www.enisa.europa.eu/sites/default/files/2024-12/esco-ecsf-crosswalk.pdf | 12 perfiles ECSF y su ocupación ESCO: CISO, cyber incident responder, data protection officer, threat intelligence, auditor, risk manager, digital forensics, penetration tester (ethical hacker) |

CIUO-08: no se consultó una fuente propia; ESCO ubica la ocupación en el grupo 2529 (profesionales de bases de datos y redes n.c.o.p.).

### N · Normativa y convocatorias (14)
| Ref. | Norma / documento | Artículos leídos |
|---|---|---|
| [12] | Res. SBS 504-2021, Reglamento de Gestión de la Seguridad de la Información y Ciberseguridad — https://intranet2.sbs.gob.pe/dv_int_cn/2046/v2.0/Adjuntos/504-2021.R.pdf | art. 8 (función de seguridad y equipo de incidentes), 10-12 (SGSI-C y medidas mínimas: accesos, líneas base, respaldo, redes, desarrollo seguro, gestión de incidentes, servicio de operaciones de seguridad, inteligencia de amenazas, evidencia forense), 14 (programa de ciberseguridad identificar-proteger-detectar-responder-recuperar), 15 (reporte de incidentes significativos y análisis forense), 17-19 (autenticación reforzada), 21 (API: análisis de vulnerabilidades y pruebas de penetración), 26 |
| [13] | Res. SBS 877-2020, Reglamento de Gestión de la Continuidad del Negocio — https://intranet2.sbs.gob.pe/dv_int_cn/1894/v1.0/Adjuntos/877-2020.R.pdf | art. 2 (TOR, POR, PMTI), 7 (análisis de impacto), 10 (pruebas anuales de recuperación de servicios de TI) |
| [14] | DU 007-2020, Marco de Confianza Digital — https://cdn.www.gob.pe/uploads/document/file/2790485/Decreto%20de%20Urgencia%20N%C2%BA%20007-2020.pdf?v=1643322610 | art. 7 (CNSD), 8 (Registro Nacional de Incidentes), 9 (obligaciones de proveedores de servicios digitales; 9.3 SGSI y CSIRT obligatorios en entidades públicas) |
| [15] | DS 126-2025-PCM, Reglamento del DU 007-2020 (texto en LP Derecho, publicado en El Peruano el 03/11/2025) — https://lpderecho.pe/reglamento-marco-confianza-digital-decreto-supremo-126-2025-pcm/ | art. 11 y 15 (Oficial de Seguridad y Confianza Digital), 17 (niveles de confianza en la autenticación), 18-19 (obligaciones y supervisión), 31-32 (notificación al CNSD; críticos en 48 h) |
| [16] | Ley 30999, Ley de Ciberdefensa — https://cdn.www.gob.pe/uploads/document/file/1671813/Ley%20N%C2%B030999,%20Ley%20de%20Ciberdefensa.pdf | art. 1-4 (objeto militar; finalidad: activos críticos nacionales). Relevancia indirecta para el egresado civil |
| [17] | DS 016-2024-JUS, Reglamento de la Ley 29733 — https://img.lpderecho.pe/wp-content/uploads/2024/11/Decreto-Supremo-016-2024-JUS-LPDerecho.pdf | art. 34 (notificación de incidentes en 48 h), 37-39 (Oficial de Datos Personales), 40 (evaluación de impacto, NTP-ISO/IEC 27005), 46 (seguridad en medios digitales), 47 (documento de seguridad) |
| [18] | MINJUSDH, nota del nuevo reglamento (30/11/2024) — https://www.gob.pe/institucion/minjus/noticias/1067368-ejecutivo-aprueba-nuevo-reglamento-de-la-ley-de-proteccion-de-datos-personales | evaluación de impacto, reporte en 48 h, designación progresiva del ODP |
| [19] | MINJUSDH, ANPD multas 2024 (10/01/2025) — https://www.gob.pe/institucion/minjus/noticias/1088896-... | 454 entidades fiscalizadas, 133 PAS, multas S/ 13 424 590, 2 701 bancos inscritos |
| [20] | MINJUSDH, directiva del ODP y metodología de multas (31/12/2025) — https://www.gob.pe/institucion/minjus/noticias/1324603-... | RD 100-JUS-DGTAIPD, criterios de designación obligatoria del ODP |
| [21] | PCM-CNSD, Guía para conformar CSIRT (enero 2024) — https://cdn.www.gob.pe/uploads/document/file/5696308/... | propósito, definiciones, metodología PHVA para CSIRT de entidades públicas |
| [22] | INDECI, CAS 0090-2025 Especialista de Seguridad Informática y Confianza Digital — https://portal.indeci.gob.pe/wp-content/uploads/2025/03/Proceso-CAS-0090-2025-... | funciones: proyectos de SI, normas/directivas, coordinación con el equipo de respuesta, auditorías internas al SGSI; S/ 6 500 |
| [23] | MINSA, CAS 050-2025 Oficial de Seguridad y Confianza Digital — https://ciplima.org.pe/wp-content/uploads/2025/06/OFICIAL-DE-SEGURIDAD-MINSA.pdf | perfil (ISO 27001, 27005, 31000, continuidad, Ley de datos personales); funciones de gestión y normativas |
| [24] | OSIPTEL, CAS 010-2025 Oficial de SI y Protección de Datos Personales — https://www.osiptel.gob.pe/convocatorias-laborales/cas-010-2025-... | solo título y existencia del puesto; **bases PDF no leídas** |
| — | Página gob.pe del DU 007-2020 y visor de El Peruano | El visor de El Peruano no entregó texto; se leyó el PDF oficial de gob.pe |

### M · Mercado (3 portales, 67 avisos leídos)
- [25] LinkedIn Empleos Perú «ciberseguridad» — 342 vacantes — https://pe.linkedin.com/jobs/ciberseguridad-empleos
- [26] LinkedIn Empleos Perú «seguridad de la información» — 737 vacantes — https://pe.linkedin.com/jobs/seguridad-de-la-informaci%C3%B3n-empleos
- [27] LinkedIn Empleos Perú «protección de datos personales» — 316 vacantes (60 títulos revisados; muchos son de cumplimiento legal o de riesgo no financiero) — https://pe.linkedin.com/jobs/protecci%C3%B3n-de-datos-personales-empleos
- **Avisos revisados: 67** (texto completo de cada aviso individual; meta ≥ 30 cumplida). Tabla al final.
- **No se pudo leer:** Computrabajo (https://pe.computrabajo.com/trabajo-de-ciberseguridad) y Bumeran (https://www.bumeran.com.pe/empleos-busqueda-ciberseguridad.html) devolvieron páginas sin avisos al lector automático.

### P · Estándares profesionales (6)
| Ref. | Fuente |
|---|---|
| [6] | NIST, NICE Framework Components v2.2.0 (28/04/2025) — https://www.nist.gov/itl/applied-cybersecurity/nice/nice-framework-resource-center/nice-framework-current-versions |
| [7] | CISA-NICCS, roles NICE: Defensive Cybersecurity, Digital Forensics, Incident Response, Threat Analysis, Vulnerability Analysis, Privacy Compliance, Security Control Assessment, Secure Software Development, Software Security Assessment, Cybersecurity Policy and Planning — https://niccs.cisa.gov/tools/nice-framework |
| [8] | SFIA 9, vista Information and cyber security: SCTY, BURM, AUDT, PEDP, INAS, THIN, VURE, PENT, SCAD, IAMT, COPL, USUP, VUAS, DGFS — https://sfia-online.org/en/sfia-9/sfia-views/sfia-9-multi-view/sfia-cyber-en-summary-chart-with-roles |
| [9] | SFIA 9, Penetration testing (PENT), niveles 2-6 — https://sfia-online.org/en/sfia-9/skills/penetration-testing |
| [10] | ISO/IEC 27001:2022, ficha en IEC Webstore (25/10/2022) — https://webstore.iec.ch/en/publication/79694 (iso.org y el blog de ANSI devolvieron 403) |
| [11] | NIST CSF 2.0, CSWP 29 (26/02/2024) — https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20 |

### Necesidad social y tendencias (estudios y prensa)
| Ref. | Dato |
|---|---|
| [28] | Infobae (FortiGuard Labs): 748,2 millones de intentos de ciberataque en el Perú en el 1.er semestre de 2025; ~36 000 escaneos por segundo; paso a operaciones focalizadas con IA |
| [29] | El Peruano (Kaspersky, 03/08/2026): más de 110 millones de intentos de phishing en 12 meses (+22 %); el sector público concentra el 19 % de los incidentes de alta severidad |
| [30] | ISC2 2024: brecha mundial de 4,76 millones; 90 % reporta brechas de habilidades; seguridad en la nube y evaluación de riesgos entre las más buscadas; 45 % de los equipos adoptó IA generativa |
| [31] | IBM 2025: costo medio de brecha USD 4,44 millones; 241 días para identificar y contener; 63 % sin políticas de gobierno de IA; 97 % sin controles de acceso para IA; IA no autorizada suma USD 670 000 |
| [32] | Verizon DBIR 2025: abuso de credenciales 22 % y explotación de vulnerabilidades 20 % como vectores iniciales; explotación +34 %; terceros en 30 % de brechas; ransomware +37 % y presente en 44 % |
| [33] | Sophos 2025: solo 54 % restauró datos desde respaldos (mínimo en seis años); 38 % de quienes pagaron más citó respaldos fallidos |
| — | WEF Global Cybersecurity Outlook 2025 — **no se pudo abrir (403)**; no se usa |

## 3. Frecuencia por función en los 67 avisos

Conteo por palabras clave sobre el texto completo de cada aviso (un aviso puede sumar a varias funciones; el conteo es aproximado y conviene que el panel lo contraste).

| Función | Avisos | % |
|---|---|---|
| E4-01 Evaluación de riesgos de ciberseguridad | 25 | 37 % |
| E4-02 Evaluación de vulnerabilidades y pruebas de intrusión | 44 (13 con pentest / hacking ético) | 66 % |
| E4-03 Implantación de controles técnicos de seguridad | 37 | 55 % |
| E4-04 Gestión de identidades y accesos | 28 | 42 % |
| E4-05 Aseguramiento de la seguridad de aplicaciones | 17 | 25 % |
| E4-06 Monitoreo y detección de amenazas | 27 | 40 % |
| E4-07 Respuesta a incidentes de seguridad | 34 (6 con forense) | 51 % |
| E4-08 Recuperación tecnológica y continuidad operativa | 14 | 21 % |
| E4-09 Gestión del cumplimiento y auditoría de seguridad | 45 | 67 % |
| E4-10 Gestión de la protección de datos personales | 23 | 34 % |

Otros hallazgos: concientización aparece en 7 avisos y se trató como tarea de E4-09, no como función; inteligencia de amenazas (7) quedó dentro de E4-06; seguridad OT/ICS (1 aviso) y criptografía en la nube (1) no llegan a ser funciones propias.

## 4. Mapa funcional

**Propósito clave** → Gestionar la seguridad de la información y la protección de datos personales… (sección 1)

1. **Identificar y evaluar el riesgo digital**
   - E4-01 Evaluación de riesgos de ciberseguridad
   - E4-02 Evaluación de vulnerabilidades y pruebas de intrusión
2. **Proteger los activos de información**
   - E4-03 Implantación de controles técnicos de seguridad
   - E4-04 Gestión de identidades y accesos
   - E4-05 Aseguramiento de la seguridad de aplicaciones
3. **Detectar y responder a incidentes de seguridad**
   - E4-06 Monitoreo y detección de amenazas
   - E4-07 Respuesta a incidentes de seguridad (incluye análisis forense y notificación a SBS, CNSD y ANPD)
4. **Recuperar la operación tras incidentes**
   - E4-08 Recuperación tecnológica y continuidad operativa
5. **Gobernar la seguridad y la privacidad de los datos**
   - E4-09 Gestión del cumplimiento y auditoría de seguridad (incluye concientización)
   - E4-10 Gestión de la protección de datos personales (ámbito integrado)

Corte de pregrado: se excluyen dirección de seguridad (CISO), arquitectura corporativa, operaciones de equipo rojo avanzado, peritaje judicial y la designación como Oficial de Datos Personales o de Seguridad y Confianza Digital, que los avisos y convocatorias piden con 4 a 6 años de experiencia ([23]).

## 5. Dudas para el panel
- ¿E4-05 (seguridad de aplicaciones) queda en E4 o se comparte con C1 (desarrollo de software)?
- ¿E4-08 debe fusionarse con E4-07 dada su baja frecuencia en avisos (14 de 67), pese a la obligación SBS 877-2020?
- Nivel EPA de E4-07 y E4-10 (propuesto 2) frente al resto (3).
- La Ley 30999 regula la ciberdefensa militar; su aporte a la especialidad civil es indirecto.

## 6. Avisos revisados (LinkedIn Empleos Perú, 25/09/2026)

| # | Aviso (slug) | Funciones detectadas | Enlace |
|---|---|---|---|
| 1 | ai-offensive-at-yape | E4-02, E4-05, E4-09 | https://pe.linkedin.com/jobs/view/ai-offensive-at-yape-4471458818 |
| 2 | analista-de-ciberseguridad-at-hitss-perú | E4-03, E4-06, E4-07, E4-09 | https://pe.linkedin.com/jobs/view/analista-de-ciberseguridad-at-hitss-per%C3%BA-4469793213 |
| 3 | analista-de-ciberseguridad-at-los-andes | E4-02, E4-03, E4-06, E4-07, E4-10 | https://pe.linkedin.com/jobs/view/analista-de-ciberseguridad-at-los-andes-4471478633 |
| 4 | analista-de-ciberseguridad-defensiva-at-pwc-perú | E4-03, E4-06, E4-07, E4-09 | https://pe.linkedin.com/jobs/view/analista-de-ciberseguridad-defensiva-at-pwc-per%C3%BA-4464667235 |
| 5 | analista-de-ciberseguridad-iam-azure-entra-id-y-automatización-at-stefanini-group | E4-04 | https://pe.linkedin.com/jobs/view/analista-de-ciberseguridad-iam-azure-entra-id-y-automatizaci%C3%B3n-at-stefanini-group-4466589750 |
| 6 | analista-de-ciberseguridad-jr-gestión-de-vulnerabilidades-at-stefanini-group | E4-02, E4-04 | https://pe.linkedin.com/jobs/view/analista-de-ciberseguridad-jr-gesti%C3%B3n-de-vulnerabilidades-at-stefanini-group-4470233812 |
| 7 | analista-de-ciberseguridad-trabajo-remoto-at-bairesdev | E4-01, E4-02, E4-03, E4-06, E4-07, E4-09 | https://pe.linkedin.com/jobs/view/analista-de-ciberseguridad-trabajo-remoto-at-bairesdev-4469600070 |
| 8 | analista-de-riesgos-de-seguridad-at-evol-tsnet | E4-01, E4-02, E4-05, E4-09, E4-10 | https://pe.linkedin.com/jobs/view/analista-de-riesgos-de-seguridad-at-evol-tsnet-4460539224 |
| 9 | analista-de-riesgos-no-financieros-at-pacífico-seguros | E4-01, E4-02, E4-09, E4-10 | https://pe.linkedin.com/jobs/view/analista-de-riesgos-no-financieros-at-pac%C3%ADfico-seguros-4463655327 |
| 10 | analista-de-seguridad-–-sast-at-ntt-data-inc | E4-02, E4-05 | https://pe.linkedin.com/jobs/view/analista-de-seguridad-%E2%80%93-sast-at-ntt-data-inc-4468793826 |
| 11 | analista-de-seguridad-de-la-información-at-bdo-perú | E4-02, E4-03, E4-04, E4-06, E4-07, E4-08, E4-09 | https://pe.linkedin.com/jobs/view/analista-de-seguridad-de-la-informaci%C3%B3n-at-bdo-per%C3%BA-4464610399 |
| 12 | analista-de-seguridad-de-la-información-y-protección-de-datos-personales-at-hermes-perú | E4-01, E4-02, E4-09, E4-10 | https://pe.linkedin.com/jobs/view/analista-de-seguridad-de-la-informaci%C3%B3n-y-protecci%C3%B3n-de-datos-personales-at-hermes-per%C3%BA-4466301253 |
| 13 | analista-de-seguridad-senior-sap-grc-at-deloitte | E4-09 | https://pe.linkedin.com/jobs/view/analista-de-seguridad-senior-sap-grc-at-deloitte-4464154153 |
| 14 | analista-de-seguridad-senior-sap-grc-oracle-at-deloitte | E4-09 | https://pe.linkedin.com/jobs/view/analista-de-seguridad-senior-sap-grc-oracle-at-deloitte-4463684618 |
| 15 | analista-dlp-at-sek-security-ecosystem-knowledge | E4-02, E4-06, E4-10 | https://pe.linkedin.com/jobs/view/analista-dlp-at-sek-security-ecosystem-knowledge-4463590109 |
| 16 | analista-junior-de-ciberseguridad-at-universidad-peruana-cayetano-heredia | E4-02, E4-03, E4-07, E4-09 | https://pe.linkedin.com/jobs/view/analista-junior-de-ciberseguridad-at-universidad-peruana-cayetano-heredia-4463673903 |
| 17 | analista-n2-ndr-at-sek-security-ecosystem-knowledge | E4-06, E4-07, E4-09 | https://pe.linkedin.com/jobs/view/analista-n2-ndr-at-sek-security-ecosystem-knowledge-4469067934 |
| 18 | analista-senior-de-ciberseguridad-at-banco-de-crédito-bcp | E4-01, E4-02, E4-05, E4-06, E4-07, E4-08, E4-09 | https://pe.linkedin.com/jobs/view/analista-senior-de-ciberseguridad-at-banco-de-cr%C3%A9dito-bcp-4464395052 |
| 19 | analista-senior-de-riesgos-de-ciberseguridad-at-credicorp-capital | E4-01, E4-02, E4-09 | https://pe.linkedin.com/jobs/view/analista-senior-de-riesgos-de-ciberseguridad-at-credicorp-capital-4470626211 |
| 20 | application-security-architect-at-deel | E4-01, E4-02, E4-03, E4-05, E4-09, E4-10 | https://pe.linkedin.com/jobs/view/application-security-architect-at-deel-4463425160 |
| 21 | application-security-at-banco-de-crédito-bcp | E4-01, E4-02, E4-03, E4-05, E4-08, E4-09, E4-10 | https://pe.linkedin.com/jobs/view/application-security-at-banco-de-cr%C3%A9dito-bcp-4467213935 |
| 22 | application-security-engineer-remote-work-at-bairesdev | E4-02, E4-03, E4-05, E4-07 | https://pe.linkedin.com/jobs/view/application-security-engineer-remote-work-at-bairesdev-4468792722 |
| 23 | application-security-manager-at-terumo-blood-and-cell-technologies | E4-01, E4-02, E4-03, E4-05, E4-06, E4-07, E4-09 | https://pe.linkedin.com/jobs/view/application-security-manager-at-terumo-blood-and-cell-technologies-4469069102 |
| 24 | asistente-de-ciberseguridad-san-isidro-at-s-g-natclar-s-a-c | E4-01, E4-02, E4-03, E4-04, E4-06, E4-07, E4-09, E4-10 | https://pe.linkedin.com/jobs/view/asistente-de-ciberseguridad-san-isidro-at-s-g-natclar-s-a-c-4463371424 |
| 25 | asistente-de-riesgos-de-ti-y-seguridad-de-la-información-at-kpmg-en-perú | E4-01, E4-08, E4-09, E4-10 | https://pe.linkedin.com/jobs/view/asistente-de-riesgos-de-ti-y-seguridad-de-la-informaci%C3%B3n-at-kpmg-en-per%C3%BA-4445578744 |
| 26 | asistente-de-seguridad-de-la-información-at-bdo-perú | E4-02, E4-03, E4-04, E4-06, E4-07, E4-09 | https://pe.linkedin.com/jobs/view/asistente-de-seguridad-de-la-informaci%C3%B3n-at-bdo-per%C3%BA-4450510655 |
| 27 | asistente-de-seguridad-de-la-información-at-corporación-educativa-usil | E4-02, E4-04, E4-08 | https://pe.linkedin.com/jobs/view/asistente-de-seguridad-de-la-informaci%C3%B3n-at-corporaci%C3%B3n-educativa-usil-4471409063 |
| 28 | ciso-vp-data-security-at-veta-virtual | E4-02, E4-07, E4-09 | https://pe.linkedin.com/jobs/view/ciso-vp-data-security-at-veta-virtual-4462591090 |
| 29 | consulting-systems-engineer-at-fortinet | E4-01, E4-03, E4-04, E4-06, E4-07, E4-09, E4-10 | https://pe.linkedin.com/jobs/view/consulting-systems-engineer-at-fortinet-4460149240 |
| 30 | cybersecurity-business-advisor-at-empresa-confidencial | E4-01, E4-02, E4-03, E4-04, E4-05, E4-06, E4-07, E4-08, E4-09, E4-10 | https://pe.linkedin.com/jobs/view/cybersecurity-business-advisor-at-empresa-confidencial-4465775822 |
| 31 | cybersecurity-engineer-devsecops-azure-owasp-senior-level-1-at-globant | E4-04, E4-05 | https://pe.linkedin.com/jobs/view/cybersecurity-engineer-devsecops-azure-owasp-senior-level-1-at-globant-4424013837 |
| 32 | devsecops-analyst-at-ligo | E4-02, E4-03, E4-04, E4-05, E4-09 | https://pe.linkedin.com/jobs/view/devsecops-analyst-at-ligo-4468112523 |
| 33 | especialista-de-ciberseguridad-–-grc-y-continuidad-del-negocio-at-ferreycorp-s-a-a | E4-01, E4-04, E4-08, E4-09, E4-10 | https://pe.linkedin.com/jobs/view/especialista-de-ciberseguridad-%E2%80%93-grc-y-continuidad-del-negocio-at-ferreycorp-s-a-a-4469285312 |
| 34 | especialista-de-ciberseguridad-at-entel-perú | E4-01, E4-02, E4-03, E4-04, E4-07, E4-09, E4-10 | https://pe.linkedin.com/jobs/view/especialista-de-ciberseguridad-at-entel-per%C3%BA-4469220798 |
| 35 | especialista-de-ciberseguridad-n3-csirt-at-stefanini-latam | E4-03, E4-04, E4-06, E4-07 | https://pe.linkedin.com/jobs/view/especialista-de-ciberseguridad-n3-csirt-at-stefanini-latam-4464132707 |
| 36 | especialista-de-producto-de-ciberseguridad-at-claro-perú | E4-02, E4-03 | https://pe.linkedin.com/jobs/view/especialista-de-producto-de-ciberseguridad-at-claro-per%C3%BA-4467288642 |
| 37 | especialista-de-redes-y-seguridad-perimetral-senior-at-minsait | E4-01, E4-03, E4-07, E4-08, E4-09 | https://pe.linkedin.com/jobs/view/especialista-de-redes-y-seguridad-perimetral-senior-at-minsait-4469369441 |
| 38 | especialista-de-seguridad-aplicativa-at-entel-perú | E4-01, E4-02, E4-04, E4-05, E4-09 | https://pe.linkedin.com/jobs/view/especialista-de-seguridad-aplicativa-at-entel-per%C3%BA-4468334618 |
| 39 | especialista-de-seguridad-semisenior-at-tivit-latam | E4-03 | https://pe.linkedin.com/jobs/view/especialista-de-seguridad-semisenior-at-tivit-latam-4468915080 |
| 40 | especialista-de-seguridad-ti-at-universidad-peruana-cayetano-heredia | E4-02, E4-03, E4-06, E4-07 | https://pe.linkedin.com/jobs/view/especialista-de-seguridad-ti-at-universidad-peruana-cayetano-heredia-4466704422 |
| 41 | especialista-en-ciberseguridad-at-hitss-perú | E4-03, E4-07, E4-09 | https://pe.linkedin.com/jobs/view/especialista-en-ciberseguridad-at-hitss-per%C3%BA-4462526031 |
| 42 | especialista-en-ciberseguridad-at-pretorian | E4-02, E4-03, E4-04, E4-09 | https://pe.linkedin.com/jobs/view/especialista-en-ciberseguridad-at-pretorian-4462228634 |
| 43 | especialista-en-ciberseguridad-at-stefanini-latam | E4-02, E4-03, E4-04 | https://pe.linkedin.com/jobs/view/especialista-en-ciberseguridad-at-stefanini-latam-4469028257 |
| 44 | especialista-en-ciberseguridad-e-infraestructura-at-bvs-perú | E4-02, E4-03, E4-04, E4-07, E4-10 | https://pe.linkedin.com/jobs/view/especialista-en-ciberseguridad-e-infraestructura-at-bvs-per%C3%BA-4465232758 |
| 45 | especialista-en-criptografía-y-seguridad-cloud-aws-at-headhunter | E4-02, E4-03, E4-04, E4-05, E4-08, E4-09 | https://pe.linkedin.com/jobs/view/especialista-en-criptograf%C3%ADa-y-seguridad-cloud-aws-at-headhunter-4467901369 |
| 46 | especialista-en-seguridad-informática-at-financiera-confianza-s-a-a | E4-01, E4-02, E4-03, E4-05, E4-06, E4-07, E4-09 | https://pe.linkedin.com/jobs/view/especialista-en-seguridad-inform%C3%A1tica-at-financiera-confianza-s-a-a-4466225875 |
| 47 | especialista-seguridad-sap-at-seidor | E4-10 | https://pe.linkedin.com/jobs/view/especialista-seguridad-sap-at-seidor-4466949035 |
| 48 | gerente-de-seguridad-de-la-información-at-banbif-banco-interamericano-de-finanzas | E4-01, E4-02, E4-03, E4-04, E4-07, E4-09, E4-10 | https://pe.linkedin.com/jobs/view/gerente-de-seguridad-de-la-informaci%C3%B3n-at-banbif-banco-interamericano-de-finanzas-4468818424 |
| 49 | ics-ot-cybersecurity-engineer-at-hunt-lng-operating-company-s-a-c |  | https://pe.linkedin.com/jobs/view/ics-ot-cybersecurity-engineer-at-hunt-lng-operating-company-s-a-c-4458351203 |
| 50 | information-security-analyst-at-deel | E4-03, E4-06, E4-07, E4-09, E4-10 | https://pe.linkedin.com/jobs/view/information-security-analyst-at-deel-4463935288 |
| 51 | information-security-specialist-at-statkraft | E4-01, E4-02, E4-09 | https://pe.linkedin.com/jobs/view/information-security-specialist-at-statkraft-4460633363 |
| 52 | ingenierio-implementador-de-ciberseguridad-senior-at-imperia-soluciones-tecnológicas | E4-02, E4-03, E4-06, E4-10 | https://pe.linkedin.com/jobs/view/ingenierio-implementador-de-ciberseguridad-senior-at-imperia-soluciones-tecnol%C3%B3gicas-4469368231 |
| 53 | ingeniero-de-seguridad-trabajo-remoto-ref#259310-at-bairesdev | E4-02, E4-03, E4-07, E4-10 | https://pe.linkedin.com/jobs/view/ingeniero-de-seguridad-trabajo-remoto-ref%23259310-at-bairesdev-4140194920 |
| 54 | ingeniero-senior-google-security-operations-at-ntt-data-inc | E4-04, E4-06, E4-07 | https://pe.linkedin.com/jobs/view/ingeniero-senior-google-security-operations-at-ntt-data-inc-4458976142 |
| 55 | jefe-de-operaciones-ti-y-ciberseguridad-at-grupo-vanguard-internacional | E4-01, E4-02, E4-04, E4-07, E4-08, E4-09 | https://pe.linkedin.com/jobs/view/jefe-de-operaciones-ti-y-ciberseguridad-at-grupo-vanguard-internacional-4465047860 |
| 56 | líder-de-ciberseguridad-at-ntt-data-inc | E4-09 | https://pe.linkedin.com/jobs/view/l%C3%ADder-de-ciberseguridad-at-ntt-data-inc-4470036284 |
| 57 | líder-en-ciberseguridad-at-encora-inc | E4-02, E4-03, E4-04, E4-06, E4-07, E4-08, E4-09 | https://pe.linkedin.com/jobs/view/l%C3%ADder-en-ciberseguridad-at-encora-inc-4454050879 |
| 58 | oficial-de-seguridad-at-empresa-confidencial | E4-01, E4-08, E4-09, E4-10 | https://pe.linkedin.com/jobs/view/oficial-de-seguridad-at-empresa-confidencial-4470334393 |
| 59 | pentester-at-ntt-data-inc | E4-02, E4-04, E4-05 | https://pe.linkedin.com/jobs/view/pentester-at-ntt-data-inc-4466866687 |
| 60 | security-engineer-modernization-hybrid-cloud-at-kyndryl | E4-02, E4-03, E4-04, E4-05, E4-06, E4-07, E4-09, E4-10 | https://pe.linkedin.com/jobs/view/security-engineer-modernization-hybrid-cloud-at-kyndryl-4435743405 |
| 61 | senior-cybersecurity-architect-at-encora-inc | E4-01, E4-02, E4-03, E4-04, E4-06, E4-07, E4-09, E4-10 | https://pe.linkedin.com/jobs/view/senior-cybersecurity-architect-at-encora-inc-4461775994 |
| 62 | senior-cybersecurity-specialist-at-encora-inc | E4-01, E4-02, E4-03, E4-04, E4-06, E4-07, E4-08, E4-09 | https://pe.linkedin.com/jobs/view/senior-cybersecurity-specialist-at-encora-inc-4462045409 |
| 63 | senior-red-team-security-consultant-mandiant-english-at-google | E4-02, E4-04, E4-06, E4-07 | https://pe.linkedin.com/jobs/view/senior-red-team-security-consultant-mandiant-english-at-google-4464866450 |
| 64 | set1a-jefe-de-servicios-gestionados-de-ciberseguridad-y-observabilidad-at-cyberline | E4-03, E4-06, E4-07, E4-08, E4-09 | https://pe.linkedin.com/jobs/view/set1a-jefe-de-servicios-gestionados-de-ciberseguridad-y-observabilidad-at-cyberline-4469771969 |
| 65 | soc-analyst-at-think-networks | E4-02, E4-06, E4-07, E4-09 | https://pe.linkedin.com/jobs/view/soc-analyst-at-think-networks-4470442358 |
| 66 | soc-analyst-triage-specialist-at-applaudo | E4-01, E4-03, E4-06 | https://pe.linkedin.com/jobs/view/soc-analyst-triage-specialist-at-applaudo-4419406010 |
| 67 | staff-security-architect-at-kraken | E4-04, E4-05, E4-09, E4-10 | https://pe.linkedin.com/jobs/view/staff-security-architect-at-kraken-4415959685 |
