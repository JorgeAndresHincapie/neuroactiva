/* ============================================================
   BLOQUE PARA PEGAR DENTRO DE ITEMS_DETALLE — SF-36 (Grupo B)
   ============================================================
   REQUIERE haber aplicado primero CAMBIO_MOTOR_grupoB.txt
   (la función recalcular() debe soportar "calc").

   Los ítems se organizan en 6 secciones en el orden P1-P36. La
   función calc() lee las respuestas por posición secci-itemIdx y
   reconstruye el vector p1..p36 para aplicar toda la lógica de
   recodificación, imputación y cálculo de PCS/MCS ya validada.

   NOTA: el resultado final que se muestra como "puntaje" es el PCS
   (Componente Sumario Físico). El MCS (Mental) y las 8 dimensiones
   se muestran en el texto de interpretación, ya que el motor solo
   puede graficar una barra de progreso con un único número.
   ============================================================ */

'sf36':{
secciones:[
{n:'Salud General',items:[
{t:'P1. En general, su salud es:',ops:[1,2,3,4,5]},
{t:'P2. Comparada con hace un año, su salud actual es:',ops:[1,2,3,4,5]},
]},
{n:'Funcionamiento Físico (¿le limita su salud para...?)',items:[
{t:'P3. Esfuerzos intensos',ops:[1,2,3]},
{t:'P4. Esfuerzos moderados',ops:[1,2,3]},
{t:'P5. Levantar o llevar la bolsa de la compra',ops:[1,2,3]},
{t:'P6. Subir varios pisos por la escalera',ops:[1,2,3]},
{t:'P7. Subir un solo piso por la escalera',ops:[1,2,3]},
{t:'P8. Agacharse o arrodillarse',ops:[1,2,3]},
{t:'P9. Caminar un kilómetro o más',ops:[1,2,3]},
{t:'P10. Caminar varias manzanas (500m)',ops:[1,2,3]},
{t:'P11. Caminar una manzana (100m)',ops:[1,2,3]},
{t:'P12. Bañarse o vestirse por sí mismo',ops:[1,2,3]},
]},
{n:'Rol Físico y Emocional (últimas 4 semanas)',items:[
{t:'P13. Redujo el tiempo dedicado al trabajo (físico)',ops:[1,2]},
{t:'P14. Hizo menos de lo que hubiera querido (físico)',ops:[1,2]},
{t:'P15. Tuvo que limitar el tipo de trabajo (físico)',ops:[1,2]},
{t:'P16. Tuvo dificultad para realizar su trabajo (físico)',ops:[1,2]},
{t:'P17. Redujo el tiempo dedicado (emocional)',ops:[1,2]},
{t:'P18. Hizo menos de lo que hubiera querido (emocional)',ops:[1,2]},
{t:'P19. No hizo su trabajo con tanto cuidado (emocional)',ops:[1,2]},
]},
{n:'Función Social y Dolor Corporal',items:[
{t:'P20. ¿Interfirió su salud en sus actividades sociales?',ops:[1,2,3,4,5]},
{t:'P21. ¿Cuánto dolor corporal ha tenido?',ops:[1,2,3,4,5,6]},
{t:'P22. ¿Interfirió el dolor en su trabajo habitual?',ops:[1,2,3,4,5]},
]},
{n:'Vitalidad y Salud Mental (últimas 4 semanas)',items:[
{t:'P23. ¿Se ha sentido lleno de vitalidad?',ops:[1,2,3,4,5,6]},
{t:'P24. ¿Ha estado muy nervioso?',ops:[1,2,3,4,5,6]},
{t:'P25. ¿Se ha sentido tan bajo de moral que nada le animaba?',ops:[1,2,3,4,5,6]},
{t:'P26. ¿Se ha sentido calmado y tranquilo?',ops:[1,2,3,4,5,6]},
{t:'P27. ¿Ha tenido mucha energía?',ops:[1,2,3,4,5,6]},
{t:'P28. ¿Se ha sentido desanimado y triste?',ops:[1,2,3,4,5,6]},
{t:'P29. ¿Se ha sentido agotado?',ops:[1,2,3,4,5,6]},
{t:'P30. ¿Se ha sentido feliz?',ops:[1,2,3,4,5,6]},
{t:'P31. ¿Se ha sentido cansado?',ops:[1,2,3,4,5,6]},
{t:'P32. ¿Con qué frecuencia dificultó su salud sus actividades sociales?',ops:[1,2,3,4,5]},
]},
{n:'Perspectivas de Salud',items:[
{t:'P33. Creo que me enfermo más fácilmente que otras personas',ops:[1,2,3,4,5]},
{t:'P34. Estoy tan sano como cualquiera',ops:[1,2,3,4,5]},
{t:'P35. Creo que mi salud va a empeorar',ops:[1,2,3,4,5]},
{t:'P36. Mi salud es excelente',ops:[1,2,3,4,5]},
]},
],
calc:function(respuestas){
const orden=[
['0-0','0-1'],
['1-0','1-1','1-2','1-3','1-4','1-5','1-6','1-7','1-8','1-9'],
['2-0','2-1','2-2','2-3','2-4','2-5','2-6'],
['3-0','3-1','3-2'],
['4-0','4-1','4-2','4-3','4-4','4-5','4-6','4-7','4-8','4-9'],
['5-0','5-1','5-2','5-3'],
];
const claves=orden.flat();
const p={};
claves.forEach((k,i)=>{p['p'+(i+1)]=respuestas[k];});

const tipoA={1:5.0,2:4.4,3:3.4,4:2.0,5:1.0};
const tipoB={1:6,2:5,3:4,4:3,5:2,6:1};
const tipoC={1:5,2:4,3:3,4:2,5:1};
const p21recod={1:6.0,2:5.4,3:4.2,4:3.1,5:2.2,6:1.0};

const recod=Object.assign({},p);
[1,34,36].forEach(function(n){if(typeof p['p'+n]==='number')recod['p'+n]=tipoA[p['p'+n]];});
[23,26,27,30].forEach(function(n){if(typeof p['p'+n]==='number')recod['p'+n]=tipoB[p['p'+n]];});
if(typeof p.p20==='number')recod.p20=tipoC[p.p20];
if(typeof p.p21==='number')recod.p21=p21recod[p.p21];
if(p.p21===1&&(p.p22===undefined||p.p22===1)){recod.p22=5;}
else if(typeof p.p22==='number'){recod.p22=tipoC[p.p22];}

function suma(){
var total=0;
for(var i=0;i<arguments.length;i++){total+=recod['p'+arguments[i]]||0;}
return total;
}
var dim={
FF:{pb:suma(3,4,5,6,7,8,9,10,11,12),min:10,rango:20},
RF:{pb:suma(13,14,15,16),min:4,rango:4},
RE:{pb:suma(17,18,19),min:3,rango:3},
VT:{pb:suma(23,24,25,27),min:4,rango:20},
SM:{pb:suma(24,25,26,28,30),min:5,rango:25},
FS:{pb:(recod.p20||0)+(p.p32||0),min:2,rango:8},
DC:{pb:suma(21,22),min:2,rango:9},
SG:{pb:suma(1,33,34,35,36),min:5,rango:20},
};
var dimensiones={};
Object.keys(dim).forEach(function(k){
var v=dim[k];
dimensiones[k]=Math.round(((v.pb-v.min)/v.rango)*10000)/100;
});

var normas={
FF:{mu:84.52404,sigma:22.89090},RF:{mu:81.19907,sigma:33.79729},
DC:{mu:75.49196,sigma:23.55844},SG:{mu:72.21316,sigma:20.16964},
VT:{mu:61.05454,sigma:20.86942},FS:{mu:83.29973,sigma:22.38236},
RE:{mu:81.33828,sigma:33.02717},SM:{mu:74.83958,sigma:18.01469},
};
var pesosPCS={FF:0.42402,RF:0.35111,DC:0.31754,SG:0.24954,VT:0.02877,FS:-0.00753,RE:-0.19206,SM:-0.22069};
var pesosMCS={FF:-0.22999,RF:-0.12329,DC:-0.09731,SG:-0.01571,VT:0.23534,FS:0.26876,RE:0.43407,SM:0.48581};

var aggPCS=0,aggMCS=0;
Object.keys(dim).forEach(function(k){
var z=(dimensiones[k]-normas[k].mu)/normas[k].sigma;
aggPCS+=z*pesosPCS[k];aggMCS+=z*pesosMCS[k];
});
var PCS=Math.round((aggPCS*10+50)*100)/100;
var MCS=Math.round((aggMCS*10+50)*100)/100;

window._sf36_ultimo={PCS:PCS,MCS:MCS,dimensiones:dimensiones};

return PCS;
},
interp:function(p){
var d=window._sf36_ultimo||{};
var mcsTxt=d.MCS!==undefined?(' | Componente Mental (MCS): '+d.MCS):'';
var dimTxt=d.dimensiones?(' — FF:'+d.dimensiones.FF+' RF:'+d.dimensiones.RF+' DC:'+d.dimensiones.DC+' SG:'+d.dimensiones.SG+' VT:'+d.dimensiones.VT+' FS:'+d.dimensiones.FS+' RE:'+d.dimensiones.RE+' SM:'+d.dimensiones.SM):'';
if(p>=50)return{t:'Componente Físico (PCS): '+p+' — dentro o sobre el promedio poblacional.'+mcsTxt+dimTxt,bg:'#E8F5F0',c:'#1A7A5E'};
if(p>=42)return{t:'Componente Físico (PCS): '+p+' — levemente bajo el promedio.'+mcsTxt+dimTxt,bg:'#FFF3EB',c:'#C05621'};
return{t:'Componente Físico (PCS): '+p+' — déficit funcional clínicamente significativo (<42).'+mcsTxt+dimTxt,bg:'#FFF5F5',c:'#C53030'};
},
},
