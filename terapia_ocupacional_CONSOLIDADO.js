/* ============================================================
   BANCO DE ESCALAS — TERAPIA OCUPACIONAL
   Generado para NeuroActiva — listo para pegar en pruebas.html
   ============================================================ */


// ---------------------------------------------------------------
// Archivo original: acis.js
// ---------------------------------------------------------------
/* ============================================================
   ACIS — Assessment of Communication and Interaction Skills
   (Habilidades de Interacción)
   Especialidad: Terapia Ocupacional
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   20 ítems en 3 dominios (Corporalidad 6, Intercambio de
   Información 6, Relaciones 8), escala 1-4.
   NOTA: el documento fuente dice "no se recomienda sumar un
   puntaje total plano", pero también declara explícitamente
   "Puntaje Máximo del Test: 80 puntos" y da rangos de % de
   competencia GLOBAL para la clasificación final. Se interpretó
   como: no mostrar solo el total sin contexto — pero sí calcularlo
   junto con los 3 subtotales, ya que la clasificación final los
   necesita.
   ============================================================ */

function opcionesACIS() {
  return [
    { valor: 4, label: "4 - Habilidad Competente: se comunica e interactúa con fluidez, sin signos de limitación" },
    { valor: 3, label: "3 - Habilidad Cuestionable: conductas intermitentes o inapropiadas que ponen en duda la eficacia, pero termina la interacción" },
    { valor: 2, label: "2 - Ineficacia / Limitación: errores evidentes que interrumpen la comunicación o causan desentendimiento menor" },
    { valor: 1, label: "1 - Déficit Severo / Restricción: interacción completamente disruptiva, ausente o destructiva" }
  ];
}

const escalaACIS = {
  id: "acis",
  nombre: "ACIS (Habilidades de Interacción y Comunicación)",
  especialidad: "terapia-ocupacional",
  descripcion: "Escala de observación directa (no de lápiz y papel) que evalúa el desempeño comunicativo mientras la persona participa en una ocupación real, individual o grupal.",
  puntajeMaximo: 80,

  dominios: [
    {
      id: "corporalidad",
      nombre: "Dominio 1: Corporalidad (Uso del cuerpo en la comunicación)",
      rango: { minimo: 6, maximo: 24 },
      items: [
        { id: "c1", texto: "Contacto (Contacts): hace contacto físico con otros de forma adecuada al contexto", opciones: opcionesACIS() },
        { id: "c2", texto: "Mirada (Gazes): utiliza los ojos para establecer contacto visual o regular la interacción", opciones: opcionesACIS() },
        { id: "c3", texto: "Gestos (Gestures): usa movimientos de manos y cuerpo para enfatizar o dar significado al mensaje", opciones: opcionesACIS() },
        { id: "c4", texto: "Postura (Postures): adopta posiciones físicas adecuadas respecto a los demás", opciones: opcionesACIS() },
        { id: "c5", texto: "Reorientación (Orients): gira y orienta el cuerpo hacia la persona con la que interactúa", opciones: opcionesACIS() },
        { id: "c6", texto: "Locación (Locates): se ubica a una distancia correcta de personas u objetos durante la actividad", opciones: opcionesACIS() }
      ]
    },
    {
      id: "intercambio",
      nombre: "Dominio 2: Intercambio de Información (Uso del lenguaje y la voz)",
      rango: { minimo: 6, maximo: 24 },
      items: [
        { id: "i1", texto: "Articulación (Modulates): emplea volumen, tono y velocidad de voz claros y comprensibles", opciones: opcionesACIS() },
        { id: "i2", texto: "Expresión (Shares): entrega información relevante, ideas o sentimientos sobre sí mismo o la tarea", opciones: opcionesACIS() },
        { id: "i3", texto: "Petición (Asks): solicita información, aclaraciones, ayuda o feedback de manera oportuna", opciones: opcionesACIS() },
        { id: "i4", texto: "Respuestas (Asserts): contesta de forma lógica a preguntas o demandas comunicativas", opciones: opcionesACIS() },
        { id: "i5", texto: "Flujo (Expresses): mantiene un discurso fluido, continuo, sin interrupciones abruptas o pausas extrañas", opciones: opcionesACIS() },
        { id: "i6", texto: "Sintonía (Informs): utiliza lenguaje apropiado para el nivel cultural y de comprensión del oyente", opciones: opcionesACIS() }
      ]
    },
    {
      id: "relaciones",
      nombre: "Dominio 3: Relaciones (Dinámica y adaptación social)",
      rango: { minimo: 8, maximo: 32 },
      items: [
        { id: "r1", texto: "Colaboración (Collaborates): trabaja en equipo hacia un objetivo común durante la ocupación", opciones: opcionesACIS() },
        { id: "r2", texto: "Respeto (Conforms): sigue las normas implícitas o explícitas del grupo y el entorno", opciones: opcionesACIS() },
        { id: "r3", texto: "Enfoque (Focuses): dirige la conversación e interacciones hacia el tema principal de la actividad", opciones: opcionesACIS() },
        { id: "r4", texto: "Relación (Relates): establece una conexión o lazo social adecuado (empatía/cordialidad)", opciones: opcionesACIS() },
        { id: "r5", texto: "Respeto de Turnos (Respects): espera su momento para hablar o actuar sin interrumpir", opciones: opcionesACIS() },
        { id: "r6", texto: "Modificación (Adapts): ajusta su comportamiento social ante imprevistos o malentendidos", opciones: opcionesACIS() },
        { id: "r7", texto: "Manejo del Conflicto (Heeds): utiliza estrategias pacíficas para resolver desacuerdos o tensiones", opciones: opcionesACIS() },
        { id: "r8", texto: "Transición (Times): inicia y finaliza las interacciones en el momento exacto y adecuado", opciones: opcionesACIS() }
      ]
    }
  ],

  // ---------- Clasificación por % de competencia global ----------
  clasificar: function (porcentaje) {
    if (porcentaje >= 85) return "Interacción Social Funcional: habilidades óptimas, sin requerir apoyos terapéuticos en este canal";
    if (porcentaje >= 60) return "Riesgo de Interacción Ocupacional: fallas intermitentes (comúnmente en Relaciones); se sugiere entrenamiento en habilidades sociales";
    return "Restricción Severa de la Comunicación: el comportamiento interactivo rompe la ocupación o genera aislamiento; requiere intervención prioritaria en entornos estructurados"; // <60%
  },

  // ---------- Función de cálculo ----------
  calcularPuntaje: function (respuestas) {
    let total = 0;
    const subtotalesPorDominio = {};

    this.dominios.forEach((dom) => {
      let subtotal = 0;
      dom.items.forEach((item) => {
        const valor = respuestas[item.id];
        if (typeof valor === "number") subtotal += valor;
      });
      subtotalesPorDominio[dom.id] = { subtotal, rango: dom.rango };
      total += subtotal;
    });

    const porcentaje = Math.round((total / this.puntajeMaximo) * 100);

    return {
      total,
      puntajeMaximo: this.puntajeMaximo,
      porcentaje,
      clasificacion: this.clasificar(porcentaje),
      subtotalesPorDominio
    };
  }
};

if (typeof escalasTerapiaOcupacional !== "undefined") {
  escalasTerapiaOcupacional.push(escalaACIS);
}

// ---------------------------------------------------------------
// Archivo original: amps.js
// ---------------------------------------------------------------
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

// ---------------------------------------------------------------
// Archivo original: barthel_index.js
// ---------------------------------------------------------------
/* ============================================================
   ÍNDICE DE BARTHEL (Actividades Básicas de la Vida Diaria - ABVD)
   Especialidad: Terapia Ocupacional
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   Versión terrestre estándar (distinta del Índice de Barthel
   Adaptado Acuático ya construido en Hidroterapia — ver
   barthel_acuatico.js). 10 ítems con puntuaciones ponderadas
   (0/5/10/15 según la dificultad de la tarea). Máximo 100.
   Estratificación por Rangos de Shah.
   ============================================================ */

const escalaBarthelIndex = {
  id: "barthel-index",
  nombre: "Índice de Barthel (ABVD)",
  especialidad: "terapia-ocupacional",
  descripcion: "Escala más sensible a cambios en rehabilitación física. Evalúa 10 actividades básicas de la vida diaria con puntuaciones ponderadas según la dificultad e impacto de la tarea.",
  puntajeMaximo: 100,

  items: [
    {
      id: "b1-comer", numero: 1, texto: "Comer",
      opciones: [
        { valor: 0, label: "0 - Dependiente" },
        { valor: 5, label: "5 - Necesita ayuda (ej. cortar carne)" },
        { valor: 10, label: "10 - Independiente" }
      ]
    },
    {
      id: "b2-lavarse", numero: 2, texto: "Lavarse (Baño)",
      opciones: [
        { valor: 0, label: "0 - Dependiente" },
        { valor: 5, label: "5 - Independiente" }
      ]
    },
    {
      id: "b3-vestirse", numero: 3, texto: "Vestirse",
      opciones: [
        { valor: 0, label: "0 - Dependiente" },
        { valor: 5, label: "5 - Necesita ayuda (50% del esfuerzo)" },
        { valor: 10, label: "10 - Independiente" }
      ]
    },
    {
      id: "b4-arreglarse", numero: 4, texto: "Arreglarse (Higiene personal)",
      opciones: [
        { valor: 0, label: "0 - Dependiente" },
        { valor: 5, label: "5 - Independiente (afeitarse, lavarse los dientes)" }
      ]
    },
    {
      id: "b5-deposicion", numero: 5, texto: "Deposición (Control intestinal)",
      opciones: [
        { valor: 0, label: "0 - Incontinente" },
        { valor: 5, label: "5 - Accidente ocasional (1/semana)" },
        { valor: 10, label: "10 - Continente" }
      ]
    },
    {
      id: "b6-miccion", numero: 6, texto: "Micción (Control de esfínter urinario)",
      opciones: [
        { valor: 0, label: "0 - Incontinente" },
        { valor: 5, label: "5 - Accidente ocasional (1/24h)" },
        { valor: 10, label: "10 - Continente" }
      ]
    },
    {
      id: "b7-retrete", numero: 7, texto: "Uso del retrete (Inodoro)",
      opciones: [
        { valor: 0, label: "0 - Dependiente" },
        { valor: 5, label: "5 - Necesita ayuda para sostenerse o limpiarse" },
        { valor: 10, label: "10 - Independiente" }
      ]
    },
    {
      id: "b8-traslado", numero: 8, texto: "Traslado (Silla a cama y viceversa)",
      opciones: [
        { valor: 0, label: "0 - Dependiente" },
        { valor: 5, label: "5 - Gran ayuda física pero es capaz de sentarse" },
        { valor: 10, label: "10 - Mínima ayuda (contacto o verbal)" },
        { valor: 15, label: "15 - Independiente" }
      ]
    },
    {
      id: "b9-deambulacion", numero: 9, texto: "Deambulación (Marcha)",
      opciones: [
        { valor: 0, label: "0 - Dependiente" },
        { valor: 5, label: "5 - En silla de ruedas de forma autónoma" },
        { valor: 10, label: "10 - Camina con ayuda física o andador" },
        { valor: 15, label: "15 - Independiente (>50m sin andador)" }
      ]
    },
    {
      id: "b10-escaleras", numero: 10, texto: "Subir y bajar escaleras",
      opciones: [
        { valor: 0, label: "0 - Dependiente" },
        { valor: 5, label: "5 - Necesita ayuda física o supervisión" },
        { valor: 10, label: "10 - Independiente" }
      ]
    }
  ],

  // ---------- Estratificación automatizada (Rangos de Shah) ----------
  // usaSillaRuedas: si el paciente usa silla de ruedas como medio principal
  // de movilidad, 95 puntos ya se considera independencia total (dado que
  // el ítem de deambulación autónoma en silla de ruedas topa en 5, no 15)
  clasificar: function (total, usaSillaRuedas) {
    if (total === 100 || (usaSillaRuedas && total === 95)) {
      return "Independencia total";
    }
    if (total >= 91) return "Dependencia mínima";
    if (total >= 61) return "Dependencia leve";
    if (total >= 21) return "Dependencia moderada";
    return "Dependencia total"; // 0-20
  },

  // ---------- Función de cálculo ----------
  calcularPuntaje: function (respuestas, usaSillaRuedas) {
    let total = 0;
    this.items.forEach((item) => {
      const valor = respuestas[item.id];
      if (typeof valor === "number") {
        total += valor;
      }
    });

    return {
      total,
      puntajeMaximo: this.puntajeMaximo,
      porcentaje: Math.round((total / this.puntajeMaximo) * 100),
      clasificacion: this.clasificar(total, !!usaSillaRuedas)
    };
  }
};

if (typeof escalasTerapiaOcupacional !== "undefined") {
  escalasTerapiaOcupacional.push(escalaBarthelIndex);
}

// ---------------------------------------------------------------
// Archivo original: bot2.js
// ---------------------------------------------------------------
/* ============================================================
   BOT-2 — Bruininks-Oseretsky Test of Motor Proficiency, 2nd Ed.
   Especialidad: Terapia Ocupacional (Fisioterapia complementaria)
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   ⚠️ ALCANCE DE ESTA IMPLEMENTACIÓN — LEER ANTES DE USAR:
   Igual que la PDMS-2, el BOT-2 requiere tablas de normalización
   psicométrica PROPIETARIAS del manual oficial (indexadas por edad
   exacta en años/meses Y género) para convertir:
     Puntaje Bruto -> Puntuación Escalar del Subtest (1-26)
     Puntuación Escalar -> Puntuación Estándar del Compuesto (20-80)
     Compuestos -> Total Motor Composite (media 100, DE 15)
   Esas tablas NO vienen en el documento fuente (solo se da UN
   ejemplo parcial para el ítem de abdominales) y no se deben
   fabricar. Esta implementación SÍ incluye completo y funcional:
     - Estructura de los 8 subtests en 4 compuestos
     - Cálculo del Puntaje Bruto (PB) por subtest (suma directa)
     - La clasificación clínica final (los cortes SÍ vienen dados)
   Y dejará explícito con un error cuando se intente convertir sin
   las tablas oficiales.

   NOTA sobre conteo de ítems: el documento dice "53 ítems en su
   versión completa", pero sumando los 8 subtests enumerados
   (7+8+5+7+9+9+5+5) da 55, no 53. Se deja esta discrepancia
   señalada — no se ajustó el conteo de ítems por subtest para
   forzar 53, ya que no hay indicación de cuáles 2 ítems sobrarían.
   ============================================================ */

