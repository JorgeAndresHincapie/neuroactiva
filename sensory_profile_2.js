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
