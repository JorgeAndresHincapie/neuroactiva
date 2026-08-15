/* ============================================================
   BANCO DE ESCALAS — HIDROTERAPIA
   Generado para NeuroActiva — listo para pegar en pruebas.html
   ============================================================ */


// ---------------------------------------------------------------
// Archivo original: apta_aquatic_outcome_measure.js
// ---------------------------------------------------------------
/* ============================================================
   APTA AQUATIC OUTCOME MEASURE
   (la ficha fuente se autodenomina internamente "WOTA 2", pero es
   un instrumento distinto en contenido a Halliwick WOTA2 ya
   construido — se usa un id/prefijo propio para evitar colisión)
   Especialidad: Hidroterapia
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   27 ítems, TODOS con la misma escala 0-3 (más simple que Halliwick:
   sin opción "X", sin rangos distintos por sección). Máximo 81.
   Diseñado para pacientes que comprenden y siguen instrucciones
   verbales funcionales.
   ============================================================ */

function opcionesAPTA() {
  return [
    { valor: 0, label: "0 - No realiza: no puede realizar la tarea, muestra rechazo severo o requiere asistencia física total" },
    { valor: 1, label: "1 - Asistencia Máxima/Moderada: inicia la tarea pero requiere soporte físico constante del terapeuta" },
    { valor: 2, label: "2 - Asistencia Mínima/Supervisión: la realiza de forma independiente pero con fallas de equilibrio, lentitud o bajo supervisión estrecha" },
    { valor: 3, label: "3 - Independencia Completa: la realiza con perfecto control postural, fluidez y sin ningún tipo de asistencia" }
  ];
}

const escalaAPTA_AquaticOutcomeMeasure = {
  id: "apta-aquatic-outcome-measure",
  nombre: "APTA Aquatic Outcome Measure",
  especialidad: "hidroterapia",
  descripcion: "Ficha clínica de evaluación acuática para pacientes que comprenden y siguen instrucciones verbales funcionales. Evalúa adaptación mental, control postural/rotaciones y desplazamiento/propulsión.",
  puntajeMaximo: 81,

  secciones: [
    {
      id: "i-adaptacion-mental-entrada",
      nombre: "I. Adaptación Mental y Entrada",
      items: [
        { id: "apta-aqm-01", numero: 1, texto: "Entrada independiente a la piscina (escaleras, rampa o borde)", opciones: opcionesAPTA() },
        { id: "apta-aqm-02", numero: 2, texto: "Caminar o desplazarse en el agua manteniendo el equilibrio vertical", opciones: opcionesAPTA() },
        { id: "apta-aqm-03", numero: 3, texto: "Mojarse la cara voluntariamente con las manos", opciones: opcionesAPTA() },
        { id: "apta-aqm-04", numero: 4, texto: "Soplar burbujas metiendo la boca en el agua", opciones: opcionesAPTA() },
        { id: "apta-aqm-05", numero: 5, texto: "Soplar burbujas metiendo la boca y la nariz simultáneamente", opciones: opcionesAPTA() },
        { id: "apta-aqm-06", numero: 6, texto: "Inmersión total de la cabeza durante al menos 3 segundos", opciones: opcionesAPTA() },
        { id: "apta-aqm-07", numero: 7, texto: "Abrir los ojos debajo del agua para mirar un objeto", opciones: opcionesAPTA() }
      ]
    },
    {
      id: "ii-control-postural-rotaciones",
      nombre: "II. Control Postural y Rotaciones",
      items: [
        { id: "apta-aqm-08", numero: 8, texto: "Transición de pie a flotación prona (boca abajo)", opciones: opcionesAPTA() },
        { id: "apta-aqm-09", numero: 9, texto: "Mantener flotación prona durante 5 segundos", opciones: opcionesAPTA() },
        { id: "apta-aqm-10", numero: 10, texto: "Rotación longitudinal en prono (girar hacia un lado)", opciones: opcionesAPTA() },
        { id: "apta-aqm-11", numero: 11, texto: "Transición de flotación prona a la posición de pie de forma autónoma", opciones: opcionesAPTA() },
        { id: "apta-aqm-12", numero: 12, texto: "Transición de pie a flotación supina (boca arriba)", opciones: opcionesAPTA() },
        { id: "apta-aqm-13", numero: 13, texto: "Mantener flotación supina durante 5 segundos", opciones: opcionesAPTA() },
        { id: "apta-aqm-14", numero: 14, texto: "Rotación longitudinal en supino (girar hacia un lado)", opciones: opcionesAPTA() },
        { id: "apta-aqm-15", numero: 15, texto: "Transición de flotación supina a la posición de pie de forma autónoma", opciones: opcionesAPTA() },
        { id: "apta-aqm-16", numero: 16, texto: "Rotación transversal: pasar de posición supina a prona", opciones: opcionesAPTA() },
        { id: "apta-aqm-17", numero: 17, texto: "Rotación transversal: pasar de posición prona a supina", opciones: opcionesAPTA() },
        { id: "apta-aqm-18", numero: 18, texto: "Enderezamiento sagital (controlar el empuje lateral del agua)", opciones: opcionesAPTA() }
      ]
    },
    {
      id: "iii-desplazamiento-propulsion",
      nombre: "III. Desplazamiento y Propulsión",
      items: [
        { id: "apta-aqm-19", numero: 19, texto: "Flotación pasiva (mantenerse relajado mientras el terapeuta lo mueve)", opciones: opcionesAPTA() },
        { id: "apta-aqm-20", numero: 20, texto: "Desplazamiento lateral sujeto del borde de la piscina", opciones: opcionesAPTA() },
        { id: "apta-aqm-21", numero: 21, texto: "Propulsión en posición prona usando solo las piernas (pataleo)", opciones: opcionesAPTA() },
        { id: "apta-aqm-22", numero: 22, texto: "Propulsión en posición prona usando solo los brazos", opciones: opcionesAPTA() },
        { id: "apta-aqm-23", numero: 23, texto: "Propulsión en posición supina usando solo las piernas", opciones: opcionesAPTA() },
        { id: "apta-aqm-24", numero: 24, texto: "Propulsión en posición supina usando solo los brazos", opciones: opcionesAPTA() },
        { id: "apta-aqm-25", numero: 25, texto: "Combinación de brazos y piernas en posición prona (nado básico)", opciones: opcionesAPTA() },
        { id: "apta-aqm-26", numero: 26, texto: "Combinación de brazos y piernas en posición supina", opciones: opcionesAPTA() },
        { id: "apta-aqm-27", numero: 27, texto: "Salida independiente de la piscina hacia la superficie seca", opciones: opcionesAPTA() }
      ]
    }
  ],

  // ---------- Clasificación por porcentaje de independencia ----------
  clasificar: function (porcentaje) {
    if (porcentaje >= 76) return "Independencia Alta: listo para transición a estilos de natación adaptada o actividades comunitarias sin asistencia";
    if (porcentaje >= 36) return "Independencia Intermedia: domina el entorno pero falla en los giros. Priorizar trabajo de rotaciones y control de tronco";
    return "Dependencia Alta: centrar el tratamiento en adaptación mental al agua y control de la respiración"; // 0-35%
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

    const porcentaje = Math.round((total / this.puntajeMaximo) * 100);

    return {
      total,
      puntajeMaximo: this.puntajeMaximo,
      porcentaje,
      clasificacion: this.clasificar(porcentaje),
      subtotalesPorSeccion
    };
  }
};

if (typeof escalasHidroterapia !== "undefined") {
  escalasHidroterapia.push(escalaAPTA_AquaticOutcomeMeasure);
}

// ---------------------------------------------------------------
// Archivo original: barthel_acuatico.js
// ---------------------------------------------------------------
/* ============================================================
   ÍNDICE DE BARTHEL ADAPTADO ACUÁTICO (IBAA)
   Especialidad: Hidroterapia
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   10 ítems, puntaje máximo 100. Cada ítem tiene su propio rango de
   opciones (algunos 0/5, otros 0/5/10, otros 0/5/10/15) — a
   diferencia de las escalas FMA, aquí NO todos los ítems valen lo
   mismo.
   ============================================================ */

