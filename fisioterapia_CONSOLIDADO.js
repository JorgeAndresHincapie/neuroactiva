/* ============================================================
   BANCO DE ESCALAS — FISIOTERAPIA
   Generado para NeuroActiva — listo para pegar en pruebas.html
   ============================================================ */


// ---------------------------------------------------------------
// Archivo original: ashworth_modificada.js
// ---------------------------------------------------------------
/* ============================================================
   ESCALA DE ASHWORTH MODIFICADA (MAS)
   Especialidad: Fisioterapia
   ============================================================
   Evalúa espasticidad muscular mediante resistencia al
   estiramiento pasivo. Escala de 6 niveles (0, 1, 1+, 2, 3, 4) —
   ítem único por grupo muscular evaluado, aplicable a varios
   grupos musculares en la misma sesión.
   ============================================================ */

const escalaAshworth = {
  id: "ashworth-modificada",
  nombre: "Escala de Ashworth Modificada (MAS)",
  especialidad: "fisioterapia",
  descripcion: "Evalúa el grado de espasticidad muscular mediante la resistencia percibida al estiramiento pasivo de una articulación. Se aplica por grupo muscular (puede evaluarse varios en la misma sesión).",

  opciones: [
    { valor: 0, label: "0 - Sin aumento del tono muscular" },
    { valor: 1, label: "1 - Ligero aumento del tono, con detención mínima al final del arco de movimiento" },
    { valor: 1.5, label: "1+ - Ligero aumento del tono, con detención en menos de la mitad del arco de movimiento restante" },
    { valor: 2, label: "2 - Aumento más marcado del tono en la mayor parte del arco, pero la parte afectada se mueve fácilmente" },
    { valor: 3, label: "3 - Considerable aumento del tono; el movimiento pasivo es difícil" },
    { valor: 4, label: "4 - Parte afectada rígida en flexión o extensión (no se puede movilizar)" }
  ],

  gruposMuscularesComunes: [
    "Flexores de codo", "Extensores de codo", "Flexores de muñeca", "Extensores de muñeca",
    "Flexores de cadera", "Extensores de cadera", "Aductores de cadera",
    "Flexores de rodilla", "Extensores de rodilla", "Flexores plantares de tobillo (gastrocnemio/sóleo)"
  ],

  interpretarValor: function (valor) {
    const opcion = this.opciones.find((o) => o.valor === valor);
    return opcion ? opcion.label : null;
  },

  // ---------- Registro de evaluación (varios grupos musculares en una sesión) ----------
  // respuestas: { "flexores_codo_derecho": 1.5, "extensores_rodilla_izq": 2, ... }
  calcularPerfil: function (respuestas) {
    const perfil = {};
    Object.entries(respuestas).forEach(([grupo, valor]) => {
      if (typeof valor === "number") {
        perfil[grupo] = { valor, interpretacion: this.interpretarValor(valor) };
      }
    });
    return perfil;
  }
};

if (typeof escalasFisioterapia !== "undefined") {
  escalasFisioterapia.push(escalaAshworth);
}

// ---------------------------------------------------------------
// Archivo original: berg_balance_scale.js
// ---------------------------------------------------------------
/* ============================================================
   BERG BALANCE SCALE (BBS) — Escala de Equilibrio de Berg
   Especialidad: Fisioterapia
   ============================================================
   14 ítems, cada uno escala 0-4. Rango total: 0-56.
   Gold standard para evaluación de equilibrio funcional y
   predicción de riesgo de caídas.
   ============================================================ */

function opcionesBerg() {
  return [
    { valor: 0, label: "0 - Incapaz / requiere asistencia máxima" },
    { valor: 1, label: "1 - Necesita ayuda máxima para iniciar o completar" },
    { valor: 2, label: "2 - Necesita ayuda mínima a moderada / supervisión estrecha" },
    { valor: 3, label: "3 - Realiza la tarea con ligera dificultad o necesita supervisión mínima" },
    { valor: 4, label: "4 - Realiza la tarea de forma independiente y segura" }
  ];
}

