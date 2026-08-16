/* ============================================================
   BLOQUE PARA PEGAR DENTRO DE ITEMS_DETALLE — amps, role-checklist
   ============================================================
   REQUIERE CAMBIO_MOTOR_grupoB.txt ya aplicado (soporte de "calc").

   AMBOS también necesitan actualizar BANCO (líneas 276 y 285):
   ANTES: {id:'amps',...,max:0,...}
   DESPUÉS: {id:'amps',...,max:100,...}  (100 = % visual, no es un total real)

   ANTES: {id:'role-checklist',...,max:0,...}
   DESPUÉS: {id:'role-checklist',...,max:30,...}  (10 roles x valor 1-3)
   ============================================================ */

'amps':{
secciones:[
{n:'Habilidades Motoras (16 ítems, escala 1-4)',items:[
{t:'Estabiliza',ops:[1,2,3,4]},{t:'Alinea',ops:[1,2,3,4]},{t:'Posiciona',ops:[1,2,3,4]},
{t:'Alcanza',ops:[1,2,3,4]},{t:'Se agacha (Flexiona)',ops:[1,2,3,4]},{t:'Agarra',ops:[1,2,3,4]},
{t:'Manipula',ops:[1,2,3,4]},{t:'Coordina',ops:[1,2,3,4]},{t:'Se mueve (a sí mismo)',ops:[1,2,3,4]},
{t:'Transporta',ops:[1,2,3,4]},{t:'Levanta',ops:[1,2,3,4]},{t:'Camina',ops:[1,2,3,4]},
{t:'Calibra (fuerza/velocidad del movimiento)',ops:[1,2,3,4]},{t:'Fluye (movimiento suave)',ops:[1,2,3,4]},
{t:'Resiste (Endurance)',ops:[1,2,3,4]},{t:'Mantiene el ritmo (Paces)',ops:[1,2,3,4]},
]},
{n:'Habilidades de Procesamiento (20 ítems, escala 1-4)',items:[
{t:'Ritmo (Paces)',ops:[1,2,3,4]},{t:'Atiende',ops:[1,2,3,4]},{t:'Considera (Heeds)',ops:[1,2,3,4]},
{t:'Elige',ops:[1,2,3,4]},{t:'Usa objetos correctamente',ops:[1,2,3,4]},{t:'Maneja objetos',ops:[1,2,3,4]},
{t:'Pregunta cuando es necesario',ops:[1,2,3,4]},{t:'Inicia',ops:[1,2,3,4]},{t:'Continúa',ops:[1,2,3,4]},
{t:'Secuencia',ops:[1,2,3,4]},{t:'Termina',ops:[1,2,3,4]},{t:'Busca / Localiza',ops:[1,2,3,4]},
{t:'Reúne materiales',ops:[1,2,3,4]},{t:'Organiza',ops:[1,2,3,4]},{t:'Restaura el entorno',ops:[1,2,3,4]},
{t:'Navega el espacio físico',ops:[1,2,3,4]},{t:'Nota y responde a señales',ops:[1,2,3,4]},
{t:'Ajusta',ops:[1,2,3,4]},{t:'Se acomoda ante dificultades',ops:[1,2,3,4]},{t:'Se beneficia de la retroalimentación',ops:[1,2,3,4]},
]},
],
calc:function(respuestas){
function sumSec(seci,n){var t=0,c=0;for(var i=0;i<n;i++){var v=respuestas[seci+'-'+i];if(typeof v==='number'){t+=v;c++;}}return {t:t,c:c};}
var motor=sumSec(0,16), proceso=sumSec(1,20);
var pctMotor=motor.c>0?Math.round(((motor.t-motor.c)/(motor.c*3))*100):0;
var pctProceso=proceso.c>0?Math.round(((proceso.t-proceso.c)/(proceso.c*3))*100):0;
var promedio=Math.round((pctMotor+pctProceso)/2);
window._amps_ultimo={motorBruto:motor.t,procesoBruto:proceso.t,pctMotor:pctMotor,pctProceso:pctProceso};
return promedio;
},
interp:function(p){
var d=window._amps_ultimo||{};
var detalle=' | Motor: '+d.motorBruto+'/64 ('+d.pctMotor+'%), Procesamiento: '+d.procesoBruto+'/80 ('+d.pctProceso+'%)';
var nota=' (El AMPS no arroja un total combinado oficial — este % es un promedio visual de referencia.)';
return{t:'Promedio visual: '+p+'%'+detalle+nota,bg:p>=70?'#E8F5F0':p>=40?'#FFF3EB':'#FFF5F5',c:p>=70?'#1A7A5E':p>=40?'#C05621':'#C53030'};
},
},
'role-checklist':{
secciones:[
{n:'Rol 1: Estudiante',items:[{t:'Pasado',ops:[0,1]},{t:'Presente',ops:[0,1]},{t:'Futuro',ops:[0,1]},{t:'Valor (1=Nada valioso, 3=Muy valioso)',ops:[1,2,3]}]},
{n:'Rol 2: Trabajador',items:[{t:'Pasado',ops:[0,1]},{t:'Presente',ops:[0,1]},{t:'Futuro',ops:[0,1]},{t:'Valor',ops:[1,2,3]}]},
{n:'Rol 3: Voluntario',items:[{t:'Pasado',ops:[0,1]},{t:'Presente',ops:[0,1]},{t:'Futuro',ops:[0,1]},{t:'Valor',ops:[1,2,3]}]},
{n:'Rol 4: Cuidador',items:[{t:'Pasado',ops:[0,1]},{t:'Presente',ops:[0,1]},{t:'Futuro',ops:[0,1]},{t:'Valor',ops:[1,2,3]}]},
{n:'Rol 5: Proveedor de Hogar',items:[{t:'Pasado',ops:[0,1]},{t:'Presente',ops:[0,1]},{t:'Futuro',ops:[0,1]},{t:'Valor',ops:[1,2,3]}]},
{n:'Rol 6: Amigo',items:[{t:'Pasado',ops:[0,1]},{t:'Presente',ops:[0,1]},{t:'Futuro',ops:[0,1]},{t:'Valor',ops:[1,2,3]}]},
{n:'Rol 7: Miembro de Familia',items:[{t:'Pasado',ops:[0,1]},{t:'Presente',ops:[0,1]},{t:'Futuro',ops:[0,1]},{t:'Valor',ops:[1,2,3]}]},
{n:'Rol 8: Aficionado / Ocio',items:[{t:'Pasado',ops:[0,1]},{t:'Presente',ops:[0,1]},{t:'Futuro',ops:[0,1]},{t:'Valor',ops:[1,2,3]}]},
{n:'Rol 9: Miembro de Organización',items:[{t:'Pasado',ops:[0,1]},{t:'Presente',ops:[0,1]},{t:'Futuro',ops:[0,1]},{t:'Valor',ops:[1,2,3]}]},
{n:'Rol 10: Ciudadano',items:[{t:'Pasado',ops:[0,1]},{t:'Presente',ops:[0,1]},{t:'Futuro',ops:[0,1]},{t:'Valor',ops:[1,2,3]}]},
],
calc:function(respuestas){
var nombres=['Estudiante','Trabajador','Voluntario','Cuidador','Proveedor de Hogar','Amigo','Miembro de Familia','Aficionado/Ocio','Miembro de Organización','Ciudadano'];
var totalValor=0,evaluados=0,perdidos=[],deseados=[];
for(var i=0;i<10;i++){
var pasado=respuestas[i+'-0'], presente=respuestas[i+'-1'], futuro=respuestas[i+'-2'], valor=respuestas[i+'-3'];
if(typeof valor==='number'){
totalValor+=valor; evaluados++;
if(valor>=2 && pasado===1 && presente!==1 && futuro!==1) perdidos.push(nombres[i]);
if(futuro===1 && valor===3) deseados.push(nombres[i]);
}
}
window._role_ultimo={perdidos:perdidos,deseados:deseados,evaluados:evaluados};
return totalValor;
},
interp:function(p){
var d=window._role_ultimo||{};
var perdidosTxt=d.perdidos&&d.perdidos.length?(' | Roles perdidos: '+d.perdidos.join(', ')):' | Sin roles perdidos detectados';
var deseadosTxt=d.deseados&&d.deseados.length?(' | Roles futuros deseados: '+d.deseados.join(', ')):'';
if(p>=24)return{t:'Valoración total: '+p+'/30 — Alta valoración e implicación en roles ocupacionales.'+perdidosTxt+deseadosTxt,bg:'#E8F5F0',c:'#1A7A5E'};
if(p>=17)return{t:'Valoración total: '+p+'/30 — Implicación moderada en roles.'+perdidosTxt+deseadosTxt,bg:'#FFF3EB',c:'#C05621'};
return{t:'Valoración total: '+p+'/30 — Baja implicación en roles ocupacionales. Explorar causas de desconexión.'+perdidosTxt+deseadosTxt,bg:'#FFF5F5',c:'#C53030'};
},
},
