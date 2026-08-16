/* ============================================================
   BLOQUE PARA PEGAR DENTRO DE ITEMS_DETALLE — WAB (Grupo B)
   ============================================================
   REQUIERE CAMBIO_MOTOR_grupoB.txt ya aplicado.
   AQ (Cociente de Afasia) 0-100, con la corrección ya validada
   (E sin dividir entre 2).
   ============================================================ */

'wab':{
secciones:[
{n:'Subtest 1: Lenguaje Espontáneo',items:[
{t:'W1. Contenido (capacidad informativa)',ops:[0,2,4,6,8,10]},
{t:'W2. Fluidez (ritmo, parafasias, esfuerzo articulatorio)',ops:[0,2,4,6,8,10]},
]},
{n:'Subtest 2: Comprensión Auditiva Verbal',items:[
{t:'W3. Preguntas Sí/No',ops:[0,10,20,30,40,50,60]},
{t:'W4. Discriminación (objetos, formas, colores)',ops:[0,10,20,30,40,50,60]},
{t:'W5. Órdenes secuenciales',ops:[0,15,30,45,60,80]},
]},
{n:'Subtest 3: Repetición',items:[
{t:'W6. Repetir palabras, pseudopalabras y oraciones',ops:[0,20,40,60,80,100]},
]},
{n:'Subtest 4: Denominación y Palabra Encontrada',items:[
{t:'W7. Nombrar 20 objetos',ops:[0,10,20,30,40,50,60]},
{t:'W8. Fluidez verbal (animales en 60s)',ops:[0,5,10,15,20]},
{t:'W9. Completar frases familiares',ops:[0,2,4,6,8,10]},
{t:'W10. Responder con una palabra exacta',ops:[0,2,4,6,8,10]},
]},
],
calc:function(respuestas){
function v(k){return respuestas[k]||0;}
var w1=v('0-0'),w2=v('0-1');
var w3=v('1-0'),w4=v('1-1'),w5=v('1-2');
var w6=v('2-0');
var w7=v('3-0'),w8=v('3-1'),w9=v('3-2'),w10=v('3-3');

var E=w1+w2; // sin dividir entre 2 (corrección validada)
var C=(w3+w4+w5)/20;
var R=w6/10;
var D=(w7+w8+w9+w10)/10;
var AQ=Math.round((E+C+R+D)*2*10)/10;

var esFluido=w2>=5;
var tipo;
if(!esFluido){
if(C<=3.9){tipo=R<=4.9?'Afasia Global':'Afasia Transcortical Mixta';}
else{tipo=R<=7.9?'Afasia de Broca':'Afasia Transcortical Motora';}
}else{
if(C<=6.9){tipo=R<=6.9?'Afasia de Wernicke':'Afasia Transcortical Sensorial';}
else{tipo=R<=6.9?'Afasia de Conducción':'Afasia Anómica';}
}

window._wab_ultimo={E:E,C:Math.round(C*10)/10,R:Math.round(R*10)/10,D:Math.round(D*10)/10,tipo:tipo};

return AQ;
},
interp:function(p){
var d=window._wab_ultimo||{};
var tipoTxt=d.tipo?(' — Tipo: '+d.tipo):'';
if(p>=93.8)return{t:'AQ: '+p+' — Dentro de la normalidad, no cumple criterios de afasia clínica.'+tipoTxt,bg:'#E8F5F0',c:'#1A7A5E'};
if(p>=76.0)return{t:'AQ: '+p+' — Afasia Leve.'+tipoTxt,bg:'#E8F5F0',c:'#1A7A5E'};
if(p>=51.0)return{t:'AQ: '+p+' — Afasia Moderada.'+tipoTxt,bg:'#FFF3EB',c:'#C05621'};
if(p>=26.0)return{t:'AQ: '+p+' — Afasia Severa.'+tipoTxt,bg:'#FFF5F5',c:'#C53030'};
return{t:'AQ: '+p+' — Afasia Muy Severa/Crítica.'+tipoTxt,bg:'#FFF5F5',c:'#C53030'};
},
},
