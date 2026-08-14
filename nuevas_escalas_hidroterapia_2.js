// ============================================================
// LOTE 5 — Hidroterapia (resto) — completa la especialidad
// ============================================================

'barthel-a':{
secciones:[
{n:'Cuidado personal en contexto acuático',items:[
{t:'Alimentación (antes/después de la sesión)',ops:[0,5,10]},
{t:'Entrada al agua / baño',ops:[0,5]},
{t:'Arreglo personal (secado, vestido tras la sesión)',ops:[0,5]},
{t:'Vestido/desvestido para la sesión',ops:[0,5,10]},
{t:'Control intestinal',ops:[0,5,10]},
{t:'Control vesical',ops:[0,5,10]},
]},
{n:'Movilidad y transferencias en piscina',items:[
{t:'Uso del baño antes/después de la sesión',ops:[0,5,10]},
{t:'Transferencia hacia/desde la piscina',ops:[0,5,10,15]},
{t:'Desplazamiento dentro del agua',ops:[0,5,10,15]},
{t:'Entrada y salida por escalera/rampa de la piscina',ops:[0,5,10]},
]},
],
interp:(p)=>p===100?{t:'Independencia total en el contexto acuático.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=60?{t:'Dependencia leve en el contexto acuático.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=40?{t:'Dependencia moderada. Requiere apoyo parcial en la piscina.',bg:'#FFF3EB',c:'#C05621'}:{t:'Dependencia importante en el medio acuático. Requiere asistencia constante.',bg:'#FFF5F5',c:'#C53030'},
},

'aim':{
secciones:[
{n:'Control vertical (0-4: 0=No logra, 4=Independiente)',items:[
{t:'Mantiene la cabeza fuera del agua',ops:[0,1,2,3,4]},
{t:'Control de flotación vertical',ops:[0,1,2,3,4]},
{t:'Recuperación de la verticalidad tras desequilibrio',ops:[0,1,2,3,4]},
]},
{n:'Control horizontal',items:[
{t:'Flotación en decúbito supino',ops:[0,1,2,3,4]},
{t:'Flotación en decúbito prono',ops:[0,1,2,3,4]},
{t:'Cambio de posición supino-prono',ops:[0,1,2,3,4]},
]},
{n:'Control respiratorio',items:[
{t:'Control de la respiración con la cara en el agua',ops:[0,1,2,3,4]},
{t:'Exhalación controlada bajo el agua',ops:[0,1,2,3,4]},
{t:'Coordinación respiración-movimiento',ops:[0,1,2,3,4]},
]},
{n:'Propulsión',items:[
{t:'Propulsión con brazos',ops:[0,1,2,3,4]},
{t:'Propulsión con piernas',ops:[0,1,2,3,4]},
{t:'Propulsión combinada (independiente)',ops:[0,1,2,3,4]},
]},
],
interp:(p)=>p>=36?{t:'Independencia acuática alta.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=20?{t:'Independencia acuática moderada.',bg:'#FFF3EB',c:'#C05621'}:{t:'Independencia acuática baja. Requiere asistencia constante.',bg:'#FFF5F5',c:'#C53030'},
},

'swis':{
secciones:[
{n:'Natación funcional como herramienta terapéutica (0-4 por ítem: 0=No logra, 4=Independiente)',items:[
{t:'Entrada segura al agua',ops:[0,1,2,3,4]},
{t:'Flotación independiente',ops:[0,1,2,3,4]},
{t:'Patada de piernas funcional',ops:[0,1,2,3,4]},
{t:'Brazada funcional',ops:[0,1,2,3,4]},
{t:'Respiración coordinada con el nado',ops:[0,1,2,3,4]},
{t:'Nado en línea recta',ops:[0,1,2,3,4]},
{t:'Cambio de dirección durante el nado',ops:[0,1,2,3,4]},
{t:'Resistencia (mantiene el nado 25m)',ops:[0,1,2,3,4]},
{t:'Velocidad de nado apropiada',ops:[0,1,2,3,4]},
{t:'Coordinación motora general en el agua',ops:[0,1,2,3,4]},
{t:'Seguridad y autocontrol en el agua',ops:[0,1,2,3,4]},
{t:'Salida segura del agua',ops:[0,1,2,3,4]},
{t:'Transferencia de la habilidad a contexto funcional/terapéutico',ops:[0,1,2,3,4]},
]},
],
interp:(p)=>p>=39?{t:'Natación funcional consolidada, buen valor terapéutico.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=20?{t:'Natación funcional en desarrollo.',bg:'#FFF3EB',c:'#C05621'}:{t:'Natación funcional inicial. Continuar con progresión terapéutica.',bg:'#FFF5F5',c:'#C53030'},
},

'apta-h':{
secciones:[
{n:'Cada dominio se puntúa de 0 (peor) a 10 (mejor funcionalidad)',items:[
{t:'Movilidad general en el agua',ops:[0,2,4,6,8,10]},
{t:'Fuerza funcional demostrada en el agua',ops:[0,2,4,6,8,10]},
{t:'Resistencia cardiorrespiratoria en el agua',ops:[0,2,4,6,8,10]},
{t:'Equilibrio y control postural acuático',ops:[0,2,4,6,8,10]},
{t:'Coordinación motora en el agua',ops:[0,2,4,6,8,10]},
{t:'Independencia en transferencias acuáticas',ops:[0,2,4,6,8,10]},
{t:'Tolerancia al ejercicio acuático',ops:[0,2,4,6,8,10]},
{t:'Participación y motivación en la sesión',ops:[0,2,4,6,8,10]},
{t:'Seguridad demostrada en el agua',ops:[0,2,4,6,8,10]},
{t:'Progreso funcional general reportado',ops:[0,2,4,6,8,10]},
]},
],
interp:(p)=>p>=80?{t:'Resultado funcional excelente en hidroterapia.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=50?{t:'Resultado funcional moderado en hidroterapia.',bg:'#FFF3EB',c:'#C05621'}:{t:'Resultado funcional bajo. Revisar plan terapéutico acuático.',bg:'#FFF5F5',c:'#C53030'},
},

'hydrophy':{
secciones:[
{n:'10 dominios de progresión clínica en hidroterapia neurológica (0-5 por dominio)',items:[
{t:'Ajuste al medio acuático',ops:[0,1,2,3,4,5]},
{t:'Control postural en el agua',ops:[0,1,2,3,4,5]},
{t:'Movilidad funcional acuática',ops:[0,1,2,3,4,5]},
{t:'Fuerza muscular funcional',ops:[0,1,2,3,4,5]},
{t:'Coordinación motora',ops:[0,1,2,3,4,5]},
{t:'Equilibrio dinámico',ops:[0,1,2,3,4,5]},
{t:'Resistencia al esfuerzo',ops:[0,1,2,3,4,5]},
{t:'Independencia en transferencias',ops:[0,1,2,3,4,5]},
{t:'Participación activa en la sesión',ops:[0,1,2,3,4,5]},
{t:'Progreso general respecto a sesiones previas',ops:[0,1,2,3,4,5]},
]},
],
interp:(p)=>p>=40?{t:'Progresión clínica avanzada en hidroterapia.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=20?{t:'Progresión clínica moderada.',bg:'#FFF3EB',c:'#C05621'}:{t:'Progresión clínica inicial. Reforzar el plan terapéutico.',bg:'#FFF5F5',c:'#C53030'},
},

'sf36':{
secciones:[
{n:'8 dominios de calidad de vida (0=Peor estado de salud, máximo=Mejor estado de salud)',items:[
{t:'Función física',ops:[0,4,8,11,15]},
{t:'Rol físico (limitaciones por salud física)',ops:[0,4,8,11,15]},
{t:'Dolor corporal',ops:[0,3,5,8,10]},
{t:'Salud general',ops:[0,4,8,11,15]},
{t:'Vitalidad',ops:[0,3,5,8,10]},
{t:'Función social',ops:[0,4,8,11,15]},
{t:'Rol emocional (limitaciones por problemas emocionales)',ops:[0,3,5,8,10]},
{t:'Salud mental',ops:[0,3,5,8,10]},
]},
],
interp:(p)=>p>=80?{t:'Calidad de vida relacionada con la salud alta.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=50?{t:'Calidad de vida relacionada con la salud moderada.',bg:'#FFF3EB',c:'#C05621'}:{t:'Calidad de vida relacionada con la salud baja. Requiere atención integral.',bg:'#FFF5F5',c:'#C53030'},
},

'sppb-h':{
secciones:[
{n:'Equilibrio en el agua',items:[
{t:'Equilibrio en pies juntos (agua a la cintura)',ops:[0,1]},
{t:'Equilibrio semi-tándem en el agua',ops:[0,1]},
{t:'Equilibrio en tándem completo en el agua',ops:[0,1,2]},
]},
{n:'Desplazamiento en el agua (4 metros)',items:[
{t:'Tiempo/desempeño al desplazarse 4m en el agua',ops:[0,1,2,3,4]},
]},
{n:'Levantadas asistidas (en el agua)',items:[
{t:'Desempeño en levantadas asistidas repetidas',ops:[0,1,2,3,4]},
]},
],
interp:(p)=>p>=10?{t:'Función física global buena en el agua.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=7?{t:'Función física global moderada en el agua.',bg:'#FFF3EB',c:'#C05621'}:{t:'Función física global baja en el agua. Alto riesgo funcional.',bg:'#FFF5F5',c:'#C53030'},
},

'odi-h':{
secciones:[
{n:'Cada sección se puntúa de 0 (mejor) a 10 (peor) en el contexto de hidroterapia',items:[
{t:'Intensidad del dolor durante la sesión acuática',ops:[0,2,4,6,8,10]},
{t:'Cuidado personal antes/después de la sesión',ops:[0,2,4,6,8,10]},
{t:'Capacidad de levantar objetos en el agua',ops:[0,2,4,6,8,10]},
{t:'Caminar en el agua',ops:[0,2,4,6,8,10]},
{t:'Tolerancia a estar sentado (antes/después)',ops:[0,2,4,6,8,10]},
{t:'Tolerancia a estar de pie en el agua',ops:[0,2,4,6,8,10]},
{t:'Calidad del sueño (impacto del dolor)',ops:[0,2,4,6,8,10]},
{t:'Impacto en la vida social',ops:[0,2,4,6,8,10]},
{t:'Impacto en actividades recreativas/deportivas',ops:[0,2,4,6,8,10]},
{t:'Impacto general en la participación en hidroterapia',ops:[0,2,4,6,8,10]},
]},
],
interp:(p)=>p<=20?{t:'Impacto del dolor mínimo en la hidroterapia.',bg:'#E8F5F0',c:'#1A7A5E'}:p<=40?{t:'Impacto del dolor moderado.',bg:'#FFF3EB',c:'#C05621'}:p<=60?{t:'Impacto del dolor severo.',bg:'#FFF5F5',c:'#C53030'}:{t:'Impacto del dolor muy severo. Revisar tolerancia a la terapia acuática.',bg:'#FFF5F5',c:'#C53030'},
},
