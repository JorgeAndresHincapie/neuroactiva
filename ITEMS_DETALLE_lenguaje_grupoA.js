/* ============================================================
   BLOQUE PARA PEGAR DENTRO DE ITEMS_DETALLE
   ============================================================
   Aplicar PRIMERO los cambios de CAMBIOS_BANCO_lenguaje.txt
   en tu BANCO, luego pegar este bloque.
   ============================================================ */

'token':{
secciones:[
{n:'Parte I: Fichas Grandes',items:[
{t:'Ítem 1',ops:[0,1]},{t:'Ítem 2',ops:[0,1]},{t:'Ítem 3',ops:[0,1]},
{t:'Ítem 4',ops:[0,1]},{t:'Ítem 5',ops:[0,1]},{t:'Ítem 6',ops:[0,1]},
]},
{n:'Parte II: Fichas Pequeñas',items:[
{t:'Ítem 7',ops:[0,1]},{t:'Ítem 8',ops:[0,1]},{t:'Ítem 9',ops:[0,1]},
{t:'Ítem 10',ops:[0,1]},{t:'Ítem 11',ops:[0,1]},{t:'Ítem 12',ops:[0,1]},
]},
{n:'Parte III: Fichas Grandes (comandos dobles)',items:[
{t:'Ítem 13',ops:[0,1]},{t:'Ítem 14',ops:[0,1]},{t:'Ítem 15',ops:[0,1]},
{t:'Ítem 16',ops:[0,1]},{t:'Ítem 17',ops:[0,1]},{t:'Ítem 18',ops:[0,1]},
]},
{n:'Parte IV: Fichas Pequeñas (comandos dobles)',items:[
{t:'Ítem 19',ops:[0,1]},{t:'Ítem 20',ops:[0,1]},{t:'Ítem 21',ops:[0,1]},
{t:'Ítem 22',ops:[0,1]},{t:'Ítem 23',ops:[0,1]},{t:'Ítem 24',ops:[0,1]},
]},
{n:'Parte V: Fichas Grandes (comandos triples/relacionales)',items:[
{t:'Ítem 25',ops:[0,1]},{t:'Ítem 26',ops:[0,1]},{t:'Ítem 27',ops:[0,1]},
{t:'Ítem 28',ops:[0,1]},{t:'Ítem 29',ops:[0,1]},{t:'Ítem 30',ops:[0,1]},
]},
{n:'Parte VI: Estructuras Sintácticas Complejas',items:[
{t:'Toque el círculo rojo con el cuadrado verde',ops:[0,1]},
{t:'Toque el cuadrado blanco antes de tocar el círculo azul',ops:[0,1]},
{t:'Toque el círculo amarillo en lugar del cuadrado blanco',ops:[0,1]},
{t:'Si hay un círculo azul, toque el cuadrado rojo',ops:[0,1]},
{t:'Toque todos los círculos, excepto el verde',ops:[0,1]},
{t:'Toque el cuadrado azul rápidamente y el círculo blanco despacio',ops:[0,1]},
]},
],
interp:(p)=>p>=29?{t:'Normal / Sin alteración.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=25?{t:'Déficit Leve.',bg:'#FFF3EB',c:'#C05621'}:p>=17?{t:'Déficit Moderado.',bg:'#FFF3EB',c:'#C05621'}:{t:'Déficit Severo.',bg:'#FFF5F5',c:'#C53030'},
},
'guss':{
secciones:[
{n:'Parte 1: Evaluación Preliminar (sin alimento)',items:[
{t:'Alerta (vigilancia)',ops:[0,1]},
{t:'Tos voluntaria y/o carraspeo',ops:[0,1]},
{t:'Deglución de saliva',ops:[0,1]},
{t:'Babeo / Sialorrea',ops:[0,1]},
{t:'Cambio de voz (tras tragar saliva)',ops:[0,1]},
]},
{n:'Paso 1: Consistencia Semisólida',items:[
{t:'Deglución',ops:[0,1,2]},{t:'Tos',ops:[0,1]},{t:'Babeo',ops:[0,1]},{t:'Voz',ops:[0,1]},
]},
{n:'Paso 2: Consistencia Líquida',items:[
{t:'Deglución',ops:[0,1,2]},{t:'Tos',ops:[0,1]},{t:'Babeo',ops:[0,1]},{t:'Voz',ops:[0,1]},
]},
{n:'Paso 3: Consistencia Sólida',items:[
{t:'Deglución',ops:[0,1,2]},{t:'Tos',ops:[0,1]},{t:'Babeo',ops:[0,1]},{t:'Voz',ops:[0,1]},
]},
],
interp:(p)=>p===20?{t:'Normal/Sin disfagia.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=15?{t:'Disfagia Leve.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=10?{t:'Disfagia Moderada. Dieta semisólida, líquidos espesados.',bg:'#FFF3EB',c:'#C05621'}:{t:'Disfagia Grave. NADA POR BOCA (NPO).',bg:'#FFF5F5',c:'#C53030'},
},
'doss':{
secciones:[
{n:'Nivel de Severidad (basado en hallazgos instrumentales VFSS/FEES)',items:[
{t:'1=Severa | 2=Moderada-Severa | 3=Moderada | 4=Leve-Moderada | 5=Leve | 6=Límites Funcionales | 7=Normal',ops:[1,2,3,4,5,6,7]},
]},
],
interp:(p)=>p===7?{t:'Normal en Todas las Situaciones. Dieta normal sin restricciones.',bg:'#E8F5F0',c:'#1A7A5E'}:p===6?{t:'Dentro de Límites Funcionales. Sin estrategias necesarias.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=4?{t:'Disfagia Leve a Leve-Moderada. Dieta oral con restricciones.',bg:'#FFF3EB',c:'#C05621'}:p>=3?{t:'Disfagia Moderada. Supervisión constante.',bg:'#FFF3EB',c:'#C05621'}:{t:'Disfagia Moderada-Severa a Severa. Vía oral no segura.',bg:'#FFF5F5',c:'#C53030'},
},
'masa':{
secciones:[
{n:'Evaluación del Mecanismo Deglutorio',items:[
{t:'Alerta',ops:[2,5,8,10]},
{t:'Cooperación',ops:[0,5,10]},
{t:'Lenguaje',ops:[2,5,8,10]},
{t:'Comprensión Auditiva',ops:[0,5,10]},
{t:'Disartria',ops:[0,5,10]},
{t:'Apraxia Oral',ops:[0,5,10]},
{t:'Salivación',ops:[0,5,10]},
{t:'Línea Labial',ops:[0,5,10]},
{t:'Movimiento Mandibular',ops:[0,2,5]},
{t:'Reflejo Palatino',ops:[0,5,10]},
{t:'Fuerza Lingual',ops:[2,5,8,10]},
{t:'Reflejo Nauseoso',ops:[0,2,5]},
{t:'Tos Voluntaria',ops:[0,5,10]},
{t:'Calidad de la Voz',ops:[0,5,10]},
{t:'Tránsito Oral',ops:[2,5,8,10]},
{t:'Limpieza Oral',ops:[0,2,5]},
{t:'Inicio de la Deglución Faríngea',ops:[0,5,10]},
{t:'Elevación Laríngea',ops:[0,5,10]},
{t:'Tos Deglutoria',ops:[0,5,10]},
{t:'Estridor Post-Deglución',ops:[0,2,5]},
{t:'Voz Húmeda Post-Deglución',ops:[0,5,10]},
{t:'Fase Faríngea General',ops:[0,5,10]},
{t:'Juicio Clínico — Disfagia',ops:[5,10,15,20]},
{t:'Juicio Clínico — Aspiración',ops:[5,10,15,20]},
]},
],
interp:(p)=>p>=178?{t:'Normal.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=168?{t:'Déficit Leve.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=139?{t:'Déficit Moderado.',bg:'#FFF3EB',c:'#C05621'}:{t:'Déficit Severo. Alto riesgo de aspiración.',bg:'#FFF5F5',c:'#C53030'},
},
'vfss':{
secciones:[
{n:'Parámetros Videofluoroscópicos',items:[
{t:'Sello Labial',ops:[0,1]},
{t:'Residuo Valecular',ops:[0,1,2]},
{t:'Penetración Laríngea',ops:[0,1,2]},
{t:'Aspiración Traqueal',ops:[0,3,5]},
]},
],
interp:(p)=>p<=2?{t:'Disfagia leve / Seguridad conservada.',bg:'#E8F5F0',c:'#1A7A5E'}:p<=5?{t:'Seguridad comprometida. Texturas modificadas.',bg:'#FFF3EB',c:'#C05621'}:{t:'Aspiración Crítica. Vía oral no segura.',bg:'#FFF5F5',c:'#C53030'},
},