const escalaBOT2 = {
  id: "bot-2",
  nombre: "BOT-2 (Bruininks-Oseretsky Test of Motor Proficiency, 2nd Ed.)",
  especialidad: "terapia-ocupacional",
  descripcion: "Gold standard para evaluación exhaustiva de competencia motora fina y gruesa en niños y jóvenes (4-21 años). A diferencia de la PDMS-2, no usa basal/techo — se aplican todos los ítems del subtest seleccionado.",
  notaConteoItems: "Documento fuente indica 53 ítems totales; la suma real de los subtests enumerados da 55 — discrepancia sin resolver, ver nota superior.",

  compuestos: [
    {
      id: "control-motor-fino",
      nombre: "Compuesto 1: Control Motor Fino (Fine Manual Control)",
      subtests: [
        { id: "su1", nombre: "Precisión Motora Fina (Fine Motor Precision)", totalItems: 7, ejemplos: "recortar un círculo, colorear una forma, conectar puntos, doblar papel" },
        { id: "su2", nombre: "Integración Motora Fina (Fine Motor Integration)", totalItems: 8, ejemplos: "copiar un cuadrado, una estrella, figuras superpuestas" }
      ]
    },
    {
      id: "coordinacion-manual",
      nombre: "Compuesto 2: Coordinación Manual (Manual Coordination)",
      subtests: [
        { id: "su3", nombre: "Destreza Manual (Manual Dexterity)", totalItems: 5, ejemplos: "meter fichas en una caja, clasificar cartas, enhebrar clavijas" },
        { id: "su4", nombre: "Coordinación Bilateral (Bilateral Coordination)", totalItems: 7, ejemplos: "aplaudir al ritmo, saltar abriendo/cerrando brazos-piernas, toques alternos con los pies" }
      ]
    },
    {
      id: "coordinacion-corporal",
      nombre: "Compuesto 3: Cuerpo Fuerte / Coordinación Corporal (Body Coordination)",
      subtests: [
        { id: "su5", nombre: "Equilibrio (Balance)", totalItems: 9, ejemplos: "un pie sobre una línea, caminar punta-talón, equilibrio en barra elevada con ojos abiertos/cerrados" },
        { id: "su6", nombre: "Coordinación de Extremidades Superiores", totalItems: 9, ejemplos: "atrapar una pelota con una/dos manos, lanzar a un blanco, rebotar la pelota" }
      ]
    },
    {
      id: "fuerza-agilidad",
      nombre: "Compuesto 4: Fuerza y Agilidad (Strength & Agility)",
      subtests: [
        { id: "su7", nombre: "Velocidad de Carrera y Agilidad (Running Speed & Agility)", totalItems: 5, ejemplos: "carrera de velocidad con retorno, saltar obstáculos con un pie, pasos laterales rápidos" },
        { id: "su8", nombre: "Fuerza (Strength)", totalItems: 5, ejemplos: "salto de longitud de pie, flexiones de brazos, abdominales en 30s, plancha" }
      ]
    }
  ],

  // ---------- Paso 2: Puntaje Bruto por subtest (suma directa de puntos de ítem) ----------
  // puntosPorItem: array de números ya normalizados (0-5 u otro rango según el
  // ítem específico, tras aplicar las tablas de umbral del Paso 1 — esas
  // tablas de umbral tampoco vienen completas en el documento, solo el
  // ejemplo de abdominales, así que la normalización de cada ítem físico
  // a "puntos de ítem" debe completarse con el manual oficial)
  calcularPuntajeBrutoSubtest: function (puntosPorItem) {
    return puntosPorItem.reduce((acc, p) => acc + (typeof p === "number" ? p : 0), 0);
  },

  // ---------- Paso 3: Conversión psicométrica — requiere tablas oficiales ----------
  convertirAPuntuacionEscalar: function (puntajeBruto, subtestId, edadAnios, edadMeses, genero) {
    throw new Error(
      "No implementado: requiere las tablas de normalización oficiales del manual BOT-2 " +
      "(indexadas por edad exacta y género). No se debe fabricar esta conversión."
    );
  },

  calcularPuntuacionEstandarCompuesto: function (puntuacionesEscalaresDelCompuesto) {
    throw new Error(
      "No implementado: la Puntuación Estándar del Compuesto (rango 20-80) no es una simple " +
      "suma de Scaled Scores — requiere las tablas de conversión oficiales del manual BOT-2."
    );
  },

  // ---------- Clasificación clínica final (estos cortes SÍ vienen dados) ----------
  // Se aplica sobre el Total Motor Composite YA CALCULADO con las tablas
  // oficiales (media 100, DE 15) — esta función no fabrica el valor, solo
  // lo interpreta una vez que el software externo/manual lo proporcione.
  clasificarTotalMotorComposite: function (total) {
    if (total >= 130) return "Competencia Motora Muy Superior: habilidades motrices altamente desarrolladas, apto para rendimiento deportivo avanzado";
    if (total >= 111) return "Sobre el Promedio: buen control motor y coordinación general";
    if (total >= 90) return "Promedio / Desarrollo Normal: ejecuta las tareas según los parámetros esperados para su edad";
    if (total >= 80) return "Bajo el Promedio: desempeño motor limítrofe, torpeza motriz leve o desacondicionamiento físico";
    if (total >= 70) return "Déficit Motor Moderado: priorizar intervención en Coordinación Bilateral y Equilibrio; afecta educación física y deportes comunitarios";
    return "Déficit Motor Severo / Trastorno del Desarrollo de la Coordinación (TDC/Dispraxia): alerta clínica prioritaria, requiere intervención intensiva de TO y fisioterapia"; // <70
  }
};

if (typeof escalasTerapiaOcupacional !== "undefined") {
  escalasTerapiaOcupacional.push(escalaBOT2);
}

// ---------------------------------------------------------------
// Archivo original: dinamometria_handgrip.js
// ---------------------------------------------------------------
/* ============================================================
   DINAMOMETRÍA DE AGARRE MANUAL (Handgrip Dynamometry)
   Especialidad: Terapia Ocupacional
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   A diferencia de las demás escalas del banco, esta NO es un
   cuestionario de opciones — es un motor de cálculo biomecánico
   sobre mediciones numéricas (3 intentos por mano con dinamómetro
   Jamar), que calcula: promedio, fuerza pico, Coeficiente de
   Variación (detección de inconsistencia/simulación), diferencia
   porcentual entre manos, y verificación de la Regla del 10% de
   dominancia.

   ⚠️ La clasificación final por Z-score poblacional (Superior /
   Normal / Debilidad Leve / Debilidad Severa) requiere las tablas
   normativas oficiales de Mathiowetz, indexadas por edad, género y
   lado evaluado — no incluidas en el documento fuente. La función
   de clasificación aquí SÍ está completa (los cortes de DE vienen
   dados), pero opera sobre un Z-score que debe calcularse externamente
   con esas tablas oficiales; no se fabrican los baremos.
   ============================================================ */

const dinamometriaAgarreManual = {
  id: "dinamometria-handgrip",
  nombre: "Dinamometría de Agarre Manual (Handgrip Dynamometry)",
  especialidad: "terapia-ocupacional",
  descripcion: "Prueba objetiva (dinamómetro Jamar) para cuantificar la fuerza máxima de prensión palmar. Predictor de sarcopenia, fragilidad, riesgo cardiovascular y funcionalidad global.",

  metadata: {
    posicionesDinamometro: [1, 2, 3, 4, 5],
    posicionEstandarClinica: 2,
    unidadesMedida: ["Kg", "Lb"],
    ladoDominante: ["Derecho", "Izquierdo", "Ambidextro"],
    descansoMinimoSegundos: 60
  },

  // ---------- Cálculo de estadísticas por mano ----------
  // intentos: [n, n, n] — los 3 intentos de una mano
  calcularEstadisticasMano: function (intentos) {
    const suma = intentos[0] + intentos[1] + intentos[2];
    const promedio = Math.round((suma / 3) * 100) / 100;
    const maximo = Math.max(...intentos);

    // Desviación estándar MUESTRAL (divide entre n-1 = 2, como en el código fuente)
    const varianza = intentos.reduce((acc, val) => acc + Math.pow(val - promedio, 2), 0) / 2;
    const desviacionEstandar = Math.sqrt(varianza);

    const coeficienteVariacion = promedio > 0
      ? Math.round((desviacionEstandar / promedio) * 100 * 100) / 100
      : 0;
    const esConsistente = coeficienteVariacion <= 10;

    return { promedio, maximo, desviacionEstandar, coeficienteVariacion, esConsistente };
  },

  // ---------- Función consolidada de procesamiento ----------
  // input: { intentosDerecha: [n,n,n], intentosIzquierda: [n,n,n], manoDominante: 'D'|'I'|'A', unidad: 'Kg'|'Lb' }
  procesarDinamometria: function (input) {
    const derecha = this.calcularEstadisticasMano(input.intentosDerecha);
    const izquierda = this.calcularEstadisticasMano(input.intentosIzquierda);

    let diferenciaPorcentual = 0;
    if (izquierda.promedio > 0) {
      diferenciaPorcentual = Math.round((((derecha.promedio - izquierda.promedio) / izquierda.promedio) * 100) * 100) / 100;
    }

    // Regla del 10%: en diestros sanos, la derecha es ~10% más fuerte (rango 5-15% aceptado)
    let cumpleReglaDiezPorciento = false;
    if (input.manoDominante === "D") {
      cumpleReglaDiezPorciento = diferenciaPorcentual >= 5 && diferenciaPorcentual <= 15;
    }

    // Motor de alertas clínicas combinadas
    let alertaClinica = "Consistencia y patrones mecánicos dentro de la normalidad.";
    if (!derecha.esConsistente || !izquierda.esConsistente) {
      alertaClinica = "⚠️ CRÍTICO: Alta variabilidad entre intentos detectada (CV > 10%). Esfuerzo inconsistente del paciente — posible fatiga prematura, dolor agudo subyacente o simulación de debilidad.";
    } else if (input.manoDominante === "D" && diferenciaPorcentual < 0) {
      alertaClinica = "⚠️ ALERTA: El paciente es diestro pero su mano izquierda es más fuerte. Evaluar posible patología o lesión en miembro superior derecho.";
    }

    return {
      derecha,
      izquierda,
      diferenciaPorcentual,
      cumpleReglaDiezPorciento,
      alertaClinica
    };
  },

  // ---------- Clasificación clínica final por Z-score poblacional ----------
  // z: Z-score ya calculado externamente contra las tablas normativas de
  // Mathiowetz (edad, género, lado) — esta función solo interpreta el
  // Z-score, no lo calcula desde el promedio bruto sin esas tablas.
  clasificarPorZScore: function (z) {
    if (z > 1) return "Fuerza Superior al promedio";
    if (z >= -1) return "Fuerza Normal / Promedio Poblacional";
    if (z >= -2) return "Debilidad Leve / Riesgo Funcional: pérdida de masa muscular incipiente. Recomendar ejercicios de prensión isométrica, pinza digital y terapia manual";
    return "Debilidad Severa / Criterio Clínico de Sarcopenia y Fragilidad: alerta prioritaria; alta comorbilidad física y riesgo de pérdida de autonomía en AVD complejas; derivar a fortalecimiento intensivo y evaluación nutricional"; // < -2
  }
};

if (typeof escalasTerapiaOcupacional !== "undefined") {
  escalasTerapiaOcupacional.push(dinamometriaAgarreManual);
}

// ---------------------------------------------------------------
// Archivo original: efpt.js
// ---------------------------------------------------------------
/* ============================================================
   EFPT — Executive Function Performance Test
   Especialidad: Terapia Ocupacional / Neuropsicología
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   Matriz de 4 tareas x 5 funciones ejecutivas = 20 celdas, escala
   0-5 por celda (¡OJO: aquí 0=mejor desempeño, 5=peor — al revés
   que la mayoría de las demás escalas del banco!).
   Rango por tarea: 0-25. Rango por función: 0-20. Total: 0-100.
   ============================================================ */

function opcionesEFPT() {
  return [
    { valor: 0, label: "0 - Independiente: no requiere asistencia física ni verbal" },
    { valor: 1, label: "1 - Pista Verbal: guía o recordatorio oral general (máx. 2 pistas por paso)" },
    { valor: 2, label: "2 - Pista Gestual/Visual: el terapeuta señala o usa gestos sin tocar los materiales" },
    { valor: 3, label: "3 - Asistencia Directa: el terapeuta dice exactamente qué hacer o entrega el objeto en la mano" },
    { valor: 4, label: "4 - Asistencia Física: el terapeuta realiza parte de la acción física por el paciente" },
    { valor: 5, label: "5 - Incapaz: el terapeuta asume la tarea por completo o la detiene por riesgo de seguridad" }
  ];
}

const escalaEFPT = {
  id: "efpt",
  nombre: "EFPT (Executive Function Performance Test)",
  especialidad: "terapia-ocupacional",
  descripcion: "Evalúa 5 funciones ejecutivas mientras el paciente ejecuta 4 tareas cotidianas reales. A diferencia de la mayoría de escalas, un puntaje MÁS ALTO indica MAYOR déficit (0=independiente, 5=incapaz).",
  puntajeMaximo: 100,
  notaDireccion: "IMPORTANTE: en esta escala 0 = mejor desempeño y 100 = peor (dependencia total) — dirección inversa a la mayoría de las demás escalas del banco.",

  tareas: [
    { id: "t1", nombre: "T1. Preparación de avena (Cooking)", descripcion: "Seguir instrucciones escritas para cocinar avena en la estufa o microondas" },
    { id: "t2", nombre: "T2. Uso del teléfono (Telephone)", descripcion: "Buscar un número específico en una agenda y realizar una llamada simulada" },
    { id: "t3", nombre: "T3. Gestión de la medicación (Medication)", descripcion: "Leer etiquetas de tres frascos falsos y organizar la toma diaria según una receta" },
    { id: "t4", nombre: "T4. Pago de cuentas (Bill Paying)", descripcion: "Calcular el balance de una chequera, pagar dos cuentas con cheques ficticios y registrar el saldo" }
  ],

  funciones: [
    { id: "f1", nombre: "F1. Iniciación", descripcion: "Capacidad para comenzar la tarea física o mentalmente de forma autónoma" },
    { id: "f2", nombre: "F2. Organización", descripcion: "Capacidad para reunir, disponer y manejar los materiales necesarios en el espacio" },
    { id: "f3", nombre: "F3. Secuenciación", descripcion: "Capacidad para ejecutar los pasos en el orden cronológico y lógico correcto" },
    { id: "f4", nombre: "F4. Juicio y Seguridad", descripcion: "Capacidad para evitar peligros y tomar decisiones seguras durante la actividad" },
    { id: "f5", nombre: "F5. Finalización", descripcion: "Capacidad para concluir la tarea de forma correcta sin sobre-ejecutar o dejarla incompleta" }
  ],

  opciones: opcionesEFPT(),

  // ---------- Clasificación clínica (0=mejor, 100=peor) ----------
  clasificar: function (total) {
    if (total === 0) return "Independencia ejecutiva absoluta: apto para retorno a vida comunitaria y laboral compleja sin supervisión";
    if (total <= 20) return "Déficit Ejecutivo Leve: suele atascarse en organización o secuenciación; se beneficia de listas de verificación o calendarios digitales";
    if (total <= 50) return "Déficit Ejecutivo Moderado: requiere soporte intermitente o pistas directas; supervisión parcial en actividades de riesgo (cocina, finanzas)";
    return "Déficit Ejecutivo Severo / Dependencia: incapacidad para resolver problemas o mantener la seguridad; exige cuidador permanente y entorno estructurado"; // 51-100
  },

  // ---------- Función de cálculo ----------
  // respuestas: { "t1-f1": 2, "t1-f2": 0, ..., "t4-f5": 3 }  (16 celdas máx si están las 4 tareas x 5 funciones = 20 celdas)
  calcularPuntaje: function (respuestas) {
    const celda = (tareaId, funcionId) => respuestas[`${tareaId}-${funcionId}`];

    const totalesPorTarea = {};
    this.tareas.forEach((t) => {
      let subtotal = 0;
      this.funciones.forEach((f) => {
        const v = celda(t.id, f.id);
        if (typeof v === "number") subtotal += v;
      });
      totalesPorTarea[t.id] = subtotal;
    });

    const totalesPorFuncion = {};
    this.funciones.forEach((f) => {
      let subtotal = 0;
      this.tareas.forEach((t) => {
        const v = celda(t.id, f.id);
        if (typeof v === "number") subtotal += v;
      });
      totalesPorFuncion[f.id] = subtotal;
    });

    const total = Object.values(totalesPorTarea).reduce((a, b) => a + b, 0);

    return {
      totalesPorTarea,        // cada una: rango 0-25
      totalesPorFuncion,      // cada una: rango 0-20
      total,                  // rango 0-100
      puntajeMaximo: this.puntajeMaximo,
      clasificacion: this.clasificar(total)
    };
  }
};

if (typeof escalasTerapiaOcupacional !== "undefined") {
  escalasTerapiaOcupacional.push(escalaEFPT);
}

// ---------------------------------------------------------------
// Archivo original: fim_fam.js
// ---------------------------------------------------------------
/* ============================================================
   FIM-FAM (Functional Independence Measure + Functional Assessment
   Measure) — Independencia Funcional Avanzada
   Especialidad: Terapia Ocupacional (también usado en Neuropsicología)
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   30 ítems (16 motores + 14 cognitivos/comunicación), escala 1-7
   por ítem. Motor: rango 16-112. Cognitivo: rango 14-98.
   Total: rango 30-210.
   ============================================================ */

