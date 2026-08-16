/* ============================================================
   BLOQUE PARA PEGAR DENTRO DE ITEMS_DETALLE
   ============================================================
   4 escalas nuevas: borg-cr10, aim (Hidroterapia), rbmt, bads
   (Neuropsicología). Todas coinciden con el max ya declarado en
   tu BANCO — no requieren cambios en BANCO.
   ============================================================ */

'borg-cr10':{
secciones:[
{n:'Escala de Borg Modificada CR-10 (Disnea/Dolor/Esfuerzo)',items:[
{t:'Nivel percibido',ops:[0,0.5,1,2,3,4,5,6,7,8,9,10]},
]},
],
interp:(p)=>p===0?{t:'Nada en absoluto.',bg:'#E8F5F0',c:'#1A7A5E'}:p<=2?{t:'Leve/Débil.',bg:'#E8F5F0',c:'#1A7A5E'}:p<=4?{t:'Moderado.',bg:'#FFF3EB',c:'#C05621'}:p<=6?{t:'Algo fuerte a fuerte.',bg:'#FFF3EB',c:'#C05621'}:{t:'Muy fuerte a máximo absoluto.',bg:'#FFF5F5',c:'#C53030'},
},
'aim':{
secciones:[
{n:'Control Vertical y Horizontal (0-3 c/u)',items:[
{t:'Control vertical del tronco',ops:[0,1,2,3]},
{t:'Control horizontal (flotación)',ops:[0,1,2,3]},
{t:'Transiciones verticales-horizontales',ops:[0,1,2,3]},
{t:'Estabilidad de cadera y rodilla en el agua',ops:[0,1,2,3]},
]},
{n:'Control Respiratorio y Propulsión (0-3 c/u)',items:[
{t:'Control respiratorio (inmersión facial)',ops:[0,1,2,3]},
{t:'Espiración controlada en el agua',ops:[0,1,2,3]},
{t:'Propulsión con extremidades inferiores',ops:[0,1,2,3]},
{t:'Propulsión con extremidades superiores',ops:[0,1,2,3]},
]},
{n:'Independencia Funcional en el Agua (0-3 c/u)',items:[
{t:'Entrada al agua',ops:[0,1,2,3]},
{t:'Salida del agua',ops:[0,1,2,3]},
{t:'Desplazamiento independiente 5m',ops:[0,1,2,3]},
{t:'Recuperación de posición segura tras desequilibrio',ops:[0,1,2,3]},
{t:'Uso de ayudas técnicas acuáticas si aplica',ops:[0,1,2,3]},
{t:'Seguridad general percibida por el terapeuta',ops:[0,1,2,3]},
{t:'Tolerancia a la inmersión prolongada',ops:[0,1,2,3]},
{t:'Comunicación y seguimiento de instrucciones en el agua',ops:[0,1,2,3]},
]},
],
interp:(p)=>p>=36?{t:'Independencia acuática alta.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=18?{t:'Independencia acuática moderada.',bg:'#FFF3EB',c:'#C05621'}:{t:'Dependencia acuática alta. Requiere asistencia constante.',bg:'#FFF5F5',c:'#C53030'},
},
'rbmt':{
secciones:[
{n:'Memoria Cotidiana (12 subtests, 0-2 c/u: 0=fallo, 1=parcial, 2=correcto)',items:[
{t:'Recordar un nombre',ops:[0,1,2]},
{t:'Recordar una cara',ops:[0,1,2]},
{t:'Recordar dónde escondió un objeto personal',ops:[0,1,2]},
{t:'Recordar una cita a una hora determinada',ops:[0,1,2]},
{t:'Reconocer una fotografía vista antes',ops:[0,1,2]},
{t:'Recordar un mensaje breve tras una demora',ops:[0,1,2]},
{t:'Reconocer una ruta corta recorrida antes',ops:[0,1,2]},
{t:'Recordar dónde entregó un objeto durante la ruta',ops:[0,1,2]},
{t:'Recordar información de una historia breve leída',ops:[0,1,2]},
{t:'Orientación (fecha, lugar, situación actual)',ops:[0,1,2]},
{t:'Reconocer la fecha correcta',ops:[0,1,2]},
{t:'Reconocer su propia cara en una foto reciente',ops:[0,1,2]},
]},
],
interp:(p)=>p>=22?{t:'Memoria funcional cotidiana normal.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=15?{t:'Deterioro leve de memoria funcional.',bg:'#FFF3EB',c:'#C05621'}:p>=10?{t:'Deterioro moderado de memoria funcional.',bg:'#FFF3EB',c:'#C05621'}:{t:'Deterioro severo de memoria funcional. Alto impacto en autonomía diaria.',bg:'#FFF5F5',c:'#C53030'},
},
'bads':{
secciones:[
{n:'Pruebas Ecológicas de Función Ejecutiva (6 subtests, 0-4 c/u)',items:[
{t:'Prueba de Cambio de Regla (Card Sorting simplificado)',ops:[0,1,2,3,4]},
{t:'Prueba del Programa de Acción (resolución de problema práctico)',ops:[0,1,2,3,4]},
{t:'Prueba de Búsqueda de Llaves (planificación espacial)',ops:[0,1,2,3,4]},
{t:'Prueba de Juicio Temporal (estimación de tiempos cotidianos)',ops:[0,1,2,3,4]},
{t:'Prueba del Mapa del Zoológico (planificación de ruta con reglas)',ops:[0,1,2,3,4]},
{t:'Prueba de las Seis Elementos Modificada (organización multitarea)',ops:[0,1,2,3,4]},
]},
],
interp:(p)=>p>=18?{t:'Función ejecutiva conservada en tareas ecológicas.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=10?{t:'Disfunción ejecutiva leve a moderada. Afecta planificación de tareas complejas.',bg:'#FFF3EB',c:'#C05621'}:{t:'Síndrome disejecutivo severo. Alto impacto en autonomía e independencia funcional.',bg:'#FFF5F5',c:'#C53030'},
},
