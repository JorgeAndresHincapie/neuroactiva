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