function opcionesFIMFAM() {
  return [
    { valor: 7, label: "7 - Independencia completa" },
    { valor: 6, label: "6 - Independencia modificada (usa prótesis, medicación o requiere más tiempo)" },
    { valor: 5, label: "5 - Supervisión o preparación (pistas verbales, no hay contacto)" },
    { valor: 4, label: "4 - Asistencia mínima (realiza el 75% o más del esfuerzo físico)" },
    { valor: 3, label: "3 - Asistencia moderada (realiza entre 50% y 74% del esfuerzo)" },
    { valor: 2, label: "2 - Asistencia máxima (realiza entre 25% y 49% del esfuerzo)" },
    { valor: 1, label: "1 - Asistencia total / Dependencia (realiza menos del 25% del esfuerzo)" }
  ];
}

const escalaFIMFAM = {
  id: "fim-fam",
  nombre: "FIM-FAM (Independencia Funcional Avanzada)",
  especialidad: "terapia-ocupacional",
  descripcion: "Gold standard en neurorrehabilitación para medir la carga de cuidados, combinando el FIM clásico con los ítems ampliados del FAM (cognición, comunicación y reinserción comunitaria).",

  itemsMotor: [
    { id: "m1", numero: 1, texto: "Alimentación", opciones: opcionesFIMFAM() },
    { id: "m2", numero: 2, texto: "Aseo personal", opciones: opcionesFIMFAM() },
    { id: "m3", numero: 3, texto: "Baño", opciones: opcionesFIMFAM() },
    { id: "m4", numero: 4, texto: "Vestido superior", opciones: opcionesFIMFAM() },
    { id: "m5", numero: 5, texto: "Vestido inferior", opciones: opcionesFIMFAM() },
    { id: "m6", numero: 6, texto: "Aseo íntimo", opciones: opcionesFIMFAM() },
    { id: "m7", numero: 7, texto: "Control de vejiga", opciones: opcionesFIMFAM() },
    { id: "m8", numero: 8, texto: "Control de intestino", opciones: opcionesFIMFAM() },
    { id: "m9", numero: 9, texto: "Transferencia cama/silla", opciones: opcionesFIMFAM() },
    { id: "m10", numero: 10, texto: "Transferencia inodoro", opciones: opcionesFIMFAM() },
    { id: "m11", numero: 11, texto: "Transferencia ducha", opciones: opcionesFIMFAM() },
    { id: "m12", numero: 12, texto: "Marcha o Silla de ruedas", opciones: opcionesFIMFAM() },
    { id: "m13", numero: 13, texto: "Escaleras", opciones: opcionesFIMFAM() },
    { id: "m14", numero: 14, texto: "Deglución (Tragar) [FAM]", opciones: opcionesFIMFAM() },
    { id: "m15", numero: 15, texto: "Transferencia carro [FAM]", opciones: opcionesFIMFAM() },
    { id: "m16", numero: 16, texto: "Seguridad en la comunidad [FAM]", opciones: opcionesFIMFAM() }
  ],

  itemsCognitivo: [
    { id: "c1", numero: 1, texto: "Comprensión", opciones: opcionesFIMFAM() },
    { id: "c2", numero: 2, texto: "Expresión", opciones: opcionesFIMFAM() },
    { id: "c3", numero: 3, texto: "Interacción social", opciones: opcionesFIMFAM() },
    { id: "c4", numero: 4, texto: "Resolución de problemas", opciones: opcionesFIMFAM() },
    { id: "c5", numero: 5, texto: "Memoria", opciones: opcionesFIMFAM() },
    { id: "c6", numero: 6, texto: "Lectura [FAM]", opciones: opcionesFIMFAM() },
    { id: "c7", numero: 7, texto: "Escritura [FAM]", opciones: opcionesFIMFAM() },
    { id: "c8", numero: 8, texto: "Habla [FAM]", opciones: opcionesFIMFAM() },
    { id: "c9", numero: 9, texto: "Orientación [FAM]", opciones: opcionesFIMFAM() },
    { id: "c10", numero: 10, texto: "Atención [FAM]", opciones: opcionesFIMFAM() },
    { id: "c11", numero: 11, texto: "Estabilidad emocional [FAM]", opciones: opcionesFIMFAM() },
    { id: "c12", numero: 12, texto: "Adaptabilidad al cambio [FAM]", opciones: opcionesFIMFAM() },
    { id: "c13", numero: 13, texto: "Habilidades laborales / Uso del tiempo [FAM]", opciones: opcionesFIMFAM() },
    { id: "c14", numero: 14, texto: "Integración comunitaria [FAM]", opciones: opcionesFIMFAM() }
  ],

  rangos: {
    motor: { minimo: 16, maximo: 112 },
    cognitivo: { minimo: 14, maximo: 98 },
    total: { minimo: 30, maximo: 210 }
  },

  // ---------- Función de cálculo ----------
  calcularPuntaje: function (respuestas) {
    let subtotalMotor = 0;
    let motorRespondidos = 0;
    this.itemsMotor.forEach((item) => {
      const valor = respuestas[item.id];
      if (typeof valor === "number") {
        subtotalMotor += valor;
        motorRespondidos++;
      }
    });

    let subtotalCognitivo = 0;
    let cognitivoRespondidos = 0;
    this.itemsCognitivo.forEach((item) => {
      const valor = respuestas[item.id];
      if (typeof valor === "number") {
        subtotalCognitivo += valor;
        cognitivoRespondidos++;
      }
    });

    return {
      subtotalMotor,
      motorRespondidos,
      motorCompleto: motorRespondidos === this.itemsMotor.length,
      subtotalCognitivo,
      cognitivoRespondidos,
      cognitivoCompleto: cognitivoRespondidos === this.itemsCognitivo.length,
      total: subtotalMotor + subtotalCognitivo,
      rangos: this.rangos
    };
  }
};

if (typeof escalasTerapiaOcupacional !== "undefined") {
  escalasTerapiaOcupacional.push(escalaFIMFAM);
}

// ---------------------------------------------------------------
// Archivo original: katz_index.js
// ---------------------------------------------------------------
/* ============================================================
   ESCALA DE KATZ (Índice de Independencia de las ABVD)
   Especialidad: Terapia Ocupacional
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   6 ítems binarios (1=Independiente, 0=Dependiente). A diferencia
   de las demás escalas, Katz NO solo suma puntos (0-6) — también
   asigna una CLASE (letra A-H) según un patrón JERÁRQUICO de
   pérdida de funciones (las funciones se pierden en un orden
   típico: primero Baño, luego Vestirse, Inodoro, Movilidad,
   Continencia, y por último Alimentación).
   ============================================================ */

const escalaKatz = {
  id: "katz-index",
  nombre: "Escala de Katz (Índice de Independencia de las ABVD)",
  especialidad: "terapia-ocupacional",
  descripcion: "Evalúa 6 funciones básicas clasificándolas en Independiente/Dependiente, y asigna un grado cualitativo (Clase A-H) según el patrón jerárquico de pérdida de habilidades, ideal para analíticas epidemiológicas.",

  // Orden jerárquico oficial (primero en perderse -> último en perderse)
  ordenJerarquico: ["banio", "vestirse", "inodoro", "movilidad", "continencia", "alimentacion"],

  items: [
    { id: "banio", numero: 1, texto: "Baño", pregunta: "¿Se lava solo todo el cuerpo o necesita ayuda en más de una zona?" },
    { id: "vestirse", numero: 2, texto: "Vestirse", pregunta: "¿Toma la ropa de los cajones y se la coloca de manera autónoma?" },
    { id: "inodoro", numero: 3, texto: "Uso del Inodoro", pregunta: "¿Va al baño, se limpia y se arregla la ropa solo?" },
    { id: "movilidad", numero: 4, texto: "Movilidad / Transferencias", pregunta: "¿Se levanta de la cama o silla y se acuesta de forma autónoma?" },
    { id: "continencia", numero: 5, texto: "Continencia", pregunta: "¿Tiene control total de su micción y defecación?" },
    { id: "alimentacion", numero: 6, texto: "Alimentación", pregunta: "¿Lleva la comida al plato y a la boca solo? (excluye cortar la carne)" }
  ],

  opciones: [
    { valor: 1, label: "1 - Independiente" },
    { valor: 0, label: "0 - Dependiente" }
  ],

  // ---------- Motor lógico de clasificación jerárquica (A-H) ----------
  // respuestas: { banio: 1, vestirse: 1, inodoro: 0, movilidad: 1, continencia: 1, alimentacion: 1 }
  clasificarLetra: function (respuestas) {
    const dependiente = (id) => respuestas[id] === 0;
    const independiente = (id) => respuestas[id] === 1;

    const totalDependientes = this.ordenJerarquico.filter((id) => dependiente(id)).length;

    if (totalDependientes === 0) {
      return { clase: "A", descripcion: "Independiente en las 6 funciones" };
    }
    if (totalDependientes === 6) {
      return { clase: "G", descripcion: "Dependiente en las 6 funciones por completo" };
    }
    if (totalDependientes === 1) {
      return { clase: "B", descripcion: "Independiente en 5 funciones y dependiente en solo 1 de ellas" };
    }
    if (totalDependientes === 2) {
      if (dependiente("banio")) {
        return { clase: "C", descripcion: "Independiente en todas, excepto en el Baño y otra función adicional" };
      }
      return { clase: "H", descripcion: "Dependencia en dos o más funciones que no encajan en la progresión jerárquica exacta (Otros)" };
    }
    if (totalDependientes === 3) {
      if (dependiente("banio") && dependiente("vestirse")) {
        return { clase: "D", descripcion: "Independiente en todas, excepto en Baño, Vestirse y otra función adicional" };
      }
      return { clase: "H", descripcion: "Dependencia en dos o más funciones que no encajan en la progresión jerárquica exacta (Otros)" };
    }
    if (totalDependientes === 4) {
      if (dependiente("banio") && dependiente("vestirse") && dependiente("inodoro")) {
        return { clase: "E", descripcion: "Independiente en todas, excepto en Baño, Vestirse, Uso del Inodoro y otra adicional" };
      }
      return { clase: "H", descripcion: "Dependencia en dos o más funciones que no encajan en la progresión jerárquica exacta (Otros)" };
    }
    if (totalDependientes === 5) {
      if (dependiente("banio") && dependiente("vestirse") && dependiente("inodoro") && dependiente("movilidad")) {
        return { clase: "F", descripcion: "Independiente en todas, excepto en Baño, Vestirse, Uso del Inodoro, Movilidad y otra adicional" };
      }
      return { clase: "H", descripcion: "Dependencia en dos o más funciones que no encajan en la progresión jerárquica exacta (Otros)" };
    }

    // No debería llegar aquí (totalDependientes ya cubre 0-6 arriba)
    return { clase: "H", descripcion: "Patrón no clasificable" };
  },

  // ---------- Función de cálculo consolidada ----------
  calcularResultado: function (respuestas) {
    let puntajeCuantitativo = 0;
    let itemsRespondidos = 0;

    this.items.forEach((item) => {
      const valor = respuestas[item.id];
      if (typeof valor === "number") {
        puntajeCuantitativo += valor;
        itemsRespondidos++;
      }
    });

    if (itemsRespondidos < this.items.length) {
      return {
        puntajeCuantitativo,
        itemsRespondidos,
        clase: null,
        descripcion: "Faltan ítems por responder — la clasificación jerárquica requiere los 6 ítems completos"
      };
    }

    const resultadoClase = this.clasificarLetra(respuestas);

    return {
      puntajeCuantitativo, // 0 a 6
      itemsRespondidos,
      clase: resultadoClase.clase,
      descripcion: resultadoClase.descripcion
    };
  }
};

if (typeof escalasTerapiaOcupacional !== "undefined") {
  escalasTerapiaOcupacional.push(escalaKatz);
}

// ---------------------------------------------------------------
// Archivo original: lawton_brody.js
// ---------------------------------------------------------------
/* ============================================================
   ÍNDICE DE LAWTON-BRODY (Actividades Instrumentales de la Vida Diaria)
   Especialidad: Terapia Ocupacional
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   8 ítems, cada uno con varias sub-opciones que ya vienen marcadas
   como Independiente (1) o Dependiente (0) — el puntaje del ítem es
   binario, no una escala 0-2 como en Barthel.
   Incluye: ajuste proporcional por datos perdidos (institucionalización)
   y opción de sesgo de género clásico (1969, histórico, desactivado
   por defecto).
   ============================================================ */

const escalaLawtonBrody = {
  id: "lawton-brody",
  nombre: "Índice de Lawton-Brody (Actividades Instrumentales de la Vida Diaria)",
  especialidad: "terapia-ocupacional",
  descripcion: "Evalúa la capacidad para realizar actividades instrumentales complejas (teléfono, compras, finanzas, etc.), necesarias para vivir de forma autónoma en la comunidad.",

  items: [
    {
      id: "lb-telefono", numero: 1, texto: "Capacidad para usar el teléfono",
      opciones: [
        { valor: 1, label: "Utiliza el teléfono por iniciativa propia, busca y marca los números de forma autónoma" },
        { valor: 1, label: "Marca unos cuantos números bien conocidos de memoria o con facilidad" },
        { valor: 1, label: "Contesta el teléfono, pero no es capaz de marcar de forma autónoma" },
        { valor: 0, label: "No es capaz de usar el teléfono en absoluto" }
      ]
    },
    {
      id: "lb-compras", numero: 2, texto: "Hacer compras",
      opciones: [
        { valor: 1, label: "Realiza todas las compras necesarias de forma independiente sin supervisión" },
        { valor: 0, label: "Realiza pequeñas compras de forma independiente, pero necesita compañía para compras grandes" },
        { valor: 0, label: "Necesita que lo acompañen en cualquier intento de compra" },
        { valor: 0, label: "Es completamente incapaz de hacer compras" }
      ]
    },
    {
      id: "lb-comida", numero: 3, texto: "Preparación de la comida",
      opciones: [
        { valor: 1, label: "Organiza, prepara y sirve las comidas por sí mismo de forma correcta y segura" },
        { valor: 0, label: "Prepara las comidas si se le proporcionan los ingredientes necesarios de antemano" },
        { valor: 0, label: "Prepara la comida pero no mantiene una dieta adecuada o requiere supervisión" },
        { valor: 0, label: "Necesita que le preparen y sirvan las comidas por completo" }
      ]
    },
    {
      id: "lb-casa", numero: 4, texto: "Cuidado de la casa / Tareas domésticas",
      opciones: [
        { valor: 1, label: "Mantiene la casa sola o con ayuda regular para trabajos pesados de manera autónoma" },
        { valor: 1, label: "Realiza tareas domésticas ligeras de forma eficiente (lavar platos, hacer la cama)" },
        { valor: 1, label: "Realiza tareas ligeras pero no mantiene un nivel de limpieza aceptable" },
        { valor: 0, label: "Necesita ayuda en todas las labores de la casa y no participa eficientemente" },
        { valor: 0, label: "No participa en ninguna tarea doméstica" }
      ]
    },
    {
      id: "lb-ropa", numero: 5, texto: "Lavado de la ropa",
      opciones: [
        { valor: 1, label: "Lava toda su ropa personal de forma completamente independiente" },
        { valor: 1, label: "Lava prendas pequeñas de forma independiente (ej. ropa interior, calcetines)" },
        { valor: 0, label: "Toda la ropa debe ser lavada y gestionada por un tercero" }
      ]
    },
    {
      id: "lb-transporte", numero: 6, texto: "Uso de medios de transporte",
      opciones: [
        { valor: 1, label: "Viaja de forma independiente en transporte público o conduce su propio vehículo" },
        { valor: 1, label: "Es capaz de organizar sus propios viajes en taxi, pero no usa otro transporte público" },
        { valor: 1, label: "Viaja en transporte público si va acompañado por otra persona" },
        { valor: 0, label: "Solo viaja en taxi o automóvil con auxilio directo y constante de otros" },
        { valor: 0, label: "No viaja en absoluto" }
      ]
    },
    {
      id: "lb-medicacion", numero: 7, texto: "Responsabilidad respecto a su medicación",
      opciones: [
        { valor: 1, label: "Es capaz de tomar su medicación en las dosis y horarios correctos de forma autónoma" },
        { valor: 0, label: "Toma sus medicamentos si se le preparan o dosifican de forma anticipada (pastilleros)" },
        { valor: 0, label: "Es completamente incapaz de hacerse cargo de su propia medicación" }
      ]
    },
    {
      id: "lb-finanzas", numero: 8, texto: "Capacidad para manejar asuntos económicos / Finanzas",
      opciones: [
        { valor: 1, label: "Se encarga de sus asuntos económicos de forma independiente (paga cuentas, va al banco)" },
        { valor: 1, label: "Realiza el manejo diario de dinero efectivo pero necesita ayuda para transacciones grandes" },
        { valor: 0, label: "Incapaz de manejar dinero de forma autónoma" }
      ]
    }
  ],

  // ---------- Función de cálculo (equivalente al motor TypeScript entregado) ----------
  // respuestas: { "lb-telefono": 1, "lb-compras": 0, ... } — usar null u omitir
  // el ítem para marcarlo como "no aplica / no evaluable" (institucionalización)
  // sexo: 'M' | 'F', usarAjusteClasicoGenero: boolean (histórico, 1969, desactivado
  // por defecto en el estándar moderno)
  calcularPuntaje: function (respuestas, sexo, usarAjusteClasicoGenero) {
    const itemsExcluidos = usarAjusteClasicoGenero && sexo === "M"
      ? ["lb-comida", "lb-casa", "lb-ropa"]
      : [];

    let sumaBruta = 0;
    let conteoValidos = 0;

    this.items.forEach((item) => {
      if (itemsExcluidos.includes(item.id)) return;
      const valor = respuestas[item.id];
      if (typeof valor === "number") {
        sumaBruta += valor;
        conteoValidos++;
      }
    });

    if (conteoValidos === 0) {
      return { puntajeBruto: 0, puntajeAjustado: 0, dimensionesEvaluadas: 0, maximoPosible: 0, interpretacion: "Datos insuficientes" };
    }

    const maximoEsperado = itemsExcluidos.length > 0 ? 5 : 8;

    // Regla Gold Standard de ajuste proporcional por datos perdidos/institucionales
    const puntajeAjustado = Math.round((sumaBruta / conteoValidos) * maximoEsperado);

    let interpretacion = "";
    if (maximoEsperado === 8) {
      if (puntajeAjustado === 8) interpretacion = "Independencia Total";
      else if (puntajeAjustado >= 6) interpretacion = "Dependencia Leve";
      else if (puntajeAjustado >= 4) interpretacion = "Dependencia Moderada";
      else if (puntajeAjustado >= 2) interpretacion = "Dependencia Severa";
      else interpretacion = "Dependencia Total / Grave";
    } else {
      if (puntajeAjustado === 5) interpretacion = "Independencia Total (Escala de 5)";
      else if (puntajeAjustado === 4) interpretacion = "Dependencia Leve";
      else if (puntajeAjustado >= 2) interpretacion = "Dependencia Moderada";
      else interpretacion = "Dependencia Severa / Total";
    }

    return {
      puntajeBruto: sumaBruta,
      puntajeAjustado,
      dimensionesEvaluadas: conteoValidos,
      maximoPosible: maximoEsperado,
      interpretacion
    };
  }
};