const escalaBarthelAcuatico = {
  id: "barthel-adaptado-acuatico",
  nombre: "Índice de Barthel Adaptado Acuático (IBAA)",
  especialidad: "hidroterapia",
  descripcion: "Evalúa el grado de autonomía del paciente en actividades básicas dentro del entorno acuático (adaptación del Índice de Barthel clásico).",
  puntajeMaximo: 100,

  items: [
    {
      id: "ibaa-01",
      numero: 1,
      texto: "Comer y beber",
      opciones: [
        { valor: 0, label: "0 - Incapaz" },
        { valor: 5, label: "5 - Ayuda para abrir/sostener botella" },
        { valor: 10, label: "10 - Independiente" }
      ]
    },
    {
      id: "ibaa-02",
      numero: 2,
      texto: "Lavarse / Bañarse",
      opciones: [
        { valor: 0, label: "0 - Dependiente en ducha" },
        { valor: 5, label: "5 - Independiente en ducha/piscina" }
      ]
    },
    {
      id: "ibaa-03",
      numero: 3,
      texto: "Arreglo personal",
      opciones: [
        { valor: 0, label: "0 - Requiere ayuda con gorro/gafas" },
        { valor: 5, label: "5 - Autónomo con gorro/gafas" }
      ]
    },
    {
      id: "ibaa-04",
      numero: 4,
      texto: "Vestirse",
      opciones: [
        { valor: 0, label: "0 - Dependiente" },
        { valor: 5, label: "5 - Ayuda en prendas húmedas/órtesis" },
        { valor: 10, label: "10 - Independiente" }
      ]
    },
    {
      id: "ibaa-05",
      numero: 5,
      texto: "Deposición",
      opciones: [
        { valor: 0, label: "0 - Incontinente/Accidentes" },
        { valor: 5, label: "5 - Accidente ocasional" },
        { valor: 10, label: "10 - Continente total" }
      ]
    },
    {
      id: "ibaa-06",
      numero: 6,
      texto: "Micción",
      opciones: [
        { valor: 0, label: "0 - Incontinente/Sonda sin manejo" },
        { valor: 5, label: "5 - Pérdida ocasional" },
        { valor: 10, label: "10 - Continente total" }
      ]
    },
    {
      id: "ibaa-07",
      numero: 7,
      texto: "Uso del retrete",
      opciones: [
        { valor: 0, label: "0 - Dependiente" },
        { valor: 5, label: "5 - Necesita apoyo para equilibrio/ropa" },
        { valor: 10, label: "10 - Independiente" }
      ]
    },
    {
      id: "ibaa-08",
      numero: 8,
      texto: "Traslado al agua",
      opciones: [
        { valor: 0, label: "0 - Grúa/Asistencia total" },
        { valor: 5, label: "5 - Ayuda física grande" },
        { valor: 10, label: "10 - Apoyo leve/Supervisión" },
        { valor: 15, label: "15 - Independiente por rampa/escalera" }
      ]
    },
    {
      id: "ibaa-09",
      numero: 9,
      texto: "Deambulación",
      opciones: [
        { valor: 0, label: "0 - Inmóvil/Flotación pasiva" },
        { valor: 5, label: "5 - Silla acuática/Andador" },
        { valor: 10, label: "10 - Con ayuda de 1 persona/Paralelas" },
        { valor: 15, label: "15 - Independiente >50m sin apoyos" }
      ]
    },
    {
      id: "ibaa-10",
      numero: 10,
      texto: "Escaleras de acceso",
      opciones: [
        { valor: 0, label: "0 - Incapaz" },
        { valor: 5, label: "5 - Precisa ayuda física o rampas asistidas" },
        { valor: 10, label: "10 - Independiente con barandilla" }
      ]
    }
  ],

  // ---------- Clasificación del grado de dependencia acuática ----------
  clasificar: function (total) {
    if (total === 100) return "Independencia acuática total";
    if (total >= 91) return "Dependencia acuática leve";
    if (total >= 61) return "Dependencia acuática moderada";
    if (total >= 21) return "Dependencia acuática severa";
    return "Dependencia acuática total"; // < 20 (y también cubre 20 exacto, no definido explícitamente en la fuente)
  },

  // ---------- Función de cálculo ----------
  calcularPuntaje: function (respuestas) {
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
      clasificacion: this.clasificar(total)
    };
  }
};

if (typeof escalasHidroterapia !== "undefined") {
  escalasHidroterapia.push(escalaBarthelAcuatico);
}

// ---------------------------------------------------------------
// Archivo original: borg_rpe.js
// ---------------------------------------------------------------
/* ============================================================
   ESCALA DE BORG RPE (6-20) — Rate of Perceived Exertion
   Especialidad: Hidroterapia (también aplicable a Fisioterapia)
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   A diferencia de las escalas anteriores (FMA, Halliwick), esta NO
   es una suma de varios ítems — es UNA sola selección de percepción
   subjetiva de esfuerzo (6 a 20), diseñada para aproximarse a la
   frecuencia cardíaca multiplicada por 10 (6 ≈ 60 lpm en reposo,
   20 ≈ 200 lpm máximo).
   ============================================================ */

const escalaBorgRPE = {
  id: "borg-rpe-6-20",
  nombre: "Escala de Borg RPE (6-20)",
  especialidad: "hidroterapia",
  descripcion: "Herramienta clínica subjetiva que mide la percepción del esfuerzo físico y la disnea durante el ejercicio. Se usa para dosificar cargas de trabajo, prevenir sobreesfuerzos y guiar de forma segura la rehabilitación respiratoria o cardíaca.",
  tipo: "seleccion-unica",

  opciones: [
    { valor: 6, label: "6 - Sin esfuerzo", significado: "Reposo o movimiento extremadamente suave." },
    { valor: 7, label: "7 - Extremadamente ligero", significado: "Calentamiento suave, caminata muy tranquila o ejercicios de movilidad." },
    { valor: 8, label: "8 - Extremadamente ligero", significado: "Calentamiento suave, caminata muy tranquila o ejercicios de movilidad." },
    { valor: 9, label: "9 - Muy claro", significado: "Una actividad cómoda que podrías prolongar durante mucho tiempo." },
    { valor: 10, label: "10 - Muy claro", significado: "Una actividad cómoda que podrías prolongar durante mucho tiempo." },
    { valor: 11, label: "11 - Ligero", significado: "Ejercicio aeróbico suave; la respiración es elevada pero controlada." },
    { valor: 12, label: "12 - Ligero", significado: "Ejercicio aeróbico suave; la respiración es elevada pero controlada." },
    { valor: 13, label: "13 - Un poco difícil", significado: "Ejercicio cardiovascular moderado, ritmo constante o acondicionamiento físico sostenible." },
    { valor: 14, label: "14 - Un poco difícil", significado: "Ejercicio cardiovascular moderado, ritmo constante o acondicionamiento físico sostenible." },
    { valor: 15, label: "15 - Duro", significado: "Esfuerzo intenso; hablar es difícil y se requiere concentración." },
    { valor: 16, label: "16 - Duro", significado: "Esfuerzo intenso; hablar es difícil y se requiere concentración." },
    { valor: 17, label: "17 - Muy difícil", significado: "Intervalos de alta intensidad o esfuerzos finales intensos." },
    { valor: 18, label: "18 - Muy difícil", significado: "Intervalos de alta intensidad o esfuerzos finales intensos." },
    { valor: 19, label: "19 - Extremadamente difícil", significado: "Esfuerzo casi máximo que solo se puede mantener brevemente." },
    { valor: 20, label: "20 - Esfuerzo máximo", significado: "Máximo esfuerzo posible para la tarea." }
  ],

  // ---------- Función de interpretación ----------
  // No hay "cálculo" como tal (es un solo valor), pero se entrega la
  // interpretación práctica y una frecuencia cardíaca estimada de
  // referencia (valor × 10), útil para contexto clínico.
  interpretar: function (valorSeleccionado) {
    const opcion = this.opciones.find((o) => o.valor === valorSeleccionado);
    if (!opcion) {
      return null;
    }
    return {
      valor: valorSeleccionado,
      significado: opcion.significado,
      frecuenciaCardiacaEstimada: valorSeleccionado * 10,
      nota: "La frecuencia cardíaca estimada es aproximada (valor × 10) y varía según edad, condición física y medicación (ej. betabloqueadores)."
    };
  }
};

if (typeof escalasHidroterapia !== "undefined") {
  escalasHidroterapia.push(escalaBorgRPE);
}

// ---------------------------------------------------------------
// Archivo original: functional_reach_test.js
// ---------------------------------------------------------------
/* ============================================================
   FUNCTIONAL REACH TEST (FRT) — Alcance Funcional Multidireccional
   Especialidad: Hidroterapia (también aplicable a Fisioterapia)
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   A diferencia de las escalas anteriores, este NO es un cuestionario
   de puntos — es una MEDICIÓN en centímetros (promedio de 3 intentos
   por dirección), con:
   1. Mediciones en tierra firme (4 direcciones)
   2. Mediciones en medio acuático (2 direcciones)
   3. Clasificación de riesgo de caídas (Criterios Duncan, sobre el
      promedio "Hacia Adelante" en tierra)
   4. Comparación tierra vs. agua (interpretación clínica)
   5. Checklist biomecánico observacional (no puntuado, solo registro)
   ============================================================ */

