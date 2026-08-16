/* ============================================================
   BLOQUE PARA PEGAR DENTRO DE ITEMS_DETALLE — sppb-h, odi-h
   ============================================================
   Versiones acuáticas adaptadas de SPPB y ODI (Fisioterapia),
   mismo puntaje máximo que sus versiones terrestres. cpet-h se
   queda en max:0 (campo libre), no necesita ITEMS_DETALLE.
   ============================================================ */

'sppb-h':{
secciones:[
{n:'Batería Corta de Desempeño Físico — Adaptación Acuática',items:[
{t:'Equilibrio en tándem dentro del agua (4 pts)',ops:[0,1,2,3,4]},
{t:'Velocidad de desplazamiento 4m en agua (4 pts)',ops:[0,1,2,3,4]},
{t:'5 levantadas asistidas desde banco sumergido (4 pts)',ops:[0,1,2,3,4]},
]},
],
interp:(p)=>p<=6?{t:'Alto riesgo de discapacidad funcional, incluso con el soporte del agua.',bg:'#FFF5F5',c:'#C53030'}:p<=9?{t:'Riesgo moderado.',bg:'#FFF3EB',c:'#C05621'}:{t:'Función física global preservada en el medio acuático.',bg:'#E8F5F0',c:'#1A7A5E'},
},
'odi-h':{
secciones:[
{n:'Oswestry Disability Index — Adaptación Hidroterapia (cada ítem 0-10)',items:[
{t:'Intensidad del dolor durante el ejercicio en agua',ops:[0,2,4,6,8,10]},
{t:'Cuidado personal',ops:[0,2,4,6,8,10]},
{t:'Levantar peso',ops:[0,2,4,6,8,10]},
{t:'Caminar (en tierra)',ops:[0,2,4,6,8,10]},
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