const escalaBerg = {
  id: "berg-balance-scale",
  nombre: "Berg Balance Scale (Escala de Equilibrio de Berg)",
  especialidad: "fisioterapia",
  descripcion: "Gold standard para evaluar el equilibrio funcional y predecir el riesgo de caídas mediante 14 tareas funcionales.",
  puntajeMaximo: 56,

  items: [
    { id: "b1", numero: 1, texto: "Sentado a de pie", opciones: opcionesBerg() },
    { id: "b2", numero: 2, texto: "De pie sin apoyo", opciones: opcionesBerg() },
    { id: "b3", numero: 3, texto: "Sentado sin apoyo con los pies en el suelo", opciones: opcionesBerg() },
    { id: "b4", numero: 4, texto: "De pie a sentado", opciones: opcionesBerg() },
    { id: "b5", numero: 5, texto: "Transferencias", opciones: opcionesBerg() },
    { id: "b6", numero: 6, texto: "De pie con los ojos cerrados", opciones: opcionesBerg() },
    { id: "b7", numero: 7, texto: "De pie con los pies juntos", opciones: opcionesBerg() },
    { id: "b8", numero: 8, texto: "Alcance funcional hacia adelante con los brazos extendidos", opciones: opcionesBerg() },
    { id: "b9", numero: 9, texto: "Recoger un objeto del suelo desde posición de pie", opciones: opcionesBerg() },
    { id: "b10", numero: 10, texto: "Girarse para mirar hacia atrás por encima de los hombros", opciones: opcionesBerg() },
    { id: "b11", numero: 11, texto: "Girar 360 grados", opciones: opcionesBerg() },
    { id: "b12", numero: 12, texto: "Colocar alternativamente el pie en un escalón/taburete", opciones: opcionesBerg() },
    { id: "b13", numero: 13, texto: "De pie con un pie delante del otro (tándem)", opciones: opcionesBerg() },
    { id: "b14", numero: 14, texto: "De pie sobre una pierna", opciones: opcionesBerg() }
  ],

  clasificar: function (total) {
    if (total >= 41) return "Riesgo bajo de caídas — equilibrio funcional independiente";
    if (total >= 21) return "Riesgo moderado de caídas — requiere ayudas de marcha o supervisión";
    return "Riesgo alto de caídas — requiere silla de ruedas o asistencia significativa"; // 0-20
  },

  calcularPuntaje: function (respuestas) {
    const total = this.items.reduce((acc, it) => acc + (typeof respuestas[it.id] === "number" ? respuestas[it.id] : 0), 0);
    return { total, puntajeMaximo: this.puntajeMaximo, clasificacion: this.clasificar(total) };
  }
};

if (typeof escalasFisioterapia !== "undefined") {
  escalasFisioterapia.push(escalaBerg);
}

// ---------------------------------------------------------------
// Archivo original: braden.js
// ---------------------------------------------------------------
/* ============================================================
   ESCALA DE BRADEN — Riesgo de Úlceras por Presión
   Especialidad: Fisioterapia / Terapia Ocupacional
   ============================================================
   6 subescalas: 5 puntuadas 1-4, 1 (fricción/cizallamiento) 1-3.
   Rango total: 6-23. A MENOR puntaje, MAYOR riesgo (escala
   invertida respecto a la mayoría del banco).
   ============================================================ */

