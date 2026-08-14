// ============================================================
// LOTE 3 — Fugl-Meyer (MS, MI, Sensorial) — cierra Fisioterapia
// Cada ítem: 0=No puede realizarlo, 1=Realiza parcialmente, 2=Realiza completamente
// ============================================================

'fugl-ms':{
secciones:[
{n:'Actividad refleja',items:[
{t:'Reflejo bicipital',ops:[0,2]},
{t:'Reflejo tricipital',ops:[0,2]},
]},
{n:'Sinergia flexora (hombro/codo/antebrazo)',items:[
{t:'Retracción de hombro',ops:[0,1,2]},
{t:'Elevación de hombro',ops:[0,1,2]},
{t:'Abducción de hombro ≥90°',ops:[0,1,2]},
{t:'Rotación externa de hombro',ops:[0,1,2]},
{t:'Flexión de codo',ops:[0,1,2]},
{t:'Supinación de antebrazo',ops:[0,1,2]},
]},
{n:'Sinergia extensora',items:[
{t:'Aducción/rotación interna de hombro',ops:[0,1,2]},
{t:'Extensión de codo',ops:[0,1,2]},
{t:'Pronación de antebrazo',ops:[0,1,2]},
]},
{n:'Movimiento combinando sinergias',items:[
{t:'Mano hacia la columna lumbar',ops:[0,1,2]},
{t:'Flexión de hombro 0-90° con codo en extensión',ops:[0,1,2]},
{t:'Prono-supinación con codo a 90° y hombro a 0°',ops:[0,1,2]},
]},
{n:'Movimiento con poca sinergia',items:[
{t:'Abducción de hombro a 90°, codo en extensión, antebrazo pronado',ops:[0,1,2]},
{t:'Flexión de hombro 90-180°, codo en extensión',ops:[0,1,2]},
{t:'Prono-supinación con codo en extensión, hombro 30-90°',ops:[0,1,2]},
]},
{n:'Actividad refleja normal',items:[
{t:'Reflejos normales (bicipital, tricipital, dedos)',ops:[0,2]},
]},
{n:'Muñeca',items:[
{t:'Estabilidad de muñeca a 15° (codo a 90°)',ops:[0,1,2]},
{t:'Flexo-extensión de muñeca (codo a 90°)',ops:[0,1,2]},
{t:'Estabilidad de muñeca a 15° (codo en extensión)',ops:[0,1,2]},
{t:'Flexo-extensión de muñeca (codo en extensión)',ops:[0,1,2]},
{t:'Circunducción de muñeca',ops:[0,1,2]},
]},
{n:'Mano',items:[
{t:'Flexión en masa de dedos',ops:[0,1,2]},
{t:'Extensión en masa de dedos',ops:[0,1,2]},
{t:'Prensión en gancho',ops:[0,1,2]},
{t:'Prensión por aducción del pulgar',ops:[0,1,2]},
{t:'Prensión en pinza (oposición)',ops:[0,1,2]},
{t:'Prensión cilíndrica',ops:[0,1,2]},
{t:'Prensión esférica',ops:[0,1,2]},
]},
{n:'Coordinación y velocidad (dedo a nariz)',items:[
{t:'Temblor',ops:[0,1,2]},
{t:'Dismetría',ops:[0,1,2]},
{t:'Velocidad',ops:[0,1,2]},
]},
],
interp:(p)=>p>=58?{t:'Afectación motora leve del MS.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=42?{t:'Afectación motora moderada del MS.',bg:'#FFF3EB',c:'#C05621'}:p>=22?{t:'Afectación motora marcada del MS.',bg:'#FFF3EB',c:'#C05621'}:{t:'Afectación motora severa del MS.',bg:'#FFF5F5',c:'#C53030'},
},

'fugl-mi':{
secciones:[
{n:'Actividad refleja',items:[
{t:'Reflejos flexores de rodilla',ops:[0,2]},
{t:'Reflejo patelar / aquíleo',ops:[0,2]},
]},
{n:'Sinergia flexora (en supino)',items:[
{t:'Flexión de cadera',ops:[0,1,2]},
{t:'Flexión de rodilla',ops:[0,1,2]},
{t:'Dorsiflexión de tobillo',ops:[0,1,2]},
]},
{n:'Sinergia extensora (en supino)',items:[
{t:'Extensión de cadera',ops:[0,1,2]},
{t:'Aducción de cadera',ops:[0,1,2]},
{t:'Extensión de rodilla',ops:[0,1,2]},
{t:'Flexión plantar de tobillo',ops:[0,1,2]},
]},
{n:'Movimiento combinando sinergias (sentado)',items:[
{t:'Flexión de rodilla más de 90° (sentado)',ops:[0,1,2]},
{t:'Dorsiflexión de tobillo (sentado)',ops:[0,1,2]},
]},
{n:'Movimiento con poca sinergia (de pie)',items:[
{t:'Flexión de rodilla de pie (más de 90°)',ops:[0,1,2]},
{t:'Dorsiflexión de tobillo de pie',ops:[0,1,2]},
]},
{n:'Actividad refleja normal',items:[
{t:'Reflejos normales (rodilla, tobillo)',ops:[0,2]},
]},
{n:'Coordinación y velocidad (talón-rodilla)',items:[
{t:'Temblor',ops:[0,1,2]},
{t:'Dismetría',ops:[0,1,2]},
{t:'Velocidad',ops:[0,1,2]},
]},
],
interp:(p)=>p>=29?{t:'Afectación motora leve del MI.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=19?{t:'Afectación motora moderada del MI.',bg:'#FFF3EB',c:'#C05621'}:{t:'Afectación motora severa del MI.',bg:'#FFF5F5',c:'#C53030'},
},

'fugl-sens':{
secciones:[
{n:'Sensibilidad superficial (tacto ligero, ojos cerrados)',items:[
{t:'Tacto ligero — brazo/antebrazo',ops:[0,1,2]},
{t:'Tacto ligero — pierna/pie',ops:[0,1,2]},
]},
{n:'Propiocepción (posición articular, ojos cerrados)',items:[
{t:'Posición — hombro',ops:[0,1,2]},
{t:'Posición — codo',ops:[0,1,2]},
{t:'Posición — muñeca',ops:[0,1,2]},
{t:'Posición — pulgar',ops:[0,1,2]},
{t:'Posición — dedo índice',ops:[0,1,2]},
{t:'Posición — cadera',ops:[0,1,2]},
{t:'Posición — rodilla',ops:[0,1,2]},
{t:'Posición — tobillo',ops:[0,1,2]},
{t:'Posición — dedo gordo del pie',ops:[0,1,2]},
{t:'Posición — quinto dedo del pie',ops:[0,1,2]},
]},
],
interp:(p)=>p>=20?{t:'Sensibilidad conservada.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=12?{t:'Déficit sensorial moderado.',bg:'#FFF3EB',c:'#C05621'}:{t:'Déficit sensorial severo. Impacta directamente en la seguridad y la rehabilitación motora.',bg:'#FFF5F5',c:'#C53030'},
},