const testFRT = {
  id: "functional-reach-test",
  nombre: "Functional Reach Test (FRT) — Alcance Funcional Multidireccional",
  especialidad: "hidroterapia",
  descripcion: "Herramienta clínico-métrica para medir el control postural, límites de estabilidad y riesgo de caídas, en tierra firme y en medio acuático.",
  tipo: "medicion",

  direccionesTierra: [
    { id: "tierra-adelante", numero: 1, texto: "Hacia Adelante (Anterior)" },
    { id: "tierra-atras", numero: 2, texto: "Hacia Atrás (Posterior)" },
    { id: "tierra-lateral-derecho", numero: 3, texto: "Lateral Derecho" },
    { id: "tierra-lateral-izquierdo", numero: 4, texto: "Lateral Izquierdo" }
  ],

  direccionesAgua: [
    { id: "agua-adelante", numero: 1, texto: "Hacia Adelante (Anterior)" },
    { id: "agua-lateral-afectado", numero: 2, texto: "Lateral (Lado Afectado)" }
  ],

  nivelesAgua: ["Ombligo", "Pecho (Xifoides)", "Axilas"],

  // Checklist biomecánico — observacional, NO puntuado (solo registro sí/no + observación)
  checklistBiomecanico: [
    { id: "estrategia-tobillo", texto: "Estrategia de Tobillo Eficiente (mantiene alineación y oscila desde la base)" },
    { id: "estrategia-cadera", texto: "Estrategia de Cadera Dominante (flexiona el tronco en exceso hacia adelante)" },
    { id: "compensacion-rodillas", texto: "Compensación con Rodillas (flexiona las rodillas para ganar distancia)" },
    { id: "perdida-contacto", texto: "Pérdida de Contacto (levanta los talones o los dedos del suelo)" },
    { id: "estrategia-paso", texto: "Estrategia de Paso (da un paso para evitar caer al romper el límite)" },
    { id: "asimetria-lateral", texto: "Asimetría Lateral (el alcance hacia un lado es notablemente menor)" }
  ],

  // ---------- Promedio de 3 intentos ----------
  calcularPromedio: function (intento1, intento2, intento3) {
    const valores = [intento1, intento2, intento3].filter((v) => typeof v === "number");
    if (valores.length === 0) return null;
    return Math.round((valores.reduce((a, b) => a + b, 0) / valores.length) * 10) / 10;
  },

  // ---------- Clasificación de riesgo de caídas (Criterios Duncan) ----------
  // Se aplica sobre el promedio "Hacia Adelante" en TIERRA firme
  clasificarRiesgoCaidas: function (promedioAdelanteEnTierra) {
    if (promedioAdelanteEnTierra === null || promedioAdelanteEnTierra === undefined) {
      return null;
    }
    if (promedioAdelanteEnTierra <= 0) {
      return {
        nivel: "Muy Alto",
        descripcion: "Inestabilidad severa. 8 veces más probabilidad de caída (0 cm o incapacidad de realizar la prueba)."
      };
    }
    if (promedioAdelanteEnTierra < 15.2) {
      return {
        nivel: "Alto",
        descripcion: "4 veces más probabilidad de sufrir una caída (< 15.2 cm)."
      };
    }
    if (promedioAdelanteEnTierra <= 25.4) {
      return {
        nivel: "Moderado",
        descripcion: "El doble de probabilidad de sufrir una caída (15.2 cm a 25.4 cm)."
      };
    }
    return {
      nivel: "Bajo",
      descripcion: "Control postural y límites de estabilidad dentro de la normalidad (> 25.4 cm)."
    };
  },

  // ---------- Comparación Tierra vs. Agua ----------
  compararTierraAgua: function (promedioAdelanteTierra, promedioAdelanteAgua) {
    if (typeof promedioAdelanteTierra !== "number" || typeof promedioAdelanteAgua !== "number") {
      return null;
    }
    if (promedioAdelanteAgua > promedioAdelanteTierra) {
      return {
        resultado: "Agua > Tierra",
        interpretacion: "El paciente presenta un componente de miedo o debilidad muscular que el agua compensa gracias a la presión hidrostática y la flotación. Buen candidato para entrenamiento intensivo de equilibrio en piscina."
      };
    }
    if (promedioAdelanteTierra > promedioAdelanteAgua) {
      return {
        resultado: "Tierra > Agua",
        interpretacion: "El agua genera inestabilidad por falta de control de las fuerzas fluidas (turbulencia). Se debe entrenar la estabilización del núcleo (core)."
      };
    }
    return {
      resultado: "Tierra = Agua",
      interpretacion: "Sin diferencia relevante entre ambos entornos."
    };
  },

  // ---------- Función consolidada de resultado ----------
  // mediciones: { tierra: { "tierra-adelante": {i1,i2,i3}, ... }, agua: {...} }
  calcularResultado: function (mediciones) {
    const promediosTierra = {};
    this.direccionesTierra.forEach((dir) => {
      const m = mediciones.tierra?.[dir.id];
      promediosTierra[dir.id] = m ? this.calcularPromedio(m.intento1, m.intento2, m.intento3) : null;
    });

    const promediosAgua = {};
    this.direccionesAgua.forEach((dir) => {
      const m = mediciones.agua?.[dir.id];
      promediosAgua[dir.id] = m ? this.calcularPromedio(m.intento1, m.intento2, m.intento3) : null;
    });

    const riesgoCaidas = this.clasificarRiesgoCaidas(promediosTierra["tierra-adelante"]);
    const comparacion = this.compararTierraAgua(
      promediosTierra["tierra-adelante"],
      promediosAgua["agua-adelante"]
    );

    return {
      promediosTierra,
      promediosAgua,
      riesgoCaidas,
      comparacionTierraAgua: comparacion
    };
  }
};

if (typeof escalasHidroterapia !== "undefined") {
  escalasHidroterapia.push(testFRT);
}

// ---------------------------------------------------------------
// Archivo original: fws.js
// ---------------------------------------------------------------
/* ============================================================
   FEAR OF WATER SCALE (FWS) — Escala de Miedo al Agua
   Especialidad: Hidroterapia
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   DOS escalas independientes en este archivo:
   1. FWS-Child (niños 4-12 años): 10 ítems, escala 1-3, máx 30
   2. FWS-Adult (adultos): 10 ítems, escala 0-4, máx 40
   Cada una con su propia clasificación de nivel de miedo/ansiedad.
   ============================================================ */

// ---------- Opciones comunes ----------
function opcionesFWS_Nino() {
  return [
    { valor: 1, label: "1 - No, para nada (Feliz)" },
    { valor: 2, label: "2 - Un poco (Dudoso)" },
    { valor: 3, label: "3 - Sí, mucho (Asustado)" }
  ];
}

function opcionesFWS_Adulto() {
  return [
    { valor: 0, label: "0 - Nunca/En absoluto" },
    { valor: 1, label: "1 - Rara vez" },
    { valor: 2, label: "2 - A veces" },
    { valor: 3, label: "3 - Frecuentemente" },
    { valor: 4, label: "4 - Siempre/Severo" }
  ];
}

// ============================================================
// FORMATO 1: FWS-Child (4-12 años)
// ============================================================
const escalaFWS_Nino = {
  id: "fws-child",
  nombre: "Fear of Water Scale — Niños (FWS-Child)",
  especialidad: "hidroterapia",
  descripcion: "Escala de miedo al agua para niños de 4 a 12 años, con lenguaje sencillo tipo semáforo (1-3).",
  puntajeMinimo: 10,
  puntajeMaximo: 30,

  items: [
    { id: "fws-nino-01", numero: 1, texto: "¿Te da miedo cambiarte de ropa y pensar que vas a entrar a la piscina?", opciones: opcionesFWS_Nino() },
    { id: "fws-nino-02", numero: 2, texto: '¿Sientes que el agua está "muy fría" o te da miedo cuando te salpica la cara?', opciones: opcionesFWS_Nino() },
    { id: "fws-nino-03", numero: 3, texto: "¿Te asusta meter la boca o la nariz debajo del agua para hacer burbujas?", opciones: opcionesFWS_Nino() },
    { id: "fws-nino-04", numero: 4, texto: "¿Te da miedo abrir los ojos cuando estás sumergido?", opciones: opcionesFWS_Nino() },
    { id: "fws-nino-05", numero: 5, texto: "¿Sientes que te vas a ir al fondo si el profesor te suelta en el agua?", opciones: opcionesFWS_Nino() },
    { id: "fws-nino-06", numero: 6, texto: "¿Te asusta alejarte de la pared de la piscina o del borde?", opciones: opcionesFWS_Nino() },
    { id: "fws-nino-07", numero: 7, texto: "¿Te pones tenso, duro o te dan ganas de llorar si el agua te llega al cuello?", opciones: opcionesFWS_Nino() },
    { id: "fws-nino-08", numero: 8, texto: "¿Te da miedo levantar los pies del suelo para intentar flotar como una estrella?", opciones: opcionesFWS_Nino() },
    { id: "fws-nino-09", numero: 9, texto: "¿Te asusta ver el fondo de la piscina donde el agua se ve más oscura/profunda?", opciones: opcionesFWS_Nino() },
    { id: "fws-nino-10", numero: 10, texto: "¿Prefieres quedarte sentado afuera mirando en lugar de jugar dentro del agua?", opciones: opcionesFWS_Nino() }
  ],

  clasificar: function (total) {
    if (total >= 23) return "Nivel Rojo (Miedo severo / Bloqueo. Priorizar familiarización afectiva)";
    if (total >= 16) return "Nivel Amarillo (Miedo moderado / Requiere juego y acompañamiento táctil)";
    return "Nivel Verde (Miedo bajo / Buena adaptabilidad)"; // 10-15
  },

  calcularPuntaje: function (respuestas) {
    let total = 0;
    let itemsRespondidos = 0;
    this.items.forEach((item) => {
      const valor = respuestas[item.id];
      if (typeof valor === "number") {
        total += valor;
        itemsRespondidos++;
      }
    });
    return {
      total,
      puntajeMinimo: this.puntajeMinimo,
      puntajeMaximo: this.puntajeMaximo,
      itemsRespondidos,
      clasificacion: itemsRespondidos === this.items.length ? this.clasificar(total) : null
    };
  }
};

