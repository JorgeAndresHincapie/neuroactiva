// ============================================================
// LOTE 10 — Psicología (resto) — cierra la especialidad
// ============================================================

'hamilton':{
secciones:[
{n:'Síntomas principales (0=Ausente, 4=Máxima gravedad)',items:[
{t:'Estado de ánimo depresivo (tristeza, desesperanza)',ops:[0,1,2,3,4]},
{t:'Sentimientos de culpa',ops:[0,1,2,3,4]},
{t:'Ideación o conducta suicida',ops:[0,1,2,3,4]},
{t:'Trabajo y actividades (interés, capacidad)',ops:[0,1,2,3,4]},
{t:'Inhibición psicomotora (lentitud de pensamiento y habla)',ops:[0,1,2,3,4]},
{t:'Agitación psicomotora',ops:[0,1,2,3,4]},
{t:'Ansiedad psíquica',ops:[0,1,2,3,4]},
{t:'Ansiedad somática',ops:[0,1,2,3,4]},
{t:'Hipocondría',ops:[0,1,2,3,4]},
]},
{n:'Síntomas asociados (0=Ausente, 2=Máxima gravedad)',items:[
{t:'Insomnio de conciliación',ops:[0,1,2]},
{t:'Insomnio de mantenimiento (despertar nocturno)',ops:[0,1,2]},
{t:'Insomnio tardío (despertar precoz)',ops:[0,1,2]},
{t:'Síntomas somáticos gastrointestinales',ops:[0,1,2]},
{t:'Síntomas somáticos generales',ops:[0,1,2]},
{t:'Síntomas genitales (pérdida de libido, alteraciones menstruales)',ops:[0,1,2]},
{t:'Pérdida de peso',ops:[0,1,2]},
{t:'Conciencia de enfermedad (insight)',ops:[0,1,2]},
]},
],
interp:(p)=>p<8?{t:'Sin depresión clínicamente significativa.',bg:'#E8F5F0',c:'#1A7A5E'}:p<=13?{t:'Depresión leve.',bg:'#FFF3EB',c:'#C05621'}:p<=18?{t:'Depresión moderada.',bg:'#FFF3EB',c:'#C05621'}:p<=22?{t:'Depresión severa.',bg:'#FFF5F5',c:'#C53030'}:{t:'Depresión muy severa. Intervención clínica prioritaria.',bg:'#FFF5F5',c:'#C53030'},
},

'dass21':{
secciones:[
{n:'Depresión (0=No me aplicó nada, 3=Me aplicó mucho o la mayor parte del tiempo)',items:[
{t:'No podía experimentar ningún sentimiento positivo',ops:[0,1,2,3]},
{t:'Me costó tomar la iniciativa para hacer cosas',ops:[0,1,2,3]},
{t:'Sentí que no tenía nada que esperar con ilusión',ops:[0,1,2,3]},
{t:'Me sentí triste y deprimido/a',ops:[0,1,2,3]},
{t:'Sentí que había perdido el interés por casi todo',ops:[0,1,2,3]},
{t:'Sentí que no valía como persona',ops:[0,1,2,3]},
{t:'Sentí que la vida no tenía sentido',ops:[0,1,2,3]},
]},
{n:'Ansiedad',items:[
{t:'Sentí sequedad en la boca',ops:[0,1,2,3]},
{t:'Tuve dificultad para respirar',ops:[0,1,2,3]},
{t:'Sentí temblores (en las manos, por ejemplo)',ops:[0,1,2,3]},
{t:'Estuve preocupado/a por situaciones en que podría entrar en pánico',ops:[0,1,2,3]},
{t:'Sentí que estaba a punto de tener pánico',ops:[0,1,2,3]},
{t:'Fui consciente de la acción de mi corazón sin haber hecho ejercicio',ops:[0,1,2,3]},
{t:'Sentí miedo sin razón aparente',ops:[0,1,2,3]},
]},
{n:'Estrés',items:[
{t:'Me costó relajarme',ops:[0,1,2,3]},
{t:'Reaccioné exageradamente ante situaciones',ops:[0,1,2,3]},
{t:'Sentí que estaba gastando mucha energía nerviosa',ops:[0,1,2,3]},
{t:'Me sentí agitado/a',ops:[0,1,2,3]},
{t:'Me costó calmarme después de que algo me alterara',ops:[0,1,2,3]},
{t:'Me resultó difícil tolerar interrupciones a lo que estaba haciendo',ops:[0,1,2,3]},
{t:'Sentí que estaba muy irritable',ops:[0,1,2,3]},
]},
],
interp:(p)=>p<=29?{t:'Niveles normales a leves de depresión, ansiedad y estrés.',bg:'#E8F5F0',c:'#1A7A5E'}:p<=45?{t:'Niveles moderados de malestar emocional.',bg:'#FFF3EB',c:'#C05621'}:{t:'Niveles severos a extremadamente severos de malestar emocional. Evaluación clínica prioritaria.',bg:'#FFF5F5',c:'#C53030'},
},

