/* ============================================================
   BLOQUE PARA PEGAR DENTRO DE ITEMS_DETALLE (antes del cierre "};"
   en la línea 556 de tu pruebas.html actual)
   ============================================================
   IDs usados: los REALES de tu BANCO (fugl-ms, fugl-mi, ashworth)
   — no los que había usado en los archivos sueltos (fma-le, fma-ue).
   TINETTI NO se incluye aquí todavía — ver nota al final sobre la
   discrepancia de puntaje máximo (28 en tu BANCO vs 26 calculado).
   ============================================================ */

'fugl-mi':{
secciones:[
{n:'I. Reflex activity',items:[
{t:'Flexores',ops:[0,2]},
{t:'Extensores',ops:[0,2]},
]},
{n:'II. Movements within synergies',items:[
{t:'Sinergia flexora: Flexión de cadera',ops:[0,1,2]},
{t:'Sinergia flexora: Flexión de rodilla',ops:[0,1,2]},
{t:'Sinergia flexora: Dorsiflexión de tobillo',ops:[0,1,2]},
{t:'Sinergia extensora: Extensión de cadera',ops:[0,1,2]},
{t:'Sinergia extensora: Aducción de cadera',ops:[0,1,2]},
{t:'Sinergia extensora: Extensión de rodilla',ops:[0,1,2]},
{t:'Sinergia extensora: Flexión plantar de tobillo',ops:[0,1,2]},
]},
{n:'III. Movements with mixed synergies',items:[
{t:'Flexión de rodilla más allá de 90°, sentado',ops:[0,1,2]},
{t:'Dorsiflexión de tobillo, sentado',ops:[0,1,2]},
]},
{n:'IV. Movements with little or no synergy dependence',items:[
{t:'Flexión de rodilla, cadera a 0°, de pie',ops:[0,1,2]},
{t:'Dorsiflexión de tobillo, de pie',ops:[0,1,2]},
]},
{n:'V. Normal reflex activity',items:[
{t:'Flexores/Extensores',ops:[0,1,2]},
]},
{n:'F. Coordination / Speed',items:[
{t:'Temblor',ops:[0,1,2]},
{t:'Dismetría',ops:[0,1,2]},
{t:'Tiempo',ops:[0,1,2]},
]},
],
interp:(p)=>p>=30?{t:'Recuperación motora avanzada del miembro inferior.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=20?{t:'Recuperación motora moderada. Continuar plan de rehabilitación.',bg:'#FFF3EB',c:'#C05621'}:{t:'Compromiso motor severo del miembro inferior. Intensificar terapia.',bg:'#FFF5F5',c:'#C53030'},
},
'fugl-ms':{
secciones:[
{n:'A.I. Reflex activity',items:[
{t:'Flexores',ops:[0,2]},
{t:'Extensores',ops:[0,2]},
]},
{n:'A.II. Movements within synergies',items:[
{t:'Sinergia flexora: Retracción',ops:[0,1,2]},
{t:'Sinergia flexora: Elevación',ops:[0,1,2]},
{t:'Sinergia flexora: Abducción 90°',ops:[0,1,2]},
{t:'Sinergia flexora: Rotación externa',ops:[0,1,2]},
{t:'Sinergia flexora: Flexión de codo',ops:[0,1,2]},
{t:'Sinergia flexora: Supinación de antebrazo',ops:[0,1,2]},
{t:'Sinergia extensora: Aducción/rotación interna',ops:[0,1,2]},
{t:'Sinergia extensora: Extensión de codo',ops:[0,1,2]},
{t:'Sinergia extensora: Pronación de antebrazo',ops:[0,1,2]},
]},
{n:'A.III. Movements with mixed synergies',items:[
{t:'Mano a la columna lumbar',ops:[0,1,2]},
{t:'Flexión de hombro 0°-90°, codo en 0°',ops:[0,1,2]},
{t:'Pronación-supinación, codo a 90°',ops:[0,1,2]},
]},
{n:'A.IV. Movements with little or no synergy dependence',items:[
{t:'Abducción de hombro 0°-90°, codo en 0°',ops:[0,1,2]},
{t:'Flexión de hombro 90°-180°, codo en 0°',ops:[0,1,2]},
{t:'Pronación-supinación, codo en 0°',ops:[0,1,2]},
]},
{n:'A.V. Normal reflex activity',items:[
{t:'Flexores/Extensores',ops:[0,1,2]},
]},
{n:'B. Wrist',items:[
{t:'Estabilidad de muñeca a 15° extensión dorsal, codo a 90°',ops:[0,1,2]},
{t:'Extensión y flexión repetida de muñeca, codo a 90°',ops:[0,1,2]},
{t:'Estabilidad de muñeca a 15° extensión dorsal, codo en 0°',ops:[0,1,2]},
{t:'Extensión y flexión repetida de muñeca, codo en 0°',ops:[0,1,2]},
{t:'Circunducción, codo a 90°',ops:[0,1,2]},
]},
{n:'C. Hand',items:[
{t:'Flexión masiva',ops:[0,1,2]},
{t:'Extensión masiva',ops:[0,1,2]},
{t:'Agarre de gancho',ops:[0,1,2]},
{t:'Aducción del pulgar',ops:[0,1,2]},
{t:'Agarre de pinza',ops:[0,1,2]},
{t:'Agarre cilíndrico',ops:[0,1,2]},
{t:'Agarre esférico',ops:[0,1,2]},
]},
{n:'D. Coordination / Speed',items:[
{t:'Temblor',ops:[0,1,2]},
{t:'Dismetría',ops:[0,1,2]},
{t:'Tiempo',ops:[0,1,2]},
]},
],
interp:(p)=>p>=58?{t:'Recuperación motora avanzada del miembro superior.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=40?{t:'Recuperación motora moderada. Continuar plan de rehabilitación.',bg:'#FFF3EB',c:'#C05621'}:{t:'Compromiso motor severo del miembro superior. Intensificar terapia.',bg:'#FFF5F5',c:'#C53030'},
},
'ashworth':{
secciones:[
{n:'Grado de espasticidad (indicar el grupo muscular evaluado en Observaciones clínicas)',items:[
{t:'Escala de Ashworth Modificada',ops:[0,1,2,3,4]},
]},
],
interp:(p)=>p===0?{t:'Sin aumento del tono muscular.',bg:'#E8F5F0',c:'#1A7A5E'}:p<=1?{t:'Aumento leve del tono muscular.',bg:'#E8F5F0',c:'#1A7A5E'}:p<=2?{t:'Aumento moderado del tono. Vigilar impacto funcional.',bg:'#FFF3EB',c:'#C05621'}:{t:'Espasticidad severa. Considerar manejo farmacológico/quirúrgico complementario.',bg:'#FFF5F5',c:'#C53030'},
},

/* ============================================================
   NOTA — Escala de Tinetti (id: 'tinetti', max:28 en tu BANCO):
   Sumando los ítems tal como están descritos en el documento
   fuente original (Equilibrio=16 + Marcha=10), el máximo real es
   26, no 28. Tu BANCO ya tiene la descripción "Equilibrio (16 pts)
   y marcha (12 pts)" asumiendo 12 en marcha. Antes de integrar
   Tinetti, decide:
   (a) Dejar max:28 en BANCO y buscar el ítem de marcha que falta
       (probablemente relacionado con longitud/altura del paso,
       ver el manual oficial del POMA), o
   (b) Cambiar max:28 a max:26 en BANCO y ajustar la descripción,
       usando los ítems tal como los verificamos.
   Cuando decidas, te entrego el bloque de Tinetti ya listo.
   ============================================================ */
