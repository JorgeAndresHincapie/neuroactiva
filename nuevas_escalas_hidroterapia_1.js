// ============================================================
// LOTE 4 — Hidroterapia (agregar dentro de ITEMS_DETALLE)
// ============================================================

'wota1':{
secciones:[
{n:'Halliwick WOTA1 — Ajuste mental y control postural básico en el agua (0=No logra, 1=Parcial, 2=Logra completamente)',items:[
{t:'Ajuste mental: acepta la entrada al agua sin angustia',ops:[0,1,2]},
{t:'Control de la cabeza en posición vertical',ops:[0,1,2]},
{t:'Control de rotación sagital (adelante-atrás)',ops:[0,1,2]},
{t:'Control de rotación transversal (lateral)',ops:[0,1,2]},
{t:'Control de rotación longitudinal (giro sobre el eje)',ops:[0,1,2]},
{t:'Equilibrio estático en flotación asistida',ops:[0,1,2]},
{t:'Inhibición (permanece quieto cuando se le indica)',ops:[0,1,2]},
{t:'Facilitación (se mueve cuando se le indica)',ops:[0,1,2]},
{t:'Equilibrio dinámico (mantiene postura al desplazarse)',ops:[0,1,2]},
{t:'Turbulencia (tolera y responde a olas/movimiento del agua)',ops:[0,1,2]},
]},
],
interp:(p)=>p>=16?{t:'Buen ajuste mental y control postural básico en agua.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=8?{t:'Ajuste mental y control postural en desarrollo.',bg:'#FFF3EB',c:'#C05621'}:{t:'Ajuste mental inicial. Requiere apoyo constante en el agua.',bg:'#FFF5F5',c:'#C53030'},
},

'wota2':{
secciones:[
{n:'Halliwick WOTA2 — Habilidades avanzadas: control rotacional, desplazamiento y nado básico (0=No logra, 1=Parcial, 2=Logra completamente)',items:[
{t:'Control rotacional sagital avanzado',ops:[0,1,2]},
{t:'Control rotacional transversal avanzado',ops:[0,1,2]},
{t:'Control rotacional longitudinal avanzado',ops:[0,1,2]},
{t:'Equilibrio dinámico avanzado con resistencia',ops:[0,1,2]},
{t:'Deslizamiento asistido',ops:[0,1,2]},
{t:'Propulsión con brazos',ops:[0,1,2]},
{t:'Propulsión con piernas',ops:[0,1,2]},
{t:'Coordinación de brazada básica',ops:[0,1,2]},
{t:'Respiración controlada (exhalar dentro del agua)',ops:[0,1,2]},
{t:'Flotación independiente en supino',ops:[0,1,2]},
{t:'Flotación independiente en prono',ops:[0,1,2]},
{t:'Desplazamiento independiente corto (3-5m)',ops:[0,1,2]},
{t:'Cambio de dirección independiente',ops:[0,1,2]},
{t:'Entrada y salida del agua de forma segura',ops:[0,1,2]},
{t:'Nado independiente (cualquier estilo, distancia corta)',ops:[0,1,2]},
{t:'Resistencia al nadar (mantiene el esfuerzo)',ops:[0,1,2]},
{t:'Seguridad acuática básica (reconoce riesgos)',ops:[0,1,2]},
{t:'Autonomía general en el medio acuático',ops:[0,1,2]},
{t:'Confianza y disfrute demostrado en el agua',ops:[0,1,2]},
{t:'Transferencia de habilidades a nado libre',ops:[0,1,2]},
]},
],
interp:(p)=>p>=32?{t:'Habilidades acuáticas avanzadas consolidadas.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=16?{t:'Habilidades acuáticas avanzadas en desarrollo.',bg:'#FFF3EB',c:'#C05621'}:{t:'Habilidades acuáticas avanzadas iniciales. Continuar con progresión Halliwick.',bg:'#FFF5F5',c:'#C53030'},
},

'borg-rpe':{
secciones:[
{n:'Escala de Borg RPE (Esfuerzo Percibido) — Seleccionar el nivel reportado por el paciente durante el ejercicio acuático',items:[
{t:'Nivel de esfuerzo percibido (6=Reposo absoluto, 9=Muy ligero, 13=Algo intenso, 15=Intenso, 17=Muy intenso, 19-20=Esfuerzo máximo)',ops:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]},
]},
],
interp:(p)=>p<=11?{t:'Esfuerzo muy ligero. Puede aumentarse la intensidad si el objetivo lo requiere.',bg:'#E8F5F0',c:'#1A7A5E'}:p<=15?{t:'Esfuerzo moderado. Intensidad adecuada para la mayoría de programas terapéuticos.',bg:'#E8F5F0',c:'#1A7A5E'}:p<=17?{t:'Esfuerzo intenso. Monitorear tolerancia del paciente.',bg:'#FFF3EB',c:'#C05621'}:{t:'Esfuerzo muy intenso a máximo. Evaluar si es apropiado continuar.',bg:'#FFF5F5',c:'#C53030'},
},

'borg-cr10':{
secciones:[
{n:'Escala de Borg CR-10 — Intensidad de disnea, dolor o esfuerzo percibido',items:[
{t:'Nivel percibido (0=Nada, 0.5=Muy muy leve, 1=Muy leve, 2=Leve, 3=Moderado, 4-6=Algo intenso a intenso, 7-9=Muy intenso, 10=Máximo absoluto)',ops:[0,1,2,3,4,5,6,7,8,9,10]},
]},
],
interp:(p)=>p<=2?{t:'Síntoma leve o ausente.',bg:'#E8F5F0',c:'#1A7A5E'}:p<=5?{t:'Síntoma moderado.',bg:'#FFF3EB',c:'#C05621'}:{t:'Síntoma intenso a máximo. Considerar reducir intensidad del ejercicio.',bg:'#FFF5F5',c:'#C53030'},
},

'fear-w':{
secciones:[
{n:'Fear of Water Scale — Nivel de miedo/ansiedad al agua reportado por el paciente',items:[
{t:'Nivel de miedo al agua (0=Ninguno ... 10=Pánico)',ops:[0,1,2,3,4,5,6,7,8,9,10]},
]},
],
interp:(p)=>p===0?{t:'Sin ansiedad al agua.',bg:'#E8F5F0',c:'#1A7A5E'}:p<=3?{t:'Ansiedad leve al agua.',bg:'#E8F5F0',c:'#1A7A5E'}:p<=6?{t:'Ansiedad moderada al agua. Requiere progresión gradual.',bg:'#FFF3EB',c:'#C05621'}:{t:'Ansiedad severa o pánico al agua. Requiere abordaje especializado antes de continuar.',bg:'#FFF5F5',c:'#C53030'},
},

'frt':{
secciones:[
{n:'Functional Reach Test — Distancia máxima alcanzada hacia adelante sin perder el equilibrio',items:[
{t:'Distancia alcanzada en cm (rangos de referencia)',ops:[0,10,15,20,25,30,35]},
]},
],
interp:(p)=>p>=25?{t:'Control postural normal, bajo riesgo de caídas.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=15?{t:'Riesgo moderado de caídas.',bg:'#FFF3EB',c:'#C05621'}:{t:'Alto riesgo de caídas. Control postural muy limitado.',bg:'#FFF5F5',c:'#C53030'},
},