'pcl5':{
secciones:[
{n:'Intrusión (0=Nada en absoluto, 4=Extremadamente)',items:[
{t:'Recuerdos repetidos, perturbadores del evento',ops:[0,1,2,3,4]},
{t:'Sueños perturbadores relacionados con el evento',ops:[0,1,2,3,4]},
{t:'Sentir o actuar como si el evento estuviera ocurriendo de nuevo',ops:[0,1,2,3,4]},
{t:'Malestar intenso al recordar el evento',ops:[0,1,2,3,4]},
{t:'Reacciones físicas fuertes al recordar el evento',ops:[0,1,2,3,4]},
]},
{n:'Evitación',items:[
{t:'Evitar recuerdos, pensamientos o sentimientos relacionados con el evento',ops:[0,1,2,3,4]},
{t:'Evitar recordatorios externos del evento (personas, lugares, conversaciones)',ops:[0,1,2,3,4]},
]},
{n:'Alteraciones cognitivas y del estado de ánimo',items:[
{t:'Dificultad para recordar partes importantes del evento',ops:[0,1,2,3,4]},
{t:'Creencias negativas fuertes sobre sí mismo/a, otros o el mundo',ops:[0,1,2,3,4]},
{t:'Culparse a sí mismo/a o a otros por el evento',ops:[0,1,2,3,4]},
{t:'Estado emocional negativo fuerte (miedo, horror, culpa, vergüenza)',ops:[0,1,2,3,4]},
{t:'Pérdida de interés en actividades que antes disfrutaba',ops:[0,1,2,3,4]},
{t:'Sentirse distante o alejado de los demás',ops:[0,1,2,3,4]},
{t:'Dificultad para experimentar emociones positivas',ops:[0,1,2,3,4]},
]},
{n:'Alteraciones de la activación y reactividad',items:[
{t:'Comportamiento irritable, arrebatos de ira',ops:[0,1,2,3,4]},
{t:'Comportamiento imprudente o autodestructivo',ops:[0,1,2,3,4]},
{t:'Estar en guardia o vigilante (hipervigilancia)',ops:[0,1,2,3,4]},
{t:'Sentirse sobresaltado/a fácilmente',ops:[0,1,2,3,4]},
{t:'Dificultad para concentrarse',ops:[0,1,2,3,4]},
{t:'Dificultad para dormir',ops:[0,1,2,3,4]},
]},
],
interp:(p)=>p<31?{t:'Síntomas de estrés postraumático mínimos o ausentes.',bg:'#E8F5F0',c:'#1A7A5E'}:p<=49?{t:'Síntomas moderados de estrés postraumático.',bg:'#FFF3EB',c:'#C05621'}:{t:'Síntomas significativos de estrés postraumático. Evaluación clínica especializada recomendada.',bg:'#FFF5F5',c:'#C53030'},
},

'scl90':{
secciones:[
{n:'Cada dimensión se puntúa de 0 (sin malestar) a 40 (malestar máximo)',items:[
{t:'Somatización',ops:[0,8,16,24,32,40]},
{t:'Obsesión-compulsión',ops:[0,8,16,24,32,40]},
{t:'Sensibilidad interpersonal',ops:[0,8,16,24,32,40]},
{t:'Depresión',ops:[0,8,16,24,32,40]},
{t:'Ansiedad',ops:[0,8,16,24,32,40]},
{t:'Hostilidad',ops:[0,8,16,24,32,40]},
{t:'Ansiedad fóbica',ops:[0,8,16,24,32,40]},
{t:'Ideación paranoide',ops:[0,8,16,24,32,40]},
{t:'Psicoticismo',ops:[0,8,16,24,32,40]},
]},
],
interp:(p)=>p<=90?{t:'Psicopatología global mínima.',bg:'#E8F5F0',c:'#1A7A5E'}:p<=180?{t:'Psicopatología global leve a moderada.',bg:'#FFF3EB',c:'#C05621'}:{t:'Psicopatología global significativa. Evaluación clínica integral recomendada.',bg:'#FFF5F5',c:'#C53030'},
},

'whoqol':{
secciones:[
{n:'Cada dominio se puntúa de 0 (peor calidad de vida) a 25 (mejor calidad de vida)',items:[
{t:'Dominio físico (energía, dolor, sueño, movilidad)',ops:[0,5,10,15,20,25]},
{t:'Dominio psicológico (sentimientos positivos, autoestima, concentración)',ops:[0,5,10,15,20,25]},
{t:'Relaciones sociales (relaciones personales, apoyo social, actividad sexual)',ops:[0,5,10,15,20,25]},
{t:'Ambiente (seguridad, hogar, recursos económicos, acceso a servicios)',ops:[0,5,10,15,20,25]},
]},
],
interp:(p)=>p>=75?{t:'Calidad de vida percibida alta.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=50?{t:'Calidad de vida percibida moderada.',bg:'#FFF3EB',c:'#C05621'}:{t:'Calidad de vida percibida baja. Requiere atención integral.',bg:'#FFF5F5',c:'#C53030'},
},

'cssrs':{
secciones:[
{n:'Nivel de ideación/conducta suicida más grave presente (seleccionar el más alto aplicable, cada uno hasta 5 pts)',items:[
{t:'Deseo de estar muerto / pasivo',ops:[0,1,2,3,4,5]},
{t:'Ideación suicida activa inespecífica (sin método)',ops:[0,1,2,3,4,5]},
{t:'Ideación con método, sin plan ni intención',ops:[0,1,2,3,4,5]},
{t:'Ideación con intención, sin plan específico',ops:[0,1,2,3,4,5]},
{t:'Ideación con plan e intención específicos',ops:[0,1,2,3,4,5]},
]},
],
interp:(p)=>p===0?{t:'Sin ideación suicida reportada.',bg:'#E8F5F0',c:'#1A7A5E'}:p<=10?{t:'Riesgo suicida bajo a moderado. Seguimiento cercano recomendado.',bg:'#FFF3EB',c:'#C05621'}:{t:'Riesgo suicida alto. Requiere evaluación y manejo de crisis inmediato.',bg:'#FFF5F5',c:'#C53030'},
},