if (typeof escalasTerapiaOcupacional !== "undefined") {
  escalasTerapiaOcupacional.push(escalaLawtonBrody);
}

// ---------------------------------------------------------------
// Archivo original: lotca.js
// ---------------------------------------------------------------
/* ============================================================
   LOTCA — Loewenstein Occupational Therapy Cognitive Assessment
   Especialidad: Terapia Ocupacional
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   20 ítems en 5 áreas cognitivas. Escala 1-4 (NUNCA se usa 0), con
   dos excepciones que permiten un 5 ("Criterio de Excelencia"):
   VM3 (Construcción en 3D) y OP2 (Secuencias Lógicas).

   IMPORTANTE: a diferencia de las demás escalas del banco, el LOTCA
   NO devuelve un puntaje total sumado — el documento fuente es
   explícito en que sumarlo todo diluye la información clínica y es
   metodológicamente incorrecto. Se devuelven 5 subtotales
   independientes por área (un "perfil", no un solo número).
   ============================================================ */

function opciones1a4() {
  return [
    { valor: 1, label: "1 - Incapacidad Total: no comprende la consigna o no inicia la tarea" },
    { valor: 2, label: "2 - Ejecución Parcial con Asistencia: completa menos de la mitad con guía física o verbal constante" },
    { valor: 3, label: "3 - Ejecución Casi Completa: resuelve la tarea con lentitud, errores menores autodefectados o pistas mínimas" },
    { valor: 4, label: "4 - Ejecución Perfecta: resuelve de forma fluida, correcta y autónoma en el tiempo estándar" }
  ];
}

function opciones1a5() {
  return [
    ...opciones1a4(),
    { valor: 5, label: "5 - Criterio de Excelencia: ejecución inmediata sin titubeo, o con estrategia avanzada de resolución" }
  ];
}

const escalaLOTCA = {
  id: "lotca",
  nombre: "LOTCA (Loewenstein Occupational Therapy Cognitive Assessment)",
  especialidad: "terapia-ocupacional",
  descripcion: "Instrumento gold standard para mapear en profundidad funciones cognitivas y perceptivas en adultos con daño cerebral. A diferencia de un tamizaje rápido (MMSE), identifica exactamente qué área cognitiva específica está fallando.",
  notaMetodologica: "No se calcula un puntaje total único — se reportan 5 subtotales independientes por área, ya que sumarlos diluiría la información clínica.",

  areas: [
    {
      id: "orientacion",
      nombre: "Área 1: Orientación",
      rango: { minimo: 2, maximo: 8 },
      items: [
        { id: "o1", texto: "Orientación Espacial: reconocimiento del entorno físico actual (dónde está, ciudad, dirección)", opciones: opciones1a4() },
        { id: "o2", texto: "Orientación Temporal: comprensión del tiempo cronológico (fecha, año, hora, estación)", opciones: opciones1a4() }
      ]
    },
    {
      id: "percepcion",
      nombre: "Área 2: Percepción Visual y Espacial",
      rango: { minimo: 6, maximo: 24 },
      items: [
        { id: "pv1", texto: "Identificación de Objetos: reconocer visualmente 8 objetos cotidianos en fotografías", opciones: opciones1a4() },
        { id: "pv2", texto: "Identificación de Formas: identificar figuras geométricas básicas impresas en tarjetas", opciones: opciones1a4() },
        { id: "pv3", texto: "Figuras Fondo: discriminar objetos específicos superpuestos o difuminados en una imagen", opciones: opciones1a4() },
        { id: "pv4", texto: "Constancia de Objeto: reconocer un objeto fotografiado desde un ángulo inusual o invertido", opciones: opciones1a4() },
        { id: "pe1", texto: "Percepción Espacial (Cuerpo propio): identificar componentes de su propio esquema corporal", opciones: opciones1a4() },
        { id: "pe2", texto: "Percepción Espacial (Relaciones en el espacio): posición de objetos respecto a su cuerpo y entre sí", opciones: opciones1a4() }
      ]
    },
    {
      id: "praxis",
      nombre: "Área 3: Praxis",
      rango: { minimo: 3, maximo: 12 },
      items: [
        { id: "pr1", texto: "Imitación Motora: capacidad para replicar gestos físicos realizados por el terapeuta", opciones: opciones1a4() },
        { id: "pr2", texto: "Utilización de Objetos: demostrar el uso correcto de herramientas comunes (peine, tijeras, llave)", opciones: opciones1a4() },
        { id: "pr3", texto: "Acciones Secuenciales: ejecutar una cadena de movimientos ordenados (ej. meter una carta en un sobre y sellarlo)", opciones: opciones1a4() }
      ]
    },
    {
      id: "visomotor",
      nombre: "Área 4: Organización Visomotor y Constructiva",
      rango: { minimo: 6, maximo: 25 },
      items: [
        { id: "vm1", texto: "Copia de Formas Geométricas: dibujar figuras geométricas presentadas en un modelo", opciones: opciones1a4() },
        { id: "vm2", texto: "Reproducción de un Modelo de Dos Dimensiones: replicar un diseño plano con bloques o clavijas", opciones: opciones1a4() },
        { id: "vm3", texto: "Construcción en Tres Dimensiones: armar un cubo o pirámide 3D con bloques siguiendo un modelo físico", opciones: opciones1a5() },
        { id: "vm4", texto: "Construcción con Bloques (Diseño en tarjeta): construir una estructura a partir de un plano 2D", opciones: opciones1a4() },
        { id: "vm5", texto: "Rompecabezas / Construcción libre: unir piezas segmentadas para formar una imagen coherente", opciones: opciones1a4() },
        { id: "vm6", texto: "Dibujo de un Objeto Común: dibujar un elemento reconocible de memoria (reloj, casa, bicicleta)", opciones: opciones1a4() }
      ]
    },
    {
      id: "pensamiento",
      nombre: "Área 5: Operaciones de Pensamiento y Razonamiento",
      rango: { minimo: 3, maximo: 13 },
      items: [
        { id: "op1", texto: "Categorización / Clasificación: agrupar objetos o tarjetas siguiendo un criterio lógico", opciones: opciones1a4() },
        { id: "op2", texto: "Secuencias Lógicas (Historias en imágenes): ordenar cronológicamente tarjetas que narran una historia", opciones: opciones1a5() },
        { id: "op3", texto: "Razonamiento Geométrico: resolver problemas espaciales abstractos completando secuencias de formas", opciones: opciones1a4() }
      ]
    }
  ],

  // ---------- Interpretación por área (comparando contra el máximo teórico) ----------
  interpretarArea: function (subtotal, rango) {
    if (subtotal === rango.maximo) {
      return "Puntaje Máximo: integridad del procesamiento cognitivo en este canal. Apto para auto-mantenimiento independiente.";
    }
    const perdida = rango.maximo - subtotal;
    const rangoTotal = rango.maximo - rango.minimo;
    if (perdida <= 2) {
      return "Disminución Leve: disfunciones sutiles. Afecta tareas complejas (manejo de dinero, retorno laboral). Se sugiere entrenamiento con estrategias de compensación (listas, alarmas).";
    }
    if (subtotal <= rango.minimo + Math.round(rangoTotal * 0.25)) {
      return "Disminución Moderada/Severa: falla crítica en el procesamiento neurocognitivo. Alto riesgo para ABVD. Requiere asistencia humana directa y adaptaciones masivas del entorno.";
    }
    return "Disminución moderada: afectación intermedia, requiere valoración clínica adicional para definir nivel de apoyo.";
  },

  // ---------- Función de cálculo (devuelve el PERFIL, no un total) ----------
  calcularPerfil: function (respuestas) {
    const perfil = {};

    this.areas.forEach((area) => {
      let subtotal = 0;
      let itemsRespondidos = 0;
      area.items.forEach((item) => {
        const valor = respuestas[item.id];
        if (typeof valor === "number") {
          subtotal += valor;
          itemsRespondidos++;
        }
      });

      const completo = itemsRespondidos === area.items.length;
      perfil[area.id] = {
        subtotal,
        rango: area.rango,
        itemsRespondidos,
        completo,
        interpretacion: completo ? this.interpretarArea(subtotal, area.rango) : null
      };
    });

    return perfil;
  }
};

if (typeof escalasTerapiaOcupacional !== "undefined") {
  escalasTerapiaOcupacional.push(escalaLOTCA);
}

// ---------------------------------------------------------------
// Archivo original: mmse.js
// ---------------------------------------------------------------
/* ============================================================
   MMSE — Mini-Mental State Examination (Folstein)
   Especialidad: Neuropsicología
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   30 ítems binarios (1=Acierto, 0=Error) en 6 secciones. El bloque
   de Atención y Cálculo permite 2 métodos alternativos (restar de 7
   en 7, o deletrear MUNDO al revés) — ambos puntúan igual (máx 5),
   se registra cuál se usó de forma informativa.
   ============================================================ */

function opcionesMMSE() {
  return [
    { valor: 1, label: "1 - Acierto" },
    { valor: 0, label: "0 - Error" }
  ];
}

const escalaMMSE = {
  id: "mmse",
  nombre: "MMSE (Mini-Mental State Examination de Folstein)",
  especialidad: "neuropsicologia",
  descripcion: "El tamizaje cognitivo más utilizado del mundo. Evalúa orientación, fijación, atención/cálculo, evocación, y lenguaje/praxis.",
  puntajeMaximo: 30,

  secciones: [
    {
      id: "orientacion-temporal",
      nombre: "Orientación Temporal",
      puntajeMaximoSeccion: 5,
      items: [
        { id: "p1", numero: 1, texto: "Año", opciones: opcionesMMSE() },
        { id: "p2", numero: 2, texto: "Estación", opciones: opcionesMMSE() },
        { id: "p3", numero: 3, texto: "Mes", opciones: opcionesMMSE() },
        { id: "p4", numero: 4, texto: "Día del mes", opciones: opcionesMMSE() },
        { id: "p5", numero: 5, texto: "Día de la semana", opciones: opcionesMMSE() }
      ]
    },
    {
      id: "orientacion-espacial",
      nombre: "Orientación Espacial",
      puntajeMaximoSeccion: 5,
      items: [
        { id: "p6", numero: 6, texto: "Lugar exacto (hospital/casa)", opciones: opcionesMMSE() },
        { id: "p7", numero: 7, texto: "Piso/Planta", opciones: opcionesMMSE() },
        { id: "p8", numero: 8, texto: "Ciudad", opciones: opcionesMMSE() },
        { id: "p9", numero: 9, texto: "Provincia/Estado", opciones: opcionesMMSE() },
        { id: "p10", numero: 10, texto: "País", opciones: opcionesMMSE() }
      ]
    },
    {
      id: "fijacion-registro",
      nombre: "Fijación / Registro",
      puntajeMaximoSeccion: 3,
      instruccion: "Repetición inmediata de 3 palabras (ej: Peseta, Caballo, Manzana). 1 punto por cada palabra correcta al primer intento.",
      items: [
        { id: "p11", numero: 11, texto: "Palabra 1 repetida correctamente", opciones: opcionesMMSE() },
        { id: "p12", numero: 12, texto: "Palabra 2 repetida correctamente", opciones: opcionesMMSE() },
        { id: "p13", numero: 13, texto: "Palabra 3 repetida correctamente", opciones: opcionesMMSE() }
      ]
    },
    {
      id: "atencion-calculo",
      nombre: "Atención y Cálculo",
      puntajeMaximoSeccion: 5,
      instruccion: "Elegir UN método: (A) restar de 7 en 7 desde 100, o (B) deletrear MUNDO al revés. Ambos puntúan igual (máx. 5).",
      metodos: {
        A: { nombre: "Restar de 7 en 7 desde 100", valoresEsperados: [93, 86, 79, 72, 65] },
        B: { nombre: "Deletrear MUNDO al revés", valoresEsperados: ["O", "D", "N", "U", "M"] }
      },
      items: [
        { id: "p14_1", numero: "14.1", texto: "Paso 1 correcto", opciones: opcionesMMSE() },
        { id: "p14_2", numero: "14.2", texto: "Paso 2 correcto", opciones: opcionesMMSE() },
        { id: "p14_3", numero: "14.3", texto: "Paso 3 correcto", opciones: opcionesMMSE() },
        { id: "p14_4", numero: "14.4", texto: "Paso 4 correcto", opciones: opcionesMMSE() },
        { id: "p14_5", numero: "14.5", texto: "Paso 5 correcto", opciones: opcionesMMSE() }
      ]
    },
    {
      id: "evocacion",
      nombre: "Evocación / Memoria",
      puntajeMaximoSeccion: 3,
      instruccion: "Recordar las 3 palabras del ítem de fijación tras unos minutos.",
      items: [
        { id: "p16", numero: 16, texto: "Palabra 1 recordada", opciones: opcionesMMSE() },
        { id: "p17", numero: 17, texto: "Palabra 2 recordada", opciones: opcionesMMSE() },
        { id: "p18", numero: 18, texto: "Palabra 3 recordada", opciones: opcionesMMSE() }
      ]
    },
    {
      id: "lenguaje-praxis",
      nombre: "Lenguaje y Praxis",
      puntajeMaximoSeccion: 9,
      items: [
        { id: "p19", numero: 19, texto: "Nombrar un reloj", opciones: opcionesMMSE() },
        { id: "p20", numero: 20, texto: "Nombrar un bolígrafo", opciones: opcionesMMSE() },
        { id: "p21", numero: 21, texto: 'Repetir la frase: "Ni sí, ni no, ni pero"', opciones: opcionesMMSE() },
        { id: "p22", numero: 22, texto: 'Orden 3 tiempos - Paso 1: "Tome este papel con la mano derecha"', opciones: opcionesMMSE() },
        { id: "p23", numero: 23, texto: "Orden 3 tiempos - Paso 2: dóblelo por la mitad", opciones: opcionesMMSE() },
        { id: "p24", numero: 24, texto: "Orden 3 tiempos - Paso 3: póngalo en el suelo", opciones: opcionesMMSE() },
        { id: "p25", numero: 25, texto: 'Leer y ejecutar la orden escrita: "CIERRE LOS OJOS"', opciones: opcionesMMSE() },
        { id: "p26", numero: 26, texto: "Escribir una frase con sentido (sujeto y predicado)", opciones: opcionesMMSE() },
        { id: "p27", numero: 27, texto: "Copiar el dibujo de dos pentágonos cruzados (deben cruzarse en un cuadrilátero)", opciones: opcionesMMSE() }
      ]
    }
  ],

  // ---------- Clasificación clínica ----------
  clasificar: function (total) {
    if (total >= 27) return "Normal / Sin deterioro cognitivo";
    if (total >= 24) return "Sospecha / Deterioro cognitivo leve";
    if (total >= 12) return "Deterioro cognitivo moderado";
    return "Deterioro cognitivo severo"; // 0-11
  },

  // ---------- Función de cálculo ----------
  calcularPuntaje: function (respuestas) {
    let total = 0;
    const subtotalesPorSeccion = {};

    this.secciones.forEach((seccion) => {
      let subtotal = 0;
      seccion.items.forEach((item) => {
        const valor = respuestas[item.id];
        if (typeof valor === "number") {
          subtotal += valor;
        }
      });
      subtotalesPorSeccion[seccion.id] = subtotal;
      total += subtotal;
    });

    return {
      total,
      puntajeMaximo: this.puntajeMaximo,
      clasificacion: this.clasificar(total),
      subtotalesPorSeccion
    };
  }
};