const escalaBraden = {
  id: "braden",
  nombre: "Escala de Braden (Riesgo de Úlceras por Presión)",
  especialidad: "fisioterapia",
  descripcion: "Evalúa el riesgo de desarrollar úlceras por presión según percepción sensorial, humedad, actividad, movilidad, nutrición y fricción/cizallamiento. A menor puntaje, mayor riesgo.",
  puntajeMinimo: 6,
  puntajeMaximo: 23,

  subescalas: [
    {
      id: "percepcion_sensorial",
      nombre: "Percepción Sensorial",
      descripcion: "Capacidad de responder de manera significativa a la molestia relacionada con la presión",
      opciones: [
        { valor: 1, label: "1 - Completamente limitada" },
        { valor: 2, label: "2 - Muy limitada" },
        { valor: 3, label: "3 - Ligeramente limitada" },
        { valor: 4, label: "4 - Sin limitaciones" }
      ]
    },
    {
      id: "humedad",
      nombre: "Humedad",
      descripcion: "Grado de exposición de la piel a la humedad",
      opciones: [
        { valor: 1, label: "1 - Constantemente húmeda" },
        { valor: 2, label: "2 - Muy húmeda" },
        { valor: 3, label: "3 - Ocasionalmente húmeda" },
        { valor: 4, label: "4 - Raramente húmeda" }
      ]
    },
    {
      id: "actividad",
      nombre: "Actividad",
      descripcion: "Grado de actividad física",
      opciones: [
        { valor: 1, label: "1 - Encamado" },
        { valor: 2, label: "2 - En silla" },
        { valor: 3, label: "3 - Deambula ocasionalmente" },
        { valor: 4, label: "4 - Deambula frecuentemente" }
      ]
    },
    {
      id: "movilidad",
      nombre: "Movilidad",
      descripcion: "Capacidad para cambiar y controlar la posición del cuerpo",
      opciones: [
        { valor: 1, label: "1 - Completamente inmóvil" },
        { valor: 2, label: "2 - Muy limitada" },
        { valor: 3, label: "3 - Ligeramente limitada" },
        { valor: 4, label: "4 - Sin limitaciones" }
      ]
    },
    {
      id: "nutricion",
      nombre: "Nutrición",
      descripcion: "Patrón usual de ingesta de alimentos",
      opciones: [
        { valor: 1, label: "1 - Muy pobre" },
        { valor: 2, label: "2 - Probablemente inadecuada" },
        { valor: 3, label: "3 - Adecuada" },
        { valor: 4, label: "4 - Excelente" }
      ]
    },
    {
      id: "friccion_cizallamiento",
      nombre: "Fricción y Cizallamiento",
      descripcion: "Fuerzas de fricción y cizallamiento durante el movimiento/reposicionamiento",
      opciones: [
        { valor: 1, label: "1 - Problema" },
        { valor: 2, label: "2 - Problema potencial" },
        { valor: 3, label: "3 - No existe problema aparente" }
      ]
    }
  ],

  // ---------- Clasificación de riesgo (a menor puntaje, mayor riesgo) ----------
  clasificar: function (total) {
    if (total <= 9) return "Riesgo muy alto";
    if (total <= 12) return "Riesgo alto";
    if (total <= 14) return "Riesgo moderado";
    if (total <= 18) return "Riesgo bajo";
    return "Sin riesgo significativo"; // 19-23
  },

  calcularPuntaje: function (respuestas) {
    let total = 0;
    const subtotales = {};
    this.subescalas.forEach((sub) => {
      const v = respuestas[sub.id];
      const val = typeof v === "number" ? v : 0;
      subtotales[sub.id] = val;
      total += val;
    });
    return { subtotales, total, puntajeMinimo: this.puntajeMinimo, puntajeMaximo: this.puntajeMaximo, clasificacion: this.clasificar(total) };
  }
};

if (typeof escalasFisioterapia !== "undefined") {
  escalasFisioterapia.push(escalaBraden);
}

// ---------------------------------------------------------------
// Archivo original: fma_le.js
// ---------------------------------------------------------------
/* ============================================================
   FMA-LE — Fugl-Meyer Assessment of Lower Extremity
   Especialidad: Fisioterapia
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   Estructura: cada ítem tiene id único, texto, sección a la que
   pertenece, y sus opciones de puntaje (la mayoría 0-1-2, dos
   ítems de reflejos son 0-2 sin punto intermedio).
   El total se calcula sumando todos los ítems (máx. 34).
   ============================================================ */

