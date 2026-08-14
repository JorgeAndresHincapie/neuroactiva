// ============================================================
// LOTE 8 — Lenguaje (resto) — cierra la especialidad
// ============================================================

'wab':{
secciones:[
{n:'Habla espontánea / Fluidez (máx 20)',items:[
{t:'Fluidez y contenido informativo del habla espontánea',ops:[0,4,8,12,16,20]},
]},
{n:'Comprensión auditiva (máx 30)',items:[
{t:'Comprensión de preguntas sí/no, órdenes y reconocimiento auditivo',ops:[0,6,12,18,24,30]},
]},
{n:'Repetición (máx 20)',items:[
{t:'Repetición de palabras y frases de complejidad creciente',ops:[0,4,8,12,16,20]},
]},
{n:'Denominación (máx 30)',items:[
{t:'Denominación de objetos, fluidez de palabras y frases por completar',ops:[0,6,12,18,24,30]},
]},
],
interp:(p)=>p>=93?{t:'Sin afasia significativa (Cociente de Afasia normal).',bg:'#E8F5F0',c:'#1A7A5E'}:p>=70?{t:'Afasia leve.',bg:'#FFF3EB',c:'#C05621'}:p>=40?{t:'Afasia moderada.',bg:'#FFF3EB',c:'#C05621'}:{t:'Afasia severa.',bg:'#FFF5F5',c:'#C53030'},
},

'masa':{
secciones:[
{n:'Cada dominio se puntúa de 0 (función muy afectada) a 25 (función normal)',items:[
{t:'Alerta y cooperación',ops:[0,5,10,15,20,25]},
{t:'Comprensión auditiva y praxia oral',ops:[0,5,10,15,20,25]},
{t:'Respiración y control de saliva',ops:[0,5,10,15,20,25]},
{t:'Control labial y lingual',ops:[0,5,10,15,20,25]},
{t:'Preparación oral del bolo y masticación',ops:[0,5,10,15,20,25]},
{t:'Reflejo nauseoso y elevación del paladar',ops:[0,5,10,15,20,25]},
{t:'Tránsito oral y reflejo de tos',ops:[0,5,10,15,20,25]},
{t:'Calidad vocal y disfagia general observada',ops:[0,5,10,15,20,25]},
]},
],
interp:(p)=>p>=178?{t:'Deglución dentro de parámetros normales.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=169?{t:'Riesgo leve de aspiración.',bg:'#FFF3EB',c:'#C05621'}:{t:'Riesgo significativo de aspiración. Requiere evaluación instrumental.',bg:'#FFF5F5',c:'#C53030'},
},

'mbgr':{
secciones:[
{n:'Cada área se puntúa de 0 (muy afectada) a 18 (función normal)',items:[
{t:'Facies (expresión y simetría facial)',ops:[0,3,6,9,12,15,18]},
{t:'Postura corporal y cervical',ops:[0,3,6,9,12,15,18]},
{t:'Respiración',ops:[0,3,6,9,12,15,18]},
{t:'Voz',ops:[0,3,6,9,12,15,18]},
{t:'Movilidad orofacial (labios, lengua, mejillas)',ops:[0,3,6,9,12,15,18]},
{t:'Masticación',ops:[0,3,6,9,12,15,18]},
{t:'Deglución',ops:[0,3,6,9,12,15,18]},
]},
],
interp:(p)=>p>=100?{t:'Motricidad orofacial dentro de la normalidad.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=63?{t:'Alteración orofacial moderada.',bg:'#FFF3EB',c:'#C05621'}:{t:'Alteración orofacial severa. Requiere intervención miofuncional intensiva.',bg:'#FFF5F5',c:'#C53030'},
},

'ssq':{
secciones:[
{n:'Cada ítem tipo escala visual análoga, de 0 (sin dificultad) a 100 (máxima dificultad)',items:[
{t:'Dificultad general para tragar',ops:[0,20,40,60,80,100]},
{t:'Dificultad al tragar líquidos claros',ops:[0,20,40,60,80,100]},
{t:'Dificultad al tragar líquidos espesos',ops:[0,20,40,60,80,100]},
{t:'Dificultad al tragar alimentos blandos',ops:[0,20,40,60,80,100]},
{t:'Dificultad al tragar alimentos sólidos',ops:[0,20,40,60,80,100]},
{t:'Sensación de comida atascada en la garganta',ops:[0,20,40,60,80,100]},
{t:'Tos al comer o beber',ops:[0,20,40,60,80,100]},
{t:'Necesidad de tragar varias veces por bocado',ops:[0,20,40,60,80,100]},
{t:'Tiempo extra necesario para comer',ops:[0,20,40,60,80,100]},
{t:'Evita ciertos alimentos por miedo a atragantarse',ops:[0,20,40,60,80,100]},
{t:'Pérdida de peso relacionada con dificultad para tragar',ops:[0,20,40,60,80,100]},
{t:'Ansiedad relacionada con comer en público',ops:[0,20,40,60,80,100]},
{t:'Regurgitación nasal',ops:[0,20,40,60,80,100]},
{t:'Sensación de ahogo al tragar',ops:[0,20,40,60,80,100]},
{t:'Voz húmeda o gorgoteante después de tragar',ops:[0,20,40,60,80,100]},
{t:'Impacto general en la calidad de vida',ops:[0,20,40,60,80,100]},
{t:'Preocupación general sobre el problema de deglución',ops:[0,20,40,60,80,100]},
]},
],
interp:(p)=>p<=170?{t:'Síntomas de disfagia mínimos.',bg:'#E8F5F0',c:'#1A7A5E'}:p<=680?{t:'Síntomas de disfagia leves a moderados.',bg:'#FFF3EB',c:'#C05621'}:{t:'Síntomas de disfagia significativos. Evaluación clínica prioritaria.',bg:'#FFF5F5',c:'#C53030'},
},
