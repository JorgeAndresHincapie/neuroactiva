// ============================================================
// LOTE 7 — Lenguaje
// ============================================================

'eat10':{
secciones:[
{n:'EAT-10 — Marque de 0 (Sin problema) a 4 (Problema severo) para cada afirmación',items:[
{t:'Mi problema para tragar me ha hecho perder peso',ops:[0,1,2,3,4]},
{t:'Mi problema para tragar interfiere con mi capacidad de salir a comer',ops:[0,1,2,3,4]},
{t:'Tragar líquidos me supone un esfuerzo extra',ops:[0,1,2,3,4]},
{t:'Tragar sólidos me supone un esfuerzo extra',ops:[0,1,2,3,4]},
{t:'Tragar pastillas me supone un esfuerzo extra',ops:[0,1,2,3,4]},
{t:'Tragar es doloroso',ops:[0,1,2,3,4]},
{t:'El placer de comer se ve afectado por mi problema',ops:[0,1,2,3,4]},
{t:'Cuando trago, la comida se pega en mi garganta',ops:[0,1,2,3,4]},
{t:'Toso cuando como',ops:[0,1,2,3,4]},
{t:'Tragar es estresante',ops:[0,1,2,3,4]},
]},
],
interp:(p)=>p<3?{t:'Sin riesgo relevante de disfagia (EAT-10 <3).',bg:'#E8F5F0',c:'#1A7A5E'}:p<10?{t:'Riesgo de disfagia presente. Evaluación clínica recomendada.',bg:'#FFF3EB',c:'#C05621'}:{t:'Riesgo alto de disfagia. Evaluación instrumental prioritaria.',bg:'#FFF5F5',c:'#C53030'},
},