const escalaFMA_LE = {
  id: "fma-le",
  nombre: "Fugl-Meyer Assessment of Lower Extremity (FMA-LE)",
  especialidad: "fisioterapia",
  descripcion: "Evaluación motora de miembro inferior post-ACV, basada en control de reflejos, sinergias y movimientos voluntarios.",
  puntajeMaximo: 34,

  secciones: [
    {
      id: "reflejos-basales",
      nombre: "I. Reflex activity",
      puntajeMaximoSeccion: 4,
      items: [
        {
          id: "fma-le-01",
          numero: 1,
          texto: "Flexores",
          opciones: [
            { valor: 0, label: "0 - No se puede provocar" },
            { valor: 2, label: "2 - Se puede provocar" }
          ]
        },
        {
          id: "fma-le-02",
          numero: 2,
          texto: "Extensores",
          opciones: [
            { valor: 0, label: "0 - No se puede provocar" },
            { valor: 2, label: "2 - Se puede provocar" }
          ]
        }
      ]
    },
    {
      id: "sinergias",
      nombre: "II. Movements within synergies",
      puntajeMaximoSeccion: 14,
      items: [
        {
          id: "fma-le-03",
          numero: 3,
          texto: "Sinergia flexora: Flexión de cadera",
          opciones: opcionesEstandar012()
        },
        {
          id: "fma-le-04",
          numero: 4,
          texto: "Sinergia flexora: Flexión de rodilla",
          opciones: opcionesEstandar012()
        },
        {
          id: "fma-le-05",
          numero: 5,
          texto: "Sinergia flexora: Dorsiflexión de tobillo",
          opciones: opcionesEstandar012()
        },
        {
          id: "fma-le-06",
          numero: 6,
          texto: "Sinergia extensora: Extensión de cadera",
          opciones: opcionesEstandar012()
        },
        {
          id: "fma-le-07",
          numero: 7,
          texto: "Sinergia extensora: Aducción de cadera",
          opciones: opcionesEstandar012()
        },
        {
          id: "fma-le-08",
          numero: 8,
          texto: "Sinergia extensora: Extensión de rodilla",
          opciones: opcionesEstandar012()
        },
        {
          id: "fma-le-09",
          numero: 9,
          texto: "Sinergia extensora: Flexión plantar de tobillo",
          opciones: opcionesEstandar012()
        }
      ]
    },
    {
      id: "sinergias-mixtas",
      nombre: "III. Movements with mixed synergies",
      puntajeMaximoSeccion: 4,
      items: [
        {
          id: "fma-le-10",
          numero: 10,
          texto: "Flexión de rodilla más allá de 90°, sentado",
          opciones: opcionesEstandar012()
        },
        {
          id: "fma-le-11",
          numero: 11,
          texto: "Dorsiflexión de tobillo, sentado",
          opciones: opcionesEstandar012()
        }
      ]
    },
    {
      id: "poca-dependencia-sinergia",
      nombre: "IV. Movements with little or no synergy dependence",
      puntajeMaximoSeccion: 4,
      items: [
        {
          id: "fma-le-12",
          numero: 12,
          texto: "Flexión de rodilla, cadera a 0°, de pie",
          opciones: opcionesEstandar012()
        },
        {
          id: "fma-le-13",
          numero: 13,
          texto: "Dorsiflexión de tobillo, de pie",
          opciones: opcionesEstandar012()
        }
      ]
    },
    {
      id: "reflejos-normales",
      nombre: "V. Normal reflex activity",
      puntajeMaximoSeccion: 2,
      items: [
        {
          id: "fma-le-14",
          numero: 14,
          texto: "Flexores/Extensores",
          opciones: opcionesEstandar012()
        }
      ]
    },
    {
      id: "coordinacion-velocidad",
      nombre: "F. Coordination / Speed",
      puntajeMaximoSeccion: 6,
      items: [
        {
          id: "fma-le-15",
          numero: 15,
          texto: "Temblor",
          opciones: opcionesEstandar012()
        },
        {
          id: "fma-le-16",
          numero: 16,
          texto: "Dismetría",
          opciones: opcionesEstandar012()
        },
        {
          id: "fma-le-17",
          numero: 17,
          texto: "Tiempo",
          opciones: opcionesEstandar012()
        }
      ]
    }
  ],

  // ---------- Función de cálculo ----------
  calcularPuntaje: function (respuestas) {
    // respuestas: objeto { "fma-le-01": 2, "fma-le-02": 0, ... }
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
      porcentaje: Math.round((total / this.puntajeMaximo) * 100),
      subtotalesPorSeccion
    };
  }
};

// Helper: las opciones 0-1-2 se repiten en casi todos los ítems
function opcionesEstandar012() {
  return [
    { valor: 0, label: "0 - No puede realizarse" },
    { valor: 1, label: "1 - Se realiza parcialmente" },
    { valor: 2, label: "2 - Se realiza completamente" }
  ];
}

// Registrar la escala en el banco general (ajustar nombre de la
// colección/array según cómo esté estructurado en pruebas.html)
if (typeof escalasFisioterapia !== "undefined") {
  escalasFisioterapia.push(escalaFMA_LE);
}

// ---------------------------------------------------------------
// Archivo original: fma_ue.js
// ---------------------------------------------------------------
/* ============================================================
   FMA-UE — Fugl-Meyer Assessment of Upper Extremity
   Especialidad: Fisioterapia
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   33 ítems en 8 subsecciones, puntaje máximo total: 66
   ============================================================ */

function opcionesEstandar012_UE() {
  return [
    { valor: 0, label: "0 - No puede realizarse" },
    { valor: 1, label: "1 - Se realiza parcialmente" },
    { valor: 2, label: "2 - Se realiza completamente" }
  ];
}

function opcionesReflejo02_UE() {
  return [
    { valor: 0, label: "0 - No se puede provocar" },
    { valor: 2, label: "2 - Se puede provocar" }
  ];
}

