// ============================================================
// LOTE 9 — Psicología (parte 1)
// ============================================================

'cage':{
secciones:[
{n:'CAGE — Responda cada pregunta (0=No, 1=Sí)',items:[
{t:'¿Ha sentido alguna vez que debería reducir su consumo de alcohol?',ops:[0,1]},
{t:'¿Le ha molestado que la gente critique su forma de beber?',ops:[0,1]},
{t:'¿Se ha sentido alguna vez mal o culpable por beber?',ops:[0,1]},
{t:'¿Alguna vez ha necesitado beber a primera hora de la mañana para calmar los nervios o la resaca?',ops:[0,1]},
]},
],
interp:(p)=>p<2?{t:'Bajo riesgo de dependencia alcohólica.',bg:'#E8F5F0',c:'#1A7A5E'}:{t:'Probable dependencia alcohólica (2 o más respuestas positivas). Evaluación especializada recomendada.',bg:'#FFF5F5',c:'#C53030'},
},

'ghq28':{
secciones:[
{n:'Síntomas somáticos (0=No en absoluto, 1=Presente)',items:[
{t:'Se ha sentido con buena salud en general',ops:[0,1]},
{t:'Ha necesitado algún reconstituyente/tónico',ops:[0,1]},
{t:'Se ha sentido decaído/a y sin salud',ops:[0,1]},
{t:'Se ha sentido enfermo/a últimamente',ops:[0,1]},
{t:'Ha tenido dolores de cabeza',ops:[0,1]},
{t:'Ha sentido opresión/presión en la cabeza',ops:[0,1]},
{t:'Ha tenido oleadas de calor o escalofríos',ops:[0,1]},
]},
{n:'Ansiedad e insomnio',items:[
{t:'Ha perdido mucho sueño por preocupación',ops:[0,1]},
{t:'Ha tenido dificultad para dormir de un tirón',ops:[0,1]},
{t:'Se ha notado constantemente agobiado/a y en tensión',ops:[0,1]},
{t:'Se ha sentido irritable de mal genio',ops:[0,1]},
{t:'Se ha asustado o ha tenido pánico sin motivo',ops:[0,1]},
{t:'Ha sentido que todo se le viene encima',ops:[0,1]},
{t:'Se ha notado nervioso/a y a punto de explotar',ops:[0,1]},
]},
{n:'Disfunción social',items:[
{t:'Ha logrado mantenerse ocupado/a y activo/a',ops:[0,1]},
{t:'Le lleva más tiempo hacer las cosas',ops:[0,1]},
{t:'Ha sentido que hace las cosas bien',ops:[0,1]},
{t:'Se ha sentido satisfecho/a con su forma de hacer las cosas',ops:[0,1]},
{t:'Ha sentido que juega un papel útil en la vida',ops:[0,1]},
{t:'Se ha sentido capaz de tomar decisiones',ops:[0,1]},
{t:'Ha sido capaz de disfrutar sus actividades normales',ops:[0,1]},
]},
{n:'Depresión grave',items:[
{t:'Ha pensado que la vida no vale la pena vivirse',ops:[0,1]},
{t:'Ha pensado en la posibilidad de quitarse de en medio',ops:[0,1]},
{t:'Ha notado que le vienen ideas de suicidio a la cabeza',ops:[0,1]},
{t:'Ha sentido que en momentos de crisis podría hacerse daño',ops:[0,1]},
{t:'Ha sentido que la vida es completamente desesperanzadora',ops:[0,1]},
{t:'Ha sentido que ya no vale para nada',ops:[0,1]},
{t:'Ha deseado estar muerto/a y lejos de todo',ops:[0,1]},
]},
],
interp:(p)=>p<=4?{t:'Sin evidencia de malestar psicológico significativo.',bg:'#E8F5F0',c:'#1A7A5E'}:p<=10?{t:'Malestar psicológico leve a moderado.',bg:'#FFF3EB',c:'#C05621'}:{t:'Malestar psicológico significativo. Evaluación clínica recomendada.',bg:'#FFF5F5',c:'#C53030'},
},

