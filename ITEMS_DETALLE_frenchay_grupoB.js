/* ============================================================
   BLOQUE PARA PEGAR DENTRO DE ITEMS_DETALLE — FRENCHAY (Grupo B)
   ============================================================
   REQUIERE CAMBIO_MOTOR_grupoB.txt ya aplicado.
   8 secciones, cada una se PROMEDIA (no se suma). Opciones ya
   codificadas 5(A/Normal) a 1(E/Parálisis total).
   ============================================================ */

'frenchay':{
secciones:[
{n:'1. Reflejos',items:[
{t:'Tos',ops:[1,2,3,4,5]},{t:'Deglución',ops:[1,2,3,4,5]},{t:'Saliva',ops:[1,2,3,4,5]},
]},
{n:'2. Respiración',items:[
{t:'En reposo',ops:[1,2,3,4,5]},{t:'En habla',ops:[1,2,3,4,5]},
]},
{n:'3. Labios',items:[
{t:'En reposo',ops:[1,2,3,4,5]},{t:'Movimiento',ops:[1,2,3,4,5]},
]},
{n:'4. Mandíbula',items:[
{t:'Reposo',ops:[1,2,3,4,5]},{t:'Habla',ops:[1,2,3,4,5]},
]},
{n:'5. Paladar',items:[
{t:'Líquidos',ops:[1,2,3,4,5]},{t:'Mantenimiento',ops:[1,2,3,4,5]},
]},
{n:'6. Laringe',items:[
{t:'Tiempo de fonación',ops:[1,2,3,4,5]},{t:'Tono',ops:[1,2,3,4,5]},
]},
{n:'7. Lengua',items:[
{t:'Reposo',ops:[1,2,3,4,5]},{t:'Alternancia',ops:[1,2,3,4,5]},
]},
{n:'8. Inteligibilidad',items:[
{t:'Palabras',ops:[1,2,3,4,5]},{t:'Frases',ops:[1,2,3,4,5]},
]},
],
calc:function(respuestas){
function avgSec(seci,n){var t=0,c=0;for(var i=0;i<n;i++){var v=respuestas[seci+'-'+i];if(typeof v==='number'){t+=v;c++;}}return c>0?t/c:null;}
var reflejos=avgSec(0,3),respiracion=avgSec(1,2),labios=avgSec(2,2),mandibula=avgSec(3,2),
paladar=avgSec(4,2),laringe=avgSec(5,2),lengua=avgSec(6,2),inteligibilidad=avgSec(7,2);
var secciones=[reflejos,respiracion,labios,mandibula,paladar,laringe,lengua,inteligibilidad];
var validas=secciones.filter(function(v){return v!==null;});
var promedioGeneral=validas.length>0?validas.reduce(function(a,b){return a+b;},0)/validas.length:0;
var pct=Math.round(((promedioGeneral-1)/4)*100);

var sugerencias=[];
if(laringe!==null&&lengua!==null&&(laringe+lengua)<=2&&labios===5&&mandibula===5){
sugerencias.push('Sospecha de Disartria Flácida/Bulbar');
}
if(inteligibilidad!==null&&inteligibilidad<=2){
sugerencias.push('Sospecha de Disartria Atáxica (validar clínicamente)');
}
window._frenchay_ultimo={
reflejos:reflejos,respiracion:respiracion,labios:labios,mandibula:mandibula,
paladar:paladar,laringe:laringe,lengua:lengua,inteligibilidad:inteligibilidad,
sugerencias:sugerencias.length?sugerencias:['Sin patrón claro de disartria específica']
};
return pct;
},
interp:function(p){
var d=window._frenchay_ultimo||{};
function f(v){return v!==null&&v!==undefined?v.toFixed(1):'—';}
var detalle=' | Reflejos:'+f(d.reflejos)+' Respiración:'+f(d.respiracion)+' Labios:'+f(d.labios)+' Mandíbula:'+f(d.mandibula)+' Paladar:'+f(d.paladar)+' Laringe:'+f(d.laringe)+' Lengua:'+f(d.lengua)+' Inteligibilidad:'+f(d.inteligibilidad);
var sugTxt=d.sugerencias?(' | '+d.sugerencias.join('; ')):'';
var nota=' (Cada sección se promedia, no se suma.)';
return{t:'Promedio general: '+p+'%'+detalle+sugTxt+nota,bg:p>=70?'#E8F5F0':p>=40?'#FFF3EB':'#FFF5F5',c:p>=70?'#1A7A5E':p>=40?'#C05621':'#C53030'};
},
},
