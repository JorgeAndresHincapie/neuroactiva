/* ============================================================
   BLOQUE PARA PEGAR DENTRO DE ITEMS_DETALLE (Fisioterapia, tanda 2)
   ============================================================
   PEGAR justo antes del "};" final que cierra ITEMS_DETALLE
   (igual que la tanda anterior — al final de todo el objeto).

   De las 18 pruebas solicitadas, 7 ya estaban correctamente como
   campo libre en tu BANCO (tug, 6mwt, 10mwt, handgrip, sts, cpet,
   iswt) — no necesitan formulario. Aquí van las 11 restantes.

   DASH usa "calc" (requiere el cambio de recalcular() que ya
   aplicaste antes — no hace falta repetirlo).
   ============================================================ */

'fugl-sens':{
secciones:[
{n:'Sensibilidad Táctil Superficial (0=Ausente, 1=Disminuida/Hiperestesia, 2=Normal)',items:[
{t:'Hombro',ops:[0,1,2]},{t:'Codo',ops:[0,1,2]},{t:'Muñeca',ops:[0,1,2]},
{t:'Cadera',ops:[0,1,2]},{t:'Rodilla',ops:[0,1,2]},{t:'Tobillo',ops:[0,1,2]},
]},
{n:'Sensibilidad Propioceptiva (0=Ausente, 1=Disminuida, 2=Normal)',items:[
{t:'Hombro',ops:[0,1,2]},{t:'Codo',ops:[0,1,2]},{t:'Muñeca',ops:[0,1,2]},
{t:'Cadera',ops:[0,1,2]},{t:'Rodilla',ops:[0,1,2]},{t:'Tobillo',ops:[0,1,2]},
]},
],
interp:(p)=>p>=20?{t:'Sensibilidad conservada.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=12?{t:'Déficit sensorial moderado.',bg:'#FFF3EB',c:'#C05621'}:{t:'Déficit sensorial severo. Alto riesgo de lesiones por falta de propiocepción.',bg:'#FFF5F5',c:'#C53030'},
},
'daniels':{
secciones:[
{n:'Escala de Fuerza Muscular (Test de Daniels) — indicar grupo muscular en Observaciones',items:[
{t:'Grado de fuerza muscular',ops:[0,1,2,3,4,5]},
]},
],
interp:(p)=>p===5?{t:'Fuerza normal.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=3?{t:'Fuerza contra gravedad, con o sin resistencia parcial.',bg:'#FFF3EB',c:'#C05621'}:{t:'Fuerza insuficiente para vencer gravedad.',bg:'#FFF5F5',c:'#C53030'},
},
'eva':{
secciones:[
{n:'Escala Visual Analógica del Dolor (0=Sin dolor, 10=Peor dolor imaginable)',items:[
{t:'Intensidad del dolor',ops:[0,1,2,3,4,5,6,7,8,9,10]},
]},
],
interp:(p)=>p===0?{t:'Sin dolor.',bg:'#E8F5F0',c:'#1A7A5E'}:p<=3?{t:'Dolor leve.',bg:'#E8F5F0',c:'#1A7A5E'}:p<=6?{t:'Dolor moderado.',bg:'#FFF3EB',c:'#C05621'}:{t:'Dolor severo.',bg:'#FFF5F5',c:'#C53030'},
},
'brunnstrom':{
secciones:[
{n:'Estadios de Recuperación Motora',items:[
{t:'Estadio actual',ops:[1,2,3,4,5,6]},
]},
],
interp:(p)=>p<=2?{t:'Flacidez / Espasticidad inicial.',bg:'#FFF5F5',c:'#C53030'}:p<=4?{t:'Espasticidad máxima a movimiento voluntario emergente.',bg:'#FFF3EB',c:'#C05621'}:{t:'Independencia de sinergias / Coordinación casi normal.',bg:'#E8F5F0',c:'#1A7A5E'},
},
'mas':{
secciones:[
{n:'Motor Assessment Scale (0-6 por ítem)',items:[
{t:'1. Supino a decúbito lateral',ops:[0,1,2,3,4,5,6]},
{t:'2. Supino a sentado en el borde de la cama',ops:[0,1,2,3,4,5,6]},
{t:'3. Equilibrio en sedestación',ops:[0,1,2,3,4,5,6]},
{t:'4. Sentado a de pie',ops:[0,1,2,3,4,5,6]},
{t:'5. Marcha',ops:[0,1,2,3,4,5,6]},
{t:'6. Función del brazo (alcance y prensión)',ops:[0,1,2,3,4,5,6]},
{t:'7. Movimiento de la mano',ops:[0,1,2,3,4,5,6]},
{t:'8. Actividades avanzadas de la mano',ops:[0,1,2,3,4,5,6]},
]},
],
interp:(p)=>p>=40?{t:'Función motora global alta.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=20?{t:'Función motora moderada.',bg:'#FFF3EB',c:'#C05621'}:{t:'Función motora severamente comprometida.',bg:'#FFF5F5',c:'#C53030'},
},
'dash':{
secciones:[
{n:'Cuestionario DASH (30 ítems, escala 1-5 cada uno)',items:[
{t:'Ítem 1',ops:[1,2,3,4,5]},{t:'Ítem 2',ops:[1,2,3,4,5]},{t:'Ítem 3',ops:[1,2,3,4,5]},
{t:'Ítem 4',ops:[1,2,3,4,5]},{t:'Ítem 5',ops:[1,2,3,4,5]},{t:'Ítem 6',ops:[1,2,3,4,5]},
{t:'Ítem 7',ops:[1,2,3,4,5]},{t:'Ítem 8',ops:[1,2,3,4,5]},{t:'Ítem 9',ops:[1,2,3,4,5]},
{t:'Ítem 10',ops:[1,2,3,4,5]},{t:'Ítem 11',ops:[1,2,3,4,5]},{t:'Ítem 12',ops:[1,2,3,4,5]},
{t:'Ítem 13',ops:[1,2,3,4,5]},{t:'Ítem 14',ops:[1,2,3,4,5]},{t:'Ítem 15',ops:[1,2,3,4,5]},
{t:'Ítem 16',ops:[1,2,3,4,5]},{t:'Ítem 17',ops:[1,2,3,4,5]},{t:'Ítem 18',ops:[1,2,3,4,5]},
{t:'Ítem 19',ops:[1,2,3,4,5]},{t:'Ítem 20',ops:[1,2,3,4,5]},{t:'Ítem 21',ops:[1,2,3,4,5]},
{t:'Ítem 22',ops:[1,2,3,4,5]},{t:'Ítem 23',ops:[1,2,3,4,5]},{t:'Ítem 24',ops:[1,2,3,4,5]},
{t:'Ítem 25',ops:[1,2,3,4,5]},{t:'Ítem 26',ops:[1,2,3,4,5]},{t:'Ítem 27',ops:[1,2,3,4,5]},
{t:'Ítem 28',ops:[1,2,3,4,5]},{t:'Ítem 29',ops:[1,2,3,4,5]},{t:'Ítem 30',ops:[1,2,3,4,5]},
]},
],
calc:function(respuestas){
var n=0,suma=0;
for(var i=0;i<30;i++){var v=respuestas['0-'+i];if(typeof v==='number'){suma+=v;n++;}}
if(n===0)return 0;
return Math.round(((suma/n)-1)*25*10)/10;
},
interp:function(p){
if(p<=20)return{t:'DASH: '+p+' — Discapacidad mínima.',bg:'#E8F5F0',c:'#1A7A5E'};
if(p<=50)return{t:'DASH: '+p+' — Discapacidad moderada.',bg:'#FFF3EB',c:'#C05621'};
return{t:'DASH: '+p+' — Discapacidad severa del miembro superior.',bg:'#FFF5F5',c:'#C53030'};
},
},
'rivermead':{
secciones:[
{n:'Función Gruesa (13 ítems)',items:[
{t:'Ítem G1',ops:[0,1]},{t:'Ítem G2',ops:[0,1]},{t:'Ítem G3',ops:[0,1]},{t:'Ítem G4',ops:[0,1]},
{t:'Ítem G5',ops:[0,1]},{t:'Ítem G6',ops:[0,1]},{t:'Ítem G7',ops:[0,1]},{t:'Ítem G8',ops:[0,1]},
{t:'Ítem G9',ops:[0,1]},{t:'Ítem G10',ops:[0,1]},{t:'Ítem G11',ops:[0,1]},{t:'Ítem G12',ops:[0,1]},{t:'Ítem G13',ops:[0,1]},
]},
{n:'Pierna y Tronco (10 ítems)',items:[
{t:'Ítem PT1',ops:[0,1]},{t:'Ítem PT2',ops:[0,1]},{t:'Ítem PT3',ops:[0,1]},{t:'Ítem PT4',ops:[0,1]},{t:'Ítem PT5',ops:[0,1]},
{t:'Ítem PT6',ops:[0,1]},{t:'Ítem PT7',ops:[0,1]},{t:'Ítem PT8',ops:[0,1]},{t:'Ítem PT9',ops:[0,1]},{t:'Ítem PT10',ops:[0,1]},
]},
{n:'Brazo (15 ítems)',items:[
{t:'Ítem B1',ops:[0,1]},{t:'Ítem B2',ops:[0,1]},{t:'Ítem B3',ops:[0,1]},{t:'Ítem B4',ops:[0,1]},{t:'Ítem B5',ops:[0,1]},
{t:'Ítem B6',ops:[0,1]},{t:'Ítem B7',ops:[0,1]},{t:'Ítem B8',ops:[0,1]},{t:'Ítem B9',ops:[0,1]},{t:'Ítem B10',ops:[0,1]},
{t:'Ítem B11',ops:[0,1]},{t:'Ítem B12',ops:[0,1]},{t:'Ítem B13',ops:[0,1]},{t:'Ítem B14',ops:[0,1]},{t:'Ítem B15',ops:[0,1]},
]},
],
interp:(p)=>p>=30?{t:'Recuperación motora global alta.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=15?{t:'Recuperación motora moderada.',bg:'#FFF3EB',c:'#C05621'}:{t:'Recuperación motora severamente limitada.',bg:'#FFF5F5',c:'#C53030'},
},
'sppb':{
secciones:[
{n:'Batería Corta de Desempeño Físico',items:[
{t:'Equilibrio en tándem (4 pts)',ops:[0,1,2,3,4]},
{t:'Velocidad de marcha 4m (4 pts)',ops:[0,1,2,3,4]},
{t:'5 levantadas de silla (4 pts)',ops:[0,1,2,3,4]},
]},
],
interp:(p)=>p<=6?{t:'Alto riesgo de discapacidad.',bg:'#FFF5F5',c:'#C53030'}:p<=9?{t:'Riesgo moderado.',bg:'#FFF3EB',c:'#C05621'}:{t:'Función física preservada.',bg:'#E8F5F0',c:'#1A7A5E'},
},
'odi':{
secciones:[
{n:'Oswestry Disability Index (cada ítem convertido a %, 0-10 por ítem)',items:[
{t:'Intensidad del dolor',ops:[0,2,4,6,8,10]},
{t:'Cuidado personal',ops:[0,2,4,6,8,10]},
{t:'Levantar peso',ops:[0,2,4,6,8,10]},
{t:'Caminar',ops:[0,2,4,6,8,10]},
{t:'Sentarse',ops:[0,2,4,6,8,10]},
{t:'Estar de pie',ops:[0,2,4,6,8,10]},
{t:'Dormir',ops:[0,2,4,6,8,10]},
{t:'Vida sexual',ops:[0,2,4,6,8,10]},
{t:'Vida social',ops:[0,2,4,6,8,10]},
{t:'Viajar',ops:[0,2,4,6,8,10]},
]},
],
interp:(p)=>p<=20?{t:'Discapacidad mínima.',bg:'#E8F5F0',c:'#1A7A5E'}:p<=40?{t:'Discapacidad moderada.',bg:'#FFF3EB',c:'#C05621'}:p<=60?{t:'Discapacidad severa.',bg:'#FFF3EB',c:'#C05621'}:p<=80?{t:'Discapacidad muy severa.',bg:'#FFF5F5',c:'#C53030'}:{t:'Postración / Exageración de síntomas a valorar.',bg:'#FFF5F5',c:'#C53030'},
},
'rmdq':{
secciones:[
{n:'Roland-Morris (marcar si la afirmación aplica hoy)',items:[
{t:'Ítem 1',ops:[0,1]},{t:'Ítem 2',ops:[0,1]},{t:'Ítem 3',ops:[0,1]},{t:'Ítem 4',ops:[0,1]},
{t:'Ítem 5',ops:[0,1]},{t:'Ítem 6',ops:[0,1]},{t:'Ítem 7',ops:[0,1]},{t:'Ítem 8',ops:[0,1]},
{t:'Ítem 9',ops:[0,1]},{t:'Ítem 10',ops:[0,1]},{t:'Ítem 11',ops:[0,1]},{t:'Ítem 12',ops:[0,1]},
{t:'Ítem 13',ops:[0,1]},{t:'Ítem 14',ops:[0,1]},{t:'Ítem 15',ops:[0,1]},{t:'Ítem 16',ops:[0,1]},
{t:'Ítem 17',ops:[0,1]},{t:'Ítem 18',ops:[0,1]},{t:'Ítem 19',ops:[0,1]},{t:'Ítem 20',ops:[0,1]},
{t:'Ítem 21',ops:[0,1]},{t:'Ítem 22',ops:[0,1]},{t:'Ítem 23',ops:[0,1]},{t:'Ítem 24',ops:[0,1]},
]},
],
interp:(p)=>p<=8?{t:'Discapacidad leve por dolor lumbar.',bg:'#E8F5F0',c:'#1A7A5E'}:p<=16?{t:'Discapacidad moderada.',bg:'#FFF3EB',c:'#C05621'}:{t:'Discapacidad severa por dolor lumbar.',bg:'#FFF5F5',c:'#C53030'},
},
'womac':{
secciones:[
{n:'Dolor (5 ítems, 0-4 c/u)',items:[
{t:'Al caminar',ops:[0,1,2,3,4]},{t:'Al subir/bajar escaleras',ops:[0,1,2,3,4]},
{t:'Nocturno en cama',ops:[0,1,2,3,4]},{t:'Sentado o acostado',ops:[0,1,2,3,4]},{t:'De pie',ops:[0,1,2,3,4]},
]},
{n:'Rigidez (2 ítems, 0-4 c/u)',items:[
{t:'Rigidez matutina',ops:[0,1,2,3,4]},{t:'Rigidez tras estar sentado/reposo',ops:[0,1,2,3,4]},
]},
{n:'Función Física (17 ítems, 0-4 c/u)',items:[
{t:'Bajar escaleras',ops:[0,1,2,3,4]},{t:'Subir escaleras',ops:[0,1,2,3,4]},
{t:'Levantarse sentado',ops:[0,1,2,3,4]},{t:'Estar de pie',ops:[0,1,2,3,4]},
{t:'Agacharse al suelo',ops:[0,1,2,3,4]},{t:'Caminar en llano',ops:[0,1,2,3,4]},
{t:'Entrar/salir del carro',ops:[0,1,2,3,4]},{t:'Ir de compras',ops:[0,1,2,3,4]},
{t:'Ponerse medias',ops:[0,1,2,3,4]},{t:'Levantarse de la cama',ops:[0,1,2,3,4]},
{t:'Quitarse medias',ops:[0,1,2,3,4]},{t:'Acostarse en la cama',ops:[0,1,2,3,4]},
{t:'Entrar/salir de la ducha',ops:[0,1,2,3,4]},{t:'Sentarse',ops:[0,1,2,3,4]},
{t:'Sentarse/levantarse del inodoro',ops:[0,1,2,3,4]},{t:'Tareas domésticas pesadas',ops:[0,1,2,3,4]},
{t:'Tareas domésticas ligeras',ops:[0,1,2,3,4]},
]},
],
interp:(p)=>p<=24?{t:'Afectación articular leve.',bg:'#E8F5F0',c:'#1A7A5E'}:p<=60?{t:'Afectación moderada.',bg:'#FFF3EB',c:'#C05621'}:{t:'Afectación articular severa.',bg:'#FFF5F5',c:'#C53030'},
},
'rmi':{
secciones:[
{n:'Rivermead Mobility Index (15 ítems, Sí=1/No=0)',items:[
{t:'Girarse en la cama',ops:[0,1]},{t:'De tumbado a sentado',ops:[0,1]},
{t:'Equilibrio en sedestación',ops:[0,1]},{t:'De sentado a de pie',ops:[0,1]},
{t:'De pie sin apoyo',ops:[0,1]},{t:'Transferencias',ops:[0,1]},
{t:'Caminar en interiores con ayuda',ops:[0,1]},{t:'Subir escaleras',ops:[0,1]},
{t:'Caminar en exteriores (terreno plano)',ops:[0,1]},{t:'Caminar en interiores sin ayuda',ops:[0,1]},
{t:'Recoger un objeto del suelo',ops:[0,1]},{t:'Caminar en exteriores (terreno irregular)',ops:[0,1]},
{t:'Bañarse solo',ops:[0,1]},{t:'Subir y bajar 4 escalones',ops:[0,1]},{t:'Correr',ops:[0,1]},
]},
],
interp:(p)=>p>=12?{t:'Movilidad funcional alta.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=6?{t:'Movilidad funcional moderada.',bg:'#FFF3EB',c:'#C05621'}:{t:'Movilidad funcional severamente limitada.',bg:'#FFF5F5',c:'#C53030'},
},
'constant-murley':{
secciones:[
{n:'Dolor',items:[
{t:'Nivel de dolor',ops:[0,5,10,15]},
]},
{n:'Actividades de la Vida Diaria',items:[
{t:'Trabajo',ops:[0,1,2,3,4]},
{t:'Ocio/Recreación',ops:[0,1,2,3,4]},
{t:'Sueño',ops:[0,1,2]},
{t:'Posicionamiento de la mano en actividades',ops:[0,2,4,6,8,10]},
]},
{n:'Rango de Movimiento',items:[
{t:'Elevación anterior',ops:[0,2,4,6,8,10]},
{t:'Abducción',ops:[0,2,4,6,8,10]},
{t:'Rotación externa',ops:[0,2,4,6,8,10]},
{t:'Rotación interna',ops:[0,2,4,6,8,10]},
]},
{n:'Fuerza',items:[
{t:'Fuerza muscular (0-25)',ops:[0,5,10,15,20,25]},
]},
],
interp:(p)=>p>=80?{t:'Función de hombro excelente.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=60?{t:'Función de hombro buena/aceptable.',bg:'#FFF3EB',c:'#C05621'}:{t:'Función de hombro pobre.',bg:'#FFF5F5',c:'#C53030'},
},