'audit':{
secciones:[
{n:'Consumo de alcohol (0-4 por ítem)',items:[
{t:'¿Con qué frecuencia consume bebidas alcohólicas?',ops:[0,1,2,3,4]},
{t:'¿Cuántas bebidas consume en un día típico?',ops:[0,1,2,3,4]},
{t:'¿Con qué frecuencia toma 6 o más bebidas en una ocasión?',ops:[0,1,2,3,4]},
{t:'¿Con qué frecuencia no pudo dejar de beber una vez había empezado?',ops:[0,1,2,3,4]},
{t:'¿Con qué frecuencia dejó de hacer algo esperado por beber?',ops:[0,1,2,3,4]},
{t:'¿Con qué frecuencia necesitó beber por la mañana para funcionar?',ops:[0,1,2,3,4]},
{t:'¿Con qué frecuencia sintió culpa o remordimiento tras beber?',ops:[0,1,2,3,4]},
{t:'¿Con qué frecuencia no pudo recordar lo sucedido la noche anterior por beber?',ops:[0,1,2,3,4]},
{t:'¿Usted o alguien más resultó lesionado por su consumo?',ops:[0,1,2,3,4]},
{t:'¿Algún familiar, amigo o profesional se preocupó por su consumo?',ops:[0,1,2,3,4]},
]},
],
interp:(p)=>p<=7?{t:'Consumo de bajo riesgo.',bg:'#E8F5F0',c:'#1A7A5E'}:p<=15?{t:'Consumo de riesgo. Se recomienda intervención breve.',bg:'#FFF3EB',c:'#C05621'}:p<=19?{t:'Consumo perjudicial. Requiere intervención más intensiva.',bg:'#FFF5F5',c:'#C53030'}:{t:'Probable dependencia al alcohol. Evaluación diagnóstica especializada.',bg:'#FFF5F5',c:'#C53030'},
},

'pss':{
secciones:[
{n:'En el último mes, ¿con qué frecuencia...? (0=Nunca, 4=Muy a menudo)',items:[
{t:'Se ha sentido afectado por algo inesperado',ops:[0,1,2,3,4]},
{t:'Se ha sentido incapaz de controlar las cosas importantes de su vida',ops:[0,1,2,3,4]},
{t:'Se ha sentido nervioso/a o estresado/a',ops:[0,1,2,3,4]},
{t:'Ha manejado con éxito los pequeños problemas irritantes de la vida',ops:[0,1,2,3,4]},
{t:'Ha sentido que afrontaba efectivamente los cambios importantes en su vida',ops:[0,1,2,3,4]},
{t:'Se ha sentido seguro/a sobre su capacidad para manejar sus problemas personales',ops:[0,1,2,3,4]},
{t:'Ha sentido que las cosas le van bien',ops:[0,1,2,3,4]},
{t:'Ha sentido que no podía afrontar todas las cosas que tenía que hacer',ops:[0,1,2,3,4]},
{t:'Ha podido controlar las dificultades de su vida',ops:[0,1,2,3,4]},
{t:'Se ha sentido que tenía todo bajo control',ops:[0,1,2,3,4]},
]},
],
interp:(p)=>p<=13?{t:'Estrés percibido bajo.',bg:'#E8F5F0',c:'#1A7A5E'}:p<=26?{t:'Estrés percibido moderado.',bg:'#FFF3EB',c:'#C05621'}:{t:'Estrés percibido alto. Requiere estrategias de afrontamiento y posible intervención.',bg:'#FFF5F5',c:'#C53030'},
},

'bai':{
secciones:[
{n:'Síntomas de ansiedad en la última semana (0=En absoluto, 3=Severamente)',items:[
{t:'Entumecimiento u hormigueo',ops:[0,1,2,3]},
{t:'Sensación de calor',ops:[0,1,2,3]},
{t:'Temblor en las piernas',ops:[0,1,2,3]},
{t:'Incapacidad para relajarse',ops:[0,1,2,3]},
{t:'Miedo a que ocurra lo peor',ops:[0,1,2,3]},
{t:'Mareo o aturdimiento',ops:[0,1,2,3]},
{t:'Palpitaciones o taquicardia',ops:[0,1,2,3]},
{t:'Sensación de inestabilidad',ops:[0,1,2,3]},
{t:'Terror',ops:[0,1,2,3]},
{t:'Nerviosismo',ops:[0,1,2,3]},
{t:'Sensación de ahogo',ops:[0,1,2,3]},
{t:'Temblor de manos',ops:[0,1,2,3]},
{t:'Sensación de inestabilidad al caminar',ops:[0,1,2,3]},
{t:'Miedo a perder el control',ops:[0,1,2,3]},
{t:'Dificultad para respirar',ops:[0,1,2,3]},
{t:'Miedo a morir',ops:[0,1,2,3]},
{t:'Sensación de pánico',ops:[0,1,2,3]},
{t:'Malestar digestivo',ops:[0,1,2,3]},
{t:'Desmayo o sensación de desvanecerse',ops:[0,1,2,3]},
{t:'Rubor facial',ops:[0,1,2,3]},
{t:'Sudoración (no relacionada con el calor)',ops:[0,1,2,3]},
]},
],
interp:(p)=>p<=21?{t:'Ansiedad baja.',bg:'#E8F5F0',c:'#1A7A5E'}:p<=35?{t:'Ansiedad moderada.',bg:'#FFF3EB',c:'#C05621'}:{t:'Ansiedad severa. Evaluación clínica recomendada.',bg:'#FFF5F5',c:'#C53030'},
},

