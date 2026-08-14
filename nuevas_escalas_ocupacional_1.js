// ============================================================
// LOTE 6 — Terapia Ocupacional
// ============================================================

'fim':{
secciones:[
{n:'Área Motora (1=Asistencia total, 7=Independencia completa)',items:[
{t:'Alimentación',ops:[1,2,3,4,5,6,7]},
{t:'Arreglo personal',ops:[1,2,3,4,5,6,7]},
{t:'Baño',ops:[1,2,3,4,5,6,7]},
{t:'Vestido — tren superior',ops:[1,2,3,4,5,6,7]},
{t:'Vestido — tren inferior',ops:[1,2,3,4,5,6,7]},
{t:'Uso del inodoro',ops:[1,2,3,4,5,6,7]},
{t:'Control vesical',ops:[1,2,3,4,5,6,7]},
{t:'Control intestinal',ops:[1,2,3,4,5,6,7]},
{t:'Transferencia cama/silla/silla de ruedas',ops:[1,2,3,4,5,6,7]},
{t:'Transferencia al inodoro',ops:[1,2,3,4,5,6,7]},
{t:'Transferencia a bañera/ducha',ops:[1,2,3,4,5,6,7]},
{t:'Locomoción — marcha o silla de ruedas',ops:[1,2,3,4,5,6,7]},
{t:'Locomoción — escaleras',ops:[1,2,3,4,5,6,7]},
]},
{n:'Área Cognitiva (1=Asistencia total, 7=Independencia completa)',items:[
{t:'Comprensión',ops:[1,2,3,4,5,6,7]},
{t:'Expresión',ops:[1,2,3,4,5,6,7]},
{t:'Interacción social',ops:[1,2,3,4,5,6,7]},
{t:'Resolución de problemas',ops:[1,2,3,4,5,6,7]},
{t:'Memoria',ops:[1,2,3,4,5,6,7]},
]},
],
interp:(p)=>p>=108?{t:'Independencia funcional alta.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=72?{t:'Dependencia leve a modesta. Requiere supervisión o asistencia mínima.',bg:'#FFF3EB',c:'#C05621'}:p>=36?{t:'Dependencia moderada. Requiere asistencia considerable.',bg:'#FFF3EB',c:'#C05621'}:{t:'Dependencia severa a total. Requiere asistencia máxima o completa.',bg:'#FFF5F5',c:'#C53030'},
},

'weefim':{
secciones:[
{n:'Área Motora pediátrica (1=Asistencia total, 7=Independencia completa para la edad)',items:[
{t:'Alimentación',ops:[1,2,3,4,5,6,7]},
{t:'Arreglo personal',ops:[1,2,3,4,5,6,7]},
{t:'Baño',ops:[1,2,3,4,5,6,7]},
{t:'Vestido — tren superior',ops:[1,2,3,4,5,6,7]},
{t:'Vestido — tren inferior',ops:[1,2,3,4,5,6,7]},
{t:'Uso del inodoro',ops:[1,2,3,4,5,6,7]},
{t:'Control vesical',ops:[1,2,3,4,5,6,7]},
{t:'Control intestinal',ops:[1,2,3,4,5,6,7]},
{t:'Transferencia cama/silla',ops:[1,2,3,4,5,6,7]},
{t:'Transferencia al inodoro',ops:[1,2,3,4,5,6,7]},
{t:'Transferencia a bañera/ducha',ops:[1,2,3,4,5,6,7]},
{t:'Locomoción — marcha o silla de ruedas',ops:[1,2,3,4,5,6,7]},
{t:'Locomoción — escaleras',ops:[1,2,3,4,5,6,7]},
]},
{n:'Área Cognitiva pediátrica',items:[
{t:'Comprensión',ops:[1,2,3,4,5,6,7]},
{t:'Expresión',ops:[1,2,3,4,5,6,7]},
{t:'Interacción social',ops:[1,2,3,4,5,6,7]},
{t:'Resolución de problemas',ops:[1,2,3,4,5,6,7]},
{t:'Memoria',ops:[1,2,3,4,5,6,7]},
]},
],
interp:(p)=>p>=108?{t:'Independencia funcional alta para la edad.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=72?{t:'Dependencia leve para la edad.',bg:'#FFF3EB',c:'#C05621'}:p>=36?{t:'Dependencia moderada para la edad.',bg:'#FFF3EB',c:'#C05621'}:{t:'Dependencia severa para la edad. Requiere asistencia máxima.',bg:'#FFF5F5',c:'#C53030'},
},

'lawton':{
secciones:[
{n:'Actividades Instrumentales de la Vida Diaria (1=Capaz de forma independiente, 0=Incapaz o requiere ayuda)',items:[
{t:'Capacidad de usar el teléfono',ops:[0,1]},
{t:'Hacer compras',ops:[0,1]},
{t:'Preparación de la comida',ops:[0,1]},
{t:'Cuidado de la casa',ops:[0,1]},
{t:'Lavado de ropa',ops:[0,1]},
{t:'Uso de medios de transporte',ops:[0,1]},
{t:'Responsabilidad sobre su medicación',ops:[0,1]},
{t:'Manejo de sus asuntos económicos',ops:[0,1]},
]},
],
interp:(p)=>p>=6?{t:'Buena independencia en AIVD.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=4?{t:'Independencia moderada en AIVD.',bg:'#FFF3EB',c:'#C05621'}:{t:'Dependencia importante en AIVD. Requiere apoyo en el hogar.',bg:'#FFF5F5',c:'#C53030'},
},

'lotca':{
secciones:[
{n:'Orientación (temporal y espacial)',items:[
{t:'Orientación temporal y espacial global',ops:[0,2,4,6,8]},
]},
{n:'Percepción (identificación de objetos, formas, colores, figura-fondo)',items:[
{t:'Percepción visual y de formas global',ops:[0,4,8,12,16,20,24,28,32]},
]},
{n:'Organización visomotora (copia de figuras, construcción, praxis)',items:[
{t:'Organización visomotora y praxis global',ops:[0,6,12,18,24,30,36,42,48]},
]},
{n:'Operaciones mentales (categorización, secuenciación, razonamiento)',items:[
{t:'Operaciones mentales global',ops:[0,4,8,12,16,20,24,28,31]},
]},
],
interp:(p)=>p>=95?{t:'Funcionamiento cognitivo-perceptual dentro de la normalidad.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=60?{t:'Deterioro cognitivo-perceptual leve a moderado.',bg:'#FFF3EB',c:'#C05621'}:{t:'Deterioro cognitivo-perceptual importante. Requiere intervención específica.',bg:'#FFF5F5',c:'#C53030'},
},

'copm':{
secciones:[
{n:'Medida Canadiense de Desempeño Ocupacional — Puntaje promedio (1=Muy bajo desempeño/satisfacción, 10=Excelente desempeño/satisfacción)',items:[
{t:'Puntaje promedio (desempeño y/o satisfacción) en las actividades priorizadas por el paciente',ops:[1,2,3,4,5,6,7,8,9,10]},
]},
],
interp:(p)=>p>=8?{t:'Alto desempeño/satisfacción ocupacional percibido.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=5?{t:'Desempeño/satisfacción ocupacional moderado.',bg:'#FFF3EB',c:'#C05621'}:{t:'Bajo desempeño/satisfacción ocupacional. Priorizar en el plan terapéutico.',bg:'#FFF5F5',c:'#C53030'},
},