if (typeof escalasNeuropsicologia !== "undefined") {
  escalasNeuropsicologia.push(escalaMMSE);
}

// ---------------------------------------------------------------
// Archivo original: mohost.js
// ---------------------------------------------------------------
/* ============================================================
   MOHOST — Model of Human Occupation Screening Tool
   (Perfil Ocupacional Humano)
   Especialidad: Terapia Ocupacional
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   24 ítems en 6 dimensiones (4 ítems c/u), escala 1-4 donde MAYOR
   puntaje = mayor independencia (4=Facilita, 3=Adecuado, 2=Inhibe,
   1=Restringe). Rango por subescala: 4-16. Rango global: 24-96.
   ============================================================ */

function opcionesMOHOST() {
  return [
    { valor: 4, label: "4 - F (Facilita): apoya fuertemente la participación independiente, sin necesidad de intervención" },
    { valor: 3, label: "3 - A (Adecuado/Permite): permite la participación, aunque con ligeras inconsistencias" },
    { valor: 2, label: "2 - I (Inhibe): interfiere o dificulta la participación; requiere supervisión o adaptaciones menores" },
    { valor: 1, label: "1 - R (Restringe): impide por completo la participación independiente; requiere asistencia total o intervención prioritaria" }
  ];
}

const escalaMOHOST = {
  id: "mohost",
  nombre: "MOHOST (Perfil Ocupacional Humano)",
  especialidad: "terapia-ocupacional",
  descripcion: "Evalúa 6 dimensiones del desempeño ocupacional (volición, habituación, comunicación/interacción, procesamiento, motoras, y entorno) mediante 24 ítems.",
  puntajeMinimo: 24,
  puntajeMaximo: 96,

  dimensiones: [
    {
      id: "volicion",
      nombre: "Volición (Motivación por la Ocupación)",
      items: [
        { id: "m1", numero: 1, texto: "Elección de la Ocupación: capacidad para elegir y comprometerse en actividades", opciones: opcionesMOHOST() },
        { id: "m2", numero: 2, texto: "Intereses: grado de interés y curiosidad que demuestra por las cosas que hace", opciones: opcionesMOHOST() },
        { id: "m3", numero: 3, texto: "Valoración de la Ocupación: percepción sobre la importancia y utilidad de sus actividades diarias", opciones: opcionesMOHOST() },
        { id: "m4", numero: 4, texto: "Sentido de Capacidad (Autoeficacia): confianza en sus propias habilidades ocupacionales", opciones: opcionesMOHOST() }
      ]
    },
    {
      id: "habituacion",
      nombre: "Habituación (Organización de la Vida Cotidiana)",
      items: [
        { id: "h1", numero: 1, texto: "Roles Ocupacionales: habilidad para asumir y cumplir roles familiares, laborales o comunitarios", opciones: opcionesMOHOST() },
        { id: "h2", numero: 2, texto: "Rutinas: organización de las actividades diarias en un horario equilibrado y predecible", opciones: opcionesMOHOST() },
        { id: "h3", numero: 3, texto: "Adaptabilidad de las Rutinas: flexibilidad para responder a cambios o imprevistos", opciones: opcionesMOHOST() },
        { id: "h4", numero: 4, texto: "Estilo de Vida: equilibrio entre actividades productivas, de autocuidado y de ocio", opciones: opcionesMOHOST() }
      ]
    },
    {
      id: "comunicacion-interaccion",
      nombre: "Habilidades de Comunicación e Interacción",
      items: [
        { id: "c1", numero: 1, texto: "Contacto Físico y Gestual: uso del cuerpo, expresiones faciales y gestos para comunicarse", opciones: opcionesMOHOST() },
        { id: "c2", numero: 2, texto: "Expresión Oral / Intercambio de Información: claridad, ritmo y modulación del habla", opciones: opcionesMOHOST() },
        { id: "c3", numero: 3, texto: "Relaciones Sociales: habilidad para entablar, mantener y adaptarse a dinámicas con diferentes personas", opciones: opcionesMOHOST() },
        { id: "c4", numero: 4, texto: "Comportamiento en Grupo: capacidad para colaborar y seguir normas implícitas en entornos grupales", opciones: opcionesMOHOST() }
      ]
    },
    {
      id: "procesamiento",
      nombre: "Habilidades de Procesamiento (Cognición Ocupacional)",
      items: [
        { id: "p1", numero: 1, texto: "Conocimiento y Elección de Objetos: selección adecuada de herramientas y materiales para una tarea", opciones: opcionesMOHOST() },
        { id: "p2", numero: 2, texto: "Organización del Espacio: capacidad para estructurar y ordenar el entorno de trabajo/actividad", opciones: opcionesMOHOST() },
        { id: "p3", numero: 3, texto: "Resolución de Problemas: capacidad para identificar fallas en la tarea y corregirlas sobre la marcha", opciones: opcionesMOHOST() },
        { id: "p4", numero: 4, texto: "Atención y Persistencia: mantenimiento del enfoque en la actividad desde el inicio hasta su finalización", opciones: opcionesMOHOST() }
      ]
    },
    {
      id: "motoras",
      nombre: "Habilidades Motoras (Desempeño Físico Ocupacional)",
      items: [
        { id: "o1", numero: 1, texto: "Postura y Flexibilidad: control postural adecuado durante transferencias y ejecución de la tarea", opciones: opcionesMOHOST() },
        { id: "o2", numero: 2, texto: "Movilidad y Desplazamiento: capacidad para moverse de forma eficiente en el espacio de la actividad", opciones: opcionesMOHOST() },
        { id: "o3", numero: 3, texto: "Coordinación y Manipulación: uso fluido de las extremidades superiores para manejar objetos y herramientas", opciones: opcionesMOHOST() },
        { id: "o4", numero: 4, texto: "Fuerza y Resistencia: energía física suficiente para completar las actividades sin fatiga extrema", opciones: opcionesMOHOST() }
      ]
    },
    {
      id: "entorno",
      nombre: "Entorno (Factores Ambientales)",
      items: [
        { id: "e1", numero: 1, texto: "Espacio Físico: accesibilidad y barreras arquitectónicas en los lugares donde interactúa", opciones: opcionesMOHOST() },
        { id: "e2", numero: 2, texto: "Objetos y Recursos: disponibilidad y adecuación de las herramientas y materiales necesarios", opciones: opcionesMOHOST() },
        { id: "e3", numero: 3, texto: "Grupos Sociales (Personas): apoyo emocional o interferencia de la familia, amigos o cuidadores", opciones: opcionesMOHOST() },
        { id: "e4", numero: 4, texto: "Demandas Ocupacionales: nivel de exigencia de las tareas habituales frente a las capacidades reales", opciones: opcionesMOHOST() }
      ]
    }
  ],

  // ---------- Clasificación clínica ----------
  clasificar: function (total) {
    if (total >= 80) return "Participación Ocupacional Óptima: funciona de manera independiente o con apoyos naturales mínimos";
    if (total >= 56) return "Participación Limitada / Riesgo Ocupacional: existen dimensiones críticas que inhiben el desempeño; sugerida intervención en TO enfocada en adaptación de rutinas";
    if (total >= 32) return "Disfunción Ocupacional Moderada: múltiples factores restringen o inhiben la participación diaria; requiere asistencia técnica y modificación intensiva del entorno";
    return "Disfunción Ocupacional Severa: dependencia generalizada; el plan terapéutico debe enfocarse en estimulación basal y entrenamiento estricto del cuidador primario"; // 24-31
  },

  // ---------- Función de cálculo ----------
  calcularPuntaje: function (respuestas) {
    let total = 0;
    const subtotalesPorDimension = {};

    this.dimensiones.forEach((dim) => {
      let subtotal = 0;
      dim.items.forEach((item) => {
        const valor = respuestas[item.id];
        if (typeof valor === "number") {
          subtotal += valor;
        }
      });
      subtotalesPorDimension[dim.id] = subtotal;
      total += subtotal;
    });

    return {
      total,
      puntajeMinimo: this.puntajeMinimo,
      puntajeMaximo: this.puntajeMaximo,
      clasificacion: this.clasificar(total),
      subtotalesPorDimension
    };
  }
};

if (typeof escalasTerapiaOcupacional !== "undefined") {
  escalasTerapiaOcupacional.push(escalaMOHOST);
}

// ---------------------------------------------------------------
// Archivo original: osa_completo.js
// ---------------------------------------------------------------
/* ============================================================
   OSA — Occupational Self-Assessment (Autoevaluación Ocupacional)
   Especialidad: Terapia Ocupacional
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   VERSIÓN ENRIQUECIDA: mismos 21 ítems que la versión anterior
   (osa.js), pero esta fuente agrega la agrupación en 3 áreas
   (Autocuidado, Rol/Relaciones, Productividad/Placer), subtotales
   de Competencia e Importancia, y el cálculo de "% Eficacia
   Percibida" con su propia clasificación clínica — además del
   Índice de Brecha Ocupacional (IBO) ya construido. Reemplaza a
   osa.js si se desea la versión completa.
   ============================================================ */

function opcionesCapacidadOSA() {
  return [
    { valor: 1, label: "1 - Tengo mucha dificultad para hacer esto" },
    { valor: 2, label: "2 - Tengo alguna dificultad para hacer esto" },
    { valor: 3, label: "3 - Lo hago bien" },
    { valor: 4, label: "4 - Lo hago extremadamente bien" }
  ];
}

function opcionesImportanciaOSA() {
  return [
    { valor: 1, label: "1 - Esto no es importante para mí" },
    { valor: 2, label: "2 - Esto es importante para mí" },
    { valor: 3, label: "3 - Esto es muy importante para mí" },
    { valor: 4, label: "4 - Esto es fundamental / una prioridad absoluta para mí" }
  ];
}

const escalaOSA_Completa = {
  id: "osa-completo",
  nombre: "OSA (Autoevaluación Ocupacional) — Versión Completa",
  especialidad: "terapia-ocupacional",
  descripcion: "Instrumento de autoinforme (no de juicio del terapeuta) que captura la percepción del propio paciente sobre su competencia ocupacional y el valor que asigna a sus actividades diarias.",

  areas: [
    {
      id: "autocuidado",
      nombre: "Área A: Competencia en el Cuidado de Uno Mismo",
      items: [
        { id: "o1", texto: "Cuidar de mí mismo: manejar el aseo, la alimentación y la salud personal" },
        { id: "o2", texto: "Cuidar el lugar donde vivo: mantener la limpieza y el orden del hogar" },
        { id: "o3", texto: "Irme a donde necesito: desplazarse por la comunidad o usar transporte" },
        { id: "o4", texto: "Manejar mis finanzas: controlar el dinero y pagar las cuentas a tiempo" },
        { id: "o5", texto: "Organizar mi tiempo: distribuir las horas del día de manera eficiente" },
        { id: "o6", texto: "Cuidar mi cuerpo: mantenerse en buena condición física, ejercicio o descanso" },
        { id: "o7", texto: "Usar mis herramientas cotidianas: manejar objetos del hogar, llaves, electrodomésticos, dispositivos" }
      ]
    },
    {
      id: "rol-relaciones",
      nombre: "Área B: Competencia en el Rol y Relaciones Interpersonales",
      items: [
        { id: "o8", texto: "Concentrarme: mantener la atención necesaria en las actividades sin dispersarse" },
        { id: "o9", texto: "Controlar mis emociones: responder de manera equilibrada al estrés o los imprevistos" },
        { id: "o10", texto: "Expresar mi opinión y deseos: comunicar ideas de forma clara y asertiva" },
        { id: "o11", texto: "Llevarme bien con otros: interactuar con familiares, amigos, vecinos o compañeros" },
        { id: "o12", texto: "Tomar decisiones por mí mismo: elegir de forma autónoma lo que quiero hacer" },
        { id: "o13", texto: "Cumplir mis roles: responder a las demandas de ser padre, hijo, trabajador, estudiante, etc." },
        { id: "o14", texto: "Participar en mi comunidad: involucrarse en actividades grupales, vecinales o recreativas" }
      ]
    },
    {
      id: "productividad-placer",
      nombre: "Área C: Competencia en la Productividad y el Placer",
      items: [
        { id: "o15", texto: "Disfrutar del ocio: dedicar tiempo a pasatiempos que generen satisfacción personal" },
        { id: "o16", texto: "Hacer actividades productivas: realizar tareas que aporten valor a otros o a mí mismo" },
        { id: "o17", texto: "Trabajar o estudiar: desempeñarse de forma constante en un empleo o formación académica" },
        { id: "o18", texto: "Relajarme: encontrar momentos para descansar la mente y aliviar la tensión diaria" },
        { id: "o19", texto: "Buscar metas personales: trabajar activamente por proyectos o sueños a mediano/largo plazo" },
        { id: "o20", texto: "Adaptarme a los cambios: flexibilidad psicológica ante nuevas situaciones de vida" },
        { id: "o21", texto: "Mantener mi rutina: sostener una estructura diaria equilibrada y funcional" }
      ]
    }
  ],

  opcionesCapacidad: opcionesCapacidadOSA(),
  opcionesImportancia: opcionesImportanciaOSA(),

  rangos: {
    competencia: { minimo: 21, maximo: 84 },
    importancia: { minimo: 21, maximo: 84 }
  },

  // ---------- Clasificación por % de Eficacia Percibida ----------
  clasificarEficacia: function (porcentaje) {
    if (porcentaje >= 80) return "Identidad Ocupacional Sólida: se percibe capaz y alineado con sus valores. Apto para alta o mantenimiento autónomo";
    if (porcentaje >= 50) return "Conflictos de Competencia / Identidad Ocupacional en Riesgo: discrepancias marcadas en roles o actividades específicas; se sugiere adaptar el entorno";
    return "Disfunción Ocupacional y Sentimiento de Ineficacia Severo: fuerte impacto emocional; alto riesgo de depresión reactiva o abandono de roles; requiere apoyo urgente con logros terapéuticos rápidos"; // <50%
  },

  // ---------- Función de cálculo consolidada ----------
  // respuestas: { o1: {capacidad: 2, importancia: 4}, ... }
  calcularResultado: function (respuestas) {
    let totalCompetencia = 0;
    let totalImportancia = 0;
    const resultadosPorItem = [];
    const subtotalesPorArea = {};

    this.areas.forEach((area) => {
      let subC = 0;
      let subI = 0;
      area.items.forEach((item) => {
        const r = respuestas[item.id];
        if (r && typeof r.capacidad === "number" && typeof r.importancia === "number") {
          subC += r.capacidad;
          subI += r.importancia;
          totalCompetencia += r.capacidad;
          totalImportancia += r.importancia;
          resultadosPorItem.push({
            id: item.id,
            texto: item.texto,
            area: area.id,
            capacidad: r.capacidad,
            importancia: r.importancia,
            ibo: r.importancia - r.capacidad,
            esCasoCritico: r.importancia === 4 && r.capacidad === 1
          });
        }
      });
      subtotalesPorArea[area.id] = { competencia: subC, importancia: subI };
    });

    const objetivosPrioritarios = [...resultadosPorItem].sort((a, b) => b.ibo - a.ibo);
    const fortalezas = resultadosPorItem.filter((r) => r.ibo <= 0);

    // % Eficacia Percibida = ((Total_Competencia - 21) / 63) * 100
    const porcentajeEficacia = resultadosPorItem.length === this.areas.reduce((a, ar) => a + ar.items.length, 0)
      ? Math.round(((totalCompetencia - this.rangos.competencia.minimo) / (this.rangos.competencia.maximo - this.rangos.competencia.minimo)) * 100)
      : null;

    return {
      totalCompetencia,
      totalImportancia,
      rangos: this.rangos,
      subtotalesPorArea,
      resultadosPorItem,
      objetivosPrioritarios,
      fortalezas,
      porcentajeEficacia,
      clasificacionEficacia: porcentajeEficacia !== null ? this.clasificarEficacia(porcentajeEficacia) : null
    };
  }
};

