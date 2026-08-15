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
