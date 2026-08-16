/* ============================================================
   BLOQUE PARA PEGAR DENTRO DE ITEMS_DETALLE
   ============================================================
   Aplicar PRIMERO los cambios de CAMBIOS_BANCO_psico_neuropsico.txt
   en tu BANCO (agregar las 3 líneas nuevas), luego pegar este bloque.
   ============================================================ */

'zarit':{
secciones:[
{n:'Carga del Cuidador (0=Nunca, 1=Rara vez, 2=Algunas veces, 3=Bastantes veces, 4=Casi siempre)',items:[
{t:'¿Siente que su familiar solicita más ayuda de la que realmente necesita?',ops:[0,1,2,3,4]},
{t:'¿Siente que a causa del tiempo que dedica a su familiar ya no tiene tiempo suficiente para usted?',ops:[0,1,2,3,4]},
{t:'¿Se siente estresado/a al tener que cuidar a su familiar y atender otras responsabilidades?',ops:[0,1,2,3,4]},
{t:'¿Se siente avergonzado/a por la conducta de su familiar?',ops:[0,1,2,3,4]},
{t:'¿Se siente enfadado/a cuando está cerca de su familiar?',ops:[0,1,2,3,4]},
{t:'¿Piensa que cuidar a su familiar afecta negativamente su relación con otros miembros de la familia?',ops:[0,1,2,3,4]},
{t:'¿Siente temor por el futuro de su familiar?',ops:[0,1,2,3,4]},
{t:'¿Piensa que su familiar depende de usted?',ops:[0,1,2,3,4]},
{t:'¿Se siente tenso/a cuando está cerca de su familiar?',ops:[0,1,2,3,4]},
{t:'¿Piensa que su salud ha empeorado debido a tener que cuidar a su familiar?',ops:[0,1,2,3,4]},
{t:'¿Siente que no tiene tanta intimidad como le gustaría debido a cuidar a su familiar?',ops:[0,1,2,3,4]},
{t:'¿Siente que su vida social se ha visto afectada negativamente por cuidar a su familiar?',ops:[0,1,2,3,4]},
{t:'¿Se siente incómodo/a por distanciarse de sus amistades debido a cuidar a su familiar?',ops:[0,1,2,3,4]},
{t:'¿Piensa que su familiar le considera a usted la única persona que le puede cuidar?',ops:[0,1,2,3,4]},
{t:'¿Piensa que no tiene suficientes ingresos para cuidar a su familiar, además de sus otros gastos?',ops:[0,1,2,3,4]},
{t:'¿Piensa que no será capaz de cuidar a su familiar por mucho más tiempo?',ops:[0,1,2,3,4]},
{t:'¿Siente que ha perdido el control de su vida desde que la enfermedad de su familiar se manifestó?',ops:[0,1,2,3,4]},
{t:'¿Desearía poder dejar el cuidado de su familiar a otra persona?',ops:[0,1,2,3,4]},
{t:'¿Se siente indeciso/a sobre qué hacer con su familiar?',ops:[0,1,2,3,4]},
{t:'¿Piensa que debería hacer más por su familiar?',ops:[0,1,2,3,4]},
{t:'¿Piensa que podría cuidar mejor a su familiar?',ops:[0,1,2,3,4]},
{t:'En general, ¿qué grado de sobrecarga experimenta por el hecho de cuidar a su familiar?',ops:[0,1,2,3,4]},
]},
],
interp:(p)=>p<=46?{t:'Sin sobrecarga.',bg:'#E8F5F0',c:'#1A7A5E'}:p<=55?{t:'Sobrecarga leve.',bg:'#FFF3EB',c:'#C05621'}:{t:'Sobrecarga intensa. Requiere apoyo urgente al cuidador.',bg:'#FFF5F5',c:'#C53030'},
},
'mmse':{
secciones:[
{n:'Orientación Temporal',items:[
{t:'Año',ops:[0,1]},{t:'Estación',ops:[0,1]},{t:'Mes',ops:[0,1]},
{t:'Día del mes',ops:[0,1]},{t:'Día de la semana',ops:[0,1]},
]},
{n:'Orientación Espacial',items:[
{t:'Lugar exacto (hospital/casa)',ops:[0,1]},{t:'Piso/Planta',ops:[0,1]},
{t:'Ciudad',ops:[0,1]},{t:'Provincia/Estado',ops:[0,1]},{t:'País',ops:[0,1]},
]},
{n:'Fijación / Registro',items:[
{t:'Palabra 1 repetida correctamente',ops:[0,1]},
{t:'Palabra 2 repetida correctamente',ops:[0,1]},
{t:'Palabra 3 repetida correctamente',ops:[0,1]},
]},
{n:'Atención y Cálculo',items:[
{t:'Paso 1 correcto (100-7 o deletrear MUNDO)',ops:[0,1]},
{t:'Paso 2 correcto',ops:[0,1]},
{t:'Paso 3 correcto',ops:[0,1]},
{t:'Paso 4 correcto',ops:[0,1]},
{t:'Paso 5 correcto',ops:[0,1]},
]},
{n:'Evocación',items:[
{t:'Palabra 1 recordada',ops:[0,1]},
{t:'Palabra 2 recordada',ops:[0,1]},
{t:'Palabra 3 recordada',ops:[0,1]},
]},
{n:'Lenguaje y Praxis',items:[
{t:'Nombrar un reloj',ops:[0,1]},
{t:'Nombrar un bolígrafo',ops:[0,1]},
{t:'Repetir la frase: "Ni sí, ni no, ni pero"',ops:[0,1]},
{t:'Orden 3 tiempos - Paso 1: tomar papel con mano derecha',ops:[0,1]},
{t:'Orden 3 tiempos - Paso 2: doblarlo por la mitad',ops:[0,1]},
{t:'Orden 3 tiempos - Paso 3: ponerlo en el suelo',ops:[0,1]},
{t:'Leer y ejecutar: "CIERRE LOS OJOS"',ops:[0,1]},
{t:'Escribir una frase con sentido',ops:[0,1]},
{t:'Copiar el dibujo de dos pentágonos cruzados',ops:[0,1]},
]},
],
interp:(p)=>p>=27?{t:'Normal / Sin deterioro cognitivo.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=24?{t:'Sospecha / Deterioro cognitivo leve.',bg:'#FFF3EB',c:'#C05621'}:p>=12?{t:'Deterioro cognitivo moderado.',bg:'#FFF3EB',c:'#C05621'}:{t:'Deterioro cognitivo severo.',bg:'#FFF5F5',c:'#C53030'},
},
'reloj':{
secciones:[
{n:'Criterios del Dibujo del Reloj',items:[
{t:'Dibuja una circunferencia cerrada y con forma aceptable',ops:[0,1]},
{t:'Incluye todos los números del 1 al 12',ops:[0,1]},
{t:'Los números están en el orden correcto',ops:[0,1]},
{t:'Los números guardan distribución espacial simétrica',ops:[0,1]},
{t:'Los números están en la posición horaria exacta',ops:[0,1]},
{t:'El reloj incluye las dos manecillas',ops:[0,1]},
{t:'La manecilla de la hora apunta al número indicado',ops:[0,1]},
{t:'La manecilla de los minutos apunta al número indicado',ops:[0,1]},
{t:'Las dos manecillas se unen claramente en el centro',ops:[0,1]},
{t:'La proporción de tamaño entre las manecillas es correcta',ops:[0,1]},
]},
],
interp:(p)=>p>=7?{t:'Normal. Función ejecutiva conservada.',bg:'#E8F5F0',c:'#1A7A5E'}:{t:'Positivo para deterioro cognitivo / Apraxia.',bg:'#FFF5F5',c:'#C53030'},
},
'ace3':{
secciones:[
{n:'Dominios Cognitivos (seleccionar el puntaje obtenido en cada dominio)',items:[
{t:'Atención (máx. 18)',ops:[0,2,4,6,8,10,12,14,16,18]},
{t:'Memoria (máx. 26)',ops:[0,3,6,9,12,15,18,21,23,26]},
{t:'Fluidez Verbal (máx. 14)',ops:[0,2,4,6,8,10,12,14]},
{t:'Lenguaje (máx. 26)',ops:[0,3,6,9,12,15,18,21,23,26]},
{t:'Habilidades Visoespaciales (máx. 16)',ops:[0,2,4,6,8,10,12,14,16]},
]},
],
interp:(p)=>p>=88?{t:'Normal.',bg:'#E8F5F0',c:'#1A7A5E'}:p>=83?{t:'Sospecha/Límite de deterioro cognitivo.',bg:'#FFF3EB',c:'#C05621'}:{t:'Altamente predictivo de síndrome demencial.',bg:'#FFF5F5',c:'#C53030'},
},
