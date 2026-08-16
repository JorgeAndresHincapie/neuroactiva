/* ============================================================
   REEMPLAZO DEL BLOQUE 'dash' EN ITEMS_DETALLE
   ============================================================
   Busca "'dash':{" en tu archivo, bórralo completo (hasta el "},"
   que lo cierra) y pega este en su lugar. Fuente del texto real:
   SECOT (Sociedad Española de Cirugía Ortopédica y Traumatología).
   La lógica de cálculo (calc) es la misma de siempre, no cambia.
   ============================================================ */

'dash':{
secciones:[
{n:'Cuestionario DASH — Capacidad para realizar actividades (última semana)',items:[
{t:'1. Abrir un bote de cristal nuevo',ops:[1,2,3,4,5]},
{t:'2. Escribir',ops:[1,2,3,4,5]},
{t:'3. Preparar la comida',ops:[1,2,3,4,5]},
{t:'4. Girar la llave para abrir la puerta o encender el coche',ops:[1,2,3,4,5]},
{t:'5. Empujar y abrir una puerta pesada',ops:[1,2,3,4,5]},
{t:'6. Colocar un objeto en estanterías por encima de su cabeza',ops:[1,2,3,4,5]},
{t:'7. Tareas duras de la casa (fregar el piso, limpiar paredes/cristales)',ops:[1,2,3,4,5]},
{t:'8. Arreglar el jardín o realizar trabajos en el campo',ops:[1,2,3,4,5]},
{t:'9. Hacer las camas',ops:[1,2,3,4,5]},
{t:'10. Cargar una bolsa del supermercado o llevar un maletín',ops:[1,2,3,4,5]},
{t:'11. Cargar un objeto pesado (más de 5 kg)',ops:[1,2,3,4,5]},
{t:'12. Cambiar una bombilla en el techo',ops:[1,2,3,4,5]},
{t:'13. Lavarse y secarse el pelo',ops:[1,2,3,4,5]},
{t:'14. Lavarse la espalda',ops:[1,2,3,4,5]},
{t:'15. Ponerse un jersey o un suéter',ops:[1,2,3,4,5]},
{t:'16. Usar un cuchillo para cortar alimentos',ops:[1,2,3,4,5]},
{t:'17. Actividades de poco esfuerzo (tejer, coser, cartas, dominó)',ops:[1,2,3,4,5]},
{t:'18. Actividades con algo de esfuerzo (martillo, golf, tenis, petanca)',ops:[1,2,3,4,5]},
{t:'19. Actividades que requieren mover el brazo libremente (nadar)',ops:[1,2,3,4,5]},
{t:'20. Conducir',ops:[1,2,3,4,5]},
{t:'21. Actividad sexual',ops:[1,2,3,4,5]},
{t:'22. Interferencia con su actividad social (familia, amigos, compañeros)',ops:[1,2,3,4,5]},
{t:'23. Dificultad para su trabajo u otras actividades diarias',ops:[1,2,3,4,5]},
{t:'24. Dolor en el hombro, brazo o mano',ops:[1,2,3,4,5]},
{t:'25. Dolor al realizar una actividad específica',ops:[1,2,3,4,5]},
{t:'26. Calambres, hormigueo o sensación de electricidad',ops:[1,2,3,4,5]},
{t:'27. Debilidad o falta de fuerza',ops:[1,2,3,4,5]},
{t:'28. Rigidez o falta de movilidad',ops:[1,2,3,4,5]},
{t:'29. Dificultad para dormir debido al dolor',ops:[1,2,3,4,5]},
{t:'30. "Me siento con menos capacidad, confianza y útil por este problema"',ops:[1,2,3,4,5]},
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
