/* ============================================================
   BLOQUE PARA PEGAR DENTRO DE ITEMS_DETALLE (junto al bloque de
   fisioterapia que ya te entregué)
   ============================================================
   IMPORTANTE: también debes cambiar en tu BANCO (línea 229) el
   registro de Tinetti de:
     {id:'tinetti',nombre:'Escala de Tinetti',max:28,area:'Marcha y equilibrio',desc:'Equilibrio (16 pts) y marcha (12 pts). ≤18: alto riesgo caída, 19-23: moderado, ≥24: bajo.'},
   a:
     {id:'tinetti',nombre:'Escala de Tinetti',max:26,area:'Marcha y equilibrio',desc:'Equilibrio (16 pts) y marcha (10 pts). ≤18: alto riesgo caída, 19-23: moderado, ≥24: bajo.'},
   (max 28→26, marcha 12 pts→10 pts en la descripción, ya que los
   ítems reales del protocolo solo alcanzan 10 pts en marcha — ver
   nota de discrepancia documentada anteriormente)
   ============================================================ */

'tinetti':{
secciones:[
{n:'Sección A: Equilibrio',items:[
{t:'Equilibrio sentado',ops:[0,1]},
{t:'Levantarse',ops:[0,1,2]},
{t:'Intentos de levantarse',ops:[0,1,2]},
{t:'Equilibrio en bipedestación inmediata (primeros 5s)',ops:[0,1,2]},
{t:'Equilibrio en bipedestación prolongada',ops:[0,1,2]},
{t:'Empujón (pies juntos, el terapeuta empuja 3 veces en el esternón)',ops:[0,1,2]},
{t:'Ojos cerrados (en la misma posición)',ops:[0,1]},
{t:'Giro de 360 grados',ops:[0,1,2]},
{t:'Sentarse',ops:[0,1,2]},
]},
{n:'Sección B: Marcha',items:[
{t:'Iniciación de la marcha',ops:[0,1]},
{t:'Longitud y altura del paso — Pie derecho',ops:[0,1]},
{t:'Longitud y altura del paso — Pie izquierdo',ops:[0,1]},
{t:'Simetría del paso',ops:[0,1]},
{t:'Continuidad de los pasos',ops:[0,1]},
{t:'Trayectoria (desviación en 3 metros)',ops:[0,1,2]},
{t:'Estabilidad del tronco',ops:[0,1,2]},
{t:'Postura al caminar (base de sustentación)',ops:[0,1]},
]},
],
interp:(p)=>p>=24?{t:'Bajo riesgo de caídas.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=19?{t:'Riesgo moderado de caídas. Se recomienda supervisión.',bg:'#FFF3EB',c:'#C05621'}:{t:'Alto riesgo de caídas. Requiere asistencia constante.',bg:'#FFF5F5',c:'#C53030'},
},