const escalaFMA_UE = {
  id: "fma-ue",
  nombre: "Fugl-Meyer Assessment of Upper Extremity (FMA-UE)",
  especialidad: "fisioterapia",
  descripcion: "Evaluación motora de miembro superior post-ACV, basada en control de reflejos, sinergias, movilidad de muñeca, mano y coordinación.",
  puntajeMaximo: 66,

  secciones: [
    {
      id: "a-reflejos-basales",
      nombre: "A.I. Reflex activity",
      puntajeMaximoSeccion: 4,
      items: [
        { id: "fma-ue-01", numero: 1, texto: "Flexores", opciones: opcionesReflejo02_UE() },
        { id: "fma-ue-02", numero: 2, texto: "Extensores", opciones: opcionesReflejo02_UE() }
      ]
    },
    {
      id: "a-sinergias",
      nombre: "A.II. Movements within synergies",
      puntajeMaximoSeccion: 18,
      items: [
        { id: "fma-ue-03", numero: 3, texto: "Sinergia flexora: Retracción", opciones: opcionesEstandar012_UE() },
        { id: "fma-ue-04", numero: 4, texto: "Sinergia flexora: Elevación", opciones: opcionesEstandar012_UE() },
        { id: "fma-ue-05", numero: 5, texto: "Sinergia flexora: Abducción 90°", opciones: opcionesEstandar012_UE() },
        { id: "fma-ue-06", numero: 6, texto: "Sinergia flexora: Rotación externa", opciones: opcionesEstandar012_UE() },
        { id: "fma-ue-07", numero: 7, texto: "Sinergia flexora: Flexión de codo", opciones: opcionesEstandar012_UE() },
        { id: "fma-ue-08", numero: 8, texto: "Sinergia flexora: Supinación de antebrazo", opciones: opcionesEstandar012_UE() },
        { id: "fma-ue-09", numero: 9, texto: "Sinergia extensora: Aducción/rotación interna", opciones: opcionesEstandar012_UE() },
        { id: "fma-ue-10", numero: 10, texto: "Sinergia extensora: Extensión de codo", opciones: opcionesEstandar012_UE() },
        { id: "fma-ue-11", numero: 11, texto: "Sinergia extensora: Pronación de antebrazo", opciones: opcionesEstandar012_UE() }
      ]
    },
    {
      id: "a-sinergias-mixtas",
      nombre: "A.III. Movements with mixed synergies",
      puntajeMaximoSeccion: 6,
      items: [
        { id: "fma-ue-12", numero: 12, texto: "Mano a la columna lumbar", opciones: opcionesEstandar012_UE() },
        { id: "fma-ue-13", numero: 13, texto: "Flexión de hombro 0°-90°, codo en 0°", opciones: opcionesEstandar012_UE() },
        { id: "fma-ue-14", numero: 14, texto: "Pronación-supinación, codo a 90°", opciones: opcionesEstandar012_UE() }
      ]
    },
    {
      id: "a-poca-dependencia-sinergia",
      nombre: "A.IV. Movements with little or no synergy dependence",
      puntajeMaximoSeccion: 6,
      items: [
        { id: "fma-ue-15", numero: 15, texto: "Abducción de hombro 0°-90°, codo en 0°", opciones: opcionesEstandar012_UE() },
        { id: "fma-ue-16", numero: 16, texto: "Flexión de hombro 90°-180°, codo en 0°", opciones: opcionesEstandar012_UE() },
        { id: "fma-ue-17", numero: 17, texto: "Pronación-supinación, codo en 0°", opciones: opcionesEstandar012_UE() }
      ]
    },
    {
      id: "a-reflejos-normales",
      nombre: "A.V. Normal reflex activity",
      puntajeMaximoSeccion: 2,
      items: [
        { id: "fma-ue-18", numero: 18, texto: "Flexores/Extensores", opciones: opcionesEstandar012_UE() }
      ]
    },
    {
      id: "b-muneca",
      nombre: "B. Wrist",
      puntajeMaximoSeccion: 10,
      items: [
        { id: "fma-ue-19", numero: 19, texto: "Estabilidad de muñeca a 15° de extensión dorsal, codo a 90°", opciones: opcionesEstandar012_UE() },
        { id: "fma-ue-20", numero: 20, texto: "Extensión y flexión repetida de muñeca, codo a 90°", opciones: opcionesEstandar012_UE() },
        { id: "fma-ue-21", numero: 21, texto: "Estabilidad de muñeca a 15° de extensión dorsal, codo en 0°", opciones: opcionesEstandar012_UE() },
        { id: "fma-ue-22", numero: 22, texto: "Extensión y flexión repetida de muñeca, codo en 0°", opciones: opcionesEstandar012_UE() },
        { id: "fma-ue-23", numero: 23, texto: "Circunducción, codo a 90°", opciones: opcionesEstandar012_UE() }
      ]
    },
    {
      id: "c-mano",
      nombre: "C. Hand",
      puntajeMaximoSeccion: 14,
      items: [
        { id: "fma-ue-24", numero: 24, texto: "Flexión masiva", opciones: opcionesEstandar012_UE() },
        { id: "fma-ue-25", numero: 25, texto: "Extensión masiva", opciones: opcionesEstandar012_UE() },
        { id: "fma-ue-26", numero: 26, texto: "Agarre de gancho", opciones: opcionesEstandar012_UE() },
        { id: "fma-ue-27", numero: 27, texto: "Aducción del pulgar", opciones: opcionesEstandar012_UE() },
        { id: "fma-ue-28", numero: 28, texto: "Agarre de pinza", opciones: opcionesEstandar012_UE() },
        { id: "fma-ue-29", numero: 29, texto: "Agarre cilíndrico", opciones: opcionesEstandar012_UE() },
        { id: "fma-ue-30", numero: 30, texto: "Agarre esférico", opciones: opcionesEstandar012_UE() }
      ]
    },
    {
      id: "d-coordinacion-velocidad",
      nombre: "D. Coordination / Speed",
      puntajeMaximoSeccion: 6,
      items: [
        { id: "fma-ue-31", numero: 31, texto: "Temblor", opciones: opcionesEstandar012_UE() },
        { id: "fma-ue-32", numero: 32, texto: "Dismetría", opciones: opcionesEstandar012_UE() },
        { id: "fma-ue-33", numero: 33, texto: "Tiempo", opciones: opcionesEstandar012_UE() }
      ]
    }
  ],

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

    // Subtotal A (suma de las 5 subsecciones bajo "A")
    const subtotalA =
      (subtotalesPorSeccion["a-reflejos-basales"] || 0) +
      (subtotalesPorSeccion["a-sinergias"] || 0) +
      (subtotalesPorSeccion["a-sinergias-mixtas"] || 0) +
      (subtotalesPorSeccion["a-poca-dependencia-sinergia"] || 0) +
      (subtotalesPorSeccion["a-reflejos-normales"] || 0);

    return {
      total,
      puntajeMaximo: this.puntajeMaximo,
      porcentaje: Math.round((total / this.puntajeMaximo) * 100),
      subtotalesPorSeccion,
      subtotalGrupoA: subtotalA,       // max 36
      subtotalGrupoB: subtotalesPorSeccion["b-muneca"] || 0,           // max 10
      subtotalGrupoC: subtotalesPorSeccion["c-mano"] || 0,             // max 14
      subtotalGrupoD: subtotalesPorSeccion["d-coordinacion-velocidad"] || 0  // max 6
    };
  }
};

