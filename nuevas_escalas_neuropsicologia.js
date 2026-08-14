// ============================================================
// LOTE 11 — Neuropsicología — cierra todas las especialidades
// ============================================================

'mmse':{
secciones:[
{n:'Orientación temporal (0=Incorrecto, 1=Correcto)',items:[
{t:'Año',ops:[0,1]},
{t:'Estación',ops:[0,1]},
{t:'Mes',ops:[0,1]},
{t:'Día de la semana',ops:[0,1]},
{t:'Fecha (día del mes)',ops:[0,1]},
]},
{n:'Orientación espacial',items:[
{t:'País',ops:[0,1]},
{t:'Departamento/Estado',ops:[0,1]},
{t:'Ciudad',ops:[0,1]},
{t:'Lugar (hospital/consultorio)',ops:[0,1]},
{t:'Piso/Planta',ops:[0,1]},
]},
{n:'Registro (repite 3 palabras: manzana, mesa, moneda)',items:[
{t:'Repite palabra 1',ops:[0,1]},
{t:'Repite palabra 2',ops:[0,1]},
{t:'Repite palabra 3',ops:[0,1]},
]},
{n:'Atención y cálculo',items:[
{t:'Resta serial de 7 en 7 desde 100 (número de restas correctas, máx 5)',ops:[0,1,2,3,4,5]},
]},
{n:'Recuerdo diferido de las 3 palabras',items:[
{t:'Recuerda palabra 1',ops:[0,1]},
{t:'Recuerda palabra 2',ops:[0,1]},
{t:'Recuerda palabra 3',ops:[0,1]},
]},
{n:'Lenguaje y construcción',items:[
{t:'Nombra objeto 1 (lápiz)',ops:[0,1]},
{t:'Nombra objeto 2 (reloj)',ops:[0,1]},
{t:'Repite la frase "En un trigal había cinco perros"',ops:[0,1]},
{t:'Orden de 3 pasos (tome el papel, dóblelo, colóquelo en el suelo)',ops:[0,1,2,3]},
{t:'Lee y obedece la orden escrita "Cierre los ojos"',ops:[0,1]},
{t:'Escribe una frase completa espontánea',ops:[0,1]},
{t:'Copia el diseño de dos pentágonos entrelazados',ops:[0,1]},
]},
],
interp:(p)=>p>=24?{t:'Sin deterioro cognitivo significativo.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=19?{t:'Deterioro cognitivo leve.',bg:'#FFF3EB',c:'#C05621'}:p>=14?{t:'Deterioro cognitivo moderado.',bg:'#FFF5F5',c:'#C53030'}:{t:'Deterioro cognitivo severo.',bg:'#FFF5F5',c:'#C53030'},
},

'rey-fig':{
secciones:[
{n:'Elementos de la figura (0=Ausente, 1=Presente pero distorsionado/mal ubicado, 2=Presente y correctamente ubicado)',items:[
{t:'Rectángulo grande (estructura base)',ops:[0,1,2]},
{t:'Diagonal cruzando el rectángulo (esquina a esquina)',ops:[0,1,2]},
{t:'Otra diagonal cruzada',ops:[0,1,2]},
{t:'Línea horizontal media',ops:[0,1,2]},
{t:'Línea vertical media',ops:[0,1,2]},
{t:'Cuadrado pequeño superior izquierdo',ops:[0,1,2]},
{t:'Círculo con tres puntos',ops:[0,1,2]},
{t:'Cinco líneas paralelas (zona superior derecha)',ops:[0,1,2]},
{t:'Triángulo superior derecho',ops:[0,1,2]},
{t:'Línea vertical del triángulo',ops:[0,1,2]},
{t:'Línea que continúa la base hacia la derecha',ops:[0,1,2]},
{t:'Triángulo inferior derecho',ops:[0,1,2]},
{t:'Rombo/diamante inferior',ops:[0,1,2]},
{t:'Trazos paralelos dentro del rectángulo inferior izquierdo',ops:[0,1,2]},
{t:'Cruz superior izquierda',ops:[0,1,2]},
{t:'Cuadrado dentro del triángulo derecho',ops:[0,1,2]},
{t:'Línea diagonal dentro del cuadrado pequeño',ops:[0,1,2]},
{t:'Punto extra fuera del rectángulo principal',ops:[0,1,2]},
]},
],
interp:(p)=>p>=30?{t:'Organización visoconstructiva conservada.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=20?{t:'Alteración visoconstructiva leve a moderada.',bg:'#FFF3EB',c:'#C05621'}:{t:'Alteración visoconstructiva importante.',bg:'#FFF5F5',c:'#C53030'},
},

'rbmt':{
secciones:[
{n:'Subtests de memoria cotidiana (0=No recuerda, 2=Recuerda completamente)',items:[
{t:'Recuerdo del nombre presentado',ops:[0,1,2]},
{t:'Recuerdo del objeto escondido durante la sesión',ops:[0,1,2]},
{t:'Recuerdo de una cita/compromiso pactado',ops:[0,1,2]},
{t:'Reconocimiento de fotografías presentadas',ops:[0,1,2]},
{t:'Recuerdo inmediato de una ruta corta',ops:[0,1,2]},
{t:'Recuerdo diferido de la misma ruta',ops:[0,1,2]},
{t:'Recuerdo inmediato de un recado/mensaje',ops:[0,1,2]},
{t:'Recuerdo diferido del mismo recado/mensaje',ops:[0,1,2]},
{t:'Orientación general (persona, tiempo, lugar)',ops:[0,1,2]},
{t:'Conocimiento de la fecha actual',ops:[0,1,2]},
{t:'Reconocimiento facial de personas presentadas',ops:[0,1,2]},
{t:'Recuerdo (inmediato y diferido) de una breve historia narrada',ops:[0,1,2]},
]},
],
interp:(p)=>p>=17?{t:'Memoria cotidiana funcional conservada.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=10?{t:'Alteración leve a moderada de la memoria cotidiana.',bg:'#FFF3EB',c:'#C05621'}:{t:'Alteración importante de la memoria cotidiana. Impacto funcional relevante.',bg:'#FFF5F5',c:'#C53030'},
},

'bads':{
secciones:[
{n:'Pruebas ecológicas de función ejecutiva (0=Desempeño muy pobre, 4=Desempeño óptimo)',items:[
{t:'Regla del cambio (Rule Shift Cards)',ops:[0,1,2,3,4]},
{t:'Programa de acción (Action Program Test)',ops:[0,1,2,3,4]},
{t:'Búsqueda de llaves (Key Search Test)',ops:[0,1,2,3,4]},
{t:'Juicio temporal (Temporal Judgement Test)',ops:[0,1,2,3,4]},
{t:'Mapa del zoológico (Zoo Map Test)',ops:[0,1,2,3,4]},
{t:'Prueba de los seis elementos (Six Elements Test)',ops:[0,1,2,3,4]},
]},
],
interp:(p)=>p>=18?{t:'Función ejecutiva conductual dentro de la normalidad.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=10?{t:'Disfunción ejecutiva leve a moderada en tareas cotidianas.',bg:'#FFF3EB',c:'#C05621'}:{t:'Disfunción ejecutiva importante. Impacto significativo en la autonomía diaria.',bg:'#FFF5F5',c:'#C53030'},
},

'raven':{
secciones:[
{n:'Número de matrices correctas por serie (máx 12 por serie)',items:[
{t:'Serie A (matrices más simples)',ops:[0,3,6,9,12]},
{t:'Serie B',ops:[0,3,6,9,12]},
{t:'Serie C',ops:[0,3,6,9,12]},
{t:'Serie D',ops:[0,3,6,9,12]},
{t:'Serie E (matrices más complejas)',ops:[0,3,6,9,12]},
]},
],
interp:(p)=>p>=48?{t:'Razonamiento abstracto no verbal alto para el grupo normativo.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=24?{t:'Razonamiento abstracto no verbal dentro del rango promedio.',bg:'#E8F5F0',c:'#1A7A5E'}:{t:'Razonamiento abstracto no verbal por debajo del promedio. Considerar evaluación cognitiva más amplia.',bg:'#FFF3EB',c:'#C05621'},
},