// ============================================================
// FORMATO 2: FWS-Adult
// ============================================================
const escalaFWS_Adulto = {
  id: "fws-adult",
  nombre: "Fear of Water Scale — Adultos (FWS-Adult)",
  especialidad: "hidroterapia",
  descripcion: "Escala de miedo al agua para adultos en procesos de hidroterapia, rehabilitación o natación. Evalúa autopercepción y respuestas somáticas.",
  puntajeMinimo: 0,
  puntajeMaximo: 40,

  items: [
    { id: "fws-adulto-01", numero: 1, texto: "Experimento ansiedad anticipatoria (estrés u opresión en el pecho) antes de ir a la sesión.", opciones: opcionesFWS_Adulto() },
    { id: "fws-adulto-02", numero: 2, texto: "Siento taquicardia o respiración acelerada e ineficiente apenas entro al vaso de la piscina.", opciones: opcionesFWS_Adulto() },
    { id: "fws-adulto-03", numero: 3, texto: "Mis músculos se tensan involuntariamente (rigidez cervical o lumbar), dificultando el movimiento.", opciones: opcionesFWS_Adulto() },
    { id: "fws-adulto-04", numero: 4, texto: "Evito de forma activa que el agua toque mis orejas, ojos o bloquee mis vías respiratorias.", opciones: opcionesFWS_Adulto() },
    { id: "fws-adulto-05", numero: 5, texto: "Siento una necesidad imperiosa de mantener el contacto visual con un punto de apoyo fijo (borde).", opciones: opcionesFWS_Adulto() },
    { id: "fws-adulto-06", numero: 6, texto: "Me invade una sensación de pérdida de control si no logro tocar el fondo con firmeza.", opciones: opcionesFWS_Adulto() },
    { id: "fws-adulto-07", numero: 7, texto: "Asocio el agua profunda con ideas catastróficas inconscientes (ahogamiento, falta de aire).", opciones: opcionesFWS_Adulto() },
    { id: "fws-adulto-08", numero: 8, texto: "Dependo críticamente de un elemento auxiliar (flotador, tabla, cuerda) para poder relajar el cuerpo.", opciones: opcionesFWS_Adulto() },
    { id: "fws-adulto-09", numero: 9, texto: "Me cuesta ejecutar giros o cambios de posición (supino a prono) por temor a desorientarme.", opciones: opcionesFWS_Adulto() },
    { id: "fws-adulto-10", numero: 10, texto: "Siento mareo o inestabilidad psicológica si el agua se mueve bruscamente a mi alrededor.", opciones: opcionesFWS_Adulto() }
  ],

  clasificar: function (total) {
    if (total >= 26) return "Ansiedad Fóbica Alta / Bloqueo psicomotor. Priorizar desensibilización sistemática en zona somera";
    if (total >= 11) return "Ansiedad Moderada / Interfiere con el aprendizaje motor. Requiere técnicas de control respiratorio";
    return "Ansiedad Controlable / Adaptación básica lograda"; // 0-10
  },

  calcularPuntaje: function (respuestas) {
    let total = 0;
    let itemsRespondidos = 0;
    this.items.forEach((item) => {
      const valor = respuestas[item.id];
      if (typeof valor === "number") {
        total += valor;
        itemsRespondidos++;
      }
    });
    return {
      total,
      puntajeMinimo: this.puntajeMinimo,
      puntajeMaximo: this.puntajeMaximo,
      itemsRespondidos,
      clasificacion: itemsRespondidos === this.items.length ? this.clasificar(total) : null
    };
  }
};

if (typeof escalasHidroterapia !== "undefined") {
  escalasHidroterapia.push(escalaFWS_Nino);
  escalasHidroterapia.push(escalaFWS_Adulto);
}

// ---------------------------------------------------------------
// Archivo original: halliwick_wota1.js
// ---------------------------------------------------------------
/* ============================================================
   HALLIWICK WOTA1 — Water Orientation Test Alyn 1
   Especialidad: Hidroterapia
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   26 ítems de la sección A-C, más 4 estilos de natación en la sección D
   (27 ítems totales).
   PARTICULARIDAD: muchos ítems tienen una opción "X - No puede ser
   evaluado" que EXCLUYE ese ítem del cálculo (no suma como 0, se
   descuenta también del puntaje máximo posible). El valor de esa
   opción se representa como null en vez de un número.
   ============================================================ */

// Opciones estándar 0-3 (Ítem 1, sin opción X)
function opcionesAdaptacionMental() {
  return [
    { valor: 0, label: "0 - Asustado / Llora / Protesta" },
    { valor: 1, label: "1 - Indiferente" },
    { valor: 2, label: "2 - Ligeramente dubitativo, disfruta de algunas actividades" },
    { valor: 3, label: "3 - Feliz, relajado, chapotea" }
  ];
}

// Opciones X,0,1,2,3 para control de respiración (ítems 2-6)
function opcionesRespiracion(textoX) {
  return [
    { valor: null, label: `X - No puede ser evaluado (${textoX})` },
    { valor: 0, label: "0 - No lo ejecuta / parece capaz pero no coopera" },
    { valor: 1, label: "1 - Baja calidad" },
    { valor: 2, label: "2 - Calidad media" },
    { valor: 3, label: "3 - Alta calidad" }
  ];
}

// Opciones X,0,1,2,3 para apoyo/independencia (ítems 7-23)
function opcionesApoyo(textoX) {
  return [
    { valor: null, label: `X - No puede ser evaluado (${textoX})` },
    { valor: 0, label: "0 - No lo ejecuta / parece capaz pero no coopera" },
    { valor: 1, label: "1 - Apoyo total del instructor" },
    { valor: 2, label: "2 - Apoyo parcial del instructor" },
    { valor: 3, label: "3 - Independiente" }
  ];
}

// Opciones X,0,1,2,3 para natación por distancia (ítems 24-27)
function opcionesNatacion(textoX) {
  return [
    { valor: null, label: `X - No puede ser evaluado (${textoX})` },
    { valor: 0, label: "0 - No lo ejecuta" },
    { valor: 1, label: "1 - Nada 20m, 3-7 paradas para descansar" },
    { valor: 2, label: "2 - Nada 20m, 1-2 paradas para descansar" },
    { valor: 3, label: "3 - Nada 20m de forma continua, sin paradas" }
  ];
}

const CONTRAINDICACION_ORAL = "traqueostomía / infección de oídos / contraindicación a meter la boca en el agua";
const CONTRAINDICACION_NASAL = "traqueostomía / infección de oídos / contraindicación a meter la nariz en el agua";
const CONTRAINDICACION_FACIAL = "traqueostomía / infección de oídos / contraindicación a meter la cara en el agua";
const CONTRAINDICACION_TRANSFERENCIA = "transferencia contraindicada";
const CONTRAINDICACION_CARGA = "paraplejia o contraindicación con la puesta en carga o dar pasos";
const CONTRAINDICACION_GENERAL = "contraindicación, ej. traqueostomía o infección de oídos";
const CONTRAINDICACION_MIEMBROS = "paraplejia, amputación de miembros inferiores o contraindicación al movimiento";
const CONTRAINDICACION_NATACION = "contraindicación, ej. traqueostomía, riesgo de aspiración";