if (typeof escalasFisioterapia !== "undefined") {
  escalasFisioterapia.push(escalaFMA_UE);
}

// ---------------------------------------------------------------
// Archivo original: tinetti.js
// ---------------------------------------------------------------
/* ============================================================
   ESCALA DE TINETTI — Performance-Oriented Mobility Assessment (POMA)
   Especialidad: Fisioterapia (también usada en Neuropsicología/TO)
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   ⚠️ INCONSISTENCIA DETECTADA EN EL DOCUMENTO FUENTE:
   La sección de Marcha se documenta con "Rango de 0 a 12 puntos",
   pero sumando los ítems tal como están descritos (M1:1, M2 derecho:1,
   M2 izquierdo:1, M3:1, M4:1, M5:2, M6:2, M7:1) el máximo real es 10,
   no 12 — faltan 2 puntos sin ítem que los explique. La sección de
   Equilibrio SÍ cuadra exactamente en 16 (validado), lo que confirma
   que el método de conteo es correcto y el problema está en la
   sección de Marcha del documento original.
   Este archivo calcula el máximo de forma DINÁMICA a partir de las
   opciones reales de cada ítem (no lo fija en 28), para que el
   resultado sea siempre matemáticamente consistente con el
   formulario. Si tienes la versión oficial completa del POMA con el
   ítem faltante, avisa para corregirlo.
   ============================================================ */