'hars':{
secciones:[
{n:'Síntomas ansiosos (0=Ausente, 4=Muy severo)',items:[
{t:'Estado de ánimo ansioso',ops:[0,1,2,3,4]},
{t:'Tensión',ops:[0,1,2,3,4]},
{t:'Miedos',ops:[0,1,2,3,4]},
{t:'Insomnio',ops:[0,1,2,3,4]},
{t:'Funciones cognitivas (dificultad de concentración/memoria)',ops:[0,1,2,3,4]},
{t:'Estado de ánimo deprimido',ops:[0,1,2,3,4]},
{t:'Síntomas somáticos musculares',ops:[0,1,2,3,4]},
{t:'Síntomas somáticos sensoriales',ops:[0,1,2,3,4]},
{t:'Síntomas cardiovasculares',ops:[0,1,2,3,4]},
{t:'Síntomas respiratorios',ops:[0,1,2,3,4]},
{t:'Síntomas gastrointestinales',ops:[0,1,2,3,4]},
{t:'Síntomas genitourinarios',ops:[0,1,2,3,4]},
{t:'Síntomas autonómicos',ops:[0,1,2,3,4]},
{t:'Comportamiento durante la entrevista (inquietud, tensión observada)',ops:[0,1,2,3,4]},
]},
],
interp:(p)=>p<=17?{t:'Ansiedad leve.',bg:'#E8F5F0',c:'#1A7A5E'}:p<=24?{t:'Ansiedad moderada.',bg:'#FFF3EB',c:'#C05621'}:p<=30?{t:'Ansiedad moderada-severa.',bg:'#FFF5F5',c:'#C53030'}:{t:'Ansiedad severa. Evaluación clínica prioritaria.',bg:'#FFF5F5',c:'#C53030'},
},

'zung':{
secciones:[
{n:'Síntomas depresivos (1=Nunca o rara vez, 4=Siempre o casi siempre)',items:[
{t:'Me siento decaído/a y triste',ops:[1,2,3,4]},
{t:'En las mañanas me siento mejor',ops:[1,2,3,4]},
{t:'Tengo ganas de llorar o lloro',ops:[1,2,3,4]},
{t:'Tengo problemas para dormir por la noche',ops:[1,2,3,4]},
{t:'Como igual que antes',ops:[1,2,3,4]},
{t:'Disfruto viendo a personas atractivas o hablando con ellas',ops:[1,2,3,4]},
{t:'Noto que estoy perdiendo peso',ops:[1,2,3,4]},
{t:'Tengo problemas de estreñimiento',ops:[1,2,3,4]},
{t:'Mi corazón late más rápido de lo normal',ops:[1,2,3,4]},
{t:'Me canso sin razón aparente',ops:[1,2,3,4]},
{t:'Mi mente está tan clara como antes',ops:[1,2,3,4]},
{t:'Me resulta fácil hacer lo que solía hacer',ops:[1,2,3,4]},
{t:'Me siento inquieto/a y no puedo estar quieto/a',ops:[1,2,3,4]},
{t:'Tengo esperanza en el futuro',ops:[1,2,3,4]},
{t:'Estoy más irritable de lo normal',ops:[1,2,3,4]},
{t:'Me resulta fácil tomar decisiones',ops:[1,2,3,4]},
{t:'Siento que soy útil y necesario/a',ops:[1,2,3,4]},
{t:'Mi vida es bastante plena',ops:[1,2,3,4]},
{t:'Siento que los demás estarían mejor si yo muriera',ops:[1,2,3,4]},
{t:'Disfruto de las cosas que solía hacer',ops:[1,2,3,4]},
]},
],
interp:(p)=>p<50?{t:'Sin síntomas depresivos significativos.',bg:'#E8F5F0',c:'#1A7A5E'}:p<=59?{t:'Depresión leve.',bg:'#FFF3EB',c:'#C05621'}:p<=69?{t:'Depresión moderada.',bg:'#FFF5F5',c:'#C53030'}:{t:'Depresión severa. Intervención clínica prioritaria.',bg:'#FFF5F5',c:'#C53030'},
},
