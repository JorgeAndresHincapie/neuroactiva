/* ============================================================
   BLOQUE PARA PEGAR DENTRO DE ITEMS_DETALLE — LOTCA (Grupo B)
   ============================================================
   REQUIERE CAMBIO_MOTOR_grupoB.txt ya aplicado.
   El LOTCA NO se debe sumar (5 áreas independientes). El
   "puntaje" mostrado es un % promedio SOLO visual.
   ============================================================ */

'lotca':{
secciones:[
{n:'Área 1: Orientación (máx. 8)',items:[
{t:'O1. Orientación Espacial',ops:[1,2,3,4]},
{t:'O2. Orientación Temporal',ops:[1,2,3,4]},
]},
{n:'Área 2: Percepción Visual y Espacial (máx. 24)',items:[
{t:'PV1. Identificación de Objetos',ops:[1,2,3,4]},
{t:'PV2. Identificación de Formas',ops:[1,2,3,4]},
{t:'PV3. Figuras Fondo',ops:[1,2,3,4]},
{t:'PV4. Constancia de Objeto',ops:[1,2,3,4]},
{t:'PE1. Esquema Corporal',ops:[1,2,3,4]},
{t:'PE2. Relaciones en el Espacio',ops:[1,2,3,4]},
]},
{n:'Área 3: Praxis (máx. 12)',items:[
{t:'PR1. Imitación Motora',ops:[1,2,3,4]},
{t:'PR2. Utilización de Objetos',ops:[1,2,3,4]},
{t:'PR3. Acciones Secuenciales',ops:[1,2,3,4]},
]},
{n:'Área 4: Organización Visomotor (máx. 25)',items:[
{t:'VM1. Copia de Formas Geométricas',ops:[1,2,3,4]},
{t:'VM2. Reproducción 2D',ops:[1,2,3,4]},
{t:'VM3. Construcción 3D',ops:[1,2,3,4,5]},
{t:'VM4. Construcción con Bloques',ops:[1,2,3,4]},
{t:'VM5. Rompecabezas',ops:[1,2,3,4]},
{t:'VM6. Dibujo de un Objeto Común',ops:[1,2,3,4]},
]},
{n:'Área 5: Pensamiento y Razonamiento (máx. 13)',items:[
{t:'OP1. Categorización',ops:[1,2,3,4]},
{t:'OP2. Secuencias Lógicas',ops:[1,2,3,4,5]},
{t:'OP3. Razonamiento Geométrico',ops:[1,2,3,4]},
]},
],
calc:function(respuestas){
function sumSec(seci,n){var t=0;for(var i=0;i<n;i++){t+=respuestas[seci+'-'+i]||0;}return t;}
var orientacion=sumSec(0,2),percepcion=sumSec(1,6),praxis=sumSec(2,3),visomotor=sumSec(3,6),pensamiento=sumSec(4,3);
var pct=Math.round(((orientacion/8)+(percepcion/24)+(praxis/12)+(visomotor/25)+(pensamiento/13))/5*100);
window._lotca_ultimo={orientacion:orientacion,percepcion:percepcion,praxis:praxis,visomotor:visomotor,pensamiento:pensamiento};
return pct;
},
interp:function(p){
var d=window._lotca_ultimo||{};
var detalle=' | Orientación: '+d.orientacion+'/8, Percepción: '+d.percepcion+'/24, Praxis: '+d.praxis+'/12, Visomotor: '+d.visomotor+'/25, Pensamiento: '+d.pensamiento+'/13';
var nota=' (El LOTCA no se suma en un total único — usar el perfil por área para el diagnóstico real.)';
return{t:'Promedio visual: '+p+'%'+detalle+nota,bg:p>=70?'#E8F5F0':p>=40?'#FFF3EB':'#FFF5F5',c:p>=70?'#1A7A5E':p>=40?'#C05621':'#C53030'};
},
},