const escalaTinetti = {
  id: "tinetti-poma",
  nombre: "Escala de Tinetti (Performance-Oriented Mobility Assessment)",
  especialidad: "fisioterapia",
  descripcion: "Indicador gold standard para predecir caídas mecánicas y evaluar la marcha y el equilibrio.",

  seccionEquilibrio: {
    nombre: "Sección A: Subescala de Equilibrio",
    items: [
      { id: "e1", numero: 1, texto: "Equilibrio sentado", opciones: [{ valor: 0, label: "0 - Se inclina/desliza" }, { valor: 1, label: "1 - Seguro y firme" }] },
      { id: "e2", numero: 2, texto: "Levantarse", opciones: [{ valor: 0, label: "0 - Incapaz sin ayuda" }, { valor: 1, label: "1 - Capaz usando los brazos" }, { valor: 2, label: "2 - Capaz sin usar brazos" }] },
      { id: "e3", numero: 3, texto: "Intentos de levantarse", opciones: [{ valor: 0, label: "0 - Incapaz" }, { valor: 1, label: "1 - Capaz pero requiere más de 1 intento" }, { valor: 2, label: "2 - Capaz al primer intento" }] },
      { id: "e4", numero: 4, texto: "Equilibrio en bipedestación inmediata (primeros 5 segundos)", opciones: [{ valor: 0, label: "0 - Inestable" }, { valor: 1, label: "1 - Estable con andador/apoyo" }, { valor: 2, label: "2 - Estable sin ningún apoyo" }] },
      { id: "e5", numero: 5, texto: "Equilibrio en bipedestación prolongada", opciones: [{ valor: 0, label: "0 - Inestable" }, { valor: 1, label: "1 - Apoya pies separados o usa bastón" }, { valor: 2, label: "2 - Base estrecha sin apoyos" }] },
      { id: "e6", numero: 6, texto: "Empujón (pies juntos, el terapeuta empuja levemente 3 veces en el esternón)", opciones: [{ valor: 0, label: "0 - Empieza a caerse" }, { valor: 1, label: "1 - Oscila pero se recupera solo" }, { valor: 2, label: "2 - Firme y estable" }] },
      { id: "e7", numero: 7, texto: "Ojos cerrados (en la posición E6)", opciones: [{ valor: 0, label: "0 - Inestable" }, { valor: 1, label: "1 - Estable" }] },
      { id: "e8", numero: 8, texto: "Giro de 360 grados", opciones: [{ valor: 0, label: "0 - Pasos discontinuos/inestables" }, { valor: 1, label: "1 - Pasos continuos pero rígidos" }, { valor: 2, label: "2 - Seguro y fluido" }] },
      { id: "e9", numero: 9, texto: "Sentarse", opciones: [{ valor: 0, label: "0 - Inseguro/se deja caer bruscamente" }, { valor: 1, label: "1 - Usa los brazos de forma controlada" }, { valor: 2, label: "2 - Seguro y suave" }] }
    ]
  },

  seccionMarcha: {
    nombre: "Sección B: Subescala de Marcha",
    instruccion: "El paciente camina por un pasillo a paso normal y luego a paso rápido.",
    items: [
      { id: "m1", numero: 1, texto: "Iniciación de la marcha (inmediatamente después de decir 'camine')", opciones: [{ valor: 0, label: "0 - Duda o requiere varios intentos" }, { valor: 1, label: "1 - Inicia sin vacilación" }] },
      { id: "m2d", numero: "2 (derecho)", texto: "Longitud y altura del paso — Pie derecho", opciones: [{ valor: 0, label: "0 - No sobrepasa al pie izquierdo / no se separa del suelo" }, { valor: 1, label: "1 - Sobrepasa al izquierdo y se eleva correctamente" }] },
      { id: "m2i", numero: "2 (izquierdo)", texto: "Longitud y altura del paso — Pie izquierdo", opciones: [{ valor: 0, label: "0 - No sobrepasa al pie derecho / no se separa del suelo" }, { valor: 1, label: "1 - Sobrepasa al derecho y se eleva correctamente" }] },
      { id: "m3", numero: 3, texto: "Simetría del paso", opciones: [{ valor: 0, label: "0 - La longitud de los pasos derecho e izquierdo es diferente" }, { valor: 1, label: "1 - Los pasos son iguales" }] },
      { id: "m4", numero: 4, texto: "Continuidad de los pasos", opciones: [{ valor: 0, label: "0 - Detiene o interrumpe la marcha entre pasos" }, { valor: 1, label: "1 - Marcha fluida y continua" }] },
      { id: "m5", numero: 5, texto: "Trayectoria (desviación en 3 metros)", opciones: [{ valor: 0, label: "0 - Desviación severa" }, { valor: 1, label: "1 - Desviación leve o usa ayudas" }, { valor: 2, label: "2 - Línea recta perfecta sin apoyos" }] },
      { id: "m6", numero: 6, texto: "Estabilidad del tronco", opciones: [{ valor: 0, label: "0 - Balanceo marcado o requiere andador" }, { valor: 1, label: "1 - No se balancea pero flexiona rodillas o abre los brazos" }, { valor: 2, label: "2 - Tronco firme, braceo normal y sin apoyos" }] },
      { id: "m7", numero: 7, texto: "Postura al caminar (base de sustentación)", opciones: [{ valor: 0, label: "0 - Los talones se separan lateralmente" }, { valor: 1, label: "1 - Los talones casi se tocan al caminar" }] }
    ]
  },

  // ---------- Clasificación de riesgo de caídas ----------
  clasificarRiesgo: function (total) {
    if (total < 19) return "Riesgo ALTO de caídas (probabilidad de caída multiplicada por 5)";
    if (total <= 24) return "Riesgo MODERADO de caídas";
    return "Riesgo BAJO / Normal"; // 25-28 (o hasta el máximo real calculado)
  },

  // ---------- Máximo dinámico (ver nota de inconsistencia arriba) ----------
  calcularMaximoPosible: function () {
    const maxEquilibrio = this.seccionEquilibrio.items.reduce((acc, it) => acc + it.opciones[it.opciones.length - 1].valor, 0);
    const maxMarcha = this.seccionMarcha.items.reduce((acc, it) => acc + it.opciones[it.opciones.length - 1].valor, 0);
    return { maxEquilibrio, maxMarcha, maxTotal: maxEquilibrio + maxMarcha };
  },

  // ---------- Función de cálculo ----------
  calcularPuntaje: function (respuestas) {
    let subtotalEquilibrio = 0;
    this.seccionEquilibrio.items.forEach((item) => {
      const valor = respuestas[item.id];
      if (typeof valor === "number") subtotalEquilibrio += valor;
    });

    let subtotalMarcha = 0;
    this.seccionMarcha.items.forEach((item) => {
      const valor = respuestas[item.id];
      if (typeof valor === "number") subtotalMarcha += valor;
    });

    const total = subtotalEquilibrio + subtotalMarcha;
    const maximos = this.calcularMaximoPosible();

    return {
      subtotalEquilibrio,
      subtotalMarcha,
      total,
      maximoDocumentado: 28, // valor citado en el documento fuente (equilibrio 16 + marcha 12)
      maximoCalculadoReal: maximos.maxTotal, // valor real sumando los ítems dados (actualmente 26)
      clasificacion: this.clasificarRiesgo(total)
    };
  }
};