const escalaHalliwickWOTA1 = {
  id: "halliwick-wota1",
  nombre: "Halliwick WOTA1 (Water Orientation Test Alyn 1)",
  especialidad: "hidroterapia",
  descripcion: "Evalúa la adaptación mental al agua, control de la respiración, control del equilibrio y progresión/independencia en el agua.",
  notaPuntaje: "El puntaje máximo varía según cuántos ítems se marquen como 'X - No evaluable', ya que esos ítems se excluyen del total (no se cuentan ni como 0).",

  secciones: [
    {
      id: "a-adaptacion-mental",
      nombre: "Sección A: Adaptación Mental General al Agua",
      items: [
        {
          id: "wota1-01",
          numero: 1,
          texto: "Adaptación Mental General al Agua (AM)",
          instruccion: "Mete tus ojos en el agua y ábrelos sin las gafas",
          opciones: opcionesAdaptacionMental()
        }
      ]
    },
    {
      id: "b-control-respiracion",
      nombre: "Sección B: Control de la Respiración",
      items: [
        {
          id: "wota1-02",
          numero: 2,
          texto: "Soplar burbujas por la boca (5 segundos)",
          instruccion: "Mete la boca en el agua. Sopla burbujas por la boca, cuenta hasta 5",
          opciones: opcionesRespiracion(CONTRAINDICACION_ORAL)
        },
        {
          id: "wota1-03",
          numero: 3,
          texto: "Soplar burbujas por la nariz (5 segundos)",
          instruccion: "Mete la nariz en el agua. Sopla burbujas por la nariz, cuenta hasta 5",
          opciones: opcionesRespiracion(CONTRAINDICACION_NASAL)
        },
        {
          id: "wota1-04",
          numero: 4,
          texto: "Soplar burbujas con la cara/cabeza dentro del agua (5 segundos)",
          instruccion: "Mete la cabeza/cara en el agua. Haz burbujas y cuenta hasta 5",
          opciones: opcionesRespiracion(CONTRAINDICACION_FACIAL)
        },
        {
          id: "wota1-05",
          numero: 5,
          texto: "Exhalación en el agua acompasada con movimiento",
          instruccion: "Mete la cabeza/cara en el agua y sácala 10 veces, suelta el aire brevemente en el agua y toma aire una vez fuera del agua",
          opciones: opcionesRespiracion(CONTRAINDICACION_FACIAL)
        },
        {
          id: "wota1-06",
          numero: 6,
          texto: "Exhalación alternando nariz y boca",
          instruccion: "Mete la nariz y la boca en el agua realizando 3 veces este ciclo: soltar el aire por la nariz, soltar el aire por la boca — sin sacar la nariz del agua",
          opciones: opcionesRespiracion(CONTRAINDICACION_ORAL)
        }
      ]
    },
    {
      id: "c-equilibrio-progresion",
      nombre: "Sección C: Control del Equilibrio y Progresión",
      items: [
        {
          id: "wota1-07",
          numero: 7,
          texto: "Entrada en el agua",
          instruccion: "Siéntate en el borde de la piscina, estira las manos hacia delante hacia el agua y ven hacia mí con la cabeza hasta que estés totalmente en el agua",
          opciones: opcionesApoyo(CONTRAINDICACION_TRANSFERENCIA)
        },
        {
          id: "wota1-08",
          numero: 8,
          texto: "Salida del agua",
          instruccion: "Ponte de pie con el agua al nivel del pecho. Empújate hacia arriba sobre el borde de la piscina usando las manos, gírate y siéntate con los pies en el agua",
          opciones: opcionesApoyo(CONTRAINDICACION_TRANSFERENCIA)
        },
        {
          id: "wota1-09",
          numero: 9,
          texto: "Posición de silla (caja) — Sentado en el agua",
          instruccion: "Siéntate derecho sin apoyo como si hubiera una silla debajo durante 20 segundos, estira los brazos hacia delante",
          opciones: opcionesApoyo(CONTRAINDICACION_CARGA)
        },
        {
          id: "wota1-10",
          numero: 10,
          texto: "Progresión por el borde de la piscina, usando las manos",
          instruccion: "Sujétate al borde de la piscina, los pies no deben tocar el suelo. Avanza 3 metros por lo menos a lo largo del borde",
          opciones: opcionesApoyo("hay una contraindicación a este movimiento")
        },
        {
          id: "wota1-11",
          numero: 11,
          texto: "Andar a través de la piscina",
          instruccion: "Anda 6 metros a través de la piscina (agua a la altura del pecho)",
          opciones: opcionesApoyo(CONTRAINDICACION_MIEMBROS)
        },
        {
          id: "wota1-12",
          numero: 12,
          texto: "Saltar a través de la piscina",
          instruccion: "Salta 6 metros a través de la piscina (agua a la altura del pecho)",
          opciones: opcionesApoyo(CONTRAINDICACION_MIEMBROS)
        },
        {
          id: "wota1-13",
          numero: 13,
          texto: "Saltar y zambullirse dentro y fuera del agua",
          instruccion: "Salta y zambúllete en el agua 5 veces metiendo la cabeza/cara en el agua cada vez",
          opciones: opcionesApoyo(CONTRAINDICACION_MIEMBROS)
        },
        {
          id: "wota1-14",
          numero: 14,
          texto: "Cambio de posición: bipedestación → silla (sentado) → flotación bocarriba (RT)",
          instruccion: "Siéntate en el agua y despacio muévete para flotar bocarriba, sin saltar, mientras levantas la pelvis y miras diagonalmente arriba al techo",
          opciones: opcionesApoyo(CONTRAINDICACION_GENERAL)
        },
        {
          id: "wota1-15",
          numero: 15,
          texto: "Flotación bocarriba estática durante 5 segundos",
          instruccion: "Cuenta hasta 5 mientras flotas bocarriba",
          opciones: opcionesApoyo(CONTRAINDICACION_GENERAL)
        },
        {
          id: "wota1-16",
          numero: 16,
          texto: "Cambio de posición de flotación bocarriba a bipedestación",
          instruccion: "Ponte de pie llevando la cabeza hacia delante mientras soplas burbujas, extendiendo los brazos hacia delante y flexionando las rodillas hacia el pecho",
          opciones: opcionesApoyo("traqueostomía, infección de oídos o aspiraciones")
        },
        {
          id: "wota1-17",
          numero: 17,
          texto: "Deslizarse en prono desde la pared o bipedestación (5 segundos)",
          instruccion: "Mete la cabeza/cara en el agua y cambia a una posición recta bocabajo, brazos rectos hacia delante, mirando hacia abajo, 5 segundos",
          opciones: opcionesApoyo("traqueostomía, infección de oídos o aspiraciones")
        },
        {
          id: "wota1-18",
          numero: 18,
          texto: "Cambio de posición de flotación prono a bipedestación",
          instruccion: "Flexiona las rodillas hacia el pecho, lleva los brazos estirados hacia las rodillas, endereza las piernas hacia el suelo y saca la cabeza del agua",
          opciones: opcionesApoyo("traqueostomía, infección de oídos o aspiraciones")
        },
        {
          id: "wota1-19",
          numero: 19,
          texto: "Rotación Longitudinal — bocarriba a prono a bocarriba (lado 1)",
          instruccion: "Mueve la mano alejada y la cabeza en dirección del giro, date la vuelta sobre la tripa y sigue rodando hasta flotar bocarriba",
          notaEspecial: "Si el ítem 15 obtuvo puntuación de 1, este ítem no puede puntuar más de 1",
          opciones: opcionesApoyo("traqueostomía, infección de oídos o aspiraciones")
        },
        {
          id: "wota1-20",
          numero: 20,
          texto: "Rotación Longitudinal — repetición hacia el otro lado (lado 2)",
          instruccion: "Repite el movimiento del ítem anterior girando hacia el otro lado",
          notaEspecial: "Si el ítem 15 obtuvo puntuación de 1, este ítem no puede puntuar más de 1",
          opciones: opcionesApoyo("traqueostomía, infección de oídos o aspiraciones")
        },
        {
          id: "wota1-21",
          numero: 21,
          texto: "Rotación Combinada — bocabajo a bocarriba (cabeza puede permanecer fuera)",
          instruccion: "Cambia la posición a flotación bocabajo y entonces todo seguido a flotación bocarriba. Puedes tener la cabeza fuera del agua durante toda la tarea",
          opciones: opcionesApoyo(CONTRAINDICACION_GENERAL)
        },
        {
          id: "wota1-22",
          numero: 22,
          texto: "Rotación Combinada — bocarriba a bocabajo con cabeza sumergida, luego de pie",
          instruccion: "Cambia de posición de flotación bocarriba a bocabajo con la cabeza metida en el agua y luego ponte de pie",
          opciones: opcionesApoyo("traqueostomía, infección de oídos o aspiraciones")
        },
        {
          id: "wota1-23",
          numero: 23,
          texto: "Inmersión, tocando el fondo de la piscina con ambas manos",
          instruccion: "Tírate con la cabeza hacia abajo, toca el fondo de la piscina con ambas manos y vuelve arriba (pies no tocan el fondo)",
          opciones: opcionesApoyo("traqueostomía, infección de oídos o riesgo de aspiraciones")
        }
      ]
    },
    {
      id: "d-progresion-natacion",
      nombre: "Sección D: Progresión / Estilos de Natación",
      notaSeccion: "Evaluar solo los estilos que el nadador ya haya aprendido.",
      items: [
        {
          id: "wota1-24",
          numero: 24,
          texto: "Progresión sencilla bocarriba (PS)",
          instruccion: "El nadador progresa sobre su espalda utilizando sencillos movimientos de propulsión, distancia de 20 metros",
          opciones: opcionesNatacion(CONTRAINDICACION_GENERAL)
        },
        {
          id: "wota1-25",
          numero: 25,
          texto: "Estilo libre (Crol)",
          instruccion: "Nada 20 metros a crol. Si nada con la cabeza por encima del agua, la calificación debe ser 0",
          opciones: opcionesNatacion(CONTRAINDICACION_NATACION)
        },
        {
          id: "wota1-26",
          numero: 26,
          texto: "Estilo Espalda",
          instruccion: "Nadar 20 metros sobre la espalda con movimientos recíprocos de los brazos",
          opciones: opcionesNatacion(CONTRAINDICACION_NATACION)
        },
        {
          id: "wota1-27",
          numero: 27,
          texto: "Estilo Braza",
          instruccion: "Nada 20 metros a braza. Si el nadador nada con la cabeza por encima del agua, la calificación debe ser 0",
          opciones: opcionesNatacion(CONTRAINDICACION_NATACION)
        }
      ]
    }
  ],

  // ---------- Función de cálculo ----------
  // Los ítems marcados como "X" (valor null) se EXCLUYEN del total y
  // del máximo posible, no cuentan como 0.
  calcularPuntaje: function (respuestas) {
    let total = 0;
    let itemsEvaluados = 0;
    let itemsExcluidos = 0;
    const subtotalesPorSeccion = {};

    this.secciones.forEach((seccion) => {
      let subtotalSeccion = 0;
      let evaluadosSeccion = 0;

      seccion.items.forEach((item) => {
        const valor = respuestas[item.id];
        if (valor === null) {
          itemsExcluidos++;
          return; // excluido, no cuenta en total ni en máximo posible
        }
        if (typeof valor === "number") {
          subtotalSeccion += valor;
          evaluadosSeccion++;
          itemsEvaluados++;
        }
      });

      subtotalesPorSeccion[seccion.id] = {
        subtotal: subtotalSeccion,
        maximoPosible: evaluadosSeccion * 3
      };
      total += subtotalSeccion;
    });

    const maximoPosible = itemsEvaluados * 3;

    return {
      total,
      maximoPosible,
      porcentaje: maximoPosible > 0 ? Math.round((total / maximoPosible) * 100) : null,
      itemsEvaluados,
      itemsExcluidos,
      subtotalesPorSeccion
    };
  }
};