if (typeof escalasTerapiaOcupacional !== "undefined") {
  escalasTerapiaOcupacional.push(escalaOSA_Completa);
}

// ---------------------------------------------------------------
// Archivo original: pdms2.js
// ---------------------------------------------------------------
/* ============================================================
   PDMS-2 — Peabody Developmental Motor Scales, Second Edition
   Especialidad: Terapia Ocupacional (Neurodesarrollo infantil)
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   ⚠️ ALCANCE DE ESTA IMPLEMENTACIÓN — LEER ANTES DE USAR:
   La PDMS-2 no es un cuestionario de puntaje fijo como las demás
   escalas del banco — es una prueba de ADMINISTRACIÓN ADAPTATIVA
   con cientos de ítems (8+30+89+24+72+26 = 249 ítems en total)
   organizados por edad, usando lógica de "nivel basal" y "nivel
   techo" para no aplicar todos los ítems en cada sesión.

   Esta implementación SÍ incluye, completo y funcional:
   - La estructura de los 6 subtests (nombre, cantidad de ítems,
     rango de edad de aplicación)
   - El ALGORITMO de basal/techo (3 doses de 2 consecutivos = basal;
     3 ceros consecutivos = techo), que sí está completamente
     especificado en el documento fuente
   - El cálculo del Puntaje Bruto (PB) a partir del basal/techo
   - La clasificación clínica final de los 3 cocientes (CMG/CMF/CMT),
     ya que esos cortes numéricos SÍ vienen dados

   Esta implementación NO incluye (y no se debe fabricar sin la
   fuente oficial):
   - El texto individual de cada uno de los 249 ítems (el documento
     solo da el nombre y la cantidad de ítems por subtest, no el
     contenido de cada uno)
   - Las tablas de conversión Puntaje Bruto -> Puntuación Estándar
     (1-20) por edad — son tablas de baremación propietarias del
     manual oficial de la PDMS-2, no incluidas en el documento
   - La tabla de "Edad Motora Equivalente" por puntaje
   - El "Entry Point" (ítem de inicio) por edad para cada subtest

   Para completar esto se necesita transcribir las tablas del manual
   oficial (Folio, Fewell) — avisar si se tiene acceso a ellas.
   ============================================================ */

const escalaPDMS2 = {
  id: "pdms-2",
  nombre: "PDMS-2 (Peabody Developmental Motor Scales, 2nd Edition)",
  especialidad: "terapia-ocupacional",
  descripcion: "Evalúa el desarrollo motor grueso y fino en niños mediante 6 subtests con administración adaptativa (basal/techo).",

  subtests: [
    { id: "reflejos", nombre: "Reflejos (Reflexes)", componente: "grueso", totalItems: 8, edadAplicacion: "0 a 11 meses" },
    { id: "estacionario", nombre: "Estacionario (Stationary)", componente: "grueso", totalItems: 30, edadAplicacion: "todas las edades del test" },
    { id: "locomocion", nombre: "Locomoción (Locomotion)", componente: "grueso", totalItems: 89, edadAplicacion: "todas las edades del test" },
    { id: "manipulacion-objetos", nombre: "Manipulación de Objetos (Object Manipulation)", componente: "grueso", totalItems: 24, edadAplicacion: "a partir de los 11 meses" },
    { id: "integracion-visomotora", nombre: "Integración Visomotora (Visual-Motor Integration)", componente: "fino", totalItems: 72, edadAplicacion: "todas las edades del test" },
    { id: "agarre", nombre: "Agarre (Grasp)", componente: "fino", totalItems: 26, edadAplicacion: "todas las edades del test" }
  ],

  // ---------- Mapeo del puntuador ----------
  opciones: [
    { valor: 0, label: "0 - Incapaz de intentar la tarea, sin aproximación al movimiento" },
    { valor: 1, label: "1 - Inicio o ejecución parcial, no cumple el criterio completo" },
    { valor: 2, label: "2 - Ejecución completa y correcta según el criterio de excelencia" }
  ],

  // ============================================================
  // ALGORITMO DE BASAL / TECHO (completamente especificado en la fuente)
  // ============================================================
  // itemsAplicados: array ordenado de { numeroItem, puntaje } tal como se
  // fueron aplicando (puede incluir retrocesos si los primeros ítems dan
  // 0 o 1, según la regla de excepción).
  // Devuelve: { nivelBasal, nivelTecho, itemsCompletos (con los asumidos
  // antes del basal=2 y después del techo=0), puntajeBruto }
  calcularBasalYTecho: function (itemsAplicados) {
    // Ordenar por número de ítem para poder detectar 3 consecutivos
    const ordenados = [...itemsAplicados].sort((a, b) => a.numeroItem - b.numeroItem);

    // Buscar nivel basal: primeros 3 ítems consecutivos (en número de ítem)
    // con puntaje 2
    let nivelBasal = null;
    for (let i = 0; i <= ordenados.length - 3; i++) {
      const tresConsecutivos =
        ordenados[i + 1].numeroItem === ordenados[i].numeroItem + 1 &&
        ordenados[i + 2].numeroItem === ordenados[i + 1].numeroItem + 1;
      const todosEnDos =
        ordenados[i].puntaje === 2 && ordenados[i + 1].puntaje === 2 && ordenados[i + 2].puntaje === 2;
      if (tresConsecutivos && todosEnDos) {
        nivelBasal = ordenados[i].numeroItem; // primer ítem del trío basal
        break;
      }
    }

    // Buscar nivel techo: primeros 3 ítems consecutivos con puntaje 0,
    // buscando DESPUÉS del nivel basal
    let nivelTecho = null;
    if (nivelBasal !== null) {
      for (let i = 0; i <= ordenados.length - 3; i++) {
        if (ordenados[i].numeroItem < nivelBasal) continue;
        const tresConsecutivos =
          ordenados[i + 1].numeroItem === ordenados[i].numeroItem + 1 &&
          ordenados[i + 2].numeroItem === ordenados[i + 1].numeroItem + 1;
        const todosEnCero =
          ordenados[i].puntaje === 0 && ordenados[i + 1].puntaje === 0 && ordenados[i + 2].puntaje === 0;
        if (tresConsecutivos && todosEnCero) {
          nivelTecho = ordenados[i].numeroItem; // primer ítem del trío techo
          break;
        }
      }
    }

    if (nivelBasal === null) {
      return {
        nivelBasal: null,
        nivelTecho: null,
        puntajeBruto: null,
        estado: "No se ha establecido un nivel basal — continuar retrocediendo en los ítems según la regla de excepción"
      };
    }

    // Puntaje Bruto = (ítems asumidos en 2, antes del basal) + (suma real de
    // los ítems aplicados entre el basal y el último ítem del trío techo,
    // inclusive) + (ítems posteriores al techo, asumidos en 0, no suman nada)
    const itemsAsumidosAntesBasal = (nivelBasal - 1) * 2;

    const limiteSuperior = nivelTecho !== null ? nivelTecho + 2 : Infinity;
    const sumaAplicadosReales = ordenados
      .filter((item) => item.numeroItem >= nivelBasal && item.numeroItem <= limiteSuperior)
      .reduce((acc, item) => acc + item.puntaje, 0);

    const puntajeBruto = itemsAsumidosAntesBasal + sumaAplicadosReales;

    return {
      nivelBasal,
      nivelTecho,
      puntajeBruto,
      estado: nivelTecho !== null ? "Basal y techo establecidos — subtest completo" : "Basal establecido, aplicar ítems ascendentes hasta lograr 3 ceros consecutivos"
    };
  },

  // ============================================================
  // CLASIFICACIÓN CLÍNICA DE LOS COCIENTES (CMG, CMF, CMT)
  // Estos cortes SÍ vienen dados explícitamente en el documento —
  // se aplican sobre el cociente ya calculado con las tablas de
  // baremación oficiales (no incluidas aquí, ver nota superior)
  // ============================================================
  clasificarCociente: function (cociente) {
    if (cociente > 130) return "Desarrollo Muy Superior";
    if (cociente >= 121) return "Desarrollo Superior";
    if (cociente >= 111) return "Desarrollo Sobre el Promedio";
    if (cociente >= 90) return "Desarrollo Normal / Promedio";
    if (cociente >= 80) return "Desarrollo Bajo el Promedio";
    if (cociente >= 70) return "Retraso Motor Moderado (Déficit Leve/Límite): iniciar plan de TO/fisioterapia enfocado en ítems fallidos entre basal y techo";
    return "Retraso Psicomotor Severo: alerta clínica prioritaria, alto riesgo de trastornos del neurodesarrollo o parálisis cerebral; derivación a neuropediatría inmediata"; // <70
  },

  // ---------- Placeholder explícito para las tablas de baremación ----------
  // Debe completarse con las tablas oficiales del manual PDMS-2 (Folio &
  // Fewell) para convertir Puntaje Bruto -> Puntuación Estándar (1-20) y
  // para obtener la Edad Motora Equivalente. Sin esas tablas, el sistema
  // NO puede calcular CMG/CMF/CMT de forma válida — solo puede calcular
  // el Puntaje Bruto por subtest (ver calcularBasalYTecho).
  convertirAPuntuacionEstandar: function (puntajeBruto, subtestId, edadMeses) {
    throw new Error(
      "No implementado: requiere las tablas de baremación oficiales del manual PDMS-2 " +
      "(no incluidas en el documento fuente). No se debe fabricar esta conversión."
    );
  }
};

if (typeof escalasTerapiaOcupacional !== "undefined") {
  escalasTerapiaOcupacional.push(escalaPDMS2);
}

// ---------------------------------------------------------------
// Archivo original: pedi.js
// ---------------------------------------------------------------
/* ============================================================
   PEDI — Pediatric Evaluation of Disability Inventory
   Especialidad: Terapia Ocupacional (Neurorrehabilitación infantil)
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   Estructura tripartita: Parte I Habilidades Funcionales (197
   ítems binarios), Parte II Asistencia del Cuidador (20 ítems,
   escala 0-5), Parte III Modificaciones del Entorno (20 ítems,
   categórico N/C/R/E).

   ⚠️ ALCANCE DE ESTA IMPLEMENTACIÓN — LEER ANTES DE USAR:
   - El documento da los NOMBRES de categorías dentro de cada
     dominio de la Parte I (ej. AC1 Texturas de comida, AC2 Uso de
     utensilios...) pero no el texto de los 197 ítems individuales
     ni cuántos ítems tiene cada categoría — solo el total por
     dominio (73/59/65). Se estructuran las categorías como
     agrupadores de referencia, no como ítems evaluables 1 a 1.
   - Para la Parte II, el documento da el máximo por dominio
     (40/35/25) pero no el desglose exacto de cuáles de los 20
     ítems pertenecen a cada dominio. Se INFIRIÓ la cantidad de
     ítems por dominio a partir del máximo declarado y la escala
     0-5 (40/5=8, 35/5=7, 25/5=5, total 20 — coincide con el
     documento). Esto es una inferencia matemática, no un dato
     explícito de la fuente — marcarlo si se necesita el desglose
     oficial exacto.
   - La Parte III (Modificaciones) no trae una fórmula de puntaje
     numérico en el documento — solo la escala categórica. No se
     fabricó un total numérico para esta parte.
   - Las conversiones a Puntuación Estándar Normativa (media 50,
     DE 10) y Puntuación de Escalamiento (0-100) requieren las
     tablas oficiales del manual PEDI por edad — no incluidas en
     el documento, no se deben fabricar.
   ============================================================ */

