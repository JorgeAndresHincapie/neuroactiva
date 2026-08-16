/* ============================================================
   BLOQUE PARA PEGAR DENTRO DE ITEMS_DETALLE — OSA (Grupo B)
   ============================================================
   REQUIERE CAMBIO_MOTOR_grupoB.txt ya aplicado.
   21 ítems, cada uno con Capacidad + Importancia. Se usan 42
   "ítems" (21 de capacidad + 21 de importancia, en secciones
   separadas) y calc() los empareja por posición.
   ============================================================ */

'osa':{
secciones:[
{n:'CAPACIDAD (1=Mucha dificultad, 4=Extremadamente bien)',items:[
{t:'Concentrarme',ops:[1,2,3,4]},{t:'Controlar mis emociones',ops:[1,2,3,4]},
{t:'Cuidar de mí mismo',ops:[1,2,3,4]},{t:'Cuidar mi lugar de vida',ops:[1,2,3,4]},
{t:'Expresar mis ideas',ops:[1,2,3,4]},{t:'Llevarme bien con otros',ops:[1,2,3,4]},
{t:'Irme a donde necesito',ops:[1,2,3,4]},{t:'Manejar mis finanzas',ops:[1,2,3,4]},
{t:'Organizar mi tiempo',ops:[1,2,3,4]},{t:'Disfrutar del ocio',ops:[1,2,3,4]},
{t:'Hacer actividades productivas',ops:[1,2,3,4]},{t:'Cuidar mi cuerpo',ops:[1,2,3,4]},
{t:'Tomar decisiones por mí mismo',ops:[1,2,3,4]},{t:'Mantener mi rutina',ops:[1,2,3,4]},
{t:'Trabajar o estudiar',ops:[1,2,3,4]},{t:'Relajarme',ops:[1,2,3,4]},
{t:'Usar mis herramientas cotidianas',ops:[1,2,3,4]},{t:'Buscar metas personales',ops:[1,2,3,4]},
{t:'Cumplir mis roles',ops:[1,2,3,4]},{t:'Adaptarme a los cambios',ops:[1,2,3,4]},
{t:'Participar en mi comunidad',ops:[1,2,3,4]},
]},
{n:'IMPORTANCIA (1=No es importante, 4=Fundamental)',items:[
{t:'Concentrarme',ops:[1,2,3,4]},{t:'Controlar mis emociones',ops:[1,2,3,4]},
{t:'Cuidar de mí mismo',ops:[1,2,3,4]},{t:'Cuidar mi lugar de vida',ops:[1,2,3,4]},
{t:'Expresar mis ideas',ops:[1,2,3,4]},{t:'Llevarme bien con otros',ops:[1,2,3,4]},
{t:'Irme a donde necesito',ops:[1,2,3,4]},{t:'Manejar mis finanzas',ops:[1,2,3,4]},
{t:'Organizar mi tiempo',ops:[1,2,3,4]},{t:'Disfrutar del ocio',ops:[1,2,3,4]},
{t:'Hacer actividades productivas',ops:[1,2,3,4]},{t:'Cuidar mi cuerpo',ops:[1,2,3,4]},
{t:'Tomar decisiones por mí mismo',ops:[1,2,3,4]},{t:'Mantener mi rutina',ops:[1,2,3,4]},
{t:'Trabajar o estudiar',ops:[1,2,3,4]},{t:'Relajarme',ops:[1,2,3,4]},
{t:'Usar mis herramientas cotidianas',ops:[1,2,3,4]},{t:'Buscar metas personales',ops:[1,2,3,4]},
{t:'Cumplir mis roles',ops:[1,2,3,4]},{t:'Adaptarme a los cambios',ops:[1,2,3,4]},
{t:'Participar en mi comunidad',ops:[1,2,3,4]},
]},
],
calc:function(respuestas){
var nombres=['Concentrarme','Controlar mis emociones','Cuidar de mí mismo','Cuidar mi lugar de vida','Expresar mis ideas','Llevarme bien con otros','Irme a donde necesito','Manejar mis finanzas','Organizar mi tiempo','Disfrutar del ocio','Hacer actividades productivas','Cuidar mi cuerpo','Tomar decisiones por mí mismo','Mantener mi rutina','Trabajar o estudiar','Relajarme','Usar mis herramientas cotidianas','Buscar metas personales','Cumplir mis roles','Adaptarme a los cambios','Participar en mi comunidad'];
var totalCompetencia=0,itemsEvaluados=0;
var resultados=[];
for(var i=0;i<21;i++){
var cap=respuestas['0-'+i],imp=respuestas['1-'+i];
if(typeof cap==='number'&&typeof imp==='number'){
totalCompetencia+=cap;itemsEvaluados++;
resultados.push({nombre:nombres[i],capacidad:cap,importancia:imp,ibo:imp-cap});
}
}
var porcentaje=itemsEvaluados===21?Math.round(((totalCompetencia-21)/63)*100):null;
resultados.sort(function(a,b){return b.ibo-a.ibo;});
window._osa_ultimo={porcentaje:porcentaje,prioritarios:resultados.slice(0,5),itemsEvaluados:itemsEvaluados};
return porcentaje!==null?porcentaje:0;
},
interp:function(p){
var d=window._osa_ultimo||{};
var listaTxt=d.prioritarios?d.prioritarios.map(function(r){return r.nombre+' (IBO='+r.ibo+')';}).join(', '):'';
var prefTxt=listaTxt?(' | Top 5 objetivos prioritarios: '+listaTxt):'';
if(p>=80)return{t:'Eficacia Percibida: '+p+'% — Identidad Ocupacional Sólida.'+prefTxt,bg:'#E8F5F0',c:'#1A7A5E'};
if(p>=50)return{t:'Eficacia Percibida: '+p+'% — Conflictos de Competencia / Identidad en Riesgo.'+prefTxt,bg:'#FFF3EB',c:'#C05621'};
return{t:'Eficacia Percibida: '+p+'% — Disfunción Ocupacional y Sentimiento de Ineficacia Severo.'+prefTxt,bg:'#FFF5F5',c:'#C53030'};
},
},