if (typeof escalasHidroterapia !== "undefined") {
  escalasHidroterapia.push(escalaHalliwickWOTA1);
}

// ---------------------------------------------------------------
// Archivo original: halliwick_wota2.js
// ---------------------------------------------------------------
/* ============================================================
   HALLIWICK WOTA2 — Water Orientation Test Alyn 2
   Especialidad: Hidroterapia
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   27 ítems, puntaje máximo total: 81 (confirmado en el documento
   fuente: "Puntuación Total sobre 81")
   Misma lógica de exclusión que WOTA1: la opción "X - No puede ser
   evaluado" excluye el ítem del total y del máximo posible.
   NOTA: los nombres de función llevan sufijo _wota2 para evitar
   colisión si este archivo se carga junto con halliwick_wota1.js
   en la misma página.
   ============================================================ */

function opcionesAdaptacionMental_wota2() {
  return [
    { valor: 0, label: "0 - Asustado / Llora / Protesta" },
    { valor: 1, label: "1 - Indiferente" },
    { valor: 2, label: "2 - Ligeramente dubitativo, disfruta de algunas actividades" },
    { valor: 3, label: "3 - Feliz, relajado" }
  ];
}

function opcionesRespiracion_wota2() {
  return [
    { valor: null, label: "X - No puede ser evaluado" },
    { valor: 0, label: "0 - No lo ejecuta, o parece capaz pero no coopera" },
    { valor: 1, label: "1 - Baja calidad de ejecución" },
    { valor: 2, label: "2 - Calidad de ejecución media" },
    { valor: 3, label: "3 - Alta calidad de ejecución" }
  ];
}

function opcionesApoyo_wota2() {
  return [
    { valor: null, label: "X - No puede ser evaluado" },
    { valor: 0, label: "0 - No la ejecuta, o parece capaz pero no coopera" },
    { valor: 1, label: "1 - Ejecuta la tarea con apoyo total del instructor" },
    { valor: 2, label: "2 - Ejecuta la tarea con apoyo parcial del instructor" },
    { valor: 3, label: "3 - Independiente, ejecuta la tarea sin apoyo del instructor" }
  ];
}

function opcionesNatacion_wota2() {
  return [
    { valor: null, label: "X - No puede ser evaluado" },
    { valor: 0, label: "0 - No lo ejecuta, o parece capaz pero no coopera" },
    { valor: 1, label: "1 - Nada 20m, haciendo de 3 a 7 paradas para descansar" },
    { valor: 2, label: "2 - Nada 20m, haciendo 1 o 2 paradas para descansar" },
    { valor: 3, label: "3 - Nada 20m de forma continuada, sin paradas para descansar" }
  ];
}