const escalaPEDI = {
  id: "pedi",
  nombre: "PEDI (Pediatric Evaluation of Disability Inventory)",
  especialidad: "terapia-ocupacional",
  descripcion: "Evalúa capacidad funcional y desempeño real de niños de 6 meses a 7.5 años con discapacidades físicas, neurológicas o del desarrollo, midiendo también la asistencia del cuidador y las modificaciones ambientales requeridas.",

  // ---------- Parte I: Habilidades Funcionales (197 ítems binarios) ----------
  parteI_Habilidades: {
    autocuidado: {
      nombre: "Autocuidado (Self-Care)",
      totalItems: 73,
      categorias: [
        "Texturas de comida", "Uso de utensilios", "Uso de taza/vaso", "Higiene bucal",
        "Cepillado de cabello", "Lavado de manos", "Lavado de cuerpo", "Vestido superior",
        "Vestido inferior", "Cuidado perineal", "Tareas de inodoro"
      ]
    },
    movilidad: {
      nombre: "Movilidad (Mobility)",
      totalItems: 59,
      categorias: [
        "Transferencias en cama", "Transferencias en silla/silla de ruedas", "Transferencias en inodoro",
        "Transferencias en ducha/tina", "Locomoción en interiores", "Locomoción en exteriores",
        "Subir y bajar escaleras", "Transporte de objetos"
      ]
    },
    funcionSocial: {
      nombre: "Función Social (Social Function)",
      totalItems: 65,
      categorias: [
        "Comprensión del lenguaje", "Expresión del lenguaje", "Habilidades de juego con objetos",
        "Interacción social con pares", "Conciencia de seguridad", "Tareas domésticas básicas",
        "Autoconcepto y resolución de problemas sociales"
      ]
    }
  },

  // ---------- Parte II: Asistencia del Cuidador (20 ítems, escala 0-5) ----------
  parteII_Asistencia: {
    autocuidado: { nombre: "Autocuidado", totalItemsInferido: 8, maximo: 40 },
    movilidad: { nombre: "Movilidad", totalItemsInferido: 7, maximo: 35 },
    social: { nombre: "Función Social", totalItemsInferido: 5, maximo: 25 }
  },

  opcionesAsistencia: [
    { valor: 5, label: "5 - Independencia completa: realiza el 100% de la actividad sin supervisión ni ayuda" },
    { valor: 4, label: "4 - Supervisión / Preparación / Pistas verbales: el adulto vigila o da instrucciones, sin contacto físico" },
    { valor: 3, label: "3 - Asistencia mínima: el niño realiza el 75% o más del esfuerzo físico" },
    { valor: 2, label: "2 - Asistencia moderada: el niño realiza entre 50% y 74% del esfuerzo físico" },
    { valor: 1, label: "1 - Asistencia máxima: el niño realiza entre 25% y 49% del esfuerzo; el adulto hace casi todo" },
    { valor: 0, label: "0 - Asistencia total: el niño realiza menos del 25%, o requiere ayuda de dos personas" }
  ],

  // ---------- Parte III: Modificaciones del Entorno (20 ítems, categórico) ----------
  parteIII_Modificaciones: {
    totalItems: 20,
    opciones: [
      { valor: "N", label: "N - Ninguna modificación: entorno y herramientas estándar" },
      { valor: "C", label: "C - Centrada en el niño / habitual: objetos pequeños adaptados (cubiertos con mango grueso, velcro, calzado sin cordones)" },
      { valor: "R", label: "R - De rehabilitación: equipamiento médico o de soporte (silla de ruedas, andador, férulas, alza de inodoro, rampas)" },
      { valor: "E", label: "E - Extensiva: cambios estructurales masivos en la arquitectura del hogar o adaptaciones tecnológicas de alta complejidad" }
    ]
  },

  // ---------- Cálculo de Parte I: suma binaria por dominio ----------
  calcularHabilidades: function (respuestasBinarias) {
    // respuestasBinarias: { autocuidado: [1,0,1,...], movilidad: [...], funcionSocial: [...] }
    const resultado = {};
    Object.entries(this.parteI_Habilidades).forEach(([dominioId, dominio]) => {
      const valores = respuestasBinarias[dominioId] || [];
      const suma = valores.reduce((acc, v) => acc + (v === 1 ? 1 : 0), 0);
      resultado[dominioId] = { puntajeBruto: suma, maximo: dominio.totalItems };
    });
    return resultado;
  },

  // ---------- Cálculo de Parte II: suma 0-5 por dominio ----------
  calcularAsistencia: function (respuestasAsistencia) {
    // respuestasAsistencia: { autocuidado: [5,4,3,...], movilidad: [...], social: [...] }
    const resultado = {};
    Object.entries(this.parteII_Asistencia).forEach(([dominioId, dominio]) => {
      const valores = respuestasAsistencia[dominioId] || [];
      const suma = valores.reduce((acc, v) => acc + (typeof v === "number" ? v : 0), 0);
      resultado[dominioId] = { puntajeBruto: suma, maximo: dominio.maximo };
    });
    return resultado;
  },

  // ---------- Conversiones psicométricas: requieren tablas oficiales ----------
  convertirAPuntuacionEstandarNormativa: function (puntajeBruto, dominioId, edadMeses) {
    throw new Error(
      "No implementado: la Puntuación Estándar Normativa (media 50, DE 10) requiere las tablas " +
      "oficiales del manual PEDI indexadas por edad cronológica exacta. No se debe fabricar."
    );
  },

  convertirAPuntuacionEscalamiento: function (puntajeBruto, dominioId) {
    throw new Error(
      "No implementado: la Puntuación de Escalamiento Continuo (0-100) requiere las tablas " +
      "oficiales del manual PEDI. No se debe fabricar."
    );
  },

  // ---------- Clasificación clínica final (estos cortes SÍ vienen dados) ----------
  // Se aplica sobre la Puntuación Normativa YA CALCULADA (media 50, DE 10)
  clasificar: function (puntuacionNormativa) {
    if (puntuacionNormativa > 60) return "Desempeño funcional superior para su grupo de edad";
    if (puntuacionNormativa >= 40) return "Desempeño Funcional Normal / Dentro del Promedio: alineado con las expectativas cronológicas";
    if (puntuacionNormativa >= 30) return "Retraso Funcional Leve a Moderado: limitaciones en destrezas específicas; entrenar tareas con Asistencia Mínima (Nivel 3)";
    return "Retraso Funcional Severo / Alta Carga de Discapacidad: >2 DE bajo el promedio; alerta de alta prioridad; diseñar Modificaciones de Rehabilitación (R) o Extensivas (E) de inmediato"; // <30
  }
};

if (typeof escalasTerapiaOcupacional !== "undefined") {
  escalasTerapiaOcupacional.push(escalaPEDI);
}

// ---------------------------------------------------------------
// Archivo original: ree_ophi2.js
// ---------------------------------------------------------------
/* ============================================================
   REE / OPHI-II — Escala del Entorno Ocupacional
   Especialidad: Terapia Ocupacional
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   12 ítems en 3 grupos (Ambiente Físico, Ambiente Social, Demandas
   Ocupacionales), escala 1-4. Máximo 48. Indispensable para
   telemedicina y visitas domiciliarias.
   ============================================================ */

function opcionesREE() {
  return [
    { valor: 4, label: "4 - Impacto fuertemente facilitador: el ambiente potencia la independencia" },
    { valor: 3, label: "3 - Impacto atenuado o neutro: el ambiente permite la tarea sin intervenir" },
    { valor: 2, label: "2 - Impacto inhibidor moderado: el ambiente presenta barreras corregibles" },
    { valor: 1, label: "1 - Barrera severa/Restricción: el entorno bloquea por completo el desempeño" }
  ];
}

const escalaREE = {
  id: "ree-ophi2",
  nombre: "REE / OPHI-II (Escala del Entorno Ocupacional)",
  especialidad: "terapia-ocupacional",
  descripcion: "Evalúa el impacto del ambiente físico y social sobre el desempeño del usuario. Indispensable para telemedicina y visitas domiciliarias.",
  puntajeMaximo: 48,

  grupos: [
    {
      id: "ambiente-fisico",
      nombre: "Ambiente Físico",
      items: [
        { id: "e1", texto: "Espacio físico (accesibilidad)", opciones: opcionesREE() },
        { id: "e2", texto: "Seguridad del entorno", opciones: opcionesREE() },
        { id: "e3", texto: "Estímulos visuales/auditivos", opciones: opcionesREE() },
        { id: "e4", texto: "Disponibilidad de objetos/tecnología asistiva", opciones: opcionesREE() }
      ]
    },
    {
      id: "ambiente-social",
      nombre: "Ambiente Social",
      items: [
        { id: "e5", texto: "Apoyo emocional de la familia/cuidadores", opciones: opcionesREE() },
        { id: "e6", texto: "Expectativas del grupo social", opciones: opcionesREE() },
        { id: "e7", texto: "Red comunitaria o institucional", opciones: opcionesREE() },
        { id: "e8", texto: "Dinámica de comunicación en el hogar", opciones: opcionesREE() }
      ]
    },
    {
      id: "demandas-ocupacionales",
      nombre: "Demandas Ocupacionales",
      items: [
        { id: "e9", texto: "Exigencias de las tareas diarias", opciones: opcionesREE() },
        { id: "e10", texto: "Flexibilidad de los horarios", opciones: opcionesREE() },
        { id: "e11", texto: "Recursos económicos del entorno", opciones: opcionesREE() },
        { id: "e12", texto: "Barreras culturales o actitudinales", opciones: opcionesREE() }
      ]
    }
  ],

  // ---------- Clasificación ----------
  clasificar: function (total) {
    if (total >= 37) return "Entorno Altamente Facilitador";
    if (total >= 25) return "Entorno con Barreras Modificables";
    return "Entorno Restrictivo / Alerta de Inaccesibilidad"; // 12-24
  },

  // ---------- Función de cálculo ----------
  calcularPuntaje: function (respuestas) {
    let total = 0;
    const subtotalesPorGrupo = {};

    this.grupos.forEach((grupo) => {
      let subtotal = 0;
      grupo.items.forEach((item) => {
        const valor = respuestas[item.id];
        if (typeof valor === "number") subtotal += valor;
      });
      subtotalesPorGrupo[grupo.id] = subtotal;
      total += subtotal;
    });

    return {
      total,
      puntajeMaximo: this.puntajeMaximo,
      clasificacion: this.clasificar(total),
      subtotalesPorGrupo
    };
  }
};

if (typeof escalasTerapiaOcupacional !== "undefined") {
  escalasTerapiaOcupacional.push(escalaREE);
}

// ---------------------------------------------------------------
// Archivo original: role_checklist.js
// ---------------------------------------------------------------
/* ============================================================
   ROLE CHECKLIST (Checklist de Roles)
   Especialidad: Terapia Ocupacional
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   10 roles, cada uno con 2 partes:
   - Parte I: Distribución Temporal (pasado/presente/futuro — pueden
     marcarse varias casillas a la vez, no es excluyente)
   - Parte II: Grado de Valor (1-3, una sola selección)
   Calcula: Índice de Pérdida Ocupacional (IPO), Índice de Deseo
   Futuro (IDF), Puntaje Bruto de Valoración Total, y un perfil
   funcional cualitativo (1/2/3).
   ============================================================ */

const escalaRoleChecklist = {
  id: "role-checklist",
  nombre: "Role Checklist (Checklist de Roles)",
  especialidad: "terapia-ocupacional",
  descripcion: "Evalúa la participación temporal (pasado/presente/futuro) y el valor personal asignado a 10 roles ocupacionales clave.",

  roles: [
    { id: "ro1", texto: "Estudiante: asistir a la escuela, universidad o cursos de formación" },
    { id: "ro2", texto: "Trabajador: tener un empleo remunerado (tiempo completo o parcial)" },
    { id: "ro3", texto: "Voluntario: donar tiempo a servicios comunitarios o instituciones sin fines de lucro" },
    { id: "ro4", texto: "Cuidador: responsabilidad directa de criar niños o asistir a familiares enfermos/ancianos" },
    { id: "ro5", texto: "Proveedor de Hogar: responsabilidad principal de mantener limpia la casa, cocinar o gestionar el hogar" },
    { id: "ro6", texto: "Amigo: participar en actividades sociales interpersonales con pares o conocidos" },
    { id: "ro7", texto: "Miembro de Familia: cumplir responsabilidades y dinámicas como hijo, padre, hermano o pareja" },
    { id: "ro8", texto: "Aficionado / Practicante de Ocio: dedicar tiempo constante a pasatiempos, deportes o artes" },
    { id: "ro9", texto: "Miembro de Organización: participar activamente en clubes, iglesias, sindicatos o comités vecinales" },
    { id: "ro10", texto: "Ciudadano: involucrarse en deberes cívicos o políticos de la comunidad (votar, reuniones locales)" }
  ],

  opcionesValor: [
    { valor: 1, label: "1 - Nada valioso: no tiene importancia afectiva o práctica" },
    { valor: 2, label: "2 - Valioso: es importante para su bienestar" },
    { valor: 3, label: "3 - Muy valioso: es una prioridad absoluta para su identidad" }
  ],

  rangoValoracionTotal: { minimo: 10, maximo: 30 },

  // ---------- Función de cálculo consolidada ----------
  // respuestas: { ro1: { pasado: true, presente: false, futuro: false, valor: 3 }, ... }
  calcularResultado: function (respuestas) {
    let totalValor = 0;
    let itemsRespondidos = 0;

    const rolesConDetalle = [];

    this.roles.forEach((rol) => {
      const r = respuestas[rol.id];
      if (r && typeof r.valor === "number") {
        totalValor += r.valor;
        itemsRespondidos++;
        rolesConDetalle.push({
          id: rol.id,
          texto: rol.texto,
          pasado: !!r.pasado,
          presente: !!r.presente,
          futuro: !!r.futuro,
          valor: r.valor
        });
      }
    });

    // A. Índice de Pérdida Ocupacional (IPO): valioso (>=2), solo pasado (no presente, no futuro)
    const indicePerdidaOcupacional = rolesConDetalle.filter(
      (r) => r.valor >= 2 && r.pasado && !r.presente && !r.futuro
    );

    // B. Índice de Deseo Futuro (IDF): futuro=true y valor=3 (muy valioso)
    const indiceDeseoFuturo = rolesConDetalle.filter(
      (r) => r.futuro && r.valor === 3
    );

    // Perfil funcional cualitativo (heurística basada en los patrones descritos,
    // ya que el documento no da cortes numéricos exactos)
    const muyValiososPasadoYPresente = rolesConDetalle.filter(
      (r) => r.valor === 3 && r.pasado && r.presente
    ).length;
    const muyValiososSoloPasado = rolesConDetalle.filter(
      (r) => r.valor === 3 && r.pasado && !r.presente
    ).length;
    const rolesPresentes = rolesConDetalle.filter((r) => r.presente).length;
    const concentracionFuturo = indiceDeseoFuturo.length;

    let perfil = null;
    if (itemsRespondidos === this.roles.length) {
      if (muyValiososPasadoYPresente >= 2 && rolesPresentes >= 4) {
        perfil = {
          nombre: "Perfil 1: Continuidad Ocupacional Eficiente",
          descripcion: "Alta coincidencia entre roles Pasados y Presentes que son Muy Valiosos. Conserva sus redes de apoyo y su identidad a pesar de la condición de salud. Pronóstico favorable."
        };
      } else if (muyValiososSoloPasado >= 2 && rolesPresentes <= 2) {
        perfil = {
          nombre: "Perfil 2: Ruptura Ocupacional Severa",
          descripcion: "Muchos roles Pasados con valor alto, pero cero o muy pocos roles Presentes. Alerta de aislamiento social y frustración existencial. Priorizar que el paciente retome al menos 2 roles básicos de inmediato."
        };
      } else if (rolesPresentes <= 2 && concentracionFuturo >= 3) {
        perfil = {
          nombre: "Perfil 3: Identidad Ocupacional en Construcción o Transición",
          descripcion: "Bajos roles en pasado/presente, pero alta concentración de intenciones en el Futuro. Común en adolescentes con discapacidad o adultos jóvenes en reconversión laboral. Sugerir exploración de intereses y entrenamiento pre-laboral."
        };
      }
      // Si no encaja claramente en ninguno de los 3 patrones descritos, se deja
      // sin perfil asignado (null) en vez de forzar una clasificación dudosa.
    }

    return {
      totalValor,
      rangoValoracionTotal: this.rangoValoracionTotal,
      itemsRespondidos,
      indicePerdidaOcupacional,
      indiceDeseoFuturo,
      perfil,
      rolesConDetalle
    };
  }
};

if (typeof escalasTerapiaOcupacional !== "undefined") {
  escalasTerapiaOcupacional.push(escalaRoleChecklist);
}

// ---------------------------------------------------------------
// Archivo original: sensory_profile_2.js
// ---------------------------------------------------------------
/* ============================================================
   SENSORY PROFILE 2 (Perfil Sensorial 2) — Winnie Dunn, 2014
   Especialidad: Terapia Ocupacional / Neuropediatría
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   Versión: Perfil Sensorial 2 del Niño (3 a 14 años), 86 ítems.
   Escala 1-5 (más 0 = "No aplica / en blanco").

   ⚠️ ALCANCE DE ESTA IMPLEMENTACIÓN — LEER ANTES DE USAR:
   El documento fuente explica el CONCEPTO de los 4 Cuadrantes de
   Winnie Dunn (Búsqueda, Evitación, Sensibilidad, Registro Bajo) y
   confirma que cada uno de los 86 ítems pertenece simultáneamente a
   un sistema sensorial Y a un cuadrante — pero NO incluye la tabla
   de asignación item-por-item de cuál ítem específico pertenece a
   cuál cuadrante (esa asignación es contenido propietario del
   manual oficial de Winnie Dunn/Pearson). Tampoco incluye las
   tablas de percentiles normativos por edad necesarias para ubicar
   un puntaje bruto en los 5 Rangos de Distribución Estándar.

   Esta implementación SÍ incluye completo y funcional:
     - Los 9 apartados (6 sistemas sensoriales + 3 secciones
       conductuales) con sus 86 ítems y la escala de respuesta
     - El cálculo del puntaje bruto por sistema/sección
     - La regla de datos perdidos (anular el apartado si falta >10%)
     - Los 5 Rangos de Distribución Estándar (los cortes de
       percentil SÍ vienen dados) — aplicables una vez que se tenga
       el percentil real desde las tablas oficiales
   Y deja explícito con un error el cálculo de cuadrantes, en vez de
   fabricar una asignación de ítems inventada.
   ============================================================ */