'guss':{
secciones:[
{n:'GUSS — Puntaje por fase (0=Peor desempeño, 5=Mejor desempeño)',items:[
{t:'Evaluación indirecta (vigilia, tos voluntaria, deglución de saliva)',ops:[0,1,2,3,4,5]},
{t:'Prueba directa — semisólido',ops:[0,1,2,3,4,5]},
{t:'Prueba directa — líquido',ops:[0,1,2,3,4,5]},
{t:'Prueba directa — sólido',ops:[0,1,2,3,4,5]},
]},
],
interp:(p)=>p===20?{t:'Deglución funcional, sin signos de disfagia.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=15?{t:'Disfagia leve. Dieta con modificaciones menores.',bg:'#FFF3EB',c:'#C05621'}:p>=10?{t:'Disfagia moderada. Requiere modificación de dieta y seguimiento.',bg:'#FFF5F5',c:'#C53030'}:{t:'Disfagia severa. Riesgo alto de aspiración, requiere manejo especializado.',bg:'#FFF5F5',c:'#C53030'},
},

'doss':{
secciones:[
{n:'Protocolo DOSS — Seleccionar el nivel funcional de deglución',items:[
{t:'Nivel DOSS (1=Dependencia total con nutrición no oral, 7=Dieta oral normal independiente)',ops:[1,2,3,4,5,6,7]},
]},
],
interp:(p)=>p>=6?{t:'Deglución funcional, dieta oral normal o casi normal.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=4?{t:'Deglución con modificaciones moderadas, supervisión recomendada.',bg:'#FFF3EB',c:'#C05621'}:{t:'Deglución severamente comprometida. Requiere manejo especializado y posible vía no oral.',bg:'#FFF5F5',c:'#C53030'},
},

'vfss':{
secciones:[
{n:'Parámetros videofluoroscópicos observados (0=Ausente, 1=Presente)',items:[
{t:'Residuo en vallécula',ops:[0,1]},
{t:'Residuo en seno piriforme',ops:[0,1]},
{t:'Penetración laríngea',ops:[0,1]},
{t:'Aspiración traqueal',ops:[0,1]},
{t:'Retraso en el disparo deglutorio',ops:[0,1]},
{t:'Reducción de la elevación laríngea',ops:[0,1]},
{t:'Tos o reflejo protector ausente ante penetración/aspiración',ops:[0,1]},
{t:'Múltiples degluciones para un mismo bolo',ops:[0,1]},
]},
],
interp:(p)=>p===0?{t:'Deglución radiológicamente normal, sin hallazgos de riesgo.',bg:'#E8F5F0',c:'#1A7A5E'}:p<=3?{t:'Hallazgos leves. Monitorear y ajustar consistencias si es necesario.',bg:'#FFF3EB',c:'#C05621'}:{t:'Hallazgos significativos de riesgo de aspiración. Requiere manejo especializado.',bg:'#FFF5F5',c:'#C53030'},
},

'boston':{
secciones:[
{n:'Denominación (máx 10)',items:[
{t:'Desempeño en denominación de objetos e imágenes',ops:[0,2,4,6,8,10]},
]},
{n:'Repetición (máx 8)',items:[
{t:'Desempeño en repetición de palabras y frases',ops:[0,2,4,6,8]},
]},
{n:'Comprensión auditiva (máx 8)',items:[
{t:'Desempeño en comprensión de órdenes e información auditiva',ops:[0,2,4,6,8]},
]},
{n:'Lectura (máx 8)',items:[
{t:'Desempeño en comprensión lectora',ops:[0,2,4,6,8]},
]},
],
interp:(p)=>p>=28?{t:'Afasia leve o mínima.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=17?{t:'Afasia moderada.',bg:'#FFF3EB',c:'#C05621'}:{t:'Afasia severa. Requiere intervención intensiva del lenguaje.',bg:'#FFF5F5',c:'#C53030'},
},

'token':{
secciones:[
{n:'Parte I — Formas grandes, un color (6 órdenes simples)',items:[
{t:'Número de órdenes correctas en la Parte I',ops:[0,1,2,3,4,5,6]},
]},
{n:'Parte II — Formas grandes y pequeñas (8 órdenes)',items:[
{t:'Número de órdenes correctas en la Parte II',ops:[0,1,2,3,4,5,6,7,8]},
]},
{n:'Parte III — Forma + color combinados (8 órdenes)',items:[
{t:'Número de órdenes correctas en la Parte III',ops:[0,1,2,3,4,5,6,7,8]},
]},
{n:'Parte IV — Dos objetos a la vez (8 órdenes)',items:[
{t:'Número de órdenes correctas en la Parte IV',ops:[0,1,2,3,4,5,6,7,8]},
]},
{n:'Parte V — Órdenes complejas con preposiciones (6 órdenes)',items:[
{t:'Número de órdenes correctas en la Parte V',ops:[0,1,2,3,4,5,6]},
]},
],
interp:(p)=>p>=32?{t:'Comprensión auditiva normal.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=25?{t:'Déficit leve de comprensión auditiva.',bg:'#FFF3EB',c:'#C05621'}:{t:'Déficit significativo de comprensión auditiva. Sugestivo de afasia.',bg:'#FFF5F5',c:'#C53030'},
},

'frenchay':{
secciones:[
{n:'Cada sección se puntúa de 0 (función muy afectada) a 4 (función normal)',items:[
{t:'Reflejos (deglución, tos, babeo)',ops:[0,1,2,3,4]},
{t:'Respiración',ops:[0,1,2,3,4]},
{t:'Labios',ops:[0,1,2,3,4]},
{t:'Paladar',ops:[0,1,2,3,4]},
{t:'Laringe (calidad vocal)',ops:[0,1,2,3,4]},
{t:'Lengua',ops:[0,1,2,3,4]},
{t:'Inteligibilidad del habla',ops:[0,1,2,3,4]},
]},
],
interp:(p)=>p>=24?{t:'Disartria leve o ausente.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=14?{t:'Disartria moderada.',bg:'#FFF3EB',c:'#C05621'}:{t:'Disartria severa. Impacto importante en la inteligibilidad del habla.',bg:'#FFF5F5',c:'#C53030'},
},
