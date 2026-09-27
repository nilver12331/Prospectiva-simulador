/* Escribe la Cartera de Especialidades en CSV con las columnas estandarizadas del paso 1.1.
   Uso: const {escribir}=require("./cartera-csv"); escribir("datos/cartera-SIS.csv", filas)
   Cada fila es un objeto con las claves de COLUMNAS; lo que falte sale vacío. */
const fs=require("fs");
const COLUMNAS=[
 /* A. Identificación */
 ["cod","Código"],["especialidad","Especialidad"],["descripcion","Descripción"],["origen","Origen"],["naturaleza","Naturaleza"],
 ["empleo","Ejercicio como empleo (1-4)"],["empleo_txt","Aviso que sustenta el empleo"],
 ["negocio","Ejercicio como negocio propio (1-4)"],["negocio_txt","Sustento del negocio propio"],
 ["funciones_n","Funciones que encierra (n)"],["funciones","Funciones que encierra (lista)"],
 ["proceso","Proceso que ejecuta"],["evidencia","Evidencia que entrega"],
 /* B. Potencial de mercado · Demanda */
 ["d_vol","Demanda · volumen de puestos (1-4)"],["d_amp","Demanda · amplitud de empleadores (1-4)"],["d_esc","Demanda · escasez (1-4)"],
 ["d_rem","Demanda · remuneración (1-4)"],["d_for","Demanda · formalidad (1-4)"],
 /* Tendencia */
 ["t_cre","Tendencia · crecimiento observado (1-4)"],["t_nor","Tendencia · impulso normativo (1-4)"],["t_inv","Tendencia · inversión sectorial (1-4)"],
 ["t_dem","Tendencia · driver estructural (1-4)"],["t_tec","Tendencia · madurez tecnológica (1-4)"],
 /* Impacto y sostenibilidad */
 ["i_cri","Impacto · criticidad (1-4)"],["i_alc","Impacto · alcance (1-4)"],["sos","Sostenibilidad · resistencia a la automatización (1-4)"],
 /* Calculados */
 ["DEM","Demanda (0-100)"],["TEN","Tendencia (0-100)"],["IMP","Impacto (0-100)"],["SOS","Sostenibilidad (0-100)"],["POT","Potencial de mercado (0-100)"],
 /* Sustentos */
 ["fd","Sustento de demanda"],["ft","Sustento de tendencia"],["fi","Sustento de impacto y sostenibilidad"],
 ["refs","Referencias (ids APA)"],["procedencia","Procedencia (dato contado / juicio del modelo)"],
 /* C–E se llenan en momentos posteriores */
 ["panel","Panel de expertos (P1-P6 · mediana · I-CVI · CVR · acuerdo · RIC)"],["aprobada","Aprobada (M3)"],
 ["c_doc","Capacidad · docentes (1-4)"],["c_cam","Capacidad · campos de práctica (1-4)"],["c_inf","Capacidad · infraestructura (1-4)"],
 ["c_dif","Capacidad · diferenciación (1-4)"],["c_hab","Capacidad · habilitación normativa (1-4)"],["CAP","Capacidad instalada (0-100)"],
 ["PRI","Prioridad (potencial × capacidad ÷ 100)"],["destino","Destino (M5)"],["seleccionada","Seleccionada (M5)"],["motivo","Motivo si sale"]
];
const W_DEM={d_vol:.35,d_amp:.20,d_esc:.20,d_rem:.15,d_for:.10},W_TEN={t_cre:.30,t_nor:.25,t_inv:.20,t_dem:.15,t_tec:.10};
const a100=v=>Math.round((v-1)/3*100);
const pond=(o,w)=>Object.keys(w).reduce((s,k)=>s+w[k]*(+o[k]||0),0);
function calcular(f){
 if(f.destino&&/Fase 2|Esperar y revisar|Recurso/.test(f.destino)&&/Devuelta/.test(f.procedencia||"")){ ["DEM","TEN","IMP","SOS","POT"].forEach(k=>f[k]=""); return f }
 const ok=k=>Object.keys(k).every(x=>+f[x]>=1);
 if(ok(W_DEM)) f.DEM=a100(pond(f,W_DEM));
 if(ok(W_TEN)) f.TEN=a100(pond(f,W_TEN));
 if(+f.i_cri>=1&&+f.i_alc>=1) f.IMP=a100(.6*f.i_cri+.4*f.i_alc);
 if(+f.sos>=1) f.SOS=a100(+f.sos);
 if([f.DEM,f.TEN,f.IMP,f.SOS].every(v=>v!==undefined)) f.POT=Math.round(.35*f.DEM+.30*f.TEN+.20*f.IMP+.15*f.SOS);
 return f;
}
const celda=v=>{ v=v===undefined||v===null?"":String(v); return /[";\n\r]/.test(v)?'"'+v.replace(/"/g,'""')+'"':v };
function escribir(ruta,filas){
 filas.forEach(calcular);
 const lineas=[COLUMNAS.map(c=>celda(c[1])).join(";")];
 filas.forEach(f=>lineas.push(COLUMNAS.map(c=>celda(f[c[0]])).join(";")));
 fs.writeFileSync(ruta,"﻿"+lineas.join("\r\n")+"\r\n");   // BOM + punto y coma: abre bien en Excel en español
 return filas;
}
module.exports={COLUMNAS,escribir,calcular};