if (typeof escalasFisioterapia !== "undefined") {
  escalasFisioterapia.push(escalaTinetti);
}

// ---------------------------------------------------------------
// Archivo original: tug.js
// ---------------------------------------------------------------
/* ============================================================
   TIMED UP AND GO (TUG)
   Especialidad: Fisioterapia
   ============================================================
   Prueba cronometrada: levantarse de una silla, caminar 3 metros,
   girar, regresar y sentarse. Mide en segundos, no en puntos.
   ============================================================ */

const escalaTUG = {
  id: "timed-up-and-go",
  nombre: "Timed Up and Go (TUG)",
  especialidad: "fisioterapia",
  descripcion: "Prueba cronometrada de movilidad funcional básica: el paciente se levanta de una silla, camina 3 metros, gira, regresa y se sienta.",
  tipo: "medicion-tiempo",

  instrucciones: "El paciente inicia sentado con la espalda apoyada en el respaldo. A la señal, se levanta, camina 3 metros a paso normal y seguro, gira, regresa a la silla y se sienta. Se cronometra desde la señal de inicio hasta que vuelve a sentarse. Se recomienda 1 intento de práctica y luego el intento real cronometrado.",

  // ---------- Clasificación por tiempo en segundos ----------
  clasificar: function (segundos) {
    if (segundos < 10) return "Movilidad normal, sin riesgo aumentado de caídas";
    if (segundos <= 19) return "Buena movilidad funcional, riesgo bajo de caídas";
    if (segundos <= 29) return "Movilidad variable, riesgo de caídas aumentado — requiere valoración adicional";
    return "Movilidad deficiente, alto riesgo de caídas — requiere asistencia para movilidad segura"; // >=30
  },

  calcularResultado: function (tiempoSegundos) {
    if (typeof tiempoSegundos !== "number" || tiempoSegundos < 0) {
      throw new Error("El tiempo debe ser un número positivo en segundos.");
    }
    return {
      tiempoSegundos,
      clasificacion: this.clasificar(tiempoSegundos),
      puntoCorteRiesgoCaidas: 13.5 // umbral frecuentemente citado en la literatura para riesgo aumentado de caídas en adultos mayores
    };
  }
};

if (typeof escalasFisioterapia !== "undefined") {
  escalasFisioterapia.push(escalaTUG);
}
