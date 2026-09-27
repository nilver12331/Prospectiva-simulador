/* Paso 1.4 · momento 1 · Formular los objetivos educacionales (desempeño a 3–5 años del egreso), rastreables a una especialidad
   validada y sostenidos por al menos una competencia; momento 2 · matriz objetivos × competencias (2 sostiene · 1 contribuye · 0 no).
   Escribe datos/competencias/<COD>-objetivos.json y datos/evidencias/<COD>-10-objetivos.md */
const fs=require("fs"),path=require("path");
const R=p=>path.join(__dirname,"..","datos",p);
const FECHA="24-09-2026";
const OBJ={
 SIS:{
  oe:[
   ["OE1","Lidera equipos o células de desarrollo que entregan software en producción para organizaciones públicas y privadas, respondiendo por su calidad, su despliegue continuo y su mantenimiento.","desarrollo de software e ingeniería de aplicaciones"],
   ["OE2","Conduce proyectos de analítica e inteligencia artificial que convierten los datos de la organización en decisiones y productos, con gobierno del dato, evaluación de los modelos y criterio ético.","ciencia de datos e inteligencia artificial"],
   ["OE3","Diseña y opera la infraestructura tecnológica en la nube y las redes de una organización, respondiendo por su disponibilidad, su rendimiento, su costo y su continuidad.","infraestructura en la nube y devops"],
   ["OE4","Dirige la gestión de la seguridad de la información y del cumplimiento normativo de una organización, respondiendo ante la dirección y los reguladores por la protección de los datos y la respuesta ante incidentes.","ciberseguridad y gestión de riesgos digitales"],
   ["OE5","Gestiona proyectos, servicios y el gobierno de la tecnología de la información alineados con la estrategia de la organización, como jefe de proyecto, responsable de servicios o auditor de TI.","gestión de proyectos y servicios de ti"]],
  /* columnas: C1 software · C2 plataforma · C3 datos · C4 ciberseguridad · C5 gobierno TI */
  coh:[[2,1,0,0,1],[0,1,2,0,1],[1,2,0,1,1],[0,1,0,2,1],[1,0,0,1,2]]},
 NUT:{
  oe:[
   ["OE1","Conduce la atención nutricional de pacientes hospitalizados y ambulatorios en servicios de nutrición de hospitales, clínicas y consultorios, respondiendo por el plan nutricional registrado en la historia clínica y por su seguimiento.","nutrición clínica hospitalaria"],
   ["OE2","Atiende a la gestante, al niño y al adulto mayor en el primer nivel de atención y en los programas de anemia y desnutrición, con planes individualizados que el establecimiento registra y evalúa.","nutrición pediátrica y materna"],
   ["OE3","Diseña, ejecuta y evalúa intervenciones nutricionales en poblaciones desde redes de salud, gobiernos locales y programas sociales del Estado, respondiendo por sus indicadores de impacto.","nutrición comunitaria y salud pública"],
   ["OE4","Gestiona servicios de alimentación colectiva en hospitales, concesionarias, campamentos y programas alimentarios, respondiendo por el menú, el costo y la inocuidad ante la autoridad sanitaria.","gestión de servicios de alimentación e inocuidad"]],
  /* columnas: C1 atención nutricional · C2 intervención poblacional · C3 alimentación colectiva */
  coh:[[2,0,1],[2,1,0],[0,2,1],[1,1,2]]}
};
const REQ=["Describe un desempeño, no un aprendizaje","Es observable por un tercero","Se rastrea a una especialidad validada","Es alcanzable con las competencias del perfil","Se valida con grupos de interés (SINEACE)"];
for(const cod of ["SIS","NUT"]){
 const D=JSON.parse(fs.readFileSync(R("competencias/"+cod+"-derivadas.json"),"utf8")), C=D.competencias, O=OBJ[cod];
 if(O.coh.some(f=>f.length!==C.length)) throw new Error(cod+": la matriz no cuadra con las competencias");
 /* coherencia bidireccional */
 const sinComp=O.oe.filter((o,j)=>!O.coh[j].includes(2)).map(o=>o[0]);
 const sinObj=C.filter((c,i)=>!O.coh.some(f=>f[i]===2)).map(c=>c.alias);
 const out={cod,fecha:FECHA,oe:O.oe,coh:O.coh,prueba:{sinCompetencia:sinComp,sinObjetivo:sinObj,ok:!sinComp.length&&!sinObj.length},
  resumen:`${O.oe.length} objetivos educacionales, cada uno sostenido por una competencia y rastreable a una especialidad validada; las ${C.length} competencias llegan a algún objetivo. Pendiente: validación con empleadores, egresados y colegio profesional (exigencia de SINEACE).`};
 fs.writeFileSync(R("competencias/"+cod+"-objetivos.json"),JSON.stringify(out,null,1));
 let md=`# Objetivos educacionales · ${cod} · paso 1.4\n\nFecha: ${FECHA}. Desempeño esperado del egresado tres a cinco años después de titularse. Perfil de egreso = las ${C.length} competencias guardadas en el 1.2 (no se redacta aparte).\n\n## Objetivos\n\n| Código | Objetivo | Especialidad que lo rastrea (1.1 → 1.3) | Competencia que lo sostiene |\n|---|---|---|---|\n`;
 md+=O.oe.map((o,j)=>`| ${o[0]} | ${o[1]} | ${o[2]} | ${C[O.coh[j].indexOf(2)].alias} |`).join("\n");
 md+=`\n\n## Matriz de coherencia (● sostiene · ○ contribuye · · no interviene)\n\n| | ${C.map((c,i)=>"C"+(i+1)+" · "+c.alias).join(" | ")} |\n|---|${C.map(()=>"---").join("|")}|\n`;
 md+=O.oe.map((o,j)=>`| ${o[0]} | ${O.coh[j].map(v=>v===2?"●":v===1?"○":"·").join(" | ")} |`).join("\n");
 md+=`\n\n## Prueba bidireccional\n\n- Objetivos sin competencia que los sostenga: ${sinComp.length?sinComp.join(", "):"ninguno"}.\n- Competencias sin objetivo que las recoja: ${sinObj.length?sinObj.join(", "):"ninguna"}.\n\n## Requisitos por objetivo\n\n| Código | ${REQ.map((r,i)=>i+1).join(" | ")} |\n|---|${REQ.map(()=>"---").join("|")}|\n`;
 md+=O.oe.map(o=>`| ${o[0]} | Sí | Sí | Sí | Sí | Pendiente (grupos de interés) |`).join("\n")+"\n\nRequisitos: "+REQ.map((r,i)=>(i+1)+" "+r).join(" · ")+"\n";
 fs.writeFileSync(R("evidencias/"+cod+"-10-objetivos.md"),md);
 console.log(cod,"→",O.oe.length,"objetivos ·",out.prueba.ok?"coherencia OK":"coherencia con huecos",sinComp,sinObj);
}