const escalaHalliwickWOTA2 = {
  id: "halliwick-wota2",
  nombre: "Halliwick WOTA2 (Water Orientation Test Alyn 2)",
  especialidad: "hidroterapia",
  descripcion: "Evaluación acuática basada en el Concepto Halliwick (Ruth Tirosh): adaptación mental, control de la respiración, control del equilibrio/movimiento y progresión en el agua.",
  puntajeMaximoDocumentado: 81,
  notaPuntaje: "El puntaje máximo varía según cuántos ítems se marquen como 'X - No evaluable', ya que esos ítems se excluyen del total (no se cuentan ni como 0). Sin exclusiones, el máximo es 81.",

  secciones: [
    {
      id: "a-adaptacion-mental",
      nombre: "Sección A: Adaptación Mental",
      items: [
        {
          id: "wota2-01",
          numero: 1,
          texto: "Adaptación mental general al agua (AM)",
          opciones: opcionesAdaptacionMental_wota2()
        }
      ]
    },
    {
      id: "b-control-respiracion",
      nombre: "Sección B: Control de la Respiración",
      items: [
        {
          id: "wota2-02",
          numero: 2,
          texto: "Soplar burbujas por la boca (más de 5 segundos) (AM)",
          opciones: opcionesRespiracion_wota2()
        },
        {
          id: "wota2-03",
          numero: 3,
          texto: "Soplar burbujas por la nariz (más de 5 segundos) (AM)",
          opciones: opcionesRespiracion_wota2()
        },
        {
          id: "wota2-04",
          numero: 4,
          texto: "Soplar burbujas con la cabeza/cara dentro del agua (más de 5 segundos) (AM)",
          opciones: opcionesRespiracion_wota2()
        },
        {
          id: "wota2-05",
          numero: 5,
          texto: "Exhalación en el agua acompasada con movimiento (10 veces, la cabeza/cara están sumergidas) (AM)",
          opciones: opcionesRespiracion_wota2()
        },
        {
          id: "wota2-06",
          numero: 6,
          texto: "Exhalación alternando nariz y boca (3 ciclos consecutivos, la nariz y la boca están sumergidas) (AM)",
          opciones: opcionesRespiracion_wota2()
        }
      ]
    },
    {
      id: "c-equilibrio-movimiento",
      nombre: "Sección C: Competencias - Control del Equilibrio y Movimiento",
      items: [
        {
          id: "wota2-07",
          numero: 7,
          texto: "Entrada en el agua (sentado en el borde de la piscina, los brazos y cabeza lideran) (AM)",
          opciones: opcionesApoyo_wota2()
        },
        {
          id: "wota2-08",
          numero: 8,
          texto: "Salida del agua (las manos empujan al cuerpo al borde de la piscina, el cuerpo rota para sentarse) (AM)",
          opciones: opcionesApoyo_wota2()
        },
        {
          id: "wota2-09",
          numero: 9,
          texto: "Posición de Silla (Sentarse en el agua 20 segundos) (EEQ) (AM)",
          opciones: opcionesApoyo_wota2()
        },
        {
          id: "wota2-10",
          numero: 10,
          texto: "Progresión por el borde de la piscina usando las manos (3 metros) (AM)",
          opciones: opcionesApoyo_wota2()
        },
        {
          id: "wota2-11",
          numero: 11,
          texto: "Andar a través de la piscina (6 metros) (AM)",
          opciones: opcionesApoyo_wota2()
        },
        {
          id: "wota2-12",
          numero: 12,
          texto: "Saltar a través de la piscina (6 metros) (AM)",
          opciones: opcionesApoyo_wota2()
        },
        {
          id: "wota2-13",
          numero: 13,
          texto: "Saltar y zambullirse dentro y fuera del agua (5 veces) (AM)",
          opciones: opcionesApoyo_wota2()
        },
        {
          id: "wota2-14",
          numero: 14,
          texto: "Cambio de posición de bipedestación a flotación bocarriba (RT)",
          opciones: opcionesApoyo_wota2()
        },
        {
          id: "wota2-15",
          numero: 15,
          texto: "Flotación bocarriba estática durante 5 segundos (EEQ)",
          opciones: opcionesApoyo_wota2()
        },
        {
          id: "wota2-16",
          numero: 16,
          texto: "Cambio de posición de flotación bocarriba a bipedestación (RT)",
          opciones: opcionesApoyo_wota2()
        },
        {
          id: "wota2-17",
          numero: 17,
          texto: "Deslizamiento bocabajo durante 5 segundos (la cabeza está sumergida) (EEQ)",
          opciones: opcionesApoyo_wota2()
        },
        {
          id: "wota2-18",
          numero: 18,
          texto: "Cambio de posición de flotación prono a bipedestación (RT)",
          opciones: opcionesApoyo_wota2()
        },
        {
          id: "wota2-19",
          numero: 19,
          texto: "Rotación longitudinal derecha (bocarriba → prono → bocarriba) (RL)",
          opciones: opcionesApoyo_wota2()
        },
        {
          id: "wota2-20",
          numero: 20,
          texto: "Rotación longitudinal izquierda (bocarriba → prono → bocarriba) (RL)",
          opciones: opcionesApoyo_wota2()
        },
        {
          id: "wota2-21",
          numero: 21,
          texto: "Rotación combinada: bipedestación (o sentado en el borde) → prono → rotación longitudinal sobre la espalda (RC)",
          opciones: opcionesApoyo_wota2()
        },
        {
          id: "wota2-22",
          numero: 22,
          texto: "Rotación combinada: flotación bocarriba → bocabajo → bipedestación (RC)",
          opciones: opcionesApoyo_wota2()
        },
        {
          id: "wota2-23",
          numero: 23,
          texto: "Inmersión — tocar el fondo de la piscina con ambas manos (agua al nivel del pecho, pies separados del fondo) (EHA)",
          opciones: opcionesApoyo_wota2()
        }
      ]
    },
    {
      id: "d-progresion-natacion",
      nombre: "Sección D: Progresión / Estilos de Natación",
      notaSeccion: "Evaluar solo los estilos que el nadador ya haya aprendido.",
      items: [
        {
          id: "wota2-24",
          numero: 24,
          texto: "Progresión sencilla bocarriba (movimientos sencillos de propulsión) (PS)",
          opciones: opcionesNatacion_wota2()
        },
        {
          id: "wota2-25",
          numero: 25,
          texto: "Estilo Libre",
          opciones: opcionesNatacion_wota2()
        },
        {
          id: "wota2-26",
          numero: 26,
          texto: "Estilo espalda (recíproco)",
          opciones: opcionesNatacion_wota2()
        },
        {
          id: "wota2-27",
          numero: 27,
          texto: "Estilo Braza",
          instruccion: "Si el nadador nada con la cabeza por encima del agua, la calificación debe ser 0 (misma regla confirmada para WOTA1).",
          opciones: opcionesNatacion_wota2()
        }
      ]
    }
  ],

  // ---------- Función de cálculo ----------
  // Los ítems marcados como "X" (valor null) se EXCLUYEN del total y
  // del máximo posible, no cuentan como 0. Idéntica lógica a WOTA1.
  calcularPuntaje: function (respuestas) {
    let total = 0;
    let itemsEvaluados = 0;
    let itemsExcluidos = 0;
    const subtotalesPorSeccion = {};

    this.secciones.forEach((seccion) => {
      let subtotalSeccion = 0;
      let evaluadosSeccion = 0;

      seccion.items.forEach((item) => {
        const valor = respuestas[item.id];
        if (valor === null) {
          itemsExcluidos++;
          return;
        }
        if (typeof valor === "number") {
          subtotalSeccion += valor;
          evaluadosSeccion++;
          itemsEvaluados++;
        }
      });

      subtotalesPorSeccion[seccion.id] = {
        subtotal: subtotalSeccion,
        maximoPosible: evaluadosSeccion * 3
      };
      total += subtotalSeccion;
    });

    const maximoPosible = itemsEvaluados * 3;

    return {
      total,
      maximoPosible,
      porcentaje: maximoPosible > 0 ? Math.round((total / maximoPosible) * 100) : null,
      itemsEvaluados,
      itemsExcluidos,
      subtotalesPorSeccion
    };
  }
};

if (typeof escalasHidroterapia !== "undefined") {
  escalasHidroterapia.push(escalaHalliwickWOTA2);
}

// ---------------------------------------------------------------
// Archivo original: hydrophysio_outcome_scale.js
// ---------------------------------------------------------------
/* ============================================================
   HYDROPHYSIO OUTCOME SCALE
   Especialidad: Hidroterapia
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   Protocolo de medición de resultados para rehabilitación en cinta
   de correr subacuática (underwater treadmill). No es una escala de
   suma de puntos como las demás — es un registro de sesión
   (parámetros de configuración del equipo + monitoreo clínico) más
   una escala de desempeño funcional de 0 a 4, aplicable a cualquier
   tipo de paciente (ortopédico, neurológico, geriátrico, deportivo).
   ============================================================ */

const escalaHydroPhysio = {
  id: "hydrophysio-outcome-scale",
  nombre: "HydroPhysio Outcome Scale",
  especialidad: "hidroterapia",
  descripcion: "Protocolo de medición de resultados clínicos para rehabilitación en cinta de correr subacuática, evaluando tolerancia hemodinámica, cinemática de la marcha y descarga de peso.",

  // ---------- Niveles de inmersión y % de descarga de peso corporal ----------
  nivelesInmersion: [
    { id: "tobillo", texto: "Tobillo / Pantorrilla", descripcion: "Mínima descarga, alta resistencia" },
    { id: "rodilla", texto: "Rodilla / Muslo", descripcion: "Descarga leve, ideal para cuádriceps" },
    { id: "trocanter", texto: "Trocánter / Cadera", descripcion: "Descarga del 40-50% del peso corporal" },
    { id: "ombligo-xifoides", texto: "Ombligo / Xifoides", descripcion: "Descarga del 60-70% del peso corporal, ideal para dolor agudo" }
  ],

  direccionesMarcha: ["Hacia Adelante", "En Reversa (Retro-marcha)", "Lateral"],

  temperaturaRecomendada: { minimo: 28, maximo: 32, unidad: "°C" },

  // ---------- Escala de Respuesta/Desempeño Funcional (0-4) ----------
  opcionesDesempeno: [
    { valor: 0, label: "0 - Intolerancia/Dolor Alto: no coordina el ciclo de marcha, kinesiofobia extrema o dolor agudo que obliga a suspender" },
    { valor: 1, label: "1 - Patrón Asistido/Marcha Deficiente: sujeción máxima de barras laterales, arrastra los pies, asimetría severa" },
    { valor: 2, label: "2 - Marcha Adaptada con Apoyo: camina continuo pero depende del soporte de barras laterales" },
    { valor: 3, label: "3 - Marcha Independiente Básica: camina sin sujetarse a velocidad baja/moderada, buena alineación de tronco" },
    { valor: 4, label: "4 - Marcha Funcional Avanzada: simetría perfecta, braceo coordinado, tolera cambios de velocidad y jets sin perder equilibrio" }
  ],

  // ---------- Checklist de calidad de movimiento (observacional, no puntuado) ----------
  checklistCalidadMovimiento: [
    { id: "asimetria-paso", texto: "Asimetría del Paso: apoya más un lado o pasos de diferente longitud" },
    { id: "deficit-flexion", texto: "Déficit de Flexión: no dobla adecuadamente rodilla/cadera en fase de balanceo" },
    { id: "contacto-inicial-deficiente", texto: "Contacto Inicial Deficiente: apoya primero la punta del pie en vez del talón" },
    { id: "inestabilidad-tronco", texto: "Inestabilidad de Tronco: se tambalea lateralmente o se inclina hacia adelante" },
    { id: "signos-fatiga", texto: "Signos de Fatiga: compensaciones musculares notorias al pasar los minutos" }
  ],

  // ---------- Registro de sesión (parámetros + monitoreo clínico) ----------
  // No se "calcula" un puntaje total — es un registro estructurado por sesión,
  // útil para comparar evolución basal vs. sesiones siguientes
  crearRegistroSesion: function (datos) {
    return {
      configuracion: {
        nivelInmersion: datos.nivelInmersion ?? null,
        temperaturaAgua: datos.temperaturaAgua ?? null,
        direccionMarcha: datos.direccionMarcha ?? null,
        jetsResistencia: datos.jetsResistencia ?? { activo: false, nivel: null },
        velocidadBanda: datos.velocidadBanda ?? null,
        tiempoMarchaEfectivo: datos.tiempoMarchaEfectivo ?? null
      },
      monitoreoClinico: {
        frecuenciaCardiacaPre: datos.frecuenciaCardiacaPre ?? null,
        frecuenciaCardiacaDurante: datos.frecuenciaCardiacaDurante ?? null,
        frecuenciaCardiacaPost: datos.frecuenciaCardiacaPost ?? null,
        dolorEVA_tierra_pre: datos.dolorEVA_tierra_pre ?? null,
        dolorEVA_tierra_post: datos.dolorEVA_tierra_post ?? null,
        dolorEVA_agua: datos.dolorEVA_agua ?? null,
        esfuerzoBorg: datos.esfuerzoBorg ?? null // referencia: escala Borg 6-20 ya construida en el banco
      },
      desempenoFuncional: datos.nivelDesempeno ?? null, // 0-4
      checklistObservado: datos.checklistObservado ?? [] // array de ids del checklist marcados
    };
  },

  // ---------- Interpretación del nivel de esfuerzo Borg (referencia) ----------
  interpretarBorgRecomendado: function (valorBorg) {
    if (valorBorg === null || valorBorg === undefined) return null;
    const dentroDeRangoIdeal = valorBorg >= 11 && valorBorg <= 14;
    return {
      valor: valorBorg,
      dentroDeRangoIdeal,
      nota: dentroDeRangoIdeal
        ? "Dentro del rango ideal (11-14) para rehabilitación aeróbica moderada"
        : "Fuera del rango ideal (11-14) recomendado para rehabilitación aeróbica moderada — revisar intensidad de la sesión"
    };
  },

  // ---------- Comparación evolutiva entre sesiones (basal vs. seguimiento) ----------
  compararSesiones: function (registroBasal, registroSeguimiento) {
    const cambioDesempeno = (registroSeguimiento.desempenoFuncional ?? 0) - (registroBasal.desempenoFuncional ?? 0);
    const cambioDolorAgua = (registroSeguimiento.monitoreoClinico.dolorEVA_agua ?? 0) - (registroBasal.monitoreoClinico.dolorEVA_agua ?? 0);

    return {
      cambioDesempenoFuncional: cambioDesempeno,
      interpretacionDesempeno: cambioDesempeno > 0 ? "Progreso" : cambioDesempeno === 0 ? "Estable" : "Regresión",
      cambioDolorAgua,
      interpretacionDolor: cambioDolorAgua < 0 ? "Reducción del dolor" : cambioDolorAgua === 0 ? "Dolor estable" : "Aumento del dolor"
    };
  }
};

