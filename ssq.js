/* ============================================================
   SYDNEY SWALLOW QUESTIONNAIRE (SSQ)
   Especialidad: Terapia del Lenguaje
   ============================================================
   17 ítems, escala analógica visual (VAS) digital 0-100mm cada uno.
   Rango total: 0-1700 (17 × 100).
   ============================================================ */

const escalaSSQ = {
  id: "ssq",
  nombre: "Sydney Swallow Questionnaire (SSQ)",
  especialidad: "terapia-lenguaje",
  descripcion: "Cuestionario de autoinforme analógico-visual (PROM) ultra-sensible para disfagia percibida por el paciente.",
  puntajeMaximo: 1700,

  items: [
    { id: "ssq_1", texto: "Dificultad con líquidos finos" },
    { id: "ssq_2", texto: "Dificultad con sólidos duros" },
    { id: "ssq_3", texto: "Tiempo para terminar una comida" },
    { id: "ssq_4", texto: "Presencia de tos al comer/beber" },
    { id: "ssq_5", texto: "Sensación de comida atorada en la garganta" },
    { id: "ssq_6", texto: "Frustración al comer" },
    { id: "ssq_7", texto: "Ítem VAS adicional 7" },
    { id: "ssq_8", texto: "Ítem VAS adicional 8" },
    { id: "ssq_9", texto: "Ítem VAS adicional 9" },
    { id: "ssq_10", texto: "Ítem VAS adicional 10" },
    { id: "ssq_11", texto: "Ítem VAS adicional 11" },
    { id: "ssq_12", texto: "Ítem VAS adicional 12" },
    { id: "ssq_13", texto: "Ítem VAS adicional 13" },
    { id: "ssq_14", texto: "Ítem VAS adicional 14" },
    { id: "ssq_15", texto: "Ítem VAS adicional 15" },
    { id: "ssq_16", texto: "Ítem VAS adicional 16" },
    { id: "ssq_17", texto: "Ítem VAS adicional 17" }
  ],
  notaAlcance: "El documento fuente da 6 reactivos clave con texto explícito; los 17 ítems totales existen en el instrumento oficial — los 11 restantes se dejan como placeholders VAS genéricos hasta contar con el listado completo del manual.",

  clasificar: function (total) {
    if (total < 200) return "Función deglutoria normal/fisiológica";
    if (total <= 500) return "Disfagia percibida leve";
    if (total <= 1000) return "Disfagia moderada: alto impacto en la calidad de vida";
    return "Disfagia severa auto-percibida: alerta para cribado urgente instrumental (DOSS/VFSS)";
  },

  calcularPuntaje: function (respuestas) {
    const total = this.items.reduce((acc, it) => acc + (typeof respuestas[it.id] === "number" ? respuestas[it.id] : 0), 0);
    return { total, puntajeMaximo: this.puntajeMaximo, clasificacion: this.clasificar(total) };
  }
};

if (typeof escalasTerapiaLenguaje !== "undefined") {
  escalasTerapiaLenguaje.push(escalaSSQ);
}
