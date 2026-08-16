/* ============================================================
   BLOQUE PARA PEGAR DENTRO DE ITEMS_DETALLE — BDAE (Grupo B)
   ============================================================
   REQUIERE CAMBIO_MOTOR_grupoB.txt ya aplicado.
   El BDAE NO tiene un total único válido (subtotales vectoriales
   por área). El "puntaje" que se muestra es un % promedio de las
   4 áreas cuantificables, SOLO para la barra visual — el detalle
   real (subtotales) va en el texto de interp.
   ============================================================ */

'boston':{
secciones:[
{n:'Área 1: Habla Conversacional (perfil 1-7, no se suma)',items:[
{t:'H1. Fluidez',ops:[1,2,3,4,5,6,7]},
{t:'H2. Agilidad Articulatoria',ops:[1,2,3,4,5,6,7]},
{t:'H3. Melodía',ops:[1,2,3,4,5,6,7]},
{t:'H4. Parafasias',ops:[1,2,3,4,5,6,7]},
{t:'H5. Forma Gramatical',ops:[1,2,3,4,5,6,7]},
{t:'H6. Encontrar Palabras',ops:[1,2,3,4,5,6,7]},
]},
{n:'Área 2: Comprensión Auditiva',items:[
{t:'CA1. Discriminación de Palabras (máx. 72)',ops:[0,18,36,54,72]},
{t:'CA2. Identificación de Partes del Cuerpo (máx. 18)',ops:[0,6,12,18]},
{t:'CA3. Órdenes (máx. 15)',ops:[0,5,10,15]},
{t:'CA4. Material Ideacional Complejo (máx. 12)',ops:[0,4,8,12]},
]},
{n:'Área 3: Expresión Oral',items:[
{t:'EO1. Agilidad Vocal (máx. 14)',ops:[0,7,14]},
{t:'EO2. Secuencias Automatizadas (máx. 8)',ops:[0,4,8]},
{t:'EO3. Repetición (máx. 16)',ops:[0,8,16]},
{t:'EO4. Denominación por Confrontación (máx. 105)',ops:[0,35,70,105]},
{t:'EO5. Denominación de Partes del Cuerpo (máx. 30, NO entra en el total)',ops:[0,15,30]},
]},
{n:'Área 4: Lectura',items:[
{t:'LE1. Lectura de Palabras (máx. 10)',ops:[0,5,10]},
{t:'LE2. Comprensión de Oraciones (máx. 10)',ops:[0,5,10]},
]},
{n:'Área 5: Escritura',items:[
{t:'ES1. Mecánica de la Escritura (máx. 3)',ops:[0,1,2,3]},
{t:'ES2. Escritura Seriada (máx. 47)',ops:[0,15,31,47]},
{t:'ES3. Expresión Escrita (máx. 50)',ops:[0,17,33,50]},
]},
],
calc:function(respuestas){
function v(k){return respuestas[k]||0;}
var h1=v('0-0');
var subtotalComprension=v('1-0')+v('1-1')+v('1-2')+v('1-3');
var subtotalExpresion=v('2-0')+v('2-1')+v('2-2')+v('2-3');
var subtotalLectura=v('3-0')+v('3-1');
var subtotalEscritura=v('4-0')+v('4-1')+v('4-2');

var pctComprension=Math.round((subtotalComprension/117)*100);
var pctExpresion=Math.round((subtotalExpresion/143)*100);
var pctLectura=Math.round((subtotalLectura/20)*100);
var pctEscritura=Math.round((subtotalEscritura/100)*100);
var promedioVisual=Math.round((pctComprension+pctExpresion+pctLectura+pctEscritura)/4);

window._bdae_ultimo={
subtotalComprension:subtotalComprension,subtotalExpresion:subtotalExpresion,
subtotalLectura:subtotalLectura,subtotalEscritura:subtotalEscritura,
h1:h1
};
return promedioVisual;
},
interp:function(p){
var d=window._bdae_ultimo||{};
var detalle=' | Comprensión: '+d.subtotalComprension+'/117, Expresión: '+d.subtotalExpresion+'/143, Lectura: '+d.subtotalLectura+'/20, Escritura: '+d.subtotalEscritura+'/100';
var nota=' (El BDAE no se resume en un solo total clínico válido — este % es solo referencial para la barra visual; usar los subtotales por área para el diagnóstico real.)';
if(p>=70)return{t:'Promedio visual: '+p+'%'+detalle+nota,bg:'#E8F5F0',c:'#1A7A5E'};
if(p>=40)return{t:'Promedio visual: '+p+'%'+detalle+nota,bg:'#FFF3EB',c:'#C05621'};
return{t:'Promedio visual: '+p+'%'+detalle+nota,bg:'#FFF5F5',c:'#C53030'};
},
},