if (typeof escalasHidroterapia !== "undefined") {
  escalasHidroterapia.push(escalaHydroPhysio);
}

// ---------------------------------------------------------------
// Archivo original: swim.js
// ---------------------------------------------------------------
/* ============================================================
   SWIM — Swim Water Independence Scale (SWIS)
   Especialidad: Hidroterapia
   Listo para pegar dentro del banco de escalas de pruebas.html
   ============================================================
   11 ítems, cada uno puntuado con la misma escala tipo FIM adaptada
   al medio acuático (1 a 7). Puntaje mínimo 11, máximo 77.
   ============================================================ */

// Escala FIM adaptada (1-7), común a los 11 ítems del SWIM
function opcionesFIM_Acuatico() {
  return [
    { valor: 1, label: "1 - Dependencia Total: realiza <25% del esfuerzo o requiere dos terapeutas" },
    { valor: 2, label: "2 - Asistencia Máxima: realiza 25%-49% del esfuerzo; el terapeuta sostiene casi todo el cuerpo" },
    { valor: 3, label: "3 - Asistencia Moderada: realiza 50%-74% del esfuerzo" },
    { valor: 4, label: "4 - Asistencia Mínima (Contacto): realiza ≥75% del esfuerzo; el terapeuta solo da estabilidad táctil" },
    { valor: 5, label: "5 - Supervisión / Preparación: solo requiere indicaciones verbales, pistas visuales o cercanía del terapeuta sin tocarlo" },
    { valor: 6, label: "6 - Independencia Modificada: requiere más tiempo, material adaptado o implica riesgos" },
    { valor: 7, label: "7 - Independencia Completa: realiza la tarea de forma segura, sin ayuda y en tiempo normal" }
  ];
}

const escalaSWIM = {
  id: "swim-water-independence-scale",
  nombre: "Swim Water Independence Scale (SWIS / SWIM)",
  especialidad: "hidroterapia",
  descripcion: "Cuestionario que evalúa la independencia funcional en el medio acuático, con escala de puntuación tipo FIM (1-7) adaptada al agua.",
  puntajeMinimo: 11,
  puntajeMaximo: 77,

  items: [
    {
      id: "swim-01",
      numero: 1,
      texto: "Adaptación General",
      descripcion: "Reacción al agua, inmersión del torso y control de la ansiedad.",
      opciones: opcionesFIM_Acuatico()
    },
    {
      id: "swim-02",
      numero: 2,
      texto: "Entrada y Salida",
      descripcion: "Capacidad para ingresar y egresar de la piscina de forma segura.",
      opciones: opcionesFIM_Acuatico()
    },
    {
      id: "swim-03",
      numero: 3,
      texto: "Control Respiratorio",
      descripcion: "Habilidad para soplar burbujas, sumergir cara y abrir ojos.",
      opciones: opcionesFIM_Acuatico()
    },
    {
      id: "swim-04",
      numero: 4,
      texto: "Flotación Supina",
      descripcion: "Sostén boca arriba en el agua (control del empuje y alineación).",
      opciones: opcionesFIM_Acuatico()
    },
    {
      id: "swim-05",
      numero: 5,
      texto: "Flotación Prona",
      descripcion: "Sostén boca abajo con control de la vía aérea.",
      opciones: opcionesFIM_Acuatico()
    },
    {
      id: "swim-06",
      numero: 6,
      texto: "Propulsión / Chapoteo",
      descripcion: "Movimiento activo de extremidades para generar desplazamiento.",
      opciones: opcionesFIM_Acuatico()
    },
    {
      id: "swim-07",
      numero: 7,
      texto: "Inmersión Total",
      descripcion: "Capacidad de sumergir la cabeza por completo voluntariamente.",
      opciones: opcionesFIM_Acuatico()
    },
    {
      id: "swim-08",
      numero: 8,
      texto: "Control Postural / Rotación",
      descripcion: "Giros (sagital/transversal) y retorno a una posición segura.",
      opciones: opcionesFIM_Acuatico()
    },
    {
      id: "swim-09",
      numero: 9,
      texto: "Progreso en la Pared",
      descripcion: "Desplazamiento lateral autónomo sujeto del borde.",
      opciones: opcionesFIM_Acuatico()
    },
    {
      id: "swim-10",
      numero: 10,
      texto: "Bipedestación (Estar de pie)",
      descripcion: "Mantenimiento del equilibrio vertical sin apoyos fijos.",
      opciones: opcionesFIM_Acuatico()
    },
    {
      id: "swim-11",
      numero: 11,
      texto: "Control de Material Adaptado",
      descripcion: "Sujeción y tracción en cuerdas, barras o corcheras.",
      opciones: opcionesFIM_Acuatico()
    }
  ],

  // ---------- Clasificación del nivel de independencia ----------
  clasificar: function (total) {
    if (total >= 66) return "Independencia (Completa o Modificada)";
    if (total >= 44) return "Dependencia Moderada / Leve (requiere supervisión o mínima asistencia)";
    if (total >= 22) return "Dependencia Severa (requiere asistencia física moderada o máxima)";
    return "Dependencia Total (asistencia total en todas las actividades)"; // 21-11
  },

  // ---------- Función de cálculo ----------
  calcularPuntaje: function (respuestas) {
    let total = 0;
    let itemsRespondidos = 0;

    this.items.forEach((item) => {
      const valor = respuestas[item.id];
      if (typeof valor === "number") {
        total += valor;
        itemsRespondidos++;
      }
    });

    return {
      total,
      puntajeMinimo: this.puntajeMinimo,
      puntajeMaximo: this.puntajeMaximo,
      itemsRespondidos,
      porcentaje: Math.round(((total - this.puntajeMinimo) / (this.puntajeMaximo - this.puntajeMinimo)) * 100),
      clasificacion: itemsRespondidos === this.items.length ? this.clasificar(total) : null
    };
  }
};

if (typeof escalasHidroterapia !== "undefined") {
  escalasHidroterapia.push(escalaSWIM);
}
