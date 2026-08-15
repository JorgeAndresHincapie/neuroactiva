/* ============================================================
   AMPS — Assessment of Motor and Process Skills
   (Habilidades Motoras y de Procesamiento)
   Especialidad: Terapia Ocupacional
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   36 ítems: Habilidades Motoras (16) + Habilidades de Procesamiento
   (20), escala 1-4. Se mantienen como DOS vectores separados (el
   documento no indica sumarlos en un total combinado).
   ============================================================ */

function opcionesAMPS() {
  return [
    { valor: 4, label: "4 - Competente: desempeño fluido, sin riesgo de error o interrupción" },
    { valor: 3, label: "3 - Cuestionable: ligeras fallas o torpezas; afecta la estética del movimiento pero no rompe la tarea" },
    { valor: 2, label: "2 - Ineficaz: errores marcados; requiere más tiempo o asistencia verbal/física mínima" },
    { valor: 1, label: "1 - Déficit: falla severa; rompe la continuidad de la tarea o genera riesgo de seguridad inmediato" }
  ];
}

const escalaAMPS = {
  id: "amps",
  nombre: "AMPS (Habilidades Motoras y de Procesamiento)",
  especialidad: "terapia-ocupacional",
  descripcion: "Gold standard internacional para medir la calidad del desempeño físico y cognitivo durante la ejecución de actividades de la vida diaria (AVD).",

  itemsMotor: [
    { id: "am1", texto: "Postura (Stabilizes/Balances): mantiene estabilidad y equilibrio corporal sin apoyos ni pérdidas de balance", opciones: opcionesAMPS() },
    { id: "am2", texto: "Alineación (Aligns/Positions): coloca el cuerpo alineado de forma óptima respecto a las herramientas", opciones: opcionesAMPS() },
    { id: "am3", texto: "Alcance (Reaches/Bends): estira extremidades y flexiona el tronco de forma eficiente para agarrar objetos", opciones: opcionesAMPS() },
    { id: "am4", texto: "Agarre (Grips): pinza y sostiene herramientas con la fuerza justa sin que se le caigan", opciones: opcionesAMPS() },
    { id: "am5", texto: "Manipulación (Manipulates): destreza y fluidez con los dedos al usar objetos", opciones: opcionesAMPS() },
    { id: "am6", texto: "Coordinación (Coordinates): uso coordinado y bilateral de ambas manos para una misma tarea", opciones: opcionesAMPS() },
    { id: "am7", texto: "Movilidad (Moves): empuja, jala o traslada objetos sobre superficies de forma fluida", opciones: opcionesAMPS() },
    { id: "am8", texto: "Levantamiento (Lifts): capacidad para alzar y cargar objetos necesarios sin esfuerzo desmedido", opciones: opcionesAMPS() },
    { id: "am9", texto: "Caminar (Walks): deambulación fluida dentro del entorno de la tarea sin tropezar", opciones: opcionesAMPS() },
    { id: "am10", texto: "Transporte (Transports): lleva objetos de un lugar a otro mientras camina o se mueve", opciones: opcionesAMPS() },
    { id: "am11", texto: "Calibración (Calibrates): regula la fuerza y velocidad del movimiento (no rompe objetos ni se excede)", opciones: opcionesAMPS() },
    { id: "am12", texto: "Ritmo (Paces): mantiene un tempo de movimiento constante y adecuado", opciones: opcionesAMPS() },
    { id: "am13", texto: "Fluidez (Flows): movimientos suaves, armónicos y continuos", opciones: opcionesAMPS() },
    { id: "am14", texto: "Resistencia (Endures): completa la tarea física sin signos visibles de fatiga o necesidad de sentarse", opciones: opcionesAMPS() },
    { id: "am15", texto: "Acomodación (Accommodates): modifica el movimiento físico ante un obstáculo del entorno", opciones: opcionesAMPS() },
    { id: "am16", texto: "Postura del tronco (Navigates): maniobra el cuerpo a través de espacios estrechos o rodeando objetos", opciones: opcionesAMPS() }
  ],

  itemsProcesamiento: [
    { id: "ap1", texto: "Ritmo Mental (Paces): mantiene una velocidad mental constante para planificar el siguiente paso", opciones: opcionesAMPS() },
    { id: "ap2", texto: "Atención (Attends): mantiene el foco en la tarea; no se distrae con estímulos ambientales", opciones: opcionesAMPS() },
    { id: "ap3", texto: "Persistencia (Heeds): sigue la meta original de la actividad de principio a fin", opciones: opcionesAMPS() },
    { id: "ap4", texto: "Elección (Chooses): selecciona las herramientas y materiales correctos para esa AVD específica", opciones: opcionesAMPS() },
    { id: "ap5", texto: "Uso de Herramientas (Uses): emplea los objetos para su función designada", opciones: opcionesAMPS() },
    { id: "ap6", texto: "Manejo (Handles): sujeta y manipula los materiales con el cuidado correspondiente", opciones: opcionesAMPS() },
    { id: "ap7", texto: "Reunión (Gathers): junta todos los elementos necesarios en el espacio de trabajo antes de iniciar", opciones: opcionesAMPS() },
    { id: "ap8", texto: "Organización (Organizes): dispone los objetos en el espacio de forma lógica y accesible", opciones: opcionesAMPS() },
    { id: "ap9", texto: "Restauración (Restores): limpia, ordena y regresa los materiales a su lugar de origen al finalizar", opciones: opcionesAMPS() },
    { id: "ap10", texto: "Navegación (Navigates): mueve los objetos en el espacio sin derribar o chocar otros elementos", opciones: opcionesAMPS() },
    { id: "ap11", texto: "Inicio (Initiates): comienza el siguiente paso lógico de la tarea sin dudar o requerir órdenes", opciones: opcionesAMPS() },
    { id: "ap12", texto: "Continuidad (Continues): realiza una secuencia lógica de pasos sin interrupciones o bloqueos mentales", opciones: opcionesAMPS() },
    { id: "ap13", texto: "Secuencia (Sequences): ordena los pasos cronológicamente de forma correcta", opciones: opcionesAMPS() },
    { id: "ap14", texto: "Término (Terminates): concluye la tarea en el momento exacto, sin sobre-ejecutar o dejarla incompleta", opciones: opcionesAMPS() },
    { id: "ap15", texto: "Búsqueda (Searches/Locates): encuentra las herramientas necesarias con la mirada o las manos eficientemente", opciones: opcionesAMPS() },
    { id: "ap16", texto: "Recolección de Información (Gathers): lee o procesa instrucciones si la tarea lo requiere", opciones: opcionesAMPS() },
    { id: "ap17", texto: "Respuesta (Responds): reacciona de forma lógica a las señales de los materiales", opciones: opcionesAMPS() },
    { id: "ap18", texto: "Ajuste (Notices/Adjusts): modifica la estrategia cognitiva si algo no sale como esperaba", opciones: opcionesAMPS() },
    { id: "ap19", texto: "Solución de Problemas (Accommodates): previene errores lógicos antes de que arruinen la actividad", opciones: opcionesAMPS() },
    { id: "ap20", texto: "Beneficio (Benefits): aprende de los errores cometidos durante la sesión y no los vuelve a repetir", opciones: opcionesAMPS() }
  ],

  rangos: {
    motor: { minimo: 16, maximo: 64 },
    procesamiento: { minimo: 20, maximo: 80 }
  },

  // ---------- Función de cálculo ----------
  calcularPuntaje: function (respuestas) {
    let subtotalMotor = 0;
    let motorRespondidos = 0;
    this.itemsMotor.forEach((item) => {
      const valor = respuestas[item.id];
      if (typeof valor === "number") { subtotalMotor += valor; motorRespondidos++; }
    });

    let subtotalProcesamiento = 0;
    let procesamientoRespondidos = 0;
    this.itemsProcesamiento.forEach((item) => {
      const valor = respuestas[item.id];
      if (typeof valor === "number") { subtotalProcesamiento += valor; procesamientoRespondidos++; }
    });

    return {
      subtotalMotor,
      motorRespondidos,
      motorCompleto: motorRespondidos === this.itemsMotor.length,
      subtotalProcesamiento,
      procesamientoRespondidos,
      procesamientoCompleto: procesamientoRespondidos === this.itemsProcesamiento.length,
      rangos: this.rangos
    };
  }
};

if (typeof escalasTerapiaOcupacional !== "undefined") {
  escalasTerapiaOcupacional.push(escalaAMPS);
}