function opcionesFrecuencia() {
  return [
    { valor: 5, label: "5 - Casi siempre (≥90% de las veces)" },
    { valor: 4, label: "4 - Frecuentemente (≈75% de las veces)" },
    { valor: 3, label: "3 - A veces (≈50% de las veces)" },
    { valor: 2, label: "2 - Ocasionalmente (≈25% de las veces)" },
    { valor: 1, label: "1 - Casi nunca (≤10% de las veces)" },
    { valor: 0, label: "0 - No aplica / en blanco" }
  ];
}

const escalaSensoryProfile2 = {
  id: "sensory-profile-2",
  nombre: "Sensory Profile 2 (Perfil Sensorial 2 del Niño, 3-14 años)",
  especialidad: "terapia-ocupacional",
  descripcion: "Evalúa el procesamiento sensorial y su impacto en la participación diaria, mediante cuestionario a cuidadores/profesores. Clasifica al niño en 4 patrones sensoriales según umbral neurológico y estrategia conductual.",

  seccionesSensoriales: [
    { id: "auditivo", nombre: "SS1. Auditivo", totalItems: 8, descripcion: "Respuestas a estímulos sonoros, ruidos del entorno y direccionalidad de la voz" },
    { id: "visual", nombre: "SS2. Visual", totalItems: 7, descripcion: "Reacciones a luces, colores, movimientos visuales ajenos y organización gráfica" },
    { id: "tactil", nombre: "SS3. Táctil", totalItems: 12, descripcion: "Respuestas al contacto con texturas, ropa, comida, suciedad en la piel y contacto físico" },
    { id: "movimiento", nombre: "SS4. Movimiento / Vestibular", totalItems: 10, descripcion: "Reacciones al balanceo, giros, cambios de gravedad, alturas y caídas simuladas" },
    { id: "posicion-corporal", nombre: "SS5. Posición Corporal / Propioceptivo", totalItems: 10, descripcion: "Coordinación muscular, tono muscular, conciencia corporal y uso de la fuerza física" },
    { id: "oral", nombre: "SS6. Oral", totalItems: 10, descripcion: "Respuestas a texturas de comida, sabores intensos, olores e inmersión de objetos en la boca" }
  ],

  seccionesConductuales: [
    { id: "conducta", nombre: "SC1. Conducta", totalItems: 9, descripcion: "Respuestas de frustración, auto-regulación o rabietas ligadas al entorno" },
    { id: "socioemocional", nombre: "SC2. Socioemocional", totalItems: 11, descripcion: "Interacción con pares, apego, ansiedad ante los cambios y expresión afectiva" },
    { id: "atencional", nombre: "SC3. Atención / Concentración", totalItems: 9, descripcion: "Habilidad para focalizarse en una tarea en presencia de distractores del entorno" }
  ],

  opciones: opcionesFrecuencia(),
  totalItemsTest: 86, // 57 sensoriales + 29 conductuales, coincide con el documento fuente

  // ---------- Los 4 Cuadrantes de Winnie Dunn (marco conceptual) ----------
  cuadrantes: {
    busqueda: { nombre: "Búsqueda Sensorial (Seeking)", umbral: "Alto", estrategia: "Activa", comportamiento: "Busca intensamente sensaciones (toca todo, salta sin parar, le encantan los ruidos fuertes)" },
    evitacion: { nombre: "Evitación Sensorial (Avoiding)", umbral: "Bajo", estrategia: "Activa", comportamiento: "Se protege activamente del estímulo molesto (se tapa los oídos, evita telas, rechaza comidas)" },
    sensibilidad: { nombre: "Sensibilidad Sensorial (Sensitivity)", umbral: "Bajo", estrategia: "Pasiva", comportamiento: "Detecta estímulos imperceptibles para otros y se abruma fácilmente, sin huir de inmediato" },
    registroBajo: { nombre: "Registro Bajo (Registration)", umbral: "Alto", estrategia: "Pasiva", comportamiento: "Parece no notar los estímulos del entorno (no responde a su nombre, no nota si se ensucia o golpea)" }
  },

  // ---------- Regla de datos perdidos: anular el apartado si falta >10% ----------
  calcularPuntajeSeccion: function (respuestas, seccion) {
    // Se requiere la lista de ids de ítems de la sección; como el
    // documento no da el texto individual de los 86 ítems (solo la
    // cantidad por apartado), este método recibe directamente el
    // array de valores de respuesta de esa sección.
    const valores = respuestas; // array de números (o null/undefined si en blanco)
    const totalItems = seccion.totalItems;
    const respondidos = valores.filter((v) => typeof v === "number" && v > 0);
    const enBlanco = totalItems - respondidos.length;
    const porcentajeEnBlanco = enBlanco / totalItems;

    if (porcentajeEnBlanco > 0.10) {
      return {
        seccion: seccion.id,
        anulado: true,
        motivo: `Falta ${Math.round(porcentajeEnBlanco * 100)}% de los datos (>10%) — apartado anulado según la regla de datos perdidos`,
        puntajeBruto: null
      };
    }

    const puntajeBruto = respondidos.reduce((acc, v) => acc + v, 0);
    return {
      seccion: seccion.id,
      anulado: false,
      itemsRespondidos: respondidos.length,
      totalItems,
      puntajeBruto
    };
  },

  // ---------- Cálculo de cuadrantes: NO fabricado ----------
  calcularCuadrantes: function (respuestas) {
    throw new Error(
      "No implementado: calcular los 4 cuadrantes de Winnie Dunn requiere la tabla oficial de " +
      "asignación ítem-por-ítem (cuál de los 86 ítems pertenece a Búsqueda/Evitación/Sensibilidad/" +
      "Registro Bajo), que es contenido propietario del manual y no viene en el documento fuente. " +
      "No se debe fabricar esta asignación."
    );
  },

  // ---------- Los 5 Rangos de Distribución Estándar (cortes SÍ documentados) ----------
  // Se aplica sobre un percentil YA CALCULADO con las tablas normativas
  // oficiales por edad (no incluidas aquí) — esta función solo interpreta
  // el percentil, no lo calcula desde el puntaje bruto.
  clasificarPorPercentil: function (percentil) {
    if (percentil < 2) {
      return { rango: 1, nombre: "Mucho menos que los demás", detalle: "Más de 2 DE por debajo de la media (Percentil < 2)" };
    }
    if (percentil <= 15) {
      return { rango: 2, nombre: "Menos que los demás", detalle: "Entre 1 y 2 DE por debajo de la media (Percentil 2-15)" };
    }
    if (percentil <= 84) {
      return { rango: 3, nombre: "Como la mayoría", detalle: "Desempeño neurotípico, promedio normal esperado (Percentil 16-84)" };
    }
    if (percentil <= 98) {
      return {
        rango: 4,
        nombre: "Más que los demás",
        detalle: "Entre 1 y 2 DE por encima de la media (Percentil 85-98). Tendencia sensorial marcada que interfiere levemente en el día a día"
      };
    }
    return {
      rango: 5,
      nombre: "Mucho más que los demás",
      detalle: "Más de 2 DE por encima de la media (Percentil > 98). Alerta clínica de Alta Disfunción Sensorial — requiere intervención inmediata con enfoque de Integración Sensorial de Ayres (ASI)"
    };
  }
};

if (typeof escalasTerapiaOcupacional !== "undefined") {
  escalasTerapiaOcupacional.push(escalaSensoryProfile2);
}

// ---------------------------------------------------------------
// Archivo original: weefim.js
// ---------------------------------------------------------------
/* ============================================================
   WeeFIM — Functional Independence Measure for Children
   (Funcional Pediátrico)
   Especialidad: Terapia Ocupacional (Neurorrehabilitación infantil)
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   18 ítems en 3 dominios (Autocuidado 6, Movilidad/Esfínteres 7,
   Cognitivo 5), escala 1-7. Total: 18-126. Incluye cálculo del
   Cociente Funcional (CF) cruzando el puntaje con la edad.

   ⚠️ NOTA IMPORTANTE sobre la curva de referencia por edad: el
   documento fuente solo da 2 puntos de referencia concretos (3 años
   ≈ 70-80 pts, 5 años ≈ 100-110 pts) y el máximo teórico (7 años =
   126 pts), sin fórmula exacta para edades intermedias o fuera de
   ese rango. Se implementó interpolación lineal ÚNICAMENTE entre
   esos 3 puntos documentados (usando el punto medio de cada rango:
   3 años=75, 5 años=105, 7 años=126). Para edades fuera de 3-7 años,
   la función devuelve null en vez de inventar una extrapolación sin
   respaldo — ajustar si se cuenta con la curva de referencia oficial
   completa del WeeFIM.
   ============================================================ */

function opcionesWeeFIM() {
  return [
    { valor: 7, label: "7 - Independencia Completa: realiza la tarea de forma segura, sin modificaciones, en tiempo normal para su edad" },
    { valor: 6, label: "6 - Independencia Modificada: requiere dispositivo especial o más tiempo del habitual" },
    { valor: 5, label: "5 - Supervisión o Preparación: el adulto está cerca, da pistas verbales o prepara materiales, sin contacto físico" },
    { valor: 4, label: "4 - Asistencia de Contacto Mínimo: el niño realiza ≥75% del esfuerzo; el adulto solo da estabilidad táctil" },
    { valor: 3, label: "3 - Asistencia Moderada: el niño realiza entre 50% y 74% del esfuerzo físico" },
    { valor: 2, label: "2 - Asistencia Máxima: el niño realiza entre 25% y 49% del esfuerzo" },
    { valor: 1, label: "1 - Asistencia Total / Dependencia: el niño realiza menos del 25% del esfuerzo, o requiere dos adultos" }
  ];
}

const escalaWeeFIM = {
  id: "weefim",
  nombre: "WeeFIM (Funcional Pediátrico)",
  especialidad: "terapia-ocupacional",
  descripcion: "Mide la independencia funcional en niños, cruzando el puntaje obtenido con la edad cronológica para calcular un Cociente Funcional (CF).",

  itemsAutocuidado: [
    { id: "w1", texto: "Alimentación: llevar la comida a la boca, masticar y tragar", opciones: opcionesWeeFIM() },
    { id: "w2", texto: "Aseo Personal: lavarse las manos, la cara, peinarse y cepillarse los dientes de forma segura", opciones: opcionesWeeFIM() },
    { id: "w3", texto: "Baño: lavar y secar el cuerpo completo desde el cuello hacia abajo (excluye la espalda)", opciones: opcionesWeeFIM() },
    { id: "w4", texto: "Vestido Superior: colocarse y quitarse prendas de la cintura hacia arriba", opciones: opcionesWeeFIM() },
    { id: "w5", texto: "Vestido Inferior: colocarse y quitarse prendas de la cintura hacia abajo", opciones: opcionesWeeFIM() },
    { id: "w6", texto: "Higiene Perineal: limpieza personal y manejo de la ropa después de orinar o defecar", opciones: opcionesWeeFIM() }
  ],

  itemsMovilidad: [
    { id: "w7", texto: "Control de Vejiga: frecuencia de accidentes urinarios y necesidad de dispositivos", opciones: opcionesWeeFIM() },
    { id: "w8", texto: "Control de Intestino: frecuencia de accidentes intestinales o control de deposición", opciones: opcionesWeeFIM() },
    { id: "w9", texto: "Transferencia Cama/Silla/Silla de Ruedas: aproximarse, sentarse y levantarse", opciones: opcionesWeeFIM() },
    { id: "w10", texto: "Transferencia Inodoro: sentarse y levantarse del inodoro de forma segura", opciones: opcionesWeeFIM() },
    { id: "w11", texto: "Transferencia Ducha/Bañera: entrar y salir del espacio de baño de forma autónoma", opciones: opcionesWeeFIM() },
    { id: "w12", texto: "Locomoción (Marcha o Silla de Ruedas): distancia mínima según la edad", opciones: opcionesWeeFIM() },
    { id: "w13", texto: "Escaleras: subir y bajar un tramo (12-14 peldaños) de forma segura", opciones: opcionesWeeFIM() }
  ],

  itemsCognitivo: [
    { id: "w14", texto: "Comprensión: entendimiento de comunicación auditiva o visual acorde a su edad", opciones: opcionesWeeFIM() },
    { id: "w15", texto: "Expresión: capacidad para comunicar necesidades y deseos mediante habla o gestos claros", opciones: opcionesWeeFIM() },
    { id: "w16", texto: "Interacción Social: cómo se relaciona con otros niños, familiares y terapeutas", opciones: opcionesWeeFIM() },
    { id: "w17", texto: "Resolución de Problemas: capacidad para resolver inconvenientes cotidianos", opciones: opcionesWeeFIM() },
    { id: "w18", texto: "Memoria: reconocimiento de personas familiares, rutinas diarias, retención de instrucciones simples", opciones: opcionesWeeFIM() }
  ],

  rangos: {
    autocuidado: { minimo: 6, maximo: 42 },
    movilidad: { minimo: 7, maximo: 49 },
    motor: { minimo: 13, maximo: 91 },
    cognitivo: { minimo: 5, maximo: 35 },
    total: { minimo: 18, maximo: 126 }
  },

  // Puntos de referencia documentados para la curva de desarrollo (ver nota arriba)
  _curvaReferenciaEdad: [
    { edad: 3, puntajeEsperado: 75 },   // punto medio de 70-80
    { edad: 5, puntajeEsperado: 105 },  // punto medio de 100-110
    { edad: 7, puntajeEsperado: 126 }   // máximo teórico documentado
  ],

  // ---------- Interpolación lineal SOLO entre los puntos documentados ----------
  obtenerPuntajeEsperadoPorEdad: function (edadAnios) {
    const curva = this._curvaReferenciaEdad;
    if (edadAnios < curva[0].edad || edadAnios > curva[curva.length - 1].edad) {
      return null; // fuera del rango documentado — no se extrapola sin respaldo
    }
    for (let i = 0; i < curva.length - 1; i++) {
      const p1 = curva[i];
      const p2 = curva[i + 1];
      if (edadAnios >= p1.edad && edadAnios <= p2.edad) {
        const proporcion = (edadAnios - p1.edad) / (p2.edad - p1.edad);
        return Math.round(p1.puntajeEsperado + proporcion * (p2.puntajeEsperado - p1.puntajeEsperado));
      }
    }
    return null;
  },

  // ---------- Alertas según Cociente Funcional ----------
  clasificarCF: function (cf) {
    if (cf === null) return null;
    if (cf >= 90) return "Desempeño Funcional Normal para su grupo de edad";
    if (cf >= 70) return "Retraso Funcional Leve/Moderado: sugerir metas de Independencia Modificada (Nivel 6) con adaptaciones en el hogar";
    return "Retraso Funcional Severo / Alta Carga de Cuidados: requiere asistencia física continua (Niveles 1-3); priorizar capacitación ergonómica de cuidadores"; // <70%
  },

  // ---------- Función de cálculo ----------
  calcularPuntaje: function (respuestas, edadAnios) {
    const sumar = (items) => items.reduce((acc, item) => {
      const v = respuestas[item.id];
      return acc + (typeof v === "number" ? v : 0);
    }, 0);

    const subtotalAutocuidado = sumar(this.itemsAutocuidado);
    const subtotalMovilidad = sumar(this.itemsMovilidad);
    const subtotalMotor = subtotalAutocuidado + subtotalMovilidad;
    const subtotalCognitivo = sumar(this.itemsCognitivo);
    const total = subtotalMotor + subtotalCognitivo;

    const puntajeEsperado = typeof edadAnios === "number" ? this.obtenerPuntajeEsperadoPorEdad(edadAnios) : null;
    const cf = puntajeEsperado ? Math.round((total / puntajeEsperado) * 100) : null;

    return {
      subtotalAutocuidado,
      subtotalMovilidad,
      subtotalMotor,
      subtotalCognitivo,
      total,
      rangos: this.rangos,
      puntajeEsperadoPorEdad: puntajeEsperado,
      cocienteFuncional: cf,
      interpretacionCF: this.clasificarCF(cf)
    };
  }
};

if (typeof escalasTerapiaOcupacional !== "undefined") {
  escalasTerapiaOcupacional.push(escalaWeeFIM);
}
